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


const rosevilleSolarApp: LocalGuidanceSource = {
  label: 'City of Roseville — SolarAPP+',
  url: 'https://www.roseville.ca.gov/development_services/building/solarapp.php',
  verifiedAt: verified20260923,
  scope:
    'Main-dwelling rooftop only, no ballasted systems, no main panel upgrades, not in a City flood zone; Roseville Electric pre-approval required; C-10, C-46 or B license plus City business license; no permit runners; $25 SolarAPP+ fee; building permit fees currently $1,349.49.',
};

const rosevilleSolar2: LocalGuidanceSource = {
  label: 'Roseville Electric — Roseville Solar 2.0',
  url: 'https://www.roseville.ca.gov/electric_utility/rates/roseville_solar_2_0/index.php',
  verifiedAt: verified20260923,
  scope: 'Customers interconnected on or after October 1, 2018 are on Solar 2.0; the surplus energy compensation rate is $0.0691 per kWh.',
};

const rosevilleInterconnection: LocalGuidanceSource = {
  label: 'Roseville Electric — The Interconnection Process',
  url: 'https://www.roseville.ca.gov/electric_utility/rebates_and_energy_savings/your_trusted_solar_advisor/the_interconnection_process.php',
  verifiedAt: verified20260923,
  scope:
    'System size limit of 100% of the last 12 months of use, or conditioned square footage times 3 kWh; interconnection reservation valid 120 days; multi-register meter installed after City inspection; permission to operate requested by email.',
};

const santaRosaSolar: LocalGuidanceSource = {
  label: 'City of Santa Rosa — Solar Panel Installation',
  url: 'https://www.srcity.org/3826/Solar-Panel-Installation',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ for most residential roof-mounted retrofit PV, including systems with storage; permit through Accela Citizen Access; inspections by text, phone or online, requested by 2:30 p.m. the day before. No fee amount stated.',
};

const santaRosaCode1868: LocalGuidanceSource = {
  label: 'Santa Rosa City Code, Chapter 18-68 (small residential rooftop solar), section 18-68.060',
  url: 'https://ecode360.com/42967322',
  verifiedAt: verified20260923,
  scope:
    'Applicant verifies, at its own cost, that existing wiring, main panel and subpanels can carry the new load; review within three business days, resubmittals too; City approval does not authorize grid connection; one inspection; re-inspections and further reviews may carry fees (Ord. 4048, 2015).',
};

const scpSolarBilling: LocalGuidanceSource = {
  label: 'Sonoma Clean Power — Solar Billing Plan',
  url: 'https://sonomacleanpower.org/solar-billing-plan',
  verifiedAt: verified20260923,
  scope:
    'Public power provider for Sonoma and Mendocino counties; Solar Billing Plan customers move to PG&E’s E-ELEC rate; export credits vary by season, day and hour; surplus paid each spring at Net Surplus Compensation, up to $5,000 a year, by check above $200 and as a bill credit at or below it.',
};

const sloSolar: LocalGuidanceSource = {
  label: 'City of San Luis Obispo — Solar Information',
  url: 'https://www.slocity.org/government/department-directory/community-development/building-safety/permit-forms-and-applications/solar-documents',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ review: $35 solar, $60 solar plus storage; approval uploaded to InfoSLO (Photovoltaic (SolarAPP) application); permit auto-issued about a minute after the invoice is paid; inspection requests by 5 p.m. may be scheduled for the next business day.',
};

const sloFees2627: LocalGuidanceSource = {
  label: 'City of San Luis Obispo — Comprehensive Fee Schedule 2026-2027 (effective July 1, 2026)',
  url: 'https://www.slocity.org/home/showpublisheddocument/39182/639177350208630000',
  verifiedAt: verified20260923,
  scope:
    'Photovoltaic Systems (residential roof mount) $332.50 total including a 3.05% information technology surcharge on work in the EnerGov system.',
};

const sloCce: LocalGuidanceSource = {
  label: 'City of San Luis Obispo — Community Choice Energy',
  url: 'https://www.slocity.org/government/department-directory/city-administration/office-of-sustainability-and-natural-resources/climate-action/community-choice-energy',
  verifiedAt: verified20260923,
  scope: 'The City began receiving 3CE service in January 2020.',
};

const cceSolarBilling: LocalGuidanceSource = {
  label: 'Central Coast Community Energy (3CE) — Solar Billing Plan',
  url: 'https://3cenergy.org/solar-billing-plan/',
  verifiedAt: verified20260923,
  scope:
    'Exports credited at 3CE hourly Energy Export Credit rates; CARE/FERA adder of $0.00396 per kWh; generation true-up every December; residential customers with at least $200 of Net Surplus Compensation may request a check within 45 days of the true-up statement; separate delivery true-up with PG&E or SCE.',
};

const walnutCreekSolar: LocalGuidanceSource = {
  label: 'City of Walnut Creek — Solar, Electrical, Heating, and Plumbing',
  url: 'https://www.walnutcreekca.gov/government/community-development-department/permits/building-permits/building-and-land-use-regulations/solar-electrical-heating-and-plumbing',
  verifiedAt: verified20260923,
  scope:
    'Lists submittal requirements for photovoltaic arrays (IB-025) and for batteries in one- and two-family dwellings with solar; does not name SolarAPP+ or any automated platform or state a fee.',
};

const walnutCreekFees: LocalGuidanceSource = {
  label: 'City of Walnut Creek — Master Fee Schedule FY26 & FY27',
  url: 'https://walnutcreek.granicus.com/MetaViewer.php?view_id=&clip_id=5201&meta_id=335345',
  verifiedAt: verified20260923,
  scope:
    'Solar photovoltaic, single-family and duplex residential: $280.00, unified permit including plan check and inspection of all electrical, plumbing and related work; no change proposed for FY 2026 or FY 2027.',
};

const walnutCreekMce: LocalGuidanceSource = {
  label: 'City of Walnut Creek — MCE Clean Energy',
  url: 'https://www.walnutcreekca.gov/government/departments/e-c-o-sustainability/energy-innovation',
  verifiedAt: verified20260923,
  scope: 'MCE has been the default electricity provider for Walnut Creek since September 2016; PG&E transmits and distributes power, maintains infrastructure and bills customers.',
};

const mceSolarBilling: LocalGuidanceSource = {
  label: 'MCE — Solar Billing Plan',
  url: 'https://mcecleanenergy.org/solar-billing-plan/',
  verifiedAt: verified20260923,
  scope:
    'Exports credited at the Energy Export Credit value plus an MCE Solar Bonus Credit of 10% of those credits; CARE/FERA solar credit of $0.05 per kWh; Solar Storage Credit of $10 to $20 a month for enrolled batteries; annual April-to-March cash-out at Net Surplus Compensation for balances over $200, up to $5,000.',
};

const pleasantonPermits: LocalGuidanceSource = {
  label: 'City of Pleasanton — Permits, Forms & Fees (SolarAPP+)',
  url: 'https://www.cityofpleasantonca.gov/our-government/community-and-economic-development/permits-forms-fees/',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ for eligible single-family roof-mounted retrofit PV, then a Solar Permit with SolarAPP+ in Accela Citizen Access; active City business license required; 2.5% convenience fee on card payments since January 1, 2025.',
};

