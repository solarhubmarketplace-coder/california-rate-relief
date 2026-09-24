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
// "commercial solar tax credit 2026" queries were landing on the financing blog
// post. Every statutory statement below was read on 2026-09-23 from the Office
// of the Law Revision Counsel text "in effect on September 23, 2026". The page
// reports what the statute and IRS say; it does not tell a business what its
// own tax position is (Decision 11 treatment, as on cost-per-watt and church).

const title = 'Commercial Solar Tax Credit 2026 (§48E) for California';
const h1 = 'The Commercial Solar Tax Credit in 2026: What Section 48E Says';
const description =
  'The 2026 federal credit for business solar: 6% or 30% under §48E, the bonuses, the December 31, 2027 cutoff, depreciation, transfer and elective pay.';
const path = '/commercial-solar/commercial-solar-tax-credit';
const canonicalUrl = `https://ratereliefca.com${path}`;
const DATE_MODIFIED = '2026-09-23';
const CHECKED = 'September 23, 2026';
const link = 'text-primary underline';

const usc = (s: string) =>
  `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section${s}&num=0&edition=prelim`;
const irc48e = usc('48E');
const irc45 = usc('45');
const irc45y = usc('45Y');
const irc50 = usc('50');
const irc168 = usc('168');
const irc6417 = usc('6417');
const irc6418 = usc('6418');
const irc7701 = usc('7701');
const irsCeic = 'https://www.irs.gov/credits-deductions/clean-electricity-investment-credit';
const irsNotice202542 = 'https://www.irs.gov/pub/irs-drop/n-25-42.pdf';
const oecVIrs =
  'https://www.courtlistener.com/opinion/10871573/oregon-environmental-council-v-internal-revenue-service/';
const ftb100 = 'https://www.ftb.ca.gov/forms/2025/2025-100-booklet.html';
const dgStatsDownloads = 'https://www.californiadgstats.ca.gov/downloads/';

