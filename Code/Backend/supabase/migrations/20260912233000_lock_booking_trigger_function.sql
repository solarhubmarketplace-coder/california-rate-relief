-- Supabase default function privileges grant client roles EXECUTE. A trigger
-- function cannot be called as a normal function, but remove those grants so
-- the appointment exit remains an internal database control.

revoke all on function public.stop_crr_promotion_on_appointment() from public;
revoke all on function public.stop_crr_promotion_on_appointment() from anon;
revoke all on function public.stop_crr_promotion_on_appointment() from authenticated;
grant execute on function public.stop_crr_promotion_on_appointment() to service_role;