const pleasantonFees2026: LocalGuidanceSource = {
  label: 'City of Pleasanton — Building Permit and Plan Review Fees (January 1, 2026)',
  url: 'https://www.cityofpleasantonca.gov/assets/our-government/community-development/permits-forms-fees/Permit-Fees.pdf',
  verifiedAt: verified20260923,
  scope:
    'Residential photovoltaic systems, plan review included: $250 up to 10 kW; over 10 kW $450 plus $15 per kW above 15; technology fee of 5% of total permit fees.',
};

const pleasantonPvHandout: LocalGuidanceSource = {
  label: 'City of Pleasanton — Solar Photovoltaic (PV) Projects handout (dated 03/17)',
  url: 'https://www.cityofpleasantonca.gov/assets/our-government/community-development/handouts/photovoltaic-submittal-requirements.pdf',
  verifiedAt: verified20260923,
  scope:
    'For PV 10 kW or smaller: no Planning review for flush rooftop arrays (parallel, under 12 inches, not past ridge or hip); no Fire Department approval; inspection checks that the main and inverter breakers total no more than 120% of the bus bar rating.',
};


const santaCruzSolarApp: LocalGuidanceSource = {
  label: 'City of Santa Cruz — SolarApp+',
  url: 'https://www.santacruzca.gov/Government/City-Departments/Community-Development/Building-Safety/SolarApp',
  verifiedAt: verified20260923,
  scope:
    'Only new rooftop PV on detached one- and two-family dwellings, townhomes and accessory structures; licensed contractors only (owner-builders use regular plan check); properties with active code cases, unverified complaints, voided permits or in a flood zone excluded; permit number emailed; fees paid online; inspections by phone.',
};

const santaCruzFees2026: LocalGuidanceSource = {
  label: 'City of Santa Cruz — Planning & Community Development Fee Schedule, 2026',
  url: 'https://www.santacruzca.gov/files/assets/city/v/4/pl/documents/pl-fee-schedule-effective-1-1-26.pdf',
  verifiedAt: verified20260923,
  scope: 'Solar permits: residential system up to 15 kW $360; each kW above 15 kW $24; both marked for the 6% technology surcharge.',
};

const cceMembers: LocalGuidanceSource = {
  label: 'Central Coast Community Energy — Implementation Plan Addendum No. 5 (May 2023)',
  url: 'https://3cenergy.org/wp-content/uploads/2023/05/Implementation-Plan-Addendum-No.-5.pdf',
  verifiedAt: verified20260923,
  scope:
    'Program launched March 1, 2018 to initial members including the counties of Monterey, Santa Cruz and San Benito and the cities of Capitola, Santa Cruz, Scotts Valley, Watsonville, Salinas, Monterey, Pacific Grove, Carmel and Seaside; the member list includes the City of Monterey, City of San Luis Obispo and City of Santa Cruz.',
};

const oceansidePermit0923: LocalGuidanceSource = {
  label: 'City of Oceanside — SolarAPP+',
  url: 'https://www.ci.oceanside.ca.us/government/development-services/building/solarapp',
  verifiedAt: verified20260923,
  scope:
    'C-10 or C-46 contractors registered with SolarAPP+ only (no permit runners or B licenses); main-dwelling rooftop, no ballasted systems; BLD SOLAR APP PV permit type in the City portal; $25 SolarAPP+ fee covers up to three revisions; City may charge for resubmittals; printed job card and SolarAPP+ documents on site for inspection. City fee amount not stated.',
};

const chulaVistaPermit0923: LocalGuidanceSource = {
  label: 'City of Chula Vista — Residential Solar Energy Permits',
  url: 'https://www.chulavistaca.gov/departments/development-services/build-green/residential-solar-energy',
  verifiedAt: verified20260923,
  scope:
    'Since June 28, 2023 expedited permits must use SolarAPP+ and the Citizen Access Solar Permit with Solar App Plus application; standard permits online or at the counter; designated or eligible historic structures need Historic Eligibility Clearance first and must follow the Secretary of the Interior standards for solar.',
};

const chulaVistaFees: LocalGuidanceSource = {
  label: 'City of Chula Vista — Fee Bulletin 10-400, Miscellaneous Item Permit Fees (September 2024)',
  url: 'https://www.chulavistaca.gov/home/showpublisheddocument/2416/638638971096170000',
  verifiedAt: verified20260923,
  scope:
    'Photovoltaic system, residential SFD/duplex: expedited $453 ($30 intake, $0 plan check, $423 inspection); traditional $722 ($70, $158, $494); panel upgrade with new PV $203.',
};

const sdcpNem: LocalGuidanceSource = {
  label: 'San Diego Community Power — Net Energy Metering',
  url: 'https://sdcommunitypower.org/net-energy-metering/',
  verifiedAt: verified20260923,
  scope:
    'Monthly surplus credited by time-of-use period; annual Net Surplus Compensation at the wholesale rate plus a $0.0075 per kWh SDCP bonus; checks issued automatically above $100; SDCP credits offset only SDCP generation charges, not SDG&E delivery.',
};

const livermoreSolarApp: LocalGuidanceSource = {
  label: 'City of Livermore — SolarApp+',
  url: 'https://www.livermoreca.gov/departments/community-development/permit-center/residential-photovoltaic/solarapp',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ for single-family roof-mounted retrofit PV; active City business license required; Permit Center staff review the Solar Permit with SolarAPP+ submittal; permit and receipt emailed on payment; Smoke Detector Compliance form required on site or the project is not finaled; revisions need a Revision Application.',
};

const thousandOaksSolar: LocalGuidanceSource = {
  label: 'City of Thousand Oaks — Solar PV Systems',
  url: 'https://toaks.gov/solarsystems',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ for roof-mounted residential systems up to 38.4 kW AC by B, C-10 and C-46 contractors; ballasted, ground-mounted and carport systems need a standard permit; both filed through TO/24; SolarAPP+ fees are independent of City fees. No City fee amount stated.',
};

const cpaSolar: LocalGuidanceSource = {
  label: 'Clean Power Alliance — Solar / Net Energy Metering',
  url: 'https://cleanpoweralliance.org/solar/',
  verifiedAt: verified20260923,
  scope:
    'Solar Billing Plan (approved after August 31, 2023): hourly Energy Export Credits from CPUC Avoided Cost Calculator prices; Energy Export Bonus Credit for systems installed before 2028; Net Surplus Compensation 10% above SCE’s; annual true-up in April; SCE applies delivery charges and credits.',
};


const cecSb379: LocalGuidanceSource = {
  label: 'California Energy Commission — Residential Solar Permitting Program data (SB 379)',
  url: 'https://www.energy.ca.gov/media/9247',
  verifiedAt: verified20260923,
  scope:
    'Self-reported platform status per jurisdiction, data last updated August 3, 2026; the CEC says it does not certify compliance. Rows used: Chico (deadline Sept 2023, without platform); Pasadena, Anaheim (custom platform); Santa Clarita (Symbium); Escondido (SolarAPP+).',
};

