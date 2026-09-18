// =============================================================================
// utility-rate-tracker.ts — the single source for the rate figures that
// /california-utility-rate-tracker publishes.
//
// WHY THIS FILE EXISTS
// The tracker page (src/app/california-utility-rate-tracker/page.tsx) used to
// hold its current-rate figures inline. Any second page that wanted "the
// current average residential rate for SDG&E" therefore had to re-type it, and
// a re-typed rate is exactly the failure that forced the 71-row PG&E rate
// correction. Every figure here is restated from the cited primary source with
// that source's own fetched date; nothing here is model-recalled.
//
// STANDING RULES (CALIFORNIA_STRATEGY_OF_RECORD_2026-09-17.md §7.2, §7.3)
//   - Every number carries a source URL and a verified date.
//   - Rate data must never come from model training data. Fetch and cite, or
//     leave a marked TODO. A utility with no sourced figure carries null here
//     and renders as "not sourced", never as a number.
// =============================================================================

export const RATE_TRACKER_PATH = '/california-utility-rate-tracker';
export const RATE_TRACKER_LAST_UPDATED = '2026-09-18';
export const RATE_TRACKER_VERIFIED = '2026-09-17';
export const RATE_TRACKER_VERIFIED_DISPLAY = '17 Sep 2026';

export const Q2_2026_URL =
  'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf';
export const Q1_2026_URL =
  'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260430-public-advocates-office-q1-2026-electric-rates-report.pdf';
export const Q4_2025_URL =
  'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260210-public-advocates-office-q4-2025-rates-report.pdf';
export const Q3_2025_URL =
  'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/251106-public-advocates-office-q3-2025-rates-report.pdf';
export const Q2_2025_URL =
  'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/250827-public-advocates-office-q2-2025-rates-report.pdf';
export const DECISION_24_05_028_URL =
  'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M531/K686/531686019.PDF';
export const SMUD_SCHEDULE_R_URL =
  'https://www.smud.org/-/media/Documents/Rate-Information/Rates/1-R.ashx';
export const LADWP_STALE_PDF_URL =
  'https://www.ladwp.com/sites/default/files/documents/LADWP_Electric_Rates.pdf';
export const PAO_REPORTS_INDEX_URL =
  'https://www.publicadvocates.cpuc.ca.gov/press-room/reports-and-analyses';

/** Utilities the tracker covers. A city page may only reference one of these. */
export type UtilityRateKey = 'pge' | 'sce' | 'sdge' | 'smud' | 'ladwp';

export interface UtilityRateRecord {
  key: UtilityRateKey;
  /** Display name, plain text (no HTML entities) so it is safe in <title>. */
  name: string;
  /** Longer legal/marketing name for first mention. */
  longName: string;
  /**
   * The CPUC Public Advocates Office "Residential Average Rate" in cents per
   * kWh, exactly as the cited report states it. null when no comparable figure
   * is published for this utility — publicly owned utilities are not covered by
   * the Public Advocates Office reports.
   */
  averageResidentialRateCents: number | null;
  /** The same figure expressed per kWh, as the tracker prints it. */
  averageResidentialRatePerKwh: string | null;
  /** What the figure is as-of, in the source's own words. */
  asOf: string;
  /** Link text for the source of the rate figure. */
  sourceLabel: string;
  /** Source URL for the rate figure, or null when nothing current was found. */
  sourceUrl: string | null;
  /** One sentence a reader needs in order to read the figure correctly. */
  basisNote: string;
  /** ISO date the source was fetched and the figure verified against it. */
  fetchedAt: string;
}

const RECORDS: Record<UtilityRateKey, UtilityRateRecord> = {
  pge: {
    key: 'pge',
    name: 'PG&E',
    longName: 'Pacific Gas and Electric Company',
    averageResidentialRateCents: 33.7,
    averageResidentialRatePerKwh: '0.337',
    asOf: 'June 2026 (unchanged since March 2026)',
    sourceLabel: 'CPUC Public Advocates Office, Q2 2026 Electric Rates Report, p.8, 20',
    sourceUrl: Q2_2026_URL,
    basisNote:
      'a bundled generation-plus-delivery average across the whole residential class, excluding the California Climate Credit',
    fetchedAt: RATE_TRACKER_VERIFIED,
  },
  sce: {
    key: 'sce',
    name: 'SCE',
    longName: 'Southern California Edison',
    averageResidentialRateCents: 34.4,
    averageResidentialRatePerKwh: '0.344',
    asOf: 'June 1, 2026',
    sourceLabel: 'CPUC Public Advocates Office, Q2 2026 Electric Rates Report, p.8, 22',
    sourceUrl: Q2_2026_URL,
    basisNote:
      'a bundled generation-plus-delivery average across the whole residential class, excluding the California Climate Credit',
    fetchedAt: RATE_TRACKER_VERIFIED,
  },
  sdge: {
    key: 'sdge',
    name: 'SDG&E',
    longName: 'San Diego Gas & Electric',
    averageResidentialRateCents: 45.5,
    averageResidentialRatePerKwh: '0.455',
    asOf: 'June 1, 2026',
    sourceLabel: 'CPUC Public Advocates Office, Q2 2026 Electric Rates Report, p.8, 24',
    sourceUrl: Q2_2026_URL,
    basisNote:
      'a bundled generation-plus-delivery average across the whole residential class, excluding the California Climate Credit',
    fetchedAt: RATE_TRACKER_VERIFIED,
  },
  smud: {
    key: 'smud',
    name: 'SMUD',
    longName: 'Sacramento Municipal Utility District',
    // SMUD is a publicly owned utility, outside the Public Advocates Office
    // reports, and publishes no single blended average rate. No comparable
    // figure exists to state, so none is stated.
    averageResidentialRateCents: null,
    averageResidentialRatePerKwh: null,
    asOf: 'Schedule R (RF01) effective May 1, 2025',
    sourceLabel: 'SMUD Residential Rate Schedule R',
    sourceUrl: SMUD_SCHEDULE_R_URL,
    basisNote:
      'SMUD is a publicly owned utility and publishes a seasonal tiered schedule rather than a single blended average rate, so no comparable average is published here',
    fetchedAt: RATE_TRACKER_VERIFIED,
  },
  ladwp: {
    key: 'ladwp',
    name: 'LADWP',
    longName: 'Los Angeles Department of Water and Power',
    averageResidentialRateCents: null,
    averageResidentialRatePerKwh: null,
    asOf: 'no current tariff document retrieved',
    sourceLabel: 'No current LADWP tariff document could be retrieved',
    sourceUrl: null,
    basisNote:
      'the only retrievable LADWP tariff document is dated July 1, 2009 and is not current, so no LADWP rate is published',
    fetchedAt: RATE_TRACKER_VERIFIED,
  },
};

export const UTILITY_RATE_RECORDS = RECORDS;

export function getUtilityRate(key: UtilityRateKey): UtilityRateRecord {
  return RECORDS[key];
}

/** "33.7 cents per kWh" style, or an honest absence. Never invents a number. */
export function formatAverageRateCents(record: UtilityRateRecord): string {
  return record.averageResidentialRateCents === null
    ? 'not published on the tracker'
    : `${record.averageResidentialRateCents.toFixed(1)}¢/kWh`;
}

/** The tracker table's own rendering, which also prints the per-kWh form. */
export function formatAverageRateWithPerKwh(record: UtilityRateRecord): string {
  if (record.averageResidentialRateCents === null) return 'Not sourced';
  return `${formatAverageRateCents(record)} (${'$'}${record.averageResidentialRatePerKwh})`;
}
