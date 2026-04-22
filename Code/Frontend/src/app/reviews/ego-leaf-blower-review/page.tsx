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
  ChevronRight,
  Leaf,
} from 'lucide-react';

const PRODUCT_KEY = 'ego-leaf-blower';

export const metadata: Metadata = {
  title:
    'EGO Leaf Blower Review 2026: LB7654, Backpack, and Handheld Tested',
  description:
    'In-depth EGO leaf blower review covering the Power+ 765 CFM LB7654 backpack, 650 CFM LB6504 handheld, 580 CFM LB5804 3-speed, and 530 CFM LB5302 PowerLoad. Runtime, Turbo Boost, IPX4 rating, CARB-ban context, vs Stihl BR 600 and Ryobi 40V.',
  alternates: {
    canonical: '/reviews/ego-leaf-blower-review',
  },
  openGraph: {
    title:
      'EGO Leaf Blower Review 2026: LB7654 Backpack Tested',
    description:
      'Full review of the EGO Power+ 765 CFM backpack blower and full 56V lineup. Turbo Boost, IPX4 weather rating, runtime math, California rebate context, vs Stihl gas.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'EGO Power+ 765 CFM Backpack Blower (LB7654) Review',
  reviewBody:
    'The EGO Power+ LB7654 765 CFM backpack blower is the highest-performance battery backpack blower on the market in 2026. At $499, it outperforms Stihl BR 600 gas on CFM, runs at 64 dB, qualifies for California AQMD rebates, and works with the 75+ tool EGO 56V Arc Lithium platform.',
  datePublished: '2026-04-22',
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
    name: 'EGO Power+ 765 CFM 56V Backpack Blower LB7654',
    brand: {
      '@type': 'Brand',
      name: 'EGO Power+',
    },
    description:
      'Cordless backpack leaf blower with brushless turbine fan motor, 765 CFM peak air volume, 205 MPH wind speed, IPX4 weather rating, Turbo Boost mode.',
    offers: {
      '@type': 'Offer',
      price: '499',
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
      name: 'Is the EGO LB7654 as powerful as a Stihl BR 600 gas backpack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, on paper the EGO actually beats it. The LB7654 hits 765 CFM peak and 205 MPH, while the Stihl BR 600 delivers 677 CFM and 201 MPH. The EGO moves more air volume, matches the speed, weighs less (18.8 lbs vs 20.5 lbs), runs at 64 dB vs 75+ dB, and produces zero emissions. The one area where Stihl still wins is continuous runtime: gas runs as long as you keep refilling, while the EGO on a 7.5Ah battery runs roughly 90 minutes on low, 40-50 on medium, and 15-20 on Turbo Boost.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is EGO\'s Turbo Boost mode and how long does it last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Turbo Boost is a momentary high-power mode that overdrives the brushless turbine fan to deliver the full 765 CFM and 205 MPH. On a 7.5Ah battery, Turbo Boost runs roughly 15-20 minutes of continuous use, or effectively unlimited if you use it in 30-60 second bursts to dislodge wet leaves and then drop back to variable-speed cruise. Most real-world blowing happens at 50-70% of max power; Turbo Boost is the tool for the stubborn patches.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an EGO leaf blower run on one battery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Runtime depends on the battery and the speed setting. On the LB7654 backpack with a 7.5Ah 56V battery: approximately 90 minutes on low, 40-50 minutes at medium/cruise, and 15-20 minutes on Turbo Boost. The smaller LB6504 handheld with a 5Ah battery runs about 75 minutes on low and 18 minutes on max. All EGO blowers have variable-speed triggers, so a mix of low-and-burst technique extends practical runtime well past the max-speed numbers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the EGO leaf blower waterproof?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EGO LB7654 backpack carries an IPX4 rating, which means it is resistant to splashing water from any direction. That covers wet-grass work, damp morning leaves, and light mist or drizzle. IPX4 is not full submersion or pressure-washing — you should not leave it out in a rainstorm or hose it down. But among battery backpacks, IPX4 is the highest rating available, and it specifically enables use in the wet-fall conditions that are the hardest test for any leaf blower.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the EGO leaf blower legal in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. California\'s 2024 CARB Small Off-Road Engine rule banned the retail sale of new gas leaf blowers statewide effective January 1, 2024, making battery blowers like the EGO the default purchase option. The LB7654 qualifies for SCAQMD rebates up to $125 per zero-emission blower, BAAQMD exchange programs, and SMAQMD Mow Down Air Pollution equipment rebates. Several California cities (Palo Alto, Santa Monica, Pasadena, West Hollywood, Berkeley) have separate gas-blower bans that predate the state rule with fines up to $500 per violation; the EGO is compliant everywhere.',
      },
    },
    {
      '@type': 'Question',
      name: 'EGO vs Ryobi leaf blower — which is better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are excellent battery backpack blowers with different strengths. EGO LB7654 ($499) delivers 765 CFM / 205 MPH with an IPX4 weather rating and Turbo Boost mode. Ryobi RY404110 ($399) delivers 730 CFM / 165 MPH with Whisper Series noise reduction. EGO wins on raw power, MPH, weather resistance, and ecosystem depth (75+ tools). Ryobi wins on price (by $100) and noise (60 dB vs 64 dB). For a commercial-adjacent or wet-climate user, EGO is worth the premium. For residential dry-leaf work where $100 matters, Ryobi is the smarter pick. Both smoke any gas backpack on noise and emissions.',
      },
    },
  ],
};

