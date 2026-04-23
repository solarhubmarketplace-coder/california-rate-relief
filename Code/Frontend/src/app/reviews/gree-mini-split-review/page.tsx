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

const PRODUCT_KEY = 'gree-mini-split';

export const metadata: Metadata = {
  title:
    'Gree Mini Split Review 2026: Livo Gen 3, Sapphire, and Vireo+ Compared',
  description:
    'Gree mini split review covering the Livo Gen 3 (budget), Sapphire (premium), and Vireo+ (cold-climate multi-zone). World largest mini-split maker, SEER2 18-22, dealer-direct purchase, TECH Clean California rebates, 7-year compressor warranty. 4.3/5.',
  alternates: {
    canonical: '/reviews/gree-mini-split-review',
  },
  openGraph: {
    title:
      'Gree Mini Split Review 2026: Livo Gen 3, Sapphire, and Vireo+ Compared',
    description:
      'In-depth review of the Gree Livo Gen 3, Sapphire, and Vireo+ ductless mini splits. How they stack up against Mitsubishi, Daikin, and MrCool for California homeowners.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'Gree Mini Split Review (Livo Gen 3, Sapphire, Vireo+)',
  reviewBody:
    'Gree is the world largest mini split manufacturer by volume and holds meaningful US market share through its dealer-direct distribution. The Livo Gen 3 24K BTU ($1,199 dealer-direct) is the budget pick with SEER2 ~19. The Sapphire 12K BTU ($1,499) is the premium residential choice with SEER2 22 and quieter operation. The Vireo+ multi-zone ($2,499+) handles cold-climate applications and up to 5 indoor heads. All carry a 7-year compressor warranty and qualify for California TECH Clean California heat pump rebates.',
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
    name: 'Gree Livo Gen 3 24K BTU Mini Split',
    brand: {
      '@type': 'Brand',
      name: 'Gree',
    },
    description:
      'Ductless mini split heat pump with SEER2 ~19, 24,000 BTU cooling, dealer-direct distribution, 7-year compressor warranty.',
    offers: {
      '@type': 'Offer',
      price: '1199',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.3',
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
      name: 'Where can I buy a Gree mini split?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gree sells exclusively through HVAC dealer distribution in the US — this means licensed HVAC contractors, distributors, and supply houses. Unlike MrCool or Senville, you generally cannot buy a Gree unit from a big-box retail channel or directly online to a homeowner. Find a Gree-authorized distributor through greecomfort.com, or work with a local HVAC contractor who carries the brand. Dealer-direct purchase is a ~25-35% discount vs retail-channel mini splits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Gree Livo Gen 3 DIY-installable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically yes but practically no. Gree requires a licensed HVAC technician to do the initial vacuum, leak check, and refrigerant commissioning for warranty to remain valid. The units do not come with pre-charged quick-connect lines like MrCool DIY. If you want a DIY mini split, MrCool is the right brand. If you want a contractor-installed unit, Gree is a strong option at a lower price point than Mitsubishi or Daikin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Gree qualify for TECH Clean California rebates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, when installed as a heat pump replacement for gas heating. TECH Clean California offers homeowner rebates of $1,500 to $3,500 per heat pump installation depending on utility territory and whether the installation replaces a gas furnace or AC. Low-income households can stack additional Switch Is On rebates. Federal 25C tax credit provides up to $2,000 credit on qualifying heat pumps (SEER2 18+ in California). Gree Sapphire and Vireo+ qualify for both state and federal incentives.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Gree compare to Mitsubishi and Daikin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gree is generally 20-35% cheaper than equivalent Mitsubishi or Daikin units through dealer-direct purchase, but also carries a shorter compressor warranty (7 years vs Mitsubishi 12 years / Daikin 12 years). Build quality on the Sapphire line is competitive with Mitsubishi M-Series. Build quality on the Livo Gen 3 is a clear step below. For a budget-conscious buyer, Gree Sapphire gets you 85-90% of Mitsubishi M-Series performance at 65-75% of the price. Serviceability is weaker outside major metros — verify a local contractor is comfortable servicing Gree before you buy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the SEER2 rating of Gree mini splits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEER2 ratings vary by model and capacity: Livo Gen 3 runs SEER2 ~19-20 across sizes. Sapphire hits SEER2 ~22 in smaller capacities (9K, 12K, 18K) and ~19 at 24K. Vireo+ multi-zone ranges SEER2 ~18-20 depending on indoor head configuration. All are well above the federal minimum and qualify for 25C federal tax credit requirements and California heat pump rebates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Gree warranty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '7-year compressor warranty and 5-year parts warranty on most residential units, provided installation is done by a licensed HVAC technician and the product is registered within 60 days of installation. Professional installation is a condition of the warranty — DIY installation voids it. This is standard in the industry for non-DIY brands.',
      },
    },
  ],
};

