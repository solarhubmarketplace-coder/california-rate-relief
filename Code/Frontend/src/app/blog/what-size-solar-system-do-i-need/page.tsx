import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'What Size Solar System Do I Need? California Sizing Guide (2026)',
  description:
    'Calculate the right solar system size for your California home. Learn the formula, sizing formula for NEM 3.0, battery impact, roof requirements, and common mistakes.',
  alternates: {
    canonical: '/blog/what-size-solar-system-do-i-need',
  },
  openGraph: {
    title:
      'What Size Solar System Do I Need? California Sizing Guide (2026)',
    description:
      'Complete guide to sizing your solar system in California — formula, NEM 3.0 considerations, battery impact, and roof space requirements.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'What Size Solar System Do I Need? California Sizing Guide (2026)',
  description:
    'Complete guide to sizing a solar system for your California home, including the formula, NEM 3.0 impact, battery considerations, and roof space.',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
  },
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
    '@id': 'https://ratereliefca.com/blog/what-size-solar-system-do-i-need',
  },
};

export default function WhatSizeSolarSystemDoINeed() {
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
                Solar Education
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                What Size Solar System Do I Need? California Sizing Guide (2026)
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>7 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                One of the most common questions homeowners ask is: &quot;How many solar panels do I need?&quot; The answer depends on three things: your annual electricity usage, the amount of sunlight your roof gets, and (in 2026) California&apos;s net metering rules. Oversizing your system wastes money on excess generation you can&apos;t use efficiently. Undersizing means you don&apos;t eliminate your electric bill. This guide walks you through the math, explains how NEM 3.0 changes the game, and shows you exactly how much roof space you need.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Quick Formula
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s the fundamental sizing formula:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>System Size (in kW) = Annual kWh Usage ÷ (Peak Sun Hours per Day × 365 Days × 0.80 System Loss Factor)</strong>
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Peak sun hours are the equivalent number of hours per day when the sun provides 1,000 watts per square meter of solar radiation. California ranges from 4.5 to 6.5 peak sun hours per day depending on location. Southern California (San Diego, Los Angeles) gets around 5.5-6 hours. Northern California (San Francisco, Sacramento) gets around 4.5-5.2 hours. The 0.80 factor accounts for system losses from inverter efficiency, wiring losses, shading, and dust.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Example:</strong> If you use 7,200 kWh per year in San Diego (5.7 peak sun hours), your system size would be: 7,200 ÷ (5.7 × 365 × 0.80) = 7,200 ÷ 1,662 = 4.3 kW.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step-by-Step Sizing Process
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Step 1: Find your annual usage.</strong> Log into your utility account (PG&E, SCE, SDG&E, etc.) and download your last 12 months of bills. Add up all the kWh usage (ignore the dollar amounts). The average California household uses 6,000 to 8,900 kWh per year, but some homes use much less (2,000-3,000 kWh if highly efficient) and some use much more (15,000+ kWh if running central AC all summer).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Step 2: Know your location&apos;s peak sun hours.</strong> Use the{' '}
                <a
                  href='https://pvwatts.nrel.gov'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  NREL PVWatts calculator
                </a>{' '}
                (free) or Google&apos;s{' '}
                <a
                  href='https://sunroof.withgoogle.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  Project Sunroof tool
                </a>{' '}
                to find your location&apos;s average peak sun hours. These tools also account for roof orientation and any shading from trees or buildings.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Step 3: Calculate your ideal system size using the formula above.</strong> This is your baseline — the system size that produces roughly 80-100% of your annual electricity consumption.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 3.0 Changes Everything — Right-Size, Don&apos;t Oversize
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before NEM 3.0 (which took effect in April 2023), the financial incentive was to oversize your system as much as possible. You&apos;d get paid the full retail rate for excess electricity you fed back to the grid. Now, with NEM 3.0, export credits are just 5-8 cents per kWh (depending on your utility and time of export), while you still pay 30-60 cents per kWh for electricity you buy from the grid. This dramatically changes the math.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>The key principle:</strong> Every kilowatt-hour you generate and use yourself is worth 30-60 cents. Every kWh you export is worth only 5-8 cents. Overproducing to export is a money loser.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For most homeowners, this means sizing your system to cover 80-100% of your annual usage — not 110-150% as was common before. Right-sizing is especially important if you&apos;re not adding battery storage (see below). If you have seasonal usage variation (high in summer for AC, low in winter), consider a slightly conservative size that avoids excess winter production that you can&apos;t use.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Battery Storage Impact — Size Your System Larger
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re adding battery storage (like a Tesla Powerwall), you can and should size your system 10-20% larger than the baseline formula suggests. Here&apos;s why: the battery absorbs excess midday production that you can&apos;t use immediately, stores it, and lets you use it in the evening when rates are highest. This dramatically improves the economics of the extra generation.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For example, if your baseline system is 6 kW, adding a battery might make a 7-7.5 kW system optimal. The extra generation during midday gets stored and discharged during peak-rate evening hours (4-9 PM), avoiding the worst of your time-of-use charges.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Roof Space Requirements
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Modern solar panels (2026) are typically 400-450 watts each and occupy about 17.5-18 square feet per panel. As a rule of thumb, plan for 60-70 square feet per kilowatt of system size. So a 6 kW system needs about 360-420 square feet of usable roof space. That&apos;s roughly a 20×20 foot section or a 18×24 foot section, accounting for roof slopes and setbacks.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most residential roofs have enough space, but shading from trees, chimneys, or vent stacks can significantly reduce your available area. South-facing roof space is ideal in California. East- and west-facing orientations work but are less efficient (20-30% less production). North-facing is rarely viable.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                System Size Lookup Table
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s a quick reference for typical California households:
              </p>

              <div className='overflow-x-auto my-6'>
                <table className='w-full text-sm border border-border'>
                  <thead className='bg-primary/10'>
                    <tr>
                      <th className='border border-border px-4 py-2 text-left font-semibold'>Monthly Usage</th>
                      <th className='border border-border px-4 py-2 text-left font-semibold'>Annual Usage</th>
                      <th className='border border-border px-4 py-2 text-left font-semibold'>Recommended System Size</th>
                      <th className='border border-border px-4 py-2 text-left font-semibold'>Approximate Panels*</th>
                      <th className='border border-border px-4 py-2 text-left font-semibold'>Roof Space Needed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-border px-4 py-2'>500 kWh</td>
                      <td className='border border-border px-4 py-2'>6,000 kWh</td>
                      <td className='border border-border px-4 py-2'>4-4.5 kW</td>
                      <td className='border border-border px-4 py-2'>10-11</td>
                      <td className='border border-border px-4 py-2'>175-260 sq ft</td>
                    </tr>
                    <tr className='bg-primary/5'>
                      <td className='border border-border px-4 py-2'>600 kWh</td>
                      <td className='border border-border px-4 py-2'>7,200 kWh</td>
                      <td className='border border-border px-4 py-2'>5-5.5 kW</td>
                      <td className='border border-border px-4 py-2'>12-14</td>
                      <td className='border border-border px-4 py-2'>210-320 sq ft</td>
                    </tr>
                    <tr>
                      <td className='border border-border px-4 py-2'>740 kWh</td>
                      <td className='border border-border px-4 py-2'>8,880 kWh</td>
                      <td className='border border-border px-4 py-2'>6-7 kW</td>
                      <td className='border border-border px-4 py-2'>15-18</td>
                      <td className='border border-border px-4 py-2'>260-420 sq ft</td>
                    </tr>
                    <tr className='bg-primary/5'>
                      <td className='border border-border px-4 py-2'>900 kWh</td>
                      <td className='border border-border px-4 py-2'>10,800 kWh</td>
                      <td className='border border-border px-4 py-2'>8-9 kW</td>
                      <td className='border border-border px-4 py-2'>20-23</td>
                      <td className='border border-border px-4 py-2'>350-520 sq ft</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                *Based on 420W panels; actual count varies by panel wattage.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Common Sizing Mistakes to Avoid
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Mistake 1: Using your peak summer bill to size the system.</strong> Summer bills are often 2-3× higher than winter bills due to AC usage. If you size for your peak summer month, you&apos;ll dramatically oversize the system. Always use annual averages.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Mistake 2: Oversizing to &quot;future-proof.&quot;</strong> Planning to buy an EV or add a pool? Don&apos;t overbuild your system now — it&apos;s cheaper to add panels later (after the ITC is gone, yes, but you&apos;re not paying for 15 years of inefficient export). Size for your current usage and upgrade if needed.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Mistake 3: Ignoring shading from roof details.</strong> Your installer should use high-resolution satellite imagery and shade modeling (tools like Solargis or PvSyst). A small vent stack or tree can shade a section of your array and reduce output far more than the percentage of area shaded (due to series wiring of strings).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Mistake 4: Forgetting about roof condition.</strong> If your roof is 15+ years old and wasn&apos;t re-roofed recently, get it replaced before solar. Reinstalling panels after reroofing is expensive and unnecessary.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Right-sizing your system is critical in 2026. With NEM 3.0&apos;s low export credits, oversizing is a money loser — every kWh you export is worth just 5-8 cents instead of the 30-60 cents you&apos;re paying to buy it. Use the formula above with your actual annual usage and your location&apos;s peak sun hours, then size to cover 80-100% of your consumption. If you&apos;re adding battery storage, you can comfortably go 10-20% larger. Most California homes need 5-7 kW systems, requiring 300-420 square feet of south-facing roof space. When you talk to installers, ask them to run a PVWatts simulation showing your expected annual production — that&apos;s your validation that the system size is correct.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Not Sure About Your Roof or System Size?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                The California Rate Relief Program connects you with qualified specialists who can assess your home and recommend the right system size. Get started in 60 seconds.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check Your Home
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

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
                href='/blog/how-to-lower-electric-bill-california'
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
