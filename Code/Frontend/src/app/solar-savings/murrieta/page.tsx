import type { Metadata } from 'next';
import SavingsCalculator from '@/components/SavingsCalculator';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Sun, Zap, DollarSign, Home, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Savings in Murrieta, CA: 2026 SCE Rates, Costs & Smart Options',
  description:
    'Murrieta residents pay ~$271/month for electricity under SCE. Learn your actual rates, what solar costs in 2026, military discounts, HOA rules, and how to save 30-50% on your bill.',
  alternates: {
    canonical: '/solar-savings/murrieta',
  },
  openGraph: {
    title: 'Solar Savings in Murrieta, CA: 2026 SCE Rates & Solar Costs',
    description:
      'Murrieta residents pay ~$271/month for electricity. Here\'s what solar actually costs and saves in your city.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Rate Relief Program — Murrieta',
  url: 'https://ratereliefca.com/solar-savings/murrieta',
  description:
    'Helping Murrieta homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.',
  areaServed: {
    '@type': 'City',
    name: 'Murrieta',
    containedInPlace: {
      '@type': 'State',
      name: 'California',
    },
  },
  serviceType: 'Solar Power Purchase Agreement (PPA)',
  priceRange: '$0 down',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does solar cost in Murrieta in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 8.6 kW solar system in Murrieta costs approximately $20,176 before incentives if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to SCE\'s average of 34.5 cents per kWh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average electric bill in Murrieta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Murrieta residents pay an average of approximately $271 per month for electricity, or about $3,252 per year. This is driven by SCE\'s rates and Southern California\'s hot desert climate requiring significant air conditioning use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my HOA block solar panels in Murrieta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Under California\'s Solar Rights Act (Civil Code § 714), HOAs cannot prohibit solar panel installation. They can impose reasonable aesthetic restrictions, but any restriction that increases system cost by more than $1,000 or reduces efficiency by more than 10% is legally unenforceable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of sun does Murrieta get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Murrieta averages approximately 3,200 hours of sunshine per year with 5.7 peak sun hours per day for fixed-mount solar panels. This is well above the national average and makes Murrieta an excellent location for solar energy production.',
      },
    },
  ],
};

