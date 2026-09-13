import { chromium, expect } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';

const base = process.env.CRR_REVIEW_BASE || 'http://localhost:3311';
const route = '/commercial-solar';
const output = process.env.CRR_REVIEW_OUT || '../../evidence/commercial-solar-refresh-review.json';
const allowedHosts = new Set(['127.0.0.1', 'localhost', 'ratereliefca.com', new URL(base).hostname]);
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const results = [];

try {
  for (const [size, viewport] of [['desktop', { width: 1440, height: 1000 }], ['mobile', { width: 390, height: 844 }]]) {
    const context = await browser.newContext({ viewport });
    await context.route('**/*', request => allowedHosts.has(new URL(request.request().url()).hostname) ? request.continue() : request.abort());
    const page = await context.newPage();
    page.setDefaultTimeout(10000);
    const response = await page.goto(base + route, { waitUntil: 'commit', timeout: 30000 });
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('Commercial Solar in California');
    await expect(page.getByText('Make the savings model show its work')).toBeVisible();
    await expect(page.getByText('Issue one scope to every bidder')).toBeVisible();
    await expect(page.locator('#solar-inquiry')).toBeVisible();
    await expect(page.locator('#solar-inquiry').getByRole('link', { name: 'Request a commercial assessment' })).toHaveAttribute('href', '/commercial-assessment');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://ratereliefca.com${route}`);
    await expect(page.getByText('Sources checked September 12, 2026')).toBeVisible();
    await expect(page.getByText('915 MW', { exact: true })).toHaveCount(0);
    results.push({ route, size, status: 200, canonical: true, commercialInquiry: true, scopeChecklist: true, datedSources: true, staleMarketClaimRemoved: true, passed: true });
    if (size === 'mobile') {
      const file = path.resolve(path.dirname(output), 'commercial-solar-california-mobile.png');
      await fs.mkdir(path.dirname(file), { recursive: true });
      await page.screenshot({ path: file, fullPage: true });
    }
    await context.close();
  }
  const sitemap = await fetch(base + '/sitemap.xml', { headers: { Host: 'ratereliefca.com' } });
  const sitemapText = await sitemap.text();
  expect(sitemap.status).toBe(200);
  expect(sitemapText).toContain(route);
  results.push({ case: 'sitemap', status: 200, routes: 1, passed: true });
} finally {
  await fs.mkdir(path.dirname(path.resolve(output)), { recursive: true });
  await fs.writeFile(output, JSON.stringify(results, null, 2));
  await browser.close();
}

console.log(JSON.stringify({ passed: results.length, output }));
