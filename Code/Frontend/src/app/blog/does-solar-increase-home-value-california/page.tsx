// 2026-09-18 new sourced page (claude/ca-green-20260918) built from
// DRAFT_does-solar-increase-home-value-california_2026-09-17.md. Every figure
// below carries a source URL and a verified date; do not add, round, generalise
// or "improve" a number without re-verifying it at the primary source.
import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";
import { SolarInquiry } from "@/components/growth/SolarInquiry";

const sources: Source[] = [
  {
    label:
      "California Revenue and Taxation Code § 73 (active solar energy system exclusion, change-of-ownership limit and sunset)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=73.",
  },
  {
    label: "Board of Equalization: Active Solar Energy System Exclusion",
    url: "https://boe.ca.gov/proptaxes/active-solar-energy-system/",
  },
  {
    label:
      "Board of Equalization Letter to Assessors No. 2024/031 (August 26, 2024)",
    url: "https://www.boe.ca.gov/proptaxes/pdf/lta24031.pdf",
  },
  {
    label:
      "Board of Equalization: Active Solar Energy System Exclusion frequently asked questions",
    url: "https://boe.ca.gov/proptaxes/active-solar-energy-system/frequently-asked-questions.htm",
  },
  {
    label: "SB 710 (Stats. 2025, Ch. 328) bill text and Legislative Counsel’s Digest",
    url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB710",
  },
  {
    label:
      "Berkeley Lab: Selling Into the Sun — Price Premium Analysis of a Multi-State Dataset of Solar Homes (LBNL-6942E, 2015)",
    url: "https://emp.lbl.gov/publications/selling-sun-price-premium-analysis",
  },
  {
    label: "Berkeley Lab: LBNL-6942E full report fact sheet",
    url: "https://eta-publications.lbl.gov/sites/default/files/lbnl-6942e-fullreport-factsheet.pdf",
  },
  {
    label: "Zillow research: Homes With Solar Panels Sell for 4.1% More (April 16, 2019)",
    url: "https://www.zillow.com/research/solar-panels-house-sell-more-23798/",
  },
  {
    label:
      "Berkeley Lab: Leasing Into the Sun — A Mixed-Method Analysis of Transactions of Homes With Third Party Owned Solar (LBNL-1007003, January 2017)",
    url: "https://www.osti.gov/servlets/purl/1342946",
  },
  {
    label: "California Business and Professions Code § 7169 (solar disclosure document)",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7169",
  },
];

export const metadata: Metadata = {
  title: "Does Solar Increase Home Value in California? The Rules",
  description:
    "California excludes an active solar system from new-construction reassessment until the home sells. Here is what the statute and the sale research actually say.",
  alternates: { canonical: "/blog/does-solar-increase-home-value-california" },
  openGraph: {
    title: "Does solar increase home value in California?",
    description:
      "What Revenue and Taxation Code section 73 settles, what it does not, and where the sale-price research stops.",
    type: "article",
    url: "https://ratereliefca.com/blog/does-solar-increase-home-value-california",
    modifiedTime: "2026-09-17T00:00:00Z",
  },
};

