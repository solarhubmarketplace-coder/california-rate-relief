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
// "solar developers" and "commercial solar developers" queries were landing on
// /commercial-solar/companies-california. Figures and statutory statements
// were fetched on 2026-09-23 from the sources listed at the foot.

const title = 'Solar Developers in California: Role, Pay and How to Vet';
const h1 = 'Commercial Solar Developers in California: What They Do and How to Vet One';
const description =
  'What a solar developer does, how it differs from an EPC, how developers are paid through PPAs and project sales, and what to check before signing with one.';
const path = '/commercial-solar/solar-developers';
const canonicalUrl = `https://ratereliefca.com${path}`;
const DATE_MODIFIED = '2026-09-23';
const CHECKED = 'September 23, 2026';
const link = 'text-primary underline';

const cpucRule21 = 'https://www.cpuc.ca.gov/Rule21/';
const cecOptIn =
  'https://www.energy.ca.gov/programs-and-topics/topics/power-plants/opt-certification-program';
const lbnl2026 =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const tts2024Summary =
  'https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_executive_summary.pdf';
const usc = (s: string) =>
  `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section${s}&num=0&edition=prelim`;
const irc48e = usc('48E');
const irc6418 = usc('6418');
const irc7701 = usc('7701');
const irsNotice202542 = 'https://www.irs.gov/pub/irs-drop/n-25-42.pdf';
const oecVIrs =
  'https://www.courtlistener.com/opinion/10871573/oregon-environmental-council-v-internal-revenue-service/';
const boeLta = 'https://www.boe.ca.gov/proptaxes/pdf/lta26034.pdf';
const cslbLookup = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
const dgStatsDownloads = 'https://www.californiadgstats.ca.gov/downloads/';

