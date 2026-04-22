import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { Battery, Zap, Star, ChevronRight, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product Reviews & Comparisons | GreenVerdict',
  description:
    'Expert product reviews and buying guides for portable power stations, e-bikes, mini splits, electric lawn mowers, smart thermostats, and whole house generators. Tested and verified for 2026.',
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
  {
    slug: 'jackery-explorer-2000-plus-review',
    title: 'Jackery Explorer 2000 Plus Review',
    description:
      'The most portable power station in its class at 61.5 lbs. Now under $1,000 with LFP battery and 4,000-cycle lifespan.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  {
    slug: 'bluetti-ac200l-review',
    title: 'Bluetti AC200L Review',
    description:
      'The best portable power station under $1,000. 2,048 Wh, fast charging (0-80% in 45 min), and expandable to 8,192 Wh.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  {
    slug: 'best-electric-bikes',
    title: 'Best Electric Bikes 2026',
    description:
      'Aventon vs Rad Power vs Lectric \u2014 top e-bikes from $799 to $1,999 compared. Fat tire, folding, and city commuter picks.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-mini-split-ac',
    title: 'Best Mini Split AC 2026',
    description:
      'MrCool DIY mini splits reviewed. Save $3,000-$8,000 on installation with pre-charged QuickConnect line sets. Up to 22.7 SEER2.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-electric-lawn-mower',
    title: 'Best Electric Lawn Mower 2026',
    description:
      'EGO Select Cut vs Greenworks 80V vs Ryobi 40V. Battery platforms compared for every yard size.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-smart-thermostat',
    title: 'Best Smart Thermostat 2026',
    description:
      'Ecobee Premium vs Google Nest 4th Gen. Save up to 26% on energy with smart scheduling and TOU optimization.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'best-whole-house-generator',
    title: 'Best Whole House Generator 2026',
    description:
      'Generac Guardian 22kW vs 24kW vs 26kW, plus Kohler and Champion. Sizing guide, installation costs, and fuel comparison.',
    badge: 'Comparison Guide',
    icon: 'battery',
  },
  {
    slug: 'rad-power-radrover-6-plus-review',
    title: 'Rad Power RadRover 6 Plus Review',
    description:
      '750W motor, 672Wh battery, 26×4" fat tires. The best-selling all-terrain e-bike for commuters and adventure riders.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'zap',
  },
  {
    slug: 'aventon-aventure-3-review',
    title: 'Aventon Aventure 3 Review',
    description:
      'Class 3 speed (28 mph), torque sensor, 720Wh battery with 40-60 mile range. The premium all-terrain e-bike.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
  },
  {
    slug: 'mrcool-diy-4th-gen-review',
    title: 'MrCool DIY 4th Gen Mini Split Review',
    description:
      'Install your own mini split — no HVAC tech needed. 12K-36K BTU, up to 22 SEER2. Save $3,000-$8,000 on installation.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
  },
  {
    slug: 'ego-select-cut-mower-review',
    title: 'EGO Select Cut XP Mower Review',
    description:
      'The best electric lawn mower for gas switchers. 21" deck, 3 swappable blade types, 56V battery platform with 70+ compatible tools.',
    badge: 'Product Review',
    rating: 4.7,
    icon: 'zap',
  },
  {
    slug: 'generac-guardian-24kw-review',
    title: 'Generac Guardian 24kW Review',
    description:
      'The best-selling whole house standby generator. 24kW output, automatic transfer switch, Mobile Link monitoring. Full install cost breakdown.',
    badge: 'Product Review',
    rating: 4.5,
    icon: 'battery',
  },
  {
    slug: 'ecoflow-delta-pro-ultra-review',
    title: 'EcoFlow Delta Pro Ultra Review',
    description:
      'The bridge between portable power and whole-home backup. 6,144Wh expandable to 90kWh, 7,200W output, LFP battery.',
    badge: 'Product Review',
    rating: 4.7,
    icon: 'battery',
  },
  {
    slug: 'ego-snow-blower-review',
    title: 'EGO SNT2114 Snow Blower Review',
    description:
      'Peak Power technology, 21" clearing width, up to 50-foot throw distance. The best electric snow blower for residential use.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
  },
  {
    slug: 'ryobi-40v-lawn-mower-review',
    title: 'Ryobi 40V HP Lawn Mower Review',
    description:
      'The best budget electric mower at $399. 21" deck, self-propelled, 48-minute runtime. Part of the Ryobi 40V platform with 40+ tools.',
    badge: 'Product Review',
    rating: 4.4,
    icon: 'zap',
  },
  {
    slug: 'mitsubishi-mini-split-review',
    title: 'Mitsubishi Mini Split Review',
    description:
      'The #1 selling mini split brand in North America. Hyper-Heating down to -13°F, 19 dB whisper-quiet, 12-year compressor warranty.',
    badge: 'Product Review',
    rating: 4.7,
    icon: 'zap',
  },
  {
    slug: 'best-tankless-water-heater',
    title: 'Best Tankless Water Heater 2026',
    description:
      'Rinnai vs Rheem vs Navien vs Noritz — full comparison with sizing guide, installation costs, and annual savings breakdown.',
    badge: 'Comparison Guide',
    icon: 'zap',
  },
  {
    slug: 'milwaukee-chainsaw-review',
    title: 'Milwaukee M18 FUEL Chainsaw Review',
    description:
      '16" bar, 6,600 RPM, up to 150 cuts per charge. The pro-grade battery chainsaw built on the M18 platform with 250+ tools.',
    badge: 'Product Review',
    rating: 4.6,
    icon: 'zap',
  },
  {
    slug: 'best-electric-dirt-bike-adults',
    title: 'Best Electric Dirt Bikes for Adults 2026',
    description:
      'Sur-Ron vs KTM vs Stark Varg vs Zero FX. Electric dirt bikes from $4,500 to $12,000 compared — performance, range, and street legality.',
    badge: 'Comparison Guide',
    icon: 'zap',
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
      <span className='ml-1 text-sm font-semibold' style={{ color: '#f5f5f5' }}>
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
    publisher: {
      '@type': 'Organization',
      name: 'GreenVerdict',
      url: 'https://ratereliefca.com/reviews',
    },
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
    <ReviewLayout>
      <ReviewHeader />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            {/* Page Header */}
            <div className='mb-12 text-center'>
              <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4'>
                <Search className='h-4 w-4' />
                Reviews & Guides
              </div>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f5f5f5' }}>
                Product Reviews & Buying Guides
              </h1>
              <p className='text-lg max-w-2xl mx-auto' style={{ color: '#d4d4d8' }}>
                Expert reviews and comparisons of portable power stations, e-bikes,
                mini splits, electric lawn mowers, smart thermostats, generators,
                and more — tested and verified for 2026.
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
                  <div className='rounded-xl shadow-sm border p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300 h-full flex flex-col' style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
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
                        <Battery className='h-5 w-5' style={{ color: '#d4d4d8' }} />
                      ) : (
                        <Zap className='h-5 w-5' style={{ color: '#d4d4d8' }} />
                      )}
                    </div>

                    {/* Title */}
                    <h2 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight' style={{ color: '#f5f5f5' }}>
                      {review.title}
                    </h2>

                    {/* Rating */}
                    {review.rating && (
                      <div className='mb-3'>
                        <StarRating rating={review.rating} />
                      </div>
                    )}

                    {/* Description */}
                    <p className='leading-relaxed mb-4 flex-grow' style={{ color: '#d4d4d8' }}>
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
            <div className='rounded-2xl border p-8 md:p-10 text-center' style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }}>
              <Search className='h-8 w-8 mx-auto mb-3' style={{ color: '#22c55e' }} />
              <h2 className='text-2xl md:text-3xl font-bold mb-3 tracking-tight' style={{ color: '#f5f5f5' }}>
                Looking for More?
              </h2>
              <p className='mb-6 max-w-xl mx-auto' style={{ color: '#d4d4d8' }}>
                We test and review the latest in green energy tech — from
                portable power stations to smart home devices. New reviews
                every week.
              </p>
              <Link
                href='/reviews'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
                style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
              >
                Browse All Reviews
                <ChevronRight className='h-4 w-4' />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
