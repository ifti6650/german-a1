// Deutsch A1 · read helpers for the signed-in learner's rows (RLS limits every query to own rows)
(function (root) {
  async function loadAll(days = 90) {
    const sb = root.A1 && A1.client; if (!sb || !A1.user) return null;
    const since = new Date(Date.now() - days * 864e5).toISOString();
    const [att, rev, tst] = await Promise.all([
      sb.from('attempts').select('*').gte('created_at', since).order('created_at', { ascending: false }).limit(20000),
      sb.from('review_items').select('*').limit(5000),
      sb.from('test_results').select('*').order('created_at', { ascending: false }).limit(200)
    ]);
    const err = [att, rev, tst].find(r => r.error);
    if (err) throw new Error(err.error.message);
    return { attempts: att.data || [], reviews: rev.data || [], tests: tst.data || [] };
  }
  // Run fn(user) when auth is known and whenever it changes
  function whenAuth(fn) {
    let last;
    const go = u => { const id = u ? u.id : null; if (id === last) return; last = id; fn(u) };
    A1.onChange(u => { if (A1.client) go(u) });
    A1.ready.then(() => { if (!A1.client) fn(undefined); else go(A1.user) });
  }
  // Question bank lookup (authored lessons + questions generated from the Wortschatz list)
  const vocabCache = {};
  function vocabFor(n) { if (!vocabCache[n]) { const l = COURSE.lesson(n); vocabCache[n] = l ? ENGINE.vocabQuestions(l, { rand: ENGINE.rng(n * 97) }) : [] } return vocabCache[n] }
  function findQuestion(id) {
    id = String(id || '');
    let m = id.match(/^vocab:(\d+)-(\d+)(?::(article|meaning|write))?$/);
    if (m) { const kind = m[3] || 'write'; return vocabFor(+m[1]).find(q => q.id === `vocab:${m[1]}-${m[2]}:${kind}`) || null }
    m = id.match(/^gl:(G\d\d-[A-Z0-9]+)$/); if (m) return root.GRAMMAR_LAB ? (/-B(\d)$/.test(m[1]) ? GRAMMAR_LAB.builder(+m[1].slice(1, 3), +m[1].slice(-1) - 1) : GRAMMAR_LAB.question(m[1])) : null; // Grammar Lab
    m = id.match(/^L(\d+)-/); if (m) { const c = COURSE.content(+m[1]); if (c) return [...c.practice, ...c.apply, ...c.quiz].find(q => q.id === id) || null }
    return null;
  }
  // The id an answer is stored under: vocabulary "write" questions share the Wortschatz trainer's id (vocab:<id>)
  function itemId(q) { return q.source === 'wortschatz' && /:write$/.test(q.id) ? q.id.replace(/:write$/, '') : q.id }
  function promptText(q) { return [q.instructions, q.prompt, q.hint ? '(' + q.hint + ')' : ''].filter(Boolean).join(' ').slice(0, 300) }
  function record(q, res, resp, source, testId) {
    if (!res || !res.graded || !root.A1) return;
    A1.record({ item: itemId(q), lesson: q.lesson, kind: q.type, topic: q.topic, skill: q.skill, correct: !!res.correct,
      answer: ENGINE.responseText(q, resp), expected: ENGINE.answerText(q), prompt: promptText(q), explanation: q.explanation, source: source || 'practice', testId });
  }
  root.A1D = { loadAll, whenAuth, findQuestion, vocabFor, itemId, record };
})(window);
