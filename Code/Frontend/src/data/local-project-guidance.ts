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
    'Self-reported platform status per jurisdiction, data last updated August 3, 2026; the CEC says it does not certify compliance. Rows used: Chico (deadline Sept 2023) and Arcata (deadline Sept 2024), both without a platform; Pasadena, Anaheim, San Jose and Tracy (custom platform); Santa Clarita, Vallejo, Corona and Ontario (Symbium); Escondido, Monterey, Modesto, Mountain View and Huntington Beach (SolarAPP+).',
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


const sacramentoSolarApp: LocalGuidanceSource = {
  label: 'City of Sacramento — Residential SolarApp+ in support of SB-379',
  url: 'https://www.cityofsacramento.gov/content/dam/portal/it/digitalstrategy/Residential%20SolarApp.pdf',
  verifiedAt: verified20260923,
  scope: 'Completed fiscal year 2023/2024: SolarAPP+ integrated with the City’s Accela Citizen Access portal; automated and immediate permitting when SolarAPP+ and City conditions are met.',
};

const sacramentoSolarFee: LocalGuidanceSource = {
  label: 'City of Sacramento — Fees and Charges: Streamlined Permit for Residential & Commercial Solar PV (effective July 19, 2025)',
  url: 'https://services5.arcgis.com/54falWtcpty3V47Z/arcgis/rest/services/Fees_And_Charges/FeatureServer/1/11/attachments/10',
  verifiedAt: verified20260923,
  scope:
    'Residential PV up to 15 kW $450, plus $15 per kW above 15 kW (Resolution 2024-0153); an alternative to value-based permit and plan review fees covering building plan review, inspection and intake.',
};

const smudSsr: LocalGuidanceSource = {
  label: 'SMUD — Solar and Storage Rate',
  url: 'https://www.smud.org/Rate-Information/Solar-and-Storage-Rate',
  verifiedAt: verified20260923,
  scope:
    'For customers approved to install solar or storage on or after March 1, 2022; exports bought at 9.6 cents per kWh regardless of time or season, effective June 1, 2026; credits carry over to later bills; a one-time fee to connect new solar systems (amount not stated there).',
};

const smudSsrNews: LocalGuidanceSource = {
  label: 'SMUD — SMUD boosts Solar and Storage Compensation rate (April 27, 2026)',
  url: 'https://www.smud.org/Corporate/About-us/News-and-Media/2026/2026/SMUD-boosts-Solar-and-Storage-Compensation-rate-for-rooftop-solar-customers',
  verifiedAt: verified20260923,
  scope: 'Compensation rate raised from 7.4 to 9.6 cents per kWh, effective June 1, 2026.',
};

const mantecaInstant: LocalGuidanceSource = {
  label: 'City of Manteca — Instant Residential Solar & Energy Storage System Permits',
  url: 'https://www.manteca.gov/230/Instant-Residential-Solar-Energy-Storage',
  verifiedAt: verified20260923,
  scope: 'Symbium checks code compliance and issues rooftop solar and battery permits in real time; fees paid online (not stated); inspections through Citizen Access.',
};

const mantecaFees: LocalGuidanceSource = {
  label: 'Manteca Municipal Code — Title FS: Fee Schedules',
  url: 'https://ecode360.com/44093610',
  verifiedAt: verified20260923,
  scope: 'Residential building permits: solar PV rooftop $378; energy storage system $304; electrical panels $119; plan retention/technology fee 5% of permit fee.',
};

const midServiceArea: LocalGuidanceSource = {
  label: 'Modesto Irrigation District — Who We Are',
  url: 'https://www.mid.org/about-us/who-we-are/',
  verifiedAt: verified20260923,
  scope: 'MID’s electric service area: greater Modesto north of the Tuolumne River, Waterford, Salida, Mountain House and parts of Ripon, Escalon, Oakdale and Riverbank. Manteca is not named.',
};

const montereyBuilding: LocalGuidanceSource = {
  label: 'City of Monterey — Building and Safety Services',
  url: 'http://monterey.gov/your_city_hall/departments/community_development/building_and_safety_services/',
  verifiedAt: verified20260923,
  scope: 'From January 7, 2026 permits including solar PV can be filed at mymontereyportal.org, which identifies required reviews and calculates fees; a Solar Checklist is required.',
};

const montereyFees2627: LocalGuidanceSource = {
  label: 'City of Monterey — Master Fee Schedule FY 2026/2027 (effective July 1, 2026)',
  url: 'https://monterey.gov/Document-Center/Departments/Finance/Schedule-of-Fees-Fines/Master-Fee-Schedule.pdf',
  verifiedAt: verified20260923,
  scope:
    'Residential Solar/PV Installation Permit (under 10 kW) $450, fee set by the State; solar arrays exempt from architectural review, historic preservation, use permit and variance fees; 2.9% merchant service fee on card payments.',
};

const montereyChecklist: LocalGuidanceSource = {
  label: 'City of Monterey — Solar PV Expedited Submittal Checklist (rev. 12/30/2024)',
  url: 'https://monterey.gov/Document-Center/Departments/Community-Development/Building-Safety/Building-Forms/Solar-Checklist.pdf?t=202509301228390',
  verifiedAt: verified20260923,
  scope:
    'For residential PV under 10 kW; smoke and carbon monoxide detector affidavit; statement or engineering that roof framing carries the load (ballasted systems need full engineering); equipment inside a garage may need protective bollards; separate checklist for ESS.',
};

const svceSolarBilling: LocalGuidanceSource = {
  label: 'Silicon Valley Clean Energy — Solar Billing Plan',
  url: 'https://www.svcleanenergy.org/solar-billing-plan/',
  verifiedAt: verified20260923,
  scope:
    'Export credits reflect the grid value at the time of export; GreenPrime customers get an extra $0.017 per kWh on monthly excess; SVCE generation settled monthly, PG&E delivery at PG&E’s annual true-up; cashout of $100 or more by check up to $5,000, smaller as bill credit; SVCE pays PG&E’s NSC rate on cumulative kWh.',
};

const sunnyvaleSolarApp: LocalGuidanceSource = {
  label: 'City of Sunnyvale — SolarApp+ for Solar Installers',
  url: 'https://www.sunnyvale.ca.gov/business-and-development/planning-and-building/solarapp-for-solar-installers',
  verifiedAt: verified20260923,
  scope: 'SolarAPP+ $25 processing fee with three free revisions; Sunnyvale business license required; Photovoltaic (SolarAPP+) permit through E-OneStop; permit card printed for inspections.',
};

const sunnyvaleFees2627: LocalGuidanceSource = {
  label: 'City of Sunnyvale — Building Permit Fees FY 26/27 (effective August 18, 2026)',
  url: 'https://www.sunnyvale.ca.gov/home/showpublisheddocument/1626/639228338481470000',
  verifiedAt: verified20260923,
  scope: 'Photovoltaic/solar systems, single-family homes or duplexes: $389.00; permit issuance $42.50; technology surcharge 5% of permit fee.',
};

const visaliaSolarApp: LocalGuidanceSource = {
  label: 'City of Visalia — SolarApp',
  url: 'https://www.visalia.gov/269/SolarApp',
  verifiedAt: verified20260923,
  scope:
    'Licensed contractors use SolarAPP+, then a Residential Solar Permit with SolarApp in the City’s ACA portal; fees paid online by Visa or MasterCard only; permit auto-issued within seconds; single-line diagram and load calculations required at inspection.',
};


const modestoFees2627: LocalGuidanceSource = {
  label: 'City of Modesto — Building Safety Fees (effective July 1, 2026 to June 30, 2027)',
  url: 'https://www.modestogov.com/3308/Building-Safety-Fees',
  verifiedAt: verified20260923,
  scope: 'Electrical Photovoltaic - Residential $333.00 per permit, due at time of application; Electrical Photovoltaic - Commercial $1,098.00 deposit.',
};

const midSolar: LocalGuidanceSource = {
  label: 'Modesto Irrigation District — Solar',
  url: 'https://www.mid.org/power/solar/',
  verifiedAt: verified20260923,
  scope:
    'MID currently offers only NEM 2.0; energy pushed back to MID’s grid is credited at 7.6 cents per kWh as a negative amount on the monthly bill; system size capped at 115% of the meter’s annual demonstrated load; interconnection fee $900 under 100 kW AC per meter ($1,800 at or above); initial paperwork review 1-3 weeks; signed-off City/County permit sent to pv@mid.org; MID interconnection inspection normally within 12 working days.',
};

const coronaExpedited: LocalGuidanceSource = {
  label: 'City of Corona — Building Division, Expedited Permits',
  url: 'https://www.coronaca.gov/departments/building-division/expedited-permits',
  verifiedAt: verified20260923,
  scope:
    'Expedited solar packages (application form, eligibility checklist, standard plan, structural criteria form, roof plan and spec sheets, PDF printed at 11 x 17 maximum) submitted in eTRAKiT; plan check processing starts only after plan check fees are paid; Symbium solar permits: verify the address is within City of Corona limits, then Symbium, then eTRAKiT. No dollar figure stated.',
};

const coronaElectric: LocalGuidanceSource = {
  label: 'City of Corona Utilities Department — Electric Service',
  url: 'https://www.coronaca.gov/departments/utilities/customer-care/services/electric-service',
  verifiedAt: verified20260923,
  scope:
    'Corona’s electric utility was established April 4, 2001 (Resolution 2001-25) and provides fully bundled “Greenfield” service to residents and businesses within the City’s electric service area; new developments there become customers if capacity is available; a City electric customer does not receive an electric bill from Southern California Edison.',
};

