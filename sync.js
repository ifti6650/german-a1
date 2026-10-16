// Deutsch A1 · cloud sync (Supabase)
// - Google login button in the top bar
// - window.A1.record(...)  saves one answer + updates the mistake list
// - window.A1.saveTest(...) saves a test result
// - keeps the existing browser progress (Wortschatz cards, 8-week plan) in sync across devices
// Works offline / logged out: answers are queued in this browser and uploaded after login.
(function () {
  const SB_URL = 'https://gvftmsctaxyllmtiztil.supabase.co';
  const SB_KEY = 'sb_publishable_oEN1QiCiC8pTHLoCxWW2HA_2LvHaNgE'; // public key, safe in the browser (RLS protects the data)
  const LIB = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.110.5/dist/umd/supabase.min.js';
  const SYNC_KEYS = ['wz:v2', 'known', 'a1plan:v1', 'a1:lessons', 'a1:prefs', 'a1:writing'];   // localStorage keys mirrored to app_state
  const QKEY = 'a1:queue', TSKEY = 'a1:ts';

  const ls = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v) } catch (e) { return d } },
    set(k, v) { try { rawSet.call(localStorage, k, JSON.stringify(v)) } catch (e) {} }
  };
  const rawSet = Storage.prototype.setItem;

  let sb = null, user = null, pushTimer = null, applyingRemote = false;
  const listeners = [];
  const A1 = window.A1 = {
    get user() { return user },
    get client() { return sb },
    onChange(fn) { listeners.push(fn); fn(user) },
    record, saveTest, login, logout, flush,
    get v2() { return v2 !== false },   // true unless the 002 migration is missing
    lessons: {                          // lesson progress, stored in 'a1:lessons' (synced via app_state)
      all() { return ls.get('a1:lessons', {}) },
      get(n) { return ls.get('a1:lessons', {})[n] || { sections: {} } },
      mark(n, section, extra) {
        const all = ls.get('a1:lessons', {}); const l = all[n] = all[n] || { sections: {} };
        l.sections[section] = Object.assign({ at: new Date().toISOString() }, l.sections[section] || {}, extra || {});
        l.last = new Date().toISOString(); l.lastSection = section;
        localStorage.setItem('a1:lessons', JSON.stringify(all));
        return l;
      },
      visit(n, section) { const all = ls.get('a1:lessons', {}); const l = all[n] = all[n] || { sections: {} }; l.last = new Date().toISOString(); l.lastSection = section || l.lastSection; localStorage.setItem('a1:lessons', JSON.stringify(all)) }
    },
    ready: null
  };
  let v2 = (Date.now() - (ls.get('a1:v2no', 0) || 0) < 6 * 3600e3) ? false : null; // re-check for migration 002 every 6 h

  // ---------- local timestamps for synced keys ----------
  function stamps() { return ls.get(TSKEY, {}) }
  function stamp(k, t) { const s = stamps(); s[k] = t || new Date().toISOString(); ls.set(TSKEY, s) }

  // Watch writes to the synced keys (the existing pages call localStorage.setItem)
  Storage.prototype.setItem = function (k, v) {
    rawSet.call(this, k, v);
    // Only stamp after this browser has pulled once, so a fresh device never overwrites the cloud copy
    if (this === localStorage && SYNC_KEYS.includes(k) && !applyingRemote && ls.get('a1:synced', null)) { stamp(k); schedulePush() }
  };

  // ---------- answer queue ----------
  function queue() { return ls.get(QKEY, []) }
  function enqueue(job) { const q = queue(); q.push(job); ls.set(QKEY, q.slice(-2000)) }

  function record(a) {
    // a = { item, lesson, kind, correct, answer, expected, prompt, source }
    const job = { t: 'answer', at: new Date().toISOString(), a };
    enqueue(job); flush();
  }
  function saveTest(r) {
    // r = { id, title, score, max, seconds, wrong: [...] }
    enqueue({ t: 'test', at: new Date().toISOString(), r }); flush();
  }

  let flushing = false;
  async function flush() {
    if (!sb || !user || flushing || !navigator.onLine) return;
    flushing = true;
    try {
      let q = queue();
      while (q.length) {
        const job = q[0];
        let error = null;
        if (job.t === 'answer') {
          const a = job.a;
          const base = {
            p_item_id: String(a.item).slice(0, 200), p_lesson: a.lesson ?? null, p_kind: a.kind || 'vocab',
            p_correct: !!a.correct, p_answer: a.answer == null ? null : String(a.answer).slice(0, 2000), p_expected: a.expected ?? null,
            p_prompt: a.prompt ?? null, p_source: a.source || 'practice'
          };
          if (v2 !== false) {
            ({ error } = await sb.rpc('record_answer_v2', Object.assign({}, base, { p_topic: a.topic ?? null, p_skill: a.skill ?? null, p_explanation: a.explanation ?? null, p_test_id: a.testId ?? null })));
            if (error && (error.code === 'PGRST202' || /record_answer_v2/.test(error.message))) { v2 = false; ls.set('a1:v2no', Date.now()); error = null; ({ error } = await sb.rpc('record_answer', base)) }
            else if (!error) v2 = true;
          } else ({ error } = await sb.rpc('record_answer', base));
        } else if (job.t === 'test') {
          const r = job.r;
          const row = { test_id: r.id, title: r.title || null, score: r.score, max_score: r.max, duration_sec: r.seconds ?? null, wrong_items: r.wrong || [], created_at: job.at };
          ({ error } = await sb.from('test_results').insert(Object.assign({ test_kind: r.kind || null, breakdown: r.breakdown || {}, answers: r.answers || [] }, row)));
          if (error && /test_kind|breakdown|answers|column/.test(error.message)) ({ error } = await sb.from('test_results').insert(row)); // before migration 002
        }
        if (error) { console.warn('[A1 sync]', error.message); break }
        q = queue(); q.shift(); ls.set(QKEY, q);
      }
    } finally { flushing = false; paint() }
  }

  // ---------- app_state sync (existing localStorage progress) ----------
  async function pull() {
    const { data, error } = await sb.from('app_state').select('key,value,updated_at').in('key', SYNC_KEYS);
    if (error) { console.warn('[A1 sync]', error.message); return }
    const local = stamps(); let changed = false;
    const remote = Object.fromEntries((data || []).map(r => [r.key, r]));
    for (const k of SYNC_KEYS) {
      const r = remote[k];
      const hasLocal = localStorage.getItem(k) != null;
      if (r && (!hasLocal || !local[k] || r.updated_at > local[k])) {
        applyingRemote = true;
        try { rawSet.call(localStorage, k, JSON.stringify(r.value)) } finally { applyingRemote = false }
        stamp(k, r.updated_at); changed = true;
      } else if (hasLocal && (!r || (local[k] && local[k] > r.updated_at))) {
        if (!local[k]) stamp(k);
        schedulePush(0);
      }
    }
    ls.set('a1:synced', user.id);
    // Reload once so the page shows the newer progress from another device
    if (changed && !sessionStorage.getItem('a1:pulled')) { sessionStorage.setItem('a1:pulled', '1'); location.reload() }
  }
  function schedulePush(ms = 1500) { clearTimeout(pushTimer); pushTimer = setTimeout(push, ms) }
  async function push() {
    if (!sb || !user) return;
    const s = stamps();
    const rows = SYNC_KEYS.filter(k => localStorage.getItem(k) != null).map(k => ({
      user_id: user.id, key: k, value: ls.get(k, null), updated_at: s[k] || new Date().toISOString()
    }));
    if (!rows.length) return;
    const { error } = await sb.from('app_state').upsert(rows, { onConflict: 'user_id,key' });
    if (error) console.warn('[A1 sync]', error.message);
  }

  // ---------- login UI ----------
  // After Google sign-in the learner lands inside the portal (dashboard, or the page they originally asked for).
  // `next` must be a page of this site (e.g. "practice.html?topic=x"); anything else falls back to the dashboard.
  function login(next) {
    if (!sb) return Promise.reject(new Error('offline'));
    const safe = typeof next === 'string' && /^[a-z0-9-]+\.html(?:[?#][^\s]*)?$/i.test(next) ? next : 'dashboard.html';
    const redirectTo = new URL(safe, location.href).href;
    return sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo } });
  }
  async function logout() {
    await flush();                      // upload pending answers before the session ends
    if (sb) await sb.auth.signOut();
    sessionStorage.removeItem('a1:pulled'); try { localStorage.removeItem('a1:synced') } catch (e) {}
  }

  let pill;
  function mountPill() {
    if (pill) return;
    pill = document.createElement('span'); pill.className = 'a1-acct';
    const css = document.createElement('style');
    css.textContent = `.a1-acct{display:inline-flex;align-items:center;gap:6px;font:600 13px/1 Inter,system-ui,sans-serif}
.a1-acct button,.a1-acct a{font:inherit;cursor:pointer;border:1px solid var(--line,#e0e3ee);background:var(--paper,#fff);color:var(--ink,#1b1e2b);padding:6px 10px;border-radius:8px;text-decoration:none}
.a1-acct button.pri{background:var(--accent,#5363cf);border-color:var(--accent,#5363cf);color:#fff}
.a1-acct .q{color:var(--muted,#5b6072);font-weight:500}
.a1-acct.float{position:fixed;right:12px;bottom:12px;z-index:50;box-shadow:0 2px 10px rgba(0,0,0,.12);border-radius:10px;background:var(--paper,#fff);padding:4px}`;
    document.head.appendChild(css);
    if (document.body.classList.contains('lp')) return;                 // public website: own sign-in buttons
    const slot = document.getElementById('sh-sync');                     // learner portal: status in the top header
    const host = document.querySelector('nav.top .in');
    if (slot) { pill.dataset.portal = '1'; slot.appendChild(pill) } else if (host) host.appendChild(pill); else { pill.classList.add('float'); document.body.appendChild(pill) }
    paint();
  }
  function paint() {
    if (!pill) return;
    const n = queue().length;
    if (pill.dataset.portal) { // the shell has the account menu; only show what still has to upload
      pill.innerHTML = n ? `<span class="sh-sync off" title="Saved in this browser; uploads automatically"><i></i>${n} to sync</span>` : (sb && user ? '<span class="sh-sync" title="All progress is saved to your account"><i></i><span class="ui-sr">All progress </span>Synced</span>' : '');
      return;
    }
    if (!sb) { pill.innerHTML = n ? `<span class="q" title="Saved in this browser, uploads when online">${n} unsynced</span>` : ''; return }
    if (!user) {
      pill.innerHTML = `${n ? `<span class="q">${n} unsynced</span>` : ''}<button class="pri" data-a1="in">Sign in with Google</button>`;
    } else {
      const name = (user.user_metadata && (user.user_metadata.given_name || user.user_metadata.name)) || user.email;
      pill.innerHTML = `<a href="progress.html" title="Your progress">📈 ${esc(String(name).split(' ')[0])}</a>${n ? `<span class="q">${n} pending</span>` : ''}<button data-a1="out" title="Sign out">Sign out</button>`;
    }
  }
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-a1]'); if (!b) return;
    if (b.dataset.a1 === 'in') login(); else logout();
  });

  // ---------- boot ----------
  function loadLib() {
    return new Promise((res, rej) => {
      if (window.supabase) return res();
      const s = document.createElement('script'); s.src = LIB; s.onload = res; s.onerror = rej; document.head.appendChild(s);
    });
  }
  A1.ready = (async () => {
    if (document.readyState === 'loading') await new Promise(r => document.addEventListener('DOMContentLoaded', r));
    await new Promise(r => setTimeout(r)); mountPill();   // after the portal shell has created its header slot
    try { await loadLib() } catch (e) { paint(); return } // offline: keep working locally
    sb = window.supabase.createClient(SB_URL, SB_KEY, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'pkce' } });
    const { data } = await sb.auth.getSession();
    user = data.session ? data.session.user : null;
    sb.auth.onAuthStateChange((_ev, session) => {
      const was = user && user.id; user = session ? session.user : null;
      paint(); listeners.forEach(f => { try { f(user) } catch (e) {} });
      if (user && user.id !== was) { pull().then(flush) }
    });
    paint(); listeners.forEach(f => { try { f(user) } catch (e) {} });
    if (user) { await pull(); flush() }
  })();
  window.addEventListener('online', flush);
})();
