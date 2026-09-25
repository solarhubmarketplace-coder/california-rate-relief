// =============================================================================
// DG Stats reader for the /solar-companies city pages (2026-09-24, Block 3.3).
//
// Data: companies-2026-05-31.json, built by aggregate_companies.py from the
// CPUC's California Distributed Generation Statistics "Interconnected Project
// Sites" data set (data through May 31, 2026; downloaded 2026-09-24). It covers
// PG&E, SCE and SDG&E customers only. Counts are residential solar project
// sites whose interconnection the utility approved (permission to operate).
//
// This file decides, per page, which area the installer table covers:
//   city    the city itself (its main utility is PG&E, SCE or SDG&E, n >= 20)
//   pocket  the IOU-served addresses listed under a city whose main utility is
//           municipal (LADWP, SMUD, Anaheim...), shown only when n >= 20
//   county  the county, when the city has fewer than 20 systems in 2025 or no
//           match in the data set
//   region  a county or region page's own rollup
// Nothing here ranks or endorses a company: the rows are counts from public
// utility records, sorted by count.
// =============================================================================

import raw from './companies-2026-05-31.json';
import { MUNICIPAL_MAIN_UTILITY } from './municipal';

export interface DgInstallerRow {
  /** Installer name as reported on the interconnection application. */
  name: string;
  /** CSLB license number reported on the application ('' when none). */
  cslb: string;
  /** Residential systems granted permission to operate in 2025. */
  n2025: number;
  /** Residential systems granted permission to operate Jan 2024 - May 2026. */
  n2024to2026: number;
}

export interface DgScope {
  utility: Record<string, number>;
  utility2025: Record<string, number>;
  systemsByYear: Record<string, number>;
  systems2025: number;
  thirdPartyOwnedShare2025: number | null;
  storageAttachShare2025: number | null;
  medianSizeKwDc2025: number | null;
  installerCount2025: number;
  installers: DgInstallerRow[];
}

interface DgRegion extends DgScope {
  label: string;
  cities: string[];
  counties: string[];
}

interface DgCity extends DgScope {
  dgName: string;
  county: string;
}

const DATA = raw as unknown as {
  source: Record<string, unknown>;
  regions: Record<string, DgRegion>;
  cities: Record<string, DgCity>;
  counties: Record<string, DgScope>;
};

export const DGSTATS_CITATION =
  'California Distributed Generation Statistics (CPUC), Interconnected Project Sites data set, data through May 31, 2026';
export const DGSTATS_URL = 'https://www.californiadgstats.ca.gov/downloads/';
export const DGSTATS_CHECKED = '2026-09-24';
export const DGSTATS_CHECKED_DISPLAY = 'Sept. 24, 2026';
/** CSLB "Check a License" (license number or business name search). */
export const CSLB_CHECK_URL = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
export const CSLB_CHECKED_DISPLAY = 'Sept. 24, 2026';

/** Minimum 2025 systems for a city-level table; below it the county is used. */
export const MIN_CITY_SYSTEMS = 20;
/** Rows shown, and the minimum 2025 count for a row. */
export const MAX_ROWS = 8;
export const MIN_ROW_SYSTEMS = 3;

const IOU_NAME: Record<string, string> = { PGE: 'PG&E', SCE: 'SCE', SDGE: 'SDG&E' };

const MUNICIPAL = MUNICIPAL_MAIN_UTILITY;

/** County to use for a site slug the data set has no city row for. */
const UNMATCHED_COUNTY: Record<string, string> = {
  glendale: 'Los Angeles',
  burbank: 'Los Angeles',
  'elk-grove': 'Sacramento',
  'rancho-cordova': 'Sacramento',
  'santa-clara': 'Santa Clara',
};

export type DgTableKind = 'city' | 'pocket' | 'county' | 'region';

