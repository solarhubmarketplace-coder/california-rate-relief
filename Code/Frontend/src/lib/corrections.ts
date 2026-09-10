// =============================================================================
// corrections — hand-maintained public corrections log
// =============================================================================
// This site publishes utility rates, export compensation rules, and incentive
// status. Those move. When we change a load-bearing fact after publication, the
// change gets an entry here with the date, so a reader can see what we got
// wrong and when we fixed it.
//
// This registry is HAND-MAINTAINED. It is not generated from git history and it
// is not read from a database, so /corrections builds with no data source.
//
// Rules for adding an entry:
//   1. Log material corrections only — a factual claim a reader could have
//      acted on. Typos and copy polish do not belong here.
//   2. `date` is the ISO date the fix shipped, not the date the error was made.
//   3. `what` says what changed. `why` says what caused the error or what
//      prompted the re-check. Both in plain language, no hedging.
//   4. Newest entries can go anywhere in the array — /corrections sorts by
//      date descending at render time.
//   5. `id` is stable and never reused: <topic>-<YYYY>-<MM>.
// =============================================================================

export interface Correction {
  /** Stable slug, never reused. Format: <topic>-<YYYY>-<MM>. */
  id: string;
  /** ISO-8601 date the correction shipped, e.g. '2026-09-10'. */
  date: string;
  /** Page or scope the correction applies to. Free text — a path, or a scope like 'Site-wide'. */
  page: string;
  /** What changed. */
  what: string;
  /** Why it was wrong, or what prompted the re-check. */
  why: string;
}

export const CORRECTIONS: Correction[] = [
  {
    id: 'bakersfield-utility-2026-09',
    date: '2026-09-10',
    page: '/solar-savings/bakersfield',
    what: 'Corrected the page title and body: Bakersfield is served predominantly by PG&E, not SCE.',
    why: 'A utility-identity audit found the page named the wrong serving utility.',
  },
  {
    id: 'itc-status-2026-09',
    date: '2026-09-09',
    page: 'Multiple articles',
    what: 'Corrected statements about the status of the federal residential clean energy credit across 42 pages.',
    why: 'Two pages on the site made contradictory claims. Both were re-checked against the statute and IRS guidance.',
  },
  {
    id: 'article-cta-2026-09',
    date: '2026-09-09',
    page: 'Site-wide',
    what: 'Fixed the header eligibility link, which did not work on any page except the homepage.',
    why: 'The link was missing a leading slash, so it resolved to an anchor on whatever page the reader was already on.',
  },
  {
    id: 'smud-export-2026-09',
    date: '2026-09-10',
    page: 'Sacramento and NEM pages',
    what: 'Clarified that SMUD sits outside the CPUC net-billing decision but pays a flat export rate, not full retail.',
    why: 'The earlier framing could have implied a better deal than SMUD actually offers.',
  },
];

/** Corrections newest-first. Array.prototype.sort is stable, so same-day entries keep registry order. */
export function correctionsNewestFirst(): Correction[] {
  return [...CORRECTIONS].sort((a, b) => b.date.localeCompare(a.date));
}
