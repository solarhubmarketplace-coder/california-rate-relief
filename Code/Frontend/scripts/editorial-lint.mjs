#!/usr/bin/env node
/**
 * Editorial lint: two checks on the text California Rate Relief pages render.
 *
 *   PROCESS-TEXT   editor, research or AI-drafting text that leaked into copy
 *                  ("this session", "Page instructs", "the query brings" ...).
 *                  Rules: scripts/process-text-phrases.json
 *   STALE-STRING   a string known to be out of date (a superseded tariff
 *                  document, an old rebate count, the old brand name ...).
 *                  Rules: scripts/stale-strings.json
 *
 * WHY
 * The 2026-09-24 content review found process text on 17 published pages and
 * stale facts that contradicted other pages (plan items 0.2 and 5.2). Both are
 * cheap to catch mechanically and expensive to catch by reading 600 pages.
 *
 * WHAT IS SCANNED
 * Only text that can render: string literals, template-literal text and JSX
 * text, extracted with the TypeScript parser. Code comments are never scanned,
 * so a developer note that says "checked this session" does not fail the gate.
 *   - tsx gate: every file under a California Rate Relief route in src/app plus
 *     every local module those routes import (components, data, lib), found by
 *     walking the import graph. Sibling-site routes (GLP-1, Green Reviews Hub,
 *     Secure Home Gear, At Home Biohacking) are not roots, so their copy is only
 *     scanned if a CRR route imports it.
 *   - JSON gate: every string value in src/data/article-pages.*.json.
 *
 * USAGE
 *   node scripts/editorial-lint.mjs                 # both checks, all sources
 *   node scripts/editorial-lint.mjs --check process-text
 *   node scripts/editorial-lint.mjs --check stale-strings
 *   node scripts/editorial-lint.mjs --json out.json
 * Exits 1 when any rule matches.
 *
 * qc-gate.mjs and qc-gate-tsx.mjs import runEditorialLint() and report the two
 * checks under their own names, so a pass or fail is visible separately from
 * the other checks.
 */

