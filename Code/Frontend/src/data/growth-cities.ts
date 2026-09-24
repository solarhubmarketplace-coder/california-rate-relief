// Reviewed local destinations. Existing city source remains intact for other routes.
// Sources default to 2026-09-10; newer entries set sourceCheckedDate.
// No provider endorsement, address coverage or rate implied.
//
// 2026-09-23 (topical-authority pass, cities agent). Four optional fields let a
// city carry the local facts that make its /solar-companies page its own page
// rather than a template with the city name swapped in:
//   answer    the direct answer that opens the page (replaces the generic intro)
//   keyFacts  the "Key facts" box: serving utility, generation provider (CCA),
//             building department. Every value names its publisher.
//   sections  extra H2 sections of local, sourced prose (utility/CCA billing,
//             the city's own permit path, local programs)
//   contentModified  the date the page copy last changed (dateModified)
// Utility and CCA assignments added that day were read from the California
// Energy Commission's Electric Load Serving Entities layers (IOU & POU, data
// edited 2026-09-04; Other/CCA, data edited 2025-08-28) intersected with the
// Census TIGERweb place boundary, then checked against the CCA's own list of
// member communities, because the CCA layer is a year older than the utility
// layer. Where the two disagreed, the CCA's own page wins and the copy says so.
export interface GrowthCitySection {
  heading: string;
  paragraphs: string[];
}

export interface GrowthCityKeyFact {
  label: string;
  value: string;
  note?: string;
  source?: { publisher?: string; date?: string; url?: string };
}

export interface GrowthCity {
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
  projectLinks?: { href: string; label: string; note?: string }[];
  provider?: { name: string; url: string; detail: string; ask: string };
  nearby?: string[];
  faq?: [string, string][];
  answer?: string;
  keyFacts?: GrowthCityKeyFact[];
  sections?: GrowthCitySection[];
  contentModified?: string;
}

