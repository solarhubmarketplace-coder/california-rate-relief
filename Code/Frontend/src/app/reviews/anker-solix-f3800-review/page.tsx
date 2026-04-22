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
  Zap,
  Battery,
  Shield,
  ChevronRight,
  Check,
  X,
  Sun,
} from 'lucide-react';

const PRODUCT_KEY = 'anker-solix-f3800';

export const metadata: Metadata = {
  title:
    'Anker SOLIX F3800 Review: 6,000W of Power at an Unbeatable Price (2026)',
  description:
    'In-depth Anker SOLIX F3800 review. 3,840Wh capacity, 6,000W output, LiFePO4 battery, expandable to 26,880Wh. Currently $1,799 (MSRP $3,999). Is it worth it for California homeowners?',
  alternates: {
    canonical: '/reviews/anker-solix-f3800-review',
  },
  openGraph: {
    title:
      'Anker SOLIX F3800 Review: 6,000W of Power at an Unbeatable Price',
    description:
      'Full review of the Anker SOLIX F3800 portable power station. 3,840Wh, 6,000W output, $1,799 promo pricing. How it performs for California backup power and TOU arbitrage.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Anker SOLIX F3800 Review: 6,000W of Power at an Unbeatable Price',
  reviewBody:
    'In-depth review of the Anker SOLIX F3800 portable power station covering specs, performance, California-specific backup power use cases, and value at the current $1,799 promotional price.',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
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
    name: 'Anker SOLIX F3800',
    brand: {
      '@type': 'Brand',
      name: 'Anker',
    },
    description:
      'Portable power station with 3,840Wh LiFePO4 battery, 6,000W continuous output (12,000W surge), expandable to 26,880Wh.',
    offers: {
      '@type': 'Offer',
      price: '1799',
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
      name: 'Is the Anker SOLIX F3800 $1,799 price real?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. As of April 2026, Anker is selling the F3800 at $1,799 — a 55% discount from the $3,999 MSRP. This appears to be an aggressive market-share grab against EcoFlow and Bluetti. The promotional price has been available for several months, but there is no guarantee it will last indefinitely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Anker SOLIX F3800 power a whole house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the house. The F3800 delivers 6,000W continuous (12,000W surge), which can handle most essential circuits including a refrigerator, lights, Wi-Fi, phone charging, and even a window AC unit or well pump simultaneously. For a full-size central AC system or electric range running at the same time, you would need to manage loads. With expansion batteries (up to 26,880Wh total), it can run essential circuits for multiple days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long will the Anker SOLIX F3800 power a refrigerator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical refrigerator draws 100-200W average (accounting for compressor cycling). At 150W average draw, the F3800\'s 3,840Wh battery would run a fridge for roughly 25 hours. With one B3800 expansion battery (7,680Wh total), that extends to about 50 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Anker SOLIX F3800 qualify for California SGIP rebates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Portable power stations generally do not qualify for SGIP, which is designed for permanently installed battery storage systems. However, if the F3800 is installed as a permanent home backup system (hardwired via a transfer switch), it may qualify. Check with your utility and the SGIP program administrator for current eligibility requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Anker SOLIX F3800 charge an electric vehicle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The F3800 includes a NEMA 14-50 240V outlet, which is the same plug used by most Level 2 EV chargers. You can plug your EV charger directly into the F3800 without any additional equipment. At 240V, you can add roughly 15-25 miles of range from a full charge depending on the vehicle\'s efficiency.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Anker SOLIX F3800 compare to the EcoFlow Delta Pro 3?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The F3800 offers 6,000W continuous output vs the Delta Pro 3\'s 4,000W, and 3,840Wh vs 4,096Wh base capacity. The F3800 has a NEMA 14-50 240V outlet built in, which the Delta Pro 3 requires an add-on for. At $1,799 promo pricing, the F3800 is significantly cheaper than the Delta Pro 3\'s ~$3,200 street price. The Delta Pro 3 has a more established ecosystem and longer market track record.',
      },
    },
  ],
};

