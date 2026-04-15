import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'SCE Rates Decreased in January 2026, But Remain Extremely High',
  description:
    'SCE rates actually decreased 2-3% as of January 1, 2026, but remain among the highest in the country at 34.5¢/kWh. Learn why rates are still crushing bills, what you can do, and whether solar makes sense.',
  alternates: {
    canonical: '/blog/sce-rate-increase-2026',
  },
  openGraph: {
    title:
      'SCE Rates Decreased in January 2026, But Remain Extremely High',
    description:
      'SCE rates fell 2-3% in January 2026, but bills are still crushing. Here\'s what to do about it.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'SCE Rates Decreased in January 2026, But Remain Extremely High',
  description:
    'SCE rates decreased 2-3% as of January 1, 2026, but remain among the highest in the nation. Learn why, and what you can do.',
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
    '@id': 'https://ratereliefca.com/blog/sce-rate-increase-2026',
  },
};

export default function SCERateIncrease2026() {
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
                Contrary to earlier projections, Southern California Edison rates actually decreased by approximately 2-3% as of January 1, 2026. However, don&apos;t celebrate too soon — SCE&apos;s rates remain among the highest in the country at 34.5 cents per kilowatt-hour, with peak time-of-use rates reaching 58-74 cents. For most SCE customers, the rate decrease barely offsets inflationary pressures, and with multi-year rate increases already approved through 2028, the relief is temporary. If you&apos;re an SCE customer, this article breaks down what&apos;s really happening, why rates are still crushing, and what you can actually do about it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What&apos;s Actually Changing
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE residential rates currently average around 34.5 cents per
                kilowatt-hour (kWh). For context, the national average is roughly
                18 cents per kWh, meaning SCE customers are already paying roughly
                double what most Americans pay for electricity. The 2-3% rate decrease that went into effect January 1 knocked the average down slightly from 35.5 cents, but this relief is temporary and modest. What matters more for your pocketbook are the peak TOU rates, which can reach 58-74 cents per kWh during evening hours.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On top of the per-kWh rate increase, SCE added a new monthly fixed
                charge of approximately $24.15 starting in late 2025. This flat fee
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
                For a household using 900 kWh per month — typical for a 3-bedroom
                home with central air in the Inland Empire or San Fernando Valley
                — the combined effect means monthly bills could approach $330 to
                $375 depending on your rate plan and time-of-use schedule. Over a
                full year, that&apos;s $3,960 to $4,500 just in electricity.
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
                <strong>Multi-year rate plans already approved.</strong> The CPUC
                has already approved rate increase frameworks extending through
                2028. This means the 2026 increase isn&apos;t a one-off — there
                are more increases built into the pipeline. You can review SCE&apos;s
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
                Step 1: Check if You&apos;re on the Right Rate Plan (Free, 10
                Minutes)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before doing anything else, check whether you&apos;re on the most
                cost-effective SCE rate plan for your usage pattern. Many
                households are on a default TOU (time-of-use) plan that isn&apos;t
                optimal for them. SCE offers a free rate comparison tool that
                analyzes your actual usage history and recommends the cheapest
                plan.
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
                outside peak hours, the right TOU plan alone can save you 10-15%
                with zero upfront cost.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Reduce Your Peak-Hour Usage
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE&apos;s TOU rates swing dramatically — from around 20 cents per
                kWh off-peak to 58-74 cents during peak evening hours. Shifting
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
                provides a 30-35% discount on your entire electric bill if your
                household income falls below certain thresholds (roughly $40,000
                for a household of two, $61,000 for a household of four — check
                current limits on{' '}
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
                18% discount for families of three or more whose income slightly
                exceeds CARE limits. It&apos;s worth checking even if you think
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
                yourself against the rate increases that are already approved
                through 2028 — there are bigger moves worth evaluating.
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
                with low-interest loans. If your home is poorly insulated, this
                can reduce your kWh usage by 15-25%.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Solar (purchased system).</strong> Buying a solar system
                outright or through a loan gives you full ownership and the longest
                payback. Without the federal residential tax credit (which expired
                at the end of 2025), the payback period for a purchased system is
                now roughly 9 to 12 years in SCE territory, compared to 6 to 7
                years when the credit was available. This makes sense if you plan
                to stay in your home for 15+ years and have the upfront capital or
                strong borrowing terms. You can get free quotes through platforms
                like{' '}
                <a
                  href='https://www.energysage.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage
                </a>{' '}
                to compare installers.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Solar PPA (Power Purchase Agreement).</strong> If you
                don&apos;t want to buy a system or take out a loan, a PPA puts
                solar on your roof at no upfront cost. You pay a fixed rate per
                kWh for the energy the panels produce, typically 30-50% below
                utility rates. The trade-off is you don&apos;t own the system and
                can&apos;t claim tax benefits (though the residential credit is
                gone anyway). PPAs are strongest when utility rates are high and
                rising — which is exactly the situation SCE customers are in.
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
                monthly bill is under $100 (the savings may not justify the
                complexity), if you&apos;re planning to sell your home within the
                next 2-3 years (though a PPA can be transferred to the buyer), if
                your roof has heavy shading from trees or neighboring buildings
                that can&apos;t be mitigated, or if your roof needs replacement
                in the next few years (do the roof first, then solar).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re not sure about your roof&apos;s solar potential,
                Google&apos;s free{' '}
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
                SCE rates decreased 2-3% as of January 1, 2026, but that&apos;s a
                brief respite. More increases are already in the pipeline through 2028,
                and at current rates of 34.5 cents per kWh, you need immediate action.
                The cheapest thing you can do right now is log into your SCE account
                and make sure you&apos;re on the optimal rate plan — that&apos;s free
                and takes 10 minutes. After that, check if you qualify for CARE or FERA
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
                If you&apos;re exploring the PPA route, you can check your
                eligibility for the California Rate Relief Program in about 60
                seconds. No cost, no obligation.
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
    </PublicLayout>
  );
}
