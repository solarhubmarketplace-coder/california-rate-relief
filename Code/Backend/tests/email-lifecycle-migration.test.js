const fs = require('node:fs');
const path = require('node:path');

describe('email lifecycle migration contract', () => {
  const sql = fs.readFileSync(path.join(__dirname, '../supabase/migrations/20260912225207_email_lifecycle_controls.sql'), 'utf8');
  const bookingSql = fs.readFileSync(path.join(__dirname, '../supabase/migrations/20260912232500_booking_stops_email_promotion.sql'), 'utf8');
  const bookingAclSql = fs.readFileSync(path.join(__dirname, '../supabase/migrations/20260912233000_lock_booking_trigger_function.sql'), 'utf8');
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
});
