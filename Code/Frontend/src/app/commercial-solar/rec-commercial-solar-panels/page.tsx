import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { Byline } from '@/components/trust/Byline';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { CommercialReviewButton, CommercialReviewForm } from '@/components/growth/CommercialReview';

// Created 2026-09-23 (topical-authority program, CREATE_DEDICATED): the
// "rec commercial solar panels" queries were landing on the residential REC
// review. Specifications come from the California Energy Commission's PV
// Module List (full-data download; "data has not changed since September 21,
// 2026"), fetched 2026-09-23. No manufacturer marketing page is used as a source.

const title = 'REC Commercial Solar Panels: Models, Specs and Fit';
const h1 = 'REC Commercial Solar Panels: Which Models Fit a California Business Project';
const description =
  'The REC module lines on the California Energy Commission list, their wattage and voltage ratings, and what to check before a commercial bid specifies them.';
const path = '/commercial-solar/rec-commercial-solar-panels';
const canonicalUrl = `https://ratereliefca.com${path}`;
const DATE_MODIFIED = '2026-09-23';
const CHECKED = 'September 23, 2026';
const link = 'text-primary underline';

const cecModuleList = 'https://solarequipment.energy.ca.gov/Home/PVModuleList';
const cecEquipmentLists = 'https://www.energy.ca.gov/programs-and-topics/programs/solar-equipment-lists';
const lbnl2026 =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const usc = (s: string) =>
  `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section${s}&num=0&edition=prelim`;
const irc48e = usc('48E');
const irc7701 = usc('7701');
const irsNotice202615 = 'https://www.irs.gov/pub/irs-drop/n-26-15.pdf';

