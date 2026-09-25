#!/usr/bin/env node
/**
 * page-dates.mjs — the sitemap's lastmod for ratereliefca.com's hand-written
 * pages, read from each page's own dateModified.
 *
 * Why this exists
 * ---------------
 * The 2026-09-24 audit (technical_site_audit.md T-11, page_audit.csv
 * flag_date_mismatch) found 67 CRR pages whose sitemap lastmod disagreed with
 * the dateModified the page itself carries. src/app/sitemap.ts assigned
 * lastmod from hand-kept date sets (one date per release wave), so a page that
 * was edited after its wave kept the wave's date, and SF and Oakland were
 * forced back to 2026-09-11 after their pages moved to 2026-09-23.
 *
 * The data-driven pages already share one source with the sitemap (city pages:
 * cityPageDates(); article pages: reviewedAt; the cost index:
 * COST_INDEX_UPDATED). The hand-written pages carry their date as a literal in
 * the page file (ArticleJsonLd dateModified=, a `const UPDATED = '…'`, or
 * DecisionPage's contentModifiedDate / sourceCheckedDate). Next cannot read
 * those at request time without tracing the whole project into the server
 * bundle (see the note at the top of sitemap.ts), so this script reads them
 * from source and writes src/data/page-modified-dates.ts, which sitemap.ts
 * imports. The page file stays the only place a date is written.
 *
 * Usage
 *   node scripts/page-dates.mjs          rewrite src/data/page-modified-dates.ts
 *   node scripts/page-dates.mjs --check  exit 1 if that file is stale, if a
 *                                        page declares two different
 *                                        dateModified values, or if a page
 *                                        declares a date this script cannot
 *                                        read (src/data/page-modified-dates.test.ts
 *                                        runs this)
 *   node scripts/page-dates.mjs --report also list pages with no date and
 *                                        visible <time> dates that differ
 *
 * Run it (or --check) after any change to a page's date. The integrator runs
 * --check after merging lanes.
 *
 * How a page's date is found (first rule that yields a date wins; a rule that
 * yields two different dates is a conflict and fails --check):
 *   1. `dateModified` written in the page file as a JSX prop or an object key,
 *      with a string literal or a `const` declared in the same file or exported
 *      by a module the file imports.
 *   2. The page's `<DecisionPage>` element: contentModifiedDate, else
 *      sourceCheckedDate, else DecisionPage's own default (read from
 *      src/components/growth/DecisionPage.tsx). This mirrors line
 *      `dateModified: contentModifiedDate || sourceCheckedDate` there.
 *   3. When the page file only renders one imported component
 *      (`return <SomeGuide kind="x" />`), rules 1 and 2 applied to that
 *      component's function body, with the page's literal props substituted
 *      into `kind === "x" ? "A" : "B"` expressions and into
 *      `let d = 'A'; if (kind === 'x') { d = 'B'; }` reassignments.
 *   4. A page with no dateModified but one visible `<time dateTime='…'>`, or
 *      its own "Last updated: Month D, YYYY" / "This policy was last updated
 *      Month D, YYYY" line, gets that date.
 * Routes come from the hand-written lists in sitemap.ts (parsed the same way
 * as assert-city-links.mjs), plus JSON articles shadowed by a page file.
 * Redirected routes are skipped.
 * A page that has none of these gets no lastmod: an omitted lastmod is
 * accurate, an invented one is not.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const FRONTEND = join(HERE, '..');
const SRC = join(FRONTEND, 'src');
const APP = join(SRC, 'app');
const OUT = join(SRC, 'data', 'page-modified-dates.ts');

const args = process.argv.slice(2);
const CHECK = args.includes('--check');
const REPORT = args.includes('--report');

const DATE = /^\d{4}-\d{2}-\d{2}$/;
const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

// ---------------------------------------------------------------------------
// source helpers
// ---------------------------------------------------------------------------
/** Blank out comments, keeping offsets. Same approach as assert-city-links.mjs. */
function stripComments(src) {
  const out = src.split('');
  let i = 0;
  const n = src.length;
  const blank = (from, to) => { for (let k = from; k < to; k++) if (out[k] !== '\n') out[k] = ' '; };
  while (i < n) {
    const c = src[i];
    const d = src[i + 1];
    if (c === '/' && d === '/') {
      let end = src.indexOf('\n', i);
      if (end === -1) end = n;
      // Keep URLs such as https://x inside strings: only treat as a comment
      // when the previous character is not ':'.
      if (i > 0 && src[i - 1] === ':') { i += 2; continue; }
      blank(i, end); i = end; continue;
    }
    if (c === '/' && d === '*') {
      const close = src.indexOf('*/', i + 2);
      const end = close === -1 ? n : close + 2;
      blank(i, end); i = end; continue;
    }
    if (c === '`') {
      i++;
      while (i < n) { if (src[i] === '\\') { i += 2; continue; } if (src[i] === '`') { i++; break; } i++; }
      continue;
    }
    if (c === "'" || c === '"') {
      let j = i + 1;
      let closed = false;
      while (j < n && src[j] !== '\n') {
        if (src[j] === '\\') { j += 2; continue; }
        if (src[j] === c) { closed = true; j++; break; }
        j++;
      }
      i = closed ? j : i + 1;
      continue;
    }
    i++;
  }
  return out.join('');
}

