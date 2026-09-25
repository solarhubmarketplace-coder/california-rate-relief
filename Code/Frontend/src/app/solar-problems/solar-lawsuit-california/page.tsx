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

const PATH = '/solar-problems/solar-lawsuit-california';
const UPDATED = '2026-09-23';
const HUB = { label: 'Solar problems and scams', href: '/solar-problems' };
const metaTitle = 'Solar Lawsuits in California: Cases, Settlements, Options';
const metaDescription =
  'The kinds of solar lawsuits filed in California, the 2026 Vivint Solar judgment, the NEM 3.0 court fight, and how to check a case or bring your own.';

const SFDA = 'https://sfdistrictattorney.org/district-attorney-brooke-jenkins-announces-settlement-with-vivint-solar/';
const CSLB_SOLAR = 'https://www.cslb.ca.gov/solar';
const CSLB_LOOKUP = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
const CSLB_LICENSED = 'https://www.cslb.ca.gov/Consumers/Filing_A_Complaint/Complaint_Against_Licensed_Contractors.aspx';
const COA_2026 = 'https://www.courts.ca.gov/opinions/archive/A167721A.PDF';
const SC_2025 = 'https://www.courts.ca.gov/opinions/archive/S283614.PDF';
const COURTS_SMALL = 'https://selfhelp.courts.ca.gov/small-claims-california';
const LEG = (code: string, sec: string) =>
  `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=${code}&sectionNum=${sec}`;
const FTC = 'https://consumer.ftc.gov/articles/solar-power-your-home';

const sources: Source[] = [
  { label: 'San Francisco District Attorney: Settlement with Vivint Solar (Feb. 19, 2026)', url: SFDA },
  { label: 'CSLB: Solar Smart, solar complaint statistics FY 2022/2023', url: CSLB_SOLAR },
  { label: 'CSLB: License lookup, including complaint disclosure', url: CSLB_LOOKUP },
  { label: 'CSLB: Complaint process against licensed contractors', url: CSLB_LICENSED },
  { label: 'California Supreme Court: Center for Biological Diversity v. Public Utilities Commission, S283614 (Aug. 7, 2025)', url: SC_2025 },
  { label: 'California Court of Appeal: Center for Biological Diversity v. Public Utilities Commission, A167721 (Mar. 9, 2026)', url: COA_2026 },
  { label: 'California Courts self-help: Small claims in California', url: COURTS_SMALL },
  { label: 'Business and Professions Code § 7160 (fraud inducing a home improvement contract)', url: LEG('BPC', '7160') },
  { label: 'Business and Professions Code § 7031 (unlicensed contractors)', url: LEG('BPC', '7031') },
  { label: 'Business and Professions Code § 6125 (who may practice law)', url: LEG('BPC', '6125') },
  { label: 'Federal Trade Commission: Solar power for your home (updated Dec. 9, 2025)', url: FTC },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Solar complaints to CSLB',
    value: '2,263 in FY 2022/23',
    note: '1,232 of the investigated complaints were workmanship or abandonment.',
    source: { publisher: 'CSLB', date: UPDATED, url: CSLB_SOLAR },
  },
  {
    label: 'Vivint Solar judgment',
    value: '$4.3 million',
    note: '$3 million restitution fund plus $1.3 million penalties and costs; no admission of liability.',
    source: { publisher: 'SF District Attorney', date: UPDATED, url: SFDA },
  },
  {
    label: 'NEM 3.0 court challenge',
    value: 'Upheld Mar. 9, 2026',
    note: 'Court of Appeal affirmed the CPUC’s net billing decision on remand.',
    source: { publisher: 'Court of Appeal', date: UPDATED, url: COA_2026 },
  },
  {
    label: 'Sue on your own, no lawyer',
    value: 'Up to $12,500',
    note: 'Small claims limit for an individual in California.',
    source: { publisher: 'California Courts', date: UPDATED, url: COURTS_SMALL },
  },
];

