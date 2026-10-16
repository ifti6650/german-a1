// Deutsch A1 · auth guard for learner-portal pages. Load synchronously in <head>, before any content renders.
// A page without a stored Supabase session is sent to the public site's sign-in, remembering where the learner wanted to go.
// The full check (expired or revoked session) happens in shell.js once Supabase has loaded.
(function () {
  var KEY = 'sb-gvftmsctaxyllmtiztil-auth-token';
  var d = document.documentElement;
  d.classList.add('sh', 'sh-wait');
  setTimeout(function () { d.classList.remove('sh-wait') }, 2500); // never leave a blank page
  var page = location.pathname.split('/').pop() || 'dashboard.html';
  var sp = new URLSearchParams(location.search);
  var hp = new URLSearchParams(location.hash.replace(/^#/, ''));
  function next() {
    var c = new URLSearchParams(location.search);
    ['code', 'state', 'error', 'error_code', 'error_description'].forEach(function (k) { c.delete(k) });
    var s = c.toString(); var h = /error/.test(location.hash) ? '' : location.hash;
    return page + (s ? '?' + s : '') + h;
  }
  function toLanding(err) {
    location.replace('index.html?signin=1' + (err ? '&error=' + encodeURIComponent(err) : '') + '&next=' + encodeURIComponent(next()));
  }
  window.A1_GUARD = { toLanding: toLanding, next: next, KEY: KEY };
  // OAuth came back with an error (e.g. sign-ups are closed): show it on the sign-in screen
  var err = sp.get('error_description') || hp.get('error_description');
  if (err) { toLanding(err); return }
  if (sp.has('code')) return; // OAuth return: shell.js waits for the code exchange
  var s = null; try { s = JSON.parse(localStorage.getItem(KEY)) } catch (e) {}
  var ok = s && (s.refresh_token || (s.currentSession && s.currentSession.refresh_token));
  if (!ok) toLanding();
})();
