// =============================================================================
// dgstats/index.ts — typed, server-side access to the CPUC DG Stats city cut
//
// The data file next to this one is a slim cut of the California Distributed
// Generation Statistics "Interconnected Project Sites" data set (data through
// May 31, 2026). See README.md here for how it was built and what it covers.
//
// SERVER ONLY. The JSON is about 350 KB. Import this module from server
// components, route files and data modules only, never from a 'use client'
// file: a client import would ship the whole file to the browser.
// scripts/city-gate.mjs fails if any 'use client' module imports it.
// (The `server-only` package is not used because Node's test runner and the
// gate scripts import this module directly.)
//
// SCOPE LIMITS, stated wherever a figure is shown
//   - PG&E, SCE and SDG&E territories only. Municipal utilities (LADWP, SMUD,
//     Anaheim, Riverside, Pasadena, Glendale, Roseville, Silicon Valley Power,
//     Redding and others) are not in the data set, so a city one of them
//     serves shows only its IOU-served pockets, or nothing.
//   - "City" is the service city written on the interconnection application,
//     which can include unincorporated areas that use the city's name.
//   - Cost per watt: host-owned (not lease/PPA), PV-only (no battery), 1-25
//     kW DC, approved Jan 1, 2025 to May 31, 2026; reported total system cost
//     divided by DC size. What owners reported, not a quote. The CPUC's Solar
//     Consumer Protection Guide notes these costs are not verified by the
//     government.
//   - Counts are residential solar systems granted permission to operate in
//     the year, still interconnected (decommissioned sites excluded).
// =============================================================================

import raw from './dgstats-2026-05-31.json' with { type: 'json' };

export type DgUtilityCode = 'PGE' | 'SCE' | 'SDGE';

export interface DgCostPerWatt {
  /** Systems in the cost sample. */
  n: number;
  p25: number | null;
  median: number | null;
  p75: number | null;
}

export interface DgInstaller {
  name: string;
  systems: number;
  cslb: string;
}

export interface DgArea {
  /** Systems (all years) by the IOU that interconnected them. */
  utilityShares: Partial<Record<DgUtilityCode, number>>;
  /** Most common county among the area's systems. */
  county: string;
  /** Residential systems granted permission to operate, by year (2026 is Jan-May). */
  systemsByYear: Record<string, number>;
  systems2025: number;
  /** Share of 2025 systems that are third-party owned (lease or PPA). */
  thirdPartyOwnedShare2025: number | null;
  /** Share of 2025 systems with battery storage. */
  storageAttachShare2025: number | null;
  /** Median DC size of 2025 systems, kW. */
  medianSizeKwDc2025: number | null;
  costPerWatt: DgCostPerWatt;
  installers2025: DgInstaller[];
  installerCount2025: number;
  /** The service-city name as the data set writes it (cities only). */
  dgName?: string;
}

interface RawInstaller {
  name: string;
  systems_2025?: number;
  cslb: string;
}

interface RawArea {
  utilityShares: Record<string, number>;
  county: string;
  systemsByYear: Record<string, number>;
  systems2025: number;
  thirdPartyOwnedShare2025: number | null;
  storageAttachShare2025: number | null;
  medianSizeKwDc2025: number | null;
  costPerWatt: DgCostPerWatt;
  installers2025: RawInstaller[];
  installerCount2025: number;
  dgName?: string;
}

interface RawFile {
  source: Record<string, unknown> & { unmatchedSiteSlugs: string[] };
  state: RawArea;
  utilities: Record<string, RawArea>;
  counties: Record<string, RawArea>;
  cities: Record<string, RawArea>;
}

const data = raw as unknown as RawFile;

/** How the data set is cited on every page that shows a figure from it. */
export const DG_SOURCE = {
  label:
    'California Distributed Generation Statistics (CPUC), Interconnected Project Sites data set, data through May 31, 2026',
  shortLabel: 'CPUC DG Stats',
  url: 'https://www.californiadgstats.ca.gov/downloads/',
  /** The downloads page was checked and the file downloaded on this date. */
  verifiedAt: '2026-09-24',
  dataThrough: '2026-05-31',
  costWindowLabel: 'January 2025 to May 2026',
  costBasis:
    'systems owned by the homeowner (not leased or on a PPA), solar only with no battery, 1 to 25 kW, reported total system cost divided by system size',
} as const;

/** CPUC, California Solar Consumer Protection Guide: points shoppers to DG Stats
 *  for recent installation costs and says they are not verified by the government. */
export const CPUC_GUIDE_DGSTATS_NOTE = {
  label: 'CPUC, California Solar Consumer Protection Guide ("Find a local contractor through DGStats")',
  url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
  verifiedAt: '2026-09-24',
} as const;

/** Smallest cost sample shown as a figure for an area. */
export const DG_MIN_COST_N = 30;
/** Smallest 2025 system count for which shares and median size are shown for an area. */
export const DG_MIN_SYSTEMS = 30;
/** The complete years a page shows in its installs-per-year line. */
export const DG_YEARS = ['2021', '2022', '2023', '2024', '2025'] as const;

export const DG_UTILITY_NAME: Record<DgUtilityCode, string> = {
  PGE: 'PG&E',
  SCE: 'SCE',
  SDGE: 'SDG&E',
};

function toArea(area: RawArea | undefined): DgArea | null {
  if (!area) return null;
  return {
    utilityShares: area.utilityShares as DgArea['utilityShares'],
    county: area.county,
    systemsByYear: area.systemsByYear,
    systems2025: area.systems2025,
    thirdPartyOwnedShare2025: area.thirdPartyOwnedShare2025,
    storageAttachShare2025: area.storageAttachShare2025,
    medianSizeKwDc2025: area.medianSizeKwDc2025,
    costPerWatt: area.costPerWatt,
    installers2025: area.installers2025.map((i) => ({ name: i.name, systems: i.systems_2025 ?? 0, cslb: i.cslb })),
    installerCount2025: area.installerCount2025,
    ...(area.dgName ? { dgName: area.dgName } : {}),
  };
}

