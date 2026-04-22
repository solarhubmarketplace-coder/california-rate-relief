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
  Sun,
  X,
  XCircle,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Greenworks 80V 21" Self-Propelled Lawn Mower Review: The Mid-Range Power Play for 2026',
  description:
    'In-depth Greenworks 80V 21-inch self-propelled lawn mower review covering Smart Cut technology, 80V brushless motor, 60-minute runtime, 80V vs 40V vs 56V platform comparison, and cut quality vs EGO and Ryobi. 4.5/5 rating.',
  alternates: {
    canonical: '/reviews/greenworks-80v-lawn-mower-review',
  },
  openGraph: {
    title:
      'Greenworks 80V 21" Self-Propelled Lawn Mower Review: The Mid-Range Power Play for 2026',
    description:
      'Detailed review of the Greenworks 80V self-propelled mower — 21-inch steel deck, Smart Cut auto-adjusting power, 80V 4.0Ah battery, up to 60 min runtime, LED headlights. Is it worth $499?',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Greenworks 80V 21" Self-Propelled Lawn Mower Review: The Mid-Range Power Play for 2026',
  description:
    'In-depth review of the Greenworks 80V self-propelled mower covering Smart Cut technology, battery performance, 80V platform ecosystem, and comparison to EGO and Ryobi.',
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
  author: {
    '@type': 'Organization',
    name: 'GreenVerdict',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenVerdict',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/greenworks-80v-lawn-mower-review',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Greenworks 80V 21" Self-Propelled Lawn Mower Review',
  reviewBody:
    'The Greenworks 80V 21-inch self-propelled mower hits the sweet spot between budget 40V mowers and premium 56V machines. At $499 with a 4.0Ah battery and charger, it delivers up to 60 minutes of runtime, a brushless motor with Smart Cut technology that auto-adjusts power based on grass thickness, rear wheel drive self-propulsion, LED headlights, and a foldable handle. It plugs into the Greenworks 80V Pro platform with 25+ compatible tools, giving you more voltage headroom than 40V systems at a lower price than the EGO 56V ecosystem.',
  datePublished: '2026-04-21',
  author: {
    '@type': 'Organization',
    name: 'GreenVerdict',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenVerdict',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  itemReviewed: {
    '@type': 'Product',
    name: 'Greenworks 80V 21" Self-Propelled Lawn Mower',
    brand: {
      '@type': 'Brand',
      name: 'Greenworks',
    },
    description:
      '21-inch self-propelled electric lawn mower with 80V brushless motor, Smart Cut technology, 4.0Ah battery, rear wheel drive, LED headlights, 3-in-1 mulch/bag/side discharge, and foldable handle.',
    offers: {
      '@type': 'Offer',
      price: '499',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
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
      name: 'How long does the Greenworks 80V lawn mower run on a single charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With the included 4.0Ah battery, the Greenworks 80V mower runs for up to 60 minutes. Real-world runtime on average suburban grass is typically 45-55 minutes depending on grass thickness and whether Smart Cut is actively ramping up power for dense patches. That comfortably covers most 1/3 to 1/2 acre yards on a single charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Smart Cut technology on the Greenworks 80V mower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Smart Cut is Greenworks\u2019 automatic load-sensing system. It monitors blade resistance in real time and increases motor power when it detects thick or dense grass, then reduces power on thinner sections to conserve battery. You get consistent cut quality without manually adjusting speed, and better battery efficiency because the mower only uses full power when it actually needs it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Greenworks 80V battery compatible with other Greenworks tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The 80V 4.0Ah battery works with all 25+ tools in the Greenworks 80V Pro platform, including string trimmers, leaf blowers, hedge trimmers, chainsaws, and snow blowers. If you already own Greenworks 80V tools, you can buy the mower as tool-only and use your existing batteries.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Greenworks 80V mower compare to the EGO Select Cut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EGO Select Cut XP ($799) has a larger battery (10.0Ah vs 4.0Ah), the multi-blade Select Cut system with three swappable blade types, and a bigger tool ecosystem (70+ vs 25+ tools). The Greenworks 80V ($499) costs $300 less, has Smart Cut auto-adjusting technology, and delivers comparable 60-minute runtime thanks to its higher voltage efficiency. For homeowners who want more power than 40V without paying premium 56V prices, the Greenworks 80V is the better value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is 80V better than 40V for lawn mowers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, in most cases. Higher voltage means more torque at lower amperage, which translates to better cutting power in thick grass, longer runtime per amp-hour, and a cooler-running motor. An 80V mower with a 4.0Ah battery delivers 320 watt-hours of energy, while a 40V mower with a 6.0Ah battery delivers only 240 watt-hours. You get more power and more runtime from a physically smaller, lighter battery pack.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Greenworks 80V mower handle thick or wet grass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The 80V brushless motor delivers significantly more torque than 40V mowers, and Smart Cut automatically ramps up power when it detects thick patches. For wet grass, raise the cut height one notch and make two passes for the cleanest result. The 80V platform handles conditions that would bog down most 40V mowers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Greenworks 80V self-propelled mower work on hills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The rear wheel drive self-propulsion handles moderate slopes reliably. At ~62 lbs with battery, it is heavier than budget 40V mowers but lighter than many gas self-propelled models. The higher torque from the 80V motor helps maintain consistent speed on inclines without the battery drain you would see from a 40V system working harder to compensate.',
      },
    },
  ],
};

