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
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

const PRIMARY_PRODUCT_KEY = 'velotric-ebike';

export const metadata: Metadata = {
  title:
    'Velotric E-Bikes Review 2026: Discover, Nomad, T1, Go, Summit Compared',
  description:
    'Honest Velotric e-bikes review covering the 2026 lineup: Discover 2, Nomad 1 Plus, T1 ST Plus, Go, Summit 1, and Breeze 1. SensorShift pedal assist, UL 2849 certified, IPX6 waterproof, 2-year warranty — premium DTC built by ex-Lime/Trek engineers.',
  alternates: {
    canonical: '/reviews/velotric-ebike',
  },
  openGraph: {
    title: 'Velotric E-Bikes Review 2026: The Full Lineup Compared',
    description:
      'Discover 2, Nomad 1 Plus, T1 ST Plus, Go, Summit 1, Breeze 1 — every Velotric reviewed. SensorShift tech, IPX6 water rating, and how Velotric compares to Aventon and Lectric.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Velotric E-Bikes Lineup 2026',
  description:
    'Complete comparison of the 2026 Velotric e-bikes lineup: Discover 2, Nomad 1 Plus, T1 ST Plus, Go, Summit 1, and Breeze 1.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Velotric Discover 2',
      url: 'https://ratereliefca.com/reviews/velotric-ebike#discover',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Velotric Nomad 1 Plus',
      url: 'https://ratereliefca.com/reviews/velotric-ebike#nomad',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Velotric T1 ST Plus',
      url: 'https://ratereliefca.com/reviews/velotric-ebike#t1',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Velotric Go',
      url: 'https://ratereliefca.com/reviews/velotric-ebike#go',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Velotric Summit 1',
      url: 'https://ratereliefca.com/reviews/velotric-ebike#summit',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Velotric Breeze 1',
      url: 'https://ratereliefca.com/reviews/velotric-ebike#breeze',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Velotric a good e-bike brand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Velotric was founded in 2021 by former senior engineers from Lime (the scooter-share company) and Trek Bicycles, and they\'ve built a reputation for combining premium engineering with direct-to-consumer pricing. Every bike is UL 2849 certified (the electrical-safety standard that matters for homeowners insurance and NYC regulations), IPX6-rated for water resistance (most DTC e-bikes are only IPX4-IPX5), and ships with a 2-year warranty. Independent reviewers consistently rank Velotric above Lectric and on par with Aventon.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Velotric SensorShift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SensorShift is Velotric\'s proprietary pedal-assist system that combines torque-sensor data with cadence information to deliver smoother transitions between PAS levels and a more responsive feel than either sensor type alone. In practice, it means less noticeable lag between when you push harder on the pedals and when the motor responds. SensorShift ships standard on the Discover 2, T1 ST Plus, Summit 1, and Breeze 1. The budget-tier Go and older models use standard torque sensors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Velotric e-bikes UL certified?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every Velotric e-bike currently sold is UL 2849 certified (the safety standard for e-bike electrical systems) and most models are also UL 2271 certified for the battery pack. This matters for three reasons: (1) NYC and several other municipalities now legally require UL certification for e-bikes used in the city; (2) homeowners insurance may deny claims from battery fires on non-UL-certified bikes; (3) it\'s evidence that the battery management system has been tested by a third-party lab for thermal runaway resistance. Lectric, Aventon, and most Rad Power models are also now UL 2849 certified as of 2025-2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does IPX6 water rating mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IPX6 is an Ingress Protection rating for water resistance. IPX6 means the electronics can withstand powerful jets of water from any direction; significantly more than IPX4 (splash-resistant) or IPX5 (low-pressure jets). For e-bike buyers, IPX6 means you can ride confidently in heavy rain, spray the bike down with a hose to clean it, and not worry about a sudden downpour destroying the controller. Most DTC e-bikes are IPX4-IPX5; Velotric is one of the few brands that engineers to IPX6 across the lineup.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Velotric warranty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Velotric offers a 2-year comprehensive warranty covering frame, motor, battery, and electronics against manufacturing defects. The warranty is consistent with Aventon (2-year) and twice as long as Lectric (1-year). Customer service is U.S.-based. The company sells replacement parts directly and has a growing dealer network that can handle warranty service in person.',
      },
    },
    {
      '@type': 'Question',
      name: 'Velotric vs Aventon: which is better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are premium DTC brands with torque sensors, 2-year warranties, and quality build. Velotric leads on water resistance (IPX6 vs IPX5), has SensorShift pedal assist that some riders find smoother, and typically runs $50-$150 cheaper per model. Aventon leads on dealer network (1,500+ vs Velotric\'s ~300), app sophistication, and broader lineup (including cargo). For commuting and recreation, they\'re close competitors — Velotric for the engineering and price; Aventon for the ecosystem and dealer access.',
      },
    },
  ],
};

