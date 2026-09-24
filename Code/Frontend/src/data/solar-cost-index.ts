// =============================================================================
// solar-cost-index.ts — the data layer behind /california-solar-cost-index
//
// WHAT THIS IS
// One row per publishable /solar-cost/<city> page, laid side by side so the
// city facts the cost layer already holds can be sorted, filtered, cited and
// downloaded. It adds no new city research of its own except where a cell
// below names its own source (a CCA member list, a City page that names the
// city's instant-permit platform) — and each of those was fetched and checked
// on the date it carries.
//
// WHAT IT MUST NOT DO
//   - No system price for a city, no invented range, no estimate. The only
//     dollar figures are city permit fees, and each one is QUOTED from the
//     row's own permitFeeNote in city-cost-data.ts. The quote is checked
//     against the note at runtime: if the note ever changes so the quote no
//     longer appears in it, that city drops to "See city page" and out of every
//     computed finding rather than rendering a stale number.
//   - No typed-in totals. Where a city publishes a plan-check line and a
//     permit/inspection line, the index adds the two quoted figures in code.
//   - No headline number typed as text. Every finding on the page is computed
//     from the rows by computeCostIndexFindings(), so a row that changes or a
//     city that is added cannot leave a finding untrue.
//
// ROWS COME ONLY THROUGH THE GATE
// getPublishableCityCostRows() applies the same source gate as the city route
// and the sitemap, so a city with a TODO field is absent here too. A row the
// classification tables below do not know yet renders as "See city page" and
// is left out of the findings until someone classifies it against its sources.
// =============================================================================

import {
  CEC_SERVICE_TERRITORY_SOURCE,
  cityCostPath,
  getPublishableCityCostRows,
  type CityCostRow,
} from './city-cost-data.ts';
import {
  formatAverageRateCents,
  getUtilityRate,
  type UtilityRateKey,
} from './utility-rate-tracker.ts';

export const COST_INDEX_PATH = '/california-solar-cost-index';
export const COST_INDEX_CSV_PATH = '/california-solar-cost-index/data.csv';
export const COST_INDEX_URL = `https://ratereliefca.com${COST_INDEX_PATH}`;
export const COST_INDEX_CSV_URL = `https://ratereliefca.com${COST_INDEX_CSV_PATH}`;
export const COST_INDEX_TITLE =
  'California Solar Cost Index 2026: Permit Fees, Utilities and Rules by City';
/** First published, and the date the index-level sources below were checked. */
export const COST_INDEX_PUBLISHED = '2026-09-23';
export const COST_INDEX_UPDATED = '2026-09-23';

export interface IndexSource {
  label: string;
  url: string;
  /** ISO date the source was fetched and the cell checked against it. */
  verifiedAt: string;
}

/**
 * California Government Code §66015(a)(1)-(2), read on leginfo 2026-09-23.
 * (a)(1): for photovoltaic systems a residential permit fee "shall not exceed
 * four hundred fifty dollars ($450) plus fifteen dollars ($15) per kilowatt for
 * each kilowatt above 15kW", except as provided in (a)(2); (a)(2): a city may
 * charge more if, "as part of a written finding and an adopted resolution or
 * ordinance", it provides substantial evidence of the reasonable cost.
 */
export const STATE_RESIDENTIAL_PV_FEE_LIMIT = {
  baseUsd: 450,
  perKwAboveUsd: 15,
  thresholdKw: 15,
  source: {
    label: 'California Government Code §66015(a)(1)-(2), residential solar permit fees',
    url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=66015',
    verifiedAt: '2026-09-23',
  } satisfies IndexSource,
} as const;

// -----------------------------------------------------------------------------
// Permit fee classification
// -----------------------------------------------------------------------------

export type FeeStatus =
  | 'published'
  | 'conflicting'
  | 'dated'
  | 'not-published'
  | 'not-retrievable'
  | 'unclassified';

export const FEE_STATUS_LABEL: Record<FeeStatus, string> = {
  published: 'Fee published',
  conflicting: 'Two figures published',
  dated: 'Only a dated schedule',
  'not-published': 'No figure published',
  'not-retrievable': 'Schedule not readable when checked',
  unclassified: 'See city page',
};

interface FeeComponent {
  /** Short description of the line, e.g. 'plan check, first 15 kW'. */
  label: string;
  usd: number;
  /** Exact text in the row's permitFeeNote that states this figure. */
  quote: string;
}

interface FeeEntry {
  status: Exclude<FeeStatus, 'unclassified'>;
  /** published only: the city's own charge for a standard home system. Summed in code. */
  components?: FeeComponent[];
  /** Secondary line. Any dollar figure in it must also appear in the note. */
  extra?: string;
  /** Text that must appear in the note for the status itself to stand. */
  evidence?: string;
}

/**
 * One entry per city. The figure is the city's own charge for a standard
 * residential rooftop system on the simplest path the city lists; the
 * SolarAPP+ or Symbium platform charge is separate and is noted in `extra`.
 */
