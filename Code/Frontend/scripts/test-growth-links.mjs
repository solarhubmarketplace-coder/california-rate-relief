import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { GROWTH_ROUTES } from '../src/lib/growth-routes.ts';
const base = 'http://localhost:3100';
const extras = [
  '/blog/why-is-my-pge-bill-so-high',
  '/blog/solar-carport-california-guide',
  '/blog/do-solar-panels-work-during-power-outage-california',
  '/blog/nem-2-vs-nem-3-california',
  '/blog/solar-rebates-by-california-utility',
  '/blog/solar-tax-credit-2026',
  '/blog/tesla-powerwall-installers-california',
  '/blog/california-solar-tax-credit-2026',
  '/commercial-solar/cost-per-watt-california',
  '/commercial-solar/sgip-battery-storage',
  ...['san-diego','fresno','los-angeles','sacramento','bakersfield','san-jose'].map(c => '/solar-savings/'+c),
];
const browser = await chromium.launch({headless:true,channel:'chrome'});
const ctx = await browser.newContext();
await ctx.route('**/*', r => new URL(r.request().url()).hostname === 'localhost' ? r.continue() : r.abort());
const page = await ctx.newPage();
const links = new Map();
const results = [];
try {
  for (const route of [...GROWTH_ROUTES,...extras]) {
    const response = await page.goto(base+route,{waitUntil:'domcontentloaded',timeout:120000});
    const canonical = await page.locator('link[rel=canonical]').getAttribute('href');
    const h1 = await page.locator('h1').count();
    results.push({type:'page',route,status:response.status(),canonical,h1});
    assert.equal(response.status(),200,route);
    assert.equal(canonical,'https://ratereliefca.com'+route,route);
    assert.equal(h1,1,route);
    if(GROWTH_ROUTES.includes(route)) {
      const hrefs = await page.locator('main a[href]').evaluateAll(as=>as.map(a=>a.getAttribute('href')));
      for (const href of hrefs) {
        const url = new URL(href,'https://ratereliefca.com'+route);
        if(url.hostname !== 'ratereliefca.com' || !['http:','https:'].includes(url.protocol)) continue;
        const key=url.pathname+url.search+url.hash;
        links.set(key,[...(links.get(key)||[]),route]);
      }
    }
  }
  for (const [href,from] of links) {
    const url = new URL(href,base);
    await page.goto('about:blank');
    const response = await page.goto(url.href,{waitUntil:'domcontentloaded',timeout:120000});
    const fragment = url.hash ? await page.evaluate(hash=>Boolean(document.getElementById(decodeURIComponent(hash.slice(1)))),url.hash) : true;
    results.push({type:'link',href,from,status:response.status(),fragment});
    assert.equal(response.status(),200,href);
    assert.equal(fragment,true,href+' fragment');
  }
  console.log('PASS',32,'ownership/ancillary pages and',links.size,'distinct internal page/fragment links');
} finally {
  await fs.writeFile('../../evidence/growth-50/internal-link-review.json',JSON.stringify(results,null,2));
  await browser.close();
}
