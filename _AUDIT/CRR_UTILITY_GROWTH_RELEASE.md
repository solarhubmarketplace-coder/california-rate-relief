# CRR utility growth release — 2026-09-09

Status: implementation prepared locally; production migration, deployment and inbox verification pending. This file does not certify a live release.

## Scope

The release builds on the utility/bill articles identified in the supplied September 9 audit. The audit's 131/199 blog clicks (66%, August 10–September 6) and 14/18 historical PG&E/SCE leads (78%, March–August) are separate observations. They do not establish that a specific article produced those leads.

Week-one cohort, retaining existing ranked URLs:

| Page | Supplied audit baseline | Work |
|---|---|---|
| `/blog/pge-vs-sce-vs-sdge-rates-compared` | 24 clicks / 2,524 impressions / position 6.5 / CTR 1.0% | Sourced utility averages and comparison, appropriate next steps, one Article schema |
| `/blog/why-is-my-pge-bill-so-high` | 7 clicks / 1,439 impressions / position 8.0 / CTR 0.5% | Direct bill explanation, current sourced context, contextual assessment path |
| `/blog/pge-time-of-use-rates-2026` | New route; no historical page baseline | E-TOU-C / E-TOU-D guide with dated tariff sources and internal links |

The table is transcribed from the supplied audit, not a fresh GSC export. Before/after acquisition reporting must use the same property, period length and filters. See `CRR_UTILITY_CONTENT_RESEARCH_2026-09-09.md` for primary sources and article review.

## Implemented behavior

- Global CRR first-touch capture preserves article, channel, UTMs, click IDs and submission page through navigation. Existing attribution fields remain present; other working copies are untouched.
- Separate residential and commercial intake. Both collect project ZIP; commercial collects company, property type/control, location, utility, bill range and timing without homeowner credit screening.
- `/api/intake` accepts a validated payload and returns only an acknowledgment. An immutable submission UUID/payload survives a retry in the mounted form. The database atomically stores the submission and owner-notification work item. An identical retry replays its acknowledgment; a changed payload under the same UUID is rejected.
- Same normalized phone maps to the existing lead; submissions retain their own history. A deliberately new submission can generate a new owner notification. This is distinct from retrying an existing submission.
- A durable notification worker uses a lease and a fixed provider key. Destination, sender, subject and HTML are frozen before the first send. Retryable failures retry within Resend's 24-hour idempotency window. Expired or unresolved deliveries require staff reconciliation; no automatic resend after that window.
- Notifications go to `solarhubmarketplace@gmail.com`, include both IDs, project details and attribution. Test notifications are labeled. New intake never enters the legacy email/SMS/voice sales sequence, including old queued tasks for a matching existing lead.
- Staff API access requires a verified Supabase bearer token and the private staff allowlist. Database policies restrict existing broad authenticated access. Only the existing confirmed business owner is seeded. Public Twilio callbacks require a valid signature; customer opt-out is limited to opt-out and a minimal acknowledgment.
- `/dashboard/referrals` records manual handoffs and partner feedback, reasons and stage dates. A scorecard groups unique prospects by week, segment, original page, utility and ZIP/county. Tests/spam can be classified without deleting evidence. Qualification is tied to eligible submissions in the selected cohort, not a call or an old/test referral.
- Commercial links route to `/commercial-assessment`, including shared CTAs and two commercial blog buttons. The known PPA link is corrected; commercial hubs link to warehouse and multifamily guides. No bulk city expansion.
- Homepage and primary intake copy explain CRR's private referral role. Unsupported guarantees and urgency were removed from those paths. CRR default search/social metadata and its new social card use the referral offer. Other sites' metadata defaults remain unchanged.

## Owner operation after release

1. Review the business inbox at least twice each business day. Use the lead ID for partner communication; keep the submission ID for the specific inquiry.
2. Assess location, property control, project fit and partner coverage. Forward suitable inquiries manually through the existing workflow. The application does not send partner referrals.
3. Sign in at `https://ratereliefca.com/login` with the existing `solarhubmarketplace@gmail.com` Supabase account and open `/dashboard/referrals`. Select the inquiry, record the partner and actual forwarding date, and retain any partner reference.
4. Record weekly partner feedback. Qualified means the partner confirmed a unique, reachable prospect with a serviceable project and decision-making authority. Record the reason. Missing feedback stays unknown. Record contact, appointment, sale and lost dates separately.
5. Mark tests and spam so they do not enter business counts. Reporting classification preserves the submission and classification audit.
6. Compare the same date ranges in GSC/GA4 and the CRM cohort. GA4 supplies acquisition/form events; the CRM supplies business outcomes. GA4 key-event configuration and DebugView still require live verification.

## Release procedure

Production is Railway `kind-acceptance`: frontend `artistic-appreciation`, backend `california-rate-relief`; Supabase project `Sun Speed` (`qrqifbhngwpuuuuszgge`). Do not use the disabled duplicate `considerate-solace`. Shared main also triggers the Vercel affiliate deployment.

1. Verify remote main still matches the reviewed base or reconcile new changes normally. Preserve the other dirty worktrees.
2. Run migration 006 plus `scripts/test-durable-intake-transaction.sql` in a single transaction on the actual database, then ROLLBACK. The transaction refuses to run against a populated owner outbox so claim tests cannot touch real delivery work. If any SQL fails, ROLLBACK and fix it before proceeding.
3. Apply migration 006 inside a transaction and COMMIT only on success. It must precede the backend release. The SQL verification script provides read-only postchecks.
4. Push the reviewed commit to main and confirm both intended Railway deployments and Vercel report the correct commit. The narrow legacy `/api/leads` intake adapter supports an old cached form during the rolling release; all private CRM routes remain authenticated.
5. Test from a residential utility article and a commercial guide through their real forms. Use clearly synthetic names, reserved 555-01xx numbers and controlled inbox aliases. Verify original page, submitted page, utility, ZIP, consent, lead/submission IDs, outbox status, provider ID and actual Gmail receipt. Mark any UI-created test as a test in the protected workflow.
6. Replay the exact same submission payload/ID and verify no second delivery. Test anonymous private API denial and existing-owner access. Confirm no sales-contact tasks were created for test leads.
7. Record exact live deployment IDs, commits, test IDs, inbox message IDs and limitations in the root operations audit. A successful build or form acknowledgment alone is not inbox-delivery proof.

## Validation and outstanding work

At the backend freeze: 53 focused Jest tests passed. The PGlite 0.5.8 harness passed the migration and transactional assertions against a fixture based on the inspected production schema. This is supplemental local PostgreSQL evidence, not production verification. The earlier full Jest run retained eight pre-existing failures in lead-service, context, config and AI-script suites.

Frontend TypeScript and six attribution/routing/retry tests passed at the worker checkpoint. Root's final build and HTTP validation are recorded in the operations audit after the final changes.

Remaining live gates: actual Supabase transaction/migration; Railway/Vercel deployment; both end-to-end inbox receipts; browser desktop/mobile verification; staff login and GA4 event/key-event verification. Browser control stalled with CDP focus and webview-attach timeouts during this session; saved tab listings alone do not prove current access.

Weeks 2–12 remain the approved measured cadence, not prepublished bulk content: two substantial refreshes weekly and at most one new distinct, sourced supporting page. WWW/DNS, broader breadcrumb/schema cleanup, cohort indexing/mobile performance, partner coverage and permissioned case examples remain in the growth plan. No new paid tool, advertising, purchased links or automatic partner outreach was added.
