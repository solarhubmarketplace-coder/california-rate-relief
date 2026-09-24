// =============================================================================
// rate-sources.ts — the primary sources the utility-rate and electric-bill
// guides cite (topical-authority wave, 2026-09-23).
//
// One entry per document, so two guides that cite the same tariff table link
// the same URL with the same label. Every entry was fetched and read on
// RATE_SOURCES_CHECKED. Figures are NOT stored here; each guide states the
// figure next to its source, and anything that also appears on the rate
// tracker must match src/data/utility-rate-tracker.ts.
//
// Only primary sources: utility tariff and rate pages, CPUC and its Public
// Advocates Office, the CEC, EIA, CDFA and the City of Los Angeles utility.
// No installer or lead-generation site is cited.
// =============================================================================

import {
  Q1_2026_URL,
  Q2_2025_URL,
  Q2_2026_URL,
  Q3_2025_URL,
  Q4_2025_URL,
} from '@/data/utility-rate-tracker';

export const RATE_SOURCES_CHECKED = '2026-09-23';

export interface RateSource {
  label: string;
  url: string;
}

const PAO_BASE =
  'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses';

export const SRC = {
  // --- CPUC Public Advocates Office quarterly rate reports -----------------
  paoQ2_2026: { label: 'CPUC Public Advocates Office, Q2 2026 Electric Rates Report (July 2026)', url: Q2_2026_URL },
  paoQ1_2026: { label: 'CPUC Public Advocates Office, Q1 2026 Electric Rates Report', url: Q1_2026_URL },
  paoQ4_2025: { label: 'CPUC Public Advocates Office, Q4 2025 Electric Rates Report', url: Q4_2025_URL },
  paoQ3_2025: { label: 'CPUC Public Advocates Office, Q3 2025 Electric Rates Report', url: Q3_2025_URL },
  paoQ2_2025: { label: 'CPUC Public Advocates Office, Q2 2025 Electric Rates Report', url: Q2_2025_URL },
  paoQ1_2025: { label: 'CPUC Public Advocates Office, Q1 2025 Electric Rates Report', url: `${PAO_BASE}/242005-public-advocates-office-q1-2025-rates-report.pdf` },
  paoQ4_2024: { label: 'CPUC Public Advocates Office, Q4 2024 Electric Rates Report', url: `${PAO_BASE}/250218-public-advocates-office-q4-2024-rates-report.pdf` },
  paoQ3_2024: { label: 'CPUC Public Advocates Office, Q3 2024 Electric Rates Report', url: `${PAO_BASE}/241205-public-advocates-office-q3-2024-rates-report.pdf` },
  paoQ2_2024: { label: 'CPUC Public Advocates Office, Q2 2024 Electric Rates Report', url: `${PAO_BASE}/240722-public-advocates-office-q2-2024-electric-rates-report.pdf` },
  paoPgeRequests: { label: "CPUC Public Advocates Office, The Full Bill Impact of PG&E's Expected Rate Requests (updated June 24, 2026)", url: `${PAO_BASE}/260305-public-advocates-office-pge-revenue-requests-fact-sheet.pdf` },

  // --- CPUC ----------------------------------------------------------------
  cpucGrc: { label: 'CPUC: What is a General Rate Case?', url: 'https://www.cpuc.ca.gov/generalratecase' },
  cpucGrcProcess: { label: 'CPUC: Understanding How the CPUC Processes a General Rate Case (July 29, 2025)', url: 'https://www.cpuc.ca.gov/news-and-updates/all-news/understanding-how-the-cpuc-processes-a-general-rate-case' },
  cpucCareFera: { label: 'CPUC: CARE/FERA Program (income limits June 1, 2026 to May 31, 2027)', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program' },
  cpucNbt: { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  cpucDirectAccess: { label: 'CPUC: Direct Access', url: 'https://www.cpuc.ca.gov/consumer-support/consumer-programs-and-services/electrical-energy-and-energy-efficiency/community-choice-aggregation-and-direct-access-/direct-access' },
  cpucRateComparison: { label: 'CPUC: California Electric Rate Comparison', url: 'https://www.cpuc.ca.gov/RateComparison' },
  cpucClimateCredit: { label: 'CPUC: California Climate Credit (2026 amounts and months)', url: 'https://www.cpuc.ca.gov/climatecredit' },
  cpucMedicalBaseline: { label: 'CPUC: Medical Baseline', url: 'https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/medical-baseline' },
  cpucMyBill: { label: 'CPUC: Utility Bill Assistance (fixing a billing mistake)', url: 'https://www.cpuc.ca.gov/consumer-support/late-bill-assistance/my-bill' },

  // --- PG&E ----------------------------------------------------------------
  pgeRatesIndex: { label: 'PG&E: Electric rates, current and historic', url: 'https://www.pge.com/tariffs/en/rate-information/electric-rates.html' },
  pgeResRatesCurrent: { label: 'PG&E: Residential rates table, March 1, 2026 to present (Advice Letter 7846-E)', url: 'https://www.pge.com/assets/rates/tariffs/res-inclu-tou-current.xlsx' },
  pgeResRatesJan2026: { label: 'PG&E: Residential rates table, January 1 to February 28, 2026', url: 'https://www.pge.com/assets/rates/tariffs/Res_Inclu_TOU_260101-260228.xlsx' },
  pgeResRatesSep2025: { label: 'PG&E: Residential rates table, September 1 to December 31, 2025', url: 'https://www.pge.com/assets/rates/tariffs/Res_Inclu_TOU_250901-251231.xlsx' },
  pgeResRatesMar2025: { label: 'PG&E: Residential rates table, March 1 to August 31, 2025', url: 'https://www.pge.com/assets/rates/tariffs/Res_Inclu_TOU_250301-250831.xlsx' },
  pgeResRatesJan2024: { label: 'PG&E: Residential rates table, January 1 to February 29, 2024', url: 'https://www.pge.com/assets/rates/tariffs/Res_Inclu_TOU_240101-240229.xlsx' },
  pgeResRatesJan2023: { label: 'PG&E: Residential rates table, January 1 to February 28, 2023', url: 'https://www.pge.com/assets/rates/tariffs/Res_Inclu_TOU_230101-230228.xlsx' },
  pgeBaseline: { label: 'PG&E: Residential baseline territories and quantities, June 1, 2022 to present', url: 'https://www.pge.com/assets/rates/tariffs/ResElecBaselineCurrent.xlsx' },
  pgeBsc: { label: 'PG&E: Base Services Charge', url: 'https://www.pge.com/en/account/billing-and-assistance/base-services-charge.html' },
  pgeUnderstandBill: { label: 'PG&E: Understand Your Bill (glossary of bill terms)', url: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill.html' },
  pgeBillExplainer: { label: 'PG&E: Bill Explainer video transcript', url: 'https://www.pge.com/assets/pge/transcripts/bill-explainer.pdf' },
  pgeCca: { label: 'PG&E: Community Choice Aggregation (CCA)', url: 'https://www.pge.com/en/account/alternate-energy-providers/community-choice-aggregation.html' },
  pgeFera: { label: 'PG&E: Family Electric Rate Assistance (FERA)', url: 'https://www.pge.com/en/account/billing-and-assistance/financial-assistance/fera-program.html' },
  pgeMeterSchedule: { label: 'PG&E: Meter reading schedule', url: 'https://www.pge.com/en/save-energy-and-money/energy-saving-programs/smartmeter/meter-reading-schedule.html' },
  pgeTouPlans: { label: 'PG&E: Time-of-Use rate plans', url: 'https://www.pge.com/en/account/rate-plans/time-of-use-rate-plans.html' },
  pgeEvPlans: { label: 'PG&E: Electric Vehicle (EV) rate plans', url: 'https://www.pge.com/en/account/rate-plans/electric-vehicles.html' },
  pgeElectricHome: { label: 'PG&E: Electric Home Rate Plan (E-ELEC)', url: 'https://www.pge.com/en/account/rate-plans/electric-home.html' },
  pgeSolarBilling: { label: 'PG&E: Solar Billing Plan', url: 'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html' },
  pgeEecValues: { label: 'PG&E: Solar Billing Plan Energy Export Credit price sheets, 2023 to 2026 (ZIP)', url: 'https://www.pge.com/assets/pge/docs/vanities/PGE-EEC-Price-Sheets.zip' },

  // --- SCE -----------------------------------------------------------------
  sceTou: { label: 'SCE: Time-of-Use Residential Rate Plans', url: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/time-of-use-plans' },
  sceTiered: { label: 'SCE: Tiered Rate Plan (Schedule D), rates as of June 1, 2026', url: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/tiered-rate-plan' },
  sceBsc: { label: 'SCE: Base Services Charge', url: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc' },
  sceRateOptions: { label: "SCE: Southern California Edison's Electric Rate Options (residential and nonresidential summary)", url: 'https://www.sce.com/sites/default/files/custom-files/Summary%20of%20Available%20Residential%20and%20Nonresidential%20Rate%20Options.pdf' },
  sceNemBill: { label: 'SCE: Guide to Your Net Energy Metering Bill', url: 'https://www.sce.com/customer-service-center/help-center/solar/net-energy-metering/understanding-nem-bill' },
  sceRateCompare: { label: 'SCE: Rate Plan Comparison tool', url: 'https://www.sce.com/save-money/rates-financing/rate-plan-comparison' },
  dceSolar: { label: 'Desert Community Energy: Solar customers (true-up timing)', url: 'https://desertcommunityenergy.org/your-options/solar-customers/' },
  sceHistorical: { label: 'SCE: Historical Prices and Rate Schedules', url: 'https://www.sce.com/regulatory/tariff-books/historical-rates' },

  // --- SDG&E ---------------------------------------------------------------
  sdgeTotalRates: { label: 'SDG&E: Total Electric Rates (schedule rate tables by effective date)', url: 'https://www.sdge.com/total-electric-rates' },
  sdgeTouDr1Aug2026: { label: 'SDG&E: Schedule TOU-DR1 total rates, effective August 1, 2026', url: 'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20TOU-DR1%20Total%20Rates%20Table.pdf' },
  sdgeTouDr1Jun2026: { label: 'SDG&E: Schedule TOU-DR1 total rates, effective June 1, 2026', url: 'https://www.sdge.com/sites/default/files/regulatory/6-1-26%20Schedule%20TOU-DR1%20Total%20Rates%20Table.pdf' },
  sdgeTouDr1Jan2026: { label: 'SDG&E: Schedule TOU-DR1 total rates, effective January 1, 2026', url: 'https://www.sdge.com/sites/default/files/regulatory/1-1-26%20Schedule%20TOU-DR1%20Total%20Rates%20Table.pdf' },
  sdgeTouDr1Oct2025: { label: 'SDG&E: Schedule TOU-DR1 total rates, effective October 1, 2025', url: 'https://www.sdge.com/sites/default/files/regulatory/10-1-25%20Schedule%20TOU-DR1%20Total%20Rates%20Table.pdf' },
  sdgeTouDr1Jun2025: { label: 'SDG&E: Schedule TOU-DR1 total rates, effective June 1, 2025', url: 'https://www.sdge.com/sites/default/files/regulatory/6-1-25%20Schedule%20TOU-DR1%20Total%20Rates%20Table.pdf' },
  sdgeTouDr1Jan2024: { label: 'SDG&E: Schedule TOU-DR1 total rates, effective January 1, 2024', url: 'https://www.sdge.com/sites/default/files/regulatory/1-1-24%20Schedule%20TOU-DR1%20Total%20Rates%20Table.pdf' },
  sdgeTouDr1Jan2023: { label: 'SDG&E: Schedule TOU-DR1 total rates, effective January 1, 2023', url: 'https://www.sdge.com/sites/default/files/regulatory/1-1-23%20Schedule%20TOU-DR1%20Total%20Rates%20Table.pdf' },
  sdgeWhenMatters: { label: 'SDG&E: When Matters (time-of-use plans and pricing periods)', url: 'https://www.sdge.com/whenmatters' },
  sdgeDrAug2026: { label: 'SDG&E: Schedule DR total rates, effective August 1, 2026', url: 'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20DR%20Total%20Rates%20Table.pdf' },

  // --- LADWP ---------------------------------------------------------------
  ladwpResRates: { label: 'LADWP: Residential Rates (R-1A and R-1B totals by period, 2025 and 2026)', url: 'https://www.ladwp.com/account/customer-service/electric-rates/residential-rates' },
  ladwpAdjFactors: { label: 'LADWP: Residential Adjustment Billing Factors (2025 and 2026)', url: 'https://www.ladwp.com/account/customer-service/electric-rates/residential-adjustment-billing-factors' },
  ladwpRateGuide: { label: 'LADWP: Residential Electric Rates (tiers, zones, TOU periods)', url: 'https://www.ladwp.com/account/understanding-your-rates/residential-electric-rates' },
  ladwpBillingFaq: { label: 'LADWP: Billing/Account Issues, Frequently Asked Questions', url: 'https://www.ladwp.com/account/customer-service/bill-payment/billingaccount-issues-frequently-asked-questions' },
  ladwpEvNem: { label: 'LADWP: EV / NEM / REO Rates', url: 'https://www.ladwp.com/account/customer-service/electric-rates/ev-nem-reo-rates' },
  ladwpEv: { label: 'LADWP: Electric Vehicles (rebates and EV rate discount)', url: 'https://www.ladwp.com/residential-services/programs-and-rebates-residential/electric-vehicles' },
  ladwpWaterRates: { label: 'LADWP: Residential Water Rates (tiers and allotments)', url: 'https://www.ladwp.com/account/understanding-your-rates/residential-water-rates' },
  ladwpWaterScheduleA: { label: 'LADWP: Water Schedule A, Residential (price per HCF, 2026 and 2027)', url: 'https://www.ladwp.com/account/customer-service/water-rates/schedule-residential' },

  // --- SMUD ----------------------------------------------------------------
  smudResRates: { label: 'SMUD: Residential rates (2026 prices and bill comparison)', url: 'https://www.smud.org/Rate-Information/Residential-rates' },
  smudTodDetails: { label: 'SMUD: Time-of-Day (5-8 p.m.) Rate details and holidays', url: 'https://www.smud.org/Rate-Information/Residential-rates/Time-of-Day-5-8pm-Rate/Rate-details' },
  smudRateArchive: { label: 'SMUD: Rate change archive (2026 and 2027 increases)', url: 'https://www.smud.org/Rate-Information/Rate-archive' },

  // --- EIA, CEC, CDFA ------------------------------------------------------
  eiaEpm56a: { label: 'U.S. EIA, Electric Power Monthly, Table 5.6.A (June 2026)', url: 'https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a' },
  eiaEpm56b: { label: 'U.S. EIA, Electric Power Monthly, Table 5.6.B (year to date through June 2026)', url: 'https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_b' },
  eiaBill2024: { label: 'U.S. EIA, 2024 Average Monthly Bill, Residential (Table 5A, released October 7, 2025)', url: 'https://www.eia.gov/electricity/sales_revenue_price/xls/table_5A.xlsx' },
  eiaSalesIndex: { label: 'U.S. EIA, Electric Sales, Revenue, and Average Price (data for 2024)', url: 'https://www.eia.gov/electricity/sales_revenue_price/' },
  eiaGasPriceCa: { label: 'U.S. EIA, California natural gas prices (annual)', url: 'https://www.eia.gov/dnav/ng/ng_pri_sum_dcu_SCA_a.htm' },
  eiaGasConsumersCa: { label: 'U.S. EIA, Number of natural gas consumers, California', url: 'https://www.eia.gov/dnav/ng/ng_cons_num_dcu_SCA_a.htm' },
  eiaGasVolumesCa: { label: 'U.S. EIA, Natural gas consumption by end use, California', url: 'https://www.eia.gov/dnav/ng/ng_cons_sum_dcu_SCA_a.htm' },
  eiaRecsWest: { label: 'U.S. EIA, 2020 Residential Energy Consumption Survey, Table CE2.5 (West region)', url: 'https://www.eia.gov/consumption/residential/data/2020/c&e/xls/ce2.5.xlsx' },
  cecTseg2024: { label: 'California Energy Commission, 2024 Total System Electric Generation', url: 'https://www.energy.ca.gov/data-reports/energy-almanac/california-electricity-data/2024-total-system-electric-generation' },
  cdfaEvfsFaq: { label: 'CDFA Division of Measurement Standards, EV Fueling Systems FAQ', url: 'https://www.cdfa.ca.gov/dms/pdfs/EVFS_FAQ.pdf' },
} as const satisfies Record<string, RateSource>;

export type RateSourceKey = keyof typeof SRC;

/** Pick sources by key, in the order given, for a page's source list. */
export function rateSources(...keys: RateSourceKey[]): RateSource[] {
  return keys.map((k) => SRC[k]);
}
