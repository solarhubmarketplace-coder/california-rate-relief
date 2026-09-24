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

// Upgraded 2026-09-23 (topical-authority program, Tier 2): the page now owns
// "business solar financing" and "financing commercial solar projects", and
// answers the loan, SBA, grant and tax-credit questions its Search Console
// queries ask. It moved off DecisionPage to the PublicLayout + ArticleJsonLd
// pattern (as companies-california did in Tier 1) so scripts/qc-gate-tsx.mjs
// can see its Article, FAQPage and author signals. The 2025 ownership counts
// are CRR's tabulation of the CPUC DGStats Interconnected Applications file
// (data through 2026-05-31): PV, status Interconnected, non-residential
// sectors, approved in 2025. The /commercial-solar/financing-options merge
// (G08) is held under the Decision 14 default, so this stays a separate,
// document-focused guide.

const metaTitle = 'Commercial Solar Financing in California: 4 Options Compared';
const h1 = 'Commercial Solar Financing in California: Loans, SBA, Leases, PPAs and PACE';
const description =
  'How a California business can finance solar: purchase or loan, SBA 7(a) and 504, lease or PPA, and PACE. Who owns the system and what documents to compare.';
const path = '/blog/commercial-solar-financing-california';
const canonicalUrl = `https://ratereliefca.com${path}`;
const DATE_MODIFIED = '2026-09-23';
const CHECKED = 'September 23, 2026';
const link = 'text-primary underline';

const cpucSolarGuide = 'https://www.cpuc.ca.gov/solarguide/';
const treasurerPace = 'https://www.treasurer.ca.gov/caeatfa/pace/background';
const sba7a = 'https://www.sba.gov/funding-programs/loans/7a-loans';
const sba504 = 'https://www.sba.gov/funding-programs/loans/504-loans';
const goGreen = 'https://www.treasurer.ca.gov/caeatfa/gogreen/business/index.asp';
const reap =
  'https://www.rd.usda.gov/programs-services/energy-programs/rural-energy-america-program-renewable-energy-systems-energy-efficiency-improvement-guaranteed-loans';
const dgStats = 'https://www.californiadgstats.ca.gov/downloads/';
const usc = (s: string) =>
  `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section${s}&num=0&edition=prelim`;
const irc48e = usc('48E');
const irc45 = usc('45');

