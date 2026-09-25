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
export const RATE_TRACKER_LAST_UPDATED = '2026-09-22';
export const RATE_TRACKER_VERIFIED = '2026-09-22';
export const RATE_TRACKER_VERIFIED_DISPLAY = '22 Sep 2026';

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
// 2026-09-22 reviewed draft (source ledger #15/#16): SMUD's own Schedule R
// tariff PDF above (1-R.ashx) still displays stale May 2025 figures. The
// Rate Guide and Residential Rates page below carry the current, effective
// January 1, 2026 figures and are what this tracker cites for SMUD now.
export const SMUD_RATE_GUIDE_URL =
  'https://www.smud.org/-/media/Documents/Rate-Information/Residential-Rates/Residential-Rate-Guide.ashx';
export const SMUD_RESIDENTIAL_RATES_URL =
  'https://www.smud.org/Rate-Information/Residential-rates';
export const LADWP_STALE_PDF_URL =
  'https://www.ladwp.com/sites/default/files/documents/LADWP_Electric_Rates.pdf';
export const LADWP_RESIDENTIAL_RATES_URL =
  'https://www.ladwp.com/account/understanding-your-rates/residential-electric-rates';
/** LADWP's page with the current R-1A and R-1B totals by tier and period. */
export const LADWP_R1A_RATES_URL =
  'https://www.ladwp.com/account/customer-service/electric-rates/residential-rates';
export const PAO_REPORTS_INDEX_URL =
  'https://www.publicadvocates.cpuc.ca.gov/press-room/reports-and-analyses';

