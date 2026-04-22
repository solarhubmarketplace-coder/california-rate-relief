import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
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
    'Ryobi 40V HP Brushless 21" Self-Propelled Lawn Mower Review: Best Budget Electric Mower in 2026?',
  description:
    'In-depth Ryobi 40V HP Brushless 21-inch self-propelled lawn mower review covering cut quality, battery runtime (48 min), the 40V platform ecosystem with 40+ tools, LED headlights, and budget value vs EGO and Greenworks. 4.4/5 rating.',
  alternates: {
    canonical: '/reviews/ryobi-40v-lawn-mower-review',
  },
  openGraph: {
    title:
      'Ryobi 40V HP Brushless 21" Self-Propelled Lawn Mower Review: Best Budget Electric Mower in 2026?',
    description:
      'Detailed review of the Ryobi 40V HP Brushless self-propelled mower — 21-inch steel deck, 3-in-1 mulch/bag/side discharge, rear wheel drive, LED headlights, cross-cut capability. Is it worth $399?',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Ryobi 40V HP Brushless 21" Self-Propelled Lawn Mower Review: Best Budget Electric Mower in 2026?',
  description:
    'In-depth review of the Ryobi 40V HP Brushless self-propelled mower covering cut quality, battery performance, the Ryobi 40V platform, and value compared to EGO and Greenworks.',
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
    '@id': 'https://ratereliefca.com/reviews/ryobi-40v-lawn-mower-review',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Ryobi 40V HP Brushless 21" Self-Propelled Lawn Mower Review',
  reviewBody:
    'The Ryobi 40V HP Brushless 21-inch self-propelled mower is the best electric lawn mower under $400 in 2026. It delivers solid cut quality with a 21-inch steel deck, up to 48 minutes of runtime on the included 6.0Ah battery, variable-speed rear wheel drive self-propulsion, LED headlights for evening mowing, and cross-cut capability. At $399 with battery and charger, it undercuts the EGO Select Cut by $400 while covering 1/4 acre yards on a single charge. It plugs into the Ryobi 40V platform with 40+ compatible outdoor tools.',
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
    name: 'Ryobi 40V HP Brushless 21" Self-Propelled Lawn Mower',
    brand: {
      '@type': 'Brand',
      name: 'Ryobi',
    },
    description:
      '21-inch self-propelled electric lawn mower with 40V HP brushless motor, 6.0Ah battery, rear wheel drive, LED headlights, 3-in-1 mulch/bag/side discharge, and foldable handle.',
    offers: {
      '@type': 'Offer',
      price: '399',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.4',
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
      name: 'How long does the Ryobi 40V lawn mower run on a single charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With the included 6.0Ah battery, the Ryobi 40V HP Brushless mower runs for up to 48 minutes. Real-world runtime on average suburban grass is typically 35-45 minutes depending on grass thickness, self-propelled speed, and whether you are mulching or bagging. That comfortably covers most 1/4 acre yards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Ryobi 40V mower battery compatible with other Ryobi tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The 40V 6.0Ah battery works with all 40+ tools in the Ryobi 40V platform, including string trimmers, leaf blowers, hedge trimmers, chainsaws, and pressure washers. If you already own Ryobi 40V tools, you can buy the mower as tool-only and use your existing batteries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Ryobi 40V mower handle thick or wet grass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The HP brushless motor delivers more torque than standard brushed motors, so it handles moderately thick grass well. For very thick or wet grass, raise the cut height and make two passes. It will not match the raw cutting power of a premium mower like the EGO Select Cut with its high-lift blade, but for regular weekly mowing it performs reliably.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Ryobi 40V mower compare to the EGO Select Cut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EGO Select Cut XP ($799) has a larger battery (10.0Ah vs 6.0Ah), longer runtime (60 vs 48 min), the multi-blade Select Cut system, and a bigger tool ecosystem (70+ vs 40+ tools). The Ryobi ($399) costs half as much, weighs 20 lbs less, and adds LED headlights and cross-cut capability. For budget-conscious homeowners with 1/4 acre yards, the Ryobi delivers 85% of the performance at 50% of the price.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Ryobi 40V self-propelled mower work on hills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The variable-speed rear wheel drive handles moderate slopes well. You can increase the speed for uphill sections and slow it down for flat areas. At 57 lbs with battery, it is lighter than many competitors, which makes it easier to maneuver on inclines. For very steep hills, the lighter weight is actually an advantage over heavier mowers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the cross-cut feature do on the Ryobi mower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cross-cut capability means the mower can cut in both forward and reverse directions. This is useful for tight spots, corners, and areas where you need to back up and re-cut without lifting the mower. It saves time on complex lawn layouts with flower beds, trees, and obstacles.',
      },
    },
  ],
};

