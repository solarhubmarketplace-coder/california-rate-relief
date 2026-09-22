/**
 * Commercial solar calculator — pure computation engine for
 * `/commercial-solar/cost-per-watt-california`. No React, no side effects.
 *
 * Every number below is either:
 *  - S: sourced from a ledger row in /home/claude/lhf/research/*_LEDGER.csv
 *       (see SOURCES; ids match the ledger, e.g. "fedtax-02", "costs-20")
 *  - A: an editable assumption, labeled "assumption" in the UI
 * No figure here is typed from memory. Where a required fetch failed this
 * session, the affected output is left `null`/empty rather than guessed —
 * see the MACRS_5YR_HALF_YEAR comment below.
 */

// ---------------------------------------------------------------------------
// Sources
// ---------------------------------------------------------------------------

export interface Source {
  label: string;
  url: string;
  publisher: string;
  /** Publication or effective date when the source gives one; else the date this session accessed it. */
  date: string;
}

export const SOURCES: Record<string, Source> = {
  // --- Federal tax (fedtax_LEDGER.csv) ---
  'fedtax-01': {
    label: '§48E base rate (6%, before bonuses)',
    url: 'https://www.law.cornell.edu/uscode/text/26/48E',
    publisher: 'Cornell Law School LII (26 U.S.C. §48E)',
    date: '2022-08-16',
  },
  'fedtax-02': {
    label: '§48E alternative (bonus-eligible) rate — 30%',
    url: 'https://www.law.cornell.edu/uscode/text/26/48E',
    publisher: 'Cornell Law School LII (26 U.S.C. §48E)',
    date: '2022-08-16',
  },
  'fedtax-03': {
    label: 'Facilities under 1 MW net output get 30% automatically, without PWA',
    url: 'https://www.law.cornell.edu/uscode/text/26/48E',
    publisher: 'Cornell Law School LII (26 U.S.C. §48E)',
    date: '2022-08-16',
  },
  'fedtax-05': {
    label: 'Energy community bonus (+2 / +10 points)',
    url: 'https://www.law.cornell.edu/uscode/text/26/48E',
    publisher: 'Cornell Law School LII (26 U.S.C. §48E)',
    date: '2022-08-16',
  },
  'fedtax-06': {
    label: 'Domestic content bonus, borrowed from §48(a)(12)',
    url: 'https://www.law.cornell.edu/uscode/text/26/48E',
    publisher: 'Cornell Law School LII (26 U.S.C. §48E)',
    date: '2022-08-16',
  },
  'fedtax-07': {
    label: 'Domestic content bonus point structure (10 pts / 2 pts)',
    url: 'https://www.irs.gov/credits-deductions/domestic-content-bonus-credit',
    publisher: 'Internal Revenue Service',
    date: '2026-09-22',
  },
  'fedtax-08': {
    label: 'Domestic content cost-ratio thresholds by construction-start date (2026: 50%; 2027+: 55%)',
    url: 'https://www.law.cornell.edu/uscode/text/26/48E',
    publisher: 'Cornell Law School LII (26 U.S.C. §48E)',
    date: '2025-07-04',
  },
  'fedtax-13': {
    label: '§48E termination for wind/solar placed in service after Dec 31, 2027',
    url: 'https://www.law.cornell.edu/uscode/text/26/48E',
    publisher: 'Cornell Law School LII (26 U.S.C. §48E)',
    date: '2025-07-04',
  },
  'fedtax-14': {
    label: 'Dec 31, 2027 cliff only applies to construction beginning after July 4, 2026',
    url: 'https://www.irs.gov/pub/irs-drop/n-25-42.pdf',
    publisher: 'Internal Revenue Service / Treasury (Notice 2025-42)',
    date: '2025-09-02',
  },
  'fedtax-22': {
    label: '§48E is a transferable (§6418) credit',
    url: 'https://www.law.cornell.edu/uscode/text/26/6418',
    publisher: 'Cornell Law School LII (26 U.S.C. §6418)',
    date: '2022-08-16',
  },
  'fedtax-24': {
    label: '§48E remains elective-pay eligible for applicable (tax-exempt) entities',
    url: 'https://www.irs.gov/credits-deductions/elective-pay-and-transferability-frequently-asked-questions-elective-pay',
    publisher: 'Internal Revenue Service',
    date: '2026-03-07',
  },
  'fedtax-28': {
    label: 'Solar is 5-year MACRS property under §168(e)(3)(B)(viii)',
    url: 'https://uscode.house.gov/view.xhtml?req=(title:26%20section:168%20edition:prelim)',
    publisher: 'Office of the Law Revision Counsel, U.S. House of Representatives (26 U.S.C. §168)',
    date: '2022-08-16',
  },
  'fedtax-30': {
    label: '100% first-year bonus depreciation, §168(k)(1)',
    url: 'https://uscode.house.gov/view.xhtml?req=(title:26%20section:168%20edition:prelim)',
    publisher: 'Office of the Law Revision Counsel, U.S. House of Representatives (26 U.S.C. §168)',
    date: '2025-07-04',
  },
  'fedtax-33': {
    label: 'Depreciable basis is reduced by only 50% of the ITC, §50(c)(3)(A)',
    url: 'https://uscode.house.gov/view.xhtml?req=(title:26%20section:50%20edition:prelim)',
    publisher: 'Office of the Law Revision Counsel, U.S. House of Representatives (26 U.S.C. §50)',
    date: '2026-09-22',
  },
  'fedtax-38': {
    label: 'California C corporation tax rate — 8.84%',
    url: 'https://www.ftb.ca.gov/file/business/types/corporations/c-corporations.html',
    publisher: 'California Franchise Tax Board',
    date: '2026-09-22',
  },
  'fedtax-41': {
    label: 'California does not conform to IRC §168(k) bonus depreciation',
    url: 'https://www.ftb.ca.gov/forms/2025/2025-100-booklet.html',
    publisher: 'California Franchise Tax Board',
    date: '2025',
  },

  // --- Fetched this session (see JOB_LOG / report for fetch notes) ---
  'irc-11b': {
    label: 'Federal corporate income tax rate — 21% flat (26 U.S.C. §11(b))',
    url: 'https://www.law.cornell.edu/uscode/text/26/11',
    publisher: 'Cornell Law School LII (26 U.S.C. §11(b))',
    date: '2026-09-22',
  },
  'pub-946-table-a1': {
    label:
      'IRS Publication 946, Table A-1 (5-year property, half-year convention) — FETCH FAILED this session; California depreciation is disabled until this table is verified',
    url: 'https://www.irs.gov/publications/p946',
    publisher: 'Internal Revenue Service',
    date: '2026-09-22',
  },
  'cal-const-xiiia-1': {
    label: 'California property tax rate cap — 1% of full cash value',
    url: 'https://law.justia.com/constitution/california/article-xiii-a/section-1/',
    publisher: 'Justia (California Constitution, Article XIII A, Section 1)',
    date: '2026-09-22',
  },
  'lbnl-2026-update': {
    label:
      'LBNL "U.S. Distributed Solar and Storage 2026 Data Update" (Aug 2026) — checked this session; no size-class (≤100 kW / >100 kW) or California-specific $/W figures found in extractable text, so the 2023 Tracking the Sun figures (costs-20, costs-24) are used instead',
    url: 'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf',
    publisher: 'Lawrence Berkeley National Laboratory',
    date: '2026-08',
  },

  // --- California property/sales tax (catax_LEDGER.csv) ---
  'catax-05': {
    label: 'R&T §73 exclusion becomes inoperative Jan 1, 2027',
    url: 'https://www.boe.ca.gov/proptaxes/pdf/lta26034.pdf',
    publisher: 'California State Board of Equalization (Letter to Assessors 2026/034)',
    date: '2026-09-01',
  },
  'catax-06': {
    label: 'Systems excluded before Jan 1, 2027 stay excluded until a later change of ownership',
    url: 'https://www.boe.ca.gov/proptaxes/pdf/lta26034.pdf',
    publisher: 'California State Board of Equalization (Letter to Assessors 2026/034)',
    date: '2026-09-01',
  },
  'catax-07': {
    label: 'Exclusion applies to construction in process or completed before Jan 1, 2027',
    url: 'https://www.boe.ca.gov/proptaxes/pdf/lta22054.pdf',
    publisher: 'California State Board of Equalization (Letter to Assessors 2022/054)',
    date: '2022-11-18',
  },
  'catax-16': {
    label: 'A commercial solar install contract involves both materials and fixtures for sales-tax purposes',
    url: 'https://cdtfa.ca.gov/industry/green-technology/solar.htm',
    publisher: 'California Department of Tax and Fee Administration',
    date: '2026',
  },
  'catax-17': {
    label: 'Rack-mounted/ground-mount PV is a "fixture," taxed on the contractor’s selling price',
    url: 'https://cdtfa.ca.gov/lawguides/vol1/sutr/1521.html',
    publisher: 'California Department of Tax and Fee Administration (18 CCR §1521)',
    date: '2007-10-24',
  },

  // --- Costs (costs_LEDGER.csv) ---
  'costs-11': {
    label: 'Commercial PV O&M — $17.63/kWdc-yr (2024)',
    url: 'https://atb.nlr.gov/electricity/2025/commercial_pv',
    publisher: 'NREL, Annual Technology Baseline (2025 edition)',
    date: '2025',
  },
  'costs-12': {
    label: 'Commercial PV degradation — 0.7%/yr',
    url: 'https://atb.nlr.gov/electricity/2025/commercial_pv',
    publisher: 'NREL, Annual Technology Baseline (2025 edition)',
    date: '2025',
  },
  'costs-13': {
    label: 'NREL ATB models a 30-year system lifetime',
    url: 'https://atb.nlr.gov/electricity/2025/commercial_pv',
    publisher: 'NREL, Annual Technology Baseline (2025 edition)',
    date: '2025',
  },
  'costs-20': {
    label: 'Small non-residential (≤100 kW) installed price, 2023, 20th–80th percentile: $2.5–$4.3/W',
    url: 'https://emp.lbl.gov/sites/default/files/2024-10/Tracking%20the%20Sun%202024_Report.pdf',
    publisher: 'Lawrence Berkeley National Laboratory (Tracking the Sun, 2024 Edition)',
    date: '2024-10',
  },
  'costs-24': {
    label: 'California large non-residential (>100 kW), commercial customers, 2023 median: $2.30/W',
    url: 'https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_executive_summary.pdf',
    publisher: 'Lawrence Berkeley National Laboratory (Tracking the Sun, 2024 Edition, Executive Summary)',
    date: '2024-08',
  },
  'costs-30-35': {
    label: 'PVWatts modeled annual production, 100-kWdc fixed-tilt roof-mount, six California cities',
    url: 'https://developer.nlr.gov/api/pvwatts/v8.json',
    publisher: 'NREL — PVWatts v8.5.0 (NSRDB PSM V3, 2020 TMY)',
    date: '2026-09-22',
  },

  // --- Rates (rates_LEDGER.csv) ---
  'rates-06': {
    label: 'PG&E B-10 (Secondary) demand charge — $20.50/kW/month',
    url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_B-10.pdf',
    publisher: 'Pacific Gas and Electric Company',
    date: '2026-03-01',
  },
  'rates-08': {
    label: 'PG&E B-19 (Secondary) demand charges',
    url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_B-19.pdf',
    publisher: 'Pacific Gas and Electric Company',
    date: '2026-03-01',
  },
  'rates-10': {
    label: 'SDG&E AL-TOU-L demand charges (stacked, non-coincident + TOU)',
    url: 'https://www.sdge.com/sites/default/files/regulatory/Summary%20Table%20for%20Large%20Comm%206-1-26.pdf',
    publisher: 'San Diego Gas & Electric',
    date: '2026-06-01',
  },
  'rates-13': {
    label: 'SDG&E TOU-M non-coincident demand charge, ratcheted to 50% of annual max',
    url: 'https://www.sdge.com/sites/default/files/regulatory/Summary%20Table%20for%20Medium%20Comm%206-1-26.pdf',
    publisher: 'San Diego Gas & Electric',
    date: '2026-06-01',
  },
  'rates-14': {
    label: 'SDG&E TOU-M total energy rates by TOU period',
    url: 'https://www.sdge.com/sites/default/files/regulatory/Summary%20Table%20for%20Medium%20Comm%206-1-26.pdf',
    publisher: 'San Diego Gas & Electric',
    date: '2026-06-01',
  },
  'rates-19': {
    label: 'PG&E Rule 21 interconnection request fee — $800 flat',
    url: 'https://www.pge.com/b2b/newgenerator/distributedgeneration/generationrule21/index.shtml',
    publisher: 'Pacific Gas and Electric Company',
    date: '2026-09-22',
  },
  'rates-20': {
    label: 'PG&E Rule 21 review-track timelines',
    url: 'https://www.pge.com/b2b/newgenerator/distributedgeneration/generationrule21/index.shtml',
    publisher: 'Pacific Gas and Electric Company',
    date: '2026-09-22',
  },
  'rates-21': {
    label: 'PG&E interconnection size tiers (Fast Track, synchronizing relay thresholds)',
    url: 'https://www.pge.com/assets/pge/docs/about/doing-business-with-pge/distribution-interconnection-handbook.pdf',
    publisher: 'Pacific Gas and Electric Company',
    date: '2026-09-22',
  },
  'rates-22': {
    label: 'SCE Rule 21 interconnection request fee — $800 flat',
    url: 'https://www.sce.com/sites/default/files/inline-files/Rule21_FAQ%20(1).pdf',
    publisher: 'Southern California Edison',
    date: '2026-09-22',
  },
  'rates-23': {
    label: 'CPUC Net Billing Tariff (NBT / "NEM 3.0") establishing decision',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing',
    publisher: 'California Public Utilities Commission',
    date: '2022-12-15',
  },
  'rates-24': {
    label: 'NBT export-compensation values are locked for a 9-year legacy period',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing',
    publisher: 'California Public Utilities Commission',
    date: '2023-04-15',
  },
  'rates-26': {
    label: 'SCE Net Billing Tariff export-price (EEC Price) methodology, hourly and vintage-locked',
    url: 'https://www.sce.com/customer-service-center/help-center/solar/solar-billing-plan/understanding-export-pricing',
    publisher: 'Southern California Edison',
    date: '2025-02-25',
  },
  'rates-27': {
    label: 'Bundled residential average rates by IOU, June 2026',
    url: 'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf',
    publisher: 'CPUC Public Advocates Office (Q2 2026 Electric Rates Report)',
    date: '2026-07-27',
  },
  'rates-30': {
    label: 'PG&E 10-year residential rate increase, Jan 2016–Jun 2026: +69%',
    url: 'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf',
    publisher: 'CPUC Public Advocates Office (Q2 2026 Electric Rates Report)',
    date: '2026-07-27',
  },
  'rates-31': {
    label: 'SCE 10-year residential rate increase, Jan 2016–Jun 2026: +101%',
    url: 'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf',
    publisher: 'CPUC Public Advocates Office (Q2 2026 Electric Rates Report)',
    date: '2026-07-27',
  },
  'rates-32': {
    label: 'SDG&E 10-year residential rate increase, Jan 2016–Jun 2026: +97%',
    url: 'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf',
    publisher: 'CPUC Public Advocates Office (Q2 2026 Electric Rates Report)',
    date: '2026-07-27',
  },
  'rates-33': {
    label: 'LADWP Net Energy Metering export-credit mechanism (marginal-cost based, revised monthly)',
    url: 'https://www.ladwp.com/account/customer-service/electric-rates/ev-nem-reo-rates',
    publisher: 'Los Angeles Department of Water and Power',
    date: '2026-09-22',
  },
  'rates-34': {
    label: 'LADWP CG-2/CG-3 customer-generation schedules excluded from standard NEM',
    url: 'https://www.ladwp.com/account/customer-service/electric-rates/ev-nem-reo-rates',
    publisher: 'Los Angeles Department of Water and Power',
    date: '2026-09-22',
  },
  'rates-35': {
    label: 'SMUD Solar and Storage Rate export compensation — 9.6¢/kWh flat',
    url: 'https://www.smud.org/Rate-Information/Solar-and-Storage-Rate',
    publisher: 'Sacramento Municipal Utility District',
    date: '2026-06-01',
  },

  // --- Property value (value_LEDGER.csv) ---
  'value-06': {
    label: 'Appraisal Institute: income capitalization and cost approach for valuing solar PV',
    url: 'https://www.appraisalinstitute.org/education/search/residential-and-commercial-valuation-of-solar/480571',
    publisher: 'Appraisal Institute',
    date: '2026-09-22',
  },
  'value-09': {
    label: 'Income approach for green/solar features: income, vacancy, expenses, risk',
    url: 'https://www.sips.org/documents/Valuation-of-Green-and-High-Performance-Commercial-Property.pdf',
    publisher: 'The Appraisal Foundation (Valuation Advisory #9)',
    date: '2018-03-07',
  },
  'value-10': {
    label: 'PPA terms affect the amount and durability of net income when solar is third-party owned',
    url: 'https://www.sips.org/documents/Valuation-of-Green-and-High-Performance-Commercial-Property.pdf',
    publisher: 'The Appraisal Foundation (Valuation Advisory #9)',
    date: '2018-03-07',
  },
  'value-13': {
    label: 'Green/Energy Star/LEED office buildings command rent and sale-price premiums (certification-based, not solar-specific)',
    url: 'https://escholarship.org/uc/item/507394s4',
    publisher: 'Eichholtz, Kok & Quigley, American Economic Review 100(5) (2010)',
    date: '2010-12',
  },
  'value-27': {
    label: 'National all-property median cap rate, H1 2026: ~6.6%',
    url: 'https://www.cbre.com/insights/reports/us-cap-rate-survey-h1-2026',
    publisher: 'CBRE (U.S. Cap Rate Survey, H1 2026)',
    date: '2026-08',
  },
  'value-29': {
    label: 'Freddie Mac recognizes borrower-owned, affiliate-owned and third-party-owned solar structures',
    url: 'https://mf.freddiemac.com/docs/solar_fact_sheet.pdf',
    publisher: 'Freddie Mac Multifamily',
    date: '2026-09-22',
  },
  'value-30': {
    label: 'Leased/PPA solar systems require additional underwriting protections (estoppel, SNDA)',
    url: 'https://mf.freddiemac.com/docs/solar_fact_sheet.pdf',
    publisher: 'Freddie Mac Multifamily',
    date: '2026-09-22',
  },

  // --- Programs (programs_LEDGER.csv) ---
  'programs-02': {
    label: 'SGIP Large-Scale Storage (general market), PG&E territory — Closed',
    url: 'https://www.selfgenca.com/home/program_metrics/',
    publisher: 'SGIP Program Administrators (selfgenca.com)',
    date: '2026-09-22',
  },
  'programs-03': {
    label: 'SGIP Large-Scale Storage (general market), SCE territory — Closed',
    url: 'https://www.selfgenca.com/home/program_metrics/',
    publisher: 'SGIP Program Administrators (selfgenca.com)',
    date: '2026-09-22',
  },
  'programs-16': {
    label: 'REAP grant applications currently paused pending rulemaking; guaranteed loans still open',
    url: 'https://www.rd.usda.gov/media/file/download/usda-rd-reap-faq-03312026.pdf',
    publisher: 'USDA Rural Development / Rural Business-Cooperative Service',
    date: '2026-03-31',
  },
  'programs-39': {
    label: 'Prevailing wage required on NEM/NBT renewable facilities over 15 kW (AB 2143)',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/prevailing-wage-for-qualified-renewable-energy-facilities',
    publisher: 'California Public Utilities Commission',
    date: '2024-01-01',
  },
};

