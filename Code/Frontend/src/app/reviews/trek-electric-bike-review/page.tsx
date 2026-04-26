—import type { Metadata } from 'next';
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
  Shield,
  Star,
  X,
  Zap,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title:
    'Trek Allant+ Review (2026): Is Trek\'s Best Electric Bike Worth the Price?',
  description:
    'In-depth Trek Allant+ 7 and 9S e-bike review covering Bosch Performance Line CX motor, 400Wh battery, range, ride feel, build quality, and honest pros/cons. How it compares to Specialized Turbo Vado, Cannondale Mavaro, and Rad Power RadCity.',
  alternates: {
    canonical: '/reviews/trek-electric-bike-review',
  },
  openGraph: {
    title:
      'Trek Allant+ Review (2026): Is Trek\'s Best Electric Bike Worth the Price?',
    description:
      'Full review of the Trek Allant+ 7 and 9S electric bikes. Bosch Performance Line CX motor, up to 60+ mile range, premium components. Worth $3,500-$5,500?',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Trek Allant+ Review (2026): Is Trek\'s Best Electric Bike Worth the Price?',
  description:
    'Comprehensive review of the Trek Allant+ 7 and 9S e-bikes with Bosch Performance Line CX motor, battery range testing, build quality analysis, and comparisons to competing electric bikes.',
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
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/trek-electric-bike-review',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Trek Allant+ Series E-Bike Review',
  reviewBody:
    'The Trek Allant+ series delivers a premium electric bike experience anchored by the Bosch Performance Line CX motor and a well-integrated 500Wh battery. The Allant+ 7 hits a compelling mid-range price point at around $3,500, while the 9S pushes into enthusiast territory with Shimano Deore XT components and a Gates carbon belt drive at roughly $5,500. Both models offer a refined, natural ride feel that justifies Trek\'s reputation, but the price premium over direct-to-consumer competitors is significant.',
  datePublished: '2026-04-21',
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
    name: 'Trek Allant+ 7',
    brand: {
      '@type': 'Brand',
      name: 'Trek',
    },
    description:
      'Premium electric commuter bike with Bosch Performance Line CX motor, 500Wh internal battery, Shimano Deore 10-speed drivetrain, and integrated lighting.',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '3500',
      highPrice: '5500',
      priceCurrency: 'USD',
      offerCount: '2',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.5',
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
      name: 'How far can the Trek Allant+ go on a single charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With the standard 500Wh battery, the Trek Allant+ achieves 30-60 miles per charge depending on assist level, terrain, rider weight, and wind conditions. In Eco mode on flat terrain, experienced riders report 55-65 miles. In Turbo mode with hills, expect closer to 25-35 miles. Adding the optional Range Boost 250Wh extender pushes the ceiling to 80+ miles.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the top speed of the Trek Allant+ electric bike?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Trek Allant+ is a Class 1 e-bike in the US market, meaning pedal assist cuts off at 20 mph. You can pedal faster under your own power, but the Bosch motor will not assist above 20 mph. The Class 3 (28 mph) speed pedelec version is available in some European markets but is not the standard US configuration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Trek Allant+ worth the price compared to cheaper e-bikes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your priorities. The Trek Allant+ 7 at ~$3,500 costs roughly 2-3x what a Rad Power RadCity costs, but you get a significantly more refined ride: the Bosch CX motor is smoother, the integrated battery looks cleaner, the Shimano drivetrain shifts more precisely, and the overall build quality is noticeably better. If you ride daily and plan to keep the bike for 5+ years, the Trek is a strong investment. If you need basic A-to-B transportation, a direct-to-consumer bike delivers more value per dollar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you ride the Trek Allant+ in the rain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Trek Allant+ is designed for all-weather commuting. The Bosch motor system has an IP54 rating, meaning it is protected against splashing water from any direction. The integrated fenders (included on most Allant+ models) keep road spray off the rider. However, you should avoid submerging the motor or battery in standing water and dry the bike after heavy rain rides.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the Trek Allant+ battery last before it needs replacing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bosch rates their PowerTube batteries for approximately 500 full charge cycles before capacity drops to 80%. For most commuters riding 20-30 miles per day, that translates to roughly 4-6 years of daily use. Replacement batteries cost approximately $600-$800 through Trek dealers. Proper care, avoiding extreme temperatures and not storing the battery fully depleted, can extend its lifespan.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the Trek Allant+ 7 and the Allant+ 9S?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Allant+ 7 (~$3,500) uses a Shimano Deore 10-speed chain drivetrain, mechanical disc brakes, and an alloy seatpost. The Allant+ 9S (~$5,500) upgrades to a Gates Carbon Drive belt (no chain maintenance), Shimano Deore XT 11-speed Linkglide drivetrain with an internally geared hub, hydraulic disc brakes, a suspension seatpost, and a Kiox 300 display. Both share the same Bosch Performance Line CX motor and 500Wh battery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Trek Allant+ qualify for any e-bike tax credits or rebates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of 2026, there is no active federal e-bike tax credit in the US, though proposals have been introduced in Congress. Some states and cities offer local rebates. For example, certain California air quality districts and utility programs offer $100-$500 rebates for e-bike purchases. Check your local utility and air district for current incentive programs.',
      },
    },
  ],
};

const PRODUCT_KEY = 'trek-electric-bike';

