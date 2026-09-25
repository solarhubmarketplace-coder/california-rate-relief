import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { IntentCTA } from '@/components/growth/IntentCTA';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';

export const metadata: Metadata = {
  title: "Solar EV Charging in California: The Complete 2026 Guide",
  description: "How to size solar for EV charging in California, when to charge on a time-of-use plan, and how to work out your own cost per mile.",
  alternates: {
    canonical: '/blog/solar-ev-charging-california',
  },
  openGraph: {
    title:
      'Solar EV Charging in California: The Complete 2026 Guide',
    description:
      'How to size solar for EV charging in California, when to charge on a time-of-use plan, and how to work out your own cost per mile.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Solar EV Charging in California: The Complete 2026 Guide',
  description:
    'How to size solar for EV charging in California, when to charge on a time-of-use plan, and how to work out your own cost per mile.',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
  author: CRR_AUTHOR_PERSON,
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/blog/solar-ev-charging-california',
  },
};

export default function SolarEVChargingCalifornia() {
  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'
              >
                <ArrowLeft className='h-4 w-4' />
                Back to Blog
              </Link>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                EV &amp; Solar
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar EV Charging in California: The Complete 2026 Guide
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>9 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                California&apos;s average residential electricity price was 34.74
                cents per kWh in June 2026, second only to Hawaii among the states
                (EIA, Electric Power Monthly, Table 5.6.A). If you charge an electric
                vehicle at home, you pay that kind of price for every kWh the car
                uses unless you shift charging to cheaper hours or cover it with
                solar. Here&apos;s how to work out what charging costs you and how
                solar changes it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The EV Charging Cost Reality in California
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most California EV owners charge at home, which means the electricity
                comes from your utility at whatever rate plan you&apos;re on. The
                problem: California&apos;s average residential price is among the
                highest in the nation (EIA). If you&apos;re on a
                flat-rate plan, you&apos;re paying the same elevated per-kWh rate
                whether you charge at noon or midnight.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re on a time-of-use (TOU) plan — which most utilities
                push EV owners toward — your cost depends heavily on when you charge.
                The evening peak is the most expensive period, and overnight hours
                are among the cheapest. Your plan&apos;s tariff sheet lists the exact
                prices for each period.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The annual cost depends on your vehicle and driving. To estimate it,
                multiply the kWh your car uses per mile (on its EPA label at
                fueleconomy.gov) by the miles you drive in a year, then by the price
                you pay per kWh in the hours you charge.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How Much Solar You Actually Need to Offset EV Charging
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This depends on your vehicle and how much you drive. Here are the
                rough numbers for additional solar capacity needed just to cover
                your EV charging.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A Tesla Model 3 or similar efficient sedan needs roughly 2 kW of
                additional solar capacity. A Tesla Model Y or mid-size SUV needs
                about 2.5 kW. Larger vehicles — electric trucks, full-size SUVs —
                need 3 to 4 kW. These are estimates for average California driving
                (roughly 12,000-15,000 miles per year) and average California sun
                exposure.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practical terms, that&apos;s 5 to 10 additional solar panels
                depending on the vehicle. If you&apos;re adding solar for the first
                time, you&apos;d size your system to cover both your household usage
                and your EV charging in one installation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Gas vs Solar-Charged EV: The Cost Per Mile Comparison
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Cost per mile is simple arithmetic you can do with your own numbers.
                For a gas car, divide the price per gallon by the car&apos;s miles per
                gallon. For an EV, multiply the price per kWh by the car&apos;s kWh
                per mile. Both efficiency figures are on the EPA label at
                fueleconomy.gov.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With solar, the kWh the car takes from your own system cost you what
                that system costs: no extra charge per kWh once you own it, or the
                PPA price per kWh (with its escalator) if a provider owns it. Power
                the car draws from the grid is still billed at your utility&apos;s
                price for that hour.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Run the comparison with your own gas price, electricity rate, car
                and annual miles rather than a published average.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                TOU Rates: When to Charge and When Not To
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re charging from the grid without solar, timing is
                everything. All three major California utilities — PG&amp;E, SCE, and
                SDG&amp;E — use time-of-use rate structures where the cost per kWh
                swings dramatically throughout the day.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Best time to charge (grid only):</strong> Off-peak hours,
                typically overnight. This is when rates are lowest on most
                time-of-use plans; check your plan for the exact hours. Most EVs let you
                schedule charging to start automatically at midnight.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Worst time to charge:</strong> the evening peak on your plan.
                Plugging in
                right when you get home from work is the most expensive possible
                choice. Set a timer.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>With solar + battery:</strong> your panels produce during
                the day and a battery can store the excess, so you can charge in the
                evening or overnight from stored solar instead of buying at peak
                prices. How much of the charging it covers depends on the
                battery&apos;s size and how far you drive.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Bidirectional Charging: Your EV as a Home Battery
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is an emerging technology worth knowing about. Bidirectional
                charging — also called Vehicle-to-Home (V2H) or Vehicle-to-Grid
                (V2G) — lets your EV send power back to your house or the grid. In
                effect, your car becomes a giant battery.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Ford F-150 Lightning is the most prominent example, capable of
                sending power back to a home with the right equipment; how long it
                lasts depends on the home&apos;s load. Several Hyundai, Kia, and GM models also
                support bidirectional charging. The technology is still in its early
                stages and requires compatible hardware (a bidirectional charger,
                transfer switch, and sometimes utility approval), but the potential
                is significant.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Imagine this scenario: your solar panels charge your EV during the
                day. In the evening, your EV powers your home during peak utility
                hours. You&apos;ve essentially turned a 100+ kWh EV battery into a
                home energy storage system that&apos;s many times larger than a
                typical residential battery. As bidirectional charging matures, the
                combination of solar + EV could become even more powerful than solar
                + dedicated home battery for some households.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Available Rebates for Solar and EV Charging
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California utilities have offered rebates for home EV charging
                equipment, with amounts that depend on the utility, the location and
                sometimes income. Check your utility&apos;s current EV charger rebate
                page before you buy a Level 2 (240V) charger; programs open and
                close.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                These rebates are separate from any solar incentives. If you&apos;re
                installing solar and a home EV charger at the same time, you can
                potentially stack rebates — the EV charger rebate plus whatever solar
                incentives apply to your situation. A solar system you buy in 2026
                gets no federal residential credit: IRC &sect; 25D does not apply to
                expenditures made after December 31, 2025.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why Every California EV Owner Should Look at Solar
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you already own an EV — or plan to buy one — you&apos;re adding a
                significant new electricity load to your home. In California, that
                load comes at some of the highest prices in the country (EIA). Solar
                can cover part or all of it, depending on the system size and when
                you charge.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Think of it this way: without solar, every mile you drive is bought
                from the utility at its price for that hour. With solar, the miles
                you charge from your own system cost whatever the system costs you,
                so compare that with your utility price before deciding.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a PPA, the provider owns the system, often with no down
                payment, and you pay a set price per kWh with an annual escalator,
                plus the utility charges you still owe. Add up both before comparing
                it with your current bills and fuel costs.
              </p>
            </div>

            <IntentCTA cta='article_cta' variant='bill' />

            {/* Navigation */}
            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/blog/nem-2-vs-nem-3'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                Previous Article
              </Link>
              <Link
                href='/blog/california-public-utilities-commission'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Next Article
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