/** Utilities the tracker covers. A city page may only reference one of these. */
export type UtilityRateKey =
  | 'pge'
  | 'sce'
  | 'sdge'
  | 'smud'
  | 'ladwp'
  // Publicly owned utilities. The CPUC Public Advocates Office quarterly rate
  // reports cover the investor-owned utilities only, so these records carry no
  // average rate and point the reader at the utility's own published schedule.
  // They exist so that /solar-cost/<city> can name the correct biller for a
  // municipal city instead of mis-stating it as PG&E or SCE. The rate-tracker
  // page reads its rows by name and does not iterate this map, so adding them
  // does not change what that page renders.
  | 'roseville'
  | 'mid'
  | 'anaheim'
  | 'corona'
  // 2026-09-23 (Tier 2 city-cost wave): two more publicly owned utilities, so
  // /solar-cost/riverside and /solar-cost/pasadena name the right biller.
  | 'riverside'
  | 'pasadena'
  // 2026-09-23 (Tier 3 city-cost wave): more city-owned utilities, so
  // /solar-cost/santa-clara, /solar-cost/glendale and /solar-cost/redding
  // name the right biller.
  | 'svp'
  | 'gwp'
  | 'reu';

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
    // 2026-09-22: updated from the stale May 1, 2025 Schedule R figures to
    // the current Fixed Rate plan, effective January 1, 2026 (reviewed
    // draft source ledger #15, SMUD 2026 Residential Rate Guide).
    asOf: 'Fixed Rate plan effective January 1, 2026',
    sourceLabel: 'SMUD 2026 Residential Rate Guide',
    sourceUrl: SMUD_RATE_GUIDE_URL,
    basisNote:
      'SMUD is a publicly owned utility and publishes a seasonal Fixed Rate schedule (an opt-in alternative to its default Time-of-Day plan) rather than a single blended average rate, so no comparable average is published here',
    fetchedAt: RATE_TRACKER_VERIFIED,
  },
  // 2026-09-24: replaces a note that cited a July 1, 2009 tariff document as
  // the only one available. LADWP's Residential Rates page publishes the 2026
  // R-1A totals (base rate plus adjustment factors) by tier and period; the
  // figures below were read from it on 2026-09-24. LADWP publishes no single
  // blended average, so the average stays null.
  ladwp: {
    key: 'ladwp',
    name: 'LADWP',
    longName: 'Los Angeles Department of Water and Power',
    averageResidentialRateCents: null,
    averageResidentialRatePerKwh: null,
    asOf: 'R-1A Standard Residential Rate, 2026',
    sourceLabel: 'LADWP Residential Rates (Schedule R-1A)',
    sourceUrl: LADWP_R1A_RATES_URL,
    basisNote:
      'LADWP is a city-owned utility and publishes tiered prices rather than one average. On its standard R-1A plan, including adjustment factors, Tier 1 costs 26.408¢ and Tier 2 32.267¢ per kWh for July to September 2026, and 27.292¢ and 33.151¢ from October to December 2026, before taxes and the monthly Power Access Charge',
    fetchedAt: '2026-09-24',
  },

  roseville: {
    key: 'roseville',
    name: 'Roseville Electric',
    longName: 'Roseville Electric Utility',
    averageResidentialRateCents: null,
    averageResidentialRatePerKwh: null,
    asOf: 'no CPUC average published; see the utility rate schedule',
    sourceLabel: 'Roseville Electric Utility — Rates',
    sourceUrl: 'https://www.roseville.ca.gov/electric_utility/rates/index.php',
    basisNote:
      'Roseville Electric is a publicly owned municipal utility, and the CPUC Public Advocates Office rate reports cover the investor-owned utilities only',
    fetchedAt: '2026-09-18',
  },
  mid: {
    key: 'mid',
    name: 'MID',
    longName: 'the Modesto Irrigation District',
    averageResidentialRateCents: null,
    averageResidentialRatePerKwh: null,
    asOf: 'no CPUC average published; see the district rate schedule',
    sourceLabel: 'Modesto Irrigation District — Electric Rates',
    sourceUrl: 'https://www.mid.org/power/rates-service-rules/electric-rates/',
    basisNote:
      'MID is a publicly owned irrigation district that sells retail electricity, and the CPUC Public Advocates Office rate reports cover the investor-owned utilities only',
    fetchedAt: '2026-09-18',
  },
  anaheim: {
    key: 'anaheim',
    name: 'APU',
    longName: 'Anaheim Public Utilities',
    averageResidentialRateCents: null,
    averageResidentialRatePerKwh: null,
    asOf: 'no CPUC average published; see the utility rate schedule',
    sourceLabel: 'Anaheim Public Utilities — Residential Rates',
    sourceUrl: 'https://www.anaheim.net/6335/Residential-Rates',
    basisNote:
      'Anaheim Public Utilities is a city-owned municipal utility, and the CPUC Public Advocates Office rate reports cover the investor-owned utilities only',
    fetchedAt: '2026-09-18',
  },
  // 2026-09-23: renamed from 'Corona DWP'. The City's own electric pages now
  // name the City of Corona Utilities Department; the CEC map layer still
  // carries the older Department of Water & Power name.
  corona: {
    key: 'corona',
    name: 'Corona Utilities',
    longName: 'the City of Corona Utilities Department',
    averageResidentialRateCents: null,
    averageResidentialRatePerKwh: null,
    asOf: 'no CPUC average published; see the department rate schedule',
    sourceLabel: 'City of Corona Utilities Department — Electric Rates',
    sourceUrl: 'https://www.coronaca.gov/departments/utilities/customer-care/services/electric-rates',
    basisNote:
      'Corona runs a city-owned electric utility, and the CPUC Public Advocates Office rate reports cover the investor-owned utilities only',
    fetchedAt: '2026-09-23',
  },
  riverside: {
    key: 'riverside',
    name: 'RPU',
    longName: 'Riverside Public Utilities',
    averageResidentialRateCents: null,
    averageResidentialRatePerKwh: null,
    asOf: 'no CPUC average published; see the utility rate schedules',
    sourceLabel: 'Riverside Public Utilities — Electric Rules & Rates',
    sourceUrl: 'https://www.riversideca.gov/utilities/residents/rates/electric-rules-rates',
    basisNote:
      "Riverside Public Utilities is the City of Riverside's own electric utility, and the CPUC Public Advocates Office rate reports cover the investor-owned utilities only",
    fetchedAt: '2026-09-23',
  },
  pasadena: {
    key: 'pasadena',
    name: 'PWP',
    longName: 'Pasadena Water and Power',
    averageResidentialRateCents: null,
    averageResidentialRatePerKwh: null,
    asOf: 'no CPUC average published; see the utility rate schedules',
    sourceLabel: 'Pasadena Water and Power — Water and Electric Rates (rate card effective July 1, 2026)',
    sourceUrl: 'https://pwp.cityofpasadena.net/water-and-electric-rates/',
    basisNote:
      "Pasadena Water and Power describes itself as a locally owned utility of the City of Pasadena, and the CPUC Public Advocates Office rate reports cover the investor-owned utilities only",
    fetchedAt: '2026-09-23',
  },
  // 2026-09-23 (Tier 3 city-cost wave). SVP's own page states an average
  // residential rate, but on its own basis, not the Public Advocates Office
  // method the IOU rows use, so it is not entered as a comparable figure.
  svp: {
    key: 'svp',
    name: 'SVP',
    longName: 'Silicon Valley Power',
    averageResidentialRateCents: null,
    averageResidentialRatePerKwh: null,
    asOf: 'no CPUC average published; see the utility rate schedules',
    sourceLabel: 'Silicon Valley Power — Rates and Fees (Schedule D-1 and Rate Schedule NM)',
    sourceUrl: 'https://www.siliconvalleypower.com/residents/rates-and-fees',
    basisNote:
      "Silicon Valley Power is the City of Santa Clara's electric utility, whose net metering schedule the City Council adopted, and the CPUC Public Advocates Office rate reports cover the investor-owned utilities only",
    fetchedAt: '2026-09-23',
  },
  gwp: {
    key: 'gwp',
    name: 'GWP',
    longName: 'Glendale Water & Power',
    averageResidentialRateCents: null,
    averageResidentialRatePerKwh: null,
    asOf: 'no CPUC average published; see the utility rate schedules',
    sourceLabel: 'City of Glendale, Glendale Water & Power — Rates (GWP Electric Rates)',
    sourceUrl: 'https://www.glendaleca.gov/government/departments/glendale-water-and-power/rates',
    basisNote:
      "Glendale Water & Power, a department of the City of Glendale, describes itself as a public power provider, and the CPUC Public Advocates Office rate reports cover the investor-owned utilities only",
    fetchedAt: '2026-09-23',
  },
  reu: {
    key: 'reu',
    name: 'REU',
    longName: 'Redding Electric Utility',
    averageResidentialRateCents: null,
    averageResidentialRatePerKwh: null,
    asOf: 'no CPUC average published; see the utility rate schedules',
    sourceLabel: 'City of Redding — Rates & Fees (Redding Electric Utility: Residential Service E1, effective January 1, 2025)',
    sourceUrl: 'https://www.cityofredding.gov/government/departments/utilities/customer_service/rates___fees.php',
    basisNote:
      "Redding Electric Utility describes itself as Redding's community-owned electric utility, with fees and charges approved by the Redding City Council, and the CPUC Public Advocates Office rate reports cover the investor-owned utilities only",
    fetchedAt: '2026-09-23',
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
