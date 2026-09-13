import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const base = (process.env.CRR_REVIEW_BASE || 'http://127.0.0.1:3000').replace(/\/$/, '');
const output = process.env.CRR_REVIEW_OUT;
const canonicalPath = '/blog/are-solar-panels-worth-it-california';
const legacyPath = '/blog/is-solar-worth-it-california-2026';

const canonical = await fetch(`${base}${canonicalPath}`, { redirect: 'manual' });
const canonicalHtml = await canonical.text();
assert.equal(canonical.status, 200, 'canonical owner must return 200');
assert.match(canonicalHtml, /<link rel="canonical" href="https:\/\/ratereliefca\.com\/blog\/are-solar-panels-worth-it-california"/i);
assert.match(canonicalHtml, /Are Solar Panels Worth It in California/i);

const legacy = await fetch(`${base}${legacyPath}`, { redirect: 'manual' });
assert.ok([301, 308].includes(legacy.status), `legacy owner returned ${legacy.status}`);
assert.equal(new URL(legacy.headers.get('location'), base).pathname, canonicalPath);

const sitemap = await fetch(`${base}/sitemap.xml`);
const sitemapText = await sitemap.text();
assert.equal(sitemap.status, 200, 'sitemap must return 200');
assert.match(sitemapText, /\/blog\/are-solar-panels-worth-it-california/);
assert.doesNotMatch(sitemapText, /\/blog\/is-solar-worth-it-california-2026/);

const result = {
  base,
  passed: 3,
  checks: {
    canonical_owner: { status: canonical.status, path: canonicalPath },
    legacy_redirect: { status: legacy.status, location: legacy.headers.get('location') },
    sitemap: { status: sitemap.status, canonicalIncluded: true, legacyExcluded: true },
  },
};

if (output) await writeFile(output, `${JSON.stringify(result, null, 2)}\n`, 'utf8');
console.log(JSON.stringify(result));