const FEES: Record<string, FeeEntry> = {
  // 2026-09-23 (Tier 2 city-cost wave): temecula, murrieta, fresno, carlsbad
  // and el-cajon re-keyed to their rewritten notes; san-mateo, irvine,
  // fremont, riverside and oakland added.
  temecula: {
    status: 'published',
    components: [
      { label: 'building plan check, residential roof-mounted', usd: 326, quote: '$326 for building plan check' },
      { label: 'building inspection', usd: 242, quote: '$242 for building inspection' },
    ],
    extra: 'A residential ground-mounted system is $970, including a $228 fire plan check.',
  },
  murrieta: {
    status: 'published',
    components: [{ label: 'residential PV permit, 15 kW or less', usd: 450, quote: '$450 for a system of 15 kW or less' }],
    extra: 'Above 15 kW: a $500 base fee plus $15 per kW over 15 kW.',
  },
  'san-diego': {
    status: 'published',
    components: [{
      label: 'inspection fee for a self-certified rooftop system, no plan-check fee',
      usd: 275.8,
      quote: '$275.80 first system/inverter inspection fee with no plan-check fee',
    }],
    extra: 'A system that needs full plan review adds a $154.20 plan-check fee.',
  },
  escondido: {
    status: 'published',
    components: [{ label: 'residential solar PV base fee, 15 kW or less', usd: 308, quote: '$308 for 15 kW or less' }],
    extra: 'Other applicable fees are added per permit; battery storage and panel-upgrade permits are $176 each.',
  },
  anaheim: {
    status: 'dated',
    extra: 'The only schedule found is dated 2009-2010 and lists a $136.73 minimum electrical permit fee.',
    evidence: 'this schedule is dated and may not reflect current fees',
  },
  aptos: { status: 'not-published', evidence: 'No dollar amount given' },
  bakersfield: {
    status: 'published',
    components: [{
      label: 'solar permit fee, expedited PV toolkit process',
      usd: 187,
      quote: 'Solar Permit fees using this process are $187.00',
    }],
  },
  'california-city': {
    status: 'not-published',
    extra: 'No separate solar line: the general building-permit fee structure applies.',
    evidence: 'has no standalone PV/solar line item',
  },
  // 2026-09-23 (Tier 3): the 2026 Master Fee Schedule is now readable.
  camarillo: {
    status: 'published',
    components: [{ label: 'photovoltaic, residential up to 15 kW', usd: 450, quote: 'at $450 up to 15 kW' }],
    extra: 'Energy storage: $206, or $121 with a solar install; 11.34% technology surcharge on top.',
  },
  carlsbad: {
    status: 'not-published',
    extra: 'The City states a $25 SolarAPP+ administration fee on top of its regular permit fees.',
    evidence: "on top of the City's regular permit fees",
  },
  'chula-vista': {
    status: 'published',
    components: [{
      label: 'expedited (SolarAPP+) path: intake, plan check and inspection',
      usd: 453,
      quote: '$453 ($30 intake, no plan check, $423 inspection)',
    }],
    extra: 'The traditional path totals $722.',
  },
  corona: { status: 'not-published', evidence: 'does not state a dollar figure for a solar permit' },
  'el-cajon': { status: 'not-published', evidence: 'does not state a dollar figure' },
  'el-dorado-hills': { status: 'not-published', evidence: "does not state it or the County's permit fee" },
  fresno: {
    status: 'published',
    components: [
      { label: 'plan check, first 15 kW', usd: 170.37, quote: '$170.37 for plan check' },
      { label: 'inspection', usd: 162.85, quote: '$162.85 for inspection' },
    ],
    extra: 'Each additional kW adds $11.27 in inspection fees.',
  },
  // 2026-09-23 (Tier 3): the linked FY 2021/22 schedule is now quoted.
  'grass-valley': {
    status: 'dated',
    extra: 'The linked FY 2021/22 schedule lists residential solar at $373.00; SolarAPP+ charges $25.',
    evidence: 'is for fiscal year 2021/22',
  },
  hollister: { status: 'not-retrievable', evidence: 'the dollar figure was not reliably machine-readable' },
  lincoln: {
    status: 'published',
    components: [{
      label: 'all-inclusive residential solar permit, up to 15 kW',
      usd: 450,
      quote: 'all inclusive up to 15kW: $450 per permit',
    }],
    extra: 'Above 15 kW: $15 per kW.',
  },
  livermore: { status: 'not-published', evidence: 'does not state a dollar figure' },
  manteca: {
    status: 'published',
    components: [{ label: 'residential rooftop solar PV permit', usd: 378, quote: 'permit at $378 per application' }],
    extra: 'An energy storage system is $304 and a residential electrical panel $119; a 5% technology fee applies.',
  },
  marina: {
    status: 'published',
    components: [{
      label: 'combo permit, solar system, single-family residence',
      usd: 170,
      quote: 'Combo Permit: Solar System - SFR $170',
    }],
    extra: 'The Fire fee schedule separately lists a $121 photovoltaic plan review.',
  },
  modesto: {
    status: 'published',
    components: [{
      label: 'electrical photovoltaic permit, residential (flat)',
      usd: 333,
      quote: 'residential electrical photovoltaic permit at $333.00',
    }],
    extra: 'A commercial photovoltaic permit is a $1,098.00 deposit.',
  },
  monterey: {
    status: 'published',
    components: [{
      label: 'residential solar/PV installation permit, under 10 kW',
      usd: 450,
      quote: 'permit under 10 kW at $450',
    }],
  },
  // 2026-09-23 (Tier 3): quoted from the Master Fee Schedule effective July 1, 2025.
  napa: {
    status: 'published',
    components: [{ label: 'residential solar PV permit and inspection (10 kW basis)', usd: 472, quote: 'inspection at $472' }],
    extra: 'Fire Prevention plan check review adds $85; the schedule notes a $500 maximum fee.',
  },
  oceanside: {
    status: 'not-published',
    extra: 'The City states a $25 SolarAPP+ processing fee; its own permit fee is not published on the page.',
    evidence: "it does not state the City's amount",
  },
  'pacific-grove': {
    status: 'published',
    components: [{
      label: 'solar voltaic system (flat), miscellaneous building permits',
      usd: 670,
      quote: 'flat "Solar voltaic system" fee of $670',
    }],
  },
  petaluma: {
    status: 'not-published',
    extra: 'The City states a $25 SolarAPP+ processing fee; its own application fee is not stated.',
    evidence: 'without stating that amount',
  },
  'rancho-cordova': { status: 'not-published', evidence: 'No dollar amount found' },
  'rancho-cucamonga': {
    status: 'published',
    components: [{
      label: 'solar/photovoltaic, residential, up to 15 kW',
      usd: 173,
      quote: 'Solar/photovoltaic up to 15 Kw - Residential $173',
    }],
    extra: 'Each kW over 15 kW adds $12.',
  },
  roseville: {
    status: 'published',
    components: [{ label: 'building permit fees, SolarAPP+ route (City page)', usd: 1349.49, quote: 'currently $1,349.49' }],
    extra: 'SolarAPP+ adds a $25 processing fee; the July 2026 schedule prices PV permits from a $19,000 set valuation.',
  },
  salinas: {
    status: 'published',
    components: [
      { label: 'solar plan check, residential', usd: 215, quote: 'Solar Plan Check Residential $215.00' },
      { label: 'solar permit fee, residential', usd: 152, quote: 'Solar Permit Fee Residential $152.00' },
    ],
  },
  'san-jose': {
    status: 'not-published',
    extra: 'Electrical permits are billed at $315 per hour of inspection time, with at least 60 minutes for a single-family PV system, plus a permit issuance fee.',
    evidence: 'but it does not state the amount',
  },
  'san-luis-obispo': {
    status: 'published',
    components: [{ label: 'photovoltaic system, residential roof mount (IT surcharge included)', usd: 332.5, quote: 'at $332.50' }],
    extra: 'SolarAPP+ review: $35 solar only, $60 solar plus storage.',
  },
  // 2026-09-23 (Tier 3): the September 2026 schedule is now readable.
  'san-marcos': {
    status: 'published',
    components: [
      { label: 'plan check, residential rooftop solar', usd: 57, quote: 'at $57 for plan check' },
      { label: 'permit, residential rooftop solar', usd: 67, quote: 'plus $67 for the permit' },
    ],
    extra: 'Energy storage system: $52.',
  },
  'santa-cruz': {
    status: 'published',
    components: [{
      label: 'residential system up to 15 kW',
      usd: 360,
      quote: 'at $360 for a system up to 15 kW',
    }],
    extra: 'Each kW above 15 kW adds $24; both fees carry a 6% technology surcharge.',
  },
  'santa-rosa': { status: 'not-published', evidence: 'does not state a dollar figure' },
  stockton: {
    status: 'published',
    components: [{
      label: 'residential photovoltaic permit, 15 kW or less (flat)',
      usd: 314,
      quote: '$314.00 flat for 15 kW or less',
    }],
    extra: 'Above 15 kW: $450 plus $15 per kW above 15 kW.',
  },
  'thousand-oaks': { status: 'not-published', evidence: "does not state the City's permit fee" },
  tulare: { status: 'not-published', evidence: 'has no separate solar line' },
  ventura: { status: 'not-published', evidence: 'no dollar fee amounts are published on this page' },
  'walnut-creek': {
    status: 'published',
    components: [{
      label: 'solar PV, single-family and duplex, plan check and inspection included',
      usd: 280,
      quote: 'single-family and duplex homes at $280.00',
    }],
  },
  watsonville: {
    status: 'not-published',
    extra: 'Each revision after the first three costs $25.',
    evidence: 'No base dollar amount given for the standard permit',
  },
  winchester: {
    status: 'not-published',
    extra: 'Riverside County states a $35 SolarAPP+ processing fee; County permit fees are not stated.',
    evidence: 'whose exact amount is not stated on this page',
  },
  yucaipa: { status: 'not-published', evidence: 'Yucaipa publishes no solar permit fee' },
  // 2026-09-23 (Tier 3): quoted from the FY 2026-27 fee schedule.
  auburn: {
    status: 'published',
    components: [{ label: 'residential solar PV permit, 15 kW or less', usd: 347, quote: 'at $347 for 15 kW or less' }],
    extra: 'Battery backup storage and service panel upgrade: $174 each.',
  },
  beaumont: { status: 'not-published', evidence: 'does not give a dollar figure' },
  danville: { status: 'not-published', evidence: 'does not specify a dollar amount' },
  // 2026-09-23 (Tier 3): re-keyed to the rewritten note.
  encinitas: {
    status: 'not-published',
    extra: 'An undated City flyer says permit fees are waived for basic home solar installations.',
    evidence: 'Encinitas publishes no dollar figure for a solar permit',
  },
  'los-angeles': { status: 'not-published', evidence: 'the bulletin does not name a dollar figure' },
  ontario: {
    status: 'not-published',
    extra: 'The electrical permit issuance fee is $41.00; plan check is 80% of permit fees.',
    evidence: 'lists no fee specifically for solar',
  },
  'palm-springs': { status: 'not-published', evidence: 'does not give a specific dollar figure' },
  rocklin: {
    status: 'not-published',
    extra: 'The City states a $25 SolarAPP+ fee paid directly to SolarAPP+; its own permit fee is separate.',
    evidence: "without stating the City's amount",
  },
  seaside: { status: 'not-published', evidence: 'does not give a dollar amount' },
  tracy: {
    status: 'published',
    components: [{ label: 'residential solar PV system up to 15 kW (flat, State-set)', usd: 450, quote: 'up to 15 kW at a flat $450' }],
    extra: 'Above 15 kW: $15 per kW.',
  },
  vallejo: {
    status: 'published',
    components: [
      { label: 'residential solar plan review', usd: 138, quote: 'residential solar plan review at $138' },
      { label: 'residential solar permit, 15 kW or less', usd: 312, quote: '15 kW or less at $312' },
    ],
    extra: 'Each kW above 15 kW adds $54.28; the City adds a $38 permit issuance fee.',
  },
  windsor: { status: 'not-published', evidence: 'The page does not give a dollar figure' },
  'yuba-city': { status: 'not-published', evidence: 'does not specify the dollar amount' },
  'san-mateo': {
    status: 'published',
    components: [{ label: 'combination permit, solar on a single-family dwelling', usd: 450, quote: '$450 for each combination permit' }],
    extra: 'A new energy storage system installed on its own is $450.',
  },
  irvine: {
    status: 'published',
    components: [
      { label: 'plan check, residential solar per system', usd: 349.11, quote: '$349.11 for plan check' },
      { label: 'inspection', usd: 299, quote: '$299.00 for inspection' },
      { label: 'permit issuance', usd: 31.88, quote: '$31.88 permit issuance fee' },
    ],
    extra: 'Each additional kW over 15 kW adds $12.08.',
  },
  fremont: {
    status: 'published',
    components: [{ label: 'Instant Solar Permit, up to 15 kW', usd: 133, quote: '$133 for an Instant Solar Permit up to 15 kW' }],
    extra: 'Regular review is $280 up to 15 kW; above 15 kW add $7.50 (instant) or $15 (regular) per kW.',
  },
  riverside: {
    status: 'published',
    components: [
      { label: 'expedited solar energy system permit, up to 38 kW', usd: 190, quote: 'up to 38 kW, at $190' },
      { label: 'permit issuance', usd: 39, quote: '$39 permit issuance fee' },
    ],
    extra: 'The regular route is $350 up to 15 kW plus $15 per additional kW; Riverside Public Utilities adds a $275 net metering review fee.',
  },
  pleasanton: {
    status: 'published',
    components: [{ label: 'residential PV permit up to 10 kW, plan review included', usd: 250, quote: 'at $250 for a system up to 10 kW' }],
    extra: 'Above 10 kW: $450 plus $15 per kW above 15 kW.',
  },
  chico: {
    status: 'published',
    components: [{ label: 'residential solar on an existing structure, 15 kW or less', usd: 450, quote: '$450 for residential solar mounted on an existing structure' }],
    extra: 'Above 15 kW: $500 plus $15 per kW; a ground-mount racking permit is a separate $876.',
  },
  pasadena: { status: 'not-retrievable', evidence: "the City's fee schedule page could not be read when checked" },
  'santa-clarita': {
    status: 'published',
    components: [{ label: 'residential rooftop photovoltaic system', usd: 450, quote: 'residential rooftop photovoltaic system at $450' }],
    extra: 'A 10% record maintenance charge applies to related permit fees; a main panel upgrade is $44 plus staff charges.',
  },
  'long-beach': {
    status: 'published',
    components: [{ label: 'express permit, solar without battery, all surcharges and inspections', usd: 386.62, quote: '$386.62 for solar alone' }],
    extra: 'With a battery: $447.45; battery alone: $264.95.',
  },
  'santa-ana': {
    status: 'not-published',
    extra: 'SolarAPP+ collects a one-time $35.00 fee.',
    evidence: 'The City\'s solar pages do not state that amount',
  },
  sacramento: {
    status: 'published',
    components: [{ label: 'streamlined residential PV permit, up to 15 kW', usd: 450, quote: '$450 for a system up to 15 kW' }],
    extra: 'Above 15 kW: $15 per kW.',
  },
  sunnyvale: {
    status: 'published',
    components: [
      { label: 'photovoltaic/solar permit, single-family or duplex', usd: 389, quote: 'at $389.00' },
      { label: 'permit issuance', usd: 42.5, quote: '$42.50 permit issuance fee' },
    ],
    extra: 'A 5% technology surcharge applies; SolarAPP+ adds $25.',
  },
  visalia: {
    status: 'not-published',
    extra: 'Fees are paid online by card before the permit auto-issues.',
    evidence: 'it does not state the amounts',
  },
  oakland: {
    status: 'published',
    components: [
      { label: 'solar electric inspection, residential', usd: 450, quote: 'inspection fee at $450' },
      { label: 'SolarApp+ filing fee', usd: 21.49, quote: 'SolarApp+ filing fee of $21.49' },
    ],
    extra: 'Each kW above 15 kW adds $4.03; a residential battery permit is $268.64.',
  },
  // 2026-09-23 (Tier 2 city-cost wave, batch 8).
  'mountain-view': { status: 'not-published', evidence: 'does not state a dollar figure' },
  'huntington-beach': {
    status: 'not-published',
    extra: 'SolarAPP+ charges its own $35 processing fee.',
    evidence: "It does not state the City's amount",
  },
  arcata: {
    status: 'not-published',
    extra: 'No solar line: valuation-based building permit fees with a $159.00 minimum.',
    evidence: 'has no separate line for solar',
  },
  // 2026-09-23 (Tier 3 city-cost wave).
  concord: {
    status: 'published',
    components: [
      { label: 'administrative fee, residential solar', usd: 70, quote: 'a $70 administrative fee' },
      { label: 'inspection, SolarAPP+ permit up to 15 kW', usd: 380, quote: 'a $380 inspection fee' },
    ],
    extra: 'The plan-review path also totals $450; a main panel upgrade inspection adds $192.',
  },
  richmond: {
    status: 'published',
    components: [{ label: 'solar structure, residential system (flat)', usd: 450, quote: 'at $450' }],
  },
  berkeley: {
    status: 'published',
    components: [{ label: 'residential solar via SolarAPP+ (per system)', usd: 100, quote: 'at $100 per system' }],
    extra: 'City review: $200 up to 15 kW; residential storage up to 50 kW: $150; plus a 5% technology fee.',
  },
  'santa-clara': {
    status: 'published',
    components: [{ label: 'photovoltaic building permit, residential, 15 kW or less', usd: 450, quote: 'at $450 for 15 kW or less' }],
    extra: 'The schedule also lists a $463 Fire Prevention fee for a residential PV system; 3.37% technology fee.',
  },
  'san-clemente': {
    status: 'conflicting',
    extra: 'Fee sheet: $400 up to 15 kW plus $15 per kW above; 10 kW bulletin: $450 typical. Neither is dated.',
    evidence: 'calls $450 typical for most solar systems',
  },
  clovis: {
    status: 'not-published',
    evidence: "neither that page nor the City's solar submittal documents state the amount",
  },
  lakewood: {
    status: 'not-retrievable',
    extra: 'Los Angeles County fee schedules plus an 18% City overhead charge.',
    evidence: 'did not open when checked',
  },
  'elk-grove': { status: 'not-published', evidence: 'does not publish a solar permit fee' },
  'mission-viejo': {
    status: 'published',
    components: [{ label: 'residential solar system up to 15 kW (April 2023 schedule)', usd: 450, quote: 'at $450' }],
    extra: 'Above 15 kW: $15 per kW.',
  },
  victorville: {
    status: 'published',
    components: [{ label: 'photovoltaic system, residential up to 15 kW', usd: 372, quote: 'at $372.00' }],
  },
  glendale: { status: 'not-published', evidence: 'Glendale does not publish its solar permit fee' },
  'santa-barbara': {
    status: 'published',
    components: [{ label: 'photovoltaic system, residential, 15 kW or less', usd: 450, quote: 'of 15 kW or less at $450' }],
  },
  vacaville: { status: 'not-retrievable', evidence: 'could not be read in a form that ties an amount to it' },
  saratoga: { status: 'not-published', evidence: 'did not state a solar permit fee' },
};