export default function Ryobi40VLawnMowerReview() {
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
                Ryobi 40V HP Brushless
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Ryobi 40V HP Brushless 21&quot; Self-Propelled Mower Review: Best
                Budget Electric Mower in 2026?
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-21'>April 21, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>11 min read</span>
                </div>
              </div>
            </header>

            {/* Quick Verdict */}
            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  Quick Verdict
                </h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.4</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                The Ryobi 40V HP Brushless is the electric mower that proves you
                don&apos;t need to spend $700+ to ditch gas. At $399 with battery
                and charger, it delivers a clean 21-inch cut, reliable
                self-propulsion, 48 minutes of runtime, and features like LED
                headlights and cross-cut capability that pricier mowers skip. It
                won&apos;t match the EGO Select Cut on raw power or runtime, but
                for budget-conscious homeowners with 1/4 acre yards, it hits the
                sweet spot between price and performance that no other mower
                touches.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Budget-conscious homeowners under $400
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      1/4 acre yards with standard grass conditions
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Anyone already invested in the Ryobi 40V platform
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
                      Yards over 1/3 acre (runtime limitation)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Frequently thick or wet grass (need more power)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Lawn perfectionists who want multi-blade systems
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overview */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Overview: The $399 Sweet Spot
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The electric mower market has a gap. Below $300, you get
                push mowers with brushed motors and short battery life. Above
                $600, you get premium machines like the EGO Select Cut with
                features most homeowners will never fully use. The Ryobi 40V HP
                Brushless sits right in the middle — and that&apos;s exactly
                where most buyers should be looking.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                At $399, you get a brushless motor (more efficient, longer
                lifespan than brushed), self-propelled rear wheel drive, a
                21-inch steel deck, 3-in-1 functionality (mulch, bag, side
                discharge), LED headlights, cross-cut capability, and a 6.0Ah
                battery with charger. That feature list would have been
                unthinkable at this price two years ago.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                Ryobi has always been the value play in power tools, and their
                40V outdoor lineup follows the same playbook: give homeowners
                90% of the performance at 50-60% of the premium price. This
                mower is the clearest expression of that strategy.
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
                        $399 (with 6.0Ah battery + charger)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Motor
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        40V HP Brushless
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
                        40V 6.0Ah (Ryobi ONE+ 40V platform)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Clock className='h-4 w-4 text-primary' />
                        Runtime
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Up to 48 minutes (6.0Ah battery)
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
                        1.5&quot; - 4&quot; (7 positions)
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
                        ~57 lbs (with battery)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Sun className='h-4 w-4 text-primary' />
                        LED Headlights
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Yes — front-mounted for low-light mowing
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Cross-Cut
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Yes — cuts in forward and reverse
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
                        Ryobi 40V — 40+ compatible outdoor tools
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cut Quality */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Cut Quality: Punching Above Its Weight
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The HP (High Performance) brushless motor is the key upgrade
                over Ryobi&apos;s standard 40V mowers. Brushless motors deliver
                more torque per watt, generate less heat, and last significantly
                longer than brushed alternatives. In practical terms, the blade
                spins faster and maintains RPM better under load — meaning it
                doesn&apos;t bog down when you hit a thick patch.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The 21-inch steel deck provides a clean, even cut across all
                seven height positions (1.5&quot; to 4&quot;). For standard
                weekly mowing on Bermuda, fescue, or Kentucky bluegrass, the cut
                quality is genuinely good — not &quot;good for the price,&quot;
                just good. Stripes are clean, edges are sharp, and the deck
                clears clippings efficiently.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The 3-in-1 system gives you flexibility based on conditions.
                Mulching works well for regular dry mowing — clippings are
                chopped fine enough to disappear into the lawn. Bagging is solid
                for overgrown grass or fall cleanup. Side discharge handles those
                rare situations where you just need to get through tall growth
                quickly without clogging.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                Where it falls short compared to the EGO Select Cut is on thick,
                wet grass. Without a dedicated high-lift blade option, the Ryobi
                can clump in heavy conditions. The solution is simple — mow more
                frequently or raise the height and make two passes — but it is a
                real limitation if your lawn grows fast in spring.
              </p>
            </section>

            {/* Battery & Runtime */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Battery and Runtime
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The included 6.0Ah 40V battery provides up to 48 minutes of
                runtime per Ryobi&apos;s rating. Real-world numbers depend on
                conditions, but here is what you can expect:
              </p>
              <div className='bg-card border border-border rounded-xl p-5 mb-4'>
                <h3 className='text-lg font-semibold text-foreground mb-3'>
                  Real-World Runtime by Condition
                </h3>
                <div className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-foreground/80'>Light weekly mowing (dry)</span>
                    <div className='flex items-center gap-2'>
                      <div className='w-32 h-2 bg-muted rounded-full overflow-hidden'>
                        <div className='h-full bg-green-500 rounded-full' style={{ width: '100%' }} />
                      </div>
                      <span className='text-sm font-medium text-foreground'>42-48 min</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-foreground/80'>Average suburban lawn</span>
                    <div className='flex items-center gap-2'>
                      <div className='w-32 h-2 bg-muted rounded-full overflow-hidden'>
                        <div className='h-full bg-blue-500 rounded-full' style={{ width: '80%' }} />
                      </div>
                      <span className='text-sm font-medium text-foreground'>35-42 min</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-foreground/80'>Thick / overgrown grass</span>
                    <div className='flex items-center gap-2'>
                      <div className='w-32 h-2 bg-muted rounded-full overflow-hidden'>
                        <div className='h-full bg-yellow-500 rounded-full' style={{ width: '60%' }} />
                      </div>
                      <span className='text-sm font-medium text-foreground'>28-35 min</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                For a typical 1/4 acre suburban lawn mowed weekly, the 6.0Ah
                battery is sufficient. You will finish with runtime to spare.
                Push beyond 1/3 acre or let the grass get overgrown, and
                you&apos;ll be watching the battery indicator more than the lawn.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Charging takes roughly 90 minutes from empty to full with the
                included charger. That is slower than EGO&apos;s rapid charger
                (40 minutes), but perfectly fine if you charge overnight or
                between mowing sessions. If you need more runtime, a second
                6.0Ah battery runs about $130 — and that battery also powers
                every other tool in the Ryobi 40V lineup.
              </p>
              <div className='bg-primary/5 border border-primary/20 rounded-xl p-5'>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  Battery Tip
                </h3>
                <p className='text-sm text-foreground/80 leading-relaxed'>
                  The brushless motor is noticeably more battery-efficient than
                  the brushed motor in Ryobi&apos;s cheaper 40V mowers. If
                  you&apos;re choosing between the HP Brushless and the standard
                  brushed model, the extra runtime per charge alone justifies the
                  price difference — you get roughly 15-20% more mowing time
                  from the same battery.
                </p>
              </div>
            </section>

            {/* Ryobi 40V Platform */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                The Ryobi 40V Platform: 40+ Tools, One Battery
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Ryobi&apos;s biggest advantage isn&apos;t any single product —
                it&apos;s the platform. The 40V battery system powers over 40
                outdoor tools, and Ryobi&apos;s exclusive partnership with The
                Home Depot means everything is readily available and competitively
                priced. This mower is an entry point into that ecosystem.
              </p>
              <div className='grid md:grid-cols-2 gap-3 mb-4'>
                <div className='bg-card border border-border rounded-lg p-4'>
                  <h4 className='text-sm font-semibold text-foreground mb-2'>Yard Essentials</h4>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      String trimmers and edgers
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Jet fan leaf blowers (550+ CFM)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Hedge trimmers
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Pole saws and pruners
                    </li>
                  </ul>
                </div>
                <div className='bg-card border border-border rounded-lg p-4'>
                  <h4 className='text-sm font-semibold text-foreground mb-2'>Beyond the Lawn</h4>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      14-inch chainsaw
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Snow blower (20-inch)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Pressure washer (1,500 PSI)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Expand-It attachment system
                    </li>
                  </ul>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The Expand-It attachment system deserves special mention. One
                power head accepts multiple attachments — trimmer, edger, pole
                saw, cultivator, and more — so you buy one motor and swap
                attachments as needed. It&apos;s the most cost-effective way to
                build out a full yard care toolkit.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                Compared to EGO&apos;s 70+ tool ecosystem, Ryobi&apos;s 40+
                tools is smaller on paper. But Ryobi&apos;s tools are
                consistently 30-50% cheaper, and for typical homeowner use
                (not commercial landscaping), the performance gap is minimal.
                You&apos;re getting a reliable tool ecosystem at a price that
                makes it practical to actually buy multiple tools.
              </p>
            </section>

            {/* Standout Features */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Standout Features at This Price
              </h2>
              <div className='space-y-4'>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center'>
                      <Sun className='h-5 w-5 text-yellow-500' />
                    </div>
                    <h3 className='text-lg font-semibold text-foreground'>
                      LED Headlights
                    </h3>
                  </div>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Front-mounted LEDs let you mow in low-light conditions —
                    early morning, late evening, or overcast days. This is a
                    feature that many $600+ mowers skip entirely. For California
                    homeowners mowing after work during shorter winter days, it
                    extends your usable mowing window by a couple hours. Since
                    electric mowers are quiet enough for evening use, the
                    headlights actually matter.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center'>
                      <ArrowRight className='h-5 w-5 text-blue-500' />
                    </div>
                    <h3 className='text-lg font-semibold text-foreground'>
                      Cross-Cut Capability
                    </h3>
                  </div>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The blade cuts in both forward and reverse, which sounds
                    minor until you use it. In tight corners, around flower beds,
                    and near fence lines, being able to back up and re-cut
                    without repositioning the entire mower saves real time. It
                    also means you can do quick touch-ups without turning around
                    for another full pass.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center'>
                      <Shield className='h-5 w-5 text-green-500' />
                    </div>
                    <h3 className='text-lg font-semibold text-foreground'>
                      Foldable Handle
                    </h3>
                  </div>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The handle folds down for vertical storage, reducing the
                    mower&apos;s footprint dramatically. In a crowded garage or
                    small shed, this is the difference between the mower fitting
                    and not fitting. It also makes it easier to load into a car
                    trunk if you mow at a second property.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison: vs EGO vs Greenworks */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Ryobi 40V vs EGO Select Cut vs Greenworks 80V
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The three main contenders in the self-propelled electric mower
                space. Here is how they stack up:
              </p>
              <div className='overflow-x-auto mb-4'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>Feature</th>
                      <th className='px-4 py-3 text-left font-semibold text-primary'>Ryobi 40V HP</th>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>EGO Select Cut XP</th>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>Greenworks 80V 21&quot;</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-4 py-3 text-foreground/80'>Price (kit)</td>
                      <td className='px-4 py-3 text-primary font-medium'>$399</td>
                      <td className='px-4 py-3 text-foreground/80'>$799</td>
                      <td className='px-4 py-3 text-foreground/80'>$499</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 text-foreground/80'>Motor</td>
                      <td className='px-4 py-3 text-foreground/80'>40V HP Brushless</td>
                      <td className='px-4 py-3 text-foreground/80'>56V Brushless</td>
                      <td className='px-4 py-3 text-foreground/80'>80V Brushless</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 text-foreground/80'>Battery</td>
                      <td className='px-4 py-3 text-foreground/80'>6.0Ah</td>
                      <td className='px-4 py-3 text-foreground/80'>10.0Ah</td>
                      <td className='px-4 py-3 text-foreground/80'>4.0Ah</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 text-foreground/80'>Runtime</td>
                      <td className='px-4 py-3 text-foreground/80'>48 min</td>
                      <td className='px-4 py-3 text-foreground/80'>60 min</td>
                      <td className='px-4 py-3 text-foreground/80'>45 min</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 text-foreground/80'>Deck</td>
                      <td className='px-4 py-3 text-foreground/80'>21&quot; steel</td>
                      <td className='px-4 py-3 text-foreground/80'>21&quot; steel</td>
                      <td className='px-4 py-3 text-foreground/80'>21&quot; steel</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 text-foreground/80'>Self-Propelled</td>
                      <td className='px-4 py-3 text-foreground/80'>Rear wheel, variable</td>
                      <td className='px-4 py-3 text-foreground/80'>Rear wheel, variable</td>
                      <td className='px-4 py-3 text-foreground/80'>Rear wheel, variable</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 text-foreground/80'>Weight</td>
                      <td className='px-4 py-3 text-primary font-medium'>~57 lbs</td>
                      <td className='px-4 py-3 text-foreground/80'>77.2 lbs</td>
                      <td className='px-4 py-3 text-foreground/80'>~63 lbs</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 text-foreground/80'>LED Headlights</td>
                      <td className='px-4 py-3 text-primary font-medium'>Yes</td>
                      <td className='px-4 py-3 text-foreground/80'>No</td>
                      <td className='px-4 py-3 text-foreground/80'>No</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 text-foreground/80'>Cross-Cut</td>
                      <td className='px-4 py-3 text-primary font-medium'>Yes</td>
                      <td className='px-4 py-3 text-foreground/80'>No</td>
                      <td className='px-4 py-3 text-foreground/80'>No</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 text-foreground/80'>Blade System</td>
                      <td className='px-4 py-3 text-foreground/80'>Standard single</td>
                      <td className='px-4 py-3 text-foreground/80'>Select Cut (3 blades)</td>
                      <td className='px-4 py-3 text-foreground/80'>Standard single</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 text-foreground/80'>Platform Tools</td>
                      <td className='px-4 py-3 text-foreground/80'>40+</td>
                      <td className='px-4 py-3 text-foreground/80'>70+</td>
                      <td className='px-4 py-3 text-foreground/80'>30+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='space-y-4'>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-base font-semibold text-foreground mb-2'>
                    Ryobi vs EGO: The Value Argument
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The EGO Select Cut XP is objectively a better mower — bigger
                    battery, longer runtime, the multi-blade system, a larger tool
                    ecosystem. But it costs exactly twice as much. The question is
                    whether those upgrades are worth $400 to you. If you have a
                    large yard, deal with tough grass regularly, or already own EGO
                    tools, yes. If you have a standard 1/4 acre lawn and mow
                    weekly, the Ryobi gets the job done for half the money.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <h3 className='text-base font-semibold text-foreground mb-2'>
                    Ryobi vs Greenworks: The Closest Match
                  </h3>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The Greenworks 80V sits between Ryobi and EGO on price ($499)
                    and offers a higher voltage motor. However, the Ryobi counters
                    with LED headlights, cross-cut capability, a larger battery
                    capacity (6.0Ah vs 4.0Ah), lighter weight, and a bigger tool
                    platform. The Greenworks 80V has more raw cutting power, but
                    the Ryobi has more features and better battery life at a lower
                    price. For most homeowners, the Ryobi is the smarter buy.
                  </p>
                </div>
              </div>
            </section>

            {/* Budget Analysis */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Budget Analysis: 5-Year Cost of Ownership
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The upfront price tells only part of the story. Here is what the
                Ryobi 40V actually costs to own versus a comparable gas mower
                over five years:
              </p>
              <div className='bg-card border border-border rounded-xl p-5 mb-4'>
                <div className='space-y-4'>
                  <div>
                    <div className='flex items-center justify-between mb-2'>
                      <h4 className='text-sm font-semibold text-primary'>
                        Ryobi 40V HP Brushless
                      </h4>
                      <span className='text-sm font-bold text-primary'>~$440 total</span>
                    </div>
                    <ul className='text-xs text-foreground/80 space-y-1'>
                      <li className='flex justify-between'>
                        <span>Mower (with battery + charger)</span>
                        <span>$399</span>
                      </li>
                      <li className='flex justify-between'>
                        <span>Electricity (5 years)</span>
                        <span>~$15</span>
                      </li>
                      <li className='flex justify-between'>
                        <span>Replacement blade (year 3)</span>
                        <span>~$25</span>
                      </li>
                      <li className='flex justify-between'>
                        <span>Oil, gas, spark plugs, filters</span>
                        <span>$0</span>
                      </li>
                    </ul>
                  </div>
                  <div className='border-t border-border pt-4'>
                    <div className='flex items-center justify-between mb-2'>
                      <h4 className='text-sm font-semibold text-foreground'>
                        Comparable Gas Self-Propelled
                      </h4>
                      <span className='text-sm font-bold text-foreground'>~$700-900 total</span>
                    </div>
                    <ul className='text-xs text-foreground/80 space-y-1'>
                      <li className='flex justify-between'>
                        <span>Mower</span>
                        <span>$350-450</span>
                      </li>
                      <li className='flex justify-between'>
                        <span>Gas (5 years, ~3 gal/season)</span>
                        <span>~$90-120</span>
                      </li>
                      <li className='flex justify-between'>
                        <span>Oil changes (annual)</span>
                        <span>~$50</span>
                      </li>
                      <li className='flex justify-between'>
                        <span>Spark plugs, air filters, tune-ups</span>
                        <span>~$80-120</span>
                      </li>
                      <li className='flex justify-between'>
                        <span>Blade sharpening or replacement</span>
                        <span>~$60-80</span>
                      </li>
                      <li className='flex justify-between'>
                        <span>Carburetor service (year 3-4)</span>
                        <span>~$50-80</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed'>
                Over five years, the Ryobi saves $260-460 in total ownership
                costs compared to a gas equivalent. And that doesn&apos;t factor
                in your time — no gas station trips, no oil disposal, no
                winterization, no pulling a starter cord 15 times on a cold
                morning. The maintenance for the Ryobi is effectively: charge
                the battery and replace the blade every 2-3 years. That&apos;s
                it.
              </p>
            </section>

            {/* Pros & Cons */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Pros and Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='bg-green-500/5 border border-green-500/20 rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-3 flex items-center gap-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Best value self-propelled electric mower at $399
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      HP brushless motor — more torque and longer life
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      LED headlights for low-light mowing
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Cross-cut capability saves time in tight areas
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Only ~57 lbs — lightest in its class
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      40+ tool Ryobi 40V platform compatibility
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      3-in-1: mulch, bag, or side discharge
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Foldable handle for compact garage storage
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Zero maintenance — no gas, oil, or tune-ups
                    </li>
                  </ul>
                </div>
                <div className='bg-red-500/5 border border-red-500/20 rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-3 flex items-center gap-2'>
                    <XCircle className='h-5 w-5 text-red-500' />
                    Cons
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      48-min runtime limits yard size to ~1/4 acre
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Struggles with very thick or wet grass
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Single blade — no multi-blade system like EGO
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Charger is slower (90 min vs EGO&apos;s 40 min)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Bag is average size — fills quickly when bagging
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      No app or Bluetooth connectivity
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Plastic deck components feel less premium
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Final Verdict */}
            <section className='mb-10'>
              <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8'>
                <div className='flex items-center gap-3 mb-4'>
                  <h2 className='text-2xl font-bold text-foreground'>
                    Final Verdict
                  </h2>
                  <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                    <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                    <span className='font-bold text-foreground'>4.4</span>
                    <span className='text-muted-foreground text-sm'>/ 5</span>
                  </div>
                </div>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  The Ryobi 40V HP Brushless is the electric mower we recommend
                  for budget-conscious homeowners. At $399, it delivers the core
                  features that matter — brushless motor, self-propelled drive,
                  21-inch steel deck, 3-in-1 versatility — and adds LED
                  headlights and cross-cut capability that pricier competitors
                  skip. The Ryobi 40V platform gives you an affordable path to
                  replace every gas tool in your garage.
                </p>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  It is not the most powerful electric mower. The 48-minute
                  runtime and single blade system mean it is best suited for 1/4
                  acre yards with regular weekly mowing. If you have a larger
                  yard, deal with tough grass frequently, or want the absolute
                  best cut quality, the EGO Select Cut XP at $799 is worth the
                  upgrade. But for the majority of suburban homeowners who just
                  want to mow their lawn efficiently without gas-engine hassle,
                  the Ryobi hits the perfect balance of price and performance.
                </p>
                <p className='text-foreground/80 leading-relaxed mb-6'>
                  Bottom line: if your budget is under $400 and your yard is
                  under 1/3 acre, this is the self-propelled electric mower to
                  buy in 2026.
                </p>
                <a
                  href='#'
                  className='inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors'
                >
                  Check Current Price
                  <ArrowRight className='h-4 w-4' />
                </a>
              </div>
            </section>

            {/* FAQ Section */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-6'>
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
                    Full comparison of the top electric mowers including Ryobi,
                    EGO, Greenworks, and more.
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

            {/* Affiliate Disclosure */}
            <div className='border-t border-border pt-6 text-xs text-muted-foreground leading-relaxed'>
              <p>
                <strong className='text-foreground/60'>Affiliate Disclosure:</strong>{' '}
                GreenVerdict may earn a commission if you purchase through links on
                this page. This does not affect our editorial independence — all
                opinions are our own and we only recommend products we believe
                deliver genuine value.
              </p>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
