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
  Battery,
  Shield,
  ChevronRight,
  Home,
  DollarSign,
  Leaf,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

const PRODUCT_KEY = 'ecoflow-delta-pro-3';

export const metadata: Metadata = {
  title:
    'Whole House Battery Backup 2026: Tesla Powerwall 3, Franklin, EcoFlow Delta Pro Ultra Compared',
  description:
    'Complete 2026 guide to whole-house battery backup systems. Tesla Powerwall 3 ($12,500-$16,500 installed), Franklin WH aPower 2 ($14,000), Enphase IQ Battery 5P ($9,500), EcoFlow Delta Pro Ultra ($4,099), Anker SOLIX F3800 ($1,799). SGIP rebates, permitting, off-grid vs grid-tied.',
  alternates: {
    canonical: '/reviews/whole-house-battery-backup',
  },
  openGraph: {
    title:
      'Whole House Battery Backup 2026: Tesla Powerwall 3, Franklin, EcoFlow Delta Pro Ultra Compared',
    description:
      'Real 2026 installed costs: Permanent systems $9,500-$16,500 vs portable stackable $1,799-$4,099. SGIP rebates, permitting, which is right for you.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Whole House Battery Backup 2026: Tesla Powerwall 3, Franklin, EcoFlow Delta Pro Ultra Compared',
  description:
    'Comprehensive 2026 buyer guide covering whole-house battery backup systems including permanently-installed options (Tesla Powerwall 3, Franklin WH aPower 2, Enphase IQ Battery 5P) and portable stackable alternatives (EcoFlow Delta Pro Ultra, Anker SOLIX F3800), with SGIP rebate analysis, permitting, and California-specific considerations.',
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
    '@id':
      'https://ratereliefca.com/reviews/whole-house-battery-backup',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much battery capacity do I need to back up a whole house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most California homes need 13-30 kWh of usable battery capacity for true whole-house backup, depending on loads and the desired duration. A 13.5 kWh Tesla Powerwall 3 backs essential loads (fridge, lights, Wi-Fi, some HVAC) for 8-12 hours. To run central AC through an afternoon heat wave requires 20+ kWh. Two stacked Powerwalls (27 kWh) or a Franklin aPower 2 (15 kWh expandable to 45 kWh) handles full-home comfort backup for 1-2 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between permanent and portable whole-house backup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Permanent systems (Tesla Powerwall 3, Franklin aPower 2, Enphase IQ Battery 5P) are hardwired to your electrical panel with automatic transfer switching and solar integration. They cost $9,500-$16,500+ installed and provide seamless whole-home backup. Portable stackable systems (EcoFlow Delta Pro Ultra, Anker SOLIX F3800) cost $1,799-$4,099 each, can be moved, and work with a Smart Home Panel for automatic backup of selected circuits. Permanent wins on seamless operation; portable wins on price flexibility and renter-friendly deployment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are whole-house batteries eligible for the federal tax credit in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only when paired with solar. The federal Residential Clean Energy Credit (25D) expired December 31, 2025 for standalone residential solar and storage systems. However, storage paired with a qualifying solar installation still qualifies for the 30% credit through 2032 under existing transitional rules. Standalone battery installations after December 31, 2025 must rely on state incentives like SGIP. Commercial installations continue to qualify for the 30% ITC.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does California SGIP pay for whole-house batteries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SGIP offers $150-$1,100 per kWh of battery capacity. The General Market budget pays $150/kWh — about $2,025 for a 13.5 kWh Powerwall 3. The Equity budget pays up to $1,100/kWh for qualifying low-income customers, those in high fire-threat districts, or medically vulnerable residents — up to $14,850 on the same Powerwall, often covering the full installed cost. Equity Resiliency funds for medical baseline and critical care customers may cover the entire system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a whole-house battery work off-grid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some yes, some no. Tesla Powerwall 3 and Franklin aPower 2 support full off-grid operation with the right solar configuration and inverter setup. Enphase IQ Battery 5P requires grid connection for normal operation but can island during outages. Portable stackables (Delta Pro Ultra, F3800) operate fully off-grid by design. For true off-grid living, plan for 30+ kWh of capacity, 8-12 kW of solar, and a generator for extended cloudy periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a whole-house battery last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '10-15 years typical warranty, with expected useful life of 15-20 years. Tesla Powerwall 3 carries a 10-year warranty guaranteeing 70% capacity retention. Franklin aPower 2 guarantees 80% retention at 12 years. LFP-chemistry portable units (EcoFlow, Anker) typically warranty 5 years but carry 3,500-6,000 cycle ratings that project to 10-15+ years of daily cycling. Plan to replace or augment capacity once warranty expires if you plan to stay in the home long-term.',
      },
    },
  ],
};

