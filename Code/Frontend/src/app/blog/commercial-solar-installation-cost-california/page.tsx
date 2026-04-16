import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Commercial Solar Installation Cost in California 2026: What to Expect',
  description:
    'Commercial solar costs $1.10-$2.55/W in California. Full breakdown of system sizes, ITC + MACRS incentives, ROI timelines, and utility rate savings for businesses.',
  alternates: {
    canonical: '/blog/commercial-solar-installation-cost-california',
  },
  openGraph: {
    title:
      'Commercial Solar Installation Cost in California 2026: What to Expect',
    description:
      'What commercial solar actually costs in California in 2026 — system sizes, incentive stacking, and ROI by utility territory.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Commercial Solar Installation Cost in California 2026: What to Expect',
  description:
    'Commercial solar costs $1.10-$2.55/W installed in California. Full breakdown of system sizes, incentives, and ROI by utility territory.',
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
    '@id': 'https://ratereliefca.com/blog/commercial-solar-installation-cost-california',
  },
};

export default function CommercialSolarInstallationCostCalifornia() {
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
                Commercial Solar
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Commercial Solar Installation Cost in California 2026: What to Expect
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
                If you own a commercial property in California and you&apos;re evaluating solar, the first question is always cost. The answer depends on system size, roof complexity, utility territory, and which incentives you can stack. In 2026, commercial solar in California runs $1.10 to $2.55 per watt installed — with smaller systems at the higher end and large-scale installations at the lower end. But the installed cost is only half the equation. Between the federal ITC, MACRS depreciation, SGIP for storage, and California&apos;s commercial electricity rates, the effective cost after incentives is dramatically lower. This guide covers all of it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Commercial Solar Costs Right Now
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Commercial solar pricing in California follows a clear pattern: the larger the system, the lower the per-watt cost. Here&apos;s what to expect in 2026:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Small systems (50-100 kW):</strong> $2.00-$2.55 per watt installed. A 75 kW system — typical for a small warehouse, retail space, or office building — would run $150,000-$191,250 before incentives. These systems serve businesses with monthly electricity bills of $1,500-$4,000.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Medium systems (100-500 kW):</strong> $1.50-$2.00 per watt installed. A 250 kW system — suitable for a mid-size manufacturing facility, distribution center, or multi-tenant office — would cost $375,000-$500,000 before incentives. These businesses typically pay $4,000-$15,000 per month in electricity.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Large systems (500 kW+):</strong> $1.10-$1.50 per watt installed. A 1 MW ground-mount or rooftop system for a large industrial operation, agricultural processor, or campus would run $1.1M-$1.5M before incentives. At this scale, economies of scale significantly reduce the per-watt cost, and the project often justifies dedicated engineering and project management.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                These prices include panels, inverters, racking, electrical work, permitting, and installation labor. They do not include battery storage, structural roof upgrades (if needed), or utility interconnection fees — each of which can add 10-25% to the total project cost depending on the site.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                System Size Guide: How Much Do You Need?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The right system size depends on your electricity consumption, available roof or ground space, and how much of your load you want to offset. A general rule: every 1 kW of solar produces roughly 1,500-1,800 kWh per year in California (depending on location and orientation). If your business uses 500,000 kWh annually, a 300-350 kW system would offset the majority of your consumption.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sizing matters because commercial net metering credits in California are lower than retail rates — typically 5-8 cents per kWh for exported energy. Oversizing your system means you&apos;re producing electricity at full cost and selling it back at a fraction of that value. The sweet spot is designing a system that covers 80-100% of your daytime load while minimizing excess export.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Incentive Stack: ITC + MACRS + SGIP
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is where commercial solar economics get interesting. Unlike the residential ITC, which expired at the end of 2025, the commercial ITC under Section 48E is still available for projects that begin construction by July 4, 2026 or are placed in service by December 31, 2027.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Federal ITC (30% base):</strong> A $500,000 system generates a $150,000 tax credit. If your project is in an energy community, add another 10% ($50,000). If the system meets domestic content requirements, add another 10%. The effective credit can reach 40-50% of total installed cost.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>MACRS depreciation (5-year accelerated):</strong> After claiming the ITC, you reduce the depreciable basis by half the ITC amount (so 85% of the original cost is depreciable). Using the 5-year MACRS schedule, you can deduct the bulk of this in years 1-3. On a $500,000 system with a 30% ITC, the depreciable basis is approximately $425,000. Combined with the ITC, you recover roughly 55-65% of the system cost through tax benefits alone within the first five years.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>SGIP (battery storage):</strong> If you add battery storage to your commercial system, the Self-Generation Incentive Program provides rebates that can offset a significant portion of the storage cost. SGIP is particularly valuable for businesses in high-fire-risk areas or those looking to reduce demand charges through peak shaving.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                There are no major new California state rebates for commercial solar beyond ITC, MACRS, and SGIP. However, some municipal utilities offer additional incentives — check with your local provider.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                ROI by Utility Territory
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Your return on investment depends heavily on what you&apos;re currently paying for electricity. California&apos;s three major investor-owned utilities charge very different commercial rates:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>PG&E:</strong> Commercial rates range from approximately $0.25 to $0.40+ per kWh, plus demand charges. Businesses in PG&E territory typically see the strongest ROI due to high baseline rates. Expected payback with full incentive stack: 3-5 years.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>SCE (Southern California Edison):</strong> Commercial rates run approximately $0.20 to $0.35 per kWh, plus demand charges. ROI is solid but slightly longer than PG&E territory due to lower baseline rates. Expected payback: 4-6 years.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>SDG&E (San Diego Gas &amp; Electric):</strong> The highest commercial rates in the state at approximately $0.30 to $0.45+ per kWh, plus aggressive demand charges. SDG&E territory offers the fastest payback for commercial solar: 3-5 years, sometimes less for high-consumption businesses.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Across all territories, demand charges are an important factor. Solar alone reduces energy charges but doesn&apos;t always reduce demand charges (which are based on your peak 15-minute draw). Adding battery storage for peak demand shaving can accelerate ROI by an additional 1-2 years.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Commercial Rates Look Like in 2026
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Commercial electricity rates in California have increased consistently over the past decade, and 2026 is no exception. All three major IOUs have implemented rate increases, and the CPUC has approved additional adjustments through 2027. For businesses consuming 50,000+ kWh per month, even a $0.05/kWh reduction translates to $2,500+ per month in savings — $30,000+ annually.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The rate trajectory matters as much as the current rate. If your utility rate increases 5-7% annually (the recent historical average for California IOUs), a solar system that barely breaks even at today&apos;s rates becomes deeply profitable within 3-4 years as the cost you&apos;re avoiding keeps climbing while your solar cost stays fixed.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Commercial Solar Makes Sense (and When It Doesn&apos;t)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Strong candidates:</strong> Businesses paying $0.20+/kWh with large, unshaded flat roofs or available ground space. Warehouses, manufacturing facilities, agricultural operations, office parks, and retail centers with high daytime consumption. Businesses with sufficient federal tax liability to absorb the ITC and MACRS benefits (or willing to use a PPA if not).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Weak candidates:</strong> Businesses on short-term leases (less than 7 years remaining) without landlord cooperation. Properties with heavily shaded roofs, structural limitations, or historic preservation restrictions. Businesses with minimal tax liability and no interest in third-party ownership. Operations that run primarily at night (though battery storage can change this calculus).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The general rule: if your annual electricity spend exceeds $20,000 and you have adequate roof or ground space, commercial solar is almost certainly worth evaluating. The combination of 2026 incentives and California&apos;s rate trajectory creates a window that&apos;s difficult to match once the commercial ITC begins stepping down.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Considering Solar for Your Business?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                The California Rate Relief Program helps commercial property owners evaluate solar options and incentive eligibility. Free assessment, no obligation.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check My Eligibility
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
                href='/blog/solar-powered-ev-charger'
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
