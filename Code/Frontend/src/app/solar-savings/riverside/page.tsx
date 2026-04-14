import type { Metadata } from 'next';
import SavingsCalculator from '@/components/SavingsCalculator';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Sun, Zap, DollarSign, Home, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Solar Savings in Riverside, CA: 2026 RPU Rates, Costs & Your Options',
  description:
    'Riverside residents with RPU pay ~$260/month for electricity. Learn your actual RPU rate, what solar costs in Riverside in 2026, local incentives, HOA rules, and every option to lower your bill.',
  alternates: {
    canonical: '/solar-savings/riverside',
  },
  openGraph: {
    title: 'Solar Savings in Riverside, CA: 2026 RPU Rates, Costs & Options',
    description:
      'Riverside residents pay ~$260/month with Riverside Public Utilities. Here\'s what solar actually costs and saves in your city.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'California Rate Relief Program — Riverside',
  url: 'https://ratereliefca.com/solar-savings/riverside',
  description:
    'Helping Riverside homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.',
  areaServed: {
    '@type': 'City',
    name: 'Riverside',
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
      name: 'How much does solar cost in Riverside in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 11.15 kW solar system in Riverside costs approximately $25,786 before incentives if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to RPU\'s average of approximately 28 cents per kWh.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average electric bill in Riverside with RPU?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riverside residents on Riverside Public Utilities pay an average of approximately $260 per month for electricity, or about $3,120 per year. This is lower than Southern California Edison territory but varies by rate plan and seasonal usage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my HOA block solar panels in Riverside?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Under California\'s Solar Rights Act (Civil Code § 714), HOAs cannot prohibit solar panel installation. They can impose reasonable aesthetic restrictions, but any restriction that increases system cost by more than $1,000 or reduces efficiency by more than 10% is legally unenforceable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of sun does Riverside get?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riverside averages approximately 3,200 hours of sunshine per year with 5.7 peak sun hours per day for fixed-mount solar panels. This is well above the national average and makes Riverside an excellent location for solar energy production.',
      },
    },
  ],
};

