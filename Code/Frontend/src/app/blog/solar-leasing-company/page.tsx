// 2026-09-23 new page (topical-authority wave, Tier 2, agent costfin).
// Answers "solar leasing company" / "solar lease companies": what a leasing
// company is, how common leases are in California now, why the 2025 tax law
// matters to them, and how to compare one. Lease cost, rent-to-own and exits
// have their own pages and are linked, not repeated. Companies are named only
// where a primary record (an SEC filing) supports the statement; nothing here
// ranks or recommends a company. Every figure was fetched 2026-09-23.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { CostFinGuideShell } from '@/components/growth/CostFinGuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';

const PATH = '/blog/solar-leasing-company';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const link = 'text-primary underline underline-offset-2';

const S = {
  cpucGuide:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
  dgstats: 'https://www.californiadgstats.ca.gov/charts/nem/',
  us48e: 'https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A48E+edition%3Aprelim%29',
  irs25d: 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit',
  epa: 'https://www.epa.gov/green-power-markets/solar-power-purchase-agreements',
  sunrun10k: 'https://www.sec.gov/Archives/edgar/data/1469367/000162828026012289/run-20251231.htm',
  sunnova8k: 'https://www.sec.gov/Archives/edgar/data/1772695/000177269525000105/nova-20250608.htm',
  boeFaq: 'https://boe.ca.gov/proptaxes/active-solar-energy-system/frequently-asked-questions.htm',
  lbnl2026:
    'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf',
} as const;

const sources: Source[] = [
  { label: 'CPUC: California Solar Consumer Protection Guide (leases, PPAs, questions to ask)', url: S.cpucGuide },
  { label: 'California Distributed Generation Statistics (CPUC-authorized): residential ownership by type, data through May 31, 2026', url: S.dgstats },
  { label: 'U.S. Code: 26 U.S.C. § 48E, including (i), denial of credit for solar leasing arrangements', url: S.us48e },
  { label: 'IRS: Residential Clean Energy Credit', url: S.irs25d },
  { label: 'U.S. EPA: Solar Power Purchase Agreements (roles of provider, installer and investor)', url: S.epa },
  { label: 'Sunrun Inc.: Form 10-K for fiscal year 2025, filed February 26, 2026', url: S.sunrun10k },
  { label: 'Sunnova Energy International: Form 8-K (Item 1.03), filed June 9, 2025', url: S.sunnova8k },
  { label: 'Board of Equalization: Active Solar Energy System Exclusion FAQs', url: S.boeFaq },
  { label: 'Berkeley Lab: Distributed Solar and Storage, 2026 Data Update (August 2026)', url: S.lbnl2026 },
];

const metaTitle = 'Solar Leasing Companies in California: How to Compare Them';
const metaDescription =
  'A solar leasing company owns the panels and bills you monthly for 20 to 25 years. How few Californians lease now, why tax law changed it, what to check.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: URL,
    publishedTime: `${UPDATED}T00:00:00Z`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const faqs: FaqJsonLdItem[] = [
  {
    question: 'What does a solar leasing company do?',
    answer:
      'It owns the solar system it installs on your home and charges you a scheduled monthly payment for a set number of years. The CPUC says a typical lease runs 20 to 25 years and that the provider is responsible for monitoring, maintenance and repairs. The company that signs you may use a separate installer, and it may sell your contract to investors.',
  },
  {
    question: 'Which companies offer solar leases in California?',
    answer:
      'No public agency publishes a list of leasing companies or ranks them. The state’s interconnection data shows how many homes lease, not who from. The contract and the CSLB disclosure document name the company that owns the system, and the CPUC says the solar provider must hold an active CSLB license in class C-46, C-10 or B. Check that license before comparing prices.',
  },
  {
    question: 'Can you lease solar panels in California?',
    answer:
      'Yes, if you own the home, but leases are now rare. California Distributed Generation Statistics shows leases were about 3% of new residential solar projects at PG&E, SCE and SDG&E in 2025, against about 42% power purchase agreements and 55% customer-owned systems.',
  },
  {
    question: 'What is the best solar lease company?',
    answer:
      'There is no neutral ranking to point to, and a company that suits one roof and contract may not suit another. Compare written offers on the same system: total payments over the term, escalator, production guarantee, who maintains and insures the system, what happens when you sell, and the end-of-term options. Check the license and the company’s financial filings, if it has any.',
  },
  {
    question: 'Do solar leasing companies get tax credits?',
    answer:
      'They can claim the business credit on systems they own and lease out, within the law’s limits. The 2025 federal tax law added 26 U.S.C. § 48E(i), which denies the credit for leased property described in paragraphs (1) and (4) of § 25D(d), solar water heating and small wind; rooftop solar electric property is paragraph (2), which it does not list. The same law ends the credit for solar placed in service after December 31, 2027 when construction begins after July 4, 2026 (§ 48E(e)(4)). How that affects a given lease price is a question for the provider and a tax professional. You get no homeowner credit either way.',
  },
];

