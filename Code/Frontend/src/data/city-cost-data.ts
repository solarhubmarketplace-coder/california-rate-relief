import type { UtilityRateKey } from './utility-rate-tracker';

// =============================================================================
// city-cost-data.ts — the data layer behind /solar-cost/[city]
//
// This is a NEW city layer. src/data/cities-data.ts is the old one and is not
// touched by it: that file drives /solar-savings/* and /solar-companies/* and
// carries copy this lane has no mandate to change.
//
// WHAT A ROW IS FOR
// /solar-cost/[city] answers "solar panel cost <city>" WITHOUT stating a price.
// It does that by naming, with a source, the four things that actually vary by
// city: which utility bills the address (and that utility's current average
// residential rate, imported from the rate tracker rather than typed here), the
// city's own solar permit fee and whether it can be filed online, and the state
// rules that apply the same way everywhere. So the only per-city facts a row
// carries are the ones a reader cannot get from the state rules alone.
//
// THE GATE (CALIFORNIA_STRATEGY_OF_RECORD_2026-09-17.md §7.2-§7.3)
// Every field below that reaches the rendered page must carry a source and a
// verified date. Fields not yet verified hold the literal string 'TODO'. A row
// with a TODO in ANY rendered field is excluded from generateStaticParams and
// from the sitemap, and its URL 404s. That is deliberate: an unsourced city
// page must not be able to ship by accident, and the failure mode is a missing
// page rather than a page with an invented permit fee on it.
//
// SEED STATE, 2026-09-18
// All five rows below are placeholders. The real values are being produced
// separately into 02_Work_Management/Growth_200/CA_CITY_DATA_2026-09-18.csv;
// that file did not exist when this file was written (checked 2026-09-18), so
// nothing could be filled from it. When it lands, replace the TODO strings with
// its values, set sourcesFetchedAt to the CSV's own fetch date, and the gate
// opens for exactly the rows that are complete.
//
// utilityKey is typed to the tracker's keys and so cannot hold 'TODO'. It is
// therefore PROVISIONAL on a seed row: because sourcesFetchedAt is 'TODO' the
// row is gated out, so no provisional utility assignment can reach a reader.
// Confirm the serving utility against a primary source in the same pass that
// fills the permit fields.
// =============================================================================

// FIGURES ON THIS LANE
// The page states no CITY-specific system price, no price range invented for
// a city, no per-watt figure attributed to a city, and no payback period:
// none of those can be sourced for a city, and inventing them is the defect
// that forced this project's 42-page correction.
//
// A CITY PERMIT FEE is the one per-city exception, and it is not an exception
// to the rule so much as an instance of it: where a city publishes an exact
// figure in an adopted fee schedule, the row quotes that figure and renders it
// beside a link to the document it came from. It is a published municipal
// charge, not an estimate of what solar costs. Where a city publishes no
// figure, the row says so plainly — that is itself the answer to what the
// permit will cost, and it is never rounded up into a guess.
//
// STATEWIDE BENCHMARK, added 2026-09-22 (Chad's decision)
// The page may also state ONE sourced, statewide installed-price benchmark —
// currently Lawrence Berkeley National Laboratory's Tracking the Sun figure —
// defined once in src/data/solar-cost-benchmark.ts and rendered by the
// StatewideCostBenchmark component. That is a second, narrow exception to the
// rule above, and it is bounded tightly:
//   - It must always read as statewide/national, never as this city's price.
//     The component's own copy enforces the wording; this file does not carry
//     a per-row benchmark value, so a row cannot drift from it or restate it
//     as local.
//   - It is the same figure on every row. If a city-specific installed-price
//     figure is ever sourced for an individual city, it does not belong in
//     this benchmark file or component — it would need its own field here,
//     gated through GATED_FIELDS/unsourcedFields() like every other rendered
//     fact, and it still could not be a payback period or a savings estimate.
//   - It does not relax anything above: still no city-specific price, no
//     invented range for a city, no payback period, no savings promise.
//
// SUPERSEDED 2026-09-24 (Block 3 of the SEO plan): the "no city price" rule
// above is retired. Each city page now states the median cost per watt that
// owners reported to their utility in the CPUC's DG Stats interconnection
// data, for the city when at least 30 reported and otherwise the county,
// utility territory or state, always named, labeled as reported costs and not
// a quote (src/data/dgstats, src/lib/city-cost-content.ts). The LBNL national
// benchmark is no longer shown on this layer. Still no payback period and no
// savings promise.
//
// SEED STATE NOTE, superseded 2026-09-18: all 44 rows below now carry sourced
// values. The five that could not have an exact fee confirmed say what the
// city's own page says instead of holding a TODO.

/** The marker for a field that has not been verified against a source yet. */
export const UNSOURCED = 'TODO';

/** A document a row's rendered sentence was checked against. */
export interface CityCostRowSource {
  label: string;
  url: string;
  /** ISO date the document was fetched and the sentence checked against it. */
  verifiedAt: string;
}

export interface CityCostRow {
  /** URL slug: /solar-cost/<slug>. */
  slug: string;
  /** Display name as it reads in the H1, e.g. 'San Diego'. */
  city: string;
  /** County, e.g. 'San Diego County'. Rendered. */
  county: string;
  /** Which tracker utility bills this city. Rendered via the tracker record. */
  utilityKey: UtilityRateKey;
  /** Community choice aggregator, if one serves the city. Rendered when set. */
  cca?: string;
  /** The city's own solar permitting page. Rendered as a link. */
  permitUrl: string;
  /** What the city's published fee schedule says, in its own terms. Rendered. */
  permitFeeNote: string;
  /** Label for the document the fee note came from. Rendered. */
  permitFeeSource: string;
  /** Whether solar permits can be filed online, per the city. Rendered. */
  permitOnline: string;
  /** ISO date every field above was fetched and verified. Rendered. */
  sourcesFetchedAt: string;
  /**
   * Set when more than one electric utility serves addresses inside the city.
   * `utilityKey` stays the utility whose tracker record the page quotes; the
   * note names the others and says which applies where, in the sources' own
   * terms. Every source carries its own verified date. Rendered in the utility
   * section, the "Which utility serves" answer and the sources list.
   */
  utilitySplit?: {
    /** Short names of the other utilities, e.g. 'TID', for the section heading. */
    others: string;
    /** One to three sentences, each traceable to a source below. */
    note: string;
    sources: { label: string; url: string; verifiedAt: string }[];
  };
  // ---------------------------------------------------------------------------
  // Added 2026-09-23 (Tier 2 city-cost wave). All optional, so rows written
  // before then still pass the gate; every one of them is gated when present.
  // ---------------------------------------------------------------------------
  /**
   * The document that names the CCA as serving this city: the CCA's own
   * member list, or the delivery utility's list of active CCAs. Rendered next
   * to the CCA sentence and in the sources list.
   */
  ccaSource?: CityCostRowSource;
  /**
   * Documents behind permitFeeNote beyond permitUrl, usually the adopted fee
   * schedule the dollar figures come from. Rendered in the permit section and
   * the sources list.
   */
  permitSources?: CityCostRowSource[];
  /**
   * City-specific questions a reader asks that the template's four FAQs do
   * not cover (for example the county-level form of the cost question). Every
   * sentence must restate a fact already sourced on this row or in the city's
   * entry in src/data/local-project-guidance.ts. Rendered in the FAQ and in
   * the FAQPage JSON-LD.
   */
  extraFaqs?: { question: string; answer: string }[];
  /**
   * Added 2026-09-24 (Tier 3 city-cost wave). A short "Electricity rates in
   * <city>" section for a city whose /solar-savings bill page 301s to this
   * page, so the "electricity rates <city>" question is answered here: who
   * supplies the power and what the utility's own residential schedule
   * charges, with the schedule's effective date. Every figure is restated
   * from the sources below. The tracker's average rate is NOT retyped here;
   * the utility section already imports it. Rendered as its own H2 after the
   * utility section, as one FAQ entry, and in the sources list.
   */
  localRates?: {
    heading: string;
    paragraphs: string[];
    faq: { question: string; answer: string };
    sources: CityCostRowSource[];
  };
}

/**
 * The date the /solar-cost template's own CSLB sources (Check a License; Solar
 * Requirements, which reproduces B&P §7169) were last fetched and the
 * template's "check the company" section checked against them. Every city row
 * renders that section, so a page is at least this fresh.
 */
// 2026-09-23: both CSLB pages re-fetched and the section re-checked against
// them in the same pass that corrected the template's CPUC guide answer.
export const COST_TEMPLATE_CSLB_VERIFIED = '2026-09-23';

/**
 * California Energy Commission, Electric Load Serving Entities (IOU & POU):
 * the statewide service-territory layer. Queried 2026-09-22 against Census
 * TIGERweb city boundaries to find cities that more than one utility serves.
 */
export const CEC_SERVICE_TERRITORY_SOURCE = {
  label: 'California Energy Commission, Electric Load Serving Entities (IOU & POU) service-territory map',
  url: 'https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about',
  verifiedAt: '2026-09-22',
};

/**
 * The same CEC layer, queried again on 2026-09-23 against Census TIGERweb
 * boundaries for the Tier 2 city-cost wave (new rows and re-checked rows).
 */
export const CEC_SERVICE_TERRITORY_SOURCE_0923 = {
  ...CEC_SERVICE_TERRITORY_SOURCE,
  verifiedAt: '2026-09-23',
};

// -----------------------------------------------------------------------------
// CCA membership sources, fetched 2026-09-23. A delivery utility's own list of
// the CCAs in its territory is preferred where it names cities; otherwise the
// CCA's own list of the communities it serves.
// -----------------------------------------------------------------------------
const CCA_VERIFIED_0923 = '2026-09-23';

export const PGE_CCA_LIST: CityCostRowSource = {
  label: 'PG&E, Community Choice Aggregation (the CCAs in PG&E territory and the areas each serves)',
  url: 'https://www.pge.com/en/account/alternate-energy-providers/community-choice-aggregation.html',
  verifiedAt: CCA_VERIFIED_0923,
};
export const SCE_CCA_LIST: CityCostRowSource = {
  label: 'SCE, Community Choice Aggregation (the CCAs in SCE territory and the cities each serves)',
  url: 'https://www.sce.com/customer-service-center/community-choice-aggregation',
  verifiedAt: CCA_VERIFIED_0923,
};
export const SDGE_ACTIVE_CCAS: CityCostRowSource = {
  label: 'SDG&E, Active CCAs (the cities Clean Energy Alliance and San Diego Community Power serve)',
  url: 'https://www.sdge.com/customer-choice/community-choice-aggregation/active-ccas',
  verifiedAt: CCA_VERIFIED_0923,
};
export const AVA_COMMUNITIES: CityCostRowSource = {
  label: 'Ava Community Energy, Communities We Serve',
  url: 'https://avaenergy.org/community/who-we-serve/',
  verifiedAt: CCA_VERIFIED_0923,
};
export const MCE_ABOUT: CityCostRowSource = {
  label: 'MCE, About Us (member communities)',
  url: 'https://www.mcecleanenergy.org/about-us/',
  verifiedAt: CCA_VERIFIED_0923,
};
export const SVCE_ABOUT: CityCostRowSource = {
  label: 'Silicon Valley Clean Energy, About (communities served)',
  url: 'https://svcleanenergy.org/about/',
  verifiedAt: CCA_VERIFIED_0923,
};
export const WESTLIGHT_HOME: CityCostRowSource = {
  label: 'WestLight Energy (formerly Peninsula Clean Energy): serves San Mateo County and Los Banos; one PG&E bill',
  url: 'https://www.westlightenergy.org/',
  verifiedAt: CCA_VERIFIED_0923,
};
export const CCE_MEMBERS: CityCostRowSource = {
  label: 'Central Coast Community Energy, Implementation Plan Addendum No. 5 (May 2023): member agencies',
  url: 'https://3cenergy.org/wp-content/uploads/2023/05/Implementation-Plan-Addendum-No.-5.pdf',
  verifiedAt: CCA_VERIFIED_0923,
};
/**
 * California Energy Commission, Residential Solar Permitting Program data
 * (SB 379): each jurisdiction's self-reported automated-permitting platform.
 * The CEC says it does not certify compliance. Downloaded 2026-09-23; the
 * file states its data was last updated 2026-08-03.
 */
export const CEC_SB379_DATA: CityCostRowSource = {
  label: 'California Energy Commission, Residential Solar Permitting Program data (SB 379 platform status as self-reported by each jurisdiction; data last updated August 3, 2026)',
  url: 'https://www.energy.ca.gov/media/9247',
  verifiedAt: '2026-09-23',
};
// Added 2026-09-23 (Tier 3 city-cost wave).
export const PIONEER_ABOUT: CityCostRowSource = {
  label: 'Pioneer Community Energy, About Us (Auburn, Colfax, Lincoln, Rocklin, Loomis and most of unincorporated Placer County; Grass Valley and Nevada City since 2024)',
  url: 'https://pioneercommunityenergy.org/about-us/',
  verifiedAt: CCA_VERIFIED_0923,
};
export const SCP_WHO: CityCostRowSource = {
  label: 'Sonoma Clean Power, Who We Are (governed by the Counties of Sonoma and Mendocino and cities including Petaluma, Santa Rosa and Windsor)',
  url: 'https://sonomacleanpower.org/who-we-are',
  verifiedAt: CCA_VERIFIED_0923,
};
export const OCPA_HOME: CityCostRowSource = {
  label: 'Orange County Power Authority, member communities (Buena Park, Fullerton, Irvine, Fountain Valley)',
  url: 'https://www.ocpower.org/',
  verifiedAt: CCA_VERIFIED_0923,
};

/**
 * The fields that reach the rendered page and therefore must be sourced.
 * `cca` is checked only when present, since most cities have none.
 */
const GATED_FIELDS = [
  'county',
  'permitUrl',
  'permitFeeNote',
  'permitFeeSource',
  'permitOnline',
  'sourcesFetchedAt',
] as const satisfies ReadonlyArray<keyof CityCostRow>;

