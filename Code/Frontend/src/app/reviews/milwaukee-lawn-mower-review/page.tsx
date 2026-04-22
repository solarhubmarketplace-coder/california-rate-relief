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
    'Milwaukee M18 FUEL Brushless Self-Propelled Lawn Mower Review (2026): Pro-Grade Power for Your Yard',
  description:
    'In-depth Milwaukee M18 FUEL brushless self-propelled lawn mower review covering the 18V/36V dual-battery system, cutting performance, runtime, build quality, and the 250+ tool M18 platform. Honest comparison vs EGO, Greenworks, Ryobi, and DeWalt. 4.4/5 rating.',
  alternates: {
    canonical: '/reviews/milwaukee-lawn-mower-review',
  },
  openGraph: {
    title:
      'Milwaukee M18 FUEL Brushless Self-Propelled Lawn Mower Review (2026): Pro-Grade Power for Your Yard',
    description:
      'Detailed review of the Milwaukee M18 FUEL 21-inch self-propelled mower — dual M18 batteries (36V combined), brushless POWERSTATE motor, steel deck, 3-in-1 discharge, and the 250+ tool M18 ecosystem. Is it worth $599-$799?',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Milwaukee M18 FUEL Brushless Self-Propelled Lawn Mower Review (2026): Pro-Grade Power for Your Yard',
  description:
    'In-depth review of the Milwaukee M18 FUEL Brushless Self-Propelled Mower covering the dual-battery 36V architecture, POWERSTATE motor performance, runtime across conditions, and the 250+ tool M18 ecosystem.',
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
    '@id': 'https://ratereliefca.com/reviews/milwaukee-lawn-mower-review',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Milwaukee M18 FUEL Brushless Self-Propelled Lawn Mower Review',
  reviewBody:
    'The Milwaukee M18 FUEL Self-Propelled Mower is a 21-inch brushless electric mower built on the M18 platform that professional tradespeople already know. It runs two M18 HIGH OUTPUT batteries in series for 36V of combined power, features the POWERSTATE brushless motor for consistent blade speed under load, and delivers 40-50 minutes of real-world runtime with the included 12.0Ah batteries. At $599-$799 depending on kit configuration, it competes directly with DeWalt and sits just below the EGO Select Cut XP. Its killer advantage is ecosystem: 250+ M18 tools share batteries. The trade-off is that 36V cannot match the raw torque of 56V and 80V competitors in the thickest grass.',
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
    name: 'Milwaukee M18 FUEL 21-Inch Brushless Self-Propelled Lawn Mower',
    brand: {
      '@type': 'Brand',
      name: 'Milwaukee',
    },
    description:
      '21-inch self-propelled electric lawn mower with dual M18 HIGH OUTPUT batteries (36V combined), POWERSTATE brushless motor, rear wheel drive, 3-in-1 mulch/bag/side discharge, 7-position height adjustment, and steel deck.',
    offers: {
      '@type': 'Offer',
      price: '599',
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
      name: 'How long does the Milwaukee M18 FUEL lawn mower run on a single charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With the included two M18 HIGH OUTPUT 12.0Ah batteries running in series, the Milwaukee M18 FUEL mower delivers up to 60 minutes under ideal conditions (thin, dry grass at moderate height). Real-world runtime is typically 40-50 minutes depending on grass thickness, moisture, self-propelled speed, and terrain. That comfortably covers 1/4 to 1/2 acre before you need a battery swap.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use my existing Milwaukee M18 batteries in the lawn mower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Milwaukee M18 FUEL mower accepts any M18 battery. However, for practical mowing runtime you want at least 8.0Ah or 12.0Ah HIGH OUTPUT batteries. Using smaller M18 packs like 2.0Ah or 5.0Ah will technically work but may only give you 10-20 minutes of runtime, making them unsuitable for anything beyond quick touch-ups. The HIGH OUTPUT line specifically is optimized for high-draw tools like the mower.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Milwaukee lawn mower 18V or 36V?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The mower uses two M18 batteries wired in series, delivering 36V of total power to the POWERSTATE brushless motor. Milwaukee brands everything under the M18 name for ecosystem consistency, but the mower operates at 36V equivalent. This is a similar approach to DeWalt using dual 20V batteries for 40V operation. The platform voltage is a naming convention — the mower gets more power than a single 18V battery provides.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Milwaukee mower compare to the EGO Select Cut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EGO Select Cut XP ($799) offers the multi-blade Select Cut system, 56V power for better performance in thick grass, and slightly more torque. The Milwaukee ($599-$799) matches it on build quality, features the POWERSTATE motor for consistent performance under load, and plugs into the 250+ tool M18 ecosystem. If you already own Milwaukee M18 batteries and have a medium yard, the Milwaukee is the better value. If raw cutting power in thick conditions is the priority and you do not own either platform, the EGO wins on mowing alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Milwaukee M18 FUEL mower handle thick or wet grass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The POWERSTATE brushless motor handles moderately thick grass well, maintaining blade speed better than many competitors at similar voltage. However, very tall grass (6+ inches) or wet conditions will reduce performance and runtime. For best results in thick conditions, raise the deck height and make two passes. The EGO 56V and Greenworks 80V mowers handle heavy grass with less effort due to their higher voltage motors, but the Milwaukee holds its own better than its 36V spec might suggest thanks to the POWERSTATE motor design.',
      },
    },
    {
      '@type': 'Question',
      name: 'What warranty does Milwaukee offer on the lawn mower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Milwaukee backs the M18 FUEL mower with a 5-year limited warranty on the tool and a 3-year warranty on the batteries. This matches the industry leaders (EGO and DeWalt both offer 5-year tool / 3-year battery). The Milwaukee warranty is backed by their professional tool reputation and their extensive service network, which some users prefer over consumer-focused brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Milwaukee M18 FUEL mower worth the price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your existing tool investment. If you already own M18 batteries (especially HIGH OUTPUT 8.0Ah or 12.0Ah packs), the tool-only price around $399-$449 makes the Milwaukee one of the best values in the electric mower market. If you are buying into a new platform from scratch, the $599-$799 kit price is competitive with DeWalt and slightly below the EGO Select Cut XP. The Milwaukee makes the most sense for M18 platform owners with yards under 1/2 acre.',
      },
    },
  ],
};