// ---------------------------------------------------------------------------
// Inputs
// ---------------------------------------------------------------------------

export type Utility = 'PGE' | 'SCE' | 'SDGE' | 'SMUD' | 'LADWP' | 'OTHER';

export type Location =
  | 'RIVERSIDE'
  | 'LOS_ANGELES'
  | 'FRESNO'
  | 'SAN_JOSE'
  | 'SACRAMENTO'
  | 'SAN_DIEGO'
  | 'CUSTOM';

export type PlacedInServiceYear = 2026 | 2027 | 2028;

export type TaxProfile =
  | { kind: 'C_CORP' }
  | { kind: 'PASS_THROUGH'; federalRate: number; caRate: number }
  | { kind: 'TAX_EXEMPT' };

export interface CommercialSolarInputs {
  utility: Utility;
  /** Annual electricity spend, dollars (from the visitor's bills). */
  annualSpend: number;
  /** Annual electricity usage, kWh (from the visitor's bills). */
  annualKwh: number;
  location: Location;
  /** Required, and only used, when location === 'CUSTOM'. kWh per kWdc-year. */
  customProductionFactor?: number;
  /** Share of annual kWh the system is sized to cover. Default DEFAULTS.offsetTarget (80%). */
  offsetTarget?: number;
  /** System size, kWdc. Omit to auto-size from annualKwh × offsetTarget ÷ production factor. */
  systemKwDc?: number;
  /** $/Wdc. Omit to use the sourced default for the resulting system size band. */
  installedCostPerWatt?: number;
  domesticContent: boolean;
  energyCommunity: boolean;
  taxProfile: TaxProfile;
  /** Share of production used on site; default DEFAULTS.selfConsumptionShare (70%). */
  selfConsumptionShare?: number;
  /** $/kWh paid for exported energy. Omit for SMUD to use its fixed rate; omit elsewhere to model $0 with a warning. */
  exportRatePerKwh?: number;
  /** Annual utility rate escalation, fraction. Default DEFAULTS.rateEscalation (3%). */
  rateEscalation?: number;
  /** Annual production degradation, fraction. Default DEFAULTS.degradation (0.7%). */
  degradation?: number;
  /** Year-1 O&M, $/kWdc-yr. Default DEFAULTS.omPerKwYear ($17.63). */
  omPerKwYear?: number;
  /** Annual O&M escalation, fraction. Default DEFAULTS.omEscalation (2%). */
  omEscalation?: number;
  /** Years. Default DEFAULTS.analysisHorizonYears (25). */
  analysisHorizonYears?: number;
  /** Fraction. Default DEFAULTS.discountRate (8%). */
  discountRate?: number;
  /** Fraction. Default DEFAULTS.capRate (6.6%). */
  capRate?: number;
  placedInServiceYear: PlacedInServiceYear;
}

