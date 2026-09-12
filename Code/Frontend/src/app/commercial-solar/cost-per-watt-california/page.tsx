import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { VerifyCommercialSolarBox } from '@/components/shared/VerifyCommercialSolarBox';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

const title = 'California Commercial Solar Cost: 2025 Price Benchmarks';
const description =
  'Historical 2025 California price benchmarks for host-owned, stand-alone commercial solar systems, plus the questions needed to compare a project quote.';
const lbnlReport =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/commercial-solar/cost-per-watt-california' },
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: '2026-04-23T00:00:00Z',
    modifiedTime: '2026-09-11T00:00:00Z',
    url: 'https://ratereliefca.com/commercial-solar/cost-per-watt-california',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  datePublished: '2026-04-23',
  dateModified: '2026-09-11',
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief',
    url: 'https://ratereliefca.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief',
    url: 'https://ratereliefca.com',
    logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/commercial-solar/cost-per-watt-california',
  },
  citation: lbnlReport,
};

export default function CommercialSolarCost() {
  return (
    <PublicLayout>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/commercial-solar" className="transition-colors hover:text-primary">Commercial Solar</Link>
              <span>/</span>
              <span className="font-medium text-foreground">Cost Benchmarks</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Commercial Solar Pricing
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                This page reports historical California price benchmarks. It is a
                starting point for reviewing a project scope, not a current market
                quote or a promise of project savings.
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <time dateTime="2026-09-11">Updated September 11, 2026</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                2025 California benchmark data
              </h2>
              <p>
                Lawrence Berkeley National Laboratory&apos;s 2026 data update reports
                the following median gross installed prices for California
                host-owned, stand-alone non-residential photovoltaic systems
                installed in 2025. The values are in 2025 dollars per WDC and are
                reported before incentives.
              </p>
              <div className="my-8 overflow-x-auto rounded-xl border border-border">
                <table className="min-w-full text-sm">
                  <caption className="p-4 text-left text-sm text-muted-foreground">
                    California host-owned, stand-alone non-residential PV installed
                    in 2025; median gross installed price in 2025 $/WDC.
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Segment in the LBNL dataset</th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Median price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">Small non-residential</td>
                      <td className="px-4 py-3 text-foreground">$3.20/WDC</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">Large non-residential</td>
                      <td className="px-4 py-3 text-foreground">$2.60/WDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Read the <a href={lbnlReport} target="_blank" rel="noopener noreferrer" className="text-primary underline">LBNL pricing data update</a>{' '}
                before using these figures. Its gross installed-price scope can
                include ancillary work and fees. The report does not turn a
                historical median into a comparable price for every roof, canopy,
                site condition, ownership model or bid package.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Put each proposal on the same basis
              </h2>
              <ol className="list-decimal space-y-3 pl-6">
                <li>Ask each bidder to state the DC system size and the cash price separately from financing terms.</li>
                <li>List rooftop, ground-mount or canopy scope before dividing any price by watts.</li>
                <li>Separate battery storage, roof work, electrical upgrades and site work from the solar-only price.</li>
                <li>Get the expected production, remaining utility bill and interconnection assumptions in writing.</li>
                <li>Review ownership, transfer, warranty and service responsibilities as separate contract questions.</li>
              </ol>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What the benchmark does not answer
              </h2>
              <p>
                A median is not a live bid, a tax calculation, a financing offer or
                a savings forecast. Do not subtract a claimed incentive from this
                historical number until the actual owner, project terms and current
                eligibility are confirmed from the applicable source.
              </p>
              <p className="mt-4">
                California Rate Relief is a private referral service. It does not
                quote a system price, install equipment, or determine project
                eligibility.
              </p>
            </div>

            <div id="solar-inquiry" className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                Request a Commercial Solar Assessment
              </h2>
              <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
                Tell us about the property and project. California Rate Relief may
                forward a suitable inquiry to an independent provider, subject to
                service availability.
              </p>
              <Link href="/commercial-assessment" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg">
                Request a Commercial Assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-4 text-xs text-muted-foreground">
                No cost to submit. No obligation. Provider availability and project
                fit must be confirmed.
              </p>
            </div>

            <div className="mt-10">
              <Link href="/commercial-solar" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                <ArrowLeft className="h-4 w-4" /> Back to Commercial Solar Hub
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto max-w-3xl px-4"><VerifyCommercialSolarBox topic="general" /></div>
      <div className="container mx-auto max-w-3xl px-4"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
