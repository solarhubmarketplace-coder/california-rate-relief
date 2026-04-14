import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Sun, Zap, DollarSign, Home, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Savings in Fallbrook, CA: 2026 Rates, Costs & Your Options',
  description:
    'Fallbrook residents pay ~$233/month for electricity via SDG&E. Learn your actual rates, what solar costs in Fallbrook in 2026, local incentives, unincorporated HOA rules, and every option to lower your bill.',
  alternates: {
    canonical: '/solar-savings/fallbrook',
  },
  openGraph: {
    title: 'Solar Savings in Fallbrook, CA: 2026 Rates, Costs & Options',
    description:
      'Fallbrook residents pay ~$233/month for electricity. Here\'s what solar actually costs and saves in your community.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Rate Relief Program — Fallbrook',
  url: 'https://ratereliefca.com/solar-savings/fallbrook',
  description:
    'Helping Fallbrook homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.',
  areaServed: {
    '@type': 'City',
    name: 'Fallbrook',
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
      name: 'How much does solar cost in Fallbrook in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 5 kW solar system in Fallbrook costs approximately $11,444 before incentives if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to SDG&E\'s average of 45.7 cents per kWh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average electric bill in Fallbrook?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fallbrook residents pay an average of approximately $233 per month for electricity, or about $2,796 per year. SDG&E rates are the highest in California at 45.7 cents per kWh bundled rate, plus a $24 monthly fixed charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Fallbrook have an HOA that blocks solar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fallbrook is an unincorporated community in San Diego County — it doesn\'t have a city HOA. However, individual master-planned communities and neighborhoods may have HOAs. Under California\'s Solar Rights Act, no HOA can prohibit solar panels, though they can impose reasonable aesthetic restrictions if they don\'t increase cost by more than $1,000 or reduce efficiency by more than 10%.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of sun does Fallbrook get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fallbrook averages approximately 3,100 hours of sunshine per year with 5.5 peak sun hours per day for fixed-mount solar panels. This is well above the national average and makes Fallbrook an excellent location for solar energy production.',
      },
    },
  ],
};

