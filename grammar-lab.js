// Deutsch A1 · Grammar Lab page (grammar-lab.html)
//   grammar-lab.html                 overview: 25 steps, A1.1/A1.2 filter, search, progress, checkpoints, quick reference
//   grammar-lab.html?s=7#practice     step 7 — tabs: learn · practice · apply · review
//   grammar-lab.html?c=2              cumulative checkpoint 2 (steps 6–10)
// Guests can learn and practise; their progress stays in this browser. Signed-in learners' answers go to their
// account (attempts + Mistake Trainer through A1.record) and their step progress syncs through app_state.
(function () {
  const GL = window.GRAMMAR_LAB, D = window.GRAMMAR, P = GL.progress, E = window.ENGINE;
  const $ = id => document.getElementById(id), esc = E.esc;
  const pad = n => String(n).padStart(2, '0');
  const q = new URLSearchParams(location.search);
  const sN = q.has('s') ? Math.round(+q.get('s')) : null, cN = q.has('c') ? Math.round(+q.get('c')) : null;
  let signedIn = false, guest = false;
  const canSpeak = 'speechSynthesis' in window;
  const say = t => { try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.lang = 'de-DE'; u.rate = .9; const v = speechSynthesis.getVoices().find(v => /^de(-|_)/i.test(v.lang)); if (v) u.voice = v; speechSynthesis.speak(u) } catch (e) {} };
  const sayBtn = t => canSpeak ? ` <button type="button" class="gl-say" data-say="${esc(t)}" aria-label="Listen: ${esc(t)}">🔊</button>` : '';
  const guideFor = n => (window.GUIDE_INDEX || []).filter(x => x.steps.includes(n));

  // record one graded answer: always in this browser; for signed-in learners also in the account (attempts + mistakes)
  function record(qq, res, resp, source, testId) {
    const answer = E.responseText(qq, resp);
    if (qq.step && /^gl:G\d\d-(\d\d|F\d)$/.test(qq.id) && source !== 'grammar-checkpoint') P.answer(qq.step, qq.id.slice(3), res.correct, answer);
    if (signedIn && window.A1D) A1D.record(qq, res, resp, source, testId);
  }

  // ------------------------------------------------------------ sentence pattern visualisation
  function role(t) {
    const s = t.toLowerCase();
    if (/verb|können|kann|haben|habe|bin|ist|sind|sein|will|möchte|würde|partizip|infinitive|participle|imperative|modal|darf|muss|gibt|gefällt|stem|prefix/.test(s)) return 'verb';
    if (/^(ich|du|sie|er|es|wir|ihr|man)$|subject|person/.test(s)) return 'subj';
    if (/time|am |um |^am$|^in\/vor\/nach|date|ordinal/.test(s)) return 'time';
    if (/object|noun|article|den|einen|dem|der|mein|dein|possessive|pronoun|accusative|dative/.test(s)) return 'obj';
    return '';
  }
  function pattern(f) {
    return `<div class="gl-pattern" role="img" aria-label="Sentence pattern: ${esc(f)}">${f.split(/\s*;\s*/).map((part, i) => (i ? '<span class="gl-sep"></span>' : '') + part.split(/(\s\+\s|\s->\s)/).map(tk => {
      if (/^\s\+\s$/.test(tk)) return '<span class="gl-op" aria-hidden="true">+</span>';
      if (/^\s->\s$/.test(tk)) return '<span class="gl-op" aria-hidden="true">→</span>';
      return tk.trim() ? `<span class="gl-tok ${role(tk)}" lang="${/[a-z]/.test(tk) && /verb|subject|object|time|noun|article|rest|information|details|place|person|infinitive|participle|prefix|ending|phrase|clause|adjective|position/.test(tk) ? 'en' : 'de'}">${esc(tk.trim())}</span>` : '';
    }).join('')).join('')}</div>
      <div class="gl-legend" aria-hidden="true"><span><i style="background:var(--gl-teal)"></i>verb</span><span><i style="background:var(--gl-blue)"></i>subject / person</span><span><i style="background:var(--gl-amber)"></i>time</span><span><i style="background:var(--ui-ok)"></i>object / article</span></div>`;
  }

  // ------------------------------------------------------------ overview
  function overview() {
    document.title = 'Grammar Lab · Deutsch A1';
    const O = P.overall();
    const cur = O.current ? D.steps[O.current.n - 1] : D.steps[0];
    const lastHere = O.last && O.current && O.last.s === O.current.n;
    const resume = `grammar-lab.html?s=${cur.n}${lastHere && O.last.tab ? '#' + O.last.tab : ''}`;
    const cpPassed = D.checkpoints.filter(c => O.cps[c.n] && O.cps[c.n].best >= 8).length;
    $('gl').innerHTML = `${guestNote()}
      <section class="gl-card gl-top" aria-labelledby="glResT">
        <div><div class="lv">${O.answered ? 'Continue where you stopped' : 'Start here'} · ${cur.level} · Step ${pad(cur.n)}</div>
          <h2 id="glResT">${esc(cur.title)}</h2><p>${esc(cur.goal)}</p></div>
        <a class="ui-btn lg" id="glResume" href="${resume}">${O.answered ? 'Continue' : 'Start step 1'} <span aria-hidden="true">→</span></a>
        <div class="gl-stats">
          <div class="gl-stat"><b>${O.done}<small style="font-size:14px"> / 25</small></b><span>steps completed</span></div>
          <div class="gl-stat"><b>${O.answered}<small style="font-size:14px"> / ${O.total}</small></b><span>questions answered</span></div>
          <div class="gl-stat"><b>${O.accuracy == null ? '–' : O.accuracy + '%'}</b><span>right on the first try</span></div>
          <div class="gl-stat"><b>${cpPassed}<small style="font-size:14px"> / 5</small></b><span>checkpoints passed (8/10)</span></div>
        </div>
      </section>
      ${O.weak.length ? `<section class="gl-card" aria-labelledby="glWeakT"><h2 id="glWeakT">Steps to strengthen</h2><p class="cap">Under 70% right on the first try (at least 4 answers).</p>
        <ul class="gl-weak">${O.weak.slice(0, 4).map(x => `<li><a href="grammar-lab.html?s=${x.n}#practice"><span><b>Step ${x.n}</b> · ${esc(D.steps[x.n - 1].title)}</span><span class="gl-st warn">${x.firstPct}%</span></a></li>`).join('')}</ul></section>` : ''}
      <div class="gl-tools" role="search">
        <label class="ui-sr" for="glQ">Search grammar topics</label>
        <input class="ui-input" id="glQ" type="search" placeholder="Search a topic: Dativ, Perfekt, nicht, können …" autocomplete="off">
        <span role="group" aria-label="Course level"><button class="gl-chip" data-lv="" aria-pressed="true">All</button> <button class="gl-chip" data-lv="A1.1" aria-pressed="false">A1.1</button> <button class="gl-chip" data-lv="A1.2" aria-pressed="false">A1.2</button></span>
      </div>
      <p class="ui-sr" id="glCount" role="status" aria-live="polite"></p>
      <div id="glList"></div>
      <details class="gl-card"><summary>How to study with the Grammar Lab</summary><ol style="margin:12px 0 0">
        <li>Read the goal and the short rule. Identify the conjugated verb and its position.</li>
        <li>Read all three German models aloud. Make one similar sentence yourself.</li>
        <li>Correct the wrong sentence without seeing its solution.</li>
        <li>Answer the questions; explain every error using the rule.</li>
        <li>Build new sentences and compare your writing with the model.</li>
        <li>Return to weak steps after 1 day, 3 days and 7 days. Take a cumulative checkpoint every five steps.</li></ol></details>
      <details class="gl-card" id="glRef"><summary>Grammar quick reference &amp; self-assessment</summary><div class="gl-body sg-body" id="glRefBody" style="margin-top:12px"><span class="ui-sk" style="height:60px"></span></div></details>`;
    let level = '', term = '';
    const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss');
    const hay = st => norm([`step ${st.n}`, st.title, st.goal, st.formula, ...st.explanations, ...st.notes, ...st.examples.map(e => e.de + ' ' + e.en)].join(' '));
    function card(st) {
      const s = O.steps[st.n - 1];
      const badge = s.done ? '<span class="gl-st ok">✓ Completed</span>' : s.answered ? `<span class="gl-st go">${s.correct}/${s.total} right</span>` : s.seen ? '<span class="gl-st go">Started</span>' : '<span class="gl-st">New</span>';
      return `<a class="gl-sc" href="grammar-lab.html?s=${st.n}" data-n="${st.n}"><span class="no"><span>${st.level} · Step ${pad(st.n)}</span>${badge}</span>
        <h3>${esc(st.title)}</h3><p class="goal">${esc(st.goal)}</p><code lang="de">${esc(st.formula)}</code>
        <span class="meta">8 questions · 3 builder sentences · 3 writing tasks${s.firstPct != null ? ` · ${s.firstPct}% first try` : ''}</span>
        <span class="gl-bar" role="progressbar" aria-label="Step ${st.n}: ${s.correct} of ${s.total} questions right" aria-valuemin="0" aria-valuemax="${s.total}" aria-valuenow="${s.correct}"><i style="width:${s.pct}%"></i></span></a>`;
    }
    function cpCard(c) {
      const r = O.cps[c.n];
      return `<a class="gl-sc gl-cpc" href="grammar-lab.html?c=${c.n}" data-cp="${c.n}"><span class="no"><span>Cumulative review</span>${r ? `<span class="gl-st ${r.best >= 8 ? 'ok' : 'warn'}">Best ${r.best}/10</span>` : '<span class="gl-st">Not taken</span>'}</span>
        <h3>${esc(c.title)}</h3><p class="goal">10 mixed questions from steps ${c.from}–${c.after}. Try them without revisiting the steps first.</p></a>`;
    }
    function list() {
      const t = norm(term); let shown = 0;
      const html = ['A1.1', 'A1.2'].map(lv => {
        const xs = D.steps.filter(st => st.level === lv && (!level || level === lv) && (!t || hay(st).includes(t)));
        shown += xs.length; if (!xs.length) return '';
        const items = []; xs.forEach(st => { items.push(card(st)); const c = D.checkpoints.find(c => c.after === st.n); if (c && !t) items.push(cpCard(c)) });
        return `<section aria-labelledby="lv-${lv}"><div class="gl-level"><h2 id="lv-${lv}">German ${lv}</h2><span>Steps ${lv === 'A1.1' ? '1–13' : '14–25'} · ${lv === 'A1.1' ? O.a11 : O.a12} completed</span></div><div class="gl-grid">${items.join('')}</div></section>`;
      }).join('');
      $('glList').innerHTML = html || `<div class="ui-state empty"><span class="ic">?</span><div><b>No matching step</b>Nothing found for “${esc(term)}”.</div></div>`;
      $('glCount').textContent = `${shown} grammar steps shown`;
    }
    $('glQ').addEventListener('input', e => { term = e.target.value.trim(); list() });
    document.querySelectorAll('[data-lv]').forEach(b => b.addEventListener('click', () => { level = b.dataset.lv; document.querySelectorAll('[data-lv]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); list() }));
    list();
    $('glRef').addEventListener('toggle', async () => {
      if (!$('glRef').open || $('glRefBody').dataset.done) return;
      try { const r = await fetch('grammar/reference.md'); if (!r.ok) throw 0; $('glRefBody').innerHTML = GUIDE_MD.render(await r.text(), { hOffset: 1 }); $('glRefBody').dataset.done = 1 }
      catch (e) { $('glRefBody').innerHTML = '<div class="ui-state error"><span class="ic">!</span><div><b>Could not load the reference.</b>Check your connection and try again.</div></div>' }
    });
  }
  function guestNote() {
    return guest ? `<div class="ui-state gl-guest" role="note"><span class="ic">i</span><div style="flex:1"><b>You are learning as a guest</b>Your answers and progress are saved only in this browser, not in an account. Sign in to keep your progress on all devices and to use the Mistake Trainer.</div><a class="ui-btn sm" href="index.html?signin=1&amp;next=${encodeURIComponent(location.pathname.split('/').pop() + location.search + location.hash)}">Sign in</a></div>` : '';
  }

  // ------------------------------------------------------------ step page
  const TABS = [['learn', 'Learn'], ['practice', 'Practice'], ['apply', 'Write & speak'], ['review', 'Review']];
  function stepPage(n) {
    const st = D.steps[n - 1];
    document.title = `Step ${n}: ${st.title} · Grammar Lab · Deutsch A1`;
    $('glKick').textContent = `Grammar Lab · ${st.level} · Step ${pad(n)} of 25`;
    $('glTitle').textContent = st.title; $('glLead').textContent = st.goal;
    $('glHead').innerHTML = `<a class="ui-btn sm ghost" href="grammar-lab.html">← All steps</a>${n > 1 ? `<a class="ui-btn sm ghost" href="grammar-lab.html?s=${n - 1}" rel="prev">← Step ${n - 1}</a>` : ''}${n < 25 ? `<a class="ui-btn sm ghost" href="grammar-lab.html?s=${n + 1}" rel="next">Step ${n + 1} →</a>` : ''}`;
    let tab = TABS.some(t => t[0] === location.hash.slice(1)) ? location.hash.slice(1) : 'learn';
    function progressStrip() {
      const s = P.stepStats(n);
      $('glProg').innerHTML = `<span>${s.correct} of ${s.total} questions right${s.firstPct != null ? ` · ${s.firstPct}% on the first try` : ''}${s.done ? ' · <b style="color:var(--ui-ok)">✓ Step completed</b>' : ''}</span>
        <span class="gl-bar" role="progressbar" aria-label="Step ${n}: ${s.correct} of ${s.total} questions right" aria-valuemin="0" aria-valuemax="${s.total}" aria-valuenow="${s.correct}"><i style="width:${s.pct}%"></i></span>${guest ? '<span>Saved in this browser only</span>' : ''}`;
    }
    function tabs() { $('glTabs').innerHTML = TABS.map(([k, l], i) => `<button role="tab" type="button" id="tab-${k}" aria-controls="gl" aria-selected="${k === tab}" tabindex="${k === tab ? 0 : -1}" data-tab="${k}"><span class="k">${i + 1}</span>${l}</button>`).join('') }
    const navRow = () => { const i = TABS.findIndex(t => t[0] === tab); const nx = TABS[i + 1]; return `<div class="gl-nav">${i ? `<button type="button" class="ui-btn sm quiet" data-tab="${TABS[i - 1][0]}">← ${TABS[i - 1][1]}</button>` : '<span></span>'}${nx ? `<button type="button" class="ui-btn ghost" data-tab="${nx[0]}">Next: ${nx[1]} →</button>` : n < 25 ? `<a class="ui-btn" href="grammar-lab.html?s=${n + 1}">Next step: ${esc(D.steps[n].title)} →</a>` : `<a class="ui-btn" href="grammar-lab.html">All steps</a>`}</div>` };

    function learn() {
      const g = guideFor(n);
      return `<section class="gl-card"><div class="gl-label">01 · Goal</div><h2>What you will learn</h2><p class="gl-goal">${esc(st.goal)}</p>
          <h3>The rule</h3><ol class="gl-rules">${st.explanations.map(x => `<li>${esc(x)}</li>`).join('')}</ol></section>
        <section class="gl-card"><div class="gl-label">02 · How the sentence works</div><h2>Sentence structure</h2>${pattern(st.formula)}
          <ul class="gl-ex" lang="de">${st.examples.map(e => `<li><span class="de">${esc(e.de)}</span>${sayBtn(e.de)}<span class="en" lang="en">${esc(e.en)}</span></li>`).join('')}</ul></section>
        <section class="gl-card"><div class="gl-label">03 · Correct or incorrect?</div><h2>Common mistake</h2>
          <div class="gl-cmp"><div class="bad"><b>✗ Incorrect</b><div lang="de"><s>${esc(st.trap.wrong)}</s></div></div><div class="good"><b>✓ Correct</b><div lang="de">${esc(st.trap.correct)}${sayBtn(st.trap.correct)}</div></div></div>
          <p class="gl-why"><b>Why:</b> ${esc(st.trap.why)}</p></section>
        <section class="gl-card"><div class="gl-label">04 · Deep understanding</div><h2>Patterns and contrasts</h2><ul>${st.notes.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
          ${g.length ? `<h3>Use it in real life</h3><ul class="gl-rel">${g.map(x => `<li><a href="study-guide.html?l=${x.n}">Study Guide · Lektion ${x.n}<span lang="de">${esc(x.title)}</span></a></li>`).join('')}</ul>` : ''}</section>
        ${navRow()}`;
    }
    function practice() {
      const s = P.stepStats(n);
      return `<section class="gl-card"><div class="gl-label">05 · Self-check</div><h2>Eight graded questions</h2>
          <p class="cap">Choose an answer or type the missing form. You see the result and the explanation at once.${signedIn ? ' Wrong answers go to your Mistake Trainer.' : ''}</p>
          <div class="gl-score" id="glScore"></div>
          <div id="glQs">${st.questions.map((x, i) => `<div class="gl-q" id="q-${x.id}"><div class="gl-qh"><span>${i + 1} · ${x.kind === 'mc' ? 'Multiple choice' : 'Write the missing form'}</span><span>${x.id}</span></div><div class="gl-qm"></div><div class="gl-qa"></div></div>`).join('')}</div>
          ${s.wrong.length ? `<div class="gl-qa"><button type="button" class="ui-btn ghost" id="glRetry">Retry the ${s.wrong.length} wrong answer${s.wrong.length === 1 ? '' : 's'}</button></div>` : ''}</section>
        <section class="gl-card"><div class="gl-label">06 · Construct, don’t just recognise</div><h2>Sentence builder</h2>
          <p class="cap">Tap the words in the right order. The English meaning is your guide.</p><div id="glBuild"></div></section>
        ${navRow()}`;
    }
    function mountQuestions() {
      const s = P.stepStats(n);
      $('glScore').innerHTML = `<span><b>${s.correct}</b> / ${s.total} right</span><span><b>${s.answered}</b> answered</span>${s.firstPct != null ? `<span><b>${s.firstPct}%</b> first try</span>` : ''}${s.done ? '<span class="gl-st ok">✓ Step completed</span>' : ''}`;
      st.questions.forEach(raw => {
        const qq = GL.question(raw.id), box = $('q-' + raw.id), slot = box.querySelector('.gl-qm'), act = box.querySelector('.gl-qa');
        const prior = s.ans[raw.id];
        if (prior && !prior.retry) {
          const resp = raw.kind === 'mc' ? prior.a : [prior.a];
          const c = E.mount(slot, qq, { response: resp, focus: false }); c.lock(); c.feedback(E.check(qq, resp));
          act.innerHTML = prior.c ? '' : `<button type="button" class="ui-btn sm ghost" data-again="${raw.id}">Try again</button>`;
          return;
        }
        let done = false;
        const go = () => {
          if (done) return; const res = c.check();
          if (res.empty) { const fb = slot.querySelector('.ex-fb'); fb.className = 'ex-fb no'; fb.textContent = 'Answer first.'; return }
          done = true; c.lock(); c.feedback(res); record(qq, res, c.response, 'grammar-lab');
          act.innerHTML = res.correct ? '' : `<button type="button" class="ui-btn sm ghost" data-again="${raw.id}">Try again</button>`;
          progressStrip(); const s2 = P.stepStats(n); $('glScore').innerHTML = `<span><b>${s2.correct}</b> / ${s2.total} right</span><span><b>${s2.answered}</b> answered</span>${s2.firstPct != null ? `<span><b>${s2.firstPct}%</b> first try</span>` : ''}${s2.done ? '<span class="gl-st ok">✓ Step completed</span>' : ''}`;
        };
        const c = E.mount(slot, qq, { focus: false, autoCheck: raw.kind === 'mc' ? go : null, onEnter: go });
        act.innerHTML = raw.kind === 'mc' ? '' : `<button type="button" class="ui-btn sm" data-check="${raw.id}">Check</button>`;
        act.onclick = e => { if (e.target.closest('[data-check]')) go() };
      });
    }
    function mountBuilder() {
      const el = $('glBuild'); let k = 0;
      function show() {
        const qq = GL.builder(n, k); const done = P.stepStats(n).built;
        el.innerHTML = `<div class="gl-qh"><span>Sentence ${k + 1} of ${st.examples.length}</span><span>${done} built correctly</span></div><div class="gl-q"><div class="gl-qm"></div></div>
          <div class="gl-qa"><button type="button" class="ui-btn sm" data-b="check">Check sentence</button><button type="button" class="ui-btn sm quiet" data-b="reset">Start again</button>${k + 1 < st.examples.length ? '<button type="button" class="ui-btn sm ghost" data-b="next">Next sentence →</button>' : ''}</div>`;
        const c = E.mount(el.querySelector('.gl-qm'), qq, { focus: false }); let checked = false;
        el.onclick = e => {
          const b = e.target.closest('[data-b]'); if (!b) return;
          if (b.dataset.b === 'reset') return show();
          if (b.dataset.b === 'next') { k++; return show() }
          if (checked) return; const res = c.check();
          if (res.empty) { const fb = el.querySelector('.ex-fb'); fb.className = 'ex-fb no'; fb.textContent = 'Tap the words first.'; return }
          checked = true; c.lock(); c.feedback(res); if (res.correct) P.built(n, k); record(qq, res, c.response, 'grammar-lab');
        };
      }
      show();
    }
    function apply() {
      const s = P.stepStats(n);
      const task = t => {
        const doneT = !!P.state().steps[n] && !!(P.state().steps[n].tasks || {})[t.id];
        const title = { correction: 'Repair the sentence', sentence_production: 'Explain the pattern and write a new sentence', variation: 'Change one detail' }[t.type] || 'Task';
        return `<div class="gl-task" data-task="${t.id}"><h3 style="margin-top:0">${title}</h3><p>${esc(t.prompt)} <b lang="de">${esc(t.question)}</b></p>
          <label class="ui-sr" for="ta-${t.id}">Your answer</label><textarea id="ta-${t.id}" lang="de" spellcheck="false" placeholder="Schreib hier …"></textarea>
          <div class="gl-qa"><button type="button" class="ui-btn sm ghost" data-model="${t.id}">Compare with the model</button><label style="display:flex;gap:8px;align-items:center;font-size:14.5px"><input type="checkbox" data-tdone="${t.id}" ${doneT ? 'checked' : ''}> I did this task</label></div>
          <div class="gl-model" hidden><b>Model:</b> <span lang="de">${esc(t.model)}</span><div class="cap" style="margin:6px 0 0">${esc(t.why)}</div><div class="gl-match" aria-live="polite"></div></div></div>`;
      };
      return `<section class="gl-card"><div class="gl-label">07 · Transfer into your own language</div><h2>Write and speak</h2>
          <p class="cap">Open tasks are for self-review (or a teacher). Nothing here is graded automatically, and your text is not saved. ${s.tasks}/4 done.</p>
          ${st.tasks.map(task).join('')}
          <div class="gl-task" data-task="G${pad(n)}-C"><h3 style="margin-top:0">Speaking and writing challenge</h3><p>${esc(st.challenge)}</p>
            <label class="ui-sr" for="ta-ch">Your notes</label><textarea id="ta-ch" lang="de" spellcheck="false" placeholder="Notes or your text (optional)"></textarea>
            <div class="gl-qa"><label style="display:flex;gap:8px;align-items:center;font-size:14.5px"><input type="checkbox" data-tdone="G${pad(n)}-C" ${(P.state().steps[n] && (P.state().steps[n].tasks || {})['G' + pad(n) + '-C']) ? 'checked' : ''}> I did the challenge out loud or in writing</label></div></div></section>
        ${navRow()}`;
    }
    function review() {
      const s = P.stepStats(n); const cp = D.checkpoints.find(c => c.after === n); const nextCp = D.checkpoints.find(c => c.after >= n);
      const wrong = st.questions.filter(x => s.ans[x.id] && !s.ans[x.id].c);
      const base = s.doneAt ? new Date(s.doneAt) : null; const day = d => base ? new Date(+base + d * 864e5).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }) : `${d} day${d > 1 ? 's' : ''} after you finish`;
      return `<section class="gl-card"><div class="gl-label">08 · Summary</div><h2>Step ${n} in one minute</h2>
          <div class="gl-sum"><div><h3 style="margin-top:0">Pattern</h3>${pattern(st.formula)}</div>
            <div><h3 style="margin-top:0">Remember</h3><ul>${st.explanations.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div></div>
          <h3>Key examples</h3><ul class="gl-ex" lang="de">${st.examples.map(e => `<li><span class="de">${esc(e.de)}</span>${sayBtn(e.de)}<span class="en" lang="en">${esc(e.en)}</span></li>`).join('')}</ul>
          <h3>Watch out</h3><p><s lang="de">${esc(st.trap.wrong)}</s> → <b lang="de">${esc(st.trap.correct)}</b> — ${esc(st.trap.why)}</p>
          <p><b>Mini review:</b> Without looking, say the pattern and two examples from memory.</p></section>
        <section class="gl-card"><div class="gl-label">09 · Your result</div><h2>${s.done ? '✓ Step completed' : `${s.correct} of ${s.total} right`}</h2>
          <p class="cap">${s.answered ? `${s.firstPct}% right on the first try. ` : 'You have not answered the questions yet. '}A step is completed when all 8 questions are answered correctly (retries count).</p>
          ${wrong.length ? `<h3>Still wrong</h3><ul>${wrong.map(x => `<li><span lang="de">${esc(x.prompt)}</span> → <b lang="de">${esc(x.answer)}</b> <span class="cap">(${esc(x.explanation)})</span></li>`).join('')}</ul>` : ''}
          <div class="gl-qa">${wrong.length ? '<button type="button" class="ui-btn" data-tab="practice">Practise them again</button>' : ''}${signedIn ? `<a class="ui-btn ghost" href="mistakes.html?topic=grammar-${pad(n)}&amp;status=all">Grammar mistakes in the Mistake Trainer</a>` : ''}</div>
          <h3>Spaced revision</h3><p>Come back to this step after 1 day (${day(1)}), 3 days (${day(3)}) and 7 days (${day(7)}).</p></section>
        ${cp ? `<section class="gl-card gl-cpc"><div class="gl-label">Cumulative review</div><h2>${esc(cp.title)}</h2><p class="cap">10 mixed questions from steps ${cp.from}–${cp.after}.${P.state().cps && P.state().cps[cp.n] ? ` Your best: ${P.state().cps[cp.n].best}/10.` : ''}</p><a class="ui-btn" href="grammar-lab.html?c=${cp.n}">Start the checkpoint →</a></section>`
          : nextCp ? `<p class="cap">Next cumulative checkpoint after step ${nextCp.after}.</p>` : ''}
        ${navRow()}`;
    }
    function render(focus) {
      tabs(); progressStrip();
      $('gl').setAttribute('aria-labelledby', 'tab-' + tab);
      $('gl').innerHTML = ({ learn, practice, apply, review })[tab]();
      if (tab === 'practice') { mountQuestions(); mountBuilder() }
      if (focus) { $('gl').focus({ preventScroll: true }); window.scrollTo({ top: Math.max(0, $('glProg').getBoundingClientRect().top + scrollY - 80) }) }
    }
    function go(t, focus) { tab = t; history.replaceState(null, '', `?s=${n}#${t}`); P.visit(n, t); render(focus) }
    $('glTabs').onclick = e => { const b = e.target.closest('[data-tab]'); if (b) go(b.dataset.tab, true) };
    $('glTabs').onkeydown = e => { const i = TABS.findIndex(t => t[0] === tab); let k = null; if (e.key === 'ArrowRight') k = TABS[(i + 1) % 4][0]; if (e.key === 'ArrowLeft') k = TABS[(i + 3) % 4][0]; if (k) { go(k); $('tab-' + k).focus() } };
    $('gl').onclick = e => {
      const t = e.target.closest('[data-tab]'); if (t) return go(t.dataset.tab, true);
      const sp = e.target.closest('[data-say]'); if (sp) return say(sp.dataset.say);
      const ag = e.target.closest('[data-again]'); if (ag) { const st_ = P.state(); const x = st_.steps[n].ans[ag.dataset.again]; if (x) { x.retry = true; localStorage.setItem(P.KEY, JSON.stringify(st_)) } return render() }
      if (e.target.id === 'glRetry') { P.reopenWrong(n); return render() }
      const m = e.target.closest('[data-model]'); if (m) {
        const box = m.closest('.gl-task'); const mod = box.querySelector('.gl-model'); mod.hidden = false;
        const t = st.tasks.find(x => x.id === m.dataset.model); const txt = box.querySelector('textarea').value;
        if (t && t.type === 'correction' && txt.trim()) { const r = E.evalText(txt, [t.model]); mod.querySelector('.gl-match').innerHTML = r.correct ? '<b style="color:var(--ui-ok)">✓ Your sentence matches the model.</b>' : 'Compare your sentence with the model word by word.' }
      }
    };
    $('gl').onchange = e => { const c = e.target.closest('[data-tdone]'); if (c) P.task(n, c.dataset.tdone, c.checked) };
    window.addEventListener('hashchange', () => { const h = location.hash.slice(1); if (TABS.some(t => t[0] === h) && h !== tab) { tab = h; P.visit(n, tab); render() } });
    P.visit(n, tab); render();
  }

  // ------------------------------------------------------------ checkpoint
  function checkpoint(k) {
    const cp = D.checkpoints[k - 1];
    document.title = `${cp.title} · Grammar Lab · Deutsch A1`;
    $('glKick').textContent = 'Grammar Lab · Cumulative review';
    $('glTitle').textContent = cp.title; $('glLead').textContent = 'Try these without revisiting the last five steps first. Correct every error afterwards.';
    $('glHead').innerHTML = `<a class="ui-btn sm ghost" href="grammar-lab.html">← All steps</a><a class="ui-btn sm ghost" href="grammar-lab.html?s=${cp.after}#review">Step ${cp.after}</a>`;
    const qs = cp.ids.map(id => GL.question(id)); const ctrls = [];
    function start() {
      const r = P.state().cps[k];
      $('gl').innerHTML = `${guestNote()}<section class="gl-card"><p class="cap">${qs.length} questions · answer all, then check. ${r ? `Your best: ${r.best}/${r.max} · last: ${r.last}/${r.max}.` : 'Pass mark: 8 of 10.'}</p>
        ${qs.map((x, i) => `<div class="gl-q"><div class="gl-qh"><span>${i + 1} · Step ${x.step}: ${esc(D.steps[x.step - 1].title)}</span></div><div class="gl-qm" id="cq-${i}"></div></div>`).join('')}
        <div class="gl-qa"><button type="button" class="ui-btn lg" id="glSubmit">Check my answers</button></div><div id="glResult" aria-live="polite"></div></section>`;
      ctrls.length = 0; qs.forEach((x, i) => ctrls.push(E.mount($('cq-' + i), x, { focus: false })));
      $('glSubmit').onclick = submit;
    }
    function submit() {
      const unanswered = ctrls.filter(c => c.check().empty).length;
      if (unanswered && !confirm(`${unanswered} question${unanswered === 1 ? ' is' : 's are'} not answered. Check anyway?`)) return;
      let score = 0;
      ctrls.forEach((c, i) => { const res = c.check(); c.lock(); c.feedback(res); if (res.correct) score++; if (!res.empty) record(qs[i], res, c.response, 'grammar-checkpoint', 'grammar-checkpoint-' + k) }); // unanswered items count as wrong in the score but are not stored as answers
      P.checkpoint(k, score, qs.length);
      const weak = [...new Set(qs.filter((x, i) => !ctrls[i].check().correct).map(x => x.step))];
      $('glSubmit').remove();
      $('glResult').innerHTML = `<div class="ui-state ${score >= 8 ? 'success' : 'error'}" style="margin-top:12px"><span class="ic">${score >= 8 ? '✓' : '!'}</span><div style="flex:1"><b>${score} of ${qs.length} right${score >= 8 ? ' — passed' : ''}</b>${weak.length ? `Review: ${weak.map(s => `<a href="grammar-lab.html?s=${s}#learn">Step ${s}</a>`).join(', ')}.` : 'All steps of this review are secure.'}</div><button type="button" class="ui-btn sm ghost" id="glAgain">Try again</button></div>`;
      $('glAgain').onclick = () => { start(); window.scrollTo({ top: 0 }) };
    }
    start();
  }

  // ------------------------------------------------------------ boot
  const ready = window.A1_SHELL ? A1_SHELL.ready : Promise.resolve({ user: null });
  function boot(s) {
    signedIn = !!(s && s.user); guest = !signedIn && !(s && s.offline);
    if (sN >= 1 && sN <= 25) { $('glTabs').hidden = false; $('gl').setAttribute('role', 'tabpanel'); $('gl').tabIndex = -1; stepPage(sN) }
    else if (cN >= 1 && cN <= 5) { $('glTabs').hidden = true; checkpoint(cN) }
    else { if (q.has('s') || q.has('c')) history.replaceState(null, '', location.pathname); $('glTabs').hidden = true; overview() }
  }
  ready.then(boot, () => boot(null));
})();
