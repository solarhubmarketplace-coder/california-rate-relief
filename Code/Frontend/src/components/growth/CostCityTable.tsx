import Link from 'next/link';
import type { CostHubRow } from '@/lib/city-cost-content';

// A table of /solar-cost city pages: city, utility, CCA, the reported median
// cost per watt (with the level it comes from) and the permit fee. Used on the
// /solar-cost index and in the regional hubs' cost block (RegionalCostCities).
// Rows are built on the server by costHubRow() in src/lib/city-cost-content.ts,
// which reads the same data as each city page, so a table cell cannot say
// something the city page does not. Server component.

const link = 'font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

export function CostCityTable({ rows, caption }: { rows: CostHubRow[]; caption: string }) {
  if (rows.length === 0) return null;
  return (
    <div className='not-prose overflow-x-auto rounded-xl border border-border' role='region' aria-label={caption} tabIndex={0}>
      <table className='w-full text-sm'>
        <caption className='px-4 py-3 text-left text-sm text-muted-foreground'>{caption}</caption>
        <thead className='bg-muted/50'>
          <tr>
            <th scope='col' className='sticky left-0 z-10 bg-muted/50 px-3 py-2 text-left font-semibold text-foreground'>City</th>
            <th scope='col' className='px-3 py-2 text-left font-semibold text-foreground'>Utility</th>
            <th scope='col' className='px-3 py-2 text-left font-semibold text-foreground'>CCA</th>
            <th scope='col' className='px-3 py-2 text-left font-semibold text-foreground'>Median reported cost</th>
            <th scope='col' className='px-3 py-2 text-left font-semibold text-foreground'>Permit fee</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.slug} className='border-t border-border align-top'>
              <th scope='row' className='sticky left-0 z-10 bg-card px-3 py-2 text-left font-normal'>
                <Link href={row.path} className={link}>
                  {row.city}
                </Link>
              </th>
              <td className='px-3 py-2 text-foreground/85'>{row.utility}</td>
              <td className='px-3 py-2 text-foreground/85'>{row.cca ?? <span className='text-muted-foreground'>None recorded</span>}</td>
              <td className='whitespace-nowrap px-3 py-2'>
                <span className='font-semibold text-foreground'>{row.perWatt}</span>{' '}
                <span className='text-xs text-muted-foreground'>
                  {row.level}, {row.n.toLocaleString('en-US')} reports
                </span>
              </td>
              <td className='px-3 py-2'>
                {row.feeIsFigure ? (
                  <span className='font-semibold text-foreground'>
                    {row.fee}
                    {row.feeAboveLimit ? <span className='ml-1 text-xs font-normal text-muted-foreground'>(above $450)</span> : null}
                  </span>
                ) : (
                  <span className='text-foreground/70'>{row.fee}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
