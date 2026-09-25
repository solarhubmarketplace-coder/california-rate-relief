// =============================================================================
// city-cost-content.ts — the words and figures on /solar-cost/<city>
//
// WHY THE COPY LIVES HERE AND NOT IN THE TEMPLATE
// The template (components/growth/CityCostPage.tsx) renders exactly what this
// module returns, block by block. The city-page gate (src/data/city-gate.ts)
// reads the same blocks, so the overlap it measures between two cities is the
// overlap between the two pages a reader sees, not an approximation of them.
// Imports are relative with .ts extensions so Node's test runner and the gate
// script can load this file directly. Server-only: it pulls in the DG Stats
// JSON through src/data/dgstats.
//
// WHAT A PAGE SAYS, IN ORDER (Block 3 of the 2026-09-24 plan)
//   1. The answer: the reported median cost per watt and the middle range for
//      the narrowest area with at least 30 reports (city, county, utility
//      territory, then statewide), the level and n named; the typical system
//      price at the local median size; that it is what owners reported, not a
//      quote; the federal credit status.
//   2. The city's permit fee against the Gov. Code §66015 limit, and how the
//      city takes a permit.
//   3. Local DG Stats facts: installs per year, lease/PPA share, battery share,
//      median size, each labeled with its source and area.
//   4. The utility (and CCA, split service, local rates where the row has them).
//   5. One short pointer to the shared explainer for §25D, §48E, §73, §7169.
// The long shared statute text is NOT repeated here: it lives once, on
// /solar-cost/california-tax-and-permit-rules.
// =============================================================================

import {
  CEC_SERVICE_TERRITORY_SOURCE_0923,
  type CityCostRow,
  type CityCostRowSource,
} from '../data/city-cost-data.ts';
import { buildCostIndexRow, COST_INDEX_PATH, STATE_RESIDENTIAL_PV_FEE_LIMIT } from '../data/solar-cost-index.ts';
import {
  RATE_TRACKER_PATH,
  formatAverageRateCents,
  getUtilityRate,
  type UtilityRateKey,
} from '../data/utility-rate-tracker.ts';
import { getLocalProjectGuidance } from '../data/local-project-guidance.ts';
import {
  CPUC_GUIDE_DGSTATS_NOTE,
  DG_MIN_COST_N,
  DG_SOURCE,
  DG_UTILITY_NAME,
  DG_YEARS,
  cityDg,
  countyDg,
  formatDollars,
  formatPerWatt,
  formatShare,
  hasShareFigures,
  pickCostLevel,
  pickShareLevel,
  stateDg,
  systemPrice,
  type DgArea,
  type DgLevelPick,
  type DgUtilityCode,
} from '../data/dgstats/index.ts';

// -----------------------------------------------------------------------------
// Shared constants
// -----------------------------------------------------------------------------

/** The one page that holds the shared tax, contract and permit rules. */
export const COST_RULES_PATH = '/solar-cost/california-tax-and-permit-rules';
export const COST_RULES_TITLE = 'California Solar Tax and Permit Rules for 2026';

/** The exact compliance sentence (scripts/qc-gate-tsx.mjs COMPLIANCE_SENTENCE). Never paraphrase. */
export const COMPLIANCE_SENTENCE =
  'California Rate Relief is a referral service. We are not a licensed contractor.';

export const USC_25D_SOURCE: CityCostRowSource = {
  label: '26 U.S.C. §25D(h) and (e)(8)(A), residential clean energy credit',
  url: 'https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A25D+edition%3Aprelim%29',
  verifiedAt: '2026-09-24',
};

export const GOV_66015_SOURCE: CityCostRowSource = {
  label: 'California Government Code §66015(a), residential solar permit fees',
  url: STATE_RESIDENTIAL_PV_FEE_LIMIT.source.url,
  verifiedAt: '2026-09-24',
};

export const DG_ROW_SOURCE: CityCostRowSource = {
  label: DG_SOURCE.label,
  url: DG_SOURCE.url,
  verifiedAt: DG_SOURCE.verifiedAt,
};

/**
 * The IOU whose interconnection data describes a city. A city whose main
 * utility is municipal gets null: the CPUC data set does not cover it.
 * Corona's own utility serves a small part of the city inside SCE's territory
 * (City of Corona and CEC service-territory map, both cited on the page), so
 * its DG Stats record is SCE's and describes most of the city.
 */
const IOU_FOR_KEY: Partial<Record<UtilityRateKey, DgUtilityCode>> = {
  pge: 'PGE',
  sce: 'SCE',
  sdge: 'SDGE',
  corona: 'SCE',
};

export function iouForRow(row: CityCostRow): DgUtilityCode | null {
  return IOU_FOR_KEY[row.utilityKey] ?? null;
}

// -----------------------------------------------------------------------------
// Content model
// -----------------------------------------------------------------------------

