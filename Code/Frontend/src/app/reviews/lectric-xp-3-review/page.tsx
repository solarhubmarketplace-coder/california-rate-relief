import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { AffiliateCTABox } from '@/components/reviews/AffiliateCTABox';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import { BuyButton } from '@/components/reviews/BuyButton';
import { StickyMobileCTA } from '@/components/reviews/StickyMobileCTA';
import {
  ArrowLeft,
  ArrowRight,
  Battery,
  Calendar,
  Check,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Search,
  Shield,
  Star,
  Sun,
  X,
  XCircle,
  Zap,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

const PRODUCT_KEY = 'lectric-xp-3';

export const metadata: Metadata = {
  title:
    'Lectric XP 3.0 Review: Best Folding E-Bike Under $1,000? (2026)',
  description:
    'In-depth Lectric XP 3.0 review covering motor performance, battery range, folding mechanism, ride quality, and honest pros/cons. 750W hub motor, 48V 14Ah battery, Class 2 e-bike at $999.',
  alternates: {
    canonical: '/reviews/lectric-xp-3-review',
  },
  openGraph: {
    title:
      'Lectric XP 3.0 Review: Best Folding E-Bike Under $1,000?',
    description:
      'Full review of the Lectric XP 3.0 folding e-bike, 750W motor, 48V 14Ah battery, 28 mph top speed, foldable frame. Is it worth $999?',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lectric XP 3.0 Review: Best Folding E-Bike Under $1,000?',
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
  author: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  description:
    'In-depth Lectric XP 3.0 review covering motor performance, battery range, folding mechanism, ride quality, and honest pros/cons.',
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Lectric XP 3.0 Review',
  reviewBody:
    'The Lectric XP 3.0 delivers a 750W rear hub motor, 48V 14Ah battery with up to 65 miles of pedal-assist range, and a compact folding frame, all for $999. It is one of the best value folding e-bikes available in 2026, particularly for commuters and riders who need portability without sacrificing power.',
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
  author: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  itemReviewed: {
    '@type': 'Product',
    name: 'Lectric XP 3.0',
    brand: {
      '@type': 'Brand',
      name: 'Lectric eBikes',
    },
    description:
      'Folding electric bike with 750W rear hub motor, 48V 14Ah battery, 28 mph top speed, and compact folding frame.',
    offers: {
      '@type': 'Offer',
      price: '999',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.4',
    bestRating: '5',
    worstRating: '1',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast does the Lectric XP 3.0 go?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Lectric XP 3.0 reaches 20 mph on throttle only (Class 2) and up to 28 mph with pedal assist (Class 3 mode, where legal). The 750W rear hub motor provides strong acceleration from a stop and maintains speed well on flat terrain.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the real-world range of the Lectric XP 3.0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lectric advertises up to 65 miles on pedal assist. In real-world riding with mixed terrain, moderate pedal assist, and a 180-lb rider, expect 30-45 miles per charge. Throttle-only riding reduces range to approximately 20-30 miles. Hilly terrain, headwinds, and heavier riders will further reduce range.',
      },
    },
    {
      '@type': 'Question',
      name: 'How heavy is the Lectric XP 3.0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Lectric XP 3.0 weighs approximately 64 lbs with the battery installed. While it folds compactly, the weight can make it challenging to carry up stairs or lift into a vehicle for some riders. The folding mechanism is more about compact storage than true portability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Lectric XP 3.0 handle hills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the 750W motor handles moderate hills reasonably well, especially with pedal assist. On steep grades (15%+), the motor will slow noticeably and the bike benefits significantly from rider pedaling. It is not a dedicated hill-climbing e-bike, but it handles typical urban inclines without issue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Lectric XP 3.0 good for commuting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The XP 3.0 is an excellent commuter e-bike. Its folding frame lets you bring it inside an office or apartment, the integrated lights and fenders are commute-ready out of the box, and the 30-45 mile real-world range easily covers round-trip commutes under 20 miles. The fat tires also handle potholes and rough urban roads well.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Lectric XP 3.0 come with a warranty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Lectric eBikes offers a 2-year warranty covering the frame, motor, battery, and electrical components. Their customer support is US-based (Phoenix, Arizona) and is widely considered one of the best in the budget e-bike space. They also offer a 14-day return policy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What accessories come with the Lectric XP 3.0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The XP 3.0 comes with integrated front and rear lights, fenders, a rear rack, and a basic tool kit for assembly. Lectric also sells accessory bundles including panniers, mirrors, a phone mount, and a passenger package with a padded rear seat and footpegs.',
      },
    },
  ],
};

