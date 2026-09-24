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

const PATH = '/blog/rooftop-solar-credits-ruling-california';
const UPDATED = '2026-09-23';
const HUB = { label: 'NEM 3.0 and solar billing', href: '/blog/nem-2-vs-nem-3-california' };
const metaTitle = 'California Rooftop Solar Credits Ruling: What It Means';
const metaDescription =
  'California courts upheld the CPUC’s net billing (NEM 3.0) decision: the 2025 Supreme Court ruling, the 2026 appeal, and what it means for your solar credits.';

const SC_2025 = 'https://www.courts.ca.gov/opinions/archive/S283614.PDF';
const COA_2026 = 'https://www.courts.ca.gov/opinions/archive/A167721A.PDF';
const COA_2023 = 'https://www.courts.ca.gov/opinions/archive/A167721M.PDF';
const SC_DOCKET = 'https://supreme.courts.ca.gov/case/s283614-center-biological-diversity-v-public-utilities-commission-pacific-gas-and-electric';
const CPUC_NBT = 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing';

const sources: Source[] = [
  { label: 'California Supreme Court: Center for Biological Diversity, Inc. v. Public Utilities Commission, S283614, opinion filed Aug. 7, 2025', url: SC_2025 },
  { label: 'California Court of Appeal, First District, Division Three: same case, A167721, opinion filed Mar. 9, 2026 (certified for publication)', url: COA_2026 },
  { label: 'California Court of Appeal: A167721, opinion filed Dec. 20, 2023, modified Dec. 21, 2023', url: COA_2023 },
  { label: 'Supreme Court of California: S283614 case page', url: SC_DOCKET },
  { label: 'CPUC: Net energy metering and net billing', url: CPUC_NBT },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Supreme Court ruling',
    value: 'Aug. 7, 2025',
    note: 'All seven justices; sent the case back over the standard of review.',
    source: { publisher: 'California Supreme Court', date: UPDATED, url: SC_2025 },
  },
  {
    label: 'Court of Appeal on remand',
    value: 'Affirmed, Mar. 9, 2026',
    note: 'Upheld CPUC Decision 22-12-056, the net billing tariff.',
    source: { publisher: 'Court of Appeal', date: UPDATED, url: COA_2026 },
  },
  {
    label: 'Net billing applies to',
    value: 'Applications since Apr. 15, 2023',
    note: 'New interconnections with PG&E, SCE and SDG&E.',
    source: { publisher: 'CPUC', date: UPDATED, url: CPUC_NBT },
  },
  {
    label: 'NEM 2.0 customers keep it',
    value: '20 years',
    note: 'From the date they interconnected, under D.14-03-041.',
    source: { publisher: 'CPUC', date: UPDATED, url: CPUC_NBT },
  },
];

