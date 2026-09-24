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

const PATH = '/solar-problems/attorney-to-sue-solar-company-california';
const UPDATED = '2026-09-23';
const HUB = { label: 'Solar problems and scams', href: '/solar-problems' };
const metaTitle = 'Attorney to Sue a Solar Company in California: A Guide';
const metaDescription =
  'When a California solar dispute needs a lawyer, how to find and check one through the State Bar, what fee agreements must say, and deadlines to know.';

const LEG = (code: string, sec: string) =>
  `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=${code}&sectionNum=${sec}`;
const COURTS_SMALL = 'https://selfhelp.courts.ca.gov/small-claims-california';
const CSLB_SMALL = 'https://www.cslb.ca.gov/Consumers/Legal_Issues_For_Consumers/Small_Claims_Court.aspx';
const CSLB_LICENSED = 'https://www.cslb.ca.gov/Consumers/Filing_A_Complaint/Complaint_Against_Licensed_Contractors.aspx';
const CSLB_COMPLAINT = 'https://www.cslb.ca.gov/Consumers/Filing_A_Complaint/';
const BAR_LRS = 'https://www.calbar.ca.gov/public/find-legal-professionals/find-lawyer-referral-service';
const BAR_LRS_WHAT = 'https://www.calbar.ca.gov/public/find-legal-professionals/find-lawyer-referral-service/what-certified-lawyer-referral-service-can-do-you';
const BAR_SEARCH = 'https://apps.calbar.ca.gov/attorney/LicenseeSearch/QuickSearch';
const AG = 'https://oag.ca.gov/contact/consumer-complaint-against-business-or-company';
const CPUC_GUIDE = 'https://www.cpuc.ca.gov/solarguide/';

const sources: Source[] = [
  { label: 'California Courts self-help: Small claims in California', url: COURTS_SMALL },
  { label: 'CSLB: Small claims court (consult an attorney above $12,500)', url: CSLB_SMALL },
  { label: 'CSLB: Complaint process against licensed contractors (mediation, arbitration)', url: CSLB_LICENSED },
  { label: 'CSLB: Filing a complaint (four-year jurisdiction)', url: CSLB_COMPLAINT },
  { label: 'State Bar of California: Find a lawyer referral service', url: BAR_LRS },
  { label: 'State Bar of California: What a certified lawyer referral service can do for you', url: BAR_LRS_WHAT },
  { label: 'Business and Professions Code § 6147 (contingency fee contracts)', url: LEG('BPC', '6147') },
  { label: 'Business and Professions Code § 6148 (other fee contracts)', url: LEG('BPC', '6148') },
  { label: 'Business and Professions Code § 7160 (fraud inducing a home improvement contract)', url: LEG('BPC', '7160') },
  { label: 'Business and Professions Code § 7031 (unlicensed contractors)', url: LEG('BPC', '7031') },
  { label: 'Business and Professions Code §§ 7071.5 and 7071.6 (contractor’s bond)', url: LEG('BPC', '7071.6') },
  { label: 'Civil Code § 1689.7 (home solicitation cancellation)', url: LEG('CIV', '1689.7') },
  { label: 'Code of Civil Procedure §§ 337, 338 and 337.15 (time limits)', url: LEG('CCP', '338') },
  { label: 'California Attorney General: Consumer complaint against a business', url: AG },
  { label: 'CPUC: California Solar Consumer Protection Guide (where to complain)', url: CPUC_GUIDE },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Small claims limit',
    value: '$12,500',
    note: 'For individuals ($6,250 for businesses); lawyers can’t represent you there.',
    source: { publisher: 'California Courts', date: UPDATED, url: COURTS_SMALL },
  },
  {
    label: 'CSLB’s advice above that',
    value: 'Consult an attorney',
    note: 'For damages of more than $12,500.',
    source: { publisher: 'CSLB', date: UPDATED, url: CSLB_SMALL },
  },
  {
    label: 'Contingency fee deal',
    value: 'Must be in writing',
    note: 'Signed by both sides, with the rate and how costs are handled.',
    source: { publisher: 'B&P Code § 6147', date: UPDATED, url: LEG('BPC', '6147') },
  },
  {
    label: 'CSLB complaint window',
    value: '4 years',
    note: 'From the date of the act, licensed or unlicensed contractor.',
    source: { publisher: 'CSLB', date: UPDATED, url: CSLB_COMPLAINT },
  },
];