const chicoBuilding: LocalGuidanceSource = {
  label: 'City of Chico — Building Division',
  url: 'https://chicoca.gov/Departments/Community-Development/Building-Division/index.html',
  verifiedAt: verified20260923,
  scope: 'All applications, plans and documents must be submitted digitally; eTRAKiT is the City’s permit portal. No solar-specific permit route described.',
};

const chicoFees2627: LocalGuidanceSource = {
  label: 'City of Chico — FY 2026/2027 Master Fee Schedule (effective July 6, 2026)',
  url: 'https://catapultfilemanager-prod.s3.us-west-2.amazonaws.com/e12a7475-6d0d-4986-a8bb-538a9e5496e0/FY%202026-2027%20MASTER%20FEE%20SCHEDULE%20-%20Updated%2007-06-2026.pdf',
  verifiedAt: verified20260923,
  scope:
    'Residential solar on an existing structure: $450 at 15 kW or less; $500 plus $15 per kW above 15 kW; plan check and fees may apply above 40 lb/sf or on a conventionally framed roof; separate permit for supporting structures over 7 feet; ground-mount solar racking permit $876, separate permit.',
};

const pwpSolar: LocalGuidanceSource = {
  label: 'Pasadena Water and Power — Solar Eligibility and Requirements',
  url: 'https://pwp.cityofpasadena.net/solar-eligibility-and-requirements/',
  verifiedAt: verified20260923,
  scope:
    'All PWP electric customers eligible; system 1 kW to 1,000 kW AC and no more than 150% of average annual use; PWP initial review approval before the building permit; lockable AC disconnect within eight feet and line of sight of the meter; Net Surplus Compensation under Pasadena Municipal Code 13.04.177.',
};

const pasadenaExpress: LocalGuidanceSource = {
  label: 'City of Pasadena — Express Permit Portal',
  url: 'https://mypermits.cityofpasadena.net/Permit/Express',
  verifiedAt: verified20260923,
  scope: 'Offers a Solar Photovoltaic, or Solar Photovoltaic & Energy Storage System, express permit for residential properties through a Permit Center Online account. No fee shown before applying.',
};

const escondidoSolarApp0923: LocalGuidanceSource = {
  label: 'City of Escondido — Solar App Plus',
  url: 'https://www.escondido.gov/1247/Solar-App-Plus',
  verifiedAt: verified20260923,
  scope:
    'Licensed contractors, residential rooftop only; active City business license required before submitting; qualifying projects need no City plan review; permit issues electronically once fees are paid; owner-builders and other PV installations need a regular building permit; printed permit, plans and inspection card on site.',
};

const escondidoFees: LocalGuidanceSource = {
  label: 'City of Escondido — Fee Guide for Development Projects (updated September 16, 2025)',
  url: 'https://www.escondido.gov/DocumentCenter/View/8626/2025-Fee-Guide-Updated-9-16-25',
  verifiedAt: verified20260923,
  scope:
    'Base fees (Resolution 2024-72), other applicable fees additional: residential solar PV $308 at 15 kW or less, $450 plus $15 per kW above 15 kW; battery backup storage $176; residential service panel upgrade $176.',
};

const santaClaritaInstant: LocalGuidanceSource = {
  label: 'City of Santa Clarita — Instant Online Permits',
  url: 'https://santaclarita.gov/building-safety/instantpermits/',
  verifiedAt: verified20260923,
  scope: 'Rooftop PV and energy storage systems are instant online permits through Symbium; since May 1, 2026 PVA permits are being replaced by Symbium MEP permits, with existing PVA permits to be finaled by May 1, 2027; inspections online or by hotline.',
};

const santaClaritaFees: LocalGuidanceSource = {
  label: 'City of Santa Clarita — Building & Safety Fee Brochure 2026-2027 (effective August 24, 2026)',
  url: 'https://santaclarita.gov/building-safety/wp-content/uploads/sites/12/2026/08/2026-2027-BS-Fee-Brochure.pdf',
  verifiedAt: verified20260923,
  scope: 'Residential photovoltaic system, rooftop: $450; main panel upgrade or change-out up to 400 amps: $44 plus staff charges; record maintenance: 10% of all related permit fees.',
};

const anaheimNem: LocalGuidanceSource = {
  label: 'City of Anaheim — Solar Energy and Net Metering',
  url: 'https://www.anaheim.net/636/Solar-Energy-and-Net-Metering',
  verifiedAt: verified20260923,
  scope: 'Anaheim is not moving to NEM 3.0; its current NEM 2.0 program, for solar billing accounts set up after January 1, 2021, is a wholesale-based rate program. Solar Program phone 714-765-4182.',
};


const vallejoFees: LocalGuidanceSource = {
  label: 'City of Vallejo — Master Fee Schedule FY 2025-2026 (fees effective July 1, 2025)',
  url: 'https://www.cityofvallejo.net/common/pages/GetFile.ashx?key=LuI%2BAe8c',
  verifiedAt: verified20260923,
  scope:
    'Residential solar plan review $138; residential solar 15 kW or less $312; per kW above 15 kW $54.28; solar fees stated to comply with Gov. Code 66015 and capped at $450 residential before the $38 permit issuance fee.',
};

const vallejoPermitCenter: LocalGuidanceSource = {
  label: 'City of Vallejo — Central Permit Center',
  url: 'https://www.vallejo.gov/online_services/central_permit_center',
  verifiedAt: verified20260923,
  scope: 'Permit applications through eTRAKiT; a Symbium permit search is embedded on the page; no solar-specific route described.',
};

const longBeachSolar: LocalGuidanceSource = {
  label: 'City of Long Beach — Solar Photovoltaic (PV) Process',
  url: 'https://longbeach.gov/lbcd/building/permit-center/solar-permit/',
  verifiedAt: verified20260923,
  scope: 'Residential process: contact SCE for conceptual approval, review IB-023, apply and pay through the online permitting portal, then schedule inspections. More complex projects may need more review.',
};

const longBeachIb023: LocalGuidanceSource = {
  label: 'City of Long Beach — Information Bulletin IB-023 (Rev. 07-17-2024)',
  url: 'https://longbeach.gov/globalassets/lbcd/media-library/documents/building--safety/information-bulletins/ib-023',
  verifiedAt: verified20260923,
  scope:
    'Express electrical permit for flush-mounted rooftop PV up to 38.4 kW; total fee including surcharges, filing fees and required inspections: PV and ESS $447.45, PV without ESS $386.62, ESS only $264.95; historic districts need a Planning Permit or Certificate of Appropriateness; no fire review for one- and two-family dwellings; SCE is the utility for Long Beach.',
};

const santaAnaJune2026: LocalGuidanceSource = {
  label: 'City of Santa Ana — Upcoming Changes to the Residential Solar Permit Requirement (effective June 1, 2026)',
  url: 'https://www.santa-ana.org/upcoming-changes-to-the-residential-solar-permit-requirement-effective-june-1st-2026/',
  verifiedAt: verified20260923,
  scope: 'From June 1, 2026 all residential solar projects are permitted only on SolarAPP+ approval; projects without it are not processed.',
};

