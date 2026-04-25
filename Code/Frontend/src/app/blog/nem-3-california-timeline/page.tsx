import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

export const metadata: Metadata = {
  title:
    "NEM 3.0 California Timeline: Key Dates, Deadlines, and What Happens Next",
  description:
    "A complete timeline of California's NEM 3.0 / Net Billing Tariff, the CPUC vote, the April 2023 go-live, grandfathering windows, AB 942, and what's coming in 2026 and beyond.",
  alternates: {
    canonical: '/blog/nem-3-california-timeline',
  },
  openGraph: {
    title:
      "NEM 3.0 California Timeline: Key Dates and What Happens Next",
    description:
      "The full California NEM 3.0 timeline, CPUC vote, rollout, grandfathering, AB 942, and what's ahead.",
    type: 'article',
    publishedTime: '2026-04-23T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    "NEM 3.0 California Timeline: Key Dates, Deadlines, and What Happens Next",
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
      'https://ratereliefca.com/blog/nem-3-california-timeline',
  },
};

export default function Nem3Timeline() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"NEM 3.0 California Timeline: Key Dates, Deadlines, and What Happens Next"} url="https://ratereliefca.com/blog/nem-3-california-timeline" datePublished="2026-04-23" dateModified="2026-04-24" description={"A complete timeline of California"} />
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
                NEM 3.0 California Timeline: Key Dates, Deadlines, and What
                Happens Next
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
                California&apos;s NEM 3.0. formally the Net Billing Tariff —
                is the most consequential residential solar policy change
                of the last decade. It cut solar export credits by roughly
                75%, reshaped the installer market, and forced a shift
                toward battery-paired systems. Here is the complete
                timeline of how it got here and what&apos;s still ahead
                through 2026 and beyond.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                December 15, 2022, CPUC Votes to Approve
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The California Public Utilities Commission unanimously
                approves the Net Billing Tariff, replacing NEM 2.0 for new
                solar interconnections. The vote follows two years of
                proceedings, industry pushback, and multiple revised
                drafts. Key provisions finalized: export credits drop from
                near-retail to avoided-cost (roughly 5-8 cents/kWh),
                customers retain grandfathering under their existing NEM
                tariff for 20 years from interconnection, and the new
                structure takes effect for applications submitted after a
                120-day transition period.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                April 14-15, 2023. The Go-Live Deadline
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The NEM 2.0 cutoff arrives. Any interconnection application
                submitted by April 14, 2023 and approved within 3 years
                qualifies for 20-year grandfathering under NEM 2.0.
                Applications submitted on or after April 15 fall under the
                new Net Billing Tariff. Installers and homeowners rush to
                submit before the deadline, California sees a record
                monthly interconnection volume in March and April 2023 as
                the industry races the clock.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Summer-Fall 2023, Installation Volumes Collapse
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                After the rush, new applications plunge. California
                residential solar installation volumes drop by roughly 40%
                compared to the prior year as homeowners and installers
                recalibrate the economics under the new tariff.
                Higher-pricing installers struggle. Battery attachment rates
                surge as the industry pivots from solar-only systems to
                solar + storage bundles that make the NEM 3.0 math work.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                2024, Industry Consolidation Begins
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                The financial pressure from NEM 3.0, combined with rising
                interest rates and loan-financing costs, triggers the first
                wave of installer bankruptcies and restructurings. August
                2024: the original SunPower Corporation files Chapter 11.
                Complete Solaria acquires its operating assets and rebrands
                to SunPower in April 2025. Storage attachment crosses 50%
                of new CA residential solar installs for the first time.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                June 2025. Sunnova Chapter 11
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Sunnova Energy International files Chapter 11 bankruptcy.
                Assets are acquired by Solaris Assets (backed by
                bondholders) and portfolio management transitions to
                SunStrong Management. Approximately 500,000 Sunnova legacy
                customers transition to the new entity for their lease,
                PPA, and warranty obligations. See our{' '}
                <Link
                  href='/solar-installers/sunnova-review'
                  className='text-primary hover:underline'
                >
                  Sunnova review
                </Link>{' '}
                for the details.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                2025; AB 942 Legislative Activity
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                California Assembly Bill 942, debated throughout 2025,
                proposes changes to NEM grandfathering when a solar system
                is transferred with a home sale. The specific provisions
                affect whether a new homeowner inherits the original NEM
                tariff of the system or gets reset to the current tariff.
                Industry and consumer advocacy groups weigh in. The bill&apos;s
                specific language and enactment status continue to evolve
                through legislative sessions.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                April 15, 2026, Freedom Forever Chapter 11
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                Another top-tier California-headquartered installer files
                for Chapter 11 bankruptcy. Freedom Forever Solar, based in
                Temecula, cites $500M to $1B in liabilities. The Chapter 11
                process continues through 2026. See the{' '}
                <Link
                  href='/solar-installers/freedom-forever-review'
                  className='text-primary hover:underline'
                >
                  Freedom Forever review
                </Link>{' '}
                for current status.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                2026 and Beyond — The Open Questions
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-4'>
                Several NEM 3.0-adjacent issues remain in motion:
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>The CPUC&apos;s next net-billing review.</strong>
                The NBT is reviewed periodically. Industry groups continue
                to argue the export-credit rate is set too low and that a
                partial reversion toward retail-rate credit would restore
                residential solar growth. Any material change to the tariff
                would go through another multi-year proceeding.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>NEM 2.0 grandfather expirations.</strong> The
                earliest NEM 2.0 customers, interconnected in 2016, will
                start aging out of their 20-year grandfather windows in
                2036. What those customers transition to depends on the
                tariff in effect at that time.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Virtual Power Plant (VPP) expansion.</strong>
                California utilities and installers continue to expand VPP
                programs where residential batteries feed back to the grid
                during peak demand in exchange for credits or payments.
                Sunrun&apos;s ~4 GWh networked fleet is the largest. VPP
                participation is one of the practical ways to recapture
                some of the NEM 3.0 value gap.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>Utility rate inflation.</strong> SCE, PG&amp;E, and
                SDG&amp;E rates continue to rise 6-12% annually.
                Paradoxically, higher utility rates make NEM 3.0 solar more
                valuable over time, the exported kWh value doesn&apos;t
                change much, but the consumed kWh value (what solar offsets
                for self-consumption) goes up. The rate-inflation factor is
                the biggest single reason solar still works for most
                California homeowners under NEM 3.0.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                What This Means For You
              </h2>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you installed solar before April 15, 2023, nothing about
                the above changes your situation. you&apos;re grandfathered
                under NEM 2.0 and your economics remain as originally sold.
              </p>

              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re shopping for solar in 2026, the economics work
                — especially with a battery. But the system design has to
                prioritize self-consumption rather than export. See{' '}
                <Link
                  href='/blog/nem-3-california-still-worth-it'
                  className='text-primary hover:underline'
                >
                  our NEM 3.0 worth-it analysis
                </Link>{' '}
                for the full breakdown, and{' '}
                <Link
                  href='/blog/net-billing-vs-net-metering-california'
                  className='text-primary hover:underline'
                >
                  our net-billing-vs-net-metering explainer
                </Link>{' '}
                for the underlying mechanics.
              </p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>
                See What NEM 3.0 Looks Like For Your Home
              </h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>
                California Rate Relief runs the specific numbers for your
                utility, usage, and roof under the current Net Billing
                Tariff. Free, no obligation, 60 seconds.
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
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="nem3" /></div>
    </PublicLayout>
  );
}
