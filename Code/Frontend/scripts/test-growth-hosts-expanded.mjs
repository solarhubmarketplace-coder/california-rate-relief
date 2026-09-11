import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import http from 'node:http';
import { GROWTH_ROUTES } from '../src/lib/growth-routes.ts';
const domains = [
  'ratereliefca.com',
  'www.greenreviewshub.com',
  'www.securehomegear.com',
  'www.athomebiohacking.com',
  'www.glp1comparehub.com',
];
const results = [];
async function get(host, path) {
  return new Promise((resolve, reject) => {
    http
      .get(
        { hostname: '127.0.0.1', port: 3200, path, headers: { host } },
        (r) => {
          const chunks = [];
          r.on('data', (c) => chunks.push(c));
          r.on('end', () =>
            resolve(
              new Response(Buffer.concat(chunks), {
                status: r.statusCode,
                headers: r.headers,
              }),
            ),
          );
        },
      )
      .on('error', reject);
  });
}
for (const host of domains) {
  for (const route of GROWTH_ROUTES) {
    const response = await get(host, route);
    const wanted = host === 'ratereliefca.com' ? 200 : 404;
    results.push({ host, route, status: response.status, expected: wanted });
    assert.equal(response.status, wanted, host + route);
    if (wanted === 200) {
      assert.ok(!/noindex/i.test(response.headers.get('x-robots-tag') || ''));
      const html = await response.text();
      assert.ok(html.includes('https://ratereliefca.com' + route));
      assert.ok(
        !/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html),
      );
    }
  }
  const sitemap = await get(host, '/sitemap.xml');
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  assert.ok(locations.length > 0);
  assert.ok(locations.every((loc) => new URL(loc).host === host));
  for (const route of GROWTH_ROUTES)
    assert.equal(
      locations.includes('https://ratereliefca.com' + route),
      host === 'ratereliefca.com',
      host + ' sitemap ' + route,
    );
  assert.equal(
    locations.length,
    new Set(locations).size,
    host + ' sitemap duplicates',
  );
  const robots = await get(host, '/robots.txt');
  assert.equal(robots.status, 200);
  results.push({
    host,
    route: '/sitemap.xml',
    status: sitemap.status,
    urls: locations.length,
    hostIsolation: true,
    uniqueUrls: true,
    robotsStatus: robots.status,
  });
  console.log('PASS host and sitemap', host, locations.length);
}
const old = await get('ratereliefca.com', '/reviews');
assert.equal(old.status, 301);
assert.ok(old.headers.get('location').includes('greenreviewshub.com'));
const unknown = await get('ratereliefca.com', '/tools/not-a-crr-tool');
assert.equal(unknown.status, 404);
results.push({
  case: 'existing review redirect and unassigned tool exclusion',
  passed: true,
});
await fs.writeFile(
  '../../evidence/growth-review/host-review.json',
  JSON.stringify(results, null, 2),
);