// -----------------------------------------------------------------------------
// Instant-permit platform and online filing
// -----------------------------------------------------------------------------

export type PermitPlatform = 'solarapp' | 'symbium' | 'city-instant' | 'none-named' | 'unconfirmed' | 'unclassified';

export const PLATFORM_LABEL: Record<PermitPlatform, string> = {
  solarapp: 'SolarAPP+',
  symbium: 'Symbium',
  'city-instant': "City's own instant permit",
  'none-named': 'None named',
  unconfirmed: 'Could not confirm',
  unclassified: 'See city page',
};

interface PlatformEntry {
  platform: Exclude<PermitPlatform, 'unclassified'>;
  /** Exact text in the row's permitOnline or permitFeeNote, unless `source` is set. */
  evidence: string;
  /** A City page other than the row's permit page, checked for this cell. */
  source?: IndexSource;
  note?: string;
}

const PLATFORMS: Record<string, PlatformEntry> = {
  temecula: { platform: 'solarapp', evidence: 'SolarAPP+ has been available since September 30, 2023' },
  murrieta: { platform: 'solarapp', evidence: 'must be submitted through SolarAPP+' },
  'san-diego': { platform: 'city-instant', evidence: 'Self-certified systems issue instantly' },
  escondido: { platform: 'solarapp', evidence: 'use SolarAPP+ for residential rooftop systems' },
  anaheim: {
    platform: 'city-instant',
    evidence: "lists Anaheim's platform as a custom one",
    note: 'Solar Permit Online; the CEC SB 379 data (self-reported) lists a custom platform.',
  },
  aptos: { platform: 'solarapp', evidence: 'SolarAPP+ is explicitly named' },
  bakersfield: { platform: 'none-named', evidence: 'page does not name SolarAPP+ specifically' },
  'california-city': { platform: 'solarapp', evidence: 'Yes, via SolarAPP+' },
  camarillo: {
    platform: 'solarapp',
    evidence: 'automated permitting for eligible new residential rooftop solar projects through SolarAPP+',
    source: {
      label: 'City of Camarillo, Building & Safety',
      url: 'https://www.cityofcamarillo.org/departments/building___safety/index.php',
      verifiedAt: '2026-09-23',
    },
  },
  carlsbad: { platform: 'solarapp', evidence: 'rooftop projects use SolarAPP+' },
  'chula-vista': { platform: 'solarapp', evidence: 'expedited solar permits must go through SolarAPP+' },
  corona: { platform: 'symbium', evidence: "lists Corona's platform as Symbium" },
  'el-cajon': { platform: 'solarapp', evidence: 'Licensed contractors get SolarAPP+ pre-approval' },
  'el-dorado-hills': { platform: 'symbium', evidence: 'through Symbium for residential parcels' },
  fresno: { platform: 'solarapp', evidence: 'Single-family and duplex projects can use SolarAPP+' },
  'grass-valley': { platform: 'solarapp', evidence: 'After SolarAPP+ approval' },
  hollister: { platform: 'none-named', evidence: 'SolarAPP+ is not mentioned' },
  lincoln: { platform: 'symbium', evidence: 'online filing via the Symbium portal' },
  livermore: { platform: 'solarapp', evidence: 'retrofit systems go through SolarAPP+' },
  manteca: { platform: 'symbium', evidence: 'issued instantly online through Symbium' },
  marina: { platform: 'none-named', evidence: 'the page does not mention SolarAPP+ specifically' },
  modesto: {
    platform: 'solarapp',
    evidence: "lists Modesto's automated solar permitting platform as SolarAPP+",
    note: 'Per the CEC SB 379 data (self-reported); the City pages checked do not describe the route.',
  },
  monterey: { platform: 'solarapp', evidence: "lists Monterey's platform as SolarAPP+" },
  napa: { platform: 'none-named', evidence: 'as without an automated solar permitting platform' },
  oceanside: { platform: 'solarapp', evidence: 'registered with SolarAPP+ apply' },
  'pacific-grove': {
    platform: 'none-named',
    evidence: 'SolarAPP+ is not in service for Pacific Grove at this time',
    note: 'The City says SolarAPP+ is not in service there.',
  },
  petaluma: { platform: 'solarapp', evidence: 'registered with SolarAPP+' },
  'rancho-cordova': { platform: 'solarapp', evidence: 'SolarAPP+ explicitly named' },
  'rancho-cucamonga': { platform: 'solarapp', evidence: 'SolarAPP+ named and available' },
  roseville: { platform: 'solarapp', evidence: 'The design goes through SolarAPP+' },
  salinas: { platform: 'solarapp', evidence: 'Yes, via SolarAPP+' },
  'san-jose': {
    platform: 'city-instant',
    evidence: "lists San Jose's platform as a custom one",
    note: 'Online permits at SJPermits.org; the CEC SB 379 data (self-reported) lists a custom platform.',
  },
  'san-luis-obispo': { platform: 'solarapp', evidence: 'After SolarAPP+ review' },
  'san-marcos': { platform: 'solarapp', evidence: 'Contractors use SolarAPP+' },
  'santa-cruz': { platform: 'solarapp', evidence: 'After SolarAPP+ approval' },
  'santa-rosa': { platform: 'solarapp', evidence: 'through SolarAPP+ and then apply' },
  stockton: { platform: 'solarapp', evidence: 'SolarAPP+ named' },
  'thousand-oaks': { platform: 'solarapp', evidence: 'can use SolarAPP+' },
  tulare: { platform: 'solarapp', evidence: 'retrofit systems go through SolarAPP+' },
  ventura: { platform: 'symbium', evidence: 'Symbium (not SolarAPP+)' },
  'walnut-creek': { platform: 'none-named', evidence: 'does not say whether solar permits go through SolarAPP+' },
  watsonville: { platform: 'solarapp', evidence: 'SolarAPP+ is explicitly named' },
  winchester: { platform: 'solarapp', evidence: 'SolarAPP+ named' },
  yucaipa: {
    platform: 'solarapp',
    evidence: "lists Yucaipa's platform as SolarAPP+",
    note: 'Per the CEC SB 379 data (self-reported); the City pages checked do not describe a solar route.',
  },
  auburn: { platform: 'symbium', evidence: 'Auburn uses Symbium, not SolarAPP+' },
  beaumont: { platform: 'symbium', evidence: 'Beaumont uses Symbium instead' },
  danville: { platform: 'solarapp', evidence: 'SolarApp+ Submittals' },
  encinitas: {
    platform: 'solarapp',
    evidence: "lists Encinitas's platform as SolarAPP+",
    note: 'Per the CEC SB 379 data (self-reported); the City pages checked do not name it.',
  },
  'los-angeles': { platform: 'none-named', evidence: 'SolarAPP+ is not named in this bulletin' },
  ontario: { platform: 'symbium', evidence: "through Symbium's real-time permitting platform" },
  'palm-springs': { platform: 'none-named', evidence: 'SolarAPP+ is not named on this page' },
  rocklin: { platform: 'solarapp', evidence: 'can apply through SolarAPP+' },
  seaside: { platform: 'solarapp', evidence: 'submitted for automated review through SolarAPP+' },
  tracy: {
    platform: 'none-named',
    evidence: 'does not name SolarAPP+',
    note: 'Applications by email or online submittal; the CEC SB 379 data (self-reported) lists a custom platform.',
  },
  vallejo: { platform: 'symbium', evidence: "lists Vallejo's platform as Symbium" },
  windsor: { platform: 'symbium', evidence: 'Windsor uses Symbium' },
  'yuba-city': { platform: 'solarapp', evidence: 'SolarAPP+ is explicitly named' },
  'san-mateo': { platform: 'solarapp', evidence: 'retrofit systems go through SolarAPP+' },
  irvine: { platform: 'symbium', evidence: 'powered by Symbium' },
  fremont: { platform: 'solarapp', evidence: 'Contractors registered with SolarAPP+' },
  riverside: { platform: 'solarapp', evidence: 'under 38 kW through SolarAPP+' },
  pleasanton: { platform: 'solarapp', evidence: 'retrofit systems go through SolarAPP+' },
  chico: { platform: 'none-named', evidence: 'lists Chico as without a platform' },
  pasadena: {
    platform: 'city-instant',
    evidence: "lists Pasadena's platform as a custom one",
    note: 'Express Permit Portal; the CEC SB 379 data (self-reported) lists a custom platform.',
  },
  'santa-clarita': { platform: 'symbium', evidence: 'instantly online through Symbium' },
  'long-beach': {
    platform: 'city-instant',
    evidence: "lists Long Beach's platform as a custom one",
    note: 'Express permit under IB-023; the CEC SB 379 data (self-reported) lists a custom platform.',
  },
  'santa-ana': { platform: 'solarapp', evidence: 'only after SolarAPP+ approval' },
  sacramento: { platform: 'solarapp', evidence: 'connected SolarAPP+ to its Accela Citizen Access portal' },
  sunnyvale: { platform: 'solarapp', evidence: 'Licensed contractors get SolarAPP+ pre-approval' },
  visalia: { platform: 'solarapp', evidence: 'take the design through SolarAPP+' },
  oakland: { platform: 'solarapp', evidence: 'eligible rooftop systems on a permitted main dwelling through SolarAPP+' },
  'mountain-view': { platform: 'solarapp', evidence: 'Contractors registered with SolarAPP+' },
  'huntington-beach': { platform: 'solarapp', evidence: 'After SolarAPP+ approval' },
  arcata: { platform: 'none-named', evidence: 'as without an automated solar permitting platform' },
  // 2026-09-23 (Tier 3 city-cost wave).
  concord: { platform: 'solarapp', evidence: 'Contractors can use SolarAPP+' },
  richmond: { platform: 'solarapp', evidence: 'retrofit systems go through SolarAPP+' },
  berkeley: { platform: 'solarapp', evidence: 'real-time permit through SolarAPP+' },
  'santa-clara': { platform: 'solarapp', evidence: 'permit an eligible project through SolarAPP+' },
  'san-clemente': { platform: 'solarapp', evidence: 'registered with SolarAPP+' },
  clovis: { platform: 'solarapp', evidence: 'a SolarAPP+ application through the same portal' },
  lakewood: { platform: 'solarapp', evidence: 'submit eligible rooftop solar and storage through SolarAPP+' },
  'elk-grove': {
    platform: 'solarapp',
    evidence: "lists Elk Grove's platform as SolarAPP+",
    note: 'Per the CEC SB 379 data (self-reported); the City page checked does not describe a solar route.',
  },
  'mission-viejo': {
    platform: 'solarapp',
    evidence: "lists Mission Viejo's platform as SolarAPP+",
    note: 'Per the CEC SB 379 data (self-reported); the City page checked does not describe a solar route.',
  },
  victorville: { platform: 'solarapp', evidence: 'Eligible residential rooftop systems go through SolarAPP+' },
  glendale: {
    platform: 'unconfirmed',
    evidence: "lists Glendale's platform as a custom one",
    note: 'The CEC SB 379 data (self-reported) lists a custom platform, but the City describes GWP review in PowerClerk followed by staff plan review, not an instant permit.',
  },
  'santa-barbara': {
    platform: 'unconfirmed',
    evidence: "lists Santa Barbara's platform as a custom one",
    note: 'The CEC SB 379 data (self-reported) lists a custom platform; the City pages checked describe an AB 2188 expedited review, not an instant permit.',
  },
  vacaville: { platform: 'symbium', evidence: "The City's Symbium portal" },
  saratoga: {
    platform: 'symbium',
    evidence: "lists Saratoga's platform as Symbium",
    note: 'Per the CEC SB 379 data (self-reported); the City pages reached do not describe a solar route.',
  },
};

