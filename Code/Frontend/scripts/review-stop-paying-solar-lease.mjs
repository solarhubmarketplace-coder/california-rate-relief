import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";

const base = (process.env.CRR_REVIEW_BASE || "http://127.0.0.1:3000").replace(/\/$/, "");
const output = process.env.CRR_REVIEW_OUT;
const path = "/blog/what-happens-if-stop-paying-solar-lease-california";

const desktop = await fetch(`${base}${path}`);
const html = await desktop.text();
assert.equal(desktop.status, 200);
assert.match(html, /What Happens If You Stop Paying a Solar Lease/i);
assert.match(html, /rel="canonical" href="https:\/\/ratereliefca\.com\/blog\/what-happens-if-stop-paying-solar-lease-california"/i);
assert.match(html, /California CSLB/i);
assert.match(html, /Debt Collection FAQs/i);
assert.match(html, /does not cancel a solar lease/i);
assert.match(html, /A complaint is a record and review request/i);

const mobile = await fetch(`${base}${path}`, { headers: { "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148" } });
assert.equal(mobile.status, 200);
assert.match(await mobile.text(), /California solar lease payment and contract review/i);

const sitemap = await fetch(`${base}/sitemap.xml`);
const sitemapText = await sitemap.text();
assert.equal(sitemap.status, 200);
assert.match(sitemapText, /\/blog\/what-happens-if-stop-paying-solar-lease-california/);

const result = { base, passed: 3, checks: { desktop: desktop.status, mobile: mobile.status, sitemap: sitemap.status } };
if (output) await writeFile(output, `${JSON.stringify(result, null, 2)}\n`, "utf8");
console.log(JSON.stringify(result));
