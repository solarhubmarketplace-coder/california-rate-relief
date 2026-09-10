-- Back-fill lead_referral_outcomes for the 14 real leads
-- =============================================================================
-- Week 1 item 7. Prepared 10 September 2026. NOT RUN — this needs facts only
-- Chad and his sales partner have.
--
-- WHY IT MATTERS: lead_referral_outcomes has ZERO rows. Nothing in the system
-- records what happened to any lead after it was handed over. Until that table
-- has data there is no cost per lead, no close rate, no way to tell which city
-- or which page produces leads worth having, and therefore no defensible way to
-- choose what content to build next.
--
-- HOW TO USE THIS
--   1. Run STEP 1 to print the 14 real leads with everything the system knows.
--   2. For each, fill in one row in STEP 2. Leave a column NULL if you genuinely
--      do not know — a NULL is honest, a guess poisons the numbers you are about
--      to make decisions with.
--   3. Run STEP 3 to check what you entered.
--
-- Do NOT invent dates. If you know a lead was contacted but not when, set
-- partner_contacted_at NULL and put the note in qualification_reason. An
-- approximate timestamp will later look like a measurement.
-- =============================================================================


-- -----------------------------------------------------------------------------
-- STEP 1 — the 14 real leads, oldest first
-- -----------------------------------------------------------------------------
-- Test rows are excluded by source, not by the is_test flag: the flag was only
-- applied to 3 of the 8 synthetic rows, so filtering on it alone would leave
-- five test leads in the list. The four 2026-04-09 rows are all tests
-- ("Test Call Lead", "Chad Simpson", "Test User", "Schema Test").
SELECT
  ROW_NUMBER() OVER (ORDER BY l.created_at)          AS n,
  l.id                                              AS lead_id,
  l.created_at::date                                AS arrived,
  l.name,
  l.email,
  l.phone,
  l.source,
  l.utility_provider                                AS utility,
  l.bill_amount                                     AS bill,
  l.credit_score                                    AS credit_self_report,
  l.status                                          AS crm_status,
  l.email_status,
  COALESCE(l.city, '(never captured)')               AS city,
  COALESCE(l.landing_page, '(no attribution)')       AS landing_page
FROM public.leads l
WHERE COALESCE(l.is_test, FALSE) = FALSE
  AND l.source NOT IN ('manual_test', 'railway_e2e', 'crr_release_e2e', 'crr_journey_e2e')
  AND l.created_at::date <> '2026-04-09'
ORDER BY l.created_at;


-- -----------------------------------------------------------------------------
-- STEP 2 — one row per lead. Edit before running.
-- -----------------------------------------------------------------------------
-- partner_qualified: TRUE, FALSE, or NULL if never assessed.
-- qualification_reason: free text. On a FALSE or a loss, say why in one line.
-- The four *_at timestamps: real dates only, or NULL.
-- partner_reference: whatever the partner calls the lead in his own system.
-- recorded_by: 'chad-backfill-2026-09-10' so these rows are distinguishable
--   from anything the dashboard writes going forward. Do not change it.
--
-- Copy the template block for each of the 14 leads. lead_id comes from STEP 1.
-- submission_id stays NULL: lead_submissions only started capturing on 5 Sep and
-- none of these 14 has one.

-- INSERT INTO public.lead_referral_outcomes (
--   lead_id,
--   submission_id,
--   partner_name,
--   forwarded_at,
--   partner_qualified,
--   qualification_reason,
--   partner_contacted_at,
--   appointment_at,
--   sale_at,
--   lost_at,
--   partner_reference,
--   recorded_by
-- ) VALUES
-- -- 1. 2026-03-29  google_ads  SCE  $175  credit yes  (crm: contacted)
-- ('<lead_id>', NULL, '<partner name>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'chad-backfill-2026-09-10'),
-- -- 2. 2026-06-17  organic  PG&E  $275  credit yes  (crm: new, email was accepted)
-- ('<lead_id>', NULL, '<partner name>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'chad-backfill-2026-09-10'),
-- -- ... repeat through 14
-- ;


-- -----------------------------------------------------------------------------
-- STEP 3 — verify what you entered
-- -----------------------------------------------------------------------------
-- SELECT
--   l.created_at::date                AS arrived,
--   l.source,
--   l.utility_provider                AS utility,
--   l.bill_amount                     AS bill,
--   o.partner_qualified,
--   o.partner_contacted_at::date      AS contacted,
--   o.appointment_at::date            AS appointment,
--   o.sale_at::date                   AS sold,
--   o.lost_at::date                   AS lost,
--   LEFT(COALESCE(o.qualification_reason, ''), 60) AS reason
-- FROM public.leads l
-- LEFT JOIN public.lead_referral_outcomes o ON o.lead_id = l.id
-- WHERE COALESCE(l.is_test, FALSE) = FALSE
--   AND l.source NOT IN ('manual_test', 'railway_e2e', 'crr_release_e2e', 'crr_journey_e2e')
--   AND l.created_at::date <> '2026-04-09'
-- ORDER BY l.created_at;


-- -----------------------------------------------------------------------------
-- STEP 4 — the numbers this unlocks, once STEP 2 is filled in
-- -----------------------------------------------------------------------------
-- These are the only questions that decide where six months of content work
-- should point. None of them can be answered today.
--
-- SELECT
--   COUNT(*)                                                              AS leads,
--   COUNT(o.partner_contacted_at)                                         AS ever_contacted,
--   COUNT(*) FILTER (WHERE o.partner_qualified IS TRUE)                   AS qualified,
--   COUNT(o.appointment_at)                                               AS appointments,
--   COUNT(o.sale_at)                                                      AS sold,
--   ROUND(100.0 * COUNT(o.sale_at) / NULLIF(COUNT(*), 0), 1)              AS close_pct,
--   ROUND(100.0 * COUNT(o.sale_at) / NULLIF(COUNT(o.partner_contacted_at), 0), 1)
--                                                                         AS close_pct_of_worked
-- FROM public.leads l
-- JOIN public.lead_referral_outcomes o ON o.lead_id = l.id
-- WHERE COALESCE(l.is_test, FALSE) = FALSE;
--
-- And by utility, which is the one that changes what gets built:
--
-- SELECT l.utility_provider,
--        COUNT(*) AS leads,
--        COUNT(o.sale_at) AS sold
-- FROM public.leads l
-- JOIN public.lead_referral_outcomes o ON o.lead_id = l.id
-- WHERE COALESCE(l.is_test, FALSE) = FALSE
-- GROUP BY 1 ORDER BY 2 DESC;
--
-- Note on that last one: SCE is 7 of the 14 and PG&E is 6, so the split is
-- nearly even and the sample is far too small to act on. Twenty worked leads
-- with logged outcomes is the point at which it starts meaning something.
