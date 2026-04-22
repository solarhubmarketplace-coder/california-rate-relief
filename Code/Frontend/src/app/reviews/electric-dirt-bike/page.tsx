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

// Primary affiliate CTA for this hub — our overall top pick
const PRIMARY_PRODUCT_KEY = 'sur-ron-light-bee-x';

export const metadata: Metadata = {
  title:
    'Best Electric Dirt Bikes 2026: Full-Size, Kids, and Street Legal Options',
  description:
    'Compare the best electric dirt bikes of 2026 — Sur-Ron Light Bee X, Talaria Sting R MX4, Segway X260, Kuberg Freerider, and the 80-HP Stark VARG. Full-size vs kids, street legal vs off-road, California CARB rules, battery range, and buying advice.',
  alternates: {
    canonical: '/reviews/electric-dirt-bike',
  },
  openGraph: {
    title: 'Best Electric Dirt Bikes 2026: The Complete Buyer\'s Guide',
    description:
      'Sur-Ron, Talaria, Segway, Kuberg, Stark VARG compared. Adult vs kids, trail vs street legal, California-specific regulations explained.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Electric Dirt Bikes 2026',
  description:
    'Ranked list of the best electric dirt bikes available in 2026, covering full-size, kids, and street legal options.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Sur-Ron Light Bee X',
      url: 'https://ratereliefca.com/reviews/electric-dirt-bike#sur-ron',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Talaria Sting R MX4',
      url: 'https://ratereliefca.com/reviews/electric-dirt-bike#talaria',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Segway X260',
      url: 'https://ratereliefca.com/reviews/electric-dirt-bike#segway',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Kuberg Freerider',
      url: 'https://ratereliefca.com/reviews/electric-dirt-bike#kuberg',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Stark VARG',
      url: 'https://ratereliefca.com/reviews/electric-dirt-bike#stark',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are electric dirt bikes street legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most electric dirt bikes (including Sur-Ron Light Bee X, Talaria Sting, and Stark VARG) are not street legal from the factory — they ship as off-road-only machines. Aftermarket dual-sport kits (DOT lighting, mirrors, horn, plate bracket, street tires) can make some models street legal in certain states, but California requires the bike to be registered as a motorcycle with a motorcycle license, turn signals, VIN, and CARB certification. Check your state DMV before buying.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the fastest electric dirt bike in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Stark VARG is the fastest production electric dirt bike in 2026, producing up to 80 horsepower with a top speed above 90 mph and outperforming 450cc gas motocross bikes in lap times. The Sur-Ron Storm Bee (60 hp, 75 mph) is a distant second. Most entry-level bikes like the Sur-Ron Light Bee X top out around 50 mph.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do electric dirt bike batteries last per charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Range depends on riding style, terrain, and rider weight. A Sur-Ron Light Bee X (60V/40Ah) gets roughly 60-75 miles on trails and 30-45 miles in aggressive riding. Talaria Sting R MX4 gets 50-70 miles mixed. The high-performance Stark VARG runs 1.5-3 hours depending on map selection. Kids bikes like Kuberg Freerider typically run 60-90 minutes per charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a motorcycle license for an electric dirt bike?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For off-road use on private property or designated OHV (off-highway vehicle) areas, no license is required. For public trails like BLM land or state OHV parks, you typically need to register the bike as an off-highway vehicle (green or red sticker in California). If you convert the bike for street use, you need a motorcycle endorsement (M-class license) plus full motorcycle registration and insurance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best electric dirt bike for kids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Kuberg Freerider (ages 8-12, 5 kW, adjustable seat) is the best overall kids electric dirt bike for serious riders. For younger riders, the Kuberg Start (ages 3-6) is the industry standard. Segway makes the Dirt eBike X160 for teens 12+. All three have parent-adjustable speed limiters so the bike can grow with the child.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are electric dirt bikes allowed at motocross tracks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Policies vary by track. Most California motocross tracks now allow electric dirt bikes and some have dedicated electric-only classes. The Stark VARG is AMA-legal for competition. Sur-Ron and Talaria typically ride in the 250cc or e-moto class depending on the track. Call ahead before your first visit — a few tracks still exclude electric bikes for liability reasons.',
      },
    },
  ],
};

