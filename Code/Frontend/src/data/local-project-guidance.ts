export interface LocalGuidanceSource {
  label: string;
  url: string;
  verifiedAt: string;
  /** The exact fact used here, including the source's practical limit. */
  scope: string;
}

export interface LocalGuidanceLink {
  href: string;
  label: string;
}

export interface LocalGuidanceCheck {
  title: string;
  body: string;
}

export interface LocalProjectGuidanceEntry {
  city: string;
  actionIds: readonly string[];
  intro: string;
  quoteQuestions: readonly [string, string, string];
  localChecks: readonly LocalGuidanceCheck[];
  related: readonly LocalGuidanceLink[];
  sources: readonly LocalGuidanceSource[];
}

const verified20260920 = '2026-09-20';
const verified20260918 = '2026-09-18';

const sanDiegoPermit: LocalGuidanceSource = {
  label: 'City of San Diego — Information Bulletin 301, Solar PV Systems',
  url: 'https://www.sandiego.gov/development-services/forms-publications/information-bulletins/301',
  verifiedAt: verified20260920,
  scope:
    'The May 2026 bulletin separates electrical, combination and building-permit paths by project scope. Its defined self-issued path applies only when every stated property, system and scope limit is met.',
};

const escondidoPermit: LocalGuidanceSource = {
  label: 'City of Escondido — SolarAPP+',
  url: 'https://www.escondido.gov/1247/Solar-App-Plus',
  verifiedAt: verified20260920,
  scope:
    'Licensed contractors can use SolarAPP+ for eligible residential rooftop work. Other PV installations and owner-builder projects follow the regular permit route described by the City.',
};

const sdcpBill: LocalGuidanceSource = {
  label: 'San Diego Community Power — Understanding Your Bill',
  url: 'https://sdcommunitypower.org/understanding-your-bill/',
  verifiedAt: verified20260920,
  scope:
    'For an enrolled SDCP account, SDCP supplies generation while SDG&E continues delivery and consolidated billing. The page does not establish enrollment or a rate plan for a particular address.',
};

const ceaBill: LocalGuidanceSource = {
  label: 'Clean Energy Alliance — Understanding Your Bill with CEA',
  url: 'https://thecleanenergyalliance.org/understanding-your-bill-with-cea/',
  verifiedAt: verified20260920,
  scope:
    'CEA names Carlsbad, Escondido and Oceanside among its member cities and explains its generation role alongside SDG&E delivery and billing. City membership does not prove an account is enrolled.',
};

const chulaVistaPermit: LocalGuidanceSource = {
  label: 'City of Chula Vista — Residential Solar Energy',
  url: 'https://www.chulavistaca.gov/departments/development-services/build-green/residential-solar-energy',
  verifiedAt: verified20260918,
  scope:
    'The City publishes an online Citizen Access process with SolarAPP+ as the expedited route and a traditional review route. The correct route and inspections still depend on the submitted project.',
};

const sdgeInterconnection: LocalGuidanceSource = {
  label: 'SDG&E — Applying for Solar/Battery/Other Interconnection Authorizations',
  url: 'https://www.sdge.com/solar/solar-and-battery-installation-center',
  verifiedAt: verified20260920,
  scope:
    'SDG&E says the customer or contractor submits the interconnection application in DIIS. After the Authority Having Jurisdiction inspection release, SDG&E conducts any required inspection or final review before sending permission to operate; the source does not promise approval or timing for a specific project.',
};

const palmSpringsPermit: LocalGuidanceSource = {
  label: 'City of Palm Springs — Permits',
  url: 'https://www.palmspringsca.gov/government/departments/building/permits',
  verifiedAt: verified20260918,
  scope:
    'The City directs applicants to Palm Springs Online to select the application for the project. The page does not name SolarAPP+ or establish a project-specific review or inspection schedule.',
};

const riversideCountyPermit: LocalGuidanceSource = {
  label: 'Riverside County TLMA — SolarAPP+',
  url: 'https://rctlma.org/solarapp',
  verifiedAt: verified20260918,
  scope:
    'Winchester is unincorporated, so the building-permit path is through Riverside County. The County page directs eligible projects through SolarAPP+ and then the County permit portal; eligibility remains scope-specific.',
};

const carlsbadPermit: LocalGuidanceSource = {
  label: 'City of Carlsbad — Residential solar permitting with SolarAPP+',
  url: 'https://www.carlsbadca.gov/departments/community-development/building/solarapp',
  verifiedAt: verified20260918,
  scope:
    'The City routes eligible licensed-contractor rooftop projects through SolarAPP+ and then its Customer Self Service portal. The page does not make that route universal for every solar, roof, panel or storage scope.',
};

const oceansidePermit: LocalGuidanceSource = {
  label: 'City of Oceanside — SolarAPP+',
  url: 'https://www.ci.oceanside.ca.us/government/development-services/building/solarapp',
  verifiedAt: verified20260918,
  scope:
    'The City routes eligible projects through SolarAPP+ and then eTRAKiT for the City permit. The page does not establish that every project qualifies for automated review.',
};


// -----------------------------------------------------------------------------
// Tier 2 city-cost wave, 2026-09-23. Every source below was fetched that day
// and each scope line states exactly what the entry relies on it for.
// -----------------------------------------------------------------------------
const verified20260923 = '2026-09-23';

const pgeCcaList: LocalGuidanceSource = {
  label: 'PG&E — Community Choice Aggregation',
  url: 'https://www.pge.com/en/account/alternate-energy-providers/community-choice-aggregation.html',
  verifiedAt: verified20260923,
  scope:
    'Lists the CCAs in PG&E territory and the areas each serves, and says PG&E continues to provide meter reading, billing, maintenance and outage response for CCA customers. A city missing from the list has no CCA named there; the bill is still the check for a given account.',
};

