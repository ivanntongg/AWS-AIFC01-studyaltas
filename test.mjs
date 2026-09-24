// Data integrity checks for SenseiDoge content. Run: npm test
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const DATA = ['10_d1.js', '11_d2.js', '12_d3.js', '13_d4.js', '14_d5.js', '20_questions.js', '22_questions2.js',
  '24_notes.js', '24_notes2.js', '25_questions3.js', '21_extras.js', '26_cards2.js', '23_services2.js', '31_merge.js'];
const ctx = { window: {} };
ctx.window = ctx;
vm.createContext(ctx);
for (const f of DATA) vm.runInContext(readFileSync(new URL(`./src/${f}`, import.meta.url), 'utf8'), ctx, { filename: f });
const A = ctx.AIF;

const errors = [];
const fail = (msg) => errors.push(msg);
const nonEmpty = (s) => typeof s === 'string' && s.trim().length > 0;

// Domains and lessons
const taskIds = Object.keys(A.tasks);
if (A.domains.length !== 5) fail(`expected 5 domains, found ${A.domains.length}`);
if (taskIds.length !== 14) fail(`expected 14 task statements, found ${taskIds.length}`);
if (A.domains.reduce((s, d) => s + d.w, 0) !== 100) fail('domain weights do not add up to 100');
for (const d of A.domains) for (const id of d.tasks) if (!A.tasks[id]) fail(`domain ${d.id} lists missing task ${id}`);
for (const [id, t] of Object.entries(A.tasks)) {
  if (!nonEmpty(t.en) || !nonEmpty(t.zh)) fail(`task ${id}: missing en or zh body`);
  if (!t.obj.length) fail(`task ${id}: no objectives`);
  t.obj.forEach((o, i) => { if (!nonEmpty(o[0]) || !nonEmpty(o[1])) fail(`task ${id} objective ${i + 1}: missing translation`); });
  for (const lang of ['en', 'zh']) {
    const opens = (t[lang].match(/<div\b/g) || []).length, closes = (t[lang].match(/<\/div>/g) || []).length;
    if (opens !== closes) fail(`task ${id} ${lang}: ${opens} <div> vs ${closes} </div>`);
  }
}

// Questions
const types = {};
A.qs.forEach((q, i) => {
  const at = `question ${i + 1} (${(q.en.q || '').slice(0, 40)}…)`;
  types[q.t] = (types[q.t] || 0) + 1;
  if (!A.tasks[q.k]) fail(`${at}: unknown lesson tag "${q.k}"`);
  if (q.d !== 'd' + String(q.k).charAt(0)) fail(`${at}: domain ${q.d} does not match lesson ${q.k}`);
  for (const lang of ['en', 'zh']) {
    if (!nonEmpty(q[lang].q) || !nonEmpty(q[lang].x)) fail(`${at}: missing ${lang} question or explanation`);
    if (!Array.isArray(q[lang].o) || q[lang].o.length < 2) fail(`${at}: ${lang} options missing`);
  }
  if (q.en.o.length !== q.zh.o.length) fail(`${at}: en has ${q.en.o.length} options, zh has ${q.zh.o.length}`);
  if (q.t === 'single' || q.t === 'multi') {
    if (q.t === 'single' && q.a.length !== 1) fail(`${at}: single choice needs exactly 1 answer`);
    if (q.t === 'multi' && (q.a.length < 2 || q.en.o.length < 5)) fail(`${at}: multiple response needs 2+ answers and 5+ options`);
    if (q.a.some((i2) => i2 < 0 || i2 >= q.en.o.length)) fail(`${at}: answer index out of range`);
    if (!q.w) fail(`${at}: no wrong-option notes`);
    else for (const lang of ['en', 'zh']) {
      const w = q.w[lang];
      if (!w || w.length !== q.en.o.length) { fail(`${at}: ${lang} notes length ${w && w.length} ≠ ${q.en.o.length} options`); continue; }
      w.forEach((note, oi) => {
        const isRight = q.a.includes(oi);
        if (isRight && note) fail(`${at}: ${lang} note on correct option ${oi + 1}`);
        if (!isRight && !nonEmpty(note)) fail(`${at}: ${lang} missing note for wrong option ${oi + 1}`);
      });
    }
  } else if (q.t === 'order') {
    if (q.en.o.length < 3 || q.en.o.length > 5) fail(`${at}: ordering needs 3–5 items`);
  } else if (q.t === 'match') {
    if (q.en.o.length < 3 || q.en.o.length > 7) fail(`${at}: matching needs 3–7 pairs`);
    for (const lang of ['en', 'zh']) {
      const rights = q[lang].o.map((p) => p[1]);
      if (new Set(rights).size !== rights.length) fail(`${at}: ${lang} matching answers are not unique`);
    }
  } else fail(`${at}: unknown type ${q.t}`);
});
const perDomain = {};
A.qs.forEach((q) => { perDomain[q.d] = (perDomain[q.d] || 0) + 1; });
const need = { d1: 10, d2: 12, d3: 14, d4: 7, d5: 7 };
for (const [d, n] of Object.entries(need)) if ((perDomain[d] || 0) < n + 15) fail(`${d}: only ${perDomain[d]} questions; the simulation needs a comfortable margin over ${n}`);