export type Inline =
  | string
  | { text: string; href: string; external?: boolean }
  | { strong: string };

export type Block =
  | { kind: 'p'; parts: Inline[]; small?: boolean }
  | { kind: 'ul'; items: Inline[][] }
  | { kind: 'stats'; items: { label: string; value: string; note: string }[] }
  | { kind: 'table'; caption: string; head: string[]; rows: string[][] };

export interface ContentSection {
  id: string;
  heading: string;
  blocks: Block[];
}

export interface LocalDataPoint {
  id: string;
  label: string;
}

export interface CostBenchmark {
  cost: DgLevelPick;
  size: DgLevelPick;
  perWatt: { n: number; median: number; p25: number; p75: number };
  kw: number;
  price: { median: number; low: number; high: number };
  /** True when the city's main utility is outside the CPUC data set. */
  outsideData: boolean;
}

export interface CostPageContent {
  slug: string;
  city: string;
  benchmark: CostBenchmark;
  /** The first screen: rendered right under the H1 and byline. */
  answer: Block[];
  /** Body sections in order. LocalProjectGuidance renders after 'utility'. */
  sections: ContentSection[];
  faqs: { question: string; answer: string }[];
  sources: CityCostRowSource[];
  indexRowHref: string;
  localDataPoints: LocalDataPoint[];
}

// -----------------------------------------------------------------------------
// Formatting
// -----------------------------------------------------------------------------

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function formatVerified(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const month = MONTHS[Number(match[2]) - 1];
  return month ? `${month} ${Number(match[3])}, ${match[1]}` : iso;
}

const count = (n: number) => n.toLocaleString('en-US');
const kwText = (kw: number) => `${kw} kW`;
/** 'A 7.2 kW system', 'An 8.17 kW system', 'An 11 kW system'. */
const aKw = (kw: number, capital = false) => {
  const article = /^(8|11|18)(\.|$)/.test(String(kw)) ? 'an' : 'a';
  return `${capital ? article[0].toUpperCase() + article.slice(1) : article} ${kwText(kw)}`;
};
/** "Salinas'" rather than "Salinas's", as the site's copy writes it. */
const possessive = (name: string) => (name.endsWith('s') ? `${name}'` : `${name}'s`);

/** Plain text of one block, as a reader sees it. */
export function blockText(block: Block): string {
  const inline = (parts: Inline[]) =>
    parts.map((p) => (typeof p === 'string' ? p : 'strong' in p ? p.strong : p.text)).join('');
  switch (block.kind) {
    case 'p':
      return inline(block.parts);
    case 'ul':
      return block.items.map(inline).join('\n');
    case 'stats':
      return block.items.map((i) => `${i.label} ${i.value} ${i.note}`).join('\n');
    case 'table':
      return [block.caption, block.head.join(' '), ...block.rows.map((r) => r.join(' '))].join('\n');
  }
}

// -----------------------------------------------------------------------------
// The benchmark
// -----------------------------------------------------------------------------

export function costBenchmark(row: CityCostRow): CostBenchmark {
  const iou = iouForRow(row);
  const input = { slug: row.slug, city: row.city, county: row.county, iou };
  const cost = pickCostLevel(input);
  const size = pickShareLevel(input);
  const cpw = cost.area.costPerWatt;
  const perWatt = { n: cpw.n, median: cpw.median as number, p25: cpw.p25 as number, p75: cpw.p75 as number };
  const kw = size.area.medianSizeKwDc2025 as number;
  return {
    cost,
    size,
    perWatt,
    kw,
    price: {
      median: systemPrice(kw, perWatt.median),
      low: systemPrice(kw, perWatt.p25),
      high: systemPrice(kw, perWatt.p75),
    },
    outsideData: iou === null,
  };
}

/** Where a size or count applies, as a phrase: 'in Temecula', 'in Ventura County'. */
function inPlace(pick: DgLevelPick): string {
  switch (pick.level) {
    case 'city':
      return `in ${pick.label}`;
    case 'county':
      return `in ${pick.label}`;
    case 'utility':
      return `across ${pick.label}`;
    case 'state':
      return 'across PG&E, SCE and SDG&E territory';
  }
}

/** Who reported: 'Temecula homeowners', 'Homeowners in Ventura County'. */
function reporters(pick: DgLevelPick): string {
  switch (pick.level) {
    case 'city':
      return `${pick.label} homeowners`;
    case 'county':
      return `Homeowners in ${pick.label}`;
    case 'utility':
      return `Homeowners across ${pick.label}`;
    case 'state':
      return 'Homeowners across PG&E, SCE and SDG&E territory';
  }
}

function levelNote(pick: DgLevelPick): string {
  switch (pick.level) {
    case 'city':
      return `${pick.label} addresses`;
    case 'county':
      return `${pick.label}, IOU-served homes`;
    case 'utility':
      return pick.label;
    case 'state':
      return 'California, PG&E, SCE and SDG&E homes';
  }
}

