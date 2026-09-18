import type { UtilityRateKey } from './utility-rate-tracker';

// =============================================================================
// city-cost-data.ts — the data layer behind /solar-cost/[city]
//
// This is a NEW city layer. src/data/cities-data.ts is the old one and is not
// touched by it: that file drives /solar-savings/* and /solar-companies/* and
// carries copy this lane has no mandate to change.
//
// WHAT A ROW IS FOR
// /solar-cost/[city] answers "solar panel cost <city>" WITHOUT stating a price.
// It does that by naming, with a source, the four things that actually vary by
// city: which utility bills the address (and that utility's current average
// residential rate, imported from the rate tracker rather than typed here), the
// city's own solar permit fee and whether it can be filed online, and the state
// rules that apply the same way everywhere. So the only per-city facts a row
// carries are the ones a reader cannot get from the state rules alone.
//
// THE GATE (CALIFORNIA_STRATEGY_OF_RECORD_2026-09-17.md §7.2-§7.3)
// Every field below that reaches the rendered page must carry a source and a
// verified date. Fields not yet verified hold the literal string 'TODO'. A row
// with a TODO in ANY rendered field is excluded from generateStaticParams and
// from the sitemap, and its URL 404s. That is deliberate: an unsourced city
// page must not be able to ship by accident, and the failure mode is a missing
// page rather than a page with an invented permit fee on it.
//
// SEED STATE, 2026-09-18
// All five rows below are placeholders. The real values are being produced
// separately into 02_Work_Management/Growth_200/CA_CITY_DATA_2026-09-18.csv;
// that file did not exist when this file was written (checked 2026-09-18), so
// nothing could be filled from it. When it lands, replace the TODO strings with
// its values, set sourcesFetchedAt to the CSV's own fetch date, and the gate
// opens for exactly the rows that are complete.
//
// utilityKey is typed to the tracker's keys and so cannot hold 'TODO'. It is
// therefore PROVISIONAL on a seed row: because sourcesFetchedAt is 'TODO' the
// row is gated out, so no provisional utility assignment can reach a reader.
// Confirm the serving utility against a primary source in the same pass that
// fills the permit fields.
// =============================================================================

/** The marker for a field that has not been verified against a source yet. */
export const UNSOURCED = 'TODO';

export interface CityCostRow {
  /** URL slug: /solar-cost/<slug>. */
  slug: string;
  /** Display name as it reads in the H1, e.g. 'San Diego'. */
  city: string;
  /** County, e.g. 'San Diego County'. Rendered. */
  county: string;
  /** Which tracker utility bills this city. Rendered via the tracker record. */
  utilityKey: UtilityRateKey;
  /** Community choice aggregator, if one serves the city. Rendered when set. */
  cca?: string;
  /** The city's own solar permitting page. Rendered as a link. */
  permitUrl: string;
  /** What the city's published fee schedule says, in its own terms. Rendered. */
  permitFeeNote: string;
  /** Label for the document the fee note came from. Rendered. */
  permitFeeSource: string;
  /** Whether solar permits can be filed online, per the city. Rendered. */
  permitOnline: string;
  /** ISO date every field above was fetched and verified. Rendered. */
  sourcesFetchedAt: string;
}

/**
 * The fields that reach the rendered page and therefore must be sourced.
 * `cca` is checked only when present, since most cities have none.
 */
const GATED_FIELDS = [
  'county',
  'permitUrl',
  'permitFeeNote',
  'permitFeeSource',
  'permitOnline',
  'sourcesFetchedAt',
] as const satisfies ReadonlyArray<keyof CityCostRow>;