const faqs = [
  {
    question: 'What did the California Supreme Court rule about rooftop solar?',
    answer:
      'On August 7, 2025, in Center for Biological Diversity v. Public Utilities Commission, the Supreme Court held that courts should no longer give the CPUC’s reading of the Public Utilities Code the highly deferential treatment the Court of Appeal had used, reversed that court’s judgment and sent the case back. It said it was not deciding whether the net billing tariff was lawful. The opinion was written by Justice Kruger and joined by the other six justices.',
  },
  {
    question: 'Did the courts overturn NEM 3.0?',
    answer:
      'No. On March 9, 2026, the Court of Appeal applied the stricter standard the Supreme Court required and affirmed the CPUC’s 2022 net billing decision again, concluding the Commission did not err or abuse its discretion when it adopted the successor tariff.',
  },
  {
    question: 'Does the ruling change my NEM 2.0 plan?',
    answer:
      'No. The case was about the tariff for new customers. The CPUC says customers on NEM 2.0 may stay on it for 20 years from the date they interconnected, or switch to the current tariff.',
  },
  {
    question: 'Can the CPUC still change solar export credits?',
    answer:
      'Yes. The Court of Appeal noted that nothing in the statute it reviewed stops the Commission from revising the tariff in the future on new or additional evidence about its benefits and costs. Rule changes happen through CPUC proceedings, which is where to watch for the next change.',
  },
  {
    question: 'Is the case over?',
    answer:
      'As of September 23, 2026, the Court of Appeal’s March 9, 2026 decision is the latest ruling we have confirmed on the California courts’ own website. The Supreme Court’s online docket is the place to check for any later petition.',
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

export default function RooftopSolarCreditsRuling() {
  return (
    <PublicLayout breadcrumbLabel="Rooftop solar credits ruling" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="California’s rooftop solar credits ruling, explained for homeowners"
        url="https://ratereliefca.com/blog/rooftop-solar-credits-ruling-california"
        datePublished="2026-09-23"
        dateModified="2026-09-23"
        description="What the California Supreme Court decided in August 2025 about the CPUC's net billing decision, what the Court of Appeal decided on remand in March 2026, and what it means for solar export credits."
      />
      <Header />
      <GuideShell
        title="California’s rooftop solar credits ruling, explained for homeowners"
        eyebrow="NEM 3.0 and solar billing"
        crumbs={[HUB]}
        crumbLabel="Rooftop solar credits ruling"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="nem"
        path={PATH}
        quickCheckTopic="California net billing and solar credits"
        leadCount={2}
        inquiry={<SolarInquiry topic="California net billing and solar credits" />}
      >
        <p>
          California’s courts have upheld the CPUC’s 2022 net billing decision, the rule that lowered credits for
          power that new rooftop systems send to the grid. On August 7, 2025, the state Supreme Court ruled
          unanimously that a lower court had reviewed it too deferentially and sent the case back. On March 9,
          2026, the Court of Appeal reviewed it again and affirmed. Existing NEM 2.0 customers keep their plans.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
          This page summarizes published court opinions and CPUC material; it is general information, not legal
          advice.
        </p>

        <section>
          <h2>The case in one timeline</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Timeline of the California net billing court case</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Date</th>
                  <th className={th}>What happened</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><th scope="row" className={th}>2022</th><td className={td}>The CPUC adopts Decision 22-12-056, the successor to net energy metering, known as the net billing tariff or NEM 3.0.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>April 15, 2023</th><td className={td}>New interconnection applicants with PG&amp;E, SCE and SDG&amp;E start taking service on net billing.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>December 20, 2023</th><td className={td}>The Court of Appeal (First District, Division Three) affirms the CPUC decision.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>April 10, 2024</th><td className={td}>The California Supreme Court grants review.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>August 7, 2025</th><td className={td}>The Supreme Court reverses on the standard of review and sends the case back.</td></tr>
                <tr className="border-t"><th scope="row" className={th}>March 9, 2026</th><td className={td}>The Court of Appeal applies the new standard and affirms the CPUC decision again.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            Dates from the courts’ published opinions and the CPUC’s net billing page, checked September 2026.
          </p>
          <p>
            The challengers were the Center for Biological Diversity, the Environmental Working Group and the
            Protect Our Communities Foundation. The CPUC was the respondent, with PG&amp;E, Southern California
            Edison and SDG&amp;E as real parties in interest.
          </p>
        </section>

        <section>
          <h2>What the Supreme Court decided, and what it didn’t</h2>
          <p>
            The Supreme Court’s case was about how much courts should defer to the CPUC. For decades, courts
            upheld the Commission’s reading of the Public Utilities Code unless it failed “to bear a reasonable
            relation to statutory purposes and language,” a test from a 1968 case called <em>Greyhound</em>. The
            court held that this “highly deferential approach” no longer applies after the Legislature expanded
            judicial review of most Commission decisions. <Cite publisher="California Supreme Court" href={SC_2025} date={UPDATED} />
          </p>
          <p>
            It was careful about the limits: “We do not decide whether the court’s ultimate conclusion that the
            tariff is consistent with section 2827.1 is correct or incorrect — only that the Court of Appeal erred
            by applying an unduly deferential standard of review to reach that conclusion.” Justice Kruger wrote
            the opinion; Chief Justice Guerrero and Justices Corrigan, Liu, Groban, Jenkins and Evans concurred.
          </p>
          <p>
            That is why headlines in August 2025 read as a win for rooftop solar while the tariff itself stayed in
            place: the court changed how the rule would be reviewed, not the rule.
          </p>
        </section>

        <section>
          <h2>What the Court of Appeal decided in March 2026</h2>
          <p>
            Back in the Court of Appeal, the question was whether the tariff fit Public Utilities Code section
            2827.1, the 2013 law that told the CPUC to replace the original net metering program. The court noted
            the Legislature had directed that the successor tariff be “based on the electrical system costs and
            benefits received by nonparticipating customers” and that it “prevents a cost shift to non-NEM
            customers.” <Cite publisher="Court of Appeal" href={COA_2026} date={UPDATED} />
          </p>
          <p>
            Applying the stricter review, it concluded the Commission “did not fail to proceed in the manner
            required” by the statute “and did not otherwise err or abuse its discretion when it adopted the
            successor tariff,” and affirmed. It also said nothing in the statute precludes the Commission “from
            revising the tariff in the future upon new or additional evidence” about its benefits and costs.
          </p>
        </section>

        <section>
          <h2>What the ruling means for your solar credits</h2>
          <ul>
            <li>
              <strong>On NEM 1.0 or 2.0 already:</strong> nothing changes from this case. The CPUC says NEM 2.0
              customers may stay on it for 20 years from the date they interconnected, or switch to the current
              tariff. <Cite publisher="CPUC" href={CPUC_NBT} date={UPDATED} />
            </li>
            <li>
              <strong>On net billing now:</strong> your plan continues. The CPUC describes a nine-year legacy
              period guaranteeing net billing for the original interconnecting customer.
            </li>
            <li>
              <strong>Buying solar now:</strong> you will be on net billing, where exports are credited at values
              based on the CPUC’s Avoided Cost Calculator, “usually lower than the retail rate.” That makes using your
              own solar power, often with a battery, worth more than exporting it.
            </li>
          </ul>
          <p>
            For the numbers behind those choices, see <Link href="/blog/nem-2-vs-nem-3-california">NEM 2.0 vs NEM 3.0 in California</Link>,{' '}
            <Link href="/blog/nem-3-california-still-worth-it">whether solar still pays under net billing</Link> and{' '}
            <Link href="/battery/battery-payback-nem-3-california">battery payback under NEM 3.0</Link>. If you are
            deciding from scratch, start with <Link href="/blog/are-solar-panels-worth-it-california">whether solar panels are worth it in California</Link>.
          </p>
        </section>

        <section>
          <h2>Rules that often get mixed up with this ruling</h2>
          <ul>
            <li>
              <strong>The income-graduated fixed charge</strong> on utility bills is a separate CPUC proceeding;
              see <Link href="/blog/california-24-dollar-fixed-charge-explained">the new fixed charge on California bills, explained</Link>.
            </li>
            <li>
              <strong>Solar lease transfers when you sell</strong> are covered by a different law; see{' '}
              <Link href="/blog/ab-942-california-solar">AB 942 and solar lease transfer rights</Link>.
            </li>
            <li>
              <strong>Lawsuits against solar companies</strong> are about contracts and sales practices, not export
              credits; see <Link href="/solar-problems/solar-lawsuit-california">solar lawsuits in California</Link>.
            </li>
          </ul>
        </section>

        <section>
          <h2>What rooftop owners should do now</h2>
          <ol>
            <li>Check your interconnection date and billing plan on your utility bill or account.</li>
            <li>If you are on NEM 2.0, note the 20-year end date so a future system change doesn’t surprise you.</li>
            <li>Before adding panels or replacing equipment, ask your utility in writing whether the change affects your plan.</li>
            <li>If you are shopping, compare quotes on self-consumption and battery sizing, not on export credits alone.</li>
          </ol>
          <p>
            Roof work under an existing system can also raise plan questions; see{' '}
            <Link href="/blog/solar-panel-removal-reinstall-cost">removing and reinstalling panels</Link> and{' '}
            <Link href="/blog/is-my-roof-good-for-solar-california">whether your roof is ready for solar</Link>.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