/** The short label the title and the hub tables use for the level. */
export function levelTag(pick: DgLevelPick): string {
  switch (pick.level) {
    case 'city':
      return 'city';
    case 'county':
      return 'county';
    case 'utility':
      return `${pick.label.replace(' territory', '')} area`;
    case 'state':
      return 'statewide';
  }
}

// -----------------------------------------------------------------------------
// Sections
// -----------------------------------------------------------------------------

function answerBlocks(row: CityCostRow, b: CostBenchmark): Block[] {
  const utility = getUtilityRate(row.utilityKey);
  const { cost, size, perWatt, kw, price } = b;
  const blocks: Block[] = [];

  // Why the level is not the city, when it is not.
  let lead = '';
  if (b.outsideData) {
    lead =
      `${utility.longName.replace(/^the /, 'The ')} (${utility.name}), ${possessive(row.city)} main utility, is not in the CPUC's interconnection data, which covers only PG&E, SCE and SDG&E. ` +
      (cost.level === 'county'
        ? `The figure above is the nearest one: ${cost.label} homes those three utilities serve. `
        : `The data holds no ${row.county.split(' — ')[0]} figure either, so the figure above is statewide. `);
  } else if (cost.level !== 'city') {
    const cityRecord = cityDg(row.slug);
    const n = cityRecord ? cityRecord.costPerWatt.n : 0;
    lead = `Only ${n} ${row.city} owners reported a cost in the CPUC data, fewer than the ${DG_MIN_COST_N} a figure needs here, so the one above is for ${cost.label}. `;
  }

  // Answer first: the figure, then (when it is not the city's own) why.
  blocks.push({
    kind: 'p',
    parts: [
      `${reporters(cost)} who bought their own solar systems reported a median of `,
      { strong: `${formatPerWatt(perWatt.median)} per watt` },
      ` between January 2025 and May 2026, across ${count(perWatt.n)} systems. The middle half paid ${formatPerWatt(perWatt.p25)} to ${formatPerWatt(perWatt.p75)} per watt.`,
    ],
  });
  if (lead) blocks.push({ kind: 'p', parts: [lead.trim()] });
  blocks.push({
    kind: 'p',
    parts: [
      `${aKw(kw, true)} system, the median size connected ${inPlace(size)} in 2025, comes to about `,
      { strong: formatDollars(price.median) },
      ` at that median, or ${formatDollars(price.low)} to ${formatDollars(price.high)} across the middle half.`,
    ],
  });
  blocks.push({
    kind: 'p',
    parts: [
      `Those are reported costs, not a quote, and no federal credit comes off a ${row.city} system finished in 2026: `,
      { text: '26 U.S.C. §25D', href: USC_25D_SOURCE.url, external: true },
      ' does not cover one whose installation is completed after December 31, 2025 (',
      { text: 'state and federal rules', href: COST_RULES_PATH },
      ').',
    ],
  });
  blocks.push({
    kind: 'stats',
    items: [
      {
        label: 'Median reported cost',
        value: `${formatPerWatt(perWatt.median)}/W`,
        note: `${levelNote(cost)}, ${count(perWatt.n)} systems`,
      },
      {
        label: 'Middle half',
        value: `${formatPerWatt(perWatt.p25)} to ${formatPerWatt(perWatt.p75)}/W`,
        note: '25th to 75th percentile',
      },
      {
        label: `Typical ${kwText(kw)} system`,
        value: formatDollars(price.median),
        note: `${kwText(kw)} × ${formatPerWatt(perWatt.median)}/W, before any incentive`,
      },
      {
        label: 'Same system, middle half',
        value: `${formatDollars(price.low)} to ${formatDollars(price.high)}`,
        note: `size: ${levelNote(size)}, 2025 median`,
      },
    ],
  });
  blocks.push({
    kind: 'p',
    small: true,
    parts: [
      'Source: ',
      { text: DG_SOURCE.label, href: DG_SOURCE.url, external: true },
      `, checked ${formatVerified(DG_SOURCE.verifiedAt)}. Homeowner-owned, solar-only systems of 1 to 25 kW; leases, PPAs and battery systems are left out (`,
      { text: 'method', href: `${COST_RULES_PATH}#method` },
      '). The ',
      { text: 'CPUC', href: CPUC_GUIDE_DGSTATS_NOTE.url, external: true },
      ' notes these costs are not verified by the government.',
    ],
  });
  blocks.push({ kind: 'p', small: true, parts: [COMPLIANCE_SENTENCE] });
  return blocks;
}

