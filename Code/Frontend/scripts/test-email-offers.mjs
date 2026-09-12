import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const base='http://localhost:3100';
const out='D:/California_Rate_Relief_Master/02_Work_Management/Email_Marketing/2026-09-12_implementation/offer_previews';
await fs.mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,channel:'chrome'});
const results=[];
try {
 for(const offer of ['bill-review','quote-review']) {
  for(const [device,viewport] of [['desktop',{width:1440,height:1000}],['mobile',{width:390,height:844}]]) {
   const ctx=await browser.newContext({viewport});
   const requests=[];
   let shouldFail=true;
   await ctx.route('**/*',async route=>{
    const url=new URL(route.request().url());
    if(url.pathname.endsWith('/intake')&&route.request().method()==='OPTIONS')return route.fulfill({status:204,headers:{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'*','Access-Control-Allow-Methods':'POST, OPTIONS'}});
    if(url.pathname.endsWith('/intake')&&route.request().method()==='POST') {
     const payload=route.request().postDataJSON();requests.push(payload);
     return route.fulfill({status:shouldFail?503:201,headers:{'Access-Control-Allow-Origin':'*'},contentType:'application/json',body:JSON.stringify(shouldFail?{message:'Synthetic storage failure'}:{data:{submission_id:payload.submission_id,lead_id:'00000000-0000-4000-8000-000000000018',duplicate:false}})});
    }
    return ['localhost','127.0.0.1'].includes(url.hostname)?route.continue():route.abort();
   });
   await ctx.addInitScript(()=>{
    window.__offerEvents=[];window.gtag=(...args)=>window.__offerEvents.push(args);
    if(!sessionStorage.getItem('crr_first_touch_v1'))sessionStorage.setItem('crr_first_touch_v1',JSON.stringify({landing_page:'/blog/why-is-my-sce-bill-so-high',landing_city_slug:null,landing_page_type:'blog',referrer:'www.google.com',captured_at:new Date().toISOString()}));
   });
   const page=await ctx.newPage();
   const response=await page.goto(`${base}/email/${offer}?utm_source=crr&utm_medium=email&utm_campaign=ca_review&utm_content=plain_v1`);
   assert.equal(response.status(),200);
   await expect(page.locator('h1')).toBeVisible();
   await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content',/noindex/);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),true);
   await page.screenshot({path:`${out}/${offer}-${device}.png`,fullPage:true});
   await page.getByLabel('Name',{exact:true}).fill('LOCAL SYNTHETIC');
   await page.getByLabel('Phone',{exact:true}).fill('9515550190');
   await page.getByLabel('Email',{exact:true}).fill('synthetic@example.invalid');
   await page.getByLabel('Project ZIP',{exact:true}).fill('92501');
   await page.getByLabel('Utility on your bill',{exact:true}).fill('SCE');
   await page.getByLabel('Your question (optional)',{exact:true}).fill('What does this proposal include?');
   await page.getByRole('checkbox').check();
   await page.getByRole('button',{name:'Send my question'}).click();
   await expect(page.locator('#request').getByRole('alert')).toContainText('Synthetic storage failure');
   assert.equal(requests.length,1);
   assert.equal(requests[0].attribution.acquisition_medium,'email');
   assert.equal(requests[0].attribution.original_acquisition_medium,'organic');
   assert.equal(requests[0].qualification_data.inquiry_topic,offer);
   assert.equal(requests[0].qualification_data.bill_amount,null);
   assert.equal('calculator_cash_price' in requests[0].qualification_data,false);
   shouldFail=false;
   await page.reload();
   await page.getByRole('button',{name:'Retry saved request'}).click();
   await expect(page.locator('#request').getByRole('status')).toContainText('Your request is saved.');
   assert.equal(requests.length,2);
   assert.deepEqual(requests[0],requests[1]);
   const events=await page.evaluate(()=>window.__offerEvents.filter(x=>x[0]==='event'&&x[1]==='generate_lead'));
   assert.deepEqual(events,[['event','generate_lead',{form_kind:offer,segment:'residential'}]]);
   for(const host of ['greenreviewshub.com','securehomegear.com','athomebiohacking.com','glp1comparehub.com']) {
    const foreign=await ctx.request.get(`${base}/email/${offer}`,{headers:{host}});
    assert.equal(foreign.status(),404,host);
   }
   results.push({offer,device,render:true,no_horizontal_overflow:true,noindex:true,reload_retry_same_payload:true,email_not_organic:true,analytics_has_no_contact_ids:true,sibling_hosts_blocked:4});
   await ctx.close();
  }
 }
 await fs.writeFile(`${out}/verification.json`,JSON.stringify({verified_at_utc:new Date().toISOString(),scope:'local browser with mocked intake; no live leads or messages',results},null,2));
 console.log(JSON.stringify({passed:results.length,checks:results}));
} finally {await browser.close();}
