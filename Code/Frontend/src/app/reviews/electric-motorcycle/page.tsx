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
  Check,
  X,
  Battery,
  ChevronRight,
} from 'lucide-react';

// Primary affiliate CTA for this hub, category top pick
const PRIMARY_PRODUCT_KEY = 'zero-srf';

export const metadata: Metadata = {
  title:
    'Best Electric Motorcycles 2026: Street, Dual-Sport, and Off-Road Compared',
  description:
    'The definitive 2026 electric motorcycle buyer\'s guide. Zero SR/F, Harley-Davidson LiveWire ONE, Energica Ego+, Kawasaki Ninja e-1, and CAKE Kalk OR compared, range, charging, M1 licensing, California HOV lane access, and the $1,500-$2,000 CVAP rebate explained.',
  alternates: {
    canonical: '/reviews/electric-motorcycle',
  },
  openGraph: {
    title: 'Best Electric Motorcycles 2026: The Complete Buyer\'s Guide',
    description:
      'Zero SR/F vs Harley LiveWire ONE vs Energica Ego+ vs Kawasaki Ninja e-1 vs CAKE Kalk OR. Street, dual-sport, and off-road compared, with California rebate and HOV details.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Electric Motorcycles 2026',
  description:
    'Ranked list of the best electric motorcycles available in 2026, covering street, dual-sport, entry-level, and off-road options.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Zero SR/F',
      url: 'https://ratereliefca.com/reviews/electric-motorcycle#zero-srf',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Harley-Davidson LiveWire ONE',
      url: 'https://ratereliefca.com/reviews/electric-motorcycle#livewire',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Energica Ego+',
      url: 'https://ratereliefca.com/reviews/electric-motorcycle#energica',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Kawasaki Ninja e-1',
      url: 'https://ratereliefca.com/reviews/electric-motorcycle#ninja-e1',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'CAKE Kalk OR',
      url: 'https://ratereliefca.com/reviews/electric-motorcycle#cake-kalk',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you need a motorcycle license to ride an electric motorcycle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for any street-legal electric motorcycle with a top speed above 30 mph, you need a motorcycle endorsement. In California that is the M1 license. The M1 covers all two-wheeled motorcycles regardless of engine type. Smaller 28 mph-capped e-mopeds (Class 2 mopeds) don\'t require an M1, but every bike on this list including the 55 mph Kawasaki Ninja e-1 does require a motorcycle license.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far can an electric motorcycle go on a single charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Range depends heavily on the model and riding style. The Zero SR/F gets about 200 miles city / 100 miles highway. The Harley-Davidson LiveWire ONE gets 146 miles city / 95 miles highway. The Energica Ego+ (the largest battery on this list) gets about 261 miles city / 143 miles highway. Entry-level bikes like the Kawasaki Ninja e-1 are limited to about 40 miles total. Off-road bikes like the CAKE Kalk OR run roughly 3 hours of trail riding per charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an electric motorcycle use the California HOV / carpool lane solo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Motorcycles (electric or gas) can already use HOV lanes in California regardless of occupancy, this is a longstanding rule that has nothing to do with the CAV sticker program. What electric motorcycles don\'t qualify for (as of 2026) is the Clean Air Vehicle (CAV) decal program, which was designed for four-wheeled EVs and PHEVs. The practical result is the same: ride your electric motorcycle solo in the HOV lane anywhere in California, no decal needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a California rebate for electric motorcycles in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. California\'s Clean Vehicle Assistance Program (CVAP) and the CARB-funded E-Motorcycle Rebate cover eligible battery-electric motorcycles with rebates of $1,500 to $2,000 depending on income level and the specific program funding available. Qualifying bikes must have a top speed of at least 45 mph and appear on the state-maintained eligible vehicle list. Most Zero, LiveWire, and Energica models qualify; entry-level bikes like the Kawasaki Ninja e-1 do not meet the 45 mph threshold for all program tiers. Funding runs out periodically; check current availability before purchasing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to "fuel" an electric motorcycle vs gas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At California\'s 2026 average residential electricity rate of roughly 32 cents per kWh, a full charge of a 14.4 kWh Zero SR/F costs about $4.60 and covers 100-200 miles, roughly 2-5 cents per mile. A gas motorcycle at 45 mpg on $5.00 gas costs about 11 cents per mile. Over 10,000 miles per year, the electric bike saves roughly $600-$900 in fuel. The savings grow if you charge on off-peak TOU rates (around 24 cents per kWh) or from rooftop solar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are electric motorcycles reliable? What about maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Electric motorcycles have dramatically fewer moving parts than gas bikes, no engine oil, no spark plugs, no valves, no cam chain, no clutch, no gearbox in most cases, and no coolant system on air-cooled models. The primary maintenance items are: tires (same as gas), brake pads, brake fluid, chain or belt tension, and battery-pack checks. Zero and LiveWire publish maintenance intervals of 1 year / annual check, not 3,000-mile oil changes. The main reliability concern is battery degradation after 100,000 miles, and battery replacements run $3,500-$7,000 depending on the bike.',
      },
    },
  ],
};