function permitSection(row: CityCostRow): ContentSection {
  const index = buildCostIndexRow(row);
  const fee = index.fee;
  const limit = STATE_RESIDENTIAL_PV_FEE_LIMIT.baseUsd;
  const blocks: Block[] = [];
  const law = { text: 'Government Code §66015', href: GOV_66015_SOURCE.url, external: true } as const;

  if (fee.status === 'published' && fee.amountUsd !== null) {
    const amount = fee.amountUsd;
    const basis = (fee.breakdown && fee.breakdown.includes(' + ') ? fee.breakdown : fee.basis ?? '').replace(/^./, (c) => c.toLowerCase());
    const diff = Math.round(Math.abs(amount - limit) * 100) / 100;
    const diffText = formatUsdPlain(diff);
    let compare: Inline[];
    if (amount < limit) {
      compare = [`That is ${diffText} under the $450 limit that `, law, ' sets for a home system up to 15 kW.'];
    } else if (amount === limit) {
      compare = ['That is exactly the $450 limit that ', law, ' sets for a home system up to 15 kW.'];
    } else {
      compare = [
        `That is ${diffText} over the $450 limit that `,
        law,
        ` sets for a home system up to 15 kW. A city may charge more only if it adopts a written finding, in a resolution or ordinance, with substantial evidence of its reasonable cost. Ask ${row.city} for that finding if a quote passes the fee through.`,
      ];
    }
    blocks.push({
      kind: 'p',
      parts: [
        `${possessive(row.city)} published permit fee for a home rooftop system is `,
        { strong: fee.amountDisplay as string },
        basis ? ` (${basis}).` : '.',
        fee.extra ? ` ${fee.extra}` : '',
      ],
    });
    blocks.push({ kind: 'p', parts: compare });
  } else {
    const lead: Record<string, string> = {
      'not-published': `${row.city} does not publish a dollar figure for a residential solar permit.`,
      dated: `The only ${row.city} fee schedule found for a solar permit is dated.`,
      conflicting: `${row.city} publishes two different figures for a solar permit.`,
      'not-retrievable': `${possessive(row.city)} fee schedule could not be read when it was checked on ${formatVerified(row.sourcesFetchedAt)}.`,
      unclassified: `See ${possessive(row.city)} own permit page for the fee.`,
    };
    blocks.push({
      kind: 'p',
      parts: [
        `${lead[fee.status] ?? lead.unclassified} Whatever it charges, `,
        law,
        ' limits a city to $450 for a home system up to 15 kW, plus $15 per kW above that, unless it adopts a written finding that its cost is higher.',
        fee.extra ? ` ${fee.extra}` : '',
      ],
    });
  }

  blocks.push({
    kind: 'ul',
    items: [
      [{ strong: `What ${row.city} publishes: ` }, row.permitFeeNote],
      [{ strong: 'How to file: ' }, row.permitOnline],
      ...(index.platform.value !== 'unclassified' && index.platform.value !== 'unconfirmed'
        ? [[{ strong: 'Automated permit platform: ' }, `${index.platform.label}${index.platform.note ? `. ${index.platform.note}` : ''}`] as Inline[]]
        : []),
    ],
  });
  blocks.push({
    kind: 'p',
    small: true,
    parts: [
      'Sources: ',
      { text: row.permitFeeSource, href: row.permitUrl, external: true },
      `, checked ${formatVerified(row.sourcesFetchedAt)}`,
      ...(row.permitSources ?? []).flatMap((s): Inline[] => ['; ', { text: s.label, href: s.url, external: true }, `, checked ${formatVerified(s.verifiedAt)}`]),
      '; ',
      { text: 'Gov. Code §66015', href: GOV_66015_SOURCE.url, external: true },
      `, checked ${formatVerified(GOV_66015_SOURCE.verifiedAt)}. `,
      { text: `${row.city} in the California Solar Cost Index`, href: indexRowHref(row.slug) },
      " sets this fee beside every other city's.",
    ],
  });

  return { id: 'permits', heading: `What a solar permit costs in ${row.city}`, blocks };
}

function formatUsdPlain(value: number): string {
  return Number.isInteger(value) ? `$${value.toLocaleString('en-US')}` : `$${value.toFixed(2)}`;
}

export function indexRowHref(slug: string): string {
  return `${COST_INDEX_PATH}#city-${slug}`;
}

function yearsLine(area: DgArea, place: string): string {
  const parts = DG_YEARS.map((y) => `${count(area.systemsByYear[y] ?? 0)} in ${y}`);
  const peakYear = DG_YEARS.reduce((best, y) => ((area.systemsByYear[y] ?? 0) > (area.systemsByYear[best] ?? 0) ? y : best), DG_YEARS[0]);
  const peak = area.systemsByYear[peakYear] ?? 0;
  const last = area.systemsByYear['2025'] ?? 0;
  const ytd = area.systemsByYear['2026'] ?? 0;
  const trend =
    peakYear === '2025'
      ? '2025 was the busiest of those five years'
      : `connections peaked in ${peakYear} and 2025 ran ${Math.round((1 - last / Math.max(peak, 1)) * 100)}% below that peak`;
  return `Home solar systems connected ${place}: ${parts.slice(0, -1).join(', ')} and ${parts[parts.length - 1]}. So ${trend}. Another ${count(ytd)} were connected from January to May 2026.`;
}

