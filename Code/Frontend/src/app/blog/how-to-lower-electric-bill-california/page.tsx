import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'How to Lower Your Electric Bill in California (2026 Guide)',
  description:
    'Lower your California electric bill immediately: CARE discounts, TOU rate optimization, smart thermostat rebates, Medical Baseline, and more. Step-by-step guide.',
  alternates: {
    canonical: '/blog/how-to-lower-electric-bill-california',
  },
  openGraph: {
    title:
      'How to Lower Your Electric Bill in California (2026 Guide)',
    description:
      'Proven strategies to lower your California electric bill: CARE, FERA, TOU optimization, efficiency upgrades, and solar. Updated for 2026.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'How to Lower Your Electric Bill in California (2026 Guide)',
  description:
    'Complete guide to lowering your California electric bill with CARE, FERA, TOU optimization, smart thermostats, energy efficiency, and solar options.',
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
    '@id': 'https://ratereliefca.com/blog/how-to-lower-electric-bill-california',
  },
};

export default function HowToLowerElectricBillCalifornia() {
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
                How to Lower Your Electric Bill in California (2026 Guide)
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
                California electric rates are among the highest in the nation, and they keep rising. But there&apos;s good news: you have more control over your bill than you think. Whether you want immediate relief (free or low-cost changes) or longer-term solutions, this guide covers every lever you can pull to lower what you pay. From CARE and FERA discounts to time-of-use rate optimization to solar, we&apos;ll walk through the strategies in order of effort and impact.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 1: Check Your Rate Plan First (Free, 10 Minutes)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Many California households are on the wrong rate plan for their usage pattern. Utilities offer multiple rate schedules, and the one you&apos;re on might not be the cheapest. PG&E, SCE, and SDG&E all provide free rate comparison tools that analyze your last 12 months of actual usage and recommend which plan saves the most money.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Log into your utility account online, find the &quot;Compare Rate Plans&quot; or &quot;Rate Plan Comparison&quot; section, and let the tool show you what you&apos;d pay under each available plan. If you can shift heavy electricity use away from peak hours (like running your dishwasher after 9 PM or pre-cooling your house before 4 PM), switching to a time-of-use (TOU) plan often saves 10-15% with zero upfront cost.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 2: Apply for CARE and FERA Discounts (Free, 15 Minutes to Apply)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your household income is below certain thresholds, you automatically qualify for massive bill reductions that most people don&apos;t know exist.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>CARE (California Alternate Rates for Energy):</strong> Provides a 30-38% discount on your entire electric bill. Income limits vary by household size, but roughly: single person ≤ $28,200/year, two people ≤ $42,300, three people ≤ $53,650, four people ≤ $61,000. If you qualify, a $300 monthly bill becomes $186-$210.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>FERA (Family Electric Rate Assistance):</strong> An 18% discount for families of three or more whose income is 100-150% of CARE limits. If you don&apos;t qualify for CARE but have a family, check FERA — it&apos;s easy to overlook.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Apply through your utility&apos;s website (search &quot;CARE FERA [your utility]&quot;) or call your utility directly. You&apos;ll need recent pay stubs or tax returns to prove income. If approved, the discount starts within 1-2 weeks.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 3: Check for Medical Baseline (Free if You Qualify)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If anyone in your household relies on medical equipment that requires electricity to run (CPAP machine, home dialysis, ventilator, electric wheelchair, nebulizer, etc.), you may qualify for Medical Baseline. This program gives you extra electricity at the lowest baseline rate instead of the higher tiered rates.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                You&apos;ll need a doctor&apos;s statement confirming the medical need. Once approved, you get a specified amount of &quot;baseline&quot; kWh per day at the cheapest rate tier, with any usage above that at regular rates. For households with serious medical equipment, this can save $30-$100+ per month.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 4: Optimize Your Time-of-Use (TOU) Behavior
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California utilities use time-of-use rates, meaning electricity costs different amounts depending on time of day. Peak hours (typically 4-9 PM) have rates 2-3× higher than off-peak hours. This is the biggest lever you have for immediate savings.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Immediate actions (free):</strong>
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                • Pre-cool your house to 72-74°F by 3:30 PM before peak rates hit at 4 PM, then let the thermostat drift up to 76-78°F during peak hours. This single move saves 10-20% for many households.
                <br />
                • Run dishwasher, laundry, and pool pump before 4 PM or after 9 PM.
                <br />
                • Charge your EV overnight (off-peak) instead of during peak hours.
                <br />
                • Avoid cooking with the oven during peak hours — use microwave or stovetop instead.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>With a smart thermostat (~$250-$350):</strong> Devices like Nest or Ecobee can automate pre-cooling so you don&apos;t have to remember. Some utilities offer $50-$150 rebates on smart thermostats — check your utility&apos;s website before buying.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 5: Quick Energy Efficiency Wins
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Air conditioning is the single biggest electricity driver in California, accounting for 40-60% of summer consumption. Cheap efficiency upgrades compound:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Weatherstripping and air sealing (~$100):</strong> Seal gaps around doors, windows, and vents with weatherstripping. This reduces AC load, especially on very hot days.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Attic insulation upgrades (~$1,500-$3,000, with financing):</strong> If your attic insulation is thin (R-11 or less), upgrading to R-38 or higher can reduce cooling loads by 15-25%. Many energy efficiency financing programs (like GoGreen) offer low-interest loans that you pay back through electricity savings.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>LED lighting throughout (~$200-$400):</strong> LED bulbs use 75% less electricity than incandescent and last 10+ years. The payback is typically 1-2 years. Many utilities offer rebates on bulk LED purchases.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Window films or reflective window treatments (~$200-$500):</strong> Reducing solar heat gain through west-facing windows can cut cooling costs 5-10%.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Step 6: The Solar Option (Long-Term Protection)
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If the above strategies aren&apos;t enough, or you want to protect yourself against future rate increases (which are already approved through 2028 in most of California), solar is worth exploring.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Solar PPA (no upfront cost):</strong> A third party owns the solar system on your roof and you pay only for the electricity it produces. Typical rates are 8-15 cents per kWh (with 1-3% annual increases) — typically 30-50% below utility rates. No tax credit to claim, but you don&apos;t own the system or take on maintenance risk.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Solar loan or purchase:</strong> Buy the system outright or finance it with a loan. You own it, claim all tax benefits (though the residential ITC expired end of 2025, so you won&apos;t get a federal credit), and benefit from all future electricity cost increases. Payback is typically 9-14 years without the federal credit.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Community solar:</strong> If your roof isn&apos;t suitable (too much shade, HOA restrictions, orientation), community solar lets you subscribe to a share of a nearby solar farm and get bill credits. Availability varies by utility.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Solar Doesn&apos;t Make Sense
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Solar isn&apos;t the right answer for everyone. It generally doesn&apos;t make financial sense if your bill is under $100/month (small savings), if you&apos;re selling your home in the next 2-3 years (though a PPA can transfer to the buyer), if your roof has heavy shade from trees or buildings that you can&apos;t remove, or if your roof needs replacement in the next 5 years (do the roof first, then solar).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Use Google&apos;s free{' '}
                <a
                  href='https://sunroof.withgoogle.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  Project Sunroof tool
                </a>{' '}
                to get a rough estimate of your home&apos;s solar potential before you talk to anyone.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Layered Approach
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The most effective bill reduction strategy is layered. Don&apos;t pick one. Apply for CARE/FERA if you qualify (potential 30-40% reduction). Optimize your rate plan and TOU behavior (another 10-15%). Add weatherstripping and attic insulation (5-15% more). Then evaluate solar as the long-term anchor that protects you against future increases.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                A household that combines CARE, TOU optimization, efficiency upgrades, and solar can reduce their effective electricity cost by 60-70% compared to baseline. That&apos;s not unusual — it&apos;s the result of using multiple tools in sequence.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Your California electric bill doesn&apos;t have to be a fixed cost. Start with the free moves: check your rate plan, apply for CARE/FERA, optimize your TOU behavior, and check for Medical Baseline eligibility. Those alone can save $50-$150+ per month. Then layer in $1,000-$3,000 efficiency upgrades (insulation, weatherstripping, smart thermostat) for additional 10-20% reductions. Finally, evaluate solar (PPA, loan, or purchase) as the long-term lock on your energy cost. In 2026, there&apos;s no single solution — it&apos;s the combination that works.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Want to Explore Your Full Options?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                The California Rate Relief Program helps you assess your bill reduction potential and connect with specialists who can help. Free, no obligation.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Get Your Assessment
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
                href='/blog/is-solar-worth-it-california-2026'
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
