import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { GuideShell, Cite } from '@/components/growth/GuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import type { KeyFact } from '@/components/trust/KeyFacts';

const PATH = '/blog/are-solar-panels-a-scam';
const UPDATED = '2026-09-23';
const HUB = { label: 'Solar problems and scams', href: '/solar-problems' };
const metaTitle = 'Are Solar Panels a Scam? California Solar Scams to Avoid';
const metaDescription =
  'Solar panels aren’t a scam; some sales are. The red flags California regulators list, your right to cancel, the down payment cap, and where to report.';

const CPUC_GUIDE = 'https://www.cpuc.ca.gov/solarguide/';
const CSLB_SOLAR = 'https://www.cslb.ca.gov/solar';
const CSLB_LOOKUP = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
const SFDA = 'https://sfdistrictattorney.org/district-attorney-brooke-jenkins-announces-settlement-with-vivint-solar/';
const FTC = 'https://consumer.ftc.gov/articles/solar-power-your-home';
const AG = 'https://oag.ca.gov/contact/consumer-complaint-against-business-or-company';
const LEG = (code: string, sec: string) =>
  `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=${code}&sectionNum=${sec}`;

const sources: Source[] = [
  { label: 'CPUC: California Solar Consumer Protection Guide (Version 4, published October 2025), red flags and rights', url: CPUC_GUIDE },
  { label: 'CSLB: Solar Smart, consumer tips, salesperson registration and complaint statistics', url: CSLB_SOLAR },
  { label: 'CSLB: License and home improvement salesperson lookup', url: CSLB_LOOKUP },
  { label: 'Civil Code § 1689.7 (cancelling a home solicitation contract)', url: LEG('CIV', '1689.7') },
  { label: 'Business and Professions Code § 7159.5 (down payment and payment schedule)', url: LEG('BPC', '7159.5') },
  { label: 'Business and Professions Code § 7169 (solar energy system disclosure document)', url: LEG('BPC', '7169') },
  { label: 'San Francisco District Attorney: Settlement with Vivint Solar (Feb. 19, 2026)', url: SFDA },
  { label: 'Federal Trade Commission: Solar power for your home (updated Dec. 9, 2025)', url: FTC },
  { label: 'California Attorney General: Consumer complaint against a business', url: AG },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Cancel a contract signed at home',
    value: '3 business days',
    note: 'Five for senior citizens, until midnight of the last day.',
    source: { publisher: 'Civ. Code § 1689.7', date: UPDATED, url: LEG('CIV', '1689.7') },
  },
  {
    label: 'Largest legal down payment',
    value: '$1,000 or 10%',
    note: 'Whichever is less, on a home improvement contract.',
    source: { publisher: 'B&P Code § 7159.5', date: UPDATED, url: LEG('BPC', '7159.5') },
  },
  {
    label: 'Solar complaints to CSLB',
    value: '2,263 in FY 2022/23',
    note: '323 of those investigated were misrepresentation or fraud.',
    source: { publisher: 'CSLB', date: UPDATED, url: CSLB_SOLAR },
  },
  {
    label: 'Contractor complaints',
    value: '800-321-2752',
    note: 'CSLB’s line, as listed in the CPUC consumer guide.',
    source: { publisher: 'CPUC', date: UPDATED, url: CPUC_GUIDE },
  },
];

