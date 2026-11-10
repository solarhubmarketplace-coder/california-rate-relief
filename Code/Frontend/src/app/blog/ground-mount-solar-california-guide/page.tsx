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

const PATH = '/blog/ground-mount-solar-california-guide';
// Every statute and agency page below was read on this date.
const UPDATED = '2026-11-09';
const HUB = { label: 'Is my roof good for solar', href: '/blog/is-my-roof-good-for-solar-california' };
const metaTitle = 'Ground-Mount Solar in California: Permits, HOA Rights, Rules';
const metaDescription =
  'Ground-mount solar in California: how permits are decided under Gov. Code 65850.5, what Civil Code 714 says about HOAs, the dig-notice rule, and new-home use.';

const GOV_65850_5 = 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.5';
const CIV_714 = 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=714';
const CIV_801_5 = 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=801.5';
const CEC_PV = 'https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/energy-code-support-center-12';
const CSLB_SOLAR = 'https://www.cslb.ca.gov/solar';
const CSLB_LOOKUP = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';

const sources: Source[] = [
  { label: 'California Government Code section 65850.5 (administrative approval of solar energy systems; dig-notice reference)', url: GOV_65850_5 },
  { label: 'California Civil Code section 714 (covenants that restrict solar energy systems)', url: CIV_714 },
  { label: 'California Civil Code section 801.5 (solar easements; what counts as a solar energy system)', url: CIV_801_5 },
  { label: 'California Energy Commission: 2025 single-family solar PV requirements (where the system may be installed)', url: CEC_PV },
  { label: 'CSLB: Solar Smart, license classes authorized for solar work', url: CSLB_SOLAR },
  { label: 'CSLB: License lookup', url: CSLB_LOOKUP },
];

const keyFacts: KeyFact[] = [
  {
    label: 'Permit standard',
    value: 'Nondiscretionary, health and safety only',
    note: 'A city or county must administratively approve a solar energy system through a building permit or similar permit.',
    source: { publisher: 'Gov. Code 65850.5', date: UPDATED, url: GOV_65850_5 },
  },
  {
    label: 'HOA that blocks solar',
    value: 'Void, but reasonable limits allowed',
    note: 'A restriction that effectively prohibits or restricts a solar energy system is void; reasonable restrictions are not.',
    source: { publisher: 'Civ. Code 714', date: UPDATED, url: CIV_714 },
  },
  {
    label: 'HOA decision clock',
    value: '45 days',
    note: 'A private association that does not deny an application in writing within 45 days is deemed to approve it, unless it asked for more information.',
    source: { publisher: 'Civ. Code 714', date: UPDATED, url: CIV_714 },
  },
  {
    label: 'New homes',
    value: 'Ground-mount counts',
    note: 'The CEC says the Energy Code’s PV requirement can be met by a system ground-mounted on the property.',
    source: { publisher: 'CEC', date: UPDATED, url: CEC_PV },
  },
];

