// Run: node --experimental-strip-types --test src/data/facts.test.ts
//
// Guards the shape of the fact record (plan item 5.1). It does not re-fetch
// sources; the weekly fact check does that. It fails when an entry is missing
// the fields that let a reader or the weekly check trace it to its source.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  ALL_FACTS,
  FACTS,
  FACTS_CHECKED,
  centsFromDollars,
  formatFactDate,
  formatFactDateAbbrev,
  isFactOverdue,
} from './facts.ts';

const ISO = /^\d{4}-\d{2}-\d{2}$/;

test('every fact id matches its key', () => {
  for (const [key, f] of Object.entries(FACTS)) assert.equal(f.id, key);
});

test('every fact carries a primary-source trail', () => {
  for (const f of ALL_FACTS) {
    assert.match(f.sourceUrl, /^https:\/\//, `${f.id}: sourceUrl`);
    assert.ok(f.publisher.trim(), `${f.id}: publisher`);
    assert.ok(f.sourceTitle.trim(), `${f.id}: sourceTitle`);
    assert.ok(f.unit.trim(), `${f.id}: unit`);
    assert.ok(f.asOf.trim(), `${f.id}: asOf`);
    assert.match(f.checkedAt, ISO, `${f.id}: checkedAt`);
    assert.ok(f.checkedAt <= FACTS_CHECKED, `${f.id}: checkedAt after FACTS_CHECKED`);
    assert.ok(Number.isInteger(f.recheckEveryDays) && f.recheckEveryDays > 0, `${f.id}: recheckEveryDays`);
    assert.ok(f.statedAs.length > 0, `${f.id}: statedAs`);
    for (const re of f.statedAs) assert.doesNotThrow(() => new RegExp(re), `${f.id}: bad statedAs ${re}`);
  }
});

test('no source is an installer or lead-generation site', () => {
  const allowed =
    /(cpuc\.ca\.gov|publicadvocates\.cpuc\.ca\.gov|pge\.com|sce\.com|sdge\.com|ladwp\.com|smud\.org|selfgenca\.com|lbl\.gov|irs\.gov|uscode\.house\.gov)$/;
  for (const f of ALL_FACTS) assert.match(new URL(f.sourceUrl).hostname, allowed, f.id);
});

test('formatters print the source precision', () => {
  assert.equal(centsFromDollars(0.26408), '26.408¢');
  assert.equal(centsFromDollars(0.3765), '37.65¢');
  assert.equal(centsFromDollars(0.155), '15.5¢');
  assert.equal(formatFactDate('2026-09-24'), 'September 24, 2026');
  assert.equal(formatFactDateAbbrev('2026-09-18'), 'Sept 18, 2026');
  assert.equal(formatFactDateAbbrev('2026-12-31'), 'Dec 31, 2026');
});

test('overdue is measured from checkedAt', () => {
  const f = FACTS.pgeBatteryRebate; // 7-day recheck
  assert.equal(isFactOverdue(f, f.checkedAt), false);
  assert.equal(isFactOverdue(f, '2026-10-02'), true);
});
