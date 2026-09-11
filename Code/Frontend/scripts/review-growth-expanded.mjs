import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';
import { GROWTH_ROUTES } from '../src/lib/growth-routes.ts';
const out = path.resolve('../../evidence/growth-review/screenshots');
await fs.mkdir(out, { recursive: true });
const routes = GROWTH_ROUTES;
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const results = [];
for (const [size, viewport] of [
  ['desktop', { width: 1440, height: 1000 }],
  ['mobile', { width: 390, height: 844 }],
]) {
  const context = await browser.newContext({ viewport });
  await context.route('**/*', (route) =>
    new URL(route.request().url()).hostname === 'localhost' ||
    new URL(route.request().url()).hostname === '127.0.0.1'
      ? route.continue()
      : route.abort(),
  );
  const page = await context.newPage();
  for (const route of routes) {
    const errors = [];
    const onError = (error) => errors.push(error.message);
    page.on('pageerror', onError);
    const response = await page.goto('http://localhost:3100' + route, {
      waitUntil: 'networkidle',
      timeout: 120000,
    });
    await page.locator('h1').waitFor();
    const canonical = await page
      .locator('link[rel=canonical]')
      .getAttribute('href');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth + 1,
    );
    const invalidLinks = await page
      .locator('a[href="#"],a:not([href])')
      .count();
    const schema = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents();
    const forbidden = await page
      .locator('main')
      .innerText()
      .then((s) =>
        /our installers|our partner|Qcells|Axia|8-12 cents|confirm service.*active.*licenses/i.test(
          s,
        ),
      );
    const filename = `${size}-${route.slice(1).replaceAll('/', '--')}.png`;
    await page.screenshot({ path: path.join(out, filename), fullPage: true });
    results.push({
      route,
      size,
      status: response.status(),
      canonical,
      overflow,
      invalidLinks,
      hasInquiry: (await page.locator('#solar-inquiry').count()) === 1,
      inquiryBox: await page.locator('#solar-inquiry').boundingBox(),
      h1Count: await page.locator('h1').count(),
      schemaValid: schema.every((s) => {
        try {
          JSON.parse(s);
          return true;
        } catch {
          return false;
        }
      }),
      forbidden,
      errors,
      screenshot: filename,
    });
    page.off('pageerror', onError);
    console.log(size, route, response.status(), overflow ? 'OVERFLOW' : 'OK');
  }
  await context.close();
}
await fs.writeFile(
  path.resolve('../../evidence/growth-review/render-review.json'),
  JSON.stringify(results, null, 2),
);
await browser.close();
if (
  results.some(
    (r) =>
      r.status !== 200 ||
      r.canonical !== `https://ratereliefca.com${r.route}` ||
      r.overflow ||
      r.invalidLinks ||
      !r.hasInquiry ||
      r.h1Count !== 1 ||
      !r.schemaValid ||
      r.forbidden ||
      r.errors.length,
  )
)
  process.exitCode = 1;
