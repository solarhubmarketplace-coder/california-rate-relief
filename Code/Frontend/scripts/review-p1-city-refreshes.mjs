import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";

const base = (process.env.CRR_REVIEW_BASE || "http://127.0.0.1:3101").replace(/\/$/, "");
const output = process.env.CRR_REVIEW_OUT;
const cases = [
  ["/solar-companies/thousand-oaks", /Compare solar companies in Thousand Oaks/i, /Clean Power Alliance/i],
  ["/solar-companies/escondido", /Compare solar companies in Escondido/i, /SolarAPP\+/i],
  ["/solar-companies/anaheim", /Compare solar companies in Anaheim/i, /Anaheim Public Utilities/i],
  ["/solar-companies/roseville", /Compare solar companies in Roseville/i, /permission to operate/i],
  ["/solar-companies/irvine", /Compare solar companies in Irvine/i, /Orange County Power Authority/i],
  ["/solar-companies/stockton", /Compare solar companies in Stockton/i, /Community Development Department/i],
  ["/solar-companies/murrieta", /Compare solar companies in Murrieta/i, /revised documents/i],
  ["/solar-companies/visalia", /Compare solar companies in Visalia/i, /solar permit application/i],
];

const results = [];
for (const [path, heading, evidence] of cases) {
  const desktop = await fetch(`${base}${path}`);
  const html = await desktop.text();
  assert.equal(desktop.status, 200);
  assert.match(html, heading);
  assert.match(html, evidence);
  assert.match(
    html,
    new RegExp(
      `rel="canonical" href="https:\\/\\/ratereliefca\\.com${path.replaceAll("/", "\\/")}"`,
      "i",
    ),
  );

  const mobile = await fetch(`${base}${path}`, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148",
    },
  });
  assert.equal(mobile.status, 200);
  assert.match(await mobile.text(), heading);
  results.push({ path, desktop: desktop.status, mobile: mobile.status });
}

const sitemap = await fetch(`${base}/sitemap.xml`);
const sitemapText = await sitemap.text();
assert.equal(sitemap.status, 200);
for (const [path] of cases) {
  assert.match(sitemapText, new RegExp(path.replaceAll("/", "\\/")));
}

const result = { base, passed: 17, checks: results, sitemap: sitemap.status };
if (output) {
  await writeFile(output, `${JSON.stringify(result, null, 2)}\n`, "utf8");
}
console.log(JSON.stringify(result));
