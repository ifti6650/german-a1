// Deutsch A1 · personalised dashboard on index.html (guest: onboarding; signed in: progress + recommendations)
(function () {
  const $ = id => document.getElementById(id);
  const esc = ENGINE.esc;
  function lessonCard(cp) {
    const c = cp.current;
    return `<div class="panel"><div class="row between"><div><div class="muted">Current lesson · ${c.lesson.level} · Modul ${c.lesson.modul}</div>
      <h2>Lektion ${c.n}: ${esc(c.lesson.title)}</h2><div class="muted">${esc(c.lesson.topic)}</div></div>
      <a class="btn" href="lesson.html?l=${c.n}${c.lastSection ? '#' + c.lastSection : ''}">${c.started ? 'Resume learning →' : 'Start lesson →'}</a></div>
      <div style="margin-top:12px"><span class="pbar" role="progressbar" aria-valuenow="${c.pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Lesson progress"><i style="width:${c.pct}%"></i></span>
      <div class="row" style="margin-top:8px">${c.sections.map(s => `<span class="pill ${c.done[s] ? 'ok' : 'dim'}">${c.done[s] ? '✓ ' : ''}${PM.SECTION_LABEL[s]}</span>`).join('')}</div></div></div>`;
  }
  function render(user, data) {
    const el = $('dash'); if (!el) return;
    const cp = PM.course();
    if (!user) {
      el.innerHTML = `<div class="panel"><div class="row between"><div><h2>Welcome! Start with Lektion 1.</h2>
        <p class="sub" style="margin:0">Learn, practise, take the quiz, review your mistakes. Everything works without an account; sign in with Google to save your progress across devices.</p></div>
        <div class="row"><a class="btn" href="lesson.html?l=${cp.current.n}">${cp.current.started ? 'Resume Lektion ' + cp.current.n : 'Start Lektion 1'} →</a><a class="btn ghost" href="course.html">See all 24 lessons</a></div></div></div>
        ${cp.current.started ? lessonCard(cp) : ''}`;
      return;
    }
    const an = data ? PM.analytics(data.attempts, data.reviews, data.tests) : null;
    const name = (user.user_metadata && (user.user_metadata.given_name || (user.user_metadata.name || '').split(' ')[0])) || '';
    const recs = PM.recommend(cp, an);
    const lastTest = an && an.tests[0];
    const hist = data ? data.attempts.slice(0, 6) : [];
    el.innerHTML = `
      <h2 style="font:800 26px var(--display);margin:0 0 12px">Hallo${name ? ', ' + esc(name) : ''}! 👋</h2>
      ${lessonCard(cp)}
      <section class="tiles" aria-label="Your numbers">
        <div class="tile"><div class="k">Course</div><div class="v">${cp.completed}/24</div><div class="s">lessons completed · A1.1 ${cp.a11.done}/12 · A1.2 ${cp.a12.done}/12</div></div>
        <div class="tile"><div class="k">Streak</div><div class="v">${an ? an.streak : '–'}</div><div class="s">day${an && an.streak === 1 ? '' : 's'} in a row · ${an ? an.today : 0} answers today</div></div>
        <div class="tile"><div class="k">Accuracy (7 days)</div><div class="v">${an && an.week.acc != null ? an.week.acc + '%' : '–'}</div><div class="s">${an ? an.week.n : 0} answers</div></div>
        <div class="tile"><div class="k">Reviews due</div><div class="v">${(an ? an.reviewDue : 0) + cp.wz.due}</div><div class="s">${an ? an.reviewDue : 0} mistakes · ${cp.wz.due} Wortschatz</div></div>
      </section>
      <div class="grid">
        <div class="panel"><h2>Recommended next</h2><p class="sub">Based on your answers — each tip says why.</p>
          ${recs.length ? recs.map(x => `<div class="rec"><span class="ic" aria-hidden="true">${x.ic}</span><div class="tx"><b>${esc(x.title)}</b><span class="muted">${esc(x.why)}</span></div><a class="btn small" href="${x.href}">${esc(x.cta)}</a></div>`).join('') : '<p class="muted">Nothing urgent. Keep going with your lesson.</p>'}</div>
        <div class="panel"><h2>Recent activity</h2>
          ${lastTest ? `<p class="muted">Last test: <b>${esc(lastTest.title || lastTest.test_id)}</b> · ${Math.round(lastTest.score / lastTest.max_score * 100)}% · ${new Date(lastTest.created_at).toLocaleDateString('en-GB')}</p>` : '<p class="muted">No tests yet. <a href="tests.html">See tests</a>.</p>'}
          ${hist.length ? `<table class="t"><tbody>${hist.map(a => `<tr><td>${a.correct ? '✅' : '❌'}</td><td>${esc((a.expected || a.item_id || '').slice(0, 40))}</td><td class="n muted">${new Date(a.created_at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</td></tr>`).join('')}</tbody></table>` : '<p class="muted">Your answers will show up here.</p>'}
          ${an && an.byTopic.filter(t => t.n >= 6 && t.acc < 70).length ? `<h3>Weak areas</h3><p class="muted">${an.byTopic.filter(t => t.n >= 6 && t.acc < 70).slice(0, 4).map(t => `${esc(PM.label(t.key))} (${t.acc}%)`).join(' · ')}</p>` : ''}
        </div>
      </div>`;
  }
  A1D.whenAuth(async u => {
    if (!u) return render(null);
    $('dash').innerHTML = '<div class="panel skeleton">Loading your dashboard…</div>';
    let data = null; try { data = await A1D.loadAll(90) } catch (e) { console.warn(e) }
    render(u, data);
  });
})();
