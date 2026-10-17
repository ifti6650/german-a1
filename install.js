// Permanent "Install app" button + instructions for every browser.
(function () {
  var standalone = window.navigator.standalone || (window.matchMedia && matchMedia('(display-mode: standalone)').matches);
  if (standalone) {
    // The public landing page has its own persistent install actions.
    var hideInstalled = function () { document.querySelectorAll('[data-install-app]').forEach(function (b) { b.hidden = true; }); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', hideInstalled); else hideInstalled();
    return;
  }

  var ua = navigator.userAgent;
  var ios = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var android = /android/i.test(ua);
  var deferred = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferred = e; });
  window.addEventListener('appinstalled', function () {
    document.querySelectorAll('[data-install-app]').forEach(function (b) { b.hidden = true; });
    var b = document.getElementById('installBtn'); if (b) b.hidden = true;
  });

  var css = '.inst-btn{font:inherit;font-weight:700;font-size:14px;cursor:pointer;border:0;border-radius:8px;padding:6px 10px;background:var(--accent,#5363cf);color:#fff;display:inline-flex;gap:6px;align-items:center;white-space:nowrap}' +
    '.inst-btn:focus-visible{outline:2px solid var(--accent,#5363cf);outline-offset:2px}' +
    '.inst-dlg{border:1px solid var(--line,#e0e3ee);border-radius:16px;padding:0;max-width:440px;width:calc(100% - 32px);background:var(--paper,var(--surface,#fff));color:var(--ink,#1b1e2b);box-shadow:0 20px 50px -20px rgba(0,0,0,.45)}' +
    '.inst-dlg::backdrop{background:rgba(10,12,20,.45)}' +
    '.inst-in{padding:22px 22px 18px;display:flex;flex-direction:column;gap:12px;font-size:15px;line-height:1.5}' +
    '.inst-in h2{margin:0;font-size:20px;font-weight:800}' +
    '.inst-in ol{margin:0;padding-left:22px;display:flex;flex-direction:column;gap:6px}' +
    '.inst-in .muted{color:var(--muted,#5b6072);font-size:13.5px;margin:0}' +
    '.inst-in .row{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap}' +
    '.inst-in button{font:inherit;font-weight:600;cursor:pointer;border-radius:8px;padding:8px 14px;border:1px solid var(--line,#e0e3ee);background:transparent;color:inherit}' +
    '.inst-in button.go{background:var(--accent,#5363cf);border-color:var(--accent,#5363cf);color:#fff}' +
    '.inst-icon{display:inline-block;padding:0 6px;border:1px solid var(--line,#e0e3ee);border-radius:6px;font-weight:700}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function steps() {
    if (ios && /CriOS/i.test(ua)) return ['Tap the <b>Share</b> icon <span class="inst-icon">⬆︎</span> at the <b>top right</b>, in the address bar.', 'Scroll down and tap <b>“Add to Home Screen”</b>.', 'Tap <b>Add</b>.'];
    if (ios && /FxiOS|EdgiOS/i.test(ua)) return ['Tap the menu <span class="inst-icon">☰</span>, then <b>Share</b>.', 'Tap <b>“Add to Home Screen”</b>.', 'Tap <b>Add</b>.'];
    if (ios) return ['Tap the <b>Share</b> button <span class="inst-icon">⬆︎</span> at the bottom of Safari.', 'Scroll down and tap <b>“Add to Home Screen”</b>.', 'Tap <b>Add</b>.'];
    if (android) return ['Tap the browser menu <span class="inst-icon">⋮</span> at the top right.', 'Tap <b>“Install app”</b> or <b>“Add to Home screen”</b>.', 'Confirm with <b>Install</b>.'];
    return ['In Chrome or Edge, click the install icon <span class="inst-icon">⊕</span> at the right end of the address bar,', 'or open the menu <span class="inst-icon">⋮</span> → <b>Cast, save and share</b> → <b>Install page as app</b>.', 'Click <b>Install</b>.'];
  }

  function openDialog() {
    if (deferred) { deferred.prompt(); deferred.userChoice.finally(function () { deferred = null; }); return; }
    var d = document.getElementById('instDlg');
    if (!d) {
      d = document.createElement('dialog'); d.id = 'instDlg'; d.className = 'inst-dlg'; d.setAttribute('aria-labelledby', 'instTitle');
      d.innerHTML = '<div class="inst-in"><h2 id="instTitle">Install Deutsch A1 as an app</h2><ol>' + steps().map(function (s) { return '<li>' + s + '</li>'; }).join('') +
        '</ol><p class="muted">The app gets its own icon and can work offline after content has loaded. Your browser and installed app may keep separate local progress; sign in to sync supported learning progress across devices.</p>' +
        '<div class="row"><button class="go" id="instOk">Got it</button></div></div>';
      document.body.appendChild(d);
      d.querySelector('#instOk').onclick = function () { d.close(); };
      d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    }
    if (d.showModal) d.showModal(); else alert(steps().join('\n').replace(/<[^>]+>/g, ''));
  }

  function addButton() {
    // The landing-page buttons must work without an account.
    document.querySelectorAll('[data-install-app]').forEach(function (b) { b.addEventListener('click', openDialog); });
    if (document.body.classList.contains('lp')) return;
    var b = document.createElement('button');
    b.id = 'installBtn'; b.className = 'inst-btn'; b.type = 'button';
    b.innerHTML = '<span aria-hidden="true">📲</span> Install app';
    b.onclick = openDialog;
    var slot = document.getElementById('sh-install');                // learner portal: sidebar footer
    if (slot) { slot.appendChild(b); return; }
    var links = document.querySelector('nav.top .links');
    if (links) { links.appendChild(b); return; }
    var backs = document.querySelectorAll('.back'), last = backs[backs.length - 1];
    if (last) { b.style.marginLeft = '14px'; b.style.verticalAlign = 'middle'; last.parentNode.insertBefore(b, last.nextSibling); return; }
    document.body.insertBefore(b, document.body.firstChild);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addButton); else addButton();
})();
