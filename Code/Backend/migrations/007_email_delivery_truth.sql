-- 007_email_delivery_truth.sql
-- Apply after 006_add_durable_intake_and_referrals.sql.
--
-- WHY
-- ---
-- Until now "sent" meant only "Resend accepted the request". Nothing recorded
-- whether the message reached a mailbox, because no provider webhook was ever
-- wired up. That made the delivery rate unmeasurable, which in turn made the
-- Day-3 delivery gate ("test batch >= 98% delivered") impossible to evaluate.
--
-- It also left `leads.email_status` ambiguous. A review of the 14 real leads on
-- 2026-09-10 found six carrying `failed` whose welcome email had in fact been
-- accepted by Resend within 60 seconds of the lead arriving, with a provider id
-- on every one. The `failed` label came from a LATER sequence-step failure
-- overwriting the earlier success. Only one lead (2026-08-23) genuinely never
-- received mail, and that was a malformed address the wizard accepted.
--
-- This migration makes the distinction storable:
--   accepted  - provider took the request (what "sent" used to mean)
--   delivered - provider confirmed it reached the mailbox
--   bounced   - hard or soft bounce
--   complained- recipient marked it as spam
--   invalid_address - permanently rejected, never retried

-- ---------------------------------------------------------------------------
-- email_logs: per-message delivery lifecycle
-- ---------------------------------------------------------------------------
ALTER TABLE public.email_logs
  ADD COLUMN IF NOT EXISTS delivery_state TEXT,
  ADD COLUMN IF NOT EXISTS delivered_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS bounced_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS complained_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS bounce_type TEXT,
  ADD COLUMN IF NOT EXISTS failure_kind TEXT,
  ADD COLUMN IF NOT EXISTS last_provider_event_at TIMESTAMPTZ;

COMMENT ON COLUMN public.email_logs.delivery_state IS
  'Provider-confirmed lifecycle: accepted | delivered | bounced | complained | invalid_address. NULL on rows written before migration 007.';
COMMENT ON COLUMN public.email_logs.failure_kind IS
  'permanent | transient. Set when a send fails, so the queue can decide whether a retry could ever succeed.';
COMMENT ON COLUMN public.email_logs.bounce_type IS
  'Provider bounce classification where given, e.g. hard, soft, suppressed.';

-- Resend delivers webhook events at least once and can reorder them. Matching
-- on the provider id is how an event finds its row, so that lookup must be fast
-- and the id must be unique where present.
CREATE INDEX IF NOT EXISTS idx_email_logs_resend_email_id
  ON public.email_logs(resend_email_id)
  WHERE resend_email_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_email_logs_delivery_state
  ON public.email_logs(delivery_state)
  WHERE delivery_state IS NOT NULL;

-- ---------------------------------------------------------------------------
-- email_webhook_events: raw provider events, for idempotency and for audit
-- ---------------------------------------------------------------------------
-- Kept separate from email_logs so that (a) a replayed webhook is a no-op via
-- the unique provider_event_id, and (b) an event that arrives for a message we
-- have no row for is still retained rather than dropped on the floor.
CREATE TABLE IF NOT EXISTS public.email_webhook_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  provider TEXT NOT NULL DEFAULT 'resend',
  provider_event_id TEXT,
  event_type TEXT NOT NULL,
  resend_email_id TEXT,
  email_to TEXT,
  email_log_id UUID REFERENCES public.email_logs(id) ON DELETE SET NULL,
  lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
  occurred_at TIMESTAMPTZ,
  payload JSONB NOT NULL,
  applied BOOLEAN NOT NULL DEFAULT FALSE,
  apply_error TEXT,
  received_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_email_webhook_events_provider_event
  ON public.email_webhook_events(provider, provider_event_id)
  WHERE provider_event_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_email_webhook_events_resend_email_id
  ON public.email_webhook_events(resend_email_id);
CREATE INDEX IF NOT EXISTS idx_email_webhook_events_received_at
  ON public.email_webhook_events(received_at DESC);