// ---------------------------------------------------------------------------
// Tables and defaults
// ---------------------------------------------------------------------------

/** PVWatts-modeled annual production, 100-kWdc fixed-tilt roof-mount, kWh per kWdc-year (S costs-30..35). */
export const PRODUCTION_FACTORS: Record<Exclude<Location, 'CUSTOM'>, number> = {
  RIVERSIDE: 1622,
  LOS_ANGELES: 1603,
  FRESNO: 1570,
  SAN_JOSE: 1563,
  SACRAMENTO: 1541,
  SAN_DIEGO: 1532,
};

/**
 * IRS Publication 946, Table A-1 — 5-year property, half-year convention, 200%
 * declining balance (percentages for recovery years 1–6, summing to 100%).
 *
 * FETCH FAILED this session (2026-09-22): both https://www.irs.gov/publications/p946
 * and the underlying PDF (irs.gov/pub/irs-pdf/p946.pdf) truncate before Appendix A
 * in every fetch attempted (six attempts, two URLs, multiple targeted prompts); a
 * second candidate (Instructions for Form 4562) only references Pub. 946's tables
 * without reproducing them. Per the calculator spec, this table is left EMPTY
 * rather than typed from memory. `caDepreciationAvailable` is false until this is
 * populated from a verified fetch; the California depreciation output is disabled
 * and shown as "[source pending]" (S pub-946-table-a1).
 */