const tracyPermit: LocalGuidanceSource = {
  label: 'City of Tracy — Permit Process and Fees',
  url: 'https://www.cityoftracy.org/Departments/Community-and-Economic-Development/Building-Safety/Permit-Process-and-Fees',
  verifiedAt: verified20260923,
  scope:
    'Photovoltaic applications emailed to photovoltaic@cityoftracy.org with plans; an online application submittal process is also offered; plan check fee paid before review, balance at issuance, through eTRAKiT or in person; owner-builders file a Property Owner Disclosure Form; 2025 California codes apply to submittals from January 1, 2026.',
};

const tracyFees2627: LocalGuidanceSource = {
  label: 'City of Tracy — Citywide Master Fee Schedule FY 2026/27 (Resolution 2026-119, adopted May 19, 2026)',
  url: 'https://www.cityoftracy.org/files/assets/city/v/3/finance/documents/budget-amp-financial-documents/master-fee-schedule/approved-fy2026-2027-citywide-master-fee-schedule.pdf',
  verifiedAt: verified20260923,
  scope:
    'Fee 26, Solar (PV) Systems (State-mandated fees): residential up to 15 kW $450 flat, $15 per kW above 15 kW; commercial up to 50 kW $1,000; fees set by the State and not subject to the inflationary adjustment. Community and Economic Development fees took effect July 17, 2026.',
};

const sanJoseSolar: LocalGuidanceSource = {
  label: 'City of San José — Solar & Storage Battery Projects',
  url: 'https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/solar-storage-battery-projects',
  verifiedAt: verified20260923,
  scope:
    'Online permits at SJPermits.org for rooftop PV on single-family, duplex or townhouse property meeting weight, point-load, 18-inch height and no-ballast limits; batteries need a City-approved anchorage detail or Master file and an anchorage inspection; the inspector reviews the electrical plan on site; other projects use Standard Plan Review.',
};

const sanJoseFees2627: LocalGuidanceSource = {
  label: 'City of San José — Building and Structure Permits Fee Schedule, FY 2026-27 (effective August 10, 2026)',
  url: 'https://www.sanjoseca.gov/home/showpublisheddocument/26047/639219591833200000',
  verifiedAt: verified20260923,
  scope:
    'Electrical permits: greater of $315 per hour of required inspection time or the itemized schedule, in addition to permit issuance fees ($211 per hour or listed amount); Photovoltaic System (Single Family) allocated a 60-minute minimum and 50 minutes per unit; online permits pay at least 50% of the specified processing fee.',
};

const ontarioBuilding: LocalGuidanceSource = {
  label: 'City of Ontario — Building Department',
  url: 'https://www.ontarioca.gov/government/community-development/building',
  verifiedAt: verified20260923,
  scope:
    'From August 4, 2025, contractors and homeowners can apply for residential solar and energy storage permits through Symbium’s Real Time Permitting platform. The City’s Apply for Residential Reroof and Solar Permits page returned a server error when checked.',
};

const ontarioFees: LocalGuidanceSource = {
  label: 'City of Ontario — Building Department Fees',
  url: 'https://www.ontarioca.gov/government/community-development/building/building-department-fees',
  verifiedAt: verified20260923,
  scope:
    'Estimates only; exact amounts from permit technicians at 909-395-2023. Plan check 80% of permit fees; minimum permit fee $47.50; Table B electrical permit issuance $41.00; no solar-specific line.',
};

const mountainViewSolar: LocalGuidanceSource = {
  label: 'City of Mountain View — Solar Permits',
  url: 'https://developmentpermits.mountainview.gov/about-permits/apply-for-permit/building-permits/solar-permits',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ for roof-mounted or building-integrated PV on single-family homes, with or without energy storage or a service panel upgrade; permit issued automatically and still a City building permit; site inspection scheduled by the contractor at least one business day after approval; all other solar through ePermitsMV with plans and fee paid before issuance. No fee amount stated.',
};

const mountainViewFees: LocalGuidanceSource = {
  label: 'City of Mountain View — Building Permit Fees',
  url: 'https://developmentpermits.mountainview.gov/about-permits/fees/building-fees',
  verifiedAt: verified20260923,
  scope: 'Lists “Solar Permits (Photovoltaic)” with no amount, pointing to the Solar Permits page.',
};

const hbSolarApp: LocalGuidanceSource = {
  label: 'City of Huntington Beach — SolarAPP+',
  url: 'https://www.huntingtonbeachca.gov/departments/community_development/building___inspection/solar_app.php',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ processing fee currently $35; eligible projects up to a 400A main service, 225A disconnects and busbars, and 38.4 kW; separate IREC training for solar-plus-storage; homeowners cannot use it unless appropriately licensed; Residential Photovoltaic System record, uploads, fee payment and inspection requests in the HB ACA portal.',
};

const ocpaHuntingtonBeach: LocalGuidanceSource = {
  label: 'Orange County Power Authority — Huntington Beach customers return to SCE',
  url: 'https://www.ocpower.org/huntington-beach-2/',
  verifiedAt: verified20260923,
  scope:
    'City Council voted in May 2023 to leave OCPA; NEM (solar) customers moved to SCE bundled service from April 2024, all others in June 2024; NEM type (1.0, 2.0 or SBP) unchanged by the return; OCPA NEM accounts trued up as of the April 2024 meter read.',
};

const arcataFees2627: LocalGuidanceSource = {
  label: 'City of Arcata — Master Fee Schedule FY 2026-27 (effective September 21, 2026)',
  url: 'https://www.cityofarcata.org/DocumentCenter/View/16642/2027-Master-Fee-Schedule-Updated-8-19-2026',
  verifiedAt: verified20260923,
  scope:
    'No solar-specific line. Building permits by valuation; minimum permit fee $159.00; plan review 65% of the building permit fee, collected at application; 4% each for permit issuance, database management/technology, waste diversion and the General Plan fee; card fees passed through.',
};

const arcataPortal: LocalGuidanceSource = {
  label: 'City of Arcata — online permit portal, Building permits (PV/EV/Battery Backup Permit)',
  url: 'https://arcataca.viewpointcloud.com/categories/1089',
  verifiedAt: verified20260923,
  scope: 'The PV/EV/Battery Backup Permit can be applied for at any time; approval is limited to City business hours. Inspections are requested by phone at 707-822-5956 for related permit types.',
};

const arcataCce: LocalGuidanceSource = {
  label: 'City of Arcata — Community Choice Energy Program',
  url: 'https://www.cityofarcata.org/739/Community-Choice-Energy-Program',
  verifiedAt: verified20260923,
  scope: 'Arcata joined Redwood Coast Energy Authority’s community choice energy program in May 2017; the base program is over 40% renewable, with a 100% renewable REpower+ opt-up.',
};

const rceaAbout: LocalGuidanceSource = {
  label: 'Redwood Coast Energy Authority — About Community Choice',
  url: 'https://redwoodenergy.org/community-choice-energy/about-community-choice/',
  verifiedAt: verified20260923,
  scope: 'Administers Humboldt County’s Community Choice Energy program; says 90% of Humboldt County residents receive electricity from RCEA.',
};

const rceaSolar: LocalGuidanceSource = {
  label: 'Redwood Coast Energy Authority — Solar rates',
  url: 'https://redwoodenergy.org/rates-billing/plans-rates/solar/',
  verifiedAt: verified20260923,
  scope:
    'Extra $0.01 per kWh for net generators; RCEA generation billed monthly with no RCEA true-up, PG&E delivery trued up annually; automatic cash-out check each May for credit balances of $100 or more, capped at $5,000; PTO after April 14, 2023 places customers on the Solar Billing Plan.',
};

// -----------------------------------------------------------------------------
// Tier 3 city-cost wave, 2026-09-23. Fetched that day; each scope line states
// exactly what the entry relies on the source for.
// -----------------------------------------------------------------------------
const mceAbout: LocalGuidanceSource = {
  label: 'MCE — About Us (member communities)',
  url: 'https://www.mcecleanenergy.org/about-us/',
  verifiedAt: verified20260923,
  scope:
    'MCE serves 38 member communities in Contra Costa, Marin, Napa and Solano counties; the communities named include Concord, Richmond, San Ramon and Napa. Vacaville is not among them.',
};

const cecSb379T3: LocalGuidanceSource = {
  label: 'California Energy Commission — Residential Solar Permitting Program data (SB 379)',
  url: 'https://www.energy.ca.gov/media/9247',
  verifiedAt: verified20260923,
  scope:
    'Self-reported platform status per jurisdiction, data last updated August 3, 2026; the CEC says it does not certify compliance. Rows used for the Tier 3 cities: Santa Clara, Clovis, Berkeley, Concord, Richmond, San Clemente, Encinitas, San Marcos, Lakewood, Elk Grove, Mission Viejo and Victorville (SolarAPP+).',
};

const concordSolarPv: LocalGuidanceSource = {
  label: 'City of Concord — Solar PV Projects',
  url: 'https://www.cityofconcord.org/718/Solar-PV-Projects',
  verifiedAt: verified20260923,
  scope:
    'Residential rooftop PV applications go through the Permit Portal. Three design routes are accepted: SolarAPP+ (permit type "Solar PV (Solar APP)"), design-professional drawings, or the City\'s standardized central-inverter and micro-inverter plans (both "Solar PV").',
};

const concordFees2026: LocalGuidanceSource = {
  label: 'City of Concord — Building Division fee schedule (Res. No. 26.6042.1, last adopted April 28, 2026)',
  url: 'https://www.cityofconcord.org/DocumentCenter/View/2580/Building-Permit-Fees-Schedule-PDF',
  verifiedAt: verified20260923,
  scope:
    'Section 6: residential SolarAPP (38.4 kW maximum) $70 administrative plus $380 inspection, plus $15 per kW above 15 kW; residential with drawing plan review $70 plus $115 plan review and $265 inspection, plus $5 and $10 per kW above 15 kW; main service panel upgrade inspection $192; administrative, technology and General Plan fees do not apply to solar permits.',
};

