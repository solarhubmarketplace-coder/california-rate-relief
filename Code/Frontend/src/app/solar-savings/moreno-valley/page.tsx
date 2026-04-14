import type { Metadata } from 'next';
import SavingsCalculator from '@/components/SavingsCalculator';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Sun, Zap, DollarSign, Home } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Savings in Moreno Valley, CA: 2026 MVU Rates, Costs & Your Options',
  description:
    'Moreno Valley residents pay ~$325/month for electricity through MVU. Learn your actual rate, what solar costs in 2026, MVU net metering, assistance programs, and every option to lower your bill.',
  alternates: {
    canonical: '/solar-savings/moreno-valley',
  },
  openGraph: {
    title:
      'Solar Savings in Moreno Valley, CA: 2026 MVU Rates, Costs & Options',
    description:
      'Moreno Valley residents pay ~$325/month for electricity through their own municipal utility. Here\'s what solar actually costs and saves in your city.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Rate Relief Program — Moreno Valley',
  url: 'https://ratereliefca.com/solar-savings/moreno-valley',
  description:
    'Helping Moreno Valley homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.',
  areaServed: {
    '@type': 'City',
    name: 'Moreno Valley',
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
      name: 'How much does solar cost in Moreno Valley in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 9.3 kW solar system in Moreno Valley costs approximately $21,900 if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to MVU\'s average of 32 cents per kWh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average electric bill in Moreno Valley?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moreno Valley residents pay approximately $325 per month on average for electricity through Moreno Valley Utility (MVU), or about $3,900 per year. Summer bills can exceed $400 for homes running central air conditioning during the extreme Inland Empire heat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Moreno Valley have its own electric utility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Moreno Valley Utility (MVU) is a publicly-owned, not-for-profit municipal electric utility established in 2001. Unlike SCE or PG&E, MVU is operated by the City of Moreno Valley. This means rates, net metering rules, and assistance programs are set locally, not by the CPUC.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MVU offer net metering for solar customers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MVU has its own net metering program with a dedicated solar TOU rate (Rate B). Solar customers who produce more energy than they use receive a monetary credit on their billing account. Existing solar customers are grandfathered for 15 years on their original NEM rate schedule.',
      },
    },
  ],
};

