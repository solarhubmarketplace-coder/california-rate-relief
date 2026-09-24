// 2026-09-23 new page (claude/ta-installers-20260923) for "solar license
// california", "california solar contractor license requirements" and "do you
// need a license to sell solar in california". It is written for people who
// want to install or sell solar; homeowners checking an installer are pointed
// to /solar-installers/licensed-solar-installer and the verification guide.
// Every requirement, fee and period was fetched from the CSLB on 2026-09-23.
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
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';

const PATH = '/blog/solar-license-california';
const UPDATED = '2026-09-23';
const metaTitle = 'Solar License in California: C-46, HIS and How to Get One';
const metaDescription =
  'The CSLB license you need to install solar in California, the registration you need to sell it, and the experience, exam, bond and fees for each.';

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

const CSLB_C46 =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C46';
const CSLB_C10 =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C10';
const CSLB_BEFORE =
  'https://web.cslb.ca.gov/contractors/applicants/contractors_license/Exam_Application/Before_Applying_For_License.aspx';
const CSLB_EXPERIENCE =
  'https://www.cslb.ca.gov/contractors/applicants/contractors_license/exam_application/experience_for_exam.aspx';
const CSLB_APPLY =
  'https://www.cslb.ca.gov/contractors/applicants/contractors_license/exam_application/applying_for_license.aspx';
const CSLB_ISSUING =
  'https://www.cslb.ca.gov/contractors/applicants/contractors_license/exam_application/Issuing_My_License.aspx';
const CSLB_HIS =
  'https://www.cslb.ca.gov/Contractors/Applicants/Home_Improvement_Registration/Before_Applying_For_HIS.aspx';
const CSLB_HIS_APP =
  'https://cslb.ca.gov/Resources/FormsAndApplications/ApplicationForRegistrationAsAHomeImprovementSalesperson.pdf';
const CSLB_BROKER = 'https://www.cslb.ca.gov/Media_Room/Industry_Bulletins/2020/January_9.aspx';
const CSLB_CONTRACTS = 'https://www.cslb.ca.gov/Resources/IndustryBulletins/2020/20-22_solar_contracts.pdf';
const CSLB_SOLAR_REQ = 'https://www2.cslb.ca.gov/Consumers/Solar_Requirements.aspx';