const fileCache = new Map();
function code(file) {
  if (!fileCache.has(file)) fileCache.set(file, stripComments(readFileSync(file, 'utf8')));
  return fileCache.get(file);
}

function resolveImport(from, spec) {
  let base;
  if (spec.startsWith('@/')) base = join(SRC, spec.slice(2));
  else if (spec.startsWith('./') || spec.startsWith('../')) base = join(dirname(from), spec);
  else return null;
  for (const ext of ['', '.tsx', '.ts', '/index.tsx', '/index.ts']) {
    const cand = base + ext;
    if (existsSync(cand) && /\.tsx?$/.test(cand)) return cand;
  }
  return null;
}

/** name -> module file, for `import { a, b as c } from '…'` in a file. */
function importsOf(file) {
  const map = new Map();
  for (const m of code(file).matchAll(/import\s+(?:type\s+)?\{([^}]*)\}\s*from\s*['"]([^'"]+)['"]/g)) {
    const target = resolveImport(file, m[2]);
    if (!target) continue;
    for (const part of m[1].split(',')) {
      const [orig, alias] = part.trim().replace(/^type\s+/, '').split(/\s+as\s+/);
      if (orig) map.set((alias || orig).trim(), { file: target, name: orig.trim() });
    }
  }
  return map;
}

/** A `const NAME = 'YYYY-MM-DD'` (optionally exported / typed) in a file. */
function constDate(file, name, seen = new Set()) {
  const key = `${file}#${name}`;
  if (seen.has(key)) return null;
  seen.add(key);
  const re = new RegExp(`\\bconst\\s+${name}\\s*(?::\\s*[A-Za-z]+\\s*)?=\\s*['"\`](\\d{4}-\\d{2}-\\d{2})['"\`]`);
  const m = re.exec(code(file));
  if (m) return m[1];
  const imp = importsOf(file).get(name);
  if (imp) return constDate(imp.file, imp.name, seen);
  return null;
}

/**
 * Read a JSX prop / object value starting at `at`. Returns the raw expression
 * text (without the surrounding braces for a `{…}` value) and whether it was a
 * plain string.
 */
function readValue(src, at) {
  while (src[at] === ' ' || src[at] === '\t') at++;
  const q = src[at];
  if (q === "'" || q === '"') {
    const end = src.indexOf(q, at + 1);
    return { raw: src.slice(at + 1, end), string: true };
  }
  if (q === '{') {
    let depth = 0;
    let j = at;
    for (; j < src.length; j++) {
      if (src[j] === '{') depth++;
      else if (src[j] === '}') { depth--; if (depth === 0) break; }
    }
    return { raw: src.slice(at + 1, j).trim(), string: false };
  }
  // object value: read to the next , or } or newline at depth 0
  let j = at;
  let depth = 0;
  for (; j < src.length; j++) {
    const c = src[j];
    if (c === '(' || c === '[' || c === '{') depth++;
    else if (c === ')' || c === ']' || c === '}') { if (depth === 0) break; depth--; }
    else if ((c === ',' || c === '\n') && depth === 0) break;
  }
  return { raw: src.slice(at, j).trim(), string: false };
}