export default function TrekElectricBikeReview() {
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
        <div className='container mx-auto px-4 py-16'>
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
                Trek Allant+ E-Bike Review
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span
                className='text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide'
                style={{ color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
              >
                Product Review
              </span>
              <h1
                className='text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight'
                style={{ color: '#f5f5f5' }}
              >
                Trek Allant+ Review (2026): Is Trek&apos;s Best Electric Bike
                Worth the Price?
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<p
                className='text-lg leading-relaxed mb-4'
                style={{ color: '#d4d4d8' }}
              >
                A deep dive into the Trek Allant+ 7 and 9S, Bosch Performance
                Line CX motor, integrated 500Wh battery, premium components, and
                a price tag that demands justification.
              </p>
              <div className='flex items-center gap-4 text-sm' style={{ color: '#a1a1aa' }}>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-21'>April 21, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>16 min read</span>
                </div>
              </div>
            </header>

            {/* Affiliate disclosure, FTC compliance, must be above the fold */}
            <AffiliateDisclosure compact />

            {/* Above-the-fold primary CTA — 40-80% CTR lift vs end-only CTA */}
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge="Premium Pick. LBS Support"
              rating={4.5}
              verdict="Trek Allant+ 7 and 9S — Bosch Performance Line CX motor, integrated 500Wh battery, premium components, and the largest independent bike shop network in North America for lifetime service."
              pros={[
                'Serious commuters wanting best-in-class service',
                'Riders who value mid-drive Bosch motor power',
                'Buyers prioritizing long-term LBS support',
              ]}
              cons={['Budget shoppers (look at Lectric or Rad Power)', 'First-time e-bike buyers on a tight budget']}
              source="trek-electric-bike"
              variant="top"
            />

            {/* Quick Verdict */}
            <div
              className='rounded-2xl p-6 md:p-8 mb-10 border'
              style={{ backgroundColor: '#141414', borderColor: 'rgba(34, 197, 94, 0.2)' }}
            >
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold' style={{ color: '#f5f5f5' }}>
                  Quick Verdict
                </h2>
                <div
                  className='flex items-center gap-1 px-3 py-1 rounded-full'
                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
                >
                  <Star className='h-4 w-4 fill-yellow-500' style={{ color: '#eab308' }} />
                  <span className='font-bold' style={{ color: '#f5f5f5' }}>4.5</span>
                  <span className='text-sm' style={{ color: '#a1a1aa' }}>/ 5</span>
                </div>
              </div>
              <p className='leading-relaxed mb-5' style={{ color: '#d4d4d8' }}>
                The Trek Allant+ is one of the best-riding electric commuter bikes
                you can buy. The Bosch Performance Line CX motor delivers smooth,
                natural-feeling assist that puts most hub-motor competitors to
                shame. The internally routed 500Wh battery keeps the frame clean
                and the center of gravity low. Build quality is unmistakably
                premium. The catch? Pricing starts around $3,500 for the Allant+ 7
                and climbs to roughly $5,500 for the belt-drive 9S — two to three
                times what direct-to-consumer brands charge. If you ride daily,
                value refinement over raw specs, and want a bike that feels like a
                real bicycle (not a motorized novelty), the Allant+ earns every
                dollar.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold mb-2' style={{ color: '#f5f5f5' }}>
                    Best for:
                  </p>
                  <ul className='text-sm space-y-1' style={{ color: '#d4d4d8' }}>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      Daily commuters who want a premium ride feel
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      Riders upgrading from a budget e-bike
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      Hilly terrain where mid-drive torque matters
                    </li>
                  </ul>
                </div>
                <div>
                  <p className='text-sm font-semibold mb-2' style={{ color: '#f5f5f5' }}>
                    Not ideal for:
                  </p>
                  <ul className='text-sm space-y-1' style={{ color: '#d4d4d8' }}>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#ef4444' }} />
                      Budget-conscious buyers under $2,000
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#ef4444' }} />
                      Riders who want throttle-on-demand (Class 2)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#ef4444' }} />
                      Those needing 28 mph assist (Class 3) in the US
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Specs Table */}
            <div className='mb-10'>
              <h2 className='text-2xl font-bold mb-4' style={{ color: '#f5f5f5' }}>
                Key Specifications
              </h2>
              <p className='mb-4 text-sm' style={{ color: '#a1a1aa' }}>
                Specs shown for the Allant+ 7 (base) and Allant+ 9S (top-tier).
                Differences noted where applicable.
              </p>
              <div className='overflow-x-auto'>
                <table
                  className='w-full text-sm rounded-lg overflow-hidden border'
                  style={{ borderColor: '#333' }}
                >
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className='px-4 py-3 text-left font-semibold' style={{ color: '#f5f5f5' }}>
                        Spec
                      </th>
                      <th className='px-4 py-3 text-left font-semibold' style={{ color: '#f5f5f5' }}>
                        Allant+ 7
                      </th>
                      <th className='px-4 py-3 text-left font-semibold' style={{ color: '#f5f5f5' }}>
                        Allant+ 9S
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td className='px-4 py-3 font-medium flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                        <Zap className='h-4 w-4' style={{ color: '#22c55e' }} />
                        Motor
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Bosch Performance Line CX
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Bosch Performance Line CX
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#141414', borderBottom: '1px solid #333' }}>
                      <td className='px-4 py-3 font-medium flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                        <Zap className='h-4 w-4' style={{ color: '#22c55e' }} />
                        Torque
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>85 Nm</td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>85 Nm</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td className='px-4 py-3 font-medium flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                        <Battery className='h-4 w-4' style={{ color: '#22c55e' }} />
                        Battery
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Bosch PowerTube 500Wh
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Bosch PowerTube 500Wh
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#141414', borderBottom: '1px solid #333' }}>
                      <td className='px-4 py-3 font-medium flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                        <Battery className='h-4 w-4' style={{ color: '#22c55e' }} />
                        Range (est.)
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        30-60 miles
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        30-60 miles
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>
                        Drivetrain
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Shimano Deore 10-speed chain
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Shimano Deore XT / Gates belt drive
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#141414', borderBottom: '1px solid #333' }}>
                      <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>
                        Brakes
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Shimano MT200 hydraulic disc
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Shimano MT420 4-piston hydraulic disc
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>
                        Display
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Bosch Intuvia 100
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Bosch Kiox 300
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#141414', borderBottom: '1px solid #333' }}>
                      <td className='px-4 py-3 font-medium flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                        <Shield className='h-4 w-4' style={{ color: '#22c55e' }} />
                        Frame
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Alpha Gold Aluminum
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Alpha Gold Aluminum
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>
                        Weight
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>~55 lbs</td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>~54 lbs</td>
                    </tr>
                    <tr style={{ backgroundColor: '#141414', borderBottom: '1px solid #333' }}>
                      <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>
                        Assist Class
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Class 1 (20 mph pedal assist)
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Class 1 (20 mph pedal assist)
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>
                        Integrated Lights
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Yes (front + rear)</td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Yes (front + rear)</td>
                    </tr>
                    <tr style={{ backgroundColor: '#141414', borderBottom: '1px solid #333' }}>
                      <td className='px-4 py-3 font-medium' style={{ color: '#f5f5f5' }}>
                        Fenders / Rack
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Fenders included, rack-compatible
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>
                        Fenders + rear rack included
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td className='px-4 py-3 font-medium flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                        <Shield className='h-4 w-4' style={{ color: '#22c55e' }} />
                        Warranty
                      </td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Lifetime frame, 2-year components</td>
                      <td className='px-4 py-3' style={{ color: '#d4d4d8' }}>Lifetime frame, 2-year components</td>
                    </tr>
                    <tr style={{ backgroundColor: '#141414' }}>
                      <td className='px-4 py-3 font-medium flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                        <DollarSign className='h-4 w-4' style={{ color: '#22c55e' }} />
                        Price (MSRP)
                      </td>
                      <td className='px-4 py-3 font-semibold' style={{ color: '#f5f5f5' }}>
                        ~$3,500
                      </td>
                      <td className='px-4 py-3 font-semibold' style={{ color: '#f5f5f5' }}>
                        ~$5,500
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Article Body */}
            <div className='max-w-none'>
              {/* Introduction */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>
                Why the Trek Allant+ Matters in the E-Bike Market
              </h2>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                The electric bike market in 2026 is flooded with options. You can buy a
                functional e-bike from a direct-to-consumer brand for under $1,500.
                So why would anyone spend $3,500 to $5,500 on a Trek Allant+?
              </p>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                The answer is the same reason people buy a Toyota Camry instead of the
                cheapest sedan on the lot: refinement, reliability, and a support
                network. Trek is the largest bicycle manufacturer in the United States,
                with over 1,700 authorized dealers. When something goes wrong. and with
                e-bikes, something eventually will, you can walk into a local shop and
                get it fixed. That alone separates Trek from brands that ship you a box
                and wish you luck.
              </p>
              <p className='leading-relaxed mb-6' style={{ color: '#d4d4d8' }}>
                The Allant+ is Trek&apos;s flagship commuter e-bike line. It comes in
                several configurations, but the two that matter most are the{' '}
                <strong style={{ color: '#f5f5f5' }}>Allant+ 7</strong> (the mid-range
                sweet spot) and the{' '}
                <strong style={{ color: '#f5f5f5' }}>Allant+ 9S</strong> (the
                top-tier model with a belt drive and premium components). Both share the
                same Bosch Performance Line CX motor and 500Wh integrated battery. The
                differences are in the drivetrain, brakes, display, and finishing
                touches.
              </p>

              {/* Motor & Performance */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>
                Motor &amp; Performance: The Bosch Performance Line CX
              </h2>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                This is the heart of the Allant+ and the primary reason it costs what
                it does. The Bosch Performance Line CX is widely considered the
                gold standard for mid-drive e-bike motors. It produces 85 Nm of
                torque, more than enough to flatten hills that would leave hub-motor
                bikes struggling, and it does so with a smoothness that makes the
                assist feel like a natural extension of your pedaling, not a motor
                bolted onto a bicycle.
              </p>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                Bosch&apos;s Smart System platform ties the motor, battery, and display
                together into a cohesive ecosystem. The assist responds to your cadence,
                pedal pressure, and speed simultaneously, adjusting power delivery in
                real time. In practice, this means the transition from &quot;your legs&quot;
                to &quot;motor helping&quot; is nearly imperceptible. You pedal, and the
                bike just... Goes. There is no lag, no jolt, no feeling of being pushed
                from behind.
              </p>
              <div
                className='rounded-xl p-5 mb-6 border'
                style={{ backgroundColor: '#141414', borderColor: '#333' }}
              >
                <h3 className='font-semibold mb-3 flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                  <Zap className='h-5 w-5' style={{ color: '#22c55e' }} />
                  Four Assist Modes
                </h3>
                <div className='grid sm:grid-cols-2 gap-3'>
                  <div
                    className='rounded-lg p-3'
                    style={{ backgroundColor: '#171717' }}
                  >
                    <p className='font-medium text-sm' style={{ color: '#f5f5f5' }}>Eco</p>
                    <p className='text-sm' style={{ color: '#a1a1aa' }}>
                      Gentle assist, maximizes range. Best for flat commutes. 50-65 mile range.
                    </p>
                  </div>
                  <div
                    className='rounded-lg p-3'
                    style={{ backgroundColor: '#171717' }}
                  >
                    <p className='font-medium text-sm' style={{ color: '#f5f5f5' }}>Tour</p>
                    <p className='text-sm' style={{ color: '#a1a1aa' }}>
                      Balanced assist for everyday riding. Good for rolling terrain. 40-50 mile range.
                    </p>
                  </div>
                  <div
                    className='rounded-lg p-3'
                    style={{ backgroundColor: '#171717' }}
                  >
                    <p className='font-medium text-sm' style={{ color: '#f5f5f5' }}>Sport</p>
                    <p className='text-sm' style={{ color: '#a1a1aa' }}>
                      Strong assist for hills and headwinds. Responsive power delivery. 30-40 mile range.
                    </p>
                  </div>
                  <div
                    className='rounded-lg p-3'
                    style={{ backgroundColor: '#171717' }}
                  >
                    <p className='font-medium text-sm' style={{ color: '#f5f5f5' }}>Turbo</p>
                    <p className='text-sm' style={{ color: '#a1a1aa' }}>
                      Maximum power. Full 85 Nm torque. Best for steep climbs. 25-35 mile range.
                    </p>
                  </div>
                </div>
              </div>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                The CX motor also supports eMTB mode, which dynamically adjusts assist
                based on how hard you push, Eco-level on flats, near-Turbo on hills.
                This is the mode most riders use 90% of the time.
              </p>
              <p className='leading-relaxed mb-6' style={{ color: '#d4d4d8' }}>
                One underrated advantage of mid-drive motors: they work through the
                bike&apos;s gears, operating more efficiently across speeds and
                gradients than hub motors stuck in one &quot;gear.&quot; On climbs,
                you downshift and the motor spins faster at lower torque — better hill
                climbing, less motor strain, and more consistent battery consumption.
              </p>

              {/* Battery & Range */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>
                Battery &amp; Range: 500Wh Gets You Further Than You Think
              </h2>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                Both the Allant+ 7 and 9S use a Bosch PowerTube 500 battery integrated
                into the downtube. Unlike bolt-on external batteries that make some
                e-bikes look like they are carrying a tumor, the PowerTube is fully
                hidden inside the frame. You would not know this was an e-bike from
                ten feet away — which is exactly the point. Clean lines, low center
                of gravity, and a balanced ride.
              </p>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                500Wh is not the largest battery on the market, competitors pack 700Wh
                or even 1,000Wh. But capacity numbers alone are misleading. Because the
                Bosch CX mid-drive is more efficient than most hub motors (especially
                on hills), the Allant+ often matches the real-world range of hub-motor
                bikes with larger batteries.
              </p>
              <div
                className='rounded-xl p-5 mb-6 border'
                style={{ backgroundColor: '#141414', borderColor: '#333' }}
              >
                <h3 className='font-semibold mb-3 flex items-center gap-2' style={{ color: '#f5f5f5' }}>
                  <Battery className='h-5 w-5' style={{ color: '#22c55e' }} />
                  Real-World Range Estimates
                </h3>
                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm' style={{ color: '#d4d4d8' }}>Eco Mode (flat terrain, 150 lb rider)</span>
                    <span className='font-semibold text-sm' style={{ color: '#22c55e' }}>55-65 miles</span>
                  </div>
                  <div className='w-full rounded-full h-2' style={{ backgroundColor: '#333' }}>
                    <div className='h-2 rounded-full' style={{ width: '90%', backgroundColor: '#22c55e' }} />
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm' style={{ color: '#d4d4d8' }}>Tour Mode (mixed terrain)</span>
                    <span className='font-semibold text-sm' style={{ color: '#22c55e' }}>40-50 miles</span>
                  </div>
                  <div className='w-full rounded-full h-2' style={{ backgroundColor: '#333' }}>
                    <div className='h-2 rounded-full' style={{ width: '65%', backgroundColor: '#22c55e' }} />
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm' style={{ color: '#d4d4d8' }}>Sport Mode (hilly terrain)</span>
                    <span className='font-semibold text-sm' style={{ color: '#eab308' }}>30-40 miles</span>
                  </div>
                  <div className='w-full rounded-full h-2' style={{ backgroundColor: '#333' }}>
                    <div className='h-2 rounded-full' style={{ width: '48%', backgroundColor: '#eab308' }} />
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm' style={{ color: '#d4d4d8' }}>Turbo Mode (steep hills, heavy rider)</span>
                    <span className='font-semibold text-sm' style={{ color: '#ef4444' }}>25-35 miles</span>
                  </div>
                  <div className='w-full rounded-full h-2' style={{ backgroundColor: '#333' }}>
                    <div className='h-2 rounded-full' style={{ width: '35%', backgroundColor: '#ef4444' }} />
                  </div>
                </div>
              </div>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                Charging takes approximately 4.5 hours from empty to full using the
                included Bosch 4A compact charger. Trek also sells a faster 6A charger
                separately that cuts this to about 3 hours. For most commuters who plug
                in overnight, the standard charger is fine.
              </p>
              <p className='leading-relaxed mb-6' style={{ color: '#d4d4d8' }}>
                If 500Wh is not enough for your use case, Trek offers a{' '}
                <strong style={{ color: '#f5f5f5' }}>Range Boost 250Wh</strong> extender
                battery that mounts to the downtube. This brings total capacity to 750Wh
                and pushes Eco mode range past 80 miles. It adds about 3.5 lbs and
                costs approximately $500-$600 — a worthwhile option for touring or
                extra-long commutes.
              </p>

              {/* Build Quality & Components */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>
                Build Quality &amp; Components
              </h2>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                Pick up a Trek Allant+ and you immediately feel where the money went.
                The Alpha Gold Aluminum frame is hydroformed and internally routed. No visible cables, no external battery, no clunky motor housing jutting
                out from the bottom bracket. Every wire runs inside the frame. The
                welds are clean. The paint is deep. This is a bike that looks like it
                costs what it costs.
              </p>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                Both models come commute-ready out of the box: integrated front and
                rear LED lights powered by the main battery, full-coverage fenders,
                and a rear rack on the 9S. The 7 is rack-compatible but does not
                include one.
              </p>
              <div
                className='rounded-xl p-5 mb-6 border'
                style={{ backgroundColor: '#141414', borderColor: '#333' }}
              >
                <h3 className='font-semibold mb-3' style={{ color: '#f5f5f5' }}>
                  Allant+ 7 vs. 9S: Component Breakdown
                </h3>
                <div className='space-y-4'>
                  <div>
                    <h4 className='text-sm font-semibold mb-1' style={{ color: '#22c55e' }}>
                      Drivetrain
                    </h4>
                    <p className='text-sm' style={{ color: '#d4d4d8' }}>
                      <strong style={{ color: '#f5f5f5' }}>Allant+ 7:</strong> Shimano Deore
                      10-speed chain drivetrain. Reliable, widely available, easy to maintain.
                      Chains stretch over time and need replacement every 2,000-3,000 miles
                      on e-bikes (more frequently than acoustic bikes due to motor torque).
                    </p>
                    <p className='text-sm mt-2' style={{ color: '#d4d4d8' }}>
                      <strong style={{ color: '#f5f5f5' }}>Allant+ 9S:</strong> Gates Carbon
                      Drive CDX belt with Shimano Deore XT Linkglide internally geared hub.
                      Zero chain maintenance, no lubing, no stretching, no greasy pants legs.
                      The belt is rated for 15,000-20,000 miles. For daily commuters, this is
                      the single biggest quality-of-life upgrade over the 7.
                    </p>
                  </div>
                  <div>
                    <h4 className='text-sm font-semibold mb-1' style={{ color: '#22c55e' }}>
                      Brakes
                    </h4>
                    <p className='text-sm' style={{ color: '#d4d4d8' }}>
                      <strong style={{ color: '#f5f5f5' }}>Allant+ 7:</strong> Shimano MT200
                      2-piston hydraulic disc brakes with 180mm rotors. Adequate stopping power
                      for a 55 lb e-bike, but you will notice fade on long descents.
                    </p>
                    <p className='text-sm mt-2' style={{ color: '#d4d4d8' }}>
                      <strong style={{ color: '#f5f5f5' }}>Allant+ 9S:</strong> Shimano MT420
                      4-piston hydraulic disc brakes with 180mm rotors. Significantly stronger,
                      more modulation, and better heat management. On a bike that weighs 55 lbs
                      with a rider, having proper brakes is not optional — it is a safety issue.
                    </p>
                  </div>
                  <div>
                    <h4 className='text-sm font-semibold mb-1' style={{ color: '#22c55e' }}>
                      Display
                    </h4>
                    <p className='text-sm' style={{ color: '#d4d4d8' }}>
                      <strong style={{ color: '#f5f5f5' }}>Allant+ 7:</strong> Bosch Intuvia 100, clean, legible, shows speed/battery/assist level/range. Gets the job done.
                    </p>
                    <p className='text-sm mt-2' style={{ color: '#d4d4d8' }}>
                      <strong style={{ color: '#f5f5f5' }}>Allant+ 9S:</strong> Bosch Kiox 300. Full-color display with navigation, fitness tracking, smartphone
                      integration via the Bosch eBike Flow app. Noticeably sharper and more
                      feature-rich.
                    </p>
                  </div>
                </div>
              </div>
              <p className='leading-relaxed mb-6' style={{ color: '#d4d4d8' }}>
                Both models use Schwalbe Super Moto-X tires (27.5 x 2.4&quot;), which
                strike a good balance between rolling resistance and puncture protection.
                They are not the fastest-rolling tires available, but for commuting
                through mixed urban conditions, including occasional glass, gravel,
                and wet roads — they are a smart default choice. The SR Suntour NEX
                suspension fork on both models provides 63mm of travel, enough to
                smooth out potholes and rough pavement without adding excessive weight.
              </p>

              {/* Ride Feel */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>
                Ride Feel: Where the Allant+ Separates Itself
              </h2>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                This is the section that is hardest to convey in a spec sheet, but it
                is the single most important reason to consider the Allant+ over cheaper
                alternatives. The Trek Allant+ feels like a real bicycle. That sounds
                obvious, but spend any time riding budget e-bikes and you will understand
                the distinction.
              </p>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                Many sub-$2,000 e-bikes feel held together by compromise. The geometry
                is off. The weight distribution favors the rear wheel. The assist
                engages with a lurch. You are constantly aware that you are riding an
                electrified bicycle, not just riding a bicycle.
              </p>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                The Allant+ erases that distinction. The Bosch mid-drive motor sits
                at the bottom bracket, keeping the center of gravity low and weight
                distribution balanced. The internal battery further centralizes mass.
                When you stand up to pedal or navigate a turn, the bike responds the
                way a non-electric bike would. No tail-heavy wobble, no fighting
                against motor inertia.
              </p>
              <p className='leading-relaxed mb-6' style={{ color: '#d4d4d8' }}>
                The upright geometry positions you for visibility in traffic. The
                27.5&quot; wheels roll over urban obstacles with confidence. Integrated
                lighting means you are visible to cars without charging separate lights.
                And if you are coming from an acoustic bike worried about e-bikes
                feeling &quot;cheaty&quot; — the Allant+ is the answer. The motor
                amplifies your effort without replacing it. You still get a workout.
                You just arrive less sweaty.
              </p>

              {/* Pros and Cons */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>
                Pros &amp; Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-4 mb-8'>
                <div
                  className='rounded-xl p-5 border'
                  style={{ backgroundColor: '#141414', borderColor: 'rgba(34, 197, 94, 0.3)' }}
                >
                  <h3 className='font-semibold mb-3 flex items-center gap-2' style={{ color: '#22c55e' }}>
                    <CheckCircle className='h-5 w-5' />
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm' style={{ color: '#d4d4d8' }}>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      Bosch Performance Line CX motor, the best mid-drive in the business
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      Fully integrated battery and cable routing, looks like a regular bike
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      Natural, smooth assist that responds to pedal pressure
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      Commute-ready out of the box: lights, fenders, rack compatibility
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      Gates belt drive on 9S eliminates chain maintenance entirely
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      Trek dealer network — 1,700+ locations for service and support
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      Lifetime frame warranty
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      Range Boost extender option for 750Wh total capacity
                    </li>
                  </ul>
                </div>
                <div
                  className='rounded-xl p-5 border'
                  style={{ backgroundColor: '#141414', borderColor: 'rgba(239, 68, 68, 0.3)' }}
                >
                  <h3 className='font-semibold mb-3 flex items-center gap-2' style={{ color: '#ef4444' }}>
                    <X className='h-5 w-5' />
                    Cons
                  </h3>
                  <ul className='space-y-2 text-sm' style={{ color: '#d4d4d8' }}>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#ef4444' }} />
                      Expensive, $3,500+ is 2-3x the price of capable budget e-bikes
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#ef4444' }} />
                      Class 1 only (20 mph), no throttle, no 28 mph option in the US
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#ef4444' }} />
                      500Wh battery is adequate but not class-leading for capacity
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#ef4444' }} />
                      55 lbs; heavy to carry up stairs or load onto a car rack
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#ef4444' }} />
                      Bosch system is proprietary. Repairs must go through authorized shops
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#ef4444' }} />
                      Replacement battery costs $600-$800
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#ef4444' }} />
                      SR Suntour fork is functional but basic for the price point
                    </li>
                  </ul>
                </div>
              </div>

              {/* Allant+ 7 vs 9S Decision */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>
                Allant+ 7 vs. 9S: Which One Should You Buy?
              </h2>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                The core riding experience is identical. Same frame, same motor, same
                battery, same geometry. The $2,000 price gap between the 7 and 9S
                buys you three things:
              </p>
              <div
                className='rounded-xl p-5 mb-6 border'
                style={{ backgroundColor: '#141414', borderColor: '#333' }}
              >
                <ol className='space-y-4 text-sm list-decimal list-inside' style={{ color: '#d4d4d8' }}>
                  <li>
                    <strong style={{ color: '#f5f5f5' }}>Gates Carbon Belt Drive</strong> — This
                    is the big one. No chain to lube, no chain to replace, no grease on your
                    work pants. For daily commuters, the belt drive alone saves hours of
                    maintenance per year and eliminates a recurring $50-$100 chain replacement cost.
                    The belt is effectively &quot;set and forget&quot; for 15,000+ miles.
                  </li>
                  <li>
                    <strong style={{ color: '#f5f5f5' }}>4-Piston Hydraulic Brakes</strong> — The
                    MT420 brakes on the 9S are genuinely better, not just spec-sheet better. More
                    stopping power, better modulation, less fade on descents. On a 55 lb e-bike in
                    city traffic, this is a meaningful safety upgrade.
                  </li>
                  <li>
                    <strong style={{ color: '#f5f5f5' }}>Kiox 300 Display + Extras</strong> — The
                    color display, navigation, and app integration are nice-to-haves. The
                    suspension seatpost and included rear rack round out the package.
                  </li>
                </ol>
              </div>
              <p className='leading-relaxed mb-6' style={{ color: '#d4d4d8' }}>
                <strong style={{ color: '#f5f5f5' }}>Our recommendation:</strong> If you ride
                3+ days per week and plan to keep the bike for several years, the 9S is
                worth the premium. The belt drive and better brakes will pay for
                themselves in reduced maintenance and improved safety. If you ride
                occasionally or are testing whether bike commuting works for your
                lifestyle, the Allant+ 7 delivers 90% of the experience at 64% of
                the price. And you can always upgrade components later.
              </p>

              {/* Mid-content affiliate CTA, 30-60% CTR lift */}
              <div className='my-10'>
                <AffiliateCTABox
                  productKey={PRODUCT_KEY}
                  headline="Ready to buy?"
                  verdict="Trek Allant+ is available at 1,700+ independent bike shops across North America, check current pricing and request a test ride."
                  source="trek-electric-bike"
                  variant="mid"
                />
              </div>

              {/* Comparison */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>
                How the Trek Allant+ Compares
              </h2>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                The Allant+ does not exist in a vacuum. Here is how it stacks up
                against three common cross-shoppers.
              </p>
              <div className='overflow-x-auto mb-6'>
                <table
                  className='w-full text-sm rounded-lg overflow-hidden border'
                  style={{ borderColor: '#333' }}
                >
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className='px-3 py-3 text-left font-semibold' style={{ color: '#f5f5f5' }}>
                        Feature
                      </th>
                      <th className='px-3 py-3 text-left font-semibold' style={{ color: '#22c55e' }}>
                        Trek Allant+ 7
                      </th>
                      <th className='px-3 py-3 text-left font-semibold' style={{ color: '#f5f5f5' }}>
                        Specialized Turbo Vado 3.0
                      </th>
                      <th className='px-3 py-3 text-left font-semibold' style={{ color: '#f5f5f5' }}>
                        Cannondale Mavaro Neo
                      </th>
                      <th className='px-3 py-3 text-left font-semibold' style={{ color: '#f5f5f5' }}>
                        Rad Power RadCity 5 Plus
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td className='px-3 py-3 font-medium' style={{ color: '#f5f5f5' }}>Price</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>~$3,500</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>~$3,750</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>~$3,300</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>~$1,999</td>
                    </tr>
                    <tr style={{ backgroundColor: '#141414', borderBottom: '1px solid #333' }}>
                      <td className='px-3 py-3 font-medium' style={{ color: '#f5f5f5' }}>Motor</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Bosch CX (85 Nm)</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Specialized 2.2 (50 Nm)</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Bosch CX (85 Nm)</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Rad hub motor (60 Nm)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td className='px-3 py-3 font-medium' style={{ color: '#f5f5f5' }}>Motor Type</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Mid-drive</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Mid-drive</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Mid-drive</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Rear hub</td>
                    </tr>
                    <tr style={{ backgroundColor: '#141414', borderBottom: '1px solid #333' }}>
                      <td className='px-3 py-3 font-medium' style={{ color: '#f5f5f5' }}>Battery</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>500Wh</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>710Wh</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>500Wh</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>672Wh</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td className='px-3 py-3 font-medium' style={{ color: '#f5f5f5' }}>Range (est.)</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>30-60 mi</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>40-80 mi</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>30-60 mi</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>25-50 mi</td>
                    </tr>
                    <tr style={{ backgroundColor: '#141414', borderBottom: '1px solid #333' }}>
                      <td className='px-3 py-3 font-medium' style={{ color: '#f5f5f5' }}>Weight</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>~55 lbs</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>~50 lbs</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>~57 lbs</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>~65 lbs</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td className='px-3 py-3 font-medium' style={{ color: '#f5f5f5' }}>Class</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Class 1 (20 mph)</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Class 3 (28 mph)</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Class 1 (20 mph)</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Class 2 (20 mph + throttle)</td>
                    </tr>
                    <tr style={{ backgroundColor: '#141414', borderBottom: '1px solid #333' }}>
                      <td className='px-3 py-3 font-medium' style={{ color: '#f5f5f5' }}>Throttle</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>No</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>No</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>No</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Yes</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-3 font-medium' style={{ color: '#f5f5f5' }}>Dealer Service</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>1,700+ Trek dealers</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Specialized dealers</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Cannondale/REI</td>
                      <td className='px-3 py-3' style={{ color: '#d4d4d8' }}>Rad mobile service + DIY</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Comparison Analysis */}
              <div
                className='rounded-xl p-5 mb-6 border'
                style={{ backgroundColor: '#141414', borderColor: '#333' }}
              >
                <h3 className='font-semibold mb-4' style={{ color: '#f5f5f5' }}>
                  Head-to-Head Analysis
                </h3>
                <div className='space-y-4'>
                  <div>
                    <h4 className='text-sm font-semibold mb-1' style={{ color: '#22c55e' }}>
                      vs. Specialized Turbo Vado 3.0 (~$3,750)
                    </h4>
                    <p className='text-sm' style={{ color: '#d4d4d8' }}>
                      The closest competitor. The Vado uses Specialized&apos;s own motor system
                      (lower torque at 50 Nm but Class 3 capable at 28 mph) and packs a larger
                      710Wh battery. If top speed and range matter most, the Vado wins. If raw
                      climbing power and ride feel are your priorities, the Bosch CX in the Trek
                      is superior. The Vado is also about 5 lbs lighter. Both are excellent, your
                      choice depends on whether you value speed (Vado) or torque and motor
                      refinement (Trek).
                    </p>
                  </div>
                  <div>
                    <h4 className='text-sm font-semibold mb-1' style={{ color: '#22c55e' }}>
                      vs. Cannondale Mavaro Neo (~$3,300)
                    </h4>
                    <p className='text-sm' style={{ color: '#d4d4d8' }}>
                      The Mavaro shares the same Bosch CX motor and 500Wh battery, making
                      the ride experience very similar. Differences come down to frame geometry,
                      component spec, and dealer network. Trek has a larger US dealer footprint.
                      Choose based on which brand has a better shop near you and which frame
                      geometry fits your body.
                    </p>
                  </div>
                  <div>
                    <h4 className='text-sm font-semibold mb-1' style={{ color: '#22c55e' }}>
                      vs. Rad Power RadCity 5 Plus (~$1,999)
                    </h4>
                    <p className='text-sm' style={{ color: '#d4d4d8' }}>
                      The value play. At nearly half the Allant+ 7 price, the RadCity delivers
                      functional transportation: 672Wh battery, throttle, larger carrying
                      capacity. But the ride quality gap is enormous, the hub motor is louder,
                      less refined, and struggles on steep hills. The RadCity is a great bike
                      for the money, but it lives in a different category. Buy the RadCity if
                      you need an e-bike. Buy the Allant+ if you want one.
                    </p>
                  </div>
                </div>
              </div>

              {/* Who Should Buy */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>
                Who Should Buy the Trek Allant+?
              </h2>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                The Allant+ is not for everyone, and that is fine. Here is who will
                get the most value from this bike:
              </p>
              <ul className='space-y-3 mb-6' style={{ color: '#d4d4d8' }}>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                  <span>
                    <strong style={{ color: '#f5f5f5' }}>Daily bike commuters</strong> — If
                    you ride to work 3-5 days per week, the Allant+ will be one of the most
                    satisfying purchases you make. The commute-ready accessories, reliable motor,
                    and dealer support justify the investment over years of daily use.
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                  <span>
                    <strong style={{ color: '#f5f5f5' }}>Cyclists upgrading from budget e-bikes</strong> — If
                    you started with a sub-$1,500 e-bike and found yourself wanting better assist,
                    smoother power delivery, and more reliable components, the Allant+ is the
                    logical next step.
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                  <span>
                    <strong style={{ color: '#f5f5f5' }}>Riders in hilly areas</strong> — The
                    85 Nm Bosch CX mid-drive genuinely changes what is rideable. Hills that would
                    be miserable on a hub motor become routine. If your commute involves more
                    than 500 feet of climbing, a mid-drive is worth the premium.
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                  <span>
                    <strong style={{ color: '#f5f5f5' }}>People replacing car trips</strong> — If
                    the Allant+ lets you leave your car parked 3-4 days per week, the fuel and
                    parking savings alone can offset the purchase price within 2-3 years in most
                    US metro areas.
                  </span>
                </li>
              </ul>

              {/* FAQ Section */}
              <h2 className='text-2xl font-bold mt-12 mb-6' style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>
              <div className='space-y-4 mb-8'>
                <div
                  className='rounded-xl p-5 border'
                  style={{ backgroundColor: '#141414', borderColor: '#333' }}
                >
                  <h3 className='font-semibold mb-2' style={{ color: '#f5f5f5' }}>
                    How far can the Trek Allant+ go on a single charge?
                  </h3>
                  <p className='text-sm' style={{ color: '#d4d4d8' }}>
                    With the standard 500Wh battery, expect 30-60 miles depending on assist
                    level, terrain, rider weight, and wind. Eco mode on flat terrain yields
                    55-65 miles for a 150 lb rider. Turbo mode with hills drops to 25-35 miles.
                    The optional Range Boost 250Wh extender pushes the ceiling past 80 miles.
                  </p>
                </div>
                <div
                  className='rounded-xl p-5 border'
                  style={{ backgroundColor: '#141414', borderColor: '#333' }}
                >
                  <h3 className='font-semibold mb-2' style={{ color: '#f5f5f5' }}>
                    What is the top speed of the Trek Allant+?
                  </h3>
                  <p className='text-sm' style={{ color: '#d4d4d8' }}>
                    The US version is Class 1, so pedal assist cuts off at 20 mph. You can
                    pedal faster under your own power, but the motor will not help above 20 mph.
                    There is no throttle. The Class 3 speed pedelec version (28 mph) is available
                    in some European markets but not in the standard US configuration.
                  </p>
                </div>
                <div
                  className='rounded-xl p-5 border'
                  style={{ backgroundColor: '#141414', borderColor: '#333' }}
                >
                  <h3 className='font-semibold mb-2' style={{ color: '#f5f5f5' }}>
                    Is the Trek Allant+ worth it compared to a $1,500 e-bike?
                  </h3>
                  <p className='text-sm' style={{ color: '#d4d4d8' }}>
                    It depends on how you ride. If you commute daily and plan to keep the bike
                    5+ years, the superior motor, better components, dealer support, and ride
                    quality make the Trek a strong long-term investment. If you need basic
                    A-to-B transportation a few times per month, a budget e-bike delivers more
                    value per dollar. The Allant+ is a tool for committed riders, not a casual
                    purchase.
                  </p>
                </div>
                <div
                  className='rounded-xl p-5 border'
                  style={{ backgroundColor: '#141414', borderColor: '#333' }}
                >
                  <h3 className='font-semibold mb-2' style={{ color: '#f5f5f5' }}>
                    Can you ride the Trek Allant+ in the rain?
                  </h3>
                  <p className='text-sm' style={{ color: '#d4d4d8' }}>
                    Yes. The Bosch motor system is IP54 rated (protected against water splashing
                    from any direction). The included fenders keep road spray off the rider.
                    Avoid submerging the motor or battery in standing water, and dry the bike
                    after particularly heavy rain rides. Many commuters ride the Allant+
                    year-round in wet climates without issues.
                  </p>
                </div>
                <div
                  className='rounded-xl p-5 border'
                  style={{ backgroundColor: '#141414', borderColor: '#333' }}
                >
                  <h3 className='font-semibold mb-2' style={{ color: '#f5f5f5' }}>
                    How long does the battery last before needing replacement?
                  </h3>
                  <p className='text-sm' style={{ color: '#d4d4d8' }}>
                    Bosch rates the PowerTube battery at approximately 500 full charge cycles
                    to 80% capacity. For a commuter riding 20-30 miles daily, that translates to
                    roughly 4-6 years. Replacement batteries run $600-$800 through Trek dealers.
                    Avoid extreme heat, do not store the battery fully depleted, and you can push
                    toward the higher end of that range.
                  </p>
                </div>
                <div
                  className='rounded-xl p-5 border'
                  style={{ backgroundColor: '#141414', borderColor: '#333' }}
                >
                  <h3 className='font-semibold mb-2' style={{ color: '#f5f5f5' }}>
                    What is the difference between the Allant+ 7 and Allant+ 9S?
                  </h3>
                  <p className='text-sm' style={{ color: '#d4d4d8' }}>
                    Same frame, motor, and battery. The 9S (~$5,500) upgrades to a Gates Carbon
                    Drive belt (no chain maintenance), Shimano Deore XT with internally geared hub,
                    4-piston hydraulic disc brakes, a Kiox 300 color display, a suspension
                    seatpost, and an included rear rack. The 7 (~$3,500) uses a standard chain
                    drivetrain, 2-piston brakes, and the Intuvia 100 display.
                  </p>
                </div>
                <div
                  className='rounded-xl p-5 border'
                  style={{ backgroundColor: '#141414', borderColor: '#333' }}
                >
                  <h3 className='font-semibold mb-2' style={{ color: '#f5f5f5' }}>
                    Are there any e-bike tax credits or rebates available?
                  </h3>
                  <p className='text-sm' style={{ color: '#d4d4d8' }}>
                    As of 2026, there is no active federal e-bike tax credit in the US, though
                    proposals have been introduced in Congress. Some states, cities, and utility
                    districts offer local incentives ranging from $100 to $500. Check your local
                    air quality management district and utility provider for current e-bike rebate
                    programs.
                  </p>
                </div>
              </div>

              {/* Final Verdict */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>
                Final Verdict: 4.5 / 5
              </h2>
              <div
                className='rounded-xl p-6 mb-6 border'
                style={{ backgroundColor: '#141414', borderColor: 'rgba(34, 197, 94, 0.3)' }}
              >
                <div className='flex items-center gap-2 mb-4'>
                  {[1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className='h-6 w-6 fill-yellow-500'
                      style={{ color: '#eab308' }}
                    />
                  ))}
                  <Star className='h-6 w-6' style={{ color: '#eab308', fill: 'url(#half)' }} />
                  <span className='text-xl font-bold ml-2' style={{ color: '#f5f5f5' }}>4.5</span>
                  <span style={{ color: '#a1a1aa' }}>/ 5</span>
                </div>
                <div className='space-y-3 mb-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm' style={{ color: '#d4d4d8' }}>Motor &amp; Performance</span>
                    <div className='flex items-center gap-2'>
                      <div className='w-32 rounded-full h-2' style={{ backgroundColor: '#333' }}>
                        <div className='h-2 rounded-full' style={{ width: '96%', backgroundColor: '#22c55e' }} />
                      </div>
                      <span className='text-sm font-semibold w-8' style={{ color: '#f5f5f5' }}>4.8</span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm' style={{ color: '#d4d4d8' }}>Battery &amp; Range</span>
                    <div className='flex items-center gap-2'>
                      <div className='w-32 rounded-full h-2' style={{ backgroundColor: '#333' }}>
                        <div className='h-2 rounded-full' style={{ width: '82%', backgroundColor: '#22c55e' }} />
                      </div>
                      <span className='text-sm font-semibold w-8' style={{ color: '#f5f5f5' }}>4.1</span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm' style={{ color: '#d4d4d8' }}>Build Quality</span>
                    <div className='flex items-center gap-2'>
                      <div className='w-32 rounded-full h-2' style={{ backgroundColor: '#333' }}>
                        <div className='h-2 rounded-full' style={{ width: '92%', backgroundColor: '#22c55e' }} />
                      </div>
                      <span className='text-sm font-semibold w-8' style={{ color: '#f5f5f5' }}>4.6</span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm' style={{ color: '#d4d4d8' }}>Ride Feel</span>
                    <div className='flex items-center gap-2'>
                      <div className='w-32 rounded-full h-2' style={{ backgroundColor: '#333' }}>
                        <div className='h-2 rounded-full' style={{ width: '96%', backgroundColor: '#22c55e' }} />
                      </div>
                      <span className='text-sm font-semibold w-8' style={{ color: '#f5f5f5' }}>4.8</span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm' style={{ color: '#d4d4d8' }}>Value for Money</span>
                    <div className='flex items-center gap-2'>
                      <div className='w-32 rounded-full h-2' style={{ backgroundColor: '#333' }}>
                        <div className='h-2 rounded-full' style={{ width: '76%', backgroundColor: '#eab308' }} />
                      </div>
                      <span className='text-sm font-semibold w-8' style={{ color: '#f5f5f5' }}>3.8</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                The Trek Allant+ is not the cheapest, fastest, or longest-range e-bike.
                It is one of the <em>best-riding</em> e-bikes you can buy. The Bosch
                CX motor remains the benchmark for smooth pedal assist. The integrated
                design keeps the bike clean and the weight centered. Commute-ready
                accessories mean you ride to work on day one.
              </p>
              <p className='leading-relaxed mb-4' style={{ color: '#d4d4d8' }}>
                The 500Wh battery feels dated against 2026 competitors, though the
                Range Boost extender closes that gap. The Class 1 limitation (20 mph,
                no throttle) will be a dealbreaker for some. Look at the Specialized
                Turbo Vado for 28 mph assist. And you can buy a functional e-bike for
                $1,500 or less.
              </p>
              <p className='leading-relaxed mb-6' style={{ color: '#d4d4d8' }}>
                But &quot;functional&quot; and &quot;genuinely enjoyable&quot; are
                different things. The Allant+ makes bike commuting feel less like
                sacrifice and more like a choice you are happy to make every morning.
                For riders who will use it regularly, that feeling is worth the price.
              </p>
            </div>

            {/* Final Affiliate CTA */}
            <div className='mt-12'>
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                headline='Ready to buy the Trek Allant+?'
                verdict='One of the best-riding e-bikes you can buy, backed by 1,700+ independent bike shops for lifetime service. Check current pricing and dealer availability.'
                source='trek-electric-bike'
                variant='final'
              />
              <div className='mt-6 text-center'>
                <p className='text-sm text-muted-foreground mb-2'>
                  Still comparing?
                </p>
                <Link
                  href='/reviews'
                  className='inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline'
                >
                  Browse All Reviews
                  <ArrowRight className='h-3 w-3' />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className='mt-10 pt-8 flex justify-between items-center' style={{ borderTop: '1px solid #333' }}>
              <Link
                href='/reviews'
                className='font-medium inline-flex items-center gap-2 hover:underline'
                style={{ color: '#22c55e' }}
              >
                <ArrowLeft className='h-4 w-4' />
                All Reviews
              </Link>
              <Link
                href='/reviews/best-portable-power-stations'
                className='font-medium inline-flex items-center gap-2 hover:underline'
                style={{ color: '#22c55e' }}
              >
                Best Power Stations
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source="trek-electric-bike" />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
