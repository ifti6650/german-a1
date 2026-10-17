// Deutsch A1 · Grammar Lab core (browser + Node): questions in the shared exercise format, and the learner's grammar progress.
// Content: grammar/data.js (window.GRAMMAR, built from the supplied dataset + reviewed corrections).
// Progress: localStorage 'a1:grammar'. For signed-in learners sync.js mirrors it to their own app_state row (RLS),
// and every graded answer also goes to attempts / review_items through record_answer_v2 (Mistake Trainer, analytics).
// Guests: progress stays in this browser only.
// Stable ids: step 1–25, question ids from the dataset (G07-03), item id in the database "gl:G07-03", topic "grammar-07".
(function (root) {
  const KEY = 'a1:grammar';
  const G = () => root.GRAMMAR || { steps: [], checkpoints: [] };
  const pad = n => String(n).padStart(2, '0');
  const topic = n => 'grammar-' + pad(n);
  const step = n => G().steps[n - 1] || null;
  const raw = id => { const m = /^G(\d\d)-/.exec(id || ''); const s = m && step(+m[1]); return s ? s.questions.find(q => q.id === id) || null : null };

  // A Grammar Lab question in the format of engine.js (used by the Lab, the Mistake Trainer and reviews)
  function question(id) {
    const q = raw(String(id).replace(/^gl:/, '')); if (!q) return null; const s = step(q.step);
    const base = { id: 'gl:' + q.id, lesson: null, step: q.step, topic: topic(q.step), skill: 'grammar', explanation: q.explanation,
      instructions: `Grammar Lab · Step ${q.step}: ${s.title}`, source: 'grammar' };
    return q.kind === 'mc' ? Object.assign(base, { type: 'mc', prompt: q.prompt, options: q.options.slice(), answer: q.answer })
      : Object.assign(base, { type: 'gap', prompt: q.prompt, answer: [[q.answer].concat(q.accept || [])] });
  }
  // sentence builder for an example sentence (word order, graded)
  function builder(n, k) {
    const s = step(n); const ex = s && s.examples[k]; if (!ex) return null;
    const first = ex.de.split(/(?<=[.!?])\s+/)[0]; // one sentence at a time
    return { id: `gl:G${pad(n)}-B${k + 1}`, lesson: null, step: n, topic: topic(n), skill: 'grammar', type: 'order', answer: first,
      tokens: first.split(/\s+/), instructions: `Grammar Lab · Step ${n}: build the sentence`, prompt: ex.en, explanation: `Pattern: ${s.formula}`, source: 'grammar' };
  }
  function label(t) { const m = /^grammar-(\d+)$/.exec(t || ''); if (!m) return null; const s = step(+m[1]); return `Grammar step ${+m[1]}${s ? ': ' + s.title : ''}` }

  // ---------------------------------------------------------------- progress
  const now = () => new Date().toISOString();
  function load() { try { const v = JSON.parse(root.localStorage.getItem(KEY) || 'null'); return v && v.v === 1 ? v : { v: 1, steps: {}, cps: {} } } catch (e) { return { v: 1, steps: {}, cps: {} } } }
  function save(s) { try { root.localStorage.setItem(KEY, JSON.stringify(s)) } catch (e) {} }
  const S = (s, n) => (s.steps[n] = s.steps[n] || { ans: {}, built: {}, tasks: {} });
  const okStep = n => Number.isInteger(+n) && +n >= 1 && +n <= 25;

  const P = {
    KEY, state: load,
    visit(n, tab) { if (!okStep(n)) return; const s = load(); const x = S(s, n); x.seen = now(); s.last = { s: +n, tab: tab || null, at: x.seen }; save(s) },
    // one graded answer; `first` keeps the very first result per question (practice score), `c` the latest
    answer(n, qid, correct, answer) {
      if (!okStep(n)) return; const s = load(); const x = S(s, n); const a = x.ans[qid];
      x.ans[qid] = { c: !!correct, first: a ? a.first : !!correct, a: String(answer == null ? '' : answer).slice(0, 200), n: (a ? a.n : 0) + 1, at: now() };
      const st = step(n); if (st && st.questions.every(q => x.ans[q.id] && x.ans[q.id].c)) x.done = x.done || now();
      s.last = { s: +n, tab: 'practice', at: now() }; save(s);
    },
    built(n, k) { if (!okStep(n)) return; const s = load(); S(s, n).built[k] = now(); save(s) },
    task(n, id, on) { if (!okStep(n)) return; const s = load(); const x = S(s, n); if (on) x.tasks[id] = x.tasks[id] || now(); else delete x.tasks[id]; save(s) },
    reopenWrong(n) { const s = load(); const x = S(s, n); let k = 0; Object.keys(x.ans).forEach(id => { if (!x.ans[id].c) { x.ans[id].retry = true; k++ } }); save(s); return k },
    checkpoint(k, score, max) { const s = load(); const c = s.cps[k] = s.cps[k] || {}; c.last = score; c.max = max; c.best = Math.max(c.best || 0, score); c.at = now(); c.n = (c.n || 0) + 1; s.last = { cp: k, at: c.at }; save(s) },
    stepStats(n) {
      const st = step(n); const x = load().steps[n] || { ans: {}, built: {}, tasks: {} }; const qs = st ? st.questions : [];
      const answered = qs.filter(q => x.ans[q.id]).length, correct = qs.filter(q => x.ans[q.id] && x.ans[q.id].c).length, first = qs.filter(q => x.ans[q.id] && x.ans[q.id].first).length;
      return { n, total: qs.length, answered, correct, first, wrong: qs.filter(q => x.ans[q.id] && !x.ans[q.id].c).map(q => q.id), done: !!x.done, doneAt: x.done || null,
        seen: x.seen || null, started: !!(x.seen || answered), firstPct: answered ? Math.round(first / answered * 100) : null, pct: qs.length ? Math.round(correct / qs.length * 100) : 0,
        built: Object.keys(x.built).length, tasks: Object.keys(x.tasks).length, ans: x.ans };
    },
    overall() {
      const s = load(); const steps = G().steps.map(st => P.stepStats(st.n));
      const answered = steps.reduce((a, x) => a + x.answered, 0), first = steps.reduce((a, x) => a + x.first, 0);
      const weak = steps.filter(x => x.answered >= 4 && x.firstPct < 70).sort((a, b) => a.firstPct - b.firstPct);
      const last = s.last && okStep(s.last.s) ? s.last : null;
      const current = last && !steps[last.s - 1].done ? steps[last.s - 1] : steps.find(x => x.started && !x.done) || steps.find(x => !x.done) || null;
      return { steps, done: steps.filter(x => x.done).length, answered, total: steps.reduce((a, x) => a + x.total, 0), accuracy: answered ? Math.round(first / answered * 100) : null,
        weak, last, current, cps: s.cps || {}, a11: steps.filter((x, i) => G().steps[i].level === 'A1.1' && x.done).length, a12: steps.filter((x, i) => G().steps[i].level === 'A1.2' && x.done).length };
    }
  };

  root.GRAMMAR_LAB = Object.assign({ question, builder, label, topic, step, raw }, { progress: P });
})(typeof window !== 'undefined' ? window : globalThis);
