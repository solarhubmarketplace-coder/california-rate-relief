// 2026-09-23 new page (topical-authority wave, Tier 2, agent costfin).
// Answers "solar ppa companies" / "solar ppa providers" / "best solar ppa
// companies": what a PPA provider is, how common PPAs are in California, how
// the 2025 tax law's solar cutoff bears on them, and how to compare offers.
// The PPA price-per-kWh test lives on the financing hub and is linked, not
// repeated. No company is ranked or recommended; Sunrun and Sunnova are named
// only for statements in their own SEC filings. Every figure fetched 2026-09-23.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { CostFinGuideShell } from '@/components/growth/CostFinGuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';

const PATH = '/blog/solar-ppa-companies';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const link = 'text-primary underline underline-offset-2';

const S = {
  cpucGuide:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
  cpucNem: 'https://www.cpuc.ca.gov/NEM/',
  dgstats: 'https://www.californiadgstats.ca.gov/charts/nem/',
  epa: 'https://www.epa.gov/green-power-markets/solar-power-purchase-agreements',
  us48e: 'https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A48E+edition%3Aprelim%29',
  sunrun10k: 'https://www.sec.gov/Archives/edgar/data/1469367/000162828026012289/run-20251231.htm',
  sunnova8k: 'https://www.sec.gov/Archives/edgar/data/1772695/000177269525000105/nova-20250608.htm',
} as const;

const sources: Source[] = [
  { label: 'CPUC: California Solar Consumer Protection Guide (PPAs, escalators, questions to ask)', url: S.cpucGuide },
  { label: 'CPUC: Net energy metering and the Net Billing Tariff', url: S.cpucNem },
  { label: 'California Distributed Generation Statistics (CPUC-authorized): residential ownership by type, data through May 31, 2026', url: S.dgstats },
  { label: 'U.S. EPA: Solar Power Purchase Agreements', url: S.epa },
  { label: 'U.S. Code: 26 U.S.C. § 48E, including (e)(4), termination for wind and solar facilities', url: S.us48e },
  { label: 'Sunrun Inc.: Form 10-K for fiscal year 2025, filed February 26, 2026', url: S.sunrun10k },
  { label: 'Sunnova Energy International: Form 8-K (Item 1.03), filed June 9, 2025', url: S.sunnova8k },
];

const metaTitle = 'Solar PPA Companies in California: How to Compare Offers';
const metaDescription =
  'A PPA company owns the system and sells you its power per kWh for 20 to 25 years. PPAs were 42% of new California home solar in 2025. What to compare.';

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
    question: 'What is a solar PPA company?',
    answer:
      'A company that installs and owns a solar system on your home and sells you the electricity it produces at a set price per kWh for a set number of years. The CPUC says a typical PPA runs 20 to 25 years and the contract specifies the price in the first year and every year after. The EPA calls these companies solar services providers.',
  },
  {
    question: 'What are the best solar PPA companies in California?',
    answer:
      'No public agency ranks them, and any “best” list is only as good as its test. What you can compare are written offers on the same system: price per kWh against your utility price, the escalator, the production estimate and guarantee, what happens when you sell, the buyout terms, and the company’s license and financial health. This page lists what to ask.',
  },
  {
    question: 'How common are solar PPAs in California?',
    answer:
      'They are the most common way to go solar without buying. California Distributed Generation Statistics shows PPAs were about 42% of residential solar projects at PG&E, SCE and SDG&E in 2025 and about 35% in 2026 through May, against about 3% and 5% leases.',
  },
  {
    question: 'Can you buy out a solar PPA?',
    answer:
      'Usually, on the contract’s terms. The CPUC warns that buying out a lease or PPA “can cost thousands of dollars” and tells you to ask whether ending early means a balloon payment or an early termination fee. Get the buyout price or formula in writing before you sign.',
  },
  {
    question: 'Are solar PPA companies regulated in California?',
    answer:
      'The company selling and installing a PPA must hold an active CSLB license in class C-46, C-10 or B, and the CPUC says it must by law give you the state’s Solar Energy System Disclosure Document, which shows the total cost and a standardized bill savings estimate. You also have at least three business days to cancel, five if you are 65 or older.',
  },
];

