#!/usr/bin/env node
/**
 * QC gate for HAND-WRITTEN page.tsx routes.
 *
 * WHY A SECOND GATE
 * -----------------
 * scripts/qc-gate.mjs already gates the data-driven clusters, but it reads the
 * JSON in src/data/article-pages.*.json. About 300 CRR routes are hand-written
 * .tsx and pass through it untouched — including every page written by hand
 * tonight. This gate covers those, using the same shingle method and the same
 * thresholds so the two cannot disagree about what "duplicate" means.
 *
 * ON THE OVERLAP THRESHOLD
 * ------------------------
 * Policy is Q7 in the implementation blocks: under 40% shared 8-word phrases
 * against the nearest sibling, and it is HARD — a page over it does not enter
 * the release queue.
 *
 * The pre-existing qc-gate.mjs uses 25% on the JSON-driven clusters. That is
 * stricter than policy, not in conflict with it, and it is left alone: tightening
 * a gate that already passes costs nothing, loosening one invites the failure it
 * was built to stop. So this gate enforces the stated 40% ceiling and warns from
 * 25%, which is where the other gate would have failed. Anything between 25% and
 * 40% ships but is visible.
 *
 * CHECKS (the nine from the plan's QA table)
 *   1  TITLE        metadata title 45-60 chars
 *   2  ANSWER       a 40-70 word passage inside the first 100 words of prose
 *   3  UNSOURCED    a numeric claim with no nearby source and date        [flags for human]
 *   4  UTILITY      a utility named in the title matches the city's real one
 *   5  SCHEMA       right page type, at most one Article; Breadcrumb; FAQ where Q&A exists
 *   6  LINKS        at least one link to the eligibility path
 *   7  DUPLICATE    8-gram shingle overlap vs nearest sibling under the ceiling   [HARD]
 *   8  COMPLIANCE   the referral-service disclosure sentence is present
 *   9  AUTHOR       a named author signal (ArticleJsonLd or AuthorBio)
 *
 * Checks 3, 8 and 9 are reported as REVIEW rather than FAIL where a machine
 * cannot honestly decide. A gate that claims to have verified something it has
 * not is worse than a gate that says "a human must read this".
 *
 * USAGE
 *   node scripts/qc-gate-tsx.mjs                    # all CRR public routes
 *   node scripts/qc-gate-tsx.mjs --only blog/foo     # one route or a prefix
 *   node scripts/qc-gate-tsx.mjs --changed           # only routes git reports modified
 *   node scripts/qc-gate-tsx.mjs --json out.json     # machine-readable report
 *   node scripts/qc-gate-tsx.mjs --warn-only         # never exit non-zero
 *
 * Exits 1 if any HARD check fails. Wire into the release step before deploy.
 */

import { readFileSync, existsSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const APP = join(ROOT, 'src', 'app');

// Q7 policy ceiling: hard fail at 40%, warn from 25% (where qc-gate.mjs fails).
const MAX_OVERLAP = 0.40;
const WARN_OVERLAP = 0.25;
const SHINGLE = 8;

const TITLE_MIN = 45;
const TITLE_MAX = 60;
const ANSWER_MIN_WORDS = 40;
const ANSWER_MAX_WORDS = 70;
const ANSWER_WITHIN_WORDS = 100;

/** The exact compliance sentence. Owner-authored; must not be paraphrased. */
const COMPLIANCE_SENTENCE =
  'California Rate Relief is a referral service. We are not a licensed contractor.';

/**
 * CRR public route prefixes. Deliberately excludes the other four hosts served
 * from this same codebase — GLP-1, GreenReviewsHub, SecureHomeGear and
 * AtHomeBiohacking pages must not be judged against CRR's compliance sentence.
 */
const CRR_PREFIXES = [
  'blog',
  'solar-savings',
  'solar-companies',
  'solar-installers',
  'commercial-solar',
  'battery',
  'panel-reviews',
  'solar-problems',
];

/**
 * Routes whose job is to LIST other routes.
 *
 * Held as an explicit list rather than inferred, because "index or guide?" is an
 * editorial judgement and any pattern gets it wrong: /commercial-solar and
 * /panel-reviews link to child pages too, but each is a long-form guide first
 * and correctly emits Article. The regional hubs under /solar-savings are the
 * same shape — original regional prose with a city index underneath — so they
 * count as content pages here as well.
 *
 * See the SCHEMA check for what changes for a route in this set.
 */
const INDEX_ROUTES = new Set(['/blog', '/battery', '/solar-problems']);

const NON_CRR_MARKERS = [
  'glp1',
  'tirzepatide',
  'semaglutide',
  'peptide',
  'wegovy',
  'ozempic',
  'mounjaro',
  'zepbound',
  'compounded',
  'alternatives',
  'ahb-home',
  'grh-',
  'best/',
  'providers',
  'nad-',
  'lipotropic',
  'glutathione',
  'sermorelin',
  'oral-',
  'sublin',
];

// ---------------------------------------------------------------------------
// arg parsing
// ---------------------------------------------------------------------------
const argv = process.argv.slice(2);
function flag(name) {
  return argv.includes(`--${name}`);
}
function value(name) {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : null;
}
const ONLY = value('only');
const JSON_OUT = value('json');
const WARN_ONLY = flag('warn-only');
const CHANGED = flag('changed');
const VERBOSE = flag('verbose');

// ---------------------------------------------------------------------------
// discovery
// ---------------------------------------------------------------------------
function walkPages(dir, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return acc;
  }
  for (const entry of entries) {
    const full = join(dir, entry);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) {
      // Skip route groups and dynamic segments: a [slug] template has no single
      // body to judge, and (auth)/(main) are private.
      if (entry.startsWith('(') || entry.startsWith('[')) continue;
      walkPages(full, acc);
    } else if (entry === 'page.tsx') {
      acc.push(full);
    }
  }
  return acc;
}

