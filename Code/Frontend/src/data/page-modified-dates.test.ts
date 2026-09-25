// Run: node --experimental-strip-types --test src/data/page-modified-dates.test.ts
// Plan 11.5 (2026-09-24): the sitemap's lastmod for hand-written CRR pages is
// read from page-modified-dates.ts, which scripts/page-dates.mjs generates from
// each page's own dateModified. This fails when a page's date changed and the
// file was not regenerated, or a page declares two different dateModified values.
import assert from 'node:assert/strict';
import test from 'node:test';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { PAGE_MODIFIED_DATES } from './page-modified-dates.ts';

const FRONTEND = fileURLToPath(new URL('../..', import.meta.url));

test('page-modified-dates.ts matches the dates declared in the page files', () => {
  const run = spawnSync(process.execPath, ['scripts/page-dates.mjs', '--check'], {
    cwd: FRONTEND,
    encoding: 'utf8',
  });
  assert.equal(run.status, 0, `${run.stderr}${run.stdout}\nRun: node scripts/page-dates.mjs`);
});

test('every entry is an ISO day, not in the future, on an absolute path', () => {
  const today = new Date().toISOString().slice(0, 10);
  for (const [path, day] of Object.entries(PAGE_MODIFIED_DATES)) {
    assert.match(path, /^\/[a-z0-9/-]*$/, path);
    assert.match(day, /^\d{4}-\d{2}-\d{2}$/, path);
    assert.ok(day <= today, `${path} is dated in the future (${day})`);
  }
});