export const MACRS_5YR_HALF_YEAR: number[] = [];

/**
 * CPUC Public Advocates Office, Q2 2026 Electric Rates Report (S rates-30/31/32).
 * Ten-year RESIDENTIAL bundled-rate increase, January 2016 – June 2026 (10.5 years).
 * Used only to derive an optional CAGR for the utility rate escalation input; label
 * it "residential, not commercial" wherever it is shown, per the spec.
 */
export const PAO_RESIDENTIAL_10YR_INCREASE = {
  years: 10.5,
  PGE: 0.69,
  SCE: 1.01,
  SDGE: 0.97,
};

/** CAGR implied by the PAO 10-year residential rate trend for the given utility (or the three-IOU average for SMUD/LADWP/Other). Always residential, not commercial — label accordingly in the UI. */
export function paoResidentialCagr(utility: Utility): number {
  const byUtility: Partial<Record<Utility, number>> = {
    PGE: PAO_RESIDENTIAL_10YR_INCREASE.PGE,
    SCE: PAO_RESIDENTIAL_10YR_INCREASE.SCE,
    SDGE: PAO_RESIDENTIAL_10YR_INCREASE.SDGE,
  };
  const increase =
    byUtility[utility] ??
    (PAO_RESIDENTIAL_10YR_INCREASE.PGE + PAO_RESIDENTIAL_10YR_INCREASE.SCE + PAO_RESIDENTIAL_10YR_INCREASE.SDGE) / 3;
  return Math.pow(1 + increase, 1 / PAO_RESIDENTIAL_10YR_INCREASE.years) - 1;
}

