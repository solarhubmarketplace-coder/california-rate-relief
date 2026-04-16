import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Commercial Solar Financing Options in California (2026 Guide)',
  description:
    'Explore commercial solar financing options in California: ITC, MACRS, commercial PPAs, C-PACE, and SBA loans. Full breakdown for business owners.',
  alternates: {
    canonical: '/blog/commercial-solar-financing-california',
  },
  openGraph: {
    title:
      'Commercial Solar Financing Options in California (2026 Guide)',
    description:
      'Complete guide to commercial solar financing in California — ITC, MACRS, PPAs, C-PACE, and SBA loans explained.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Commercial Solar Financing Options in California (2026 Guide)',
  description:
    'Complete guide to commercial solar financing options in California, including ITC, MACRS, PPAs, C-PACE, and SBA loans.',
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
    '@id': 'https://ratereliefca.com/blog/commercial-solar-financing-california',
  },
};

export default function CommercialSolarFinancingCalifornia() {
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
                Solar Financing
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Commercial Solar Financing Options in California (2026 Guide)
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
                For California business owners, 2026 presents a unique window for solar investment. Unlike residential solar — where the federal Investment Tax Credit (ITC) expired at the end of 2025 — commercial solar still qualifies for meaningful federal incentives. Combined with California&apos;s net metering rules and accelerated depreciation benefits, the financing options available to commercial operators are substantial. This guide breaks down every financing path: the ITC and MACRS depreciation, commercial power purchase agreements (PPAs), C-PACE property-assessed clean energy financing, SBA loans, and hybrid approaches. Whether you&apos;re a manufacturer, office building owner, agricultural operation, or retail chain, this is the roadmap to understanding your options.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why 2026 Is Different for Commercial
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The federal ITC (Investment Tax Credit) for commercial solar is scheduled to step down from 30% to 26% in 2026 and to 22% in 2027, then disappear after 2027. However, if your project qualifies as an &quot;energy community&quot; project under Section 48E, you can claim a 40% credit instead of 30%. Energy communities include areas with significant coal mining history, coal-fired power plants, or high unemployment zones. California has dozens of qualifying zones, especially in the Central Valley and rural regions. This means time is critical — locking in a 30-40% credit in 2026 before the step-downs accelerates payback dramatically.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Additionally, California&apos;s net metering rules for commercial systems are more favorable than the residential NEM 3.0. Commercial export credits remain higher (typically 5-8 cents per kWh depending on utility territory), and commercial accounts often have multiple meters on the same property, allowing for more sophisticated system design and optimization.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Option 1: The Investment Tax Credit (ITC) — How It Works
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you purchase a solar system outright or finance it with a loan, your business can claim a federal ITC equal to a percentage of the total installed cost. Here&apos;s the breakdown:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Base ITC (2026):</strong> 30% of total installed cost. If your system costs $250,000, you get a $75,000 credit against your federal income taxes in the year the system is placed in service.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Energy Community Bonus:</strong> Add an additional 10% (up to 40% total) if the system is located in a federally designated energy community. To verify if your property qualifies, use the Department of Energy&apos;s{' '}
                <a
                  href='https://www.energy.gov/justice/energy-justice-community-benefits'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  Energy Community mapping tool
                </a>
                .
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Important limitation:</strong> The ITC can only offset your federal income tax liability in the year of installation (and carried back one year or forward 20 years if your liability is lower than the credit). If your business doesn&apos;t have enough taxable income to use the full credit, the benefit is lost for that year (though carry-forward rules apply). This is why working with a tax advisor or accountant is essential before signing a contract.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Option 2: MACRS Depreciation — The Hidden Tax Leverage
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                MACRS (Modified Accelerated Cost Recovery System) is a federal tax depreciation schedule that lets you recover the cost of your solar system over its useful life. For solar, the recovery period is 5 years using the 200% declining balance method. Here&apos;s what that means in dollars:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you purchase a $250,000 system, you can deduct approximately $50,000-$75,000 per year for the first five years, reducing your taxable income significantly. Combined with the 30% ITC, you receive $75,000 in immediate tax credits PLUS accelerated depreciation deductions that compound over time. For many commercial businesses, this combination cuts the effective net cost of the system in half.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The downside: MACRS requires you to own the system and have sufficient taxable income to benefit from the deductions. If your business has minimal profit or operates at a loss, these depreciation benefits are worth very little until you return to profitability.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Option 3: Commercial Solar PPA (Power Purchase Agreement)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A commercial PPA is a long-term contract (typically 20-25 years) in which a third party owns and operates the solar system on your property. You pay only for the electricity the panels produce, not for the system itself. Commercial PPAs are typically priced at $0.08 to $0.15 per kilowatt-hour (kWh) at signing, with an annual escalator of 1-3%.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Key advantages:</strong> Zero upfront capital, predictable energy costs, the PPA provider handles all maintenance and repairs, and you still benefit from California net metering credits on excess generation. The provider claims the ITC and MACRS benefits, passing some of the savings to you through lower rates.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Trade-offs:</strong> You don&apos;t own the system, so you can&apos;t claim tax credits. The contract ties you to that location for 20-25 years (though it can transfer to a new owner if you sell the property). You have less control over system design decisions. However, if you lack capital or want to minimize risk, PPAs are often the fastest path to savings.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Option 4: C-PACE (Commercial Property Assessed Clean Energy)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                C-PACE is a California-wide financing program that lets you fund solar (and energy efficiency, battery storage, or EV infrastructure) through a special assessment on your property tax bill. It&apos;s fully available to commercial properties throughout California and offers some unique advantages:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>100% financing:</strong> C-PACE covers the entire system cost with no out-of-pocket down payment. The assessments are paid through your property tax bill.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Long repayment terms:</strong> You can structure the assessment to run 10-25 years, allowing you to align the payment term with the useful life of the system and keep annual payments manageable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Property transfer:</strong> If you sell the property, the C-PACE assessment transfers to the new owner. This means you can deploy capital elsewhere while your system continues to benefit the property.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>The catch:</strong> C-PACE has higher interest rates (typically 5-7%) compared to traditional loans, and the lien on your property is senior to most other liens (including some mortgages). You must have excellent credit and clear title to qualify.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Option 5: SBA Loans (7(a) and 504 Programs)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Small Business Administration (SBA) offers two loan programs that can finance solar:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>7(a) Loans:</strong> General-purpose SBA loans up to $5 million, commonly used for solar. Interest rates are typically 1-2% above prime, and terms run up to 10 years for equipment (including solar systems). The SBA guarantees 75-90% of the loan, reducing lender risk and making qualification easier than conventional loans.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>504 Loans:</strong> Structured specifically for real estate and long-term equipment. You can finance up to 90% of the cost with a 10-20 year term, typically resulting in lower monthly payments. Interest rates are fixed and competitive (often 2-3% above prime).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SBA loans require a personal guarantee and a business plan showing how the solar investment will improve cash flow. The advantage is you own the system and capture all tax benefits (ITC and MACRS). The disadvantage is longer application timelines (typically 4-6 weeks) and more documentation requirements.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                System Costs in California (2026)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average installed cost for commercial solar in California is $2.50 to $3.00 per watt (pre-incentives). For a 25 kW system (typical for a small warehouse or office building), you&apos;re looking at $62,500 to $75,000. A 100 kW system (large office or manufacturing) would run $250,000 to $300,000. These costs have been stable through 2026 but can vary based on roof type, structural upgrades needed, and local permitting complexity.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Net Metering Credits for Commercial
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Commercial systems under California&apos;s NEM 3.0 rules still receive net metering credits for excess generation — roughly 5-8 cents per kWh depending on your utility (PG&E, SCE, or SDG&E). This is significantly higher than residential rates and makes commercial solar more favorable. However, if your system is larger than your typical daytime usage, you&apos;ll need to design it carefully to avoid overproduction and inefficient export at low credit rates. Many commercial operators pair solar with battery storage or operational changes (like shifting heavy machinery loads to daylight hours) to maximize self-consumption.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Comparing the Options: A Quick Reference
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Own (Purchase + ITC + MACRS):</strong> Best if you have the capital, strong tax position, and plan to own the property long-term. Upfront cost high, but tax benefits and long-term savings are maximized. Payback: 5-8 years.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Own (SBA Loan):</strong> Best if you want ownership without large upfront capital. Moderate monthly payments, capture all tax benefits. Payback: 6-10 years after loan payoff.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Own (C-PACE):</strong> Best for property owners who want 100% financing and don&apos;t want to qualify for a traditional loan. Payment grows with property tax bill. Works long-term if you own the property or expect buyer assumption.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>PPA:</strong> Best if you lack capital, want zero operational risk, or plan to move within 10 years. Lowest upfront burden, but you don&apos;t own the system. Savings still material (25-35% vs. utility baseline).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Commercial solar financing in California is richer than residential, but the right option depends on your capital availability, tax position, property tenure, and risk tolerance. If you can own the system and have sufficient tax liability, the ITC and MACRS combination accelerates payback significantly — take advantage before the ITC steps down in 2027. If you prefer zero capital and predictable costs, a PPA locks in energy rates for decades. If you want middle-ground financing, C-PACE or SBA loans offer structured paths to ownership.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before deciding, work with a commercial solar installer, a tax advisor, and your lender to model the net present value of each option. The difference between choosing the right financing path and the wrong one can easily be tens of thousands of dollars over the life of the system.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Ready to Explore Commercial Solar for Your Business?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                The California Rate Relief Program can help you evaluate your financing options and connect you with qualified specialists. No cost, no obligation.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Get Started
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
                href='/blog/what-size-solar-system-do-i-need'
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