const faqs = [
  {
    question: 'Are REC solar panels good for commercial projects?',
    answer:
      'REC Group has 242 module models on the California Energy Commission list, all certified to UL 61730, including 590 to 740 watt models rated for 1,500-volt systems. Listing shows a module met safety standards and reported its ratings; the CEC makes no claim about performance or durability. Whether REC is right for your project depends on the design, price, availability and warranty in the bid.',
  },
  {
    question: 'Which REC panels are made for commercial systems?',
    answer:
      "On the CEC list, REC's Pro M and Pro MG (590 to 640 W), Pro L (650 to 680 W, bifacial) and Pro XL (720 to 740 W, bifacial) models are rated for 1,500-volt systems. The Pure-RX and Pure-R lines (400 to 475 W) are rated for 1,000 volts and use a black backsheet. Match the module's maximum system voltage to the inverter and string design in the proposal.",
  },
  {
    question: 'Where are REC solar panels manufactured?',
    answer:
      "The CEC module list does not record where a module was made, and this page does not rely on manufacturer marketing for it. Origin matters for the federal domestic content bonus and the prohibited-foreign-entity rules, so ask the bidder for the manufacturer's written origin documentation for the exact model and production lot.",
  },
  {
    question: 'Have REC solar panels been recalled?',
    answer:
      'The CEC marks equipment being removed from its eligible list with asterisks; none of the 242 REC Group entries carried that mark on the list dated September 21, 2026. That is not a full recall search. Ask the bidder to confirm there is no open safety notice for the specific model before it is installed.',
  },
  {
    question: 'Do REC panels qualify for the domestic content bonus?',
    answer:
      'It depends on where the specific modules and the project\'s other steel, iron and manufactured products were made, not on the brand. Under 26 U.S.C. §48E(a)(3)(B), the domestic manufactured-products share needed is 50% for projects beginning construction in 2026 and 55% after 2026. Get the supplier documentation and a tax professional\'s review before counting on the bonus.',
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

const rows: [string, string, string, string, string, string][] = [
  ['Pro XL', '720–740 W', '1,500 V', 'Bifacial, 144 half-cut HJT cells', '−0.247', 'Sep 2023'],
  ['Pro L', '650–680 W', '1,500 V', 'Bifacial, 132 half-cut cells', '−0.327', 'Sep 2023'],
  ['Pro M / Pro MG', '590–640 W', '1,500 V', '120 half-cut cells, white backsheet', '−0.239 / −0.233', 'Jun 2024'],
  ['Pure-RX / Pure-RX-DC', '430–475 W', '1,000 V', '88 half-cut cells, black backsheet', '−0.248', 'Dec 2023 – Mar 2026'],
  ['Pure-RXG', '440–460 W', '1,000 V', '88 half-cut cells, white backsheet', '−0.215', 'Oct 2024'],
  ['Pure-R', '400–430 W', '1,000 V', '80 half-cut cells, black backsheet', '−0.225', 'Oct–Dec 2022'],
];

export default function RecCommercialSolarPanels() {
  return (
    <PublicLayout breadcrumbLabel="REC commercial solar panels">
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
              <span className="text-foreground">REC commercial solar panels</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Modules · Commercial specification
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              <Byline updated={DATE_MODIFIED} sourcesHref="#sources" />
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg">
                REC Group has 242 module models on the California Energy Commission&apos;s PV
                module list, all certified to UL 61730. For commercial work, the relevant ones
                are its 590 to 740 watt Pro models, rated for 1,500-volt systems, and its 430 to
                475 watt Pure-RX models, rated for 1,000 volts. A listing is not a quality
                ranking, so judge an REC bid on design, price, availability and written warranty.
              </p>
              <p>
                This page is for businesses, landlords and public agencies that received a
                commercial proposal specifying REC modules. For the brand&apos;s residential
                panels and background, see the{' '}
                <Link href="/panel-reviews/rec-solar-panels-review" className={link}>
                  REC solar panels review
                </Link>
                . For everything else about business solar, start at the{' '}
                <Link href="/commercial-solar" className={link}>
                  commercial solar hub
                </Link>
                . Data was checked {CHECKED}.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                REC module lines on the CEC list
              </h2>
              <p>
                The{' '}
                <a href={cecModuleList} target="_blank" rel="noopener noreferrer" className={link}>
                  CEC PV Module List
                </a>{' '}
                records each model&apos;s nameplate rating, safety certification, maximum system
                voltage and temperature behavior as reported for listing. These are the REC
                Group lines most likely to appear in a 2026 commercial bid:
              </p>
              <div className="my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="p-3 text-left text-xs text-muted-foreground">
                    REC Group modules on the CEC PV Module List (data unchanged since September 21,
                    2026). Temperature coefficient of maximum power in % per °C, as listed. All
                    listed with UL 61730 safety certification.
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Line</th>
                      <th className="p-3">Nameplate</th>
                      <th className="p-3">Max system voltage</th>
                      <th className="p-3">Construction</th>
                      <th className="p-3">γPmax</th>
                      <th className="p-3">CEC listing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r[0]} className="border-t">
                        <th scope="row" className="p-3 align-top">{r[0]}</th>
                        <td className="p-3 align-top">{r[1]}</td>
                        <td className="p-3 align-top">{r[2]}</td>
                        <td className="p-3 align-top">{r[3]}</td>
                        <td className="p-3 align-top">{r[4]}</td>
                        <td className="p-3 align-top">{r[5]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Older REC Group families, with TP, NP and 72-cell model numbers, remain on the
                list as well, so a bid may name a model not shown here. Look up the exact model number on the CEC list before comparing.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What a CEC listing does and does not tell you
              </h2>
              <p>
                According to the CEC&apos;s{' '}
                <a href={cecEquipmentLists} target="_blank" rel="noopener noreferrer" className={link}>
                  solar equipment lists page
                </a>
                , the list covers equipment that meets national safety and performance
                standards and records values such as the PTC rating, nameplate ratings and
                temperature coefficients. It also says the Commission &ldquo;makes no claim or
                warranty on the equipment and its safety, performance, or durability,&rdquo; and
                that listing is not required to install equipment in California.
              </p>
              <p>
                The list&apos;s own notes add two caveats. Design qualification and performance
                test reports are optional submissions; the REC entries above show &ldquo;No
                Information Submitted&rdquo; for both, which means the data was not filed with the
                CEC, not that a test failed. And the PTC rating, which uses test conditions closer
                to real operation than the nameplate&apos;s standard test conditions, is still
                higher than a real array will produce after soiling, wiring, inverter and heat
                losses.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Are REC panels a good fit for your project?
              </h2>
              <p>The brand matters less than these project-level questions:</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Voltage and string design.</strong> A 1,500-volt module needs an
                  inverter and balance of system designed for 1,500-volt strings; a 1,000-volt
                  module does not. Ask which the design uses and why.
                </li>
                <li>
                  <strong>Heat.</strong> Rooftop modules in inland California run hot, and a
                  smaller (less negative) temperature coefficient loses less output as cells heat
                  up. Compare the listed γPmax of every module in competing bids on the same CEC
                  list rather than across marketing sheets.
                </li>
                <li>
                  <strong>Bifacial gain.</strong> The Pro L and Pro XL are bifacial. Rear-side
                  production depends on what is under the array, so ask whether the production
                  model credits bifacial gain on a white roof, a ground mount or a{' '}
                  <Link href="/commercial-solar/commercial-solar-carport-cost" className={link}>
                    parking canopy
                  </Link>
                  , and how much.
                </li>
                <li>
                  <strong>Roof area.</strong> Higher-wattage modules can fit more capacity on a
                  constrained roof, but fire-access pathways and structure often limit layout
                  first. See the{' '}
                  <Link href="/commercial-solar/commercial-solar-roofing" className={link}>
                    commercial roof guide
                  </Link>
                  .
                </li>
                <li>
                  <strong>Warranty and support.</strong> Get the manufacturer&apos;s product and
                  performance warranty as a document, and confirm who files a claim for you if the
                  installer stops operating.
                </li>
              </ul>

              {/* One mid-page ask; its button scrolls to the form at the end of the page. */}
              <div className="not-prose">
                <CommercialReviewButton />
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Where the modules were made, and why it matters for the credit
              </h2>
              <p>
                Country of manufacture is not on the CEC list, and it affects the federal credit
                in two ways. First, the domestic content bonus under{' '}
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §48E(a)(3)(B)
                </a>{' '}
                requires a set share of U.S.-made manufactured products: 50% for projects
                beginning construction in 2026 and 55% after 2026. Second, for construction
                beginning after December 31, 2025, the credit is denied if the facility includes
                material assistance from a prohibited foreign entity. Under{' '}
                <a href={irc7701} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §7701(a)(52)
                </a>
                , a solar facility beginning construction in 2026 needs a non-prohibited cost
                ratio of at least 40%, rising to 45% in 2027. The IRS published interim safe
                harbors for that calculation in{' '}
                <a href={irsNotice202615} target="_blank" rel="noopener noreferrer" className={link}>
                  Notice 2026-15
                </a>
                .
              </p>
              <p>
                Neither test turns on the brand name. Ask the bidder for supplier certifications
                for the exact modules, inverters and racking, and have a tax professional review
                them. The{' '}
                <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                  commercial cost and tax guide
                </Link>{' '}
                covers the rest of the credit rules.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                How much do REC commercial panels change the price?
              </h2>
              <p>
                Less than most buyers expect. Berkeley Lab&apos;s{' '}
                <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>
                  2026 data update
                </a>{' '}
                puts everything other than modules and inverters at roughly 80% of the median
                installed price of 2025 residential and non-residential systems. A premium
                module can still be the right call, but the design, labor, structure and
                interconnection lines move a commercial price more. Ask each bidder for the
                module line separately so you can see what the brand choice costs, and compare
                the full bid against the{' '}
                <Link href="/commercial-solar/companies-california" className={link}>
                  commercial proposal checklist
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Comparing an REC bid with another module
              </h2>
              <ol className="list-decimal space-y-3 pl-6">
                <li>Look up both exact model numbers on the CEC list and note nameplate, voltage and γPmax.</li>
                <li>Ask both bidders for the production model on the same weather file, layout and losses.</li>
                <li>Compare price per DC watt for the whole system, not per module.</li>
                <li>Compare the written warranties side by side, including who handles a claim.</li>
                <li>Get origin documentation from both if the domestic content bonus or foreign-entity rules matter to your tax position.</li>
              </ol>

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
                It has no relationship with REC Group, does not sell modules and does not endorse
                any manufacturer.
              </p>

              <h2 id="sources" className="mb-4 mt-10 text-2xl font-bold text-foreground">Sources</h2>
              <p className="text-sm text-muted-foreground">Checked {CHECKED}.</p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>California Energy Commission, <a href={cecModuleList} target="_blank" rel="noopener noreferrer" className={link}>PV Module List</a> (full-data download, data unchanged since September 21, 2026) and <a href={cecEquipmentLists} target="_blank" rel="noopener noreferrer" className={link}>Solar Equipment Lists</a></li>
                <li>LBNL, <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>U.S. Distributed Solar and Storage: 2026 Data Update</a> (August 2026)</li>
                <li>26 U.S.C. <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>§48E</a> and <a href={irc7701} target="_blank" rel="noopener noreferrer" className={link}>§7701</a>, Office of the Law Revision Counsel (text in effect September 22, 2026)</li>
                <li>IRS, <a href={irsNotice202615} target="_blank" rel="noopener noreferrer" className={link}>Notice 2026-15</a>, interim safe harbors for material assistance from a prohibited foreign entity</li>
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
