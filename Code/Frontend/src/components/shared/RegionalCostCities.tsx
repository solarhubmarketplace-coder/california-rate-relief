import Link from 'next/link';
import { getPublishableCityCostRows } from '@/data/city-cost-data';
import { CostCityTable } from '@/components/growth/CostCityTable';
import { costHubRow } from '@/lib/city-cost-content';

// =============================================================================
// RegionalCostCities — the cost table on each regional hub.
//
// Rebuilt 2026-09-24 (Block 3, item 3.7): a table of every /solar-cost city in
// the hub's counties with its utility, CCA, reported median cost per watt (CPUC
// DG Stats, level labeled) and permit fee, built by costHubRow() from the same
// data each city page renders. Before, it listed only the cost cities the
// hub's own grid did not already reach, as plain links with no figures.
//
// The set of links it renders (every publishable cost row in these counties)
// is mirrored in scripts/assert-city-links.mjs; change one and the other must
// follow.
// =============================================================================

export function RegionalCostCities({
  region,
  counties,
}: {
  region: string;
  counties: string[];
}) {
  const rows = getPublishableCityCostRows()
    .filter((row) => counties.includes(row.county))
    .sort((a, b) => a.city.localeCompare(b.city));

  if (rows.length === 0) return null;

  return (
    <div className='mb-12'>
      <h2 className='text-2xl font-bold text-foreground mb-3 tracking-tight'>
        Solar cost in {region} cities
      </h2>
      <p className='text-muted-foreground mb-5 leading-relaxed'>
        What owners in each {region} city reported paying per watt for solar (CPUC DG Stats,
        January 2025 to May 2026), with the city&rsquo;s utility, its community choice aggregator
        and its permit fee. Where fewer than 30 owners reported, the figure is the county&rsquo;s
        or wider, as labeled. Reported costs, not quotes.
      </p>
      <CostCityTable
        rows={rows.map(costHubRow)}
        caption={`${region}: reported median solar cost per watt, utility, CCA and permit fee by city`}
      />
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