export default function SolarLeasingCompanyPage() {
  return (
    <PublicLayout
      breadcrumbLabel="Solar leasing companies"
      breadcrumbParent={{ label: 'Leases, PPAs and financing', href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar leasing companies in California: what they do and how to compare them"
        url={URL}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Solar financing"
        title="Solar leasing companies in California: what they do and how to compare them"
        crumbs={[{ label: 'Leases, PPAs and financing', href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california' }]}
        crumbLabel="Solar leasing companies"
        updated={UPDATED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="financing"
        path={PATH}
        intro={
          <>
            <p>
              A solar leasing company owns the panels it puts on your roof and charges you a
              scheduled monthly payment, typically for 20 to 25 years, while it handles
              maintenance and repairs. In California leases have become uncommon: in 2025 about 3%
              of new home solar projects at the three big utilities were leases, against about 42%
              power purchase agreements.
            </p>
            <p className="mt-3">
              This page is about the company and the contract. What a lease costs each month is in{' '}
              <Link className={link} href="/blog/how-much-does-it-cost-to-lease-solar-panels-california">
                what sets the price of a solar lease
              </Link>
              , and how leasing compares with buying is in{' '}
              <Link className={link} href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
                the lease, PPA, loan and cash comparison
              </Link>
              .
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'Leases, new CA home solar 2025',
            value: 'About 3%',
            note: 'PG&E, SCE and SDG&E; PPAs were about 42%.',
            source: { publisher: 'CA DG Stats', date: UPDATED, url: S.dgstats },
          },
          {
            label: 'Typical lease term',
            value: '20–25 years',
            note: 'Per the CPUC consumer guide.',
            source: { publisher: 'CPUC', date: UPDATED, url: S.cpucGuide },
          },
          {
            label: 'Typical escalator',
            value: '1–3% a year',
            note: 'The CPUC says be cautious above that.',
            source: { publisher: 'CPUC', date: UPDATED, url: S.cpucGuide },
          },
          {
            label: 'Required license',
            value: 'C-46, C-10 or B',
            note: 'Active CSLB license for the solar provider.',
            source: { publisher: 'CPUC', date: UPDATED, url: S.cpucGuide },
          },
        ]}
        inquiry={<SolarInquiry topic="Solar lease company comparison" market="CA" />}
      >
        <section>
          <h2>What a solar leasing company is</h2>
          <p>
            A solar leasing company is the legal owner of a solar system on your home. The CPUC
            describes a lease this way: the solar provider owns the system &ldquo;and &lsquo;rents&rsquo;
            it to you for a scheduled monthly payment over a set number of years.&rdquo; With a lease,
            the provider is responsible for monitoring, maintenance and repairs, and a minimum level of
            production is often guaranteed (
            <a className={link} href={S.cpucGuide}>
              CPUC
            </a>
            , checked September 23, 2026).
          </p>
          <p className="mt-3">
            The company that signs you is often not the only one involved. The EPA, describing the
            same model under a PPA, lists a provider that arranges financing, design, permitting and
            construction; an installer that may be in-house or an independent contractor; and an
            investor who provides equity and receives the tax benefits (
            <a className={link} href={S.epa}>
              EPA
            </a>
            ). Contracts also change hands. Sunrun, a publicly traded residential provider, says in
            its 2025 annual report that certain systems under its lease or PPA agreements
            &ldquo;have been sold and may in the future be sold to third-party investors&rdquo; (
            <a className={link} href={S.sunrun10k}>
              Sunrun Form 10-K, filed February 26, 2026
            </a>
            ). Ask who will own your contract, and who you call for service if it is sold.
          </p>
        </section>

        <section>
          <h2>How many Californians lease now</h2>
          <p>
            Fewer than most sales pitches suggest. California Distributed Generation Statistics, the
            CPUC-authorized database of every system interconnected at PG&amp;E, SCE and SDG&amp;E,
            breaks new residential solar projects down by ownership (
            <a className={link} href={S.dgstats}>
              California DG Stats
            </a>
            , data through May 31, 2026, checked September 23, 2026):
          </p>
          <div className="mt-3 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-4 text-left font-semibold">
                Residential solar projects by ownership and year of permission to operate, PG&amp;E,
                SCE and SDG&amp;E
              </caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Ownership</th>
                  <th className="p-3">2025 (144,703 projects)</th>
                  <th className="p-3">2026 through May 31 (58,295)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="p-3">Customer owned (cash or loan)</td><td className="p-3">54.5%</td><td className="p-3">58.7%</td></tr>
                <tr className="border-t"><td className="p-3">Power purchase agreement</td><td className="p-3">41.7%</td><td className="p-3">35.1%</td></tr>
                <tr className="border-t"><td className="p-3">Lease</td><td className="p-3">3.1%</td><td className="p-3">4.6%</td></tr>
                <tr className="border-t"><td className="p-3">Prepaid lease</td><td className="p-3">0.1%</td><td className="p-3">0.2%</td></tr>
                <tr className="border-t"><td className="p-3">Other</td><td className="p-3">0.7%</td><td className="p-3">1.4%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            So when someone offers you &ldquo;a lease,&rdquo; read the contract&rsquo;s title. Most
            third-party offers in California are PPAs, which bill per kWh rather than a flat monthly
            amount. The difference is explained in{' '}
            <Link className={link} href="/blog/ppa-loan-vs-solar-lease-vs-cash-california#lease-vs-ppa">
              solar lease vs PPA
            </Link>
            , and the companies behind PPAs in{' '}
            <Link className={link} href="/blog/solar-ppa-companies">
              how to compare solar PPA companies
            </Link>
            . Berkeley Lab adds a national pattern: lower-income solar adopters were more likely than
            higher-income adopters to use third-party ownership in 2025 (
            <a className={link} href={S.lbnl2026}>
              LBNL, August 2026
            </a>
            ).
          </p>
        </section>

        <section>
          <h2>What the 2025 tax law changed for leasing companies</h2>
          <p>
            In a third-party arrangement, the EPA says the provider or its investor
            &ldquo;acquires valuable financial benefits, such as tax credits&rdquo;; that is part of
            how an offer with no money down is financed. The 2025 federal tax law
            (Public Law 119-21) added a new subsection to 26 U.S.C. § 48E: &ldquo;No credit shall be
            determined under this section for any qualified investment during the taxable year with
            respect to property described in paragraph (1) or (4) of section 25D(d) &hellip; if the
            taxpayer rents or leases such property to a third party during such taxable year.&rdquo;
            In § 25D(d), paragraph (1) is solar water heating and paragraph (4) is small wind energy.
            Rooftop solar electric property is paragraph (2), which the subsection does not list. The
            Code&rsquo;s notes apply it to taxable years beginning after July 4, 2025 (
            <a className={link} href={S.us48e}>
              26 U.S.C. § 48E(i)
            </a>
            , checked September 24, 2026). The change that does reach rooftop solar is an end date:
            for solar whose construction begins after July 4, 2026, § 48E(e)(4) allows no credit for
            property placed in service after December 31, 2027.
          </p>
          <p className="mt-3">
            The subsection names renting and leasing; it does not mention selling electricity under a
            PPA. What it means for a particular offer&rsquo;s price is for the provider to explain and a
            tax professional to confirm. Two things are certain: the homeowner credit does not help you,
            because the IRS says it &ldquo;is not available for any property placed in service after
            December 31, 2025&rdquo; (
            <a className={link} href={S.irs25d}>
              IRS
            </a>
            ), and a lease payment that depends on a credit the provider cannot claim may be repriced
            before you sign. Get the price in the signed contract, not in a quote.
          </p>
        </section>

        <section>
          <h2>How to compare solar leasing companies</h2>
          <p>
            The CPUC&rsquo;s consumer guide gives the questions; these are the ones that separate one
            leasing company from another. Ask each company in writing, on the same system design and
            the same year of your utility bills.
          </p>
          <ol className="mt-3 list-decimal space-y-3 pl-5">
            <li>
              <strong>License.</strong> The CPUC says the provider&rsquo;s CSLB license &ldquo;must be
              active and in classification C-46 (Solar Contractor), C-10 (Electrical Contractor), or B
              (General Building Contractor).&rdquo; Ask for the installer&rsquo;s license too if a
              subcontractor will do the work, and check both with the CSLB.
            </li>
            <li>
              <strong>Total cost over the term.</strong> Every payment for 20 or 25 years, not the
              first month. Escalators are &ldquo;typically in the range of a 1 percent to 3 percent
              increase,&rdquo; and the CPUC says to be cautious above that.
            </li>
            <li>
              <strong>Production guarantee.</strong> A lease payment does not fall in a bad month.
              Ask how a shortfall is measured and paid.
            </li>
            <li>
              <strong>Maintenance, insurance and the roof.</strong> Who repairs the system, who
              insures it, and who warrants the roof penetrations.
            </li>
            <li>
              <strong>Selling the home.</strong> Whether a buyer must qualify, whether there are
              transfer fees, and what you owe if the buyer will not take the lease. The CPUC warns a
              buyout &ldquo;could be thousands of dollars.&rdquo;
            </li>
            <li>
              <strong>End of the term.</strong> Renewal, purchase and removal options, at what price,
              and who restores the roof.
            </li>
            <li>
              <strong>Renewable energy credits.</strong> The CPUC says to ask who owns the RECs and to
              check the fine print.
            </li>
          </ol>
          <p className="mt-3">
            Source for the quotations:{' '}
            <a className={link} href={S.cpucGuide}>
              CPUC, California Solar Consumer Protection Guide
            </a>
            , checked September 23, 2026. The state disclosure document every provider must give you
            shows the total cost and a standardized bill savings estimate; red flags to look for are in{' '}
            <Link className={link} href="/solar-problems/solar-contract-red-flags-california">
              solar contract red flags in California
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>What one large provider&rsquo;s filing says its contracts contain</h2>
          <p>
            Public companies describe their contracts in SEC filings, which makes them a useful
            benchmark for the terms to ask any company about. This is not a recommendation. Sunrun&rsquo;s
            Form 10-K for 2025 says (
            <a className={link} href={S.sunrun10k}>
              Sunrun, filed February 26, 2026
            </a>
            ):
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Its lease and PPA agreements &ldquo;typically have an initial term of 20 or 25 years,&rdquo; with rates &ldquo;fixed for the duration of the contract or escalated at a predetermined percentage annually.&rdquo;</li>
            <li>&ldquo;System maintenance is included&rdquo; in the lease or PPA, and customers are covered by production guarantees for the length of the term.</li>
            <li>At a home sale, the customer can buy the system or assign the agreement to a buyer who &ldquo;meets our credit requirements,&rdquo; and may prepay some or all remaining payments to lower the buyer&rsquo;s rate.</li>
            <li>After the initial term, customers can renew, &ldquo;typically at a 10% discount to then-prevailing power prices,&rdquo; buy the system at fair market value, or have it removed.</li>
            <li>The average FICO score of its customers on monthly-payment agreements &ldquo;remained at or above 740&rdquo; at the end of 2025.</li>
          </ul>
          <p className="mt-3">
            If another company&rsquo;s contract is silent on any of these points, ask. Company-specific
            reviews are in{' '}
            <Link className={link} href="/solar-installers/sunrun-review">
              the Sunrun review
            </Link>{' '}
            and the{' '}
            <Link className={link} href="/solar-installers">
              California solar company reviews
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>When the leasing company fails</h2>
          <p>
            The CPUC lists it plainly as a con of leases and PPAs: &ldquo;Solar provider could go out of
            business during the contract period.&rdquo; It is not hypothetical. On June 8, 2025,
            Sunnova Energy International and two affiliates filed Chapter 11 petitions in the U.S.
            Bankruptcy Court for the Southern District of Texas, saying they would keep operating while
            pursuing a sale of certain assets (
            <a className={link} href={S.sunnova8k}>
              Sunnova Form 8-K, filed June 9, 2025
            </a>
            ). What that meant for customers is in{' '}
            <Link className={link} href="/solar-installers/sunnova-review">
              the Sunnova review
            </Link>
            . Before you sign, ask what happens to maintenance, the production guarantee and your
            contract if the company is sold or shuts down, and keep every document.
          </p>
        </section>

        <section>
          <h2>Leasing, renting and what a lease does not change</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Property tax.</strong> The Board of Equalization says a qualifying system
              &ldquo;is excluded whether it is leased or owned,&rdquo; with no form to file (
              <a className={link} href={S.boeFaq}>
                BOE
              </a>
              ). The exclusion is scheduled to end on January 1, 2027; details are in{' '}
              <Link className={link} href="/blog/do-solar-panels-increase-property-taxes-california">
                whether solar raises California property taxes
              </Link>
              .
            </li>
            <li>
              <strong>&ldquo;Renting&rdquo; solar.</strong> A lease is what people usually mean by
              renting solar panels; how that works for a house is in{' '}
              <Link className={link} href="/blog/rent-solar-panels-for-your-home-california">
                renting solar panels for your home
              </Link>
              . If you rent the home itself, see{' '}
              <Link className={link} href="/blog/solar-for-renters">
                solar for renters
              </Link>
              .
            </li>
            <li>
              <strong>Paying up front.</strong> A prepaid lease is a different product with different
              risks; see{' '}
              <Link className={link} href="/blog/prepaid-lease-solar">
                prepaid solar leases
              </Link>
              .
            </li>
            <li>
              <strong>Selling or stopping.</strong> See{' '}
              <Link className={link} href="/blog/what-happens-to-solar-lease-when-i-sell-california">
                what happens to a solar lease when you sell
              </Link>{' '}
              and{' '}
              <Link className={link} href="/blog/what-happens-if-stop-paying-solar-lease-california">
                what happens if you stop paying
              </Link>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor. A
            referral request does not choose a leasing company, set a price or approve a contract;
            read the written documents from any company before you sign.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