const faqs = [
  {
    question: 'How do I sue a solar company in California?',
    answer:
      'Start by writing to the company with a clear demand and a deadline, and keep proof it was received. If your losses are $12,500 or less, you can file in small claims court yourself; the filing fee is $30 to $100 and lawyers can’t represent either side. Above that, CSLB advises consulting an attorney, who will file in superior court or, if your contract requires it, start arbitration. This is general information, not legal advice.',
  },
  {
    question: 'How do I find a solar energy lawyer in California?',
    answer:
      'Use a State Bar-certified lawyer referral service for your county. The State Bar says certified services refer you to lawyers in good standing who carry professional liability insurance and are experienced in the relevant area. Then look the lawyer up on the State Bar’s attorney search to confirm the license is active before you sign anything.',
  },
  {
    question: 'Can I sue a solar company for misleading savings claims?',
    answer:
      'Possibly. Business and Professions Code section 7160 lets a person induced into a home improvement contract by knowingly false or fraudulent statements sue for damages, a $500 penalty and reasonable attorney’s fees. Whether your facts fit that section or another law is a question for an attorney, and no one can promise an outcome.',
  },
  {
    question: 'Do solar lawyers work on contingency?',
    answer:
      'Some do and some bill hourly or a flat fee. If a lawyer takes your case on contingency, California law requires a written contract signed by both of you that states the percentage, how costs affect your recovery, and that the fee is not set by law and can be negotiated. Other fee contracts must also be in writing when total costs are expected to exceed $1,000.',
  },
  {
    question: 'What if the solar contractor wasn’t licensed?',
    answer:
      'Business and Professions Code section 7031 says a person who uses an unlicensed contractor may sue to recover all compensation paid for the work, and that an unlicensed contractor generally cannot sue to collect. You can also report unlicensed work to CSLB. A lawyer can tell you whether the exceptions in that section apply to you.',
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

export default function AttorneyToSueSolarCompany() {
  return (
    <PublicLayout breadcrumbLabel="Attorney to sue a solar company" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Finding an attorney to sue a solar company in California"
        url="https://ratereliefca.com/solar-problems/attorney-to-sue-solar-company-california"
        datePublished="2026-09-23"
        dateModified="2026-09-23"
        description="General information on when a California solar dispute calls for a lawyer, how to find and verify one, what attorney fee agreements must say, cheaper routes, and time limits."
      />
      <Header />
      <GuideShell
        title="Finding an attorney to sue a solar company in California"
        eyebrow="Solar problems"
        crumbs={[HUB]}
        crumbLabel="Attorney to sue a solar company"
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
          You may not need a lawyer to get a solar dispute moving, but you should talk to one before a legal
          deadline passes or when the money at stake is more than small claims court can award. As of September 2026,
          California’s limit is $12,500 for an individual. This page is general information, not legal advice, and no
          attorney, agency or website can promise how your case will turn out.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
          We are not a law firm, we do not refer people to attorneys, and reading this page does not create an
          attorney-client relationship with anyone.
        </p>

        <section>
          <h2>Do you need an attorney? Match the problem to the first step</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Common solar disputes and the usual first step</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Your situation</th>
                  <th className={th}>Usual first step</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className={th}>You signed at home in the last few days</th>
                  <td className={td}>Cancel in writing now. Civil Code § 1689.7 gives most buyers until midnight of the third business day, and senior citizens until the fifth. See <Link href="/blog/can-you-cancel-solar-panel-contract-before-installation-california">cancelling before installation</Link>.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>The contractor took money and stopped work</th>
                  <td className={td}>A written demand, then a CSLB complaint. See <Link href="/solar-problems/solar-company-took-my-money-california">when a solar contractor took your money</Link>.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Your losses are $12,500 or less</th>
                  <td className={td}>Small claims court, which you handle yourself.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Losses above $12,500, fraud, a lien on your home, or a loan or lease you didn’t understand</th>
                  <td className={td}>Consult an attorney, as CSLB advises for damages over $12,500.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>The problem is your utility bill or export credits</th>
                  <td className={td}>Your utility, then a CPUC complaint; see <Link href="/solar-problems/true-up-bill-california-explained">the true-up bill explainer</Link>.</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>A PACE assessment on your property tax bill</th>
                  <td className={td}>The CPUC’s guide points PACE financing disputes to the Department of Financial Protection and Innovation.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            CSLB’s own guidance draws the line at money: if you want to recover $12,500 or less, it points you
            to small claims; “If your damages are more than $12,500, you should consult with an attorney.”{' '}
            <Cite publisher="CSLB" href={CSLB_SMALL} date={UPDATED} />
          </p>
        </section>

        <section>
          <h2>Small claims first, if the numbers fit</h2>
          <p>
            According to the California Courts self-help site (checked September 2026), individuals can sue for up to $12,500 in small
            claims (businesses up to $6,250), the filing fee is between $30 and $100, and “you can’t have a
            lawyer” represent you, though you can consult one beforehand. If you are the one who filed and you
            lose, you can’t appeal; the other side can. <Cite publisher="California Courts" href={COURTS_SMALL} date={UPDATED} />
          </p>
          <p>
            CSLB adds a useful lever: if you win a judgment against a licensed contractor and it goes unpaid,
            the board can suspend the contractor’s license under Business and Professions Code § 7071.17.
          </p>
        </section>

        <section>
          <h2>What kind of lawyer handles solar disputes</h2>
          <p>
            There is no separate “solar law” license. The lawyers who take these cases usually practice consumer
            protection, construction and contractor disputes, or real estate (for liens and title problems). If
            the company has filed for bankruptcy, a lawyer who handles creditor claims matters more. Ask each
            lawyer how many contractor or home improvement disputes they have handled and how those cases
            ended.
          </p>
        </section>

        <section>
          <h2>How to find and check a California attorney</h2>
          <p>
            The State Bar certifies lawyer referral services, organized by region. It says a certified service
            will refer you to a lawyer “experienced in the appropriate field of law” who is “a licensee of the
            State Bar in good standing” and is required to carry professional liability insurance, and that
            certified services show their State Bar certification number or mark in their advertising.{' '}
            <Cite publisher="State Bar of California" href={BAR_LRS_WHAT} date={UPDATED} /> Find one for your
            county on the <a href={BAR_LRS} target="_blank" rel="noopener noreferrer">State Bar’s referral service page</a>.
          </p>
          <p>
            Before you sign anything, look the lawyer up on the{' '}
            <a href={BAR_SEARCH} target="_blank" rel="noopener noreferrer">State Bar attorney search</a>. Under
            Business and Professions Code § 6125, “No person shall practice law in California unless the person
            is an active licensee of the State Bar.” That matters because some companies that advertise help
            getting out of solar contracts are not law firms.
          </p>
        </section>

        <section>
          <h2>What an attorney may cost, and what the agreement must say</h2>
          <p>Solar cases are billed in one of three ways: hourly, a flat fee, or a contingency fee taken from any recovery. As of September 2026, the Business and Professions Code sets rules for the paperwork:</p>
          <ul>
            <li>
              <strong>Contingency fees (B&amp;P Code § 6147).</strong> The contract must be in writing, signed by
              both of you, and state the percentage, how costs affect the fee and your recovery, and (unless a
              statutory fee cap applies) that the fee “is not set by law but is negotiable.” An agreement that
              breaks these rules is voidable at your option.
            </li>
            <li>
              <strong>Other fees (B&amp;P Code § 6148).</strong> If total costs are reasonably expected to exceed
              $1,000, the fee contract must be in writing and describe the basis of compensation and the work.
            </li>
          </ul>
          <p>
            Some laws let a winning homeowner recover attorney’s fees from the other side, which can make a
            smaller case worth taking. Business and Professions Code § 7160 lets a person induced into a home
            improvement contract by knowingly false or fraudulent representations recover damages, a $500
            penalty “plus reasonable attorney’s fees.” <Cite publisher="leginfo.legislature.ca.gov" href={LEG('BPC', '7160')} date={UPDATED} />{' '}
            Whether it or any other fee-shifting rule applies is a question for the lawyer.
          </p>
        </section>

        <section>
          <h2>Deadlines: why you shouldn’t wait</h2>
          <p>
            California sets time limits for different kinds of claims, and the right one depends on your facts.
            These are the Code of Civil Procedure sections as published on leginfo.legislature.ca.gov, checked September 2026.
            Some that often come up in solar disputes:
          </p>
          <ul>
            <li>Four years for an action on a written contract (Code of Civil Procedure § 337).</li>
            <li>Three years for fraud or mistake, counted from when you discovered the facts (§ 338(d)).</li>
            <li>Ten years after substantial completion for hidden construction defects (§ 337.15).</li>
            <li>Four years from the act for CSLB to take up a complaint against a contractor.</li>
          </ul>
          <p>
            These are summaries, not advice about your case. Some contracts also require arbitration or set
            their own notice steps, which is one more reason to show a lawyer the whole contract early.
          </p>
        </section>

        <section>
          <h2>Cheaper routes to try alongside a lawyer</h2>
          <ul>
            <li>
              <strong>CSLB mediation and arbitration.</strong> According to CSLB’s complaint process page (checked September 2026), CSLB may mediate. Its arbitration program is
              mandatory for disputes alleging damages of $25,000 or less and voluntary between $25,000 and $50,000,
              but “complaints must meet stringent criteria to qualify.” It also says it “cannot guarantee that you
              will get any money back.” <Cite publisher="CSLB" href={CSLB_LICENSED} date={UPDATED} />
            </li>
            <li>
              <strong>The contractor’s bond.</strong> Every license carries a $25,000 bond under B&amp;P Code §
              7071.6, and homeowners damaged by a license-law violation on their own home are among its
              beneficiaries (§ 7071.5). Claims go to the surety company, and the bond is shared among claimants.
            </li>
            <li>
              <strong>An unlicensed contractor.</strong> Under B&amp;P Code § 7031(b), a person who used an
              unlicensed contractor may sue to recover all compensation paid.
            </li>
            <li>
              <strong>The Attorney General.</strong> You can file a consumer complaint, but the office says it
              “cannot act as my personal lawyer” and may refer the complaint elsewhere.{' '}
              <Cite publisher="oag.ca.gov" href={AG} date={UPDATED} />
            </li>
          </ul>
        </section>

        <section>
          <h2>What to bring to the first consultation</h2>
          <ol>
            <li>The signed contract, the solar disclosure document and every change order.</li>
            <li>Loan, lease, PPA or PACE papers, and any lien or UCC-1 filing notice (see <Link href="/solar-problems/ucc-1-lien-solar-california">what a UCC-1 filing means</Link>).</li>
            <li>The sales proposal and any savings estimate you were shown.</li>
            <li>Payment records, your utility bills before and after, and monitoring data.</li>
            <li>Emails, texts and your written demand letter, with proof of delivery.</li>
            <li>The contractor’s and salesperson’s license numbers and any CSLB complaint number.</li>
            <li>A one-page timeline of what happened and when.</li>
          </ol>
          <p>
            If the contract itself is the problem, <Link href="/solar-problems/solar-contract-red-flags-california">solar contract red flags</Link>{' '}
            and <Link href="/solar-problems/solar-escalator-clause-explained">how escalator clauses compound</Link>{' '}
            help you point the lawyer to the clauses that matter. For suits already filed against solar
            companies, see <Link href="/solar-problems/solar-lawsuit-california">solar lawsuits in California</Link>.
          </p>
        </section>

        <section>
          <h2>Questions to ask before you hire</h2>
          <ul>
            <li>Have you handled contractor or home improvement disputes, and what happened in them?</li>
            <li>Does my contract have an arbitration clause, and how does that change the plan?</li>
            <li>What will this cost if we lose, not just if we win?</li>
            <li>Which deadline applies to me, and when does it run out?</li>
            <li>Should I file a CSLB complaint, a bond claim or small claims first?</li>
          </ul>
          <p>
            If you are still choosing a system rather than fighting one, the cheapest protection is checking the
            contractor first: <Link href="/solar-installers/how-to-verify-a-solar-contractor-california">how to verify a California solar contractor</Link>{' '}
            and <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">how cash, loans, leases and PPAs compare</Link>.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
