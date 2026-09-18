// 2026-09-18 new sourced page (claude/ca-green-20260918) built from
// DRAFT_do-solar-panels-increase-property-taxes-california_2026-09-17.md.
// This page states property tax mechanics. It is not tax advice and must not
// read as tax advice. Every assessment statement is attributed to the statute
// or the Board of Equalization.
import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";
import { SolarInquiry } from "@/components/growth/SolarInquiry";

const sources: Source[] = [
  {
    label:
      "California Revenue and Taxation Code § 73 (exclusion, definition, storage, initial-purchaser claim, change of ownership, sunset)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=73.",
  },
  {
    label: "Board of Equalization: Active Solar Energy System Exclusion",
    url: "https://boe.ca.gov/proptaxes/active-solar-energy-system/",
  },
  {
    label:
      "Board of Equalization: Active Solar Energy System Exclusion frequently asked questions",
    url: "https://boe.ca.gov/proptaxes/active-solar-energy-system/frequently-asked-questions.htm",
  },
  {
    label:
      "Board of Equalization Letter to Assessors No. 2024/031 (August 26, 2024)",
    url: "https://www.boe.ca.gov/proptaxes/pdf/lta24031.pdf",
  },
  {
    label: "SB 710 (Stats. 2025, Ch. 328) bill text and Legislative Counsel’s Digest",
    url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB710",
  },
  {
    label: "CPUC: California Solar Consumer Protection Guide",
    url: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide",
  },
];

export const metadata: Metadata = {
  title: "Do Solar Panels Increase Property Taxes in California?",
  description:
    "California law excludes a qualifying active solar energy system from new-construction reassessment. What that covers, what it does not, and when it ends.",
  alternates: {
    canonical: "/blog/do-solar-panels-increase-property-taxes-california",
  },
  openGraph: {
    title: "Do solar panels increase property taxes in California?",
    description:
      "An exclusion from reassessment, not an exemption: what Revenue and Taxation Code section 73 covers and when it ends.",
    type: "article",
    url: "https://ratereliefca.com/blog/do-solar-panels-increase-property-taxes-california",
    modifiedTime: "2026-09-17T00:00:00Z",
  },
};