const santaAnaFees: LocalGuidanceSource = {
  label: 'City of Santa Ana — Does SolarAPP+ collect fees and will the City be charging fees?',
  url: 'https://santa-ana.gov/question/does-solarapp-collect-fees-and-will-the-city-be-charging-fees',
  verifiedAt: verified20260923,
  scope: 'SolarAPP+ collects a one-time fee of $35.00; the City application fee is separate and the same as a regular solar permit.',
};

const santaAnaStreamlined: LocalGuidanceSource = {
  label: 'City of Santa Ana — Streamlined Residential Solar Plan Check and Permitting',
  url: 'https://santa-ana.gov/city-of-santa-ana-streamlined-residential-solar-plan-check-and-permitting',
  verifiedAt: verified20260923,
  scope: 'All solar applications require a homeowner letter of authorization (signed property owner approval per SB 1222 and AB 2188).',
};

const ocpaMembers: LocalGuidanceSource = {
  label: 'Orange County Power Authority — home page (member communities)',
  url: 'https://www.ocpower.org/',
  verifiedAt: verified20260923,
  scope: 'Lists Buena Park, Fullerton, Irvine and Fountain Valley as member communities.',
};

const cecCcaLayer: LocalGuidanceSource = {
  label: 'California Energy Commission — Electric Load Serving Entities (Other) layer (CCA territories)',
  url: 'https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-other/about',
  verifiedAt: verified20260923,
  scope: 'Queried against the Census place boundary; the layer data was last edited in August 2025 and is a map, not an enrollment record.',
};

const edcSolar: LocalGuidanceSource = {
  label: 'County of El Dorado — Instantaneous Residential Solar Permits',
  url: 'https://www.eldoradocounty.ca.gov/Land-Use/Building-Services/Building-Services-Hub/Residential-Solar-Permits',
  verifiedAt: verified20260923,
  scope:
    'Symbium automated permits for residential parcels in unincorporated El Dorado County; excludes airport review zones, flood zones and parcels needing eligibility review (in-person submission at one of two offices); service charge not stated; processing about 1-3 business days.',
};

const pioneerAbout: LocalGuidanceSource = {
  label: 'Pioneer Community Energy — About Us',
  url: 'https://pioneercommunityenergy.org/about-us/',
  verifiedAt: verified20260923,
  scope: 'Serves Auburn, Colfax, Lincoln, Rocklin, Loomis, most of unincorporated Placer County, most of unincorporated El Dorado County, Placerville, and since 2024 Grass Valley and Nevada City.',
};

