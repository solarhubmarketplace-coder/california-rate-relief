// Read-only HTTP checks for the CRR release and shared hostname routing.
// node scripts/audit-crr-growth.mjs http://localhost:3001
// Run without an argument against production after the deployment completes.
import assert from 'node:assert/strict';

const base = process.argv[2] || 'https://ratereliefca.com';
const local = new URL(base).hostname === 'localhost' || new URL(base).hostname === '127.0.0.1';
const results = [];
const cohort = [
  '/blog/pge-vs-sce-vs-sdge-rates-compared',
  '/blog/why-is-my-pge-bill-so-high',
  '/blog/pge-time-of-use-rates-2026',
];
const commercial = [
  '/commercial-solar', '/commercial-solar/companies-california',
  '/commercial-solar/warehouse-solar-california', '/commercial-solar/multifamily-solar-california',
  '/blog/commercial-solar-installation-cost-california', '/blog/commercial-solar-financing-california',
];
const extract = (html, tag, key, value) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'gi'))]
  .map(match => Object.fromEntries([...match[0].matchAll(/([\w-]+)=["']([^"']*)["']/g)].map(attribute => [attribute[1].toLowerCase(), attribute[2]])))
  .find(attributes => attributes[key] === value);

async function page(path, host = 'ratereliefca.com') {
  const url = local ? new URL(path, base) : new URL(path, `https://${host}`);
  const response = await fetch(url, { headers: local ? { host } : {}, signal: AbortSignal.timeout(60000) });
  assert.equal(response.status, 200, `${host}${path}: expected HTTP 200`);
  return response.text();
}

for (const path of cohort) {
  const html = await page(path);
  assert.equal(extract(html, 'link', 'rel', 'canonical')?.href, `https://ratereliefca.com${path}`);
  const schemas = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  const articles = schemas.flatMap(schema => Array.isArray(schema) ? schema : schema['@graph'] || [schema]).filter(schema => schema['@type'] === 'Article');
  assert.equal(articles.length, 1, `${path}: exactly one Article schema`);
  assert.match(articles[0].dateModified, /^2026-09-09/);
  assert.match(html, /href=["']\/#qualify["']/);
  results.push({ path, status: 200, canonical: 'correct', articleSchemas: 1, residentialCTA: true });
}

for (const path of commercial) {
  const html = await page(path);
  assert.match(html, /href=["']\/commercial-assessment["']/, `${path}: commercial assessment link`);
  assert.doesNotMatch(html, /href=["']\/#qualify["']/, `${path}: no homeowner intake link`);
  results.push({ path, status: 200, commercialCTA: true });
}

const assessment = await page('/commercial-assessment');
assert.match(extract(assessment, 'meta', 'name', 'robots')?.content || '', /noindex/);
assert.match(assessment, /Company or organization/);
assert.match(assessment, /Project ZIP/);
results.push({ path: '/commercial-assessment', status: 200, noindex: true, commercialFields: true });

const ppa = await page('/blog/solar-ppa-vs-lease-california');
assert.match(ppa, /href=["']\/blog\/solar-ppa-explained-california["']/);
assert.doesNotMatch(ppa, /href=["']\/blog\/solar-ppa-explained["']/);
const sitemap = await page('/sitemap.xml');
assert.match(sitemap, /https:\/\/ratereliefca\.com\/blog\/pge-time-of-use-rates-2026/);
assert.doesNotMatch(sitemap, /https:\/\/ratereliefca\.com\/commercial-assessment/);
results.push({ path: '/sitemap.xml', status: 200, newGuideIncluded: true, intakeExcluded: true });

const dashboard = await page('/dashboard/referrals');
assert.match(extract(dashboard, 'meta', 'name', 'robots')?.content || '', /noindex/);
results.push({ path: '/dashboard/referrals', status: 200, noindex: true });

const cardResponse = await fetch(new URL('/crr-social-card', base), { signal: AbortSignal.timeout(60000) });
assert.equal(cardResponse.status, 200);
assert.match(cardResponse.headers.get('content-type') || '', /image\/png/);
const card = new Uint8Array(await cardResponse.arrayBuffer());
assert.ok(card.length > 1000);
results.push({ path: '/crr-social-card', status: 200, type: 'image/png', bytes: card.length });

for (const host of ['glp1comparehub.com', 'greenreviewshub.com', 'securehomegear.com', 'athomebiohacking.com']) {
  const html = await page('/', host);
  assert.equal(extract(html, 'link', 'rel', 'canonical')?.href?.replace(/\/$/, ''), `https://${host}`);
  assert.doesNotMatch(extract(html, 'meta', 'property', 'og:image')?.content || '', /crr-social-card/);
  results.push({ host, path: '/', status: 200, canonical: 'correct', crrCard: false });
}

console.log(JSON.stringify({ checkedAt: new Date().toISOString(), base, checks: results }, null, 2));