export interface CompaniesDg {
  kind: DgTableKind;
  /** The page's own place name (city or region). */
  place: string;
  /** Short label of the area the table and stats cover, for headings. */
  area: string;
  /** Which of PG&E, SCE, SDG&E connected the systems in the table's area. */
  ious: string[];
  /** The table's area. */
  scope: DgScope;
  /** Up to MAX_ROWS rows with at least MIN_ROW_SYSTEMS systems in 2025. */
  rows: DgInstallerRow[];
  /** The city's own row when the table falls back to the county. */
  cityScope?: DgScope;
  county?: string;
  /** Main utility, when it is publicly owned and not in the data set. */
  municipal?: { name: string; short: string; share?: string };
  /** Region pages: the DG Stats service cities or counties rolled up. */
  regionCities?: string[];
  regionCounties?: string[];
}

function iousOf(scope: DgScope): string[] {
  return Object.entries(scope.utility2025)
    .sort((a, b) => b[1] - a[1])
    .map(([code]) => IOU_NAME[code] ?? code);
}

function rowsOf(scope: DgScope): DgInstallerRow[] {
  return scope.installers.filter((row) => row.n2025 >= MIN_ROW_SYSTEMS).slice(0, MAX_ROWS);
}

function countyKey(county: string): string {
  return county.replace(/\s+County\b.*$/i, '').trim();
}

/**
 * The installer table and local numbers for a /solar-companies page, or null
 * when the data set has nothing usable for it.
 */
export function companiesDg(slug: string, place: string, siteCounty: string): CompaniesDg | null {
  const region = DATA.regions[slug];
  if (region) {
    return {
      kind: 'region',
      place,
      area: place,
      ious: iousOf(region),
      scope: region,
      rows: rowsOf(region),
      regionCities: region.cities,
      regionCounties: region.counties,
    };
  }
  const municipal = MUNICIPAL[slug];
  const city = DATA.cities[slug];
  if (city && city.systems2025 >= MIN_CITY_SYSTEMS) {
    return {
      kind: municipal ? 'pocket' : 'city',
      place,
      area: municipal ? `${iousOf(city).join(' and ')}-served ${place} addresses` : place,
      ious: iousOf(city),
      scope: city,
      rows: rowsOf(city),
      county: city.county,
      municipal,
    };
  }
  const county = city?.county ?? UNMATCHED_COUNTY[slug] ?? countyKey(siteCounty);
  const countyScope = DATA.counties[county];
  if (!countyScope) return null;
  return {
    kind: 'county',
    place,
    area: `${county} County`,
    ious: iousOf(countyScope),
    scope: countyScope,
    rows: rowsOf(countyScope),
    cityScope: city,
    county,
    municipal,
  };
}

/** A county's rollup, by name without "County" ("Riverside"). */
export function dgCountyScope(county: string): DgScope | null {
  return DATA.counties[countyKey(county)] ?? null;
}

// -----------------------------------------------------------------------------
// Formatting helpers shared by the page and its FAQ
// -----------------------------------------------------------------------------

export function fmtCount(n: number): string {
  return n.toLocaleString('en-US');
}

export function fmtShare(share: number | null): string | null {
  return share === null ? null : `${Math.round(share * 100)}%`;
}

/** "PG&E", "SCE and SDG&E", "PG&E, SCE and SDG&E". */
export function joinNames(names: string[]): string {
  if (names.length <= 1) return names[0] ?? '';
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
}

/** 2021-2025 counts, oldest first. */
export function trendYears(scope: DgScope): { year: string; n: number }[] {
  return ['2021', '2022', '2023', '2024', '2025'].map((year) => ({ year, n: scope.systemsByYear[year] ?? 0 }));
}

/** Busiest year of 2021-2025 and the 2025 change against it, e.g. -55. */
export function trendSummary(scope: DgScope): { peakYear: string; peak: number; changePct: number | null } {
  const years = trendYears(scope);
  const top = years.reduce((a, b) => (b.n > a.n ? b : a), years[0]);
  const changePct = top.n > 0 ? Math.round(((scope.systems2025 - top.n) / top.n) * 100) : null;
  return { peakYear: top.year, peak: top.n, changePct };
}
