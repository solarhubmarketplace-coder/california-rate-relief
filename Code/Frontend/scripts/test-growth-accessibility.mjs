import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const results = [];
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const root = 'http://localhost:3100';
try {
  const ctx = await browser.newContext({
    viewport: { width: 320, height: 740 },
  });
  await ctx.route('**/*', (r) =>
    ['localhost', '127.0.0.1'].includes(new URL(r.request().url()).hostname)
      ? r.continue()
      : r.abort(),
  );
  const page = await ctx.newPage();
  await page.goto(root + '/tools/solar-panel-calculator', {
    waitUntil: 'networkidle',
  });
  const calc = page.locator('#calculator');
  await calc.getByLabel('Utility on your bill').focus();
  await page.keyboard.press('s');
  await page.keyboard.press('Tab');
  await expect(
    calc.getByLabel('California ZIP', { exact: true }),
  ).toBeFocused();
  await page.keyboard.type('10001');
  await page.keyboard.press('Tab');
  await page.keyboard.type('300.25');
  await calc.getByRole('button').click();
  await expect(calc.getByRole('alert')).toContainText('California ZIP');
  await calc.getByLabel('California ZIP', { exact: true }).fill('95814');
  await calc.getByLabel('Utility on your bill').selectOption('smud');
  await calc
    .getByLabel('Solar-only cash price ($) (optional)', { exact: true })
    .fill('18000');
  await calc
    .getByLabel('Battery cash price ($) (optional)', { exact: true })
    .fill('0');
  await calc
    .getByLabel('Quoted annual utility bill after solar ($) (optional)', {
      exact: true,
    })
    .fill('1200');
  await calc.getByRole('button').click();
  await expect(calc.getByRole('status')).toContainText('7.5 years');
  // Values are restored in both the calculator and inquiry on a later guide.
  await page.goto(root + '/solar-panels-california', {
    waitUntil: 'networkidle',
  });
  await expect(
    page
      .locator('#calculator')
      .getByLabel('Average monthly electricity bill ($)', { exact: true }),
  ).toHaveValue('300.25');
  const form = page.locator('#solar-inquiry');
  await expect(
    form.getByLabel('Average monthly electricity bill ($)', { exact: true }),
  ).toHaveValue('300.25');
  await form.getByLabel('Do you own the property?').selectOption('no');
  await form
    .getByLabel('Name', { exact: true })
    .fill('LOCAL ACCESSIBILITY FIXTURE');
  await form.getByLabel('Phone', { exact: true }).fill('9515559191');
  await form.getByRole('checkbox').check();
  const response = page.waitForResponse(
    (r) => r.url().endsWith('/api/intake') && r.request().method() === 'POST',
  );
  await form.getByRole('button', { name: 'Send my inquiry' }).focus();
  await page.keyboard.press('Enter');
  const ack = await (await response).json();
  await expect(form).toContainText('Your inquiry is saved.');
  const rows = await (await fetch('http://127.0.0.1:3101/test/stored')).json();
  const row = rows.find((r) => r.submission_id === ack.data.submission_id);
  assert.ok(row.is_test);
  assert.equal(row.qualification_data.calculator_monthly_bill, 300.25);
  assert.equal(row.qualification_data.calculator_annual_difference, 2403);
  assert.equal(row.qualification_data.homeowner, false);
  assert.equal(row.qualification_data.credit_score, 'unsure');
  results.push({
    case: 'keyboard, invalid ZIP, persisted calculator, decimal bill, non-owner and no email/credit gate',
    passed: true,
    storedTest: true,
  });
  for (const route of [
    '/tools/solar-panel-calculator',
    '/best-solar-companies-california',
    '/solar-companies/san-diego',
    '/blog/sdge-time-of-use-rates-2026',
    '/commercial-solar/sgip-battery-storage',
  ]) {
    await page.goto(root + route, { waitUntil: 'networkidle' });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth + 1,
    );
    assert.equal(overflow, false, route);
    const unlabeled = await page
      .locator('main input,main select,main button')
      .evaluateAll((nodes) =>
        nodes
          .filter(
            (n) =>
              !n.labels?.length &&
              !n.getAttribute('aria-label') &&
              !n.getAttribute('aria-labelledby') &&
              !n.textContent.trim(),
          )
          .map((n) => n.outerHTML),
      );
    assert.deepEqual(unlabeled, [], route);
    const nested = await page.locator('a button,button a').count();
    await page.screenshot({
      path:
        '../../evidence/growth-50/screenshots/narrow-' +
        route.slice(1).replaceAll('/', '--') +
        '.png',
      fullPage: true,
    });
    results.push({
      route,
      viewportWidth: 320,
      overflow,
      unlabeledControls: unlabeled.length,
      nestedInteractive: nested,
    });
  }
  await ctx.close();
} finally {
  await fs.writeFile(
    '../../evidence/growth-50/accessibility-review.json',
    JSON.stringify(results, null, 2),
  );
  await browser.close();
}