export default function WholeHouseBatteryBackupGuide() {
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
              <span className='text-foreground font-medium'>
                Whole House Battery Backup
              </span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Buyer&apos;s Guide
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Whole House Battery Backup 2026: Tesla Powerwall 3,
                Franklin, EcoFlow Delta Pro Ultra Compared
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
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
              badge='Portable Pick'
              rating={4.6}
              verdict='If a $12,500-$16,500 permanent Powerwall install is too much, the EcoFlow Delta Pro 3 at $1,999 (expandable to 12 kWh) delivers essential-circuit whole-home backup without permits or electricians. And you keep the hardware if you move.'
              pros={[
                'No permit required for portable',
                'Expandable capacity',
                'Works in rentals',
              ]}
              cons={[
                'Portable lacks seamless AC-scale backup',
                'No SGIP for portable-only',
              ]}
              source='whole-house-backup'
              variant='top'
            />

            {/* Category overview */}
            <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-10'>
              <div className='flex items-center gap-3 mb-4'>
                <h2 className='text-xl font-bold text-foreground'>
                  Category Overview
                </h2>
                <div className='flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full'>
                  <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
                  <span className='font-bold text-foreground'>4.6</span>
                  <span className='text-muted-foreground text-sm'>/ 5</span>
                </div>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-5'>
                Whole-house battery backup in 2026 breaks into two clear
                paths. The first is <strong>permanent
                installation</strong> — hardwired battery systems like
                Tesla Powerwall 3, Franklin WH aPower 2, and Enphase IQ
                Battery 5P that integrate with your electrical panel and
                solar. Expect $9,500-$16,500+ installed, full seamless
                home backup, and SGIP rebate eligibility. The second is{' '}
                <strong>portable stackable</strong> — units like the
                EcoFlow Delta Pro Ultra and Anker SOLIX F3800 that start
                at $1,799-$4,099 per unit, can be expanded over time, and
                work for essential-circuit backup via a smart panel
                accessory. Permanent wins on seamless whole-home
                performance; portable wins on upfront cost, renter
                flexibility, and the ability to keep the hardware when
                you move.
              </p>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Pick permanent if you:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Own the home and plan to stay 10+ years
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Want seamless whole-home including central AC
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Qualify for SGIP Equity rebate
                    </li>
                  </ul>
                </div>
                <div>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Pick portable if you:
                  </p>
                  <ul className='text-sm text-foreground/80 space-y-1'>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Rent or may move in 3-5 years
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Want essential-circuit backup under $5,000
                    </li>
                    <li className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-green-600 mt-0.5 shrink-0' />
                      Want to start small and expand
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparison table. The revenue driver */}
            <div className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>
                Whole-House Battery Systems Compared
              </h2>
              <ComparisonTable
                source='whole-house-battery-backup'
                specLabels={[
                  'Type',
                  'Usable Capacity',
                  'Peak Output',
                  'Chemistry',
                  'Backup Duration (13 kWh/day)',
                  'Installed Cost',
                  'Warranty',
                  'SGIP Eligible',
                ]}
                products={[
                  {
                    productKey: 'ecoflow-delta-pro-3',
                    name: 'EcoFlow Delta Pro 3',
                    badge: 'Best Portable',
                    rating: 4.7,
                    specs: {
                      Type: 'Portable',
                      'Usable Capacity': '4.1 kWh (exp. To 12 kWh)',
                      'Peak Output': '4,000W',
                      Chemistry: 'LFP',
                      'Backup Duration (13 kWh/day)': '7-8 hrs',
                      'Installed Cost': '$1,999 (unit)',
                      Warranty: '5 yr',
                      'SGIP Eligible': 'Limited',
                    },
                  },
                  {
                    productKey: 'ecoflow-delta-pro-ultra',
                    name: 'EcoFlow Delta Pro Ultra',
                    badge: 'Best Expandable',
                    rating: 4.6,
                    specs: {
                      Type: 'Portable (expandable)',
                      'Usable Capacity': '6-30 kWh',
                      'Peak Output': '7,200W',
                      Chemistry: 'LFP',
                      'Backup Duration (13 kWh/day)': '12-48 hrs',
                      'Installed Cost': '$4,099+ (w/ Smart Home Panel 2)',
                      Warranty: '5 yr',
                      'SGIP Eligible': 'Yes (w/ SHP2)',
                    },
                  },
                  {
                    productKey: 'anker-solix-f3800',
                    name: 'Anker SOLIX F3800',
                    badge: 'Best Value',
                    rating: 4.5,
                    specs: {
                      Type: 'Portable (stackable)',
                      'Usable Capacity': '3.8 kWh (exp. To 26.9 kWh)',
                      'Peak Output': '6,000W',
                      Chemistry: 'LFP',
                      'Backup Duration (13 kWh/day)': '7-50 hrs',
                      'Installed Cost': '$1,799 (unit)',
                      Warranty: '5 yr',
                      'SGIP Eligible': 'Limited',
                    },
                  },
                ]}
              />
              <p className='text-sm text-muted-foreground mb-6'>
                <em>Note on permanent systems:</em> Tesla Powerwall 3 (13.5
                kWh, $12,500-$16,500 installed, 10-year warranty), Franklin
                WH aPower 2 (15 kWh expandable to 45 kWh, $14,000 installed,
                12-year warranty), and Enphase IQ Battery 5P (5 kWh per unit,
                stackable, $9,500 installed for 10 kWh) are sold exclusively
                through certified installers — we link portable alternatives
                that you can buy direct. For permanent systems, request
                quotes from at least 3 local certified installers.
              </p>
            </div>

            {/* Permanent systems deep dive */}
            <div className='prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Permanent Whole-House Battery Systems
              </h2>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Tesla Powerwall 3, $12,500-$16,500 Installed
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Powerwall 3 is the market benchmark. 13.5 kWh of usable
                LFP capacity, 11.5 kW continuous output (enough to start
                central AC compressors), integrated solar inverter (so you
                do not need a separate string inverter if you install
                Powerwall 3 with new solar), and seamless whole-home
                backup via automatic transfer switching. Install runs
                $12,500-$16,500 in California depending on panel upgrade
                needs and installer markup. Tesla sells exclusively through
                Tesla Energy or certified installers. plan for 8-16 weeks
                from order to commissioning.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Best for: homeowners installing new solar (the integrated
                inverter eliminates cost and space), homes where central AC
                backup is non-negotiable, and buyers wanting the most
                polished ecosystem (Tesla app, auto software updates,
                consumer-grade UX).
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Franklin WH aPower 2, $14,000 Installed (15 kWh)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Franklin has become the serious Tesla alternative. The
                aPower 2 delivers 15 kWh usable capacity per unit, expands
                to 45 kWh across three units, and pushes 10 kW continuous
                / 15 kW peak output. The standout spec is the 12-year
                warranty guaranteeing 80% capacity retention, one of the
                longest and strongest warranties in the category. Full
                off-grid operation is supported with the right solar
                configuration. Install cost runs roughly $14,000 per
                15-kWh unit in California through certified installers.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Best for: homeowners wanting the longest warranty coverage,
                those planning for expandable capacity (Tesla Powerwall 3
                maxes at 4 units stacked while Franklin stacks more
                cleanly), and properties where off-grid operation is a
                hard requirement.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Enphase IQ Battery 5P, $9,500 Installed (10 kWh / 2 units)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Enphase takes a different architectural approach. Each IQ
                Battery 5P is a 5 kWh modular unit with its own embedded
                micro-inverter — you buy and install in increments. This
                works particularly well for homeowners already on an
                Enphase solar microinverter system (the ecosystem
                integration is seamless), or for those starting small and
                planning to expand. Two 5P units (10 kWh total) install
                for roughly $9,500. Four units (20 kWh) lands around
                $17,500.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Best for: homes with existing Enphase solar, buyers
                wanting modular expansion over time, and installations
                where physical space constraints favor smaller stackable
                units over a single large battery.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Portable Stackable Alternatives
              </h2>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                EcoFlow Delta Pro Ultra. $4,099+ per Unit
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Delta Pro Ultra is the most ambitious portable battery
                shipped to date; 6 kWh base capacity, expandable to 30
                kWh across 5 units. Paired with the EcoFlow Smart Home
                Panel 2, it provides automatic backup switching with
                sub-20ms transfer time for selected circuits. The SHP2
                is a genuine permanent install (hardwired to your panel
                by a licensed electrician, roughly $2,000-$3,500
                installed), but the batteries themselves remain portable. you can unhook them and take them camping or to a
                different property.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Typical full-system cost: $4,099 for one 6 kWh battery +
                $2,000-$3,500 for Smart Home Panel 2 install = $6,100-$7,600
                for essential-circuit backup. Scaling to 30 kWh pushes the
                battery cost to $15,000-$20,000, at which point a
                permanent Franklin or Powerwall system starts to compete
                favorably. Best at the 6-18 kWh range where portable
                flexibility still beats permanent on flexibility.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                See our detailed{' '}
                <Link
                  href='/reviews/ecoflow-delta-pro-3-review'
                  className='text-primary hover:underline'
                >
                  EcoFlow Delta Pro 3 review
                </Link>{' '}
                for the smaller sibling that covers essentials at half
                the capacity for under $2,000.
              </p>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Anker SOLIX F3800, $1,799 per Unit
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Anker&apos;s F3800 is the best portable value in the
                category: 3.84 kWh of LFP per unit, 6,000W peak output,
                stackable to 26.9 kWh across 7 units. With the Anker
                Home Power Panel (their equivalent of EcoFlow&apos;s
                SHP2), it handles automatic essential-circuit backup.
                Stack two units (7.7 kWh) for roughly $3,600 plus
                $2,000-$3,000 installed panel = $5,600-$6,600 for a
                serviceable essential-circuit whole-home backup.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                See our{' '}
                <Link
                  href='/reviews/anker-solix-f3800-review'
                  className='text-primary hover:underline'
                >
                  Anker SOLIX F3800 review
                </Link>{' '}
                for the detailed product breakdown.
              </p>

              {/* Capacity planning */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How Much Capacity Do You Actually Need?
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The right capacity depends on what you want to keep
                running and for how long. Rough guidelines for a typical
                California home:
              </p>
              <div className='overflow-x-auto mb-6'>
                <table className='w-full text-sm border border-border rounded-lg overflow-hidden'>
                  <thead>
                    <tr className='bg-muted/50'>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Scenario
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-foreground'>
                        Daily Use
                      </th>
                      <th className='px-3 py-2 text-left font-semibold text-primary'>
                        Recommended Capacity
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-border'>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Essentials only (fridge, lights, Wi-Fi, phone)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        ~5 kWh/day
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        5-10 kWh
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Essentials + light HVAC (mild climate)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        ~10 kWh/day
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        13-20 kWh
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-2 text-foreground/70'>
                        Full home with central AC (inland CA)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        20-30 kWh/day
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        27-40 kWh
                      </td>
                    </tr>
                    <tr className='bg-muted/20'>
                      <td className='px-3 py-2 text-foreground/70'>
                        Off-grid target (no solar backup)
                      </td>
                      <td className='px-3 py-2 text-foreground/70'>
                        15-25 kWh/day
                      </td>
                      <td className='px-3 py-2 font-medium text-foreground'>
                        40+ kWh
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For most California homeowners, 13.5 kWh (one Powerwall 3)
                covers essential loads plus light HVAC for 12-18 hours of
                PSPS, which matches the typical duration of a single-day
                shutoff. To bridge multi-day events or run central AC
                through an afternoon heat wave, plan for 20-30 kWh. Stacking
                two Powerwalls, one Franklin, or expanding a Delta Pro Ultra
                to 18-24 kWh all hit this target.
              </p>

              {/* SGIP */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                California SGIP Rebates: $150-$1,100/kWh
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The California Self-Generation Incentive Program (SGIP) is
                the single biggest financial lever available for
                whole-house battery purchases. The program operates on two
                budgets:
              </p>
              <ul className='space-y-3 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <DollarSign className='h-4 w-4 text-primary mt-1 shrink-0' />
                  <span>
                    <strong>General Market: $150/kWh.</strong> Open to most
                    California homeowners in PG&amp;E, SCE, and SDG&amp;E
                    territories. $2,025 on a 13.5 kWh Powerwall 3; $2,250
                    on a 15 kWh Franklin; $4,500 on a 30 kWh Delta Pro
                    Ultra stack.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <DollarSign className='h-4 w-4 text-primary mt-1 shrink-0' />
                  <span>
                    <strong>Equity Budget: up to $1,100/kWh.</strong> For
                    low-income customers, those in high fire-threat
                    districts (HFTD Tier 2/3), medically vulnerable
                    residents on medical baseline, or customers with well
                    pump dependence. $14,850 on a 13.5 kWh Powerwall 3, often covering the full installed cost.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <DollarSign className='h-4 w-4 text-primary mt-1 shrink-0' />
                  <span>
                    <strong>Equity Resiliency: up to $1,100/kWh.</strong>{' '}
                    For medical baseline + HFTD combined or similar
                    critical-need profiles. Often pays for the entire
                    system with no out-of-pocket cost.
                  </span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                SGIP funds are allocated by utility territory and tend to
                run out mid-year. Application goes through your installer
                within 30 days of project completion. Portable batteries
                (Delta Pro Ultra, F3800) qualify only when paired with a
                permanently installed Smart Home Panel; the battery alone
                does not meet SGIP&apos;s installation requirements. Fully
                portable units without any permanent infrastructure are
                typically ineligible.
              </p>

              {/* Federal tax credit */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Federal Tax Credit: Expired for Standalone Storage
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Residential Clean Energy Credit (25D) expired on
                December 31, 2025 for standalone residential solar and
                storage systems. Storage installed <em>alongside</em>{' '}
                qualifying solar still qualifies for the 30% credit
                through 2032 under existing transitional rules. A
                standalone battery retrofit after January 1, 2026 no
                longer qualifies for the federal credit. This is the
                single most impactful policy change affecting 2026
                whole-house battery economics. the standalone storage
                ITC would have added $3,750-$5,000 off a Powerwall 3
                install that is no longer available.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you are adding solar this year and pairing it with
                storage, the stacking still works: 30% ITC on the full
                combined system cost. If you are doing storage-only as
                a retrofit on an existing solar array, check with a tax
                professional, there is some ambiguity around
                qualification for ITC on storage added to a previously
                installed solar system, depending on the original
                commissioning date.
              </p>

              {/* Permitting */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Permitting &amp; Installation
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Permanent whole-house batteries require:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Electrical permit</strong> from your local
                    AHJ (authority having jurisdiction), typically
                    $300-$800.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Utility interconnection agreement</strong> —
                    required for grid-tied systems in PG&amp;E, SCE, and
                    SDG&amp;E territories. Typical approval takes 2-6
                    weeks.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Certified installer</strong> — both Tesla and
                    Franklin sell exclusively through their certified
                    networks. DIY installation voids warranty and
                    violates code.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Panel upgrade (sometimes)</strong> — older
                    homes on 100A service often need a 200A panel
                    upgrade to accommodate a battery system&apos;s amperage
                    requirements. Typical upgrade: $1,500-$4,000.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  <span>
                    <strong>Inspection</strong> — post-install inspection
                    by AHJ before utility will energize the system.
                  </span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Portable stackable systems largely bypass all of this
                unless you install a Smart Home Panel. The battery itself
                plugs into a standard 30A outlet. The Smart Home Panel,
                when added, requires the same electrical permitting
                process as a permanent battery — though the ongoing
                compliance is lighter.
              </p>

              {/* Mid CTA */}
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                badge='Ready to start?'
                verdict='The EcoFlow Delta Pro 3 is the easiest on-ramp: $1,999 gets you 4 kWh of LFP capacity you can deploy today, then expand to 12 kWh or add a Smart Home Panel later if needs grow.'
                source='whole-house-backup'
                variant='mid'
              />

              {/* Off-grid vs grid-tied */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Off-Grid vs Grid-Tied Operation
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Grid-tied with backup</strong> is the default
                configuration for permanent systems. The battery sits
                between your solar and the grid; during normal operation
                it stores excess solar production, shifts it to peak TOU
                hours, and exports surplus to the grid. During a grid
                outage, the battery automatically islands and runs
                selected loads. All three major permanent systems
                (Powerwall 3, Franklin aPower 2, Enphase IQ 5P) support
                this mode.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>True off-grid</strong> operation (no grid
                connection, battery + solar only) is supported by Tesla
                Powerwall 3 and Franklin aPower 2 with the right inverter
                setup. Enphase IQ Battery 5P requires grid connection for
                normal operation. For true off-grid living in California,
                plan for 30+ kWh of battery, 8-12 kW of solar, and a
                generator (gas or propane) as backup for extended cloudy
                periods.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Portable stackable</strong> units operate fully
                off-grid by design, they do not require grid connection
                for any mode. Paired with a solar array, they function as
                miniature off-grid systems for cabins, ADUs, or remote
                workshops.
              </p>

              {/* When to pick each */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When to Pick Each Option
              </h2>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Pick Tesla Powerwall 3 if:
              </h3>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  You are installing new solar (integrated inverter saves
                  $2,000-$3,500)
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  You want the most polished consumer ecosystem and app
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  Central AC backup is non-negotiable (11.5 kW continuous
                  handles most residential AC startup)
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Pick Franklin WH aPower 2 if:
              </h3>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  You want the longest warranty coverage (12 years / 80%
                  capacity)
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  You need deeper expansion than 4 Powerwalls allows
                  (15 kWh per unit stacks cleanly)
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  Off-grid operation is a hard requirement
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Pick Enphase IQ Battery 5P if:
              </h3>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  You have an existing Enphase microinverter solar system
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  You want to start with 5-10 kWh and expand over time
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  Physical space constrains single large units
                </li>
              </ul>

              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Pick EcoFlow Delta Pro Ultra / Anker F3800 if:
              </h3>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  You rent, or may move in 3-5 years (you keep the
                  batteries)
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  You want to start under $5,000 and expand gradually
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  You want portability for camping, RV, or remote
                  property backup
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-green-600 mt-1 shrink-0' />
                  You do not want to wait 2-4 months for a permit and
                  certified install
                </li>
              </ul>

              {/* FAQ */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How much capacity do I need for whole-house backup?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    13-30 kWh usable for most California homes. 13.5 kWh
                    covers essentials plus light HVAC for 12-18 hours.
                    20-30 kWh handles full-home including central AC for
                    1-2 days. 40+ kWh is off-grid territory.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Permanent vs portable, what is the difference?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Permanent systems (Powerwall, Franklin, Enphase) are
                    hardwired with automatic transfer switching and solar
                    integration, $9,500-$16,500+ installed, seamless
                    whole-home backup. Portable (Delta Pro Ultra, F3800)
                    starts at $1,799-$4,099 per unit, works for essential
                    circuits via smart panel, and moves with you.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Is there still a federal tax credit in 2026?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Only when paired with solar. The residential
                    standalone storage ITC expired Dec 31, 2025. Storage
                    added with qualifying solar still gets 30% through
                    2032. Standalone battery retrofits no longer qualify
                    federally — but California SGIP remains ($150-$1,100
                    per kWh).
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How much does SGIP pay?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    $150/kWh general market. Up to $1,100/kWh for equity
                    customers (low-income, HFTD, medical baseline). On a
                    13.5 kWh Powerwall: $2,025 general, up to $14,850
                    equity, often covering the full installed cost.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Can a whole-house battery work off-grid?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Tesla Powerwall 3 and Franklin aPower 2 support full
                    off-grid with proper inverter setup. Enphase IQ 5P
                    needs grid connection. Portable units (Delta Pro
                    Ultra, F3800) work off-grid by design. Off-grid
                    requires 30+ kWh plus 8-12 kW of solar plus a
                    generator backup.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How long does a whole-house battery last?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    10-15 year warranty typical, 15-20 year expected
                    useful life. Powerwall 3: 10 yr / 70% retention.
                    Franklin aPower 2: 12 yr / 80%. LFP portable units:
                    5 yr warranty but 3,500-6,000 cycles projects to 10-15+
                    years of daily cycling.
                  </p>
                </div>
              </div>

              {/* Bottom line */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Whole-house battery backup in 2026 is more accessible than
                ever, but the 2026 expiration of the standalone residential
                ITC changes the math meaningfully. For California homeowners
                who qualify for SGIP Equity funds, permanent systems like
                Tesla Powerwall 3 or Franklin aPower 2 remain the most
                capable path. Often with SGIP covering most or all of
                the cost. For everyone else, the decision comes down to
                long-term ownership plans. If you are staying 10+ years and
                want seamless whole-home backup including central AC,
                permanent wins. If you are renting, plan to move in 3-5
                years, or want to start under $5,000 and expand, portable
                stackable systems (EcoFlow Delta Pro Ultra, Anker SOLIX
                F3800) are the more flexible choice. Either path beats
                being stuck in the dark during a PSPS event with a $400
                gas generator.
              </p>
            </div>

            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              badge='Ready to upgrade?'
              verdict='The EcoFlow Delta Pro 3 is the easiest entry point into whole-house backup. $1,999, no permits, and compatible with a Smart Home Panel when you are ready to scale up.'
              source='whole-house-backup'
              variant='final'
            />

            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See our full portable power station rankings and
                product-by-product reviews of EcoFlow, Anker, Bluetti,
                and Jackery.
              </p>
              <Link
                href='/reviews/best-portable-power-stations'
                className='inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all'
              >
                See The Full Ranking
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews/ecoflow-delta-pro-ultra-review'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                Delta Pro Ultra Review
              </Link>
              <Link
                href='/reviews/anker-solix-f3800-review'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Anker SOLIX F3800
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA
        productKey={PRODUCT_KEY}
        source='whole-house-backup'
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    </ReviewLayout>
  );
}