const faqs = [
  {
    question: 'How do you finance a commercial solar project in California?',
    answer:
      'Five ways: pay cash, borrow (a bank or equipment loan, or an SBA-backed 7(a) or 504 loan), lease the system, sign a power purchase agreement, or use PACE financing repaid on the property tax bill. Owning keeps the federal credit and depreciation; a lease or PPA gives them to the third-party owner in exchange for no upfront cost.',
  },
  {
    question: 'Is a commercial solar ITC reduced by debt financing?',
    answer:
      'Not by an ordinary loan, on the statute’s terms. Section 48E(d)(2) applies rules similar to §45(b)(3), which reduces the credit when the facility is financed with tax-exempt bond proceeds, by the lesser of 15% or the bond-financed share. Have a tax professional confirm how your own financing is treated.',
  },
  {
    question: 'Can I use an SBA loan for commercial solar?',
    answer:
      'Possibly. The SBA lists purchasing and installing machinery and equipment among 7(a) uses, with a $5 million maximum, and 504 loans finance major fixed assets, including machinery with at least 10 years of useful life, up to $5.5 million per transaction. Whether your project and business qualify is the lender’s decision.',
  },
  {
    question: 'Are there long-term loans for business solar, such as 15 or 20 years?',
    answer:
      'The SBA’s 504 program offers 10-, 20- and 25-year maturities through Certified Development Companies. Terms on bank loans, equipment financing and PACE vary by lender and program, so ask for the term, rate, fees and prepayment rules in writing.',
  },
  {
    question: 'Are there grants for commercial solar in California?',
    answer:
      'Few. USDA’s REAP program offers grants to agricultural producers and rural small businesses, but its April 9, 2026 update says it is not accepting grant applications at this time; guaranteed loan applications may still be submitted. California’s GoGreen Business program supports small-business loans for clean energy rather than paying grants.',
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description,
    type: 'article',
    url: canonicalUrl,
    modifiedTime: `${DATE_MODIFIED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, description),
};

export default function CommercialSolarFinancingCalifornia() {
  return (
    <PublicLayout
      breadcrumbLabel="Commercial solar financing"
      breadcrumbParent={{ label: 'Commercial Solar', href: '/commercial-solar' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline={h1}
        url={canonicalUrl}
        datePublished="2026-04-23"
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
              <span className="text-foreground">Commercial solar financing</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Financing · Loans · Ownership
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              <Byline updated={DATE_MODIFIED} sourcesHref="#sources" />
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg">
                A California business can pay for solar five ways: cash, a loan (including
                SBA-backed loans), a lease, a power purchase agreement, or PACE financing repaid on
                the property tax bill. Owning keeps the federal tax credit and depreciation; a
                lease or PPA hands them to a third-party owner in exchange for no upfront cost.
                Compare signed documents for the same project, not monthly payments.
              </p>
              <p>
                This guide is about the paperwork and the programs. For which structure tends to
                suit which kind of business, see the{' '}
                <Link href="/commercial-solar/financing-options" className={link}>
                  commercial financing options guide
                </Link>
                ; for every business guide, the{' '}
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
                  label: 'SBA 7(a) maximum',
                  value: '$5 million',
                  note: 'Uses include buying and installing machinery and equipment.',
                  source: { publisher: 'SBA', url: sba7a, date: 'Jul 2026' },
                },
                {
                  label: 'SBA 504 maximum',
                  value: '$5.5 million',
                  note: 'Per transaction; 10-, 20- or 25-year maturities for major fixed assets.',
                  source: { publisher: 'SBA', url: sba504, date: 'Mar 2026' },
                },
                {
                  label: 'CA business systems third-party owned, 2025',
                  value: '751 of 3,607',
                  note: 'Non-residential PV connected by PG&E, SCE and SDG&E. CRR count from CPUC DGStats.',
                  source: { publisher: 'CPUC DGStats', url: dgStats, date: 'May 2026 data' },
                },
              ]}
            />

            <div className="prose prose-slate max-w-none">
              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                How California businesses paid for solar in 2025
              </h2>
              <p>
                Most business owners who went solar in 2025 owned the system. In CRR&apos;s count
                of the CPUC&apos;s{' '}
                <a href={dgStats} target="_blank" rel="noopener noreferrer" className={link}>
                  DGStats interconnection data
                </a>
                , 2,855 of the 3,607 non-residential systems PG&amp;E, SCE and SDG&amp;E connected
                that year were host-owned, paid for with cash or a loan, and 751 were third-party
                owned. Of the third-party systems, 420 were power purchase agreements, 286 prepaid
                leases and 28 monthly leases. PPAs dominated by size, at about 86% of
                third-party-owned capacity.
              </p>
              <p>
                Property-assessed financing barely shows up: only one 2025 business system was
                flagged as PACE-financed, though that field was blank on 490 records. Treat PACE as
                an option to check, not the default.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Start with one project scope
              </h2>
              <p>
                A financing comparison is useful only when each proposal describes the same
                project. Ask every provider to identify the system size, equipment, roof, canopy or
                ground-mount scope, electrical upgrades, battery scope, permits, interconnection
                work and service responsibilities separately.
              </p>
              <p>
                Then compare the cash price, every payment, ownership, production assumptions,
                remaining utility charges and end-of-term rights. A lower initial payment does not
                show the total obligation or decide which party will own and operate the
                equipment. The{' '}
                <Link href="/commercial-solar/cost-per-watt-california" className={link}>
                  commercial cost-per-watt benchmarks
                </Link>{' '}
                give you a published baseline for the cash price.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Put each financing structure on the same sheet
              </h2>
              <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">
                    Commercial solar financing document comparison checklist
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4">Structure</th>
                      <th className="p-4">Questions that the documents must answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <th scope="row" className="p-4 align-top">Purchase or lender financing</th>
                      <td className="p-4">Who owns the system, the cash price, every loan payment and fee, security or collateral terms, maintenance responsibility, and what happens on a property sale or refinancing.</td>
                    </tr>
                    <tr className="border-t">
                      <th scope="row" className="p-4 align-top">Lease</th>
                      <td className="p-4">Who owns and maintains the system, the fixed or prepaid payment, escalator, term, production risk, buyout, transfer and removal terms.</td>
                    </tr>
                    <tr className="border-t">
                      <th scope="row" className="p-4 align-top">Power-purchase agreement</th>
                      <td className="p-4">Who owns and maintains the system, how electricity is measured and priced, the escalation formula, minimum or other payment duties, term, performance remedy, transfer and end-of-term terms.</td>
                    </tr>
                    <tr className="border-t">
                      <th scope="row" className="p-4 align-top">Property Assessed Clean Energy (PACE)</th>
                      <td className="p-4">Whether the property lies in a participating district, the assessment and property-tax collection terms, lender and title-holder consents, priority, transfer treatment, total payment and default terms.</td>
                    </tr>
                    <tr className="border-t">
                      <th scope="row" className="p-4 align-top">SBA-backed loan</th>
                      <td className="p-4">Whether the actual project and borrower qualify, the lender&apos;s underwriting, collateral, rate, maturity, fees, guarantees and closing conditions. SBA program eligibility is not a project approval.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Understand ownership before comparing payments
              </h2>
              <p>
                The CPUC&apos;s{' '}
                <a href={cpucSolarGuide} target="_blank" rel="noopener noreferrer" className={link}>
                  solar consumer guide
                </a>{' '}
                describes a purchase as a customer-owned system, while a power-purchase agreement
                generally has a provider own the equipment and sell the electricity it generates.
                Commercial agreements can be more complex, so the signed commercial contract, not a
                residential example or a sales label, controls the specific project.
              </p>
              <p>
                For any third-party-owned structure, obtain the written price schedule, annual
                change formula, operations and maintenance duties, insurance, roof-access rights,
                performance terms, transfer process and end-of-term options. The{' '}
                <Link href="/commercial-solar/commercial-solar-lease-programs" className={link}>
                  guide to commercial solar leases
                </Link>{' '}
                covers equipment leases and roof leases, and{' '}
                <Link href="/commercial-solar/solar-developers#ppa-providers" className={link}>
                  how to vet a commercial PPA provider
                </Link>{' '}
                covers the PPA side.
              </p>

              {/* One mid-page ask; its button scrolls to the form at the end of the page. */}
              <div className="not-prose">
                <CommercialReviewButton />
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Commercial solar loans and SBA programs
              </h2>
              <p>
                A loan keeps ownership, and with it the tax credit and depreciation, with your
                business. Banks and equipment lenders set their own terms, so the useful public
                benchmarks are the SBA programs. The SBA says a{' '}
                <a href={sba7a} target="_blank" rel="noopener noreferrer" className={link}>
                  7(a) loan
                </a>{' '}
                can be up to $5 million and can be used for purchasing and installing machinery and
                equipment, among other purposes (page updated July 27, 2026).
              </p>
              <p>
                The{' '}
                <a href={sba504} target="_blank" rel="noopener noreferrer" className={link}>
                  504 program
                </a>{' '}
                provides long-term, fixed-rate financing for major fixed assets, including
                machinery with at least 10 years of useful life, up to $5.5 million per
                transaction, with 10-, 20- or 25-year maturities. It runs through Certified
                Development Companies and is limited to for-profit businesses with tangible net
                worth under $20 million and average net income under $6.5 million over the two
                prior years (page updated March 30, 2026).
              </p>
              <p>
                General eligibility does not establish that a specific solar project, borrower or
                term will qualify. If a proposal refers to SBA financing, request the actual lender
                term sheet and compare it with other offers, and keep the contractor&apos;s project
                proposal separate from the lender&apos;s agreement.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                PACE is property-based, so check the property documents
              </h2>
              <p>
                The California State Treasurer&apos;s{' '}
                <a href={treasurerPace} target="_blank" rel="noopener noreferrer" className={link}>
                  PACE background page
                </a>{' '}
                describes PACE as a way to finance clean energy improvements through an assessment
                on the local property-tax bill in authorized districts, and notes that the
                assessment is associated with the property and has priority over other
                property-based debts in a foreclosure.
              </p>
              <p>
                That makes title, existing-lender, district and sale documents central to a PACE
                review. Do not assume a program, funding source, consent, rate, term or transfer
                result is available at a particular property. The{' '}
                <Link href="/commercial-solar/cpace-financing-california" className={link}>
                  C-PACE guide
                </Link>{' '}
                covers how the assessment works in California.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Grants and state programs for business solar
              </h2>
              <p>
                <strong>USDA REAP.</strong> The{' '}
                <a href={reap} target="_blank" rel="noopener noreferrer" className={link}>
                  Rural Energy for America Program
                </a>{' '}
                serves agricultural producers and small businesses in rural areas of 50,000 people
                or fewer. It lists renewable energy grants of $2,500 to $1 million, covering up to
                50% of eligible costs for qualifying projects and 25% for others, and loan
                guarantees on up to 75% of eligible costs. Its April 9, 2026 update says the agency
                is not accepting REAP grant applications at this time, while guaranteed loan
                applications may still be submitted.
              </p>
              <p>
                <strong>GoGreen Business Energy Financing.</strong> The State Treasurer&apos;s{' '}
                <a href={goGreen} target="_blank" rel="noopener noreferrer" className={link}>
                  GoGreen Business program
                </a>{' '}
                gives participating lenders a loss reserve for loans to small businesses and
                nonprofits (100 or fewer employees, under $16 million in revenue, or within SBA
                size standards) in specified utility territories. Clean energy generation, storage
                and EV charging were added as eligible measures in 2024. It lowers lender risk; it
                is not a grant.
              </p>
              <p>
                For storage incentives, see{' '}
                <Link href="/commercial-solar/sgip-battery-storage" className={link}>
                  SGIP commercial battery storage status
                </Link>
                .
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                The tax credit, and whether financing reduces it
              </h2>
              <p>
                The federal credit for business solar is{' '}
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §48E
                </a>
                , and it goes to whoever owns the system: you under a purchase or loan, the
                provider under a lease or PPA. For a solar facility whose construction began after
                July 4, 2026, it does not apply to property placed in service after December 31,
                2027, so any structure&apos;s timeline has to fit that date.
              </p>
              <p>
                A common question is whether borrowing shrinks the credit. Section 48E(d)(2)
                applies rules similar to{' '}
                <a href={irc45} target="_blank" rel="noopener noreferrer" className={link}>
                  §45(b)(3)
                </a>
                , which reduces the credit when tax-exempt bond proceeds finance the facility, by
                the lesser of 15% or the bond-financed share. The statute does not reduce it for an
                ordinary commercial loan. The{' '}
                <Link href="/commercial-solar/commercial-solar-tax-credit" className={link}>
                  commercial solar tax credit guide
                </Link>{' '}
                sets out the rates, bonuses and transfer rules.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Keep utility and tax assumptions separate
              </h2>
              <p>
                A financing model can include production, utility-bill, tax or incentive
                assumptions. Those are not guaranteed by the financing label. Put each assumption
                beside its source, observation date and the party responsible for it, and get
                current utility and tax advice that applies to the actual customer, property,
                ownership model and project date.
              </p>
              <p>
                Do not subtract a claimed incentive, utility credit or tax result from a project
                price until the applicable source and eligibility have been confirmed for the
                proposed structure.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Documents to collect before a decision
              </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>A line-item technical scope and cash price for the same project.</li>
                <li>The proposed financing, lease, PPA or assessment agreement and every exhibit.</li>
                <li>A full payment schedule, including any escalation, fees, taxes and end-of-term terms.</li>
                <li>Written production, utility-tariff and remaining-bill assumptions.</li>
                <li>Written allocation of ownership, maintenance, insurance, roof or site access and removal obligations.</li>
                <li>Property-sale, transfer, refinancing, lender-consent and default provisions.</li>
                <li>Current tax, accounting and legal advice for the business and property before signing.</li>
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
                It does not lend, lease or arrange financing, and a commercial inquiry does not
                approve financing, select a lender or PPA provider, or promise a price, savings or
                project outcome.
              </p>

              <h2 id="sources" className="mb-4 mt-10 text-2xl font-bold text-foreground">Sources</h2>
              <p className="text-sm text-muted-foreground">Checked {CHECKED}.</p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>CPUC, <a href={cpucSolarGuide} target="_blank" rel="noopener noreferrer" className={link}>California Solar Consumer Protection Guide</a></li>
                <li>California State Treasurer, <a href={treasurerPace} target="_blank" rel="noopener noreferrer" className={link}>PACE background and history</a> and <a href={goGreen} target="_blank" rel="noopener noreferrer" className={link}>GoGreen Business Energy Financing</a></li>
                <li>U.S. Small Business Administration, <a href={sba7a} target="_blank" rel="noopener noreferrer" className={link}>7(a) loans</a> (updated July 27, 2026) and <a href={sba504} target="_blank" rel="noopener noreferrer" className={link}>504 loans</a> (updated March 30, 2026)</li>
                <li>USDA Rural Development, <a href={reap} target="_blank" rel="noopener noreferrer" className={link}>Rural Energy for America Program</a> (updated April 9, 2026)</li>
                <li>California Public Utilities Commission, <a href={dgStats} target="_blank" rel="noopener noreferrer" className={link}>DGStats Interconnected Applications Data Set</a> (data through May 31, 2026); CRR count of 2025 non-residential PV systems</li>
                <li>26 U.S.C. <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>§48E</a> and <a href={irc45} target="_blank" rel="noopener noreferrer" className={link}>§45</a>, Office of the Law Revision Counsel (text in effect September 23, 2026)</li>
              </ul>
            </div>

            {/* The page's one ask: the inline commercial form. Heading and intro keep
                the wording used since 2026-09-23. */}
            <CommercialReviewForm
              className="mt-12"
              heading="Discuss a commercial solar project"
              intro="California Rate Relief is a private referral service. A commercial assessment request does not approve financing, select a lender or PPA provider, establish utility eligibility, or promise a price, savings or project outcome."
            />
            <HubSpokeLinks hub="commercial" currentPath={path} />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
