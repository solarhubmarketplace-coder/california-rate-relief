import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Prepaid Solar PPA in California: How It Works, What It Costs, and Who It\'s Best For (2026)',
  description:
    'Prepaid PPAs are surging in California after the residential tax credit expired. Learn exactly how they work, what they cost, how they compare to regular PPAs and loans, and when they make sense.',
  alternates: {
    canonical: '/blog/prepaid-ppa-california-2026',
  },
  openGraph: {
    title:
      'Prepaid Solar PPA in California: How It Works and Who It\'s Best For',
    description:
      'A clear breakdown of the prepaid PPA model that\'s surging in popularity after the residential solar tax credit expired.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Prepaid Solar PPA in California: How It Works, What It Costs, and Who It\'s Best For (2026)',
  description:
    'A clear breakdown of prepaid PPAs — how they work, costs, comparisons to other options, and when they make sense.',
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
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
    '@id': 'https://ratereliefca.com/blog/prepaid-ppa-california-2026',
  },
};

export default function PrepaidPPAGuide() {
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
                Solar Savings
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Prepaid Solar PPA in California: How It Works, What It Costs,
                and Who It&apos;s Best For (2026)
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-14'>April 14, 2026</time>
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
                If you&apos;ve been researching solar in California recently,
                you&apos;ve probably seen the term &quot;prepaid PPA&quot; or
                &quot;prepaid solar lease&quot; popping up more frequently. This
                financing model isn&apos;t new, but it&apos;s having a moment in
                2026 — largely because the residential solar tax credit expired
                and homeowners are looking for the best way to get the economics
                of ownership without paying full price.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s a straightforward breakdown of what a prepaid PPA
                actually is, how the money works, how it compares to every other
                option, and whether it makes sense for your situation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Is a Prepaid PPA?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In a standard PPA (Power Purchase Agreement), a solar company
                installs panels on your roof and you pay a per-kWh rate each
                month for the energy the system produces. You don&apos;t own the
                system. The solar company does.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In a <strong>prepaid PPA</strong>, the structure is similar — the
                solar company still owns the system on your roof — but instead of
                making monthly payments, you pay for 20-25 years of energy
                upfront in a single lump sum. In exchange for paying upfront, you
                get a significant discount compared to what those 20-25 years of
                monthly PPA payments would have cost.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The discount typically works out to about 20-30% off the cost of
                buying an equivalent system outright. So if a comparable purchased
                system costs $30,000, a prepaid PPA for the same system might be
                $21,000-$24,000.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why Is It Cheaper Than Buying?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the key question, and the answer comes down to tax
                credits. When you buy a solar system in 2026, the federal
                residential tax credit (Section 25D) is gone — you pay full
                price. But in a prepaid PPA, the solar company owns the system
                and can claim the commercial Investment Tax Credit (Section 48E)
                at 30%, plus accelerated depreciation (MACRS). Those tax benefits
                can cover 40-60% of the company&apos;s cost for the system.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The company passes a portion of those savings to you in the form
                of a lower prepayment price. You&apos;re essentially getting an
                indirect tax credit benefit that&apos;s no longer available to
                you directly as a homeowner. This is the same mechanism behind
                regular monthly PPAs, but the prepaid version gives you a deeper
                discount because the company gets all the cash upfront (which
                reduces their financing costs).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How the Money Works: A Real Example
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Let&apos;s use a concrete example for a Riverside County
                household with SCE, using 900 kWh/month (~$319/month bill).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Cash purchase:</strong> A 9.4 kW system costs ~$22,500.
                No tax credit. Payback in ~6-7 years. After payback, electricity
                is essentially free (you still pay the $24 utility fixed charge).
                Total 25-year savings: highest of any option.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Prepaid PPA:</strong> The same system through a prepaid
                PPA might cost ~$16,000-$18,000 upfront. You don&apos;t own it,
                but you have no monthly payments for 20-25 years. Many contracts
                include a $0 buyout option after year 6, at which point you can
                take ownership. Effective payback: ~4-5 years. Maintenance and
                monitoring included.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Monthly PPA:</strong> $0 upfront. You pay 18-25 cents per
                kWh monthly for what the system produces. Savings from day one,
                but lower total savings over 25 years than prepaid or cash
                because the PPA company keeps a larger margin.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Solar loan:</strong> $0 upfront. Monthly loan payments of
                $180-$250 (depending on terms and interest rate). You own the
                system but no tax credit to pay down the balance. Watch for
                hidden dealer fees that inflate the loan amount. Total cost over
                the loan term may exceed a cash purchase by 30-50% due to
                interest.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Side-by-Side Comparison
              </h2>

              <div className='overflow-x-auto mb-8'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-3 pr-3 font-bold text-foreground'>
                        &nbsp;
                      </th>
                      <th className='text-center py-3 px-2 font-bold text-foreground'>
                        Cash
                      </th>
                      <th className='text-center py-3 px-2 font-bold text-foreground'>
                        Prepaid PPA
                      </th>
                      <th className='text-center py-3 px-2 font-bold text-foreground'>
                        Monthly PPA
                      </th>
                      <th className='text-center py-3 px-2 font-bold text-foreground'>
                        Loan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-3 font-medium text-foreground/80'>
                        Upfront cost
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        ~$22,500
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        ~$16-18K
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        $0
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-3 font-medium text-foreground/80'>
                        Monthly payment
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        $150-$200
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        $180-$250
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-3 font-medium text-foreground/80'>
                        You own system?
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        Yes
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        After buyout
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        No
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        Yes
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-3 font-medium text-foreground/80'>
                        Tax credit benefit
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        None
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        Indirect (30%)
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        Indirect (30%)
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        None
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-3 font-medium text-foreground/80'>
                        Maintenance
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        You handle
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        Included
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        Included
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        You handle
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-3 font-medium text-foreground/80'>
                        Escalator risk
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        None
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        None
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        Some have 1-3%
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        None
                      </td>
                    </tr>
                    <tr>
                      <td className='py-3 pr-3 font-medium text-foreground/80'>
                        25-year savings
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        Highest
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        High
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        Moderate
                      </td>
                      <td className='text-center py-3 px-2 text-foreground/80'>
                        Moderate-High
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The $0 Buyout Option
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most prepaid PPA contracts (particularly the HDM model that&apos;s
                common in California) include a $0 or nominal-fee buyout option
                after year 6. This means you can take full ownership of the
                system at no additional cost after the provider has recouped
                their tax benefits and depreciation.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is a significant advantage over standard monthly PPAs, where
                a buyout (if offered) typically requires paying fair market value
                for the system. With a prepaid PPA, the path to ownership is
                built into the contract from day one.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Important Deadline: Section 48E Credit
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The commercial tax credit that makes prepaid PPAs financially
                attractive is the Section 48E Investment Tax Credit. Under
                current law, construction must begin by July 4, 2026 for the
                system to qualify for the full 30% credit, with the system
                placed in service by December 31, 2030. If construction
                doesn&apos;t begin by that date, the system must be fully
                installed and operational by December 31, 2027 to qualify.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This deadline matters because if the commercial credit is reduced
                or eliminated, prepaid PPA prices would likely increase
                significantly. The current pricing assumes the provider can claim
                the full 30% credit. If you&apos;re considering a prepaid PPA,
                the first half of 2026 is the window where pricing is most
                favorable.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Can You Finance a Prepaid PPA with a Loan?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Yes. Many homeowners finance the prepaid amount with a standard
                personal loan or HELOC rather than paying cash. The monthly loan
                payment is typically lower than what a standard monthly PPA would
                cost (because the prepaid amount is lower than the total of 20-25
                years of monthly payments), so you can still achieve day-one
                savings while spreading out the cost.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The key difference between financing a prepaid PPA and getting a
                solar loan for a purchased system: the prepaid PPA amount is
                lower (because the provider claimed the tax credit), so your loan
                is smaller, your payments are lower, and your total interest cost
                is less. The trade-off is you don&apos;t own the system
                immediately — but with the $0 buyout after year 6, you eventually
                can.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When a Prepaid PPA Doesn&apos;t Make Sense
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>If you have the cash for a full purchase.</strong> Buying
                outright still produces the highest total savings over 25 years.
                A prepaid PPA costs less upfront but you&apos;re giving up some
                long-term value because the provider keeps their margin. If you
                have $22,000+ available and plan to stay in your home 15+ years,
                a cash purchase is mathematically optimal.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>If your bill is under $150/month.</strong> The savings
                from any solar option are proportional to your current bill. At
                lower bill amounts, the return on a $16,000-$18,000 prepayment
                takes longer to materialize.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>If you&apos;re selling soon.</strong> Prepaid PPAs can
                transfer to the buyer, but it adds a layer of complexity to the
                home sale. Some buyers view it positively (free solar), others
                see it as a complication. If you&apos;re selling within 2-3
                years, a monthly PPA with easy transfer terms may be simpler.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>If you want zero upfront commitment.</strong> If the
                appeal of solar is purely &quot;$0 down, immediate savings,&quot;
                a standard monthly PPA achieves that. The prepaid PPA requires
                cash or a loan upfront, which isn&apos;t the right fit for
                everyone.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What to Look for in a Prepaid PPA Contract
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re evaluating a prepaid PPA, here are the key terms
                to scrutinize. First, the buyout terms: confirm the $0 buyout
                option exists, when it kicks in (year 6 is standard), and
                whether there are any conditions. Second, production guarantees:
                good contracts guarantee a minimum annual production level and
                compensate you if the system underperforms. Third, maintenance
                coverage: everything (panels, inverters, batteries, monitoring)
                should be covered for the full contract term. Fourth, transfer
                terms: understand exactly how the contract transfers if you sell
                your home, and whether the buyer needs to qualify. Finally,
                compare the prepayment amount to cash purchase quotes from{' '}
                <a
                  href='https://www.energysage.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage
                </a>{' '}
                — the prepaid PPA should be meaningfully cheaper than buying
                outright.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The prepaid PPA sits in a sweet spot between buying and leasing.
                You get a lower price than a cash purchase (because the provider
                passes through the commercial tax credit savings), no monthly
                payments, included maintenance, and a path to ownership after
                year 6. The model works best for homeowners who want near-ownership
                economics without paying full price, and who plan to stay in their
                home for 6+ years. With the Section 48E credit deadline approaching
                in July 2026, the first half of this year is the best window for
                favorable pricing. As always, compare at least 3 options (cash,
                prepaid PPA, monthly PPA, loan) before deciding — the right choice
                depends on your cash position, risk tolerance, and how long
                you&apos;ll stay in your home.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Exploring Your Solar Options?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                The California Rate Relief Program offers $0-down monthly PPAs
                for qualifying homeowners. See if it fits your situation.
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
                href='/blog/pge-vs-sce-vs-sdge-rates-compared'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                Previous Article
              </Link>
              <Link
                href='/blog'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                All Articles
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
