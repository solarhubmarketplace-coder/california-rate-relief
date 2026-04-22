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
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'EGO Select Cut XP Mower Review (LM2156SP): The Best Electric Lawn Mower in 2026?',
  description:
    'In-depth EGO Select Cut XP mower review (LM2156SP) covering the multi-blade Select Cut system, 56V battery runtime, self-propelled performance, noise levels vs gas, and the 70+ tool EGO platform ecosystem. 4.7/5 rating.',
  alternates: {
    canonical: '/reviews/ego-select-cut-mower-review',
  },
  openGraph: {
    title:
      'EGO Select Cut XP Mower Review (LM2156SP): The Best Electric Lawn Mower in 2026?',
    description:
      'Detailed review of the EGO Power+ Select Cut XP self-propelled mower — 21-inch steel deck, 3 swappable blade types, 56V ARC Lithium battery, up to 60 min runtime. Is it worth $799?',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'EGO Select Cut XP Mower Review (LM2156SP): The Best Electric Lawn Mower in 2026?',
  description:
    'In-depth review of the EGO Power+ Select Cut XP self-propelled mower covering the multi-blade system, battery performance, cut quality, and 56V platform ecosystem.',
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
    '@id': 'https://ratereliefca.com/reviews/ego-select-cut-mower-review',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'EGO Select Cut XP Mower Review (LM2156SP)',
  reviewBody:
    'The EGO Power+ Select Cut XP (LM2156SP) is a 21-inch self-propelled electric mower that delivers gas-equivalent cutting performance with dramatically less noise and zero emissions. Its killer feature is the Select Cut multi-blade system — three swappable blade types (mulching, high lift, extended runtime) that let you optimize for conditions instead of compromising. At $799 with the 10.0Ah battery and charger, it handles 1/4 to 1/2 acre yards on a single charge and plugs into the 70+ tool EGO 56V ecosystem.',
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
    name: 'EGO Power+ Select Cut XP Self-Propelled Mower LM2156SP',
    brand: {
      '@type': 'Brand',
      name: 'EGO',
    },
    description:
      '21-inch self-propelled electric lawn mower with Select Cut multi-blade system, 56V ARC Lithium battery, variable speed rear wheel drive, and IPX4 weather resistance.',
    offers: {
      '@type': 'Offer',
      price: '799',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.7',
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
      name: 'How long does the EGO Select Cut XP mower run on a single charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With the included 10.0Ah battery, the EGO LM2156SP runs for up to 60 minutes. Using the extended runtime blade can stretch that further by reducing motor load. Actual runtime depends on grass thickness, self-propelled speed setting, and terrain. Most users report 45-55 minutes of real-world mowing, which comfortably covers 1/4 to 1/2 acre.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the EGO Select Cut multi-blade system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Select Cut system lets you swap between three blade types without tools: a mulching blade for fine clippings and lawn nutrition, a high-lift blade for bagging and cutting thick or wet grass, and an extended runtime blade that reduces battery draw for larger yards. You choose the blade that matches your conditions instead of using a one-size-fits-all compromise blade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use the EGO mower battery with other EGO tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The 56V ARC Lithium battery is compatible with all 70+ tools in the EGO Power+ platform, including blowers, string trimmers, chainsaws, hedge trimmers, edgers, and snow blowers. One battery system powers your entire yard care lineup.',
      },
    },
    {
      '@type': 'Question',
      name: 'How loud is the EGO Select Cut mower compared to a gas mower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EGO LM2156SP operates at approximately 65 dB, which is roughly the volume of a normal conversation. Gas mowers typically produce 90-95 dB — that is about 8 times louder in perceived volume. You can mow early mornings or evenings without disturbing neighbors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the EGO Select Cut XP worth it over the standard EGO mower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you deal with varying grass conditions — thick patches, wet grass, different seasons — the Select Cut system is absolutely worth the upgrade. The ability to swap blade types means you always have the right tool for the job. If you have a small, uniform lawn under 1/4 acre, the standard EGO mower will serve you fine and save $100-150.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the EGO LM2156SP handle hills and slopes well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The variable-speed rear-wheel-drive self-propulsion handles moderate slopes well. You can dial up the speed for flat sections and slow it down for inclines. The 77.2 lb weight provides good traction. For steep hills, just increase the self-propelled speed and let the mower do the work.',
      },
    },
  ],
};

