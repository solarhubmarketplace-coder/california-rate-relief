import Link from 'next/link';
import { hubForPath, topicHub, type TopicHubId } from '@/data/topic-hubs';

/**
 * One sentence, in the body, that links a spoke up to its hub page (plan 7.4;
 * STRUCTURE_AND_LINK_RULES §5.2: one contextual up-link in the first 150 words).
 *
 * HubSpokeLinks already links the hub, but it renders as a <nav> link block at
 * the end of the page, and a crawler reads that as navigation, not as the page
 * vouching for its parent. This is the in-prose version: a plain sentence placed
 * right after the page's opening answer.
 *
 * Anchors are varied on purpose (§5.5: descriptive, 2-8 words, no single anchor
 * repeated on every page). Each hub has three sentences, each with its own
 * anchor; a page gets one of them from a stable hash of its path, so the choice
 * never changes between builds and siblings spread across all three.
 *
 * Renders nothing when:
 *   - the path is the hub page itself, or its hub has no hub page;
 *   - the path is a city page (/solar-cost, /solar-companies, /solar-savings):
 *     the city templates carry their own link plan.
 */

type Line = { before: string; anchor: string; after: string };

const L = (before: string, anchor: string, after = '.'): Line => ({ before, anchor, after });

const LINES: Partial<Record<TopicHubId, Line[]>> = {
  battery: [
    L('Sizing, cost and SGIP status for home batteries are covered in ', 'the California home battery guide'),
    L('This page is one part of ', 'our guide to home battery storage'),
    L('If you are still deciding whether a battery fits your home, start with ', 'home battery storage in California'),
  ],
  commercial: [
    L('For the whole process, from load data to bids you can compare, see ', 'the California commercial solar guide'),
    L('This page is one part of ', 'our commercial solar guide for California businesses'),
    L('If your business project is at an early stage, start with ', 'how to build a comparable commercial quote'),
  ],
  cost_value: [
    L('For what home solar costs and whether it pays in California, see ', 'the solar panels in California guide'),
    L('This page is one part of ', 'our guide to solar cost and payback'),
    L('If you are still deciding whether solar is worth it, start with ', 'home solar cost and payback in California'),
  ],
  electric_bills: [
    L('For what pushes California bills up in the first place, see ', 'why California electric bills are so high'),
    L('This page is one part of ', 'our guide to California electric bills'),
    L('If your bill jumped and you are not sure why, start with ', 'what to check on a high California bill'),
  ],
  financing: [
    L('To compare every way of paying for solar side by side, see ', 'lease vs PPA vs loan vs cash'),
    L('This page is one part of ', 'our solar financing comparison'),
    L('If you have not chosen how to pay yet, start with ', 'how leases, PPAs, loans and cash compare'),
  ],
  incentives: [
    L('For the credits and rebates that are still left, see ', 'California solar incentives in 2026'),
    L('This page is one part of ', 'our guide to solar tax credits and rebates'),
    L('If your quote counts on an incentive, start with ', 'which solar incentives remain in California'),
  ],
  installer_reviews: [
    L('For reviews of other solar companies, see ', 'all California solar company reviews'),
    L('This page is one part of ', 'our solar installer and panel reviews'),
    L('More company-by-company records are in ', 'the solar company reviews index'),
  ],
  installers: [
    L('For how to find, compare and verify an installer, see ', 'choosing a solar company in California'),
    L('This page is one part of ', 'our guide to comparing California solar companies'),
    L('If you have not picked an installer yet, start with ', 'how to vet a California solar company'),
  ],
  maintenance: [
    L('For routine care, repairs and who to call, see ', 'solar panel maintenance in California'),
    L('This page is one part of ', 'our solar maintenance and repair guide'),
    L('If your system needs work, start with ', 'what solar upkeep involves in California'),
  ],
  nem: [
    L('For how the old and new billing rules differ, see ', 'NEM 2.0 vs NEM 3.0 in California'),
    L('This page is one part of ', 'our guide to California solar billing'),
    L('If you are not sure which plan your account is on, start with ', 'how NEM 2.0 and NEM 3.0 compare'),
  ],
  other_options: [
    L('For renters and homes without a usable roof, see ', 'whether community solar is worth it'),
    L('This page is one part of ', 'our guide to community solar'),
    L('If rooftop solar is not an option for you, start with ', 'how community solar credits work'),
  ],
  roof_structures: [
    L('Before any roof or structure decision, check ', 'whether your roof is good for solar'),
    L('This page is one part of ', 'our roof suitability guide for solar'),
    L('If you have not checked your roof yet, start with ', 'the California roof suitability checklist'),
  ],
  rules_permits: [
    L('For contracts, sales tactics and your rights as a buyer, see ', 'the solar problems and consumer-rights guides'),
    L('This page is one part of ', 'our guides to solar problems in California'),
    L('If something has already gone wrong with a solar deal, start with ', 'common California solar problems'),
  ],
  utility_rates: [
    L('Current prices for PG&E, SCE, SDG&E and SMUD are in ', 'the California utility rate tracker'),
    L('This page is one part of ', 'our tracker of California electricity rates'),
    L('To see how your utility’s rates have moved, start with ', 'the statewide rate tracker'),
  ],
};
// Same hub page, same sentences.
LINES.city_installers = LINES.installers;
LINES.city_bills = LINES.utility_rates;

const CITY_PREFIXES = ['/solar-cost', '/solar-companies', '/solar-savings'];

function isCityPath(path: string): boolean {
  return CITY_PREFIXES.some((p) => path === p || path.startsWith(`${p}/`));
}

/** Stable, build-independent pick (same hash HubSpokeLinks uses for offsets). */
function pick<T>(items: T[], path: string): T {
  let h = 0;
  for (let c = 0; c < path.length; c++) h = (h * 31 + path.charCodeAt(c)) >>> 0;
  return items[h % items.length];
}

/** The line a path gets, or null when it gets none. Exported for tests and audits. */
export function hubUpLinkFor(path: string, hub?: TopicHubId): { href: string; line: Line } | null {
  if (!path || isCityPath(path)) return null;
  const id = hubForPath(path) ?? hub;
  if (!id) return null;
  const h = topicHub(id);
  if (!h || !h.hubPage || h.hubPage === path) return null;
  const lines = LINES[id];
  const line = lines && lines.length
    ? pick(lines, path)
    : L('For the wider topic, see ', h.hubPageLabel ?? h.label);
  return { href: h.hubPage, line };
}

export function HubUpLink({
  path,
  hub,
  className = 'mt-3 leading-relaxed text-foreground/80',
}: {
  /** This page's own path, e.g. "/blog/pge-ev-rates". */
  path: string;
  /** Fallback hub when topic-hubs.ts does not list the path. */
  hub?: TopicHubId;
  className?: string;
}) {
  const found = hubUpLinkFor(path, hub);
  if (!found) return null;
  const { href, line } = found;
  return (
    <p className={className} data-hub-uplink="">
      {line.before}
      <Link href={href} className="font-medium text-primary underline underline-offset-2 hover:decoration-primary">
        {line.anchor}
      </Link>
      {line.after}
    </p>
  );
}

export default HubUpLink;