export type OnlineFiling = 'yes' | 'general-portal' | 'not-yet' | 'in-person' | 'not-stated' | 'unclassified';

export const ONLINE_LABEL: Record<OnlineFiling, string> = {
  yes: 'Yes',
  'general-portal': 'General portal only',
  'not-yet': 'Not yet',
  'in-person': 'In person',
  'not-stated': 'Not stated',
  unclassified: 'See city page',
};

/**
 * Only the exceptions are listed. Every other known row must read "Yes" at
 * the start of its permitOnline text, which isOnlineYes() checks.
 */
const ONLINE_EXCEPTIONS: Record<string, { value: Exclude<OnlineFiling, 'yes' | 'unclassified'> | 'yes'; evidence: string }> = {
  hollister: { value: 'not-yet', evidence: 'Online Permitting (Coming Soon)' },
  chico: { value: 'general-portal', evidence: 'digitally through its eTRAKiT permit portal' },
  marina: { value: 'general-portal', evidence: 'Yes for general building permits' },
  napa: { value: 'in-person', evidence: 'handled over the counter, by walk-in' },
  // The row starts "No." about SolarAPP+, then names the City's own online portal.
  'pacific-grove': { value: 'yes', evidence: "online Solar Permit Application portal" },
  'walnut-creek': { value: 'general-portal', evidence: 'general online permit portal' },
  yucaipa: { value: 'general-portal', evidence: 'Yes for permits generally' },
};

