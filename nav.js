// Deutsch A1 · shared top navigation (one place to change the menu for every page)
(function () {
  const MAIN = [
    ['index.html', 'Dashboard'], ['course.html', 'My Course'], ['wortschatz.html', 'Wortschatz'],
    ['practice.html', 'Practice'], ['tests.html', 'Tests'], ['mistakes.html', 'Mistakes'], ['progress.html', 'Progress']
  ];
  const RES = [['grammar-lab.html', 'Grammar Lab'], ['study-guide.html', 'Study Guide'], ['speaking.html', 'Sprechen'], ['German_A1_Intensive_Grammar_Book.pdf', 'Grammar Lab (PDF)']];
  const ALIAS = { 'lesson.html': 'course.html', 'test.html': 'tests.html', '': 'index.html' };
  function build() {
    const nav = document.querySelector('nav.top .in'); if (!nav) return;
    let page = location.pathname.split('/').pop(); page = ALIAS[page] || page;
    const links = nav.querySelector('.links') || nav.appendChild(Object.assign(document.createElement('div'), { className: 'links' }));
    const resOn = RES.some(r => r[0] === page);
    links.innerHTML = MAIN.map(([h, t]) => `<a href="${h}"${h === page ? ' class="on" aria-current="page"' : ''}>${t}</a>`).join('')
      + `<details class="res"><summary${resOn ? ' class="on"' : ''}>Resources</summary><div class="menu">${RES.map(([h, t]) => `<a href="${h}"${h === page ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</div></details>`;
    links.setAttribute('role', 'navigation'); links.setAttribute('aria-label', 'Main');
    const d = links.querySelector('details.res');
    document.addEventListener('click', e => { if (d.open && !d.contains(e.target)) d.open = false });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') d.open = false });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