// Flashcards, services, glossary, plan
A.cards.forEach((c, i) => { if (!DOMAIN(c.d) || !nonEmpty(c.en.q) || !nonEmpty(c.en.a) || !nonEmpty(c.zh.q) || !nonEmpty(c.zh.a)) fail(`flashcard ${i + 1}: incomplete`); });
A.svc.forEach((s) => { if (!nonEmpty(s.en.w) || !nonEmpty(s.zh.w) || !nonEmpty(s.en.p) || !nonEmpty(s.zh.p)) fail(`service ${s.n}: incomplete`); });
const names = A.svc.map((s) => s.n); names.forEach((n, i) => { if (names.indexOf(n) !== i) fail(`service listed twice: ${n}`); });
A.gloss.forEach((g) => { if (!nonEmpty(g.en.d) || !nonEmpty(g.zh.d)) fail(`glossary ${g.en.t}: incomplete`); });
A.plan.forEach((day, di) => day.items.forEach((it) => {
  const [kind, val] = it[0].split(':');
  if (kind === 't' && !A.tasks[val]) fail(`plan day ${di + 1}: unknown lesson ${val}`);
}));
function DOMAIN(id) { return A.domains.some((d) => d.id === id); }

// Sync merge rules: progress from two devices must combine without losing anything
(() => {
  const M = ctx.SDMerge.merge;
  const t0 = 1000, t1 = 2000;
  const a = { data: { done: ['1.1', '2.1'], srs: { 3: { b: 2, due: 50 }, 4: { b: 0, due: 10 } }, hist: [{ t: 1, pct: 50 }], stats: { d1: [3, 5] }, best: 60, task: '2.1', missed: [1, 2] }, ts: { task: t0, missed: t1 } };
  const b = { data: { done: ['1.1', '3.1'], srs: { 3: { b: 1, due: 90 }, 5: { b: 4, due: 70 } }, hist: [{ t: 1, pct: 50 }, { t: 2, pct: 70 }], stats: { d1: [6, 9], d2: [1, 2] }, best: 72, task: '3.4', missed: [9] }, ts: { task: t1, missed: t0 } };
  const m = M(a, b);
  const eq = (x, y) => JSON.stringify(x) === JSON.stringify(y);
  if (!eq([...m.data.done].sort(), ['1.1', '2.1', '3.1'])) fail('merge: lessons done should be the union');
  if (m.data.srs[3].b !== 2 || m.data.srs[5].b !== 4 || !m.data.srs[4]) fail('merge: flashcards should keep the higher level from either device');
  if (m.data.hist.length !== 2) fail('merge: score history should be combined without duplicates');
  if (!eq(m.data.stats.d1, [6, 9]) || !m.data.stats.d2) fail('merge: domain stats should keep the fuller record');
  if (m.data.best !== 72) fail('merge: best score should be the maximum');
  if (m.data.task !== '3.4') fail('merge: last lesson should follow the most recent change');
  if (!eq(m.data.missed, [1, 2])) fail('merge: missed list should follow the most recent change');
  if (!eq(M({ data: {}, ts: {} }, b).data, b.data)) fail('merge: an empty device should adopt the synced copy');
  if (!eq(M(a, { data: {}, ts: {} }).data, a.data)) fail('merge: an empty synced copy should adopt this device');
  if (!eq(M(m, m).data, m.data)) fail('merge: merging identical copies must change nothing');
})();

console.log(`Lessons ${taskIds.length} · questions ${A.qs.length} ${JSON.stringify(types)} · per domain ${JSON.stringify(perDomain)}`);
console.log(`Flashcards ${A.cards.length} · services ${A.svc.length} · glossary ${A.gloss.length}`);
if (errors.length) { console.error(`\n${errors.length} problem(s):\n- ` + errors.join('\n- ')); process.exit(1); }
console.log('All content and sync-merge checks passed.');
