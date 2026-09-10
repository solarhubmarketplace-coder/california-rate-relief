#!/usr/bin/env node
/**
 * CRR internal link-graph crawler (Week 1 item 10; the CTA column is item 6).
 *
 * The previous crawl saved only url/title/desc/h1/h2/words/body/canonical/noindex/bytes
 * and the body had already been flattened to plain text, so no href survived and no
 * page's inbound internal link count could be computed. Internal linking is the main
 * lever for the Week 1 page lifts, so this crawl keeps the link graph.
 *
 * Usage:
 *   node scripts/crawl-linkgraph.mjs
 *   node scripts/crawl-linkgraph.mjs --base https://ratereliefca.com --concurrency 2
 *   node scripts/crawl-linkgraph.mjs --limit 10          # smoke test
 *   node scripts/crawl-linkgraph.mjs --out <dir>
 *
 * Writes into <repo root>/scripts/out/ :
 *   crawl-linkgraph-<YYYY-MM-DD>.json   full per-page records
 *   linkgraph-summary.md                human-readable report
 *
 * NO NEW DEPENDENCIES. Neither Code/Frontend/package.json nor Code/Backend/package.json
 * carries an HTML parser (no cheerio / jsdom / node-html-parser / parse5), so the
 * extraction below is a hand-rolled tag scanner over the raw HTML.
 *
 * Tradeoff of not using a real parser: this scanner does not build a DOM, so it cannot
 * repair badly-nested markup, cannot resolve <base href>, and treats attribute values
 * as flat quoted strings. It is safe here because the pages are Next.js App Router
 * server output - well-formed, one <main> per page, no <base> tag, no anchors inside
 * attribute values. What it DOES do properly, and what a naive regex would get wrong:
 *   - <script>/<style>/<svg>/<noscript>/<template> and HTML comments are blanked out
 *     (overwritten with spaces of identical length) BEFORE any scanning, so byte offsets
 *     stay aligned with the raw HTML and JSON-LD can still be read from the raw copy.
 *   - a real element stack tracks <main>/<article>/<header>/<nav>/<footer> so a link's
 *     area is decided by its actual ancestors, not by proximity.
 *
 * Why the area split matters: a link that appears on all 328 pages carries no signal.
 * Boilerplate is identified two ways - by <header>/<nav>/<footer> ancestry, and by any
 * href appearing on more than 80% of pages (UBIQUITY_THRESHOLD).
 *
 * Politeness: this is the site owner's own audit of his own site. Default 2 concurrent
 * workers, 400ms delay after every request inside each worker, 20s timeout, one retry,
 * and an automatic global slowdown on 429/503.
 */

import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
// scripts -> Frontend -> Code -> repo root. Outputs live at <repo root>/scripts/out.
const REPO_ROOT = join(__dirname, '..', '..', '..');
const DEFAULT_OUT_DIR = join(REPO_ROOT, 'scripts', 'out');

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 || i === args.length - 1 ? fallback : args[i + 1];
};

const BASE = (flag('base', 'https://ratereliefca.com') || '').replace(/\/+$/, '');
const HOST = new URL(BASE).hostname;
// Normalise our own host to the base's scheme. Do NOT hardcode https: the sibling audit
// script supports a localhost base, and forcing https there makes every request fail.
const SCHEME = new URL(BASE).protocol;
const OUT_DIR = flag('out', DEFAULT_OUT_DIR);
const CONCURRENCY = Math.min(3, Math.max(1, Number(flag('concurrency', 2)) || 2));
const LIMIT = Number(flag('limit', 0)) || 0;
const DELAY_MS = Math.min(500, Math.max(300, Number(flag('delay', 400)) || 400));
const TIMEOUT_MS = 20000;
const MAX_REDIRECTS = 5;
const UBIQUITY_THRESHOLD = 0.8;

const USER_AGENT =
  'Mozilla/5.0 (compatible; CRR-LinkGraph-Audit/1.0; +https://ratereliefca.com/; ' +
  'owner-operated SEO audit crawler, not a search engine bot)';

// The two in-body CTA labels the owner asked to audit (Week 1 item 6).
const CTA_STRINGS = ['Check My Eligibility', 'Check Eligibility'];
// Intake destinations. Commercial pages use different wording, so the string check alone
// would under-report them; this is tracked separately rather than folded in.
const CTA_TARGETS = ['/#qualify', '#qualify', '/commercial-assessment'];

const SECTIONS = [
  '/blog/',
  '/solar-savings/',
  '/solar-companies/',
  '/solar-installers/',
  '/commercial-solar/',
  '/battery/',
  '/panel-reviews/',
];

const ARTICLE_TYPES = new Set(['Article', 'BlogPosting', 'NewsArticle', 'TechArticle']);
const TRACKED = new Set(['main', 'article', 'header', 'nav', 'footer']);
const VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let extraDelay = 0; // grows if the origin pushes back

/* ------------------------------------------------------------------ helpers */

const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  ndash: '-', mdash: '-', hellip: '...', middot: '.', rsquo: "'",
  lsquo: "'", ldquo: '"', rdquo: '"', deg: ' ', cent: 'c', times: 'x',
};

function decodeEntities(text) {
  return text.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g, (match, body) => {
    if (body[0] === '#') {
      const code = body[1] === 'x' || body[1] === 'X'
        ? parseInt(body.slice(2), 16)
        : parseInt(body.slice(1), 10);
      return Number.isFinite(code) && code > 0 && code <= 0x10ffff
        ? String.fromCodePoint(code)
        : match;
    }
    const key = body.toLowerCase();
    return Object.prototype.hasOwnProperty.call(ENTITIES, key) ? ENTITIES[key] : match;
  });
}

