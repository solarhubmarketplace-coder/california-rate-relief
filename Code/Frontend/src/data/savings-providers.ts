// =============================================================================
// savings-providers.ts: who supplies each /solar-savings city's electricity
// and what the utility charges (2026-09-24, Block 3.4, Decision 42).
//
// The /solar-savings/<city> pages answer "who supplies my power and what does
// it cost" rather than repeating the companies and cost pages. This file holds
// the per-city facts that answer needs, each with the source it came from:
//
//   GENERATION   who supplies the generation by default at the city's Census
//                point: a community choice aggregator (CCA), or the delivering
//                utility itself. From the California Energy Commission's
//                Electric Load Serving Entities layers queried 2026-09-24,
//                cross-checked with the site's own city data (growth-cities.ts
//                key facts and region tables, 2026-09-23) and, where those
//                disagree, the CCA's own member list.
//   PLANS        the residential plan names each utility publishes.
//   SCE_BASELINE SCE baseline regions (SCE tariff Index of Communities) and the
//                daily allocations per region (SCE Tiered Rate Plan page).
//
// Only primary sources: the CEC, the CPUC, utilities and CCAs.
// =============================================================================

export const SAVINGS_FACTS_CHECKED = '2026-09-24';

export interface SavingsSource {
  label: string;
  url: string;
  /** ISO date the source was read for this page. */
  fetchedAt: string;
}

export const SAVINGS_SOURCES = {
  cecIouPou: {
    label: 'California Energy Commission: Electric Load Serving Entities (IOU & POU) map layer, queried at the city\'s Census point',
    url: 'https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about',
    fetchedAt: '2026-09-24',
  },
  cecOther: {
    label: 'California Energy Commission: Electric Load Serving Entities (Other, including CCAs) map layer, queried at the city\'s Census point',
    url: 'https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-other/about',
    fetchedAt: '2026-09-24',
  },
  paoQ2_2026: {
    label: 'CPUC Public Advocates Office, Q2 2026 Electric Rates Report (residential average rates)',
    url: 'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf',
    fetchedAt: '2026-09-24',
  },
  d2405028: {
    label: 'CPUC Decision 24-05-028 (income-graduated fixed charge: $24.15, $12.08, $6.00)',
    url: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M531/K686/531686019.PDF',
    fetchedAt: '2026-09-24',
  },
  cpucCareFera: {
    label: 'CPUC: CARE/FERA Program (discounts; income limits June 1, 2026 to May 31, 2027)',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program',
    fetchedAt: '2026-09-24',
  },
  pgePlans: {
    label: 'PG&E: Residential rates table, March 1, 2026 to present (Advice Letter 7846-E)',
    url: 'https://www.pge.com/assets/rates/tariffs/res-inclu-tou-current.xlsx',
    fetchedAt: '2026-09-24',
  },
  scePlans: {
    label: 'SCE: Time-of-Use residential rate plans',
    url: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/time-of-use-plans',
    fetchedAt: '2026-09-24',
  },
  sceTiered: {
    label: 'SCE: Tiered Rate Plan (daily baseline allocations by region; prices as posted)',
    url: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/tiered-rate-plan',
    fetchedAt: '2026-09-24',
  },
  sceIndex: {
    label: 'SCE tariff: Index of Communities, baseline regions (Cal. PUC Sheet 53902-E)',
    url: 'https://www.sce.com/sites/default/files/inline-files/ce62-12.pdf',
    fetchedAt: '2026-09-24',
  },
  sdgePlans: {
    label: 'SDG&E: Total electric rates (current residential schedules)',
    url: 'https://www.sdge.com/total-electric-rates',
    fetchedAt: '2026-09-24',
  },
  cpucNbt: {
    label: 'CPUC: Net Energy Metering and Net Billing',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing',
    fetchedAt: '2026-09-24',
  },
  smudPlans: {
    label: 'SMUD: Residential rates',
    url: 'https://www.smud.org/Rate-Information/Residential-rates',
    fetchedAt: '2026-09-24',
  },
} satisfies Record<string, SavingsSource>;

/** A CCA the pages name, with the page the site cites for it. */
interface Cca {
  name: string;
  short: string;
  url: string;
  /** When the site last read that page. */
  fetchedAt: string;
}

