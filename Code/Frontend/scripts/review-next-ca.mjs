// Local-only acceptance: all nonlocal requests blocked; intake responses are mocks.
import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';

const hostStatus = (route, host) => new Promise((resolve,reject) => {
  const req=http.get({hostname:'127.0.0.1',port:3115,path:route,headers:{host}},res=>{res.resume();res.on('end',()=>resolve(res.statusCode));});
  req.on('error',reject);
});

const base = 'http://127.0.0.1:3117'; // Local proxy supplies CRR Host to the dev server.
const out = path.resolve('../../evidence/next-ca/acceptance');
await fs.mkdir(out, { recursive: true });
const targets = [
  ['/solar-companies/san-francisco', 'pge', '94110', 'San Francisco'],
  ['/solar-companies/oakland', 'pge', '94612', 'Oakland'],
  ['/blog/why-is-my-ladwp-bill-so-high', 'ladwp', '90012', 'LADWP'],
  ['/solar-savings/los-angeles', 'ladwp', '90012', 'Los Angeles'],
];
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const results = [];
try {
  for (const [size, viewport] of [['desktop', {width:1440,height:1000}], ['mobile', {width:390,height:844}]]) {
    for (const [route, utility, zip, topic] of targets) {
      const context = await browser.newContext({ viewport });
      const payloads = [];
      const blocked = new Set();
      const ambiguous = size === 'mobile' && route.includes('why-is-my-ladwp');
      await context.route('**/*', async request => {
        const u = new URL(request.request().url());
        if (u.pathname === '/api/intake') {
          assert.equal(u.hostname, '127.0.0.1', 'Intake must stay local');
          const body = request.request().postDataJSON();
          payloads.push(body);
          if (ambiguous && payloads.length === 1) return request.abort('failed');
          return request.fulfill({ status:201, contentType:'application/json', body:JSON.stringify({success:true,data:{submission_id:body.submission_id,lead_id:'00000000-0000-4000-8000-000000000001',storage_status:'stored',receipt_status:'unknown'}}) });
        }
        if (['localhost','127.0.0.1'].includes(u.hostname)) return request.continue();
        blocked.add(u.hostname);
        return request.abort();
      });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      const response = await page.goto(base + route, {referer:'https://www.google.com/',waitUntil:'networkidle',timeout:120000});
      assert.equal(response.status(),200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href','https://ratereliefca.com'+route);
      assert.equal(await page.locator('meta[name=robots][content*=noindex]').count(),0);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth > innerWidth+1),false);
      assert.equal(await page.locator('main a[href="#"],main a:not([href])').count(),0);
      const schemas=(await page.locator('script[type="application/ld+json"]').allTextContents()).map(s=>JSON.parse(s));
      const articles=schemas.flatMap(s=>s['@graph']||[s]).filter(s=>s['@type']==='Article');
      assert.equal(articles.length,1);
      assert.equal(articles[0].dateModified.slice(0,10),'2026-09-11');
      await expect(page.locator('meta[property="article:modified_time"]')).toHaveAttribute('content','2026-09-11T00:00:00Z');
      const main=await page.locator('main').innerText();
      assert.match(main,new RegExp(topic));
      assert.doesNotMatch(main,/our installers|our partner|Qcells|Axia|LIRA|35.50% below SCE/i);
      assert.match(main,/September 11, 2026/);
      if(route.includes('why-is-my-ladwp')) for(const text of ['26.408','32.267','40.968','EZ-SAVE']) assert.ok(main.includes(text),text);
      if(route==='/solar-savings/los-angeles') {
        assert.doesNotMatch(main,/\bNaN\b|See schedule\+|\$200|25-year savings/i);
        await expect(page.locator('#calculator').getByLabel('Utility on your bill')).toHaveValue('ladwp');
      }
      const file=`${size}-${route.slice(1).replaceAll('/','--')}`;
      await page.screenshot({path:path.join(out,file+'-top.png')});
      await page.screenshot({path:path.join(out,file+'-full.png'),fullPage:true});
      const form=page.locator('#solar-inquiry');
      await expect(form).toHaveCount(1);
      await expect(form.getByLabel('Utility on your bill')).toHaveValue(utility);
      await form.getByLabel('California service ZIP',{exact:true}).fill(zip);
      await form.getByLabel('Average monthly electricity bill ($)',{exact:true}).fill('275');
      await form.getByLabel('Name',{exact:true}).fill('LOCAL SYNTHETIC REVIEW');
      await form.getByLabel('Phone',{exact:true}).fill('6195550117');
      await form.getByRole('checkbox').check();
      await form.scrollIntoViewIfNeeded();
      await page.screenshot({path:path.join(out,file+'-form.png')});
      await form.getByRole('button',{name:'Send my inquiry',exact:true}).click();
      if(ambiguous) {
        await expect(form).toContainText('Retry', {timeout:20000});
        await form.getByRole('button',{name:/Retry/}).click();
      }
      await expect(form).toContainText('Your inquiry is saved.',{timeout:20000});
      assert.equal(payloads.length,ambiguous?2:1);
      const payload=payloads[0];
      assert.equal(payload.qualification_data.service_zip,zip);
      assert.equal(payload.qualification_data.utility_provider,utility);
      assert.match(payload.qualification_data.inquiry_topic,new RegExp(topic,'i'));
      assert.ok(JSON.stringify(payload.attribution).includes(route),'Landing attribution is preserved');
      if(ambiguous) assert.deepEqual(payloads[0],payloads[1],'Retry must preserve UUID and payload');
      assert.deepEqual(errors,[]);
      results.push({route,size,status:200,canonical:true,dateModified:'2026-09-11',overflow:false,form:'mock-stored',defaultUtility:utility,zip,ambiguousRetry:ambiguous,attempts:payloads.length,externalBlocked:[...blocked],errors,screenshot:file+'-full.png'});
      await fs.writeFile(path.join(out,'results.partial.json'),JSON.stringify(results,null,2));
      console.log(size,route,'PASS');
      await context.close();
    }
  }
  const hosts=['greenreviewshub.com','securehomegear.com','athomebiohacking.com','glp1comparehub.com'];
  const hostChecks=[];
  for(const [route] of targets) assert.equal(await hostStatus(route,'ratereliefca.com'),200,'CRR host positive control: '+route);
  for(const [route] of targets) for(const host of hosts) {
    const status=await hostStatus(route,host);
    assert.equal(status,404,host+route);
    hostChecks.push({host,route,status,transport:'node:http explicit Host'});
  }
  const extra=[];
  const sitemap=await (await fetch(base+'/sitemap.xml')).text();
  for(const [route] of targets) {
    const entry=sitemap.split('<url>').find(e=>e.includes('<loc>https://ratereliefca.com'+route+'</loc>'));
    assert.ok(entry?.includes('<lastmod>2026-09-11T00:00:00.000Z</lastmod>'),'Sitemap date: '+route);
  }
  for(const route of ['/solar-savings/los-angeles-county','/blog/solar-rebates-by-california-utility','/solar-companies/sacramento']) {
    const response=await fetch(base+route);
    const html=await response.text();
    assert.equal(response.status,200,route);
    if(route.includes('solar-savings')) assert.ok(html.includes('See schedule'));
    if(route.includes('solar-rebates')) {assert.ok(html.includes('EZ-SAVE'));assert.ok(!html.includes('LIRA'));}
    if(route.includes('sacramento')) assert.ok(html.replace(/<!--[\s\S]*?-->/g,'').includes('Sources checked September 10, 2026'));
    extra.push({route,status:200});
  }
  await fs.writeFile(path.join(out,'ACCEPTANCE.json'),JSON.stringify({scope:'Local frontend; mocked intake only, no live storage/email',results,hostChecks,extra,passed:true},null,2));
} finally { await browser.close(); }
