import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { VerifyCommercialSolarBox } from '@/components/shared/VerifyCommercialSolarBox';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

const title = "Commercial Solar Cost Per Watt in California (2026)";
const description =
  "See California commercial solar cost per watt by system size, sourced and dated, before you compare bids.";
const lbnlReport =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const trackingTheSun = 'https://emp.lbl.gov/tracking-the-sun';
const cslbClassifications =
  'https://www.cslb.ca.gov/About_Us/Library/Licensing_Classifications/';
const VERIFIED = 'September 18, 2026';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/commercial-solar/cost-per-watt-california' },
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: '2026-04-23T00:00:00Z',
    modifiedTime: '2026-09-18T00:00:00Z',
    url: 'https://ratereliefca.com/commercial-solar/cost-per-watt-california',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  datePublished: '2026-04-23',
  dateModified: '2026-09-18',
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
                <time dateTime="2026-09-18">Updated September 18, 2026</time>
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                How much does commercial solar cost per watt in California in 2026?
              </h2>
              <p>
                The most recent published benchmark for this question is Lawrence
                Berkeley National Laboratory&apos;s{' '}
                <a href={lbnlReport} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  U.S. Distributed Solar and Storage 2026 Data Update
                </a>
                , dated August 2026, which reports non-residential installed prices
                for systems installed in 2024 and 2025. That report is a historical
                median of completed installations, not a current quote. Verified{' '}
                {VERIFIED}.
              </p>
              <p>
                Two things matter before any per-watt number is used. First, the
                report splits non-residential systems into{' '}
                <strong>small (100 kW or less)</strong> and{' '}
                <strong>large (more than 100 kW)</strong> bands, so a single
                &ldquo;commercial&rdquo; average mixes two different markets.
                Second, LBNL only publishes a state-level summary where at least 20
                observations are available, so state figures are not available for
                every segment in every year. Both points are stated in the August
                2026 report, verified {VERIFIED}.
              </p>
              <p>
                The figures below are the California non-residential medians carried
                on this page from that LBNL series. They are gross installed prices
                before incentives, in dollars per WDC, and they describe systems that
                were already built.
              </p>
              <div className="my-8 overflow-x-auto rounded-xl border border-border">
                <table className="min-w-full text-sm">
                  <caption className="p-4 text-left text-sm text-muted-foreground">
                    California host-owned, stand-alone non-residential PV installed
                    in 2025; median gross installed price in 2025 $/WDC. Size bands
                    as defined by LBNL. Report verified {VERIFIED}.
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Segment in the LBNL dataset</th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">System size band</th>
                      <th className="px-4 py-3 text-left font-bold text-foreground">Median price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">Small non-residential</td>
                      <td className="px-4 py-3 text-foreground">100 kW or less</td>
                      <td className="px-4 py-3 text-foreground">$3.20/WDC</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-foreground">Large non-residential</td>
                      <td className="px-4 py-3 text-foreground">More than 100 kW</td>
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
              <p>
                LBNL also publishes the underlying{' '}
                <a href={trackingTheSun} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Tracking the Sun
                </a>{' '}
                series and data viewer, where segment and state detail can be
                filtered directly. Checked {VERIFIED}.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Commercial solar cost by system size
              </h2>
              <p>
                Because the published bands split at 100 kW, a 25 kW rooftop array
                and a 1 MW ground mount are not the same purchase and should not be
                compared on one average. These guides work through the scope
                questions at each scale rather than repeating a single median:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <Link href="/commercial-solar/commercial-solar-cost-100kw-california" className="text-primary underline">
                    100 kW commercial solar projects in California
                  </Link>
                </li>
                <li>
                  <Link href="/commercial-solar/commercial-solar-cost-500kw-california" className="text-primary underline">
                    500 kW commercial solar projects in California
                  </Link>
                </li>
                <li>
                  <Link href="/commercial-solar/commercial-solar-cost-1mw-california" className="text-primary underline">
                    1 MW commercial solar projects in California
                  </Link>
                </li>
              </ul>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What drives commercial solar installation cost up or down
              </h2>
              <p>
                Two buildings with the same annual kWh can receive very different
                prices. The variables that move a commercial number are structural
                and electrical, not a market average:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Roof condition and type.</strong> Remaining roof life,
                  membrane type, attachment method and any required structural
                  review can sit inside or outside the quoted price.
                </li>
                <li>
                  <strong>Electrical service capacity.</strong> Main switchgear,
                  transformer and panel work is frequently the largest single
                  variable between two otherwise similar bids.
                </li>
                <li>
                  <strong>Interconnection.</strong> Utility study results and any
                  distribution upgrade allowance can change both the price and the
                  schedule after a contract is signed.
                </li>
                <li>
                  <strong>Demand-charge design.</strong> A business tariff can price
                  the highest measured kW in a period, so an array that cuts annual
                  kWh may not cut the interval that sets the demand charge. Storage
                  controls are a separate line item, not a rounding error.
                </li>
                <li>
                  <strong>Mounting type.</strong> Rooftop, ground mount and canopy or
                  carport structures carry different structural and site costs for
                  the same DC capacity.
                </li>
                <li>
                  <strong>Ownership and financing.</strong> A cash price, a loan and
                  a third-party-owned structure are not comparable per-watt numbers.
                  See{' '}
                  <Link href="/commercial-solar/commercial-solar-ppa-vs-purchase-california" className="text-primary underline">
                    PPA versus purchase for California commercial projects
                  </Link>{' '}
                  and{' '}
                  <Link href="/commercial-solar/financing-options" className="text-primary underline">
                    commercial financing options
                  </Link>
                  .
                </li>
              </ul>

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
                Industrial vs. commercial solar cost per watt
              </h2>
              <p>
                Published price data does not use a separate
                &ldquo;industrial&rdquo; category. LBNL&apos;s bands are residential
                and non-residential, with non-residential split at 100 kW, so an
                industrial plant and an office building fall into the same reported
                segment once the DC size matches. A factory tends to land in the
                larger band, which reports the lower median, but the operating
                profile is what actually changes the economics: shift patterns,
                process heat, compressors and refrigeration set a demand curve that
                an office does not have.
              </p>
              <p>
                For a manufacturing or warehouse site, start from the load schedule
                rather than a per-watt figure. See{' '}
                <Link href="/commercial-solar/warehouse-solar-california" className="text-primary underline">
                  warehouse solar projects
                </Link>{' '}
                and{' '}
                <Link href="/commercial-solar/agricultural-solar-california" className="text-primary underline">
                  agricultural solar projects
                </Link>
                , which carry different interconnection and metering questions.
              </p>

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
                This page states no federal or state commercial tax-credit figure.
                Commercial credit rules and placed-in-service deadlines were not
                re-verified at a primary source for this update, so no credit amount
                or deadline is asserted here. Confirm any credit claim with current
                IRS guidance and a qualified tax professional for the specific
                project and tax year.
              </p>
              <p className="mt-4">
                California Rate Relief is a private referral service. It does not
                quote a system price, install equipment, or determine project
                eligibility.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    How much do commercial solar panels cost in California?
                  </h3>
                  <p>
                    The published reference point is LBNL&apos;s August 2026 data
                    update, which reports median gross installed prices for
                    non-residential systems by size band. The California
                    non-residential medians carried on this page are $3.20/WDC for
                    systems of 100 kW or less and $2.60/WDC above 100 kW, before
                    incentives. Those are historical medians of completed projects,
                    not a quote for a specific building. Source verified {VERIFIED}.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    What is the average cost of commercial solar panels?
                  </h3>
                  <p>
                    There is no single useful average, because the published data
                    splits at 100 kW and the two bands differ materially. A
                    single blended average hides which side of that split a project
                    sits on. Ask each bidder for the DC size and the cash price
                    separately, then divide.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    How much does commercial solar installation cost?
                  </h3>
                  <p>
                    Installation is not a separable percentage of a published median.
                    The gross installed price in the LBNL series can already include
                    ancillary work and fees, which is why two quotes at the same
                    per-watt number can cover different scope. Get roof work,
                    electrical upgrades, interconnection and storage on separate
                    lines before comparing.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    What does an industrial solar panel system cost per watt?
                  </h3>
                  <p>
                    Published data has no separate industrial band. An industrial
                    system is reported in the same non-residential segment as any
                    other commercial system of the same DC size, so it falls under
                    the 100 kW split described above.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    Is commercial solar cost per watt different for small vs. large
                    systems?
                  </h3>
                  <p>
                    Yes. LBNL reports small and large non-residential systems
                    separately and splits them at 100 kW, and the larger band reports
                    the lower median price per watt. That is the main reason a
                    per-watt figure quoted without a system size is not comparable.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    Who is allowed to install a commercial solar system in
                    California?
                  </h3>
                  <p>
                    The work is performed under a California contractor licence. CSLB
                    publishes the classifications, including{' '}
                    <a href={cslbClassifications} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                      C-46 Solar Contractor and C-10 Electrical Contractor
                    </a>
                    , verified {VERIFIED}. Check the exact contracting entity and its
                    current licence record in the CSLB lookup before signing, and see{' '}
                    <Link href="/commercial-solar/companies-california" className="text-primary underline">
                      what to compare across commercial solar companies
                    </Link>
                    .
                  </p>
                </div>
              </div>
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
          <RelatedGuides
            heading="What a per-watt figure leaves out"
            intro="Two cost categories sit outside the equipment price on almost every proposal."
            links={[
              { href: "/solar-problems/hidden-costs-of-solar-california", label: "The cost lines that arrive after the quote" },
              { href: "/solar-problems/solar-dealer-fees-explained", label: "How a financing fee is folded into the price per watt" },
            { href: "/blog/ppa-loan-vs-solar-lease-vs-cash-california", label: "Cash, loan, lease and PPA obligations side by side" },
            ]}
          />
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto max-w-3xl px-4"><VerifyCommercialSolarBox topic="general" /></div>
      <div className="container mx-auto max-w-3xl px-4"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
