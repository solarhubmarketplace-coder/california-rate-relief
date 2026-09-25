// =============================================================================
// facts.ts — the one record of every time-sensitive fact the site states in
// more than one place (plan item 5.1, 2026-09-24).
//
// WHY
// Rates, rebate counts, program statuses and benchmarks move. When the same
// figure is typed into ten pages, nine of them go stale. The 2026-09-24 audit
// found exactly that: a "2009" LADWP tariff line on the cost pages while the
// rate tracker carried 2026 LADWP prices, and a minimum-bill claim after PG&E
// replaced it with the Base Services Charge.
//
// RULES
//   - Every entry was re-read at its sourceUrl on its checkedAt date. Nothing
//     here is recalled from memory. If a source can no longer be read, leave
//     the old value, keep the old checkedAt, and say so in `note`.
//   - A page that states one of these facts should import it from here. Where
//     a page cannot (JSON article data, the city templates owned by another
//     lane), `statedAs` lists regular expressions that find the places the
//     fact is typed out, so the weekly fact check can list what to fix.
//   - `recheckEveryDays` is how often the weekly fact check must re-read the
//     source. A fact past checkedAt + recheckEveryDays is overdue.
//   - Values are the source's own figures, in the source's own units. Rounding
//     for display happens in the formatters at the bottom, never in the data.
//
// The weekly check prompt lives in _gs_manifest/accuracy.json
// (scheduled_task_prompt). It re-reads every sourceUrl below and writes a
// dated fix list; it does not edit this file.
// =============================================================================

export interface Fact<V> {
  /** Stable key; matches the property name in FACTS. */
  id: string;
  /** What the fact is, in plain words. */
  label: string;
  value: V;
  /** Unit of `value` (or of each number inside it). */
  unit: string;
  /** What the value is as of, in the source's own terms. */
  asOf: string;
  publisher: string;
  /** The document's own title. */
  sourceTitle: string;
  sourceUrl: string;
  /** Page, slide, table or section inside the source, when it helps. */
  locator?: string;
  /** ISO date the source was read and the value checked against it. */
  checkedAt: string;
  /** Re-read the source at least this often. */
  recheckEveryDays: number;
  /** Regular expressions (source text) that find where pages type this fact out. */
  statedAs: readonly string[];
  note?: string;
}

function fact<V>(f: Fact<V>): Fact<V> {
  return f;
}

/** The date this record was last re-verified end to end. */
export const FACTS_CHECKED = '2026-09-24';

// ---------------------------------------------------------------------------
// Source URLs used by more than one fact
// ---------------------------------------------------------------------------
export const FACT_URLS = {
  paoQ2_2026:
    'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf',
  paoReportsIndex: 'https://www.publicadvocates.cpuc.ca.gov/press-room/reports-and-analyses',
  cpucD2405028: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M531/K686/531686019.PDF',
  pgeResRatesCurrent: 'https://www.pge.com/assets/rates/tariffs/res-inclu-tou-current.xlsx',
  pgeBsc: 'https://www.pge.com/en/account/billing-and-assistance/base-services-charge.html',
  sceBsc: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc',
  sdgeTouDr1Aug2026:
    'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20TOU-DR1%20Total%20Rates%20Table.pdf',
  sdgeTouDr1Oct2025:
    'https://www.sdge.com/sites/default/files/regulatory/10-1-25%20Schedule%20TOU-DR1%20Total%20Rates%20Table.pdf',
  ladwpResRates: 'https://www.ladwp.com/account/customer-service/electric-rates/residential-rates',
  smudResRates: 'https://www.smud.org/Rate-Information/Residential-rates',
  smudSsr: 'https://www.smud.org/Rate-Information/Solar-and-Storage-Rate',
  smudBattery: 'https://www.smud.org/Going-Green/Battery-storage/Homeowner',
  pgePbsr:
    'https://www.pge.com/en/save-energy-and-money/rebates-and-incentives/permanent-battery-storage-rebate.html',
  sgipMetrics: 'https://www.selfgenca.com/home/program_metrics/',
  cpucSgip:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/self-generation-incentive-program',
  lbnl2026Update:
    'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf',
  lbnlTts2024: 'https://emp.lbl.gov/sites/default/files/2024-10/Tracking%20the%20Sun%202024_Report.pdf',
  cpucNemNbt:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing',
  irs25d: 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit',
  usc25d: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section25D&num=0&edition=prelim',
  usc48e: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section48E&num=0&edition=prelim',
} as const;

