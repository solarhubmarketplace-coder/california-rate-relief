import Link from 'next/link';
import type { CityCostRow } from '@/data/city-cost-data';
import {
  CITY_TYPE_HUB,
  cityCounty,
  cityName,
  citySiblingLinks,
  companionCityLinks,
  nearbyCityLinks,
  regionalHubsFor,
  type CityPageType,
} from '@/lib/city-pages';

const link =
  'font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

// =============================================================================
// CitySiblingLinks — one city's pages, one per search intent (2026-09-23).
//
// "Solar companies <city>", "solar panel cost <city>" and "<city> electric
// bill" are three different results pages (installer vs cost SERPs share 7% of
// top-10 URLs, bill/rate vs installer 0%; Block 6 §4), so each lives on its own
// URL. This row sits right after the intro so a reader who landed on the wrong
// one can move to the page that answers their question, and each page points
// up to the statewide hub for its type. Only live pages are listed.
// =============================================================================

const STATEWIDE: { href: string; label: string }[] = [
  CITY_TYPE_HUB.companies,
  CITY_TYPE_HUB.cost,
  CITY_TYPE_HUB.savings,
];

export function CitySiblingLinks({
  slug,
  type,
  omitStatewide = [],
  className = '',
}: {
  slug: string;
  type: CityPageType;
  /** Statewide hrefs the page already links in its body (one link per target). */
  omitStatewide?: string[];
  className?: string;
}) {
  const siblings = citySiblingLinks(slug, type).filter((s) => !s.current);
  const statewide = STATEWIDE.filter((hub) => !omitStatewide.includes(hub.href));
  const name = cityName(slug);
  return (
    <nav
      aria-label={`${name} solar pages by question`}
      className={`not-prose rounded-xl border border-border bg-card p-4 text-sm sm:p-5 ${className}`}
    >
      {siblings.length > 0 && (
        <ul className='grid gap-3 sm:grid-cols-2'>
          {siblings.map((s) => (
            <li key={s.href}>
              <span className='block text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                {s.intent}
              </span>
              <Link href={s.href} className={link}>
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <p className={`${siblings.length > 0 ? 'mt-3 border-t border-border pt-3' : ''} text-foreground/75`}>
        Statewide:{' '}
        {statewide.map((hub, index) => (
          <span key={hub.href}>
            {index > 0 ? ' · ' : ''}
            <Link href={hub.href} className={link}>
              {hub.label}
            </Link>
          </span>
        ))}
      </p>
    </nav>
  );
}

// =============================================================================
// NearbyCityPages — "Solar near <city>" for every city page type.
//
// Until 2026-09-22 this file only rendered on /solar-cost pages in two
// counties, listing up to four same-county cost pages alphabetically. It now
// runs on all three city templates (/solar-cost, /solar-companies,
// /solar-savings) and lists the 4-6 nearest live city pages: same county first,
// then the nearest cities anywhere, measured between Census internal points
// (src/data/city-coordinates.ts). Selection lives in src/lib/city-pages.ts so
// scripts/assert-city-links.mjs credits exactly the links rendered here.
//
// Every link resolves to a page that answers 200: a neighbour links to its page
// of the same type when that page is live, otherwise to its lead page. Nothing
// here is a claim about the neighbour beyond its name; the pages carry their
// own sources.
// =============================================================================


export function NearbyCityPages({
  slug,
  type,
  companionTypes = [],
  className = '',
}: {
  slug: string;
  type: CityPageType;
  /** This city's other live pages to list under "Also for <city>". */
  companionTypes?: CityPageType[];
  className?: string;
}) {
  const nearby = nearbyCityLinks(slug, type);
  if (nearby.length === 0) return null;
  const name = cityName(slug);
  const county = cityCounty(slug);
  const sameCounty = nearby.filter((n) => n.sameCounty).length;
  const companions = companionCityLinks(slug, type).filter((c) => companionTypes.includes(c.type));
  const hubs = regionalHubsFor(slug);
  const headingId = `nearby-${type}-${slug}`;

  return (
    <aside
      aria-labelledby={headingId}
      className={`not-prose my-10 rounded-2xl border border-border bg-muted/30 p-5 sm:p-7 ${className}`}
    >
      <h2 id={headingId} className='text-xl font-bold text-foreground'>
        Solar near {name}
      </h2>
      <p className='mt-2 text-sm leading-6 text-foreground/75'>
        {sameCounty > 0
          ? `Nearby city pages, starting with ${county}. `
          : 'The nearest city pages on this site. '}
        Each one names the utility and permit rules for that city, so check that they match your
        own address before relying on them.
      </p>
      <ul className='mt-4 grid gap-2 sm:grid-cols-2'>
        {nearby.map((n) => (
          <li key={n.href}>
            <Link href={n.href} className={link}>
              {n.label}
            </Link>
          </li>
        ))}
      </ul>
      {companions.length > 0 && (
        <p className='mt-4 text-sm text-foreground/75'>
          Also for {name}:{' '}
          {companions.map((c, index) => (
            <span key={c.href}>
              {index > 0 ? ' · ' : ''}
              <Link href={c.href} className={link}>
                {c.label}
              </Link>
            </span>
          ))}
        </p>
      )}
      {hubs.length > 0 && (
        <p className='mt-2 text-sm text-foreground/75'>
          More cities in the region:{' '}
          {hubs.map((hub, index) => (
            <span key={hub.href}>
              {index > 0 ? ' · ' : ''}
              <Link href={hub.href} className={link}>
                {hub.region} solar guide
              </Link>
            </span>
          ))}
        </p>
      )}
    </aside>
  );
}

/** The /solar-cost template's block: nearby pages plus this city's savings page. */
export function NearbyCostCities({ row }: { row: CityCostRow }) {
  return <NearbyCityPages slug={row.slug} type='cost' companionTypes={['savings']} />;
}