export default function RiversideSolarPage() {
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
                Riverside, CA
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Solar Savings in Riverside: What It Actually Costs and What
                You&apos;ll Save in 2026
              </h1>
              <p className='text-lg text-muted-foreground'>
                A data-driven guide for Riverside homeowners with Riverside Public Utilities — your local rates, solar costs, incentives, HOA rules, and every option for lowering your electric bill.
              </p>
            </header>

            {/* Quick Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <Zap className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>28¢</div>
                <div className='text-xs text-muted-foreground'>
                  RPU avg. rate/kWh
                </div>
              </div>
              <div className='bg-card rounded-xl border border-border p-4 text-center'>
                <DollarSign className='h-5 w-5 text-primary mx-auto mb-2' />
                <div className='text-2xl font-bold text-foreground'>$260</div>
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
                <div className='text-2xl font-bold text-foreground'>320K</div>
                <div className='text-xs text-muted-foreground'>
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Riverside is California's county seat, a city of over 320,000 people with a rich history dating back to 1870 and a diverse mix of neighborhoods from historic downtown to modern developments. Unlike many Southern California cities served by Southern California Edison, Riverside is served by Riverside Public Utilities (RPU) — a municipal utility that operates independently. This means Riverside residents benefit from slightly lower electricity rates than nearby SCE territory, but solar economics work differently here. If you&apos;re a Riverside homeowner watching your electric bill climb, here&apos;s a complete breakdown of your utility rates, solar potential, and what you can actually do about rising costs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Riverside Residents Actually Pay for Electricity
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Riverside household on Riverside Public Utilities pays approximately $260 per month for electricity, or about $3,120 per year. While this is lower than nearby SCE territory (which averages ~$319/month), it&apos;s still significantly above the national average due to California&apos;s energy costs and Riverside&apos;s hot summers requiring air conditioning for extended periods.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                RPU&apos;s average residential rate is currently around 28 cents per kWh — about 6 cents lower than SCE&apos;s 34.5 cents. However, RPU also offers time-of-use rates where peak hours (typically 4-9 PM during summer) can reach 35-40 cents per kWh, while off-peak rates may be as low as 18-22 cents. If you&apos;re running air conditioning during peak hours — which most Riverside households are during May through September — you&apos;re paying the highest rate.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Unlike Southern California Edison, RPU as a municipal utility does not have a $24+ monthly fixed charge. This means you pay primarily for what you use, which can be advantageous for solar because every kWh you offset directly reduces your bill. However, RPU rates have been rising gradually, with increases approved through 2027. A typical Riverside household using 800+ kWh per month can expect bills of $280 to $350 during peak summer months.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 1: Check Your RPU Rate Plan (Free, 10 Minutes)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Before considering solar, log into your{' '}
                <a
                  href='https://riversideca.gov/utilities/electric/rates'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  RPU rate plans page
                </a>{' '}
                and verify which rate schedule you&apos;re on. RPU offers several options including a standard tiered rate and time-of-use plans. If you&apos;re on the standard plan, you may benefit from switching to RPU&apos;s TOU schedule, which rewards you for using electricity during off-peak hours.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you can shift heavy electricity use (laundry, dishwasher, EV charging, pool pump) to off-peak hours (before 4 PM or after 9 PM), you can save 10-15% just by being on the right rate plan. In Riverside specifically, pre-cooling your home before 4 PM during summer and running the pool pump in the morning are two of the highest-impact changes. RPU&apos;s website has a rate comparison tool where you can see what you&apos;d pay on each plan based on your last 12 months of usage.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Check If You Qualify for Discounts
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                RPU offers income-based discount programs that many qualifying Riverside households haven&apos;t applied for. The primary program is <strong>LIRA</strong> (Low Income Rate Assistance), which provides a 15-20% discount on your entire bill if your household income is below certain thresholds. Eligibility depends on household size and income — check your qualification status and apply at{' '}
                <a
                  href='https://riversideca.gov/utilities'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  RPU&apos;s website
                </a>.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                RPU also offers programs for customers with critical electricity needs. If anyone in your household relies on electricity-dependent medical equipment (CPAP, home dialysis, powered wheelchair, oxygen concentrator, etc.), contact RPU directly to ask about medical allowance programs, which provide additional kilowatt-hours at your lowest rate tier.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Riverside&apos;s Solar Potential
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Riverside is an excellent location for solar. The city averages 3,200 hours of sunshine per year and 5.7 peak sun hours per day for fixed-mount panels — well above the national average. The relatively low humidity and minimal cloud cover mean consistent, high solar production year-round. Riverside&apos;s location in the Inland Empire, away from coastal marine layer effects, means more direct sunlight than coastal Southern California.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Many Riverside homes do present specific challenges, however. Riverside was founded in 1870, and many neighborhoods feature mature trees planted decades ago for shade and beauty — these same trees can shade roofs significantly. Historic neighborhoods like the Mission Inn area have charming older homes with varied roof orientations. Newer developments (Orangecrest, Woodcrest, Alessandro Heights, and others built in the 1990s-2010s) tend to have better solar potential with newer roofs and more consistent south/west-facing exposure. You can check your specific home&apos;s solar potential for free at{' '}
                <a
                  href='https://sunroof.withgoogle.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  Google Project Sunroof
                </a>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Solar Costs in Riverside (2026 Numbers)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The average Riverside household needs an 11.15 kW solar system to cover their electricity usage. (This is larger than SCE-territory homes because lower RPU rates mean you need to offset more kWh to reach the same dollar savings.) Here&apos;s what that looks like across different options.
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
                        Cash purchase (11.15 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~$25,786
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
                        Solar loan (11.15 kW)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $0
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $210-$280
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        ~10-13 years
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
                        $180-$230
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        Day 1 savings
                      </td>
                    </tr>
                    <tr>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        No solar (RPU only)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        $260+ (rising)
                      </td>
                      <td className='text-center py-3 px-3 text-foreground/80'>
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                Costs are approximate based on 2026 EnergySage data for Riverside County. Actual costs vary by roof, system size, and provider. PPA monthly costs include remaining utility charges (typically minimal with RPU). Note: Payback is longer than SCE territory because RPU rates are lower — you offset fewer dollars per kWh, so the system takes longer to pay for itself in cash terms.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                To compare quotes from local installers for a purchased system,{' '}
                <a
                  href='https://www.energysage.com/local-data/solar-panel-cost/ca/riverside-county/riverside/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage&apos;s Riverside page
                </a>{' '}
                lets you get multiple quotes side by side. Always get at least 3 quotes before committing to any option. Be sure to specify your RPU utility when requesting quotes.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                HOA Rules for Solar in Riverside
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Many Riverside neighborhoods have HOAs, and homeowners often worry about getting approval for solar panels. Here&apos;s what you need to know: under California&apos;s Solar Rights Act (Civil Code § 714), your HOA <strong>cannot prohibit</strong> you from installing solar panels. They can impose reasonable aesthetic restrictions (like panel placement preferences or requiring matching-colored frames), but any restriction that increases your system cost by more than $1,000 or reduces efficiency by more than 10% is legally unenforceable.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, most Riverside HOAs have streamlined their solar approval process because so many homeowners are going solar. You typically submit an architectural review application, and if the HOA doesn&apos;t respond with a written denial within 45 days, your application is deemed approved by default. If your HOA gives you pushback, the law is clearly on your side — and they can be liable for damages plus your attorney&apos;s fees if they unreasonably block your installation.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Riverside Public Utilities Net Metering Program
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Riverside is <strong>not</strong> under California&apos;s NEM 3.0 (Net Billing) tariff because RPU is a municipal utility, not an investor-owned utility like SCE or SDG&E. Instead, RPU has its own net metering program with different terms. Under RPU&apos;s net metering, excess solar energy you send back to the grid may earn credit at a rate closer to RPU&apos;s retail rate — better than the 5-8 cents per kWh under NEM 3.0, but potentially lower than the full rate depending on your specific agreement.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is an important distinction: Riverside solar systems don&apos;t suffer from the same net metering penalty that SCE customers face. Your savings won&apos;t be quite as dramatic as in NEM 2.0 territory (where excess solar was credited at the full retail rate), but they&apos;re better than NEM 3.0. Contact RPU directly or ask your solar installer about their current net metering agreement to understand the exact terms.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Battery storage is less critical in Riverside than in SCE territory, but may still make sense if you want to further reduce grid reliance or protect against outages. Check{' '}
                <a
                  href='https://www.selfgenca.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  selfgenca.com
                </a>{' '}
                to see if California&apos;s Self-Generation Incentive Program (SGIP) offers any rebates for battery storage in the Riverside area.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Solar Doesn&apos;t Make Sense in Riverside
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar is a strong fit for most Riverside homes, but there are situations where it may not be the right move. If your monthly bill is under $100 (rare in Riverside, but possible for very small homes or vacation properties), the savings may not justify the complexity. If your roof is heavily shaded by mature trees — common in Riverside&apos;s established neighborhoods — production will be significantly reduced. Check Google Project Sunroof first to see your home&apos;s specific shading pattern. If your roof needs replacement in the next 3-5 years, handle that before installing panels. And if you&apos;re planning to sell within 1-2 years, the timing may not work (though PPAs can transfer to the buyer).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Also consider that because RPU rates are lower than SCE, your payback period will be longer. A cash-purchased system might take 6.5 years instead of 5.5 years to pay for itself. For some homeowners, this extended timeline doesn&apos;t align with their financial goals, and that&apos;s okay — the math should work for your situation, not in abstract terms.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Riverside-Specific Tips
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Mature tree shade:</strong> Riverside&apos;s established neighborhoods are beautiful partly because of mature trees planted 50+ years ago. Before committing to solar, assess whether trees will shade your roof morning, afternoon, or year-round. Winter sun angles are lower, so winter shading may be less of an issue, but summer shading (peak production season) is what matters. Consider selective trimming if appropriate, but respect your neighbors and HOA rules.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Older electrical infrastructure:</strong> Many Riverside homes, especially those in historic neighborhoods built before 1980, may have older electrical panels and wiring. Your solar installer will need to assess whether your panel can handle solar (typically a 200-amp panel is needed). Older homes may require upgrades before solar installation, adding $1,500-$3,000 to your total cost. Get this evaluated during your initial site visit.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>UC Riverside and institutional areas:</strong> If you live near UC Riverside or other institutional properties, be aware that some Riverside neighborhoods have specific building codes or historic preservation rules beyond standard HOA restrictions. Verify with the city of Riverside&apos;s planning department before ordering your system.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Summer cooling loads:</strong> Riverside summers are hot — temperatures regularly exceed 100°F from June through September. If you have air conditioning that runs much of the day, your summer bills can be 40-50% higher than your winter baseline. Solar offsets these high-usage months perfectly. Consider that aggressive usage during peak afternoon hours (when solar production is also highest) is actually your best scenario for solar savings.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How much does solar cost in Riverside in 2026?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                A typical 11.15 kW system costs approximately $25,786 before incentives if purchased outright. With a PPA, there is no upfront cost — you pay a fixed per-kWh rate (typically 18-25 cents) for the energy produced on your roof, compared to RPU&apos;s current average of approximately 28 cents per kWh. The system is larger than those in SCE territory because lower RPU rates mean a larger system is needed to achieve equivalent dollar savings.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                What is the average electric bill in Riverside with RPU?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Riverside residents on Riverside Public Utilities pay approximately $260 per month on average, or about $3,120 per year. Summer bills can be significantly higher for homes with central air conditioning or pools, often reaching $350-$400 during peak months. Winter bills are typically $150-$200.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Is Riverside served by SCE or RPU?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Riverside is served by Riverside Public Utilities (RPU), a municipal utility owned by the city of Riverside. This is different from neighboring areas served by Southern California Edison (SCE). RPU rates are slightly lower than SCE (approximately 28¢ vs. 34.5¢ per kWh), and RPU has its own net metering program rather than NEM 3.0.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Can my HOA block solar panels in Riverside?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                No. California&apos;s Solar Rights Act protects your right to install solar. HOAs can request reasonable aesthetic changes, but cannot prohibit installation or impose restrictions that increase cost by more than $1,000 or reduce efficiency by more than 10%.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Is the federal solar tax credit still available in Riverside?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The residential tax credit (Section 25D) expired at the end of 2025. If you buy a system outright, there is no federal credit. However, the commercial credit (Section 48E) is still available, which is how PPA providers can offer $0-down solar at rates below utility prices. See our{' '}
                <Link
                  href='/blog/solar-tax-credit-expired-2026-options'
                  className='text-primary hover:underline'
                >
                  full guide on post-tax-credit options
                </Link>.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                How does net metering work in Riverside with RPU?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Riverside Public Utilities operates its own net metering program, separate from California&apos;s NEM 3.0. Under RPU&apos;s program, excess solar energy sent to the grid may be credited at a rate closer to RPU&apos;s retail rate, which is better than NEM 3.0 but varies by agreement. Contact RPU or your solar installer for specific terms. Unlike SCE customers, you don&apos;t face the severe net metering penalty of NEM 3.0.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line for Riverside
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With 5.7 peak sun hours per day, RPU rates at 28 cents (lower than SCE), and average bills around $260/month, Riverside is still an excellent city for solar savings — though the economics are slightly different than SCE territory. The lower utility rates mean your payback period is longer (approximately 6.5 years for a cash purchase vs. 5.5-6 for high-rate SCE areas), but you still come out ahead in the long term. Start with the free stuff — optimize your RPU rate plan and check for LIRA eligibility. Then evaluate whether a cash purchase, loan, or PPA makes sense for your situation. Your HOA can&apos;t stop you, the sun is on your side in the Inland Empire, and the math still works in your favor.
              </p>
            </div>

            {/* Savings Calculator */}
            <SavingsCalculator defaultUtility="rpu" cityName="Riverside" />

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Riverside Homeowner? See Your Options
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
                  href='/blog/rpu-riverside-rates-and-programs'
                  className='block text-primary hover:underline font-medium'
                >
                  RPU Rates and Assistance Programs: A Riverside Guide →
                </Link>
                <Link
                  href='/blog/municipal-utilities-vs-investor-owned'
                  className='block text-primary hover:underline font-medium'
                >
                  Municipal Utilities vs. Investor-Owned: How Net Metering Differs →
                </Link>
                <Link
                  href='/blog/solar-payback-calculation'
                  className='block text-primary hover:underline font-medium'
                >
                  Why Your Solar Payback Period Depends on Your Utility →
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