const faqs = [
  {
    question: 'What is the commercial solar tax credit in 2026?',
    answer:
      'It is the clean electricity investment credit in 26 U.S.C. §48E. The base rate is 6% of the qualified investment. It is 30% for a facility with a maximum net output under 1 MW AC or one that meets the prevailing-wage and apprenticeship requirements, and bonus amounts can apply on top.',
  },
  {
    question: 'Is the commercial solar tax credit ending?',
    answer:
      'For solar, effectively yes. Section 48E(e)(4) says the section does not apply to property placed in service after December 31, 2027 that is part of a wind or solar facility. Under the effective-date note, that cutoff reaches facilities whose construction began after July 4, 2026. Battery storage at the facility is excepted.',
  },
  {
    question: 'Is a commercial solar ITC reduced by debt financing?',
    answer:
      'Not by an ordinary loan, on the statute’s terms. Section 48E(d)(2) applies rules similar to §45(b)(3), which reduces the credit when the facility is financed with tax-exempt bond proceeds, by the lesser of 15% or the bond-financed share of the capital cost. Confirm how your own financing is treated with a tax professional.',
  },
  {
    question: 'Can a business sell its solar tax credit?',
    answer:
      'Yes. Under 26 U.S.C. §6418 the owner can elect to transfer all or part of the §48E credit to an unrelated taxpayer for cash. The payment is not income to the seller and not deductible to the buyer, a transferee cannot transfer it again, and it cannot go to a specified foreign entity.',
  },
  {
    question: 'Can a nonprofit or city claim the credit?',
    answer:
      'Yes, as a payment. Tax-exempt organizations and state and local governments are applicable entities under §6417 and can elect to treat the credit as a payment of tax. For a facility of 1 MW AC or more whose construction began after December 31, 2025, the amount is zero unless the domestic content requirement is met or a Treasury exception applies.',
  },
  {
    question: 'How does California treat the federal solar tax benefits?',
    answer:
      'Separately. The Franchise Tax Board’s 2025 Form 100 booklet says California does not conform to federal bonus depreciation under §168(k) and in general does not conform to the 2025 federal budget law, so the California side of a project must be worked out separately.',
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

export default function CommercialSolarTaxCredit() {
  return (
    <PublicLayout breadcrumbLabel="Commercial solar tax credit">
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
              <span className="text-foreground">Commercial solar tax credit</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Federal credit · 2026
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              <Byline updated={DATE_MODIFIED} sourcesHref="#sources" />
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg">
                The federal commercial solar tax credit is the clean electricity investment credit
                in 26 U.S.C. §48E: 6% of the qualified investment, or 30% for a facility under 1
                MW AC or one meeting the wage and apprenticeship rules, plus possible bonuses. The
                date matters most. A solar facility that began construction after July 4, 2026
                gets no credit for property placed in service after December 31, 2027.
              </p>
              <p>
                This page sets out what the statute and the IRS say, with the date each source was
                read. It does not tell you what your business can claim; that depends on facts a
                tax professional has to review. For the price the credit applies to, see the{' '}
                <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                  commercial solar cost per watt in California
                </Link>
                , and for every business guide, the{' '}
                <Link href="/commercial-solar" className={link}>
                  commercial solar hub
                </Link>
                . Sources were checked {CHECKED}.
              </p>
            </div>

            <KeyFacts
              className="max-w-3xl"
              sourcesHref="#sources"
              facts={[
                {
                  label: 'Credit rate',
                  value: '6% or 30%',
                  note: '30% under 1 MW AC, or with prevailing wage and apprenticeship. §48E(a)(2).',
                  source: { publisher: 'OLRC', url: irc48e, date: 'Sep 2026' },
                },
                {
                  label: 'Solar placed-in-service cutoff',
                  value: 'Dec 31, 2027',
                  note: 'For solar facilities whose construction began after July 4, 2026. §48E(e)(4).',
                  source: { publisher: 'OLRC', url: irc48e, date: 'Sep 2026' },
                },
                {
                  label: 'Depreciation class',
                  value: '5-year',
                  note: '§48E property; 100% first-year allowance for property acquired after Jan 19, 2025. §168.',
                  source: { publisher: 'OLRC', url: irc168, date: 'Sep 2026' },
                },
              ]}
            />

            <div className="prose prose-slate max-w-none">
              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                The rate: 6%, 30% and the bonus amounts
              </h2>
              <p>
                Under{' '}
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>
                  §48E(a)(2)
                </a>
                , the base rate is 6%. The alternative rate of 30% applies to a facility with a
                maximum net output of less than 1 megawatt measured in alternating current, or to
                one that satisfies the prevailing-wage requirements of §48E(d)(3) and, for its
                construction, the apprenticeship requirements of §48E(d)(4). Most business
                systems are well under that line: in CRR&apos;s count of the CPUC&apos;s{' '}
                <a href={dgStatsDownloads} target="_blank" rel="noopener noreferrer" className={link}>
                  DGStats interconnection data
                </a>
                , 3,468 of the 3,607 non-residential systems PG&amp;E, SCE and SDG&amp;E connected in
                2025 were 1 MW DC or smaller. Larger projects reach 30% through the labor rules.
              </p>
              <p>Three increases can apply on top:</p>
              <div className="my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Section 48E bonus amounts</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Bonus</th>
                      <th className="p-3">Increase</th>
                      <th className="p-3">Where it comes from</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Energy community</th><td className="p-3 align-top">10 percentage points at the 30% rate; 2 points at the 6% rate</td><td className="p-3 align-top">§48E(a)(3)(A), using the §45(b)(11)(B) definition</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Domestic content</th><td className="p-3 align-top">10 percentage points, per the IRS summary</td><td className="p-3 align-top">§48E(a)(3)(B): steel and iron must be U.S.-made, and U.S.-made manufactured products must be at least 50% of their total cost for construction beginning in 2026, 55% after 2026</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Low-income communities</th><td className="p-3 align-top">10 or 20 percentage points</td><td className="p-3 align-top">§48E(h): facilities under 5 MW AC that receive an allocation from a national cap of 1.8 GW DC a year</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                The{' '}
                <a href={irsCeic} target="_blank" rel="noopener noreferrer" className={link}>
                  IRS summary of the credit
                </a>{' '}
                (updated January 5, 2026) lists the 6% base, up to 30% with the labor
                requirements, and 10-point increases for domestic content and energy communities.
                It says the credit is claimed on Form 3468 and that a taxpayer cannot claim both
                the investment credit and the production credit for the same facility.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                The December 31, 2027 cutoff for solar
              </h2>
              <p>
                Public Law 119-21 added{' '}
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>
                  §48E(e)(4)
                </a>
                : the section &ldquo;shall not apply to any qualified property placed in service by
                the taxpayer after December 31, 2027, which is part of an applicable
                facility,&rdquo; meaning a wind or solar facility. The effective-date note applies
                that amendment to facilities whose construction begins after the date 12 months
                after July 4, 2025. A solar project that had not begun construction by July 4, 2026
                therefore has to be placed in service by December 31, 2027 to get any §48E credit.
              </p>
              <p>
                Two limits on that rule matter. Energy storage placed in service at the facility is
                excepted from the cutoff by §48E(e)(4)(C). And whether a project began
                construction in time is a facts question. The IRS set its test for wind and solar
                in{' '}
                <a href={irsNotice202542} target="_blank" rel="noopener noreferrer" className={link}>
                  Notice 2025-42
                </a>
                , which the U.S. District Court for the District of Columbia vacated and remanded
                on June 6, 2026 in{' '}
                <a href={oecVIrs} target="_blank" rel="noopener noreferrer" className={link}>
                  Oregon Environmental Council v. IRS
                </a>
                . If a seller says your project is grandfathered, ask for the tax position in
                writing and have your own tax professional review it.
              </p>
              <p>
                The rest of §48E still phases down by the year construction begins after the
                &ldquo;applicable year&rdquo;, which{' '}
                <a href={irc45y} target="_blank" rel="noopener noreferrer" className={link}>
                  §45Y(d)(3)
                </a>{' '}
                fixes at 2032: 100% for construction starting in 2033, 75% in 2034, 50% in 2035 and
                zero after. For solar, the 2027 cutoff arrives first.
              </p>

              {/* One mid-page ask; its button scrolls to the form at the end of the page. */}
              <div className="not-prose">
                <CommercialReviewButton />
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What the credit is calculated on
              </h2>
              <p>
                The credit applies to the basis of &ldquo;qualified property&rdquo; placed in
                service in the year.{' '}
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>
                  Section 48E(b)(2)
                </a>{' '}
                defines that as tangible personal property, or other tangible property &ldquo;not
                including a building or its structural components&rdquo; used as an integral part
                of the facility, on which depreciation is allowable and whose original use begins
                with the taxpayer. For a facility of 5 MW AC or less, §48E(b)(1) also counts the
                owner&apos;s spending on qualified interconnection property.
              </p>
              <p>
                The building exclusion is why carport canopies raise questions; the{' '}
                <Link href="/commercial-solar/commercial-solar-carport-cost" className={link}>
                  commercial carport cost guide
                </Link>{' '}
                covers that. Roof repairs done alongside a solar job raise the same line-drawing
                question, so price them on their own line.
              </p>
              <p>
                Claiming the credit lowers depreciable basis. Under{' '}
                <a href={irc50} target="_blank" rel="noopener noreferrer" className={link}>
                  §50(c)(3)
                </a>
                , only 50% of a clean electricity investment credit reduces the basis.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Depreciation, and how California differs
              </h2>
              <p>
                Under{' '}
                <a href={irc168} target="_blank" rel="noopener noreferrer" className={link}>
                  §168(e)(3)(B)(viii)
                </a>
                , §48E qualified property and energy storage technology are 5-year property. Section
                168(k) provides a 100% first-year allowance for qualified property, and the
                amending law applies it to property acquired after January 19, 2025.
              </p>
              <p>
                California does not follow that. The Franchise Tax Board&apos;s{' '}
                <a href={ftb100} target="_blank" rel="noopener noreferrer" className={link}>
                  2025 Form 100 booklet
                </a>{' '}
                lists §168(k) among the federal provisions California does not conform to and says
                California in general does not conform to the 2025 federal budget law. Ask whoever
                models your project to show the federal and California depreciation as separate
                lines.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Foreign-entity rules for projects starting construction in 2026
              </h2>
              <p>
                For a facility whose construction begins after December 31, 2025,{' '}
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>
                  §48E(b)(6)
                </a>{' '}
                removes it from the definition of qualified facility if its construction includes
                material assistance from a prohibited foreign entity. That is measured by a
                material assistance cost ratio, and{' '}
                <a href={irc7701} target="_blank" rel="noopener noreferrer" className={link}>
                  §7701(a)(52)
                </a>{' '}
                sets the threshold for a qualified facility at 40% for construction beginning in
                2026 and 45% in 2027 (55% and 60% for energy storage). Separately, §48E(d)(6)
                denies the credit to a taxpayer that is a specified foreign entity or a
                foreign-influenced entity.
              </p>
              <p>
                Ask the installer or developer who prepares the cost-ratio documentation for the
                modules, inverters and racking, and who carries the loss if the project fails the
                test.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Does financing reduce the credit?
              </h2>
              <p>
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>
                  Section 48E(d)(2)
                </a>{' '}
                applies rules similar to{' '}
                <a href={irc45} target="_blank" rel="noopener noreferrer" className={link}>
                  §45(b)(3)
                </a>
                . That provision reduces the credit when the facility is financed with proceeds of
                tax-exempt bonds, by the lesser of 15% or the share of capital spending those
                proceeds covered. It says nothing about ordinary commercial loans, equipment
                financing or leases. How a particular grant, subsidized program or lease affects
                your credit is a question for your tax professional.
              </p>
              <p>
                Leases and PPAs change who holds the credit, not its size: the owner of the system
                claims it. See{' '}
                <Link href="/commercial-solar/commercial-solar-lease-programs" className={link}>
                  commercial solar lease programs
                </Link>{' '}
                and{' '}
                <Link href="/commercial-solar/commercial-solar-ppa-vs-purchase-california" className={link}>
                  PPA versus purchase
                </Link>{' '}
                for how each structure handles it.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Selling the credit, or taking it as a payment
              </h2>
              <p>
                <strong>Transfer.</strong> Under{' '}
                <a href={irc6418} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §6418
                </a>
                , an owner can elect to transfer all or part of a §48E credit to an unrelated
                taxpayer. The price must be paid in cash, is not income to the seller and is not
                deductible to the buyer. The election is made by the due date of the return,
                including extensions, and is irrevocable. A buyer cannot resell the credit, and a
                §48E credit cannot be transferred to a specified foreign entity.
              </p>
              <p>
                <strong>Elective pay.</strong> Under{' '}
                <a href={irc6417} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §6417
                </a>
                , tax-exempt organizations, state and local governments, tribal governments and
                rural electric cooperatives, among others, can elect to treat the credit as a
                payment of tax. For
                those elections, §48E(d)(5) applies the domestic content phase-out in{' '}
                <a href={irc45y} target="_blank" rel="noopener noreferrer" className={link}>
                  §45Y(g)(12)
                </a>
                : a facility of 1 MW AC or more whose construction began after December 31, 2025
                gets 0% of the credit as a payment unless it meets the domestic content requirement
                or a Treasury exception applies. Facilities under 1 MW AC keep 100%. The{' '}
                <Link href="/commercial-solar/church-solar-california" className={link}>
                  church solar guide
                </Link>{' '}
                shows how a tax-exempt owner weighs this against a PPA.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Selling the property early: recapture
              </h2>
              <p>
                If the property is disposed of, or stops qualifying, within five years,{' '}
                <a href={irc50} target="_blank" rel="noopener noreferrer" className={link}>
                  §50(a)
                </a>{' '}
                recaptures part of the credit: 100% within the first full year after it was placed
                in service, then 80%, 60%, 40% and 20% for each following year. A business that
                expects to sell the building, or the system, inside that window should have the
                recapture exposure modeled before signing.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Questions to put to anyone quoting you the credit
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>What date does the proposal assume construction began, and on what evidence?</li>
                <li>What placed-in-service date does it assume, and what happens to the price if it slips past December 31, 2027?</li>
                <li>Is the system under 1 MW AC, or does the 30% rate depend on wage and apprenticeship compliance, and who documents that?</li>
                <li>Which costs are in the credit basis, and which (roof work, canopy steel) are not?</li>
                <li>Who prepares the foreign-entity cost-ratio documentation?</li>
                <li>Are any bonus amounts assumed, and on what basis?</li>
              </ul>
              <p>
                A proposal that shows the project before tax benefits, and then the claimed
                benefits as a separate case, is easier to check. The{' '}
                <Link href="/blog/commercial-solar-financing-california" className={link}>
                  commercial financing checklist
                </Link>{' '}
                lists the documents to request.
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
                This page summarizes statute and agency text as of the date shown; it is not tax
                advice, and it does not say what any business can claim.
              </p>

              <h2 id="sources" className="mb-4 mt-10 text-2xl font-bold text-foreground">Sources</h2>
              <p className="text-sm text-muted-foreground">Checked {CHECKED}.</p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>26 U.S.C. <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>§48E</a>, <a href={irc45} target="_blank" rel="noopener noreferrer" className={link}>§45</a>, <a href={irc45y} target="_blank" rel="noopener noreferrer" className={link}>§45Y</a>, <a href={irc50} target="_blank" rel="noopener noreferrer" className={link}>§50</a>, <a href={irc168} target="_blank" rel="noopener noreferrer" className={link}>§168</a>, <a href={irc6417} target="_blank" rel="noopener noreferrer" className={link}>§6417</a>, <a href={irc6418} target="_blank" rel="noopener noreferrer" className={link}>§6418</a> and <a href={irc7701} target="_blank" rel="noopener noreferrer" className={link}>§7701</a>, Office of the Law Revision Counsel (text in effect September 23, 2026)</li>
                <li>IRS, <a href={irsCeic} target="_blank" rel="noopener noreferrer" className={link}>Clean Electricity Investment Credit</a> (updated January 5, 2026)</li>
                <li>IRS, <a href={irsNotice202542} target="_blank" rel="noopener noreferrer" className={link}>Notice 2025-42</a>; U.S. District Court for the District of Columbia, <a href={oecVIrs} target="_blank" rel="noopener noreferrer" className={link}>Oregon Environmental Council v. IRS</a>, No. 25-cv-4400 (June 6, 2026)</li>
                <li>California Public Utilities Commission, <a href={dgStatsDownloads} target="_blank" rel="noopener noreferrer" className={link}>DGStats Interconnected Applications Data Set</a> (data through May 31, 2026); CRR count of 2025 non-residential PV systems</li>
                <li>California Franchise Tax Board, <a href={ftb100} target="_blank" rel="noopener noreferrer" className={link}>2025 Form 100 booklet</a></li>
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