/**
 * Evaluate a condition over the page's literal props: `kind === 'a'`,
 * `kind !== 'a'`, `a || b`, with optional parentheses. Returns true, false,
 * or null when it cannot be decided.
 */
function evalCond(raw, props) {
  let s = raw.trim();
  while (s.startsWith('(') && s.endsWith(')')) s = s.slice(1, -1).trim();
  const parts = s.split('||').map((p) => p.trim());
  if (parts.length > 1) {
    const vals = parts.map((p) => evalCond(p, props));
    if (vals.includes(true)) return true;
    return vals.every((v) => v === false) ? false : null;
  }
  const m = /^([A-Za-z_]\w*)\s*(===|!==)\s*['"]([^'"]+)['"]$/.exec(s);
  if (!m || !props || !(m[1] in props)) return null;
  return m[2] === '===' ? props[m[1]] === m[3] : props[m[1]] !== m[3];
}

/** Split `cond ? a : b` at its top-level ? and :, or return null. */
function splitTernary(s) {
  let depth = 0;
  let quote = null;
  let q = -1;
  let nested = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (quote) { if (c === quote) quote = null; continue; }
    if (c === '"' || c === "'" || c === '`') { quote = c; continue; }
    if (c === '(' || c === '[' || c === '{') depth++;
    else if (c === ')' || c === ']' || c === '}') depth--;
    else if (depth === 0 && c === '?') { if (q === -1) q = i; else nested++; }
    else if (depth === 0 && c === ':' && q !== -1) {
      if (nested === 0) return { cond: s.slice(0, q), a: s.slice(q + 1, i), b: s.slice(i + 1) };
      nested--;
    }
  }
  return null;
}

/**
 * A `let NAME = 'D0'` in `body`, reassigned inside `if (kind === 'x') { … }`
 * blocks: the value the function ends with for these props.
 */
