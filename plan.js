// Interactive 8-week plan: daily checklist, grammar self-test and word test per week.
// Progress is saved in this browser (localStorage).
(function () {
  const WEEKS = window.PLAN_WEEKS || [];
  const KEY = 'a1plan:v1';
  const DAYS = ['Mon', 'Tue', 'Wed'];
  const PASS = 8, QN = 10;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function load() {
    try { const v = JSON.parse(localStorage.getItem(KEY)); if (v && typeof v === 'object') return v; } catch (e) {}
    return {};
  }
  let st = Object.assign({ tasks: {}, self: {}, test: {}, open: 0, tab: 'plan' }, load());
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  function knownSet() {
    try { return new Set(JSON.parse(localStorage.getItem('known')) || []); } catch (e) { return new Set(); }
  }

  // ---- task model -------------------------------------------------------
  function tasksFor(w) {
    const t = w.lessons.map((l, i) => ({
      id: `${w.n}-d${i}`, day: DAYS[i],
      title: `Lektion ${l.n} · ${l.title}`,
      body: `${esc(l.topic)}. Read ${l.steps.map(s => `<a href="${s.href}">Step ${s.n}</a>`).join(' and ')} and the <a href="${l.guide}">study-guide box</a>, say every example out loud, then learn the words in the <a href="wortschatz.html#L${l.n}">Wortschatz trainer (L${l.n})</a>. Extra: <a href="speaking.html#ai-L${l.n}">talk about it with the AI tutor</a>.`
    }));
    t.push({ id: `${w.n}-thu`, day: 'Thu', title: 'Self-test and speaking',
      body: `Do the <button class="linkish" data-goto="self">self-test</button> below, then the <a href="${w.speakingHref}">speaking practice</a>: read the dialogue aloud and answer the questions about yourself. You can also play the dialogue in the <a href="speaking.html#m${w.n}">speaking trainer</a> with your microphone.` });
    t.push({ id: `${w.n}-fri`, day: 'Fri', title: 'Flashcards for the words you don’t know yet',
      body: `Open each lesson in the trainer, choose the <b>Learning</b> or <b>New</b> filter and go through the Flashcards; mark each card “I know it” or “Still learning”. <span class="kw" data-kw></span>` });
    t.push({ id: `${w.n}-sat`, day: 'Sat', title: 'Word test and dialogues',
      body: `Take the <button class="linkish" data-goto="test">word test</button> below (${PASS} of ${QN} to pass) and say the dialogues with a partner.` });
    return t;
  }

  function weekStatus(w) {
    const tasks = tasksFor(w);
    const tDone = tasks.filter(t => st.tasks[t.id]).length;
    const sRight = w.selfTest.filter((_, i) => st.self[`${w.n}-${i}`] === 'right').length;
    const best = (st.test[w.n] && st.test[w.n].best) || 0;
    const units = tasks.length + 2;
    const done = tDone + (sRight === w.selfTest.length ? 1 : 0) + (best >= PASS ? 1 : 0);
    return { tasks, tDone, sRight, best, units, done, complete: done === units, started: done > 0 || sRight > 0 || best > 0 };
  }

  // ---- overview ---------------------------------------------------------
  function renderOverview() {
    let units = 0, done = 0, weeksDone = 0;
    const html = WEEKS.map(w => {
      const s = weekStatus(w);
      units += s.units; done += s.done; if (s.complete) weeksDone++;
      const label = s.complete ? 'Done' : s.started ? 'In progress' : 'Not started';
      const cls = s.complete ? 'done' : s.started ? 'prog' : 'todo';
      const l = w.lessons;
      const steps = l.flatMap(x => x.steps.map(y => y.n));
      return `<li><button class="wk ${st.open === w.n ? 'open' : ''}" data-week="${w.n}" aria-expanded="${st.open === w.n}" aria-controls="wdetail">
        <span class="wk-top"><b>Week ${w.n}</b><span class="chip ${cls}">${label}</span></span>
        <span>Modul ${w.modul} · Lektion ${l[0].n}–${l[2].n}</span>
        <em>Steps ${steps[0]}–${steps[steps.length - 1]}${w.n === 8 ? ' + bonus' : ''}</em>
        <span class="mini" aria-hidden="true"><i style="width:${Math.round(s.done / s.units * 100)}%"></i></span>
      </button></li>`;
    }).join('');
    $('#weeks').innerHTML = html;
    const pct = units ? Math.round(done / units * 100) : 0;
    $('#ovText').textContent = `${weeksDone} of ${WEEKS.length} weeks complete · ${pct}%`;
    $('#ovBar').style.width = pct + '%';
    $('#ovBar').parentElement.setAttribute('aria-valuenow', pct);
  }

  // ---- detail -----------------------------------------------------------
  let quiz = null;
  const shown = new Set();
  function renderDetail() {
    const box = $('#wdetail');
    const w = WEEKS.find(x => x.n === st.open);
    if (!w) { box.hidden = true; box.innerHTML = ''; return; }
    box.hidden = false;
    const s = weekStatus(w);
    const tab = st.tab || 'plan';
    const tabBtn = (id, label, meta) => `<button role="tab" id="tab-${id}" aria-selected="${tab === id}" data-tab="${id}">${label}<small>${meta}</small></button>`;
    box.innerHTML = `
      <div class="wd-head">
        <div><div class="kicker">Week ${w.n} · ${w.book} · Modul ${w.modul}</div>
          <h3>Lektion ${w.lessons[0].n}–${w.lessons[2].n}: ${w.lessons.map(l => esc(l.topic.split(',')[0])).join(' · ')}</h3></div>
        <button class="x" data-close aria-label="Close week ${w.n}">Close ✕</button>
      </div>
      <div class="wd-prog"><span>${s.done} of ${s.units} done${s.complete ? ' · week complete ✓' : ''}</span><span class="pbar"><i style="width:${Math.round(s.done / s.units * 100)}%"></i></span></div>
      <div class="tabs2" role="tablist">
        ${tabBtn('plan', 'Daily plan', `${s.tDone}/${s.tasks.length}`)}
        ${tabBtn('self', 'Grammar self-test', `${s.sRight}/${w.selfTest.length}`)}
        ${tabBtn('test', 'Word test', s.best ? `best ${s.best}/${QN}` : 'not taken')}
      </div>
      <div class="tabpanel" role="tabpanel" aria-labelledby="tab-${tab}" id="panel"></div>`;
    const p = $('#panel', box);
    if (tab === 'plan') renderPlan(w, s, p);
    if (tab === 'self') renderSelf(w, p);
    if (tab === 'test') renderTest(w, p);
  }

  function renderPlan(w, s, p) {
    const known = knownSet();
    const kn = w.words.filter(x => known.has(x.id)).length;
    p.innerHTML = `<ul class="tasks">${s.tasks.map(t => `
      <li class="${st.tasks[t.id] ? 'checked' : ''}">
        <input type="checkbox" id="t-${t.id}" data-task="${t.id}" ${st.tasks[t.id] ? 'checked' : ''}>
        <div><label for="t-${t.id}"><span class="day">${t.day}</span>${esc(t.title)}</label><p>${t.body}</p></div>
      </li>`).join('')}
      <li class="optional"><span class="day">Sun</span><div><b>Rest</b>, or watch a German video or podcast for beginners. Optional, not counted.</div></li>
      </ul>
      ${w.bonus.length ? `<p class="bonus">Finished all eight weeks? Go further with the bonus chapters: ${w.bonus.map((b, i) => `<a href="${b.href}">Bonus ${i + 1} · ${esc(b.title)}</a>`).join(' · ')}</p>` : ''}`;
    const kw = $('[data-kw]', p);
    if (kw) kw.textContent = `Words marked as known in the trainer this week: ${kn} of ${w.words.length}.`;
  }

  function renderSelf(w, p) {
    p.innerHTML = `<p class="hint">Answer each question on paper or out loud, then show the answer and mark yourself honestly. The self-test counts as done when every question is marked right.</p>
      <ol class="selftest">${w.selfTest.map((x, i) => {
        const k = `${w.n}-${i}`, v = st.self[k];
        return `<li class="${v || ''}">
          <div class="q">${x.q}</div>
          ${v || shown.has(k) ? `<div class="a"><span>Answer</span> ${x.a}</div>
            <div class="mark"><button class="btn ${v === 'right' ? 'on' : ''}" data-mark="${k}" data-val="right">I got it right</button><button class="btn ${v === 'wrong' ? 'on' : ''}" data-mark="${k}" data-val="wrong">Not yet</button></div>`
            : `<button class="btn" data-show="${k}">Show answer</button>`}
        </li>`;
      }).join('')}</ol>
      <p class="hint">Got one wrong? Re-read the grammar boxes for <a href="${MOD_HREF[w.modul]}">Modul ${w.modul} in the study guide</a>, say the correct sentence three times, then mark it again.</p>`;
  }

  const MOD_HREF = {
    1: 'study-guide.html#modul-1-lektion-1-3-a1-1', 2: 'study-guide.html#modul-2-lektion-4-6-a1-1',
    3: 'study-guide.html#modul-3-lektion-7-9-a1-1', 4: 'study-guide.html#modul-4-lektion-10-12-a1-1',
    5: 'study-guide.html#modul-5-lektion-13-15-a1-2', 6: 'study-guide.html#modul-6-lektion-16-18-a1-2',
    7: 'study-guide.html#modul-7-lektion-19-21-a1-2', 8: 'study-guide.html#modul-8-lektion-22-24-a1-2'
  };

  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function newQuiz(w) {
    const qs = shuffle(w.words.slice()).slice(0, QN).map(x => {
      const others = shuffle(w.words.filter(o => o.id !== x.id && o.en !== x.en)).slice(0, 3);
      return { x, opts: shuffle([x, ...others]) };
    });
    quiz = { week: w.n, qs, i: 0, score: 0, answered: null };
  }

  function renderTest(w, p) {
    const best = (st.test[w.n] && st.test[w.n].best) || 0;
    if (!quiz || quiz.week !== w.n) {
      p.innerHTML = `<div class="quizstart">
        <p>${QN} questions with words from Lektion ${w.lessons[0].n}–${w.lessons[2].n}: choose the English meaning. You pass with ${PASS} or more.</p>
        <p class="best">${best ? `Your best score: <b>${best} / ${QN}</b>${best >= PASS ? ' · passed ✓' : ''}` : 'Not taken yet.'}</p>
        <button class="btn primary" data-start>${best ? 'Take the test again' : 'Start the test'}</button></div>`;
      return;
    }
    if (quiz.i >= quiz.qs.length) {
      const passed = quiz.score >= PASS;
      p.innerHTML = `<div class="quizstart">
        <div class="kicker">Result</div><p class="big">${quiz.score} / ${QN}</p>
        <p>${passed ? 'Passed. This week’s word test is complete.' : `You need ${PASS} to pass. Practise the flashcards for these lessons, then try again.`}</p>
        <button class="btn primary" data-start>Take it again</button></div>`;
      return;
    }
    const q = quiz.qs[quiz.i];
    p.innerHTML = `<div class="quiz2">
      <span class="count">Question ${quiz.i + 1} of ${QN} · Score ${quiz.score}</span>
      <div class="qp"><small>What does this mean?</small><div class="big">${esc(q.x.de)}</div></div>
      <div class="opts2">${q.opts.map(o => {
        let c = '';
        if (quiz.answered) { if (o.id === q.x.id) c = 'right'; else if (o.id === quiz.answered) c = 'wrong'; }
        return `<button class="opt2 ${c}" data-opt="${o.id}" ${quiz.answered ? 'disabled' : ''}>${esc(o.en)}</button>`;
      }).join('')}</div>
      <div class="qf"><span class="fb ${quiz.answered ? (quiz.answered === q.x.id ? 'ok' : 'no') : ''}">${quiz.answered ? (quiz.answered === q.x.id ? 'Richtig!' : `The answer is: ${esc(q.x.en)}`) : ''}</span>
      ${quiz.answered ? `<button class="btn primary" data-next>${quiz.i + 1 === QN ? 'See result' : 'Next →'}</button>` : ''}</div></div>`;
    if (quiz.answered) { const n = $('[data-next]', p); if (n) n.focus(); }
  }

  function render() { renderOverview(); renderDetail(); }

  // ---- events -----------------------------------------------------------
  document.addEventListener('click', e => {
    const t = e.target.closest('button, [data-goto]');
    if (!t || !t.closest('#plan')) return;
    const w = WEEKS.find(x => x.n === st.open);
    if (t.dataset.week) {
      const n = +t.dataset.week;
      st.open = st.open === n ? 0 : n; st.tab = 'plan'; quiz = null; save(); render();
      if (st.open) $('#wdetail').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
      return;
    }
    if (t.hasAttribute('data-close')) { st.open = 0; quiz = null; save(); render(); return; }
    if (t.dataset.tab || t.dataset.goto) { st.tab = t.dataset.tab || t.dataset.goto; save(); renderDetail(); $('#tab-' + st.tab).focus(); return; }
    if (t.dataset.show) { shown.add(t.dataset.show); renderDetail(); return; }
    if (t.dataset.mark) { st.self[t.dataset.mark] = t.dataset.val; save(); render(); return; }
    if (t.hasAttribute('data-start')) { newQuiz(w); renderDetail(); return; }
    if (t.dataset.opt && quiz && !quiz.answered) {
      quiz.answered = t.dataset.opt;
      if (t.dataset.opt === quiz.qs[quiz.i].x.id) quiz.score++;
      renderDetail(); return;
    }
    if (t.hasAttribute('data-next')) {
      quiz.i++; quiz.answered = null;
      if (quiz.i >= quiz.qs.length) {
        const prev = (st.test[w.n] && st.test[w.n].best) || 0;
        st.test[w.n] = { best: Math.max(prev, quiz.score), last: quiz.score };
        save(); renderOverview();
      }
      renderDetail(); return;
    }
    if (t.hasAttribute('data-reset')) { $('#resetConfirm').hidden = false; return; }
    if (t.hasAttribute('data-reset-no')) { $('#resetConfirm').hidden = true; return; }
    if (t.hasAttribute('data-reset-yes')) {
      st = { tasks: {}, self: {}, test: {}, open: 0, tab: 'plan' }; quiz = null; save();
      $('#resetConfirm').hidden = true; render(); return;
    }
  });
  document.addEventListener('change', e => {
    const c = e.target;
    if (c.dataset && c.dataset.task) {
      st.tasks[c.dataset.task] = c.checked; save(); render();
      const again = document.getElementById(c.id); if (again) again.focus();
    }
  });
  window.addEventListener('storage', e => { if (e.key === KEY) { st = Object.assign(st, load()); render(); } });

  render();
})();
