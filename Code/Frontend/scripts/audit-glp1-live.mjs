import http from 'node:http';
import https from 'node:https';

const origin = new URL(process.env.GLP1_AUDIT_ORIGIN || 'http://127.0.0.1:3000');
const glp1Host = process.env.GLP1_AUDIT_HOST || 'www.glp1comparehub.com';

const indexPaths = [
  '/',
  '/pricing',
  '/about',
  '/author/chad-simpson',
  '/methodology',
  '/affiliate-disclosure',
  '/disclaimer',
  '/privacy',
  '/terms',
  '/contact',
];

function request(path, host = glp1Host) {
  const target = new URL(path, origin);
  const transport = target.protocol === 'https:' ? https : http;

  return new Promise((resolve, reject) => {
    const req = transport.request(
      target,
      {
        method: 'GET',
        headers: {
          Host: host,
          'X-Forwarded-Host': host,
          'User-Agent': 'GLP1CompareHub-SEO-Audit/1.0',
        },
      },
      (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          resolve({
            status: res.statusCode || 0,
            headers: res.headers,
            body: Buffer.concat(chunks).toString('utf8'),
          });
        });
      }
    );
    req.on('error', reject);
    req.end();
  });
}

function canonicalFrom(html) {
  const tag = html.match(/<link\b[^>]*\brel=["']canonical["'][^>]*>/i)?.[0];
  return tag?.match(/\bhref=["']([^"']+)["']/i)?.[1];
}

function jsonLdTypes(html) {
  const types = [];
  for (const match of html.matchAll(
    /<script\b[^>]*\btype=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  )) {
    try {
      const value = JSON.parse(match[1].replaceAll('&quot;', '"'));
      const nodes = Array.isArray(value) ? value : value?.['@graph'] || [value];
      for (const node of nodes) {
        const nodeTypes = Array.isArray(node?.['@type']) ? node['@type'] : [node?.['@type']];
        types.push(...nodeTypes.filter(Boolean));
      }
    } catch {
      // Invalid JSON-LD is surfaced by the missing expected type checks below.
    }
  }
  return types;
}

const failures = [];
const pass = (message) => process.stdout.write(`PASS  ${message}\n`);
const fail = (message) => {
  failures.push(message);
  process.stderr.write(`FAIL  ${message}\n`);
};

for (const path of indexPaths) {
  const response = await request(path);
  const expectedCanonical = `https://www.glp1comparehub.com${path === '/' ? '' : path}`;
  const robotsHeader = String(response.headers['x-robots-tag'] || '');
  const cacheHeader = String(response.headers['cache-control'] || '');
  const canonical = canonicalFrom(response.body);

  response.status === 200
    ? pass(`${path} returns 200`)
    : fail(`${path} expected 200, received ${response.status}`);
  !/noindex/i.test(robotsHeader)
    ? pass(`${path} is not blocked by X-Robots-Tag`)
    : fail(`${path} unexpectedly sends ${robotsHeader}`);
  canonical === expectedCanonical
    ? pass(`${path} canonical is ${expectedCanonical}`)
    : fail(`${path} canonical expected ${expectedCanonical}, received ${canonical || 'none'}`);
  /public/i.test(cacheHeader) && /s-maxage=3600/i.test(cacheHeader) && !/(?:private|no-store)/i.test(cacheHeader)
    ? pass(`${path} is publicly cacheable at the CDN`)
    : fail(`${path} expected public CDN caching, received ${cacheHeader || 'no Cache-Control header'}`);
}

for (const path of ['/providers', '/best', '/compounded-tirzepatide']) {
  const response = await request(path);
  const robotsHeader = String(response.headers['x-robots-tag'] || '');
  response.status === 200
    ? pass(`${path} remains reachable during cleanup`)
    : fail(`${path} expected 200 during cleanup, received ${response.status}`);
  /noindex/i.test(robotsHeader)
    ? pass(`${path} sends noindex`)
    : fail(`${path} is missing its noindex header`);
}

const retainedComparison = await request('/compare/directmeds-vs-gobymeds');
const retainedRobots = String(retainedComparison.headers['x-robots-tag'] || '');
retainedComparison.status === 200 && /noindex/i.test(retainedRobots)
  ? pass('registered comparison remains reachable and sends noindex')
  : fail(`registered comparison expected 200 + noindex, received ${retainedComparison.status} + ${retainedRobots || 'no header'}`);

const reverseComparison = await request('/compare/gobymeds-vs-directmeds');
const reverseLocation = new URL(String(reverseComparison.headers.location || ''), origin).pathname;
reverseComparison.status === 308 && reverseLocation === '/compare/directmeds-vs-gobymeds'
  ? pass('reverse comparison permanently redirects to its canonical ordering')
  : fail(`reverse comparison expected 308 to canonical ordering, received ${reverseComparison.status} to ${reverseLocation}`);

for (const path of [
  '/best-solar-companies-california',
  '/cameras/arlo-camera',
  '/compare/skinnyrx-vs-skinnyrx',
  '/compare/not-a-provider-vs-also-not-a-provider',
]) {
  const response = await request(path);
  response.status === 404
    ? pass(`${path} fails closed with 404`)
    : fail(`${path} expected 404, received ${response.status}`);
}

for (const [path, location] of [
  ['/medical-disclaimer', '/disclaimer'],
  ['/privacy-policy', '/privacy'],
  ['/terms-of-service', '/terms'],
]) {
  const response = await request(path);
  const actual = new URL(String(response.headers.location || ''), origin).pathname;
  response.status === 308 && actual === location
    ? pass(`${path} permanently redirects to ${location}`)
    : fail(`${path} expected 308 to ${location}, received ${response.status} to ${actual}`);
}

const sitemap = await request('/sitemap.xml');
const sitemapUrls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedSitemapUrls = indexPaths.map(
  (path) => `https://www.glp1comparehub.com${path === '/' ? '' : path}`
);

sitemap.status === 200
  ? pass('/sitemap.xml returns 200')
  : fail(`/sitemap.xml expected 200, received ${sitemap.status}`);
JSON.stringify(sitemapUrls) === JSON.stringify(expectedSitemapUrls)
  ? pass('sitemap contains exactly the ten approved URLs in registry order')
  : fail(`sitemap URLs differ: ${JSON.stringify(sitemapUrls)}`);
!/<lastmod>/i.test(sitemap.body)
  ? pass('sitemap contains no fabricated lastmod values')
  : fail('sitemap contains lastmod values without a verified editorial date');

const robots = await request('/robots.txt');
robots.status === 200
  ? pass('/robots.txt returns 200')
  : fail(`/robots.txt expected 200, received ${robots.status}`);
!/Disallow:\s*\/$/im.test(robots.body)
  ? pass('/robots.txt does not block the site root')
  : fail('/robots.txt blocks crawling of the site root');
/Sitemap:\s*https:\/\/www\.glp1comparehub\.com\/sitemap\.xml/i.test(robots.body)
  ? pass('/robots.txt names the canonical GLP-1 sitemap')
  : fail('/robots.txt is missing the canonical GLP-1 sitemap URL');

const json = await request('/pricing/data.json');
let parsed;
try {
  parsed = JSON.parse(json.body);
} catch {
  parsed = null;
}
json.status === 200 && parsed?.records?.length === 5
  ? pass('/pricing/data.json exposes five source records')
  : fail('/pricing/data.json is missing or does not expose five records');

const csv = await request('/pricing/data.csv');
csv.status === 200 && /^"provider",/m.test(csv.body) && csv.body.trim().split('\n').length === 6
  ? pass('/pricing/data.csv exposes a header plus five records')
  : fail('/pricing/data.csv is missing or malformed');

for (const host of [
  'ratereliefca.com',
  'greenreviewshub.com',
  'securehomegear.com',
  'athomebiohacking.com',
]) {
  const response = await request('/pricing', host);
  response.status === 404
    ? pass(`GLP-1 pricing does not leak onto ${host}`)
    : fail(`GLP-1 pricing leaked onto ${host} with ${response.status}`);
}

const home = await request('/');
for (const path of indexPaths.filter((path) => path !== '/')) {
  const escapedPath = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  new RegExp(`href=["']${escapedPath}["']`, 'i').test(home.body)
    ? pass(`homepage links to approved URL ${path}`)
    : fail(`homepage is missing an internal link to ${path}`);
}
const homeSchemaTypes = jsonLdTypes(home.body);
homeSchemaTypes.filter((type) => type === 'Organization').length === 1
  ? pass('homepage emits exactly one Organization schema entity')
  : fail(`homepage Organization schema count is ${homeSchemaTypes.filter((type) => type === 'Organization').length}`);
homeSchemaTypes.filter((type) => type === 'WebSite').length === 1
  ? pass('homepage emits exactly one WebSite schema entity')
  : fail(`homepage WebSite schema count is ${homeSchemaTypes.filter((type) => type === 'WebSite').length}`);
!homeSchemaTypes.some((type) => type === 'MedicalBusiness' || type === 'SearchAction')
  ? pass('homepage omits misleading MedicalBusiness and SearchAction schema')
  : fail(`homepage includes forbidden schema types: ${homeSchemaTypes.join(', ')}`);

const pricingSchemaTypes = jsonLdTypes((await request('/pricing')).body);
pricingSchemaTypes.includes('Dataset')
  ? pass('pricing page emits Dataset schema')
  : fail('pricing page is missing Dataset schema');

if (failures.length) {
  process.stderr.write(`\n${failures.length} GLP-1 SEO audit check(s) failed.\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(`\nAll GLP-1 SEO audit checks passed against ${origin}.\n`);
}