function letDate(body, name, props) {
  const init = new RegExp(`\\blet\\s+${name}\\s*(?::\\s*[A-Za-z]+\\s*)?=\\s*['"](\\d{4}-\\d{2}-\\d{2})['"]`).exec(body);
  if (!init) return undefined;
  let value = init[1];
  const assign = new RegExp(`(?<![\\w.])${name}\\s*=\\s*['"](\\d{4}-\\d{2}-\\d{2})['"]`, 'g');
  for (const m of body.matchAll(assign)) {
    if (m.index === init.index + init[0].indexOf(name)) continue;
    // the nearest `if (…)` whose block contains this assignment
    let guard = null;
    for (const ifm of body.slice(0, m.index).matchAll(/\bif\s*\(/g)) {
      let depth = 1;
      let j = ifm.index + ifm[0].length;
      for (; j < body.length && depth; j++) { if (body[j] === '(') depth++; else if (body[j] === ')') depth--; }
      const cond = body.slice(ifm.index + ifm[0].length, j - 1);
      let k = j;
      while (/\s/.test(body[k])) k++;
      let end;
      if (body[k] === '{') {
        let d = 0;
        for (end = k; end < body.length; end++) { if (body[end] === '{') d++; else if (body[end] === '}') { d--; if (d === 0) break; } }
      } else {
        end = body.indexOf(';', k);
      }
      if (m.index > k && m.index < end) guard = cond;
    }
    if (guard === null) { value = m[1]; continue; }
    const v = evalCond(guard, props);
    if (v === null) return null;
    if (v) value = m[1];
  }
  return value;
}

/** Evaluate a date expression: literal, const, template, let, or a ternary on props. */
function evalDate(raw, file, props, body) {
  let s = raw.trim();
  while (s.startsWith('(') && s.endsWith(')')) s = s.slice(1, -1).trim();
  const lit = /^['"`](\d{4}-\d{2}-\d{2})['"`]$/.exec(s);
  if (lit) return lit[1];
  if (DATE.test(s)) return s;
  const tpl = /^`\$\{([A-Za-z_]\w*)\}`$/.exec(s);
  if (tpl) s = tpl[1];
  if (/^[A-Za-z_]\w*$/.test(s)) {
    if (body) {
      const v = letDate(body, s, props);
      if (v !== undefined) return v;
    }
    return constDate(file, s);
  }
  const t = splitTernary(s);
  if (t) {
    const c = evalCond(t.cond, props);
    if (c === null) return null;
    return evalDate(c ? t.a : t.b, file, props, body);
  }
  return null;
}

/** Literal string props on a JSX opening tag, e.g. kind="comparison". */
function literalProps(tagText) {
  const props = {};
  for (const m of tagText.matchAll(/\b([A-Za-z_]\w*)=(?:"([^"]*)"|'([^']*)'|\{['"]([^'"]*)['"]\})/g)) {
    props[m[1]] = m[2] ?? m[3] ?? m[4];
  }
  return props;
}

/** The text of the opening tag that starts at `at` (`<Name …>`), brace-aware. */
function openingTag(src, at) {
  let depth = 0;
  let quote = null;
  for (let j = at + 1; j < src.length; j++) {
    const c = src[j];
    if (quote) { if (c === quote) quote = null; continue; }
    if (depth === 0 && (c === '"' || c === "'")) { quote = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') depth--;
    else if (c === '>' && depth === 0) return src.slice(at, j + 1);
  }
  return src.slice(at);
}

const DECISION_PAGE = join(SRC, 'components', 'growth', 'DecisionPage.tsx');
const DECISION_DEFAULT = (() => {
  const m = /sourceCheckedDate\s*=\s*['"](\d{4}-\d{2}-\d{2})['"]/.exec(code(DECISION_PAGE));
  if (!m) throw new Error('page-dates: DecisionPage default sourceCheckedDate not found');
  if (!/dateModified:\s*contentModifiedDate\s*\|\|\s*sourceCheckedDate/.test(code(DECISION_PAGE))) {
    throw new Error('page-dates: DecisionPage no longer derives dateModified from contentModifiedDate || sourceCheckedDate; update rule 2');
  }
  return m[1];
})();

/** Dates declared as dateModified in `src` (a file or a function body). */
function datesIn(src, file, props) {
  const found = [];
  const unresolved = [];
  for (const m of src.matchAll(/\bdateModified\s*(=|:)\s*/g)) {
    // skip type annotations such as `dateModified: string;`
    const v = readValue(src, m.index + m[0].length);
    if (!v || /^(string|string\s*\|.*)$/.test(v.raw)) continue;
    const d = v.string ? (DATE.test(v.raw) ? v.raw : null) : evalDate(v.raw, file, props, src);
    if (d) found.push(d);
    else unresolved.push(v.raw.slice(0, 60));
  }
  for (const m of src.matchAll(/<DecisionPage\b/g)) {
    const tag = openingTag(src, m.index);
    const attr = (name) => {
      const a = new RegExp(`\\b${name}=`).exec(tag);
      if (!a) return undefined;
      const v = readValue(tag, a.index + a[0].length);
      return v.string ? (DATE.test(v.raw) ? v.raw : null) : evalDate(v.raw, file, props, src);
    };
    const content = attr('contentModifiedDate');
    const checked = attr('sourceCheckedDate');
    if (content === null || (content === undefined && checked === null)) unresolved.push('<DecisionPage> date prop');
    else found.push(content ?? checked ?? DECISION_DEFAULT);
  }
  return { found, unresolved };
}

/** Body of `export function Name(` / `export const Name = (` in a module. */
function functionBody(file, name) {
  const src = code(file);
  const m = new RegExp(`export\\s+(?:default\\s+)?(?:async\\s+)?(?:function\\s+${name}\\b|const\\s+${name}\\s*=)`).exec(src);
  if (!m) return null;
  const next = src.slice(m.index + m[0].length).search(/\nexport\s/);
  return next === -1 ? src.slice(m.index) : src.slice(m.index, m.index + m[0].length + next);
}

function visibleDates(src) {
  const out = [];
  for (const m of src.matchAll(/<time[^>]*dateTime=\{?['"](\d{4}-\d{2}-\d{2})['"]\}?/g)) out.push(m[1]);
  // The page's own "Last updated: August 31, 2026" or "This policy was last
  // updated August 31, 2026", not a cited source's "last updated June 16".
  const month = `(${MONTHS.join('|')})`;
  const re = new RegExp(`(?:Last updated:|This (?:policy|page) was last updated)\\s*${month}\\s+(\\d{1,2}),\\s*(\\d{4})`, 'gi');
  for (const m of src.matchAll(re)) {
    if (!/^(?:Last updated:|This)/.test(m[0])) continue; // case-insensitive flag is only for the month
    const mm = String(MONTHS.indexOf(m[1].toLowerCase()) + 1).padStart(2, '0');
    out.push(`${m[3]}-${mm}-${m[2].padStart(2, '0')}`);
  }
  return out;
}

function pageDate(file) {
  const src = code(file);
  let { found, unresolved } = datesIn(src, file, {});
  let via = 'page';
  if (!found.length) {
    // Rule 3: a page that only renders one imported component.
    const ret = /return\s*\(?\s*<([A-Z]\w*)\b/.exec(src);
    const imp = ret && importsOf(file).get(ret[1]);
    if (imp) {
      const tag = openingTag(src, ret.index + ret[0].indexOf('<'));
      const body = functionBody(imp.file, imp.name);
      if (body) {
        const r = datesIn(body, imp.file, literalProps(tag));
        found = r.found;
        unresolved = unresolved.concat(r.unresolved);
        via = relative(SRC, imp.file);
      }
    }
  }
  const distinct = [...new Set(found)];
  if (distinct.length === 1) return { date: distinct[0], via, visible: visibleDates(src), unresolved };
  if (distinct.length > 1) return { conflict: distinct, via, unresolved };
  const vis = [...new Set(visibleDates(src))];
  if (vis.length === 1) return { date: vis[0], via: 'visible date', visible: vis, unresolved };
  return { date: null, via, unresolved, visible: vis };
}

// ---------------------------------------------------------------------------
// the hand-written routes the CRR sitemap lists (same parsing as
// assert-city-links.mjs, so the two scripts agree on what the sitemap holds)
// ---------------------------------------------------------------------------
const sitemapSrc = code(join(APP, 'sitemap.ts'));
function arrayLiteral(name) {
  const m = new RegExp(`\\bconst\\s+${name}\\s*(?::[^=]*)?=\\s*\\[`).exec(sitemapSrc);
  if (!m) throw new Error(`page-dates: ${name} not found in src/app/sitemap.ts`);
  let i = m.index + m[0].length;
  let depth = 1;
  const start = i;
  while (i < sitemapSrc.length && depth > 0) {
    if (sitemapSrc[i] === '[') depth++;
    else if (sitemapSrc[i] === ']') depth--;
    i++;
  }
  return [...sitemapSrc.slice(start, i - 1).matchAll(/'([^']+)'|"([^"]+)"/g)].map((x) => x[1] ?? x[2]);
}
const crrStart = sitemapSrc.indexOf('function crrSitemap');
const crrEnd = sitemapSrc.indexOf('function grhSitemap');
const crrSrc = sitemapSrc.slice(crrStart, crrEnd);

const routes = new Set(['/']);
for (const m of crrSrc.matchAll(/url:\s*`\$\{base\}(\/[^`]*)`/g)) if (!m[1].includes('${')) routes.add(m[1]);
for (const slug of arrayLiteral('blogSlugs')) routes.add(`/blog/${slug}`);
for (const slug of arrayLiteral('installerSlugs')) routes.add(`/solar-installers/${slug}`);
for (const slug of arrayLiteral('panelSlugs')) routes.add(`/panel-reviews/${slug}`);
for (const slug of arrayLiteral('commercialSlugs')) routes.add(`/commercial-solar/${slug}`);
for (const slug of arrayLiteral('regionalSlugs')) routes.add(`/solar-savings/${slug}`);
// A JSON article whose path also has a hand-written page file is served by
// that file (a static route beats the [slug] route), so its date is the
// file's, not the JSON reviewedAt. sitemap.ts prefers this registry for them.
const CLUSTER_BASE = { commercial: '/commercial-solar', battery: '/battery', installer: '/solar-installers', problems: '/solar-problems' };
for (const [cluster, base] of Object.entries(CLUSTER_BASE)) {
  const file = join(SRC, 'data', `article-pages.${cluster}.json`);
  if (!existsSync(file)) continue;
  for (const p of JSON.parse(readFileSync(file, 'utf8'))) {
    if (existsSync(join(APP, base.slice(1), p.slug, 'page.tsx'))) routes.add(`${base}/${p.slug}`);
  }
}

// A redirected route answers 301, so sitemap.ts never lists it; skip it here.
const { isRedirectedPath } = await import(pathToFileURL(join(SRC, 'lib', 'canonical-redirects.ts')).href);
for (const route of [...routes]) if (isRedirectedPath(route)) routes.delete(route);

const entries = [];
const conflicts = [];
const undated = [];
const visibleMismatch = [];
for (const route of [...routes].sort()) {
  const file = join(APP, route === '/' ? '' : route.slice(1), 'page.tsx');
  if (!existsSync(file)) continue; // data-driven route: its date comes from its data module
  const r = pageDate(file);
  if (r.conflict) { conflicts.push({ route, dates: r.conflict, via: r.via }); continue; }
  if (!r.date) { undated.push({ route, unresolved: r.unresolved }); continue; }
  entries.push([route, r.date]);
  const vis = (r.visible || []).filter((d) => d !== r.date);
  if (vis.length && r.via !== 'visible date') visibleMismatch.push({ route, dateModified: r.date, visible: [...new Set(vis)] });
}

const body = [
  '// GENERATED by scripts/page-dates.mjs from each page file. Do not edit by hand:',
  "// change the page's own dateModified, then run `node scripts/page-dates.mjs`.",
  '// src/app/sitemap.ts reads this for the lastmod of hand-written CRR pages.',
  '// A page with no declared date is absent here and gets no lastmod.',
  'export const PAGE_MODIFIED_DATES: Readonly<Record<string, string>> = {',
  ...entries.map(([route, date]) => `  '${route}': '${date}',`),
  '};',
  '',
].join('\n');

const current = existsSync(OUT) ? readFileSync(OUT, 'utf8') : '';
let failed = false;
// A page that declares a date this script cannot read would silently lose its
// lastmod. Fail instead, so the rule gets extended (or the route is listed in
// DATED_ELSEWHERE because sitemap.ts computes its date from data).
const DATED_ELSEWHERE = new Set([
  '/solar-cost', // newest sourcesFetchedAt of the rows it lists, computed in sitemap.ts
]);
for (const u of undated) {
  if (u.unresolved.length && !DATED_ELSEWHERE.has(u.route)) {
    failed = true;
    console.error(`UNREAD ${u.route}: declares a date this script cannot resolve (${u.unresolved.join('; ')})`);
  }
}
if (conflicts.length) {
  failed = true;
  for (const c of conflicts) console.error(`CONFLICT ${c.route}: dateModified ${c.dates.join(' vs ')} (${c.via})`);
}
if (CHECK) {
  if (current !== body) {
    failed = true;
    console.error(`STALE ${relative(FRONTEND, OUT)}: run node scripts/page-dates.mjs`);
  }
} else if (current !== body) {
  writeFileSync(OUT, body);
  console.log(`wrote ${relative(FRONTEND, OUT)} (${entries.length} pages)`);
}
console.log(`page-dates: ${entries.length} dated, ${undated.length} without a date, ${conflicts.length} conflicts`);
if (REPORT) {
  for (const u of undated) console.log(`  no date: ${u.route}${u.unresolved.length ? `  (unresolved: ${u.unresolved.join('; ')})` : ''}`);
  for (const v of visibleMismatch) console.log(`  visible ${v.visible.join(',')} != dateModified ${v.dateModified}: ${v.route}`);
}
if (failed) process.exitCode = 1;
