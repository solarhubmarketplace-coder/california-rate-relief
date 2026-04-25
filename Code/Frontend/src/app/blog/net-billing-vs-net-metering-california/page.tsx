import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title:
    'Net Billing vs Net Metering: The California Solar Difference, Explained',
  description:
    "Net metering and net billing sound similar but pay you very differently. Here is what California's NEM 3.0 Net Billing tariff changed, how the math now works, and what it means for your solar bill.",
  alternates: {
    canonical: '/blog/net-billing-vs-net-metering-california',
  },
  openGraph: {
    title:
      'Net Billing vs Net Metering: The California Solar Difference, Explained',
    description:
      "The difference between net metering and net billing — and what it means for California solar owners under NEM 3.0.",
    type: 'article',
    publishedTime: '2026-04-23T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Net Billing vs Net Metering: The California Solar Difference, Explained',
  datePublished: '2026-04-23',
  dateModified: '2026-04-23',
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
    '@id':
      'https://ratereliefca.com/blog/net-billing-vs-net-metering-california',
  },
};

export default function NetBillingVsNetMetering() {
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
            <nav className='mb-8'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'
              >
                <ArrowLeft className='h-4 w-4' />
                Back to Blog
              </Link>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                California Solar Policy
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Net Billing vs Net Metering: The California Solar
                Difference, Explained
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-23'>April 23, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>7 min read</span>
                </div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                People use &quot;net metering&quot; and &quot;net
                billing&quot; interchangeably, but in California they&apos;re
                two completely different compensation systems, and the
                difference is worth tens of thousands of dollars over the
                life of a solar system. The short version: net metering
                credits your exported solar at close to the retail rate you
                pay for electricity; net billing credits it at a much lower
                avoided-cost rate. California switched from net metering to
                net billing for new solar interconnections in April 2023,
                under a rule called NEM 3.0. Here&apos;s what actually
                changed and what it means for a California homeowner.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Net Metering in One Paragraph
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Net metering is a compensation structure where every kWh
                your solar system exports to the grid earns you a credit at
                (approximately) the same retail rate you pay to buy a kWh
                from the utility. Export 10 kWh at 40 cents per kWh during
                the day, get $4 in credit. Consume 10 kWh at 40 cents per
                kWh at night, pay $4. The meter essentially runs backward,
                and at the end of the billing cycle you owe the difference.
                If you exported more than you used, you either roll the
                credit forward or get a small true-up payment at the end of
                the year. This was California&apos;s NEM 2.0 system from 2016
                through April 2023.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Net Billing in One Paragraph
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Net billing is a compensation structure where exports are
                valued at an avoided-cost rate rather than the retail rate.
                In California, that rate is roughly 5 to 8 cents per kWh on
                average — about one-fifth of what you pay the utility for
                the same kWh you buy back in the evening. Your consumption
                and your exports are tracked and billed separately.
                You&apos;re buying electricity from the utility at 40 cents
                per kWh and selling electricity back to the utility at 6
                cents per kWh. This is California&apos;s current NEM 3.0 /
                Net Billing Tariff, in effect for all new solar
                interconnections since April 15, 2023.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why the Distinction Matters So Much
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under net metering, oversizing your system was a smart
                strategy: produce as much as possible, bank the credits at
                retail value, and your utility bill would shrink to almost
                nothing. The electricity you exported was worth the same as
                the electricity you consumed.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Under net billing, that strategy breaks. A kWh you use
                inside your home is worth 5 to 8 times more than a kWh you
                export. Every kWh of solar production that gets exported at
                6 cents per kWh is a kWh you could have been using yourself
                at 40 cents per kWh. The new optimum is self-consumption —
                use your solar in real time or store it in a battery for
                use later — not export.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                For the same 7 kW system, a net-metered (NEM 2.0) system
                offsets roughly 95% of grid consumption, while a
                net-billed (NEM 3.0) solar-only system offsets only 40 to
                60%. Adding a battery to the NEM 3.0 system brings self-
                consumption back up to 70-90%, restoring most — but not
                all — of the economics.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Are You on Net Metering or Net Billing?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your solar system was interconnected (Permission to
                Operate granted by your utility) before April 15, 2023,
                you&apos;re on the old NEM 2.0 net metering structure and
                you&apos;re grandfathered in for 20 years from your
                interconnection date. Your export credits stay at retail
                rate regardless of what happens with new policy.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your solar was interconnected on or after April 15,
                2023, you&apos;re on NEM 3.0 / Net Billing. Your export
                credits are at the avoided-cost rate.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                You can verify your tariff on your utility bill — PG&amp;E,
                SCE, and SDG&amp;E all list the applicable NEM tariff on
                statements for customers with rooftop solar. If you
                can&apos;t tell, call your utility or log into your online
                account.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Can You Expand a Net-Metered System Without Losing
                Grandfathering?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Mostly, yes — but with limits. You can generally add a
                battery to an existing NEM 2.0 system without triggering a
                switch to net billing. You can also usually add a small
                amount of new panel capacity without triggering the switch,
                though the exact threshold varies by utility (typically 1
                kW or 10% of existing capacity, whichever is larger). Go
                above that threshold and the additional capacity moves to
                NEM 3.0 while the original system stays on NEM 2.0 — a
                split-tariff situation the utilities will handle but which
                adds billing complexity.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What About NEM 1.0?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                NEM 1.0 was the original California net metering rule in
                effect from the early 2000s through 2016. Systems
                interconnected under NEM 1.0 are grandfathered in for 20
                years from their interconnection date — the same
                protection structure as NEM 2.0. Practically, NEM 1.0
                systems from 2010-2015 are approaching the end of their
                grandfather periods in the mid-2030s. When a NEM 1.0
                grandfather period expires, those customers transition to
                whatever the current tariff is at that time.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Does Solar Still Work Under Net Billing?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Yes, for most California homeowners — with a battery.
                Without a battery, a NEM 3.0 solar-only system still offsets
                your daytime consumption and provides partial evening
                offset via the low export credits, but the payback stretches
                from 7-9 years (NEM 2.0) to 12-15 years. With a battery,
                self-consumption rises and payback stays in the 9-12 year
                range. For the details on whether solar is worth it under
                the new tariff, see our full{' '}
                <Link
                  href='/blog/nem-3-california-still-worth-it'
                  className='text-primary hover:underline'
                >
                  NEM 3.0 worth-it analysis
                </Link>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Frequently Asked Questions
              </h2>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Are net metering and net billing the same thing?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                No. Net metering credits exports at retail rate (roughly
                equal to what you pay for electricity). Net billing
                credits exports at avoided cost (much lower — 5 to 8 cents
                per kWh in California). They are different compensation
                structures with very different economics.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Which is better for solar owners?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Net metering is significantly better for solar owners.
                Net billing reduces the value of exported solar by roughly
                75-80% compared to net metering. Homeowners who were
                grandfathered under NEM 2.0 will see dramatically better
                economics than NEM 3.0 customers for the same system.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Will net billing change again?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                The CPUC reviews the net billing tariff periodically. AB
                942 (2025) and other legislative proposals affect specific
                provisions like transferability at home sale, but the core
                export-at-avoided-cost structure is unlikely to reverse
                back to retail-rate net metering in the near term.
              </p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>
                Does my utility have net metering or net billing?
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                PG&amp;E, SCE, and SDG&amp;E all operate under the same
                CPUC-ordered net billing tariff (NEM 3.0) for new solar
                customers since April 2023. Municipal utilities like LADWP
                and SMUD have their own compensation rules that differ from
                the big three IOUs — check your specific utility&apos;s
                current solar tariff.
              </p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Want to See What NEM 3.0 Looks Like For Your Home?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                The California Rate Relief Program runs the numbers for
                your specific utility, usage, and roof — including what a
                solar + battery system would actually save under the new
                net billing tariff.
              </p>
              <Link
                href='/#qualify'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Check My Eligibility
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
