// Reviewed local destinations. Existing city source remains intact for other routes.
// Sources default to 2026-09-10; newer entries set sourceCheckedDate.
// No provider endorsement, address coverage or rate implied.
export const growthCities: Record<
  string,
  {
    name: string;
    county: string;
    utility: string;
    bill: string;
    local: string;
    example: string;
    sources: { label: string; url: string }[];
    sourceCheckedDate?: string;
    hasSavingsGuide?: boolean;
    checks?: [string, string][];
    provider?: { name: string; url: string; detail: string; ask: string };
    nearby?: string[];
    faq?: [string, string][];
  }
> = {
  "san-francisco": {
    name: "San Francisco",
    county: "San Francisco County",
    utility: "pge",
    sourceCheckedDate: "2026-09-11",
    bill: "Check the generation provider and enrolled program on the PG&E bill before comparing proposals. CleanPowerSF supplies generation for enrolled customers, while PG&E delivers the electricity and sends the bill. Have each bidder use both portions and the account's actual solar-billing enrollment.",
    local:
      "San Francisco's current digital S Permit covers qualifying solar work on R3 occupancies and goes through the registered electrical-contractor portal. Ask whether your property and scope qualify. Roof work, a service or subpanel change, storage and any additional review belong in the written permit plan.",
    example:
      "Put the same roof layout, shade model and monthly production in both proposals. Then separate solar, storage, roof and electrical work. The remaining bill should use the same CleanPowerSF or PG&E generation enrollment and show imports and export credits instead of promising that the bill disappears.",
    checks: [
      [
        "Generation and delivery",
        "Use the provider, rate schedule and solar program printed on the bill; show generation and PG&E delivery separately.",
      ],
      [
        "Roof and shade",
        "Map each roof plane, obstruction and shading input, then show monthly production and the work excluded from the price.",
      ],
      [
        "Permit and electrical scope",
        "State whether the S Permit applies and identify service-panel, subpanel, storage or other review in the application scope.",
      ],
      [
        "Contract and service",
        "Name the contracting business, installation crew, service contact and written responsibility for roof penetrations and equipment service.",
      ],
    ],
    provider: {
      name: "Luminalt",
      url: "https://luminalt.com/",
      detail:
        "Its website identifies a San Francisco office and publishes home solar, battery storage, small-commercial and remodeling/new-construction services.",
      ask: "Confirm acceptance of the exact address and request a roof-specific design, itemized cash price, equipment list and the legal business responsible for the contract and service.",
    },
    sources: [
      {
        label:
          "CleanPowerSF: understanding generation and PG&E delivery charges",
        url: "https://cleanpowersf.org/understanding-my-bill",
      },
      {
        label: "CleanPowerSF: rooftop solar billing information",
        url: "https://cleanpowersf.org/net-energy-metering",
      },
      {
        label: "San Francisco DBI: current digital solar permit process",
        url: "https://www.sf.gov/new-solar-permit-cancelling-abandoned-otc-applications-recheck-escalation-reference-drawings-and-new-fee-rates",
      },
      {
        label: "Luminalt: published San Francisco service scope",
        url: "https://luminalt.com/",
      },
    ],
    nearby: ["oakland", "pleasanton", "san-jose"],
    faq: [
      [
        "Should every San Francisco proposal assume CleanPowerSF generation?",
        "No. Read the provider and enrolled program on the current PG&E bill. The proposal should use that account information and show generation and delivery separately.",
      ],
      [
        "Does every San Francisco solar project use the same permit path?",
        "No. The current S Permit is described for qualifying R3 work. Ask the bidder to identify the path for your property and include roof, electrical, storage and inspection responsibilities in writing.",
      ],
    ],
  },
  oakland: {
    name: "Oakland",
    county: "Alameda County",
    utility: "pge",
    sourceCheckedDate: "2026-09-11",
    bill: "Check the generation provider and solar program on the PG&E bill. Ava provides generation for its customers, while PG&E provides transmission, distribution and billing. Ava's Solar Billing Plan separates generation and delivery credits, and the two annual true-ups can occur in different months.",
    local:
      "Oakland publishes SolarAPP+ and Online Permit Center routes for solar projects. Its instructions distinguish PV-dedicated panel, subpanel and storage work from other electrical work, which may require a separate permit. Ask the bidder to identify the route and every additional approval for the actual design.",
    example:
      "An Oakland bid can look lower because roof work, a panel change or storage is missing. Ask each bidder to price those items separately and use the same shade-aware monthly production. Then compare the remaining Ava and PG&E bill under the account's confirmed solar program.",
    checks: [
      [
        "Ava and PG&E account",
        "Show generation and delivery charges and credits separately, including the applicable billing and true-up calendars.",
      ],
      [
        "Roof and production",
        "Use the actual roof planes and shade inputs; list monthly output and any roof repair excluded from the contract.",
      ],
      [
        "Electrical and storage",
        "Itemize panel, subpanel, battery, backup circuits and any work that needs a separate city or fire review.",
      ],
      [
        "Service after installation",
        "Identify who answers a production or battery problem, who performs the repair and which written warranty applies.",
      ],
    ],
    provider: {
      name: "NRG Clean Power",
      url: "https://nrgcleanpower.com/locations/california/oakland/",
      detail:
        "Its Oakland page publishes solar-panel, home-battery, permit-coordination, installation and financing information.",
      ask: "Confirm the exact address and contracting business. Request an itemized cash price, roof and electrical scope, monthly production model and separate storage/backup design.",
    },
    sources: [
      {
        label: "Ava: generation, PG&E delivery and billing roles",
        url: "https://avaenergy.org/about-ava/faq/",
      },
      {
        label: "Ava: Solar Billing Plan and separate true-ups",
        url: "https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/",
      },
      {
        label: "City of Oakland: solar permits and related project scope",
        url: "https://www.oaklandca.gov/My-Household/Building-and-Remodeling/Homeowner-Projects-Permits/Solar-Energy-Systems-Facilities",
      },
      {
        label: "NRG Clean Power: published Oakland service scope",
        url: "https://nrgcleanpower.com/locations/california/oakland/",
      },
    ],
    nearby: ["san-francisco", "pleasanton", "san-jose", "livermore"],
    faq: [
      [
        "Does Ava replace PG&E for an Oakland solar account?",
        "Ava explains that it provides generation while PG&E continues transmission, distribution and billing. Use the current bill to confirm the account's provider and solar program before modeling a proposal.",
      ],
      [
        "Can an Oakland solar permit include a panel change or battery?",
        "Oakland says PV-dedicated panel, subpanel and storage work may be included in the solar application, while other electrical work may require a separate permit. Have the bidder identify the scope and route in writing.",
      ],
    ],
  },
  "san-diego": {
    name: "San Diego",
    county: "San Diego County",
    utility: "sdge",
    bill: "Check both the SDG&E delivery section and the generation provider on your bill. San Diego Community Power has its own solar billing information; a CCA generation price alone is not your total electricity price.",
    local:
      "The City of San Diego publishes a residential rooftop PV permit process. A property elsewhere in the county may use a different permitting authority. Ask the bidder to identify that authority and include the permit and inspection scope.",
    example:
      "If one proposal adds a battery and another does not, ask for the remaining annual utility bill under the same SDG&E schedule and generation provider. Then price the backup circuits separately. A battery bill-savings case and an outage-backup case answer different questions.",
    sources: [
      {
        label: "San Diego Community Power: solar billing and NEM",
        url: "https://sdcommunitypower.org/net-energy-metering/",
      },
      {
        label: "City of San Diego: residential rooftop PV permits",
        url: "https://www.sandiego.gov/development-services/permits/solar-photovoltaic-permit",
      },
      {
        label: "SDG&E pricing plan chooser",
        url: "https://www.sdge.com/residential/pricing-plans",
      },
    ],
  },
  fresno: {
    name: "Fresno",
    county: "Fresno County",
    utility: "pge",
    bill: "Use the electricity provider and schedule printed on your bill. For a PG&E account, compare delivery and any separate generation charges together. A Fresno mailing address does not prove a particular tariff or a provider’s service coverage.",
    local:
      "The City of Fresno offers SolarAPP+ for eligible residential projects; commercial work uses its standard permitting route. A permit process is not a promise of installation timing. Confirm whether the property is under city or county jurisdiction.",
    example:
      "If summer cooling pushes your usage above the rest of the year, do not size from that bill alone. Ask for a monthly usage and production comparison covering your full billing year, including the remaining evening imports.",
    sources: [
      {
        label: "City of Fresno: SolarAPP+ and standard permit routes",
        url: "https://www.fresno.gov/planning/get-an-instantly-approved-solar-permit-through-solar-app/",
      },
      {
        label: "PG&E solar billing plans",
        url: "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html",
      },
    ],
  },
  "los-angeles": {
    name: "Los Angeles",
    county: "Los Angeles County",
    utility: "ladwp",
    bill: "Confirm whether the bill is from LADWP or another electric utility. LADWP publishes its own net energy metering rules. Do not apply the PG&E/SCE/SDG&E Net Billing Tariff to an LADWP account, or assume every Los Angeles County address has LADWP.",
    local:
      "LADWP separates rooftop solar, shared solar and other customer programs. A shared-solar offering is not a rooftop installation quote. Match the proposal to the meter and property you actually control.",
    example:
      "If a salesperson uses an SCE export-credit assumption for your LADWP bill, ask for a corrected comparison before judging the price. Identify the actual meter, tariff and billing period first.",
    sources: [
      {
        label: "LADWP solar programs",
        url: "https://www.ladwp.com/residential-services/solar-programs",
      },
      {
        label: "LADWP net energy metering service rider",
        url: "https://webprod.ladwp.com/account/customer-service/electric-rates/ev-nem-reo-rates",
      },
    ],
  },
  sacramento: {
    name: "Sacramento",
    county: "Sacramento County",
    utility: "smud",
    bill: "Read the electric utility name, not just the gas company name. For SMUD electricity, use SMUD’s Solar and Storage Rate or your confirmed legacy solar rate. The investor-owned utilities’ NEM 3.0 assumptions do not substitute for SMUD’s rules.",
    local:
      "SMUD distinguishes its current Solar and Storage Rate from eligible legacy NEM accounts. An existing system modification can affect the applicable rules. Ask SMUD about your current enrollment before pricing an expansion or battery incentive.",
    example:
      "For a SMUD customer adding storage, compare the battery quote with and without the proposed incentive and show which rate applies in each case. Check both the financial result and the circuits that would run during an outage.",
    sources: [
      {
        label: "SMUD Solar and Storage Rate and legacy-system conditions",
        url: "https://www.smud.org/Rate-Information/Solar-and-Storage-Rate",
      },
      {
        label: "SMUD residential rates",
        url: "https://www.smud.org/Rate-Information/Residential-Rates",
      },
    ],
  },
  bakersfield: {
    name: "Bakersfield",
    county: "Kern County",
    utility: "pge",
    bill: "Use the utility, generation provider and rate plan shown on your electricity bill. A PG&E proposal should show the current solar billing treatment and retained utility charges. Do not estimate from a statewide average rate.",
    local:
      "Kern County publishes a SolarAPP+ path for eligible residential PV with or without storage. That county process does not establish the permit path for a property inside Bakersfield city limits. Ask the bidder to name the governing building department.",
    example:
      "If a proposal uses a high summer bill to advertise year-round savings, ask for the full monthly model. Include cooling use, winter consumption, roof work, evening imports and a separate battery line item.",
    sources: [
      {
        label: "Kern County: SolarAPP+ process",
        url: "https://www.kernpublicworks.com/services/development/building-inspection/solarapp-streamlined-permitting-process",
      },
      {
        label: "PG&E solar billing plan",
        url: "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html",
      },
    ],
  },
  "san-jose": {
    name: "San Jose",
    county: "Santa Clara County",
    utility: "pge",
    bill: "Check PG&E delivery and the generation provider, which may be San José Clean Energy. SJCE’s generation billing and PG&E’s delivery billing are distinct. Confirm whether the account is on legacy NEM or a newer solar billing plan before comparing exports.",
    local:
      "San José publishes separate requirements for solar and storage battery projects, including its streamlined permit path. An existing roof or electrical service change can alter the project scope. Have the bidder identify that work in the quote.",
    example:
      "If competing quotes use different SJCE/PG&E billing assumptions, ask both to use your actual account enrollment and the same production profile. A larger array does not automatically produce a better financial result.",
    sources: [
      {
        label: "San José Clean Energy: solar billing and NEM",
        url: "https://sanjosecleanenergy.org/solar-billing-nem/",
      },
      {
        label: "City of San José: solar and battery projects",
        url: "https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/solar-storage-battery-projects",
      },
    ],
  },
  pleasanton: {
    name: "Pleasanton",
    county: "Alameda County",
    utility: "pge",
    bill: "Pleasanton participates in Ava Community Energy. Check your bill for the generation plan actually selected, then keep the PG&E delivery charges in the comparison. Ava’s Solar Billing Plan accounts for imports and exports separately and has its own generation true-up. A generation-only price is not the price of the whole bill.",
    local:
      "Pleasanton’s SolarAPP+ route is for eligible residential rooftop retrofit projects. The approved SolarAPP+ package still goes into a city permit application through Accela. Ask who holds the city business license, uploads the documents and schedules the final inspection.",
    example:
      "Suppose the lower bid includes a larger array but leaves out storage. Ask both bidders to use your same Ava plan, PG&E tariff and usage history, with monthly imports and export credits shown. If roof work is needed, get it priced before choosing the larger array. Panel count alone cannot settle the comparison.",
    checks: [
      [
        "Ava and PG&E bill",
        "Show generation and delivery separately, including both true-up calendars.",
      ],
      [
        "Roof and permit scope",
        "Identify the roof work and whether the design qualifies for SolarAPP+; include the city application and inspection.",
      ],
      [
        "Battery option",
        "Request the same array with and without storage, with reserve settings and remaining utility costs stated.",
      ],
    ],
    provider: {
      name: "American Array Solar",
      url: "https://www.americanarraysolar.com/solar/solar-contractors-pleasanton/",
      detail:
        "Its Pleasanton page lists system design, permit/utility coordination, maintenance and battery integration.",
      ask: "Confirm your address, roof scope and the contracting business. Have the proposal identify Ava generation and PG&E delivery.",
    },
    sources: [
      {
        label: "Ava: Pleasanton service information",
        url: "https://avaenergy.org/community/who-we-serve/pleasanton/",
      },
      {
        label: "Ava: Solar Billing Plan",
        url: "https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/",
      },
      {
        label: "Pleasanton: solar permitting",
        url: "https://www.cityofpleasantonca.gov/our-government/community-and-economic-development/permits-forms-fees-2/",
      },
      {
        label: "American Array Solar: published service scope",
        url: "https://www.americanarraysolar.com/solar/solar-contractors-pleasanton/",
      },
    ],
    nearby: ["livermore"],
    faq: [
      [
        "Does SolarAPP+ approval finish my Pleasanton permit?",
        "No. The city’s instructions call for a city application with the approved documents and a final inspection. Ask for those steps in the installation schedule.",
      ],
      [
        "Should my Pleasanton quote use an average PG&E rate?",
        "Use the rate schedule and generation provider on your own bill. Ava generation, PG&E delivery and export credits need to be accounted for separately.",
      ],
    ],
  },
  "santa-cruz": {
    name: "Santa Cruz",
    county: "Santa Cruz County",
    utility: "pge",
    bill: "For a PG&E account with Central Coast Community Energy generation, compare both parts of the bill. 3CE publishes separate Solar Billing Plan rules and warns that voluntarily leaving legacy NEM is permanent for both generation and delivery. Check your enrollment before accepting a storage offer that changes it.",
    local:
      "The City of Santa Cruz lists SolarAPP+ for residential rooftop solar and storage. A Santa Cruz mailing address can still require a different building authority; have the bidder identify the permit jurisdiction and roof layout before promising an installation date.",
    example:
      "An existing solar owner may be offered a battery rebate alongside a change in billing. Compare keeping the existing enrollment with the proposed transition, using the same usage and battery settings. Put the continuing bill difference beside the rebate. The upfront amount is only part of the decision.",
    checks: [
      [
        "Existing solar enrollment",
        "Record current NEM or Solar Billing Plan status and any proposed change before signing.",
      ],
      [
        "Roof-level production",
        "Ask for a shade assessment and monthly output for each roof plane; use your site’s inputs.",
      ],
      [
        "Storage and permit",
        "Name the backed-up circuits, equipment location and city or county application path.",
      ],
    ],
    provider: {
      name: "Allterra Solar",
      url: "https://www.allterrasolar.com/",
      detail:
        "Publishes Santa Cruz and Central Coast residential/light-commercial solar services, storage and financing information.",
      ask: "Request the roof-specific production model and a comparison that preserves or explicitly changes your confirmed 3CE/PG&E enrollment.",
    },
    sources: [
      {
        label: "3CE: Solar Billing Plan and legacy transition",
        url: "https://3cenergy.org/solar-billing-plan/",
      },
      {
        label: "3CE: residential battery program conditions",
        url: "https://3cenergy.org/rebates/residential-battery-rebate-program/",
      },
      {
        label: "City of Santa Cruz: Building & Safety",
        url: "https://www.santacruzca.gov/Government/City-Departments/Community-Development/Building-Safety",
      },
      {
        label: "Allterra Solar: published service scope",
        url: "https://www.allterrasolar.com/",
      },
    ],
    nearby: ["san-jose"],
    faq: [
      [
        "Can a battery offer change my Santa Cruz solar billing?",
        "Some offers can. 3CE’s battery program conditions require existing NEM participants to move to the Solar Billing Plan. Compare the continuing billing effect before accepting the offer.",
      ],
      [
        "Does a Santa Cruz company’s address prove it serves my home?",
        "No. Ask for written service coverage and identify whether your property is inside the city or under another permit authority.",
      ],
    ],
  },
  "el-cajon": {
    name: "El Cajon",
    county: "San Diego County",
    utility: "sdge",
    bill: "Start with the SDG&E schedule shown on the electric bill. Separate electricity bought from the grid, electricity used directly from the roof and electricity exported. Keep any generation provider shown on the account in the calculation; a neighboring city’s billing arrangement is not enough.",
    local:
      "El Cajon launched SolarAPP+ for residential rooftop solar and storage projects. Ask the bidder to confirm the current submission and completion requirements with the city’s Building and Fire Safety Division. A fast permit review does not establish the roof condition, equipment availability or utility permission to operate.",
    example:
      "If the proposal bundles new air conditioning, solar and a battery, get a price and scope for each. Then ask the solar model to use the expected cooling load after the equipment change, with the old usage retained as a separate comparison. Otherwise the same reduction can appear in both sales estimates.",
    checks: [
      [
        "Cooling and solar scope",
        "Itemize HVAC work separately and explain any adjustment to the usage profile.",
      ],
      [
        "Electrical service",
        "Show whether the main panel is retained or upgraded, with permit and utility coordination included.",
      ],
      [
        "City completion process",
        "Get the application reference and required completion documents; distinguish them from SDG&E approval.",
      ],
    ],
    provider: {
      name: "Johnson Solar",
      url: "https://johnsonsolar.com/",
      detail:
        "Describes San Diego County PV solar, battery backup, electrical panel upgrades and permit/design services.",
      ask: "Confirm El Cajon address coverage, separate the electrical work and compare the same system size and usage profile.",
    },
    sources: [
      {
        label: "El Cajon: residential solar and storage permit launch",
        url: "https://www.elcajon.gov/Home/Components/News/News/5754/18?arch=1&npage=4",
      },
      {
        label: "SDG&E: Solar Billing Plan",
        url: "https://www.sdge.com/solar/solar-billing-plan/UnderstandingYourSolarBill",
      },
      {
        label: "Johnson Solar: published service scope",
        url: "https://johnsonsolar.com/",
      },
    ],
    nearby: ["san-diego"],
    faq: [
      [
        "Does a quick permit mean my El Cajon system can operate immediately?",
        "No. Have the installer identify the city completion steps and SDG&E interconnection approval separately. The contract schedule should cover both.",
      ],
      [
        "How do I compare a combined solar and cooling quote?",
        "Separate the equipment and installation prices. Ask which future cooling usage was assumed so the solar and HVAC projections do not both claim the same savings.",
      ],
    ],
  },
  modesto: {
    name: "Modesto",
    county: "Stanislaus County",
    utility: "other",
    bill: "Check the electric utility first. For a Modesto Irrigation District account, use MID’s own solar program and interconnection rules. MID currently describes its NEM program separately from the investor-owned utilities’ Solar Billing Plans. A PG&E export model does not answer an MID homeowner’s question.",
    local:
      "MID requires project approval before installation and a completed city or county permit before its interconnection inspection. Its sizing review uses demonstrated load and does not count anticipated load. The City of Modesto’s expedited checklist also asks for roof, electrical and fire-access information.",
    example:
      "A bidder may add panels for an electric vehicle you intend to buy. For an MID meter, ask whether that design meets MID’s demonstrated-load rule before comparing the larger system’s price. Have the quote identify metering equipment and utility inspection work. Approval comes before installation.",
    checks: [
      [
        "Correct electric district",
        "Use the utility on the meter’s bill. Select Other / not sure in the inquiry if it is MID.",
      ],
      [
        "Demonstrated usage",
        "Ask the bidder to show the load evidence used for MID sizing; separate any future-load assumption.",
      ],
      [
        "Installation and activation",
        "Itemize city/county permits, MID application, metering and utility inspection in the scope.",
      ],
    ],
    provider: {
      name: "Mid-State Solar",
      url: "https://www.midstatesolar.com/",
      detail:
        "Lists a Modesto location and distinct solar-electric and solar pool-heating services.",
      ask: "Confirm the project is electric PV and identify MID or the actual utility. Ask specifically about storage and roof work; the homepage service list does not settle that scope.",
    },
    sources: [
      {
        label: "MID: solar program and interconnection requirements",
        url: "https://www.mid.org/saving-energy-money/solar/",
      },
      {
        label: "Modesto: expedited solar eligibility checklist",
        url: "https://www.modestogov.com/FormCenter/Building-Safety-and-Neighborhood-Preserv-26/Eligibility-Checklist-for-Expedited-Sola-420",
      },
      {
        label: "Mid-State Solar: published service scope",
        url: "https://www.midstatesolar.com/",
      },
    ],
    nearby: ["livermore"],
    faq: [
      [
        "Should an MID quote use statewide NEM assumptions?",
        "No. MID publishes its own solar program, sizing rules and interconnection process. Have each bidder name the applicable MID schedule.",
      ],
      [
        "Can a larger MID system be justified by an electric vehicle I may buy?",
        "MID’s current instructions say anticipated load is not considered. Ask MID and the bidder to confirm the allowed design from your demonstrated usage before committing.",
      ],
    ],
  },
  "santa-rosa": {
    name: "Santa Rosa",
    county: "Sonoma County",
    utility: "pge",
    bill: "Check Sonoma Clean Power generation alongside PG&E delivery. SCP’s solar customer page separates legacy Net Energy Metering from the Solar Billing Plan for new customers. Have the proposal identify the account’s actual enrollment before modeling exports or adding equipment.",
    local:
      "Santa Rosa’s building guidance specifically addresses removing and replacing solar during a reroof. The city asks for panel-layout and attachment information even when panels return to the same place. Get solar removal, roof work and reinstallation responsibilities into the written bid.",
    example:
      "Suppose a roof replacement is due and a solar salesperson prices only the new array. Request a combined scope that names who removes the old equipment, makes the roof watertight and reinstalls or replaces the system. Ask which company handles a leak claim after the work. That gap can erase a price advantage.",
    checks: [
      [
        "Reroof coordination",
        "List removal, storage, attachment details, reinstallation and the responsible businesses.",
      ],
      [
        "Solar enrollment",
        "Identify SCP and PG&E treatment for an existing system before changing the array.",
      ],
      [
        "Backup design",
        "Ask for named circuits and runtime assumptions; price backup capability separately from bill savings.",
      ],
    ],
    provider: {
      name: "First Response Solar",
      url: "https://www.firstresponsesolar.com/",
      detail:
        "Publishes Santa Rosa among its service areas and links solar installation/project information.",
      ask: "Confirm your address, current battery offering and reroof coordination in writing. No roof or storage scope should be inferred from a city service link.",
    },
    sources: [
      {
        label: "Sonoma Clean Power: solar customers",
        url: "https://sonomacleanpower.org/solar-customers",
      },
      {
        label: "Sonoma Clean Power: billing relationship with PG&E",
        url: "https://sonomacleanpower.org/frequently-asked-questions",
      },
      {
        label: "Santa Rosa: building permits and solar removal/replacement",
        url: "https://www.srcity.org/265/Building-Permits",
      },
      {
        label: "First Response Solar: published service scope",
        url: "https://www.firstresponsesolar.com/",
      },
    ],
    nearby: [],
    faq: [
      [
        "Can solar be put back after a Santa Rosa reroof without documenting it?",
        "The city’s current permit guidance calls for panel layout and attachment details for removal and replacement, including panels returned to the same location. Have the bidder include that work.",
      ],
      [
        "Will adding a battery back up every circuit?",
        "The equipment and wiring determine what can run. Request a circuit list, reserve setting and load-based runtime estimate for the proposed design.",
      ],
    ],
  },
  "palm-springs": {
    name: "Palm Springs",
    county: "Riverside County",
    utility: "sce",
    bill: "If your SCE bill includes Desert Community Energy, show DCE generation and SCE delivery separately. DCE has parallel solar programs and its own annual generation true-up. Confirm the service plan and existing solar status; an export credit on one portion does not automatically pay charges on the other.",
    local:
      "Palm Springs directs permit applications through Palm Springs Online. Ask the bidder to identify roof attachments, any roof work and the proposed equipment location in the application. If your property has a historic designation, have the city confirm the applicable review before treating the design as settled.",
    example:
      "A solar-electric bid and a solar pool-heating bid may both arrive under a solar heading. Separate them. Compare electric PV and storage against the electric bill, and compare pool-heating work against the equipment and fuel it replaces. For a seasonal home, use the actual occupancy pattern in both.",
    checks: [
      [
        "Electricity versus pool heating",
        "Identify whether each line item produces electricity or heats water; use the right bill baseline.",
      ],
      [
        "Seasonal use",
        "Request monthly output and imports based on occupied and unoccupied periods, plus cooling loads you actually maintain.",
      ],
      [
        "DCE and SCE settlement",
        "Show generation credits, delivery charges and each relevant true-up instead of one promised net bill.",
      ],
    ],
    provider: {
      name: "Suntrek",
      url: "https://www.suntreksolar.com/solar-company-in-palm-springs/",
      detail:
        "Its Palm Springs page separates PV/storage, pool heating, hot-water systems and panel removal/reinstallation.",
      ask: "Specify electric PV versus thermal equipment, roof work and the relevant DCE/SCE billing assumptions. Ask which service team would handle your property.",
    },
    sources: [
      {
        label: "DCE: solar customers and billing",
        url: "https://desertcommunityenergy.org/your-options/solar-customers/",
      },
      {
        label: "Palm Springs: online permits",
        url: "https://www.palmspringsca.gov/government/departments/building/permits",
      },
      {
        label: "Palm Springs: development and historic review departments",
        url: "https://www.palmspringsca.gov/government/departments/development-services",
      },
      {
        label: "Suntrek: published service scope",
        url: "https://www.suntreksolar.com/solar-company-in-palm-springs/",
      },
    ],
    nearby: ["palm-desert"],
    faq: [
      [
        "Does solar pool heating reduce my electricity bill like PV panels?",
        "It is a different system and comparison. Ask what existing pool-heating equipment or fuel it replaces, then evaluate electric PV separately.",
      ],
      [
        "Can DCE export credits cover every SCE charge?",
        "DCE states its solar credits cannot be applied to SCE charges. Have both portions of your bill shown in the proposal.",
      ],
    ],
  },
  livermore: {
    name: "Livermore",
    county: "Alameda County",
    utility: "pge",
    bill: "For a bill with Ava Community Energy generation, keep Ava and PG&E charges and credits distinct. Their annual true-ups can fall in different months. Check existing NEM or Solar Billing Plan status and use the actual rate schedule before comparing a new array or expansion.",
    local:
      "Livermore’s SolarAPP+ instructions include a separate city application and an explicit revision process. A changed panel layout or substituted design must be handled through the approved-document process. Ask who updates SolarAPP+ and the city record when a bid changes.",
    example:
      "The first quote may become a different project after the roof survey: fewer panels, a different inverter or a revised battery location. Ask for the revised price, production estimate and approved plan together. A signed original estimate does not tell you what the revised system will produce.",
    checks: [
      [
        "Design revisions",
        "Tie the quoted equipment and layout to the final approved plans; require revised pricing and production when they change.",
      ],
      [
        "Roof responsibility",
        "Price any roof repair, access or electrical work explicitly instead of leaving it as an allowance.",
      ],
      [
        "Billing calendar",
        "Show both Ava generation and PG&E delivery settlement assumptions for the account.",
      ],
    ],
    provider: {
      name: "Synergy Power",
      url: "https://www.synergypower.com/",
      detail:
        "Lists a Livermore address, Bay Area residential solar, battery storage, maintenance and case-study pages.",
      ask: "Confirm property coverage and ask for the final roof-specific design, storage scope and itemized total. Case-study savings are not estimates for your house.",
    },
    sources: [
      {
        label: "Ava: NEM billing and PG&E delivery relationship",
        url: "https://avaenergy.org/your-energy-options/plans-and-rates/rates/net-energy-metering/",
      },
      {
        label: "Ava: Solar Billing Plan",
        url: "https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/",
      },
      {
        label: "Livermore: SolarAPP+ applications and revisions",
        url: "https://www.livermoreca.gov/departments/community-development/permit-center/residential-photovoltaic/solarapp",
      },
      {
        label: "Synergy Power: published service scope",
        url: "https://www.synergypower.com/",
      },
    ],
    nearby: ["pleasanton"],
    faq: [
      [
        "What should happen when my Livermore solar design changes?",
        "Ask for updated equipment, output and pricing together with the revised permit documents. Livermore publishes a specific process for revisions to approved SolarAPP+ permits.",
      ],
      [
        "Can I compare a competitor’s Livermore case study with my quote?",
        "Use it to ask questions, not as your savings forecast. Your roof layout, usage, billing plan and contract price must drive your comparison.",
      ],
    ],
  },
  "palm-desert": {
    name: "Palm Desert",
    county: "Riverside County",
    utility: "other",
    bill: "Palm Desert’s General Plan identifies SCE across most of the city and IID in a limited portion. Read the electric bill before using either utility’s solar assumptions. The city name cannot settle the tariff, export treatment or interconnection process at your meter.",
    local:
      "Palm Desert uses its Clariti portal for current applications and publishes a separate solar-permit entry point. Its permit page directs owners of older eTRAKiT applications to the Development Services Center. Have the bidder identify where your project record lives and who manages inspections.",
    example:
      "If proposals for the same property name different utilities, stop the comparison there. Get the meter’s utility confirmed, then rerun each proposal on that utility’s current solar rules. For a home used seasonally, include the cooling and pool equipment left running when nobody is home.",
    checks: [
      [
        "SCE or IID meter",
        "Confirm the account provider before accepting any rate, export credit or approval schedule.",
      ],
      [
        "Roof material and attachments",
        "Ask for the attachment and waterproofing method for the actual roof, with roof repair and warranty responsibility stated.",
      ],
      [
        "Application record",
        "Identify Clariti or the existing application record, inspection responsibility and utility interconnection as separate scope items.",
      ],
    ],
    provider: {
      name: "Hot Purple Energy",
      url: "https://hotpurpleenergy.com/",
      detail:
        "Describes Coachella Valley solar projects, batteries, repairs and work across multiple roof materials.",
      ask: "Confirm Palm Desert address coverage, SCE or IID experience for this meter, roof attachment scope and the battery operating design.",
    },
    sources: [
      {
        label: "Palm Desert: General Plan electric service areas",
        url: "https://www.palmdesert.gov/build-develop/general-plan",
      },
      {
        label: "Palm Desert: current permit portal",
        url: "https://www.palmdesert.gov/build-develop/permit",
      },
      {
        label: "Palm Desert: solar forms and handouts",
        url: "https://www.palmdesert.gov/build-develop/forms",
      },
      {
        label: "Hot Purple Energy: published service scope",
        url: "https://hotpurpleenergy.com/",
      },
    ],
    nearby: ["palm-springs"],
    faq: [
      [
        "Does every Palm Desert home use SCE?",
        "No. The city’s General Plan identifies a limited IID service area as well. Use the name on your electric bill and have the bidder verify the meter.",
      ],
      [
        "Where should I look for my Palm Desert permit?",
        "The city directs current applications through Clariti and provides a solar application link. For an older eTRAKiT submission, follow its instructions to contact the Development Services Center.",
      ],
    ],
  },
  chico: {
    name: "Chico",
    county: "Butte County",
    utility: "pge",
    bill: "For a PG&E electric account, ask the proposal to name the actual tariff and any generation provider listed on the bill. Keep existing-system enrollment and new-system assumptions separate. A high bill could justify investigating solar, but it does not establish the right array size or battery configuration.",
    local:
      "Chico uses eTRAKiT for online permit services and digital plan submission. The city also directs mobile and manufactured-home owners to check whether the permit falls under state housing authority or city jurisdiction. Establish the authority before accepting an all-in installation schedule.",
    example:
      "If the property is a manufactured home, start with the permit authority, roof structure and mounting plan. Compare proposals only after those conditions match. For an existing array, separate diagnosis and repair from expansion; replacing an underperforming component may be a different decision from buying a larger system.",
    checks: [
      [
        "Property and jurisdiction",
        "Identify conventional or manufactured housing and confirm the responsible permit authority.",
      ],
      [
        "Existing equipment",
        "Request a diagnostic scope and production history before accepting replacement or expansion as the only option.",
      ],
      [
        "Storage goal",
        "List essential circuits and runtime assumptions, then show any bill-savings estimate separately.",
      ],
    ],
    provider: {
      name: "Alternative Energy Systems",
      url: "https://savingenergyforlife.com/",
      detail:
        "Lists a Chico campus and residential solar, battery storage, maintenance and repair services.",
      ask: "Confirm the property type, roof design and permitting responsibility. If you already have solar, ask for a repair assessment separately from a replacement proposal.",
    },
    sources: [
      {
        label: "Chico: permits, digital plans and manufactured homes",
        url: "https://chicoca.gov/Departments/Community-Development/Building-Division/Building-Permit-Information/",
      },
      {
        label: "PG&E: Solar Billing Plan",
        url: "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html",
      },
      {
        label: "Alternative Energy Systems: published service scope",
        url: "https://savingenergyforlife.com/",
      },
    ],
    nearby: ["rocklin"],
    faq: [
      [
        "Does Chico handle every manufactured-home solar permit?",
        "The city instructs owners to check with the California Department of Housing and Community Development to establish whether state or city jurisdiction applies. Confirm before finalizing the bid.",
      ],
      [
        "Should I replace an existing Chico solar system that produces less than expected?",
        "Start with the production history and a diagnostic scope. Ask what repair would cost and what an expansion would change, including utility enrollment and permit requirements.",
      ],
    ],
  },
  murrieta: {
    name: "Murrieta",
    county: "Riverside County",
    utility: "sce",
    bill: "Have each bidder use the electric utility and rate schedule printed on your bill. For an SCE account, distinguish the current Solar Billing Plan from confirmed legacy enrollment. Do not let a proposal for a nearby community determine your meter’s rate or export treatment.",
    local:
      "Murrieta’s current self-service instructions direct residential roof-mounted solar applications through SolarAPP+ and other permits through its CSS portal. The city also describes how revised documents reach the permit record and what must be available at inspection. Ask the bidder to own that handoff.",
    example:
      "Suppose the selected inverter or battery location changes after the permit is issued. Ask for revised plans, the updated production/backup model and confirmation that the city record was updated before inspection. An equipment substitution can affect more than the price.",
    checks: [
      [
        "Roof versus ground mount",
        "Identify the mounting type and applicable city application route instead of assuming every project uses the same review.",
      ],
      [
        "Inspection documents",
        "Name who maintains approved plans, inspection checklist and equipment specifications on site.",
      ],
      [
        "Post-quote changes",
        "Request written cost, output and backup changes when equipment or layout changes.",
      ],
    ],
    provider: {
      name: "New Day Solar",
      url: "https://www.newdaysolar.com/",
      detail:
        "Publishes a Murrieta solar installation site with residential solar and battery service information.",
      ask: "Confirm address coverage and separate roof-mounted or ground-mounted design, permit revisions and storage scope.",
    },
    sources: [
      {
        label: "Murrieta: SolarAPP+, CSS and inspection instructions",
        url: "https://www.murrietaca.gov/1368/Self--Issuing-Permits-Solar-App",
      },
      {
        label: "Murrieta: Permit Center",
        url: "https://www.murrietaca.gov/1330/Permit-Center",
      },
      {
        label: "SCE: Solar Billing Plan",
        url: "https://www.sce.com/residential/generating-your-own-power/solar-billing-plan",
      },
      {
        label: "New Day Solar: published service scope",
        url: "https://www.newdaysolar.com/",
      },
    ],
    nearby: ["palm-desert"],
    faq: [
      [
        "Does every Murrieta solar project follow the same application path?",
        "The city distinguishes residential roof-mounted solar applications from other permit types. Ask for the route appropriate to your actual mounting and electrical scope.",
      ],
      [
        "What should I receive after equipment is substituted?",
        "Ask for the revised written scope, price, output assumptions and approved documents. Murrieta’s instructions require revised SolarAPP+ documents to be added to the permit record.",
      ],
    ],
  },
  rocklin: {
    name: "Rocklin",
    county: "Placer County",
    utility: "pge",
    hasSavingsGuide: false,
    bill: "Rocklin’s electricity information identifies PG&E delivery and a choice of Pioneer Community Energy generation. Pioneer has separate guidance for legacy NEM and Solar Billing Plan customers. Read the enrollment and generation provider on your bill before comparing export credits.",
    local:
      "Rocklin’s Permit Center offers SolarAPP+ for projects meeting its requirements and directs other permit work through the city process. Have the bidder confirm eligibility for the actual roof, electrical service and storage design. A city service page is not an approved design for your home.",
    example:
      "If you compare a purchase proposal with Pioneer’s GridGen program, separate system ownership from the utility bill. GridGen describes solar-plus-storage and battery-retrofit options with charges on the utility bill and its own transfer/buyout terms. Compare total obligations, who services the system and what happens when the home is sold.",
    checks: [
      [
        "Pioneer and PG&E",
        "Show generation and delivery charges/credits under your actual enrollment.",
      ],
      [
        "Ownership or program",
        "State who owns the equipment, how charges appear and what transfer or buyout requires.",
      ],
      [
        "Electric PV scope",
        "Separate electric generation from solar pool/water heating and specify any battery or generator option.",
      ],
    ],
    provider: {
      name: "Aztec Solar",
      url: "https://aztecsolar.com/service-areas/rocklin/",
      detail:
        "Its Rocklin page lists electric PV, pool/water heating, inspections, battery installations and backup generators.",
      ask: "Confirm the electric-PV scope for your property and separate thermal solar, storage and generator prices. Verify the contracting business and current license independently.",
    },
    sources: [
      {
        label: "Rocklin: electric utility and generation options",
        url: "https://www.rocklin.ca.us/post/electricity-options",
      },
      {
        label: "Rocklin: Permit Center",
        url: "https://www.rocklin.ca.gov/301/Permit-Center",
      },
      {
        label: "Pioneer: understanding a solar bill",
        url: "https://pioneercommunityenergy.org/understanding-your-solar-bill/",
      },
      {
        label: "Pioneer: GridGen program structure and ownership",
        url: "https://pioneercommunityenergy.org/residential-programs/gridgen/",
      },
      {
        label: "Aztec Solar: published service scope",
        url: "https://aztecsolar.com/service-areas/rocklin/",
      },
    ],
    nearby: ["sacramento", "chico"],
    faq: [
      [
        "Is Rocklin solar billed under SMUD’s rules?",
        "Rocklin’s city page identifies PG&E delivery and Pioneer generation as an option. Check your own meter’s account; a Sacramento-area label does not make SMUD assumptions applicable.",
      ],
      [
        "Is a program charge on my utility bill the same as buying the system?",
        "No. Pioneer’s GridGen page describes separate ownership and transfer/buyout terms. Compare those written obligations with an outright purchase and other available contracts.",
      ],
    ],
  },
  camarillo: {
    name: "Camarillo",
    county: "Ventura County",
    utility: "sce",
    hasSavingsGuide: false,
    bill: "If your SCE bill includes Clean Power Alliance generation, compare both portions. CPA’s solar guidance describes circumstances where generation and delivery enrollment can differ for an existing system. Have the bidder check the account and interconnection history instead of assuming one label applies to everything.",
    local:
      "Camarillo’s earlier Click2Gov permit site now points new work to OpenGov and retains instructions for older active permits. Ask the contractor to name the current application record and inspection process. Include panel removal and reinstallation if roof work is part of the project.",
    example:
      "For a house with existing solar and a roof replacement ahead, request a removal/reinstallation quote alongside a replacement-system quote. Both should name the roof contractor, wiring work and reconnection steps. Then compare whether the proposed equipment change affects the CPA and SCE billing arrangements already in place.",
    checks: [
      [
        "Existing solar history",
        "Record the original interconnection documents and confirm CPA generation versus SCE delivery enrollment.",
      ],
      [
        "Roof work or new system",
        "Separate panel removal/reset, roof repair, new equipment and utility reconnection responsibilities.",
      ],
      [
        "Permit record",
        "Confirm OpenGov for new work or the appropriate older active permit process before relying on a completion date.",
      ],
    ],
    provider: {
      name: "Photon Brothers",
      url: "https://www.photonbrothers.com/central-coast/service-area/camarillo",
      detail:
        "Its Camarillo page lists solar installation, storage, EV charging, detach/reset work and maintenance.",
      ask: "Confirm your address, exact roof/reinstallation scope and CPA/SCE account treatment. Ask for cash and financing totals on the same equipment.",
    },
    sources: [
      {
        label: "CPA: rooftop solar generation and SCE delivery billing",
        url: "https://cleanpoweralliance.org/solar/",
      },
      {
        label: "CPA: Camarillo community page",
        url: "https://cleanpoweralliance.org/community/camarillo/",
      },
      {
        label: "Camarillo: permit system transition and active permits",
        url: "https://c2g.cityofcamarillo.org/Click2GovBP/index.html",
      },
      {
        label: "Photon Brothers: published service scope",
        url: "https://www.photonbrothers.com/central-coast/service-area/camarillo",
      },
    ],
    nearby: ["los-angeles"],
    faq: [
      [
        "Can CPA and SCE treat an existing Camarillo system differently?",
        "CPA’s solar guidance describes an enrollment window with CPA NEM generation and SCE Solar Billing Plan delivery. Ask both providers to confirm your account before changing the system.",
      ],
      [
        "Does a roof replacement quote include moving my solar panels?",
        "Only if the written scope says so. Name the businesses responsible for removal, roof work, reinstallation and reconnection, and request the warranty responsibilities in writing.",
      ],
    ],
  },
};