function isOnlineYes(row: CityCostRow): boolean {
  return /^\s*yes\b/i.test(row.permitOnline);
}

// -----------------------------------------------------------------------------
// Utility type and community choice aggregators
// -----------------------------------------------------------------------------

export type UtilityType = 'IOU' | 'POU' | 'Mixed';

export const UTILITY_TYPE_LABEL: Record<UtilityType, string> = {
  IOU: 'Investor-owned',
  POU: 'Publicly owned',
  Mixed: 'Depends on address',
};

/**
 * The CEC Electric Load Serving Entities layer's own Type field for each
 * tracker utility (checked 2026-09-22). Typed as a full Record so a utility
 * added to the tracker cannot reach this index without a classification.
 */
const UTILITY_TYPE: Record<UtilityRateKey, { type: 'IOU' | 'POU'; cecName: string }> = {
  pge: { type: 'IOU', cecName: 'Pacific Gas & Electric Company' },
  sce: { type: 'IOU', cecName: 'Southern California Edison' },
  sdge: { type: 'IOU', cecName: 'San Diego Gas & Electric' },
  smud: { type: 'POU', cecName: 'Sacramento Municipal Utility District' },
  ladwp: { type: 'POU', cecName: 'Los Angeles Department of Water & Power' },
  roseville: { type: 'POU', cecName: 'Roseville Electric' },
  mid: { type: 'POU', cecName: 'Modesto Irrigation District' },
  anaheim: { type: 'POU', cecName: 'City of Anaheim Public Utilities Department' },
  corona: { type: 'POU', cecName: 'City of Corona Department of Water & Power' },
  // 2026-09-23: the CEC layer's own names for the two utilities added then.
  riverside: { type: 'POU', cecName: 'City of Riverside' },
  pasadena: { type: 'POU', cecName: 'Pasadena Water & Power' },
  // 2026-09-23 (Tier 3 city-cost wave): the CEC layer's own names, queried that day.
  svp: { type: 'POU', cecName: 'Silicon Valley Power' },
  reu: { type: 'POU', cecName: 'Redding Electric Utility' },
  gwp: { type: 'POU', cecName: 'Glendale Water & Power' },
};

/**
 * Cities where the utility cannot be named for the city as a whole. Corona is
 * the one the city template already special-cases (CityCostPage.tsx); the
 * statement below is the City's own, re-read 2026-09-23.
 */