const cache = new Map<string, DgArea | null>();
function memo(key: string, build: () => DgArea | null): DgArea | null {
  if (!cache.has(key)) cache.set(key, build());
  return cache.get(key) ?? null;
}

/** A site city slug's record, or null (municipal-utility cities and region slugs have none). */
export function cityDg(slug: string): DgArea | null {
  return memo(`city:${slug}`, () => toArea(data.cities[slug]));
}

/** 'Riverside County', 'Riverside' and 'Riverside County — unincorporated' all read the Riverside record. */
export function countyDg(name: string): DgArea | null {
  const key = name.split(' — ')[0].replace(/\s+County$/i, '').trim();
  return memo(`county:${key}`, () => toArea(data.counties[key]));
}

/** 'PGE' | 'SCE' | 'SDGE', or the rate tracker's 'pge' | 'sce' | 'sdge'. */
export function utilityDg(code: string): DgArea | null {
  const key = code.toUpperCase();
  return memo(`utility:${key}`, () => toArea(data.utilities[key]));
}

/** PG&E, SCE and SDG&E territories combined. */
export function stateDg(): DgArea {
  return memo('state', () => toArea(data.state)) as DgArea;
}

export function hasCostFigure(area: DgArea | null): area is DgArea {
  return Boolean(area && area.costPerWatt.n >= DG_MIN_COST_N && area.costPerWatt.median !== null);
}

export function hasShareFigures(area: DgArea | null): area is DgArea {
  return Boolean(
    area &&
      area.systems2025 >= DG_MIN_SYSTEMS &&
      area.thirdPartyOwnedShare2025 !== null &&
      area.storageAttachShare2025 !== null &&
      area.medianSizeKwDc2025 !== null,
  );
}

// -----------------------------------------------------------------------------
// Picking the level a page reports
// -----------------------------------------------------------------------------

export type DgLevel = 'city' | 'county' | 'utility' | 'state';

export interface DgPickInput {
  /** Site city slug. */
  slug: string;
  /** Display name, e.g. 'Temecula'. */
  city: string;
  /** County as the page writes it, e.g. 'Riverside County'. */
  county: string;
  /**
   * The IOU that serves most of the city, or null when the city's main
   * utility is a municipal one the data set does not cover. A null skips the
   * city and utility levels: the city record then holds only IOU-served
   * pockets and would misstate the city.
   */
  iou: DgUtilityCode | null;
}

export interface DgLevelPick {
  level: DgLevel;
  area: DgArea;
  /** 'Temecula', 'Riverside County', 'PG&E territory', 'California'. */
  label: string;
  /** Longer label naming the scope, for a caption or a source line. */
  scopeLabel: string;
}

function levelFor(level: DgLevel, input: DgPickInput): DgLevelPick | null {
  const countyName = input.county.split(' — ')[0];
  switch (level) {
    case 'city': {
      const area = input.iou ? cityDg(input.slug) : null;
      return area
        ? { level, area, label: input.city, scopeLabel: `addresses the data set lists as ${input.city}` }
        : null;
    }
    case 'county': {
      const area = countyDg(countyName);
      return area
        ? { level, area, label: countyName, scopeLabel: `${countyName} homes served by PG&E, SCE or SDG&E` }
        : null;
    }
    case 'utility': {
      const area = input.iou ? utilityDg(input.iou) : null;
      return area && input.iou
        ? {
            level,
            area,
            label: `${DG_UTILITY_NAME[input.iou]} territory`,
            scopeLabel: `all of ${DG_UTILITY_NAME[input.iou]}'s residential territory`,
          }
        : null;
    }
    case 'state':
      return {
        level,
        area: stateDg(),
        label: 'California',
        scopeLabel: 'California homes served by PG&E, SCE or SDG&E',
      };
  }
}

const ORDER_IOU: DgLevel[] = ['city', 'county', 'utility', 'state'];
const ORDER_MUNI: DgLevel[] = ['county', 'state'];

/** The narrowest level with at least DG_MIN_COST_N reported costs. */
export function pickCostLevel(input: DgPickInput): DgLevelPick {
  for (const level of input.iou ? ORDER_IOU : ORDER_MUNI) {
    const pick = levelFor(level, input);
    if (pick && hasCostFigure(pick.area)) return pick;
  }
  return levelFor('state', input) as DgLevelPick;
}

/** The narrowest level with at least DG_MIN_SYSTEMS 2025 systems, for shares and size. */
export function pickShareLevel(input: DgPickInput): DgLevelPick {
  for (const level of input.iou ? ORDER_IOU : ORDER_MUNI) {
    const pick = levelFor(level, input);
    if (pick && hasShareFigures(pick.area)) return pick;
  }
  return levelFor('state', input) as DgLevelPick;
}

/** Round a dollar figure to the nearest $100. */
export function roundTo100(value: number): number {
  return Math.round(value / 100) * 100;
}

/** kW × $/W, rounded to the nearest $100. */
export function systemPrice(kw: number, perWatt: number): number {
  return roundTo100(kw * 1000 * perWatt);
}

/** '$4.23' */
export function formatPerWatt(value: number): string {
  return `$${value.toFixed(2)}`;
}

/** '$30,500' */
export function formatDollars(value: number): string {
  return `$${Math.round(value).toLocaleString('en-US')}`;
}

/** 0.453 -> '45%' */
export function formatShare(value: number): string {
  return `${Math.round(value * 100)}%`;
}
