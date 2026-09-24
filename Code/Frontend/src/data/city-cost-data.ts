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
  },
  {
    slug: "aptos",
    city: "Aptos",
    county: "Santa Cruz County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    permitUrl: "https://cdi.santacruzcountyca.gov/UPC/BuildingPermitsSafety/ApplyforaBuildingPermit/Solar(PV)SystemBatteryPermits/SolarAPPPlus.aspx",
    permitFeeNote:
      "Aptos is an unincorporated community in Santa Cruz County - permits come from the County, not a city. No dollar amount given; page states \"SolarAPP+ charges a small fee, but Santa Cruz County costs are lower since the solar application is pre-approved.\"",
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
      "yes \u2014 bulletin states applications may be submitted electronically (bldfax@bakersfieldcity.us or online portal) with processing in 1-3 days; page does not name SolarAPP+ specifically",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "california-city",
    city: "California City",
    county: "Kern County",
    utilityKey: "sce",
    permitUrl: "https://www.californiacity-ca.gov/CC/index.php/building/permit-applications-forms/solar-permits",
    permitFeeNote:
      "Page instructs residents to \"submit and obtain a solar or battery energy storage system (BESS) building permit for a residential building\" via SolarAPP+ but does not itemize a fee amount; the city's Master Fee Schedule (effective 5-11-2026) has no standalone PV/solar line item - solar permits fall under the general building-permit fee structure, calculated from \"the most recent edition of the ICC International Code Council Building Valuation Data.\"",
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
    cca: "Clean Power Alliance",
    permitUrl: "https://www.cityofcamarillo.org/departments/building___safety/building___safety_handouts.php",
    permitFeeNote:
      "The City publishes dedicated photovoltaic handouts \u2014 a Photovoltaic Solar Systems sheet, a Solar Eligibility Checklist and Solar Structure Criteria \u2014 but states no dollar figure for the solar permit on that page, and its Master User Fee Schedule is served through a document centre that did not return the file when checked. Ask Building & Safety for the current amount before accepting a quote that folds the permit in.",
    permitFeeSource: "City of Camarillo Building & Safety handouts page; Master User Fee Schedule not retrievable when checked",
    permitOnline:
      "Yes - Camarillo is listed as a live jurisdiction on SolarAPP+'s own directory (gosolarapp.org/where-is-solarapp-available) supporting PV, PV+storage, and storage-only permits.",
    sourcesFetchedAt: "2026-09-18",
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
    permitFeeNote:
      "The City states that plan check processing will not begin until payment of plan check fees has been confirmed by the Building Division. It publishes no specific dollar figure for a solar permit on that page, so ask the Building Division for the current amount.",
    permitFeeSource: "City of Corona Expedited Permits page (coronaca.gov)",
    permitOnline:
      "Yes, electronically via the city's eTRAKiT portal (etrakit.coronaca.gov); SolarAPP+ is not mentioned on this page - Corona uses its own expedited/Symbium solar review process instead",
    sourcesFetchedAt: "2026-09-18",
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
  },
  {
    slug: "grass-valley",
    city: "Grass Valley",
    county: "Nevada County",
    utilityKey: "pge",
    cca: "Pioneer Community Energy",
    permitUrl: "https://www.grassvalleyca.gov/pod/solarapp-submittals",
    permitFeeNote:
      "Names a specific dollar amount: a \"$25 administration fee to use SolarAPP+.\" Notes \"Separate City fees for a solar permit are charged through the building permit application process\" (amount not stated on this page).",
    permitFeeSource: "City of Grass Valley SolarAPP+ Submittals page",
    permitOnline:
      "Yes, online. SolarAPP+ is explicitly named; after SolarAPP+ approval, apply for the city permit via Accela Citizen Access selecting 'Express Permit' and uploading SolarAPP+ documentation.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "hollister",
    city: "Hollister",
    county: "San Benito County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    permitUrl: "https://hollister.ca.gov/government/development_services/solar_permits_for_photovoltaic_(pv)_systems_and_ev_charging_stations.php",
    permitFeeNote:
      "The City's adopted Building Permit Fee Schedule (effective August 2022) includes a specific, separately-listed flat fee line item for a residential photovoltaic permit. The schedule is published as a scanned image PDF, and the dollar figure was not reliably machine-readable, so it is not reported here; consult the fee schedule PDF directly for the current amount.",
    permitFeeSource: "City of Hollister Building Permit Fee Schedule (effective August 2022, PDF) - amount not machine-readable",
    permitOnline:
      "Not yet available per the Building Division page, which lists \"Online Permitting (Coming Soon)\" as of fetch. SolarAPP+ is not mentioned on the city's solar permit page found.",
    sourcesFetchedAt: "2026-09-18",
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
      "yes \u2014 online filing via the Symbium portal for SB 379 instantaneous plan review (\"Apply Online for a residential solar or energy storage permit\"); page does NOT name SolarAPP+",
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
      "Yes for general building permits via the city's HDL Online Permitting Portal (requires a City of Marina business license for contractors); the page does not mention SolarAPP+ specifically.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "modesto",
    city: "Modesto",
    county: "Stanislaus County",
    utilityKey: "mid",
    permitUrl: "https://www.modestogov.com/DocumentCenter/View/19115/Building-Safety-Division-Development-User-Fees-Fiscal-Year-25-26-PDF",
    permitFeeNote:
      "Fee schedule lists: \"Electrical Photovoltaic - Residential $333.00 Permit\" (flat fee) and \"Electrical Photovoltaic - Commercial $1,098.00 Deposit\"",
    permitFeeSource: "City of Modesto Building Safety Division Development User Fees, Fiscal Year 25-26 (fee schedule PDF)",
    permitOnline:
      "yes \u2014 online filing available via the City's eTRAKiT permit portal (mode-trk.aspgov.com/eTRAKiT); an older city document titled \"SOLAR-APP\" (Community and Economic Development) suggests SolarAPP+ has been used, but that specific link now 404s and was not independently reconfirmed on a live page",
    sourcesFetchedAt: "2026-09-18",
    // Added 2026-09-22: MID's own service-area statement stops at the
    // Tuolumne River, and the CEC layer places part of the city in TID.
    utilitySplit: {
      others: "TID",
      note:
        "The Modesto Irrigation District describes its electric service area as including the greater Modesto area north of the Tuolumne River, and the California Energy Commission's service-territory map places part of Modesto in the Turlock Irrigation District's territory. Neither is PG&E. Read the utility name on your bill before using either district's rates or solar rules.",
      sources: [
        {
          label: "Modesto Irrigation District, Who We Are (electric service area)",
          url: "https://www.mid.org/about-us/who-we-are/",
          verifiedAt: "2026-09-22",
        },
        CEC_SERVICE_TERRITORY_SOURCE,
      ],
    },
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
    cca: "MCE (Marin Clean Energy)",
    permitUrl: "https://www.cityofnapa.org/1037/Solar-PV",
    permitFeeNote:
      "No dollar amount given on this page. States residential Solar & Battery Backup systems are handled \"over-the-counter by walk-in Monday-Thursday between 8:30am-3:30pm\"; the related Permits and Plan Review Information page notes rooftop PV under 10kW qualifies for expedited \"Express Review\" counter service and links to a separate Master Fee Schedule for actual fee amounts.",
    permitFeeSource: "City of Napa Solar PV page and Permits and Plan Review Information page",
    permitOnline:
      "Not indicated as available online on the pages found; described as in-person/walk-in submission. SolarAPP+ is not mentioned.",
    sourcesFetchedAt: "2026-09-18",
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
    cca: "Sonoma Clean Power",
    permitUrl: "https://cityofpetaluma.org/solar-permit/",
    permitFeeNote:
      "Names a specific dollar amount: \"A $25 processing fee will be charged by the SolarAPP+ website.\" Separate city permit fees apply but are not itemized on this page (linked elsewhere as \"full list of requirements\").",
    permitFeeSource: "City of Petaluma SolarApp+ Solar Permit page",
    permitOnline:
      "Yes, online. SolarAPP+ is explicitly named ('Submit your design here'); after SolarAPP+ approval, apply for the city permit online with the approval ID and supporting documents.",
    sourcesFetchedAt: "2026-09-18",
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
      "Page states contractors must \"Pay the processing fee charged by SolarApp+\" but does not itself state a dollar amount. The City of Salinas Schedule of Fees and Charges (FY 2025-26) lists: Solar Plan Check Residential $215.00, Solar Permit Fee Residential $152.00, Solar Plan Check Commercial $564.00, Solar Permit Fee Commercial $867.00 (each noted \"Must match state fees rate\"), plus a $100.00 Solar Cancellation Charge.",
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
    permitUrl: "https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/solar-storage-battery-projects",
    permitFeeNote:
      "Page does not give a dollar amount. States: \"For permits issued online, SJPermits.org will present the permit fee and enable online payment. Or find fee information and payment methods at Building Fees.\"",
    permitFeeSource: "City of San Jose Solar & Storage Battery Projects page",
    permitOnline:
      "Yes for qualifying rooftop residential/duplex/townhouse systems - filed and paid online via SJPermits.org. SolarAPP+ is not named on this page.",
    sourcesFetchedAt: "2026-09-18",
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
    cca: "Clean Energy Alliance",
    permitUrl: "https://www.sanmarcosca.gov/Business-Services/Building-Division/Solar-Permits",
    permitFeeNote:
      "The City instructs contractors to pay the processing fee for SolarAPP+ but publishes no dollar figure on that page; it points to a separate Development Service Fees schedule, which did not return the document when checked. Ask the City for the current figure rather than assuming the SolarAPP+ charge is the whole of it.",
    permitFeeSource: "City of San Marcos Solar Permits page (sanmarcosca.gov)",
    permitOnline:
      "Yes, online - homeowners select \"Roof Mounted Solar PV Expedited\" in the online portal, contractors use SolarAPP+; SolarAPP+ named",
    sourcesFetchedAt: "2026-09-18",
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
    permitUrl: "https://www.tulare.ca.gov/government/departments/community-development/building/solar-app",
    permitFeeNote:
      "Page states \"A processing fee from SolarAPP+ and City of Tulare permit fees will be charged\" but gives no dollar amount; page directs applicants to call (559) 684-4218 for a permit fee estimate. The City's separate Fee Schedule page (tulare.ca.gov/business/fee-schedule) returned a 403/access error on fetch, so the dollar figure could not be independently verified",
    permitFeeSource: "City of Tulare Solar APP+ page (fee schedule PDF link blocked \u2014 403)",
    permitOnline:
      "yes \u2014 SolarAPP+ named on page (\"SolarAPP+ is designed to provide a code-compliance check for... residential, roof-mounted, retrofit photovoltaic systems\"); applicant receives City permit number by email within 24 business hours",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "ventura",
    city: "Ventura",
    county: "Ventura County",
    utilityKey: "sce",
    cca: "Clean Power Alliance",
    permitUrl: "https://www.cityofventura.ca.gov/2554/Contractor-Solar-Permits-SB-379",
    permitFeeNote:
      "Page describes an automated permitting partnership with Symbium (not SolarAPP+): \"Permit applications submitted using Symbium will be issued in real time, in a matter of minutes.\" Payment happens through Symbium during application, but no dollar fee amounts are published on this page or on the related Photovoltaic Information page.",
    permitFeeSource: "City of Ventura Contractor Solar Permits (SB-379) page",
    permitOnline:
      "Yes, real-time online issuance via Symbium for eligible residential systems up to 38.4 kW AC, for licensed A/B/C-10/C-46 contractors with a Ventura business license, submitted through Ventura OPS. SolarAPP+ is not mentioned/used.",
    sourcesFetchedAt: "2026-09-18",
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
    permitUrl: "https://yucaipa.gov/building-safety/",
    permitFeeNote:
      "The City has no dedicated solar or SolarAPP+ page. Building & Safety points residents to the general Yucaipa Permit Exchange portal and its fee estimator, and the Comprehensive User Fee Schedule did not return the document when checked, so no photovoltaic line item could be confirmed. Use the City's own estimator, or ask Building & Safety, for the current figure.",
    permitFeeSource: "City of Yucaipa Building & Safety page (yucaipa.gov); fee schedule PDF inaccessible",
    permitOnline:
      "Yes for permits generally, through the Yucaipa Permit Exchange portal. The City's pages do not state whether solar has a dedicated or automated path, and SolarAPP+ is not mentioned.",
    sourcesFetchedAt: "2026-09-18",
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
    cca: "Pioneer Community Energy",
    permitUrl: "https://www.auburn.ca.gov/700/Symbium-Permits",
    permitFeeNote:
      "The Solar Photovoltaic Submittal Guidelines state Auburn \"encourages the installation of solar photovoltaic systems through low permit fees\" but neither that document nor the Symbium Permits page gives an actual dollar amount.",
    permitFeeSource: "City of Auburn Symbium Permits page / Solar Photovoltaic Submittal Guidelines",
    permitOnline:
      "Yes: the Symbium Permits page describes a two-step process \u2014 apply and pay fees through the Symbium portal for instantaneous plan review, then apply for the permit type \"Online Residential Solar Permit (Symbium)\" through the city's Civic Access system. SolarAPP+ is not named \u2014 Auburn uses Symbium instead.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "beaumont",
    city: "Beaumont",
    county: "Riverside County",
    utilityKey: "sce",
    permitUrl: "https://beaumontca.gov/1456/Photovoltaic-Permit-Streamlining",
    permitFeeNote:
      "The page states \"There will be additional fees charged by that vendor for the service\" (referring to the Symbium automated-review vendor) but does not give a dollar figure for either the vendor fee or the city's own building permit fee.",
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
      "The page states \"A processing fee from SolarAPP+ and Town of Danville permit fees will be charged\" but does not specify a dollar amount for either fee.",
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
    cca: "San Diego Community Power",
    permitUrl: "https://www.encinitasca.gov/government/departments/applications-and-information/solar-photovoltaic-permit-application",
    permitFeeNote:
      "The page does not give a dollar amount. It links to an \"Energy Efficiency Permit Fee Waiver Flyer\" described as \"information regarding waiver or reduction of permit fees for solar systems and electric vehicle charging systems,\" but the flyer's specific terms are not quoted on the page itself.",
    permitFeeSource: "City of Encinitas Solar Photovoltaic Permit Application page",
    permitOnline:
      "Yes, online: submittal documents are uploaded through the City's Customer Self Service (CSS) portal (registration required). SolarAPP+ is not named on this specific page.",
    sourcesFetchedAt: "2026-09-18",
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
  },
  {
    slug: "ontario",
    city: "Ontario",
    county: "San Bernardino County",
    utilityKey: "sce",
    permitUrl: "https://www.ontarioca.gov/government/community-development/building/apply-residential-solar-permits",
    permitFeeNote:
      "This dedicated solar-permit page returned a server error (HTTP 500) at every attempt to fetch it during research and could not be reached. The general Building Department Fees page (https://www.ontarioca.gov/Building/Fees) lists fee Tables A-F (building, electrical, mechanical, plumbing, grading) but gives no separate dollar figure for solar/photovoltaic permits, and directs applicants to call permit technicians at 909-395-2023 for specifics.",
    permitFeeSource: "City of Ontario Building Department Fees page (the Apply for Residential Reroof and Solar Permits page itself returned a 500 error and could not be read)",
    permitOnline:
      "Could not be determined: the city's dedicated \"Apply for Residential Reroof and Solar Permits\" page returned a server error (HTTP 500) on every fetch attempt during research and its online-filing/SolarAPP+ details could not be confirmed.",
    sourcesFetchedAt: "2026-09-18",
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
    cca: "Pioneer Community Energy",
    permitUrl: "https://www.rocklin.ca.us/online-solar-permitting",
    permitFeeNote:
      "The page states: \"SolarAPP+ is an additional $25.00 paid directly to SolarAPP+.\" This is the SolarAPP+ processing fee; the city's own building permit fee is separate and not quantified on this page.",
    permitFeeSource: "City of Rocklin Online Solar Permitting page",
    permitOnline:
      "Yes: \"licensed contractors may complete an application first using SolarAPP+ in lieu of submitting construction plans and other required supplemental technical documentation.\" SolarAPP+ is explicitly named.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "seaside",
    city: "Seaside",
    county: "Monterey County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    permitUrl: "https://ci.seaside.ca.us/852/Solar-App",
    permitFeeNote:
      "The page states \"A processing fee will be charged by SolarAPP+\" for the automated review but does not give a dollar amount; it directs applicants to pay the separate city permit fee when applying through the City of Seaside Permitting System.",
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
    permitUrl: "https://www.cityoftracy.org/Departments/Community-and-Economic-Development/Building-Safety/Permit-Process-and-Fees",
    permitFeeNote:
      "The page does not give a dollar figure for a solar permit. It only directs photovoltaic project submittals to a dedicated email address, \"photovoltaic@cityoftracy.org,\" rather than listing fee amounts.",
    permitFeeSource: "City of Tracy Permit Process and Fees page",
    permitOnline:
      "The page does not say whether solar permits specifically can be filed online or whether SolarAPP+ is used; PV submittals are routed by email to the Building Safety division.",
    sourcesFetchedAt: "2026-09-18",
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
    cca: "Sonoma Clean Power",
    permitUrl: "https://www.townofwindsor.ca.gov/1570/Residential-Solar-Applications",
    permitFeeNote:
      "The page does not give a dollar figure. It states Symbium's platform will \"instantaneously check for code compliance, collect a service fee, and direct the applicant back to the Town's eTRAKiT system for permit issuance,\" where the Town's own building permit fee is then assessed (amount not stated on this page).",
    permitFeeSource: "Town of Windsor Residential Solar Applications page (Building Division)",
    permitOnline:
      "Yes: \"The Town has partnered with Symbium to provide an automated permitting platform that automatically checks applications for code compliance and allows for instant permit approval for residential solar and energy storage systems.\" SolarAPP+ is not named \u2014 Windsor uses Symbium, and applicants are routed to the Town's eTRAKiT system for permit issuance.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "yuba-city",
    city: "Yuba City",
    county: "Sutter County",
    utilityKey: "pge",
    permitUrl: "https://www.yubacity.net/departments/development_services/solar_app.php",
    permitFeeNote:
      "The page states \"A processing fee from SolarAPP+ will be charged\" for the automated review service but does not specify the dollar amount; it separately notes \"The City will review the application and invoice the building permit fees,\" again without an amount.",
    permitFeeSource: "City of Yuba City Solar APP+ page",
    permitOnline:
      "Yes: \"Log in and submit your design through the SolarAPP+ Webpage\" (gosolarapp.org), then \"creating a Building Permit Application Through the City's Online Citizen Portal.\" SolarAPP+ is explicitly named.",
    sourcesFetchedAt: "2026-09-18",
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
