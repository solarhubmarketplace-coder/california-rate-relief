const fs = require('fs');
const path = require('path');
const sql = fs.readFileSync(path.join(__dirname, '../migrations/006_add_durable_intake_and_referrals.sql'), 'utf8');

describe('migration 006 safety contract', () => {
  test('uses atomic intake, payload fingerprints, and phone serialization', () => {
    expect(sql).toMatch(/CREATE OR REPLACE FUNCTION public\.ingest_crr_submission/);
    expect(sql).toMatch(/payload_fingerprint/);
    expect(sql).toMatch(/pg_advisory_xact_lock/);
    expect(sql).toMatch(/submission_id payload mismatch/);
  });
  test('uses a restrictive staff gate over legacy permissive policies', () => {
    expect(sql).toMatch(/AS RESTRICTIVE FOR ALL TO authenticated/);
    expect(sql).toMatch(/REVOKE ALL ON public\.crr_staff_users FROM anon, authenticated/);
    expect(sql).not.toMatch(/user_metadata/);
  });
  test('keeps uncertain delivery retryable only within the provider window', () => {
    expect(sql).toMatch(/p_provider_window_hours/);
    expect(sql).toMatch(/first_attempt_at/);
    expect(sql).toMatch(/'ambiguous'/);
    expect(sql).toMatch(/reconcile_owner_notification/);
    expect(sql).toMatch(/prepare_owner_notification/);
    expect(sql).toMatch(/provider_subject=COALESCE/);
    expect(sql).toMatch(/provider idempotency window expired before retry/);
    expect(sql).toMatch(/verify delivery, then mark failed before retrying/);
    expect(sql).toMatch(/retry_cycle_attempt_count/);
    expect(sql).toMatch(/owner_notification_reconciliation_audit/);
  });
  test('cannot attach an outcome or outbox row to the wrong lead', () => {
    expect(sql.match(/FOREIGN KEY \(submission_id, lead_id\)/g)).toHaveLength(2);
  });
  test('intake never creates sales communication tasks', () => {
    const intakeFunction = sql.match(/CREATE OR REPLACE FUNCTION public\.ingest_crr_submission[\s\S]*?END \$\$;/)?.[0] || '';
    expect(intakeFunction).not.toMatch(/communication_tasks|lead_sequence_tracking/);
  });
  test('scorecard excludes tests, deduplicates lead IDs, and uses Pacific weeks', () => {
    expect(sql).toMatch(/s\.is_test=FALSE/);
    expect(sql).toMatch(/s\.is_spam=FALSE/);
    expect(sql).toMatch(/COUNT\(DISTINCT s\.lead_id\)/);
    expect(sql).toMatch(/America\/Los_Angeles/);
    expect(sql).toMatch(/BOOL_OR\(r\.partner_qualified IS TRUE\)/);
    expect(sql).toMatch(/JOIN eligible e ON e\.submission_id=r\.submission_id AND e\.lead_id=r\.lead_id/);
  });
  test('staff classification is atomic and leaves an audit record', () => {
    expect(sql).toMatch(/CREATE OR REPLACE FUNCTION public\.classify_lead_submission/);
    expect(sql).toMatch(/lead_submission_classification_audit/);
    expect(sql).toMatch(/recorded_by UUID NOT NULL/);
  });
});