const ADDRESS_SPECIFIC_UTILITY: Record<string, { display: string; note: string; sources: IndexSource[] }> = {
  corona: {
    display: 'City of Corona or SCE',
    note:
      "The City of Corona's electric utility serves residents and businesses within the City's electric service area, and its customers do not receive an electric bill from Southern California Edison. The CEC's service-territory map shows that area as a small part of Corona inside SCE's territory. Read the utility name on your bill.",
    sources: [
      {
        label: 'City of Corona Utilities Department, Electric Service',
        url: 'https://www.coronaca.gov/departments/utilities/customer-care/services/electric-service',
        verifiedAt: '2026-09-23',
      },
      {
        label: 'California Energy Commission, Electric Load Serving Entities (IOU & POU) service-territory map',
        url: 'https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about',
        verifiedAt: '2026-09-23',
      },
    ],
  },
};

interface CcaEntry {
  name: string;
  /** Text the row's `cca` field must contain for this entry to apply. */
  match: string;
  /** Slugs the source below names as served (checked on verifiedAt). */
  members: string[];
  source: IndexSource;
}

/**
 * Each CCA's own statement of whom it serves, fetched 2026-09-23. A row's CCA
 * cell renders only when the row names the CCA AND the CCA's own source names
 * that city (or, for the two unincorporated communities, that county).
 */
const CCAS: CcaEntry[] = [
  {
    name: 'San Diego Community Power',
    match: 'San Diego Community Power',
    members: ['san-diego', 'chula-vista', 'encinitas'],
    source: {
      label: 'San Diego Community Power, Our Community',
      url: 'https://sdcommunitypower.org/our-community/',
      verifiedAt: '2026-09-23',
    },
  },
  {
    name: 'Clean Energy Alliance',
    match: 'Clean Energy Alliance',
    members: ['escondido', 'carlsbad', 'oceanside', 'san-marcos'],
    source: {
      label: 'Clean Energy Alliance, home page (member cities)',
      url: 'https://thecleanenergyalliance.org/',
      verifiedAt: '2026-09-23',
    },
  },
  {
    name: 'Central Coast Community Energy (3CE)',
    match: 'Central Coast Community Energy',
    // Aptos is unincorporated Santa Cruz County; the County of Santa Cruz is a member.
    members: ['aptos', 'hollister', 'marina', 'monterey', 'pacific-grove', 'salinas', 'san-luis-obispo', 'santa-cruz', 'watsonville', 'seaside'],
    source: {
      label: 'Central Coast Community Energy, Implementation Plan Addendum No. 5 (May 15, 2023), member agencies',
      url: 'https://3cenergy.org/wp-content/uploads/2023/05/Implementation-Plan-Addendum-No.-5.pdf',
      verifiedAt: '2026-09-23',
    },
  },
  {
    name: 'Clean Power Alliance',
    match: 'Clean Power Alliance',
    members: ['camarillo', 'thousand-oaks', 'ventura'],
    source: {
      label: 'Clean Power Alliance, home page (service area)',
      url: 'https://cleanpoweralliance.org/',
      verifiedAt: '2026-09-23',
    },
  },
  {
    name: 'Pioneer Community Energy',
    match: 'Pioneer Community Energy',
    // El Dorado Hills is unincorporated El Dorado County, which Pioneer says it serves "most of".
    members: ['el-dorado-hills', 'grass-valley', 'lincoln', 'auburn', 'rocklin'],
    source: {
      label: 'Pioneer Community Energy, About Us',
      url: 'https://pioneercommunityenergy.org/about-us/',
      verifiedAt: '2026-09-23',
    },
  },
  {
    name: 'Ava Community Energy',
    match: 'Ava Community Energy',
    members: ['livermore', 'stockton', 'tracy', 'fremont', 'oakland', 'pleasanton', 'berkeley'],
    source: {
      label: 'Ava Community Energy, Who We Serve',
      url: 'https://avaenergy.org/community/who-we-serve/',
      verifiedAt: '2026-09-23',
    },
  },
  {
    name: 'MCE',
    match: 'MCE',
    members: ['napa', 'walnut-creek', 'danville', 'vallejo', 'concord', 'richmond'],
    source: {
      label: 'MCE, Service Area',
      url: 'https://www.mcecleanenergy.org/service-area/',
      verifiedAt: '2026-09-23',
    },
  },
  {
    name: 'Silicon Valley Clean Energy',
    match: 'Silicon Valley Clean Energy',
    members: ['sunnyvale', 'mountain-view', 'saratoga'],
    source: {
      label: 'Silicon Valley Clean Energy, About (communities served)',
      url: 'https://svcleanenergy.org/about/',
      verifiedAt: '2026-09-23',
    },
  },
  {
    name: 'Sonoma Clean Power',
    match: 'Sonoma Clean Power',
    members: ['petaluma', 'santa-rosa', 'windsor'],
    source: {
      label: 'Sonoma Clean Power, Who We Are',
      url: 'https://sonomacleanpower.org/who-we-are',
      verifiedAt: '2026-09-23',
    },
  },
  {
    name: 'San José Clean Energy',
    match: 'San Jose Clean Energy',
    members: ['san-jose'],
    source: {
      label: 'City of San José, Energy Department (San José Clean Energy)',
      url: 'https://www.sanjoseca.gov/your-government/departments-offices/energy',
      verifiedAt: '2026-09-23',
    },
  },
  // 2026-09-23 (Tier 2 city-cost wave).
  {
    name: 'Orange County Power Authority',
    match: 'Orange County Power Authority',
    members: ['irvine'],
    source: {
      label: 'Orange County Power Authority, home page (member communities)',
      url: 'https://www.ocpower.org/',
      verifiedAt: '2026-09-23',
    },
  },
  {
    name: 'WestLight Energy',
    match: 'WestLight Energy',
    // WestLight says it serves San Mateo County and Los Banos.
    members: ['san-mateo'],
    source: {
      label: 'WestLight Energy (formerly Peninsula Clean Energy), home page',
      url: 'https://www.westlightenergy.org/',
      verifiedAt: '2026-09-23',
    },
  },
  {
    name: 'Redwood Coast Energy Authority',
    match: 'Redwood Coast Energy Authority',
    // RCEA describes itself as Humboldt County's CCA without listing cities;
    // the City of Arcata's own page states that Arcata joined in May 2017.
    members: ['arcata'],
    source: {
      label: 'City of Arcata, Community Choice Energy Program (joined Redwood Coast Energy Authority, May 2017)',
      url: 'https://www.cityofarcata.org/739/Community-Choice-Energy-Program',
      verifiedAt: '2026-09-23',
    },
  },
  // 2026-09-23 (Tier 3 city-cost wave).
  {
    name: 'Santa Barbara Clean Energy',
    match: 'Santa Barbara Clean Energy',
    members: ['santa-barbara'],
    source: {
      label: 'Santa Barbara Clean Energy, home page (the City-run electricity provider for the City of Santa Barbara)',
      url: 'https://www.sbcleanenergy.com/',
      verifiedAt: '2026-09-23',
    },
  },
  {
    name: 'Desert Community Energy',
    match: 'Desert Community Energy',
    members: ['palm-springs'],
    source: {
      label: 'Desert Community Energy, About',
      url: 'https://desertcommunityenergy.org/about/',
      verifiedAt: '2026-09-23',
    },
  },
];

// -----------------------------------------------------------------------------
// Row assembly
// -----------------------------------------------------------------------------

export type IndexSourceKind = 'permit' | 'platform' | 'utility' | 'rate' | 'cca';

