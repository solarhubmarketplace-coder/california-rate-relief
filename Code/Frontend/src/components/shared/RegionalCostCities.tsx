import Link from 'next/link';
import { CITIES } from '@/data/cities-data';
import { cityCostPath, getPublishableCityCostRows } from '@/data/city-cost-data';
import { savingsCityHref } from '@/lib/canonical-redirects';
import { getUtilityRate } from '@/data/utility-rate-tracker';

// =============================================================================
// RegionalCostCities — the cost-layer cities a regional hub was missing.
//
// The six regional hubs build their city grid from src/data/cities-data.ts.
// The cost layer is a separate file, src/data/city-cost-data.ts, and on
// 2026-09-18 fourteen of its cities existed in no other file: Auburn,
// California City, Danville, Hollister, Lincoln, Napa, Ontario, Rocklin, San
// Marcos, Tracy, Tulare, Windsor, Yuba City and Yucaipa. Nothing on the site
// linked them. This block puts the ones inside a hub's own counties on that
// hub, where a reader looking at the region would expect to find them.
//
// It lists every cost city in those counties EXCEPT the ones the hub's grid
// already opens. A retired /solar-savings/<city> page resolves through
// savingsCityHref() to /solar-cost/<city>, so for those cities the grid above is
// already the cost link and repeating it here would be two links to one page in
// one list. Cities whose savings page is still live do appear here, because the
// cost page is a different page answering a different question. The set this
// renders is mirrored exactly in scripts/assert-city-links.mjs; change one and
// the other must follow.
//
// No price, range, per-watt figure or payback period appears here, for the same
// reason none appears on the pages it links: no source publishes one for a city.
// =============================================================================

export function RegionalCostCities({
  region,
  counties,
}: {
  region: string;
  counties: string[];
}) {
  const alreadyLinked = new Set(
    CITIES.filter((city) => counties.includes(city.county)).map((city) =>
      savingsCityHref(city.slug),
    ),
  );
  const rows = getPublishableCityCostRows()
    .filter((row) => counties.includes(row.county))
    .filter((row) => !alreadyLinked.has(cityCostPath(row.slug)))
    .sort((a, b) => a.city.localeCompare(b.city));

  if (rows.length === 0) return null;

  return (
    <div className='mb-12'>
      <h2 className='text-2xl font-bold text-foreground mb-3 tracking-tight'>
        Solar cost pages for {region} cities
      </h2>
      <p className='text-muted-foreground mb-5 leading-relaxed'>
        Each of these {region} cities has a cost page of its own. It names the utility that bills
        the address, quotes what the city&rsquo;s own adopted fee schedule says about a solar permit
        and whether the permit can be filed online, and states no price, because no source
        publishes one for a city.
      </p>
      <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3'>
        {rows.map((row) => (
          <li key={row.slug}>
            <Link
              href={cityCostPath(row.slug)}
              className='font-medium text-primary hover:underline'
            >
              Solar panel cost in {row.city}
            </Link>
            <span className='block text-sm text-muted-foreground'>
              {row.county} &middot; billed by {getUtilityRate(row.utilityKey).name}
            </span>
          </li>
        ))}
      </ul>
      <p className='text-sm text-muted-foreground mt-5'>
        <Link href='/solar-cost' className='text-primary hover:underline'>
          Every California city with a cost page
        </Link>{' '}
        is listed by county on one index.
      </p>
    </div>
  );
}

export default RegionalCostCities;
