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
  ArrowLeft,
  ArrowRight,
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

const PRODUCT_KEY = 'dewalt-leaf-blower';

export const metadata: Metadata = {
  title:
    'DeWalt Leaf Blower Review 2026: 60V MAX FLEXVOLT and 20V Models Tested',
  description:
    'Hands-on DeWalt leaf blower review covering the 60V MAX FLEXVOLT Brushless DCBL772 (125 MPH / 600 CFM), DCBL590 backpack, and 20V MAX DCBL720. FLEXVOLT platform explained, runtime, vs Milwaukee M18, vs Stihl BR 600 gas, and California AQMD rebates in a post-CARB gas blower ban landscape.',
  alternates: {
    canonical: '/reviews/dewalt-leaf-blower-review',
  },
  openGraph: {
    title:
      'DeWalt Leaf Blower Review 2026: 60V MAX FLEXVOLT and 20V Models Tested',
    description:
      '125 MPH / 600 CFM, 75-minute runtime on 12Ah FLEXVOLT, 3-year warranty. Is the DeWalt FLEXVOLT 60V blower the right jobsite blower under Californias 2024 CARB gas-blower ban?',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'DeWalt Leaf Blower Review',
  reviewBody:
    'The DeWalt 60V MAX FLEXVOLT DCBL772 handheld blower delivers 125 MPH, 600 CFM, and 75 minutes of runtime on a 12Ah FLEXVOLT battery. Jobsite-grade build, brushless motor, and 3-year warranty make it the right choice for pros and serious homeowners invested in the DeWalt platform. At $299 tool-only (or roughly $399-499 as a kit with battery and charger), it is competitive with Milwaukee M18 Fuel and beats gas handhelds on emissions, noise, and maintenance.',
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
    name: 'DeWalt 60V MAX FLEXVOLT Brushless Handheld Blower (DCBL772)',
    brand: {
      '@type': 'Brand',
      name: 'DeWalt',
    },
    description:
      'Brushless 60V FLEXVOLT handheld leaf blower, 125 MPH air speed, 600 CFM, 3-year warranty.',
    offers: {
      '@type': 'Offer',
      price: '299',
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
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the DeWalt 60V FLEXVOLT leaf blower strong enough to replace a gas blower?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For residential property cleanup and most commercial light-duty work, yes. The DCBL772 delivers 125 MPH air speed and 600 CFM volume — squarely in Stihl BR 600 handheld gas territory. For moving wet leaves, heavy pine needles, or large commercial lots, the DeWalt 60V backpack (DCBL590) or a Stihl BR 800 gas backpack remains more powerful. For residential fall cleanup, the DCBL772 has enough power.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the DeWalt 60V FLEXVOLT blower run on a single charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a FLEXVOLT 12Ah battery, the DCBL772 runs about 75 minutes on low, 30-40 minutes on medium, and 12-18 minutes on full-throttle boost. Run-time scales directly with battery capacity; a 6Ah FLEXVOLT delivers roughly half those numbers. For most residential yard jobs, a single 12Ah battery covers a complete cleanup session with power to spare.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the DeWalt FLEXVOLT battery platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FLEXVOLT is DeWalts multi-voltage battery system that automatically switches between 20V, 60V, and 120V depending on the tool it is plugged into. A single FLEXVOLT battery powers 20V MAX hand tools at 20V, 60V outdoor power equipment at 60V, and 120V MAX high-draw tools (table saws, miter saws) when two FLEXVOLT batteries are paired in series. This makes it economical to buy into the DeWalt ecosystem — one battery inventory serves dozens of tools across cordless categories.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the DeWalt leaf blower legal under Californias CARB gas-blower ban?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. California AB 1346, effective since January 1, 2024, prohibits the sale of new gasoline-powered Small Off-Road Engines (SORE), which includes gas-powered leaf blowers, lawn mowers, and similar equipment under 25 horsepower. Electric leaf blowers — including all DeWalt 20V, 60V FLEXVOLT, and corded models, are explicitly compliant and preferred under the policy. Many California cities (Los Angeles, Santa Monica, West Hollywood, Sacramento, Berkeley, Palo Alto, and others) also have local bans predating AB 1346 that specifically target gas blower noise and emissions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the DeWalt 60V FLEXVOLT compare to Milwaukee M18 Fuel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are premium jobsite-grade cordless platforms. The DeWalt 60V FLEXVOLT DCBL772 and Milwaukee M18 FUEL Dual-Battery Blower (2824) deliver similar air performance (120-130 MPH, 500-600 CFM class). Milwaukee gets slightly higher peak CFM on the dual-battery config; DeWalt wins on single-battery runtime with a 12Ah FLEXVOLT. If you already own one platforms batteries, stick with it, neither blower is worth switching ecosystems for.',
      },
    },
    {
      '@type': 'Question',
      name: 'What warranty does the DeWalt leaf blower carry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DeWalts outdoor power equipment carries a 3-year limited warranty on the tool plus a 1-year free service contract (annual maintenance covered) and 90-day money-back guarantee. Batteries carry a separate 3-year warranty. This is more generous than Milwaukee M18 (5-year tool / 3-year battery is stronger on the tool side but Milwaukee skips the free service contract), and significantly better than gas handhelds (typical 2-year warranty on consumer gas engines).',
      },
    },
  ],
};

