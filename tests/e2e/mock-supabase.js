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
    const setSession = u => put(KEY, { access_token: 'mock-access', refresh_token: 'mock-refresh', expires_at: 4e9, token_type: 'bearer', user: u });
    const users = () => get('mock:users', {});
    const saveUser = u => { const all = users(); all[u.id] = u; put('mock:users', all) };
    const notify = (ev, s) => listeners.forEach(f => f(ev, s));
    const auth = {
      async getSession() { return { data: { session: session() }, error: null } },
      onAuthStateChange(cb) { listeners.push(cb); setTimeout(() => cb('INITIAL_SESSION', session()), 0); return { data: { subscription: { unsubscribe() {} } } } },
      async signInWithOAuth({ provider, options }) {
        window.__lastRedirectTo = options.redirectTo; put('mock:lastOAuth', { provider, scopes: options.scopes || null, redirectTo: options.redirectTo });
        const c = get(CFG, {}); let u = c.loginAs; const url = new URL(options.redirectTo);
        if (!u) { url.searchParams.set('error', 'access_denied'); url.searchParams.set('error_description', 'Signups not allowed for this instance') }
        else { u = Object.assign({}, u, { identities: [{ provider, identity_data: { email: u.email }, created_at: new Date().toISOString() }] }); c.loginAs = u; put(CFG, c); url.searchParams.set('code', 'mock') }
        setTimeout(() => { location.href = url.href }, 30);
        return { data: { url: url.href }, error: null };
      },
      async signInWithOtp({ email, options }) {
        const c = get(CFG, {}); if (c.fail) return { data: null, error: { message: 'Mock network error' } };
        const last = get('mock:otpAt', 0); if (Date.now() - last < 2000) return { data: null, error: { message: 'For security purposes, you can only request this after 60 seconds.' } };
        put('mock:otpAt', Date.now()); put('mock:otp', { email: email.toLowerCase(), code: '123456', redirect: options && options.emailRedirectTo });
        return { data: {}, error: null };
      },
      async verifyOtp({ email, token, type }) {
        const o = get('mock:otp', null);
        if (!o || o.email !== email.toLowerCase() || token !== o.code || type !== 'email') return { data: {}, error: { message: 'Token has expired or is invalid' } };
        const known = Object.values(users()).find(u => u.email === o.email);
        const u = known || { id: 'u-' + o.email.replace(/[^a-z0-9]/g, ''), email: o.email, created_at: new Date().toISOString(), user_metadata: {}, identities: [{ provider: 'email', identity_data: { email: o.email }, created_at: new Date().toISOString() }] };
        saveUser(u); setSession(u); localStorage.removeItem('mock:otp'); notify('SIGNED_IN', session());
        return { data: { user: u, session: session() }, error: null };
      },
      async signInWithPasskey() {
        const pk = get('mock:passkeys', []); if (!pk.length) return { data: {}, error: { message: 'webauthn_credential_not_found', code: 'webauthn_credential_not_found' } };
        const u = users()[pk[0].user_id]; setSession(u); notify('SIGNED_IN', session());
        return { data: { user: u, session: session() }, error: null };
      },
      async registerPasskey() {
        const s = session(); if (!s) return { data: null, error: { message: 'not signed in' } };
        saveUser(s.user); const pk = get('mock:passkeys', []); const k = { id: 'pk' + (pk.length + 1), user_id: s.user.id, friendly_name: 'Chrome on test device', created_at: new Date().toISOString() };
        pk.push(k); put('mock:passkeys', pk); return { data: k, error: null };
      },
      passkey: {
        async list() { const s = session(); return { data: get('mock:passkeys', []).filter(k => s && k.user_id === s.user.id), error: null } },
        async delete({ passkeyId }) { put('mock:passkeys', get('mock:passkeys', []).filter(k => k.id !== passkeyId)); return { data: null, error: null } },
        async update({ passkeyId, friendlyName }) { put('mock:passkeys', get('mock:passkeys', []).map(k => k.id === passkeyId ? Object.assign(k, { friendly_name: friendlyName }) : k)); return { data: null, error: null } }
      },
      async updateUser({ data }) {
        const s = session(); if (!s) return { data: null, error: { message: 'not signed in' } };
        const u = Object.assign({}, s.user, { user_metadata: Object.assign({}, s.user.user_metadata, data) }); setSession(u); saveUser(u);
        return { data: { user: u }, error: null };
      },
      async signOut() { localStorage.removeItem(KEY); notify('SIGNED_OUT', null); return { error: null } }
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
