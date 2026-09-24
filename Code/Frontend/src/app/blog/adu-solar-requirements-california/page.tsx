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

const PATH = '/blog/adu-solar-requirements-california';
const UPDATED = '2026-09-23';
const HUB = { label: 'Solar rules and consumer protection', href: '/solar-problems' };
const metaTitle = 'ADU Solar Requirements in California: 2025 Energy Code';
const metaDescription =
  'Does your ADU need solar? New detached ADUs do under the 2025 Energy Code; attached ADUs and conversions don’t. Sizing, exceptions and metering, per the CEC.';

const CEC_ADU = 'https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/energy-code-support-center-6/2025';
const CEC_PV = 'https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/energy-code-support-center-12';
const CEC_2025 = 'https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/2025-building-energy-efficiency';
const CPUC_NBT = 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing';
const IRS_25D = 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit';

const sources: Source[] = [
  { label: 'California Energy Commission: General information on ADUs, 2025 Energy Code support center', url: CEC_ADU },
  { label: 'California Energy Commission: 2025 single-family solar PV questions and answers', url: CEC_PV },
  { label: 'California Energy Commission: 2025 Building Energy Efficiency Standards (effective date)', url: CEC_2025 },
  { label: 'CPUC: Net energy metering and net billing', url: CPUC_NBT },
  { label: 'IRS: Residential Clean Energy Credit', url: IRS_25D },
];

const keyFacts: KeyFact[] = [
  {
    label: 'New detached ADU',
    value: 'Solar required',
    note: 'Newly installed PV under Section 150.1(c)14, unless an exception applies.',
    source: { publisher: 'CEC', date: UPDATED, url: CEC_ADU },
  },
  {
    label: 'Attached ADU or conversion',
    value: 'Not required',
    note: 'Treated as an addition or alteration, which the PV rule does not cover.',
    source: { publisher: 'CEC', date: UPDATED, url: CEC_ADU },
  },
  {
    label: 'Too small to require PV',
    value: 'Under 1.8 kWdc',
    note: 'Or less than 80 contiguous sq ft of solar access roof area.',
    source: { publisher: 'CEC', date: UPDATED, url: CEC_PV },
  },
  {
    label: 'Code in force',
    value: '2025 Energy Code',
    note: 'For permit applications on or after January 1, 2026.',
    source: { publisher: 'CEC', date: UPDATED, url: CEC_2025 },
  },
];

