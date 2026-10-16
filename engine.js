// Deutsch A1 · exercise engine
// Pure evaluation (no DOM) + UI components for 12 question types, in two modes:
//   practice – immediate feedback, explanation, retry wrong ones at the end
//   test     – no feedback until the whole test is submitted
//
// Question model (see lessons/l01.js):
// { id, level, lesson, topic, skill, grammar, difficulty, type, instructions, prompt,
//   options?, answer, accept?, explanation, objective, status, points?, ... }
(function (root) {
  const E = {};

  // ---------------------------------------------------------------- evaluation (pure)
  const EDGE_PUNCT = /^[\s.!?,;:"„“”‚‘'()\-–]+|[\s.!?,;:"„“”‚‘'()\-–]+$/g;
  function base(s) { return String(s == null ? '' : s).normalize('NFC').replace(/[’`´]/g, "'").replace(/\s+/g, ' ').trim().replace(EDGE_PUNCT, '').replace(/\s*,\s*/g, ' ').replace(/\s+/g, ' ') }
  function fold(s) { return s.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss') }
  const ART = /^(der|die|das|ein|eine|einen|dem|den)\s+/i;
  E.base = base; E.fold = fold;

  // Free-text answer against a list of explicitly accepted answers.
  // Tolerates: surrounding punctuation, extra spaces, commas, capitalisation (with a note),
  // ae/oe/ue/ss for ä/ö/ü/ß (with a note). Does NOT accept merely "similar" answers.
  E.evalText = function (input, accepted) {
    const a = base(input);
    if (!a) return { correct: false, empty: true };
    const list = (Array.isArray(accepted) ? accepted : [accepted]).filter(x => x != null).map(String);
    for (const ok of list) if (base(ok) === a) return { correct: true, matched: ok };
    for (const ok of list) if (base(ok).toLowerCase() === a.toLowerCase()) return { correct: true, matched: ok, note: 'Watch the capital letters: ' + ok };
    for (const ok of list) if (fold(base(ok)) === fold(a)) return { correct: true, matched: ok, note: 'Correct spelling: ' + ok };
    for (const ok of list) {
      const b = base(ok);
      if (ART.test(b) && fold(b.replace(ART, '')) === fold(a.replace(ART, ''))) return { correct: false, matched: ok, note: 'Right word, but the article is wrong or missing.' };
    }
    return { correct: false };
  };

  const same = (a, b) => base(a) === base(b);

  // Returns { correct: bool|null, score: 0..1, graded: bool, note?, parts? }
  E.check = function (q, r) {
    switch (q.type) {
      case 'mc': case 'article': case 'reading': case 'listen':
        if (q.type === 'listen' && !q.options) return wrapText(q, r);
        if (r == null || r === '') return { correct: false, score: 0, graded: true, empty: true };
        { const ok = same(r, q.answer); return { correct: ok, score: ok ? 1 : 0, graded: true } }
      case 'gap': {
        const blanks = q.answer; const resp = Array.isArray(r) ? r : [];
        const parts = blanks.map((acc, i) => E.evalText(resp[i], acc));
        if (parts.every(p => p.empty)) return { correct: false, score: 0, graded: true, empty: true, parts };
        const n = parts.filter(p => p.correct).length;
        const note = parts.map(p => p.note).filter(Boolean).join(' · ') || undefined;
        return { correct: n === blanks.length, score: n / blanks.length, graded: true, parts, note };
      }
      case 'conjugation': case 'translate': case 'dictation':
        return wrapText(q, r);
      case 'order': {
        const s = Array.isArray(r) ? r.join(' ') : String(r || '');
        if (!base(s)) return { correct: false, score: 0, graded: true, empty: true };
        const res = E.evalText(s, [q.answer].concat(q.accept || []));
        return { correct: res.correct, score: res.correct ? 1 : 0, graded: true, note: res.note };
      }
      case 'match': {
        const resp = r || {}; const n = q.pairs.length;
        const right = q.pairs.filter(([a, b]) => resp[a] === b).length;
        if (!Object.keys(resp).length) return { correct: false, score: 0, graded: true, empty: true };
        return { correct: right === n, score: right / n, graded: true };
      }
      case 'writing': case 'speaking':
        return { correct: null, score: null, graded: false };
    }
    return { correct: false, score: 0, graded: true };
  };
  function wrapText(q, r) {
    const res = E.evalText(r, [q.answer].concat(q.accept || []));
    return { correct: res.correct, score: res.correct ? 1 : 0, graded: true, note: res.note, empty: res.empty };
  }

  // Score a set of answered questions. Ungraded (writing/speaking) are excluded from the total.
  E.score = function (items) { // items: [{q, result}]
    let earned = 0, max = 0; const by = { skill: {}, topic: {} };
    items.forEach(({ q, result }) => {
      if (!result || !result.graded) return;
      const pts = q.points || 1; const got = (result.score || 0) * pts;
      earned += got; max += pts;
      [['skill', q.skill || 'other'], ['topic', q.topic || 'other']].forEach(([k, v]) => {
        const b = by[k][v] = by[k][v] || { earned: 0, max: 0 }; b.earned += got; b.max += pts;
      });
    });
    const round = x => Math.round(x * 100) / 100;
    return { earned: round(earned), max, pct: max ? Math.round(earned / max * 100) : 0, by };
  };

  // Text shown as "the right answer"
  E.answerText = function (q) {
    if (q.type === 'gap') return q.answer.map(a => Array.isArray(a) ? a[0] : a).join(' · ');
    if (q.type === 'match') return q.pairs.map(p => p[0] + ' → ' + p[1]).join(' · ');
    if (q.type === 'writing' || q.type === 'speaking') return q.model || '';
    return Array.isArray(q.answer) ? q.answer[0] : String(q.answer);
  };
  E.responseText = function (q, r) {
    if (r == null) return '';
    if (q.type === 'gap') return (r || []).join(' · ');
    if (q.type === 'order') return Array.isArray(r) ? r.join(' ') : String(r);
    if (q.type === 'match') return Object.entries(r).map(([a, b]) => a + ' → ' + b).join(' · ');
    if (typeof r === 'object') return JSON.stringify(r);
    return String(r);
  };

  // Deterministic shuffle (seeded) so a test keeps its order on resume
  E.rng = function (seed) { let s = seed >>> 0 || 1; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296 };
  E.shuffle = function (a, rand = Math.random) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] } return a };

  // ---------------------------------------------------------------- vocabulary questions from Wortschatz data
  // Builds real questions from the site's word list (de/en), ids match the Wortschatz trainer ("vocab:<id>")
  E.vocabQuestions = function (lessonObj, opts = {}) {
    const words = (lessonObj.words || []).filter(w => w.de && w.en);
    const rand = opts.rand || Math.random;
    const pool = opts.pool || words;
    const out = [];
    words.forEach(w => {
      const lvl = lessonObj.level, L = lessonObj.n;
      const m = w.de.match(/^(der|die|das)\s+([A-ZÄÖÜ][^\s/]*)$/);
      if (m) out.push({ id: 'vocab:' + w.id + ':article', vocabId: w.id, level: lvl, lesson: L, topic: 'articles', skill: 'grammar', grammar: 'noun-gender', difficulty: 1, type: 'article',
        instructions: 'Choose the article.', prompt: m[2], hint: w.en, options: ['der', 'die', 'das'], answer: m[1], explanation: `${w.de} = ${w.en}. Learn every noun together with its article.`, status: 'generated', source: 'wortschatz' });
      const others = E.shuffle(pool.filter(x => x.id !== w.id && x.en !== w.en), rand).slice(0, 3);
      if (others.length === 3) out.push({ id: 'vocab:' + w.id + ':meaning', vocabId: w.id, level: lvl, lesson: L, topic: 'vocabulary', skill: 'vocabulary', difficulty: 1, type: 'mc',
        instructions: 'What does it mean?', prompt: w.de, options: E.shuffle([w.en, ...others.map(o => o.en)], rand), answer: w.en, explanation: `${w.de} = ${w.en}`, status: 'generated', source: 'wortschatz' });
      out.push({ id: 'vocab:' + w.id + ':write', vocabId: w.id, level: lvl, lesson: L, topic: 'vocabulary', skill: 'vocabulary', difficulty: 2, type: 'translate',
        instructions: 'Write it in German' + (m ? ' (with the article)' : '') + '.', prompt: w.en, answer: w.de.replace(/\s*\(.*?\)\s*/g, ' ').trim(), accept: w.de.split(/\s*\/\s*/).map(s => s.replace(/\s*\(.*?\)\s*/g, ' ').trim()), explanation: `${w.en} = ${w.de}`, status: 'generated', source: 'wortschatz' });
    });
    return out;
  };

  // ---------------------------------------------------------------- speech (text-to-speech only, never "pronunciation scoring")
  E.canSpeak = typeof root.speechSynthesis !== 'undefined';
  E.speak = function (text, rate = 0.9) {
    if (!E.canSpeak) return false;
    try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(String(text)); u.lang = 'de-DE'; u.rate = rate;
      const v = speechSynthesis.getVoices().find(v => /^de(-|_)/i.test(v.lang)); if (v) u.voice = v; speechSynthesis.speak(u); return true } catch (e) { return false }
  };

  // ---------------------------------------------------------------- UI
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  E.esc = esc;
  const TYPE_LABEL = { mc: 'Multiple choice', gap: 'Fill in the gap', order: 'Word order', match: 'Matching', article: 'der, die or das?', conjugation: 'Verb form', translate: 'Translate', listen: 'Listening', dictation: 'Dictation', reading: 'Reading', writing: 'Writing', speaking: 'Speaking' };
  E.TYPE_LABEL = TYPE_LABEL;
  let uid = 0;

  // Mount one question. Returns a controller.
  E.mount = function (el, q, opts = {}) {
    const id = 'q' + (++uid); const mode = opts.mode || 'practice';
    let resp = opts.response != null ? clone(opts.response) : init(q); let locked = false;
    const rand = opts.rand || Math.random;
    const orderTokens = q.type === 'order' ? (q._tokens = q._tokens || E.shuffle(q.tokens || q.answer.split(' '), rand)) : null;
    const matchRight = q.type === 'match' ? (q._right = q._right || E.shuffle(q.pairs.map(p => p[1]), rand)) : null;
    let matchSel = null;

    function init(q) { return q.type === 'gap' ? [] : q.type === 'order' ? [] : q.type === 'match' ? {} : (q.type === 'writing' || q.type === 'speaking') ? { text: '', checks: [] } : '' }
    function clone(x) { return JSON.parse(JSON.stringify(x)) }
    function changed() { opts.onChange && opts.onChange(resp) }

    function passage() {
      let h = '';
      if (q.passage) h += `<div class="ex-passage" lang="de">${q.passage.split('\n').map(p => `<p>${esc(p)}</p>`).join('')}</div>`;
      if (q.type === 'listen' || q.type === 'dictation') {
        h += `<div class="ex-audio"><button type="button" class="ex-btn" data-play="1">🔊 Play</button><button type="button" class="ex-btn ghost" data-play="0.7">🐢 Slower</button>
          <span class="ex-small">Computer voice (text-to-speech)</span>${E.canSpeak ? '' : '<span class="ex-warn">Your browser has no speech output — use “Show text”.</span>'}
          <button type="button" class="ex-link" data-transcript>Show text</button></div><div class="ex-transcript" hidden lang="de">${esc(q.audio)}</div>`;
      }
      return h;
    }
    function body() {
      const dis = locked ? 'disabled' : '';
      switch (q.type) {
        case 'mc': case 'article': case 'reading': case 'listen':
          if (q.options) return `<div class="ex-opts ${q.type === 'article' ? 'three' : ''}" role="radiogroup" aria-label="Answer options">${q.options.map(o =>
            `<button type="button" class="ex-opt" role="radio" aria-checked="${same(resp, o)}" data-opt="${esc(o)}" ${dis}>${esc(o)}</button>`).join('')}</div>`;
          return textInput();
        case 'conjugation': case 'translate': case 'dictation': return textInput();
        case 'gap': {
          let i = 0;
          const line = esc(q.prompt).replace(/___/g, () => { const k = i++; return `<input class="ex-gap" data-gap="${k}" lang="de" autocomplete="off" spellcheck="false" autocapitalize="off" aria-label="Gap ${k + 1}" value="${esc(resp[k] || '')}" ${dis} size="${Math.max(4, String(Array.isArray(q.answer[k]) ? q.answer[k][0] : q.answer[k]).length + 1)}">` });
          return `<div class="ex-gapline" lang="de">${line}</div>`;
        }
        case 'order':
          return `<div class="ex-built" aria-label="Your sentence" lang="de">${resp.length ? resp.map((t, k) => `<button type="button" class="ex-tok on" data-un="${k}" ${dis}>${esc(t)}</button>`).join('') : '<span class="ex-small">Tap the words in the right order</span>'}</div>
            <div class="ex-bank" lang="de">${orderTokens.map((t, k) => { const used = countUsed(t, k); return `<button type="button" class="ex-tok" data-tok="${k}" ${used || locked ? 'disabled' : ''}>${esc(t)}</button>` }).join('')}</div>`;
        case 'match':
          return `<div class="ex-match"><div class="col" lang="de">${q.pairs.map(([a]) => `<button type="button" class="ex-tok ${matchSel === a ? 'sel' : ''} ${resp[a] ? 'on' : ''}" data-left="${esc(a)}" ${dis}>${esc(a)}${resp[a] ? ` <small>→ ${esc(resp[a])}</small>` : ''}</button>`).join('')}</div>
            <div class="col">${matchRight.map(b => { const used = Object.values(resp).includes(b); return `<button type="button" class="ex-tok ${used ? 'used' : ''}" data-right="${esc(b)}" ${dis || (used ? '' : '')}>${esc(b)}</button>` }).join('')}</div></div>
            <p class="ex-small">Tap a German word, then its meaning. Tap a matched word again to undo.</p>`;
        case 'writing': case 'speaking':
          return `${q.type === 'writing' ? `<textarea class="ex-text" rows="5" lang="de" spellcheck="false" placeholder="Schreib hier …" ${dis}>${esc(resp.text)}</textarea>` : `<p class="ex-small">Say your answer out loud (record yourself with your phone if you like), then check it against the list.</p>`}
            ${q.rubric ? `<fieldset class="ex-rubric"><legend>Check yourself</legend>${q.rubric.map((c, k) => `<label><input type="checkbox" data-check="${k}" ${resp.checks[k] ? 'checked' : ''} ${dis}> ${esc(c)}</label>`).join('')}</fieldset>` : ''}
            <details class="ex-model"><summary>Show a model answer</summary><div lang="de">${esc(q.model || '').replace(/\n/g, '<br>')}</div></details>`;
      }
      return '';
    }
    function textInput() { return `<input type="text" class="ex-input" lang="de" autocomplete="off" spellcheck="false" autocapitalize="off" aria-label="Your answer" placeholder="${esc(q.placeholder || 'Your answer')}" value="${esc(resp)}" ${locked ? 'disabled' : ''}>` }
    function countUsed(t, k) { // token k is used if it appears in resp at least as many times as among bank positions <= k with same text
      const same_ = orderTokens.slice(0, k + 1).filter(x => x === t).length; return resp.filter(x => x === t).length >= same_;
    }

    function render() {
      el.innerHTML = `<div class="ex" id="${id}" data-qid="${esc(q.id)}">
        <div class="ex-head"><span class="ex-type">${esc(TYPE_LABEL[q.type] || q.type)}</span>${q.skill ? `<span class="ex-tag">${esc(q.skill)}</span>` : ''}</div>
        <p class="ex-instr">${esc(q.instructions || '')}</p>
        ${passage()}
        ${q.type !== 'gap' ? `<div class="ex-prompt" ${/^(mc|article|reading|listen|order|match)$/.test(q.type) || q.lang === 'de' ? 'lang="de"' : ''}>${esc(q.prompt || '')}${q.hint ? ` <span class="ex-hint">(${esc(q.hint)})</span>` : ''}</div>` : ''}
        <div class="ex-body">${body()}</div>
        <div class="ex-fb" aria-live="polite"></div></div>`;
      wire();
    }
    function wire() {
      const root_ = el.querySelector('.ex');
      root_.querySelectorAll('[data-opt]').forEach(b => b.onclick = () => { resp = b.dataset.opt; changed(); render(); if (opts.autoCheck) opts.autoCheck() });
      const ti = root_.querySelector('.ex-input'); if (ti) { ti.oninput = () => { resp = ti.value; changed() }; ti.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); opts.onEnter && opts.onEnter() } } }
      root_.querySelectorAll('[data-gap]').forEach(g => { g.oninput = () => { resp[+g.dataset.gap] = g.value; changed() }; g.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); opts.onEnter && opts.onEnter() } } });
      root_.querySelectorAll('[data-tok]').forEach(b => b.onclick = () => { resp.push(orderTokens[+b.dataset.tok]); changed(); render() });
      root_.querySelectorAll('[data-un]').forEach(b => b.onclick = () => { resp.splice(+b.dataset.un, 1); changed(); render() });
      root_.querySelectorAll('[data-left]').forEach(b => b.onclick = () => { const a = b.dataset.left; if (resp[a]) { delete resp[a]; matchSel = null } else matchSel = a; changed(); render() });
      root_.querySelectorAll('[data-right]').forEach(b => b.onclick = () => { if (!matchSel) return; const v = b.dataset.right; Object.keys(resp).forEach(k => { if (resp[k] === v) delete resp[k] }); resp[matchSel] = v; matchSel = null; changed(); render() });
      const ta = root_.querySelector('.ex-text'); if (ta) ta.oninput = () => { resp.text = ta.value; changed() };
      root_.querySelectorAll('[data-check]').forEach(c => c.onchange = () => { resp.checks[+c.dataset.check] = c.checked; changed() });
      root_.querySelectorAll('[data-play]').forEach(b => b.onclick = () => E.speak(q.audio, +b.dataset.play));
      const tr = root_.querySelector('[data-transcript]'); if (tr) tr.onclick = () => { const t = root_.querySelector('.ex-transcript'); t.hidden = !t.hidden; tr.textContent = t.hidden ? 'Show text' : 'Hide text' };
      if (opts.focus !== false) { const f = root_.querySelector('.ex-input, .ex-gap, .ex-text'); if (f && !locked) f.focus({ preventScroll: true }) }
    }
    render();
    return {
      get response() { return resp },
      check() { return E.check(q, resp) },
      lock() { locked = true; render() },
      feedback(result) {
        const fb = el.querySelector('.ex-fb');
        if (!result.graded) { fb.className = 'ex-fb info'; fb.innerHTML = `Self-check saved. ${q.explanation ? esc(q.explanation) : ''}`; return }
        fb.className = 'ex-fb ' + (result.correct ? 'ok' : result.score > 0 ? 'part' : 'no');
        fb.innerHTML = (result.correct ? '<b>Richtig!</b> ' : result.score > 0 ? `<b>Partly right (${Math.round(result.score * 100)}%).</b> ` : '<b>Not quite.</b> ')
          + (result.note ? esc(result.note) + ' ' : '')
          + (!result.correct ? `<div class="ex-ans">Answer: <b lang="de">${esc(E.answerText(q))}</b></div>` : '')
          + (q.explanation ? `<div class="ex-expl">${esc(q.explanation)}</div>` : '')
          + (q.learnHref ? `<div><a href="${esc(q.learnHref)}">Read the explanation →</a></div>` : '');
        el.querySelectorAll('.ex-opt').forEach(b => { if (same(b.dataset.opt, q.answer)) b.classList.add('right'); else if (b.getAttribute('aria-checked') === 'true') b.classList.add('wrong') });
      }
    };
  };

  // Practice runner: one question at a time, immediate feedback, then retry wrong ones.
  // opts: { title, onRecord(q, result, response), onFinish(summary) }
  E.runPractice = function (el, questions, opts = {}) {
    let queue = questions.slice(), i = 0, ctrl = null, checked = false, round = 1;
    const results = new Map(); let wrong = [];
    function show() {
      if (i >= queue.length) return summary();
      const q = queue[i]; checked = false;
      el.innerHTML = `<div class="run"><div class="run-top"><span>${esc(opts.title || 'Practice')}${round > 1 ? ' · retry round' : ''}</span><span>${i + 1} / ${queue.length}</span></div>
        <div class="run-bar"><i style="width:${i / queue.length * 100}%"></i></div><div class="run-q"></div>
        <div class="run-actions"><button type="button" class="ex-btn ghost" data-skip>Skip</button><button type="button" class="ex-btn" data-go>Check</button></div></div>`;
      ctrl = E.mount(el.querySelector('.run-q'), q, { mode: 'practice', onEnter: go });
      el.querySelector('[data-go]').onclick = go;
      el.querySelector('[data-skip]').onclick = () => { if (!checked) { wrong.push(q) } i++; show() };
    }
    function go() {
      const q = queue[i];
      if (checked) { i++; return show() }
      const res = ctrl.check();
      if (res.empty) { const fb = el.querySelector('.ex-fb'); fb.className = 'ex-fb no'; fb.textContent = 'Answer first, or press Skip.'; return }
      checked = true; ctrl.lock(); ctrl.feedback(res);
      if (round === 1 || !results.has(q.id)) results.set(q.id, { q, result: res, response: ctrl.response });
      if (res.graded && !res.correct) wrong.push(q);
      try { opts.onRecord && opts.onRecord(q, res, ctrl.response) } catch (e) { console.warn(e) }
      const b = el.querySelector('[data-go]'); b.textContent = i + 1 < queue.length ? 'Next →' : 'Finish'; b.focus();
      el.querySelector('[data-skip]').hidden = true;
      el.querySelector('.run-bar i').style.width = ((i + 1) / queue.length * 100) + '%';
    }
    function summary() {
      const sc = E.score([...results.values()]);
      el.innerHTML = `<div class="run done"><div class="run-top"><span>${esc(opts.title || 'Practice')}</span><span>Finished</span></div>
        <div class="big-score">${sc.pct}%</div><p class="ex-small">${sc.earned} of ${sc.max} points in the first round${wrong.length ? ` · ${wrong.length} to retry` : ''}.</p>
        <div class="run-actions">${wrong.length ? `<button type="button" class="ex-btn" data-retry>Retry the ${wrong.length} wrong one${wrong.length === 1 ? '' : 's'}</button>` : ''}<button type="button" class="ex-btn ghost" data-again>Start again</button></div></div>`;
      const r = el.querySelector('[data-retry]'); if (r) r.onclick = () => { queue = wrong; wrong = []; i = 0; round++; show() };
      el.querySelector('[data-again]').onclick = () => { queue = questions.slice(); wrong = []; results.clear(); i = 0; round = 1; show() };
      if (round === 1 || !opts._finished) { opts._finished = true; try { opts.onFinish && opts.onFinish(sc) } catch (e) { console.warn(e) } }
    }
    show();
  };

  root.ENGINE = E;
  if (typeof module !== 'undefined' && module.exports) module.exports = E;
})(typeof window !== 'undefined' ? window : globalThis);
