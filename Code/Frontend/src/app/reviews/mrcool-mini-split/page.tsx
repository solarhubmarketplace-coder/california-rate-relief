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
  Shield,
  ChevronRight,
  Home,
  DollarSign,
  Leaf,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

const PRODUCT_KEY = 'mrcool-diy-4th-gen';

export const metadata: Metadata = {
  title:
    'MrCool Mini Split Review 2026: DIY 4th Gen, Olympus, and Hyper Heat Compared',
  description:
    'Complete MrCool mini split review covering DIY 4th Gen (12K, 24K, 36K BTU), Olympus Hyper Heat 24K, and Advantage 3rd Gen. SEER2 20-22, pre-charged quick-connect line sets, WiFi, cold-climate -22°F operation, California TECH rebates, and federal 25C $2,000 credit.',
  alternates: {
    canonical: '/reviews/mrcool-mini-split',
  },
  openGraph: {
    title:
      'MrCool Mini Split Review 2026: DIY 4th Gen, Olympus, and Hyper Heat Compared',
    description:
      'MrCool DIY 4th Gen vs Olympus Hyper Heat vs Advantage 3rd Gen — which one fits your home? Pre-charged line sets, SEER2 ratings, warranty, rebates.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'MrCool Mini Split Heat Pump Lineup 2026',
  description:
    'Comparison of MrCool mini split heat pump models including DIY 4th Gen 12K/24K/36K BTU, Olympus Hyper Heat 24K, and Advantage 3rd Gen 12K.',
  numberOfItems: 5,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'MrCool DIY 4th Gen 24K BTU',
        brand: { '@type': 'Brand', name: 'MrCool' },
        description:
          'DIY-installable 24,000 BTU mini split heat pump with pre-charged quick-connect line set and WiFi Smart HVAC control.',
        offers: {
          '@type': 'Offer',
          price: '1899',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'MrCool DIY 4th Gen 12K BTU',
        brand: { '@type': 'Brand', name: 'MrCool' },
        description:
          'DIY-installable 12,000 BTU mini split for single rooms up to 550 sq ft.',
        offers: {
          '@type': 'Offer',
          price: '1399',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        name: 'MrCool DIY 36K BTU Multi-Zone',
        brand: { '@type': 'Brand', name: 'MrCool' },
        description:
          'DIY-installable 36,000 BTU multi-zone condenser supporting 2-5 indoor heads.',
        offers: {
          '@type': 'Offer',
          price: '2899',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Product',
        name: 'MrCool Olympus Hyper Heat 24K BTU',
        brand: { '@type': 'Brand', name: 'MrCool' },
        description:
          'Cold-climate mini split rated for full heating capacity down to -22°F. Professional installation.',
        offers: {
          '@type': 'Offer',
          price: '2299',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Product',
        name: 'MrCool Advantage 3rd Gen 12K BTU',
        brand: { '@type': 'Brand', name: 'MrCool' },
        description:
          'Professional-install mini split, budget-friendly Advantage line for contractors.',
        offers: {
          '@type': 'Offer',
          price: '1299',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
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
      name: 'Can you really install a MrCool DIY mini split yourself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. the entire DIY 4th Gen line ships with factory pre-charged quick-connect line sets that eliminate the vacuum pump, manifold gauges, and refrigerant charging that normally require HVAC-tech skill. A homeowner with basic electrical knowledge can complete a typical install in 4-8 hours. You do need a 240V/20A dedicated circuit for 24K BTU and larger units (homeowner-DIY legal if you are comfortable with panel work; otherwise hire an electrician for the circuit only). Permits are still typically required in California, the DIY refers to the refrigerant work, not to skipping the permit process.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between MrCool DIY 4th Gen and Olympus Hyper Heat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DIY 4th Gen is homeowner-installable via pre-charged quick-connect line sets and rated for cooling plus heating down to 5°F outdoor ambient. Olympus Hyper Heat requires professional installation but maintains full rated heating capacity down to -22°F, making it the cold-climate pick. For most of California, coastal, Bay Area, Inland Empire, Central Valley, the DIY 4th Gen handles heating needs comfortably. For Sierra Nevada mountain homes, Tahoe, or high-elevation properties, Olympus Hyper Heat is the right call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are MrCool mini splits eligible for California rebates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MrCool heat pump mini splits qualify for TECH Clean California rebates of up to $3,000 for qualifying heat pump HVAC installs (single-zone or multi-zone systems meeting the efficiency tier and refrigerant requirements). Additional rebates through BayREN, 3C-REN, and SMUD BEES can stack on top. The federal 25C Energy Efficient Home Improvement Credit covers 30% of cost up to $2,000 for qualifying heat pumps (ENERGY STAR most efficient tier, SEER2 16+ and HSPF2 9+). Most MrCool DIY 4th Gen and Olympus models meet the efficiency thresholds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do MrCool mini splits last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Properly installed and maintained mini split heat pumps typically run 15-20 years. MrCool warranty terms are 5-year limited parts coverage and 7-year compressor warranty on the DIY and Olympus lines, longer than the 1-2 year parts and 5-year compressor typical of bargain Chinese imports. Annual maintenance (cleaning the indoor head filter, washing the outdoor coil, checking refrigerant pressure during professional service visits) drives longevity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MrCool made in the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MrCool is headquartered in Hickory, Kentucky, and designs its products in the US with final assembly operations in Kentucky. Many components, compressors, electronics, are sourced globally (similar to virtually all HVAC brands). MrCool is the only major mini split brand with a US design and assembly footprint at the residential DIY price point, which matters for warranty service and parts availability compared to direct-import Chinese brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'What SEER2 rating do MrCool mini splits have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The MrCool DIY 4th Gen lineup ranges from SEER2 20 to SEER2 22 depending on capacity. Olympus Hyper Heat runs SEER2 21. Advantage 3rd Gen runs SEER2 20. All meet the current DOE minimum for California (SEER2 15) and qualify for federal 25C at the efficient tier threshold of SEER2 16+. Multi-zone systems typically run slightly lower SEER2 than equivalent single-zone due to line-length and head count derating.',
      },
    },
  ],
};

export default function MrCoolMiniSplitHub() {
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
              <Link
                href='/reviews/best-mini-split-ac'
                className='hover:text-primary transition-colors'
              >
                Best Mini Split
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>MrCool</span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Brand Comparison
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                MrCool Mini Split Review 2026: DIY 4th Gen, Olympus, and Hyper
                Heat Compared
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
              badge='Best DIY Mini Split Brand'
              rating={4.7}
              verdict='MrCool is the only major mini split brand built around a true homeowner-installable product. factory pre-charged quick-connect line sets that let you complete a full installation without an HVAC tech. The DIY 4th Gen 24K BTU is our top overall pick for most California homes, with Olympus Hyper Heat for cold-climate properties and Advantage 3rd Gen for pro-install jobs on a budget.'
              pros={[
                'True homeowner-installable without HVAC certification',
                'Saves $3,000-5,000 vs professional install',
                'California TECH + federal 25C rebate eligible',
              ]}
              cons={[
                'Whole-home ducted central system replacement',
                'Mountain elevations (buy Olympus Hyper Heat instead)',
              ]}
              source='mrcool-hub'
              variant='top'
            />

            {/* Quick Verdict */}
            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  MrCool, In One Paragraph
                </h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.7</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                MrCool is a Kentucky-based HVAC brand that cracked open the
                residential mini split category with a single product decision:
                pre-charged, quick-connect refrigerant line sets. That
                engineering choice — originally developed for their DIY line in
                the mid-2010s and now on its fourth generation — means the
                refrigerant work that traditionally required an HVAC tech with
                a vacuum pump, manifold gauges, and an EPA 608 certification
                can be completed by a homeowner in a single afternoon.
                Plug-and-play. That single feature has made MrCool the default
                choice for anyone adding a mini split to a garage, ADU,
                basement, or single room where paying $5,000-7,000 for a pro
                install would have killed the project. The DIY 4th Gen 24K BTU
                is the best-selling model in the US mini split category not
                because of spec-sheet dominance (it&apos;s fine — SEER2 22,
                -5°F heating, inverter compressor) but because it ships a
                working install kit rather than a pile of components that
                require a professional to complete.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Best for:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      DIY homeowners avoiding $5K+ install quotes
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      ADUs, garages, basements, workshops
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      California rebate-eligible heat pump upgrades
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
                      Whole-home ducted central system replacement
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Cold-climate Sierra Nevada homes (use Olympus)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Commercial buildings over 40K BTU
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                MrCool Model Comparison
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The MrCool lineup splits into three families: DIY (homeowner-
                installable, pre-charged line sets), Olympus (cold-climate
                Hyper Heat), and Advantage (professional-install budget
                line). Here is how the most popular residential configurations
                stack up.
              </p>
              <ComparisonTable
                source='mrcool-hub'
                specLabels={[
                  'Type',
                  'Capacity (BTU)',
                  'Coverage',
                  'SEER2',
                  'Low-Temp Heat',
                  'Install',
                  'WiFi',
                  'MSRP',
                ]}
                products={[
                  {
                    productKey: 'mrcool-diy-4th-gen',
                    name: 'DIY 4th Gen 24K',
                    badge: 'Best Overall',
                    rating: 4.7,
                    specs: {
                      Type: 'Single zone heat pump',
                      'Capacity (BTU)': '24,000',
                      Coverage: '1,000-1,500 sq ft',
                      SEER2: '22',
                      'Low-Temp Heat': '5°F rated',
                      Install: 'DIY pre-charged',
                      WiFi: 'Smart HVAC standard',
                      MSRP: '$1,899',
                    },
                  },
                  {
                    productKey: 'mrcool-diy-4th-gen',
                    name: 'DIY 4th Gen 12K',
                    badge: 'Single Room',
                    rating: 4.7,
                    specs: {
                      Type: 'Single zone heat pump',
                      'Capacity (BTU)': '12,000',
                      Coverage: '450-550 sq ft',
                      SEER2: '22',
                      'Low-Temp Heat': '5°F rated',
                      Install: 'DIY pre-charged',
                      WiFi: 'Smart HVAC standard',
                      MSRP: '$1,399',
                    },
                  },
                  {
                    productKey: 'mrcool-diy-4th-gen',
                    name: 'DIY 36K Multi-Zone',
                    badge: 'Multi-Room',
                    rating: 4.6,
                    specs: {
                      Type: 'Multi-zone (2-5 heads)',
                      'Capacity (BTU)': '36,000',
                      Coverage: '1,500-2,200 sq ft',
                      SEER2: '20',
                      'Low-Temp Heat': '5°F rated',
                      Install: 'DIY pre-charged',
                      WiFi: 'Per-head Smart HVAC',
                      MSRP: '$2,899',
                    },
                  },
                  {
                    productKey: 'mrcool-diy-4th-gen',
                    name: 'Olympus Hyper Heat 24K',
                    badge: 'Cold Climate',
                    rating: 4.6,
                    specs: {
                      Type: 'Single zone heat pump',
                      'Capacity (BTU)': '24,000',
                      Coverage: '1,000-1,500 sq ft',
                      SEER2: '21',
                      'Low-Temp Heat': '-22°F full capacity',
                      Install: 'Pro required',
                      WiFi: 'Optional',
                      MSRP: '$2,299',
                    },
                  },
                  {
                    productKey: 'mrcool-diy-4th-gen',
                    name: 'Advantage 3rd Gen 12K',
                    badge: 'Pro-Install Budget',
                    rating: 4.4,
                    specs: {
                      Type: 'Single zone heat pump',
                      'Capacity (BTU)': '12,000',
                      Coverage: '450-550 sq ft',
                      SEER2: '20',
                      'Low-Temp Heat': '5°F rated',
                      Install: 'Pro required',
                      WiFi: 'Optional',
                      MSRP: '$1,299',
                    },
                  },
                ]}
              />
            </div>

            {/* Body */}
            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The MrCool Brand
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                MrCool is a residential and light-commercial HVAC brand owned
                by MRCOOL LLC, headquartered in Hickory, Kentucky. The parent
                company has been in the HVAC category since the early 2010s
                and built its reputation on a simple product decision:
                engineer a mini split that a determined homeowner can actually
                install. Products are designed in Kentucky with final assembly
                operations in the US, and components are sourced globally in
                line with HVAC industry norms.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Where the traditional HVAC market assumes a licensed
                contractor will buy the unit, braze refrigerant lines, pull a
                vacuum, and charge the system with R-410A (or in newer
                installs, R-454B), MrCool pre-charges the line set at the
                factory and terminates both ends with quick-connect fittings
                that a homeowner can tighten by hand. The trade-off is subtle:
                line sets ship in fixed lengths (16-50 ft depending on model),
                so installation locations are constrained by what you can
                route with available length. For most residential applications
                where the outdoor condenser sits within 50 ft of the indoor
                head, this is a non-issue.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                DIY 4th Gen: The Flagship Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The DIY 4th Gen is the current-generation homeowner install
                line and the reason MrCool owns the DIY mini split category.
                Key improvements over the 3rd Gen: SEER2 22 (up from 19-20),
                revised compressor inverter electronics for quieter operation
                (the indoor head runs at 28 dB on low), factory Smart HVAC WiFi
                control (no dongle), and refined line-set quick-connect
                fittings with captive o-rings that reduce the chance of a
                refrigerant leak during install.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Capacities range from 9K BTU (small bedroom / office, ~350 sq
                ft) through 36K BTU multi-zone. The most common residential
                choices:
              </p>
              <ul className='space-y-3 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>DIY 4th Gen 12K BTU</strong> ($1,399 MSRP); single
                    room, bedroom, home office, or small ADU. Covers 450-550
                    sq ft well-insulated. 115V/20A standard household circuit
                    in most kits. meaning you may not need a new electrical
                    run.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>DIY 4th Gen 24K BTU</strong> ($1,899 MSRP), large
                    room, open-concept living area, master bedroom + adjoining
                    bathroom, or a 1,000-1,500 sq ft ADU. 240V/20A dedicated
                    circuit required. The best-selling single SKU in the
                    category.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>DIY 36K BTU Multi-Zone</strong> ($2,899 MSRP
                    condenser only; add $500-700 per indoor head), one outdoor
                    unit feeding 2-5 indoor heads. The right choice if you
                    want to add mini splits to multiple rooms while running a
                    single condenser and a single 240V circuit. Total
                    installed for a 3-head config typically $4,500-5,200 DIY
                    vs $10,000-14,000 professional.
                  </span>
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Olympus Hyper Heat: The Cold-Climate Pick
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Olympus Hyper Heat line is the cold-climate variant. Where
                a standard DIY 4th Gen maintains some heating capacity down to
                5°F outdoor and derates rapidly below that, the Olympus Hyper
                Heat maintains full rated heating capacity down to -22°F. That
                matters in a fairly narrow set of California use cases. Sierra Nevada mountain homes, Lake Tahoe, Mammoth, properties
                above 4,000 ft elevation — but where it matters, it matters
                significantly. A standard mini split in Truckee during a
                January cold snap effectively stops heating below 0°F. An
                Olympus keeps running.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The main trade-off: Olympus Hyper Heat requires professional
                installation. The line sets are not pre-charged, so an HVAC
                tech with vacuum pump and gauges is needed. That adds roughly
                $2,000-3,500 to the installed cost vs a DIY 4th Gen at the
                same BTU rating. For homeowners in California&apos;s coastal,
                Bay Area, Central Valley, Inland Empire, or Southern
                California markets, the DIY 4th Gen handles all realistic
                heating loads — Olympus is overkill. For mountain properties,
                Olympus is the right buy.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Advantage 3rd Gen: The Pro-Install Value Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Advantage 3rd Gen line is MrCool&apos;s budget
                professional-install product — no pre-charged line set, lower
                MSRP, same core inverter compressor and SEER2 20 efficiency as
                the older 3rd Gen DIY. It exists for HVAC contractors who want
                a low-price mini split with the MrCool warranty and parts
                network behind it.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a homeowner, the Advantage only makes sense if you are
                already paying for professional installation and you want to
                shave $400-500 off the unit cost. The moment you value DIY,
                the 4th Gen is the right pick, it is only $100-200 more and
                saves thousands in labor. Contractors tend to prefer
                Advantage because they can sell a standard install package
                against it without competing against a homeowner-installable
                product that undercuts their labor margin.
              </p>

              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Ready to install DIY?'
                verdict='MrCool DIY 4th Gen is in stock at major retailers with free shipping. Check current price and available capacities.'
                source='mrcool-hub'
                variant='mid'
              />

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California Rebates &amp; Incentives
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Heat pumps are the most heavily incentivized mechanical
                upgrade in California in 2026. MrCool mini splits qualify for
                most major programs as long as the specific model hits the
                efficiency tier requirements.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                TECH Clean California
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The TECH Clean California program provides rebates of up to
                $3,000 for qualifying heat pump HVAC installations in
                residential single-family homes. Eligibility requires a
                minimum efficiency threshold (SEER2 16+, HSPF2 9+ in most
                tier configurations), refrigerant compliance (R-454B preferred
                post-2025), and installation by a participating contractor or
                a homeowner who registers the equipment through the TECH
                portal.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most MrCool DIY 4th Gen and Olympus Hyper Heat models meet
                the efficiency tier. For DIY installations, TECH allows
                homeowner registration as long as the permit process was
                followed and the equipment passes final inspection. In
                practice, many DIY-registered rebates have faced longer
                processing times than contractor-submitted ones, but they do
                get paid.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Federal 25C Tax Credit
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The federal Energy Efficient Home Improvement Credit (25C)
                provides 30% of project cost up to $2,000 for qualifying heat
                pumps. MrCool DIY 4th Gen 24K at $1,899 MSRP plus DIY labor
                (no separate labor cost) gets you a $570 credit. Add a 12K
                second zone and the combined credit caps at $2,000 annually.
                Unlike a deduction, this is a direct dollar-for-dollar tax
                credit.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Utility Programs
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                BayREN, 3C-REN, and SMUD BEES stack additional rebates on
                top of TECH and 25C for heat pump installs in their service
                territories. Typical additional rebate values: $300-800 for a
                single-zone mini split install, $1,000-2,500 for a multi-zone
                full-home install. Eligibility and program budgets shift
                annually; check your utility or REN program page before
                starting the install.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                HEEHRA / HOMES (Income-Qualified)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Low-to-moderate income California households may qualify for
                up to $8,000 in additional rebates under the HEEHRA
                (Home Electrification and Appliance Rebates) program, which
                rolled out to California administrators in late 2025. HEEHRA
                rebates cannot be combined with 25C on the same project, so
                the math changes, but for qualifying households, the HEEHRA
                path typically results in a near-zero out-of-pocket mini
                split installation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                MrCool vs Pioneer, Senville, and Mitsubishi
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                How does MrCool stack up against the main competition?
              </p>
              <ul className='space-y-3 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>vs Pioneer:</strong> Pioneer sells pre-charged
                    line-set kits at a roughly similar price point. MrCool
                    wins on warranty (5-yr parts / 7-yr compressor vs 5/5 on
                    Pioneer) and WiFi (standard vs optional module). Pioneer
                    has a stronger reputation among some contractor
                    communities for longevity. Both are reasonable DIY buys.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>vs Senville:</strong> Senville is a direct-import
                    budget brand without the US design/assembly footprint.
                    Roughly $300-600 cheaper unit cost. Warranty service is
                    more limited — US parts availability can be a multi-week
                    wait. MrCool is the better buy when total cost of
                    ownership includes potential warranty claims.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>vs Mitsubishi:</strong> Mitsubishi is the
                    premium-brand benchmark, best-in-class reliability, the
                    quietest indoor heads, the smoothest inverter modulation,
                    and the strongest cold-climate performance. Unit prices
                    run 50-100% higher than MrCool, and the line is
                    pro-install only. For whole-home central system
                    replacements or commercial jobs, Mitsubishi is usually
                    the better pick. For DIY single-zone or ADU installs,
                    MrCool is the right call.
                  </span>
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Installation Reality Check
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A realistic DIY MrCool 4th Gen install takes most homeowners
                4-8 hours end to end. The steps: mount the indoor head bracket
                to an interior wall (stud or masonry, 7-8 ft from floor),
                drill a 2.5-inch line-set pass-through to the outside, run
                the pre-charged quick-connect line set (refrigerant,
                condensate drain, control wire, and power wire all in one
                bundle), mount the outdoor condenser on a composite pad or
                wall bracket, connect and hand-tighten the quick-connect
                fittings at both ends, wire a dedicated 240V/20A circuit (or
                115V/20A for the 12K model), open the refrigerant service
                valves, and power up.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 240V circuit is the step most DIYers either skip or
                underestimate. If you are comfortable with your main panel
                and the panel has capacity, installing the circuit yourself
                is legal in California for a homeowner on their primary
                residence. But permits are still required and final
                inspection is a good idea. If you are not comfortable with
                panel work, hire an electrician for the circuit only
                (typically $400-700) and keep the rest of the install DIY.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Permits vary by jurisdiction. Most California cities and
                counties require a mechanical permit for any mini split
                install, and many also require an electrical permit for the
                new circuit. Total permit cost is usually $150-400 combined.
                Skipping the permit risks fines and potential issues at sale
                of the home — do the permit.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Warranty &amp; Support
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                MrCool warranty terms on the DIY 4th Gen and Olympus lines:
                5-year limited parts coverage and 7-year compressor warranty.
                The parts coverage is transferable on resale of the home,
                which matters for resale value. Warranty requires product
                registration within 60 days of install and annual maintenance
                documentation (which for DIY installs can be as simple as
                keeping a logbook of filter cleanings).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                US-based support is reachable by phone and email from MrCool
                corporate, and parts are stocked in Kentucky with 2-5 day
                shipping to California. Third-party contractor service
                networks accept MrCool warranty work; expect a $150-250
                service-call fee plus parts under warranty.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Can you really install a MrCool DIY mini split yourself?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. Pre-charged quick-connect line sets eliminate the
                    vacuum pump, manifold gauges, and EPA 608 refrigerant
                    certification otherwise required. Basic DIYers complete
                    a typical install in 4-8 hours. A 240V/20A dedicated
                    circuit is still needed for 24K+ models, hire an
                    electrician for the circuit if you&apos;re not comfortable
                    with panel work.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    DIY 4th Gen vs Olympus Hyper Heat?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    DIY 4th Gen is rated to 5°F heating, homeowner-
                    installable. Olympus holds full rated capacity to -22°F
                    but requires professional installation. For most of
                    California, DIY 4th Gen is plenty. For Sierra Nevada or
                    high-elevation properties, buy Olympus.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Are MrCool mini splits California rebate-eligible?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes, TECH Clean California up to $3,000, plus federal
                    25C credit 30% up to $2,000, plus BayREN/3C-REN/SMUD BEES
                    stacking up to $800-2,500. Income-qualified households
                    may access HEEHRA up to $8,000 instead of 25C.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How long do MrCool mini splits last?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    15-20 years with proper installation and annual
                    maintenance. Warranty: 5-year parts, 7-year compressor.
                    Annual filter cleaning and outdoor coil washing drives
                    longevity.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is MrCool made in the USA?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Designed in Hickory, Kentucky, with final assembly
                    operations in the US. Components sourced globally, which
                    is standard across virtually all HVAC brands.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What SEER2 rating do they have?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    DIY 4th Gen SEER2 20-22, Olympus Hyper Heat SEER2 21,
                    Advantage 3rd Gen SEER2 20. All meet California DOE
                    minimum (SEER2 15) and qualify for federal 25C at the
                    SEER2 16+ efficient tier.
                  </p>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a California homeowner adding a mini split to an ADU,
                garage, basement, bedroom, or single open-concept living
                area, a MrCool DIY 4th Gen 24K BTU at $1,899 plus a weekend
                of your own labor is the most cost-effective way to get
                conditioned air into a space. After California TECH rebates
                ($3,000 potential), federal 25C credit ($570 on this unit),
                and BayREN/utility stacking, the net installed cost can come
                in under $1,000. versus $6,000-8,000 for a professional
                install of an equivalent system. Step up to Olympus Hyper
                Heat if you live in the Sierra Nevada or above 4,000 ft
                elevation. Skip MrCool only if you&apos;re replacing a
                whole-home central HVAC system (in which case Mitsubishi or
                Daikin are the right premium picks) or you&apos;re not
                comfortable doing any part of the install yourself.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Final Verdict'
              verdict="MrCool DIY 4th Gen is the right mini split for most California DIY homeowners. After TECH rebates and 25C credit, installed cost can land under $1,000. Check current price."
              source='mrcool-hub'
              variant='final'
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See how MrCool stacks up against Pioneer, Senville, Daikin,
                and Mitsubishi in our full mini split ranking.
              </p>
              <Link
                href='/reviews/best-mini-split-ac'
                className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
              >
                See The Full Ranking
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/best-mini-split-ac'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Mini Splits
              </Link>
              <Link
                href='/reviews/diy-mini-split'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                DIY Install Guide
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRODUCT_KEY} source='mrcool-hub' />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
