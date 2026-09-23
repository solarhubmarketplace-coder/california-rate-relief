// =============================================================================
// solar-cost-benchmark.ts — the ONE statewide solar cost benchmark figure used
// across /solar-cost and every /solar-cost/[city] page.
//
// POLICY (Chad, 2026-09-22): the /solar-cost lane may now state one sourced,
// statewide installed-price benchmark from Lawrence Berkeley National
// Laboratory's Tracking the Sun research. It must always read as statewide —
// never as a city's price — and it changes nothing else about the lane's
// rule. See the policy comment atop city-cost-data.ts for the full rule.
//
// WHY THIS IS ITS OWN FILE
// A single figure renders on 57 pages. It is defined once, here, with its
// source attached, and read by one component (StatewideCostBenchmark) rather
// than typed into city-cost-data.ts or the page templates — so there is
// exactly one place to correct if LBNL revises the number, and no way for a
// per-city row to carry its own, different "statewide" figure by accident.
//
// SOURCE — VERIFIED DIRECTLY AGAINST THE PRIMARY DOCUMENT, 2026-09-22
// Lawrence Berkeley National Laboratory, Energy Markets & Policy Department,
// "Tracking the Sun: Pricing and Design Trends for Distributed Photovoltaic
// Systems in the United States, 2024 Edition" (published October 2024; data
// through year-end 2023 installations).
//   - p.35: host-owned RESIDENTIAL systems installed in 2023 priced between
//     $3.2/W and $5.5/W (20th-80th percentile of the national sample).
//   - p.37: "Residential pricing in CA, which dominates the sample, is near
//     the middle of the pack for residential." LBNL states California's own
//     position within that national band; the report does not publish a
//     separate California-only $/W figure for residential systems, and this
//     file does not invent one (checked directly against the PDF this
//     session, not taken from a secondary summary).
// No newer LBNL edition publishes an extractable residential $/W figure as of
// this check: LBNL's August 2026 "U.S. Distributed Solar and Storage: 2025
// Update" gives only a year-over-year change ("installed prices for
// host-owned residential systems fell YoY by $0.5/W"), not an absolute
// figure, in its extractable text — so the 2024 Edition's 2023 data remains
// the newest edition with a verifiable, quotable dollar figure.
// =============================================================================

export interface StatewideCostBenchmarkSource {
  /** The document's own title, as it names itself. */
  label: string;
  publisher: string;
  url: string;
  /** When this edition of the report was published. */
  publishedDate: string;
  /** The installation year the price data actually covers. */
  dataYear: string;
  /** ISO date this figure was checked directly against the primary document. */
  verifiedAt: string;
}

export interface StatewideCostBenchmark {
  lowPerWatt: number;
  highPerWatt: number;
  unit: string;
  percentileBand: string;
  /** How LBNL itself places California within this national band. */
  californiaContext: string;
  source: StatewideCostBenchmarkSource;
}

export const STATEWIDE_COST_BENCHMARK: StatewideCostBenchmark = {
  lowPerWatt: 3.2,
  highPerWatt: 5.5,
  unit: '$/W',
  percentileBand: '20th to 80th percentile',
  californiaContext:
    'This is a national figure for host-owned residential systems, not a California-only number — LBNL does not publish one. LBNL states that California residential pricing, within this national sample, runs "near the middle of the pack."',
  source: {
    label:
      'Tracking the Sun: Pricing and Design Trends for Distributed Photovoltaic Systems in the United States, 2024 Edition',
    publisher: 'Lawrence Berkeley National Laboratory, Energy Markets & Policy Department',
    url: 'https://emp.lbl.gov/sites/default/files/2024-10/Tracking%20the%20Sun%202024_Report.pdf',
    publishedDate: 'October 2024',
    dataYear: '2023',
    verifiedAt: '2026-09-22',
  },
};

/** "$3.20-$5.50 per watt" — formatted once so every render site matches. */
export function formatStatewideBenchmarkRange(): string {
  const { lowPerWatt, highPerWatt } = STATEWIDE_COST_BENCHMARK;
  return `$${lowPerWatt.toFixed(2)}–$${highPerWatt.toFixed(2)} per watt`;
}

/**
 * The same gate discipline as city-cost-data.ts's unsourcedFields(), applied
 * to this single shared figure: if any source field it depends on is ever
 * left blank, the benchmark does not render rather than shipping unsourced.
 */
const SOURCE_FIELDS = [
  'label',
  'publisher',
  'url',
  'publishedDate',
  'dataYear',
  'verifiedAt',
] as const satisfies ReadonlyArray<keyof StatewideCostBenchmarkSource>;

export function unsourcedBenchmarkFields(): string[] {
  return SOURCE_FIELDS.filter((field) => {
    const value = STATEWIDE_COST_BENCHMARK.source[field];
    return typeof value !== 'string' || value.trim() === '';
  });
}

export const isStatewideBenchmarkSourced = unsourcedBenchmarkFields().length === 0;