export default function MorenoValleySolarPage() {
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
                Moreno Valley, CA
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Savings in Moreno Valley: MVU Rates, Real Costs, and
                What You&apos;ll Actually Save in 2026
              </h1>
              <p className='text-lg text-muted-foreground'>
                A data-driven guide for Moreno Valley homeowners — your MVU
                rates, solar costs, net metering rules, assistance programs,
                and every option for lowering your electric bill.
              </p>
            </header>

            {/* Quick Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Zap className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>32¢</div>
                <div className='text-xs text-muted-foreground'>
                  MVU avg. rate/kWh
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <DollarSign className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>$325</div>
                <div className='text-xs text-muted-foreground'>
                  Avg. monthly bill
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Sun className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>
                  5.6 hrs
                </div>
                <div className='text-xs text-muted-foreground'>
                  Peak sun hours/day
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Home className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>214K</div>
                <div className='text-xs text-muted-foreground'>
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Moreno Valley is the second-largest city in Riverside County
                with over 214,000 residents, and one of the few cities in
                Southern California with its own municipal electric utility.
                Moreno Valley Utility (MVU) has been serving the city since
                2001 as a publicly-owned, not-for-profit utility — which
                means your rates, net metering rules, and assistance
                programs are set locally by the city, not by the CPUC. If
                you&apos;re a Moreno Valley homeowner watching your
                electric bill climb, here&apos;s a complete breakdown of
                what&apos;s happening and what you can do about it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Moreno Valley Residents Actually Pay for Electricity
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Moreno Valley household pays approximately $325
                per month for electricity, or about $3,900 per year.
                That&apos;s driven by MVU&apos;s average residential rate
                of around 32 cents per kWh and the reality of running air
                conditioning five or more months per year in one of the
                hottest parts of the Inland Empire. Summer bills routinely
                exceed $400 for homes with central AC.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                MVU uses time-of-use (TOU) rate structures, meaning
                electricity costs more during peak demand hours and less
                during off-peak times. If you&apos;re running your AC
                during peak hours — which most Moreno Valley households are
                during summer — you&apos;re paying the highest rate. One
                advantage of MVU being a municipal utility: their rates are
                generally lower than the big investor-owned utilities like
                SCE (34.5¢/kWh) and significantly lower than SDG&E
                (45.7¢/kWh).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                However, &quot;lower than SCE&quot; doesn&apos;t mean cheap.
                At 32¢/kWh, Moreno Valley&apos;s rates are still 69% above
                the national average. And with the city&apos;s extreme
                summer heat pushing AC usage through the roof, the total
                bill impact is substantial. The question isn&apos;t whether
                your bills are too high — it&apos;s what you can do about
                it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 1: Check Your MVU Rate Plan (Free, 10 Minutes)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before considering solar or anything else, check which MVU
                rate plan you&apos;re on. MVU offers different rate
                schedules, and you may be on one that doesn&apos;t match
                your usage pattern. Review your current rate and available
                plans at{' '}
                <a
                  href='https://www.moval.org/mvu/rates-tariffs.html'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  MVU&apos;s Rates &amp; Tariffs page
                </a>
                . If you can shift heavy electricity use (laundry,
                dishwasher, EV charging) to off-peak hours, you may save
                10-15% just by adjusting when you use electricity.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In Moreno Valley specifically, pre-cooling your home before
                peak hours during summer is one of the highest-impact
                changes you can make. Set your thermostat to 72-74°F in
                the early afternoon, then let it drift up to 78°F during
                peak hours. Your home&apos;s thermal mass will keep it
                comfortable for hours without the AC running at peak rates.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Check If You Qualify for MVU Assistance Programs
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                MVU offers its own assistance programs that are separate
                from SCE&apos;s CARE/FERA programs. The{' '}
                <strong>MVU Energy Assistance Program</strong> provides a
                discount on monthly energy charges for qualifying
                low-income residents, based on household income and size.
                Check eligibility and apply through{' '}
                <a
                  href='https://www.moval.org/mvu/payment-progs.html'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  MVU&apos;s Payment Programs page
                </a>
                .
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Additionally, MVU&apos;s{' '}
                <strong>Emergency Assistance Fund</strong> can provide a
                one-time bill credit of up to $1,400 as of January 2026
                for customers facing financial hardship. If you&apos;re
                behind on your bill or struggling to keep up, this is
                worth looking into before it runs out — these funds are
                limited. You can reach MVU&apos;s 24-hour Customer Service
                Center at 844-425-0855.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If anyone in your household relies on
                electricity-dependent medical equipment (CPAP, home
                dialysis, powered wheelchair, etc.), contact MVU directly
                to ask about medical baseline allowances. Municipal
                utilities often have their own versions of these programs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Moreno Valley&apos;s Solar Potential
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Moreno Valley is an excellent location for solar energy.
                The city averages 5.6 peak sun hours per day and
                approximately 3,200 hours of sunshine per year — above the
                national average and well within the range that makes solar
                a strong investment. The Inland Empire&apos;s low humidity
                and minimal cloud cover mean consistent, high solar
                production year-round.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Moreno Valley&apos;s geography is relatively flat with
                gentle rolling hills, which means most homes have good
                solar exposure without significant terrain shading. The
                newer developments in the eastern and southern parts of the
                city (Moreno Valley Ranch, Mountain Gate, etc.) typically
                have good south or west-facing roof exposure. You can check
                your specific home&apos;s solar potential for free at{' '}
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
                What Solar Costs in Moreno Valley (2026 Numbers)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Moreno Valley household needs a 9.3 kW solar
                system to cover their electricity usage. Here&apos;s what
                that looks like across different options.
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
                        Cash purchase (9.3 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~$21,900
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~5.5-6 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar loan (9.3 kW)
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
                        $160-$210
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Day 1 savings
                      </td>
                    </tr>
                    <tr>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        No solar (MVU only)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $325+ (rising)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Costs are approximate based on 2026 EnergySage data for
                Moreno Valley. Actual costs vary by roof, system size, and
                provider. PPA monthly costs include remaining utility
                charges and any grid usage. Note: the federal residential
                solar tax credit (Section 25D) expired at the end of 2025,
                so cash purchase prices reflect the full cost without a
                federal credit.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To compare quotes from local installers for a purchased
                system,{' '}
                <a
                  href='https://www.energysage.com/local-data/solar-panel-cost/ca/riverside-county/moreno-valley/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage&apos;s Moreno Valley page
                </a>{' '}
                lets you get multiple quotes side by side. Always get at
                least 3 quotes before committing to any option.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                MVU&apos;s Net Metering Program: What Solar Customers Need
                to Know
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is where Moreno Valley differs from SCE-territory
                cities. MVU has its own net metering program — separate
                from SCE&apos;s NEM 3.0. Solar customers in Moreno Valley
                are placed on MVU&apos;s Residential Rate B, a dedicated
                time-of-use rate for solar households. If you produce more
                energy than you use, MVU credits your account with a
                monetary credit.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                One important advantage: existing MVU solar customers are
                grandfathered for 15 years on their original NEM rate
                schedule. That means if you install solar now and MVU
                changes their net metering rules later, you&apos;re locked
                in for 15 years. This is a meaningful protection that not
                all utilities offer.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For detailed information on MVU&apos;s solar
                interconnection process, requirements, and current rate
                schedules, visit{' '}
                <a
                  href='https://www.moval.org/mvu/solar-prog.html'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  MVU&apos;s Solar Interconnection page
                </a>
                . Because MVU is a municipal utility, their interconnection
                process may differ from SCE&apos;s — check with MVU
                directly before your installer submits paperwork.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Battery Storage in Moreno Valley
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under MVU&apos;s TOU rate structure, electricity costs more
                during peak demand hours. With a battery, you store excess
                daytime solar and use it during those peak evening hours
                when MVU&apos;s rates are highest. A solar + battery
                system typically offsets 70-90% of your grid usage,
                compared to 40-60% with solar alone. For more detail on
                how batteries change the solar math, see our{' '}
                <Link
                  href='/blog/nem-3-california-still-worth-it'
                  className='text-primary hover:underline'
                >
                  NEM 3.0 and battery guide
                </Link>
                .
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California&apos;s Self-Generation Incentive Program (SGIP)
                may still offer rebates for battery storage — check
                current availability at{' '}
                <a
                  href='https://www.selfgenca.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  selfgenca.com
                </a>
                . SGIP funds are limited and allocated first-come,
                first-served.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                HOA Rules for Solar in Moreno Valley
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Many Moreno Valley neighborhoods have HOAs, especially in
                the newer developments. Under California&apos;s Solar
                Rights Act (Civil Code § 714), your HOA{' '}
                <strong>cannot prohibit</strong> you from installing solar
                panels. They can impose reasonable aesthetic restrictions
                (like panel placement preferences), but any restriction
                that increases your system cost by more than $1,000 or
                reduces efficiency by more than 10% is legally
                unenforceable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, most Moreno Valley HOAs have streamlined
                their solar approval process as solar adoption has grown.
                Submit your architectural review application, and if the
                HOA doesn&apos;t respond with a written denial within 45
                days, your application is deemed approved by default. If
                your HOA gives you pushback, the law is on your side.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Solar Doesn&apos;t Make Sense in Moreno Valley
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar is a strong fit for most Moreno Valley homes, but
                there are situations where it may not be the right move.
                If your monthly bill is under $100 (uncommon in Moreno
                Valley but possible for very small homes), the savings may
                not justify the complexity. If your roof is north-facing
                with heavy shade from trees or Box Springs Mountain, solar
                production will be low — check Google Project Sunroof
                first. If your roof needs replacement in the next 3-5
                years, handle that before installing panels. And if
                you&apos;re planning to sell within 1-2 years, the timing
                may not work (though PPAs can transfer to the buyer).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Also worth considering: because MVU&apos;s rates (32¢/kWh)
                are lower than SCE&apos;s (34.5¢), the solar savings gap
                is slightly smaller than it would be in neighboring cities
                like Riverside or Temecula that are on higher-rate
                utilities. Solar still makes strong financial sense at
                32¢/kWh — that&apos;s 69% above the national average —
                but your payback timeline will be modestly longer than a
                neighbor in SCE territory. Run the numbers for your
                specific situation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Moreno Valley-Specific Tips
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Extreme heat planning:</strong> Moreno Valley
                routinely hits 100-110°F in summer, which means your AC
                is your single biggest electricity expense. If you&apos;re
                sizing a solar system, make sure it accounts for your
                summer peak usage, not just your annual average. A system
                sized for your average month will still leave you with
                significant summer bills.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>March Air Reserve Base area:</strong> If you live
                near March ARB in the western part of the city, you may
                have airspace considerations. This doesn&apos;t affect
                rooftop solar panel installation — panels sit flat on your
                roof and don&apos;t create any airspace issues. It could
                affect crane access for ground-mount systems on very rare
                occasions, but this is uncommon.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Warehouse district proximity:</strong> Moreno
                Valley has become a major logistics and warehouse hub, with
                large distribution centers throughout the city. If your
                home is near the warehouse district, this doesn&apos;t
                affect your solar potential. In fact, the flat terrain in
                these areas often means excellent unobstructed sun
                exposure.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Older vs. newer homes:</strong> Moreno Valley has
                a mix of homes built from the 1980s through today. Older
                homes (pre-2000) may need an electrical panel upgrade
                before solar installation — typically $1,500-$3,000. Newer
                homes built after 2020 are solar-ready under
                California&apos;s Title 24 building code and may already
                have solar-ready conduit and oversized electrical panels.
                If your newer home came with builder-installed solar,
                check whether you own it or if it&apos;s under a
                lease/PPA from the builder.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Municipal utility advantage:</strong> Because MVU
                is locally operated, you can actually talk to local
                customer service reps who know Moreno Valley. If you have
                questions about rate plans, net metering, or solar
                interconnection, call MVU directly at 844-425-0855. You
                won&apos;t get the runaround you might experience with
                larger utilities.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How much does solar cost in Moreno Valley in 2026?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical 9.3 kW system costs approximately $21,900 if
                purchased outright. With a PPA, there is no upfront cost —
                you pay a fixed per-kWh rate (typically 18-25 cents) for
                the energy produced on your roof, compared to MVU&apos;s
                average of 32 cents per kWh.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                What is the average electric bill in Moreno Valley?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Moreno Valley residents pay approximately $325 per month
                on average, or about $3,900 per year. Summer bills can
                exceed $400 for homes with central air conditioning.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Does Moreno Valley have its own electric utility?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Yes. Moreno Valley Utility (MVU) is a publicly-owned,
                not-for-profit municipal electric utility established in
                2001. It&apos;s operated by the City of Moreno Valley,
                which means rates and programs are set locally. You can
                reach MVU at 844-425-0855 or visit{' '}
                <a
                  href='https://www.moval.org/mvu/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  moval.org/mvu
                </a>
                .
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Is the federal solar tax credit still available?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The residential tax credit (Section 25D) expired at the
                end of 2025. If you buy a system outright, there is no
                federal credit. However, the commercial credit (Section
                48E) is still available, which is how PPA providers can
                offer $0-down solar at rates below utility prices. See
                our{' '}
                <Link
                  href='/blog/solar-tax-credit-expired-2026-options'
                  className='text-primary hover:underline'
                >
                  full guide on post-tax-credit options
                </Link>
                .
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Can my HOA block solar panels?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                No. California&apos;s Solar Rights Act protects your right
                to install solar. HOAs can request reasonable aesthetic
                changes, but cannot prohibit installation or impose
                restrictions that increase cost by more than $1,000 or
                reduce efficiency by more than 10%.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line for Moreno Valley
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With 5.6 peak sun hours per day, MVU rates at 32 cents
                per kWh, extreme summer heat driving high AC usage, and
                average bills around $325/month, Moreno Valley is one of
                the strongest solar markets in the Inland Empire. The
                municipal utility adds a unique advantage — MVU&apos;s
                15-year net metering grandfathering means your solar
                investment is protected against future rate changes. Start
                with the free stuff: optimize your MVU rate plan and
                check for Energy Assistance eligibility. Then evaluate
                whether a cash purchase, loan, or PPA makes sense for
                your situation.
              </p>
            </div>

            {/* Savings Calculator */}
            <SavingsCalculator defaultUtility="mvu" cityName="Moreno Valley" />

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Moreno Valley Homeowner? See Your Options
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If you&apos;re exploring the PPA route, check your
                eligibility for the California Rate Relief Program in
                about 60 seconds. No cost, no obligation.
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
                  href='/blog/nem-3-california-still-worth-it'
                  className='block text-primary hover:underline font-medium'
                >
                  Is Solar Still Worth It Under NEM 3.0? →
                </Link>
                <Link
                  href='/blog/solar-tax-credit-expired-2026-options'
                  className='block text-primary hover:underline font-medium'
                >
                  Solar Tax Credit Expired — Your Options Now →
                </Link>
                <Link
                  href='/blog/california-24-dollar-fixed-charge-explained'
                  className='block text-primary hover:underline font-medium'
                >
                  The New $24 Fixed Charge, Explained →
                </Link>
                <Link
                  href='/blog/prepaid-ppa-california-2026'
                  className='block text-primary hover:underline font-medium'
                >
                  Prepaid Solar PPA in California: How It Works →
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
