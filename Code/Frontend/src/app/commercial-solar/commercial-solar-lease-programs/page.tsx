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
// "commercial solar lease programs", "commercial solar leasing programs" and
// "commercial roof lease for solar" queries were landing on the financing blog
// post at position 65. The ownership counts below were computed on 2026-09-23
// from the CPUC's DGStats interconnected-applications file (data through
// May 31, 2026): PV applications in the Commercial, Industrial, Educational,
// Non-Profit, Other Government and Military sectors, approved in calendar 2025,
// status Interconnected. Statutory statements were read from the OLRC text in
// effect September 23, 2026.

const title = 'Commercial Solar Lease Programs in California (2026)';
const h1 = 'Commercial Solar Lease Programs in California: Equipment Leases and Roof Leases';
const description =
  'Two deals share the name: leasing a solar system for your business, or renting your roof to a developer. How each works, California data, what to check.';
const path = '/commercial-solar/commercial-solar-lease-programs';
const canonicalUrl = `https://ratereliefca.com${path}`;
const DATE_MODIFIED = '2026-09-23';
const CHECKED = 'September 23, 2026';
const link = 'text-primary underline';

const dgStatsDownloads = 'https://www.californiadgstats.ca.gov/downloads/';
const lbnl2026 =
  'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf';
const usc = (s: string) =>
  `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section${s}&num=0&edition=prelim`;
const irc48e = usc('48E');
const irc50 = usc('50');
const irc6417 = usc('6417');
const irc7701 = usc('7701');
const mceFit = 'https://www.mcecleanenergy.org/feed-in-tariff/';
const boeLta = 'https://www.boe.ca.gov/proptaxes/pdf/lta26034.pdf';