export default function ElectricDirtBikeHub() {
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
                Best Electric Dirt Bikes
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Buyer&apos;s Guide
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Best Electric Dirt Bikes 2026: Full-Size, Kids, and Street Legal Options
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>18 min read</span>
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
              verdict='The Sur-Ron Light Bee X is the best all-around electric dirt bike in 2026 — light enough to load into a pickup solo, quick enough to dust most trail riders, and cheap enough at $4,500 to be the obvious starting point for electric off-road.'
              pros={[
                'Trail, single-track, and enduro use',
                'Riders transitioning from bicycles or 125cc',
                'Quiet riding in sound-sensitive areas',
              ]}
              cons={['Heavy motocross or sand-dune riding', 'Street-legal commuting without a conversion']}
              source='electric-dirt-bike-hub'
              variant='top'
            />

            {/* Intro */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Electric dirt bikes have graduated from novelty to the fastest-growing segment in off-road motorcycling. In 2026, there is an electric option for every rider: an eight-year-old learning throttle control, a weekend trail rider who wants instant torque without waking the neighbors, and a pro-level racer chasing 450cc lap times on a bike that plugs into a wall outlet.
              </p>
              <p className='text-lg text-foreground/80 leading-relaxed mb-8'>
                This guide covers the five electric dirt bikes that matter most right now — from the $4,500 Sur-Ron Light Bee X that kicked off the movement, to the $12,000 Stark VARG that is beating premium gas bikes in motocross. We&apos;ll walk through how to pick the right one for your terrain, your skill level, and your legal situation (spoiler: California is fussy about this).
              </p>
            </div>

            {/* Comparison Table */}
            <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
              Electric Dirt Bike Comparison: Specs at a Glance
            </h2>
            <ComparisonTable
              source='electric-dirt-bike-hub'
              specLabels={['Motor Power', 'Top Speed', 'Range', 'Weight', 'Best For', 'Price']}
              products={[
                {
                  productKey: 'sur-ron-light-bee-x',
                  name: 'Sur-Ron Light Bee X',
                  badge: 'Best Overall',
                  rating: 4.7,
                  specs: {
                    'Motor Power': '6 kW peak',
                    'Top Speed': '47 mph',
                    Range: '60-75 mi',
                    Weight: '110 lbs',
                    'Best For': 'Trail & enduro',
                    Price: '$4,500',
                  },
                },
                {
                  productKey: 'talaria-sting',
                  name: 'Talaria Sting R MX4',
                  badge: 'Best Value',
                  rating: 4.6,
                  specs: {
                    'Motor Power': '8 kW peak',
                    'Top Speed': '53 mph',
                    Range: '50-70 mi',
                    Weight: '124 lbs',
                    'Best For': 'Aggressive trail',
                    Price: '$5,500',
                  },
                },
                {
                  productKey: 'segway-x260',
                  name: 'Segway X260',
                  badge: 'Best Ergonomics',
                  rating: 4.5,
                  specs: {
                    'Motor Power': '7 kW peak',
                    'Top Speed': '50 mph',
                    Range: '75 mi',
                    Weight: '121 lbs',
                    'Best For': 'Adult beginners',
                    Price: '$6,000',
                  },
                },
                {
                  productKey: 'kuberg-freerider',
                  name: 'Kuberg Freerider',
                  badge: 'Best for Kids',
                  rating: 4.6,
                  specs: {
                    'Motor Power': '5 kW peak',
                    'Top Speed': '34 mph',
                    Range: '60-90 min',
                    Weight: '85 lbs',
                    'Best For': 'Ages 8-14',
                    Price: '$6,500',
                  },
                },
                {
                  productKey: 'stark-varg',
                  name: 'Stark VARG',
                  badge: 'Best Performance',
                  rating: 4.8,
                  specs: {
                    'Motor Power': '80 hp / 60 kW',
                    'Top Speed': '90+ mph',
                    Range: '1.5-3 hrs',
                    Weight: '243 lbs',
                    'Best For': 'MX & racing',
                    Price: '$12,000+',
                  },
                },
              ]}
            />

            <div className='prose prose-slate max-w-none'>
              {/* What Is an Electric Dirt Bike */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Is an Electric Dirt Bike?
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                An electric dirt bike is an off-road motorcycle powered by a battery pack and electric motor instead of a gasoline engine. Most weigh 85-250 pounds (dramatically lighter than comparable gas bikes), produce peak power ranging from 3 kW (kids bikes) to 60 kW (pro-level race bikes), and recharge from a standard 110V or 240V outlet in two to five hours.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The big differences compared with a gas dirt bike:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Instant torque</strong> — there is no clutch, no gearbox, and no powerband to manage. Roll the throttle and the bike moves.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Near-silent operation</strong> — quiet enough to ride at 7 AM on a Saturday without upsetting neighbors or spooking wildlife.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>No maintenance routine</strong> — no oil changes, no air filter cleaning, no carburetor rebuilds, no valve adjustments.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 text-rose-400 mt-1 shrink-0' />
                  <span><strong>Limited range</strong> — you cannot pour a gallon of fuel into the tank and keep riding. When the battery is done, you are done for the day (or you pack a second battery).</span>
                </li>
                <li className='flex items-start gap-2'>
                  <X className='h-4 w-4 text-rose-400 mt-1 shrink-0' />
                  <span><strong>Battery replacement cost</strong> — after 500-1,000 cycles, battery capacity degrades. Replacement packs run $1,200-$2,500.</span>
                </li>
              </ul>

              {/* Full-Size vs Kids */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Full-Size vs Kids: Pick the Right Size
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Electric dirt bikes split cleanly into four size categories. Buying the wrong size is the single most common mistake first-time buyers make — an adult on a kids bike will break it; a small child on an adult bike will get hurt.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Ages 3-6 (Balance and Intro Bikes)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Kuberg Start, Stacyc 12, Razor MX125. Seat height 18-23 inches, top speed 5-15 mph, power under 500W. These are essentially balance bikes with a throttle — a great way to introduce young kids to power control without the complexity of gears or a clutch.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Ages 7-12 (Youth Motocross Size)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Kuberg Freerider, Segway X160, Sur-Ron Light Bee L1E (EU). Seat height 28-34 inches, top speed 20-35 mph with adjustable limiter, power 2-5 kW. These bikes can genuinely shred on kids-sized motocross tracks and teach proper riding technique.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Teen & Small Adult (5&apos;2&quot; to 5&apos;8&quot;)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sur-Ron Light Bee X, Talaria Sting, Segway X260. Seat height 33-36 inches, top speed 45-55 mph, power 5-8 kW. This is the sweet spot for most riders — enough bike to be genuinely fun, light enough to pick up when you crash, cheap enough not to cry about.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Full-Size Adult (5&apos;8&quot;+ and serious riders)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Stark VARG, Sur-Ron Storm Bee, KTM Freeride E-XC. Seat height 37-39 inches, top speed 60-90+ mph, power 11-60 kW. This is where electric dirt bikes compete head-to-head with 250cc-450cc gas bikes. Serious power, serious price, serious learning curve.
              </p>

              {/* Street Legal vs Off-Road */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Street Legal vs Off-Road Only
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the single most misunderstood topic in the electric dirt bike world. Almost every bike on this list is sold as <em>off-road only</em>. That means it ships without DOT lighting, turn signals, a VIN suitable for motorcycle registration, or the emissions certifications required for street use in most states.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                You have three paths:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <span className='text-amber-400 font-bold'>1.</span>
                  <span><strong>Stay off-road.</strong> Ride on private property, designated OHV areas (in California: Hungry Valley, Clay Pit, Ocotillo Wells, Prairie City), or organized off-road tracks. No license, no insurance, no plates. Simplest path.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-amber-400 font-bold'>2.</span>
                  <span><strong>Buy a bike that ships street legal.</strong> Very few electric dirt bikes qualify — in the U.S. the KTM Freeride E-XC (import only) and the forthcoming dual-sport Stark are the main options. Expect $11,000+ and a motorcycle-specific title.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-amber-400 font-bold'>3.</span>
                  <span><strong>Dual-sport conversion.</strong> Install DOT headlight, taillight, turn signals, horn, mirrors, street tires, and plate bracket. Then navigate your state&apos;s registration process. In California this is genuinely painful — CARB approval, VIN verification, and often a rejected application on the first try. Many riders give up and keep the bike off-road.</span>
                </li>
              </ul>

              {/* Mid CTA */}
              <AffiliateCTABox
                productKey={PRIMARY_PRODUCT_KEY}
                badge='Why the Sur-Ron'
                verdict='The Sur-Ron Light Bee X is the bike we recommend to 80% of readers because it does 80% of what a trail rider actually wants at a third of the price of a Stark VARG.'
                source='electric-dirt-bike-mid'
                variant='mid'
              />

              {/* Product Deep Dives */}
              <h2 id='sur-ron' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                1. Sur-Ron Light Bee X — Best Overall
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $4,500 · <strong>Power:</strong> 6 kW peak · <strong>Top speed:</strong> 47 mph · <strong>Weight:</strong> 110 lbs · <strong>Range:</strong> 60-75 miles trail
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Light Bee X is the bike that created the modern electric dirt bike category. Sur-Ron has been iterating on this platform since 2018, and the current X model is the refined product of seven years of feedback. It&apos;s built around a lightweight aluminum frame, a 6 kW peak mid-drive motor, and a 60V / 40Ah battery pack. Adjustable suspension front and rear, hydraulic disc brakes, and a proper throttle map for sport mode vs eco mode make it feel like a real motorcycle — because at this point, it is.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                What makes it the overall winner is the price-to-capability ratio. At $4,500 it undercuts every comparable bike, and it&apos;s light enough (110 lbs) that one adult can wrestle it into a pickup bed without a ramp. The aftermarket is enormous — want bigger tires, more power, a longer-range battery, street-legal conversion? There&apos;s a kit for it. Sur-Ron spare parts are everywhere; your local motorcycle shop probably stocks them.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The weaknesses are honest: the seat is punishingly firm after an hour, the suspension is underdamped for bigger riders, and the controller is known to fail if you ride it hard in deep sand. For 80% of trail use, none of that matters.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='sur-ron-light-bee-x'
                  source='electric-dirt-bike-sur-ron'
                  variant='primary'
                  showPrice
                />
              </div>

              <h2 id='talaria' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                2. Talaria Sting R MX4 — Best Value
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $5,500 · <strong>Power:</strong> 8 kW peak · <strong>Top speed:</strong> 53 mph · <strong>Weight:</strong> 124 lbs · <strong>Range:</strong> 50-70 miles mixed
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Talaria Sting is the Sur-Ron&apos;s main competitor and a real answer to anyone who finds the Light Bee X a little underpowered. The MX4 trim adds a full motocross-style seat, upgraded suspension, and a larger battery pack. Peak power is 8 kW (vs 6 kW on the Sur-Ron), and the bike feels noticeably stronger out of slow corners.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Talaria platform is a bit more refined than the Sur-Ron for MX-style riding — better ergonomics, better suspension travel, and a chassis that feels more planted at speed. It&apos;s also $1,000 more. If you ride a lot of motocross tracks or whooped-out desert, the Talaria is worth the premium. If you ride mostly single-track trails, the Sur-Ron gets you 90% of the way there for less money.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                One common complaint: early Talarias had some dealer network growing pains. Parts availability has improved significantly through 2025-2026, but still lags Sur-Ron. Check that your local shop supports the brand before buying.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='talaria-sting'
                  source='electric-dirt-bike-talaria'
                  variant='primary'
                  showPrice
                />
              </div>

              <h2 id='segway' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                3. Segway X260 — Best Ergonomics for Adult Beginners
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $6,000 · <strong>Power:</strong> 7 kW peak · <strong>Top speed:</strong> 50 mph · <strong>Weight:</strong> 121 lbs · <strong>Range:</strong> Up to 75 miles
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Segway Powersports isn&apos;t the scooter company — it&apos;s a full-line powersports brand that shares a parent company with Ninebot. The X260 is the flagship off-road electric dirt bike in the lineup. What separates it from Sur-Ron and Talaria is manufacturing polish. Fit and finish on a Segway feels more &quot;bought at a dealership&quot; and less &quot;built in a garage&quot; — welds are cleaner, plastics fit tighter, the harness is better routed.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The X260 has a roomier cockpit and more neutral ergonomics than the Sur-Ron, which makes it a great pick for taller adult beginners who find the Light Bee X a bit cramped. The 7.2 kWh battery pack is larger than what Sur-Ron ships stock, so range is genuinely 75+ miles in eco mode. The trade-off is weight — at 121 lbs it&apos;s 11 lbs heavier than the Sur-Ron — and price, at $1,500 more.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Segway also has a proper dealer network and a real service warranty, which matters if you&apos;re not a DIY mechanic. For anyone who wants an electric dirt bike without the weekend-project energy of a Sur-Ron, this is the pick.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='segway-x260'
                  source='electric-dirt-bike-segway'
                  variant='primary'
                  showPrice
                />
              </div>

              <h2 id='kuberg' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                4. Kuberg Freerider — Best for Kids (Ages 8-14)
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $6,500 · <strong>Power:</strong> 5 kW peak · <strong>Top speed:</strong> 34 mph (adjustable) · <strong>Weight:</strong> 85 lbs · <strong>Range:</strong> 60-90 minutes
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Kuberg is a Czech manufacturer that&apos;s been building electric dirt bikes for kids since 2006 — they were in this space before Sur-Ron existed. The Freerider is their flagship youth motocross bike, sized for riders 8-14 years old, with parent-controlled speed limiters in three stages: 14 mph (learning), 22 mph (intermediate), 34 mph (advanced).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                What separates the Freerider from cheaper kids bikes is that it&apos;s a real motocross bike, not a toy. Adjustable suspension, hydraulic brakes, proper 17-inch motocross tires, and a chassis geometry that teaches correct standing-rider technique. Kids who learn on a Freerider actually learn to ride — not just to pin the throttle.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Price is the hang-up. At $6,500 it&apos;s more than most adults spend on their bike. But if your kid is serious about riding, it will resell for 60-70% of purchase price in two years when they outgrow it, and the lessons learned on proper equipment are worth the cost.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='kuberg-freerider'
                  source='electric-dirt-bike-kuberg'
                  variant='primary'
                  showPrice
                />
              </div>

              <h2 id='stark' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                5. Stark VARG — Best Performance (Pro/Expert Only)
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $12,000+ · <strong>Power:</strong> 80 hp / 60 kW · <strong>Top speed:</strong> 90+ mph · <strong>Weight:</strong> 243 lbs · <strong>Runtime:</strong> 1.5-3 hours depending on map
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Stark VARG is the first electric dirt bike that genuinely beats a 450cc gas motocross bike. It produces up to 80 horsepower, weighs less than a KTM 450 SX-F, and has a programmable power map system with 100+ selectable configurations accessible through a phone-style touchscreen controller mounted on the handlebars. That lets you dial in a different bike for motocross vs enduro vs trail in thirty seconds.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Stark is Swedish. The company was founded by Anton Wass (ex-KTM, ex-Husqvarna) and funded in part by Sebastian Vettel. The VARG launched in 2022 and has since won multiple AMA Supermoto and EnduroCross events in electric classes, and is now homologated for several 450-class FIM events. It&apos;s a legitimate race bike.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                It&apos;s also emphatically not a beginner bike. Full power delivers a 2.5-second 0-60 that will throw an inexperienced rider off the back. Suspension is set up for 240+ pound riders on a motocross track, not casual trails. The battery is swappable, not charge-in-place, and the swap procedure takes two adults and a dedicated charging trolley.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Buy this bike if you&apos;re already riding intermediate-level motocross on a gas 250 or 450 and want to spend $12,000 to go electric without giving up anything. For anyone else, it&apos;s too much bike.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='stark-varg'
                  source='electric-dirt-bike-stark'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* Battery & Range */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Battery &amp; Range: What to Expect in the Real World
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Manufacturer range claims on electric dirt bikes are — like EV range claims — optimistic. Real-world range depends heavily on three factors: riding style, rider weight, and terrain.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A 170-pound rider cruising single-track in eco mode at 20 mph will see roughly double the range of a 220-pound rider hammering wide-open sand dunes in sport mode. Manufacturer claims are typically measured at the low end of that range.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Real-world expectation by bike:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Battery className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Sur-Ron Light Bee X:</strong> 45-60 min hard riding, 2-3 hours trail cruising</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Battery className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Talaria Sting R MX4:</strong> 50-70 min hard riding, 2-3 hours trail</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Battery className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Segway X260:</strong> 60-90 min hard riding, 3-4 hours trail</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Battery className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Kuberg Freerider:</strong> 60-90 min mixed kid riding</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Battery className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Stark VARG:</strong> 1-1.5 hours moto pace, up to 3 hours in eco map</span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you want a full day of riding, you need a second battery pack (Sur-Ron and Talaria sell swappable spare packs for $1,200-$1,800) or you need to ride somewhere you can plug in over lunch.
              </p>

              {/* California Regulations */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                California Regulations: CARB, OHV Stickers &amp; Street Conversions
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California regulates off-road vehicles more aggressively than most states, and electric dirt bikes are explicitly covered. Here&apos;s what you need to know:
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                OHV Registration (Green or Red Sticker)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                To ride on California state-managed OHV land — Hungry Valley, Ocotillo Wells, Clay Pit, Prairie City, Hollister Hills — you need to register your bike as an off-highway vehicle with the DMV and display either a green sticker (year-round riding on all OHV lands) or red sticker (restricted seasons in certain areas). Registration costs $54 for two years. Electric dirt bikes automatically qualify for green-sticker status because they produce zero emissions.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Street Conversion &amp; CARB
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Converting an off-road electric bike to street-legal status in California requires the bike&apos;s manufacturer to have filed a CARB Executive Order for that model — and most off-road electric dirt bike manufacturers haven&apos;t. That means even if you install DOT lighting, mirrors, and street tires, the DMV will often refuse registration. Sur-Ron, Talaria, and Segway have all struggled here. The ethical advice is: if you need a street-legal electric dirt bike in California, buy one that&apos;s homologated for street use from the factory (Zero FX, KTM Freeride E-XC import, or an e-moped class bike that caps at 30 mph).
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Where You Can Legally Ride
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Legal riding spots in California for a green-sticker electric dirt bike: designated OHV state parks, BLM land marked for motorized use, private property (with permission), organized tracks and schools (Glen Helen, Milestone MX, Cahuilla Creek). Illegal riding spots: neighborhood streets, bike paths, hiking trails, National Forest trails that aren&apos;t specifically designated for OHV use, and public parks.
              </p>

              {/* Safety Gear */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Safety Gear: Non-Negotiable
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Electric dirt bikes are quiet, torquey, and lighter than comparable gas bikes — all of which conspire to make riders overconfident. The crashes are just as hard as on a gas bike. Budget $500-$1,000 for gear in addition to the bike:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>DOT/Snell motocross helmet</strong> ($150-$500) — not a bicycle helmet. A proper MX lid covers the jaw and has ECE or Snell certification.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Goggles</strong> ($30-$80) — the bike is quiet but the roost from a rider in front of you is not. Eye protection is non-negotiable.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Chest protector / body armor</strong> ($80-$200) — protects ribs and sternum from rocks kicked up by other riders.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Knee braces or guards</strong> ($50-$400) — knee injuries are the #1 off-road motorcycle injury. A real brace, not just a pad, is worth the cost.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Motocross boots</strong> ($150-$400) — ankle support and impact protection. Hiking boots are not a substitute.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Gloves</strong> ($25-$60) — protect palms during crashes and reduce arm-pump on long rides.</span>
                </li>
              </ul>

              {/* FAQ */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Are electric dirt bikes street legal?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Most aren&apos;t. They ship as off-road-only. Aftermarket dual-sport conversions exist, but California specifically requires CARB certification, motorcycle registration, and a motorcycle endorsement. Check your state DMV before buying if street use matters to you.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What is the fastest electric dirt bike in 2026?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    The Stark VARG at 80 horsepower and 90+ mph. It outperforms most 450cc gas motocross bikes on lap time.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How long do the batteries last per charge?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    45-90 minutes of hard riding, 2-3 hours of easy trail cruising, for most mid-tier bikes. The Stark VARG runs 1.5-3 hours depending on selected power map.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Do I need a motorcycle license?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Not for off-road or private property use. You do need one if you convert the bike for street use. Green-sticker OHV registration is required in California to ride state-managed OHV areas.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Best electric dirt bike for kids?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Kuberg Freerider (ages 8-14) for serious riders; Kuberg Start (ages 3-6) for beginners. Both have parent-controlled speed limiters.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Can I ride at motocross tracks?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Most California tracks allow electric bikes now and some have dedicated electric-only classes. Call ahead before your first visit — a handful still exclude electric bikes.
                  </p>
                </div>
              </div>

              {/* Bottom Line */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For 80% of adult trail riders, the <strong>Sur-Ron Light Bee X</strong> at $4,500 is the right answer. Light enough to load alone, cheap enough to crash, capable enough to dust most gas-powered kids on tight single-track. For kids, the <strong>Kuberg Freerider</strong> is the only serious pick. For racers already riding intermediate motocross, the <strong>Stark VARG</strong> is worth every dollar of the $12,000 sticker. Anyone in between should look hard at the Talaria Sting R MX4 for aggressive riders or the Segway X260 for comfort-focused adult beginners.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The technology has matured fast. A 2026 electric dirt bike is a legitimate alternative to a gas bike — not a compromise. Just be clear on whether you&apos;re riding off-road, street, or both, because that decision dictates which bike you should buy.
              </p>
            </div>

            {/* Final CTA */}
            <AffiliateCTABox
              productKey={PRIMARY_PRODUCT_KEY}
              badge='Final Verdict'
              verdict='The Sur-Ron Light Bee X is the best all-around electric dirt bike of 2026 for adults. Check current price and availability.'
              source='electric-dirt-bike-final'
              variant='final'
            />

            {/* Explore more */}
            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Looking for more off-road options?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See our companion guides on the best adult-size electric dirt bikes, the best kids electric dirt bikes, and electric mopeds for street-legal fun.
              </p>
              <div className='flex flex-wrap gap-3 justify-center'>
                <Link
                  href='/reviews/best-electric-dirt-bike-adults'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Adult Bikes
                  <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/reviews/best-electric-dirt-bike-kids'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Kids Bikes
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
      <StickyMobileCTA productKey={PRIMARY_PRODUCT_KEY} source='electric-dirt-bike-sticky' />
    </ReviewLayout>
  );
}
