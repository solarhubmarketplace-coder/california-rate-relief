import type { Metadata } from 'next';
import SavingsCalculator from '@/components/SavingsCalculator';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Sun, Zap, DollarSign, Home, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Savings in Menifee, CA: 2026 SCE Rates, Costs & Complete Guide',
  description:
    'Menifee residents pay ~$247/month for electricity under SCE. Learn local rates, actual solar costs for 2026, new construction advantages, HOA guidance, and realistic savings.',
  alternates: {
    canonical: '/solar-savings/menifee',
  },
  openGraph: {
    title: 'Solar Savings in Menifee, CA: 2026 SCE Rates & Solar Costs',
    description:
      'Menifee residents pay ~$247/month for electricity. Here\'s what solar actually costs and saves in your fast-growing city.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Rate Relief Program — Menifee',
  url: 'https://ratereliefca.com/solar-savings/menifee',
  description:
    'Helping Menifee homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.',
  areaServed: {
    '@type': 'City',
    name: 'Menifee',
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
      name: 'How much does solar cost in Menifee in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 8.5 kW solar system in Menifee costs approximately $19,965 before incentives if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to SCE\'s average of 34.5 cents per kWh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average electric bill in Menifee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Menifee residents pay an average of approximately $247 per month for electricity, or about $2,964 per year. As one of California\'s fastest-growing cities, Menifee has a high proportion of newer homes with solar-ready construction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my HOA block solar panels in Menifee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Under California\'s Solar Rights Act (Civil Code § 714), HOAs cannot prohibit solar panel installation. They can impose reasonable aesthetic restrictions, but any restriction that increases system cost by more than $1,000 or reduces efficiency by more than 10% is legally unenforceable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of sun does Menifee get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Menifee averages approximately 3,200 hours of sunshine per year with 5.7 peak sun hours per day for fixed-mount solar panels. This is well above the national average and makes Menifee an excellent location for solar energy production.',
      },
    },
  ],
};

