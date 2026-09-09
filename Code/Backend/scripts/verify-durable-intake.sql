-- Read-only post-migration verification for 006_add_durable_intake_and_referrals.sql.
SELECT table_name, column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_schema='public' AND table_name IN (
  'crr_staff_users','lead_submissions','owner_notification_outbox',
  'owner_notification_delivery_ledger','owner_notification_reconciliation_audit','lead_referral_outcomes','lead_submission_classification_audit'
) ORDER BY table_name, ordinal_position;

SELECT routine_name, security_type
FROM information_schema.routines
WHERE routine_schema='public' AND routine_name IN (
  'is_crr_staff','ingest_crr_submission','claim_owner_notification',
  'prepare_owner_notification','complete_owner_notification','fail_owner_notification','reconcile_owner_notification','get_crr_scorecard','classify_lead_submission'
) ORDER BY routine_name;

SELECT conrelid::regclass AS table_name, conname, pg_get_constraintdef(oid) AS definition
FROM pg_constraint
WHERE connamespace='public'::regnamespace
  AND conrelid IN ('public.owner_notification_outbox'::regclass,'public.lead_referral_outcomes'::regclass)
  AND contype='f'
ORDER BY conrelid::regclass::text, conname;

SELECT c.relname AS table_name, c.relrowsecurity AS rls_enabled,
  p.polname AS policy_name, p.polroles::regrole[] AS roles,
  pg_get_expr(p.polqual,p.polrelid) AS using_expression
FROM pg_class c LEFT JOIN pg_policy p ON p.polrelid=c.oid
WHERE c.relnamespace='public'::regnamespace AND c.relname IN (
  'leads','settings','appointments','call_logs','communication_tasks','documents','email_logs',
  'email_sequence_steps','email_sequences','email_templates','lead_sequence_tracking','sms_logs',
  'lead_submissions','owner_notification_outbox','owner_notification_delivery_ledger','lead_referral_outcomes'
) ORDER BY c.relname,p.polname;

SELECT user_id, active FROM public.crr_staff_users ORDER BY user_id;
SELECT status, COUNT(*) FROM public.owner_notification_outbox GROUP BY status ORDER BY status;
SELECT * FROM public.get_crr_scorecard(NULL,NULL);