const richmondSolarApp: LocalGuidanceSource = {
  label: 'City of Richmond — SolarAPP+ For Solar Installers',
  url: 'https://www.richmondca.gov/4174/SolarAPP-For-Solar-Installers',
  verifiedAt: verified20260923,
  scope:
    'Instant permit once the CSLB license and Richmond business tax certificate are current and the SolarAPP+ approval and signed permit application are uploaded under set names; homes on the Richmond Historic Register need a Planning Division certificate of appropriateness first; SolarAPP+ charges its own fee.',
};

const richmondMfs2627: LocalGuidanceSource = {
  label: 'City of Richmond — Master Fee Schedule FY 2026-27',
  url: 'https://www.ci.richmond.ca.us/DocumentCenter/View/80176',
  verifiedAt: verified20260923,
  scope: 'Community Development, building permits: Solar Structure - Residential System $450.00. The City lists this schedule as effective July 23, 2026.',
};

const richmondResidentialSolar: LocalGuidanceSource = {
  label: 'City of Richmond — Residential Solar Systems',
  url: 'https://www.ci.richmond.ca.us/2771/Residential-Solar-Systems',
  verifiedAt: verified20260923,
  scope:
    'Publishes a 2019 solar permitting guidebook, an expedited eligibility checklist, a plan submittal checklist and standard plans for central/string-inverter and micro-inverter systems.',
};

const berkeleySolar: LocalGuidanceSource = {
  label: 'City of Berkeley — Solar Permits',
  url: 'https://berkeleyca.gov/construction-development/permits-design-parameters/permit-types/solar-permits',
  verifiedAt: verified20260923,
  scope:
    'Three routes: SolarAPP+ real-time permits for rooftop PV with or without storage on a single-family home or duplex; a streamlined permit for systems of 10 kW AC or less that pass the eligibility checklist; the standard process, reviewed within one working day.',
};

const berkeleyFees2025: LocalGuidanceSource = {
  label: 'City of Berkeley — Planning and Development Fee Schedule, effective July 1, 2025',
  url: 'https://berkeleyca.gov/sites/default/files/2026-04/City%20of%20Berkeley%20Planning%20and%20Development%20Fee%20Schedule%20July%202025.pdf',
  verifiedAt: verified20260923,
  scope:
    'Residential solar via SolarApp+ $100 per system; residential 15 kW or less $200, over 15 kW $250 plus $15 per kW above 15 kW, plan check included; residential energy storage up to 50 kW aggregate $150; technology enhancement fee 5% of building and electrical permit fees.',
};

const avaSolarBilling0923: LocalGuidanceSource = {
  label: 'Ava Community Energy — Solar Billing Plan',
  url: 'https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/',
  verifiedAt: verified20260923,
  scope:
    'Energy Export Bonus Credit for new voluntary residential installs, locked for nine years: $0.009 per kWh for a 2026 interconnection ($0.036 income-qualified), and PG&E pays it too; Ava adds $0.025 per kWh for 3 to 8 pm exports (non-CARE/FERA) or $0.01 per kWh (CARE/FERA); April true-up, balances over $100 paid.',
};

const santaClaraSolarApp: LocalGuidanceSource = {
  label: 'City of Santa Clara — SolarAPP+',
  url: 'https://www.santaclaraca.gov/our-city/departments-a-f/community-development/building-division/solarapp',
  verifiedAt: verified20260923,
  scope:
    'Licensed contractors only; energy storage limited to one battery of 20 kWh or less; the Silicon Valley Power interconnection agreement pre-approval letter is a required document; ineligible projects go through the Permitting Online Portal (POP); the City inspects the installation.',
};

const santaClaraFees2627: LocalGuidanceSource = {
  label: 'City of Santa Clara — FY 2026/27 Municipal Fee Schedule (adopted April 21, 2026)',
  url: 'https://www.santaclaraca.gov/home/showpublisheddocument/86787/639046974163330000',
  verifiedAt: verified20260923,
  scope:
    'Building: Photovoltaic - Residential, $450 for 15 kW or less plus $15 per kW above (Res. 21-8981, citing Gov. Code 66015). Fire / Construction Permits: Solar Photovoltaic Power Systems - Residential, $463 (Res. 26-9552). Technology fee of 3.37% marked as applying to both.',
};

const svpRatesNm: LocalGuidanceSource = {
  label: 'Silicon Valley Power — Rates and Fees',
  url: 'https://www.siliconvalleypower.com/residents/rates-and-fees',
  verifiedAt: verified20260923,
  scope:
    'Schedule D-1 for residential service; SVP lists its average residential rate at $0.182 per kWh effective January 1, 2026. Rate Schedule NM (NM1.0) offers net metering under Public Utilities Code 2827; SVP says it has not reached the 5% threshold and that any successor tariff the City Council adopts may be priced differently from NEM 2.0 or 3.0.',
};

const sanClementePermits: LocalGuidanceSource = {
  label: 'City of San Clemente — Permits (Solar/Photovoltaic Permits)',
  url: 'https://www.sanclemente.gov/258/Permits',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ for permitted main-dwelling rooftop systems, no ballasted systems, licensed contractors registered with SolarAPP+; $25 SolarAPP+ processing fee; approval uploaded to eTRAKiT; permit runners may not request SolarAPP+ permits; non-SolarAPP+ applications emailed as PDFs.',
};

const sanClementeFees: LocalGuidanceSource = {
  label: 'City of San Clemente — Solar Permit Fees (undated)',
  url: 'https://www.sanclemente.gov/DocumentCenter/View/660',
  verifiedAt: verified20260923,
  scope: 'Residential PV $400 up to 15 kW plus $15 per kW above 15 kW; commercial PV $950 up to 50 kW with per-kW steps above. No date or resolution printed.',
};

const sanClementeBulletin: LocalGuidanceSource = {
  label: 'City of San Clemente — Submittal Requirements Bulletin, Solar PV 10 kW or Less (undated)',
  url: 'https://www.sanclemente.gov/DocumentCenter/View/666/SC-Solar-PV-Step-1-Submittal-Requirements-PDF',
  verifiedAt: verified20260923,
  scope:
    'For one- and two-family dwellings at 10 kW or less: plan check fee 25% of the electrical permit fee, $450 described as typical; Fire Department approval not required at this size; inspections by phone or eTRAKiT, typically next business day.',
};

const clovisBuilding: LocalGuidanceSource = {
  label: 'City of Clovis — Building Division (Solar Information)',
  url: 'https://www.clovisca.gov/services/planning_development/building/index.php',
  verifiedAt: verified20260923,
  scope:
    'Since September 30, 2023: in-person plan submittal, online plan submittal through CSS, or SolarAPP (SB 379) through CSS, the last for contractors only; says residential roof- and ground-mounted PV permits have their own fee structure without stating it.',
};

const clovisEligibility: LocalGuidanceSource = {
  label: 'City of Clovis — SolarAPP+ Eligibility List',
  url: 'https://www.clovisca.gov/documents/Services/Planning%20Development/Building/Photovoltaic-System-Eligibility-List.pdf',
  verifiedAt: verified20260923,
  scope:
    'Residential roof-mounted PV up to 38.4 kWdc; lithium-ion storage only, C-10 license to install it; existing service only, with no service upgrade or like-for-like panel change; main service 400A or less; no existing PV or storage on the home; not on wood shake or wood shingle roofs.',
};

const clovisSubmittal: LocalGuidanceSource = {
  label: 'City of Clovis — Residential Roof-Mounted Photovoltaic Submittal Requirements (Rev. 05-24-2024)',
  url: 'https://www.clovisca.gov/documents/Services/Planning%20Development/Building/Photovoltaic%20Minimum%20Submittal%20Requirements%20for%20Roof%20Mounted%20Systems%202025.pdf',
  verifiedAt: verified20260923,
  scope: 'Roof plans must show two access pathways at least 36 inches wide, one of them from the street side of the house, in front of the fence.',
};

const encinitasPv: LocalGuidanceSource = {
  label: 'City of Encinitas — Solar Photovoltaic Permit Application',
  url: 'https://www.encinitasca.gov/government/departments/applications-and-information/solar-photovoltaic-permit-application',
  verifiedAt: verified20260923,
  scope:
    'Required documents are submitted through the Customer Self Service (CSS) portal, registration required; standard plans for central/string-inverter and micro-inverter/ACM systems up to 10 kW; links the fee-waiver flyer. No fee amount and no mention of SolarAPP+.',
};

const encinitasWaiver: LocalGuidanceSource = {
  label: 'City of Encinitas — Energy Efficiency Permit Fee Waiver flyer (undated)',
  url: 'https://www.encinitasca.gov/home/showpublisheddocument/5146/638065976521930000',
  verifiedAt: verified20260923,
  scope:
    'The City and EsGil Corporation waive permitting fees for basic home solar PV installations and reduce them by an equivalent amount for larger and more complex ones; contact Development Services at (760) 633-2710.',
};

const encinitasSmallSolar: LocalGuidanceSource = {
  label: 'City of Encinitas — Small Solar Energy Systems',
  url: 'https://www.encinitasca.gov/government/departments/development-services/land-development-building/building/small-solar-energy-systems',
  verifiedAt: verified20260923,
  scope: 'Ordinance 2015-13 (August 19, 2015) added Municipal Code Chapter 23.13, an expedited process for small residential rooftop solar systems (no larger than 10 kW for PV) under AB 2188.',
};

const sanMarcosSolar: LocalGuidanceSource = {
  label: 'City of San Marcos — Solar Permits',
  url: 'https://www.sanmarcosca.gov/Business-Services/Building-Division/Solar-Permits',
  verifiedAt: verified20260923,
  scope:
    'Homeowners: City standard plans and the "Roof Mounted Solar PV Expedited" option, estimated 1-3 business days. Contractors: SolarAPP+, a City business license and a permit declaration form, required before an inspection can be scheduled. Full plan review estimated 5-10 business days.',
};