export default function GreeMiniSplitReview() {
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
                href='/reviews/best-mini-split-ac'
                className='hover:text-primary transition-colors'
              >
                Best Mini Split ACs
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>Gree Mini Split</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Product Review
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Gree Mini Split Review 2026: Livo Gen 3, Sapphire, and Vireo+
                Compared
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>15 min read</span>
                </div>
              </div>
            </header>

            <AffiliateDisclosure compact />

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Value Pick'
              rating={4.3}
              verdict='Gree is the world largest mini-split maker by volume. The Sapphire 12K BTU ($1,499) is the premium residential pick with SEER2 22. Livo Gen 3 (budget) and Vireo+ (cold-climate multi-zone) round out the lineup.'
              pros={[
                'SEER2 22 on Sapphire — high-efficiency tier',
                '7-year compressor warranty',
                'Dealer-direct pricing ~25-35% below Mitsubishi/Daikin',
                'TECH Clean California and 25C federal credit eligible',
              ]}
              cons={[
                'Not DIY-friendly — licensed installer required',
                'Service network weaker than Mitsubishi/Daikin outside metros',
              ]}
              source='gree-mini-split'
              variant='top'
            />

            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  Quick Verdict
                </h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.3</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                Gree is a name most US homeowners have never heard, but by
                global volume it&apos;s the largest mini-split manufacturer
                on Earth. The US product lineup splits into three main
                residential tiers: Livo Gen 3 (budget single-zone, $1,199
                dealer-direct for 24K BTU), Sapphire (premium single-zone,
                $1,499 for 12K BTU at SEER2 22), and Vireo+ (cold-climate
                multi-zone, $2,499+ for a 2-head setup). Dealer-direct pricing
                runs 25-35% below equivalent Mitsubishi or Daikin units.
                Efficiency is legitimately good — Sapphire hits SEER2 22 in
                smaller capacities. The 7-year compressor warranty is
                shorter than Mitsubishi&apos;s 12 years but longer than most
                budget brands. The catch: Gree is dealer-direct only. You
                cannot buy it at Home Depot, Lowe&apos;s, or Amazon. You
                need a licensed HVAC contractor, ideally one who carries the
                brand, to spec and install. If you have that contractor, Gree
                saves you real money without giving up much in the way of
                performance.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Budget-conscious California heat pump buyers
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Homeowners with a trusted HVAC contractor who stocks
                      Gree
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Multi-zone retrofits (Vireo+)
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
                      DIY installers (MrCool is the pick here)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Rural locations without Gree-authorized contractors
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Buyers who want 12+ year compressor warranty
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
                        Livo Gen 3 (24K)
                      </th>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        Sapphire (12K)
                      </th>
                      <th className='px-4 py-3 text-left font-semibold text-foreground'>
                        Vireo+ (Multi-zone)
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Cooling Capacity
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        24,000 BTU
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        12,000 BTU
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        18K-48K (2-5 heads)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        SEER2
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>~19-20</td>
                      <td className='px-4 py-3 text-foreground/80'>~22</td>
                      <td className='px-4 py-3 text-foreground/80'>~18-20</td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        HSPF2
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>~9.0</td>
                      <td className='px-4 py-3 text-foreground/80'>~10.5</td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~9.0-10.0
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Heat Down to
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>+5&deg;F</td>
                      <td className='px-4 py-3 text-foreground/80'>+5&deg;F</td>
                      <td className='px-4 py-3 text-foreground/80'>
                        -4&deg;F (cold climate)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Refrigerant
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>R-410A</td>
                      <td className='px-4 py-3 text-foreground/80'>
                        R-32 (newer)
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>R-410A</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Compressor
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        DC Inverter
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        DC Inverter
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        DC Inverter
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Indoor Noise
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~30-46 dB
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~22-42 dB
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        ~26-44 dB
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Wi-Fi
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Optional module
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Built-in
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Built-in
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        Warranty
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        7 yr compressor / 5 yr parts
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        7 yr compressor / 5 yr parts
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        7 yr compressor / 5 yr parts
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <DollarSign className='h-4 w-4 text-primary' />
                        Dealer-Direct Price
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        ~$1,199
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        ~$1,499
                      </td>
                      <td className='px-4 py-3 text-foreground/80 font-semibold'>
                        ~$2,499+
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Gree: The World&apos;s Largest Mini-Split Manufacturer
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Gree Electric Appliances Inc., founded in 1991 and
                headquartered in Zhuhai, China, is the single largest
                producer of mini-split heat pumps in the world — roughly
                25% global market share by unit volume. They also
                manufacture under license for multiple Western brands,
                meaning some of the products you see on US shelves with
                American or Japanese-sounding names are actually built in
                Gree factories with different sticker placement. Selling
                under the Gree name direct cuts out that badge-engineering
                markup.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                In the US market, Gree runs a dealer-distributor model
                similar to Mitsubishi, Daikin, and LG. You buy from a
                licensed HVAC contractor or a supply-house distributor, not
                from Home Depot or Amazon. This gives you lower pricing (no
                retail markup, dealer pricing is factory plus 5-15%) but
                also means the product is less accessible for DIY or
                internet shopping.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Livo Gen 3: The Budget Single-Zone
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Livo Gen 3 is the entry point into Gree&apos;s US
                residential lineup. Single-zone configurations run 9K, 12K,
                18K, 24K, 30K, and 36K BTU. The 24K BTU unit at roughly
                $1,199 dealer-direct is the workhorse for medium rooms
                (400-600 sq ft) or an open living/kitchen area up to 1,000
                sq ft. SEER2 hovers around 19-20 depending on capacity —
                solidly above the federal minimum of 15, and enough to
                qualify for 25C tax credit (requires SEER2 18+ in the US
                South region including California).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Build quality on Livo Gen 3 is adequate but not premium.
                The plastic indoor head feels thinner than Mitsubishi
                M-Series or Daikin Quaternity, control electronics are
                simpler, and the Wi-Fi module is a $60 optional add-on
                rather than built in. What you&apos;re paying for is a
                working, quiet, efficient unit at a lower price — not a
                statement piece. For a guest bedroom, a converted garage
                office, or a small rental unit, Livo Gen 3 is the right
                pick.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Sapphire: The Premium Residential Pick
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Sapphire line is Gree&apos;s response to Mitsubishi
                M-Series and Daikin Quaternity — a premium residential
                mini-split aimed at buyers who want the efficiency, quiet,
                and feature set of Japanese brands at a lower price. The 12K
                BTU unit is the flagship, hitting SEER2 22 and indoor noise
                down to ~22 dB on the lowest fan setting — genuinely whisper
                quiet, below the ambient level of a quiet library.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Newer Sapphire units use R-32 refrigerant, which has a
                lower global-warming potential than R-410A (675 GWP vs
                2,088 GWP) and is slightly more efficient in heat-pump
                applications. This matters because R-410A is being phased
                out under EPA rules beginning 2025, and R-410A service
                costs will rise steadily through the decade. Buying R-32
                now is a quiet hedge against future service costs.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Sapphire also has built-in Wi-Fi, a modern remote with
                backlit display, ionizer and PM2.5 filter options, and
                auto-swing louvers that distribute air more evenly than the
                Livo Gen 3&apos;s basic swing. If you&apos;re installing a
                mini-split in a bedroom or primary living space, Sapphire
                is the tier to buy.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Vireo+: Cold-Climate Multi-Zone
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Vireo+ line is Gree&apos;s multi-zone platform,
                supporting one outdoor condenser with 2-5 indoor heads.
                System sizes range from 18K to 48K BTU total capacity, and
                indoor heads can be mixed — wall-mount, ceiling-cassette,
                and slim-duct units all work on the same outdoor unit. Most
                California homes doing a retrofit use 2-3 wall-mount heads
                (primary bedroom, living room, and maybe a second bedroom
                or office).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The &quot;+&quot; in Vireo+ means cold-climate heat pump
                operation — rated to heat efficiently down to -4°F
                (vs standard +5°F minimum for Livo and Sapphire). This is
                mostly irrelevant for California buyers (even Lake Tahoe
                rarely hits -4°F), but it matters for Pacific Northwest
                and anyone moving between California and a colder-climate
                home.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Dealer-Direct: Why It Matters for Pricing
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The reason Gree can undercut Mitsubishi and Daikin on
                pricing isn&apos;t just factory costs — it&apos;s the
                distribution channel. A Mitsubishi or Daikin unit retails
                through a layered path: factory → regional distributor →
                local supply house → HVAC contractor → homeowner. Each
                step adds markup. Gree&apos;s dealer-direct model
                collapses two or three of those layers, which is where the
                25-35% discount comes from.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For you the buyer, that means calling 2-3 local HVAC
                contractors and asking if they&apos;re Gree-authorized. If
                yes, request a quote for the specific model and capacity you
                want. Compare to a Mitsubishi M-Series or MrCool DIY quote.
                You&apos;ll typically see the Gree quote come in 15-30%
                below Mitsubishi for similar specs. The catch: if the
                contractor doesn&apos;t regularly install Gree, service
                issues down the road can be messier than with a widely
                serviced brand.
              </p>

              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Ready to buy?'
                verdict='Gree sells dealer-direct only. Find a Gree-authorized HVAC contractor through greecomfort.com or compare quotes from local installers.'
                source='gree-mini-split'
                variant='mid'
              />

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                TECH Clean California and Federal Rebates
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California heat pump incentives have stacked up meaningfully
                over the past two years, and Gree Sapphire / Vireo+ qualify
                for most of them:
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                TECH Clean California
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Administered by the California Public Utilities Commission,
                TECH Clean California provides $1,500-$3,500 rebates on
                qualifying heat pump installations. Rebate amount depends
                on utility territory (PG&amp;E, SCE, SDG&amp;E), whether
                the installation replaces a gas furnace (higher rebate) or
                existing AC (lower), and unit efficiency. Sapphire at SEER2
                22 and Vireo+ cold-climate tend to qualify at the higher
                tier. Participating contractors submit the rebate
                application directly — no paperwork on your end.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                25C Federal Tax Credit
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Up to $2,000 federal income tax credit under the Inflation
                Reduction Act, for qualifying heat pumps installed in your
                primary residence. California falls in the &quot;South&quot;
                region for this credit, so the efficiency threshold is
                SEER2 18 or HSPF2 8.5 — easily met by any Sapphire or
                Vireo+ unit. Claim via IRS Form 5695 on your federal taxes.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Utility-Specific Rebates
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Some California utilities stack their own rebates on top:
                PG&amp;E typically offers $300-$1,000 for heat pump
                installations through Energy Upgrade California or the
                Switch Is On program. SCE and SDG&amp;E have similar
                programs at various rebate levels. Ask your contractor what
                programs they can help you capture.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Stacking Example
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a Sapphire 24K BTU installation replacing gas heating
                in PG&amp;E territory: dealer-direct equipment cost
                ~$1,899, installation ~$2,500, total project ~$4,400.
                Apply TECH Clean CA rebate $2,500, utility rebate $500,
                federal 25C credit $2,000 — net cost after incentives
                ~$0-$400. That&apos;s before any equipment savings vs
                Mitsubishi.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                vs Mitsubishi, Daikin, and MrCool
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s how Gree stacks up in the mini-split field:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6 list-none'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>vs Mitsubishi M-Series:</strong> Mitsubishi wins on
                  warranty (12 yr compressor vs Gree 7 yr), service network
                  (far more certified technicians in every US market), and
                  long-term reputation. Gree Sapphire wins on price (~25-35%
                  less) and matches or beats Mitsubishi on published SEER2.
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>vs Daikin Quaternity / Emura:</strong> Daikin wins
                  on Japanese build quality reputation and 12-year compressor
                  warranty. Gree wins on cost and is closer in raw
                  performance than most buyers expect.
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>vs MrCool DIY 4th Gen:</strong> MrCool is the
                  DIY-friendly pick — pre-charged quick-connect line sets,
                  sold at Home Depot and Costco, homeowner-install friendly.
                  MrCool runs ~10-15% higher than Gree dealer-direct but
                  saves you $1,500-$3,000 on installation if you DIY. Gree
                  is the pick if you want a contractor install; MrCool is
                  the pick if you can do the install yourself.
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <strong>vs Senville:</strong> Similar price tier, both
                  Chinese-manufactured. Senville is retail-channel available
                  (Amazon, Home Depot); Gree is dealer-only. Senville has
                  looser quality control; Gree is the higher-volume,
                  globally-established brand.
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
                      World&apos;s largest mini-split manufacturer by volume
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      SEER2 22 on Sapphire 12K — high-efficiency tier
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      25-35% lower dealer-direct price vs
                      Mitsubishi/Daikin
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      TECH Clean California and 25C federal rebate
                      eligible
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      R-32 refrigerant on newer Sapphire units
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Vireo+ cold-climate support down to -4&deg;F
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      7-year compressor / 5-year parts warranty
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
                      Dealer-only distribution (no DIY, no Home
                      Depot/Amazon)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Service network weaker than Mitsubishi/Daikin
                      outside metros
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      7-year compressor warranty shorter than
                      Mitsubishi 12 yr
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Livo Gen 3 build quality a step below Sapphire
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Wi-Fi optional on Livo Gen 3 (built-in on
                      Sapphire/Vireo+)
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
                    Where can I buy a Gree mini split?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Dealer-direct only. Licensed HVAC contractors and
                    supply-house distributors. Not available at Home
                    Depot, Lowe&apos;s, or Amazon. Start at
                    greecomfort.com to find an authorized dealer.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Can I DIY install?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Not with warranty intact. Gree requires licensed HVAC
                    installation. If you want DIY, MrCool 4th Gen is the
                    brand.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    TECH Clean California rebate eligible?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes, especially Sapphire and Vireo+ models at higher
                    SEER2. Stacks with 25C federal credit up to $2,000 and
                    utility-specific programs.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    vs Mitsubishi and Daikin?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    20-35% cheaper, 7-yr compressor vs 12-yr for those
                    brands. Sapphire competitive on performance; Livo Gen
                    3 a clear step below.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    SEER2 rating?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Livo Gen 3: ~19-20. Sapphire: ~22 at 12K. Vireo+:
                    ~18-20.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Warranty?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    7-year compressor, 5-year parts. Requires licensed
                    install and 60-day registration.
                  </p>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Gree is the best-kept secret in US mini splits in 2026. As
                the world&apos;s largest manufacturer, they have the scale
                and engineering depth to compete with Mitsubishi and Daikin
                on performance — but their US strategy of dealer-direct
                distribution keeps them off retail shelves and out of most
                homeowners&apos; awareness. If you have a trusted HVAC
                contractor who carries Gree, the Sapphire line is the pick
                for primary living spaces at 25-35% below Japanese brands,
                with real efficiency and TECH Clean California / 25C
                eligibility. The Livo Gen 3 is the right pick for
                secondary spaces where budget matters more than
                whisper-quiet operation. Vireo+ handles multi-zone and
                cold-climate needs. What you give up is service
                accessibility outside metros and the 12-year compressor
                warranty of Mitsubishi/Daikin. For most California buyers
                with incentive stacking, that&apos;s a trade worth making.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Final Verdict'
              verdict='If you have a Gree-authorized HVAC contractor in your area, the Sapphire line is the best-value premium mini split in 2026. Request a quote and compare.'
              source='gree-mini-split'
              variant='final'
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See how Gree stacks up against Mitsubishi, Daikin, MrCool,
                and Senville in our full mini split ranking.
              </p>
              <Link
                href='/reviews/best-mini-split-ac'
                className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
              >
                See The Full Ranking
                <ChevronRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/best-mini-split-ac'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <Home className='h-4 w-4' />
                All Mini Splits
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
      <StickyMobileCTA productKey={PRODUCT_KEY} source='gree-mini-split' />
    </ReviewLayout>
  );
}
