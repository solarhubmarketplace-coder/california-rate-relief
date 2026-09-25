// =============================================================================
// city-pages.ts — one place that knows every live city page on ratereliefca.com
//
// Three templates render city pages: /solar-cost/<city> (city-cost-data.ts),
// /solar-companies/<city> (growth-cities.ts, or the older cities-data.ts
// template) and /solar-savings/<city> (cities-data.ts). Before 2026-09-22 each
// template wrote its own title, picked its own sibling links from its own data
// file and dated itself differently. This module is the shared layer:
//
//   - which city pages answer 200 (not redirected, not gated out)
//   - which page owns "solar panels <city>" when a city has more than one
//   - titles, meta descriptions and H1s, built from each page's own data so a
//     title never promises something the page does not carry
//   - the 4-6 nearest live city pages for the "Solar near <city>" block
//   - the regional hub a city belongs to
//   - the one date a page shows as "Updated" and emits as dateModified
//
// Imports are relative, not '@/…', so scripts (assert-city-links.mjs, the
// before/after title export) can import this file with Node's type stripping.
// =============================================================================

import { CITIES, UTILITY_DATA, getCityBySlug, type CityData } from '../data/cities-data.ts';
import { growthCities } from '../data/growth-cities.ts';
import { CITY_COORDINATES } from '../data/city-coordinates.ts';
import { CITY_PAGE_DATES } from '../data/city-page-dates.ts';
import {
  COST_TEMPLATE_CSLB_VERIFIED,
  cityCostPath,
  getCityCostRow,
  getPublishableCityCostRows,
  type CityCostRow,
} from '../data/city-cost-data.ts';
import { RATE_TRACKER_PATH, formatAverageRateCents, getUtilityRate } from '../data/utility-rate-tracker.ts';
import { hasCompaniesCityPage, hasSavingsCityPage } from './canonical-redirects.ts';
import { CRUMB_LABELS, type Crumb } from './breadcrumb-sections.ts';
import { utilityOptions } from './calculator-context.ts';
import { costBenchmark } from './city-cost-content.ts';
import { buildCostIndexRow } from '../data/solar-cost-index.ts';
import { DG_SOURCE, formatDollars, formatPerWatt } from '../data/dgstats/index.ts';

export type CityPageType = 'cost' | 'companies' | 'savings';

const BASE: Record<CityPageType, string> = {
  cost: '/solar-cost',
  companies: '/solar-companies',
  savings: '/solar-savings',
};

export function cityPagePath(type: CityPageType, slug: string): string {
  return type === 'cost' ? cityCostPath(slug) : `${BASE[type]}/${slug}`;
}

// -----------------------------------------------------------------------------
// Which pages exist
// -----------------------------------------------------------------------------

/**
 * True when the page renders with a 200. Cost pages pass the source gate;
 * companies and savings pages exist in their data file and are not a key in
 * the 301 table in canonical-redirects.ts.
 */
export function isLiveCityPage(type: CityPageType, slug: string): boolean {
  if (type === 'cost') return Boolean(getCityCostRow(slug));
  if (type === 'companies') {
    return Boolean(growthCities[slug] || getCityBySlug(slug)) && hasCompaniesCityPage(slug);
  }
  return Boolean(getCityBySlug(slug)) && hasSavingsCityPage(slug);
}

/** Order in which a city's pages claim the head term "solar panels <city>". */
const OWNER_ORDER: CityPageType[] = ['companies', 'cost', 'savings'];

export function liveCityPageTypes(slug: string): CityPageType[] {
  return OWNER_ORDER.filter((type) => isLiveCityPage(type, slug));
}

/**
 * The one page per city whose title leads with "Solar Panels in <city>".
 * Search Console (2026-08-21..09-17) put 98% of city-page impressions on the
 * /solar-companies layer, so that page leads where it is live; otherwise the
 * cost page, which the retired companies URLs 301 to. Savings pages never
 * lead: every live one shares its city with one of the other two.
 */
export function primaryCityPageType(slug: string): CityPageType | null {
  return liveCityPageTypes(slug)[0] ?? null;
}