export interface CostIndexRow {
  slug: string;
  city: string;
  county: string;
  cityPath: string;
  utility: {
    key: UtilityRateKey;
    display: string;
    longName: string;
    type: UtilityType;
    typeLabel: string;
    /** Sourced sentence when more than one utility serves the city. */
    note: string | null;
  };
  rate: {
    cents: number | null;
    display: string;
    asOf: string | null;
  };
  cca: { name: string } | null;
  fee: {
    status: FeeStatus;
    statusLabel: string;
    amountUsd: number | null;
    amountDisplay: string | null;
    /** '$165.01 plan check, first 15 kW + $157.72 inspection' */
    breakdown: string | null;
    /** What the figure covers: the component label, or the breakdown when there are several lines. */
    basis: string | null;
    extra: string | null;
  };
  platform: { value: PermitPlatform; label: string; note: string | null };
  online: { value: OnlineFiling; label: string };
  /** ISO date the permit fields were fetched and verified (row.sourcesFetchedAt). */
  checked: string;
  /** The row's own sentences, verbatim, for the detail view and the CSV. */
  permitFeeNote: string;
  permitOnlineNote: string;
  sources: Array<IndexSource & { kind: IndexSourceKind }>;
}

/** '$450', '$275.80', '$1,349.49'. */
export function formatUsd(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded)
    ? `$${rounded.toLocaleString('en-US')}`
    : `$${rounded.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/** Every dollar amount in a string, as numbers. '$1,349.49' -> 1349.49. */
export function dollarFigures(text: string): number[] {
  return [...text.matchAll(/\$\s?(\d{1,3}(?:,\d{3})+|\d+)(?:\.(\d{1,2}))?/g)].map((m) =>
    Number(`${m[1].replace(/,/g, '')}.${m[2] ?? '0'}`),
  );
}

const SPELLED_AMOUNTS: Record<string, number> = { 'four hundred fifty dollars': 450 };

/** True when a component's quote states the component's amount. */
function quoteStatesAmount(quote: string, usd: number): boolean {
  if (SPELLED_AMOUNTS[quote] === usd) return true;
  return dollarFigures(quote).some((figure) => Math.abs(figure - usd) < 0.005);
}

/** True when every dollar figure in `text` also appears in `note`. */
function figuresAppearIn(text: string, note: string): boolean {
  const available = dollarFigures(note);
  return dollarFigures(text).every((figure) => available.some((a) => Math.abs(a - figure) < 0.005));
}

/** Why a classification did not stand, for the test and for review. */
export function classificationProblems(row: CityCostRow): string[] {
  const problems: string[] = [];
  const fee = FEES[row.slug];
  if (!fee) problems.push('no fee classification');
  else {
    if (fee.evidence && !row.permitFeeNote.includes(fee.evidence)) problems.push(`fee evidence missing: ${fee.evidence}`);
    if (fee.status === 'published' && !(fee.components && fee.components.length)) problems.push('published fee has no components');
    for (const c of fee.components ?? []) {
      if (!row.permitFeeNote.includes(c.quote)) problems.push(`fee quote missing: ${c.quote}`);
      if (!quoteStatesAmount(c.quote, c.usd)) problems.push(`fee quote does not state ${c.usd}: ${c.quote}`);
    }
    if (fee.extra && !figuresAppearIn(fee.extra, row.permitFeeNote)) problems.push(`fee extra has a figure not in the note: ${fee.extra}`);
  }
  const platform = PLATFORMS[row.slug];
  if (!platform) problems.push('no platform classification');
  else if (!platform.source && !`${row.permitOnline} ${row.permitFeeNote}`.includes(platform.evidence)) {
    problems.push(`platform evidence missing: ${platform.evidence}`);
  }
  const online = ONLINE_EXCEPTIONS[row.slug];
  if (online) {
    if (!row.permitOnline.includes(online.evidence)) problems.push(`online evidence missing: ${online.evidence}`);
  } else if (!isOnlineYes(row)) {
    problems.push('online filing does not start with "Yes" and has no exception');
  }
  if (row.cca && !ccaFor(row)) problems.push(`CCA not confirmed by a CCA source: ${row.cca}`);
  return problems;
}

function ccaFor(row: CityCostRow): CcaEntry | null {
  if (!row.cca) return null;
  return CCAS.find((entry) => row.cca.includes(entry.match) && entry.members.includes(row.slug)) ?? null;
}

function feeFor(row: CityCostRow): CostIndexRow['fee'] {
  const entry = FEES[row.slug];
  const problems = classificationProblems(row).filter((p) => p.startsWith('fee') || p === 'no fee classification' || p.startsWith('published'));
  if (!entry || problems.length) {
    return { status: 'unclassified', statusLabel: FEE_STATUS_LABEL.unclassified, amountUsd: null, amountDisplay: null, breakdown: null, basis: null, extra: null };
  }
  const components = entry.components ?? [];
  const amount = entry.status === 'published'
    ? Math.round(components.reduce((sum, c) => sum + c.usd, 0) * 100) / 100
    : null;
  return {
    status: entry.status,
    statusLabel: FEE_STATUS_LABEL[entry.status],
    amountUsd: amount,
    amountDisplay: amount === null ? null : formatUsd(amount),
    breakdown: components.length ? components.map((c) => `${formatUsd(c.usd)} ${c.label}`).join(' + ') : null,
    basis:
      components.length === 1
        ? components[0].label.charAt(0).toUpperCase() + components[0].label.slice(1)
        : components.length > 1
          ? components.map((c) => `${formatUsd(c.usd)} ${c.label}`).join(' + ')
          : null,
    extra: entry.extra ?? null,
  };
}

function platformFor(row: CityCostRow): CostIndexRow['platform'] {
  const entry = PLATFORMS[row.slug];
  const ok = entry && (entry.source || `${row.permitOnline} ${row.permitFeeNote}`.includes(entry.evidence));
  if (!ok) return { value: 'unclassified', label: PLATFORM_LABEL.unclassified, note: null };
  return { value: entry.platform, label: PLATFORM_LABEL[entry.platform], note: entry.note ?? null };
}

function onlineFor(row: CityCostRow): CostIndexRow['online'] {
  const exception = ONLINE_EXCEPTIONS[row.slug];
  if (exception) {
    return row.permitOnline.includes(exception.evidence)
      ? { value: exception.value, label: ONLINE_LABEL[exception.value] }
      : { value: 'unclassified', label: ONLINE_LABEL.unclassified };
  }
  if (!(row.slug in PLATFORMS) || !isOnlineYes(row)) return { value: 'unclassified', label: ONLINE_LABEL.unclassified };
  return { value: 'yes', label: ONLINE_LABEL.yes };
}

function dedupeSources(list: Array<IndexSource & { kind: IndexSourceKind }>) {
  const seen = new Set<string>();
  return list.filter((s) => {
    const key = `${s.kind}|${s.url}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function buildCostIndexRow(row: CityCostRow): CostIndexRow {
  const record = getUtilityRate(row.utilityKey);
  const typeInfo = UTILITY_TYPE[row.utilityKey];
  const addressSpecific = ADDRESS_SPECIFIC_UTILITY[row.slug];
  const split = row.utilitySplit;
  const cca = ccaFor(row);
  const platformEntry = PLATFORMS[row.slug];
  const platform = platformFor(row);

  const utility: CostIndexRow['utility'] = addressSpecific
    ? {
        key: row.utilityKey,
        display: addressSpecific.display,
        longName: record.longName,
        type: 'Mixed',
        typeLabel: UTILITY_TYPE_LABEL.Mixed,
        note: addressSpecific.note,
      }
    : {
        key: row.utilityKey,
        display: split ? `${record.name}; part of the city: ${split.others}` : record.name,
        longName: record.longName,
        type: typeInfo.type,
        typeLabel: UTILITY_TYPE_LABEL[typeInfo.type],
        note: split ? split.note : null,
      };

  // A rate is a utility-wide figure. It is shown only where one utility can be
  // named for the city as a whole, and never for the address-specific case.
  const rate: CostIndexRow['rate'] =
    addressSpecific || record.averageResidentialRateCents === null
      ? { cents: null, display: addressSpecific ? 'Depends on utility' : 'No CPUC average', asOf: null }
      : { cents: record.averageResidentialRateCents, display: formatAverageRateCents(record), asOf: record.asOf };

  const sources: Array<IndexSource & { kind: IndexSourceKind }> = [
    // Same label the city page gives this link, so the two cannot read differently.
    { kind: 'permit', label: `${row.city} solar permitting \u2014 ${row.permitFeeSource}`, url: row.permitUrl, verifiedAt: row.sourcesFetchedAt },
    ...(platform.value !== 'unclassified' && platformEntry?.source ? [{ kind: 'platform' as const, ...platformEntry.source }] : []),
    { kind: 'utility', ...CEC_SERVICE_TERRITORY_SOURCE },
    ...(addressSpecific ? addressSpecific.sources.map((s) => ({ kind: 'utility' as const, ...s })) : []),
    ...(split ? split.sources.map((s) => ({ kind: 'utility' as const, ...s })) : []),
    // The IOU rows cite the CPUC report the average comes from; a publicly owned
    // utility's row cites that utility's own rate page, where the tracker has one.
    ...(!addressSpecific && record.sourceUrl
      ? [{ kind: 'rate' as const, label: record.sourceLabel, url: record.sourceUrl, verifiedAt: record.fetchedAt }]
      : []),
    ...(cca ? [{ kind: 'cca' as const, ...cca.source }] : []),
  ];

  return {
    slug: row.slug,
    city: row.city,
    county: row.county.split(' — ')[0],
    cityPath: cityCostPath(row.slug),
    utility,
    rate,
    cca: cca ? { name: cca.name } : null,
    fee: feeFor(row),
    platform,
    online: onlineFor(row),
    checked: row.sourcesFetchedAt,
    permitFeeNote: row.permitFeeNote,
    permitOnlineNote: row.permitOnline,
    sources: dedupeSources(sources),
  };
}