export default function SolarPpaCompaniesPage() {
  return (
    <PublicLayout
      breadcrumbLabel="Solar PPA companies"
      breadcrumbParent={{ label: 'Leases, PPAs and financing', href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar PPA companies in California: what they are and how to compare offers"
        url={URL}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Solar financing"
        title="Solar PPA companies in California: what they are and how to compare offers"
        crumbs={[{ label: 'Leases, PPAs and financing', href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california' }]}
        crumbLabel="Solar PPA companies"
        updated={UPDATED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="financing"
        path={PATH}
        intro={
          <>
            <p>
              A solar PPA company installs and owns a system on your roof and sells you the power it
              makes at a set price per kWh, usually for 20 to 25 years. It is the most common way
              Californians go solar without buying: about 42% of new home solar projects at PG&amp;E,
              SCE and SDG&amp;E in 2025. Compare PPA companies on the price per kWh, the escalator,
              the production estimate and the exit terms.
            </p>
            <p className="mt-3">
              How a PPA differs from a lease or a loan is in{' '}
              <Link className={link} href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
                the lease, PPA, loan and cash comparison
              </Link>
              .
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'PPAs, CA home solar 2025',
            value: 'About 42%',
            note: 'Of residential projects at PG&E, SCE and SDG&E.',
            source: { publisher: 'CA DG Stats', date: UPDATED, url: S.dgstats },
          },
          {
            label: 'Typical PPA term',
            value: '20–25 years',
            note: 'The contract sets the price for every year.',
            source: { publisher: 'CPUC', date: UPDATED, url: S.cpucGuide },
          },
          {
            label: 'Typical escalator',
            value: '1–3% a year',
            note: 'The CPUC says be cautious above that.',
            source: { publisher: 'CPUC', date: UPDATED, url: S.cpucGuide },
          },
          {
            label: 'Federal credit for new solar',
            value: 'Ends 2027',
            note: 'For facilities starting construction after July 4, 2026.',
            source: { publisher: 'U.S. Code', date: UPDATED, url: S.us48e },
          },
        ]}
        inquiry={<SolarInquiry topic="Solar PPA company comparison" market="CA" />}
      >
        <section>
          <h2>What a solar PPA company is</h2>
          <p>
            A PPA company sells you electricity, not equipment. The CPUC puts it this way: &ldquo;the
            solar provider owns the system on your property and sells you the electricity it
            generates,&rdquo; and &ldquo;you typically pay for all the power the solar system generates
            (at a fixed per-kilowatt-hour rate).&rdquo; The contract &ldquo;will specify the
            kilowatt-hour rate you pay in the first year and every year after that,&rdquo; and the CPUC
            says that rate &ldquo;should generally be lower than your current electricity rate&rdquo; (
            <a className={link} href={S.cpucGuide}>
              CPUC
            </a>
            , checked September 23, 2026).
          </p>
          <p className="mt-3">
            The EPA calls these firms solar services providers and describes four parties to a PPA:
            the provider, which &ldquo;functions as the project coordinator, arranging the financing,
            design, permitting, and construction&rdquo;; the installer, which may be the
            provider&rsquo;s own team or &ldquo;an independent installer&rdquo;; an investor, which
            &ldquo;provides equity financing and receives the federal and state tax benefits&rdquo;; and
            the utility, which keeps serving you when the system produces less than you use (
            <a className={link} href={S.epa}>
              EPA
            </a>
            ). The name on the ads, the crew on your roof and the owner of your contract can be three
            different companies.
          </p>
        </section>

        <section>
          <h2>How common PPAs are in California</h2>
          <p>
            California Distributed Generation Statistics, the CPUC-authorized record of systems
            interconnected at PG&amp;E, SCE and SDG&amp;E, shows PPAs made up 41.7% of residential
            solar projects that received permission to operate in 2025 (144,703 projects) and 35.1% in
            2026 through May 31 (58,295). Leases were 3.1% and 4.6%, and customer-owned systems 54.5%
            and 58.7% (
            <a className={link} href={S.dgstats}>
              California DG Stats
            </a>
            , checked September 23, 2026). If a salesperson describes a &ldquo;solar lease&rdquo; that
            bills you per kWh, the contract is probably a PPA; read its title. What sets leasing
            companies apart is in{' '}
            <Link className={link} href="/blog/solar-leasing-company">
              solar leasing companies in California
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>The federal credit behind PPA pricing is on a clock</h2>
          <p>
            Part of what finances a PPA is the federal business credit: the EPA says the investor in a
            PPA &ldquo;receives the federal and state tax benefits&rdquo; the system is eligible for.
            The 2025 federal tax law put an end date on that credit for solar. Under 26 U.S.C. § 48E(e)(4), the credit &ldquo;shall not apply to
            any qualified property placed in service by the taxpayer after December 31, 2027&rdquo; at
            a solar or wind facility, for facilities whose construction begins more than 12 months
            after July 4, 2025. Energy storage at those facilities is excepted (
            <a className={link} href={S.us48e}>
              26 U.S.C. § 48E
            </a>
            , checked September 23, 2026). Sunrun, a publicly traded residential provider, summarizes the
            change in its 2025 annual report: solar facilities &ldquo;which begin construction after
            July 4, 2026 must be placed in service by the end of 2027&rdquo; (
            <a className={link} href={S.sunrun10k}>
              Sunrun Form 10-K
            </a>
            ).
          </p>
          <p className="mt-3">
            What that means for you: a PPA price quoted in 2026 or 2027 may depend on the provider
            finishing the installation in time. Ask whether the price changes if installation slips,
            and get the price in the signed contract. The homeowner credit plays no part in a PPA,
            because the provider owns the system.
          </p>
        </section>

        <section>
          <h2>How to compare solar PPA companies</h2>
          <p>
            Get written offers from at least three companies on the same system size and your last
            12 months of usage; the CPUC recommends three bids. Then compare:
          </p>
          <ol className="mt-3 list-decimal space-y-3 pl-5">
            <li>
              <strong>Price per kWh, against your own utility price.</strong> The test, with the
              utilities&rsquo; current average rates, is in{' '}
              <Link className={link} href="/blog/ppa-loan-vs-solar-lease-vs-cash-california#ppa-price-per-kwh">
                how to judge a solar PPA price per kWh
              </Link>
              .
            </li>
            <li>
              <strong>The escalator.</strong> The CPUC says escalators are &ldquo;typically in the range
              of a 1 percent to 3 percent increase above the rate you paid in the previous year&rdquo;
              and to be cautious above that. Ask for the year-by-year price schedule.
            </li>
            <li>
              <strong>Exported power.</strong> A PPA usually charges for every kWh the system makes. At
              PG&amp;E, SCE and SDG&amp;E, exports are credited at values the CPUC says are
              &ldquo;usually lower than the retail rate&rdquo; (
              <a className={link} href={S.cpucNem}>
                CPUC
              </a>
              ). Ask how much of the modeled output the offer assumes you use at home, because an
              oversized system means paying the PPA price for power you export at a lower credit.
            </li>
            <li>
              <strong>The production estimate and guarantee.</strong> The CPUC lists a minimum energy
              guarantee as common with PPAs. Ask how it is measured and what happens if output falls
              short.
            </li>
            <li>
              <strong>Selling the home and buying out.</strong> The CPUC says a buyout &ldquo;can cost
              thousands of dollars.&rdquo; Ask whether a buyer must qualify, whether there are transfer
              fees and how the buyout price is set in each year.
            </li>
            <li>
              <strong>Who owns and services the contract.</strong> Ask whether the company may sell your
              agreement to investors and who you call for service if it does.
            </li>
            <li>
              <strong>License and disclosure.</strong> An active CSLB license in class C-46, C-10 or B,
              and the state&rsquo;s Solar Energy System Disclosure Document, which the CPUC says a
              provider must give you by law.
            </li>
          </ol>
          <p className="mt-3">
            Source for the CPUC quotations:{' '}
            <a className={link} href={S.cpucGuide}>
              California Solar Consumer Protection Guide
            </a>
            , checked September 23, 2026. What an escalator does to later years is in{' '}
            <Link className={link} href="/solar-problems/solar-escalator-clause-explained">
              solar escalator clauses explained
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Paying up front, and buying the system later</h2>
          <p>
            Many PPA companies offer a prepaid version: you pay for the expected power at the start.
            Sunrun&rsquo;s filing describes how it handles a shortfall on prepaid agreements: if the
            estimated production is less than actual production &ldquo;after the first full one to two
            years,&rdquo; prepaid customers are refunded the difference each year, and extra production
            is theirs at no charge. At the end of the initial term its customers can renew, buy the
            system at fair market value, or have it removed (
            <a className={link} href={S.sunrun10k}>
              Sunrun Form 10-K, filed February 26, 2026
            </a>
            ). That is one company&rsquo;s contract, not a rule. Compare it with what yours says, and
            see{' '}
            <Link className={link} href="/blog/prepaid-ppa-california-2026">
              the prepaid PPA checklist
            </Link>{' '}
            and{' '}
            <Link className={link} href="/blog/what-happens-to-solar-lease-when-i-sell-california">
              what happens to a PPA when you sell
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>If the PPA company goes under</h2>
          <p>
            The CPUC lists it among the cons of a PPA: &ldquo;Solar provider could go out of business
            during the contract period.&rdquo; Sunnova Energy International, a residential solar
            provider, filed for Chapter 11 on June 8, 2025, saying it would keep operating while it
            pursued a sale of certain assets (
            <a className={link} href={S.sunnova8k}>
              Sunnova Form 8-K
            </a>
            ). Ask any PPA company what happens to your price, maintenance and production guarantee if
            it is sold or fails, and keep the full signed contract. Company-specific reviews, including{' '}
            <Link className={link} href="/solar-installers/sunnova-review">
              Sunnova
            </Link>{' '}
            and{' '}
            <Link className={link} href="/solar-installers/sunrun-review">
              Sunrun
            </Link>
            , are in the{' '}
            <Link className={link} href="/solar-installers">
              California solar company reviews
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor. A referral
            request does not choose a PPA company, set a price or approve a contract; compare the
            written documents from any company before you sign.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