export default function AnkerSolixF3800Review() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8'>
              <ol className='flex items-center gap-2 text-sm text-muted-foreground'>
                <li>
                  <Link
                    href='/blog'
                    className='hover:text-primary hover:underline'
                  >
                    Reviews
                  </Link>
                </li>
                <ChevronRight className='h-3 w-3' />
                <li>
                  <span className='text-muted-foreground'>
                    Best Portable Power Stations
                  </span>
                </li>
                <ChevronRight className='h-3 w-3' />
                <li>
                  <span className='text-foreground font-medium'>
                    Anker SOLIX F3800 Review
                  </span>
                </li>
              </ol>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Anker SOLIX F3800 Review: 6,000W of Power at an Unbeatable Price
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>13 min read</span>
                </div>
              </div>
            </header>

            {/* Affiliate disclosure — FTC compliance, must be above the fold */}
            <AffiliateDisclosure compact />

            {/* Above-the-fold primary CTA */}
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge="Best Value"
              rating={4.6}
              verdict="At $1,799 promo pricing, the Anker SOLIX F3800 delivers 6,000W continuous output, 3,840Wh of LFP storage, and a built-in NEMA 14-50 240V outlet — the best price-per-watt-hour in its class."
              pros={[
                'California PSPS / wildfire backup',
                'EV charging without a transfer switch',
                'Whole-home essential circuit backup',
              ]}
              cons={['Portable camping use (132 lbs)', 'Smaller brand track record in this category']}
              source="anker-f3800"
              variant="top"
            />

            {/* Quick Verdict Box */}
            <div className='bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10'>
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
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The Anker SOLIX F3800 is the most powerful portable power
                station we&apos;ve reviewed, and at its current $1,799 promo
                price, it&apos;s not even close on value. 6,000W continuous
                output, 3,840Wh of LiFePO4 storage, a built-in 240V NEMA
                14-50 outlet, and expansion up to 26,880Wh. The catch? It
                weighs 132 lbs and the long-term brand trust question is fair
                compared to more established competitors.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <h3 className='font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <Check className='h-4 w-4 text-green-600' />
                    Best For
                  </h3>
                  <ul className='text-sm text-foreground/70 space-y-1'>
                    <li>California PSPS / wildfire season backup</li>
                    <li>Whole-home essential circuit backup</li>
                    <li>EV charging without a transfer switch</li>
                    <li>TOU rate arbitrage with solar charging</li>
                    <li>Budget-conscious buyers at $1,799 promo</li>
                  </ul>
                </div>
                <div>
                  <h3 className='font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <X className='h-4 w-4 text-red-500' />
                    Not Ideal For
                  </h3>
                  <ul className='text-sm text-foreground/70 space-y-1'>
                    <li>Portable camping use (132 lbs)</li>
                    <li>Buyers wanting longest market track record</li>
                    <li>Small apartment backup (overkill)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specs Table */}
            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Key Specifications
              </h2>
              <div className='border border-border rounded-xl overflow-hidden'>
                <table className='w-full text-sm'>
                  <tbody>
                    {[
                      ['Capacity', '3,840 Wh (expandable to 26,880 Wh)'],
                      ['Continuous Output', '6,000W (12,000W surge)'],
                      ['Battery Type', 'LiFePO4 (LFP)'],
                      ['Cycle Life', '3,000+ cycles to 80% capacity'],
                      ['Weight', '~132 lbs (60 kg)'],
                      ['Solar Input', '2,400W max MPPT'],
                      ['AC Charging', '0-80% in ~1 hour'],
                      [
                        'AC Outlets',
                        '6x AC including NEMA 14-50 (240V)',
                      ],
                      ['USB Ports', '3x USB-C (100W) + 2x USB-A'],
                      ['Other Outlets', '12V car outlet'],
                      ['UPS Switchover', '<20ms'],
                      ['Smart Features', 'Wi-Fi, Bluetooth, Anker app'],
                      ['Warranty', '5 years'],
                      ['MSRP', '$3,999'],
                      ['Current Price', '$1,799 (promo)'],
                    ].map(([label, value], i) => (
                      <tr
                        key={label}
                        className={
                          i % 2 === 0 ? 'bg-muted/30' : 'bg-background'
                        }
                      >
                        <td className='px-4 py-3 font-medium text-foreground w-1/3'>
                          {label}
                        </td>
                        <td className='px-4 py-3 text-foreground/80'>
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              {/* Design & Build */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Design &amp; Build Quality
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Let&apos;s address the elephant in the room first: the F3800
                weighs approximately 132 pounds. This is not something you
                casually toss in the trunk for a camping trip. It has wheels
                and an extendable handle, which helps, but you&apos;ll still
                need help lifting it over thresholds or up stairs.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The build quality is solid. The chassis is a dense,
                industrial-grade enclosure with a matte finish that feels
                built to last. All ports are clearly labeled and logically
                grouped. The front panel has a clear LCD display showing
                input/output wattage, battery percentage, and estimated
                runtime. The overall form factor is more &quot;garage
                appliance&quot; than &quot;portable gadget&quot; — which
                honestly matches how most people will use this unit.
              </p>

              {/* Battery & Expandability */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Battery &amp; Expandability
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The F3800 uses LiFePO4 (lithium iron phosphate) cells, which
                is the gold standard for stationary power storage. LFP
                batteries are more thermally stable than NMC lithium-ion,
                have longer cycle life, and degrade more gracefully. Anker
                rates the F3800 for 3,000+ cycles to 80% capacity — which
                means if you cycle it once per day, you&apos;re looking at
                over 8 years before the battery drops to 80% of its original
                capacity.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The real standout is expandability. You can connect up to six
                B3800 expansion batteries, bringing total capacity to a
                staggering 26,880 Wh. That&apos;s 26.8 kWh — for context,
                a Tesla Powerwall 3 is 13.5 kWh. Two expansion batteries
                give you more capacity than a Powerwall at a fraction of the
                installed cost. This makes the F3800 a genuinely viable
                whole-home backup system, not just an emergency gadget.
              </p>

              {/* Charging Speed */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Charging Speed
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                AC wall charging is impressively fast: 0 to 80% in
                approximately one hour. That&apos;s 3,072 Wh delivered in 60
                minutes. The final 20% slows down as the battery management
                system tapers the charge rate to protect cell longevity,
                bringing total 0-100% time to roughly 1.5 hours.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar charging maxes out at 2,400W via the MPPT controller.
                With optimal panel placement in California (and we get
                excellent sun hours across most of the state), you can
                realistically pull 1,800-2,200W during peak midday hours. A
                full solar recharge from 0% takes approximately 2-3 hours
                under ideal conditions with a sufficiently large panel array.
                This is relevant for California homeowners running TOU
                arbitrage — you can solar-charge during off-peak midday hours
                and discharge during peak evening rates.
              </p>

              {/* Output & Ports */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Output &amp; Ports: The 6,000W Difference
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is where the F3800 separates itself from the
                competition. 6,000W of continuous AC output with 12,000W
                surge capacity. To put that in perspective: most portable
                power stations top out at 2,000-4,000W. The F3800 can
                simultaneously run a refrigerator (150W), a window AC unit
                (1,200W), a well pump (1,500W), lights and Wi-Fi (200W),
                and still have over 2,900W of headroom.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The port selection is comprehensive:
              </p>
              <ul className='text-foreground/80 leading-relaxed mb-6 space-y-2'>
                <li>
                  <strong>6 AC outlets</strong> including a dedicated NEMA
                  14-50 240V outlet — this is the same plug your dryer or
                  EV charger uses
                </li>
                <li>
                  <strong>3 USB-C ports</strong> at 100W each — fast-charge
                  laptops, phones, tablets simultaneously
                </li>
                <li>
                  <strong>2 USB-A ports</strong> for legacy devices
                </li>
                <li>
                  <strong>12V car outlet</strong> for accessories
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The NEMA 14-50 outlet deserves special attention. This means
                you can plug in an EV charger, a clothes dryer, or a well
                pump directly — no transfer switch, no electrician, no
                additional equipment. For California homeowners who want
                emergency EV charging capability during a PSPS outage, this
                is a significant differentiator.
              </p>

              {/* Smart Features */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Smart Features &amp; App
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Anker app connects via Wi-Fi or Bluetooth and provides
                real-time monitoring of input/output power, battery state of
                charge, individual outlet status, and charging schedules.
                You can set charge/discharge schedules — useful for TOU
                arbitrage — and receive notifications for low battery or
                power events.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The UPS (uninterruptible power supply) function switches over
                in under 20 milliseconds. That&apos;s fast enough to keep
                computers, networking equipment, and medical devices running
                without interruption during a power outage. For California
                homeowners in PSPS-prone areas, this means you can leave the
                F3800 plugged into a wall outlet, and when the grid goes
                down, your connected circuits switch to battery power
                seamlessly.
              </p>

              {/* The Price Situation */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Price Situation: MSRP $3,999 vs. $1,799 Promo
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the part everyone wants to talk about. The MSRP is
                $3,999. The current promotional price is $1,799. That&apos;s
                a 55% discount. Naturally, people are skeptical.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s our read on the situation: Anker is making an
                aggressive play for market share in the portable power
                station space, which has been dominated by EcoFlow and
                Bluetti. The F3800 launched at full MSRP and was already
                competitive. The $1,799 price appears to be a deliberate
                loss-leader strategy to establish the SOLIX brand as the
                value leader in the high-capacity segment.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Is the price real? Yes — it&apos;s available directly from
                Anker and through major retailers as of April 2026. Will it
                last forever? Unknown. Anker hasn&apos;t announced an end
                date, but promotional pricing by definition is temporary.
                At $1,799, the cost per watt-hour is $0.47/Wh — compared
                to roughly $0.78/Wh for the EcoFlow Delta Pro 3 and
                $0.85/Wh for the Bluetti AC500 + B300S combo. It&apos;s
                genuinely the best price-to-performance ratio in this class
                right now.
              </p>

              {/* California-Specific Section */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4 flex items-center gap-2'>
                <Sun className='h-6 w-6 text-yellow-500' />
                California-Specific: PSPS Backup &amp; TOU Arbitrage
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re reading this from California, the F3800 has
                some specific advantages worth understanding.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-8 mb-3'>
                PSPS &amp; Wildfire Season Backup
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s Public Safety Power Shutoffs (PSPS) can
                last anywhere from 8 hours to multiple days. The F3800&apos;s
                3,840 Wh runs a refrigerator for approximately 25 hours. Add
                lights, phone charging, and Wi-Fi router, and you&apos;re
                looking at essential-circuit backup for roughly 2-3 days from
                a single charge. The 6,000W output means you can run AC
                units, well pumps, and EV charging that smaller power
                stations simply cannot handle.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                With one B3800 expansion battery (7,680 Wh total), essential
                backup extends to 4-5 days. With the full six-battery
                expansion (26,880 Wh), you have multi-week coverage for
                essential circuits — more than a Tesla Powerwall 3.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-8 mb-3'>
                EV Charging During Outages
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The built-in NEMA 14-50 240V outlet lets you plug in a
                standard Level 2 EV charger directly. From a full F3800
                charge, you can add roughly 15-25 miles of range to most
                EVs — enough to get to a working charging station or handle
                essential errands during an extended outage. No transfer
                switch or electrician needed.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-8 mb-3'>
                TOU Rate Arbitrage
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s time-of-use rate structures create a
                significant price gap between off-peak and peak hours. For
                example, PG&E&apos;s peak rates can reach 40-48 cents/kWh
                while off-peak rates are 25-30 cents/kWh. SDG&E&apos;s peak
                rates hit 47-70 cents/kWh. With the F3800&apos;s app-based
                scheduling, you can charge during cheap off-peak hours (or
                via solar panels during midday) and discharge during
                expensive peak evening hours. On a 3,840 Wh cycle, the
                savings are modest — roughly $0.50-0.75 per cycle — but
                they compound, and expansion batteries increase the
                arbitrage potential.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-8 mb-3'>
                SGIP Rebate Potential
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s Self-Generation Incentive Program (SGIP)
                provides rebates for battery storage. At the general market
                rate of approximately $150/kWh, a 3,840 Wh system could
                qualify for roughly $576. For equity-eligible households
                (low-income, living in high-fire-threat areas, or medically
                vulnerable), the rebate jumps to approximately $1,100/kWh —
                or about $4,224 for the F3800. At the equity rate, that
                would more than cover the $1,799 purchase price.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Important caveat:</strong> SGIP eligibility for
                portable power stations depends on how the unit is installed
                and your utility&apos;s specific program rules. Permanently
                installed systems are more likely to qualify than units used
                portably. Verify eligibility with your utility before
                purchasing based on SGIP expectations.
              </p>

              {/* Pros & Cons */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Pros &amp; Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-5'>
                  <h3 className='font-bold text-green-800 dark:text-green-400 mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5' />
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      <span>
                        6,000W continuous output — highest in class by a
                        wide margin
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      <span>
                        $1,799 promo pricing makes it the best value per Wh
                        available
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      <span>
                        Built-in NEMA 14-50 240V outlet for EVs, dryers,
                        well pumps
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      <span>
                        Expandable to 26,880 Wh — more than a Tesla
                        Powerwall 3
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      <span>
                        LiFePO4 cells with 3,000+ cycle life
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      <span>
                        0-80% AC charge in ~1 hour
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      <span>
                        2,400W solar input with MPPT
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      <span>
                        UPS function with &lt;20ms switchover
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-5'>
                  <h3 className='font-bold text-red-800 dark:text-red-400 mb-3 flex items-center gap-2'>
                    <X className='h-5 w-5' />
                    Cons
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        132 lbs — not portable in any practical sense
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        Anker has less track record in power stations than
                        EcoFlow
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        MSRP of $3,999 is hard to justify if promo ends
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        Expansion batteries (B3800) add significant cost
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        App ecosystem is newer and less mature than
                        competitors
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mid-content CTA */}
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge="Ready to buy?"
                verdict="The $1,799 promo is live at Anker.com right now — check current price before it reverts to $3,999 MSRP."
                source="anker-f3800"
                variant="mid"
              />

              {/* Comparison */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How It Compares
              </h2>
              <div className='border border-border rounded-xl overflow-hidden mb-8'>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm'>
                    <thead>
                      <tr className='bg-muted/50'>
                        <th className='px-4 py-3 text-left font-semibold text-foreground'>
                          Spec
                        </th>
                        <th className='px-4 py-3 text-left font-semibold text-primary'>
                          Anker SOLIX F3800
                        </th>
                        <th className='px-4 py-3 text-left font-semibold text-foreground'>
                          EcoFlow Delta Pro 3
                        </th>
                        <th className='px-4 py-3 text-left font-semibold text-foreground'>
                          Bluetti AC500 + B300S
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          'Capacity',
                          '3,840 Wh',
                          '4,096 Wh',
                          '3,072 Wh (1x B300S)',
                        ],
                        [
                          'Max Expansion',
                          '26,880 Wh',
                          '24,576 Wh',
                          '18,432 Wh',
                        ],
                        [
                          'Output',
                          '6,000W / 12,000W',
                          '4,000W / 8,000W',
                          '5,000W / 10,000W',
                        ],
                        [
                          '240V Outlet',
                          'Built-in NEMA 14-50',
                          'Add-on required',
                          'Add-on required',
                        ],
                        [
                          'Battery Type',
                          'LiFePO4',
                          'LiFePO4',
                          'LiFePO4',
                        ],
                        [
                          'Cycle Life',
                          '3,000+',
                          '4,000+',
                          '3,500+',
                        ],
                        [
                          'Solar Input',
                          '2,400W',
                          '2,600W',
                          '3,000W',
                        ],
                        [
                          'Weight',
                          '~132 lbs',
                          '~114 lbs',
                          '~132 lbs (unit + B300S)',
                        ],
                        [
                          'Street Price',
                          '$1,799 (promo)',
                          '~$3,200',
                          '~$3,400 (combo)',
                        ],
                        [
                          'Cost per Wh',
                          '$0.47/Wh',
                          '$0.78/Wh',
                          '$1.11/Wh',
                        ],
                      ].map(([spec, anker, ecoflow, bluetti], i) => (
                        <tr
                          key={spec}
                          className={
                            i % 2 === 0 ? 'bg-muted/30' : 'bg-background'
                          }
                        >
                          <td className='px-4 py-3 font-medium text-foreground'>
                            {spec}
                          </td>
                          <td className='px-4 py-3 text-primary font-medium'>
                            {anker}
                          </td>
                          <td className='px-4 py-3 text-foreground/80'>
                            {ecoflow}
                          </td>
                          <td className='px-4 py-3 text-foreground/80'>
                            {bluetti}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The EcoFlow Delta Pro 3 is the most polished competitor with
                a longer track record and slightly larger base capacity
                (4,096 Wh vs 3,840 Wh). Its app ecosystem is more mature,
                and EcoFlow&apos;s customer support infrastructure is more
                established. But it costs nearly twice as much and delivers
                only 4,000W vs. 6,000W output. It also lacks a built-in
                240V outlet.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Bluetti AC500 is modular and highly expandable with a
                strong solar input (3,000W), but the combo pricing pushes
                well over $3,000 and the per-Wh cost is significantly
                higher. Bluetti&apos;s app and firmware updates have also
                been inconsistent historically.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At $1,799, the F3800 is in a different pricing tier entirely.
                You&apos;re getting more output power, comparable capacity,
                and a built-in 240V outlet for roughly half the cost of the
                nearest competitor.
              </p>

              {/* Who Should Buy This */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Should Buy the Anker SOLIX F3800?
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>California homeowners preparing for PSPS
                outages</strong> — especially those in PG&E, SCE, or
                SDG&amp;E territory where shutoffs are routine during
                wildfire season. The 6,000W output handles real loads (AC,
                well pumps, EV charging) that smaller power stations
                cannot.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>EV owners who want emergency charging
                capability</strong> without hiring an electrician to install
                a transfer switch. The NEMA 14-50 outlet is plug-and-play.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Anyone who wants Powerwall-level backup without
                Powerwall-level installation costs.</strong> A Tesla
                Powerwall 3 costs $9,200+ installed. The F3800 at $1,799
                gives you 28% of the capacity, takes zero installation,
                and can expand to nearly double the Powerwall&apos;s
                capacity with expansion batteries.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Value-focused buyers acting while the promo price
                holds.</strong> At $3,999 MSRP, this would be a harder
                recommendation. At $1,799, it&apos;s the clearest value
                proposition in the portable power station market.
              </p>

              {/* FAQ */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-10'>
                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Is the $1,799 price real?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Yes. As of April 2026, Anker is selling the F3800 at
                    $1,799 — a 55% discount from the $3,999 MSRP. This
                    appears to be an aggressive market-share play against
                    EcoFlow and Bluetti. The promo has been available for
                    several months, but there&apos;s no guarantee it will
                    last indefinitely.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Can it power a whole house?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Essential circuits, yes. The 6,000W output handles a
                    refrigerator, lights, Wi-Fi, phone charging, a window AC
                    unit, and a well pump simultaneously. Running a
                    full-size central AC and electric range at the same time
                    would exceed capacity. With expansion batteries (up to
                    26,880 Wh), you can run essentials for multiple days.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    How long will it run a refrigerator?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    At a typical 150W average draw (accounting for
                    compressor cycling), approximately 25 hours from a full
                    charge. With one B3800 expansion battery (7,680 Wh
                    total), that extends to roughly 50 hours.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Does it qualify for California SGIP rebates?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Potentially. SGIP is designed for permanently installed
                    battery systems. If the F3800 is hardwired as permanent
                    home backup, it may qualify. General market rate: ~$576
                    rebate. Equity-eligible households: up to ~$4,224 — which
                    would more than cover the $1,799 price. Verify with your
                    utility before purchasing based on SGIP expectations.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Can it charge an electric vehicle?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Yes. The built-in NEMA 14-50 240V outlet accepts
                    standard Level 2 EV chargers directly. From a full
                    charge, expect roughly 15-25 miles of added range
                    depending on your vehicle&apos;s efficiency.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    How does it compare to the EcoFlow Delta Pro 3?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The F3800 has higher output (6,000W vs 4,000W), slightly
                    less base capacity (3,840 Wh vs 4,096 Wh), a built-in
                    240V outlet, and costs roughly half as much at promo
                    pricing ($1,799 vs ~$3,200). The Delta Pro 3 has a more
                    established ecosystem and longer track record.
                  </p>
                </div>
              </div>

              {/* Final CTA */}
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge="Final Verdict"
                verdict="At $1,799 promo, the F3800 is the clearest value proposition in portable power today — 6,000W output, built-in 240V outlet, LFP cells. Lock it in before the promo ends."
                source="anker-f3800"
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

              {/* Disclaimer */}
              <p className='text-xs text-muted-foreground mt-8 leading-relaxed'>
                This review is based on publicly available specifications,
                verified pricing as of April 2026, and aggregated user
                feedback. Product specifications and pricing
                may change. SGIP rebate amounts are estimates — verify
                current rates and eligibility with your utility provider.
              </p>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source="anker-f3800" />
    </ReviewLayout>
  );
}