const faqs = [
  {
    question: 'What is a commercial solar lease?',
    answer:
      'Usually it means an equipment lease: a leasing company owns a solar system installed on your building and you pay it a set monthly amount, or one payment up front, for the right to use the system. The phrase is also used for a roof or site lease, where you rent space to a developer who owns the system and sells its power.',
  },
  {
    question: 'How common are commercial solar leases in California?',
    answer:
      'Less common than PPAs. In the CPUC interconnection data for 2025, 751 of the 3,607 non-residential solar systems connected by PG&E, SCE and SDG&E were third-party owned. Of those, 420 were PPAs, 286 prepaid leases and 28 monthly leases. By capacity, PPAs were about 86% of the third-party-owned total.',
  },
  {
    question: 'Who gets the tax credit on a leased commercial system?',
    answer:
      'The owner of the equipment, which under a lease is the leasing company, not you. The federal credit is 26 U.S.C. §48E. Section 50(d)(5) has a special rule for leased property, so ask the lessor in writing who will claim the credit and whether any of it passes to you, and have your tax professional read that clause.',
  },
  {
    question: 'Can I lease my commercial roof for solar?',
    answer:
      'Yes, if a developer has a buyer for the power. The rent depends on what the developer earns, and power sold into a wholesale program pays far less than your retail rate. MCE, for example, lists $60 per MWh in its current feed-in tariff condition for 1 to 5 MW projects. Check the term, removal and reroofing terms before signing.',
  },
  {
    question: 'Can a school, church or nonprofit lease solar?',
    answer:
      'It can, but the lessor may not get the federal credit. Section 50(b)(3) and (4) deny the credit for property used by a tax-exempt organization or a government unit, apart from leases under six months. In the 2025 California data, 116 of the 124 third-party-owned systems at educational, nonprofit, government and military sites were PPAs.',
  },
  {
    question: 'What happens at the end of a commercial solar lease?',
    answer:
      'Whatever the contract says. The usual choices are to renew, to buy the system, or to have the lessor remove it and restore the roof. Get the buyout method, the removal duty and the roof-restoration standard in writing before you sign, because those terms are hard to negotiate later.',
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

export default function CommercialSolarLeasePrograms() {
  return (
    <PublicLayout breadcrumbLabel="Commercial solar leases">
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
              <span className="text-foreground">Commercial solar leases</span>
            </nav>

            <header className="mb-10">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Leases · Roof rental · Ownership
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              <Byline updated={DATE_MODIFIED} sourcesHref="#sources" />
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg">
                A commercial solar lease in California is one of two different deals. In an
                equipment lease, a leasing company owns the system on your building and you pay
                it a fixed amount to use it. In a roof lease, you rent roof or parking space to a
                developer who owns the system and sells the power. Leases are the smaller share:
                most third-party-owned business systems in California run on PPAs.
              </p>
              <p>
                This page covers both kinds of lease and the property-owner questions that come
                with them. For how a lease compares with buying, a loan or C-PACE, see the{' '}
                <Link href="/blog/commercial-solar-financing-california" className={link}>
                  commercial solar financing options
                </Link>
                ; for every business guide on this site, start at the{' '}
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
                  label: 'Third-party-owned business systems, 2025',
                  value: '751 of 3,607',
                  note: 'Non-residential PV systems interconnected by PG&E, SCE and SDG&E in 2025. CRR count from CPUC DGStats data.',
                  source: { publisher: 'CPUC DGStats', url: dgStatsDownloads, date: 'May 2026 data' },
                },
                {
                  label: 'Of those, PPAs vs leases',
                  value: '420 PPA · 314 lease',
                  note: '286 prepaid leases and 28 monthly leases; 17 other. PPAs were about 86% of third-party-owned capacity.',
                  source: { publisher: 'CPUC DGStats', url: dgStatsDownloads, date: 'May 2026 data' },
                },
                {
                  label: 'Median size, by structure',
                  value: '32 kW lease · 121 kW PPA',
                  note: 'Prepaid leases 32 kW and monthly leases 25 kW, against 121 kW for PPAs (DC, 2025).',
                  source: { publisher: 'CPUC DGStats', url: dgStatsDownloads, date: 'May 2026 data' },
                },
              ]}
            />

            <div className="prose prose-slate max-w-none">
              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Two deals called a &ldquo;commercial solar lease&rdquo;
              </h2>
              <div className="my-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Equipment lease compared with roof lease</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Question</th>
                      <th className="p-3">Equipment lease</th>
                      <th className="p-3">Roof or site lease</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Who owns the system</th><td className="p-3 align-top">The leasing company</td><td className="p-3 align-top">The developer or its investor</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Who uses the power</th><td className="p-3 align-top">Your business, behind your meter</td><td className="p-3 align-top">Whoever buys it: a utility program, a CCA, or you under a separate PPA</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Money flow</th><td className="p-3 align-top">You pay the lessor, monthly or up front</td><td className="p-3 align-top">The developer pays you rent</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Where the value shows up</th><td className="p-3 align-top">Lower utility purchases on your bill</td><td className="p-3 align-top">Rent income; your bill is unchanged unless you also buy the power</td></tr>
                    <tr className="border-t"><th scope="row" className="p-3 align-top">Who claims the federal credit</th><td className="p-3 align-top">The lessor, as owner</td><td className="p-3 align-top">The developer, as owner</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                Sales material often mixes the two. Before comparing numbers, get the proposal to
                say who owns the equipment, who uses the electricity and which way the money
                moves.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                How an equipment lease works
              </h2>
              <p>
                The lessor buys, installs and owns the system. You pay a scheduled amount for its
                use, whatever the panels produce, often with an annual escalator. A PPA is the
                close cousin: the provider also owns the system, but you pay per kilowatt-hour
                delivered. With a lease you carry the production risk; with a PPA the provider
                does.
              </p>
              <p>
                Prepaid leases are common at the small end of the market. In the CPUC&apos;s{' '}
                <a href={dgStatsDownloads} target="_blank" rel="noopener noreferrer" className={link}>
                  DGStats interconnection data
                </a>
                , 284 of the 286 prepaid leases on non-residential systems connected in 2025 were
                in the commercial sector, with a median size of 32 kW DC. PPAs ran larger, at a
                median of 121 kW. Berkeley Lab&apos;s{' '}
                <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>
                  2026 data update
                </a>{' '}
                shows the same national pattern: third-party ownership is more common on large
                non-residential systems than small ones.
              </p>
              <p>
                <strong>Tax.</strong> The federal clean electricity investment credit,{' '}
                <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §48E
                </a>
                , goes to the owner of the property, and under an equipment lease that is the
                lessor. Section{' '}
                <a href={irc50} target="_blank" rel="noopener noreferrer" className={link}>
                  50(d)(5)
                </a>{' '}
                carries a special rule for leased property, so a lease can be written to route
                the credit differently. Ask for the tax treatment in the contract itself, and let
                your tax professional read it. The{' '}
                <Link href="/commercial-solar/commercial-solar-tax-credit" className={link}>
                  commercial solar tax credit guide
                </Link>{' '}
                covers the rates and the 2027 deadline that apply to whoever owns the system.
              </p>
              <p>
                <strong>End of term.</strong> Expect three exits: renew, buy the system, or have it
                removed. The price and method of a buyout, and who pays to take the array down and
                patch the roof, belong in the signed lease, not a side letter.
              </p>

              {/* One mid-page ask; its button scrolls to the form at the end of the page. */}
              <div className="not-prose">
                <CommercialReviewButton />
              </div>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Tax-exempt hosts: why PPAs usually win over leases
              </h2>
              <p>
                Schools, churches, nonprofits and public agencies meet a rule that businesses do
                not.{' '}
                <a href={irc50} target="_blank" rel="noopener noreferrer" className={link}>
                  Section 50(b)(3) and (4)
                </a>{' '}
                deny the investment credit for property used by a tax-exempt organization or a
                government unit, except under a lease shorter than six months. A long equipment
                lease to one of those hosts can leave the lessor with no credit to price into the
                payment.
              </p>
              <p>
                A PPA is treated differently.{' '}
                <a href={irc7701} target="_blank" rel="noopener noreferrer" className={link}>
                  Section 7701(e)(3)
                </a>{' '}
                treats a contract to sell electricity from an alternative energy facility as a
                service contract rather than a lease, unless the customer operates the facility,
                bears a significant financial burden if it does not perform, gets a significant
                financial benefit if its operating costs come in below the contract standards, or
                holds an option to buy it at a fixed price other than fair market value.
                The 2025 California data reflects this: 116 of the 124 third-party-owned systems at
                educational, nonprofit, government and military sites were PPAs.
              </p>
              <p>
                The third route is ownership. Tax-exempt organizations and state and local
                governments are applicable entities under{' '}
                <a href={irc6417} target="_blank" rel="noopener noreferrer" className={link}>
                  26 U.S.C. §6417
                </a>
                , which lets them elect to receive the credit as a payment. When they do,
                §6417(d)(2) has the credit determined without regard to §50(b)(3) and
                (4)(A)(i). The{' '}
                <Link href="/commercial-solar/church-solar-california" className={link}>
                  church solar guide
                </Link>{' '}
                and the{' '}
                <Link href="/commercial-solar/school-solar-california" className={link}>
                  school solar guide
                </Link>{' '}
                compare that route with a PPA.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                Leasing your roof or parking lot to a developer
              </h2>
              <p>
                A roof lease pays rent instead of cutting your bill. The developer needs a buyer
                for the output, and in California that usually means a wholesale or local
                procurement program rather than your own meter. Those programs pay wholesale
                prices. MCE&apos;s{' '}
                <a href={mceFit} target="_blank" rel="noopener noreferrer" className={link}>
                  Feed-In Tariff Plus
                </a>
                , for example, offers standardized 15-year contracts for 1 to 5 MW projects in its
                service area and lists $60 per MWh (6 cents per kWh) in its current pricing
                condition, and it requires solar projects to include battery storage. That
                revenue sets the ceiling on the rent a developer can offer.
              </p>
              <p>
                Most business systems are far smaller than that. The median non-residential
                system connected by the three utilities in 2025 was 61 kW DC, and 139 of the 3,607
                were over 1 MW. On a typical building the more realistic third-party deal is a PPA
                in which the developer sells the power to you or your tenants. Read{' '}
                <Link href="/commercial-solar/solar-developers" className={link}>
                  what a solar developer does and how to vet one
                </Link>{' '}
                before signing either.
              </p>
              <p>Get these points into any roof or site lease:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>A term no longer than the roof&apos;s remaining life, or a funded plan to remove and reinstall the array when you reroof.</li>
                <li>Who pays to relocate the array for a reroof, and whether rent stops while it is off.</li>
                <li>Access rules, insurance, indemnity and repair of any roof damage caused by the developer.</li>
                <li>Removal, restoration and a decommissioning security at the end of the term or on default.</li>
                <li>Your lender&apos;s consent, and what happens if you sell or refinance the property.</li>
                <li>Who is assessed and pays property tax on the equipment.</li>
              </ul>
              <p>
                On that last point, California&apos;s new-construction exclusion for active solar
                systems becomes inoperative on January 1, 2027; systems that qualified before then
                stay excluded until the property changes ownership, according to the Board of
                Equalization&apos;s{' '}
                <a href={boeLta} target="_blank" rel="noopener noreferrer" className={link}>
                  Letter to Assessors 2026/034
                </a>
                . The letter does not address third-party-owned systems, so ask your assessor or
                tax adviser how a leased system on your property will be treated. The{' '}
                <Link href="/commercial-solar/commercial-solar-roofing" className={link}>
                  commercial roof guide
                </Link>{' '}
                covers roof life and reroofing.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                If you own commercial real estate
              </h2>
              <p>
                On a leased building the question is whose bill falls. If tenants pay their own
                utility accounts, a system on the owner&apos;s meter helps only the common areas.
                Owners typically choose among three setups: serve the house meter and keep the
                savings, sell power to tenants under a PPA-style arrangement, or use a
                multi-meter tariff to share credits across accounts. The{' '}
                <Link href="/commercial-solar/vnem-aggregation-multi-meter" className={link}>
                  guide to VNEM and meter aggregation
                </Link>{' '}
                explains which multi-meter option a property can use, and the{' '}
                <Link href="/commercial-solar/retail-solar-california" className={link}>
                  retail solar guide
                </Link>{' '}
                covers landlord consent when the business is the tenant.
              </p>
              <p>
                Whatever the setup, align the solar contract with your leases. A 20-year solar
                agreement on a building with five-year tenant leases needs clear terms on who pays
                if a tenant leaves, and a sale of the building needs a buyer willing to take the
                agreement over.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                What to compare before signing a lease
              </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>The monthly or prepaid amount, the escalator and the full term, totaled over the term.</li>
                <li>A cash price for the same system, so you can see what the lease is charging for.</li>
                <li>The production estimate the payment assumes, and what happens if the system underperforms.</li>
                <li>Maintenance, monitoring, insurance and inverter replacement: who does and pays for each.</li>
                <li>Buyout dates and method, assignment on sale of the business or building, and removal terms.</li>
                <li>Who claims the tax credit and depreciation, stated in the contract.</li>
              </ol>
              <p>
                Then run the same comparison for a PPA and a purchase. The{' '}
                <Link href="/commercial-solar/commercial-solar-ppa-vs-purchase-california" className={link}>
                  PPA versus purchase guide
                </Link>{' '}
                walks through that, and the{' '}
                <Link href="/blog/commercial-solar-financing-california" className={link}>
                  commercial financing document checklist
                </Link>{' '}
                lists the paperwork to collect.
              </p>

              <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">
                When a lease is the wrong fit
              </h2>
              <p>
                If your business can use the credit and depreciation and has the cash or credit to
                buy, owning usually keeps more of the value than paying a lessor who claims it. A
                lease is also a poor fit if you may move, sell or reroof within the term and the
                contract has no clear exit. And a roof lease is a poor fit for a building you
                expect to redevelop: the array and its easement will be in the way.
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
                It does not lease, own or finance solar equipment, and nothing on this page is tax
                or legal advice.
              </p>

              <h2 id="sources" className="mb-4 mt-10 text-2xl font-bold text-foreground">Sources</h2>
              <p className="text-sm text-muted-foreground">Checked {CHECKED}.</p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>California Public Utilities Commission, <a href={dgStatsDownloads} target="_blank" rel="noopener noreferrer" className={link}>California Distributed Generation Statistics, Interconnected Applications Data Set</a> (data through May 31, 2026). Counts are CRR&apos;s tabulation of PV systems approved in 2025 in non-residential sectors.</li>
                <li>LBNL, <a href={lbnl2026} target="_blank" rel="noopener noreferrer" className={link}>U.S. Distributed Solar and Storage: 2026 Data Update</a> (August 2026)</li>
                <li>26 U.S.C. <a href={irc48e} target="_blank" rel="noopener noreferrer" className={link}>§48E</a>, <a href={irc50} target="_blank" rel="noopener noreferrer" className={link}>§50</a>, <a href={irc6417} target="_blank" rel="noopener noreferrer" className={link}>§6417</a> and <a href={irc7701} target="_blank" rel="noopener noreferrer" className={link}>§7701</a>, Office of the Law Revision Counsel (text in effect September 23, 2026)</li>
                <li>MCE, <a href={mceFit} target="_blank" rel="noopener noreferrer" className={link}>Feed-In Tariff Plus</a></li>
                <li>California State Board of Equalization, <a href={boeLta} target="_blank" rel="noopener noreferrer" className={link}>Letter to Assessors 2026/034</a> (September 1, 2026)</li>
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
