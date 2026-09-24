// 2026-09-23 new page (claude/ta-installers-20260923), CREATE_DEDICATED for
// "solar broker". Impressions for the query were landing on
// /solar-companies/los-angeles. The legal limits below come from CSLB guidance
// fetched on 2026-09-23. This site is itself a referral service, so the page
// says so plainly and links to how it is paid.
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

const PATH = '/blog/solar-broker';
const UPDATED = '2026-09-23';
const metaTitle = "Solar Broker in California: What They Can and Can't Do";
const metaDescription =
  'A solar broker can refer you to licensed installers and book appointments, but California rules bar quoting or selling the contract. Questions to ask one.';

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

const CSLB_BROKER = 'https://www.cslb.ca.gov/Media_Room/Industry_Bulletins/2020/January_9.aspx';
const CSLB_MARKETPLACE = 'https://www.cslb.ca.gov/resources/industrybulletins/online_marketplace_fast_facts.pdf';
const CSLB_HIS =
  'https://www.cslb.ca.gov/Contractors/Applicants/Home_Improvement_Registration/Before_Applying_For_HIS.aspx';
const CSLB_CONTRACTS = 'https://www.cslb.ca.gov/Resources/IndustryBulletins/2020/20-22_solar_contracts.pdf';
const CSLB_CHECK = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
const CPUC_GUIDE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';

