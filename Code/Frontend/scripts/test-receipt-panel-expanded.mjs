import { build } from 'esbuild';
import { chromium, expect } from '@playwright/test';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const out = '../../evidence/growth-review';
const built = await build({
  entryPoints: ['scripts/receipt-panel.fixture.tsx'],
  bundle: true,
  write: false,
  platform: 'browser',
  jsx: 'automatic',
  define: {
    'process.env.NODE_ENV': '"development"',
    'process.env.NEXT_PUBLIC_API_URL': '"http://127.0.0.1:3101/api"',
    'process.env.NEXT_PUBLIC_SUPABASE_URL': '""',
    'process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY': '""',
  },
});
const html = await (
  await fetch('http://localhost:3100/tools/solar-panel-calculator')
).text();
const cssPaths = [...html.matchAll(/href="([^" ]+\.css[^" ]*)"/g)].map(
  (m) => m[1],
);
const css = (
  await Promise.all(
    cssPaths.map((p) =>
      fetch('http://localhost:3100' + p).then((r) => r.text()),
    ),
  )
).join('\n');
const template = {
  from: '2026-09-01T07:00:00Z',
  to_exclusive: '2026-10-01T07:00:00Z',
  timezone: 'America/Los_Angeles',
  stored_submissions: 11,
  legacy_leads_without_submission: 6,
  durable_capture_started_at: '2026-09-10T00:30:00Z',
  excluded_tests: 1,
  excluded_spam: 1,
  unknown_origin: 2,
  non_organic: 1,
  months: [
    {
      calendar_month: '2026-09-01',
      unique_organic_stored: 5,
      owner_notification_accepted: 4,
      provider_delivery_confirmed: 3,
      receipt_confirmed: 2,
      failed: 1,
      unknown: 1,
      repeated_contact_submissions: 1,
    },
  ],
  landing_pages: [
    {
      calendar_month: '2026-09-01',
      landing_page: '/solar-companies/san-diego',
      unique_organic_stored: 3,
      receipt_confirmed: 1,
    },
    {
      calendar_month: '2026-09-01',
      landing_page: '/battery/sgip-battery-rebate-california',
      unique_organic_stored: 2,
      receipt_confirmed: 1,
    },
  ],
};
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const results = [];
try {
  for (const [size, viewport] of [
    ['desktop', { width: 1440, height: 1000 }],
    ['mobile', { width: 390, height: 844 }],
  ]) {
    const ctx = await browser.newContext({ viewport });
    const page = await ctx.newPage();
    let fail = false;
    const requests = [];
    let receiptCount = 2;
    page.on('pageerror', (error) =>
      console.log('Panel runtime error:', error.message),
    );
    page.on('console', (message) => {
      if (message.type() === 'error')
        console.log('Panel console:', message.text());
    });
    await ctx.route('**/*', async (r) => {
      const request = r.request();
      const url = new URL(request.url());
      if (url.hostname === 'localhost' && url.port === '3102')
        return r.fulfill({
          contentType: 'text/html',
          body: '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"/></head><body><div id="fixture"></div></body></html>',
        });
      if (url.hostname !== '127.0.0.1') return r.abort();
      if (request.method() === 'OPTIONS')
        return r.fulfill({
          status: 204,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST',
          },
        });
      requests.push({
        path: url.pathname,
        query: Object.fromEntries(url.searchParams),
        method: request.method(),
        body: request.postDataJSON(),
      });
      if (fail)
        return r.fulfill({
          status: 503,
          contentType: 'application/json',
          headers: { 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({
            message: 'Local simulated database unavailable',
          }),
        });
      if (request.method() === 'POST') receiptCount = 3;
      const report = {
        ...template,
        months: [{ ...template.months[0], receipt_confirmed: receiptCount }],
        landing_pages: template.landing_pages.map((row, index) => ({
          ...row,
          receipt_confirmed: index === 0 ? receiptCount - 1 : 1,
        })),
      };
      assert.equal(report.landing_pages.reduce((sum, row) => sum + row.receipt_confirmed, 0), receiptCount);
      return r.fulfill({
        status: 200,
        contentType: 'application/json',
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({
          data: request.method() === 'POST' ? { id: 'local-evidence' } : report,
        }),
      });
    });
    await page.goto('http://localhost:3102/');
    await page.evaluate((css) => {
      const style = document.createElement('style');
      style.textContent = css;
      document.head.appendChild(style);
    }, css);
    await page.addScriptTag({ content: built.outputFiles[0].text });
    await expect(
      page.getByText('Unique organic stored', { exact: true }),
    ).toBeVisible();
    await page.getByLabel('Pacific month').fill('2026-03');
    await expect
      .poll(() => requests.at(-1)?.query?.from)
      .toBe('2026-03-01T08:00:00.000Z');
    assert.equal(requests.at(-1).query.to, '2026-04-01T07:00:00.000Z');
    await page.getByLabel('Pacific month').fill('2026-09');
    await page
      .getByText('Record a verified business inbox receipt', { exact: true })
      .click();
    await page
      .getByLabel('Submission UUID', { exact: true })
      .fill('123e4567-e89b-42d3-a456-426614174000');
    await page
      .getByLabel('Inbox message reference', { exact: true })
      .fill('LOCAL-INBOX-FIXTURE');
    await page
      .getByLabel('Receipt time (your local timezone)', { exact: true })
      .fill('2026-09-09T14:20');
    await page.getByRole('button', { name: 'Save receipt evidence' }).click();
    await expect(
      page.getByLabel('Submission UUID', { exact: true }),
    ).toHaveValue('');
    const post = requests.find((r) => r.method === 'POST');
    assert.equal(post.body.evidence_reference, 'LOCAL-INBOX-FIXTURE');
    assert.ok(
      post.path.endsWith('/123e4567-e89b-42d3-a456-426614174000/receipt'),
    );
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth + 1,
    );
    assert.equal(overflow, false);
    await page.screenshot({
      path: out + `/screenshots/${size}-private-receipt-panel.png`,
      fullPage: true,
    });
    fail = true;
    await page.getByRole('button', { name: 'Refresh counts' }).click();
    await expect(page.getByRole('alert')).toContainText(
      'unavailable counts are not zero',
    );
    await expect(
      page.getByText('Unique organic stored', { exact: true }),
    ).toHaveCount(0);
    results.push({
      size,
      passed: true,
      DSTRangeCorrect: true,
      receiptPostCaptured: true,
      unavailableNotZero: true,
      overflow,
      mode: 'actual React panel; mocked HTTP report/write; SQL and authorization verified separately',
    });
    await ctx.close();
    console.log('PASS private receipt panel', size);
  }
} finally {
  await fs.writeFile(
    out + '/receipt-panel-review.json',
    JSON.stringify(results, null, 2),
  );
  await browser.close();
}
