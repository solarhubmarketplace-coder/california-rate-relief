import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header as CRRHeader } from '@/components/landing/Header';
import { Footer as CRRFooter } from '@/components/landing/Footer';
import { formatLongDate } from '@/components/shared/AuthorBio';
import { correctionsNewestFirst } from '@/lib/corrections';

// =============================================================================
// /corrections — CRR public corrections log
// =============================================================================
// CRR-only page. It is not in middleware's isSharedTrustPath allowlist, so the
// other four hosts 404 it and this file does not need host detection.
//
// The list is rendered from the hand-maintained registry in src/lib/corrections.ts.
// No database, no fetch, no data source at build time.
// =============================================================================

export const metadata: Metadata = {
  title: 'Corrections — California Rate Relief',
  description:
    'What we got wrong and when we fixed it. California Rate Relief logs material corrections to utility, rate, and incentive claims with the date each fix shipped.',
  alternates: { canonical: '/corrections' },
};

export default function CorrectionsPage() {
  const corrections = correctionsNewestFirst();

  return (
    <PublicLayout>
      <CRRHeader />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2'>
              <Link href='/' className='hover:text-primary'>Home</Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground'>Corrections</span>
            </nav>

            <header className='mb-10'>
              <h1 className='text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight'>
                Corrections
              </h1>
              <p className='text-lg text-muted-foreground'>
                What we got wrong, and the day we fixed it.
              </p>
            </header>

            <div className='space-y-6 text-foreground/80 mb-12'>
              <p>
                We publish utility rates, export compensation rules, and incentive status. Those
                move. A tariff gets revised, a commission decision lands, a credit changes, and a
                sentence that was accurate when we wrote it stops being accurate.
              </p>
              <p>
                When that happens we fix the page and log it here with the date. This list covers
                material corrections only &mdash; a factual claim a reader could have acted on. Copy
                edits and typo fixes do not get an entry.
              </p>
              <p>
                Spot something wrong? Send it to us through our{' '}
                <Link href='/contact' className='text-primary underline'>contact page</Link> and tell
                us which page it is on. How we research and verify what we publish is described on
                our <Link href='/about' className='text-primary underline'>about page</Link>.
              </p>
            </div>

            <h2 className='text-2xl font-bold text-foreground mb-6'>
              Correction log
            </h2>

            {corrections.length === 0 ? (
              <p className='text-muted-foreground'>
                No material corrections have been logged yet.
              </p>
            ) : (
              <ol className='space-y-5 list-none pl-0'>
                {corrections.map((c) => (
                  <li
                    key={c.id}
                    id={c.id}
                    className='rounded-xl border border-border bg-card p-5 scroll-mt-24'
                  >
                    <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3'>
                      <time
                        dateTime={c.date}
                        className='text-sm font-semibold text-primary tabular-nums'
                      >
                        {formatLongDate(c.date)}
                      </time>
                      <span className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                        {c.page}
                      </span>
                    </div>
                    <p className='text-foreground font-medium leading-relaxed mb-2'>
                      {c.what}
                    </p>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      <span className='font-semibold text-foreground/70'>Why: </span>
                      {c.why}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </article>
        </div>
      </main>
      <CRRFooter />
    </PublicLayout>
  );
}
