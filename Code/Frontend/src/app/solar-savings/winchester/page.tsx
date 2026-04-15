import type { Metadata } from 'next';
import SavingsCalculator from '@/components/SavingsCalculator';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Sun, Zap, DollarSign, Home, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Savings in Winchester, CA: 2026 Rates, Costs & Your Options',
  description:
    'Winchester residents pay ~$311/month for electricity. Learn your actual SCE rate, what solar costs in Winchester in 2026, local incentives, HOA rules, and every option to lower your bill.',
  alternates: {
    canonical: '/solar-savings/winchester',
  },
  openGraph: {
    title: 'Solar Savings in Winchester, CA: 2026 Rates, Costs & Options',
    description:
      'Winchester residents pay ~$311/month for electricity. Here\'s what solar actually costs and saves in your community.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Rate Relief Program — Winchester',
  url: 'https://ratereliefca.com/solar-savings/winchester',
  description:
    'Helping Winchester homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.',
  areaServed: {
    '@type': 'City',
    name: 'Winchester',
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
      name: 'How much does solar cost in Winchester in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 9.2 kW solar system in Winchester costs approximately $21,600 before incentives if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to SCE\'s average of 34.5 cents per kWh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average electric bill in Winchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Winchester residents pay an average of approximately $311 per month for electricity, or about $3,732 per year. This is driven by SCE\'s rates and the reality of running air conditioning during hot Inland Empire summers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my HOA block solar panels in Winchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'California\'s Solar Rights Act (Civil Code § 714) protects your right to install solar. Individual HOAs cannot prohibit installation. They can impose reasonable aesthetic restrictions, but any restriction that increases system cost by more than $1,000 or reduces efficiency by more than 10% is legally unenforceable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of sun does Winchester get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Winchester averages approximately 3,200 hours of sunshine per year with 5.7 peak sun hours per day for fixed-mount solar panels. This is well above the national average and makes Winchester an excellent location for solar energy production.',
      },
    },
  ],
};

