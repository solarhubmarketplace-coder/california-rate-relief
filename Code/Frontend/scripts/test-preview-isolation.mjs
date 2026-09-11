import {chromium,expect} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const browser=await chromium.launch({headless:true,channel:'chrome'});
const page=await browser.newPage({viewport:{width:390,height:844}});
const externalResponses=[];
page.on('response',r=>{if(!['localhost','127.0.0.1'].includes(new URL(r.url()).hostname))externalResponses.push(r.url());});
try {
  // No Playwright request interception: the proxy itself must contain the preview.
  const response=await page.goto('http://localhost:3100/tools/solar-panel-calculator',{waitUntil:'networkidle'});
  const csp=response.headers()['content-security-policy'];
  assert.ok(csp.includes("connect-src 'self' http://127.0.0.1:3101"));
  await page.locator('#calculator').getByLabel('Utility on your bill').selectOption('pge');
  await page.locator('#calculator').getByLabel('California ZIP',{exact:true}).fill('93701');
  await page.locator('#calculator').getByLabel('Average monthly electricity bill ($)',{exact:true}).fill('275');
  await page.getByRole('button',{name:'Calculate without contact details'}).click();
  await expect(page.getByText('Your comparison',{exact:true})).toBeVisible();
  const inquiry=page.locator('#solar-inquiry');
  await inquiry.getByLabel('Name',{exact:true}).fill('LOCAL PREVIEW ISOLATION TEST');
  await inquiry.getByLabel('Phone',{exact:true}).fill('2025550197');
  await inquiry.getByRole('checkbox').check();
  const stored=page.waitForResponse(r=>r.url()==='http://127.0.0.1:3101/api/intake' && r.request().method()==='POST');
  await inquiry.getByRole('button',{name:'Send my inquiry'}).click();
  const saved=await (await stored).json();
  await expect(inquiry.getByText('Your inquiry is saved.',{exact:true})).toBeVisible();
  const rows=await (await fetch('http://127.0.0.1:3101/test/stored')).json();
  assert.equal(rows.find(r=>r.submission_id===saved.data.submission_id).is_test,true);
  assert.equal(await page.evaluate(()=>typeof window.gtag),'undefined');
  assert.equal(externalResponses.length,0);
  await fs.writeFile('../../evidence/growth-50/preview-isolation.json',JSON.stringify({passed:true,requestInterception:false,externalResponses,csp,calculatorUsable:true,syntheticInquiryStored:true,gtagConfigured:false},null,2));
  console.log('PASS ordinary local preview: CSP blocks external scripts/connections, calculator works, no production analytics');
} finally {await browser.close();}
