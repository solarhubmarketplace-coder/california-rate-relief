-- Extra database guards for the campaign measurement contract.

alter table public.email_logs
  add constraint email_logs_campaign_key_format
  check (campaign_key is null or campaign_key ~ '^[A-Za-z0-9_-]{1,80}$') not valid;
alter table public.email_logs validate constraint email_logs_campaign_key_format;

alter table public.email_logs
  add constraint email_logs_variant_key_format
  check (variant_key is null or variant_key ~ '^[A-Za-z0-9_-]{1,80}$') not valid;
alter table public.email_logs validate constraint email_logs_variant_key_format;

alter table public.email_logs
  add constraint email_logs_holdout_never_sent
  check (not (is_holdout and status = 'sent')) not valid;
alter table public.email_logs validate constraint email_logs_holdout_never_sent;

alter table public.email_campaign_assignments
  add constraint email_campaign_assignments_permission_required
  check (is_test or is_holdout or permission_event_id is not null) not valid;
alter table public.email_campaign_assignments validate constraint email_campaign_assignments_permission_required;