const faqs = [
  {
    question: 'Are solar panels a scam in California?',
    answer:
      'No. Panels generate real electricity that your utility meter records. What goes wrong is the sale: promises that can’t be kept, payments and escalators that weren’t explained, and contractors who take a deposit and don’t finish. CSLB received 2,263 solar complaints in fiscal year 2022/2023, and most of those investigated were about workmanship or abandoned jobs rather than the technology.',
  },
  {
    question: 'Is free solar in California a scam?',
    answer:
      'The claim is a red flag. The CPUC’s consumer guide lists “You can get free solar energy at no cost to you” among the things a legitimate provider should not say. Offers with nothing due at signing are usually leases, power purchase agreements or loans, which you pay for over time.',
  },
  {
    question: 'How do I know if a solar company is legit?',
    answer:
      'Check the contractor’s license and the salesperson’s home improvement salesperson registration on the CSLB lookup, get at least three written bids as CSLB recommends, and make sure every promise is in the contract. Compare the proposal with your own last 12 months of usage and your actual rate, not a salesperson’s estimate.',
  },
  {
    question: 'Can I cancel a solar contract in California?',
    answer:
      'If you signed at home or away from the seller’s place of business, Civil Code § 1689.7 lets most buyers cancel until midnight of the third business day after signing, and senior citizens until the fifth. Cancel in writing and keep proof. After that window, your options depend on the contract; see our guide to cancelling before installation.',
  },
  {
    question: 'Where do I report a solar scam in California?',
    answer:
      'Contractor and installer problems go to CSLB at 800-321-2752. Utility billing issues go to the CPUC, and PACE financing disputes to the Department of Financial Protection and Innovation, per the CPUC’s guide. You can also file with the California Attorney General and report fraud to the FTC at ReportFraud.ftc.gov.',
  },
];

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${PATH}`,
    publishedTime: '2026-04-16T00:00:00Z',
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const th = 'p-3 text-left align-top font-semibold';
const td = 'p-3 align-top';

export default function AreSolarPanelsAScam() {
  return (
    <PublicLayout breadcrumbLabel="Are solar panels a scam?" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Are solar panels a scam? How California solar scams work and how to avoid them"
        url="https://ratereliefca.com/blog/are-solar-panels-a-scam"
        datePublished="2026-04-16"
        dateModified="2026-09-23"
        description="Solar panels are real technology; some solar sales are not honest. The red flags California regulators list, the legal protections you have, how to check a company, and where to report."
      />
      <Header />
      <GuideShell
        title="Are solar panels a scam? How California solar scams work and how to avoid them"
        eyebrow="Solar problems"
        crumbs={[HUB]}
        crumbLabel="Are solar panels a scam?"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="rules_permits"
        path={PATH}
        quickCheckTopic="California solar legitimacy and quote comparison"
        leadCount={2}
        inquiry={<SolarInquiry topic="California solar legitimacy and quote comparison" />}
      >
        <p>
          No. Solar panels are a real technology that produces real electricity. The scams are in how some
          systems are sold: false promises of free power or government programs, pressure to sign quickly on a
          tablet, and savings estimates you can’t check. California regulators publish the same red flags, and
          state law gives you at least three business days to cancel a contract signed at home.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
          California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.
          That is why this page sticks to what regulators and the law say.
        </p>

        <section>
          <h2>The red flags California regulators list</h2>
          <p>
            The CPUC’s California Solar Consumer Protection Guide (Version 4, published October 2025) tells
            homeowners to walk away from a provider who says things like:
          </p>
          <ul>
            <li>“You can get free solar energy at no cost to you.”</li>
            <li>“You will never pay an electricity bill ever again.”</li>
            <li>“Time is running out and you must quickly sign.”</li>
          </ul>
          <p>
            It also warns that unscrupulous salespeople may “skip key parts of the contract and financial
            information, especially on a tablet.” <Cite publisher="CPUC" href={CPUC_GUIDE} date={UPDATED} /> The
            Federal Trade Commission’s advice points the same way: never deal with a company that pressures you
            for a quick decision, tells you to sign without time to review, or asks you to pay in cash.{' '}
            <Cite publisher="FTC" href={FTC} date={UPDATED} />
          </p>
        </section>

        <section>
          <h2>How solar scams usually work</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Common solar sales scams and how to check them</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>The pitch</th>
                  <th className={th}>What to check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className={th}>“Free” solar or a “government program”</th>
                  <td className={td}>Who owns the system and what you pay over the full term. See <Link href="/solar-problems/free-solar-california-is-it-real">whether free solar in California is real</Link>.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>“We’re with your utility”</th>
                  <td className={td}>The company’s legal name and license number, and any claimed utility connection checked with the utility directly.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>“Your bill goes to zero”</th>
                  <td className={td}>The proposal’s production estimate against your last 12 months of use. See <Link href="/solar-problems/solar-bill-still-high-california">why solar bills can stay high</Link>.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>A low starting price per kWh</th>
                  <td className={td}>The yearly escalator and the full payment schedule. See <Link href="/solar-problems/solar-escalator-clause-explained">how escalators compound</Link>.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>A cheap-looking loan payment</th>
                  <td className={td}>Dealer fees folded into the price. See <Link href="/solar-problems/solar-dealer-fees-explained">how dealer fees work</Link>.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>A big deposit to “lock in” a price</th>
                  <td className={td}>The legal cap on down payments, below.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>“Just sign here to see if you qualify”</th>
                  <td className={td}>Whether you are signing a contract or a credit application, and what is on the whole document.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            These aren’t hypothetical. In February 2026, five California district attorneys announced a $4.3
            million stipulated judgment with Vivint Solar over allegations that its power purchase agreement sales
            mischaracterized ties to utilities, overstated savings and misrepresented cancellation rights; the
            company agreed without admitting liability. <Cite publisher="SF District Attorney" href={SFDA} date={UPDATED} />{' '}
            More on that case and others is in <Link href="/solar-problems/solar-lawsuit-california">solar lawsuits in California</Link>.
          </p>
        </section>

        <section>
          <h2>Protections California law gives you</h2>
          <ul>
            <li>
              <strong>A right to cancel.</strong> For contracts signed at home, Civil Code § 1689.7 lets most buyers
              cancel “at any time prior to midnight of the third business day,” and senior citizens until the
              fifth. The contract must be in the same language as the sales presentation.{' '}
              <Cite publisher="leginfo.legislature.ca.gov" href={LEG('CIV', '1689.7')} date={UPDATED} />
            </li>
            <li>
              <strong>A cap on the down payment.</strong> Under Business and Professions Code § 7159.5, a down
              payment “shall not exceed one thousand dollars ($1,000) or 10 percent of the contract amount,
              whichever amount is less,” and after that the contractor may not take payment that exceeds the value
              of work done or materials delivered.
            </li>
            <li>
              <strong>A disclosure page up front.</strong> Section 7169 requires a solar energy system disclosure
              document on the front page of every solar contract, in 16-point bold type, showing the total cost and
              payments, how to complain, and your cancellation right.
            </li>
            <li>
              <strong>Registered salespeople.</strong> CSLB says solar sellers generally must be registered as home
              improvement salespersons. <Cite publisher="CSLB" href={CSLB_SOLAR} date={UPDATED} />
            </li>
          </ul>
          <p>
            The CPUC guide adds that you have the right to read it before signing without time pressure, to get
            the contract and financing documents in the language of the sales pitch, and to receive printed
            copies on request.
          </p>
        </section>

        <section>
          <h2>How to check a solar company before you sign</h2>
          <ol>
            <li>Look up the contractor’s license and the salesperson’s registration on the <a href={CSLB_LOOKUP} target="_blank" rel="noopener noreferrer">CSLB lookup</a>, which also shows complaint disclosure.</li>
            <li>Get “competing bids from at least three contractors,” as CSLB advises, priced on the same system.</li>
            <li>Bring your last 12 months of bills and your rate per kWh, so the savings claim can be checked.</li>
            <li>Make sure “the contract you sign spells out everything you were promised” (CSLB’s words), including production estimates and warranties.</li>
            <li>Read the CPUC guide and the solar disclosure page before signing, not after.</li>
          </ol>
          <p>
            Our <Link href="/solar-installers/how-to-verify-a-solar-contractor-california">contractor verification walkthrough</Link>{' '}
            shows each lookup, and <Link href="/solar-problems/solar-contract-red-flags-california">solar contract red flags</Link>{' '}
            covers the clauses to question. If the pitch came to your door, read{' '}
            <Link href="/solar-problems/solar-door-to-door-sales-california">your rights with door-to-door solar sales</Link>.
          </p>
        </section>

        <section>
          <h2>If you think you’ve been scammed</h2>
          <ol>
            <li>If you are inside the cancellation window, cancel in writing today and keep proof of delivery.</li>
            <li>Gather the contract, disclosure document, proposal, payment records and messages.</li>
            <li>File with CSLB at 800-321-2752 for contractor problems. Utility billing issues go to the CPUC; PACE financing disputes go to the DFPI, as the CPUC guide directs.</li>
            <li>You can also file a complaint with the <a href={AG} target="_blank" rel="noopener noreferrer">California Attorney General</a> and report fraud at ReportFraud.ftc.gov.</li>
            <li>For money you want back, see <Link href="/solar-problems/solar-company-took-my-money-california">what to do when a solar contractor took your money</Link> and <Link href="/solar-problems/attorney-to-sue-solar-company-california">when to hire an attorney</Link>.</li>
          </ol>
          <p>
            If there is a lien or UCC-1 filing you didn’t expect, <Link href="/solar-problems/ucc-1-lien-solar-california">what a solar UCC-1 means</Link>{' '}
            explains it.
          </p>
        </section>

        <section>
          <h2>So is solar worth it?</h2>
          <p>
            Once the sales tactics are set aside, whether solar pays is a numbers question about your usage, your
            utility and how you pay for the system. <Link href="/blog/are-solar-panels-worth-it-california">Are solar panels worth it in California?</Link>{' '}
            works through it, and <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">cash vs loan vs lease vs PPA</Link>{' '}
            compares the ways to pay. After installation, <Link href="/solar-panel-maintenance-california">our maintenance guide</Link>{' '}
            covers what upkeep a system needs.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
