// Deutsch A1 · Study Guide content engine (browser + Node).
// The lesson texts live as Markdown in guide/lNN.md (one file per lesson, edit freely).
// This file
//   • splits a lesson file into the 9 parts of a Study Guide lesson (PARTS) by its headings,
//   • renders the small Markdown subset the guide uses to SAFE HTML: every character of the
//     source is HTML-escaped first, so no tag or attribute from a content file can reach the page,
//   • recognises dialogues (consecutive "**Name:** text" lines) and shows them as conversation blocks.
(function (root) {
  const PARTS = [
    ['intro', 'Einführung', 'Introduction'],
    ['goals', 'Lernziele', 'Learning objectives'],
    ['words', 'Wort-Hilfe', 'Vocabulary'],
    ['patterns', 'Satzmuster', 'Sentence patterns'],
    ['situations', 'Situationen', 'Real-life situations'],
    ['expressions', 'Nützliche Ausdrücke', 'Useful expressions'],
    ['variations', 'Sprechvarianten', 'Speaking variations'],
    ['challenge', 'Frei sprechen', 'Communication challenge'],
    ['review', 'Wiederholen', 'Quick review']
  ];
  // Which part a heading belongs to (the leading "4 · " is removed first). Order matters.
  const RULES = [
    ['intro', /^(Short introduction|So (benutzt|lernst) du)/i],
    ['goals', /^Was kann ich/i],
    ['words', /^Wort-Hilfe/i],
    ['patterns', /^(Satzmuster|Mini-Grammatik)/i],
    ['situations', /^(Situation \d|Acht Alltagssituationen|Drei lange Gespräche)/i],
    ['expressions', /^(Nützliche Ausdrücke|Du oder Sie)/i],
    ['variations', /^(Gleiche (Frage|Situation)|Was, wenn)/i],
    ['challenge', /^(Kommunikation ohne Vorlage|Jetzt sprichst du)/i],
    ['review', /^Wiederholen/i]
  ];
  const partOf = title => { const t = title.replace(/^\d+\s*·\s*/, ''); for (const [k, re] of RULES) if (re.test(t)) return k; return null };
  const cleanTitle = t => t.replace(/^\d+\s*·\s*/, '').trim();

  // ---------------------------------------------------------------- parsing
  function parseLesson(md) {
    const lines = md.replace(/\r\n?/g, '\n').split('\n');
    let i = 0; const head = {};
    for (; i < lines.length && (!head.title || !lines[i].trim() || /^# Deutsch im echten Leben\s*$/.test(lines[i])); i++) {
      const m = lines[i].match(/^## (A1\.[12]) · Lektion (\d+)\s*$/); if (m) { head.level = m[1]; head.n = +m[2]; continue }
      const t = lines[i].match(/^# (.+)$/); if (t && head.n && !/^Deutsch im echten Leben\s*$/.test(t[1])) head.title = t[1].trim();
    }
    if (!head.n || !head.title) throw new Error('lesson header missing ("## A1.x · Lektion NN" + "# Title")');
    // chunks: H2 sections; before the first H2, H3 sections and short bold-only lines (pseudo headings)
    const chunks = []; let cur = { title: '', lines: [], level: 0 }; let seenH2 = false;
    const push = () => { if (cur.title || cur.lines.some(l => l.trim())) chunks.push(cur) };
    for (; i < lines.length; i++) {
      const l = lines[i];
      if (/^# Deutsch im echten Leben\s*$/.test(l)) continue;
      const h2 = l.match(/^## (.+)$/), h3 = !seenH2 && l.match(/^### (.+)$/), pseudo = !seenH2 && l.match(/^\*\*([^*]{3,40})\*\*\s*$/);
      if (h2) { push(); seenH2 = true; cur = { title: h2[1].trim(), lines: [], level: 2 }; continue }
      if (h3 || pseudo) { push(); cur = { title: (h3 || pseudo)[1].trim(), lines: [], level: 3 }; continue }
      cur.lines.push(l);
    }
    push();
    const parts = Object.fromEntries(PARTS.map(p => [p[0], []])); const situations = []; const unmatched = [];
    chunks.forEach((c, idx) => {
      let body = c.lines.join('\n').replace(/^\s*---\s*$/gm, '').trim();
      if (!c.title) { // lesson prelude: subtitle + "Dein Ziel"
        const goal = body.match(/^> \*\*Dein Ziel:\*\*.*(?:\n>.*)*/m);
        if (goal) { parts.goals.push({ title: '', md: goal[0] }); body = body.replace(goal[0], '').trim() }
        if (body) parts.intro.push({ title: '', md: body });
        return;
      }
      const k = partOf(c.title);
      if (!k) { unmatched.push(c.title); parts.intro.push({ title: cleanTitle(c.title), md: body }); return }
      if (k === 'situations') {
        if (/^(\d+\s*·\s*)?Situation \d/.test(c.title)) { situations.push({ title: cleanTitle(c.title).replace(/^Situation (\d+):\s*/, 'Situation $1 — '), md: body }); return }
        if (/Drei lange Gespräche/.test(c.title)) { parts.situations.push({ title: cleanTitle(c.title), md: body, bonus: true }); return }
        // "Acht Alltagssituationen": intro text + "### Situation k — …" blocks
        const segs = body.split(/^### (?=Situation \d)/m);
        const lead = segs.shift().trim(); if (lead) parts.situations.push({ title: cleanTitle(c.title), md: lead, lead: true });
        segs.forEach(s => { const nl = s.indexOf('\n'); situations.push({ title: s.slice(0, nl).trim(), md: s.slice(nl + 1).trim() }) });
        return;
      }
      parts[k].push({ title: cleanTitle(c.title), md: body });
    });
    return { n: head.n, level: head.level, title: head.title, parts, situations, unmatched };
  }

  // ---------------------------------------------------------------- rendering
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // inline: input is ESCAPED text; only ** and * are turned into tags
  function inline(t, opt) {
    let h = esc(t).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/(^|[^\w*])\*(?!\s)([^*]+?)\*(?![\w*])/g, '$1<em>$2</em>');
    if (opt && opt.steps && /Grammar Book/.test(t)) h = h.replace(/\b(Steps?) (\d+)(?:–(\d+))?/g, (m, w, a, b) => {
      const ln = x => opt.steps[x] ? `<a href="${esc(opt.steps[x])}">${x}</a>` : x; // opt.steps: step number → Grammar Lab URL
      return `${w} ${ln(a)}${b ? '–' + ln(b) : ''}`;
    });
    return h;
  }
  const SPEAKER = /^\*\*([^*:]{1,32}):\*\*\s+(.+?)\s*$/;
  const LABELS = /^(Ort|Ort \/ Kontext|Personen|Du\/Sie|Wort-Hilfe|Sag es selbst|Ein Schritt weiter|Deine Rolle|Merke|Sprachhilfe|Tipp|Nächster Schritt|Grammar Book reference|Dein Ziel|Mein Leben|Kurz|Natürlich|Höflich|Schwieriger|\d+ Sekunden|\d+ Minuten?)$/i;
  function isTurn(line) { const m = line.match(SPEAKER); return !!m && !LABELS.test(m[1].trim()) }

  function render(md, opt) {
    opt = opt || {};
    const L = String(md || '').replace(/\r\n?/g, '\n').split('\n');
    const out = []; let i = 0; const hOff = opt.hOffset || 2;
    const isBlockStart = l => /^(#{1,6} |\||> |>$|\s*[-*] |\d+\. |---+\s*$)/.test(l);
    while (i < L.length) {
      const l = L[i];
      if (!l.trim()) { i++; continue }
      let m;
      if ((m = l.match(/^(#{1,6}) (.+)$/))) { const lv = Math.min(6, m[1].length + hOff); out.push(`<h${lv}>${inline(m[2], opt)}</h${lv}>`); i++; continue }
      if (/^---+\s*$/.test(l)) { i++; continue }
      if (/^\|/.test(l)) { // table
        const rows = []; while (i < L.length && /^\|/.test(L[i])) rows.push(L[i++]);
        const cells = r => r.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());
        const body = rows.filter((r, k) => !(k === 1 && /^\|?\s*:?-{2,}/.test(r)));
        const [h, ...rs] = body;
        out.push(`<div class="sg-tw"><table><thead><tr>${cells(h).map(c => `<th>${inline(c, opt)}</th>`).join('')}</tr></thead><tbody>${rs.map(r => `<tr>${cells(r).map(c => `<td>${inline(c, opt)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
        continue;
      }
      if (/^>/.test(l)) { const q = []; while (i < L.length && /^>/.test(L[i])) q.push(L[i++].replace(/^> ?/, '')); out.push(`<blockquote>${render(q.join('\n'), opt)}</blockquote>`); continue }
      if ((m = l.match(/^\s*[-*] \[( |x)\] /i))) { // task list → can-do checks
        const items = []; while (i < L.length && /^\s*[-*] \[( |x)\] /i.test(L[i])) items.push(L[i++].replace(/^\s*[-*] \[( |x)\] /i, ''));
        out.push(`<ul class="sg-can">${items.map((t, k) => { const id = opt.taskPrefix ? `${opt.taskPrefix}${k + 1}` : ''; return `<li><label>${id ? `<input type="checkbox" data-can="${esc(id)}"${opt.checked && opt.checked[id] ? ' checked' : ''}${opt.readOnly ? ' disabled' : ''}>` : '<span class="sg-box" aria-hidden="true"></span>'}<span>${inline(t, opt)}</span></label></li>` }).join('')}</ul>`);
        continue;
      }
      if (/^\s*[-*] /.test(l)) { const it = []; while (i < L.length && /^\s*[-*] /.test(L[i])) it.push(L[i++].replace(/^\s*[-*] /, '')); out.push(`<ul>${it.map(t => `<li>${inline(t, opt)}</li>`).join('')}</ul>`); continue }
      if ((m = l.match(/^(\d+)\. /))) { const st = +m[1]; const it = []; while (i < L.length && /^\d+\. /.test(L[i])) it.push(L[i++].replace(/^\d+\. /, '')); out.push(`<ol${st !== 1 ? ` start="${st}"` : ''}>${it.map(t => `<li>${inline(t, opt)}</li>`).join('')}</ol>`); continue }
      // paragraph or dialogue: collect consecutive plain lines
      const para = []; while (i < L.length && L[i].trim() && !(para.length && isBlockStart(L[i]))) para.push(L[i++]);
      // split "**A:** … — **B:** …" lines into two turns
      const lines = para.flatMap(x => x.split(/\s+—\s+(?=\*\*[^*:]{1,32}:\*\*)/));
      if (lines.length >= 2 && lines.every(isTurn)) { out.push(dialogue(lines, opt)); continue }
      const txt = para.map((x, k) => inline(x.replace(/\s+$/, ''), opt) + (k < para.length - 1 ? (/ {2}$/.test(x) ? '<br>' : ' ') : '')).join('');
      if (/^\*\*Wort-Hilfe:\*\*/.test(para[0])) { out.push(`<details class="sg-hint"><summary>Wort-Hilfe</summary><p>${txt.replace(/^<strong>Wort-Hilfe:<\/strong>\s*/, '')}</p></details>`); continue }
      out.push(`<p>${txt}</p>`);
    }
    return out.join('\n');
  }
  function dialogue(lines, opt) {
    const who = []; const turns = lines.map(x => { const m = x.match(SPEAKER); const name = m[1].trim(); if (!who.includes(name)) who.push(name); return [name, m[2]] });
    return `<div class="sg-dlg" lang="de">${turns.map(([name, text]) => {
      const k = who.indexOf(name) % 4;
      const plain = text.replace(/\*+/g, '').replace(/\s+$/, '');
      return `<div class="sg-turn s${k}${k % 2 ? ' r' : ''}"><span class="sg-who">${esc(name)}</span><span class="sg-say">${inline(text, opt)}${opt.speak ? ` <button type="button" class="sg-play" data-say="${esc(plain)}" aria-label="Listen: ${esc(plain)}">🔊</button>` : ''}</span></div>`;
    }).join('')}</div>`;
  }

  // plain text of a Markdown snippet (search index, cards)
  const text = md => String(md || '').replace(/^> ?/gm, '').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1').replace(/\s+/g, ' ').trim();

  // Summary used by the overview page (generated into guide/index.js by tools/guide-build.js)
  function summary(md, steps) {
    const p = parseLesson(md);
    const intro0 = (p.parts.intro.find(c => /Short introduction/i.test(c.title)) || p.parts.intro[0] || { md: '' }).md;
    const goal = text((p.parts.goals[0] || { md: '' }).md).replace(/^Dein Ziel:\s*/, '');
    const words = []; (p.parts.words[0] ? p.parts.words[0].md : '').split('\n').forEach(r => {
      const c = r.trim().replace(/^\||\|$/g, '').split('|').map(x => text(x)); if (c.length === 2 && c[0] && !/^-+$/.test(c[0]) && !/^Deutsch$/i.test(c[0])) words.push(c);
    });
    const refs = new Set(); (md.match(/Grammar Book[^\n]{0,40}?Steps? \d+(?:–\d+)?/g) || []).forEach(s => { const m = s.match(/Steps? (\d+)(?:–(\d+))?/); for (let k = +m[1]; k <= +(m[2] || m[1]); k++) refs.add(k) });
    const review = p.parts.review.map(c => c.md).join('\n');
    return {
      n: p.n, level: p.level, title: p.title,
      intro: text(intro0).split(/(?<=\.)\s/)[0].slice(0, 220),
      goal, situations: p.situations.map(s => s.title), words, steps: [...refs].filter(k => !steps || steps[k]),
      can: (review.match(/^\s*[-*] \[( |x)\] /gim) || []).length,
      parts: PARTS.map(x => x[0]).filter(k => k === 'situations' ? p.situations.length : p.parts[k].length),
      unmatched: p.unmatched
    };
  }

  const api = { PARTS, parseLesson, render, inline, esc, text, summary, partOf };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.GUIDE_MD = api;
})(typeof window !== 'undefined' ? window : globalThis);
