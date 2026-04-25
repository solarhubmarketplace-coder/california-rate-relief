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

const PRIMARY_PRODUCT_KEY = 'rad-power-bikes';

export const metadata: Metadata = {
  title:
    'Rad Power Bikes Review 2026: RadRover, RadRunner, RadCity Compared',
  description:
    'Honest Rad Power Bikes review covering the 2026 lineup: RadRover 6 Plus, RadRunner 3 Plus, RadCity 5 Plus, RadExpand 5, RadWagon 5, and RadTrike. Seattle-based DTC brand with 650K+ bikes sold, 30-day test ride, and utility-focused lineup.',
  alternates: {
    canonical: '/reviews/rad-power-bikes',
  },
  openGraph: {
    title: 'Rad Power Bikes Review 2026: The Full Lineup Compared',
    description:
      'Every Rad Power bike reviewed, RadRover 6 Plus, RadRunner 3 Plus, RadCity 5 Plus, RadExpand 5, RadWagon 5, RadTrike. Which Rad to buy and why.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Rad Power Bikes Lineup 2026',
  description:
    'Complete comparison of the 2026 Rad Power Bikes lineup: RadRover 6 Plus, RadRunner 3 Plus, RadCity 5 Plus, RadExpand 5, RadWagon 5, and RadTrike.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'RadRover 6 Plus',
      url: 'https://ratereliefca.com/reviews/rad-power-bikes#radrover',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'RadRunner 3 Plus',
      url: 'https://ratereliefca.com/reviews/rad-power-bikes#radrunner',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'RadCity 5 Plus',
      url: 'https://ratereliefca.com/reviews/rad-power-bikes#radcity',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'RadExpand 5',
      url: 'https://ratereliefca.com/reviews/rad-power-bikes#radexpand',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'RadWagon 5',
      url: 'https://ratereliefca.com/reviews/rad-power-bikes#radwagon',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'RadTrike',
      url: 'https://ratereliefca.com/reviews/rad-power-bikes#radtrike',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are Rad Power Bikes any good?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Rad Power Bikes is the largest e-bike brand in North America with over 650,000 bikes sold since 2007. The RadRover, RadRunner, and RadCity models consistently rank among the top-selling e-bikes in the U.S. Build quality is above-average for the price point, the dealer network is expanding, and the 30-day test-ride policy de-risks the purchase. The trade-off is weight (most Rads are 70-80+ lbs) and a shift away from throttle in Class 1/2-only regions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are Rad Power Bikes made?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rad Power Bikes are designed in Seattle, Washington, where the company is headquartered. Final assembly happens in China, with some components sourced globally. Rad has a U.S. Warehouse network for parts distribution and operates physical retail locations (Rad Experience Centers) in several major U.S. Cities where you can test-ride before buying online.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Rad Power Bike is best for hills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The RadRover 6 Plus and RadCity 5 Plus both have 750W rear hub motors rated for 80+ Nm of torque — enough to pull a 220-pound rider up 15% grades without downshifting to granny gear. For serious hills with cargo, the RadWagon 5 has the same motor plus a step-through frame making starts on steep grades easier. Mid-drive bikes from other brands climb better, but for the price, any 750W Rad handles California hills well.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Rad Power Bikes have a throttle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every Rad Power Bike ships with a throttle that works up to 20 mph (Class 2). Some 2026 models and Canadian spec ship as Class 1 (pedal-assist only) to comply with local laws, but the default U.S. configuration includes throttle. The throttle is a half-grip twist style on most models.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Rad Power Bikes warranty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rad Power Bikes carries a 1-year comprehensive warranty plus 2 additional years on the frame (3 years total frame warranty). The battery is warrantied for 1 year. Rad also offers a 30-day test-ride window during which you can return the bike for a full refund if it isn\'t a fit. This is the most buyer-friendly return policy in the DTC e-bike space.',
      },
    },
    {
      '@type': 'Question',
      name: 'How heavy are Rad Power Bikes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Rad Power Bikes weigh 65-80 lbs. The RadRover 6 Plus is 74 lbs, the RadRunner 3 Plus is 73 lbs, the RadCity 5 Plus is 65 lbs, and the RadWagon 5 is 78 lbs (before cargo). The RadExpand 5 folding bike is 62 lbs. For reference, an equivalent acoustic bike typically weighs 25-35 lbs. Weight is the single most common complaint about Rad bikes — they\'re not bikes you easily carry up stairs.',
      },
    },
  ],
};

