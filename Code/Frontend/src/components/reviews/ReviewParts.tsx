import { SourceChip } from '@/components/trust/SourceChip';

// =============================================================================
// Small presentational pieces shared by the installer and panel review pages
// written in the topical-authority pass (2026-09-23).
//
// Cite: the publisher · date chip placed right after a sourced claim.
// SourceList: the numbered sources block at the foot of a review, one entry
// per primary source the page cites, each with the date it was checked.
//
// Neither component looks anything up. Every URL, label and date is supplied
// by the page, which is where the claim and its source live together.
// =============================================================================

export interface ReviewSource {
  /** Publisher and document name as the reader should see it. */
  name: string;
  url: string;
  /** What on the page this source supports. */
  supports: string;
  /** ISO date the source was checked. */
  checked: string;
}

export function Cite({ href, date, publisher }: { href: string; date: string; publisher?: string }) {
  return (
    <>
      {' '}
      <SourceChip href={href} date={date} publisher={publisher} />
    </>
  );
}

export function SourceList({ sources, id = 'sources' }: { sources: ReviewSource[]; id?: string }) {
  if (!sources.length) return null;
  return (
    <section id={id} className='mt-10 scroll-mt-24 border-t border-border pt-8'>
      <h2 className='mb-1 text-lg font-bold text-foreground'>Sources</h2>
      <p className='mb-4 text-sm text-muted-foreground'>
        Company facts, complaint counts and court records change. Each figure above traces to one
        of these, checked on the date shown.
      </p>
      <ol className='list-decimal space-y-3 pl-5 text-sm'>
        {sources.map((s) => (
          <li key={s.url} className='text-foreground/75'>
            <a
              href={s.url}
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-primary hover:underline'
            >
              {s.name}
            </a>{' '}
            <SourceChip href={s.url} date={s.checked} />
            <span className='text-muted-foreground'> — {s.supports}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
