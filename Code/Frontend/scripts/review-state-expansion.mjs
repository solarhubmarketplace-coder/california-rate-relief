import { chromium, expect } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';

const base = process.env.CRR_REVIEW_BASE || 'http://localhost:3311';
const output = process.env.CRR_REVIEW_OUT || '../../evidence/state-expansion-review.json';
const cases = [
  ['/new-jersey/solar-cost', 'NJ', 'pseg'],
  ['/new-jersey/solar-companies', 'NJ', 'pseg'],
  ['/maryland/solar-cost', 'MD', 'bge'],
  ['/maryland/solar-companies', 'MD', 'bge'],
];

const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const results = [];
try {
  for (const [size, viewport] of [['desktop', { width: 1440, height: 1000 }], ['mobile', { width: 390, height: 844 }]]) {
    for (const [route, market, utility] of cases) {
      const context = await browser.newContext({ viewport });
      await context.route('**/*', request => ['127.0.0.1', 'localhost'].includes(new URL(request.request().url()).hostname) ? request.continue() : request.abort());
      const page = await context.newPage();
      const response = await page.goto(base + route, { waitUntil: 'domcontentloaded', timeout: 30000 });
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('#solar-inquiry')).toBeVisible();
      await expect(page.locator('#solar-inquiry').getByLabel('Project state or district')).toHaveValue(market);
      await expect(page.locator('#solar-inquiry').getByLabel('Utility on your bill').locator(`option[value="${utility}"]`)).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://ratereliefca.com${route}`);
      results.push({ route, size, status: 200, market, canonical: true, form: true, passed: true });
      if ((route.endsWith('solar-cost') && size === 'mobile')) {
        const file = path.resolve(path.dirname(output), `${market.toLowerCase()}-solar-cost-mobile.png`);
        await fs.mkdir(path.dirname(file), { recursive: true });
        await page.screenshot({ path: file, fullPage: true });
      }
      await context.close();
    }
  }
  const sitemap = await fetch(base + '/sitemap.xml', { headers: { Host: 'ratereliefca.com' } });
  const sitemapText = await sitemap.text();
  expect(sitemap.status).toBe(200);
  for (const [route] of cases) expect(sitemapText).toContain(route);
  results.push({ case: 'sitemap', status: 200, routes: cases.length, passed: true });
} finally {
  await fs.mkdir(path.dirname(path.resolve(output)), { recursive: true });
  await fs.writeFile(output, JSON.stringify(results, null, 2));
  await browser.close();
}

console.log(JSON.stringify({ passed: results.length, output }));