const faqs = [
  {
    question: 'Do I need a permit for ground-mount solar in California?',
    answer:
      'Yes. Under Government Code section 65850.5, a city or county approves solar energy systems through a building permit or similar nondiscretionary permit, and the review is limited to health and safety requirements. The local building department tells you the checklist, and the zoning office tells you where on the lot a structure may sit.',
  },
  {
    question: 'Can my HOA ban ground-mounted solar panels?',
    answer:
      'Civil Code section 714 makes a covenant or governing-document provision that effectively prohibits or restricts a solar energy system void and unenforceable, but allows reasonable restrictions. Section 801.5, which section 714 uses for its definition, counts solar racking and mounting as part of a solar energy system whether it is on the ground or on a building. For a photovoltaic system, a restriction is not reasonable if it adds more than $1,000 to the system cost as originally specified or cuts efficiency by more than 10 percent.',
  },
  {
    question: 'How long does an HOA have to answer a solar application?',
    answer:
      'For a private association, the application must be approved or denied in writing, and if it is not denied in writing within 45 days of receipt it is deemed approved, unless the delay comes from a reasonable request for more information. The 45-day rule is written for private associations; a city or county decides under the permit rules above.',
  },
  {
    question: 'Does ground-mount solar count for the new-home solar requirement?',
    answer:
      'Yes. The California Energy Commission says the PV system for a new single-family home does not have to be on the roof and can be ground-mounted on the property or on a carport on the lot. See our guide to the new-home requirement for the exceptions.',
  },
  {
    question: 'What does the dig-notice rule have to do with a ground mount?',
    answer:
      'Section 65850.5 requires a solar permit application to reference the requirement to notify the regional notification center before excavating, including installing a grounding rod. A ground-mount involves footings and trenching, so the notice applies in practice before anything is dug.',
  },
  {
    question: 'How much does ground-mount solar cost?',
    answer:
      'This page does not publish a ground-mount price. We did not find a California agency or research lab figure that separates ground-mount from roof-mount for a typical home, and a number from a sales page cannot account for your soil, trench length and footing design. Ask for itemized quotes, and see our pages on what solar costs in California for the benchmarks we do cite.',
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
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const th = 'p-3 text-left align-top font-semibold';
const td = 'p-3 align-top';

export default function GroundMountSolarCaliforniaGuide() {
  return (
    <PublicLayout breadcrumbLabel="Ground-mount solar" breadcrumbParent={HUB}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Ground-mount solar in California: permits, HOA rights and the rules to check first"
        url="https://ratereliefca.com/blog/ground-mount-solar-california-guide"
        dateModified={UPDATED}
        description="How a California city or county decides a ground-mount solar permit, what Civil Code 714 says about HOAs, the dig-notice requirement, and whether a ground mount counts for the new-home solar rule."
      />
      <Header />
      <GuideShell
        title="Ground-mount solar in California: permits, HOA rights and the rules to check first"
        eyebrow="Roofs, solar roofs and carports"
        crumbs={[HUB]}
        crumbLabel="Ground-mount solar"
        updated={UPDATED}
        sources={sources}
        keyFacts={keyFacts}
        faqs={faqs}
        hub="roof_structures"
        path={PATH}
        quickCheckTopic="Ground-mount solar review"
        leadCount={2}
        inquiry={<SolarInquiry topic="Ground-mount solar review" />}
      >
        <p>
          A ground-mount solar system puts the panels on a frame set into the ground instead of on your roof. In
          California it needs a permit like any other solar system, a city or county must decide it on health and safety
          grounds rather than taste, and an HOA cannot simply ban it. Where on your lot it can sit is a local zoning
          question that no statewide page can answer for you.
        </p>
        <p className="text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor, we do not design or install
          ground mounts, and this page is general information, not legal advice. Statutes were read on
          November 9, 2026.
        </p>

        <section>
          <h2>How the permit is decided</h2>
          <p>
            Government Code section 65850.5 says a city or county must administratively approve applications to install
            solar energy systems through the issuance of a building permit or similar nondiscretionary permit. Review is
            limited to the building official’s check of whether the system meets health and safety requirements of local,
            state and federal law, and local requirements are limited to standards necessary to prevent a specific,
            adverse impact on public health or safety.{' '}
            <Cite publisher="Gov. Code 65850.5" href={GOV_65850_5} date={UPDATED} />
          </p>
          <p>
            If the building official finds, on substantial evidence, that the system could have a specific adverse impact
            on health or safety, the city or county may require a use permit. It may not deny that use permit unless it
            makes written findings, based on substantial evidence, of a specific adverse impact for which there is no
            feasible way to mitigate or avoid it. The building official’s decision can be appealed to the planning
            commission. Any conditions must be designed to mitigate the specific impact at the lowest cost possible.
          </p>
          <p>
            The section’s streamlined-permit checklist requirement, in subdivision (g), is written for small residential{' '}
            <em>rooftop</em> systems. A ground mount is a structure on the lot, so ask your building department which
            checklist it applies and whether it asks for a site plan, a structural drawing for the footings, or an
            electrical single-line diagram.
          </p>
        </section>

        <section>
          <h2>Call before you dig</h2>
          <p>
            A roof system rarely needs an excavation. A ground mount usually does: footings, a trench for the conduit
            run to the electrical panel, and often a grounding rod. Section 65850.5 requires every solar permit
            application to include a reference to the requirement to notify the appropriate regional notification center
            of the intent to excavate before digging, including installing a grounding rod. A city or county is not liable
            for damages from a person’s failure to notify.{' '}
            <Cite publisher="Gov. Code 65850.5" href={GOV_65850_5} date={UPDATED} /> Ask your contractor, in
            writing, who files the notice and when.
          </p>
        </section>

        <section>
          <h2>Setbacks, height and the lot</h2>
          <p>
            Zoning decides where a structure can stand. Setbacks from property lines, height limits, easements, septic
            fields and any fire-hazard overlay are local, and they differ from one city and county to the next, so this
            page gives no numbers. The planning or zoning counter can tell you the rules for an accessory structure on
            your parcel, and the answer decides whether the array fits where the sun is best. Do the shade check before
            you pay for drawings; our{' '}
            <Link href="/blog/is-my-roof-good-for-solar-california">roof suitability guide</Link> explains how shade and
            direction affect output, and the same logic applies to a frame on the ground.
          </p>
        </section>

        <section>
          <h2>If you are in an HOA</h2>
          <p>
            Civil Code section 714 makes a covenant, restriction or governing-document provision that effectively
            prohibits or restricts the installation or use of a solar energy system void and unenforceable. It does not
            apply to reasonable restrictions: those that do not significantly increase the cost of the system or
            significantly decrease its efficiency, or that allow an alternative system of comparable cost and
            efficiency. For a photovoltaic system, “significantly” means more than $1,000 over the system cost as
            originally specified, or a loss of more than 10 percent of efficiency.{' '}
            <Cite publisher="Civ. Code 714" href={CIV_714} date={UPDATED} />
          </p>
          <p>
            The definition of a solar energy system comes from Civil Code section 801.5, which includes solar racking,
            solar mounting and elevated solar support structures, “regardless of whether the feature is on the ground or
            on a building.” <Cite publisher="Civ. Code 801.5" href={CIV_801_5} date={UPDATED} /> That language is why a
            ground-mounted frame is inside the HOA statute and not a loophole.
          </p>
          <p>
            Process matters too. An application for approval is treated like an architectural modification request and
            cannot be willfully avoided or delayed. A private association must approve or deny in writing, and if it does
            not deny in writing within 45 days of receipt, the application is deemed approved unless the delay came from
            a reasonable request for more information. A willful violation by an entity other than a public entity can carry
            actual damages and a civil penalty of up to $1,000, and the prevailing party in an enforcement action is
            awarded attorney’s fees. Whether a particular rule in your governing documents is
            “reasonable” is a legal question; an attorney should read your documents.
          </p>
        </section>

        <section>
          <h2>Ground, roof or carport: what the rules say about each</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">How California rules treat roof, ground and carport solar, as read November 9, 2026</caption>
              <thead className="bg-muted">
                <tr>
                  <th className={th}>Question</th>
                  <th className={th}>Roof</th>
                  <th className={th}>Ground mount</th>
                  <th className={th}>Carport</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className={th}>Counts as a “solar energy system” for the HOA statute (Civ. Code 801.5)</th>
                  <td className={td}>Yes</td>
                  <td className={td}>Yes, racking “on the ground” is named</td>
                  <td className={td}>Yes, solar carports are named</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Permit standard (Gov. Code 65850.5)</th>
                  <td className={td}>Streamlined checklist required for small residential rooftop systems (subdivision (g))</td>
                  <td className={td}>Ask which local checklist applies</td>
                  <td className={td}>Ask which local checklist applies</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Can meet the new-home PV requirement (CEC)</th>
                  <td className={td}>Yes</td>
                  <td className={td}>Yes, on the property</td>
                  <td className={td}>Yes, on a carport on the lot</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className={th}>Excavation notice</th>
                  <td className={td}>Reference required on every solar application</td>
                  <td className={td}>Reference required; footings, trenching and grounding rods involve digging</td>
                  <td className={td}>Reference required; footings involve digging</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            For the carport version, see <Link href="/blog/solar-carport-california-guide">our solar carport guide</Link>.
          </p>
        </section>

        <section>
          <h2>If you are building a new home</h2>
          <p>
            The California Energy Commission says the solar PV system required for a newly constructed single-family home
            does not have to be on the roof: it can be ground-mounted on the property or mounted atop a carport on the
            lot. <Cite publisher="CEC" href={CEC_PV} date={UPDATED} /> The exceptions, the sizing rule and the battery
            option are in our guide to{' '}
            <Link href="/solar-problems/is-solar-required-on-new-homes-california">whether solar is required on new homes</Link>.
          </p>
        </section>

        <section>
          <h2>What the written quote should say</h2>
          <ul>
            <li>The contractor’s license number, and the license class that covers the solar scope. CSLB lists C-46 solar and C-10 electrical among the classes authorized for solar work, and its advice is not to use a contractor who is not licensed to do solar work. <Cite publisher="CSLB" href={CSLB_SOLAR} date={UPDATED} /> Check the number on the <a href={CSLB_LOOKUP} target="_blank" rel="noopener noreferrer">CSLB lookup</a>.</li>
            <li>The footing or foundation type, and who engineers it.</li>
            <li>The length of the trench or conduit run from the array to the electrical panel, as its own line.</li>
            <li>Who files the excavation notice and who pulls the building permit.</li>
            <li>What happens to the quote if the setback rules or soil conditions change the layout.</li>
            <li>Equipment models and counts, the same as on any solar proposal.</li>
            <li>Warranty on the structure and on the work, not only on the panels.</li>
          </ul>
          <p>
            Compare at least three itemized quotes. Our page on{' '}
            <Link href="/blog/solar-system-quotes-california">comparing solar quotes line by line</Link> shows how.
          </p>
        </section>
      </GuideShell>
      <Footer />
    </PublicLayout>
  );
}