const faqs = [
  {
    question: 'Are solar panels required for an ADU in California?',
    answer:
      'Only for a newly constructed detached ADU. The California Energy Commission treats a new, detached ADU as a newly constructed building, which must have newly installed solar PV under Section 150.1(c)14 of the 2025 Energy Code unless an exception applies. Attached ADUs and conversions of existing space are additions or alterations, and the CEC says solar PV is not required for them.',
  },
  {
    question: 'Is solar required on new homes in California?',
    answer:
      'Yes, for newly constructed single-family homes, which the CEC defines to include townhouses and R-3 buildings with two or fewer dwelling units, subject to five exceptions. The CEC says the requirement does not apply to additions or alterations to existing buildings, or to unconditioned buildings.',
  },
  {
    question: 'Can my main house’s existing solar count for the ADU?',
    answer:
      'Not the existing panels. The CEC says an existing PV system cannot meet the requirement for a newly constructed detached ADU. You can add new panels to the existing system, even on the main house, if they are on the same lot, are part of the ADU’s permit, are sized to the Energy Code and your utility allows the expansion.',
  },
  {
    question: 'What is the new solar law in California?',
    answer:
      'People usually mean one of two things. For building rules, the 2025 Energy Code applies to permit applications filed on or after January 1, 2026. For billing, the CPUC’s net billing tariff has applied to PG&E, SCE and SDG&E customers who applied for interconnection since April 15, 2023, crediting exports at values that are usually lower than the price of power you buy.',
  },
  {
    question: 'Does an ADU need a battery?',
    answer:
      'No battery is required, but a new detached ADU must be battery-ready under Section 150.0(s) unless its electric service is 125 amps or less, according to the CEC. Installing a qualifying battery instead satisfies that rule, and a battery of at least 7.5 kWh that meets Joint Appendix JA12 can reduce the required solar size by 25 percent.',
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
    publishedTime: '2026-04-24T00:00:00Z',
    modifiedTime: `${UPDATED}T00:00:00Z`,
    url: `https://ratereliefca.com${PATH}`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const th = 'p-3 text-left align-top font-semibold';
const td = 'p-3 align-top';

export default function ADUSolarCA() {
  return (
    <PublicLayout breadcrumbLabel="ADU solar requirements" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="ADU solar requirements in California under the 2025 Energy Code"
        url="https://ratereliefca.com/blog/adu-solar-requirements-california"
        datePublished="2026-04-24"
        dateModified="2026-09-23"
        description="Which California ADUs must have solar under the 2025 Energy Code, how the required size is set, the five exceptions, whether the main house's panels count, and battery-ready rules."
      />
      <Header />
      <GuideShell
        title="ADU solar requirements in California under the 2025 Energy Code"
        eyebrow="Solar rules and permits"
        crumbs={[HUB]}
        crumbLabel="ADU solar requirements"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="rules_permits"
        path={PATH}
        quickCheckTopic="ADU solar in California"
        leadCount={2}
        inquiry={<SolarInquiry topic="ADU solar in California" />}
      >
        <p>
          A newly built detached ADU needs its own new solar panels under California’s Energy Code unless an
          exception applies. Attached ADUs and conversions of a garage or other existing space count as
          additions or alterations, so they don’t trigger the solar requirement. The 2025 Energy Code applies to
          ADU permit applications filed on or after January 1, 2026, according to the California Energy
          Commission.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
          Your city or county building department makes the final call on any permit; this page summarizes the
          California Energy Commission’s published guidance.
        </p>

        <section>
          <h2>Which ADUs need solar: the answer by project type</h2>
          <p>
            The Energy Commission sorts ADUs by what the project does to the property, not by size. A new,
            detached ADU is a “newly constructed building” and must meet the rules for a new single-family
            home. Attached ADUs and conversions of unconditioned space, such as a garage, are additions.
            Converting space that is already heated or cooled, such as a finished basement or pool house, is an
            alteration. <Cite publisher="CEC" href={CEC_ADU} date={UPDATED} />
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <caption className="sr-only">Solar PV requirement by ADU project type under the 2025 Energy Code</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Project</th>
                  <th className={th}>How the Energy Code treats it</th>
                  <th className={th}>Solar PV required?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><th scope="row" className={th}>New detached ADU</th><td className={td}>Newly constructed building</td><td className={td}>Yes, unless an exception applies</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Attached ADU</th><td className={td}>Addition, Section 150.2(a)</td><td className={td}>No</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Garage or storage conversion (attached or detached)</th><td className={td}>Addition, Section 150.2(a)</td><td className={td}>No</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Basement, pool house or other conditioned-space conversion</th><td className={td}>Alteration, Section 150.2(b)</td><td className={td}>No</td></tr>
                <tr className="border-t"><th scope="row" className={th}>Factory-built ADU</th><td className={td}>Must comply with Title 24, including the Energy Code</td><td className={td}>Treated like the equivalent site-built project</td></tr>
                <tr className="border-t"><th scope="row" className={th}>HUD-labeled manufactured home</th><td className={td}>Title 25, not the Energy Code</td><td className={td}>Not under the Energy Code</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            The CEC is direct about attached units: “No, since attached ADUs are considered additions, solar PV
            is not required.” A junior ADU of up to 500 square feet built inside a new home falls under that
            home’s own requirements. And an ADU that was built without a permit and is being permitted now must
            meet the Energy Code in force when the application is filed.
          </p>
        </section>

        <section>
          <h2>How much solar a new detached ADU needs</h2>
          <p>
            According to the CEC’s 2025 single-family solar PV guidance (checked September 2026), Section 150.1(c)14
            gives two ways to size the system, and the required size is the smaller of the two.{' '}
            <Cite publisher="CEC" href={CEC_PV} date={UPDATED} />
          </p>
          <ul>
            <li>
              <strong>Solar access roof area (SARA):</strong> 18 watts per square foot on steep-sloped roofs, or 14
              watts per square foot on low-sloped roofs. SARA can include carports and other new structures on
              the property, and excludes roof area with less than 70 percent annual solar access.
            </li>
            <li>
              <strong>Equation 150.1-C:</strong> based on the building’s climate zone, conditioned floor area and
              number of dwelling units.
            </li>
          </ul>
          <p>
            The CEC says the minimum is meant to offset roughly the building’s electricity use as if it had gas
            appliances, so choosing a heat pump or electric appliances does not raise the required size. Your ADU
            designer or energy consultant runs this calculation for the permit set; ask to see it rather than
            accepting a round number. For sizing a system to your own usage rather than the code minimum, see{' '}
            <Link href="/blog/how-big-of-a-solar-system-do-i-need-california">how big a solar system you need</Link>.
          </p>
        </section>

        <section>
          <h2>The five exceptions</h2>
          <p>According to the CEC’s 2025 Energy Code guidance, five exceptions remove or reduce the requirement:</p>
          <ol>
            <li>No PV is required if the solar access roof area is less than 80 contiguous square feet.</li>
            <li>No PV is required if the minimum size from Section 150.1(c)14 is less than 1.8 kWdc.</li>
            <li>No PV is required if the enforcement agency finds the system cannot meet ASCE 7-16 snow load requirements.</li>
            <li>Buildings approved by the local planning department before January 1, 2020, with mandatory conditions of approval.</li>
            <li>With a qualifying battery, the size from Equation 150.1-C may be reduced by 25 percent.</li>
          </ol>
          <p>
            Exceptions can’t be stacked: the CEC says the under-1.8 kWdc exception cannot be combined with the
            battery reduction. For steep-sloped roofs, roof area facing between 300 and 90 degrees from true
            north is left out of SARA, which is how a north-facing or heavily shaded ADU roof can end up with no
            requirement at all.
          </p>
        </section>

        <section>
          <h2>Can the main house’s solar cover the ADU?</h2>
          <p>
            Not the panels you already have. “Newly constructed detached ADUs must have a newly installed solar
            PV to meet the prescriptive requirements of Section 150.1(c)14 unless an exception applies,” the CEC
            says. <Cite publisher="CEC" href={CEC_ADU} date={UPDATED} />
          </p>
          <p>
            You can, however, add new panels to the existing system, and they don’t have to sit on the ADU. The
            CEC allows it if the added panels are on the same residential lot, are part of the ADU’s permit
            application, are sized to the Energy Code, and your load-serving entity allows the expansion. The
            Energy Code does not care whether those panels serve the ADU’s meter or the main house’s meter. On a
            shaded ADU lot, putting the new panels on a sunnier main roof can make sense. Check{' '}
            <Link href="/blog/is-my-roof-good-for-solar-california">whether that roof is ready for solar</Link>{' '}
            first.
          </p>
        </section>

        <section>
          <h2>Separate meter or shared meter</h2>
          <p>
            The Energy Code leaves metering to you and your utility. A separate meter makes sense when a tenant
            pays the ADU’s electricity; a shared meter is simpler when the household pays one bill. Either way,
            adding panels or a new interconnection is your utility’s process. For PG&amp;E, SCE and SDG&amp;E
            customers, the CPUC says anyone applying for interconnection since April 15, 2023 takes service on
            the net billing tariff, which credits exports at values “usually lower than the retail rate.”{' '}
            <Cite publisher="CPUC" href={CPUC_NBT} date={UPDATED} /> How that changes the value of ADU solar is
            explained in <Link href="/blog/nem-2-vs-nem-3-california">NEM 2.0 vs NEM 3.0 in California</Link>.
          </p>
        </section>

        <section>
          <h2>Battery-ready rules and optional batteries</h2>
          <p>
            According to the CEC’s 2025 ADU guidance, a new detached ADU must meet the battery-ready
            requirements of Section 150.0(s) unless the ADU’s electric service is 125 amps or less. A 200-amp panel can qualify only if its
            busbar is rated 225 amps and marked. Installing a complete battery system instead also satisfies the
            rule. Separately, a battery of at least 7.5 kWh that meets Joint Appendix JA12 lets you cut the
            Equation 150.1-C solar size by 25 percent. The <Link href="/battery">California home battery guide</Link>{' '}
            covers what a battery costs and does.
          </p>
          <p>
            Two related rules also apply to new detached ADUs: electric-ready wiring if you install gas
            appliances, and, for units of 500 square feet or less, a prescriptive option for an electric water
            heater with point-of-use distribution where a heat pump water heater won’t fit.
          </p>
        </section>

        <section>
          <h2>Cost and the tax credit</h2>
          <p>
            Required solar is part of the ADU’s construction cost. Ask the builder to price it as its own line so
            you can compare it with a separate solar bid. Don’t count on the federal residential credit to offset
            it: the IRS says the Residential Clean Energy Credit “is not available for any property placed in
            service after December 31, 2025.” <Cite publisher="IRS" href={IRS_25D} date={UPDATED} /> How solar
            fits into the rest of the financing is covered in{' '}
            <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">cash, loan, lease or PPA</Link>.
          </p>
        </section>

        <section>
          <h2>Steps that keep an ADU permit moving</h2>
          <ol>
            <li>Tell your ADU designer early whether the unit is detached, attached or a conversion; that decides everything above.</li>
            <li>For a detached unit, get the SARA and Equation 150.1-C numbers shown on the plans, with any exception claimed.</li>
            <li>If you want new panels on the main house instead, ask your utility whether it allows expanding the existing system.</li>
            <li>Decide on metering before the electrical design is final.</li>
            <li>Use licensed contractors and check their licenses; see <Link href="/solar-installers/how-to-verify-a-solar-contractor-california">how to verify a California solar contractor</Link>.</li>
          </ol>
          <p>
            HOA rules can also come up on an ADU roof; <Link href="/blog/hoa-solar-rights-california">California’s HOA solar rights</Link>{' '}
            explains what an association can and can’t require. To compare installers for the work, start with{' '}
            <Link href="/best-solar-companies-california">how to compare solar companies in California</Link>.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