export default function EgoSelectCutMowerReview() {
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
                EGO Select Cut XP
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                EGO Select Cut XP Mower Review (LM2156SP): The Best Electric Lawn
                Mower in 2026?
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-21'>April 21, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>12 min read</span>
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
                  <span className='font-bold text-foreground'>4.7</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                The EGO Power+ Select Cut XP (LM2156SP) is the electric mower
                that finally makes the &quot;as good as gas&quot; argument
                irrelevant. The Select Cut multi-blade system is the real
                differentiator — three swappable blade types mean you always
                have the right blade for the job, whether you&apos;re mulching
                dry clippings, bagging thick wet grass, or stretching battery
                life on a big yard. At $799 with the 10.0Ah battery, it
                handles up to half an acre per charge, runs at conversation-level
                volume, and shares its battery with 70+ EGO tools. If
                you&apos;re switching from gas, this is the one.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Homeowners switching from gas mowers
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      1/4 to 1/2 acre yards with mixed conditions
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Anyone invested in or considering the EGO 56V platform
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
                      Yards over 3/4 acre (need a second battery)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Budget under $500 (consider the standard EGO)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Tiny flat lawns where a push reel mower suffices
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
                        EGO Power+ Select Cut XP LM2156SP
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <DollarSign className='h-4 w-4 text-primary' />
                        Price
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        $649 (tool only) / $799 (with 10.0Ah battery + charger)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Deck Size
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        21-inch steel deck
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Star className='h-4 w-4 text-primary' />
                        Blade System
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Select Cut — 3 swappable blade types (mulching, high lift, extended runtime)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Battery className='h-4 w-4 text-primary' />
                        Battery
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        56V ARC Lithium (10.0Ah included in kit)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Clock className='h-4 w-4 text-primary' />
                        Runtime
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Up to 60 minutes (10.0Ah battery)
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
                        Drive System
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Variable speed, rear wheel drive self-propelled
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Weight
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        77.2 lbs (with battery)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Noise Level
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~65 dB (vs 90+ dB gas)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Weather Rating
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        IPX4 (splash/rain resistant)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Storage
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Folds vertically for compact storage
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Platform Compatibility
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        70+ EGO 56V tools (blower, trimmer, chainsaw, snow blower, etc.)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Overview */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Overview: Why This Mower Exists
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Electric mowers have been &quot;good enough&quot; for a few years now.
                But &quot;good enough&quot; still meant compromises — you picked one
                blade type and hoped it worked for every situation your lawn threw
                at you. Wet spring grass? Tough luck, your mulching blade clumps.
                Fall leaves mixed with long growth? Your standard blade just pushes
                them around.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The EGO Select Cut XP solves this with the most obvious idea
                nobody else implemented at this level: let the homeowner swap blade
                types in seconds, matching the tool to the conditions. It ships
                with three purpose-built blades, each optimized for a different
                mowing scenario. Combined with a 21-inch steel deck, variable-speed
                self-propulsion, and the massive EGO 56V battery ecosystem, the
                LM2156SP is built for people who are done messing with gas but
                refuse to compromise on cut quality.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                At $799 for the full kit (mower + 10.0Ah battery + charger),
                it&apos;s priced above entry-level electrics but below premium gas
                self-propelled mowers like the Honda HRX series. And unlike gas,
                there are no oil changes, spark plugs, carb cleanups, or gas runs.
                Ever.
              </p>
            </section>

            {/* Select Cut Multi-Blade System */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                The Select Cut Multi-Blade System: The Killer Feature
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                This is why you buy this mower over every other electric option.
                The Select Cut system includes three blade types, each engineered
                for specific conditions. You swap them in about 30 seconds with no
                tools required.
              </p>

              <div className='space-y-4 mb-6'>
                {/* Mulching Blade */}
                <div className='bg-card border border-border rounded-xl p-5'>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center'>
                      <CheckCircle className='h-5 w-5 text-green-500' />
                    </div>
                    <h3 className='text-lg font-semibold text-foreground'>
                      Mulching Blade
                    </h3>
                  </div>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Finely chops clippings and distributes them back into your lawn
                    as natural fertilizer. Best for regular weekly mowing in dry
                    conditions. The clippings decompose quickly and feed nitrogen
                    back into the soil — your lawn literally feeds itself. This is
                    the blade most people will use 70% of the time.
                  </p>
                </div>

                {/* High Lift Blade */}
                <div className='bg-card border border-border rounded-xl p-5'>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center'>
                      <Zap className='h-5 w-5 text-blue-500' />
                    </div>
                    <h3 className='text-lg font-semibold text-foreground'>
                      High Lift Blade
                    </h3>
                  </div>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Creates strong upward airflow that lifts grass upright before
                    cutting, then channels clippings into the bag. This is the blade
                    for thick, wet, or overgrown grass — the situations that bog down
                    standard blades. It also excels at leaf pickup in fall. Uses more
                    battery than the mulching blade, but when you need raw cutting
                    power, nothing else matches it.
                  </p>
                </div>

                {/* Extended Runtime Blade */}
                <div className='bg-card border border-border rounded-xl p-5'>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center'>
                      <Battery className='h-5 w-5 text-yellow-500' />
                    </div>
                    <h3 className='text-lg font-semibold text-foreground'>
                      Extended Runtime Blade
                    </h3>
                  </div>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Designed for maximum efficiency — lower drag on the motor means
                    more minutes per charge. Ideal for larger yards where you need
                    every minute of battery life, or for light weekly maintenance
                    mowing where aggressive cutting is overkill. You trade a small
                    amount of cut precision for 10-15% more runtime.
                  </p>
                </div>
              </div>

              <p className='text-foreground/80 leading-relaxed'>
                In practice, the Select Cut system transforms one mower into three.
                Spring and fall when grass is wet and thick? High lift blade. Weekly
                summer maintenance? Mulching blade. Pushing the boundaries of your
                battery on a big yard? Extended runtime blade. No other electric
                mower gives you this level of adaptability.
              </p>
            </section>

            {/* Battery & Runtime */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Battery and Runtime
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The LM2156SP kit ships with EGO&apos;s 10.0Ah 56V ARC Lithium
                battery — the largest in their lineup. EGO rates runtime at up to
                60 minutes, which is realistic for the extended runtime blade on a
                well-maintained lawn. Real-world numbers with the mulching blade on
                average suburban grass sit around 45-55 minutes. The high lift blade
                on thick grass pulls that down to 35-45 minutes.
              </p>
              <div className='bg-card border border-border rounded-xl p-5 mb-4'>
                <h3 className='text-lg font-semibold text-foreground mb-3'>
                  Real-World Runtime by Blade Type
                </h3>
                <div className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-foreground/80'>Extended Runtime Blade</span>
                    <div className='flex items-center gap-2'>
                      <div className='w-32 h-2 bg-muted rounded-full overflow-hidden'>
                        <div className='h-full bg-green-500 rounded-full' style={{ width: '100%' }} />
                      </div>
                      <span className='text-sm font-medium text-foreground'>55-60 min</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-foreground/80'>Mulching Blade</span>
                    <div className='flex items-center gap-2'>
                      <div className='w-32 h-2 bg-muted rounded-full overflow-hidden'>
                        <div className='h-full bg-blue-500 rounded-full' style={{ width: '83%' }} />
                      </div>
                      <span className='text-sm font-medium text-foreground'>45-55 min</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-foreground/80'>High Lift Blade</span>
                    <div className='flex items-center gap-2'>
                      <div className='w-32 h-2 bg-muted rounded-full overflow-hidden'>
                        <div className='h-full bg-yellow-500 rounded-full' style={{ width: '66%' }} />
                      </div>
                      <span className='text-sm font-medium text-foreground'>35-45 min</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                For most suburban lawns (1/4 to 1/2 acre), one charge is plenty.
                If you have a bigger property, pick up a second battery — the
                swap takes under 10 seconds. EGO batteries charge from zero to full
                in about 40 minutes with the Rapid Charger, or roughly an hour with
                the standard charger included in the kit.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                One often-overlooked advantage: EGO&apos;s 56V ARC Lithium batteries
                maintain consistent power output until they&apos;re depleted. Unlike
                some cheaper electrics that slow down as the battery drains, the
                Select Cut XP cuts at full speed from start to finish. The blade
                doesn&apos;t gradually lose RPM — it just stops when the battery
                is empty.
              </p>
            </section>

            {/* Cut Quality */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Cut Quality
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The 21-inch steel deck delivers a clean, even cut across all seven
                height positions (1.5&quot; to 4&quot;). The blade spins at high RPM
                from the moment you pull the trigger — no waiting for a gas engine
                to build up speed. That instant torque means you get a consistent
                cut from the first pass.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Where the Select Cut system really shines is in variable conditions.
                If you have a lawn with sunny patches, shaded areas, and that one
                wet corner near the sprinkler heads, you&apos;d normally need to
                mow twice or accept an uneven result. With the high lift blade, the
                strong airflow lifts every blade of grass to the same height before
                cutting — even in the damp patches that make standard blades clump
                and skip.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                The mulching blade produces noticeably finer clippings than most
                electric mowers. The clippings disappear into the lawn instead of
                sitting on top as visible debris. This matters for curb appeal and
                for lawn health — finer mulch decomposes faster and feeds the soil
                more efficiently.
              </p>
            </section>

            {/* Self-Propelled Performance */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Self-Propelled Performance
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                At 77.2 lbs with the battery, you absolutely want self-propulsion —
                and the LM2156SP delivers. The variable-speed rear wheel drive
                lets you dial in exactly the pace you want, from a slow crawl for
                tight edges to a brisk walk for open stretches.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The rear wheel drive is a smart engineering choice. Unlike front
                wheel drive mowers that lose traction when you lift the front for
                turns, rear drive maintains grip through direction changes and on
                inclines. The mower tracks straight and responds predictably.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                On moderate slopes, the self-propulsion handles everything
                comfortably. You&apos;re not fighting the mower uphill or chasing
                it downhill. For steep grades, bump up the speed and let the drive
                system carry the weight. The only limitation is on very wet,
                steep slopes where any mower — gas or electric — would struggle
                for traction.
              </p>
            </section>

            {/* Noise Comparison */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Noise: 65 dB vs 90+ dB Gas
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                This is where electric mowers have an overwhelming advantage, and
                the numbers don&apos;t fully convey the difference. The EGO Select
                Cut runs at approximately 65 dB — roughly the volume of a normal
                conversation or a running dishwasher. A typical gas mower sits at
                90-95 dB.
              </p>
              <div className='bg-card border border-border rounded-xl p-5 mb-4'>
                <h3 className='text-lg font-semibold text-foreground mb-3'>
                  Noise Level Comparison
                </h3>
                <div className='space-y-3'>
                  <div>
                    <div className='flex items-center justify-between mb-1'>
                      <span className='text-sm text-foreground/80'>EGO Select Cut XP</span>
                      <span className='text-sm font-medium text-green-500'>~65 dB</span>
                    </div>
                    <div className='w-full h-3 bg-muted rounded-full overflow-hidden'>
                      <div className='h-full bg-green-500 rounded-full' style={{ width: '45%' }} />
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center justify-between mb-1'>
                      <span className='text-sm text-foreground/80'>Typical gas mower</span>
                      <span className='text-sm font-medium text-red-500'>90-95 dB</span>
                    </div>
                    <div className='w-full h-3 bg-muted rounded-full overflow-hidden'>
                      <div className='h-full bg-red-500 rounded-full' style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center justify-between mb-1'>
                      <span className='text-sm text-foreground/80'>Gas leaf blower</span>
                      <span className='text-sm font-medium text-red-500'>100+ dB</span>
                    </div>
                    <div className='w-full h-3 bg-muted rounded-full overflow-hidden'>
                      <div className='h-full bg-red-500 rounded-full' style={{ width: '95%' }} />
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Decibels are logarithmic — a 25 dB difference means the gas mower
                is roughly 8 times louder in perceived volume. In practice, you can
                mow at 7 AM on a Saturday without your neighbors knowing. You can
                hold a conversation while mowing. You don&apos;t need hearing
                protection.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                For California homeowners in HOA communities or neighborhoods with
                noise ordinances, this is often the deciding factor. Many
                municipalities restrict gas-powered equipment before 8 or 9 AM on
                weekends — the EGO mower flies under every noise limit.
              </p>
            </section>

            {/* EGO 56V Platform Ecosystem */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                The EGO 56V Platform: One Battery, 70+ Tools
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The Select Cut XP isn&apos;t just a mower — it&apos;s an entry
                point into the largest battery-powered outdoor tool ecosystem on
                the market. Every EGO 56V ARC Lithium battery works across every
                EGO tool. The 10.0Ah battery included with this mower also powers:
              </p>
              <div className='grid md:grid-cols-2 gap-3 mb-4'>
                <div className='bg-card border border-border rounded-lg p-4'>
                  <h4 className='text-sm font-semibold text-foreground mb-2'>Yard Care</h4>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      String trimmers and edgers
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Leaf blowers (650+ CFM)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Hedge trimmers
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Cultivator
                    </li>
                  </ul>
                </div>
                <div className='bg-card border border-border rounded-lg p-4'>
                  <h4 className='text-sm font-semibold text-foreground mb-2'>Heavy Duty</h4>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      18-inch chainsaw
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Snow blower (24-inch, 2-stage)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Pressure washer
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Multi-head system (10+ attachments)
                    </li>
                  </ul>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                This is where the long-term value proposition gets compelling. If
                you already own EGO tools, the Select Cut XP is $649 tool-only
                because you already have batteries. If you&apos;re new to the
                platform, the $799 kit gets you a battery that works with every
                tool you add later.
              </p>
              <div className='bg-primary/5 border border-primary/20 rounded-xl p-5'>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  Platform Economics
                </h3>
                <p className='text-sm text-foreground/80 leading-relaxed'>
                  A comparable gas setup (mower + blower + trimmer + chainsaw)
                  requires 4 separate engines, 4 types of maintenance, gas cans,
                  oil, spark plugs, and winterization. With EGO, it&apos;s 4 tools
                  and 2-3 batteries. No maintenance. No gas. No oil. The total cost
                  of ownership over 5 years tilts heavily in EGO&apos;s favor — and
                  that&apos;s before factoring in California&apos;s increasingly
                  strict emissions regulations on small gas engines.
                </p>
              </div>
            </section>

            {/* Who It's Best For */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Who Is the EGO Select Cut XP Best For?
              </h2>
              <div className='space-y-4'>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <div className='flex items-center gap-3 mb-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    <h3 className='text-lg font-semibold text-foreground'>
                      Gas-to-Electric Switchers
                    </h3>
                  </div>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    If you&apos;re coming from a quality gas self-propelled mower
                    and worried about giving up performance, this is the electric
                    mower that matches gas cut quality. The Select Cut system
                    actually gives you more versatility than any single gas blade.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <div className='flex items-center gap-3 mb-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    <h3 className='text-lg font-semibold text-foreground'>
                      1/4 to 1/2 Acre Homeowners
                    </h3>
                  </div>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    The 10.0Ah battery covers this range comfortably on one charge.
                    If your yard is at the larger end, the extended runtime blade
                    gives you the margin you need. Beyond 1/2 acre, plan on a
                    second battery.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <div className='flex items-center gap-3 mb-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    <h3 className='text-lg font-semibold text-foreground'>
                      EGO Platform Users
                    </h3>
                  </div>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    Already own EGO tools? The $649 tool-only option is a no-brainer
                    upgrade. Your existing batteries work immediately, and the Select
                    Cut system is the best blade technology in EGO&apos;s mower
                    lineup.
                  </p>
                </div>
                <div className='bg-card border border-border rounded-xl p-5'>
                  <div className='flex items-center gap-3 mb-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    <h3 className='text-lg font-semibold text-foreground'>
                      HOA and Noise-Sensitive Areas
                    </h3>
                  </div>
                  <p className='text-foreground/80 text-sm leading-relaxed'>
                    At 65 dB, you can mow at any hour without complaints. California
                    HOAs and municipalities increasingly restrict gas equipment —
                    electric is future-proof for compliance.
                  </p>
                </div>
              </div>
            </section>

            {/* Pros & Cons */}
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Pros and Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='bg-green-500/5 border border-green-500/20 rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5 text-green-500' />
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Select Cut system — 3 blades for every condition
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Excellent cut quality, rivals premium gas mowers
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      60-minute runtime with 10.0Ah battery
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      65 dB noise — mow anytime without disturbing neighbors
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Battery powers 70+ EGO tools — massive ecosystem
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Variable speed self-propelled rear wheel drive
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Folds vertically for compact garage storage
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Zero maintenance — no oil, gas, spark plugs, or tune-ups
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      IPX4 weather resistance — handles morning dew and light rain
                    </li>
                  </ul>
                </div>
                <div className='bg-red-500/5 border border-red-500/20 rounded-xl p-5'>
                  <h3 className='text-lg font-semibold text-foreground mb-3 flex items-center gap-2'>
                    <X className='h-5 w-5 text-red-500' />
                    Cons
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      $799 is premium pricing (vs $400-500 for standard electrics)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      77.2 lbs — heavy to lift into a truck bed
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Large yards (3/4+ acre) need a second battery
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      High lift blade drains battery noticeably faster
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      No Bluetooth/app connectivity (some competitors have this)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Bag could be larger for bagging-heavy users
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
                    <span className='font-bold text-foreground'>4.7</span>
                    <span className='text-muted-foreground text-sm'>/ 5</span>
                  </div>
                </div>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  The EGO Power+ Select Cut XP (LM2156SP) is the electric mower we
                  recommend for most homeowners. The Select Cut multi-blade system
                  is a genuine innovation that gives you the right blade for every
                  mowing condition — something no gas mower offers without buying
                  separate blades and spending 20 minutes swapping them. The 56V
                  platform ecosystem means your investment extends far beyond the
                  mower itself.
                </p>
                <p className='text-foreground/80 leading-relaxed mb-4'>
                  At $799 for the full kit, it costs more upfront than a basic
                  electric or a mid-range gas mower. But factor in zero fuel costs,
                  zero maintenance, a battery that powers 70+ tools, and noise
                  levels that let you mow whenever you want — the value equation
                  tips firmly in the EGO&apos;s favor within the first year or two.
                </p>
                <p className='text-foreground/80 leading-relaxed mb-6'>
                  If you have a 1/4 to 1/2 acre yard, deal with varying grass
                  conditions throughout the year, and want to stop messing with gas
                  engines forever, this is the mower to buy.
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
                    Full comparison of the top electric mowers including EGO,
                    Greenworks, Ryobi, and more.
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
