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
  Check,
  X,
  Zap,
  Shield,
  ChevronRight,
  Home,
  DollarSign,
  Leaf,
} from 'lucide-react';

const PRODUCT_KEY = 'rinnai-tankless-water-heater';

export const metadata: Metadata = {
  title:
    'Tankless Water Heater Cost 2026: Unit + Install Prices Explained',
  description:
    'Complete 2026 guide to tankless water heater costs: unit prices ($500-$3,000), installation costs ($1,000-$3,500), total installed costs by fuel type, rebates and tax credits, and ROI vs tank heaters. Gas, electric, and condensing models compared.',
  alternates: {
    canonical: '/reviews/tankless-water-heater-cost',
  },
  openGraph: {
    title:
      'Tankless Water Heater Cost 2026: Unit + Install Prices Explained',
    description:
      'Real 2026 costs: $2,500-$5,000 installed for gas tankless, $1,500-$3,500 for electric. Plus rebates, ROI vs tank, and when tankless actually makes sense.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Tankless Water Heater Cost 2026: Unit + Install Prices Explained',
  description:
    'Complete 2026 cost breakdown for tankless water heaters covering unit prices, installation variables, total installed costs, rebates, tax credits, and ROI comparison vs traditional tank water heaters.',
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
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
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/tankless-water-heater-cost',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the average total cost of a tankless water heater installed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In 2026, the typical total installed cost ranges from $2,500-$5,000 for a gas tankless water heater and $1,500-$3,500 for an electric tankless. Condensing gas models run $3,500-$6,000 installed. Premium whole-home units with complex installations can reach $7,000-$8,000. The unit itself accounts for roughly 40-50% of the total; the rest is labor, permits, venting, and gas line upgrades.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does tankless installation cost more than tank installation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tankless water heaters typically require a larger gas line (3/4" instead of 1/2"), dedicated stainless steel venting (not standard B-vent), 120V electrical connection (even for gas models), and condensate drainage for condensing models. A tank-to-tankless conversion adds all of these items, compared to a like-for-like tank replacement which only requires swapping the unit. Expect installation labor of $1,500-$3,500 for a typical conversion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there rebates or tax credits for tankless water heaters in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The federal residential solar Investment Tax Credit expired on December 31, 2025, but the Energy Efficient Home Improvement Credit (25C) still covers qualifying high-efficiency water heaters — up to $2,000/year for heat pump water heaters and $600/year for gas tankless models meeting CEE Advanced Tier efficiency. Utility rebates vary by location: SoCalGas offers $200-$700 rebates for qualifying gas tankless models, and many California utilities rebate $300-$1,500 on heat pump water heaters through TECH Clean California.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a tankless water heater save per month on energy bills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typical energy savings are $25-$50/month vs a standard tank water heater ($300-$600/year). Condensing gas tankless models deliver the highest savings; electric resistance tankless saves less than gas tankless due to California electricity rates. Heat pump water heaters (tank-style, not tankless) actually deliver higher savings than electric tankless in most California homes — something to consider if your motivation is purely energy savings.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a tankless water heater last vs a tank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tankless water heaters typically last 15-20 years with annual descaling maintenance. Tank water heaters last 8-12 years before the tank corrodes and fails. Over a 20-year horizon, you typically buy one tankless unit vs two tank units — and that longer lifespan is the single biggest factor in tankless ROI. Factor two tank replacements + higher operating costs into the comparison for honest math.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does a tankless water heater NOT make financial sense?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Skip tankless if your current tank is working fine and you plan to move within 3-5 years (you will not recoup the premium), if your home has minimal hot water demand (small households use less hot water where tank inefficiency matters less), or if your home electrical and gas infrastructure needs expensive upgrades ($1,500+ for panel upgrade or gas line upsize). In these cases, a heat pump water heater is often the better upgrade — higher upfront but larger rebates and better operating economics than electric tankless.',
      },
    },
  ],
};