export default function MenifeeeSolarPage() {
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
                Menifee, CA
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Savings in Menifee: New Construction Advantage & 2026 Rates
              </h1>
              <p className='text-lg text-muted-foreground'>
                Everything Menifee homeowners need to know — understand your SCE
                rates, calculate real solar costs, leverage your new construction,
                navigate HOA rules, and see how much you can save.
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
                <div className='text-2xl font-bold text-foreground'>$247</div>
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
                <div className='text-2xl font-bold text-foreground'>115K</div>
                <div className='text-xs text-muted-foreground'>
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Menifee is one of the fastest-growing cities in California,
                incorporated just in 2008. It now has a population of around 115,000
                and has become a magnet for families, retirees, and workers seeking
                affordable new construction in Riverside County. The city&apos;s rapid
                expansion means a high proportion of newer homes built to Title 24
                standards — many with solar-ready infrastructure already in place.
                However, like all residents in Southern California Edison territory,
                your electricity rates are climbing steeply. Here&apos;s what you need
                to know to make a smart solar decision for your Menifee home.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Menifee Residents Pay for Electricity
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Menifee household pays approximately $247 per month for
                electricity, or about $2,964 per year. This is above the national
                average but slightly lower than some neighboring cities, likely due
                to Menifee&apos;s mix of newer, more efficient homes and a slightly
                higher proportion of smaller properties. However, that advantage
                shrinks year after year as SCE rates climb.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE&apos;s blended residential rate is 34.5 cents per kWh, with a
                $24.15 monthly fixed charge regardless of usage. During peak
                time-of-use hours (4-9 PM), rates jump to 44-50 cents per kWh. For
                Menifee, where summer air conditioning is a necessity, this peak
                pricing window is exactly when demand is highest. A typical Menifee
                home uses 700-750 kWh per month, and summer bills can easily reach
                $280-$320.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The critical factor: SCE has secured regulatory approval for rate
                increases through 2028. The 12.9% increase in 2026 is just the
                beginning. If you do nothing, a current $247/month bill will likely
                hit $295+ per month by 2028. Over a decade, that adds tens of
                thousands to your lifetime utility costs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 1: Review Your Current SCE Rate Plan (Free, Takes 10 Minutes)
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
                portal and checking which rate plan you&apos;re on. Many Menifee
                homeowners have never reviewed their assignment and may be on a
                suboptimal plan. The online rate comparison tool shows what you
                would pay on each available time-of-use (TOU) plan based on your
                actual 12-month usage history. Switching is instant and free.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For Menifee specifically, the goal is to shift as much heavy usage
                as possible away from peak hours (4-9 PM). Run your pool pump
                before 4 PM, charge your EV overnight (after 9 PM or before 4 AM),
                do laundry in the morning, and try to pre-cool your home to 72°F
                before peak hours start. These behavioral shifts, combined with the
                right TOU plan, can easily save 10-15% on your bill without any
                capital investment.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Check Your Income-Based Discount Eligibility
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                SCE offers two substantial income-based programs that many Menifee
                households qualify for but haven&apos;t applied. <strong>CARE</strong>{' '}
                provides a 30-35% discount on your entire bill if your household
                income falls below specific thresholds. <strong>FERA</strong> offers
                an 18% discount for families of 3 or more with higher income limits.
                Application is straightforward — check eligibility and apply at{' '}
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
                Additionally, if anyone in your household relies on
                electricity-dependent medical equipment — CPAP machines, home
                dialysis, powered wheelchairs, oxygen concentrators — you may qualify
                for <strong>Medical Baseline</strong>, which provides additional
                electricity at the lowest rate tier. This program is particularly
                valuable for retirees in Menifee, where there are significant active
                adult communities.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Menifee&apos;s Solar Advantage: Sunshine &amp; New Construction
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Menifee receives approximately 3,200 hours of sunshine per year and
                5.7 peak sun hours per day — excellent by national standards. The
                dry climate, minimal cloud cover, and desert location mean reliable
                year-round solar production.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                More importantly for Menifee: because the city is so young and
                growing rapidly, a huge proportion of homes are new construction
                (last 10-15 years). California&apos;s Title 24 building code requires
                that new homes be built with solar-ready conduit, oversized
                electrical panels, and reinforced roofs. This dramatically reduces
                solar installation complexity and cost compared to retrofitting older
                homes. Many Menifee developments (Audie Murphy Ranch, Paloma Valley,
                etc.) were specifically designed with solar in mind.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Check your home&apos;s specific solar potential free at{' '}
                <a
                  href='https://sunroof.withgoogle.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  Google Project Sunroof
                </a>
                . You can also check your roof deed or building permit to confirm
                whether your home was built with solar-ready infrastructure — your
                electrician will know for sure once they walk your roof.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Solar Costs in Menifee (2026 Breakdown)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Menifee household needs an 8.5 kW system to offset
                typical usage. Here&apos;s how the numbers look across your options:
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
                        Cash purchase (8.5 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~$19,965
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~6 years
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        Solar loan (8.5 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $155-$225
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
                        $130-$175
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
                        $247+ (rising)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Costs are approximate based on 2026 EnergySage data for Menifee.
                Menifee&apos;s newer construction typically results in lower
                installation costs than older cities. PPA monthly costs include the
                $24 fixed charge and any remaining grid usage.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To compare quotes from local installers for a purchased system,{' '}
                <a
                  href='https://www.energysage.com/local-data/solar-panel-cost/ca/riverside-county/menifee/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage&apos;s Menifee page
                </a>{' '}
                lets you request side-by-side quotes. Always get at least 3 quotes
                to understand the full range of options.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                New Construction = Lower Solar Installation Costs
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Because Menifee is relatively new, your home may already have solar
                infrastructure built in. Many newer homes have:
              </p>

              <ul className='list-disc list-inside space-y-2 mb-6 text-foreground/80'>
                <li>
                  Solar-ready electrical conduit from roof to panel and to breaker
                  box
                </li>
                <li>Oversized electrical panels designed for solar integration</li>
                <li>
                  Reinforced roof trusses suitable for solar panel weight
                </li>
                <li>
                  Meters positioned for easy solar equipment installation
                </li>
              </ul>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This pre-existing infrastructure can reduce your installation cost by
                $2,000-$4,000 compared to retrofitting an older home. Ask your
                installer to check your roof and electrical setup early — if you have
                solar-ready construction, make sure they factor that savings into
                their quote.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                HOA Rules for Solar in Menifee
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Most Menifee master-planned communities have HOAs. Under
                California&apos;s Solar Rights Act (Civil Code § 714), your HOA
                <strong>cannot prohibit</strong> you from installing solar panels.
                They can impose reasonable aesthetic requirements (like panel
                placement or color), but any restriction that increases your cost by
                more than $1,000 or reduces efficiency by more than 10% is
                unenforceable by law.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, Menifee HOAs have been relatively solar-friendly, partly
                because so many residents have already gone solar and partly because
                newer HOAs were designed with solar approval processes in mind. You
                typically submit an architectural review application; if the HOA
                doesn&apos;t respond in writing within 45 days, your application is
                deemed approved by default. If you face unreasonable resistance, the
                law clearly protects you, and you can recover attorney&apos;s fees if
                you need to sue.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 3.0 and Battery Storage in Menifee
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Menifee is on SCE&apos;s NEM 3.0 (Net Billing) tariff. This means
                excess solar energy you send back to the grid earns only 5-8 cents
                per kWh, far less than the 34-50 cents you pay during peak hours.
                This unfavorable export rate makes battery storage increasingly
                valuable for maximizing savings.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A solar + battery system stores excess daytime production and
                discharges it during peak evening hours (4-9 PM) when rates are
                highest. This typically offsets 70-90% of your grid consumption,
                versus 40-60% with solar alone. California&apos;s Self-Generation
                Incentive Program (SGIP) may offer battery rebates — check current
                availability and application status at{' '}
                <a
                  href='https://www.selfgenca.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  selfgenca.com
                </a>
                . SGIP rebates are limited and allocated first-come, first-served.
                For a deeper explanation, see our{' '}
                <Link
                  href='/blog/nem-3-california-still-worth-it'
                  className='text-primary hover:underline'
                >
                  NEM 3.0 guide
                </Link>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Solar Might Not Be the Right Move
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar works for most Menifee homes, but exceptions exist. If your
                monthly bill is under $100 (unlikely in Menifee, but possible for
                very small homes), the economics may not justify the setup. If your
                roof is heavily shaded by structures, mature trees, or topography,
                solar production will be limited — check Google Project Sunroof
                first. If your roof needs replacement in the next 3-5 years, handle
                that before installing panels. And if you plan to sell your home
                within 1-2 years, solar timing might not work out (though PPAs can
                transfer to the new owner under most circumstances).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Menifee-Specific Tips &amp; Opportunities
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Active adult communities:</strong> Menifee has significant
                active adult / 55+ populations (like areas around Sun City). If
                you&apos;re in one of these communities, you likely have lower
                electricity usage than younger families, which means a smaller (and
                cheaper) solar system. However, your payback period may be longer if
                your current bill is already modest — but NEM 3.0 still makes solar
                worthwhile due to the peak-hour rate advantage.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Flat terrain and clear skies:</strong> Unlike some Riverside
                County areas with hills or mountains, much of Menifee is flat with
                excellent sky view. This minimizes shading and simplifies installer
                access, often resulting in lower installation costs than densely
                wooded or hillside neighborhoods.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Builder solar already installed?:</strong> Some newer Menifee
                homes come with builder-installed solar panels as part of Title 24
                compliance. Check your paperwork to see if your system is owned by
                you or leased/under a PPA from the builder. If it&apos;s under a
                builder agreement, understand the terms before adding your own
                system — you may have overlap or contract restrictions.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How much does solar cost in Menifee in 2026?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical 8.5 kW system costs approximately $19,965 if purchased
                outright. With a PPA, there is no upfront cost — you pay a fixed
                per-kWh rate (typically 18-25 cents) for the energy produced, versus
                SCE&apos;s average 34.5 cents per kWh.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                What is the average electric bill in Menifee?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Menifee residents pay approximately $247 per month on average, or
                about $2,964 per year. Summer bills tend to be higher due to AC
                demand during peak-rate hours.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Can my HOA block solar in Menifee?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                No. California&apos;s Solar Rights Act protects your right to
                install solar. HOAs can request reasonable aesthetic adjustments but
                cannot prohibit installation or enforce restrictions that increase
                cost by more than $1,000 or reduce efficiency by more than 10%.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Is the federal tax credit still available?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The residential tax credit (Section 25D) expired at the end of 2025.
                If you purchase a system outright, there is no federal credit. With a
                PPA, the provider claims the commercial credit (Section 48E), which is
                how they can offer $0-down solar below utility rates. See our{' '}
                <Link
                  href='/blog/solar-tax-credit-expired-2026-options'
                  className='text-primary hover:underline'
                >
                  full guide on post-tax-credit options
                </Link>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line for Menifee
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Menifee is one of California&apos;s best locations for solar — 3,200
                hours of sunshine per year, flat terrain, solar-ready new
                construction, and an average bill of $247/month on 34.5-cent rates
                climbing 12.9% in 2026. Start with the free wins: optimize your SCE
                rate plan and check CARE/FERA eligibility. Then evaluate whether a
                cash purchase, loan, or PPA makes sense for your situation. Your
                newer home likely has solar-ready infrastructure that reduces costs,
                your HOA can&apos;t block you, and as utility rates keep rising, the
                math gets better every year. The time to act is now.
              </p>
            </div>

            {/* Savings Calculator */}
            <SavingsCalculator defaultUtility="sce" cityName="Menifee" />

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Menifee Homeowner? See Your Options
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
