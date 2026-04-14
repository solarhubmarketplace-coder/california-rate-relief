import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Sun, Zap, DollarSign, Home, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Savings in Escondido, CA: 2026 Rates, Costs & Your Options',
  description:
    'Escondido residents pay ~$239/month for electricity via SDG&E. Learn your actual rates, what solar costs in Escondido in 2026, local incentives, HOA rules, and every option to lower your bill.',
  alternates: {
    canonical: '/solar-savings/escondido',
  },
  openGraph: {
    title: 'Solar Savings in Escondido, CA: 2026 Rates, Costs & Options',
    description:
      'Escondido residents pay ~$239/month for electricity. Here\'s what solar actually costs and saves in your city.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Rate Relief Program — Escondido',
  url: 'https://ratereliefca.com/solar-savings/escondido',
  description:
    'Helping Escondido homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.',
  areaServed: {
    '@type': 'City',
    name: 'Escondido',
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
      name: 'How much does solar cost in Escondido in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 4.6 kW solar system in Escondido costs approximately $11,000 before incentives if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to SDG&E\'s average of 45.7 cents per kWh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average electric bill in Escondido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Escondido residents pay an average of approximately $239 per month for electricity, or about $2,868 per year. SDG&E rates are the highest in California at 45.7 cents per kWh bundled rate, plus a $24 monthly fixed charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my HOA block solar panels in Escondido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Under California\'s Solar Rights Act (Civil Code § 714), HOAs cannot prohibit solar panel installation. They can impose reasonable aesthetic restrictions, but any restriction that increases your system cost by more than $1,000 or reduces efficiency by more than 10% is legally unenforceable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of sun does Escondido get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Escondido averages approximately 3,100 hours of sunshine per year with 5.5 peak sun hours per day for fixed-mount solar panels. This is well above the national average and makes Escondido an excellent location for solar energy production.',
      },
    },
  ],
};

