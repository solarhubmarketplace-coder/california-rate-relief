import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'What the California Energy Commission Means for Your Home Energy Costs',
  description:
    'The CEC sets building energy standards, mandates solar on new homes, and shapes battery storage requirements. Here\'s how it affects existing homeowners in 2026.',
  alternates: {
    canonical: '/blog/california-energy-commission',
  },
  openGraph: {
    title:
      'What the California Energy Commission Means for Your Home Energy Costs',
    description:
      'The CEC mandates solar on new homes and sets Title 24 efficiency standards. Here\'s what it means for existing homeowners.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'What the California Energy Commission Means for Your Home Energy Costs',
  description:
    'The CEC sets building energy standards, mandates solar on new homes, and shapes battery storage requirements. Here\'s how it affects existing homeowners in 2026.',
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
    '@id': 'https://ratereliefca.com/blog/california-energy-commission',
  },
};

export default function CaliforniaEnergyCommission() {
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
                California Energy Policy
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                What the California Energy Commission Means for Your Home Energy Costs
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
                Most California homeowners have heard of the CPUC — the agency that sets electricity rates. But there&apos;s another state agency that shapes your energy costs in less obvious ways: the California Energy Commission (CEC). The CEC doesn&apos;t set your utility rate, but it decides what goes into new buildings, which appliances can be sold, and how the state&apos;s energy future is planned. If you own a home or plan to buy one, the CEC&apos;s decisions affect you.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Is the California Energy Commission?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The CEC is California&apos;s primary energy policy and planning agency. It was created in 1974 during the energy crisis and is responsible for setting building energy efficiency standards (Title 24), forecasting energy demand, administering renewable energy and efficiency programs, licensing large power plants, and developing policies to advance clean energy technology.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Think of the CEC as the forward-looking, standards-setting agency. It decides what buildings must include and how efficient they need to be. The CPUC, by contrast, is the rate-setting and regulatory agency that governs how much utilities charge you. They&apos;re separate agencies with different roles, and understanding the distinction helps you navigate California&apos;s energy landscape.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                CEC vs. CPUC: The Key Difference
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>CEC:</strong> Sets building energy codes (Title 24), administers state energy programs, forecasts supply and demand, licenses power plants. Does NOT set utility rates or regulate net metering.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>CPUC:</strong> Regulates investor-owned utilities (PG&amp;E, SCE, SDG&amp;E), sets electricity rates, approves fixed charges, determines net metering rules (NEM 3.0). Does NOT set building codes.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                When your rate goes up, that&apos;s a CPUC decision. When your new home is required to include solar panels, that&apos;s a CEC decision. Both agencies shape your energy costs, but through completely different mechanisms.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Title 24: The Solar Mandate for New Homes
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The CEC&apos;s most impactful decision for homeowners is the Title 24 building energy code. In 2020, California became the first state to require solar photovoltaic (PV) systems on all new low-rise residential construction — single-family homes, townhomes, and low-rise multifamily buildings. This mandate is still in full effect in 2026.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In 2023, the CEC expanded the requirement to include high-rise multifamily buildings and commercial buildings. Every new building in California must now include a solar PV system sized to offset a portion of its expected energy consumption. If you buy a newly built home in California, it comes with solar — that&apos;s the law.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For existing homeowners, the solar mandate doesn&apos;t apply retroactively. Nobody is going to force you to install solar on a home built in 2005. But the mandate does affect the broader market: as more new homes come with solar pre-installed, solar becomes the default expectation for California housing. Homes without solar may face a competitive disadvantage in resale over time.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Battery Storage Requirements
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The 2022 Title 24 update (effective January 2023) also introduced battery energy storage system (BESS) requirements. Non-residential buildings and high-rise multifamily buildings are now required to include battery storage alongside their solar PV systems. For new single-family homes, the requirement is to be &quot;BESS-ready&quot; — meaning the electrical infrastructure (panel capacity, conduit, dedicated circuit) must be in place so a battery can be added later without major rewiring.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This matters because battery storage is becoming essential under NEM 3.0. With reduced export credits, storing solar energy in a battery and using it during peak hours (instead of sending it back to the grid at low value) makes more financial sense. The CEC is clearly signaling that solar-plus-storage is the future standard for California buildings.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                EV Charging Standards
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Title 24 also includes EV-ready requirements for new construction. New homes and commercial buildings must include wiring and panel capacity for Level 2 electric vehicle chargers. For multifamily buildings, a percentage of parking spaces must be EV-ready. The CEC supports these requirements as part of California&apos;s broader transportation electrification goals.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For existing homeowners considering an EV, the connection to solar is direct. Charging an EV at home adds 200-400 kWh per month to your electricity usage. At PG&amp;E rates of 35 cents per kWh, that&apos;s $70-140 per month in additional electricity costs. At SDG&amp;E rates of 45.7 cents, it&apos;s $91-183 per month. If you&apos;re powering your EV with solar, that charging cost drops dramatically — often to the equivalent of $0.08-0.12 per kWh through a PPA.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Are There Any New Rebates or Incentives?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                As of 2026, there are no new statewide residential solar or battery storage rebates being administered by the CEC. Previous programs like the California Solar Initiative have been fully subscribed and closed. The Self-Generation Incentive Program (SGIP) for battery storage is still active but is administered by the CPUC, not the CEC.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The CEC does administer various energy efficiency and clean energy programs, but these tend to focus on building retrofits, appliance standards, and research — not direct solar rebates for homeowners. If you&apos;re looking for financial help with solar, the main options in 2026 are PPAs (which require no upfront cost), SGIP battery incentives (administered by the CPUC), and the DAC-SASH program for qualifying low-income households.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What This Means for Existing Homeowners
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you own an existing home in California, the CEC&apos;s actions affect you in several ways. First, the solar mandate on new construction has made solar the standard for California housing. As more new homes come with solar, existing homes without it become the exception. Second, the BESS-ready requirement signals that battery storage will likely become standard within a few years — planning for it now is smart. Third, EV-ready standards mean electrification of transportation is accelerating, and your home electricity usage is likely going up, not down.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Put it all together: California is moving toward a future where every home has solar, a battery, and an EV charger. The CEC is building the codes to make that happen for new construction. For existing homeowners, the question isn&apos;t whether to add solar — it&apos;s when. The longer you wait, the more you pay rising utility rates while new-construction homeowners next door lock in lower energy costs from day one.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Ready to Bring Your Home Up to the New Standard?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                New homes come with solar by law. See if your existing home qualifies for a $0-down solar program that cuts your bill 30-50%.
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
                href='/blog/california-solar-tax-credit-2026'
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
