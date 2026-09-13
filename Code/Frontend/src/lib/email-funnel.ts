import axiosClient from './axios';
import { emailCampaignTag, emailVisitPayload, type EmailOffer } from './email-funnel-payload';
export { emailVisitPayload } from './email-funnel-payload';

export function ensureEmailOfferVisit(offer: EmailOffer, search: string): string | null {
  if (typeof window === 'undefined') return null;
  const query = new URLSearchParams(search);
  const campaign = emailCampaignTag(query.get('utm_campaign'));
  const variant = emailCampaignTag(query.get('utm_content')) || '';
  if (query.get('utm_medium')?.toLowerCase() !== 'email' || !campaign) return null;
  const key = `crr_email_visit_v1:${offer}:${campaign}:${variant}`;
  let visitId = '';
  try { visitId = window.sessionStorage.getItem(key) || ''; } catch { /* memory-free fallback */ }
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(visitId)) {
    visitId = window.crypto.randomUUID();
    try { window.sessionStorage.setItem(key, visitId); } catch { /* the UUID still lives in the component */ }
  }
  const payload = emailVisitPayload(offer, search, visitId, query.get('crr_test') === '1');
  if (payload) void axiosClient.post('/intake/email-visit', payload).catch(() => {});
  return visitId;
}
