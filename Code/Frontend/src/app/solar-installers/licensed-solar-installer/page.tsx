// 2026-09-23 new page (claude/ta-installers-20260923), CREATE_DEDICATED for
// "licensed solar installer". The step-by-step license lookup and contract
// rules live on /solar-installers/how-to-verify-a-solar-contractor-california;
// this page answers the earlier question: what "licensed" means for a solar
// installer in California and how to find licensed ones near you. Every rule,
// fee and date was fetched from the CSLB or CPUC on 2026-09-23.
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

const PATH = '/solar-installers/licensed-solar-installer';
const UPDATED = '2026-09-23';
const metaTitle = 'How to Find a Licensed Solar Installer in California';
const metaDescription =
  'Which CSLB licenses cover solar work, how to pull the free list of licensed solar contractors in your county, and how to confirm the one on your contract.';

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

const CSLB_CHECK = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
const CSLB_COUNTY_LIST = 'https://www.cslb.ca.gov/onlineservices/dataportal/ListByCounty';
const CSLB_C46 =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C46';
const CSLB_C10 =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C10';
const CSLB_BROKER = 'https://www.cslb.ca.gov/Media_Room/Industry_Bulletins/2020/January_9.aspx';
const CSLB_HANDYPERSON = 'https://www.cslb.ca.gov/Resources/PressReleases/2024/AB2622.FINAL.pdf';
const CSLB_ISSUING =
  'https://www.cslb.ca.gov/contractors/applicants/contractors_license/exam_application/Issuing_My_License.aspx';
const CSLB_HIS =
  'https://www.cslb.ca.gov/Contractors/Applicants/Home_Improvement_Registration/Before_Applying_For_HIS.aspx';
const CSLB_KIND =
  'https://www2.cslb.ca.gov/Consumers/Hire_A_Contractor/What_Kind_Of_Contractor.aspx';
const CSLB_CONTRACTS = 'https://www.cslb.ca.gov/Resources/IndustryBulletins/2020/20-22_solar_contracts.pdf';
const CPUC_GUIDE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';

