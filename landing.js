// Deutsch A1 · public website behaviour: header, mobile menu, sign-in dialog, signed-in awareness, example exercise.
(function () {
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const KEY = 'sb-gvftmsctaxyllmtiztil-auth-token';
  const P = new URLSearchParams(location.search);
  const dlg = $('#signin'), msg = $('#siMsg'), gbtn = $('#siGoogle');
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

  // ----- sign-in dialog -----
  function showMsg(kind, text) { msg.innerHTML = text ? `<div class="ui-state ${kind}"><span class="ic">${kind === 'error' ? '!' : '✓'}</span><div>${text}</div></div>` : '' }
  function openSignin(course) {
    if (course) try { sessionStorage.setItem('a1:intent', course) } catch (e) {}
    if (hasStoredSession() || (window.A1 && A1.user)) { location.href = next; return }
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    gbtn.focus();
  }
  $$('[data-signin]').forEach(b => b.addEventListener('click', () => openSignin()));
  $$('[data-start]').forEach(b => b.addEventListener('click', () => openSignin(b.dataset.start || '')));
  dlg.querySelector('[data-close]').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close() });
  gbtn.addEventListener('click', async () => {
    showMsg('', '');
    gbtn.disabled = true; gbtn.querySelector('span').textContent = 'Opening Google…';
    try {
      if (window.A1 && A1.ready) await A1.ready;
      if (!window.A1 || !A1.client) throw new Error('offline');
      const r = await A1.login(next);
      if (r && r.error) throw r.error;
      // the browser now leaves for Google
    } catch (e) {
      gbtn.disabled = false; gbtn.querySelector('span').textContent = 'Continue with Google';
      showMsg('error', e && e.message === 'offline' ? '<b>Sign-in is not available right now</b>Check your internet connection and try again.' : '<b>Sign-in could not start</b>' + esc((e && e.message) || 'Please try again.'));
    }
  });

  // messages from redirects
  const err = P.get('error');
  if (P.get('signin') || err) {
    if (err) {
      const friendly = /signups? not allowed|signup.*disabled/i.test(err) ? 'This Google account has not been invited. Ask for an invitation, or sign in with the account you were invited with.' : esc(err);
      showMsg('error', '<b>Sign-in did not work</b>' + friendly);
    } else if (P.get('next')) $('#siLead').textContent = 'Please sign in to open that page. You will go straight there afterwards.';
    openSignin();
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
