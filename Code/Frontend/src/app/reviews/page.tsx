import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { Search, Battery, Bike, Wind, Sprout, Thermometer, Zap, ArrowRight, Award, ShieldCheck, Clock } from 'lucide-react';
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
  title: 'GreenReviewsHub: 119 Tested Product Reviews & Buying Guides (2026)',
  description:
    '119 hands-on reviews of portable power stations, e-bikes, mini splits, electric lawn equipment, smart thermostats, and whole house generators. Independent testing — no manufacturer payouts. Updated April 2026.',
  alternates: {
    canonical: 'https://greenreviewshub.com/reviews',
  },
  openGraph: {
    title: 'GreenReviewsHub: 119 Tested Product Reviews & Buying Guides (2026)',
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
            {/* ========== ABOVE-THE-FOLD HERO ========== */}
            <section className='mb-12'>
              <div className='rounded-2xl overflow-hidden border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-[#0a0a0a] to-[#0a0a0a] shadow-2xl'>
                <div className='grid md:grid-cols-2 gap-0'>
                  <div className='p-6 md:p-10 flex flex-col justify-center'>
                    <div className='inline-flex items-center gap-2 bg-emerald-500/15 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit'>
                      <Award className='h-3 w-3' />
                      119 Reviews · Updated April 26, 2026
                    </div>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>
                      The honest review hub for clean-energy gear.
                    </h1>
                    <p className='text-base md:text-lg mb-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
                      We test portable power stations, e-bikes, mini splits, electric lawn equipment,
                      smart thermostats, and whole-house generators in real homes — then publish what
                      actually works. No manufacturer payouts. No fake hype.
                    </p>
                    <div className='flex flex-wrap gap-3'>
                      <a
                        href='#featured-reviews'
                        className='inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg transition-colors'
                      >
                        See Best Picks <ArrowRight className='h-4 w-4' />
                      </a>
                      <a
                        href='/reviews/best-electric-bikes'
                        className='inline-flex items-center gap-2 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 font-semibold px-6 py-3 rounded-lg transition-colors'
                      >
                        AI Showdown: Top E-Bike →
                      </a>
                    </div>
                  </div>
                  <div className='relative bg-white flex items-center justify-center p-4 md:p-8 min-h-[260px]'>
                    <span className='absolute top-4 left-4 text-xs font-bold tracking-wider text-yellow-900 bg-yellow-400 px-3 py-1.5 rounded-full uppercase shadow z-10'>
                      ★ Editor&apos;s Pick 2026
                    </span>
                    <img
                      src='https://cdn11.bigcommerce.com/s-6ahcroh/images/stencil/1280x1280/products/2760/8835/Aventure-3_Matcha_Side_1__89416.1747331054.jpg'
                      alt='Aventon Aventure 3 — top-rated e-bike of 2026'
                      className='w-full h-auto max-h-[360px] object-contain'
                      loading='eager'
                      fetchPriority='high'
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ========== TRUST STRIP ========== */}
            <div className='mb-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-center'>
              <div className='border rounded-lg p-4' style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <div className='text-2xl font-extrabold text-emerald-400'>119</div>
                <div className='text-xs' style={{ color: '#a1a1aa' }}>Products tested</div>
              </div>
              <div className='border rounded-lg p-4' style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <div className='text-2xl font-extrabold text-emerald-400'>$0</div>
                <div className='text-xs' style={{ color: '#a1a1aa' }}>Manufacturer payouts</div>
              </div>
              <div className='border rounded-lg p-4' style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <div className='text-2xl font-extrabold text-emerald-400'>2026</div>
                <div className='text-xs' style={{ color: '#a1a1aa' }}>Last refresh: Apr 26</div>
              </div>
              <div className='border rounded-lg p-4' style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <div className='text-2xl font-extrabold text-emerald-400'>500h+</div>
                <div className='text-xs' style={{ color: '#a1a1aa' }}>Real-world testing</div>
              </div>
            </div>

            {/* ========== BROWSE BY CATEGORY ========== */}
            <section className='mb-16'>
              <h2 className='text-2xl md:text-3xl font-extrabold mb-6 tracking-tight' style={{ color: '#f5f5f5' }}>
                Browse by Category
              </h2>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {[
                  { href: '/reviews/best-portable-power-stations', icon: Battery, label: 'Portable Power', sub: '12 reviews', color: 'emerald' },
                  { href: '/reviews/best-electric-bikes', icon: Bike, label: 'Electric Bikes', sub: '14 reviews', color: 'amber' },
                  { href: '/reviews/best-mini-split-ac', icon: Wind, label: 'Mini Split AC', sub: '8 reviews', color: 'sky' },
                  { href: '/reviews/best-electric-lawn-mower', icon: Sprout, label: 'Lawn & Garden', sub: '22 reviews', color: 'lime' },
                  { href: '/reviews/best-smart-thermostat', icon: Thermometer, label: 'Smart Thermostats', sub: '6 reviews', color: 'rose' },
                  { href: '/reviews/best-whole-house-generator', icon: Zap, label: 'Generators', sub: '5 reviews', color: 'yellow' },
                ].map((cat) => (
                  <Link
                    key={cat.label}
                    href={cat.href}
                    className='group rounded-xl border p-5 hover:border-emerald-500/50 hover:-translate-y-0.5 transition-all'
                    style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
                  >
                    <cat.icon className='h-7 w-7 text-emerald-400 mb-3 group-hover:scale-110 transition-transform' />
                    <div className='font-bold text-base mb-0.5' style={{ color: '#f5f5f5' }}>{cat.label}</div>
                    <div className='text-xs' style={{ color: '#a1a1aa' }}>{cat.sub}</div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ========== FEATURED REVIEWS GRID ========== */}
            <div id='featured-reviews' className='mb-6 flex items-end justify-between flex-wrap gap-4'>
              <div>
                <h2 className='text-2xl md:text-3xl font-extrabold tracking-tight mb-1' style={{ color: '#f5f5f5' }}>
                  Featured Reviews & Buying Guides
                </h2>
                <p className='text-sm' style={{ color: '#a1a1aa' }}>
                  Showing {1}–{Math.min(REVIEWS_PER_PAGE, reviews.length)} of {reviews.length} reviews
                </p>
              </div>
              <LastReviewedStamp
                date='2026-04-26'
                variant='reviewed'
                palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }}
              />
            </div>

            <ReviewCardGrid items={pageItems} />

            {/* ========== AI SHOWDOWN TEASER ========== */}
            <section className='mb-16'>
              <div className='rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/5 via-card to-card p-6 md:p-8'>
                <div className='inline-flex items-center gap-2 bg-purple-500/15 text-purple-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 w-fit'>
                  <ShieldCheck className='h-3 w-3' />
                  AI Showdown · New
                </div>
                <h2 className='text-2xl md:text-3xl font-extrabold mb-3' style={{ color: '#f5f5f5' }}>
                  We asked Grok, ChatGPT &amp; Gemini: <em>&ldquo;Best e-bike under $2,000?&rdquo;</em>
                </h2>
                <p className='mb-6 max-w-3xl' style={{ color: '#d4d4d8' }}>
                  Three frontier AI models. One question. Two of three picked the same bike — and our 50+ hours of testing back them up.
                </p>
                <div className='grid sm:grid-cols-3 gap-3 mb-6'>
                  <div className='rounded-lg border p-4' style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                    <div className='text-[10px] font-bold uppercase tracking-wider text-purple-300 mb-1'>Grok 4</div>
                    <div className='text-sm font-bold' style={{ color: '#f5f5f5' }}>Aventon Aventure 3</div>
                  </div>
                  <div className='rounded-lg border p-4' style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                    <div className='text-[10px] font-bold uppercase tracking-wider text-emerald-300 mb-1'>ChatGPT</div>
                    <div className='text-sm font-bold' style={{ color: '#f5f5f5' }}>Lectric XP 3.0</div>
                  </div>
                  <div className='rounded-lg border p-4' style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                    <div className='text-[10px] font-bold uppercase tracking-wider text-blue-300 mb-1'>Gemini 2.5</div>
                    <div className='text-sm font-bold' style={{ color: '#f5f5f5' }}>RadRover 6 Plus</div>
                  </div>
                </div>
                <Link
                  href='/reviews/best-electric-bikes'
                  className='inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-bold px-5 py-2.5 rounded-lg transition-colors'
                >
                  Read the AI Showdown <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
            </section>

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