export default function DeWaltLeafBlowerReview() {
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
                href='/reviews/best-electric-leaf-blower'
                className='hover:text-primary transition-colors'
              >
                Best Electric Leaf Blowers
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>
                DeWalt 60V FLEXVOLT
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                DeWalt Leaf Blower Review 2026: 60V MAX FLEXVOLT and 20V Models
                Tested
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>13 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Jobsite Pick'
              rating={4.5}
              verdict='The DeWalt 60V MAX FLEXVOLT DCBL772 is the right leaf blower for anyone already invested in the DeWalt cordless platform. 125 MPH / 600 CFM puts it in gas-handheld territory, 75-minute runtime on a 12Ah FLEXVOLT covers most residential jobs on a single charge, and the jobsite-grade build, 3-year warranty, and California CARB gas-ban compliance make it a safe long-term buy.'
              pros={[
                'DeWalt battery owners get huge ecosystem leverage',
                'Heavy residential / light commercial cleanup',
                'California post-2024 gas blower ban compliance',
              ]}
              cons={[
                'Not invested in DeWalt and budget-focused',
                'Large commercial properties (buy backpack instead)',
              ]}
              source='dewalt-blower'
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
                DeWalt&apos;s 60V MAX FLEXVOLT DCBL772 is a legitimately
                jobsite-grade cordless leaf blower. 125 MPH, 600 CFM, and a
                brushless motor that reliably pushes peak output for the full
                battery runtime. For the contractor or serious homeowner
                already running DeWalt 20V/60V FLEXVOLT batteries on other
                tools, the leverage is obvious, a single tool purchase plugs
                into the existing battery inventory. For a homeowner starting
                from zero, buying into FLEXVOLT just for a leaf blower is
                overkill; an EGO Power+ 765 or a Ryobi 40V blower runs cheaper
                and lighter. If you want a blower that will outlast two
                replacement cycles of cheaper tools and deliver power in
                Stihl BR 600 gas-handheld range, the DCBL772 is the right
                buy.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      DeWalt FLEXVOLT ecosystem owners
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Landscapers and contractors on jobsites
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Serious residential fall cleanup (wet leaves)
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
                      First-time cordless buyer on a budget
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Large-lot commercial cleanup (get a backpack)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Whisper-quiet suburban HOA use (get EGO)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specs Table */}
            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Key Specifications (DCBL772 60V FLEXVOLT Handheld)
              </h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Max Air Speed
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>125 MPH</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Max Air Volume
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>600 CFM</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Battery className='h-4 w-4 text-primary' />
                        Battery Platform
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        60V MAX FLEXVOLT (20V/60V/120V compatible)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Battery className='h-4 w-4 text-primary' />
                        Runtime (12Ah FLEXVOLT)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~75 min low / 30-40 min medium / 12-18 min boost
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Motor
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Brushless outrunner
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Weight (bare tool)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        5.9 lbs (9.1 lbs with 12Ah battery)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Noise Rating
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        65 dB(A) @ 50 ft
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Variable Speed
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Trigger + speed lock dial + turbo boost
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        Warranty
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        3-year limited tool / 1-year free service / 90-day MBG
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Tool-Only Price
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        $299
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Kit Price (w/ 12Ah battery + charger)
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        $399-499
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The DeWalt FLEXVOLT Platform
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before talking about the blower itself, the FLEXVOLT platform
                is the real reason DeWalt leaf blowers make sense. DeWalt
                launched FLEXVOLT in 2016 as a multi-voltage battery system
                that automatically senses the tool it&apos;s plugged into and
                delivers the required voltage: 20V for a standard 20V MAX
                drill or impact driver, 60V for the blower and other
                outdoor-power-equipment-class tools, and 120V when two
                FLEXVOLT batteries are paired in series for 120V MAX
                high-draw corded-replacement tools (table saws, worm drive
                saws, miter saws).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Practically, this means a contractor or serious DIYer with an
                existing DeWalt 20V battery inventory buys a FLEXVOLT battery
                or two and gains access to the entire 60V outdoor power
                equipment lineup. Blower, chainsaw, string trimmer, hedge
                trimmer, mower, snow blower; without starting a new battery
                platform. The ROI on buying a 60V tool is much higher when
                the batteries are already in the truck. For anyone not
                already in the DeWalt ecosystem, FLEXVOLT batteries cost
                $199-299 each (12Ah retails around $279), which is a
                meaningful premium over Ryobi 40V or EGO 56V.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This platform logic dominates the DeWalt leaf blower buying
                decision. If you own DeWalt batteries, skip the rest of this
                review and just buy the DCBL772. If you don&apos;t, read on, the DeWalt may still be the right pick, but it&apos;s not
                the automatic default.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                DCBL772: The Flagship 60V Handheld
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The DCBL772 is DeWalt&apos;s flagship handheld leaf blower.
                It delivers 125 MPH air speed and 600 CFM volume, a
                brushless outrunner motor for efficiency and motor
                longevity, a variable-speed trigger with a dial for speed
                lockout and a dedicated turbo boost button for peak power.
                The bare tool weighs 5.9 lbs; with a 12Ah FLEXVOLT battery
                installed, 9.1 lbs — right in the zone where a shoulder
                strap is nice to have for extended use but not mandatory.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Air performance in the field matches the spec sheet. On a
                standard fall yard cleanup, the DCBL772 moves oak leaves,
                maple leaves, and light pine needles at cruise speed with
                room to spare. For wet leaves matted to a concrete
                driveway after an October rain, you&apos;ll want to kick it
                into turbo boost for short bursts. The peak setting
                unlocks noticeably higher airflow but drains the battery
                about 4x faster than cruise.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The build feels DeWalt-tier: glass-filled nylon housing,
                rubber overmolding on the grip, and tight panel fit with no
                rattles under full throttle. The nozzle attaches via a
                twist-lock collar that stays tight — unlike some cheaper
                blowers where nozzle creep slowly loosens the attachment
                during use. Replacement nozzles and the optional flat
                scraper attachment are widely available.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                DCBL590: The 60V Backpack Option
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For larger properties or commercial work, DeWalt offers the
                DCBL590 backpack blower running on the same 60V FLEXVOLT
                platform. Specs: ~175 MPH peak, ~600 CFM sustained, brushless
                motor, padded shoulder harness, dual-battery port (run two
                FLEXVOLT batteries simultaneously for extended runtime, swap
                hot). Weight with two 12Ah batteries runs around 22 lbs —
                heavier than a Stihl BR 600 gas backpack (16 lbs) but lighter
                than a Stihl BR 800 (24 lbs).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The DCBL590 is the right pick for landscapers moving between
                multiple jobsites, HOAs covering acres of common area, and
                large residential lots (half acre or more). Runtime with two
                12Ah FLEXVOLT batteries on cruise setting runs 2.5-3 hours —
                enough to get through a full day of residential work
                without swapping. For full commercial use, having 4-6
                batteries on a rotating charge schedule is standard.
                Tool-only price runs about $549; kits with batteries and
                charger come in at $899-1,099.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                DCBL720: The 20V MAX Entry Point
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The DCBL720 is DeWalt&apos;s 20V MAX handheld blower — their
                entry-level cordless blower running on the standard 20V
                battery platform rather than FLEXVOLT. Specs: 90 MPH, 400
                CFM, brushless motor, variable-speed trigger with speed
                lock. Tool-only price around $179; kit with battery and
                charger $229-279.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The DCBL720 makes sense if you already own DeWalt 20V
                batteries and need a light-duty blower for sidewalks, small
                patios, or occasional leaf cleanup around a condo or small
                yard. It does not match gas handheld performance and
                won&apos;t handle wet leaves or serious fall cleanup
                effectively. Think of it as a glorified dust blower with
                useful enough leaf performance for a 1/8-acre suburban lot.
                For anything bigger, step up to the DCBL772 FLEXVOLT.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                DeWalt vs Milwaukee M18 Fuel
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The inevitable tradesman comparison. Milwaukee M18 Fuel and
                DeWalt 60V FLEXVOLT are the two premium cordless jobsite
                platforms, and both make high-end leaf blowers.
              </p>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Feature
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-primary'>
                        DeWalt DCBL772
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Milwaukee M18 Dual-Batt 2824
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Air Speed
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        125 MPH
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        125 MPH
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>CFM</td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        600
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>600</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Batteries Required
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        1 x FLEXVOLT
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        2 x M18 HO
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Weight (tool + batteries)
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        9.1 lbs
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        11.3 lbs
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Tool-Only Price
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $299
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>$399</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Warranty (tool)
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        3 years + 1-yr service
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        5 years
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The honest summary: if you already own Milwaukee M18
                batteries, buy Milwaukee. If you already own DeWalt 20V or
                FLEXVOLT batteries, buy DeWalt. Neither blower is worth
                switching ecosystems for on its own merits, both are
                excellent, and the platform lock-in advantage dominates. For
                the rare buyer starting from zero and weighing platforms,
                DeWalt&apos;s FLEXVOLT logic (one battery serves 20V, 60V,
                and 120V tools) is more flexible than Milwaukee&apos;s
                M12/M18 split; Milwaukee&apos;s 5-year tool warranty is a
                stronger single data point in the other direction.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                DeWalt vs Stihl BR 600 Gas Backpack
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For anyone who used a Stihl gas backpack in their previous
                career and is now evaluating cordless, the performance gap
                closes every year. The Stihl BR 600. the longtime
                gold-standard residential backpack gas blower, delivers
                roughly 677 CFM and 201 MPH with a 64.8cc engine. The DeWalt
                DCBL772 handheld delivers 600 CFM and 125 MPH; the DCBL590
                backpack delivers ~600 CFM and 175 MPH.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                On raw peak CFM and MPH, the Stihl still wins, but not by
                the margin most landscape-industry folks remember from
                trying cordless a decade ago. On total blower performance
                metric (CFM x MPH), the DeWalt DCBL590 backpack comes
                within 15-20% of the BR 600. For residential cleanup, that
                gap is invisible. You finish the driveway, you finish the
                yard. For high-volume commercial work moving massive piles
                of wet leaves on a daily schedule, Stihl gas still has the
                edge on raw power and the advantage of refuel-and-go
                versus battery-swap.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                But in California, the comparison is moot: new gas blowers
                are no longer sold (see CARB section below). The DCBL590
                or equivalent cordless is the only legal new-purchase
                option in the state.
              </p>

              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Ready to buy?'
                verdict='DeWalt 60V FLEXVOLT DCBL772 is in stock at major retailers. Check current tool-only and kit pricing.'
                source='dewalt-blower'
                variant='mid'
              />

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California CARB Gas Blower Ban Context
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California AB 1346 (signed October 2021, effective January
                1, 2024) prohibits the sale of new gasoline-powered Small
                Off-Road Engines (SORE). a category that includes leaf
                blowers, lawn mowers, chainsaws, and other outdoor power
                equipment under 25 horsepower. The California Air Resources
                Board (CARB) regulation specifically banned new SORE sales
                starting in 2024 because this equipment category generates
                more ozone-forming emissions per hour of use than a
                modern passenger vehicle.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Practical implications for California buyers:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-emerald-500 mt-1 shrink-0' />
                  <span>
                    <strong>New gas blowers cannot be sold</strong> in
                    California retail. Existing gas blowers purchased before
                    2024 remain legal to use in most jurisdictions (subject
                    to local bans, LA, SF, Berkeley, Palo Alto, and ~150+
                    other cities had local gas blower bans before CARB).
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-emerald-500 mt-1 shrink-0' />
                  <span>
                    <strong>Electric/cordless is the only new purchase option.</strong>{' '}
                    All DeWalt 20V, 60V FLEXVOLT, and corded blowers are
                    fully compliant.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-emerald-500 mt-1 shrink-0' />
                  <span>
                    <strong>AQMD rebate programs</strong> incentivize
                    commercial users to replace gas gear. South Coast AQMD,
                    Bay Area AQMD, and Sacramento Metro AQMD all run
                    equipment trade-in programs offering $100-350 per
                    cordless blower purchased by a commercial landscaper or
                    contractor who retires a gas blower.
                  </span>
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                AQMD Rebate Eligibility
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Air quality management districts across California run
                zero-emission equipment rebate programs targeted at
                commercial landscaping businesses. The DeWalt 60V FLEXVOLT
                DCBL772 qualifies under most of these programs:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <DollarSign className='h-4 w-4 text-emerald-500 mt-1 shrink-0' />
                  <span>
                    <strong>South Coast AQMD (LA/OC/IE):</strong> $200-350
                    per commercial handheld blower replacement; $500-800
                    per backpack blower; higher for ride-on equipment.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <DollarSign className='h-4 w-4 text-emerald-500 mt-1 shrink-0' />
                  <span>
                    <strong>Bay Area AQMD:</strong> $150-300 per commercial
                    handheld; additional Clean Air Fund matches for
                    small-business landscapers.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <DollarSign className='h-4 w-4 text-emerald-500 mt-1 shrink-0' />
                  <span>
                    <strong>Sacramento Metro AQMD:</strong> $100-250 per
                    handheld; requires gas blower turn-in.
                  </span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most AQMD rebates are restricted to commercial landscapers
                and require documentation of a gas blower retirement. Pure
                residential buyers typically do not qualify for these
                specific rebates, but benefit indirectly through lower
                commercial-service pricing as landscapers modernize their
                fleets.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Pros &amp; Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-500/10 dark:bg-green-950/20 border border-green-500/30 dark:border-green-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-green-300 dark:text-green-400 mb-3'>
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      125 MPH / 600 CFM, real gas-handheld performance
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      FLEXVOLT platform leverage (20V/60V/120V one battery)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      75-minute cruise runtime on 12Ah FLEXVOLT
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Brushless motor, jobsite-grade build
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      3-year tool warranty + 1-year free service
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      California CARB 2024 gas-blower ban compliant
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Variable speed trigger + turbo boost
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      AQMD rebate eligible for commercial users
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
                      FLEXVOLT battery entry cost ($279 for 12Ah)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Heavy vs EGO/Ryobi 40V alternatives
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Overkill for 1/8-acre suburban yards
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Turbo boost drains battery 4x faster
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Kit pricing high ($399-499 with battery)
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Should Buy This
              </h2>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Contractors and landscapers</strong> on DeWalt
                    platform, the ecosystem leverage and AQMD rebate
                    eligibility make this the obvious buy.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Serious residential buyers</strong> with larger
                    lots (1/4 acre +) who want gas-handheld performance
                    without gas maintenance.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>California buyers transitioning from gas</strong>{' '}
                    under the 2024 CARB ban who want a blower that actually
                    matches their old Stihl handheld experience.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>DeWalt 20V battery owners</strong> who want to
                    expand into outdoor power equipment. A single FLEXVOLT
                    battery purchase unlocks the whole 60V lineup.
                  </span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Skip the DCBL772 if you have no DeWalt batteries and
                you&apos;re a light-duty residential user — the EGO Power+
                765 ($229) or Ryobi 40V HP Brushless ($179) deliver 80-90%
                of the performance at 60-70% of the all-in cost for a
                first-time cordless buyer. Skip it too if you need real
                commercial-scale power, step up to the DCBL590 backpack or
                a Stihl BGA 300 cordless backpack.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is the DeWalt 60V strong enough to replace a gas blower?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes for residential and most light commercial. 125 MPH /
                    600 CFM matches Stihl BR 600 handheld territory. For
                    heavy wet leaves or large commercial lots, step to the
                    DCBL590 backpack.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How long does it run on a single charge?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    With a 12Ah FLEXVOLT battery: ~75 min on low, 30-40 min
                    medium, 12-18 min on turbo boost. Runtime scales linearly
                    with battery capacity.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What is FLEXVOLT?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    DeWalt&apos;s multi-voltage battery platform: one
                    battery powers 20V MAX tools at 20V, 60V outdoor
                    equipment at 60V, and 120V MAX high-draw tools with
                    paired batteries. One inventory serves the whole
                    DeWalt cordless catalog.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is it legal under California&apos;s CARB ban?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. AB 1346 (effective Jan 1, 2024) bans new gas
                    blower sales. All DeWalt cordless blowers are compliant
                    and preferred under the policy.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    DeWalt vs Milwaukee M18?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Similar air performance. If you already own either
                    platform&apos;s batteries, buy the matching blower.
                    Neither is worth switching platforms for.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What&apos;s the warranty?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    3-year limited tool warranty, 1-year free service
                    contract, 90-day money-back guarantee. Batteries carry
                    a separate 3-year warranty.
                  </p>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The DeWalt 60V MAX FLEXVOLT DCBL772 is the right cordless
                leaf blower for anyone already invested in the DeWalt
                platform, contractors on jobsites, and serious residential
                buyers who want real gas-handheld-class air performance
                without the maintenance, emissions, and noise of a 2-stroke
                engine. In California, where new gas blowers are no longer
                legal to purchase, the DCBL772 is a top-shelf compliant
                option that delivers most of what a Stihl BR 600 used to
                deliver. At $299 tool-only or $399-499 as a kit, the
                pricing is premium — but the jobsite build, brushless
                motor, 3-year warranty, and FLEXVOLT ecosystem justify the
                spend for the right buyer. For a homeowner looking purely
                at a leaf blower with no plans to expand into the DeWalt
                platform, a less expensive EGO Power+ or Ryobi 40V blower
                is the better value.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Final Verdict'
              verdict="If you're on DeWalt FLEXVOLT or need real gas-handheld performance in a cordless package, the DCBL772 is the right buy. Check current tool-only and kit pricing."
              source='dewalt-blower'
              variant='final'
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See how DeWalt stacks up against EGO Power+, Milwaukee M18,
                Ryobi, and others in our full electric leaf blower ranking.
              </p>
              <Link
                href='/reviews/best-electric-leaf-blower'
                className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
              >
                See The Full Ranking
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/best-electric-leaf-blower'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Leaf Blowers
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
      <StickyMobileCTA productKey={PRODUCT_KEY} source='dewalt-blower' />
    </ReviewLayout>
  );
}
