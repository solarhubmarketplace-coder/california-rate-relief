import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import {
  ArrowRight,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Building2,
  Factory,
  Wrench,
  DollarSign,
} from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title:
    'Best Solar Companies in California 2026: Honest Side-by-Side Review',
  description:
    'An honest, research-backed comparison of the top residential solar installers operating in California in 2026 — equipment, pricing, warranties, complaint volume, and which model fits your home.',
  alternates: {
    canonical: '/best-solar-companies-california',
  },
  openGraph: {
    title:
      'Best Solar Companies in California 2026: Honest Side-by-Side Review',
    description:
      'The top California solar installers compared: equipment, pricing, warranties, complaint history, and how to pick the right one for your home.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Solar Companies in California 2026: Honest Side-by-Side Review',
  description:
    'A side-by-side comparison of the top residential solar installers operating in California — equipment, pricing, warranties, and complaint history.',
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
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
    '@id': 'https://ratereliefca.com/best-solar-companies-california',
  },
};

interface Installer {
  name: string;
  slug: string;
  ownership: string;
  manufactures: string;
  crews: string;
  financing: string;
  timelineCA: string;
  complaints3yr: string;
  pricingCA: string;
  strength: string;
  watchOut: string;
  note?: string;
}

const installers: Installer[] = [
  {
    name: 'Freedom Forever',
    slug: 'freedom-forever-review',
    ownership: 'Private (Chapter 11 Apr 2026)',
    manufactures: 'No',
    crews: 'Dealer network + direct',
    financing: '3rd party (Mosaic)',
    timelineCA: '2–6 mo PTO',
    complaints3yr: '1,359',
    pricingCA: '$2.79–$3.20/W',
    strength: 'Scale + 25-year production guarantee (pending)',
    watchOut: 'Chapter 11 filed April 15, 2026 — active restructuring',
    note: 'Chapter 11 since April 15, 2026',
  },
  {
    name: 'Sunrun',
    slug: 'sunrun-review',
    ownership: 'Public (NYSE: RUN)',
    manufactures: 'No',
    crews: 'Hybrid — heavy subcontractor',
    financing: 'Lease / PPA (in-house)',
    timelineCA: '2–6+ mo PTO',
    complaints3yr: '4,045',
    pricingCA: '~$3.33/W',
    strength: 'Largest US residential solar + storage, strong VPP programs',
    watchOut: 'Very high BBB complaint volume, subcontractor quality varies',
  },
  {
    name: 'Tesla Solar',
    slug: 'tesla-solar-review',
    ownership: 'Public (NASDAQ: TSLA)',
    manufactures: 'Yes — Buffalo NY',
    crews: 'Hybrid (direct + 1,000+ certified)',
    financing: 'Own lease / PPA',
    timelineCA: '8–12 wk PTO typical',
    complaints3yr: 'Mixed by region',
    pricingCA: '$2.27–$2.82/W',
    strength: 'Lowest cash pricing, own panels + Powerwall ecosystem',
    watchOut: 'Consistently weak post-install customer service',
  },
  {
    name: 'SunPower (Complete Solaria)',
    slug: 'sunpower-review',
    ownership: 'Public (NASDAQ: SPWR)',
    manufactures: 'No',
    crews: 'Hybrid',
    financing: '3rd party',
    timelineCA: '1–4 mo PTO',
    complaints3yr: 'Legacy carry-over',
    pricingCA: '~$2.80–$3.20/W',
    strength: 'Recognizable brand, rebuilt as Complete Solaria since April 2025',
    watchOut: 'Post-2024-bankruptcy rebrand, legacy service complaints continue',
  },
  {
    name: 'Momentum Solar',
    slug: 'momentum-solar-review',
    ownership: 'Private',
    manufactures: 'No',
    crews: 'Mostly in-house',
    financing: '3rd party',
    timelineCA: '2–3 mo PTO',
    complaints3yr: '642',
    pricingCA: '$2.79–$3.00/W',
    strength: 'In-house crews, 25-year workmanship warranty',
    watchOut: '$30M TCPA class-action settlement 2025, Trustpilot 1.6/5',
  },
  {
    name: 'Semper Solaris',
    slug: 'semper-solaris-review',
    ownership: 'Private (veteran-owned)',
    manufactures: 'No',
    crews: 'Mostly in-house',
    financing: '3rd party',
    timelineCA: '2–4 mo PTO',
    complaints3yr: '173',
    pricingCA: 'Competitive',
    strength: 'California-native, NABCEP-certified, roofing + solar bundle',
    watchOut: 'Trustpilot 1.6/5, recurring post-install service complaints',
  },
  {
    name: 'Solar Optimum',
    slug: 'solar-optimum-review',
    ownership: 'Private',
    manufactures: 'No',
    crews: 'Mostly in-house',
    financing: '3rd party',
    timelineCA: '60–90 days full',
    complaints3yr: '21',
    pricingCA: 'Competitive',
    strength: 'EnergySage 4.8/5 (851 reviews), 6-level 25-year warranty',
    watchOut: 'Smaller footprint — CA/NV/AZ/FL only',
  },
  {
    name: 'Sunnova',
    slug: 'sunnova-review',
    ownership: 'Post-Ch.11 — SunStrong',
    manufactures: 'No',
    crews: 'Dealer / subcontractor',
    financing: 'Lease / PPA (now via SunStrong)',
    timelineCA: 'Limited new CA installs',
    complaints3yr: 'Thousands (pre-filing)',
    pricingCA: 'Lease/PPA heavy',
    strength: '~500,000 legacy customers; 25-yr guarantee administered by SunStrong',
    watchOut: 'Chapter 11 June 2025 — assets sold to Solaris/SunStrong; service quality weak before and after',
    note: 'Chapter 11 June 2025 — SunStrong now manages',
  },
];

