import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Is Solar Worth It in California in 2026? (Honest Analysis)',
  description:
    'Is solar worth it in 2026 after the ITC expired? Payback analysis, home value impact, risks, and 25-year projections for California homeowners.',
  alternates: {
    canonical: '/blog/is-solar-worth-it-california-2026',
  },
  openGraph: {
    title:
      'Is Solar Worth It in California in 2026? (Honest Analysis)',
    description:
      'Honest breakdown of solar economics in California 2026: payback, home value, risks, and whether it makes financial sense for your situation.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Is Solar Worth It in California in 2026? (Honest Analysis)',
  description:
    'Complete analysis of solar economics in California 2026: payback periods, home value impact, financing options, and long-term projections.',
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
    '@id': 'https://ratereliefca.com/blog/is-solar-worth-it-california-2026',
  },
};

export default function IsSolarWorthItCalifornia2026() {
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
                Is Solar Worth It in California in 2026? (Honest Analysis)
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
                The most common question we hear is: "Is solar worth it in 2026?" The answer is complicated by one huge fact: the federal residential Investment Tax Credit (ITC) expired on December 31, 2025. For years, the 30% credit made solar a no-brainer for most homeowners. Now, without it, the math has shifted. A purchased system goes from 6-7 year payback to 9-14 years. But power purchase agreements (PPAs) and other options remain compelling. This article breaks down the honest numbers: payback periods, home value impact, risks, and 25-year projections to help you decide.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Short Answer
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Yes, solar is still worth it for most California homeowners — but the path depends on your financing choice.</strong>
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you finance with a PPA (power purchase agreement): payback is 4-8 years, with 30-50% bill reduction locked in for 20-25 years. This is the strongest financial case and requires no upfront capital.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you purchase outright or with a loan: payback is now 9-14 years without the federal tax credit. This is longer but still solid, especially if you plan to stay 15+ years. You own the system and benefit from all future electricity rate increases.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you have very low usage or plan to move in the next 3 years: solar is harder to justify unless you transfer the system to the buyer (PPA can do this, owned systems are more complex).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Math: PPA vs. Cash/Loan vs. Grid (No Solar)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Let&apos;s model three scenarios for a typical Southern California household using 8,000 kWh per year (average SCE customer), with a $200 starting monthly bill:
              </p>

              <div className='overflow-x-auto my-6'>
                <table className='w-full text-sm border border-border'>
                  <thead className='bg-primary/10'>
                    <tr>
                      <th className='border border-border px-4 py-2 text-left font-semibold'>Scenario</th>
                      <th className='border border-border px-4 py-2 text-left font-semibold'>Year 1</th>
                      <th className='border border-border px-4 py-2 text-left font-semibold'>Year 5</th>
                      <th className='border border-border px-4 py-2 text-left font-semibold'>Year 10</th>
                      <th className='border border-border px-4 py-2 text-left font-semibold'>Year 25</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-border px-4 py-2'><strong>Stay on Grid</strong></td>
                      <td className='border border-border px-4 py-2'>$2,400</td>
                      <td className='border border-border px-4 py-2'>$3,400</td>
                      <td className='border border-border px-4 py-2'>$4,900</td>
                      <td className='border border-border px-4 py-2'>$10,800</td>
                    </tr>
                    <tr className='bg-primary/5'>
                      <td className='border border-border px-4 py-2'><strong>PPA</strong></td>
                      <td className='border border-border px-4 py-2'>$1,100</td>
                      <td className='border border-border px-4 py-2'>$1,400</td>
                      <td className='border border-border px-4 py-2'>$1,800</td>
                      <td className='border border-border px-4 py-2'>$3,500</td>
                    </tr>
                    <tr>
                      <td className='border border-border px-4 py-2'><strong>Solar Loan (10 yr)</strong></td>
                      <td className='border border-border px-4 py-2'>$2,000</td>
                      <td className='border border-border px-4 py-2'>$2,000</td>
                      <td className='border border-border px-4 py-2'>$1,500</td>
                      <td className='border border-border px-4 py-2'>$2,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <em>Annual electricity costs. Assumes 2.5% annual rate increases on grid, PPA with 2% escalator, loan payment years 1-10, zero cost years 11-25.</em>
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                After 25 years, a PPA household saves roughly $90,000-$130,000 vs. staying on the grid. A household that purchases with a 10-year loan saves $60,000-$85,000. The difference is the upfront capital investment and the faster payback of the PPA.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why the Tax Credit Expired (And What It Means)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 30% federal residential ITC was extended multiple times and was originally scheduled to phase out years ago. Congress let it expire at the end of 2025. This was a big deal: it reduced the effective cost of a $20,000 system to $14,000. Without it, a purchased system now requires $5,000+ more out of pocket or a higher monthly loan payment.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The exception: if you use a PPA, the third-party owner of the system (the PPA provider) is a business and still qualifies for a commercial ITC (30%, or up to 40% if located in an energy community). Providers pass some of these savings to you through lower per-kWh rates. This is why PPAs are now the strongest financing option for residential — you get the tax credit benefit without owning the system.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Home Value Impact
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California homes with solar sell for approximately 3-5% more than comparable homes without solar — typically a $20,000-$40,000 premium depending on home price and location. This is measured by comparing sales of solar homes vs. non-solar homes in the same area, controlling for other factors.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The premium holds up whether the system is owned or financed with a PPA (PPA contracts can transfer to the buyer). So if you buy a $400,000 home and add a $25,000 solar system via PPA, you might increase the resale value by $15,000-$20,000. That doesn&apos;t fully offset the system cost, but it cushions the return. This premium exists because buyers understand that solar = lower electricity bills.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Risks (When Solar Doesn&apos;t Make Sense)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Very low usage (&lt; $100/month bills):</strong> The savings are too small to justify the complexity. Every system has a minimum fixed cost (permitting, installation overhead, monitoring), so systems serving very low usage homes struggle to pencil out.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Selling within 2-3 years:</strong> Even with the home value premium, a short holding period doesn&apos;t allow sufficient bill savings to offset the system cost. PPAs are better for this (they transfer) but still work best with longer holding periods.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Heavy roof shading:</strong> If your roof is shaded by large trees or buildings for significant portions of the day, solar production is severely curtailed. Some shade is OK — most roofs have partial shade — but if you&apos;ve got consistent shadow from a tall building or dense trees and can&apos;t remove them, solar is not the right fit.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Roof age or structural issues:</strong> If your roof is 15+ years old and wasn&apos;t recently re-roofed, you should replace it before solar. Removing and reinstalling panels after reroofing is expensive. Similarly, if structural issues (rot, sagging) make your roof unsuitable, address those first.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Plan to move very far away or change usage dramatically:</strong> If you&apos;re downsizing or relocating outside California, the assumptions change. A PPA transfers to the buyer in California but won&apos;t follow you out of state.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Who Should NOT Go Solar
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Don&apos;t buy or PPA solar if: (1) your monthly bill is under $100, (2) you&apos;re renting (renters can&apos;t install), (3) your roof has heavy shade, (4) your roof needs replacement soon, (5) you&apos;re selling in the next 1-2 years. There are alternatives for most of these: renters might consider community solar, renters in condos might talk to HOA about a shared system, and if your roof is the blocker, wait — it&apos;s the right move.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Utility Projection: What Your Bill Will Be Without Solar
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                One of the strongest arguments for solar is protection against future rate increases. California utilities have multi-year rate increases already approved through 2028 and beyond. If you stay on the grid with no solar, your bill is likely to increase 3-5% per year (sometimes faster). Over 25 years at 3-4% annual increases, a $200/month bill becomes $450-$530.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar (whether owned or PPA) doesn&apos;t eliminate your bill, but it locks in your electricity rate. A PPA at 12 cents per kWh with a 2% annual escalator will be roughly 20 cents in year 10 and 31 cents in year 25. Your utility rate? Likely 60-80+ cents by then. The longer you stay on the grid, the more you lose to rate escalation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar is still worth it for most California homeowners in 2026 — even without the 30% federal tax credit. A PPA offering 4-8 year payback and 25-year rate lock is compelling for most. A purchased system with 9-14 year payback and full ownership is solid if you&apos;re staying long-term and have the capital or can secure favorable loan terms. The decision isn&apos;t about the technology (which hasn&apos;t changed) — it&apos;s about your financial situation, roof condition, usage level, and how long you plan to stay. If you have $100+ monthly bills, can stay 7+ years, have a decent roof with some sun exposure, and your home equity supports a loan if needed, solar almost certainly makes sense. If you&apos;re renting, selling soon, or have a shaded or aging roof, look at alternatives like community solar or efficiency upgrades first.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Want a Personalized Analysis for Your Home?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                The California Rate Relief Program can model your specific situation — PPA, loan, or purchase — and show you 25-year projections for your home. No obligation.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                See Your Projections
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
                href='/blog/solar-ppa-vs-lease-california'
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
