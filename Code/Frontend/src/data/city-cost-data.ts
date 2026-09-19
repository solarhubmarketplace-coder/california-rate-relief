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
// The page states no system price, no price range, no per-watt figure and no
// payback period: none of those can be sourced for a city, and inventing them
// is the defect that forced this project's 42-page correction.
//
// A CITY PERMIT FEE is the one exception, and it is not an exception to the
// rule so much as an instance of it: where a city publishes an exact figure in
// an adopted fee schedule, the row quotes that figure and renders it beside a
// link to the document it came from. It is a published municipal charge, not an
// estimate of what solar costs. Where a city publishes no figure, the row says
// so plainly — that is itself the answer to what the permit will cost, and it
// is never rounded up into a guess.
//
// SEED STATE NOTE, superseded 2026-09-18: all 44 rows below now carry sourced
// values. The five that could not have an exact fee confirmed say what the
// city's own page says instead of holding a TODO.

/** The marker for a field that has not been verified against a source yet. */
export const UNSOURCED = 'TODO';

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
}

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
    permitFeeNote:
      'The City states that a fee applies to SolarAPP+ plan check and the building permit; no dollar amount is published on the page.',
    permitFeeSource: 'City of Temecula, Photovoltaic Systems (temeculaca.gov/304)',
    permitOnline: 'Yes. SolarAPP+ accepted since 30 September 2023; the Citizen Self Service portal is also available.',
    sourcesFetchedAt: '2026-09-18',
  },
  {
    slug: 'murrieta',
    city: 'Murrieta',
    county: 'Riverside County',
    utilityKey: 'sce',
    permitUrl: 'https://www.murrietaca.gov/DocumentCenter/View/2399/Solar-Permits-Residential-IB-125',
    permitFeeNote:
      'Information Bulletin IB-125 states the residential solar permit fee is four hundred fifty dollars, payable when the permit is issued.',
    permitFeeSource: 'City of Murrieta, Information Bulletin IB-125, Solar Permits (Residential)',
    permitOnline: 'Yes. Submitted through the Development Services solar permit portal; the bulletin does not name SolarAPP+.',
    sourcesFetchedAt: '2026-09-18',
  },
  {
    slug: 'san-diego',
    city: 'San Diego',
    county: 'San Diego County',
    utilityKey: 'sdge',
    cca: 'San Diego Community Power (generation); SDG&E remains the delivery utility',
    permitUrl: 'https://www.sandiego.gov/development-services/permits/solar-photovoltaic-permit',
    permitFeeNote:
      'The City states that inspection, review and other fees vary with project scope and refers applicants to Information Bulletin 301; no flat solar fee is published.',
    permitFeeSource: 'City of San Diego Development Services, Solar Photovoltaic Permit page and Information Bulletin 301',
    permitOnline: 'Yes. Applications are filed online through the Accela portal.',
    sourcesFetchedAt: '2026-09-18',
  },
  {
    slug: 'escondido',
    city: 'Escondido',
    county: 'San Diego County',
    utilityKey: 'sdge',
    cca: 'Clean Energy Alliance (generation, since 1 April); SDG&E remains the delivery utility',
    permitUrl: 'https://www.escondido.gov/1247/Solar-App-Plus',
    permitFeeNote:
      'The City states a processing fee is charged by SolarAPP+ and that the permit issues once all applicable City fees are paid; no dollar amount is published on the page.',
    permitFeeSource: 'City of Escondido, Solar App Plus (escondido.gov/1247)',
    permitOnline: 'Yes. SolarAPP+ for licensed contractors (residential only); owner-builders file a regular building permit with plan check.',
    sourcesFetchedAt: '2026-09-18',
  },
  // Added 2026-09-18 from the four-region research pass; ledger in
  // 02_Work_Management/Growth_200/city_data_parts/*.csv.
  {
    slug: "anaheim",
    city: "Anaheim",
    county: "Orange County",
    utilityKey: "anaheim",
    permitUrl: "https://www.anaheim.net/6015/Online-Permit-Center",
    permitFeeNote:
      "Current online permit center page lists a \"Single Family Residential Small Rooftop Permit Online\" (Solar Permit Online) option but states no fee amount. The city's older Residential PV Self-Certification Program packet (Building Division, dated 2009/2010) attaches an electrical permit fee schedule listing a Minimum Permit Fee of $136.73 and Plan Check Service at $172.39/hour; this schedule is dated and may not reflect current fees.",
    permitFeeSource: "City of Anaheim Online Permit Center page; City of Anaheim Residential PV Self-Certification Program packet (forms B722/B705, dated 2009-2010)",
    permitOnline:
      "Yes for small residential rooftop solar via the city's own Accela-based Online Permit Center (\"Solar Permit Online\"); page does not name SolarAPP+.",
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
    permitUrl: "https://www.carlsbadca.gov/departments/community-development/building/solarapp",
    permitFeeNote:
      "Page states: \"There is a $25 administration fee to use SolarAPP+ paid directly to SolarAPP+ during the application process. This fee is in addition to the city's regular permitting fees, which are outlined in the Master Fee Schedule.\" Revisions beyond the first three free ones cost $25 each.",
    permitFeeSource: "City of Carlsbad Residential solar permitting with SolarAPP+ page (carlsbadca.gov)",
    permitOnline:
      "Yes, via Customer Self Service online portal after SolarAPP+ approval; SolarAPP+ named and required for licensed-contractor rooftop projects",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "chula-vista",
    city: "Chula Vista",
    county: "San Diego County",
    utilityKey: "sdge",
    cca: "San Diego Community Power",
    permitUrl: "https://www.chulavistaca.gov/departments/development-services/build-green/residential-solar-energy",
    permitFeeNote:
      "Official Master Fee Schedule (Fee Bulletin 10-400, Sept 2024) lists: Residential (SFD/Duplex) expedited (SolarAPP+) = $30 intake + $0 plan check + $423 inspection = $453 total; Residential (SFD/Duplex) traditional = $70 intake + $158 plan check + $494 inspection = $722 total; panel upgrade only = $203 total; commercial/multifamily first 500 panels = $1,683 total.",
    permitFeeSource: "City of Chula Vista Master Fee Schedule Fee Bulletin 10-400, Photovoltaic System section (Sept 2024)",
    permitOnline:
      "Yes, via Citizen Access online portal; SolarAPP+ named as the required expedited path since June 28 2023, traditional path also submittable online",
    sourcesFetchedAt: "2026-09-18",
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
    permitFeeNote:
      "Page confirms permits are filed through the \"City of El Cajon Solar APP+ online permit site\" and notes SolarAPP+ offers \"three free revisions,\" but does not state a specific dollar fee amount; it directs applicants to Building Safety (619-441-1726 / Building@elcajon.gov) for exact fees.",
    permitFeeSource: "City of El Cajon Photovoltaic page (elcajon.gov)",
    permitOnline:
      "Yes, online via the city's SolarAPP+ portal; SolarAPP+ named as the primary automated permitting system",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "el-dorado-hills",
    city: "El Dorado Hills",
    county: "El Dorado County \u2014 unincorporated community; permits are issued by El Dorado County, not a city",
    utilityKey: "pge",
    cca: "Pioneer Community Energy \u2014 a joint powers authority CCA serving El Dorado County (including El Dorado Hills) and Placer County; \"PG&E will continue to deliver the electricity and provide all other services\" while Pioneer handles \"electricity generation only\" and residents are automatically enrolled",
    permitUrl: "https://www.eldoradocounty.ca.gov/Land-Use/Planning-and-Building/Building-Division/Symbium",
    permitFeeNote:
      "Page states \"There will be a service charge for the use of this system\" (the Symbium instant-permitting platform) but gives no dollar figure. The Ordinance 5238 fee schedule PDF (executed-ord-5238.pdf) returned a 403/empty response on fetch, so an exact solar permit dollar amount could not be verified",
    permitFeeSource: "El Dorado County Building Division Symbium page (Ordinance 5238 fee PDF blocked \u2014 403)",
    permitOnline:
      "yes \u2014 El Dorado County partnered with Symbium (NOT SolarAPP+) for SB 379 instantaneous plan review/permitting; traditional in-person submission remains available as an alternative",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "fresno",
    city: "Fresno",
    county: "Fresno County",
    utilityKey: "pge",
    permitUrl: "https://www.fresno.gov/planning/get-an-instantly-approved-solar-permit-through-solar-app/",
    permitFeeNote:
      "Master Fee Schedule (Misc. Items) lists: Photovoltaic Systems, Residential \u2014 First 15kW: Plan Check $165.01 + Inspection Fee $157.72; Each additional kW: $10.92 (plan check) \u2014 exact line-item figures from the fee schedule PDF",
    permitFeeSource: "City of Fresno Master Fee Schedule (MFS Amendment #585, Jan 2025; effective 07/01/2025)",
    permitOnline:
      "yes \u2014 SolarAPP+ named on page (\"SolarAPP+ provides instantly approved solar permits\"); contractor uploads SolarAPP+ confirmation to City's Accela Citizens Access (ACA) online permitting system",
    sourcesFetchedAt: "2026-09-18",
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
    permitUrl: "https://www.livermoreca.gov/departments/community-development/permit-center/residential-photovoltaic/solarapp",
    permitFeeNote:
      "No dollar amount given. Page states: \"A processing fee will be charged by SolarAPP+.\"",
    permitFeeSource: "City of Livermore SolarApp+ page (live site blocked automated fetch; content confirmed via web.archive.org capture)",
    permitOnline:
      "Yes, online. SolarAPP+ is explicitly named; register/submit design in SolarAPP+, then apply for the City of Livermore permit through the city's Online Permitting portal (active Livermore business license required for contractor).",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "manteca",
    city: "Manteca",
    county: "San Joaquin County",
    utilityKey: "pge",
    permitUrl: "https://www.manteca.gov/230/Instant-Residential-Solar-Energy-Storage",
    permitFeeNote:
      "Page does not give a dollar amount; states only \"Pay your permit fees and obtain your permit instantly!\" via the online Symbium portal. No separate solar fee schedule PDF was located",
    permitFeeSource: "City of Manteca Instant Residential Solar & Energy Storage System Permits page",
    permitOnline:
      "yes \u2014 online instant permitting via Symbium (enter property address, answer questions, automated code-compliance check, real-time permit issuance); page does NOT name SolarAPP+",
    sourcesFetchedAt: "2026-09-18",
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
  },
  {
    slug: "monterey",
    city: "Monterey",
    county: "Monterey County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    permitUrl: "http://monterey.gov/your_city_hall/departments/community_development/building_and_safety_services/",
    permitFeeNote:
      "Page states solar PV permit fees are \"automatically calculated\" through the new online portal (mymontereyportal.org, effective Jan 7, 2026) once project questions are answered; no dollar figure is given on the page itself. The city's Master Fee Schedule (FY2026/2027) separately lists: \"Residential Solar/PV Installation Permit (under 10kW) $450.00\" with a note that \"Residential solar permit fees are set by the State of California for 10kW and under.\"",
    permitFeeSource: "City of Monterey Building and Safety Services page; City of Monterey Master Fee Schedule FY2026/2027 (files.monterey.gov)",
    permitOnline:
      "Yes, Solar PV systems are included in the new online permit portal (mymontereyportal.org) effective January 7, 2026. SolarAPP+ is not mentioned on this page.",
    sourcesFetchedAt: "2026-09-18",
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
    permitUrl: "https://www.ci.oceanside.ca.us/government/development-services/building/solarapp",
    permitFeeNote:
      "Page states a \"$25 processing fee will be charged by the SolarAPP+ website\" for the automated review; separately the applicant must \"Pay City Permit Fees\" through eTRAKiT, but no dollar amount for the city's own permit fee is published on this page.",
    permitFeeSource: "City of Oceanside SolarAPP+ page (ci.oceanside.ca.us)",
    permitOnline:
      "Yes, online via eTRAKiT after SolarAPP+ approval; SolarAPP+ named and required for eligible contractors",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "pacific-grove",
    city: "Pacific Grove",
    county: "Monterey County",
    utilityKey: "pge",
    cca: "Central Coast Community Energy (3CE)",
    permitUrl: "https://www.cityofpacificgrove.gov/our_city/departments/community_development/planning/SolarAppPlus.php",
    permitFeeNote:
      "Page states plainly: \"The Solar App+ System is not in service at this time for the City of Pacific Grove.\" No fee information or fee schedule is given on this page. A separate iworq-based online \"Solar Permit Application\" form exists (portal.iworq.net/PACIFICGROVE/new-permit/608/10808) but fee details were not confirmed there.",
    permitFeeSource: "City of Pacific Grove SolarAppPlus.php page",
    permitOnline:
      "No. The City's own page states that SolarAPP+ is not in service for Pacific Grove at this time. The page does not describe another online route for a solar permit, so treat it as a counter or email submittal until the City says otherwise.",
    sourcesFetchedAt: "2026-09-18",
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
  },
  {
    slug: "roseville",
    city: "Roseville",
    county: "Placer County",
    utilityKey: "roseville",
    permitUrl: "https://www.roseville.ca.gov/development_services/building/solarapp.php",
    permitFeeNote:
      "Page states: \"A $25 processing fee will be charged by the SolarAPP+ website\" and \"Pay applicable Building Permit fees (currently $1,349.49).\" Separately, the FY25 Master Fee Schedule lists Residential Rooftop Solar Energy Systems at \"$450 plus $15 per kilowatt (kW) for each kW above 15\" and notes photovoltaic permits use a set valuation of $18,000 for fee calculation purposes",
    permitFeeSource: "City of Roseville SolarAPP+ page and FY25 Master Fee Schedule (civiclive.com-hosted PDF)",
    permitOnline:
      "yes \u2014 SolarAPP+ named; design submitted via SolarAPP+ (gosolarapp.org), then permit applied for via City's online portal (permitsonline.roseville.ca.us)",
    sourcesFetchedAt: "2026-09-18",
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
    permitUrl: "https://www.slocity.org/government/department-directory/community-development/building-safety/permit-forms-and-applications/solar-documents",
    permitFeeNote:
      "Page requires SolarAPP+ automated review as the first step (submit at gosolarapp.org). SolarAPP+ review fee is $35 for solar-only applications and $60 for solar-plus-storage applications; additional city permit fees also apply, paid online before the permit auto-issues.",
    permitFeeSource: "City of San Luis Obispo Solar Documents page (Building & Safety)",
    permitOnline:
      "Yes, fully online. SolarAPP+ automated review, then upload approval to the city's InfoSLO portal; permit is auto-issued within about a minute of fee payment.",
    sourcesFetchedAt: "2026-09-18",
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
    permitUrl: "https://www.santacruzca.gov/Government/City-Departments/Community-Development/Building-Safety/SolarApp",
    permitFeeNote:
      "Page states \"All the applicable permit fees will be assessed per the City of Santa Cruz Master Fee Schedule\" and that a separate processing fee is charged by SolarApp+/NREL; no dollar amount is given on this page itself. The Citywide Fee Schedule (effective 1/1/2026) itemizes: Residential System up to 15kW = $360.00 (PL-BLD142), each kW above 15kW = $24.00 (PL-BLD143), Commercial up to 50kW = $862.00 (PL-BLD144).",
    permitFeeSource: "City of Santa Cruz SolarApp+ page; Citywide Fee Schedule effective 1-1-26 (santacruzca.gov)",
    permitOnline:
      "Yes, via SolarAPP+; approved applicants receive a City of Santa Cruz permit number by email and pay/schedule inspections online.",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "santa-rosa",
    city: "Santa Rosa",
    county: "Sonoma County",
    utilityKey: "pge",
    cca: "Sonoma Clean Power",
    permitUrl: "https://www.srcity.org/3826/Solar-Panel-Installation",
    permitFeeNote:
      "No dollar amount given. States: \"A processing fee will be charged by SolarAPP+... Once you have paid all applicable fees, the system will prompt you to upload the required documentation.\"",
    permitFeeSource: "City of Santa Rosa Solar Panel Installation (SolarApp+) page",
    permitOnline:
      "Yes, online. SolarAPP+ is explicitly named; licensed contractors register in SolarAPP+ then apply for the city permit via Accela Citizen's Access (ACA).",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "stockton",
    city: "Stockton",
    county: "San Joaquin County",
    utilityKey: "pge",
    cca: "Ava Community Energy (formerly East Bay Community Energy) \u2014 began serving Stockton in April 2025 for generation only; \"PG&E delivers the power",
    permitUrl: "https://www.stocktonca.gov/business/building___life_safety/automated_solar_permitting.php",
    permitFeeNote:
      "Page does not give a City permit dollar amount; states \"A processing fee will be charged by SolarApp+ NREL\" and \"The initial processing fee charged by the SolarApp+ website covers up to three revisions\" \u2014 no dollar figure specified",
    permitFeeSource: "City of Stockton Automated Solar Permitting page",
    permitOnline:
      "yes \u2014 SolarAPP+ named (submission at gosolarapp.org) plus City of Stockton Accela Citizen Portal for permit application/inspection scheduling; described as \"Residential Solar One Stop\" with auto-issued permit",
    sourcesFetchedAt: "2026-09-18",
  },
  {
    slug: "thousand-oaks",
    city: "Thousand Oaks",
    county: "Ventura County",
    utilityKey: "sce",
    cca: "Clean Power Alliance",
    permitUrl: "https://toaks.gov/solarsystems",
    permitFeeNote:
      "Page does not display specific fee amounts or link to a fee schedule; it notes that \"additional fees associated with the SolarAPP+ web-based services are independent\" of city charges and are managed by the Alliance for Sustainable Energy, LLC (the SolarAPP+ operator). Applicants are told to contact the Building Division directly for current fees.",
    permitFeeSource: "City of Thousand Oaks Solar PV Systems page (toaks.gov/solarsystems)",
    permitOnline:
      "Yes for eligible residential roof-mounted systems under 38.4 kW via SolarAPP+, then submitted to the city's TO/24 online portal; requires a CA-licensed contractor.",
    sourcesFetchedAt: "2026-09-18",
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
    permitUrl: "https://www.walnutcreekca.gov/government/community-development-department/permits/building-permits/building-and-land-use-regulations/solar-electrical-heating-and-plumbing",
    permitFeeNote:
      "Fee schedule lists a specific flat fee: \"Solar Photovoltaic - Single Family and Duplex Residential: $280.00\" (unified permit incl. plan check and inspection). Multi-family/non-residential uses formula $419.12 + $0.0832 x panel area in sq ft.",
    permitFeeSource: "City of Walnut Creek Master Fee Schedule FY26 & FY27 (Community Development - Building Division fees PDF)",
    permitOnline:
      "Not addressed on the city's solar-specific page. The city offers a general online permit portal (Accela Citizen Access, aca-prod.accela.com/WC), but SolarAPP+ is not named on the solar page found.",
    sourcesFetchedAt: "2026-09-18",
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
];

/** True when any rendered field is still a TODO placeholder. */
export function unsourcedFields(row: CityCostRow): string[] {
  const missing = GATED_FIELDS.filter((field) => {
    const value = row[field];
    return typeof value !== 'string' || value.trim() === '' || value.includes(UNSOURCED);
  }).map((field) => String(field));
  if (typeof row.cca === 'string' && row.cca.includes(UNSOURCED)) missing.push('cca');
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
