import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";

const base = (process.env.CRR_REVIEW_BASE || "http://127.0.0.1:3000").replace(/\/$/, "");
const output = process.env.CRR_REVIEW_OUT;
const cases = [
  ["/virginia/virginia-beach-solar-companies", /Solar Companies in Virginia Beach/i, /Virginia DPOR/i],
  ["/maryland/baltimore-solar-companies", /Solar Companies in Baltimore/i, /Baltimore City Code/i],
  ["/blog/is-community-solar-worth-it", /Is Community Solar Worth It/i, /Net monthly benefit/i],
];
const results = [];
for (const [path, h1, evidence] of cases) {
  const desktop = await fetch(`${base}${path}`); const html = await desktop.text();
  assert.equal(desktop.status, 200); assert.match(html, h1); assert.match(html, evidence);
  assert.match(html, new RegExp(`rel="canonical" href="https:\\/\\/ratereliefca\\.com${path.replaceAll("/", "\\/")}"`, "i"));
  const mobile = await fetch(`${base}${path}`, { headers: { "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148" } });
  assert.equal(mobile.status, 200); assert.match(await mobile.text(), h1);
  results.push({ path, desktop: desktop.status, mobile: mobile.status });
}
const sitemap = await fetch(`${base}/sitemap.xml`); const sitemapText = await sitemap.text(); assert.equal(sitemap.status, 200);
for (const [path] of cases) assert.match(sitemapText, new RegExp(path.replaceAll("/", "\\/")));
const result = { base, passed: 7, checks: results, sitemap: sitemap.status };
if (output) await writeFile(output, `${JSON.stringify(result, null, 2)}\n`, "utf8");
console.log(JSON.stringify(result));