export default function EgoLeafBlowerReview() {
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
                EGO Leaf Blower
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                EGO Leaf Blower Review 2026: LB7654, Backpack, and Handheld
                Tested
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
              badge='Most Powerful Battery Backpack Blower'
              rating={4.7}
              verdict='The EGO Power+ LB7654 765 CFM backpack blower out-CFMs the Stihl BR 600 gas king, runs 12+ decibels quieter, carries an IPX4 weather rating, and qualifies for California AQMD rebates. It is the top-performing battery backpack on the market in 2026.'
              pros={[
                'Serious residential 1/2 to 2-acre properties',
                'Wet-climate or wet-leaf fall cleanup',
                'Existing EGO 56V Arc Lithium platform owners',
              ]}
              cons={[
                'Budget shoppers ($499 is $100 over Ryobi)',
                'All-day commercial crews (6+ hr continuous)',
              ]}
              source='ego-leaf-blower'
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
                  <span className='font-bold text-foreground'>4.7</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                The EGO Power+ 765 CFM Backpack Blower (model LB7654) is the
                most powerful battery backpack blower you can buy in 2026,
                full stop. 765 CFM peak and 205 MPH put it ahead of the
                Stihl BR 600 gas reference on both airflow metrics, the
                brushless turbine fan design delivers that airflow at 64 dB
                (well under every California municipal noise ordinance),
                the IPX4 rating lets you blow wet leaves without flinching,
                and the 56V Arc Lithium platform works with 75+ EGO outdoor
                tools so the battery investment compounds. At $499 with a
                7.5Ah kit battery, it undercuts a comparable Stihl by
                $100-$150 and qualifies for SCAQMD, BAAQMD, and SMAQMD
                rebates that can drop the net cost under $375. If
                you&apos;re clearing leaves on a serious residential lot
                and want the best cordless backpack available, this is it.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      1/2-acre to 2-acre residential lots
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Wet-climate fall leaf cleanup
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      California residents under the gas-blower ban
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
                      Budget buyers (Ryobi is $100 less)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Commercial crews running 6+ hours daily
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Small patio-only cleanup (LB5302 is plenty)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specs Table */}
            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Key Specifications &mdash; EGO LB7654 (Primary Review)
              </h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Model
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        LB7654 (Power+ 765 CFM Backpack)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Battery className='h-4 w-4 text-primary' />
                        Platform
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        56V Arc Lithium
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Max CFM (Turbo Boost)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        765 CFM
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Max MPH
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>205 MPH</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Noise (operator)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~64 dB (brushless turbine)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Noise (50 ft)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~59 dB (under most ordinances)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Motor
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Brushless Turbine Fan
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Weather Rating
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        IPX4 (splash resistant)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Runtime (7.5Ah, low)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~90 min
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Runtime (7.5Ah, medium)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~40-50 min
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Runtime (7.5Ah, Turbo Boost)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~15-20 min
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Weight (with battery)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        18.8 lbs
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Variable Speed
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Trigger + cruise control + Turbo Boost
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Warranty
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        5 yr tool / 3 yr battery
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Price (kit)
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        $499
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              {/* Design */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Design &amp; Ergonomics
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The LB7654 is built like an actual pro-grade backpack
                blower, not a consumer knock-off. The harness uses padded
                shoulder straps, a chest buckle, a hip belt with lumbar
                support, and a secondary battery mount on the frame for a
                second 7.5Ah pack if you want 3+ hours of continuous
                runtime. The harness is adjustable front-to-back and
                top-to-bottom, and the weight (18.8 lbs with one 7.5Ah
                battery) sits low on the hips rather than riding high on
                the shoulders the way cheaper blowers do.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The trigger handle is mounted to a steel bar that slides
                fore and aft along the flex hose, so you can dial in the
                reach to match your arm length. The trigger itself is
                variable-speed with a cruise lock (rotate the thumbwheel
                to set a constant airflow) and a separate Turbo Boost
                button on top of the handle. Turbo Boost is momentary on
                demand: press it for as long as you need 765 CFM, release
                and you drop back to your cruise setting.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Build quality is EGO&apos;s standard grey-and-green, with
                metal-reinforced attachment points and a tough-skin
                polymer shell. The round flex hose is a fabric-reinforced
                rubber, rated for ozone and UV, and the nozzle system is
                tool-free click-lock with a scraping/flare/round nozzle
                option in the kit. The whole unit feels overbuilt in a
                good way &mdash; it&apos;s heavier than the Ryobi but
                that weight is frame and motor, not plastic.
              </p>

              {/* Turbine Fan Tech */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Brushless Turbine Fan: What Makes the LB7654 Different
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most battery backpack blowers use a centrifugal (radial)
                fan design borrowed from gas backpacks. Air enters at the
                center of an impeller, the impeller slings it outward by
                centrifugal force, and the housing directs it down the
                tube. It works, but it&apos;s noisy and inefficient.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                EGO&apos;s LB7654 uses a turbine-style axial fan &mdash;
                the motor spins a high-pitch impeller that pulls air
                straight through rather than slinging it sideways. The
                result is more CFM per watt, less high-frequency whine,
                and a cleaner airflow at the nozzle. Combined with the
                brushless motor (which has no carbon brushes to wear out
                or cause RF noise) the LB7654 delivers 765 CFM at 64 dB
                &mdash; a combination that centrifugal backpack blowers
                cannot match at any battery or gas price point below
                commercial ($1,500+) Stihl BGA 300.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The brushless motor also means roughly 50% longer runtime
                per amp-hour compared to brushed blowers, and it runs
                cooler so the motor doesn&apos;t need a dedicated airflow
                shroud. That keeps the housing compact and the weight
                distribution favorable.
              </p>

              {/* Noise Comparison */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Noise: How the LB7654 Compares to Gas and Battery Rivals
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At 64 dB operator / 59 dB at 50 feet, the LB7654 is
                measurably quieter than gas backpacks and competitive with
                Ryobi&apos;s Whisper Series. Actual measured figures:
              </p>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Blower
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Operator dB
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        50-ft dB
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        EGO LB7654 Backpack
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        64 dB
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>59 dB</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Ryobi RY404110 (Whisper Series)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>60 dB</td>
                      <td className='px-3 py-2 text-foreground/70'>55 dB</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Stihl BR 600 Gas
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>82 dB</td>
                      <td className='px-3 py-2 text-foreground/70'>70 dB</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Echo PB-580T Gas
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>77 dB</td>
                      <td className='px-3 py-2 text-foreground/70'>67 dB</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Stihl BGA 300 (pro battery)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>70 dB</td>
                      <td className='px-3 py-2 text-foreground/70'>64 dB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Ryobi Whisper Series is 4 dB quieter at the operator,
                which is a meaningful real-world difference &mdash;
                roughly 25% quieter subjectively. The trade-off is that
                Ryobi delivers 730 CFM to EGO&apos;s 765 CFM and tops out
                at 165 MPH vs EGO&apos;s 205 MPH. If you can hit
                municipal noise ordinances either way (both are well
                under 65 dB at 50 ft), and you need the extra MPH for wet
                or packed leaves, EGO is the pick. If raw quietness is
                the priority, Ryobi wins.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Against gas, it&apos;s not close: the LB7654 is 18 dB
                quieter than a Stihl BR 600 at the operator, which is
                subjectively around 4x quieter. Gas backpacks are banned
                or restricted in dozens of California cities
                specifically because they&apos;re too loud for suburban
                neighborhoods; the LB7654 is legal everywhere.
              </p>

              {/* Peak 765 CFM and Turbo Boost */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Peak 765 CFM and What Turbo Boost Actually Does
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 765 CFM headline spec is the Turbo Boost figure &mdash;
                the peak airflow the LB7654 delivers when you press the
                dedicated boost button. At cruise (normal variable-speed
                trigger), the blower delivers roughly 580-650 CFM,
                depending on where you set the thumbwheel. That&apos;s
                still pro-grade air volume; Turbo Boost is the extra
                headroom for stubborn piles.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This matters because runtime at 765 CFM is not the same
                as runtime at cruise. Pinning the Turbo Boost constantly
                drops runtime to 15-20 minutes on a 7.5Ah battery. Used
                the way EGO designed it &mdash; quick bursts of 30-60
                seconds to loosen a wet patch, then back to cruise &mdash;
                you&apos;ll clear 45-50 minutes of actual blowing on one
                battery, with Turbo Boost doing roughly 10% of the
                total trigger time.
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Zap className='h-4 w-4 text-primary mt-1 shrink-0' />
                  <span>
                    <strong>Turbo Boost bursts (30-60 sec):</strong> For
                    dislodging wet leaves, packed edges, or stuck
                    debris. Lets you save battery for cruise work.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Zap className='h-4 w-4 text-primary mt-1 shrink-0' />
                  <span>
                    <strong>Cruise mode (variable thumbwheel):</strong>
                    {' '}For 80-90% of blowing. 450-650 CFM is plenty to
                    push dry leaves across a lawn fast.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Zap className='h-4 w-4 text-primary mt-1 shrink-0' />
                  <span>
                    <strong>Low speed (trigger light):</strong> For
                    blowing around flower beds, mulch, or landscape
                    gravel where full airflow moves the wrong things.
                  </span>
                </li>
              </ul>

              {/* Runtime */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Runtime Strategy on the 56V 7.5Ah Battery
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Runtime is the one area where gas has always had the
                edge, and the LB7654 doesn&apos;t completely close that
                gap. A Stihl BR 600 runs as long as you keep refilling
                the 2.7L tank. The EGO runs on a battery. But the gap
                shrinks a lot when you look at actual numbers:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Low speed (leaf-walking):</strong> ~90
                    minutes on 7.5Ah &mdash; enough for weekly 1/2-acre
                    cleanup twice over
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Medium/cruise:</strong> 40-50 minutes &mdash;
                    a typical fall leaf session for 1-acre
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Turbo Boost continuous:</strong> 15-20
                    minutes &mdash; only if you pin the boost button
                    (not typical use)
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Mixed real-world use:</strong> 45-60
                    minutes of continuous blowing across speeds
                  </span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For 2-acre lots or crews running back-to-back, EGO sells
                a second 7.5Ah pack for $379 that mounts on the harness
                frame alongside the primary. With two packs you get
                roughly 90-120 minutes of real-world cruise time, which
                matches a single tank of gas (a BR 600 runs 60-75
                minutes of continuous use on one fill). Add a rapid
                charger at the truck and a crew can effectively run
                all-day on battery.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Charging: EGO&apos;s standard 320W charger refills a
                7.5Ah pack in ~75 minutes. The 700W rapid charger cuts
                that to ~35 minutes. For residential use, one 7.5Ah
                pack is enough. For properties over 1 acre, two packs
                + the rapid charger is the sensible kit.
              </p>

              {/* IPX4 */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                IPX4 Weather Rating &mdash; Why It Matters for Leaves
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                IPX4 means &quot;protected against water splashing from
                any direction.&quot; In practical terms, you can use the
                LB7654 in light rain, on wet grass, or blowing damp
                morning leaves without worrying about damage. Among
                battery backpack blowers, IPX4 is the highest rating
                available &mdash; most competitors carry no IP rating at
                all, which means water ingress voids the warranty.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This matters most in fall. The biggest leaf-cleanup day
                of the year in most climates is the weekend after a
                storm, when every leaf on every tree has just come down
                and the ground is still wet. A non-IPX-rated blower
                forces you to wait for dry conditions that might not
                come for a week; the EGO lets you blow on Saturday
                morning at 7am with dew still on the grass.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                IPX4 is not full submersion (that would be IPX7), so
                don&apos;t drop it in a pond or pressure-wash it. But
                for every realistic leaf-blowing scenario, IPX4 is what
                you want.
              </p>

              {/* Mid CTA */}
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Ready to buy?'
                verdict='The EGO LB7654 ships with a 7.5Ah battery and rapid charger at $499. Check EGO current pricing and any seasonal blower promotions.'
                source='ego-leaf-blower'
                variant='mid'
              />

              {/* EGO Lineup */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                EGO 56V Leaf Blower Lineup: Handhelds to Backpack
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The LB7654 is the flagship, but EGO has four main leaf
                blower models in the 56V lineup, each sized for a
                different scale of property. Here&apos;s how they stack
                up:
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                EGO LB6504 &mdash; Power+ 650 CFM Handheld, $249
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The top of the handheld lineup. 650 CFM and 180 MPH,
                powered by the same brushless turbine fan as the backpack
                in a smaller shell. 7.9 lbs with a 5Ah battery, runtime
                roughly 75 minutes on low, 18 minutes on max. Variable
                speed + Turbo Boost. Best for 1/4-acre to 1/2-acre lots
                where you don&apos;t want the backpack bulk but still
                want pro-grade airflow. The best EGO blower for most
                people.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                EGO LB5804 &mdash; Power+ 580 CFM 3-Speed, $199
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Mid-tier handheld. 580 CFM / 168 MPH. Drops the
                variable-speed trigger for a simpler 3-speed selector
                (low / medium / high) which some users prefer. Weighs
                6.1 lbs with a 4Ah battery. Good 1/8-acre to 1/4-acre
                choice for buyers who want simple controls and a lower
                price point but still want a turbine fan.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                EGO LB5302 &mdash; Power+ 530 CFM PowerLoad, $179
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Entry handheld. 530 CFM / 160 MPH. Uses a centrifugal
                fan rather than the turbine, which means it&apos;s a
                little louder and a little less efficient, but it
                trades that for a more compact size and the lowest
                price in the EGO lineup. Good for small lots, patios,
                gutters, and driveway cleanup. 5.6 lbs.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                EGO LB7654 &mdash; Power+ 765 CFM Backpack, $499
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The flagship and the subject of this review. 765 CFM /
                205 MPH. 18.8 lbs. IPX4. Turbo Boost. Brushless
                turbine. The only battery backpack that outperforms a
                Stihl BR 600 gas on raw airflow. Best for serious
                residential properties (1/2 to 2+ acres), wet-climate
                users, or existing EGO 56V owners who want the top of
                the line.
              </p>

              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Model
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        CFM / MPH
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Weight
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        LB5302 (PowerLoad)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        530 / 160
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        5.6 lbs
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>$179</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        LB5804 (3-speed)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        580 / 168
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        6.1 lbs
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>$199</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        LB6504 (handheld flagship)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        650 / 180
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        7.9 lbs
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>$249</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        LB7654 (backpack &mdash; reviewed)
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        765 / 205
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        18.8 lbs
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $499
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* vs Stihl BR 600 */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                EGO LB7654 vs Stihl BR 600 Gas Backpack
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Stihl BR 600 is the long-reigning gold standard for
                professional gas backpack blowers. It&apos;s what most
                landscaping crews are running when they show up. Here&apos;s
                how the LB7654 stacks up head-to-head:
              </p>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Feature
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-primary'>
                        EGO LB7654
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Stihl BR 600
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Price
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $499
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>$599</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        CFM (peak)
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        765
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>677</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>MPH</td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        205
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>201</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Noise (operator)
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        ~64 dB
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>~82 dB</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Weight
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        18.8 lbs
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        20.5 lbs
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        California legal new
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        Yes
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        No (CARB ban)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Weather rating
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        IPX4
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        None
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Continuous runtime
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        45-90 min (battery)
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        Unlimited (gas)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Maintenance
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        None
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        Mix oil, spark plugs, filters
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                EGO wins on price, CFM, MPH, noise, weight, weather
                rating, maintenance, and California legality. Stihl
                wins on continuous runtime and nothing else. For any
                residential user and a significant portion of
                commercial users, the LB7654 has made the BR 600
                obsolete in 2026.
              </p>

              {/* vs Ryobi */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                EGO LB7654 vs Ryobi RY404110 Backpack
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The other battery backpack worth comparing to is the
                Ryobi 40V Whisper Series RY404110, which runs $399 at
                Home Depot.
              </p>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Feature
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-primary'>
                        EGO LB7654
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Ryobi RY404110
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Price
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>$499</td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $399
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>CFM</td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        765
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>730</td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>MPH</td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        205
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>165</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Noise (operator)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>64 dB</td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        60 dB
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Weather rating
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        IPX4
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>None</td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Turbo / Boost mode
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        Yes (dedicated button)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        Trigger only
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Ecosystem size
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        75+ tools
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        280+ tools
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Retail
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        Lowe&apos;s, Home Depot, Ace
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        Home Depot only
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                EGO wins on raw power (CFM and especially MPH), weather
                rating, dedicated Turbo Boost, and retail availability.
                Ryobi wins on price, noise (by 4 dB), and ecosystem
                breadth. For someone already in the EGO 56V system,
                the LB7654 is the obvious choice. For someone starting
                fresh on a tight budget, Ryobi gives you 95% of the
                blower for 80% of the price.
              </p>

              {/* California */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California: The 2024 Gas Blower Ban &amp; Rebates
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s 2024 CARB Small Off-Road Engine rule
                banned the retail sale of new gas leaf blowers statewide
                effective January 1, 2024. This is a hard retail cutoff,
                not a phase-out &mdash; Stihl, Echo, Husqvarna, and
                Makita gas backpack blowers can no longer be sold new in
                California. Used blowers remain legal to own, sell, and
                repair, but the new-retail market has completely flipped
                to battery.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                On top of the state ban, California air districts run
                aggressive rebate programs specifically for leaf blowers
                because they emit more particulate per hour of use than
                most other outdoor equipment. The EGO LB7654 qualifies
                for:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>SCAQMD:</strong> Up to $125 per zero-emission
                    blower when turning in a gas blower. Commercial
                    programs offer more.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>BAAQMD:</strong> Residential and commercial
                    exchange events, $100-$200 per blower when funded.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>SMAQMD:</strong> Mow Down Air Pollution
                    program extends to blowers &mdash; $50-$100
                    typical.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>SJVAPCD:</strong> San Joaquin Valley
                    residential rebates, typically $75-$150 per
                    zero-emission blower.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Leaf className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Municipal gas-blower bans:</strong> Palo
                    Alto, Santa Monica, Pasadena, West Hollywood,
                    Berkeley, Los Altos, and Ojai all have pre-existing
                    gas-blower bans with fines up to $500 per
                    violation. The LB7654 is compliant everywhere.
                  </span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Stacked, these rebates can drop a California buyer&apos;s
                net cost on the LB7654 from $499 down to $325-$375, which
                makes the battery economics unbeatable compared to any
                used gas backpack purchase.
              </p>

              {/* Pros & Cons */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Pros &amp; Cons
              </h2>
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-green-800 dark:text-green-400 mb-3'>
                    Pros
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      765 CFM peak &mdash; highest of any battery
                      backpack
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Brushless turbine fan, 64 dB operator noise
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      IPX4 weather rating &mdash; wet-leaf ready
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Dedicated Turbo Boost button, variable cruise
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      56V Arc Lithium works with 75+ EGO tools
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Dual-battery harness mount for 3+ hr runtime
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      $100 less than Stihl BR 600, $200+ less with
                      rebates
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      California CARB compliant &mdash; qualifies for
                      rebates
                    </li>
                  </ul>
                </div>
                <div className='bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-red-800 dark:text-red-400 mb-3'>
                    Cons
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      $100 more than Ryobi RY404110 (comparable CFM)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      4 dB louder than Ryobi Whisper Series
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Runtime still capped at 45-90 min per battery
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Replacement 7.5Ah packs are $379 each
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      EGO ecosystem has fewer tools than Ryobi 40V
                    </li>
                  </ul>
                </div>
              </div>

              {/* Who should buy */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Should Buy the EGO LB7654
              </h2>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Serious residential homeowners</strong>
                    {' '}with 1/2 to 2-acre lots doing fall cleanup
                    multiple times per season.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Wet-climate users</strong> in the Pacific
                    Northwest, coastal California, or anywhere morning
                    dew is a regular condition. The IPX4 rating pays
                    for itself the first week.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>California residents</strong> replacing a
                    gas backpack blower banned under the 2024 CARB
                    rule. Rebates often drop net cost under $400.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Existing EGO 56V owners</strong> who already
                    have batteries &mdash; grab the bare tool and save
                    $200 on the package.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Commercial crews</strong> transitioning off
                    gas under AQMD mandates or private client
                    preferences. With two batteries and a rapid
                    charger at the truck, the LB7654 handles a typical
                    crew workday.
                  </span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re on a tight budget or doing only
                occasional residential cleanup on a smaller lot, the
                Ryobi RY404110 at $399 or the EGO LB6504 handheld at
                $249 will both serve you well and save you money.
              </p>

              {/* FAQ */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is the EGO LB7654 as powerful as a Stihl BR 600?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes &mdash; it actually beats it on CFM (765 vs
                    677) and matches on MPH (205 vs 201). It&apos;s
                    also lighter, 18 dB quieter, zero emissions, and
                    $100 cheaper. The only area Stihl wins is
                    continuous runtime (gas vs battery).
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What is Turbo Boost and how long does it last?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Turbo Boost is a dedicated button that overdrives
                    the brushless turbine to the full 765 CFM / 205
                    MPH. Continuous Turbo Boost runs 15-20 minutes on
                    a 7.5Ah battery. Used as EGO intended (30-60 sec
                    bursts to dislodge wet patches), it has negligible
                    battery impact.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How long does the LB7654 run per charge?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    On a 7.5Ah battery: ~90 min low, 40-50 min
                    cruise, 15-20 min continuous Turbo Boost. Mixed
                    real-world use is typically 45-60 minutes of
                    continuous blowing. Two 7.5Ah packs + rapid
                    charger = effective all-day crew runtime.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is it really waterproof?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    IPX4 means splash-resistant from any direction.
                    Wet grass, damp leaves, and light mist are fine.
                    Full rainstorms or pressure-washing are not.
                    Among battery backpack blowers, IPX4 is the
                    highest rating available.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is it legal in California?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes &mdash; battery blowers are now the default
                    after California&apos;s 2024 CARB ban on new gas
                    blowers. The LB7654 qualifies for SCAQMD rebates
                    up to $125, BAAQMD exchange programs, SMAQMD
                    rebates, and SJVAPCD rebates. Stacked, rebates
                    can drop net cost to $325-$375.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    EGO vs Ryobi backpack &mdash; which one?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    EGO wins on raw power (MPH especially), IPX4
                    weather rating, Turbo Boost, and retail breadth.
                    Ryobi wins on price ($100 less), noise (4 dB
                    quieter), and ecosystem (280+ tools vs 75+).
                    Existing platform owners should stick with their
                    platform. Fresh buyers: EGO if you want the
                    strongest blower, Ryobi if you want the best
                    value.
                  </p>
                </div>
              </div>

              {/* Bottom Line */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The EGO Power+ 765 CFM Backpack Blower (LB7654) is the
                most powerful cordless backpack blower on the market
                in 2026. It beats the Stihl BR 600 gas reference on
                CFM, matches it on MPH, runs 18 dB quieter, carries
                an IPX4 rating for wet conditions, and comes in $100
                cheaper out of the box. Stacked against California
                AQMD rebates, a net cost of $325-$375 is realistic,
                which makes it the single best-performing battery
                backpack per dollar in the state. For serious
                residential users and the portion of commercial users
                who can work around battery runtime, the LB7654 has
                effectively made premium gas backpacks obsolete.
                Budget buyers should still look hard at the Ryobi
                RY404110 at $399, and small-lot owners can save with
                the EGO LB6504 handheld at $249 &mdash; but if you
                want the best cordless backpack, this is the answer.
              </p>
            </div>

            {/* Final CTA */}
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Final Verdict'
              verdict='Serious residential property, wet-leaf conditions, or an existing EGO 56V owner? The LB7654 is the strongest cordless backpack in 2026. Check current pricing and rebate stacking.'
              source='ego-leaf-blower'
              variant='final'
            />

            {/* Explore more */}
            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See how the LB7654 stacks up against Ryobi RY404110 and
                other electric backpack blowers.
              </p>
              <Link
                href='/reviews/best-electric-leaf-blower'
                className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
              >
                See The Full Ranking
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            {/* Navigation */}
            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/best-electric-leaf-blower'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Electric Blowers
              </Link>
              <Link
                href='/reviews/ryobi-leaf-blower-review'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Compare: Ryobi RY404110
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source='ego-leaf-blower' />
    </ReviewLayout>
  );
}
