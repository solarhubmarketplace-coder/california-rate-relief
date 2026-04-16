import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Why Is My PG&E Bill So High? (2026 Breakdown)',
  description:
    'PG&E rates reached 41.46¢/kWh in April 2026. Here\'s why your bill is so high and what you can do about it.',
  alternates: {
    canonical: '/blog/why-is-my-pge-bill-so-high',
  },
  openGraph: {
    title:
      'Why Is My PG&E Bill So High? (2026 Breakdown)',
    description:
      'PG&E rates reached 41.46¢/kWh in April 2026. Here\'s why your bill is so high and what you can do.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Why Is My PG&E Bill So High? (2026 Breakdown)',
  description:
    'PG&E rates reached 41.46¢/kWh in April 2026. Here\'s why your bill is so high and what you can do.',
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
    '@id': 'https://ratereliefca.com/blog/why-is-my-pge-bill-so-high',
  },
};

export default function WhyIsMyPGEBillSoHigh() {
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
                Utility Rates
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Why Is My PG&amp;E Bill So High? (2026 Breakdown)
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>8 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Your PG&amp;E bill is high because rates in Northern California have roughly doubled since 2020. The current average residential rate sits at 41.46 cents per kilowatt-hour (kWh) as of April 2026 — one of the highest in the country and roughly 2.3 times the national average of 18 cents. This article breaks down exactly what you&apos;re paying for, how the rate structure works, and what you can realistically do about it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What You&apos;re Actually Paying
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Your PG&amp;E bill consists of three main components: a fixed monthly charge, the per-kWh rate for energy, and various surcharges. As of April 2026, here&apos;s the breakdown.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Per-kWh rate: 41.46¢</strong> This is the headline number. But it&apos;s an average — your actual rate depends on your time-of-use (TOU) plan. If you&apos;re on E-TOU-C (the most common default for households without electric vehicles), you pay roughly 20¢/kWh during off-peak hours and 47-52¢/kWh during peak hours (4-9 PM). Peak hours consume more electricity for most homes (air conditioning, evening usage), so your blended rate ends up near 41.46¢.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Fixed monthly charge: $24</strong> Starting March 1, 2026, PG&amp;E added a monthly fixed charge of approximately $24. This appears on your bill every month regardless of how much electricity you use. For a household using 900 kWh per month (typical for a 3-bedroom home with central air in Northern California), this fixed charge represents roughly 6% of the total bill.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Hidden surcharges: ~4-8¢/kWh additional</strong> On top of the per-kWh rate, PG&amp;E tacks on charges for wildfire mitigation (PSPS fund), transmission costs (PCIA), and California&apos;s power plant closure costs (CTC). These add another 4-8 cents to what you&apos;re effectively paying per kWh. So your true effective rate, including all surcharges, is often 45-50¢/kWh, not 41.46¢.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For a typical 3-bedroom Northern California home using 900 kWh per month, total monthly bill is roughly $310-$340, or $3,720-$4,080 per year. That&apos;s electricity only — no natural gas, no other utilities.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The $24 Fixed Charge
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                PG&amp;E implemented this new fixed monthly charge in March 2026, claiming it covers the cost of maintaining the distribution grid — poles, wires, transformers, and meter reading infrastructure. The idea is that you should pay the same amount whether you use 100 kWh or 2,000 kWh because you still need the grid infrastructure to deliver power.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For customers trying to reduce consumption or who are considering solar, this fixed charge is a problem. It means you can&apos;t offset your entire bill with solar — you&apos;ll always owe the $24 base charge. It also reduces the financial incentive to conserve, since 15% of your bill is now fixed costs rather than variable usage costs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Rate History (2020-2026)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Understanding the upward trend helps explain why your bill feels out of control. Here&apos;s how PG&amp;E rates have climbed over six years:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2020:</strong> ~24¢/kWh<br />
                <strong>2021:</strong> ~27¢/kWh (+12.5%)<br />
                <strong>2022:</strong> ~30¢/kWh (+11%)<br />
                <strong>2023:</strong> ~36¢/kWh (+20%)<br />
                <strong>2024:</strong> ~41¢/kWh (+13.9%)<br />
                <strong>2025-2026:</strong> ~41.46¢/kWh (slight increase, +1.1%)
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In six years, your per-kWh rate has increased roughly 72%. If you add the new $24 fixed charge and surcharges, your effective rate has roughly doubled. A bill that was $180-200 per month in 2020 is now $310-340.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why PG&amp;E Rates Keep Going Up
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Wildfire mitigation and grid hardening.</strong> After catastrophic wildfires linked to power lines, PG&amp;E is spending billions on undergrounding power lines, installing monitoring systems, and conducting vegetation management in high-fire-risk zones. This spending is mandated by regulators and appears on your bill. The costs are massive and spread across all ratepayers.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Grid modernization and decarbonization.</strong> California is pushing toward 100% clean electricity and massive electric vehicle adoption. This requires new transmission lines, substation upgrades, battery storage infrastructure, and smart grid technology. Every ratepayer bears these costs whether they drive an EV or not.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Multi-year rate increase frameworks.</strong> The California Public Utilities Commission (CPUC) has already approved multi-year rate increase frameworks for PG&amp;E extending into 2027 and beyond. This means the increases you&apos;ve seen aren&apos;t one-offs — they&apos;re built into approved plans.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Which Rate Plan Are You On?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most PG&amp;E customers are automatically on a time-of-use (TOU) rate plan, but not all TOU plans are equal. The three main options are:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>E-TOU-C (most common):</strong> Peak hours 4-9 PM every day. Off-peak rates roughly 20¢/kWh, peak rates 47-52¢/kWh. Best for households with typical evening usage patterns and no electric vehicle.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>E-TOU-D:</strong> Peak hours 5-8 PM weekdays only. Similar rates but slightly lower peak rates if you can shift some weekend usage. Good if you&apos;re flexible about timing.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>EV-A (for electric vehicle owners):</strong> Special low rates for EV charging during off-peak hours (midnight-6 AM roughly), much higher rates if you charge during peak. Best if you charge overnight.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                You can see which plan you&apos;re on and compare potential savings by logging into your PG&amp;E account and using their rate comparison tool. Many households are on a default plan that&apos;s not optimal for their usage. Switching plans is free and takes minutes.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What You Can Do About It
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Step 1: Verify you&apos;re on the right plan (free, 10 minutes).</strong> Log into your PG&amp;E account, navigate to Rate Plans, and compare what you&apos;d pay on each available plan based on your actual usage history. If a different plan saves you money, switch immediately. This costs nothing and can save 5-15%.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Step 2: Shift usage away from peak hours.</strong> Peak hours (4-9 PM) have rates 2-2.5x higher than off-peak. Pre-cool your house by 3:30 PM, run dishwasher and laundry before 4 PM or after 9 PM, and charge EVs overnight. A smart thermostat can automate this. PG&amp;E offers rebates on smart thermostats — check their rebate page before buying.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Step 3: Check if you qualify for CARE or FERA.</strong> If your household income is below certain thresholds (roughly $40,000 for a household of two, $61,000 for a household of four), you may qualify for the CARE program, which offers a 30-35% discount on your entire bill. FERA offers 18% for families of three+ earning slightly more. Check eligibility on PG&amp;E&apos;s CARE page.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Step 4: Evaluate bigger moves.</strong> If the above doesn&apos;t cut it, consider home energy efficiency upgrades (insulation, air sealing, windows), solar with a purchased system or PPA (30-50% bill reduction), or community solar if your roof isn&apos;t suitable. The math depends on your specific home and how long you plan to stay. Google&apos;s Project Sunroof tool offers a free rough estimate of your home&apos;s solar potential.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Your PG&amp;E bill is high because rates have roughly doubled since 2020 due to wildfire mitigation, grid modernization, and multi-year approved rate increases. At 41.46¢/kWh plus surcharges and the new $24 fixed charge, you&apos;re paying roughly 2.3 times the national average. Start by making sure you&apos;re on the right rate plan and shifting usage away from peak hours — that&apos;s free and can save 5-15%. If that&apos;s not enough, evaluate CARE discounts, energy efficiency upgrades, or solar. The right answer depends on your home, your bill, and your long-term plans.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Want to See Your Savings Potential?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                Based on PG&amp;E&apos;s current rates and your usage, find out what a fixed solar rate would look like for your home.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check Your Eligibility
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
                href='/blog/sdge-time-of-use-rates-2026'
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