const sources: Source[] = [
  { label: 'CSLB industry bulletin: restrictions on lead generation and solar broker services (2020)', url: CSLB_BROKER },
  { label: 'CSLB fast facts: online marketplaces and referral services (B&P Code §7026)', url: CSLB_MARKETPLACE },
  { label: 'CSLB: Home Improvement Salesperson registration', url: CSLB_HIS },
  { label: 'CSLB industry bulletin #20-22: solar contract requirements (November 17, 2020)', url: CSLB_CONTRACTS },
  { label: 'CSLB: Check a License (license and HIS search)', url: CSLB_CHECK },
  { label: 'CPUC: California Solar Consumer Protection Guide (version 4, 2025)', url: CPUC_GUIDE },
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'Is a solar broker legal in California?',
    answer:
      'Yes, within limits. The CSLB says lead generators and solar brokers may serve as a referral source for licensed contractors, give homeowners contractor contact information and set up appointments without a license. They may not quote or offer a solar system, or solicit, negotiate, execute or sell the contract, unless they hold the license or registration the law requires.',
  },
  {
    question: 'Does a solar broker need a license?',
    answer:
      'Not for referrals alone. Anyone who solicits, sells, negotiates or executes home improvement contracts for a licensed contractor must register with the CSLB as a Home Improvement Salesperson, and the CSLB states that selling home improvement goods or services without registering is a misdemeanor. Installing the system requires a contractor license.',
  },
  {
    question: 'Who do I sign the contract with if I use a broker?',
    answer:
      'With the licensed contractor. The CSLB’s guidance for online marketplaces and referral services says the customer should enter into the contract directly with the licensed contractor and make payments directly to that contractor.',
  },
  {
    question: 'How are solar brokers paid?',
    answer:
      'Ask, because it affects whose interests the broker serves. This site, for example, is a referral service that is paid by a solar provider when a homeowner it refers signs an agreement. A broker paid by the installer should not add its own fee to your contract price; if a fee appears, ask what it is for and who receives it.',
  },
  {
    question: 'Is a solar broker the same as a solar salesperson?',
    answer:
      'No. A broker in the CSLB’s sense only refers and books appointments. A salesperson negotiates and sells contracts for a licensed contractor and must be registered with the CSLB as a Home Improvement Salesperson. Registration numbers end in the letters SP and can be looked up with the CSLB license check.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'leading-relaxed text-foreground/80 mb-4';
const link = 'text-primary underline underline-offset-2';

export default function SolarBrokerPage() {
  return (
    <PublicLayout
      breadcrumbLabel="Solar broker"
      breadcrumbParent={{ label: 'California solar companies', href: '/best-solar-companies-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="What a solar broker is, and what one can legally do in California"
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
          <span className="text-foreground">Solar broker</span>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Choosing an installer</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
          What a solar broker is, and what one can legally do in California
        </h1>
        <Byline updated={UPDATED} sourceCount={sources.length} />
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">
          A solar broker connects homeowners with solar installers instead of installing anything
          itself. In California, the Contractors State License Board says a broker or lead generator
          may refer you to licensed contractors, give you their contact details and book
          appointments. It may not quote you a system or negotiate and sell the contract unless it
          holds the license or registration the law requires.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
        </p>

        <KeyFacts
          facts={[
            { label: 'Broker may', value: 'Refer and book', note: 'Share licensed contractors’ contact details and set appointments.', source: { publisher: 'CSLB', date: UPDATED, url: CSLB_BROKER } },
            { label: 'Broker may not', value: 'Quote or sell', note: 'No offers, negotiation or contract sales without a license or registration.', source: { publisher: 'CSLB', date: UPDATED, url: CSLB_BROKER } },
            { label: 'Selling without HIS registration', value: 'Misdemeanor', note: 'Applies to anyone selling home improvement contracts.', source: { publisher: 'CSLB', date: UPDATED, url: CSLB_BROKER } },
            { label: 'Who you sign with', value: 'The contractor', note: 'Contract and payments go directly to the licensed contractor.', source: { publisher: 'CSLB', date: UPDATED, url: CSLB_MARKETPLACE } },
          ]}
          sourcesHref="#sources"
        />

        <div>
          <h2 className={h2}>What a solar broker does</h2>
          <p className={p}>
            The word covers a range of businesses. Some brokers call themselves independent advisers
            and gather quotes from several installers. Some are websites that collect your details
            and pass them to one or more companies. Others are sales teams that work for a handful of
            installers and describe themselves as brokers. What they share is that someone else does
            the installation. That is why the first thing to learn about any broker is which licensed
            company would actually build your system, and how the broker is paid for the
            introduction. The{' '}
            <Link href="/best-solar-companies-california" className={link}>
              guide to choosing a solar company in California
            </Link>{' '}
            covers how to compare those companies once you have their names.
          </p>

          <h2 className={h2}>Where California draws the line</h2>
          <p className={p}>
            The CSLB set out the rules for the solar industry in a 2020 industry bulletin. Lead
            generators and brokers may &ldquo;serve as a referral source for licensed contractors,
            provide contractor contact information to prospective customers, and set up
            appointments.&rdquo; They cannot provide quotes or offers for solar systems, and they
            cannot solicit, negotiate, execute or sell contracts without proper licensing. The same
            bulletin states that installing a solar energy product is a &ldquo;home improvement,&rdquo;
            which only a licensed contractor can do (CSLB, checked September 23, 2026).
          </p>
          <p className={p}>
            The CSLB&rsquo;s separate guidance for online marketplaces and referral services adds two
            points. A referral service may act as a repository of licensed contractors and hand out
            their contact information, but it may not claim the capacity to take on a construction
            project itself, citing Business and Professions Code section 7026. And to stay clear of
            unlicensed activity, the CSLB says the customer &ldquo;should enter into a contract
            directly with the licensed contractor and make payments directly to that licensed
            contractor&rdquo; (CSLB, checked September 23, 2026).
          </p>

          <h2 className={h2}>Broker, salesperson, installer: who is who</h2>
          <div className="mb-4 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Roles in a California home solar sale and the credential each needs</caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Role</th>
                  <th className="p-3">What it may do</th>
                  <th className="p-3">Credential to check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Broker or lead generator</th>
                  <td className="p-3 align-top">Refer you, share contractor contact details, book appointments</td>
                  <td className="p-3 align-top">None needed for referrals only</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Home Improvement Salesperson</th>
                  <td className="p-3 align-top">Solicit, sell, negotiate or execute contracts for a licensed contractor</td>
                  <td className="p-3 align-top">CSLB HIS registration (number ends in &ldquo;SP&rdquo;)</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Licensed contractor</th>
                  <td className="p-3 align-top">Sign the contract, take payment, design, permit and install</td>
                  <td className="p-3 align-top">CSLB license with a solar-capable classification</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={p}>
            A salesperson who negotiates your contract must be registered with the CSLB as a Home
            Improvement Salesperson; the CSLB says anyone who solicits, sells, negotiates or executes
            home improvement contracts for a licensed contractor must register (CSLB, checked
            September 23, 2026). Both the registration and the contractor&rsquo;s license can be looked
            up in the CSLB&rsquo;s{' '}
            <a href={CSLB_CHECK} className={link} target="_blank" rel="noopener noreferrer">
              Check a License
            </a>{' '}
            tool. What a solar-capable license looks like is covered in{' '}
            <Link href="/solar-installers/licensed-solar-installer" className={link}>
              how to find a licensed solar installer
            </Link>
            .
          </p>

          <h2 className={h2}>When a broker helps, and when it adds a layer</h2>
          <p className={p}>
            A good broker can save you time. It can gather two or three bids on the same system,
            screen out companies without a current license, and translate unfamiliar proposal terms.
            If you are busy or new to solar, that is worth something.
          </p>
          <p className={p}>
            The risks are about incentives and distance. A broker paid by one installer has a reason
            to steer you there. A broker that stays in the conversation after the introduction can
            blur who promised what, and promises made by someone who is not a party to the contract
            are hard to enforce. The CPUC&rsquo;s consumer guide still tells homeowners to get bids
            from at least three qualified solar providers and compare them, whoever makes the
            introduction (CPUC, checked September 23, 2026).
          </p>

          <h2 className={h2}>Questions to ask a solar broker</h2>
          <ol className="mb-4 list-decimal space-y-2 pl-5 text-foreground/80">
            <li>Which licensed contractors do you work with, and what are their license numbers?</li>
            <li>Who pays you, how much, and is any of it added to my contract price?</li>
            <li>Will my contract and my payments go directly to the licensed contractor?</li>
            <li>Are you, or is anyone who will negotiate with me, registered as a Home Improvement Salesperson?</li>
            <li>Can you get me quotes from more than one installer on the same system size and equipment?</li>
            <li>Who do I call if something goes wrong after the installation?</li>
          </ol>
          <p className={p}>
            A fee buried in a loan or lease is a separate problem from the broker&rsquo;s role. See{' '}
            <Link href="/solar-problems/solar-dealer-fees-explained" className={link}>
              how dealer fees work in solar financing
            </Link>
            .
          </p>

          <h2 className={h2}>Red flags</h2>
          <ul className="mb-4 list-disc space-y-2 pl-5 text-foreground/80">
            <li>The broker gives you a price and asks you to sign with the broker rather than with a contractor.</li>
            <li>You are asked to pay the broker a deposit. Payments belong with the licensed contractor, and a home improvement down payment is capped at $1,000 or 10% of the contract price, whichever is less (CSLB bulletin #20-22).</li>
            <li>No one can give you a contractor license number or an HIS registration number to look up.</li>
            <li>The pitch leans on a deadline, a &ldquo;government program&rdquo; or a promise that your bill disappears.</li>
          </ul>
          <p className={p}>
            Those pressure tactics are catalogued in{' '}
            <Link href="/solar-problems/solar-sales-tactics-california" className={link}>
              solar sales tactics to recognize
            </Link>
            .
          </p>

          <h2 className={h2}>Where this site fits</h2>
          <p className={p}>
            California Rate Relief is on the referral side of the CSLB&rsquo;s line. It can pass your
            inquiry to independent California solar providers so you can compare their proposals. It
            does not quote systems, sign contracts or install anything, and it is paid by a solar
            provider when a homeowner it refers signs an agreement. The details are on{' '}
            <Link href="/how-we-make-money" className={link}>
              how we make money
            </Link>
            . Whoever introduces you, the steps are the same: check the license, get competing
            quotes on the same basis with the{' '}
            <Link href="/blog/solar-system-quotes-california" className={link}>
              guide to comparing solar quotes
            </Link>
            , and run the contractor&rsquo;s name through the{' '}
            <Link href="/solar-installers/how-to-verify-a-solar-contractor-california" className={link}>
              full verification steps
            </Link>
            .
          </p>
        </div>

        <SourceList sources={sources} sourceCheckedDate={UPDATED} />
        <FaqBlock items={faqs} schema={false} heading="FAQ: solar brokers" />
        <HubSpokeLinks hub="installers" currentPath={PATH} />
        <div className="mt-10">
          <SolarInquiry topic="Solar brokers and referral services in California" />
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
