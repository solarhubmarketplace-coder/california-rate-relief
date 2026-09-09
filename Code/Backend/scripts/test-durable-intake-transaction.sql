-- Run after migration 006 inside a transaction and ROLLBACK afterward.
-- No provider call occurs; all synthetic rows remain invisible to workers.
DO $test$
DECLARE
  first_result JSONB;
  retry_result JSONB;
  second_result JSONB;
  commercial_result JSONB;
  first_id UUID := 'bd1d9a16-a217-4a60-8b6d-cccc00000001';
  second_id UUID := 'bd1d9a16-a217-4a60-8b6d-cccc00000002';
  commercial_id UUID := 'bd1d9a16-a217-4a60-8b6d-cccc00000003';
  old_id UUID := 'bd1d9a16-a217-4a60-8b6d-cccc00000004';
  current_id UUID := 'bd1d9a16-a217-4a60-8b6d-cccc00000005';
  fields JSONB := '{"homeowner":true,"utility_provider":"PG&E","bill_amount":275,"service_zip":"95014"}';
  attrib JSONB := '{"landing_page":"/__crr_transaction_test__","submitted_from":"/","utm_source":"qa","utm_campaign":"rollback-only"}';
  mismatch_rejected BOOLEAN := FALSE;
  cross_lead_rejected BOOLEAN := FALSE;
  outbox_pair_rejected BOOLEAN := FALSE;
  expired_retry_rejected BOOLEAN := FALSE;
  target_outbox_id UUID;
  envelope_lease UUID := 'bd1d9a16-a217-4a60-8b6d-cccc00000006';
  total_count BIGINT;