export const DEFAULTS = {
  offsetTarget: 0.8, // A
  /** S costs-20: LBNL Tracking the Sun 2024 Ed., small non-residential (≤100 kW) 2023 20th–80th percentile midpoint ((2.5+4.3)/2). LBNL's Aug 2026 update did not publish a size-class figure to replace this (see SOURCES['lbnl-2026-update']). */
  installedCostPerWattUnder100kW: 3.4,
  /** S costs-24: LBNL Tracking the Sun 2024 Ed., California large non-residential (>100 kW) commercial-customer 2023 median. */
  installedCostPerWattOver100kW: 2.3,
  federalItcBaseRate: 0.3, // S fedtax-02
  domesticContentAdder: 0.1, // S fedtax-06/07
  energyCommunityAdder: 0.1, // S fedtax-05
  federalCorpRate: 0.21, // S irc-11b (fetched this session)
  caCorpRate: 0.0884, // S fedtax-38
  selfConsumptionShare: 0.7, // A
  smudExportRate: 0.096, // S rates-35
  rateEscalation: 0.03, // A
  degradation: 0.007, // S costs-12
  omPerKwYear: 17.63, // S costs-11
  omEscalation: 0.02, // A
  analysisHorizonYears: 25, // A (S costs-13 notes NREL ATB models 30)
  discountRate: 0.08, // A
  capRate: 0.066, // S value-27
  propertyTaxRate: 0.01, // S cal-const-xiiia-1 (fetched this session)
};

// ---------------------------------------------------------------------------
// Outputs
// ---------------------------------------------------------------------------

export interface YearlyRow {
  year: number;
  productionKwh: number;
  selfConsumedKwh: number;
  exportedKwh: number;
  blendedRate: number;
  exportRate: number;
  omCost: number;
  netSavings: number;
  cumulativeSavings: number;
}

