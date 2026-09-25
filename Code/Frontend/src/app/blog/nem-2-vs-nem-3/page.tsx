import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { IntentCTA } from '@/components/growth/IntentCTA';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';

export const metadata: Metadata = {
  title:
    "NEM 2.0 vs NEM 3.0: What Changed for California Solar",
  description:
    "NEM 3.0 credits solar exports at hourly avoided-cost values, usually below the retail rate. NEM 2.0 vs NEM 3.0 side by side: exports, legacy periods and payback drivers.",
  alternates: {
    canonical: '/blog/nem-2-vs-nem-3',
  },
  openGraph: {
    title:
      'NEM 2.0 vs NEM 3.0: What Changed and What It Means for California Solar in 2026',
    description:
      'NEM 3.0 credits exports at values usually below the retail rate. Side-by-side comparison of the old and new rules, and what they mean for going solar in 2026.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'NEM 2.0 vs NEM 3.0: What Changed and What It Means for California Solar in 2026',
  description:
    'NEM 3.0 credits exports at values usually below the retail rate. Compare NEM 2.0 vs NEM 3.0 side by side: export credits, legacy periods, payback drivers and what to check in a proposal.',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
  author: CRR_AUTHOR_PERSON,
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/blog/nem-2-vs-nem-3',
  },
};

export default function NEM2vsNEM3() {
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
                Net Metering &amp; Policy
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                NEM 2.0 vs NEM 3.0: What Changed and What It Means for California Solar in 2026
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>10 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re researching solar in California, you&apos;ve probably
                run into the terms NEM 2.0 and NEM 3.0. The difference between them
                is the single biggest factor affecting solar economics in the state
                right now. Here&apos;s a clear, no-spin breakdown of what changed,
                what it means for your wallet, and whether solar still makes
                financial sense in 2026. The short answer: it can, but the strategy
                is different now, and it depends on your usage and the contract.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What NEM 2.0 Was: The Golden Era of California Solar
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                NEM 2.0 — Net Energy Metering 2.0 — was the framework that made
                California the solar capital of the country. The concept was simple:
                when your solar panels produced more electricity than your home used,
                the excess flowed back to the grid and you received a credit at
                close to the retail rate you paid for grid power, depending on your
                utility and rate plan.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The math was generous. A kWh you sent to the grid at noon was worth
                almost the same as a kWh you pulled from the grid at 8 PM. You could
                oversize your system, bank credits during sunny months, and draw them
                down in winter.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What NEM 3.0 Changed: Lower, Hourly Export Credits
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On April 15, 2023, California&apos;s new Net Billing Tariff — widely
                called NEM 3.0 — took effect. The CPUC replaced retail-rate export
                credits with values based on the Avoided Cost Calculator, which
                estimates what your exported electricity is actually worth to the
                grid at any given hour.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The result, in the CPUC&apos;s words: the value of export
                compensation &ldquo;is usually lower than the retail rate,&rdquo;
                though it &ldquo;can rise above the retail rate on late summer
                evenings.&rdquo; Unlike NEM 2.0&apos;s credits near the retail
                rate, NEM 3.0 export values change by hour, month, and utility.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The same pattern applies at all three investor-owned utilities
                (PG&amp;E, SCE and SDG&amp;E): the export credit is set hour by
                hour from the CPUC&apos;s Avoided Cost Calculator rather than from
                your retail rate. Ask any proposal to state the export values it
                assumed for your utility and when your system exports.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Grandfathering Rules: Who Still Gets NEM 2.0
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you applied for interconnection before April 15, 2023, your
                system stays on NEM 2.0 for 20 years from its interconnection
                date, under CPUC Decision 14-03-041. You
                keep the old retail-rate export credits for the duration of that
                grandfathering period. Nothing about NEM 3.0 affects you unless you
                make a significant modification to your system.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The key exception: if you substantially expand your system — adding
                panels beyond a certain capacity threshold — the additional capacity
                (or in some cases your entire system) may be moved to NEM 3.0 rates.
                Adding a battery to an existing NEM 2.0 system generally does not
                trigger a switch, but rules vary by utility, so confirm with your
                provider before making changes.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Payback Period: NEM 2.0 vs NEM 3.0 Side by Side
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is where the change hits hardest for homeowners buying
                systems outright. Because exports now earn less than they did
                under NEM 2.0, a purchased system that exports a lot takes longer
                to pay back than the same system would have. How much longer
                depends on how much of your production you use yourself, whether
                you add a battery, your rate plan and the system price. This page
                does not quote a payback period because no primary source
                publishes one for your home.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The difference comes from the export value. Power you use
                directly from your panels still offsets what you would have
                bought at your retail rate; power you export earns the lower
                hourly credit. If your household is empty during the day and
                exports much of what the system produces, the change matters
                more.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why Batteries Changed the NEM 3.0 Equation
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under NEM 3.0 a battery can change the numbers. The logic is
                straightforward: instead of exporting midday solar for the hourly
                export credit, you store it in a battery and use it yourself during
                the evening peak, when time-of-use rates are highest.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A battery raises the share of your solar you use yourself. Every kWh
                you keep and use offsets power you would have bought at your retail
                rate rather than being exported for the lower credit. Whether that
                covers the cost of the battery depends on its price, your evening
                usage and your rate plan, so ask for a proposal with and without
                the battery.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 3.0 Is the Tariff That Applies Now
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                New solar customers of PG&amp;E, SCE and SDG&amp;E have taken
                service on the Net Billing Tariff since April 15, 2023, per the
                CPUC. Waiting for a policy reversal is not a plan: price solar on
                the tariff that applies to your application today.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rates also change several times a year, and not only upward: the
                CPUC Public Advocates Office reported that PG&amp;E&apos;s March 1,
                2026 update lowered its residential average by about 3.7% from
                January 1. Use the current rate on your own bill, not a forecast.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Does Solar Still Make Sense Under NEM 3.0?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Yes — but the strategy has fundamentally shifted. Under NEM 2.0, the
                playbook was &quot;produce as much as possible and export the
                excess.&quot; Under NEM 3.0, the playbook is &quot;produce, store,
                and consume as much as possible yourself.&quot; Whether the
                economics work for your home depends on how much of the system&apos;s
                output you use yourself, your rate plan and the price you pay.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Homeowners with high electricity use, good roof exposure and evening
                usage a battery can cover are the ones most likely to benefit.
                Compare written proposals on your own twelve months of usage.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The PPA Advantage Under NEM 3.0
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a Power Purchase Agreement (PPA), the provider owns the system
                and pays for it, and you pay a set price per kWh, usually with an
                annual escalator. That shifts the question from payback to contract
                cost: add up the PPA payments and the utility charges you would
                still pay, and compare them with your current bills.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A PPA does not remove your utility bill. The CPUC&apos;s consumer
                guide notes that lease and PPA customers also receive a monthly
                bill from the solar provider, and the utility still bills for grid
                power and its fixed charge. Ask the provider to show both bills for
                a sample month before you sign.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Buying can still make sense if you have the capital or financing,
                plan to stay in the home, and can use most of what the system
                produces. Compare the total cost of each option in writing.
              </p>
            </div>

            <IntentCTA cta='article_cta' variant='bill' />

            {/* Navigation */}
            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/blog'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Articles
              </Link>
              <Link
                href='/blog/solar-panels-for-ev-charging-california'
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