export default function WinchesterSolarPage() {
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
                Winchester, CA
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Savings in Winchester: What It Actually Costs and What
                You&apos;ll Save in 2026
              </h1>
              <p className='text-lg text-muted-foreground'>
                A data-driven guide for Winchester homeowners — your local rates,
                solar costs, incentives, HOA rules, and every option for
                lowering your electric bill.
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
                <div className='text-2xl font-bold text-foreground'>$311</div>
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
                <div className='text-2xl font-bold text-foreground'>~35K</div>
                <div className='text-xs text-muted-foreground'>
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Winchester is an unincorporated census-designated place (CDP) in
                Riverside County, nestled between Temecula and Hemet in the heart
                of Southern California Edison territory. With a population of
                around 35,000 and a rural-to-suburban character, Winchester is
                home to many families drawn by larger lot sizes, ranch properties,
                and relative affordability compared to neighboring cities. It&apos;s
                also experiencing rapid growth, with new housing developments
                changing the landscape. If you live in Winchester and are watching
                your electricity bills climb — with rates among the highest in the nation at 34.5¢/kWh with summer peaks reaching 58-74¢
                — here&apos;s a complete breakdown of what&apos;s happening
                and what you can do about it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Winchester Residents Actually Pay for Electricity
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Winchester household pays approximately $311 per month
                for electricity, or about $3,732 per year. That&apos;s roughly
                25% above the national average, driven by SCE&apos;s rates and the
                reality of cooling homes through five or more months of hot,
                dry Inland Empire summers.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE&apos;s average residential rate is currently around 34.5 cents
                per kWh, but that&apos;s an average across all hours. During peak
                time-of-use hours (4-9 PM), rates jump to 58-74 cents per kWh.
                If you&apos;re running your AC during those hours — which most
                Winchester households are during summer — you&apos;re paying the
                highest rate. Winchester residents who maintain larger properties
                or have pool pumps running often see bills over $350-$400 during
                peak summer months.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On top of per-kWh charges, there&apos;s now a $24.15 monthly
                fixed charge on every SCE bill regardless of usage. Combined with
                rates among the highest in the nation and multi-year increases already
                approved through 2028, a typical Winchester household using 1,000+
                kWh per month (common with larger homes and acreage) can expect
                summer bills of $340 to $400.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 1: Check Your SCE Rate Plan (Free, 10 Minutes)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before anything else, log into your{' '}
                <a
                  href='https://www.sce.com/mysce/myaccount'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SCE My Account
                </a>{' '}
                and check which rate plan you&apos;re on. SCE offers several TOU
                (time-of-use) plans, and many Winchester households are on a
                default plan that isn&apos;t optimal for them. The rate comparison
                tool in your account will show you what you&apos;d pay on each
                plan based on your actual last 12 months of usage. Switching is
                free and takes minutes.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you can shift heavy electricity use (laundry, dishwasher, EV
                charging, well pumps, livestock water stations) to off-peak hours
                (before 4 PM or after 9 PM), you can save 10-15% just by being on
                the right TOU plan. In Winchester, especially if you have acreage
                or ranch property, running well or livestock equipment in the
                morning and pre-cooling your home before 4 PM are high-impact
                changes.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Check If You Qualify for Discounts
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE offers income-based discount programs that many qualifying
                Winchester households haven&apos;t applied for.{' '}
                <strong>CARE</strong> provides a 30-35% discount on your entire
                bill if your household income is below certain thresholds.{' '}
                <strong>FERA</strong> offers an 18% discount for families of 3+
                with slightly higher income limits. Check eligibility and apply
                at{' '}
                <a
                  href='https://www.sce.com/residential/assistance/care-fera'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SCE&apos;s CARE/FERA page
                </a>
                .
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If anyone in your household relies on electricity-dependent
                medical equipment (CPAP, powered wheelchair, medical pump, etc.),
                you may qualify for <strong>Medical Baseline</strong>, which gives
                you additional electricity at the lowest rate tier.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Winchester&apos;s Solar Potential
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Winchester is an excellent location for solar. The area averages
                3,200 hours of sunshine per year and 5.7 peak sun hours per day
                for fixed-mount panels — well above the national average. The
                relatively low humidity and minimal cloud cover (compared to
                coastal California) mean consistent, high solar production
                year-round.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Winchester&apos;s housing stock is mixed — ranging from older
                rural homes to newer suburban developments. Many properties have
                larger lot sizes with south or west-facing roof exposure,
                especially in newer subdivisions. The big advantage for Winchester
                homeowners with acreage is that you often have space for rooftop
                solar <em>and</em> additional ground-mount panels if needed. You
                can check your specific home&apos;s solar potential for free at{' '}
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
                What Solar Costs in Winchester (2026 Numbers)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Winchester household needs a 9.2 kW solar system to
                cover their electricity usage. Here&apos;s what that looks like
                across different options.
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
                        Cash purchase (9.2 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~$21,600
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~6.5 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar loan (9.2 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $175-$240
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~9-12 years
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
                        $145-$190
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
                        $311+ (rising)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Costs are approximate based on 2026 EnergySage data for Winchester.
                Actual costs vary by roof condition, system size, acreage layout,
                and provider. PPA monthly costs include remaining utility charges
                ($24 fixed charge + any grid usage).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To compare quotes from local installers for a purchased system,{' '}
                <a
                  href='https://www.energysage.com/local-data/solar-panel-cost/ca/riverside-county/winchester/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage&apos;s Winchester page
                </a>{' '}
                lets you get multiple quotes side by side. Always get at least 3
                quotes before committing to any option. For properties with
                acreage, ask installers about ground-mount options to maximize
                solar potential.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                HOA and Land Rules for Solar in Winchester
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Winchester is unincorporated Riverside County, which means many
                properties are <em>not</em> subject to city HOA rules. However,
                some Winchester neighborhoods do have HOAs, and individual rural
                properties may have CCRs (Covenants, Conditions & Restrictions).
                Check your property deed and homeowner documents to see if you
                have HOA or CC&R restrictions.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your Winchester property <em>does</em> have an HOA or CCRs,
                California&apos;s Solar Rights Act (Civil Code § 714) still
                applies. The HOA <strong>cannot prohibit</strong> you from
                installing solar panels. They can impose reasonable aesthetic
                restrictions (like panel placement preferences on visible roofs),
                but any restriction that increases your system cost by more than
                $1,000 or reduces efficiency by more than 10% is legally
                unenforceable. For properties with acreage, ground-mount systems
                are often a good compromise that avoids roof-visibility issues
                while giving you more flexibility on placement.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your Winchester property is <em>not</em> subject to an HOA,
                you have complete freedom to install solar however makes sense for
                your roof and land — rooftop, ground-mount, or both. This is one
                of the advantages of Winchester&apos;s rural character.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 3.0 and Battery Storage in Winchester
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Winchester is on SCE&apos;s NEM 3.0 (Net Billing) tariff, which
                means the excess solar energy you send back to the grid earns
                only 5-8 cents per kWh — far less than the 34-50 cents you pay
                to buy it back during peak hours. This is why battery storage has
                become essential for maximizing savings.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a battery, you store excess daytime solar and use it during
                peak evening hours (4-9 PM) when SCE rates are highest. A solar
                + battery system typically offsets 70-90% of your grid usage,
                compared to 40-60% with solar alone. For more detail on how this
                works, see our{' '}
                <Link
                  href='/blog/nem-3-california-still-worth-it'
                  className='text-primary hover:underline'
                >
                  NEM 3.0 guide
                </Link>
                .
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s Self-Generation Incentive Program (SGIP) may
                still offer rebates for battery storage — check current
                availability at{' '}
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
                When Solar Doesn&apos;t Make Sense in Winchester
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar is a strong fit for most Winchester homes, but there are
                situations where it may not be the right move. If your monthly
                bill is under $100 (rare in Winchester, but possible for very
                small properties or part-time residents), the savings may not
                justify the complexity. If your roof is heavily shaded by mature
                oak trees (common on older Winchester properties) or faces
                north, production will be low — check Google Project Sunroof
                first. If your roof needs replacement in the next 3-5 years,
                handle that before installing panels. And if you&apos;re planning
                to move within 1-2 years, timing may not work (though PPAs can
                transfer to the buyer).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Winchester-Specific Tips
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Large lot owners and ranchers:</strong> If you have
                acreage or ranch property (common in Winchester), you have unique
                advantages for solar. Ground-mount systems on your property can be
                more productive than rooftop panels and give you layout
                flexibility. You may also benefit from larger battery systems to
                offset well pumps, livestock water systems, or other on-property
                equipment. The more you use electricity on-site during the day,
                the better solar works for you.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Newer subdivisions:</strong> Winchester has several new
                housing developments (Sycamore Creek, etc.) with modern roofs and
                solar-ready conduit. If you recently bought in a newer area, your
                installation cost may be lower than older homes. California&apos;s
                Title 24 building code requires solar on most new homes built
                after 2020, so if your home already has builder-installed solar,
                check whether you own it or if it&apos;s under a lease/PPA from
                the builder.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Hot rural summers:</strong> Winchester experiences some of
                the hottest temperatures in the Inland Empire (105°F+ in summer),
                which drives air conditioning use sky-high. The hotter your area,
                the more you benefit from solar. Combined with no city electricity
                caps, Winchester homeowners often see the biggest savings from
                solar of any Riverside County community.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Proximity to French Valley Airport:</strong> If your
                Winchester property is near French Valley Airport (south side of
                Winchester), check with the airport authority before installing
                tall structures or ground-mount systems. This rarely blocks solar
                installation, but it&apos;s worth confirming with your installer.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How much does solar cost in Winchester in 2026?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical 9.2 kW system costs approximately $21,600 before
                incentives if purchased outright. With a PPA, there is no upfront
                cost — you pay a fixed per-kWh rate (typically 18-25 cents) for
                the energy produced on your roof, compared to SCE&apos;s average
                of 34.5 cents per kWh.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                What is the average electric bill in Winchester?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Winchester residents pay approximately $311 per month on average,
                or about $3,732 per year. Larger properties and those with pool
                pumps or acreage-related electricity use can be significantly
                higher.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Can my HOA block solar panels in Winchester?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Winchester is mostly unincorporated, so many properties don&apos;t
                have HOAs. If yours does have an HOA or CC&Rs, California&apos;s
                Solar Rights Act protects your right to install solar. They can
                request reasonable aesthetic changes, but cannot prohibit
                installation or impose restrictions that increase cost by more
                than $1,000 or reduce efficiency by more than 10%.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Can I install ground-mount solar on my property?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Yes, if you have acreage and no restrictive CC&Rs, ground-mount
                systems are a great option for Winchester properties. They avoid
                roof issues, allow better equipment cooling (improving
                efficiency), and can be placed in the optimal sun exposure area
                on your land. Ask your installer for a ground-mount quote.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Is the federal solar tax credit still available?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The residential tax credit (Section 25D) expired at the end of
                2025. If you buy a system outright, there is no federal credit.
                However, the commercial credit (Section 48E) is still available,
                which is how PPA providers can offer $0-down solar at rates below
                utility prices. See our{' '}
                <Link
                  href='/blog/solar-tax-credit-expired-2026-options'
                  className='text-primary hover:underline'
                >
                  full guide on post-tax-credit options
                </Link>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line for Winchester
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With 5.7 peak sun hours per day, SCE rates among the highest in the nation at 34.5 cents with summer peaks reaching 58-74 cents,
                and average bills around $311/month,
                Winchester is one of the best areas in Riverside County for solar
                savings. The larger lot sizes and acreage that make Winchester
                attractive also give you unique solar advantages — rooftop,
                ground-mount, or both. Start with the free stuff — optimize your
                SCE rate plan and check for CARE/FERA eligibility. Then evaluate
                whether a cash purchase, loan, or PPA makes sense for your
                situation. No HOA will stop you, the sun is on your side, and the
                math gets better every year as utility rates keep rising.
              </p>
            </div>

            {/* Savings Calculator */}
            <SavingsCalculator defaultUtility="sce" cityName="Winchester" />

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Winchester Homeowner? See Your Options
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
