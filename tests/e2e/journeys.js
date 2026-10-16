// Browser journeys for the public site + learner portal, against a simulated Supabase (tests/e2e/mock-supabase.js).
// Run from the repo root:  NODE_PATH=$(npm root -g) node tests/e2e/journeys.js [--shots <dir>]
// Needs Playwright with Chromium. Starts its own static server; nothing touches the real Supabase project.
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs'), path = require('path');
const { seed, USERS } = require('./fixtures');
const ROOT = path.resolve(__dirname, '..', '..');
const PORT = 8800 + Math.floor(Math.random() * 100), BASE = `http://localhost:${PORT}/`;
const MOCK = fs.readFileSync(path.join(__dirname, 'mock-supabase.js'), 'utf8');
const SHOTS = (i => i > 0 ? process.argv[i + 1] : null)(process.argv.indexOf('--shots'));
const DESK = { width: 1366, height: 860 }, MOBILE = { width: 390, height: 844 };
const results = []; const pageErrors = [];
let browser;

function ok(cond, msg) { if (!cond) throw new Error(msg) }
async function context(opts = {}, viewport = DESK) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1, isMobile: viewport === MOBILE, hasTouch: viewport === MOBILE });
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  if (opts.offline) await ctx.route(/cdn\.jsdelivr\.net/, r => r.abort());
  else await ctx.route(/cdn\.jsdelivr\.net/, r => r.fulfill({ status: 200, contentType: 'application/javascript', body: MOCK }));
  await ctx.addInitScript(seed(opts));
  const page = await ctx.newPage();
  page.on('pageerror', e => pageErrors.push(`${page.url()} :: ${e.message}`));
  return { ctx, page };
}
async function shot(page, name) { if (SHOTS) await page.screenshot({ path: path.join(SHOTS, name + '.png') }) }
const settle = p => p.waitForTimeout(700);
const file = p => new URL(p.url()).pathname.split('/').pop();
async function kpis(p) { return p.$$eval('.db-kpi', cs => Object.fromEntries(cs.map(c => [c.querySelector('.k').textContent.trim(), c.querySelector('.v').textContent.replace(/\s+/g, ' ').trim()]))) }
async function current(p) { return p.$eval('.sh-side [aria-current="page"]', e => e.textContent.trim()).catch(() => null) }
async function noHScroll(p, label) { const [sw, iw] = await p.evaluate(() => [document.documentElement.scrollWidth, innerWidth]); ok(sw <= iw + 1, `${label}: horizontal overflow ${sw} > ${iw}`) }
async function journey(name, fn) {
  const t = Date.now();
  try { await fn(); results.push([name, 'PASS', Date.now() - t]) }
  catch (e) { results.push([name, 'FAIL: ' + e.message.split('\n')[0], Date.now() - t]) }
}

