// Test double for supabase-js (served instead of the CDN bundle in browser tests). NOT used by the live site.
// State lives in localStorage so it survives page loads:
//   mock:cfg  { loginAs: <user> | null, fail: bool }   – loginAs = the Google account that "signs in"; null simulates closed sign-ups
//   mock:db   { attempts, review_items, test_results, app_state }   – rows; every query is limited to the signed-in user (like RLS)
(function () {
  const KEY = 'sb-gvftmsctaxyllmtiztil-auth-token', DB = 'mock:db', CFG = 'mock:cfg';
  const get = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v) } catch (e) { return d } };
  const put = (k, v) => localStorage.setItem(k, JSON.stringify(v));
  const db = () => Object.assign({ attempts: [], review_items: [], test_results: [], app_state: [] }, get(DB, {}));
  const session = () => { const s = get(KEY, null); return s && s.refresh_token ? s : null };
  const rid = () => Math.random().toString(36).slice(2, 10);
  function createClient() {
    const listeners = [];
    const sp = new URLSearchParams(location.search);
    if (sp.get('code') === 'mock') { // PKCE code exchange
      const u = get(CFG, {}).loginAs; if (u) put(KEY, { access_token: 'mock-access', refresh_token: 'mock-refresh', expires_at: 4e9, token_type: 'bearer', user: u });
      sp.delete('code'); history.replaceState(null, '', location.pathname + (sp.toString() ? '?' + sp : '') + location.hash);
    }
    const auth = {
      async getSession() { return { data: { session: session() }, error: null } },
      onAuthStateChange(cb) { listeners.push(cb); setTimeout(() => cb('INITIAL_SESSION', session()), 0); return { data: { subscription: { unsubscribe() {} } } } },
      async signInWithOAuth({ options }) {
        window.__lastRedirectTo = options.redirectTo;
        const u = get(CFG, {}).loginAs; const url = new URL(options.redirectTo);
        if (!u) { url.searchParams.set('error', 'access_denied'); url.searchParams.set('error_description', 'Signups not allowed for this instance') }
        else url.searchParams.set('code', 'mock');
        setTimeout(() => { location.href = url.href }, 30);
        return { data: { url: url.href }, error: null };
      },
      async signOut() { localStorage.removeItem(KEY); listeners.forEach(f => f('SIGNED_OUT', null)); return { error: null } }
    };
    const me = () => { const s = session(); return s && s.user.id };
    function from(table) {
      const filters = []; let ord = null, lim = null, op = 'select', payload = null;
      const run = () => {
        const c = get(CFG, {}); if (c.fail) return { data: null, error: { message: 'Mock network error' } };
        const d = db(); d[table] = d[table] || []; const uid = me(); if (!uid) return { data: null, error: { message: 'JWT missing' } };
        if (op === 'insert') { payload.forEach(r => d[table].push(Object.assign({ id: rid(), user_id: uid, created_at: new Date().toISOString() }, r))); put(DB, d); return { data: null, error: null } }
        if (op === 'upsert') { payload.forEach(r => { const i = d[table].findIndex(x => x.user_id === r.user_id && x.key === r.key); if (i >= 0) d[table][i] = Object.assign(d[table][i], r); else d[table].push(Object.assign({}, r)) }); put(DB, d); return { data: null, error: null } }
        let out = d[table].filter(r => r.user_id === uid && filters.every(f => f(r)));
        if (ord) out.sort((a, b) => (a[ord[0]] > b[ord[0]] ? 1 : a[ord[0]] < b[ord[0]] ? -1 : 0) * ord[1]);
        if (lim) out = out.slice(0, lim);
        return { data: out, error: null };
      };
      const b = {
        select() { return b }, in(c, v) { filters.push(r => v.includes(r[c])); return b }, gte(c, v) { filters.push(r => r[c] >= v); return b }, eq(c, v) { filters.push(r => r[c] === v); return b },
        order(c, o) { ord = [c, o && o.ascending === false ? -1 : 1]; return b }, limit(n) { lim = n; return b },
        insert(r) { op = 'insert'; payload = [].concat(r); return b }, upsert(r) { op = 'upsert'; payload = [].concat(r); return b },
        then(res, rej) { return new Promise(r => setTimeout(r, 40)).then(run).then(res, rej) }
      };
      return b;
    }
    async function rpc(name, p) {
      const c = get(CFG, {}); if (c.fail) return { data: null, error: { message: 'Mock network error' } };
      const d = db(); const uid = me(); const now = new Date().toISOString();
      d.attempts.push({ id: rid(), user_id: uid, item_id: p.p_item_id, lesson: p.p_lesson, kind: p.p_kind, correct: p.p_correct, answer: p.p_answer, expected: p.p_expected, prompt: p.p_prompt, source: p.p_source, topic: p.p_topic, skill: p.p_skill, created_at: now });
      let r = d.review_items.find(x => x.user_id === uid && x.item_id === p.p_item_id);
      if (!p.p_correct) {
        if (!r) { r = { id: rid(), user_id: uid, item_id: p.p_item_id, lesson: p.p_lesson, kind: p.p_kind, prompt: p.p_prompt, expected: p.p_expected, topic: p.p_topic, explanation: p.p_explanation, times_wrong: 0, correct_streak: 0, review_count: 0, mastered: false, created_at: now }; d.review_items.push(r) }
        r.times_wrong++; r.correct_streak = 0; r.mastered = false; r.next_review_at = new Date(Date.now() + 600e3).toISOString(); r.last_seen_at = now; r.last_wrong_at = now;
      }
      put(DB, d); return { data: null, error: null };
    }
    return { auth, from, rpc };
  }
  window.supabase = { createClient };
})();
