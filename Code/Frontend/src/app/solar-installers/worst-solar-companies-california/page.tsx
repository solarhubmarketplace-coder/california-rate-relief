// 2026-09-23 new page (claude/ta-installers-20260923) for "worst solar
// companies in california". It does not rank anyone. The stated method: list
// only events that sit on a public court or state record, each linked to that
// record, and show readers how to check any company themselves. Court dockets
// were read on CourtListener (federal bankruptcy courts) and CSLB/CPUC/DFPI
// pages were fetched on 2026-09-23.
import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { Byline } from '@/components/trust/Byline';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';

const PATH = '/solar-installers/worst-solar-companies-california';
const UPDATED = '2026-09-23';
const metaTitle = 'Worst Solar Companies in California: How to Check a Record';
const metaDescription =
  'No agency publishes a list of the worst solar companies. Here are the bankruptcy filings on the court record and how to check any installer yourself.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${PATH}`,
    publishedTime: `${UPDATED}T00:00:00Z`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const CL = 'https://www.courtlistener.com';
const FILINGS = [
  {
    company: 'SunPower Corporation',
    court: 'U.S. Bankruptcy Court, District of Delaware',
    number: '24-11649',
    filed: 'August 5, 2024',
    chapter: 'Chapter 11',
    docket: `${CL}/docket/69017070/sunpower-corporation/`,
    review: '/solar-installers/sunpower-review',
    reviewLabel: 'SunPower review',
  },
  {
    company: 'Sunnova Energy International Inc.',
    court: 'U.S. Bankruptcy Court, Southern District of Texas',
    number: '25-90160',
    filed: 'June 8, 2025',
    chapter: 'Chapter 11',
    docket: `${CL}/docket/70491405/sunnova-energy-international-inc/`,
    review: '/solar-installers/sunnova-review',
    reviewLabel: 'Sunnova review',
  },
  {
    company: 'Freedom Forever LLC',
    court: 'U.S. Bankruptcy Court, District of Delaware',
    number: '26-10522',
    filed: 'April 15, 2026',
    chapter: 'Listed under Chapter 7 on the docket as of September 23, 2026',
    docket: `${CL}/docket/73192534/freedom-forever-llc/`,
    review: '/solar-installers/freedom-forever-bankruptcy-what-to-do',
    reviewLabel: 'Freedom Forever: what customers should do',
  },
];

const CSLB_CHECK = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
const CSLB_COMPLAINT = 'https://www.cslb.ca.gov/consumers/filing_a_complaint/how_the_complaint_process_works.aspx';
const CSLB_CONTRACTS = 'https://www.cslb.ca.gov/Resources/IndustryBulletins/2020/20-22_solar_contracts.pdf';
const CSLB_BROKER = 'https://www.cslb.ca.gov/Media_Room/Industry_Bulletins/2020/January_9.aspx';
const CPUC_GUIDE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';
const DFPI_PACE = 'https://dfpi.ca.gov/consumers/housing/pace/';