export default function MilwaukeeLawnMowerReview() {
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
      <main className='min-h-screen' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4 py-16'>
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
                Milwaukee M18 FUEL Mower
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Milwaukee M18 FUEL Brushless Self-Propelled Lawn Mower Review:
                Pro-Grade Power for Your Yard
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-21'>April 21, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>16 min read</span>
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
                The Milwaukee M18 FUEL Self-Propelled Mower brings the same
                build quality and engineering discipline that made Milwaukee the
                dominant force in professional power tools — and applies it to
                your lawn. The POWERSTATE brushless motor delivers more
                consistent blade speed under load than the raw voltage number
                would suggest, the 21-inch steel deck is built to take abuse,
                and the dual M18 HIGH OUTPUT battery system provides 40-50
                minutes of real-world runtime. At $599 for the base kit, it
                matches DeWalt on price and undercuts the EGO Select Cut XP by
                $200. The ecosystem play is the real story: 250+ M18 tools share
                batteries, making this the smartest buy for anyone already
                invested in Milwaukee. If you are starting from zero and only
                care about mowing performance, the EGO still edges it out — but
                the gap is narrower than the voltage difference suggests.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Existing Milwaukee M18 battery owners
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Small to medium lawns (1/4 to 1/2 acre)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Anyone who values pro-grade build quality and durability
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Tradespeople who want one battery platform for work and home
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
                      Yards over 1/2 acre (runtime limits without spare batteries)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Consistently thick, tall, or wet grass
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Budget shoppers (Ryobi 40V is $200+ less)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

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
                        <Shield className='h-4 w-4 text-primary' />
                        Model
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Milwaukee M18 FUEL 21&quot; Self-Propelled Mower
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <DollarSign className='h-4 w-4 text-primary' />
                        Price
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        $399-$449 (tool only) / $599-$799 (with batteries + charger)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Motor
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        POWERSTATE Brushless (dual M18 = 36V combined)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Star className='h-4 w-4 text-primary' />
                        Deck Size
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        21-inch steel deck
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Battery className='h-4 w-4 text-primary' />
                        Battery
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        2x M18 HIGH OUTPUT 12.0Ah lithium-ion (36V series configuration)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Clock className='h-4 w-4 text-primary' />
                        Runtime
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Up to 60 min (rated) / 40-50 min (real-world)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Cut Height
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        1&quot; - 4&quot; (7 positions, single-lever adjust)
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
                        Discharge
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        3-in-1: mulch, rear bag (1.9 bushel), side discharge
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Weight
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~67 lbs (with batteries)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Noise Level
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~65 dB (vs 90+ dB gas)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Warranty
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        5-year tool / 3-year battery
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Platform
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        250+ Milwaukee M18 tools (drills, impacts, saws, trimmers, blowers, etc.)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Overview */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Overview: The Professional&apos;s Mower
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Milwaukee is a professional tool company first. They built
                their reputation on job sites — drills, impacts, saws, and
                lights that contractors beat on daily and expect to keep
                working. The M18 platform is the foundation: 250+ tools, one
                battery system, zero compromises on durability. The lawn
                mower is an extension of that philosophy, not a pivot from it.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                That matters because it explains both what the Milwaukee mower
                does well and where it has limitations. The build quality is
                genuinely pro-grade — thicker steel, tighter tolerances, a
                motor designed to maintain speed under load. The limitation:
                two 18V batteries in series give 36V of motor power, which
                is below EGO&apos;s 56V and Greenworks&apos;s 80V. In light
                to moderate conditions, the POWERSTATE motor compensates
                remarkably well. In extreme conditions, the higher-voltage
                machines pull ahead. If you already own M18 batteries, this
                mower consolidates your entire ecosystem on one platform. If
                you are buying fresh with no platform investment, weigh
                mowing performance more heavily.
              </p>
            </section>

            {/* POWERSTATE Motor Technology */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                POWERSTATE Motor: What It Actually Does
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Milwaukee markets the POWERSTATE brushless motor across their
                entire M18 FUEL line, and it is more than a branding exercise.
                The motor uses a custom-wound stator and optimized magnet
                geometry designed to deliver maximum torque per amp drawn from
                the battery. In practical terms, this means the blade
                maintains speed more consistently when it hits thick patches
                of grass, rather than bogging down the way cheaper brushless
                motors can. Milwaukee also includes REDLINK PLUS intelligence
                — their electronic control system that monitors temperature,
                current draw, and voltage in real time to optimize power
                delivery and extend runtime.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                Does this make up for the 36V vs 56V voltage gap entirely?
                No. But it narrows the real-world performance gap
                significantly. In side-by-side cuts on typical residential
                grass (Bermuda, fescue, bluegrass at 3-5 inches), the
                Milwaukee cuts as cleanly as the EGO. The difference only
                becomes obvious in thick, tall, or wet grass where raw
                voltage and torque dominate.
              </p>
            </section>

            {/* Cutting Performance */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Cutting Performance Across Conditions
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here is how the Milwaukee M18 FUEL mower performed across
                real-world conditions:
              </p>

              {/* Dry, maintained grass */}
              <div
                className='rounded-xl border border-border p-6 mb-4'
                style={{ backgroundColor: '#141414' }}
              >
                <div className='flex items-center gap-3 mb-3'>
                  <Sun className='h-5 w-5 text-primary' />
                  <h3 className='text-lg font-semibold text-foreground'>
                    Dry, Maintained Grass (3-4 inches)
                  </h3>
                </div>
                <div className='flex items-center gap-2 mb-3'>
                  <div className='flex'>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i <= 5 ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`}
                      />
                    ))}
                  </div>
                  <span className='text-sm text-muted-foreground'>Excellent</span>
                </div>
                <p className='text-foreground/80 leading-relaxed'>
                  This is the Milwaukee&apos;s sweet spot. Regular Bermuda,
                  fescue, Kentucky bluegrass, and perennial ryegrass at 3-4
                  inches get a clean, even cut with no stragglers. The
                  POWERSTATE motor spins the blade at a consistent RPM, and
                  the 21-inch steel deck provides excellent airflow for
                  mulching. Clippings are chopped fine and distributed
                  evenly — no visible clumps on the surface. At this
                  height and density, you genuinely cannot tell the
                  difference between this and a 56V or 80V machine. The
                  striping is clean, edges are sharp, and the self-propelled
                  system maintains a comfortable pace.
                </p>
              </div>

              {/* Thick grass */}
              <div
                className='rounded-xl border border-border p-6 mb-4'
                style={{ backgroundColor: '#141414' }}
              >
                <div className='flex items-center gap-3 mb-3'>
                  <Zap className='h-5 w-5 text-primary' />
                  <h3 className='text-lg font-semibold text-foreground'>
                    Thick or Tall Grass (5-7 inches)
                  </h3>
                </div>
                <div className='flex items-center gap-2 mb-3'>
                  <div className='flex'>
                    {[1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className='h-4 w-4 text-yellow-500 fill-yellow-500'
                      />
                    ))}
                    {[5].map((i) => (
                      <Star
                        key={i}
                        className='h-4 w-4 text-muted-foreground'
                      />
                    ))}
                  </div>
                  <span className='text-sm text-muted-foreground'>Good</span>
                </div>
                <p className='text-foreground/80 leading-relaxed'>
                  This is where the POWERSTATE motor earns its keep. In
                  thick grass, cheaper brushless motors lose RPM quickly —
                  you hear the blade slow down and the cut quality drops.
                  The Milwaukee holds blade speed noticeably longer before
                  it bogs. It is not immune to physics (36V is still 36V),
                  but it handles 5-6 inch grass better than you would
                  expect. At 7+ inches, you will want to raise the deck
                  and double-pass. Runtime drops to 30-40 minutes in
                  sustained thick conditions. The EGO 56V and Greenworks
                  80V still push through this kind of grass with less
                  effort, but the Milwaukee is competitive with DeWalt 40V
                  and notably better than Ryobi 40V in this scenario.
                </p>
              </div>

              {/* Wet grass */}
              <div
                className='rounded-xl border border-border p-6 mb-4'
                style={{ backgroundColor: '#141414' }}
              >
                <div className='flex items-center gap-3 mb-3'>
                  <Battery className='h-5 w-5 text-primary' />
                  <h3 className='text-lg font-semibold text-foreground'>
                    Wet or Damp Grass
                  </h3>
                </div>
                <div className='flex items-center gap-2 mb-3'>
                  <div className='flex'>
                    {[1, 2, 3].map((i) => (
                      <Star
                        key={i}
                        className='h-4 w-4 text-yellow-500 fill-yellow-500'
                      />
                    ))}
                    {[4, 5].map((i) => (
                      <Star
                        key={i}
                        className='h-4 w-4 text-muted-foreground'
                      />
                    ))}
                  </div>
                  <span className='text-sm text-muted-foreground'>Average</span>
                </div>
                <p className='text-foreground/80 leading-relaxed'>
                  Wet grass is the hardest test for any electric mower, and
                  the Milwaukee handles it about how you would expect at
                  36V. Clippings clump under the deck when mulching —
                  switch to side discharge or bagging for best results.
                  The POWERSTATE motor and REDLINK system do a decent job
                  of managing power delivery, maintaining blade speed
                  longer than DeWalt in similar conditions. But wet grass
                  taxes the motor hard regardless of brand. Raise the deck
                  one notch higher than normal, slow your pace, and plan
                  on 25-35 minutes of runtime. If you frequently mow damp
                  grass, an 80V Greenworks or 56V EGO will handle it with
                  less friction.
                </p>
              </div>

              {/* Slopes */}
              <div
                className='rounded-xl border border-border p-6'
                style={{ backgroundColor: '#141414' }}
              >
                <div className='flex items-center gap-3 mb-3'>
                  <Shield className='h-5 w-5 text-primary' />
                  <h3 className='text-lg font-semibold text-foreground'>
                    Slopes and Hills
                  </h3>
                </div>
                <div className='flex items-center gap-2 mb-3'>
                  <div className='flex'>
                    {[1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className='h-4 w-4 text-yellow-500 fill-yellow-500'
                      />
                    ))}
                    {[5].map((i) => (
                      <Star
                        key={i}
                        className='h-4 w-4 text-muted-foreground'
                      />
                    ))}
                  </div>
                  <span className='text-sm text-muted-foreground'>Good</span>
                </div>
                <p className='text-foreground/80 leading-relaxed'>
                  At ~67 lbs with batteries, the Milwaukee sits in the
                  middle of the pack weight-wise — heavier than the 63 lb
                  DeWalt, lighter than the 77 lb EGO. The rear-wheel-drive
                  self-propelled system provides good traction on moderate
                  slopes up to about 15-20 degrees. The variable speed
                  control is smooth and responsive. On steeper grades, the
                  additional weight compared to the DeWalt actually helps
                  with traction, though you may need to assist the
                  self-propel system with a push on the steepest sections.
                  The 10-inch rear wheels provide better grip than some
                  competitors with smaller wheels.
                </p>
              </div>
            </section>

            {/* Battery & Runtime */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Battery System and Runtime
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The M18 platform is the reason most people buy this mower.
                Let us break down exactly what you get and where the limits
                are.
              </p>

              <div
                className='rounded-xl border border-border p-6 mb-6'
                style={{ backgroundColor: '#171717' }}
              >
                <h3 className='text-lg font-semibold text-foreground mb-4'>
                  Runtime by Battery Configuration
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <Battery className='h-5 w-5 text-primary' />
                      <div>
                        <span className='text-sm font-medium text-foreground'>
                          2x 12.0Ah HIGH OUTPUT (top kit)
                        </span>
                        <p className='text-xs text-muted-foreground'>
                          Best overall runtime
                        </p>
                      </div>
                    </div>
                    <div className='text-right'>
                      <span className='text-sm font-bold text-foreground'>
                        40-60 min
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <Battery className='h-5 w-5 text-primary' />
                      <div>
                        <span className='text-sm font-medium text-foreground'>
                          2x 8.0Ah HIGH OUTPUT
                        </span>
                        <p className='text-xs text-muted-foreground'>
                          Good balance of runtime and weight
                        </p>
                      </div>
                    </div>
                    <div className='text-right'>
                      <span className='text-sm font-bold text-foreground'>
                        30-45 min
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <Battery className='h-5 w-5 text-primary' />
                      <div>
                        <span className='text-sm font-medium text-foreground'>
                          2x 6.0Ah HIGH OUTPUT
                        </span>
                        <p className='text-xs text-muted-foreground'>
                          Lighter, shorter sessions
                        </p>
                      </div>
                    </div>
                    <div className='text-right'>
                      <span className='text-sm font-bold text-foreground'>
                        20-35 min
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <Battery className='h-5 w-5 text-primary' />
                      <div>
                        <span className='text-sm font-medium text-foreground'>
                          2x 5.0Ah (standard M18)
                        </span>
                        <p className='text-xs text-muted-foreground'>
                          Quick touch-ups only
                        </p>
                      </div>
                    </div>
                    <div className='text-right'>
                      <span className='text-sm font-bold text-foreground'>
                        15-25 min
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                The HIGH OUTPUT batteries are the key differentiator. They
                deliver higher sustained discharge current than standard M18
                batteries, which directly impacts POWERSTATE motor
                performance. A standard 5.0Ah M18 battery technically fits,
                but a 12.0Ah HIGH OUTPUT does not just give more runtime — it
                gives better cutting performance because the motor can pull
                more current without battery sag. Charge times: 12.0Ah packs
                take 60-90 minutes, 8.0Ah packs about 60 minutes.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                In real-world testing, the Milwaukee, EGO (56V 10.0Ah), and
                Greenworks (80V 4.0Ah) all land in a similar 40-50 minute
                window in typical conditions. The Milwaukee&apos;s advantage
                is that many owners already have spare M18 batteries from
                their tool collection, effectively giving unlimited runtime
                via battery swaps — a genuine edge over single-battery
                platforms.
              </p>
            </section>

            {/* Build Quality */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Build Quality and Durability
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                This is where Milwaukee separates from the pack. The company
                builds tools for contractors who use them daily in harsh
                conditions. That engineering discipline carries over to the
                mower in ways you can feel immediately.
              </p>

              <div className='grid md:grid-cols-2 gap-4 mb-6'>
                <div
                  className='rounded-xl border border-border p-5'
                  style={{ backgroundColor: '#141414' }}
                >
                  <div className='flex items-center gap-2 mb-3'>
                    <Shield className='h-5 w-5 text-primary' />
                    <h3 className='text-base font-semibold text-foreground'>
                      Deck Construction
                    </h3>
                  </div>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    21-inch stamped steel deck with a robust anti-corrosion
                    coating. Heavier than the polymer decks on some budget
                    mowers, but significantly more resistant to impact
                    damage from rocks, roots, and uneven terrain. The deck
                    lip is well-designed for mulching airflow.
                  </p>
                </div>
                <div
                  className='rounded-xl border border-border p-5'
                  style={{ backgroundColor: '#141414' }}
                >
                  <div className='flex items-center gap-2 mb-3'>
                    <Zap className='h-5 w-5 text-primary' />
                    <h3 className='text-base font-semibold text-foreground'>
                      Handle and Controls
                    </h3>
                  </div>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    Foam-padded handle grips that feel like they belong on
                    a professional tool. The self-propel bail is smooth with
                    good variable speed control. The fold mechanism is
                    solid — no wobble or play when locked. Height adjust
                    lever is a single-point system that changes all four
                    wheels simultaneously.
                  </p>
                </div>
                <div
                  className='rounded-xl border border-border p-5'
                  style={{ backgroundColor: '#141414' }}
                >
                  <div className='flex items-center gap-2 mb-3'>
                    <Battery className='h-5 w-5 text-primary' />
                    <h3 className='text-base font-semibold text-foreground'>
                      Battery Compartment
                    </h3>
                  </div>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    Dual battery slots with positive-locking engagement.
                    Batteries click in with a satisfying lock and eject
                    cleanly. The compartment has a rain guard to protect
                    connections during unexpected showers. Battery fuel
                    gauge is visible from the operator position.
                  </p>
                </div>
                <div
                  className='rounded-xl border border-border p-5'
                  style={{ backgroundColor: '#141414' }}
                >
                  <div className='flex items-center gap-2 mb-3'>
                    <Star className='h-5 w-5 text-primary' />
                    <h3 className='text-base font-semibold text-foreground'>
                      Wheels and Traction
                    </h3>
                  </div>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    10-inch rear wheels and 8-inch front wheels with treaded
                    rubber tires. The rear-wheel-drive system provides
                    consistent traction across flat and moderately hilly
                    terrain. The larger rear wheels help navigate uneven
                    ground and transitions between grass and walkways.
                  </p>
                </div>
              </div>

              <p className='text-foreground/80 leading-relaxed'>
                Fit-and-finish is a step above most consumer electric mowers.
                No rattles, no vibrations at full speed, properly torqued
                fasteners. Expect 8-10 years of service with basic blade
                maintenance. Milwaukee&apos;s 5-year warranty backs that.
              </p>
            </section>

            {/* Noise */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Noise Levels: Neighborhood-Friendly
              </h2>
              <p className='text-foreground/80 leading-relaxed'>
                The Milwaukee M18 FUEL mower operates at approximately 65 dB
                at the operator&apos;s ear — roughly the volume of a normal
                conversation. Compare that to a typical gas mower at 90-95
                dB, which requires hearing protection. At 65 dB, you can mow
                early morning or evening without disturbing neighbors, hear
                your phone ring, and skip ear protection entirely. The
                Milwaukee is in line with the EGO (65 dB) and quieter than
                the Greenworks 80V (70 dB).
              </p>
            </section>

            {/* Pros and Cons */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Pros and Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <div
                  className='rounded-xl border border-border p-6'
                  style={{ backgroundColor: '#141414' }}
                >
                  <h3 className='text-lg font-semibold text-foreground mb-4 flex items-center gap-2'>
                    <CheckCircle className='h-5 w-5' style={{ color: '#22c55e' }} />
                    Pros
                  </h3>
                  <ul className='space-y-3 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      <span>
                        <strong className='text-foreground'>250+ tool ecosystem</strong> — M18 batteries
                        power drills, impacts, saws, trimmers, blowers, and the mower
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      <span>
                        <strong className='text-foreground'>POWERSTATE motor</strong> — maintains blade
                        speed under load better than voltage would suggest
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      <span>
                        <strong className='text-foreground'>Pro-grade build quality</strong> — steel deck,
                        tight tolerances, designed for years of heavy use
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      <span>
                        <strong className='text-foreground'>REDLINK PLUS intelligence</strong> — smart
                        power management extends runtime and protects the motor
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      <span>
                        <strong className='text-foreground'>Competitive price</strong> — $599-$799 kit
                        undercuts EGO by $0-$200 depending on configuration
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      <span>
                        <strong className='text-foreground'>5-year warranty</strong> — industry-leading
                        backed by professional tool service network
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      <span>
                        <strong className='text-foreground'>Quiet operation</strong> — 65 dB lets you
                        mow at any hour without disturbing neighbors
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 mt-0.5 shrink-0' style={{ color: '#22c55e' }} />
                      <span>
                        <strong className='text-foreground'>Battery rotation advantage</strong> — spare
                        M18 batteries from your tool collection extend mowing sessions
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  className='rounded-xl border border-border p-6'
                  style={{ backgroundColor: '#141414' }}
                >
                  <h3 className='text-lg font-semibold text-foreground mb-4 flex items-center gap-2'>
                    <XCircle className='h-5 w-5 text-red-500' />
                    Cons
                  </h3>
                  <ul className='space-y-3 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>36V combined voltage</strong> — lower than
                        EGO 56V and Greenworks 80V limits thick grass performance
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>Runtime with standard batteries</strong> — need
                        HIGH OUTPUT 8Ah+ batteries for practical mowing sessions
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>HIGH OUTPUT batteries are expensive</strong> — 12.0Ah
                        packs run $199-$249 each if you need to buy separately
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>Wet grass performance</strong> — struggles more
                        than 56V+ competitors in consistently damp conditions
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>No multi-blade system</strong> — single blade
                        design vs EGO&apos;s 3 swappable blade types
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      <span>
                        <strong className='text-foreground'>Smaller outdoor lineup</strong> — Milwaukee&apos;s
                        OPE range is growing but still behind EGO&apos;s dedicated
                        outdoor ecosystem
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Milwaukee vs the Competition
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here is how the Milwaukee M18 FUEL stacks up against the
                other top electric self-propelled mowers in 2026:
              </p>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-3 text-left font-semibold text-foreground'>
                        Feature
                      </th>
                      <th className='px-3 py-3 text-left font-semibold' style={{ color: '#22c55e' }}>
                        Milwaukee M18
                      </th>
                      <th className='px-3 py-3 text-left font-semibold text-foreground'>
                        EGO Select Cut XP
                      </th>
                      <th className='px-3 py-3 text-left font-semibold text-foreground'>
                        Greenworks 80V
                      </th>
                      <th className='px-3 py-3 text-left font-semibold text-foreground'>
                        Ryobi 40V
                      </th>
                      <th className='px-3 py-3 text-left font-semibold text-foreground'>
                        DeWalt 20V MAX
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-3 font-medium text-foreground'>Price (kit)</td>
                      <td className='px-3 py-3 text-foreground/80'>$599-$799</td>
                      <td className='px-3 py-3 text-foreground/80'>$799</td>
                      <td className='px-3 py-3 text-foreground/80'>$549-$649</td>
                      <td className='px-3 py-3 text-foreground/80'>$399</td>
                      <td className='px-3 py-3 text-foreground/80'>$599</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-3 py-3 font-medium text-foreground'>Voltage</td>
                      <td className='px-3 py-3' style={{ color: '#22c55e' }}>36V (2x18V)</td>
                      <td className='px-3 py-3 text-foreground/80'>56V</td>
                      <td className='px-3 py-3 text-foreground/80'>80V</td>
                      <td className='px-3 py-3 text-foreground/80'>40V</td>
                      <td className='px-3 py-3 text-foreground/80'>40V (2x20V)</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-3 font-medium text-foreground'>Deck Size</td>
                      <td className='px-3 py-3 text-foreground/80'>21&quot;</td>
                      <td className='px-3 py-3 text-foreground/80'>21&quot;</td>
                      <td className='px-3 py-3 text-foreground/80'>21&quot;</td>
                      <td className='px-3 py-3 text-foreground/80'>21&quot;</td>
                      <td className='px-3 py-3 text-foreground/80'>21.5&quot;</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-3 py-3 font-medium text-foreground'>Runtime (real)</td>
                      <td className='px-3 py-3' style={{ color: '#22c55e' }}>40-50 min</td>
                      <td className='px-3 py-3 text-foreground/80'>45-60 min</td>
                      <td className='px-3 py-3 text-foreground/80'>40-55 min</td>
                      <td className='px-3 py-3 text-foreground/80'>30-40 min</td>
                      <td className='px-3 py-3 text-foreground/80'>35-45 min</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-3 font-medium text-foreground'>Weight</td>
                      <td className='px-3 py-3 text-foreground/80'>~67 lbs</td>
                      <td className='px-3 py-3 text-foreground/80'>~77 lbs</td>
                      <td className='px-3 py-3 text-foreground/80'>~70 lbs</td>
                      <td className='px-3 py-3 text-foreground/80'>~56 lbs</td>
                      <td className='px-3 py-3 text-foreground/80'>~63 lbs</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-3 py-3 font-medium text-foreground'>Blade System</td>
                      <td className='px-3 py-3 text-foreground/80'>Single blade</td>
                      <td className='px-3 py-3 text-foreground/80'>3 swappable blades</td>
                      <td className='px-3 py-3 text-foreground/80'>Single blade (Smart Cut)</td>
                      <td className='px-3 py-3 text-foreground/80'>Single blade</td>
                      <td className='px-3 py-3 text-foreground/80'>Single blade</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-3 font-medium text-foreground'>Tool Platform</td>
                      <td className='px-3 py-3' style={{ color: '#22c55e' }}>250+ M18 tools</td>
                      <td className='px-3 py-3 text-foreground/80'>70+ EGO tools</td>
                      <td className='px-3 py-3 text-foreground/80'>40+ 80V tools</td>
                      <td className='px-3 py-3 text-foreground/80'>75+ 40V tools</td>
                      <td className='px-3 py-3 text-foreground/80'>300+ 20V MAX tools</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-3 py-3 font-medium text-foreground'>Warranty</td>
                      <td className='px-3 py-3 text-foreground/80'>5yr / 3yr</td>
                      <td className='px-3 py-3 text-foreground/80'>5yr / 3yr</td>
                      <td className='px-3 py-3 text-foreground/80'>4yr tool</td>
                      <td className='px-3 py-3 text-foreground/80'>5yr / 3yr</td>
                      <td className='px-3 py-3 text-foreground/80'>5yr / 3yr</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-3 font-medium text-foreground'>Our Rating</td>
                      <td className='px-3 py-3 font-bold' style={{ color: '#22c55e' }}>4.4/5</td>
                      <td className='px-3 py-3 font-bold text-foreground'>4.7/5</td>
                      <td className='px-3 py-3 font-bold text-foreground'>4.5/5</td>
                      <td className='px-3 py-3 font-bold text-foreground'>4.1/5</td>
                      <td className='px-3 py-3 font-bold text-foreground'>4.3/5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Comparison Summaries */}
              <div className='mt-6 space-y-4'>
                <div
                  className='rounded-xl border border-border p-5'
                  style={{ backgroundColor: '#141414' }}
                >
                  <h3 className='text-base font-semibold text-foreground mb-2'>
                    Milwaukee vs EGO Select Cut XP
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    The EGO wins on raw cutting performance — 56V torque,
                    Select Cut multi-blade system, better in thick grass.
                    The Milwaukee wins on ecosystem (250+ vs 70+ tools) and
                    price ($0-$200 less). Own M18 batteries? Milwaukee. No
                    platform yet and mowing is the priority? EGO.
                  </p>
                </div>
                <div
                  className='rounded-xl border border-border p-5'
                  style={{ backgroundColor: '#141414' }}
                >
                  <h3 className='text-base font-semibold text-foreground mb-2'>
                    Milwaukee vs Greenworks 80V
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    Greenworks has the voltage advantage at 80V with Smart
                    Cut technology. Milwaukee counters with superior build
                    quality, the POWERSTATE motor, and a massively larger
                    tool ecosystem. Greenworks is $50-$150 cheaper. Pure
                    mowing value: Greenworks. Ecosystem and durability:
                    Milwaukee.
                  </p>
                </div>
                <div
                  className='rounded-xl border border-border p-5'
                  style={{ backgroundColor: '#141414' }}
                >
                  <h3 className='text-base font-semibold text-foreground mb-2'>
                    Milwaukee vs Ryobi 40V
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    Ryobi is the budget pick at $399. Milwaukee justifies
                    the $200+ premium with better build quality, POWERSTATE
                    motor, longer runtime, and the professional M18
                    ecosystem. Budget priority: Ryobi. Performance and
                    longevity: Milwaukee.
                  </p>
                </div>
                <div
                  className='rounded-xl border border-border p-5'
                  style={{ backgroundColor: '#141414' }}
                >
                  <h3 className='text-base font-semibold text-foreground mb-2'>
                    Milwaukee vs DeWalt 20V MAX
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    The closest comparison. Both use dual-battery series
                    configs (36V vs 40V), massive ecosystems (250+ vs 300+),
                    and cost around $599. DeWalt has a slight voltage edge
                    and wider deck. Milwaukee has the POWERSTATE motor and
                    arguably better build quality. This is a platform
                    decision — buy whichever you already own.
                  </p>
                </div>
              </div>
            </section>

            {/* Who Should Buy */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Who Should Buy the Milwaukee M18 FUEL Mower?
              </h2>
              <div className='space-y-4'>
                <div
                  className='rounded-xl border border-border p-5'
                  style={{ backgroundColor: '#141414' }}
                >
                  <div className='flex items-center gap-2 mb-2'>
                    <CheckCircle className='h-5 w-5' style={{ color: '#22c55e' }} />
                    <h3 className='text-base font-semibold text-foreground'>
                      The M18 Platform Owner
                    </h3>
                  </div>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    If you already own M18 batteries (especially HIGH OUTPUT
                    8.0Ah or 12.0Ah packs), the tool-only price ($399-$449)
                    makes this one of the best premium electric mower values
                    available.
                  </p>
                </div>
                <div
                  className='rounded-xl border border-border p-5'
                  style={{ backgroundColor: '#141414' }}
                >
                  <div className='flex items-center gap-2 mb-2'>
                    <CheckCircle className='h-5 w-5' style={{ color: '#22c55e' }} />
                    <h3 className='text-base font-semibold text-foreground'>
                      The Tradesperson / Contractor
                    </h3>
                  </div>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    Electricians, plumbers, and carpenters with a trailer
                    full of M18 tools can consolidate job site and yard
                    equipment on one platform. No extra chargers, no battery
                    confusion.
                  </p>
                </div>
                <div
                  className='rounded-xl border border-border p-5'
                  style={{ backgroundColor: '#141414' }}
                >
                  <div className='flex items-center gap-2 mb-2'>
                    <CheckCircle className='h-5 w-5' style={{ color: '#22c55e' }} />
                    <h3 className='text-base font-semibold text-foreground'>
                      The Build-Quality-First Buyer
                    </h3>
                  </div>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    If you want a mower built to last 10+ years with minimal
                    maintenance, the steel deck, POWERSTATE motor, and
                    REDLINK electronics deliver professional-grade
                    durability.
                  </p>
                </div>
              </div>
            </section>

            {/* Maintenance */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Maintenance and Long-Term Ownership
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                One of the biggest advantages of any electric mower over gas
                is dramatically reduced maintenance. No oil changes, no spark
                plugs, no carburetor cleaning, no fuel stabilizer, no pull
                cord to replace. The Milwaukee M18 FUEL mower needs just
                four things: blade sharpening or replacement every 25-30
                hours of use ($20-$35 per blade), deck cleaning every 3-4
                mows, proper battery storage in a climate-controlled space,
                and a quick wheel and drive inspection at the start of each
                season.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                Annual maintenance cost: roughly $20-$35 for a replacement
                blade. Compare that to $75-$150+ per year for a gas mower
                (oil, filters, spark plugs, fuel stabilizer, tune-up). Over
                5 years, the electric mower saves $250-$575 in maintenance
                alone. The 5-year tool warranty and 3-year battery warranty
                provide additional peace of mind.
              </p>
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
                    className='rounded-xl border border-border p-5'
                    style={{ backgroundColor: '#141414' }}
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

            {/* Final Verdict */}
            <section className='mb-10'>
              <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8'>
                <div className='flex items-center gap-3 mb-4'>
                  <h2 className='text-2xl font-bold text-foreground'>
                    Final Verdict
                  </h2>
                  <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                    <Star className='h-5 w-5 text-yellow-500 fill-yellow-500' />
                    <span className='font-bold text-foreground text-lg'>4.4</span>
                    <span className='text-muted-foreground'>/ 5</span>
                  </div>
                </div>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  The Milwaukee M18 FUEL Self-Propelled Lawn Mower is a
                  professional-grade tool that happens to cut grass. It does
                  not have the highest voltage or the fanciest blade system,
                  but it has engineering discipline, pro-grade build quality,
                  and the single biggest advantage in the cordless tool
                  world: a 250+ tool ecosystem that means your mower
                  batteries power everything else you own.
                </p>
                <p className='text-foreground/80 leading-relaxed mb-6'>
                  For existing M18 owners with yards under 1/2 acre, this
                  is one of the best electric mower values available. For
                  platform-agnostic buyers, the EGO Select Cut XP remains
                  the pure mowing champion — but the Milwaukee is closer
                  than the voltage gap suggests. If you are a tradesperson
                  who wants one battery for the job site and the yard, no
                  other mower manufacturer can match that depth of platform
                  support.
                </p>
                <div className='flex flex-col sm:flex-row gap-3'>
                  <a
                    href='#'
                    className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-colors'
                    style={{ backgroundColor: '#22c55e' }}
                  >
                    <DollarSign className='h-4 w-4' />
                    Check Price on Home Depot
                  </a>
                  <a
                    href='#'
                    className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-colors'
                    style={{ backgroundColor: '#171717', border: '1px solid #333' }}
                  >
                    <DollarSign className='h-4 w-4' />
                    Check Price on Amazon
                  </a>
                </div>
              </div>
            </section>

            {/* Related Reviews */}
            <section className='mb-10'>
              <h2 className='text-xl font-bold text-foreground mb-4'>
                Related Reviews
              </h2>
              <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                <Link
                  href='/reviews/ego-select-cut-mower-review'
                  className='bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group'
                >
                  <h3 className='text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors'>
                    EGO Select Cut XP Mower Review
                  </h3>
                  <p className='text-sm text-muted-foreground mb-3'>
                    The premium pick with 3 swappable blade types, 56V power,
                    and 60 min runtime. 4.7/5.
                  </p>
                  <span className='text-sm text-primary font-medium flex items-center gap-1'>
                    Read review
                    <ArrowRight className='h-3 w-3' />
                  </span>
                </Link>
                <Link
                  href='/reviews/greenworks-80v-lawn-mower-review'
                  className='bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group'
                >
                  <h3 className='text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors'>
                    Greenworks 80V Lawn Mower Review
                  </h3>
                  <p className='text-sm text-muted-foreground mb-3'>
                    The mid-range value king with 80V Smart Cut technology
                    and strong runtime. 4.5/5.
                  </p>
                  <span className='text-sm text-primary font-medium flex items-center gap-1'>
                    Read review
                    <ArrowRight className='h-3 w-3' />
                  </span>
                </Link>
                <Link
                  href='/reviews/best-electric-lawn-mower'
                  className='bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group'
                >
                  <h3 className='text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors'>
                    Best Electric Lawn Mowers 2026
                  </h3>
                  <p className='text-sm text-muted-foreground mb-3'>
                    Full comparison including EGO, Milwaukee, Greenworks, Ryobi,
                    and DeWalt.
                  </p>
                  <span className='text-sm text-primary font-medium flex items-center gap-1'>
                    Read comparison
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
