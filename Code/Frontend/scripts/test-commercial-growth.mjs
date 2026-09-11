import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const base = 'http://localhost:3100';
const api = 'http://127.0.0.1:3101';
const results = [];
async function setup(viewport) {
  const ctx = await browser.newContext({ viewport });
  await ctx.route('**/*', r => ['localhost','127.0.0.1'].includes(new URL(r.request().url()).hostname) ? r.continue() : r.abort());
  await ctx.addInitScript(() => { window.__localEvents = []; window.gtag = (...args) => window.__localEvents.push(args); });
  const page = await ctx.newPage();
  await page.goto(base + '/commercial-solar/companies-california', { referer: 'https://www.google.com/', waitUntil: 'networkidle' });
  return { ctx, page };
}
async function fill(page, phone) {
  await page.getByLabel('Company or organization').fill('LOCAL SYNTHETIC FACTORY');
  await page.getByLabel('Property type', { exact:true }).selectOption('manufacturing');
  await page.getByLabel('Your control of the property').selectOption('other_or_unsure');
  await page.getByLabel('Project address or city').fill('LOCAL TEST Riverside');
  await page.getByLabel('Project city', {exact:true}).fill('Riverside');
  await page.getByLabel('Project ZIP code').fill('92501');
  await page.getByLabel('Electric utility', {exact:true}).fill('Riverside Public Utilities');
  await page.getByLabel('Typical monthly electric bill').selectOption('unknown');
  await page.getByLabel('Project timing').selectOption('researching');
  await page.getByLabel('Contact name').fill('LOCAL SYNTHETIC COMMERCIAL');
  await page.getByLabel('Phone', {exact:true}).fill(phone);
  await page.getByLabel('Email', {exact:true}).fill('commercial@example.invalid');
  await page.getByRole('checkbox').check();
}
const button = page => page.getByRole('button', { name: 'Request a commercial project review', exact: true });
async function stored(id) { return (await (await fetch(api + '/test/stored')).json()).filter(r => r.submission_id === id); }
try {
  for (const [size, viewport, phone] of [['desktop', {width:1440,height:1000}, '2025550151'],['mobile',{width:390,height:844},'2025550152']]) {
    const {ctx,page} = await setup(viewport);
    await fill(page, phone);
    const response = page.waitForResponse(r=>r.url()===api+'/api/intake' && r.request().method()==='POST');
    await button(page).click({ clickCount: 2 });
    const data = (await (await response).json()).data;
    await expect(page.getByText('Project information received', {exact:true})).toBeVisible();
    const rows = await stored(data.submission_id);
    assert.equal(rows.length,1); assert.equal(rows[0].is_test,true);
    assert.equal(rows[0].qualification_data.property_type,'manufacturing');
    assert.equal(rows[0].qualification_data.monthly_bill_range,'unknown');
    assert.equal(rows[0].attribution.organic_landing_page,'/commercial-solar/companies-california');
    assert.equal(rows[0].attribution.acquisition_medium,'organic');
    const events = await page.evaluate(()=>window.__localEvents.filter(e=>e[0]==='event' && e[1]==='generate_lead'));
    assert.equal(events.length,1); assert.equal(events[0][2].submission_id,data.submission_id);
    assert.ok(!JSON.stringify(events).includes('example.invalid'));
    assert.ok(!JSON.stringify(events).includes(phone));
    assert.equal(await page.evaluate(()=>sessionStorage.getItem('crr_commercial_submission_v1')),null);
    results.push({case:'commercial manufacturing inquiry',size,storedOnce:true,test:true,organic:true,unknownBudgetAccepted:true,events:1});
    await ctx.close();
  }
  {
    const {ctx,page} = await setup({width:390,height:844});
    await fill(page,'2025550153'); let first;
    await page.route(api+'/api/intake', async route=> { first=route.request().postDataJSON(); await route.fetch(); await route.abort('failed'); });
    await button(page).click(); await expect(page.locator('#solar-inquiry').getByRole('alert')).toContainText('not confirmed');
    await page.unroute(api+'/api/intake'); await page.reload({waitUntil:'networkidle'});
    await expect(page.getByLabel('Company or organization')).toHaveValue('LOCAL SYNTHETIC FACTORY');
    const response=page.waitForResponse(r=>r.url()===api+'/api/intake' && r.request().method()==='POST');
    await button(page).click(); const data=(await (await response).json()).data;
    assert.equal(data.submission_id,first.submission_id); assert.equal(data.duplicate,true);
    await expect(page.getByText('Project information received',{exact:true})).toBeVisible();
    assert.equal((await stored(data.submission_id)).length,1);
    assert.equal((await page.evaluate(()=>window.__localEvents.filter(e=>e[1]==='generate_lead'))).length,0);
    results.push({case:'lost response and reload',sameUuid:true,storedOnce:true,duplicateEventSuppressed:true}); await ctx.close();
  }
  {
    const {ctx,page}=await setup({width:390,height:844}); await fill(page,'2025550154');
    await page.route(api+'/api/intake',route=>route.fulfill({status:400,contentType:'application/json',body:JSON.stringify({message:'Correct this validation fixture'})}));
    await button(page).click(); await expect(page.locator('#solar-inquiry').getByRole('alert')).toContainText('Correct this validation fixture');
    assert.equal(await page.evaluate(()=>sessionStorage.getItem('crr_commercial_submission_v1')),null);
    await page.getByLabel('Company or organization').fill('LOCAL CORRECTED FACTORY');
    await expect(page.getByLabel('Company or organization')).toHaveValue('LOCAL CORRECTED FACTORY');
    results.push({case:'400 validation',attemptCleared:true,editable:true}); await ctx.close();
  }
  await fs.writeFile('../../evidence/growth-review/commercial-integration.json',JSON.stringify(results,null,2));
  console.log('PASS commercial path, attribution, manufacturing, unknown budget, duplicate clicks, response-loss reload and validation correction');
} finally { await browser.close(); }
