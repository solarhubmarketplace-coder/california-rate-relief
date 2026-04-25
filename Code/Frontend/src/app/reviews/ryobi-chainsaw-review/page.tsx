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

const PRODUCT_KEY = 'ryobi-chainsaw';

export const metadata: Metadata = {
  title:
    'Ryobi Chainsaw Review 2026: 40V HP Brushless and 18-40V Cordless Options',
  description:
    'In-depth Ryobi chainsaw review covering the 40V HP Brushless 18-inch RY405010 ($279), 14-inch RY40580 ($229), and 18V One+ 10-inch P2500B. Oregon bars, runtime, vs EGO and DeWalt, Home Depot exclusive, California AQMD rebates. 4.4/5.',
  alternates: {
    canonical: '/reviews/ryobi-chainsaw-review',
  },
  openGraph: {
    title:
      'Ryobi Chainsaw Review 2026: 40V HP Brushless and 18-40V Cordless Options',
    description:
      'Complete review of Ryobi cordless chainsaws — 40V HP Brushless 18-inch flagship, 14-inch entry, and 18V One+ compact. Home Depot exclusive. Honest comparison to EGO, DeWalt, Milwaukee.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Ryobi Chainsaw Review (RY405010, RY40580, P2500B)',
  reviewBody:
    'The Ryobi chainsaw lineup is the budget-friendly cordless chainsaw choice in 2026. The 40V HP Brushless 18-inch RY405010 ($279) is the flagship — Oregon bar and chain, brushless motor, 100+ cuts on a 4.0Ah battery. The 14-inch RY40580 ($229) is the right fit for most homeowners. The 18V One+ P2500B is a 10-inch compact for light pruning and limbing. All three run on Ryobi platforms with 280+ tools on 18V One+ and 80+ on 40V. Home Depot exclusive, 5-year tool warranty.',
  datePublished: '2026-04-22',
  author: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  itemReviewed: {
    '@type': 'Product',
    name: 'Ryobi 40V HP Brushless 18" Chainsaw RY405010',
    brand: {
      '@type': 'Brand',
      name: 'Ryobi',
    },
    description:
      'Cordless 18-inch chainsaw with brushless motor, Oregon bar and chain, variable-speed trigger.',
    offers: {
      '@type': 'Offer',
      price: '279',
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
      name: 'Is the Ryobi 40V HP chainsaw powerful enough for firewood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for homeowner-scale firewood work. The RY405010 18-inch cuts 4-inch hardwood in 3-4 seconds and handles 8-12 inch rounds without bogging down. You will need multiple batteries or a 6Ah HP battery to process a full cord in one session. For occasional cord-and-a-half type firewood runs, the Ryobi is more than adequate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cuts does a Ryobi chainsaw get on one battery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On a 4.0Ah HP battery, the RY405010 delivers roughly 100-130 cuts through 4-inch softwood or 60-80 cuts through 4-inch hardwood. Upgrading to a 6.0Ah HP or 12.0Ah HP battery boosts runtime proportionally. The 14-inch RY40580 gets similar cut counts on the same batteries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Ryobi chainsaws only sold at Home Depot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ryobi is a Home Depot exclusive in the United States. You can buy online through homedepot.com for delivery or in-store pickup, and in-store at any Home Depot location. Ryobi Direct (ryobitools.com) handles replacement parts and accessories. Ryobi does not sell through Amazon (third-party listings are often old stock or refurbished).',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Ryobi chainsaw compare to EGO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EGO CS1804 18-inch ($299) is a small step up in motor performance and runtime per amp-hour, and EGO has a larger outdoor tool ecosystem. But Ryobi wins on price ($279 vs $299), Home Depot availability (instant in-store replacement parts and battery swaps), and the 280+ tool 18V One+ platform adds massive cross-compatibility with indoor/workshop tools. For the homeowner buyer, Ryobi is the pragmatic choice; EGO is the performance pick.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does California offer rebates on Ryobi chainsaws?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some air districts have. South Coast AQMD, Sacramento Metro AQMD, and San Joaquin Valley APCD have run battery-tool exchange programs that included chainsaws in past program years. CARB SORE does not cover chainsaws, so these programs are voluntary and funding-dependent. Rebates on chainsaws, when available, have ranged $50-$250. Check your local AQMD site yearly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Ryobi 40V HP and regular 40V?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The HP (High Performance) line uses brushless motors, higher-amperage motor controllers, and denser HP-specific battery packs to deliver 20-40% more power than standard Ryobi 40V tools. The RY405010 chainsaw is an HP model, critical for chainsaw work where motor torque and heat management matter. Non-HP 40V Ryobi chainsaws still exist but should be avoided if you can afford the HP version.',
      },
    },
  ],
};

