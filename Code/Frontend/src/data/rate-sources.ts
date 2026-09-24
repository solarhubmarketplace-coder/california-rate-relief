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
  cpucPgeGrc2023: { label: "CPUC: PG&E 2023 General Rate Case decision (press release, November 16, 2023)", url: 'https://www.cpuc.ca.gov/news-and-updates/all-news/cpuc-prioritizes-safety-reliability-and-affordability-in-pge-rate-case-2023' },
  cpucGrc: { label: 'CPUC: What is a General Rate Case?', url: 'https://www.cpuc.ca.gov/generalratecase' },
  cpucGrcProcess: { label: 'CPUC: Understanding How the CPUC Processes a General Rate Case (July 29, 2025)', url: 'https://www.cpuc.ca.gov/news-and-updates/all-news/understanding-how-the-cpuc-processes-a-general-rate-case' },
  cpucCareFera: { label: 'CPUC: CARE/FERA Program (income limits June 1, 2026 to May 31, 2027)', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program' },
  cpucNbt: { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  cpucDaProgram: { label: 'CPUC: California Direct Access Program (SB 695 rules and cap)', url: 'https://www.cpuc.ca.gov/consumer-support/consumer-programs-and-services/electrical-energy-and-energy-efficiency/community-choice-aggregation-and-direct-access-/direct-access/learn-more-about-costs-and-rates' },
  cpucDaLottery2025: { label: 'CPUC Energy Division: 2025 Direct Access Lottery Enrollment Report (June 2026)', url: 'https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/energy-division/documents/direct-access-implementation-activity-reports/2025/2025-da-lottery-report.pdf' },
  sceDirectAccess: { label: 'SCE: Direct Access overview and FAQ', url: 'https://www.sce.com/partners/partnerships/direct-access' },
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
  pgeWestLightJrc: { label: 'PG&E and WestLight Energy: Joint Rate Comparisons (rates current July 2026)', url: 'https://www.pge.com/assets/pge/docs/account/alternate-energy-providers/WestLightEnergy_JointRateComparisons.pdf' },
  pgeCare: { label: 'PG&E: California Alternate Rates for Energy (CARE) program', url: 'https://www.pge.com/en/account/billing-and-assistance/financial-assistance/california-alternate-rates-for-energy-program.html' },
  pgeFinancialAssistance: { label: 'PG&E: Financial assistance (REACH, Match My Payment, LIHEAP, AMP)', url: 'https://www.pge.com/en/account/billing-and-assistance/financial-assistance.html' },
  opucPgeIqbd: { label: 'Oregon PUC: Portland General Electric Advice No. 22-01, Income Qualified Bill Discount', url: 'https://apps.puc.state.or.us/edockets/docket.asp?DocketID=23171' },
  pgeMeterSchedule: { label: 'PG&E: Meter reading schedule', url: 'https://www.pge.com/en/save-energy-and-money/energy-saving-programs/smartmeter/meter-reading-schedule.html' },
  pgeTouPlans: { label: 'PG&E: Time-of-Use rate plans', url: 'https://www.pge.com/en/account/rate-plans/time-of-use-rate-plans.html' },
  pgeEvPlans: { label: 'PG&E: Electric Vehicle (EV) rate plans', url: 'https://www.pge.com/en/account/rate-plans/electric-vehicles.html' },
  pgeElectricHome: { label: 'PG&E: Electric Home Rate Plan (E-ELEC)', url: 'https://www.pge.com/en/account/rate-plans/electric-home.html' },
  pgeSolarBilling: { label: 'PG&E: Solar Billing Plan', url: 'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html' },
  pgeEecValues: { label: 'PG&E: Solar Billing Plan Energy Export Credit price sheets, 2023 to 2026 (ZIP)', url: 'https://www.pge.com/assets/pge/docs/vanities/PGE-EEC-Price-Sheets.zip' },
  // Tier 2 additions (2026-09-23): tariff sheets and bill-help pages.
  pgeEv2Tariff: { label: 'PG&E: Electric Schedule EV2 tariff (EV2-A prices effective March 1, 2026; time periods and eligibility)', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_EV2%20(Sch).pdf' },
  pgeEvBTariff: { label: 'PG&E: Electric Schedule EV tariff, Rate B (separately metered EV; time periods and seasons)', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_EV%20(Sch).pdf' },
  pgeEtoucTariff: { label: 'PG&E: Electric Schedule E-TOU-C tariff (effective March 1, 2026)', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_E-TOU-C.pdf' },
  pgeEelecTariff: { label: 'PG&E: Electric Schedule E-ELEC tariff (applicability sheet effective August 28, 2026)', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_E-ELEC.pdf' },
  pgeWaysToLower: { label: 'PG&E: Ways to Lower Your Bill', url: 'https://www.pge.com/en/save-energy-and-money/ways-to-lower-your-bill.html' },
  pgeSolarBill: { label: 'PG&E: Solar Bill (how to read a NEM statement and true-up)', url: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html' },
  pgeReach: { label: 'PG&E: Relief for Energy Assistance through Community Help (REACH)', url: 'https://www.pge.com/en/account/billing-and-assistance/financial-assistance/relief-for-energy-assistance-through-community-help.html' },
  pgeMatchMyPayment: { label: 'PG&E: Match My Payment Program (on hold for 2026)', url: 'https://www.pge.com/en/account/billing-and-assistance/financial-assistance/match-my-payment-program.html' },
  pgeAmp: { label: 'PG&E: Arrearage Management Plan (AMP)', url: 'https://www.pge.com/en/account/billing-and-assistance/financial-assistance/arrearage-management-plan-amp.html' },
  pgePaymentPlan: { label: 'PG&E: Payment plans and due date extensions', url: 'https://www.pge.com/en/account/billing-and-assistance/pay-my-bill/payment-plan-and-due-date-extension.html' },
  pgeBudgetBilling: { label: 'PG&E: Budget Billing', url: 'https://www.pge.com/en/account/billing-and-assistance/financial-assistance/budget-billing-program.html' },
  pgeLiheap: { label: 'PG&E: Low Income Home Energy Assistance Program (LIHEAP)', url: 'https://www.pge.com/en/account/billing-and-assistance/financial-assistance/low-income-home-energy-assistance-program.html' },
  pgeMedicalBaselineProgram: { label: 'PG&E: Medical Baseline Program', url: 'https://www.pge.com/en/account/billing-and-assistance/financial-assistance/medical-baseline-program.html' },
  csdLiheap: { label: 'California Department of Community Services and Development: LIHEAP energy bill help (2026 income limits)', url: 'https://www.csd.ca.gov/energybills' },

  // --- SCE -----------------------------------------------------------------
  sceTou: { label: 'SCE: Time-of-Use Residential Rate Plans', url: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/time-of-use-plans' },
  sceTiered: { label: 'SCE: Tiered Rate Plan (Schedule D), rates as of June 1, 2026', url: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/tiered-rate-plan' },
  sceBsc: { label: 'SCE: Base Services Charge', url: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc' },
  sceRateOptions: { label: "SCE: Southern California Edison's Electric Rate Options (residential and nonresidential summary)", url: 'https://www.sce.com/sites/default/files/custom-files/Summary%20of%20Available%20Residential%20and%20Nonresidential%20Rate%20Options.pdf' },
  sceNemBill: { label: 'SCE: Guide to Your Net Energy Metering Bill', url: 'https://www.sce.com/customer-service-center/help-center/solar/net-energy-metering/understanding-nem-bill' },
  sceNsc: { label: 'SCE: Net Surplus Compensation Rate (monthly NSCR, 2022 to September 2026)', url: 'https://www.sce.com/regulatory/regulatory-information/ferc-Standards-conduct/tariff-books/rates-pricing-choices/net-surplus-compensation' },
  sceTariffBooks: { label: 'SCE: Rates & Pricing Choices (tariff books)', url: 'https://www.sce.com/regulatory/tariff-books/rates-pricing-choices' },
  sceRateCompare: { label: 'SCE: Rate Plan Comparison tool', url: 'https://www.sce.com/save-money/rates-financing/rate-plan-comparison' },
  dceSolar: { label: 'Desert Community Energy: Solar customers (true-up timing)', url: 'https://desertcommunityenergy.org/your-options/solar-customers/' },
  sceHistorical: { label: 'SCE: Historical Prices and Rate Schedules', url: 'https://www.sce.com/regulatory/tariff-books/historical-rates' },
  sceEvPlan: { label: 'SCE: Electric Vehicle (EV) Rate Plans (TOU-D-PRIME)', url: 'https://www.sce.com/save-money/rates-financing/electric-vehicle-plan' },
  sceJointRates: { label: 'SCE: Joint rate comparisons with community choice providers', url: 'https://www.sce.com/customer-service-center/community-choice-aggregation/sce-ccce-joint-rate-comparisons' },

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
  sdgePricingPlans: { label: 'SDG&E: Residential pricing plans (hours and prices effective August 1, 2026)', url: 'https://www.sdge.com/residential/pricing-plans' },
  sdgeTouDr2Aug2026: { label: 'SDG&E: Schedule TOU-DR2 total rates, effective August 1, 2026', url: 'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20TOU-DR2%20Total%20Rates%20Table.pdf' },
  sdgeTouDrAug2026: { label: 'SDG&E: Schedule TOU-DR total rates, effective August 1, 2026', url: 'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20TOU-DR%20Total%20Rates%20Table.pdf' },
  sdgeTouDrPAug2026: { label: 'SDG&E: Schedule TOU-DR-P total rates, effective August 1, 2026', url: 'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20TOU-DR-P%20Total%20Rates%20Table.pdf' },
  sdgeEvTou5Aug2026: { label: 'SDG&E: Schedule EV-TOU-5 total rates, effective August 1, 2026', url: 'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20EV-TOU-5%20Total%20Rates%20Table.pdf' },
  sdgeEvTouAug2026: { label: 'SDG&E: Schedules EV-TOU and EV-TOU-2 total rates, effective August 1, 2026', url: 'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20EV-TOU%20%26%20EV-TOU-2%20Total%20Rates%20Tables.pdf' },
  sdgeTouElecAug2026: { label: 'SDG&E: Schedule TOU-ELEC total rates, effective August 1, 2026', url: 'https://www.sdge.com/sites/default/files/regulatory/8-1-26%20Schedule%20TOU-ELEC%20Total%20Rates%20Table.pdf' },
  sdgeSolarBillingPlan: { label: 'SDG&E: Solar Billing Plan', url: 'https://www.sdge.com/solar/solar-billing-plan' },
  sdgeSolarBill: { label: 'SDG&E: Understanding Your Solar Billing Plan Bill', url: 'https://www.sdge.com/solar/solar-billing-plan/UnderstandingYourSolarBill' },
  sdgeNemBill: { label: 'SDG&E: Understanding Your NEM Bill', url: 'https://www.sdge.com/solar/net-energy-metering/UnderstandingYourNEMBill' },
  sdgeNetMeterSheet: { label: 'SDG&E: How to read your smart electric meter, for net metering customers (fact sheet)', url: 'https://www.sdge.com/sites/default/files/SDGE%20Net%20Meter%20Fact%20Sheet.pdf' },
  sdgeSmartMeter: { label: 'SDG&E: How to read your smart meter', url: 'https://www.sdge.com/residential/savings-center/smart-meters/your-smart-meter/how-to-read-your-smart-meter' },
  sdgeMyBill: { label: 'SDG&E: Understanding your SDG&E bill (bill features)', url: 'https://www.sdge.com/mybill/new-features' },
  sdgeHowRatesSet: { label: 'SDG&E: How Rates Are Set (seasons, baseline, tiers)', url: 'https://www.sdge.com/residential/pricing-plans/how-pricing-plans-work/how-rates-are-set' },
  sdgeExportPricing: { label: 'SDG&E: Solar Billing Plan export pricing (hourly 2026 export rate files, NBT00 and NBT26)', url: 'https://www.sdge.com/solar/solar-billing-plan/export-pricing' },

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
  smudLowIncome: { label: 'SMUD: Low income and nonprofits (EAPR limits effective Feb. 1, 2026)', url: 'https://www.smud.org/Rate-Information/Low-income-and-nonprofits' },
  smudRateArchive: { label: 'SMUD: Rate change archive (2026 and 2027 increases)', url: 'https://www.smud.org/Rate-Information/Rate-archive' },
  smudCpp: { label: 'SMUD: Critical Peak Pricing', url: 'https://www.smud.org/Rate-Information/Residential-rates/Critical-Peak-Pricing' },

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
  chargepointPricing: { label: 'ChargePoint: What are the pricing policies and fees? (updated June 16, 2026)', url: 'https://www.chargepoint.com/drivers/support/faqs/what-are-pricing-policies-and-fees-i-should-be-aware' },
  chargepointServiceFee: { label: 'ChargePoint: What is the service fee? (updated June 16, 2026)', url: 'https://www.chargepoint.com/drivers/support/faqs/what-service-fee' },
  estarPoolPumps: { label: 'ENERGY STAR: Pool Pumps (energy use, speed, timers and cleaner study)', url: 'https://www.energystar.gov/products/pool_pumps' },
  estarPoolFactSheet: { label: 'ENERGY STAR: Pool Pump Fact Sheet (2022)', url: 'https://www.energystar.gov/sites/default/files/asset/document/ES_PoolPumps_FactSheet_2022.pdf' },
  ecfrPoolPumps: { label: 'U.S. DOE energy conservation standards for pumps, 10 CFR 431.465 (dedicated-purpose pool pumps from July 19, 2021)', url: 'https://www.ecfr.gov/current/title-10/chapter-II/subchapter-D/part-431/subpart-Y/section-431.465' },
  cdfaEvfsFaq: { label: 'CDFA Division of Measurement Standards, EV Fueling Systems FAQ', url: 'https://www.cdfa.ca.gov/dms/pdfs/EVFS_FAQ.pdf' },

  // --- Tier 3 additions (2026-09-23): each fetched and read on this date. ---
  // Finding a utility and CCA by address, and statewide prices.
  cecServiceAreas: { label: 'California Energy Commission: Electric Utility Service Areas map (dataset updated August 5, 2026)', url: 'https://data.ca.gov/dataset/electric-utility-service-areas' },
  calccaMap: { label: 'California Community Choice Association: interactive CCA map and address lookup', url: 'https://cal-cca.org/cca-map/' },
  openeiUrdb: { label: 'OpenEI: U.S. Utility Rate Database (rate lookup by ZIP code)', url: 'https://openei.org/wiki/Utility_Rate_Database' },
  eiaEpmFeb2026: { label: 'U.S. EIA, Electric Power Monthly, February 2026, Table 5.6.B (full-year 2025, preliminary)', url: 'https://www.eia.gov/electricity/monthly/archive/february2026.pdf' },
  cpucD2006003: { label: 'CPUC Decision 20-06-003 (June 11, 2020): residential deposits and reconnection fees', url: 'https://docs.cpuc.ca.gov/publisheddocs/published/g000/m340/k648/340648092.pdf' },
  // PG&E tariff book, rules and bill pages.
  pgeTariffIndex: { label: 'PG&E: Tariffs (electric rate schedules and rules, with PDF links)', url: 'https://www.pge.com/tariffs/en.html' },
  pgeRatePlanPricing: { label: 'PG&E: Residential rate plan pricing (prices effective March 1, 2026)', url: 'https://www.pge.com/assets/pge/docs/account/rate-plans/residential-electric-rate-plan-pricing.pdf' },
  pgeRatePlans: { label: 'PG&E: Rate plans (residential rate comparison)', url: 'https://www.pge.com/en/account/rate-plans.html' },
  pgeE1Tariff: { label: 'PG&E: Electric Schedule E-1, Residential Services (tariff)', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_E-1.pdf' },
  pgeEtoudTariff: { label: 'PG&E: Electric Schedule E-TOU-D, peak pricing 5 to 8 p.m. non-holiday weekdays (tariff)', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_E-TOU-D.pdf' },
  pgeNem2Tariff: { label: 'PG&E: Electric Schedule NEM2, Net Energy Metering Service (tariff)', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_NEM2.pdf' },
  pgeRule3: { label: 'PG&E: Electric Rule 3, Application for Service', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_RULES_3.pdf' },
  pgeRule7: { label: 'PG&E: Electric Rule 7, Deposits (effective July 16, 2020)', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_RULES_7.pdf' },
  pgeRule9: { label: 'PG&E: Electric Rule 9, Rendering and Payment of Bills', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_RULES_9.pdf' },
  pgeRule10: { label: 'PG&E: Electric Rule 10, Disputed Bills', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_RULES_10.pdf' },
  pgeRule11: { label: 'PG&E: Electric Rule 11, Discontinuance and Restoration of Service', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_RULES_11.pdf' },
  pgeRule17_1: { label: 'PG&E: Electric Rule 17.1, Adjustment of Bills for Billing Error', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_RULES_17.1.pdf' },
  pgeRule21: { label: 'PG&E: Electric Rule 21, Generating Facility Interconnections', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_RULES_21.pdf' },
  pgeRule30: { label: 'PG&E: Electric Rule 30, Retail Service Transmission Facilities (effective December 4, 2025)', url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_RULES_30.pdf' },
  pgeNscRates: { label: 'PG&E: Net Surplus Compensation rates by true-up month, January 2025 to September 2026', url: 'https://www.pge.com/assets/pge/docs/clean-energy/solar/AB920-RateTable.pdf' },
  pgeNscFaq: { label: 'PG&E: Net Surplus Compensation (NSC) FAQ', url: 'https://www.pge.com/en/clean-energy/solar/solar-incentives-and-programs/net-surplus-compensation.html' },
  pgeNemBill: { label: 'PG&E: Net Energy Metering (NEM) bill', url: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/net-energy-metering-bill.html' },
  pgeNemProgram: { label: 'PG&E: Net Energy Metering program (NEM2 application deadline April 15, 2026)', url: 'https://www.pge.com/en/about/doing-business-with-pge/interconnections/net-energy-metering-program.html' },
  pgeGrc2027: { label: 'PG&E: 2027 General Rate Case (filed May 15, 2025)', url: 'https://www.pge.com/en/regulation/general-rate-case.html' },
  pgeBscNews: { label: "PG&E Currents: PG&E's Restructured Electric Bill Debuts (March 1, 2026)", url: 'https://www.pge.com/en/newsroom/currents/energy-savings/pg-e-s-restructured-electric-bill-debuts-in-march-2026-.html' },
  pgeBillsDownNews: { label: 'PG&E Currents: Electric Bills Down From Last Year (October 15, 2025)', url: 'https://www.pge.com/en/newsroom/currents/energy-savings/pg-e-electric-bills-down-from-last-year--expected-to-drop-again-.html' },
  pgeDataCentersNews: { label: 'PG&E Currents: How Data Centers Like Amazon’s Can Lower Electricity Bills (January 5, 2026)', url: 'https://www.pge.com/en/newsroom/currents/future-of-energy/how-data-centers-like-amazon-s-can-lower-electricity-bills.html' },
  pgeBillForecast: { label: 'PG&E: Bill Forecast Alert', url: 'https://www.pge.com/en/account/manage-my-account/online-account-preferences/bill-forecast-alert.html' },
  pgeCompareBills: { label: 'PG&E: Compare bills and view energy usage', url: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/compare-bills-and-view-usage-history.html' },
  // SCE, SDG&E, SMUD, LADWP and Los Angeles.
  scePastBills: { label: 'SCE: View or download past SCE bills (36 months online; Copy of Bill form, 3 years)', url: 'https://www.sce.com/customer-service-center/help-center/billing-payments/understand-your-bill/view-or-download-past-bills' },
  sceDeposit: { label: 'SCE: How is the amount of the deposit determined for starting service?', url: 'https://www.sce.com/customer-service-center/help-center/stop-start-move-service/faq/how-deposit-amount-is-determined' },
  sdgeBaselineCalc: { label: 'SDG&E: Baseline allowance calculator (daily allowances by climate zone and season)', url: 'https://www.sdge.com/baseline-allowance-calculator' },
  smudCompare: { label: 'SMUD: How our rates compare (750 kWh residential bills as of June 1, 2026)', url: 'https://www.smud.org/Rate-Information/Compare-rates' },
  smudRtod: { label: 'SMUD: Rate Schedule R-TOD (prices effective May 1, 2025, January 1, 2026 and January 1, 2027)', url: 'https://www.smud.org/-/media/Documents/Rate-Information/Rates/1-R-TOD.ashx' },
  smudEvRate: { label: 'SMUD: Electric vehicle rates', url: 'https://www.smud.org/Rate-Information/Residential-rates/Electric-vehicle-rates' },
  smudSolarShares: { label: 'SMUD: Residential SolarShares', url: 'https://www.smud.org/Going-Green/Residential-SolarShares' },
  smudFees: { label: 'SMUD: Fees and deposits schedule (effective June 1, 2026)', url: 'https://www.smud.org/fees' },
  ladwpServiceRules: { label: 'LADWP: Rules Governing Water and Electric Service (Rules 3, 6 and 7)', url: 'https://www.ladwp.com/sites/default/files/2023-11/Rules%20Governing%20Water%20%20Electric%20Service%20Oct%202008%20reso%20010%20331%20%20010%20362%20%20011%20121%20%20013%20115%20%20013%20246%20%20017%20180%20%20019%20170%20019%20201%20024%20028%20WEB%20101623.pdf' },
  ladwpConstructionCharges: { label: 'LADWP: Electric service charges and fees (temporary service standard charges)', url: 'https://www.ladwp.com/construction-services/construction-and-renovation-electric-service-requests/charges-fees' },
  laLifelineUut: { label: 'City of Los Angeles Office of Finance: Lifeline utility users tax exemption', url: 'https://finance.lacity.gov/tax-education/tax-exemptions/lifeline-utility-users-tax-exemption-seniors-and-individuals' },
} as const satisfies Record<string, RateSource>;

export type RateSourceKey = keyof typeof SRC;

/** Pick sources by key, in the order given, for a page's source list. */
export function rateSources(...keys: RateSourceKey[]): RateSource[] {
  return keys.map((k) => SRC[k]);
}