import { readFileSync, existsSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, dirname, relative, sep, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const ROOT = join(__dirname, '..');
const SRC = join(ROOT, 'src');
const APP = join(SRC, 'app');

export const PROCESS_TEXT_RULES = join(__dirname, 'process-text-phrases.json');
export const STALE_STRING_RULES = join(__dirname, 'stale-strings.json');

/** JSON article data; qc-gate.mjs owns these. */
export const ARTICLE_JSON_FILES = [
  'src/data/article-pages.commercial.json',
  'src/data/article-pages.battery.json',
  'src/data/article-pages.installer.json',
  'src/data/article-pages.problems.json',
];

/**
 * Top-level src/app entries that serve California Rate Relief pages. Taken
 * from the release sitemap (page_audit.csv, 2026-09-24) plus the CRR routes
 * that are not in the sitemap but still render on ratereliefca.com. Anything
 * not listed is a sibling site and is scanned only through a CRR import.
 */
export const CRR_APP_ROOTS = [
  'page.tsx',
  'about',
  'affiliate-disclosure',
  'author',
  'battery',
  'best-solar-companies-california',
  'blog',
  'california-solar-cost-index',
  'california-utility-rate-tracker',
  'commercial-assessment',
  'commercial-solar',
  'contact',
  'corrections',
  'delaware',
  'disclaimer',
  'editorial-policy',
  'how-we-make-money',
  'maryland',
  'match',
  'methodology',
  'new-jersey',
  'panel-reviews',
  'privacy',
  'privacy-policy',
  'solar-companies',
  'solar-cost',
  'solar-installers',
  'solar-panel-maintenance-california',
  'solar-panels-california',
  'solar-problems',
  'solar-savings',
  'sources-we-use',
  'terms',
  'terms-of-service',
  'tools',
  'utilities',
  'virginia',
  'washington-dc',
];

// ---------------------------------------------------------------------------
// rules
// ---------------------------------------------------------------------------

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Load a rules file. A `phrase` matches literally, case-insensitive, with any
 * run of whitespace allowed between words. A `pattern` is a regular
 * expression, also case-insensitive. `allowFiles` lists repo-relative files
 * (or prefixes) where the string is legitimate, e.g. a corrections log that
 * quotes the old wording on purpose.
 */
export function loadRules(file) {
  const raw = JSON.parse(readFileSync(file, 'utf8'));
  const list = Array.isArray(raw) ? raw : raw.rules;
  return list.map((r) => {
    const source = r.pattern ?? escapeRegex(r.phrase).replace(/\s+/g, '\\s+');
    return {
      ...r,
      allowFiles: r.allowFiles || [],
      re: new RegExp(source, 'gi'),
    };
  });
}

// ---------------------------------------------------------------------------
// text extraction
// ---------------------------------------------------------------------------

/**
 * The renderable text of a .ts/.tsx module, as pieces with their line numbers.
 *
 * For a template literal with substitutions, each substitution is replaced by
 * the first string literal inside it (or "…" when it has none). That is how
 * the garbled FAQ slot on the cost pages is caught: the source reads
 * `Compare ${split ? 'the utility named on your bill' : ...} billed usage
 * history`, and the first branch renders exactly the garbled sentence.
 */
export function extractModuleText(file, src = readFileSync(file, 'utf8')) {
  const kind = file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, kind);
  const pieces = [];
  const lineOf = (pos) => sf.getLineAndCharacterOfPosition(pos).line + 1;

  const firstLiteral = (node) => {
    let found = null;
    const visit = (n) => {
      if (found !== null) return;
      if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) {
        found = n.text;
        return;
      }
      if (ts.isTemplateExpression(n)) {
        found = templateText(n);
        return;
      }
      ts.forEachChild(n, visit);
    };
    visit(node);
    return found;
  };

  const templateText = (n) => {
    let out = n.head.text;
    for (const span of n.templateSpans) {
      const lit = firstLiteral(span.expression);
      out += (lit ?? '…') + span.literal.text;
    }
    return out;
  };

  const walk = (node) => {
    // Import and export specifiers are module paths, not copy.
    if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) return;
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      pieces.push({ text: node.text, line: lineOf(node.getStart(sf)) });
      return;
    }
    if (ts.isTemplateExpression(node)) {
      pieces.push({ text: templateText(node), line: lineOf(node.getStart(sf)) });
      // Still walk the substitutions: they can hold whole sentences of their own.
      for (const span of node.templateSpans) walk(span.expression);
      return;
    }
    if (ts.isJsxText(node)) {
      const text = node.getText(sf);
      if (text.trim()) pieces.push({ text: decodeEntities(text), line: lineOf(node.getStart(sf)) });
      return;
    }
    ts.forEachChild(node, walk);
  };
  walk(sf);
  return pieces;
}

/** Every string value in a JSON document, with a path for the report. */
export function extractJsonText(value, path = '$', out = []) {
  if (typeof value === 'string') out.push({ text: value, path });
  else if (Array.isArray(value)) value.forEach((v, i) => extractJsonText(v, `${path}[${i}]`, out));
  else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) extractJsonText(v, `${path}.${k}`, out);
  }
  return out;
}

function decodeEntities(s) {
  return s
    .replace(/&apos;|&#39;|&#x27;|&rsquo;|&lsquo;/g, "'")
    .replace(/&quot;|&ldquo;|&rdquo;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&cent;/g, '¢');
}

/**
 * Join pieces into one searchable string. Adjacent pieces are joined with a
 * space, so a phrase split across JSX elements ("checked this <em>session</em>")
 * is still found. Returns the joined text and each piece's start offset.
 */
function joinPieces(pieces) {
  let text = '';
  const starts = [];
  for (const p of pieces) {
    starts.push(text.length);
    text += `${p.text.replace(/\s+/g, ' ')} `;
  }
  return { text, starts };
}

function pieceAt(starts, offset) {
  let lo = 0;
  let hi = starts.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (starts[mid] <= offset) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}

function snippet(text, index, length) {
  const from = Math.max(0, index - 50);
  const to = Math.min(text.length, index + length + 50);
  return `${from > 0 ? '…' : ''}${text.slice(from, to).trim()}${to < text.length ? '…' : ''}`;
}

function allowed(rule, relFile) {
  return rule.allowFiles.some((a) => relFile === a || relFile.startsWith(a));
}

/** Match every rule against a list of text pieces; one finding per rule per location. */
function matchPieces(pieces, rules, relFile, locate) {
  const { text, starts } = joinPieces(pieces);
  const findings = [];
  for (const rule of rules) {
    if (allowed(rule, relFile)) continue;
    rule.re.lastIndex = 0;
    const seen = new Set();
    for (const m of text.matchAll(rule.re)) {
      const piece = pieces[pieceAt(starts, m.index)];
      const where = locate(piece);
      const key = `${rule.id}|${where}`;
      if (seen.has(key)) continue;
      seen.add(key);
      findings.push({
        rule: rule.id,
        file: relFile,
        where,
        match: m[0],
        context: snippet(text, m.index, m[0].length),
        reason: rule.reason,
      });
    }
  }
  return findings;
}

// ---------------------------------------------------------------------------
// source discovery
// ---------------------------------------------------------------------------

function walkFiles(dir, acc = []) {
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
    if (st.isDirectory()) walkFiles(full, acc);
    else if (/\.(tsx?|json)$/.test(entry) && !/\.test\.tsx?$/.test(entry)) acc.push(full);
  }
  return acc;
}

