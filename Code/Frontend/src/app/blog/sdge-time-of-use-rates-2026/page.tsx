import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'SDG&E Time of Use Rates Explained (2026 Guide)',
  description:
    'SDG&E has the highest rates in the continental US at 45.7¢/kWh, with summer peak rates reaching 69.65¢. Here\'s how to navigate their TOU schedule.',
  alternates: {
    canonical: '/blog/sdge-time-of-use-rates-2026',
  },
  openGraph: {
    title:
      'SDG&E Time of Use Rates Explained (2026 Guide)',
    description:
      'SDG&E has the highest rates in the continental US. Here\'s how their TOU schedule works and how to save.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'SDG&E Time of Use Rates Explained (2026 Guide)',
  description:
    'SDG&E has the highest rates in the continental US at 45.7¢/kWh, with summer peak rates reaching 69.65¢. Here\'s how to navigate TOU rates.',
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
    '@id': 'https://ratereliefca.com/blog/sdge-time-of-use-rates-2026',
  },
};

export default function SDGETimeOfUseRates2026() {
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
                SDG&amp;E Time of Use Rates Explained (2026 Guide)
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
                SDG&amp;E (San Diego Gas &amp; Electric) charges the highest residential electricity rates in the continental United States at 45.7 cents per kilowatt-hour (kWh). For those on time-of-use (TOU) rates, summer peak hours can reach 69.65 cents per kWh — nearly four times the national average. This article breaks down how SDG&amp;E&apos;s complex rate structure works, which plan fits your situation, and what you can do to reduce your bills.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                SDG&amp;E Has the Highest Rates in the Nation
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                At 45.7 cents per kWh on average, SDG&amp;E customers pay roughly 2.5 times the national average of 18 cents. The next-closest major utility (SCE in Southern California) charges 34.5 cents. So if you&apos;re with SDG&amp;E, your bills are substantially higher than almost any other utility territory in America.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This high-rate environment makes SDG&amp;E territory a prime case for solar. A $0-down solar PPA that locks in power at 8-12 cents per kWh provides dramatic relief. Over 25 years, a SDG&amp;E customer using 800 kWh per month could save $80,000-$130,000 by switching to a fixed solar rate compared to paying rising utility rates. That math is stark enough that almost every homeowner should evaluate solar as an option.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                TOU-DR1 Rate Schedule
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>TOU-DR1</strong> is the most common time-of-use plan for SDG&amp;E residential customers. Here&apos;s how rates vary:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Summer (June 1 - September 30):</strong><br />
                — Peak (4-9 PM): 69.65¢/kWh<br />
                — Off-Peak (12 AM - 4 PM, 9 PM - midnight): 47.56¢/kWh<br />
                — Super Off-Peak (12 AM - 6 AM): ~25¢/kWh
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Winter (October 1 - May 31):</strong><br />
                — Peak (5-8 PM): ~48¢/kWh<br />
                — Off-Peak (8 AM - 5 PM, 8 PM - midnight): ~34¢/kWh<br />
                — Super Off-Peak (12 AM - 8 AM): ~28¢/kWh
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The most painful part is summer peak: 69.65 cents per kWh. For a typical 3-bed home with central AC running from 4-9 PM on a hot day, that peak period alone might account for 40-50% of the bill. Shifting that usage away from peak hours is the single biggest lever for saving money on TOU rates.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                TOU-DR2 Comparison
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>TOU-DR2</strong> is an alternative option with slightly different peak windows. Peak hours are 2-8 PM instead of 4-9 PM, with rates around 63-66¢/kWh instead of 69.65¢. It&apos;s a marginal improvement if your usage pattern allows you to shift load earlier in the afternoon.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most households are better off on TOU-DR1 because the DR2 peak starts at 2 PM, earlier in the afternoon when homeowners are less likely to control usage. Use SDG&amp;E&apos;s rate comparison tool to simulate your actual usage on both plans and see which saves you money.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                EV-TOU-5 for Electric Vehicle Owners
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you own an electric vehicle, SDG&amp;E&apos;s <strong>EV-TOU-5</strong> plan can provide substantial savings. This plan offers much lower rates for EV charging during off-peak hours (typically midnight-6 AM) — as low as 18-22¢/kWh. During peak hours, rates are much higher, but that doesn&apos;t matter if you charge at night.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For an EV owner who charges overnight and can shift home electricity use away from peak hours, EV-TOU-5 can reduce total electricity costs by 15-25% compared to the standard TOU plan. You need an electric vehicle to qualify, and you need a dedicated EV charger installation. If you meet these criteria, apply for EV-TOU-5 — it&apos;s not automatic.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Summer vs Winter Rates
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Summer peak rates (69.65¢) are far higher than winter peak rates (~48¢). This is intentional — SDG&amp;E raises summer rates to discourage AC usage during peak demand periods. The problem is that most homeowners can&apos;t substantially reduce AC use on a 95-degree day. You can pre-cool the house before 4 PM, set the thermostat 1-2 degrees higher, or install exterior shading, but you can&apos;t eliminate AC load.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Winter rates are lower across the board because heating load is less common in San Diego, and peak demand is lower overall. This is one reason solar is particularly valuable in SDG&amp;E territory — solar production in summer aligns perfectly with peak demand periods, so you avoid the highest rates during the highest-use season.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The $24 Fixed Charge
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Like most California utilities, SDG&amp;E includes a fixed monthly charge (approximately $24) on all bills. This is charged regardless of usage and represents a growing portion of residential bills. For a customer using only 600 kWh per month, the fixed charge is now roughly 10% of the total bill. Combined with the high per-kWh rates, SDG&amp;E customers face bills that are difficult to escape without major action.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Best Plan for Solar Customers
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you install solar, your strategy changes. Standard TOU-DR1 remains the best choice for most solar customers because solar production peaks during the middle of the day (12 PM - 4 PM), which is off-peak on TOU-DR1. You generate power during the lowest-rate period and avoid peak charges.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The real advantage comes if you also install a battery. With a battery, you can store solar power produced during the day and discharge it during peak hours (4-9 PM), avoiding those 69.65¢ peak rates. A solar + battery system in SDG&amp;E territory can reduce bills by 50-70%. However, battery systems add significant upfront cost (even with $0-down financing), so the math works best for customers with high electricity consumption.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Rate Increase History
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SDG&amp;E rates have climbed dramatically:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2020:</strong> ~32¢/kWh<br />
                <strong>2021:</strong> ~34¢/kWh<br />
                <strong>2022:</strong> ~37¢/kWh<br />
                <strong>2023:</strong> ~40¢/kWh<br />
                <strong>2024:</strong> ~43¢/kWh<br />
                <strong>2025-2026:</strong> ~45.7¢/kWh (+11.4% rate case increase Jan 2026)
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In six years, SDG&amp;E rates have climbed roughly 43%. Further increases are approved through 2028. If this trend continues, SDG&amp;E could exceed 50¢/kWh by 2027-2028.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What You Can Do
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Step 1: Shift usage away from peak hours.</strong> Pre-cool your home before 4 PM, run dishwasher and laundry before peak (or after 9 PM), and ensure AC is set to 78+ degrees during peak. For every 1% of consumption you shift from peak to off-peak, you save 2-3% on your bill. A smart thermostat can automate this.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Step 2: Check your rate plan.</strong> Make sure you&apos;re on the right TOU plan (TOU-DR1 vs. DR2 vs. EV-TOU-5). Use SDG&amp;E&apos;s rate comparison tool with your actual usage history. Switching to a lower-cost plan is free and takes minutes.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Step 3: Explore solar.</strong> In SDG&amp;E territory, solar is nearly always the right long-term move because rates are so high. A system sized to cover 80-90% of usage will pay for itself in 8-12 years (for purchased systems) or provide immediate savings (for PPAs). You can check Google&apos;s Project Sunroof for a free estimate of your home&apos;s solar potential.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Step 4: Consider a battery.</strong> If solar alone doesn&apos;t reduce your bill enough, adding a battery lets you store daytime solar production and discharge it during peak hours, further shrinking peak charges. Battery costs have fallen, and financing options now exist.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SDG&amp;E rates at 45.7¢/kWh with summer peaks reaching 69.65¢ are crushing San Diego-area homeowners. Short-term relief comes from shifting usage away from peak hours and verifying you&apos;re on the right rate plan. Long-term relief almost always involves solar. In this rate environment, locking in 8-12¢/kWh through a solar PPA saves tens of thousands of dollars over 25 years compared to paying rising utility rates. If you own your home and plan to stay 15+ years, solar is worth serious evaluation.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                See What a Fixed Solar Rate Would Look Like
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                At SDG&amp;E rates, solar savings are significant. Check your eligibility in 60 seconds — no cost, no obligation.
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
                href='/blog/solar-ppa-explained-california'
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
