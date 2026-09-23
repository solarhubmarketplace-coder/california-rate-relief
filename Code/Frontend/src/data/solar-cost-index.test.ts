// Run: node --experimental-strip-types --test src/data/solar-cost-index.test.ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getPublishableCityCostRows } from './city-cost-data.ts';
import {
  buildCostIndexCsv,
  classificationProblems,
  computeCostIndexFindings,
  dollarFigures,
  getCostIndexRows,
} from './solar-cost-index.ts';

const ISO = /^\d{4}-\d{2}-\d{2}$/;

test('every publishable city is classified against its own source text', () => {
  const problems = getPublishableCityCostRows()
    .map((row) => ({ slug: row.slug, problems: classificationProblems(row) }))
    .filter((r) => r.problems.length);
  assert.deepEqual(problems, []);
});

test('the index has one row per publishable city and none is left unclassified', () => {
  const rows = getCostIndexRows();
  assert.equal(rows.length, getPublishableCityCostRows().length);
  for (const row of rows) {
    assert.notEqual(row.fee.status, 'unclassified', row.slug);
    assert.notEqual(row.platform.value, 'unclassified', row.slug);
    assert.notEqual(row.online.value, 'unclassified', row.slug);
  }
});

test('every row cites a permit source and a utility source, each with a URL and a checked date', () => {
  for (const row of getCostIndexRows()) {
    assert.ok(row.sources.some((s) => s.kind === 'permit'), `${row.slug} permit source`);
    assert.ok(row.sources.some((s) => s.kind === 'utility'), `${row.slug} utility source`);
    if (row.cca) assert.ok(row.sources.some((s) => s.kind === 'cca'), `${row.slug} cca source`);
    if (row.rate.cents !== null) assert.ok(row.sources.some((s) => s.kind === 'rate'), `${row.slug} rate source`);
    for (const s of row.sources) {
      assert.match(s.url, /^https?:\/\//, `${row.slug} ${s.label}`);
      assert.match(s.verifiedAt, ISO, `${row.slug} ${s.label}`);
    }
  }
});

test('a published fee is only ever the sum of figures quoted from the city note', () => {
  for (const row of getCostIndexRows()) {
    if (row.fee.status !== 'published') {
      assert.equal(row.fee.amountUsd, null, row.slug);
      continue;
    }
    assert.ok(row.fee.amountUsd > 0, row.slug);
    const parts = dollarFigures(row.fee.breakdown ?? '');
    const sum = Math.round(parts.reduce((a, b) => a + b, 0) * 100) / 100;
    assert.equal(sum, row.fee.amountUsd, row.slug);
  }
});

test('findings are computed from the rows and add up', () => {
  const rows = getCostIndexRows();
  const f = computeCostIndexFindings(rows);
  const feeTotal = Object.values(f.feeCounts).reduce((a, b) => a + b, 0);
  const platformTotal = Object.values(f.platformCounts).reduce((a, b) => a + b, 0);
  const utilityTotal = Object.values(f.utilityCounts).reduce((a, b) => a + b, 0);
  assert.equal(feeTotal, rows.length);
  assert.equal(platformTotal, rows.length);
  assert.equal(utilityTotal, rows.length);
  assert.ok(f.published);
  assert.ok(f.published.min <= f.published.median && f.published.median <= f.published.max);
  assert.equal(f.published.count, f.feeCounts.published);
  assert.equal(f.atOrBelowStateLimit + f.aboveStateLimit.length, f.published.count);
});

test('the CSV has a header and one line per city', () => {
  const rows = getCostIndexRows();
  const lines = buildCostIndexCsv(rows).trimEnd().split('\n');
  // Notes never contain a newline, so a line is a row.
  assert.equal(lines.length, rows.length + 1);
  assert.match(lines[0], /^"city","county",/);
});
