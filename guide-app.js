// Deutsch A1 · Study Guide page (study-guide.html)
//   study-guide.html            → overview: A1.1 / A1.2 lesson cards, search, resume
//   study-guide.html?l=7        → Lektion 7; the part is in the hash (#words, #situations-3 …)
// Content: guide/lNN.md (rendered safely by guide-md.js). Overview data: guide/index.js.
// Progress: guide-progress.js (reading progress only; never set just by opening a page).
(function () {
  const G = window.GUIDE_MD, P = window.GUIDE_PROGRESS, IDX = window.GUIDE_INDEX || [], STEPS = window.GUIDE_STEPS || {};
  const $ = id => document.getElementById(id), esc = G.esc;
  const pad = n => String(n).padStart(2, '0');
  const PART = Object.fromEntries(G.PARTS.map(([k, de, en]) => [k, { de, en }]));
  const canSpeak = 'speechSynthesis' in window;
  const say = t => { try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.lang = 'de-DE'; u.rate = .9; const v = speechSynthesis.getVoices().find(v => /^de(-|_)/i.test(v.lang)); if (v) u.voice = v; speechSynthesis.speak(u) } catch (e) {} };
  // card text: the lesson's own goal; where several lessons share the same general goal, use its specific introduction
  const goalCount = {}; IDX.forEach(x => goalCount[x.goal] = (goalCount[x.goal] || 0) + 1);
  const aim = x => goalCount[x.goal] > 1 ? x.intro : x.goal;
  const q = new URLSearchParams(location.search);
  const n = q.has('l') ? Math.round(+q.get('l')) : null;

  // ------------------------------------------------------------ overview
  function overview() {
    document.title = 'Study Guide · Deutsch A1';
    const O = P.overall(IDX);
    const pref = (() => { try { return (JSON.parse(localStorage.getItem('a1:prefs') || '{}') || {}).course } catch (e) { return null } })();
    const startN = O.current ? O.current.n : (pref === 'A1.2' ? 13 : 1);
    const cur = IDX[startN - 1];
    const resumeHref = O.last && O.last.n === startN ? `study-guide.html?l=${startN}${O.last.part ? '#' + O.last.part + (O.last.part === 'situations' && O.last.sit ? '-' + O.last.sit : '') : ''}` : `study-guide.html?l=${startN}`;
    const resumeLabel = O.last && O.last.n === startN ? 'Weiterlernen' : 'Lektion starten';
    const partLine = O.last && O.last.n === startN && O.last.part ? ` · zuletzt: ${PART[O.last.part].de}${O.last.part === 'situations' && O.last.sit ? ' ' + O.last.sit : ''}` : '';
    $('sg').innerHTML = `
      <section class="sg-card sg-top" aria-labelledby="sgResT">
        <div><div class="lv">${O.last ? 'Weiter, wo du aufgehört hast' : 'Dein Start'} · ${cur.level} · Lektion ${pad(cur.n)}</div>
          <h2 id="sgResT" lang="de">${esc(cur.title)}</h2><p>${esc(aim(cur))}${partLine}</p></div>
        <a class="ui-btn lg" href="${resumeHref}" id="sgResume">${resumeLabel} <span aria-hidden="true">→</span></a>
        <div class="sg-stats"><span><b>${O.completed}</b>von 24 Lektionen abgeschlossen</span><span><b>${O.a11}</b>/ 12 in A1.1</span><span><b>${O.a12}</b>/ 12 in A1.2</span><span><b>${O.started}</b>begonnen</span></div>
      </section>
      <div class="sg-tools" role="search">
        <label class="ui-sr" for="sgQ">Search lessons, situations and words</label>
        <input class="ui-input" id="sgQ" type="search" placeholder="Suchen: Lektion, Situation oder Wort …" autocomplete="off" lang="de">
        <span role="group" aria-label="Course level"><button class="sg-chip" data-lv="" aria-pressed="true">Alle</button> <button class="sg-chip" data-lv="A1.1" aria-pressed="false">A1.1</button> <button class="sg-chip" data-lv="A1.2" aria-pressed="false">A1.2</button></span>
      </div>
      <p class="ui-sr" id="sgCount" role="status" aria-live="polite"></p>
      <div id="sgList"></div>
      <details class="sg-card" id="sgHow"><summary><b>So lernst du mit dem Study Guide</b> <span class="cap">· How to use this guide</span></summary><div class="sg-body" id="sgIntro" style="margin-top:12px"><span class="ui-sk" style="height:60px"></span></div></details>`;
    let level = '', term = '';
    const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss');
    function match(x) {
      if (level && x.level !== level) return null;
      if (!term) return { hit: '' };
      const t = norm(term);
      if (norm(`lektion ${x.n} ${x.title}`).includes(t) || norm(x.goal).includes(t) || norm(x.intro).includes(t)) return { hit: '' };
      const s = x.situations.find(s => norm(s).includes(t)); if (s) return { hit: s };
      const w = x.words.find(w => norm(w[0]).includes(t) || norm(w[1]).includes(t)); if (w) return { hit: `Wort: ${w[0]} — ${w[1]}` };
      return null;
    }
    function card(x, m) {
      const s = O.lessons[x.n - 1];
      const st = s.completed ? '<span class="sg-st ok">✓ Abgeschlossen</span>' : s.done || s.sits ? `<span class="sg-st go">${s.done}/${s.total} Teile</span>` : s.started ? '<span class="sg-st go">Begonnen</span>' : '<span class="sg-st">Neu</span>';
      return `<a class="sg-lc" href="study-guide.html?l=${x.n}" data-n="${x.n}"><span class="no"><span>${x.level} · Lektion ${pad(x.n)}</span>${st}</span>
        <h3 lang="de">${esc(x.title)}</h3><p class="goal">${esc(aim(x))}</p>
        ${m.hit ? `<span class="hit" lang="de">${esc(m.hit)}</span>` : ''}
        <span class="meta">${x.situations.length} Situationen · ${x.words.length} Wörter${s.sits ? ` · ${s.sits} geübt` : ''}</span>
        <span class="sg-bar" role="progressbar" aria-label="Lektion ${x.n}: ${s.done} von ${s.total} Teilen erledigt" aria-valuemin="0" aria-valuemax="${s.total}" aria-valuenow="${s.done}"><i style="width:${s.pct}%"></i></span></a>`;
    }
    function list() {
      let shown = 0;
      const html = ['A1.1', 'A1.2'].map(lv => {
        const xs = IDX.filter(x => x.level === lv).map(x => [x, match(x)]).filter(([, m]) => m); shown += xs.length;
        if (!xs.length) return '';
        const done = O.lessons.filter((s, i) => IDX[i].level === lv && s.completed).length;
        return `<section aria-labelledby="lv-${lv}"><div class="sg-level"><h2 id="lv-${lv}">German ${lv}</h2><span>Lektion ${lv === 'A1.1' ? '1–12' : '13–24'} · ${done} von 12 abgeschlossen</span></div>
          <div class="sg-grid">${xs.map(([x, m]) => card(x, m)).join('')}</div></section>`;
      }).join('');
      $('sgList').innerHTML = html || `<div class="ui-state empty"><span class="ic">?</span><div><b>Keine Treffer</b>Nothing found for “${esc(term)}”. Try another word.</div></div>`;
      $('sgCount').textContent = `${shown} lessons shown`;
    }
    $('sgQ').addEventListener('input', e => { term = e.target.value.trim(); list() });
    document.querySelectorAll('[data-lv]').forEach(b => b.addEventListener('click', () => { level = b.dataset.lv; document.querySelectorAll('[data-lv]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); list() }));
    list();
    $('sgHow').addEventListener('toggle', async () => {
      if (!$('sgHow').open || $('sgIntro').dataset.done) return;
      try { const md = await get('guide/intro.md'); $('sgIntro').innerHTML = G.render(md.replace(/^### Inhalt \/ Contents\n(?:\n|- .*\n)+/m, ''), { hOffset: 1 }); $('sgIntro').dataset.done = 1 }
      catch (e) { $('sgIntro').innerHTML = errorBox('Die Einführung konnte nicht geladen werden.') }
    });
  }

  async function get(url) { const r = await fetch(url); if (!r.ok) throw new Error(r.status); return r.text() }
  const errorBox = (t, retry) => `<div class="ui-state error" role="alert"><span class="ic">!</span><div style="flex:1"><b>${t}</b>Check your connection and try again.</div>${retry ? '<button class="ui-btn sm ghost" id="sgRetry">Try again</button>' : ''}</div>`;

  // ------------------------------------------------------------ lesson
  async function lesson() {
    const x = IDX[n - 1];
    document.title = `Lektion ${n}: ${x.title} · Study Guide · Deutsch A1`;
    $('sgKick').textContent = `Study Guide · ${x.level} · Lektion ${pad(n)}`;
    $('sgTitle').textContent = x.title; $('sgTitle').lang = 'de';
    $('sgLead').textContent = x.intro;
    $('sgHead').innerHTML = `<a class="ui-btn sm ghost" href="study-guide.html">← Alle Lektionen</a>${n > 1 ? `<a class="ui-btn sm ghost" href="study-guide.html?l=${n - 1}" rel="prev">← Lektion ${n - 1}</a>` : ''}${n < 24 ? `<a class="ui-btn sm ghost" href="study-guide.html?l=${n + 1}" rel="next">Lektion ${n + 1} →</a>` : ''}`;
    $('sg').innerHTML = `<div class="sg-card"><span class="ui-sk" style="height:22px;width:40%"></span><span class="ui-sk" style="height:120px;margin-top:14px"></span></div>`;
    let md;
    try { md = await get(`guide/l${pad(n)}.md`) }
    catch (e) { $('sg').innerHTML = errorBox('Diese Lektion konnte nicht geladen werden.', true); $('sgRetry').onclick = lesson; return }
    const L = G.parseLesson(md);
    const parts = x.parts;
    const o = { steps: STEPS, speak: canSpeak };
    let part = null, sit = 1;
    function fromHash() {
      const h = decodeURIComponent(location.hash.slice(1)); const m = h.match(/^([a-z]+)(?:-(\d+))?$/);
      part = m && parts.includes(m[1]) ? m[1] : null; sit = m && m[2] ? Math.min(L.situations.length + (bonus() ? 1 : 0), Math.max(1, +m[2])) : 1;
      if (!part) { const last = P.state().last; part = last && last.n === n && parts.includes(last.part) ? last.part : 'intro'; if (last && last.n === n && last.part === 'situations' && last.sit) sit = last.sit }
    }
    const bonus = () => L.parts.situations.find(c => c.bonus);
    const lead = () => L.parts.situations.find(c => c.lead);
    const chunks = k => L.parts[k].map((c, i) => `${c.title ? `<h3>${esc(c.title)}</h3>` : ''}${G.render(c.md, Object.assign({ taskPrefix: `c${i}-`, checked: P.lesson(n).can }, o))}`).join('');
    // Lernziele: the lesson's own objectives + what the eight situations practise (links into each situation)
    function goals() {
      const own = L.parts.goals.some(c => /Was kann ich/i.test(c.title));
      return `${own ? '' : `<p lang="en"><strong>${esc(x.intro)}</strong></p>`}${chunks('goals')}
        <h3>In dieser Lektion übst du</h3><ol class="sg-sitlist">${L.situations.map((s, i) => `<li><a href="?l=${n}#situations-${i + 1}" data-sit="${i + 1}" lang="de">${esc(s.title.replace(/^Situation \d+\s*[—:-]\s*/, ''))}</a></li>`).join('')}</ol>`;
    }
    function related() {
      const gb = x.steps.map(s => `<li><a href="grammar-book.html#${esc(STEPS[s])}">Grammar Book · Step ${s}<span>Die Regel ausführlich</span></a></li>`).join('');
      return `<section class="sg-card" aria-labelledby="sgRelT"><h2 id="sgRelT" style="font-size:18px">Passt dazu <span class="en-sub">Related practice</span></h2><p class="cap">Grammar, words, exercises and the test for Lektion ${n}.</p>
        <ul class="sg-rel">${gb}
          <li><a href="wortschatz.html#L${n}">Wortschatz · Lektion ${n}<span>Wörter lernen und wiederholen</span></a></li>
          <li><a href="practice.html?lesson=${n}">Practice · Lektion ${n}<span>Interaktive Übungen</span></a></li>
          <li><a href="test.html?id=lesson-${n}">Lektion ${n} Quiz<span>Test mit Punkten</span></a></li>
          <li><a href="speaking.html#ai-L${n}">Sprechen mit dem AI-Tutor<span>Frei sprechen üben</span></a></li></ul></section>`;
    }
    function situations() {
      const total = L.situations.length, b = bonus(), s = P.lesson(n, parts, total);
      const cur = sit > total ? null : L.situations[sit - 1];
      const chips = L.situations.map((_, i) => `<button type="button" data-sit="${i + 1}" aria-pressed="${sit === i + 1}" class="${s.sitDone[i + 1] ? 'done' : ''}" aria-label="Situation ${i + 1}${s.sitDone[i + 1] ? ', geübt' : ''}">${s.sitDone[i + 1] ? '✓ ' : ''}${i + 1}</button>`).join('') + (b ? `<button type="button" data-sit="${total + 1}" aria-pressed="${sit === total + 1}">Bonus</button>` : '');
      const l0 = lead();
      const body = cur ? `<div class="sg-sit" role="group" aria-labelledby="sgSitT"><h3 id="sgSitT" lang="de">${esc(cur.title)}</h3>${G.render(cur.md, o)}
          <div class="sg-actions"><button type="button" class="ui-btn ghost ${s.sitDone[sit] ? 'on' : ''}" data-sitdone="${sit}" aria-pressed="${!!s.sitDone[sit]}">${s.sitDone[sit] ? '✓ Geübt' : 'Ich habe diese Situation geübt'}</button>
          <span class="sg-nav">${sit > 1 ? `<button type="button" class="ui-btn sm quiet" data-sit="${sit - 1}">← Situation ${sit - 1}</button>` : ''}${sit < total || b ? `<button type="button" class="ui-btn sm ghost" data-sit="${sit + 1}">${sit < total ? 'Situation ' + (sit + 1) : 'Bonus'} →</button>` : ''}</span></div></div>`
        : `<div class="sg-sit"><h3>${esc(b.title)}</h3>${G.render(b.md, o)}</div>`;
      return `${l0 && sit === 1 ? `<div class="sg-body">${G.render(l0.md, o)}</div>` : ''}
        <p class="cap">${s.sits} von ${total} Situationen geübt. Sprich beide Rollen laut, dann ändere die Details.</p>
        <div class="sg-sits" role="group" aria-label="Situationen">${chips}</div><div class="sg-body">${body}</div>`;
    }
    function render(focus) {
      const s = P.lesson(n, parts, L.situations.length);
      $('sgProg').innerHTML = `<span>${s.done} von ${s.total} Teilen erledigt${s.completed ? ' · <b style="color:var(--ui-ok)">✓ Lektion abgeschlossen</b>' : ''}</span><span class="sg-bar" role="progressbar" aria-label="Lektion ${n}: ${s.done} von ${s.total} Teilen erledigt" aria-valuemin="0" aria-valuemax="${s.total}" aria-valuenow="${s.done}"><i style="width:${s.pct}%"></i></span>`;
      $('sgTabs').innerHTML = parts.map((k, i) => `<button role="tab" type="button" id="tab-${k}" aria-controls="sg" aria-selected="${k === part}" tabindex="${k === part ? 0 : -1}" class="${s.partsDone[k] ? 'done' : ''}" data-part="${k}"><span class="k">${i + 1}</span>${s.partsDone[k] ? '✓ ' : ''}${PART[k].de}</button>`).join('');
      const i = parts.indexOf(part), next = parts[i + 1], prev = parts[i - 1], done = !!s.partsDone[part];
      const missing = parts.filter(k => !s.partsDone[k] && k !== part);
      $('sg').setAttribute('aria-labelledby', 'tab-' + part);
      $('sg').innerHTML = `<section class="sg-card">
          <h2>${PART[part].de} <span class="en-sub">${PART[part].en}</span></h2>
          ${part === 'situations' ? situations() : `<div class="sg-body">${part === 'goals' ? goals() : chunks(part)}</div>`}
          ${part === 'review' ? `<p class="cap" style="margin-top:12px">${s.completed ? '✓ Du hast alle Teile dieser Lektion erledigt.' : missing.length ? `Noch offen: ${missing.map(k => PART[k].de).join(', ')}.` : 'Markiere diesen Teil als erledigt, um die Lektion abzuschließen.'} Lesson completion here is reading progress; your quiz score is separate.</p>` : ''}
          <div class="sg-actions"><button type="button" class="ui-btn ${done ? 'on' : ''}" id="sgDone" aria-pressed="${done}">${done ? '✓ Abschnitt erledigt' : 'Abschnitt erledigt'}</button>
            <span class="sg-nav">${prev ? `<button type="button" class="ui-btn sm quiet" data-part="${prev}">← ${PART[prev].de}</button>` : ''}${next ? `<button type="button" class="ui-btn sm ghost" data-part="${next}">${PART[next].de} →</button>` : n < 24 ? `<a class="ui-btn sm ghost" href="study-guide.html?l=${n + 1}">Lektion ${n + 1} →</a>` : `<a class="ui-btn sm ghost" href="study-guide.html">Alle Lektionen</a>`}</span></div>
        </section>${related()}`;
      if (focus) $('sg').focus({ preventScroll: true });
      const t = $('tab-' + part); if (t && t.scrollIntoView) t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
    function go(k, s, focus) {
      part = k; if (s) sit = s; else if (k !== 'situations') sit = 1;
      history.replaceState(null, '', `?l=${n}#${part}${part === 'situations' && sit > 1 ? '-' + sit : ''}`);
      P.visit(n, part, part === 'situations' ? sit : null); render(focus);
      if (focus) window.scrollTo({ top: Math.max(0, $('sgProg').getBoundingClientRect().top + scrollY - 80), behavior: 'auto' });
    }
    $('sgTabs').onclick = e => { const b = e.target.closest('[data-part]'); if (b) go(b.dataset.part, null, true) };
    $('sgTabs').onkeydown = e => { const i = parts.indexOf(part); let k = null; if (e.key === 'ArrowRight') k = parts[(i + 1) % parts.length]; if (e.key === 'ArrowLeft') k = parts[(i + parts.length - 1) % parts.length]; if (k) { go(k); $('tab-' + k).focus() } };
    $('sg').onclick = e => {
      const pt = e.target.closest('[data-part]'); if (pt) return go(pt.dataset.part, null, true);
      const st = e.target.closest('[data-sit]'); if (st) return go('situations', +st.dataset.sit, true);
      const sd = e.target.closest('[data-sitdone]'); if (sd) { const k = +sd.dataset.sitdone; P.setSit(n, k, !P.lesson(n).sitDone[k]); return render() }
      if (e.target.closest('#sgDone')) { P.setPart(n, part, !P.lesson(n).partsDone[part]); return render() }
      const sp = e.target.closest('[data-say]'); if (sp) return say(sp.dataset.say);
    };
    $('sg').onchange = e => { const c = e.target.closest('input[data-can]'); if (c) P.setCan(n, c.dataset.can, c.checked) };
    window.addEventListener('hashchange', () => { fromHash(); render() });
    fromHash(); P.visit(n, part, part === 'situations' ? sit : null); render();
  }

  if (n && n >= 1 && n <= 24 && IDX.length === 24) { $('sgTabs').hidden = false; $('sg').setAttribute('role', 'tabpanel'); $('sg').tabIndex = -1; lesson() }
  else { if (q.has('l')) history.replaceState(null, '', location.pathname); $('sgTabs').hidden = true; overview() }
})();