export default function EscondidoSolarPage() {
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
                Escondido, CA
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Savings in Escondido: What It Actually Costs and What
                You&apos;ll Save in 2026
              </h1>
              <p className='text-lg text-muted-foreground'>
                A data-driven guide for Escondido homeowners — your local SDG&E
                rates, solar costs, incentives, city HOA rules, and every option
                for lowering your electric bill.
              </p>
            </header>

            {/* Quick Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Zap className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>45.7¢</div>
                <div className='text-xs text-muted-foreground'>
                  SDG&E avg. rate/kWh
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <DollarSign className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>$239</div>
                <div className='text-xs text-muted-foreground'>
                  Avg. monthly bill
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Sun className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>5.5 hrs</div>
                <div className='text-xs text-muted-foreground'>
                  Peak sun hours/day
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Home className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>151K</div>
                <div className='text-xs text-muted-foreground'>
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Escondido, nestled in a valley about 30 miles north of San Diego,
                is a vibrant city of approximately 151,000 residents. The name
                means "hidden" in Spanish, and the valley location provides good
                solar exposure. But it&apos;s also in San Diego Gas &amp; Electric
                (SDG&E) territory, which has the highest electricity rates in
                California at 45.7 cents per kWh. If you&apos;re an Escondido
                homeowner watching your electric bill climb, here&apos;s a complete
                breakdown of what&apos;s happening and what you can do about it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why Escondido Electric Bills Are Climbing: SDG&E Rates Explained
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Escondido household pays approximately $239 per month
                for electricity, or about $2,868 per year. That&apos;s higher than
                the national average and reflects SDG&E&apos;s bundled rate of
                45.7 cents per kWh — the highest in California. Add the $24
                monthly fixed charge that SDG&E applies to every bill, and
                you&apos;re starting with a baseline cost before you use a single
                kilowatt-hour.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On top of the base rate, SDG&E uses aggressive time-of-use (TOU)
                pricing. Peak hours (4-9 PM) carry rates as high as 60+ cents per
                kWh during summer months. Off-peak rates (9 PM - 2 PM) are lower,
                but most households use more electricity during peak hours when
                air conditioning, cooking, and other appliances run together. The
                Escondido valley tends to heat up during summer afternoons,
                meaning peak AC usage aligns exactly with peak rate windows. SDG&E
                also approved a 7.4% rate increase in 2026, with more increases
                already scheduled through 2027.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For Escondido residents in San Diego Community Power (SDCP)
                territory, there&apos;s an alternative: SDCP offers competitive
                generation rates on top of SDG&E&apos;s delivery charges. SDCP can
                be 5-10% cheaper depending on your rate plan. Check whether SDCP
                is available in your specific neighborhood at{' '}
                <a
                  href='https://sdcommunitypower.org/residential-rates/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  sdcommunitypower.org
                </a>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 1: Check Your SDG&E Rate Plan (Free, 10 Minutes)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before considering solar, log into your{' '}
                <a
                  href='https://www.sdge.com/residential/pricing-plans/about-our-pricing-plans/whenmatters'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SDG&E account
                </a>{' '}
                and review which rate plan you&apos;re on. SDG&E offers multiple
                TOU plans (Peak, Off-Peak, etc.), and many Escondido households
                are on a default plan that doesn&apos;t match their usage pattern.
                The rate comparison tool will show you potential savings if you
                switch plans based on your actual usage history.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In Escondido specifically, shifting heavy electricity use to
                off-peak hours (before 2 PM or after 9 PM) can save 15-25%. This
                means running laundry, dishwashers, EV charging, or major
                appliances during morning and evening off-peak windows. For
                Escondido homeowners with pools or hot tubs (not uncommon in the
                area), running the pump during morning hours instead of the heat
                of the afternoon can save $40-$60/month alone.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Check If You Qualify for Assistance Programs
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SDG&E offers income-based discount programs that many Escondido
                households may qualify for. <strong>CARE</strong> provides a
                30-35% discount on your entire bill if your household income is
                below certain thresholds. <strong>FERA</strong> offers an 18%
                discount for families of 3+ with slightly higher income limits.
                Check eligibility and apply at{' '}
                <a
                  href='https://www.sdge.com/assistance-programs'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SDG&E&apos;s assistance programs page
                </a>
                .
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If anyone in your household depends on electricity-dependent
                medical equipment (CPAP, oxygen, dialysis, powered wheelchair,
                etc.), you may qualify for <strong>Medical Baseline</strong>,
                which provides additional electricity at the lowest rate tier.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Escondido&apos;s Solar Potential
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Escondido is an excellent location for solar energy. The city
                averages 3,100 hours of sunshine per year and 5.5 peak sun hours
                per day for fixed-mount panels — well above the national average.
                The valley location means consistent sun exposure throughout the
                year, with less coastal influence and marine layer interference
                compared to nearby coastal areas. The relatively dry climate and
                low humidity also maximize panel efficiency.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Escondido has a mix of older homes (downtown historic district,
                Westside neighborhoods) and newer developments (Rancho San Pasqual,
                San Pasqual Valley). Newer homes generally have better roof
                condition and easier installation, while many older Escondido
                properties are excellent candidates if roofs are in good shape. You
                can check your specific home&apos;s solar potential for free at{' '}
                <a
                  href='https://sunroof.withgoogle.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  Google Project Sunroof
                </a>
                . Just enter your address, and it will estimate your rooftop&apos;s
                sun exposure, nearby shade, and annual solar production potential.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Solar Costs in Escondido (2026 Numbers)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Escondido household uses about 696 kWh per month and
                needs a 4.6 kW solar system to significantly offset their
                electricity costs. Here&apos;s what that looks like across
                different options.
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
                        Cash purchase (4.6 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~$11,000
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~4.4 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar loan (4.6 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $115-$155
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~8-10 years
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
                        $100-$140
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Day 1 savings
                      </td>
                    </tr>
                    <tr>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        No solar (SDG&E only)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $239+ (rising)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Costs are approximate based on 2026 EnergySage data for Escondido.
                Actual costs vary by roof condition, system size, and provider.
                PPA monthly costs include remaining SDG&E charges ($24 fixed
                charge + any grid usage).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To compare quotes from local solar installers for a purchased
                system, visit{' '}
                <a
                  href='https://www.energysage.com/local-data/solar-panel-cost/ca/san-diego-county/escondido/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage&apos;s Escondido page
                </a>
                . You can get multiple quotes side by side and compare pricing,
                warranties, and installer reputation. Always get at least 3 quotes
                before committing to any option.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                HOA Rules for Solar in Escondido
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Many Escondido neighborhoods have HOAs, particularly in newer
                developments like Rancho San Pasqual and the newer subdivisions in
                the San Pasqual Valley. Homeowners often worry about getting
                approval for solar panels. Here&apos;s what you need to know: under
                California&apos;s Solar Rights Act (Civil Code § 714), your HOA
                <strong>cannot prohibit</strong> you from installing solar panels.
                They can impose reasonable aesthetic restrictions (like panel
                placement preferences or color requirements), but any restriction
                that increases your system cost by more than $1,000 or reduces
                efficiency by more than 10% is legally unenforceable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most Escondido HOAs have streamlined their solar approval process
                because so many homeowners are going solar. You typically submit an
                architectural review application, and if the HOA doesn&apos;t
                respond with a written denial within 45 days, your application is
                deemed approved by default. If your HOA gives you pushback, the law
                is clearly on your side — and they can be liable for damages plus
                your attorney&apos;s fees if they unreasonably block your
                installation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 3.0 and Battery Storage in Escondido
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Escondido is on SDG&E&apos;s NEM 3.0 (Net Billing) tariff, which
                means the excess solar energy you send back to the grid earns only
                5-8 cents per kWh — far less than the 45-60 cents you pay to buy
                electricity during peak hours. This is why battery storage has
                become essential for maximizing savings in the Escondido area.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a battery, you store excess daytime solar and use it during
                peak evening hours (4-9 PM) when SDG&E rates are highest. A solar
                + battery system typically offsets 70-90% of your grid usage,
                compared to 40-60% with solar alone. For Escondido residents, this
                is especially valuable during summer months when the valley heat
                drives peak AC usage directly into peak rate windows.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s Self-Generation Incentive Program (SGIP) may
                offer rebates for battery storage — check current availability at{' '}
                <a
                  href='https://www.selfgenca.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  selfgenca.com
                </a>
                . SGIP funds are limited and allocated first-come, first-served.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Solar Doesn&apos;t Make Sense in Escondido
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar is a strong fit for most Escondido homes, but there are
                situations where it may not be the right move. If your monthly bill
                is under $100 (uncommon in Escondido given SDG&E rates), the
                savings may not justify the system complexity. If your roof is
                heavily shaded by mature trees or has poor southwesterly exposure,
                production will be limited — check Google Project Sunroof first. If
                your roof needs replacement in the next 3-5 years, handle that
                before installing panels. And if you&apos;re planning to sell within
                1-2 years, the timing may not work (though PPAs can typically
                transfer to the buyer, which is an advantage).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Escondido-Specific Tips
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Valley heat and AC usage:</strong> Escondido sits in a
                valley and experiences hot summers, with temperatures routinely
                climbing into the 90s and 100s during July and August. AC usage is
                high, and it peaks exactly during SDG&E&apos;s peak rate windows
                (4-9 PM). Solar + battery storage is particularly valuable in
                Escondido because it directly offsets your highest-rate usage hours.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Neighborhood variations:</strong> The historic downtown area
                and Westside neighborhoods have older homes and mature trees, which
                may create shade. Newer developments like Rancho San Pasqual and San
                Pasqual Valley generally have better solar exposure and newer roofs.
                Always get a site assessment specific to your neighborhood.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>San Pasqual Valley agricultural areas:</strong> Parts of
                Escondido include agricultural lands (citrus, avocado). If you own
                acreage with farming or orchards, solar can offset irrigation pump
                and equipment costs — often a significant expense in the area.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Pool and hot tub ownership:</strong> Pools and hot tubs are
                common in Escondido given the warm climate. Pool pumps running during
                peak afternoon hours can add $50-$100/month to your bill. Running your
                pool pump during off-peak morning hours (before 2 PM) is a free way
                to save, and solar can offset the remaining pool energy costs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How much does solar cost in Escondido in 2026?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical 4.6 kW system costs approximately $11,000 before incentives
                if purchased outright. With a PPA, there is no upfront cost — you pay
                a fixed per-kWh rate (typically 18-25 cents) for the energy produced
                on your roof, compared to SDG&E&apos;s average of 45.7 cents per kWh.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                What is the average electric bill in Escondido?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Escondido residents pay approximately $239 per month on average, or
                about $2,868 per year. Summer bills can be significantly higher for
                homes with central air conditioning due to the valley heat.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Can my HOA block solar panels in Escondido?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                No. California&apos;s Solar Rights Act protects your right to install
                solar. HOAs can request reasonable aesthetic changes, but cannot
                prohibit installation or impose restrictions that increase cost by
                more than $1,000 or reduce efficiency by more than 10%.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Is the federal solar tax credit still available?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The residential tax credit (Section 25D) expired at the end of 2025.
                If you buy a system outright, there is no federal credit. However,
                the commercial credit (Section 48E) is still available, which is how
                PPA providers can offer $0-down solar at rates below SDG&E prices.
                See our{' '}
                <Link
                  href='/blog/solar-tax-credit-expired-2026-options'
                  className='text-primary hover:underline'
                >
                  full guide on post-tax-credit options
                </Link>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line for Escondido
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With 5.5 peak sun hours per day, SDG&E rates at 45.7 cents (the
                highest in California), and average bills around $239/month, Escondido
                is one of the best places in California for solar savings. The valley
                location provides consistent sun exposure, and the hot summers mean
                peak AC usage during peak rate hours — making battery storage
                particularly valuable. Start with the free stuff — optimize your
                SDG&E rate plan and check for CARE/FERA eligibility. Then evaluate
                whether a cash purchase, loan, or PPA makes sense for your situation.
                Your HOA can&apos;t stop you from going solar, the sun is abundant,
                and the math gets better every year as SDG&E rates keep rising.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Escondido Homeowner? See Your Options
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you&apos;re exploring the PPA route, check your eligibility
                for the California Rate Relief Program in about 60 seconds. No
                cost, no obligation.
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
                  href='/blog/sdge-rate-increase-2026'
                  className='block text-primary hover:underline font-medium'
                >
                  SDG&E Rate Increase 2026: What You Need to Know →
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
