import Link from 'next/link';
import {
  cityCostPath,
  getPublishableCityCostRows,
  type CityCostRow,
} from '@/data/city-cost-data';

const priorityCounties = new Set(['Riverside County', 'San Diego County']);

/** A compact county sibling route for the city-cost template. */
export function NearbyCostCities({ row }: { row: CityCostRow }) {
  if (!priorityCounties.has(row.county)) return null;

  const siblings = getPublishableCityCostRows()
    .filter((candidate) => candidate.county === row.county && candidate.slug !== row.slug)
    .sort((left, right) => left.city.localeCompare(right.city))
    .slice(0, 4);

  if (!siblings.length) return null;

  return (
    <aside className='not-prose my-10 rounded-2xl border border-border bg-muted/30 p-5 sm:p-7'>
      <h2 className='text-xl font-bold text-foreground'>Other {row.county} project guides</h2>
      <p className='mt-2 text-sm leading-6 text-foreground/75'>
        These pages cover each city&apos;s published permit process and the bill context to
        check before comparing a project.
      </p>
      <ul className='mt-4 grid gap-2 sm:grid-cols-2'>
        {siblings.map((sibling) => (
          <li key={sibling.slug}>
            <Link
              href={cityCostPath(sibling.slug)}
              className='font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary'
            >
              Solar cost and project checks in {sibling.city}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
