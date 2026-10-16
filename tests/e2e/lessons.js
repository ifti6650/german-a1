// Exercise-engine regression inside the learner portal: answers every practice, apply and quiz question of the given lessons correctly.
// Run from the repo root:  NODE_PATH=$(npm root -g) node tests/e2e/lessons.js 1 2 3   (needs a static server on :8765)
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path');
const { seed } = require('./fixtures');
const BASE = 'http://localhost:8765/'; const LESSONS = process.argv.slice(2).map(Number);
async function answer(p, N) {
  const qid = await p.getAttribute('.ex', 'data-qid');
  const q = await p.evaluate(([id, n]) => { const c = COURSE.content(n); return [...c.practice, ...c.apply, ...c.quiz].find(x => x.id === id) }, [qid, N]);
  if (!q) throw new Error('unknown ' + qid);
  if (q.options) await p.click(`.ex-opt[data-opt="${q.answer}"]`);
  else if (q.type === 'gap') { const g = await p.$$('.ex-gap'); for (let i = 0; i < g.length; i++) await g[i].fill(q.answer[i][0]) }
  else if (q.type === 'order') { for (const t of q.answer.split(' ')) { for (const b of await p.$$('.ex-bank .ex-tok:not([disabled])')) if ((await b.textContent()) === t) { await b.click(); break } } }
  else if (q.type === 'match') { for (const [a, b] of q.pairs) { await p.click(`[data-left="${a}"]`); await p.click(`[data-right="${b}"]`) } }
  else if (q.type === 'writing') await p.fill('.ex-text', 'Test.');
  else if (q.type !== 'speaking') await p.fill('.ex-input', q.answer);
}
(async () => {
  const b = await chromium.launch(); const ctx = await b.newContext();
  await ctx.route(/fonts\./, r => r.abort());
  await ctx.route(/cdn\.jsdelivr\.net/, r => r.fulfill({ status: 200, contentType: 'application/javascript', body: fs.readFileSync(path.join(__dirname, 'mock-supabase.js'), 'utf8') }));
  await ctx.addInitScript(seed({ as: 'returning', signedIn: true }));
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  for (const N of LESSONS) {
    const out = [];
    for (const [tab, run] of [['practice', 'lesson'], ['apply', 'apply']]) {
      await p.goto(BASE + `lesson.html?l=${N}#${tab}`); await p.waitForTimeout(300); await p.click(`[data-run="${run}"]`);
      let n = 0, ok = 0; while (await p.$('.ex')) { await answer(p, N); await p.click('[data-go]'); n++; if (/ok|info/.test(await p.getAttribute('.ex-fb', 'class'))) ok++; else console.log('  NOT OK', await p.getAttribute('.ex', 'data-qid'), (await p.textContent('.ex-fb')).slice(0, 120)); await p.click('[data-go]') }
      out.push(`${tab} ${ok}/${n}`);
    }
    await p.goto(BASE + `test.html?id=lesson-${N}`); await p.waitForTimeout(300); await p.click('#start'); let k = 0;
    while (true) { await answer(p, N); k++; if (!(await p.$('#next'))) break; await p.click('#next') }
    await p.click('#sub'); await p.click('#dlgYes'); await p.waitForTimeout(250);
    out.push(`quiz ${k}q ${await p.textContent('.big-score')}`);
    await p.goto(BASE + `lesson.html?l=${N}#learn`); await p.waitForTimeout(250);
    out.push(`learn ${await p.$$eval('.learn-card', x => x.length)} sections`);
    console.log('L' + N + ': ' + out.join(' | '));
  }
  const m = Math.ceil(LESSONS[0] / 3);
  await p.goto(BASE + `test.html?id=module-${m}`); await p.waitForTimeout(300); await p.click('#start');
  console.log(`Modul ${m} test:`, await p.textContent('.run-top span:first-child'));
  console.log('ERRORS', errs.length ? errs : 'none'); await b.close();
})().catch(e => { console.error('FAIL', e.message); process.exit(1) });