export default function RadPowerBikesHub() {
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
              <span className='text-foreground font-medium'>
                Rad Power Bikes
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Brand Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Rad Power Bikes Review 2026: RadRover, RadRunner, RadCity Compared
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

            <AffiliateDisclosure compact />

            {/* Above-the-fold brand CTA */}
            <AffiliateCTABox
              productKey={PRIMARY_PRODUCT_KEY}
              badge='Largest DTC eBike Brand in NA'
              rating={4.5}
              verdict='Rad Power Bikes is the original direct-to-consumer e-bike brand — 650,000+ bikes sold since 2007, a 30-day test ride policy that no competitor matches, and a lineup focused on actual utility (cargo, commuting, fat tire) rather than aesthetics.'
              pros={[
                'Utility-focused riders who haul or commute',
                'Buyers who want a 30-day test ride',
                'California homeowners replacing a second car',
              ]}
              cons={['Apartment dwellers (most Rads are 70+ lbs)', 'Riders who want mid-drive performance']}
              source='rad-power-bikes-hub'
              variant='top'
            />

            {/* Intro */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Rad Power Bikes invented the direct-to-consumer e-bike category in North America. Founded in Seattle in 2007 by Mike Radenbaugh — who rebuilt a stranded e-bike on the side of a road as a 15-year-old; the company has shipped more than 650,000 bikes and captured the largest share of the U.S. E-bike market by volume. If you know one e-bike brand name, it&apos;s probably Rad.
              </p>
              <p className='text-lg text-foreground/80 leading-relaxed mb-8'>
                The 2026 lineup is deeper than it&apos;s ever been: a fat-tire rugged commuter (RadRover 6 Plus), a utility runabout (RadRunner 3 Plus), a step-through city commuter (RadCity 5 Plus), a folding apartment bike (RadExpand 5), a family cargo hauler (RadWagon 5), and a three-wheel stability bike (RadTrike). This guide walks through the full lineup, who each bike is for, and where Rad genuinely beats the competition vs where it&apos;s been caught up.
              </p>
            </div>

            {/* Comparison Table */}
            <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
              Rad Power Bikes Lineup Comparison
            </h2>
            <ComparisonTable
              source='rad-power-bikes-hub'
              specLabels={['Motor', 'Top Speed', 'Range', 'Weight', 'Best For', 'Price']}
              products={[
                {
                  productKey: 'rad-power-radrover-6-plus',
                  name: 'RadRover 6 Plus',
                  badge: 'Most Popular',
                  rating: 4.6,
                  specs: {
                    Motor: '750W hub (80 Nm)',
                    'Top Speed': '20 mph',
                    Range: '25-45 mi',
                    Weight: '74 lbs',
                    'Best For': 'Fat tire / all-terrain',
                    Price: '$1,999',
                  },
                },
                {
                  productKey: 'rad-power-radrunner-3-plus',
                  name: 'RadRunner 3 Plus',
                  badge: 'Utility Pick',
                  rating: 4.5,
                  specs: {
                    Motor: '750W hub',
                    'Top Speed': '20 mph',
                    Range: '25-45 mi',
                    Weight: '73 lbs',
                    'Best For': 'Utility / passenger',
                    Price: '$2,299',
                  },
                },
                {
                  productKey: 'rad-power-radcity-5-plus',
                  name: 'RadCity 5 Plus',
                  badge: 'Best Commuter',
                  rating: 4.6,
                  specs: {
                    Motor: '750W hub',
                    'Top Speed': '20 mph',
                    Range: '25-50 mi',
                    Weight: '65 lbs',
                    'Best For': 'Daily commuting',
                    Price: '$1,999',
                  },
                },
                {
                  productKey: 'rad-power-radexpand-5',
                  name: 'RadExpand 5',
                  badge: 'Folding Pick',
                  rating: 4.4,
                  specs: {
                    Motor: '750W hub',
                    'Top Speed': '20 mph',
                    Range: '25-45 mi',
                    Weight: '62 lbs',
                    'Best For': 'Apartments / RVs',
                    Price: '$1,499',
                  },
                },
                {
                  productKey: 'rad-power-radwagon-5',
                  name: 'RadWagon 5',
                  badge: 'Family Hauler',
                  rating: 4.5,
                  specs: {
                    Motor: '750W hub',
                    'Top Speed': '20 mph',
                    Range: '25-55 mi',
                    Weight: '78 lbs',
                    'Best For': 'Cargo / kids',
                    Price: '$2,299',
                  },
                },
                {
                  productKey: 'rad-power-radtrike',
                  name: 'RadTrike',
                  badge: 'Stability Pick',
                  rating: 4.4,
                  specs: {
                    Motor: '750W hub',
                    'Top Speed': '14 mph',
                    Range: '25-40 mi',
                    Weight: '82 lbs',
                    'Best For': 'Mobility / balance',
                    Price: '$2,499',
                  },
                },
              ]}
            />

            <div className='prose prose-slate max-w-none'>
              {/* Brand Story */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Rad Power Brand Story: The Company That Started the Movement
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rad Power Bikes was founded in 2007 in rural Northern California by Mike Radenbaugh. The company moved to Seattle in 2015 and scaled rapidly during the 2020-2022 e-bike boom, raising $150M in venture capital and becoming the largest DTC e-bike brand in North America. In 2022-2023, Rad downsized from a peak of 600+ employees to focus on profitability and shifted strategy toward supporting the existing fleet rather than launching new frames every quarter.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                What this means for buyers in 2026:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Mature parts availability</strong> — replacement batteries, motors, controllers, and accessories are all readily available for every current and recent-past model</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Physical Rad Experience Centers</strong> in San Francisco, Seattle, San Diego, Los Angeles, Denver, and other cities where you can test-ride</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Expanding dealer network</strong> — local bike shops that service Rad bikes are easier to find than for newer DTC brands</span>
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 text-rose-400 mt-1 shrink-0' />
                  <span><strong>Slower innovation cycle</strong> — don&apos;t expect frame redesigns every year; Rad is iterating on its proven platform instead</span>
                </li>
              </ul>

              {/* RadRover 6 Plus */}
              <h2 id='radrover' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                1. RadRover 6 Plus, The Fat-Tire Flagship
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $1,999 · <strong>Motor:</strong> 750W geared hub (80 Nm) · <strong>Range:</strong> 25-45 mi · <strong>Weight:</strong> 74 lbs · <strong>Tires:</strong> 26 x 4 inches
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The RadRover is Rad&apos;s best-selling bike and the one most people think of when they say &quot;a Rad.&quot; Version 6 Plus is the current generation, released in 2022 and still on sale in 2026 with minor refinements. It&apos;s built around a massive 26 x 4-inch fat tire that floats over everything. pavement, dirt roads, packed snow, loose gravel, wooden docks; and a 750W geared hub motor rated for 80 Nm of torque.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Real-world performance: Comfortable cruising at 18-20 mph on pavement, confidence-inspiring grip on loose surfaces, and genuine off-road capability on fire roads and easier trails. The torque is enough to pull a 220-pound rider plus a loaded cargo rack up 12-15% grades without the motor getting hot. The 672 Wh semi-integrated battery delivers 25-30 miles at aggressive pace or 40-45 miles at easy cruise.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The weaknesses: fat tires create serious rolling resistance on smooth pavement (you&apos;re fighting about 15% more drag than a 2-inch commuter tire), the bike is 74 lbs which is tough to hoist on a rack, and the cadence-sensor pedal assist feels less natural than the torque-sensor bikes from Aventon or Trek. For the price, it&apos;s still the best fat-tire e-bike in the U.S. market by a wide margin.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='rad-power-radrover-6-plus'
                  source='rad-power-hub-radrover'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* RadRunner 3 Plus */}
              <h2 id='radrunner' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                2. RadRunner 3 Plus, The Swiss Army Knife
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $2,299 · <strong>Motor:</strong> 750W geared hub · <strong>Range:</strong> 25-45 mi · <strong>Weight:</strong> 73 lbs · <strong>Cargo capacity:</strong> 350 lbs total
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The RadRunner is one of the most distinctive-looking bikes on the market — a moped-style silhouette with 20 x 3.3-inch tires, a long integrated rear rack that doubles as a passenger seat, and a step-through frame that makes mounting the bike easy. It&apos;s Rad&apos;s most configurable model, with modular accessories for a child seat, passenger seat, large cargo baskets, and running boards.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Real-world use: this is the bike for running errands, hauling kids to school, picking up groceries without a car, and short-distance delivery work. The rear rack supports a full adult passenger on the &quot;Passenger Package&quot; accessory. Two kids in 48-52 lb bike seats fit comfortably with room for groceries on top. For a California family that wants to reduce second-car usage, the RadRunner is the closest thing to a car replacement in the Rad lineup outside the RadWagon.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='rad-power-radrunner-3-plus'
                  source='rad-power-hub-radrunner'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* RadCity 5 Plus */}
              <h2 id='radcity' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                3. RadCity 5 Plus — The Daily Commuter
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $1,999 · <strong>Motor:</strong> 750W geared hub · <strong>Range:</strong> 25-50 mi · <strong>Weight:</strong> 65 lbs · <strong>Tires:</strong> 27.5 x 2.4 inches
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The RadCity is what most traditional e-bike shoppers are actually looking for: a step-through commuter with 27.5-inch hybrid tires, integrated lights, full fenders, a rear rack, and a torque-sensor pedal assist that feels closer to a Trek or Specialized than to the cadence-sensor Rads below it. At 65 lbs, it&apos;s the lightest bike in the standard Rad lineup.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The torque sensor is the story here. Unlike the RadRover or RadRunner, the RadCity 5 Plus measures how hard you&apos;re pushing on the pedals and delivers proportional assistance. The result is a bike that feels more like pedaling a regular bicycle with a tailwind, you&apos;re clearly contributing, and the motor amplifies your effort linearly instead of kicking in with a binary on/off sensation.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a daily-use commuter who wants something that rides like a bike but goes further and faster without sweating, the RadCity 5 Plus is the right Rad to buy.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='rad-power-radcity-5-plus'
                  source='rad-power-hub-radcity'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* Mid CTA */}
              <AffiliateCTABox
                productKey={PRIMARY_PRODUCT_KEY}
                badge='Why Rad Wins on Utility'
                verdict='If you need a bike that hauls cargo, carries a passenger, or gets you to work reliably through all conditions, the Rad lineup is still the deepest utility e-bike catalog in North America.'
                source='rad-power-bikes-mid'
                variant='mid'
              />

              {/* RadExpand 5 */}
              <h2 id='radexpand' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                4. RadExpand 5, The Folding Apartment Bike
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $1,499 · <strong>Motor:</strong> 750W geared hub · <strong>Range:</strong> 25-45 mi · <strong>Weight:</strong> 62 lbs · <strong>Folded size:</strong> 41 x 21 x 28 inches
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The RadExpand 5 is Rad&apos;s answer to the Lectric XP 3.0 — a folding fat-tire e-bike at $1,499 (vs $999 for the Lectric). At 62 lbs, it&apos;s lighter than the XP 3.0 (65 lbs) but $500 more expensive. What you get for the premium: the Rad support network, 30-day test ride, and slightly better build quality in the frame welds and cable routing.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For apartment dwellers who want to store the bike indoors, RV owners who need to bring a bike along on trips, or anyone who has to carry the bike through tight spaces, the RadExpand 5 is a capable pick. If the $500 price difference matters, the Lectric XP 3.0 wins on value; if brand support and test-rideability matter more, the RadExpand wins on peace of mind.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='rad-power-radexpand-5'
                  source='rad-power-hub-radexpand'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* RadWagon 5 */}
              <h2 id='radwagon' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                5. RadWagon 5 — The Family Cargo Bike
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $2,299 · <strong>Motor:</strong> 750W geared hub · <strong>Range:</strong> 25-55 mi · <strong>Weight:</strong> 78 lbs · <strong>Total capacity:</strong> 450 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The RadWagon 5 is Rad&apos;s flagship cargo bike, a longtail design with a 70-inch wheelbase, 24-inch wheels (for a lower center of gravity), a massive rear rack rated for 120 lbs of cargo, and dual-kickstand parking. It fits two child seats side-by-side, includes running boards that double as footrests for kids, and has safety features like wheel skirts to keep small feet out of the spokes.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Real-world: families using the RadWagon 5 as a second-car replacement report typical errand loops of 15-25 miles round trip (school drop-off + grocery run + pickup) with the bike running entirely on Class 2 throttle when needed. The 672 Wh battery delivers that comfortably with range to spare. For longer trips, the dual-battery upgrade ($500) pushes range past 90 miles.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The weaknesses: at 78 lbs before cargo, the RadWagon is heavy enough that you really feel it when the battery dies mid-ride. The rear rack is tall, which raises the center of gravity when loaded. Competitors like the Tern GSD ride more precisely but cost $3,000 more.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='rad-power-radwagon-5'
                  source='rad-power-hub-radwagon'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* RadTrike */}
              <h2 id='radtrike' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                6. RadTrike. The Stability Pick
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $2,499 · <strong>Motor:</strong> 750W geared hub · <strong>Range:</strong> 25-40 mi · <strong>Weight:</strong> 82 lbs · <strong>Top speed:</strong> 14 mph
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The RadTrike is Rad&apos;s three-wheel e-bike, designed for riders who have balance concerns, mobility limitations, or just want the stability of a tricycle for hauling cargo. The front-wheel-drive (single front, two rear) layout is a true tricycle with a differential that allows the rear wheels to rotate at different speeds during turns — no weird tipping behavior.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The large rear cargo basket (20 x 28 inches) is the standout feature. This is the bike for farmer&apos;s market runs, mobility-limited riders who want to keep riding, and seniors who have given up on two-wheel bikes but still want outdoor activity. Top speed is limited to 14 mph for safety. Turn radius is larger than a traditional bike, but not hostile.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='rad-power-radtrike'
                  source='rad-power-hub-radtrike'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* Warranty */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Warranty Policy: Rad&apos;s Standout Advantage
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rad Power Bikes offers a 1-year comprehensive warranty covering the motor, battery, controller, display, and components, plus an additional 2 years on the frame (3 years total frame warranty). The battery warranty is 1 year regardless of charge cycles — shorter than Lectric&apos;s 800-cycle spec but simpler to understand and make claims against.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The standout feature is the <strong>30-day test ride</strong>. Buy a Rad, ride it for up to 30 days, and if it isn&apos;t the right fit you can return it for a full refund (you pay return shipping, roughly $100-$150). No other major DTC e-bike brand offers a 30-day return window, most are 14 days or require the bike be unridden. This is the single biggest factor that de-risks a Rad purchase for first-time e-bike buyers.
              </p>

              {/* 30-day test ride */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                The 30-Day Test Ride
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s how the test ride works: order the bike online, receive it in 5-10 business days. Ride it as much as you want for 30 days. If you decide to return it, call Rad customer service to initiate an RMA. They send return shipping instructions and you pay shipping back to their warehouse (typically $100-$150). Once the bike arrives, Rad processes a full refund minus the return shipping.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                You can return the bike for any reason — it doesn&apos;t fit you, the ride is harsher than you expected, you realized you wanted a step-through instead of a diamond frame, you moved and don&apos;t need it anymore. No questions asked. This is how Rad built its reputation; it&apos;s the reason first-time e-bike buyers trust the brand.
              </p>

              {/* FAQ */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Are Rad Power Bikes any good?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes; largest DTC e-bike brand in North America with 650K+ bikes sold. Good build quality, mature parts network, best return policy in the industry. Trade-offs are weight (70+ lbs on most models) and cadence-sensor feel on cheaper bikes.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Where are Rad Power Bikes made?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Designed in Seattle. Final assembly in China. Physical retail locations (Rad Experience Centers) in major U.S. Cities.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Which Rad is best for hills?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    RadRover 6 Plus and RadCity 5 Plus both have 80 Nm torque — enough for 15% California grades with a rider. RadWagon 5 uses the same motor plus a step-through frame for easy hillside starts.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Do Rad Power Bikes have a throttle?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes, every U.S. Rad ships as Class 2 with throttle up to 20 mph. Canadian and some state-spec bikes ship as Class 1 (pedal assist only) by default.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Warranty length?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    1 year comprehensive + 2 more on the frame (3 years frame total). 1-year battery. 30-day full-refund test ride window.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How heavy are they?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    62-82 lbs depending on model. RadExpand is lightest at 62 lbs; RadTrike is heaviest at 82 lbs. All are meaningfully heavier than traditional bicycles.
                  </p>
                </div>
              </div>

              {/* Bottom Line */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rad Power Bikes is still the right answer for most buyers who want a utility-focused e-bike. The <strong>RadRover 6 Plus</strong> at $1,999 is the best all-around Rad for fat-tire flexibility. The <strong>RadCity 5 Plus</strong> at $1,999 is the best daily commuter with its torque sensor. The <strong>RadWagon 5</strong> at $2,299 is the best family cargo hauler in the DTC space. And the <strong>30-day test ride</strong> means you can actually find out if the bike works for you without betting $2,000 sight-unseen.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If price is the biggest factor, Lectric undercuts every Rad model by $200-$700. If premium feel matters most, Aventon delivers more refined torque-sensor rides. But for the combination of utility lineup, brand support, and return policy, Rad Power Bikes still wins the DTC segment in 2026.
              </p>
            </div>

            {/* Final CTA */}
            <AffiliateCTABox
              productKey={PRIMARY_PRODUCT_KEY}
              badge='Final Verdict'
              verdict='Rad Power Bikes delivers the deepest utility e-bike lineup in North America with the best return policy in the industry. Browse the full lineup.'
              source='rad-power-bikes-final'
              variant='final'
            />

            {/* Explore more */}
            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing brands?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See our full reviews of Lectric and Aventon e-bikes to compare with Rad.
              </p>
              <div className='flex flex-wrap gap-3 justify-center'>
                <Link
                  href='/reviews/lectric-ebike'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Lectric eBikes
                  <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/reviews/aventon-ebike'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Aventon
                  <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/reviews/best-electric-bikes'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  All E-Bikes
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
      <StickyMobileCTA productKey={PRIMARY_PRODUCT_KEY} source='rad-power-bikes-sticky' />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
