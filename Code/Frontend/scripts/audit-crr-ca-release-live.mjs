const routes = [
  '/solar-companies/riverside', '/solar-companies/san-luis-obispo', '/solar-companies/temecula',
  '/solar-companies/sonoma', '/solar-companies/ventura', '/solar-companies/grass-valley',
  '/solar-companies/victorville', '/solar-companies/petaluma', '/solar-companies/rancho-cucamonga',
  '/solar-companies/santa-barbara', '/blog/solar-panels-tile-roof-california',
  '/blog/nem-2-vs-nem-3-california', '/blog/nem-3-california-timeline',
  '/blog/nem-3-california-still-worth-it', '/blog/net-billing-vs-net-metering-california',
  '/blog/pge-rate-increase-2026', '/blog/free-roof-replacement-with-solar-panels-california',
  '/blog/prepaid-ppa-california-2026', '/blog/what-happens-to-solar-lease-when-i-sell-california',
  '/blog/commercial-solar-financing-california', '/blog/solar-panel-removal-reinstall-cost',
  '/blog/commercial-solar-installation-cost-california',
];
const devices = {
  desktop: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128.0 Safari/537.36',
  mobile: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148',
};
const siblings = ['www.greenreviewshub.com', 'www.securehomegear.com', 'www.athomebiohacking.com', 'www.glp1comparehub.com'];

function canonical(html) {
  return html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1]
    || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1]
    || null;
}

async function get(url, userAgent = devices.desktop) {
  const response = await fetch(url, { redirect: 'manual', headers: { 'user-agent': userAgent }, signal: AbortSignal.timeout(20000) });
  return { status: response.status, body: await response.text(), headers: Object.fromEntries(response.headers.entries()) };
}

async function main() {
  const sitemap = await get('https://ratereliefca.com/sitemap.xml');
  const robots = await get('https://ratereliefca.com/robots.txt');
  const results = [];
  for (const route of routes) {
    const expectedCanonical = `https://ratereliefca.com${route}`;
    for (const [device, ua] of Object.entries(devices)) {
      const page = await get(expectedCanonical, ua);
      results.push({
        route, device, status: page.status,
        canonical: canonical(page.body),
        indexable: !/noindex/i.test(page.headers['x-robots-tag'] || '') && !/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(page.body),
        inquiry: page.body.includes('id="solar-inquiry"'),
        in_sitemap: sitemap.body.includes(`<loc>${expectedCanonical}</loc>`),
      });
    }
  }
  const sibling = [];
  for (const host of siblings) {
    for (const route of routes) sibling.push({ host, route, status: (await get(`https://${host}${route}`)).status });
  }
  const failures = [
    ...results.filter(x => x.status !== 200 || x.canonical !== `https://ratereliefca.com${x.route}` || !x.indexable || !x.inquiry || !x.in_sitemap),
    ...sibling.filter(x => x.status !== 404),
  ];
  const output = {
    checked_at: new Date().toISOString(), routes: routes.length, device_checks: results.length,
    sibling_isolation_checks: sibling.length, sitemap_status: sitemap.status,
    robots_status: robots.status, robots_names_sitemap: robots.body.includes('https://ratereliefca.com/sitemap.xml'),
    failures: failures.length, passed: failures.length === 0 && sitemap.status === 200 && robots.status === 200,
    results, sibling,
  };
  process.stdout.write(JSON.stringify(output, null, 2));
  if (!output.passed) process.exitCode = 1;
}

main().catch(error => { console.error(error.message); process.exit(1); });