const faqs = [
  {
    question: 'Is there a class action lawsuit against solar companies in California?',
    answer:
      'Class actions and settlements involving solar companies come and go, and a claim you see online may be old, settled or not real. Check any notice against the court’s own records using the case number, and read how to file a claim on the court-approved administrator’s site rather than through a link from a stranger. If you were harmed, you can also bring your own case or file a CSLB complaint.',
  },
  {
    question: 'What was the Vivint Solar settlement in California?',
    answer:
      'In February 2026, the district attorneys of San Francisco, Riverside, San Diego, Alameda and Fresno counties announced a stipulated judgment in Riverside Superior Court (case CVRI2506720) requiring Vivint Solar to pay $1.3 million in civil penalties and costs and fund $3 million in restitution. The complaint alleged misleading claims about ties to utilities, savings and cancellation rights in power purchase agreement sales. Vivint Solar agreed without admitting liability.',
  },
  {
    question: 'Who can claim money from the Vivint Solar settlement?',
    answer:
      'According to the San Francisco District Attorney’s announcement, consumers harmed by systems sold between August 3, 2016 and October 8, 2020 can submit claims, and Vivint Solar and Sunrun are to post notification details and claim procedures on their websites.',
  },
  {
    question: 'What did the California Supreme Court decide about rooftop solar?',
    answer:
      'On August 7, 2025, the California Supreme Court held that the Court of Appeal had been too deferential in reviewing the CPUC’s net billing decision and sent the case back, without deciding whether the tariff was lawful. On March 9, 2026, the Court of Appeal applied the stricter review and affirmed the CPUC decision again.',
  },
  {
    question: 'Can I get my money back through a solar lawsuit?',
    answer:
      'Sometimes, but nothing guarantees it. A public prosecutor’s judgment may create a restitution fund; your own case may win damages; and CSLB says that while it tries to get restitution, it cannot guarantee you will get any money back. For losses of $12,500 or less, small claims court is the lowest-cost route. This is general information, not legal advice.',
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
    publishedTime: `${UPDATED}T00:00:00Z`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const th = 'p-3 text-left align-top font-semibold';
const td = 'p-3 align-top';

export default function SolarLawsuitCalifornia() {
  return (
    <PublicLayout breadcrumbLabel="Solar lawsuits in California" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar lawsuits in California: cases, settlements and your options"
        url="https://ratereliefca.com/solar-problems/solar-lawsuit-california"
        datePublished="2026-09-23"
        dateModified="2026-09-23"
        description="General information on the three kinds of solar lawsuits in California, the 2026 Vivint Solar judgment, the NEM 3.0 court case, how to check a case, and how homeowners bring their own claims."
      />
      <Header />
      <GuideShell
        title="Solar lawsuits in California: cases, settlements and your options"
        eyebrow="Solar problems"
        crumbs={[HUB]}
        crumbLabel="Solar lawsuits in California"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="rules_permits"
        path={PATH}
        quickCheckTopic={null}
        leadCount={2}
        inquiry={<SolarInquiry topic="Solar contract and provider review" />}
      >
        <p>
          Solar lawsuits in California fall into three groups: homeowners suing a contractor or finance company
          over their own contract, public prosecutors suing a company over how it sells, and court challenges to
          state rules such as net billing. Knowing which kind you are reading about tells you whether you can
          claim money, need to bring your own case, or can only follow the news.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
          This page is general information, not legal advice. We are not a law firm, and we describe cases only
          as the courts and agencies involved describe them; allegations are not findings.
        </p>

        <section>
          <h2>The three kinds of solar lawsuit</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Types of solar lawsuits in California</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Type</th>
                  <th className={th}>Who brings it</th>
                  <th className={th}>What it can mean for you</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className={th}>Individual or group homeowner suits</th>
                  <td className={td}>You, with or without a lawyer, or a group through a class action</td>
                  <td className={td}>Damages for your own contract, if you win or settle</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Public enforcement</th>
                  <td className={td}>District attorneys, the Attorney General, or CSLB through its license process</td>
                  <td className={td}>Penalties, orders to change practices, sometimes a restitution fund you can claim from</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Policy challenges</th>
                  <td className={td}>Advocacy groups, utilities or agencies</td>
                  <td className={td}>Changes to the rules for everyone, such as how solar exports are credited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Public enforcement: the 2026 Vivint Solar judgment</h2>
          <p>
            On February 19, 2026, the district attorneys of San Francisco, Riverside, San Diego, Alameda and
            Fresno counties announced a stipulated judgment against Vivint Solar, entered in Riverside Superior
            Court as case CVRI2506720. According to the San Francisco District Attorney, the complaint charged
            deceptive practices in selling power purchase agreements: mischaracterizing ties to local utility
            companies, overstating energy and cost savings, and misrepresenting contract cancellation rights.{' '}
            <Cite publisher="SF District Attorney" href={SFDA} date={UPDATED} />
          </p>
          <p>
            “Without admitting liability,” Vivint Solar agreed to pay $1,300,000 in civil penalties and
            investigative costs and $3,000,000 into a restitution fund. The announcement says consumers harmed by
            systems sold between August 3, 2016 and October 8, 2020 can submit claims, with notice and claim
            details to be provided by Vivint Solar and Sunrun on their websites. The judgment also bars pulling
            credit reports without written consent, creating accounts without approval, failing to provide
            contract translations and enforcing unlawful liquidated-damages clauses.
          </p>
          <p>
            If you had a Vivint Solar PPA in that period, look for the official claim instructions from those
            sources and keep your contract and bills handy. The practices named in the complaint are the same
            ones covered in <Link href="/solar-problems/solar-sales-tactics-california">how solar sales tactics work</Link>{' '}
            and <Link href="/solar-problems/solar-door-to-door-sales-california">your rights with door-to-door solar sales</Link>.
          </p>
        </section>

        <section>
          <h2>What homeowners complain about most</h2>
          <p>
            CSLB publishes solar complaint counts on its Solar Smart page. For fiscal year 2022/2023 it received
            2,263 solar complaints and investigated 1,625. Of those investigated, 1,232 involved workmanship or
            abandonment, 323 misrepresentation or fraud, 33 unlicensed contractors, 19 permit violations and 11
            unregistered salespeople. <Cite publisher="CSLB" href={CSLB_SOLAR} date={UPDATED} /> Most disputes,
            in other words, are about work that was done badly or not finished, which is usually a contract claim
            against a specific company rather than something a class action or news story will fix.
          </p>
        </section>

        <section>
          <h2>The net billing (NEM 3.0) lawsuit</h2>
          <p>
            The best-known solar case in California is not about a company at all. Environmental groups
            challenged the CPUC’s 2022 decision (D.22-12-056) that created the net billing tariff. On August
            7, 2025, the California Supreme Court, in an opinion by Justice Kruger joined by the other six
            justices, held that the Court of Appeal had applied an “unduly deferential standard of review” and
            sent the case back, adding that it did not decide whether the tariff itself was lawful.{' '}
            <Cite publisher="California Supreme Court" href={SC_2025} date={UPDATED} /> On March 9, 2026, the
            Court of Appeal applied the stricter review and wrote, “we again affirm the Decision.”{' '}
            <Cite publisher="Court of Appeal" href={COA_2026} date={UPDATED} />
          </p>
          <p>
            For homeowners, that means the net billing rules still apply to new systems. The details, including
            what it means if you are on an older plan, are in{' '}
            <Link href="/blog/rooftop-solar-credits-ruling-california">the California rooftop solar credits ruling explained</Link>{' '}
            and <Link href="/blog/nem-2-vs-nem-3-california">NEM 2.0 vs NEM 3.0</Link>.
          </p>
        </section>

        <section>
          <h2>How to check a lawsuit or settlement notice</h2>
          <ul>
            <li><strong>Find the court and case number.</strong> A real case has both; look it up on that court’s own website.</li>
            <li><strong>Check the source.</strong> Prosecutors announce judgments on their own sites; a settlement administrator is appointed by the court.</li>
            <li><strong>Don’t pay to learn about a case.</strong> Be wary of anyone who wants a fee or your account logins to “add you” to a settlement.</li>
            <li><strong>Check the company’s license.</strong> The <a href={CSLB_LOOKUP} target="_blank" rel="noopener noreferrer">CSLB lookup</a> lets you verify a contractor’s license “including complaint disclosure.”</li>
            <li><strong>Check who is advising you.</strong> Under Business and Professions Code § 6125, only an active licensee of the State Bar may practice law in California.</li>
          </ul>
          <p>
            The Federal Trade Commission’s solar guide gives the same basic warning for any solar deal: never deal
            with a company that “pressures you for a quick decision” or “asks you to pay in cash,” and report
            problems to ReportFraud.ftc.gov or your state attorney general.{' '}
            <Cite publisher="FTC" href={FTC} date={UPDATED} />
          </p>
        </section>

        <section>
          <h2>Bringing your own case</h2>
          <p>
            Most homeowners with a solar dispute are not part of any class action; their path is their own claim.
            The usual order is a written demand, a CSLB complaint, then small claims or a lawyer depending on the
            amount. In small claims, an individual can sue for up to $12,500 without a lawyer.{' '}
            <Cite publisher="California Courts" href={COURTS_SMALL} date={UPDATED} /> A few laws are especially
            relevant to solar:
          </p>
          <ul>
            <li>
              <strong>Business and Professions Code § 7160</strong> lets someone induced into a home improvement
              contract by knowingly false or fraudulent statements recover damages, a $500 penalty and reasonable
              attorney’s fees.
            </li>
            <li>
              <strong>Section 7031(b)</strong> lets a person who used an unlicensed contractor sue to recover all
              compensation paid.
            </li>
            <li>
              <strong>CSLB discipline</strong> can include citations with civil penalties of up to $30,000 and
              orders to repair or pay, though CSLB “cannot guarantee that you will get any money back.”{' '}
              <Cite publisher="CSLB" href={CSLB_LICENSED} date={UPDATED} />
            </li>
          </ul>
          <p>
            When to bring in a lawyer, how to find one and what the fee agreement must say are covered in{' '}
            <Link href="/solar-problems/attorney-to-sue-solar-company-california">finding an attorney to sue a solar company</Link>.
            If a contractor took a deposit and disappeared, start with{' '}
            <Link href="/solar-problems/solar-company-took-my-money-california">what to do when a solar contractor took your money</Link>.
          </p>
        </section>

        <section>
          <h2>Avoiding the next dispute</h2>
          <p>
            Nearly every case above started with a contract the homeowner didn’t fully understand. Before
            signing anything new, read <Link href="/solar-problems/solar-contract-red-flags-california">the contract red flags</Link>,
            check <Link href="/solar-problems/solar-dealer-fees-explained">how dealer fees inflate a loan</Link>, and{' '}
            <Link href="/solar-installers/how-to-verify-a-solar-contractor-california">verify the contractor’s license</Link>.
            If a lease or PPA is on the table, compare it with a purchase using{' '}
            <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">cash, loan, lease or PPA</Link>.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