const PRODUCT_KEY = 'greenworks-80v-lawn-mower';

export default function Greenworks80VLawnMowerReview() {
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
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
              <Link
                href='/reviews'
                className='hover:text-primary transition-colors'
              >
                Reviews
              </Link>
              <ChevronRight className='h-3 w-3' />
              <Link
                href='/reviews/best-electric-lawn-mower'
                className='hover:text-primary transition-colors'
              >
                Best Electric Lawn Mowers
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>
                Greenworks 80V Self-Propelled
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Greenworks 80V 21&quot; Self-Propelled Lawn Mower Review: The
                Mid-Range Power Play for 2026
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-21'>April 21, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>12 min read</span>
                </div>
              </div>
            </header>

            {/* Affiliate Disclosure + Top CTA */}
            <AffiliateDisclosure compact />
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Best Mid-Range Value'
              rating={4.5}
              verdict='80V brushless, Smart Cut auto power adjust, 60 min runtime, 21-inch deck. More power than 40V, $300 less than EGO.'
              pros={[
                '80V torque handles thick, wet grass',
                'Smart Cut auto-adjusts motor power',
                '60 min runtime on 4.0Ah battery',
                'LED headlights included',
              ]}
              cons={[
                'Smaller tool ecosystem than EGO or DeWalt',
                'Single blade — no swappable cuts',
              ]}
              source='greenworks-80v-lawn-mower'
              variant='top'
            />

            {/* Quick Verdict */}
            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  Quick Verdict
                </h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.5</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                The Greenworks 80V is the electric mower for homeowners who want
                real power without paying premium prices. At $499 with battery and
                charger, it bridges the gap between budget 40V mowers that struggle
                in thick grass and $800 flagship machines with features most people
                never use. Smart Cut technology auto-adjusts motor power based on
                grass conditions, the 80V brushless motor delivers torque that 40V
                systems simply cannot match, and 60 minutes of runtime covers
                yards up to half an acre. If your 40V mower bogs down in
                Bermuda grass or your yard is just a bit too big for a budget
                battery, this is the mower that fixes both problems.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Mid-size yards (1/4 to 1/2 acre)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Homeowners who need more power than 40V
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Anyone already invested in the Greenworks 80V platform
                    </li>
                  </ul>
                </div>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Not ideal for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Budget buyers under $400 (Ryobi 40V is better value)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Yards over 3/4 acre (need second battery or riding mower)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Lawn perfectionists who want multi-blade swapping (EGO Select Cut)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Buy CTA */}
            <div className='bg-card border border-border rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4'>
              <div>
                <p className='text-foreground font-semibold'>
                  Greenworks 80V 21&quot; Self-Propelled Mower
                </p>
                <p className='text-sm text-muted-foreground'>
                  $499 with 4.0Ah battery + charger
                </p>
              </div>
              <BuyButton
                productKey={PRODUCT_KEY}
                source='greenworks-80v-lawn-mower-spec'
                variant='primary'
                showPrice
              />
            </div>

            {/* Overview */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Overview: 80 Volts of Common Sense
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The electric mower market has settled into a clear hierarchy. At
                the bottom, 40V mowers from Ryobi and others handle small yards
                for under $400. At the top, EGO&apos;s 56V Select Cut XP commands
                $799 with its multi-blade system and massive 10.0Ah battery. The
                Greenworks 80V occupies the increasingly important middle ground
                — more power than budget options, less cost than the flagships.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The math here is straightforward. 80 volts means more torque at
                lower amperage, which means the motor runs cooler and the battery
                lasts longer per watt-hour. An 80V system with a 4.0Ah battery
                delivers 320 watt-hours of energy — more than a 40V system with
                a 6.0Ah battery (240Wh) and comparable to many 56V setups. You
                get flagship-level runtime from a physically smaller battery pack.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                Greenworks has been making 80V outdoor tools longer than most
                people realize. Their 80V Pro platform now includes 25+ tools —
                string trimmers, leaf blowers, chainsaws, hedge trimmers, snow
                blowers — all sharing the same battery system. The mower is
                the centerpiece of that ecosystem, and at $499, it&apos;s
                priced to pull buyers away from both 40V limitations and 56V
                sticker shock.
              </p>
            </section>

            {/* Key Specifications */}
            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Key Specifications
              </h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <DollarSign className='h-4 w-4 text-primary' />
                        Price
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        $499 (with 4.0Ah battery + charger)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Motor
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        80V Brushless
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        Deck
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        21-inch steel
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Battery className='h-4 w-4 text-primary' />
                        Battery
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        80V 4.0Ah (Greenworks 80V Pro platform)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Clock className='h-4 w-4 text-primary' />
                        Runtime
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Up to 60 minutes (4.0Ah battery)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Drive System
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Variable speed, rear wheel drive self-propelled
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Cut Height
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        1.375&quot; - 3.75&quot; (7 positions)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        3-in-1 Function
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Mulch, bag, side discharge
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Weight
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~62 lbs (with battery)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Smart Cut
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Yes — auto-adjusts power based on grass thickness
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Sun className='h-4 w-4 text-primary' />
                        LED Headlights
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Yes — front-mounted for low-light mowing
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Storage
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Foldable handle for compact storage
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Platform
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Greenworks 80V Pro — 25+ compatible outdoor tools
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Smart Cut Technology */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Smart Cut Technology: The Feature That Actually Matters
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Most mower reviews focus on raw specs — voltage, battery size,
                deck width. Smart Cut is the kind of feature that only shows its
                value when you actually mow with it. The system monitors blade
                resistance in real time and automatically adjusts motor power to
                match what the grass demands.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                In practice, this means the mower runs at lower power on thin,
                dry grass (conserving battery) and ramps up when it hits a thick
                patch or an area you skipped last week. You never have to slow
                down, change settings, or make a second pass through dense
                sections — the mower handles it automatically.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The battery efficiency gains are meaningful. Without Smart Cut,
                the motor runs at constant power regardless of conditions, which
                wastes energy on easy sections and sometimes underpowers on hard
                ones. With Smart Cut, you get an estimated 10-15% longer runtime
                compared to a fixed-power mower with the same battery, because
                energy is only spent where it&apos;s needed.
              </p>
              <div className='bg-card border border-border rounded-xl p-5'>
                <h3 className='text-base font-semibold text-foreground mb-3'>
                  Smart Cut vs. Fixed Power — What You Actually Feel
                </h3>
                <ul className='text-sm text-foreground/80 space-y-2'>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                    Consistent cut quality across mixed grass types without
                    manual adjustments
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                    Quieter operation on thin sections (motor slows down
                    automatically)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                    No bogging down when transitioning from walkway edges to
                    thick lawn
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                    10-15% better battery efficiency vs. constant-speed motors
                  </li>
                </ul>
              </div>
            </section>

            {/* Battery & Runtime */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Battery and Runtime: 80V Efficiency in Action
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The included 80V 4.0Ah battery is rated for up to 60 minutes of
                runtime. In real-world mowing on average suburban grass —
                standard fescue or bluegrass mowed weekly at 3 inches — expect
                45-55 minutes consistently. That&apos;s enough for most yards
                between 1/4 and 1/2 acre without needing to swap batteries.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The key advantage of 80V over 40V is energy density. The 4.0Ah
                battery packs 320 watt-hours into a unit that weighs
                significantly less than a 40V 8.0Ah battery delivering the same
                energy. Higher voltage also means lower amperage draw, which
                reduces heat buildup in the motor and extends both battery life
                and motor longevity over time.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Charge time is approximately 60 minutes from empty to full with
                the included rapid charger. If you have a larger yard, a second
                4.0Ah battery ($149 standalone) gives you a total of 120 minutes
                of mowing — enough for a full acre with room to spare.
              </p>
              <div className='bg-card border border-border rounded-xl p-5'>
                <h3 className='text-base font-semibold text-foreground mb-3 flex items-center gap-2'>
                  <Battery className='h-5 w-5 text-primary' />
                  Runtime by Yard Size (Estimated)
                </h3>
                <div className='grid grid-cols-2 gap-3 text-sm'>
                  <div className='bg-muted/30 rounded-lg p-3'>
                    <p className='font-medium text-foreground'>1/4 acre</p>
                    <p className='text-foreground/60'>~25-30 min (one charge)</p>
                  </div>
                  <div className='bg-muted/30 rounded-lg p-3'>
                    <p className='font-medium text-foreground'>1/3 acre</p>
                    <p className='text-foreground/60'>~35-40 min (one charge)</p>
                  </div>
                  <div className='bg-muted/30 rounded-lg p-3'>
                    <p className='font-medium text-foreground'>1/2 acre</p>
                    <p className='text-foreground/60'>~50-55 min (one charge)</p>
                  </div>
                  <div className='bg-muted/30 rounded-lg p-3'>
                    <p className='font-medium text-foreground'>3/4+ acre</p>
                    <p className='text-foreground/60'>Needs second battery</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 80V vs 40V vs 56V */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                80V vs. 40V vs. 56V: Which Voltage Platform Wins?
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Voltage determines the ceiling on what your mower can do. Higher
                voltage means more available torque, better efficiency under load,
                and longer runtime per watt-hour. But it also affects ecosystem
                size, price, and battery weight. Here is how the three major
                platforms compare.
              </p>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        Factor
                      </th>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        40V (Ryobi)
                      </th>
                      <th className='px-4 py-3 text-left font-semibold text-primary'>
                        80V (Greenworks)
                      </th>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        56V (EGO)
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Torque
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>Good</td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        Very Good
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>Very Good</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Energy (typical)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>240 Wh</td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        320 Wh
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>560 Wh</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Runtime
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>~48 min</td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        ~60 min
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>~60 min</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Mower price
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>$399</td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        $499
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>$799</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Ecosystem size
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>40+ tools</td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        25+ tools
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>70+ tools</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Thick grass
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Struggles
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        Handles well
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Handles well
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Best for
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Small yards, budget
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        Mid-size yards, value
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Large yards, premium
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mt-4'>
                The 80V platform occupies a strategic sweet spot. It delivers
                more energy per battery than 40V systems while costing
                significantly less than 56V. The trade-off is a smaller tool
                ecosystem (25+ vs. 70+ for EGO), which matters less if you only
                need a mower, trimmer, and blower — all of which Greenworks
                covers in the 80V lineup.
              </p>
            </section>

            {/* Mid-content CTA */}
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Ready to buy?'
              verdict='The mower that makes the most people happy — enough power for thick grass, smart enough to save battery, and $300 less than the premium.'
              source='greenworks-80v-lawn-mower'
              variant='mid'
            />

            {/* Greenworks vs EGO vs Ryobi */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Greenworks 80V vs. EGO Select Cut vs. Ryobi 40V
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                These three mowers represent the budget, mid-range, and premium
                tiers of the electric mower market. Here is how they stack up
                on the specs that actually affect your mowing experience.
              </p>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        Spec
                      </th>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        Ryobi 40V HP
                      </th>
                      <th className='px-4 py-3 text-left font-semibold text-primary'>
                        Greenworks 80V
                      </th>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        EGO Select Cut XP
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Price
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>$399</td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        $499
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>$799</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Voltage
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>40V</td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        80V
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>56V</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Battery
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>6.0Ah</td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        4.0Ah
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>10.0Ah</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Energy (Wh)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>240 Wh</td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        320 Wh
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>560 Wh</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Runtime
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>48 min</td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        60 min
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>60 min</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Smart Tech
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Cross-cut
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        Smart Cut
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Select Cut (3 blades)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Weight
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>~57 lbs</td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        ~62 lbs
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>~74 lbs</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        LED Headlights
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>Yes</td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        Yes
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>No</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Our Rating
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>4.4/5</td>
                      <td className='px-4 py-3 text-foreground/80 font-medium'>
                        4.5/5
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>4.7/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='mt-4 space-y-3'>
                <p className='text-foreground/80 leading-relaxed'>
                  <strong className='text-foreground'>Choose Ryobi 40V if:</strong>{' '}
                  You have a small yard (under 1/4 acre), want the lowest upfront
                  cost, and are already invested in Ryobi&apos;s massive 40V
                  ecosystem.
                </p>
                <p className='text-foreground/80 leading-relaxed'>
                  <strong className='text-foreground'>Choose Greenworks 80V if:</strong>{' '}
                  You have a mid-size yard (1/4 to 1/2 acre), want more power
                  than 40V without paying premium prices, and value Smart Cut
                  auto-adjusting technology over manual blade swapping.
                </p>
                <p className='text-foreground/80 leading-relaxed'>
                  <strong className='text-foreground'>Choose EGO Select Cut if:</strong>{' '}
                  You want the best cut quality possible, have a larger yard that
                  benefits from the 10.0Ah battery, and plan to build out a full
                  outdoor tool ecosystem.
                </p>
              </div>
            </section>

            {/* Cut Quality */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Cut Quality: Where 80V Shows Its Teeth
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The 21-inch steel deck with 7-position height adjustment
                (1.375&quot; to 3.75&quot;) delivers a clean, even cut across all
                three modes. Mulching performance is where the 80V motor makes
                the biggest difference compared to 40V — the higher blade speed
                chops clippings finer, which means better decomposition and less
                visible residue on the lawn surface.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Bagging works efficiently. The rear bag fills evenly without the
                clumping issues that plague lower-powered mowers, and the airflow
                through the deck is strong enough to pick up leaves during fall
                cleanup passes. Side discharge throws clippings a reasonable
                distance without spraying them onto walkways or flower beds —
                the directional chute does its job.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                The self-propelled rear wheel drive system is smooth and
                responsive. Variable speed control lets you match your walking
                pace, and the rear wheel placement provides good traction on
                gentle slopes. It is not as aggressive on steep hills as the
                heavier EGO, but for yards with moderate grades it tracks
                straight and does not slip.
              </p>
            </section>

            {/* Pros & Cons */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Pros and Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-base font-semibold text-foreground mb-3 flex items-center gap-2'>
                    <CheckCircle className='h-5 w-5 text-green-600' />
                    What We Like
                  </h3>
                  <ul className='text-sm text-foreground/80 space-y-2'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Smart Cut auto-adjusts power — no manual fiddling
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      80V delivers 320Wh from a compact 4.0Ah battery
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      60-minute runtime covers 1/2 acre on one charge
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Brushless motor runs cooler and lasts longer
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      LED headlights for early morning or evening mowing
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Foldable handle saves garage space
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      $300 less than EGO Select Cut with comparable runtime
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      25+ tool ecosystem shares one battery platform
                    </li>
                  </ul>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-base font-semibold text-foreground mb-3 flex items-center gap-2'>
                    <XCircle className='h-5 w-5 text-red-500' />
                    What Could Be Better
                  </h3>
                  <ul className='text-sm text-foreground/80 space-y-2'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Smaller ecosystem than EGO (25+ vs. 70+ tools)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      At 62 lbs, heavier than budget 40V mowers
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      No multi-blade system like EGO Select Cut
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      80V batteries less widely available than 40V or 56V
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Maximum cut height (3.75&quot;) slightly lower than some
                      competitors
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      No cross-cut or reverse mowing capability
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-4'>
                {faqSchema.mainEntity.map((faq, index) => (
                  <div
                    key={index}
                    className='bg-card border border-border rounded-xl p-5'
                  >
                    <h3 className='text-base font-semibold text-foreground mb-2'>
                      {faq.name}
                    </h3>
                    <p className='text-sm text-foreground/80 leading-relaxed'>
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final Verdict */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Final Verdict: The Smart Middle Ground
              </h2>
              <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                    <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                    <span className='font-bold text-foreground'>4.5</span>
                    <span className='text-muted-foreground text-sm'>/ 5</span>
                  </div>
                  <span className='text-sm font-medium text-primary'>
                    Highly Recommended
                  </span>
                </div>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  The Greenworks 80V 21&quot; self-propelled mower is the most
                  sensible electric mower for mid-size yards in 2026. It solves
                  the two biggest complaints about budget electric mowers — not
                  enough power for thick grass and not enough runtime for larger
                  yards — while staying $300 below the premium tier.
                </p>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  Smart Cut technology is genuinely useful, not a gimmick. The
                  automatic power adjustment means consistent cut quality without
                  babysitting the mower, and the battery efficiency gains extend
                  runtime in a way you can actually feel. The 80V brushless motor
                  handles conditions that would stall a 40V system, and the 60
                  minutes of runtime matches what EGO delivers at $300 more.
                </p>
                <p className='text-foreground/80 leading-relaxed mb-5'>
                  The trade-offs are real but manageable. The Greenworks 80V
                  ecosystem is smaller than EGO&apos;s, the mower lacks
                  multi-blade versatility, and 80V batteries are less ubiquitous.
                  But if you need a mower, trimmer, and blower — the three tools
                  most homeowners actually use — the 80V platform covers all
                  three, and covers them well. At $499, this is the mower that
                  makes the most people happy.
                </p>
                <BuyButton
                  productKey={PRODUCT_KEY}
                  source='greenworks-80v-lawn-mower-verdict'
                  variant='primary'
                  showPrice
                />
              </div>
            </section>

            {/* Final CTA */}
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Final Verdict'
              verdict='The mid-range value king — 80V Smart Cut that cuts like a flagship at mid-range pricing.'
              source='greenworks-80v-lawn-mower'
              variant='final'
            />
            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>Still comparing?</h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See how Greenworks 80V compares against EGO, DeWalt, Ryobi, and other top electric mowers.
              </p>
              <Link href='/reviews/best-electric-lawn-mower' className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'>
                Best Electric Lawn Mowers 2026
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            {/* Related Content CTAs */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Related Reviews
              </h2>
              <div className='grid md:grid-cols-2 gap-4'>
                <Link
                  href='/reviews/best-electric-lawn-mower'
                  className='bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group'
                >
                  <h3 className='text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors'>
                    Best Electric Lawn Mowers 2026
                  </h3>
                  <p className='text-sm text-muted-foreground mb-3'>
                    Full comparison of the top electric mowers including
                    Greenworks, EGO, Ryobi, and more.
                  </p>
                  <span className='text-sm text-primary font-medium flex items-center gap-1'>
                    Read comparison
                    <ArrowRight className='h-3 w-3' />
                  </span>
                </Link>
                <Link
                  href='/reviews'
                  className='bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group'
                >
                  <h3 className='text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors'>
                    All GreenVerdict Reviews
                  </h3>
                  <p className='text-sm text-muted-foreground mb-3'>
                    Browse our full library of clean energy and outdoor power
                    equipment reviews.
                  </p>
                  <span className='text-sm text-primary font-medium flex items-center gap-1'>
                    Browse reviews
                    <ArrowRight className='h-3 w-3' />
                  </span>
                </Link>
              </div>
            </section>

            <AffiliateDisclosure />
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source='greenworks-80v-lawn-mower' />
    </ReviewLayout>
  );
}
