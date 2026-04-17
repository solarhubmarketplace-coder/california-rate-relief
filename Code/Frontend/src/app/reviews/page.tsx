import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Battery, Zap, Star, ChevronRight, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product Reviews & Comparisons | California Rate Relief',
  description:
    'Best portable power stations, solar generator reviews, and power station reviews 2026. Expert comparisons of EcoFlow, Anker SOLIX, Bluetti, and more.',
  alternates: {
    canonical: '/reviews',
  },
};

interface ReviewCard {
  slug: string;
  title: string;
  description: string;
  badge: 'Comparison Guide' | 'Product Review';
  rating?: number;
  icon: 'battery' | 'zap';
}

const reviews: ReviewCard[] = [
  {
    slug: 'best-portable-power-stations',
    title: 'Best Portable Power Stations 2026',
    description:
      'EcoFlow Delta Pro 3 vs Anker SOLIX F3800 vs Bluetti AC500 vs Jackery 2000 Plus \u2014 which one is right for you?',
    badge: 'Comparison Guide',
    icon: 'battery',
  },
  {
    slug: 'ecoflow-delta-pro-3-review',
    title: 'EcoFlow Delta Pro 3 Review',
    description:
      '4,096 Wh, 4,000W output, X-Stream charging \u2014 the best all-around portable power station for home backup.',
    badge: 'Product Review',
    rating: 4.7,
  },
  {
    slug: 'anker-solix-f3800-review',
    title: 'Anker SOLIX F3800 Review',
    description:
      '6,000W output and 3,840 Wh at an unbeatable price point. The best value in portable power.',
    badge: 'Product Review',
    rating: 4.6,
  },
  {
    slug: 'bluetti-ac500-review',
    title: 'Bluetti AC500 + B300S Review',
    description:
      'The most modular power station with 3,000W solar input and expandability up to 18,432 Wh.',
    badge: 'Product Review',
    rating: 4.5,
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.3;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className='flex items-center gap-1'>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          className='h-4 w-4 fill-yellow-400 text-yellow-400'
        />
      ))}
      {hasHalfStar && (
        <div className='relative'>
          <Star className='h-4 w-4 text-gray-300' />
          <div className='absolute inset-0 overflow-hidden w-[50%]'>
            <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
          </div>
        </div>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className='h-4 w-4 text-gray-300' />
      ))}
      <span className='ml-1 text-sm font-semibold text-foreground'>
        {rating}/5
      </span>
    </div>
  );
}

function buildCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Product Reviews & Buying Guides',
    description:
      'Expert reviews and comparisons of portable power stations, solar generators, and home backup systems for 2026.',
    url: 'https://ratereliefca.com/reviews',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: reviews.map((review, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://ratereliefca.com/reviews/${review.slug}`,
        name: review.title,
      })),
    },
  };
}

export default function ReviewsPage() {
  const jsonLd = buildCollectionSchema();

  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            {/* Page Header */}
            <div className='mb-12 text-center'>
              <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4'>
                <Search className='h-4 w-4' />
                Reviews & Guides
              </div>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight'>
                Product Reviews & Buying Guides
              </h1>
              <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                Expert reviews and comparisons of portable power stations, solar
                generators, and home backup systems — tested and verified for
                2026.
              </p>
            </div>

            {/* Review Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
              {reviews.map((review) => (
                <Link
                  key={review.slug}
                  href={`/reviews/${review.slug}`}
                  className='group block'
                >
                  <div className='bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300 h-full flex flex-col'>
                    {/* Badge & Icon Row */}
                    <div className='flex items-center justify-between mb-4'>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide ${
                          review.badge === 'Comparison Guide'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {review.badge}
                      </span>
                      {review.icon === 'battery' ? (
                        <Battery className='h-5 w-5 text-muted-foreground' />
                      ) : (
                        <Zap className='h-5 w-5 text-muted-foreground' />
                      )}
                    </div>

                    {/* Title */}
                    <h2 className='text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors tracking-tight'>
                      {review.title}
                    </h2>

                    {/* Rating */}
                    {review.rating && (
                      <div className='mb-3'>
                        <StarRating rating={review.rating} />
                      </div>
                    )}

                    {/* Description */}
                    <p className='text-foreground/70 leading-relaxed mb-4 flex-grow'>
                      {review.description}
                    </p>

                    {/* Read More */}
                    <div className='flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all'>
                      Read Full Review
                      <ChevronRight className='h-4 w-4' />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className='bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-10 text-center'>
              <Zap className='h-8 w-8 text-primary mx-auto mb-3' />
              <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight'>
                California Homeowner?
              </h2>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
                Skip the portable power station — go straight to whole-home
                solar. Check if you qualify for the California Rate Relief
                Program and cut your electric bill by 30-50%.
              </p>
              <Link
                href='/solar-savings'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                See Solar Savings in Your City
                <ChevronRight className='h-4 w-4' />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