export default function DoesSolarIncreaseHomeValueCalifornia() {
  return (
    <DecisionPage
      title="Does solar increase home value in California?"
      intro="Two different questions get answered as one. California property tax law treats a qualifying solar system a particular way while you own the home, and separate sale-price research asks what buyers paid. Neither one produces a number for your address."
      path="/blog/does-solar-increase-home-value-california"
      sources={sources}
      sourceCheckedDate="2026-09-17"
      topic="Solar and home value in California"
      inquiry={
        <SolarInquiry
          variant="decision"
          topic="Solar and home value in California"
          market="CA"
        />
      }
    >
      <section>
        <h2>What California law actually settles — and what it does not</h2>
        <p>
          California Revenue and Taxation Code section 73 excludes an “active
          solar energy system” from the term “newly constructed.” Subdivision (a)
          states that “newly constructed,” as used in the state Constitution,
          “does not include the construction or addition of any active solar
          energy system, as defined in subdivision (b).” (Rev. &amp; Tax. Code
          §73(a), leginfo.legislature.ca.gov, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          The State Board of Equalization is explicit about what that is and is
          not: “The property tax incentive for the installation of an active
          solar energy system is in the form of a{" "}
          <strong>new construction exclusion</strong>. It is not an exemption.
          Therefore, the installation of a qualifying solar energy system will
          not result in either an increase or a decrease in the assessment of the
          existing property.” (BOE, Active Solar Energy System Exclusion,
          verified 2026-09-17.)
        </p>
        <p className="mt-3">
          So the statute settles an <strong>assessment</strong> question. It does
          not settle a <strong>market value</strong> question. Nothing in section
          73 states, implies or measures what a buyer will pay for a house with
          panels on it.
        </p>
        <p className="mt-3">
          The assessment mechanics have their own page:{" "}
          <Link
            className="underline"
            href="/blog/do-solar-panels-increase-property-taxes-california"
          >
            do solar panels increase property taxes in California
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>The exclusion ends when the home changes hands</h2>
        <p>
          This is the part most pages skip, and it is the part that matters to
          anyone thinking about resale.
        </p>
        <p className="mt-3">
          Section 73(f): “Notwithstanding any other law, the exclusion from new
          construction provided by this section shall remain in effect only until
          there is a subsequent change in ownership.” (Rev. &amp; Tax. Code
          §73(f), verified 2026-09-17.)
        </p>
        <p className="mt-3">
          A change in ownership is its own reassessment event under Article XIII
          A. The exclusion protects the seller’s existing assessment from being
          increased by the addition of the system; it does not travel with the
          house to the buyer. Ask a county assessor or a qualified tax
          professional how a specific sale would be handled — a list of county
          assessors is published by the BOE.
        </p>
      </section>

      <section>
        <h2>The exclusion is scheduled to become inoperative on 1 January 2027</h2>
        <p>
          Section 73(i)(1): “Except as provided in paragraph (2), this section
          shall remain in effect only until January 1, 2027.” Section 73(i)(2)
          then preserves what has already been granted: “active energy solar
          systems that qualify for an exclusion under this section prior to
          January 1, 2027, shall continue to be excluded on and after January 1,
          2027, until there is a subsequent change in ownership.” (Rev. &amp;
          Tax. Code §73(i), verified 2026-09-17.)
        </p>
        <p className="mt-3">
          Section 73 was last amended by SB 710 (Stats. 2025, Ch. 328), approved
          3 October 2025 and effective 1 January 2026. The Legislative Counsel’s
          Digest describes SB 710 as making “a technical change to the existing
          active solar energy system exclusion by instead making the repeal date
          of January 1, 2027, the date the exclusion becomes inoperative.” (SB
          710, leginfo, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          The BOE has published how it reads the two dates in the statute. Letter
          to Assessors No. 2024/031, dated 26 August 2024, states that “the
          section 73 new construction exclusion applies to any active solar
          energy system new construction in progress or completed before January
          1, 2027,” and that “[a]fter the exclusion sunsets, any solar energy
          system previously excluded as new construction will remain excluded
          from property tax until the property changes ownership.” The same
          letter warns that not all construction in progress qualifies: completed
          new construction is assessable on the lien date and on the day of
          completion. (BOE LTA 2024/031, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          Two things follow, and only two. First, the deadline is a{" "}
          <strong>completion</strong> deadline, not a signing deadline. Second, a
          sunset can be extended by the Legislature — it has been extended
          repeatedly since 1980 (BOE LTA 2024/031 recounts the history) — so
          check the current statute text rather than any page, including this one.
        </p>
      </section>

      <section>
        <h2>What the sale-price research found, and where it stops</h2>
        <p>
          Two named studies are worth reading in full. Neither produces a
          California promise.
        </p>
        <p className="mt-3">
          <strong>
            Berkeley Lab, “Selling Into the Sun: Price Premium Analysis of a
            Multi-State Dataset of Solar Homes” (LBNL-6942E, Hoen, Adomatis,
            Jackson, Graff-Zivin, Thayer, Klise and Wiser, 2015).
          </strong>{" "}
          The dataset was 22,822 home sales, of which 3,951 had PV, across eight
          states — California, Connecticut, Florida, Massachusetts, Maryland,
          North Carolina, New York and Pennsylvania — over 2002–2013. The authors
          report that “average premiums equate to approximately $4/W or $15,000
          for an average-sized 3.6-kW PV system.” (emp.lbl.gov, verified
          2026-09-17.)
        </p>
        <p className="mt-3">
          The report’s own limits are as important as its headline. The fact
          sheet states that “[a]ll PV systems in this dataset were homeowner
          owned rather than leased,” that the analysis “focuses only on homes
          with host-owned PV systems, not those with leased PV systems,” that the
          sample was limited to homes no more expensive than $900,000, and that
          “[t]he market appears to depreciate PV systems in their first 10 years
          at a rate exceeding the rate of PV efficiency losses” with the data not
          allowing analysis into the second decade. (LBNL-6942E fact sheet,
          verified 2026-09-17.)
        </p>
        <p className="mt-3">
          Read the dates: 2002–2013. That is before California’s current Solar
          Billing Plan tariff and before the 2026 federal credit position. A 2015
          average across eight states is not a 2026 valuation for one house in
          one county. For the current federal position, see{" "}
          <Link className="underline" href="/blog/solar-tax-credit-expired-2026-options">
            what the ended homeowner credit leaves available in 2026
          </Link>
          .
        </p>
        <p className="mt-3">
          <strong>
            Zillow research, “Homes With Solar Panels Sell for 4.1% More,”
            published 16 April 2019.
          </strong>{" "}
          Zillow reported that “[n]ationally, homes with solar-energy systems
          sold for 4.1% more on average than comparable homes without solar
          power,” about $9,274 on a median-valued home, analysing sales from 1
          March 2018 to 28 February 2019 and controlling for observable
          attributes including bedrooms, bathrooms, square footage, age and
          location. Zillow’s metro figures differ from each other: Riverside, CA
          at 2.7%; Los Angeles and San Francisco at roughly 4%; the New York City
          metro at 5.4%. Zillow notes that unmeasured features may contribute to
          the premium. (zillow.com/research, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          Three metro figures inside one state that differ by more than a
          percentage point are the finding. A national average is not a number
          for your ZIP code.
        </p>
      </section>

      <section>
        <h2>Leased and third-party-owned systems are a separate question</h2>
        <p>
          Berkeley Lab looked at this specifically, in California, and the answer
          was not the same. “Leasing Into the Sun: A Mixed-Method Analysis of
          Transactions of Homes With Third Party Owned Solar” (LBNL-1007003,
          Hoen, Rand and Adomatis, January 2017) analysed 20,106 California home
          sales — 113 with third-party-owned PV, 2,914 with non-TPO PV and 17,079
          without PV — and “fails to uncover statistically significant premiums
          for TPO PV homes nor for those with pre-paid leases as compared to
          non-PV homes,” against roughly $4.39 per watt for host-owned systems.
          (osti.gov, verified 2026-09-17.)
        </p>
        <p className="mt-3">
          The authors are careful, and so should anyone citing them be: 113 TPO
          sales is a small sample, the TPO transactions were from 2011–2013, and
          the report frames its result as an “absence of evidence” rather than a
          finding that TPO systems reduce value, recommending larger and more
          recent datasets.
        </p>
        <p className="mt-3">
          What that means practically: if the system on the roof is leased or on a
          power purchase agreement, the host-owned premium research does not
          describe it, and the contract’s assignment and buyout terms become the
          live issue at sale rather than a valuation percentage. Business and
          Professions Code section 7169(c)(11) lists, among the supporting
          information a solar disclosure may carry, “[t]he impacts that the
          financing options, lease agreement terms, or contract terms will have on
          the sale of the consumer’s home, including any balloon payments or solar
          energy system relocation that may be required if the contract is not
          assigned to the new owner of the home.” (Bus. &amp; Prof. Code
          §7169(c)(11), verified 2026-09-17.)
        </p>
        <p className="mt-3">
          The two structures are compared on their own page —{" "}
          <Link className="underline" href="/blog/solar-ppa-vs-lease-california">
            what actually differs between a solar PPA and a lease
          </Link>{" "}
          — and the sale itself is covered in{" "}
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
        <h2>How to get an answer for your actual address</h2>
        <p>None of the above is a valuation. These are the steps that produce one.</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            Get the system’s ownership status in writing: owned outright,
            financed with a loan, leased, or on a power purchase agreement. The
            four are not interchangeable in any of the research above.
          </li>
          <li>
            If it is leased or on a PPA, read the assignment clause, the buyout
            clause and any relocation or balloon term before treating the system
            as an asset at sale.
          </li>
          <li>
            Ask a licensed California appraiser to value the specific property.
            An appraiser, not a sales estimate, is the profession that answers
            this question.
          </li>
          <li>
            Ask a real estate professional what has actually closed in the
            immediate market — not a national average.
          </li>
          <li>
            For the assessment question, contact the county assessor. BOE states
            there is “no form or filing required to receive the exclusion” for a
            homeowner adding a system, and that “[i]f you think you have been
            assessed for the installation of an active solar energy system, you
            should contact your County Assessor.” (BOE FAQ, verified 2026-09-17.)
          </li>
        </ol>
        <p className="mt-3">
          Before any of that, settle whether the roof is a candidate at all:{" "}
          <Link className="underline" href="/blog/is-my-roof-good-for-solar-california">
            property-specific solar suitability
          </Link>
          . If a lien was recorded against the property in connection with the
          system, read{" "}
          <Link className="underline" href="/solar-problems/ucc-1-lien-solar-california">
            how a UCC-1 filing shows up at title
          </Link>{" "}
          before listing.
        </p>
      </section>

      <section>
        <h2>A referral request is optional and separate</h2>
        <p>
          California Rate Relief is a private referral service. A referral
          request does not value a property, does not establish program
          eligibility, does not approve financing and does not promise a price, a
          savings figure or a resale outcome. If you request a review, compare the
          resulting provider documents on your own before you decide.
        </p>
      </section>

      <section>
        <h2>Frequently asked questions</h2>
        <div className="mt-3 space-y-6">
          <div>
            <h3>Do solar panels raise my property tax bill in California?</h3>
            <p>
              Not by way of the installation itself, while the exclusion applies.
              Revenue and Taxation Code section 73 excludes a qualifying active
              solar energy system from “newly constructed,” and BOE states the
              installation “will not result in either an increase or a decrease
              in the assessment of the existing property.” It is an exclusion
              from reassessment, not an exemption, and section 73(f) ends it at a
              subsequent change in ownership. (Rev. &amp; Tax. Code §73; BOE,
              verified 2026-09-17.)
            </p>
          </div>
          <div>
            <h3>Does the property tax exclusion transfer to the buyer when I sell?</h3>
            <p>
              No. Section 73(f) states the exclusion “shall remain in effect only
              until there is a subsequent change in ownership.” A change in
              ownership is its own reassessment event. Ask the county assessor how
              a specific transaction is handled.
            </p>
          </div>
          <div>
            <h3>Is the exclusion going away?</h3>
            <p>
              Section 73(i)(1) provides that the section “shall remain in effect
              only until January 1, 2027,” and BOE Letter to Assessors 2024/031
              reads that as applying to new construction “in progress or completed
              before January 1, 2027.” Section 73(i)(2) preserves exclusions
              already granted until a subsequent change in ownership. The
              Legislature has extended this sunset repeatedly since 1980; check
              the current statute text rather than any summary. (Verified
              2026-09-17.)
            </p>
          </div>
          <div>
            <h3>How much does solar add to a California home’s sale price?</h3>
            <p>
              There is no verified figure for a specific address. Berkeley Lab’s
              2015 eight-state study reported an average of approximately $4/W,
              or about $15,000 for an average 3.6-kW system, on 2002–2013 sales of{" "}
              <strong>host-owned</strong> systems only, in homes under $900,000.
              Zillow’s 2019 analysis reported 4.1% nationally, and inside
              California reported 2.7% in Riverside and roughly 4% in Los Angeles
              and San Francisco. Averages across states and years are not
              appraisals.
            </p>
          </div>
          <div>
            <h3>What if the panels are leased or on a PPA?</h3>
            <p>
              Berkeley Lab’s California-specific 2017 study “fails to uncover
              statistically significant premiums for TPO PV homes nor for those
              with pre-paid leases as compared to non-PV homes,” on 113 TPO sales
              from 2011–2013, and describes its own result as an absence of
              evidence. Treat the contract’s assignment, buyout and relocation
              terms as the operative issue at sale.
            </p>
          </div>
          <div>
            <h3>Who should I ask for a real number?</h3>
            <p>
              A licensed appraiser for value, the county assessor for assessment,
              and your own tax professional for anything with a tax consequence.
              None of those answers can be produced from a web page.
            </p>
          </div>
        </div>
      </section>

      <RelatedGuides
        heading="Read these before treating a system as an asset at sale"
        links={[
          {
            href: "/blog/do-solar-panels-increase-property-taxes-california",
            label: "The assessment mechanics in detail",
          },
          {
            href: "/blog/what-happens-to-solar-lease-when-i-sell-california",
            label: "The lease-at-sale question",
          },
          {
            href: "/blog/solar-ppa-vs-lease-california",
            label: "Third-party ownership types",
          },
          {
            href: "/solar-problems/ucc-1-lien-solar-california",
            label: "Liens and title at sale",
          },
          {
            href: "/blog/solar-tax-credit-expired-2026-options",
            label: "The 2026 federal-credit position",
          },
          {
            href: "/blog/is-my-roof-good-for-solar-california",
            label: "Property-specific suitability",
          },
        ]}
      />
    </DecisionPage>
  );
}