export default function ElectricMotorcycleHub() {
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
                Best Electric Motorcycles
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Buyer&apos;s Guide
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Best Electric Motorcycles 2026: Street, Dual-Sport, and Off-Road Compared
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>19 min read</span>
                </div>
              </div>
            </header>

            {/* Affiliate disclosure */}
            <AffiliateDisclosure compact />

            {/* Above-the-fold primary CTA */}
            <AffiliateCTABox
              productKey={PRIMARY_PRODUCT_KEY}
              badge='Our Top Pick'
              rating={4.7}
              verdict='The Zero SR/F at $21,995 is the best all-around electric motorcycle in 2026: 110 horsepower, 200-mile city range, premium Showa suspension, and a full-color TFT dash with Bluetooth-enabled Cypher III operating system. It is the bike that finally makes electric feel like a no-compromise alternative to a premium naked.'
              pros={[
                'Daily commuting and weekend canyon riding',
                'Riders transitioning from a liter-class naked',
                'California CVAP rebate eligibility ($2,000 off)',
              ]}
              cons={['Long interstate touring above 200 miles', 'Buyers who want a traditional clutch-and-gear feel']}
              source='electric-motorcycle-hub'
              variant='top'
            />

            {/* Intro */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Electric motorcycles have crossed a real threshold in 2026. A Zero SR/F will out-accelerate a Ducati Monster from 0 to 60, the Harley-Davidson LiveWire has refined itself into a genuinely premium product, and California riders now have a proper rebate stack — up to $2,000 through CARB&apos;s CVAP program — that can meaningfully offset the sticker price. What was a niche category five years ago is now a real alternative for daily commuters, canyon riders, and track-day enthusiasts.
              </p>
              <p className='text-lg text-foreground/80 leading-relaxed mb-8'>
                This guide covers the five electric motorcycles that matter most in 2026. From the $7,999 Kawasaki Ninja e-1 that gets new riders into the category, to the $24,000 Energica Ego+ superbike with 261 miles of city range. We break down the trade-offs between range, price, riding style, and California-specific perks so you can pick the right bike the first time.
              </p>
            </div>

            {/* Comparison Table */}
            <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
              Electric Motorcycle Comparison: Specs at a Glance
            </h2>
            <ComparisonTable
              source='electric-motorcycle-hub'
              specLabels={['Peak Power', 'Top Speed', 'Range (city)', 'Weight', 'Best For', 'Price']}
              products={[
                {
                  productKey: 'zero-srf',
                  name: 'Zero SR/F',
                  badge: 'Best Overall',
                  rating: 4.7,
                  specs: {
                    'Peak Power': '110 hp',
                    'Top Speed': '124 mph',
                    'Range (city)': '200 mi',
                    Weight: '498 lbs',
                    'Best For': 'Street / canyon',
                    Price: '$21,995',
                  },
                },
                {
                  productKey: 'harley-livewire-one',
                  name: 'Harley-Davidson LiveWire ONE',
                  badge: 'Best Premium',
                  rating: 4.6,
                  specs: {
                    'Peak Power': '105 hp',
                    'Top Speed': '110 mph',
                    'Range (city)': '146 mi',
                    Weight: '562 lbs',
                    'Best For': 'Refined daily',
                    Price: '$22,799',
                  },
                },
                {
                  productKey: 'energica-ego-plus',
                  name: 'Energica Ego+',
                  badge: 'Best Performance',
                  rating: 4.6,
                  specs: {
                    'Peak Power': '169 hp',
                    'Top Speed': '150 mph',
                    'Range (city)': '261 mi',
                    Weight: '571 lbs',
                    'Best For': 'Sport / track',
                    Price: '$24,000',
                  },
                },
                {
                  productKey: 'kawasaki-ninja-e1',
                  name: 'Kawasaki Ninja e-1',
                  badge: 'Best Entry Level',
                  rating: 4.3,
                  specs: {
                    'Peak Power': '11 hp',
                    'Top Speed': '55 mph',
                    'Range (city)': '40 mi',
                    Weight: '309 lbs',
                    'Best For': 'Urban / new riders',
                    Price: '$7,999',
                  },
                },
                {
                  productKey: 'cake-kalk-or',
                  name: 'CAKE Kalk OR',
                  badge: 'Best Off-Road',
                  rating: 4.5,
                  specs: {
                    'Peak Power': '16 kW',
                    'Top Speed': '56 mph',
                    'Range (city)': '3 hr trail',
                    Weight: '174 lbs',
                    'Best For': 'Trail / enduro',
                    Price: '$13,500',
                  },
                },
              ]}
            />

            <div className='prose prose-slate max-w-none'>
              {/* Why Electric */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why Electric Motorcycles in 2026?
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The pitch for an electric motorcycle in 2026 is not just environmental. It&apos;s performance, cost of ownership, and riding experience. An electric motor produces maximum torque the instant the throttle cracks, there is no rev-up, no powerband, no waiting for the cams to come in. The Zero SR/F will lift its front wheel out of a corner in ways that would require three gear changes on a gas liter bike.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The other half of the pitch is silence. An electric motorcycle doesn&apos;t announce itself at 6 AM when you leave for a canyon ride, doesn&apos;t rattle your fillings on the interstate, and doesn&apos;t trigger noise complaints in Los Angeles or San Francisco neighborhoods that are increasingly hostile to loud bikes.
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Instant torque</strong> — no clutch, no gearbox, no powerband to manage.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Low cost per mile</strong> — roughly 2-5 cents vs 11-15 cents for a gas bike in California.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Minimal maintenance</strong> — no oil changes, no valve adjustments, no cam chains. Tires, pads, and brake fluid.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>California HOV access</strong> — motorcycles ride the carpool lane solo as a longstanding rule.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 text-rose-400 mt-1 shrink-0' />
                  <span><strong>Range anxiety</strong> — 95-200 miles per charge on most bikes, then a 1-4 hour recharge.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 text-rose-400 mt-1 shrink-0' />
                  <span><strong>Higher upfront price</strong> — a Zero SR/F costs roughly $7,000-$9,000 more than a comparable gas naked.</span>
                </li>
              </ul>

              {/* Range and Charging */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Range and Charging: What&apos;s Actually Realistic
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Manufacturer range claims for electric motorcycles follow an annoying convention, they advertise city range (the biggest number) loud, and mention highway range (the smaller, more relevant number) quietly. Aggressive riding, highway speeds, and headwinds all crush range significantly. Here&apos;s what to expect in the real world.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                City Range vs Highway Range
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                On most electric motorcycles, city range is roughly double highway range. A Zero SR/F claims 200 miles city / 100 miles highway at 70 mph. A LiveWire ONE is 146 miles city / 95 miles highway. The difference comes from aerodynamic drag, at 70 mph, the bike is fighting a lot of air, and without regenerative braking benefits you&apos;d get in stop-and-go city riding, the battery drains faster.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Level 1 (Home 120V) Charging
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Every bike on this list ships with a Level 1 charger that plugs into a standard household outlet. Expect roughly 8-12 hours for a full charge from empty. This is fine for overnight charging at home but useless on a road trip.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Level 2 (240V) Charging
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A Level 2 charger cuts charge time to 2-4 hours for most bikes. Zero sells the Charge Tank accessory that pushes Level 2 rates even higher. Harley-Davidson LiveWire is the only bike on this list that supports DC Fast Charging on the CCS1 standard, which can take it from 0 to 80% in about 40 minutes at a public DCFC station.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                DC Fast Charging
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the single biggest differentiator for anyone who wants to actually tour on an electric motorcycle. As of 2026, the LiveWire ONE and the Energica Ego+ support DCFC. The Zero platform does not (though Zero keeps hinting at it for the next-gen SR/F). If you want to ride coast to coast on an electric bike, you are buying a LiveWire or an Energica today.
              </p>

              {/* Mid CTA */}
              <AffiliateCTABox
                productKey={PRIMARY_PRODUCT_KEY}
                badge='Why the Zero SR/F'
                verdict='The Zero SR/F gets our top-pick nod because it balances power, range, price, and the most mature dealer network of any electric motorcycle brand in the US.'
                source='electric-motorcycle-mid'
                variant='mid'
              />

              {/* Licensing */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Licensing: You Need an M1
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California requires an M1 motorcycle endorsement for any two-wheeled motorcycle capable of more than 30 mph. Every bike on this list, including the entry-level Kawasaki Ninja e-1 (55 mph) and the off-road-only CAKE Kalk OR (56 mph for the street-legal INK&amp;SR variant), requires an M1.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The M1 endorsement process in California involves passing a written test and either completing a California Motorcyclist Safety Program (CMSP) course or passing a DMV skills test. The CMSP course route is dramatically faster and gives you the skills test waiver. Budget about $300 and a full weekend.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                One common misconception: an electric motorcycle is not a moped unless it&apos;s restricted to 30 mph. An M2 moped license covers only low-power scooters under 30 mph. None of the bikes in this guide qualify.
              </p>

              {/* Street vs Off-Road */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Street Legal vs Off-Road
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Four of the five bikes on this list (Zero SR/F, LiveWire ONE, Energica Ego+, Kawasaki Ninja e-1) are full street-legal motorcycles with DOT lighting, VIN, CARB certification, and motorcycle titles. They register like any other motorcycle and can be ridden on any public road.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The CAKE Kalk OR is sold as an off-road only bike. CAKE does make a street-legal variant called the Kalk INK&amp;SR (or the OR+ in some markets) that adds DOT lighting, turn signals, mirrors, and a proper street-legal title. The OR we review here is the pure-trail version; ride it on OHV land, private property, or organized enduro events.
              </p>

              {/* California HOV */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                California HOV Lane Access
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Motorcycles in California, electric, gas, diesel, or steam-powered, can ride the HOV / carpool lane solo under longstanding California Vehicle Code Section 21655.5. You do not need any decal, sticker, or permit for this. That&apos;s a real daily benefit for anyone commuting from the Inland Empire into Orange County or across the Bay on the 880.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The California Clean Air Vehicle (CAV) sticker program does not include electric motorcycles, but you don&apos;t need it — motorcycles already have full HOV access by virtue of being motorcycles.
              </p>

              {/* CVAP Rebate */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                California CVAP / E-Motorcycle Rebate: $1,500 to $2,000 Off
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                CARB funds a rebate program specifically for battery-electric motorcycles with top speeds above 45 mph. As of 2026, qualifying applicants can receive between $1,500 and $2,000 depending on income level and funding availability. The higher tier ($2,000) is reserved for applicants at or below 400% of the federal poverty line; the base rebate of $1,500 is available to most California residents who meet program income caps.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Qualifying bikes from this list: Zero SR/F, Harley-Davidson LiveWire ONE, Energica Ego+. Bikes that may or may not qualify depending on the current eligible-vehicle list: Kawasaki Ninja e-1 (borderline. The 55 mph top speed meets the 45 mph threshold, but funding tier eligibility varies year to year), CAKE Kalk OR (off-road only models typically don&apos;t qualify; the street-legal INK&amp;SR variant usually does).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Apply through the California Air Resources Board&apos;s program portal before purchasing (some programs require pre-approval) and confirm current funding status. CVAP funding periodically runs dry and reopens when additional state budget is allocated.
              </p>

              {/* Fueling Cost */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Fueling Cost: Electric vs Gas Math
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At California&apos;s 2026 average residential electricity rate of about 32 cents per kWh, a full charge of a 14.4 kWh Zero SR/F battery costs approximately $4.60 and delivers 100-200 miles of range. That works out to 2 to 5 cents per mile depending on how you ride.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Compare that to a gas motorcycle. A typical naked like a Yamaha MT-09 returns about 45 mpg. At $5.00 per gallon (roughly California&apos;s 2026 average), you&apos;re paying about 11 cents per mile. Ride 10,000 miles a year and the electric bike saves you roughly $600-$900 in fuel alone.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Savings can grow materially if you charge on off-peak TOU rates; PG&amp;E EV2-A peak is around 55 cents per kWh but off-peak drops to about 24 cents. or if you charge from rooftop solar you already own. A solar homeowner effectively pays the avoided-export rate of 4-8 cents per kWh, which pushes fuel cost below a penny per mile.
              </p>

              {/* Product Deep Dives */}
              <h2 id='zero-srf' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                1. Zero SR/F — Best Overall
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $21,995 · <strong>Peak power:</strong> 110 hp · <strong>Top speed:</strong> 124 mph · <strong>Range:</strong> 200 mi city / 100 mi highway · <strong>Weight:</strong> 498 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Zero SR/F is the best all-around electric motorcycle in 2026, and it&apos;s not close. It pairs a 110-horsepower ZF17.3 motor and 17.3 kWh battery pack (14.4 kWh usable) with premium Showa suspension, Pirelli Diablo Rosso III tires, and a Bosch MSC IMU-based rider-aid package that handles traction control, cornering ABS, and wheelie control.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                What sets it apart from Harley and Energica is the Cypher III operating system. You can unlock Sport mode, additional power, Rapid Charge capability, and other features via software purchase after the fact. a genuinely novel approach to bike configuration. Zero also has the deepest US dealer network of any electric-only brand, and parts availability is now mature.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The SR/F weighs 498 pounds, which is heavy for a naked but lighter than the LiveWire by 64 pounds. The low center of gravity makes it feel much lighter than the scale reading suggests. It flicks through canyons like a 400-pound Ducati Monster even though it has more torque than a Panigale V2.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Weaknesses: the seat is flat and firm for long rides, no DC fast charging on the base model, and the TFT dash is smaller than the LiveWire&apos;s. For a daily commuter plus weekend canyon bike, none of that matters.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='zero-srf'
                  source='electric-motorcycle-zero'
                  variant='primary'
                  showPrice
                />
              </div>

              <h2 id='livewire' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                2. Harley-Davidson LiveWire ONE, Best Premium
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $22,799 · <strong>Peak power:</strong> 105 hp · <strong>Top speed:</strong> 110 mph · <strong>Range:</strong> 146 mi city / 95 mi highway · <strong>Weight:</strong> 562 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                LiveWire started as a Harley-Davidson sub-brand and in 2022 spun off as its own public company. The LiveWire ONE is the refined, production-ready second generation of the bike Harley launched in 2019, it dropped the price by $8,000 from the original LiveWire, added better range, and kept the premium hardware.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The LiveWire rides like a refined, heavy naked. It&apos;s not as aggressive as the Zero SR/F, the 562-pound weight pulls it down in tighter canyons — but it&apos;s the most polished and comfortable long-ride electric motorcycle you can buy. Brembo M50 brakes, Showa Separate Function Fork, and a large 4.3-inch color TFT dash feel like premium equipment. The ride quality is noticeably smoother than the Zero.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The standout feature: CCS1 DC fast charging. Plug into a Combined Charging System DCFC station and you can get to 80% in about 40 minutes. That single feature is what makes the LiveWire the practical pick for long-distance touring. The Zero SR/F can&apos;t do this.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Range is the weak point. 146 miles city / 95 miles highway means a LiveWire is a commuter and canyon bike first, not a touring bike. But the DCFC makes it tour-capable in a way the longer-range Energica isn&apos;t as easily.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='harley-livewire-one'
                  source='electric-motorcycle-livewire'
                  variant='primary'
                  showPrice
                />
              </div>

              <h2 id='energica' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                3. Energica Ego+ — Best Performance
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $24,000 · <strong>Peak power:</strong> 169 hp · <strong>Top speed:</strong> 150 mph · <strong>Range:</strong> 261 mi city / 143 mi highway · <strong>Weight:</strong> 571 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Energica is an Italian manufacturer that came out of the CRP Group&apos;s aerospace and Formula 1 business. The Ego+ (plus is the current 21.5 kWh battery spec) is the largest-battery, highest-performance production electric motorcycle you can buy in 2026. It was the official bike of the MotoE world championship series from 2019 to 2022.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At 169 horsepower and 150 mph, the Ego+ is a genuine superbike. The 21.5 kWh battery delivers a claimed 261 miles city range, the longest on this list by a wide margin. It supports Mode 4 DC fast charging (up to about 25 kW), which takes a realistic 40 minutes to go from 20% to 80%.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The hardware is proper superbike kit: Marzocchi fork, Bitubo shock, Brembo M4 brakes with Bosch cornering ABS, and a full-size full-color dash with Bluetooth and ride modes. On a canyon road or a track day, the Ego+ is the fastest electric motorcycle on this list, bar none.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Downsides: weight (571 lbs), price ($24,000 before options), and dealer access. Energica has a thinner US network than Zero or Harley, which can matter for service and warranty. The Ego+ is a specialist pick for a rider who wants the most performance-forward electric motorcycle and is willing to make service accommodations.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='energica-ego-plus'
                  source='electric-motorcycle-energica'
                  variant='primary'
                  showPrice
                />
              </div>

              <h2 id='ninja-e1' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                4. Kawasaki Ninja e-1, Best Entry Level
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $7,999 · <strong>Peak power:</strong> 11 hp · <strong>Top speed:</strong> 55 mph · <strong>Range:</strong> 40 mi · <strong>Weight:</strong> 309 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Kawasaki Ninja e-1 is the first mass-market electric motorcycle from one of the Big Four Japanese manufacturers. It uses a familiar Ninja 250-class supersport chassis but swaps the gas engine for a small 5 kW (peak 11 hp) motor and two 30V / 30Ah removable Lithium-Ion battery packs.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is an urban bike. 55 mph top speed, 40-mile range, and a 2-hour recharge on a wall outlet using the removable packs. It&apos;s not a freeway bike, and it&apos;s not a canyon bike. It&apos;s a first motorcycle for someone who needs a learner bike they can ride in city traffic, park in a studio-apartment basement, and charge like a laptop battery.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The huge win is the removable battery. If you live in an apartment without a garage outlet, you just lift the pack out of the bike, carry it inside (it weighs about 25 pounds), and charge it like a power tool. That single design decision makes the Ninja e-1 uniquely practical for urban riders.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The weakness is also obvious: 40 miles of range means you plan every trip. Miss your charging window and you&apos;re pushing a 309-pound bike home. It also doesn&apos;t qualify for full CVAP rebates in all funding years because the 45 mph minimum speed threshold applies differently to different rebate tiers. Check current eligibility before assuming.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='kawasaki-ninja-e1'
                  source='electric-motorcycle-ninja'
                  variant='primary'
                  showPrice
                />
              </div>

              <h2 id='cake-kalk' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                5. CAKE Kalk OR, Best Off-Road
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $13,500 · <strong>Peak power:</strong> 16 kW · <strong>Top speed:</strong> 56 mph · <strong>Range:</strong> 3 hours trail riding · <strong>Weight:</strong> 174 lbs
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                CAKE is a Swedish company that builds minimalist electric off-road motorcycles designed around weight reduction and clean aesthetics rather than raw power. The Kalk OR is their dedicated off-road bike. 174 pounds, 16 kW peak power, 2.6 kWh battery, and a minimalist aluminum frame that makes most other electric dirt bikes look heavy.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                What distinguishes the Kalk OR from a Sur-Ron or Talaria is design philosophy. The Sur-Ron and Talaria are electric motorcycles; the CAKE is a piece of industrial design that happens to be fast off road. Fit and finish is on a different level, it feels like an Apple product. Suspension is a proper Ohlins TTX fork and shock (top of the dirt-bike spec list). Ergonomics are tall and neutral, more like a modern European enduro than a mini-moto.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The trade-off is price. At $13,500, the Kalk OR costs three times what a Sur-Ron Light Bee X does for a bike that&apos;s arguably only 20% better on the trail. You pay for the design, the suspension, and the lighter weight. If those matter to you, nothing else in the segment feels like it.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                CAKE also makes a street-legal variant, the Kalk INK&amp;SR (sometimes sold as the OR+), which adds DOT lighting and a California-compliant street title. If you want a street-plus-trail (dual sport) CAKE experience, go for the INK&amp;SR. The OR we review here is trail-only.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='cake-kalk-or'
                  source='electric-motorcycle-cake'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* Mid CTA 2 */}
              <AffiliateCTABox
                productKey={PRIMARY_PRODUCT_KEY}
                badge='Best Value After Rebates'
                verdict='The Zero SR/F at $21,995 drops to roughly $19,995 after a $2,000 CVAP rebate; that is materially less than a comparable Ducati Monster 937 with comparable power.'
                source='electric-motorcycle-mid-2'
                variant='mid'
              />

              {/* Maintenance */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Maintenance: What You Actually Service
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                An electric motorcycle has a fraction of the service items of a gas bike. No oil changes, no spark plugs, no valves, no cam chain, no carburetor or fuel injectors, and on air-cooled models, no coolant. What you actually service:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Tires</strong> — same as gas. Budget $300-$600 per set every 8,000-12,000 miles.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Brake pads</strong> — regenerative braking extends pad life dramatically. Expect 20,000+ mile pad intervals.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Brake fluid</strong> — flush every 2 years. $20 in fluid, $150 at a shop.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Belt or chain</strong> — Zero uses a belt (15,000-20,000 mile life), LiveWire uses a belt (similar), others use chains that need 300-600 mile lubrication cycles.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Annual inspection</strong> — most dealers recommend a yearly shop visit for firmware updates, diagnostics, and torque checks on critical fasteners.</span>
                </li>
              </ul>

              {/* Battery Life */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Battery Life and Replacement Cost
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Electric motorcycle batteries are typically warrantied for 5 years / unlimited miles and rated for 1,000+ charge cycles to 80% capacity. In real terms, most bikes will hold 80%+ capacity past 100,000 miles if they&apos;re charged predominantly on Level 1 or Level 2 (not repeatedly on DC fast charge at high state of charge).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                When battery replacement eventually becomes necessary, expect $3,500-$7,000 depending on bike. Zero battery packs are about $5,000-$7,000 depending on capacity. LiveWire is similar. Energica&apos;s larger pack is more. The Kawasaki Ninja e-1&apos;s removable packs are cheap by comparison, around $700-$900 per pack, and you can replace one without replacing both.
              </p>

              {/* FAQ */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Do you need a motorcycle license for an electric motorcycle?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes, an M1 endorsement is required in California for any two-wheeled motorcycle capable of more than 30 mph. Every bike on this list requires it.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How far can an electric motorcycle go on a single charge?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    About 200 miles city on a Zero SR/F, 146 miles on a LiveWire ONE, 261 miles on an Energica Ego+, 40 miles on a Kawasaki Ninja e-1, and roughly 3 hours of trail riding on a CAKE Kalk OR.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Can electric motorcycles use the California HOV lane solo?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. All motorcycles (electric or gas) can use HOV lanes solo in California under California Vehicle Code 21655.5. No decal required.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is there a California rebate for electric motorcycles?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. CARB&apos;s CVAP / E-Motorcycle Rebate program offers $1,500-$2,000 depending on income and funding. Most full-size electric motorcycles qualify.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How much does it cost to fuel an electric motorcycle?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Roughly 2-5 cents per mile at California&apos;s 2026 residential electricity rates, compared with about 11 cents per mile for a gas motorcycle returning 45 mpg on $5 gas.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Are electric motorcycles reliable?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes — fewer moving parts means less to break. Primary service items are tires, brake pads, brake fluid, and belt or chain. Battery replacements are $3,500-$7,000 after 100,000+ miles.
                  </p>
                </div>
              </div>

              {/* Final CTA */}
              <AffiliateCTABox
                productKey={PRIMARY_PRODUCT_KEY}
                badge='Final Verdict'
                verdict='The Zero SR/F is the best all-around electric motorcycle of 2026. Strong performance, mature dealer network, and CVAP rebate eligibility. Check current price and availability.'
                source='electric-motorcycle-final'
                variant='final'
              />

              {/* Bottom line */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For most buyers, the <strong>Zero SR/F</strong> at $21,995 is the right answer. Enough power, enough range, the most mature dealer network, and full CVAP eligibility for a $2,000 rebate in California. The <strong>Harley-Davidson LiveWire ONE</strong> is the premium touring pick because it&apos;s the only bike here with proper CCS1 DC fast charging. The <strong>Energica Ego+</strong> is for the rider who wants the fastest, longest-range production electric bike regardless of price. The <strong>Kawasaki Ninja e-1</strong> is the right first electric motorcycle for someone who needs an urban commuter with a removable battery. The <strong>CAKE Kalk OR</strong> is the pick for riders who want design-forward off-road performance and don&apos;t blink at the $13,500 sticker.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Whatever you buy, factor in the California rebate stack, the cost of an M1 endorsement (~$300), and a quality helmet / jacket / glove / boot setup ($800-$1,500). Electric motorcycles are real motorcycles — they deserve real gear and real respect.
              </p>
            </div>

            {/* Explore more */}
            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See our companion guides on the best electric dirt bikes, fastest electric bikes, and electric mopeds for street-legal commuting.
              </p>
              <div className='flex flex-wrap gap-3 justify-center'>
                <Link
                  href='/reviews/electric-dirt-bike'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Electric Dirt Bikes
                  <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/reviews/fastest-electric-bike'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Fastest E-Bikes
                  <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/reviews/best-electric-moped'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Electric Mopeds
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
      <StickyMobileCTA productKey={PRIMARY_PRODUCT_KEY} source='electric-motorcycle-sticky' />
    </ReviewLayout>
  );
}
