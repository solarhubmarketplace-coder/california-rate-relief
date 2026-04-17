import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import {
  ArrowLeft,
  ArrowRight,
  Battery,
  Calendar,
  CheckCircle,
  Clock,
  Star,
  Sun,
  XCircle,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Bluetti AC500 Review: The Most Modular Power Station You Can Buy (2026)',
  description:
    'In-depth Bluetti AC500 + B300S review. 5,000W output, 3,000W solar input, expandable to 18,432 Wh. Specs, real-world performance, California backup power analysis, and how it compares to EcoFlow Delta Pro 3 and Anker F3800.',
  alternates: {
    canonical: '/reviews/bluetti-ac500-review',
  },
  openGraph: {
    title:
      'Bluetti AC500 Review: The Most Modular Power Station You Can Buy (2026)',
    description:
      'Full review of the Bluetti AC500 + B300S portable power station. 5,000W output, expandable to 18,432 Wh, 3,000W solar input. Specs, pros, cons, and California PSPS backup analysis.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Bluetti AC500 + B300S Review',
  headline:
    'Bluetti AC500 Review: The Most Modular Power Station You Can Buy',
  description:
    'In-depth review of the Bluetti AC500 portable power station with B300S battery modules. 5,000W output, 3,000W solar input, expandable to 18,432 Wh.',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  itemReviewed: {
    '@type': 'Product',
    name: 'Bluetti AC500 + B300S',
    brand: {
      '@type': 'Brand',
      name: 'BLUETTI',
    },
    description:
      'Modular portable power station with 5,000W inverter and expandable LiFePO4 battery system up to 18,432 Wh.',
    offers: {
      '@type': 'Offer',
      price: '2299',
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
  reviewBody:
    'The Bluetti AC500 takes a modular approach to portable power that no other manufacturer has matched. The split inverter-battery design offers unmatched expandability up to 18,432 Wh, class-leading 3,000W solar input, and 5,000W continuous output.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/bluetti-ac500-review',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long will the Bluetti AC500 power my house during an outage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a single B300S battery (3,072 Wh), the AC500 can run essential loads like a refrigerator, router, phone chargers, and LED lights for roughly 24-48 hours. With a full 6-battery setup at 18,432 Wh, you can power essentials for over a week.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Bluetti AC500 run a full house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AC500 outputs 5,000W continuous (10,000W surge), which can run most household loads including refrigerators, microwaves, and power tools. It cannot run central AC, electric dryers, or other 240V appliances unless you pair two AC500 units in Fusion Pro mode for 10,000W / 240V output.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Bluetti AC500 qualify for California SGIP rebates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Portable power stations like the AC500 are generally not eligible for SGIP, which targets permanently installed battery systems. However, check the Self-Generation Incentive Program website for current eligibility rules, as program guidelines can change.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can the Bluetti AC500 charge from solar panels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AC500 accepts up to 3,000W of solar input, the highest in its class. With optimal panels in full California sun, you can charge a single B300S (3,072 Wh) from 0-100% in about 1.5-2 hours. Combined AC + solar charging can reach 0-80% in roughly 1 hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the Bluetti AC500 and AC300?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AC500 is the upgraded model with 5,000W output (vs 3,000W on the AC300), 3,000W solar input (vs 2,400W), and support for up to 6 B300S batteries at 18,432 Wh (vs 2 batteries at 6,144 Wh on the AC300). The AC500 also adds Fusion Pro capability for 10,000W / 240V output.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the Bluetti AC500 battery last before needing replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The B300S uses LiFePO4 (LFP) chemistry rated for 3,500+ cycles to 80% capacity. If you fully cycle the battery once per day, that is roughly 10 years before the battery degrades to 80% of its original capacity. LFP batteries are significantly more durable than the lithium NMC cells used in many competitors.',
      },
    },
  ],
};