export interface CommercialSolarOutputs {
  systemKwDc: number;
  systemKwDcWasAutoSized: boolean;
  productionFactor: number;
  blendedRate: number;
  installedCostPerWatt: number;
  installedCostPerWattSource: 'user' | 'ca-commercial-median-2023' | 'ca-small-nonres-midpoint-2023';
  grossInstalledCost: number;

  itcRatePercent: number;
  itcRateBreakdown: { base: number; domesticContent: number; energyCommunity: number };
  itcAmount: number;
  itcLabel: 'tax_credit' | 'elective_payment' | 'ineligible_2028_plus';

  depreciableBasis: number;
  federalDepreciationValueYear1: number | null;
  federalDepreciationRateUsed: number | null;
  caDepreciationValueTotal: number | null;
  caDepreciationAvailable: boolean;

  netCostAfterTaxBenefits: number;

  year1ProductionKwh: number;
  year1SelfConsumedKwh: number;
  year1ExportedKwh: number;
  exportRatePerKwh: number;
  exportRateIsAssumedZero: boolean;
  year1Savings: number;
  year1OmCost: number;

  simplePaybackYears: number | null;
  cumulativeSavings25yr: number;
  npv: number;
  irr: number | null;

  propertyValueIndication: number;

  propertyTax: {
    excluded: boolean;
    avoidedAnnualTax: number | null;
    note: string;
  };

  yearlyRows: YearlyRow[];

  taxProfile: {
    kind: TaxProfile['kind'];
    federalRate: number | null;
    caRate: number | null;
  };

  warnings: string[];
}

export const LEAVES_OUT_ITEMS: { text: string; sourceIds: string[] }[] = [
  {
    text: 'Demand charges. This model only values energy ($/kWh) savings; commercial rate schedules bill demand ($/kW) separately and solar typically reduces it only partially.',
    sourceIds: ['rates-06', 'rates-08', 'rates-10', 'rates-13', 'rates-14'],
  },
  {
    text: 'Batteries. SGIP’s general-market (non-equity) storage budget is currently shown closed to new commercial reservations.',
    sourceIds: ['programs-02', 'programs-03'],
  },
  {
    text: 'Prevailing wage on NEM/NBT systems over 15 kW. A separate compliance requirement (AB 2143) not reflected in the cost inputs above.',
    sourceIds: ['programs-39'],
  },
  {
    text: 'Interconnection upgrades and Rule 21 fees. Application and, if required, supplemental/detailed-study fees and any distribution upgrade costs are not included in the installed cost above.',
    sourceIds: ['rates-19', 'rates-20', 'rates-21', 'rates-22'],
  },
  {
    text: 'Sales tax on fixtures. Most rack-mounted or ground-mounted commercial PV is taxed as a "fixture" on the contractor’s full selling price; this is not broken out separately above.',
    sourceIds: ['catax-16', 'catax-17'],
  },
  {
    text: 'REAP federal grants. Currently paused pending rulemaking; not assumed available.',
    sourceIds: ['programs-16'],
  },
];

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

function requireFinitePositive(value: number, label: string): void {
  if (!Number.isFinite(value) || value <= 0) throw new Error(`${label} must be a number above zero.`);
}

function requireFiniteNonNegative(value: number, label: string): void {
  if (!Number.isFinite(value) || value < 0) throw new Error(`${label} must be a non-negative number.`);
}

function requireShare(value: number, label: string): void {
  if (!Number.isFinite(value) || value < 0 || value > 1) throw new Error(`${label} must be between 0 and 1.`);
}

// ---------------------------------------------------------------------------
// IRR (bisection)
// ---------------------------------------------------------------------------

function npvAtRate(cashflows: number[], rate: number): number {
  return cashflows.reduce((total, cf, t) => total + cf / Math.pow(1 + rate, t), 0);
}

/** Solves for the rate where NPV(cashflows) = 0 by bisection over [-99.99%, 1000%]. Returns null if it does not converge (e.g. no sign change — the investment never turns net negative or is never recovered). */
function irrBisection(cashflows: number[]): number | null {
  let lo = -0.9999;
  let hi = 10;
  let fLo = npvAtRate(cashflows, lo);
  let fHi = npvAtRate(cashflows, hi);
  if (!Number.isFinite(fLo) || !Number.isFinite(fHi) || fLo * fHi > 0) return null;
  let mid = 0;
  for (let i = 0; i < 200; i++) {
    mid = (lo + hi) / 2;
    const fMid = npvAtRate(cashflows, mid);
    if (Math.abs(fMid) < 1e-6) return mid;
    if (fLo * fMid <= 0) {
      hi = mid;
      fHi = fMid;
    } else {
      lo = mid;
      fLo = fMid;
    }
  }
  return mid;
}

// ---------------------------------------------------------------------------
// Main engine
// ---------------------------------------------------------------------------