function resolveSpecifier(spec, fromFile) {
  let base;
  if (spec.startsWith('@/')) base = join(SRC, spec.slice(2));
  else if (spec.startsWith('.')) base = join(dirname(fromFile), spec);
  else return null;
  const candidates = [base, `${base}.tsx`, `${base}.ts`, join(base, 'index.tsx'), join(base, 'index.ts')];
  for (const c of candidates) {
    try {
      if (existsSync(c) && statSync(c).isFile()) return c;
    } catch {
      /* next */
    }
  }
  return null;
}

const IMPORT_RE = /(?:import|export)\s[^'"]*?from\s*['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)|import\s*['"]([^'"]+)['"]/g;

function localImports(file) {
  if (!/\.(tsx?)$/.test(file)) return [];
  const src = readFileSync(file, 'utf8');
  const out = [];
  for (const m of src.matchAll(IMPORT_RE)) {
    const spec = m[1] || m[2] || m[3];
    const resolved = spec ? resolveSpecifier(spec, file) : null;
    if (resolved) out.push(resolved);
  }
  return out;
}

/**
 * Every source file a CRR route can render text from: the route files
 * themselves plus the transitive closure of their local imports.
 * Returns Map(file -> first route file that reached it).
 */
export function crrSourceFiles() {
  const roots = [];
  for (const entry of CRR_APP_ROOTS) {
    const full = join(APP, entry);
    if (!existsSync(full)) continue;
    if (statSync(full).isDirectory()) roots.push(...walkFiles(full));
    else roots.push(full);
  }
  const reached = new Map();
  const queue = [];
  for (const r of roots) {
    if (!reached.has(r)) {
      reached.set(r, r);
      queue.push(r);
    }
  }
  while (queue.length) {
    const f = queue.shift();
    for (const dep of localImports(f)) {
      if (reached.has(dep)) continue;
      reached.set(dep, reached.get(f));
      queue.push(dep);
    }
  }
  return reached;
}

function routeOfFile(file) {
  if (!file.startsWith(APP + sep)) return null;
  const rel = relative(APP, dirname(file)).split(sep).join('/');
  return rel === '' ? '/' : `/${rel}`;
}

// ---------------------------------------------------------------------------
// runners
// ---------------------------------------------------------------------------

function loadCheckRules(checks) {
  const out = [];
  if (checks.includes('process-text')) {
    out.push({ check: 'PROCESS-TEXT', rules: loadRules(PROCESS_TEXT_RULES) });
  }
  if (checks.includes('stale-strings') && existsSync(STALE_STRING_RULES)) {
    out.push({ check: 'STALE-STRING', rules: loadRules(STALE_STRING_RULES) });
  }
  return out;
}

/** Lint the TS/TSX (and non-article JSON) sources behind CRR routes. */
export function lintTsxSources({ checks = ['process-text', 'stale-strings'] } = {}) {
  const sets = loadCheckRules(checks);
  const files = crrSourceFiles();
  const articleJson = new Set(ARTICLE_JSON_FILES.map((f) => join(ROOT, f)));
  const findings = [];
  for (const [file, viaRoute] of files) {
    if (articleJson.has(file)) continue; // qc-gate.mjs owns these
    const rel = relative(ROOT, file).split(sep).join('/');
    let pieces;
    if (extname(file) === '.json') {
      if (statSync(file).size > 2_000_000) continue;
      pieces = extractJsonText(JSON.parse(readFileSync(file, 'utf8'))).map((p) => ({ text: p.text, line: p.path }));
    } else {
      pieces = extractModuleText(file);
    }
    const route = routeOfFile(file) ?? `(shared; first imported by ${routeOfFile(viaRoute) ?? relative(ROOT, viaRoute)})`;
    for (const { check, rules } of sets) {
      for (const f of matchPieces(pieces, rules, rel, (p) => `${rel}:${p.line}`)) {
        findings.push({ check, route, ...f });
      }
    }
  }
  return { scannedFiles: files.size, findings };
}

