import test from 'node:test';
import assert from 'node:assert/strict';
import { pacificMonthRange } from './growth-report.ts';
test('Pacific months remain correct across DST and year boundaries', () => {
  assert.deepEqual(pacificMonthRange('2026-03'), {
    from: '2026-03-01T08:00:00.000Z',
    to: '2026-04-01T07:00:00.000Z',
  });
  assert.deepEqual(pacificMonthRange('2026-11'), {
    from: '2026-11-01T07:00:00.000Z',
    to: '2026-12-01T08:00:00.000Z',
  });
  assert.deepEqual(pacificMonthRange('2026-12'), {
    from: '2026-12-01T08:00:00.000Z',
    to: '2027-01-01T08:00:00.000Z',
  });
  assert.throws(() => pacificMonthRange('2026-13'));
});