const sanMarcosFees2026: LocalGuidanceSource = {
  label: 'City of San Marcos — Development Fees, effective September 1, 2026',
  url: 'https://www.sanmarcosca.gov/files/assets/city/v/2/development-svs/fees/development-fees-schedule-september-2026.pdf',
  verifiedAt: verified20260923,
  scope: 'Residential Solar System on Roof: plan check $57, permit $67. Carport w/ Solar: plan check $980, permit $454. Energy storage system (ESS): $52.',
};

const lakewoodSolar: LocalGuidanceSource = {
  label: 'City of Lakewood — Solar Permitting for Homes',
  url: 'https://www.lakewoodca.gov/Development-Services/Building/Solar-Permitting-for-Homes',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ for eligible rooftop solar and storage; SolarAPP+ fee covers up to three revisions; remaining fees paid when prompted; ineligible systems follow the submittal checklist through the Online Permit Center; inspections by phone (562-866-9771 ext. 2350) or email.',
};

const lakewoodPermits: LocalGuidanceSource = {
  label: 'City of Lakewood — Building Permits (permit fee schedules)',
  url: 'https://www.lakewoodca.gov/Development-Services/Building/Building-Permits',
  verifiedAt: verified20260923,
  scope:
    'Building and Safety fees follow the Los Angeles County fee schedules plus an 18% overhead charge (Resolutions 2010-22 and 2012-42); fees rose 3% on July 1, 2025. The linked County electrical fee schedule returned "Page Not Found" when checked.',
};

const elkGroveBuilding: LocalGuidanceSource = {
  label: 'City of Elk Grove — Building Safety, Inspection and Permits',
  url: 'https://www.elkgrovecity.org/departments-and-divisions/building-safety-inspection-and-permits',
  verifiedAt: verified20260923,
  scope: 'Electronic submittals required for permit applications; lists SMUD\'s solar photovoltaic line (916-732-6420) among outside agencies. No solar fee or solar route described.',
};

const smudSsr0923: LocalGuidanceSource = {
  label: 'SMUD — Solar and Storage Rate',
  url: 'https://www.smud.org/Rate-Information/Solar-and-Storage-Rate',
  verifiedAt: verified20260923,
  scope:
    'For customers approved to install solar or storage on or after March 1, 2022; residential customers stay on the Time-of-Day (5-8 p.m.) rate; exports paid 9.6 cents per kWh regardless of time or season from June 1, 2026; credits carry over; one-time fee to connect a new system (amount not stated).',
};

const missionViejoBuilding: LocalGuidanceSource = {
  label: 'City of Mission Viejo — Building Services',
  url: 'https://cityofmissionviejo.org/departments/community-development/building-services',
  verifiedAt: verified20260923,
  scope:
    'All permits and inspections submitted and scheduled online in Client Self Service; every contact on a permit needs an account; next-business-day inspections when requested by 4 p.m.; building services provided under contract with Charles Abbott Associates.',
};

const missionViejoFees2023: LocalGuidanceSource = {
  label: 'City of Mission Viejo — Master Fee Schedule, Building Fees, effective April 1, 2023',
  url: 'https://www.missionviejo.gov/sites/default/files/building-fee-schedule-4-1-23.pdf',
  verifiedAt: verified20260923,
  scope: 'Fee 14a: residential solar systems up to and including 15 kW, $450 each; 14b: $15 per kW above 15 kW (AB 1414).',
};

const victorvilleSolarApp: LocalGuidanceSource = {
  label: 'City of Victorville — SolarApp+ Automated Solar Plan Reviews',
  url: 'https://www.victorvilleca.gov/Government/City-Departments/Building/SolarApp-Automated-Solar-Plan-Reviews',
  verifiedAt: verified20260923,
  scope:
    'SolarAPP+ processing fee plus City permit fees; permit number emailed; inspections in Citizen Self Service until midnight before, or by phone with a live person by the prior business day; no voicemail or email requests.',
};