const sources: Source[] = [
  ...FILINGS.map((f) => ({ label: `CourtListener docket: ${f.company}, No. ${f.number} (${f.court})`, url: f.docket })),
  { label: 'CSLB: Check a License (status, classifications, complaint disclosure)', url: CSLB_CHECK },
  { label: 'CSLB: how the complaint process works', url: CSLB_COMPLAINT },
  { label: 'CSLB industry bulletin #20-22: solar contract requirements (November 17, 2020)', url: CSLB_CONTRACTS },
  { label: 'CSLB industry bulletin: lead generation and solar broker services (2020)', url: CSLB_BROKER },
  { label: 'CPUC: California Solar Consumer Protection Guide (version 4, 2025)', url: CPUC_GUIDE },
  { label: 'California DFPI: PACE financing', url: DFPI_PACE },
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'Is there an official list of the worst solar companies in California?',
    answer:
      'No. Neither the Contractors State License Board nor the CPUC publishes a ranking of solar companies. What the state does publish is each contractor’s license record, which you can search with the CSLB’s Check a License tool, including complaint disclosure. Federal bankruptcy filings are public court records.',
  },
  {
    question: 'Which big residential solar companies have filed for bankruptcy?',
    answer:
      'Among companies that sold residential solar in California, the federal court record shows SunPower Corporation (Chapter 11, District of Delaware, No. 24-11649, filed August 5, 2024), Sunnova Energy International Inc. (Chapter 11, Southern District of Texas, No. 25-90160, filed June 8, 2025) and Freedom Forever LLC (District of Delaware, No. 26-10522, filed April 15, 2026, listed under Chapter 7 on the docket as of September 23, 2026).',
  },
  {
    question: 'How do I report a bad solar company in California?',
    answer:
      'File a complaint with the Contractors State License Board. Homeowners, other contractors, subcontractors, employees and public agencies can file, and the CSLB says it has jurisdiction over licensed and unlicensed contractors’ projects for up to four years. If the CSLB cannot settle a complaint, it may refer you to alternative dispute resolution.',
  },
  {
    question: 'What happens to my warranty if my solar company goes out of business?',
    answer:
      'It depends on who issued each warranty and who owns your system. Manufacturer warranties on panels and inverters are separate from the installer’s workmanship warranty, and a lease or PPA may end up serviced by a different company. Our guide to solar installer bankruptcy in California walks through each case.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'leading-relaxed text-foreground/80 mb-4';
const link = 'text-primary underline underline-offset-2';

export default function WorstSolarCompaniesCalifornia() {
  return (
    <PublicLayout
      breadcrumbLabel="Worst solar companies: checking a record"
      breadcrumbParent={{ label: 'Solar company reviews', href: '/solar-installers' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="The worst solar companies in California: how to check a company's record before you sign"
        url={`https://ratereliefca.com${PATH}`}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-8 md:pt-12">
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/solar-installers" className="hover:text-primary">Solar company reviews</Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">Worst solar companies: checking a record</span>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Consumer protection</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
          The worst solar companies in California: how to check a company&rsquo;s record
        </h1>
        <Byline updated={UPDATED} sourceCount={sources.length} />
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">
          No state agency publishes a list of California&rsquo;s worst solar companies, and this page
          does not invent one. What you can check are public records: a contractor&rsquo;s license
          status and complaint disclosure at the Contractors State License Board, bankruptcy filings
          in federal court, and the terms in the company&rsquo;s own contract. Below are those checks,
          and the large residential solar companies whose bankruptcy filings are on the court record.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
        </p>

        <div>
          <h2 className={h2}>How this page decides what to list</h2>
          <p className={p}>
            A &ldquo;worst companies&rdquo; list built from online reviews mostly measures who has the
            most customers and the angriest ones. So this page uses a narrower rule: a company appears
            only for an event on a public court or state record, linked to that record, with the date
            it was checked. There are no scores, no stars and no opinions about workmanship. A company
            not named here has not been cleared; it simply has no qualifying record on this page. For
            the other side of the decision, the{' '}
            <Link href="/best-solar-companies-california" className={link}>
              guide to choosing and verifying a solar company
            </Link>{' '}
            covers what to look for in a good one.
          </p>

          <h2 className={h2}>Residential solar bankruptcies on the federal court record</h2>
          <p className={p}>
            A bankruptcy filing is a financial event, not a verdict on anyone&rsquo;s roof work. It
            matters to homeowners because warranties, production guarantees and service calls depend on
            a company that is still operating. These three companies sold residential solar in
            California; each filing below was read on CourtListener&rsquo;s copy of the federal docket on
            September 23, 2026.
          </p>
          <div className="mb-4 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-3 text-left font-semibold">Bankruptcy filings, by filing date</caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Company</th>
                  <th className="p-3">Court and case number</th>
                  <th className="p-3">Filed</th>
                  <th className="p-3">Chapter</th>
                  <th className="p-3">On this site</th>
                </tr>
              </thead>
              <tbody>
                {FILINGS.map((f) => (
                  <tr key={f.number} className="border-t">
                    <th scope="row" className="p-3 align-top">{f.company}</th>
                    <td className="p-3 align-top">
                      {f.court},{' '}
                      <a href={f.docket} className={link} target="_blank" rel="noopener noreferrer">
                        No. {f.number}
                      </a>
                    </td>
                    <td className="p-3 align-top">{f.filed}</td>
                    <td className="p-3 align-top">{f.chapter}</td>
                    <td className="p-3 align-top">
                      <Link href={f.review} className={link}>
                        {f.reviewLabel}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={p}>
            If you have a system from one of these companies, what happens next depends on whether you
            own it or lease it and who issued each warranty. The{' '}
            <Link href="/solar-installers/solar-installer-bankruptcy-california" className={link}>
              guide to solar installer bankruptcy in California
            </Link>{' '}
            walks through each case, and the{' '}
            <Link href="/solar-installers/sunrun-review" className={link}>
              Sunrun review
            </Link>{' '}
            covers the questions people ask about Sunrun&rsquo;s own status.
          </p>

          <h2 className={h2}>Check any company&rsquo;s record yourself</h2>
          <ol className="mb-4 list-decimal space-y-3 pl-5 text-foreground/80">
            <li>
              <strong>The license record.</strong> The CSLB&rsquo;s{' '}
              <a href={CSLB_CHECK} className={link} target="_blank" rel="noopener noreferrer">
                Check a License
              </a>{' '}
              tool shows whether a license is active, what it covers and its complaint disclosure.
              Search by license number or business name, and look up the salesperson&rsquo;s
              registration too.
            </li>
            <li>
              <strong>Federal court records.</strong> Bankruptcy cases are federal, and some lawsuits
              against solar companies are filed in federal court too. CourtListener lets you search
              dockets by company name for free.
            </li>
            <li>
              <strong>State court records.</strong> Lawsuits filed in California state court sit with
              each county&rsquo;s superior court, which keeps its own case records.
            </li>
            <li>
              <strong>Reviews, read the right way.</strong> Skip the average. Read the most recent one-
              and two-star reviews and look for repeated themes: missed install dates, unanswered
              service calls, bills that did not match the proposal.
            </li>
          </ol>
          <p className={p}>
            Several reviews on this site already do this for specific companies, checking license
            numbers and court records against what each company says about itself, among them the{' '}
            <Link href="/solar-installers/powur-solar-review" className={link}>
              Powur review
            </Link>
            , the{' '}
            <Link href="/solar-installers/solar-optimum-review" className={link}>
              Solar Optimum review
            </Link>{' '}
            and the{' '}
            <Link href="/solar-installers/palmetto-solar-review" className={link}>
              Palmetto review
            </Link>
            . They are not a ranking. The full list is on the{' '}
            <Link href="/solar-installers" className={link}>
              California solar company reviews index
            </Link>
            .
          </p>

          <h2 className={h2}>Warning signs the state tells you to watch for</h2>
          <p className={p}>
            Bad solar experiences usually start with the sale, and state guidance names the patterns.
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-5 text-foreground/80">
            <li>
              <strong>&ldquo;Free&rdquo; solar.</strong> The CPUC&rsquo;s consumer guide: &ldquo;Solar
              energy is rarely free. An honest company will be upfront about all the costs.&rdquo;
            </li>
            <li>
              <strong>A large deposit.</strong> A home improvement down payment cannot exceed $1,000 or
              10% of the contract price, whichever is less (CSLB bulletin #20-22).
            </li>
            <li>
              <strong>No disclosure document.</strong> California requires a solar energy system
              disclosure document on the front page of a residential solar contract.
            </li>
            <li>
              <strong>A price from someone who is not the contractor.</strong> The CSLB says lead
              generators and brokers may refer and book appointments but may not quote or negotiate a
              solar contract without the right license or registration.
            </li>
            <li>
              <strong>Financing on your property tax bill.</strong> DFPI warns that PACE contracts
              &ldquo;are signed financing agreements that are difficult to void.&rdquo;
            </li>
            <li>
              <strong>Pressure to sign today.</strong> You have at least three business days to cancel,
              five if you are 65 or older, according to the CPUC guide.
            </li>
          </ul>
          <p className={p}>
            The long versions are in{' '}
            <Link href="/solar-problems/solar-contract-red-flags-california" className={link}>
              solar contract red flags
            </Link>
            ,{' '}
            <Link href="/solar-problems/solar-sales-tactics-california" className={link}>
              solar sales tactics
            </Link>{' '}
            and{' '}
            <Link href="/solar-problems/solar-dealer-fees-explained" className={link}>
              dealer fees in solar financing
            </Link>
            .
          </p>

          <h2 className={h2}>If you already hired a company that let you down</h2>
          <p className={p}>
            Start with the CSLB. Homeowners, other contractors, subcontractors, employees and public
            agencies can all file complaints, and the board says it has jurisdiction over licensed and
            unlicensed contractors&rsquo; projects for up to four years. When it cannot settle a
            complaint, it may refer you to alternative dispute resolution (CSLB, checked September 23,
            2026). If you are still inside the cancellation window, cancel in writing first. For money
            paid and work not done, see{' '}
            <Link href="/solar-problems/solar-company-took-my-money-california" className={link}>
              what to do when a solar company takes your money
            </Link>
            .
          </p>
        </div>

        <SourceList sources={sources} sourceCheckedDate={UPDATED} />
        <FaqBlock items={faqs} schema={false} heading="FAQ: bad solar companies in California" />
        <HubSpokeLinks hub="installers" currentPath={PATH} />
        <div className="mt-10">
          <SolarInquiry topic="Checking a solar company's record in California" />
        </div>
        <AuthorBio
          domain="crr"
          palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }}
        />
      </main>
      <Footer />
    </PublicLayout>
  );
}
