'use client';

import { Fragment, useId, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUp, ArrowUpDown, ChevronDown, ChevronRight, Download } from 'lucide-react';
import type {
  CostIndexRow,
  FeeStatus,
  IndexSourceKind,
  PermitPlatform,
} from '@/data/solar-cost-index';

// =============================================================================
// SolarCostIndexTable — the sortable, filterable table on
// /california-solar-cost-index.
//
// Rows arrive fully built from src/data/solar-cost-index.ts on the server, so
// this component only sorts, filters and shows/hides detail. It never computes
// or formats a figure of its own beyond what the row already carries, and the
// server render contains every row, so the table is readable with scripts off.
//
// Accessibility: a real <table> with a caption and column headers; sortable
// headers are buttons with aria-sort on the <th>; the result count is a polite
// live region; the scroll container is a focusable, labelled region so a
// keyboard user can scroll it sideways on a phone; the first column is sticky.
// =============================================================================

type SortKey = 'city' | 'county' | 'utility' | 'rate' | 'cca' | 'fee' | 'platform' | 'online' | 'checked';
type SortDir = 'asc' | 'desc';

const FEE_ORDER: Record<FeeStatus, number> = {
  published: 0,
  conflicting: 1,
  dated: 2,
  'not-published': 3,
  'not-retrievable': 4,
  unclassified: 5,
};

const PLATFORM_ORDER: Record<PermitPlatform, number> = {
  solarapp: 0,
  symbium: 1,
  'city-instant': 2,
  'none-named': 3,
  unconfirmed: 4,
  unclassified: 5,
};

const SOURCE_KIND_LABEL: Record<IndexSourceKind, string> = {
  permit: 'Permit',
  platform: 'Platform',
  utility: 'Utility',
  rate: 'Rate',
  cca: 'CCA',
};

// inline-block + vertical padding gives each link a 24px+ tap target (WCAG 2.5.8).
const link = 'inline-block py-1 text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';
const control =
  'w-full rounded-lg border border-input bg-white px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring';

function formatDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}`;
}

/** Nulls sort last in both directions, so "no figure" never tops a sorted fee column. */
function compareNullable(a: number | null, b: number | null, dir: SortDir): number {
  if (a === null && b === null) return 0;
  if (a === null) return 1;
  if (b === null) return -1;
  return dir === 'asc' ? a - b : b - a;
}

function compareRows(a: CostIndexRow, b: CostIndexRow, key: SortKey, dir: SortDir): number {
  const sign = dir === 'asc' ? 1 : -1;
  switch (key) {
    case 'rate':
      return compareNullable(a.rate.cents, b.rate.cents, dir) || a.city.localeCompare(b.city);
    case 'fee': {
      const byAmount = compareNullable(a.fee.amountUsd, b.fee.amountUsd, dir);
      if (byAmount) return byAmount;
      return FEE_ORDER[a.fee.status] - FEE_ORDER[b.fee.status] || a.city.localeCompare(b.city);
    }
    case 'platform':
      return sign * (PLATFORM_ORDER[a.platform.value] - PLATFORM_ORDER[b.platform.value]) || a.city.localeCompare(b.city);
    case 'county':
      return sign * a.county.localeCompare(b.county) || a.city.localeCompare(b.city);
    case 'utility':
      return sign * a.utility.display.localeCompare(b.utility.display) || a.city.localeCompare(b.city);
    case 'cca':
      if (!a.cca !== !b.cca) return a.cca ? -1 : 1;
      return sign * (a.cca?.name ?? '').localeCompare(b.cca?.name ?? '') || a.city.localeCompare(b.city);
    case 'online':
      return sign * a.online.label.localeCompare(b.online.label) || a.city.localeCompare(b.city);
    case 'checked':
      return sign * a.checked.localeCompare(b.checked) || a.city.localeCompare(b.city);
    case 'city':
    default:
      return sign * a.city.localeCompare(b.city);
  }
}

interface Filters {
  q: string;
  utility: string;
  fee: string;
  platform: string;
  cca: string;
}

const EMPTY_FILTERS: Filters = { q: '', utility: 'all', fee: 'all', platform: 'all', cca: 'all' };

function matches(row: CostIndexRow, f: Filters): boolean {
  const q = f.q.trim().toLowerCase();
  if (q && !`${row.city} ${row.county}`.toLowerCase().includes(q)) return false;
  if (f.utility !== 'all') {
    if (f.utility.startsWith('key:') && (row.utility.type === 'Mixed' || row.utility.key !== f.utility.slice(4))) return false;
    if (f.utility.startsWith('type:') && row.utility.type !== f.utility.slice(5)) return false;
  }
  if (f.fee !== 'all') {
    if (f.fee === 'other' ? !['conflicting', 'dated', 'unclassified'].includes(row.fee.status) : row.fee.status !== f.fee) return false;
  }
  if (f.platform !== 'all') {
    if (f.platform === 'automated' && !['solarapp', 'symbium', 'city-instant'].includes(row.platform.value)) return false;
    if (f.platform === 'none' && !['none-named', 'unconfirmed', 'unclassified'].includes(row.platform.value)) return false;
    if (!['automated', 'none'].includes(f.platform) && row.platform.value !== f.platform) return false;
  }
  if (f.cca === 'yes' && !row.cca) return false;
  if (f.cca === 'no' && row.cca) return false;
  return true;
}

function SourceLinks({ row }: { row: CostIndexRow }) {
  const seen: Partial<Record<IndexSourceKind, number>> = {};
  return (
    <ul className='flex flex-wrap gap-x-2 gap-y-1'>
      {row.sources.map((source) => {
        seen[source.kind] = (seen[source.kind] ?? 0) + 1;
        const n = seen[source.kind];
        return (
          <li key={`${source.kind}-${source.url}`}>
            <a href={source.url} target='_blank' rel='noopener noreferrer' className={link} title={source.label}>
              {SOURCE_KIND_LABEL[source.kind]}
              {n > 1 ? ` ${n}` : ''}
              <span className='sr-only'> source for {row.city}: {source.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function RowDetails({ row, colSpan, id }: { row: CostIndexRow; colSpan: number; id: string }) {
  return (
    <tr id={id} className='bg-muted/40'>
      <td colSpan={colSpan} className='px-4 py-4'>
        <div className='sticky left-4 max-w-[min(48rem,calc(100vw-4rem))] space-y-3 text-sm text-foreground/85'>
          <dl className='space-y-3'>
            <div>
              <dt className='font-semibold text-foreground'>What {row.city} publishes on the permit fee</dt>
              <dd>{row.permitFeeNote}</dd>
            </div>
            {row.fee.breakdown && (
              <div>
                <dt className='font-semibold text-foreground'>What the index figure covers</dt>
                <dd>{row.fee.amountDisplay} = {row.fee.breakdown}</dd>
              </div>
            )}
            {row.fee.extra && (
              <div>
                <dt className='font-semibold text-foreground'>Other figures on the same page</dt>
                <dd>{row.fee.extra}</dd>
              </div>
            )}
            <div>
              <dt className='font-semibold text-foreground'>Filing online</dt>
              <dd>{row.permitOnlineNote}</dd>
            </div>
            {row.platform.note && (
              <div>
                <dt className='font-semibold text-foreground'>Instant permitting</dt>
                <dd>{row.platform.note}</dd>
              </div>
            )}
            {row.utility.note && (
              <div>
                <dt className='font-semibold text-foreground'>More than one utility</dt>
                <dd>{row.utility.note}</dd>
              </div>
            )}
            <div>
              <dt className='font-semibold text-foreground'>Sources</dt>
              <dd>
                <ul className='mt-1 list-disc space-y-1 pl-5 [overflow-wrap:anywhere]'>
                  {row.sources.map((source) => (
                    <li key={`${source.kind}-${source.url}`}>
                      {SOURCE_KIND_LABEL[source.kind]}:{' '}
                      <a href={source.url} target='_blank' rel='noopener noreferrer' className={link}>
                        {source.label}
                      </a>{' '}
                      &mdash; checked {formatDate(source.verifiedAt)}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
          <p>
            <Link href={row.cityPath} className={`${link} font-medium`}>
              Read the full {row.city} solar cost page
            </Link>
          </p>
        </div>
      </td>
    </tr>
  );
}

const COLUMNS: { key: SortKey; label: string; className?: string }[] = [
  { key: 'city', label: 'City' },
  { key: 'county', label: 'County' },
  { key: 'utility', label: 'Electric utility' },
  { key: 'rate', label: 'Utility avg. rate' },
  { key: 'cca', label: 'CCA (generation)' },
  { key: 'fee', label: 'City permit fee' },
  { key: 'platform', label: 'Instant permitting' },
  { key: 'online', label: 'File online' },
  { key: 'checked', label: 'Checked' },
];

export function SolarCostIndexTable({
  rows,
  csvHref,
}: {
  rows: CostIndexRow[];
  csvHref: string;
}) {
  const uid = useId();
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [sort, setSort] = useState<{ key: SortKey; dir: SortDir }>({ key: 'city', dir: 'asc' });
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const utilityOptions = useMemo(() => {
    const iou = new Map<string, string>();
    for (const row of rows) {
      if (row.utility.type === 'IOU') iou.set(row.utility.key, row.utility.display.split(';')[0]);
    }
    return [...iou.entries()].sort((a, b) => a[1].localeCompare(b[1]));
  }, [rows]);

  const visible = useMemo(
    () => rows.filter((row) => matches(row, filters)).sort((a, b) => compareRows(a, b, sort.key, sort.dir)),
    [rows, filters, sort],
  );

  const set = (key: keyof Filters) => (event: { target: { value: string } }) =>
    setFilters((prev) => ({ ...prev, [key]: event.target.value }));

  const toggleSort = (key: SortKey) =>
    setSort((prev) => (prev.key === key ? { key, dir: prev.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' }));

  const filtered = visible.length !== rows.length;
  const colSpan = COLUMNS.length + 1;
  const captionId = `${uid}-caption`;

  return (
    <div className='not-prose'>
      <form
        className='grid grid-cols-1 gap-3 rounded-xl border border-border bg-card p-4 sm:grid-cols-2 lg:grid-cols-5'
        onSubmit={(event) => event.preventDefault()}
        aria-label='Filter the cost index'
      >
        <div>
          <label htmlFor={`${uid}-q`} className='mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
            City or county
          </label>
          <input id={`${uid}-q`} type='search' value={filters.q} onChange={set('q')} placeholder='e.g. Fresno' className={control} />
        </div>
        <div>
          <label htmlFor={`${uid}-utility`} className='mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
            Utility
          </label>
          <select id={`${uid}-utility`} value={filters.utility} onChange={set('utility')} className={control}>
            <option value='all'>All utilities</option>
            {utilityOptions.map(([key, name]) => (
              <option key={key} value={`key:${key}`}>{name}</option>
            ))}
            <option value='type:POU'>Publicly owned utilities</option>
            <option value='type:Mixed'>Depends on address</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${uid}-fee`} className='mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
            Permit fee
          </label>
          <select id={`${uid}-fee`} value={filters.fee} onChange={set('fee')} className={control}>
            <option value='all'>Any</option>
            <option value='published'>Fee published</option>
            <option value='not-published'>No figure published</option>
            <option value='not-retrievable'>Schedule not readable</option>
            <option value='other'>Dated or conflicting</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${uid}-platform`} className='mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
            Instant permitting
          </label>
          <select id={`${uid}-platform`} value={filters.platform} onChange={set('platform')} className={control}>
            <option value='all'>Any</option>
            <option value='automated'>Any instant platform</option>
            <option value='solarapp'>SolarAPP+</option>
            <option value='symbium'>Symbium</option>
            <option value='city-instant'>City&apos;s own</option>
            <option value='none'>None named or not confirmed</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${uid}-cca`} className='mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
            Community choice aggregator
          </label>
          <select id={`${uid}-cca`} value={filters.cca} onChange={set('cca')} className={control}>
            <option value='all'>Any</option>
            <option value='yes'>Served by a CCA</option>
            <option value='no'>No CCA recorded</option>
          </select>
        </div>
      </form>

      <div className='mt-3 flex flex-wrap items-center justify-between gap-3 text-sm'>
        <p aria-live='polite' className='text-muted-foreground'>
          Showing <strong className='text-foreground'>{visible.length}</strong> of {rows.length} cities
          {filtered ? ' (filtered)' : ''}.
        </p>
        <div className='flex flex-wrap items-center gap-3'>
          {filtered && (
            <button
              type='button'
              onClick={() => setFilters(EMPTY_FILTERS)}
              className='rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:border-primary/50'
            >
              Clear filters
            </button>
          )}
          <a
            href={csvHref}
            download
            className='inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90'
          >
            <Download className='h-4 w-4' aria-hidden='true' />
            Download CSV (all {rows.length} cities)
          </a>
        </div>
      </div>

      <div
        role='region'
        aria-labelledby={captionId}
        tabIndex={0}
        // `relative` makes this the containing block for the sr-only spans in
        // the cells, so they scroll with the table instead of widening the page.
        className='relative mt-3 max-h-[80vh] overflow-auto rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-ring'
      >
        <table className='w-full min-w-[72rem] border-collapse text-left text-sm'>
          <caption id={captionId} className='px-4 py-3 text-left text-sm text-muted-foreground'>
            California Solar Cost Index: city permit fee, instant permitting, electric utility and CCA for{' '}
            {rows.length} cities. Sort by any column heading; open a row for the city&apos;s own wording and every source.
          </caption>
          <thead className='sticky top-0 z-20 bg-muted text-xs uppercase tracking-wide text-muted-foreground'>
            <tr>
              {COLUMNS.map((col, index) => {
                const active = sort.key === col.key;
                const Icon = !active ? ArrowUpDown : sort.dir === 'asc' ? ArrowUp : ArrowDown;
                return (
                  <th
                    key={col.key}
                    scope='col'
                    aria-sort={active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : undefined}
                    className={`border-b border-border px-3 py-2 font-semibold ${index === 0 ? 'sticky left-0 z-30 bg-muted' : ''}`}
                  >
                    <button
                      type='button'
                      onClick={() => toggleSort(col.key)}
                      className='inline-flex items-center gap-1 whitespace-nowrap uppercase tracking-wide hover:text-foreground'
                    >
                      {col.label}
                      <Icon className='h-3.5 w-3.5' aria-hidden='true' />
                    </button>
                  </th>
                );
              })}
              <th scope='col' className='border-b border-border px-3 py-2 font-semibold'>
                Sources
              </th>
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 && (
              <tr>
                <td colSpan={colSpan} className='px-4 py-6 text-center text-muted-foreground'>
                  No city matches these filters.
                </td>
              </tr>
            )}
            {visible.map((row) => {
              const isOpen = Boolean(open[row.slug]);
              const detailsId = `${uid}-${row.slug}-details`;
              return (
                <Fragment key={row.slug}>
                  {/* id: each city page links here as #city-<slug> (2026-09-24). */}
                  <tr id={`city-${row.slug}`} className='scroll-mt-24 border-b border-border align-top target:bg-primary/5'>
                    <th scope='row' className='sticky left-0 z-10 bg-card px-3 py-3 text-left font-normal'>
                      <Link href={row.cityPath} className={`${link} font-semibold`}>
                        {row.city}
                      </Link>
                      <button
                        type='button'
                        onClick={() => setOpen((prev) => ({ ...prev, [row.slug]: !prev[row.slug] }))}
                        aria-expanded={isOpen}
                        aria-controls={isOpen ? detailsId : undefined}
                        className='mt-1 flex min-h-6 items-center gap-1 py-1 text-xs text-muted-foreground hover:text-foreground'
                      >
                        {isOpen ? (
                          <ChevronDown className='h-3.5 w-3.5' aria-hidden='true' />
                        ) : (
                          <ChevronRight className='h-3.5 w-3.5' aria-hidden='true' />
                        )}
                        {isOpen ? 'Hide' : 'Details'}
                        <span className='sr-only'> for {row.city}</span>
                      </button>
                    </th>
                    <td className='px-3 py-3 text-foreground/85'>{row.county}</td>
                    <td className='px-3 py-3'>
                      <span className='block text-foreground'>{row.utility.display}</span>
                      <span className='block text-xs text-muted-foreground'>{row.utility.typeLabel}</span>
                    </td>
                    <td className='whitespace-nowrap px-3 py-3 text-foreground/85'>
                      {row.rate.display}
                    </td>
                    <td className='px-3 py-3 text-foreground/85'>{row.cca?.name ?? <span className='text-muted-foreground'>None recorded</span>}</td>
                    <td className='max-w-[16rem] px-3 py-3'>
                      {row.fee.amountDisplay ? (
                        <>
                          <span className='block font-semibold text-foreground'>{row.fee.amountDisplay}</span>
                          <span className='block text-xs text-muted-foreground'>{row.fee.basis}</span>
                        </>
                      ) : (
                        <>
                          <span className='block text-foreground/85'>{row.fee.statusLabel}</span>
                          {row.fee.extra && <span className='block text-xs text-muted-foreground'>{row.fee.extra}</span>}
                        </>
                      )}
                    </td>
                    <td className='px-3 py-3 text-foreground/85'>{row.platform.label}</td>
                    <td className='px-3 py-3 text-foreground/85'>{row.online.label}</td>
                    <td className='whitespace-nowrap px-3 py-3 text-foreground/85'>
                      <time dateTime={row.checked}>{formatDate(row.checked)}</time>
                    </td>
                    <td className='px-3 py-3 text-xs'>
                      <SourceLinks row={row} />
                    </td>
                  </tr>
                  {isOpen && <RowDetails row={row} colSpan={colSpan} id={detailsId} />}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className='mt-2 text-xs text-muted-foreground sm:hidden'>Scroll the table sideways to see every column.</p>
    </div>
  );
}

/** Small copy-to-clipboard control for the citation box. */
export function CopyCitationButton({ text, label = 'Copy citation' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type='button'
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {
          setCopied(false);
        }
      }}
      className='rounded-lg border border-border bg-white px-3 py-1.5 text-sm font-medium text-foreground hover:border-primary/50'
    >
      <span aria-live='polite'>{copied ? 'Copied' : label}</span>
    </button>
  );
}
