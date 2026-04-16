import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'California Solar Tax Credit 2026: What\u2019s Still Available After the ITC Expired?',
  description:
    'The federal residential solar tax credit (ITC) expired December 31, 2025. Here\'s what\'s still available in 2026 and why PPAs are now the smartest path to solar.',
  alternates: {
    canonical: '/blog/california-solar-tax-credit-2026',
  },
  openGraph: {
    title:
      'California Solar Tax Credit 2026: What\u2019s Still Available?',
    description:
      'The residential ITC expired in 2025. Here\'s what changed, what\'s left, and why PPAs are now the best option for California homeowners.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'California Solar Tax Credit 2026: What\u2019s Still Available After the ITC Expired?',
  description:
    'The federal residential solar tax credit (ITC) expired December 31, 2025. Here\'s what\'s still available in 2026 and why PPAs are now the smartest path to solar.',
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
    '@id': 'https://ratereliefca.com/blog/california-solar-tax-credit-2026',
  },
};

export default function CaliforniaSolarTaxCredit2026() {
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
                Solar Incentives
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                California Solar Tax Credit 2026: What&apos;s Still Available After the ITC Expired?
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
                For over a decade, the federal Investment Tax Credit (ITC) was the single biggest financial incentive for homeowners to go solar. It let you deduct 30% of your solar system cost from your federal taxes. That&apos;s gone now. The residential ITC (Section 25D) expired on December 31, 2025, eliminated by the One Big Beautiful Bill Act. If you&apos;re a California homeowner researching solar in 2026, here&apos;s exactly what changed, what&apos;s still available, and what your best options are.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Big Change: The Residential ITC Is Gone
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The federal residential solar tax credit under Section 25D allowed homeowners who purchased a solar system to claim 30% of the total cost as a dollar-for-dollar credit on their federal income taxes. On a $30,000 system, that was a $9,000 credit. It was the cornerstone incentive that made purchased solar systems affordable for middle-class homeowners.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                As of January 1, 2026, that credit no longer exists for residential homeowners. If you buy a solar system for your home in 2026, you get zero federal tax credit. There is no phase-down, no reduced percentage — it&apos;s simply gone. This is the single biggest change to solar economics in a decade.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For homeowners who were planning to buy a system outright, this changes the math significantly. A $30,000 system now costs $30,000 — not $21,000 after the credit. Payback periods for purchased systems have extended by 3-5 years depending on your utility rate and system size.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Commercial ITC Still Exists — And That Matters
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s the critical detail most people miss: while the residential ITC is gone, the commercial Investment Tax Credit (Section 48E) is still available. Commercial and third-party-owned solar projects can claim a 30% base credit for systems that begin construction by July 4, 2026, or are placed in service by December 31, 2027.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Why does this matter to you as a homeowner? Because of Power Purchase Agreements (PPAs). In a PPA, a third-party company owns the solar system on your roof. Since the company owns it — not you — it qualifies as a commercial project. The company claims the 30% commercial ITC, which reduces their cost. They pass those savings to you in the form of a lower per-kWh rate.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the key insight: homeowners can no longer claim the tax credit directly, but they can still benefit from it indirectly through a PPA. The credit hasn&apos;t disappeared from the solar ecosystem — it&apos;s just moved from the homeowner&apos;s tax return to the PPA provider&apos;s balance sheet. And the homeowner still gets cheaper electricity.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why PPAs Are Now the Smartest Option
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before the residential ITC expired, homeowners had a real choice: buy a system and claim the 30% credit yourself, or sign a PPA and let someone else claim it. Both paths had their advantages. Buying gave you ownership and the full credit. PPAs gave you zero upfront cost and a fixed rate.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Now the math has tilted decisively toward PPAs. If you buy a system in 2026, you pay full price with no federal credit. If you sign a PPA, the provider claims the commercial ITC and offers you a rate that&apos;s typically 30-50% below your current utility rate — with $0 down, no maintenance costs, and no system ownership headaches.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Consider the comparison for a typical California homeowner paying $250/month to PG&amp;E at 35 cents per kWh:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Option A — Buy a system ($30,000):</strong> No tax credit. Out-of-pocket cost: $30,000. Payback period: 10-14 years. You own the system and handle maintenance, inverter replacements, and monitoring. If something breaks after the warranty expires, you pay for it.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Option B — Sign a PPA ($0 down):</strong> The provider claims the commercial ITC. Your rate: ~$0.10-0.14/kWh (locked in). Monthly payment: ~$75-105. Savings vs. utility: ~$145-175/month from day one. No maintenance costs, no ownership risk. The provider handles everything.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The PPA delivers immediate savings with zero upfront cost. The purchased system requires $30,000 upfront and takes over a decade to break even. For most homeowners, the PPA is now the clear winner.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                SGIP: What&apos;s Still Available for Batteries
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Self-Generation Incentive Program (SGIP) is a California state program (administered by the CPUC) that provides rebates for battery storage systems. Unlike the federal ITC, SGIP is still active in 2026, though funding levels vary by utility territory and customer category.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Equity and Resiliency budgets:</strong> Qualifying customers in disadvantaged communities or high fire-threat areas can receive $850 to $1,100 per kWh of battery storage capacity. For a typical 13.5 kWh home battery, that&apos;s $11,475 to $14,850 in rebates — often covering the entire cost.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Residential Solar &amp; Storage Equity:</strong> For qualifying low-income households pairing solar with battery storage, SGIP offers up to $1,100/kWh plus $3,100/kW — the most generous tier. This can fully cover a battery system and significantly offset solar costs.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Important: standalone residential batteries no longer qualify for the federal ITC (since the residential credit expired). SGIP is now the primary financial incentive for home battery storage in California. If you live in a high fire-risk area or qualify as a low-income household, SGIP is worth investigating.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                DAC-SASH: Free Solar for Low-Income Homeowners
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Disadvantaged Communities — Single-family Affordable Solar Homes (DAC-SASH) program continues in limited form in 2026. It provides fully subsidized solar installations to income-qualifying homeowners in disadvantaged communities. The program is administered by GRID Alternatives and covers the full cost of the solar system.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                DAC-SASH has limited funding and a waitlist, so not every qualifying homeowner will receive a system immediately. But if your household income is at or below 80% of area median income and you live in a designated disadvantaged community, it&apos;s worth applying. You can check eligibility through GRID Alternatives or your utility&apos;s website.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What You Should Do Now
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>If you were waiting for the &quot;right time&quot; to go solar:</strong> The residential tax credit is not coming back. Waiting for a future credit means paying full utility rates in the meantime — rates that have increased 25-76% across California&apos;s major utilities in the past five years. Every month you wait is a month of paying rising rates you could have avoided.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>If you have the cash to buy a system outright:</strong> Run the numbers carefully. Without the 30% credit, your payback period is significantly longer. Compare the cost of buying against the savings from a PPA. For many homeowners, the PPA now makes more financial sense even if you have the cash.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>If you want solar with $0 upfront cost:</strong> A PPA is designed exactly for this. The provider owns the system, claims the commercial tax credit, and sells you the power at a fixed rate below your utility rate. You save money from month one with no investment and no risk.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>If you qualify for SGIP or DAC-SASH:</strong> Apply now. These programs have limited funding and may not be available indefinitely. A battery paired with solar (through SGIP) or a fully subsidized system (through DAC-SASH) can dramatically reduce or eliminate your electricity costs.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The bottom line: the expiration of the residential ITC didn&apos;t make solar a bad investment. It made PPAs the obvious choice for most California homeowners. The tax credit still exists in the system — it&apos;s just claimed by the PPA provider instead of the homeowner. And the result for you is the same: cheaper electricity, locked-in rates, and protection from the utility rate increases that show no sign of slowing down.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                The Tax Credit Expired. Your Savings Don&apos;t Have To.
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                See if you qualify for a $0-down solar program that locks in a rate 30-50% below what you&apos;re paying your utility — no tax credit needed.
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
                href='/blog/solar-tax-credit-expired-2026-options'
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