export const CITY_COST_ROWS: CityCostRow[] = [
  // Live since 2026-09-18, sources verified that day.
  {
    slug: 'temecula',
    city: 'Temecula',
    county: 'Riverside County',
    utilityKey: 'sce',
    permitUrl: 'https://temeculaca.gov/304/Photovoltaic-Systems',
    // 2026-09-23: fee figures now come from the City's own fee schedule.
    permitFeeNote:
      "Temecula's User Fee Schedule for fiscal year 2026-27 lists a residential roof-mounted photovoltaic system at $326 for building plan check plus $242 for building inspection, $568 in all, and a residential ground-mounted system at $970, which adds a $228 fire plan check. The City's photovoltaic page says a separate fee applies to the SolarAPP+ submission, without stating the amount.",
    permitFeeSource: 'City of Temecula, Photovoltaic Systems (temeculaca.gov/304)',
    permitSources: [
      {
        label: 'City of Temecula User Fee Schedule, effective fiscal year 2026-27 (Building - Miscellaneous: Photovoltaic System)',
        url: 'https://www.temeculaca.gov/DocumentCenter/View/19215/FY2025-26-User-Fee-Schedule',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      'Yes. SolarAPP+ has been available since September 30, 2023; eligible projects then apply in the City\'s Citizen Self Service portal under the SolarApp+ Photovoltaic permit type. Expansions of an existing PV system do not qualify for SolarAPP+ or expedited review.',
    sourcesFetchedAt: '2026-09-23',
    // Added 2026-09-23: the CEC layer overlaid on the Census city boundary puts
    // the city's southwest corner in SDG&E territory.
    utilitySplit: {
      others: 'SDG&E',
      note:
        "The California Energy Commission's service-territory map places most of Temecula in Southern California Edison's territory and a smaller area in the city's southwest corner in San Diego Gas & Electric's. Read the utility name on your bill before using an SCE rate.",
      sources: [CEC_SERVICE_TERRITORY_SOURCE_0923],
    },
  },
  {
    slug: 'murrieta',
    city: 'Murrieta',
    county: 'Riverside County',
    utilityKey: 'sce',
    permitUrl: 'https://www.murrietaca.gov/1368/Self--Issuing-Permits-Solar-App',
    // 2026-09-23: the May 2022 bulletin (IB-125) is superseded as the fee
    // source by the FY 2026/27 fee schedule, which states the same $450 for
    // 15 kW or less and adds the larger-system and separate-permit rules.
    permitFeeNote:
      "Murrieta's User Fee Schedule for fiscal year 2026/27 sets the residential photovoltaic permit at $450 for a system of 15 kW or less, and at a $500 base fee plus $15 for each kW over 15 kW for a larger one, citing Government Code section 66015. It adds that structural work and non-solar items installed with the system, such as carports, ground-mount supports, exterior lighting and EV charging equipment, need their own permits and fees. SolarAPP+ charges its own processing fee, which the City does not state, and the City says its inspection fee covers two site visits.",
    permitFeeSource: 'City of Murrieta, Self-Issuing Permits & SolarAPP+',
    permitSources: [
      {
        label: 'City of Murrieta User Fee Schedule, fiscal year 2026/27 (Solar Permit Fees)',
        url: 'https://murrietaca.gov/DocumentCenter/View/14633/FY-2025-26-User-Fee-Schedule---updated-5-29',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Eligible residential roof-mounted systems must be submitted through SolarAPP+ and then the City's Citizen Self Service portal. Homes with zero lot lines do not qualify for SolarAPP+ and file through the portal instead.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'san-diego',
    city: 'San Diego',
    county: 'San Diego County',
    utilityKey: 'sdge',
    cca: 'San Diego Community Power (generation); SDG&E remains the delivery utility',
    permitUrl: 'https://www.sandiego.gov/development-services/forms-publications/information-bulletins/301',
    permitFeeNote:
      "Information Bulletin 301 publishes the actual schedule: a self-certified rooftop system (up to 38.4 kW AC, no fire-plan or structural review) costs a $275.80 first system/inverter inspection fee with no plan-check fee; a system needing full plan review costs a $154.20 plan-check fee plus the $275.80 inspection fee. Since August 8, 2023 the City self-certifies qualifying residential solar and battery permits instantly instead of routing them through staff review, which the City says previously took 7-10 days on average.",
    permitFeeSource: 'City of San Diego Development Services, Information Bulletin 301',
    permitOnline: 'Yes. Self-certified systems issue instantly; other applications are filed online through the Accela portal.',
    sourcesFetchedAt: '2026-09-22',
  },
  {
    slug: 'escondido',
    city: 'Escondido',
    county: 'San Diego County',
    utilityKey: 'sdge',
    // 2026-09-23: the CCA string used to carry its own clause, which broke the
    // template sentence it is dropped into; the source now sits in ccaSource.
    cca: 'Clean Energy Alliance',
    ccaSource: SDGE_ACTIVE_CCAS,
    permitUrl: 'https://www.escondido.gov/1247/Solar-App-Plus',
    permitFeeNote:
      "Escondido's Fee Guide for Development Projects (updated September 16, 2025) sets the base fee for a residential solar photovoltaic permit at $308 for 15 kW or less, and at $450 plus $15 per kW above 15 kW for a larger system, with other applicable fees added per permit. A battery backup storage permit and a residential service panel upgrade are $176 each. SolarAPP+ charges its own processing fee.",
    permitFeeSource: 'City of Escondido, Solar App Plus',
    permitSources: [
      {
        label: 'City of Escondido, Fee Guide for Development Projects (updated September 16, 2025): Commonly Requested Permit Types',
        url: 'https://www.escondido.gov/DocumentCenter/View/8626/2025-Fee-Guide-Updated-9-16-25',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Licensed contractors with an active City of Escondido business license use SolarAPP+ for residential rooftop systems, then apply through the City's online portal, where the permit issues electronically once fees are paid; qualifying projects need no City plan review. Owner-builders and systems SolarAPP+ cannot approve need a regular building permit.",
    sourcesFetchedAt: '2026-09-23',
  },
  // Added 2026-09-18 from the four-region research pass; ledger in
  // 02_Work_Management/Growth_200/city_data_parts/*.csv.
  {
    slug: "anaheim",
    city: "Anaheim",
    county: "Orange County",
    utilityKey: "anaheim",
    // 2026-09-23: anaheim.net sat behind a bot check for every permit and
    // fee page that day, so the permit fields keep their 2026-09-18
    // verification. The platform line adds the CEC's SB 379 data.
    permitUrl: "https://www.anaheim.net/6015/Online-Permit-Center",
    permitFeeNote:
      "Anaheim's Online Permit Center lists a Single Family Residential Small Rooftop Permit Online (Solar Permit Online) option but states no fee. The City's older Residential PV Self-Certification Program packet, dated 2009-2010, attaches a fee schedule listing a minimum electrical permit fee of $136.73 and plan check at $172.39 an hour; this schedule is dated and may not reflect current fees.",
    permitFeeSource: "City of Anaheim Online Permit Center; City of Anaheim Residential PV Self-Certification Program packet (forms B722/B705, dated 2009-2010)",
    permitSources: [CEC_SB379_DATA],
    permitOnline:
      "Yes, for small residential rooftop solar through the City's own Accela-based Online Permit Center (Solar Permit Online). The City's page does not name SolarAPP+, and the California Energy Commission's SB 379 data lists Anaheim's platform as a custom one.",
    sourcesFetchedAt: "2026-09-18",
    // 2026-09-24 (Tier 3): /solar-savings/anaheim 301s here, and "anaheim
    // electric rates" passes Rule 3, so the page now answers it from Anaheim
    // Public Utilities' own residential rates page.
    localRates: {
      heading: 'Electricity provider and rates in Anaheim',
      paragraphs: [
        "Anaheim runs its own electric utility. The California Energy Commission's service-territory map names it the City of Anaheim Public Utilities Department and places 98.7 percent of the city in its territory, so a home in that territory is billed on Anaheim Public Utilities' own schedules.",
        "APU says most homes are on its Standard Domestic Rate: an $8.00 monthly charge, 14.00¢ per kWh for the first 10 kWh a day (the basic residential lifeline allowance, with medical allowance usage at the same 14.00¢), and 21.49¢ per kWh for everything above that. APU puts the average home at 29 kWh a day, so the extra energy a home adds, such as EV charging, is billed at 21.49¢.",
        "The optional Domestic Time-of-Use Rate, APU's Schedule TOU-2, took effect May 1, 2024 under Resolution No. 2024-022. It keeps the $8.00 monthly charge and prices on-peak energy, 4 to 9 p.m. on weekdays except holidays, at 33.20¢ per kWh in summer (July 1 to October 31; APU's rates page shows 33.22¢) and 31.25¢ in winter (November 1 to June 30). Off-peak energy is 16.65¢ in summer and 16.15¢ in winter, and winter super off-peak energy, 8 a.m. to 4 p.m. on weekdays and every hour outside 4 to 9 p.m. on winter weekends and holidays, is 12.00¢.",
        "APU's rates page does not print an effective date for the Standard Domestic Rate, and the Domestic Service schedule it links could not be read on September 24, 2026, so check the rate named on your own bill. A solar savings estimate for an Anaheim home should be built on these APU prices.",
      ],
      faq: {
        question: 'What are electricity rates in Anaheim?',
        answer:
          "Anaheim Public Utilities, the City's own utility, supplies electricity to most of Anaheim. Its Standard Domestic Rate, which APU says most homes are on, is an $8.00 monthly charge plus 14.00¢ per kWh for the first 10 kWh a day and 21.49¢ per kWh above that. The optional time-of-use schedule, TOU-2, effective May 1, 2024, charges 33.20¢ on-peak (4 to 9 p.m. on weekdays) in summer and 31.25¢ in winter, with other hours from 12.00¢ to 16.65¢. APU's rates page and schedule were read September 24, 2026.",
      },
      sources: [
        {
          label: 'Anaheim Public Utilities, Residential Rates (Domestic Rate; Domestic Time-of-Use Rate)',
          url: 'https://www.anaheim.net/6335/Residential-Rates',
          verifiedAt: '2026-09-24',
        },
        {
          label: 'Anaheim Public Utilities, Electric Rate Schedule TOU-2, Domestic Time-of-Use (page 2.10.1 effective May 1, 2024, Resolution No. 2024-022; page 2.10.2 effective March 1, 2022)',
          url: 'https://www.anaheim.net/DocumentCenter/View/25947/Schedule-TOU-2-',
          verifiedAt: '2026-09-24',
        },
        { ...CEC_SERVICE_TERRITORY_SOURCE, verifiedAt: '2026-09-24' },
      ],
    },
  },
  {
    slug: "aptos",
    city: "Aptos",
    county: "Santa Cruz County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    permitUrl: "https://cdi.santacruzcountyca.gov/UPC/BuildingPermitsSafety/ApplyforaBuildingPermit/Solar(PV)SystemBatteryPermits/SolarAPPPlus.aspx",
    permitFeeNote:
      "Aptos is an unincorporated community in Santa Cruz County - permits come from the County, not a city. No dollar amount given; the County's page says \"SolarAPP+ charges a small fee, but Santa Cruz County costs are lower since the solar application is pre-approved.\"",
    permitFeeSource: "County of Santa Cruz SolarAPP+ page",
    permitOnline:
      "Yes, online. SolarAPP+ is explicitly named; contractors upload the SolarAPP+ approval to the County's ePermit system, pay fees, and the permit is issued electronically.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "bakersfield",
    city: "Bakersfield",
    county: "Kern County",
    utilityKey: "pge",
    permitUrl: "https://www.bakersfieldcity.us/278/Applications-Fees",
    permitFeeNote:
      "\"Solar Permit fees using this process are $187.00\" (flat fee for the expedited/SolarAPP-style PV toolkit process); submittal via Standard Electrical Plan for systems \u226410kW",
    permitFeeSource: "City of Bakersfield PV Toolkit Document #1 \u2014 Submittal Requirements Bulletin (content.civicplus.com asset a531a051)",
    permitOnline:
      "yes \u2014 the City's bulletin says applications may be submitted electronically (bldfax@bakersfieldcity.us or online portal) with processing in 1-3 days; the City's page does not name SolarAPP+ specifically",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "california-city",
    city: "California City",
    county: "Kern County",
    utilityKey: "sce",
    permitUrl: "https://www.californiacity-ca.gov/CC/index.php/building/permit-applications-forms/solar-permits",
    permitFeeNote:
      "The City's solar page tells residents to \"submit and obtain a solar or battery energy storage system (BESS) building permit for a residential building\" via SolarAPP+ but does not itemize a fee amount; the city's Master Fee Schedule (effective 5-11-2026) has no standalone PV/solar line item - solar permits fall under the general building-permit fee structure, calculated from \"the most recent edition of the ICC International Code Council Building Valuation Data.\"",
    permitFeeSource: "City of California City Solar Permits page and Master Fee Schedule (5-11-26)",
    permitOnline:
      "Yes, via SolarAPP+, explicitly named and linked on the page",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "camarillo",
    city: "Camarillo",
    county: "Ventura County",
    utilityKey: "sce",
    // 2026-09-23 (Tier 3): the Master Fee Schedule 2026 is now readable.
    cca: "Clean Power Alliance",
    ccaSource: SCE_CCA_LIST,
    permitUrl: "https://www.cityofcamarillo.org/departments/building___safety/index.php",
    permitFeeNote:
      "Camarillo's Master Fee Schedule 2026 (updated February 26, 2026) sets a residential photovoltaic permit at $450 up to 15 kW, plus $15 for each kW above, citing Government Code section 66015. An energy storage system is $206 for the first unit, or $121 when it is included as part of a solar install. Since July 1, 2025 the City adds an 11.34 percent technology surcharge to these fees.",
    permitFeeSource: "City of Camarillo, Building & Safety",
    permitSources: [
      {
        label: 'City of Camarillo, Master Fee Schedule 2026 (updated February 26, 2026), Community Development Exhibit A: 5 Energy Storage Systems; 16 Photovoltaic (Solar)',
        url: 'https://www.cityofcamarillo.org/Master%20Fee%20Schedule%202026%20-%20Updated%202.26.26%20FOR%20WEBSITE.pdf',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Eligible new residential rooftop systems are permitted automatically through SolarAPP+. Systems that include a main panel upgrade or battery storage are not currently eligible for that route and go through the City's regular permit process.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "carlsbad",
    city: "Carlsbad",
    county: "San Diego County",
    utilityKey: "sdge",
    cca: "Clean Energy Alliance",
    // 2026-09-23: CCA membership sourced to SDG&E's own list. The City's
    // SolarAPP+ page returned 403 to every request that day, so the permit
    // fields below keep their 2026-09-18 verification and are reworded only.
    ccaSource: SDGE_ACTIVE_CCAS,
    permitUrl: "https://www.carlsbadca.gov/departments/community-development/building/solarapp",
    permitFeeNote:
      "The City says SolarAPP+ charges a $25 administration fee, paid directly to SolarAPP+ during the application, on top of the City's regular permit fees in its Master Fee Schedule. The first three revisions are free; each one after that costs $25.",
    permitFeeSource: "City of Carlsbad, Residential solar permitting with SolarAPP+",
    permitOnline:
      "Yes. Licensed contractors doing rooftop projects use SolarAPP+, then apply through the City's Customer Self Service portal with the approval.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "chula-vista",
    city: "Chula Vista",
    county: "San Diego County",
    utilityKey: "sdge",
    cca: "San Diego Community Power",
    ccaSource: SDGE_ACTIVE_CCAS,
    permitUrl: "https://www.chulavistaca.gov/departments/development-services/build-green/residential-solar-energy",
    permitFeeNote:
      "Chula Vista's Fee Bulletin 10-400 (September 2024), which the City links as its current photovoltaic fees, lists a SolarAPP+ permit for a single-family home or duplex at $453 ($30 intake, no plan check, $423 inspection) and a traditional permit at $722 ($70 intake, $158 plan check, $494 inspection). A panel upgrade done with a new solar system is $203.",
    permitFeeSource: "City of Chula Vista, Residential Solar Energy Permits",
    permitSources: [
      {
        label: "City of Chula Vista, Master Fee Schedule Fee Bulletin 10-400, Miscellaneous Item Permit Fees (September 2024): Photovoltaic System",
        url: "https://www.chulavistaca.gov/home/showpublisheddocument/2416/638638971096170000",
        verifiedAt: "2026-09-23",
      },
    ],
    permitOnline:
      "Yes. Since June 28, 2023, expedited solar permits must go through SolarAPP+, then the Solar Permit with Solar App Plus application in the City's Citizen Access portal, which returns an approved permit number on submission. Other systems use the standard Residential Solar Energy application online or at the permit counter.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "corona",
    city: "Corona",
    county: "Riverside County",
    utilityKey: "corona",
    permitUrl: "https://www.coronaca.gov/departments/building-division/expedited-permits",
    // 2026-09-23: re-read. The page now carries a Symbium route alongside the
    // expedited plan-check packages.
    permitFeeNote:
      "Corona's Expedited Permits page does not state a dollar figure for a solar permit. It says plan check processing will not begin until the Building Division has confirmed payment of the plan check fees, so ask the Building Division for the current amount.",
    permitFeeSource: "City of Corona, Building Division, Expedited Permits",
    permitSources: [CEC_SB379_DATA],
    permitOnline:
      "Yes, two ways. For a Symbium solar permit, the City has you first verify that the address is inside Corona's city limits, then apply through Symbium and finish in the City's eTRAKiT portal. Expedited plan-check packages for central-inverter and microinverter systems, built from the City's application form, eligibility checklist, standard plan and structural criteria form, can also be submitted in eTRAKiT. The California Energy Commission's SB 379 data lists Corona's platform as Symbium.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "el-cajon",
    city: "El Cajon",
    county: "San Diego County",
    utilityKey: "sdge",
    permitUrl: "https://www.elcajon.gov/your-government/departments/community-development/building-fire-safety/photovoltaic",
    // 2026-09-23: re-fetched. Battery storage became SolarAPP+-eligible in
    // January 2026, and the City's route replaces City inspections with a
    // third-party inspection declaration and a final review.
    permitFeeNote:
      "El Cajon's photovoltaic page does not state a dollar figure. It says the permit is issued electronically as soon as all applicable fees are paid, that SolarAPP+ includes three free revisions, and that fee questions go to Building Safety at 619-441-1726 or Building@elcajon.gov.",
    permitFeeSource: "City of El Cajon, Photovoltaic (SolarAPP+) page",
    permitOnline:
      "Yes. Licensed contractors get SolarAPP+ pre-approval, then apply on the City's SolarAPP+ permit site, where the permit issues once fees are paid. Adding a battery energy storage system has been eligible through SolarAPP+ since January 2026.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "el-dorado-hills",
    city: "El Dorado Hills",
    // 2026-09-23: the county and CCA fields used to carry whole sentences,
    // which the template drops into a badge and a sentence of its own.
    county: "El Dorado County",
    utilityKey: "pge",
    cca: "Pioneer Community Energy",
    ccaSource: {
      label: "Pioneer Community Energy, About Us (serves most of unincorporated El Dorado County)",
      url: "https://pioneercommunityenergy.org/about-us/",
      verifiedAt: "2026-09-23",
    },
    permitUrl: "https://www.eldoradocounty.ca.gov/Land-Use/Building-Services/Building-Services-Hub/Residential-Solar-Permits",
    permitFeeNote:
      "El Dorado Hills is an unincorporated community, so its solar permits come from El Dorado County, not a city. The County's instant residential solar permit page says the Symbium platform carries a service charge but does not state it or the County's permit fee.",
    permitFeeSource: "County of El Dorado, Instantaneous Residential Solar Permits",
    permitOnline:
      "Yes. The County issues residential solar permits through Symbium for residential parcels in unincorporated El Dorado County, with processing of about one to three business days. Parcels in airport review zones or flood zones, or needing eligibility review, submit in person at one of the County's two offices.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "fresno",
    city: "Fresno",
    county: "Fresno County",
    utilityKey: "pge",
    permitUrl: "https://www.fresno.gov/planning/get-an-instantly-approved-solar-permit-through-solar-app/",
    // 2026-09-23: updated to the fee schedule effective July 1, 2026. The
    // per-kW figure is an inspection fee, not plan check as the 2026-09-18
    // row had it.
    permitFeeNote:
      "Fresno's Master Fee Schedule, with fees effective July 1, 2026, charges a residential photovoltaic system $170.37 for plan check and $162.85 for inspection covering the first 15 kW, plus $11.27 in inspection fees for each additional kW. The schedule adjusts these fees every July 1 by the change in a Consumer Price Index, so a figure quoted before July 2026 may be last year's.",
    permitFeeSource: "City of Fresno, SolarAPP+ instantly approved solar permits page",
    permitSources: [
      {
        label: "City of Fresno Master Fee Schedule, Planning & Development fees (fees effective July 1, 2026): Photovoltaic Systems",
        url: "https://www.fresno.gov/wp-content/uploads/2026/07/MFS-Planning_593_CPI_CPI-UGM_CPI-Parking-ED-2026.07.01-10w1657-10w1683.pdf",
        verifiedAt: "2026-09-23",
      },
    ],
    permitOnline:
      "Yes. Single-family and duplex projects can use SolarAPP+ and then the City's Accela Citizens Access portal. Commercial systems do not qualify for SolarAPP+ and apply for a standard solar permit in the same portal.",
    sourcesFetchedAt: "2026-09-23",
    // 2026-09-24 (Tier 3): /solar-savings/fresno 301s here, and "electricity
    // rates fresno" passes Rule 3, so the page now answers it from PG&E's
    // own tariffs.
    localRates: {
      heading: 'Electricity provider and rates in Fresno',
      paragraphs: [
        "PG&E supplies both generation and delivery in Fresno. The California Energy Commission's service-territory map places the whole city in PG&E's territory, and PG&E's list of community choice aggregators names none serving Fresno, so the rates below are the bundled PG&E prices a Fresno bill uses.",
        "On E-1, PG&E's tiered residential schedule, energy costs $0.32561 per kWh up to the home's baseline allowance and $0.40702 per kWh above it. On E-TOU-C, which treats 4 to 9 p.m. every day as peak, summer energy (June 1 through September 30) is $0.52240 per kWh at peak and $0.39940 off-peak, and winter energy is $0.39757 and $0.36757, with a $0.08140 per kWh credit on baseline usage. Both schedules add a base services charge, $0.79343 a day for a household that does not qualify for the two lower income tiers. These rates took effect June 1, 2026.",
        "The baseline allowance is set by territory, and that is where a Fresno bill differs from one elsewhere in PG&E's territory. PG&E's Preliminary Statement Part A puts the part of Fresno County below 3,500 feet in baseline territory R, and the U.S. Geological Survey puts a point near the center of the city at about 310 feet. In territory R, E-1's basic baseline is 17.7 kWh a day in summer and 10.4 kWh a day in winter, or 19.9 and 26.7 kWh for an all-electric home.",
        "A solar quote's savings estimate should say which of these schedules it assumes, because the same kWh is priced differently on each.",
      ],
      faq: {
        question: 'What are electricity rates in Fresno?',
        answer:
          "Fresno is served by PG&E for both generation and delivery. Since June 1, 2026, PG&E's tiered E-1 schedule charges $0.32561 per kWh within the baseline allowance and $0.40702 above it, plus a base services charge of $0.79343 a day for households outside the two lower income tiers. Fresno sits in PG&E baseline territory R, where the basic summer allowance is 17.7 kWh a day and the winter allowance 10.4 kWh. The time-of-use schedule E-TOU-C charges $0.52240 per kWh from 4 to 9 p.m. in summer.",
      },
      sources: [
        {
          label: 'PG&E, Electric Schedule E-1, Residential Services (total bundled rates effective June 1, 2026, Advice 7921-E; baseline quantities by territory)',
          url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_E-1.pdf',
          verifiedAt: '2026-09-24',
        },
        {
          label: 'PG&E, Electric Schedule E-TOU-C, Residential Time-of-Use (Peak Pricing 4-9 p.m. Every Day) (total bundled rates effective June 1, 2026, Advice 7921-E)',
          url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_SCHEDS_E-TOU-C.pdf',
          verifiedAt: '2026-09-24',
        },
        {
          label: 'PG&E, Electric Preliminary Statement Part A (baseline territories by county and elevation: Fresno County under 3,500 feet, territory R)',
          url: 'https://www.pge.com/tariffs/assets/pdf/tariffbook/ELEC_PRELIM_A.pdf',
          verifiedAt: '2026-09-24',
        },
        {
          label: 'U.S. Geological Survey, Elevation Point Query Service (Census internal point of the City of Fresno, 36.7829, -119.7936: about 310 feet)',
          url: 'https://epqs.nationalmap.gov/v1/json?x=-119.7936074&y=36.7829379&wkid=4326&units=Feet&includeDate=false',
          verifiedAt: '2026-09-24',
        },
        { ...PGE_CCA_LIST, verifiedAt: '2026-09-24' },
        { ...CEC_SERVICE_TERRITORY_SOURCE, verifiedAt: '2026-09-24' },
      ],
    },
  },
  {
    slug: "grass-valley",
    city: "Grass Valley",
    county: "Nevada County",
    utilityKey: "pge",
    // 2026-09-23 (Tier 3): the linked fee schedule is now quoted, as dated.
    cca: "Pioneer Community Energy",
    ccaSource: PIONEER_ABOUT,
    permitUrl: "https://www.grassvalleyca.gov/pod/solarapp-submittals",
    permitFeeNote:
      "Grass Valley's SolarAPP+ page says applicants pay a $25 administration fee to SolarAPP+ and that separate City fees for a solar permit are charged through the building permit application. The fee schedule the Building page links is for fiscal year 2021/22, effective August 5, 2021, and lists residential solar at $373.00 with plan review and one final inspection; confirm the current amount with the City.",
    permitFeeSource: "City of Grass Valley, SolarAPP+ Submittals",
    permitSources: [
      {
        label: 'City of Grass Valley, Fee Schedule Fiscal Year 2021/2022 (Resolutions 2021-39 and 2021-44, effective August 5, 2021), item 238 Residential Solar',
        url: 'https://www.grassvalleyca.gov/sites/main/files/file-attachments/fee_schedule_21-22_0.pdf',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. After SolarAPP+ approval, the permit is applied for in Accela Citizen Access under Express Permit applications, with the SolarAPP+ approval ID and documents uploaded, and inspections are scheduled in the same portal.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "hollister",
    city: "Hollister",
    county: "San Benito County",
    utilityKey: "pge",
    // 2026-09-24 (Tier 3): the Building Division's current fee schedule,
    // effective August 18, 2025, is a scanned PDF; its solar line was read by
    // OCR and checked against the page image. CCA sourced to 3CE's own list.
    cca: "Central Coast Community Energy (3CE)",
    ccaSource: CCE_MEMBERS,
    permitUrl: "https://hollister.ca.gov/government/development_services/solar_permits_for_photovoltaic_(pv)_systems_and_ev_charging_stations.php",
    permitFeeNote:
      "Hollister's Building Division fee schedule, effective August 18, 2025, lists a flat $400.00 fee for a solar photovoltaic permit. The schedule marks it as subject to the state's Strong Motion Instrumentation fee and California Building Standards fee, both calculated on the project's valuation, and says 65 percent of a building permit fee is paid as a plan review deposit at submittal, with the rest at issuance. A standard reroof is a separate $495.00 permit.",
    permitFeeSource: "City of Hollister, Solar Permits for Photovoltaic (PV) Systems and EV Charging Stations",
    permitSources: [
      {
        label: "City of Hollister, Building Division Fee Schedule, effective August 18, 2025 (Solar - Photovoltaic; Standard Reroof; plan review deposit), linked as the Building Division 2025 Fee Schedule",
        url: "https://hollister.ca.gov/Community%20Development%20Department/Building/Building%20Fee%20Schedule%202025.pdf",
        verifiedAt: "2026-09-24",
      },
      {
        label: "City of Hollister, Application Forms and Fees (Building Division forms and Permit Center submittal appointments)",
        url: "https://hollister.ca.gov/government/departments/development_services/application_forms_and_fees.php",
        verifiedAt: "2026-09-24",
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "No online solar route is described. Hollister's Building Division pages offer no online or automated permit filing: the City's solar page lists only the building permit application, and the forms page books submittal appointments with the Permit Center. The California Energy Commission's SB 379 data, which each city reports itself, lists Hollister as without a platform, with a September 2024 deadline.",
    sourcesFetchedAt: "2026-09-24",
  },
  {
    slug: "lincoln",
    city: "Lincoln",
    county: "Placer County",
    utilityKey: "pge",
    cca: "Pioneer Community Energy \u2014 Lincoln is a founding member jurisdiction; Pioneer's board includes \"locally elected representatives from El Dorado and Placer County Boards of Supervisors, and the City Councils of Auburn, Colfax, Grass Valley, Lincoln, Placerville, Rocklin, Nevada City, and the Town Council of Loomis\"",
    permitUrl: "https://www.lincolnca.gov/business-and-development/get-a-permit/solar-energy-storage-permit-and-ev-charger/",
    permitFeeNote:
      "Master Fee Schedule lists: \"Residential Solar < 10 kW \u2014 Residential Solar Photovoltaic System - Solar Permit - all inclusive up to 15kW: $450 per permit\" and \"Above 15kW \u2013 per kW: $15 per permit\"",
    permitFeeSource: "City of Lincoln Master Fee Schedule (adopted by City Council 11-12-2024)",
    permitOnline:
      "yes \u2014 online filing via the Symbium portal for SB 379 instantaneous plan review (\"Apply Online for a residential solar or energy storage permit\"); the City's page does not name SolarAPP+",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "livermore",
    city: "Livermore",
    county: "Alameda County",
    utilityKey: "pge",
    cca: "Ava Community Energy",
    ccaSource: AVA_COMMUNITIES,
    permitUrl: "https://www.livermoreca.gov/departments/community-development/permit-center/residential-photovoltaic/solarapp",
    permitFeeNote:
      "Livermore's SolarAPP+ page does not state a dollar figure. It says SolarAPP+ charges a processing fee, and that the City emails the approved permit and receipt once the City's fee is paid.",
    permitFeeSource: "City of Livermore, SolarApp+ (Permit Center)",
    permitOnline:
      "Yes. Single-family, roof-mounted retrofit systems go through SolarAPP+, then a Solar Permit with SolarAPP+ application in the City's Online Permitting system, which Permit Center staff review before approval. An active City of Livermore business license is required.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "manteca",
    city: "Manteca",
    county: "San Joaquin County",
    utilityKey: "pge",
    permitUrl: "https://www.manteca.gov/230/Instant-Residential-Solar-Energy-Storage",
    // 2026-09-23: fee now read from the building fee table in the City's
    // municipal code (Title FS).
    permitFeeNote:
      "The building permit fees in Manteca's municipal code list a residential rooftop solar photovoltaic permit at $378 per application, an energy storage system at $304 and a residential electrical panel at $119, plus a plan retention and technology fee of 5 percent of the permit fee. The City's instant permit page says fees are paid online before the permit issues but does not state them.",
    permitFeeSource: "City of Manteca, Instant Residential Solar & Energy Storage System Permits",
    permitSources: [
      {
        label: "Manteca Municipal Code, Title FS: Fee Schedules (building permit fees: Residential)",
        url: "https://ecode360.com/44093610",
        verifiedAt: "2026-09-23",
      },
    ],
    permitOnline:
      "Yes. Rooftop solar and battery storage permits are issued instantly online through Symbium, which checks code compliance automatically, and inspections are scheduled through the City's Citizen Access portal.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "marina",
    city: "Marina",
    county: "Monterey County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    permitUrl: "https://www.cityofmarina.org/122/Building-Services",
    permitFeeNote:
      "The Building Division page does not itemize solar fees or mention SolarAPP+; it points to a general Online Permitting Portal (HDL) and a separate Fee Schedule page. The City of Marina Fee Schedule (Reso. No. 2025-99, effective Oct 6, 2025) lists under Building & Safety, Mechanical/Electrical/Plumbing Permit Fees: \"Combo Permit: Solar System - SFR $170, Non-SFR $492\"; the Fire fee schedule separately lists \"Fire Photovoltaic Syst. Plan Review - $121 per plan.\"",
    permitFeeSource: "City of Marina Building Division page; City of Marina Fee Schedule, City Reso. No. 2025-99 (effective 10/6/2025)",
    permitOnline:
      "Yes for general building permits via the city's HDL Online Permitting Portal (requires a City of Marina business license for contractors); the City's page does not mention SolarAPP+ specifically.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "modesto",
    city: "Modesto",
    county: "Stanislaus County",
    utilityKey: "mid",
    // 2026-09-23: the fiscal year 25-26 fee PDF this row used to link now
    // returns 404; the City's Building Safety Fees page carries the 2026-27
    // table. The platform is now read from the CEC's SB 379 data.
    permitUrl: "https://www.modestogov.com/3308/Building-Safety-Fees",
    permitFeeNote:
      "Modesto's Building Safety fee table for July 1, 2026 to June 30, 2027 lists a residential electrical photovoltaic permit at $333.00 per permit, due when you apply. A commercial photovoltaic permit is a $1,098.00 deposit.",
    permitFeeSource: "City of Modesto, Building Safety Fees (effective July 1, 2026 to June 30, 2027)",
    permitSources: [CEC_SB379_DATA],
    permitOnline:
      "Yes. Modesto's Building Safety Division takes permits online through its eTRAKiT permits portal, and the California Energy Commission's SB 379 data lists Modesto's automated solar permitting platform as SolarAPP+. The City's pages checked do not describe the solar route step by step.",
    sourcesFetchedAt: "2026-09-23",
    // Added 2026-09-22: MID's own service-area statement stops at the
    // Tuolumne River, and the CEC layer places part of the city in TID.
    // Both re-checked 2026-09-23.
    utilitySplit: {
      others: "TID",
      note:
        "The Modesto Irrigation District describes its electric service area as including the greater Modesto area north of the Tuolumne River, and the California Energy Commission's service-territory map places part of Modesto in the Turlock Irrigation District's territory. Neither is PG&E. Read the utility name on your bill before using either district's rates or solar rules.",
      sources: [
        {
          label: "Modesto Irrigation District, Who We Are (electric service area)",
          url: "https://www.mid.org/about-us/who-we-are/",
          verifiedAt: "2026-09-23",
        },
        CEC_SERVICE_TERRITORY_SOURCE_0923,
      ],
    },
    extraFaqs: [
      {
        question: "How does MID treat rooftop solar in Modesto?",
        answer:
          "Where the Modesto Irrigation District serves the address, MID, not PG&E, sets the solar terms. MID says it currently offers only NEM 2.0 and credits energy a system pushes back to its grid at 7.6 cents per kWh, shown as a negative amount on the monthly bill. It caps a system at 115 percent of the meter's annual demonstrated load, charges a $900 interconnection fee for a system under 100 kW AC per meter, and says it normally performs its interconnection inspection within 12 working days.",
      },
    ],
  },
  {
    slug: "monterey",
    city: "Monterey",
    county: "Monterey County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    ccaSource: CCE_MEMBERS,
    permitUrl: "http://monterey.gov/your_city_hall/departments/community_development/building_and_safety_services/",
    permitFeeNote:
      "Monterey's Master Fee Schedule for fiscal year 2026/2027, effective July 1, 2026, lists a residential solar/PV installation permit under 10 kW at $450, noting that the State sets residential solar permit fees for 10 kW and under. It also exempts solar arrays from architectural review, historic preservation, use permit and variance fees, and adds a 2.9 percent merchant service fee to card payments. The City's permit portal calculates the fee as the application is completed.",
    permitFeeSource: "City of Monterey, Building and Safety Services",
    permitSources: [
      {
        label: "City of Monterey, Master Fee Schedule, fiscal year 2026/2027, effective July 1, 2026 (Residential Solar/PV Installation Permit)",
        url: "https://monterey.gov/Document-Center/Departments/Finance/Schedule-of-Fees-Fines/Master-Fee-Schedule.pdf",
        verifiedAt: "2026-09-23",
      },
      {
        label: "City of Monterey, Solar Photovoltaic (PV) Systems Expedited Submittal Checklist (rev. 12/30/2024)",
        url: "https://monterey.gov/Document-Center/Departments/Community-Development/Building-Safety/Building-Forms/Solar-Checklist.pdf?t=202509301228390",
        verifiedAt: "2026-09-23",
      },
      {
        label: "County of Monterey, SolarApp+ for Solar Installers",
        url: "https://www.countyofmonterey.gov/government/departments-a-h/housing-community-development/permit-center/online-permit-information/solarapp-for-solar-installers",
        verifiedAt: "2026-09-23",
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. Since January 7, 2026, solar PV permits can be filed through the City's online portal (mymontereyportal.org), which identifies the reviews and calculates the fees from the applicant's answers. The City's page does not name SolarAPP+, though the California Energy Commission's SB 379 data lists Monterey's platform as SolarAPP+.",
    sourcesFetchedAt: "2026-09-23",
    extraFaqs: [
      {
        question: "How much does solar panel installation cost in Monterey County?",
        answer:
          "No public source prices an installation for the county. What varies by address is who permits the work and what they charge. Inside the City of Monterey the residential solar permit under 10 kW is $450 in the 2026/2027 fee schedule, with solar arrays exempt from the City's architectural and historic review fees. The County of Monterey permits the homes under its jurisdiction and runs its own SolarAPP+ route through its Citizen Access portal. Central Coast Community Energy counts the City and the County of Monterey among its members, with PG&E delivering the power and sending the bill.",
      },
    ],
  },
  {
    slug: "napa",
    city: "Napa",
    county: "Napa County",
    utilityKey: "pge",
    // 2026-09-23 (Tier 3): fee now quoted from the Master Fee Schedule
    // effective July 1, 2025; CCA sourced to MCE's own member list.
    cca: "MCE",
    ccaSource: MCE_ABOUT,
    permitUrl: "https://www.cityofnapa.org/1037/Solar-PV",
    permitFeeNote:
      "Napa's Master Fee Schedule, effective July 1, 2025, lists a residential solar photovoltaic permit and inspection at $472, based on a 10 kW system and including the minimum electrical permit processing fee, and notes a maximum fee of $500. A Fire Prevention plan check review for a residential system, $85, is charged in addition.",
    permitFeeSource: "City of Napa, Solar PV (Building Division)",
    permitSources: [
      {
        label: 'City of Napa, Master Fee Schedule effective July 1, 2025 (2.2.47a Residential Solar Photovoltaic Permit & Inspection; 6.11.17 Fire Prevention plan check review)',
        url: 'https://www.cityofnapa.org/Archive.aspx?ADID=245',
        verifiedAt: '2026-09-23',
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "No. Residential solar and battery backup permits are handled over the counter, by walk-in, Monday through Thursday from 8:30 a.m. to 3:30 p.m., and no permit is issued without an active City of Napa business license. The California Energy Commission's SB 379 data lists the City of Napa as without an automated solar permitting platform.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "oceanside",
    city: "Oceanside",
    county: "San Diego County",
    utilityKey: "sdge",
    cca: "Clean Energy Alliance",
    ccaSource: SDGE_ACTIVE_CCAS,
    permitUrl: "https://www.ci.oceanside.ca.us/government/development-services/building/solarapp",
    permitFeeNote:
      "Oceanside's SolarAPP+ page says SolarAPP+ charges a $25 processing fee that covers up to three revisions, and that City permit fees are paid online when the permit is applied for; it does not state the City's amount. The City adds that it may charge fees for a resubmittal, as it does for a re-inspection.",
    permitFeeSource: "City of Oceanside, SolarAPP+ (Development Services, Building)",
    permitOnline:
      "Yes. C-10 and C-46 contractors registered with SolarAPP+ apply in the City's online permitting portal under the BLD SOLAR APP PV permit type, upload the approval, pay and receive the permit right away. Permit runners and B-license holders cannot use SolarAPP+.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "pacific-grove",
    city: "Pacific Grove",
    county: "Monterey County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    permitUrl: "https://www.cityofpacificgrove.gov/our_city/departments/community_development/planning/SolarAppPlus.php",
    permitFeeNote:
      "The City's own page states plainly: \"The Solar App+ System is not in service at this time for the City of Pacific Grove.\" In the absence of SolarAPP+'s automated fee calculation, the City's Master Fee Schedule (Community Development fees effective 11/4/2024) lists a flat \"Solar voltaic system\" fee of $670 under Miscellaneous Building Permits.",
    permitFeeSource: "City of Pacific Grove SolarAppPlus.php page and Master Fee Schedule (Community Development fees effective 11/4/2024)",
    permitOnline:
      "No. The City's own page states that SolarAPP+ is not in service for Pacific Grove at this time; applicants apply through the City's online Solar Permit Application portal (portal.iworq.net) or an over-the-counter form instead.",
    sourcesFetchedAt: "2026-09-22",
  },
  {
    slug: "petaluma",
    city: "Petaluma",
    county: "Sonoma County",
    utilityKey: "pge",
    // 2026-09-23 (Tier 3): re-read with the City's SolarAPP+ FAQ; CCA sourced
    // to Sonoma Clean Power's own page.
    cca: "Sonoma Clean Power",
    ccaSource: SCP_WHO,
    permitUrl: "https://cityofpetaluma.org/solar-permit/",
    permitFeeNote:
      "Petaluma's SolarAPP+ page says SolarAPP+ charges a one-time $25.00 processing fee, which covers up to three revisions, and that the City's application fee is separate and the same as for a regular solar permit, without stating that amount. If the main panel is modified, the City also charges its Electrical Service, Meter Replacement fee.",
    permitFeeSource: "City of Petaluma, SolarApp+ Solar Permit",
    permitSources: [
      {
        label: 'City of Petaluma, SolarAPP+ Solar Permit FAQs (fees, panel upgrades, revisions)',
        url: 'https://cityofpetaluma.org/solarapp-solar-permit-faqs/',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Licensed contractors registered with SolarAPP+ can permit a rooftop system on a permitted main dwelling the same day, then apply in the City's online permit portal with the SolarAPP+ approval ID, plans and contractor disclosure form. Ballasted systems, homes in a City flood zone and permit runners cannot use SolarAPP+.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "rancho-cordova",
    city: "Rancho Cordova",
    county: "Sacramento County",
    utilityKey: "smud",
    permitUrl: "https://www.cityofranchocordova.org/departments/community-development/building-and-safety/forms-and-downloads",
    permitFeeNote:
      "No dollar amount found on the forms/downloads page or the Building Permit Fee Estimates page; both state SolarAPP+ automates plan review but do not list a specific solar fee figure. Page directs applicants to the general \"Building Permit Fee Estimates\" tool for pricing",
    permitFeeSource: "City of Rancho Cordova Forms and Downloads / Building Permit Fee Estimates pages",
    permitOnline:
      "yes \u2014 SolarAPP+ explicitly named (\"SolarAPP+ automates the plan review and process for issuing permits to individuals to install code-compliant residential photovoltaic (PV) systems\"); City's own EnerGov online self-service portal used for permit submission",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "rancho-cucamonga",
    city: "Rancho Cucamonga",
    county: "San Bernardino County",
    utilityKey: "sce",
    permitUrl: "https://www.cityofrc.us/community-development/building-safety/solar-permits",
    permitFeeNote:
      "Official Community Development Fees schedule (Rev 2-5-2024, effective July 1 2023) lists: \"Solar/photovoltaic up to 15 Kw - Residential $173\" and \"ea Kw over 15 Kw-Residential $12\"; commercial rates listed separately ($1,000 for 0-250kW, plus $5/kW over 250kW).",
    permitFeeSource: "City of Rancho Cucamonga Community Development Fees schedule (Rev 2-5-2024)",
    permitOnline:
      "Yes, via the city's Online Permit Center; SolarAPP+ named and available for single-family/duplex residential projects (all other projects must use the standard online permit center)",
    sourcesFetchedAt: "2026-09-18",
    // Added 2026-09-22: the City's RCMU page names SCE as the main provider
    // and RCMU as serving a selected southeastern area.
    utilitySplit: {
      others: "RCMU",
      note:
        "The City of Rancho Cucamonga says Southern California Edison is the main electric provider in the city, and that its own Rancho Cucamonga Municipal Utility (RCMU) serves over 3,900 metered businesses and residents in a selected area in the southeastern part of the city. Read the utility name on your bill before using an SCE rate.",
      sources: [
        {
          label: "City of Rancho Cucamonga, Welcome to RCMU",
          url: "https://www.cityofrc.us/rcmu",
          verifiedAt: "2026-09-22",
        },
      ],
    },
  },
  {
    slug: "roseville",
    city: "Roseville",
    county: "Placer County",
    utilityKey: "roseville",
    permitUrl: "https://www.roseville.ca.gov/development_services/building/solarapp.php",
    // 2026-09-23: re-fetched. The FY25 schedule the 2026-09-18 row quoted is
    // superseded; the schedule effective July 1, 2026 prices PV permits from a
    // set valuation and states no flat solar fee.
    permitFeeNote:
      "Roseville's SolarAPP+ page says the City's building permit fees are currently $1,349.49, on top of a $25 processing fee charged by SolarAPP+. The City's Schedule of User and Regulatory Fees, effective July 1, 2026, calculates photovoltaic permit fees from a set valuation of $19,000 rather than from the project's actual cost.",
    permitFeeSource: "City of Roseville, SolarAPP+ (Development Services, Building)",
    permitSources: [
      {
        label: "City of Roseville, Schedule of User and Regulatory Fees, effective July 1, 2026 (Building: photovoltaic set valuation)",
        url: "https://www.roseville.ca.gov/Documents/Development%20Services/Building/Development%20Impact%20Fees/Schedule%20of%20User%20and%20Regulatory%20Fees.pdf?t=202602270808160",
        verifiedAt: "2026-09-23",
      },
    ],
    permitOnline:
      "Yes. The design goes through SolarAPP+, then the permit is applied for as a SolarAPP+ Permit in the City's online portal. The route needs Roseville Electric pre-approval, excludes main panel upgrades, ballasted systems and homes in a City flood zone, and is open only to contractors with a C-10, C-46 or B license and a City business license.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "salinas",
    city: "Salinas",
    county: "Monterey County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    permitUrl: "https://www.salinas.gov/Residents/Permit-Center/Permit-Services",
    permitFeeNote:
      "The City's SolarApp+ page says contractors must \"Pay the processing fee charged by SolarApp+\" but does not itself state a dollar amount. The City of Salinas Schedule of Fees and Charges (FY 2025-26) lists: Solar Plan Check Residential $215.00, Solar Permit Fee Residential $152.00, Solar Plan Check Commercial $564.00, Solar Permit Fee Commercial $867.00 (each noted \"Must match state fees rate\"), plus a $100.00 Solar Cancellation Charge.",
    permitFeeSource: "City of Salinas Permit Services page; City of Salinas Schedule of Fees and Charges for City Services, effective July 1, 2025",
    permitOnline:
      "Yes, via SolarAPP+ for eligible residential rooftop systems; applicants register with SolarAPP+, then upload the approval to the city's eTRAKiT portal.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "san-jose",
    city: "San Jose",
    county: "Santa Clara County",
    utilityKey: "pge",
    cca: "San Jose Clean Energy",
    ccaSource: PGE_CCA_LIST,
    permitUrl: "https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/solar-storage-battery-projects",
    // 2026-09-23: fee basis now read from the Building Division's own
    // 2026-27 schedule, which prices electrical permits by inspection time.
    permitFeeNote:
      "San Jose's solar page says SJPermits.org shows the permit fee and takes payment for permits issued online, but it does not state the amount. The Building Division's fee schedule for fiscal year 2026-27, effective August 10, 2026, charges electrical permits at $315 per hour of required inspection time or by item, whichever is greater, and allocates a minimum of 60 minutes of inspection time to a single-family photovoltaic system. Those fees are in addition to the permit issuance fee, which the schedule sets at $211 per hour of processing time or the listed amount, whichever is greater.",
    permitFeeSource: "City of San Jose, Solar & Storage Battery Projects",
    permitSources: [
      {
        label: "City of San Jose, Building and Structure Permits Fee Schedule, fiscal year 2026-27, effective August 10, 2026 (Electrical Permits: Photovoltaic System, Single Family)",
        url: "https://www.sanjoseca.gov/home/showpublisheddocument/26047/639219591833200000",
        verifiedAt: "2026-09-23",
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. A rooftop system on a single-family home, duplex or townhouse can be permitted online at SJPermits.org if the panels weigh under 5 pounds per square foot with frame, put under 40 pounds on each support point, sit no more than 18 inches above the roof and are not ballasted; the City inspector reviews the electrical plan on site at inspection. Other projects go through the City's Standard Plan Review. The City does not name SolarAPP+, and the California Energy Commission's SB 379 data lists San Jose's platform as a custom one.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "san-luis-obispo",
    city: "San Luis Obispo",
    county: "San Luis Obispo County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    ccaSource: {
      label: "City of San Luis Obispo, Community Choice Energy (3CE service since January 2020)",
      url: "https://www.slocity.org/government/department-directory/city-administration/office-of-sustainability-and-natural-resources/climate-action/community-choice-energy",
      verifiedAt: "2026-09-23",
    },
    permitUrl: "https://www.slocity.org/government/department-directory/community-development/building-safety/permit-forms-and-applications/solar-documents",
    permitFeeNote:
      "San Luis Obispo's Comprehensive Fee Schedule, effective July 1, 2026, lists a residential roof-mount photovoltaic system at $332.50, which includes the City's 3.05 percent information technology surcharge. SolarAPP+ separately charges $35 to review a solar-only application and $60 for solar plus storage.",
    permitFeeSource: "City of San Luis Obispo, Solar Information (Building & Safety)",
    permitSources: [
      {
        label: "City of San Luis Obispo, Comprehensive Fee Schedule, fiscal year 2026-2027, effective July 1, 2026 (Building fees: Photovoltaic Systems, residential roof mount)",
        url: "https://www.slocity.org/home/showpublisheddocument/39182/639177350208630000",
        verifiedAt: "2026-09-23",
      },
    ],
    permitOnline:
      "Yes. After SolarAPP+ review, the approval is uploaded to the City's InfoSLO portal under the Photovoltaic (SolarAPP) application, and the permit is auto-issued within about a minute of paying the invoice. Inspections are scheduled online.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "san-marcos",
    city: "San Marcos",
    county: "San Diego County",
    utilityKey: "sdge",
    // 2026-09-23 (Tier 3): the Development Fees schedule effective September
    // 1, 2026 is now readable, so the fee is quoted from it.
    cca: "Clean Energy Alliance",
    ccaSource: SDGE_ACTIVE_CCAS,
    permitUrl: "https://www.sanmarcosca.gov/Business-Services/Building-Division/Solar-Permits",
    permitFeeNote:
      "San Marcos's Development Fees schedule, effective September 1, 2026, lists a residential solar system on a roof at $57 for plan check plus $67 for the permit, $124 in all, and an energy storage system at $52. A carport with solar is $980 for plan check plus $454 for the permit. SolarAPP+ charges its own processing fee.",
    permitFeeSource: "City of San Marcos, Solar Permits (Building Division)",
    permitSources: [
      {
        label: 'City of San Marcos, Development Fees, effective September 1, 2026 (Building: Residential Solar System on Roof; Carport w/ Solar; Electrical: Energy storage system)',
        url: 'https://www.sanmarcosca.gov/files/assets/city/v/2/development-svs/fees/development-fees-schedule-september-2026.pdf',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. A homeowner can use the City's standard central-inverter or micro-inverter plans and apply online under \"Roof Mounted Solar PV Expedited\", which the City estimates at 1-3 business days. Contractors use SolarAPP+, need a City of San Marcos business license and attach a permit declaration form in the City's online permitting system, without which no inspection can be scheduled. Systems that qualify for neither submit full plans online, estimated at 5-10 business days.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "santa-cruz",
    city: "Santa Cruz",
    county: "Santa Cruz County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    ccaSource: CCE_MEMBERS,
    permitUrl: "https://www.santacruzca.gov/Government/City-Departments/Community-Development/Building-Safety/SolarApp",
    permitFeeNote:
      "Santa Cruz's Planning and Community Development fee schedule, effective January 1, 2026, sets a residential solar permit at $360 for a system up to 15 kW plus $24 for each kW above 15 kW, and marks both for the City's 6 percent technology surcharge. SolarAPP+ charges its own processing fee.",
    permitFeeSource: "City of Santa Cruz, SolarApp+ (Building & Safety)",
    permitSources: [
      {
        label: "City of Santa Cruz, Planning & Community Development Department Fee Schedule, January 1 to December 31, 2026 (Solar Permits, PL-BLD142 and PL-BLD143)",
        url: "https://www.santacruzca.gov/files/assets/city/v/4/pl/documents/pl-fee-schedule-effective-1-1-26.pdf",
        verifiedAt: "2026-09-23",
      },
      {
        label: "County of Santa Cruz, SolarAPP+ (County ePermit process)",
        url: "https://cdi.santacruzcountyca.gov/UPC/BuildingPermitsSafety/ApplyforaBuildingPermit/Solar(PV)SystemBatteryPermits/SolarAPPPlus.aspx",
        verifiedAt: "2026-09-23",
      },
    ],
    permitOnline:
      "Yes, for licensed contractors installing new rooftop solar on detached one- and two-family homes, townhomes and their accessory structures. After SolarAPP+ approval the City emails a permit number, fees are paid online and inspections are booked by phone. Owner-builders, and properties in a flood zone or with an open code case or voided permit, take the regular plan-check route.",
    sourcesFetchedAt: "2026-09-23",
    extraFaqs: [
      {
        question: "How much does solar panel installation cost in Santa Cruz County?",
        answer:
          "No public source prices an installation for the county. What varies by address is who permits the work and what they charge. Inside the City of Santa Cruz the residential solar permit is $360 up to 15 kW in the 2026 fee schedule, plus $24 per kW above that and a technology surcharge. The County of Santa Cruz runs its own SolarAPP+ and ePermit process for rooftop systems up to 38.4 kW on the homes it permits, and says its costs are lower for these pre-approved applications. Central Coast Community Energy's members include the County of Santa Cruz and its cities, with PG&E delivering the power and sending the bill.",
      },
    ],
  },
  {
    slug: "santa-rosa",
    city: "Santa Rosa",
    county: "Sonoma County",
    utilityKey: "pge",
    cca: "Sonoma Clean Power",
    ccaSource: {
      label: "Sonoma Clean Power, Solar Billing Plan (public power provider for Sonoma and Mendocino counties)",
      url: "https://sonomacleanpower.org/solar-billing-plan",
      verifiedAt: "2026-09-23",
    },
    permitUrl: "https://www.srcity.org/3826/Solar-Panel-Installation",
    permitFeeNote:
      "Santa Rosa's solar page does not state a dollar figure for the City's permit; it says SolarAPP+ charges its own processing fee. The City's code for small rooftop systems adds that resubmitted applications, and a re-inspection after a failed inspection, may carry additional fees. The City's fee schedule page could not be read when checked.",
    permitFeeSource: "City of Santa Rosa, Solar Panel Installation",
    permitSources: [
      {
        label: "Santa Rosa City Code, Chapter 18-68, Expedited Permit Process for Small Residential Rooftop Solar Energy Systems (section 18-68.060)",
        url: "https://ecode360.com/42967322",
        verifiedAt: "2026-09-23",
      },
    ],
    permitOnline:
      "Yes. Licensed contractors take eligible residential rooftop systems, including those with energy storage, through SolarAPP+ and then apply in the City's Accela Citizen Access portal. Inspections can be requested online, by phone or by text.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "stockton",
    city: "Stockton",
    county: "San Joaquin County",
    utilityKey: "pge",
    cca: "Ava Community Energy (formerly East Bay Community Energy) \u2014 began serving Stockton in April 2025 for generation only; \"PG&E delivers the power",
    permitUrl: "https://www.stocktonca.gov/business/building___life_safety/automated_solar_permitting.php",
    permitFeeNote:
      "The City's own building-permit fee, separate from SolarAPP+'s processing fee, is published in the FY 2025-26 Adopted Fee Schedule: a residential photovoltaic system permit is $314.00 flat for 15 kW or less, or $450.00 plus $15.00 per kW above 15 kW. SolarAPP+'s own processing fee (covering up to three revisions) is charged separately and its dollar amount is not published by the City.",
    permitFeeSource: "City of Stockton FY 2025-26 Adopted Fee Schedule (effective 7/1/2025) and City of Stockton Automated Solar Permitting page",
    permitOnline:
      "yes \u2014 SolarAPP+ named (submission at gosolarapp.org) plus City of Stockton Accela Citizen Portal for permit application/inspection scheduling; described as \"Residential Solar One Stop\" with auto-issued permit",
    sourcesFetchedAt: "2026-09-22",
  },
  {
    slug: "thousand-oaks",
    city: "Thousand Oaks",
    county: "Ventura County",
    utilityKey: "sce",
    cca: "Clean Power Alliance",
    ccaSource: SCE_CCA_LIST,
    permitUrl: "https://toaks.gov/solarsystems",
    permitFeeNote:
      "Thousand Oaks' solar page does not state the City's permit fee. It says any fees for the SolarAPP+ web service are independent of and unrelated to the City's own.",
    permitFeeSource: "City of Thousand Oaks, Solar PV Systems",
    permitOnline:
      "Yes. Licensed B, C-10 and C-46 contractors can use SolarAPP+ for roof-mounted residential systems up to 38.4 kW AC, then apply through the City's TO/24 online services. Ballasted, ground-mounted and carport systems need a standard solar permit, also filed through TO/24.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "tulare",
    city: "Tulare",
    county: "Tulare County",
    utilityKey: "sce",
    // 2026-09-23 (Tier 3): re-read. The City's fee pages now load; the Master
    // Fee Schedule they link has no solar line, so the note says so.
    permitUrl: "https://www.tulare.ca.gov/government/departments/community-development/building/solar-app",
    permitFeeNote:
      "Tulare's SolarAPP+ page says a SolarAPP+ processing fee and City of Tulare permit fees will be charged but states neither amount, and the City's Master Fee Schedule adopted May 17, 2022, the one its fee page links, has no separate solar line. Ask the Building Division for the City's figure.",
    permitFeeSource: "City of Tulare, Solar App+ for Solar Installers",
    permitSources: [
      {
        label: 'City of Tulare, Master Fee Schedule adopted May 17, 2022 (2022-2023 schedule; no solar line)',
        url: 'https://www.tulare.ca.gov/home/showpublisheddocument/19310/637943585895770000',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Eligible residential, roof-mounted retrofit systems go through SolarAPP+, and the City emails its permit number within 24 business hours for scheduling inspections, which can be requested for a morning or afternoon slot but are not guaranteed for it.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "ventura",
    city: "Ventura",
    county: "Ventura County",
    utilityKey: "sce",
    // 2026-09-23 (Tier 3): re-read; CCA sourced to SCE's list.
    cca: "Clean Power Alliance",
    ccaSource: SCE_CCA_LIST,
    permitUrl: "https://www.cityofventura.ca.gov/2554/Contractor-Solar-Permits-SB-379",
    permitFeeNote:
      "Ventura's Contractor Solar Permits page says Symbium's processing fee is non-refundable but states no dollar amount for it or for the City's own permit, so ask the installer what the City permit line in a quote covers.",
    permitFeeSource: "City of Ventura, Contractor Solar Permits (SB 379)",
    permitOnline:
      "Yes. Licensed contractors holding an A, B, C-10 or C-46 license and an active Ventura business license can permit a residential solar system up to 38.4 kW AC, including energy storage, through Symbium in real time, then view and print the permit in Ventura OPS. Inspections must be requested by 5 p.m. the business day before and are made between 8:30 a.m. and 3 p.m. Systems outside Symbium can still be filed the traditional way.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "walnut-creek",
    city: "Walnut Creek",
    county: "Contra Costa County",
    utilityKey: "pge",
    cca: "MCE (Marin Clean Energy)",
    ccaSource: {
      label: "City of Walnut Creek, MCE Clean Energy (MCE the default provider since September 2016; PG&E delivers and bills)",
      url: "https://www.walnutcreekca.gov/government/departments/e-c-o-sustainability/energy-innovation",
      verifiedAt: "2026-09-23",
    },
    permitUrl: "https://www.walnutcreekca.gov/government/community-development-department/permits/building-permits/building-and-land-use-regulations/solar-electrical-heating-and-plumbing",
    permitFeeNote:
      "Walnut Creek's Master Fee Schedule for fiscal years 2026 and 2027 lists a solar photovoltaic permit for single-family and duplex homes at $280.00, a unified permit that covers plan check and inspection of all electrical, plumbing and related work, with no change proposed for either year.",
    permitFeeSource: "City of Walnut Creek, Solar, Electrical, Heating, and Plumbing (Building)",
    permitSources: [
      {
        label: "City of Walnut Creek, Master Fee Schedule FY26 & FY27 (Building: 4. Solar)",
        url: "https://walnutcreek.granicus.com/MetaViewer.php?view_id=&clip_id=5201&meta_id=335345",
        verifiedAt: "2026-09-23",
      },
    ],
    permitOnline:
      "The City's solar page does not say whether solar permits go through SolarAPP+ or another automated platform. It lists submittal requirements for photovoltaic systems (Information Bulletin IB-025) and for batteries paired with solar, and the City takes building permit applications through its general online permit portal.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "watsonville",
    city: "Watsonville",
    county: "Santa Cruz County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    permitUrl: "https://www.watsonville.gov/DocumentCenter/View/22083/SolarAPP---How-to",
    permitFeeNote:
      "No base dollar amount given for the standard permit. States \"A processing fee from SolarAPP+ and City of Watsonville permit fees will be charged through Stripe.\" Does give one specific figure: \"The first three revisions are free of charge, while each subsequent revision would charge the installer the $25 project fee.\"",
    permitFeeSource: "City of Watsonville SolarAPP+ How-To guide (PDF)",
    permitOnline:
      "Yes, online. SolarAPP+ is explicitly named; permits are issued electronically after payment through Stripe.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "winchester",
    city: "Winchester",
    county: "Riverside County",
    utilityKey: "sce",
    permitUrl: "https://rctlma.org/solarapp",
    permitFeeNote:
      "Winchester is unincorporated, so building permits come from Riverside County (TLMA Building & Safety), not a city. Page states: \"A $35 processing fee will be charged by the SolarAPP+ website\" plus additional county permit fees (\"Pay applicable fees\") whose exact amount is not stated on this page.",
    permitFeeSource: "Riverside County TLMA SolarAPP+ page (rctlma.org/solarapp)",
    permitOnline:
      "Yes, online - submit design to gosolarapp.org, then apply for the county permit at rivcoplus.org; SolarAPP+ named",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "yucaipa",
    city: "Yucaipa",
    county: "San Bernardino County",
    utilityKey: "sce",
    // 2026-09-23 (Tier 3): re-read; the platform is now sourced to the CEC.
    permitUrl: "https://yucaipa.gov/building-safety/",
    permitFeeNote:
      "Yucaipa publishes no solar permit fee. Its Building & Safety page points to a permit fee estimator in the Yucaipa Permit Exchange portal rather than a fee schedule for solar, so use the estimator or ask Building & Safety for the City's figure. SolarAPP+, where used, charges its own processing fee.",
    permitFeeSource: "City of Yucaipa, Building & Safety (Permit Center)",
    permitSources: [CEC_SB379_DATA],
    permitOnline:
      "Yes for permits generally: the Yucaipa Permit Exchange portal takes applications, payments and inspection requests. The City's pages do not describe a solar-specific route; the California Energy Commission's SB 379 data, which each city reports itself, lists Yucaipa's platform as SolarAPP+.",
    sourcesFetchedAt: "2026-09-23",
  },
  // Added 2026-09-18 from the re-screen pass: 5 AMBER cities that flipped GREEN
  // on an alternate phrasing, 5 confirmed AMBER, and the three cities whose
  // original RED was a keyword collision with a same-named city in another
  // state (Ontario, Windsor, Auburn) rather than a hard SERP. Ledger:
  // Growth_200/city_data_parts/part_rescreen13.csv.
  {
    slug: "auburn",
    city: "Auburn",
    county: "Placer County",
    utilityKey: "pge",
    // 2026-09-23 (Tier 3): fee now quoted from the FY 2026-27 schedule.
    cca: "Pioneer Community Energy",
    ccaSource: PIONEER_ABOUT,
    permitUrl: "https://www.auburn.ca.gov/700/Symbium-Permits",
    permitFeeNote:
      "Auburn's Adopted Fee Schedule for fiscal year 2026-27, dated July 1, 2026, lists a residential solar photovoltaic permit, ground or roof mounted, at $347 for 15 kW or less and at $450 plus $15 per kW above 15 kW for a larger system, with inspection and plan review included and permit processing fees added. A residential battery backup storage permit and a residential service panel upgrade are $174 each.",
    permitFeeSource: "City of Auburn, Symbium Permits",
    permitSources: [
      {
        label: 'City of Auburn, Adopted Fee Schedule FY 2026-27 (Building Fees A.7 Battery Backup Storage; A.10 Residential Solar Photovoltaic System)',
        url: 'https://www.auburn.ca.gov/DocumentCenter/View/4398/Auburn---Adopted-Fee-Schedule---FY-2627',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Auburn uses Symbium, not SolarAPP+: the applicant files and pays in Symbium for instantaneous plan review, then applies in the City's Civic Access portal for an Online Residential Solar Permit (Symbium), uploading the Symbium approval, inspection checklist and plans, and the permit issues once paid.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "beaumont",
    city: "Beaumont",
    county: "Riverside County",
    utilityKey: "sce",
    permitUrl: "https://beaumontca.gov/1456/Photovoltaic-Permit-Streamlining",
    permitFeeNote:
      "Beaumont's Photovoltaic Permit Streamlining page says \"There will be additional fees charged by that vendor for the service\" (meaning the Symbium automated-review vendor) but does not give a dollar figure for either the vendor fee or the city's own building permit fee.",
    permitFeeSource: "City of Beaumont Photovoltaic Permit Streamlining page",
    permitOnline:
      "Yes, online: submittals and inspections go through the \"City of Beaumont Citizen Self Service (CSS) Portal,\" using Symbium's automated permitting platform for expedited review. SolarAPP+ is not named \u2014 Beaumont uses Symbium instead.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "danville",
    city: "Danville",
    county: "Contra Costa County",
    utilityKey: "pge",
    cca: "MCE (Marin Clean Energy)",
    permitUrl: "https://www.danville.ca.gov/1042/SolarApp-Submittals",
    permitFeeNote:
      "The Town's SolarApp+ Submittals page says \"A processing fee from SolarAPP+ and Town of Danville permit fees will be charged\" but does not specify a dollar amount for either fee.",
    permitFeeSource: "Town of Danville SolarApp+ Submittals page",
    permitOnline:
      "Yes, explicitly: the page is titled \"SolarApp+ Submittals\" and states SolarAPP+ \"is designed to provide a code-compliance check for the majority of residential, roof-mounted, retrofit photovoltaic systems.\"",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "encinitas",
    city: "Encinitas",
    county: "San Diego County",
    utilityKey: "sdge",
    // 2026-09-23 (Tier 3): re-read; the fee-waiver flyer's terms are now
    // stated, the CCA is sourced to SDG&E's list and the platform to the CEC.
    cca: "San Diego Community Power",
    ccaSource: SDGE_ACTIVE_CCAS,
    permitUrl: "https://www.encinitasca.gov/government/departments/applications-and-information/solar-photovoltaic-permit-application",
    permitFeeNote:
      "Encinitas publishes no dollar figure for a solar permit. Its Solar Photovoltaic Permit Application page links an Energy Efficiency Permit Fee Waiver flyer, which says the City and EsGil Corporation waive permitting fees for basic home solar photovoltaic installations and reduce them by an equivalent amount for larger or more complex ones. The flyer carries no date, so confirm with Development Services at (760) 633-2710 that it still applies.",
    permitFeeSource: "City of Encinitas, Solar Photovoltaic Permit Application",
    permitSources: [
      {
        label: 'City of Encinitas, Energy Efficiency Permit Fee Waiver flyer (undated)',
        url: 'https://www.encinitasca.gov/home/showpublisheddocument/5146/638065976521930000',
        verifiedAt: '2026-09-23',
      },
      {
        label: 'City of Encinitas, Small Solar Energy Systems (Ordinance 2015-13, Municipal Code Chapter 23.13)',
        url: 'https://www.encinitasca.gov/government/departments/development-services/land-development-building/building/small-solar-energy-systems',
        verifiedAt: '2026-09-23',
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. Solar applications and their required documents go through the City's Customer Self Service (CSS) portal, which needs registration, and the City's standard plans cover central-inverter and micro-inverter systems up to 10 kW. The City's pages do not name SolarAPP+; the California Energy Commission's SB 379 data, which each city reports itself, lists Encinitas's platform as SolarAPP+.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "los-angeles",
    city: "Los Angeles",
    county: "Los Angeles County",
    utilityKey: "ladwp",
    permitUrl: "https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/ib-p-gi-2020-003-express-permits_rev-5-28-2024.pdf",
    permitFeeNote:
      "LADBS Information Bulletin P/GI 2020-003 (Express Permits) lists rooftop PV systems on one- or two-family dwellings up to 10kW as eligible for Express Permits, stating these are \"issued only online at https://dbs.lacity.gov/\"; the bulletin does not name a dollar figure for the permit fee.",
    permitFeeSource: "LADBS Information Bulletin P/GI 2020-003, Express Permits (No Plan Check Required)",
    permitOnline:
      "Yes for qualifying residential rooftop PV (\u226410kW): per the bulletin, licensed-contractor Express Permits for these systems are issued only online through the LADBS website (dbs.lacity.gov). SolarAPP+ is not named in this bulletin.",
    sourcesFetchedAt: "2026-09-18",
    // 2026-09-23 (Tier 3 city-cost wave): the "solar panel cost van nuys" and
    // "solar panel cost wilmington" topics are answered here rather than on
    // their own pages, because both are communities inside the City of Los
    // Angeles with the same permit office and utility as the rest of the city.
    permitSources: [
      {
        label: 'City of Los Angeles Planning, Van Nuys - North Sherman Oaks Community Plan (a community plan area of the City)',
        url: 'https://planning.lacity.gov/plans-policies/community-plan-area/van-nuys-north-sherman-oaks',
        verifiedAt: '2026-09-23',
      },
      {
        label: 'City of Los Angeles Planning, Wilmington - Harbor City Community Plan (a community plan area of the City)',
        url: 'https://planning.lacity.gov/plans-policies/community-plan-area/wilmington-harbor-city',
        verifiedAt: '2026-09-23',
      },
      CEC_SERVICE_TERRITORY_SOURCE_0923,
    ],
    extraFaqs: [
      {
        question: 'Does solar cost differ in Van Nuys or Wilmington?',
        answer:
          "Not because of the neighborhood. Van Nuys and Wilmington are not separate cities: each sits in a community plan area of the City of Los Angeles, so the permit rules above apply there, and the California Energy Commission's service-territory map places both in LADWP's territory rather than SCE's. No public source prices an installation for either community. What changes a quote is the house itself: the roof, the main panel, shade and whether a battery is included.",
      },
    ],
    // 2026-09-24 (gold-standard plan, Block 3 gate): /solar-savings/los-angeles
    // 301s here, and LADWP homes are not in the CPUC's DG Stats data, so the
    // page answers "LADWP rates" from LADWP's own residential rates page. The
    // same prices are in src/data/facts.ts (ladwpR1a), which the weekly fact
    // check re-reads.
    localRates: {
      heading: 'LADWP electricity rates in Los Angeles',
      paragraphs: [
        "The Los Angeles Department of Water and Power, the City's own utility, supplies electricity to most homes in Los Angeles. It is not part of the CPUC's net billing tariff, and its prices change four times a year: base rates were set July 1, 2019, and adjustment factors are updated in January, April, July and October.",
        "On the Standard Residential Rate (R-1A), LADWP's total charge for July through September 2026 is 26.408¢ per kWh in Tier 1, 32.267¢ in Tier 2 and 40.968¢ in Tier 3. For October through December 2026 it is 27.292¢ in Tier 1 and 33.151¢ in Tiers 2 and 3. A monthly Power Access Charge of $2.30, $7.90 or $22.70 is added, depending on the tier.",
        "The Time-of-Use rate (R-1B) has a $12.00 monthly service charge. For July through September 2026 LADWP lists 35.124¢ per kWh for high peak, 29.284¢ for low peak and 26.540¢ for base hours.",
        "LADWP's Net Energy Metering rider, in effect since September 1, 2008, bills a solar customer for the net energy it supplies over the billing period. When a home sends back more than it uses, LADWP calculates a credit at the rate schedule's energy pricing and carries it to later bills; any credit left when service ends is set to zero. A savings estimate for a Los Angeles home should use these LADWP prices, not PG&E's or SCE's.",
      ],
      faq: {
        question: 'What are LADWP electricity rates in Los Angeles?',
        answer:
          "On LADWP's Standard Residential Rate (R-1A), the total charge for July through September 2026 is 26.408¢ per kWh in Tier 1, 32.267¢ in Tier 2 and 40.968¢ in Tier 3, plus a monthly Power Access Charge of $2.30 to $22.70 by tier. For October through December 2026 the tier prices are 27.292¢ and 33.151¢. LADWP adjusts these prices in January, April, July and October. Source: LADWP Residential Rates, checked September 24, 2026.",
      },
      sources: [
        {
          label: 'Los Angeles Department of Water and Power, Residential Rates (R-1A Standard Residential; R-1B Time-of-Use; Service Rider NEM)',
          url: 'https://www.ladwp.com/account/customer-service/electric-rates/residential-rates',
          verifiedAt: '2026-09-24',
        },
      ],
    },
  },
  {
    slug: "ontario",
    city: "Ontario",
    county: "San Bernardino County",
    utilityKey: "sce",
    // 2026-09-23: the City's reroof-and-solar page still returns a server
    // error, so the row now links the Building Department page, which
    // announces the Symbium route.
    permitUrl: "https://www.ontarioca.gov/government/community-development/building",
    permitFeeNote:
      "Ontario's Building Department Fees page lists no fee specifically for solar. It sets an electrical permit issuance fee of $41.00 and plan check at 80 percent of permit fees, calls its figures an estimate only, and refers applicants to permit technicians at 909-395-2023 for the exact amount due at issuance.",
    permitFeeSource: "City of Ontario, Building Department",
    permitSources: [
      {
        label: "City of Ontario, Building Department Fees (Table B, Electrical Permit Fees)",
        url: "https://www.ontarioca.gov/government/community-development/building/building-department-fees",
        verifiedAt: "2026-09-23",
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. Since August 4, 2025, contractors and homeowners can apply for residential solar and energy storage permits through Symbium's real-time permitting platform, which the City says expedites approval and permit issuance. The California Energy Commission's SB 379 data also lists Ontario's platform as Symbium. The City's separate page on residential reroof and solar permits returned a server error when checked.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "palm-springs",
    city: "Palm Springs",
    county: "Riverside County",
    utilityKey: "sce",
    cca: "Desert Community Energy",
    permitUrl: "https://www.palmspringsca.gov/government/departments/building/permits",
    permitFeeNote:
      "The Building Permit and Review Fees page lists categories of fees the city collects but does not give a specific dollar figure for a residential solar photovoltaic permit.",
    permitFeeSource: "City of Palm Springs Building Permit and Review Fees page",
    permitOnline:
      "Yes, online: the Permits page directs applicants to \"Create an account at Palm Springs Online, select apply on home page, and search for the application specific to your project.\" SolarAPP+ is not named on this page.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "rocklin",
    city: "Rocklin",
    county: "Placer County",
    utilityKey: "pge",
    // 2026-09-23 (Tier 3): re-read; CCA sourced to Pioneer's own list.
    cca: "Pioneer Community Energy",
    ccaSource: PIONEER_ABOUT,
    permitUrl: "https://www.rocklin.ca.us/online-solar-permitting",
    permitFeeNote:
      "Rocklin's Online Solar Permitting page says SolarAPP+ costs an additional $25.00, paid directly to SolarAPP+, and that City of Rocklin permit fees and inspections apply, without stating the City's amount.",
    permitFeeSource: "City of Rocklin, Online Solar Permitting",
    permitSources: [CEC_SB379_DATA],
    permitOnline:
      "Yes. Licensed contractors can apply through SolarAPP+ in place of submitting plans, then file the permit application online through eTRAKiT or at the Permit Center and schedule inspections in eTRAKiT or by phone. Owner-builders and projects that include an energy storage system are not eligible for SolarAPP+.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "seaside",
    city: "Seaside",
    county: "Monterey County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    permitUrl: "https://ci.seaside.ca.us/852/Solar-App",
    permitFeeNote:
      "The City's Solar App+ page says \"A processing fee will be charged by SolarAPP+\" for the automated review but does not give a dollar amount; it directs applicants to pay the separate city permit fee when applying through the City of Seaside Permitting System.",
    permitFeeSource: "City of Seaside Solar App+ page (Building & Code Enforcement Department)",
    permitOnline:
      "Yes, explicitly: qualifying residential PV and PV+battery-storage projects are submitted for automated review through SolarAPP+, then the SolarAPP+ approval documents are uploaded to apply for the permit online via the City of Seaside Permitting System.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "tracy",
    city: "Tracy",
    county: "San Joaquin County",
    utilityKey: "pge",
    cca: "Ava Community Energy",
    ccaSource: AVA_COMMUNITIES,
    permitUrl: "https://www.cityoftracy.org/Departments/Community-and-Economic-Development/Building-Safety/Permit-Process-and-Fees",
    // 2026-09-23: fee now read from the City's adopted 2026/27 Master Fee
    // Schedule; filing route re-read on the permit page.
    permitFeeNote:
      "Tracy's Citywide Master Fee Schedule for fiscal year 2026/27 (Resolution 2026-119, with building fees in effect from July 17, 2026) lists a residential solar PV system up to 15 kW at a flat $450, plus $15 per kW above 15 kW, and marks both as fees set by the State. The City's permit page says the plan check fee is paid before plans are reviewed and the balance of the permit fees when the permit is issued.",
    permitFeeSource: "City of Tracy, Permit Process and Fees",
    permitSources: [
      {
        label: "City of Tracy, Citywide Master Fee Schedule FY 2026/27, adopted May 19, 2026 (Resolution 2026-119): fee 26, Solar (PV) Systems",
        url: "https://www.cityoftracy.org/files/assets/city/v/3/finance/documents/budget-amp-financial-documents/master-fee-schedule/approved-fy2026-2027-citywide-master-fee-schedule.pdf",
        verifiedAt: "2026-09-23",
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. Tracy takes photovoltaic applications by email at photovoltaic@cityoftracy.org with the plans and also offers an online application submittal process; permit fees are paid through eTRAKiT or in person at City Hall. The City's page does not name SolarAPP+, and the California Energy Commission's SB 379 data lists Tracy's platform as a custom one.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "vallejo",
    city: "Vallejo",
    county: "Solano County",
    utilityKey: "pge",
    cca: "MCE (Marin Clean Energy)",
    ccaSource: MCE_ABOUT,
    permitUrl: "https://www.vallejo.gov/online_services/central_permit_center",
    // 2026-09-23: fee now read from the City's own master fee schedule.
    permitFeeNote:
      "Vallejo's Master Fee Schedule for fiscal year 2025-2026, effective July 1, 2025, lists residential solar plan review at $138 and a residential solar permit of 15 kW or less at $312, with $54.28 for each kW above 15 kW. The schedule says these solar fees comply with Government Code section 66015 and are capped at $450 for a residential system before the City's $38 permit issuance fee is added.",
    permitFeeSource: "City of Vallejo, Central Permit Center",
    permitSources: [
      {
        label: "City of Vallejo, Master Fee Schedule FY 2025-2026, fees effective July 1, 2025 (Residential Solar Permits, items 36-38)",
        url: "https://www.cityofvallejo.net/common/pages/GetFile.ashx?key=LuI%2BAe8c",
        verifiedAt: "2026-09-23",
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. The City takes permit applications online through eTRAKiT and embeds Symbium's permit tool on its Central Permit Center page, and the California Energy Commission's SB 379 data lists Vallejo's platform as Symbium. The City's pages do not describe the solar route in detail.",
    sourcesFetchedAt: "2026-09-23",
    // Added 2026-09-22: the CEC layer places part of Vallejo in the City of
    // Pittsburg's electric service territory. Re-checked 2026-09-23.
    utilitySplit: {
      others: "City of Pittsburg",
      note:
        "The California Energy Commission's service-territory map places part of Vallejo inside the City of Pittsburg's electric service territory rather than PG&E's. Read the utility name on your bill before using a PG&E rate.",
      sources: [CEC_SERVICE_TERRITORY_SOURCE_0923],
    },
  },
  {
    slug: "windsor",
    city: "Windsor",
    county: "Sonoma County",
    utilityKey: "pge",
    // 2026-09-23 (Tier 3): re-read; CCA sourced to Sonoma Clean Power.
    cca: "Sonoma Clean Power",
    ccaSource: SCP_WHO,
    permitUrl: "https://www.townofwindsor.ca.gov/1570/Residential-Solar-Applications",
    permitFeeNote:
      "Windsor's Residential Solar Applications page says Symbium collects a service fee before sending the applicant to the Town's eTRAKiT system for the permit, but it states neither that fee nor the Town's own permit fee.",
    permitFeeSource: "Town of Windsor, Residential Solar Applications (Building Division)",
    permitSources: [CEC_SB379_DATA],
    permitOnline:
      "Yes. The Town's Symbium platform checks residential solar and energy storage applications for code compliance and allows instant permit approval, with the permit issued in eTRAKiT. Applications can still be sent by email or in person, with plan review of 1-3 business days, and every contractor needs an active Town business license before a permit issues.",
    sourcesFetchedAt: "2026-09-23",
  },
  {
    slug: "yuba-city",
    city: "Yuba City",
    county: "Sutter County",
    utilityKey: "pge",
    // 2026-09-23 (Tier 3): re-read and reworded; no CCA per PG&E's list.
    permitUrl: "https://www.yubacity.net/departments/development_services/solar_app.php",
    permitFeeNote:
      "Yuba City's SolarAPP+ page says SolarAPP+ charges a processing fee and that the City reviews the application and invoices the building permit fees, without stating either amount.",
    permitFeeSource: "City of Yuba City, Solar APP+",
    permitOnline:
      "Yes. After SolarAPP+ approval, the contractor applies through the City's Accela Citizen Portal; the City invoices the permit fees and issues the permit once they are paid. Inspections are requested in the portal, or by phone by 5 p.m. the business day before, for a morning or afternoon slot.",
    sourcesFetchedAt: "2026-09-23",
  },
  // ---------------------------------------------------------------------------
  // Added 2026-09-23, Tier 2 city-cost wave. Each city's search impressions for
  // its cost query were landing on its /solar-companies or /solar-savings page;
  // this row gives the query its own page. Every field was fetched that day.
  // ---------------------------------------------------------------------------
  {
    slug: 'san-mateo',
    city: 'San Mateo',
    county: 'San Mateo County',
    utilityKey: 'pge',
    cca: 'WestLight Energy (formerly Peninsula Clean Energy)',
    ccaSource: WESTLIGHT_HOME,
    permitUrl: 'https://www.cityofsanmateo.org/4770/SolarApp-For-Solar-Installers',
    permitFeeNote:
      "San Mateo's Adopted Comprehensive Fee Schedule for 2026-2027 charges $450 for each combination permit for a solar energy system on a single-family dwelling, and $450 flat for a new energy storage system installed on its own, and notes that both fees are set by state law. SolarAPP+ charges its own processing fee; the City's page does not state the amount.",
    permitFeeSource: 'City of San Mateo, SolarApp+ for Solar Installers',
    permitSources: [
      {
        label: 'City of San Mateo, Adopted Comprehensive Fee Schedule 2026-2027 (Building: solar energy systems; new energy storage systems)',
        url: 'https://www.cityofsanmateo.org/DocumentCenter/View/105420',
        verifiedAt: '2026-09-23',
      },
      {
        label: 'County of San Mateo, Instant Residential Solar and Energy Storage System Permits (unincorporated addresses only)',
        url: 'https://www.smcgov.org/planning/instant-residential-solar-and-energy-storage-system-permits',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Eligible residential, roof-mounted retrofit systems go through SolarAPP+, and the City permit is then applied for at the City's Online Permit Center.",
    sourcesFetchedAt: '2026-09-23',
    extraFaqs: [
      {
        question: 'How much does solar panel installation cost in San Mateo County?',
        answer:
          "No public source prices an installation for the county, and the parts that differ from one address to the next are set locally. Each city and town in San Mateo County issues its own solar permits; the City of San Mateo charges $450 per combination permit for solar on a single-family home in its 2026-2027 fee schedule. Homes in unincorporated San Mateo County are permitted by the County, which issues instant residential solar and battery permits through Symbium and accepts only unincorporated addresses there. WestLight Energy is the generation provider for San Mateo County, and PG&E delivers the power and sends one bill with both sets of charges.",
      },
    ],
  },
  {
    slug: 'irvine',
    city: 'Irvine',
    county: 'Orange County',
    utilityKey: 'sce',
    cca: 'Orange County Power Authority (OCPA)',
    ccaSource: OCPA_HOME,
    permitUrl: 'https://cityofirvine.gov/building-permits-and-inspections/adding-rooftop-solar-energy-system',
    permitFeeNote:
      "Irvine's Building and Safety fee schedule for 2026-27 (Resolution 24-41) lists solar panels on a residence at $349.11 for plan check and $299.00 for inspection per system, plus $12.08 for each additional kW over 15 kW. Residential permits other than new construction also carry a $31.88 permit issuance fee.",
    permitFeeSource: 'City of Irvine, Adding a Rooftop Solar Energy System',
    permitSources: [
      {
        label: 'City of Irvine, Community Development and Public Works fee schedule 2026-27, Schedule II Building and Safety Fees (Resolution 24-41): Solar Panels per System; Permit Issuance Fees',
        url: 'https://www.cityofirvine.gov/sites/default/files/legacy-documents/cd-pws-fee-schedule-august-15_2026-27_0.pdf',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. PermitsDIRECT!, powered by Symbium, issues same-day permits to licensed contractors for a rooftop system up to 38.4 kW with no more than one battery. Larger systems, or more than one battery, are submitted through the IrvineReady! online portal, where the City says to expect five working days for the first plan check.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'fremont',
    city: 'Fremont',
    county: 'Alameda County',
    utilityKey: 'pge',
    cca: 'Ava Community Energy',
    ccaSource: AVA_COMMUNITIES,
    permitUrl:
      'https://www.fremont.gov/government/departments/community-development/planning-building-permit-services/planning-building-permits/permit-types/instant-solar-permit-isp',
    permitFeeNote:
      "Fremont's Master Fee Schedule, effective July 1, 2026, charges $133 for an Instant Solar Permit up to 15 kW, plus $7.50 for each kW above that, and $280 for a residential solar permit that goes through regular review, plus $15 for each kW above 15 kW. The schedule says these fees cover application, plan check and inspection and are capped by Government Code section 66015. Each extra inspection or re-inspection is $133, and an Instant Solar Permit issued automatically is exempt from the separate building permit application fee.",
    permitFeeSource: 'City of Fremont, Instant Solar Permit (ISP)',
    permitSources: [
      {
        label: 'City of Fremont Master Fee Schedule, Resolution No. 8672, fees effective July 1, 2026 (II.P.4 Renewable Energy Systems)',
        url: 'https://www.fremont.gov/home/showpublisheddocument/20810/639184906195370000',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      'Yes. Contractors registered with SolarAPP+ apply for the Instant Solar Permit online for roof-mounted systems with or without a battery, and a main electrical service upgrade can be added to it. Designs outside the SolarAPP+ eligibility checklists go through regular review.',
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'riverside',
    city: 'Riverside',
    county: 'Riverside County',
    utilityKey: 'riverside',
    permitUrl: 'https://riversideca.gov/cedd/building-safety/online-permits/solarapp',
    permitFeeNote:
      "Riverside's Building & Safety fee schedule lists an expedited solar energy system permit, up to 38 kW, at $190, and a residential solar energy system of 15 kW or less at $350 plus $15 for each additional kW, with a $39 permit issuance fee on top. SolarAPP+ charges its own $25 processing fee. Separately, Riverside Public Utilities charges a $275 residential application and processing fee for its net energy metering initial review, effective July 1, 2026.",
    permitFeeSource: 'City of Riverside, SolarAPP+ (Community & Economic Development)',
    permitSources: [
      {
        label: 'City of Riverside, Building & Safety Fee Schedule (posted PDF; no effective date printed)',
        url: 'https://www.riversideca.gov/cedd/sites/riversideca.gov.cedd/files/BUILDING%20&%20SAFETY%20FEE%20SCHEDULE.pdf',
        verifiedAt: '2026-09-23',
      },
      {
        label: 'Riverside Public Utilities, Electric Rules Appendix A: Electric Fees and Charges Schedule, effective July 1, 2026 (Rule 22, net energy metering initial review)',
        url: 'https://www.riversideca.gov/utilities/sites/riversideca.gov.utilities/files/pdf/rates-electric/2026/july1-2026/Electric%20Rule%20Appendix%20A.pdf',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      'Yes, for residential rooftop systems under 38 kW through SolarAPP+ and the City of Riverside Public Portal. Ground-mounted or ballasted systems, projects with a panel upgrade or derate, homes with existing panels, and any system with an existing or new battery are not eligible for SolarAPP+.',
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'oakland',
    city: 'Oakland',
    county: 'Alameda County',
    utilityKey: 'pge',
    cca: 'Ava Community Energy',
    ccaSource: AVA_COMMUNITIES,
    permitUrl: 'https://www.oaklandca.gov/My-Household/Building-and-Remodeling/Homeowner-Projects-Permits/Solar-Energy-Systems-Facilities',
    permitFeeNote:
      "Oakland's Master Fee Schedule, effective July 1, 2026, sets the residential solar electric inspection fee at $450, plus $4.03 for each kW above 15 kW, and a SolarApp+ filing fee of $21.49 per permit. A residential energy storage system permit is $268.64 for up to 80 kW in aggregate or 20 kW in a single unit. SolarAPP+ may also charge its own subscription or processing fee.",
    permitFeeSource: 'City of Oakland, Solar Energy Systems & Facilities',
    permitSources: [
      {
        label: 'City of Oakland Master Fee Schedule, fiscal year 2026-27, effective July 1, 2026 (Planning & Building: Solar Electric; Energy Storage Systems; SolarApp+ Filing Fee)',
        url: 'https://www.oaklandca.gov/files/assets/city/v/2/finance/documents/financial-reporting/master-fee-schedules/fiscal-year-2026-27-adopted-mfs.pdf',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Licensed contractors take eligible rooftop systems on a permitted main dwelling through SolarAPP+, then enter the approval number in the City's Online Permit Center. Batteries and related electrical work are allowed; ballasted systems and building-integrated PV are not.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'pleasanton',
    city: 'Pleasanton',
    county: 'Alameda County',
    utilityKey: 'pge',
    cca: 'Ava Community Energy',
    ccaSource: AVA_COMMUNITIES,
    permitUrl: 'https://www.cityofpleasantonca.gov/our-government/community-and-economic-development/permits-forms-fees/',
    permitFeeNote:
      "Pleasanton's Building Permit and Plan Review Fees, dated January 1, 2026, set a residential photovoltaic permit, plan review included, at $250 for a system up to 10 kW, and at $450 plus $15 for each kW above 15 kW for a larger one. The City adds a technology fee of 5 percent of total permit fees, and card payments carry a 2.5 percent convenience fee.",
    permitFeeSource: 'City of Pleasanton, Permits, Forms & Fees',
    permitSources: [
      {
        label: 'City of Pleasanton, Building Permit and Plan Review Fees, January 1, 2026 (Residential Photo-Voltaic Systems; Technology Fee)',
        url: 'https://www.cityofpleasantonca.gov/assets/our-government/community-development/permits-forms-fees/Permit-Fees.pdf',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Eligible single-family, roof-mounted retrofit systems go through SolarAPP+, and the City permit (Solar Permit with SolarAPP+) is applied for in Accela Citizen Access. An active City of Pleasanton business license is required.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'chico',
    city: 'Chico',
    county: 'Butte County',
    utilityKey: 'pge',
    permitUrl: 'https://chicoca.gov/Departments/Community-Development/Building-Division/index.html',
    permitFeeNote:
      "Chico's Master Fee Schedule for fiscal year 2026/2027, effective July 6, 2026, charges $450 for residential solar mounted on an existing structure at 15 kW or less, and $500 plus $15 per kW above 15 kW for a larger system. It notes that plan check and other fees may apply to systems over 40 pounds per square foot or on a conventionally framed roof, that supporting structures over 7 feet tall need a separate permit, and that a ground-mount solar racking permit is a separate $876.",
    permitFeeSource: 'City of Chico, Building Division',
    permitSources: [
      {
        label: 'City of Chico, FY 2026/2027 Master Fee Schedule, effective July 6, 2026 (Residential: Solar Mounted on Existing Structure; ground mount solar racking permit)',
        url: 'https://catapultfilemanager-prod.s3.us-west-2.amazonaws.com/e12a7475-6d0d-4986-a8bb-538a9e5496e0/FY%202026-2027%20MASTER%20FEE%20SCHEDULE%20-%20Updated%2007-06-2026.pdf',
        verifiedAt: '2026-09-23',
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "The City's Building Division takes all applications and plans digitally through its eTRAKiT permit portal, but its pages do not describe an automated solar permit. The California Energy Commission's SB 379 data, which each city reports itself, lists Chico as without a platform.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'pasadena',
    city: 'Pasadena',
    county: 'Los Angeles County',
    utilityKey: 'pasadena',
    permitUrl: 'https://mypermits.cityofpasadena.net/Permit/Express',
    permitFeeNote:
      "Pasadena's Express Permit Portal does not show the solar permit fee before you apply, and the City's fee schedule page could not be read when checked. On the utility side, Pasadena Water and Power requires an AC disconnect switch, lockable in the open position, within eight feet and in line of sight of the PWP meter, which is equipment a quote should include.",
    permitFeeSource: 'City of Pasadena, Express Permit Portal (Solar Photovoltaic, or Solar Photovoltaic & Energy Storage System)',
    permitSources: [
      {
        label: 'Pasadena Water and Power, Solar Eligibility and Requirements',
        url: 'https://pwp.cityofpasadena.net/solar-eligibility-and-requirements/',
        verifiedAt: '2026-09-23',
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. The City's Express Permit Portal offers a Solar Photovoltaic, or Solar Photovoltaic and Energy Storage System, express permit for residential properties through a Permit Center Online account. Pasadena Water and Power's initial review approval has to come before the building permit, and the California Energy Commission's SB 379 data lists Pasadena's platform as a custom one.",
    sourcesFetchedAt: '2026-09-23',
    // 2026-09-24 (gold-standard plan, Block 3 gate): Pasadena Water and Power
    // homes are not in the CPUC's DG Stats data, so the page answers "Pasadena
    // electric rates" from PWP's own rates page (July 1, 2026 rate card).
    localRates: {
      heading: 'Pasadena Water and Power electricity rates',
      paragraphs: [
        "Pasadena Water and Power (PWP), the City's own utility, supplies electricity in Pasadena and sets its own rates. A Pasadena home is not on the CPUC's net billing tariff for PG&E, SCE and SDG&E.",
        "PWP's residential rate (R-1/R-2) has two fixed monthly charges: an $11.00 customer charge and a $6.50 grid access charge, $17.50 in all. Each kWh then carries an energy charge of 10.0825¢, a transmission charge of 1.609¢ and a tiered distribution charge: 3.505¢ for the first 350 kWh a month, 14.018¢ for the next 400 kWh and 25.233¢ for every kWh above 750.",
        "Added together, that is about 15.2¢ per kWh for the first 350 kWh, 25.7¢ for the next 400 and 36.9¢ above 750 kWh. PWP recalculates its Power Cost Adjustment every month, so the energy charge moves. A Pasadena savings estimate should use the tier your usage reaches, since solar removes the most expensive kWh first.",
      ],
      faq: {
        question: 'What are Pasadena Water and Power electricity rates?',
        answer:
          "PWP's residential rate has a $17.50 monthly fixed charge ($11.00 customer charge plus a $6.50 grid access charge). Per kWh, it charges 10.0825¢ for energy and 1.609¢ for transmission, plus a distribution charge of 3.505¢ for the first 350 kWh a month, 14.018¢ for the next 400 kWh and 25.233¢ above 750 kWh. PWP adjusts the energy charge monthly. Source: Pasadena Water and Power, Water and Electric Rates, checked September 24, 2026.",
      },
      sources: [
        {
          label: 'Pasadena Water and Power, Water and Electric Rates (Residential R-1/R-2; Rate Card July 1, 2026)',
          url: 'https://pwp.cityofpasadena.net/water-and-electric-rates/',
          verifiedAt: '2026-09-24',
        },
      ],
    },
  },
  {
    slug: 'santa-clarita',
    city: 'Santa Clarita',
    county: 'Los Angeles County',
    utilityKey: 'sce',
    permitUrl: 'https://santaclarita.gov/building-safety/instantpermits/',
    permitFeeNote:
      "Santa Clarita's Building and Safety fee brochure for 2026-2027, effective August 24, 2026, lists a residential rooftop photovoltaic system at $450, and a main panel upgrade or change-out up to 400 amps at $44 plus staff charges. The brochure also lists a record maintenance charge of 10 percent of all related permit fees.",
    permitFeeSource: 'City of Santa Clarita, Instant Online Permits (Building & Safety)',
    permitSources: [
      {
        label: 'City of Santa Clarita, Building & Safety Fee Brochure 2026-2027, effective August 24, 2026 (Electrical Permits: Residential Photo Voltaic System)',
        url: 'https://santaclarita.gov/building-safety/wp-content/uploads/sites/12/2026/08/2026-2027-BS-Fee-Brochure.pdf',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Rooftop PV and energy storage systems are among the residential permits the City issues instantly online through Symbium, and inspections can be booked online or through the inspection hotline. Since May 1, 2026, the older PVA permits are being replaced by these Symbium permits.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'long-beach',
    city: 'Long Beach',
    county: 'Los Angeles County',
    utilityKey: 'sce',
    permitUrl: 'https://longbeach.gov/lbcd/building/permit-center/solar-permit/',
    permitFeeNote:
      "Long Beach's Information Bulletin IB-023 (revised July 17, 2024) sets the total express permit fee for a flush-mounted rooftop system of 38.4 kW or less, including all surcharges and filing fees and every required inspection, at $386.62 for solar alone, $447.45 for solar with a battery, and $264.95 for a battery alone. Extra fees apply if the project needs planning, electrical or building review.",
    permitFeeSource: 'City of Long Beach, Solar Photovoltaic (PV) Process',
    permitSources: [
      {
        label: 'City of Long Beach, Information Bulletin IB-023, Guideline for Express Permit of Rooftop Solar PV System 38.4kW (Rev. 07-17-2024)',
        url: 'https://longbeach.gov/globalassets/lbcd/media-library/documents/building--safety/information-bulletins/ib-023',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Residential applications go through the City's online permitting portal (permitslicenses.longbeach.gov) with the express checklist, and fees are paid online. The California Energy Commission's SB 379 data lists Long Beach's platform as a custom one.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'santa-ana',
    city: 'Santa Ana',
    county: 'Orange County',
    utilityKey: 'sce',
    permitUrl: 'https://www.santa-ana.org/upcoming-changes-to-the-residential-solar-permit-requirement-effective-june-1st-2026/',
    permitFeeNote:
      "Santa Ana says SolarAPP+ collects a one-time fee of $35.00, and that the City's application fee is separate and the same as for a regular solar permit. The City's solar pages do not state that amount.",
    permitFeeSource: 'City of Santa Ana, Upcoming Changes to the Residential Solar Permit Requirement (June 1, 2026)',
    permitSources: [
      {
        label: 'City of Santa Ana, Does SolarAPP+ collect fees and will the City be charging fees?',
        url: 'https://santa-ana.gov/question/does-solarapp-collect-fees-and-will-the-city-be-charging-fees',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      'Yes. Since June 1, 2026, Santa Ana issues residential solar permits only after SolarAPP+ approval, and projects without it are not processed.',
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'sacramento',
    city: 'Sacramento',
    county: 'Sacramento County',
    utilityKey: 'smud',
    permitUrl: 'https://www.cityofsacramento.gov/content/dam/portal/it/digitalstrategy/Residential%20SolarApp.pdf',
    permitFeeNote:
      "Sacramento's streamlined permit for residential solar is $450 for a system up to 15 kW, plus $15 per kW above 15 kW, effective July 19, 2025 under Resolution 2024-0153. The City offers it as an alternative to its standard value-based building permit and plan review fees, and says it covers building plan review, inspection and application intake.",
    permitFeeSource: 'City of Sacramento, Residential SolarApp+ in support of SB-379 (Information Technology, completed fiscal year 2023/2024)',
    permitSources: [
      {
        label: 'City of Sacramento, Fees and Charges (open data): Streamlined Permit for Residential & Commercial Solar PV and Solar Water Heater Systems, fee table effective July 19, 2025',
        url: 'https://services5.arcgis.com/54falWtcpty3V47Z/arcgis/rest/services/Fees_And_Charges/FeatureServer/1/11/attachments/10',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. The City connected SolarAPP+ to its Accela Citizen Access portal in fiscal year 2023/24, so a qualifying residential system can be applied for, paid for and permitted online, and automatically when both SolarAPP+ and City conditions are met.",
    sourcesFetchedAt: '2026-09-23',
    // 2026-09-24 (gold-standard plan, Block 3 gate): SMUD homes are not in the
    // CPUC's DG Stats data, so the page answers "SMUD rates" from SMUD's own
    // residential rates page. Same prices as src/data/facts.ts (smudRates,
    // smudExportRate), which the weekly fact check re-reads.
    localRates: {
      heading: 'SMUD electricity rates in Sacramento',
      paragraphs: [
        "The Sacramento Municipal Utility District (SMUD) supplies electricity in Sacramento. It sets its own rates, so the CPUC's net billing tariff for PG&E, SCE and SDG&E does not apply to a Sacramento home.",
        "On SMUD's Time-of-Day (5-8 p.m.) Rate, summer prices (June 1 to September 30) are $0.1550 per kWh off-peak, $0.2139 mid-peak and $0.3765 at peak, which is weekdays from 5 to 8 p.m. From October 1 to May 31 they are $0.1285 off-peak and $0.1776 at peak. Every plan adds a System Infrastructure Fixed Charge of $27.00 a month ($17 on the Low Use rate).",
        "SMUD's Solar and Storage Rate option credits energy a solar home sends to the grid at 9.6¢ per kWh, at any hour and in any season. That is well below the 5-8 p.m. peak price, so a Sacramento savings estimate should count how much of the system's output the home uses itself.",
      ],
      faq: {
        question: 'What are SMUD electricity rates in Sacramento?',
        answer:
          "On SMUD's Time-of-Day (5-8 p.m.) Rate, summer prices are $0.1550 per kWh off-peak, $0.2139 mid-peak and $0.3765 at peak (weekdays 5 to 8 p.m.); from October through May they are $0.1285 off-peak and $0.1776 at peak. A System Infrastructure Fixed Charge of $27.00 a month applies, and SMUD's Solar and Storage Rate credits exported solar at 9.6¢ per kWh. Source: SMUD Residential rates, checked September 24, 2026.",
      },
      sources: [
        {
          label: 'Sacramento Municipal Utility District, Residential rates (current rate charges; System Infrastructure Fixed Charge; Solar and Storage Rate option)',
          url: 'https://www.smud.org/Rate-Information/Residential-rates',
          verifiedAt: '2026-09-24',
        },
      ],
    },
  },
  {
    slug: 'sunnyvale',
    city: 'Sunnyvale',
    county: 'Santa Clara County',
    utilityKey: 'pge',
    cca: 'Silicon Valley Clean Energy',
    ccaSource: SVCE_ABOUT,
    permitUrl: 'https://www.sunnyvale.ca.gov/business-and-development/planning-and-building/solarapp-for-solar-installers',
    permitFeeNote:
      "Sunnyvale's Building Permit Fees for fiscal year 2026/27, effective August 18, 2026, list a photovoltaic/solar system permit for a single-family home or duplex at $389.00, plus a $42.50 permit issuance fee and a technology surcharge of 5 percent of the permit fee on each project. SolarAPP+ charges its own $25 processing fee, which covers three revisions.",
    permitFeeSource: 'City of Sunnyvale, SolarApp+ for Solar Installers',
    permitSources: [
      {
        label: 'City of Sunnyvale, Building Permit Fees, fiscal year 26/27, effective August 18, 2026',
        url: 'https://www.sunnyvale.ca.gov/home/showpublisheddocument/1626/639228338481470000',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Licensed contractors get SolarAPP+ pre-approval, then apply for a Photovoltaic (SolarAPP+) permit in the City's E-OneStop online services, upload the approved plans and pay; inspections are requested in the same account. A Sunnyvale business license is required.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'visalia',
    city: 'Visalia',
    county: 'Tulare County',
    utilityKey: 'sce',
    permitUrl: 'https://www.visalia.gov/269/SolarApp',
    permitFeeNote:
      "Visalia's SolarApp page says SolarAPP+ charges its own fee and that City permit fees are paid online, by Visa or MasterCard only, before the permit auto-issues; it does not state the amounts. The City's development fee book could not be read when checked.",
    permitFeeSource: 'City of Visalia, SolarApp',
    permitOnline:
      "Yes. Licensed contractors take the design through SolarAPP+, then file a Residential Solar Permit with SolarApp in the City's Citizen Access portal, where the permit is auto-issued within seconds of payment. At inspection the contractor has to provide the project's single-line diagram and load calculations.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'mountain-view',
    city: 'Mountain View',
    county: 'Santa Clara County',
    utilityKey: 'pge',
    cca: 'Silicon Valley Clean Energy',
    ccaSource: SVCE_ABOUT,
    permitUrl: 'https://developmentpermits.mountainview.gov/about-permits/apply-for-permit/building-permits/solar-permits',
    permitFeeNote:
      "Mountain View's Solar Permits page does not state a dollar figure, and the City's Building Permit Fees page refers to that page for solar. For systems filed through ePermitsMV, the City collects the fee online before the permit issues.",
    permitFeeSource: 'City of Mountain View, Solar Permits',
    permitSources: [
      {
        label: 'City of Mountain View, Building Permit Fees (Solar Permits (Photovoltaic): see the Solar Permits page)',
        url: 'https://developmentpermits.mountainview.gov/about-permits/fees/building-fees',
        verifiedAt: '2026-09-23',
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. Contractors registered with SolarAPP+ can file roof-mounted or building-integrated solar on a single-family home, with or without battery storage or a service panel upgrade, and the permit issues automatically; it is still a City of Mountain View building permit. A City building inspector then checks the installation at a site inspection the contractor schedules at least one business day after approval. Multifamily, commercial and other single-family systems go through ePermitsMV with plans.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'huntington-beach',
    city: 'Huntington Beach',
    county: 'Orange County',
    utilityKey: 'sce',
    permitUrl: 'https://www.huntingtonbeachca.gov/departments/community_development/building___inspection/solar_app.php',
    permitFeeNote:
      "Huntington Beach's SolarAPP+ page says SolarAPP+ charges its own processing fee, currently $35, and that the City's permit fees are then paid online in the HB ACA portal. It does not state the City's amount.",
    permitFeeSource: 'City of Huntington Beach, SolarAPP+',
    permitSources: [CEC_SB379_DATA],
    permitOnline:
      "Yes. After SolarAPP+ approval, the contractor creates a Residential Photovoltaic System record in the City's HB ACA portal, uploads the SolarAPP+ documents, pays and requests inspections there. SolarAPP+ can approve rooftop systems up to 38.4 kW on a main service of up to 400A, with service disconnects and busbars rated up to 225A. A homeowner installing their own system cannot use it without the contractor licenses the work requires.",
    sourcesFetchedAt: '2026-09-23',
    extraFaqs: [
      {
        question: 'Is Huntington Beach still part of Orange County Power Authority?',
        answer:
          "No. The Huntington Beach City Council voted in May 2023 to leave Orange County Power Authority. OCPA says solar (NEM) customers in the city were switched to SCE bundled service beginning in April 2024 and all other customers in June 2024, so SCE again provides both generation and delivery. OCPA also says the move back did not change a customer's NEM type, whether NEM 1.0, NEM 2.0 or the Solar Billing Plan.",
      },
    ],
  },
  {
    slug: 'arcata',
    city: 'Arcata',
    county: 'Humboldt County',
    utilityKey: 'pge',
    cca: 'Redwood Coast Energy Authority',
    ccaSource: {
      label: "City of Arcata, Community Choice Energy Program (Arcata joined Redwood Coast Energy Authority's program in May 2017)",
      url: 'https://www.cityofarcata.org/739/Community-Choice-Energy-Program',
      verifiedAt: '2026-09-23',
    },
    permitUrl: 'https://www.cityofarcata.org/166/Building-Permits',
    // An undated City submittal guide for PV of 10 kW or less quotes a
    // "standard fee" of $121.18, below the current $159.00 minimum permit fee,
    // and links a solar page that now 404s. It is not quoted here.
    permitFeeNote:
      "Arcata's Master Fee Schedule for fiscal year 2026-27, effective September 21, 2026, has no separate line for solar. Building permit fees there are set by project valuation, with a $159.00 minimum permit fee and plan review at 65 percent of the building permit fee, and 4 percent each is added for permit issuance, database management and technology, waste diversion and the General Plan, all figured on the permit fee and plan review deposit. Confirm the amount for your project with the Building Division at 707-822-5956.",
    permitFeeSource: 'City of Arcata, Building Permits',
    permitSources: [
      {
        label: 'City of Arcata, Master Fee Schedule FY 2026-27, effective September 21, 2026 (section 21, Building and Other Related Permit Fees)',
        url: 'https://www.cityofarcata.org/DocumentCenter/View/16642/2027-Master-Fee-Schedule-Updated-8-19-2026',
        verifiedAt: '2026-09-23',
      },
      {
        label: 'City of Arcata, online permit portal: PV/EV/Battery Backup Permit',
        url: 'https://arcataca.viewpointcloud.com/categories/1089',
        verifiedAt: '2026-09-23',
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. Arcata's online permit portal offers a PV/EV/Battery Backup Permit that can be applied for at any time, though the City notes approval happens only during business hours. The California Energy Commission's SB 379 data lists Arcata as without an automated solar permitting platform.",
    sourcesFetchedAt: '2026-09-23',
    extraFaqs: [
      {
        question: 'How much does solar cost in Humboldt County?',
        answer:
          "No public source prices an installation for the county. What differs by address is the permit and the power provider. Inside the City of Arcata, the 2026-27 fee schedule has no separate solar fee: building permits are priced by valuation with a $159.00 minimum. The California Energy Commission's SB 379 data lists Humboldt County's own permitting platform as SolarAPP+. Redwood Coast Energy Authority, which says about 90 percent of Humboldt County residents get their electricity from it, supplies generation, and PG&E delivers the power and handles billing.",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // Added 2026-09-23, Tier 3 city-cost wave. Each row answers a "solar panel
  // cost <city>" cluster that passed a California page-one check that day.
  // Every field was fetched that day from the city, the utility, the CCA or
  // the CEC; the serving utility was checked against the CEC service-territory
  // layer overlaid on the Census TIGERweb city boundary.
  // ---------------------------------------------------------------------------
  {
    slug: 'concord',
    city: 'Concord',
    county: 'Contra Costa County',
    utilityKey: 'pge',
    cca: 'MCE',
    ccaSource: MCE_ABOUT,
    permitUrl: 'https://www.cityofconcord.org/718/Solar-PV-Projects',
    permitFeeNote:
      "Concord's Building Division fee schedule (Resolution 26.6042.1, last adopted April 28, 2026) prices a residential SolarAPP+ permit, up to 38.4 kW, at a $70 administrative fee plus a $380 inspection fee, and a residential permit reviewed from drawings at $70 plus $115 for plan review and $265 for inspection; both come to $450 for a system up to 15 kW and rise per kW above that. Inspecting a main service panel upgrade adds $192. The schedule says the City's administrative, technology and General Plan fees do not apply to solar permits. SolarAPP+ charges its own processing fee.",
    permitFeeSource: 'City of Concord, Solar PV Projects',
    permitSources: [
      {
        label: 'City of Concord, Building Division and Building Permit Fees (Exhibit A, Resolution 78 6042; Res. No. 26.6042.1, last adopted April 28, 2026), section 6, Solar Energy System Permits',
        url: 'https://www.cityofconcord.org/DocumentCenter/View/2580/Building-Permit-Fees-Schedule-PDF',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      'Yes. All residential rooftop applications go through the City\'s Permit Portal. Contractors can use SolarAPP+ and apply under the "Solar PV (Solar APP)" permit type; otherwise the design comes from a design professional or from the City\'s standardized central-inverter and micro-inverter plans, filed under "Solar PV".',
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'richmond',
    city: 'Richmond',
    county: 'Contra Costa County',
    utilityKey: 'pge',
    cca: 'MCE',
    ccaSource: MCE_ABOUT,
    permitUrl: 'https://www.richmondca.gov/4174/SolarAPP-For-Solar-Installers',
    permitFeeNote:
      "Richmond's Master Fee Schedule for fiscal year 2026-27, which the City lists as effective July 23, 2026, sets the building fee for a residential solar system (Solar Structure - Residential System) at $450. SolarAPP+ charges its own processing fee, which the City's page does not state.",
    permitFeeSource: 'City of Richmond, SolarAPP+ For Solar Installers',
    permitSources: [
      {
        label: 'City of Richmond, Master Fee Schedule FY 2026-27 (Community Development - Building Permits: Solar Structure - Residential System)',
        url: 'https://www.ci.richmond.ca.us/DocumentCenter/View/80176',
        verifiedAt: '2026-09-23',
      },
      {
        label: 'City of Richmond, Residential Solar Systems (standard plans and expedited eligibility checklist)',
        url: 'https://www.ci.richmond.ca.us/2771/Residential-Solar-Systems',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Eligible residential, roof-mounted retrofit systems go through SolarAPP+, and the City's iMS system creates an instant permit once the contractor's CSLB license and Richmond business tax certificate are current and the SolarAPP+ approval and signed permit application are uploaded under the names the City specifies. A home on the Richmond Historic Register needs a certificate of appropriateness from the Planning Division before the SolarAPP+ application.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'berkeley',
    city: 'Berkeley',
    county: 'Alameda County',
    utilityKey: 'pge',
    cca: 'Ava Community Energy',
    ccaSource: AVA_COMMUNITIES,
    permitUrl: 'https://berkeleyca.gov/construction-development/permits-design-parameters/permit-types/solar-permits',
    permitFeeNote:
      "Berkeley's Planning and Development Fee Schedule, effective July 1, 2025, lists a residential solar permit filed through SolarAPP+ at $100 per system. A residential system of 15 kW or less that goes through City review is $200 with plan check included, and a larger one is $250 plus $15 per kW above 15 kW. A residential energy storage system up to 50 kW in aggregate is $150. The same schedule adds a 5 percent technology enhancement fee to building and electrical permit fees.",
    permitFeeSource: 'City of Berkeley, Solar Permits',
    permitSources: [
      {
        label: 'City of Berkeley, Planning and Development Fee Schedule, effective July 1, 2025 (V. Electrical Permits: Solar/Photovoltaic Residential; Energy Storage System; XIV. Technology Enhancement Fee)',
        url: 'https://berkeleyca.gov/sites/default/files/2026-04/City%20of%20Berkeley%20Planning%20and%20Development%20Fee%20Schedule%20July%202025.pdf',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. A rooftop system with or without storage on a single-family home or duplex can get a real-time permit through SolarAPP+ and a record in Berkeley's Permits Online. A system of 10 kW AC or less that passes the City's eligibility checklist can use the streamlined process instead, online or by appointment, and other projects go through the standard process, which the City says is reviewed within one working day.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'santa-clara',
    city: 'Santa Clara',
    county: 'Santa Clara County',
    utilityKey: 'svp',
    permitUrl: 'https://www.santaclaraca.gov/our-city/departments-a-f/community-development/building-division/solarapp',
    permitFeeNote:
      "Santa Clara's Municipal Fee Schedule for fiscal year 2026/27, adopted April 21, 2026, lists a residential photovoltaic building permit at $450 for 15 kW or less plus $15 for each kW above, citing Government Code section 66015, and a separate Fire Prevention construction-permit fee of $463 for a residential solar photovoltaic power system. The schedule marks both as subject to its 3.37 percent technology fee. SolarAPP+ charges its own processing fee.",
    permitFeeSource: 'City of Santa Clara, SolarAPP+ (Building Division)',
    permitSources: [
      {
        label: 'City of Santa Clara, FY 2026/27 Municipal Fee Schedule, adopted April 21, 2026 (Building: Photovoltaic - Residential; Fire / Construction Permits: Solar Photovoltaic Power Systems - Residential)',
        url: 'https://www.santaclaraca.gov/home/showpublisheddocument/86787/639046974163330000',
        verifiedAt: '2026-09-23',
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. Licensed contractors can permit an eligible project through SolarAPP+, with energy storage limited to one battery of no more than 20 kWh, and must include Silicon Valley Power's interconnection agreement pre-approval letter. Projects that do not qualify are filed through the City's Permitting Online Portal (POP). The City inspects the installation either way.",
    sourcesFetchedAt: '2026-09-23',
    extraFaqs: [
      {
        question: 'Is net metering still available in Santa Clara?',
        answer:
          "Yes, for now. Silicon Valley Power, not PG&E, serves the city, and its Rate Schedule NM offers net metering under Public Utilities Code section 2827. SVP says it has not reached the 5 percent threshold in that section, after which a utility of its size need not offer net metering to new customers, and that a successor tariff, if the City Council adopts one, may be priced differently from NEM 2.0 or NEM 3.0 elsewhere. Solar quotes written for PG&E's Solar Billing Plan do not apply to an SVP account.",
      },
    ],
  },
  {
    slug: 'san-clemente',
    city: 'San Clemente',
    county: 'Orange County',
    utilityKey: 'sdge',
    permitUrl: 'https://www.sanclemente.gov/258/Permits',
    permitFeeNote:
      "San Clemente's Solar Permit Fees sheet lists a residential photovoltaic permit at $400 for a system up to 15 kW plus $15 for each kW above 15 kW. The City's submittal bulletin for systems of 10 kW or less adds a plan check fee of 25 percent of the electrical permit fee and calls $450 typical for most solar systems. Neither document carries a date, so confirm the amount with the Building Division. SolarAPP+ charges its own $25 processing fee.",
    permitFeeSource: 'City of San Clemente, Permits (Solar/Photovoltaic Permits)',
    permitSources: [
      {
        label: 'City of San Clemente, Solar Permit Fees (undated)',
        url: 'https://www.sanclemente.gov/DocumentCenter/View/660',
        verifiedAt: '2026-09-23',
      },
      {
        label: 'City of San Clemente, Submittal Requirements Bulletin: Solar Photovoltaic Installations 10 kW or Less in One- and Two-Family Dwellings (undated)',
        url: 'https://www.sanclemente.gov/DocumentCenter/View/666/SC-Solar-PV-Step-1-Submittal-Requirements-PDF',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Licensed contractors registered with SolarAPP+ can permit a rooftop system on a permitted main dwelling, not ballasted, and upload the approval and plans to the City's eTRAKiT portal; permit runners may not request SolarAPP+ permits. Other solar applications are emailed to the Building Division as PDFs.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'clovis',
    city: 'Clovis',
    county: 'Fresno County',
    utilityKey: 'pge',
    permitUrl: 'https://www.clovisca.gov/services/planning_development/building/index.php',
    permitFeeNote:
      "Clovis's Building Division page says residential roof-mounted and ground-mounted photovoltaic permits have their own fee structure, but neither that page nor the City's solar submittal documents state the amount. Ask the Building Division, or the installer, for the City's figure. SolarAPP+ charges its own processing fee.",
    permitFeeSource: 'City of Clovis, Building Division (Solar Information)',
    permitSources: [
      {
        label: 'City of Clovis, Eligibility List for SolarAPP+ residential roof-mounted photovoltaic systems',
        url: 'https://www.clovisca.gov/documents/Services/Planning%20Development/Building/Photovoltaic-System-Eligibility-List.pdf',
        verifiedAt: '2026-09-23',
      },
      {
        label: 'City of Clovis, Residential Roof-Mounted Photovoltaic Submittal Requirements (Rev. 05-24-2024)',
        url: 'https://www.clovisca.gov/documents/Services/Planning%20Development/Building/Photovoltaic%20Minimum%20Submittal%20Requirements%20for%20Roof%20Mounted%20Systems%202025.pdf',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Since September 30, 2023 there are three routes: plans filed in person, plans filed online through the City's CSS portal, or a SolarAPP+ application through the same portal. SolarAPP+ is for contractors only, so an owner-builder uses one of the first two.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'lakewood',
    city: 'Lakewood',
    county: 'Los Angeles County',
    utilityKey: 'sce',
    permitUrl: 'https://www.lakewoodca.gov/Development-Services/Building/Solar-Permitting-for-Homes',
    permitFeeNote:
      "Lakewood's Building Permits page says the City charges Los Angeles County's Building and Safety fee schedules plus an 18 percent overhead charge under City Council Resolutions 2010-22 and 2012-42, and that those fees rose 3 percent on July 1, 2025. The County electrical fee schedule it links did not open when checked, so no solar figure is quoted here. SolarAPP+ charges its own processing fee, which covers up to three revisions.",
    permitFeeSource: 'City of Lakewood, Solar Permitting for Homes',
    permitSources: [
      {
        label: 'City of Lakewood, Building Permits (permit fee schedules; 18% overhead charge on the County fee schedule)',
        url: 'https://www.lakewoodca.gov/Development-Services/Building/Building-Permits',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Licensed contractors submit eligible rooftop solar and storage through SolarAPP+, then pay the remaining City fees when prompted and print the permit. A system that does not qualify follows the City's submittal checklist and goes through the Online Permit Center. Inspections are requested by phone or by email to the inspection address the City lists.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'elk-grove',
    city: 'Elk Grove',
    county: 'Sacramento County',
    utilityKey: 'smud',
    permitUrl: 'https://www.elkgrovecity.org/departments-and-divisions/building-safety-inspection-and-permits',
    permitFeeNote:
      "Elk Grove's Building Safety, Inspection and Permits page does not publish a solar permit fee, so ask the Building Division or the installer for the City's figure before comparing quotes. If the job goes through SolarAPP+, SolarAPP+ charges its own processing fee.",
    permitFeeSource: 'City of Elk Grove, Building Safety, Inspection and Permits',
    permitSources: [CEC_SB379_DATA],
    permitOnline:
      "Yes. Elk Grove's Building Division requires electronic submittals for permit applications and related documents. Its page does not describe a solar-specific route; the California Energy Commission's SB 379 data, which each city reports itself, lists Elk Grove's platform as SolarAPP+.",
    sourcesFetchedAt: '2026-09-23',
    extraFaqs: [
      {
        question: 'How does SMUD pay for solar exports in Elk Grove?',
        answer:
          "Elk Grove is SMUD territory, not PG&E, so PG&E's Solar Billing Plan does not apply. A home approved to install solar on or after March 1, 2022 goes on SMUD's Solar and Storage Rate, which since June 1, 2026 pays 9.6 cents per kWh for exported power regardless of time of day or season. The customer stays on SMUD's Time-of-Day (5-8 p.m.) rate, credits carry over to later bills, and SMUD charges a one-time fee to connect a new system.",
      },
    ],
  },
  {
    slug: 'mission-viejo',
    city: 'Mission Viejo',
    county: 'Orange County',
    utilityKey: 'sce',
    permitUrl: 'https://cityofmissionviejo.org/departments/community-development/building-services',
    permitFeeNote:
      "Mission Viejo's Master Fee Schedule for building fees, effective April 1, 2023, which the Building Services page links, sets a residential solar system up to and including 15 kW at $450 and adds $15 for each kW above 15 kW, citing AB 1414. Where SolarAPP+ is used, it charges its own processing fee.",
    permitFeeSource: 'City of Mission Viejo, Building Services',
    permitSources: [
      {
        label: 'City of Mission Viejo, Master Fee Schedule, Building Fees, effective April 1, 2023 (14a-14b, Residential Solar Systems)',
        url: 'https://www.missionviejo.gov/sites/default/files/building-fee-schedule-4-1-23.pdf',
        verifiedAt: '2026-09-23',
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. All permits and inspections in Mission Viejo are submitted and scheduled online through the City's Client Self Service portal, and every contact listed on a permit needs an account there. Inspections are next business day when requested by 4 p.m. The City's page does not describe a solar route; the California Energy Commission's SB 379 data lists Mission Viejo's platform as SolarAPP+.",
    sourcesFetchedAt: '2026-09-23',
    utilitySplit: {
      others: 'SDG&E',
      note:
        "The California Energy Commission's service-territory map places about 72 percent of Mission Viejo in Southern California Edison's territory and about 28 percent, in the southern part of the city, in San Diego Gas & Electric's. Read the utility name on your bill before using either utility's rate.",
      sources: [CEC_SERVICE_TERRITORY_SOURCE_0923],
    },
  },
  {
    slug: 'victorville',
    city: 'Victorville',
    county: 'San Bernardino County',
    utilityKey: 'sce',
    permitUrl: 'https://www.victorvilleca.gov/Government/City-Departments/Building/SolarApp-Automated-Solar-Plan-Reviews',
    permitFeeNote:
      "Victorville's Stand Alone Permits Fee Calculation Chart, updated January 8, 2026, lists a residential photovoltaic system up to 15 kW at $372.00 and a commercial system up to 50 kW at $1,000.00. The City's SolarAPP+ page says SolarAPP+ charges its own processing fee in addition to the City's permit fees.",
    permitFeeSource: 'City of Victorville, SolarApp+ Automated Solar Plan Reviews',
    permitSources: [
      {
        label: 'City of Victorville, Stand Alone Permits Fee Calculation Chart (updated January 8, 2026): Photovoltaic System (Residential up to 15kw)',
        url: 'https://www.victorvilleca.gov/files/assets/city/v/1/building/documents/fees/stand_alone_fees_2026.pdf',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Eligible residential rooftop systems go through SolarAPP+, and the City then emails a Victorville permit number for scheduling inspections. Inspections can be booked in the City's Citizen Self Service portal until midnight before the requested day, or by phone with a live person by the business day before; the City does not take inspection requests by voicemail or email.",
    sourcesFetchedAt: '2026-09-23',
    utilitySplit: {
      others: 'Victorville Municipal Utilities Services',
      note:
        "The California Energy Commission's service-territory map places Victorville in Southern California Edison's territory and also shows about 6 percent of the city's area, in its northern part, in the territory of Victorville Municipal Utilities Services. Read the utility name on your bill before using an SCE rate.",
      sources: [CEC_SERVICE_TERRITORY_SOURCE_0923],
    },
  },
  {
    slug: 'glendale',
    city: 'Glendale',
    county: 'Los Angeles County',
    utilityKey: 'gwp',
    permitUrl:
      'https://www.glendaleca.gov/government/departments/glendale-water-and-power/solar-education/guide-for-applying-for-pv-interconnection-and-nem-for-under-15-kw-cec-ac-residential-systems',
    permitFeeNote:
      "Glendale does not publish its solar permit fee. Under the City's process, Building and Safety reviews the plans after Glendale Water & Power approves the interconnection application and then contacts the contractor for payment, so ask the installer what the City permit line in a quote covers.",
    permitFeeSource: 'Glendale Water & Power, Guide for Applying for PV Interconnection and NEM (residential systems under 15 kW CEC-AC)',
    permitSources: [
      {
        label: 'Glendale Water & Power, Net Energy Metering (NEM) Program (changes effective November 1, 2023 and January 19, 2026; historic NEM compensation rates)',
        url: 'https://www.glendaleca.gov/government/departments/glendale-water-and-power/solar-education/guide-for-applying-for-interconnection',
        verifiedAt: '2026-09-23',
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes, in two steps. The customer or contractor first files the interconnection application in GWP's PowerClerk portal, which GWP says it typically reviews in 3-5 business days; the full plan set then goes to Building and Safety through the Glendale Permits portal for building, electrical and fire review. The California Energy Commission's SB 379 data lists Glendale's platform as a custom one.",
    sourcesFetchedAt: '2026-09-23',
    extraFaqs: [
      {
        question: 'Does Glendale Water & Power still offer net metering?',
        answer:
          "Yes. GWP says it continues to make net energy metering available and credits excess generation to the account, although it no longer offers solar incentives. Since November 1, 2023, a system up to 10 kW CEC-AC is exempt from GWP's cap of 110 percent of the past 12 months' usage and may be paired with up to 30 kWh of storage. GWP's published NEM compensation rate for 2025 was $0.05639 per kWh. PG&E's and SCE's Solar Billing Plans do not apply to a GWP account.",
      },
    ],
  },
  {
    slug: 'santa-barbara',
    city: 'Santa Barbara',
    county: 'Santa Barbara County',
    utilityKey: 'sce',
    cca: 'Santa Barbara Clean Energy',
    ccaSource: SCE_CCA_LIST,
    permitUrl: 'https://santabarbaraca.gov/services/construction-land-development/fee-information',
    permitFeeNote:
      "Santa Barbara's Building and Safety fee schedule for September 1, 2026 through August 31, 2027 lists a residential photovoltaic system of 15 kW or less at $450, plus $15 for each kW above 15 kW.",
    permitFeeSource: 'City of Santa Barbara, Fee Information (Building & Safety)',
    permitSources: [
      {
        label: 'City of Santa Barbara, Building and Safety Fees, effective September 1, 2026 through August 31, 2027 (Photovoltaic (PV) System, Residential)',
        url: 'https://santabarbaraca.gov/sites/default/files/2026-08/FY27%20B%26S%20Fee%20Schedule%20-%20Print%20Ready%20FINAL_AOD.pdf',
        verifiedAt: '2026-09-23',
      },
      {
        label: 'City of Santa Barbara, Photovoltaic System Requirements for AB 2188 Expedited Review (updated November 20, 2019)',
        url: 'https://santabarbaraca.gov/sites/default/files/documents/Community%20Development/Electrical/City%20PV1%20System%20Requirements%20for%20AB2188%20Expedited%20Review.pdf',
        verifiedAt: '2026-09-23',
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. Applications, resubmittals and fees go through the City's Accela Citizen Access portal. A roof-mounted system of 10 kW AC or less on a one- or two-family home, no more than 10 inches above the roof and without battery storage, qualifies for the City's AB 2188 expedited review; anything else goes through standard review. The California Energy Commission's SB 379 data lists Santa Barbara's platform as a custom one.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'vacaville',
    city: 'Vacaville',
    county: 'Solano County',
    utilityKey: 'pge',
    permitUrl: 'https://www.cityofvacaville.gov/government/community-development/building/building-permits/apply-for-residential-solar-permits',
    permitFeeNote:
      "Vacaville's solar page does not state the permit fee. The City's fiscal year 2026-27 fee schedule includes a solar panels line, but the posted copy could not be read in a form that ties an amount to it, so no figure is quoted here. The City says refunds are generally not available for photovoltaic permits issued online.",
    permitFeeSource: 'City of Vacaville, Apply for Residential Solar Permits',
    permitSources: [
      {
        label: 'City of Vacaville, Service & Facility Fees FY 2026-27 (Building Plan Check & Inspection Fees)',
        url: 'https://www.cityofvacaville.gov/home/showpublisheddocument/27043/639222220803330000',
        verifiedAt: '2026-09-23',
      },
    ],
    permitOnline:
      "Yes. Residential rooftop solar permits of any size are available online, and a solar permit includes a main panel change-out if one is wanted. The City's Symbium portal gives instantaneous plan review for qualifying solar and storage; other residential solar and battery applications go through eTRAKiT with plan review, which the City estimates at 1-3 business days.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'saratoga',
    city: 'Saratoga',
    county: 'Santa Clara County',
    utilityKey: 'pge',
    cca: 'Silicon Valley Clean Energy',
    ccaSource: SVCE_ABOUT,
    permitUrl: 'https://www.saratoga.ca.us/building',
    permitFeeNote:
      "Saratoga's Path to Permits guide lists fee assessment as a step after an application is filed in eTRAKiT, but the City's building pages do not state a solar permit fee. Ask the Building Division or the installer for the City's figure.",
    permitFeeSource: "City of Saratoga, Path to Permits (Community Development)",
    permitSources: [CEC_SB379_DATA],
    permitOnline:
      "Yes. Saratoga's Path to Permits guide sends building applications through the City's eTRAKiT portal. The City's pages do not describe a solar route; the California Energy Commission's SB 379 data, which each city reports itself, lists Saratoga's platform as Symbium.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'gilroy',
    city: 'Gilroy',
    county: 'Santa Clara County',
    utilityKey: 'pge',
    cca: 'Silicon Valley Clean Energy',
    ccaSource: SVCE_ABOUT,
    permitUrl: 'https://www.cityofgilroy.org/975/SolarApp-for-Residential-Solar-Installer',
    permitFeeNote:
      "Gilroy's SolarAPP+ page lists the City's solar photovoltaic permit fee at $450.00 for a residential system of 15 kW or less and $500.00 plus $15.00 per kW above 15 kW for a larger one. An energy storage system adds a $103.27 permit fee and a $146.77 Building Division inspection, and a system over 50 kWh also needs a $260.00 Fire Prevention inspection. SolarAPP+ charges its own processing fee, and a revision submittal is $137.03 plus hourly staff time.",
    permitFeeSource: 'City of Gilroy, SolarApp+ for Residential Solar Installers',
    permitSources: [CEC_SB379_DATA],
    permitOnline:
      "Yes. Eligible residential, roof-mounted retrofit systems go through SolarAPP+ for instant permitting. The City says a rooftop system of 38.4 kW or less needs a City building permit but no separate planning or fire review. Inspections are requested online or by email and are scheduled about 72 hours out.",
    sourcesFetchedAt: '2026-09-23',
  },
  {
    slug: 'san-ramon',
    city: 'San Ramon',
    county: 'Contra Costa County',
    utilityKey: 'pge',
    cca: 'MCE',
    ccaSource: MCE_ABOUT,
    permitUrl: 'https://www.sanramon.ca.gov/our_city/departments_and_divisions/community_development/building_and_safety_services/solar_a_p_p_/',
    permitFeeNote:
      "San Ramon's Master Fee Schedule for fiscal year 2026-27 lists SolarAPP+ permit designs at $450 each, and a residential photovoltaic installation reviewed by the City at $566 for a system of 10 kW or less plus $17 per additional kW. A first residential battery is $396 and each additional battery $35. The schedule also lists an $89 permit issuance fee and a 4.60 percent technology surcharge among its additional building fees.",
    permitFeeSource: 'City of San Ramon, SolarApp+ For Solar Installers',
    permitSources: [
      {
        label: 'City of San Ramon, Master Fee Schedule FY26-27, Exhibit 1 (Flat Fees: Photovoltaic (PV) Installation; Residential Solar Energy Storage; Additional Fees)',
        url: 'https://www.sanramon.ca.gov/our_city/permit_center/fee_resolution',
        verifiedAt: '2026-09-24',
      },
    ],
    permitOnline:
      "Yes. Contractors with an active San Ramon business license who have been added to the City's SolarAPP+ eligibility list apply for an Electrical Photovoltaic (SolarAPP) permit in the City's CSS portal, pay and return the signed permit card; inspections are scheduled in the same portal.",
    sourcesFetchedAt: '2026-09-24',
  },
  {
    slug: 'redding',
    city: 'Redding',
    county: 'Shasta County',
    utilityKey: 'reu',
    permitUrl: 'https://www.cityofredding.gov/government/departments/redding_electric_utility/going_green/solar_photovoltaic_(pv)_program.php',
    permitFeeNote:
      "Redding's Master Fee Schedule for fiscal year 2025-26 lists a residential photovoltaic system of 7 to 15 kW at $450.00, and a system of 16 kW and up at $450.00 plus $15.00 for each kW above 15 kW; the schedule has no line for a smaller system. The fiscal year 2026-27 schedule, whose building permit fees take effect October 19, 2026, keeps both figures. A battery is permitted separately, under the schedule's alternative power source line: $187.50, rising to $193.00 when the new building fees take effect. Redding Electric Utility's own solar paperwork and Generator Number come before the City permit.",
    permitFeeSource: 'Redding Electric Utility, Solar Photovoltaic (PV) Program',
    permitSources: [
      {
        label: 'City of Redding, Adopted FY 2025-26 Master Fee Schedule (Building Division, Electric Permit Fees: Photo Voltaic Systems - Residential; Alternative Power Source Other Than Solar Permit)',
        url: 'https://www.cityofredding.gov/Document%20Center/Departments/Finance/Accounting/Adopted%20FY%202025-26%20Master%20Fee%20Schedule.pdf',
        verifiedAt: '2026-09-24',
      },
      {
        label: 'City of Redding, Adopted FY 2026-27 Master Fee Schedule (development and building permit fees effective October 19, 2026, per the City\'s Master Fee Schedule page)',
        url: 'https://www.cityofredding.gov/Document%20Center/Departments/Finance/Accounting/Adopted%20FY%202026-27%20Master%20Fee%20Schedule.pdf',
        verifiedAt: '2026-09-24',
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. The Building Division's Apply for a Permit link opens the City's EnerGov Self Service portal, but the City will not accept a solar building permit application until Redding Electric Utility has received every item on its Solar PV Checklist and issued a Generator Number. The California Energy Commission's SB 379 data lists Redding's platform as SolarAPP+.",
    sourcesFetchedAt: '2026-09-24',
    extraFaqs: [
      {
        question: 'How does Redding Electric Utility credit solar?',
        answer:
          "Redding is served by Redding Electric Utility, not PG&E, so PG&E's Solar Billing Plan does not apply. Under REU's Zero Net Energy Service, a solar home is billed monthly for the energy it uses at the applicable retail rate, and power it sends to the grid is credited at what REU calls the current value of solar. REU limits a home system to 1 kW DC for every 1,752 kWh used on site in the previous 12 months, so 12,000 kWh a year allows about 6.85 kW DC, and a system sized beyond on-site demand does not qualify as a net generator. REU's residential rate (E1) has been a $40.00 monthly fixed charge plus $0.1492 per kWh since January 1, 2025.",
      },
    ],
  },
  {
    slug: 'redwood-city',
    city: 'Redwood City',
    county: 'San Mateo County',
    utilityKey: 'pge',
    cca: 'WestLight Energy (formerly Peninsula Clean Energy)',
    ccaSource: WESTLIGHT_HOME,
    permitUrl: 'https://www.redwoodcity.org/departments/community-development-and-transportation/building-inspection-code-enforcement/solarapp-automatic-permitting',
    permitFeeNote:
      "Redwood City's Master Fee Schedule for fiscal year 2026-27, effective July 1, 2026, lists a residential solar system of 15 kW or less at $450.00 and one of 16 kW or more at $450.00 plus $15.00 per kW. The same building fee table lists an electrical service permit of up to 200 amperes at $431.65 and a residential reroof at $645.25, and it adds a GIS maintenance and technology fee of 13 percent of the building permit fee without saying whether that applies to a solar permit.",
    permitFeeSource: 'City of Redwood City, SolarAPP+ Automatic Permitting',
    permitSources: [
      {
        label: 'City of Redwood City, Master Fee Schedule FY 2026-2027, effective July 1, 2026 (Building Inspection & Code Enforcement: Photovoltaic Solar Systems; Electrical Permit Fees, Services; Reroof; GIS maintenance/Technology Fee)',
        url: 'https://www.redwoodcity.org/home/showpublisheddocument/31457/639191130428800000',
        verifiedAt: '2026-09-24',
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Yes. Redwood City offers automatic solar permitting through SolarAPP+, and residential solar permits are then pulled through the City's eTRAKiT portal following its SolarAPP+ permitting guide. The California Energy Commission's SB 379 data lists Redwood City's platform as SolarAPP+.",
    sourcesFetchedAt: '2026-09-24',
  },
  {
    slug: 'cupertino',
    city: 'Cupertino',
    county: 'Santa Clara County',
    utilityKey: 'pge',
    cca: 'Silicon Valley Clean Energy',
    ccaSource: SVCE_ABOUT,
    permitUrl: 'https://www.cupertino.gov/Your-City/Departments/Community-Development/Building/Permits/Instant-Solar-Permit-SolarAPP',
    permitFeeNote:
      "Cupertino's building fee schedule (Resolution 26-047, fees effective July 1, 2026) lists a residential photovoltaic system up to 15 kW at $450, plus $15 for each kW above 15 kW. A battery energy storage system is $746 for up to three batteries and $439 for each additional one, and an electrical service of up to 200 amperes is $99. The schedule adds a 5.8 percent technology fee per permit. The City says the solar permit fee is an inspection fee that covers two inspections of the same item, and SolarAPP+ charges its own processing fee, currently $25.",
    permitFeeSource: 'City of Cupertino, Instant Solar Permit - SolarAPP+',
    permitSources: [
      {
        label: 'City of Cupertino, Fee Schedule - Building Fees (Resolution 26-047, fees effective July 1, 2026): Schedule D, Table 2 Services; Table 3 Photovoltaic System, Battery Energy Storage System and Technology Fee',
        url: 'https://www.cupertino.gov/files/assets/city/v/1/departments/documents/community-development/building/forms-amp-handouts-amp-fees/fees/fee-schedule-building-fees.pdf',
        verifiedAt: '2026-09-24',
      },
      CEC_SB379_DATA,
    ],
    permitOnline:
      "Paused for now. Contractors registered with SolarAPP+ can normally get an Instant Solar Permit for a residential rooftop system, with or without storage and optionally with a main electrical service upgrade, by uploading the SolarAPP+ approval to the City's Citizen Access portal. On September 24, 2026 the City's page said the instant permit service is not available at this time due to an upgrade with its business license system, and that all permits must be submitted by email to the Permit Center.",
    sourcesFetchedAt: '2026-09-24',
    extraFaqs: [
      {
        question: 'Can I still get an instant solar permit in Cupertino?',
        answer:
          "Not at the moment. Cupertino's Instant Solar Permit runs through SolarAPP+ and the City's Citizen Access portal, but on September 24, 2026 the City's page said the service is not available during an upgrade of its business license system and that all permits must be submitted by email to the Permit Center. Ask the installer which route your permit is taking and how that affects the schedule. The City's fee schedule has one residential solar line, $450 up to 15 kW, and SolarAPP+ adds its own $25 processing fee when it is used.",
      },
    ],
  },
];

/**
 * The URL a row is served at. It lives in the data module rather than in the
 * page template because the index at /solar-cost, the city route and the
 * template all need it and a second copy of the shape would drift.
 */
export function cityCostPath(slug: string): string {
  return `/solar-cost/${slug}`;
}

/** True when any rendered field is still a TODO placeholder. */
export function unsourcedFields(row: CityCostRow): string[] {
  const missing = GATED_FIELDS.filter((field) => {
    const value = row[field];
    return typeof value !== 'string' || value.trim() === '' || value.includes(UNSOURCED);
  }).map((field) => String(field));
  if (typeof row.cca === 'string' && row.cca.includes(UNSOURCED)) missing.push('cca');
  if (
    row.utilitySplit &&
    (row.utilitySplit.note.includes(UNSOURCED) ||
      row.utilitySplit.sources.length === 0 ||
      row.utilitySplit.sources.some((source) => !/^\d{4}-\d{2}-\d{2}$/.test(source.verifiedAt)))
  ) {
    missing.push('utilitySplit');
  }
  const isoDate = /^\d{4}-\d{2}-\d{2}$/;
  const badSource = (source: CityCostRowSource) =>
    !source.url.startsWith('https://') ||
    source.label.trim() === '' ||
    source.label.includes(UNSOURCED) ||
    !isoDate.test(source.verifiedAt);
  if (row.ccaSource && badSource(row.ccaSource)) missing.push('ccaSource');
  if (row.permitSources && (row.permitSources.length === 0 || row.permitSources.some(badSource))) {
    missing.push('permitSources');
  }
  if (
    row.extraFaqs &&
    row.extraFaqs.some(
      (faq) =>
        faq.question.trim() === '' ||
        faq.answer.trim() === '' ||
        faq.question.includes(UNSOURCED) ||
        faq.answer.includes(UNSOURCED),
    )
  ) {
    missing.push('extraFaqs');
  }
  if (row.localRates) {
    const { heading, paragraphs, faq, sources } = row.localRates;
    const texts = [heading, ...paragraphs, faq.question, faq.answer];
    if (
      paragraphs.length === 0 ||
      texts.some((text) => text.trim() === '' || text.includes(UNSOURCED)) ||
      sources.length === 0 ||
      sources.some(badSource)
    ) {
      missing.push('localRates');
    }
  }
  return missing;
}

/** The gate. A row only ships when every rendered field carries a source. */
export function isPublishableCityCostRow(row: CityCostRow): boolean {
  return unsourcedFields(row).length === 0;
}

/** Rows that pass the gate — the only rows any route or sitemap may use. */
export function getPublishableCityCostRows(): CityCostRow[] {
  return CITY_COST_ROWS.filter(isPublishableCityCostRow);
}

export function getPublishableCityCostSlugs(): string[] {
  return getPublishableCityCostRows().map((row) => row.slug);
}

/** Lookup that already applies the gate: a gated row reads as absent. */
export function getCityCostRow(slug: string): CityCostRow | undefined {
  return getPublishableCityCostRows().find((row) => row.slug === slug);
}