export default function VelotricEbikeHub() {
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
              <span className='text-foreground font-medium'>Velotric</span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Brand Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Velotric E-Bikes Review 2026: Discover, Nomad, T1, Go, Summit Compared
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>17 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='https://electricbikereview.com/wp-content/assets/2022/02/2022-rad-power-bikes-radexpand-5-step-thru-black.jpg' alt='Velotric e-bike' className='w-full h-auto max-h-[480px] object-cover' loading='eager' />
            </div>

            <AffiliateDisclosure compact />

            {/* Above-the-fold brand CTA */}
            <AffiliateCTABox
              productKey={PRIMARY_PRODUCT_KEY}
              badge='Engineer-Built Premium'
              rating={4.6}
              verdict='Velotric was founded by former Lime and Trek engineers in 2021. The full lineup is UL 2849 certified, IPX6 water-rated, and carries a 2-year warranty. It is the most engineering-led DTC e-bike brand, and often cheaper than equivalent Aventons.'
              pros={[
                'Riders who prioritize safety certifications',
                'Wet-climate commuters (IPX6 water rating)',
                'Performance-focused daily riders',
              ]}
              cons={['Buyers who want a physical dealer test ride', 'Heavy-cargo or family-hauling use cases']}
              source='velotric-ebike-hub'
              variant='top'
            />

            {/* Intro */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Velotric is one of the newer names in the DTC e-bike space, but don&apos;t mistake that for inexperience. The company was founded in 2021 by a team that includes Adam Zhang (former senior engineer at Lime, the shared-scooter company that deployed 120 million rides worth of vehicles) and several senior product engineers from Trek Bicycles. The result is a lineup that feels dramatically more engineer-driven than competitors — UL 2849 certified across the board, IPX6 water resistance on every model, and design decisions that you&apos;d only make if you&apos;d personally diagnosed 10,000 failed e-bikes in the field.
              </p>
              <p className='text-lg text-foreground/80 leading-relaxed mb-8'>
                In 2026, Velotric has grown into a full-lineup brand: adventure/gravel (Discover 2), fat-tire all-terrain (Nomad 1 Plus), road/commuter (T1 ST Plus), value commuter (Go), premium performance (Summit 1), and a step-through commuter (Breeze 1). This guide walks through each, explains what SensorShift is and why it matters, and compares Velotric honestly vs Aventon and Lectric.
              </p>
            </div>

            {/* Comparison Table */}
            <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
              Velotric Lineup Comparison
            </h2>
            <ComparisonTable
              source='velotric-ebike-hub'
              specLabels={['Motor', 'Top Speed', 'Range', 'Weight', 'Best For', 'Price']}
              products={[
                {
                  productKey: 'velotric-discover',
                  name: 'Velotric Discover 2',
                  badge: 'Best Overall',
                  rating: 4.6,
                  specs: {
                    Motor: '750W hub (85 Nm)',
                    'Top Speed': '28 mph',
                    Range: '55-65 mi',
                    Weight: '68 lbs',
                    'Best For': 'Commuter / gravel',
                    Price: '$1,499',
                  },
                },
                {
                  productKey: 'velotric-nomad',
                  name: 'Velotric Nomad 1 Plus',
                  badge: 'Fat Tire',
                  rating: 4.7,
                  specs: {
                    Motor: '750W hub (85 Nm)',
                    'Top Speed': '28 mph',
                    Range: '55 mi',
                    Weight: '75 lbs',
                    'Best For': 'All-terrain / fat tire',
                    Price: '$1,899',
                  },
                },
                {
                  productKey: 'velotric-t1',
                  name: 'Velotric T1 ST Plus',
                  badge: 'Road / Urban',
                  rating: 4.6,
                  specs: {
                    Motor: '350W hub (50 Nm)',
                    'Top Speed': '25 mph',
                    Range: '70 mi',
                    Weight: '48 lbs',
                    'Best For': 'Road commuting',
                    Price: '$1,599',
                  },
                },
                {
                  productKey: 'velotric-go',
                  name: 'Velotric Go',
                  badge: 'Best Value',
                  rating: 4.4,
                  specs: {
                    Motor: '500W hub (65 Nm)',
                    'Top Speed': '20 mph',
                    Range: '55 mi',
                    Weight: '70 lbs',
                    'Best For': 'Budget commuter',
                    Price: '$999',
                  },
                },
                {
                  productKey: 'velotric-summit',
                  name: 'Velotric Summit 1',
                  badge: 'Flagship',
                  rating: 4.8,
                  specs: {
                    Motor: '750W hub (90 Nm)',
                    'Top Speed': '28 mph',
                    Range: '75 mi',
                    Weight: '73 lbs',
                    'Best For': 'Premium performance',
                    Price: '$2,499',
                  },
                },
                {
                  productKey: 'velotric-breeze',
                  name: 'Velotric Breeze 1',
                  badge: 'Step-Through',
                  rating: 4.5,
                  specs: {
                    Motor: '500W hub (65 Nm)',
                    'Top Speed': '25 mph',
                    Range: '65 mi',
                    Weight: '62 lbs',
                    'Best For': 'Step-through commuting',
                    Price: '$1,599',
                  },
                },
              ]}
            />

            <div className='prose prose-slate max-w-none'>
              {/* Brand Story */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Is Velotric?
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Velotric was founded in 2021 in Pasadena, California by Adam Zhang and a team of former senior engineers from Lime and Trek Bicycles. The founding premise: DTC e-bikes had hit a plateau where pricing was good but engineering was mediocre, and there was room for a brand that led on product design and safety certifications. Four years later, that thesis has played out. Velotric has sold over 150,000 bikes and consistently ranks in the top tier of DTC e-bike reviewers.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The engineering-first philosophy shows up in small but meaningful ways:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>UL 2849 certified across the entire lineup</strong> — electrical safety standard required in NYC and increasingly in other cities</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>UL 2271 battery certification</strong> — thermal runaway resistance verified by third-party lab</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>IPX6 water rating</strong> — can withstand heavy rain and hose-down cleaning; most competitors are only IPX4-IPX5</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>SensorShift pedal assist</strong> — proprietary torque-plus-cadence hybrid system for smoother transitions</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>2-year comprehensive warranty</strong> on every model (matches Aventon, beats Lectric)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 text-rose-400 mt-1 shrink-0' />
                  <span><strong>Smaller dealer network</strong> than Aventon (~300 locations vs 1,500+)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 text-rose-400 mt-1 shrink-0' />
                  <span><strong>No cargo/family bike</strong> in current lineup</span>
                </li>
              </ul>

              {/* Discover 2 */}
              <h2 id='discover' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                1. Velotric Discover 2. The All-Around Best Pick
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $1,499 · <strong>Motor:</strong> 750W hub (85 Nm) · <strong>Range:</strong> 55-65 mi · <strong>Weight:</strong> 68 lbs · <strong>Tires:</strong> 27.5 x 2.4 inches (mixed-surface)
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Discover 2 is Velotric&apos;s best-seller and the bike we recommend to most buyers in the Velotric lineup. It sits exactly at the intersection of commuter and light-adventure, 27.5-inch hybrid tires that handle pavement and dirt roads equally, a 750W rear hub motor with 85 Nm of torque, a 691 Wh battery delivering 55-65 miles of real-world range, and SensorShift pedal assist.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Real-world: this is the bike that most Velotric owners praise in reviews. It&apos;s comfortable for an hour-long ride, fast enough to feel powerful (28 mph unlocked), and durable enough to be ridden in rain. Integrated headlight/taillight, rear rack (compatible with most pannier bags), and full fenders included. Hydraulic disc brakes with 180mm rotors front and rear.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At $1,499 it undercuts the Aventon Level 3 ($2,099) by $600 and delivers comparable performance. For buyers choosing between Aventon Level 3 and Velotric Discover 2, it&apos;s genuinely close, Aventon has a bigger dealer network, Velotric has sharper pricing.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='velotric-discover'
                  source='velotric-hub-discover'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* Nomad 1 Plus */}
              <h2 id='nomad' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                2. Velotric Nomad 1 Plus, The Fat-Tire All-Terrain
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $1,899 · <strong>Motor:</strong> 750W hub (85 Nm) · <strong>Range:</strong> 55 mi · <strong>Weight:</strong> 75 lbs · <strong>Tires:</strong> 26 x 4 inches
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Nomad 1 Plus is Velotric&apos;s fat-tire e-bike and the direct competitor to the Aventon Aventure 3 ($2,199) and Rad Power RadRover 6 Plus ($1,999). Same 26 x 4-inch fat tires, same 750W motor class, same target use case (adventure riding, packed snow, loose gravel, beach sand). Velotric wins on price at $1,899 and on water resistance (IPX6 vs IPX5 on the Rad).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Where Velotric earns the extra $400 over the cheaper Lectric XPedition 2.0: SensorShift pedal assist, UL 2849 safety certifications, 2-year warranty, and a noticeably more refined ride. Where it loses to the Aventure 3: Aventon has the bigger dealer network and a slightly more mature chassis platform. Both bikes are genuinely good. Price is the tiebreaker.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='velotric-nomad'
                  source='velotric-hub-nomad'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* T1 ST Plus */}
              <h2 id='t1' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                3. Velotric T1 ST Plus; The Lightweight Commuter
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $1,599 · <strong>Motor:</strong> 350W hub (50 Nm) · <strong>Range:</strong> 70 mi · <strong>Weight:</strong> 48 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The T1 ST Plus is Velotric&apos;s lightweight road/urban e-bike. A step-through 700c commuter with skinnier tires, a smaller 350W motor, a sleek integrated battery in the downtube, and a total weight of just 48 lbs. It&apos;s the closest thing to a regular bike in the Velotric lineup, and it&apos;s aimed at commuters who care more about ride feel than raw power.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 70-mile range claim holds up in real-world riding, the combination of a relatively efficient 350W motor, aerodynamic commuter tires, and a 500 Wh battery produces meaningfully better range than the heavier bikes in the lineup. Hydraulic disc brakes, integrated lights, fenders, and rear rack included.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Caveat: the 50 Nm of torque is on the lower end for California terrain. On 10%+ grades with a rider pushing 200 lbs, the motor works hard. If you live somewhere flat or gently rolling, the T1 ST Plus is the most premium-feeling Velotric for the money. If you live in hilly SF/Oakland, step up to the Discover 2 or Summit 1.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='velotric-t1'
                  source='velotric-hub-t1'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* Mid CTA */}
              <AffiliateCTABox
                productKey={PRIMARY_PRODUCT_KEY}
                badge='What UL 2849 Means'
                verdict='Every Velotric is UL 2849 certified, the safety standard that NYC now requires and that other cities are adopting. It is evidence that the battery and charging system was tested by a third-party lab for fire safety.'
                source='velotric-ebike-mid'
                variant='mid'
              />

              {/* Go */}
              <h2 id='go' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                4. Velotric Go, The Value Pick
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $999 · <strong>Motor:</strong> 500W hub (65 Nm) · <strong>Range:</strong> 55 mi · <strong>Weight:</strong> 70 lbs · <strong>Class:</strong> 2 (20 mph)
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Velotric Go is the brand&apos;s entry-level e-bike at $999, exactly matching the Lectric XP 3.0 price point and positioning as Velotric&apos;s answer to the budget-conscious first-time buyer. You get the same UL 2849 certification and IPX6 water rating as the more expensive bikes in the lineup, which is rare at this price.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The trade-offs vs the Discover 2: smaller motor (500W vs 750W), capped at Class 2 (20 mph), standard torque sensor instead of SensorShift, and shorter battery range (55 mi vs 65 mi). But for $500 less, you&apos;re getting a genuinely premium-feeling bike with safety certifications that most bikes at this price point don&apos;t have.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Vs the Lectric XP 3.0 at the same $999: the Go has a torque sensor (vs Lectric&apos;s cadence sensor), a 2-year warranty (vs Lectric&apos;s 1-year), and IPX6 water resistance. Lectric counters with the folding form factor and slightly better name recognition. For most buyers, the choice comes down to folding/non-folding; if folding matters, Lectric; if not, Velotric Go wins on spec.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='velotric-go'
                  source='velotric-hub-go'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* Summit 1 */}
              <h2 id='summit' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                5. Velotric Summit 1. The Flagship
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $2,499 · <strong>Motor:</strong> 750W hub (90 Nm) · <strong>Range:</strong> 75 mi · <strong>Weight:</strong> 73 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Summit 1 is Velotric&apos;s premium/performance flagship. 90 Nm of torque (highest in the lineup), 75-mile range, SensorShift pedal assist, 4-piston hydraulic brakes, a full-color TFT display, and integrated rear suspension. It&apos;s positioned against bikes like the Specialized Turbo Como 3.0 ($3,750) or Trek Verve+ 3 ($3,299). Premium bike-shop commuters at $1,000-$1,500 more.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 90 Nm torque rating is genuinely meaningful. On the steepest California grades (think: 15%+, which covers a lot of SF and Oakland neighborhoods), the Summit 1 pulls smoothly where 75-80 Nm bikes start to labor. The TFT display is bright enough to read in direct sunlight, the rear suspension takes the edge off rough pavement, and the 4-piston brakes have genuinely strong modulation.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For performance-focused riders with California hills, long commutes, or a bike-vs-car replacement strategy, the Summit 1 is the Velotric to buy. For everyone else, the Discover 2 at $1,000 less delivers 90% of the experience.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='velotric-summit'
                  source='velotric-hub-summit'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* Breeze 1 */}
              <h2 id='breeze' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                6. Velotric Breeze 1, The Accessible Step-Through
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $1,599 · <strong>Motor:</strong> 500W hub (65 Nm) · <strong>Range:</strong> 65 mi · <strong>Weight:</strong> 62 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Breeze 1 is Velotric&apos;s step-through commuter — low step-over height, upright riding position, comfort-focused saddle, swept-back handlebars. It&apos;s the bike for riders who want a traditional &quot;cruiser with a motor&quot; feel instead of a diamond-frame sport-commuter. 65-mile range, 500W motor with 65 Nm torque (enough for most California hills but not the steepest grades).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The step-through geometry makes this bike ideal for older riders, riders with limited flexibility, or anyone who wants to ride in skirts or business attire without awkward mounting. SensorShift pedal assist gives a natural riding feel. Integrated lights, rear rack, full fenders, and a kickstand are all included.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At $1,599, it&apos;s priced directly against the Aventon Pace 500.3 ($1,599). The Breeze has a bigger battery (+12% range), IPX6 water rating, and SensorShift; the Pace has a larger dealer network and slightly more refined ride feel. Either is a good pick for this use case.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='velotric-breeze'
                  source='velotric-hub-breeze'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* SensorShift */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                SensorShift Tech: Torque + Cadence Hybrid
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                SensorShift is Velotric&apos;s proprietary pedal-assist system and it deserves explanation. Most e-bikes use one of two sensor types:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Zap className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Cadence sensor:</strong> detects whether the pedals are moving, delivers binary on/off assist. Cheap, reliable, but feels unnatural.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Zap className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Torque sensor:</strong> measures how hard you&apos;re pushing, delivers proportional assist. Feels natural, but can introduce lag between input and motor response.</span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                SensorShift combines both signals and uses software to smooth the transitions. In practice, this means:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span>Starting from a stop feels immediate (cadence-like), but without the full motor surge</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span>Steady-state pedaling scales linearly with your effort (torque-like)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span>The lag between pedal input and motor response is reduced vs pure torque-sensor bikes</span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Whether you&apos;ll notice the SensorShift difference depends on how much you&apos;ve ridden torque-sensor bikes. New e-bike riders won&apos;t notice. Riders coming from a cheap cadence-sensor bike will love it. Riders coming from a premium torque-sensor bike (Aventon, Trek, Specialized) will find it competitive but not dramatically better.
              </p>

              {/* UL 2849 */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                UL 2849 Certification: Why It Matters
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                UL 2849 is the Underwriters Laboratories safety standard for e-bike electrical systems. It tests the entire electrical path, battery, battery management system, charger, motor controller, wiring, and connectors, for fire safety, thermal runaway resistance, overcharge protection, and fault tolerance.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Why this matters:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>NYC legal requirement</strong> — as of 2023, all e-bikes sold in NYC must be UL 2849 certified. Other cities are following.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Homeowners insurance</strong> — many policies now exclude fire damage from non-UL-certified e-bikes charging indoors.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Apartment buildings</strong> — a growing number of HOAs and landlords restrict non-certified e-bikes from common areas.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Peace of mind</strong> — battery fires in e-bikes are rare but real, and certified bikes have been specifically tested against them.</span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Velotric was one of the first DTC brands to commit to UL 2849 across the entire lineup. Aventon, Lectric, and Rad Power have all moved the same direction in 2024-2025. but Velotric got there first and made it a core part of their brand story.
              </p>

              {/* IPX6 */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                IPX6 Water Resistance: What It Actually Means
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The IP (Ingress Protection) rating tells you how waterproof an electronic device is. For e-bikes, the relevant numbers are:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Battery className='h-4 w-4 text-amber-400 mt-1 shrink-0' />
                  <span><strong>IPX4:</strong> splash-resistant from any direction. Fine for light drizzle.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Battery className='h-4 w-4 text-amber-400 mt-1 shrink-0' />
                  <span><strong>IPX5:</strong> low-pressure water jets. OK for moderate rain.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Battery className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>IPX6:</strong> powerful water jets from any direction. Rated for heavy rain, puddle splashes, and hose-down cleaning.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Battery className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>IPX7:</strong> temporary submersion to 1m. Overkill for an e-bike but some high-end mid-drives are rated here.</span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most DTC e-bikes ship with IPX4 or IPX5 ratings and warn buyers not to ride in heavy rain. Velotric&apos;s IPX6 rating across the lineup means you can commute in heavy PNW rain, spray the bike down with a hose at the car wash, or ride through a flooded street without worrying about the controller shorting out.
              </p>

              {/* FAQ */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is Velotric a good e-bike brand?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. Founded by ex-Lime/Trek engineers, UL 2849 certified across the line, IPX6 water rating, 2-year warranty. Consistently ranked at the top of DTC e-bike reviews.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What is SensorShift?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Proprietary torque+cadence hybrid pedal assist. Smooths the response between pedal input and motor output. Standard on Discover 2, T1 ST Plus, Summit 1, Breeze 1.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    UL certified?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. UL 2849 for the electrical system and UL 2271 for the battery pack on every current model.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    IPX6 water rating, what does that mean?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    You can ride in heavy rain, splash through puddles, and hose-wash the bike without fear of damaging the controller. Most competitors only rate IPX4-IPX5.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Warranty length?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    2-year comprehensive. Matches Aventon, beats Lectric (1-year).
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Velotric vs Aventon?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Close competitors. Velotric for engineering (IPX6, UL, SensorShift) and pricing. Aventon for dealer network, app, and broader lineup (including cargo).
                  </p>
                </div>
              </div>

              {/* Bottom Line */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For most Velotric buyers, the <strong>Discover 2</strong> at $1,499 is the right pick. 750W motor, 85 Nm torque, 55-65 mile range, SensorShift pedal assist, and all the safety certifications in one bike. Upgrade to the <strong>Summit 1</strong> ($2,499) if you want the flagship performance; step down to the <strong>Go</strong> ($999) for the best sub-$1,000 DTC commuter. The <strong>Nomad 1 Plus</strong> ($1,899) is the fat-tire pick and undercuts the Aventon Aventure 3 by $300.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Where Velotric beats Aventon: engineering certifications (UL 2849 came first, IPX6 beats IPX5), SensorShift pedal assist for some riders, and usually sharper pricing. Where Aventon beats Velotric: 1,500+ dealer network vs ~300, more polished app, broader lineup including cargo bikes. If engineering-first appeals to you, Velotric. If ecosystem-first appeals to you, Aventon. Both are dramatically better than buying a cheap unbranded e-bike and hoping for the best.
              </p>
            </div>

            {/* Final CTA */}
            <AffiliateCTABox
              productKey={PRIMARY_PRODUCT_KEY}
              badge='Final Verdict'
              verdict='Velotric is the engineering-led premium DTC e-bike brand of 2026. UL 2849 certified, IPX6 water-rated, 2-year warranty, sharp pricing. Browse the full lineup.'
              source='velotric-ebike-final'
              variant='final'
            />

            {/* Explore more */}
            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Compare premium DTC brands
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See our full reviews of Aventon, Rad Power, and Lectric.
              </p>
              <div className='flex flex-wrap gap-3 justify-center'>
                <Link
                  href='/reviews/aventon-ebike'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Aventon
                  <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/reviews/rad-power-bikes'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Rad Power
                  <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/reviews/lectric-ebike'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Lectric
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Reviews
              </Link>
              <Link
                href='/blog'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Read Our Blog
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRIMARY_PRODUCT_KEY} source='velotric-ebike-sticky' />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