ALTER TABLE public.email_webhook_events ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.email_webhook_events FROM anon, authenticated;

-- Staff-readable, service-role writable, matching the pattern established in 006.
DROP POLICY IF EXISTS email_webhook_events_staff_read ON public.email_webhook_events;
CREATE POLICY email_webhook_events_staff_read
  ON public.email_webhook_events FOR SELECT
  TO authenticated
  USING (public.is_crr_staff());

-- ---------------------------------------------------------------------------
-- Backfill: make existing rows honest rather than leaving them ambiguous
-- ---------------------------------------------------------------------------
-- Rows that carry a provider id were accepted by Resend. That is all we know
-- about them; we cannot retroactively learn whether they were delivered,
-- because no webhook existed at the time. Say "accepted", not "delivered".
UPDATE public.email_logs
   SET delivery_state = 'accepted'
 WHERE delivery_state IS NULL
   AND status = 'sent'
   AND resend_email_id IS NOT NULL;

-- Rows with no provider id and a validation error never left the building.
UPDATE public.email_logs
   SET delivery_state = 'invalid_address',
       failure_kind = 'permanent'
 WHERE delivery_state IS NULL
   AND status = 'failed'
   AND resend_email_id IS NULL
   AND error_message ILIKE '%invalid%to%field%';

-- Any other historical failure is left unclassified on purpose. Guessing at it
-- would put a fabricated fact in the audit trail.
UPDATE public.email_logs
   SET failure_kind = 'transient'
 WHERE failure_kind IS NULL
   AND status = 'failed'
   AND delivery_state IS NULL;

-- ---------------------------------------------------------------------------
-- leads.email_status: widen the vocabulary and correct the six false labels
-- ---------------------------------------------------------------------------
COMMENT ON COLUMN public.leads.email_status IS
  'accepted | delivered | bounced | complained | invalid_address | sent (legacy, means accepted). Reflects the most advanced state reached by any message to this lead.';

-- The six leads whose welcome email WAS accepted but which read `failed`
-- because a later sequence step failed. Corrected to `accepted` — the strongest
-- claim the evidence supports. Deliberately not `delivered`: no webhook existed
-- when these were sent, so delivery was never confirmed either way.
--
-- Scoped by evidence rather than by a hand-written id list. The test that matters
-- is whether a message ADDRESSED TO THE LEAD was accepted.
--
-- Matching on `email_to = leads.email` rather than on "any accepted row for this
-- lead" is load-bearing, not fussiness. Every lead also generates an owner alert
-- to OWNER_NOTIFICATION_EMAIL, and that alert is accepted even when the message
-- to the homeowner is rejected. The 2026-08-23 lead is exactly that case: its
-- owner alert went out fine while the homeowner's address
-- (a rocketmail address with no top-level domain) was rejected four times. A
-- looser predicate would have relabelled that lead `accepted` and buried the one
-- real delivery failure in the set.
UPDATE public.leads l
   SET email_status = 'accepted'
 WHERE l.email_status = 'failed'
   AND EXISTS (
     SELECT 1 FROM public.email_logs e
      WHERE e.lead_id = l.id
        AND e.status = 'sent'
        AND e.resend_email_id IS NOT NULL
        AND l.email IS NOT NULL
        AND LOWER(e.email_to) = LOWER(l.email)
   );

-- The one lead that genuinely never received mail: every attempt addressed to
-- the homeowner was rejected, and none ever got a provider id.
UPDATE public.leads l
   SET email_status = 'invalid_address'
 WHERE l.email_status = 'failed'
   AND NOT EXISTS (
     SELECT 1 FROM public.email_logs e
      WHERE e.lead_id = l.id
        AND e.status = 'sent'
        AND e.resend_email_id IS NOT NULL
        AND l.email IS NOT NULL
        AND LOWER(e.email_to) = LOWER(l.email)
   )
   AND EXISTS (
     SELECT 1 FROM public.email_logs e
      WHERE e.lead_id = l.id
        AND e.error_message ILIKE '%invalid%to%field%'
   );
