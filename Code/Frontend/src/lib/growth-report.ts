export interface GrowthMonth {
  calendar_month: string;
  unique_organic_stored: number;
  owner_notification_accepted: number;
  provider_delivery_confirmed: number;
  receipt_confirmed: number;
  submission_cohort_receipt_confirmed?: number;
  failed: number;
  unknown: number;
  repeated_contact_submissions: number;
}
export interface GrowthReport {
  from: string;
  to_exclusive: string;
  timezone: string;
  stored_submissions: number;
  legacy_leads_without_submission?: number;
  durable_capture_started_at?: string | null;
  excluded_tests: number;
  excluded_spam: number;
  unknown_origin: number;
  non_organic: number;
  months: GrowthMonth[];
  landing_pages: {
    calendar_month: string;
    landing_page: string;
    unique_organic_stored: number;
    receipt_confirmed: number;
    submission_cohort_receipt_confirmed?: number;
  }[];
}
/** Pacific first-of-month boundaries, independent of the browser's local zone. */
export function pacificMonthRange(month: string) {
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) throw new Error("Use YYYY-MM.");
  const [year, m] = month.split("-").map(Number);
  const boundary = (y: number, n: number) => {
    // UTC midnight is the preceding Pacific afternoon. Use the offset in force
    // at local midnight, before a possible 2 a.m. November 1 DST transition.
    const anchor = new Date(Date.UTC(y, n - 1, 1));
    const offset = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      timeZoneName: "shortOffset",
    })
      .formatToParts(anchor)
      .find((x) => x.type === "timeZoneName")?.value;
    const hours = Number(offset?.replace("GMT", "") || NaN);
    if (!Number.isFinite(hours))
      throw new Error("Pacific timezone could not be resolved.");
    return new Date(Date.UTC(y, n - 1, 1, -hours)).toISOString();
  };
  return {
    from: boundary(year, m),
    to: boundary(m === 12 ? year + 1 : year, m === 12 ? 1 : m + 1),
  };
}
