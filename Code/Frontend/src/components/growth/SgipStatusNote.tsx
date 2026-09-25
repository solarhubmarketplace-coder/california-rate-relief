import Link from 'next/link';
import { FACTS, formatFactDate } from '@/data/facts';

// 2026-09-24 (plan item 5.1): the category statuses and the "as of" date read
// from src/data/facts.ts (sgipStatus), so this note changes when the record
// does instead of being retyped.
// Categories the tracker reports in all four IOU administrator columns (CSE,
// SCE, SCG, PG&E). The San Joaquin Valley categories appear in only two
// columns, so they are left out of the four-column sentence below.
const FOUR_COLUMN_LABELS: Partial<Record<keyof typeof FACTS.sgipStatus.value, string>> = {
  smallResidentialStorage: 'Small Residential Storage',
  residentialEquityRatepayer: 'ratepayer-funded Residential Solar and Storage Equity',
  equityResiliency: 'Equity Resiliency',
  largeScaleStorage: 'Large-Scale Storage',
  nonResidentialStorageEquity: 'Non-Residential Storage Equity',
  generation: 'Generation',
};

function joinList(items: string[]): string {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

export function SgipStatusNote() {
  const status = FACTS.sgipStatus.value;
  const keys = Object.keys(status) as Array<keyof typeof status>;
  const closed = keys
    .filter((k) => FOUR_COLUMN_LABELS[k] && status[k] === 'closed')
    .map((k) => FOUR_COLUMN_LABELS[k] as string);
  const ab209Open = keys
    .filter((k) => k.startsWith('residentialEquityAb209'))
    .some((k) => status[k] === 'open' || status[k] === 'waitlist');
  return (
    <aside className="my-6 rounded-xl border border-status-warning/30 bg-status-warning/10 p-5 text-sm text-foreground">
      <p className="font-semibold">SGIP correction · September 10, 2026</p>
      <p className="mt-2">
        Earlier rebate amounts and general eligibility statements on this page
        should not be used as a current funding offer. As of{' '}
        {formatFactDate(FACTS.sgipStatus.checkedAt)}, the official tracker
        shows {joinList(closed)} closed in the CSE, SCE, SCG and PG&amp;E
        columns.
        {ab209Open ? ' Some residential AB 209 categories are open or waitlisted.' : ''}{' '}
        An administrator column does not establish eligibility for every
        electric customer.
      </p>
      <p className="mt-2">
        Check the exact category in the{' '}
        <a
          className="underline"
          href={FACTS.sgipStatus.sourceUrl}
        >
          official tracker
        </a>{' '}
        and confirm project eligibility and any reservation with the
        administrator. The{' '}
        <Link
          className="underline"
          href="/battery/sgip-battery-rebate-california"
        >
          current residential SGIP guide
        </Link>{' '}
        distinguishes the categories. A waitlist or remaining balance does not
        promise a rebate.
      </p>
    </aside>
  );
}