const sceCcaList: LocalGuidanceSource = {
  label: 'SCE — Community Choice Aggregation',
  url: 'https://www.sce.com/customer-service-center/community-choice-aggregation',
  verifiedAt: verified20260923,
  scope:
    'Lists the CCAs in SCE territory and the cities each serves, and says SCE continues meter reading, billing, maintenance and outage response for CCA customers. A city missing from the list has no CCA named there.',
};

const sdgeActiveCcas: LocalGuidanceSource = {
  label: 'SDG&E — Active CCAs',
  url: 'https://www.sdge.com/customer-choice/community-choice-aggregation/active-ccas',
  verifiedAt: verified20260923,
  scope:
    'Names the cities served by Clean Energy Alliance and San Diego Community Power. A city missing from both lists has no active CCA named there.',
};

const cecTerritory0923: LocalGuidanceSource = {
  label: 'California Energy Commission — Electric Load Serving Entities (IOU & POU) service-territory layer',
  url: 'https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about',
  verifiedAt: verified20260923,
  scope:
    'Overlaid on the Census TIGERweb city boundary to see which utility territories fall inside the city. A map layer, not an address lookup: the bill names the utility for a given home.',
};

const fresnoSolarApp: LocalGuidanceSource = {
  label: 'City of Fresno — SolarAPP+ instantly approved solar permits',
  url: 'https://www.fresno.gov/planning/get-an-instantly-approved-solar-permit-through-solar-app/',
  verifiedAt: verified20260923,
  scope:
    'Single-family and duplex projects may use SolarAPP+ and then Accela Citizens Access; commercial installations do not qualify and apply for a standard solar permit. The page states no fee.',
};

const fresnoFees2026: LocalGuidanceSource = {
  label: 'City of Fresno — Master Fee Schedule, Planning & Development (fees effective July 1, 2026)',
  url: 'https://www.fresno.gov/wp-content/uploads/2026/07/MFS-Planning_593_CPI_CPI-UGM_CPI-Parking-ED-2026.07.01-10w1657-10w1683.pdf',
  verifiedAt: verified20260923,
  scope:
    'Residential photovoltaic: $170.37 plan check and $162.85 inspection for the first 15 kW; $11.27 inspection for each additional kW. The schedule adjusts these fees each July 1 by a Consumer Price Index.',
};

const fresnoChecklist: LocalGuidanceSource = {
  label: 'City of Fresno — Residential Solar Plan Check Submittal Requirements (updated July 2023)',
  url: 'https://www.fresno.gov/wp-content/uploads/2023/07/New-Residential-Solar-Plan-Check-Submittal.pdf',
  verifiedAt: verified20260923,
  scope:
    'For the standard plan-check route: structural calculations for ground-mount and reverse-tilt (over 24 inches at the tall side) arrays, and electrical load calculations when derating the main service panel.',
};

const murrietaSelfIssue: LocalGuidanceSource = {
  label: 'City of Murrieta — Self-Issuing Permits & SolarAPP+',
  url: 'https://www.murrietaca.gov/1368/Self--Issuing-Permits-Solar-App',
  verifiedAt: verified20260923,
  scope:
    'Eligible residential roof-mounted solar goes through SolarAPP+ and the CSS portal; zero-lot-line homes do not qualify; every service-panel upgrade needs a separate permit that only C-10 electrical contractors may obtain; inspection fees cover two site visits.',
};

const murrietaFees2627: LocalGuidanceSource = {
  label: 'City of Murrieta — User Fee Schedule, fiscal year 2026/27 (Solar Permit Fees)',
  url: 'https://murrietaca.gov/DocumentCenter/View/14633/FY-2025-26-User-Fee-Schedule---updated-5-29',
  verifiedAt: verified20260923,
  scope:
    'Residential PV: $450 at 15 kW or less; $500 base plus $15 per kW over 15 kW. Separate permits and fees for structural work and non-solar items such as carports, ground-mount supports, exterior lighting and EV charging.',
};

const temeculaPermit0923: LocalGuidanceSource = {
  label: 'City of Temecula — Photovoltaic Systems',
  url: 'https://temeculaca.gov/304/Photovoltaic-Systems',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ available since September 30, 2023; expansions of existing PV systems do not qualify for SolarAPP+ or expedited review; a passed fire inspection is required before the building inspection; no ESS in a garage without residential fire sprinklers.',
};

const temeculaFees2627: LocalGuidanceSource = {
  label: 'City of Temecula — User Fee Schedule, effective fiscal year 2026-27',
  url: 'https://www.temeculaca.gov/DocumentCenter/View/19215/FY2025-26-User-Fee-Schedule',
  verifiedAt: verified20260923,
  scope:
    'Photovoltaic system: residential roof-mounted $568 total ($326 building plan check, $242 building inspection); residential ground-mounted $970 total, including a $228 fire plan check.',
};

const sanMateoSolarApp: LocalGuidanceSource = {
  label: 'City of San Mateo — SolarApp+ for Solar Installers',
  url: 'https://www.cityofsanmateo.org/4770/SolarApp-For-Solar-Installers',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ covers most residential, roof-mounted, retrofit PV systems that meet its eligibility checklist; the City permit is then applied for at the Online Permit Center; SolarAPP+ charges its own processing fee.',
};

const sanMateoFees2627: LocalGuidanceSource = {
  label: 'City of San Mateo — Adopted Comprehensive Fee Schedule 2026-2027',
  url: 'https://www.cityofsanmateo.org/DocumentCenter/View/105420',
  verifiedAt: verified20260923,
  scope:
    'Solar energy systems, single-family dwellings: $450 each combination permit; new energy storage systems only: $450 flat. Both noted as set by state law.',
};

const sanMateoCountyInstant: LocalGuidanceSource = {
  label: 'County of San Mateo — Instant Residential Solar and Energy Storage System Permits',
  url: 'https://www.smcgov.org/planning/instant-residential-solar-and-energy-storage-system-permits',
  verifiedAt: verified20260923,
  scope:
    'The County issues instant solar and storage permits through Symbium for unincorporated addresses only; homes inside a city or town are permitted by that city or town.',
};

