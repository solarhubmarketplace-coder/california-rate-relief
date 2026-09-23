#!/usr/bin/env node
/**
 * assert-city-links.mjs — the internal-link assertions for ratereliefca.com.
 *
 * Why this exists
 * ---------------
 * On 2026-09-18 an audit of the internal link graph found that fourteen of the
 * fifty-seven /solar-cost/<city> pages had no inbound internal link anywhere on
 * the site. They were advertised in the sitemap and reachable from nothing else,
 * because the pages that link city pages (the six regional hubs and the
 * /solar-savings and /solar-companies city pages) all read their city list from
 * src/data/cities-data.ts, and those fourteen cities exist only in
 * src/data/city-cost-data.ts. A city could therefore be added to the cost layer,
 * pass its own source gate, ship, and be orphaned, with nothing failing.
 *
 * This script is the check that was missing. It builds the internal link graph
 * from the source tree and fails when a page that is advertised has nothing
 * pointing at it.
 *
 * What it checks
 *   --checks city    (npm run assert:citylinks)
 *     1. every publishable /solar-cost/<city> page has at least one inbound
 *        internal link from another CRR page
 *     2. every one of them is reachable from '/' by following links only, so a
 *        link from a page that is itself orphaned does not count as a fix
 *   --checks spine   (npm run assert:linkspine)
 *     3. every CRR section in SECTIONS averages at least one inbound internal
 *        link per page in it
 *     4. the two pages the audit named as the authority targets hold at least
 *        MIN_TARGET_LINKS inbound links each
 *   no flag: all four.
 *
 *   --report prints the per-section table and the script's own blind spots (the
 *   href expressions it could not resolve) instead of only the failures.
 *
 * Where the route list comes from
 * -------------------------------
 * The set of pages that exist on ratereliefca.com is read from
 * src/app/sitemap.ts — the same list the site advertises to Google — plus the
 * data modules that sitemap reads (cities-data, city-cost-data, growth-routes,
 * article-pages.*.json). Redirected paths are removed through
 * src/lib/canonical-redirects.ts exactly as crrSitemap() removes them, so a
 * retired URL is neither a page that needs links nor a link that counts.
 *
 * If a Next build is present (.next/app-path-routes-manifest.json) the route
 * patterns derived from the source tree are cross-checked against it and a page
 * file missing from the build is a failure. The check is skipped when there is
 * no build, because the machine this usually runs on cannot afford one.
 *
 * How the link graph is built, and what it approximates
 * ----------------------------------------------------
 * A page's outbound links are every href in its own file plus every href in the
 * components it imports, transitively, inside src/. Comments are stripped first,
 * so a path mentioned in a comment is not a link.
 *
 * Three constructs are not literal hrefs and are resolved by mirroring the code
 * that produces them. Each mirror is named here so that when the component
 * changes, the reader knows to change this too; assertMirrors() below fails the
 * run if the mirrored code no longer looks the way it did on 2026-09-18.
 *   - NearbyCityPages (src/components/growth/NearbyCostCities.tsx), used by
 *     all three city templates directly or through NearbyCities
 *     (src/components/shared/NearbyCities.tsx), renders the nearest live city
 *     pages plus companion and regional-hub links. Since 2026-09-22 the
 *     selection lives in src/lib/city-pages.ts and this script imports it, so
 *     a city page is credited with exactly the links it renders.
 *   - relatedArticles (src/data/article-pages.ts) renders six sibling links on a
 *     data-driven article page, same cluster first.
 *   - ArticleHub (src/components/shared/ArticleRoute.tsx) renders every article
 *     in the cluster the page declares with cluster="<name>".
 * A template href of the shape `/prefix/${expr}` is expanded with the slug
 * literals declared in the same file, which is how the /blog index and the
 * installer strips are written. Anything left unresolved is counted and printed
 * under --report rather than silently dropped: the graph is deliberately an
 * under-approximation, so an unresolved href can only make this script stricter.
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const FRONTEND = join(HERE, '..');
const SRC = join(FRONTEND, 'src');
const APP = join(SRC, 'app');

const args = process.argv.slice(2);
const REPORT = args.includes('--report');
const checksArg = (() => {
  const i = args.indexOf('--checks');
  return i === -1 || i === args.length - 1 ? 'all' : args[i + 1];
})();
const RUN_CITY = checksArg === 'all' || checksArg === 'city';
const RUN_SPINE = checksArg === 'all' || checksArg === 'spine';
const WHY = (() => {
  const i = args.indexOf('--why');
  return i === -1 || i === args.length - 1 ? null : args[i + 1];
})();

/** The two pages the 2026-09-18 audit named as the authority targets. */
const SPINE_TARGETS = [
  '/commercial-solar/cost-per-watt-california',
  '/blog/sdge-time-of-use-rates-2026',
];
const MIN_TARGET_LINKS = 10;