export default function BestSolarCompaniesCalifornia() {
  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-4xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>
                Home
              </Link>
              <span>/</span>
              <span className='text-foreground font-medium'>
                Best Solar Companies in California
              </span>
            </nav>

            {/* Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                California Installer Comparison
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Best Solar Companies in California 2026: Honest
                Side-by-Side Review
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>Updated April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>14 min read</span>
                </div>
              </div>
            </header>

            {/* Intro */}
            <div className='prose prose-slate max-w-none mb-10'>
              <p className='text-lg text-foreground/80 leading-relaxed'>
                There is no single &quot;best&quot; solar installer in
                California for every homeowner. The right choice depends
                on your utility, your roof, your budget, whether you want
                the lowest cash price or the longest warranty, and how
                much you care about the installer still being around in
                ten years. This guide is a plain-English comparison of
                the eight major residential solar companies operating in
                California in 2026, with the verifiable data points that
                actually matter — ownership structure, where the panels
                come from, who installs them, how long the warranty is,
                and how many complaints the installer has accumulated.
              </p>
              <p className='text-lg text-foreground/80 leading-relaxed'>
                We update this page as the industry moves. The most
                important recent development: Freedom Forever filed
                Chapter 11 bankruptcy on April 15, 2026, which we cover
                in detail in our{' '}
                <Link
                  href='/solar-installers/freedom-forever-review'
                  className='text-primary hover:underline'
                >
                  Freedom Forever review
                </Link>
                .
              </p>
            </div>

            {/* Breaking banner */}
            <div className='mb-10 rounded-xl border-2 border-red-500/40 bg-red-500/10 p-5'>
              <div className='flex items-start gap-3'>
                <AlertTriangle className='h-6 w-6 text-red-400 flex-shrink-0 mt-0.5' />
                <div>
                  <p className='text-xs font-bold uppercase tracking-widest text-red-300 mb-1'>
                    Active industry event
                  </p>
                  <p className='text-foreground font-semibold leading-relaxed'>
                    Freedom Forever Solar filed Chapter 11 on April 15,
                    2026. If you have a pending quote from them,{' '}
                    <Link
                      href='/solar-installers/freedom-forever-review'
                      className='text-red-300 underline hover:text-red-200'
                    >
                      read our full breakdown
                    </Link>
                    {' '}
                    before you sign.
                  </p>
                </div>
              </div>
            </div>

            {/* What to look for */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>
                What Actually Matters When Comparing Installers
              </h2>
              <div className='grid sm:grid-cols-2 gap-4'>
                <div className='p-5 rounded-xl border border-border bg-card'>
                  <Building2 className='h-5 w-5 text-primary mb-2' />
                  <h3 className='font-bold text-foreground mb-2'>
                    Ownership & Financial Stability
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    A 25-year warranty is only as good as the company
                    behind it. Public companies file quarterly reports
                    you can read. Private companies vary. Recent
                    bankruptcies in this industry (SunPower 2024, Freedom
                    Forever 2026) are a reminder that this matters.
                  </p>
                </div>
                <div className='p-5 rounded-xl border border-border bg-card'>
                  <Factory className='h-5 w-5 text-primary mb-2' />
                  <h3 className='font-bold text-foreground mb-2'>
                    Equipment & Manufacturing
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    Only Tesla and Qcells (the manufacturer behind Axia)
                    actually manufacture their own panels in the U.S.
                    Everyone else is a third-party equipment buyer. Panel
                    brand matters less than it used to — Tier-1 panels
                    are broadly similar on efficiency and warranty.
                  </p>
                </div>
                <div className='p-5 rounded-xl border border-border bg-card'>
                  <Wrench className='h-5 w-5 text-primary mb-2' />
                  <h3 className='font-bold text-foreground mb-2'>
                    In-House vs. Subcontracted Crews
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    In-house installation crews generally produce more
                    consistent quality and a cleaner service experience
                    than large subcontractor networks. Not universal, but
                    the pattern shows up clearly in complaint data.
                  </p>
                </div>
                <div className='p-5 rounded-xl border border-border bg-card'>
                  <DollarSign className='h-5 w-5 text-primary mb-2' />
                  <h3 className='font-bold text-foreground mb-2'>
                    Pricing & Financing Structure
                  </h3>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    California cash prices run $2.27 to $3.33 per watt
                    across major installers. The spread narrows once you
                    factor in equipment quality and warranty length. PPA
                    and lease terms — rate, escalator, battery
                    inclusion — are what really separate the deals.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison table */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>
                Side-by-Side Comparison
              </h2>
              <div className='overflow-x-auto rounded-xl border border-border'>
                <table className='min-w-full text-sm'>
                  <thead className='bg-muted'>
                    <tr>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>
                        Installer
                      </th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>
                        Ownership
                      </th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>
                        Crews
                      </th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>
                        CA Pricing
                      </th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>
                        BBB 3-Yr Complaints
                      </th>
                      <th className='px-4 py-3 text-left font-bold text-foreground'>
                        Review
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {installers.map((i) => (
                      <tr
                        key={i.slug}
                        className='border-t border-border hover:bg-muted/40'
                      >
                        <td className='px-4 py-4 font-semibold text-foreground align-top'>
                          {i.name}
                          {i.note && (
                            <span className='block text-xs font-medium text-red-300 mt-1'>
                              {i.note}
                            </span>
                          )}
                        </td>
                        <td className='px-4 py-4 text-foreground/80 align-top'>
                          {i.ownership}
                        </td>
                        <td className='px-4 py-4 text-foreground/80 align-top'>
                          {i.crews}
                        </td>
                        <td className='px-4 py-4 text-foreground/80 align-top'>
                          {i.pricingCA}
                        </td>
                        <td className='px-4 py-4 text-foreground/80 align-top'>
                          {i.complaints3yr}
                        </td>
                        <td className='px-4 py-4 align-top'>
                          <Link
                            href={`/solar-installers/${i.slug}`}
                            className='text-primary hover:underline font-medium inline-flex items-center gap-1'
                          >
                            Read
                            <ArrowRight className='h-3 w-3' />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className='text-xs text-muted-foreground mt-3'>
                Complaint figures are from publicly available Better
                Business Bureau profiles as of April 2026. Pricing ranges
                are post-NEM-3.0 California averages from company
                disclosures and market data.
              </p>
            </section>

            {/* Individual cards */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-6 tracking-tight'>
                The Eight Installers, In Plain English
              </h2>
              <div className='space-y-5'>
                {installers.map((i, idx) => (
                  <div
                    key={i.slug}
                    className='p-6 rounded-xl border border-border bg-card'
                  >
                    <div className='flex items-start justify-between gap-4 mb-3'>
                      <div>
                        <div className='text-xs font-bold text-primary uppercase tracking-wide mb-1'>
                          #{idx + 1}
                        </div>
                        <h3 className='text-xl font-bold text-foreground tracking-tight'>
                          {i.name}
                        </h3>
                        <p className='text-sm text-muted-foreground mt-1'>
                          {i.ownership}
                        </p>
                      </div>
                      <Link
                        href={`/solar-installers/${i.slug}`}
                        className='flex-shrink-0 text-sm text-primary hover:underline font-medium inline-flex items-center gap-1'
                      >
                        Full review
                        <ArrowRight className='h-3 w-3' />
                      </Link>
                    </div>

                    <div className='grid sm:grid-cols-2 gap-3 mb-4'>
                      <div className='flex items-start gap-2'>
                        <CheckCircle2 className='h-4 w-4 text-green-500 flex-shrink-0 mt-0.5' />
                        <div>
                          <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                            Strength
                          </p>
                          <p className='text-sm text-foreground/80'>
                            {i.strength}
                          </p>
                        </div>
                      </div>
                      <div className='flex items-start gap-2'>
                        <AlertTriangle className='h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5' />
                        <div>
                          <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                            Watch-out
                          </p>
                          <p className='text-sm text-foreground/80'>
                            {i.watchOut}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-wrap gap-2 text-xs'>
                      <span className='inline-flex items-center px-2 py-1 rounded-md bg-muted text-foreground/70'>
                        {i.crews}
                      </span>
                      <span className='inline-flex items-center px-2 py-1 rounded-md bg-muted text-foreground/70'>
                        Financing: {i.financing}
                      </span>
                      <span className='inline-flex items-center px-2 py-1 rounded-md bg-muted text-foreground/70'>
                        {i.timelineCA}
                      </span>
                      <span className='inline-flex items-center px-2 py-1 rounded-md bg-muted text-foreground/70'>
                        CPW: {i.pricingCA}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How to pick */}
            <section className='mb-12 prose prose-slate max-w-none'>
              <h2 className='text-2xl font-bold text-foreground mb-4 tracking-tight'>
                How to Actually Pick One
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Different buyers have different priorities. A few
                heuristics that hold up well:
              </p>
              <ul className='space-y-3 text-foreground/80'>
                <li>
                  <strong>If cash price is your top priority</strong>,
                  Tesla Solar&apos;s California range of $2.27 to $2.82
                  per watt is the lowest on this list, with competitive
                  equipment (their own U.S.-made panels + Powerwall 3).
                  The trade-off is post-install service quality, which is
                  consistently the weakest in our comparison.
                </li>
                <li>
                  <strong>
                    If warranty depth and service quality matter most
                  </strong>
                  , Solar Optimum has the strongest reputation in our
                  data set (EnergySage 4.8/5 over 851 reviews, only 21
                  BBB complaints over three years) and a 6-level 25-year
                  warranty. Their footprint is smaller — CA, NV, AZ, FL —
                  and pricing is competitive but not the cheapest.
                </li>
                <li>
                  <strong>
                    If you want the largest installed base and strongest
                    VPP programs
                  </strong>
                  , Sunrun leads the country on residential solar +
                  storage. The trade-off is a very high complaint volume
                  driven by subcontractor-heavy operations.
                </li>
                <li>
                  <strong>
                    If you want U.S.-made panels and vertical integration
                  </strong>
                  , Tesla manufactures its own panels in Buffalo NY, and
                  Qcells (which powers Axia Solar) manufactures its panels
                  in Dalton and Cartersville GA with in-house EnFin
                  financing. Those are the only two players in this list
                  that actually own the panel factory.
                </li>
                <li>
                  <strong>
                    If you already have a quote from an installer in
                    Chapter 11
                  </strong>
                  {' '}(Freedom Forever), get at least two more quotes from
                  financially stable installers before you sign. The
                  25-year production guarantee is what you&apos;re buying,
                  and it&apos;s only as good as the balance sheet behind
                  it.
                </li>
              </ul>
            </section>

            {/* CTA */}
            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>
                Get Three Real Quotes, Compared Side by Side
              </h3>
              <p className='text-muted-foreground mb-6 max-w-xl mx-auto text-center leading-relaxed'>
                California Rate Relief works with multiple top-rated
                California installers. Fill out one 60-second form and
                we&apos;ll line up quotes from up to three of the
                companies above for your address — so you can compare
                real pricing, equipment, and warranty terms instead of
                guessing.
              </p>
              <div className='flex justify-center'>
                <Link
                  href='/#qualify'
                  className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
                >
                  Get My 3 Quotes
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>
                Free. No obligation. No impact on your credit score.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