const westlightHome: LocalGuidanceSource = {
  label: 'WestLight Energy (formerly Peninsula Clean Energy)',
  url: 'https://www.westlightenergy.org/',
  verifiedAt: verified20260923,
  scope:
    'Serves San Mateo County and Los Banos; PG&E delivers the power and customers get one PG&E bill with WestLight generation charges and PG&E delivery charges.',
};

const irvineRooftop: LocalGuidanceSource = {
  label: 'City of Irvine — Adding a Rooftop Solar Energy System',
  url: 'https://cityofirvine.gov/building-permits-and-inspections/adding-rooftop-solar-energy-system',
  verifiedAt: verified20260923,
  scope:
    'Same-day PermitsDIRECT! (Symbium) permits for rooftop systems up to 38.4 kW with no more than one battery, submitted by a licensed contractor; others through IrvineReady!, with five working days expected for initial plan check; plans note any main panel upgrade or derated main breaker; HOAs may have their own approval process.',
};

const irvineFees2627: LocalGuidanceSource = {
  label: 'City of Irvine — CD/PW fee schedule 2026-27, Schedule II Building and Safety (Resolution 24-41)',
  url: 'https://www.cityofirvine.gov/sites/default/files/legacy-documents/cd-pws-fee-schedule-august-15_2026-27_0.pdf',
  verifiedAt: verified20260923,
  scope:
    'Solar panels per system, residential: $349.11 plan check, $299.00 inspection, $12.08 per additional kW over 15 kW; $31.88 residential permit issuance fee (other than new construction).',
};

const ocpaSolarNem: LocalGuidanceSource = {
  label: 'Orange County Power Authority — Solar Net Energy Metering',
  url: 'https://www.ocpower.org/energy-programs/solar-net-energy-metering/',
  verifiedAt: verified20260923,
  scope:
    'OCPA runs solar true-ups ahead of summer, pays unused credits at the Net Surplus Compensation rate, treats Net Billing Tariff customers as if their generation were under NEM 2.0, and SCE handles the delivery charges and credits. Membership: the OCPA home page lists Irvine among its member communities.',
};


const elCajonPv: LocalGuidanceSource = {
  label: 'City of El Cajon — Photovoltaic (SolarAPP+)',
  url: 'https://www.elcajon.gov/your-government/departments/community-development/building-fire-safety/photovoltaic',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ pre-approval, then the City SolarAPP+ permit site; permit issues once fees are paid; three free revisions; battery storage eligible since January 2026; contractor completes a third-party inspection declaration, uploads it to PACO and requests final review for SDG&E release; no other City inspections required. No fee amount stated.',
};

const ceaNem: LocalGuidanceSource = {
  label: 'Clean Energy Alliance — Net Energy Metering',
  url: 'https://thecleanenergyalliance.org/net-energy-metering/',
  verifiedAt: verified20260923,
  scope:
    'Net Surplus Compensation at $0.06 per kWh for excess over the 12-month period, described as slightly higher than SDG&E’s credit; checks for $100 or more, smaller amounts rolled forward; true-up on the NEM enrollment anniversary.',
};

const fremontIsp: LocalGuidanceSource = {
  label: 'City of Fremont — Instant Solar Permit (ISP)',
  url: 'https://www.fremont.gov/government/departments/community-development/planning-building-permit-services/planning-building-permits/permit-types/instant-solar-permit-isp',
  verifiedAt: verified20260923,
  scope:
    'For contractors registered with SolarAPP+; roof-mounted PV with or without storage; a main electrical service upgrade can be added; only systems on the SolarAPP+ eligibility checklists qualify.',
};

const fremontFees2026: LocalGuidanceSource = {
  label: 'City of Fremont — Master Fee Schedule (Resolution No. 8672), effective July 1, 2026',
  url: 'https://www.fremont.gov/home/showpublisheddocument/20810/639184906195370000',
  verifiedAt: verified20260923,
  scope:
    'Renewable energy systems (fees include application, plan check, inspection; maximum set by Gov. Code 66015): ISP up to 15 kW $133, plus $7.50 per kW above; residential solar through regular review up to 15 kW $280, plus $15 per kW above; additional inspection or re-inspection $133; automatically issued ISP exempt from the building permit application fee.',
};

const avaSolarBilling: LocalGuidanceSource = {
  label: 'Ava Community Energy — Solar Billing Plan',
  url: 'https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/',
  verifiedAt: verified20260923,
  scope:
    'Export credits vary by hour and day; extra $0.01 per kWh on exports for CARE/FERA customers; extra $0.025 per kWh on exports from 3 to 8 pm for other customers; annual true-up each April; balances over $100 paid, smaller ones rolled forward; separate true-ups with Ava (generation) and PG&E (delivery).',
};

const avaCommunities: LocalGuidanceSource = {
  label: 'Ava Community Energy — Communities We Serve',
  url: 'https://avaenergy.org/community/who-we-serve/',
  verifiedAt: verified20260923,
  scope:
    'Names Albany, Berkeley, Dublin, Emeryville, Fremont, Hayward, Livermore, Newark, Oakland, Piedmont, Pleasanton, San Leandro, Tracy, Union City and unincorporated Alameda County, plus Lathrop, Stockton and unincorporated San Joaquin County.',
};

const riversideSolarApp: LocalGuidanceSource = {
  label: 'City of Riverside — SolarAPP+',
  url: 'https://riversideca.gov/cedd/building-safety/online-permits/solarapp',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ only for residential rooftop systems under 38 kW; excludes ground-mount or ballasted systems, panel upgrades or derating, existing PV, and any existing or new battery; $25 SolarAPP+ fee; systems not to exceed 150% of historical annual use and must meet RPU Electric Rule 22.',
};