/**
 * Sections held to the one-link-per-page average. Every CRR content section
 * with more than one page is here. Sections outside ratereliefca.com (the GLP-1,
 * review and home-gear domains that share this codebase) are not: they have
 * their own hosts, their own sitemaps and their own link graphs.
 */
const SECTIONS = [
  '/blog',
  '/solar-cost',
  '/solar-savings',
  '/solar-companies',
  '/solar-installers',
  '/commercial-solar',
  '/solar-problems',
  '/battery',
  '/panel-reviews',
];

// ---------------------------------------------------------------------------
// data modules
// ---------------------------------------------------------------------------
const mod = (rel) => import(pathToFileURL(join(SRC, rel)).href);
const cityCost = await mod('data/city-cost-data.ts');
const citiesData = await mod('data/cities-data.ts');
const redirects = await mod('lib/canonical-redirects.ts');
const cityPages = await mod('lib/city-pages.ts');
const growthCities = (await mod('data/growth-cities.ts')).growthCities;
const growthRoutes = await mod('lib/growth-routes.ts');

const COST_ROWS = cityCost.getPublishableCityCostRows();
const COST_SLUGS = COST_ROWS.map((r) => r.slug);
const CITIES = citiesData.CITIES;
const { isRedirectedPath, CRR_CANONICAL_REDIRECTS } = redirects;

/** Mirrors CLUSTER_BASE in src/data/article-pages.ts. */
const CLUSTER_BASE = {
  commercial: '/commercial-solar',
  battery: '/battery',
  installer: '/solar-installers',
  problems: '/solar-problems',
};
const ARTICLE_PAGES = ['commercial', 'battery', 'installer', 'problems'].flatMap(
  (cluster) => {
    const file = join(SRC, 'data', `article-pages.${cluster}.json`);
    return existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : [];
  },
);

// ---------------------------------------------------------------------------
// source scanning
// ---------------------------------------------------------------------------
function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path, out);
    else if (/\.tsx?$/.test(entry.name) && !/\.test\.tsx?$/.test(entry.name)) out.push(path);
  }
  return out;
}

/**
 * Blank out comments, preserving length and line breaks so nothing else shifts.
 * A single or double quote that is not closed before the end of its line is
 * treated as ordinary text rather than a string opener, so an apostrophe in JSX
 * prose cannot swallow the rest of the file.
 */