const faqs = [
  {
    question: 'What does a solar developer do?',
    answer:
      'A developer turns a site into a project that can be financed and built. It secures the roof or land rights, applies for interconnection, gets permits, lines up a buyer for the power and the financing, then hires an EPC contractor to build the system. Some developers keep ownership after construction; others sell the finished project.',
  },
  {
    question: 'What is the difference between a solar developer and an EPC?',
    answer:
      'The developer owns the project risk before construction: site, interconnection, permits, offtake and financing. The EPC contractor engineers, procures and builds under a contract with the developer or owner. One company can do both, but the roles and the contracts are separate, and the EPC work is still done under a CSLB license.',
  },
  {
    question: 'Who are the top commercial solar developers in California?',
    answer:
      'This page does not rank developers. No dated primary-source ranking of commercial developers active in California was available, and a list would not tell you whether a developer can finance and finish your particular project. Ask for operating projects you can visit, who owns them today and how the developer handled interconnection on them.',
  },
  {
    question: 'How do commercial solar developers make money?',
    answer:
      'From the project itself: the margin in a power purchase agreement or lease over the project cost, a development fee, the sale of a finished or ready-to-build project to a long-term owner, or the value of federal tax credits, which the owner can use or, under 26 U.S.C. §6418, transfer to an unrelated taxpayer. Ask who will own your system after construction.',
  },
  {
    question: 'Can a developer still get the federal tax credit for a new solar project?',
    answer:
      'Under 26 U.S.C. §48E, a solar facility whose construction began after July 4, 2026 gets no credit for property placed in service after December 31, 2027. What counts as having begun construction was set out in IRS Notice 2025-42, which a federal court vacated on June 6, 2026. Ask the developer for its tax counsel\'s position in writing.',
  },
  {
    question: 'Who are the commercial solar PPA providers in California?',
    answer:
      'Developers, independent power producers and the financing partners of commercial installers. This page names none, because no dated primary-source list exists. In the CPUC interconnection data, 420 of the 751 third-party-owned business systems connected in California in 2025 were PPAs, and PPAs made up about 86% of third-party-owned capacity.',
  },
  {
    question: 'Should a business sign a PPA with a developer?',
    answer:
      'It can make sense if you cannot use the tax benefits or do not want to own the equipment. Read the rate, escalator, term, buyout options, removal obligations and what happens if the developer sells the project. Compare the PPA price over the full term against a purchase on the same production model.',
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

export default function SolarDevelopers() {
  return (
    <PublicLayout breadcrumbLabel="Solar developers">
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
              <span className="text-foreground">Solar developers</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Developers · PPAs · Ownership
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              <Byline updated={DATE_MODIFIED} sourcesHref="#sources" />
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg">
                A solar developer turns a site into a project someone will finance. It secures
                the roof or land rights, the interconnection path, the permits and a buyer for
                the power, then hires an EPC contractor to build and a long-term owner or
                investor to hold the system. For a California business, a developer usually
                arrives offering a power purchase agreement or lease rather than a purchase.
              </p>
              <p>
                If you are still sorting out who is who, the guide to{' '}
                <Link href="/commercial-solar/companies-california" className={link}>
                  commercial solar companies and EPCs
                </Link>{' '}
                covers installers and contractors, and the{' '}
                <Link href="/commercial-solar" className={link}>
                  commercial solar hub
                </Link>{' '}
                links every business guide on this site. Sources were checked {CHECKED}.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What a developer does, step by step
              </h2>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <strong>Site control.</strong> A roof lease, a land option or an easement that
                  gives the project the right to use the property for the contract term.
                </li>
                <li>
                  <strong>Interconnection.</strong> For systems serving a customer on PG&amp;E,
                  SCE or SDG&amp;E, the CPUC&apos;s{' '}
                  <a href={cpucRule21} target="_blank" rel="noopener noreferrer" className={link}>
                    Rule 21
                  </a>{' '}
                  sets the interconnection, operating and metering requirements. Projects that
                  sell into the wholesale market use the Wholesale Distribution Access Tariff or
                  the CAISO tariff instead.
                </li>
                <li>
                  <strong>Permits.</strong> Local building, electrical and sometimes land-use
                  approvals. Solar facilities of 50 MW or more can apply to the California Energy
                  Commission&apos;s{' '}
                  <a href={cecOptIn} target="_blank" rel="noopener noreferrer" className={link}>
                    opt-in certification program
                  </a>
                  , which has the CEC decide within 270 days of a complete application.
                </li>
                <li>
                  <strong>Offtake.</strong> A buyer for the power: the business hosting the
                  system under a PPA, a utility, or a community choice aggregator.
                </li>
                <li>
                  <strong>Financing and tax credits.</strong> Debt, equity and the federal
                  credit. The credit can be used by the owner or, under{' '}
                  <a href={irc6418} target="_blank" rel="noopener noreferrer" className={link}>
                    26 U.S.C. §6418
                  </a>
                  , transferred to an unrelated taxpayer, though not to a specified foreign
                  entity.
                </li>
                <li>
                  <strong>Construction and operations.</strong> An EPC builds the system, and an
                  owner or service provider runs it for the life of the contract.
                </li>
              </ol>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Developer, EPC, installer, financier: how the roles differ
              </h2>
              <div className="my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Roles on a commercial solar project</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Role</th>
                      <th className="p-3">What it carries</th>
                      <th className="p-3">What to ask for</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Developer</th><td className="p-3 align-top">Site, interconnection, permits, offtake and financing risk before construction</td><td className="p-3 align-top">Operating projects, interconnection history, who will own the system</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">EPC contractor</th><td className="p-3 align-top">Design, equipment purchasing and construction</td><td className="p-3 align-top">CSLB license of the signing entity, subcontractors, workmanship warranty</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Installer</th><td className="p-3 align-top">Selling and installing a standard system</td><td className="p-3 align-top">Relevant commercial work, service terms</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Owner or financier</th><td className="p-3 align-top">Title to the system, tax benefits, long-term operation</td><td className="p-3 align-top">Contract term, buyout, assignment and removal terms</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                One company can hold several roles. Get each one named in the contract, and
                check the construction entity in the{' '}
                <a href={cslbLookup} target="_blank" rel="noopener noreferrer" className={link}>
                  CSLB license lookup
                </a>
                .
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                How developers get paid, and why it matters to you
              </h2>
              <p>
                A developer earns from the project: the spread between what a PPA or lease pays
                and what the project cost, a development fee, the sale of a finished or
                ready-to-build project to a long-term owner, or the value of the tax credit. None
                of that is a problem. It becomes one when the contract does not say what happens
                after the developer sells.
              </p>
              <p>
                Third-party ownership is common in the segments developers target. LBNL&apos;s{' '}
                <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>
                  2026 data update
                </a>{' '}
                found third-party ownership roughly twice as common at tax-exempt hosts as at
                commercial ones in 2025, with the highest rates at &ldquo;other&rdquo; tax-exempt
                sites, many of them houses of worship. Its{' '}
                <a href={tts2024Summary} target="_blank" rel="noopener noreferrer" className={link}>
                  2024 Tracking the Sun summary
                </a>{' '}
                reported the same pattern, particularly for schools and government sites. If you
                are one of those hosts, see{' '}
                <Link href="/commercial-solar/church-solar-california" className={link}>
                  church solar in California
                </Link>{' '}
                and{' '}
                <Link href="/commercial-solar/school-solar-california" className={link}>
                  school solar in California
                </Link>
                , which compare owning with elective pay against a developer&apos;s PPA.
              </p>

              {/* One mid-page ask; its button scrolls to the form at the end of the page. */}
              <div className="not-prose">
                <CommercialReviewButton />
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                The tax-credit clock every developer is working against
              </h2>
              <p>
                Developer proposals written in 2026 are shaped by federal deadlines. Under{' '}
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §48E
                </a>
                , a solar facility whose construction began after July 4, 2026 gets no credit
                for property placed in service after December 31, 2027. Battery storage at the
                facility is excepted from that cutoff.
              </p>
              <p>
                Whether a project began construction in time was governed by{' '}
                <a href={irsNotice202542} target="_blank" rel="noopener noreferrer" className={link}>
                  IRS Notice 2025-42
                </a>
                , which required physical work of a significant nature and kept a 5% cost safe
                harbor only for solar facilities of 1.5 MW AC or less. On June 6, 2026, the U.S.
                District Court for the District of Columbia vacated that notice in full and sent
                it back to the IRS in{' '}
                <a href={oecVIrs} target="_blank" rel="noopener noreferrer" className={link}>
                  Oregon Environmental Council v. IRS
                </a>
                . If a developer tells you your project is grandfathered, ask for its tax
                counsel&apos;s position in writing and have your own tax professional review it.
              </p>
              <p>
                Sourcing rules also apply. For construction beginning after December 31, 2025,
                the credit is denied if the facility includes material assistance from a
                prohibited foreign entity, measured by a cost ratio. Under{' '}
                <a href={irc7701} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §7701(a)(52)
                </a>
                , the threshold for a qualified facility is 40% for construction beginning in
                2026 and 45% in 2027. Ask the developer who documents that ratio and who bears
                the loss if it fails.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Questions to ask a developer offering a PPA or lease
              </h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>What is the starting rate, the annual escalator and the total term?</li>
                <li>Who owns the system on day one, and can the contract be assigned without your consent?</li>
                <li>What are the buyout dates and prices, and what happens at the end of the term?</li>
                <li>Who pays for removal and roof repair if the system has to come off for reroofing?</li>
                <li>What production does the rate assume, and is there a performance guarantee?</li>
                <li>Who carries property insurance and property tax on the equipment?</li>
              </ul>
              <p>
                On property tax, California&apos;s new-construction exclusion for active solar
                energy systems in Revenue and Taxation Code section 73 becomes inoperative on
                January 1, 2027; systems excluded before then stay excluded until the property
                changes ownership, according to the Board of Equalization&apos;s{' '}
                <a href={boeLta} target="_blank" rel="noopener noreferrer" className={link}>
                  Letter to Assessors 2026/034
                </a>
                . Ask the developer how its model treats a system finished on or after that date.
              </p>
              <p>
                Then compare the offer against ownership on the same production model, using{' '}
                <Link href="/commercial-solar/commercial-solar-ppa-vs-purchase-california" className={link}>
                  PPA versus purchase for California businesses
                </Link>{' '}
                and the{' '}
                <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                  commercial installed-cost benchmarks
                </Link>
                .
              </p>

              <h2 id="ppa-providers" className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Commercial solar PPA providers: who offers them and how to vet one
              </h2>
              <p>
                A PPA provider owns the system on your property and sells you its output per
                kilowatt-hour. The provider is usually a developer, an independent power producer
                or a financing partner of the installer, and the company that sells you the PPA
                is not always the one that will own it after construction.
              </p>
              <p>
                PPAs are the main third-party structure for California business solar. In
                CRR&apos;s count of the CPUC&apos;s{' '}
                <a href={dgStatsDownloads} target="_blank" rel="noopener noreferrer" className={link}>
                  DGStats interconnection data
                </a>
                , 420 of the 751 third-party-owned non-residential systems connected by PG&amp;E,
                SCE and SDG&amp;E in 2025 were PPAs, with a median size of 121 kW DC, and PPAs were
                about 86% of third-party-owned capacity. At schools, nonprofits and public agencies
                the share was higher still: 116 of 124 third-party-owned systems.
              </p>
              <p>
                There is a tax reason for that. Under{' '}
                <a href={irc7701} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §7701(e)(3)
                </a>
                , a contract to sell you electricity from a solar facility is treated as a service
                contract rather than a lease unless you operate the facility, bear a significant
                financial burden if it underperforms, get a significant financial benefit if its
                operating costs come in under the contract standards, or hold an option to buy it
                at a fixed price other than fair market value. That is the background to how a
                PPA&apos;s buyout price is defined, so read that clause closely and have your own
                adviser review it.
              </p>
              <p>To vet a provider, get these in writing:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Operating systems it owns today, with contacts at host sites you can call.</li>
                <li>Who will own and finance your system at completion, and whether that financing is committed.</li>
                <li>Who monitors and repairs the system, the response times, and what you are owed if it is down.</li>
                <li>The rate, escalator, term, any minimum purchase and the production estimate behind the price.</li>
                <li>The buyout schedule and method, assignment rights, and what happens if the provider sells the project or fails.</li>
                <li>Removal and roof-restoration duties at the end of the term.</li>
              </ul>
              <p>
                If you are weighing a lease instead, see{' '}
                <Link href="/commercial-solar/commercial-solar-lease-programs" className={link}>
                  commercial solar lease programs
                </Link>
                , and for the credit the provider is pricing in, the{' '}
                <Link href="/commercial-solar/commercial-solar-tax-credit" className={link}>
                  commercial solar tax credit guide
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Utility-scale and community solar developers
              </h2>
              <p>
                Developers building power plants rather than on-site systems work in a
                different market. Their projects interconnect to the transmission or wholesale
                distribution system rather than under Rule 21, sell power to utilities or
                community choice aggregators, and at 50 MW or more can seek CEC opt-in
                certification. If a landowner is being approached about leasing land for a
                project, those are the terms to research, not the commercial rooftop terms on
                this page.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                When working with a developer is the wrong fit
              </h2>
              <p>
                If your business has the tax appetite to use the credit and depreciation and
                the cash or credit to buy the system, owning it directly usually keeps more of
                the value. A developer PPA is also a poor fit if you may sell the building, move
                or reroof within the contract term without a clear buyout or relocation clause.
                The{' '}
                <Link href="/blog/commercial-solar-financing-california" className={link}>
                  commercial financing guide
                </Link>{' '}
                sets out the alternatives.
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
                It does not develop, own or finance solar projects, and nothing on this page is
                tax advice.
              </p>

              <h2 id="sources" className="mb-4 mt-10 text-2xl font-bold text-foreground">Sources</h2>
              <p className="text-sm text-muted-foreground">Checked {CHECKED}.</p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>CPUC, <a href={cpucRule21} target="_blank" rel="noopener noreferrer" className={link}>Electric Rule 21</a></li>
                <li>California Energy Commission, <a href={cecOptIn} target="_blank" rel="noopener noreferrer" className={link}>Opt-In Certification Program</a></li>
                <li>LBNL, <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>U.S. Distributed Solar and Storage: 2026 Data Update</a> (August 2026) and <a href={tts2024Summary} target="_blank" rel="noopener noreferrer" className={link}>Tracking the Sun 2024 executive summary</a> (August 2024)</li>
                <li>26 U.S.C. <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>§48E</a>, <a href={irc6418} target="_blank" rel="noopener noreferrer" className={link}>§6418</a> and <a href={irc7701} target="_blank" rel="noopener noreferrer" className={link}>§7701</a>, Office of the Law Revision Counsel (text in effect September 22, 2026; §7701(e) re-read September 23, 2026)</li>
                <li>California Public Utilities Commission, <a href={dgStatsDownloads} target="_blank" rel="noopener noreferrer" className={link}>DGStats Interconnected Applications Data Set</a> (data through May 31, 2026); CRR count of 2025 non-residential PV systems</li>
                <li>IRS, <a href={irsNotice202542} target="_blank" rel="noopener noreferrer" className={link}>Notice 2025-42</a>; U.S. District Court for the District of Columbia, <a href={oecVIrs} target="_blank" rel="noopener noreferrer" className={link}>Oregon Environmental Council v. IRS</a>, No. 25-cv-4400 (June 6, 2026)</li>
                <li>California State Board of Equalization, <a href={boeLta} target="_blank" rel="noopener noreferrer" className={link}>Letter to Assessors 2026/034</a> (September 1, 2026)</li>
                <li>CSLB, <a href={cslbLookup} target="_blank" rel="noopener noreferrer" className={link}>license lookup</a></li>
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