export default function BluettiAC500Review() {
  return (
    <PublicLayout>
      <Header />
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
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Link
                  href='/reviews'
                  className='hover:text-primary transition-colors'
                >
                  Reviews
                </Link>
                <span>/</span>
                <Link
                  href='/reviews'
                  className='hover:text-primary transition-colors'
                >
                  Best Portable Power Stations
                </Link>
                <span>/</span>
                <span className='text-foreground font-medium'>
                  Bluetti AC500 Review
                </span>
              </div>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Bluetti AC500 Review: The Most Modular Power Station You Can Buy
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>12 min read</span>
                </div>
              </div>
            </header>

            {/* Quick Verdict Box */}
            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  Quick Verdict
                </h2>
                <div className='flex items-center gap-1'>
                  {[1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className='h-5 w-5 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                  <Star className='h-5 w-5 fill-yellow-400/50 text-yellow-400' />
                  <span className='ml-2 text-lg font-bold text-foreground'>
                    4.5/5
                  </span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Bluetti AC500 is the most expandable portable power station
                on the market. Its split inverter-battery architecture lets you
                start with one 3,072 Wh battery and scale up to 18,432 Wh as
                your needs grow. Combined with the highest solar input in its
                class (3,000W) and a massive 5,000W continuous output, it is the
                best choice for California homeowners who want a serious PSPS
                backup system they can build over time. The trade-off: you are
                buying into an ecosystem, not a grab-and-go box.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <h3 className='font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-600' />
                    Best For
                  </h3>
                  <ul className='text-sm text-foreground/70 space-y-1'>
                    <li>PSPS and outage preparedness (scalable capacity)</li>
                    <li>Off-grid solar setups (3,000W solar input)</li>
                    <li>RV and overlanding (30A RV plug included)</li>
                    <li>Home backup that grows with your needs</li>
                  </ul>
                </div>
                <div>
                  <h3 className='font-semibold text-foreground mb-2 flex items-center gap-2'>
                    <XCircle className='h-4 w-4 text-red-500' />
                    Not Ideal For
                  </h3>
                  <ul className='text-sm text-foreground/70 space-y-1'>
                    <li>Grab-and-go portability (150 lbs total)</li>
                    <li>Budget shoppers (battery sold separately)</li>
                    <li>240V loads without buying a second unit</li>
                    <li>People who want one simple box</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specs Table */}
            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Bluetti AC500 + B300S Specifications
              </h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <tbody>
                    {[
                      ['Bundle Price', '$2,299 (AC500 + 1x B300S)'],
                      ['Inverter Only', '$1,399 (AC500 module)'],
                      ['Battery Capacity', '3,072 Wh (1x B300S)'],
                      [
                        'Max Capacity',
                        '18,432 Wh (6x B300S)',
                      ],
                      ['Continuous Output', '5,000W (10,000W surge)'],
                      ['Solar Input', '3,000W max'],
                      ['Battery Chemistry', 'LiFePO4 (LFP)'],
                      ['Cycle Life', '3,500+ cycles to 80%'],
                      ['AC Charging', '0-80% in ~1 hour (AC + solar combined)'],
                      ['Weight', '67.2 lbs (AC500) + 82.7 lbs (B300S)'],
                      [
                        'Outlets',
                        '6x AC (120V), 1x 30A RV, 2x USB-C (100W), 2x USB-A, car outlet, wireless pad',
                      ],
                      ['UPS Switchover', '<20ms'],
                      ['Connectivity', 'Wi-Fi, Bluetooth, BLUETTI App'],
                      [
                        'Fusion Pro',
                        '2x AC500 = 10,000W / 240V split-phase',
                      ],
                      ['Warranty', '4 years (AC500 + B300S)'],
                    ].map(([label, value], i) => (
                      <tr
                        key={label}
                        className={
                          i % 2 === 0 ? 'bg-muted/30' : 'bg-background'
                        }
                      >
                        <td className='px-4 py-3 font-medium text-foreground border-b border-border w-1/3'>
                          {label}
                        </td>
                        <td className='px-4 py-3 text-foreground/80 border-b border-border'>
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
              {/* The Modular Design Philosophy */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Modular Design Philosophy
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most portable power stations are all-in-one units: inverter and
                battery packed into a single enclosure. The Bluetti AC500 does
                something different. The AC500 itself is just an inverter module
                — a 67.2-pound box with no internal battery at all. You connect
                it to one or more B300S battery modules via a thick cable, and
                the system comes alive.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This split architecture is the single most important thing to
                understand about the AC500. It is not a power station. It is a
                power <em>system</em>. The inverter handles all the brains —
                output regulation, MPPT solar charging, app connectivity, UPS
                switching — while the batteries are simple, swappable energy
                storage. This means you can start with one B300S at 3,072 Wh and
                add batteries later as your budget or backup needs grow.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The downside is obvious: you cannot just buy one thing and be
                done. The AC500 inverter alone is $1,399, and you need at least
                one B300S ($899) to make it work. The $2,299 bundle gets you
                both, but competitors like the EcoFlow Delta Pro 3 give you
                battery and inverter in one box for a similar price. Bluetti is
                betting that the flexibility is worth the extra complexity.
              </p>

              {/* Battery & Expandability */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                <Battery className='inline h-6 w-6 mr-2 text-primary' />
                Battery and Expandability
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Each B300S battery module holds 3,072 Wh of LiFePO4 (lithium
                iron phosphate) cells. LFP is the gold standard for stationary
                storage: it handles more charge cycles, runs cooler, and is
                inherently safer than the NMC (nickel manganese cobalt) cells
                found in many competitors. The B300S is rated for 3,500+ cycles
                to 80% capacity — roughly 10 years of daily use before
                meaningful degradation.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The math on expandability is straightforward. One AC500 inverter
                supports up to six B300S batteries:
              </p>
              <div className='bg-muted/30 border border-border rounded-lg p-4 mb-6'>
                <ul className='text-foreground/80 space-y-2 list-none pl-0'>
                  <li>
                    <strong>1x B300S:</strong> 3,072 Wh — essentials for 1-2
                    days
                  </li>
                  <li>
                    <strong>2x B300S:</strong> 6,144 Wh — essentials for 3-4
                    days
                  </li>
                  <li>
                    <strong>3x B300S:</strong> 9,216 Wh — essentials for 5-6
                    days
                  </li>
                  <li>
                    <strong>4x B300S:</strong> 12,288 Wh — essentials for a week
                  </li>
                  <li>
                    <strong>6x B300S:</strong> 18,432 Wh — extended off-grid or
                    whole-home backup
                  </li>
                </ul>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                &quot;Essentials&quot; means a refrigerator (150-200W
                continuous), Wi-Fi router (15W), phone and laptop charging
                (50-100W), and LED lighting (20-50W) — roughly 400-500W average
                draw, or about 6-8 kWh per day. Your actual runtime depends
                heavily on what you plug in and how often.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At 18,432 Wh fully loaded, the AC500 system holds more energy
                than a Tesla Powerwall (13.5 kWh). The difference: a Powerwall
                is permanently installed and costs $12,000+ with installation,
                while a fully-loaded AC500 setup runs around $7,700 and can be
                moved to a new house or taken on a camping trip. The trade-off is
                that the AC500 does not integrate into your home electrical panel
                without additional hardware.
              </p>

              {/* Charging Speed */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                <Sun className='inline h-6 w-6 mr-2 text-primary' />
                Charging Speed: 3,000W Solar Input Is Class-Leading
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The AC500 accepts up to 3,000W of solar input — the highest of
                any portable power station currently available. For context, the
                EcoFlow Delta Pro 3 maxes out at 2,600W, and the Anker F3800
                tops out at 2,400W. In a category where solar charging speed is
                often a bottleneck, the AC500 has a meaningful lead.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                With 3,000W of panels in full California sunshine (5-6 peak sun
                hours in most of the state), you can realistically harvest 15-18
                kWh per day — enough to completely recharge even a large
                multi-battery setup. A single B300S (3,072 Wh) can go from empty
                to full in about 1.5-2 hours of peak sun with adequate panels.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                AC charging is also fast. From a standard wall outlet, the AC500
                can pull up to 3,000W of AC input. Combine AC and solar charging
                simultaneously and the system can hit 0-80% on a single B300S in
                roughly one hour. If you are using this as a daily-cycle home
                backup, that speed means the battery is always topped off and
                ready.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The MPPT solar charge controller is built into the AC500
                inverter, not the battery. This means all your B300S batteries
                benefit from the same high-efficiency charging regardless of how
                many you connect.
              </p>

              {/* Output & Ports */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                <Zap className='inline h-6 w-6 mr-2 text-primary' />
                Output and Ports: 5,000W Is Serious Power
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The AC500 delivers 5,000W of continuous AC power with a 10,000W
                surge rating. To put that in perspective, 5,000W is enough to
                run a full-size refrigerator, a microwave, a window AC unit, and
                several smaller devices simultaneously. The 10,000W surge
                handles startup spikes from compressor motors without tripping
                the inverter.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The port selection covers nearly every use case:
              </p>
              <div className='bg-muted/30 border border-border rounded-lg p-4 mb-6'>
                <ul className='text-foreground/80 space-y-2 list-none pl-0'>
                  <li>
                    <strong>6x AC outlets (120V/20A):</strong> Standard household
                    plugs — run anything that plugs into a wall
                  </li>
                  <li>
                    <strong>1x 30A RV plug (TT-30):</strong> Direct connection to
                    RVs and travel trailers without an adapter
                  </li>
                  <li>
                    <strong>2x USB-C (100W each):</strong> Fast-charge laptops,
                    tablets, and modern phones
                  </li>
                  <li>
                    <strong>2x USB-A:</strong> Older devices, LED lights,
                    accessories
                  </li>
                  <li>
                    <strong>12V car outlet:</strong> Car accessories, portable
                    coolers, tire inflators
                  </li>
                  <li>
                    <strong>Wireless charging pad:</strong> Drop a Qi-compatible
                    phone on top
                  </li>
                </ul>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 30A RV plug is a standout for California users. If you camp
                in state parks, BLM land, or use an RV for wildfire evacuation
                staging, you get direct power without adapters. Most competitors
                require a separate RV adapter or do not offer 30A output at all.
              </p>

              {/* Fusion Pro */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                <Zap className='inline h-6 w-6 mr-2 text-primary' />
                Fusion Pro: Two AC500s for 10,000W and 240V
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Bluetti&apos;s Fusion Pro feature lets you link two AC500 units
                together. The result is a combined 10,000W of continuous output
                and a 240V split-phase configuration — the same voltage your
                home electrical panel uses. This opens the door to running 240V
                appliances like electric dryers, well pumps, and central air
                conditioning units that a single AC500 cannot handle.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The cost of a Fusion Pro setup is significant: two AC500
                inverters plus at least two B300S batteries puts you at $4,600
                or more. At that price, you are approaching the territory of a
                permanently installed home battery system. But the Fusion Pro
                setup is portable, does not require an electrician or permits,
                and can be resold or relocated. For homeowners in rental
                situations or those who want backup power they can take with them
                when they move, it is a genuinely unique option.
              </p>

              {/* Smart Features & App */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Smart Features and the BLUETTI App
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The AC500 connects via Wi-Fi and Bluetooth to the BLUETTI app
                (iOS and Android). The app provides real-time monitoring of input
                and output wattage, battery state of charge, estimated runtime,
                and charging speed. You can also toggle individual outlet groups
                on and off, set charging schedules, and configure UPS mode
                settings.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The UPS (uninterruptible power supply) function switches to
                battery power in under 20 milliseconds when grid power drops.
                That is fast enough to keep computers, networking equipment, and
                medical devices running without interruption. For California
                homeowners who work from home during PSPS events, this is a
                practical feature — your router and laptop stay online even as
                the grid goes dark.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The app is functional but not exceptional. It does what it needs
                to do, but the interface feels dated compared to EcoFlow&apos;s
                app. Firmware updates are delivered through the app, and Bluetti
                has been consistent about pushing updates that improve charging
                algorithms and add features post-purchase.
              </p>

              {/* California-Specific Section */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California-Specific: PSPS Backup and Solar Integration
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s Public Safety Power Shutoff (PSPS) events are
                why most people in this state start looking at backup power in
                the first place. The AC500&apos;s modular design is particularly
                well-suited to this use case because you can right-size your
                investment to the risk:
              </p>
              <div className='bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6'>
                <h3 className='font-semibold text-foreground mb-3'>
                  PSPS Backup Sizing Guide
                </h3>
                <ul className='text-foreground/80 space-y-2 list-none pl-0'>
                  <li>
                    <strong>Tier 1 — Short outages (4-12 hours):</strong> 1x
                    B300S (3,072 Wh) keeps your fridge, router, and lights
                    running through a single PSPS event. Cost: $2,299 bundle.
                  </li>
                  <li>
                    <strong>Tier 2 — Extended outages (2-3 days):</strong> 2x
                    B300S (6,144 Wh) handles multi-day PSPS events that are
                    becoming more common in fire-prone areas. Cost: ~$3,198.
                  </li>
                  <li>
                    <strong>Tier 3 — Serious preparedness (5+ days):</strong> 3-4x
                    B300S (9,216-12,288 Wh) plus solar panels for indefinite
                    runtime during extended emergencies. Cost: ~$4,097-$4,996.
                  </li>
                </ul>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 3,000W solar input is where the AC500 really shines for
                California. With 5-6 peak sun hours in most of the state, a
                properly sized solar array can fully recharge the battery every
                day — making extended outages manageable without grid power at
                all. No other portable power station can match this solar
                charging speed.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>A note on SGIP incentives:</strong> California&apos;s
                Self-Generation Incentive Program (SGIP) provides rebates for
                battery storage. General market customers receive approximately
                $150/kWh, which would be about $461 for a single B300S (3,072
                Wh). Equity-eligible customers (low-income, medically
                vulnerable, or in high fire-threat areas) receive approximately
                $1,100/kWh, which would be about $3,379 — potentially covering
                the entire cost of the B300S battery. However, SGIP eligibility
                for portable power stations varies and you should confirm
                current rules at{' '}
                <a
                  href='https://www.selfgenca.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  selfgenca.com
                </a>{' '}
                before purchasing.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 30A RV plug also makes the AC500 practical for California
                camping trips — state parks, national forests, and BLM land
                throughout the state. Pair it with portable solar panels and you
                have indefinite off-grid power for extended backcountry trips.
              </p>

              {/* Pros & Cons */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Pros and Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-5'>
                  <h3 className='font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2'>
                    <CheckCircle className='h-5 w-5' />
                    Pros
                  </h3>
                  <ul className='text-foreground/80 text-sm space-y-2 list-none pl-0'>
                    <li>
                      Most expandable system available (up to 18,432 Wh)
                    </li>
                    <li>
                      Class-leading 3,000W solar input
                    </li>
                    <li>
                      5,000W continuous output handles serious loads
                    </li>
                    <li>
                      LiFePO4 batteries (3,500+ cycles, inherently safe)
                    </li>
                    <li>
                      Fusion Pro for 10,000W / 240V dual-unit setup
                    </li>
                    <li>
                      30A RV plug included (no adapter needed)
                    </li>
                    <li>
                      UPS mode with &lt;20ms switchover
                    </li>
                    <li>
                      4-year warranty on both inverter and batteries
                    </li>
                    <li>
                      Buy-as-you-grow: start with 1 battery, add more later
                    </li>
                  </ul>
                </div>
                <div className='bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-5'>
                  <h3 className='font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2'>
                    <XCircle className='h-5 w-5' />
                    Cons
                  </h3>
                  <ul className='text-foreground/80 text-sm space-y-2 list-none pl-0'>
                    <li>
                      Battery sold separately — higher effective entry price
                    </li>
                    <li>
                      Combined weight is 150 lbs (not portable for one person)
                    </li>
                    <li>
                      Split design adds complexity vs. all-in-one units
                    </li>
                    <li>
                      No 240V output without buying a second AC500
                    </li>
                    <li>
                      BLUETTI app is functional but not best-in-class
                    </li>
                    <li>
                      Cables between inverter and battery are bulky
                    </li>
                    <li>
                      Not a true whole-home backup without panel integration
                    </li>
                  </ul>
                </div>
              </div>

              {/* Comparison Table */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How It Compares
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The AC500 competes with two other flagship portable power
                stations: the EcoFlow Delta Pro 3 and the Anker SOLIX F3800.
                Here is how they stack up on the specs that matter most:
              </p>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-3 text-left font-semibold text-foreground border-b border-border'>
                        Spec
                      </th>
                      <th className='px-3 py-3 text-left font-semibold text-primary border-b border-border'>
                        Bluetti AC500
                      </th>
                      <th className='px-3 py-3 text-left font-semibold text-foreground border-b border-border'>
                        EcoFlow Delta Pro 3
                      </th>
                      <th className='px-3 py-3 text-left font-semibold text-foreground border-b border-border'>
                        Anker F3800
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        'Base Capacity',
                        '3,072 Wh',
                        '4,096 Wh',
                        '3,840 Wh',
                      ],
                      [
                        'Max Capacity',
                        '18,432 Wh',
                        '12,288 Wh',
                        '11,520 Wh',
                      ],
                      [
                        'Continuous Output',
                        '5,000W',
                        '4,000W',
                        '3,800W',
                      ],
                      [
                        'Solar Input',
                        '3,000W',
                        '2,600W',
                        '2,400W',
                      ],
                      [
                        'Battery Type',
                        'LiFePO4',
                        'LiFePO4',
                        'LiFePO4',
                      ],
                      [
                        'Weight',
                        '150 lbs (system)',
                        '114 lbs',
                        '132 lbs',
                      ],
                      [
                        'Design',
                        'Modular (split)',
                        'All-in-one',
                        'All-in-one',
                      ],
                      [
                        '240V Option',
                        'Fusion Pro (2 units)',
                        'Built-in',
                        'Built-in',
                      ],
                      [
                        'Bundle Price',
                        '~$2,299',
                        '~$2,499',
                        '~$2,699',
                      ],
                    ].map(([spec, bluetti, ecoflow, anker], i) => (
                      <tr
                        key={spec}
                        className={
                          i % 2 === 0 ? 'bg-muted/30' : 'bg-background'
                        }
                      >
                        <td className='px-3 py-2 font-medium text-foreground border-b border-border'>
                          {spec}
                        </td>
                        <td className='px-3 py-2 text-primary font-medium border-b border-border'>
                          {bluetti}
                        </td>
                        <td className='px-3 py-2 text-foreground/80 border-b border-border'>
                          {ecoflow}
                        </td>
                        <td className='px-3 py-2 text-foreground/80 border-b border-border'>
                          {anker}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>AC500 wins on:</strong> Maximum expandability (18,432
                Wh), solar input speed (3,000W), continuous output (5,000W), and
                price-to-power ratio. If you plan to scale up over time or need
                the absolute highest solar charging speed, the AC500 is the
                clear choice.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Competitors win on:</strong> Out-of-box simplicity
                (all-in-one design), lower total weight, built-in 240V output
                without needing a second unit, and higher base capacity. If you
                want one box that does everything from day one, the Delta Pro 3
                or F3800 are more straightforward.
              </p>

              {/* Who Should Buy This */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Should Buy the Bluetti AC500
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The AC500 is not for everyone. It is specifically the right
                choice if you fall into one or more of these categories:
              </p>
              <div className='bg-muted/30 border border-border rounded-lg p-5 mb-6'>
                <ul className='text-foreground/80 space-y-3 list-none pl-0'>
                  <li>
                    <strong>California homeowners in PSPS-prone areas</strong>{' '}
                    who want a backup system they can grow over time as shutoffs
                    become longer and more frequent.
                  </li>
                  <li>
                    <strong>Solar enthusiasts and off-gridders</strong> who want
                    the fastest solar recharge available and plan to pair the
                    unit with a large solar array.
                  </li>
                  <li>
                    <strong>RV and overlanding users</strong> who need the 30A RV
                    plug and want solar-powered indefinite camping.
                  </li>
                  <li>
                    <strong>Budget-conscious preppers</strong> who want to start
                    with one battery now and add capacity before the next fire
                    season rather than spending $5,000+ upfront.
                  </li>
                  <li>
                    <strong>Remote workers</strong> who need UPS functionality to
                    keep internet and computers online during outages.
                  </li>
                </ul>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you want something simpler — a single box you can carry by
                yourself, plug in, and forget about — look at the EcoFlow Delta
                Pro 3. If you need 240V output from day one without buying two
                units, the Anker F3800 with its home panel kit is worth
                considering.
              </p>

              {/* FAQ Section */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-8'>
                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    How long will the Bluetti AC500 power my house during an
                    outage?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    With a single B300S battery (3,072 Wh), the AC500 can run
                    essential loads like a refrigerator, router, phone chargers,
                    and LED lights for roughly 24-48 hours. With a full 6-battery
                    setup at 18,432 Wh, you can power essentials for over a week.
                    Adding solar panels extends runtime indefinitely during
                    daylight hours.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Can the Bluetti AC500 run a full house?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The AC500 outputs 5,000W continuous (10,000W surge), which
                    can run most 120V household loads including refrigerators,
                    microwaves, and power tools simultaneously. It cannot run
                    240V appliances like central AC, electric dryers, or well
                    pumps unless you pair two AC500 units in Fusion Pro mode for
                    10,000W / 240V output.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    Does the Bluetti AC500 qualify for California SGIP rebates?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Portable power stations like the AC500 are generally not
                    eligible for SGIP, which targets permanently installed
                    battery systems. However, program guidelines can change. Check
                    the{' '}
                    <a
                      href='https://www.selfgenca.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary hover:underline'
                    >
                      Self-Generation Incentive Program website
                    </a>{' '}
                    for current eligibility rules before purchasing.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    How fast can the Bluetti AC500 charge from solar panels?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The AC500 accepts up to 3,000W of solar input, the highest in
                    its class. With optimal panels in full California sun, you can
                    charge a single B300S (3,072 Wh) from 0-100% in about 1.5-2
                    hours. Combined AC + solar charging can reach 0-80% in
                    roughly 1 hour.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    What is the difference between the Bluetti AC500 and AC300?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The AC500 is the upgraded model with 5,000W output (vs 3,000W
                    on the AC300), 3,000W solar input (vs 2,400W), and support
                    for up to 6 B300S batteries totaling 18,432 Wh (vs 2
                    batteries at 6,144 Wh on the AC300). The AC500 also adds
                    Fusion Pro capability for 10,000W / 240V output with two
                    units.
                  </p>
                </div>

                <div className='border border-border rounded-lg p-5'>
                  <h3 className='font-semibold text-foreground mb-2'>
                    How long does the Bluetti AC500 battery last before needing
                    replacement?
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The B300S uses LiFePO4 (LFP) chemistry rated for 3,500+
                    cycles to 80% capacity. If you fully cycle the battery once
                    per day, that is roughly 10 years before the battery degrades
                    to 80% of its original capacity. LFP batteries are
                    significantly more durable than the lithium NMC cells used in
                    many competing power stations.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mt-10 mb-8'>
                <h2 className='text-2xl font-bold text-foreground mb-3'>
                  Thinking About Solar for Your California Home?
                </h2>
                <p className='text-foreground/80 leading-relaxed mb-6'>
                  A portable power station is a great backup solution, but it
                  does not reduce your monthly electric bill. If your PG&E, SCE,
                  or SDG&E bills have been climbing and you want to lock in a
                  fixed rate that is 30-50% less than what you pay now, check if
                  you qualify for the California Rate Relief Program. It takes 30
                  seconds and there is no obligation.
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Link
                    href='/#qualify'
                    className='inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors'
                  >
                    Check If You Qualify
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                  <Link
                    href='/blog'
                    className='inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted/50 transition-colors'
                  >
                    <ArrowLeft className='h-4 w-4' />
                    Back to All Articles
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
