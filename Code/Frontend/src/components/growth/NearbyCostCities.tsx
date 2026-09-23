import Link from 'next/link';
import type { CityCostRow } from '@/data/city-cost-data';
import {
  cityCounty,
  cityName,
  companionCityLinks,
  nearbyCityLinks,
  regionalHubsFor,
  type CityPageType,
} from '@/lib/city-pages';

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

const link =
  'font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

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
