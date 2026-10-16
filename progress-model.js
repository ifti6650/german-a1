// Deutsch A1 · progress model — ONE place where progress numbers are defined.
// Definitions (shown to the learner on the Progress page):
//  • Section "learn" done      – learner pressed “I’ve read this” on the Learn tab
//  • Section "wortschatz" done – ≥ 80 % of the lesson's words are marked Known in the Wortschatz trainer
//  • Section "practice"/"apply" done – a full practice round was finished (any score)
//  • Section "test" done       – lesson quiz passed (best score ≥ 60 %)
//  • Lesson progress %         – done sections ÷ available sections
//  • Lesson completed          – lesson quiz passed. Completion ≠ mastery.
//  • Accuracy                  – correct answers ÷ all graded answers (first attempts and retries alike)
//  • Mastery (mistakes)        – see review.js (3 correct answers in 3 separate sessions)
(function (root) {
  const C = root.COURSE;
  const ls = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v) } catch (e) { return d } };
  const WZ_DONE = 0.8, DAY = 864e5;

  function wortschatz() { // reads the protected trainer's own state, read-only
    const S = ls('wz:v2', null); const cards = (S && S.cards) || {};
    const now = Date.now(); let due = 0, known = 0, learning = 0;
    Object.values(cards).forEach(c => { if (c.s === 'known') { known++; if (c.d <= now) due++ } else if (c.s === 'learning') { learning++; due++ } });
    return { cards, due, known, learning };
  }
  function lessonWordsKnown(l, wz) { const n = l.words.length; if (!n) return 0; return l.words.filter(w => wz.cards[w.id] && wz.cards[w.id].s === 'known').length / n }

  function lesson(n, wz) {
    wz = wz || wortschatz();
    const l = C.lesson(n); const st = (ls('a1:lessons', {})[n]) || { sections: {} };
    const avail = C.sectionsFor(n);
    const done = {};
    avail.forEach(s => {
      if (s === 'wortschatz') done[s] = lessonWordsKnown(l, wz) >= WZ_DONE;
      else if (s === 'test') done[s] = !!(st.sections.test && st.sections.test.passed);
      else done[s] = !!st.sections[s];
    });
    const nDone = avail.filter(s => done[s]).length;
    return { n, lesson: l, sections: avail, done, pct: Math.round(nDone / avail.length * 100), completed: done.test,
      started: nDone > 0 || !!st.last, last: st.last || null, lastSection: st.lastSection || null,
      quiz: st.sections.test || null, wordsKnown: Math.round(lessonWordsKnown(l, wz) * 100) };
  }
  function course() {
    const wz = wortschatz(); const all = C.lessons.map(l => lesson(l.n, wz));
    const lvl = v => { const xs = all.filter(x => x.lesson.level === v); return { done: xs.filter(x => x.completed).length, total: xs.length, pct: Math.round(xs.reduce((a, x) => a + x.pct, 0) / xs.length) } };
    // chosen course (onboarding): 'A1.1' or 'A1.2'; null if not chosen yet
    const pref = ls('a1:prefs', {}).course; const chosen = pref === 'A1.1' || pref === 'A1.2' ? pref : null;
    // current lesson = most recently visited unfinished lesson, else first unfinished lesson of the chosen course, else first unfinished
    const started = all.filter(x => x.last && !x.completed).sort((a, b) => b.last.localeCompare(a.last));
    const current = started[0] || (chosen && all.find(x => x.lesson.level === chosen && !x.completed)) || all.find(x => !x.completed) || all[all.length - 1];
    return { lessons: all, current, course: chosen, a11: lvl('A1.1'), a12: lvl('A1.2'), completed: all.filter(x => x.completed).length, wz };
  }

  // Analytics from persisted events (Supabase rows)
  function analytics(attempts, reviews, tests) {
    attempts = attempts || []; reviews = reviews || []; tests = tests || [];
    const dayKey = d => { const x = new Date(d); return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0') };
    const days = new Set(attempts.map(a => dayKey(a.created_at)));
    const today = dayKey(Date.now()); let streak = 0;
    for (let i = days.has(today) ? 0 : 1; i < 400; i++) { if (days.has(dayKey(Date.now() - i * DAY))) streak++; else break }
    const acc = xs => xs.length ? Math.round(xs.filter(a => a.correct).length / xs.length * 100) : null;
    const group = (key) => { const g = {}; attempts.forEach(a => { const k = key(a); if (k == null) return; (g[k] = g[k] || []).push(a) }); return Object.entries(g).map(([k, xs]) => ({ key: k, n: xs.length, acc: acc(xs) })) };
    const topicOf = a => a.topic || (a.kind === 'article' || /:article$/.test(a.item_id || '') ? 'articles' : (a.kind === 'flashcard' || a.kind === 'write' || a.kind === 'mc' || /^vocab:/.test(a.item_id || '')) ? 'vocabulary' : a.kind);
    const skillOf = a => a.skill || (/^vocab:/.test(a.item_id || '') ? 'vocabulary' : null);
    const week = attempts.filter(a => Date.parse(a.created_at) > Date.now() - 7 * DAY);
    const R = root.REVIEW; const now = Date.now();
    const rstate = {}; reviews.forEach(r => { const s = R ? R.state(r, now) : (r.mastered ? 'mastered' : 'due'); rstate[s] = (rstate[s] || 0) + 1 });
    return {
      total: attempts.length, accuracy: acc(attempts), week: { n: week.length, acc: acc(week) }, today: attempts.filter(a => dayKey(a.created_at) === today).length,
      streak, activeDays: days.size,
      byLesson: group(a => a.lesson).sort((a, b) => a.key - b.key),
      byTopic: group(topicOf).sort((a, b) => a.acc - b.acc),
      bySkill: group(skillOf).sort((a, b) => a.acc - b.acc),
      perDay: (n => { const out = []; for (let i = n - 1; i >= 0; i--) { const k = dayKey(Date.now() - i * DAY); const xs = attempts.filter(a => dayKey(a.created_at) === k); out.push({ k, n: xs.length, acc: acc(xs) }) } return out })(14),
      reviews: rstate, reviewDue: (rstate.due || 0) + (rstate.new || 0),
      tests
    };
  }

  // Transparent, rule-based recommendations. Each rule says why it fires.
  function recommend(cp, an) {
    const r = [];
    const cur = cp.current;
    if (an && an.reviewDue) r.push({ ic: '🔁', title: `Review ${an.reviewDue} mistake${an.reviewDue === 1 ? '' : 's'}`, why: 'They are due today in your mistake list.', href: 'mistakes.html?status=due', cta: 'Review now' });
    if (cp.wz.due) r.push({ ic: '🗂️', title: `${cp.wz.due} Wortschatz card${cp.wz.due === 1 ? ' is' : 's are'} due`, why: 'Spaced repetition from the Wortschatz trainer.', href: 'wortschatz.html', cta: 'Open Wortschatz' });
    if (an) {
      const weak = an.byTopic.filter(t => t.n >= 6 && t.acc < 70);
      weak.slice(0, 2).forEach(t => r.push({ ic: '🎯', title: `Practise ${label(t.key)}`, why: `Your accuracy is ${t.acc}% over ${t.n} answers (below 70%).`, href: 'practice.html?topic=' + encodeURIComponent(t.key), cta: 'Practise' }));
    }
    if (cur && !cur.completed) {
      const next = cur.sections.find(s => !cur.done[s]);
      r.push({ ic: '📘', title: `Continue Lektion ${cur.n}: ${cur.lesson.title}`, why: `Next step: ${SECTION_LABEL[next] || next}. Lesson progress ${cur.pct}%.`, href: `lesson.html?l=${cur.n}#${next}`, cta: 'Continue' });
    }
    C.modules.forEach(m => {
      const ls_ = m.lessons.map(n => cp.lessons[n - 1]);
      const taken = an && an.tests.some(t => t.test_id === 'module-' + m.n);
      if (ls_.every(x => x.completed) && !taken) r.push({ ic: '🏁', title: `Take the Modul ${m.n} test`, why: `You passed all quizzes of Lektion ${m.lessons[0]}–${m.lessons[2]}.`, href: 'test.html?id=module-' + m.n, cta: 'Start test' });
    });
    return r.slice(0, 5);
  }
  const SECTION_LABEL = { learn: 'Learn', wortschatz: 'Wortschatz', practice: 'Practice', apply: 'Apply', test: 'Lesson quiz', review: 'Review' };
  const TOPIC_LABEL = { articles: 'der / die / das', vocabulary: 'vocabulary', 'verb-endings': 'verb endings', sein: 'the verb sein', 'w-questions': 'W-questions', 'word-order': 'word order', greetings: 'greetings', 'how-are-you': '“How are you?”', pronouns: 'pronouns', countries: 'countries and aus', introductions: 'introducing yourself', alphabet: 'the alphabet', flashcard: 'vocabulary', write: 'vocabulary', mc: 'vocabulary' };
  function label(t) { return TOPIC_LABEL[t] || String(t).replace(/-/g, ' ') }

  root.PM = { wortschatz, lesson, course, analytics, recommend, label, SECTION_LABEL, WZ_DONE };
})(typeof window !== 'undefined' ? window : globalThis);
