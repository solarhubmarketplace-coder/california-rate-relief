import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What Is NEM 3.0 in California? Plain-English Explainer',
  description: "NEM 3.0 (the Net Billing Tariff) replaced California net metering in April 2023. Here is what NEM 3.0 actually is, how it works, and what it means for new California solar customers.",
  alternates: { canonical: '/blog/what-is-nem-3-california' },
  openGraph: { title: 'What Is NEM 3.0 in California? Plain-English Explainer', description: 'A plain-English explanation of California NEM 3.0.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'What Is NEM 3.0 in California? Plain-English Explainer',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/what-is-nem-3-california' },
};

export default function WhatIsNem3() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8'><Link href='/blog' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Blog</Link></nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>California Solar Policy</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>What Is NEM 3.0 in California? Plain-English Explainer</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                NEM 3.0 — officially the Net Billing Tariff (NBT) — is the rule that determines how California utilities credit homeowners for solar electricity they export to the grid. It replaced the older NEM 2.0 program for all new residential solar interconnections starting April 15, 2023. The short version: exported solar is now worth much less than it used to be, which changes how California solar systems should be designed.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The One-Sentence Version</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                NEM 3.0 pays you about 5-8 cents per kWh for electricity you export to the grid, while the utility charges you 35-46 cents per kWh for electricity you buy back.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Why &quot;Net Billing&quot; Instead of &quot;Net Metering&quot;</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The official name change is meaningful. Under NEM 2.0, your utility meter effectively ran backward when you exported solar — it <em>net metered</em> your consumption against your exports at roughly the same rate. Under NEM 3.0, the meter tracks consumption and export separately, and bills each at different rates. You&apos;re buying electricity retail and selling it wholesale. That&apos;s what &quot;net billing&quot; means.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Why NEM 3.0 Exists</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The California Public Utilities Commission (CPUC) that designed NEM 3.0 argued that NEM 2.0&apos;s retail-rate credits were a subsidy — solar owners were avoiding their share of grid infrastructure costs, which got passed to non-solar utility customers. Solar industry groups argued that retail-rate credit was proper compensation for clean, distributed generation.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The compromise that landed in NEM 3.0: export credits dropped to avoided-cost (what the utility would pay a generator for the same electron from a power plant), grandfathering extended to 20 years for existing NEM 2.0 customers, and the new tariff explicitly encourages battery-paired systems via higher credits during grid-strain hours.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>How NEM 3.0 Credits Work</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under NEM 3.0, every kWh you export to the grid earns a credit based on the &quot;Avoided Cost Calculator&quot; (ACC) rate for that specific hour. The rates vary by hour of day, month, and year — generally low during the day (lots of solar on the grid already) and higher during peak demand hours (late afternoon/evening). The average across the year works out to 5-8 cents per kWh for most California customers.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Critically, a battery that discharges to the grid during peak hours earns the peak-hour ACC rate — which can exceed the retail rate in some hours. That&apos;s the mechanism by which NEM 3.0 rewards battery-paired systems.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What NEM 3.0 Means For New Solar Customers</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re installing solar in California in 2026, you&apos;re on NEM 3.0. That means three practical things:
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>1. Battery storage is essentially required for good economics.</strong> A solar-only system under NEM 3.0 exports most of its production at the low credit rate. A solar + battery system captures that production for your own use.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>2. System design should prioritize self-consumption.</strong> West-facing panels (afternoon peak), battery sizing matched to evening load, smart load shifting (running pool pumps and dishwashers during solar hours) — all matter more under NEM 3.0.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>3. Payback timelines are longer but the economics still work.</strong> Solar-only NEM 3.0 payback: 12-15 years. Solar + battery NEM 3.0 payback: 9-12 years. Compared to NEM 2.0&apos;s 7-9 year payback, it&apos;s worse — but compared to doing nothing and paying California utility rates for the next 25 years, it&apos;s still clearly a positive.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>NEM 3.0 vs NEM 2.0 (If You&apos;re Grandfathered)</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your solar was interconnected before April 15, 2023, you&apos;re on NEM 2.0 and grandfathered for 20 years from your interconnection date. Nothing about NEM 3.0 changes your economics. For a detailed NEM 2.0 vs NEM 3.0 comparison, see our{' '}<Link href='/blog/nem-2-vs-nem-3-california' className='text-primary hover:underline'>side-by-side breakdown</Link>.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Which Utilities Use NEM 3.0?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The CPUC-ordered Net Billing Tariff applies to California&apos;s three large investor-owned utilities: PG&amp;E, SCE, and SDG&amp;E. Municipal utilities (LADWP, SMUD, Riverside Public Utilities, Glendale Water &amp; Power, etc.) set their own solar compensation rules and are not directly bound by NEM 3.0 — check your specific utility&apos;s tariff.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Is NEM 3.0 the same as the Net Billing Tariff?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. &quot;NEM 3.0&quot; is industry shorthand. &quot;Net Billing Tariff&quot; or &quot;NBT&quot; is the CPUC&apos;s official name.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>When did NEM 3.0 start?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Interconnection applications submitted on or after April 15, 2023 are under NEM 3.0.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Can I avoid NEM 3.0?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Not for new solar interconnections in California&apos;s three major utility territories. Existing NEM 2.0 customers are grandfathered; new customers are on NEM 3.0.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Will NEM 3.0 change again?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>The CPUC reviews the tariff periodically. Industry groups continue to push for higher export credits. Material changes would come via another CPUC proceeding and typically take 1-2 years to implement. See our{' '}<Link href='/blog/nem-3-california-timeline' className='text-primary hover:underline'>NEM 3.0 timeline</Link>{' '}for the current policy status.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Want to See How NEM 3.0 Affects Your Home?</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief runs the numbers for your specific utility and usage under the current Net Billing Tariff. Free eligibility check in 60 seconds.</p>
              <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Check My Eligibility<ArrowRight className='h-4 w-4' /></Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
