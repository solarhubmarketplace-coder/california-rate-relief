import test from 'node:test';
import assert from 'node:assert/strict';
import { getOrCreateSubmissionAttempt, submissionIdAfterResult } from './submission-identity.ts';

test('a failed network attempt retains the same submission id', () => {
  let calls = 0;
  const id = submissionIdAfterResult('attempt-1', false, () => {
    calls += 1;
    return 'attempt-2';
  });
  assert.equal(id, 'attempt-1');
  assert.equal(calls, 0);
});

test('a confirmed success rotates to a new submission id', () => {
  let calls = 0;
  const id = submissionIdAfterResult('attempt-1', true, () => {
    calls += 1;
    return 'attempt-2';
  });
  assert.equal(id, 'attempt-2');
  assert.equal(calls, 1);
});

test('retry reuses the complete frozen payload including timestamp and analytics values', () => {
  let builds = 0;
  const first = getOrCreateSubmissionAttempt(null, id => {
    builds += 1;
    return { submission_id: id, consent_at: '2026-09-09T10:00:00.000Z', ga_client_id: null };
  }, () => 'attempt-1');
  const retry = getOrCreateSubmissionAttempt(first, () => {
    builds += 1;
    return { submission_id: 'changed', consent_at: 'later', ga_client_id: 'appeared-later' };
  }, () => 'attempt-2');
  assert.equal(retry, first);
  assert.deepEqual(retry.payload, first.payload);
  assert.equal(builds, 1);
});