function compareWord(local: number, state: number): string {
  if (local >= state + 0.05) return 'more often than';
  if (local <= state - 0.05) return 'less often than';
  return 'about as often as';
}

function numbersSection(row: CityCostRow, b: CostBenchmark): ContentSection {
  const iou = iouForRow(row);
  const state = stateDg();
  const countyName = row.county.split(' — ')[0];
  const county = countyDg(countyName);
  const city = iou ? cityDg(row.slug) : null;
  const share = b.size; // narrowest level with >= 30 systems in 2025
  const a = share.area;
  const tpo = a.thirdPartyOwnedShare2025 as number;
  const storage = a.storageAttachShare2025 as number;
  const stateStorage = state.storageAttachShare2025 as number;
  const blocks: Block[] = [];
  const sourceLine: Block = {
    kind: 'p',
    small: true,
    parts: [
      'Source: ',
      { text: 'CPUC DG Stats', href: DG_SOURCE.url, external: true },
      ', data through May 31, 2026. Counts are home systems given permission to operate each year; a city means the service city on the application.',
    ],
  };

  // A city whose main utility is municipal: its own customers are not in the
  // data, so the section says so, names any IOU-served pocket, and gives the
  // wider area's mix in one line rather than a table that would read as local.
  if (b.outsideData) {
    const pocket = cityDg(row.slug);
    const pocketUtility = pocket
      ? (Object.entries(pocket.utilityShares).sort((x, y) => (y[1] ?? 0) - (x[1] ?? 0))[0]?.[0] as DgUtilityCode | undefined)
      : undefined;
    const utilityName = getUtilityRate(row.utilityKey).name;
    blocks.push({
      kind: 'p',
      parts: [
        `${utilityName} customers are not in the CPUC data, so nothing in it describes most ${row.city} homes.`,
        pocket && pocketUtility && pocket.systems2025 > 0
          ? ` It does list ${count(pocket.systems2025)} systems connected in 2025 at addresses it records as ${row.city} in ${DG_UTILITY_NAME[pocketUtility]} territory; those homes buy power from ${DG_UTILITY_NAME[pocketUtility]}, not ${utilityName}.`
          : '',
      ],
    });
    blocks.push({
      kind: 'p',
      parts: [
        `Across ${share.scopeLabel}, ${formatShare(tpo)} of 2025 systems were leased or on a PPA, ${formatShare(storage)} had a battery and the median size was ${kwText(a.medianSizeKwDc2025 as number)}.`,
      ],
    });
    blocks.push(sourceLine);
    return {
      id: 'local-data',
      heading: `Solar data for ${row.city}: ${utilityName} is not covered`,
      blocks,
    };
  }

  // Installs per year: the city itself when the data covers it, else the share level.
  const yearsArea = city && city.systems2025 > 0 ? city : a;
  const yearsPlace = city && city.systems2025 > 0 ? `at ${row.city} addresses` : inPlace(share);
  blocks.push({ kind: 'p', parts: [yearsLine(yearsArea, yearsPlace)] });

  const where = share.level === 'city' ? row.city : share.label;
  blocks.push({
    kind: 'p',
    parts: [
      `Of the ${count(a.systems2025)} systems connected in ${where} in 2025, ${formatShare(tpo)} were leased or on a PPA, so a solar company owns them, and ${100 - Math.round(tpo * 100)}% belonged to the homeowner. `,
      `${formatShare(storage)} had a battery, ${compareWord(storage, stateStorage)} the ${formatShare(stateStorage)} statewide. `,
      `The median ${where} system was ${kwText(a.medianSizeKwDc2025 as number)}, and ${count(a.installerCount2025)} companies connected at least one.`,
    ],
  });

  // Side-by-side table: the share level, the county (when different and present), statewide.
  const columns: { head: string; area: DgArea }[] = [{ head: where, area: a }];
  if (share.level === 'city' && county && hasShareFigures(county)) columns.push({ head: countyName, area: county });
  if (share.level !== 'state') columns.push({ head: 'Statewide', area: state });
  const cell = (fn: (x: DgArea) => string) => columns.map((c) => fn(c.area));
  blocks.push({
    kind: 'table',
    caption: `${where} beside ${columns.slice(1).map((c) => c.head).join(' and ')}, 2025`,
    head: ['', ...columns.map((c) => c.head)],
    rows: [
      ['Systems connected in 2025', ...cell((x) => count(x.systems2025))],
      ['Leased or on a PPA', ...cell((x) => formatShare(x.thirdPartyOwnedShare2025 as number))],
      ['With a battery', ...cell((x) => formatShare(x.storageAttachShare2025 as number))],
      ['Median system size', ...cell((x) => kwText(x.medianSizeKwDc2025 as number))],
      [
        'Median reported cost',
        ...cell((x) =>
          x.costPerWatt.median !== null && x.costPerWatt.n >= DG_MIN_COST_N
            ? `${formatPerWatt(x.costPerWatt.median)}/W (${count(x.costPerWatt.n)})`
            : `under ${DG_MIN_COST_N} reports`,
        ),
      ],
      ['Companies connecting systems', ...cell((x) => count(x.installerCount2025))],
    ],
  });
  blocks.push(sourceLine);
  return { id: 'local-data', heading: `Solar in ${row.city}: installs, leases and batteries`, blocks };
}

