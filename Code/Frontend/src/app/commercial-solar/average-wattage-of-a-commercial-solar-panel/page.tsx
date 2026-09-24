import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { CommercialReviewButton, CommercialReviewForm } from '@/components/growth/CommercialReview';

// Created 2026-09-23 (topical-authority program, Tier 2, CREATE_DEDICATED): the
// "average wattage of a commercial solar panel" query was landing on the
// cost-per-watt page. No agency publishes that number, so this page computes it
// from two primary datasets, both downloaded 2026-09-23:
//   1. CPUC DGStats Interconnected Applications (data through 2026-05-31):
//      PV applications with status Interconnected, approved in 2024, 2025 or
//      Jan-May 2026. Watts per module = System Size DC x 1000 / sum of
//      Generator Quantity 1..11; systems outside 150-800 W per module dropped
//      as data errors (3,391 of 3,607 non-residential 2025 systems kept).
//      Non-residential = Commercial, Industrial, Educational, Non-Profit, Other
//      Government, Military.
//   2. CEC PV Module List full data ("Data has not changed since September 21,
//      2026"): non-BIPV models with a CEC Listing Date from 2025-09-21 to
//      2026-09-21 (1,651 models, 75 manufacturers). Efficiency = Nameplate Pmax /
//      (A_c x 1000 W/m2).

const title = 'Average Wattage of a Commercial Solar Panel (2026 Data)';
const h1 = 'Average Wattage of a Commercial Solar Panel: What California Data Shows';
const description =
  'California business solar systems connected in 2025 used a median 438 W module, against 370 W on homes. Size bands, new models and what it means for a bid.';
const path = '/commercial-solar/average-wattage-of-a-commercial-solar-panel';
const canonicalUrl = `https://ratereliefca.com${path}`;
const DATE_MODIFIED = '2026-09-23';
const CHECKED = 'September 23, 2026';
const link = 'text-primary underline';

const dgStatsDownloads = 'https://www.californiadgstats.ca.gov/downloads/';
const cecPvList = 'https://solarequipment.energy.ca.gov/Home/PVModuleList';
const cecEquipLists =
  'https://www.energy.ca.gov/programs-and-topics/programs/solar-equipment-lists';
const lbnl2026 =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const tts2024Report =
  'https://emp.lbl.gov/sites/default/files/2024-10/Tracking%20the%20Sun%202024_Report.pdf';

