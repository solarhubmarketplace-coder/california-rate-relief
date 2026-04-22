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
  Calendar,
  Clock,
  Star,
  Check,
  X,
  Zap,
  Battery,
  Shield,
  ChevronRight,
  Home,
  DollarSign,
  Leaf,
} from 'lucide-react';

const PRODUCT_KEY = 'jackery-explorer-1000';

export const metadata: Metadata = {
  title:
    'Jackery Explorer 1000 v2 Review 2026: The 1,070Wh LFP Workhorse for Camping',
  description:
    'In-depth review of the Jackery Explorer 1000 v2 — now with 1,070 Wh LFP battery (upgraded from NMC), 1,500W output, 400W solar input, 0-100% in 60 min, 23 lbs, $999. Ideal for camping, mid-size PSPS backup, and TOU load shifting.',
  alternates: {
    canonical: '/reviews/jackery-explorer-1000-review',
  },
  openGraph: {
    title:
      'Jackery Explorer 1000 v2 Review 2026: The 1,070Wh LFP Workhorse for Camping',
    description:
      'Jackery Explorer 1000 v2 with LFP battery upgrade, 1,500W output, 60-minute fast charging, and 4,000-cycle lifespan. Full California review.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Jackery Explorer 1000 v2 Review',
  reviewBody:
    'The Jackery Explorer 1000 v2 delivers 1,070 Wh of LFP battery capacity (upgraded from NMC in v1), 1,500W pure sine wave output with 3,000W surge, 400W solar input, full recharge in 60 minutes via AC, and a 4,000-cycle lifespan. At 23 pounds and $999 MSRP, it hits the sweet spot for camping, van life, and mid-size California PSPS backup.',
  datePublished: '2026-04-22',
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
    name: 'Jackery Explorer 1000 v2',
    brand: {
      '@type': 'Brand',
      name: 'Jackery',
    },
    description:
      'Portable power station with 1,070 Wh LiFePO4 battery, 1,500W continuous output, 400W solar input, 4,000-cycle lifespan.',
    offers: {
      '@type': 'Offer',
      price: '999',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.6',
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
      name: 'Is the Jackery Explorer 1000 v2 worth it over the v1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for most buyers. The v2 upgrades from NMC to LFP chemistry, which extends cycle life from 500 cycles to 4,000 cycles (an 8x improvement), bumps capacity slightly from 1,002 Wh to 1,070 Wh, and keeps the same 1,500W output in a comparable form factor. The v1 still appears at steep discounts on the secondhand market, but if you plan to cycle the battery regularly, LFP is the materially better long-term investment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Jackery Explorer 1000 v2 power a refrigerator during a PSPS outage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A typical full-size refrigerator draws about 150W on average and cycles compressors periodically. The Explorer 1000 v2 at 1,070 Wh real-world will run a refrigerator for roughly 7 hours continuously. Running intermittently (most realistic usage), it extends to 12-14 hours. For longer PSPS events, you will want to pair with solar panels for daily recharging — 400W of solar panels in California sun recharges the unit fully in about 2.5 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast does the Explorer 1000 v2 charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Very fast. Via AC wall outlet, the Explorer 1000 v2 goes 0-100% in 60 minutes using Jackery\'s ChargeShield technology. Solar charging accepts up to 400W input, for a full recharge in roughly 2.5 hours with four 100W panels in direct California sun. Car charging is supported but slow — useful for maintaining charge during a long drive rather than emergency top-ups.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Explorer 1000 v2 qualify for California SGIP rebates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unlikely for standalone use. The SGIP rebate structure typically requires permanent installation, a minimum capacity usually exceeding 1 kWh, and interconnection with a qualified installer. The Explorer 1000 v2 at 1.07 kWh is at the bottom of the qualifying threshold and its portable form factor generally does not meet installation requirements. Larger permanent systems like the Anker SOLIX F3800 or EcoFlow Delta Pro Ultra are better candidates for SGIP. Always confirm current program terms with your utility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Explorer 1000 v2 compare to the Anker SOLIX C1000?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are LFP units in the same $799-$999 bracket. The Anker SOLIX C1000 has 1,056 Wh capacity, 1,800W output, and charges 0-80% in 58 minutes. The Jackery Explorer 1000 v2 has 1,070 Wh, 1,500W output, and charges 0-100% in 60 minutes. Anker edges on peak output (1,800W vs 1,500W); Jackery wins on weight (23 lbs vs 28 lbs) and user interface polish. Both are excellent — choose based on your peak power requirements and brand preference.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the warranty on the Jackery Explorer 1000 v2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Five years from purchase date. This is Jackery\'s standard warranty for LFP-based Explorer products (the older NMC models carried 3-year warranties). The 5-year warranty on top of a 4,000-cycle battery gives the unit an expected useful life of 10+ years with daily cycling, well past the warranty window.',
      },
    },
  ],
};