function stripComments(src) {
  const out = src.split('');
  let i = 0;
  const n = src.length;
  const blank = (from, to) => {
    for (let k = from; k < to; k++) if (out[k] !== '\n') out[k] = ' ';
  };
  while (i < n) {
    const c = src[i];
    const d = src[i + 1];
    if (c === '/' && d === '/') {
      let end = src.indexOf('\n', i);
      if (end === -1) end = n;
      blank(i, end);
      i = end;
      continue;
    }
    if (c === '/' && d === '*') {
      const close = src.indexOf('*/', i + 2);
      const end = close === -1 ? n : close + 2;
      blank(i, end);
      i = end;
      continue;
    }
    if (c === '`') {
      i++;
      while (i < n) {
        if (src[i] === '\\') { i += 2; continue; }
        if (src[i] === '`') { i++; break; }
        i++;
      }
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

function readValue(code, at) {
  // at points to the first character of an href value.
  const q = code[at];
  if (q === "'" || q === '"' || q === '`') {
    let j = at + 1;
    while (j < code.length) {
      if (code[j] === '\\') { j += 2; continue; }
      if (code[j] === q) break;
      j++;
    }
    return { raw: code.slice(at + 1, j), literal: q !== '`' || !code.slice(at + 1, j).includes('${'), end: j + 1 };
  }
  if (q === '{') {
    let depth = 0;
    let j = at;
    while (j < code.length) {
      if (code[j] === '{') depth++;
      else if (code[j] === '}') { depth--; if (depth === 0) break; }
      j++;
    }
    const inner = code.slice(at + 1, j).trim();
    const m = /^(['"`])([\s\S]*)\1$/.exec(inner);
    if (m && !(m[1] === '`' && m[2].includes('${'))) {
      return { raw: m[2], literal: true, end: j + 1 };
    }
    return { raw: inner, literal: false, end: j + 1 };
  }
  return null;
}

const HREF_KEY = /\b([A-Za-z]*[Hh]ref)\s*[:=]\s*/g;
const SLUG_LITERAL = /\bslug:\s*['"]([a-z0-9-]+)['"]/g;
const PATH_CONST = /\bconst\s+([A-Za-z_][A-Za-z0-9_]*)\s*(?::\s*string\s*)?=\s*['"](\/[A-Za-z0-9\-_/]*)['"]/g;
const TEMPLATE_PREFIX = /`(\/[A-Za-z0-9\-_/]*?)\$\{/g;
const COUNTY_LITERAL = /['"]([A-Z][A-Za-z .'-]* County)['"]/g;

const files = walk(SRC);
/** @type {Map<string, {code:string, imports:string[], hrefs:{raw:string,literal:boolean}[], slugs:string[], consts:Map<string,string>, counties:string[]}>} */
const modules = new Map();

function resolveImport(from, spec) {
  let base;
  if (spec.startsWith('@/')) base = join(SRC, spec.slice(2));
  else if (spec.startsWith('./') || spec.startsWith('../')) base = join(dirname(from), spec);
  else return null;
  for (const ext of ['.tsx', '.ts', '/index.tsx', '/index.ts', '']) {
    const cand = base + ext;
    if (existsSync(cand) && /\.tsx?$/.test(cand)) return cand;
  }
  return null;
}

for (const file of files) {
  const code = stripComments(readFileSync(file, 'utf8'));
  const imports = [];
  for (const m of code.matchAll(/\bfrom\s+['"]([^'"]+)['"]/g)) {
    const r = resolveImport(file, m[1]);
    if (r) imports.push(r);
  }
  const hrefs = [];
  HREF_KEY.lastIndex = 0;
  for (const m of code.matchAll(HREF_KEY)) {
    const v = readValue(code, m.index + m[0].length);
    if (v) hrefs.push({ raw: v.raw, literal: v.literal, key: m[1] });
  }
  const consts = new Map();
  for (const m of code.matchAll(PATH_CONST)) consts.set(m[1], m[2]);
  modules.set(file, {
    code,
    imports,
    hrefs,
    slugs: [...new Set([...code.matchAll(SLUG_LITERAL)].map((m) => m[1]))],
    consts,
    counties: [...new Set([...code.matchAll(COUNTY_LITERAL)].map((m) => m[1]))],
  });
}

/** Exported path constants, so href={RATE_TRACKER_PATH} resolves. */
const GLOBAL_CONSTS = new Map();
for (const rec of modules.values()) for (const [k, v] of rec.consts) GLOBAL_CONSTS.set(k, v);

function closureOf(file, seen = new Set()) {
  if (seen.has(file)) return seen;
  seen.add(file);
  for (const dep of modules.get(file)?.imports ?? []) closureOf(dep, seen);
  return seen;
}

// ---------------------------------------------------------------------------
// the route list ratereliefca.com advertises
// ---------------------------------------------------------------------------
const sitemapSrc = stripComments(readFileSync(join(APP, 'sitemap.ts'), 'utf8'));

function arrayLiteral(name) {
  const m = new RegExp(`\\bconst\\s+${name}\\s*(?::[^=]*)?=\\s*\\[`).exec(sitemapSrc);
  if (!m) throw new Error(`assert-city-links: ${name} not found in src/app/sitemap.ts`);
  let i = m.index + m[0].length;
  let depth = 1;
  const start = i;
  while (i < sitemapSrc.length && depth > 0) {
    if (sitemapSrc[i] === '[') depth++;
    else if (sitemapSrc[i] === ']') depth--;
    i++;
  }
  const body = sitemapSrc.slice(start, i - 1);
  return [...body.matchAll(/'([^']+)'|"([^"]+)"/g)].map((x) => x[1] ?? x[2]);
}

const crrRoutes = new Set(['/']);
for (const m of sitemapSrc.matchAll(/url:\s*`\$\{base\}(\/[^`]*)`/g)) {
  if (!m[1].includes('${')) crrRoutes.add(m[1]);
}
for (const slug of arrayLiteral('blogSlugs')) crrRoutes.add(`/blog/${slug}`);
for (const slug of arrayLiteral('installerSlugs')) crrRoutes.add(`/solar-installers/${slug}`);
for (const slug of arrayLiteral('panelSlugs')) crrRoutes.add(`/panel-reviews/${slug}`);
for (const slug of arrayLiteral('commercialSlugs')) crrRoutes.add(`/commercial-solar/${slug}`);
for (const slug of arrayLiteral('regionalSlugs')) crrRoutes.add(`/solar-savings/${slug}`);
for (const slug of citiesData.getAllCitySlugs()) {
  crrRoutes.add(`/solar-savings/${slug}`);
  crrRoutes.add(`/solar-companies/${slug}`);
}
for (const route of [...growthRoutes.GROWTH_ROUTES, ...growthRoutes.LOCAL_RELEASE_REVIEW_ROUTES]) {
  if (route.startsWith('/solar-companies/')) crrRoutes.add(route);
}
for (const p of ARTICLE_PAGES) crrRoutes.add(`${CLUSTER_BASE[p.cluster]}/${p.slug}`);
for (const slug of COST_SLUGS) crrRoutes.add(`/solar-cost/${slug}`);
crrRoutes.add('/battery');
crrRoutes.add('/solar-problems');
for (const route of [...crrRoutes]) if (isRedirectedPath(route)) crrRoutes.delete(route);

// ---------------------------------------------------------------------------
// route -> the page file that serves it
// ---------------------------------------------------------------------------
const pageFiles = files.filter((f) => /[/\\]page\.tsx$/.test(f) && f.startsWith(APP));
const patterns = pageFiles.map((file) => {
  const segs = relative(APP, dirname(file)).split(/[/\\]/).filter((s) => s && !/^\(.*\)$/.test(s));
  return { file, segs };
});

function pageFileFor(route) {
  const segs = route === '/' ? [] : route.slice(1).split('/');
  let dynamic = null;
  for (const p of patterns) {
    if (p.segs.length !== segs.length) continue;
    let exact = true;
    let ok = true;
    for (let i = 0; i < segs.length; i++) {
      if (p.segs[i] === segs[i]) continue;
      if (/^\[.*\]$/.test(p.segs[i])) { exact = false; continue; }
      ok = false;
      break;
    }
    if (!ok) continue;
    if (exact) return p.file;
    dynamic = dynamic ?? p.file;
  }
  return dynamic;
}

if (existsSync(join(FRONTEND, '.next', 'app-path-routes-manifest.json'))) {
  const manifest = JSON.parse(readFileSync(join(FRONTEND, '.next', 'app-path-routes-manifest.json'), 'utf8'));
  const built = new Set(Object.values(manifest));
  const missing = [...crrRoutes].filter((route) => {
    const file = pageFileFor(route);
    if (!file) return true;
    const segs = relative(APP, dirname(file)).split(/[/\\]/).filter((s) => s && !/^\(.*\)$/.test(s));
    return !built.has('/' + segs.join('/')) && !built.has(segs.length ? '/' + segs.join('/') : '/');
  });
  if (missing.length) {
    console.error(`FAIL  ${missing.length} advertised route(s) are not in the build: ${missing.slice(0, 8).join(', ')}`);
    process.exitCode = 1;
  }
}

// ---------------------------------------------------------------------------
// mirrors of the three components that build links from data
// ---------------------------------------------------------------------------
const NEARBY = join(SRC, 'components', 'shared', 'NearbyCities.tsx');
const NEARBY_PAGES = join(SRC, 'components', 'growth', 'NearbyCostCities.tsx');
const ARTICLE_ROUTE = join(SRC, 'components', 'shared', 'ArticleRoute.tsx');
const ARTICLE_DATA = join(SRC, 'data', 'article-pages.ts');
const RELATED_INSTALLERS = join(SRC, 'components', 'shared', 'RelatedInstallers.tsx');
const BLOG_INDEX = join(APP, 'blog', 'page.tsx');
const PANEL_INDEX = join(APP, 'panel-reviews', 'page.tsx');
const COST_HUB = join(APP, 'solar-cost', 'page.tsx');
const INSTALLER_HUB = join(APP, 'solar-installers', 'page.tsx');
const REGIONAL_HUB_SLUGS = ['orange-county', 'bay-area', 'inland-empire', 'los-angeles-county', 'san-diego-county', 'central-valley'];
const REGIONAL_HUBS = new Set(REGIONAL_HUB_SLUGS.map((s) => join(APP, 'solar-savings', s, 'page.tsx')));
const REGIONAL_COST_CITIES = join(SRC, 'components', 'shared', 'RegionalCostCities.tsx');

/** The pick sets in RelatedInstallers.tsx, three links each. */
function parseInstallerPicks() {
  const code = modules.get(RELATED_INSTALLERS)?.code ?? '';
  const start = code.indexOf('INSTALLER_PICKS');
  const picks = new Map();
  if (start === -1) return picks;
  const body = code.slice(code.indexOf('{', start));
  for (const m of body.matchAll(/(\w+):\s*\[([\s\S]*?)\],?\n/g)) {
    picks.set(m[1], [...m[2].matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map((x) => x[1]));
  }
  return picks;
}
const INSTALLER_PICKS = parseInstallerPicks();

function assertMirrors() {
  const problems = [];
  const nearby = modules.get(NEARBY)?.code ?? '';
  const nearbyPages = modules.get(NEARBY_PAGES)?.code ?? '';
  if (!/companionCityLinks\(city\.slug, variant\)/.test(nearby) || !/<NearbyCityPages\b/.test(nearby) ||
      !/nearbyCityLinks\(slug, type\)/.test(nearbyPages) || !/regionalHubsFor\(slug\)/.test(nearbyPages)) {
    problems.push('NearbyCities / NearbyCityPages no longer call the src/lib/city-pages.ts selectors this script credits');
  }
  const data = modules.get(ARTICLE_DATA)?.code ?? '';
  if (!/limit = 6/.test(data) || !/p\.cluster === page\.cluster/.test(data)) {
    problems.push('relatedArticles no longer matches relatedSiblings() in this script');
  }
  if (problems.length) {
    for (const p of problems) console.error(`FAIL  ${p}. Re-read the component and update the mirror.`);
    process.exitCode = 1;
  }
}
assertMirrors();

/**
 * The links NearbyCityPages renders for one city page (nearest pages,
 * companions of the listed types, regional hubs), from the same functions.
 */
function nearbyPageLinks(slug, type, companionTypes) {
  const out = cityPages.nearbyCityLinks(slug, type).map((n) => n.href);
  for (const c of cityPages.companionCityLinks(slug, type)) {
    if (companionTypes.includes(c.type)) out.push(c.href);
  }
  for (const hub of cityPages.regionalHubsFor(slug)) out.push(hub.href);
  return out;
}

/** Mirrors relatedArticles() in src/data/article-pages.ts. */
function relatedSiblings(page, limit = 6) {
  const siblings = ARTICLE_PAGES.filter((p) => p.cluster === page.cluster && p.slug !== page.slug);
  const others = ARTICLE_PAGES.filter((p) => p.cluster !== page.cluster);
  return [...siblings, ...others].slice(0, limit).map((p) => `${CLUSTER_BASE[p.cluster]}/${p.slug}`);
}

// ---------------------------------------------------------------------------
// outbound links per route
// ---------------------------------------------------------------------------
const unresolved = new Map();
/** Which module produced how many expanded links, for --sources. */
const expansionByModule = new Map();
function noteExpansion(dep, prefix, n) {
  const key = `${relative(SRC, dep)}  ${prefix}`;
  expansionByModule.set(key, (expansionByModule.get(key) ?? 0) + n);
}

function normalise(path) {
  const clean = path.split('#')[0].split('?')[0];
  if (!clean.startsWith('/')) return null;
  const trimmed = clean.length > 1 ? clean.replace(/\/+$/, '') : clean;
  return trimmed;
}

function outboundFor(route, file) {
  const links = new Set();
  const closure = closureOf(file);
  const pageCounties = modules.get(file)?.counties ?? [];

  for (const dep of closure) {
    const rec = modules.get(dep);
    if (!rec) continue;
    for (const href of rec.hrefs) {
      if (href.literal) {
        const p = normalise(href.raw);
        if (p) links.add(p);
        continue;
      }
      const ident = /^[A-Za-z_][A-Za-z0-9_]*$/.exec(href.raw);
      if (ident) {
        const known = rec.consts.get(href.raw) ?? GLOBAL_CONSTS.get(href.raw);
        if (known) { links.add(known); continue; }
      }
      // savingsCityHref('<city>') / companiesCityHref('<city>') with a literal
      // argument resolves exactly: the table decides the destination, which is
      // the whole point of those two helpers.
      const helper = /\b(savingsCityHref|companiesCityHref)\(\s*["']([a-z0-9-]+)["']\s*\)/.exec(href.raw);
      if (helper) {
        const base = helper[1] === 'savingsCityHref'
          ? `/solar-savings/${helper[2]}`
          : `/solar-companies/${helper[2]}`;
        links.add(CRR_CANONICAL_REDIRECTS[base] ?? base);
        continue;
      }
      // Anything else that is not a literal or a path constant is left to the
      // mirrors below. What no mirror covers stays uncounted.
      const key = `${relative(SRC, dep)}  ${href.key}={${href.raw.replace(/\s+/g, ' ').slice(0, 70)}}`;
      unresolved.set(key, (unresolved.get(key) ?? 0) + 1);
    }
  }

  // The two indexes that map their own slug array in full.
  if (file === BLOG_INDEX) for (const slug of modules.get(file).slugs) links.add(`/blog/${slug}`);
  if (file === PANEL_INDEX) for (const slug of modules.get(file).slugs) links.add(`/panel-reviews/${slug}`);

  // The /solar-cost hub lists every row that passes the source gate.
  if (file === COST_HUB) {
    for (const r of COST_ROWS) links.add(`/solar-cost/${r.slug}`);
    noteExpansion(file, '/solar-cost/', COST_ROWS.length);
  }

  // A regional hub maps the cities of its own counties, both layers.
  if (REGIONAL_HUBS.has(file)) {
    const cityPool = pageCounties.length ? CITIES.filter((c) => pageCounties.includes(c.county)) : [];
    for (const c of cityPool) {
      const base = `/solar-savings/${c.slug}`;
      links.add(CRR_CANONICAL_REDIRECTS[base] ?? base);
    }
    noteExpansion(file, '/solar-savings/', cityPool.length);
    // Mirrors RegionalCostCities: the cost cities of those counties that the
    // grid above does not already reach through savingsCityHref().
    if (closure.has(REGIONAL_COST_CITIES)) {
      const alreadyLinked = new Set(cityPool.map((c) => {
        const base = `/solar-savings/${c.slug}`;
        return CRR_CANONICAL_REDIRECTS[base] ?? base;
      }));
      const rows = COST_ROWS.filter(
        (r) => pageCounties.includes(r.county) && !alreadyLinked.has(`/solar-cost/${r.slug}`),
      );
      for (const r of rows) links.add(`/solar-cost/${r.slug}`);
      noteExpansion(REGIONAL_COST_CITIES, '/solar-cost/', rows.length);
    }
  }

  // A module that maps articlesInCluster('<name>') through articleHref() links
  // every article in that cluster: the two section indexes are written that way,
  // so a guide added to the JSON is linked the day it ships.
  for (const dep of closure) {
    const code = modules.get(dep)?.code ?? '';
    if (!/\barticleHref\s*\(/.test(code)) continue;
    for (const m of code.matchAll(/\barticlesInCluster\(\s*["'](\w+)["']\s*\)/g)) {
      const base = CLUSTER_BASE[m[1]];
      if (!base) continue;
      const listed = ARTICLE_PAGES.filter((p) => p.cluster === m[1]);
      for (const p of listed) links.add(`${base}/${p.slug}`);
      noteExpansion(dep, `${base}/ (cluster index)`, listed.length);
    }
  }

  // RelatedInstallers renders the three reviews of the pick set the page names.
  if (closure.has(RELATED_INSTALLERS)) {
    const declared = /<RelatedInstallers[^>]*picks=["'](\w+)["']/.exec(modules.get(file).code);
    const set = INSTALLER_PICKS.get(declared ? declared[1] : 'general') ?? [];
    for (const slug of set) links.add(`/solar-installers/${slug}`);
    noteExpansion(RELATED_INSTALLERS, '/solar-installers/', set.length);
  }

  // City templates: what NearbyCityPages / NearbyCities render for this city.
  const cityRoute = /^\/solar-(cost|companies|savings)\/([a-z0-9-]+)$/.exec(route);
  if (cityRoute && (closure.has(NEARBY) || closure.has(NEARBY_PAGES))) {
    const type = cityRoute[1];
    const slug = cityRoute[2];
    if (type === 'cost') {
      for (const href of nearbyPageLinks(slug, 'cost', ['savings'])) links.add(href);
    } else if (type === 'companies' && growthCities[slug]) {
      for (const href of nearbyPageLinks(slug, 'companies', [])) links.add(href);
    } else if (CITIES.some((c) => c.slug === slug)) {
      // NearbyCities: a companion card (the first other live page) and the
      // rest as "Also for" links, plus the nearby list and hubs.
      const others = cityPages.companionCityLinks(slug, type);
      if (others[0]) links.add(others[0].href);
      for (const href of nearbyPageLinks(slug, type, others.slice(1).map((o) => o.type))) links.add(href);
    }
    noteExpansion(NEARBY_PAGES, `${route.split('/').slice(0, 2).join('/')}/ (nearby)`, 1);
  }

  // Data-driven article pages: the six related-reading siblings.
  if (closure.has(ARTICLE_ROUTE)) {
    const page = ARTICLE_PAGES.find((p) => `${CLUSTER_BASE[p.cluster]}/${p.slug}` === route);
    if (page) for (const href of relatedSiblings(page)) links.add(href);
    // An ArticleHub lists every article in the cluster it declares.
    const declared = /cluster=["']([a-z]+)["']/.exec(modules.get(file)?.code ?? '');
    if (declared && !page) {
      for (const p of ARTICLE_PAGES.filter((p) => p.cluster === declared[1])) {
        links.add(`${CLUSTER_BASE[p.cluster]}/${p.slug}`);
      }
    }
  }

  links.delete(route);
  return links;
}

const outbound = new Map();
const missingPageFile = [];
for (const route of crrRoutes) {
  const file = pageFileFor(route);
  if (!file) { missingPageFile.push(route); continue; }
  outbound.set(route, outboundFor(route, file));
}

// ---------------------------------------------------------------------------
// inbound counts and reachability
// ---------------------------------------------------------------------------
const inbound = new Map([...crrRoutes].map((r) => [r, new Set()]));
for (const [from, targets] of outbound) {
  for (const to of targets) {
    if (isRedirectedPath(to)) continue;
    if (inbound.has(to) && to !== from) inbound.get(to).add(from);
  }
}

// A link to a path that answers 301 is a redirect hop the crawler pays for and,
// where the destination is itself a source, a chain. savingsCityHref() and
// companiesCityHref() exist so this stays empty; this is the check that it does.
/**
 * One known exception, 2026-09-18: app/solar-installers/la-solar-group-review
 * still links /solar-companies/los-angeles, which 301s to
 * /solar-cost/los-angeles. That file belongs to a parallel lane on this date and
 * is not this branch's to edit. Delete the row once the link is swept; a new
 * link to a redirect that is not on this list fails the run.
 */
const KNOWN_LINKS_TO_REDIRECTS = new Set([
  '/solar-installers/la-solar-group-review -> /solar-companies/los-angeles',
]);

const linksToRedirects = [];
for (const [from, targets] of outbound) {
  for (const to of targets) {
    const row = `${from} -> ${to}`;
    if (isRedirectedPath(to) && !KNOWN_LINKS_TO_REDIRECTS.has(row)) linksToRedirects.push(row);
  }
}

const reachable = new Set(['/']);
const queue = ['/'];
while (queue.length) {
  const route = queue.shift();
  for (const next of outbound.get(route) ?? []) {
    if (!crrRoutes.has(next) || reachable.has(next)) continue;
    reachable.add(next);
    queue.push(next);
  }
}

// ---------------------------------------------------------------------------
// output
// ---------------------------------------------------------------------------
const sectionOf = (route) => {
  const seg = `/${route.split('/')[1] ?? ''}`;
  return SECTIONS.includes(seg) ? seg : null;
};

const stats = new Map(SECTIONS.map((s) => [s, { pages: 0, links: 0, zero: [] }]));
for (const route of crrRoutes) {
  const section = sectionOf(route);
  if (!section || route === section) continue;
  const s = stats.get(section);
  s.pages++;
  const n = inbound.get(route).size;
  s.links += n;
  if (n === 0) s.zero.push(route);
}

console.log(`Routes advertised on ratereliefca.com: ${crrRoutes.size}`);
if (missingPageFile.length) {
  console.log(`  (no page file found for ${missingPageFile.length}: ${missingPageFile.slice(0, 5).join(', ')})`);
}
console.log('');
console.log('section              pages   inbound links   per page   zero-inbound');
for (const [section, s] of stats) {
  const avg = s.pages ? (s.links / s.pages).toFixed(2) : '-';
  console.log(
    `${section.padEnd(20)} ${String(s.pages).padStart(5)} ${String(s.links).padStart(15)} ${avg.padStart(10)} ${String(s.zero.length).padStart(14)}`,
  );
}
console.log('');
for (const target of SPINE_TARGETS) {
  console.log(`${target}: ${inbound.get(target)?.size ?? 0} inbound`);
}

if (REPORT) {
  for (const [section, s] of stats) {
    if (s.zero.length) console.log(`\n${section} with no inbound link:\n  ${s.zero.join('\n  ')}`);
  }
  if (linksToRedirects.length) {
    console.log(`\ninternal links pointing at a redirected path (${linksToRedirects.length}):`);
    for (const row of linksToRedirects.sort()) console.log(`  ${row}`);
  }
  const orphaned = [...crrRoutes].filter((r) => !reachable.has(r));
  console.log(`\nNot reachable from '/': ${orphaned.length}`);
  if (orphaned.length) console.log(`  ${orphaned.slice(0, 60).join('\n  ')}`);
  if (unresolved.size) {
    console.log(`\nhref expressions this script could not resolve (${unresolved.size}):`);
    for (const [key, n] of [...unresolved].sort((a, b) => b[1] - a[1]).slice(0, 25)) {
      console.log(`  ${n}x  ${key}`);
    }
  }
  console.log('\nlinks produced by expanding a template href, by module:');
  for (const [key, n] of [...expansionByModule].sort((a, b) => b[1] - a[1]).slice(0, 25)) {
    console.log(`  ${n}  ${key}`);
  }
}

if (WHY) {
  const from = [...(inbound.get(WHY) ?? [])].sort();
  console.log(`\n${WHY}: ${from.length} inbound`);
  for (const f of from) console.log(`  <- ${f}`);
}

// ---------------------------------------------------------------------------
// assertions
// ---------------------------------------------------------------------------
let failed = process.exitCode === 1;
const fail = (msg) => { console.error(`FAIL  ${msg}`); failed = true; };
const pass = (msg) => console.log(`ok    ${msg}`);

console.log('');
if (RUN_CITY) {
  const orphanCost = COST_SLUGS.filter((slug) => inbound.get(`/solar-cost/${slug}`).size === 0);
  if (orphanCost.length) {
    fail(`${orphanCost.length} of ${COST_SLUGS.length} /solar-cost pages have no inbound internal link: ${orphanCost.join(', ')}`);
  } else {
    pass(`all ${COST_SLUGS.length} /solar-cost pages have at least one inbound internal link`);
  }
  // A link to a redirected path costs a hop and, where the destination is itself
  // a source, makes a chain. There were 54 of these on 2026-09-18, all left over
  // from retiring the /solar-companies city layer; 53 are fixed and the last is
  // in KNOWN_LINKS_TO_REDIRECTS above with the reason.
  if (linksToRedirects.length) {
    fail(`${linksToRedirects.length} internal link(s) point at a redirected path: ${linksToRedirects.slice(0, 6).join(', ')}`);
  } else {
    pass('no internal link points at a redirected path, outside the known exception');
  }
  const unreachableCost = COST_SLUGS.filter((slug) => !reachable.has(`/solar-cost/${slug}`));
  if (unreachableCost.length) {
    fail(`${unreachableCost.length} /solar-cost pages are not reachable from '/': ${unreachableCost.join(', ')}`);
  } else {
    pass(`all ${COST_SLUGS.length} /solar-cost pages are reachable from '/'`);
  }
}

if (RUN_SPINE) {
  for (const [section, s] of stats) {
    if (!s.pages) continue;
    const avg = s.links / s.pages;
    if (avg < 1) fail(`${section} averages ${avg.toFixed(2)} inbound links per page across ${s.pages} pages`);
    else pass(`${section} averages ${avg.toFixed(2)} inbound links per page`);
  }
  for (const target of SPINE_TARGETS) {
    const n = inbound.get(target)?.size ?? 0;
    if (n < MIN_TARGET_LINKS) fail(`${target} has ${n} inbound links, fewer than ${MIN_TARGET_LINKS}`);
    else pass(`${target} has ${n} inbound links`);
  }
}

process.exitCode = failed ? 1 : 0;