const CCA: Record<string, Cca> = {
  ava: { name: 'Ava Community Energy', short: 'Ava', url: 'https://avaenergy.org/community/who-we-serve/', fetchedAt: '2026-09-23' },
  mce: { name: 'MCE', short: 'MCE', url: 'https://www.mcecleanenergy.org/service-area/', fetchedAt: '2026-09-23' },
  ccce: { name: 'Central Coast Community Energy', short: '3CE', url: 'https://3cenergy.org/', fetchedAt: '2026-09-24' },
  scp: { name: 'Sonoma Clean Power', short: 'SCP', url: 'https://sonomacleanpower.org/who-we-are', fetchedAt: '2026-09-23' },
  westlight: { name: 'WestLight Energy', short: 'WestLight', url: 'https://www.westlightenergy.org/', fetchedAt: '2026-09-23' },
  pioneer: { name: 'Pioneer Community Energy', short: 'Pioneer', url: 'https://pioneercommunityenergy.org/', fetchedAt: '2026-09-24' },
  cpa: { name: 'Clean Power Alliance', short: 'CPA', url: 'https://cleanpoweralliance.org/', fetchedAt: '2026-09-23' },
  dce: { name: 'Desert Community Energy', short: 'DCE', url: 'https://desertcommunityenergy.org/', fetchedAt: '2026-09-23' },
  cea: { name: 'Clean Energy Alliance', short: 'CEA', url: 'https://thecleanenergyalliance.org/', fetchedAt: '2026-09-24' },
  sdcp: { name: 'San Diego Community Power', short: 'SDCP', url: 'https://sdcommunitypower.org/our-community/', fetchedAt: '2026-09-23' },
};

export interface CityGeneration {
  /** The CCA that supplies generation by default, or null (the utility does). */
  cca: Cca | null;
  /** Why the page says so, in the words the page uses ("the CEC map ..."). */
  basis: string;
  /** Sources behind the assignment. */
  sources: SavingsSource[];
}

const cec = [SAVINGS_SOURCES.cecOther];
const ccaSrc = (c: Cca): SavingsSource => ({ label: `${c.name}: service area`, url: c.url, fetchedAt: c.fetchedAt });

function withCca(key: keyof typeof CCA, basis: string, extra: SavingsSource[] = []): CityGeneration {
  const c = CCA[key];
  return { cca: c, basis, sources: [...cec, ccaSrc(c), ...extra] };
}
const MAP = 'the CEC\'s load-serving map places the city in its area';
const MEMBER = 'the city is on its list of member cities';
const noCca = (basis = 'the CEC\'s load-serving map shows no community choice aggregator at the city\'s center'): CityGeneration => ({
  cca: null,
  basis,
  sources: [...cec],
});

/**
 * Generation provider per live /solar-savings city (the ten bills pages carry
 * their own sourced sections and are not listed). Municipal-utility cities
 * have no entry: the utility supplies and delivers.
 */
export const SAVINGS_GENERATION: Readonly<Record<string, CityGeneration>> = {
  // PG&E cities
  aptos: withCca('ccce', MAP),
  watsonville: withCca('ccce', MAP),
  'pacific-grove': withCca('ccce', MAP),
  'santa-cruz': withCca('ccce', MAP),
  'san-luis-obispo': withCca('ccce', MAP),
  'el-dorado-hills': withCca('pioneer', 'Pioneer serves most unincorporated El Dorado County communities, and the CEC\'s load-serving map places El Dorado Hills in its area'),
  'half-moon-bay': withCca('westlight', 'the CEC\'s load-serving map places the city in its area (under its former name, Peninsula Clean Energy)'),
  hayward: withCca('ava', MAP),
  livermore: withCca('ava', MAP),
  pleasanton: withCca('ava', MAP),
  stockton: {
    cca: CCA.ava,
    basis: 'Ava announced service to Stockton and Lathrop; the CEC\'s load-serving map does not show it yet',
    sources: [
      { label: 'Ava Community Energy: service to Stockton and Lathrop', url: 'https://avaenergy.org/news/electricity-provider-ava-community-energy-brings-savings-to-stockton-and-lathrop/', fetchedAt: '2026-09-23' },
    ],
  },
  richmond: withCca('mce', MAP),
  vallejo: withCca('mce', MAP),
  'walnut-creek': withCca('mce', MAP),
  'santa-rosa': withCca('scp', MAP),
  // SCE cities
  'thousand-oaks': withCca('cpa', MAP),
  'simi-valley': withCca('cpa', MAP),
  'palm-springs': withCca('dce', MAP),
  'huntington-beach': {
    cca: null,
    basis: 'the city returned to SCE generation after leaving the Orange County Power Authority in 2024',
    sources: [{ label: 'Orange County Power Authority: Huntington Beach', url: 'https://www.ocpower.org/huntington-beach-2/', fetchedAt: '2026-09-23' }],
  },
  westminster: noCca(),
  'santa-ana': noCca(),
  lakewood: noCca(),
  fontana: noCca(),
  redlands: noCca(),
  'santa-clarita': noCca(),
  visalia: noCca(),
  murrieta: noCca(),
  menifee: noCca(),
  wildomar: noCca(),
  winchester: noCca(),
  hemet: noCca(),
  beaumont: noCca(),
  'palm-desert': noCca(),
  // SDG&E cities
  carlsbad: withCca('cea', MEMBER),
  escondido: withCca('cea', MEMBER),
  oceanside: withCca('cea', MEMBER),
  'chula-vista': withCca('sdcp', MAP),
  fallbrook: withCca('sdcp', MAP),
  'san-clemente': noCca(),
};