const PAO = 'CPUC Public Advocates Office';
const PAO_Q2 = 'Q2 2026 Electric Rates Report (July 2026)';

// ---------------------------------------------------------------------------
// The record
// ---------------------------------------------------------------------------
export const FACTS = {
  // --- Investor-owned utility average rates -------------------------------
  pgeResidentialAverageRate: fact({
    id: 'pgeResidentialAverageRate',
    label: 'PG&E bundled residential average rate, excluding the California Climate Credit',
    value: 33.7,
    unit: '¢/kWh',
    asOf: 'June 2026 (unchanged since March 1, 2026)',
    publisher: PAO,
    sourceTitle: PAO_Q2,
    sourceUrl: FACT_URLS.paoQ2_2026,
    locator: 'p. 8 and p. 20',
    checkedAt: '2026-09-24',
    recheckEveryDays: 30,
    statedAs: ['33\\.7\\s*(?:¢|&cent;|cents)', '\\$0\\.337\\b'],
    note: 'No Q3 2026 report had been published on 2026-09-24. Recheck the reports index for it (expected late October to November 2026).',
  }),
  sceResidentialAverageRate: fact({
    id: 'sceResidentialAverageRate',
    label: 'SCE bundled residential average rate, excluding the California Climate Credit',
    value: 34.4,
    unit: '¢/kWh',
    asOf: 'June 1, 2026 (Advice Letter 5829-E)',
    publisher: PAO,
    sourceTitle: PAO_Q2,
    sourceUrl: FACT_URLS.paoQ2_2026,
    locator: 'p. 8 and p. 22',
    checkedAt: '2026-09-24',
    recheckEveryDays: 30,
    statedAs: ['34\\.4\\s*(?:¢|&cent;|cents)', '\\$0\\.344\\b'],
  }),
  sdgeResidentialAverageRate: fact({
    id: 'sdgeResidentialAverageRate',
    label: 'SDG&E bundled residential average rate, excluding the California Climate Credit',
    value: 45.5,
    unit: '¢/kWh',
    asOf: 'June 1, 2026 (Advice Letter 4843-E)',
    publisher: PAO,
    sourceTitle: PAO_Q2,
    sourceUrl: FACT_URLS.paoQ2_2026,
    locator: 'p. 8 and p. 24',
    checkedAt: '2026-09-24',
    recheckEveryDays: 30,
    statedAs: ['45\\.5\\s*(?:¢|&cent;|cents)', '\\$0\\.455\\b'],
  }),

  // --- Fixed charges ------------------------------------------------------
  fixedChargeDecision: fact({
    id: 'fixedChargeDecision',
    label: 'Income-graduated fixed charge adopted for PG&E, SCE and SDG&E (AB 205)',
    value: { tier1Care: 6.0, tier2Fera: 12.08, tier3Standard: 24.15 },
    unit: '$/month',
    asOf: 'Decision 24-05-028, May 9, 2024 (issued May 15, 2024)',
    publisher: 'California Public Utilities Commission',
    sourceTitle: 'Decision 24-05-028, Decision Addressing Assembly Bill 205 Requirements for Electric Utilities',
    sourceUrl: FACT_URLS.cpucD2405028,
    locator: 'Ordering paragraph: Tier 1 $6.00, Tier 2 $12.08, Tier 3 $24.15',
    checkedAt: '2026-09-24',
    recheckEveryDays: 180,
    statedAs: ['\\$24\\.15', '\\$12\\.08'],
  }),
  pgeBaseServicesCharge: fact({
    id: 'pgeBaseServicesCharge',
    label: 'PG&E Base Services Charge by income tier',
    value: { tier1PerDay: 0.19713, tier2PerDay: 0.39688, tier3PerDay: 0.79343 },
    unit: '$/day',
    asOf: 'Effective March 1, 2026 (Advice Letter 7846-E); replaced the Minimum Electric Charge for solar customers',
    publisher: 'Pacific Gas and Electric Company',
    sourceTitle: 'Residential rates table, March 1, 2026 to present (res-inclu-tou-current.xlsx)',
    sourceUrl: FACT_URLS.pgeResRatesCurrent,
    locator: 'Sheet "Res Inclu TOU_260301-Present", Base Services Charge column; footnote 9',
    checkedAt: '2026-09-24',
    recheckEveryDays: 30,
    statedAs: ['0\\.79343', '0\\.39688', '0\\.19713'],
    note: "PG&E's Base Services Charge page (pge.com/en/account/billing-and-assistance/base-services-charge.html, checked 2026-09-24) rounds these to around $24.00, $12.00 and $6.00 a month.",
  }),
  sceBaseServicesCharge: fact({
    id: 'sceBaseServicesCharge',
    label: 'SCE Base Services Charge',
    value: { standard: 24.15, fera: 12.08, care: 6.0 },
    unit: '$/month',
    asOf: 'Since November 2025; replaced the Basic Charge, and the minimum charge no longer applies',
    publisher: 'Southern California Edison',
    sourceTitle: 'Base Services Charge',
    sourceUrl: FACT_URLS.sceBsc,
    checkedAt: '2026-09-24',
    recheckEveryDays: 60,
    statedAs: ['\\$24\\.15', '\\$12\\.08'],
  }),
  sdgeBaseServicesCharge: fact({
    id: 'sdgeBaseServicesCharge',
    label: 'SDG&E Base Services Charge (Schedule TOU-DR1)',
    value: { standardPerDay: 0.79343, feraPerDay: 0.39688 },
    unit: '$/day',
    asOf: 'In the October 1, 2025 rate table (which dropped the minimum bill line) and unchanged in the August 1, 2026 table',
    publisher: 'San Diego Gas & Electric',
    sourceTitle: 'Schedule TOU-DR1 Total Rates Table, effective 8/1/2026',
    sourceUrl: FACT_URLS.sdgeTouDr1Aug2026,
    checkedAt: '2026-09-24',
    recheckEveryDays: 30,
    statedAs: ['0\\.79343'],
  }),

  // --- Municipal utilities --------------------------------------------------
  ladwpR1a: fact({
    id: 'ladwpR1a',
    label: 'LADWP Standard Residential Rate R-1A, total consumption charge by tier (includes adjustment factors)',
    value: {
      julSep2026: { tier1: 0.26408, tier2: 0.32267, tier3: 0.40968 },
      octDec2026: { tier1: 0.27292, tier2: 0.33151, tier3: 0.33151 },
      julSep2025: { tier1: 0.24306, tier2: 0.30165, tier3: 0.38866 },
      powerAccessChargePerMonth: { tier1: 2.3, tier2: 7.9, tier3: 22.7 },
      r1bServiceChargePerMonth: 12.0,
      baseRatesEffective: 'July 1, 2019',
    },
    unit: '$/kWh (charges in $/month)',
    asOf: '2026 quarterly periods as published; adjustment factors change in January, April, July and October',
    publisher: 'Los Angeles Department of Water and Power',
    sourceTitle: 'Residential Rates (R-1A Standard Residential Rate; R-1B Time-of-Use)',
    sourceUrl: FACT_URLS.ladwpResRates,
    checkedAt: '2026-09-24',
    recheckEveryDays: 30,
    statedAs: ['26\\.408', '27\\.292', '32\\.267', '33\\.151'],
    note: 'LADWP publishes no single blended average rate. Its base rates are effective July 1, 2019; the quarterly adjustment factors carry the 2026 changes.',
  }),
  smudRates: fact({
    id: 'smudRates',
    label: 'SMUD residential prices and System Infrastructure Fixed Charge',
    value: {
      sifcPerMonth: 27.0,
      lowUseSifcPerMonth: 17.0,
      timeOfDay: {
        summer: { offPeak: 0.155, midPeak: 0.2139, peak: 0.3765 },
        nonSummer: { offPeak: 0.1285, peak: 0.1776 },
      },
      fixedRate: { summer: 0.2189, nonSummer: 0.1371 },
      bill750kWh: { smud: 149, pge: 290, asOf: 'June 1, 2026' },
    },
    unit: '$/kWh (SIFC in $/month; bills in $/month)',
    asOf: 'Current rate charges on 2026-09-24 (summer June 1 to Sept. 30; non-summer Oct. 1 to May 31)',
    publisher: 'Sacramento Municipal Utility District',
    sourceTitle: 'Residential rates',
    sourceUrl: FACT_URLS.smudResRates,
    checkedAt: '2026-09-24',
    recheckEveryDays: 60,
    statedAs: ['0\\.3765', '37\\.65', '21\\.89', '13\\.71', 'Infrastructure Fixed Charge'],
    note: 'Peak is weekdays 5 to 8 p.m.; mid-peak is weekdays noon to midnight outside peak.',
  }),
  smudExportRate: fact({
    id: 'smudExportRate',
    label: 'SMUD Solar and Storage Rate export credit',
    value: 9.6,
    unit: '¢/kWh',
    asOf: 'Effective June 1, 2026; the same at every hour and season. NEM customers may stay on NEM through December 31, 2030.',
    publisher: 'Sacramento Municipal Utility District',
    sourceTitle: 'Solar and Storage Rate',
    sourceUrl: FACT_URLS.smudSsr,
    checkedAt: '2026-09-24',
    recheckEveryDays: 90,
    statedAs: ['9\\.6\\s*(?:¢|&cent;|cents)'],
  }),

  // --- Programs -------------------------------------------------------------
  pgeBatteryRebate: fact({
    id: 'pgeBatteryRebate',
    label: 'PG&E Permanent Battery Storage Rebate',
    value: {
      amountUsd: 7500,
      remaining: 179,
      remainingAsOf: '2026-09-18',
      outagesRequired: 5,
      outagesSince: '2024-01-01',
      applyByDate: '2026-12-31',
    },
    unit: 'USD; count of rebates',
    asOf: 'Banner "179 rebates remain. As of 09/18/2026" (PG&E updates the count weekly)',
    publisher: 'Pacific Gas and Electric Company',
    sourceTitle: 'Permanent Battery Storage Rebate',
    sourceUrl: FACT_URLS.pgePbsr,
    checkedAt: '2026-09-24',
    recheckEveryDays: 7,
    statedAs: ['\\b\\d{1,3} rebates (?:left|remain)', 'rebates remaining as of'],
    note: 'Application is due within 12 months of Permission to Operate or by December 31, 2026, whichever comes first, subject to funding.',
  }),
  smudBatteryIncentive: fact({
    id: 'smudBatteryIncentive',
    label: 'SMUD My Energy Optimizer Partner+ battery enrollment incentive',
    value: {
      perKwh: 300,
      capPerHousehold: 6000,
      effective: '2026-09-23',
      previousPerKwh: 500,
      previousCap: 10000,
      teslaQuarterly: { one: 110, two: 220, threeOrMore: 330 },
    },
    unit: 'USD',
    asOf: 'Interconnection applications on or after Sept. 23, 2026. Projects submitted by Sept. 22 and enrolled by Dec. 31, 2026 keep $500/kWh up to $10,000. Enroll within 90 days of PTO.',
    publisher: 'Sacramento Municipal Utility District',
    sourceTitle: 'Battery storage for homeowners (My Energy Optimizer Partner+)',
    sourceUrl: FACT_URLS.smudBattery,
    checkedAt: '2026-09-24',
    recheckEveryDays: 14,
    statedAs: ['\\$300 per kWh', '\\$300/kWh', 'up to \\$6,000'],
  }),
  sgipStatus: fact({
    id: 'sgipStatus',
    label: 'SGIP incentive step status by budget category (CSE, SCE, SCG and PG&E administrators)',
    value: {
      largeScaleStorage: 'closed',
      smallResidentialStorage: 'closed',
      residentialEquityRatepayer: 'closed',
      residentialEquityAb209: 'waitlist',
      residentialEquityAb209Pou: 'open',
      residentialEquityAb209NonPou: 'waitlist',
      nonResidentialStorageEquity: 'closed',
      equityResiliency: 'closed',
      sanJoaquinValleyResidential: 'closed',
      sanJoaquinValleyNonResidential: 'closed',
      generation: 'closed',
    },
    unit: 'status',
    asOf: 'Tracker "as of 9/24/2026" (updated nightly)',
    publisher: 'Self-Generation Incentive Program administrators',
    sourceTitle: 'SGIP Program Metrics: Incentive Step Tracker',
    sourceUrl: FACT_URLS.sgipMetrics,
    checkedAt: '2026-09-24',
    recheckEveryDays: 7,
    statedAs: ['SGIP[^.]{0,120}\\b(?:closed|waitlist|open)\\b'],
    note: 'Status is per administrator column; a category can be open for one administrator and waitlisted for another. The AB 209 categories showed only the statuses listed here.',
  }),
  sgipEquityBudget: fact({
    id: 'sgipEquityBudget',
    label: 'SGIP Residential Solar and Storage Equity budget and incentive levels',
    value: { budgetUsd: 280_000_000, storagePerKwh: 1100, solarPerKw: 3100, reservationsFrom: '2025-06-02' },
    unit: 'USD',
    asOf: 'Decision 24-03-071 (AB 209 budget); reservations from June 2, 2025',
    publisher: 'California Public Utilities Commission',
    sourceTitle: 'Self-Generation Incentive Program',
    sourceUrl: FACT_URLS.cpucSgip,
    checkedAt: '2026-09-24',
    recheckEveryDays: 90,
    statedAs: ['\\$280 million', '\\$1,100 per kWh', '\\$1\\.10 per Wh', '\\$3,100'],
  }),

  // --- Installed-price benchmarks -------------------------------------------
  lbnlResidentialPrice2025: fact({
    id: 'lbnlResidentialPrice2025',
    label: 'LBNL median installed price, host-owned stand-alone residential PV installed in 2025',
    value: { california: 3.3, us: 3.6, usCashPurchase: 3.0, usLoanFinanced: 4.5, us2024: 4.1 },
    unit: '$/W (2025 dollars, DC)',
    asOf: 'Systems installed in 2025; published August 2026',
    publisher: 'Lawrence Berkeley National Laboratory',
    sourceTitle: 'U.S. Distributed Solar and Storage: 2026 Data Update',
    sourceUrl: FACT_URLS.lbnl2026Update,
    locator: 'Slide 8 (U.S. medians, 2024 vs. 2025); slide 37 (state medians: CA $3.3/W)',
    checkedAt: '2026-09-24',
    recheckEveryDays: 90,
    statedAs: ['Tracking the Sun', '2026 Data Update'],
    note: 'Prices are before incentives. LBNL: "Residential pricing in CA, which dominates the sample, is a relatively low-cost state for residential PV." Median prices fell about $0.5/W from 2024 in inflation-adjusted terms.',
  }),
  lbnlPairedStoragePremium2025: fact({
    id: 'lbnlPairedStoragePremium2025',
    label: 'LBNL median price premium of paired PV+storage over stand-alone PV, cash-purchase residential, 2025 installs',
    value: 2.1,
    unit: '$/W of PV capacity',
    asOf: 'Systems installed in 2025; about 80% of the paired-system price data is from California',
    publisher: 'Lawrence Berkeley National Laboratory',
    sourceTitle: 'U.S. Distributed Solar and Storage: 2026 Data Update',
    sourceUrl: FACT_URLS.lbnl2026Update,
    locator: 'Slide 9',
    checkedAt: '2026-09-24',
    recheckEveryDays: 90,
    statedAs: ['\\$2\\.1/W'],
  }),
  lbnlNonResidentialPrice2025: fact({
    id: 'lbnlNonResidentialPrice2025',
    label: 'LBNL median installed price, host-owned non-residential PV installed in 2025 (small = 100 kWdc or less)',
    value: { usSmall: 3.1, usLarge: 2.4, californiaSmall: 3.2, californiaLarge: 2.6 },
    unit: '$/W (2025 dollars, DC)',
    asOf: 'Systems installed in 2025; published August 2026',
    publisher: 'Lawrence Berkeley National Laboratory',
    sourceTitle: 'U.S. Distributed Solar and Storage: 2026 Data Update',
    sourceUrl: FACT_URLS.lbnl2026Update,
    locator: 'Slide 8 (U.S.); slide 37 (CA)',
    checkedAt: '2026-09-24',
    recheckEveryDays: 90,
    statedAs: ['no size-class', 'Tracking the Sun'],
  }),
  lbnlTrackingTheSun2024Band: fact({
    id: 'lbnlTrackingTheSun2024Band',
    label: 'LBNL 20th to 80th percentile installed price, host-owned residential systems installed in 2023 (national)',
    value: { low: 3.2, high: 5.5 },
    unit: '$/W',
    asOf: '2023 installs; Tracking the Sun 2024 Edition (October 2024). Superseded for current prices by the 2026 Data Update.',
    publisher: 'Lawrence Berkeley National Laboratory',
    sourceTitle: 'Tracking the Sun: Pricing and Design Trends for Distributed Photovoltaic Systems in the United States, 2024 Edition',
    sourceUrl: FACT_URLS.lbnlTts2024,
    locator: 'p. 35',
    checkedAt: '2026-09-22',
    recheckEveryDays: 365,
    statedAs: ['\\$3\\.20?[–-]\\$?5\\.50?'],
    note: 'Kept because the /solar-cost template still renders it (src/data/solar-cost-benchmark.ts). The citydata lane should move that template to lbnlResidentialPrice2025.',
  }),

  // --- Net metering and net billing ----------------------------------------
  netBillingTariff: fact({
    id: 'netBillingTariff',
    label: 'Net Billing Tariff (Solar Billing Plan) for PG&E, SCE and SDG&E',
    value: {
      effective: '2023-04-15',
      decision: 'D.22-12-056',
      legacyYears: 9,
      exportAdderYears: 9,
      exportAdderApplyBy: 'end of 2027',
      exportAdderUtilities: ['PG&E', 'SCE'],
      exportBasis: 'CPUC Avoided Cost Calculator values',
      nem2LegacyYears: 20,
      nem2LegacyDecision: 'D.14-03-041',
    },
    unit: 'dates and years',
    asOf: 'CPUC page read 2026-09-24',
    publisher: 'California Public Utilities Commission',
    sourceTitle: 'Net Energy Metering and Net Billing',
    sourceUrl: FACT_URLS.cpucNemNbt,
    checkedAt: '2026-09-24',
    recheckEveryDays: 90,
    statedAs: ['April 15, 2023', 'nine years', '9 years', '20 years'],
    note: 'SDG&E customers are excluded from the export adder. Customers who move to the NBT from an earlier NEM tariff do not get the nine-year legacy period.',
  }),

  // --- Federal tax ------------------------------------------------------------
  federalResidentialCredit25D: fact({
    id: 'federalResidentialCredit25D',
    label: 'Federal Residential Clean Energy Credit (26 U.S.C. §25D) for homeowners',
    value: { rate: 0.3, status: 'ended', lastDate: '2025-12-31' },
    unit: 'share of cost; date',
    asOf: 'IRS page updated July 4, 2026; §25D(h) as amended by Pub. L. 119-21',
    publisher: 'Internal Revenue Service',
    sourceTitle: 'Residential Clean Energy Credit',
    sourceUrl: FACT_URLS.irs25d,
    checkedAt: '2026-09-24',
    recheckEveryDays: 90,
    statedAs: ['25D', '30% (?:federal )?(?:tax )?credit'],
    note: 'IRS: "The credit is not available for any property placed in service after December 31, 2025." 26 U.S.C. §25D(h): the credit "shall not apply with respect to any expenditures made after December 31, 2025."',
  }),
  section48eLeasingRule: fact({
    id: 'section48eLeasingRule',
    label: '26 U.S.C. §48E(i): denial of credit for wind and solar leasing arrangements',
    value: {
      coversParagraphsOf25D: ['(d)(1) solar water heating', '(d)(4) small wind energy'],
      doesNotList: '(d)(2) solar electric',
      appliesTo: 'taxable years beginning after July 4, 2025 (Pub. L. 119-21 §70513)',
      text: 'No credit shall be determined under this section for any qualified investment during the taxable year with respect to property described in paragraph (1) or (4) of section 25D(d) (as applied by substituting "lessee" for "taxpayer") if the taxpayer rents or leases such property to a third party during such taxable year.',
    },
    unit: 'statute text',
    asOf: 'U.S. Code (prelim) read 2026-09-24',
    publisher: 'Office of the Law Revision Counsel, U.S. House of Representatives',
    sourceTitle: '26 U.S.C. §48E, Clean electricity investment credit',
    sourceUrl: FACT_URLS.usc48e,
    locator: 'Subsection (i); 25D(d) paragraph numbers from 26 U.S.C. §25D(d)',
    checkedAt: '2026-09-24',
    recheckEveryDays: 90,
    statedAs: ['48E\\(i\\)', 'rents or leases such property'],
    note: 'The paragraphs it lists are solar water heating and small wind. Rooftop solar electric property is §25D(d)(2), which §48E(i) does not list. A tax-literate review of how pages describe this is pending (needs_chad).',
  }),
  section48eSolarPlacedInService: fact({
    id: 'section48eSolarPlacedInService',
    label: '26 U.S.C. §48E(e)(4): no credit for solar facilities placed in service after December 31, 2027',
    value: {
      placedInServiceBy: '2027-12-31',
      appliesIfConstructionBeginsAfter: '2026-07-04',
      storageExcepted: true,
    },
    unit: 'dates',
    asOf: 'U.S. Code (prelim) read 2026-09-24; effective-date note to Pub. L. 119-21 §70513(a)',
    publisher: 'Office of the Law Revision Counsel, U.S. House of Representatives',
    sourceTitle: '26 U.S.C. §48E, Clean electricity investment credit',
    sourceUrl: FACT_URLS.usc48e,
    locator: 'Subsection (e)(4); Effective Date of 2025 Amendment note',
    checkedAt: '2026-09-24',
    recheckEveryDays: 90,
    statedAs: ['December 31, 2027', '31 December 2027', 'July 4, 2026'],
    note: 'The (e)(4) termination applies to facilities whose construction begins more than 12 months after July 4, 2025. Energy storage placed in service at the facility is excepted by (e)(4)(C).',
  }),
} as const;