export default function MurrietaSolarPage() {
  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Murrieta, CA
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Savings in Murrieta: Local Rates, Real Costs & 2026 Options
              </h1>
              <p className='text-lg text-muted-foreground'>
                A complete guide for Murrieta homeowners — understand your SCE
                rates, calculate actual solar costs, navigate HOA rules, and explore
                every option for cutting your electricity bill in half.
              </p>
            </header>

            {/* Quick Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Zap className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>34.5¢</div>
                <div className='text-xs text-muted-foreground'>
                  SCE avg. rate/kWh
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <DollarSign className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>$271</div>
                <div className='text-xs text-muted-foreground'>
                  Avg. monthly bill
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Sun className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>5.7 hrs</div>
                <div className='text-xs text-muted-foreground'>
                  Peak sun hours/day
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Home className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>111K</div>
                <div className='text-xs text-muted-foreground'>
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Murrieta, in southwest Riverside County, is home to around 111,000
                residents and has been growing steadily as a family-friendly
                bedroom community. Adjacent to Temecula and closer to Camp
                Pendleton, Murrieta attracts young families, military service
                members, and retirees alike. Like all of Southern California Edison
                territory, your electricity bills are climbing — up 12.9% in 2026
                alone. If you&apos;re paying SCE&apos;s rising rates, here&apos;s
                everything you need to know about what solar can do for your wallet.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Murrieta Residents Pay for Electricity
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Murrieta household pays approximately $271 per month
                for electricity, or about $3,252 per year. That&apos;s roughly
                25% above the national average — driven by SCE&apos;s rates, the
                year-round demand for air conditioning in Murrieta&apos;s hot
                climate, and the newly added $24.15 monthly fixed charge on all
                bills.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE&apos;s blended rate is 34.5 cents per kWh, but peak
                time-of-use hours (4-9 PM, when most people are home) cost 44-50
                cents per kWh. In summer, when your AC runs hardest during peak
                hours, you&apos;re paying the maximum rate for exactly when you
                need electricity most. A typical Murrieta home uses 750-800 kWh
                per month, and with peak pricing, summer bills can easily hit
                $300-$350.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Looking ahead, SCE has already secured regulatory approval for rate
                increases through 2028. If you assume just 3% annual increases, a
                Murrieta household with average usage will pay roughly $4,100 per
                year by 2028. That&apos;s not a typo — your bill is heading higher
                every single month.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 1: Optimize Your SCE Rate Plan (Free, 10 Minutes)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Start by logging into your{' '}
                <a
                  href='https://www.sce.com/mysce/myaccount'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SCE My Account
                </a>{' '}
                portal and checking which rate plan you&apos;re currently on. Many
                Murrieta households are on a default plan they&apos;ve never
                reviewed. The online comparison tool shows what you&apos;d pay on
                each available TOU (time-of-use) plan based on your actual last
                12-month history. Switching is instant and costs nothing.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For Murrieta specifically, peak hours (4-9 PM) are expensive, so
                shifting any heavy load to early morning or late evening helps most.
                Run your pool pump in the morning (before 4 PM), charge your EV or
                do laundry before peak hours, and pre-cool your home to 72°F by 4
                PM to minimize AC use during peak. These behavioral changes, combined
                with the right rate plan, can save 10-15% without installing a
                single solar panel.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Check for Income-Based Discounts
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE offers two powerful programs if your household qualifies by
                income. <strong>CARE</strong> provides a 30-35% discount on your
                entire bill. <strong>FERA</strong> offers 18% off if you have a
                family of 3 or more. Check eligibility and apply at{' '}
                <a
                  href='https://www.sce.com/residential/assistance/care-fera'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SCE&apos;s CARE/FERA page
                </a>
                . If you qualify, these discounts are immediate and apply to your
                next bill.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Additionally, if anyone in your household uses electricity-dependent
                medical equipment (CPAP, home dialysis, oxygen concentrators,
                powered wheelchairs), apply for <strong>Medical Baseline</strong> to
                get additional electricity at the lowest tier rate.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Murrieta&apos;s Solar Potential
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Murrieta is an outstanding location for solar. The city receives
                approximately 3,200 hours of sunshine per year and 5.7 peak sun
                hours per day — well above the national average of 4.5 hours. The
                desert climate, minimal cloud cover, and low humidity all mean your
                solar system will produce energy reliably year-round.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most Murrieta homes have roofs with good south-facing exposure and
                clear sky view. Neighborhoods like Spencer&apos;s Crossing, Greer
                Ranch, and other master-planned communities in the area feature
                well-oriented homes. Newer construction (last 15-20 years) is
                especially favorable — Title 24 requirements mean many homes come
                with solar-ready electrical infrastructure. Check your home&apos;s
                specific solar potential free at{' '}
                <a
                  href='https://sunroof.withgoogle.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  Google Project Sunroof
                </a>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Solar Costs in Murrieta (2026 Data)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Murrieta household needs an 8.6 kW system to cover
                typical usage. Here&apos;s what that breaks down to across your
                options:
              </p>

              {/* Cost Comparison Table */}
              <div className='overflow-x-auto mb-8'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-3 pr-4 font-bold text-foreground'>
                        Option
                      </th>
                      <th className='text-center py-3 px-3 font-bold text-foreground'>
                        Upfront Cost
                      </th>
                      <th className='text-center py-3 px-3 font-bold text-foreground'>
                        Monthly Cost
                      </th>
                      <th className='text-center py-3 px-3 font-bold text-foreground'>
                        Payback
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Cash purchase (8.6 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~$20,176
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~5.9 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar loan (8.6 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $160-$230
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~9-11 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar PPA
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $140-$185
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Day 1 savings
                      </td>
                    </tr>
                    <tr>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        No solar (SCE only)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $271+ (rising)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Costs are approximate based on 2026 EnergySage data for Murrieta.
                Actual costs vary by roof condition, system size, and provider. PPA
                monthly costs include remaining utility charges ($24 fixed + grid
                usage).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To get multiple quotes from local Murrieta installers for a
                purchased system,{' '}
                <a
                  href='https://www.energysage.com/local-data/solar-panel-cost/ca/riverside-county/murrieta/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage&apos;s Murrieta page
                </a>{' '}
                lets you compare side by side. Always collect at least 3 quotes
                before making a decision.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Military Families & VA Loans in Murrieta
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Murrieta has a significant military population due to proximity to
                Camp Pendleton and other installations. If you&apos;re an active
                duty, reserve, or veteran homeowner with a VA loan, you can use your
                VA entitlement to finance solar at favorable rates — often matching
                or beating traditional solar loans. The VA doesn&apos;t restrict
                improvements like solar, so you can refinance or use remaining
                entitlement. Check with your VA loan servicer on solar financing
                options, or speak with installers experienced in VA solar packages.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                HOA Rules for Solar in Murrieta
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Many Murrieta master-planned communities have HOAs. The good news:
                under California&apos;s Solar Rights Act (Civil Code § 714), your
                HOA <strong>cannot prohibit</strong> solar installation. They may
                request reasonable aesthetic adjustments (like placing panels on a
                back roof or using matching-color frames), but any restriction that
                adds more than $1,000 to your cost or reduces efficiency by more
                than 10% is unenforceable by law.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, Murrieta HOAs have become solar-friendly because so
                many residents have already installed panels. Submission is usually
                straightforward — file an architectural review application, and if
                the HOA doesn&apos;t respond in writing within 45 days, your
                application is automatically approved. If you face unreasonable
                resistance, California law allows you to sue for damages and recover
                your attorney&apos;s fees, which discourages HOAs from fighting.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 3.0 and Battery Storage
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Murrieta is on SCE&apos;s NEM 3.0 (Net Billing) tariff, which means
                excess solar energy sent back to the grid earns only 5-8 cents per
                kWh — versus the 34-50 cents you pay to buy electricity back during
                peak hours. This unfavorable rate structure makes battery storage
                increasingly valuable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A solar + battery system stores excess daytime production and
                discharges it during peak evening hours (4-9 PM) when rates are
                highest. This can offset 70-90% of your grid consumption, compared
                to 40-60% with solar alone. California&apos;s Self-Generation
                Incentive Program (SGIP) may offer battery rebates — check current
                availability at{' '}
                <a
                  href='https://www.selfgenca.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  selfgenca.com
                </a>
                . Funds are limited and allocated on a first-come basis. For deeper
                NEM 3.0 details, see our{' '}
                <Link
                  href='/blog/nem-3-california-still-worth-it'
                  className='text-primary hover:underline'
                >
                  NEM 3.0 guide
                </Link>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Solar Doesn&apos;t Make Sense
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar works for most Murrieta homes, but exceptions exist. If your
                monthly bill is under $100 (possible for very small homes or
                seasonal residents), the cost-benefit may not align. If your roof
                is heavily shaded by mature trees, nearby hillsides, or tall
                structures, solar production will suffer — use Google Project
                Sunroof to check first. If your roof needs replacement in the next
                3-5 years, handle that before going solar. And if you plan to sell
                within 1-2 years, the timing might not work out (though PPAs can
                transfer to a new owner).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Murrieta-Specific Tips
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>New construction advantage:</strong> If you bought in one of
                Murrieta&apos;s newer master-planned communities, your home likely
                has solar-ready conduit and oversized electrical panels per Title
                24 (the state building code). This significantly reduces installation
                costs and complexity. Check whether any builder-installed solar is
                under your control or the builder&apos;s lease.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Air conditioning patterns:</strong> Murrieta summers are
                hot and consistent — you&apos;re running AC heavily from May through
                September. This high summer peak load is exactly what solar handles
                best. The more your cooling demand overlaps with peak sun hours
                (10 AM - 3 PM), the better your solar ROI.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Flat terrain benefit:</strong> Unlike some Riverside County
                areas, much of Murrieta has relatively flat land and good sky view.
                This means fewer shading issues and easier installer access,
                typically resulting in lower installation costs than hillside or
                densely wooded areas.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How much does solar cost in Murrieta in 2026?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical 8.6 kW system costs approximately $20,176 if purchased
                outright. With a PPA, there is no upfront cost — you pay a fixed
                per-kWh rate (typically 18-25 cents) for the energy produced,
                compared to SCE&apos;s average of 34.5 cents per kWh.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                What is the average electric bill in Murrieta?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Murrieta residents pay approximately $271 per month on average, or
                about $3,252 per year. Summer bills are typically higher due to
                air conditioning demand.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Can my HOA stop me from going solar?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                No. California&apos;s Solar Rights Act protects your right to
                install solar. HOAs can request reasonable aesthetic changes, but
                cannot prohibit installation or enforce restrictions that increase
                cost by more than $1,000 or reduce efficiency by more than 10%.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Is the federal solar tax credit still available?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The residential tax credit (Section 25D) expired at the end of 2025.
                If you purchase a system outright, there is no federal credit. With
                a PPA, the provider claims the commercial credit (Section 48E), which
                is how they can offer $0-down solar. For more details, see our{' '}
                <Link
                  href='/blog/solar-tax-credit-expired-2026-options'
                  className='text-primary hover:underline'
                >
                  post-tax-credit options guide
                </Link>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line for Murrieta
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Murrieta is one of Southern California&apos;s best locations for
                solar — 3,200 hours of sun per year, flat terrain, and homes built
                for solar installations. With SCE rates at 34.5 cents (up 12.9% in
                2026) and average monthly bills around $271, your payback math is
                excellent. Start with the free wins: optimize your rate plan on SCE
                My Account, check CARE/FERA eligibility, and use Google Project
                Sunroof to evaluate your home. Then decide whether a cash purchase,
                loan, or PPA fits your situation best. Your HOA can&apos;t block
                you, the sun shines reliably, and as rates keep climbing, every
                year you wait costs more.
              </p>
            </div>

            {/* Savings Calculator */}
            <SavingsCalculator defaultUtility="sce" cityName="Murrieta" />

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Murrieta Homeowner? Check Your Options
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you&apos;re exploring the PPA route, check your eligibility for
                the California Rate Relief Program in about 60 seconds. No cost, no
                obligation.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check My Eligibility
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            {/* Related Content */}
            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>
                Related Articles
              </h3>
              <div className='space-y-3'>
                <Link
                  href='/blog/sce-rate-increase-2026'
                  className='block text-primary hover:underline font-medium'
                >
                  SCE Rate Increase 2026: What You Need to Know →
                </Link>
                <Link
                  href='/blog/nem-3-california-still-worth-it'
                  className='block text-primary hover:underline font-medium'
                >
                  Is Solar Still Worth It Under NEM 3.0? →
                </Link>
                <Link
                  href='/blog/california-24-dollar-fixed-charge-explained'
                  className='block text-primary hover:underline font-medium'
                >
                  The New $24 Fixed Charge, Explained →
                </Link>
                <Link
                  href='/blog/solar-tax-credit-expired-2026-options'
                  className='block text-primary hover:underline font-medium'
                >
                  Solar Tax Credit Expired — Your Options Now →
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
