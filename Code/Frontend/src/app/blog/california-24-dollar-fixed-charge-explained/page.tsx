import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';
import { defaultCrumbs } from '@/lib/breadcrumbs';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

export const metadata: Metadata = {
  title: "California's New $24 Fixed Charge, Explained",
  description: "PG&E, SCE and SDG&E added a roughly $24 monthly fixed charge starting late 2025 into 2026 — what it is and what it means for solar.",
  alternates: {
    canonical: '/blog/california-24-dollar-fixed-charge-explained',
  },
  openGraph: {
    title:
      'The New $24 Fixed Charge on Your California Electric Bill, Explained',
    description:
      'Everything you need to know about California\'s new monthly fixed charge — what it is, who pays it, and how it changes the math on solar.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
  },
};

// Breadcrumb: Home / <topic hub> / this post (Block 5 section 5.6). One list
// feeds both the visible trail and the BreadcrumbList schema.
const CRUMBS = defaultCrumbs('/blog/california-24-dollar-fixed-charge-explained');
const CRUMB_LABEL = 'The $24 fixed charge explained';

export default function FixedChargeExplained() {
  return (
    <PublicLayout breadcrumbLabel={CRUMB_LABEL} breadcrumbParents={CRUMBS}>
      <ArticleJsonLd variant="Article" domain="crr" headline={"The New $24 Fixed Charge on Your California Electric Bill, Explained"} url="https://ratereliefca.com/blog/california-24-dollar-fixed-charge-explained" datePublished="2026-04-14" dateModified="2026-09-22" description={"PG&E, SCE, and SDG&E added a ~$24/month fixed charge to every residential bill. Learn exactly what it is, why it exists, who pays less, and how it affects solar savings."} />
      <Header />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <BreadcrumbTrail crumbs={CRUMBS} current={CRUMB_LABEL} className='mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground' />

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Utility Rates
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                The New $24 Fixed Charge on Your California Electric Bill,
                Explained
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-14'>April 14, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>6 min read</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                PG&amp;E, SCE and SDG&amp;E all added a new monthly fixed
                charge of approximately $24 to residential electric bills,
                phased in starting late 2025 into early 2026. It shows up as
                its own line item, separate from usage charges. Below: what
                it is, why it exists, whether you can reduce it, and how it
                changes the math on solar.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="California $24 fixed charge and solar comparison" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Is It?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The fixed charge is a flat monthly fee that appears on your bill
                regardless of how much electricity you use. Use 50 kWh or 1,500
                kWh — you pay the same $24. It&apos;s separate from your per-kWh
                usage charges.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The charge was authorized by the California legislature through AB
                205, signed into law in 2022, and implemented by the California
                Public Utilities Commission (CPUC) starting in late 2025. You can
                read the full CPUC decision on the{' '}
                <a
                  href='https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/rate-reform'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  CPUC Rate Reform page
                </a>
                .
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This restructuring was ordered in CPUC Decision D.24-05-028,
                issued May 9, 2024. The decision states it &quot;authorizes all
                investor-owned electric utilities to change the structure of
                residential customer bills in accordance with Assembly Bill
                205, Stats. 2022, ch. 61&quot; — confirming the connection some
                searchers already suspect (see &quot;Where AB 205 Fits In&quot;
                below).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Why Does It Exist?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The stated purpose is to make electricity pricing more
                &quot;equitable.&quot; The idea: by shifting some grid maintenance
                costs from per-kWh charges to a flat fee, the per-kWh rate drops
                slightly for everyone. In theory, this helps low-usage households
                pay less overall.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                In practice, the per-kWh reduction has been modest — roughly 2 to
                5 cents per kWh depending on the utility and rate plan. For
                households that use a moderate amount of electricity (600+ kWh per
                month, which is most households with air conditioning), the net
                effect is a higher total bill.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Critics of the fixed charge argue it penalizes energy conservation
                — if you invest in efficiency upgrades to reduce your usage,
                you&apos;re still stuck paying the $24 every month. Supporters
                argue it more fairly distributes the cost of maintaining grid
                infrastructure.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Changed on the Per-kWh Side
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                D.24-05-028 directs that &quot;the revenues from fixed charges
                will be applied to reduce volumetric rates equally across all
                time-of-use periods&quot; — the flat charge is meant to
                replace, not add to, part of what used to be billed per kWh.
                SDG&amp;E&apos;s own page quantifies this for its territory:
                customers &quot;may pay about 10% less per kWh for the energy
                you use (roughly 5 cents per kWh on electric delivery).&quot;
                PG&amp;E&apos;s own page confirms the same direction — &quot;the
                price per kWh for electricity is lowered... so you are paying
                less for the electricity you use&quot; — without stating a
                specific cents-per-kWh figure. Whether the fixed charge nets
                out to more or less on a given bill still depends on how much
                electricity that account uses.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How Much Is It by Utility?
              </h2>

              {/* Fixed Charge Comparison Table */}
              <div className='overflow-x-auto mb-8'>
                <table className='w-full border-collapse text-sm'>
                  <thead>
                    <tr className='border-b-2 border-border'>
                      <th className='text-left py-3 pr-4 font-bold text-foreground'>
                        Utility
                      </th>
                      <th className='text-center py-3 px-4 font-bold text-foreground'>
                        Standard
                      </th>
                      <th className='text-center py-3 px-4 font-bold text-foreground'>
                        CARE
                      </th>
                      <th className='text-center py-3 px-4 font-bold text-foreground'>
                        FERA
                      </th>
                      <th className='text-center py-3 px-4 font-bold text-foreground'>
                        Effective
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        PG&E
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        around $24.00/mo (billed per day, so the total shifts
                        slightly with billing-cycle length)
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        around $6.00/mo
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        around $12.00/mo
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        March 2026
                      </td>
                    </tr>
                    <tr className='border-b border-border'>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        SCE
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $0.79/day (about $24/mo) — same figure across all
                        residential TOU plans
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        not broken out on SCE&apos;s own page
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        not broken out on SCE&apos;s own page
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        not dated on SCE&apos;s page; CPUC-ordered for Q4 2025
                      </td>
                    </tr>
                    <tr>
                      <td className='py-3 pr-4 font-medium text-foreground/80'>
                        SDG&E
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $0.793/day — about $22.22 to $26.18/mo depending on the
                        28- to 33-day billing cycle
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $0.197/day (about $6/mo)
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        $0.396/day (about $12/mo)
                      </td>
                      <td className='text-center py-3 px-4 text-foreground/80'>
                        October 2025
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-foreground/60 text-xs mb-8 italic'>
                The CPUC decision that created this structure, D.24-05-028,
                sets the standard-tier ceiling at exactly $24.15/month, with
                CARE and FERA both described as &quot;approximately&quot; $6
                and $12. PG&amp;E and SDG&amp;E both round their own published
                figures to about $24 rather than quoting $24.15 directly; the
                small difference is a billing-cycle-length effect, not a
                different policy. SCE&apos;s own residential rate page states
                the $0.79/day figure but doesn&apos;t break out a separate CARE
                or FERA amount the way PG&amp;E&apos;s and SDG&amp;E&apos;s
                pages do.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Where AB 205 Fits In
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Assembly Bill 205 (2022) directed the CPUC to authorize an
                income-graduated fixed charge on electric bills. The
                commission adopted the specific structure — the three tiers
                above — in Decision D.24-05-028. AB 205 is the law that
                required this; the CPUC decision is what actually set the
                dollar amounts and the rollout dates. The two reduced tiers
                above track the state&apos;s{' '}
                <a
                  href='https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  CARE and FERA programs
                </a>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Can You Avoid or Reduce It?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                You can&apos;t opt out of the fixed charge. It applies to every
                residential grid-connected customer. However, there are two ways
                to pay less.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>CARE or FERA enrollment.</strong> If your household income
                qualifies, you can reduce the fixed charge to $6 to $12 per month.
                Check your utility&apos;s CARE/FERA eligibility page — many
                qualifying households haven&apos;t applied. Links:{' '}
                <a
                  href='https://www.pge.com/en/account/rate-plans/care-fera-program.html'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  PG&E CARE/FERA
                </a>
                ,{' '}
                <a
                  href='https://www.sce.com/residential/assistance/care-fera'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SCE CARE/FERA
                </a>
                ,{' '}
                <a
                  href='https://www.sdge.com/residential/pay-bill/get-payment-bill-assistance/assistance-programs'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  SDG&E assistance programs
                </a>
                . On PG&amp;E, the guide to{' '}
                <Link
                  href='/blog/income-qualified-bill-discount-pge'
                  className='text-primary hover:underline'
                >
                  CARE and FERA discounts
                </Link>{' '}
                shows the daily charge for each tier and the rules that trip
                people up when they enroll.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Go completely off-grid.</strong> Technically, if you
                disconnect from the utility entirely (no grid connection at all),
                you wouldn&apos;t pay the fixed charge. In practice, going fully
                off-grid in California requires significant battery storage
                (typically 40+ kWh), a backup generator, and is prohibitively
                expensive for most households. This is not a realistic option for
                the vast majority of homeowners.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                How Does the Fixed Charge Affect Solar?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The charge applies whether or not the account has solar, and
                it isn&apos;t offset by production. PG&amp;E states this
                directly: &quot;Solar customers, even though they are
                producing clean energy, still use the electric grid, and
                therefore pay the same Base Services Charge as non-solar
                customers.&quot; SDG&amp;E&apos;s solar billing pages describe
                the same charge as &quot;non-bypassable&quot; for Net Energy
                Metering accounts and &quot;non-nettable&quot; for Solar
                Billing Plan accounts — in both cases, not eligible to be
                offset by generation or export credits. In practice: a solar
                account that exports more than it imports over a full year
                still owes the standard, CARE, or FERA charge above, every
                month, before any other charge applies. For the rest of what
                stays on a solar account&apos;s bill — non-bypassable charges,
                gas, and the annual true-up — see{' '}
                <Link
                  href='/solar-problems/do-i-still-get-a-utility-bill-with-solar'
                  className='text-primary hover:underline'
                >
                  do you still get a utility bill with solar?
                </Link>
                .
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Will the Fixed Charge Go Up?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Probably. The CPUC has the authority to adjust the fixed charge
                annually, and utilities have signaled they&apos;d like it higher.
                Some energy policy analysts expect it to reach $30 to $40 per
                month within the next few years. There&apos;s no cap written into
                the legislation.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is worth factoring into any long-term energy planning. If the
                fixed charge climbs to $40/month ($480/year), that&apos;s
                a meaningful cost — but it also means the per-kWh rates may come
                down slightly in exchange, since the fixed charge is meant to
                shift costs from per-kWh to flat fees. How that trade-off shakes
                out depends on your usage level.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What Should You Actually Do?
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                First, find the fixed charge on your most recent bill and confirm
                you&apos;re paying the standard amount. Then check whether you
                qualify for CARE or FERA to reduce it. Beyond that, the fixed
                charge is largely out of your control — it&apos;s a cost of being
                connected to the grid in California.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The actionable decision for most homeowners is whether to address
                the other 90% of their bill — the consumption-based charges — through
                efficiency upgrades, rate plan optimization, or solar. Rate plan
                optimization starts with the peak window on your own utility&apos;s
                schedule — San Diego customers can check{' '}
                <Link
                  href='/blog/sdge-time-of-use-rates-2026'
                  className='text-primary hover:underline'
                >
                  when SDG&amp;E&apos;s peak window falls
                </Link>{' '}
                before comparing plans. The fixed
                charge makes that decision slightly more complex but doesn&apos;t
                fundamentally change the calculus. If your bill is $200+ per month,
                the consumption portion is still where the real savings opportunity
                lives.
              </p>
            </div>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                Wondering What Your Bill Would Look Like with Solar?
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                Solar can offset part of the usage-based portion of your bill,
                not the fixed charge. If you want a provider to review your
                project, send your details through the form on this page.
              </p>
              <Link
                href='#solar-inquiry'
                className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
              >
                Request a solar review
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="California $24 fixed charge and solar comparison" />
            </div>

            {/* Navigation */}
            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/blog/sce-rate-increase-2026'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                Previous Article
              </Link>
              <Link
                href='/blog/california-solar-tax-credit-2026'
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
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="nem3" /></div>
    </PublicLayout>
  );
}