export function getCostIndexRows(): CostIndexRow[] {
  return getPublishableCityCostRows()
    .map(buildCostIndexRow)
    .sort((a, b) => a.city.localeCompare(b.city));
}

/** Every distinct source the index cites, for the sources list and isBasedOn. */
export function getCostIndexSources(rows: CostIndexRow[] = getCostIndexRows()): IndexSource[] {
  const byUrl = new Map<string, IndexSource>();
  for (const row of rows) {
    for (const s of row.sources) {
      if (!byUrl.has(s.url)) byUrl.set(s.url, { label: s.label, url: s.url, verifiedAt: s.verifiedAt });
    }
  }
  byUrl.set(STATE_RESIDENTIAL_PV_FEE_LIMIT.source.url, STATE_RESIDENTIAL_PV_FEE_LIMIT.source);
  return [...byUrl.values()];
}

// -----------------------------------------------------------------------------
// Findings — computed, never typed
// -----------------------------------------------------------------------------

export interface CostIndexFindings {
  total: number;
  feeCounts: Record<FeeStatus, number>;
  published: { count: number; min: number; max: number; median: number; minCities: string[]; maxCities: string[] } | null;
  atOrBelowStateLimit: number;
  aboveStateLimit: Array<{ city: string; amountDisplay: string }>;
  conflictingOrDatedCities: string[];
  platformCounts: Record<PermitPlatform, number>;
  cityInstantCities: string[];
  utilityCounts: Record<UtilityType, number>;
  mixedCities: string[];
  multiUtilityCities: string[];
  ccaCount: number;
  ccaNames: number;
  newestCheck: string;
  oldestCheck: string;
}

function median(sorted: number[]): number {
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : Math.round(((sorted[mid - 1] + sorted[mid]) / 2) * 100) / 100;
}

function countBy<K extends string>(keys: readonly K[], values: K[]): Record<K, number> {
  const out = Object.fromEntries(keys.map((k) => [k, 0])) as Record<K, number>;
  for (const v of values) out[v] += 1;
  return out;
}

export function computeCostIndexFindings(rows: CostIndexRow[]): CostIndexFindings {
  const published = rows.filter((r) => r.fee.status === 'published' && r.fee.amountUsd !== null);
  const amounts = published.map((r) => r.fee.amountUsd as number).sort((a, b) => a - b);
  const min = amounts[0];
  const max = amounts[amounts.length - 1];
  const limit = STATE_RESIDENTIAL_PV_FEE_LIMIT.baseUsd;
  const checks = rows.map((r) => r.checked).sort();

  return {
    total: rows.length,
    feeCounts: countBy(Object.keys(FEE_STATUS_LABEL) as FeeStatus[], rows.map((r) => r.fee.status)),
    published: amounts.length
      ? {
          count: amounts.length,
          min,
          max,
          median: median(amounts),
          minCities: published.filter((r) => r.fee.amountUsd === min).map((r) => r.city),
          maxCities: published.filter((r) => r.fee.amountUsd === max).map((r) => r.city),
        }
      : null,
    atOrBelowStateLimit: amounts.filter((a) => a <= limit).length,
    aboveStateLimit: published
      .filter((r) => (r.fee.amountUsd as number) > limit)
      .map((r) => ({ city: r.city, amountDisplay: r.fee.amountDisplay as string })),
    conflictingOrDatedCities: rows.filter((r) => r.fee.status === 'conflicting' || r.fee.status === 'dated').map((r) => r.city),
    platformCounts: countBy(Object.keys(PLATFORM_LABEL) as PermitPlatform[], rows.map((r) => r.platform.value)),
    cityInstantCities: rows.filter((r) => r.platform.value === 'city-instant').map((r) => r.city),
    utilityCounts: countBy(['IOU', 'POU', 'Mixed'] as const, rows.map((r) => r.utility.type)),
    mixedCities: rows.filter((r) => r.utility.type === 'Mixed').map((r) => r.city),
    multiUtilityCities: rows.filter((r) => r.utility.note !== null).map((r) => r.city),
    ccaCount: rows.filter((r) => r.cca).length,
    ccaNames: new Set(rows.filter((r) => r.cca).map((r) => r.cca.name)).size,
    newestCheck: checks[checks.length - 1],
    oldestCheck: checks[0],
  };
}

/** 'A, B and C'. */
export function listJoin(items: string[]): string {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

// -----------------------------------------------------------------------------
// CSV
// -----------------------------------------------------------------------------

const CSV_HEADER = [
  'city',
  'county',
  'city_page_url',
  'electric_utility',
  'utility_type',
  'utility_note',
  'utility_avg_residential_rate_cents_per_kwh',
  'rate_as_of',
  'cca',
  'permit_fee_status',
  'permit_fee_usd',
  'permit_fee_breakdown',
  'permit_fee_other_figures',
  'instant_permit_platform',
  'online_filing',
  'permit_checked_on',
  'permit_fee_note_verbatim',
  'permit_online_note_verbatim',
  'permit_source',
  'permit_source_url',
  'other_source_urls',
];

const csvCell = (value: string) => `"${value.replaceAll('"', '""')}"`;

export function buildCostIndexCsv(rows: CostIndexRow[] = getCostIndexRows()): string {
  const lines = rows.map((r) => {
    const permitSource = r.sources.find((s) => s.kind === 'permit');
    const others = r.sources.filter((s) => s !== permitSource).map((s) => s.url);
    return [
      r.city,
      r.county,
      `https://ratereliefca.com${r.cityPath}`,
      r.utility.display,
      r.utility.typeLabel,
      r.utility.note ?? '',
      r.rate.cents === null ? '' : r.rate.cents.toFixed(1),
      r.rate.asOf ?? '',
      r.cca?.name ?? '',
      r.fee.statusLabel,
      r.fee.amountUsd === null ? '' : r.fee.amountUsd.toFixed(2),
      r.fee.breakdown ?? '',
      r.fee.extra ?? '',
      r.platform.label,
      r.online.label,
      r.checked,
      r.permitFeeNote,
      r.permitOnlineNote,
      permitSource?.label ?? '',
      permitSource?.url ?? '',
      others.join(' | '),
    ];
  });
  return `${[CSV_HEADER, ...lines].map((line) => line.map(csvCell).join(',')).join('\n')}\n`;
}