export function computeCommercialSolar(inputs: CommercialSolarInputs): CommercialSolarOutputs {
  requireFinitePositive(inputs.annualSpend, 'Annual electricity spend');
  requireFinitePositive(inputs.annualKwh, 'Annual kWh');

  const offsetTarget = inputs.offsetTarget ?? DEFAULTS.offsetTarget;
  requireShare(offsetTarget, 'Offset target');

  let factor: number;
  if (inputs.location === 'CUSTOM') {
    if (inputs.customProductionFactor === undefined) {
      throw new Error('Custom production factor (kWh per kWdc-year) is required when location is Custom.');
    }
    requireFinitePositive(inputs.customProductionFactor, 'Custom production factor');
    factor = inputs.customProductionFactor;
  } else {
    factor = PRODUCTION_FACTORS[inputs.location];
  }

  const blendedRate = inputs.annualSpend / inputs.annualKwh;

  const autoSizedKwDc = Math.max(1, Math.round((inputs.annualKwh * offsetTarget) / factor));
  const systemKwDc = inputs.systemKwDc !== undefined ? inputs.systemKwDc : autoSizedKwDc;
  requireFinitePositive(systemKwDc, 'System size (kWdc)');

  let installedCostPerWatt: number;
  let installedCostPerWattSource: CommercialSolarOutputs['installedCostPerWattSource'];
  if (inputs.installedCostPerWatt !== undefined) {
    requireFinitePositive(inputs.installedCostPerWatt, 'Installed cost per watt');
    installedCostPerWatt = inputs.installedCostPerWatt;
    installedCostPerWattSource = 'user';
  } else if (systemKwDc > 100) {
    installedCostPerWatt = DEFAULTS.installedCostPerWattOver100kW;
    installedCostPerWattSource = 'ca-commercial-median-2023';
  } else {
    installedCostPerWatt = DEFAULTS.installedCostPerWattUnder100kW;
    installedCostPerWattSource = 'ca-small-nonres-midpoint-2023';
  }

  const grossInstalledCost = systemKwDc * 1000 * installedCostPerWatt;

  const warnings: string[] = [];

  // --- Federal ITC (§48E) ---
  const baseRate = DEFAULTS.federalItcBaseRate;
  const domesticContentAdder = inputs.domesticContent ? DEFAULTS.domesticContentAdder : 0;
  const energyCommunityAdder = inputs.energyCommunity ? DEFAULTS.energyCommunityAdder : 0;
  const nominalItcRate = baseRate + domesticContentAdder + energyCommunityAdder;
  const itcEligible = inputs.placedInServiceYear !== 2028;
  const itcRatePercent = itcEligible ? nominalItcRate : 0;
  const itcAmount = grossInstalledCost * itcRatePercent;

  let itcLabel: CommercialSolarOutputs['itcLabel'];
  if (!itcEligible) {
    itcLabel = 'ineligible_2028_plus';
    warnings.push(
      'No §48E credit modeled: construction beginning after July 4, 2026 must be placed in service by December 31, 2027 to receive any credit (S fedtax-13/14). A 2028-or-later placed-in-service date is modeled at $0 credit.',
    );
  } else if (inputs.taxProfile.kind === 'TAX_EXEMPT') {
    itcLabel = 'elective_payment';
  } else {
    itcLabel = 'tax_credit';
  }

  // --- Depreciation ---
  const depreciableBasis = grossInstalledCost - 0.5 * itcAmount; // S fedtax-33

  let federalDepreciationRateUsed: number | null = null;
  let federalDepreciationValueYear1: number | null = null;
  let caRateUsed: number | null = null;

  if (inputs.taxProfile.kind === 'C_CORP') {
    federalDepreciationRateUsed = DEFAULTS.federalCorpRate;
    caRateUsed = DEFAULTS.caCorpRate;
    federalDepreciationValueYear1 = depreciableBasis * federalDepreciationRateUsed;
  } else if (inputs.taxProfile.kind === 'PASS_THROUGH') {
    requireShare(inputs.taxProfile.federalRate, 'Federal marginal tax rate');
    requireShare(inputs.taxProfile.caRate, 'California marginal tax rate');
    federalDepreciationRateUsed = inputs.taxProfile.federalRate;
    caRateUsed = inputs.taxProfile.caRate;
    federalDepreciationValueYear1 = depreciableBasis * federalDepreciationRateUsed;
  } else {
    // TAX_EXEMPT: elective pay is a direct payment; no depreciation is claimed.
    federalDepreciationValueYear1 = null;
    caRateUsed = null;
  }

  const caDepreciationAvailable = MACRS_5YR_HALF_YEAR.length === 6 && inputs.taxProfile.kind !== 'TAX_EXEMPT';
  let caDepreciationValueTotal: number | null = null;
  if (inputs.taxProfile.kind === 'TAX_EXEMPT') {
    caDepreciationValueTotal = null;
  } else if (caDepreciationAvailable && caRateUsed !== null) {
    caDepreciationValueTotal = MACRS_5YR_HALF_YEAR.reduce(
      (total, pct) => total + depreciableBasis * (pct / 100) * (caRateUsed as number),
      0,
    );
  } else {
    caDepreciationValueTotal = null;
    warnings.push(
      'California depreciation not computed: IRS Publication 946 Table A-1 (5-year, half-year convention) could not be fetched this session. [source pending]',
    );
  }

  const netCostAfterTaxBenefits =
    grossInstalledCost - itcAmount - (federalDepreciationValueYear1 ?? 0) - (caDepreciationValueTotal ?? 0);

  // --- Production, export credit, and yearly savings ---
  const selfConsumptionShare = inputs.selfConsumptionShare ?? DEFAULTS.selfConsumptionShare;
  requireShare(selfConsumptionShare, 'Self-consumption share');

  let exportRatePerKwh: number;
  let exportRateIsAssumedZero = false;
  if (inputs.exportRatePerKwh !== undefined) {
    requireFiniteNonNegative(inputs.exportRatePerKwh, 'Export credit rate');
    exportRatePerKwh = inputs.exportRatePerKwh;
  } else if (inputs.utility === 'SMUD') {
    exportRatePerKwh = DEFAULTS.smudExportRate;
  } else {
    exportRatePerKwh = 0;
    exportRateIsAssumedZero = true;
    warnings.push(
      'No export credit rate entered: exported energy is valued at $0 until you enter your utility’s NBT/Solar Billing Plan rate.',
    );
  }

  const rateEscalation = inputs.rateEscalation ?? DEFAULTS.rateEscalation;
  requireFiniteNonNegative(rateEscalation, 'Utility rate escalation');

  const degradation = inputs.degradation ?? DEFAULTS.degradation;
  if (!Number.isFinite(degradation) || degradation < 0 || degradation >= 1) {
    throw new Error('Degradation must be between 0 and 1.');
  }

  const omPerKwYear = inputs.omPerKwYear ?? DEFAULTS.omPerKwYear;
  requireFiniteNonNegative(omPerKwYear, 'O&M per kW-year');

  const omEscalation = inputs.omEscalation ?? DEFAULTS.omEscalation;
  requireFiniteNonNegative(omEscalation, 'O&M escalation');

  const analysisHorizonYears = inputs.analysisHorizonYears ?? DEFAULTS.analysisHorizonYears;
  if (!Number.isInteger(analysisHorizonYears) || analysisHorizonYears <= 0) {
    throw new Error('Analysis horizon must be a whole number of years above zero.');
  }

  const discountRate = inputs.discountRate ?? DEFAULTS.discountRate;
  requireFiniteNonNegative(discountRate, 'Discount rate');

  const capRate = inputs.capRate ?? DEFAULTS.capRate;
  requireFinitePositive(capRate, 'Cap rate');

  const year1ProductionKwh = systemKwDc * factor;
  const year1SelfConsumedKwh = year1ProductionKwh * selfConsumptionShare;
  const year1ExportedKwh = year1ProductionKwh * (1 - selfConsumptionShare);
  const year1OmCost = systemKwDc * omPerKwYear;
  const year1Savings = year1SelfConsumedKwh * blendedRate + year1ExportedKwh * exportRatePerKwh - year1OmCost;

  const yearlyRows: YearlyRow[] = [];
  let cumulative = 0;
  for (let year = 1; year <= analysisHorizonYears; year++) {
    const productionKwh = year1ProductionKwh * Math.pow(1 - degradation, year - 1);
    const selfConsumedKwh = productionKwh * selfConsumptionShare;
    const exportedKwh = productionKwh * (1 - selfConsumptionShare);
    const yearBlendedRate = blendedRate * Math.pow(1 + rateEscalation, year - 1);
    const omCost = year1OmCost * Math.pow(1 + omEscalation, year - 1);
    const netSavings = selfConsumedKwh * yearBlendedRate + exportedKwh * exportRatePerKwh - omCost;
    cumulative += netSavings;
    yearlyRows.push({
      year,
      productionKwh,
      selfConsumedKwh,
      exportedKwh,
      blendedRate: yearBlendedRate,
      exportRate: exportRatePerKwh,
      omCost,
      netSavings,
      cumulativeSavings: cumulative,
    });
  }

  const cumulativeSavings25yr = cumulative;
  const npv =
    -netCostAfterTaxBenefits +
    yearlyRows.reduce((total, row) => total + row.netSavings / Math.pow(1 + discountRate, row.year), 0);
  const irr = irrBisection([-netCostAfterTaxBenefits, ...yearlyRows.map((row) => row.netSavings)]);
  const simplePaybackYears = year1Savings > 0 ? netCostAfterTaxBenefits / year1Savings : null;

  const propertyValueIndication = year1Savings / capRate;

  const propertyTax =
    inputs.placedInServiceYear === 2026
      ? {
          excluded: true,
          avoidedAnnualTax: grossInstalledCost * DEFAULTS.propertyTaxRate,
          note:
            'Assessed value is not increased for this system under R&T §73 until a change of ownership (S catax-05/06/07). At the 1% base rate (Cal. Const. art. XIII A §1), that is the amount shown avoided per year — this treats the system’s installed cost as a stand-in for the assessed value the exclusion keeps off the roll.',
        }
      : {
          excluded: false,
          avoidedAnnualTax: null,
          note:
            'No R&T §73 new-construction exclusion under current law for a system placed in service in 2027 or later; added value may be assessed (S catax-05/06/07).',
        };

  return {
    systemKwDc,
    systemKwDcWasAutoSized: inputs.systemKwDc === undefined,
    productionFactor: factor,
    blendedRate,
    installedCostPerWatt,
    installedCostPerWattSource,
    grossInstalledCost,
    itcRatePercent,
    itcRateBreakdown: { base: baseRate, domesticContent: domesticContentAdder, energyCommunity: energyCommunityAdder },
    itcAmount,
    itcLabel,
    depreciableBasis,
    federalDepreciationValueYear1,
    federalDepreciationRateUsed,
    caDepreciationValueTotal,
    caDepreciationAvailable,
    netCostAfterTaxBenefits,
    year1ProductionKwh,
    year1SelfConsumedKwh,
    year1ExportedKwh,
    exportRatePerKwh,
    exportRateIsAssumedZero,
    year1Savings,
    year1OmCost,
    simplePaybackYears,
    cumulativeSavings25yr,
    npv,
    irr,
    propertyValueIndication,
    propertyTax,
    yearlyRows,
    taxProfile: {
      kind: inputs.taxProfile.kind,
      federalRate: federalDepreciationRateUsed,
      caRate: caRateUsed,
    },
    warnings,
  };
}