export default function DoSolarPanelsIncreasePropertyTaxesCalifornia() {
  return (
    <DecisionPage
      title="Do solar panels increase property taxes in California?"
      intro="California has a specific rule for this, and it is narrower than most summaries make it sound. It is an exclusion from reassessment, not an exemption; it is tied to the system, not to who owns it; and it has an end date."
      path="/blog/do-solar-panels-increase-property-taxes-california"
      sources={sources}
      sourceCheckedDate="2026-09-17"
      topic="California solar property tax questions"
      inquiry={
        <SolarInquiry
          variant="decision"
          topic="California solar property tax questions"
          market="CA"
        />
      }
    >
      <section>
        <h2>The short answer, stated the way the statute states it</h2>
        <p>
          Revenue and Taxation Code section 73(a) provides that the term “newly
          constructed,” as used in Article XIII A of the California Constitution,
          “does not include the construction or addition of any active solar
          energy system, as defined in subdivision (b).” (Rev. &amp; Tax. Code
          §73(a), leginfo.legislature.ca.gov, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          The State Board of Equalization states the effect in one sentence:
          “When an active solar energy system is installed, it is not assessed,
          meaning that the existing assessment will not increase.” (BOE, Active
          Solar Energy System Exclusion FAQ, verified 2026-09-17.)
        </p>
      </section>

      <section>
        <h2>Why “exclusion” and not “exemption” is the whole point</h2>
        <p>
          BOE is explicit and the distinction is load-bearing: “The property tax
          incentive for the installation of an active solar energy system is in
          the form of a <strong>new construction exclusion</strong>. It is not an
          exemption. Therefore, the installation of a qualifying solar energy
          system will not result in either an increase or a decrease in the
          assessment of the existing property.” (BOE, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          Read the second half. An exemption would remove value from the roll. An
          exclusion leaves the existing assessment where it was. Nothing about
          section 73 lowers a property tax bill, and any offer that implies it
          does is describing something the statute does not do.
        </p>
      </section>

      <section>
        <h2>How the assessment would otherwise work</h2>
        <p>
          BOE describes the default: “Generally, when something of value is
          physically added to real property, the addition is assessed at current
          market value and this value is added to the existing base year value of
          the real property.” (BOE, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          BOE Letter to Assessors No. 2024/031 also notes that because “newly
          constructed” is defined by Revenue and Taxation Code section 70 to
          include any addition to real property, it includes construction in
          progress. (BOE LTA 2024/031, 26 August 2024, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          So the mechanism being switched off is the addition of new value to the
          base year value. That is why the exclusion shows up as{" "}
          <em>nothing happening</em> on the assessment rather than as a line item
          or a refund.
        </p>
      </section>

      <section>
        <h2>What counts as an “active solar energy system”</h2>
        <p>
          Section 73(b)(1) defines it as a system that “uses solar devices, which
          are thermally isolated from living space or any other area where the
          energy is used, to provide for the collection, storage, or distribution
          of solar energy.” Section 73(b)(3) lists the permitted uses: domestic,
          recreational, therapeutic or service water heating; space conditioning;
          production of electricity; process heat; and solar mechanical energy.
          (Rev. &amp; Tax. Code §73(b), verified 2026-09-17.)
        </p>
        <p className="mt-3">
          BOE’s page lists what it does <strong>not</strong> include: solar
          swimming pool heaters, hot tub heaters, passive energy systems and wind
          energy systems. Section 73(b)(2) is the statutory basis for the first
          two: “‘Active solar energy system’ does not include solar swimming pool
          heaters or hot tub heaters.” (BOE; Rev. &amp; Tax. Code §73(b)(2),
          verified 2026-09-17.)
        </p>
        <p className="mt-3">
          BOE answers the pool question directly in its FAQ: roof-mounted panels
          installed to heat swimming pool water are not an active solar energy
          system for this purpose. (BOE FAQ, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          On storage, section 73(d)(1)(B) provides that “[a]n active solar energy
          system that uses solar energy in the production of electricity includes
          storage devices, power conditioning equipment, transfer equipment, and
          parts related to the functioning of those items,” and that such a system
          “includes only equipment used up to, but not including, the stage of
          conveyance or use of the electricity.” (Rev. &amp; Tax. Code
          §73(d)(1)(B), verified 2026-09-17.) That text describes storage as part
          of a qualifying solar electric system. Standalone storage installed
          without solar is not addressed here — ask the county assessor. Storage
          programs are a separate subject from assessment:{" "}
          <Link className="underline" href="/battery/sgip-battery-rebate-california">
            the SGIP battery category guide
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Leased and PPA systems — what BOE says</h2>
        <p>
          BOE addresses this in its FAQ, in the “Leases and Ownership” section,
          answering a homeowner who financed a system with a capital lease and
          then received a tax bill after the leasing company reported the system
          as machinery and equipment on a Business Property Statement. BOE’s
          answer: “No. The system is excluded whether it is leased or owned.”
        </p>
        <p className="mt-3">
          In the related commercial question BOE states the principle generally:
          “Ownership of the system is not a condition of exclusion. Further, there
          are no specific use requirements for the energy produced by the system to
          qualify for the exclusion.” The same answer notes that a system would be
          classified as a fixture, and therefore real property, if it meets the
          tests of Property Tax Rule 122.5, and would be excluded from the
          definition of new construction if it meets the definitions of section
          73. (BOE FAQ, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          Two practical points follow. First, an assessment appearing on a leased
          or third-party-owned system is the kind of thing BOE tells homeowners to
          raise with the county: the same FAQ directs that “[i]f you think you have
          been assessed for the installation of an active solar energy system, you
          should contact your County Assessor.” Second, a lease or PPA carries its
          own separate costs, which have nothing to do with property tax and are
          not reduced by this exclusion. What third-party ownership actually is:{" "}
          <Link className="underline" href="/blog/solar-ppa-vs-lease-california">
            solar PPA versus lease in California
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>There is no form to file — with one exception</h2>
        <p>
          BOE: “No. There is no form or filing required to receive the exclusion.
          The Assessor usually discovers the installation of the active solar
          energy system by means of the building permit that was taken out.” (BOE
          FAQ, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          The exception is buying a new home from a builder. Section 73(e)(1)
          extends the exclusion to “the initial purchaser who purchased the new
          building from the owner-builder,” but only if the owner-builder did not
          already receive an exclusion for the same system and only if the purchase
          happened before the building became subject to reassessment to the
          owner-builder. Section 73(e)(1)(A) requires the initial purchaser to
          “file a claim with the assessor” and to identify the value attributable
          to the system and the amount of any rebate provided by the CPUC, the
          Energy Commission, an electrical corporation, a local publicly owned
          electric utility or any other state agency. (Rev. &amp; Tax. Code
          §73(e), verified 2026-09-17.)
        </p>
        <p className="mt-3">
          BOE’s FAQ names the form — the “Initial Purchaser Claim for Solar Energy
          System New Construction Exclusion” — says it should be mailed to the
          County Assessor, and says the builder can supply the value of the system
          and any rebates or tax credits the builder received. BOE’s FAQ also gives
          the timing trap: if the builder was fully assessed on the lien date
          following completion, the later purchaser is not eligible, because the
          builder received the exclusion as of the lien date. (BOE FAQ, verified
          2026-09-17.)
        </p>
        <p className="mt-3">
          Section 73(e)(1)(A)(i) adds a claim deadline: a claim “shall be
          considered timely if it is filed within three years of the date of
          purchase,” with a late but otherwise valid claim applied beginning on the
          lien date of the assessment year in which it is filed — and clause (ii)
          states that those provisions “shall become operative on January 1, 2027.”
          (Rev. &amp; Tax. Code §73(e)(1)(A)(i)–(ii), verified 2026-09-17.)
        </p>
      </section>

      <section>
        <h2>The exclusion ends at the next change in ownership</h2>
        <p>
          Section 73(f): “Notwithstanding any other law, the exclusion from new
          construction provided by this section shall remain in effect only until
          there is a subsequent change in ownership.” (Verified 2026-09-17.)
        </p>
        <p className="mt-3">
          Section 73(e)(1)(C) says the same thing about the initial-purchaser
          extension: it “shall remain in effect only until there is a subsequent
          change in ownership of the new building.”
        </p>
        <p className="mt-3">
          A change in ownership is its own reassessment event. The exclusion
          protects the assessment from being increased by the addition of the
          system; it does not travel to the next owner. With a lease in place at
          the sale, see{" "}
          <Link
            className="underline"
            href="/blog/what-happens-to-solar-lease-when-i-sell-california"
          >
            selling a California home with a solar lease or PPA
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>1 January 2027 is a completion deadline</h2>
        <p>
          Section 73(i)(1): “Except as provided in paragraph (2), this section
          shall remain in effect only until January 1, 2027.” Section 73(i)(2)
          preserves what has been granted: systems “that qualify for an exclusion
          under this section prior to January 1, 2027, shall continue to be
          excluded on and after January 1, 2027, until there is a subsequent
          change in ownership.” (Verified 2026-09-17.)
        </p>
        <p className="mt-3">
          The statute also carries an apparently conflicting date in subdivision
          (g): “This section applies to property tax lien dates for the 1999–2000
          fiscal year to the 2025–26 fiscal year, inclusive.” BOE addressed the
          conflict directly in Letter to Assessors No. 2024/031 (26 August 2024),
          maintaining that “the section 73 new construction exclusion applies to
          any active solar energy system new construction in progress or completed
          before January 1, 2027,” and that after the sunset “any solar energy
          system previously excluded as new construction will remain excluded from
          property tax until the property changes ownership.” The same letter
          cautions that this “should not be taken to mean that all construction in
          progress, including those added after January 1, 2026 and before January
          1, 2027, qualify for the exclusion,” because completed new construction
          is assessable on the lien date and on the day of completion. (BOE LTA
          2024/031, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          Section 73 was last amended by SB 710 (Stats. 2025, Ch. 328), approved 3
          October 2025, effective 1 January 2026. The Legislative Counsel’s Digest
          describes it as making “a technical change … by instead making the repeal
          date of January 1, 2027, the date the exclusion becomes inoperative.”
          (SB 710, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          BOE’s own history in LTA 2024/031 records that the sunset has been
          extended repeatedly since 1980. A legislature that has extended a date
          seven times may extend it again. Check the current statute text, not a
          summary — including this one.
        </p>
      </section>

      <section>
        <h2>What to do if you think you were assessed in error</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            Get the assessor’s notice and identify exactly what was added to the
            roll.
          </li>
          <li>
            Contact the county assessor. BOE publishes a listing of county
            assessors and directs homeowners there.
          </li>
          <li>
            If the system is leased and a leasing company reported it as business
            personal property, note BOE’s answer that “[t]he system is excluded
            whether it is leased or owned,” and that the real property appraiser
            should coordinate with the business property auditor-appraiser when a
            permit is issued.
          </li>
          <li>
            If you bought a new home from a builder, ask whether the builder
            already claimed the exclusion and whether the “Initial Purchaser
            Claim” form applies to you.
          </li>
          <li>
            For anything with a tax consequence, use a qualified tax professional
            and the assessor, not a sales estimate.
          </li>
        </ol>
        <p className="mt-3">
          Incentives and assessments belong in different columns —{" "}
          <Link className="underline" href="/blog/california-solar-tax-credit-2026">
            which California program does what
          </Link>{" "}
          — and an exclusion does not remove the costs covered in{" "}
          <Link
            className="underline"
            href="/solar-problems/hidden-costs-of-solar-california"
          >
            the cost lines that arrive after the quote
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>A referral request is optional and separate</h2>
        <p>
          California Rate Relief is a private referral service. A referral request
          does not determine an assessment, establish program eligibility, approve
          financing or promise a price, savings figure or tax outcome. Property tax
          questions belong with the county assessor and your own tax professional.
        </p>
      </section>

      <section>
        <h2>Frequently asked questions</h2>
        <div className="mt-3 space-y-6">
          <div>
            <h3>Will installing solar raise my assessed value in California?</h3>
            <p>
              Not by way of the installation, while the exclusion applies. Rev.
              &amp; Tax. Code §73(a) excludes a qualifying active solar energy
              system from “newly constructed,” and BOE states that when such a
              system is installed “it is not assessed, meaning that the existing
              assessment will not increase.” (Verified 2026-09-17.)
            </p>
          </div>
          <div>
            <h3>Is this an exemption that lowers my tax bill?</h3>
            <p>
              No. BOE: it “is in the form of a new construction exclusion. It is
              not an exemption. Therefore, the installation of a qualifying solar
              energy system will not result in either an increase or a decrease in
              the assessment of the existing property.” (Verified 2026-09-17.)
            </p>
          </div>
          <div>
            <h3>Do I have to apply?</h3>
            <p>
              Generally no. BOE: “There is no form or filing required to receive
              the exclusion,” and the assessor usually discovers the system
              through the building permit. The exception is an initial purchaser
              of a new building from a builder, who must file a claim under
              §73(e)(1)(A) — BOE names the “Initial Purchaser Claim for Solar
              Energy System New Construction Exclusion” form and says to mail it
              to the County Assessor. (Verified 2026-09-17.)
            </p>
          </div>
          <div>
            <h3>Does the exclusion apply if the system is leased or on a PPA?</h3>
            <p>
              BOE’s FAQ answers a leased-system assessment with “No. The system is
              excluded whether it is leased or owned,” and states generally that
              “[o]wnership of the system is not a condition of exclusion.” That
              addresses the assessment only. A lease or PPA has its own payment
              obligations, which this exclusion does not reduce. (Verified
              2026-09-17.)
            </p>
          </div>
          <div>
            <h3>Are pool heaters or a battery covered?</h3>
            <p>
              Solar swimming pool heaters and hot tub heaters are excluded from
              the definition by §73(b)(2), and BOE also lists passive energy
              systems and wind energy systems as not covered. Section 73(d)(1)(B)
              provides that a solar electric system “includes storage devices,
              power conditioning equipment, transfer equipment, and parts related
              to the functioning of those items.” Standalone storage installed
              without solar is not addressed here — ask the county assessor.
              (Verified 2026-09-17.)
            </p>
          </div>
          <div>
            <h3>What happens when I sell?</h3>
            <p>
              Section 73(f) provides the exclusion “shall remain in effect only
              until there is a subsequent change in ownership.” A sale is its own
              reassessment event; the exclusion does not pass to the buyer. Ask the
              county assessor how a specific transaction is handled.
            </p>
          </div>
        </div>
      </section>

      <RelatedGuides
        heading="The questions next door to this one"
        links={[
          {
            href: "/blog/does-solar-increase-home-value-california",
            label: "The value question, which is separate from the assessment question",
          },
          {
            href: "/blog/what-happens-to-solar-lease-when-i-sell-california",
            label: "Change of ownership with a lease in place",
          },
          {
            href: "/blog/solar-ppa-vs-lease-california",
            label: "What third-party ownership is",
          },
          {
            href: "/battery/sgip-battery-rebate-california",
            label: "Storage programs, which are not property tax",
          },
          {
            href: "/blog/california-solar-tax-credit-2026",
            label: "Incentives versus assessments — different columns",
          },
          {
            href: "/solar-problems/hidden-costs-of-solar-california",
            label: "Costs an exclusion does not remove",
          },
        ]}
      />
    </DecisionPage>
  );
}
