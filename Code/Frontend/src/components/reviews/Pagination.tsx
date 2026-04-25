import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// =============================================================================
// Pagination — numbered page navigation for /reviews paginated index
// =============================================================================
// Page 1 lives at /reviews. Pages 2+ live at /reviews/page/2 etc.
// Renders Prev/Next + numbered page links + (current) badge.
// =============================================================================

interface Props {
  current: number;       // 1-indexed
  total: number;         // total pages
  basePath?: string;     // default '/reviews'
}

function pageHref(n: number, basePath: string): string {
  if (n <= 1) return basePath;
  return `${basePath}/page/${n}`;
}

function range(start: number, end: number): number[] {
  const r = [];
  for (let i = start; i <= end; i++) r.push(i);
  return r;
}

/**
 * Build the displayed page numbers. We show:
 *   - Always 1
 *   - Current ± 1
 *   - Always last
 *   - Ellipsis as 0 markers between gaps
 */
function pageList(current: number, total: number): Array<number | 'gap'> {
  if (total <= 7) return range(1, total);
  const set = new Set<number>([1, total, current - 1, current, current + 1]);
  const arr = Array.from(set).filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out: Array<number | 'gap'> = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] - arr[i - 1] > 1) out.push('gap');
    out.push(arr[i]);
  }
  return out;
}

export function Pagination({ current, total, basePath = '/reviews' }: Props) {
  if (total <= 1) return null;
  const pages = pageList(current, total);
  return (
    <nav
      className='flex items-center justify-center gap-2 my-10 flex-wrap'
      aria-label='Pagination'
    >
      {current > 1 && (
        <Link
          href={pageHref(current - 1, basePath)}
          rel='prev'
          className='inline-flex items-center gap-1 px-3 py-2 rounded-md border text-sm font-semibold'
          style={{ borderColor: 'hsl(150, 10%, 18%)', color: '#f5f5f5' }}
        >
          <ChevronLeft className='h-4 w-4' aria-hidden='true' />
          Previous
        </Link>
      )}

      {pages.map((p, idx) =>
        p === 'gap' ? (
          <span key={`gap-${idx}`} className='px-2' style={{ color: '#71717a' }} aria-hidden='true'>
            …
          </span>
        ) : p === current ? (
          <span
            key={p}
            className='px-3 py-2 rounded-md border text-sm font-bold'
            style={{ borderColor: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}
            aria-current='page'
          >
            {p}
          </span>
        ) : (
          <Link
            key={p}
            href={pageHref(p, basePath)}
            className='px-3 py-2 rounded-md border text-sm font-semibold'
            style={{ borderColor: 'hsl(150, 10%, 18%)', color: '#d4d4d8' }}
          >
            {p}
          </Link>
        )
      )}

      {current < total && (
        <Link
          href={pageHref(current + 1, basePath)}
          rel='next'
          className='inline-flex items-center gap-1 px-3 py-2 rounded-md border text-sm font-semibold'
          style={{ borderColor: 'hsl(150, 10%, 18%)', color: '#f5f5f5' }}
        >
          Next
          <ChevronRight className='h-4 w-4' aria-hidden='true' />
        </Link>
      )}
    </nav>
  );
}