export const CITY_COST_ROWS: CityCostRow[] = [
  // Sources fetched and verified 2026-09-18. Rates are NOT stored here; the
  // page reads them from utility-rate-tracker.ts. See
  // 02_Work_Management/Growth_200/CA_CITY_DATA_2026-09-18.csv for the ledger.
  {
    slug: 'temecula',
    city: 'Temecula',
    county: 'Riverside County',
    utilityKey: 'sce',
    permitUrl: 'https://temeculaca.gov/304/Photovoltaic-Systems',
    permitFeeNote:
      'The City states that a fee applies to SolarAPP+ plan check and the building permit; no dollar amount is published on the page.',
    permitFeeSource: 'City of Temecula, Photovoltaic Systems (temeculaca.gov/304)',
    permitOnline: 'Yes. SolarAPP+ accepted since 30 September 2023; the Citizen Self Service portal is also available.',
    sourcesFetchedAt: '2026-09-18',
  },
  {
    slug: 'murrieta',
    city: 'Murrieta',
    county: 'Riverside County',
    utilityKey: 'sce',
    permitUrl: 'https://www.murrietaca.gov/DocumentCenter/View/2399/Solar-Permits-Residential-IB-125',
    permitFeeNote:
      'Information Bulletin IB-125 states the residential solar permit fee is four hundred fifty dollars, payable when the permit is issued.',
    permitFeeSource: 'City of Murrieta, Information Bulletin IB-125, Solar Permits (Residential)',
    permitOnline: 'Yes. Submitted through the Development Services solar permit portal; the bulletin does not name SolarAPP+.',
    sourcesFetchedAt: '2026-09-18',
  },
  {
    slug: 'san-diego',
    city: 'San Diego',
    county: 'San Diego County',
    utilityKey: 'sdge',
    cca: 'San Diego Community Power (generation); SDG&E remains the delivery utility',
    permitUrl: 'https://www.sandiego.gov/development-services/permits/solar-photovoltaic-permit',
    permitFeeNote:
      'The City states that inspection, review and other fees vary with project scope and refers applicants to Information Bulletin 301; no flat solar fee is published.',
    permitFeeSource: 'City of San Diego Development Services, Solar Photovoltaic Permit page and Information Bulletin 301',
    permitOnline: 'Yes. Applications are filed online through the Accela portal.',
    sourcesFetchedAt: '2026-09-18',
  },
  {
    slug: 'escondido',
    city: 'Escondido',
    county: 'San Diego County',
    utilityKey: 'sdge',
    cca: 'Clean Energy Alliance (generation, since 1 April); SDG&E remains the delivery utility',
    permitUrl: 'https://www.escondido.gov/1247/Solar-App-Plus',
    permitFeeNote:
      'The City states a processing fee is charged by SolarAPP+ and that the permit issues once all applicable City fees are paid; no dollar amount is published on the page.',
    permitFeeSource: 'City of Escondido, Solar App Plus (escondido.gov/1247)',
    permitOnline: 'Yes. SolarAPP+ for licensed contractors (residential only); owner-builders file a regular building permit with plan check.',
    sourcesFetchedAt: '2026-09-18',
  },
  {
    // Gated out: the City site returns 403 to automated fetches, so the fee and
    // online-filing statements could not be verified on 2026-09-18. Fill by
    // reading the page in a browser and recording what it says.
    slug: 'oceanside',
    city: 'Oceanside',
    county: 'San Diego County',
    utilityKey: 'sdge',
    cca: 'Clean Energy Alliance (generation, since 1 April); SDG&E remains the delivery utility',
    permitUrl: 'https://www.ci.oceanside.ca.us/government/development-services/building/solarapp',
    permitFeeNote: UNSOURCED,
    permitFeeSource: UNSOURCED,
    permitOnline: UNSOURCED,
    sourcesFetchedAt: UNSOURCED,
  },
];

/** True when any rendered field is still a TODO placeholder. */
export function unsourcedFields(row: CityCostRow): string[] {
  const missing = GATED_FIELDS.filter((field) => {
    const value = row[field];
    return typeof value !== 'string' || value.trim() === '' || value.includes(UNSOURCED);
  }).map((field) => String(field));
  if (typeof row.cca === 'string' && row.cca.includes(UNSOURCED)) missing.push('cca');
  return missing;
}

/** The gate. A row only ships when every rendered field carries a source. */
export function isPublishableCityCostRow(row: CityCostRow): boolean {
  return unsourcedFields(row).length === 0;
}

/** Rows that pass the gate — the only rows any route or sitemap may use. */
export function getPublishableCityCostRows(): CityCostRow[] {
  return CITY_COST_ROWS.filter(isPublishableCityCostRow);
}

export function getPublishableCityCostSlugs(): string[] {
  return getPublishableCityCostRows().map((row) => row.slug);
}

/** Lookup that already applies the gate: a gated row reads as absent. */
export function getCityCostRow(slug: string): CityCostRow | undefined {
  return getPublishableCityCostRows().find((row) => row.slug === slug);
}
