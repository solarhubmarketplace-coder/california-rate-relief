import { SolarInquiry } from '@/components/growth/SolarInquiry';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

export const metadata: Metadata = {
  title: "SCE Rates Decreased in 2026, But Remain High in Edison",
  description: "Why Southern California Edison bills remain elevated despite minor 2026 rate adjustments: peak 4-9 PM windows, fixed charges, and solar alternatives.",
  alternates: {
    canonical: '/blog/sce-rate-increase-2026',
  },
  openGraph: {
    title:
      'SCE Rates Decreased in January 2026, But Remain Extremely High',
    description:
      'SCE\'s residential average fell about 2.3% on January 1, 2026, per the CPUC Public Advocates Office. Why bills stay high and what to do about it.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

export default function SCERateIncrease2026() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"SCE Rates Decreased in January 2026, But Remain Extremely High"} url="https://ratereliefca.com/blog/sce-rate-increase-2026" datePublished="2026-04-14" dateModified="2026-04-24" description={"SCE rates actually decreased 2-3% as of January 1, 2026, but remain among the highest in the country at 34.5¢/kWh. Learn why rates are still crushing bills, what you can do, and whether solar makes sense."} />
      <Header />
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
                SCE Rates Decreased in January 2026, But Remain Extremely High
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-14'>April 14, 2026</time>
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
                Southern California Edison&apos;s residential average rate fell about 2.3% on January 1, 2026, to 34.5 cents per kilowatt-hour, and stood at 34.4 cents as of June 1, 2026 (CPUC Public Advocates Office, Q1 and Q2 2026 Electric Rates Reports). California&apos;s average residential price was 34.74 cents in June 2026, second only to Hawaii among the states and nearly double the U.S. average of 18.34 cents (EIA, Electric Power Monthly, Table 5.6.A). If you&apos;re an SCE customer, this article breaks down what&apos;s really happening, why rates are still crushing, and what you can actually do about it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What&apos;s Actually Changing
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE&apos;s residential average was 34.4 cents per kilowatt-hour (kWh)
                as of June 1, 2026 (CPUC Public Advocates Office). For context, the
                U.S. average residential price was 18.34 cents per kWh in June 2026
                (EIA). What matters more for your bill is the price during the hours
                you use power: on a time-of-use plan, the evening peak costs the
                most, and your plan&apos;s tariff sheet lists the exact prices.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On top of the per-kWh price, SCE began applying a monthly fixed
                charge of $24.15 for customers not on CARE or FERA in late 2025,
                under CPUC Decision 24-05-028. This flat fee
                appears on every residential bill regardless of how much electricity
                you use. (We have a{' '}
                <Link
                  href='/blog/california-24-dollar-fixed-charge-explained'
                  className='text-primary hover:underline'
                >
                  separate deep dive on the fixed charge here
                </Link>
                .)
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A household with central air in the Inland Empire or San Fernando
                Valley uses far more in summer than in winter, so look at your own
                twelve months of bills rather than a typical-home estimate.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why SCE Rates Keep Going Up
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Understanding the &quot;why&quot; matters because it tells you
                whether this is a one-time adjustment or an ongoing trend. The
                short answer: it&apos;s ongoing. Here are the main cost drivers.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Wildfire mitigation.</strong> SCE is spending billions to
                underground power lines, harden the grid, and deploy monitoring
                systems in high-fire-risk zones. After the devastating wildfires
                in recent years and the associated liability, this spending isn&apos;t
                discretionary — it&apos;s mandated. These capital costs are passed
                through to ratepayers over decades.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Grid modernization.</strong> California&apos;s push toward
                100% clean energy and electric vehicle adoption requires massive
                grid upgrades — new transmission lines, substation expansions, and
                smart grid technology. Every ratepayer shares these costs regardless
                of whether they drive an EV.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Multi-year rate cases.</strong> Utility revenue is set in
                multi-year general rate cases before the CPUC, so rate changes
                arrive in steps over several years. You can review SCE&apos;s
                rate case filings on the{' '}
                <a
                  href='https://www.cpuc.ca.gov/industries-and-topics/electrical-energy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  CPUC website
                </a>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 1: Check if You&apos;re on the Right Rate Plan
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before doing anything else, check whether you&apos;re on the most
                cost-effective SCE rate plan for your usage pattern. SCE&apos;s
                online rate comparison uses your actual usage history to show
                what you would pay on each plan.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>How to do it:</strong> Log into your{' '}
                <a
                  href='https://www.sce.com/mysce/myaccount'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SCE My Account
                </a>{' '}
                portal. Navigate to &quot;My Rate Plan&quot; or &quot;Rate Plan
                Comparison.&quot; SCE will show you what you&apos;d pay on each
                available plan based on your last 12 months of actual usage. If a
                different plan saves you money, you can switch online in minutes
                with no fees.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The main plans to compare are TOU-D-4-9PM (peak hours 4-9 PM),
                TOU-D-5-8PM (peak hours 5-8 PM), and TOU-D-PRIME (for EV
                owners). If you can run your dishwasher, laundry, and EV charger
                outside peak hours, the right TOU plan may cost you less than your
                current one; the rate comparison shows the difference for your
                own usage.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Reduce Your Peak-Hour Usage
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE&apos;s time-of-use prices are highest in the evening peak and
                lower at other times; your plan&apos;s tariff sheet lists the exact
                prices. Shifting
                heavy electricity use away from 4-9 PM makes a real difference.
                Practical moves include setting your thermostat to pre-cool the
                house by 3:30 PM, running the dishwasher and laundry before 4 PM
                or after 9 PM, and charging your EV overnight.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A smart thermostat (Nest, Ecobee, etc.) can automate this, and
                SCE sometimes offers rebates on them through their{' '}
                <a
                  href='https://www.sce.com/residential/rebates-savings'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  rebates and savings page
                </a>
                . Check there for current offers before buying one at full price.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 3: Check for Discount Programs You Might Qualify For
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE offers two income-based discount programs that many qualifying
                households don&apos;t know about or haven&apos;t applied for.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>CARE (California Alternate Rates for Energy)</strong>{' '}
                provides a 30-35% discount on the electric bill if your household
                income falls below its limits, according to the CPUC. The limits
                change each June; check the current table on{' '}
                <a
                  href='https://www.sce.com/residential/assistance/care-fera'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SCE&apos;s CARE/FERA page
                </a>
                ). If you qualify, this is the single biggest bill reduction
                available to you.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>FERA (Family Electric Rate Assistance)</strong> offers an
                18% discount on the electric bill for households of any size with
                income between the CARE limit and 250% of the federal poverty
                guidelines, according to the CPUC. It&apos;s worth checking even if you think
                you might not qualify.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Medical Baseline:</strong> If anyone in your household
                relies on medical equipment that uses electricity (CPAP machines,
                home dialysis, electric wheelchairs, etc.), you may qualify for
                Medical Baseline, which gives you extra electricity at the lowest
                tier rate.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 4: Evaluate Longer-Term Options
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If the steps above aren&apos;t enough — or you want to protect
                yourself against future rate changes — there are bigger moves
                worth evaluating.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Home energy efficiency upgrades.</strong> Attic insulation,
                air sealing, and window upgrades reduce your cooling load, which
                is the single biggest electricity driver for most SCE households.
                California offers energy efficiency financing through programs like{' '}
                <a
                  href='https://gogreenfinancing.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  GoGreen Financing
                </a>{' '}
                with loans for qualifying upgrades. If your home is poorly
                insulated, this can reduce your cooling usage.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Solar (purchased system).</strong> Buying a solar system
                outright or through a loan gives you full ownership. There is no
                federal residential credit on a system installed in 2026: IRC
                &sect; 25D does not apply to expenditures made after December 31,
                2025. How long a purchase takes to pay back depends on the price,
                how much of the output you use yourself and your rate plan, so ask
                each bidder to show its assumptions. This makes more sense if you
                plan to stay in your home and have the capital or financing. Get
                at least three written quotes for the same system to compare
                installers.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Solar PPA (Power Purchase Agreement).</strong> If you
                don&apos;t want to buy a system or take out a loan, a PPA puts
                solar on your roof that the provider owns, often with no down
                payment. You pay a set price per kWh for the energy the panels
                produce, usually with an annual escalator, and you still pay SCE
                for grid power and its fixed charge. The trade-off is you
                don&apos;t own the system and can&apos;t claim a tax credit. Add
                up every payment in the contract before comparing it with your
                SCE bills.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Community solar.</strong> If your roof isn&apos;t suitable
                for panels (too much shade, wrong orientation, HOA restrictions),
                community solar programs let you subscribe to a share of a local
                solar farm and receive bill credits. Availability varies by area —
                check{' '}
                <a
                  href='https://www.communitysolaraccess.org'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  Community Solar Access
                </a>{' '}
                for options near you.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Solar Doesn&apos;t Make Sense
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar isn&apos;t the right move for everyone, even with rates this
                high. It generally doesn&apos;t make financial sense if your
                monthly bill is already low, if you&apos;re planning to sell your home within the
                next 2-3 years (though a PPA can be transferred to the buyer), if
                your roof has heavy shading from trees or neighboring buildings
                that can&apos;t be mitigated, or if your roof needs replacement
                in the next few years (do the roof first, then solar).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re not sure about your roof&apos;s solar potential,
                Google&apos;s{' '}
                <a
                  href='https://sunroof.withgoogle.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  Project Sunroof tool
                </a>{' '}
                can give you a rough estimate of your home&apos;s solar potential
                using satellite imagery.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE&apos;s average residential rate was 34.4 cents per kWh as of June
                1, 2026, per the CPUC Public Advocates Office&apos;s Q2 2026 Electric
                Rates Report. The first step costs nothing but time: log into your
                SCE account and make sure you&apos;re on the plan that fits your
                usage. After that, check if you qualify for CARE or FERA
                discounts. For longer-term protection, evaluate whether solar (purchased
                or PPA), energy efficiency upgrades, or community solar makes sense for
                your specific situation. The right answer depends on your home,
                your bill, and how long you plan to stay.
              </p>
            </div>

            {/* CTA — soft, one option among many */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Curious What a Fixed Solar Rate Would Look Like?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you are exploring a PPA and want a provider to review your
                project, you can send your details through the form on this
                page. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
              </p>
              <Link
                href='#solar-inquiry'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Request a solar review
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-8'>
              <SolarInquiry utility="sce" topic="SCE rate increase and solar comparison" />
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
                href='/blog/california-24-dollar-fixed-charge-explained'
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
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
