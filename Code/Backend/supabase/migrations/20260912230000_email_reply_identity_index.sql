-- Keep reply lookups and recipient-wide stop enforcement efficient as the
-- lifecycle event table grows.
create index if not exists email_reply_events_identity_idx
  on public.email_reply_events(email_identity_id);
