// Deutsch A1 · personalised learner dashboard (dashboard.html).
// Every number comes from the learner's own data:
//   • Supabase rows (RLS: own rows only) — attempts, review_items, test_results  → accuracy, reviews due, streak, activity, tests, weak topics
//   • app_state-synced progress in this browser — a1:lessons, wz:v2, a1:prefs      → current lesson, completion, Wortschatz due, course
// If a source is missing, the card says so instead of showing a number.
(function () {
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const IC = {
    target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01',
    repeat: 'M17 2.5 20 5.5l-3 3M4 11V9.5a4 4 0 0 1 4-4h12M7 21.5l-3-3 3-3M20 13v1.5a4 4 0 0 1-4 4H4',
    flame: 'M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5.3 1.6 1.2 2.5 2.2 2.5C10.5 8 11 5.5 12 3z',
    tests: 'M9 3h6v3H9zM9 4.5H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1h-3M9 13.5l2 2 4-4.5',
    course: 'M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5zM5 19.5A1.5 1.5 0 0 0 6.5 21H19M9 7h6M9 10.5h4',
    cards: 'M8 3h11a1 1 0 0 1 1 1v12M4 7h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z',
    flag: 'M5 21V4M5 4h12l-2 4 2 4H5', chart: 'M3 21h18M6 17v-5M11 17V7M16 17v-8M21 17V4', info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01'
  };
  const svg = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${IC[k]}"/></svg>`;
  const REC_IC = { '🔁': 'repeat', '🗂️': 'cards', '🎯': 'target', '📘': 'course', '🏁': 'flag' };
  const fmtDate = d => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;

  function greet() { const h = new Date().getHours(); return h < 11 ? 'Guten Morgen' : h < 18 ? 'Guten Tag' : 'Guten Abend' }
  function header(user, cp) {
    const n = user && window.A1_SHELL ? A1_SHELL.names(user).first : '';
    $('dbHello').textContent = `${greet()}${n ? ', ' + n : ''}!`;
    $('dbDate').textContent = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
    $('dbCourse').innerHTML = cp.course ? `Your course: <b>Momente ${cp.course}</b> · <a href="onboarding.html?change=1">change</a>` : '';
  }
  function notice(kind, title, text, action) {
    $('dbNotice').innerHTML = kind ? `<div class="ui-state ${kind}" role="${kind === 'error' ? 'alert' : 'status'}" style="margin-bottom:20px"><span class="ic">${kind === 'error' ? '!' : kind === 'success' ? '✓' : svg('info')}</span><div style="flex:1"><b>${title}</b>${text}</div>${action || ''}</div>` : '';
  }

  // ---------- cards ----------
  function resumeCard(cp) {
    const c = cp.current, l = c.lesson;
    const nextS = c.sections.find(s => !c.done[s]);
    const href = `lesson.html?l=${c.n}${c.started ? '#' + (c.lastSection && !c.done[c.lastSection] ? c.lastSection : nextS || 'learn') : ''}`;
    const label = c.completed ? 'Review lesson' : c.started ? 'Resume learning' : 'Start lesson';
    return `<section class="db-card db-resume s8" aria-labelledby="resumeT">
      <div><div class="lv">${c.started ? 'Continue where you stopped' : 'Your next lesson'} · Momente ${l.level} · Modul ${l.modul}</div>
        <h2 id="resumeT">Lektion ${c.n}: ${esc(l.title)}</h2><p class="topic">${esc(l.topic)}${c.last ? ` · last opened ${fmtDate(c.last)}` : ''}</p></div>
      <a class="ui-btn lg" href="${href}">${label} <span aria-hidden="true">→</span></a>
      <div class="steps" role="list" aria-label="Lesson ${c.n} steps">${c.sections.map(s => `<div role="listitem" class="db-step ${c.done[s] ? 'done' : s === nextS ? 'next' : ''}"><i></i><span>${c.done[s] ? '✓ ' : ''}${PM.SECTION_LABEL[s]}<span class="ui-sr">${c.done[s] ? ' — done' : s === nextS ? ' — next' : ''}</span></span></div>`).join('')}</div>
    </section>`;
  }
  function completionCard(cp) {
    const lv = cp.course === 'A1.2' ? cp.a12 : cp.a11; const name = cp.course || 'A1.1';
    return `<section class="db-card db-kpi s4" aria-labelledby="compT">
      <div class="k" id="compT">${svg('course')}Course completion</div>
      <div class="v">${lv.done}<small> / ${lv.total} lessons</small></div>
      <span class="sh-meter" role="progressbar" aria-label="Momente ${name} lessons completed" aria-valuemin="0" aria-valuemax="${lv.total}" aria-valuenow="${lv.done}"><i style="width:${pct(lv.done, lv.total)}%"></i></span>
      <div class="d">Momente ${name} · a lesson counts as completed when its quiz is passed. All of A1: ${cp.completed}/24.</div>
    </section>`;
  }
  function kpi(key, icon, title, value, detail, href) {
    return `<section class="db-card db-kpi s3"><div class="k">${svg(icon)}${title}</div><div class="v">${value}</div><div class="d">${detail}${href ? ` <a href="${href[0]}">${href[1]}</a>` : ''}</div></section>`;
  }
  function kpis(cp, an, err) {
    const na = '<span title="Not available">–</span>';
    const remote = !!an;
    const acc = remote && an.week.n ? kpi('acc', 'target', 'Practice accuracy', `${an.week.acc}<small>%</small>`, `${an.week.n} answers in the last 7 days · ${an.accuracy}% over ${an.total} answers (90 days).`)
      : kpi('acc', 'target', 'Practice accuracy', na, remote ? (an.total ? `No answers in the last 7 days · ${an.accuracy}% over ${an.total} answers (90 days).` : 'No answers saved yet. Your accuracy appears after your first exercises.') : err, remote && !an.total ? ['practice.html', 'Start practising'] : null);
    const dueM = remote ? an.reviewDue : null, dueW = cp.wz.due;
    const due = kpi('due', 'repeat', 'Reviews due', remote ? `${dueM + dueW}` : `${dueW}<small> words</small>`,
      remote ? `${dueM} mistake${dueM === 1 ? '' : 's'} · ${dueW} Wortschatz word${dueW === 1 ? '' : 's'}.` : `Wortschatz only. ${err}`,
      remote && dueM ? ['mistakes.html?status=due', 'Review mistakes'] : dueW ? ['wortschatz.html', 'Open Wortschatz'] : null);
    const streak = remote && an.total ? kpi('streak', 'flame', 'Learning streak', `${an.streak}<small> day${an.streak === 1 ? '' : 's'}</small>`, `${an.today} answers today · ${an.activeDays} active day${an.activeDays === 1 ? '' : 's'} in the last 90 days.`)
      : kpi('streak', 'flame', 'Learning streak', na, remote ? 'Starts with your first saved answer.' : err);
    const t = remote && an.tests[0];
    const test = t ? kpi('test', 'tests', 'Latest test', `${pct(t.score, t.max_score)}<small>%</small>`, `${esc(t.title || t.test_id)} · ${fmtDate(t.created_at)} · ${pct(t.score, t.max_score) >= COURSE.PASS_PCT ? 'passed' : 'not passed yet'}.`)
      : kpi('test', 'tests', 'Latest test', na, remote ? 'No tests taken yet.' : err, remote ? ['tests.html', 'See tests'] : null);
    return acc + due + streak + test;
  }
  function activityCard(an, err) {
    let body;
    if (!an) body = `<div class="ui-state empty"><span class="ic">${svg('chart')}</span><div><b>Activity not available</b>${err}</div></div>`;
    else if (!an.total) body = `<div class="ui-state empty"><span class="ic">${svg('chart')}</span><div><b>No activity yet</b>Every answer you give in lessons, practice, tests and Wortschatz is counted here.</div></div>`;
    else {
      const days = an.perDay; const max = Math.max(1, ...days.map(d => d.n)); const total = days.reduce((a, d) => a + d.n, 0); const active = days.filter(d => d.n).length;
      body = `<div class="db-chart" role="img" aria-label="Answers per day for the last 14 days: ${total} answers on ${active} days.">${days.map(d => {
          const dt = new Date(d.k + 'T12:00:00'); const lab = dt.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
          return `<div class="db-bar${d.n ? '' : ' zero'}" tabindex="0" aria-label="${lab}: ${d.n} answers${d.acc != null ? ', ' + d.acc + '% correct' : ''}"><i style="height:${d.n ? Math.max(4, Math.round(d.n / max * 100)) : 0}%"></i><span class="tip">${lab} · ${d.n} answer${d.n === 1 ? '' : 's'}${d.acc != null ? ' · ' + d.acc + '% correct' : ''}</span></div>`;
        }).join('')}</div>
        <div class="db-axis" aria-hidden="true">${days.map((d, i) => `<span>${i % 2 === 1 || i === days.length - 1 ? new Date(d.k + 'T12:00:00').getDate() : ''}</span>`).join('')}</div>
        <div class="db-chartmeta"><span><b>${total}</b>answers in 14 days</span><span><b>${active}</b>active days</span><span><b>${an.week.acc != null ? an.week.acc + '%' : '–'}</b>correct this week</span></div>
        <table class="ui-sr"><caption>Answers per day</caption><tr><th>Day</th><th>Answers</th><th>Correct</th></tr>${days.map(d => `<tr><td>${d.k}</td><td>${d.n}</td><td>${d.acc == null ? '–' : d.acc + '%'}</td></tr>`).join('')}</table>`;
    }
    return `<section class="db-card s7" aria-labelledby="actT"><h2 id="actT">Learning activity <a href="progress.html">Full progress</a></h2><p class="cap">Answers saved to your account per day, last 14 days.</p>${body}</section>`;
  }
  function recCard(cp, an) {
    const recs = PM.recommend(cp, an);
    return `<section class="db-card s5" aria-labelledby="recT"><h2 id="recT">Recommended for you</h2><p class="cap">Based on your answers, reviews and lesson progress. Each tip says why.</p>
      ${recs.length ? `<ul class="db-list">${recs.map(x => `<li><span class="ic">${svg(REC_IC[x.ic] || 'target')}</span><span class="tx"><b>${esc(x.title)}</b>${esc(x.why)}</span><a class="ui-btn sm ghost" href="${x.href}">${esc(x.cta)}</a></li>`).join('')}</ul>`
        : `<div class="ui-state empty"><span class="ic">✓</span><div><b>Nothing urgent</b>Keep going with your current lesson.</div></div>`}</section>`;
  }
  function testsCard(an, err) {
    let body;
    if (!an) body = `<div class="ui-state empty"><span class="ic">${svg('tests')}</span><div><b>Test results not available</b>${err}</div></div>`;
    else if (!an.tests.length) body = `<div class="ui-state empty"><span class="ic">${svg('tests')}</span><div><b>No tests yet</b>Pass a lesson quiz to complete a lesson. Module tests unlock your progress check for each module.</div></div>`;
    else body = `<ul class="db-list">${an.tests.slice(0, 4).map(t => { const p = pct(t.score, t.max_score); const ok = p >= COURSE.PASS_PCT;
      return `<li><span class="ic">${svg('tests')}</span><span class="tx"><b>${esc(t.title || t.test_id)}</b>${fmtDate(t.created_at)} · ${t.score}/${t.max_score} points</span><span class="db-score ${ok ? 'pass' : 'fail'}">${p}%<span class="ui-sr"> ${ok ? 'passed' : 'not passed'}</span></span></li>` }).join('')}</ul>`;
    return `<section class="db-card s6" aria-labelledby="testT"><h2 id="testT">Latest test scores <a href="tests.html">All tests</a></h2><p class="cap">Pass mark ${COURSE.PASS_PCT}%.</p>${body}</section>`;
  }
  function weakCard(an, err) {
    let body;
    if (!an) body = `<div class="ui-state empty"><span class="ic">${svg('target')}</span><div><b>Topics not available</b>${err}</div></div>`;
    else {
      const enough = an.byTopic.filter(t => t.n >= 6);
      const weak = enough.filter(t => t.acc < 70).slice(0, 4);
      if (!an.total) body = `<div class="ui-state empty"><span class="ic">${svg('target')}</span><div><b>No data yet</b>After a few exercises we show the topics where you lose the most points.</div></div>`;
      else if (!enough.length) body = `<div class="ui-state empty"><span class="ic">${svg('target')}</span><div><b>Not enough answers yet</b>A topic needs at least 6 answers before we rate it. You have ${an.total} answers so far.</div></div>`;
      else if (!weak.length) body = `<div class="ui-state success"><span class="ic">✓</span><div><b>No weak topics</b>All topics with 6 or more answers are at 70% or better. Weakest: ${esc(PM.label(enough[0].key))} (${enough[0].acc}%).</div></div>`;
      else body = `<ul class="db-list">${weak.map(t => `<li><span class="ic">${svg('target')}</span><span class="tx"><b>${esc(PM.label(t.key))}</b>${t.acc}% correct over ${t.n} answers</span><a class="ui-btn sm ghost" href="practice.html?topic=${encodeURIComponent(t.key)}">Practise</a></li>`).join('')}</ul>`;
    }
    return `<section class="db-card s6" aria-labelledby="weakT"><h2 id="weakT">Topics to strengthen <a href="progress.html">By topic</a></h2><p class="cap">Topics with at least 6 answers and under 70% correct.</p>${body}</section>`;
  }

  function render(user, data, err) {
    const cp = PM.course(); header(user, cp);
    const an = data ? PM.analytics(data.attempts, data.reviews, data.tests) : null;
    const why = err || 'Not available offline.';
    $('db').innerHTML = resumeCard(cp) + completionCard(cp) + kpis(cp, an, why) + activityCard(an, why) + recCard(cp, an) + testsCard(an, why) + weakCard(an, why);
    $('db').setAttribute('aria-busy', 'false');
  }

  async function load(user) {
    let data = null, err = null;
    try { data = await A1D.loadAll(90); if (!data) err = 'Not available offline.' }
    catch (e) { console.warn('[dashboard]', e); err = 'The server did not respond.' }
    render(user, data, err);
    if (err && user) notice('error', 'We could not load your activity', ' Lesson progress and Wortschatz below come from this device. Accuracy, reviews, streak and tests need the server.', '<button class="ui-btn sm ghost" id="dbRetry">Try again</button>');
    else if (P.get('welcome')) notice('success', `You’re all set${PM.course().course ? ': Momente ' + PM.course().course : ''}`, ' Your dashboard fills up as you learn. Start with the lesson below.');
    else notice('');
    const r = $('dbRetry'); if (r) r.onclick = () => { notice(''); $('db').setAttribute('aria-busy', 'true'); load(user) };
  }

  const P = new URLSearchParams(location.search);
  if (P.get('welcome')) history.replaceState(null, '', location.pathname);
  header(null, PM.course());
  (window.A1_SHELL ? A1_SHELL.ready : Promise.resolve({ user: null, offline: true })).then(s => {
    if (s.offline) { render(null, null, 'Not available offline. It returns when you are back online.'); return } // the shell shows the offline banner
    header(s.user, PM.course()); load(s.user);
  });
})();
