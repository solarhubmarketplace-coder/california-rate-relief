import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { Search } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { ReviewCardGrid } from '@/components/reviews/ReviewCardGrid';
import { Pagination } from '@/components/reviews/Pagination';
import { reviews, REVIEWS_PER_PAGE, TOTAL_PAGES } from '@/lib/grh-reviews-data';

// =============================================================================
// /reviews — paginated index, page 1
// =============================================================================
// First 20 cards render here; cards 21+ live at /reviews/page/2..N. Cuts
// initial-load size from ~1MB (full 119 cards) to ~200KB.
// =============================================================================

export const metadata: Metadata = {
  title: 'Product Reviews & Comparisons | GreenReviewsHub',
  description:
    'Expert product reviews and buying guides for portable power stations, e-bikes, mini splits, electric lawn mowers, smart thermostats, and whole house generators. Tested and verified for 2026.',
  alternates: {
    canonical: 'https://greenreviewshub.com/reviews',
  },
  openGraph: {
    title: 'Product Reviews & Comparisons | GreenReviewsHub',
    description: 'Expert product reviews and buying guides — tested and verified for 2026.',
    type: 'website',
    url: 'https://greenreviewshub.com/reviews',
    siteName: 'Green Reviews Hub',
  },
};

const grhOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Green Reviews Hub',
  url: 'https://greenreviewshub.com',
  description:
    'Independent buying guides for portable power stations, e-bikes, mini splits, smart thermostats, and other green-energy products.',
};

const grhWebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Green Reviews Hub',
  url: 'https://greenreviewshub.com',
  publisher: { '@type': 'Organization', name: 'Green Reviews Hub' },
};

function buildCollectionSchema() {
  // Schema lists EVERY review — so Google sees the full catalog from the
  // canonical hub page even though we paginate the visual rendering.
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Product Reviews & Buying Guides',
    description:
      'Expert reviews and comparisons of portable power stations, solar generators, and home backup systems for 2026.',
    url: 'https://greenreviewshub.com/reviews',
    publisher: {
      '@type': 'Organization',
      name: 'GreenReviewsHub',
      url: 'https://greenreviewshub.com',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: reviews.map((review, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://greenreviewshub.com/reviews/${review.slug}`,
        name: review.title,
      })),
    },
  };
}

export default function ReviewsPage() {
  const jsonLd = buildCollectionSchema();
  const pageItems = reviews.slice(0, REVIEWS_PER_PAGE);

  return (
    <ReviewLayout>
      <ReviewHeader />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(grhOrgSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(grhWebsiteSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* rel=next on page 1 only — page-N pages will set their own prev/next */}
      {TOTAL_PAGES > 1 && (
        <link rel='next' href='https://greenreviewshub.com/reviews/page/2' />
      )}
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            <div className='mb-12 text-center'>
              <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4'>
                <Search className='h-4 w-4' />
                Reviews & Guides
              </div>
              <h1
                className='text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight'
                style={{ color: '#f5f5f5' }}
              >
                Product Reviews & Buying Guides
              </h1>
              <LastReviewedStamp
                date='2026-04-24'
                variant='reviewed'
                palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }}
              />
              <p className='text-lg max-w-2xl mx-auto' style={{ color: '#d4d4d8' }}>
                Expert reviews and comparisons of portable power stations, e-bikes,
                mini splits, electric lawn mowers, smart thermostats, generators,
                and more. Tested and verified for 2026.
              </p>
              <p className='text-sm mt-3' style={{ color: '#71717a' }}>
                Showing {1}–{Math.min(REVIEWS_PER_PAGE, reviews.length)} of {reviews.length} reviews
              </p>
            </div>

            <ReviewCardGrid items={pageItems} />

            <Pagination current={1} total={TOTAL_PAGES} />
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