function utilitySection(row: CityCostRow): ContentSection {
  const utility = getUtilityRate(row.utilityKey);
  const rate = formatAverageRateCents(utility);
  const split = row.utilitySplit;
  const corona = row.slug === 'corona';
  const blocks: Block[] = [];
  const tracker = { text: 'rate tracker', href: RATE_TRACKER_PATH } as const;
  const rateParts: Inline[] =
    utility.averageResidentialRateCents === null
      ? [`The CPUC's average-rate reports do not cover ${utility.name}; read its own tariff and your bill.`]
      : [`${utility.name}'s average residential rate is ${rate} (${utility.asOf}; `, tracker, ').'];

  let heading: string;
  if (corona) {
    heading = 'Confirm the utility on this address';
    blocks.push({
      kind: 'p',
      parts: [
        "Corona runs its own electric utility. The City's Utilities Department serves residents and businesses within the City's electric service area, and those customers do not get a bill from Southern California Edison. The California Energy Commission's service-territory map shows that area as a small part of Corona inside SCE's territory. Read the utility name on your bill before using any rate.",
      ],
    });
    blocks.push({
      kind: 'p',
      small: true,
      parts: [
        'Sources: ',
        { text: 'City of Corona Utilities Department — Electric Service', href: CORONA_ELECTRIC_SERVICE_URL, external: true },
        '; ',
        { text: CEC_SERVICE_TERRITORY_SOURCE_0923.label, href: CEC_SERVICE_TERRITORY_SOURCE_0923.url, external: true },
        '. Checked September 23, 2026.',
      ],
    });
  } else if (split) {
    heading = `Your utility: ${utility.name} or ${split.others}`;
    blocks.push({ kind: 'p', parts: [split.note, ' ', ...rateParts] });
    blocks.push({
      kind: 'p',
      small: true,
      parts: [
        'Sources: ',
        ...split.sources.flatMap((s, i): Inline[] => [i > 0 ? '; ' : '', { text: s.label, href: s.url, external: true }]),
        `. Checked ${formatVerified(split.sources[0].verifiedAt)}.`,
      ],
    });
  } else {
    heading = `Your utility: ${utility.name}`;
    blocks.push({ kind: 'p', parts: [`${row.city} is billed by ${utility.longName} (${utility.name}). `, ...rateParts] });
  }

  if (row.cca) {
    blocks.push({
      kind: 'p',
      parts: [
        `${row.cca} supplies generation for many ${row.city} addresses while ${utility.name} delivers and bills; your bill shows which.`,
        ...(row.ccaSource
          ? ([' Source: ', { text: row.ccaSource.label, href: row.ccaSource.url, external: true }, '.'] as Inline[])
          : []),
      ],
    });
  }
  return { id: 'utility', heading, blocks };
}

export const CORONA_ELECTRIC_SERVICE_URL =
  'https://www.coronaca.gov/departments/utilities/customer-care/services/electric-service';

function rulesSection(row: CityCostRow, b: CostBenchmark): ContentSection {
  const where = b.cost.level === 'city' ? row.city : b.cost.label;
  return {
    id: 'before-you-sign',
    heading: 'Before you sign',
    blocks: [
      {
        kind: 'p',
        parts: [
          `In ${where} the middle half of reported costs spans ${formatPerWatt(b.perWatt.p25)} to ${formatPerWatt(b.perWatt.p75)} per watt, and roof, panel work, equipment and contract terms explain most of that gap. `,
          { text: COST_RULES_TITLE, href: COST_RULES_PATH },
          ` covers them, and the tax, lease and disclosure rules a ${row.city} contract follows.`,
        ],
      },
    ],
  };
}

function localRatesSection(row: CityCostRow): ContentSection | null {
  if (!row.localRates) return null;
  const lr = row.localRates;
  return {
    id: 'rates',
    heading: lr.heading,
    blocks: [
      ...lr.paragraphs.map((p): Block => ({ kind: 'p', parts: [p] })),
      {
        kind: 'p',
        small: true,
        parts: [
          'Sources: ',
          ...lr.sources.flatMap((s, i): Inline[] => [i > 0 ? '; ' : '', { text: s.label, href: s.url, external: true }]),
          `. Checked ${formatVerified(lr.sources[0].verifiedAt)}.`,
        ],
      },
    ],
  };
}

