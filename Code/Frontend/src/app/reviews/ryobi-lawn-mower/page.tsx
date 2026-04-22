import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { AffiliateCTABox } from '@/components/reviews/AffiliateCTABox';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import { BuyButton } from '@/components/reviews/BuyButton';
import { StickyMobileCTA } from '@/components/reviews/StickyMobileCTA';
import { ComparisonTable } from '@/components/reviews/ComparisonTable';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Star,
  Check,
  X,
  Zap,
  Battery,
  ChevronRight,
  Leaf,
} from 'lucide-react';

const PRODUCT_KEY = 'ryobi-lawn-mower';

export const metadata: Metadata = {
  title:
    'Ryobi Lawn Mower Review 2026: 40V, 80V, and Gas Models Compared',
  description:
    'In-depth Ryobi lawn mower review covering the 40V HP Brushless self-propelled, 80V HP Brushless riders, 40V push, and the full Home Depot Ryobi lineup. Warranty, runtime, California AQMD rebates, Whisper Series noise data.',
  alternates: {
    canonical: '/reviews/ryobi-lawn-mower',
  },
  openGraph: {
    title:
      'Ryobi Lawn Mower Review 2026: 40V vs 80V Compared',
    description:
      'Ryobi 40V HP Brushless self-propelled, 80V HP Brushless 30" ride-on, 40V push, and 80V rear-engine rider compared. Is Ryobi the right battery mower brand?',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ryobi Lawn Mower Lineup 2026',
  description:
    'Full Ryobi lawn mower comparison: 40V HP Brushless self-propelled, 40V push, 80V HP Brushless 30" ride-on, and 80V rear-engine rider.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'Ryobi 40V HP Brushless 21" Self-Propelled Mower',
        brand: { '@type': 'Brand', name: 'Ryobi' },
        offers: {
          '@type': 'Offer',
          price: '549',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'Ryobi 80V HP Brushless 30" Ride-On Mower',
        brand: { '@type': 'Brand', name: 'Ryobi' },
        offers: {
          '@type': 'Offer',
          price: '3799',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        name: 'Ryobi 40V 20" Push Mower',
        brand: { '@type': 'Brand', name: 'Ryobi' },
        offers: {
          '@type': 'Offer',
          price: '349',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Product',
        name: 'Ryobi 80V HP Brushless 30" Rear Engine Rider',
        brand: { '@type': 'Brand', name: 'Ryobi' },
        offers: {
          '@type': 'Offer',
          price: '4299',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Ryobi a good lawn mower brand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, particularly for the price. Ryobi mowers deliver 85-90% of the performance of premium brands like EGO at 20-30% lower price points. The 40V HP Brushless line is the sweet spot for residential lawns up to 3/4 acre, while the 80V platform competes with gas on power. The main drawback is Home Depot exclusivity, which limits where you can service and source parts, but Home Depot\'s nationwide presence makes this a minor issue for most buyers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Ryobi 40V and 80V mowers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 40V platform covers walk-behind push and self-propelled mowers up to 21-22 inches, with battery packs up to 12Ah (480 Wh). The 80V HP platform powers Ryobi\'s ride-on and rear-engine riding mowers, using 10Ah batteries (800 Wh each) and running multiple batteries in series for the riders. For walk-behinds pick 40V; for any ride-on you\'re on the 80V platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the HP Brushless badge mean on Ryobi mowers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HP stands for High Performance, and Brushless refers to the motor type. HP Brushless motors use permanent magnets and electronic commutation, which delivers 30-50% more torque than a brushed motor of the same voltage, runs cooler, and typically lasts 3-4x longer. Ryobi reserves the HP Brushless branding for their premium tools — avoid the non-HP Ryobi mowers if performance matters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ryobi better than EGO or Greenworks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ryobi offers the best value — 20-30% cheaper than EGO at comparable spec levels. EGO beats Ryobi on torque in thick grass, battery cycle life, and platform breadth (80+ tools vs Ryobi\'s ~280+ tools at 40V). Greenworks 80V Pro competes with both on performance. For a household already invested in Ryobi 40V drills, impacts, and other tools, staying in the Ryobi ecosystem is the smart call. For a first-time battery mower buyer, EGO usually offers better longevity per dollar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Ryobi 40V batteries across all their tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ryobi\'s 40V lithium battery platform is cross-compatible across 280+ tools including mowers, trimmers, blowers, chainsaws, snow blowers, pressure washers, power stations, and the entire 40V outdoor catalog. Ryobi calls this the "world\'s largest 40V platform," and it\'s genuinely the broadest single-battery ecosystem on the market. One battery investment powers your whole yard setup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ryobi qualify for California AQMD rebates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All zero-emission battery mowers qualify for SCAQMD rebates (up to $250 per mower when turning in a gas mower), BAAQMD exchange events, and SMAQMD\'s Mow Down Air Pollution rebates. California\'s 2024 CARB rule banning new gas equipment under 25 HP applies to all retailers, making Ryobi 40V and 80V the default choice for Home Depot shoppers.',
      },
    },
  ],
};

export default function RyobiLawnMowerReview() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
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
                Ryobi Lawn Mower
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Buyer&apos;s Guide
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Ryobi Lawn Mower Review 2026: 40V, 80V, and Gas Models Compared
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>15 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Best Value Mower Brand'
              rating={4.5}
              verdict='Ryobi delivers 85-90% of EGO performance at 20-30% lower price. The 40V HP Brushless self-propelled is the right buy for most residential lawns; the 80V HP Brushless rider competes with gas on power.'
              pros={[
                'Best value battery mower platform',
                'Households with existing Ryobi 40V tools',
                'Home Depot shoppers wanting service support',
              ]}
              cons={['Shoppers who won\'t buy from Home Depot', 'Dense 1-acre+ lawns (step up to 80V)']}
              source='ryobi-lawn-mower'
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
                Ryobi&apos;s 40V HP Brushless mowers are the best value in
                battery lawn equipment, period. The 21" HP Brushless
                self-propelled at $549 delivers the performance of a $700-800
                premium-brand mower, and the 40V battery platform works with
                280+ other Ryobi tools. The 80V HP Brushless riders bring
                electric power to the 3-acre homeowner at prices comparable to
                gas. The catch: Ryobi is exclusive to Home Depot, so warranty
                service and parts all route through that retail channel. If
                you&apos;re already in the Ryobi ecosystem with a drill or an
                impact driver, this is the obvious next step.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Value-focused buyers in the $349-$550 range
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Households with existing Ryobi 40V tools
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Home Depot shoppers wanting a one-stop buy
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
                      Buyers who refuse to buy from Home Depot
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Commercial landscapers (look at Greenworks Commercial)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Maximum torque seekers (EGO Peak Power wins here)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <h2 className='text-2xl font-bold text-foreground mb-4'>
              Ryobi Mower Lineup Compared
            </h2>
            <p className='text-foreground/70 text-sm mb-4'>
              40V for walk-behinds, 80V for riders. Every 40V battery works
              across 280+ Ryobi tools; every 80V battery works across the 80V
              outdoor line (mowers, blowers, trimmers, zero-turn).
            </p>

            <ComparisonTable
              source='ryobi-lawn-mower-hub'
              specLabels={[
                'Price',
                'Platform',
                'Type',
                'Deck Width',
                'Max Runtime*',
                'Max Lawn Size',
                'Weight',
                'Warranty',
              ]}
              products={[
                {
                  productKey: 'ryobi-40v-lawn-mower',
                  name: '40V HP Brushless Self-Propelled',
                  badge: 'Best Overall',
                  rating: 4.6,
                  specs: {
                    Price: '$549',
                    Platform: '40V',
                    Type: 'Self-Propelled',
                    'Deck Width': '21"',
                    'Max Runtime*': '70 min (dual 6Ah)',
                    'Max Lawn Size': '0.75 acre',
                    Weight: '76 lbs',
                    Warranty: '5 yr tool / 3 yr battery',
                  },
                },
                {
                  productKey: 'ryobi-lawn-mower',
                  name: '40V 20" Push Mower',
                  badge: 'Best Entry Level',
                  rating: 4.4,
                  specs: {
                    Price: '$349',
                    Platform: '40V',
                    Type: 'Push',
                    'Deck Width': '20"',
                    'Max Runtime*': '40 min (6Ah)',
                    'Max Lawn Size': '0.3 acre',
                    Weight: '58 lbs',
                    Warranty: '5 yr tool / 3 yr battery',
                  },
                },
                {
                  productKey: 'ryobi-lawn-mower',
                  name: '80V HP Brushless 30" Ride-On',
                  badge: 'Best Rider',
                  rating: 4.5,
                  specs: {
                    Price: '$3,799',
                    Platform: '80V',
                    Type: 'Zero-Turn Ride-On',
                    'Deck Width': '30"',
                    'Max Runtime*': '2 hrs (4x 10Ah)',
                    'Max Lawn Size': '2 acres',
                    Weight: '440 lbs',
                    Warranty: '5 yr tool / 3 yr battery',
                  },
                },
                {
                  productKey: 'ryobi-lawn-mower',
                  name: '80V HP 30" Rear Engine Rider',
                  badge: 'Big Lawn',
                  rating: 4.5,
                  specs: {
                    Price: '$4,299',
                    Platform: '80V',
                    Type: 'Rear Engine Rider',
                    'Deck Width': '30"',
                    'Max Runtime*': '2.5 hrs (6x 10Ah)',
                    'Max Lawn Size': '3 acres',
                    Weight: '510 lbs',
                    Warranty: '5 yr tool / 3 yr battery',
                  },
                },
              ]}
            />

            <p className='text-xs text-muted-foreground italic mb-8'>
              *Runtime figures are for typical grass conditions. Tall, wet, or
              dense grass reduces runtime 25-35%. Prices verified April 2026
              at Home Depot.
            </p>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              {/* Ryobi Brand Background */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Ryobi: The Home Depot Battery Platform
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ryobi&apos;s relationship with Home Depot is the single most
                important thing to understand about the brand. Ryobi is owned
                by Techtronic Industries (TTI), the Hong Kong-headquartered
                parent company that also owns Milwaukee Tool, Ridgid, Hoover,
                and Hart. Within TTI&apos;s portfolio, Ryobi is the value brand
                — engineered to deliver 80-90% of Milwaukee&apos;s performance
                at 40-60% of the price, and distributed exclusively through
                Home Depot in the US. Home Depot stocks every Ryobi SKU,
                services warranties in-store, and runs seasonal promotions that
                routinely drop kit prices 20-30%.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This exclusivity cuts both ways. If you live near a Home
                Depot, it&apos;s a strength: immediate parts availability,
                in-store returns, and regular sales. If you refuse to shop at
                Home Depot or live somewhere without one, Ryobi becomes
                functionally unavailable since their online presence is limited
                to HomeDepot.com and the Ryobi direct site, which still ships
                from Home Depot warehouses.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ryobi runs two separate battery platforms for lawn equipment:
                the <strong>40V lithium</strong> system for walk-behind mowers
                and most outdoor tools, and the <strong>80V HP</strong> system
                for riders and commercial-adjacent equipment. The 40V platform
                shares batteries across 280+ tools — Ryobi calls it
                &quot;the world&apos;s largest 40V platform&quot; and the
                claim is accurate. The 80V platform is narrower (mowers,
                blowers, zero-turn), aimed at buyers who need gas-level power
                without gas-level maintenance.
              </p>

              {/* 40V vs 80V decision */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                40V vs 80V: How to Choose
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 40V/80V decision is almost entirely a function of lawn
                size and whether you want to walk or ride.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                40V HP Brushless Self-Propelled — $549 (our pick)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For 90% of residential buyers, the 40V HP Brushless 21" is
                the right model. It runs two 6Ah batteries in parallel through
                Ryobi&apos;s dual-port design, giving roughly 70 minutes of
                real-world cut time — enough for 3/4 of an acre in a single
                session. The 21" brushless motor delivers gas-comparable
                performance in tall grass. Self-propelled variable speed,
                folding handle, single-point height adjust, mulching/bagging/
                side discharge. The only thing missing vs EGO is the true
                Peak Power torque under load, but Ryobi closed most of that
                gap with the latest HP Brushless refresh.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                40V 20" Push — $349
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your lawn is under 10,000 sq ft and relatively flat, the
                40V push mower is the budget entry point into a quality
                battery mower. Single 6Ah battery, 40-minute runtime, 58 lbs,
                20" single-blade deck. Cut quality is noticeably behind the
                HP Brushless models, but for a small yard it gets the job
                done.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                80V HP Brushless 30" Ride-On — $3,799
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 30" zero-turn ride-on is where Ryobi directly competes
                with gas riding mowers from John Deere and Cub Cadet. Four
                10Ah 80V batteries give ~2 hours of runtime on a typical 2-acre
                lawn. 30" stamped deck (narrower than the EGO Z6 at 42" but
                more maneuverable around obstacles). Steering-wheel zero-turn
                is unusual and more intuitive than dual lap bars for first-
                time ride-on drivers. At $3,799, it&apos;s priced well below
                comparable EGO riders while offering most of the performance.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                80V HP Brushless 30" Rear Engine Rider — $4,299
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The rear-engine rider is the better pick if you have 2-3
                acres, want higher ground speed, or prefer a more traditional
                driving position. 6-battery slot (6x 10Ah = 4.8 kWh) gives
                ~2.5 hours of runtime. Built heavier than the zero-turn at 510
                lbs, with a deeper deck for better mulching on tall grass. At
                $4,299 it&apos;s still meaningfully cheaper than EGO&apos;s
                comparable Z6 rider.
              </p>

              {/* HP Brushless meaning */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What &quot;HP Brushless&quot; Actually Means
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ryobi reserves the <strong>HP Brushless</strong> badge for
                their premium tools. It&apos;s two things: a high-performance
                motor tune (HP) and a brushless motor design. Skipping the
                non-HP Ryobi mowers is the single most important buying
                decision.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Brushless motors use permanent magnets and electronic
                commutation instead of carbon brushes and a mechanical
                commutator. The practical differences:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>30-50% more torque</strong> at the same voltage vs
                    a brushed motor.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>3-4x longer motor life</strong> — no brushes to
                    wear out and replace.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Cooler running</strong>, which matters when cutting
                    tall spring grass that bogs the motor.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Better runtime</strong> — brushless motors are
                    roughly 85-90% efficient vs 70-75% for brushed.
                  </span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The HP designation is Ryobi&apos;s internal performance tier
                — basically, it signals that a tool uses higher-current-rated
                MOSFETs in the motor controller, higher-grade bearings, and a
                heavier-duty deck. Skip HP and you lose 20-30% of the torque
                headroom. For a mower, that&apos;s the difference between
                slicing through thick fescue and bogging down at 2/3 throttle.
              </p>

              {/* Whisper Series */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Whisper Series: How Quiet Is It Really?
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ryobi markets several of their mowers under the Whisper
                Series label, meaning they&apos;ve been specifically engineered
                for reduced noise output. The 40V HP Brushless self-propelled
                measures ~70 dB at operator ear level vs 95+ dB for a
                comparable gas mower. The 80V rider comes in at ~75 dB (still
                meaningfully quieter than gas) thanks to an insulated motor
                housing and a 3-blade deck that generates less turbulence than
                gas single-blade designs.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Why this matters: most HOA noise ordinances kick in at 80 dB
                measured at the property line. Gas mowers routinely violate
                those thresholds if anyone complains. Battery mowers under 75
                dB give you the ability to cut at 7 AM without a neighbor
                filing an HOA grievance. In dense California suburbs — Orange
                County, South Bay, Peninsula — this is the quiet (no pun
                intended) feature that actually justifies the brand switch.
              </p>

              {/* Warranty */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Ryobi Warranty &amp; Home Depot Service
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ryobi&apos;s residential warranty matches EGO&apos;s top tier:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>5 years</strong> on the mower for residential use.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>3 years</strong> on 40V and 80V batteries and
                    standard chargers.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    Warranty service through Home Depot retail stores (bring
                    in the tool and receipt) or direct to Ryobi authorized
                    service centers.
                  </span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Home Depot service channel is worth emphasizing.
                Dropping a failed mower at a local Home Depot and getting a
                replacement shipped to your house within 2 weeks is a real
                advantage over EGO (which routes service through independent
                authorized dealers) and especially over Greenworks (which
                routes through Lowe&apos;s or back to the manufacturer).
                Ryobi&apos;s service flow is the least-friction in the
                industry for a basic warranty claim.
              </p>

              {/* Mid CTA */}
              <AffiliateCTABox
                productKey='ryobi-40v-lawn-mower'
                badge='Most popular Ryobi mower'
                verdict='The 40V HP Brushless 21" self-propelled is Home Depot\'s top-selling battery mower. Check current pricing and any seasonal promos.'
                source='ryobi-lawn-mower'
                variant='mid'
              />

              {/* California */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California: AQMD Rebates &amp; the 2024 Gas Ban
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ryobi mowers qualify for every California air district rebate
                program on the books. The major ones:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>SCAQMD (Los Angeles basin):</strong> Up to $250
                    per residential mower when turning in a working gas
                    mower. Program funds rotate annually.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>BAAQMD (Bay Area):</strong> Residential mower
                    exchange events several times per year, typically
                    $100-$250 per mower.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>SMAQMD (Sacramento Metro):</strong> Mow Down Air
                    Pollution program, $50-$150 rebates.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>SJVAPCD (San Joaquin Valley):</strong>{' '}
                    Residential exchange events up to $300 per mower when
                    funded.
                  </span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s 2024 CARB SORE rule banned the sale of new
                gas engines under 25 HP statewide, effective January 1, 2024.
                Ryobi 40V and 80V mowers were already the top-selling battery
                mowers at Home Depot — the ban solidified them as the default
                Home Depot option. Stack an AQMD rebate with Home Depot&apos;s
                typical spring-season $50-$100 off kit promotions and the
                effective cost of the 40V HP Brushless self-propelled can
                drop to ~$250.
              </p>

              {/* Ryobi vs EGO vs Greenworks */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Ryobi vs EGO vs Greenworks vs Gas
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Ryobi vs EGO.</strong> See our{' '}
                <Link
                  href='/reviews/ego-lawn-mower'
                  className='text-primary hover:underline'
                >
                  EGO lawn mower review
                </Link>{' '}
                for the full comparison. Short version: EGO wins on peak
                torque, cycle life, and retail breadth. Ryobi wins on price
                (20-30% cheaper at comparable specs), platform breadth (280+
                tools vs EGO&apos;s 80+), and Home Depot service. For a
                first-time battery mower buyer with no existing tool
                ecosystem, EGO is the safer long-term bet. For anyone already
                in Ryobi 40V with drills and impact drivers, staying in the
                ecosystem makes financial sense.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Ryobi vs Greenworks.</strong> Greenworks 60V is close
                to Ryobi 40V HP Brushless on price and performance, with the
                Pro 80V line competing with Ryobi&apos;s 80V. Greenworks is
                primarily a Lowe&apos;s brand, so the Lowe&apos;s vs Home
                Depot channel preference often decides the choice. Greenworks
                Commercial is the play for paid landscapers — Ryobi doesn&apos;t
                target commercial at all.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Ryobi 40V vs Gas self-propelled.</strong> A Craftsman
                gas self-propelled runs $399 new at Lowe&apos;s. Ryobi 40V HP
                Brushless self-propelled runs $549. The $150 premium is paid
                back in 3-4 years on fuel and maintenance savings alone. Noise
                drops from 95+ dB to ~70 dB. Cold-start frustrations go away.
                For any homeowner replacing a gas mower that&apos;s over 7
                years old, the 40V HP Brushless is the obvious upgrade.
              </p>

              {/* Pros & Cons */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Pros &amp; Cons of Ryobi
              </h2>
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-green-800 dark:text-green-400 mb-3'>
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Best value in battery mowers ($349-$549 range)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Largest 40V tool platform (280+ tools)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      5-year tool warranty, 3-year battery
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Home Depot warranty service is frictionless
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Whisper Series noise under 75 dB
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      80V riders priced below EGO equivalents
                    </li>
                  </ul>
                </div>
                <div className='bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-red-800 dark:text-red-400 mb-3'>
                    Cons
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Home Depot exclusive — limits retail options
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Less torque under load than EGO Peak Power
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Non-HP Ryobi mowers are noticeably weaker
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      40V and 80V batteries not cross-compatible
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Build quality slightly behind EGO (plastic decks)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Who should buy */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Should Buy a Ryobi Mower
              </h2>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Existing Ryobi 40V owners</strong> — batteries
                    move freely between 280+ tools, making the marginal cost
                    of a mower the tool alone.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Value-focused buyers</strong> who want 85-90% of
                    EGO&apos;s performance at 20-30% lower price.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Home Depot loyalists</strong> who want warranty
                    service at the same store they bought the tool.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>2-3 acre homeowners</strong> considering an
                    electric rider but priced out of EGO&apos;s Z6 — Ryobi
                    80V riders undercut EGO by $2,000+.
                  </span>
                </li>
              </ul>

              {/* FAQ */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is Ryobi a good lawn mower brand?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes, particularly for the price. The 40V HP Brushless line
                    delivers 85-90% of EGO&apos;s performance at 20-30% lower
                    cost. Main drawback is Home Depot exclusivity, which
                    limits retail options but provides frictionless warranty
                    service.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What&apos;s the difference between 40V and 80V?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    40V covers walk-behind mowers up to 22" and 280+ other
                    outdoor tools. 80V HP powers ride-on and rear-engine
                    riders. For walk-behinds, pick 40V; for any ride-on,
                    you&apos;re on 80V. Batteries aren&apos;t cross-compatible
                    between platforms.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What does HP Brushless mean?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    HP = High Performance (Ryobi&apos;s premium tier), and
                    Brushless refers to the motor type. HP Brushless motors
                    deliver 30-50% more torque, run cooler, and last 3-4x
                    longer than brushed motors. Always pick HP Brushless over
                    standard Ryobi for outdoor power tools.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is Ryobi better than EGO or Greenworks?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    EGO beats Ryobi on peak torque and build quality. Ryobi
                    beats EGO on price and platform breadth. Greenworks 80V
                    Pro is comparable on performance but a Lowe&apos;s brand.
                    Pick based on your existing tool ecosystem and retailer
                    preference.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Can I use Ryobi 40V batteries across all their tools?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes, across 280+ tools — the largest single-battery
                    platform on the market. 80V is separate; those batteries
                    only work with 80V outdoor equipment.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Does Ryobi qualify for California AQMD rebates?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. All Ryobi battery mowers qualify for SCAQMD, BAAQMD,
                    SMAQMD, and SJVAPCD residential rebate programs
                    ($100-$300 per mower when funded). The 2024 CARB gas ban
                    made battery the default for new sales.
                  </p>
                </div>
              </div>

              {/* Bottom Line */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ryobi is the best-value battery mower brand in 2026. The 40V
                HP Brushless 21" self-propelled at $549 is the sweet spot for
                most residential lawns, delivering 85-90% of the performance
                of premium brands at a real discount. The 80V HP Brushless
                riders bring electric power to 2-3 acre homeowners at prices
                gas-mower buyers can stomach. Home Depot exclusivity is a
                real consideration, but for most California homeowners the
                retail channel is more feature than bug — one-stop warranty
                service at the same store the mower came from. Pair a Ryobi
                40V HP Brushless with an AQMD rebate and you&apos;re
                replacing a gas mower at a net cost under $300.
              </p>
            </div>

            {/* Final CTA */}
            <AffiliateCTABox
              productKey='ryobi-40v-lawn-mower'
              badge='Final Verdict'
              verdict='The Ryobi 40V HP Brushless self-propelled is the best-value battery mower on the market in 2026. Check current Home Depot pricing and any active seasonal promotions.'
              source='ryobi-lawn-mower'
              variant='final'
            />

            {/* Explore more */}
            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See how Ryobi stacks up against EGO, Greenworks, and other
                electric mower brands in our full roundup.
              </p>
              <Link
                href='/reviews/best-electric-lawn-mower'
                className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
              >
                See The Full Ranking
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            {/* Navigation */}
            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/best-electric-lawn-mower'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Electric Mowers
              </Link>
              <Link
                href='/reviews/ego-lawn-mower'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Compare: EGO Mowers
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA
        productKey='ryobi-40v-lawn-mower'
        source='ryobi-lawn-mower'
      />
    </ReviewLayout>
  );
}