const faqs = [
  {
    question: 'What is the average wattage of a commercial solar panel?',
    answer:
      'About 440 to 460 watts for systems installed in California in 2025. Across the non-residential systems PG&E, SCE and SDG&E connected that year, the median module was 438 W and the capacity-weighted average 458 W. Systems over 100 kW used larger modules, a median of about 504 W.',
  },
  {
    question: 'Are commercial solar panels bigger than residential ones?',
    answer:
      'Often, yes. In the same 2025 California data the median home system used 370 W modules. The extra watts come mainly from a larger panel, not a more efficient one: on the Energy Commission list, recently added models of about 2.5 square meters and 2 square meters have nearly the same median efficiency, close to 23%.',
  },
  {
    question: 'How many solar panels does a 100 kW commercial system need?',
    answer:
      'Divide the DC size by the module wattage. At 440 W that is about 227 panels; at 590 W, about 170. Fewer, larger panels cut the count of mounts and connections but need a roof layout and structure that suit the larger format.',
  },
  {
    question: 'What wattage are new commercial solar panels in 2026?',
    answer:
      'Higher than what was installed in 2025. The 1,651 module models added to the California Energy Commission list in the year to September 21, 2026 had a median nameplate rating of 550 W, and the largest format, about 2.7 square meters and up, had a median of 670 W.',
  },
  {
    question: 'Is a higher-wattage panel always better for a business?',
    answer:
      'No. Watts per panel matter less than watts per square foot of usable roof, the price per watt of the whole system and the production the array delivers on your site. A bigger module that does not fit the roof layout, or that needs heavier racking, can lower the total system size.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: `${DATE_MODIFIED}T00:00:00Z`,
    modifiedTime: `${DATE_MODIFIED}T00:00:00Z`,
    url: canonicalUrl,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(title, description),
};

export default function AverageCommercialPanelWattage() {
  return (
    <PublicLayout breadcrumbLabel="Commercial panel wattage">
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline={h1}
        url={canonicalUrl}
        datePublished={DATE_MODIFIED}
        dateModified={DATE_MODIFIED}
        description={description}
      />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/commercial-solar" className="hover:text-primary">Commercial Solar</Link>
              <span>/</span>
              <span className="text-foreground">Commercial panel wattage</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Equipment · Panel size
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              <Byline updated={DATE_MODIFIED} sourcesHref="#sources" />
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg">
                A commercial solar panel installed in California in 2025 was rated at about 440
                to 460 watts. Across the non-residential systems PG&amp;E, SCE and SDG&amp;E
                connected that year, the median module was 438 W, against 370 W on homes, and
                systems over 100 kW used about 504 W. New models on the state equipment list run
                higher still, at a median of 550 W.
              </p>
              <p>
                No agency publishes an &ldquo;average commercial panel&rdquo; figure, so CRR
                computed these from two public datasets: the CPUC&apos;s interconnection records
                and the California Energy Commission&apos;s PV module list. The method is at the
                foot of the page. For what the systems cost, see{' '}
                <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                  commercial solar cost per watt in California
                </Link>
                ; for every business guide, the{' '}
                <Link href="/commercial-solar" className={link}>
                  commercial solar hub
                </Link>
                . Data checked {CHECKED}.
              </p>
            </div>

            <KeyFacts
              className="max-w-3xl"
              sourcesHref="#sources"
              facts={[
                {
                  label: 'Median module, CA business systems, 2025',
                  value: '438 W',
                  note: 'Capacity-weighted average 458 W. 3,391 non-residential systems, PG&E, SCE and SDG&E.',
                  source: { publisher: 'CPUC DGStats', url: dgStatsDownloads, date: 'May 2026 data' },
                },
                {
                  label: 'Median module, CA home systems, 2025',
                  value: '370 W',
                  note: 'Same dataset and method, residential sector.',
                  source: { publisher: 'CPUC DGStats', url: dgStatsDownloads, date: 'May 2026 data' },
                },
                {
                  label: 'Models added to the CEC list, past year',
                  value: '550 W',
                  note: 'Median nameplate of 1,651 models listed Sept 2025 to Sept 2026.',
                  source: { publisher: 'CEC', url: cecPvList, date: 'Sep 21, 2026' },
                },
              ]}
            />

            <div className="prose prose-slate max-w-none">
              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What California businesses actually installed
              </h2>
              <p>
                The CPUC&apos;s{' '}
                <a href={dgStatsDownloads} target="_blank" rel="noopener noreferrer" className={link}>
                  DGStats interconnection file
                </a>{' '}
                lists each system&apos;s DC size and its module counts. Dividing one by the other
                gives the watts per module. For systems connected in 2025:
              </p>
              <div className="my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="p-3 text-left text-xs text-muted-foreground">
                    Watts per module, PV systems connected by PG&amp;E, SCE and SDG&amp;E in 2025.
                    CRR calculation from CPUC DGStats (data through May 31, 2026).
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Group</th>
                      <th className="p-3">Systems</th>
                      <th className="p-3">Median watts per module</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Non-residential, all sizes</th><td className="p-3">3,391</td><td className="p-3">438 W (middle half 376&ndash;509 W)</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Non-residential, 100 kW or less</th><td className="p-3">2,118</td><td className="p-3">405 W</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Non-residential, 100 kW to 1 MW</th><td className="p-3">1,148</td><td className="p-3">504 W</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Non-residential, over 1 MW</th><td className="p-3">125</td><td className="p-3">508 W</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Residential, for comparison</th><td className="p-3">136,491</td><td className="p-3">370 W</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                By customer sector, the 2025 medians were 424 W for commercial customers, 498 W for
                industrial, 507 W for schools and colleges, 458 W for government and 413 W for
                nonprofits. The trend is upward: the non-residential median was 401 W for systems
                connected in 2024 and 482 W for those connected from January through May 2026.
              </p>
              <p>
                Project size drives most of the gap. Business systems of 100 kW or less sit close
                to home systems, at a 405 W median. Past 100 kW the median jumps to about 500 W,
                which is where the larger module formats in the next table come in.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Bigger panels, not better cells
              </h2>
              <p>
                The Energy Commission&apos;s{' '}
                <a href={cecPvList} target="_blank" rel="noopener noreferrer" className={link}>
                  PV Module List
                </a>{' '}
                gives each model&apos;s nameplate rating and its surface area, so you can see where
                the extra watts come from. Among the 1,651 non-building-integrated models added in
                the year to September 21, 2026, from 75 manufacturers:
              </p>
              <div className="my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="p-3 text-left text-xs text-muted-foreground">
                    Models added to the CEC PV Module List, September 21, 2025 to September 21,
                    2026, by module area. CRR calculation; efficiency is nameplate watts divided by
                    area at 1,000 W per square meter.
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Module area</th>
                      <th className="p-3">Models</th>
                      <th className="p-3">Median rating</th>
                      <th className="p-3">Median efficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">1.8 to 2.1 m&sup2;</th><td className="p-3">524</td><td className="p-3">440 W</td><td className="p-3">22.5%</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">2.1 to 2.4 m&sup2;</th><td className="p-3">157</td><td className="p-3">500 W</td><td className="p-3">22.8%</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">2.4 to 2.7 m&sup2;</th><td className="p-3">566</td><td className="p-3">590 W</td><td className="p-3">22.8%</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">2.7 m&sup2; and up</th><td className="p-3">346</td><td className="p-3">670 W</td><td className="p-3">23.0%</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                Efficiency barely moves across the sizes, which means a 590 W panel is not a
                better panel than a 440 W one. It is a larger one, around 2.5 square meters
                against 2. The median across all 1,651 models was 22.7%.
              </p>
              <p>
                Efficiency itself keeps rising slowly. Berkeley Lab&apos;s{' '}
                <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>
                  2026 data update
                </a>{' '}
                finds median module efficiencies have risen about 0.4 percentage points a year over
                the long term, and its{' '}
                <a href={tts2024Report} target="_blank" rel="noopener noreferrer" className={link}>
                  Tracking the Sun 2024
                </a>{' '}
                report found the rise in both residential and non-residential systems.
              </p>
              <p>
                One caution on these counts: each power rating in a product family is listed as its
                own model, so the table weights families with many ratings. It shows what is
                available, not what sold. The installed figures in the first table are the better
                guide to a typical project.
              </p>

              {/* One mid-page ask; its button scrolls to the form at the end of the page. */}
              <div className="not-prose">
                <CommercialReviewButton />
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                The trend in new models
              </h2>
              <p>
                The median rating of models added to the Energy Commission list has climbed each
                year: 420 W for models listed in 2022, 445 W in 2023, 535 W in 2024, 545 W in 2025
                and 565 W so far in 2026. Installed systems lag the list, because projects are
                designed months before they are connected.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What wattage means for your project
              </h2>
              <p>
                <strong>Panel count.</strong> A system&apos;s size is watts per panel times the
                number of panels. A 100 kW DC array takes about 227 panels at 440 W, or about 170
                at 590 W. A 500 kW array takes about 1,136 or 848.
              </p>
              <p>
                <strong>Roof fit.</strong> Larger panels mean fewer mounts and connections, but
                the roof has to suit the format. Setbacks, fire pathways, rooftop equipment and
                structural capacity decide how many fit, and a larger panel can leave more unused
                space around obstructions. The{' '}
                <Link href="/commercial-solar/commercial-solar-roofing" className={link}>
                  commercial roof guide
                </Link>{' '}
                covers those limits.
              </p>
              <p>
                <strong>Rated output versus real output.</strong> Nameplate watts are measured at
                standard test conditions. The Energy Commission notes that its PTC rating,
                calculated at conditions closer to the field, is lower than the nameplate and
                &ldquo;generally recognized as a more realistic measure of PV output,&rdquo; and
                that actual systems produce less again after soiling, wiring, inverter and heat
                losses. Compare proposals on modeled annual kilowatt-hours, not on panel wattage.
              </p>
              <p>
                <strong>Price.</strong> Quotes are priced per watt of the whole system, not per
                panel. The{' '}
                <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                  commercial cost benchmarks
                </Link>{' '}
                give the published per-watt figures, and the{' '}
                <Link href="/commercial-solar/commercial-solar-tax-credit" className={link}>
                  commercial solar tax credit guide
                </Link>{' '}
                covers the credit that applies to that cost.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What to check on a commercial proposal
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>The exact module model, and its listing on the{' '}
                  <a href={cecEquipLists} target="_blank" rel="noopener noreferrer" className={link}>
                    Energy Commission equipment lists
                  </a>
                  .
                </li>
                <li>Its nameplate and PTC ratings, dimensions and efficiency, from the list rather than a brochure.</li>
                <li>The DC system size, the number of modules, and the AC inverter capacity.</li>
                <li>The modeled first-year production and the degradation rate the model assumes.</li>
                <li>Whether the racking and roof structure were checked for the module&apos;s size and weight.</li>
              </ul>
              <p>
                If a bidder proposes a specific brand, the{' '}
                <Link href="/commercial-solar/rec-commercial-solar-panels" className={link}>
                  REC commercial panel guide
                </Link>{' '}
                shows how to read one manufacturer&apos;s listings, and{' '}
                <Link href="/commercial-solar/companies-california" className={link}>
                  comparing commercial solar companies
                </Link>{' '}
                covers the rest of the bid.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{f.question}</h3>
                    <p>{f.answer}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
                It does not sell or recommend any module brand.
              </p>

              <h2 id="method" className="mb-4 mt-10 text-2xl font-bold text-foreground">How these figures were calculated</h2>
              <p className="text-sm">
                <strong>Installed modules.</strong> From the CPUC DGStats Interconnected
                Applications file (PG&amp;E, SCE and SDG&amp;E; data through May 31, 2026), CRR
                took photovoltaic applications with status Interconnected and an approval date in
                2025, and divided each system&apos;s DC size by its total module count. Systems
                with a result outside 150 to 800 W were treated as data errors and dropped, which
                kept 3,391 of 3,607 non-residential systems. Non-residential means the commercial,
                industrial, educational, nonprofit, government and military sectors. Municipal
                utilities such as LADWP and SMUD are not in this file.
              </p>
              <p className="text-sm">
                <strong>Listed models.</strong> From the CEC PV Module List full data (marked
                &ldquo;Data has not changed since September 21, 2026&rdquo;), CRR took
                non-building-integrated models with a listing date from September 21, 2025 to
                September 21, 2026. Efficiency is the nameplate rating divided by the listed module
                area times 1,000 W per square meter.
              </p>

              <h2 id="sources" className="mb-4 mt-10 text-2xl font-bold text-foreground">Sources</h2>
              <p className="text-sm text-muted-foreground">Checked {CHECKED}.</p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>California Public Utilities Commission, <a href={dgStatsDownloads} target="_blank" rel="noopener noreferrer" className={link}>California Distributed Generation Statistics, Interconnected Applications Data Set</a> (data through May 31, 2026)</li>
                <li>California Energy Commission, <a href={cecPvList} target="_blank" rel="noopener noreferrer" className={link}>PV Module List</a>, full data (unchanged since September 21, 2026), and <a href={cecEquipLists} target="_blank" rel="noopener noreferrer" className={link}>Solar Equipment Lists</a></li>
                <li>LBNL, <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>U.S. Distributed Solar and Storage: 2026 Data Update</a> (August 2026) and <a href={tts2024Report} target="_blank" rel="noopener noreferrer" className={link}>Tracking the Sun 2024</a> (October 2024)</li>
              </ul>
            </div>

            <CommercialReviewForm className="mt-12" />
            <HubSpokeLinks hub="commercial" currentPath={path} />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