const sources: Source[] = [
  { label: 'CSLB: C-46 Solar Contractor classification', url: CSLB_C46 },
  { label: 'CSLB: C-10 Electrical Contractor classification', url: CSLB_C10 },
  { label: 'CSLB Public Data Portal: licensees by classification and county', url: CSLB_COUNTY_LIST },
  { label: 'CSLB: Check a License', url: CSLB_CHECK },
  { label: 'CSLB industry bulletin: lead generation and solar broker services (2020)', url: CSLB_BROKER },
  { label: 'CSLB press release: handyperson exemption raised to $1,000 (AB 2622)', url: CSLB_HANDYPERSON },
  { label: 'CSLB: issuing a license (bond and workers’ compensation)', url: CSLB_ISSUING },
  { label: 'CSLB: Home Improvement Salesperson registration', url: CSLB_HIS },
  { label: 'CSLB: what kind of contractor do you need?', url: CSLB_KIND },
  { label: 'CSLB industry bulletin #20-22: solar contract requirements (November 17, 2020)', url: CSLB_CONTRACTS },
  { label: 'CPUC: California Solar Consumer Protection Guide (version 4, 2025)', url: CPUC_GUIDE },
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'Do solar installers need a license in California?',
    answer:
      'Yes. The Contractors State License Board says installing a solar energy product is a home improvement, which can only be done by a licensed contractor. The handyperson exemption for small jobs does not change that: since January 1, 2025 it covers jobs up to $1,000 only when no building permit is needed and no workers are hired.',
  },
  {
    question: 'What license does a solar installer need in California?',
    answer:
      'Look for C-46 Solar or C-10 Electrical on the license record. The CSLB defines a C-46 contractor as one who installs, modifies, maintains and repairs thermal and photovoltaic solar energy systems, and the C-10 Electrical scope names solar photovoltaic cells.',
  },
  {
    question: 'Can a general contractor install solar panels?',
    answer:
      'The CSLB describes general building contractors as usually overseeing a project and coordinating the licensed specialty subcontractors for each trade. If a general contractor is quoting your solar job, ask which licensed specialty contractor will do the solar and electrical work and check that license as well.',
  },
  {
    question: 'Does the salesperson need a license too?',
    answer:
      'The salesperson needs a registration rather than a contractor license. The CSLB requires anyone who solicits, sells, negotiates or executes home improvement contracts for a licensed contractor to register as a Home Improvement Salesperson. You can look up the registration by number or name with the same CSLB license check.',
  },
  {
    question: 'Where can I find a list of licensed solar contractors near me?',
    answer:
      'The CSLB Public Data Portal lets you pick up to 10 license classifications and up to 10 counties and download a free spreadsheet of currently renewed licenses, with business names, addresses, phone numbers, status, bond and workers’ compensation details. The CSLB notes the list is current only when downloaded, so confirm any name with the instant license check.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'leading-relaxed text-foreground/80 mb-4';
const link = 'text-primary underline underline-offset-2';

export default function LicensedSolarInstallerPage() {
  return (
    <PublicLayout
      breadcrumbLabel="Licensed solar installer"
      breadcrumbParent={{ label: 'Solar company reviews', href: '/solar-installers' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="How to find a licensed solar installer in California"
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
          <span className="text-foreground">Licensed solar installer</span>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Choosing an installer</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
          How to find a licensed solar installer in California
        </h1>
        <Byline updated={UPDATED} sourceCount={sources.length} />
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">
          A licensed solar installer in California is a contractor whose Contractors State License
          Board record covers solar work, usually the C-46 Solar or C-10 Electrical classification.
          Only a licensed contractor may install a solar energy system on a home. To find licensed
          installers near you, download the CSLB&rsquo;s free list by classification and county, then
          confirm each name with the CSLB&rsquo;s instant license check.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
        </p>

        <KeyFacts
          facts={[
            { label: 'Solar-specific license', value: 'C-46', note: 'C-10 Electrical also names solar photovoltaic cells.', source: { publisher: 'CSLB', date: UPDATED, url: CSLB_C46 } },
            { label: 'Bond behind every license', value: '$25,000', note: 'Filed before the CSLB issues the license.', source: { publisher: 'CSLB', date: UPDATED, url: CSLB_ISSUING } },
            { label: 'Unlicensed small-job limit', value: '$1,000', note: 'Only when no permit is needed and no workers are hired; since Jan. 1, 2025.', source: { publisher: 'CSLB', date: UPDATED, url: CSLB_HANDYPERSON } },
            { label: 'Cost of the CSLB contractor list', value: 'Free', note: 'Up to 10 classifications and 10 counties per download.', source: { publisher: 'CSLB', date: UPDATED, url: CSLB_COUNTY_LIST } },
          ]}
          sourcesHref="#sources"
        />

        <div>
          <h2 className={h2}>What &ldquo;licensed&rdquo; means for a solar installer</h2>
          <p className={p}>
            In California the word has a specific meaning: a current license issued by the Contractors
            State License Board (CSLB) in a classification that covers the work. This site&rsquo;s{' '}
            <Link href="/best-solar-companies-california" className={link}>
              statewide guide to choosing a solar company
            </Link>{' '}
            covers the rest of the decision; this page is about the license itself.
          </p>
          <p className={p}>
            Two classifications name solar work directly. The CSLB defines a C-46 Solar contractor as
            one who &ldquo;installs, modifies, maintains, and repairs thermal and photovoltaic solar
            energy systems.&rdquo; The C-10 Electrical classification covers anyone who installs or
            connects electrical equipment, and its scope lists &ldquo;solar photovoltaic cells&rdquo; by
            name (CSLB, checked September 23, 2026). A C-46 company that only does solar and an
            electrical contractor who also installs panels can both be properly licensed for a rooftop
            system. The license is the only installer credential California law requires; for how it
            compares with voluntary ones such as NABCEP certification, see{' '}
            <Link href="/best-solar-companies-california#accredited" className={link}>
              what licensed, NABCEP-certified and accredited mean
            </Link>
            .
          </p>
          <p className={p}>
            A general building contractor is different. The CSLB describes general contractors as
            usually overseeing a project and coordinating licensed specialty subcontractors for each
            trade. If one quotes your solar job, ask which specialty contractor will do the solar and
            electrical work, and look that license up too.
          </p>

          <h2 className={h2}>Why an unlicensed installer is not an option</h2>
          <p className={p}>
            The CSLB has stated the rule plainly: installing a solar energy product is a &ldquo;home
            improvement,&rdquo; which can only be done by a licensed contractor (CSLB industry
            bulletin, checked September 23, 2026). The state&rsquo;s small-job exemption does not open
            a gap. Since January 1, 2025, an unlicensed handyperson may take jobs up to $1,000 in labor
            and materials, but only when no building permit is needed and no workers are hired, and
            their advertising must say they are not licensed (CSLB, checked September 23, 2026). That
            exemption does not reach solar: the CSLB&rsquo;s own solar guidance places the installation
            with licensed contractors.
          </p>
          <p className={p}>
            A license also carries money and insurance behind it. Before the CSLB issues one, the
            contractor files a $25,000 bond and shows workers&rsquo; compensation coverage or a valid
            exemption (CSLB, checked September 23, 2026). The bond is not a guarantee that you will be
            repaid for a bad job, but an installer without one has none of it.
          </p>

          <h2 className={h2}>How to find licensed solar contractors near you</h2>
          <p className={p}>
            Most people start with a map search or a neighbor&rsquo;s recommendation. That works, as long
            as every name goes through the license check before a sales visit. If you want the full
            list for your area instead, the CSLB publishes it.
          </p>
          <ol className="mb-4 list-decimal space-y-3 pl-5 text-foreground/80">
            <li>
              Open the CSLB Public Data Portal&rsquo;s{' '}
              <a href={CSLB_COUNTY_LIST} className={link} target="_blank" rel="noopener noreferrer">
                list by classification and county
              </a>
              .
            </li>
            <li>
              Choose C-46 and C-10 as the classifications and your county. You can select up to 10
              classifications and up to 10 counties in one request.
            </li>
            <li>
              Download the spreadsheet. It lists currently renewed licenses with the license number,
              business name, address, phone number, license status, classifications, bond and
              workers&rsquo; compensation details. Email addresses are left out under state law, and
              the service is free (CSLB, checked September 23, 2026).
            </li>
            <li>
              Shortlist three companies and ask each for a written bid. The CPUC&rsquo;s consumer guide
              recommends bids from at least three qualified solar providers.
            </li>
            <li>
              Re-check each license on the day you sign. The CSLB warns that the downloaded list is
              current only when it is downloaded and that a license&rsquo;s status can change at any
              time.
            </li>
          </ol>
          <p className={p}>
            The C-10 list will be long, because it includes electricians who never touch solar. Filter
            it by asking each company for photos or addresses of recent solar jobs and for the permit
            numbers the city issued for them.
          </p>
          <p className={p}>
            Prefer to start local? The{' '}
            <Link href="/best-solar-companies-california#city-directory" className={link}>
              directory of city solar guides
            </Link>{' '}
            covers the utility and permit details for 66 California cities. In Santa Barbara, for
            instance, the{' '}
            <Link href="/solar-companies/santa-barbara" className={link}>
              Santa Barbara installer and permit guide
            </Link>{' '}
            covers the utility and permit questions there.
          </p>

          <h2 className={h2}>Confirming a license you have been given</h2>
          <p className={p}>
            When a company hands you a license number, run it through the CSLB&rsquo;s{' '}
            <a href={CSLB_CHECK} className={link} target="_blank" rel="noopener noreferrer">
              Check a License
            </a>{' '}
            tool. It searches by license number, business name, a person&rsquo;s name on the license,
            a Home Improvement Salesperson registration number or a salesperson&rsquo;s name. Three
            things should line up: the status is active, a solar-capable classification appears, and
            the business name matches the one on your contract exactly. Our{' '}
            <Link href="/solar-installers/how-to-verify-a-solar-contractor-california" className={link}>
              step-by-step contractor check
            </Link>{' '}
            explains what the rest of the record tells you, including the bond and complaint history.
          </p>

          <h2 className={h2}>The salesperson is licensed separately</h2>
          <p className={p}>
            The person at your door or on the phone is often not the installer. The CSLB requires
            anyone who solicits, sells, negotiates or executes home improvement contracts for a
            licensed contractor to register as a Home Improvement Salesperson (HIS). Registration
            numbers end in &ldquo;SP,&rdquo; and they appear in the same license check (CSLB, checked
            September 23, 2026). Lead generators and solar brokers may refer you and set appointments
            without registering, but they may not quote a price or negotiate the contract. The
            difference is explained in{' '}
            <Link href="/blog/solar-broker" className={link}>
              what a solar broker can and cannot do
            </Link>
            .
          </p>

          <h2 className={h2}>Signs the licensed company is not the one you are dealing with</h2>
          <ul className="mb-4 list-disc space-y-2 pl-5 text-foreground/80">
            <li>The contract names a company different from the one that pitched you, or shows no license number.</li>
            <li>The license record lists a different business name, or no solar-capable classification.</li>
            <li>
              The down payment asked for is more than $1,000 or 10% of the contract price, whichever is
              less; the CSLB says a contractor cannot ask for more (CSLB bulletin #20-22).
            </li>
            <li>
              There is no solar energy system disclosure document on the front page of the contract,
              which California requires for residential solar sales.
            </li>
            <li>The salesperson will not give a registration number you can look up.</li>
          </ul>
          <p className={p}>
            If you have already signed with an unlicensed company or one that took a deposit and
            stopped responding, see{' '}
            <Link href="/solar-problems/solar-company-took-my-money-california" className={link}>
              what to do when a solar company takes your money
            </Link>
            . Before signing anything, run through the{' '}
            <Link href="/solar-problems/solar-contract-red-flags-california" className={link}>
              contract red flags
            </Link>{' '}
            and compare{' '}
            <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className={link}>
              cash, loan, lease and PPA terms
            </Link>
            .
          </p>

          <h2 className={h2}>If you want to become the licensed installer</h2>
          <p className={p}>
            The CSLB exam requires at least four years of journey-level experience in the
            classification, with up to three years creditable from training or education. The fees,
            bond and salesperson rules are in our guide to{' '}
            <Link href="/blog/solar-license-california" className={link}>
              getting a California solar contractor license
            </Link>
            .
          </p>
        </div>

        <SourceList sources={sources} sourceCheckedDate={UPDATED} />
        <FaqBlock items={faqs} schema={false} heading="FAQ: licensed solar installers" />
        <HubSpokeLinks hub="installers" currentPath={PATH} />
        <div className="mt-10">
          <SolarInquiry topic="Finding a licensed solar installer in California" />
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