const pioneerSolar: LocalGuidanceSource = {
  label: 'Pioneer Community Energy — Going Solar With Pioneer',
  url: 'https://pioneercommunityenergy.org/going-solar-with-pioneer/',
  verifiedAt: verified20260923,
  scope: 'Pays $0.005 per kWh more than PG&E for over-production; monthly billing with credits rolling to the annual true-up; net surplus cashed out in the March/April billing cycle; check at $50 or more, bill credit below.',
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
    actionIds: ['CA05', 'T2-CITYCOST'],
    intro:
      "Escondido publishes base fees for solar, battery and panel-upgrade permits, so a quote's permit lines can be checked item by item.",
    quoteQuestions: [
      'Did each bidder use the same bill history, roof planes, shade and monthly production assumptions?',
      'Does the contractor hold an active City of Escondido business license? The City requires one before it takes a SolarAPP+ permit.',
      'Are battery, roof and main-panel work included, excluded or priced as separate options, each with its own permit?',
    ],
    localChecks: [
      {
        title: 'Three permits, three base fees',
        body: "Escondido's fee guide sets base fees of $308 for a residential solar permit up to 15 kW, $176 for battery backup storage and $176 for a residential service panel upgrade, with other applicable fees added per permit.",
      },
      {
        title: 'SolarAPP+ skips City plan review',
        body: 'Qualifying SolarAPP+ projects need no City plan review, and the permit issues electronically once fees are paid. Owner-builders and installations SolarAPP+ cannot approve need a regular building permit.',
      },
      {
        title: 'Generation and delivery appear separately',
        body: 'SDG&E lists Escondido among the cities Clean Energy Alliance serves, while SDG&E continues delivery and billing. Confirm the generation line on the account instead of inferring enrollment from the city name.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/blog/is-my-roof-good-for-solar-california', label: 'Check roof condition and usable planes' },
      { href: '/battery/home-battery-cost-california', label: 'Separate battery scope from the array' },
    ],
    sources: [escondidoSolarApp0923, escondidoFees, ceaBill, sdgeActiveCcas],
  },
  'chula-vista': {
    city: 'Chula Vista',
    actionIds: ['CA11', 'T2-CITYCOST'],
    intro:
      'Chula Vista publishes both of its solar permit prices, and the gap between them is the reason to confirm the route before signing.',
    quoteQuestions: [
      'Does the design qualify for the expedited SolarAPP+ permit ($453), or will it need the traditional permit ($722)?',
      "If the main panel is upgraded with the new system, is the City's $203 panel-upgrade permit in the quote?",
      'Who handles plan submission, corrections, inspection and SDG&E interconnection through permission to operate?',
    ],
    localChecks: [
      {
        title: 'Two published prices',
        body: "Chula Vista's Fee Bulletin 10-400 charges $453 for an expedited SolarAPP+ permit on a single-family home or duplex and $722 for a traditional one, plus $203 for a panel upgrade done with a new solar system.",
      },
      {
        title: 'Historic homes need clearance first',
        body: "For a structure that is designated or eligible to be designated historic, the City requires Historic Eligibility Clearance before the solar permit, and the design has to follow the Secretary of the Interior's standards for solar in a rehabilitation project.",
      },
      {
        title: 'City approval is separate from permission to operate',
        body: 'After the City inspection release, SDG&E still completes any required inspection or final review before it sends permission to operate. Put the owner of each handoff in the written scope.',
      },
      {
        title: "San Diego Community Power's surplus payment",
        body: 'San Diego Community Power credits monthly surplus by time-of-use period, pays annual surplus at the wholesale rate plus a $0.0075 per kWh bonus, and mails a check when that amount tops $100. Its credits offset only its own generation charges, not SDG&E delivery.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/blog/sdge-time-of-use-rates-2026', label: 'Check SDG&E time-of-use periods' },
      { href: '/blog/solar-installation-timeline-california', label: 'Map the installation stages and handoffs' },
    ],
    sources: [chulaVistaPermit0923, chulaVistaFees, sdgeInterconnection, sdgeActiveCcas, sdcpNem],
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
    actionIds: ['CA28', 'T2-CITYCOST'],
    intro:
      'Oceanside lets only C-10 and C-46 contractors use SolarAPP+ and issues the permit online as soon as the approval is uploaded and paid. Compare who owns each handoff and what happens when the design changes.',
    quoteQuestions: [
      'Does the contractor hold a C-10 or C-46 license? Oceanside does not accept SolarAPP+ permits from B-license holders or permit runners.',
      'Who handles revisions, inspection, SDG&E interconnection and permission to operate?',
      'Are array, battery, roof and electrical work shown as the same scope across every proposal?',
    ],
    localChecks: [
      {
        title: 'Revisions have a limit',
        body: "SolarAPP+'s $25 fee covers up to three approved revisions, each uploaded to the existing City permit under a new SolarAPP+ ID. The City says it may charge for a resubmittal, as it does for a re-inspection.",
      },
      {
        title: 'Paperwork on site',
        body: 'The City asks for the printed online inspection job card and the approved SolarAPP+ documents to be on site for the inspector.',
      },
      {
        title: 'Clean Energy Alliance on the bill',
        body: 'SDG&E lists Oceanside among the cities Clean Energy Alliance serves, while SDG&E keeps delivery and billing. At the annual true-up CEA pays surplus generation at $0.06 per kWh and sends a check once the amount reaches $100.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/battery/home-battery-cost-california', label: 'Separate storage from the array quote' },
      { href: '/blog/sdge-time-of-use-rates-2026', label: 'Check SDG&E time-of-use periods' },
    ],
    sources: [oceansidePermit0923, sdgeActiveCcas, ceaBill, ceaNem],
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
  roseville: {
    city: 'Roseville',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Roseville's electricity comes from the City's own utility, which has to pre-approve a solar system before the City permit and which buys surplus solar at a fixed rate. Both shape the value of a quote as much as its price.",
    quoteQuestions: [
      'Has Roseville Electric pre-approved the interconnection, and will the 120-day reservation still be valid when the permit is pulled?',
      "Does the design need a main panel upgrade? Roseville's SolarAPP+ route does not allow one, so the permit would take another path.",
      "Is the system within Roseville Electric's size limit, and does the savings estimate use the Solar 2.0 export rate?",
    ],
    localChecks: [
      {
        title: 'The utility approves first',
        body: "Roseville's SolarAPP+ route requires pre-approval from Roseville Electric, whose interconnection reservation lasts 120 days. After the City inspection a meter technician installs a multi-register meter, and permission to operate follows.",
      },
      {
        title: 'Who may file',
        body: 'The City accepts SolarAPP+ applications only from California contractors with a C-10, C-46 or B license and a City of Roseville business license, not from permit runners or expediters. Homes in a City flood zone do not qualify.',
      },
      {
        title: 'Exports earn a fixed rate',
        body: 'Customers interconnected since October 1, 2018 are on Roseville Solar 2.0, which pays $0.0691 per kWh for surplus energy. Ask what export rate a savings estimate assumes.',
      },
      {
        title: 'Size is capped by past use',
        body: "Roseville Electric limits a system to 100 percent of the customer's last 12 months of use, or the home's conditioned square footage multiplied by 3 kWh when there is no such history. The California Energy Commission's map also puts a small area at the city's northern edge in PG&E territory, so check the utility on your bill.",
      },
    ],
    related: [
      { href: '/blog/solar-rebates-by-california-utility', label: 'Rebates by California utility' },
      { href: '/blog/what-size-solar-system-do-i-need', label: 'Size a system from 12 months of use' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [rosevilleSolarApp, rosevilleSolar2, rosevilleInterconnection, cecTerritory0923],
  },
  'santa-rosa': {
    city: 'Santa Rosa',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Santa Rosa's own code promises a three-business-day review and a single inspection for a small rooftop system, which puts the weight on getting the application right the first time.",
    quoteQuestions: [
      "Is the design within SolarAPP+'s eligibility for a residential roof-mounted retrofit system, with or without a battery?",
      "Has the installer checked that the main panel, subpanels and wiring can carry the new load? Santa Rosa's code puts that check, and its cost, on the applicant.",
      "Does the savings estimate use Sonoma Clean Power's export credits and its spring payout rules?",
    ],
    localChecks: [
      {
        title: 'Three business days and one inspection',
        body: 'Santa Rosa City Code chapter 18-68 requires a small residential rooftop solar application to be approved or rejected within three business days, resubmittals included, and calls for only one inspection. Resubmittals and a re-inspection after a failed inspection may cost extra.',
      },
      {
        title: 'City approval is not permission to connect',
        body: "The code says the City's approval does not authorize connecting the system to the grid; that permission comes separately from the utility.",
      },
      {
        title: 'How Sonoma Clean Power pays for surplus',
        body: "Sonoma Clean Power moves Solar Billing Plan customers to PG&E's E-ELEC rate, credits exports at values that change by season, day and hour, and each spring pays surplus at the Net Surplus Compensation rate, up to $5,000 a year: by check above $200, as a bill credit at or below it.",
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [santaRosaSolar, santaRosaCode1868, scpSolarBilling],
  },
  'san-luis-obispo': {
    city: 'San Luis Obispo',
    actionIds: ['T2-CITYCOST'],
    intro:
      "San Luis Obispo publishes its solar permit fee and issues the permit online within minutes of a SolarAPP+ approval. The larger variable is how Central Coast Community Energy settles exports.",
    quoteQuestions: [
      "Will the design pass SolarAPP+ review, and does the quote include SolarAPP+'s $35 or $60 review fee along with the City's permit fee?",
      'Is battery storage in the quote? SolarAPP+ charges more to review solar plus storage than solar alone.',
      "Does the savings estimate use 3CE's hourly export credit rates and its December true-up?",
    ],
    localChecks: [
      {
        title: 'The published fee includes a surcharge',
        body: "San Luis Obispo's 2026-27 schedule lists a residential roof-mount photovoltaic system at $332.50, which includes the 3.05 percent information technology surcharge the City adds to work handled in its EnerGov system.",
      },
      {
        title: 'Issued in about a minute',
        body: 'Once SolarAPP+ approves the design, the approval is uploaded to InfoSLO and the permit issues automatically about a minute after the invoice is paid. Inspection requests received by 5 p.m. may be scheduled for the next business day.',
      },
      {
        title: 'How 3CE settles exports',
        body: '3CE, which began serving the city in January 2020, credits Solar Billing Plan exports at its own hourly Energy Export Credit rates and trues up generation every December. Residential customers owed at least $200 in Net Surplus Compensation can request a check within 45 days of the true-up statement; PG&E runs a separate true-up for delivery.',
      },
    ],
    related: [
      { href: '/solar-savings/central-valley', label: 'Central Coast and Valley bill guide' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
    ],
    sources: [sloSolar, sloFees2627, sloCce, cceSolarBilling],
  },
  'walnut-creek': {
    city: 'Walnut Creek',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Walnut Creek charges one flat, unified fee for a home solar permit, so differences between bids come from the design and the contract rather than the City. Its generation provider, MCE, adds solar credits of its own.",
    quoteQuestions: [
      "Does the permit line match the City's $280 unified permit for a single-family or duplex home, and does the quote say who files it?",
      "If a battery is included, does the plan set meet the City's separate submittal list for storage paired with solar?",
      "Does the savings estimate include MCE's export and bonus credits and PG&E's delivery charges?",
    ],
    localChecks: [
      {
        title: 'One fee covers plan check and inspection',
        body: "Walnut Creek's $280 solar permit for a single-family or duplex home is a unified permit that includes plan check and inspection of all electrical, plumbing and related work, and the City's fee schedule proposes no change for 2026 or 2027.",
      },
      {
        title: 'No automated platform is named',
        body: "The City's solar page lists submittal requirements, IB-025 for photovoltaic arrays and a separate list for batteries with solar, but does not say whether SolarAPP+ or another automated platform is used. Ask the installer which route it will file.",
      },
      {
        title: "MCE's solar credits",
        body: 'MCE, the default provider in Walnut Creek since September 2016, adds a Solar Bonus Credit of 10 percent of export credits each billing period, pays income-qualified CARE and FERA customers an extra $0.05 per kWh, offers a $10 to $20 monthly credit for enrolled batteries, and cashes out balances over $200 once a year, up to $5,000.',
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
      { href: '/blog/solar-installation-timeline-california', label: 'Map the installation stages and handoffs' },
    ],
    sources: [walnutCreekSolar, walnutCreekFees, walnutCreekMce, mceSolarBilling],
  },
  pleasanton: {
    city: 'Pleasanton',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Pleasanton's permit fee for a home system up to 10 kW sits well under the state limit, and its rules skip planning and fire review for a flush rooftop array. Bids should differ on design and contract, not paperwork.",
    quoteQuestions: [
      "Is the system 10 kW or smaller? Pleasanton's permit fee steps up above that size.",
      'Does the electrical design stay within the 120 percent bus bar rule the City inspects for, or does it need a panel upgrade or derate?',
      "Does the bill model use Ava Community Energy's export credits and PG&E's delivery charges, with their separate true-ups?",
    ],
    localChecks: [
      {
        title: 'The permit fee depends on size',
        body: "Pleasanton's January 2026 fee list charges $250, plan review included, for a residential system up to 10 kW and $450 plus $15 per kW above 15 kW for a larger one, plus a 5 percent technology fee on total permit fees.",
      },
      {
        title: 'No planning or fire review for flush arrays',
        body: "The City's photovoltaic handout says Planning review is not needed for rooftop panels mounted parallel to and less than 12 inches above the roof and not past any ridge or hip, and that Fire Department approval is not required for solar PV. The handout dates from 2017, so confirm with Building and Safety.",
      },
      {
        title: 'Inspectors check the bus bar',
        body: "Pleasanton's inspection checklist includes the rule that the main breaker and the inverter breaker together may not exceed 120 percent of the panel's bus bar rating. A design that breaks it needs a derate or a panel upgrade, which changes the scope and the price.",
      },
      {
        title: 'Ava values exports by the hour',
        body: "Ava's Solar Billing Plan prices each exported kWh by the hour it leaves the home. Customers not on CARE or FERA earn $0.025 per kWh more for exports between 3 and 8 pm, CARE and FERA customers earn $0.01 per kWh more on all exports, and balances over $100 at the April true-up are paid out.",
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/what-size-solar-system-do-i-need', label: 'Size a system from 12 months of use' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [pleasantonPermits, pleasantonFees2026, pleasantonPvHandout, avaSolarBilling, avaCommunities],
  },
  'santa-cruz': {
    city: 'Santa Cruz',
    actionIds: ['T2-CITYCOST'],
    intro:
      'The City of Santa Cruz publishes its solar permit fee, but not every property can use the automated route: open code cases, flood-zone parcels and owner-builders go through regular plan check.',
    quoteQuestions: [
      'Is the property eligible for SolarAPP+, or does a flood zone, an open code case or a voided permit send it to regular plan check?',
      "Is the system over 15 kW? The City's fee rises $24 per kW above that.",
      "Does the savings estimate use 3CE's hourly export credits and its December true-up?",
    ],
    localChecks: [
      {
        title: 'Who can use the automated route',
        body: 'Santa Cruz limits SolarAPP+ to licensed contractors installing new rooftop solar on detached one- and two-family homes, townhomes and accessory structures such as a garage or ADU. Owner-builders apply for a regular solar permit.',
      },
      {
        title: 'Parcels with open issues are excluded',
        body: 'The City keeps properties with active code compliance cases, unverified complaints, voided permits or a flood-zone location out of SolarAPP+. Check the parcel before a quote assumes the fast route.',
      },
      {
        title: 'A fee plus a technology surcharge',
        body: "The City's 2026 fee schedule lists $360 for a residential system up to 15 kW and $24 per kW above that, both marked for its 6 percent technology surcharge.",
      },
      {
        title: "3CE's December true-up",
        body: "The City of Santa Cruz was one of Central Coast Community Energy's first members when service launched in March 2018. 3CE trues up generation each December and will pay $200 or more of Net Surplus Compensation by check on request; PG&E runs a separate delivery true-up.",
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area and Central Coast bill guide' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/blog/is-my-roof-good-for-solar-california', label: 'Check the roof before solar' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [santaCruzSolarApp, santaCruzFees2026, cceMembers, cceSolarBilling],
  },
  livermore: {
    city: 'Livermore',
    actionIds: ['T2-CITYCOST'],
    intro:
      'Livermore puts a staff review between SolarAPP+ approval and the permit, and will not final a project without a smoke detector compliance form. Small steps, but each belongs to someone in the quote.',
    quoteQuestions: [
      'Does the contractor have an active City of Livermore business license? The City requires one before it takes a SolarAPP+ permit.',
      'Who prints and keeps on site the permit, approved documents, job card and Smoke Detector Compliance form the inspector needs?',
      "If the design changes after approval, who files the SolarAPP+ revision and the City's Revision Application?",
    ],
    localChecks: [
      {
        title: 'A staff review, not an instant permit',
        body: "After SolarAPP+ approves the design, the contractor applies through Livermore's Online Permitting, Permit Center staff review the submittal, and the permit and receipt arrive by email once the fee is paid.",
      },
      {
        title: 'The smoke detector form',
        body: 'Livermore says a project will not be finaled without a completed Smoke Detector Compliance form on site at inspection.',
      },
      {
        title: 'Ava pays bonuses on some exports',
        body: "Ava's Solar Billing Plan adds $0.025 per kWh for exports from 3 to 8 pm for customers not on CARE or FERA, and $0.01 per kWh on all exports for CARE and FERA households. It settles generation each April, separately from PG&E's delivery true-up.",
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/solar-installation-timeline-california', label: 'Map the installation stages and handoffs' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [livermoreSolarApp, avaSolarBilling, avaCommunities],
  },
  'thousand-oaks': {
    city: 'Thousand Oaks',
    actionIds: ['T2-CITYCOST'],
    intro:
      'Thousand Oaks keeps its fast SolarAPP+ route for roof-mounted home systems; carports and ground mounts take a standard permit. Clean Power Alliance, the generation provider, sets how exports are paid.',
    quoteQuestions: [
      'Is the design a roof-mounted system of 38.4 kW AC or less, or a carport, ground-mounted or ballasted system that needs a standard permit?',
      'Does the contractor hold a B, C-10 or C-46 license, the only classes the City accepts for SolarAPP+?',
      "Does the savings estimate use Clean Power Alliance's export credits, its bonus credit for systems installed before 2028 and its April true-up?",
    ],
    localChecks: [
      {
        title: 'Carports and ground mounts take a standard permit',
        body: 'Thousand Oaks sends ballasted, ground-mounted and carport systems to a standard solar permit instead of SolarAPP+. If a quote includes one, ask how the permit step is scheduled and priced.',
      },
      {
        title: 'SolarAPP+ fees are separate',
        body: 'The City says fees for the SolarAPP+ web service are independent of and unrelated to its own permit fees.',
      },
      {
        title: 'How Clean Power Alliance pays for exports',
        body: "Clean Power Alliance credits Solar Billing Plan exports hourly from CPUC avoided-cost prices, adds an Energy Export Bonus Credit for systems installed before 2028, trues up every April, and pays surplus at a rate 10 percent above SCE's. SCE applies the delivery charges and credits.",
      },
    ],
    related: [
      { href: '/blog/sce-time-of-use-rates-2026', label: 'Check SCE time-of-use periods' },
      { href: '/blog/solar-carport-california-guide', label: 'Solar carports and ground mounts' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [thousandOaksSolar, sceCcaList, cpaSolar],
  },
  chico: {
    city: 'Chico',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Chico charges the state-limit fee for a home solar permit, but the City does not describe an automated solar permit and the state's data lists it as having none. Plan for a regular review.",
    quoteQuestions: [
      "Is the system 15 kW or smaller? Above that, Chico's fee is $500 plus $15 per kW over 15.",
      'Does the array weigh more than 40 pounds per square foot, or go on a conventionally framed roof? Either can add plan check and fees in Chico.',
      'Is it a ground mount, or on a structure over 7 feet tall? Chico permits both separately.',
    ],
    localChecks: [
      {
        title: 'No automated permit listed',
        body: "The California Energy Commission's SB 379 data, which cities report themselves and the CEC does not certify, lists Chico as without an automated platform although its deadline was September 2023. The City takes applications digitally through eTRAKiT, so ask the installer how long review has been taking.",
      },
      {
        title: 'Ground mounts are a separate permit',
        body: "Chico's 2026/2027 fee schedule lists a ground-mount solar racking permit as a separate $876 permit, and requires a separate permit for a supporting structure over 7 feet tall.",
      },
      {
        title: 'PG&E supplies generation too',
        body: "PG&E's list of the community choice aggregators in its territory does not include Chico or Butte County, so a Chico bill normally shows PG&E for generation and delivery.",
      },
    ],
    related: [
      { href: '/solar-savings/central-valley', label: 'Central Valley bill and project guide' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/blog/solar-carport-california-guide', label: 'Solar carports and ground mounts' },
      { href: '/blog/is-my-roof-good-for-solar-california', label: 'Check the roof before solar' },
    ],
    sources: [chicoBuilding, chicoFees2627, cecSb379, pgeCcaList],
  },
  pasadena: {
    city: 'Pasadena',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Pasadena's electricity comes from the City's own utility, which has to approve a solar design before the building permit and sets its own sizing and equipment rules.",
    quoteQuestions: [
      'Has Pasadena Water and Power given its initial review approval? PWP requires it before the building permit is applied for.',
      'Does the design include the lockable AC disconnect switch PWP requires within eight feet and line of sight of the meter?',
      "Is the system sized to no more than 150 percent of the home's average annual use, as PWP requires?",
    ],
    localChecks: [
      {
        title: 'The utility reviews first',
        body: 'Pasadena Water and Power requires its initial review approval before a building permit is applied for, and says every installation needs the appropriate building permit from the City.',
      },
      {
        title: 'A disconnect switch is part of the job',
        body: 'PWP requires an AC disconnect switch with visible, lockable contacts within eight feet and in line of sight of its meter. A quote that leaves it out is not the full scope.',
      },
      {
        title: 'PWP caps system size',
        body: "PWP accepts systems between 1 kW and 1,000 kW AC, sized to produce no more than 150 percent of the customer's average annual use, and credits surplus under its Net Surplus Compensation program.",
      },
      {
        title: 'An express permit for home systems',
        body: "The City's Express Permit Portal lists a residential Solar Photovoltaic, or Solar Photovoltaic and Energy Storage System, express permit. The CEC's SB 379 data lists Pasadena's platform as custom rather than SolarAPP+.",
      },
    ],
    related: [
      { href: '/solar-savings/los-angeles-county', label: 'Los Angeles County bill guide' },
      { href: '/blog/solar-rebates-by-california-utility', label: 'Rebates by California utility' },
      { href: '/blog/what-size-solar-system-do-i-need', label: 'Size a system from 12 months of use' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [pwpSolar, pasadenaExpress, cecSb379],
  },
  'santa-clarita': {
    city: 'Santa Clarita',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Santa Clarita issues rooftop solar and battery permits instantly online and publishes a flat rooftop fee. With no community choice provider, SCE's own rates set the value side.",
    quoteQuestions: [
      "Does the design fit Santa Clarita's instant Symbium permit for rooftop PV, and is any battery on its own instant permit?",
      'If the main panel is being upgraded or changed out, is that permit (and its staff charges) in the quote?',
      "Does the savings estimate use SCE's generation and delivery rates from your own bill?",
    ],
    localChecks: [
      {
        title: 'Flat fee, plus records charge',
        body: "The City's 2026-2027 fee brochure lists a residential rooftop photovoltaic system at $450 and adds a record maintenance charge of 10 percent of all related permit fees.",
      },
      {
        title: 'Permits moved to Symbium in 2026',
        body: 'Since May 1, 2026, Santa Clarita has been replacing its older PVA permits with Symbium permits, and says existing PVA permits must be finaled by May 1, 2027. A job permitted the old way should not be left open.',
      },
      {
        title: 'SCE supplies generation',
        body: "SCE's list of community choice aggregators names Clean Power Alliance's member cities, and Santa Clarita is not among them, so a Santa Clarita bill normally shows SCE for generation and delivery.",
      },
    ],
    related: [
      { href: '/solar-savings/los-angeles-county', label: 'Los Angeles County bill guide' },
      { href: '/blog/sce-time-of-use-rates-2026', label: 'Check SCE time-of-use periods' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [santaClaritaInstant, santaClaritaFees, sceCcaList, cecSb379],
  },
  anaheim: {
    city: 'Anaheim',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Anaheim is served by its own city utility, which has kept its own net metering rules instead of moving to the state's newer tariff. That, more than the permit, is what separates an Anaheim quote from one in an SCE city.",
    quoteQuestions: [
      "Does the savings estimate use Anaheim Public Utilities' NEM 2.0 rules, which the utility describes as wholesale-based, rather than an SCE tariff?",
      "Will the permit go through the City's Solar Permit Online option for small residential rooftop systems, and who files it?",
      'Is the permit fee in the quote based on a current City figure? The fee schedule attached to the City’s solar self-certification packet is dated 2009-2010.',
    ],
    localChecks: [
      {
        title: "Anaheim's own net metering",
        body: 'Anaheim Public Utilities says it is not moving to NEM 3.0, and that its current NEM 2.0 program, for solar billing accounts set up after January 1, 2021, is a wholesale-based rate program. Its Solar Program answers questions at 714-765-4182.',
      },
      {
        title: 'A custom online permit',
        body: "The City's Online Permit Center offers a Single Family Residential Small Rooftop Permit Online, and the California Energy Commission's SB 379 data lists Anaheim's platform as custom rather than SolarAPP+ or Symbium.",
      },
    ],
    related: [
      { href: '/solar-savings/orange-county', label: 'Orange County bill guide' },
      { href: '/blog/solar-rebates-by-california-utility', label: 'Rebates by California utility' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing and net metering differ' },
    ],
    sources: [anaheimNem, cecSb379],
  },
  vallejo: {
    city: 'Vallejo',
    actionIds: ['T2-CITYCOST'],
    intro:
      'Vallejo publishes its solar permit fees, and part of the city lies outside PG&E territory. Settle which utility serves the address before comparing any bill model.',
    quoteQuestions: [
      "Which utility bills the address? The CEC's map puts part of Vallejo in the City of Pittsburg's electric territory rather than PG&E's.",
      'Is the system over 15 kW? Vallejo adds $54.28 for each kW above that.',
      "Does the savings estimate include MCE's export and bonus credits along with PG&E's delivery charges?",
    ],
    localChecks: [
      {
        title: 'Published fees',
        body: "Vallejo's 2025-2026 schedule lists $138 for residential solar plan review and $312 for a permit up to 15 kW, and says its solar fees stay within the state's $450 limit before the City's $38 permit issuance fee.",
      },
      {
        title: 'Symbium, by the state’s record',
        body: "The City takes permit applications through eTRAKiT and embeds Symbium's tool on its permit center page; the CEC's SB 379 data lists Vallejo's platform as Symbium. Ask the installer which route it will file.",
      },
      {
        title: "MCE's bonus credits",
        body: 'MCE adds 10 percent to each billing period’s export credits, pays qualifying CARE and FERA households $0.05 per kWh more, offers $10 to $20 a month for enrolled batteries, and cashes out surplus over $200 after each April-to-March year, up to $5,000.',
      },
    ],
    related: [
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [vallejoFees, vallejoPermitCenter, cecSb379, mceSolarBilling, cecTerritory0923],
  },
  'long-beach': {
    city: 'Long Beach',
    actionIds: ['T2-CITYCOST'],
    intro:
      'Long Beach publishes one all-in express permit price for a standard rooftop system, inspections included, so the permit line in a quote is easy to check.',
    quoteQuestions: [
      'Is the system flush-mounted on the roof and 38.4 kW or smaller, so it qualifies for the express permit?',
      'Is a battery included? The express fee is $447.45 with one and $386.62 without.',
      "Has the installer asked SCE for conceptual approval, the first step on the City's list?",
    ],
    localChecks: [
      {
        title: 'One fee covers the inspections',
        body: "Long Beach's IB-023 says the express permit fee includes all surcharges, filing fees and required inspections, and is collected when the permit issues. Extra fees apply only if the project needs planning, electrical or building review.",
      },
      {
        title: 'Historic districts add a review',
        body: 'A home in a historic district or on a qualified historical building also needs a Planning Permit or Certificate of Appropriateness, which brings planning review.',
      },
      {
        title: 'No fire review for houses',
        body: 'Fire review is not required for one- and two-family dwellings; the City requires it for multifamily and nonresidential buildings.',
      },
      {
        title: 'SCE on both lines of the bill',
        body: "The City's bulletin names SCE as the utility for Long Beach, and SCE's list of community choice aggregators does not include Long Beach, so SCE normally supplies generation as well as delivery.",
      },
    ],
    related: [
      { href: '/solar-savings/los-angeles-county', label: 'Los Angeles County bill guide' },
      { href: '/blog/sce-time-of-use-rates-2026', label: 'Check SCE time-of-use periods' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
    ],
    sources: [longBeachSolar, longBeachIb023, sceCcaList, cecSb379],
  },
  'santa-ana': {
    city: 'Santa Ana',
    actionIds: ['T2-CITYCOST'],
    intro:
      'Santa Ana now issues home solar permits only through SolarAPP+, and wants the owner’s signed authorization with every application.',
    quoteQuestions: [
      'Has the design been approved in SolarAPP+? Since June 1, 2026 Santa Ana does not process residential solar permits without it.',
      "Does the application include your signed letter authorizing the installation, which the City requires?",
      "Does the savings estimate use SCE's generation and delivery rates from your own bill?",
    ],
    localChecks: [
      {
        title: 'SolarAPP+ only, since June 2026',
        body: 'From June 1, 2026, Santa Ana issues residential solar permits only after SolarAPP+ approval, and says projects without it will not be processed.',
      },
      {
        title: 'Two fees, one of them unstated',
        body: 'The City says SolarAPP+ collects a one-time $35.00 fee and that its own application fee is separate and the same as for a regular solar permit, but its solar pages do not state that amount.',
      },
      {
        title: 'Owner authorization is required',
        body: "The City's streamlined solar page requires a homeowner letter of authorization for the installation with every solar application.",
      },
      {
        title: 'SCE supplies generation',
        body: "Santa Ana is not on SCE's list of community choice aggregator cities, and Orange County Power Authority's member list names Buena Park, Fullerton, Irvine and Fountain Valley, so SCE normally supplies generation as well as delivery.",
      },
    ],
    related: [
      { href: '/solar-savings/orange-county', label: 'Orange County bill guide' },
      { href: '/blog/sce-time-of-use-rates-2026', label: 'Check SCE time-of-use periods' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [santaAnaJune2026, santaAnaFees, santaAnaStreamlined, sceCcaList, ocpaMembers],
  },
  'el-dorado-hills': {
    city: 'El Dorado Hills',
    actionIds: ['T2-CITYCOST'],
    intro:
      'El Dorado Hills is unincorporated, so El Dorado County, not a city, permits its solar, and the County keeps some parcels off its instant permit.',
    quoteQuestions: [
      "Is the parcel in an airport review zone or a flood zone, or flagged for eligibility review? The County's instant permit excludes all three.",
      "Does the quote include the Symbium service charge and the County's permit fee, neither of which the County's page states?",
      "Does the savings estimate use Pioneer Community Energy's export credit and its spring cash-out?",
    ],
    localChecks: [
      {
        title: 'A County permit in one to three days',
        body: 'El Dorado County issues residential solar permits through Symbium and says processing takes about one to three business days. Excluded parcels submit in person at one of its two offices.',
      },
      {
        title: 'Pioneer pays a little more for exports',
        body: 'Pioneer Community Energy says it pays half a cent per kWh more than PG&E for over-production, bills monthly with credits rolling to the annual true-up, cashes out net surplus in the March or April billing cycle, and mails a check at $50 or more.',
      },
      {
        title: 'Most, not all, of the county',
        body: "Pioneer says it serves most of unincorporated El Dorado County, and the CEC's service layers put nearly all of El Dorado Hills inside it. Check the generation line on your own bill.",
      },
    ],
    related: [
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/blog/is-my-roof-good-for-solar-california', label: 'Check the roof before solar' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [edcSolar, pioneerAbout, pioneerSolar, cecCcaLayer],
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