export type FactId = keyof typeof FACTS;

/** Every fact as a list, for checks and the weekly fact check. */
export const ALL_FACTS: ReadonlyArray<Fact<unknown>> = Object.values(FACTS);

// ---------------------------------------------------------------------------
// Formatters: one place for how pages print these values
// ---------------------------------------------------------------------------
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** '2026-09-24' -> 'September 24, 2026'. */
export function formatFactDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

/** '2026-09-24' -> 'Sept 24, 2026' (short month, for tables). */
export function formatFactDateAbbrev(iso: string): string {
  const ABBR = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const [y, m, d] = iso.split('-').map(Number);
  return `${ABBR[m - 1]} ${d}, ${y}`;
}

/** '2026-09-24' -> '24 Sep 2026' (the rate tracker's style). */
export function formatFactDateShort(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS_SHORT[m - 1]} ${y}`;
}

/** 0.26408 $/kWh -> '26.408¢'. Keeps the source's precision. */
export function centsFromDollars(perKwh: number): string {
  const cents = perKwh * 100;
  const decimals = Math.max(0, (String(perKwh).split('.')[1]?.length ?? 0) - 2);
  return `${cents.toFixed(decimals)}¢`;
}

/** 7500 -> '$7,500'. */
export function usd(n: number, decimals = 0): string {
  return `$${n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;
}

/** A citation line: 'Publisher, Title (checked September 24, 2026)'. */
export function factCitation(f: Fact<unknown>): string {
  return `${f.publisher}, ${f.sourceTitle}${f.locator ? `, ${f.locator}` : ''} (checked ${formatFactDate(f.checkedAt)})`;
}

/** True when a fact is past its recheck interval on `today` (ISO date). */
export function isFactOverdue(f: Fact<unknown>, today: string): boolean {
  const checked = Date.parse(`${f.checkedAt}T00:00:00Z`);
  const now = Date.parse(`${today}T00:00:00Z`);
  return now - checked > f.recheckEveryDays * 86_400_000;
}