export default function TanklessWaterHeaterCost() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
              <Link
                href='/reviews'
                className='hover:text-primary transition-colors'
              >
                Reviews
              </Link>
              <ChevronRight className='h-3 w-3' />
              <Link
                href='/reviews/best-tankless-water-heater'
                className='hover:text-primary transition-colors'
              >
                Tankless Water Heaters
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>Cost Guide</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Buyer&apos;s Guide
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Tankless Water Heater Cost 2026: Unit + Install Prices
                Explained
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

            {/* Quick cost summary (in place of top CTA since this is a guide) */}
            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <h2 className='text-xl font-bold text-foreground mb-4'>
                Quick Answer: What You&apos;ll Actually Pay
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                In 2026, a tankless water heater installation runs{' '}
                <strong>$2,500-$5,000 total</strong> for a typical gas unit
                and <strong>$1,500-$3,500</strong> for an electric unit.
                Condensing gas models (the most efficient) run{' '}
                <strong>$3,500-$6,000</strong>. The unit itself is only part
                of the bill — installation labor, venting, gas line upgrades,
                and permits add 50-60% on top of the equipment cost. Federal
                tax credits and utility rebates can offset $400-$1,000 of
                that total.
              </p>
              <div className='grid md:grid-cols-3 gap-4 text-sm'>
                <div className='bg-background/60 border border-border rounded-lg p-4'>
                  <p className='font-semibold text-foreground mb-1'>
                    Gas Tankless
                  </p>
                  <p className='text-muted-foreground text-xs mb-2'>
                    Non-condensing
                  </p>
                  <p className='text-foreground font-bold text-lg'>
                    $2,500-$5,000
                  </p>
                  <p className='text-muted-foreground text-xs mt-1'>
                    installed
                  </p>
                </div>
                <div className='bg-background/60 border border-border rounded-lg p-4'>
                  <p className='font-semibold text-foreground mb-1'>
                    Condensing Gas
                  </p>
                  <p className='text-muted-foreground text-xs mb-2'>
                    Highest efficiency
                  </p>
                  <p className='text-foreground font-bold text-lg'>
                    $3,500-$6,000
                  </p>
                  <p className='text-muted-foreground text-xs mt-1'>
                    installed
                  </p>
                </div>
                <div className='bg-background/60 border border-border rounded-lg p-4'>
                  <p className='font-semibold text-foreground mb-1'>
                    Electric Tankless
                  </p>
                  <p className='text-muted-foreground text-xs mb-2'>
                    Whole-home
                  </p>
                  <p className='text-foreground font-bold text-lg'>
                    $1,500-$3,500
                  </p>
                  <p className='text-muted-foreground text-xs mt-1'>
                    installed
                  </p>
                </div>
              </div>
            </div>

            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Key Cost Facts at a Glance
              </h2>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <tbody className='divide-y divide-border'>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <DollarSign className='h-4 w-4 text-primary' />
                        Gas unit only
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        $1,000-$1,500 (non-condensing), $1,800-$3,000
                        (condensing)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Zap className='h-4 w-4 text-primary' />
                        Electric unit only
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        $500-$1,500 (whole-home); $200-$500 (point-of-use)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Home className='h-4 w-4 text-primary' />
                        Gas installation labor
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        $1,500-$3,500
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Home className='h-4 w-4 text-primary' />
                        Electric installation labor
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        $1,000-$2,500
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Leaf className='h-4 w-4 text-primary' />
                        Operating savings vs tank
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        $300-$600/year typical
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground flex items-center gap-2'>
                        <Shield className='h-4 w-4 text-primary' />
                        Lifespan
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        15-20 years (vs 8-12 for tank)
                      </td>
                    </tr>
                    <tr className='bg-muted/30'>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        25C federal tax credit
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        Up to $600 for qualifying gas tankless
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 font-medium text-foreground'>
                        Typical payback
                      </td>
                      <td className='px-4 py-3 text-foreground/80'>
                        8-14 years (gas), 10-18 years (electric)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Unit Cost by Type
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The tankless water heater itself — before anyone installs it —
                varies wildly by fuel type, flow rate, and efficiency tier.
                Here is how the categories break down.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Non-Condensing Gas Tankless ($1,000-$1,500)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Non-condensing gas tankless units are the most common. They
                use stainless steel venting and reach energy factor (EF)
                ratings around 0.82-0.85. Popular models in this tier: Rinnai
                RL75, RU160e; Rheem Performance Platinum gas; Navien NPE
                baseline. These are a solid choice for typical households and
                keep total installed costs in the $2,500-$4,000 range.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Condensing Gas Tankless ($1,800-$3,000)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Condensing gas units capture additional heat from exhaust
                gases, reaching EF ratings of 0.92-0.97 and qualifying for the
                federal Energy Efficient Home Improvement Credit (25C).
                Examples: Rinnai Sensei RX series, Navien NPE-A2, Rheem
                Prestige condensing. Condensing units require PVC venting
                (cheaper than stainless) but need a condensate drain. Total
                installed costs run $3,500-$6,000.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Whole-Home Electric Tankless ($500-$1,500)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Whole-home electric tankless units (typically 18-36 kW) are
                cheaper upfront but require serious electrical infrastructure
                — a 240V circuit, 125-150A dedicated service, and often a
                panel upgrade in older California homes. Popular models:
                EcoSmart ECO 27, Stiebel Eltron Tempra Plus, Rheem RTEX-27.
                Electric tankless is the right choice for small homes, homes
                without gas service, and ADU installations where running gas
                is impractical.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Point-of-Use Electric ($200-$500)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Small 3-8 kW units installed under a single sink or at a
                single shower. Great for remote bathrooms, guest spaces, or
                workshops where running hot water from the main heater wastes
                too much water and time. Not a replacement for a whole-home
                solution; more of a supplement.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Installation Cost Factors
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Installation labor and materials typically equal the cost of
                the unit itself for a gas conversion. Here is what drives that
                number.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Gas Line Upsizing ($300-$1,200)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A standard tank water heater runs on a 1/2 inch gas line. Most
                whole-home tankless units (with input of 160,000-199,000 BTU)
                require a 3/4 inch line. If your gas meter and main line are
                already 3/4 inch and the run to the water heater is short,
                upsizing is cheap. If you need a long run of new 3/4 inch
                line or (worse) a larger gas meter, costs climb to $1,200+.
                This is the single most unpredictable cost in a tank-to-tankless
                conversion.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Venting ($400-$1,200)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Non-condensing gas tankless units require Category III
                stainless steel concentric venting — not the B-vent used on
                tank water heaters. Condensing units use cheaper schedule 40
                PVC. The length of the vent run and the number of elbows and
                penetrations through the roof or exterior wall drive the
                cost. Wall-vented installations tend to be cheaper than
                vertical roof vents.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Electrical ($150-$800)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Even gas tankless units need 120V power for their electronic
                ignition and controls. If there is already an outlet near the
                current water heater, this is a $150 ask. If a new circuit
                needs to be run from the main panel, budget $500-$800. For
                whole-home electric tankless, electrical work is the single
                largest line item after the unit itself — often $1,500-$3,500
                alone for new 240V service plus possible panel upgrade.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Permits &amp; Inspection ($100-$400)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most California jurisdictions require a mechanical and/or
                plumbing permit for water heater replacement. Permit fees
                vary by city and generally run $100-$400, including the final
                inspection. Skipping permits is a bad idea — homeowners
                insurance and future home sales can both catch an
                unpermitted water heater installation.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Condensate Drain (Condensing Only, $100-$400)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Condensing tankless units produce mildly acidic condensate
                that needs a drain. If there is a floor drain or laundry
                drain nearby, routing is cheap. If not, a condensate pump
                adds $100-$300 and installation labor to get the condensate
                to an appropriate drain.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Old Tank Removal ($100-$200)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most installers roll tank removal and disposal into the
                overall quote, but confirm it is included. A 50-gallon tank
                is heavy and awkward to move, and scrap / disposal fees
                range from $50-$150 in most California metros.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Total Installed Cost Table
              </h2>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        System Type
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Unit Cost
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Install Labor
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-primary'>
                        Total Installed
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/80'>
                        Gas non-condensing
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $1,000-$1,500
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $1,500-$3,500
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $2,500-$5,000
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/80'>
                        Gas condensing
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $1,800-$3,000
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $1,700-$3,000
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $3,500-$6,000
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/80'>
                        Electric whole-home
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $500-$1,500
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $1,000-$2,500
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $1,500-$3,500
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/80'>
                        Electric + panel upgrade
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $500-$1,500
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $2,500-$5,000+
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $3,000-$6,500
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/80'>
                        Point-of-use electric
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>$200-$500</td>
                      <td className='px-3 py-2 text-foreground/70'>$300-$600</td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $500-$1,100
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-xs text-muted-foreground mt-2'>
                  Prices reflect typical California installations in 2026.
                  Actual quotes vary by metro, contractor, and home
                  specifics. Always get 3 bids.
                </p>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Rebates &amp; Tax Credits in 2026
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Several programs offset tankless costs. Stack what you can.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Federal Energy Efficient Home Improvement Credit (25C)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 25C tax credit is still active in 2026. It covers 30% of
                the cost of qualifying high-efficiency water heaters, up to{' '}
                <strong>$600/year for gas tankless</strong> meeting CEE
                Advanced Tier efficiency (UEF ≥ 0.95 for most models). Heat
                pump water heaters (tank-style, not tankless) qualify for the
                higher <strong>$2,000/year</strong> cap under a separate
                category. Note: the federal residential solar ITC expired on
                December 31, 2025, but the 25C water heater credit is a
                separate program and remains in place.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                SoCalGas Rebates
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                SoCalGas offers $200-$700 rebates for qualifying high-
                efficiency gas tankless water heaters. Check their current
                rebate catalog at the time of purchase — models and amounts
                change quarterly.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                TECH Clean California (Heat Pump Only)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The TECH Clean California initiative offers $300-$1,500
                rebates for heat pump water heaters (which are tank-style,
                not tankless, but worth mentioning as an alternative). If
                electrification is your main goal and gas tankless is not
                your only option, a heat pump water heater typically beats
                electric tankless on both upfront cost after rebates and
                operating cost.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                BayREN &amp; Local Utility Programs
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                BayREN (Bay Area Regional Energy Network), LADWP, SMUD, and
                several municipal utilities offer varying rebates of
                $100-$500 on qualifying tankless water heaters. Check with
                your specific utility for current availability.
              </p>

              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Our pick for California homeowners'
                verdict='For most California homes, a mid-range Rinnai Sensei RX condensing gas tankless hits the sweet spot — efficient enough to claim the full 25C credit, reliable enough to last 20 years, and widely supported by local installers.'
                source='tankless-water-heater-cost'
                variant='mid'
              />

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Tankless vs Tank: ROI Math
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here is how the numbers actually shake out over 20 years —
                the realistic lifespan of a tankless unit.
              </p>

              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        20-Year Cost
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Tank (50 gal gas)
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-primary'>
                        Tankless (condensing gas)
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Unit + install (initial)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $1,500-$2,500
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $3,500-$6,000
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Replacement at year 10-12
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $1,800-$3,000 (1 unit)
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $0 (same unit still running)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Annual energy cost (typical 4-person home)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $550-$750
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $280-$420
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Maintenance (20 yr)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        $200 (anode rod)
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        $600 (annual descaling)
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Total 20-year cost
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        ~$14,500-$19,500
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        ~$9,700-$15,000
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-xs text-muted-foreground mt-2'>
                  Estimates assume natural gas at 2026 California rates and
                  typical family hot water usage. Hard water areas may
                  require more frequent tankless descaling.
                </p>
              </div>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The math tilts clearly toward tankless over a full 20-year
                horizon. The kicker isn&apos;t the monthly energy savings (which
                are real but modest at $25-$40/month) — it&apos;s{' '}
                <strong>avoiding one tank replacement</strong> around year 10,
                which alone saves $1,800-$3,000. If you plan to stay in the
                home for 10+ years, tankless pays off. If you plan to sell
                within 3-5 years, tank replacement is the smarter move
                financially, though tankless may help with resale pitch.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Tankless Makes Sense (And When It Doesn&apos;t)
              </h2>

              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-green-800 dark:text-green-400 mb-3'>
                    Tankless is a good fit if...
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      You plan to stay in the home 10+ years
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Your current tank is 8+ years old (due for replacement)
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      You have natural gas service already in place
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Your household runs out of hot water frequently
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      You want to reclaim garage/closet space
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      You qualify for the 25C credit + SoCalGas rebate
                    </li>
                  </ul>
                </div>
                <div className='bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-5'>
                  <h3 className='font-semibold text-red-800 dark:text-red-400 mb-3'>
                    Skip tankless if...
                  </h3>
                  <ul className='space-y-2 text-sm text-foreground/80'>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      You&apos;re selling within 3-5 years
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Your existing tank is only 2-4 years old
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Your home is all-electric and needs a panel upgrade
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      You have very hard water and won&apos;t descale yearly
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      A heat pump water heater would work (often better ROI)
                    </li>
                    <li className='flex items-start gap-2'>
                      <X className='h-4 w-4 text-red-500 mt-0.5 shrink-0' />
                      Single-person household with minimal hot water demand
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How to Get the Best Price
              </h2>
              <ol className='space-y-3 text-foreground/80 mb-6 list-decimal list-inside'>
                <li>
                  <strong>Get 3 quotes.</strong> Tankless quotes vary by
                  $1,500 or more between contractors for the same job.
                </li>
                <li>
                  <strong>Ask what&apos;s included.</strong> Permits, disposal
                  of old tank, gas line upsizing, venting — missing any of
                  these can add $500-$2,000 to the final bill.
                </li>
                <li>
                  <strong>Verify the model qualifies for 25C.</strong> Not
                  all tankless units meet CEE Advanced Tier. Confirm the
                  model number against current CEE listings before install.
                </li>
                <li>
                  <strong>Check SoCalGas/utility rebate forms.</strong>{' '}
                  Contractors often know the current rebate process; some
                  will handle the paperwork.
                </li>
                <li>
                  <strong>Ask about warranty terms.</strong> Heat exchanger
                  warranties of 10-15 years are standard; labor warranties
                  of 1-5 years are typical but variable.
                </li>
                <li>
                  <strong>Time your install for shoulder season.</strong>{' '}
                  Late spring and early fall contractors have more flexibility
                  and will negotiate more than during summer peak.
                </li>
              </ol>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Best Brands by Category
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Three brands dominate the tankless water heater market in the
                US:
              </p>
              <ul className='space-y-3 text-foreground/80 mb-6'>
                <li>
                  <strong>Rinnai</strong> — Japanese-made, 15-year heat
                  exchanger warranty, strongest reputation for longevity.
                  Mid-to-premium pricing. Read our{' '}
                  <Link
                    href='/reviews/rinnai-tankless-water-heater-review'
                    className='text-primary hover:underline'
                  >
                    Rinnai tankless review
                  </Link>
                  .
                </li>
                <li>
                  <strong>Rheem</strong> — Widely available at Home Depot,
                  competitive pricing, 12-year heat exchanger warranty. Best
                  value in the mid-range. Read our{' '}
                  <Link
                    href='/reviews/rheem-tankless-water-heater-review'
                    className='text-primary hover:underline'
                  >
                    Rheem tankless review
                  </Link>
                  .
                </li>
                <li>
                  <strong>Navien</strong> — Korean-made, very high-efficiency
                  condensing models (NPE-2 series), strong app/smart features.
                  Premium pricing.
                </li>
              </ul>

              <div className='mb-8'>
                <BuyButton
                  productKey={PRODUCT_KEY}
                  label='Compare Rinnai Tankless Water Heaters'
                  source='tankless-water-heater-cost-inline'
                />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What is the average total cost installed?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    $2,500-$5,000 for gas non-condensing, $3,500-$6,000 for
                    gas condensing, $1,500-$3,500 for whole-home electric.
                    Premium installations with difficult venting or panel
                    upgrades can reach $7,000-$8,000.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Why does tankless install cost more than tank?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Tankless conversions typically require larger gas lines
                    (3/4 inch), stainless steel or PVC venting, 120V
                    electrical, and condensate drainage (condensing only).
                    Tank replacements are direct swaps; tankless conversions
                    are substantial upgrades.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Are there rebates or tax credits in 2026?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. Federal 25C covers 30% up to $600/year for qualifying
                    gas tankless (or $2,000/year for heat pump water heaters,
                    which are tank-style). SoCalGas offers $200-$700 rebates.
                    BayREN, LADWP, SMUD, and some municipal utilities add
                    $100-$500.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How much does it save per month?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Typical monthly savings: $25-$50 vs a standard tank.
                    Condensing gas tankless delivers the highest savings;
                    electric tankless saves less due to California electricity
                    rates.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How long does tankless last vs tank?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Tankless: 15-20 years with annual descaling. Tank: 8-12
                    years before corrosion failure. Avoiding a $2,000 tank
                    replacement at year 10 is the single biggest driver of
                    tankless ROI.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    When does tankless NOT make sense?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Skip tankless if you&apos;re moving within 3-5 years, your
                    current tank is nearly new, your home needs an expensive
                    panel upgrade, or your household barely uses hot water. A
                    heat pump water heater may be the better upgrade path for
                    all-electric homes.
                  </p>
                </div>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Tankless water heaters cost more upfront than tank units but
                pay off over a 20-year horizon through energy savings and by
                avoiding one tank replacement cycle. For most California
                homeowners with natural gas service and a tank that&apos;s
                nearing end of life, a mid-range condensing gas tankless
                ($3,500-$5,000 installed) is the sweet spot — efficient
                enough for the full 25C federal credit, reliable enough to
                last 20 years, and installed by any competent plumber.
                Electric tankless is the right call only in all-electric
                homes or ADU scenarios where gas isn&apos;t available. For
                electrification projects, compare tankless against a heat
                pump water heater before committing — the rebate landscape
                often tips in favor of heat pump.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Ready to shop?'
              verdict='Rinnai is our recommended brand for most California homeowners — 15-year heat exchanger warranty, 20-year typical lifespan, wide installer network. Check current models and pricing.'
              source='tankless-water-heater-cost'
              variant='final'
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still researching?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See our full tankless water heater reviews for Rinnai, Rheem,
                and Navien side by side.
              </p>
              <Link
                href='/reviews/best-tankless-water-heater'
                className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
              >
                See All Tankless Reviews
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/rinnai-tankless-water-heater-review'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                Rinnai Review
              </Link>
              <Link
                href='/reviews/rheem-tankless-water-heater-review'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Rheem Review
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA
        productKey={PRODUCT_KEY}
        source='tankless-water-heater-cost'
      />
    </ReviewLayout>
  );
}
