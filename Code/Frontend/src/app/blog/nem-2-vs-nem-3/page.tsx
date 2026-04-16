import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'NEM 2.0 vs NEM 3.0: What Changed and What It Means for California Solar in 2026',
  description:
    'NEM 3.0 slashed solar export credits by 75-85%. Compare NEM 2.0 vs NEM 3.0 side by side — export rates, payback periods, grandfathering rules, and why solar PPAs make more sense than ever.',
  alternates: {
    canonical: '/blog/nem-2-vs-nem-3',
  },
  openGraph: {
    title:
      'NEM 2.0 vs NEM 3.0: What Changed and What It Means for California Solar in 2026',
    description:
      'NEM 3.0 cut export credits 75-85%. Side-by-side comparison of the old and new net metering rules, and what they mean for going solar in 2026.',
    type: 'article',
    publishedTime: '2026-04-16T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'NEM 2.0 vs NEM 3.0: What Changed and What It Means for California Solar in 2026',
  description:
    'NEM 3.0 slashed solar export credits by 75-85%. Compare NEM 2.0 vs NEM 3.0 side by side — export rates, payback periods, grandfathering rules, and why solar PPAs make more sense than ever.',
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
    '@id': 'https://ratereliefca.com/blog/nem-2-vs-nem-3',
  },
};