function routeOf(file) {
  const rel = relative(APP, dirname(file)).split(sep).join('/');
  return rel === '' ? '/' : `/${rel}`;
}

function isCrrRoute(route) {
  const clean = route.replace(/^\//, '');
  if (NON_CRR_MARKERS.some((m) => clean.includes(m))) return false;
  return CRR_PREFIXES.some((p) => clean === p || clean.startsWith(`${p}/`));
}

function changedRoutes() {
  try {
    const out = execSync('git status --porcelain -- src/app', { cwd: ROOT, encoding: 'utf8' });
    return new Set(
      out
        .split('\n')
        .map((l) => l.slice(3).trim())
        .filter((p) => p.endsWith('page.tsx'))
        .map((p) => join(ROOT, p))
    );
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// extraction
// ---------------------------------------------------------------------------

/**
 * Pull the metadata title.
 *
 * Three shapes are in use across this repo and all three must resolve, because a
 * gate that reports "no title" on a page that plainly has one trains people to
 * ignore it:
 *   1. inline          export const metadata = { title: "..." }
 *   2. const shorthand const title = '...';  export const metadata = { title, ... }
 *   3. nested          title: { absolute: "..." } | { default: "..." }
 */
function extractTitle(src) {
  const block = src.match(/export const metadata[^=]*=\s*\{([\s\S]*?)\n\};/);
  const scope = block ? block[1] : src;

  // 3. nested form first — it also contains a bare `title:` that would mis-match
  const nested = scope.match(/title:\s*\{[^}]*?(?:absolute|default):\s*(["'])((?:(?!\1)[^\\]|\\.)*)\1/);
  if (nested) return decode(nested[2]);

  // 1. inline string literal
  const inline =
    scope.match(/(^|[\s,{])title:\s*"((?:[^"\\]|\\.)*)"/) ||
    scope.match(/(^|[\s,{])title:\s*'((?:[^'\\]|\\.)*)'/) ||
    scope.match(/(^|[\s,{])title:\s*`((?:[^`\\]|\\.)*)`/);
  if (inline) return decode(inline[2]);

  // 2. shorthand `title,` referring to a module-level const
  if (/(^|[\s,{])title\s*,/.test(scope) || /(^|[\s,{])title\s*\n/.test(scope)) {
    const decl =
      src.match(/(?:^|\n)\s*const\s+title\s*=\s*"((?:[^"\\]|\\.)*)"/) ||
      src.match(/(?:^|\n)\s*const\s+title\s*=\s*'((?:[^'\\]|\\.)*)'/) ||
      src.match(/(?:^|\n)\s*const\s+title\s*=\s*`((?:[^`\\]|\\.)*)`/);
    if (decl) return decode(decl[1]);
  }

  // generateMetadata() builds the title at request time; a static read cannot
  // resolve it. Signalled distinctly so it is reviewed, not reported as missing.
  if (/export\s+(?:async\s+)?function\s+generateMetadata/.test(src)) return '__DYNAMIC__';

  return null;
}

function extractCanonical(src) {
  const m = src.match(/canonical:\s*['"]([^'"]+)['"]/);
  return m ? m[1] : null;
}

function decode(s) {
  return String(s)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&apos;|&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"');
}

/**
 * Recover the visible prose from a .tsx page.
 *
 * Not a parser, and does not need to be — word counts and shingles tolerate a
 * little noise. What it must do reliably is EXCLUDE code, attributes and
 * metadata, because including a shared className string on every page would
 * make every page look duplicated and the hard gate would fire on nothing.
 */
function extractProse(src) {
  let s = src;

  // Everything before the component body is imports, metadata and schema consts.
  //
  // Slice past the body's OPENING BRACE, not just to the function keyword. The
  // brace-depth scanner below treats depth 0 as "visible JSX text", and the
  // function's own brace would otherwise put the entire page at depth 1 — which
  // dropped every word of prose and left the duplication gate comparing empty
  // strings against each other.
  const fnStart = s.search(/export default (?:async )?function[^{]*\{/);
  if (fnStart >= 0) {
    const braceIdx = s.indexOf('{', fnStart);
    if (braceIdx > 0) s = s.slice(braceIdx + 1);
  } else {
    // arrow-function component: `export default () => { ... }` or `const X = () =>`
    const arrow = s.search(/export default[^=]*=>\s*[({]/);
    if (arrow >= 0) {
      const open = s.search(/=>\s*[({]/);
      if (open > 0) s = s.slice(s.indexOf(s.match(/=>\s*([({])/)[1], open) + 1);
    }
  }

  s = s.replace(/\/\*[\s\S]*?\*\//g, ' ');
  s = s.replace(/(^|\s)\/\/[^\n]*/g, ' ');

  // JSX attributes, including className={...} and href="..."
  s = s.replace(/\s[A-Za-z-]+=\{(?:[^{}]|\{[^{}]*\})*\}/g, ' ');
  s = s.replace(/\s[A-Za-z-]+="[^"]*"/g, ' ');
  s = s.replace(/\s[A-Za-z-]+='[^']*'/g, ' ');

  // Drop JSX expressions, keeping any string literal inside them, because real
  // copy is frequently written as {"like this"} or {'like this'}.
  //
  // Done with a depth-aware scan rather than a regex. A regex for balanced braces
  // cannot handle JSX nesting: the obvious pattern matched the entire component
  // body and collapsed a 13,000-character page to four words, which silently made
  // the duplication gate compare empty strings and pass everything.
  s = stripBraceExpressions(s);

  s = s.replace(/<\/?[A-Za-z][A-Za-z0-9.]*\s*\/?>/g, ' ');
  s = s.replace(/<\/?[A-Za-z][^>]*>/g, ' ');

  s = decode(s);
  s = s.replace(/\breturn\b|\bexport default\b|\bfunction\b/g, ' ');
  s = s.replace(/[();]/g, ' ');
  return s.replace(/\s+/g, ' ').trim();
}

/**
 * Remove JSX expression content while preserving string literals inside it.
 *
 * Walks the source once, tracking brace depth and quote state:
 *   - depth 0  -> keep the character (this is JSX text and tag markup)
 *   - depth > 0 -> keep only characters inside a quoted string
 *
 * Handles arbitrary nesting, which is the whole point: JSX routinely nests
 * expressions several levels deep and no regex can track that.
 */
function stripBraceExpressions(src) {
  let out = '';
  let depth = 0;
  let quote = null;
  for (let i = 0; i < src.length; i += 1) {
    const c = src[i];

    if (quote) {
      if (c === '\\') {
        // keep the escaped character itself, drop the backslash
        if (i + 1 < src.length) out += src[i + 1];
        i += 1;
        continue;
      }
      if (c === quote) {
        quote = null;
        out += ' ';
        continue;
      }
      out += c;
      continue;
    }

    if (c === '"' || c === "'" || c === '`') {
      quote = c;
      out += ' ';
      continue;
    }
    if (c === '{') {
      depth += 1;
      out += ' ';
      continue;
    }
    if (c === '}') {
      if (depth > 0) depth -= 1;
      out += ' ';
      continue;
    }
    if (depth === 0) out += c;
  }
  return out;
}

function words(text) {
  return text.split(/\s+/).filter(Boolean);
}

function shingles(text) {
  const w = words(text.toLowerCase().replace(/[^a-z0-9\s]/g, ' '));
  const set = new Set();
  for (let i = 0; i + SHINGLE <= w.length; i++) set.add(w.slice(i, i + SHINGLE).join(' '));
  return set;
}

function overlap(a, b) {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  const [small, large] = a.size <= b.size ? [a, b] : [b, a];
  for (const s of small) if (large.has(s)) shared += 1;
  return shared / small.size;
}

/** Sentence-split the opening prose and find a run that lands in the answer band. */
function findAnswerPassage(prose) {
  const opening = words(prose).slice(0, ANSWER_WITHIN_WORDS + 60).join(' ');
  const sentences = opening.split(/(?<=[.!?])\s+/).filter(Boolean);
  let cursor = 0;
  for (let i = 0; i < sentences.length; i++) {
    const startWord = cursor;
    if (startWord > ANSWER_WITHIN_WORDS) break;
    let run = '';
    for (let j = i; j < sentences.length; j++) {
      run = run ? `${run} ${sentences[j]}` : sentences[j];
      const n = words(run).length;
      if (n >= ANSWER_MIN_WORDS && n <= ANSWER_MAX_WORDS && startWord <= ANSWER_WITHIN_WORDS) {
        return { found: true, passage: run, wordCount: n, startsAtWord: startWord };
      }
      if (n > ANSWER_MAX_WORDS) break;
    }
    cursor += words(sentences[i]).length;
  }
  return { found: false, passage: null, wordCount: 0, startsAtWord: -1 };
}

const NUMERIC_CLAIM = /(\$\s?\d[\d,]*(?:\.\d+)?|\b\d[\d,]*(?:\.\d+)?\s?(?:%|percent|kWh|kW|MW|cents?|¢|watts?|W\b))/g;
const CITATION_NEARBY = /(source|according to|per\s|cited|irs\.gov|cpuc|energy\.ca\.gov|leginfo|uscode|law\.cornell|congress\.gov|pge\.com|sce\.com|sdge\.com|smud\.org|ladwp\.com|verified|last (?:checked|updated|reviewed)|as of)/i;
const DATE_NEARBY = /(\b20\d\d\b|\bJan(?:uary)?\b|\bFeb(?:ruary)?\b|\bMar(?:ch)?\b|\bApr(?:il)?\b|\bMay\b|\bJun(?:e)?\b|\bJul(?:y)?\b|\bAug(?:ust)?\b|\bSep(?:tember)?\b|\bOct(?:ober)?\b|\bNov(?:ember)?\b|\bDec(?:ember)?\b)/i;

/** A numeric claim counts as sourced if a citation and a date sit within the window. */
function unsourcedNumbers(prose) {
  const WINDOW = 260;
  const flagged = [];
  for (const m of prose.matchAll(NUMERIC_CLAIM)) {
    const at = m.index ?? 0;
    const ctx = prose.slice(Math.max(0, at - WINDOW), at + WINDOW);
    const hasCite = CITATION_NEARBY.test(ctx);
    const hasDate = DATE_NEARBY.test(ctx);
    if (!hasCite || !hasDate) {
      flagged.push({
        value: m[0].trim(),
        missing: [!hasCite ? 'source' : null, !hasDate ? 'date' : null].filter(Boolean).join(' + '),
        context: ctx.slice(Math.max(0, at - Math.max(0, at - WINDOW) - 60), undefined).slice(0, 150).trim(),
      });
    }
  }
  // Collapse repeats of the same figure; one flag per distinct value is enough.
  const seen = new Set();
  return flagged.filter((f) => {
    const k = `${f.value}|${f.missing}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

const UTILITIES = [
  ['SDG&E', /SDG&(?:amp;)?E|San Diego Gas/i],
  ['PG&E', /PG&(?:amp;)?E|Pacific Gas/i],
  ['SCE', /\bSCE\b|Southern California Edison/i],
  ['LADWP', /LADWP/i],
  ['SMUD', /SMUD/i],
  ['PWP', /\bPWP\b|Pasadena Water/i],
  ['GWP', /\bGWP\b|Glendale Water/i],
  ['BWP', /\bBWP\b|Burbank Water/i],
  ['APU', /\bAPU\b|Anaheim Public Utilities/i],
  ['RPU', /\bRPU\b|Riverside Public Utilities/i],
  ['IID', /\bIID\b|Imperial Irrigation/i],
];

function utilityInTitle(title) {
  if (!title) return null;
  for (const [name, re] of UTILITIES) if (re.test(title)) return name;
  return null;
}

/**
 * Build the city -> serving-utility map that check 4 compares titles against.
 *
 * Read from src/data/cities-data.ts, NOT from the ZIP seed table. That is
 * deliberate: cities-data.ts is the file the two city templates actually render
 * from, so its utilityCode is what ends up in the live title. Checking the title
 * against a different source would let the two disagree silently, which is
 * exactly how /solar-savings/bakersfield shipped saying "SCE Rates" for a PG&E
 * city.
 *
 * The ZIP table (ca-utility-by-zip.ts) answers a different question — what
 * utility serves a visitor's address — and deliberately returns null for split
 * territories, so it is the wrong shape for this check.
 */
function loadUtilityByCity() {
  const p = join(ROOT, 'src', 'data', 'cities-data.ts');
  if (!existsSync(p)) return { map: new Map(), source: null };

  const src = readFileSync(p, 'utf8');
  const map = new Map();

  // Each CITIES entry carries slug and utilityCode within a few hundred chars of
  // each other. Bounded lookahead keeps one entry from matching the next's code.
  for (const m of src.matchAll(/slug:\s*'([a-z0-9-]+)'[\s\S]{0,600}?utilityCode:\s*'([a-z_]+)'/g)) {
    map.set(m[1], m[2]);
  }

  // utilityCode -> the display name that appears in a title, so 'pge' matches a
  // title reading "PG&E Rates".
  const DISPLAY = {
    pge: 'PG&E',
    sce: 'SCE',
    sdge: 'SDG&E',
    ladwp: 'LADWP',
    smud: 'SMUD',
    pwp: 'PWP',
    gwp: 'GWP',
    bwp: 'BWP',
    apu: 'APU',
    rpu: 'RPU',
    iid: 'IID',
    mid: 'MID',
    tid: 'TID',
    mvu: 'MVU',
    reu: 'REU',
    lodi: 'Lodi Electric',
  };
  const display = new Map();
  for (const [slug, code] of map) display.set(slug, DISPLAY[code] || code.toUpperCase());

  return display.size
    ? { map: display, source: `${relative(ROOT, p)} (utilityCode)` }
    : { map: new Map(), source: null };
}

/** Consume the crawler's link graph if it exists, so inbound links can be checked. */
function loadInboundCounts() {
  const dirs = [join(ROOT, 'scripts', 'out'), join(ROOT, '..', '..', 'scripts', 'out')];
  for (const d of dirs) {
    if (!existsSync(d)) continue;
    let files;
    try {
      files = readdirSync(d).filter((f) => f.startsWith('crawl-linkgraph-') && f.endsWith('.json')).sort();
    } catch {
      continue;
    }
    if (!files.length) continue;
    const p = join(d, files[files.length - 1]);
    try {
      const data = JSON.parse(readFileSync(p, 'utf8'));
      const pages = Array.isArray(data) ? data : data.pages || [];
      const counts = new Map();
      for (const page of pages) {
        const links = page.links || page.internalLinks || [];
        for (const l of links) {
          const href = typeof l === 'string' ? l : l.href;
          const area = typeof l === 'string' ? 'content' : l.area;
          if (!href || area !== 'content') continue;
          let path;
          try {
            path = new URL(href, 'https://ratereliefca.com').pathname.replace(/\/$/, '') || '/';
          } catch {
            continue;
          }
          counts.set(path, (counts.get(path) || 0) + 1);
        }
      }
      if (counts.size) return { counts, source: relative(ROOT, p) };
    } catch {
      /* fall through */
    }
  }
  return { counts: new Map(), source: null };
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
function main() {
  const all = walkPages(APP);
  const changed = CHANGED ? changedRoutes() : null;

  let files = all.filter((f) => isCrrRoute(routeOf(f)));
  if (ONLY) {
    const needle = ONLY.replace(/^\//, '');
    files = files.filter((f) => routeOf(f).replace(/^\//, '').startsWith(needle));
  }
  if (changed) files = files.filter((f) => changed.has(f));

  if (!files.length) {
    console.log('QC gate (tsx): no CRR routes matched. Nothing to check.');
    process.exit(0);
  }

  const utilities = loadUtilityByCity();
  const inbound = loadInboundCounts();

  const pages = files.map((file) => {
    const src = readFileSync(file, 'utf8');
    const prose = extractProse(src);
    return {
      file: relative(ROOT, file),
      route: routeOf(file),
      src,
      prose,
      wordCount: words(prose).length,
      shingles: shingles(prose),
      title: extractTitle(src),
      canonical: extractCanonical(src),
    };
  });

  const fails = [];
  const reviews = [];
  const warns = [];
  const add = (bucket, page, check, message, detail) =>
    bucket.push({ route: page.route, file: page.file, check, message, detail: detail ?? null });

  // 1 TITLE
  for (const p of pages) {
    if (p.title === '__DYNAMIC__') {
      add(reviews, p, 'TITLE', 'title is built in generateMetadata() — length cannot be checked statically');
    } else if (!p.title) {
      add(fails, p, 'TITLE', 'no metadata title found');
    } else {
      const n = p.title.length;
      if (n < TITLE_MIN || n > TITLE_MAX) {
        const verdict = n > TITLE_MAX ? fails : warns;
        add(verdict, p, 'TITLE', `title is ${n} chars, want ${TITLE_MIN}-${TITLE_MAX}`, p.title);
      }
    }
  }

  // 2 ANSWER
  for (const p of pages) {
    const a = findAnswerPassage(p.prose);
    if (!a.found) {
      add(
        warns,
        p,
        'ANSWER',
        `no ${ANSWER_MIN_WORDS}-${ANSWER_MAX_WORDS} word passage begins within the first ${ANSWER_WITHIN_WORDS} words`
      );
    } else {
      add(reviews, p, 'ANSWER', `candidate passage found (${a.wordCount} words) — a human must confirm it stands alone`, a.passage.slice(0, 200));
    }
  }

  // 3 UNSOURCED
  for (const p of pages) {
    const flagged = unsourcedNumbers(p.prose);
    if (flagged.length) {
      add(
        reviews,
        p,
        'UNSOURCED',
        `${flagged.length} numeric claim(s) without a nearby source and date`,
        flagged.slice(0, 6).map((f) => `${f.value} (missing ${f.missing})`).join('; ')
      );
    }
  }

  // 4 UTILITY
  for (const p of pages) {
    const named = p.title === '__DYNAMIC__' ? null : utilityInTitle(p.title);
    const m = p.route.match(/^\/solar-(?:savings|companies)\/([a-z0-9-]+)$/);
    if (!named || !m) continue;
    const city = m[1];
    const expected = utilities.map.get(city);
    if (!expected) {
      add(reviews, p, 'UTILITY', `title names ${named} but no seed entry for "${city}" — cannot verify`, utilities.source || 'no utility table found');
    } else if (!new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i').test(named)) {
      add(fails, p, 'UTILITY', `title names ${named} but ${city} is served by ${expected}`, p.title);
    }
  }

  // 5 SCHEMA
  //
  // The type expected depends on what the page IS: Article on a content page,
  // CollectionPage or ItemList on an index page.
  //
  // The rule here used to be "every CRR route must have exactly one Article".
  // That is wrong for a route whose entire job is to list other routes: /blog
  // does not contain the writing, the posts it links to do, and every one of
  // those already emits its own Article. Stamping Article on the index asserts
  // something false and leaves two Article nodes competing for one subject. So
  // index routes are now required to emit CollectionPage/ItemList instead.
  //
  // The "never more than one Article" half of the rule is unchanged and still
  // applies to EVERY route, index pages included. A single Article on an index
  // page is a type judgement a human should look at, so that is a warn; two on
  // any page at all is still a hard fail.
  for (const p of pages) {
    const inlineArticle = (p.src.match(/['"]@type['"]\s*:\s*['"](?:Article|BlogPosting|NewsArticle)['"]/g) || []).length;
    const component = (p.src.match(/<ArticleJsonLd\b/g) || []).length;
    const total = inlineArticle + component;

    // A shared route component may supply the schema, the same way PublicLayout
    // supplies the BreadcrumbList below. <ArticleHub/> emits CollectionPage +
    // ItemList for its cluster — verified 2026-09-10 in
    // src/components/shared/ArticleRoute.tsx.
    const hasCollection =
      /['"]@type['"]\s*:\s*['"](?:CollectionPage|ItemList)['"]/.test(p.src) ||
      /<ArticleHub\b/.test(p.src);

    if (INDEX_ROUTES.has(p.route)) {
      if (!hasCollection) {
        add(fails, p, 'SCHEMA', 'index route emits no CollectionPage or ItemList JSON-LD');
      }
      if (total === 1) {
        add(warns, p, 'SCHEMA', 'index route emits an Article; a page that lists other pages is usually not itself an article');
      }
    } else if (total === 0) {
      add(fails, p, 'SCHEMA', 'no Article JSON-LD on the page');
    }
    if (total > 1) add(fails, p, 'SCHEMA', `${total} Article JSON-LD emissions; want at most 1`);

    // <ArticleHub/> renders PublicLayout, which renders BreadcrumbJsonLd, so an
    // ArticleHub route has breadcrumb schema without naming either component.
    const hasBreadcrumb =
      /BreadcrumbList/.test(p.src) ||
      /<BreadcrumbJsonLd\b/.test(p.src) ||
      /<PublicLayout\b/.test(p.src) ||
      /<ArticleHub\b/.test(p.src);
    if (!hasBreadcrumb) add(warns, p, 'SCHEMA', 'no BreadcrumbList schema and no PublicLayout to supply it');

    const looksLikeFaq = /Frequently Asked|\bFAQ\b/i.test(p.src);
    const hasFaqSchema = /FAQPage/.test(p.src) || /<FaqJsonLd\b/.test(p.src);
    if (looksLikeFaq && !hasFaqSchema) {
      add(warns, p, 'SCHEMA', 'page has FAQ content but emits no FAQPage schema');
    }
  }

  // 6 LINKS
  //
  // The eligibility link is rarely a literal in the page. ArticleCTA builds it
  // via intakeHrefForPath(pathname), and Header carries the sitewide CTA. Any of
  // those three satisfies the requirement; requiring the literal string reported
  // 39 false failures on pages that plainly have a working CTA.
  // <ArticleHub/> renders BOTH <Header/> and an in-body <ArticleCTA/>, so a
  // route whose whole body is <ArticleHub/> has a working eligibility CTA even
  // though its own source contains neither string. Verified 2026-09-10 in
  // src/components/shared/ArticleRoute.tsx.
  const HAS_CTA = /#qualify|<ArticleCTA\b|<ArticleHub\b|<Header\b|intakeHrefForPath|<FloatingMobileCTA\b|<FinalCTA\b/;
  const HAS_INBODY_CTA = /#qualify|intakeHrefForPath|<ArticleCTA\b|<ArticleHub\b/;
  for (const p of pages) {
    if (!HAS_CTA.test(p.src)) add(fails, p, 'LINKS', 'no eligibility CTA found (no /#qualify link, ArticleCTA, ArticleHub or Header)');
    else if (!HAS_INBODY_CTA.test(p.src)) {
      add(warns, p, 'LINKS', 'only the sitewide header CTA — no in-body CTA on this page');
    }
    if (inbound.counts.size) {
      const n = inbound.counts.get(p.route.replace(/\/$/, '')) || 0;
      if (n < 2) {
        add(warns, p, 'LINKS', `${n} inbound content link(s) in the crawled graph; want at least 2`, inbound.source);
      }
    } else {
      add(reviews, p, 'LINKS', 'inbound links not checked — no crawl link graph found', 'run scripts/crawl-linkgraph.mjs');
    }
  }

  // 7 DUPLICATE  [HARD]
  // Compared within a section, because that is where templated copy actually
  // collides. A blog post resembling a city page is not the failure mode.
  const bySection = new Map();
  for (const p of pages) {
    const section = p.route.split('/')[1] || 'root';
    if (!bySection.has(section)) bySection.set(section, []);
    bySection.get(section).push(p);
  }
  for (const [section, group] of bySection) {
    for (let i = 0; i < group.length; i++) {
      let worst = { other: null, value: 0 };
      for (let j = 0; j < group.length; j++) {
        if (i === j) continue;
        const o = overlap(group[i].shingles, group[j].shingles);
        if (o > worst.value) worst = { other: group[j].route, value: o };
      }
      if (!worst.other) continue;
      const pct = (worst.value * 100).toFixed(1);
      if (worst.value > MAX_OVERLAP) {
        add(fails, group[i], 'DUPLICATE', `${pct}% 8-gram overlap with ${worst.other} (ceiling ${(MAX_OVERLAP * 100).toFixed(0)}%)`, `section: ${section}`);
      } else if (worst.value > WARN_OVERLAP) {
        add(warns, group[i], 'DUPLICATE', `${pct}% 8-gram overlap with ${worst.other}`, `section: ${section}`);
      }
    }
  }

  // 8 COMPLIANCE
  for (const p of pages) {
    const hasSentence = p.src.includes(COMPLIANCE_SENTENCE);
    const hasComponent = /<AuthorBio\b/.test(p.src);
    if (!hasSentence && !hasComponent) {
      add(reviews, p, 'COMPLIANCE', 'referral-service disclosure not found on the page or via AuthorBio');
    }
    // A licence claim is the one thing that is never acceptable.
    if (/\b(?:our|we are a|we're a)\s+(?:licensed|CSLB[- ]licensed)\s+(?:contractor|installer)/i.test(p.prose)) {
      add(fails, p, 'COMPLIANCE', 'page appears to claim a contractor licence for this site');
    }
  }

  // 9 AUTHOR
  for (const p of pages) {
    const named = /<ArticleJsonLd\b/.test(p.src) || /<AuthorBio\b/.test(p.src) || /author\/chad-simpson/.test(p.src);
    if (!named) add(warns, p, 'AUTHOR', 'no named-author signal (ArticleJsonLd, AuthorBio or an author link)');
  }

  // -------------------------------------------------------------------------
  // report
  // -------------------------------------------------------------------------
  const line = '-'.repeat(78);
  console.log(line);
  console.log(`QC gate (hand-written .tsx)   ${pages.length} CRR route(s) checked`);
  console.log(`overlap ceiling ${(MAX_OVERLAP * 100).toFixed(0)}%   utility table: ${utilities.source || 'none'}   link graph: ${inbound.source || 'none'}`);
  console.log(line);

  const group = (rows) => {
    const byCheck = new Map();
    for (const r of rows) {
      if (!byCheck.has(r.check)) byCheck.set(r.check, []);
      byCheck.get(r.check).push(r);
    }
    return byCheck;
  };

  const show = (label, rows, cap) => {
    if (!rows.length) {
      console.log(`\n${label}: none`);
      return;
    }
    console.log(`\n${label}: ${rows.length}`);
    for (const [check, list] of group(rows)) {
      console.log(`  ${check} (${list.length})`);
      for (const r of list.slice(0, cap)) {
        console.log(`    ${r.route}`);
        console.log(`      ${r.message}`);
        if (r.detail && VERBOSE) console.log(`      ${String(r.detail).slice(0, 200)}`);
      }
      if (list.length > cap) console.log(`    ... and ${list.length - cap} more (use --verbose or --json)`);
    }
  };

  show('FAIL (blocks release)', fails, 12);
  show('WARN', warns, 8);
  show('REVIEW (a human must decide)', reviews, 6);

  const thin = pages.filter((p) => p.wordCount < 600);
  console.log(`\nword counts: min ${Math.min(...pages.map((p) => p.wordCount))}, median ${median(pages.map((p) => p.wordCount))}, max ${Math.max(...pages.map((p) => p.wordCount))}`);
  if (thin.length) {
    console.log(`under 600 words: ${thin.length} — ${thin.slice(0, 8).map((p) => p.route).join(', ')}`);
  }

  console.log(`\n${line}`);
  console.log(`RESULT: ${fails.length} fail, ${warns.length} warn, ${reviews.length} review`);
  console.log(line);

  if (JSON_OUT) {
    const report = {
      generated_for_routes: pages.length,
      thresholds: { MAX_OVERLAP, WARN_OVERLAP, SHINGLE, TITLE_MIN, TITLE_MAX },
      utility_table: utilities.source,
      link_graph: inbound.source,
      fails,
      warns,
      reviews,
      pages: pages.map((p) => ({ route: p.route, file: p.file, title: p.title, words: p.wordCount })),
    };
    writeFileSync(JSON_OUT, JSON.stringify(report, null, 2));
    console.log(`json report: ${JSON_OUT}`);
  }

  if (fails.length && !WARN_ONLY) process.exit(1);
  process.exit(0);
}

function median(nums) {
  const s = [...nums].sort((a, b) => a - b);
  return s.length ? s[Math.floor(s.length / 2)] : 0;
}

main();
