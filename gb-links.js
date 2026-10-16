// Grammar Book ↔ lessons: adds "Used in Lektion N · practise" under each grammar step heading
(function () {
  if (!window.COURSE) return;
  document.querySelectorAll('h2[id^="step-"]').forEach(h => {
    const n = +(h.id.match(/^step-(\d+)/) || [])[1]; if (!n) return;
    const ls = COURSE.lessons.filter(l => l.grammar.some(g => g.step === n)); if (!ls.length) return;
    const p = document.createElement('p'); p.className = 'gb-links';
    p.style.cssText = 'font-size:14px;background:var(--accent-soft);border-radius:10px;padding:8px 12px;margin:-4px 0 12px';
    p.innerHTML = ls.map(l => `📘 Used in <a href="lesson.html?l=${l.n}">Lektion ${l.n}: ${l.title.replace(/</g, '&lt;')}</a> · <a href="practice.html?lesson=${l.n}">practise</a> · <a href="test.html?id=lesson-${l.n}">quiz</a>`).join('<br>');
    h.insertAdjacentElement('afterend', p);
  });
})();