export default function NEM2vsNEM3() {
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
                Net Metering &amp; Policy
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                NEM 2.0 vs NEM 3.0: What Changed and What It Means for California Solar in 2026
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-16'>April 16, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>10 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re researching solar in California, you&apos;ve probably
                run into the terms NEM 2.0 and NEM 3.0. The difference between them
                is the single biggest factor affecting solar economics in the state
                right now. Here&apos;s a clear, no-spin breakdown of what changed,
                what it means for your wallet, and whether solar still makes
                financial sense in 2026. Spoiler: it does — but the strategy is
                different now.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What NEM 2.0 Was: The Golden Era of California Solar
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                NEM 2.0 — Net Energy Metering 2.0 — was the framework that made
                California the solar capital of the country. The concept was simple:
                when your solar panels produced more electricity than your home used,
                the excess flowed back to the grid and you received a credit at
                roughly the full retail rate. That meant export credits of $0.30 to
                $0.45 per kWh, depending on your utility and rate plan.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The math was generous. A kWh you sent to the grid at noon was worth
                almost the same as a kWh you pulled from the grid at 8 PM. You could
                oversize your system, bank credits during sunny months, and draw them
                down in winter. Many homeowners saw their annual utility bills drop
                to just the minimum connection charges. Payback periods for purchased
                systems typically ran 5 to 8 years.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What NEM 3.0 Changed: The 75-85% Export Rate Cut
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                On April 15, 2023, California&apos;s new Net Billing Tariff — widely
                called NEM 3.0 — took effect. The CPUC replaced retail-rate export
                credits with values based on the Avoided Cost Calculator, which
                estimates what your exported electricity is actually worth to the
                grid at any given hour.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The result: average export credits dropped to roughly 5 to 8 cents
                per kWh. That&apos;s a 75-85% reduction from NEM 2.0 rates. And
                unlike NEM 2.0&apos;s relatively flat credits, NEM 3.0 export values
                fluctuate by hour, month, and utility. Peak afternoon hours pay
                slightly more, while midday — when solar production is highest and
                the grid is already flooded with solar — export values can drop to
                near zero.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s what that looks like by utility. Under NEM 2.0, PG&amp;E
                customers earned around $0.35-$0.42/kWh for exports. Under NEM 3.0,
                that same export earns roughly 5-8 cents. SCE went from $0.30-$0.38
                to the same 5-8 cent range. SDG&amp;E dropped from $0.38-$0.45 down
                to 5-8 cents. The exact values vary by time of day and season, but
                the magnitude of the cut is consistent across all three major
                investor-owned utilities.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Grandfathering Rules: Who Still Gets NEM 2.0
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your solar system received Permission to Operate (PTO) before
                April 15, 2023, you were grandfathered into NEM 2.0 for 15 to 20
                years from your interconnection date — depending on your utility. You
                keep the old retail-rate export credits for the duration of that
                grandfathering period. Nothing about NEM 3.0 affects you unless you
                make a significant modification to your system.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The key exception: if you substantially expand your system — adding
                panels beyond a certain capacity threshold — the additional capacity
                (or in some cases your entire system) may be moved to NEM 3.0 rates.
                Adding a battery to an existing NEM 2.0 system generally does not
                trigger a switch, but rules vary by utility, so confirm with your
                provider before making changes.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Payback Period: NEM 2.0 vs NEM 3.0 Side by Side
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is where the impact hits hardest for homeowners buying systems
                outright. Under NEM 2.0, typical payback periods were 5 to 8 years
                for a cash purchase. Under NEM 3.0, without a battery, payback
                stretches to 9 to 14+ years. That&apos;s a meaningful difference —
                especially if you&apos;re not planning to stay in your home for 15+
                years.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The extended payback is entirely driven by the lower export value.
                You&apos;re still saving money on every kWh you consume directly
                from your panels. But the kWh you export — which used to be worth
                $0.30-$0.45 — now earns a fraction of that. If your household is
                empty during the day and you&apos;re exporting 50-60% of production,
                the hit is substantial.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why Batteries Changed the NEM 3.0 Equation
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Battery storage is the single most important factor in making NEM 3.0
                economics work. The logic is straightforward: instead of exporting
                midday solar to the grid at 5-8 cents per kWh, you store it in a
                battery and use it yourself during peak evening hours when utility
                rates hit 40-70+ cents per kWh.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                With a properly sized battery, self-consumption rises from roughly
                40-60% (solar only) to 80-90% (solar + battery). Every kWh you keep
                and use yourself retains its full retail value rather than being
                exported at the discounted NEM 3.0 rate. For a household paying $300
                per month, a battery can add $70-$100 in monthly savings compared to
                a solar-only system under NEM 3.0.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                March 2026 Court Ruling: NEM 3.0 Is Here to Stay
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you were holding out hope that NEM 3.0 would be overturned or
                significantly modified, the March 2026 court ruling put that to rest.
                The court upheld the CPUC&apos;s Net Billing Tariff with no major
                modifications. NEM 3.0 is the law of the land for the foreseeable
                future. Waiting for a policy reversal is not a viable strategy.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Meanwhile, utility rates continue climbing. PG&amp;E, SCE, and
                SDG&amp;E have all filed for or received rate increases through 2028.
                Every year you wait, the utility cost you&apos;re trying to offset
                gets higher — but so does the gap between what you pay the utility
                and what you&apos;d pay with solar.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Does Solar Still Make Sense Under NEM 3.0?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Yes — but the strategy has fundamentally shifted. Under NEM 2.0, the
                playbook was &quot;produce as much as possible and export the
                excess.&quot; Under NEM 3.0, the playbook is &quot;produce, store,
                and consume as much as possible yourself.&quot; The economics still
                work because California utility rates are among the highest in the
                nation. Even with reduced export credits, the savings from
                self-consumed solar power — especially with a battery — are
                substantial.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The homeowners who benefit most are those paying $200+ per month to
                their utility, with good roof exposure, and a system that includes
                battery storage. For those homeowners, solar + battery typically
                delivers 30-50% monthly savings compared to utility-only costs.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                The PPA Advantage Under NEM 3.0
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s where things get interesting. The longer payback period
                under NEM 3.0 is a problem if you&apos;re buying a system outright —
                you&apos;re tying up $25,000-$40,000 and waiting 9-14 years to break
                even. But with a Power Purchase Agreement (PPA), the payback period
                is irrelevant to you. The PPA provider owns the system, handles the
                economics, and sells you the power at a fixed rate that&apos;s lower
                than what your utility charges.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                You get panels on your roof at no cost out of pocket. Instead of
                paying your utility a different amount every month and never knowing
                what your bill will be, you pay a fixed monthly payment that&apos;s
                typically 30 to 50% less than your current utility cost. All year
                round, for as long as you live there. The PPA provider takes on the
                NEM 3.0 risk — the longer payback, the battery optimization, the
                export rate fluctuations. You just get a lower, predictable bill.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is arguably why PPAs have become the dominant solar model in
                California since NEM 3.0. The economics shifted in a way that makes
                third-party ownership more attractive for the homeowner than buying
                outright — unless you have the capital, plan to stay 15+ years, and
                want to capture the full long-term value.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                See What NEM 3.0 Solar Looks Like for Your Home
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                The California Rate Relief Program can show you what you&apos;d
                actually save under current NEM 3.0 rules — based on your utility,
                your bill, and your address. Takes 60 seconds.
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
                href='/blog/solar-ev-charging-california'
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