function stripTags(html) {
  // Tags become a space so adjacent words do not fuse.
  return html.replace(/<[^>]*>/g, ' ');
}

function collapse(text) {
  return decodeEntities(stripTags(text)).replace(/\s+/g, ' ').trim();
}

function countWords(text) {
  return text.split(/\s+/).filter((w) => /[a-zA-Z0-9]/.test(w)).length;
}

function parseAttrs(tagSource) {
  const attrs = {};
  const re = /([\w:.-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'<>`]+)))?/g;
  let m;
  let first = true;
  while ((m = re.exec(tagSource)) !== null) {
    if (first) { first = false; continue; } // skip the tag name itself
    attrs[m[1].toLowerCase()] = decodeEntities(m[2] ?? m[3] ?? m[4] ?? '');
  }
  return attrs;
}

/** Overwrite a region with spaces so every later byte offset still lines up. */
function blank(html, re) {
  return html.replace(re, (match) => ' '.repeat(match.length));
}

function cleanForScanning(html) {
  let out = blank(html, /<!--[\s\S]*?-->/g);
  out = blank(out, /<script\b[^>]*>[\s\S]*?<\/script\s*>/gi);
  out = blank(out, /<style\b[^>]*>[\s\S]*?<\/style\s*>/gi);
  out = blank(out, /<noscript\b[^>]*>[\s\S]*?<\/noscript\s*>/gi);
  out = blank(out, /<template\b[^>]*>[\s\S]*?<\/template\s*>/gi);
  out = blank(out, /<svg\b[^>]*>[\s\S]*?<\/svg\s*>/gi);
  return out;
}

/**
 * Walk the tag stream and return one span per <main>/<article>/<header>/<nav>/<footer>.
 * Tolerates unclosed elements (they run to end of document) and stray close tags.
 */
function sectioningSpans(cleaned) {
  const spans = [];
  const stack = [];
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)\b([^>]*)>/g;
  let m;
  while ((m = re.exec(cleaned)) !== null) {
    const closing = m[1] === '/';
    const tag = m[2].toLowerCase();
    if (!TRACKED.has(tag)) continue;
    if (!closing) {
      const selfClosed = /\/\s*$/.test(m[3]) || VOID_TAGS.has(tag);
      if (selfClosed) continue;
      stack.push({ tag, start: m.index, contentStart: m.index + m[0].length });
      continue;
    }
    // Close the nearest matching open element; anything above it was left unclosed.
    let at = -1;
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i].tag === tag) { at = i; break; }
    }
    if (at === -1) continue;
    for (let i = stack.length - 1; i >= at; i--) {
      const open = stack[i];
      spans.push({ tag: open.tag, start: open.start, contentStart: open.contentStart, end: m.index + m[0].length });
    }
    stack.length = at;
  }
  for (const open of stack) {
    spans.push({ tag: open.tag, start: open.start, contentStart: open.contentStart, end: cleaned.length });
  }
  return spans.sort((a, b) => a.start - b.start);
}

function containing(spans, offset) {
  return spans.filter((s) => offset >= s.start && offset < s.end);
}

/** [start,end) ranges minus the given exclusion ranges. */
function subtractRanges(ranges, exclusions) {
  let current = ranges.slice();
  for (const [xs, xe] of exclusions) {
    const next = [];
    for (const [s, e] of current) {
      if (xe <= s || xs >= e) { next.push([s, e]); continue; }
      if (xs > s) next.push([s, xs]);
      if (xe < e) next.push([xe, e]);
    }
    current = next;
  }
  return current.filter(([s, e]) => e > s);
}