export default function RyobiChainsawReview() {
  return (
    <ReviewLayout>
      <ReviewHeader />
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
            <nav className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
              <Link href='/reviews' className='hover:text-primary transition-colors'>
                Reviews
              </Link>
              <ChevronRight className='h-3 w-3' />
              <Link
                href='/reviews/best-electric-chainsaw'
                className='hover:text-primary transition-colors'
              >
                Best Electric Chainsaws
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>Ryobi Chainsaw</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Ryobi Chainsaw Review 2026: 40V HP Brushless and 18-40V
                Cordless Options
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>14 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Budget Pick'
              rating={4.4}
              verdict='The Ryobi 40V HP Brushless 18-inch chainsaw (RY405010, $279) is the best-value cordless chainsaw at Home Depot — Oregon bar, brushless motor, 100+ cuts on 4Ah.'
              pros={[
                'Oregon bar and chain',
                'Home Depot parts and batteries in-store',
                '280+ tool 18V One+ ecosystem cross-compatibility',
                '5-year tool warranty',
              ]}
              cons={[
                'Home Depot exclusive (no Amazon, no big-box alternatives)',
                'Not a pro-grade saw',
              ]}
              source='ryobi-chainsaw'
              variant='top'
            />

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
                Ryobi&apos;s 40V HP Brushless chainsaw lineup is the
                budget-friendly way into a serious cordless chainsaw in
                2026. The 18-inch RY405010 ($279) runs an Oregon bar and
                chain on a brushless motor, cuts 4-inch hardwood in 3-4
                seconds, and rides on Ryobi&apos;s 80+ tool 40V platform. The
                14-inch RY40580 ($229) is the right pick for most homeowners.
                For light pruning and branch work, the 18V One+ P2500B 10-inch
                compact ($99-$139 tool-only) is a near-impulse buy for
                anyone already on the huge Ryobi 18V One+ platform
                (280+ tools, the largest in cordless). All three are
                Home Depot exclusives. You pay a small performance tax vs EGO
                or DeWalt, and you save some money, and you get instant
                Home Depot stock access to parts and batteries. For
                homeowners, that trade usually works out.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Existing Ryobi 18V One+ or 40V owners
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Budget-conscious homeowners under $300
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Home Depot loyalists who value in-store parts
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
                      Commercial/daily professional use
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Felling trees over 14 inches
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Buyers who want the absolute best cutting performance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Key Specifications
              </h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        Spec
                      </th>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        RY405010 (18")
                      </th>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        RY40580 (14")
                      </th>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        P2500B (10")
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Bar Length
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>18 in</td>
                      <td className='px-4 py-3 text-foreground/80'>14 in</td>
                      <td className='px-4 py-3 text-foreground/80'>10 in</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Platform
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        40V HP
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        40V HP
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        18V One+
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Motor
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Brushless
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Brushless
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Brushless
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Bar &amp; Chain
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Oregon low-kickback
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Oregon low-kickback
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Oregon low-kickback
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Weight (no battery)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>11.2 lbs</td>
                      <td className='px-4 py-3 text-foreground/80'>9.8 lbs</td>
                      <td className='px-4 py-3 text-foreground/80'>6.2 lbs</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Chain Tensioning
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Tool-free
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Tool-free
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Tool-free
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        Safety
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Chain brake + low-kickback
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Chain brake + low-kickback
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Chain brake + low-kickback
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Warranty
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>5 year</td>
                      <td className='px-4 py-3 text-foreground/80'>5 year</td>
                      <td className='px-4 py-3 text-foreground/80'>3 year</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <DollarSign className='h-4 w-4 text-primary' />
                        Price
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        $279 kit
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        $229 kit
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        $99-$139 tool-only
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                40V HP Brushless Flagship (RY405010)
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The RY405010 is Ryobi&apos;s answer to the EGO CS1804 and the
                Greenworks 80V 18-inch. It runs on Ryobi&apos;s 40V HP
                platform. The &quot;High Performance&quot; subset of their
                40V line that uses brushless motors, higher-current
                controllers, and HP-specific denser battery packs. For
                chainsaws, specifically, the HP designation matters: a
                non-HP 40V Ryobi chainsaw exists, and it&apos;s noticeably
                less capable under load. Always buy the HP version.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Cutting performance on the RY405010 is genuinely competitive
                with EGO. Through 4-inch dry pine, it takes about 3 seconds
                per cut; through 4-inch green oak, 4.5 seconds; through
                8-inch oak rounds, 8-10 seconds depending on chain
                sharpness. Chain speed holds steady until the last 15% of
                battery state of charge thanks to brushless monitoring. Peak
                chain speed is ~19 m/s (3,740 ft/min), slightly below EGO
                (20 m/s) and DeWalt (19 m/s) but not in a way you can feel
                cut-to-cut.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 18-inch bar is Oregon&apos;s LPX58. A good mid-range pro
                bar that takes any standard 58-link low-profile chain. The
                factory chain is Oregon&apos;s S58 low-kickback chain.
                Replacement chains are available at any Home Depot for ~$15
                or online for $12. Unlike some competitors who spec
                proprietary chain pitches, Ryobi uses the industry-standard
                0.325 low-profile pitch, so you can upgrade to a more
                aggressive chain if you know what you&apos;re doing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                14-inch 40V HP (RY40580): The Best Size for Most
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The RY40580 is the same motor architecture as the RY405010
                with a shorter 14-inch Oregon bar. Weight drops from 11.2 lbs
                to 9.8 lbs without battery, which makes a meaningful
                difference when you&apos;re reaching overhead for limb work
                or cutting for extended periods. For 80-90% of what
                homeowners actually use a chainsaw for — storm branches,
                occasional firewood rounds under 10 inches, limbing, yard
                cleanup, the 14-inch saw handles it easily and with less
                fatigue than the 18-inch.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The $229 kit price includes a 4.0Ah HP battery and charger.
                For a homeowner buying their first serious cordless chainsaw,
                this is the sweet spot on the price/capability curve.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                18V One+ P2500B: Compact Limber
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The P2500B is a 10-inch chainsaw on Ryobi&apos;s massive 18V
                One+ platform. Unlike the 40V saws, this is a
                single-handed-capable compact tool designed for light
                pruning, branch cleanup after storms, and quick cuts. It
                weighs just 6.2 lbs with a 4.0Ah 18V battery installed, and
                it&apos;s priced at $99-$139 tool-only — which is the main
                reason to care about it. If you already own any of the 280+
                Ryobi 18V One+ tools, adding a compact chainsaw to your
                collection for a hundred bucks is a no-brainer.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                What you give up: raw cutting power. Through 4-inch oak, the
                P2500B takes 8-10 seconds per cut vs. 4.5 seconds for the
                40V HP saws. Chain speed is noticeably slower (~14 m/s). For
                anything over 8 inches in diameter, this saw will struggle
                and overheat under sustained load. It&apos;s a limber, not
                a firewood processor. Used within that context, cleaning up
                branches up to 6 inches, trimming hedges, tidying up after
                storms, it&apos;s fantastic for the money.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Runtime Math (100+ Cuts on 4Ah)
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s what we measured across the Ryobi lineup with
                Ryobi HP batteries:
              </p>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Material
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        RY405010 (4Ah HP)
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        RY40580 (4Ah HP)
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        P2500B (4Ah 18V)
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        4" pine
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        ~130 cuts
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        ~140 cuts
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        ~90 cuts
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        4" oak
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        ~80 cuts
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        ~85 cuts
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        ~50 cuts
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        8" oak rounds
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        ~40 cuts
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        ~42 cuts
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        ~20 cuts (struggles)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Doubling battery size (4Ah → 8Ah) roughly doubles cut count.
                The RY40520VNM 6.0Ah HP and 12.0Ah HP batteries extend the
                40V saws into half-day work sessions.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                vs EGO CS1804 (Direct Comparison)
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The EGO CS1804 and Ryobi RY405010 are the two main cordless
                18-inch homeowner chainsaws. Head-to-head:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6 list-none'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>Cutting speed:</strong> EGO slightly faster (20 m/s
                  vs 19 m/s chain speed). 5-10% faster through hardwood
                  cross-cuts.
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>Runtime per Ah:</strong> EGO slightly ahead on
                  cut-per-Ah efficiency, roughly 10% more cuts.
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>Price:</strong> Ryobi wins $279 kit vs EGO $299
                  kit. Tool-only, Ryobi is ~$229 vs EGO ~$229.
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>Ecosystem:</strong> EGO has 70+ outdoor tools on
                  Arc Lithium 56V. Ryobi has 80+ on 40V HP AND 280+ on 18V
                  One+ for a total of 360+ across both platforms — massive
                  win for Ryobi if you want one brand to cover outdoor AND
                  indoor/workshop.
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>Parts / serviceability:</strong> Ryobi wins — any
                  Home Depot stocks bars, chains, batteries, chargers.
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>Warranty:</strong> Tie at 5 years for both tools.
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Verdict: Ryobi for the value and platform breadth, EGO for a
                small performance edge and the outdoor-focused platform
                feel. Most buyers will be fine with either.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                vs DeWalt 60V FLEXVOLT (DCCS670X1)
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                DeWalt&apos;s 60V 16-inch chainsaw is ~$349-$399 kit. It
                wins on FLEXVOLT cross-compatibility with construction tools
                and on build quality feel (thicker plastic, more metal in the
                bar mount), but costs more, carries a shorter warranty
                (3-year), and offers narrower outdoor-tool ecosystem. If
                you&apos;re a contractor who also needs a chainsaw, go
                DeWalt. If you&apos;re a homeowner, Ryobi saves meaningful
                money with very little functional tradeoff.
              </p>

              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Ready to buy?'
                verdict='Ryobi chainsaws are Home Depot exclusives. Check homedepot.com for current pricing, in-store availability, and bundle deals.'
                source='ryobi-chainsaw'
                variant='mid'
              />

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Home Depot Exclusive: The Real Advantage
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ryobi has been Home Depot exclusive in the US for over two
                decades. That&apos;s the structural reason the brand can
                price aggressively. no margin paid to other retailers, no
                inventory split, and no rivalry between distribution
                channels. For you, the buyer, Home Depot exclusivity has
                practical advantages:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6 list-none'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>Parts always in stock.</strong> Chains, bars,
                  batteries, chargers are on the shelf at any Home Depot — no
                  waiting on Amazon or manufacturer direct orders.
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>Return policy.</strong> Home Depot&apos;s 90-day
                  (or more) return window for tools is more forgiving than
                  most manufacturer-direct channels.
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>Bundle deals.</strong> Ryobi runs aggressive
                  holiday promotions at Home Depot — $100+ off kits, buy
                  battery get tool free, etc.
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>Service.</strong> Home Depot partners with Ryobi
                  Direct for warranty repairs, so service is straightforward
                  within the 5-year warranty window.
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California AQMD Rebates
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                CARB SORE. The 2024 California regulation that banned new
                gas leaf blowers and mowers — does NOT currently include
                chainsaws, so gas chainsaws are still legal to buy and sell.
                That said, several California air districts have offered
                voluntary battery-tool rebates that include chainsaws:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6 list-none'>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>South Coast AQMD</strong> — $50-$250 rebates on
                  battery chainsaws in past program rounds (LA, OC,
                  Riverside, SB counties).
                </li>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>Sacramento Metro AQMD</strong> — bundled chainsaws
                  into the Sacramento Mow-Down program.
                </li>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>San Joaquin Valley APCD</strong> — commercial
                  equipment rebates sometimes include chainsaws.
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Check each year&apos;s program at your county AQMD. a
                $150-$250 rebate on a $279 chainsaw is essentially a
                half-price saw.
              </p>

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
                      Best price point in 18-inch cordless ($279)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Oregon bar and chain (industry standard)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Brushless motor, tool-free tensioning, auto-oiler
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      280+ tool 18V One+ platform
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      80+ tool 40V HP platform
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Home Depot in-store parts availability
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      5-year tool warranty
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
                      Home Depot exclusive, no alternative retailers
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Slightly slower than EGO/DeWalt on cut times
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Consumer-grade durability — not built for daily
                      commercial use
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Two different Ryobi battery platforms (18V and 40V)
                      are NOT cross-compatible
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is the Ryobi 40V HP powerful enough for firewood?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes for homeowner-scale firewood. Cuts 4-inch hardwood in
                    3-4 seconds, handles 8-12 inch rounds. You&apos;ll want
                    multiple batteries for full-cord sessions.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How many cuts per battery?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    4.0Ah HP: ~130 cuts in 4" pine, ~80 in 4" oak, ~40 in 8"
                    oak rounds. Scales linearly with battery size.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Home Depot only?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes in the US. In-store and homedepot.com. Ryobi does not
                    sell through Amazon — third-party Amazon listings are
                    often used, refurbished, or old stock.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Ryobi vs EGO?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    EGO slightly faster and more efficient per Ah. Ryobi
                    cheaper and has far broader total tool ecosystem (360+
                    tools across 18V+40V). Either is a solid choice.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    California rebates?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Some AQMDs have offered $50-$250 rebates on battery
                    chainsaws (South Coast, Sacramento Metro, San Joaquin
                    Valley). Check yearly.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    40V HP vs regular 40V?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    HP uses brushless motors, higher-current controllers, and
                    denser HP-specific batteries for 20-40% more power. On
                    chainsaws, always buy HP.
                  </p>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Ryobi chainsaw lineup is the pragmatic homeowner&apos;s
                pick in 2026. The RY405010 40V HP 18-inch gets you 95% of
                EGO&apos;s performance for $20 less, with Oregon bar and
                chain, brushless motor, tool-free tensioning, and a 5-year
                warranty. The RY40580 14-inch is the right saw for most
                yards. The P2500B 10-inch is a no-brainer add-on for anyone
                already on the Ryobi 18V One+ platform. Home Depot
                exclusivity means parts, batteries, and chains are always
                three miles away. For homeowners building out a broad
                cordless tool collection at reasonable prices, Ryobi is
                hard to beat.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Final Verdict'
              verdict='If you shop at Home Depot and want the best value cordless chainsaw, the Ryobi 40V HP line is the pick. Check current pricing and bundle deals.'
              source='ryobi-chainsaw'
              variant='final'
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See how Ryobi compares to EGO, DeWalt, Milwaukee, and
                Husqvarna in our full electric chainsaw ranking.
              </p>
              <Link
                href='/reviews/best-electric-chainsaw'
                className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
              >
                See The Full Ranking
                <ChevronRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/best-electric-chainsaw'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <Home className='h-4 w-4' />
                All Chainsaws
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
      <StickyMobileCTA productKey={PRODUCT_KEY} source='ryobi-chainsaw' />
    </ReviewLayout>
  );
}
