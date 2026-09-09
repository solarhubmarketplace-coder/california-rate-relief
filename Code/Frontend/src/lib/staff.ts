import axiosClient from './axios';

interface ApiEnvelope<T> {
  message: string;
  data: T;
  timestamp: string;
}

export interface ReferralRecord {
  id: string;
  lead_id: string;
  submission_id: string;
  partner_name: string;
  forwarded_at: string;
  partner_qualified: boolean | null;
  qualification_reason: string | null;
  partner_contacted_at: string | null;
  appointment_at: string | null;
  sale_at: string | null;
  lost_at: string | null;
  partner_reference: string | null;
}

export interface ScorecardRow {
  week_start: string;
  segment: 'residential' | 'commercial';
  original_landing_page?: string | null;
  utility_provider?: string | null;
  geography?: string | null;
  unique_inquiries: number;
  forwarded: number;
  partner_qualified: number;
  partner_rejected: number;
  qualification_unknown: number;
  contacted: number;
  appointments: number;
  sales: number;
}

export interface CreateReferralInput {
  lead_id: string;
  submission_id: string;
  partner_name: string;
  forwarded_at: string;
  partner_reference?: string | null;
}

export interface SubmissionRecord {
  submission_id: string;
  lead_id: string;
  segment: 'residential' | 'commercial';
  is_test: boolean;
  is_spam: boolean;
  received_at: string;
  attribution: { landing_page?: string };
  leads: { name: string; phone: string; email: string | null } | null;
}

export async function fetchSubmissions(from: string, to: string): Promise<SubmissionRecord[]> {
  const response = await axiosClient.get('/staff/submissions', rangeParams(from, to)) as unknown as ApiEnvelope<SubmissionRecord[]>;
  return response.data;
}

export type ReferralOutcomeUpdate = Partial<Pick<ReferralRecord,
  'partner_qualified' | 'qualification_reason' | 'partner_contacted_at' |
  'appointment_at' | 'sale_at' | 'lost_at' | 'partner_reference'>>;

export async function classifySubmission(id: string, flags: { is_test: boolean; is_spam: boolean }): Promise<void> {
  await axiosClient.patch(`/staff/submissions/${encodeURIComponent(id)}/classification`, flags);
}

function rangeParams(from: string, to: string) {
  return { params: { from, to } };
}

export async function fetchReferrals(from: string, to: string): Promise<ReferralRecord[]> {
  const response = await axiosClient.get('/staff/referrals', rangeParams(from, to)) as unknown as ApiEnvelope<ReferralRecord[]>;
  return response.data;
}

export async function fetchScorecard(from: string, to: string): Promise<ScorecardRow[]> {
  const response = await axiosClient.get('/staff/scorecard', rangeParams(from, to)) as unknown as ApiEnvelope<ScorecardRow[]>;
  return response.data;
}

export async function createReferral(input: CreateReferralInput): Promise<ReferralRecord> {
  const response = await axiosClient.post('/staff/referrals', input) as unknown as ApiEnvelope<ReferralRecord>;
  return response.data;
}

export async function updateReferral(id: string, input: ReferralOutcomeUpdate): Promise<ReferralRecord> {
  const response = await axiosClient.patch(`/staff/referrals/${id}`, input) as unknown as ApiEnvelope<ReferralRecord>;
  return response.data;
}