/** Lint the JSON article pages (qc-gate.mjs data). */
export function lintArticleJson({ checks = ['process-text', 'stale-strings'], pages = null } = {}) {
  const sets = loadCheckRules(checks);
  const findings = [];
  let count = 0;
  for (const relFile of ARTICLE_JSON_FILES) {
    const p = join(ROOT, relFile);
    if (!existsSync(p)) continue;
    const list = JSON.parse(readFileSync(p, 'utf8'));
    for (const page of list) {
      if (pages && !pages.has(page.slug)) continue;
      count += 1;
      const pieces = extractJsonText(page).map((x) => ({ text: x.text, line: x.path }));
      for (const { check, rules } of sets) {
        for (const f of matchPieces(pieces, rules, relFile, (piece) => `${page.slug} ${piece.line}`)) {
          findings.push({ check, route: `${page.cluster ? `/${page.cluster}` : ''}/${page.slug}`, slug: page.slug, ...f });
        }
      }
    }
  }
  return { scannedPages: count, findings };
}

/** Both sources, both checks. */
export function runEditorialLint({ checks = ['process-text', 'stale-strings'], scope = 'all' } = {}) {
  const out = { tsx: null, json: null, findings: [] };
  if (scope === 'all' || scope === 'tsx') {
    out.tsx = lintTsxSources({ checks });
    out.findings.push(...out.tsx.findings);
  }
  if (scope === 'all' || scope === 'json') {
    out.json = lintArticleJson({ checks });
    out.findings.push(...out.json.findings);
  }
  return out;
}

/** Print findings grouped by check then rule. */
export function printFindings(findings, { cap = 25, log = console.log } = {}) {
  const byCheck = new Map();
  for (const f of findings) {
    if (!byCheck.has(f.check)) byCheck.set(f.check, new Map());
    const byRule = byCheck.get(f.check);
    if (!byRule.has(f.rule)) byRule.set(f.rule, []);
    byRule.get(f.rule).push(f);
  }
  for (const check of ['PROCESS-TEXT', 'STALE-STRING']) {
    const byRule = byCheck.get(check);
    const total = byRule ? [...byRule.values()].reduce((n, l) => n + l.length, 0) : 0;
    log(`\n${check}: ${total === 0 ? 'PASS (0 matches)' : `FAIL (${total} match${total === 1 ? '' : 'es'})`}`);
    if (!byRule) continue;
    for (const [rule, list] of byRule) {
      log(`  ${rule} (${list.length})`);
      for (const f of list.slice(0, cap)) {
        log(`    ${f.where}`);
        log(`      "${f.context}"`);
      }
      if (list.length > cap) log(`    ... and ${list.length - cap} more (use --json)`);
    }
  }
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  const argv = process.argv.slice(2);
  const val = (name) => {
    const i = argv.indexOf(`--${name}`);
    return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : null;
  };
  const only = val('check');
  const checks = only ? [only] : ['process-text', 'stale-strings'];
  const scope = val('scope') || 'all';
  const res = runEditorialLint({ checks, scope });
  console.log('-'.repeat(78));
  console.log(
    `Editorial lint   ${res.tsx ? `${res.tsx.scannedFiles} CRR source files` : ''}${res.tsx && res.json ? ' + ' : ''}${res.json ? `${res.json.scannedPages} JSON article pages` : ''}`
  );
  console.log('-'.repeat(78));
  printFindings(res.findings, { cap: argv.includes('--verbose') ? 1e9 : 25 });
  const json = val('json');
  if (json) {
    writeFileSync(json, JSON.stringify(res.findings, null, 2));
    console.log(`\njson report: ${json}`);
  }
  console.log(`\nRESULT: ${res.findings.length} match(es)`);
  process.exit(res.findings.length ? 1 : 0);
}