let allSlugsCache: string[] | null = null;
export function allCitySlugs(): string[] {
  if (!allSlugsCache) {
    allSlugsCache = [
      ...new Set([
        ...getPublishableCityCostRows().map((row) => row.slug),
        ...CITIES.map((city) => city.slug),
        ...Object.keys(growthCities),
      ]),
    ].sort();
  }
  return allSlugsCache;
}

/** Every live city page, as [type, slug] pairs. */
export function allLiveCityPages(): { type: CityPageType; slug: string; path: string }[] {
  return allCitySlugs().flatMap((slug) =>
    liveCityPageTypes(slug).map((type) => ({ type, slug, path: cityPagePath(type, slug) })),
  );
}

export function cityName(slug: string): string {
  return (
    getCityCostRow(slug)?.city ?? growthCities[slug]?.name ?? getCityBySlug(slug)?.name ?? slug
  );
}

/** "El Dorado County — unincorporated…" reads as "El Dorado County". */
export function normalizeCounty(county: string): string {
  return (/^[A-Za-z .'-]+? County/.exec(county)?.[0] ?? county).trim();
}

export function cityCounty(slug: string): string {
  const raw =
    growthCities[slug]?.county ?? getCityBySlug(slug)?.county ?? getCityCostRow(slug)?.county ?? '';
  return normalizeCounty(raw);
}

// -----------------------------------------------------------------------------
// Nearby city pages
// -----------------------------------------------------------------------------

export interface NearbyCityLink {
  slug: string;
  name: string;
  county: string;
  type: CityPageType;
  href: string;
  label: string;
  sameCounty: boolean;
}

/**
 * Anchor wordings per page type (Block 5 §5.5: templated blocks rotate 2-3
 * phrasings instead of one exact-match anchor on every page). The wording is
 * picked from the linking page and the target together, so a target's inbound
 * anchors vary across the site while a given page always renders the same text.
 * Every wording names the target's own intent: a cost anchor never leads to a
 * companies page, and the reverse.
 */
const LINK_LABELS: Record<CityPageType, ((name: string) => string)[]> = {
  cost: [
    (name) => `Solar panel cost in ${name}`,
    (name) => `What solar costs in ${name}`,
    (name) => `${name} solar price factors`,
  ],
  companies: [
    (name) => `Solar companies in ${name}`,
    (name) => `Comparing ${name} solar installers`,
    (name) => `${name} solar company checks`,
  ],
  savings: [
    (name) => `Solar savings in ${name}`,
    (name) => `${name} electric rates and solar savings`,
    (name) => `Bills and rates in ${name}`,
  ],
};

/** Small stable hash, so a page renders the same anchor on every build. */
function stableIndex(key: string, size: number): number {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return h % size;
}

export function cityLinkLabel(type: CityPageType, targetSlug: string, fromKey = ''): string {
  const options = LINK_LABELS[type];
  return options[stableIndex(`${fromKey}>${targetSlug}`, options.length)](cityName(targetSlug));
}

const LINK_LABEL: Record<CityPageType, (name: string) => string> = {
  cost: (name) => `Solar panel cost in ${name}`,
  companies: (name) => `Solar companies in ${name}`,
  savings: (name) => `Solar savings in ${name}`,
};

/** Great-circle distance in km between two city points (Census internal points). */
function distanceKm(a: string, b: string): number {
  const p = CITY_COORDINATES[a];
  const q = CITY_COORDINATES[b];
  if (!p || !q) return Number.POSITIVE_INFINITY;
  const rad = Math.PI / 180;
  const dLat = (q[0] - p[0]) * rad;
  const dLon = (q[1] - p[1]) * rad;
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(p[0] * rad) * Math.cos(q[0] * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

/**
 * The nearest live city pages for the "Solar near <city>" block: same county
 * first (nearest first), then the nearest cities anywhere. Each neighbour links
 * to its page of the same type as the current page when that page is live, and
 * otherwise to its lead page, so every link answers 200.
 */
export function nearbyCityLinks(slug: string, currentType: CityPageType, max = 6): NearbyCityLink[] {
  const county = cityCounty(slug);
  const byDistance = (a: string, b: string) =>
    distanceKm(slug, a) - distanceKm(slug, b) || cityName(a).localeCompare(cityName(b));
  const candidates = allCitySlugs().filter((other) => other !== slug && liveCityPageTypes(other).length > 0);
  const same = candidates.filter((other) => cityCounty(other) === county).sort(byDistance);
  const rest = candidates.filter((other) => cityCounty(other) !== county).sort(byDistance);
  return [...same, ...rest].slice(0, max).map((other) => {
    const types = liveCityPageTypes(other);
    const type = types.includes(currentType) ? currentType : types[0];
    const name = cityName(other);
    return {
      slug: other,
      name,
      county: cityCounty(other),
      type,
      href: cityPagePath(type, other),
      label: cityLinkLabel(type, other, `${currentType}:${slug}`),
      sameCounty: cityCounty(other) === county,
    };
  });
}

/**
 * A city's own pages, one per intent, for the "Compare installers / What it
 * costs here / Your bills and rates" row near the top of every city page
 * (Block 5 §4.2: the companion card goes after the intro). Only live pages are
 * returned, so no link ever points at a 301 source.
 */
export interface CitySiblingLink {
  type: CityPageType;
  href: string;
  /** Short intent label, the same on every city ("What it costs here"). */
  intent: string;
  /** Descriptive anchor naming the city. */
  label: string;
  current: boolean;
}

const SIBLING_INTENT: Record<CityPageType, string> = {
  companies: 'Compare installers',
  cost: 'What it costs here',
  savings: 'Your bills and rates',
};

const SIBLING_LABEL: Record<CityPageType, (name: string) => string> = {
  companies: (name) => `Solar companies and quote checks for ${name}`,
  cost: (name) => `What sets the price of solar in ${name}`,
  savings: (name) => `${name} electric rates, bills and solar savings`,
};

export function citySiblingLinks(slug: string, currentType: CityPageType): CitySiblingLink[] {
  const name = cityName(slug);
  return OWNER_ORDER.filter((type) => type === currentType || isLiveCityPage(type, slug)).map((type) => ({
    type,
    href: cityPagePath(type, slug),
    intent: SIBLING_INTENT[type],
    label: SIBLING_LABEL[type](name),
    current: type === currentType,
  }));
}

/** The statewide hub each city page type sits under (Block 5 §4.1). */
export const CITY_TYPE_HUB: Record<CityPageType, { href: string; label: string }> = {
  companies: { href: '/best-solar-companies-california', label: 'Solar companies across California' },
  cost: { href: '/solar-cost', label: 'Solar cost in every California city we cover' },
  savings: { href: '/california-utility-rate-tracker', label: 'California utility rate tracker' },
};

/** The city's other live pages, for the "Also for <city>" links. */
export function companionCityLinks(slug: string, currentType: CityPageType): NearbyCityLink[] {
  const name = cityName(slug);
  return liveCityPageTypes(slug)
    .filter((type) => type !== currentType)
    .map((type) => ({
      slug,
      name,
      county: cityCounty(slug),
      type,
      href: cityPagePath(type, slug),
      label: LINK_LABEL[type](name),
      sameCounty: true,
    }));
}

// -----------------------------------------------------------------------------
// Regional hubs (the six /solar-savings/<region> pages)
// -----------------------------------------------------------------------------

export interface RegionalHub {
  href: string;
  /** Region name as the hub's own H1 uses it. */
  region: string;
  counties: readonly string[];
}

/**
 * Mirrors the county lists the hub pages filter their city grids by
 * (src/app/solar-savings/<region>/page.tsx). Monterey and Santa Cruz counties
 * appear on both the Bay Area and Central Valley hubs, so they list both.
 */
export const REGIONAL_HUBS: readonly RegionalHub[] = [
  { href: '/solar-savings/orange-county', region: 'Orange County', counties: ['Orange County'] },
  { href: '/solar-savings/los-angeles-county', region: 'Los Angeles County', counties: ['Los Angeles County'] },
  { href: '/solar-savings/san-diego-county', region: 'San Diego County', counties: ['San Diego County'] },
  { href: '/solar-savings/inland-empire', region: 'Inland Empire', counties: ['Riverside County', 'San Bernardino County'] },
  {
    href: '/solar-savings/bay-area',
    region: 'Bay Area',
    // Marin, Napa and Solano added 2026-09-24 with the hub's own list, so the
    // Napa, Vallejo and Vacaville cost pages are listed there too.
    counties: [
      'Santa Clara County', 'San Francisco County', 'Alameda County', 'Contra Costa County',
      'Santa Cruz County', 'Sonoma County', 'San Mateo County', 'Monterey County',
      'Marin County', 'Napa County', 'Solano County',
    ],
  },
  {
    href: '/solar-savings/central-valley',
    region: 'Central Valley',
    counties: [
      'Kern County', 'Tulare County', 'Kings County', 'Fresno County', 'Sacramento County',
      'San Joaquin County', 'Stanislaus County', 'Merced County', 'Butte County',
      'Monterey County', 'Santa Cruz County', 'San Luis Obispo County',
    ],
  },
];

export function regionalHubsFor(slug: string): RegionalHub[] {
  const county = cityCounty(slug);
  return REGIONAL_HUBS.filter((hub) => hub.counties.includes(county));
}

// -----------------------------------------------------------------------------
// Breadcrumbs for the /solar-savings layer (topic map Block 5 §5.6, 2026-09-24)
// -----------------------------------------------------------------------------

/** The bill-and-rate section's top: /solar-savings itself has no index page. */
export const RATE_TRACKER_CRUMB: Crumb = {
  label: CRUMB_LABELS[RATE_TRACKER_PATH] ?? 'California utility rate tracker',
  href: RATE_TRACKER_PATH,
};

/**
 * The crumbs between Home and a /solar-savings city page: its regional hub
 * when it has one (Home > Region > City), otherwise the rate tracker
 * (Home > California utility rate tracker > City). The page renders this list
 * and passes the same list to PublicLayout, so the visible trail and the
 * BreadcrumbList schema match. The regional hubs themselves use
 * [RATE_TRACKER_CRUMB] (Home > California utility rate tracker > Region).
 */
export function savingsCityCrumbs(slug: string): Crumb[] {
  const hub = regionalHubsFor(slug)[0];
  return hub ? [{ label: `${hub.region} solar guide`, href: hub.href }] : [RATE_TRACKER_CRUMB];
}

// -----------------------------------------------------------------------------
// Dates: the one date a page shows as "Updated" and emits as dateModified
// -----------------------------------------------------------------------------

/** The companies route for the older template shipped in commit ff1ecfb. */
const LEGACY_COMPANIES_LAUNCHED = '2026-04-24';
/** growth-cities.ts: "Sources default to 2026-09-10". */
const GROWTH_DEFAULT_CHECKED = '2026-09-10';

export interface CityPageDateInfo {
  /** ISO date shown as "Updated" and emitted as dateModified / lastModified. */
  modified: string;
  /** ISO date the page first shipped, when the record shows it. */
  published?: string;
}

const maxIso = (...dates: (string | undefined)[]) =>
  dates.filter((d): d is string => Boolean(d)).sort().pop() as string;

/**
 * The newest verified fact on a /solar-cost page: the row's own sources, any
 * utility-split sources, and the template-wide CSLB section.
 */
export function costPageModified(row: CityCostRow): string {
  return maxIso(
    row.sourcesFetchedAt,
    COST_TEMPLATE_CSLB_VERIFIED,
    // 2026-09-24: every cost page now states the CPUC DG Stats figures,
    // checked that day.
    DG_SOURCE.verifiedAt,
    ...(row.utilitySplit?.sources.map((s) => s.verifiedAt) ?? []),
  );
}

export function cityPageDates(type: CityPageType, slug: string): CityPageDateInfo {
  if (type === 'cost') {
    const row = getCityCostRow(slug);
    return { modified: row ? costPageModified(row) : GROWTH_DEFAULT_CHECKED };
  }
  if (type === 'companies' && growthCities[slug]) {
    const city = growthCities[slug];
    return { modified: maxIso(city.sourceCheckedDate || GROWTH_DEFAULT_CHECKED, city.contentModified) };
  }
  if (type === 'savings' && SAVINGS_BILLS_SEO[slug]?.modified) {
    const record = CITY_PAGE_DATES[slug];
    return {
      published: record?.added,
      modified: maxIso(record?.added, record?.updated, SAVINGS_BILLS_SEO[slug].modified),
    };
  }
  const record = CITY_PAGE_DATES[slug];
  if (type === 'companies') {
    const published = maxIso(LEGACY_COMPANIES_LAUNCHED, record?.added);
    return { published, modified: maxIso(published, record?.updated) };
  }
  return { published: record?.added, modified: maxIso(record?.added, record?.updated) };
}

// -----------------------------------------------------------------------------
// Titles, descriptions and H1s
// -----------------------------------------------------------------------------

export interface CitySeo {
  title: string;
  description: string;
  h1: string;
}

const TITLE_MAX = 60;
const DESCRIPTION_MAX = 155;
const YEAR = '2026';

/** First candidate that fits, else the last one. */
function fit(max: number, ...candidates: string[]): string {
  return candidates.find((c) => c.length <= max) ?? candidates[candidates.length - 1];
}

/** "Salinas'" rather than "Salinas's", as the site's copy writes it. */
function possessive(name: string): string {
  return name.endsWith('s') ? `${name}'` : `${name}'s`;
}

function shortDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return iso;
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Number(m[2]) - 1];
  return `${month} ${Number(m[3])}, ${m[1]}`;
}

/** Utility label for a cities-data page, as the page itself names it. */
function legacyUtilityLabel(city: CityData): string {
  if (city.utilityConfirmationRequired) {
    return (city.utilityDisplayName || 'your utility')
      .replace(/^Check the bill:\s*/i, '')
      .replace(/\s+where applicable$/i, '')
      .trim();
  }
  return city.utilityDisplayName || UTILITY_DATA[city.utilityCode]?.shortName || 'your utility';
}

const GROWTH_UTILITY_LABEL: Record<string, string> = {
  pge: 'PG&E',
  sce: 'SCE',
  sdge: 'SDG&E',
  ladwp: 'LADWP',
  smud: 'SMUD',
  apu: 'Anaheim Public Utilities',
  reu: 'Roseville Electric',
  pwp: 'Pasadena Water and Power',
  gwp: 'Glendale Water & Power',
  redding: 'Redding Electric Utility',
  cpau: 'City of Palo Alto Utilities',
  // 2026-09-23 (Tier 3, citycos): Burbank's companies page.
  bwp: 'Burbank Water and Power',
};

/**
 * The utility a growth companies page hands to its inquiry form. The form's
 * select only lists the large utilities, and any other value is shown to the
 * visitor as their typed "other" answer, so a city-utility code such as
 * 'pwp' becomes the utility's name instead of the bare code.
 */
export function growthUtilityForForm(code: string): string {
  if (!code || code === 'other') return code;
  if (utilityOptions.some(([id]) => id === code)) return code;
  return GROWTH_UTILITY_LABEL[code] ?? code;
}

/**
 * /solar-cost/<city>. 2026-09-24 (Block 3, items 7.1/7.3): the title and H1
 * now carry the answer, the reported median cost per watt from CPUC DG Stats,
 * and name the level it comes from when that is not the city itself. The H1 is
 * the longest candidate; the title is the first candidate that fits 60
 * characters, so the two read the same.
 */
export function costPageSeo(row: CityCostRow): CitySeo {
  const city = row.city;
  const b = costBenchmark(row);
  const perWatt = `${formatPerWatt(b.perWatt.median)}/W`;
  const tag =
    b.cost.level === 'city'
      ? 'Reported'
      : b.cost.level === 'county'
        ? 'County Median'
        : b.cost.level === 'utility'
          ? `${b.cost.label.replace(' territory', '')} Median`
          : 'State Median';
  const candidates = [
    `Solar Panel Cost in ${city}, CA (${YEAR}): ${perWatt} ${tag}`,
    `${city} Solar Panel Cost (${YEAR}): ${perWatt} ${tag}`,
    `Solar Cost in ${city}, CA (${YEAR}): ${perWatt} ${tag}`,
    `${city} Solar Cost (${YEAR}): ${perWatt} ${tag}`,
    `${city} Solar Cost (${YEAR}): ${perWatt}`,
  ];
  const title = fit(TITLE_MAX, ...candidates);

  const fee = buildCostIndexRow(row).fee;
  const where = b.cost.level === 'city' ? city : b.cost.label;
  const price = `${where} owners reported ${perWatt} (median, ${b.perWatt.n.toLocaleString('en-US')} systems), about ${formatDollars(b.price.median)} for ${b.kw} kW.`;
  const feeText =
    fee.status === 'published' && fee.amountDisplay
      ? ` ${possessive(city)} permit fee: ${fee.amountDisplay} vs the $450 state limit.`
      : ` ${possessive(city)} permit rules vs the $450 state limit.`;
  const description = fit(
    DESCRIPTION_MAX,
    `${price}${feeText} CPUC data.`,
    `${price}${feeText}`,
    `${price} Permit fee vs the state limit.`,
    price,
  );
  return {
    title,
    description,
    h1: candidates[0],
  };
}

/** /solar-companies/<city>, both the comparison template and the older one. */
export function companiesPageSeo(slug: string): CitySeo | null {
  const growth = growthCities[slug];
  const legacy = getCityBySlug(slug);
  const city = growth?.name ?? legacy?.name;
  if (!city) return null;
  const title = fit(
    TITLE_MAX,
    `Solar Panels & Solar Companies in ${city}, CA (${YEAR})`,
    `${city} Solar Panels & Solar Companies (${YEAR})`,
  );
  if (growth) {
    const utility = GROWTH_UTILITY_LABEL[growth.utility];
    const bill = utility ? `the ${utility} bill` : 'which utility bills you';
    const checked = shortDate(growth.sourceCheckedDate || GROWTH_DEFAULT_CHECKED);
    // A county or region page (2026-09-23, Tier 2) writes its own
    // description: "the permit route" is one office per city, not per region.
    const own = growth.seo;
    return {
      title: own?.title ?? title,
      description: own?.description ?? fit(
        DESCRIPTION_MAX,
        `Comparing solar companies in ${city}? Check ${bill}, ${possessive(city)} permit route and 6 quote items side by side. Sources checked ${checked}.`,
        `Comparing solar companies in ${city}? Check ${bill}, the permit route and 6 quote items side by side. Sources checked ${checked}.`,
        `Comparing solar companies in ${city}? Check ${bill}, the permit route and 6 quote items side by side.`,
      ),
      h1: own?.h1 ?? `Solar Companies in ${city}, CA: How to Compare Solar Panel Quotes`,
    };
  }
  const utility = legacyUtilityLabel(legacy!);
  return {
    title,
    description: fit(
      DESCRIPTION_MAX,
      `9 solar companies compared for ${city}, CA homeowners: who each one fits, the honest trade-off, and the ${utility} and contract checks before you sign.`,
      `9 solar companies compared for ${city}, CA: who each one fits, the honest trade-off, and the contract checks before you sign.`,
    ),
    h1: `Solar Companies in ${city}, CA: 9 Solar Panel Installers Compared`,
  };
}

/**
 * /solar-savings/<city> pages re-scoped to the city bills-and-rates intent
 * (Decision 18: the URL stays, the title and H1 change). Search data puts
 * "electricity provider <city>", "average electric bill <city>" and "why is
 * electricity so expensive in <city>" on a different results page from the
 * installer and cost queries (bill/rate vs installer SERPs share 0 of 127
 * same-place keyword pairs, Block 6 §4), so these pages answer the bill.
 * Hand-written per city because each title names that city's actual provider.
 */
export const SAVINGS_BILLS_SEO: Readonly<Record<string, CitySeo & { modified: string }>> = {
  'san-diego': {
    title: 'San Diego Electric Bills & SDG&E Rates (2026)',
    description:
      'San Diego bills: SDG&E delivery, San Diego Community Power generation, the $24 Base Services Charge, CARE/FERA and why SDG&E rates run highest.',
    h1: 'San Diego Electric Bills and SDG&E Rates: What You Pay and Why',
    modified: '2026-09-23',
  },
  sacramento: {
    title: 'Sacramento Electricity Provider: SMUD Rates & Bills',
    description:
      'Sacramento electricity comes from SMUD, not PG&E: how SMUD bills a home, its Time-of-Day prices, the $27 fixed charge and its solar export credit.',
    h1: "Sacramento's Electricity Provider Is SMUD: Rates, Bills and Solar",
    modified: '2026-09-23',
  },
  // 2026-09-23 (Tier 2, citycos)
  riverside: {
    title: 'Riverside Electricity Provider: RPU Rates & Bills (2026)',
    description:
      "Riverside's electricity comes from Riverside Public Utilities, not SCE: RPU's 2026 residential charges, tiered energy prices and what it pays for solar.",
    h1: "Riverside's Electricity Provider Is Riverside Public Utilities: Rates and Bills",
    modified: '2026-09-23',
  },
  sunnyvale: {
    title: 'Sunnyvale Electricity Provider: SVCE & PG&E Bills',
    description:
      'Sunnyvale electricity: Silicon Valley Clean Energy generation and PG&E delivery on one bill, a typical $196 monthly bill, the $24 charge and solar rules.',
    h1: "Sunnyvale's Electricity Providers: Silicon Valley Clean Energy and PG&E",
    modified: '2026-09-23',
  },
  'san-mateo': {
    title: 'San Mateo Electric Bills, Rates & Solar Savings (2026)',
    description:
      'San Mateo bills: PG&E delivery plus WestLight Energy (formerly Peninsula Clean Energy) generation, the $24 Base Services Charge, CARE/FERA and solar.',
    h1: 'San Mateo Electric Bills and Rates: PG&E, WestLight Energy and Solar',
    modified: '2026-09-23',
  },
  // 2026-09-23 (Tier 3, citysav)
  lancaster: {
    title: 'Lancaster Electricity Rates: SCE & Lancaster Energy',
    description:
      'Lancaster electricity: SCE delivery plus Lancaster Energy generation, what a typical month costs on each, the $24 charge and how solar is credited.',
    h1: 'Electricity Rates in Lancaster: Lancaster Energy, SCE and What a Bill Costs',
    modified: '2026-09-23',
  },
  irvine: {
    title: 'Irvine Electricity Provider: OCPA & SCE Rates (2026)',
    description:
      'Irvine electricity: Orange County Power Authority generation and SCE delivery on one bill, what a typical month costs on each and how solar is credited.',
    h1: "Irvine's Electricity Providers: Orange County Power Authority and SCE",
    modified: '2026-09-23',
  },
  'newport-beach': {
    title: 'Newport Beach Electricity Provider: SCE Rates (2026)',
    description:
      "Newport Beach electricity comes from SCE alone, with no community choice program: SCE's 2026 plan prices, the $24 charge, typical coastal bills and solar.",
    h1: "Newport Beach's Electricity Provider Is SCE: Rates, Bills and Solar",
    modified: '2026-09-23',
  },
  oakland: {
    title: 'Oakland Electricity Provider: Ava & PG&E Rates (2026)',
    description:
      'Oakland electricity: Ava Community Energy generation and PG&E delivery on one bill, typical monthly costs on each plan, the $24 charge and solar true-ups.',
    h1: "Oakland's Electricity Providers: Ava Community Energy and PG&E",
    modified: '2026-09-23',
  },
  'palo-alto': {
    title: 'Palo Alto Electricity Provider: CPAU Rates (2026)',
    description:
      "Palo Alto electricity comes from City of Palo Alto Utilities, not PG&E: CPAU's 2026 tiered rates, customer charge, bill assistance and solar export rate.",
    h1: "Palo Alto's Electricity Provider Is City of Palo Alto Utilities: Rates and Bills",
    modified: '2026-09-23',
  },
};

/** /solar-savings/<city> */
export function savingsPageSeo(city: CityData): CitySeo {
  const bills = SAVINGS_BILLS_SEO[city.slug];
  if (bills) return { title: bills.title, description: bills.description, h1: bills.h1 };
  const name = city.name;
  const utility = legacyUtilityLabel(city);
  const confirm = city.utilityConfirmationRequired === true;
  const title = confirm
    ? fit(
        TITLE_MAX,
        `${name} Solar Savings: ${utility} Rates & Quotes (${YEAR})`,
        `${name} Solar Savings: ${utility} (${YEAR})`,
        `${name} Solar Savings: Rates & Quotes (${YEAR})`,
      )
    : fit(
        TITLE_MAX,
        `${name} Solar Savings: ${utility} Rates & Costs (${YEAR})`,
        `${name} Solar Savings: ${utility} Rates (${YEAR})`,
        `${name} Solar Savings: Rates & Costs (${YEAR})`,
      );
  const split = / or /.test(utility);
  const description = confirm
    ? fit(
        DESCRIPTION_MAX,
        split
          ? `${name} is split between ${utility.replace(' or ', ' and ')}. Confirm which bills your address, then compare solar quotes on the same usage, roof and contract terms.`
          : `${name} is ${utility} territory. Confirm the utility on your bill, then compare solar quotes on the same usage, roof, equipment and contract terms.`,
        `Confirm which utility bills your ${name} address, then compare solar quotes on the same usage, roof, equipment and contract terms.`,
      )
    : fit(
        DESCRIPTION_MAX,
        `${name} solar savings on ${utility}: rate-plan and CARE/FERA checks, what a system costs, HOA rules under Civil Code 714 and when solar doesn't pay.`,
        `${name} solar savings on ${utility}: rate-plan checks, system costs, HOA rules under Civil Code 714 and when solar doesn't pay.`,
        `${name} solar savings: rate-plan checks, system costs, HOA rules and when solar doesn't pay.`,
      );
  return {
    title,
    description,
    h1: `Solar Savings in ${name}, CA: Rates, Costs and Your Options in ${YEAR}`,
  };
}

// -----------------------------------------------------------------------------
// The utility a city page's HeroQuickCheck may pre-select
// -----------------------------------------------------------------------------

/**
 * The one utility the page's own data names for this city, as a code or a
 * label (HeroQuickCheck maps either onto its options and leaves anything it
 * does not list unselected), or '' when no single utility should be
 * pre-selected:
 *   - the city is split between utilities (a sourced utilitySplit on the cost
 *     row, Corona's address-specific DWP/SCE service, growth-city data marked
 *     'other', or a cities-data page that asks the reader to confirm the
 *     utility from the bill);
 *   - the page is not live.
 * A split recorded in any one dataset applies to every page for that city,
 * because it is a fact about the city, not about a template.
 */
export function cityQuickCheckUtility(type: CityPageType, slug: string): string {
  const cost = getCityCostRow(slug);
  if (slug === 'corona' || cost?.utilitySplit) return '';
  if (type === 'cost') return cost ? getUtilityRate(cost.utilityKey).name : '';
  const legacy = getCityBySlug(slug);
  if (legacy?.utilityConfirmationRequired) return '';
  if (type === 'companies' && growthCities[slug]) {
    const code = growthCities[slug].utility;
    return code && code !== 'other' ? code : '';
  }
  return legacy ? legacy.utilityCode : '';
}

/** Title/description/H1 for any live city page. */
export function cityPageSeo(type: CityPageType, slug: string): CitySeo | null {
  if (type === 'cost') {
    const row = getCityCostRow(slug);
    return row ? costPageSeo(row) : null;
  }
  if (type === 'companies') return companiesPageSeo(slug);
  const city = getCityBySlug(slug);
  return city ? savingsPageSeo(city) : null;
}

// -----------------------------------------------------------------------------
// Metadata: title, description, canonical, Open Graph and Twitter in one object
// -----------------------------------------------------------------------------

/** The CRR social card the root layout uses; repeated because a page-level
 *  openGraph object replaces the layout's rather than merging with it. */
const SOCIAL_CARD = {
  url: '/crr-social-card',
  width: 1200,
  height: 630,
  alt: 'California Rate Relief: understand your bill and explore your solar options',
};

export function cityPageMetadata(type: CityPageType, slug: string) {
  const seo = cityPageSeo(type, slug);
  if (!seo) return null;
  const path = cityPagePath(type, slug);
  const dates = cityPageDates(type, slug);
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: path },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'article' as const,
      url: `https://ratereliefca.com${path}`,
      siteName: 'California Rate Relief',
      locale: 'en_US',
      ...(dates.published ? { publishedTime: `${dates.published}T00:00:00Z` } : {}),
      modifiedTime: `${dates.modified}T00:00:00Z`,
      images: [SOCIAL_CARD],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: seo.title,
      description: seo.description,
      images: [SOCIAL_CARD.url],
    },
  };
}