export const growthCities: Record<string, GrowthCity> = {
  "san-francisco": {
    name: "San Francisco",
    county: "San Francisco County",
    utility: "pge",
    sourceCheckedDate: "2026-09-23",
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
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
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
        "What are the best solar companies in San Francisco and the Bay Area?",
        "No list on this site ranks them, and a company that ranks well online is not proof that it serves your block. In San Francisco the practical filter is whether the company can file DBI's S Permit through the registered electrical contractor portal and holds a CSLB license covering solar. Get at least three written bids on the same roof design and compare them line by line."
      ],
      [
        "What does CleanPowerSF pay for extra solar?",
        "CleanPowerSF credits annual net surplus at $0.0893 per kWh at its April true-up, per its net energy metering page. The credit moves to PG&E in January unless you request a check with its cash-out form."
      ],
      [
        "Should every San Francisco proposal assume CleanPowerSF generation?",
        "No. Read the provider and enrolled program on the current PG&E bill. The proposal should use that account information and show generation and delivery separately.",
      ],
      [
        "Does every San Francisco solar project use the same permit path?",
        "No. The current S Permit is described for qualifying R3 work. Ask the bidder to identify the path for your property and include roof, electrical, storage and inspection responsibilities in writing.",
      ],
    ],
    answer: "Solar companies working in San Francisco file for the City's digital S Permit through the Department of Building Inspection's registered electrical contractor portal, then connect the system to PG&E. For most homes, CleanPowerSF supplies the generation and credits surplus solar at its own rate. Compare written bids from at least three companies that can file that permit, using your own CleanPowerSF and PG&E bill.",
    keyFacts: [
      {
        "label": "Delivers the power",
        "value": "PG&E",
        "note": "Delivery charges, the meter and the monthly statement",
        "source": {
          "publisher": "CleanPowerSF",
          "date": "2026-09-23",
          "url": "https://cleanpowersf.org/understanding-my-bill"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "CleanPowerSF",
        "note": "Surplus credited at $0.0893/kWh at the annual true-up",
        "source": {
          "publisher": "CleanPowerSF",
          "date": "2026-09-23",
          "url": "https://cleanpowersf.org/net-energy-metering"
        }
      },
      {
        "label": "Building permit",
        "value": "DBI S Permit",
        "note": "Filed online by a registered electrical contractor",
        "source": {
          "publisher": "SF Department of Building Inspection",
          "date": "2026-09-23",
          "url": "https://www.sf.gov/new-solar-permit-cancelling-abandoned-otc-applications-recheck-escalation-reference-drawings-and-new-fee-rates"
        }
      }
    ],
    sections: [
      {
        "heading": "Who can file a San Francisco solar permit",
        "paragraphs": [
          "On September 2, 2025 the Department of Building Inspection introduced a digital solar permit, the S Permit, for R3 occupancies: single-family homes, duplexes and townhouses. The application is submitted only online, through DBI's registered electrical contractor portal, and the City departments involved review it at the same time in Bluebeam. Once it is approved and the remaining fees are paid, the contractor receives the permit by email, downloads the job card from the portal, and tracks plan review and schedules inspections there.",
          "That puts one practical question at the top of your list: is the company quoting your roof registered in that portal, or will it hand the filing to someone else? Ask who files the S Permit, who answers plan-review comments, and who meets the inspector. DBI raised some of its fees on the same date, so ask the bidder to show the permit charges as a separate line rather than folding them into the system price."
        ]
      },
      {
        "heading": "How CleanPowerSF credits a solar home",
        "paragraphs": [
          "Your PG&E statement carries two charges: PG&E's delivery charges and CleanPowerSF's generation charges, with a credit for the generation PG&E did not supply. CleanPowerSF says its customers apply for net metering through PG&E and are then served automatically by CleanPowerSF's own program.",
          "CleanPowerSF bills any generation not covered by credits every month, which avoids one large generation bill at year end, and reviews each solar account at the end of the April billing cycle. A customer who produced more than it used over the year receives Net Surplus Compensation, which CleanPowerSF currently pays at $0.0893 per excess kWh and describes as more than PG&E's rate. By default the credit is transferred to PG&E in January to cover PG&E charges; a customer can instead request a check with the online cash-out form, which for this cycle must reach CleanPowerSF by August 31, 2026.",
          "A proposal that promises a large annual surplus should therefore say what that surplus is worth at CleanPowerSF's rate, and should show the PG&E delivery charges you still pay. Ask for both numbers in writing."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  oakland: {
    name: "Oakland",
    county: "Alameda County",
    utility: "pge",
    sourceCheckedDate: "2026-09-23",
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
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
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
        "Are solar panels worth it in Oakland?",
        "That turns on your own usage, how much of your production you use as it is made, and the contract price, not on the city. In Oakland the numbers to check are Ava's generation credits (including its 3-to-8 p.m. export bonus for customers not on CARE or FERA), PG&E's delivery credits, and the E-ELEC rate a new solar customer is placed on. Ask each bidder to show those separately."
      ],
      [
        "When does an Oakland home battery need Fire Prevention approval?",
        "The City's solar page says a project needs Fire Prevention approval when a single battery exceeds 20 kWh, when combined storage exceeds 40 kWh in certain locations, or when more than 80 kWh of storage is installed outside."
      ],
      [
        "Does Ava replace PG&E for an Oakland solar account?",
        "Ava explains that it provides generation while PG&E continues transmission, distribution and billing. Use the current bill to confirm the account's provider and solar program before modeling a proposal.",
      ],
      [
        "Can an Oakland solar permit include a panel change or battery?",
        "Oakland says PV-dedicated panel, subpanel and storage work may be included in the solar application, while other electrical work may require a separate permit. Have the bidder identify the scope and route in writing.",
      ],
    ],
    answer: "An Oakland solar company can permit a standard rooftop job in two steps: an approval from SolarAPP+, then a permit through the City's Online Permit Center using that approval number. Most Oakland homes get generation from Ava Community Energy and delivery from PG&E, so a sound bid models both. Compare at least three written proposals on the permit route, the battery size and the two bills.",
    keyFacts: [
      {
        "label": "Delivers the power",
        "value": "PG&E",
        "note": "Wires, meter and the monthly statement",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "Ava Community Energy",
        "note": "The CEC map places Oakland's land area inside Ava's",
        "source": {
          "publisher": "Ava Community Energy",
          "date": "2026-09-23",
          "url": "https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/"
        }
      },
      {
        "label": "Battery fire review",
        "value": "Over 20 kWh per battery",
        "note": "Or 40 kWh combined in some locations, 80 kWh outdoors",
        "source": {
          "publisher": "City of Oakland",
          "date": "2026-09-23",
          "url": "https://www.oaklandca.gov/My-Household/Building-and-Remodeling/Homeowner-Projects-Permits/Solar-Energy-Systems-Facilities"
        }
      }
    ],
    sections: [
      {
        "heading": "Which Oakland jobs fit SolarAPP+, and which do not",
        "paragraphs": [
          "Oakland limits its SolarAPP+ route to rooftop systems on permitted main dwellings, installed by California-licensed contractors, with no ballasted racking. The contractor gets a SolarAPP+ approval, applies through the Online Permit Center with that approval number, and then books the inspection through the City's mobile app. SolarAPP+ may charge its own processing or subscription fee. Ground-mounted and ballasted systems, and commercial jobs, skip SolarAPP+ and go straight to the Online Permit Center.",
          "The City now lets a main service panel replacement, subpanels and a battery installed as part of the solar job ride on the same solar permit. Electrical work that is not dedicated to the solar system still needs its own electrical permit. Storage gets a size check: Oakland sends a project to Fire Prevention for approval when any single battery holds more than 20 kWh, when the combined storage exceeds 40 kWh in certain locations, or when more than 80 kWh is installed outdoors.",
          "Ask each bidder which route your job takes, whether the panel work is on the solar permit or a separate one, and whether its battery design stays under the Fire Prevention thresholds. A proposal that stacks two large batteries in a garage may trigger a review that another bid avoids."
        ]
      },
      {
        "heading": "Reading an Ava and PG&E solar bill in Oakland",
        "paragraphs": [
          "Oakland solar homes pay two companies on one statement. Ava buys the power and credits the generation portion of your exports; PG&E delivers it and credits the delivery portion, which Ava's own guide calls the Energy Delivered credits. The two sides settle separately: Ava's annual true-up is in April, while PG&E's depends on when your system was turned on.",
          "For a new system on the Solar Billing Plan, Ava requires the E-ELEC rate and pays a peak-hours bonus of $0.025 per kWh for exports between 3 and 8 p.m. if you are not on CARE or FERA; CARE and FERA customers get $0.01 per kWh extra on all exports instead. An Oakland proposal that shows one blended credit rate for every exported kWh is skipping that detail, so ask for the hourly assumption behind its savings figure."
        ]
      }
    ],
    contentModified: "2026-09-23",
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
    sourceCheckedDate: "2026-09-23",
    utility: "ladwp",
    bill: "Confirm whether the bill is from LADWP or another electric utility. LADWP publishes its own net energy metering rules. Do not apply the PG&E/SCE/SDG&E Net Billing Tariff to an LADWP account, or assume every Los Angeles County address has LADWP.",
    local:
      "LADWP separates rooftop solar, shared solar and other customer programs. A shared-solar offering is not a rooftop installation quote. Match the proposal to the meter and property you actually control.",
    example:
      "If a salesperson uses an SCE export-credit assumption for your LADWP bill, ask for a corrected comparison before judging the price. Identify the actual meter, tariff and billing period first.",
    sources: [
      {
        "label": "LADWP: Solar Rooftops program (payments, eligibility, ownership)",
        "url": "https://www.ladwp.com/residential-services/solar-programs/solar-rooftops"
      },
      {
        "label": "LADBS Information Bulletin P/GI 2026-003: Express Permits (No Plan Check Required)",
        "url": "https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/ib-p-gi-2020-003-express-permits_rev-5-28-2024.pdf"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        label: "LADWP solar programs",
        url: "https://www.ladwp.com/residential-services/solar-programs",
      },
      {
        label: "LADWP net energy metering service rider",
        url: "https://webprod.ladwp.com/account/customer-service/electric-rates/ev-nem-reo-rates",
      },
    ],
    faq: [
      [
        "Are solar panels worth it in Los Angeles?",
        "It depends on your LADWP bill, how LADWP's net energy metering rider credits your exports, and the contract you are offered, not on the city. Compare a purchase or lease quote with what LADWP's Solar Rooftops program would pay you for the roof ($360 to $900 a year for up to 20 years), and with doing nothing. If your bill comes from SCE, the answer uses SCE's rules instead."
      ],
      [
        "Do Los Angeles solar companies need a special permit?",
        "For rooftop systems of 10 kW or less on one- and two-family homes, LADBS issues Express Permits online to licensed contractors without plan check, under Information Bulletin P/GI 2026-003. Larger or non-standard systems need plan check. Ask your bidder which path it will use."
      ],
    ],
    checks: [
      [
        "Utility on the bill",
        "Name LADWP or SCE from the actual bill, and the LADWP rider or SCE tariff the savings figure uses."
      ],
      [
        "Permit path",
        "Say whether the design meets LADBS Express Permit limits or needs plan check, and who files it."
      ],
      [
        "Battery scope",
        "State whether the battery is AC-coupled and within the 10 kW AC express limit, and which circuits it backs up."
      ],
      [
        "The alternative",
        "Compare the offer with LADWP Solar Rooftops payments for your roof and with keeping your current bill."
      ]
    ],
    answer: "In the City of Los Angeles, a solar company's work runs through two local offices: LADBS, which issues Express Permits online to contractors for rooftop systems of 10 kW or less on one- and two-family homes, and LADWP, whose own net energy metering rider decides how your exports are credited. LADWP also offers Solar Rooftops, where it owns the panels and pays you for the roof. Weigh that against at least three written bids.",
    keyFacts: [
      {
        "label": "Electric utility",
        "value": "LADWP",
        "note": "Most of the city; CEC maps show SCE along parts of the boundary",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Solar export rules",
        "value": "LADWP NEM rider",
        "note": "LADWP's own schedule, not the CPUC Net Billing Tariff",
        "source": {
          "publisher": "LADWP",
          "date": "2026-09-23",
          "url": "https://webprod.ladwp.com/account/customer-service/electric-rates/ev-nem-reo-rates"
        }
      },
      {
        "label": "Express permit limit",
        "value": "10 kW rooftop",
        "note": "One- and two-family homes, online for contractors only",
        "source": {
          "publisher": "LADBS P/GI 2026-003",
          "date": "2026-09-23",
          "url": "https://dbs.lacity.gov/sites/default/files/efs/forms/pc17/ib-p-gi-2020-003-express-permits_rev-5-28-2024.pdf"
        }
      }
    ],
    sections: [
      {
        "heading": "LADWP sets its own solar rules",
        "paragraphs": [
          "Los Angeles is not PG&E, SCE or SDG&E territory for most addresses, so the statewide Net Billing Tariff that governs those three utilities does not describe an LADWP bill. LADWP credits customer-owned solar under its Net Energy Metering rider, in effect since September 1, 2008, for systems up to one megawatt. The rider measures electricity in both directions and bills the net amount when you draw more from the grid than you send back over the billing period.",
          "The California Energy Commission's service-territory map puts about nine-tenths of the land inside the city boundary in LADWP territory and shows Southern California Edison along parts of the edge. If your bill comes from SCE, this section does not apply to you: ask for a proposal built on SCE's rules instead, and read the utility name on the bill before trusting any savings figure."
        ]
      },
      {
        "heading": "Two LADWP options that are not a solar company quote",
        "paragraphs": [
          "Solar Rooftops is LADWP's program for owner-occupied homes on residential schedules R1-A, R1-B, R1-D or R1-E. LADWP inspects the roof and shading, designs a 1 to 10 kW system, pulls the LADBS permit and installs it. LADWP owns the panels and keeps all of the energy; you receive a fixed annual payment of $360 to $900 depending on system size, for up to 20 years, whatever the panels produce. LADWP puts the total at $7,200 to $18,000.",
          "That is a roof lease, not a way to lower your own bill with your own power, so it answers a different question from buying or leasing a system from a company. Shared Solar is the other option: it lets residents of apartments, condominiums and duplexes fix part of their electric bill for 10 years without a system on their own roof. If a company's proposal does not beat what one of these programs offers you, that is worth knowing before you sign."
        ]
      },
      {
        "heading": "What an LADBS Express Permit covers",
        "paragraphs": [
          "LADBS Information Bulletin P/GI 2026-003, effective January 1, 2026, lets licensed contractors pull a solar permit online without plan check when the system is rooftop-mounted on a one- or two-family dwelling, totals 10 kW or less, runs on a 120/240-volt single-phase service with a panel rated no more than 225 amps, and uses no more than two string inverters with four strings each, or microinverters on up to four branch circuits. Building-integrated panels and hybrid systems do not qualify, and a separate building permit may be needed for the structural support.",
          "A battery added to that system can also go through the online path if it is AC-coupled, rated no more than 10 kW AC and tied to the same size of service panel. Anything larger or more complex goes to plan check, which adds time. Ask each bidder which path its design uses and why."
        ]
      }
    ],
    contentModified: "2026-09-23",
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
    sourceCheckedDate: "2026-09-23",
    utility: "pge",
    bill: "Check PG&E delivery and the generation provider, which may be San José Clean Energy. SJCE’s generation billing and PG&E’s delivery billing are distinct. Confirm whether the account is on legacy NEM or a newer solar billing plan before comparing exports.",
    local:
      "San José publishes separate requirements for solar and storage battery projects, including its streamlined permit path. An existing roof or electrical service change can alter the project scope. Have the bidder identify that work in the quote.",
    example:
      "If competing quotes use different SJCE/PG&E billing assumptions, ask both to use your actual account enrollment and the same production profile. A larger array does not automatically produce a better financial result.",
    sources: [
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        label: "San José Clean Energy: solar billing and NEM",
        url: "https://sanjosecleanenergy.org/solar-billing-nem/",
      },
      {
        label: "City of San José: solar and battery projects",
        url: "https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/solar-storage-battery-projects",
      },
    ],
    faq: [
      [
        "Which solar companies operate in San José?",
        "Many do, and this page does not rank them or confirm that any one serves your street. A company doing the work must hold a CSLB license that covers solar and must pull a City permit through SJPermits for your address. Ask each bidder for its license number and for the permit it will file, then compare at least three written proposals."
      ],
      [
        "Is a San José solar bid supposed to use SJCE rates?",
        "If your PG&E statement shows San José Clean Energy as the generation provider, yes. SJCE's generation charges and solar credits sit inside the PG&E statement, and SJCE trues up in April, so the bid should model both companies."
      ],
    ],
    answer: "Any solar company that installs in San José has to get two approvals before the system can run: a City building permit through SJPermits and a PG&E interconnection. On most San José bills, San José Clean Energy (SJCE) supplies the generation and PG&E delivers it. Get at least three written bids built on your own SJCE and PG&E account, then compare them on the checks below.",
    keyFacts: [
      {
        "label": "Delivers the power",
        "value": "PG&E",
        "note": "Poles, wires, meter and the monthly statement",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "San José Clean Energy",
        "note": "Default provider for most city addresses; check your bill",
        "source": {
          "publisher": "San José Clean Energy",
          "date": "2026-09-23",
          "url": "https://sanjosecleanenergy.org/solar-billing-nem/"
        }
      },
      {
        "label": "Building permit",
        "value": "SJPermits",
        "note": "The City's online portal shows the fee and books inspections",
        "source": {
          "publisher": "City of San José",
          "date": "2026-09-23",
          "url": "https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/solar-storage-battery-projects"
        }
      }
    ],
    sections: [
      {
        "heading": "How SJCE and PG&E split a San José solar bill",
        "paragraphs": [
          "A San José solar home deals with two electricity companies at once. PG&E owns the lines and the meter and sends the statement; SJCE's generation charges and credits are printed inside that same PG&E statement. The California Energy Commission's service-territory map puts nearly all of the city inside both PG&E's delivery area and SJCE's generation area, so a proposal that models only PG&E generation rates is usually modeling the wrong company.",
          "SJCE says customers who applied for solar before April 14, 2023 keep NEM 2.0 for their 20-year legacy period, and anyone who applied on or after April 15, 2023 is on the Solar Billing Plan, where exports are credited at time-of-day Energy Export Credit values. SJCE runs its own annual true-up in April. For legacy NEM customers it pays $0.03575 per kWh of surplus as of April 1, 2026, which it describes as 25% higher than PG&E's rate.",
          "What that means for a quote: ask the bidder which plan your new system will land on (for a new system, the Solar Billing Plan), which true-up month it assumed for SJCE and for PG&E, and whether its savings figure counts SJCE's generation credits separately from PG&E's delivery credits. Two bids that disagree on those three points are not comparable."
        ]
      },
      {
        "heading": "San José's permit path for panels and batteries",
        "paragraphs": [
          "San José takes residential solar permit applications online through SJPermits.org, which presents the permit fee and accepts payment. The City's streamlined path is written for rooftop systems on single-family, duplex and townhouse properties that meet its listed criteria, including weight and height limits; a system outside those criteria needs a fuller review.",
          "Batteries get their own scrutiny. The City asks for a City-approved anchorage detail, or an approved master file, for the storage unit, and publishes bracket details sized for equipment from 200 to 1,200 pounds. Required inspections are listed on the permit card and are booked at SJPermits.org or by phone at 408-535-3555.",
          "Ask each bidder who holds the permit, whether its battery mounting matches a City-approved anchorage detail, and who will meet the inspector. A bid that leaves the permit to you, or that prices a battery without a mounting plan, is missing part of the job."
        ]
      }
    ],
    contentModified: "2026-09-23",
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
    sourceCheckedDate: "2026-09-23",
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
        "label": "City of El Cajon: residential photovoltaic permits through SolarAPP+",
        "url": "https://www.elcajon.gov/your-government/departments/community-development/building-fire-safety/photovoltaic"
      },
      {
        "label": "San Diego Community Power: net energy metering and Solar Billing Plan",
        "url": "https://sdcommunitypower.org/net-energy-metering/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
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
        "How long does an El Cajon solar permit take?",
        "The City says a conforming residential project can be permitted through its SolarAPP+ site in about 30 minutes, with no plans required. Batteries have been eligible for that route since January 2026. Projects that do not conform, and owner-builder projects, go through regular permitting."
      ],
      [
        "Do El Cajon solar customers have to change rate plans?",
        "Yes, for new systems. San Diego Community Power says Solar Billing Plan customers must be on the EV-TOU-5 time-of-use rate."
      ],
      [
        "Does a quick permit mean my El Cajon system can operate immediately?",
        "No. Have the installer identify the city completion steps and SDG&E interconnection approval separately. The contract schedule should cover both.",
      ],
      [
        "How do I compare a combined solar and cooling quote?",
        "Separate the equipment and installation prices. Ask which future cooling usage was assumed so the solar and HVAC projections do not both claim the same savings.",
      ],
    ],
    answer: "El Cajon issues rooftop solar permits through SolarAPP+ in about 30 minutes, with no plans required, and since January 2026 the same instant route covers home batteries. Only licensed contractors can use it, which makes the permit a quick test of the company quoting your roof. SDG&E delivers the power and San Diego Community Power supplies it. Compare three written bids on the checks below.",
    keyFacts: [
      {
        "label": "Permit route",
        "value": "SolarAPP+, about 30 minutes",
        "note": "Licensed contractors only; batteries eligible since January 2026",
        "source": {
          "publisher": "City of El Cajon",
          "date": "2026-09-23",
          "url": "https://www.elcajon.gov/your-government/departments/community-development/building-fire-safety/photovoltaic"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "San Diego Community Power",
        "note": "SDG&E delivers and sends the one bill",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "New solar rate",
        "value": "EV-TOU-5",
        "note": "Required for San Diego Community Power Solar Billing Plan customers",
        "source": {
          "publisher": "San Diego Community Power",
          "date": "2026-09-23",
          "url": "https://sdcommunitypower.org/net-energy-metering/"
        }
      }
    ],
    sections: [
      {
        "heading": "El Cajon's instant permit, and who can use it",
        "paragraphs": [
          "The City of El Cajon sends residential solar applicants to its SolarAPP+ online permit site. The City says a conforming project can be permitted in about 30 minutes with no plans required, that SolarAPP+ allows three free revisions, and that only projects matching the published eligibility list can use the automated route. Battery energy storage systems became eligible through SolarAPP+ in January 2026.",
          "Two conditions matter when you compare bids. The route is for licensed contractors and installers only; an owner-builder applies through regular permitting. And once the installer completes SolarAPP+'s inspection declaration and final review, the City says no other City inspections are required. That puts more weight on the installer's own inspection work, so ask each bidder who performs and signs that inspection and what documentation you will receive. The Building and Fire Safety Division is at 619-441-1726 or Building@elcajon.gov."
        ]
      },
      {
        "heading": "San Diego Community Power's rules for a new El Cajon system",
        "paragraphs": [
          "El Cajon customers receive one SDG&E bill, with San Diego Community Power shown as a line item for generation. A new system goes on the Solar Billing Plan, which San Diego Community Power says requires the highly differentiated EV-TOU-5 time-of-use rate, prices exports from the state's Avoided Cost Calculator rather than retail rates, bills monthly with no annual billing option, and locks the plan for nine years. Legacy NEM customers keep their plan for 20 years from permission to operate.",
          "At the annual true-up, San Diego Community Power adds a bonus of $0.0075 per kWh to SDG&E's surplus rate, sends a check when the surplus is over $100 and otherwise carries it forward. Ask each bidder to confirm it modeled EV-TOU-5 and the Solar Billing Plan export values, not a retail-rate credit."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  modesto: {
    name: "Modesto",
    county: "Stanislaus County",
    utility: "other",
    // 2026-09-22: every source below re-checked, and the TID split added.
    sourceCheckedDate: "2026-09-23",
    bill: "Check the electric utility first. MID describes its electric service area as the greater Modesto area north of the Tuolumne River, and the California Energy Commission’s service-territory map places part of the city in the Turlock Irrigation District’s territory. For a Modesto Irrigation District account, use MID’s own solar program and interconnection rules: MID says it currently offers only NEM 2, separate from the investor-owned utilities’ Solar Billing Plans. For a TID account, use TID’s own rules. A PG&E export model does not answer a Modesto homeowner’s question.",
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
        "label": "TID: Go Solar (self-generation rates, interconnection documents)",
        "url": "https://www.tid.org/customer-service/go-solar/"
      },
      {
        label: "MID: solar program and interconnection requirements",
        url: "https://www.mid.org/saving-energy-money/solar/",
      },
      {
        label: "MID: Who We Are (electric service area north of the Tuolumne River)",
        url: "https://www.mid.org/about-us/who-we-are/",
      },
      {
        label: "California Energy Commission: Electric Load Serving Entities (IOU & POU) service-territory map",
        url: "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about",
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
        "Does MID offer solar rebates?",
        "No. MID's solar program page says it does not offer solar rebates. It currently offers only NEM 2.0 for new solar interconnections."
      ],
      [
        "Can I get Modesto's expedited solar permit with a battery?",
        "Not under the City's expedited checklist, which is limited to utility-interactive systems of 10 kW AC or less without battery storage. A solar-plus-battery project goes through the standard permit review."
      ],
      [
        "Should an MID quote use statewide NEM assumptions?",
        "No. MID publishes its own solar program, sizing rules and interconnection process. Have each bidder name the applicable MID schedule.",
      ],
      [
        "Can a larger MID system be justified by an electric vehicle I may buy?",
        "MID’s current instructions say anticipated load is not considered. Ask MID and the bidder to confirm the allowed design from your demonstrated usage before committing.",
      ],
    ],
    answer: "Solar companies in Modesto answer to the electric district that serves the meter, not to PG&E. Most of the city is Modesto Irrigation District territory, where MID must approve the design before installation and caps system size at 115% of your demonstrated load; part of the city is Turlock Irrigation District territory, with its own rules. Get three written bids that name your district, then compare them on the checks below.",
    keyFacts: [
      {
        "label": "Electric utility",
        "value": "MID or TID",
        "note": "CEC map: about 78% of city land MID, 22% TID",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "MID size cap",
        "value": "115% of demonstrated load",
        "note": "Anticipated load is not counted",
        "source": {
          "publisher": "Modesto Irrigation District",
          "date": "2026-09-23",
          "url": "https://www.mid.org/saving-energy-money/solar/"
        }
      },
      {
        "label": "City expedited permit",
        "value": "10 kW AC, no battery",
        "note": "Filed in eTRAKiT; batteries take the standard route",
        "source": {
          "publisher": "City of Modesto",
          "date": "2026-09-23",
          "url": "https://www.modestogov.com/FormCenter/Building-Safety-and-Neighborhood-Preserv-26/Eligibility-Checklist-for-Expedited-Sola-420"
        }
      }
    ],
    sections: [
      {
        "heading": "MID's steps come before the panels go up",
        "paragraphs": [
          "MID lays out the order itself. The contractor submits a completed interconnection package to MID, in hard copy, and MID approves it or asks for corrections. Only then does the contractor pull the city or county permit and install. The contractor sends MID the final permit, MID performs its own inspection, and if that is clear MID installs the solar meter; after that the contractor can switch the system on. MID says an interconnection not completed within a year of its acknowledgment is cancelled, with one six-month extension available on request.",
          "MID offers NEM 2.0 today and does not offer solar rebates. Its sizing rule is the one most likely to separate two Modesto quotes: a system may not exceed 115% of the meter's annual demonstrated load, anticipated load is not considered, and oversized applications are mailed back to the contractor. MID's solar line is (209) 526-7582. A bidder that sized your system for an EV you have not bought yet should show you how the design fits that cap."
        ]
      },
      {
        "heading": "If your meter is on TID",
        "paragraphs": [
          "The Energy Commission's map places roughly a fifth of Modesto's land area in Turlock Irrigation District territory. TID tells customers that installing solar moves them to a self-generation rate schedule, and that each of those schedules carries customer, demand and time-of-use energy charges, with a monthly TID bill continuing after the system is on. TID asks its customers to call (209) 883-8254 or email solar@tid.org to go over those charges before signing a contract.",
          "A proposal written for an MID or PG&E account will not model a demand charge, so if your bill comes from TID, ask each bidder to rebuild its savings figure on TID's self-generation rate."
        ]
      },
      {
        "heading": "Modesto's expedited permit has limits",
        "paragraphs": [
          "The City of Modesto's expedited solar checklist, filed through eTRAKiT, applies to roof-mounted systems of 10 kW AC or less on one- or two-family homes that are utility-interactive and have no battery storage. The roof needs a single covering with no reroof overlay, the array may cover no more than half of the total roof area, and the plans must show three-foot fire access pathways and panels at least 18 inches from any hip or valley. If a home has a pool or other large load and a main service under 200 amps, the City requires electrical load calculations, and smoke and carbon monoxide alarms must be verified during the job.",
          "Any system with a battery, or any item on the checklist answered no, goes through the City's standard permit review instead. Ask each bidder which route its design uses; a battery quote that assumes expedited timing is assuming something the checklist rules out."
        ]
      }
    ],
    contentModified: "2026-09-23",
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
    sourceCheckedDate: "2026-09-23",
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
        "label": "City of Palm Springs Municipal Code ch. 8.100: small residential rooftop solar energy system permits",
        "url": "https://ecode360.com/42997503"
      },
      {
        "label": "City of Palm Springs Building and Safety: permit application forms",
        "url": "https://www.palmspringsca.gov/government/departments/building/permit-applications-forms"
      },
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
        "How fast can I get a solar permit in Palm Springs?",
        "For a small residential rooftop system (10 kW AC or less) that meets the City's checklist, Palm Springs Municipal Code chapter 8.100 requires the permit to be issued within three business days of a complete application."
      ],
      [
        "When does Desert Community Energy true up solar accounts?",
        "In May each year. DCE settles generation monthly, pays surplus at a rate matching SCE's, rolls credits under $100 to the next bill and cashes out $100 or more."
      ],
      [
        "Does solar pool heating reduce my electricity bill like PV panels?",
        "It is a different system and comparison. Ask what existing pool-heating equipment or fuel it replaces, then evaluate electric PV separately.",
      ],
      [
        "Can DCE export credits cover every SCE charge?",
        "DCE states its solar credits cannot be applied to SCE charges. Have both portions of your bill shown in the proposal.",
      ],
    ],
    answer: "Palm Springs law gives a qualifying rooftop solar system a fast lane: the City must issue the permit within three business days for a system of 10 kW AC or less that meets its checklist. Every Palm Springs home was enrolled in Desert Community Energy for generation, with SCE delivering the power, and DCE runs its own solar true-up in May. Compare at least three written bids built on your DCE and SCE bill.",
    keyFacts: [
      {
        "label": "Expedited permit",
        "value": "3 business days",
        "note": "Systems up to 10 kW AC under Municipal Code ch. 8.100",
        "source": {
          "publisher": "City of Palm Springs Municipal Code",
          "date": "2026-09-23",
          "url": "https://ecode360.com/42997503"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "Desert Community Energy",
        "note": "Palm Springs enrolled every residential customer; SCE delivers",
        "source": {
          "publisher": "Desert Community Energy",
          "date": "2026-09-23",
          "url": "https://desertcommunityenergy.org/your-options/solar-customers/"
        }
      },
      {
        "label": "DCE solar true-up",
        "value": "May",
        "note": "Credits of $100 or more are cashed out",
        "source": {
          "publisher": "Desert Community Energy",
          "date": "2026-09-23",
          "url": "https://desertcommunityenergy.org/your-options/solar-customers/"
        }
      }
    ],
    sections: [
      {
        "heading": "Palm Springs' three-day rule for small rooftop systems",
        "paragraphs": [
          "Chapter 8.100 of the Palm Springs Municipal Code covers small residential rooftop solar systems: 10 kW AC nameplate or less (or 30 kW thermal) and no taller than the legal building height. For those, the City's review is limited to whether the application meets local, state and federal code, the application must substantially follow the checklist and standard plans in the current California Solar Permitting Guidebook, and the permit must be issued within three business days once the application is complete. Fees follow the state limits the chapter cites. The City's Building and Safety forms list an Eligibility Checklist for Photovoltaic.",
          "A larger system, a ground mount or anything outside the checklist falls outside that guarantee. If one bidder's design is 11 kW and another's is 9.8 kW, ask whether the difference moves your permit off the three-day track, and what the smaller design gives up."
        ]
      },
      {
        "heading": "How Desert Community Energy settles a solar account",
        "paragraphs": [
          "Desert Community Energy says Palm Springs chose to enroll every residential and commercial customer automatically, so your SCE bill shows DCE for generation and SCE for transmission and delivery; DCE stresses that customers are not charged twice. Systems that received permission to operate before April 15, 2023 keep NEM 1.0 or 2.0 for the life of their term; newer systems are on SCE's Solar Billing Plan.",
          "DCE settles generation charges and credits monthly and trues up every solar account in May. Surplus is paid at DCE's Net Surplus Compensation rate, which matches SCE's; credits under $100 roll to the next bill and $100 or more is cashed out. For a seasonal home, ask each bidder to model the months you are actually there: power exported while the house sits empty earns export credits, which SCE says are worth less than the power you buy."
        ]
      }
    ],
    contentModified: "2026-09-23",
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
        "label": "Ava: SmartHome Battery (installation rebate and participation payments)",
        "url": "https://avaenergy.org/go-electric/residential-solar-storage/smarthome-battery/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
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
        "How do I find reliable solar installation companies in Livermore?",
        "Start with the CSLB license lookup for each company you are considering, then ask for three written proposals built on your own Ava and PG&E bill and the same roof layout. Ask who files the City's SolarAPP+ permit and who handles revisions, and, if you want a battery, whether the company is qualified for Ava's SmartHome Battery program. This page does not rank installers."
      ],
      [
        "Does Ava pay more than PG&E for solar exports in Livermore?",
        "For new systems on the Solar Billing Plan, Ava adds $0.025 per kWh for exports from 3 to 8 p.m. (customers not on CARE or FERA) and $0.01 per kWh for CARE and FERA customers, on top of the credits PG&E also provides."
      ],
      [
        "What should happen when my Livermore solar design changes?",
        "Ask for updated equipment, output and pricing together with the revised permit documents. Livermore publishes a specific process for revisions to approved SolarAPP+ permits.",
      ],
      [
        "Can I compare a competitor’s Livermore case study with my quote?",
        "Use it to ask questions, not as your savings forecast. Your roof layout, usage, billing plan and contract price must drive your comparison.",
      ],
    ],
    answer: "Solar companies in Livermore file through the City's SolarAPP+ process and connect to PG&E, while Ava Community Energy supplies generation for the whole city and adds its own export bonuses and battery incentives on top of PG&E's. The first thing to check in any Livermore bid is whether it counts those Ava credits correctly. Get three written proposals built on your own Ava and PG&E bill and compare them line by line.",
    keyFacts: [
      {
        "label": "Delivers the power",
        "value": "PG&E",
        "note": "Delivery charges, meter, statement and its own true-up",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "Ava Community Energy",
        "note": "The CEC map places all of Livermore in Ava's area; true-up in April",
        "source": {
          "publisher": "Ava Community Energy",
          "date": "2026-09-23",
          "url": "https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/"
        }
      },
      {
        "label": "Ava peak export bonus",
        "value": "$0.025/kWh, 3-8 p.m.",
        "note": "For customers not on CARE or FERA",
        "source": {
          "publisher": "Ava Community Energy",
          "date": "2026-09-23",
          "url": "https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/"
        }
      }
    ],
    sections: [
      {
        "heading": "What Ava adds to a new Livermore solar bill",
        "paragraphs": [
          "A system interconnected in Livermore today goes on the Solar Billing Plan, and Ava requires residential customers on that plan to take PG&E's E-ELEC rate. Grid imports are charged at the retail rate for that schedule; exports earn Energy Export Credits that change by hour and day. Ava says its policy follows PG&E's closely but pays more in two places: an extra $0.025 per kWh for exports between 3 and 8 p.m. for customers not on CARE or FERA, and an extra $0.01 per kWh on all exports for CARE and FERA customers.",
          "On top of those, the statewide Energy Export Bonus Credit is locked for nine years at the value for the year you interconnect. Ava lists it at $0.009 per kWh for a standard residential system interconnected in 2026, and $0.036 for income-qualified households. Ava settles its generation account every April; a surplus of $100 or more is paid out, typically in June or July through its vendor Choice Digital, and a smaller one rolls forward as a credit. PG&E settles its delivery account on its own date, which is often a different month.",
          "So ask each bidder three things: did it model the E-ELEC rate, did it count Ava's 3-to-8 p.m. bonus only on the exports that actually happen in those hours, and which true-up month did it assume for each company?"
        ]
      },
      {
        "heading": "Ava's SmartHome Battery program",
        "paragraphs": [
          "Ava runs SmartHome Battery for customers installing solar with a battery, adding a battery to existing solar, or enrolling a battery they already own. It has two parts: an installation rebate whose amount depends on household income, battery size and the capacity you agree to share with Ava's virtual power plant, and participation payments paid every three months for five years. Ava keeps a list of qualified installers and aggregators.",
          "If a Livermore bid includes a battery, ask whether the company is qualified for SmartHome Battery, whether its price already subtracts a rebate you have not been approved for, and how much of the battery's capacity the proposal assumes you will share during grid events. Those events use stored energy you might otherwise want for backup."
        ]
      }
    ],
    contentModified: "2026-09-23",
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
      [
        "Structure and authority",
        "Confirm whether the home is conventional or manufactured, which authority controls this installation, whether the mounting design is accepted for that structure, and who signs off on access, attachments and warranty responsibility.",
      ],
      [
        "Production assumptions",
        "Ask each bidder to identify the temperature, roof-plane and obstruction inputs in its monthly production estimate, alongside the household's seasonal use assumptions.",
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
        label: "Palm Desert: solar forms and handouts (manufactured-home and solar materials checked September 20, 2026)",
        url: "https://www.palmdesert.gov/build-develop/forms",
      },
      {
        label: "California HCD: manufactured-home modifications and alterations (checked September 20, 2026)",
        url: "https://www.hcd.ca.gov/mmh/residents/modifications-alterations",
      },
      {
        label: "Hot Purple Energy: published service scope",
        url: "https://hotpurpleenergy.com/",
      },
    ],
    projectLinks: [
      {
        href: "/blog/is-my-roof-good-for-solar-california",
        label: "Check whether the roof is suited to solar",
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
      [
        "Can a manufactured Palm Desert home use the same solar permit path as a conventional home?",
        "Do not assume so. Palm Desert publishes separate manufactured-home and solar materials, while California HCD regulates alterations of existing HUD-labeled manufactured homes. Confirm the property type, responsible authority and the proposed mounting and electrical scope before relying on a permit path.",
      ],
    ],
  },
  menifee: {
    name: "Menifee",
    county: "Riverside County",
    utility: "other",
    sourceCheckedDate: "2026-09-20",
    hasSavingsGuide: false,
    bill: "Read the utility name, tariff and any generation-provider line on the actual bill before comparing a proposal. A city name does not establish the account's provider or solar-billing treatment.",
    local:
      "Menifee's solar submittal requirements direct applicants to the permit portal. Eligible plans may use SolarAPP+, while the City distinguishes new solar from additions to existing systems and energy-storage work. Ask the bidder to identify the route and the approved scope for this property.",
    example:
      "Compare written bids only after the roof, electrical work, equipment ownership and project scope are clear. A lower payment can hide roof work, removal and reinstallation, backup equipment, or a different system design.",
    checks: [
      [
        "Roof work before a new array",
        "Ask whether roof repair or replacement belongs before the new array, who owns that scope, and whether it is included or excluded from the written bid.",
      ],
      [
        "Roof work with existing panels",
        "For an existing system, ask who owns the equipment, who may authorize work, and who accepts removal, reinstallation and warranty responsibility. Do not assume that a new-system bidder provides those services.",
      ],
      [
        "Outage goal and selected loads",
        "If backup is part of the project, name the selected loads, intended outage duration and the equipment proposed for that job. Keep backup capability separate from a bill-savings model.",
      ],
      [
        "New array and written bid scope",
        "Have each bidder list the proposed array, roof and electrical scope, permit responsibilities, monthly production assumptions, and every excluded item in writing.",
      ],
    ],
    projectLinks: [
      {
        href: "/blog/is-my-roof-good-for-solar-california",
        label: "Check whether the roof is suited to solar",
      },
      {
        href: "/blog/solar-panel-removal-reinstall-cost",
        label: "Questions to ask about panel removal and reinstallation",
      },
      {
        href: "/blog/do-solar-panels-work-during-power-outage-california",
        label: "What solar does during an outage",
      },
      {
        href: "/battery/home-battery-cost-california",
        label: "Home battery cost and backup scope",
      },
    ],
    sources: [
      {
        label: "City of Menifee: Solar Photovoltaic System Submittal Requirements (Version 1/26)",
        url: "https://www.cityofmenifee.us/DocumentCenter/View/4463/Solar-Photovoltaic-System-Submittal-Requirements",
      },
      {
        label: "City of Menifee: Building & Safety permit application and portal",
        url: "https://www.cityofmenifee.us/DocumentCenter/View/6511/Building--Safety-Permit-Application",
      },
    ],
    nearby: ["murrieta", "temecula", "palm-desert"],
    faq: [
      [
        "Does Menifee use one solar permit route for every project?",
        "No. Menifee's published requirements distinguish eligible SolarAPP+ plans from other plans, and distinguish new solar from additions to existing systems and energy-storage work. Confirm the route and approved scope for the actual project.",
      ],
      [
        "Should an existing solar system be handled like a new Menifee array?",
        "No. Confirm equipment ownership, authorization for roof work, removal and reinstallation responsibility, and warranty responsibility before treating an existing-system job as a new-array proposal.",
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
  riverside: {
    name: "Riverside",
    county: "Riverside County",
    utility: "other",
    sourceCheckedDate: "2026-09-12",
    bill: "Start with the provider printed on the current bill. Check the current RPU service-area map and the bill before a bidder applies RPU assumptions. If the provider remains uncertain, use SCE’s official lookup rather than inferring a provider from the city name. For an RPU account, RPU explains that grid-connected solar customers continue to receive utility bills.",
    local:
      "For an RPU-served address, RPU describes City permit approval and utility interconnection before operation. Have each bidder identify the actual permit authority, inspection sequence, interconnection application and meter work for this address. New solar, solar plus storage, roof-first work, an expansion to an existing system and a commercial project are different scopes. The written proposal should say which one it covers.",
    example:
      "Give every bidder the same twelve months of usage, serving utility, requested system size, roof layout, shade information and backup-load scope. Require each bidder to show its monthly production estimate and explain material differences. Get a separate cash price for solar, storage, roof and electrical work before comparing a loan, lease or PPA. Then compare total obligations, exclusions, service responsibility and the modeled remaining bill.",
    checks: [
      [
        "Serving utility",
        "Match the proposal to the provider and rate schedule on the current bill. Use the official RPU map or SCE lookup when the provider is uncertain; do not infer it from the city name.",
      ],
      [
        "Project type and handoffs",
        "State whether the bid covers new solar, solar plus storage, roof-first work, an existing-system expansion or a commercial project. Identify the permit, inspection, interconnection and meter responsibilities for that scope.",
      ],
      [
        "Comparable design",
        "Use the same requested DC system size, equipment class, roof planes, shade information and backup-load scope in each bid. Require each bidder to show its own monthly production estimate and explain material differences.",
      ],
      [
        "Itemized price and finance",
        "Separate the cash prices for solar, battery, roof, panel work, permits and interconnection. Compare financing only after the underlying cash scope matches.",
      ],
      [
        "Installer and service",
        "Name the legal contracting business, CSLB license, installation crew and company responsible for roof penetrations, equipment service and warranty claims. Confirm address coverage in writing.",
      ],
    ],
    sources: [
      {
        label: "Riverside Public Utilities: solar process, interconnection and ongoing bills",
        url: "https://www.riversideca.gov/utilities/residents/solar-info/all-about-solar",
      },
      {
        label: "Riverside Public Utilities: current electric rules and rates index",
        url: "https://www.riversideca.gov/utilities/residents/rates/electric-rules-rates",
      },
      {
        label: "Riverside Public Utilities: electric service-area map (checked 2026-09-20)",
        url: "https://riversideca.gov/utilities/about-rpu/service-area-maps",
      },
      {
        label: "SCE: service-area lookup (checked 2026-09-20)",
        url: "https://www.sce.com/customer-service-center/help-center/stop-start-move-service/faq/how-to-know-if-sce-is-my-electric-utility",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "Does every Riverside address use RPU?",
        "Do not assume that from the city name. Check the provider on the current bill and use the official RPU map or SCE lookup before applying a utility-specific rate or interconnection rule.",
      ],
      [
        "Will Riverside solar eliminate every utility bill?",
        "For an RPU account, RPU says grid-connected solar customers continue to receive utility bills. Ask the bidder to model remaining charges using the actual provider, usage and rate schedule.",
      ],
      [
        "Does every Riverside project have the same interconnection process?",
        "No. The utility and project scope control. The bidder should identify the permit, inspection, interconnection, equipment scope and responsible parties for the specific address.",
      ],
    ],
  },
  "san-luis-obispo": {
    name: "San Luis Obispo",
    county: "San Luis Obispo County",
    utility: "pge",
    sourceCheckedDate: "2026-09-12",
    bill: "Use the electricity provider, rate plan and any generation information printed on the actual bill. PG&E directs customers to its current rate plans and tariffs; a citywide average rate is not a substitute for the account details used in a proposal.",
    local:
      "San Luis Obispo publishes a SolarAPP+ permit route for eligible residential solar projects. Its process includes the SolarAPP+ approval document, a City application and inspection. Ask whether your roof, electrical scope and any storage work qualify, and have the bidder identify the actual permit path.",
    example:
      "Use the same full-year usage, roof layout and production assumptions in every proposal. Keep solar, battery, roof repairs, electrical work, permits and utility steps as separate line items. Compare total payment obligations with the modeled remaining bill.",
    checks: [
      [
        "Bill assumptions",
        "Use the provider and rate plan shown on the bill. Show energy use, onsite use, imports, exports and retained charges separately.",
      ],
      [
        "SolarAPP+ eligibility",
        "Ask whether the project is eligible for SolarAPP+ and whether storage, roof work or electrical changes require additional scope.",
      ],
      [
        "Comparable contract",
        "Match equipment, roof layout, warranty responsibility, cash price and financing terms across bids before selecting one.",
      ],
    ],
    sources: [
      {
        label: "City of San Luis Obispo: SolarAPP+ permit process",
        url: "https://www.slocity.org/government/department-directory/community-development/building-safety/permit-forms-and-applications/solar-documents",
      },
      {
        label: "PG&E: residential rate plans and tariff resources",
        url: "https://www.pge.com/en/account/rate-plans.html",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "Does every San Luis Obispo solar project use the same permit path?",
        "No. The City describes a SolarAPP+ route for eligible residential systems. Ask the bidder to state whether the actual project qualifies and list any additional review in writing.",
      ],
      [
        "Should a proposal use a San Luis Obispo average electric rate?",
        "Use the provider and rate plan shown on the account. PG&E publishes current rate-plan and tariff information, but a proposal still needs the customer's actual usage and enrollment.",
      ],
    ],
  },
  temecula: {
    name: "Temecula",
    county: "Riverside County",
    utility: "sce",
    sourceCheckedDate: "2026-09-12",
    bill: "Temecula's utility page identifies Southern California Edison for electricity. Use the provider and rate plan printed on the actual account when comparing bids. A high bill can start a solar conversation, but it does not by itself determine system size, production or savings.",
    local:
      "Temecula publishes SolarAPP+, expedited and standard photovoltaic plan-review paths. Its page says expansions to existing PV systems do not qualify for SolarAPP+ or expedited review. Ask the bidder to identify the correct path, the permit responsibility and any fire, roof, panel or battery scope before relying on a schedule.",
    example:
      "Ask every bidder to use the same full-year bill history, roof layout and equipment scope. Keep solar, storage, roof repair, electrical upgrades, permits and utility steps separate. Then compare cash and contract totals with the remaining utility bill, rather than comparing a monthly payment alone.",
    checks: [
      [
        "Account and usage",
        "Use the SCE plan and twelve months of usage printed on the actual account; list imports, exports and remaining bill assumptions separately.",
      ],
      [
        "Project path",
        "State whether the project uses SolarAPP+, expedited or standard review, and identify any exception for an existing-system expansion or storage scope.",
      ],
      [
        "Inspection and scope",
        "List permit, fire and building-inspection responsibilities, plus roof, electrical-panel and backup-circuit work.",
      ],
    ],
    sources: [
      {
        label: "City of Temecula: photovoltaic systems and permit paths",
        url: "https://temeculaca.gov/304/Photovoltaic-Systems",
      },
      {
        label: "City of Temecula: electric utility information",
        url: "https://www.temeculaca.gov/754/Utilities",
      },
      {
        label: "SCE: residential rate-plan information",
        url: "https://www.sce.com/customer-service-center/help-center/rate-plans-pricing/resources/rates-faq",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "Does every Temecula solar project qualify for SolarAPP+?",
        "No. Temecula lists SolarAPP+, expedited and standard paths and says existing-PV expansions do not qualify for SolarAPP+ or expedited review. Confirm the path for the actual scope.",
      ],
      [
        "Can I compare Temecula solar offers using monthly payment alone?",
        "No. Compare the written cash price or total payments, equipment, roof and electrical work, permit scope, production assumptions and remaining utility bill.",
      ],
    ],
  },
  murrieta: {
    name: "Murrieta",
    county: "Riverside County",
    utility: "sce",
    sourceCheckedDate: "2026-09-23",
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
        "label": "Murrieta Information Bulletin 125: residential solar photovoltaic permits ($450 fee)",
        "url": "https://www.murrietaca.gov/DocumentCenter/View/2399/Solar-Permits-Residential-IB-125"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
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
        "How much is a solar permit in Murrieta?",
        "Murrieta's residential solar bulletin (Information Bulletin 125, May 2022) states $450 for a residential solar PV permit, payable when the permit is issued. Ask the City whether a battery or other added equipment changes that, and check that each bid shows the fee."
      ],
      [
        "Is there a community choice energy provider in Murrieta?",
        "The California Energy Commission's service-territory map shows no community choice provider for Murrieta; SCE supplies and delivers the power. Confirm on your own bill."
      ],
      [
        "Does every Murrieta solar project follow the same application path?",
        "The city distinguishes residential roof-mounted solar applications from other permit types. Ask for the route appropriate to your actual mounting and electrical scope.",
      ],
      [
        "What should I receive after equipment is substituted?",
        "Ask for the revised written scope, price, output assumptions and approved documents. Murrieta’s instructions require revised SolarAPP+ documents to be added to the permit record.",
      ],
    ],
    answer: "Every solar company installing a residential roof-mounted system in Murrieta has to file it through SolarAPP+, and the City's bulletin puts the residential solar permit at $450. Murrieta homes are on Southern California Edison, and the Energy Commission's map shows no community choice provider here, so SCE's Solar Billing Plan sets how exports are paid. Compare three written bids against those two facts.",
    keyFacts: [
      {
        "label": "Electric utility",
        "value": "SCE",
        "note": "No community choice provider on the CEC map for Murrieta",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Permit route",
        "value": "SolarAPP+ required",
        "note": "For residential roof-mounted solar; zero-lot-line homes excluded",
        "source": {
          "publisher": "City of Murrieta",
          "date": "2026-09-23",
          "url": "https://www.murrietaca.gov/1368/Self--Issuing-Permits-Solar-App"
        }
      },
      {
        "label": "City permit fee",
        "value": "$450",
        "note": "Residential solar PV, per Information Bulletin 125 (May 2022)",
        "source": {
          "publisher": "City of Murrieta",
          "date": "2026-09-23",
          "url": "https://www.murrietaca.gov/DocumentCenter/View/2399/Solar-Permits-Residential-IB-125"
        }
      }
    ],
    sections: [
      {
        "heading": "Murrieta's permit route, and who it leaves out",
        "paragraphs": [
          "The City of Murrieta requires eligible residential roof-mounted solar applications to be submitted through SolarAPP+; every other permit type goes through the City's Customer Self-Service (CSS) portal. Homes with zero lot lines do not qualify for the SolarAPP+ permit type, so a townhome or zero-lot-line house takes the standard route. The City's page lists permit processing at 15 business days, and inspections run Monday through Friday, requested through the CSS portal by 4:30 p.m. for the next business day.",
          "Murrieta's residential solar bulletin (Information Bulletin 125, dated May 2022) states that a residential solar PV permit costs $450, paid when the permit is issued, covering plan review and inspection. The bulletin asks for an electrical plot plan with a single-line diagram and the existing main service size, manufacturer cut sheets, and a California-licensed engineer's letter on the racking, and it asks the applicant to list batteries and other added equipment on the cover sheet.",
          "Ask each bidder whether your house qualifies for SolarAPP+, whether its price includes the $450 City fee, and who will be on site for the inspection."
        ]
      },
      {
        "heading": "How SCE pays a new Murrieta solar home",
        "paragraphs": [
          "A new SCE solar customer goes on the Solar Billing Plan and the TOU-D-PRIME rate, where grid power costs the most on summer weekdays from 4 to 9 p.m. SCE says export credit values for new Solar Billing Plan customers are locked for nine years from the year they start, and customers who enroll before 2028 also receive an Energy Export Bonus Credit of about $0.04 per kWh, or about $0.09 per kWh for income-qualified households. Once a year SCE issues an annual settlement bill.",
          "Because those credits are worth less than the power you buy in the evening, SCE itself points out that storing solar for evening use is worth more than exporting it. In practice that means a Murrieta bid without a battery should show how much of your production you will use as it is made, and a bid with one should price the battery separately so you can see what it adds."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  rocklin: {
    name: "Rocklin",
    county: "Placer County",
    sourceCheckedDate: "2026-09-23",
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
        "label": "City of Rocklin: online solar permitting (SolarAPP+, eTRAKiT)",
        "url": "https://www.rocklin.ca.us/online-solar-permitting"
      },
      {
        "label": "Pioneer Community Energy: about Pioneer and member communities",
        "url": "https://pioneercommunityenergy.org/about-us/"
      },
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
        "Can a Rocklin solar permit with a battery go through SolarAPP+?",
        "No, not at present. The City's online solar permitting page says projects that include energy storage systems, and owner-builder projects, are not eligible for SolarAPP+ and go through the City's standard review."
      ],
      [
        "What does Pioneer pay for extra solar power in Rocklin?",
        "Pioneer pays Net Surplus Compensation at an extra half cent per kWh above PG&E's rate after its March or April annual review, by check if the amount is over $50 and as a bill credit otherwise."
      ],
      [
        "Is Rocklin solar billed under SMUD’s rules?",
        "Rocklin’s city page identifies PG&E delivery and Pioneer generation as an option. Check your own meter’s account; a Sacramento-area label does not make SMUD assumptions applicable.",
      ],
      [
        "Is a program charge on my utility bill the same as buying the system?",
        "No. Pioneer’s GridGen page describes separate ownership and transfer/buyout terms. Compare those written obligations with an outright purchase and other available contracts.",
      ],
    ],
    answer: "In Rocklin, a solar company files a rooftop panel job through SolarAPP+ for an extra $25, then pulls the City permit and books inspections in eTRAKiT; any job that includes a battery, and any owner-builder job, takes the City's standard review instead. PG&E delivers your power and Pioneer Community Energy supplies it, with a small bonus on year-end surplus. Get three written bids and compare them on the checks below.",
    keyFacts: [
      {
        "label": "Supplies the generation",
        "value": "Pioneer Community Energy",
        "note": "Rocklin is a Pioneer member city; PG&E delivers",
        "source": {
          "publisher": "Pioneer Community Energy",
          "date": "2026-09-23",
          "url": "https://pioneercommunityenergy.org/about-us/"
        }
      },
      {
        "label": "SolarAPP+ fee",
        "value": "$25",
        "note": "Paid to SolarAPP+; City permit fees apply on top",
        "source": {
          "publisher": "City of Rocklin",
          "date": "2026-09-23",
          "url": "https://www.rocklin.ca.us/online-solar-permitting"
        }
      },
      {
        "label": "Batteries on SolarAPP+",
        "value": "Not eligible",
        "note": "Solar with storage goes through standard review",
        "source": {
          "publisher": "City of Rocklin",
          "date": "2026-09-23",
          "url": "https://www.rocklin.ca.us/online-solar-permitting"
        }
      }
    ],
    sections: [
      {
        "heading": "Rocklin's online permit, and what it leaves out",
        "paragraphs": [
          "Rocklin's online solar page walks a contractor through six steps: create a SolarAPP+ account, submit the plans, pay SolarAPP+'s $25 fee, upload the approved plans to the City's eTRAKiT system, pay the City's own permit fees, and, once eTRAKiT issues the permit, install and schedule inspections through eTRAKiT or by calling the Building Division at (916) 625-5120. City permit fees and inspections apply in addition to the SolarAPP+ charge.",
          "The page is explicit about two exclusions: owner-builder projects and projects that include an energy storage system are not eligible for SolarAPP+ at this time. So a Rocklin quote for panels alone and a quote for panels plus a battery follow different permit paths, and the second one takes longer. Ask each bidder which path it has assumed and whether its timeline allows for standard review if a battery is in the scope."
        ]
      },
      {
        "heading": "What Pioneer adds for a Rocklin solar home",
        "paragraphs": [
          "Pioneer Community Energy has served Rocklin since its 2018 launch alongside Auburn, Colfax, Lincoln, Loomis and most of unincorporated Placer County. A system installed since April 15, 2023 is on the Solar Billing Plan, where Pioneer values exports at a variable export rate and positive charges are paid monthly; older systems on net energy metering earn retail credits that roll forward month to month.",
          "Pioneer reviews each solar account over the past twelve months during the March or April billing cycle and pays Net Surplus Compensation at half a cent per kWh more than PG&E's rate. A surplus worth more than $50 is paid by check; a smaller one becomes a bill credit. Because that bonus is small, the decision rests on how much of your own usage the system covers, so ask each bidder to show monthly production against your monthly use."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  camarillo: {
    name: "Camarillo",
    county: "Ventura County",
    sourceCheckedDate: "2026-09-23",
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
        "label": "City of Camarillo: solar eligibility checklist (expedited review)",
        "url": "https://cms7files.revize.com/camarilloca/Departments/Building%20&%20Safety/handouts/Solar%20Eligibility%20checklist.pdf"
      },
      {
        "label": "Clean Power Alliance: Camarillo community page",
        "url": "https://cleanpoweralliance.org/place/camarillo/"
      },
      {
        "label": "Clean Power Alliance: net energy metering and Solar Billing Plan",
        "url": "https://cleanpoweralliance.org/nem/"
      },
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
        "Can a Camarillo solar project with a battery use the expedited permit?",
        "No. The City's solar eligibility checklist limits expedited review to utility-interactive systems without battery storage, 10 kW AC or smaller, roof-mounted on a home or accessory structure. A battery project goes through standard review."
      ],
      [
        "Who supplies electricity in Camarillo?",
        "SCE delivers the power and sends the bill; Clean Power Alliance supplies the generation, with 100% Green as Camarillo's default option."
      ],
      [
        "Can CPA and SCE treat an existing Camarillo system differently?",
        "CPA’s solar guidance describes an enrollment window with CPA NEM generation and SCE Solar Billing Plan delivery. Ask both providers to confirm your account before changing the system.",
      ],
      [
        "Does a roof replacement quote include moving my solar panels?",
        "Only if the written scope says so. Name the businesses responsible for removal, roof work, reinstallation and reconnection, and request the warranty responsibilities in writing.",
      ],
    ],
    answer: "Camarillo's expedited solar review is narrow: it covers roof-mounted systems of 10 kW AC or less, on a home or accessory structure, with no battery and a service panel bus rated 225 amps or less. A solar installation company that adds a battery or a larger array will be on the standard review. Clean Power Alliance supplies Camarillo's generation at its 100% Green default, with SCE delivering. Compare three written bids on those terms.",
    keyFacts: [
      {
        "label": "Expedited review limit",
        "value": "10 kW AC, no battery",
        "note": "Roof-mounted, 225 A bus or less, two central inverters max",
        "source": {
          "publisher": "City of Camarillo",
          "date": "2026-09-23",
          "url": "https://cms7files.revize.com/camarilloca/Departments/Building%20&%20Safety/handouts/Solar%20Eligibility%20checklist.pdf"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "Clean Power Alliance",
        "note": "Camarillo default: 100% Green, serving since 2019",
        "source": {
          "publisher": "Clean Power Alliance",
          "date": "2026-09-23",
          "url": "https://cleanpoweralliance.org/place/camarillo/"
        }
      },
      {
        "label": "CPA surplus rate",
        "value": "10% above SCE's",
        "note": "April true-up for Solar Billing Plan customers",
        "source": {
          "publisher": "Clean Power Alliance",
          "date": "2026-09-23",
          "url": "https://cleanpoweralliance.org/nem/"
        }
      }
    ],
    sections: [
      {
        "heading": "What Camarillo's expedited checklist allows",
        "paragraphs": [
          "Camarillo's solar eligibility checklist sets the line between a fast review and a standard one. To qualify, the system must be 10 kW AC (CEC rating) or less, utility-interactive with no battery storage, roof-mounted on a one- or two-family dwelling or accessory structure, and no taller than the legal building height. Electrically, it must tie into a single-phase service panel with a bus bar rated 225 amps or less, use no more than two central inverters, and keep to four strings per MPPT input where the inverter has source-circuit fusing (two where it does not). The plans must show clear fire access pathways, the fire classification of the system and all required labels.",
          "Any item answered no means a design revision or the standard, non-expedited review. That makes the checklist a practical way to compare two Camarillo bids: if one design stays inside it and another adds a battery or a larger inverter setup, the second will take longer to permit, and that time belongs in the schedule you are promised."
        ]
      },
      {
        "heading": "Clean Power Alliance on a Camarillo solar bill",
        "paragraphs": [
          "Camarillo has been a Clean Power Alliance community since 2019, with 100% Green as its default option. CPA applies generation charges and credits on its side of the SCE bill and SCE handles the delivery side. Systems SCE approved on or before August 31, 2023 stay on net energy metering; later ones are on the Solar Billing Plan, which CPA trues up every April.",
          "At true-up CPA pays surplus at rates it describes as 10% higher than SCE's, mailing a check for credits over $100. Existing-system owners replacing a roof should keep that enrollment in mind: ask any bidder who proposes new equipment whether the change affects the system's current billing plan before you sign."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  sonoma: {
    name: "Sonoma",
    county: "Sonoma County",
    utility: "pge",
    sourceCheckedDate: "2026-09-23",
    hasSavingsGuide: false,
    bill: "Sonoma homes get delivery from PG&E and generation, by default, from Sonoma Clean Power, the community choice provider for Sonoma and Mendocino counties; the Energy Commission's map places the City of Sonoma inside both. Have each bidder model your actual Sonoma Clean Power and PG&E enrollment and show the two halves of the bill separately.",
    local: "The City of Sonoma uses SolarAPP+ for residential, roof-mounted, retrofit solar and storage, with instant plan review and a processing fee charged by SolarAPP+; batteries also have a separate expedited energy storage permit. The City says permits usually take 2 to 5 business days and inspections can often happen the next business day, booked by phone at 707-938-3681. Homes outside city limits use Permit Sonoma, the county's process.",
    example: "Give each bidder the same year of bill history and the same roof layout. Then compare the system design, roof and electrical work, the permit route (city SolarAPP+ or Permit Sonoma), the contract total and the remaining Sonoma Clean Power and PG&E charges side by side. A lower monthly payment does not show the full agreement.",
    checks: [
      [
        "Account details",
        "Use the rate plan, generation provider and solar enrollment on the current bill; list remaining charges and assumptions separately.",
      ],
      [
        "Permit design",
        "Ask for the submitted design, permit responsibility and any city or utility step that is excluded from the signed scope.",
      ],
      [
        "Roof and electrical work",
        "Separate roof repair, service-panel work, storage and backup-circuit work from the core solar price.",
      ],
    ],
    sources: [
      {
        "label": "City of Sonoma: expedited solar permitting for one- and two-family dwellings (SolarAPP+)",
        "url": "https://www.sonomacity.org/expedited-solar-permitting-one-two-family-dwellings/"
      },
      {
        "label": "Permit Sonoma: solar permits (unincorporated Sonoma County)",
        "url": "https://permitsonoma.org/divisions/engineeringandconstruction/building/solarpermits"
      },
      {
        "label": "Sonoma Clean Power: solar customers",
        "url": "https://sonomacleanpower.org/solar-customers"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "CSLB: Solar Smart license and consumer information",
        "url": "https://www.cslb.ca.gov/solar"
      }
    ],
    faq: [
      [
        "Who issues solar permits in Sonoma?",
        "The City of Sonoma for addresses inside city limits, using SolarAPP+ for rooftop solar and storage; Permit Sonoma for unincorporated Sonoma County, using its own SolarAPP+ route for rooftop systems of 10 kW or less. Confirm which applies to your address."
      ],
      [
        "What does Sonoma Clean Power pay for extra solar?",
        "SCP pays surplus at the Net Surplus Compensation rate each spring, up to $5,000 a year, by check if over $200 and as a bill credit otherwise. Its net energy metering program is closed to new customers, who go on the Solar Billing Plan."
      ],
      [
        "Does the permit plan cover roof and electrical work automatically?",
        "Only the written project scope can answer that. Have the bidder identify the permit route, submitted design, roof work, electrical work and exclusions before comparing totals."
      ]
    ],
    answer: "Solar companies in Sonoma pull permits from one of two offices, depending on the address: the City of Sonoma, which runs SolarAPP+ and usually issues permits in 2 to 5 business days, or Permit Sonoma for the unincorporated county. Either way, Sonoma Clean Power supplies the generation and PG&E delivers it. Get three written bids that name the right permit office and your actual bill, then compare them.",
    keyFacts: [
      {
        "label": "Supplies the generation",
        "value": "Sonoma Clean Power",
        "note": "PG&E delivers the power",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "City permit time",
        "value": "Usually 2 to 5 business days",
        "note": "City of Sonoma, SolarAPP+ for rooftop solar and storage",
        "source": {
          "publisher": "City of Sonoma",
          "date": "2026-09-23",
          "url": "https://www.sonomacity.org/expedited-solar-permitting-one-two-family-dwellings/"
        }
      },
      {
        "label": "SCP surplus cap",
        "value": "$5,000 a year",
        "note": "Checks over $200; bill credit at $200 or less",
        "source": {
          "publisher": "Sonoma Clean Power",
          "date": "2026-09-23",
          "url": "https://sonomacleanpower.org/solar-customers"
        }
      }
    ],
    sections: [
      {
        "heading": "City of Sonoma or Permit Sonoma: which office issues your permit",
        "paragraphs": [
          "Inside city limits, the City of Sonoma uses SolarAPP+ for residential, roof-mounted, retrofit photovoltaic systems and storage, which gives an instant plan review; SolarAPP+ charges its own processing fee. The City runs a separate expedited permit for battery energy storage systems. It says approved permits usually issue in 2 to 5 business days and that inspections can often be done the next business day, requested by calling 707-938-3681 at least a business day ahead with the permit number, address and inspection type.",
          "Outside city limits, Permit Sonoma handles the job. Its SolarAPP+ route covers rooftop systems of 10 kW or less on one- and two-family homes, is open to licensed contractors only (owner-builders use the regular process), and asks for the system's fire classification and label locations, since all roof-mounted systems must meet State Fire Marshal requirements. Inspection requests made before midnight are usually scheduled for the next business day. Ask each bidder which office your address belongs to before comparing timelines."
        ]
      },
      {
        "heading": "Sonoma Clean Power's rules for new solar",
        "paragraphs": [
          "Sonoma Clean Power's net energy metering program is closed to new customers, so a new system goes on its Solar Billing Plan. Each spring SCP pays customers for surplus energy sent to the grid at the Net Surplus Compensation rate, up to $5,000 a year: more than $200 arrives as a check, and $200 or less appears as a bill credit.",
          "That cap and those thresholds only matter if a system overproduces for the year, which a system sized to your usage should not. The bigger question for a Sonoma bid is how much of your own daytime use it covers, so ask each bidder to show monthly production next to your monthly use."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  ventura: {
    name: "Ventura",
    county: "Ventura County",
    utility: "sce",
    sourceCheckedDate: "2026-09-12",
    hasSavingsGuide: false,
    bill: "Use the electricity provider and rate schedule shown on the account. A proposal should model the actual usage history and show the utility charges that remain after installation instead of treating a citywide average as a project result.",
    local:
      "Ventura publishes an instant-permit route for eligible contractor-submitted residential rooftop PV and an online permit process for projects outside that route. Ask who submits the plans, which permit path applies and how the bidder will handle inspection, roof work and electrical changes.",
    example:
      "Use the same roof layout, annual bill history and equipment scope in each proposal. Keep solar, storage, roof repairs, service work, permits and inspections on separate lines. Compare the full written obligations before comparing any advertised payment.",
    checks: [
      [
        "Bill and system model",
        "Use the account's actual rate plan and usage history, with output, imports, exports and remaining charges identified separately.",
      ],
      [
        "Permit route",
        "Ask whether the project uses the City's instant-permit route or Ventura OPS and identify the party responsible for plans, payment and inspection scheduling.",
      ],
      [
        "Roof and electrical scope",
        "Separate roof work, service or subpanel changes, storage and backup circuits from the core array proposal.",
      ],
    ],
    sources: [
      {
        label: "City of Ventura: photovoltaic information and permit routes",
        url: "https://www.cityofventura.ca.gov/300/Photovoltaic-Information",
      },
      {
        label: "City of Ventura: contractor solar permits and inspections",
        url: "https://www.cityofventura.ca.gov/2554/Contractor-Solar-Permits-SB-379",
      },
      {
        label: "SCE: residential rate-plan information",
        url: "https://www.sce.com/customer-service-center/help-center/rate-plans-pricing/resources/rates-faq",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "Does every Ventura rooftop project use the instant permit route?",
        "No. Ventura describes an instant route for eligible contractor-submitted projects and directs other scopes to its online process. Ask the bidder to name the route for the address and design.",
      ],
      [
        "Can I compare Ventura solar offers from the monthly payment alone?",
        "No. Compare the contract total, equipment, roof and electrical scope, permit duties, production assumptions and remaining utility charges in writing.",
      ],
    ],
  },
  "grass-valley": {
    name: "Grass Valley",
    county: "Nevada County",
    utility: "pge",
    sourceCheckedDate: "2026-09-23",
    hasSavingsGuide: false,
    bill: "Grass Valley became part of Pioneer Community Energy's service area in 2024, so on most bills Pioneer now supplies the generation and PG&E delivers it. A proposal written before that change, or one that models PG&E generation only, is modeling the wrong account. Use the provider and rate plan printed on your current bill and your full year of usage.",
    local: "Grass Valley takes residential rooftop solar through SolarAPP+, which charges a $25 administration fee, but a SolarAPP+ pre-approval is not a permit: the contractor must then apply for the City permit in Accela Citizen Access as an Express Permit, pay the City's separate fees, and book the inspection in the same portal. Ask the bidder who handles each step and whether the $25 is in its price.",
    example:
      "Put the same full-year bill history, roof layout and equipment choice into each proposal. Then separate solar, storage, roof repair, electrical work, permit work and utility steps. Compare the signed scope with the remaining-bill model, not a single payment figure.",
    checks: [
      [
        "Usage and rate plan",
        "Use the actual account and rate plan. Ask for a monthly production and remaining-bill model with its inputs shown.",
      ],
      [
        "City documents",
        "Ask who prepares the residential checklist and plans, submits the permit and schedules the required inspections.",
      ],
      [
        "Comparable scope",
        "Keep roof work, electrical work, storage, permits and warranty responsibility visible as separate parts of each written quote.",
      ],
    ],
    sources: [
      {
        "label": "City of Grass Valley: SolarAPP+ Submittals",
        "url": "https://www.grassvalleyca.gov/pod/solarapp-submittals"
      },
      {
        "label": "Pioneer Community Energy: about Pioneer and its service area",
        "url": "https://pioneercommunityenergy.org/about-us/"
      },
      {
        "label": "Pioneer Community Energy: understanding your solar bill",
        "url": "https://pioneercommunityenergy.org/understanding-your-solar-bill/"
      },
      {
        label: "City of Grass Valley: building permits, solar permits and residential checklist",
        url: "https://www.grassvalleyca.gov/post/apply-building-permit",
      },
      {
        label: "City of Grass Valley: residential solar-PV plan submittal checklist",
        url: "https://www.cityofgrassvalley.com/sites/main/files/file-attachments/residential_solar_pv_submittal_checklist_202001071103529016.pdf?1587599826=",
      },
      {
        label: "PG&E: current residential rate plans and tariff resources",
        url: "https://www.pge.com/en/account/rate-plans.html",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "Is Grass Valley served by Pioneer Community Energy?",
        "Yes. Pioneer says it added the cities of Grass Valley and Nevada City to its service area in 2024. PG&E still delivers the power and sends the bill."
      ],
      [
        "Is a SolarAPP+ approval a Grass Valley building permit?",
        "No. The City says that after SolarAPP+ issues a pre-approval, the applicant must obtain a City permit through Accela Citizen Access, where the City's separate solar permit fees are charged and the inspection is scheduled."
      ],
      [
        "Does every Grass Valley solar proposal include the same permit work?",
        "No. The City lists a residential solar checklist and permit documents, but the bidder must identify the actual submitted scope, permit holder and inspection responsibilities for the address.",
      ],
      [
        "Should a Grass Valley solar quote use a generic utility rate?",
        "No. Use the rate plan and usage history on the account. A useful proposal shows its actual bill and production assumptions instead of substituting a city average.",
      ],
    ],
    answer: "A solar company installing in Grass Valley runs the design through SolarAPP+ for a $25 administration fee, then pulls the City's Express Permit in Accela Citizen Access and schedules the inspection there. Since 2024 Grass Valley has been in Pioneer Community Energy's service area, so Pioneer's solar rules sit alongside PG&E's. Compare three written bids that model your current bill, not an older PG&E-only one.",
    keyFacts: [
      {
        "label": "Supplies the generation",
        "value": "Pioneer Community Energy",
        "note": "Grass Valley joined Pioneer's service area in 2024; PG&E delivers",
        "source": {
          "publisher": "Pioneer Community Energy",
          "date": "2026-09-23",
          "url": "https://pioneercommunityenergy.org/about-us/"
        }
      },
      {
        "label": "SolarAPP+ fee",
        "value": "$25",
        "note": "City permit fees are separate",
        "source": {
          "publisher": "City of Grass Valley",
          "date": "2026-09-23",
          "url": "https://www.grassvalleyca.gov/pod/solarapp-submittals"
        }
      },
      {
        "label": "City permit",
        "value": "Express Permit, Accela",
        "note": "Required after the SolarAPP+ pre-approval",
        "source": {
          "publisher": "City of Grass Valley",
          "date": "2026-09-23",
          "url": "https://www.grassvalleyca.gov/pod/solarapp-submittals"
        }
      }
    ],
    sections: [
      {
        "heading": "Two approvals for a Grass Valley rooftop system",
        "paragraphs": [
          "Grass Valley's SolarAPP+ page is written for installers and is clear that the automated review is only half the job. SolarAPP+ checks a residential, roof-mounted retrofit design against the code and charges a $25 administration fee. After it issues a pre-approval, the applicant must still obtain a City permit: in Accela Citizen Access, choose Express Permit, enter the SolarAPP+ approval ID and attach its documents. The City's own solar permit fees are charged through that application, and the inspection is scheduled in the same portal.",
          "Ask each bidder whether its design fits SolarAPP+'s eligibility checklist or will need a full plan review, and who will be in Accela doing the filing. A bid that treats the SolarAPP+ approval as the finished permit has skipped a step."
        ]
      },
      {
        "heading": "Pioneer's rules now apply in Grass Valley",
        "paragraphs": [
          "Pioneer Community Energy launched in 2018 in Auburn, Colfax, Lincoln, Rocklin, Loomis and most of unincorporated Placer County, added unincorporated El Dorado County and Placerville in 2022, and brought in Grass Valley and Nevada City in 2024. The California Energy Commission's community choice layer, last updated in August 2025, had not yet caught up, which is why some older material describes Grass Valley as PG&E-only.",
          "For a solar home, Pioneer's differences are specific. New systems are on the Solar Billing Plan, with exports valued at a variable export rate and positive charges paid monthly. Pioneer reviews each account during the March or April billing cycle and pays surplus at half a cent per kWh more than PG&E, by check if it is over $50 and as a bill credit if not."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  victorville: {
    name: "Victorville",
    county: "San Bernardino County",
    utility: "sce",
    sourceCheckedDate: "2026-09-12",
    hasSavingsGuide: false,
    bill: "Start with the electricity provider, rate plan and usage history shown on the actual account. A proposal should state its system-production and remaining-bill assumptions for the property. A generic city estimate cannot determine the outcome for an individual meter.",
    local:
      "Victorville describes SolarAPP+ as an automated code-compliance path for eligible residential roof-mounted retrofit systems and publishes a separate permit-center process. Ask the bidder to identify the path, approved plans, permit number and inspection steps for the actual scope.",
    example:
      "Give each bidder the same full-year usage history and roof layout. Then separate the array, storage, roof work, service work, permit/inspection duties and contract total. Compare the written scope and remaining-bill model before comparing a monthly payment.",
    checks: [
      [
        "Bill inputs",
        "Use the actual account's rate plan and usage history. Request the production and remaining-bill assumptions in writing.",
      ],
      [
        "City approval",
        "Ask which permit route applies, who keeps the approved plans and who schedules the inspection using the City permit record.",
      ],
      [
        "Scope changes",
        "If the equipment, roof work, storage or electrical service changes, ask for the revised plans and a written change to cost and scope.",
      ],
    ],
    sources: [
      {
        label: "City of Victorville: SolarAPP+ automated solar-plan reviews",
        url: "https://www.victorvilleca.gov/Government/City-Departments/Building/SolarApp-Automated-Solar-Plan-Reviews",
      },
      {
        label: "City of Victorville: Building Permit Center process",
        url: "https://www.victorvilleca.gov/Government/City-Departments/Building/Permit-Center",
      },
      {
        label: "SCE: residential rate-plan information",
        url: "https://www.sce.com/customer-service-center/help-center/rate-plans-pricing/resources/rates-faq",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "Does every Victorville solar project use SolarAPP+?",
        "No. Victorville describes SolarAPP+ for eligible residential roof-mounted retrofit systems. Ask the bidder to identify the path and any additional review for the property's actual scope.",
      ],
      [
        "Can I decide from an advertised monthly payment?",
        "No. Compare the full written price or total payments, roof and electrical scope, permit duties, production inputs and remaining utility charges.",
      ],
    ],
  },
  petaluma: {
    name: "Petaluma",
    county: "Sonoma County",
    utility: "pge",
    sourceCheckedDate: "2026-09-12",
    hasSavingsGuide: false,
    bill: "Petaluma customers may see Sonoma Clean Power generation and PG&E delivery on the account. Use the actual providers, rate plan and solar enrollment shown on the bill. A generation-only rate or a neighboring bill is not a complete solar comparison.",
    local:
      "Petaluma's Building Division lists SolarAPP+ and solar-permit information alongside its residential permit and inspection resources. Ask the bidder to identify the permit path, responsible business, submitted plans, inspection schedule and any roof or electrical work excluded from the proposal.",
    example:
      "Run every bid from the same bill history and roof layout. Keep solar, storage, roof repair, electrical work, permits and warranty terms distinct. Then compare the written contract total and the remaining-bill assumptions for the actual account.",
    checks: [
      [
        "Generation and delivery",
        "Identify the generation provider, PG&E delivery service, rate plan and solar enrollment from the current account before modeling a proposal.",
      ],
      [
        "Permit and inspection",
        "Ask who uses the City permit path, submits documents, schedules inspections and holds responsibility for revisions.",
      ],
      [
        "Comparable contract",
        "Compare roof scope, electrical scope, equipment, warranty responsibility and all payment obligations on the same written basis.",
      ],
    ],
    sources: [
      {
        label: "City of Petaluma: Building Division, SolarAPP+ and solar-permit resources",
        url: "https://cityofpetaluma.org/departments/building",
      },
      {
        label: "Sonoma Clean Power: Solar Billing Plan tariff and Petaluma service territory",
        url: "https://sonomacleanpower.org/uploads/documents/2024.12.05-Combined-Tariffspdf.pdf",
      },
      {
        label: "PG&E: current residential rate plans and tariff resources",
        url: "https://www.pge.com/en/account/rate-plans.html",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "Does Sonoma Clean Power replace PG&E on a Petaluma solar account?",
        "Sonoma Clean Power's tariff describes generation service while PG&E continues other electric services. Use the current account to identify the providers, rate plan and solar enrollment before comparing bids.",
      ],
      [
        "Does every Petaluma proposal include the same City permit work?",
        "No. Ask the bidder to identify the actual permit path, submitted plans, inspection duties, roof work and electrical work for the property in writing.",
      ],
    ],
  },
  "rancho-cucamonga": {
    name: "Rancho Cucamonga",
    county: "San Bernardino County",
    utility: "sce",
    // 2026-09-22: every source below re-checked, and the RCMU split added.
    sourceCheckedDate: "2026-09-22",
    hasSavingsGuide: false,
    bill: "The City says Southern California Edison is the main electric provider in Rancho Cucamonga, and that its own Rancho Cucamonga Municipal Utility (RCMU) serves over 3,900 metered businesses and residents in a selected area in the southeastern part of the city. Use the provider, rate plan and usage history on the actual electricity account. A proposal should disclose its system-production and remaining-bill assumptions for the property rather than substitute a citywide rate or an advertised savings figure.",
    local:
      "Rancho Cucamonga publishes both an online solar-photovoltaic permit route and SolarAPP+ information for eligible residential projects. Ask the bidder to identify the route, the responsible contractor, submitted plan, inspection schedule and scope for any roof, storage or electrical work.",
    example:
      "Put the same year of usage, roof layout and equipment scope into every proposal. Then separate the solar array, storage, roof work, electrical work, permit/inspection duties, contract total and remaining utility charges. Compare the signed scope, not the headline payment.",
    checks: [
      [
        "Account-specific model",
        "Use the rate plan and usage history printed on the actual account; ask for the inputs behind the production and remaining-bill model.",
      ],
      [
        "Permit route",
        "Ask whether the online permit center or SolarAPP+ applies and name who submits the plans, pays the permit fees and schedules inspection.",
      ],
      [
        "Project scope",
        "List roof work, panel/service changes, storage, backup circuits and warranty responsibility separately from the core solar array.",
      ],
    ],
    sources: [
      {
        label: "City of Rancho Cucamonga: solar photovoltaic permits and SolarAPP+",
        url: "https://www.cityofrc.us/community-development/building-safety/solar-permits",
      },
      {
        label: "City of Rancho Cucamonga: building-safety solar permit guidance",
        url: "https://www.cityofrc.us/community-development/building-safety/building-safety-guidelines",
      },
      {
        label: "City of Rancho Cucamonga: Welcome to RCMU (service area; SCE is the main provider)",
        url: "https://www.cityofrc.us/rcmu",
      },
      {
        label: "SCE: residential rate-plan information",
        url: "https://www.sce.com/customer-service-center/help-center/rate-plans-pricing/resources/rates-faq",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "Does every Rancho Cucamonga solar project qualify for SolarAPP+?",
        "No. The City describes SolarAPP+ for eligible residential project types and directs other work to the online permit center. Confirm the route for the actual design and property.",
      ],
      [
        "What should I compare beyond the quoted payment?",
        "Compare the written total, roof and electrical scope, permit duties, equipment, warranty responsibility, production inputs and remaining utility charges.",
      ],
    ],
  },
  "santa-barbara": {
    name: "Santa Barbara",
    county: "Santa Barbara County",
    utility: "sce",
    sourceCheckedDate: "2026-09-12",
    hasSavingsGuide: false,
    bill: "Use the provider, rate plan and usage history printed on the actual electricity account. Santa Barbara Clean Energy and SCE publish a joint rate comparison, but the current account controls the generation enrollment, delivery charges and solar-billing assumptions for a specific proposal.",
    local:
      "The City publishes an On-Demand Permit route for qualifying photovoltaic systems with optional energy storage, as well as other permit paths. Ask the bidder to identify the applicable City route, responsible California contractor, submitted plan, inspection schedule and any roof or electrical work in writing.",
    example:
      "Give every bidder the same bill history and roof layout. Keep the solar array, storage, roof work, electrical work, permit duties and warranty terms separate. Compare the written contract total and the remaining-bill assumptions for the actual account instead of an advertised payment or citywide estimate.",
    checks: [
      [
        "Account and rate plan",
        "Confirm the generation provider, SCE delivery service, rate plan and solar enrollment from the current bill before comparing a proposal.",
      ],
      [
        "City permit route",
        "Ask whether the project is eligible for the On-Demand Permit route and who submits plans, schedules inspections and handles revisions.",
      ],
      [
        "Comparable scope",
        "Compare roof scope, electrical scope, storage, equipment, warranty responsibility and all payment obligations on the same written basis.",
      ],
    ],
    sources: [
      {
        label: "City of Santa Barbara: how to go solar and permit process",
        url: "https://sustainability.santabarbaraca.gov/take-action/how-go-solar",
      },
      {
        label: "City of Santa Barbara: On-Demand photovoltaic permit information",
        url: "https://santabarbaraca.gov/services/construction-land-development/forms-applications/building-permit-forms-applications",
      },
      {
        label: "SCE and Santa Barbara Clean Energy: joint residential rate comparison",
        url: "https://www.sce.com/customer-service-center/community-choice-aggregation/sce-sbce-joint-rate-comparisons",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "Does every Santa Barbara solar project use the On-Demand Permit route?",
        "No. The City describes that route for qualifying photovoltaic work. Confirm the permit path, scope and responsible contractor for the actual design and property.",
      ],
      [
        "What should I compare beyond the quoted payment?",
        "Compare the written contract total, roof and electrical scope, permit duties, equipment, warranty responsibility, production inputs and remaining utility charges.",
      ],
    ],
  },
  "thousand-oaks": {
    name: "Thousand Oaks",
    county: "Ventura County",
    utility: "sce",
    sourceCheckedDate: "2026-09-23",
    bill: "Read both parts of the current electricity bill before comparing proposals. Clean Power Alliance may supply generation, while SCE delivers the electricity and issues the bill. The proposal should identify the account's actual provider, rate schedule and solar-billing enrollment instead of treating every Thousand Oaks account the same.",
    local: "Thousand Oaks issues a State Solar Permit through SolarAPP+: an instant, pre-approved permit for compliant residential roof-mounted systems from 1 to 38.4 kW AC, available to licensed contractors. Ballasted, ground-mounted and carport systems need the City's standard solar permit instead. SolarAPP+ charges its own fees, separate from the City's. Ask the bidder which permit its design uses and who keeps the work accessible for the inspector.",
    example:
      "Give each bidder the same twelve months of usage and roof layout. Compare monthly production, cash price, financing obligations and remaining SCE and generation-provider charges. Keep the battery and backup scope separate so one proposal does not look cheaper by omitting it.",
    checks: [
      [
        "Generation and delivery",
        "Use the provider and rate schedule shown on the bill and separate generation from SCE delivery charges and credits.",
      ],
      [
        "Permit and electrical scope",
        "Name the permit route and itemize service-panel, subpanel, storage, backup circuits and inspection responsibility.",
      ],
      [
        "Comparable contract",
        "Compare the same equipment, monthly production, roof work, warranty responsibility and total payment obligations.",
      ],
    ],
    sources: [
      {
        "label": "City of Thousand Oaks: solar systems permits (SolarAPP+ State Solar Permit)",
        "url": "https://www.toaks.gov/solarsystems"
      },
      {
        "label": "Clean Power Alliance: Thousand Oaks community page (default option, service start)",
        "url": "https://cleanpoweralliance.org/place/thousand-oaks/"
      },
      {
        "label": "Clean Power Alliance: net energy metering and Solar Billing Plan",
        "url": "https://cleanpoweralliance.org/nem/"
      },
      {
        label: "City of Thousand Oaks: Building Division and permit process",
        url: "https://www.toaks.org/departments/community-development/building",
      },
      {
        label: "Clean Power Alliance: residential rates and member communities",
        url: "https://cleanpoweralliance.org/residential-rate/",
      },
      {
        label: "SCE: Solar Billing Plan information",
        url: "https://www.sce.com/residential/generating-your-own-power/solar-billing-plan",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "Does every Thousand Oaks solar system get an instant permit?",
        "No. The City's SolarAPP+ State Solar Permit covers roof-mounted residential systems from 1 to 38.4 kW AC. Ballasted, ground-mounted and carport systems need a standard solar permit."
      ],
      [
        "What does Clean Power Alliance pay for extra solar in Thousand Oaks?",
        "CPA says its Net Surplus Compensation rates are 10% higher than SCE's. It trues up Solar Billing Plan customers in April, mails a check for credits over $100 and keeps smaller amounts as a bill credit."
      ],
      [
        "Does Clean Power Alliance replace SCE in Thousand Oaks?",
        "No. Clean Power Alliance supplies generation for enrolled customers, while SCE provides delivery and billing. Confirm both on the current bill before comparing proposals.",
      ],
      [
        "What should a Thousand Oaks solar quote identify?",
        "It should identify the legal contractor, equipment, roof and electrical scope, permit duties, monthly production inputs, total payment obligations and remaining utility charges.",
      ],
    ],
    answer: "Thousand Oaks gives licensed solar contractors an instant permit through SolarAPP+ for roof-mounted home systems between 1 and 38.4 kW AC; ground mounts, ballasted racks and carports go through the City's standard permit. Clean Power Alliance supplies generation here at its 100% Green default, with SCE delivering the power. Get three written bids built on your own CPA and SCE bill and compare them on the checks below.",
    keyFacts: [
      {
        "label": "Instant permit range",
        "value": "1 to 38.4 kW AC",
        "note": "Roof-mounted residential only, licensed contractors",
        "source": {
          "publisher": "City of Thousand Oaks",
          "date": "2026-09-23",
          "url": "https://www.toaks.gov/solarsystems"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "Clean Power Alliance",
        "note": "Thousand Oaks default: 100% Green, serving since 2019",
        "source": {
          "publisher": "Clean Power Alliance",
          "date": "2026-09-23",
          "url": "https://cleanpoweralliance.org/place/thousand-oaks/"
        }
      },
      {
        "label": "CPA surplus rate",
        "value": "10% above SCE's",
        "note": "April true-up; checks for credits over $100",
        "source": {
          "publisher": "Clean Power Alliance",
          "date": "2026-09-23",
          "url": "https://cleanpoweralliance.org/nem/"
        }
      }
    ],
    sections: [
      {
        "heading": "The Thousand Oaks permit split: roof versus everything else",
        "paragraphs": [
          "The City of Thousand Oaks calls its SolarAPP+ route the State Solar Permit, a pre-approved or preauthorized solar inspection permit that issues instantly to licensed contractors for compliant systems. It is limited to roof-mounted systems on residential properties between 1 and 38.4 kW AC. Ballasted, ground-mounted and carport systems require a standard solar permit. Any fees for the SolarAPP+ web service are separate from the City's and are settled with SolarAPP+ directly.",
          "The City also reminds owners that it is their duty, or their authorized agent's, to keep the work visible and accessible for inspection. On a hillside lot where a ground mount or a carport is tempting, that split matters: the same kilowatts can come with an instant permit on the roof or a full review off it. Ask each bidder which one it has priced and why."
        ]
      },
      {
        "heading": "Clean Power Alliance and SCE on a Thousand Oaks bill",
        "paragraphs": [
          "Clean Power Alliance has served Thousand Oaks since 2019, and the city's default option is 100% Green Power. CPA applies energy charges and credits on the generation side of your bill and SCE on the delivery side. Systems approved by SCE on or before August 31, 2023 stay on net energy metering; systems approved after that date are on the Solar Billing Plan.",
          "CPA trues up Solar Billing Plan customers every April and pays Net Surplus Compensation at rates it describes as 10% higher than SCE's. A credit over $100 at true-up arrives as a check; under $100 it stays as a bill credit against future CPA charges. Because the city default is the 100% Green option, ask each bidder whether its savings figure uses that generation price or a cheaper CPA option you are not actually on."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  escondido: {
    name: "Escondido",
    county: "San Diego County",
    utility: "sdge",
    sourceCheckedDate: "2026-09-12",
    bill: "Use the provider and rate plan printed on the current bill. SDG&E provides delivery and billing; generation enrollment can vary. A proposal should use a complete year of the account's actual usage and show remaining imports and export credits under the confirmed solar program.",
    local:
      "Escondido publishes SolarAPP+ for qualifying residential rooftop systems and directs other solar work through the regular building-permit process. Ask which route applies. A battery, panel change, roof condition or design outside the eligibility rules can change the permit and inspection scope.",
    example:
      "Put the same annual usage, roof planes and shade assumptions into every bid. Then compare monthly production, cash price, financing obligations, battery scope, permit work and the remaining utility bill. A low payment is not a complete price comparison.",
    checks: [
      [
        "SolarAPP+ eligibility",
        "Ask whether the actual design qualifies and identify the regular permit path if it does not.",
      ],
      [
        "Bill and production model",
        "Use the current provider, rate plan and full-year usage; require monthly production and remaining-bill assumptions.",
      ],
      [
        "Roof, battery and panel work",
        "Itemize roof work, service changes, storage, backup circuits and the contractor responsible for each item.",
      ],
    ],
    sources: [
      {
        label: "City of Escondido: SolarAPP+ eligibility and permit steps",
        url: "https://www.escondido.gov/1247/Solar-App-Plus",
      },
      {
        label: "City of Escondido: Building Division permit information",
        url: "https://www.escondido.gov/215/Building",
      },
      {
        label: "SDG&E: residential pricing plans",
        url: "https://www.sdge.com/residential/pricing-plans",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "Does every Escondido solar project qualify for SolarAPP+?",
        "No. The City limits SolarAPP+ to qualifying residential rooftop projects and uses the regular permit process for other designs. Confirm the route before signing.",
      ],
      [
        "What should I compare besides the payment?",
        "Compare total contract cost, equipment, roof and electrical scope, permit duties, monthly production, warranty responsibility and the remaining utility charges.",
      ],
    ],
  },
  anaheim: {
    name: "Anaheim",
    county: "Orange County",
    utility: "apu",
    sourceCheckedDate: "2026-09-12",
    bill: "Anaheim Public Utilities is a municipal utility with its own solar and net-metering rules. Do not use an SCE or investor-owned-utility NEM 3 assumption. Have each bidder use the account's past twelve months, current Anaheim rate and published excess-energy treatment.",
    local:
      "Anaheim publishes an online permit route for qualifying small residential rooftop systems. Its solar guidance also requires City permitting and utility interconnection steps. Ask who submits the engineering plan, handles review and inspection and includes any service-panel, roof or storage work.",
    example:
      "Ask every bidder to use the same annual Anaheim usage and the same roof design. Compare monthly production, total price, financing terms, permit/interconnection duties and remaining Anaheim bill. Separate the battery and panel work from the core array.",
    checks: [
      [
        "Anaheim utility rules",
        "Use Anaheim Public Utilities' current rate and solar program; reject an SCE or generic NEM assumption.",
      ],
      [
        "Permit and interconnection",
        "Name who submits plans, completes inspection and satisfies Anaheim's utility and building requirements.",
      ],
      [
        "Same system scope",
        "Compare equal equipment, production, roof, panel, storage and warranty scope before comparing price.",
      ],
    ],
    sources: [
      {
        label: "Anaheim Public Utilities: solar energy and net metering",
        url: "https://www.anaheim.net/636/Solar-Energy-and-Net-Metering",
      },
      {
        label: "City of Anaheim: online rooftop-solar permit route",
        url: "https://www.anaheim.net/6015/Online-Permit-Center",
      },
      {
        label: "Anaheim Public Utilities: electric utility rules",
        url: "https://www.anaheim.net/883/Electric-Utility-Rules",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "Is Anaheim on the same NEM 3 program as SCE customers?",
        "No. Anaheim Public Utilities publishes its own wholesale-based NEM 2.0 program and says Anaheim is not moving to NEM 3. Use the municipal utility's current rules for the account.",
      ],
      [
        "Should I compare at least three Anaheim solar bids?",
        "Anaheim's own solar guidance recommends obtaining bids from at least three contractors. Give each bidder the same usage and system scope so the totals are comparable.",
      ],
    ],
  },
  roseville: {
    name: "Roseville",
    county: "Placer County",
    utility: "reu",
    sourceCheckedDate: "2026-09-12",
    bill: "Roseville Electric Utility serves the city. Use the account's current Roseville rate, full-year usage and interconnection rules instead of applying PG&E assumptions. Require the proposal to show monthly production, remaining imports and the treatment of exported power.",
    local:
      "Roseville's published residential process involves both Roseville Electric and Building Services. The applicant needs the utility interconnection reservation and the City permit, followed by inspection and written permission to operate. Ask the bidder to assign every step in the contract.",
    example:
      "Compare bids on the same annual Roseville usage, roof layout and equipment. List the utility application, building permit, meter work, inspection, roof scope, battery and panel changes separately. Do not turn on the system before written permission to operate.",
    checks: [
      [
        "Municipal utility model",
        "Use Roseville Electric's current rate and interconnection rules rather than a PG&E or statewide shortcut.",
      ],
      [
        "Permit-to-operate chain",
        "Name who obtains the utility reservation, City permit, inspection and written permission to operate.",
      ],
      [
        "Complete contract scope",
        "Itemize equipment, roof, electrical, battery, meter and warranty responsibilities before comparing totals.",
      ],
    ],
    sources: [
      {
        label: "Roseville Electric: residential interconnection and permitting process",
        url: "https://www.roseville.ca.us/government/departments/electric_utility/rebates_and_energy_savings/your_trusted_solar_advisor_copy/the_interconnection_process",
      },
      {
        label: "City of Roseville: online building permit process",
        url: "https://www.roseville.ca.us/government/departments/development_services/building/online_building_permit_process",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "Is Roseville a PG&E electric account?",
        "No. Roseville Electric Utility serves the city. Model the proposal under the rate and interconnection rules shown for the actual Roseville account.",
      ],
      [
        "When can a Roseville system be turned on?",
        "Roseville's process calls for permit and interconnection steps, inspection and written permission to operate. The contract should identify who completes each step.",
      ],
    ],
  },
  irvine: {
    name: "Irvine",
    county: "Orange County",
    utility: "sce",
    sourceCheckedDate: "2026-09-23",
    bill: "Check the generation provider and rate plan on the current SCE bill. Orange County Power Authority can provide generation while SCE delivers electricity and handles billing. Solar charges and credits belong to both sides, so a proposal should not model an SCE-only generation account unless that is what the bill shows.",
    local: "Irvine now issues same-day permits for most home solar jobs through PermitsDIRECT!, powered by Symbium, when a licensed contractor applies for a rooftop system no larger than 38.4 kW with no more than one battery. Larger systems, or jobs with more than one battery, go through the IrvineReady! plan submission portal instead. Ask each bidder which route it will use and who answers the City if corrections come back.",
    example:
      "Give every bidder the same SCE/OCPA bill history and roof layout. Compare monthly production, total contract price, financing, roof and panel work, storage, permit duties and remaining generation and delivery charges. A battery changes both scope and permit route.",
    checks: [
      [
        "OCPA and SCE bill",
        "Model OCPA's generation treatment and plan (Basic, Smart or 100% Renewable Choice) and SCE's delivery rate from your actual bill."
      ],
      [
        "Permit route",
        "Say whether the job fits PermitsDIRECT! (up to 38.4 kW, one battery) or needs IrvineReady! plan review, and who handles corrections."
      ],
      [
        "Solarize comparison",
        "If you also get a Solarize Irvine price, compare it on the same design, equipment and warranty as the outside bids."
      ],
      [
        "HOA and contractor scope",
        "Keep HOA review, City permit duties, roof work and the licensed contractor's obligations separate and written."
      ]
    ],
    sources: [
      {
        "label": "City of Irvine: Adding a Rooftop Solar Energy System (same-day and standard routes)",
        "url": "https://cityofirvine.gov/building-permits-and-inspections/adding-rooftop-solar-energy-system"
      },
      {
        "label": "City of Irvine: same-day permits for residential solar and battery systems (April 5, 2024)",
        "url": "https://www.cityofirvine.gov/news-media/news-article/city-irvine-offers-same-day-permits-residential-solar-and-battery-systems"
      },
      {
        "label": "City of Irvine: Solarize Irvine",
        "url": "https://www.cityofirvine.gov/solarize"
      },
      {
        "label": "Orange County Power Authority: residential plans",
        "url": "https://www.ocpower.org/residential/"
      },
      {
        "label": "City of Irvine: HOA review for solar energy systems",
        "url": "https://cityofirvine.org/community-development/homeowner-association-review-solar-energy-systems"
      },
      {
        "label": "OCPA: solar and net-energy-metering program",
        "url": "https://www.ocpower.org/energy-programs/solar-net-energy-metering/"
      },
      {
        "label": "SCE: Solar Billing Plan information",
        "url": "https://www.sce.com/residential/generating-your-own-power/solar-billing-plan"
      }
    ],
    faq: [
      [
        "Does OCPA replace SCE for an Irvine account?",
        "No. OCPA supplies the generation and handles the generation side of solar charges and credits; SCE delivers the power and handles the delivery side. Both appear on the SCE bill."
      ],
      [
        "Can an Irvine solar permit include a battery?",
        "Yes. The City's same-day PermitsDIRECT! route covers rooftop systems up to 38.4 kW with no more than one battery storage system, submitted by a licensed contractor. More than one battery, or a larger system, goes through the standard IrvineReady! plan review."
      ],
      [
        "What is Solarize Irvine?",
        "A City of Irvine program run with the nonprofit OC Goes Solar that offers group pricing on solar and battery storage through contractors selected by a community evaluation panel. It is one option to compare, alongside bids from companies outside the program."
      ]
    ],
    answer: "Irvine runs its own program for choosing a solar company: Solarize Irvine, a partnership with the nonprofit OC Goes Solar, uses a community evaluation panel to vet and select contractors and negotiates group pricing. Whatever route you take, your panels will be permitted through the City's same-day PermitsDIRECT! system, and Orange County Power Authority (not SCE) sets how your exported generation is paid.",
    keyFacts: [
      {
        "label": "Delivers the power",
        "value": "SCE",
        "note": "Delivery charges and credits, meter and statement",
        "source": {
          "publisher": "Orange County Power Authority",
          "date": "2026-09-23",
          "url": "https://www.ocpower.org/energy-programs/solar-net-energy-metering/"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "Orange County Power Authority",
        "note": "Treats new solar customers' generation as if on NEM 2.0",
        "source": {
          "publisher": "Orange County Power Authority",
          "date": "2026-09-23",
          "url": "https://www.ocpower.org/energy-programs/solar-net-energy-metering/"
        }
      },
      {
        "label": "Same-day permit limit",
        "value": "38.4 kW and one battery",
        "note": "PermitsDIRECT!, licensed contractors only",
        "source": {
          "publisher": "City of Irvine",
          "date": "2026-09-23",
          "url": "https://cityofirvine.gov/building-permits-and-inspections/adding-rooftop-solar-energy-system"
        }
      }
    ],
    sections: [
      {
        "heading": "Solarize Irvine: the City's own contractor screen",
        "paragraphs": [
          "The City of Irvine and the nonprofit OC Goes Solar run Solarize Irvine, which gives residents access to group pricing for solar and battery storage. The program recruits residents for a community contractor evaluation panel that vets and selects the participating contractors, and its workshops walk through a pre-negotiated pricing structure for the program-selected systems. The City scheduled its Solarize Irvine 2026 launch event for June 17 at the Las Lomas Community Center.",
          "A Solarize price is still a quote to check, not a verdict. Put it next to at least two bids from companies outside the program, built on the same roof layout, the same OCPA and SCE bill and the same battery size, and compare the total price, the equipment and the warranty terms line by line. If the program-selected price wins on those terms, you have confirmed it; if not, you have learned something before signing."
        ]
      },
      {
        "heading": "Irvine's two permit routes",
        "paragraphs": [
          "Since April 2024 Irvine has issued permits for eligible single-family solar and battery systems through PermitsDIRECT!, a web platform powered by Symbium that checks code compliance and the contractor and business licenses in real time. Fees are paid online and the permit is issued automatically, the same day, without manual review. To qualify, the job must be a rooftop system of no more than 38.4 kW, include no more than one battery storage system, and be submitted by a licensed contractor.",
          "Anything larger goes through the standard route: plans uploaded to the IrvineReady! online portal, a completeness check the City says takes about two business days, an emailed fee link, then roughly five working days for the first plan check. The standard application must state the system's kW (DC) and panel count, flag any main panel upgrade or battery backup, and include load calculations if the main breaker is de-rated. Irvine also reminds homeowners that their HOA may run its own approval process."
        ]
      },
      {
        "heading": "How OCPA pays an Irvine solar home",
        "paragraphs": [
          "Orange County Power Authority supplies generation for Irvine, with SCE delivering the power; SCE handles the delivery side of the solar charges and credits, and OCPA handles the generation side. OCPA says it currently treats solar customers on the Net Billing Tariff as if their generation were under NEM 2.0, reconciles generation charges monthly, runs an April annual true-up so credits banked in sunny months carry into winter, and pays 10% more than SCE for excess generation at true-up.",
          "That makes an Irvine proposal different from one written for an SCE-only city nearby. Ask the bidder whether its savings figure uses OCPA's treatment of the generation side, and to show the SCE delivery charges you will still pay. OCPA's residential plans are Basic Choice, Smart Choice and 100% Renewable Choice; the plan on your bill changes the generation price the model should use."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  stockton: {
    name: "Stockton",
    county: "San Joaquin County",
    utility: "pge",
    sourceCheckedDate: "2026-09-12",
    bill: "Use the provider, rate schedule and solar enrollment printed on the current electricity bill. For a PG&E account, compare delivery and any separate generation charges together. Require monthly production and remaining-bill assumptions based on a complete year of the property's usage.",
    local:
      "Stockton's Community Development Department controls building permits and its public records include residential photovoltaic permit categories. Ask the bidder to identify the current permit route, responsible contractor, plan package, inspection steps and any separate roof, service-panel or battery work.",
    example:
      "Use the same annual usage, roof and shade model for every Stockton bid. Compare monthly production, total contract cost, financing, permit duties, roof and electrical work and the remaining utility bill. Keep an advertised payment separate from the full obligation.",
    checks: [
      [
        "Account-specific utility model",
        "Use the actual provider, rate plan and solar enrollment and show both imports and export credits.",
      ],
      [
        "City permit scope",
        "Name who submits plans, handles corrections, schedules inspection and includes roof, panel or storage work.",
      ],
      [
        "Contract total",
        "Compare the same equipment, production inputs, warranties and total payment obligations, not only the first payment.",
      ],
    ],
    sources: [
      {
        label: "City of Stockton Open Data: Community Development and permit role",
        url: "https://data.stocktonca.gov/stories/s/Development/kc7p-zqfj/",
      },
      {
        label: "City of Stockton Open Data: issued permits",
        url: "https://data.stocktonca.gov/d/xrce-tkin",
      },
      {
        label: "PG&E: Solar Billing Plan information",
        url: "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "What should I compare in a Stockton solar-company quote?",
        "Compare the licensed contractor, equipment, annual and monthly production inputs, roof and electrical scope, permit duties, warranties, total payment obligations and remaining utility charges.",
      ],
      [
        "Does a Stockton address prove the utility rate or installer coverage?",
        "No. Confirm the provider and rate from the bill and require each company to confirm the exact address and contracting business in writing.",
      ],
    ],
  },
  visalia: {
    name: "Visalia",
    county: "Tulare County",
    utility: "sce",
    sourceCheckedDate: "2026-09-12",
    bill: "Use the provider, rate plan and twelve-month usage history printed on the current electricity account. A proposal should disclose the monthly production model, onsite use, remaining imports, export credits and retained charges. Do not substitute a citywide average rate for the actual account.",
    local:
      "Visalia publishes a solar permit application that asks for the contractor, system size, module count, roof or ground mount, existing solar and any panel upgrade. Ask the bidder to match the signed proposal to that permit scope and identify who handles plan review, corrections and inspection.",
    example:
      "Put the same annual usage, roof planes and shade model into every Visalia bid. Then compare monthly production, total price, financing obligations, roof and panel work, storage, permit duties and remaining utility charges. The permit and contract should describe the same system.",
    checks: [
      [
        "Permit-to-contract match",
        "Match the module count, system size, mount type, panel upgrade and contractor across the proposal and City application.",
      ],
      [
        "Full-year bill model",
        "Use the actual provider, rate schedule and twelve months of usage and show monthly imports and exports.",
      ],
      [
        "Complete project scope",
        "Itemize roof, electrical, battery, permit, inspection and warranty responsibilities before comparing totals.",
      ],
    ],
    sources: [
      {
        label: "City of Visalia: solar permit application and required scope",
        url: "https://www.visalia.city/civicax/filebank/blobdload.aspx?BlobID=44527",
      },
      {
        label: "City of Visalia: online permit and inspection portal",
        url: "https://cd.visalia.city/CitizenAccess/Default.aspx",
      },
      {
        label: "SCE: Solar Billing Plan information",
        url: "https://www.sce.com/residential/generating-your-own-power/solar-billing-plan",
      },
      {
        label: "CSLB: Solar Smart license and consumer information",
        url: "https://www.cslb.ca.gov/solar",
      },
    ],
    faq: [
      [
        "What does Visalia's solar permit application record?",
        "The City form asks for the contractor, module count, system capacity, mount type, existing system and panel-upgrade information. Compare those fields to the signed proposal.",
      ],
      [
        "What should I compare across Visalia solar companies?",
        "Compare the licensed contractor, equipment, roof and electrical scope, permit duties, monthly production, warranties, total payment obligations and remaining utility charges.",
      ],
    ],
  },

  // ---------------------------------------------------------------------
  // 2026-09-22 — 12 evidence-backed cities added off CITY_SERP_GATE_v2.csv
  // (verdict "open" or "likely open" on a checked page-1 SERP). Each city
  // was already a full legacy CityData entry in cities-data.ts with no
  // growthCities counterpart, so /solar-companies/<slug> was still serving
  // the legacy template instead of this sourced CityComparison content.
  // No `provider` field: CSLB's license lookup blocks automation, so no
  // installer license number here could be verified this session, and an
  // installer roster is deliberately not added. `checks`/`faq` are also
  // left out rather than filled with unsourced filler.
  // ---------------------------------------------------------------------
  fallbrook: {
    name: "Fallbrook",
    county: "San Diego County",
    utility: "sdge",
    sourceCheckedDate: "2026-09-22",
    bill:
      "Fallbrook is unincorporated San Diego County, so San Diego Gas & Electric (SDG&E) bills delivery. San Diego Community Power (SDCP) is the county's community choice aggregator; SDCP's own site names San Diego, Chula Vista, Encinitas, Imperial Beach, La Mesa and National City as member cities and says it also serves \"unincorporated areas of San Diego County,\" but it does not name Fallbrook specifically. Read the generation provider printed on the current bill — SDCP or SDG&E — before a proposal assumes either one.",
    local:
      "Fallbrook has no city government of its own. Building permits for unincorporated San Diego County, Fallbrook included, are issued by the County of San Diego's Planning & Development Services (PDS), which states it \"supports safe, sustainable, and well-planned growth in the unincorporated areas of the County of San Diego.\" Ask the bidder to identify PDS's current permit path and any additional review for the actual scope. Fallbrook's inland North County valley setting runs hotter and clearer than the San Diego coast, which generally helps solar production but also means more summer afternoon heat de-rating panel output.",
    example:
      "Put the same roof planes, shading and annual usage into every Fallbrook bid. Then compare total price, financing terms, equipment, the PDS permit scope and what SDG&E delivery charges (and SDCP generation charges, if enrolled) remain after the system is installed.",
    sources: [
      {
        label: "San Diego Community Power — Our Community (member jurisdictions)",
        url: "https://sdcommunitypower.org/our-community/",
      },
      {
        label: "San Diego County Planning & Development Services — Building Permits & Forms",
        url: "https://www.sandiegocounty.gov/content/sdc/pds/bldgforms.html",
      },
      {
        label: "SDG&E — official site",
        url: "https://www.sdge.com/",
      },
    ],
  },

  fontana: {
    name: "Fontana",
    county: "San Bernardino County",
    utility: "sce",
    sourceCheckedDate: "2026-09-23",
    bill: "Fontana is Southern California Edison territory for delivery, and the California Energy Commission's map shows no community choice provider here, so SCE's Solar Billing Plan sets what a new system's exports earn. Read the provider name printed on your current bill before a proposal assumes SCE supplies both charges.",
    local: "Fontana routes residential solar through SolarAPP+ first: only licensed contractors may submit, the SolarAPP+ review costs $25, and the approved design then goes into the City's BUILD FONTANA permitting portal. Solar with battery storage can use the same path; building-integrated solar cannot. Ask the bidder who submits, who pays the $25, and who meets the inspector.",
    example: "Put the same roof layout, shading and twelve months of SCE usage into every Fontana bid. Then compare the total price, financing terms, equipment, the permit scope and the SCE bill that remains after the system is installed. SCE says Solar Billing Plan export credits are worth less than the power you buy, so a bid that assumes every exported kWh offsets a full-price kWh is overstating the savings.",
    sources: [
      {
        "label": "City of Fontana: Solar PV Permit with SolarAPP+",
        "url": "https://www.fontanaca.gov/3682/Solar-PV-Permit-with-SolarAPP"
      },
      {
        "label": "SCE: Solar Billing Plan",
        "url": "https://www.sce.com/residential/generating-your-own-power/solar-billing-plan"
      },
      {
        "label": "California HCD: manufactured-home modifications and alterations",
        "url": "https://www.hcd.ca.gov/mmh/residents/modifications-alterations"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How much does a Fontana solar permit cost?",
        "The City's SolarAPP+ page lists the SolarAPP+ processing fee at $25; the City's own permit fee is paid when the permit is issued through BUILD FONTANA. Ask each bidder to show the permit charges as their own line."
      ],
      [
        "Is there a community choice energy program in Fontana?",
        "The California Energy Commission's service-territory map shows none for Fontana. SCE supplies and delivers the power, and SCE's Solar Billing Plan sets the export credits for a new system."
      ],
    ],
    answer: "A solar company installing on a Fontana home files the design through SolarAPP+ ($25 review fee, licensed contractors only), then pulls the permit in the City's BUILD FONTANA portal and books a final building inspection. Your bill stays with Southern California Edison under its Solar Billing Plan. Get at least three written bids and compare them on the permit steps, the battery scope and the SCE bill left over.",
    keyFacts: [
      {
        "label": "Electric utility",
        "value": "SCE",
        "note": "No community choice provider on the CEC map for Fontana",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "SolarAPP+ review fee",
        "value": "$25",
        "note": "Charged by SolarAPP+ before the City permit",
        "source": {
          "publisher": "City of Fontana",
          "date": "2026-09-23",
          "url": "https://www.fontanaca.gov/3682/Solar-PV-Permit-with-SolarAPP"
        }
      },
      {
        "label": "Final inspection",
        "value": "899 Permit Final",
        "note": "Booked in BUILD FONTANA or at (909) 350-7693",
        "source": {
          "publisher": "City of Fontana",
          "date": "2026-09-23",
          "url": "https://www.fontanaca.gov/3682/Solar-PV-Permit-with-SolarAPP"
        }
      }
    ],
    sections: [
      {
        "heading": "The Fontana permit, step by step",
        "paragraphs": [
          "The City of Fontana lays out the order: the contractor registers with SolarAPP+, submits the design and pays SolarAPP+'s $25 processing fee, downloads the approval document and its ID, and then applies for the City permit through the BUILD FONTANA online portal with those documents attached. Only licensed contractors may submit through SolarAPP+, and it handles residential projects only. The City accepts residential solar with energy storage on this path; building-integrated solar is not supported.",
          "A SolarAPP+ permit in Fontana needs one building inspection, which the City calls the 899 Permit Final, scheduled through BUILD FONTANA or by phone at (909) 350-7693. If a bid tells you the permit is your job, or leaves the inspection to you, it is not quoting the same work as a bid that handles both."
        ]
      },
      {
        "heading": "Solar on a Fontana manufactured home",
        "paragraphs": [
          "People in Fontana often ask about solar for mobile and manufactured homes. The California Department of Housing and Community Development says a permit is required before any alteration to a mobilehome or manufactured home begins, and it publishes its own alteration permit guidelines (HCD MH 604) and application forms. Fontana's SolarAPP+ page is written for residential solar in general and does not mention manufactured homes, so ask each bidder which agency will issue the permit for your home and whether its racking and roof attachments are designed for that structure before you compare prices."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },

  fremont: {
    name: "Fremont",
    county: "Alameda County",
    utility: "pge",
    sourceCheckedDate: "2026-09-22",
    bill:
      "Check the generation provider and enrolled program on the PG&E bill before comparing proposals. Ava Community Energy (formerly East Bay Community Energy) lists Fremont among the 16 cities and unincorporated areas it serves; Ava supplies generation while PG&E delivers the electricity, maintains the wires and sends the bill. Have each bidder use both portions of the actual account.",
    local:
      "Fremont's Community Development Department issues residential building permits, including solar; the city's own site could not be reached in enough depth this session to confirm its current permit path, so ask the bidder to name it and the review timeline directly. Fremont's inland-Bay-Area location, away from the coastal fog belt, generally sees more clear-sky solar hours than cities directly on the coast.",
    example:
      "Put the same roof layout, shade model and monthly production in every Fremont bid. Then separate solar, storage, roof and electrical work, and compare the remaining bill under the same Ava generation and PG&E delivery enrollment shown on the account.",
    sources: [
      {
        label: "Ava Community Energy — Who We Serve",
        url: "https://avaenergy.org/community/who-we-serve/",
      },
      {
        label: "City of Fremont — official site",
        url: "https://www.fremont.gov/",
      },
    ],
  },

  "half-moon-bay": {
    name: "Half Moon Bay",
    county: "San Mateo County",
    utility: "pge",
    sourceCheckedDate: "2026-09-22",
    bill:
      "Check the generation provider and enrolled program on the PG&E bill. Peninsula Clean Energy renamed itself WestLight Energy in 2026 and describes serving \"San Mateo County and Los Banos,\" but its site did not name Half Moon Bay specifically among member jurisdictions as of this check — confirm current enrollment on the actual bill rather than assuming it either way. PG&E delivers the electricity and sends the bill regardless of the generation provider.",
    local:
      "Half Moon Bay's Building Division issues residential building permits, including solar; the city's own site could not be reached in enough depth this session to confirm its current permit path, so ask the bidder to name it and the review timeline directly. Half Moon Bay sits directly on the coast, and the Pacific marine layer brings more fog and overcast mornings than inland San Mateo County — a proposal's production estimate should account for that coastal shading pattern, not an inland default.",
    example:
      "Put the same roof layout, shade model and monthly production in every Half Moon Bay bid. Then compare total price, financing terms, equipment, the city's permit scope and the remaining PG&E (and WestLight Energy, if enrolled) bill after installation.",
    sources: [
      {
        label: "WestLight Energy (formerly Peninsula Clean Energy) — official site",
        url: "https://www.westlightenergy.org/",
      },
      {
        label: "City of Half Moon Bay — official site",
        url: "https://www.half-moon-bay.ca.us/",
      },
    ],
  },

  hayward: {
    name: "Hayward",
    county: "Alameda County",
    utility: "pge",
    sourceCheckedDate: "2026-09-22",
    bill:
      "Check the generation provider and enrolled program on the PG&E bill. Ava Community Energy lists Hayward among the 16 cities and unincorporated areas it serves; Ava supplies generation while PG&E delivers the electricity and sends the bill. Have each bidder use both portions of the actual account.",
    local:
      "Hayward runs its permitting through the city's Permit Center and e-Permits online portal. Ask the bidder to confirm the current solar permit path and required inspections through that portal before signing. Hayward's inland-Bay-Area location, away from the coastal fog belt, generally sees more clear-sky solar hours than cities directly on the coast.",
    example:
      "Put the same roof layout, shade model and monthly production in every Hayward bid. Then separate solar, storage, roof and electrical work, and compare the remaining bill under the same Ava generation and PG&E delivery enrollment shown on the account.",
    sources: [
      {
        label: "Ava Community Energy — Who We Serve",
        url: "https://avaenergy.org/community/who-we-serve/",
      },
      {
        label: "City of Hayward — Permit Center",
        url: "https://www.hayward-ca.gov/services/permit-center",
      },
      {
        label: "City of Hayward — e-Permits online portal",
        url: "https://www.hayward-ca.gov/epermits",
      },
    ],
  },

  hemet: {
    name: "Hemet",
    county: "Riverside County",
    utility: "sce",
    sourceCheckedDate: "2026-09-22",
    bill:
      "Hemet is billed by Southern California Edison (SCE) for both generation and delivery. No community choice aggregator was found operating in Hemet as of this check (San Jacinto Power, the nearby Riverside County CCA, is named for and appears limited to the separate city of San Jacinto) — read the provider name printed on the current bill to confirm.",
    local:
      "Hemet's Building & Safety Division issues residential building permits, including solar. Ask the bidder to confirm the current permit path and inspection requirements directly with that division. Hemet sits in an inland Riverside County valley with hot, largely cloudless summers that favor solar production but also raise panel temperatures on the hottest afternoons.",
    example:
      "Put the same roof layout, shading and twelve months of SCE usage into every Hemet bid. Then compare total price, financing terms, equipment, the Building & Safety permit scope and the SCE bill that remains after the system is installed.",
    sources: [
      {
        label: "City of Hemet — Building & Safety Division",
        url: "https://www.hemetca.gov/68/Building-Safety",
      },
      {
        label: "SCE — official site",
        url: "https://www.sce.com/",
      },
    ],
  },

  "lake-elsinore": {
    name: "Lake Elsinore",
    county: "Riverside County",
    utility: "sce",
    sourceCheckedDate: "2026-09-22",
    bill:
      "Lake Elsinore is billed by Southern California Edison (SCE) for both generation and delivery. No community choice aggregator was found operating in Lake Elsinore as of this check — read the provider name printed on the current bill to confirm.",
    local:
      "Lake Elsinore's Community Development Department issues residential building permits, including solar; the city's own site could not be reached in enough depth this session to confirm its current permit path, so ask the bidder to name it and the review timeline directly. Lake Elsinore sits in an inland Riverside County valley with hot, largely cloudless summers that favor solar production but also raise panel temperatures on the hottest afternoons.",
    example:
      "Put the same roof layout, shading and twelve months of SCE usage into every Lake Elsinore bid. Then compare total price, financing terms, equipment, the city's permit scope and the SCE bill that remains after the system is installed.",
    sources: [
      {
        label: "City of Lake Elsinore — official site",
        url: "https://www.lake-elsinore.org/",
      },
      {
        label: "SCE — official site",
        url: "https://www.sce.com/",
      },
    ],
  },

  lakewood: {
    name: "Lakewood",
    county: "Los Angeles County",
    utility: "sce",
    sourceCheckedDate: "2026-09-22",
    bill:
      "Lakewood is billed by Southern California Edison (SCE) for both generation and delivery. Clean Power Alliance, the community choice aggregator covering many Los Angeles and Ventura County cities, does not list Lakewood among its member communities as of this check — read the provider name printed on the current bill to confirm.",
    local:
      "Lakewood's Development Services Department handles residential building permits through its Building Permits process. Ask the bidder to confirm the current solar permit path and required inspections directly.",
    example:
      "Put the same roof layout, shading and twelve months of SCE usage into every Lakewood bid. Then compare total price, financing terms, equipment, the Development Services permit scope and the SCE bill that remains after the system is installed.",
    sources: [
      {
        label: "City of Lakewood — Development Services: Building Permits",
        url: "https://www.lakewoodca.gov/Development-Services/Building/Building-Permits",
      },
      {
        label: "Clean Power Alliance — member communities",
        url: "https://cleanpoweralliance.org/place/",
      },
    ],
  },

  "long-beach": {
    name: "Long Beach",
    county: "Los Angeles County",
    utility: "sce",
    sourceCheckedDate: "2026-09-22",
    bill:
      "Long Beach is billed by Southern California Edison (SCE) for both generation and delivery. Clean Power Alliance, the community choice aggregator covering many Los Angeles and Ventura County cities, does not list Long Beach among its member communities as of this check — read the provider name printed on the current bill to confirm.",
    local:
      "Long Beach's Building and Safety Bureau, inside its Development Services department, handles residential building permits, including the mechanical, electrical and plumbing work a solar install involves. Ask the bidder to confirm the current permit path, appointment process and required inspections directly with the Bureau.",
    example:
      "Put the same roof layout, shading and twelve months of SCE usage into every Long Beach bid. Then compare total price, financing terms, equipment, the Building and Safety Bureau's permit scope and the SCE bill that remains after the system is installed.",
    sources: [
      {
        label: "City of Long Beach — Building and Safety Bureau",
        url: "https://www.longbeach.gov/lbds/building/",
      },
      {
        label: "Clean Power Alliance — member communities",
        url: "https://cleanpoweralliance.org/place/",
      },
    ],
  },

  merced: {
    name: "Merced",
    county: "Merced County",
    // Corrected 2026-09-22: Merced is split between Merced Irrigation District
    // and PG&E (mercedid.org/power; CEC load-serving-entity layer), so no single
    // utility is pre-selected for the inquiry.
    utility: "other",
    sourceCheckedDate: "2026-09-22",
    bill:
      "Merced has two electric utilities. Merced Irrigation District says it provides electric service to customers in the cities of Livingston, Atwater and Merced, and the California Energy Commission's service-territory map shows both Merced Irrigation District and PG&E territory inside the city limits. Read the utility name on the current bill, then have every bidder use that utility's rate schedule and solar rules.",
    local:
      "Merced's Development Services Department issues residential building permits, including solar, but the city's own site returned an access error every time it was checked this session, so its current permit path could not be independently confirmed here. Ask the bidder to name the department's current process, required inspections and timeline directly, and confirm it against the department before signing. Merced's Central Valley location has hot, clear summers that favor solar production but also raise panel temperatures on the hottest afternoons, and winter tule fog can reduce output for stretches of December and January.",
    example:
      "Put the same roof layout, shading and twelve months of usage from the account's actual utility into every Merced bid. Then compare total price, financing terms, equipment, the Development Services permit scope and the bill that remains after the system is installed.",
    sources: [
      {
        label: "Merced Irrigation District — MID Power (electric service area)",
        url: "https://mercedid.org/power/",
      },
      {
        label: "California Energy Commission — Electric Load Serving Entities (IOU & POU) service-territory map",
        url: "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about",
      },
      {
        label: "PG&E — official site",
        url: "https://www.pge.com/",
      },
    ],
  },

  "moreno-valley": {
    name: "Moreno Valley",
    county: "Riverside County",
    // Corrected 2026-09-22: MVU serves new developments inside its own service
    // area; SCE serves other Moreno Valley addresses (moval.org/mvu; SCE's
    // list of incorporated cities served; CEC load-serving-entity layer).
    utility: "other",
    sourceCheckedDate: "2026-09-22",
    bill:
      "Moreno Valley has two electric utilities. Moreno Valley Utility (MVU), the City's own utility, serves new commercial and residential developments inside its service area, and Southern California Edison lists Moreno Valley among the incorporated cities it serves. Check the address with MVU's service-area lookup or read the name on the current bill, then have every bidder use that utility's rate schedule and solar rules.",
    local:
      "Moreno Valley's Community Development Department issues residential building permits, with online submission through the city's Building Services and SimpliCITY portals. Ask the bidder to confirm the current solar permit path and required inspections directly. Moreno Valley sits in an inland Riverside County valley with hot, largely cloudless summers that favor solar production but also raise panel temperatures on the hottest afternoons.",
    example:
      "Put the same roof layout, shading and twelve months of usage from the account's actual utility, MVU or SCE, into every Moreno Valley bid. Then compare total price, financing terms, equipment, the city's permit scope and the bill that remains after the system is installed under that utility's own solar rules.",
    sources: [
      {
        label: "City of Moreno Valley — Building Services / Permits",
        url: "https://www.moval.org/cdd/services/permits-new.html",
      },
      {
        label: "Moreno Valley Utility — About MVU and service-area lookup",
        url: "https://www.moval.org/mvu/about-mvu.html",
      },
      {
        label: "SCE — incorporated cities and counties it serves (fact sheet updated March 17, 2025)",
        url: "https://newsroom.edison.com/_gallery/get_file/?file_id=5cc32d492cfac24d21aecf4c&ir=1",
      },
      {
        label: "California Energy Commission — Electric Load Serving Entities (IOU & POU) service-territory map",
        url: "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about",
      },
    ],
  },

  "mountain-view": {
    name: "Mountain View",
    county: "Santa Clara County",
    utility: "pge",
    sourceCheckedDate: "2026-09-22",
    bill:
      "Check the generation provider and enrolled program on the PG&E bill. Silicon Valley Clean Energy (SVCE) lists Mountain View among its thirteen member communities in Santa Clara County; SVCE supplies generation while PG&E delivers the electricity and sends the bill. Have each bidder use both portions of the actual account.",
    local:
      "Mountain View's Building Division issues residential building permits, including solar; the city's own site could not be reached in enough depth this session to confirm its current permit path, so ask the bidder to name it and the review timeline directly. Mountain View's inland South Bay location, away from the coastal fog belt, generally sees more clear-sky solar hours than cities directly on the coast.",
    example:
      "Put the same roof layout, shade model and monthly production in every Mountain View bid. Then separate solar, storage, roof and electrical work, and compare the remaining bill under the same SVCE generation and PG&E delivery enrollment shown on the account.",
    sources: [
      {
        label: "Silicon Valley Clean Energy — Communities",
        url: "https://www.svcleanenergy.org/communities/",
      },
      {
        label: "City of Mountain View — official site",
        url: "https://www.mountainview.gov/",
      },
    ],
  },
  "santa-clarita": {
    name: "Santa Clarita",
    county: "Los Angeles County",
    utility: "sce",
    bill: "Santa Clarita is Southern California Edison territory on the Energy Commission's map. Clean Power Alliance, the community choice provider for much of Los Angeles County, does not list Santa Clarita among its communities, so a Santa Clarita bill normally shows SCE for both generation and delivery. Confirm that on your own bill, then have each bidder model SCE's Solar Billing Plan on the TOU-D-PRIME rate that plan requires.",
    local: "Santa Clarita takes building permit applications online through its eService portal, and it issues instant online permits for a few residential jobs, including a main panel upgrade. Its written Solar PV Re-roofing Policy covers homes that already have panels: a new roof and the panel removal and reinstall are separate permits, pulled by different license types. Ask each bidder which permits it will pull and who schedules the inspections.",
    example: "If your roof is near the end of its life, ask two bidders for the same layout priced two ways: solar on the existing roof, and a re-roof plus solar done together. Under the City's policy the roof and the solar need separate permits and a roofing contractor cannot remove or reinstall the panels, so the second quote should name both licensed contractors and both permits.",
    sourceCheckedDate: "2026-09-23",
    checks: [
      [
        "SCE account",
        "Model SCE's Solar Billing Plan and TOU-D-PRIME rate from your actual bill, not a Clean Power Alliance rate."
      ],
      [
        "Roof age",
        "State the roof's remaining life and whether a re-roof belongs in this job, with the separate permit it needs."
      ],
      [
        "Panel work",
        "Say whether a main panel upgrade is included and whether it uses the City's instant online permit."
      ],
      [
        "Who holds each license",
        "Name the C-46, C-10, A or B contractor doing solar work and the C-39 or B contractor doing any roofing."
      ]
    ],
    sources: [
      {
        "label": "City of Santa Clarita: Permit Center (online applications and instant residential permits)",
        "url": "https://santaclarita.gov/building-safety/permit-center/"
      },
      {
        "label": "City of Santa Clarita: Solar PV Re-roofing Policy (Residential)",
        "url": "https://santaclarita.gov/wp-content/uploads/sites/42/migration/Solar%20PV%20Re-roofing%20Policy%20(Residential).pdf"
      },
      {
        "label": "SCE: Solar Billing Plan",
        "url": "https://www.sce.com/residential/generating-your-own-power/solar-billing-plan"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "Clean Power Alliance: member communities (no Santa Clarita page)",
        "url": "https://cleanpoweralliance.org/"
      }
    ],
    faq: [
      [
        "Is Santa Clarita served by Clean Power Alliance?",
        "Clean Power Alliance does not list Santa Clarita among its member communities, and SCE serves the city on the Energy Commission's map. Read the generation line on your own bill to confirm."
      ],
      [
        "Do I need two permits to re-roof under solar in Santa Clarita?",
        "Yes, when the panels must come off. The City's Solar PV Re-roofing Policy requires a re-roof permit and a separate solar PV permit when the system is modified, and only a C-46, C-10, A or B contractor may remove and reinstall the panels; a roofing contractor or homeowner may not."
      ],
      [
        "How do I find a solar company in Santa Clarita?",
        "Check each company's license at the CSLB, confirm it pulls permits through the City's eService portal, and get at least three written bids on the same roof layout and SCE bill. This page does not rank installers."
      ]
    ],
    answer: "Solar companies working in Santa Clarita file through the City's online eService permit portal and connect to Southern California Edison, which bills the whole account here; Clean Power Alliance does not list the city. If your roof is due for replacement, Santa Clarita's written re-roofing policy decides who may move the panels. Get three written bids on the same roof and SCE bill, then compare them on the checks below.",
    keyFacts: [
      {
        "label": "Electric utility",
        "value": "SCE",
        "note": "Generation and delivery; Clean Power Alliance does not list the city",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Rate on the Solar Billing Plan",
        "value": "TOU-D-PRIME",
        "note": "Highest prices summer weekdays, 4-9 p.m.",
        "source": {
          "publisher": "SCE",
          "date": "2026-09-23",
          "url": "https://www.sce.com/residential/generating-your-own-power/solar-billing-plan"
        }
      },
      {
        "label": "Re-roof under solar",
        "value": "Two permits",
        "note": "Roofers may not remove or reinstall panels",
        "source": {
          "publisher": "City of Santa Clarita",
          "date": "2026-09-23",
          "url": "https://santaclarita.gov/wp-content/uploads/sites/42/migration/Solar%20PV%20Re-roofing%20Policy%20(Residential).pdf"
        }
      }
    ],
    sections: [
      {
        "heading": "Solar and a new roof in Santa Clarita",
        "paragraphs": [
          "Santa Clarita's Building & Safety division publishes a residential Solar PV Re-roofing Policy for homes whose panels must come off for a new roof. It requires a re-roof permit, which can go only to a licensed C-39 roofing contractor, a licensed B general contractor or an owner-builder, and a separate solar PV permit when the system is modified during removal and reinstallation. Replacing the inverter or modules, or upgrading the service panel, counts as a modification, and a panel upgrade needs its own permit on top.",
          "The policy is blunt about who may touch the array: removal and reinstallation must be done by a licensed C-46 solar contractor, a C-10 electrical contractor, an A general engineering contractor or a B general building contractor; a C-39 roofer or the homeowner may not do it. The homeowner signs a Re-roofing Clearance Form before the permit issues. When a new roof and a new solar system go on together, each scope needs its own permit, because a C-46 solar contractor is not licensed to do the roofing. Roof repairs under 10% of the roof area or 200 square feet, whichever is smaller, that do not affect the solar system are exempt.",
          "So a single Santa Clarita bid for roof plus solar should name two licenses and two permits. If it names only one, ask who is doing the other half of the job."
        ]
      },
      {
        "heading": "SCE's Solar Billing Plan in Santa Clarita",
        "paragraphs": [
          "With no community choice provider on the account, a new Santa Clarita system goes onto SCE's Solar Billing Plan and the TOU-D-PRIME rate, where grid power is most expensive on summer weekday evenings from 4 to 9 p.m. SCE locks a new customer's export credit values for nine years from the year they start and, for customers who enroll before 2028, adds an Energy Export Bonus Credit of about $0.04 per kWh (about $0.09 for income-qualified households). SCE settles the account once a year on an annual settlement bill.",
          "SCE itself notes that export credits are worth less than the power you buy, which is why storing midday solar for the evening peak is worth more than sending it to the grid. Ask each bidder how much of your production its model assumes you use as it is made, and price any battery as its own line."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  pasadena: {
    name: "Pasadena",
    county: "Los Angeles County",
    utility: "pwp",
    bill: "Pasadena Water and Power, the City's own utility, bills almost all of Pasadena; the Energy Commission's map shows a small SCE area at the edge of the city. PWP charges a tiered rate, effective July 1, 2026: a $17.50 monthly Customer and Grid Access Charge, energy and transmission charges on every kWh, and a distribution charge that climbs from 3.505 cents for the first 350 kWh to 25.233 cents above 750 kWh. A proposal built on SCE or PG&E rates is not a Pasadena proposal.",
    local: "PWP must approve a solar project before the City issues a building permit. The installer applies online through PWP's PowerClerk system with a single-line diagram, site plan, the signed customer contract, a copy of your electric bill, the Net Metering and Surplus Compensation enrollment form and, if you have one, your HOA's approval letter. Ask each bidder who files with PWP and when.",
    example: "Because PWP's distribution charge is tiered, the first kWh your panels offset each month are the most expensive ones you buy. Ask two bidders to show your last twelve PWP bills, how many kWh each month fell in the 25.233-cent tier, and how much of that their system removes. A bid that values every offset kWh at one average price is guessing.",
    sourceCheckedDate: "2026-09-23",
    checks: [
      [
        "PWP size limit",
        "Show the system is no more than 150% of your average annual use on PWP's billing record, or 2 W DC per square foot for new or expanded space."
      ],
      [
        "Interconnection agreement",
        "Name the PWP agreement: up to 15 kW (solar plus storage inverters) or the larger Qualifying Facility agreement with insurance."
      ],
      [
        "Equipment and warranty",
        "Use equipment on the CEC eligible lists and state the warranty, which PWP requires to be at least 10 years."
      ],
      [
        "Tiered bill",
        "Model your own PWP tiers month by month, not a single average rate."
      ]
    ],
    sources: [
      {
        "label": "Pasadena Water and Power: Water & Electric Rates (residential electric, effective July 1, 2026)",
        "url": "https://pwp.cityofpasadena.net/water-and-electric-rates"
      },
      {
        "label": "Pasadena Water and Power: Solar Application Instructions",
        "url": "https://pwp.cityofpasadena.net/solar-application-instructions/"
      },
      {
        "label": "Pasadena Water and Power: Solar Eligibility and Requirements",
        "url": "https://pwp.cityofpasadena.net/solar-eligibility-and-requirements/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "Who supplies electricity in Pasadena?",
        "Pasadena Water and Power, the City's municipal utility, serves nearly all of Pasadena on the Energy Commission's service-territory map. It sets its own rates and solar rules, so the CPUC's Net Billing Tariff for PG&E, SCE and SDG&E does not apply to a PWP account."
      ],
      [
        "How big can a solar system be in Pasadena?",
        "PWP limits a system to 150% of your average annual electricity use on its billing record for the prior year, or 2 watts DC per square foot of conditioned floor area for new or expanded space, within a range of 1 kW to 1,000 kW CEC-AC."
      ],
      [
        "Do I need PWP's approval before the City permit?",
        "Yes. PWP's eligibility rules say the customer must obtain PWP's initial review approval before applying for building permits."
      ]
    ],
    answer: "In Pasadena the utility, not the City, is the first gate for any solar company: Pasadena Water and Power must approve the project through its PowerClerk system before a building permit can be issued, and it caps a system at 150% of your average annual use. PWP bills a tiered rate and sets its own solar rules, so compare at least three written bids that model your own PWP bills, not SCE's.",
    keyFacts: [
      {
        "label": "Electric utility",
        "value": "Pasadena Water and Power",
        "note": "Municipal; about 99% of city land on the CEC map",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "PWP size cap",
        "value": "150% of annual use",
        "note": "Or 2 W DC per sq ft for new or expanded space",
        "source": {
          "publisher": "Pasadena Water and Power",
          "date": "2026-09-23",
          "url": "https://pwp.cityofpasadena.net/solar-eligibility-and-requirements/"
        }
      },
      {
        "label": "Top distribution tier",
        "value": "25.233¢/kWh",
        "note": "Above 750 kWh a month, effective July 1, 2026",
        "source": {
          "publisher": "Pasadena Water and Power",
          "date": "2026-09-23",
          "url": "https://pwp.cityofpasadena.net/water-and-electric-rates"
        }
      }
    ],
    sections: [
      {
        "heading": "PWP's approval comes before the building permit",
        "paragraphs": [
          "Pasadena reverses the order many homeowners expect. PWP's eligibility rules require its initial review approval before anyone applies for a building permit, and the installer, not the homeowner, submits the application online through PWP's PowerClerk system. The package includes a single-line diagram, a site plan, the signed contract between you and the installer, a copy of your PWP bill, the Net Metering and Surplus Compensation enrollment form, the interconnection agreement, your billing history or square-footage verification, and an HOA approval letter where one applies.",
          "The agreement depends on size. Systems up to 15 kW sign PWP's Small Solar Generator Interconnection Agreement; larger ones sign the Qualifying Facility Interconnection Agreement and must carry insurance. If you add a battery, PWP counts the combined solar and storage inverter ratings toward that 15 kW line, so a battery can move an otherwise small job into the larger agreement. PWP's solar desk is at PWPSolar@cityofpasadena.net or (626) 744-4495."
        ]
      },
      {
        "heading": "PWP's equipment and sizing rules",
        "paragraphs": [
          "PWP will not approve a system sized to produce more than 150% of your average annual consumption on its billing record for the year before you apply; for new or expanded space it uses 2 watts DC per square foot of conditioned floor area instead. Every system must fall between 1 kW and 1,000 kW CEC-AC, use new equipment from the California Energy Commission's eligible equipment lists, carry at least a 10-year warranty, and have an AC manual disconnect within 8 feet and in line of sight of the PWP meter.",
          "Those rules settle arguments before they start. If one bidder proposes a much larger system than another, ask it to show the PWP billing history behind the size. If a bid does not say where the disconnect goes or how long the warranty runs, it has not been written for PWP."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  concord: {
    name: "Concord",
    county: "Contra Costa County",
    utility: "pge",
    bill: "Concord homes get delivery from PG&E and, by default, generation from MCE, the community choice provider that lists Concord among its 16 Contra Costa member communities. PG&E charges for delivery and MCE's generation charges are settled on the same monthly statement. A solar proposal for a Concord home should model both companies, and your own enrollment, not a PG&E-only account.",
    local: "The City of Concord accepts residential solar permit applications three ways: a SolarAPP+ pre-approval, a full set of professional drawings, or a set built from one of the City's four standardized configurations. All of them are submitted through the City's Virtual Permit Center. Ask each bidder which route it will use; a job that fits a standard configuration or SolarAPP+ is simpler to review than custom drawings.",
    example: "Two Concord bids can show different savings for the same array because one counts MCE's surplus payment and one does not. Ask both to model your MCE and PG&E account on the Solar Billing Plan, show what a year-end surplus would be worth under MCE's rules, and price any battery on its own line.",
    sourceCheckedDate: "2026-09-23",
    hasSavingsGuide: false,
    checks: [
      [
        "MCE and PG&E bill",
        "Model MCE generation and PG&E delivery from your actual statement, including your MCE plan."
      ],
      [
        "Permit route",
        "Say whether the job uses SolarAPP+, a standardized configuration or custom drawings, filed in the Virtual Permit Center."
      ],
      [
        "Surplus assumption",
        "If the design produces more than you use in a year, show what MCE pays for the surplus and when."
      ],
      [
        "Contractor record",
        "Name the licensed contracting business, its CSLB number and who handles service after installation."
      ]
    ],
    sources: [
      {
        "label": "City of Concord: Solar PV Projects (SolarAPP+, standardized configurations, Virtual Permit Center)",
        "url": "https://www.cityofconcord.org/718/Solar-PV-Projects"
      },
      {
        "label": "MCE: member communities",
        "url": "https://www.mcecleanenergy.org/service-area/"
      },
      {
        "label": "MCE: rooftop solar customers (NEM, Solar Billing Plan, surplus payments)",
        "url": "https://www.mcecleanenergy.org/solar-customers/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "Is Concord served by MCE?",
        "Yes. MCE lists Concord among its Contra Costa County member communities, and the Energy Commission's map places the city in both PG&E's delivery area and MCE's service area. Check your bill for your enrollment."
      ],
      [
        "What does MCE pay for extra solar power?",
        "MCE says it pays surplus from its annual cycle at the Net Surplus Compensation rate plus $0.02 per kWh, up to $5,000, and adds $0.01 per kWh in credits for customers on its Deep Green 100% renewable option. Payments of $200 or less are applied as a bill credit; larger amounts are paid by check."
      ],
      [
        "How do I find a solar company in Concord, CA?",
        "Check each company's CSLB license, confirm it will file through Concord's Virtual Permit Center, and compare at least three written bids built on your own MCE and PG&E bill. This page does not rank installers."
      ]
    ],
    answer: "A solar company installing in Concord, California files the permit through the City's Virtual Permit Center, using SolarAPP+, one of four City standardized configurations, or full drawings, and connects the system to PG&E. MCE supplies generation for Concord and pays extra for year-end surplus, so its rules belong in every savings estimate. Compare at least three written bids built on your own MCE and PG&E bill.",
    keyFacts: [
      {
        "label": "Delivers the power",
        "value": "PG&E",
        "note": "Delivery charges and the monthly statement",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "MCE",
        "note": "Concord is an MCE member community",
        "source": {
          "publisher": "MCE",
          "date": "2026-09-23",
          "url": "https://www.mcecleanenergy.org/service-area/"
        }
      },
      {
        "label": "MCE surplus payment",
        "value": "NSC rate + $0.02/kWh",
        "note": "Up to $5,000 a year; checks above $200",
        "source": {
          "publisher": "MCE",
          "date": "2026-09-23",
          "url": "https://www.mcecleanenergy.org/solar-customers/"
        }
      }
    ],
    sections: [
      {
        "heading": "How MCE treats a Concord solar home",
        "paragraphs": [
          "MCE splits its solar customers by application date. Systems whose applications were filed before April 14, 2023 stay on net energy metering; applications after that date, and older NEM 1 systems whose 20-year legacy period has run out, are on the Solar Billing Plan. PG&E keeps charging for all delivery, and MCE's generation charges are settled on the monthly bill.",
          "The difference from a PG&E-only account shows up at year end. MCE's annual cash-out cycle runs April through March, and it pays surplus at the Net Surplus Compensation rate plus $0.02 per kWh, up to $5,000 a year. Customers who choose MCE's Deep Green 100% renewable option earn another $0.01 per kWh in credits for excess energy. Amounts of $200 or less land as a bill credit; larger ones are paid by check.",
          "A system sized to your own usage should not leave a large yearly surplus, so treat that payment as a detail to check rather than a reason to oversize. What matters more is that each bidder models your MCE plan and PG&E delivery charges correctly."
        ]
      },
      {
        "heading": "Concord's three permit routes",
        "paragraphs": [
          "Concord's Building Division gives contractors three ways to submit a home solar permit. SolarAPP+ checks a standard rooftop design automatically and issues a pre-approval that goes into the City's application. The City's four standardized configurations let a contractor fill out a pre-drawn plan set instead of producing custom drawings. Anything else needs a complete set of professional drawings. All three are filed through the Virtual Permit Center.",
          "The route changes how fast a permit comes back and how much drafting the contractor has to do, which can show up in the price. Ask each bidder which route its design uses, and if it needs custom drawings, why a standard route does not fit your roof."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  "san-mateo": {
    name: "San Mateo",
    county: "San Mateo County",
    utility: "pge",
    bill: "A San Mateo installer will be designing around two companies: PG&E, which delivers the power and sends the statement, and WestLight Energy, the county's community choice provider, which renamed itself from Peninsula Clean Energy and supplies generation for most homes. Ask each bidder to build its design on your own account, with WestLight's generation side and PG&E's delivery side shown separately.",
    local: "The City of San Mateo runs residential rooftop solar through SolarAPP+, with two local conditions before a contractor can use it: an active San Mateo business license and a request to be added to the City's SolarAPP+ eligibility list. After SolarAPP+ approves the plans, the contractor completes the SolarAPP+ inspection checklist, applies in the City's Online Permit Center, pays the permit fee and schedules the inspection.",
    example: "Two San Mateo bidders can describe the same roof very differently. Ask both for the same deliverables: the module and inverter models, a roof layout with every obstruction marked, the monthly production estimate, the battery's usable kWh and backed-up circuits, and the name of the business that will hold the San Mateo business license and the permit. Compare those line by line before you look at anything else.",
    sourceCheckedDate: "2026-09-23",
    checks: [
      [
        "City eligibility",
        "Confirm the company holds an active San Mateo business license and is on the City's SolarAPP+ eligibility list."
      ],
      [
        "Permit steps",
        "Name who submits to SolarAPP+, completes the inspection checklist, applies in the Online Permit Center and meets the inspector."
      ],
      [
        "Account modeling",
        "Show WestLight Energy generation and PG&E delivery separately, using your enrollment."
      ],
      [
        "Contract and service",
        "Name the contracting business, its CSLB license, the installation crew and who handles service calls."
      ]
    ],
    sources: [
      {
        "label": "City of San Mateo: SolarApp+ for Solar Installers",
        "url": "https://www.cityofsanmateo.org/4770/SolarApp-For-Solar-Installers"
      },
      {
        "label": "WestLight Energy (formerly Peninsula Clean Energy): name change and service area",
        "url": "https://www.westlightenergy.org/"
      },
      {
        "label": "WestLight Energy: net energy metering for solar customers",
        "url": "https://www.westlightenergy.org/residential/rates-billing/solar-rates/net-energy-metering/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "Which solar companies can pull a permit in San Mateo?",
        "A company using the City's SolarAPP+ route needs an active San Mateo business license and must ask to be added to the City's SolarAPP+ eligibility list. It must also hold a California contractor license that covers solar, which you can check at the CSLB. This page does not rank or recommend installers."
      ],
      [
        "Is Peninsula Clean Energy still the provider in San Mateo?",
        "Peninsula Clean Energy is now called WestLight Energy. It says its service and rates stayed the same, and it serves San Mateo County and Los Banos."
      ],
      [
        "How do I compare solar installers in San Mateo?",
        "Get at least three written proposals for the same roof and the same account, then compare the equipment, the production estimate, the battery scope, the permit responsibilities and the service terms. The checklist on this page lists what each proposal should state."
      ]
    ],
    answer: "Solar companies that install in San Mateo file residential rooftop jobs through SolarAPP+, and the City adds two local gates first: the contractor needs an active San Mateo business license and must ask to be put on the City's SolarAPP+ eligibility list. PG&E delivers your power and WestLight Energy, formerly Peninsula Clean Energy, supplies it. Compare at least three written proposals from companies that clear those gates.",
    keyFacts: [
      {
        "label": "Permit route",
        "value": "SolarAPP+, then Online Permit Center",
        "note": "Contractor needs a San Mateo business license",
        "source": {
          "publisher": "City of San Mateo",
          "date": "2026-09-23",
          "url": "https://www.cityofsanmateo.org/4770/SolarApp-For-Solar-Installers"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "WestLight Energy",
        "note": "Formerly Peninsula Clean Energy",
        "source": {
          "publisher": "WestLight Energy",
          "date": "2026-09-23",
          "url": "https://www.westlightenergy.org/"
        }
      },
      {
        "label": "Delivers the power",
        "value": "PG&E",
        "note": "Wires, meter and the monthly statement",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      }
    ],
    sections: [
      {
        "heading": "What the City asks of a San Mateo installer",
        "paragraphs": [
          "San Mateo's SolarAPP+ page is written for installers, and it sets the order. The contractor registers with SolarAPP+ and submits the design; SolarAPP+ checks it for code compliance and returns approved plans, and SolarAPP+ charges its own processing fee. Before using that approval in San Mateo, the contractor must have an active City business license and must email the City to be added to its SolarAPP+ eligibility list. It then completes the SolarAPP+ approved inspection checklist, applies for the permit in the City's Online Permit Center, pays the City's permit fee and schedules the inspection.",
          "Those two local gates are a quick way to tell a company that works in San Mateo from one that is only selling here. Ask each bidder for its San Mateo business license number and whether it is already on the City's SolarAPP+ list. A company that has to set both up for your job may still be a fine choice, but its timeline will be longer."
        ]
      },
      {
        "heading": "Why the WestLight Energy name matters on a proposal",
        "paragraphs": [
          "Peninsula Clean Energy now operates as WestLight Energy and says its service and rates have not changed; it serves San Mateo County and Los Banos. Your PG&E statement carries WestLight's generation charges alongside PG&E's delivery charges, and WestLight's solar customers see their accrued charges on that same monthly bill.",
          "A proposal that still names Peninsula Clean Energy is not wrong, just dated. One that models only PG&E generation is modeling a company that does not supply most San Mateo homes, so ask the bidder to rebuild it on your actual enrollment. For what you pay each month now and how solar changes it, see the San Mateo bills and rates page linked above."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  glendale: {
    name: "Glendale",
    county: "Los Angeles County",
    utility: "gwp",
    bill: "Glendale Water & Power, the City's own utility, serves almost all of Glendale on the Energy Commission's map, and it sets its own rates and solar rules. GWP credits excess solar generation to your account and applies the credit automatically when you need it. SCE rates and the CPUC Net Billing Tariff do not describe a GWP bill, so a proposal should be built on your own twelve months of GWP usage.",
    local: "In Glendale the utility review comes first. The contractor applies to GWP through PowerClerk, GWP reviews the application in 3 to 5 business days, and only then does the contractor submit the plan set to Building and Safety through the Glendale Permits portal for building, electrical and fire review. Ask each bidder who handles each of those steps and who schedules the inspection.",
    example: "Two Glendale bids for a 12 kW system and a 9.5 kW system are not only different sizes: under GWP's rules the larger one must be justified against 110% of your last 12 months of usage, while a system of 10 kW or less is exempt from that cap and self-certified. Ask each bidder to show which rule its design falls under and the usage figures it used.",
    sourceCheckedDate: "2026-09-23",
    checks: [
      [
        "GWP size rule",
        "Say whether the system is 10 kW CEC-AC or less (self-certified) or larger and sized against 110% of your past-year usage."
      ],
      [
        "Battery",
        "State the usable storage and whether it stays within GWP's 30 kWh allowance for PV-paired storage on small systems."
      ],
      [
        "Order of approvals",
        "Show the GWP PowerClerk review, then the Glendale Permits submission, then inspection and GWP's meter reprogramming."
      ],
      [
        "Interconnection agreement",
        "Use GWP's current Interconnection Agreement dated January 1, 2026."
      ]
    ],
    projectLinks: [
      {
        "href": "/solar-installers/solar-optimum-review",
        "label": "Solar Optimum review",
        "note": "what the company sells and what to check before signing"
      }
    ],
    sources: [
      {
        "label": "Glendale Water & Power: Net Energy Metering (NEM) program and interconnection updates",
        "url": "https://www.glendaleca.gov/government/departments/glendale-water-and-power/solar-education/guide-for-applying-for-interconnection"
      },
      {
        "label": "Glendale Water & Power: guide for residential PV interconnection under 15 kW CEC-AC",
        "url": "https://www.glendaleca.gov/government/departments/glendale-water-and-power/solar-education/guide-for-applying-for-pv-interconnection-and-nem-for-under-15-kw-cec-ac-residential-systems"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "Who supplies electricity in Glendale?",
        "Glendale Water & Power, the City's municipal utility, serves nearly all of Glendale on the Energy Commission's service-territory map. It sets its own rates and net energy metering rules."
      ],
      [
        "How big can a solar system be on a GWP account?",
        "Since November 1, 2023, residential systems up to 10 kW CEC-AC are exempt from GWP's 110% historical-usage cap and may add up to 30 kWh of PV-paired storage. For larger systems, GWP compares estimated production with 110% of your usage over the past 12 months."
      ],
      [
        "How long does GWP take to turn on a solar system?",
        "GWP says it reviews a residential application in 3 to 5 business days. After the City's inspection is approved, its field crews reprogram the meter for net metering in 7 to 10 working days, and then the system receives permission to operate."
      ],
      [
        "Where can I read about Solar Optimum?",
        "Solar Optimum is one of the companies Glendale homeowners search for. Our Solar Optimum review covers what it sells and what to check; this page does not rank or recommend installers."
      ]
    ],
    answer: "In Glendale, the utility approves a solar project before the City does: Glendale Water & Power reviews the contractor's PowerClerk application in 3 to 5 business days, then Building and Safety issues the permit, and after inspection GWP reprograms the meter in 7 to 10 working days. GWP sets its own net metering and sizing rules, so compare at least three written bids built on your own GWP bills.",
    keyFacts: [
      {
        "label": "Electric utility",
        "value": "Glendale Water & Power",
        "note": "Municipal; about 99% of city land on the CEC map",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Size cap exemption",
        "value": "Up to 10 kW CEC-AC",
        "note": "Exempt from the 110% usage cap since Nov. 1, 2023",
        "source": {
          "publisher": "Glendale Water & Power",
          "date": "2026-09-23",
          "url": "https://www.glendaleca.gov/government/departments/glendale-water-and-power/solar-education/guide-for-applying-for-interconnection"
        }
      },
      {
        "label": "GWP application review",
        "value": "3 to 5 business days",
        "note": "Before the City building permit",
        "source": {
          "publisher": "Glendale Water & Power",
          "date": "2026-09-23",
          "url": "https://www.glendaleca.gov/government/departments/glendale-water-and-power/solar-education/guide-for-applying-for-pv-interconnection-and-nem-for-under-15-kw-cec-ac-residential-systems"
        }
      }
    ],
    sections: [
      {
        "heading": "GWP's approval, then the City's permit",
        "paragraphs": [
          "Glendale Water & Power publishes the sequence for a residential system under 15 kW CEC-AC. The contractor submits the interconnection application, with storage if any, through PowerClerk, together with a signed Interconnection Agreement whose CEC-AC rating matches PowerClerk's calculation, an executed election form, a complete plan set with equipment data sheets and photos of the service panel, a spot drawing if the panel is being upgraded, and a shading report (waived for systems of 10 kW CEC-AC or less). Since January 19, 2026, GWP accepts only its Interconnection Agreement dated January 1, 2026.",
          "GWP reviews the application in 3 to 5 business days and then directs the contractor to submit the plan set to Building and Safety through the Glendale Permits portal, where building, electrical and fire staff review it and the permit fees are paid; Building and Safety is at (818) 548-3200. The contractor schedules the inspection through Glendale Permits. After it passes, GWP Engineering sends a work order to its field crews to reprogram the meter for net metering, which takes 7 to 10 working days, and then the system gets permission to operate."
        ]
      },
      {
        "heading": "GWP's sizing and storage rules",
        "paragraphs": [
          "Since November 1, 2023, residential and commercial systems up to 10 kW CEC-AC are exempt from GWP's 110% historical-usage cap, and a system of that size may be paired with up to 30 kWh of storage. The contractor self-certifies the sizing need in PowerClerk. Above 10 kW, GWP estimates your annual load as 110% of your last 12 months of usage and compares it with the system's estimated production. GWP no longer requires a separate meter for home energy storage.",
          "GWP credits excess solar generation to your account and applies the credit automatically when it is needed. Questions go to GWPSolarSolutions@glendaleca.gov or 818-548-2750. A bid that does not mention the 10 kW line, the 30 kWh storage allowance or the meter reprogramming step was probably written for SCE territory."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  auburn: {
    name: "Auburn",
    county: "Placer County",
    utility: "pge",
    bill: "Auburn was one of the founding cities of Pioneer Community Energy in 2018, so most Auburn homes get generation from Pioneer and delivery from PG&E on one PG&E statement. The Energy Commission's map places the whole city in both service areas. Have each bidder model your actual Pioneer and PG&E enrollment rather than a PG&E-only account.",
    local: "The City of Auburn processes residential solar and energy storage permits through Symbium, the automated platform it adopted under Senate Bill 379: the applicant applies and pays Symbium's fees in the Symbium portal, then logs into the City's Civic Access system to submit the documents, including the Symbium approval, line drawing, solar layout and equipment specifications, and pay the City's application fees. Questions go to City Hall at 530-823-4211.",
    example: "Ask two Auburn bidders for the same deliverables: the Symbium approval and the City application they will file, a roof layout showing every plane and obstruction, the monthly production estimate next to your monthly Pioneer and PG&E usage, and any battery priced as its own line. Differences in those items explain most differences in price.",
    sourceCheckedDate: "2026-09-23",
    checks: [
      [
        "Permit filing",
        "Say who applies in Symbium, who files in the City's Civic Access system, and which fees are in the price."
      ],
      [
        "Pioneer and PG&E account",
        "Model Pioneer generation and PG&E delivery from your current bill."
      ],
      [
        "Battery scope",
        "State usable kWh, backed-up circuits and whether storage is on the same Symbium application."
      ],
      [
        "Contract and service",
        "Name the contracting business, its CSLB license and who answers service calls after installation."
      ]
    ],
    sources: [
      {
        "label": "City of Auburn: solar permits through Symbium",
        "url": "https://www.auburn.ca.gov/700/Symbium-Permits"
      },
      {
        "label": "Pioneer Community Energy: about Pioneer and its service area",
        "url": "https://pioneercommunityenergy.org/about-us/"
      },
      {
        "label": "Pioneer Community Energy: understanding your solar bill",
        "url": "https://pioneercommunityenergy.org/understanding-your-solar-bill/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How do I get a solar permit in Auburn, California?",
        "Auburn uses Symbium for automated residential solar and storage permits. The contractor or homeowner applies and pays Symbium's fees in the Symbium portal, then submits the documents and pays the City's application fees in Civic Access."
      ],
      [
        "Who supplies electricity in Auburn?",
        "PG&E delivers the power and sends the bill; Pioneer Community Energy, which Auburn helped found in 2018, supplies the generation for most homes."
      ],
      [
        "Are solar panels worth it in Auburn, California?",
        "That depends on your own usage, how much of your production you use as it is made, and the price you are offered. Pioneer credits Solar Billing Plan exports at a variable export rate and pays a half-cent bonus on year-end surplus, so ask each bidder to show monthly production against your monthly use and how much of it the model assumes you export."
      ]
    ],
    answer: "Solar companies working in Auburn, California file the permit in two systems: the automated Symbium portal, which the City adopted under Senate Bill 379, and then the City's Civic Access system for the documents and City fees. Pioneer Community Energy supplies Auburn's generation and PG&E delivers it. Get at least three written bids built on your own Pioneer and PG&E bill and compare them on the checks below.",
    keyFacts: [
      {
        "label": "Permit platform",
        "value": "Symbium, then Civic Access",
        "note": "Automated plan review adopted under SB 379",
        "source": {
          "publisher": "City of Auburn",
          "date": "2026-09-23",
          "url": "https://www.auburn.ca.gov/700/Symbium-Permits"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "Pioneer Community Energy",
        "note": "Auburn is a founding member (2018); PG&E delivers",
        "source": {
          "publisher": "Pioneer Community Energy",
          "date": "2026-09-23",
          "url": "https://pioneercommunityenergy.org/about-us/"
        }
      },
      {
        "label": "Pioneer surplus bonus",
        "value": "+$0.005/kWh",
        "note": "Above PG&E's rate; checks for amounts over $50",
        "source": {
          "publisher": "Pioneer Community Energy",
          "date": "2026-09-23",
          "url": "https://pioneercommunityenergy.org/understanding-your-solar-bill/"
        }
      }
    ],
    sections: [
      {
        "heading": "Auburn's Symbium permit, step by step",
        "paragraphs": [
          "Senate Bill 379 requires most California cities to offer automated, instant plan review for residential solar. Auburn meets it with Symbium rather than SolarAPP+. The City's page describes two steps: apply through the Symbium portal and pay the fees there, then log into the City's Civic Access system to submit the documents and pay the City's application fees. The document list includes a line drawing, the solar layout, equipment specifications and the Symbium approval, and the City publishes an inspection checklist alongside it.",
          "Because both steps sit with the applicant, ask each bidder to confirm it will do both, and to show which fees are already in its price. The contract should say plainly who is responsible for the permit and the inspection."
        ]
      },
      {
        "heading": "What Pioneer changes for an Auburn solar home",
        "paragraphs": [
          "Auburn, Colfax, Lincoln, Rocklin, Loomis and most of unincorporated Placer County formed Pioneer Community Energy's original service area in 2018. On a solar account, Pioneer handles the generation side. New systems since April 15, 2023 are on the Solar Billing Plan, where exports are valued at a variable export rate and positive charges are paid monthly; older systems on net energy metering earn retail credits that roll forward.",
          "Pioneer reviews each solar account over the prior twelve months during the March or April billing cycle and pays Net Surplus Compensation at half a cent per kWh above PG&E's rate, by check if the amount is over $50 and as a bill credit otherwise."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  lincoln: {
    name: "Lincoln",
    county: "Placer County",
    utility: "pge",
    bill: "Lincoln is one of the cities that formed Pioneer Community Energy in 2018, and the Energy Commission's map places all of Lincoln in both PG&E's delivery area and Pioneer's community choice area. On most bills, Pioneer supplies the generation and PG&E delivers it. Ask each bidder to build its savings figure on your current Pioneer and PG&E enrollment.",
    local: "The City of Lincoln sends solar, energy storage and EV charger permits under Senate Bill 379 to the Symbium portal, where contractors and homeowners can get instantaneous plan review. The first step in the portal is confirming the address is inside Lincoln's city limits, since addresses outside them fall under Placer County. City Hall is at 916-434-2400.",
    example: "Two Lincoln bids for the same roof should name the same permit route and the same account. Ask each for the Symbium approval it expects, a monthly production estimate set against your monthly Pioneer and PG&E usage, and separate prices for the panels, any battery and any main panel upgrade.",
    sourceCheckedDate: "2026-09-23",
    checks: [
      [
        "City limits",
        "Confirm the address is inside Lincoln city limits in the Symbium portal before relying on the City's permit route."
      ],
      [
        "Pioneer and PG&E account",
        "Model Pioneer generation and PG&E delivery from your current bill."
      ],
      [
        "Permit scope",
        "List what the Symbium application covers: panels, storage, EV charger, panel upgrade."
      ],
      [
        "Contract and service",
        "Name the contracting business, its CSLB license and who handles service calls."
      ]
    ],
    sources: [
      {
        "label": "City of Lincoln: solar, energy storage permit and EV charger (Symbium)",
        "url": "https://www.lincolnca.gov/business-and-development/get-a-permit/solar-energy-storage-permit-and-ev-charger/"
      },
      {
        "label": "Pioneer Community Energy: about Pioneer and its service area",
        "url": "https://pioneercommunityenergy.org/about-us/"
      },
      {
        "label": "Pioneer Community Energy: understanding your solar bill",
        "url": "https://pioneercommunityenergy.org/understanding-your-solar-bill/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How do I get a solar permit in Lincoln, California?",
        "The City of Lincoln uses the Symbium portal for instantaneous plan review of solar, energy storage and EV charger permits under Senate Bill 379. Start by confirming your address is inside city limits in the portal."
      ],
      [
        "Who supplies electricity in Lincoln, California?",
        "PG&E delivers the power and sends the bill; Pioneer Community Energy, which Lincoln helped found in 2018, supplies the generation for most homes."
      ],
      [
        "What does Pioneer pay for extra solar in Lincoln?",
        "Pioneer pays Net Surplus Compensation at half a cent per kWh above PG&E's rate after its March or April annual review, by check if the amount is over $50 and as a bill credit otherwise."
      ]
    ],
    answer: "Solar panels on a Lincoln, California home are permitted through the Symbium portal, which the City uses for instant plan review of solar, battery and EV charger permits, once the address is confirmed inside city limits. Pioneer Community Energy supplies Lincoln's generation and PG&E delivers it. Get at least three written bids from licensed solar companies that model your own Pioneer and PG&E bill, and compare them line by line.",
    keyFacts: [
      {
        "label": "Permit platform",
        "value": "Symbium",
        "note": "Instant plan review for solar, storage and EV chargers",
        "source": {
          "publisher": "City of Lincoln",
          "date": "2026-09-23",
          "url": "https://www.lincolnca.gov/business-and-development/get-a-permit/solar-energy-storage-permit-and-ev-charger/"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "Pioneer Community Energy",
        "note": "Lincoln is a founding member (2018); PG&E delivers",
        "source": {
          "publisher": "Pioneer Community Energy",
          "date": "2026-09-23",
          "url": "https://pioneercommunityenergy.org/about-us/"
        }
      },
      {
        "label": "Pioneer true-up",
        "value": "March or April",
        "note": "Surplus over $50 paid by check",
        "source": {
          "publisher": "Pioneer Community Energy",
          "date": "2026-09-23",
          "url": "https://pioneercommunityenergy.org/understanding-your-solar-bill/"
        }
      }
    ],
    sections: [
      {
        "heading": "City of Lincoln or Placer County: who issues the permit",
        "paragraphs": [
          "Lincoln's permit page for solar, energy storage and EV chargers points to Symbium, the platform the City uses to meet Senate Bill 379's call for instantaneous plan review. The portal starts by checking that the address is inside Lincoln's city limits. That check matters because a Lincoln mailing address does not by itself put a home inside the city; an address outside city limits is handled by Placer County's own building department.",
          "So the first question for any bidder is which jurisdiction it is filing with. A proposal that quotes Lincoln's process for a county address, or the reverse, may be wrong about timing and fees."
        ]
      },
      {
        "heading": "How Pioneer bills a Lincoln solar account",
        "paragraphs": [
          "Pioneer Community Energy has served Lincoln since its 2018 launch with Auburn, Colfax, Rocklin, Loomis and most of unincorporated Placer County. It handles the generation half of a solar account. A system installed since April 15, 2023 is on the Solar Billing Plan: exports are valued at a variable export rate and positive charges are paid each month. Earlier systems on net energy metering earn retail credits that carry forward month to month.",
          "Once a year, during the March or April billing cycle, Pioneer looks back over twelve months and pays any Net Surplus Compensation at half a cent per kWh above PG&E's rate. Ask each bidder how much of the system's output its model assumes you will export, and at what value."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  vacaville: {
    name: "Vacaville",
    county: "Solano County",
    utility: "pge",
    bill: "Vacaville is PG&E territory. MCE serves Benicia, Fairfield, Vallejo and unincorporated Solano County, but its own list of member communities does not include Vacaville, even though an older Energy Commission layer shades the area as MCE's. Read the generation line on your PG&E bill; unless it names another provider, PG&E supplies both generation and delivery, and PG&E's Solar Billing Plan sets what new exports earn.",
    local: "The City of Vacaville issues residential solar permits through Symbium's instant plan review under Senate Bill 379, starting with a check that the address is inside city limits; the City says permit processing takes about one to three business days, depending on staff availability. Systems the platform rejects can still be filed electronically in e-TRAKiT as Solar Residential OL, Solar with ESS Residential OL or ESS Only Residential OL.",
    example: "If one Vacaville bid includes a battery and another does not, they may be on different permit paths. Ask each bidder whether its design passes Symbium's instant review or goes to e-TRAKiT, and what that does to the timeline, then compare the prices only after both answers are in writing.",
    sourceCheckedDate: "2026-09-23",
    hasSavingsGuide: false,
    checks: [
      [
        "Generation provider",
        "Confirm from your bill whether PG&E supplies generation, and model PG&E's Solar Billing Plan for a new system."
      ],
      [
        "Permit path",
        "State whether the job uses Symbium's instant review or e-TRAKiT, and which permit type."
      ],
      [
        "Battery",
        "Price storage separately and say whether it changes the permit type to Solar with ESS."
      ],
      [
        "Contract and service",
        "Name the contracting business, its CSLB license and who handles service calls."
      ]
    ],
    sources: [
      {
        "label": "City of Vacaville: apply for residential solar permits (Symbium, e-TRAKiT)",
        "url": "https://www.cityofvacaville.gov/government/community-development/building/building-permits/apply-for-residential-solar-permits"
      },
      {
        "label": "MCE: member communities",
        "url": "https://www.mcecleanenergy.org/service-area/"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How long does a solar permit take in Vacaville?",
        "The City says permits processed through its Symbium instant-review portal take about one to three business days, depending on staff availability. Projects that do not qualify are filed in e-TRAKiT instead."
      ],
      [
        "Is Vacaville in MCE's service area?",
        "MCE's own list of 38 member communities includes Benicia, Fairfield, Vallejo and unincorporated Solano County but not Vacaville. Check the generation line on your PG&E bill."
      ],
      [
        "How do I find a solar company in Vacaville?",
        "Check each company's CSLB license, confirm it will file through the City's Symbium portal or e-TRAKiT, and compare at least three written bids built on your own PG&E bill. This page does not rank installers."
      ]
    ],
    answer: "A solar company installing in Vacaville gets the permit through the City's Symbium portal, which the City says takes about one to three business days, or files in e-TRAKiT if the design does not qualify. Vacaville is PG&E territory, and MCE, which serves several neighboring Solano County cities, does not list Vacaville as a member. Compare at least three written bids built on your own PG&E bill.",
    keyFacts: [
      {
        "label": "Electric utility",
        "value": "PG&E",
        "note": "MCE's member list does not include Vacaville",
        "source": {
          "publisher": "MCE",
          "date": "2026-09-23",
          "url": "https://www.mcecleanenergy.org/service-area/"
        }
      },
      {
        "label": "Permit time",
        "value": "About 1 to 3 business days",
        "note": "Symbium instant review, per the City",
        "source": {
          "publisher": "City of Vacaville",
          "date": "2026-09-23",
          "url": "https://www.cityofvacaville.gov/government/community-development/building/building-permits/apply-for-residential-solar-permits"
        }
      },
      {
        "label": "Fallback filing",
        "value": "e-TRAKiT",
        "note": "Solar, Solar with ESS or ESS Only Residential OL",
        "source": {
          "publisher": "City of Vacaville",
          "date": "2026-09-23",
          "url": "https://www.cityofvacaville.gov/government/community-development/building/building-permits/apply-for-residential-solar-permits"
        }
      }
    ],
    sections: [
      {
        "heading": "Vacaville's two permit paths",
        "paragraphs": [
          "Vacaville partnered with Symbium to meet Senate Bill 379. Contractors and homeowners apply for instantaneous plan review in the Symbium portal after confirming the address is within city limits, and the City says permit processing takes about one to three business days, depending on staff availability. A design the platform disqualifies is not stuck: it can still be submitted electronically through e-TRAKiT under one of three permit types, Solar Residential OL, Solar with ESS Residential OL, or ESS Only Residential OL for a battery added on its own.",
          "Ask each bidder which of those four routes it expects your job to take. A bid that assumes the instant path for a design with storage or unusual electrical work may be promising a timeline the City does not."
        ]
      },
      {
        "heading": "PG&E, not a community choice provider",
        "paragraphs": [
          "Much of Solano County gets generation from MCE, whose list of member communities names Benicia, Fairfield, Vallejo and unincorporated Solano County. Vacaville is not on that list. The Energy Commission's community choice layer, last updated in August 2025, shades Vacaville as MCE territory, so a quick map lookup can mislead; the provider's own list and your bill are the better guide.",
          "For a PG&E customer, a new system goes on PG&E's Solar Billing Plan. PG&E enrolls residential solar customers in its Electric Home time-of-use rate, credits exports at values that vary by time of day, day of the week and season, and sends monthly statements plus an annual true-up. Ask each bidder which hours its model assumes you export in, since that sets what the exports are worth."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  richmond: {
    name: "Richmond",
    county: "Contra Costa County",
    utility: "pge",
    bill: "Richmond homes get delivery from PG&E and, by default, generation from MCE, which lists Richmond among its Contra Costa County member communities. PG&E charges for delivery and MCE's generation charges are settled on the same monthly bill. A proposal should model both, from your own statement.",
    local: "Richmond, California issues rooftop solar permits through SolarAPP+, and its system creates the permit instantly only when four things line up: the contractor's CSLB license is current, its City of Richmond Business Tax Certificate is current, and the SolarAPP+ approval and the signed permit application are uploaded under the exact attachment names the City specifies. Homes on the Richmond Historic Register need a certificate of appropriateness from the Planning Division first.",
    example: "For an older Richmond house, ask each bidder to check the Richmond Historic Register before quoting a timeline. A listed property needs the Planning Division's certificate of appropriateness before SolarAPP+ can be used, and the Division issues it only when the installation is consistent with the Secretary of the Interior's rehabilitation standards, which may change where the panels can go.",
    sourceCheckedDate: "2026-09-23",
    checks: [
      [
        "City credentials",
        "Confirm the contractor has a current CSLB license and a current Richmond Business Tax Certificate."
      ],
      [
        "Historic status",
        "Check whether the property is on the Richmond Historic Register and, if so, who obtains the certificate of appropriateness."
      ],
      [
        "MCE and PG&E account",
        "Model MCE generation and PG&E delivery from your actual bill."
      ],
      [
        "Permit filing",
        "Say who files in SolarAPP+ and the City's permit system, and who schedules the inspection."
      ]
    ],
    sources: [
      {
        "label": "City of Richmond, California: SolarAPP+ for solar installers",
        "url": "https://www.ci.richmond.ca.us/4174/SolarAPP-For-Solar-Installers"
      },
      {
        "label": "MCE: member communities",
        "url": "https://www.mcecleanenergy.org/service-area/"
      },
      {
        "label": "MCE: rooftop solar customers",
        "url": "https://www.mcecleanenergy.org/solar-customers/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "What does a contractor need to pull a solar permit in Richmond, California?",
        "For the City's instant SolarAPP+ permit, the contractor's CSLB license and its City of Richmond Business Tax Certificate must both be current, and the SolarAPP+ approval documents and signed permit application must be uploaded under the names the City specifies."
      ],
      [
        "Do historic homes in Richmond need extra approval for solar?",
        "Yes, if the property is listed on the Richmond Historic Register. The applicant must obtain a certificate of appropriateness from the Planning Division before applying through SolarAPP+."
      ],
      [
        "Is Richmond, California served by MCE?",
        "Yes. MCE lists Richmond among its Contra Costa County member communities; PG&E still delivers the power and sends the bill."
      ]
    ],
    answer: "Solar companies installing in Richmond, California can get an instant permit through SolarAPP+, but only with a current CSLB license and a current City of Richmond Business Tax Certificate on file, which makes the permit a quick check on who you are hiring. Historic-register homes need a certificate of appropriateness first. MCE supplies Richmond's generation and PG&E delivers it. Compare three written bids on the checks below.",
    keyFacts: [
      {
        "label": "Instant permit needs",
        "value": "CSLB license + City business tax certificate",
        "note": "Both current, plus correctly named uploads",
        "source": {
          "publisher": "City of Richmond",
          "date": "2026-09-23",
          "url": "https://www.ci.richmond.ca.us/4174/SolarAPP-For-Solar-Installers"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "MCE",
        "note": "Richmond is an MCE member community; PG&E delivers",
        "source": {
          "publisher": "MCE",
          "date": "2026-09-23",
          "url": "https://www.mcecleanenergy.org/service-area/"
        }
      },
      {
        "label": "MCE surplus payment",
        "value": "NSC rate + $0.02/kWh",
        "note": "Up to $5,000 a year",
        "source": {
          "publisher": "MCE",
          "date": "2026-09-23",
          "url": "https://www.mcecleanenergy.org/solar-customers/"
        }
      }
    ],
    sections: [
      {
        "heading": "Richmond's SolarAPP+ conditions",
        "paragraphs": [
          "The City of Richmond uses SolarAPP+ for residential, roof-mounted retrofit systems that pass its eligibility checklist. SolarAPP+ charges its own processing fee; the contractor downloads the approved documents, applies for the building permit in the City's permitting system with the SolarAPP+ approval ID, uploads the SolarAPP+ documents and schedules the inspection. The City creates the permit instantly only when the contractor's CSLB license and its City of Richmond Business Tax Certificate are both current and the two uploads are named exactly as the City requires.",
          "Those conditions double as a screen. A company that cannot get an instant permit in Richmond is missing a current license or a City business registration, and both are worth knowing about before you sign."
        ]
      },
      {
        "heading": "Historic properties and MCE's rules",
        "paragraphs": [
          "Richmond adds one local step. If a property is listed on the Richmond Historic Register, the applicant must obtain a certificate of appropriateness from the Planning Division before using SolarAPP+, and the Division issues it only when the installation is consistent with the Secretary of the Interior's standards for rehabilitation. Ask the bidder to check the register for your address before promising a timeline.",
          "On the bill side, MCE serves Richmond. Systems whose applications were filed before April 14, 2023 stay on net energy metering; later ones are on the Solar Billing Plan. MCE's annual cycle runs April through March and pays surplus at the Net Surplus Compensation rate plus $0.02 per kWh, up to $5,000 a year, with another $0.01 per kWh for customers on its Deep Green option; amounts of $200 or less arrive as a bill credit."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
};
