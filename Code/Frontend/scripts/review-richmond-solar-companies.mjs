import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const base = (process.env.CRR_REVIEW_BASE || 'http://127.0.0.1:3000').replace(/\/$/, '');
const output = process.env.CRR_REVIEW_OUT;
const path = '/virginia/richmond-solar-companies';

const desktop = await fetch(`${base}${path}`);
const html = await desktop.text();
assert.equal(desktop.status, 200);
assert.match(html, /Solar Companies in Richmond, Virginia/i);
assert.match(html, /rel="canonical" href="https:\/\/ratereliefca\.com\/virginia\/richmond-solar-companies"/i);
assert.match(html, /City of Richmond/i);
assert.match(html, /Virginia DPOR/i);
assert.match(html, /Dominion Energy Virginia/i);
assert.match(html, /150% of expected annual electrical consumption/i);
assert.match(html, /<option value="VA" selected(?:="")?>Virginia<\/option>/i);

const mobile = await fetch(`${base}${path}`, { headers: { 'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148' } });
assert.equal(mobile.status, 200);
assert.match(await mobile.text(), /Richmond Virginia solar company and quote comparison/i);

const sitemap = await fetch(`${base}/sitemap.xml`);
const sitemapText = await sitemap.text();
assert.equal(sitemap.status, 200);
assert.match(sitemapText, /\/virginia\/richmond-solar-companies/);

const result = { base, passed: 3, checks: { desktop: desktop.status, mobile: mobile.status, sitemap: sitemap.status } };
if (output) await writeFile(output, `${JSON.stringify(result, null, 2)}\n`, 'utf8');
console.log(JSON.stringify(result));
