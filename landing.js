// Deutsch A1 · public website behaviour: header, mobile menu, sign-in dialog, signed-in awareness, example exercise.
(function () {
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const KEY = 'sb-gvftmsctaxyllmtiztil-auth-token';
  const P = new URLSearchParams(location.search);
  const dlg = $('#signin'), msg = $('#siMsg');
  const safeNext = v => (typeof v === 'string' && /^[a-z0-9-]+\.html(?:[?#][^\s]*)?$/i.test(v) && !/^index\.html/i.test(v)) ? v : 'dashboard.html';
  const next = safeNext(P.get('next'));
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // ----- signed-in awareness (stored session first, confirmed once Supabase has loaded) -----
  function hasStoredSession() { try { const s = JSON.parse(localStorage.getItem(KEY)); return !!(s && (s.refresh_token || (s.currentSession && s.currentSession.refresh_token))) } catch (e) { return false } }
  function setMember(on) { $$('[data-guest]').forEach(e => e.hidden = on); $$('[data-member]').forEach(e => e.hidden = !on) }
  setMember(hasStoredSession());

  // ----- header -----
  const header = $('.lp-header');
  const onScroll = () => header.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const burger = $('#lpBurger'), nav = $('#lpNav');
  burger.addEventListener('click', () => { const o = !nav.classList.contains('open'); nav.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); burger.setAttribute('aria-label', o ? 'Close menu' : 'Open menu') });
  nav.addEventListener('click', e => { if (e.target.closest('a')) { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false) } });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); burger.focus() } });

  // ----- sign-in / sign-up dialog (one dialog: the first sign-in with any method creates the account) -----
  const CFG = window.A1_AUTH || { google: true };
  const NAMES = { google: 'Google', azure: 'Microsoft', apple: 'Apple' };
  const stepStart = $('#siStepStart'), stepCode = $('#siStepCode'), emailForm = $('#siEmailForm');
  let mode = 'signin', emailAddr = '', resendAt = 0;
  $$('[data-provider]').forEach(b => { b.hidden = !CFG[b.dataset.provider] });
  const pkBtn = $('[data-passkey]');
  pkBtn.hidden = !(CFG.passkey && window.PublicKeyCredential);
  emailForm.hidden = !CFG.email;
  function showMsg(kind, text) { msg.innerHTML = text ? `<div class="ui-state ${kind}"><span class="ic">${kind === 'error' ? '!' : '✓'}</span><div>${text}</div></div>` : '' }
  function setMode(m) {
    mode = m;
    $('#siTitle').textContent = m === 'signup' ? 'Create your free account' : 'Sign in to Deutsch A1';
    if (!P.get('next') || m === 'signup') $('#siLead').textContent = m === 'signup' ? 'Start learning in seconds. Pick any option: no password needed.' : 'Welcome back. Choose how you want to continue.';
    $('#siSwitch').innerHTML = m === 'signup' ? 'Already have an account? <button class="ui-link" type="button" data-mode="signin">Sign in</button>' : 'New here? <button class="ui-link" type="button" data-mode="signup">Create a free account</button>';
    pkBtn.hidden = m === 'signup' || !(CFG.passkey && window.PublicKeyCredential); // passkeys sign in existing accounts only
  }
  function step(which) { stepStart.hidden = which !== 'start'; stepCode.hidden = which !== 'code'; $('#siSwitch').hidden = which !== 'start' }
  function openSignin(course, m) {
    if (course) try { sessionStorage.setItem('a1:intent', course) } catch (e) {}
    if (hasStoredSession() || (window.A1 && A1.user)) { location.href = next; return }
    setMode(m || 'signin'); step('start');
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    const f = stepStart.querySelector('button:not([hidden])'); f && f.focus();
  }
  $$('[data-signin]').forEach(b => b.addEventListener('click', () => openSignin(null, 'signin')));
  $$('[data-start]').forEach(b => b.addEventListener('click', () => openSignin(b.dataset.start || '', 'signup')));
  dlg.addEventListener('click', e => { const m = e.target.closest('[data-mode]'); if (m) { showMsg('', ''); setMode(m.dataset.mode) } });
  dlg.querySelector('[data-close]').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close() });
  async function client() { if (window.A1 && A1.ready) await A1.ready; if (!window.A1 || !A1.client) throw new Error('offline'); return A1.auth }
  function fail(e, what) {
    const m = (e && (e.message || e.error_description)) || '';
    const txt = m === 'offline' ? '<b>Sign-in is not available right now</b>Check your internet connection and try again.'
      : /rate limit|security purposes|too many/i.test(m) ? `<b>Please wait a moment</b>For security, a new code can only be sent once a minute.`
      : /expired|invalid/i.test(m) && what === 'code' ? '<b>That code did not work</b>It may be mistyped or expired. Check the newest e-mail or send a new code.'
      : /passkey_disabled|not.?found|credential/i.test(m) && what === 'passkey' ? '<b>No passkey found for this device</b>Sign in another way first, then add a passkey under Account → Sign-in methods.'
      : /NotAllowedError|cancel|abort/i.test(m + (e && e.name)) ? '<b>Cancelled</b>Nothing happened. Choose an option to try again.'
      : '<b>Sign-in could not start</b>' + esc(m || 'Please try again.');
    showMsg('error', txt);
  }
  // OAuth: Google, Microsoft, Apple
  $$('[data-provider]').forEach(b => b.addEventListener('click', async () => {
    const pr = b.dataset.provider, label = b.querySelector('span').textContent;
    showMsg('', ''); b.disabled = true; b.querySelector('span').textContent = `Opening ${NAMES[pr]}…`;
    try { const a = await client(); const r = await a.oauth(pr, next); if (r && r.error) throw r.error } // the browser now leaves for the provider
    catch (e) { b.disabled = false; b.querySelector('span').textContent = label; fail(e) }
  }));
  // Passkey (existing accounts)
  pkBtn.addEventListener('click', async () => {
    showMsg('', ''); pkBtn.disabled = true;
    try { const a = await client(); const r = await a.passkey(); if (r && r.error) throw r.error; location.replace(next) }
    catch (e) { pkBtn.disabled = false; fail(e, 'passkey') }
  });
  // E-mail code: step 1 send, step 2 verify
  const validEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  async function sendCode() {
    const a = await client(); const r = await a.emailCode(emailAddr, next); if (r && r.error) throw r.error;
    resendAt = Date.now() + 60e3;
  }
  emailForm.addEventListener('submit', async e => {
    e.preventDefault(); showMsg('', '');
    const v = $('#siEmail').value.trim();
    if (!validEmail(v)) { showMsg('error', '<b>Please check the e-mail address</b>It should look like name@example.com.'); $('#siEmail').focus(); return }
    emailAddr = v; const btn = $('#siEmailGo'); btn.disabled = true; btn.textContent = 'Sending code…';
    try { await sendCode(); $('#siSentTo').textContent = emailAddr; step('code'); $('#siCode').value = ''; $('#siCode').focus() }
    catch (err) { fail(err) }
    finally { btn.disabled = false; btn.textContent = 'Continue with e-mail' }
  });
  stepCode.addEventListener('submit', async e => {
    e.preventDefault(); showMsg('', '');
    const code = $('#siCode').value.replace(/\D/g, '');
    if (code.length < 6) { showMsg('error', '<b>Enter the code from the e-mail</b>It has 6 digits.'); $('#siCode').focus(); return }
    const btn = $('#siCodeGo'); btn.disabled = true; btn.textContent = 'Checking…';
    try { const a = await client(); const r = await a.verifyCode(emailAddr, code); if (r && r.error) throw r.error; location.replace(next) }
    catch (err) { btn.disabled = false; btn.textContent = 'Verify and continue'; fail(err, 'code') }
  });
  $('#siResend').addEventListener('click', async () => {
    showMsg('', '');
    const wait = Math.ceil((resendAt - Date.now()) / 1000);
    if (wait > 0) { showMsg('error', `<b>Please wait ${wait} seconds</b>A new code can be sent once a minute.`); return }
    try { await sendCode(); showMsg('success', `<b>New code sent</b>Check ${esc(emailAddr)}. Only the newest code works.`) } catch (err) { fail(err) }
  });
  $('#siBack').addEventListener('click', () => { showMsg('', ''); step('start') });

  // messages from redirects
  const err = P.get('error');
  if (P.get('signin') || err) {
    if (err) {
      const friendly = /signups? not allowed|signup.*disabled/i.test(err) ? 'New accounts cannot be created at the moment. Please sign in with an existing account.' : esc(err);
      showMsg('error', '<b>Sign-in did not work</b>' + friendly);
    }
    openSignin(null, 'signin');
    if (!err && P.get('next')) $('#siLead').textContent = 'Please sign in to open that page. You will go straight there afterwards.';
  }
  if (P.get('signedout')) {
    const t = document.createElement('div'); t.className = 'ui-toast'; t.setAttribute('role', 'status'); t.textContent = 'You have signed out. See you next time!';
    document.body.appendChild(t); setTimeout(() => t.remove(), 4000);
  }
  // tidy the address bar, but never touch an OAuth ?code= (Supabase still needs to read it)
  if (P.toString() && !P.has('code')) history.replaceState(null, '', location.pathname + location.hash);

  // confirm session with Supabase; if a sign-in came back to this page, continue into the portal
  if (window.A1 && A1.ready) A1.ready.then(() => {
    if (!A1.client) return;
    setMember(!!A1.user);
    if (A1.user && (P.get('code') || (dlg.open && P.get('signin')))) location.replace(next);
  });

  // ----- example exercise in the hero (real question from Lektion 1) -----
  const fb = $('#pvFb');
  $$('.lp-preview .opt').forEach(b => b.addEventListener('click', () => {
    const ok = b.hasAttribute('data-ok');
    $$('.lp-preview .opt').forEach(x => { x.classList.remove('right', 'wrong'); x.setAttribute('aria-pressed', 'false') });
    b.classList.add(ok ? 'right' : 'wrong'); b.setAttribute('aria-pressed', 'true');
    if (!ok) $('.lp-preview .opt[data-ok]').classList.add('right');
    fb.innerHTML = ok ? '<b>Richtig!</b> “Wie geht es Ihnen?” is the polite form for a teacher.' : '<b>Not quite.</b> With a teacher use the polite form: “Wie geht es Ihnen?” (“Wie geht’s?” is informal).';
  }));
})();
