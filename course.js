// Deutsch A1 · course model (single source of truth for the lesson-based platform)
// Built from the site's independent learning data (lesson titles, topics, grammar steps,
// Study Guide links and stable Wortschatz IDs. No external textbook affiliation or page references.
//
// contentStatus per lesson:
//   'complete'   – full original lesson (Learn, Practice, Apply, Quiz) authored for this site
//   'vocab-only' – Learn links + vocabulary practice/quiz generated from the Wortschatz word list
// Curriculum follows independently written CEFR A1 communication goals.
(function (root) {
  const W = (root.PLAN_WEEKS || []);

  const lessons = [];
  W.forEach(w => w.lessons.forEach(l => {
    lessons.push({
      n: l.n,
      id: 'L' + String(l.n).padStart(2, '0'),
      level: w.book,                 // 'A1.1' | 'A1.2'
      modul: w.modul || w.n,         // Modul 1..8 (3 lessons each)
      week: w.n,
      title: l.title,
      topic: l.topic,
      grammar: l.steps.map(s => ({ step: s.n, title: s.title, href: s.href })),
      guideHref: l.guide,
      wortschatzHref: 'wortschatz.html#L' + l.n,
      words: (w.words || []).filter(x => x.id.split('-')[0] == l.n),
      curriculumBasis: 'independent-cefr-a1'
    });
  }));

  const modules = W.map(w => ({
    n: w.modul || w.n, level: w.book,
    lessons: w.lessons.map(l => l.n),
    selfTestHref: w.selfTestHref, speakingHref: w.speakingHref
  }));

  function lesson(n) { return lessons.find(l => l.n === +n) || null }
  function content(n) { return (root.LESSON_CONTENT || {})[+n] || null } // filled by lessons/lNN.js
  function status(n) { return content(n) ? 'complete' : 'vocab-only' }

  // Lesson sections. A lesson is "completed" when its quiz is passed (>= PASS_PCT).
  // Lesson progress % = done sections / available sections (see sectionsFor).
  const PASS_PCT = 60;
  function sectionsFor(n) {
    return content(n)
      ? ['learn', 'wortschatz', 'practice', 'apply', 'test']
      : ['learn', 'wortschatz', 'practice', 'test'];
  }

  // Tests available on the platform
  function tests() {
    const t = [];
    lessons.forEach(l => t.push({ id: 'lesson-' + l.n, kind: 'lesson', title: `Lektion ${l.n} quiz`, lessons: [l.n], level: l.level, minutes: content(l.n) ? 15 : 8 }));
    modules.forEach(m => t.push({ id: 'module-' + m.n, kind: 'module', title: `Modul ${m.n} test (L${m.lessons[0]}–${m.lessons[m.lessons.length - 1]})`, lessons: m.lessons, level: m.level, minutes: 20 }));
    t.push({ id: 'level-a11', kind: 'level', title: 'A1.1 assessment (L1–12)', lessons: lessons.filter(l => l.level === 'A1.1').map(l => l.n), level: 'A1.1', minutes: 35 });
    t.push({ id: 'level-a12', kind: 'level', title: 'A1.2 assessment (L13–24)', lessons: lessons.filter(l => l.level === 'A1.2').map(l => l.n), level: 'A1.2', minutes: 35 });
    return t;
  }
  function test(id) { return tests().find(t => t.id === id) || null }

  root.COURSE = { lessons, modules, lesson, content, status, sectionsFor, tests, test, PASS_PCT };
})(typeof window !== 'undefined' ? window : globalThis);
