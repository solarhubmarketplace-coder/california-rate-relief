// Local release-review acceptance only. It never submits an intake or contacts an external host.
import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';

const routes = [
  '/solar-companies/riverside',
  '/solar-companies/san-luis-obispo',
  '/solar-companies/temecula',
  '/solar-companies/sonoma',
  '/solar-companies/ventura',
  '/solar-companies/grass-valley',
  '/solar-companies/victorville',
  '/solar-companies/petaluma',
  '/solar-companies/rancho-cucamonga',
  '/solar-companies/santa-barbara',
  '/blog/solar-panels-tile-roof-california',
  '/blog/nem-2-vs-nem-3-california',
  '/blog/nem-3-california-timeline',
  '/blog/nem-3-california-still-worth-it',
  '/blog/net-billing-vs-net-metering-california',
  '/blog/pge-rate-increase-2026',
  '/blog/free-roof-replacement-with-solar-panels-california',
  '/blog/prepaid-ppa-california-2026',
  '/blog/what-happens-to-solar-lease-when-i-sell-california',
  '/blog/commercial-solar-financing-california',
  '/blog/solar-panel-removal-reinstall-cost',
  '/blog/commercial-solar-installation-cost-california',
];
const hostStatus = (route, host) => new Promise((resolve, reject) => {
  const request = http.get({ hostname: '127.0.0.1', port: 3200, path: route, headers: { host } }, (response) => {
    response.resume();
    response.on('end', () => resolve(response.statusCode));
  });
  request.on('error', reject);
});
const siblingHosts = [
  'greenreviewshub.com',
  'securehomegear.com',
  'athomebiohacking.com',
  'glp1comparehub.com',
];
const out = path.resolve('../../evidence/next-ca/local-release-review');
await fs.mkdir(out, { recursive: true });
const results = [];
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
try {
  for (const [label, viewport] of [
    ['desktop', { width: 1440, height: 1000 }],
    ['mobile', { width: 390, height: 844 }],
  ]) {
    const context = await browser.newContext({ viewport });
    await context.route('**/*', (route) => {
      const hostname = new URL(route.request().url()).hostname;
      return ['localhost', '127.0.0.1'].includes(hostname)
        ? route.continue()
        : route.abort();
    });
    const page = await context.newPage();
    for (const route of routes) {
      const errors = [];
      const onError = (error) => errors.push(error.message);
      page.on('pageerror', onError);
      const response = await page.goto('http://127.0.0.1:3100' + route, {
        waitUntil: 'domcontentloaded', timeout: 120000,
      });
      await page.locator('h1').waitFor({ timeout: 20000 });
      const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
      const main = await page.locator('main').innerText();
      const cta = page.locator('#solar-inquiry');
      const sourceLinks = await page.locator('main a[href^="http"]').count();
      const inquiryText = await cta.innerText();
      const result = {
        route,
        viewport: label,
        status: response.status(),
        canonical: await page.locator('link[rel="canonical"]').getAttribute('href'),
        h1Count: await page.locator('h1').count(),
        noindex: await page.locator('meta[name="robots"][content*="noindex"]').count(),
        overflow: await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
        invalidLinks: await page.locator('main a[href="#"],main a:not([href])').count(),
        sourceLinks,
        inquiryCount: await cta.count(),
        privateReferral: /private (solar )?referral service/i.test(main) || /information for a solar referral/i.test(inquiryText),
        reviewCta: /request (a )?(solar|commercial) (review|assessment)/i.test(main) || /want to discuss your solar options|discuss a commercial solar project/i.test(inquiryText),
        schemaValid: schemas.every((schema) => {
          try { JSON.parse(schema); return true; } catch { return false; }
        }),
        forbidden: /our installers|our partner|confirm service.*active.*licenses|Qcells|Axia|8-12 cents/i.test(main),
        errors,
      };
      const filename = `${label}-${route.slice(1).replaceAll('/', '--')}.png`;
      await page.screenshot({ path: path.join(out, filename), fullPage: true });
      result.screenshot = filename;
      results.push(result);
      console.log(label, route, result.status, result.overflow ? 'OVERFLOW' : 'PASS');
      page.off('pageerror', onError);
    }
    await context.close();
  }
} finally {
  await browser.close();
}
const hostChecks = [];
for (const route of routes) {
  const crrStatus = await hostStatus(route, 'ratereliefca.com');
  assert.equal(crrStatus, 200, `CRR host must serve ${route}`);
  hostChecks.push({ route, host: 'ratereliefca.com', status: crrStatus });
  for (const host of siblingHosts) {
    const status = await hostStatus(route, host);
    assert.equal(status, 404, `${host} must not serve ${route}`);
    hostChecks.push({ route, host, status });
  }
}
await fs.writeFile(path.join(out, 'LOCAL_RELEASE_REVIEW.json'), JSON.stringify({
  scope: 'Local built frontend only; external requests blocked; no form submission attempted.',
  routes, results, hostChecks,
}, null, 2));
const failures = results.filter((result) =>
  result.status !== 200 ||
  result.canonical !== `https://ratereliefca.com${result.route}` ||
  result.h1Count !== 1 || result.noindex !== 0 || result.overflow ||
  result.invalidLinks !== 0 || result.sourceLinks < 1 || result.inquiryCount !== 1 ||
  !result.privateReferral || !result.reviewCta || !result.schemaValid ||
  result.forbidden || result.errors.length,
);
assert.equal(failures.length, 0, JSON.stringify(failures, null, 2));