BEGIN
  IF EXISTS (SELECT 1 FROM public.owner_notification_outbox) THEN
    RAISE EXCEPTION 'Owner outbox is not empty; transaction test refuses to claim or modify existing delivery rows';
  END IF;
  IF EXISTS (SELECT 1 FROM public.leads WHERE phone IN ('+19515550199','+19515550198')) THEN
    RAISE EXCEPTION 'Synthetic phone already present; stop without editing it';
  END IF;
  first_result := public.ingest_crr_submission(first_id,'residential','TEST TRANSACTION ONLY','+19515550199',
    'solarhubmarketplace+rollback@gmail.com','Test only',fields,attrib,'opted_in','2026-09-09T00:00:00Z',FALSE);
  retry_result := public.ingest_crr_submission(first_id,'residential','TEST TRANSACTION ONLY','+19515550199',
    'solarhubmarketplace+rollback@gmail.com','Test only',fields,attrib,'opted_in','2026-09-09T00:00:00Z',FALSE);
  IF first_result->>'lead_id' <> retry_result->>'lead_id' OR NOT (retry_result->>'replayed')::BOOLEAN THEN
    RAISE EXCEPTION 'Identical retry was not idempotent';
  END IF;
  BEGIN
    PERFORM public.ingest_crr_submission(first_id,'residential','DIFFERENT PAYLOAD','+19515550199',
      'solarhubmarketplace+rollback@gmail.com','Test only',fields,attrib,'opted_in','2026-09-09T00:00:00Z',FALSE);
  EXCEPTION WHEN unique_violation THEN mismatch_rejected := TRUE;
  END;
  IF NOT mismatch_rejected THEN RAISE EXCEPTION 'Mismatched retry must be rejected'; END IF;
  second_result := public.ingest_crr_submission(second_id,'residential','TEST TRANSACTION ONLY','+19515550199',
    'solarhubmarketplace+rollback@gmail.com','Test only',fields,
    attrib || '{"landing_page":"/changed-test-page"}'::JSONB,'opted_in','2026-09-09T00:00:00Z',FALSE);
  IF first_result->>'lead_id' <> second_result->>'lead_id' THEN RAISE EXCEPTION 'Repeat person created another lead'; END IF;
  IF (SELECT landing_page FROM public.leads WHERE id=(first_result->>'lead_id')::UUID) <> '/__crr_transaction_test__' THEN
    RAISE EXCEPTION 'Original article overwritten';
  END IF;
  IF (SELECT COUNT(*) FROM public.owner_notification_outbox WHERE submission_id IN (first_id,second_id)) <> 2 THEN
    RAISE EXCEPTION 'Retry produced extra notification or intentional submission was lost';
  END IF;
  IF EXISTS (SELECT 1 FROM public.communication_tasks WHERE lead_id=(first_result->>'lead_id')::UUID) THEN
    RAISE EXCEPTION 'Public intake scheduled sales outreach';
  END IF;
  commercial_result := public.ingest_crr_submission(commercial_id,'commercial','TEST COMMERCIAL ONLY','+19515550198',
    'solarhubmarketplace+rollback@gmail.com','Test only',
    '{"company_name":"TEST ONLY","property_type":"warehouse","property_control":"owner","project_timeline":"research","utility_provider":"SCE"}',
    '{"landing_page":"/__crr_commercial_test__","submitted_from":"/commercial-assessment"}','opted_in','2026-09-09T00:00:00Z',TRUE);
  DELETE FROM public.owner_notification_outbox WHERE submission_id=commercial_id;
  BEGIN
    INSERT INTO public.owner_notification_outbox(submission_id,lead_id,destination,provider_idempotency_key,payload)
    VALUES (commercial_id,(first_result->>'lead_id')::UUID,'test@example.invalid','test-invalid-outbox-pair','{}');
  EXCEPTION WHEN foreign_key_violation THEN outbox_pair_rejected := TRUE;
  END;
  IF NOT outbox_pair_rejected THEN RAISE EXCEPTION 'Outbox accepted a submission attached to another lead'; END IF;
  BEGIN
    INSERT INTO public.lead_referral_outcomes(lead_id,submission_id,partner_name,forwarded_at,recorded_by)
    VALUES ((commercial_result->>'lead_id')::UUID,first_id,'TEST INVALID PAIR',NOW(),'dac3b467-55d5-4f83-b7b4-9bb0fb5f773d');
  EXCEPTION WHEN foreign_key_violation THEN cross_lead_rejected := TRUE;
  END;
  IF NOT cross_lead_rejected THEN RAISE EXCEPTION 'Referral accepted a submission attached to another lead'; END IF;
  SELECT id INTO target_outbox_id FROM public.owner_notification_outbox WHERE submission_id=first_id;
  UPDATE public.owner_notification_outbox SET status='processing',lease_token=envelope_lease,claimed_at=NOW() WHERE id=target_outbox_id;
  PERFORM public.prepare_owner_notification(target_outbox_id,envelope_lease,'from-a@example.invalid','Subject A','<p>A</p>');
  PERFORM public.prepare_owner_notification(target_outbox_id,envelope_lease,'from-b@example.invalid','Subject B','<p>B</p>');
  IF EXISTS (SELECT 1 FROM public.owner_notification_outbox WHERE id=target_outbox_id
    AND (provider_from<>'from-a@example.invalid' OR provider_subject<>'Subject A' OR provider_html<>'<p>A</p>')) THEN
    RAISE EXCEPTION 'Prepared provider envelope changed under the same idempotency key';
  END IF;
  UPDATE public.owner_notification_outbox SET status='pending',lease_token=NULL,claimed_at=NULL WHERE id=target_outbox_id;
  INSERT INTO public.lead_referral_outcomes(lead_id,submission_id,partner_name,forwarded_at,partner_qualified,recorded_by)
  VALUES ((first_result->>'lead_id')::UUID,first_id,'TEST ACCEPTING PARTNER',NOW(),TRUE,'dac3b467-55d5-4f83-b7b4-9bb0fb5f773d'),
         ((first_result->>'lead_id')::UUID,second_id,'TEST REJECTING PARTNER',NOW(),FALSE,'dac3b467-55d5-4f83-b7b4-9bb0fb5f773d');
  SELECT SUM(unique_inquiries) INTO total_count FROM public.get_crr_scorecard(NOW()-INTERVAL '1 minute',NOW()+INTERVAL '1 minute');
  IF total_count <> 1 THEN RAISE EXCEPTION 'Unique inquiry count/test exclusion incorrect: %', total_count; END IF;
  SELECT SUM(partner_qualified) INTO total_count FROM public.get_crr_scorecard(NOW()-INTERVAL '1 minute',NOW()+INTERVAL '1 minute');
  IF total_count <> 1 THEN RAISE EXCEPTION 'Cross-partner qualification count incorrect'; END IF;
  first_result := public.ingest_crr_submission(old_id,'residential','TEST PERIOD OUTCOME','+19515550197',
    'solarhubmarketplace+rollback@gmail.com','Test only',fields,attrib,'opted_in','2026-09-09T00:00:00Z',FALSE);
  UPDATE public.lead_submissions SET received_at=NOW()-INTERVAL '1 year' WHERE submission_id=old_id;
  INSERT INTO public.lead_referral_outcomes(lead_id,submission_id,partner_name,forwarded_at,partner_qualified,recorded_by)
  VALUES ((first_result->>'lead_id')::UUID,old_id,'TEST OLD PARTNER',NOW()-INTERVAL '1 year',TRUE,'dac3b467-55d5-4f83-b7b4-9bb0fb5f773d');
  retry_result := public.ingest_crr_submission(current_id,'residential','TEST PERIOD OUTCOME','+19515550197',
    'solarhubmarketplace+rollback@gmail.com','Test only',fields,attrib,'opted_in','2026-09-09T00:00:00Z',FALSE);
  INSERT INTO public.lead_referral_outcomes(lead_id,submission_id,partner_name,forwarded_at,partner_qualified,recorded_by)
  VALUES ((retry_result->>'lead_id')::UUID,current_id,'TEST CURRENT PARTNER',NOW(),NULL,'dac3b467-55d5-4f83-b7b4-9bb0fb5f773d');
  SELECT SUM(partner_qualified) INTO total_count FROM public.get_crr_scorecard(NOW()-INTERVAL '1 minute',NOW()+INTERVAL '1 minute');
  IF total_count <> 1 THEN RAISE EXCEPTION 'Old-period outcome leaked into current scorecard: %', total_count; END IF;
  PERFORM public.classify_lead_submission(first_id,NULL,TRUE,'dac3b467-55d5-4f83-b7b4-9bb0fb5f773d');
  PERFORM public.classify_lead_submission(second_id,NULL,TRUE,'dac3b467-55d5-4f83-b7b4-9bb0fb5f773d');
  SELECT COALESCE(SUM(unique_inquiries),0) INTO total_count FROM public.get_crr_scorecard(NOW()-INTERVAL '1 minute',NOW()+INTERVAL '1 minute');
  IF total_count <> 1 THEN RAISE EXCEPTION 'Spam submissions remained in scorecard: %', total_count; END IF;
  PERFORM public.classify_lead_submission(first_id,FALSE,FALSE,'dac3b467-55d5-4f83-b7b4-9bb0fb5f773d');
  IF (SELECT COUNT(*) FROM public.lead_submission_classification_audit WHERE submission_id IN (first_id,second_id)) <> 3 THEN
    RAISE EXCEPTION 'Classification audit history missing';
  END IF;
  SELECT id INTO target_outbox_id FROM public.owner_notification_outbox WHERE submission_id=current_id;
  UPDATE public.owner_notification_outbox SET status='failed',attempt_count=1,retry_cycle_attempt_count=1,
    first_attempt_at=NOW()-INTERVAL '25 hours',next_attempt_at=NOW() WHERE id=target_outbox_id;
  INSERT INTO public.owner_notification_delivery_ledger(outbox_id,attempt_number,provider_idempotency_key,delivery_state,error_message)
  SELECT id,1,provider_idempotency_key,'ambiguous','synthetic timeout' FROM public.owner_notification_outbox WHERE id=target_outbox_id;
  PERFORM public.claim_owner_notification(pg_catalog.gen_random_uuid(),10,5,24);
  IF (SELECT status FROM public.owner_notification_outbox WHERE id=target_outbox_id) <> 'ambiguous' THEN
    RAISE EXCEPTION 'Expired provider key was reclaimed after downtime';
  END IF;
  BEGIN
    PERFORM public.reconcile_owner_notification(target_outbox_id,'retry',NULL,'dac3b467-55d5-4f83-b7b4-9bb0fb5f773d');
  EXCEPTION WHEN invalid_parameter_value THEN expired_retry_rejected := TRUE;
  END;
  IF NOT expired_retry_rejected THEN RAISE EXCEPTION 'Expired ambiguous delivery retried without verification'; END IF;
  PERFORM public.reconcile_owner_notification(target_outbox_id,'failed',NULL,'dac3b467-55d5-4f83-b7b4-9bb0fb5f773d');
  PERFORM public.reconcile_owner_notification(target_outbox_id,'retry',NULL,'dac3b467-55d5-4f83-b7b4-9bb0fb5f773d');
  IF EXISTS (SELECT 1 FROM public.owner_notification_outbox WHERE id=target_outbox_id AND (status<>'pending' OR attempt_count<>1 OR retry_cycle_attempt_count<>0 OR first_attempt_at IS NOT NULL)) THEN
    RAISE EXCEPTION 'Verified failed delivery did not reset for controlled retry';
  END IF;
  UPDATE public.owner_notification_outbox SET status='processing',lease_token=envelope_lease,
    attempt_count=attempt_count+1,retry_cycle_attempt_count=retry_cycle_attempt_count+1 WHERE id=target_outbox_id;
  PERFORM public.complete_owner_notification(target_outbox_id,envelope_lease,'synthetic-provider-sent');
  IF (SELECT COUNT(*) FROM public.owner_notification_delivery_ledger WHERE outbox_id=target_outbox_id) <> 2
    OR NOT EXISTS (SELECT 1 FROM public.owner_notification_delivery_ledger WHERE outbox_id=target_outbox_id AND attempt_number=1 AND delivery_state='ambiguous')
    OR NOT EXISTS (SELECT 1 FROM public.owner_notification_delivery_ledger WHERE outbox_id=target_outbox_id AND attempt_number=2 AND delivery_state='sent') THEN
    RAISE EXCEPTION 'Manual retry did not append a fresh sent ledger row';
  END IF;
END $test$;

SELECT set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000099',TRUE);
SET LOCAL ROLE authenticated;
DO $test$ BEGIN
  IF EXISTS (SELECT 1 FROM public.leads) THEN RAISE EXCEPTION 'Non-staff user can read private leads'; END IF;
END $test$;
RESET ROLE;
SELECT set_config('request.jwt.claim.sub','dac3b467-55d5-4f83-b7b4-9bb0fb5f773d',TRUE);
SET LOCAL ROLE authenticated;
DO $test$ BEGIN
  IF NOT public.is_crr_staff() OR NOT EXISTS (SELECT 1 FROM public.leads WHERE phone='+19515550199') THEN
    RAISE EXCEPTION 'Existing owner lost staff access';
  END IF;
END $test$;
RESET ROLE;
SELECT 'PASS: atomic intake, retries, mismatch, attribution, outreach suppression, unique outcomes, test/spam exclusion, classification audit, nonstaff denial, existing-owner access' AS result;