const riversideFees: LocalGuidanceSource = {
  label: 'City of Riverside — Building & Safety Fee Schedule',
  url: 'https://www.riversideca.gov/cedd/sites/riversideca.gov.cedd/files/BUILDING%20&%20SAFETY%20FEE%20SCHEDULE.pdf',
  verifiedAt: verified20260923,
  scope:
    'Expedited solar energy system (up to 38 kW) $190; residential solar energy system up to 15 kW $350, plus $15 per additional kW; permit issuance fee $39. No effective date is printed on the posted file.',
};

const rpuSolarInfo: LocalGuidanceSource = {
  label: 'Riverside Public Utilities — Solar Info',
  url: 'https://riversideca.gov/utilities/residents/solar-info',
  verifiedAt: verified20260923,
  scope:
    'RPU bills solar customers under its Net Energy Metering rate (net difference within each billing period); systems may offset up to 100% of historical 12-month use, or 2 watts per square foot of living space including garages without history; customers pay for a meter upgrade if no net meter is installed.',
};

const rpuFees2026: LocalGuidanceSource = {
  label: 'Riverside Public Utilities — Electric Fees and Charges Schedule (Appendix A), effective July 1, 2026',
  url: 'https://www.riversideca.gov/utilities/sites/riversideca.gov.utilities/files/pdf/rates-electric/2026/july1-2026/Electric%20Rule%20Appendix%20A.pdf',
  verifiedAt: verified20260923,
  scope: 'Rule 22 distributed generation application and processing fee, net energy metering initial review: residential $275.',
};

const rpuServiceArea: LocalGuidanceSource = {
  label: 'Riverside Public Utilities — Service Area Maps',
  url: 'https://riversideca.gov/utilities/about-rpu/service-area-maps',
  verifiedAt: verified20260923,
  scope: 'RPU publishes its electric service area as a map; the page gives no address lookup.',
};

const oaklandSolar: LocalGuidanceSource = {
  label: 'City of Oakland — Solar Energy Systems & Facilities',
  url: 'https://www.oaklandca.gov/My-Household/Building-and-Remodeling/Homeowner-Projects-Permits/Solar-Energy-Systems-Facilities',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ for rooftop systems on permitted main dwellings by California-licensed contractors; batteries and related electrical work allowed; no ballasted or BIPV systems; panel replacement, subpanels and storage may be included in the solar permit; Fire Prevention Bureau approval for storage above 20 kWh single, 40 kWh aggregate in closets, sheds or basements, or 80 kWh outside.',
};

const oaklandFees2627: LocalGuidanceSource = {
  label: 'City of Oakland — Master Fee Schedule, fiscal year 2026-27 (effective July 1, 2026)',
  url: 'https://www.oaklandca.gov/files/assets/city/v/2/finance/documents/financial-reporting/master-fee-schedules/fiscal-year-2026-27-adopted-mfs.pdf',
  verifiedAt: verified20260923,
  scope:
    'Solar electric, residential: $450 inspection plus $4.03 per kW above 15 kW; SolarApp+ filing fee $21.49 per permit; residential energy storage system up to 80 kW aggregate or 20 kW single: $268.64 per permit.',
};

