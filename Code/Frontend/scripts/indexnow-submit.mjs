// Push new/changed URLs to IndexNow (Bing, Yandex, Seznam, Naver) after a publish.
// Google does not participate in IndexNow — sitemap.xml still owns Google discovery.
//
//   INDEXNOW_SECRET=… node scripts/indexnow-submit.mjs https://ratereliefca.com/blog/foo
//   INDEXNOW_SECRET=… node scripts/indexnow-submit.mjs --from-sitemap --since 2026-09-01
//   node scripts/indexnow-submit.mjs --from-sitemap --dry-run          # no secret needed
//
// Flags:
//   --base <url>        Site to submit for. Default https://ratereliefca.com.
//   --from-sitemap      Read URLs from <base>/sitemap.xml instead of argv.
//   --since <ISO date>  With --from-sitemap, keep only entries whose <lastmod>
//                       is on or after this date. Without it, every URL is sent.
//   --dry-run           Print the URLs and exit without calling the endpoint.
//
// This script talks to the DEPLOYED /api/indexnow endpoint (which holds
// INDEXNOW_KEY server-side), so it needs INDEXNOW_SECRET — not the key.
// Exits non-zero on failure so a deploy pipeline can notice.
import process from 'node:process';

const argv = process.argv.slice(2);
const flag = (name) => argv.includes(name);
const value = (name, fallback) => {
  const i = argv.indexOf(name);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : fallback;
};

const base = value('--base', 'https://ratereliefca.com').replace(/\/+$/, '');
const dryRun = flag('--dry-run');
const since = value('--since', null);
const positional = argv.filter((arg, i) => {
  if (arg.startsWith('--')) return false;
  return !['--base', '--since'].includes(argv[i - 1]);
});

function fail(message) {
  console.error(`[indexnow] ${message}`);
  process.exit(1);
}

async function urlsFromSitemap() {
  const sitemapUrl = `${base}/sitemap.xml`;
  const res = await fetch(sitemapUrl, { cache: 'no-store' });
  if (!res.ok) fail(`${sitemapUrl} returned HTTP ${res.status}`);
  const xml = await res.text();

  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => {
    const loc = match[1].match(/<loc>\s*([\s\S]*?)\s*<\/loc>/);
    const lastmod = match[1].match(/<lastmod>\s*([\s\S]*?)\s*<\/lastmod>/);
    return { loc: loc ? loc[1] : null, lastmod: lastmod ? lastmod[1] : null };
  }).filter((entry) => entry.loc);

  if (entries.length === 0) fail(`No <loc> entries found in ${sitemapUrl}`);
  if (!since) return entries.map((entry) => entry.loc);

  const cutoff = new Date(since);
  if (Number.isNaN(cutoff.getTime())) fail(`--since "${since}" is not a parseable date`);
  const kept = entries.filter((entry) => entry.lastmod && new Date(entry.lastmod) >= cutoff);
  console.log(`[indexnow] ${kept.length} of ${entries.length} sitemap URLs have lastmod >= ${since}`);
  return kept.map((entry) => entry.loc);
}

const urls = flag('--from-sitemap') ? await urlsFromSitemap() : positional;

if (urls.length === 0) {
  fail('No URLs to submit. Pass URLs as arguments or use --from-sitemap.');
}

console.log(`[indexnow] ${urls.length} URL(s) for ${base}:`);
for (const url of urls.slice(0, 20)) console.log(`  ${url}`);
if (urls.length > 20) console.log(`  … and ${urls.length - 20} more`);

if (dryRun) {
  console.log('[indexnow] --dry-run: nothing submitted.');
  process.exit(0);
}

const secret = (process.env.INDEXNOW_SECRET || '').trim();
if (!secret) {
  fail('INDEXNOW_SECRET is not set. The endpoint fails closed (503) without it.');
}

const endpoint = `${base}/api/indexnow`;
const res = await fetch(endpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'x-indexnow-secret': secret },
  body: JSON.stringify({ urls }),
});
const body = await res.json().catch(() => null);

console.log(`[indexnow] ${endpoint} → HTTP ${res.status}`, body);
if (!res.ok || !body || body.ok !== true) {
  fail('Submission did not succeed. See the response above.');
}
console.log(`[indexnow] Done. ${body.submitted} URL(s) in ${body.batches} batch(es).`);
