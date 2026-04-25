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
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

const PRODUCT_KEY = 'greenworks-lawn-mower';

export const metadata: Metadata = {
  title:
    'Greenworks Lawn Mower Review 2026: 80V Pro, 60V, and 40V Compared',
  description:
    'Greenworks lawn mower review covering the 80V Pro line (21" self-propelled, 25" ZT ride-on, 42" CrossoverT), 60V brushless, and 40V push mowers. Steel vs plastic deck, battery platforms, SoCalGas rebates, CARB compliance, vs EGO/Ryobi. 4.5/5.',
  alternates: {
    canonical: '/reviews/greenworks-lawn-mower',
  },
  openGraph: {
    title:
      'Greenworks Lawn Mower Review 2026: 80V Pro, 60V, and 40V Compared',
    description:
      'Full review of the Greenworks lawn mower lineup, 80V Pro flagship, 60V brushless, 40V push, plus the breakthrough CrossoverT ride-on and ZT zero-turn. All three battery platforms compared.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Greenworks Lawn Mower Lineup 2026',
  description:
    'Complete Greenworks lawn mower lineup comparison covering 80V Pro, 60V, and 40V battery platforms — push mowers, self-propelled, zero-turn, and ride-on models.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'Greenworks 80V Pro 21" Self-Propelled',
        brand: { '@type': 'Brand', name: 'Greenworks' },
        offers: {
          '@type': 'Offer',
          price: '649',
          priceCurrency: 'USD',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'Greenworks 60V 21" Brushless Self-Propelled',
        brand: { '@type': 'Brand', name: 'Greenworks' },
        offers: {
          '@type': 'Offer',
          price: '499',
          priceCurrency: 'USD',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        name: 'Greenworks 40V 20" Push Mower',
        brand: { '@type': 'Brand', name: 'Greenworks' },
        offers: {
          '@type': 'Offer',
          price: '349',
          priceCurrency: 'USD',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Product',
        name: 'Greenworks 80V 25" CrossoverT Ride-On',
        brand: { '@type': 'Brand', name: 'Greenworks' },
        offers: {
          '@type': 'Offer',
          price: '4499',
          priceCurrency: 'USD',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Product',
        name: 'Greenworks 80V 42" ZT Ride-On',
        brand: { '@type': 'Brand', name: 'Greenworks' },
        offers: {
          '@type': 'Offer',
          price: '5499',
          priceCurrency: 'USD',
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
      name: 'Are Greenworks 80V, 60V, and 40V batteries interchangeable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The three Greenworks platforms are completely separate. 80V Pro batteries do not fit 60V or 40V tools, and vice versa. This is the single most common mistake buyers make. Choose your platform based on the tools you want, then commit to it. The 80V Pro line is the flagship with the widest tool selection (40+ tools including the CrossoverT ride-on and ZT zero-turn). 60V is the consumer flagship with 30+ tools. 40V is the entry line with 50+ tools aimed at smaller yards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Greenworks 80V CrossoverT a real alternative to a gas riding mower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a 1/2 to 2 acre lot, yes. The CrossoverT ($4,499) runs on six 80V batteries (roughly 12kWh total if fully loaded) and cuts for 2-3 hours per charge depending on grass conditions. It uses a 42-inch cutting deck, handles 15-degree slopes, and pulls a 300 lb trailer. At the price, it is the cheapest real electric ride-on on the market. Limitations: it is not suited for 3+ acre properties where continuous runtime matters, and the batteries are ~$400 each to replace out of warranty.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Greenworks qualify for SoCalGas or SCE mower rebates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SoCalGas does not offer lawn mower rebates directly. South Coast AQMD and other California air districts have run commercial and residential battery lawn mower rebate programs periodically. $50 to $1,000 depending on program and whether commercial or residential. Greenworks mowers are generally on the approved equipment list. Check the latest rebate round at your county AQMD site.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Greenworks 80V Pro platform CARB-compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All Greenworks battery lawn mowers are zero-emission and fully compliant with California CARB SORE regulations that took effect January 1, 2024. If you are a California crew replacing gas mowers to comply with the new rules, Greenworks 80V Pro is one of the strongest options given the steel deck and commercial battery platform. Many municipal parks departments in California have standardized on 80V Pro or equivalent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Steel deck or plastic deck — does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, more than manufacturers advertise. Steel decks (80V Pro, most 60V) last a decade or more of hard use, handle rocks, roots, and debris without cracking, and can be re-painted/sealed if they rust. Plastic decks (most 40V, some 60V) are lighter and never rust, but can crack if they hit hidden obstacles. For a 5+ year buy, steel is the better choice. Plastic is acceptable for small suburban yards where you know the terrain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Greenworks vs EGO vs Ryobi for a battery mower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EGO Select Cut ($499-$799) is the closest match to Greenworks 60V 21-inch, with slightly better cut quality and more outdoor ecosystem tools. Ryobi 40V HP ($349-$549) is the budget choice with Home Depot exclusivity. Greenworks 80V Pro leads on commercial durability and the CrossoverT ride-on as a unique flagship product. For homeowners, choose EGO for outdoor ecosystem, Ryobi for price and Home Depot convenience, Greenworks for commercial-grade construction and the ride-on option.',
      },
    },
  ],
};

export default function GreenworksLawnMowerReview() {
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
            <nav className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
              <Link href='/reviews' className='hover:text-primary transition-colors'>
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
              <span className='text-foreground font-medium'>Greenworks</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Brand Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Greenworks Lawn Mower Review 2026: 80V Pro, 60V, and 40V
                Compared
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>16 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Brand Hub'
              rating={4.5}
              verdict='Greenworks offers the most complete battery mower lineup of any brand. 80V Pro flagship with steel decks, 60V consumer, 40V entry, plus the breakthrough CrossoverT ride-on and 42" ZT zero-turn.'
              pros={[
                'Only battery brand with real ride-on (CrossoverT) and zero-turn (ZT)',
                'Steel deck across 80V Pro line',
                'CARB SORE compliant, California commercial-ready',
              ]}
              cons={[
                '80V, 60V, 40V batteries NOT cross-compatible',
                'Platform fragmentation makes upgrading expensive',
              ]}
              source='greenworks-lawn-mower'
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
                Greenworks runs three parallel battery platforms — 80V Pro,
                60V, and 40V — and covers everything from a $349 push mower
                to a $5,499 zero-turn ride-on. That&apos;s both the strength
                and the weakness of the brand. The strength: Greenworks is
                the only battery company selling a real ride-on mower (80V
                CrossoverT) and a real zero-turn (80V ZT) that directly
                compete with gas John Deere and Husqvarna models. The
                weakness: the three battery platforms don&apos;t talk to
                each other. An 80V Pro battery won&apos;t run a 60V tool,
                and a 60V battery won&apos;t run an 80V tool. Choose your
                platform carefully. For most homeowners, the 60V line is the
                right balance of power and price. For California commercial
                crews going CARB-compliant, 80V Pro is the obvious pick
                because of the steel deck and commercial-grade battery
                capacity.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      1/2 to 2 acre properties (CrossoverT, ZT)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      California commercial crews going CARB-compliant
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Buyers who want steel deck durability
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
                      Buyers expecting cross-platform battery
                      compatibility
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      3+ acre daily mowing (need a gas zero-turn)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Home Depot loyalists (Ryobi is the better fit)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparison Table, the CRO element for brand hubs */}
            <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
              The Greenworks Lineup at a Glance
            </h2>
            <p className='text-foreground/80 leading-relaxed mb-2'>
              Five core lawn mower models spread across three battery
              platforms. Here&apos;s the head-to-head:
            </p>
            <ComparisonTable
              source='greenworks-lawn-mower'
              specLabels={[
                'Cutting Deck',
                'Platform',
                'Deck Material',
                'Drive Type',
                'Runtime (est.)',
                'Terrain',
                'Warranty',
                'Price',
              ]}
              products={[
                {
                  productKey: 'greenworks-lawn-mower',
                  name: '80V Pro 21" Self-Propelled',
                  badge: 'Commercial',
                  rating: 4.6,
                  specs: {
                    'Cutting Deck': '21 in',
                    Platform: '80V Pro',
                    'Deck Material': 'Steel',
                    'Drive Type': 'Rear-wheel self-propelled',
                    'Runtime (est.)': '60-90 min (5Ah)',
                    Terrain: 'Flat to 15° slope',
                    Warranty: '5 year tool / 3 year battery',
                    Price: '$649',
                  },
                },
                {
                  productKey: 'greenworks-lawn-mower',
                  name: '60V 21" Brushless Self-Propelled',
                  badge: 'Best Value',
                  rating: 4.5,
                  specs: {
                    'Cutting Deck': '21 in',
                    Platform: '60V',
                    'Deck Material': 'Steel',
                    'Drive Type': 'Rear-wheel self-propelled',
                    'Runtime (est.)': '45-75 min (5Ah)',
                    Terrain: 'Flat to 10° slope',
                    Warranty: '4 year tool / 3 year battery',
                    Price: '$499',
                  },
                },
                {
                  productKey: 'greenworks-lawn-mower',
                  name: '40V 20" Push Mower',
                  badge: 'Budget',
                  rating: 4.3,
                  specs: {
                    'Cutting Deck': '20 in',
                    Platform: '40V',
                    'Deck Material': 'Plastic',
                    'Drive Type': 'Push (no self-propel)',
                    'Runtime (est.)': '30-45 min (5Ah)',
                    Terrain: 'Flat only',
                    Warranty: '4 year tool / 3 year battery',
                    Price: '$349',
                  },
                },
                {
                  productKey: 'greenworks-lawn-mower',
                  name: '80V 25" CrossoverT Ride-On',
                  badge: 'Ride-On',
                  rating: 4.4,
                  specs: {
                    'Cutting Deck': '42 in (ride-on)',
                    Platform: '80V Pro (6 batteries)',
                    'Deck Material': 'Steel',
                    'Drive Type': 'Ride-on',
                    'Runtime (est.)': '120-180 min',
                    Terrain: 'Up to 15° slope',
                    Warranty: '3 year tool / 3 year battery',
                    Price: '$4,499',
                  },
                },
                {
                  productKey: 'greenworks-lawn-mower',
                  name: '80V 42" ZT Zero-Turn',
                  badge: 'Zero-Turn',
                  rating: 4.5,
                  specs: {
                    'Cutting Deck': '42 in',
                    Platform: '80V Pro (6 batteries)',
                    'Deck Material': 'Steel',
                    'Drive Type': 'Zero-turn',
                    'Runtime (est.)': '120-150 min',
                    Terrain: 'Flat to 10° slope',
                    Warranty: '3 year tool / 3 year battery',
                    Price: '$5,499',
                  },
                },
              ]}
            />

            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The 80V Pro Platform: Greenworks&apos; Flagship
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                80V Pro is Greenworks&apos; commercial-grade battery
                platform. The headline number — 80 volts — translates to
                higher current delivery per ampere than 40V or 60V systems,
                which means motors can spin faster and handle thicker grass
                without slowing down. In practice, the 80V Pro 21-inch
                self-propelled mower cuts tall, wet grass the way a mid-size
                gas mower does: no slowdowns, no choking out, no need to
                raise the deck height and double-pass.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The platform now includes 40+ tools: mowers (push,
                self-propelled, zero-turn, ride-on), leaf blowers, string
                trimmers, hedge trimmers, pressure washers, snow blowers,
                chainsaws, and a power station accessory. All run on the
                same 80V Pro batteries. 2.5Ah, 4.0Ah, 5.0Ah, and 8.0Ah
                capacities. The 5.0Ah pack is the sweet spot for mower
                runtime: 60-90 minutes of cutting, enough for a standard
                suburban lot in one charge.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Build quality on the 80V Pro line matches the
                commercial-grade positioning. Steel decks, welded frame
                joints, double-wall rear discharge chutes, and grass-tolerant
                air intakes that don&apos;t clog the way early cordless
                mowers did. The 21-inch self-propelled model weighs about 75
                lbs — heavier than a consumer 40V mower, but the weight is
                what gives it the ability to mulch through heavy grass
                without deck bogging.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The CrossoverT: The First Real Battery Ride-On
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 80V CrossoverT ($4,499) is the product that separates
                Greenworks from EGO, Ryobi, and every other battery
                cordless brand: it&apos;s a real lawn tractor, not a
                self-propelled push-behind. It has a seat, steering wheel,
                42-inch cutting deck, headlights, a 300-lb pulling capacity,
                and six 80V Pro battery slots on board (batteries sold in
                the kit). Total onboard energy with six 8Ah packs is roughly
                12 kWh — in the same range as a Tesla Powerwall 2 for
                capacity, though not stored as efficiently.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Runtime at typical cutting load is 2-3 hours. That&apos;s
                enough for a 1-to-2 acre lot in one charge. For a 3+ acre
                lot you&apos;d need to rotate through extra batteries on a
                separate charger, feasible but awkward. Where the CrossoverT
                wins over gas: no fuel, no carburetor, no engine
                maintenance, no fumes when you mow at 9 AM on a Saturday.
                Where gas still wins: 4+ acre properties, continuous 4+
                hour mowing sessions, extreme heat where gas engines
                don&apos;t overheat.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At $4,499, the CrossoverT is priced below most gas
                lawn tractors in its class from Cub Cadet and Husqvarna.
                Factor in zero fuel costs, near-zero maintenance, and (for
                California buyers) potential AQMD commercial rebates, and
                the total cost of ownership closes the gap further.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The 80V ZT: Zero-Turn for Tight Properties
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 80V 42-inch ZT ($5,499) is the zero-turn sibling to the
                CrossoverT. It sacrifices the tow capacity and the riding
                tractor styling for true zero-turn maneuverability, the
                rear wheels rotate independently, allowing the mower to pivot
                in place. For properties with lots of obstacles (trees,
                planting beds, fences), zero-turn cuts your mowing time by
                30-50% vs. a conventional lawn tractor because you&apos;re
                not making multi-point turns around every obstacle.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The ZT runs the same six 80V Pro battery bay, 2-2.5 hour
                runtime, 42-inch deck. At $5,499 it&apos;s more expensive
                than the CrossoverT but still well under the $8,000+
                sticker for a comparable gas zero-turn from Toro or Gravely.
                For a California property manager running multiple
                residential or light commercial accounts, the ZT is the
                tool that makes battery-only viable.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The 60V Consumer Line: Best Value Battery Platform
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Greenworks 60V is the consumer-focused middle platform, 30+ tools, steel-deck mowers, brushless motors, priced
                between 80V Pro and 40V. For a typical homeowner on a
                quarter-acre to half-acre lot, 60V is the sensible choice.
                The flagship mower is the 60V 21-inch brushless
                self-propelled at $499, steel deck, rear-wheel drive,
                variable speed, 45-75 minute runtime on a 5Ah battery.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Other notable 60V tools: 24-inch hedge trimmer, 16-inch
                string trimmer, 730 CFM leaf blower, pressure washer, and
                several chainsaw options. Batteries are cheaper than 80V Pro
                packs: a 5Ah 60V battery retails around $199 vs. $349 for
                80V Pro. If you don&apos;t need commercial durability or the
                CrossoverT, 60V saves money on every tool.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The 40V Entry Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                40V is Greenworks&apos; entry-level platform, 50+ tools,
                plastic-deck mowers, mostly push (not self-propelled)
                lawn mower options. At $349 for the 40V 20-inch push
                mower, this is the cheapest way into a Greenworks battery
                mower. It&apos;s the right choice for a small suburban
                yard (under quarter-acre), a vacation home, or a buyer
                who already owns other 40V tools and wants to stay on the
                platform.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Plastic decks have real tradeoffs. They don&apos;t rust,
                they&apos;re lighter, and they cost less to manufacture.
                But they can crack if you hit a rock or stump, and they
                flex under load in ways a steel deck doesn&apos;t. For a
                lawn you know well with no buried obstacles, plastic is
                fine. For anything bigger than a quarter-acre or with
                unknown terrain, step up to 60V.
              </p>

              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Ready to buy?'
                verdict='Greenworks lawn mowers ship from Greenworks Tools Direct, Amazon, Lowes, and Costco. The 80V Pro and CrossoverT often see Costco pricing below MSRP.'
                source='greenworks-lawn-mower'
                variant='mid'
              />

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California CARB SORE and AQMD Rebates
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re in California, the Greenworks lineup is
                structurally well-positioned against the CARB SORE
                regulation:
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                CARB SORE Compliance
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Every Greenworks battery mower is zero-emission by design. they don&apos;t use gas, don&apos;t emit hydrocarbons, and
                don&apos;t require registration under SORE. Since January 1,
                2024, new gas lawn mowers under 25hp can no longer be sold
                in California. Commercial crews must replace their fleet
                over time with battery-electric equivalents. Greenworks 80V
                Pro is one of the strongest CARB-compliant pro-grade mower
                options available.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                South Coast AQMD Lawn Mower Exchange
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                South Coast AQMD (LA, Orange, Riverside, San Bernardino
                counties) has historically run the &quot;Lawn Mower Exchange
                Program&quot; and &quot;Commercial Lawn Care Equipment
                Exchange&quot; — rebates up to $1,000 per unit when
                commercial operators trade in working gas mowers for
                battery-electric. Greenworks 80V Pro mowers typically
                qualify. Residential programs have offered $50-$250 per
                unit when open. Funding varies year to year; check the
                latest round.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Other California Air Districts
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sacramento Metro AQMD, San Joaquin Valley APCD, Bay Area
                AQMD, and several smaller districts have run similar
                commercial replacement programs periodically. The
                &quot;Cleaner Lawn and Garden Equipment&quot; program at
                San Joaquin Valley is typically the largest outside of
                South Coast.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Greenworks vs EGO vs Ryobi
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The three main consumer battery mower brands each have a
                different strategic angle:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6 list-none'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>Greenworks</strong>: Commercial-grade construction,
                  steel decks, and the only real battery ride-on
                  (CrossoverT) and zero-turn (ZT). Best for California
                  commercial crews and large-property homeowners.
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>EGO Power+</strong>: Best cut quality in the
                  consumer class, strongest outdoor-only ecosystem (70+
                  tools on Arc Lithium 56V), 5-year warranty. Best for
                  homeowners who want the smoothest cordless experience and
                  will only own EGO outdoor tools.
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>Ryobi</strong>: Cheapest tier per tool, Home Depot
                  exclusive (great for parts/service), massive 18V One+
                  cross-compatibility with workshop tools. Best for
                  budget-conscious homeowners already on any Ryobi
                  platform.
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Pros and Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-500/10 dark:bg-green-950/20 border border-green-500/30 dark:border-green-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-green-300 dark:text-green-400 mb-3'>
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Steel decks across 80V Pro and most 60V mowers
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Only battery brand with real ride-on and
                      zero-turn options
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      80V Pro platform is the strongest CARB-compliant
                      commercial option
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Tool range spans $100 trimmers to $5,499 zero-turns
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Widely available: Amazon, Lowes, Costco, Greenworks
                      Direct
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Brushless motors on all flagship mowers
                    </li>
                  </ul>
                </div>
                <div className='bg-red-500/10 dark:bg-red-950/20 border border-red-500/30 dark:border-red-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-red-300 dark:text-red-400 mb-3'>
                    Cons
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      80V, 60V, 40V batteries NOT cross-compatible
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Platform fragmentation makes upgrading mid-stream
                      costly
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      EGO slightly edges on cut quality on matched 21"
                      comparison
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      80V Pro batteries are expensive ($349-$599 each)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      3-year warranty on ride-ons vs 5-year on most
                      push/self-propelled
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Should Buy Greenworks
              </h2>
              <ul className='space-y-2 text-foreground/80 mb-6 list-none'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>California commercial landscape crews</strong>{' '}
                    going CARB-compliant, 80V Pro is the strongest
                    pro-grade battery mower platform with steel deck and
                    commercial construction.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>1/2 to 2 acre property owners</strong> who
                    want a real battery ride-on or zero-turn, the
                    CrossoverT and ZT are the only serious options in
                    their price class.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Homeowners prioritizing steel deck
                    durability</strong> — Greenworks goes steel on almost
                    all push and self-propelled mowers above the entry
                    40V tier.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Buyers shopping Costco / Lowes</strong> where
                    Greenworks frequently has bundle discounts that EGO
                    and Ryobi don&apos;t match.
                  </span>
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    80V, 60V, and 40V batteries. Interchangeable?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    No. Three completely separate platforms. Pick one and
                    commit.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is the CrossoverT a real gas ride-on alternative?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    For 1/2 to 2 acre lots, yes. 2-3 hour runtime, 42"
                    deck, 15-degree slopes, 300 lb tow. At $4,499,
                    cheaper than most gas lawn tractors.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    California rebates available?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    South Coast AQMD, Sacramento Metro, San Joaquin Valley
                    have run exchange programs including Greenworks
                    mowers. $50-$1,000 depending on commercial vs
                    residential. Check yearly.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    CARB compliant?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. All battery Greenworks mowers are zero-emission
                    and fully CARB SORE compliant. 80V Pro is the pick
                    for commercial crews.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Steel or plastic deck — does it matter?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Steel lasts a decade+, handles rocks, re-paintable.
                    Plastic is lighter, cheaper, no rust, but cracks on
                    impact. Steel for 5+ year buys.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Greenworks vs EGO vs Ryobi?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    EGO for cut quality and outdoor ecosystem. Ryobi for
                    price and Home Depot. Greenworks for commercial
                    durability and the ride-on/zero-turn flagships.
                  </p>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Greenworks is the battery lawn mower brand with the deepest
                product range, from $349 entry push mowers to $5,499
                zero-turn ride-ons. The 80V Pro platform is the strongest
                CARB-compliant pro mower lineup on the market, and the
                CrossoverT is the first real battery ride-on that can
                legitimately replace a gas lawn tractor on a 1-to-2 acre
                property. The weakness is the three incompatible battery
                platforms — choose carefully and stick with it. For most
                homeowners, 60V is the right balance. For commercial crews,
                80V Pro is the obvious call. For weekend-only tiny yards,
                40V works. Either way, Greenworks is the only brand
                spanning every category from push mower to zero-turn with
                serious CARB-compliant hardware.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Final Verdict'
              verdict='If you need a battery mower for anything from a quarter-acre lot to a two-acre property, Greenworks has the widest lineup. Check current pricing across 80V Pro, 60V, and 40V.'
              source='greenworks-lawn-mower'
              variant='final'
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See how Greenworks compares to EGO, Ryobi, DeWalt, and
                Milwaukee in our full electric lawn mower ranking.
              </p>
              <Link
                href='/reviews/best-electric-lawn-mower'
                className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
              >
                See The Full Ranking
                <ChevronRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/best-electric-lawn-mower'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <Home className='h-4 w-4' />
                All Lawn Mowers
              </Link>
              <Link
                href='/reviews'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                All Reviews
                <ChevronRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source='greenworks-lawn-mower' />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