(async () => {
  const server = spawn('python3', ['-m', 'http.server', String(PORT)], { cwd: ROOT, stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 700));
  browser = await chromium.launch();
  if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });
  try {
    await journey('1 · Guest → landing → login → dashboard', async () => {
      const { ctx, page: p } = await context({ as: 'returning' });
      await p.goto(BASE + 'index.html'); await settle(p);
      ok(await p.isVisible('.lp-hero h1'), 'landing hero missing');
      ok(!(await p.$('.sh-side')), 'landing must not use the portal shell');
      ok(await p.isVisible('.lp-actions [data-signin]'), 'Sign in button not visible');
      await shot(p, 'j1-landing');
      await p.click('.lp-actions [data-signin]'); ok(await p.isVisible('#signin'), 'sign-in dialog did not open');
      await shot(p, 'j1-signin-dialog');
      await Promise.all([p.waitForURL(/dashboard\.html/), p.click('#siGoogle')]); await settle(p);
      ok(!/code=/.test(p.url()), 'OAuth code left in URL'); ok(file(p) === 'dashboard.html', 'not on dashboard: ' + p.url());
      ok((await p.textContent('#dbHello')).includes('Jade'), 'greeting without name');
      ok((await p.textContent('#dbCourse')).includes('Momente A1.1'), 'course missing');
      ok(await current(p) === 'Dashboard', 'Dashboard not active in sidebar');
      ok(/Lektion 2/.test(await p.textContent('.db-resume h2')), 'resume card is not Lektion 2');
      const txt = await p.textContent('#db'); const k = await kpis(p);
      ok(/^\d+ ?%$/.test(k['Practice accuracy']), 'accuracy not shown: ' + k['Practice accuracy']);
      ok(k['Reviews due'] === '4', 'reviews due should be 4 (2 mistakes + 2 words), got ' + k['Reviews due']);
      ok(k['Learning streak'] === '3 days', 'streak should be 3 days, got ' + k['Learning streak']);
      ok(k['Latest test'] === '47 %' || k['Latest test'] === '47%', 'latest test should be 47%, got ' + k['Latest test']);
      ok(k['Course completion'].startsWith('1 / 12') || k['Course completion'].startsWith('1/ 12') || /^1\s*\/\s*12/.test(k['Course completion']), 'completion should be 1/12, got ' + k['Course completion']);
      ok(/w questions|W-questions/i.test(txt), 'weak topic (W-questions) not recommended');
      await shot(p, 'j1-dashboard'); await ctx.close();
    });

    await journey('2 · New user → onboarding → A1.1 → dashboard', async () => {
      const { ctx, page: p } = await context({ as: 'fresh' });
      await p.goto(BASE + 'index.html#courses'); await settle(p);
      await p.click('[data-start="A1.1"]');
      await Promise.all([p.waitForURL(/onboarding\.html/), p.click('#siGoogle')]); await settle(p);
      ok((await p.textContent('#obTitle')).includes('Lena'), 'onboarding does not greet the new learner');
      ok(await p.isChecked('input[value="A1.1"]'), 'A1.1 not preselected from the course card');
      await shot(p, 'j2-onboarding');
      await Promise.all([p.waitForURL(/dashboard\.html/), p.click('#obGo')]); await settle(p);
      const txt = (await p.textContent('main')).replace(/\s+/g, ' ');
      ok(/You’re all set: Momente A1\.1/.test(txt), 'no success state after onboarding');
      ok(/Lektion 1: Ich heiße Miriam/.test(txt) && /Start lesson/.test(txt), 'new learner should start Lektion 1');
      ok(/No activity yet/.test(txt) && /No tests yet/.test(txt), 'empty states missing');
      ok((await kpis(p))['Practice accuracy'] === '–', 'accuracy must not show a number without answers');
      await shot(p, 'j2-dashboard-new');
      await p.waitForTimeout(1800);
      const prefs = await p.evaluate(() => (JSON.parse(localStorage.getItem('mock:db')).app_state.find(r => r.key === 'a1:prefs') || {}).value);
      ok(prefs && prefs.course === 'A1.1', 'course choice not saved to the account (app_state)');
      // reload: no second onboarding
      await p.reload(); await settle(p); ok(file(p) === 'dashboard.html', 'onboarding shown again after reload');
      await ctx.close();
      // variant: A1.2 starts at Lektion 13
      const { ctx: c2, page: q } = await context({ as: 'fresh', signedIn: true });
      await q.goto(BASE + 'dashboard.html'); await q.waitForURL(/onboarding\.html/); await settle(q);
      await q.check('input[value="A1.2"]', { force: true }); await Promise.all([q.waitForURL(/dashboard\.html/), q.click('#obGo')]); await settle(q);
      ok(/Lektion 13/.test(await q.textContent('.db-resume h2')), 'A1.2 learner should start at Lektion 13');
      await c2.close();
    });

    await journey('3 · Returning user → login → resume learning (deep link kept)', async () => {
      const { ctx, page: p } = await context({ as: 'returning' });
      await p.goto(BASE + 'practice.html?topic=sein'); await p.waitForURL(/index\.html/); await settle(p);
      ok(await p.isVisible('#signin'), 'protected page did not ask to sign in');
      ok(/sign in to open that page/i.test(await p.textContent('#siLead')), 'no explanation for the redirect');
      await Promise.all([p.waitForURL(/practice\.html\?topic=sein/), p.click('#siGoogle')]); await settle(p);
      ok(await current(p) === 'Practice', 'Practice not active after deep link');
      await p.click('.sh-side a[href="dashboard.html"]'); await settle(p);
      await Promise.all([p.waitForURL(/lesson\.html\?l=2/), p.click('.db-resume .ui-btn')]); await settle(p);
      ok((await p.textContent('h1')).includes('Was macht ihr beruflich'), 'resume opened the wrong lesson');
      ok(await current(p) === 'My Course', 'My Course not active on a lesson page');
      await p.goto(BASE + 'course.html'); await settle(p);
      ok((await p.$$('#weeks > li')).length === 8, '8-week plan missing on My Course');
      await shot(p, 'j3-resume-lesson'); await ctx.close();
    });

    await journey('4 · Wortschatz → Practice → Progress', async () => {
      const { ctx, page: p } = await context({ as: 'returning', signedIn: true });
      await p.goto(BASE + 'wortschatz.html'); await settle(p);
      const rows = await p.$$eval('.tablebox tbody tr', r => r.length);
      ok(rows === 783, 'Wortschatz should list 783 words, got ' + rows);
      ok(await current(p) === 'Wortschatz', 'Wortschatz not active');
      ok(!(await p.$('.wrap > a.back')), 'old back links still shown');
      const before = await p.evaluate(() => Object.values(JSON.parse(localStorage.getItem('wz:v2')).cards).filter(c => c.s === 'known').length);
      await p.click('.tablebox tbody tr:nth-child(1) [data-set="known"]'); await p.waitForTimeout(200);
      const after = await p.evaluate(() => Object.values(JSON.parse(localStorage.getItem('wz:v2')).cards).filter(c => c.s === 'known').length);
      ok(after === before + 1, `marking a word Known did not persist (${before} → ${after})`);
      await p.click('.seg button:has-text("Flashcards")').catch(() => {}); await p.waitForTimeout(200);
      ok(await p.$('.card .big'), 'flashcards do not render');
      await shot(p, 'j4-wortschatz');
      const n0 = await p.evaluate(() => JSON.parse(localStorage.getItem('mock:db')).attempts.length);
      await p.click('.seg button:has-text("Quiz")'); await p.waitForTimeout(200);
      await p.click('.opts .opt >> nth=0'); await p.waitForTimeout(1200);
      const n1 = await p.evaluate(() => JSON.parse(localStorage.getItem('mock:db')).attempts.length);
      ok(n1 === n0 + 1, `Wortschatz quiz answer not saved to the account (${n0} → ${n1})`);
      await p.click('.sh-side a[href="practice.html"]'); await settle(p);
      ok(await current(p) === 'Practice', 'Practice not active');
      await p.click('#go'); await p.waitForTimeout(300); ok(await p.isVisible('#runner .ex'), 'practice runner did not start');
      await shot(p, 'j4-practice');
      await p.click('.sh-side a[href="progress.html"]'); await settle(p);
      ok(await current(p) === 'Progress', 'Progress not active');
      const t = (await p.textContent('#app')).replace(/\s+/g, ' ');
      ok(new RegExp(`Words known\\s*${after}(?!\\d)`, 'i').test(t), 'Progress does not show the new Known word count');
      await p.waitForTimeout(1800);
      const remote = await p.evaluate(() => { const r = JSON.parse(localStorage.getItem('mock:db')).app_state.find(x => x.key === 'wz:v2'); return r && Object.values(r.value.cards).filter(c => c.s === 'known').length });
      ok(remote === after, 'Wortschatz change not synced to the account (app_state)');
      await ctx.close();
    });

    await journey('5 · Refresh keeps the portal and navigation state', async () => {
      const { ctx, page: p } = await context({ as: 'returning', signedIn: true });
      await p.goto(BASE + 'lesson.html?l=2#practice'); await settle(p);
      await p.reload(); await settle(p);
      ok(file(p) === 'lesson.html' && /l=2/.test(p.url()) && /#practice/.test(p.url()), 'refresh lost the lesson or tab: ' + p.url());
      ok(await p.$eval('.ltabs [aria-selected="true"]', e => e.textContent.trim()).then(t => /Practice/.test(t)), 'Practice tab not restored');
      ok((await p.textContent('#sh-avatar')).includes('Jade'), 'profile not restored after refresh');
      ok(await current(p) === 'My Course', 'active nav lost after refresh');
      await p.goto(BASE + 'dashboard.html'); await p.reload(); await settle(p); ok(file(p) === 'dashboard.html', 'dashboard refresh redirected');
      await ctx.close();
    });

    await journey('6 · Logout → public landing page', async () => {
      const { ctx, page: p } = await context({ as: 'returning', signedIn: true });
      await p.goto(BASE + 'dashboard.html'); await settle(p);
      await p.click('#sh-avatar'); ok(await p.isVisible('#sh-menu'), 'profile menu did not open');
      await shot(p, 'j6-profile-menu');
      await Promise.all([p.waitForURL(/index\.html/), p.click('#sh-signout')]); await settle(p);
      ok(await p.isVisible('.ui-toast'), 'no signed-out confirmation');
      ok(await p.isVisible('.lp-actions [data-signin]'), 'landing still shows member actions');
      ok(!(await p.evaluate(() => localStorage.getItem('sb-gvftmsctaxyllmtiztil-auth-token'))), 'session not cleared');
      await p.goto(BASE + 'progress.html').catch(() => {}); await p.waitForURL(/index\.html/); await settle(p); ok(await p.isVisible('#signin'), 'protected page after logout did not ask to sign in');
      await ctx.close();
    });

    await journey('7 · Mobile: navigation → lesson → dashboard', async () => {
      const { ctx, page: p } = await context({ as: 'returning', signedIn: true }, MOBILE);
      for (const pg of ['index.html', 'dashboard.html', 'wortschatz.html', 'course.html', 'lesson.html?l=2', 'progress.html', 'grammar-book.html']) { await p.goto(BASE + pg); await settle(p); await noHScroll(p, pg) }
      await p.goto(BASE + 'dashboard.html'); await settle(p);
      const sideOff = await p.$eval('.sh-side', e => e.inert && e.getBoundingClientRect().right <= 0);
      ok(await p.isVisible('.sh-tabs') && sideOff, 'mobile should show the tab bar, not the sidebar');
      await shot(p, 'j7-mobile-dashboard');
      await p.click('.sh-tabs a[href="course.html"]'); await p.waitForURL(/course\.html/); await settle(p);
      ok(await p.$eval('.sh-tabs [aria-current="page"]', e => e.textContent.trim()) === 'Course', 'Course tab not active');
      await p.click('a.lcard[href*="l=2"]'); await p.waitForURL(/lesson\.html\?l=2/); await settle(p);
      await p.click('#sh-more'); await p.waitForTimeout(300);
      ok(await p.$eval('.sh-side', e => !e.inert && e.getBoundingClientRect().left >= 0), 'More did not open the navigation drawer');
      await shot(p, 'j7-mobile-drawer');
      await p.keyboard.press('Escape'); await p.waitForTimeout(300);
      ok(!(await p.evaluate(() => document.documentElement.classList.contains('sh-open'))), 'Escape did not close the drawer');
      await p.click('.sh-tabs a[href="dashboard.html"]'); await p.waitForURL(/dashboard\.html/); await settle(p);
      ok(/Lektion 2/.test(await p.textContent('.db-resume h2')), 'dashboard lost state');
      await p.goto(BASE + 'index.html'); await settle(p); await p.click('#lpBurger'); ok(await p.isVisible('#lpNav a[href="#courses"]'), 'landing mobile menu did not open');
      await shot(p, 'j7-mobile-landing-menu');
      await ctx.close();
    });

    await journey('E1 · Closed sign-ups show a clear error', async () => {
      const { ctx, page: p } = await context({ as: 'fresh' });
      await p.goto(BASE + 'index.html'); await p.evaluate(() => { const c = JSON.parse(localStorage.getItem('mock:cfg')); c.loginAs = null; localStorage.setItem('mock:cfg', JSON.stringify(c)) });
      await p.click('.lp-actions [data-signin]'); await Promise.all([p.waitForURL(/index\.html\?signin=1&error=/), p.click('#siGoogle')]); await settle(p);
      ok(/has not been invited/.test(await p.textContent('#siMsg')), 'no invitation error message');
      await shot(p, 'e1-signup-closed'); await ctx.close();
    });

    await journey('E2 · Server error → error state with retry', async () => {
      const { ctx, page: p } = await context({ as: 'returning', signedIn: true });
      await p.goto(BASE + 'dashboard.html'); await settle(p); // first load pulls app_state
      await p.evaluate(() => { const c = JSON.parse(localStorage.getItem('mock:cfg')); c.fail = true; localStorage.setItem('mock:cfg', JSON.stringify(c)) });
      await p.reload(); await settle(p);
      ok(/could not load your activity/i.test(await p.textContent('#dbNotice')), 'no error state');
      ok(/Lektion 2/.test(await p.textContent('.db-resume h2')), 'local progress should still render');
      ok((await kpis(p))['Practice accuracy'] === '–', 'must not show an accuracy number without data');
      await shot(p, 'e2-error-state');
      await p.evaluate(() => { const c = JSON.parse(localStorage.getItem('mock:cfg')); c.fail = false; localStorage.setItem('mock:cfg', JSON.stringify(c)) });
      await p.click('#dbRetry'); await settle(p);
      ok(!(await p.textContent('#dbNotice')).trim(), 'retry did not clear the error');
      ok(/^\d+ ?%$/.test((await kpis(p))['Practice accuracy']), 'retry did not load data');
      await ctx.close();
    });

    await journey('E3 · Offline: portal keeps working with local data', async () => {
      const { ctx, page: p } = await context({ as: 'returning', signedIn: true, offline: true });
      await p.goto(BASE + 'dashboard.html'); await settle(p);
      ok(/You are offline/.test(await p.textContent('#sh-content')), 'no offline state');
      ok(file(p) === 'dashboard.html', 'offline learner was redirected');
      await ctx.close();
    });

    await journey('E4 · Loading skeleton, keyboard menu, active states', async () => {
      const { ctx, page: p } = await context({ as: 'returning', signedIn: true });
      await p.goto(BASE + 'dashboard.html', { waitUntil: 'domcontentloaded' });
      ok(await p.$('#db[aria-busy="true"] .ui-sk'), 'no loading skeleton');
      await settle(p);
      await p.focus('#sh-avatar'); await p.keyboard.press('Enter'); await p.waitForTimeout(100);
      ok(await p.evaluate(() => document.activeElement.getAttribute('role') === 'menuitem'), 'menu does not move focus to first item');
      await p.keyboard.press('ArrowDown'); await p.keyboard.press('Escape'); await p.waitForTimeout(100);
      ok(await p.evaluate(() => document.getElementById('sh-menu').hidden && document.activeElement.id === 'sh-avatar'), 'Escape does not close the menu and restore focus');
      const map = { 'course.html': 'My Course', 'wortschatz.html': 'Wortschatz', 'practice.html': 'Practice', 'tests.html': 'Tests', 'test.html?id=lesson-1': 'Tests', 'mistakes.html': 'Mistakes', 'progress.html': 'Progress', 'grammar-book.html': 'Grammar Book', 'study-guide.html': 'Study Guide', 'speaking.html': 'Sprechen' };
      for (const [pg, label] of Object.entries(map)) { await p.goto(BASE + pg); await settle(p); ok(await current(p) === label, `${pg}: active item is ${await current(p)}`); ok((await p.$$('nav.top')).length === 0, pg + ': old top nav still present') }
      await ctx.close();
    });
  } finally {
    await browser.close(); server.kill();
  }
  const w = Math.max(...results.map(r => r[0].length));
  results.forEach(([n, s, ms]) => console.log(n.padEnd(w + 2) + s + `  (${(ms / 1000).toFixed(1)}s)`));
  console.log('Page errors:', pageErrors.length ? '\n  ' + pageErrors.join('\n  ') : 'none');
  const failed = results.filter(r => r[1] !== 'PASS').length + pageErrors.length;
  console.log(failed ? `FAILED (${failed})` : `ALL ${results.length} JOURNEYS PASSED`);
  process.exit(failed ? 1 : 0);
})();