export const LOCAL_PROJECT_GUIDANCE = {
  temecula: {
    city: 'Temecula',
    actionIds: ['CA02', 'T2-CITYCOST'],
    intro:
      'A Temecula bid is incomplete until it says whether roof work, battery placement and both City inspections are included, and which utility serves the address.',
    quoteQuestions: [
      'Did every bidder use the same 12 months of electricity use and the same roof and shade assumptions?',
      'Is this a new system or an expansion of an existing one? Temecula does not let expansions use SolarAPP+ or expedited review.',
      'Who files the permit, schedules the fire and building inspections, handles corrections and completes the utility application?',
    ],
    localChecks: [
      {
        title: 'The fire inspection comes first',
        body: 'Temecula requires a fire inspection for every SolarAPP+ permit, and it has to be passed before a building inspection can be scheduled.',
      },
      {
        title: 'Battery location is a permit question',
        body: 'The City says an energy storage system may not go in a garage unless the home has a residential fire sprinkler system, so the proposed battery location belongs in the written scope.',
      },
      {
        title: 'A ground mount costs more to permit',
        body: "Temecula's 2026-27 fee schedule charges $970 to permit a residential ground-mounted system against $568 for a roof-mounted one; the ground mount adds a fire plan check and higher building fees.",
      },
      {
        title: 'Check which utility bills the address',
        body: "The California Energy Commission's map puts a small area in Temecula's southwest corner in SDG&E territory and the rest in SCE's. Neither SCE's nor SDG&E's list of community choice aggregators includes Temecula.",
      },
    ],
    related: [
      { href: '/blog/is-my-roof-good-for-solar-california', label: 'Check the roof before solar' },
      { href: '/blog/free-roof-replacement-with-solar-panels-california', label: 'Separate roof work from the solar offer' },
      { href: '/blog/solar-installation-timeline-california', label: 'Map the installation stages and handoffs' },
      { href: '/solar-savings/inland-empire', label: 'Inland Empire bill and project guide' },
    ],
    sources: [temeculaPermit0923, temeculaFees2627, cecTerritory0923, sceCcaList, sdgeActiveCcas],
  },
  murrieta: {
    city: 'Murrieta',
    actionIds: ['CA08', 'T2-CITYCOST'],
    intro:
      'Murrieta sets its residential solar permit fee by system size and treats a service-panel upgrade as a separate permit. Make both visible before comparing totals.',
    quoteQuestions: [
      "Is the system 15 kW or smaller? Murrieta's permit fee changes above that size, so the permit line should match the design.",
      'Does the design need a service-panel upgrade, and is that separate permit pulled by a C-10 electrical contractor and priced on its own line?',
      'Are carports, ground-mount supports, lighting or EV charging part of the job? Murrieta permits and charges for those separately.',
    ],
    localChecks: [
      {
        title: 'Zero-lot-line homes take another route',
        body: "Murrieta excludes homes with zero lot lines from SolarAPP+; those projects file through the City's Citizen Self Service portal instead. Ask which route applies before relying on an automated-review schedule.",
      },
      {
        title: 'Panel upgrades are their own permit',
        body: 'The City says every service-panel upgrade needs a separate permit, even when it appears on the solar plans, and that only C-10 electrical contractors may obtain one. A proposal that omits it is not the same scope as one that includes it.',
      },
      {
        title: 'Two inspection visits are included',
        body: 'Murrieta says its inspection fee covers two site visits and that more visits cost extra. Ask who pays if an inspection has to be repeated.',
      },
      {
        title: 'SCE supplies generation as well',
        body: "SCE's list of the community choice aggregators in its territory does not include Murrieta, so a Murrieta bill normally shows SCE for both generation and delivery.",
      },
    ],
    related: [
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
      { href: '/blog/do-solar-panels-work-during-power-outage-california', label: 'Decide which loads need backup' },
      { href: '/blog/sce-time-of-use-rates-2026', label: 'Check SCE time-of-use periods' },
      { href: '/solar-savings/inland-empire', label: 'Inland Empire bill and project guide' },
    ],
    sources: [murrietaSelfIssue, murrietaFees2627, sceCcaList],
  },
  'san-diego': {
    city: 'San Diego',
    actionIds: ['CA04'],
    intro:
      'Start with one written scope. In San Diego, adding storage, structural roof work or a different property type can change the permit path as well as the price.',
    quoteQuestions: [
      'Do the proposals show the same array, battery, roof, electrical and backup-circuit scope?',
      'Do cash and financed offers state the total obligation, equipment and assumptions separately?',
      'Who owns the City permit, inspection corrections, SDG&E interconnection and permission-to-operate steps?',
    ],
    localChecks: [
      {
        title: 'Match the permit to the actual project',
        body: 'San Diego Bulletin 301 separates electrical, combination and building-permit paths. The self-issued route has defined property and scope limits; it is not a blanket approval path.',
      },
      {
        title: 'Read both sides of the electric bill',
        body: 'An enrolled San Diego Community Power account can show SDCP generation while SDG&E continues delivery and consolidated billing. Use the provider lines on the actual bill when a proposal models remaining charges.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/blog/sdge-time-of-use-rates-2026', label: 'Check SDG&E time-of-use periods' },
      { href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california', label: 'Compare cash, loan, lease and PPA terms' },
    ],
    sources: [sanDiegoPermit, sdcpBill],
  },
  escondido: {
    city: 'Escondido',
    actionIds: ['CA05'],
    intro:
      'The useful installer comparison is the one that keeps the design constant and makes the permit, roof and battery responsibilities explicit.',
    quoteQuestions: [
      'Did each bidder use the same bill history, roof planes, shade and monthly production assumptions?',
      'Which licensed contractor is responsible for plans, corrections, inspection and utility interconnection?',
      'Are battery, roof and main-panel work included, excluded or priced as separate options?',
    ],
    localChecks: [
      {
        title: 'SolarAPP+ is limited by applicant and project',
        body: 'Escondido makes SolarAPP+ available to licensed contractors for eligible residential rooftop projects. Owner-builders and other PV installations use the regular permit route.',
      },
      {
        title: 'Generation and delivery can appear separately',
        body: 'Clean Energy Alliance identifies Escondido as a member city, while SDG&E continues delivery and billing. Confirm the generation line on the account instead of inferring enrollment from the city name.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/blog/is-my-roof-good-for-solar-california', label: 'Check roof condition and usable planes' },
      { href: '/battery/home-battery-cost-california', label: 'Separate battery scope from the array' },
    ],
    sources: [escondidoPermit, ceaBill],
  },
  'chula-vista': {
    city: 'Chula Vista',
    actionIds: ['CA11'],
    intro:
      'A permit service is one part of a solar project. The proposal should also assign design, corrections, inspection, interconnection and the physical work.',
    quoteQuestions: [
      'Which City route applies to this design: the expedited SolarAPP+ path or traditional review?',
      'Who handles plan submission, corrections, inspection and SDG&E interconnection through permission to operate?',
      'Does the written total include the array, roof work, electrical work, storage and every stated payment obligation?',
    ],
    localChecks: [
      {
        title: 'Name the complete local path',
        body: 'Chula Vista publishes expedited and traditional online routes. Ask the bidder to identify the applicable route and the inspection stages for the submitted design.',
      },
      {
        title: 'Do not confuse a permit task with a complete installation',
        body: 'Filing and permit charges do not cover equipment, construction, utility interconnection or warranty responsibility. Those items belong in the same written comparison.',
      },
      {
        title: 'City approval is separate from permission to operate',
        body: 'After the City inspection release, SDG&E still completes any required inspection or final review before it sends permission to operate. Put the owner of each handoff in the written scope.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/blog/sdge-time-of-use-rates-2026', label: 'Check SDG&E time-of-use periods' },
      { href: '/blog/solar-installation-timeline-california', label: 'Map the installation stages and handoffs' },
    ],
    sources: [chulaVistaPermit, sdgeInterconnection],
  },
  'palm-springs': {
    city: 'Palm Springs',
    actionIds: ['CA27'],
    intro:
      'Compare the full obligation, not the advertised payment. Keep ownership terms, equipment and local project duties in separate columns.',
    quoteQuestions: [
      'Who owns the panels and battery, and who is responsible for maintenance, roof access and removal or transfer?',
      'What is the total cash price or payment schedule, and does a lease or PPA payment increase over time?',
      'Who selects the correct City application, handles inspection and completes utility interconnection?',
    ],
    localChecks: [
      {
        title: 'Use the project-specific City application',
        body: 'Palm Springs directs applicants to its online portal to select the application for the actual project. Its public permit page does not promise SolarAPP+ review or a project timeline.',
      },
      {
        title: 'Put ownership duties beside the price',
        body: 'A cash purchase, loan, lease and PPA assign payment, equipment ownership, transfer and end-of-term duties differently. Require those terms in writing before comparing monthly figures.',
      },
    ],
    related: [
      { href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california', label: 'Compare ownership and payment structures' },
      { href: '/solar-problems/solar-escalator-clause-explained', label: 'Read an escalator clause' },
    ],
    sources: [palmSpringsPermit],
  },
  winchester: {
    city: 'Winchester',
    actionIds: ['CA10'],
    intro:
      'Winchester projects use Riverside County permitting. For storage, decide the backup job first and then compare equipment and compatibility.',
    quoteQuestions: [
      'Which loads must run during an outage, for how long, and does the design include the required backup equipment?',
      'Is the battery compatible with the existing or proposed inverter, service equipment and operating mode?',
      'Who handles the County permit, inspection, corrections and utility interconnection?',
    ],
    localChecks: [
      {
        title: 'The permit authority is Riverside County',
        body: 'Winchester is unincorporated. The applicable building-permit path is through Riverside County, so a proposal should not describe this as a Winchester city permit.',
      },
      {
        title: 'Backup and bill shifting are different designs',
        body: 'A battery sized around selected outage loads answers a different question from one used mainly to move energy between time periods. Put the operating goal and backed-up circuits in writing.',
      },
    ],
    related: [
      { href: '/blog/do-solar-panels-work-during-power-outage-california', label: 'Understand solar and batteries during an outage' },
      { href: '/battery/home-battery-cost-california', label: 'Compare battery scope and cost drivers' },
      { href: '/solar-savings/inland-empire', label: 'Inland Empire bill and project guide' },
    ],
    sources: [riversideCountyPermit],
  },
  carlsbad: {
    city: 'Carlsbad',
    actionIds: ['CA28', 'T2-CITYCOST'],
    intro:
      'Carlsbad has a defined two-step online route for eligible rooftop work. Make the bidder identify whether the proposed roof, panel and storage scope fits it.',
    quoteQuestions: [
      'Does the design qualify for the City SolarAPP+ route, and who uploads the approved package to Customer Self Service?',
      'Are roof, service-panel, storage and revision responsibilities included in the written total?',
      'Does the bill model use the account’s actual generation provider and SDG&E delivery charges?',
    ],
    localChecks: [
      {
        title: 'Two online steps do not mean every project is automated',
        body: 'Carlsbad routes eligible licensed-contractor rooftop projects through SolarAPP+ and then the City portal. Ask what happens if the design falls outside that scope or needs revisions.',
      },
      {
        title: 'Confirm the generation line',
        body: 'SDG&E lists Carlsbad among the cities Clean Energy Alliance serves, and SDG&E continues delivery and billing. The actual bill establishes whether the account is enrolled.',
      },
      {
        title: 'How Clean Energy Alliance pays for surplus',
        body: 'Clean Energy Alliance says a solar customer who produces more than they use over the 12 months to their true-up earns Net Surplus Compensation at $0.06 per kWh, which it describes as slightly higher than SDG&E’s credit. It mails a check once that credit reaches $100 and rolls smaller amounts forward.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/blog/is-my-roof-good-for-solar-california', label: 'Check roof condition before bidding' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
    ],
    sources: [carlsbadPermit, ceaBill, ceaNem, sdgeActiveCcas],
  },
  oceanside: {
    city: 'Oceanside',
    actionIds: ['CA28'],
    intro:
      'Oceanside uses SolarAPP+ and the City permit portal for eligible work. Compare who owns each handoff and what happens when the design changes.',
    quoteQuestions: [
      'Does the design qualify for SolarAPP+, and who moves the approved package into eTRAKiT?',
      'Who handles revisions, inspection, utility interconnection and permission to operate?',
      'Are array, battery, roof and electrical work shown as the same scope across every proposal?',
    ],
    localChecks: [
      {
        title: 'Track both permit steps',
        body: 'Oceanside directs eligible projects through SolarAPP+ and then eTRAKiT for the City permit. A bidder should identify the responsible party for both steps and for any corrections.',
      },
      {
        title: 'Use the account’s generation provider',
        body: 'Clean Energy Alliance names Oceanside as a member city, while SDG&E continues delivery and billing. City membership alone does not prove that a particular account is enrolled.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/battery/home-battery-cost-california', label: 'Separate storage from the array quote' },
    ],
    sources: [oceansidePermit, ceaBill],
  },
  fresno: {
    city: 'Fresno',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Fresno prices its solar permit by system size and resets the figures every July 1. Whether the design goes through SolarAPP+ or the City's standard plan check decides what paperwork the bid has to include.",
    quoteQuestions: [
      'What size is the system in kW? Fresno adds an inspection fee for each kW over 15, so the permit line should match the proposed size.',
      'Does this design qualify for SolarAPP+, or will it go through standard plan check, and who uploads it to Accela Citizens Access?',
      'If the main service panel is being derated instead of replaced, does the plan set include the electrical load calculation the City asks for?',
    ],
    localChecks: [
      {
        title: 'The permit fee grows past 15 kW',
        body: "Fresno's fee schedule sets one plan-check and inspection charge for the first 15 kW of a residential system and adds an inspection fee for each kW above that. The City adjusts these fees each July 1, so check that a quote uses the current schedule.",
      },
      {
        title: 'Standard plan check has its own checklist',
        body: "For a project outside SolarAPP+, Fresno's residential solar checklist asks for structural calculations on ground-mount arrays and on reverse-tilt arrays taller than 24 inches at the high side, and for electrical load calculations when the main service panel is derated. That is design work a quote should include or exclude in writing.",
      },
      {
        title: 'PG&E on both lines of the bill',
        body: "PG&E's list of the community choice aggregators in its territory does not include Fresno, so a Fresno home bill normally shows PG&E for generation as well as delivery. Your own bill is the check.",
      },
    ],
    related: [
      { href: '/solar-savings/central-valley', label: 'Central Valley bill and project guide' },
      { href: '/blog/what-size-solar-system-do-i-need', label: 'Size a system from 12 months of use' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/blog/solar-installation-timeline-california', label: 'Map the installation stages and handoffs' },
    ],
    sources: [fresnoSolarApp, fresnoFees2026, fresnoChecklist, pgeCcaList],
  },
  'san-mateo': {
    city: 'San Mateo',
    actionIds: ['T2-CITYCOST'],
    intro:
      "San Mateo's permit fee is a flat figure set by state law, so the parts of a quote that vary are the design, the roof and the electrical work. Make each bid show them.",
    quoteQuestions: [
      "Does the design fit SolarAPP+'s eligibility checklist for a roof-mounted retrofit system, or will it need another review?",
      'Is a battery included now or planned for later? A new storage system installed on its own carries its own $450 City permit.',
      "Does the bill model use WestLight Energy's generation charges and PG&E's delivery charges from your own bill?",
    ],
    localChecks: [
      {
        title: 'The City permit fee is fixed',
        body: "San Mateo's 2026-2027 schedule charges $450 per combination permit for solar on a single-family home. If a bid's permit line is much larger, ask what else it covers.",
      },
      {
        title: 'Unincorporated addresses use the County',
        body: 'If the home is in unincorporated San Mateo County rather than inside city limits, the County issues the permit through its Symbium instant-permit platform, not the City.',
      },
      {
        title: 'One PG&E bill, two providers',
        body: "WestLight Energy says its customers get one bill from PG&E carrying WestLight's generation charges and PG&E's delivery charges. Check which generation provider your account shows before comparing bids.",
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
      { href: '/blog/what-size-solar-system-do-i-need', label: 'Size a system from 12 months of use' },
    ],
    sources: [sanMateoSolarApp, sanMateoFees2627, sanMateoCountyInstant, westlightHome],
  },
  irvine: {
    city: 'Irvine',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Irvine's same-day permit covers most home systems, but not every design. Confirm the route, the battery count and the generation provider before comparing bids.",
    quoteQuestions: [
      'Is the system 38.4 kW or smaller with at most one battery, so it can use the same-day PermitsDIRECT! route, or will it go through IrvineReady! plan check?',
      'Does the plan set say whether the main panel is being upgraded or its breaker derated, as Irvine asks?',
      'If the home is in a homeowners association, has the HOA approved the design?',
    ],
    localChecks: [
      {
        title: 'Same-day permits have limits',
        body: 'PermitsDIRECT!, powered by Symbium, issues permits the same day to licensed contractors for rooftop systems up to 38.4 kW with no more than one battery. Anything else goes through the IrvineReady! portal, where the City says to plan on five working days for the first plan check.',
      },
      {
        title: 'Your HOA may have its own process',
        body: 'The City tells homeowners that their homeowners association may have its own approval process and to review its policies before going ahead.',
      },
      {
        title: 'How OCPA credits solar exports',
        body: 'Orange County Power Authority, which lists Irvine as a member community, says it treats solar customers on the Net Billing Tariff as if their generation were under NEM 2.0, runs true-ups ahead of summer and pays unused credits at the lower Net Surplus Compensation rate. SCE still handles the delivery charges and credits.',
      },
    ],
    related: [
      { href: '/solar-savings/orange-county', label: 'Orange County bill and project guide' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/blog/sce-time-of-use-rates-2026', label: 'Check SCE time-of-use periods' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [irvineRooftop, irvineFees2627, ocpaSolarNem],
  },
  'el-cajon': {
    city: 'El Cajon',
    actionIds: ['T2-CITYCOST'],
    intro:
      "El Cajon's SolarAPP+ route replaces City inspections with a third-party inspection declaration and a final review, and the bill has no community choice provider. Both change what a quote has to cover.",
    quoteQuestions: [
      'Does the design fit the SolarAPP+ eligibility checklist, and if a battery is included, is it on the same SolarAPP+ permit as the panels?',
      "Who completes the third-party inspection declaration, uploads it to the City's PACO portal and requests the final review that releases the project to SDG&E?",
      "Does the bill model use SDG&E's own generation rates rather than a community choice provider's?",
    ],
    localChecks: [
      {
        title: 'A declaration instead of City inspections',
        body: "On El Cajon's SolarAPP+ route the contractor completes a third-party inspection declaration on the permit, uploads it to the City's PACO portal and requests a final review to obtain SDG&E's solar release. The City says no other City inspections are required.",
      },
      {
        title: 'Batteries can go through SolarAPP+',
        body: 'Since January 2026, El Cajon has accepted battery energy storage systems through SolarAPP+. Ask whether the battery in a quote is permitted with the panels or on its own.',
      },
      {
        title: 'SDG&E supplies generation too',
        body: "SDG&E's list of active community choice aggregators names Chula Vista, La Mesa, San Diego and other nearby cities but not El Cajon, so an El Cajon bill normally shows SDG&E for generation as well as delivery.",
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/blog/sdge-time-of-use-rates-2026', label: 'Check SDG&E time-of-use periods' },
      { href: '/blog/solar-installation-timeline-california', label: 'Map the installation stages and handoffs' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [elCajonPv, sdgeActiveCcas],
  },
  fremont: {
    city: 'Fremont',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Fremont prices its automated Instant Solar Permit well below a permit that goes through regular review, so the route a design takes shows up directly in the permit line.",
    quoteQuestions: [
      "Does the design qualify for Fremont's Instant Solar Permit through SolarAPP+, or will it need regular review?",
      'If the main electrical service is being upgraded, has it been added to the Instant Solar Permit, as Fremont allows?',
      "Does the bill model use Ava Community Energy's generation credits and PG&E's delivery charges, with their separate true-ups?",
    ],
    localChecks: [
      {
        title: 'Two routes, two fees',
        body: "Fremont's fee schedule effective July 1, 2026 charges $133 for an Instant Solar Permit up to 15 kW and $280 for a residential solar permit through regular review, each with a per-kW add-on above 15 kW. Every extra inspection or re-inspection is $133, so ask who pays if one fails.",
      },
      {
        title: 'Panel upgrades can join the instant permit',
        body: 'Fremont says a main electrical service upgrade can be added to the Instant Solar Permit, which covers roof-mounted systems with or without a battery.',
      },
      {
        title: 'How Ava credits exports',
        body: 'Ava Community Energy says Solar Billing Plan customers earn export credits that vary by hour, plus $0.025 per kWh on exports between 3 and 8 pm for customers not on CARE or FERA, or $0.01 per kWh on every export for CARE and FERA customers. Ava trues up each April and pays balances over $100; PG&E runs its own true-up for delivery charges.',
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [fremontIsp, fremontFees2026, avaSolarBilling, avaCommunities],
  },
  riverside: {
    city: 'Riverside',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Riverside's electricity comes from the City's own utility, not SCE, so both the permit and the solar rules are set locally. Its SolarAPP+ route is narrower than in many cities, and that changes the permit fee.",
    quoteQuestions: [
      "Does the design qualify for the City's expedited SolarAPP+ permit: rooftop, under 38 kW, no battery, no panel upgrade or derate, and no existing panels?",
      'If a battery or a panel upgrade is part of the job, which City permit route and fee does the quote assume?',
      "Is the system sized within Riverside Public Utilities' limit, and does the quote account for RPU's $275 net energy metering review fee and any net meter upgrade?",
    ],
    localChecks: [
      {
        title: 'SolarAPP+ here excludes batteries',
        body: "Riverside's SolarAPP+ route covers only residential rooftop systems under 38 kW with no battery, no panel upgrade or derate and no existing panels. Other projects take the regular permit, which the City's fee schedule prices at $350 for up to 15 kW against $190 for the expedited permit.",
      },
      {
        title: 'RPU sets the size limit',
        body: "Riverside Public Utilities says its solar program lets a customer offset up to 100 percent of historical 12-month use, and sizes a home without a year of history at two watts per square foot of living space, including garages. The City's SolarAPP+ page states a 150 percent ceiling, so ask the installer which limit the design meets.",
      },
      {
        title: 'RPU runs its own net metering',
        body: 'RPU bills solar customers on its Net Energy Metering rate, where the meter tracks the net difference between the power you use and the power you send to RPU within each billing period. RPU charges for a meter upgrade if the home does not already have a net meter.',
      },
      {
        title: 'Confirm RPU serves the address',
        body: "RPU publishes its electric service area as a map rather than an address lookup. Read the utility named on your bill before applying RPU's rules, or its fees, to a quote.",
      },
    ],
    related: [
      { href: '/solar-savings/inland-empire', label: 'Inland Empire bill and project guide' },
      { href: '/blog/solar-rebates-by-california-utility', label: 'Rebates by California utility' },
      { href: '/blog/what-size-solar-system-do-i-need', label: 'Size a system from 12 months of use' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [riversideSolarApp, riversideFees, rpuSolarInfo, rpuFees2026, rpuServiceArea],
  },
  oakland: {
    city: 'Oakland',
    actionIds: ['T2-CITYCOST'],
    intro:
      'Oakland lets a panel replacement, subpanels and a battery ride on the solar permit, but a larger battery bank also needs Fire Prevention Bureau approval. Settle the storage size before comparing bids.',
    quoteQuestions: [
      'Is the home a permitted main dwelling with a rooftop design SolarAPP+ can approve, or will the permit take another route?',
      'How large is the battery? Oakland requires Fire Prevention Bureau approval above 20 kWh in one battery, above 40 kWh in a utility closet, shed or basement, or at 80 kWh outside.',
      "Does the bill model use Ava Community Energy's generation credits and PG&E's delivery charges, with their separate true-ups?",
    ],
    localChecks: [
      {
        title: 'One permit can cover the electrical work',
        body: 'Oakland says a main service panel replacement, subpanels and energy storage installed as part of the solar installation may be included in the solar permit application.',
      },
      {
        title: 'Battery size can add a fire review',
        body: 'Energy storage needs Fire Prevention Bureau approval where a single battery exceeds 20 kWh, the system exceeds 40 kWh inside a utility closet, shed or basement, or 80 kWh is installed outside. A quote for a large battery bank should say whether that review is included.',
      },
      {
        title: 'The City fees',
        body: "Oakland's 2026-27 fee schedule sets the residential solar electric inspection fee at $450 plus $4.03 per kW above 15 kW, a $21.49 SolarApp+ filing fee, and a residential energy storage permit at $268.64 up to its size threshold.",
      },
      {
        title: 'What Ava pays for exports',
        body: "On Ava's Solar Billing Plan, export credits change by the hour. Customers outside CARE and FERA get a $0.025 per kWh bonus on exports from 3 to 8 pm, CARE and FERA customers get $0.01 per kWh on every export, and Ava settles once a year in April.",
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/solar-battery-backup-california', label: 'Plan battery backup' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/blog/solar-installation-timeline-california', label: 'Map the installation stages and handoffs' },
    ],
    sources: [oaklandSolar, oaklandFees2627, avaSolarBilling, avaCommunities],
  },
} as const satisfies Record<string, LocalProjectGuidanceEntry>;

export type SupportedLocalGuidanceSlug = keyof typeof LOCAL_PROJECT_GUIDANCE;

export function getLocalProjectGuidance(
  citySlug: string,
): LocalProjectGuidanceEntry | null {
  return (
    LOCAL_PROJECT_GUIDANCE[
      citySlug as SupportedLocalGuidanceSlug
    ] ?? null
  );
}