export default function JackeryExplorer1000Review() {
  return (
    <ReviewLayout>
      <ReviewHeader />
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
            <nav className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
              <Link
                href='/reviews'
                className='hover:text-primary transition-colors'
              >
                Reviews
              </Link>
              <ChevronRight className='h-3 w-3' />
              <Link
                href='/reviews/best-portable-power-stations'
                className='hover:text-primary transition-colors'
              >
                Best Portable Power Stations
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>
                Jackery Explorer 1000 v2
              </span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Jackery Explorer 1000 v2 Review 2026: The 1,070Wh LFP
                Workhorse for Camping
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>12 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Best Mid-Size Portable'
              rating={4.6}
              verdict='The Jackery Explorer 1000 v2 hits the sweet spot: LFP chemistry, 1,070 Wh, 1,500W output, 23 lbs, and 60-minute fast charging. Best-in-class for camping, van life, and mid-size California PSPS backup.'
              pros={[
                'LFP battery, 4,000 cycles',
                '23 lbs — genuinely portable',
                '0-100% in 60 minutes',
              ]}
              cons={['Not enough for whole-home backup', 'No smart panel']}
              source='jackery-1000-review'
              variant='top'
            />

            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  Quick Verdict
                </h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.6</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                The Explorer 1000 v2 is the best mid-size portable power
                station Jackery has ever made. The v2 refresh dropped the
                aging NMC battery chemistry in favor of LFP, which
                dramatically extends cycle life from around 500 cycles to
                4,000 cycles — the single most important upgrade in this
                category over the last two years. At 23 pounds, $999, and
                1,500W pure sine wave output, it lives in a distinct niche
                between the tiny Explorer 300 and the heavyweight 2000 Plus.
                Best fit: car camping, RV boondocking, mid-size PSPS backup
                for fridge + lights + Wi-Fi, TOU load shifting for lighter
                homes.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Car camping, van life, RV boondocking
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Mid-size PSPS essentials backup
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Portable job site power
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
                      Whole-home backup
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Running AC, microwaves, ovens (too big)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Multi-day off-grid without solar
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specs */}
            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Key Specifications
              </h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Battery className='h-4 w-4 text-primary' />
                        Capacity
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        1,070 Wh
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        AC Output
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        1,500W continuous / 3,000W surge
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Leaf className='h-4 w-4 text-primary' />
                        Solar Input
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        400W max (MPPT)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        AC Charging
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        0-100% in 60 min
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Battery Type
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        LiFePO4 (LFP)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Cycle Life
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        4,000 cycles to 70% capacity
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        Weight
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>23 lbs</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Dimensions
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        12.8 x 8.6 x 10.3 in
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Connectivity
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Wi-Fi, Bluetooth, Jackery App
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Outlets
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        3x AC, 2x USB-C (100W), 1x USB-A, 1x Car
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        UPS Switchover
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        &lt;20ms
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Operating Temp
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        14-104&deg;F (-10 to 40&deg;C)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        Warranty
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>5 years</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <DollarSign className='h-4 w-4 text-primary' />
                        MSRP
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        $999
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Body */}
            <div className='prose prose-slate max-w-none'>
              {/* v2 upgrade */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The v2 LFP Upgrade Is the Story
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The original Jackery Explorer 1000 (v1, launched 2018)
                used an NMC (nickel manganese cobalt) battery — the same
                chemistry as most laptops and early EVs. NMC delivers high
                energy density and low weight, which is how Jackery kept
                the v1 at a respectable 22 pounds. But NMC degrades
                quickly: the v1 was rated for roughly 500 cycles to 80%
                capacity. In practical terms, after 18-24 months of daily
                cycling, the battery would hold only 80% of its original
                capacity.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The v2 switches to LiFePO4 (LFP). LFP is heavier per
                watt-hour (the v2 gains one pound for a similar capacity),
                but its cycle life is dramatically longer — Jackery rates
                the v2 at 4,000 cycles to 70% capacity, an 8x improvement
                over NMC. Daily cycling pushes the v2 past 10 years before
                it falls to 70% capacity. LFP is also inherently safer:
                lower thermal runaway risk, more stable under abuse, and
                better cold-weather performance.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you have seen v1 units advertised on refurbished or
                secondhand markets at $500-$600 and wondered whether to
                save the money, the v2 upgrade is genuinely worth the
                premium if you plan to cycle the battery regularly. For
                occasional emergency-only use, the v1 gets you by.
              </p>

              {/* Design */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Design &amp; Build
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Jackery&apos;s industrial design has always been a
                strength, and the v2 keeps the familiar aesthetic: orange
                and black chassis, integrated top handle, rounded
                corners. At 12.8 x 8.6 x 10.3 inches and 23 pounds, it
                fits comfortably in a trunk, under an RV dinette, or on a
                campsite table. One person easily carries it. The plastic
                construction feels solid — not premium metal, but not
                flimsy either.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The front panel is clean: a bright LCD in the center
                shows input/output wattage, battery percentage, and time
                remaining estimate. Buttons are clearly labeled and the
                unit speaks a confirmation chime when outlets activate.
                The overall feel is a step above the EcoFlow Delta 2 on
                design polish and a step below the Anker SOLIX C1000 on
                premium feel.
              </p>

              {/* Output */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Output &amp; Outlets
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Explorer 1000 v2 provides 1,500W of continuous AC
                output with 3,000W surge — enough to start high-inrush
                appliances like a small window AC, refrigerator, or power
                tool. Running loads: a full-size fridge (150W avg)
                consumes about 15% of the battery per hour; a typical
                laptop (30W) runs for 30+ hours; a CPAP machine (30-50W)
                runs all night plus most of the next day. You can
                comfortably power a campsite&apos;s worth of essentials
                simultaneously — lights, phone chargers, small cooking
                appliance, laptop.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Outlets: three AC (standard NEMA 5-15), two USB-C at 100W
                each (enough to fast-charge most laptops except high-end
                M-series MacBook Pros), one USB-A, and a 12V car outlet.
                The 100W USB-C is a notable upgrade from the v1 and
                eliminates the need for separate laptop chargers on
                extended trips. What it lacks: an Anderson Powerpole
                connection (common on premium RV gear) and a 30A RV
                outlet (you&apos;ll need an adapter for RV use).
              </p>

              {/* Solar */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Solar Charging
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The v2 accepts up to 400W of solar input via its built-in
                MPPT controller — double the original v1&apos;s 200W
                maximum. In California sun conditions (5-6 peak sun hours
                for most of the state), four 100W panels will fully
                recharge the unit in roughly 2.5 hours of direct sun.
                Jackery sells bundled solar panel kits (Jackery SolarSaga
                100W panels) that are designed to plug and play, or the
                unit accepts any MC4-terminated solar panel within spec.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For van life, car camping, or extended boondocking, 400W
                of solar input means the unit can effectively run
                self-sustainingly for a camper who uses moderate daily
                energy (under about 600 Wh per day). Pair it with a
                portable 200W panel kit and you have a mobile
                off-grid-for-a-week setup.
              </p>

              {/* App */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                App &amp; Smart Features
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Jackery App (iOS/Android) connects via Wi-Fi or
                Bluetooth and provides real-time monitoring of input/output
                power, battery state of charge, individual outlet control,
                charging speed adjustment, and firmware updates. It is
                functional but less polished than the EcoFlow app — you
                can do what you need to do, but the UI is not as snappy.
                Jackery has steadily improved the app over 2024-2025 and
                the v2 experience is materially better than the original
                Jackery connected experience.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The ChargeShield feature in the v2 actively manages
                charging temperature and rate to minimize battery wear.
                You can also toggle a quiet charging mode that extends
                charge time to 2 hours in exchange for significantly
                quieter fan operation — useful overnight or in small
                spaces.
              </p>

              {/* California angles */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California Angles: PSPS, TOU, and Where It Fits
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At 1,070 Wh, the Explorer 1000 v2 is not a whole-home
                backup — you will not run a central AC or electric oven
                off it. What it does well is keep essentials running
                through a typical 24-hour PSPS event: a standard fridge
                (150W avg) runs for 7+ hours of continuous draw, which
                stretches to 12-14 hours with normal compressor cycling.
                Add a Wi-Fi router (15W), phone charging, LED lighting,
                and a few small electronics, and you have roughly a full
                day of essential services covered on a single charge. For
                longer PSPS events, pair with 400W of solar panels to
                recharge during daylight hours.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For TOU arbitrage, the math is marginal at this capacity.
                A full 1,070 Wh cycle — charging off-peak at 15 cents/kWh
                and discharging during peak at 50 cents/kWh — yields
                roughly $0.37 per cycle of savings. Daily cycling saves
                $135/year. Not enough to justify the purchase on TOU
                savings alone, but a reasonable bonus alongside the
                primary camping/backup use case. The 4,000 LFP cycle
                rating means you could cycle daily for a decade without
                meaningful battery degradation.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a deeper look at California TOU rate structures by
                utility, see our guides on{' '}
                <Link
                  href='/blog/sdge-time-of-use-rates'
                  className='text-primary hover:underline'
                >
                  SDG&amp;E time-of-use rates
                </Link>{' '}
                and{' '}
                <Link
                  href='/blog/pge-vs-sce-vs-sdge-rates-compared'
                  className='text-primary hover:underline'
                >
                  PG&amp;E vs SCE vs SDG&amp;E rates
                </Link>
                .
              </p>

              {/* Mid CTA */}
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Ready to buy?'
                verdict='The Explorer 1000 v2 regularly goes on sale for $799-$899 on Jackery.com. Check current pricing and bundle options.'
                source='jackery-1000-review'
                variant='mid'
              />

              {/* Comparison */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Explorer 1000 v2 vs the Competition
              </h2>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Feature
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-primary'>
                        Jackery 1000 v2
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Anker C1000
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        EcoFlow Delta 2 Max
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Capacity
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        1,070 Wh
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        1,056 Wh
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        2,048 Wh
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        AC Output
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        1,500W
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        1,800W
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        2,400W
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Battery
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        LFP
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>LFP</td>
                      <td className='px-3 py-2 text-foreground/70'>LFP</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Solar Input
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        400W
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>600W</td>
                      <td className='px-3 py-2 text-foreground/70'>1,000W</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Weight
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        23 lbs
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        28 lbs
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        50 lbs
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        AC Charge Time
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        60 min
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>58 min</td>
                      <td className='px-3 py-2 text-foreground/70'>80 min</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Price
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $999
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $999
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $1,899
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>vs Anker SOLIX C1000:</strong> These are direct
                competitors at the same price point. The Anker edges on
                peak output (1,800W vs 1,500W) and solar input (600W vs
                400W). The Jackery wins on weight (23 lbs vs 28 lbs) and
                industrial design polish. Either is a defensible pick —
                go with whichever brand you prefer and whichever is on
                sale.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>vs EcoFlow Delta 2 Max:</strong> If you need more
                capacity, the Delta 2 Max roughly doubles the Jackery
                (2,048 Wh vs 1,070 Wh) at 2x the weight and nearly 2x
                the price. Worth considering if you expect to scale past
                the 1,000 Wh threshold frequently. For pure portability
                and mid-size use, the Jackery wins on weight and price.
              </p>

              {/* Pros cons */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Pros &amp; Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-green-800 dark:text-green-400 mb-3'>
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      LFP battery with 4,000-cycle rating
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      23 lbs — truly portable for camping
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      60-minute AC fast charge
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      5-year warranty
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Two 100W USB-C ports
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Under 20ms UPS switchover
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      400W solar input
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Clean industrial design
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
                      1,500W output limits larger appliances
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      No Smart Home Panel integration
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      App polish trails EcoFlow
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Anker C1000 offers more peak output at the same price
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Not expandable with external batteries
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      SGIP rebate unlikely
                    </li>
                  </ul>
                </div>
              </div>

              {/* Who should buy */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Should Buy the Jackery Explorer 1000 v2
              </h2>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Car campers and van lifers.</strong> 23 lbs is
                    the sweet spot for regular portability — light enough
                    to carry in and out of the vehicle without groaning,
                    heavy enough to actually do work.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>California homeowners wanting mid-size
                    PSPS backup.</strong> Fridge + Wi-Fi + lights + phone
                    charging for 24 hours on one charge, or 3-4 days with
                    solar panels.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Occasional tradespeople.</strong> 1,500W is
                    enough to run most common jobsite power tools (circular
                    saws, drills, small compressors) for a day&apos;s work.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Medical equipment backup.</strong> CPAP, oxygen
                    concentrator, or similar low-draw medical devices can
                    run for 15-30 hours on a full charge, which matches
                    most PSPS event durations.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Anyone upgrading from NMC.</strong> If you own
                    an older Jackery or Goal Zero with NMC chemistry that
                    is losing capacity, the v2 LFP upgrade is a meaningful
                    leap forward.
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
                    Is the v2 worth it over the v1?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes for most buyers. LFP vs NMC is an 8x cycle life
                    improvement — 500 cycles to 4,000. If you plan to
                    cycle the battery regularly, the v2 is materially
                    better long-term. For occasional-only use, the v1 at
                    $500-$600 used can still work.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Can it run a refrigerator during PSPS?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. A full-size fridge (150W average) runs 7 hours
                    continuously or 12-14 hours with normal compressor
                    cycling. Pair with 400W solar to recharge during
                    daylight for multi-day events.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How fast does it charge?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    0-100% in 60 minutes via AC wall outlet. 2.5 hours
                    via 400W of solar in California sun. Car charging is
                    supported but slow — meant for maintenance, not
                    emergency top-ups.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Does it qualify for SGIP rebates?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Unlikely. SGIP usually requires permanent installation
                    and minimum capacity typically above 1 kWh with
                    interconnection. The Explorer 1000 v2 is portable and
                    at the bottom of the threshold. Larger permanent
                    systems like the Anker F3800 or EcoFlow Delta Pro
                    Ultra are better SGIP candidates.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How does it compare to the Anker SOLIX C1000?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Both are LFP at the same $999 price. Anker has more
                    peak output (1,800W vs 1,500W) and more solar input
                    (600W vs 400W). Jackery wins on weight (23 vs 28 lbs)
                    and design polish. Either is a defensible pick.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What is the warranty?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Five years from purchase — Jackery&apos;s standard
                    coverage for LFP-based Explorer products. Combined
                    with the 4,000-cycle battery, expected useful life
                    runs 10+ years with daily cycling.
                  </p>
                </div>
              </div>

              {/* Bottom line */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Jackery Explorer 1000 v2 is the best mid-size
                portable power station Jackery has shipped. The LFP
                upgrade finally brings the 1000-class Explorer into the
                modern era of 4,000-cycle batteries that actually survive
                long-term use. At 23 lbs and $999, it is genuinely
                portable (unlike the 100+ lb flagship units) while still
                packing enough capacity for mid-size PSPS backup and
                meaningful camping use. It is not the right pick for
                whole-home backup or for buyers needing 2,000W+ output —
                but in its weight class, it is as good as the category
                offers in 2026.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Final Verdict'
              verdict='The Explorer 1000 v2 is the right size for California car camping, van life, and mid-size PSPS backup. LFP + 23 lbs + 60-minute charging + 5-year warranty = a strong $999.'
              source='jackery-1000-review'
              variant='final'
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See how the Jackery 1000 v2 stacks up against Anker
                SOLIX C1000, EcoFlow Delta 2, and the bigger Jackery 2000
                Plus.
              </p>
              <Link
                href='/reviews/best-portable-power-stations'
                className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
              >
                See The Full Ranking
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/best-portable-power-stations'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Power Stations
              </Link>
              <Link
                href='/reviews/jackery-explorer-2000-plus-review'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Jackery 2000 Plus
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA
        productKey={PRODUCT_KEY}
        source='jackery-1000-review'
      />
    </ReviewLayout>
  );
}