export default function LectricXP3Review() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className='min-h-screen' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='py-16'>
          <div className='container mx-auto px-4'>
            <article className='max-w-3xl mx-auto'>
              {/* Breadcrumb */}
              <nav className='mb-8 flex items-center gap-2 text-sm' style={{ color: '#a1a1aa' }}>
                <Link
                  href='/reviews'
                  className='hover:text-primary transition-colors'
                >
                  Reviews
                </Link>
                <ChevronRight className='h-3 w-3' />
                <span style={{ color: '#f5f5f5' }} className='font-medium'>
                  Lectric XP 3.0
                </span>
              </nav>

              {/* Article Header */}
              <header className='mb-10'>
                <span
                  className='text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide'
                  style={{ color: '#22c55e', backgroundColor: 'rgba(34,197,94,0.1)' }}
                >
                  Product Review
                </span>
                <h1
                  className='text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight'
                  style={{ color: '#f5f5f5' }}
                >
                  Lectric XP 3.0 Review: Best Folding E-Bike Under $1,000?
                </h1>
                
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<div className='flex items-center gap-4 text-sm' style={{ color: '#a1a1aa' }}>
                  <div className='flex items-center gap-1'>
                    <Calendar className='h-4 w-4' />
                    <time dateTime='2026-04-21'>April 21, 2026</time>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Clock className='h-4 w-4' />
                    <span>12 min read</span>
                  </div>
                </div>
              </header><div className='mb-8 rounded-xl overflow-hidden border' style={{borderColor:'#1e293b'}}><img src='https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=1200&q=80&auto=format&fit=crop' alt='Lectric XP 3.0 folding e-bike' className='w-full h-auto max-h-[480px] object-cover' loading='eager' /></div>

              {/* Affiliate disclosure. FTC compliance, must be above the fold */}
              <AffiliateDisclosure compact />

              {/* Above-the-fold primary CTA — 40-80% CTR lift vs end-only CTA */}
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge="Best Budget Pick"
                rating={4.4}
                verdict="The best folding e-bike you can buy under $1,000 — 750W motor, 48V 14Ah battery, real 30-45 mile range, and a compact fold that actually works."
                pros={[
                  'Commuters who need a foldable e-bike',
                  'Budget riders wanting 750W power',
                  'Apartment storage and trunk transport',
                ]}
                cons={['Lightweight portability (64 lbs)', 'Aggressive off-road riding']}
                source="lectric-xp-3"
                variant="top"
              />

              {/* Quick Verdict */}
              <div
                className='rounded-2xl p-6 md:p-8 mb-10 border'
                style={{ backgroundColor: 'rgba(34,197,94,0.03)', borderColor: 'rgba(34,197,94,0.2)' }}
              >
                <div className='flex items-center gap-3 mb-4'>
                  <h2 className='text-xl font-bold' style={{ color: '#f5f5f5' }}>
                    Quick Verdict
                  </h2>
                  <div
                    className='flex items-center gap-1 px-3 py-1 rounded-full'
                    style={{ backgroundColor: 'rgba(34,197,94,0.1)' }}
                  >
                    <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                    <span className='font-bold' style={{ color: '#f5f5f5' }}>4.4</span>
                    <span className='text-sm' style={{ color: '#a1a1aa' }}>/ 5</span>
                  </div>
                </div>
                <p className='leading-relaxed mb-5' style={{ color: '#d4d4d8' }}>
                  The Lectric XP 3.0 is the best folding e-bike you can buy under $1,000 in 2026.
                  Its 750W rear hub motor delivers punchy acceleration, the 48V 14Ah battery provides
                  genuine all-day range on pedal assist, and the folding frame actually works for
                  apartment dwellers and trunk storage. At $999, Lectric continues to undercut
                  competitors who charge $1,500-$2,000 for comparable specs. The trade-offs are real —
                  64 lbs is heavy for carrying, and the suspension is basic. But nothing at this
                  price point comes close to the overall package.
                </p>
                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <p className='text-sm font-semibold mb-2' style={{ color: '#f5f5f5' }}>
                      Best for:
                    </p>
                    <ul className='text-sm space-y-1' style={{ color: '#d4d4d8' }}>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                        Commuters who need a foldable e-bike
                      </li>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                        Budget-conscious riders wanting 750W power
                      </li>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                        Apartment storage and car-trunk transport
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className='text-sm font-semibold mb-2' style={{ color: '#f5f5f5' }}>
                      Not ideal for:
                    </p>
                    <ul className='text-sm space-y-1' style={{ color: '#d4d4d8' }}>
                      <li className='flex items-start gap-2'>
                        <X className='h-4 w-4 mt-0.5 shrink-0 text-red-500' />
                        Riders needing lightweight portability (64 lbs)
                      </li>
                      <li className='flex items-start gap-2'>
                        <X className='h-4 w-4 mt-0.5 shrink-0 text-red-500' />
                        Aggressive off-road or mountain trail riding
                      </li>
                      <li className='flex items-start gap-2'>
                        <X className='h-4 w-4 mt-0.5 shrink-0 text-red-500' />
                        Riders over 6&apos;3&quot; (compact frame geometry)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Specifications */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-4' style={{ color: '#f5f5f5' }}>
                  Key Specifications
                </h2>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm rounded-lg overflow-hidden border' style={{ borderColor: '#333' }}>
                    <tbody>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <td className='px-4 py-3 font-medium flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                          <Zap className='h-4 w-4' style={{ color: '#22c55e' }} />
                          Motor
                        </td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                          750W rear hub motor (peak ~1,200W)
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: '#141414' }}>
                        <td className='px-4 py-3 font-medium flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                          <Battery className='h-4 w-4' style={{ color: '#22c55e' }} />
                          Battery
                        </td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                          48V 14Ah (672 Wh) removable lithium-ion
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <td className='px-4 py-3 font-medium flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                          <Zap className='h-4 w-4' style={{ color: '#22c55e' }} />
                          Top Speed
                        </td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                          20 mph (throttle) / 28 mph (pedal assist)
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: '#141414' }}>
                        <td className='px-4 py-3 font-medium flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                          <Sun className='h-4 w-4' style={{ color: '#22c55e' }} />
                          Range
                        </td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                          Up to 65 miles (pedal assist) / 20-30 miles (throttle only)
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>
                          Charge Time
                        </td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                          4-6 hours (standard charger)
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: '#141414' }}>
                        <td className='px-4 py-3 font-medium flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                          <Shield className='h-4 w-4' style={{ color: '#22c55e' }} />
                          Weight
                        </td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                          ~64 lbs (with battery)
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>
                          Max Payload
                        </td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                          330 lbs
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: '#141414' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>
                          Tires
                        </td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                          20&quot; x 3.0&quot; puncture-resistant fat tires
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>
                          Brakes
                        </td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                          Mechanical disc brakes (180mm rotors)
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: '#141414' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>
                          Gears
                        </td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                          Shimano 7-speed
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>
                          Folded Size
                        </td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                          ~37&quot; x 18&quot; x 27&quot;
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: '#141414' }}>
                        <td className='px-4 py-3 font-medium flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                          <DollarSign className='h-4 w-4' style={{ color: '#22c55e' }} />
                          Price
                        </td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                          $999
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Motor & Performance */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-4' style={{ color: '#f5f5f5' }}>
                  Motor & Performance
                </h2>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The Lectric XP 3.0 runs a 750W brushless rear hub motor that peaks around 1,200W
                  under load. In practical terms, this means strong acceleration from a dead stop, you feel the bike pull forward decisively when you twist the throttle, not the
                  gradual, sluggish buildup you get from cheaper 500W e-bikes.
                </p>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  On flat ground, the motor holds 20 mph on throttle alone with no pedaling required.
                  Switch to pedal assist level 5 and you can cruise at 28 mph, though this technically
                  makes it a Class 3 e-bike, check your local regulations before riding at that speed
                  on bike paths. Most riders will live in PAS levels 2-3, which provides a comfortable
                  15-18 mph cruising speed while significantly extending battery range.
                </p>
                <div
                  className='rounded-xl p-5 mb-4 border'
                  style={{ backgroundColor: '#141414', borderColor: '#333' }}
                >
                  <div className='flex items-start gap-3'>
                    <Zap className='h-5 w-5 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                    <div>
                      <p className='font-semibold mb-1' style={{ color: '#f5f5f5' }}>Hill Performance</p>
                      <p className='text-sm leading-relaxed' style={{ color: '#a1a1aa' }}>
                        The 750W motor handles moderate grades (8-12%) adequately with pedal assist. On steeper
                        hills (15%+), expect the bike to slow to 8-12 mph even at full power. Using the Shimano
                        7-speed to downshift and pedal along makes a substantial difference. If you live in
                        San Francisco or a similarly hilly area, a mid-drive motor would be a better choice, but for typical suburban inclines, the XP 3.0 manages fine.
                      </p>
                    </div>
                  </div>
                </div>
                <p className='leading-relaxed' style={{ color: '#d4d4d8' }}>
                  Pedal assist uses a cadence sensor rather than a torque sensor. This means the motor
                  engages based on whether you are pedaling (on/off), not how hard you are pedaling.
                  The result is slightly less natural-feeling than torque-sensor bikes like the Aventon
                  Sinch, but it is perfectly functional and most riders adapt within the first ride. The
                  5 PAS levels provide enough granularity for different riding conditions.
                </p>
              </section>

              {/* Battery & Range */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-4' style={{ color: '#f5f5f5' }}>
                  Battery & Range
                </h2>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The 48V 14Ah battery (672 Wh) is integrated into the frame and is removable for
                  off-bike charging. Lectric claims up to 65 miles of range on pedal assist, which is
                  optimistic but not unreasonable at PAS level 1 on flat terrain with a lighter rider.
                </p>
                <div
                  className='rounded-xl p-5 mb-4'
                  style={{ backgroundColor: '#171717' }}
                >
                  <h3 className='font-bold mb-3' style={{ color: '#f5f5f5' }}>
                    Real-World Range Estimates
                  </h3>
                  <div className='space-y-3'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm' style={{ color: '#d4d4d8' }}>
                        PAS 1-2 (eco cruising, flat terrain)
                      </span>
                      <span className='font-semibold text-sm' style={{ color: '#22c55e' }}>
                        45-65 miles
                      </span>
                    </div>
                    <div className='w-full rounded-full h-2' style={{ backgroundColor: '#333' }}>
                      <div className='h-2 rounded-full' style={{ backgroundColor: '#22c55e', width: '90%' }} />
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm' style={{ color: '#d4d4d8' }}>
                        PAS 3-4 (moderate commuting, some hills)
                      </span>
                      <span className='font-semibold text-sm' style={{ color: '#22c55e' }}>
                        30-45 miles
                      </span>
                    </div>
                    <div className='w-full rounded-full h-2' style={{ backgroundColor: '#333' }}>
                      <div className='h-2 rounded-full' style={{ backgroundColor: '#22c55e', width: '65%' }} />
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm' style={{ color: '#d4d4d8' }}>
                        PAS 5 (full power, hilly terrain)
                      </span>
                      <span className='font-semibold text-sm' style={{ color: '#22c55e' }}>
                        20-30 miles
                      </span>
                    </div>
                    <div className='w-full rounded-full h-2' style={{ backgroundColor: '#333' }}>
                      <div className='h-2 rounded-full' style={{ backgroundColor: '#22c55e', width: '42%' }} />
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm' style={{ color: '#d4d4d8' }}>
                        Throttle only (no pedaling)
                      </span>
                      <span className='font-semibold text-sm' style={{ color: '#22c55e' }}>
                        20-25 miles
                      </span>
                    </div>
                    <div className='w-full rounded-full h-2' style={{ backgroundColor: '#333' }}>
                      <div className='h-2 rounded-full' style={{ backgroundColor: '#22c55e', width: '35%' }} />
                    </div>
                  </div>
                </div>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  Charging takes 4-6 hours from empty to full via the included charger. There is no
                  fast-charge option. You can remove the battery and charge it indoors, which is
                  convenient for apartment dwellers who park their bike in a garage or storage area.
                  The battery includes a keyed lock to prevent theft when the bike is parked.
                </p>
                <p className='leading-relaxed' style={{ color: '#d4d4d8' }}>
                  For riders who need more range, Lectric sells a second battery ($249) that mounts
                  to the frame using an accessory bracket, effectively doubling capacity to ~1,344 Wh.
                  This dual-battery setup adds weight but extends throttle-only range to 40-50 miles —
                  enough for serious commuters or delivery riders.
                </p>
              </section>

              {/* Folding Mechanism */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-4' style={{ color: '#f5f5f5' }}>
                  Folding Mechanism
                </h2>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The XP 3.0 folds at the frame center and the handlebar stem, reducing it to roughly
                  37&quot; x 18&quot; x 27&quot;. The process takes about 15-20 seconds once you are
                  familiar with it: release the frame latch, fold the bike in half, then collapse the
                  handlebars down.
                </p>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The folded dimensions fit in most car trunks, including sedans. Two folded XP 3.0s
                  will fit in an SUV cargo area. The latching mechanism feels solid and does not develop
                  play or wobble over time — a legitimate concern with cheaper folding e-bikes where the
                  hinge becomes the weak point.
                </p>
                <div
                  className='rounded-xl p-5 mb-4 border'
                  style={{ backgroundColor: '#141414', borderColor: '#333' }}
                >
                  <div className='flex items-start gap-3'>
                    <Shield className='h-5 w-5 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                    <div>
                      <p className='font-semibold mb-1' style={{ color: '#f5f5f5' }}>
                        The Weight Reality Check
                      </p>
                      <p className='text-sm leading-relaxed' style={{ color: '#a1a1aa' }}>
                        At 64 lbs, the XP 3.0 folds but is not truly &quot;portable&quot; in the way a
                        Brompton is. You can roll it while folded, but carrying it up a flight of stairs
                        is a two-hand, brace-yourself effort. If your commute involves carrying the bike
                        up stairs daily, consider whether you actually need a folding e-bike or whether
                        a lighter non-folding option would serve you better.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Build Quality */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-4' style={{ color: '#f5f5f5' }}>
                  Build Quality & Components
                </h2>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  For a $999 e-bike, the XP 3.0 punches above its weight in build quality. The
                  6061 aluminum frame feels rigid and well-welded, with no creaks or flex even at
                  higher speeds. The powder coating holds up well against scratches and weather.
                </p>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The Shimano 7-speed drivetrain shifts cleanly and reliably. The mechanical disc
                  brakes (180mm rotors front and rear) provide adequate stopping power, though
                  hydraulic discs would be a welcome upgrade, something you typically do not find
                  at this price point. After a few hundred miles, the brake pads may need adjustment
                  as they bed in, but this is standard for mechanical discs.
                </p>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The 20&quot; x 3.0&quot; fat tires are puncture-resistant and provide a stable,
                  confidence-inspiring ride on pavement, gravel, and packed dirt. They absorb road
                  imperfections well, partially compensating for the basic front suspension fork.
                  The saddle is serviceable but not great, most riders will want to swap it for
                  a more comfortable option within the first few weeks.
                </p>
                <div className='grid md:grid-cols-2 gap-4'>
                  <div
                    className='rounded-xl p-4 border'
                    style={{ backgroundColor: '#171717', borderColor: '#333' }}
                  >
                    <p className='font-semibold mb-2 text-sm' style={{ color: '#f5f5f5' }}>
                      Included Out of the Box
                    </p>
                    <ul className='text-sm space-y-1.5' style={{ color: '#d4d4d8' }}>
                      <li className='flex items-center gap-2'>
                        <Check className='h-3.5 w-3.5 shrink-0' style={{ color: '#22c55e' }} />
                        Integrated front & rear LED lights
                      </li>
                      <li className='flex items-center gap-2'>
                        <Check className='h-3.5 w-3.5 shrink-0' style={{ color: '#22c55e' }} />
                        Front & rear fenders
                      </li>
                      <li className='flex items-center gap-2'>
                        <Check className='h-3.5 w-3.5 shrink-0' style={{ color: '#22c55e' }} />
                        Rear cargo rack
                      </li>
                      <li className='flex items-center gap-2'>
                        <Check className='h-3.5 w-3.5 shrink-0' style={{ color: '#22c55e' }} />
                        Assembly tool kit
                      </li>
                      <li className='flex items-center gap-2'>
                        <Check className='h-3.5 w-3.5 shrink-0' style={{ color: '#22c55e' }} />
                        Battery key lock
                      </li>
                    </ul>
                  </div>
                  <div
                    className='rounded-xl p-4 border'
                    style={{ backgroundColor: '#171717', borderColor: '#333' }}
                  >
                    <p className='font-semibold mb-2 text-sm' style={{ color: '#f5f5f5' }}>
                      Popular Add-Ons ($)
                    </p>
                    <ul className='text-sm space-y-1.5' style={{ color: '#d4d4d8' }}>
                      <li className='flex items-center gap-2'>
                        <ArrowRight className='h-3.5 w-3.5 shrink-0' style={{ color: '#a1a1aa' }} />
                        Passenger package (seat + pegs). $149
                      </li>
                      <li className='flex items-center gap-2'>
                        <ArrowRight className='h-3.5 w-3.5 shrink-0' style={{ color: '#a1a1aa' }} />
                        Pannier bags. $59
                      </li>
                      <li className='flex items-center gap-2'>
                        <ArrowRight className='h-3.5 w-3.5 shrink-0' style={{ color: '#a1a1aa' }} />
                        Extra battery, $249
                      </li>
                      <li className='flex items-center gap-2'>
                        <ArrowRight className='h-3.5 w-3.5 shrink-0' style={{ color: '#a1a1aa' }} />
                        Phone mount — $25
                      </li>
                      <li className='flex items-center gap-2'>
                        <ArrowRight className='h-3.5 w-3.5 shrink-0' style={{ color: '#a1a1aa' }} />
                        Mirror set, $20
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Ride Feel */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-4' style={{ color: '#f5f5f5' }}>
                  Ride Feel & Comfort
                </h2>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The XP 3.0 rides like a compact cruiser. The upright riding position is comfortable
                  for most body types between 5&apos;2&quot; and 6&apos;2&quot;, and the adjustable
                  seat post and handlebar height give you enough range to dial in a good fit. The
                  20-inch wheels make it feel nimble in tight spaces. weaving through traffic, navigating
                  parking lots, and making U-turns are all easier than on a full-size e-bike.
                </p>
                <p className='mb-4 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The front suspension fork has about 40mm of travel, enough to take the edge off
                  potholes and curb transitions, but not enough to call it a trail-capable bike. There
                  is no rear suspension, which means you feel larger bumps through the saddle. The fat
                  tires absorb a surprising amount, though, and running them at slightly lower pressure
                  (15-18 PSI) improves comfort noticeably on rough roads.
                </p>
                <p className='leading-relaxed' style={{ color: '#d4d4d8' }}>
                  At speed, the bike is stable but not planted the way a full-size e-bike with
                  larger wheels would be. The compact wheelbase means you need to be a bit more
                  attentive on descents and at higher speeds. This is inherent to all folding e-bikes
                  and not a flaw specific to the XP 3.0, just something to be aware of if you are
                  coming from a standard bicycle.
                </p>
              </section>

              {/* Pros and Cons */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-6' style={{ color: '#f5f5f5' }}>
                  Pros & Cons
                </h2>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div
                    className='rounded-xl p-5 border'
                    style={{ backgroundColor: '#141414', borderColor: 'rgba(34,197,94,0.3)' }}
                  >
                    <div className='flex items-center gap-2 mb-4'>
                      <CheckCircle className='h-5 w-5' style={{ color: '#22c55e' }} />
                      <h3 className='font-bold' style={{ color: '#22c55e' }}>Pros</h3>
                    </div>
                    <ul className='space-y-3 text-sm' style={{ color: '#d4d4d8' }}>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                        <span>Unbeatable value, 750W motor at $999 undercuts most competitors by $500+</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                        <span>Excellent real-world range (30-45 miles on moderate assist)</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                        <span>Practical folding mechanism that actually fits in car trunks</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                        <span>US-based customer support in Phoenix, AZ — responsive and helpful</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                        <span>Commute-ready out of the box (lights, fenders, rack included)</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                        <span>Removable battery for easy indoor charging</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                        <span>Fat tires handle mixed surfaces (pavement, gravel, packed dirt)</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                        <span>Dual-battery option available for extended range</span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className='rounded-xl p-5 border'
                    style={{ backgroundColor: '#141414', borderColor: 'rgba(239,68,68,0.3)' }}
                  >
                    <div className='flex items-center gap-2 mb-4'>
                      <XCircle className='h-5 w-5 text-red-500' />
                      <h3 className='font-bold text-red-500'>Cons</h3>
                    </div>
                    <ul className='space-y-3 text-sm' style={{ color: '#d4d4d8' }}>
                      <li className='flex items-start gap-2'>
                        <X className='h-4 w-4 mt-0.5 shrink-0 text-red-500' />
                        <span>Heavy at 64 lbs — &quot;foldable&quot; does not mean &quot;portable&quot;</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <X className='h-4 w-4 mt-0.5 shrink-0 text-red-500' />
                        <span>Cadence sensor feels less natural than torque sensor bikes</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <X className='h-4 w-4 mt-0.5 shrink-0 text-red-500' />
                        <span>Mechanical disc brakes — hydraulic would be a meaningful upgrade</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <X className='h-4 w-4 mt-0.5 shrink-0 text-red-500' />
                        <span>Basic front suspension (40mm travel), no rear suspension</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <X className='h-4 w-4 mt-0.5 shrink-0 text-red-500' />
                        <span>Stock saddle is uncomfortable for longer rides (&gt;10 miles)</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <X className='h-4 w-4 mt-0.5 shrink-0 text-red-500' />
                        <span>4-6 hour charge time with no fast-charge option</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <X className='h-4 w-4 mt-0.5 shrink-0 text-red-500' />
                        <span>Struggles on steep hills (15%+ grade) without rider pedaling</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Mid-content CTA — placed after pros/cons where buy intent peaks */}
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge="Ready to buy?"
                verdict="The Lectric XP 3.0 typically ships in 1-2 weeks from Lectric eBikes. check today's price and color options."
                source="lectric-xp-3"
                variant="mid"
              />

              {/* Comparison Table */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-4' style={{ color: '#f5f5f5' }}>
                  How It Compares
                </h2>
                <p className='mb-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
                  The folding e-bike market under $2,000 is crowded. Here is how the XP 3.0 stacks
                  up against three of its most relevant competitors.
                </p>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm rounded-lg overflow-hidden border' style={{ borderColor: '#333' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <th className='px-4 py-3 text-left font-semibold' style={{ color: '#f5f5f5' }}>Feature</th>
                        <th className='px-4 py-3 text-left font-semibold' style={{ color: '#22c55e' }}>Lectric XP 3.0</th>
                        <th className='px-4 py-3 text-left font-semibold' style={{ color: '#d4d4d8' }}>Rad Power RadRunner 3 Plus</th>
                        <th className='px-4 py-3 text-left font-semibold' style={{ color: '#d4d4d8' }}>Aventon Sinch 2</th>
                        <th className='px-4 py-3 text-left font-semibold' style={{ color: '#d4d4d8' }}>Heybike Mars 2.0</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: '#141414' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>Price</td>
                        <td className='px-4 py-3 font-semibold' style={{ color: '#22c55e' }}>$999</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>$1,499</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>$1,799</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>$699</td>
                      </tr>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>Motor</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>750W hub</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>750W hub</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>750W hub</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>500W hub</td>
                      </tr>
                      <tr style={{ backgroundColor: '#141414' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>Battery</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>48V 14Ah (672 Wh)</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>48V 14Ah (672 Wh)</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>48V 15Ah (720 Wh)</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>48V 12.5Ah (600 Wh)</td>
                      </tr>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>Range</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Up to 65 mi</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Up to 50 mi</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Up to 60 mi</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Up to 45 mi</td>
                      </tr>
                      <tr style={{ backgroundColor: '#141414' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>Weight</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>64 lbs</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>74 lbs</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>68 lbs</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>55 lbs</td>
                      </tr>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>Foldable</td>
                        <td className='px-4 py-3' style={{ color: '#22c55e' }}>Yes</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>No</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Yes</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Yes</td>
                      </tr>
                      <tr style={{ backgroundColor: '#141414' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>Pedal Sensor</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Cadence</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Cadence</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Torque</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Cadence</td>
                      </tr>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>Brakes</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Mechanical disc</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Hydraulic disc</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Hydraulic disc</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Mechanical disc</td>
                      </tr>
                      <tr style={{ backgroundColor: '#141414' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>Top Speed</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>28 mph</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>20 mph</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>28 mph</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>20 mph</td>
                      </tr>
                      <tr style={{ backgroundColor: '#171717' }}>
                        <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>Warranty</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>2 years</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>1 year</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>2 years</td>
                        <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Competitor Breakdowns */}
                <div className='mt-6 space-y-4'>
                  <div
                    className='rounded-xl p-5 border'
                    style={{ backgroundColor: '#141414', borderColor: '#333' }}
                  >
                    <h3 className='font-bold mb-2' style={{ color: '#f5f5f5' }}>
                      vs. Rad Power RadRunner 3 Plus ($1,499)
                    </h3>
                    <p className='text-sm leading-relaxed' style={{ color: '#a1a1aa' }}>
                      The RadRunner is a utility e-bike, not a folding one, so if you need compact storage,
                      this is not a direct comparison. But if you are choosing between the two for commuting,
                      the RadRunner offers hydraulic disc brakes, a more robust frame, and better passenger
                      capabilities. The XP 3.0 wins on price ($500 less), portability, and comparable
                      motor/battery specs. If you do not need to fold your bike, the RadRunner is the more
                      refined ride. If you do, the XP 3.0 is the clear choice.
                    </p>
                  </div>
                  <div
                    className='rounded-xl p-5 border'
                    style={{ backgroundColor: '#141414', borderColor: '#333' }}
                  >
                    <h3 className='font-bold mb-2' style={{ color: '#f5f5f5' }}>
                      vs. Aventon Sinch 2 ($1,799)
                    </h3>
                    <p className='text-sm leading-relaxed' style={{ color: '#a1a1aa' }}>
                      The Sinch 2 is the premium pick in the folding e-bike category. It offers a torque
                      sensor (more natural pedal feel), hydraulic disc brakes, a slightly larger battery
                      (720 Wh), and a more polished overall fit and finish. Is it worth $800 more? If you
                      prioritize ride quality and can afford it, yes. If you are value-conscious and
                      the cadence sensor does not bother you, the XP 3.0 delivers 85% of the Sinch 2
                      experience at 55% of the price.
                    </p>
                  </div>
                  <div
                    className='rounded-xl p-5 border'
                    style={{ backgroundColor: '#141414', borderColor: '#333' }}
                  >
                    <h3 className='font-bold mb-2' style={{ color: '#f5f5f5' }}>
                      vs. Heybike Mars 2.0 ($699)
                    </h3>
                    <p className='text-sm leading-relaxed' style={{ color: '#a1a1aa' }}>
                      The Mars 2.0 undercuts the XP 3.0 by $300 but makes meaningful compromises: a 500W
                      motor (noticeably less powerful), a smaller 600 Wh battery, shorter range, and an
                      overall build quality that feels a step below. It is a fine ultra-budget option for
                      casual riders, but the XP 3.0&apos;s extra $300 buys you meaningfully more power,
                      range, build quality, and after-sale support. For most riders, the XP 3.0 is the
                      better long-term investment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Who Should Buy */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-4' style={{ color: '#f5f5f5' }}>
                  Who Should Buy the Lectric XP 3.0?
                </h2>
                <div className='space-y-4'>
                  <div
                    className='rounded-xl p-5 border'
                    style={{ backgroundColor: '#171717', borderColor: '#333' }}
                  >
                    <div className='flex items-start gap-3'>
                      <CheckCircle className='h-5 w-5 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      <div>
                        <p className='font-semibold mb-1' style={{ color: '#f5f5f5' }}>Urban commuters</p>
                        <p className='text-sm' style={{ color: '#a1a1aa' }}>
                          If your daily commute is under 15 miles each way and you need to store the bike
                          indoors at your office or apartment, the XP 3.0 is purpose-built for your use case.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='rounded-xl p-5 border'
                    style={{ backgroundColor: '#171717', borderColor: '#333' }}
                  >
                    <div className='flex items-start gap-3'>
                      <CheckCircle className='h-5 w-5 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      <div>
                        <p className='font-semibold mb-1' style={{ color: '#f5f5f5' }}>RV and road-trip riders</p>
                        <p className='text-sm' style={{ color: '#a1a1aa' }}>
                          The folding frame fits easily in RV storage compartments or SUV cargo areas. Two
                          bikes for a couple is very doable in most vehicles.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='rounded-xl p-5 border'
                    style={{ backgroundColor: '#171717', borderColor: '#333' }}
                  >
                    <div className='flex items-start gap-3'>
                      <CheckCircle className='h-5 w-5 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      <div>
                        <p className='font-semibold mb-1' style={{ color: '#f5f5f5' }}>Value-first buyers</p>
                        <p className='text-sm' style={{ color: '#a1a1aa' }}>
                          If your budget is $1,000 and you want the most capable e-bike possible at that
                          price, the XP 3.0 is the answer. No other brand matches Lectric&apos;s
                          specs-per-dollar at this tier.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='rounded-xl p-5 border'
                    style={{ backgroundColor: '#171717', borderColor: '#333' }}
                  >
                    <div className='flex items-start gap-3'>
                      <XCircle className='h-5 w-5 mt-0.5 shrink-0 text-red-500' />
                      <div>
                        <p className='font-semibold mb-1' style={{ color: '#f5f5f5' }}>Not recommended for</p>
                        <p className='text-sm' style={{ color: '#a1a1aa' }}>
                          Riders who need to carry their bike up stairs daily (too heavy), aggressive
                          trail riders (not enough suspension), tall riders over 6&apos;3&quot; (compact
                          geometry), or anyone who prioritizes a natural pedal feel (get a torque-sensor bike).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rating Breakdown */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-6' style={{ color: '#f5f5f5' }}>
                  GreenReviewsHub Rating: 4.4 / 5
                </h2>
                <div className='space-y-4'>
                  {[
                    { label: 'Motor & Performance', score: 4.3 },
                    { label: 'Battery & Range', score: 4.5 },
                    { label: 'Build Quality', score: 4.2 },
                    { label: 'Folding Mechanism', score: 4.5 },
                    { label: 'Ride Comfort', score: 4.0 },
                    { label: 'Value for Money', score: 4.8 },
                    { label: 'Customer Support', score: 4.6 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className='flex items-center justify-between mb-1'>
                        <span className='text-sm font-medium' style={{ color: '#d4d4d8' }}>
                          {item.label}
                        </span>
                        <span className='text-sm font-bold' style={{ color: '#22c55e' }}>
                          {item.score.toFixed(1)}
                        </span>
                      </div>
                      <div className='w-full rounded-full h-2' style={{ backgroundColor: '#333' }}>
                        <div
                          className='h-2 rounded-full'
                          style={{
                            backgroundColor: '#22c55e',
                            width: `${(item.score / 5) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Final Verdict */}
              <section className='mb-12'>
                <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                  The Lectric XP 3.0 is not a perfect e-bike. The cadence sensor is a step behind
                  torque-sensor competitors, the weight makes true portability a stretch, and the
                  suspension is basic. But perfection is not the point, value is.
                </p>
                <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                  At $999, no other folding e-bike delivers a 750W motor, a 672 Wh battery, a
                  functional fold, commuter accessories out of the box, and US-based customer support
                  that actually picks up the phone. Lectric has built its entire brand on this
                  formula: give people more bike for less money, and back it with real service. The
                  XP 3.0 is the purest expression of that philosophy.
                </p>
                <p className='leading-relaxed mb-6' style={{ color: '#d4d4d8' }}>
                  If you are on the fence between the XP 3.0 and something $500-$800 more expensive,
                  ask yourself what that extra money actually buys: usually hydraulic brakes and a
                  torque sensor. Those are nice to have, not need to have. For most riders, the
                  XP 3.0 is more than enough bike.
                </p>

                <AffiliateCTABox
                  productKey={PRODUCT_KEY}
                  badge="Final Verdict"
                  verdict="At $999 with free shipping, a 2-year warranty, and US-based support, no other folding e-bike matches the value. Check today's price at Lectric."
                  source="lectric-xp-3"
                  variant="final"
                />

                <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Still comparing?</h3>
                  <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                    See how this compares against other top options in our full review.
                  </p>
                  <Link
                    href='/reviews'
                    className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
                  >
                    Browse All Reviews
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                </div>
              </section>

              {/* FAQ Section */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-6' style={{ color: '#f5f5f5' }}>
                  Frequently Asked Questions
                </h2>
                <div className='space-y-4'>
                  {faqSchema.mainEntity.map((faq, index) => (
                    <div
                      key={index}
                      className='rounded-xl p-5 border'
                      style={{ backgroundColor: '#171717', borderColor: '#333' }}
                    >
                      <h3 className='font-semibold mb-2' style={{ color: '#f5f5f5' }}>
                        {faq.name}
                      </h3>
                      <p className='text-sm leading-relaxed' style={{ color: '#a1a1aa' }}>
                        {faq.acceptedAnswer.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Back to Reviews */}
              <div className='flex items-center justify-between pt-8 border-t' style={{ borderColor: '#333' }}>
                <Link
                  href='/reviews'
                  className='inline-flex items-center gap-2 text-sm font-medium transition-colors'
                  style={{ color: '#22c55e' }}
                >
                  <ArrowLeft className='h-4 w-4' />
                  Back to All Reviews
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source="lectric-xp-3" />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
