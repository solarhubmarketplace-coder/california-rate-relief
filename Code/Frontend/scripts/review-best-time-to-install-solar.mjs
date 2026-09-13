import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";

const base = (process.env.CRR_REVIEW_BASE || "http://127.0.0.1:3000").replace(/\/$/, "");
const output = process.env.CRR_REVIEW_OUT;
const path = "/blog/best-time-to-install-solar-panels-california";

const desktop = await fetch(`${base}${path}`);
const html = await desktop.text();
assert.equal(desktop.status, 200);
assert.match(html, /Best Time to Install Solar Panels in California/i);
assert.match(html, /rel="canonical" href="https:\/\/ratereliefca\.com\/blog\/best-time-to-install-solar-panels-california"/i);
assert.match(html, /California Solar Consumer Protection Guide/i);
assert.match(html, /Rule 21/i);
assert.match(html, /permits and inspections can take weeks to months/i);
assert.match(html, /unavailable for property placed in service after December 31, 2025/i);

const mobile = await fetch(`${base}${path}`, { headers: { "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148" } });
assert.equal(mobile.status, 200);
assert.match(await mobile.text(), /best time to install solar panels in California/i);

const sitemap = await fetch(`${base}/sitemap.xml`);
const sitemapText = await sitemap.text();
assert.equal(sitemap.status, 200);
assert.match(sitemapText, /\/blog\/best-time-to-install-solar-panels-california/);

const result = { base, passed: 3, checks: { desktop: desktop.status, mobile: mobile.status, sitemap: sitemap.status } };
if (output) await writeFile(output, `${JSON.stringify(result, null, 2)}\n`, "utf8");
console.log(JSON.stringify(result));
