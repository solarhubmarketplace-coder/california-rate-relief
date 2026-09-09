import axiosClient from './axios';
import { currentPath, deriveLeadSource, gaClientId, type FirstTouch } from './attribution';
export { createSubmissionId, getOrCreateSubmissionAttempt, submissionIdAfterResult } from './submission-identity';

export type IntakeSegment = 'residential' | 'commercial';

export interface IntakePayload {
  submission_id: string;
  segment: IntakeSegment;
  contact: {
    name: string;
    phone: string;
    email?: string;
    address?: string;
  };
  qualification_data: Record<string, string | number | boolean | null>;
  attribution: {
    source: string;
    gclid?: string;
    fbclid?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
    landing_page?: string;
    landing_city_slug?: string;
    landing_page_type?: string;
    submitted_from?: string;
    referrer?: string;
    ga_client_id?: string;
    captured_at?: string;
  };
  consent?: {
    status: 'opted_in';
    timestamp: string;
  };
}

export interface IntakeResponse {
  message: string;
  data: {
    submission_id: string;
    lead_id: string;
    segment: IntakeSegment;
    status: 'received';
    duplicate: boolean;
  };
  timestamp: string;
}

export function intakeAttribution(firstTouch: FirstTouch | null): IntakePayload['attribution'] {
  const value = {
    source: deriveLeadSource(firstTouch),
    gclid: firstTouch?.gclid ?? undefined,
    fbclid: firstTouch?.fbclid ?? undefined,
    utm_source: firstTouch?.utm_source ?? undefined,
    utm_medium: firstTouch?.utm_medium ?? undefined,
    utm_campaign: firstTouch?.utm_campaign ?? undefined,
    utm_content: firstTouch?.utm_content ?? undefined,
    utm_term: firstTouch?.utm_term ?? undefined,
    landing_page: firstTouch?.landing_page ?? undefined,
    landing_city_slug: firstTouch?.landing_city_slug ?? undefined,
    landing_page_type: firstTouch?.landing_page_type ?? undefined,
    submitted_from: currentPath() ?? undefined,
    referrer: firstTouch?.referrer ?? undefined,
    ga_client_id: gaClientId() ?? undefined,
    captured_at: firstTouch?.captured_at ?? undefined,
  };
  return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined)) as IntakePayload['attribution'];
}

export async function submitIntake(payload: IntakePayload): Promise<IntakeResponse> {
  return await axiosClient.post('/intake', payload) as unknown as IntakeResponse;
}
