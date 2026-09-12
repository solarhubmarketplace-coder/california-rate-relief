import axiosClient from './axios';
import { acquisition, currentPath, deriveLeadSource, gaClientId, type FirstTouch } from './attribution';
import { recordJourneyPage, type LeadJourney } from './lead-journey';
export { createSubmissionId, getOrCreateSubmissionAttempt, submissionIdAfterResult } from './submission-identity';

export type IntakeSegment = 'residential' | 'commercial';

/**
 * Location keys every submission carries inside qualification_data.
 *
 * service_zip and city are the visitor's own answers and are what the backend
 * copies onto leads.zip and leads.city. The derived_* keys come from the ZIP
 * seed table in ./ca-utility-by-zip and sit BESIDE utility_provider rather than
 * replacing it, so a disagreement between the visitor's utility and the derived
 * one stays visible instead of being silently overwritten.
 */
export interface IntakeLocationFields {
  service_zip?: string;
  city?: string | null;
  derived_utility?: string | null;
  derived_cca?: string | null;
  derived_county?: string | null;
  derived_from?: string;
  derived_utility_matches_selection?: boolean | null;
}

export interface IntakePayload {
  submission_id: string;
  segment: IntakeSegment;
  contact: {
    name: string;
    phone: string;
    email?: string;
    address?: string;
  };
  qualification_data: Record<string, string | number | boolean | null> & IntakeLocationFields;
  attribution: {
    source: string;
    acquisition_source?: string;
    acquisition_medium?: string;
    original_acquisition_source?: string;
    original_acquisition_medium?: string;
    organic_landing_page?: string;
    gclid?: string;
    gbraid?: string;
    wbraid?: string;
    msclkid?: string;
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
    journey?: LeadJourney;
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
    acquisition_source: acquisition(firstTouch).source,
    acquisition_medium: acquisition(firstTouch).medium,
    organic_landing_page: acquisition(firstTouch).medium === 'organic' ? firstTouch?.landing_page : undefined,
    gclid: firstTouch?.gclid ?? undefined,
    gbraid: firstTouch?.gbraid ?? undefined,
    wbraid: firstTouch?.wbraid ?? undefined,
    msclkid: firstTouch?.msclkid ?? undefined,
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
    journey: recordJourneyPage() ?? undefined,
  };
  return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined)) as IntakePayload['attribution'];
}

export async function submitIntake(payload: IntakePayload): Promise<IntakeResponse> {
  return await axiosClient.post('/intake', payload) as unknown as IntakeResponse;
}
