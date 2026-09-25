// Run: node --experimental-strip-types --test src/data/city-gate.test.ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getPublishableCityCostRows } from './city-cost-data.ts';
import { COST_CITY_GATE } from './city-gate-results.ts';
import { cityGateReport, cityPageGate, MAX_SIBLING_OVERLAP, MIN_LOCAL_DATA_POINTS } from './city-gate.ts';
import { cityDg, countyDg, pickCostLevel, stateDg, utilityDg } from './dgstats/index.ts';
import { buildCostPageContent, blockText, costPageText, iouForRow } from '../lib/city-cost-content.ts';
import { costPageSeo } from '../lib/city-pages.ts';

const rows = getPublishableCityCostRows();

test('the committed snapshot matches what the gate computes', () => {
  const report = cityGateReport('cost');
  assert.equal(Object.keys(COST_CITY_GATE).length, report.length);
  for (const r of report) {
    const snap = COST_CITY_GATE[r.slug];
    assert.ok(snap, `${r.slug} missing from city-gate-results.ts (run node scripts/city-gate.mjs --write)`);
    assert.equal(snap.pass, r.pass, r.slug);
    assert.equal(snap.overlap, r.maxSiblingOverlap, r.slug);
    assert.equal(snap.localDataPoints, r.localDataPoints.length, r.slug);
  }
});

test('the gate applies both rules', () => {
  for (const r of cityGateReport('cost')) {
    const expected = r.localDataPoints.length >= MIN_LOCAL_DATA_POINTS && r.maxSiblingOverlap < MAX_SIBLING_OVERLAP;
    assert.equal(r.pass, expected, r.slug);
  }
});

test('median sibling overlap on /solar-cost is under 50% (Block 3 done-when)', () => {
  const overlaps = cityGateReport('cost').map((r) => r.maxSiblingOverlap).sort((a, b) => a - b);
  const median = overlaps[Math.floor((overlaps.length - 1) / 2)];
  assert.ok(median < 0.5, `median ${median}`);
});

test('a family without a text model is reported as not gated, never held', () => {
  const r = cityPageGate('companies', 'fresno');
  assert.equal(r.gated, false);
  assert.equal(r.pass, true);
});

test('the loader reads every level', () => {
  assert.equal(cityDg('temecula')?.costPerWatt.n, 220);
  assert.ok(countyDg('Riverside County'));
  assert.equal(countyDg('Riverside County'), countyDg('Riverside'));
  assert.ok(utilityDg('pge') && utilityDg('SCE') && utilityDg('SDGE'));
  assert.ok(stateDg().costPerWatt.n > 50000);
  assert.equal(cityDg('glendale'), null);
});

test('a municipal-utility city never reports its IOU pockets as the city', () => {
  for (const slug of ['los-angeles', 'sacramento', 'roseville', 'riverside', 'pasadena', 'redding', 'anaheim']) {
    const row = rows.find((r) => r.slug === slug);
    assert.ok(row, slug);
    assert.equal(iouForRow(row), null, slug);
    const pick = pickCostLevel({ slug, city: row.city, county: row.county, iou: null });
    assert.ok(pick.level === 'county' || pick.level === 'state', `${slug}: ${pick.level}`);
    const text = costPageText(buildCostPageContent(row), costPageSeo(row).h1);
    assert.match(text, /is not in the CPUC's interconnection data/, slug);
  }
});

test('every cost page answers with a sourced figure first, and the title carries it', () => {
  for (const row of rows) {
    const content = buildCostPageContent(row);
    const seo = costPageSeo(row);
    const first = blockText(content.answer[0]);
    assert.match(first, /reported a median of \$\d+\.\d\d per watt/, row.slug);
    assert.match(first, /across [\d,]+ systems/, row.slug);
    assert.ok(seo.title.length >= 45 && seo.title.length <= 60, `${row.slug}: ${seo.title}`);
    assert.ok(seo.description.length <= 155, `${row.slug}: description ${seo.description.length}`);
    const perWatt = /\$\d+\.\d\d\/W/.exec(seo.title)?.[0];
    assert.ok(perWatt && seo.h1.includes(perWatt), `${row.slug}: ${seo.title} / ${seo.h1}`);
    const text = costPageText(content, seo.h1);
    assert.doesNotMatch(text, /does not print one|this session|fetched live|Page instructs|undefined|NaN/, row.slug);
    assert.ok(content.sources.some((s) => s.url === 'https://www.californiadgstats.ca.gov/downloads/'), row.slug);
  }
});
