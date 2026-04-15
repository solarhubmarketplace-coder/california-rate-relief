import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Is Solar Still Worth It Under NEM 3.0 in California? (2026 Guide)',
  description:
    'NEM 3.0 cut solar export credits by 75%. An honest breakdown of the new economics, when solar still works, when it doesn\'t, and how battery storage changes the math.',
  alternates: {
    canonical: '/blog/nem-3-california-still-worth-it',
  },
  openGraph: {
    title:
      'Is Solar Still Worth It Under NEM 3.0 in California? (2026 Guide)',
    description:
      'NEM 3.0 cut export credits 75%. Here\'s an honest look at the new economics and when solar still makes sense.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Is Solar Still Worth It Under NEM 3.0 in California? (2026 Guide)',
  description:
    'NEM 3.0 cut export credits by 75%. An honest breakdown of the new economics, when solar still works, and when it doesn\'t.',
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
    '@id': 'https://ratereliefca.com/blog/nem-3-california-still-worth-it',
  },
};

export default function NEM3StillWorthIt() {
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
                Solar Education
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Is Solar Still Worth It Under NEM 3.0 in California? (2026
                Guide)
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-14'>April 14, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>9 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                When California&apos;s Net Billing tariff — commonly called NEM
                3.0 — took effect in April 2023, it fundamentally changed the
                economics of rooftop solar. Export credits dropped roughly 75%,
                and solar installations fell sharply across the state. Three
                years in, the dust has settled. Here&apos;s an honest look at
                when solar still makes sense under NEM 3.0, when it doesn&apos;t,
                and what the actual numbers look like.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 2.0 vs. NEM 3.0: What Actually Changed
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under the old NEM 2.0 system, when your solar panels produced
                more than your home used, the excess was exported to the grid
                and you received a credit at nearly the full retail rate — around
                30 to 40 cents per kWh. This made oversizing your system a smart
                strategy: produce as much as possible, bank the credits, and your
                utility bill would shrink to almost nothing.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under NEM 3.0, export credits dropped to approximately 5 to 8
                cents per kWh on average (the exact value varies by time of day,
                month, and utility). That means the electricity you send to the
                grid is now worth about one-fifth of what you pay to buy it back
                during peak hours.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This created an asymmetry that didn&apos;t exist before. Under
                NEM 2.0, a kWh exported was worth roughly the same as a kWh
                consumed. Under NEM 3.0, a kWh you use in your home is worth 5
                to 8 times more than a kWh you export. This is the single most
                important thing to understand about solar in 2026.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                You can review the full Net Billing tariff details on the{' '}
                <a
                  href='https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  CPUC&apos;s NEM page
                </a>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why Battery Storage Became Essential
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The NEM 3.0 export/consumption gap is why battery storage went
                from &quot;nice to have&quot; to &quot;essential&quot; almost
                overnight. The logic is straightforward: instead of sending excess
                solar to the grid during the day at 5 to 8 cents per kWh, store
                it in a battery and use it yourself in the evening when utility
                rates can peak at 58-74 cents per kWh (on SCE) or even higher on other utilities.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a battery, you&apos;re keeping the full retail value of
                every kWh your system produces, rather than giving most of it
                away at the low export rate. A properly sized solar + battery
                system can offset 70 to 90% of a household&apos;s grid
                consumption. Without a battery, that drops to roughly 40 to 60%
                because you&apos;re forced to export during the day and buy back
                at night.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The trade-off: a battery adds $10,000 to $15,000 to a purchased
                system (before any SGIP rebates). That&apos;s a significant cost.
                However, with California&apos;s extreme rate differential between
                peak and off-peak — sometimes 30+ cents per kWh apart — the
                battery typically pays for itself in additional savings within 5
                to 7 years. And if you go the PPA or lease route, battery storage
                is typically included at no additional cost to you.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Real Numbers: A Worked Example
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Let&apos;s use a specific example to make this concrete. Take a
                household in Riverside with SCE, using 900 kWh per month (about
                $310/month at current rates).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Solar only (no battery) under NEM 3.0:</strong> A 7 kW
                system produces about 1,000 kWh/month. Without a battery,
                roughly 40% is exported at an average of 6 cents/kWh (earning
                about $24/month in credits) and 60% is consumed directly (saving
                about $186/month at retail rate). Net monthly savings: roughly
                $185-$210. Remaining utility bill: around $100-$125/month
                (including the $24 fixed charge).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Solar + battery under NEM 3.0:</strong> The same 7 kW
                system with a 10-13 kWh battery. The battery captures most of
                what would have been exported and shifts it to evening use.
                Self-consumption rises to 80-90%. Net monthly savings: roughly
                $240-$280. Remaining utility bill: around $50-$80/month
                (including the $24 fixed charge).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The battery adds $70-$80/month in additional savings in this
                scenario. Whether that justifies the $10,000-$15,000 cost depends
                on whether you&apos;re buying (yes, over the long run) or going
                through a PPA (the provider handles the economics for you).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                NEM 2.0 Grandfathering: Are You Already Locked In?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you installed solar before April 15, 2023, you were
                grandfathered into NEM 2.0 for 20 years from your interconnection
                date. If that&apos;s you, none of the NEM 3.0 changes affect you
                — your export credits remain at the old rates. You can verify your
                NEM status by logging into your utility account and checking your
                rate schedule.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                One thing to know: if you significantly expand your existing
                system (adding panels beyond a certain threshold), you may be
                moved to NEM 3.0 for the additional capacity. Check your
                utility&apos;s specific rules before expanding. Adding a battery
                to an existing NEM 2.0 system generally does not trigger a switch,
                but rules vary by utility — confirm before proceeding.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Solar Doesn&apos;t Make Sense Under NEM 3.0
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                NEM 3.0 made the economics worse for certain situations, and
                it&apos;s important to be realistic about when solar may not be
                the right move.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Low electricity usage.</strong> If your monthly bill is
                under $100, the savings from solar (even with a battery) may be
                too small to justify the complexity. The $24 fixed charge and
                minimum delivery fees eat into a larger percentage of small bills.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Solar-only systems (no battery) with high export
                ratios.</strong> If your household is empty during the day and you
                can&apos;t install a battery, you&apos;ll export most of your
                solar at low NEM 3.0 rates. The economics still work but the
                savings are significantly reduced compared to the NEM 2.0 era.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Heavily shaded roofs.</strong> If your roof gets less than
                4 hours of direct sun per day, solar production may be too low to
                justify the installation. Check your home on{' '}
                <a
                  href='https://sunroof.withgoogle.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  Google Project Sunroof
                </a>{' '}
                for a rough estimate.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Short-term homeowners.</strong> If you plan to sell within
                2-3 years, the payback math gets tight for purchased systems.
                PPAs and leases can transfer to the buyer, but they add a step to
                the sales process that some buyers find unappealing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                When Solar Still Makes Strong Financial Sense
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Despite NEM 3.0&apos;s lower export credits, solar still makes
                solid financial sense for a large number of California homeowners.
                The key factors are your utility rate (higher = better savings),
                whether the system includes a battery (strongly recommended under
                NEM 3.0), your daytime and evening electricity usage patterns,
                and your roof&apos;s sun exposure.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re with SDG&E (45.7 cents/kWh), the case is strongest
                because the gap between the utility rate and the solar rate is
                widest. SCE customers (34.5 cents/kWh) and PG&E customers (41.5 cents/kWh) also see strong
                returns, particularly with rate increases in the pipeline through
                2028.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The math is simple: if your fixed solar cost (whether purchased,
                leased, or PPA) plus your remaining utility charges is less than
                what you&apos;d pay the utility without solar, it&apos;s a net
                positive. For most California homeowners paying $200+ per month,
                that threshold is easily met with a properly designed solar +
                battery system.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How to Evaluate Your Specific Situation
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s a practical framework for figuring out if NEM 3.0
                solar works for you.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>1. Know your current cost.</strong> Log into your utility
                account and look at your average monthly bill over the last 12
                months. Don&apos;t just look at summer or winter — use the annual
                average.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2. Check your roof.</strong> Use{' '}
                <a
                  href='https://sunroof.withgoogle.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  Google Project Sunroof
                </a>{' '}
                or get a professional assessment. South-facing roofs with minimal
                shade are ideal. West-facing works well too, especially with
                time-of-use rates (west-facing panels produce more during
                afternoon peak hours).
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>3. Get multiple quotes.</strong> Whether you&apos;re
                buying or going the PPA/lease route, get at least 3 proposals.
                For purchases,{' '}
                <a
                  href='https://www.energysage.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  EnergySage
                </a>{' '}
                is a good starting point. For PPAs and leases, ask about the
                specific per-kWh rate, any annual escalators, battery inclusion,
                and warranty terms.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>4. Insist on battery inclusion.</strong> Under NEM 3.0,
                a solar-only system leaves significant savings on the table.
                Whatever option you choose, make sure a battery is part of the
                proposal. If a provider doesn&apos;t include storage, ask why
                or find one who does.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>5. Compare the total cost.</strong> Calculate your
                estimated monthly solar payment (or amortized purchase cost) +
                remaining utility charges (fixed charge + any grid purchases) vs.
                your current and projected utility-only costs for the next 10-25
                years. Remember: utility rates are projected to keep rising 6-12%
                per year.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The Bottom Line
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                NEM 3.0 changed the strategy from &quot;produce and export&quot;
                to &quot;produce, store, and consume.&quot; Solar without a
                battery is a weaker proposition than it was under NEM 2.0. Solar
                with a battery still delivers 30 to 50% savings for most
                California households paying $200+ per month. The key is getting
                the right system design — maximizing self-consumption through
                battery storage — and choosing the financing structure (cash, loan,
                lease, or PPA) that matches your financial situation and
                homeownership timeline.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Want to See the Numbers for Your Home?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                If the PPA route sounds interesting, the California Rate Relief
                Program can give you a quick eligibility check. No cost, no
                obligation, 60 seconds.
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
                href='/blog/solar-tax-credit-expired-2026-options'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                Previous Article
              </Link>
              <Link
                href='/blog/pge-vs-sce-vs-sdge-rates-compared'
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
