const fs = require('node:fs');
const path = require('node:path');

describe('email lifecycle migration contract', () => {
  const sql = fs.readFileSync(path.join(__dirname, '../supabase/migrations/20260912225207_email_lifecycle_controls.sql'), 'utf8');
  const bookingSql = fs.readFileSync(path.join(__dirname, '../supabase/migrations/20260912232500_booking_stops_email_promotion.sql'), 'utf8');
  const bookingAclSql = fs.readFileSync(path.join(__dirname, '../supabase/migrations/20260912233000_lock_booking_trigger_function.sql'), 'utf8');
  const offerTaskSql = fs.readFileSync(path.join(__dirname, '../supabase/migrations/20260912234500_email_offer_staff_tasks.sql'), 'utf8');
  const funnelSql = fs.readFileSync(path.join(__dirname, '../supabase/migrations/20260913001000_email_funnel_measurement.sql'), 'utf8');
  const funnelGuardSql = fs.readFileSync(path.join(__dirname, '../supabase/migrations/20260913001500_email_funnel_guards.sql'), 'utf8');
  const funnelPeopleSql = fs.readFileSync(path.join(__dirname, '../supabase/migrations/20260913002000_email_funnel_unique_people.sql'), 'utf8');
  test('keeps marketing paused by default and applies both frequency caps', () => {
    expect(sql).toContain("values('email_marketing_enabled','false'::jsonb)");
    expect(sql).toContain("interval '24 hours'");
    expect(sql).toContain("interval '7 days'");
    expect(sql).toContain("sent_24h>=1");
    expect(sql).toContain("sent_7d>=3");
  });
  test('uses recipient-wide tokens, reply stops, and queue cancellation', () => {
    expect(sql).toContain('email_unsubscribe_tokens');
    expect(sql).toContain('record_crr_email_reply');
    expect(sql).toContain('email_contact_holds');
    expect(sql).toContain("reason:='recipient_hold'");
    expect(sql).toContain("status in('pending','processing')");
    expect(sql).toContain('email_identity_id=p_email_identity_id');
  });
  test('appointment booking closes promotions without cancelling confirmation email', () => {
    expect(bookingSql).toContain("new.status = 'scheduled'");
    expect(bookingSql).toContain("coalesce(metadata, '{}'::jsonb) ? 'sequence_id'");
    expect(bookingSql).toContain("status in ('pending', 'processing')");
    expect(bookingSql).toContain('update public.lead_sequence_tracking');
    expect(bookingSql).toContain('after insert or update of status, lead_id, scheduled_time');
    expect(bookingAclSql).toContain('from anon');
    expect(bookingAclSql).toContain('from authenticated');
    expect(bookingAclSql).toContain('to service_role');
  });
  test('email offer submissions create a protected, idempotent staff task', () => {
    expect(offerTaskSql).toContain('alter table public.email_offer_staff_tasks enable row level security');
    expect(offerTaskSql).toContain('revoke all on public.email_offer_staff_tasks from public, anon, authenticated');
    expect(offerTaskSql).toContain("new.attribution->>'acquisition_medium'");
    expect(offerTaskSql).toContain("v_offer in ('bill-review', 'quote-review')");
    expect(offerTaskSql).toContain('on conflict (submission_id) do nothing');
    expect(offerTaskSql).toContain('update public.email_offer_staff_tasks');
    expect(offerTaskSql).toContain("status = 'completed'");
    expect(offerTaskSql).toContain('to service_role');
  });
  test('email funnel measurement joins privacy-safe stages and excludes tests by default', () => {
    expect(funnelSql).toContain('public.email_funnel_visits');
    expect(funnelSql).toContain('public.email_campaign_assignments');
    expect(funnelSql).toContain("campaign_key ~ '^[A-Za-z0-9_-]{1,80}$'");
    expect(funnelSql).toContain('p_include_tests or not s.is_test');
    expect(funnelSql).toContain('count(distinct f.submission_id) forms');
    expect(funnelSql).toContain('public.owner_receipt_evidence');
    expect(funnelSql).toContain('public.email_reply_events');
    expect(funnelSql).toContain('public.lead_referral_outcomes');
    expect(funnelSql).toContain('from public, anon, authenticated');
    expect(funnelSql).toContain('to service_role');
    expect(funnelGuardSql).toContain('email_logs_holdout_never_sent');
    expect(funnelGuardSql).toContain('email_campaign_assignments_permission_required');
    expect(funnelPeopleSql).toContain('count(distinct f.submission_id) forms');
    expect(funnelPeopleSql).toContain('count(distinct f.lead_id) unique_people');
    expect(funnelPeopleSql).toContain('count(distinct a.email_identity_id) assignments');
  });
});