function normalizeUrl(input, base) {
  let url;
  try {
    url = new URL(input, base);
  } catch {
    return null;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
  url.hash = '';
  url.hostname = url.hostname.toLowerCase().replace(/^www\./, '');
  // Collapse http/https only for our own host, so /page and https://host/page dedupe to one key.
  if (url.hostname === HOST.replace(/^www\./, '')) url.protocol = SCHEME;
  const path = url.pathname.replace(/\/+$/, '');
  url.pathname = path === '' ? '/' : path;
  return url.toString();
}

function isInternal(normalized) {
  if (!normalized) return false;
  try {
    return new URL(normalized).hostname === HOST.replace(/^www\./, '');
  } catch {
    return false;
  }
}

function pathOf(normalized) {
  try {
    return new URL(normalized).pathname;
  } catch {
    return normalized;
  }
}

function sectionOf(normalized) {
  const path = pathOf(normalized);
  for (const s of SECTIONS) if (path.startsWith(s)) return s;
  return '(root & other)';
}

/* ------------------------------------------------------------------ fetching */

async function fetchOnce(url) {
  const res = await fetch(url, {
    redirect: 'manual',
    headers: {
      'User-Agent': USER_AGENT,
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
    },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  const buffer = Buffer.from(await res.arrayBuffer());
  return {
    status: res.status,
    headers: res.headers,
    location: res.headers.get('location'),
    body: buffer,
  };
}

/** One retry, manual redirect following, and a global slowdown when throttled. */
async function fetchPage(startUrl) {
  const chain = [];
  let url = startUrl;
  let initialStatus = null;
  let response = null;

  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    let attempt = 0;
    for (;;) {
      try {
        response = await fetchOnce(url);
        break;
      } catch (err) {
        if (attempt >= 1) return { error: String(err && err.message ? err.message : err), chain, initialStatus, finalUrl: url };
        attempt++;
        await sleep(2000);
      }
    }
    if (initialStatus === null) initialStatus = response.status;

    if (response.status === 429 || response.status === 503) {
      const retryAfter = Number(response.headers.get('retry-after'));
      extraDelay = Math.min(5000, extraDelay + 750);
      await sleep(Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 3000);
      let retried = null;
      try {
        retried = await fetchOnce(url);
      } catch { /* fall through with the throttled response */ }
      if (retried) response = retried;
    }

    if (response.status >= 300 && response.status < 400 && response.location) {
      const next = new URL(response.location, url).toString();
      chain.push({ from: url, status: response.status, to: next });
      url = next;
      await sleep(DELAY_MS + extraDelay);
      continue;
    }
    break;
  }

  return { response, chain, initialStatus, finalUrl: url };
}

/* ------------------------------------------------------------------ parsing */

function extractJsonLd(rawHtml) {
  const nodes = [];
  const blocks = [];
  const re = /<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script\s*>/gi;
  let m;
  while ((m = re.exec(rawHtml)) !== null) {
    blocks.push(m[1]);
    let parsed;
    try {
      parsed = JSON.parse(m[1].trim());
    } catch {
      nodes.push({ '@type': '__UNPARSEABLE__' });
      continue;
    }
    const queue = Array.isArray(parsed) ? parsed.slice() : [parsed];
    while (queue.length) {
      const node = queue.shift();
      if (!node || typeof node !== 'object') continue;
      if (Array.isArray(node)) { queue.push(...node); continue; }
      nodes.push(node);
      if (Array.isArray(node['@graph'])) queue.push(...node['@graph']);
    }
  }
  return { nodes, blockCount: blocks.length };
}

function typesOf(node) {
  const t = node['@type'];
  return Array.isArray(t) ? t : t ? [t] : [];
}

function firstTagText(html, tag) {
  const m = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}\\s*>`, 'i').exec(html);
  return m ? collapse(m[1]) : null;
}

function metaContent(rawHtml, matcher) {
  const re = /<meta\b([^>]*)>/gi;
  let m;
  while ((m = re.exec(rawHtml)) !== null) {
    const attrs = parseAttrs(`meta ${m[1]}`);
    if (matcher(attrs)) return attrs.content ?? null;
  }
  return null;
}

function linkHref(rawHtml, rel) {
  const re = /<link\b([^>]*)>/gi;
  let m;
  while ((m = re.exec(rawHtml)) !== null) {
    const attrs = parseAttrs(`link ${m[1]}`);
    if ((attrs.rel || '').toLowerCase().split(/\s+/).includes(rel)) return attrs.href ?? null;
  }
  return null;
}

function parsePage(rawHtml, finalUrl) {
  const cleaned = cleanForScanning(rawHtml);
  const spans = sectioningSpans(cleaned);

  const mainSpans = spans.filter((s) => s.tag === 'main');
  const articleSpans = spans.filter((s) => s.tag === 'article');
  const navSpans = spans.filter((s) => s.tag === 'nav');
  const footerSpans = spans.filter((s) => s.tag === 'footer');
  const headerSpans = spans.filter((s) => s.tag === 'header');

  const hasMainRoot = mainSpans.length > 0 || articleSpans.length > 0;
  const rootSpans = mainSpans.length ? mainSpans : articleSpans;

  const inside = (spanList, offset) =>
    spanList.some((s) => offset >= s.start && offset < s.end);

  // A <header> nested inside <main> is the article header (h1, dek, byline) and its prose
  // belongs to the article. A <header> outside <main> is the site chrome.
  const chromeHeaders = headerSpans.filter((h) => !inside(mainSpans, h.start));

  // Word-count region: inside main/article, minus nav, footer and site-chrome headers.
  const base = hasMainRoot
    ? rootSpans.map((s) => [s.contentStart, s.end])
    : [[0, cleaned.length]];
  const contentRanges = subtractRanges(
    base,
    [...navSpans, ...footerSpans, ...chromeHeaders].map((s) => [s.start, s.end]),
  );
  const contentHtml = contentRanges.map(([s, e]) => cleaned.slice(s, e)).join(' \n ');
  const contentText = collapse(contentHtml);

  // ---- headings
  const h1FromContent = firstTagText(contentHtml, 'h1');
  const h1 = h1FromContent || firstTagText(cleaned, 'h1');
  const h2s = [...contentHtml.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2\s*>/gi)]
    .map((m) => collapse(m[1]))
    .filter(Boolean);

  // ---- head metadata
  const title = firstTagText(rawHtml, 'title');
  const metaDescription = metaContent(rawHtml, (a) => (a.name || '').toLowerCase() === 'description');
  const robots = metaContent(rawHtml, (a) => (a.name || '').toLowerCase() === 'robots');
  const canonicalRaw = linkHref(rawHtml, 'canonical');

  // ---- links
  const links = [];
  const externalLinks = [];
  const anchorRe = /<a\b([^>]*)>/gi;
  let m;
  while ((m = anchorRe.exec(cleaned)) !== null) {
    const attrs = parseAttrs(`a ${m[1]}`);
    if (!attrs.href) continue;
    const raw = attrs.href.trim();
    if (/^(mailto:|tel:|sms:|javascript:|data:)/i.test(raw)) continue;

    const offset = m.index;
    const closeAt = cleaned.indexOf('</a', m.index + m[0].length);
    const innerEnd = closeAt === -1 ? Math.min(cleaned.length, m.index + m[0].length + 400) : closeAt;
    const anchorText = collapse(cleaned.slice(m.index + m[0].length, innerEnd)).slice(0, 160);

    let area;
    if (inside(footerSpans, offset)) area = 'footer';
    else if (inside(navSpans, offset)) area = 'nav';
    else if (inside(headerSpans, offset)) area = 'nav';
    else if (!hasMainRoot || inside(rootSpans, offset)) area = 'content';
    else area = 'nav'; // between the landmarks: still page chrome, never article body

    const isFragmentOnly = raw.startsWith('#');
    const normalized = normalizeUrl(raw, finalUrl);
    const record = {
      href: isFragmentOnly ? new URL(raw, finalUrl).toString() : (normalized || raw),
      rawHref: raw,
      target: normalized,
      anchorText,
      rel: attrs.rel || null,
      area,
    };
    if (isInternal(normalized)) links.push(record);
    else if (normalized) externalLinks.push({ href: normalized, anchorText, rel: attrs.rel || null, area });
  }

  // ---- JSON-LD
  const { nodes, blockCount } = extractJsonLd(rawHtml);
  const allTypes = nodes.flatMap(typesOf);
  const articleNodeCount = nodes.filter((n) => typesOf(n).some((t) => ARTICLE_TYPES.has(t))).length;

  // ---- in-body CTA (Week 1 item 6). Restricted to the content region on purpose:
  // "Check Eligibility" also sits in the site header and "Check My Eligibility" in the
  // footer on every page, so a whole-document search would report 100% coverage.
  const ctaMatches = {};
  for (const needle of CTA_STRINGS) {
    const re = new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    ctaMatches[needle] = (contentText.match(re) || []).length;
  }
  const ctaStringHits = Object.values(ctaMatches).reduce((a, b) => a + b, 0);
  const ctaLinkTargets = links
    .filter((l) => l.area === 'content' && CTA_TARGETS.some((t) => l.rawHref === t || l.rawHref.endsWith(t)))
    .map((l) => l.rawHref);

  return {
    title,
    metaDescription,
    h1,
    h2s,
    canonical: canonicalRaw,
    canonicalNormalized: normalizeUrl(canonicalRaw || '', finalUrl),
    robots: robots || null,
    noindex: /noindex/i.test(robots || ''),
    nofollow: /nofollow/i.test(robots || ''),
    contentWordCount: countWords(contentText),
    hasMainLandmark: mainSpans.length > 0,
    landmarks: {
      main: mainSpans.length,
      article: articleSpans.length,
      nav: navSpans.length,
      footer: footerSpans.length,
      header: headerSpans.length,
    },
    jsonLd: {
      blocks: blockCount,
      types: [...new Set(allTypes)].sort(),
      articleCount: articleNodeCount,
      hasArticle: articleNodeCount > 0,
      duplicateArticle: articleNodeCount > 1,
      hasBreadcrumbList: allTypes.includes('BreadcrumbList'),
      hasFaqPage: allTypes.includes('FAQPage'),
      unparseableBlocks: allTypes.filter((t) => t === '__UNPARSEABLE__').length,
    },
    cta: {
      inBodyCtaPresent: ctaStringHits > 0,
      matches: ctaMatches,
      totalStringHits: ctaStringHits,
      contentIntakeLinks: ctaLinkTargets,
      hasContentIntakeLink: ctaLinkTargets.length > 0,
    },
    links,
    externalLinks,
  };
}

/* ------------------------------------------------------------------ seeding */

async function seedUrls() {
  const sitemapUrl = `${BASE}/sitemap.xml`;
  try {
    const { response } = await fetchPage(sitemapUrl);
    if (!response || response.status !== 200) throw new Error(`sitemap HTTP ${response ? response.status : 'error'}`);
    const xml = response.body.toString('utf8');
    const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => decodeEntities(m[1]));
    const urls = [...new Set(locs.map((l) => normalizeUrl(l, BASE)).filter(isInternal))];
    if (!urls.length) throw new Error('sitemap parsed but held no internal <loc> entries');
    console.log(`sitemap: ${locs.length} <loc> entries -> ${urls.length} unique internal URLs`);
    return { urls, source: 'sitemap.xml', sitemapCount: locs.length, fallbackUsed: false };
  } catch (err) {
    console.warn(`sitemap fetch/parse failed (${err.message}); falling back to a BFS crawl from /`);
    return { urls: [normalizeUrl('/', BASE)], source: 'bfs-from-root (sitemap failed)', sitemapCount: 0, fallbackUsed: true };
  }
}

/* ------------------------------------------------------------------ crawl */

async function crawl() {
  const startedAt = new Date();
  const seed = await seedUrls();
  const queue = LIMIT ? seed.urls.slice(0, LIMIT) : seed.urls.slice();
  const queued = new Set(queue);
  const pages = [];
  let cursor = 0;
  let done = 0;
  let active = 0;

  async function worker(id) {
    for (;;) {
      // Claim an index only when one really exists. Doing `cursor++` unconditionally would
      // burn a slot that BFS later fills, silently dropping that URL from the crawl.
      if (cursor >= queue.length) {
        if (active === 0) return; // no peer is running, so nothing more can be enqueued
        await sleep(50);          // a peer is mid-request and may still enqueue
        continue;
      }
      const index = cursor++;
      active++;
      try {
      const url = queue[index];
      const t0 = Date.now();
      const { response, chain, initialStatus, finalUrl, error } = await fetchPage(url);

      if (error || !response) {
        pages.push({
          url,
          finalUrl: finalUrl || url,
          status: 0,
          initialStatus,
          redirected: false,
          redirectChain: chain,
          error: error || 'no response',
        });
      } else {
        const contentType = response.headers.get('content-type') || '';
        const bytes = response.body.length;
        const record = {
          url,
          finalUrl: normalizeUrl(finalUrl, BASE) || finalUrl,
          status: response.status,
          initialStatus,
          redirected: chain.length > 0,
          redirectChain: chain,
          contentType,
          bytes,
          fetchMs: Date.now() - t0,
        };
        if (response.status === 200 && /html/i.test(contentType)) {
          Object.assign(record, parsePage(response.body.toString('utf8'), finalUrl));
          // BFS fallback: discover more URLs from what we just read.
          if (seed.fallbackUsed && !LIMIT) {
            for (const link of record.links) {
              if (link.target && !queued.has(link.target)) {
                queued.add(link.target);
                queue.push(link.target);
              }
            }
          }
        } else {
          record.skippedParse = true;
        }
        pages.push(record);
      }

      done++;
      if (done % 25 === 0 || done === queue.length) {
        process.stdout.write(`  crawled ${done}/${queue.length}\n`);
      }
      await sleep(DELAY_MS + extraDelay);
      } finally {
        active--;
      }
    }
  }

  console.log(`crawling ${queue.length} URLs from ${BASE} (${CONCURRENCY} workers, ${DELAY_MS}ms delay)`);
  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i)));
  pages.sort((a, b) => a.url.localeCompare(b.url));
  return { pages, seed, startedAt, finishedAt: new Date() };
}

/* ------------------------------------------------------------------ analysis */

function analyse(pages) {
  const ok = pages.filter((p) => p.status === 200 && !p.skippedParse && p.links);
  const crawledSet = new Set(pages.map((p) => normalizeUrl(p.url, BASE)));

  // Ubiquity is measured on CONTENT-area links only, on purpose. Measuring it across all
  // areas was wrong: a page that also sits in the site nav (so its href appears on all 328
  // pages) would have had its genuine editorial inbound links discarded and been reported
  // as an orphan. What carries no signal is a link that is TEMPLATED INTO the body of
  // nearly every page - e.g. the /#qualify CTA row - and that is what this catches.
  const hrefPageCount = new Map();
  for (const page of ok) {
    const targets = new Set(
      page.links.filter((l) => l.area === 'content').map((l) => l.target).filter(Boolean),
    );
    for (const target of targets) {
      hrefPageCount.set(target, (hrefPageCount.get(target) || 0) + 1);
    }
  }
  const ubiquitous = new Set(
    [...hrefPageCount.entries()]
      .filter(([, n]) => ok.length > 0 && n / ok.length > UBIQUITY_THRESHOLD)
      .map(([href]) => href),
  );

  const inbound = new Map();   // target -> Set(source) content links, ubiquitous excluded
  const inboundAll = new Map(); // target -> Set(source) content links, nothing excluded
  const inboundBoilerplate = new Map();
  const ensure = (map, key) => {
    if (!map.has(key)) map.set(key, new Set());
    return map.get(key);
  };
  for (const page of pages) if (page.links) {
    const self = normalizeUrl(page.finalUrl || page.url, BASE);
    for (const link of page.links) {
      if (!link.target) continue;
      if (link.target === self) continue; // self-links are not inbound signal
      if (link.area === 'content') {
        ensure(inboundAll, link.target).add(self);
        if (!ubiquitous.has(link.target)) ensure(inbound, link.target).add(self);
      } else {
        ensure(inboundBoilerplate, link.target).add(self);
      }
    }
  }

  const rows = pages.map((page) => {
    const key = normalizeUrl(page.finalUrl || page.url, BASE);
    const contentLinks = (page.links || []).filter((l) => l.area === 'content');
    return {
      url: key,
      path: pathOf(key),
      status: page.status,
      section: sectionOf(key),
      words: page.contentWordCount ?? null,
      inboundContent: (inbound.get(key) || new Set()).size,
      inboundContentIncludingUbiquitous: (inboundAll.get(key) || new Set()).size,
      inboundBoilerplate: (inboundBoilerplate.get(key) || new Set()).size,
      outboundContent: new Set(contentLinks.map((l) => l.target).filter((t) => t && t !== key)).size,
      outboundContentToCrawled: new Set(
        contentLinks.map((l) => l.target).filter((t) => t && t !== key && crawledSet.has(t)),
      ).size,
      ubiquityFlagged: ubiquitous.has(key),
      inBodyCta: page.cta ? page.cta.inBodyCtaPresent : null,
      contentIntakeLink: page.cta ? page.cta.hasContentIntakeLink : null,
      duplicateArticle: page.jsonLd ? page.jsonLd.duplicateArticle : null,
      hasArticle: page.jsonLd ? page.jsonLd.hasArticle : null,
      hasBreadcrumb: page.jsonLd ? page.jsonLd.hasBreadcrumbList : null,
      hasFaq: page.jsonLd ? page.jsonLd.hasFaqPage : null,
      canonical: page.canonicalNormalized ?? null,
      canonicalMismatch: page.canonicalNormalized ? page.canonicalNormalized !== key : null,
      noindex: page.noindex ?? null,
      bytes: page.bytes ?? null,
    };
  });

  return { rows, ubiquitous: [...ubiquitous].sort(), okCount: ok.length, hrefPageCount };
}

/* ------------------------------------------------------------------ report */

function table(headers, rowsOfCells) {
  const lines = [`| ${headers.join(' | ')} |`, `|${headers.map(() => '---').join('|')}|`];
  for (const cells of rowsOfCells) lines.push(`| ${cells.join(' | ')} |`);
  return lines.join('\n');
}

function buildSummary({ pages, seed, startedAt, finishedAt }, analysis) {
  const { rows, ubiquitous, okCount } = analysis;
  const parsed = rows.filter((r) => r.status === 200 && r.words !== null);
  const nonOk = rows.filter((r) => r.status !== 200);
  // A page whose own URL trips the ubiquity rule is templated INTO every body (in practice
  // just `/`, via the in-body /#qualify CTA). Its primary inbound count is 0 by construction,
  // so ranking it as an orphan would be backwards. Held out and reported separately.
  const rankable = parsed.filter((r) => !r.ubiquityFlagged);
  const heldOut = parsed.filter((r) => r.ubiquityFlagged);
  const byInbound = rankable.slice().sort((a, b) => b.inboundContent - a.inboundContent || a.path.localeCompare(b.path));
  const orphansFirst = rankable.slice().sort((a, b) => a.inboundContent - b.inboundContent || a.path.localeCompare(b.path));
  const zeroInbound = rankable.filter((r) => r.inboundContent === 0);
  const zeroInboundEvenWithBoilerplate = rankable.filter((r) => r.inboundContentIncludingUbiquitous === 0);

  const noCta = parsed.filter((r) => r.inBodyCta === false);
  const noCtaAndNoIntakeLink = parsed.filter((r) => r.inBodyCta === false && r.contentIntakeLink === false);
  const sectionKeys = [...SECTIONS, '(root & other)'];
  const ctaBySection = sectionKeys.map((section) => {
    const inSection = parsed.filter((r) => r.section === section);
    const missing = inSection.filter((r) => r.inBodyCta === false);
    const missingBoth = inSection.filter((r) => r.inBodyCta === false && r.contentIntakeLink === false);
    return { section, total: inSection.length, missing: missing.length, missingBoth: missingBoth.length };
  });

  // Distinct anchor texts used on content-area intake links, by page count. This is what
  // makes the CTA column readable: the literal-string test alone cannot see "Get My 3 Quotes".
  const labelPages = new Map();
  for (const page of pages) {
    if (!page.links) continue;
    const key = normalizeUrl(page.finalUrl || page.url, BASE);
    const labels = new Set(
      page.links
        .filter((l) => l.area === 'content' && CTA_TARGETS.some((t) => l.rawHref === t || l.rawHref.endsWith(t)))
        .map((l) => l.anchorText),
    );
    for (const label of labels) {
      if (!labelPages.has(label)) labelPages.set(label, new Set());
      labelPages.get(label).add(key);
    }
  }
  const ctaLabelVariants = [...labelPages.entries()]
    .map(([label, set]) => [label, set.size])
    .sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])));

  const dupArticle = parsed.filter((r) => r.duplicateArticle === true);
  const canonicalMismatch = parsed.filter((r) => r.canonicalMismatch === true);
  const noCanonical = parsed.filter((r) => !r.canonical);
  const redirected = pages.filter((p) => p.redirected);
  const noBreadcrumb = parsed.filter((r) => r.hasBreadcrumb === false);
  const noArticleSchema = parsed.filter((r) => r.hasArticle === false);
  const noindexPages = parsed.filter((r) => r.noindex === true);

  const totalContentLinks = pages.reduce(
    (n, p) => n + ((p.links || []).filter((l) => l.area === 'content').length), 0);
  const totalBoilerplateLinks = pages.reduce(
    (n, p) => n + ((p.links || []).filter((l) => l.area !== 'content').length), 0);

  const date = startedAt.toISOString().slice(0, 10);
  const out = [];
  out.push(`# CRR internal link graph — crawl of ${date}`);
  out.push('');
  out.push(`Crawled \`${BASE}\` on ${startedAt.toISOString()} (finished ${finishedAt.toISOString()}, ` +
    `${Math.round((finishedAt - startedAt) / 1000)}s). Seed: ${seed.source}` +
    (seed.sitemapCount ? ` (${seed.sitemapCount} \`<loc>\` entries).` : '.'));
  out.push('');
  out.push('Generated by `Code/Frontend/scripts/crawl-linkgraph.mjs`. Every number below is measured from ' +
    'this crawl.');
  out.push('');
  out.push('**How a link is counted.** A link is a *content* link when it has no `<header>`, `<nav>` or ' +
    '`<footer>` ancestor — the site chrome and the breadcrumb strip are excluded, the article body ' +
    `is not. On top of that, a URL appearing in the content area of more than ${UBIQUITY_THRESHOLD * 100}% ` +
    'of pages is treated as templated boilerplate and dropped from the inbound counts; ubiquity is ' +
    'measured on content links only, so a page that merely also sits in the site nav keeps its ' +
    'editorial inbound links. Self-links do not count. Fragments are stripped when resolving a ' +
    'target, so an in-body `/#qualify` CTA resolves to `/` — which is exactly why `/` trips the ' +
    'ubiquity rule rather than looking like the best-linked page on the site.');
  out.push('');

  out.push('## 1. Coverage');
  out.push('');
  out.push(table(['Metric', 'Value'], [
    ['URLs requested', String(rows.length)],
    ['HTTP 200 and parsed as HTML', String(parsed.length)],
    ['Non-200 responses', String(nonOk.length)],
    ['Requests that went through a redirect', String(redirected.length)],
    ['Content-area internal links found (total)', String(totalContentLinks)],
    ['Boilerplate (nav/header/footer) internal links found (total)', String(totalBoilerplateLinks)],
    ['Distinct hrefs treated as boilerplate by the >80% rule', String(ubiquitous.length)],
    ['Pages with `noindex`', String(noindexPages.length)],
  ]));
  out.push('');
  if (nonOk.length) {
    out.push('### Non-200 responses');
    out.push('');
    out.push(table(['URL', 'Status', 'Note'], nonOk.map((r) => {
      const page = pages.find((p) => normalizeUrl(p.finalUrl || p.url, BASE) === r.url);
      return [`\`${r.path}\``, String(r.status), page && page.error ? page.error : (page && page.contentType) || ''];
    })));
  } else {
    out.push('### Non-200 responses');
    out.push('');
    out.push('None. Every requested URL returned HTTP 200.');
  }
  out.push('');
  if (redirected.length) {
    out.push('### Redirects');
    out.push('');
    out.push(table(['Requested', 'Status', 'Landed on'], redirected.slice(0, 40).map((p) => [
      `\`${pathOf(normalizeUrl(p.url, BASE))}\``,
      String(p.initialStatus),
      `\`${pathOf(normalizeUrl(p.finalUrl, BASE))}\``,
    ])));
    out.push('');
  }

  out.push('## 2. Orphans — pages with the FEWEST inbound content links');
  out.push('');
  out.push(`**${zeroInbound.length} of ${rankable.length} rankable pages have zero inbound content links.** ` +
    `${zeroInboundEvenWithBoilerplate.length} have zero even when templated/boilerplate content links are ` +
    'counted, meaning nothing but the sitemap and the site chrome points at them.');
  out.push('');
  if (heldOut.length) {
    out.push('Held out of this ranking (and out of the count above): ' +
      heldOut.map((r) => `\`${r.path}\` (${r.inboundContentIncludingUbiquitous} in-body links, templated site-wide)`).join(', ') +
      '. These trip the ubiquity rule because they are linked from nearly every page body, ' +
      'so a zero here would mean the opposite of orphaned.');
    out.push('');
  }
  out.push(table(['#', 'Path', 'Inbound content', 'Inbound incl. ubiquitous', 'Inbound boilerplate', 'Words', 'Section'],
    orphansFirst.slice(0, 25).map((r, i) => [
      String(i + 1), `\`${r.path}\``, String(r.inboundContent),
      String(r.inboundContentIncludingUbiquitous), String(r.inboundBoilerplate),
      String(r.words), r.section,
    ])));
  out.push('');
  if (zeroInbound.length > 25) {
    out.push(`<details><summary>All ${zeroInbound.length} pages with zero inbound content links</summary>`);
    out.push('');
    for (const r of zeroInbound) out.push(`- \`${r.path}\` (${r.words} words, ${r.section})`);
    out.push('');
    out.push('</details>');
    out.push('');
  }

  out.push('## 3. Pages with the MOST inbound content links');
  out.push('');
  out.push(table(['#', 'Path', 'Inbound content', 'Distinct linking pages incl. ubiquitous', 'Outbound content', 'Words'],
    byInbound.slice(0, 25).map((r, i) => [
      String(i + 1), `\`${r.path}\``, String(r.inboundContent),
      String(r.inboundContentIncludingUbiquitous), String(r.outboundContent), String(r.words),
    ])));
  out.push('');

  out.push('## 4. In-body CTA audit (Week 1 item 6)');
  out.push('');
  out.push('Measured inside the main-content region only. Both audited strings also appear in site ' +
    'chrome on every page — "Check Eligibility" in the `<header>`, "Check My Eligibility" in the ' +
    '`<footer>` — so a whole-document search would have reported 100% coverage and been useless. ' +
    'The `missing string AND no intake link` column is the honest floor: those pages have neither ' +
    'CTA label nor any content link to `/#qualify` or `/commercial-assessment`.');
  out.push('');
  out.push(`**${noCta.length} of ${parsed.length} pages have no in-body CTA string. ` +
    `${noCtaAndNoIntakeLink.length} have no in-body CTA string and no in-content intake link at all.**`);
  out.push('');
  out.push(table(['Section', 'Pages', 'Missing CTA string', 'Missing string AND no intake link'],
    ctaBySection.map((s) => [s.section, String(s.total), String(s.missing), String(s.missingBoth)])));
  out.push('');
  out.push('### Why the two columns differ: in-content CTA labels are not standardised');
  out.push('');
  out.push('Distinct anchor texts on content-area links pointing at `/#qualify` or ' +
    '`/commercial-assessment`, counted by how many pages carry each. Only the rows matching ' +
    'the two audited strings count toward the "Missing CTA string" column, which is why that ' +
    'column overstates the number of pages with no working CTA.');
  out.push('');
  out.push(table(['In-content CTA anchor text', 'Pages'],
    ctaLabelVariants.map(([label, n]) => [label ? `"${label}"` : '_(empty anchor text)_', String(n)])));
  out.push('');
  if (noCta.length) {
    out.push(`<details><summary>All ${noCta.length} pages with no in-body CTA string</summary>`);
    out.push('');
    for (const r of noCta) {
      out.push(`- \`${r.path}\`${r.contentIntakeLink ? ' (has an in-content intake link)' : ' (no in-content intake link)'}`);
    }
    out.push('');
    out.push('</details>');
    out.push('');
  }

  out.push('## 5. Structured data');
  out.push('');
  out.push(table(['Check', 'Count'], [
    ['Pages emitting more than one Article JSON-LD node', String(dupArticle.length)],
    ['Pages emitting no Article JSON-LD node', String(noArticleSchema.length)],
    ['Pages with no BreadcrumbList JSON-LD', String(noBreadcrumb.length)],
    ['Pages with FAQPage JSON-LD', String(parsed.filter((r) => r.hasFaq === true).length)],
  ]));
  out.push('');
  if (dupArticle.length) {
    out.push('### Duplicate Article JSON-LD');
    out.push('');
    for (const r of dupArticle) {
      const page = pages.find((p) => normalizeUrl(p.finalUrl || p.url, BASE) === r.url);
      out.push(`- \`${r.path}\` — ${page.jsonLd.articleCount} Article nodes across ${page.jsonLd.blocks} ld+json blocks`);
    }
  } else {
    out.push('No page emits more than one Article JSON-LD node.');
  }
  out.push('');

  out.push('## 6. Canonical tags');
  out.push('');
  out.push(`**${canonicalMismatch.length} of ${parsed.length} pages declare a canonical that is not their own URL. ` +
    `${noCanonical.length} declare no canonical at all.**`);
  out.push('');
  if (canonicalMismatch.length) {
    out.push(table(['Path', 'Canonical points to'], canonicalMismatch.map((r) => [
      `\`${r.path}\``, `\`${r.canonical}\``,
    ])));
  } else {
    out.push('Every page that declares a canonical points it at its own URL.');
  }
  out.push('');
  if (noCanonical.length) {
    out.push('Pages with no canonical tag: ' + noCanonical.map((r) => `\`${r.path}\``).join(', '));
    out.push('');
  }

  out.push('## 7. Hrefs treated as boilerplate by the >80%-of-pages rule');
  out.push('');
  out.push(`${ubiquitous.length} distinct URLs appear on more than ${UBIQUITY_THRESHOLD * 100}% of the ` +
    `${okCount} parsed pages. Links to these carry no ranking signal and are excluded from the inbound counts above.`);
  out.push('');
  for (const href of ubiquitous) out.push(`- \`${pathOf(href)}\``);
  out.push('');
  out.push('---');
  out.push('');
  out.push(`Full per-page records, including every link with its anchor text, rel and area: \`crawl-linkgraph-${date}.json\`.`);
  out.push('');
  return out.join('\n');
}

/* ------------------------------------------------------------------ main */

/** Rebuild the report from a previous run's JSON, so report tweaks cost no requests. */
function replay(path) {
  const prior = JSON.parse(readFileSync(path, 'utf8'));
  return {
    pages: prior.pages,
    seed: prior.seed,
    startedAt: new Date(prior.crawledAt),
    finishedAt: new Date(prior.finishedAt),
  };
}

async function main() {
  const from = flag('from', null);
  const result = from ? replay(from) : await crawl();
  if (from) console.log(`re-analysing ${result.pages.length} pages from ${from} (no requests sent)`);
  const analysis = analyse(result.pages);
  mkdirSync(OUT_DIR, { recursive: true });

  const date = result.startedAt.toISOString().slice(0, 10);
  const jsonPath = join(OUT_DIR, `crawl-linkgraph-${date}.json`);
  const mdPath = join(OUT_DIR, 'linkgraph-summary.md');

  writeFileSync(jsonPath, JSON.stringify({
    crawledAt: result.startedAt.toISOString(),
    finishedAt: result.finishedAt.toISOString(),
    base: BASE,
    userAgent: USER_AGENT,
    seed: result.seed,
    concurrency: CONCURRENCY,
    delayMs: DELAY_MS,
    ubiquityThreshold: UBIQUITY_THRESHOLD,
    ubiquitousHrefs: analysis.ubiquitous,
    counts: {
      requested: result.pages.length,
      ok: analysis.okCount,
      nonOk: result.pages.filter((p) => p.status !== 200).length,
    },
    metrics: analysis.rows,
    pages: result.pages,
  }), 'utf8');

  writeFileSync(mdPath, buildSummary(result, analysis), 'utf8');

  console.log(`\nwrote ${jsonPath}`);
  console.log(`wrote ${mdPath}`);

  const parsed = analysis.rows.filter((r) => r.status === 200 && r.words !== null);
  const rankable = parsed.filter((r) => !r.ubiquityFlagged);
  console.log('\n--- headline numbers ---');
  console.log(`pages requested          : ${analysis.rows.length}`);
  console.log(`HTTP 200 + parsed        : ${parsed.length}`);
  console.log(`non-200                  : ${analysis.rows.filter((r) => r.status !== 200).length}`);
  console.log(`orphans (0 inbound, of ${rankable.length}): ${rankable.filter((r) => r.inboundContent === 0).length}`);
  console.log(`no in-body CTA string    : ${parsed.filter((r) => r.inBodyCta === false).length}`);
  console.log(`no CTA string + no link  : ${parsed.filter((r) => r.inBodyCta === false && r.contentIntakeLink === false).length}`);
  console.log(`duplicate Article JSON-LD: ${parsed.filter((r) => r.duplicateArticle === true).length}`);
  console.log(`canonical mismatches     : ${parsed.filter((r) => r.canonicalMismatch === true).length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
