import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, QuoteChecklist, type Source } from "./DecisionPage";

const path = "/blog/is-my-roof-good-for-solar-california";
const title = "What Roof Is Best for Solar Panels? A California Suitability Checklist";
const intro = "An unshaded, south-facing roof with a moderate slope is a strong starting point, but it is not the only roof that can work. Age, condition, shade, usable area, structure and the proposed mounting plan all belong in the decision.";

const sources: Source[] = [
  {
    label: "U.S. Department of Energy: Homeowner's Guide to Solar",
    url: "https://www.energy.gov/cmei/systems/homeowners-guide-solar",
  },
  {
    label: "U.S. Department of Energy: Step-by-Step Guide for Consumers Going Solar",
    url: "https://www.energy.gov/cmei/systems/articles/walk-me-through-it-step-step-guide-consumers-going-solar",
  },
  {
    label: "NREL: PVWatts Calculator",
    url: "https://pvwatts.nrel.gov/",
  },
  {
    label: "CPUC: California Solar Consumer Protection Guide",
    url: "https://www.cpuc.ca.gov/solarguide/",
  },
];

export const roofSuitabilityMetadata: Metadata = {
  title,
  description: intro,
  alternates: { canonical: path },
  openGraph: {
    title,
    description: intro,
    type: "article",
    url: `https://ratereliefca.com${path}`,
    modifiedTime: "2026-09-12T00:00:00Z",
  },
};

export function RoofSuitabilityGuide() {
  return (
    <DecisionPage
      title={title}
      intro={intro}
      path={path}
      sources={sources}
      topic="California solar roof suitability"
      sourceCheckedDate="2026-09-12"
      primaryResourceHref="/blog/solar-panels-tile-roof-california"
      primaryResourceLabel="Tile-roof solar guide"
      comparisonHref="/blog/solar-panel-removal-reinstall-cost"
      comparisonLabel="Removal and reinstallation checklist"
    >
      <section>
        <h2>The best roof is the one the proposal has actually measured</h2>
        <p>
          The U.S. Department of Energy says solar panels typically perform best
          on south-facing roofs with a slope between 15 and 40 degrees, while
          other roofs can still be suitable. That is a starting point. It does
          not decide whether a particular array fits, how much shade it receives
          or whether the roof should be repaired first.
        </p>
      </section>

      <section>
        <h2>1. Check roof age and condition before system size</h2>
        <p>
          Find the roof permit, replacement date and any repair history. Look for
          active leaks, damaged covering, soft areas or visible deterioration,
          then have the appropriate roofing or structural professional address
          anything uncertain. DOE advises homeowners to consider how long remains
          before roof replacement because later work can require the solar array
          to be removed and reinstalled.
        </p>
      </section>

      <section>
        <h2>2. Map shade and usable roof area</h2>
        <p>
          Trees, neighboring buildings, chimneys, vents, roof peaks and other
          obstructions can reduce usable area or production. Ask the bidder for a
          roof layout and a production model that states its shade and loss
          assumptions. NREL&apos;s PVWatts can produce an independent starting
          estimate, but remote tools do not replace a site and structural review.
        </p>
      </section>

      <section>
        <h2>3. Separate orientation from the household&apos;s actual need</h2>
        <p>
          A south-facing facet can produce well across the day. Other orientations
          may still support a workable design, depending on shade, roof shape,
          tariff and when the home uses electricity. Ask for monthly production by
          roof facet instead of accepting a single annual percentage or a claim
          that one compass direction automatically wins.
        </p>
      </section>

      <section>
        <h2>4. Make the mounting and roof responsibilities visible</h2>
        <p>
          Roof material changes the attachment and flashing plan. Structure and
          local code determine what the roof can support. Get the mounting method,
          penetrations, waterproofing responsibility, workmanship coverage,
          exclusions and the process for a future roof repair in writing. For a
          tile roof, use the <Link className="underline" href="/blog/solar-panels-tile-roof-california">tile-roof checklist</Link> before comparing proposals.
        </p>
      </section>

      <section>
        <h2>Photos and records to collect before the site visit</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Aerial or street view showing the roof facets and nearby shade.</li>
          <li>Close photos of the roof covering, damage, repairs and obstructions.</li>
          <li>The roof permit or best available installation and repair dates.</li>
          <li>A current electric bill and a full year of usage when available.</li>
          <li>Photos of the main electrical service label and accessible equipment area.</li>
        </ul>
        <p className="mt-3">
          These records help a bidder prepare. They do not prove structural
          capacity, code compliance or roof condition from a distance.
        </p>
      </section>

      <QuoteChecklist />

      <section>
        <h2>If roof work is part of the sale, price it separately</h2>
        <p>
          A bundled contract can still hide who performs the roof work, who holds
          the roofing license, which warranty applies and what happens if the solar
          company disappears. Ask for the roof scope, solar scope, cash prices,
          contractors and warranty claim process as separate written items. If the
          roof may need service later, use the <Link className="underline" href="/blog/solar-panel-removal-reinstall-cost">removal and reinstallation checklist</Link> before signing.
        </p>
      </section>
    </DecisionPage>
  );
}