// -----------------------------------------------------------------------------
// FAQ
// -----------------------------------------------------------------------------

function faqs(row: CityCostRow, b: CostBenchmark): { question: string; answer: string }[] {
  const utility = getUtilityRate(row.utilityKey);
  const rate = formatAverageRateCents(utility);
  const index = buildCostIndexRow(row);
  const fee = index.fee;
  const where = b.cost.level === 'city' ? row.city : b.cost.label;
  const out: { question: string; answer: string }[] = [
    {
      question: `How much does solar cost in ${row.city}?`,
      answer:
        `About ${formatDollars(b.price.median)} for ${aKw(b.kw)} system, at the ${formatPerWatt(b.perWatt.median)} per watt median that ${where} owners reported (${count(b.perWatt.n)} systems, January 2025 to May 2026; middle half ${formatPerWatt(b.perWatt.p25)} to ${formatPerWatt(b.perWatt.p75)}). ` +
        `Source: CPUC DG Stats. No federal credit applies to a ${row.city} system finished in 2026.`,
    },
    {
      question: `What does a solar permit cost in ${row.city}?`,
      answer:
        fee.status === 'published' && fee.amountUsd !== null
          ? `${fee.amountDisplay} for a home rooftop system on ${possessive(row.city)} published schedule (checked ${formatVerified(row.sourcesFetchedAt)}); the state limit is $450 up to 15 kW under Gov. Code §66015.`
          : `${row.city} states no single current figure (${fee.statusLabel.toLowerCase()}, checked ${formatVerified(row.sourcesFetchedAt)}); Gov. Code §66015 caps it at $450 up to 15 kW unless the city adopts a written finding.`,
    },
    ...(row.extraFaqs ?? []),
    ...(row.localRates ? [row.localRates.faq] : []),
    {
      question: `Which utility serves ${row.city}?`,
      answer:
        row.slug === 'corona'
          ? "The City of Corona's own electric utility serves the City's electric service area, a small part of Corona inside SCE's territory on the California Energy Commission's map. Check the utility named on your bill. Sources: City of Corona Utilities Department and the CEC service-territory map, checked September 23, 2026."
          : row.utilitySplit
            ? `${row.utilitySplit.note} Where ${utility.name} serves the address, ${
                utility.averageResidentialRateCents === null
                  ? `no comparable average residential rate is published for it on the tracker.`
                  : `its average residential rate is ${rate}, as of ${utility.asOf}.`
              }`
            : `${utility.longName.replace(/^the /, 'The ')} (${utility.name}).${
                utility.averageResidentialRateCents === null
                  ? ` It is not covered by the CPUC's average-rate reports; read its own tariff.`
                  : ` Its average residential rate is ${rate}, as of ${utility.asOf}.`
              }`,
    },
  ];
  return out;
}

// -----------------------------------------------------------------------------
// Local data points (for the gate)
// -----------------------------------------------------------------------------

function localDataPoints(row: CityCostRow, b: CostBenchmark): LocalDataPoint[] {
  const points: LocalDataPoint[] = [];
  const index = buildCostIndexRow(row);
  const iou = iouForRow(row);
  const city = iou ? cityDg(row.slug) : null;
  if (b.cost.level === 'city') points.push({ id: 'dg-cost', label: `Reported median cost per watt for ${row.city} (${b.perWatt.n} systems)` });
  if (city && city.systems2025 >= 10) points.push({ id: 'dg-installs', label: `Systems connected per year at ${row.city} addresses` });
  if (b.size.level === 'city') points.push({ id: 'dg-mix', label: `${row.city} 2025 lease/PPA share, battery share and median size` });
  if (index.fee.status === 'published' && index.fee.amountUsd !== null) points.push({ id: 'permit-fee', label: `${row.city} permit fee ${index.fee.amountDisplay}` });
  else if (index.fee.status === 'dated' || index.fee.status === 'conflicting') points.push({ id: 'permit-fee', label: `${row.city} permit fee (${index.fee.statusLabel.toLowerCase()})` });
  points.push({ id: 'permit-path', label: `${possessive(row.city)} own permit filing path` });
  if (row.cca) points.push({ id: 'cca', label: `CCA serving ${row.city}: ${row.cca}` });
  if (row.utilitySplit || row.slug === 'corona') points.push({ id: 'utility-split', label: `Sourced utility split inside ${row.city}` });
  if (row.localRates) points.push({ id: 'local-rates', label: `${row.city} utility rate schedule` });
  if (getLocalProjectGuidance(row.slug)) points.push({ id: 'local-guidance', label: `${row.city} project checks from local sources` });
  if (row.extraFaqs?.length) points.push({ id: 'city-faq', label: `${row.city}-specific questions answered from sources` });
  return points;
}

// -----------------------------------------------------------------------------
// Assembly
// -----------------------------------------------------------------------------

export function buildCostPageContent(row: CityCostRow): CostPageContent {
  const b = costBenchmark(row);
  const utility = getUtilityRate(row.utilityKey);
  const sections: ContentSection[] = [permitSection(row), numbersSection(row, b), utilitySection(row)];
  const rates = localRatesSection(row);
  if (rates) sections.push(rates);
  sections.push(rulesSection(row, b));

  const sources: CityCostRowSource[] = [
    DG_ROW_SOURCE,
    { label: CPUC_GUIDE_DGSTATS_NOTE.label, url: CPUC_GUIDE_DGSTATS_NOTE.url, verifiedAt: CPUC_GUIDE_DGSTATS_NOTE.verifiedAt },
    USC_25D_SOURCE,
    { label: `${row.city} solar permitting — ${row.permitFeeSource}`, url: row.permitUrl, verifiedAt: row.sourcesFetchedAt },
    ...(row.permitSources ?? []),
    GOV_66015_SOURCE,
    ...(row.ccaSource ? [row.ccaSource] : []),
    ...(row.slug !== 'corona'
      ? [{
          label: utility.sourceUrl ? `${utility.name} average residential rate — ${utility.sourceLabel}` : `${utility.name} — ${utility.sourceLabel}`,
          url: utility.sourceUrl ?? `https://ratereliefca.com${RATE_TRACKER_PATH}`,
          verifiedAt: utility.fetchedAt,
        }]
      : [
          { label: 'City of Corona Utilities Department — Electric Service', url: CORONA_ELECTRIC_SERVICE_URL, verifiedAt: '2026-09-23' },
          CEC_SERVICE_TERRITORY_SOURCE_0923,
        ]),
    ...(row.utilitySplit ? row.utilitySplit.sources : []),
    ...(row.localRates ? row.localRates.sources : []),
  ];
  const seen = new Set<string>();
  const dedupedSources = sources.filter((s) => {
    const key = `${s.url}|${s.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return {
    slug: row.slug,
    city: row.city,
    benchmark: b,
    answer: answerBlocks(row, b),
    sections,
    faqs: faqs(row, b),
    sources: dedupedSources,
    indexRowHref: indexRowHref(row.slug),
    localDataPoints: localDataPoints(row, b),
  };
}

/**
 * Everything a reader reads in the article body, in order: the H1, the answer,
 * each section, the city's local project checks and the FAQ. Navigation lists,
 * the quick check, the bill tool and the inquiry form are shared page furniture
 * and are left out (the same scope qc-gate-tsx.mjs reads: page prose, not the
 * components every page imports).
 */
export function costPageText(content: CostPageContent, h1: string): string {
  const parts: string[] = [h1];
  for (const block of content.answer) parts.push(blockText(block));
  for (const section of content.sections) {
    parts.push(section.heading);
    for (const block of section.blocks) parts.push(blockText(block));
    if (section.id === 'utility') {
      const g = getLocalProjectGuidance(content.slug);
      if (g) {
        parts.push(g.intro, ...g.quoteQuestions, ...g.localChecks.flatMap((c) => [c.title, c.body]));
      }
    }
  }
  for (const faq of content.faqs) parts.push(faq.question, faq.answer);
  return parts.join('\n');
}

// -----------------------------------------------------------------------------
// Hub rows (the /solar-cost index and the regional hubs' cost tables)
// -----------------------------------------------------------------------------

export interface CostHubRow {
  slug: string;
  city: string;
  county: string;
  path: string;
  utility: string;
  cca: string | null;
  /** '$4.23/W' */
  perWatt: string;
  /** 'city', 'county', 'PG&E area', 'statewide' */
  level: string;
  n: number;
  /** '$568', or the fee status ('No figure published'). */
  fee: string;
  feeIsFigure: boolean;
  /** True when the published fee is above the $450 limit for 15 kW. */
  feeAboveLimit: boolean;
}

export function costHubRow(row: CityCostRow): CostHubRow {
  const b = costBenchmark(row);
  const index = buildCostIndexRow(row);
  const fee = index.fee;
  const figure = fee.status === 'published' && fee.amountDisplay !== null;
  return {
    slug: row.slug,
    city: row.city,
    county: row.county.split(' — ')[0],
    path: `/solar-cost/${row.slug}`,
    utility: index.utility.display,
    cca: index.cca?.name ?? null,
    perWatt: `${formatPerWatt(b.perWatt.median)}/W`,
    level: levelTag(b.cost),
    n: b.perWatt.n,
    fee: figure ? (fee.amountDisplay as string) : fee.statusLabel,
    feeIsFigure: figure,
    feeAboveLimit: figure && (fee.amountUsd as number) > STATE_RESIDENTIAL_PV_FEE_LIMIT.baseUsd,
  };
}