const victorvilleFees2026: LocalGuidanceSource = {
  label: 'City of Victorville — Stand Alone Permits Fee Calculation Chart (updated January 8, 2026)',
  url: 'https://www.victorvilleca.gov/files/assets/city/v/1/building/documents/fees/stand_alone_fees_2026.pdf',
  verifiedAt: verified20260923,
  scope: 'Photovoltaic System (Residential up to 15kw) $372.00; Photovoltaic System (Commercial up to 50kw) $1,000.00.',
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
  sacramento: {
    city: 'Sacramento',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Sacramento is SMUD territory, and SMUD sets its own price for the solar power you export. That rate, not a PG&E tariff, is what a Sacramento savings estimate should use.",
    quoteQuestions: [
      "Is the system 15 kW or smaller? The City's streamlined solar permit is $450 up to that size, plus $15 per kW above it.",
      "Does the savings estimate use SMUD's Solar and Storage Rate, which has paid 9.6 cents per kWh for exported energy since June 1, 2026?",
      "Does the quote account for SMUD's one-time fee to connect a new solar system?",
    ],
    localChecks: [
      {
        title: 'A flat streamlined permit',
        body: "Sacramento's streamlined solar permit, effective July 19, 2025, is $450 up to 15 kW and covers building plan review, inspection and intake, as an alternative to the City's value-based permit fees.",
      },
      {
        title: 'SolarAPP+ inside the City portal',
        body: 'The City connected SolarAPP+ to its Accela Citizen Access portal in fiscal year 2023/24, so a qualifying application can be submitted, paid and issued online.',
      },
      {
        title: "SMUD's flat export rate",
        body: "SMUD's Solar and Storage Rate, for customers approved on or after March 1, 2022, buys exported energy at 9.6 cents per kWh whatever the time or season; SMUD raised it from 7.4 cents on June 1, 2026. Credits carry over to later bills.",
      },
    ],
    related: [
      { href: '/blog/smud-peak-hours', label: 'Check SMUD peak hours' },
      { href: '/blog/why-is-my-smud-bill-so-high', label: 'Why a SMUD bill runs high' },
      { href: '/solar-savings/central-valley', label: 'Central Valley bill and project guide' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [sacramentoSolarApp, sacramentoSolarFee, smudSsr, smudSsrNews],
  },
  manteca: {
    city: 'Manteca',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Manteca issues rooftop solar and battery permits instantly online, and its municipal code lists a separate fee for each. Check that a quote's permit lines match the scope.",
    quoteQuestions: [
      "Does the design qualify for Manteca's instant Symbium permit for rooftop solar, and is any battery on its own permit?",
      'Is a main panel change part of the job? Manteca lists a separate residential electrical panel permit.',
      'Which utility bills the address? Most of Manteca is PG&E, but check your bill before any savings estimate.',
    ],
    localChecks: [
      {
        title: 'Three separate permit fees',
        body: "Manteca's municipal code fee table lists $378 for a residential rooftop solar permit, $304 for an energy storage system and $119 for a residential electrical panel, plus a 5 percent plan retention and technology fee on the permit fee.",
      },
      {
        title: 'Instant permits, inspections in Citizen Access',
        body: 'Symbium checks the design for code compliance and issues the permit in real time; inspections are then scheduled through the City’s Citizen Access portal.',
      },
      {
        title: 'A corner of the map is MID',
        body: "The California Energy Commission's service-territory map puts a small area in Manteca's southeast corner inside the Modesto Irrigation District's territory, though MID's own description of its service area does not name Manteca. PG&E's CCA list and Ava's list of the communities it serves do not include Manteca either.",
      },
    ],
    related: [
      { href: '/solar-savings/central-valley', label: 'Central Valley bill and project guide' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [mantecaInstant, mantecaFees, cecTerritory0923, midServiceArea, pgeCcaList, avaCommunities],
  },
  monterey: {
    city: 'Monterey',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Monterey charges the state-set $450 for a home system under 10 kW and waives its architectural and historic review fees for solar arrays, so a historic-district address does not add City review fees.",
    quoteQuestions: [
      "Is the system under 10 kW, the size Monterey's expedited checklist and $450 fee are written for?",
      "Does the plan set include the roof-framing statement, and the smoke and carbon monoxide detector affidavit, that the City's checklist requires?",
      'If equipment goes inside a garage, does the quote include any protective bollards the City may require?',
    ],
    localChecks: [
      {
        title: 'Solar skips the review fees',
        body: "Monterey's 2026/2027 fee schedule exempts solar arrays from architectural review, historic preservation, use permit and variance fees, and adds a 2.9 percent merchant fee if you pay by card.",
      },
      {
        title: 'A new portal since January 2026',
        body: "Since January 7, 2026, solar PV permits can be filed through mymontereyportal.org, which works out the required reviews and fees from the application's answers. The City's page does not name SolarAPP+; the CEC's SB 379 data lists Monterey's platform as SolarAPP+.",
      },
      {
        title: "What the City's checklist asks for",
        body: 'For a system under 10 kW the City wants a roof-framing statement (full engineering for ballasted systems), a smoke and carbon monoxide detector affidavit, and a separate checklist for battery storage. Equipment inside a garage may need protective bollards.',
      },
      {
        title: "3CE's December true-up",
        body: 'Central Coast Community Energy, which counts the City of Monterey among its members, trues up generation every December; residential customers owed $200 or more can ask for a check within 45 days of the statement.',
      },
    ],
    related: [
      { href: '/solar-savings/central-valley', label: 'Central Coast and Valley bill guide' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
      { href: '/blog/solar-panels-tile-roof-california', label: 'Solar on tile and older roofs' },
    ],
    sources: [montereyBuilding, montereyFees2627, montereyChecklist, cceMembers, cceSolarBilling, cecSb379],
  },
  sunnyvale: {
    city: 'Sunnyvale',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Sunnyvale publishes a flat solar permit fee for houses and issues SolarAPP+ permits online in one account. Silicon Valley Clean Energy, the generation provider, settles exports every month rather than once a year.",
    quoteQuestions: [
      'Does the contractor hold a Sunnyvale business license, which the City requires before it will issue the permit?',
      "Does the permit line include the City's $389 solar permit, the $42.50 issuance fee and the 5 percent technology surcharge?",
      "Does the savings estimate follow SVCE's monthly settlement and its payout rules, rather than a single annual true-up for everything?",
    ],
    localChecks: [
      {
        title: 'The City fee, itemized',
        body: "Sunnyvale's fiscal year 2026/27 schedule charges $389.00 for a solar permit on a single-family home or duplex, plus a $42.50 permit issuance fee and a 5 percent technology surcharge. SolarAPP+ adds its own $25 fee, which includes three revisions.",
      },
      {
        title: 'One account from permit to inspection',
        body: "After SolarAPP+ pre-approval, the contractor applies for the Photovoltaic (SolarAPP+) permit in the City's E-OneStop online services, pays there, and requests the final inspection from the same account.",
      },
      {
        title: 'How SVCE settles exports',
        body: 'Silicon Valley Clean Energy values exports at the grid price when they are sent, settles its generation charges on each monthly bill, and pays a cashout of $100 or more by check, up to $5,000. GreenPrime customers get $0.017 per kWh more for monthly excess; PG&E settles delivery at its own annual true-up.',
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [sunnyvaleSolarApp, sunnyvaleFees2627, svceSolarBilling],
  },
  visalia: {
    city: 'Visalia',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Visalia auto-issues SolarAPP+ permits within seconds of payment, but the City wants the load calculations at inspection, and those show whether the main panel can carry the new circuit.",
    quoteQuestions: [
      "Will the design pass SolarAPP+, and who files the Residential Solar Permit with SolarApp in the City's portal?",
      'Has the installer done the load calculations and single-line diagram the City wants at inspection, and do they show whether the main panel needs work?',
      "Does the savings estimate use SCE's generation and delivery rates from your own bill?",
    ],
    localChecks: [
      {
        title: 'Card-only, instant issue',
        body: 'Visalia takes permit fees online by Visa or MasterCard only, and the permit is auto-issued within a few seconds of payment. The City does not state the amount on its SolarApp page.',
      },
      {
        title: 'Paperwork at inspection',
        body: "The City requires the project's single-line diagram and load calculations at the time of inspection. Ask for them with the quote, since they show whether the existing panel can take the new circuit.",
      },
      {
        title: 'SCE on both lines',
        body: "SCE's list of community choice aggregators does not include Visalia, so a Visalia bill normally shows SCE for generation and delivery.",
      },
    ],
    related: [
      { href: '/solar-savings/central-valley', label: 'Central Valley bill and project guide' },
      { href: '/blog/sce-time-of-use-rates-2026', label: 'Check SCE time-of-use periods' },
      { href: '/blog/what-size-solar-system-do-i-need', label: 'Size a system from 12 months of use' },
    ],
    sources: [visaliaSolarApp, sceCcaList],
  },
  modesto: {
    city: 'Modesto',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Modesto Irrigation District customers are not on PG&E's Solar Billing Plan: MID says it still offers only NEM 2.0 and sets its own export credit and size cap, so a quote should be built on MID's terms.",
    quoteQuestions: [
      "Is the system sized within MID's limit of 115 percent of the meter's annual demonstrated load?",
      "Does the quote carry MID's $900 interconnection fee for a system under 100 kW AC as well as the City's $333 permit?",
      'Does the savings estimate value exported energy at the 7.6 cents per kWh MID credits, rather than at a PG&E export rate?',
    ],
    localChecks: [
      {
        title: 'One flat City line',
        body: "The City's 2026-27 Building Safety fee table lists the residential electrical photovoltaic permit at $333.00, payable when the application is filed.",
      },
      {
        title: "MID's paperwork comes first",
        body: "MID wants a complete application package, including CSI sheets for each array and a battery data sheet if a battery is part of the job, plus the interconnection fee. It returns incomplete packages to the contractor by mail and says its first paperwork review takes one to three weeks.",
      },
      {
        title: 'Then the MID inspection',
        body: "After the City signs off the permit, the signed-off copy goes to MID at pv@mid.org, dated within six months, and MID says it normally performs its interconnection inspection within 12 working days.",
      },
      {
        title: 'South of the river, check your bill',
        body: "MID describes its service area as greater Modesto north of the Tuolumne River, and the California Energy Commission's map puts part of the city inside the Turlock Irrigation District's territory. A TID address follows TID's solar rules instead.",
      },
    ],
    related: [
      { href: '/solar-savings/central-valley', label: 'Central Valley bill and project guide' },
      { href: '/blog/what-size-solar-system-do-i-need', label: 'Size a system from 12 months of use' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'Net metering versus net billing' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [modestoFees2627, midSolar, midServiceArea, cecTerritory0923, cecSb379],
  },
  corona: {
    city: 'Corona',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Corona runs its own electric utility for addresses inside the City's electric service area, and SCE serves the rest of the city. Which of the two sends your bill decides the rates and solar terms a quote has to use.",
    quoteQuestions: [
      "Which utility bills the address, the City of Corona's electric utility or SCE, and does the savings estimate use that utility's rates?",
      "If the permit goes through Symbium, has the installer confirmed on the City's map that the address is inside Corona's city limits?",
      "On the expedited plan-check route, is the plan check fee in the quote? The City starts review only after it is paid.",
    ],
    localChecks: [
      {
        title: 'A city-owned utility for part of town',
        body: "Corona's electric utility, set up in April 2001, provides bundled service within the City's electric service area, and new developments there join it if capacity is available. Its customers do not get an electric bill from Southern California Edison. The CEC's service-territory map shows the City utility's area as a small part of Corona inside SCE's territory.",
      },
      {
        title: 'Symbium, then eTRAKiT',
        body: "For a Symbium solar permit the City has you verify the address against its city-limits map, complete Symbium, and then finish in eTRAKiT. The CEC's SB 379 data lists Corona's platform as Symbium.",
      },
      {
        title: 'The expedited package',
        body: "The expedited route needs the City's application form, eligibility checklist, standard plan and structural criteria form, plus a roof plan and spec sheets for every installed item, all as PDFs printed no larger than 11 by 17 inches.",
      },
    ],
    related: [
      { href: '/solar-savings/inland-empire', label: 'Inland Empire bill and project guide' },
      { href: '/blog/sce-time-of-use-rates-2026', label: 'Check SCE time-of-use periods' },
      { href: '/blog/solar-rebates-by-california-utility', label: 'Compare utility solar programs' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [coronaExpedited, coronaElectric, cecTerritory0923, cecSb379],
  },
  tracy: {
    city: 'Tracy',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Tracy charges the State-set $450 for a home system up to 15 kW. Its permit page routes photovoltaic applications to a dedicated email address, and the plan check fee is paid before review begins.",
    quoteQuestions: [
      'Is the system 15 kW or smaller? Above that, Tracy adds $15 for each kW.',
      'Who emails the application and plans to the City, and who pays the plan check fee that has to be paid before review starts?',
      "Does the savings estimate follow Ava Community Energy's Solar Billing Plan credits and its April true-up, alongside PG&E's own true-up for delivery?",
    ],
    localChecks: [
      {
        title: 'A State-set fee in the City schedule',
        body: "Tracy's 2026/27 Master Fee Schedule lists residential solar up to 15 kW at a flat $450 and $15 per kW above that, and notes that the State sets these fees and they are not raised with the City's inflation adjustment.",
      },
      {
        title: 'Email, then pay in two parts',
        body: 'Photovoltaic applications go to photovoltaic@cityoftracy.org with the plans. The plan check fee is paid before review and the balance at issuance, through eTRAKiT or at City Hall. An owner-builder also files a Property Owner Disclosure Form.',
      },
      {
        title: 'Two true-ups on one bill',
        body: "Ava Community Energy lists Tracy among the San Joaquin County communities it serves, with Lathrop and Stockton. A Tracy solar bill therefore normally settles generation with Ava and delivery with PG&E, each on its own annual true-up.",
      },
    ],
    related: [
      { href: '/solar-savings/central-valley', label: 'Central Valley bill and project guide' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/blog/solar-installation-timeline-california', label: 'How long permitting takes' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [tracyPermit, tracyFees2627, avaCommunities, avaSolarBilling, cecSb379],
  },
  'san-jose': {
    city: 'San Jose',
    actionIds: ['T2-CITYCOST'],
    intro:
      "San Jose lets a qualifying rooftop system be permitted online in one sitting, but it prices the electrical work by inspection time rather than as a flat solar fee, so ask the installer to show the permit total SJPermits.org calculated.",
    quoteQuestions: [
      'Does the array meet SJPermits limits: under 5 pounds per square foot with frame, under 40 pounds per support point, no more than 18 inches above the roof, and not ballasted?',
      'If a battery is included, is it mounted with a City-approved anchorage detail or Master file, and is the anchorage inspection scheduled before the battery goes in?',
      "Does the savings estimate use San Jose Clean Energy's generation charges and PG&E's delivery charges from your own bill?",
    ],
    localChecks: [
      {
        title: 'Priced by inspection time',
        body: "San Jose's 2026-27 building fee schedule bills electrical permits at $315 per hour of required inspection time and allocates at least 60 minutes to a single-family photovoltaic system. A permit issuance fee is charged in addition.",
      },
      {
        title: 'Plans reviewed at the house',
        body: 'For an online permit the City inspector reviews the electrical plan on site on inspection day, so listed equipment, manufacturer instructions and conduit and conductor calculations have to be ready there.',
      },
      {
        title: 'Batteries have their own gate',
        body: "A battery can use SJPermits only with a City-approved anchorage detail or Master file, and the bracket anchorage is inspected, typically before the battery is installed.",
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [sanJoseSolar, sanJoseFees2627, pgeCcaList, cecSb379],
  },
  ontario: {
    city: 'Ontario',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Ontario has issued residential solar and battery permits through Symbium since August 2025, but it publishes no solar-specific fee, so the City's permit charge in a quote has to come from the installer or the permit counter.",
    quoteQuestions: [
      "Will the permit go through Ontario's Symbium real-time permitting route, and who files it?",
      'What City permit and plan check amounts does the quote include? Ontario publishes estimates only and gives exact figures by phone.',
      "Does the savings estimate use SCE's generation and delivery rates from your own bill?",
    ],
    localChecks: [
      {
        title: 'Symbium since August 2025',
        body: 'Since August 4, 2025, contractors and homeowners can apply for residential solar and energy storage permits through Symbium. The City encourages it because it speeds approval and issuance.',
      },
      {
        title: 'Estimates, not a solar line',
        body: "Ontario's fee page has no solar item. It lists a $41.00 electrical permit issuance fee and plan check at 80 percent of permit fees, calls the tables estimates, and gives exact amounts through permit technicians at 909-395-2023.",
      },
      {
        title: 'SCE with no CCA',
        body: "SCE's list of community choice aggregators does not name Ontario, so an Ontario bill normally shows SCE for both generation and delivery.",
      },
    ],
    related: [
      { href: '/solar-savings/inland-empire', label: 'Inland Empire bill and project guide' },
      { href: '/blog/sce-time-of-use-rates-2026', label: 'Check SCE time-of-use periods' },
      { href: '/blog/is-my-roof-good-for-solar-california', label: 'Check the roof before a quote' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [ontarioBuilding, ontarioFees, sceCcaList, cecSb379],
  },
  'mountain-view': {
    city: 'Mountain View',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Mountain View's SolarAPP+ route covers a single-family rooftop system even when a battery or a service panel upgrade is part of the job, so most home projects get an automatic permit.",
    quoteQuestions: [
      'Is the system roof-mounted or building-integrated on a single-family home, so it qualifies for SolarAPP+ instead of a full plan submittal in ePermitsMV?',
      "What is the City's permit fee in the quote? Mountain View does not publish the amount.",
      'Does the savings estimate follow Silicon Valley Clean Energy’s monthly settlement for generation and PG&E’s annual true-up for delivery?',
    ],
    localChecks: [
      {
        title: 'Batteries and panel work included',
        body: 'Registered contractors can take roof-mounted or building-integrated single-family solar through SolarAPP+ with or without energy storage or an electrical service panel upgrade. The permit issues automatically and is a City of Mountain View building permit.',
      },
      {
        title: 'Inspection a business day out',
        body: 'The contractor schedules the site inspection for at least one business day after approval, and a City building inspector checks the design and installation then.',
      },
      {
        title: 'Everything else through ePermitsMV',
        body: 'Multifamily, commercial and any single-family system outside SolarAPP+ are filed through ePermitsMV with building plans, and the fee is collected before the permit issues.',
      },
      {
        title: "SVCE's payouts",
        body: 'Silicon Valley Clean Energy values each exported kWh at the grid price at the moment it leaves the house. Balances of at least $100 are paid out by check, capped at $5,000, and anything smaller stays on the bill as credit.',
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/blog/solar-battery-backup-california', label: 'Plan battery backup' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [mountainViewSolar, mountainViewFees, svceSolarBilling, cecSb379],
  },
  'huntington-beach': {
    city: 'Huntington Beach',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Huntington Beach left Orange County Power Authority, and since 2024 SCE has supplied generation as well as delivery again. A savings estimate built from an older OCPA-era bill can use the wrong generation rates.",
    quoteQuestions: [
      'Does the design fit SolarAPP+ in Huntington Beach: a main service of 400A or less, disconnects and busbars of 225A or less, and no more than 38.4 kW?',
      'If a battery is included, has the contractor completed the separate SolarAPP+ training for solar-plus-storage projects?',
      "Is the savings estimate based on SCE's current generation and delivery rates rather than an OCPA bill?",
    ],
    localChecks: [
      {
        title: 'Back to SCE',
        body: 'The City Council voted in May 2023 to leave OCPA. Solar (NEM) customers were moved to SCE bundled service beginning in April 2024 and everyone else in June 2024, and OCPA says the return did not change anyone’s NEM type.',
      },
      {
        title: '$35, then the HB ACA portal',
        body: "SolarAPP+ charges $35 to process the design. The contractor then creates a Residential Photovoltaic System record in the City's HB ACA portal, uploads the SolarAPP+ documents and the Permit & Asbestos Disclosure Form, pays the City's fees and requests inspections there.",
      },
      {
        title: 'No do-it-yourself route',
        body: 'A homeowner installing their own system cannot use SolarAPP+ in Huntington Beach unless they hold the contractor licenses the work requires.',
      },
    ],
    related: [
      { href: '/solar-savings/orange-county', label: 'Orange County bill and project guide' },
      { href: '/blog/sce-time-of-use-rates-2026', label: 'Check SCE time-of-use periods' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [hbSolarApp, ocpaHuntingtonBeach, cecSb379],
  },
  arcata: {
    city: 'Arcata',
    actionIds: ['T2-CITYCOST'],
    intro:
      "Arcata has no flat solar permit fee: its fee schedule prices building permits by project valuation, with percentage add-ons. Redwood Coast Energy Authority, Humboldt County's community choice provider, pays solar customers a cash-out every May.",
    quoteQuestions: [
      'What valuation will the permit be based on, and does the permit line include the plan review deposit and the four percentage add-ons?',
      "Does the savings estimate follow RCEA's rules: monthly generation billing, a $0.01 per kWh bonus for net generators, and a May cash-out for balances of $100 or more?",
      'Is the application filed through the City portal as a PV/EV/Battery Backup Permit, and who books the inspection?',
    ],
    localChecks: [
      {
        title: 'Valuation-based fees',
        body: "Arcata's fiscal year 2026-27 fee schedule has no solar line. A building permit is priced from the project's valuation with a $159.00 minimum, plan review is 65 percent of the permit fee, and 4 percent each is added for permit issuance, technology, waste diversion and the General Plan fee.",
      },
      {
        title: 'Online, approved in office hours',
        body: "The City's permit portal takes a PV/EV/Battery Backup Permit at any time, but approval happens only during City business hours. The CEC's SB 379 data lists Arcata without an automated solar permitting platform.",
      },
      {
        title: "RCEA's May cash-out",
        body: 'RCEA bills its generation charges monthly with no RCEA true-up, while PG&E trues up delivery once a year. Each May RCEA mails a check to solar customers with a credit balance of $100 or more, up to $5,000, and customers whose systems received permission to operate after April 14, 2023 are on the Solar Billing Plan.',
      },
    ],
    related: [
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/blog/is-my-roof-good-for-solar-california', label: 'Check the roof before a quote' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [arcataFees2627, arcataPortal, arcataCce, rceaAbout, rceaSolar, pgeCcaList, cecSb379],
  },
  // ---------------------------------------------------------------------------
  // Tier 3 city-cost wave, 2026-09-23.
  // ---------------------------------------------------------------------------
  concord: {
    city: 'Concord',
    actionIds: ['T3-CITYCOST'],
    intro:
      "Concord charges the same $450 for a home system up to 15 kW whether it goes through SolarAPP+ or through plan review, and it leaves its usual add-on fees off solar permits, so two Concord bids should not differ on the permit line.",
    quoteQuestions: [
      'Which design route does the quote use: SolarAPP+, drawings from a design professional, or the City\'s standardized plans?',
      "Does the job include a main service panel upgrade? Concord charges $192 to inspect one, on top of the solar permit.",
      "Does the bill estimate use MCE's generation charges and export credits alongside PG&E's delivery charges, or PG&E's alone?",
    ],
    localChecks: [
      {
        title: 'One price, two routes',
        body: "Under the fee schedule last adopted April 28, 2026, a SolarAPP+ permit is a $70 administrative fee plus a $380 inspection fee, and a permit reviewed from drawings is $70 plus $115 for plan review and $265 for inspection. Both total $450 up to 15 kW; above that, each extra kW adds $15.",
      },
      {
        title: 'No add-on fees',
        body: "Concord's schedule says its administrative, technology and General Plan fees, charged on most other permits, do not apply to solar energy system permits.",
      },
      {
        title: 'Standard plans on file',
        body: 'Instead of custom drawings, an installer can prepare the plan set from the City\'s standardized central-inverter and micro-inverter configurations and file it under the "Solar PV" permit type in the Permit Portal.',
      },
      {
        title: "MCE's solar credits",
        body: "MCE adds a Solar Bonus Credit worth 10 percent of the export credits earned each month, pays income-qualified customers $0.05 per kWh, and mails a check for balances over $200, up to $5,000, after the spring cash-out.",
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [concordSolarPv, concordFees2026, mceAbout, mceSolarBilling, cecSb379T3],
  },
  richmond: {
    city: 'Richmond',
    actionIds: ['T3-CITYCOST'],
    intro:
      "Richmond's building fee for a home solar system is a flat $450 for 2026-27, and eligible projects get an instant permit. The things that slow a Richmond job are paperwork: a current city business tax certificate, correctly named uploads, and, on a historic home, Planning sign-off first.",
    quoteQuestions: [
      'Is the house on the Richmond Historic Register? If so, who gets the certificate of appropriateness, and is that time in the schedule?',
      "Does the installer hold a current Richmond business tax certificate, so the SolarAPP+ permit can issue instantly?",
      "Is the bill estimate built on MCE generation and PG&E delivery, the way a Richmond bill is split?",
    ],
    localChecks: [
      {
        title: 'A flat $450 building fee',
        body: "The fiscal year 2026-27 Master Fee Schedule, listed as effective July 23, 2026, sets Solar Structure - Residential System at $450.00. SolarAPP+ adds its own processing fee.",
      },
      {
        title: 'Instant, if the uploads are right',
        body: "The City issues the permit instantly only when the contractor's CSLB license and Richmond business tax certificate are current and the SolarAPP+ approval and signed permit application are uploaded under the file names the City specifies.",
      },
      {
        title: 'Historic homes go to Planning first',
        body: 'A property on the Richmond Historic Register needs a certificate of appropriateness from the Planning Division before the SolarAPP+ application, and it is issued only if the installation fits the Secretary of the Interior\'s Standards for Rehabilitation.',
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/blog/solar-installation-timeline-california', label: 'Map the installation stages and handoffs' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [richmondSolarApp, richmondMfs2627, richmondResidentialSolar, mceAbout, cecSb379T3],
  },
  berkeley: {
    city: 'Berkeley',
    actionIds: ['T3-CITYCOST'],
    intro:
      "Berkeley prices a SolarAPP+ permit at $100, well under the state limit, so the permit is a small line in any Berkeley quote. Ava Community Energy's export bonuses matter more to what a system is worth here.",
    quoteQuestions: [
      'Will the permit go through SolarAPP+ ($100), the streamlined route for 10 kW AC or less, or the standard process?',
      'If a battery is included, is its $150 storage permit in the quote as its own line?',
      "Does the savings estimate include Ava's peak-hours export bonus and the Energy Export Bonus Credit locked in for a 2026 interconnection?",
    ],
    localChecks: [
      {
        title: 'Permit fees by route',
        body: 'Under the fee schedule effective July 1, 2025, a residential SolarAPP+ permit is $100 per system; City review is $200 up to 15 kW, or $250 plus $15 per kW above, plan check included; a home battery system up to 50 kW is $150. A 5 percent technology fee is added.',
      },
      {
        title: 'Three ways to file',
        body: 'SolarAPP+ gives a real-time permit for rooftop solar with or without storage on a house or duplex. Systems of 10 kW AC or less that pass the City checklist can use the streamlined route, and anything else goes through the standard process, which the City reviews within one working day.',
      },
      {
        title: "Ava's export bonuses",
        body: 'A new voluntary residential system interconnected in 2026 earns an Energy Export Bonus Credit of $0.009 per kWh ($0.036 for income-qualified homes) for nine years, which PG&E also pays. Ava adds $0.025 per kWh for exports between 3 and 8 pm for customers not on CARE or FERA.',
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/blog/solar-battery-backup-california', label: 'Plan battery backup' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [berkeleySolar, berkeleyFees2025, avaCommunities, avaSolarBilling0923, cecSb379T3],
  },
  'santa-clara': {
    city: 'Santa Clara',
    actionIds: ['T3-CITYCOST'],
    intro:
      'Santa Clara is not PG&E territory. Silicon Valley Power, the city-run utility, bills most homes and still offers net metering, so a quote built on PG&E rates or on the Solar Billing Plan does not fit a Santa Clara bill.',
    quoteQuestions: [
      "Is the savings estimate built on SVP's Schedule D-1 rates and its Rate Schedule NM, not on PG&E's rates and Solar Billing Plan?",
      "Has the installer obtained SVP's interconnection agreement pre-approval letter, which the City requires with a SolarAPP+ application?",
      'Does the quote include both City lines, the $450 building permit and the $463 Fire Prevention fee, plus the technology fee?',
    ],
    localChecks: [
      {
        title: 'SVP, not PG&E',
        body: "The California Energy Commission's service-territory map places about 99 percent of Santa Clara in Silicon Valley Power's territory. SVP's rates page lists its average residential rate at $0.182 per kWh as of January 1, 2026, measured its own way, so do not compare it directly with a PG&E average.",
      },
      {
        title: 'Net metering is still open',
        body: 'SVP offers net metering under Rate Schedule NM and says it has not reached the 5 percent threshold in Public Utilities Code section 2827. A successor tariff, if the City Council adopts one, may be priced differently from NEM 2.0 or NEM 3.0.',
      },
      {
        title: 'Two City fee lines',
        body: "The fiscal year 2026/27 fee schedule lists a $450 residential photovoltaic building permit up to 15 kW, plus $15 per kW above, and a $463 Fire Prevention fee for a residential solar photovoltaic system, with a 3.37 percent technology fee on each.",
      },
      {
        title: 'SolarAPP+ with one battery',
        body: 'SolarAPP+ accepts storage of no more than one battery and 20 kWh. Larger or otherwise ineligible projects are filed through the Permitting Online Portal.',
      },
    ],
    related: [
      { href: '/solar-savings/bay-area', label: 'Bay Area bill and project guide' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'Net metering versus net billing' },
      { href: '/blog/solar-rebates-by-california-utility', label: 'Rebates by California utility' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [santaClaraSolarApp, santaClaraFees2627, svpRatesNm, cecTerritory0923, cecSb379T3],
  },
  'san-clemente': {
    city: 'San Clemente',
    actionIds: ['T3-CITYCOST'],
    intro:
      'San Clemente sits in SDG&E territory, not SCE like most of Orange County, and no community choice provider serves it, so a San Clemente bill is SDG&E for both generation and delivery.',
    quoteQuestions: [
      "Is the savings estimate built on SDG&E's rates and time-of-use periods rather than SCE's?",
      "Which City fee does the quote carry? San Clemente's fee sheet lists $400 up to 15 kW; its older bulletin calls $450 typical.",
      'Will a licensed contractor file through SolarAPP+ and eTRAKiT? Permit runners cannot request SolarAPP+ permits in San Clemente.',
    ],
    localChecks: [
      {
        title: 'SDG&E with no CCA',
        body: "The CEC service-territory map places San Clemente in SDG&E's territory, and SDG&E's list of active community choice aggregators does not name San Clemente as a member of Clean Energy Alliance or San Diego Community Power.",
      },
      {
        title: 'Two undated fee documents',
        body: "The City's Solar Permit Fees sheet lists $400 up to 15 kW plus $15 per kW above. Its bulletin for systems of 10 kW or less adds a plan check at 25 percent of the electrical permit fee and calls $450 typical. Neither is dated.",
      },
      {
        title: 'No fire review at 10 kW',
        body: "The same bulletin says Fire Department approval is not required for a home system of 10 kW or less, and that inspections requested in business hours are usually scheduled for the next business day.",
      },
    ],
    related: [
      { href: '/solar-savings/orange-county', label: 'Orange County bill guide' },
      { href: '/blog/sdge-time-of-use-rates-2026', label: 'Check SDG&E time-of-use periods' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [sanClementePermits, sanClementeFees, sanClementeBulletin, sdgeActiveCcas, cecTerritory0923, cecSb379T3],
  },
  clovis: {
    city: 'Clovis',
    actionIds: ['T3-CITYCOST'],
    intro:
      "Clovis does not publish its solar permit fee, and its SolarAPP+ route excludes any job with a service upgrade or an existing system, so the permit route itself tells you something about the scope of a Clovis quote.",
    quoteQuestions: [
      'Does the design qualify for SolarAPP+ in Clovis: no service upgrade or panel change, a main service of 400A or less, and no existing solar or battery on the house?',
      "What is the City's permit fee in the quote? Clovis does not publish the amount.",
      'Does the roof layout leave two 36-inch access pathways, one from the street side, as the City requires?',
    ],
    localChecks: [
      {
        title: 'Strict SolarAPP+ limits',
        body: "Clovis's eligibility list allows SolarAPP+ only for a roof-mounted system up to 38.4 kWdc on the existing service, with no service upgrade, a main service of 400A or less, no existing solar or storage, and lithium-ion storage installed by a C-10 contractor.",
      },
      {
        title: 'Owner-builders file plans',
        body: 'SolarAPP+ through the CSS portal is for contractors only. A homeowner acting as owner-builder files plans in person or online through the same portal.',
      },
      {
        title: 'Street-side roof access',
        body: "The City's submittal requirements call for two roof access pathways at least 36 inches wide, one from the street side of the house in front of the fence, which can take panel space on the front of the roof.",
      },
      {
        title: 'PG&E with no CCA',
        body: "PG&E's list of community choice aggregators names none serving Fresno County, so a Clovis bill is PG&E for generation and delivery.",
      },
    ],
    related: [
      { href: '/solar-savings/central-valley', label: 'Central Valley bill and project guide' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'Check PG&E time-of-use periods' },
      { href: '/blog/is-my-roof-good-for-solar-california', label: 'Check the roof before a quote' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [clovisBuilding, clovisEligibility, clovisSubmittal, pgeCcaList, cecSb379T3],
  },
  encinitas: {
    city: 'Encinitas',
    actionIds: ['T3-CITYCOST'],
    intro:
      "Encinitas publishes no solar permit fee, but it runs a fee waiver for basic home solar systems with its plan-check contractor. A quote that charges a full City permit fee for a simple rooftop system should say why.",
    quoteQuestions: [
      "Does the quote apply Encinitas's permit fee waiver for a basic installation, and has the installer confirmed with Development Services that it still applies?",
      "Is the system 10 kW or smaller, so it can use the City's standard plans and expedited review?",
      "Does the bill estimate keep San Diego Community Power's generation credits separate from SDG&E's delivery charges, which those credits cannot offset?",
    ],
    localChecks: [
      {
        title: 'A waiver for basic systems',
        body: "The City's fee-waiver flyer says Encinitas and EsGil Corporation waive permitting fees for basic home solar installations and cut them by an equivalent amount for larger or more complex ones. The flyer is undated, so ask Development Services at (760) 633-2710.",
      },
      {
        title: 'Standard plans up to 10 kW',
        body: 'Ordinance 2015-13 set up an expedited process for small rooftop systems, 10 kW or less for solar PV, and the City posts standard plans for string-inverter and micro-inverter systems in that size range. Applications go through the CSS portal.',
      },
      {
        title: "SDCP's surplus bonus",
        body: 'San Diego Community Power pays annual net surplus at the wholesale rate plus $0.0075 per kWh and mails a check when the amount is over $100. Its credits offset SDCP generation charges only, not SDG&E delivery charges.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/blog/sdge-time-of-use-rates-2026', label: 'Check SDG&E time-of-use periods' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [encinitasPv, encinitasWaiver, encinitasSmallSolar, sdgeActiveCcas, sdcpNem, cecSb379T3],
  },
  'san-marcos': {
    city: 'San Marcos',
    actionIds: ['T3-CITYCOST'],
    intro:
      "San Marcos charges $124 in City fees for a rooftop home system under its September 2026 schedule, so the permit is a small line in a San Marcos quote. The paperwork is where contractors differ.",
    quoteQuestions: [
      "Is the City permit line close to the published $124 for a rooftop system, plus $52 if a battery is included?",
      'Does the contractor hold a City of San Marcos business license and file the permit declaration form, without which the City will not schedule an inspection?',
      "Does the savings estimate use Clean Energy Alliance's 6-cent surplus rate and SDG&E's delivery charges?",
    ],
    localChecks: [
      {
        title: '$124 for a rooftop system',
        body: 'The Development Fees schedule effective September 1, 2026 lists a residential rooftop solar system at $57 for plan check and $67 for the permit, and an energy storage system at $52. A solar carport is far more: $980 plan check plus $454 permit.',
      },
      {
        title: 'A homeowner route',
        body: 'A homeowner can use the City\'s standard central-inverter or micro-inverter plans and apply online as "Roof Mounted Solar PV Expedited", which the City estimates at 1-3 business days. Full plan review is estimated at 5-10 business days.',
      },
      {
        title: "CEA's 6-cent surplus",
        body: 'Clean Energy Alliance pays net surplus at $0.06 per kWh, which it describes as slightly higher than SDG&E, sends a check for $100 or more, and rolls smaller amounts forward. The true-up falls on the anniversary of NEM enrollment.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/blog/sdge-time-of-use-rates-2026', label: 'Check SDG&E time-of-use periods' },
      { href: '/blog/solar-carport-california-guide', label: 'Solar carports and ground mounts' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [sanMarcosSolar, sanMarcosFees2026, sdgeActiveCcas, ceaNem, cecSb379T3],
  },
  lakewood: {
    city: 'Lakewood',
    actionIds: ['T3-CITYCOST'],
    intro:
      "Lakewood prices building permits from Los Angeles County's fee schedules plus an 18 percent City overhead charge, and it publishes no solar figure of its own, so the permit amount in a Lakewood quote is worth asking about.",
    quoteQuestions: [
      'Is the design eligible for SolarAPP+, or will it go through the City\'s submittal checklist and the Online Permit Center?',
      "Does the permit line include Lakewood's 18 percent overhead on top of the County fee?",
      "Does the bill estimate use SCE's rates for both generation and delivery, since no community choice provider serves Lakewood?",
    ],
    localChecks: [
      {
        title: 'County fees plus 18 percent',
        body: "Lakewood's building fees follow Los Angeles County's schedules plus an 18 percent overhead charge set by City Council resolution, and they rose 3 percent on July 1, 2025. The County electrical schedule the City links did not open when checked.",
      },
      {
        title: 'SolarAPP+, then pay',
        body: 'Licensed contractors submit through SolarAPP+, whose fee covers up to three revisions, then pay the remaining City fees when prompted and print the permit. Inspections are requested by phone or email.',
      },
      {
        title: 'SCE with no CCA',
        body: "The CEC service-territory map places Lakewood entirely in SCE's territory, and SCE's list of community choice aggregators does not name Lakewood, so SCE supplies generation and delivery.",
      },
    ],
    related: [
      { href: '/solar-savings/los-angeles-county', label: 'Los Angeles County bill guide' },
      { href: '/blog/sce-time-of-use-rates-2026', label: 'Check SCE time-of-use periods' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [lakewoodSolar, lakewoodPermits, sceCcaList, cecTerritory0923, cecSb379T3],
  },
  'elk-grove': {
    city: 'Elk Grove',
    actionIds: ['T3-CITYCOST'],
    intro:
      "Elk Grove is SMUD territory, not PG&E, so a savings estimate built on PG&E rates or PG&E's Solar Billing Plan does not describe an Elk Grove bill. SMUD pays a flat rate for exported power.",
    quoteQuestions: [
      "Does the savings estimate use SMUD's Solar and Storage Rate, 9.6 cents per exported kWh, and SMUD's Time-of-Day (5-8 p.m.) rate?",
      "Does the quote include SMUD's one-time fee to connect a new solar system?",
      'What City permit fee is in the quote? Elk Grove does not publish it.',
    ],
    localChecks: [
      {
        title: 'SMUD, not PG&E',
        body: "The California Energy Commission's service-territory map places all of Elk Grove in SMUD's territory. SMUD is a publicly owned utility with its own solar rate, described below.",
      },
      {
        title: 'A flat export rate',
        body: 'A home approved to install solar on or after March 1, 2022 is on the Solar and Storage Rate, which pays 9.6 cents per kWh for exports at any hour or season since June 1, 2026. Credits carry over to later bills.',
      },
      {
        title: 'Electronic submittals',
        body: "Elk Grove's Building Division requires permit applications and documents to be submitted electronically. The CEC's SB 379 data, self-reported, lists the City's automated platform as SolarAPP+.",
      },
    ],
    related: [
      { href: '/blog/smud-peak-hours', label: 'Check SMUD peak hours' },
      { href: '/blog/why-is-my-smud-bill-so-high', label: 'Why a SMUD bill runs high' },
      { href: '/solar-savings/central-valley', label: 'Central Valley bill and project guide' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [elkGroveBuilding, smudSsr0923, cecTerritory0923, cecSb379T3],
  },
  'mission-viejo': {
    city: 'Mission Viejo',
    actionIds: ['T3-CITYCOST'],
    intro:
      'Mission Viejo is split between two utilities: most of the city is SCE, and the southern part is SDG&E, whose average rate is much higher. Which one bills the house changes what a system is worth, not what it costs to install.',
    quoteQuestions: [
      'Which utility is on your bill, SCE or SDG&E, and is the savings estimate built on that utility\'s rates?',
      "Does the City permit line match Mission Viejo's $450 for a system up to 15 kW?",
      "Is the installer set up in the City's Client Self Service portal with every contact listed, so inspections can be booked?",
    ],
    localChecks: [
      {
        title: 'SCE or SDG&E by address',
        body: "The CEC service-territory map puts about 72 percent of Mission Viejo in SCE's territory and about 28 percent, in the south of the city, in SDG&E's. Neither utility's list of community choice aggregators names Mission Viejo.",
      },
      {
        title: '$450 up to 15 kW',
        body: "The building fee schedule effective April 1, 2023 sets a residential solar system up to 15 kW at $450 and adds $15 per kW above that, the same figures as the state limit.",
      },
      {
        title: 'Online only',
        body: 'Every permit and inspection is handled through the Client Self Service portal, and each contact on the permit needs an account. Inspections are next business day when requested by 4 p.m.',
      },
    ],
    related: [
      { href: '/solar-savings/orange-county', label: 'Orange County bill guide' },
      { href: '/blog/sce-time-of-use-rates-2026', label: 'Check SCE time-of-use periods' },
      { href: '/blog/sdge-time-of-use-rates-2026', label: 'Check SDG&E time-of-use periods' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [missionViejoBuilding, missionViejoFees2023, cecTerritory0923, sceCcaList, ocpaMembers, sdgeActiveCcas, cecSb379T3],
  },
  victorville: {
    city: 'Victorville',
    actionIds: ['T3-CITYCOST'],
    intro:
      "Victorville's published permit fee for a home solar system is $372, below the state limit. Most of the city is SCE, but a smaller area in the north falls in Victorville Municipal Utilities Services' territory on the CEC map, so check the bill first.",
    quoteQuestions: [
      'Which utility is on your bill: SCE, or Victorville Municipal Utilities Services?',
      "Does the permit line match the City's $372 for a residential system up to 15 kW, plus the SolarAPP+ processing fee?",
      "Is the savings estimate built on SCE's rates without a community choice line? Apple Valley Choice Energy serves Apple Valley, not Victorville.",
    ],
    localChecks: [
      {
        title: '$372 up to 15 kW',
        body: "The Stand Alone Permits Fee Calculation Chart, updated January 8, 2026, lists a residential photovoltaic system up to 15 kW at $372.00. SolarAPP+ adds its own processing fee.",
      },
      {
        title: 'Two utilities on the map',
        body: "The CEC service-territory map places Victorville in SCE's territory and also shows about 6 percent of the city's area, in its north, in Victorville Municipal Utilities Services' territory.",
      },
      {
        title: 'No CCA in Victorville',
        body: "SCE's list names Apple Valley Choice Energy as serving the city of Apple Valley only, and no community choice provider for Victorville, so SCE supplies generation and delivery.",
      },
      {
        title: 'Book inspections, do not email',
        body: 'The City emails a permit number after SolarAPP+ approval. Inspections are booked in Citizen Self Service or by phone with a live person; voicemail and email requests are not accepted.',
      },
    ],
    related: [
      { href: '/solar-savings/inland-empire', label: 'Inland Empire bill and project guide' },
      { href: '/blog/sce-time-of-use-rates-2026', label: 'Check SCE time-of-use periods' },
      { href: '/blog/net-billing-vs-net-metering-california', label: 'How net billing credits exports' },
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
    ],
    sources: [victorvilleSolarApp, victorvilleFees2026, cecTerritory0923, sceCcaList, cecSb379T3],
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