export default function FallbrookSolarPage() {
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
                Fallbrook, CA
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Savings in Fallbrook: What It Actually Costs and What
                You&apos;ll Save in 2026
              </h1>
              <p className='text-lg text-muted-foreground'>
                A data-driven guide for Fallbrook homeowners — your local SDG&E
                rates, solar costs, incentives, county rules, and every option for
                lowering your electric bill.
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
                <div className='text-2xl font-bold text-foreground'>$233</div>
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
                <div className='text-2xl font-bold text-foreground'>32K</div>
                <div className='text-xs text-muted-foreground'>
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Fallbrook is a rural, semi-rural unincorporated community in San
                Diego County known as the "Avocado Capital of the World." With a
                population around 32,000 and properties ranging from single-family
                homes to larger acreage, it&apos;s an ideal place to have energy
                independence. It&apos;s also in San Diego Gas &amp; Electric
                (SDG&E) territory, which has the highest electricity rates in
                California at 45.7 cents per kWh. If you&apos;re a Fallbrook
                homeowner watching your electric bill climb, here&apos;s a complete
                breakdown of what&apos;s happening and what you can do about it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why Fallbrook Electric Bills Are So High: SDG&E Rates Explained
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Fallbrook household pays approximately $233 per month
                for electricity, or about $2,796 per year. That&apos;s higher than
                the national average and reflects SDG&E&apos;s bundled rate of
                45.7 cents per kWh — the highest in California. Add the $24
                monthly fixed charge that SDG&E now applies to every bill, and
                you&apos;re looking at a baseline charge before you use a single
                kilowatt-hour.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On top of the base rate, SDG&E uses aggressive time-of-use (TOU)
                pricing. Peak hours (4-9 PM) carry rates as high as 60+ cents per
                kWh during summer months. Off-peak rates (9 PM - 2 PM) are lower,
                but most households use more electricity during peak hours when
                air conditioning, cooking, and other appliances run together.
                SDG&E also approved a 7.4% rate increase in 2026, with more
                increases already scheduled through 2027.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For Fallbrook residents in San Diego Community Power (SDCP)
                territory, there&apos;s an alternative: SDCP offers competitive
                generation rates on top of SDG&E&apos;s delivery charges. SDCP can
                be 5-10% cheaper depending on your rate plan. Check whether SDCP
                is available in your area at{' '}
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
                TOU plans (Peak, Off-Peak, etc.), and many Fallbrook households
                are on a default plan that doesn&apos;t match their usage pattern.
                The rate comparison tool will show you potential savings if you
                switch plans based on your actual usage history.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In Fallbrook specifically, shifting heavy electricity use to
                off-peak hours (before 2 PM or after 9 PM) can save 15-25%. This
                means running your well pump, pool pump, EV charging, or major
                appliances during morning and evening off-peak windows. Fallbrook
                properties with wells or agricultural use (common in the area) can
                see significant savings by shifting pump schedules to off-peak
                times.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Check If You Qualify for Assistance Programs
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SDG&E offers income-based discount programs that many Fallbrook
                households may qualify for.{' '}
                <strong>CARE</strong> provides a 30-35% discount on your entire
                bill if your household income is below certain thresholds.{' '}
                <strong>FERA</strong> offers an 18% discount for families of 3+
                with slightly higher income limits. Check eligibility and apply at{' '}
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
                which provides additional electricity at the lowest rate tier —
                essential for Fallbrook residents living on acreage who may have
                longer response times for medical services.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Fallbrook&apos;s Solar Potential
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Fallbrook is an excellent location for solar energy. The area
                averages 3,100 hours of sunshine per year and 5.5 peak sun hours
                per day for fixed-mount panels — well above the national average.
                The semi-rural nature of Fallbrook means most properties have
                larger roofs and fewer shade obstructions compared to denser urban
                areas. The combination of clear skies, low humidity, and minimal
                cloud cover makes consistent, high solar production year-round
                possible.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                You can check your specific home&apos;s solar potential for free
                at{' '}
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
                What Solar Costs in Fallbrook (2026 Numbers)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Fallbrook household uses about 700 kWh per month and
                needs a 5 kW solar system to significantly offset their electricity
                costs. Here&apos;s what that looks like across different options.
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
                        Cash purchase (5 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~$11,444
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~4 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar loan (5 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $120-$160
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
                        $233+ (rising)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Costs are approximate based on 2026 EnergySage data for Fallbrook.
                Actual costs vary by roof condition, system size, and provider.
                PPA monthly costs include remaining SDG&E charges ($24 fixed
                charge + any grid usage).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To compare quotes from local solar installers for a purchased
                system, visit{' '}
                <a
                  href='https://www.energysage.com/local-data/solar-panel-cost/ca/san-diego-county/fallbrook/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage&apos;s Fallbrook page
                </a>
                . You can get multiple quotes side by side and compare pricing,
                warranties, and installer reputation. Always get at least 3 quotes
                before committing to any option.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                HOA and County Rules for Solar in Fallbrook
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Fallbrook is an unincorporated community in San Diego County, so
                there is no city-level HOA that applies to all residents. However,
                individual master-planned communities and neighborhoods within
                Fallbrook may have their own HOAs. If your property is in a
                planned community with an HOA, California&apos;s Solar Rights Act
                (Civil Code § 714) protects your right to install solar panels.
                Your HOA <strong>cannot prohibit</strong> solar installation, but
                they can impose reasonable aesthetic restrictions if those
                restrictions don&apos;t increase your system cost by more than
                $1,000 or reduce efficiency by more than 10%.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For properties without an HOA, San Diego County applies zoning and
                building codes. Solar installations generally qualify under standard
                building permits, and the County Planning &amp; Development Services
                process is straightforward. Many Fallbrook properties with
                agriculture or rural character may also benefit from exemptions for
                farm equipment if panels are part of an irrigation or pumping
                system.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 3.0 and Battery Storage in Fallbrook
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Fallbrook is on SDG&E&apos;s NEM 3.0 (Net Billing) tariff. This
                means the excess solar energy you send back to the grid earns only
                5-8 cents per kWh — far less than the 45-60 cents you pay to buy
                electricity during peak hours. This is why battery storage is
                especially valuable for Fallbrook residents.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a battery, you store excess daytime solar and use it during
                peak evening hours (4-9 PM) when SDG&E rates are highest. A solar
                + battery system typically offsets 70-90% of your grid usage,
                compared to 40-60% with solar alone. For rural Fallbrook properties
                relying on well pumps or other electricity-dependent systems,
                battery backup also provides energy security during grid outages,
                which is increasingly important in fire-prone areas.
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
                When Solar Doesn&apos;t Make Sense in Fallbrook
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar is a strong fit for most Fallbrook homes, but there are
                situations where it may not be the right move. If your monthly
                bill is under $100 (uncommon in Fallbrook given SDG&E rates), the
                savings may not justify the system complexity. If your roof is
                heavily shaded by mature trees or hills, or if it has a poor
                southwesterly exposure, production will be limited — check Google
                Project Sunroof first. If your roof needs replacement in the next
                3-5 years, handle that before installing panels. And if you&apos;re
                planning to sell within 1-2 years, the timing may not work (though
                PPAs can typically transfer to the buyer, which is an advantage).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Fallbrook-Specific Tips
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Agricultural properties:</strong> If you have avocado
                groves, citrus orchards, or other agricultural use on your
                property, your electricity costs may include pumping for irrigation.
                Solar can offset these costs significantly. Some properties may also
                qualify for agricultural exemptions or tax incentives — check with
                San Diego County Farm Bureau.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Well water systems:</strong> Many Fallbrook properties rely
                on private wells for water, which require electric pumps. Solar can
                reliably power your well pump — in fact, solar + battery storage
                ensures water availability even during grid outages, critical in a
                semi-rural area.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Fire-prone area:</strong> Fallbrook is in a fire risk zone.
                Solar panels are built to withstand ember exposure per California
                building codes, and battery storage provides backup power during
                grid shutdowns during fire season. This added resilience is a
                tangible benefit beyond just bill reduction.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Acreage and micro-climates:</strong> Fallbrook spans from
                coastal influence in the west to hotter inland valleys. Inland
                Fallbrook (toward inland San Pasqual Valley) experiences hotter
                summers and higher AC usage, which means stronger solar ROI. Coastal
                areas near Camp Pendleton may have slightly different sun exposure
                due to marine layer influence — always get a site assessment.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How much does solar cost in Fallbrook in 2026?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical 5 kW system costs approximately $11,444 before incentives
                if purchased outright. With a PPA, there is no upfront cost — you
                pay a fixed per-kWh rate (typically 18-25 cents) for the energy
                produced on your roof, compared to SDG&E&apos;s average of 45.7
                cents per kWh.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                What is the average electric bill in Fallbrook?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Fallbrook residents pay approximately $233 per month on average, or
                about $2,796 per year. Bills vary based on usage, with higher
                agricultural or larger property usage pushing bills higher.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Does Fallbrook have an HOA that blocks solar?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Fallbrook is unincorporated, so there is no city-wide HOA. Individual
                neighborhoods may have HOAs, but California&apos;s Solar Rights Act
                prevents them from prohibiting solar. They can request reasonable
                aesthetic restrictions if they don&apos;t increase cost by more than
                $1,000 or reduce efficiency by more than 10%.
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
                The Bottom Line for Fallbrook
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With 5.5 peak sun hours per day, SDG&E rates at 45.7 cents (the
                highest in California), and average bills around $233/month, Fallbrook
                is one of the best places in California for solar savings. The
                semi-rural character means lower shading, larger properties, and
                often better roof exposure. Start with the free stuff — optimize
                your SDG&E rate plan, check for CARE/FERA eligibility, and explore
                SDCP as a generation alternative. Then evaluate whether a cash
                purchase, loan, or PPA makes sense for your situation. No HOA can
                stop you from going solar, the sun is abundant, and the math gets
                better every year as SDG&E rates keep rising.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Fallbrook Homeowner? See Your Options
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
