// Deutsch A1 · learner-portal application shell.
// Wraps the page content in one layout: persistent sidebar (desktop), compact top header with profile menu,
// drawer + bottom tab bar (mobile). Also finishes the auth check started by guard.js and sends new learners to onboarding.
// Load after sync.js and before install.js.
(function () {
  const ICON = {
    home: 'M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
    course: 'M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5zM5 19.5A1.5 1.5 0 0 0 6.5 21H19M9 7h6M9 10.5h4',
    cards: 'M8 3h11a1 1 0 0 1 1 1v12M4 7h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z',
    target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01',
    tests: 'M9 3h6v3H9zM9 4.5H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1h-3M9 13.5l2 2 4-4.5',
    repeat: 'M17 2.5 20 5.5l-3 3M4 11V9.5a4 4 0 0 1 4-4h12M7 21.5l-3-3 3-3M20 13v1.5a4 4 0 0 1-4 4H4',
    chart: 'M3 21h18M6 17v-5M11 17V7M16 17v-8M21 17V4',
    grammar: 'M2 5h7a3 3 0 0 1 3 3v12a2.5 2.5 0 0 0-2.5-2.5H2zM22 5h-7a3 3 0 0 0-3 3v12a2.5 2.5 0 0 1 2.5-2.5H22z',
    guide: 'M4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM4 10h16M8 3v4M16 3v4M8 14h3M8 17h6',
    mic: 'M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3',
    pdf: 'M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8zM14 3v5h5M12 11v6M9 14l3 3 3-3',
    menu: 'M4 6h16M4 12h16M4 18h16', close: 'M6 6l12 12M18 6 6 18', chev: 'M6 9l6 6 6-6',
    out: 'M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 17l5-5-5-5M15 12H3',
    swap: 'M3 7.5h14l-3.5-3.5M21 16.5H7l3.5 3.5', ext: 'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
    more: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z', user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0'
  };
  const svg = (k, cls) => `<svg class="${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICON[k]}"/></svg>`;
  const LOGO = `<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="var(--ui-accent)"/><path d="M10 8.5h5.2a7.5 7.5 0 0 1 0 15H10z" fill="none" stroke="var(--ui-on-accent)" stroke-width="2.6" stroke-linejoin="round"/><rect x="10" y="26.2" width="4" height="2" rx="1" fill="#1f1f1f"/><rect x="14" y="26.2" width="4" height="2" fill="#dd2c2c"/><rect x="18" y="26.2" width="4" height="2" rx="1" fill="#f5c400"/></svg>`;
  const NAV = [
    ['Learn', [['dashboard.html', 'Dashboard', 'home'], ['course.html', 'My Course', 'course'], ['wortschatz.html', 'Wortschatz', 'cards'], ['practice.html', 'Practice', 'target']]],
    ['Check', [['tests.html', 'Tests', 'tests'], ['mistakes.html', 'Mistakes', 'repeat'], ['progress.html', 'Progress', 'chart']]],
    ['Resources', [['grammar-book.html', 'Grammar Book', 'grammar'], ['study-guide.html', 'Study Guide', 'guide'], ['speaking.html', 'Sprechen', 'mic'], ['Momente_A1_Grammar_Book.pdf', 'Grammar Book PDF', 'pdf', 1]]]
  ];
  const TABS = [['dashboard.html', 'Home', 'home'], ['course.html', 'Course', 'course'], ['wortschatz.html', 'Wörter', 'cards'], ['practice.html', 'Practice', 'target']];
  const ALIAS = { 'lesson.html': 'course.html', 'test.html': 'tests.html', 'onboarding.html': 'dashboard.html', '': 'dashboard.html', 'index.html': 'dashboard.html' };
  const page = location.pathname.split('/').pop() || 'dashboard.html';
  const cur = ALIAS[page] || page;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ls = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v) } catch (e) { return d } };
  const html = document.documentElement;
  const mq = matchMedia('(max-width: 1000px)');
  let side, menu, avatarBtn, menuBtn;

  // ---------- course + progress shown in the shell (local, synced via app_state) ----------
  function course() { const p = ls('a1:prefs', {}); return p.course === 'A1.2' ? 'A1.2' : p.course === 'A1.1' ? 'A1.1' : null }
  function courseDone(level) {
    const all = ls('a1:lessons', {}); const lo = level === 'A1.2' ? 13 : 1;
    let n = 0; for (let i = lo; i < lo + 12; i++) if (all[i] && all[i].sections && all[i].sections.test && all[i].sections.test.passed) n++;
    return n;
  }
  function courseBox() {
    const c = course(); if (!c) return '';
    const d = courseDone(c);
    return `<a class="sh-coursebox" href="course.html" title="Open your course"><span class="k">Your course</span><b>Momente ${c}</b><span class="sh-meter" role="progressbar" aria-label="Lessons completed in Momente ${c}" aria-valuemin="0" aria-valuemax="12" aria-valuenow="${d}"><i style="width:${Math.round(d / 12 * 100)}%"></i></span><span class="k" style="display:block;margin-top:6px">${d} of 12 lessons completed</span></a>`;
  }

  // ---------- build ----------
  function el(tag, cls, inner) { const e = document.createElement(tag); if (cls) e.className = cls; if (inner != null) e.innerHTML = inner; return e }
  function navHtml() {
    return NAV.map(([g, items]) => `<div class="sh-group"><h2 id="g-${g}">${g}</h2><ul aria-labelledby="g-${g}">${items.map(([h, t, ic, ext]) =>
      `<li><a class="sh-link" href="${h}"${h === cur ? ' aria-current="page"' : ''}${ext ? ' target="_blank" rel="noopener"' : ''}>${svg(ic)}<span>${t}</span>${ext ? svg('ext', 'ext') + '<span class="ui-sr"> (opens in a new tab)</span>' : ''}</a></li>`).join('')}</ul></div>`).join('');
  }
  function groupOf(h) { for (const [g, items] of NAV) for (const it of items) if (it[0] === h) return [g, it[1]]; return ['', ''] }
  function crumb() {
    if (page === 'onboarding.html') return '<b>Welcome</b>';
    const [g, t] = groupOf(cur); if (!t) return '';
    const sub = page === 'lesson.html' ? (new URLSearchParams(location.search).get('l') ? 'Lektion ' + (+new URLSearchParams(location.search).get('l')) : '') : page === 'test.html' ? 'Test' : '';
    return `<span>${g}</span><span class="sep">/</span>${sub ? `<a href="${cur}" style="color:inherit;text-decoration:none">${t}</a><span class="sep">/</span><b>${esc(sub)}</b>` : `<b>${t}</b>`}`;
  }

  function build() {
    const body = document.body;
    if (body.dataset.layout === 'focus') html.classList.add('sh-focus');
    const content = el('div', 'sh-content'); content.id = 'sh-content'; content.tabIndex = -1;
    [...body.childNodes].forEach(n => { if (n.nodeType === 1 && /^(SCRIPT|STYLE|DIALOG|TEMPLATE)$/.test(n.tagName)) return; content.appendChild(n) });
    content.querySelectorAll(':scope > nav.top, :scope > footer.foot, :scope > a.skip, :scope > .foot').forEach(n => n.remove());
    content.querySelectorAll('nav.top').forEach(n => n.remove());

    side = el('aside', 'sh-side'); side.id = 'sh-side'; side.setAttribute('aria-label', 'Main navigation');
    side.innerHTML = `<div class="brand"><a class="ui-logo" href="dashboard.html" aria-label="Deutsch A1, dashboard">${LOGO}<span>Deutsch A1</span></a></div>
      <nav class="sh-scroll" aria-label="Main">${navHtml()}</nav>
      <div class="sh-sidefoot"><div id="sh-coursebox">${courseBox()}</div><div id="sh-install"></div></div>`;
    const bg = el('div', 'sh-drawer-bg'); bg.addEventListener('click', () => drawer(false));
    const main = el('div', 'sh-main');
    const top = el('div', 'sh-top'); top.setAttribute('role', 'banner');
    top.innerHTML = `<button class="sh-iconbtn sh-menubtn" id="sh-menubtn" aria-label="Open menu" aria-controls="sh-side" aria-expanded="false">${svg('menu')}</button>
      <a class="ui-logo mlogo" href="dashboard.html" aria-label="Deutsch A1, dashboard">${LOGO}</a>
      <nav class="sh-crumb" aria-label="Breadcrumb">${crumb()}</nav>
      <div class="sh-topr"><span id="sh-sync"></span>
        <div class="sh-prof"><button class="sh-avatar" id="sh-avatar" aria-haspopup="menu" aria-expanded="false" aria-controls="sh-menu"><span class="av" aria-hidden="true">·</span><span class="nm">Account</span>${svg('chev')}</button>
        <div class="sh-menu" id="sh-menu" role="menu" hidden></div></div></div>`;
    main.append(top, content);
    const tabs = el('nav', 'sh-tabs'); tabs.setAttribute('aria-label', 'Quick navigation');
    tabs.innerHTML = TABS.map(([h, t, ic]) => `<a class="sh-tab" href="${h}"${h === cur ? ' aria-current="page"' : ''}>${svg(ic)}<span>${t}</span></a>`).join('')
      + `<button class="sh-tab" id="sh-more" aria-controls="sh-side" aria-expanded="false">${svg('more')}<span>More</span></button>`;
    const skip = el('a', 'ui-skip', 'Skip to content'); skip.href = '#sh-content';
    const app = el('div', 'sh-app'); app.append(side, bg, main, tabs);
    body.prepend(skip, app);

    menuBtn = top.querySelector('#sh-menubtn'); avatarBtn = top.querySelector('#sh-avatar'); menu = top.querySelector('#sh-menu');
    menuBtn.addEventListener('click', () => drawer(!html.classList.contains('sh-open')));
    tabs.querySelector('#sh-more').addEventListener('click', () => drawer(true));
    avatarBtn.addEventListener('click', () => profile(menu.hidden));
    document.addEventListener('click', e => { if (!menu.hidden && !e.target.closest('.sh-prof')) profile(false) });
    document.addEventListener('keydown', e => {
      if (e.key !== 'Escape') return;
      if (!menu.hidden) { profile(false); avatarBtn.focus() }
      if (html.classList.contains('sh-open')) { drawer(false); menuBtn.focus() }
    });
    menu.addEventListener('keydown', e => {
      const items = [...menu.querySelectorAll('[role="menuitem"]')]; const i = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus() }
      if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus() }
    });
    side.addEventListener('click', e => { if (e.target.closest('a') && mq.matches) drawer(false) });
    const sync = () => { side.inert = mq.matches && !html.classList.contains('sh-open') };
    mq.addEventListener ? mq.addEventListener('change', sync) : mq.addListener(sync); sync();
    renderMenu(null);
    html.classList.remove('sh-wait');
  }
  function drawer(open) {
    html.classList.toggle('sh-open', open);
    side.inert = mq.matches && !open;
    menuBtn.setAttribute('aria-expanded', open); document.getElementById('sh-more').setAttribute('aria-expanded', open);
    if (open) { const a = side.querySelector('[aria-current="page"]') || side.querySelector('a'); a && a.focus() }
  }
  function profile(open) {
    menu.hidden = !open; avatarBtn.setAttribute('aria-expanded', open);
    if (open) { const f = menu.querySelector('[role="menuitem"]'); f && f.focus() }
  }

  // ---------- user + profile menu ----------
  function names(u) {
    const m = (u && u.user_metadata) || {};
    const full = m.full_name || m.name || [m.given_name, m.family_name].filter(Boolean).join(' ') || (u && u.email ? u.email.split('@')[0] : '');
    const first = m.given_name || String(full).split(' ')[0] || '';
    const ini = (String(full).split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('') || '?').toUpperCase();
    return { full, first, ini, email: (u && u.email) || '' };
  }
  function renderMenu(u) {
    if (!menu) return;
    const n = names(u); const c = course();
    avatarBtn.querySelector('.av').textContent = u ? n.ini : '·';
    avatarBtn.querySelector('.nm').textContent = u ? n.first : 'Account';
    avatarBtn.setAttribute('aria-label', u ? `Account menu for ${n.full}` : 'Account menu');
    menu.innerHTML = `<div class="who">${u ? `<b>${esc(n.full)}</b><span>${esc(n.email)}</span>` : '<b>Offline</b><span>Your progress is saved in this browser.</span>'}</div>
      <a role="menuitem" href="dashboard.html">${svg('home')}Dashboard</a>
      <a role="menuitem" href="progress.html">${svg('chart')}My progress</a>
      <a role="menuitem" href="onboarding.html?change=1">${svg('swap')}${c ? `Course: Momente ${c} · change` : 'Choose your course'}</a>
      <hr>${u ? `<button role="menuitem" class="danger" id="sh-signout">${svg('out')}Sign out</button>` : ''}`;
    const so = menu.querySelector('#sh-signout'); if (so) so.addEventListener('click', signOut);
  }
  async function signOut() {
    S.signingOut = true; // the auth listener must not start a second navigation
    const b = document.getElementById('sh-signout'); if (b) { b.disabled = true; b.lastChild.textContent = 'Signing out…' }
    try { if (window.A1) await A1.logout() } catch (e) { console.warn(e) }
    try { localStorage.removeItem('sb-gvftmsctaxyllmtiztil-auth-token'); sessionStorage.clear() } catch (e) {}
    location.replace('index.html?signedout=1');
  }

  // ---------- onboarding: new learners choose their course first ----------
  function hasProgress() {
    const l = ls('a1:lessons', {}); if (Object.keys(l).length) return true;
    const w = ls('wz:v2', null); if (w && w.cards && Object.keys(w.cards).length) return true;
    const k = ls('known', []); if (Array.isArray(k) && k.length) return true;
    const p = ls('a1plan:v1', null); if (p && p.tasks && Object.keys(p.tasks).length) return true;
    return false;
  }
  function ensureCourse() {
    const p = ls('a1:prefs', {});
    if (p.course) return true;
    if (hasProgress()) { // returning learner from before onboarding existed: infer the course from where they work
      const ns = Object.keys(ls('a1:lessons', {})).map(Number).filter(Boolean);
      p.course = ns.length && Math.max(...ns) > 12 ? 'A1.2' : 'A1.1'; p.courseSetAt = new Date().toISOString(); p.courseSource = 'inferred';
      localStorage.setItem('a1:prefs', JSON.stringify(p));
      return true;
    }
    if (page !== 'onboarding.html') { location.replace('onboarding.html?next=' + encodeURIComponent(window.A1_GUARD ? A1_GUARD.next() : page)); return false }
    return true;
  }
  function cleanUrl() {
    const sp = new URLSearchParams(location.search); let ch = false;
    ['code', 'state'].forEach(k => { if (sp.has(k)) { sp.delete(k); ch = true } });
    if (ch) history.replaceState(null, '', location.pathname + (sp.toString() ? '?' + sp : '') + location.hash);
  }

  // ---------- boot ----------
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
  const S = window.A1_SHELL = { ready: null, user: null, course, names, refreshCourseBox() { const b = document.getElementById('sh-coursebox'); if (b) b.innerHTML = courseBox() } };
  S.ready = (async () => {
    if (!window.A1) return { user: null, offline: true };
    await A1.ready;
    if (!A1.client) { // Supabase could not load (offline): keep working with this browser's data
      const c = document.getElementById('sh-content'); if (c && !c.querySelector('.sh-offline')) c.insertAdjacentHTML('afterbegin', '<div class="ui-state sh-offline" role="status"><span class="ic">!</span><div><b>You are offline</b>Your answers are saved in this browser and upload when you are back online.</div></div>');
      return { user: null, offline: true };
    }
    if (!A1.user) { (window.A1_GUARD ? A1_GUARD.toLanding() : location.replace('index.html?signin=1')); return new Promise(() => {}) }
    S.user = A1.user; cleanUrl(); renderMenu(A1.user);
    if (!ensureCourse()) return new Promise(() => {});
    S.refreshCourseBox(); renderMenu(A1.user);
    A1.onChange(u => { if (A1.client && !u && !S.signingOut) location.replace('index.html?signedout=1') });
    return { user: A1.user, offline: false };
  })();
})();
