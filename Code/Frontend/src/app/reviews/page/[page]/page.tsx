import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { ChevronRight, Search } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { ReviewCardGrid } from '@/components/reviews/ReviewCardGrid';
import { Pagination } from '@/components/reviews/Pagination';
import { reviews, REVIEWS_PER_PAGE, TOTAL_PAGES } from '@/lib/grh-reviews-data';

// =============================================================================
// /reviews/page/[page] — paginated index, page 2..N
// =============================================================================

interface PageProps { params: Promise<{ page: string }> }

export async function generateStaticParams() {
  // Pre-generate all pagination pages at build time so they're static-served.
  // We don't generate page 1 here — that lives at /reviews.
  return Array.from({ length: TOTAL_PAGES - 1 }, (_, i) => ({ page: String(i + 2) }));
}

function parsePage(raw: string): number | null {
  const n = parseInt(raw, 10);
  if (!Number.isInteger(n) || n < 2 || n > TOTAL_PAGES) return null;
  return n;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { page } = await params;
  const n = parsePage(page);
  if (!n) return {};
  return {
    title: `Product Reviews — Page ${n} | GreenReviewsHub`,
    description: `Page ${n} of GreenReviewsHub product reviews and buying guides.`,
    alternates: {
      canonical: `https://greenreviewshub.com/reviews/page/${n}`,
    },
    robots: {
      // Pagination pages are indexable but not as important as page 1.
      // We let Google decide; we just don't override defaults.
      index: true,
      follow: true,
    },
  };
}

export default async function PaginatedReviewsPage({ params }: PageProps) {
  const { page } = await params;
  const n = parsePage(page);
  if (!n) return notFound();

  const start = (n - 1) * REVIEWS_PER_PAGE;
  const pageItems = reviews.slice(start, start + REVIEWS_PER_PAGE);
  const prevHref = n === 2 ? 'https://greenreviewshub.com/reviews' : `https://greenreviewshub.com/reviews/page/${n - 1}`;
  const nextHref = n < TOTAL_PAGES ? `https://greenreviewshub.com/reviews/page/${n + 1}` : null;

  return (
    <ReviewLayout>
      <ReviewHeader />
      <link rel='prev' href={prevHref} />
      {nextHref && <link rel='next' href={nextHref} />}
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            <nav
              className='mb-6 text-sm flex items-center gap-2 flex-wrap'
              style={{ color: '#71717a' }}
              aria-label='Breadcrumb'
            >
              <Link href='/reviews' style={{ color: '#d4d4d8' }}>Reviews</Link>
              <ChevronRight className='h-3 w-3' />
              <span style={{ color: '#f5f5f5' }}>Page {n}</span>
            </nav>

            <div className='mb-12 text-center'>
              <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4'>
                <Search className='h-4 w-4' />
                Reviews & Guides
              </div>
              <h1
                className='text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight'
                style={{ color: '#f5f5f5' }}
              >
                Product Reviews & Buying Guides — Page {n}
              </h1>
              <p className='text-lg max-w-2xl mx-auto' style={{ color: '#d4d4d8' }}>
                Page {n} of {TOTAL_PAGES}. Independent reviews of portable power stations, e-bikes, mini splits, generators, and other green-energy gear.
              </p>
              <p className='text-sm mt-3' style={{ color: '#71717a' }}>
                Showing {start + 1}–{Math.min(start + REVIEWS_PER_PAGE, reviews.length)} of {reviews.length} reviews
              </p>
            </div>

            <ReviewCardGrid items={pageItems} />

            <Pagination current={n} total={TOTAL_PAGES} />
          </div>
        </div>
      </main>
      <ReviewFooter />
      <div className='container mx-auto px-4 max-w-3xl'>
        <TrustedSources
          domain='grh'
          variant='compact'
          palette={{
            fg: '#f5f5f5',
            muted: '#d4d4d8',
            mutedFg: '#71717a',
            accent: '#22c55e',
            cardBg: 'hsl(150, 15%, 9%)',
            cardBorder: 'hsl(150, 10%, 18%)',
          }}
        />
      </div>
      <div className='container mx-auto px-4 max-w-3xl'>
        <AuthorBio
          domain='grh'
          palette={{
            fg: '#f5f5f5',
            muted: '#d4d4d8',
            mutedFg: '#71717a',
            accent: '#22c55e',
            cardBg: 'hsl(150, 15%, 9%)',
            cardBorder: 'hsl(150, 10%, 18%)',
          }}
        />
      </div>
    </ReviewLayout>
  );
}
