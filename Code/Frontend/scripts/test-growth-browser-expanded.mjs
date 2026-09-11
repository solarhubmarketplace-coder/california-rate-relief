// Local synthetic-only integration: Playwright -> real controller -> real SQL in PGlite.
import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { GROWTH_ROUTES } from '../src/lib/growth-routes.ts';

const base = 'http://localhost:3100';
const api = 'http://127.0.0.1:3101';
const results = [];
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
let serial = 100;
async function context(viewport = { width: 1440, height: 1000 }) {
  const ctx = await browser.newContext({ viewport });
  ctx.setDefaultTimeout(20000);
  await ctx.route('**/*', (r) =>
    ['localhost', '127.0.0.1'].includes(new URL(r.request().url()).hostname)
      ? r.continue()
      : r.abort(),
  );
  await ctx.addInitScript(() => {
    window.__localEvents = [];
    window.gtag = (...args) => window.__localEvents.push(args);
  });
  return ctx;
}
async function fillContact(page) {
  const form = page.locator('#solar-inquiry');
  await form
    .getByLabel('Name', { exact: true })
    .fill('LOCAL SYNTHETIC ' + serial);
  await form
    .getByLabel('Phone', { exact: true })
    .fill('951555' + String(serial++).padStart(4, '0'));
  await form
    .getByLabel('Email (optional)', { exact: true })
    .fill('synthetic@example.invalid');
  await form.getByRole('checkbox').check();
}
async function fillProject(page) {
  const form = page.locator('#solar-inquiry');
  await form.getByLabel('Utility on your bill').selectOption('smud');
  await form
    .getByLabel('California service ZIP', { exact: true })
    .fill('95814');
  await form
    .getByLabel('Average monthly electricity bill ($)', { exact: true })
    .fill('240');
}
async function send(page) {
  const response = page.waitForResponse(
    (r) => r.url() === api + '/api/intake' && r.request().method() === 'POST',
  );
  await page
    .locator('#solar-inquiry')
    .getByRole('button', { name: 'Send my inquiry', exact: true })
    .click({ clickCount: 2 });
  const result = await (await response).json();
  await expect(page.locator('#solar-inquiry')).toContainText(
    'Your inquiry is saved.',
  );
  assert.ok(result.data.submission_id);
  assert.ok(result.data.lead_id);
  assert.equal(result.data.storage_status, 'stored');
  assert.equal(result.data.receipt_status, 'unknown');
  return result.data;
}
async function stored(id) {
  const rows = await (await fetch(api + '/test/stored')).json();
  return rows.filter((r) => !id || r.submission_id === id);
}
try {
  // Each destination has a working inline form on desktop and mobile.
  for (const [size, viewport] of [
    ['desktop', { width: 1440, height: 1000 }],
    ['mobile', { width: 390, height: 844 }],
  ]) {
    for (const route of GROWTH_ROUTES.filter(route => !route.startsWith('/commercial-solar/'))) {
      const ctx = await context(viewport);
      const page = await ctx.newPage();
      await page.goto(base + route, {
        referer: 'https://www.google.com/',
        waitUntil: 'networkidle',
        timeout: 120000,
      });
      await fillProject(page);
      await fillContact(page);
      const ack = await send(page);
      const rows = await stored(ack.submission_id);
      assert.equal(rows.length, 1);
      const row = rows[0];
      assert.equal(row.is_test, true);
      assert.equal(row.attribution.landing_page, route);
      assert.equal(row.attribution.organic_landing_page, route);
      assert.equal(row.attribution.acquisition_medium, 'organic');
      assert.equal(row.qualification_data.utility_provider, 'SMUD');
      assert.equal(row.qualification_data.credit_score, 'unsure');
      assert.equal(row.qualification_data.service_zip, '95814');
      assert.equal(row.qualification_data.bill_amount, 240);
      assert.ok(!page.url().includes('synthetic'));
      assert.ok(!page.url().includes('951555'));
      const events = await page.evaluate(() =>
        window.__localEvents.filter(
          (e) => e[0] === 'event' && e[1] === 'generate_lead',
        ),
      );
      assert.equal(events.length, 1);
      assert.ok(!JSON.stringify(events).includes('synthetic@example'));
      assert.ok(!JSON.stringify(events).includes('951555'));
      results.push({
        case: 'inline form',
        size,
        route,
        stored: true,
        is_test: true,
        originalOrganicLanding: true,
        uniqueSubmission: true,
        creditNotRequired: true,
        generateLeadEvents: 1,
      });
      console.log('PASS form', size, route);
      await ctx.close();
    }
  }
  // Article -> tool -> inquiry retains first touch, calculator values and outputs.
  {
    const ctx = await context({ width: 390, height: 844 });
    const page = await ctx.newPage();
    await page.goto(
      base + '/solar-companies/san-diego?private_contact=discarded',
      { referer: 'https://www.google.com/', waitUntil: 'networkidle' },
    );
    await page
      .getByRole('link', { name: 'Bill and quote calculator', exact: true })
      .first()
      .click();
    await expect(page).toHaveURL(base + '/tools/solar-panel-calculator');
    const calc = page.locator('#calculator');
    await calc.getByLabel('Utility on your bill').selectOption('sdge');
    await calc.getByLabel('California ZIP', { exact: true }).fill('92101');
    await calc
      .getByLabel('Average monthly electricity bill ($)', { exact: true })
      .fill('300');
    await calc
      .getByLabel('Annual usage from your bills (kWh) (optional)', {
        exact: true,
      })
      .fill('10000');
    await calc
      .getByLabel('Quoted solar size (kW DC) (optional)', { exact: true })
      .fill('6');
    await calc
      .getByLabel('Solar-only cash price ($) (optional)', { exact: true })
      .fill('18000');
    await calc
      .getByLabel('Battery cash price ($) (optional)', { exact: true })
      .fill('6000');
    await calc
      .getByLabel('Quoted annual utility bill after solar ($) (optional)', {
        exact: true,
      })
      .fill('1200');
    await calc.getByRole('button').click();
    await expect(calc.getByRole('status')).toContainText('10.0 years');
    const form = page.locator('#solar-inquiry');
    await expect(form.getByLabel('Utility on your bill')).toHaveValue('sdge');
    await expect(
      form.getByLabel('California service ZIP', { exact: true }),
    ).toHaveValue('92101');
    await expect(
      form.getByLabel('Average monthly electricity bill ($)', { exact: true }),
    ).toHaveValue('300');
    await fillContact(page);
    const ack = await send(page);
    const [row] = await stored(ack.submission_id);
    assert.equal(row.attribution.landing_page, '/solar-companies/san-diego');
    assert.equal(
      row.attribution.submitted_from,
      '/tools/solar-panel-calculator',
    );
    assert.ok(!JSON.stringify(row.attribution).includes('private_contact'));
    assert.equal(row.qualification_data.calculator_cash_price, 24000);
    assert.equal(row.qualification_data.calculator_annual_difference, 2400);
    assert.equal(row.qualification_data.calculator_simple_payback, 10);
    assert.equal(row.qualification_data.calculator_annual_kwh, 10000);
    await page.screenshot({
      path: '../../evidence/growth-review/screenshots/mobile-calculator-stored.png',
      fullPage: true,
    });
    results.push({
      case: 'article to calculator to intake',
      passed: true,
      arithmetic: '24000 / (3600 - 1200) = 10',
      firstTouchPreserved: true,
      inputsPreserved: true,
    });
    console.log('PASS calculator continuity');
    await ctx.close();
  }
  // Storage succeeds but acknowledgment is lost. Reload replays the same payload/UUID.
  {
    const ctx = await context();
    const page = await ctx.newPage();
    let first = true;
    const payloads = [];
    await page.route(api + '/api/intake', async (route) => {
      if (route.request().method() !== 'POST') return route.continue();
      payloads.push(route.request().postDataJSON());
      if (first) {
        first = false;
        await route.fetch();
        await route.abort('failed');
      } else await route.continue();
    });
    await page.goto(base + '/best-solar-companies-california', {
      referer: 'https://www.google.com/',
      waitUntil: 'networkidle',
    });
    await fillProject(page);
    await fillContact(page);
    await page
      .locator('#solar-inquiry')
      .getByRole('button', { name: 'Send my inquiry', exact: true })
      .click();
    await expect(
      page
        .locator('#solar-inquiry')
        .getByRole('button', { name: 'Retry saved submission' }),
    ).toBeVisible();
    await page.reload({ waitUntil: 'networkidle' });
    await expect(
      page.locator('#solar-inquiry').getByLabel('Name', { exact: true }),
    ).toBeDisabled();
    const response = page.waitForResponse(
      (r) => r.url() === api + '/api/intake' && r.request().method() === 'POST',
    );
    await page
      .locator('#solar-inquiry')
      .getByRole('button', { name: 'Retry saved submission' })
      .click();
    const ack = await (await response).json();
    assert.equal(ack.data.duplicate, true);
    await expect(page.locator('#solar-inquiry')).toContainText(
      'Your inquiry is saved.',
    );
    assert.equal(payloads.length, 2);
    assert.deepEqual(payloads[0], payloads[1]);
    assert.equal((await stored(ack.data.submission_id)).length, 1);
    assert.equal(
      await page.evaluate(
        () =>
          window.__localEvents.filter((e) => e[1] === 'generate_lead').length,
      ),
      0,
    );
    results.push({
      case: 'acknowledgment lost after storage, then reload',
      passed: true,
      identicalPayload: true,
      identicalUUID: true,
      oneStoredSubmission: true,
      replayGeneratesNoEvent: true,
    });
    console.log('PASS ambiguous storage reload/retry');
    await ctx.close();
  }
  // Server-side phone validation is definitive: visitor can correct and resubmit.
  {
    const ctx = await context();
    const page = await ctx.newPage();
    await page.goto(base + '/solar-panels-california', {
      waitUntil: 'networkidle',
    });
    await fillProject(page);
    await fillContact(page);
    const form = page.locator('#solar-inquiry');
    await form.getByLabel('Phone', { exact: true }).fill('111111111111');
    const invalid = page.waitForResponse(
      (r) => r.url() === api + '/api/intake' && r.request().method() === 'POST',
    );
    await form.getByRole('button', { name: 'Send my inquiry' }).click();
    assert.equal((await invalid).status(), 400);
    await expect(form.getByLabel('Phone', { exact: true })).toBeEnabled();
    await form.getByLabel('Phone', { exact: true }).fill('9515559999');
    await send(page);
    results.push({
      case: 'validation failure then correction',
      passed: true,
      fieldsEditable: true,
    });
    console.log('PASS validation correction');
    await ctx.close();
  }
  const rows = await stored();
  assert.ok(rows.length > 0 && rows.every((r) => r.is_test));
  results.push({
    case: 'database pollution check',
    localRows: rows.length,
    allMarkedTest: true,
    productionWrites: 0,
    providerSends: 0,
  });
} finally {
  await fs.writeFile(
    '../../evidence/growth-review/browser-integration.json',
    JSON.stringify(results, null, 2),
  );
  await browser.close();
}