/** Residential plan names each utility publishes, with the page that lists them. */
export const UTILITY_PLANS: Readonly<Record<string, { text: string; source: SavingsSource }>> = {
  pge: {
    text: 'time-of-use plans E-TOU-C and E-TOU-D, the Electric Home plan E-ELEC, the electric-vehicle plans EV2 and EV-B, and the tiered plan E-1',
    source: SAVINGS_SOURCES.pgePlans,
  },
  sce: {
    text: 'time-of-use plans TOU-D-4-9PM and TOU-D-5-8PM, TOU-D-PRIME for homes with an electric vehicle, a battery or an electric heat pump, and a tiered plan',
    source: SAVINGS_SOURCES.scePlans,
  },
  sdge: {
    text: 'time-of-use plans TOU-DR1 and TOU-DR2, TOU-ELEC, the electric-vehicle plan EV-TOU-5, and the tiered schedule DR',
    source: SAVINGS_SOURCES.sdgePlans,
  },
  smud: {
    text: 'the standard Time-of-Day (5-8 p.m.) Rate, a Time-of-Day (Low Use) Rate, and a Fixed Rate that SMUD says costs on average 4% more than Time-of-Day',
    source: SAVINGS_SOURCES.smudPlans,
  },
};

/** SCE daily baseline allocations by region (kWh/day), from the Tiered Rate Plan page. */
export const SCE_BASELINE_ALLOCATION: Readonly<Record<number, { summer: number; winter: number; climate: 'hot' | 'moderate' | 'cool' }>> = {
  5: { summer: 17.0, winter: 18.4, climate: 'moderate' },
  6: { summer: 11.4, winter: 11.0, climate: 'cool' },
  8: { summer: 12.8, winter: 10.3, climate: 'cool' },
  9: { summer: 16.9, winter: 12.0, climate: 'moderate' },
  10: { summer: 19.3, winter: 12.1, climate: 'moderate' },
  13: { summer: 22.2, winter: 12.2, climate: 'hot' },
  14: { summer: 19.2, winter: 11.9, climate: 'hot' },
  15: { summer: 45.0, winter: 9.7, climate: 'hot' },
  16: { summer: 14.7, winter: 12.4, climate: 'cool' },
};

/** SCE tiered prices as the Tiered Rate Plan page posts them (cents/kWh). */
export const SCE_TIER_PRICES = { tier1: 30, tier2: 40, bscDailyCents: 79 };

/** SCE baseline regions per city, from SCE's Index of Communities. */
export const SCE_BASELINE_REGIONS: Readonly<Record<string, readonly number[]>> = {
  murrieta: [10],
  menifee: [10],
  wildomar: [10],
  winchester: [10],
  hemet: [10, 16],
  beaumont: [10, 15],
  visalia: [13],
  'thousand-oaks': [6, 9],
  'santa-clarita': [9, 14, 16],
  'santa-ana': [6, 8],
  lakewood: [8],
  'palm-springs': [15],
  'huntington-beach': [6],
  fontana: [10],
  'simi-valley': [9],
  'palm-desert': [15],
  redlands: [10],
  westminster: [6, 8],
  'moreno-valley': [10],
};

/**
 * Cities the CEC load-serving map splits between utilities, as the site's city
 * data measured it (CEC layers intersected with the Census place boundary,
 * 2026-09-23). The page names both and tells the reader to check the bill.
 */
export const SAVINGS_SPLIT: Readonly<Record<string, string>> = {
  merced: 'the Merced Irrigation District on about 78% of the city\'s land and PG&E on about 22%',
  'moreno-valley': 'Moreno Valley Utility on about 58% of the city\'s land and SCE on about 42%',
  modesto: 'the Modesto Irrigation District on about 78% of the city\'s land and the Turlock Irrigation District on about 22%',
  'palm-desert': 'SCE on almost all of the city, with a small area served by the Imperial Irrigation District',
};
export const SAVINGS_SPLIT_SOURCE: SavingsSource = {
  label: 'California Energy Commission: Electric Load Serving Entities (IOU & POU) map layer, intersected with the Census place boundary',
  url: SAVINGS_SOURCES.cecIouPou.url,
  fetchedAt: '2026-09-23',
};