const sources: Source[] = [
  { label: 'CSLB: C-46 Solar Contractor classification', url: CSLB_C46 },
  { label: 'CSLB: C-10 Electrical Contractor classification', url: CSLB_C10 },
  { label: 'CSLB: before applying for the contractor examination (age, experience, bond)', url: CSLB_BEFORE },
  { label: 'CSLB: qualifying experience for the examination', url: CSLB_EXPERIENCE },
  { label: 'CSLB: applying for the contractor examination (application fee)', url: CSLB_APPLY },
  { label: 'CSLB: issuing a license (bond, license fee, workers’ compensation)', url: CSLB_ISSUING },
  { label: 'CSLB: Home Improvement Salesperson registration', url: CSLB_HIS },
  { label: 'CSLB: application for registration as a Home Improvement Salesperson', url: CSLB_HIS_APP },
  { label: 'CSLB industry bulletin: lead generation and solar broker services (2020)', url: CSLB_BROKER },
  { label: 'CSLB industry bulletin #20-22: solar contract requirements (November 17, 2020)', url: CSLB_CONTRACTS },
  { label: 'CSLB: solar energy system disclosure document (B&P Code §7169)', url: CSLB_SOLAR_REQ },
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'Do you need a license to sell solar in California?',
    answer:
      'You need a registration. The CSLB requires anyone who solicits, sells, negotiates or executes home improvement contracts for a licensed contractor to register as a Home Improvement Salesperson, and it states that selling home improvement goods or services without registering is a misdemeanor. The registration fee is $200 and the registration expires two years from the last day of the month it was issued.',
  },
  {
    question: 'What license do you need to install solar panels in California?',
    answer:
      'A CSLB contractor license in a classification that covers the work. The C-46 Solar classification is written for it: the CSLB defines a C-46 contractor as one who installs, modifies, maintains and repairs thermal and photovoltaic solar energy systems. The C-10 Electrical classification also names solar photovoltaic cells in its scope.',
  },
  {
    question: 'How long does it take to get a C-46 solar license?',
    answer:
      'The experience comes first: at least four full years at journey level, or as a foreman, supervisor or contractor in the classification, within the ten years before you apply. Up to three of those years can be credited from technical training, apprenticeship or education, but at least one year must be practical experience. Processing and exam scheduling time come on top of that.',
  },
  {
    question: 'How much does a California solar contractor license cost?',
    answer:
      'The CSLB lists a $450 application processing fee, then an initial license fee of $200 for a sole owner or $350 for other business types once you pass. You also need a $25,000 contractor bond or cashier’s check, and workers’ compensation coverage unless you qualify for an exemption. The cost of the bond itself is set by the surety, not the CSLB.',
  },
  {
    question: 'Can a lead generation company sell solar without a license?',
    answer:
      'It can refer homeowners to licensed contractors, share their contact information and set appointments without a license. The CSLB says it cannot provide quotes or offers for solar systems, or solicit, negotiate, execute or sell contracts, without the proper license or registration.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'leading-relaxed text-foreground/80 mb-4';
const link = 'text-primary underline underline-offset-2';

export default function SolarLicenseCaliforniaPage() {
  return (
    <PublicLayout
      breadcrumbLabel="Solar license in California"
      breadcrumbParent={{ label: 'California solar companies', href: '/best-solar-companies-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="California solar license requirements: installing and selling solar"
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
          <Link href="/best-solar-companies-california" className="hover:text-primary">California solar companies</Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">Solar license in California</span>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Licensing</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
          California solar license requirements: installing and selling solar
        </h1>
        <Byline updated={UPDATED} sourceCount={sources.length} />
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">
          To install solar in California you need a Contractors State License Board license in a
          classification that covers the work, usually C-46 Solar or C-10 Electrical. To sell it for
          a contractor you need a Home Improvement Salesperson registration instead. The license
          takes four years of qualifying experience, an exam, a $25,000 bond and workers&rsquo;
          compensation coverage. The sales registration costs $200 and lasts two years.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
        </p>

        <KeyFacts
          facts={[
            { label: 'Qualifying experience', value: '4 years', note: 'Journey level or above, within the 10 years before you apply.', source: { publisher: 'CSLB', date: UPDATED, url: CSLB_BEFORE } },
            { label: 'Exam application fee', value: '$450', source: { publisher: 'CSLB', date: UPDATED, url: CSLB_APPLY } },
            { label: 'Contractor bond', value: '$25,000', note: 'Bond or cashier’s check, before the license issues.', source: { publisher: 'CSLB', date: UPDATED, url: CSLB_ISSUING } },
            { label: 'Salesperson registration', value: '$200', note: 'Expires two years from the end of the month of issue.', source: { publisher: 'CSLB', date: UPDATED, url: CSLB_HIS_APP } },
          ]}
          sourcesHref="#sources"
        />

        <div>
          <h2 className={h2}>Which license covers solar work?</h2>
          <p className={p}>
            The CSLB has a classification written for this work. It defines a C-46 Solar contractor
            as one who &ldquo;installs, modifies, maintains, and repairs thermal and photovoltaic
            solar energy systems&rdquo; (CSLB, checked September 23, 2026). If your business will only
            do solar, C-46 is the license that describes it.
          </p>
          <p className={p}>
            Electricians have a second path. The C-10 Electrical classification covers anyone who
            installs or connects wiring and equipment that generates or uses electricity, and its
            scope names &ldquo;solar photovoltaic cells&rdquo; directly. A licensed electrical
            contractor can therefore take on rooftop PV without adding C-46.
          </p>
          <p className={p}>
            The CSLB&rsquo;s position on who needs which credential is spelled out in its 2020 bulletin
            on solar lead generation: installing a solar energy product is a &ldquo;home
            improvement,&rdquo; which only a licensed contractor can do, and anyone selling home
            improvement goods or services must be registered (CSLB, checked September 23, 2026).
            Homeowners checking a company against these rules should read{' '}
            <Link href="/solar-installers/licensed-solar-installer" className={link}>
              how to find a licensed solar installer
            </Link>{' '}
            instead of this page.
          </p>

          <h2 className={h2}>How to get a C-46 or C-10 license, step by step</h2>
          <ol className="mb-4 list-decimal space-y-3 pl-5 text-foreground/80">
            <li>
              <strong>Meet the basic requirements.</strong> You must be 18 or older and have at
              least four full years of experience at journey level, or as a foreman, supervisor or
              contractor, in the classification you are applying for, within the ten years before
              you apply (CSLB, checked September 23, 2026).
            </li>
            <li>
              <strong>Document the experience.</strong> Credit is given only for journey-level,
              foreman, supervising, contractor or owner-builder experience. Up to three years can come
              from technical training, apprenticeship or education, but at least one year must be
              practical. A qualified person who watched your work must certify it on the application.
            </li>
            <li>
              <strong>Apply for the exam.</strong> The application processing fee is $450 (CSLB,
              checked September 23, 2026). Some applications are sent for a formal investigation
              before approval.
            </li>
            <li>
              <strong>Pass the exam and complete the extras.</strong> The CSLB also requires an
              open-book asbestos examination before a license issues.
            </li>
            <li>
              <strong>File the bond and insurance.</strong> Before the CSLB issues the license you
              need a $25,000 contractor bond or cashier&rsquo;s check, a certificate of workers&rsquo;
              compensation insurance (or self-insurance) or an exemption if you have no employees,
              and a $25,000 bond of qualifying individual if that applies to your business structure.
              LLCs have additional bond and liability-insurance requirements.
            </li>
            <li>
              <strong>Pay the initial license fee.</strong> It is $200 for a sole owner and $350 for
              other business types (CSLB, checked September 23, 2026).
            </li>
          </ol>

          <div className="mb-4 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-3 text-left font-semibold">CSLB costs and requirements at a glance</caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Item</th>
                  <th className="p-3">Contractor license (C-46 or C-10)</th>
                  <th className="p-3">Salesperson registration (HIS)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Who needs it</th>
                  <td className="p-3 align-top">Whoever contracts for and installs the system</td>
                  <td className="p-3 align-top">Anyone who solicits, sells, negotiates or executes contracts for a licensed contractor</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Experience</th>
                  <td className="p-3 align-top">4 years in the classification, within the last 10</td>
                  <td className="p-3 align-top">None stated</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Fees</th>
                  <td className="p-3 align-top">$450 application; $200 or $350 initial license fee</td>
                  <td className="p-3 align-top">$200 application</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Bond</th>
                  <td className="p-3 align-top">$25,000</td>
                  <td className="p-3 align-top">Not required by the registration</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Background check</th>
                  <td className="p-3 align-top">Applications may go to formal investigation</td>
                  <td className="p-3 align-top">Full set of fingerprints for a criminal background check</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            Sources: CSLB applicant pages and the HIS application form, checked September 23, 2026.
          </p>

          <h2 className={h2}>Selling solar: the Home Improvement Salesperson registration</h2>
          <p className={p}>
            Door-to-door and in-home solar sales run on this registration. The CSLB says you must
            register &ldquo;if you solicit, sell, negotiate or execute home improvement contracts for
            a licensed contractor,&rdquo; with limited exceptions such as officers, partners and the
            license&rsquo;s qualifying person. The application fee is $200, every applicant
            submits fingerprints for a criminal background check, and the registration expires two
            years from the last day of the month it was issued (CSLB, checked September 23, 2026).
          </p>
          <p className={p}>
            A registered salesperson may work for more than one contractor. Before hiring one, each
            contractor must notify the CSLB on its prescribed form. Selling without registering is a
            misdemeanor, according to the CSLB&rsquo;s solar bulletin.
          </p>

          <h2 className={h2}>Referrals only: when no license is needed</h2>
          <p className={p}>
            A business that only introduces homeowners to licensed contractors does not need a CSLB
            license or registration. The CSLB says lead generators and solar brokers may serve as a
            referral source, provide contractor contact information and set up appointments. Once a
            company quotes a price, negotiates or signs contracts, it needs the credential that
            matches. The practical boundaries are covered in{' '}
            <Link href="/blog/solar-broker" className={link}>
              what a solar broker can legally do
            </Link>
            .
          </p>

          <h2 className={h2}>Starting a solar company in California</h2>
          <p className={p}>
            The license is the foundation, but a company selling residential solar takes on contract
            rules that apply to every job. A CSLB bulletin from November 17, 2020 reminded licensees
            of three: the down payment on a home improvement contract cannot exceed $1,000 or 10% of
            the contract price, whichever is less; the contract must give an approximate start date
            and an estimated completion date; and anyone selling for the company needs HIS
            registration (CSLB bulletin #20-22, checked September 23, 2026).
          </p>
          <p className={p}>
            Residential solar contracts also carry the solar energy system disclosure document
            required by Business and Professions Code section 7169. It goes on the front or cover
            page and shows the total cost and payments including financing, how customers can
            complain and the cancellation period. The contract and disclosure must be in the
            language used in the sales presentation (CSLB, checked September 23, 2026).
          </p>
          <p className={p}>
            Beyond the CSLB, a new company deals with local permits and each utility&rsquo;s
            interconnection process, and it will be compared against every other bidder on the same
            points homeowners use. The{' '}
            <Link href="/best-solar-companies-california" className={link}>
              statewide guide to choosing a solar company
            </Link>{' '}
            shows what customers are told to check, and the{' '}
            <Link href="/solar-installers/how-to-verify-a-solar-contractor-california" className={link}>
              contractor verification guide
            </Link>{' '}
            covers the license record they will read.
          </p>

          <h2 className={h2}>For homeowners: why these rules matter to you</h2>
          <p className={p}>
            Every requirement above is something you can check. The license number and
            classification, the salesperson&rsquo;s SP number, the bond and the disclosure document all
            exist on paper before you sign. If a company cannot show them, that tells you more than any
            review. See the{' '}
            <Link href="/solar-problems/solar-contract-red-flags-california" className={link}>
              solar contract red flags
            </Link>{' '}
            for what else to look for, and the{' '}
            <Link href="/solar-problems/solar-door-to-door-sales-california" className={link}>
              guide to door-to-door solar sales
            </Link>{' '}
            if the pitch started on your porch.
          </p>
        </div>

        <SourceList sources={sources} sourceCheckedDate={UPDATED} />
        <FaqBlock items={faqs} schema={false} heading="FAQ: solar licenses in California" />
        <HubSpokeLinks hub="installers" currentPath={PATH} />
        <div className="mt-10">
          <SolarInquiry topic="Solar contractor licensing in California" />
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
