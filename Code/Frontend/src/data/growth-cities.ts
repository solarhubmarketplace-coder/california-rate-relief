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

/**
 * 2026-09-23 (Tier 2, citycos agent): a /solar-companies page for a county or
 * region rather than one city. A region page is only built when it carries
 * facts a city page cannot: which utility and community choice aggregator
 * serve each place in it, and which office issues the building permit there.
 * Every row is sourced in the entry's `sources`; `slug` is set when the place
 * has its own city page, and the table links to it.
 */
export interface GrowthRegionPlace {
  name: string;
  slug?: string;
  /** Who delivers the power and sends the bill. */
  utility: string;
  /** Generation provider by default (a CCA), or the utility itself. */
  generation: string;
  /** Who issues the building permit for a home solar system. */
  permit: string;
}

export interface GrowthRegion {
  heading: string;
  intro: string[];
  places: GrowthRegionPlace[];
  /** Short note printed under the table (what the table cannot settle). */
  note?: string;
  /** The region's bills-and-rates hub, when one exists. */
  hub?: { href: string; label: string };
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
  region?: GrowthRegion;
  /** Title, description or H1 to use instead of the template's (each ≤ its limit). */
  seo?: { title?: string; description?: string; h1?: string };
}

export const growthCities: Record<string, GrowthCity> = {
  "san-francisco": {
    "name": "San Francisco",
    "county": "San Francisco County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Check the generation provider and enrolled program on the PG&E bill before comparing proposals. CleanPowerSF supplies generation for enrolled customers, while PG&E delivers the electricity and sends the bill. Have each bidder use both portions and the account's actual solar-billing enrollment.",
    "local": "San Francisco's current digital S Permit covers qualifying solar work on R3 occupancies and goes through the registered electrical-contractor portal. Ask whether your property and scope qualify. Roof work, a service or subpanel change, storage and any additional review belong in the written permit plan.",
    "example": "Put the same roof layout, shade model and monthly production in both proposals. Then separate solar, storage, roof and electrical work. The remaining bill should use the same CleanPowerSF or PG&E generation enrollment and show imports and export credits instead of promising that the bill disappears.",
    "checks": [
      [
        "Generation and delivery",
        "Use the provider, rate schedule and solar program printed on the bill; show generation and PG&E delivery separately."
      ],
      [
        "Roof and shade",
        "Map each roof plane, obstruction and shading input, then show monthly production and the work excluded from the price."
      ],
      [
        "Permit and electrical scope",
        "State whether the S Permit applies and identify service-panel, subpanel, storage or other review in the application scope."
      ],
      [
        "Contract and service",
        "Name the contracting business, installation crew, service contact and written responsibility for roof penetrations and equipment service."
      ]
    ],
    "provider": {
      "name": "Luminalt",
      "url": "https://luminalt.com/",
      "detail": "Its website identifies a San Francisco office and publishes home solar, battery storage, small-commercial and remodeling/new-construction services.",
      "ask": "Confirm acceptance of the exact address and request a roof-specific design, itemized cash price, equipment list and the legal business responsible for the contract and service."
    },
    "sources": [
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "CleanPowerSF: understanding generation and PG&E delivery charges",
        "url": "https://cleanpowersf.org/understanding-my-bill"
      },
      {
        "label": "CleanPowerSF: rooftop solar billing information",
        "url": "https://cleanpowersf.org/net-energy-metering"
      },
      {
        "label": "San Francisco DBI: current digital solar permit process",
        "url": "https://www.sf.gov/new-solar-permit-cancelling-abandoned-otc-applications-recheck-escalation-reference-drawings-and-new-fee-rates"
      },
      {
        "label": "Luminalt: published San Francisco service scope",
        "url": "https://luminalt.com/"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      }
    ],
    "nearby": [
      "oakland",
      "pleasanton",
      "san-jose"
    ],
    "faq": [
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
        "No. Read the provider and enrolled program on the current PG&E bill. The proposal should use that account information and show generation and delivery separately."
      ],
      [
        "Does every San Francisco solar project use the same permit path?",
        "No. The current S Permit is described for qualifying R3 work. Ask the bidder to identify the path for your property and include roof, electrical, storage and inspection responsibilities in writing."
      ],
      [
        "How many home solar permits does San Francisco issue?",
        "San Francisco reported 887 residential solar permits to the California Energy Commission for 2024. Of those, 234 included battery storage and 152, about 17%, were issued online; most still went through review. In San Jose, by comparison, every one of 3,698 permits that year was issued online."
      ]
    ],
    "answer": "Solar companies working in San Francisco file for the City's digital S Permit through the Department of Building Inspection's registered electrical contractor portal, then connect the system to PG&E. For most homes, CleanPowerSF supplies the generation and credits surplus solar at its own rate. Compare written bids from at least three companies that can file that permit, using your own CleanPowerSF and PG&E bill.",
    "keyFacts": [
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
    "sections": [
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
    "contentModified": "2026-09-23",
    "projectLinks": [
      {
        "href": "/solar-companies/bay-area",
        "label": "Comparing solar companies across the Bay Area"
      },
      {
        "href": "/blog/pge-time-of-use-rates-2026",
        "label": "PG&E time-of-use hours and what they do to a solar estimate"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a home battery is worth adding"
      }
    ]
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
    sourceCheckedDate: "2026-09-23",
    utility: "sdge",
    bill: "San Diego Community Power buys the electricity for most homes in the City of San Diego and SDG&E delivers it, on one SDG&E bill with Community Power as a line item. SDG&E's average residential rate, 45.5 cents per kWh in June 2026 by the Public Advocates Office's count, is the highest of the state's three large utilities, and most bills also carry a Base Services Charge of about $24 a month that solar does not reduce.",
    local: "The City of San Diego lets a contractor self-issue a Residential Rooftop-Mounted Solar PV Permit with no plan review for single-family homes, duplexes and townhouses designed to the template in Information Bulletin 301, if the system is 38.4 kW AC or less and needs no fire or structural review or roof alterations. The same permit can include a panel upgrade of up to 320 amps, storage of up to 38.4 kWh (each unit 20 kWh or less) and an inverter-integrated EV charger.",
    example: "Two San Diego bids for the same house can land on different permits. A rooftop system with a battery of 38.4 kWh or less, in units of 20 kWh or less, and a panel upgrade of 320 amps or less can be self-issued; a larger battery, a roof framing change or a ground mount more than 5 feet high sends the job to a permit with plan review. Ask each bidder which permit its design needs.",
    sources: [
      {
        "label": "City of San Diego: Residential Rooftop-Mounted Solar PV Permit",
        "url": "https://www.sandiego.gov/development-services/permits/solar-photovoltaic-permit"
      },
      {
        "label": "San Diego Community Power: net energy metering and Solar Billing Plan",
        "url": "https://sdcommunitypower.org/net-energy-metering/"
      },
      {
        "label": "SDG&E: Base Services Charge",
        "url": "https://www.sdge.com/electric-billing"
      },
      {
        "label": "CPUC Public Advocates Office: Q2 2026 Electric Rates Report",
        "url": "https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf"
      }
    ],
    faq: [
      [
        "Do I need plan review for solar in San Diego?",
        "Not for most homes. A single-family, duplex or townhouse rooftop system designed to the IB-301 template, 38.4 kW AC or less and needing no fire or structural review, gets a self-issued Residential Rooftop-Mounted Solar PV Permit with no plan review."
      ],
      [
        "Can a battery go on the same San Diego solar permit?",
        "Yes, up to 38.4 kWh of storage with no single unit over 20 kWh, along with a panel upgrade of up to 320 amps and an inverter-integrated EV charger."
      ],
      [
        "Who supplies electricity in San Diego?",
        "San Diego Community Power supplies the generation for most homes in the city; SDG&E delivers the power and sends the bill, with Community Power shown as a line item."
      ],
    ],
    checks: [
      [
        "Self-issued permit",
        "Confirm the design follows the IB-301 template, stays at or under 38.4 kW AC and needs no fire or structural review."
      ],
      [
        "Battery and panel limits",
        "Keep storage at 38.4 kWh or less (each unit 20 kWh or less) and any panel upgrade at 320 amps or less, or say which permit applies instead."
      ],
      [
        "Community Power and SDG&E",
        "Model Community Power generation, SDG&E delivery and the EV-TOU-5 rate Community Power says the Solar Billing Plan requires."
      ],
      [
        "Fixed charge",
        "Leave SDG&E's Base Services Charge on the post-solar bill."
      ]
    ],
    answer: "Most San Diego home solar needs no plan review: the City lets contractors self-issue a Residential Rooftop-Mounted Solar PV Permit for single-family homes, duplexes and townhouses up to 38.4 kW AC, with up to 38.4 kWh of storage and a panel upgrade up to 320 amps on the same permit. San Diego Community Power buys the city's electricity and SDG&E delivers it. Compare at least three written bids built on your own bill.",
    keyFacts: [
      {
        "label": "Permit",
        "value": "Self-issued, no plan review",
        "note": "Rooftop, 38.4 kW AC or less, IB-301 template",
        "source": {
          "publisher": "City of San Diego",
          "date": "2026-09-23",
          "url": "https://www.sandiego.gov/development-services/permits/solar-photovoltaic-permit"
        }
      },
      {
        "label": "Storage on the same permit",
        "value": "Up to 38.4 kWh",
        "note": "No single unit over 20 kWh",
        "source": {
          "publisher": "City of San Diego",
          "date": "2026-09-23",
          "url": "https://www.sandiego.gov/development-services/permits/solar-photovoltaic-permit"
        }
      },
      {
        "label": "SDG&E average rate",
        "value": "45.5 cents/kWh",
        "note": "June 2026, highest of the three large utilities",
        "source": {
          "publisher": "CPUC Public Advocates Office",
          "date": "2026-09-23",
          "url": "https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf"
        }
      }
    ],
    sections: [
      {
        "heading": "San Diego's self-issued solar permit",
        "paragraphs": [
          "The City's Development Services Department no longer requires professional certification for residential rooftop solar. For a single-family home, duplex or townhouse designed per the template in Information Bulletin 301, the Residential Rooftop-Mounted Solar PV Permit is self-issued with no plan review, provided the system is no larger than 38.4 kW AC, needs no fire plan review or structural review under IB-301, and involves no work that calls for a combination building permit, such as changing the roof structure or adding a new structure. Solar shingles use the same permit.",
          "Anything outside those limits takes a different permit. Solar on a structure other than a single-family home or duplex needs an electrical permit with plans; ground mounts more than 5 feet above the ground and projects requiring building modifications need a building permit. Applications are online, with PDF plans that must pass the City's upload validation, and fees depend on the project's scope under IB-301."
        ]
      },
      {
        "heading": "Community Power's rules for a new system",
        "paragraphs": [
          "Community Power appears as a line item on the SDG&E bill, and it says that line is not an extra charge. For a new system, it says the Solar Billing Plan requires SDG&E's EV-TOU-5 time-of-use rate and credits exports at avoided-cost values rather than the retail price. Ask each bidder which hours its model assumes you export in.",
          "SDG&E's Base Services Charge of about $24 a month, about $12 on FERA and $6 on CARE, pays for equipment such as meters and transformers and for customer service, and it stays whatever the system produces. The fair test for a San Diego proposal is your own twelve months of bills against what it says would remain, not SDG&E's 45.5-cent average."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  fresno: {
    name: "Fresno",
    county: "Fresno County",
    sourceCheckedDate: "2026-09-23",
    utility: "pge",
    bill: "Fresno is PG&E territory for both generation and delivery; the Energy Commission's map shows no community choice provider over the city. The Public Advocates Office estimated PG&E's June 2026 average bill for customers not on CARE at $168 a month in its hot climate zone and $125 in its cool one. Since March 2026 PG&E bills have also carried a Base Services Charge of around $24 that solar does not reduce.",
    local: "The City of Fresno uses SolarAPP+ for single-family and duplex rooftop solar: a licensed contractor registered with SolarAPP+ submits the design, uploads the SolarAPP+ confirmation to the City's Accela Citizens Access, and the permit is issued in real time as an express permit with no separate plan review. Commercial solar does not qualify and goes through a standard permit in the same system.",
    example: "Ask each Fresno bidder whether it is registered with SolarAPP+ and will file the express permit in Accela Citizens Access. A registered contractor on a standard single-family roof should not need weeks of plan review, so a bid that quotes a long permit wait should say why the design falls outside SolarAPP+.",
    sources: [
      {
        "label": "City of Fresno: SolarAPP+ provides instantly approved solar permits",
        "url": "https://www.fresno.gov/planning/get-an-instantly-approved-solar-permit-through-solar-app/"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      },
      {
        "label": "PG&E: Base Services Charge",
        "url": "https://www.pge.com/en/account/billing-and-assistance/base-services-charge.html"
      },
      {
        "label": "CPUC Public Advocates Office: Q2 2026 Electric Rates Report",
        "url": "https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How fast can I get a solar permit in Fresno?",
        "For single-family and duplex rooftop systems that pass SolarAPP+, the City issues the permit in real time once the contractor uploads the SolarAPP+ confirmation to Accela Citizens Access. Commercial projects need a standard permit."
      ],
      [
        "Who can apply for a SolarAPP+ permit in Fresno?",
        "Licensed contractors who have registered as installers with SolarAPP+. They apply on the SolarAPP+ site and are then directed to the City's Accela Citizens Access to complete the permit application."
      ],
      [
        "What is the average electric bill in Fresno?",
        "No source publishes a Fresno-only average. The CPUC Public Advocates Office estimated PG&E's June 2026 average bill for customers not on CARE at $168 a month in its hot climate zone and $125 in its cool zone; your own twelve months of bills are the better guide."
      ],
    ],
    checks: [
      [
        "Express permit",
        "Confirm the contractor is registered with SolarAPP+ and the home is a single-family house or duplex."
      ],
      [
        "PG&E bill model",
        "Model PG&E's Solar Billing Plan on the E-ELEC rate from your own twelve months of use."
      ],
      [
        "Fixed charge",
        "Leave PG&E's Base Services Charge on the post-solar bill; solar does not remove it."
      ],
      [
        "Contract and service",
        "Name the contracting business, its CSLB license and who handles service calls after installation."
      ]
    ],
    answer: "Solar companies in Fresno can get a single-family or duplex rooftop permit in real time: the City uses SolarAPP+ as an express permit, so a registered contractor uploads its SolarAPP+ confirmation to Accela Citizens Access and the permit issues with no separate plan review. PG&E supplies and delivers Fresno's power. Compare at least three written bids built on your own twelve months of PG&E bills.",
    keyFacts: [
      {
        "label": "Permit route",
        "value": "SolarAPP+ express permit",
        "note": "Single-family and duplex; issued in real time",
        "source": {
          "publisher": "City of Fresno",
          "date": "2026-09-23",
          "url": "https://www.fresno.gov/planning/get-an-instantly-approved-solar-permit-through-solar-app/"
        }
      },
      {
        "label": "PG&E average bill, hot zone",
        "value": "$168/month",
        "note": "June 2026 estimate, customers not on CARE",
        "source": {
          "publisher": "CPUC Public Advocates Office",
          "date": "2026-09-23",
          "url": "https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf"
        }
      },
      {
        "label": "Electric utility",
        "value": "PG&E",
        "note": "No community choice provider mapped over the city",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      }
    ],
    sections: [
      {
        "heading": "Fresno's SolarAPP+ express permit",
        "paragraphs": [
          "The City of Fresno's Planning and Development Department adopted SolarAPP+ after testing it, and now processes eligible residential solar applications as express permits, which removes the need for plan review. The process has three steps: the contractor completes an application on the SolarAPP+ site; SolarAPP+ then directs it to the City's Accela Citizens Access to complete the permit application; and the contractor logs into its Accela account, uploads the SolarAPP+ confirmation as proof the design meets code, and receives the permit in real time.",
          "Two limits apply. Only licensed contractors registered as installers with SolarAPP+ can use it, and only for single-family and duplex projects; commercial solar applies for a standard permit in Accela instead. If you plan to act as your own contractor, expect the standard route."
        ]
      },
      {
        "heading": "What PG&E's rules mean for a Fresno system",
        "paragraphs": [
          "A new Fresno system goes on PG&E's Solar Billing Plan. PG&E enrolls residential solar customers on its Electric Home time-of-use rate, credits exports at values that change with the time of day, the day of the week and the season, and sends monthly statements plus an annual true-up. The value of what you export depends on when you export it, so ask each bidder for the hourly assumption behind its savings figure.",
          "Since March 2026 PG&E has moved part of its costs into a Base Services Charge of around $24 a month for most customers, around $12 on FERA and around $6 on CARE, and lowered its per-kWh prices to match. PG&E's residential average was 33.7 cents per kWh in June 2026, according to the Public Advocates Office. A proposal's savings should come off the per-kWh part of your bill, with the fixed charge still there."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  "los-angeles": {
    "name": "Los Angeles",
    "county": "Los Angeles County",
    "sourceCheckedDate": "2026-09-23",
    "utility": "ladwp",
    "bill": "Confirm whether the bill is from LADWP or another electric utility. LADWP publishes its own net energy metering rules. Do not apply the PG&E/SCE/SDG&E Net Billing Tariff to an LADWP account, or assume every Los Angeles County address has LADWP.",
    "local": "LADWP separates rooftop solar, shared solar and other customer programs. A shared-solar offering is not a rooftop installation quote. Match the proposal to the meter and property you actually control.",
    "example": "If a salesperson uses an SCE export-credit assumption for your LADWP bill, ask for a corrected comparison before judging the price. Identify the actual meter, tariff and billing period first.",
    "sources": [
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
        "label": "LADWP solar programs",
        "url": "https://www.ladwp.com/residential-services/solar-programs"
      },
      {
        "label": "LADWP net energy metering service rider",
        "url": "https://webprod.ladwp.com/account/customer-service/electric-rates/ev-nem-reo-rates"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "U.S. Census Bureau TIGERweb: City of Los Angeles place boundary, queried 2026-09-23",
        "url": "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Places_CouSub_ConCity_SubMCD/MapServer"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/santa-monica",
        "label": "Santa Monica, on SCE and Clean Power Alliance instead"
      },
      {
        "href": "/solar-installers/licensed-solar-installer",
        "label": "How to find a licensed solar installer and confirm the one on your contract"
      },
      {
        "href": "/battery/solar-battery-company",
        "label": "How to vet a solar battery company before adding storage"
      },
      {
        "href": "/blog/solar-broker",
        "label": "What a solar broker can and cannot do for you"
      }
    ],
    "faq": [
      [
        "Are solar panels worth it in Los Angeles?",
        "It depends on your LADWP bill, how LADWP's net energy metering rider credits your exports, and the contract you are offered, not on the city. Compare a purchase or lease quote with what LADWP's Solar Rooftops program would pay you for the roof ($360 to $900 a year for up to 20 years), and with doing nothing. If your bill comes from SCE, the answer uses SCE's rules instead."
      ],
      [
        "Do Los Angeles solar companies need a special permit?",
        "For rooftop systems of 10 kW or less on one- and two-family homes, LADBS issues Express Permits online to licensed contractors without plan check, under Information Bulletin P/GI 2026-003. Larger or non-standard systems need plan check. Ask your bidder which path it will use."
      ],
      [
        "Are Sherman Oaks and other San Fernando Valley neighborhoods part of this page?",
        "Yes, if they are inside the City of Los Angeles. Sherman Oaks is a neighborhood of the city on the Census Bureau's boundary map, and the California Energy Commission's utility map places it in LADWP territory, so a Sherman Oaks home follows the same LADWP solar program and City of Los Angeles building permits described here. Nearby cities such as Burbank, Glendale and Santa Monica have their own utilities or permit offices."
      ],
      [
        "Do Woodland Hills homes follow the Los Angeles rules on this page?",
        "Yes. Woodland Hills is a neighborhood inside the City of Los Angeles: points across it, from Warner Center to the hills south of Ventura Boulevard, fall within the city on the Census Bureau's boundary map, and the Energy Commission's utility map puts them in LADWP territory. A Woodland Hills solar system is therefore permitted by LADBS, including the Express Permit for rooftop systems of 10 kW or less, and credited under LADWP's net energy metering rider, not SCE's Solar Billing Plan. Compare Woodland Hills bids on those terms."
      ],
      [
        "How many solar permits does Los Angeles issue?",
        "The City of Los Angeles reported 11,600 residential solar permits to the California Energy Commission for 2024, 7,024 of them, about 61%, issued online, and 1,137 with battery storage."
      ]
    ],
    "checks": [
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
    "answer": "In the City of Los Angeles, a solar company's work runs through two local offices: LADBS, which issues Express Permits online to contractors for rooftop systems of 10 kW or less on one- and two-family homes, and LADWP, whose own net energy metering rider decides how your exports are credited. LADWP also offers Solar Rooftops, where it owns the panels and pays you for the roof. Weigh that against at least three written bids.",
    "keyFacts": [
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
    "sections": [
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
    "contentModified": "2026-09-23"
  },
  sacramento: {
    name: "Sacramento",
    county: "Sacramento County",
    sourceCheckedDate: "2026-09-23",
    utility: "smud",
    bill: "Sacramento homes buy electricity from SMUD, the Sacramento Municipal Utility District, not PG&E; the Energy Commission's map puts virtually the whole city in SMUD territory. SMUD bills a $27 monthly System Infrastructure Fixed Charge plus Time-of-Day energy prices, and a new solar customer goes on its Solar and Storage Rate, which credits exports at a flat 9.6 cents per kWh. A proposal built on PG&E's rules does not fit a Sacramento home.",
    local: "The City of Sacramento permits residential solar through SolarAPP+ for registered licensed contractors on homes with one or two units or an ADU, with no ballasted systems. After SolarAPP+ approval, the contractor applies in the City's Public Permit Portal under Residential Solar and uploads the SolarAPP+ documents, the City's building application for solar and the SMUD interconnection letter. SolarAPP+'s fee and the City's permit fees are charged separately.",
    example: "Because the City's solar application asks for SMUD's interconnection letter, a Sacramento bidder should be able to tell you when it will request it from SMUD and roughly when it expects to file with the City. Ask each bidder for that sequence in writing, then compare how each one models SMUD's 9.6-cent export credit against your own hourly use.",
    sources: [
      {
        "label": "City of Sacramento: residential solar permits (SolarAPP+ and direct review)",
        "url": "https://www.cityofsacramento.gov/community-development/building/permit-services/residential-solar"
      },
      {
        "label": "SMUD: Solar and Storage Rate",
        "url": "https://www.smud.org/Rate-Information/Solar-and-Storage-Rate"
      },
      {
        "label": "SMUD: residential rates (Time-of-Day, System Infrastructure Fixed Charge)",
        "url": "https://www.smud.org/Rate-Information/Residential-rates"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How do I get a solar permit in Sacramento?",
        "A licensed contractor registered with SolarAPP+ submits the design, then applies in the City of Sacramento Public Permit Portal under Residential Solar with the SolarAPP+ Approval ID, the SolarAPP+ documents, the City's solar building application and the SMUD interconnection letter. Projects that do not use SolarAPP+ can be submitted directly to the City for review."
      ],
      [
        "What does SMUD pay for solar exports?",
        "New solar customers are on SMUD's Solar and Storage Rate, which since June 1, 2026 credits exported power at 9.6 cents per kWh at any hour or season."
      ],
      [
        "Is Sacramento PG&E or SMUD?",
        "SMUD. The Energy Commission's utility map places virtually the whole City of Sacramento in SMUD's territory."
      ],
    ],
    checks: [
      [
        "SMUD letter first",
        "Say when the SMUD interconnection letter will be requested; the City's solar application requires it."
      ],
      [
        "Permit route",
        "Confirm the contractor is registered with SolarAPP+ and the home has one or two units or an ADU; otherwise say how it will submit directly to the City."
      ],
      [
        "Export value",
        "Model exports at SMUD's Solar and Storage Rate credit, 9.6 cents per kWh, not a retail rate."
      ],
      [
        "Fixed charge",
        "Leave SMUD's $27 System Infrastructure Fixed Charge on the post-solar bill."
      ]
    ],
    answer: "Solar companies in Sacramento file through SolarAPP+ and the City's Public Permit Portal, and the City's application asks for SMUD's interconnection letter, so SMUD comes into the process before the permit. SMUD, not PG&E, is the utility: new solar customers are on its Solar and Storage Rate, which credits exports at 9.6 cents per kWh. Compare at least three written bids built on your own SMUD bill.",
    keyFacts: [
      {
        "label": "Electric utility",
        "value": "SMUD",
        "note": "Not PG&E",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "SMUD export credit",
        "value": "9.6 cents/kWh",
        "note": "Solar and Storage Rate, any hour, since June 1, 2026",
        "source": {
          "publisher": "SMUD",
          "date": "2026-09-23",
          "url": "https://www.smud.org/Rate-Information/Solar-and-Storage-Rate"
        }
      },
      {
        "label": "Permit needs",
        "value": "SMUD interconnection letter",
        "note": "Uploaded with the City's residential solar application",
        "source": {
          "publisher": "City of Sacramento",
          "date": "2026-09-23",
          "url": "https://www.cityofsacramento.gov/community-development/building/permit-services/residential-solar"
        }
      }
    ],
    sections: [
      {
        "heading": "Sacramento's SolarAPP+ path, step by step",
        "paragraphs": [
          "The City lists four steps. Eligibility: residential structures with one or two units and ADUs only, licensed contractors only, and no ballasted systems. Review: the contractor submits the design to SolarAPP+ with its license information, pays SolarAPP+'s processing fee and downloads the approval documents. Application: in the City of Sacramento Public Permit Portal, under the Building tab, it chooses Residential Solar, enters the SolarAPP+ Approval ID, uploads the approval documents, the City's building application for solar energy systems, the SMUD interconnection letter and the construction plans, and pays the City's fees; a record number is then issued with the permit documents.",
          "Inspection is requested in the same portal as a Residential Safety Inspection Request using that record number. Revisions go back through SolarAPP+. A project that does not qualify, or a contractor that prefers not to use SolarAPP+, can submit the residential solar application directly to the City for review instead."
        ]
      },
      {
        "heading": "How SMUD bills a Sacramento solar home",
        "paragraphs": [
          "SMUD's standard residential rate is Time-of-Day. Since June 1, 2026, summer prices (June through September) have been $0.1550 per kWh off-peak, $0.2139 mid-peak and $0.3765 during the weekday 5-to-8 p.m. peak; outside summer they are $0.1285 off-peak and $0.1776 at peak. Every account also pays a System Infrastructure Fixed Charge of $27 a month, or $17 on the low-use version.",
          "Customers approved to install solar on or after March 1, 2022 are on the Solar and Storage Rate, which credits every exported kWh at 9.6 cents regardless of hour or season. Power you use yourself avoids the Time-of-Day price, which at the summer peak is almost four times the export credit, so a bid's savings depend heavily on how much of the output it assumes you use at home. Ask each bidder to show that split."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  "bakersfield": {
    "name": "Bakersfield",
    "county": "Kern County",
    "utility": "pge",
    "bill": "Use the utility, generation provider and rate plan shown on your electricity bill. A PG&E proposal should show the current solar billing treatment and retained utility charges. Do not estimate from a statewide average rate.",
    "local": "Kern County publishes a SolarAPP+ path for eligible residential PV with or without storage. That county process does not establish the permit path for a property inside Bakersfield city limits. Ask the bidder to name the governing building department.",
    "example": "If a proposal uses a high summer bill to advertise year-round savings, ask for the full monthly model. Include cooling use, winter consumption, roof work, evening imports and a separate battery line item.",
    "sources": [
      {
        "label": "Kern County: SolarAPP+ process",
        "url": "https://www.kernpublicworks.com/services/development/building-inspection/solarapp-streamlined-permitting-process"
      },
      {
        "label": "PG&E solar billing plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "sourceCheckedDate": "2026-09-23",
    "contentModified": "2026-09-23",
    "answer": "Solar companies working in Bakersfield design for PG&E, which serves the whole city on the California Energy Commission's map, and for a City permit office that reported issuing none of its 1,160 residential solar permits online in 2024. Most of those permits, 79%, included a battery. Homes outside city limits, such as Oildale, Rosedale or Buttonwillow, are permitted by the County of Kern instead. Compare at least three written bids built on your own PG&E bill.",
    "keyFacts": [
      {
        "label": "Utility",
        "value": "PG&E",
        "note": "No community choice provider in Kern County",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "1,160",
        "note": "79% with storage; none issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "2023 solar permits",
        "value": "5,288",
        "note": "70% with storage",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      }
    ],
    "checks": [
      [
        "Permit office",
        "Confirm the address is inside Bakersfield city limits; unincorporated neighborhoods are permitted by the County of Kern."
      ],
      [
        "Review time",
        "Ask how long the bidder's recent Bakersfield permits took, since the City reported none issued online in 2024."
      ],
      [
        "PG&E billing",
        "Model PG&E's Solar Billing Plan from your own bill, with the True-Up month and any bonus credit."
      ],
      [
        "Battery",
        "State the battery's usable kWh and backed-up circuits, and price it on its own line."
      ]
    ],
    "sections": [
      {
        "heading": "What Bakersfield's permit reports show",
        "paragraphs": [
          "Bakersfield reported 5,288 residential solar permits to the California Energy Commission for 2023 and 1,160 for 2024. None were issued through an online, automated platform in either year, so a Bakersfield permit still goes through the City's review; ask each bidder how long its recent permits took. Storage became the norm over the same period: 70% of the 2023 permits and 79% of the 2024 permits included a battery.",
          "The County of Kern reported a different pattern for the unincorporated areas around the city: all 461 of its 2024 residential solar permits were issued online. Neighborhoods outside the city limits are permitted by the County, so have the bidder confirm which office will permit your home."
        ]
      },
      {
        "heading": "PG&E's Solar Billing Plan in Bakersfield",
        "paragraphs": [
          "On the Energy Commission's map PG&E serves all of Bakersfield, and the Commission's community choice layer shows no provider anywhere in Kern County, so PG&E sets both halves of a solar bill here. A new system goes on PG&E's Solar Billing Plan, which values credits and charges by time of day, day of the week and season, gives Energy Export Bonus Credits to customers who start before 2028, and closes each 12-month cycle with a True-Up statement.",
          "PG&E says Solar Billing Plan customers save the most when they use the energy they produce on-site. That is the case a battery quote has to prove on your own usage, including summer cooling and winter use, rather than on a single high summer bill."
        ]
      }
    ],
    "faq": [
      [
        "Is Bakersfield PG&E or SCE?",
        "PG&E. The California Energy Commission's map places all of Bakersfield in PG&E territory. SCE serves other parts of Kern County, including Delano, Tehachapi and the eastern desert."
      ],
      [
        "How many solar permits does Bakersfield issue?",
        "The City reported 1,160 residential solar permits to the California Energy Commission for 2024, down from 5,288 in 2023. In 2024, 920 of them included battery storage and none were issued online."
      ],
      [
        "Who are the solar installers in Kern County?",
        "This site does not rank them. Outside Bakersfield, the permit office and even the utility change: SCE serves Delano and the east, and the County of Kern permits unincorporated areas. The Kern County page lists who serves and permits each community."
      ]
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/kern-county",
        "label": "PG&E, SCE and permit offices across Kern County"
      },
      {
        "href": "/solar-cost/bakersfield",
        "label": "What sets the price of solar in Bakersfield"
      },
      {
        "href": "/blog/why-is-my-pge-bill-so-high",
        "label": "Why a PG&E bill runs high"
      }
    ]
  },
  "san-jose": {
    "name": "San Jose",
    "county": "Santa Clara County",
    "sourceCheckedDate": "2026-09-23",
    "utility": "pge",
    "bill": "Check PG&E delivery and the generation provider, which may be San José Clean Energy. SJCE’s generation billing and PG&E’s delivery billing are distinct. Confirm whether the account is on legacy NEM or a newer solar billing plan before comparing exports.",
    "local": "San José publishes separate requirements for solar and storage battery projects, including its streamlined permit path. An existing roof or electrical service change can alter the project scope. Have the bidder identify that work in the quote.",
    "example": "If competing quotes use different SJCE/PG&E billing assumptions, ask both to use your actual account enrollment and the same production profile. A larger array does not automatically produce a better financial result.",
    "sources": [
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "San José Clean Energy: solar billing and NEM",
        "url": "https://sanjosecleanenergy.org/solar-billing-nem/"
      },
      {
        "label": "City of San José: solar and battery projects",
        "url": "https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/solar-storage-battery-projects"
      }
    ],
    "faq": [
      [
        "Which solar companies operate in San José?",
        "Many do, and this page does not rank them or confirm that any one serves your street. A company doing the work must hold a CSLB license that covers solar and must pull a City permit through SJPermits for your address. Ask each bidder for its license number and for the permit it will file, then compare at least three written proposals."
      ],
      [
        "Is a San José solar bid supposed to use SJCE rates?",
        "If your PG&E statement shows San José Clean Energy as the generation provider, yes. SJCE's generation charges and solar credits sit inside the PG&E statement, and SJCE trues up in April, so the bid should model both companies."
      ]
    ],
    "answer": "Any solar company that installs in San José has to get two approvals before the system can run: a City building permit through SJPermits and a PG&E interconnection. On most San José bills, San José Clean Energy (SJCE) supplies the generation and PG&E delivers it. Get at least three written bids built on your own SJCE and PG&E account, then compare them on the checks below.",
    "keyFacts": [
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
    "sections": [
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
    "contentModified": "2026-09-23",
    "projectLinks": [
      {
        "href": "/solar-companies/santa-clara",
        "label": "Santa Clara, where Silicon Valley Power sets the solar rules"
      }
    ]
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
    "name": "Santa Cruz",
    "county": "Santa Cruz County",
    "utility": "pge",
    "bill": "For a PG&E account with Central Coast Community Energy generation, compare both parts of the bill. 3CE publishes separate Solar Billing Plan rules and warns that voluntarily leaving legacy NEM is permanent for both generation and delivery. Check your enrollment before accepting a storage offer that changes it.",
    "local": "The City of Santa Cruz lists SolarAPP+ for residential rooftop solar and storage. A Santa Cruz mailing address can still require a different building authority; have the bidder identify the permit jurisdiction and roof layout before promising an installation date.",
    "example": "An existing solar owner may be offered a battery rebate alongside a change in billing. Compare keeping the existing enrollment with the proposed transition, using the same usage and battery settings. Put the continuing bill difference beside the rebate. The upfront amount is only part of the decision.",
    "checks": [
      [
        "Existing solar enrollment",
        "Record current NEM or Solar Billing Plan status and any proposed change before signing."
      ],
      [
        "Roof-level production",
        "Ask for a shade assessment and monthly output for each roof plane; use your site’s inputs."
      ],
      [
        "Storage and permit",
        "Name the backed-up circuits, equipment location and city or county application path."
      ]
    ],
    "provider": {
      "name": "Allterra Solar",
      "url": "https://www.allterrasolar.com/",
      "detail": "Publishes Santa Cruz and Central Coast residential/light-commercial solar services, storage and financing information.",
      "ask": "Request the roof-specific production model and a comparison that preserves or explicitly changes your confirmed 3CE/PG&E enrollment."
    },
    "sources": [
      {
        "label": "3CE: Solar Billing Plan and legacy transition",
        "url": "https://3cenergy.org/solar-billing-plan/"
      },
      {
        "label": "3CE: residential battery program conditions",
        "url": "https://3cenergy.org/rebates/residential-battery-rebate-program/"
      },
      {
        "label": "City of Santa Cruz: Building & Safety",
        "url": "https://www.santacruzca.gov/Government/City-Departments/Community-Development/Building-Safety"
      },
      {
        "label": "Allterra Solar: published service scope",
        "url": "https://www.allterrasolar.com/"
      }
    ],
    "nearby": [
      "san-jose"
    ],
    "faq": [
      [
        "Can a battery offer change my Santa Cruz solar billing?",
        "Some offers can. 3CE’s battery program conditions require existing NEM participants to move to the Solar Billing Plan. Compare the continuing billing effect before accepting the offer."
      ],
      [
        "Does a Santa Cruz company’s address prove it serves my home?",
        "No. Ask for written service coverage and identify whether your property is inside the city or under another permit authority."
      ]
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/scotts-valley",
        "label": "Solar companies in nearby Scotts Valley"
      }
    ]
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
    "name": "Palm Desert",
    "county": "Riverside County",
    "utility": "other",
    "bill": "Palm Desert’s General Plan identifies SCE across most of the city and IID in a limited portion. Read the electric bill before using either utility’s solar assumptions. The city name cannot settle the tariff, export treatment or interconnection process at your meter.",
    "local": "Palm Desert uses its Clariti portal for current applications and publishes a separate solar-permit entry point. Its permit page directs owners of older eTRAKiT applications to the Development Services Center. Have the bidder identify where your project record lives and who manages inspections.",
    "example": "If proposals for the same property name different utilities, stop the comparison there. Get the meter’s utility confirmed, then rerun each proposal on that utility’s current solar rules. For a home used seasonally, include the cooling and pool equipment left running when nobody is home.",
    "checks": [
      [
        "SCE or IID meter",
        "Confirm the account provider before accepting any rate, export credit or approval schedule."
      ],
      [
        "Roof material and attachments",
        "Ask for the attachment and waterproofing method for the actual roof, with roof repair and warranty responsibility stated."
      ],
      [
        "Application record",
        "Identify Clariti or the existing application record, inspection responsibility and utility interconnection as separate scope items."
      ],
      [
        "Structure and authority",
        "Confirm whether the home is conventional or manufactured, which authority controls this installation, whether the mounting design is accepted for that structure, and who signs off on access, attachments and warranty responsibility."
      ],
      [
        "Production assumptions",
        "Ask each bidder to identify the temperature, roof-plane and obstruction inputs in its monthly production estimate, alongside the household's seasonal use assumptions."
      ]
    ],
    "provider": {
      "name": "Hot Purple Energy",
      "url": "https://hotpurpleenergy.com/",
      "detail": "Describes Coachella Valley solar projects, batteries, repairs and work across multiple roof materials.",
      "ask": "Confirm Palm Desert address coverage, SCE or IID experience for this meter, roof attachment scope and the battery operating design."
    },
    "sources": [
      {
        "label": "Palm Desert: General Plan electric service areas",
        "url": "https://www.palmdesert.gov/build-develop/general-plan"
      },
      {
        "label": "Palm Desert: current permit portal",
        "url": "https://www.palmdesert.gov/build-develop/permit"
      },
      {
        "label": "Palm Desert: solar forms and handouts (manufactured-home and solar materials checked September 20, 2026)",
        "url": "https://www.palmdesert.gov/build-develop/forms"
      },
      {
        "label": "California HCD: manufactured-home modifications and alterations (checked September 20, 2026)",
        "url": "https://www.hcd.ca.gov/mmh/residents/modifications-alterations"
      },
      {
        "label": "Hot Purple Energy: published service scope",
        "url": "https://hotpurpleenergy.com/"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/high-desert",
        "label": "The High Desert: Victor Valley and Antelope Valley"
      },
      {
        "href": "/blog/is-my-roof-good-for-solar-california",
        "label": "Check whether the roof is suited to solar"
      }
    ],
    "nearby": [
      "palm-springs"
    ],
    "faq": [
      [
        "Does every Palm Desert home use SCE?",
        "No. The city’s General Plan identifies a limited IID service area as well. Use the name on your electric bill and have the bidder verify the meter."
      ],
      [
        "Where should I look for my Palm Desert permit?",
        "The city directs current applications through Clariti and provides a solar application link. For an older eTRAKiT submission, follow its instructions to contact the Development Services Center."
      ],
      [
        "Can a manufactured Palm Desert home use the same solar permit path as a conventional home?",
        "Do not assume so. Palm Desert publishes separate manufactured-home and solar materials, while California HCD regulates alterations of existing HUD-labeled manufactured homes. Confirm the property type, responsible authority and the proposed mounting and electrical scope before relying on a permit path."
      ]
    ]
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
  "riverside": {
    "name": "Riverside",
    "county": "Riverside County",
    "utility": "other",
    "sourceCheckedDate": "2026-09-12",
    "bill": "Start with the provider printed on the current bill. Check the current RPU service-area map and the bill before a bidder applies RPU assumptions. If the provider remains uncertain, use SCE’s official lookup rather than inferring a provider from the city name. For an RPU account, RPU explains that grid-connected solar customers continue to receive utility bills.",
    "local": "For an RPU-served address, RPU describes City permit approval and utility interconnection before operation. Have each bidder identify the actual permit authority, inspection sequence, interconnection application and meter work for this address. New solar, solar plus storage, roof-first work, an expansion to an existing system and a commercial project are different scopes. The written proposal should say which one it covers.",
    "example": "Give every bidder the same twelve months of usage, serving utility, requested system size, roof layout, shade information and backup-load scope. Require each bidder to show its monthly production estimate and explain material differences. Get a separate cash price for solar, storage, roof and electrical work before comparing a loan, lease or PPA. Then compare total obligations, exclusions, service responsibility and the modeled remaining bill.",
    "checks": [
      [
        "Serving utility",
        "Match the proposal to the provider and rate schedule on the current bill. Use the official RPU map or SCE lookup when the provider is uncertain; do not infer it from the city name."
      ],
      [
        "Project type and handoffs",
        "State whether the bid covers new solar, solar plus storage, roof-first work, an existing-system expansion or a commercial project. Identify the permit, inspection, interconnection and meter responsibilities for that scope."
      ],
      [
        "Comparable design",
        "Use the same requested DC system size, equipment class, roof planes, shade information and backup-load scope in each bid. Require each bidder to show its own monthly production estimate and explain material differences."
      ],
      [
        "Itemized price and finance",
        "Separate the cash prices for solar, battery, roof, panel work, permits and interconnection. Compare financing only after the underlying cash scope matches."
      ],
      [
        "Installer and service",
        "Name the legal contracting business, CSLB license, installation crew and company responsible for roof penetrations, equipment service and warranty claims. Confirm address coverage in writing."
      ]
    ],
    "sources": [
      {
        "label": "Riverside Public Utilities: solar process, interconnection and ongoing bills",
        "url": "https://www.riversideca.gov/utilities/residents/solar-info/all-about-solar"
      },
      {
        "label": "Riverside Public Utilities: current electric rules and rates index",
        "url": "https://www.riversideca.gov/utilities/residents/rates/electric-rules-rates"
      },
      {
        "label": "Riverside Public Utilities: electric service-area map (checked 2026-09-20)",
        "url": "https://riversideca.gov/utilities/about-rpu/service-area-maps"
      },
      {
        "label": "SCE: service-area lookup (checked 2026-09-20)",
        "url": "https://www.sce.com/customer-service-center/help-center/stop-start-move-service/faq/how-to-know-if-sce-is-my-electric-utility"
      },
      {
        "label": "CSLB: Solar Smart license and consumer information",
        "url": "https://www.cslb.ca.gov/solar"
      }
    ],
    "faq": [
      [
        "Does every Riverside address use RPU?",
        "Do not assume that from the city name. Check the provider on the current bill and use the official RPU map or SCE lookup before applying a utility-specific rate or interconnection rule."
      ],
      [
        "Will Riverside solar eliminate every utility bill?",
        "For an RPU account, RPU says grid-connected solar customers continue to receive utility bills. Ask the bidder to model remaining charges using the actual provider, usage and rate schedule."
      ],
      [
        "Does every Riverside project have the same interconnection process?",
        "No. The utility and project scope control. The bidder should identify the permit, inspection, interconnection, equipment scope and responsible parties for the specific address."
      ]
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/riverside-county",
        "label": "Utilities and permit activity across Riverside County"
      }
    ]
  },
  "san-luis-obispo": {
    name: "San Luis Obispo",
    county: "San Luis Obispo County",
    utility: "pge",
    sourceCheckedDate: "2026-09-23",
    bill: "San Luis Obispo homes get generation from Central Coast Community Energy (3CE) and delivery from PG&E; the Energy Commission's map places the whole city in both areas. That gives a solar account two true-ups a year: PG&E's for delivery and 3CE's, every December, for generation. A proposal should show both, using your own 3CE and PG&E charges.",
    local: "The City of San Luis Obispo permits rooftop solar through SolarAPP+ and its InfoSLO portal. SolarAPP+ charges $35 to review a solar application and $60 for solar plus storage; the contractor then submits the permit in InfoSLO, pays the City's permit fees online, and the permit is issued automatically within about a minute. Inspection requests made by 5:00 p.m. can be scheduled for the next business day.",
    example: "Ask each San Luis Obispo bidder whether it is filing a solar-only or a solar-plus-storage SolarAPP+ application, since the review fee differs ($35 or $60) and so does the equipment. Then ask which month each true-up falls in, PG&E's and 3CE's December one, and what the model expects each to show.",
    checks: [
      [
        "SolarAPP+ and InfoSLO",
        "Confirm the job will be approved in SolarAPP+ and permitted in InfoSLO, and who requests the inspection."
      ],
      [
        "Storage in the application",
        "Say whether the SolarAPP+ application is solar-only ($35) or solar plus storage ($60)."
      ],
      [
        "3CE and PG&E true-ups",
        "Show 3CE's December generation true-up and PG&E's delivery true-up separately."
      ],
      [
        "Contract and service",
        "Name the contracting business, its CSLB license and who handles service calls after installation."
      ]
    ],
    sources: [
      {
        "label": "City of San Luis Obispo: solar information (SolarAPP+ and InfoSLO)",
        "url": "https://www.slocity.org/government/department-directory/community-development/building-safety/permit-forms-and-applications/solar-documents"
      },
      {
        "label": "Central Coast Community Energy: Net Energy Metering 1.0 and 2.0 tariffs",
        "url": "https://3cenergy.org/billing/nem/"
      },
      {
        "label": "Central Coast Community Energy: Solar Billing Plan",
        "url": "https://3cenergy.org/solar-billing-plan/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How fast is a solar permit in San Luis Obispo?",
        "After SolarAPP+ approval and payment of the City's permit fees in InfoSLO, the City says the permit is issued automatically within about a minute. Inspection requests received by 5:00 p.m. may be scheduled for the next business day."
      ],
      [
        "What does SolarAPP+ cost in San Luis Obispo?",
        "SolarAPP+ charges $35 for a solar application and $60 for solar plus storage. The City's permit fees are separate and paid online in InfoSLO."
      ],
      [
        "When does 3CE true up solar customers?",
        "Every December for the generation side. Net energy metering customers are paid Net Surplus Compensation at 3CE's rate, $0.023 per kWh in PG&E territory since December 1, 2025, and residential customers with at least $200 in combined credits can ask for a check within 45 days."
      ]
    ],
    answer: "Solar companies in San Luis Obispo get the permit in about a minute: after SolarAPP+ approves the design ($35 for solar, $60 with storage), the contractor pays the City's fees in InfoSLO and the permit is issued automatically. Central Coast Community Energy supplies the city's generation and PG&E delivers it, with 3CE's true-up every December. Compare at least three written bids built on your own 3CE and PG&E bill.",
    keyFacts: [
      {
        "label": "SolarAPP+ review fee",
        "value": "$35 solar, $60 with storage",
        "note": "City permit fees are separate",
        "source": {
          "publisher": "City of San Luis Obispo",
          "date": "2026-09-23",
          "url": "https://www.slocity.org/government/department-directory/community-development/building-safety/permit-forms-and-applications/solar-documents"
        }
      },
      {
        "label": "Permit issued",
        "value": "About a minute",
        "note": "After fees are paid in InfoSLO",
        "source": {
          "publisher": "City of San Luis Obispo",
          "date": "2026-09-23",
          "url": "https://www.slocity.org/government/department-directory/community-development/building-safety/permit-forms-and-applications/solar-documents"
        }
      },
      {
        "label": "3CE true-up",
        "value": "Every December",
        "note": "Generation side; PG&E trues up delivery separately",
        "source": {
          "publisher": "Central Coast Community Energy",
          "date": "2026-09-23",
          "url": "https://3cenergy.org/billing/nem/"
        }
      }
    ],
    sections: [
      {
        "heading": "San Luis Obispo's five permit steps",
        "paragraphs": [
          "The City lists the path in order. The contractor registers or signs in to SolarAPP+, submits the design and pays SolarAPP+'s review fee: $35 for a solar application or $60 for solar plus storage. It then registers or logs in to InfoSLO, the City's permit portal, and submits the permit with the required documents. Once the permit fees are paid online, the permit is issued automatically in about a minute.",
          "The last step is the inspection, requested in the same portal. The City says requests received by 5:00 p.m. may be scheduled for the following business day. Ask your installer who will make the request and who will be on site when the inspector arrives."
        ]
      },
      {
        "heading": "3CE's rules for a San Luis Obispo solar account",
        "paragraphs": [
          "Central Coast Community Energy handles generation and PG&E handles transmission and delivery, so a 3CE solar customer sees PG&E's minimum monthly delivery charges and has two annual true-ups. Customers whose interconnection was approved before April 15, 2023 stay on net energy metering for their 20-year term: 3CE bills them monthly for net use, gives retail credits for excess, and at its December true-up pays Net Surplus Compensation as a bill credit. In PG&E territory that rate has been $0.023 per kWh since December 1, 2025. Residential customers with at least $200 in combined credits can ask for a check within 45 days of the true-up statement.",
          "Newer systems are on 3CE's Solar Billing Plan, which its board adopted in February 2024 and opened to residential customers in June 2024. Generation charges use 3CE's rates, exports earn Energy Export Credits priced hourly from the CPUC's Avoided Cost Calculator, and the balance is trued up each December. Ask each bidder which hours its model assumes you export in."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  "temecula": {
    "name": "Temecula",
    "county": "Riverside County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Most of Temecula is Southern California Edison territory: the Energy Commission's map puts about 93% of the city's area in SCE's service area and about 7% in SDG&E's, with no community choice provider over either. The two utilities have different solar rules and rates, so confirm from your own bill which one serves your address before comparing any savings estimate.",
    "local": "Temecula offers three plan-check routes for solar: SolarAPP+ with automatic permit issuance in the City's CSS portal, an expedited review of about 3 business days for systems built on City Standard Plans, and a standard review of 10 to 12 business days. Adding panels to an existing system does not qualify for SolarAPP+ or expedited review. Every SolarAPP+ permit also needs a Fire Department inspection before the building inspection.",
    "example": "If a Temecula bid includes a battery in the garage, ask whether your home has a residential fire sprinkler system. The City's fire rules do not allow energy storage in a garage without one, so a bid that places it there on an unsprinklered house will need a new location before it can pass inspection.",
    "checks": [
      [
        "Plan-check route",
        "Say whether the job uses SolarAPP+, the 3-day expedited route on City Standard Plans, or the 10-to-12-day standard review."
      ],
      [
        "Battery location",
        "Confirm storage is not in the garage unless the home has residential fire sprinklers."
      ],
      [
        "Fire inspection",
        "Say who books the required Fire Department inspection (951-308-6363) and brings the certificates of compliance."
      ],
      [
        "Which utility",
        "Confirm from your bill whether SCE or SDG&E serves the address and model that utility's solar rules."
      ]
    ],
    "sources": [
      {
        "label": "City of Temecula: photovoltaic systems (SolarAPP+, expedited and standard routes, fire requirements)",
        "url": "https://temeculaca.gov/304/Photovoltaic-Systems"
      },
      {
        "label": "SCE: Solar Billing Plan",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "CSLB: Solar Smart license and consumer information",
        "url": "https://www.cslb.ca.gov/solar"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      }
    ],
    "faq": [
      [
        "How long does a solar permit take in Temecula?",
        "SolarAPP+ approvals are issued automatically in the City's CSS portal. Systems built on City Standard Plans can use expedited review of about 3 business days, and other systems go through standard review of 10 to 12 business days."
      ],
      [
        "Can I put a home battery in my garage in Temecula?",
        "Only if the home has a residential fire sprinkler system. The City's fire rules also say no heat or smoke detector may be installed in the garage for this purpose, because none is currently listed for it."
      ],
      [
        "Does adding panels to an existing system qualify for fast permits in Temecula?",
        "No. The City says expansions to existing PV systems do not qualify for SolarAPP+ or expedited review."
      ],
      [
        "What are the best solar companies in Temecula?",
        "This site does not rank them. Look for a CSLB license covering solar, a company that has pulled Temecula permits through the City's CSS portal and knows the Fire Department inspection step, and written confirmation that it serves your address. The City reported 794 residential solar permits to the California Energy Commission for 2024, 41% issued online, so plenty of local installers file here; compare at least three written bids for the same system."
      ]
    ],
    "answer": "Temecula gives solar companies three permit routes: SolarAPP+ with automatic issuance, an expedited 3-business-day review for City Standard Plans, and a 10-to-12-day standard review. SolarAPP+ jobs also need a Fire Department inspection first, and batteries cannot go in a garage without fire sprinklers. Most of Temecula is SCE territory, with a small part in SDG&E's. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Expedited review",
        "value": "About 3 business days",
        "note": "City Standard Plans; standard review is 10 to 12 days",
        "source": {
          "publisher": "City of Temecula",
          "date": "2026-09-23",
          "url": "https://temeculaca.gov/304/Photovoltaic-Systems"
        }
      },
      {
        "label": "Battery in garage",
        "value": "Only with fire sprinklers",
        "note": "Temecula Fire Department requirement",
        "source": {
          "publisher": "City of Temecula",
          "date": "2026-09-23",
          "url": "https://temeculaca.gov/304/Photovoltaic-Systems"
        }
      },
      {
        "label": "Utility split",
        "value": "About 93% SCE, 7% SDG&E",
        "note": "Share of the city's area",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      }
    ],
    "sections": [
      {
        "heading": "Temecula's SolarAPP+ steps",
        "paragraphs": [
          "SolarAPP+ has been available in Temecula since September 30, 2023. The City's list runs in order: confirm the project qualifies, register for a Citizen Self Service (CSS) account, obtain a City business license, have a valid state contractor's license ready, register with SolarAPP+ and submit the design there for a fee, then apply for the building permit in CSS under SolarAPP+ Photovoltaic with the approved plans uploaded, which carries its own fee.",
          "The last step is specific to Temecula: a Fire Department inspection, booked at 951-308-6363, must be scheduled and passed before the building inspection can be scheduled. The fire inspector needs a certificate of compliance for all materials and parts, and the Fire Prevention Division does not accept an authorization to mark pages in its place; missing paperwork means a failed inspection and possible reinspection fees."
        ]
      },
      {
        "heading": "Batteries and the other two routes",
        "paragraphs": [
          "Temecula's fire rules shape where a battery can go. Energy storage is not allowed in a garage unless the home has a residential fire sprinkler system, and no heat or smoke detector may be installed in the garage to get around that, since none is currently listed for the purpose. Ask each bidder to show the storage location on its plan.",
          "Projects that do not use SolarAPP+ have two other routes. Systems drawn on the City's Standard Plans qualify for expedited review of about three business days; everything else goes through standard review of 10 to 12 business days, and plans that are not City Standard Plans do not get expedited review. All systems must meet the City's residential photovoltaic and digital submittal requirements, and expanding an existing system rules out both faster routes."
        ]
      }
    ],
    "contentModified": "2026-09-23",
    "projectLinks": [
      {
        "href": "/solar-companies/riverside-county",
        "label": "Utilities and permit activity across Riverside County"
      }
    ]
  },
  "murrieta": {
    "name": "Murrieta",
    "county": "Riverside County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Have each bidder use the electric utility and rate schedule printed on your bill. For an SCE account, distinguish the current Solar Billing Plan from confirmed legacy enrollment. Do not let a proposal for a nearby community determine your meter’s rate or export treatment.",
    "local": "Murrieta’s current self-service instructions direct residential roof-mounted solar applications through SolarAPP+ and other permits through its CSS portal. The city also describes how revised documents reach the permit record and what must be available at inspection. Ask the bidder to own that handoff.",
    "example": "Suppose the selected inverter or battery location changes after the permit is issued. Ask for revised plans, the updated production/backup model and confirmation that the city record was updated before inspection. An equipment substitution can affect more than the price.",
    "checks": [
      [
        "Roof versus ground mount",
        "Identify the mounting type and applicable city application route instead of assuming every project uses the same review."
      ],
      [
        "Inspection documents",
        "Name who maintains approved plans, inspection checklist and equipment specifications on site."
      ],
      [
        "Post-quote changes",
        "Request written cost, output and backup changes when equipment or layout changes."
      ]
    ],
    "provider": {
      "name": "New Day Solar",
      "url": "https://www.newdaysolar.com/",
      "detail": "Publishes a Murrieta solar installation site with residential solar and battery service information.",
      "ask": "Confirm address coverage and separate roof-mounted or ground-mounted design, permit revisions and storage scope."
    },
    "sources": [
      {
        "label": "Murrieta Information Bulletin 125: residential solar photovoltaic permits ($450 fee)",
        "url": "https://www.murrietaca.gov/DocumentCenter/View/2399/Solar-Permits-Residential-IB-125"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "Murrieta: SolarAPP+, CSS and inspection instructions",
        "url": "https://www.murrietaca.gov/1368/Self--Issuing-Permits-Solar-App"
      },
      {
        "label": "Murrieta: Permit Center",
        "url": "https://www.murrietaca.gov/1330/Permit-Center"
      },
      {
        "label": "SCE: Solar Billing Plan",
        "url": "https://www.sce.com/residential/generating-your-own-power/solar-billing-plan"
      },
      {
        "label": "New Day Solar: published service scope",
        "url": "https://www.newdaysolar.com/"
      },
      {
        "label": "IRS: Residential Clean Energy Credit",
        "url": "https://www.irs.gov/credits-deductions/residential-clean-energy-credit"
      },
      {
        "label": "CPUC: Self-Generation Incentive Program (Residential Solar and Storage Equity)",
        "url": "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/self-generation-incentive-program"
      },
      {
        "label": "California Revenue and Taxation Code § 73 (active solar energy system exclusion)",
        "url": "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=73"
      }
    ],
    "nearby": [
      "palm-desert"
    ],
    "faq": [
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
        "The city distinguishes residential roof-mounted solar applications from other permit types. Ask for the route appropriate to your actual mounting and electrical scope."
      ],
      [
        "What should I receive after equipment is substituted?",
        "Ask for the revised written scope, price, output assumptions and approved documents. Murrieta’s instructions require revised SolarAPP+ documents to be added to the permit record."
      ],
      [
        "Are there solar rebates in Murrieta?",
        "There is no federal credit on a 2026 purchase: the IRS says the Residential Clean Energy Credit is not available for property placed in service after December 31, 2025. What remains is state and utility programs: SCE's Energy Export Bonus Credit for customers who enroll in its Solar Billing Plan before 2028, SGIP incentives for income-qualified households, and California's property tax exclusion for solar, in effect until January 1, 2027. The Murrieta solar savings page walks through each."
      ]
    ],
    "answer": "Every solar company installing a residential roof-mounted system in Murrieta has to file it through SolarAPP+, and the City's bulletin puts the residential solar permit at $450. Murrieta homes are on Southern California Edison, and the Energy Commission's map shows no community choice provider here, so SCE's Solar Billing Plan sets how exports are paid. Compare three written bids against those two facts.",
    "keyFacts": [
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
    "sections": [
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
    "contentModified": "2026-09-23"
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
    sourceCheckedDate: "2026-09-23",
    hasSavingsGuide: false,
    bill: "Ventura's default generation provider is Clean Power Alliance, which has served the city since 2019 with its 100% Green option as the default; SCE delivers the power and sends the bill. CPA runs its own solar rules on the generation side: an April true-up for every customer and surplus paid at 10% above SCE's rate. Ask each bidder to model your actual CPA option and SCE delivery charges.",
    local: "The City of Ventura uses Symbium for automated solar permits under Senate Bill 379, and says eligible applications are issued in real time, in a matter of minutes. To use it, the applicant must be a contractor holding an A, B, C-10 or C-46 license with an active City of Ventura business license, and the system must be no larger than 38.4 kW AC. Inspections are booked through Ventura OPS or the City's inspection request line.",
    example: "Ask each Ventura bidder to confirm three things in writing: the CSLB license class it will file under, its active City of Ventura business license, and that the design is 38.4 kW AC or smaller. Those are the conditions for the City's instant Symbium permit; a bid that cannot meet them is headed for a slower route.",
    checks: [
      [
        "Symbium eligibility",
        "Confirm an A, B, C-10 or C-46 license, an active City of Ventura business license and a system no larger than 38.4 kW AC."
      ],
      [
        "Ventura OPS account",
        "Say who holds the Ventura OPS account used to apply and to schedule the inspection."
      ],
      [
        "CPA option",
        "Model your actual Clean Power Alliance option, 100% Green by default in Ventura, plus SCE delivery charges."
      ],
      [
        "Roof and electrical scope",
        "Separate roof work, service or subpanel changes, storage and backup circuits from the core array price."
      ]
    ],
    sources: [
      {
        "label": "City of Ventura: contractor solar permits under SB 379 (Symbium)",
        "url": "https://www.cityofventura.ca.gov/2554/Contractor-Solar-Permits-SB-379"
      },
      {
        "label": "Clean Power Alliance: Ventura (default option, service start)",
        "url": "https://cleanpoweralliance.org/place/ventura/"
      },
      {
        "label": "Clean Power Alliance: solar, NEM and Solar Billing Plan",
        "url": "https://cleanpoweralliance.org/solar/"
      },
      {
        "label": "SCE: Base Services Charge",
        "url": "https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc"
      },
      {
        "label": "CSLB: Solar Smart license and consumer information",
        "url": "https://www.cslb.ca.gov/solar"
      }
    ],
    faq: [
      [
        "How fast is a solar permit in Ventura?",
        "The City says applications submitted through Symbium are issued in real time, in a matter of minutes, when the contractor and system meet its eligibility rules. Symbium's processing fee is non-refundable."
      ],
      [
        "Who can pull an instant solar permit in Ventura?",
        "A contractor with an A, B, C-10 or C-46 license and an active City of Ventura business license, for a system no larger than 38.4 kW AC."
      ],
      [
        "What does Clean Power Alliance pay for extra solar in Ventura?",
        "CPA trues up solar customers every April and pays annual surplus at a rate 10% higher than SCE's Net Surplus Compensation rate. Credits over $100 are paid by check; smaller credits stay on the bill unless you ask for a check."
      ]
    ],
    answer: "Ventura issues eligible solar permits in minutes through Symbium, the City's automated platform under Senate Bill 379, when the contractor holds an A, B, C-10 or C-46 license and an active City business license and the system is 38.4 kW AC or smaller. Clean Power Alliance supplies Ventura's generation, 100% Green by default, and SCE delivers it. Compare at least three written bids built on your own bill.",
    keyFacts: [
      {
        "label": "Permit platform",
        "value": "Symbium",
        "note": "Issued in real time for eligible applications",
        "source": {
          "publisher": "City of Ventura",
          "date": "2026-09-23",
          "url": "https://www.cityofventura.ca.gov/2554/Contractor-Solar-Permits-SB-379"
        }
      },
      {
        "label": "Size limit",
        "value": "38.4 kW AC",
        "note": "Plus A, B, C-10 or C-46 license and City business license",
        "source": {
          "publisher": "City of Ventura",
          "date": "2026-09-23",
          "url": "https://www.cityofventura.ca.gov/2554/Contractor-Solar-Permits-SB-379"
        }
      },
      {
        "label": "Default generation option",
        "value": "CPA 100% Green",
        "note": "Serving Ventura since 2019; SCE delivers",
        "source": {
          "publisher": "Clean Power Alliance",
          "date": "2026-09-23",
          "url": "https://cleanpoweralliance.org/place/ventura/"
        }
      }
    ],
    sections: [
      {
        "heading": "Ventura's Symbium permit in five steps",
        "paragraphs": [
          "The City lays out five steps: check that the project and contractor qualify, register for or sign in to a Ventura OPS account, apply through Symbium, receive the permit, and schedule the inspection. Qualification has three parts: an A, B, C-10 or C-46 contractor license, an active City of Ventura business license, and a system no larger than 38.4 kilowatts alternating current. Energy storage can be included.",
          "When those conditions are met, the City says the permit is issued in real time, in a matter of minutes. Symbium's processing fee is non-refundable. Inspections are scheduled through Ventura OPS or by calling the inspection request line at 805-654-7874 between 8:30 a.m. and 3:00 p.m., and the City gives a three-hour arrival window."
        ]
      },
      {
        "heading": "Clean Power Alliance on a Ventura solar bill",
        "paragraphs": [
          "Clean Power Alliance became Ventura's default provider in 2019, with 100% Green Power as the city's default option. A home whose solar was approved by SCE on or before August 31, 2023 stays on CPA's net energy metering tariff for the rest of its 20-year eligibility; systems applying after that date are on CPA's Solar Billing Plan for generation and SCE's for delivery. Under the Solar Billing Plan, each monthly bill charges for energy drawn from the grid at your time-of-use rate and credits exports with Energy Export Credits priced by the CPUC's Avoided Cost Calculator.",
          "CPA trues up all of its solar customers each April rather than on each customer's own anniversary, and pays yearly surplus at a rate 10% above SCE's Net Surplus Compensation rate. Credits over $100 arrive by check; smaller ones offset future CPA charges unless you ask for a check. SCE's fixed Base Services Charge, $24.15 a month for customers not on CARE or FERA, remains on the delivery side."
        ]
      }
    ],
    contentModified: "2026-09-23",
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
  "victorville": {
    "name": "Victorville",
    "county": "San Bernardino County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-12",
    "hasSavingsGuide": false,
    "bill": "Start with the electricity provider, rate plan and usage history shown on the actual account. A proposal should state its system-production and remaining-bill assumptions for the property. A generic city estimate cannot determine the outcome for an individual meter.",
    "local": "Victorville describes SolarAPP+ as an automated code-compliance path for eligible residential roof-mounted retrofit systems and publishes a separate permit-center process. Ask the bidder to identify the path, approved plans, permit number and inspection steps for the actual scope.",
    "example": "Give each bidder the same full-year usage history and roof layout. Then separate the array, storage, roof work, service work, permit/inspection duties and contract total. Compare the written scope and remaining-bill model before comparing a monthly payment.",
    "checks": [
      [
        "Bill inputs",
        "Use the actual account's rate plan and usage history. Request the production and remaining-bill assumptions in writing."
      ],
      [
        "City approval",
        "Ask which permit route applies, who keeps the approved plans and who schedules the inspection using the City permit record."
      ],
      [
        "Scope changes",
        "If the equipment, roof work, storage or electrical service changes, ask for the revised plans and a written change to cost and scope."
      ]
    ],
    "sources": [
      {
        "label": "City of Victorville: SolarAPP+ automated solar-plan reviews",
        "url": "https://www.victorvilleca.gov/Government/City-Departments/Building/SolarApp-Automated-Solar-Plan-Reviews"
      },
      {
        "label": "City of Victorville: Building Permit Center process",
        "url": "https://www.victorvilleca.gov/Government/City-Departments/Building/Permit-Center"
      },
      {
        "label": "SCE: residential rate-plan information",
        "url": "https://www.sce.com/customer-service-center/help-center/rate-plans-pricing/resources/rates-faq"
      },
      {
        "label": "CSLB: Solar Smart license and consumer information",
        "url": "https://www.cslb.ca.gov/solar"
      }
    ],
    "faq": [
      [
        "Does every Victorville solar project use SolarAPP+?",
        "No. Victorville describes SolarAPP+ for eligible residential roof-mounted retrofit systems. Ask the bidder to identify the path and any additional review for the property's actual scope."
      ],
      [
        "Can I decide from an advertised monthly payment?",
        "No. Compare the full written price or total payments, roof and electrical scope, permit duties, production inputs and remaining utility charges."
      ]
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/high-desert",
        "label": "Solar companies across the High Desert"
      }
    ]
  },
  "petaluma": {
    "name": "Petaluma",
    "county": "Sonoma County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Petaluma customers get one PG&E bill with two providers on it: PG&E for delivery and Sonoma Clean Power for generation, across the whole city on the Energy Commission's map. Sonoma Clean Power credits the extra energy your system sends to the grid on its side of the bill, and each spring compensates surplus at the Net Surplus Compensation rate, up to $5,000 a year. Have each bidder model both halves from your own account.",
    "local": "Petaluma's SolarAPP+ permit is for rooftop systems on a permitted main dwelling inside City of Petaluma jurisdiction, with no ballasted systems and no homes in a city flood zone. Only licensed contractors already registered with SolarAPP+ can use it, and permit runners may not. The contractor pays SolarAPP+'s $25 fee, then applies in the City's online permit portal with the SolarAPP+ approval ID, plan set and a Contractor Disclosures Form.",
    "example": "If your home sits in one of Petaluma's flood zones, the instant permit is off the table and the job goes through regular review, which the schedule should reflect. For everyone else, ask each bidder to show whether the design fits SolarAPP+, and to separate Sonoma Clean Power's generation credits from PG&E's delivery charges in its savings estimate.",
    "checks": [
      [
        "Flood zone",
        "Confirm whether the home is in a city flood zone; if so, SolarAPP+ cannot be used."
      ],
      [
        "Who files",
        "Confirm the licensed contractor itself files the SolarAPP+ permit; permit runners are not allowed."
      ],
      [
        "Paperwork",
        "Include the SolarAPP+ approval ID, plan set and Contractor Disclosures Form in the City application."
      ],
      [
        "SCP and PG&E",
        "Model Sonoma Clean Power generation credits and PG&E delivery charges separately."
      ]
    ],
    "sources": [
      {
        "label": "City of Petaluma: solar permits through SolarAPP+",
        "url": "https://cityofpetaluma.org/solar-permit/"
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
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      },
      {
        "label": "CSLB: Solar Smart license and consumer information",
        "url": "https://www.cslb.ca.gov/solar"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/santa-rosa",
        "label": "Santa Rosa, Sonoma Clean Power's largest city"
      },
      {
        "href": "/blog/is-it-better-to-buy-or-lease-solar-panels-california",
        "label": "Buying or leasing solar panels in California"
      },
      {
        "href": "/solar-companies/bay-area",
        "label": "Bay Area providers and permit offices compared"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Petaluma?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that are registered with SolarAPP+ and confirm your address in writing, then compare at least three written bids for the same system built on your PG&E and Sonoma Clean Power bill."
      ],
      [
        "Which Petaluma solar companies offer leases?",
        "This site does not track which companies offer leases in Petaluma, and offers change. Under a lease or power purchase agreement the provider owns the system, so compare the total of every payment, the escalator and what happens when you sell the house against the price of buying the same system."
      ],
      [
        "Can I use SolarAPP+ if my Petaluma home is in a flood zone?",
        "No. The City's eligibility list for SolarAPP+ excludes homes located in a city flood zone, along with ballasted systems and anything other than a permitted residential main dwelling rooftop. Those projects need the City's regular permit review."
      ],
      [
        "What does Sonoma Clean Power pay for extra solar?",
        "Each spring it compensates surplus energy sent to the grid at the Net Surplus Compensation rate, up to $5,000 a year. A payment over $200 comes as a check; $200 or less appears as a credit on the electric bill."
      ],
      [
        "How many solar permits does Petaluma issue?",
        "Petaluma reported 669 residential solar permits to the California Energy Commission for 2022, 673 for 2023 and 334 for 2024, all issued online. Battery storage rose from about 10% of permits in 2022 to 84% in 2024."
      ]
    ],
    "answer": "Solar companies in Petaluma can get an instant City permit through SolarAPP+ for a rooftop system on a permitted home, but not for a home in a city flood zone, and permit runners cannot file it. PG&E delivers the power and Sonoma Clean Power supplies the generation, paying surplus each spring up to $5,000 a year. Every Petaluma solar permit from 2022 through 2024 was issued online. Compare at least three written bids.",
    "keyFacts": [
      {
        "label": "Instant permit",
        "value": "SolarAPP+",
        "note": "Not for homes in a city flood zone; no permit runners",
        "source": {
          "publisher": "City of Petaluma",
          "date": "2026-09-23",
          "url": "https://cityofpetaluma.org/solar-permit/"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "334",
        "note": "84% with storage, all issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Generation",
        "value": "Sonoma Clean Power",
        "note": "Spring surplus payment up to $5,000 a year",
        "source": {
          "publisher": "Sonoma Clean Power",
          "date": "2026-09-23",
          "url": "https://sonomacleanpower.org/solar-customers"
        }
      }
    ],
    "sections": [
      {
        "heading": "Petaluma's SolarAPP+ rules",
        "paragraphs": [
          "Petaluma's instant permit comes with a short eligibility list: a rooftop system on a permitted residential main dwelling, no ballasted systems, a location inside City of Petaluma jurisdiction, and not in a city flood zone. It is limited to licensed contractors who have already registered with SolarAPP+, and the City says permit runners are not allowed to request SolarAPP+ permits.",
          "The contractor submits the design on SolarAPP+ and pays its $25 processing fee, then applies in the City's online permit portal, searches for SolarAPP+, enters the approval ID and uploads the SolarAPP+ documents, plan sets and the City's Contractor Disclosures Form. The City's reports to the Energy Commission show how routine this has become: every one of 669 permits in 2022, 673 in 2023 and 334 in 2024 was issued online."
        ]
      },
      {
        "heading": "Sonoma Clean Power and the rise of batteries",
        "paragraphs": [
          "Sonoma Clean Power credits the extra energy a Petaluma system sends to the grid on the generation side of the PG&E bill. Each spring it compensates surplus at the Net Surplus Compensation rate, up to $5,000 a year, paying by check when the amount is over $200 and as a bill credit when it is $200 or less. PG&E handles delivery and its own true-up.",
          "Petaluma's permits also show how far the market has shifted toward storage: about 10% of 2022 permits included a battery, 12% in 2023 and 84% in 2024. A battery can be the right choice under the Solar Billing Plan, but it is also the largest single item a bid can add. Ask for solar alone and solar with storage, priced separately."
        ]
      }
    ],
    "contentModified": "2026-09-23",
    "hasSavingsGuide": false
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
  "anaheim": {
    "name": "Anaheim",
    "county": "Orange County",
    "utility": "apu",
    "sourceCheckedDate": "2026-09-12",
    "bill": "Anaheim Public Utilities is a municipal utility with its own solar and net-metering rules. Do not use an SCE or investor-owned-utility NEM 3 assumption. Have each bidder use the account's past twelve months, current Anaheim rate and published excess-energy treatment.",
    "local": "Anaheim publishes an online permit route for qualifying small residential rooftop systems. Its solar guidance also requires City permitting and utility interconnection steps. Ask who submits the engineering plan, handles review and inspection and includes any service-panel, roof or storage work.",
    "example": "Ask every bidder to use the same annual Anaheim usage and the same roof design. Compare monthly production, total price, financing terms, permit/interconnection duties and remaining Anaheim bill. Separate the battery and panel work from the core array.",
    "checks": [
      [
        "Anaheim utility rules",
        "Use Anaheim Public Utilities' current rate and solar program; reject an SCE or generic NEM assumption."
      ],
      [
        "Permit and interconnection",
        "Name who submits plans, completes inspection and satisfies Anaheim's utility and building requirements."
      ],
      [
        "Same system scope",
        "Compare equal equipment, production, roof, panel, storage and warranty scope before comparing price."
      ]
    ],
    "sources": [
      {
        "label": "Anaheim Public Utilities: solar energy and net metering",
        "url": "https://www.anaheim.net/636/Solar-Energy-and-Net-Metering"
      },
      {
        "label": "City of Anaheim: online rooftop-solar permit route",
        "url": "https://www.anaheim.net/6015/Online-Permit-Center"
      },
      {
        "label": "Anaheim Public Utilities: electric utility rules",
        "url": "https://www.anaheim.net/883/Electric-Utility-Rules"
      },
      {
        "label": "CSLB: Solar Smart license and consumer information",
        "url": "https://www.cslb.ca.gov/solar"
      }
    ],
    "faq": [
      [
        "Is Anaheim on the same NEM 3 program as SCE customers?",
        "No. Anaheim Public Utilities publishes its own wholesale-based NEM 2.0 program and says Anaheim is not moving to NEM 3. Use the municipal utility's current rules for the account."
      ],
      [
        "Should I compare at least three Anaheim solar bids?",
        "Anaheim's own solar guidance recommends obtaining bids from at least three contractors. Give each bidder the same usage and system scope so the totals are comparable."
      ]
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/orange-county",
        "label": "How Orange County cities differ on utilities and permits"
      }
    ]
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
  "irvine": {
    "name": "Irvine",
    "county": "Orange County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Check the generation provider and rate plan on the current SCE bill. Orange County Power Authority can provide generation while SCE delivers electricity and handles billing. Solar charges and credits belong to both sides, so a proposal should not model an SCE-only generation account unless that is what the bill shows.",
    "local": "Irvine now issues same-day permits for most home solar jobs through PermitsDIRECT!, powered by Symbium, when a licensed contractor applies for a rooftop system no larger than 38.4 kW with no more than one battery. Larger systems, or jobs with more than one battery, go through the IrvineReady! plan submission portal instead. Ask each bidder which route it will use and who answers the City if corrections come back.",
    "example": "Give every bidder the same SCE/OCPA bill history and roof layout. Compare monthly production, total contract price, financing, roof and panel work, storage, permit duties and remaining generation and delivery charges. A battery changes both scope and permit route.",
    "checks": [
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
    "sources": [
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
    "faq": [
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
    "answer": "Irvine runs its own program for choosing a solar company: Solarize Irvine, a partnership with the nonprofit OC Goes Solar, uses a community evaluation panel to vet and select contractors and negotiates group pricing. Whatever route you take, your panels will be permitted through the City's same-day PermitsDIRECT! system, and Orange County Power Authority (not SCE) sets how your exported generation is paid.",
    "keyFacts": [
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
    "sections": [
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
    "contentModified": "2026-09-23",
    "projectLinks": [
      {
        "href": "/solar-companies/orange-county",
        "label": "Utilities and permit offices across Orange County"
      }
    ]
  },
  "stockton": {
    "name": "Stockton",
    "county": "San Joaquin County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Since April 2025, Ava Community Energy has been the default generation provider in Stockton, after the City Council chose it; PG&E still delivers the power and sends the bill. Customers were enrolled automatically unless they opted out. The Energy Commission's community choice map, last updated in August 2025, does not yet show Stockton, so check the generation line on your own bill and have each bidder model Ava's solar rules if it says Ava.",
    "local": "Stockton's Building and Life Safety division lets licensed contractors get an auto-issued permit for most residential rooftop solar through SolarAPP+, which it calls the Residential Solar One Stop. Eligible jobs are on the main dwelling's roof of a permitted residential structure, with no ballasted or building-integrated systems. After SolarAPP+ approval, the contractor applies in the City's Accela Citizen Portal under the over-the-counter photovoltaic permit.",
    "example": "If your Stockton bill changed in 2025, compare bids against your new statement, not an older one. A home that moved to Ava has Ava generation charges and PG&E delivery charges, and a system installed now follows Ava's Solar Billing Plan rules, including the E-ELEC rate Ava requires, so a PG&E-only model is out of date.",
    "checks": [
      [
        "Generation provider",
        "Check whether your bill shows Ava or PG&E generation and model that provider's solar rules."
      ],
      [
        "SolarAPP+ eligibility",
        "Confirm panels go on the main dwelling's permitted roof and are not ballasted or building-integrated."
      ],
      [
        "City permit filing",
        "Say who files the OTC photovoltaic permit in the City's Accela Citizen Portal and books the inspection."
      ],
      [
        "Contract and service",
        "Name the contracting business, its CSLB license and who handles service calls after installation."
      ]
    ],
    "sources": [
      {
        "label": "City of Stockton: automated solar permitting (SolarAPP+ Residential Solar One Stop)",
        "url": "https://www.stocktonca.gov/business/building___life_safety/automated_solar_permitting.php"
      },
      {
        "label": "City of Stockton: Ava Community Energy",
        "url": "https://www.stocktonca.gov/government/city_manager/ava_community_engergy.php"
      },
      {
        "label": "Ava Community Energy: service to Stockton and Lathrop from April 2025",
        "url": "https://avaenergy.org/news/electricity-provider-ava-community-energy-brings-savings-to-stockton-and-lathrop/"
      },
      {
        "label": "Ava Community Energy: Solar Billing Plan",
        "url": "https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/"
      },
      {
        "label": "CSLB: Solar Smart license and consumer information",
        "url": "https://www.cslb.ca.gov/solar"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      }
    ],
    "faq": [
      [
        "Is Stockton served by Ava Community Energy?",
        "Yes. Ava became Stockton's default generation provider in April 2025; PG&E still delivers the power and sends the bill. Customers who opted out stay with PG&E for generation."
      ],
      [
        "How do I get a solar permit in Stockton?",
        "A licensed contractor submits the design to SolarAPP+, then applies in the City of Stockton Accela Citizen Portal under over-the-counter permits, OTC - Photovoltaic, entering the SolarAPP+ approval number, and the permit is auto-issued."
      ],
      [
        "Which solar projects qualify for Stockton's automated permit?",
        "Rooftop systems on the main dwelling of a permitted residential structure that meet SolarAPP+'s eligibility checklist. Ballasted and building-integrated systems do not qualify, and only licensed contractors can apply."
      ],
      [
        "What is the best solar company in Stockton?",
        "This site does not rank them, and no public source does in a way that fits one roof. Narrow the field to companies with a CSLB license covering solar that know the City's automated permit and model Ava's generation credits alongside PG&E's delivery charges, then compare at least three written bids for the same system."
      ],
      [
        "Which Stockton solar companies offer leases?",
        "Ask each bidder whether it offers a lease or power purchase agreement as well as cash and loan prices, all priced on the same system. The CSLB describes a lease as fixed monthly payments for a set term, typically 20 years, often with an escalator clause, and warns that selling the home during the term can be harder. Under a lease or PPA the company, not you, gets the tax benefits."
      ],
      [
        "How many solar permits does Stockton issue?",
        "The City reported 4,362 residential solar permits to the California Energy Commission for 2024, up from 3,224 in 2023. In 2024, 2,047 included battery storage and 2,278, about 52%, were issued online."
      ]
    ],
    "answer": "Solar companies in Stockton get an auto-issued permit for most home rooftop systems through SolarAPP+, which the City calls its Residential Solar One Stop, then file the over-the-counter photovoltaic permit in its Accela portal. Since April 2025 Ava Community Energy has supplied Stockton's generation by default, with PG&E delivering it. Compare at least three written bids built on your current Ava and PG&E bill.",
    "keyFacts": [
      {
        "label": "Permit route",
        "value": "SolarAPP+, auto-issued",
        "note": "Licensed contractors; main-dwelling rooftop systems",
        "source": {
          "publisher": "City of Stockton",
          "date": "2026-09-23",
          "url": "https://www.stocktonca.gov/business/building___life_safety/automated_solar_permitting.php"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "Ava Community Energy",
        "note": "Default since April 2025; PG&E delivers and bills",
        "source": {
          "publisher": "City of Stockton",
          "date": "2026-09-23",
          "url": "https://www.stocktonca.gov/government/city_manager/ava_community_engergy.php"
        }
      },
      {
        "label": "Ava export bonus",
        "value": "+$0.025/kWh, 3 to 8 p.m.",
        "note": "Solar Billing Plan customers not on CARE or FERA",
        "source": {
          "publisher": "Ava Community Energy",
          "date": "2026-09-23",
          "url": "https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/"
        }
      }
    ],
    "sections": [
      {
        "heading": "Stockton's Residential Solar One Stop",
        "paragraphs": [
          "Stockton's Building and Life Safety division, at 501 W. Weber Avenue, runs automated solar permits in three steps. First, eligibility: the panels go on the rooftop of the main dwelling, the structure is permitted and residential, the system is not ballasted or building-integrated, and the applicant is a licensed contractor. Second, the contractor submits the design to SolarAPP+ with its license information and pays SolarAPP+'s processing fee. Third, it logs into the City of Stockton Accela Citizen Portal, selects Over-the-Counter Permits and then OTC - Photovoltaic, enters the SolarAPP+ approval number and uploads the approval document.",
          "The permit is then issued automatically. Because the process relies on the contractor's license and SolarAPP+ registration, it also tells you something about who you are hiring: a contractor that cannot use it on a standard roof should explain why."
        ]
      },
      {
        "heading": "Ava's arrival and what it changes for solar",
        "paragraphs": [
          "The Stockton City Council chose Ava Community Energy, formerly East Bay Community Energy, as the default generation provider in 2022, and Ava began service in Stockton and Lathrop in April 2025, enrolling customers in its Bright Choice service unless they opted out. PG&E still delivers the power, maintains the lines and sends the bill.",
          "For a new solar system, that means Ava's Solar Billing Plan rules on the generation side. Ava requires its residential solar customers on that plan to take PG&E's E-ELEC rate, pays an extra $0.025 per kWh for exports between 3 and 8 p.m. to customers not on CARE or FERA, and an extra $0.01 per kWh on all exports to CARE and FERA customers. Ava settles its side each April; PG&E settles delivery on its own date."
        ]
      }
    ],
    "contentModified": "2026-09-23",
    "projectLinks": [
      {
        "href": "/blog/ppa-loan-vs-solar-lease-vs-cash-california",
        "label": "Lease, PPA, loan or cash: the California comparison"
      },
      {
        "href": "/solar-problems/solar-escalator-clause-explained",
        "label": "What an escalator clause does to a lease payment"
      },
      {
        "href": "/solar-savings/central-valley",
        "label": "Central Valley utilities and permit reports"
      }
    ]
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
  "fallbrook": {
    "name": "Fallbrook",
    "county": "San Diego County",
    "utility": "sdge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "On the California Energy Commission's maps, all of Fallbrook is SDG&E delivery territory and San Diego Community Power generation territory; SDCP says it serves the unincorporated areas of San Diego County. Read the generation provider on your bill, since a customer can opt out. SDG&E puts residential Solar Billing Plan customers on EV-TOU-5, and SDCP adds $0.0075 per kWh to annual surplus payments.",
    "local": "Fallbrook has no city government, so building permits come from the County of San Diego's Planning & Development Services (PDS). The County reported no automated SB 379 permitting platform to the Energy Commission, and PDS publishes its solar requirements on its building forms page: online roof-mount solar PV submittal guidance, minimum plan requirements for photovoltaic projects, and a residential roof-mount solar PV plan check. Expect a plan review rather than an instant permit.",
    "example": "Put the same roof planes, shading and twelve months of usage into every Fallbrook bid, and ask each bidder how long its recent PDS solar permits took. Then compare the SDG&E delivery charges and SDCP generation charges each proposal leaves you with under EV-TOU-5, where on-peak runs from 4 to 9 p.m.",
    "checks": [
      [
        "County permit",
        "Say how the job will be submitted to San Diego County PDS and the expected plan review time."
      ],
      [
        "Generation",
        "Name SDCP or SDG&E from your bill and model that provider's solar credits."
      ],
      [
        "Rate plan",
        "Model SDG&E's EV-TOU-5 with on-peak from 4 to 9 p.m."
      ],
      [
        "System size",
        "Size to past use; SDG&E allows up to 50% more only with an attestation of higher use."
      ]
    ],
    "sources": [
      {
        "label": "County of San Diego Planning & Development Services: building permits and forms (solar PV submittal items)",
        "url": "https://www.sandiegocounty.gov/content/sdc/pds/bldgforms.html"
      },
      {
        "label": "San Diego Community Power: our community (member cities and unincorporated county)",
        "url": "https://sdcommunitypower.org/our-community/"
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
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SDG&E: Solar Billing Plan",
        "url": "https://www.sdge.com/solar/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/escondido",
        "label": "Escondido, a North County city with its own permit office"
      },
      {
        "href": "/solar-savings/san-diego-county",
        "label": "San Diego County electric rates and bills"
      },
      {
        "href": "/blog/sdge-time-of-use-rates-2026",
        "label": "SDG&E time-of-use hours and a solar estimate"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Fallbrook?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that have pulled San Diego County permits for unincorporated homes and confirm your address in writing, then compare at least three written bids for the same system."
      ],
      [
        "Who issues solar permits in Fallbrook?",
        "The County of San Diego's Planning & Development Services, because Fallbrook is unincorporated. The County reported no automated SB 379 solar permitting platform to the Energy Commission, so plan on a PDS plan review."
      ],
      [
        "Is Fallbrook served by San Diego Community Power?",
        "On the Energy Commission's community choice map, yes: SDCP covers all of Fallbrook, and SDCP says it serves the unincorporated areas of San Diego County. SDG&E still delivers the power and sends the bill. Check the generation provider printed on your own bill."
      ],
      [
        "What does SDCP pay for surplus solar?",
        "For net energy metering customers, San Diego Community Power pays the Net Surplus Compensation rate plus a $0.0075 per kWh bonus, and issues a check automatically when the amount exceeds $100 per account."
      ]
    ],
    "answer": "Fallbrook is unincorporated, so solar companies here pull the permit from the County of San Diego's Planning & Development Services, not a city, and the County reported no automated SB 379 platform to the Energy Commission. SDG&E delivers the power and San Diego Community Power, which serves unincorporated San Diego County, supplies the generation on the Commission's map. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Permit office",
        "value": "San Diego County PDS",
        "note": "Unincorporated; no automated SB 379 platform reported",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/media/9247"
        }
      },
      {
        "label": "Generation",
        "value": "San Diego Community Power",
        "note": "Serves unincorporated San Diego County",
        "source": {
          "publisher": "San Diego Community Power",
          "date": "2026-09-23",
          "url": "https://sdcommunitypower.org/our-community/"
        }
      },
      {
        "label": "Delivery",
        "value": "SDG&E",
        "note": "EV-TOU-5 for Solar Billing Plan customers",
        "source": {
          "publisher": "SDG&E",
          "date": "2026-09-23",
          "url": "https://www.sdge.com/solar/solar-billing-plan"
        }
      }
    ],
    "sections": [
      {
        "heading": "Permits for an unincorporated Fallbrook home",
        "paragraphs": [
          "Fallbrook is a community of unincorporated San Diego County, so there is no city building department. The County of San Diego's Planning & Development Services issues building permits here, and its building forms page lists the solar documents it works from: online roof-mount solar PV submittal guidance, minimum plan requirements for solar photovoltaic projects, a residential roof-mount solar PV building code plan check, and the residential building permit application.",
          "The County told the Energy Commission it has no automated SB 379 solar permitting platform, and it has not filed an annual permit report in the Commission's data file. That means a Fallbrook project is reviewed by County staff rather than approved instantly. Ask each bidder how many unincorporated San Diego County permits it has pulled recently and how long they took."
        ]
      },
      {
        "heading": "SDG&E and SDCP on a Fallbrook bill",
        "paragraphs": [
          "San Diego Community Power says it serves the unincorporated areas of San Diego County, and the Energy Commission's community choice map shows it over all of Fallbrook. SDCP supplies the generation and credits solar on its side of the bill; for net energy metering customers it pays surplus at the Net Surplus Compensation rate plus $0.0075 per kWh and mails a check when the amount exceeds $100. Its Solar Billing Plan customers keep their terms for nine years from permission to operate.",
          "SDG&E delivers the power, sends the bill and sets the rate plan: residential Solar Billing Plan customers are on EV-TOU-5, with on-peak hours from 4 to 9 p.m. A battery lets a home carry midday solar into those hours, which SDG&E itself points out. Ask each bidder to show the SDG&E and SDCP portions of the bill separately."
        ]
      }
    ],
    "contentModified": "2026-09-23"
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
    sourceCheckedDate: "2026-09-23",
    bill: "Hayward is one of the Alameda County cities in Ava Community Energy's service area, so the generation line on a Hayward PG&E statement usually reads Ava. PG&E still owns the wires, reads the meter and mails the bill. A solar proposal for a Hayward home needs both sets of charges, taken from your own statement rather than a PG&E-only estimate.",
    local: "Hayward accepts residential solar permits through SolarAPP+, and in March 2025 the automated route carried most of the volume: the City's own permit log for March 2025 lists 25 photovoltaic permits issued through SolarAPP+ against 10 conventional flush-mount permits. Before applying, the City asks you to confirm the address is inside Hayward rather than unincorporated Alameda County, and whether it falls in Hayward's Airport Safety Zone, where an FAA glare review comes first.",
    example: "If you live near Hayward's airport, ask each bidder to check the City's map for the Airport Safety Zone before quoting a start date. Inside the zone, the City will not process the permit until the FAA has reviewed a glare study with Form 7460-1 and issued a finding of No Hazard.",
    sources: [
      {
        "label": "City of Hayward: permits issued by work class, March 2025 (SolarAPP+ photovoltaic permits)",
        "url": "https://www.hayward-ca.gov/sites/default/files/documents/Permit-Log-March-2025.pdf"
      },
      {
        "label": "City of Hayward: residential solar requirements checklist (airport glare, drawings, inspection)",
        "url": "https://www.hayward-ca.gov/sites/default/files/documents/005-Residential-Solar-Checklist.pdf"
      },
      {
        "label": "Ava Community Energy: Solar Billing Plan",
        "url": "https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "Does Hayward use SolarAPP+ for solar permits?",
        "Yes. The City's March 2025 permit log lists 25 residential photovoltaic permits issued through SolarAPP+ that month, along with SolarAPP+ revision permits, and 10 conventional flush-mount permits."
      ],
      [
        "Do homes near Hayward's airport need extra approval for solar?",
        "Yes, if they are in the City's Airport Safety Zone. The applicant prepares a glare study, files FAA Form 7460-1, and gives the City the FAA's finding of No Hazard before the permit is processed."
      ],
      [
        "What does the inspector need at a Hayward solar final?",
        "The City's checklist asks for a safe ladder rated for at least 250 pounds, extending 3 feet above the roof and secured, and access to check smoke and carbon monoxide alarms, or a signed self-certification for them."
      ],
    ],
    checks: [
      [
        "City or county",
        "Confirm on the City's map that the address is in Hayward, not unincorporated Alameda County, which permits separately."
      ],
      [
        "Airport Safety Zone",
        "Check whether the home is in the zone; if so, say who prepares the glare study and files FAA Form 7460-1."
      ],
      [
        "Mounting",
        "Say whether panels are flush-mounted; tilted panels need engineer-stamped structural calculations and hourly plan review."
      ],
      [
        "Ava and PG&E bill",
        "Model Ava generation, the E-ELEC rate it requires on the Solar Billing Plan, and PG&E delivery."
      ]
    ],
    answer: "Solar companies in Hayward can file home solar permits through SolarAPP+; the City's March 2025 permit log lists 25 SolarAPP+ photovoltaic permits that month. Two local checks come first: that the address is in Hayward rather than unincorporated Alameda County, and whether it sits in the Airport Safety Zone, which needs an FAA glare review. Ava supplies Hayward's generation and PG&E delivers it. Compare at least three written bids.",
    keyFacts: [
      {
        "label": "SolarAPP+ permits, March 2025",
        "value": "25",
        "note": "Plus 10 conventional flush-mount permits",
        "source": {
          "publisher": "City of Hayward",
          "date": "2026-09-23",
          "url": "https://www.hayward-ca.gov/sites/default/files/documents/Permit-Log-March-2025.pdf"
        }
      },
      {
        "label": "Near the airport",
        "value": "FAA No Hazard finding",
        "note": "Required in the Airport Safety Zone before the City processes the permit",
        "source": {
          "publisher": "City of Hayward",
          "date": "2026-09-23",
          "url": "https://www.hayward-ca.gov/sites/default/files/documents/005-Residential-Solar-Checklist.pdf"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "Ava Community Energy",
        "note": "PG&E delivers and bills",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      }
    ],
    sections: [
      {
        "heading": "Hayward's airport glare rule",
        "paragraphs": [
          "Hayward's solar checklist has a section on aviation. The City notes that some installations near the airport could affect the vision of pilots, air traffic controllers and passengers, or interfere with VHF radio. So before applying, you check the City's web map for two things: that the address is within Hayward and not unincorporated Alameda County, and whether it lies in the Airport Safety Zone.",
          "Inside the zone, the applicant prepares a glare study, using the FAA's Solar Glare Hazard Analysis Tool, to go with FAA Form 7460-1, and submits the package to the FAA. The City processes the permit only after it receives the FAA's finding of No Hazard. Outside the zone, the application proceeds normally."
        ]
      },
      {
        "heading": "Mounting, inspection and Ava's solar rules",
        "paragraphs": [
          "The City's checklist says flush-mounted panels do not need structural calculations, but panels tilted steeper than the roof do, to verify wind resistance, and those calculations must be stamped and signed by an engineer and are reviewed at hourly rates. At the final inspection, the permit holder provides a safe ladder rated for at least 250 pounds that extends 3 feet above the roof and is secured, and the home must be open so the inspector can check smoke and carbon monoxide alarms; a signed self-certification can be offered instead.",
          "For the bill, expect Ava's Solar Billing Plan terms: residential solar customers must move to E-ELEC, and Ava tops up the export credit by 2.5 cents per kWh in the 3-to-8 p.m. window (1 cent on every exported kWh for CARE and FERA households). A Hayward bid that counts that bonus on midday exports is overstating it."
        ]
      }
    ],
    contentModified: "2026-09-23",
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
    "name": "Lake Elsinore",
    "county": "Riverside County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Lake Elsinore is Southern California Edison territory for both delivery and generation: the California Energy Commission's map shows no community choice provider over the city. A new system goes on SCE's Solar Billing Plan, so a proposal should use SCE's hourly export credits and your own SCE usage, not a retail-rate estimate.",
    "local": "Lake Elsinore takes building and fire permit applications, plan uploads, fee payments and inspection requests through its online Citizen Self-Service Portal, and every residential solar permit the City reported to the Energy Commission for 2022 and 2023 was issued online. The City's written solar requirements add local detail: 36-inch clearances at the ridge, valleys and eaves, and a structural analysis when the roof and array together weigh more than 10 pounds per square foot.",
    "example": "Lake Elsinore bids differ most on the roof. Ask each bidder for the array's weight per square foot and your roof's existing dead load, since a total over 10 pounds per square foot, a tile roof or a trussed roof means engineering calculations. For a ground mount, ask about the 10-foot vegetation clearance and whether Planning must approve the site plan.",
    "checks": [
      [
        "Roof load",
        "State the array weight and existing roof dead load; over 10 lb/sq ft, a tile roof or trusses require engineering calculations."
      ],
      [
        "Fire clearances",
        "Show 36-inch clearances at the ridge, valleys and eaves, or three ground-to-ridge access points if the array runs to the eave."
      ],
      [
        "Ground mount",
        "Keep a 10-foot mowed or vegetation-free perimeter and confirm whether Planning approval of the site plan is needed."
      ],
      [
        "SCE billing",
        "Model SCE's Solar Billing Plan from your own bill, with the nine-year credit lock and settlement month."
      ]
    ],
    "sources": [
      {
        "label": "City of Lake Elsinore Building and Safety: residential solar photovoltaic requirements (DOCX)",
        "url": "https://www.lake-elsinore.org/DocumentCenter/View/1488/Solar-Requirements-DOCX"
      },
      {
        "label": "City of Lake Elsinore: Citizen Self-Service Portal",
        "url": "https://www.lake-elsinore.org/446/Citizen-Self-Service-Portal"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/riverside-county",
        "label": "Utilities and permit offices across Riverside County"
      },
      {
        "href": "/blog/solar-pool-heating-california",
        "label": "Solar pool heating: how it differs from solar panels"
      },
      {
        "href": "/blog/sce-settlement-bill",
        "label": "Reading SCE's annual solar settlement bill"
      }
    ],
    "faq": [
      [
        "How do I get a solar permit in Lake Elsinore?",
        "The contractor registers for the City's Citizen Self-Service Portal, submits the building permit application with the plans, pays the fees and requests inspections there. The City reported all 1,125 of its 2023 residential solar permits to the Energy Commission as issued online."
      ],
      [
        "What roof rules apply to solar in Lake Elsinore?",
        "The City's solar requirements call for 36-inch clearances at the ridgeline, valleys and eaves; an array may run down to the eave if three access points from the ground to the ridge remain. If the roof's existing dead load plus the array exceeds 10 pounds per square foot, or the roof is tile or trussed, the plans need engineering calculations."
      ],
      [
        "Is there a community choice provider in Lake Elsinore?",
        "No. The California Energy Commission's map shows Lake Elsinore entirely in SCE territory with no community choice aggregator, so SCE supplies both generation and delivery."
      ],
      [
        "Does solar pool heating need the same permit as solar panels?",
        "The City's solar requirement sheet covers photovoltaic systems, which make electricity. Solar pool heating uses the sun to heat pool water instead, so ask the City which permit applies to it; the site's solar pool heating guide explains how the two differ."
      ]
    ],
    "answer": "Solar companies in Lake Elsinore apply through the City's online Citizen Self-Service Portal, and the City reported every residential solar permit for 2022 and 2023 as issued online. Its written requirements call for 36-inch roof clearances and engineering calculations for heavy, tile or trussed roofs. SCE supplies and delivers the power, with no community choice provider. Compare at least three written bids built on your own SCE bill.",
    "keyFacts": [
      {
        "label": "Permits issued online",
        "value": "All 1,125 in 2023",
        "note": "1,303 in 2022, also all online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Structural analysis",
        "value": "Over 10 lb per sq ft",
        "note": "Roof dead load plus array; also tile or trussed roofs",
        "source": {
          "publisher": "City of Lake Elsinore",
          "date": "2026-09-23",
          "url": "https://www.lake-elsinore.org/DocumentCenter/View/1488/Solar-Requirements-DOCX"
        }
      },
      {
        "label": "Utility",
        "value": "SCE",
        "note": "No community choice provider",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      }
    ],
    "sections": [
      {
        "heading": "Lake Elsinore's written solar requirements",
        "paragraphs": [
          "The City's Building and Safety sheet for residential photovoltaic systems, written for the 2019 code cycle, spells out what a plan set has to show: module, panel, array and framing specifications; a plot plan with the array, setbacks, disconnects, inverters and meters; conduit and wire sizes; roof attachment and flashing details; an electrical single-line diagram with panel bus and breaker ratings; the required signage; and manufacturer brochures for the inverter, modules and racking. Ask your bidder which parts the City's current online submittal still requires.",
          "Two rules shape the design itself. Roof-mounted arrays keep a 36-inch clearance at the ridgeline, valleys and eaves, though an array may run to the eave if three access points from the ground to the ridge remain. And when the existing roof's dead load plus the array's weight exceeds 10 pounds per square foot, or the roof is tile or trussed, the submittal must include a structural analysis. Ground-mounted arrays need a 10-foot vegetation-free or mowed perimeter, and Planning may have to approve the site plan."
        ]
      },
      {
        "heading": "What the permit reports show, and SCE's billing",
        "paragraphs": [
          "Lake Elsinore reported 1,303 residential solar permits to the California Energy Commission for 2022 and 1,125 for 2023, every one issued online. Battery storage was still uncommon: 51 of the 2022 permits and 140 of the 2023 permits included it.",
          "New systems here go on SCE's Solar Billing Plan. SCE locks export credit values for nine years from the year you start, pays higher credits in June through September and on summer evenings, and gives customers who enroll before 2028 a bonus credit of about $0.04 per kWh, or about $0.09 if income-qualified. SCE itself says its export credits are worth less than what you pay for grid power, so ask each bidder to show the bill with and without a battery."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },

  lakewood: {
    name: "Lakewood",
    county: "Los Angeles County",
    utility: "sce",
    sourceCheckedDate: "2026-09-23",
    bill: "Lakewood homes buy both generation and delivery from Southern California Edison; the Energy Commission's map shows no community choice provider over the city. The Public Advocates Office estimated June 2026 SCE bills for customers not on CARE at about $152 a month where homes use around 385 kWh and $254 where they use around 700 kWh. Your own twelve months of SCE bills are the number a proposal should start from.",
    local: "The City of Lakewood permits residential rooftop solar through SolarAPP+, an automated online platform that runs a code-compliance check on most residential roof-mounted retrofit systems. The contractor registers with its license information, submits the design, and on approval receives a checklist and SolarAPP+ ID, pays the remaining fees and prints the permit. SolarAPP+'s initial processing fee covers up to three revisions.",
    example: "Ask each Lakewood bidder for its SolarAPP+ approval plan before you compare prices, and whether the design is a standard roof-mounted retrofit that SolarAPP+ can check. A bid that needs changes after approval should say whether they fall within the three revisions SolarAPP+'s fee covers, and who books the City inspection.",
    sources: [
      {
        "label": "City of Lakewood: solar permitting for homes (SolarAPP+)",
        "url": "https://www.lakewoodca.gov/Development-Services/Building/Solar-Permitting-for-Homes"
      },
      {
        "label": "SCE: Solar Billing Plan",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "SCE: Base Services Charge",
        "url": "https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc"
      },
      {
        "label": "CPUC Public Advocates Office: Q2 2026 Electric Rates Report",
        "url": "https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How do I get a solar permit in Lakewood, CA?",
        "Lakewood uses SolarAPP+. A licensed contractor registers, submits the design, and once SolarAPP+ approves it receives a checklist and SolarAPP+ ID, pays the remaining fees and prints the permit. Inspections are requested through the City's Building and Safety inspection line."
      ],
      [
        "Who provides electricity in Lakewood, California?",
        "Southern California Edison supplies and delivers the power. The Energy Commission's map shows no community choice provider over the city."
      ],
      [
        "What happens to extra solar power in Lakewood?",
        "A new system is on SCE's Solar Billing Plan: exports earn Energy Export Credits, the account is settled once a year in the month the system started service, and leftover surplus is paid at SCE's Net Surplus Compensation Rate, about $0.02 per kWh."
      ],
    ],
    checks: [
      [
        "SolarAPP+ eligibility",
        "Confirm the design is a residential, roof-mounted retrofit that meets SolarAPP+'s requirements."
      ],
      [
        "Revisions",
        "Ask how design changes after approval are handled and whether they fit within the three revisions the fee covers."
      ],
      [
        "Inspection",
        "Say who requests the City inspection and who meets the inspector."
      ],
      [
        "SCE bill",
        "Model SCE's Solar Billing Plan, its yearly settlement month and the fixed Base Services Charge from your own bill."
      ]
    ],
    answer: "Lakewood permits residential rooftop solar through SolarAPP+: the contractor submits the design online, gets an approval ID and checklist, pays the remaining fees and prints the permit, and SolarAPP+'s fee covers up to three revisions. SCE supplies and delivers Lakewood's electricity, and new systems go on SCE's Solar Billing Plan. Compare at least three written bids built on your own twelve months of SCE bills.",
    keyFacts: [
      {
        "label": "Permit platform",
        "value": "SolarAPP+",
        "note": "Residential roof-mounted retrofit systems",
        "source": {
          "publisher": "City of Lakewood",
          "date": "2026-09-23",
          "url": "https://www.lakewoodca.gov/Development-Services/Building/Solar-Permitting-for-Homes"
        }
      },
      {
        "label": "Revisions covered",
        "value": "Up to 3",
        "note": "Included in SolarAPP+'s initial processing fee",
        "source": {
          "publisher": "City of Lakewood",
          "date": "2026-09-23",
          "url": "https://www.lakewoodca.gov/Development-Services/Building/Solar-Permitting-for-Homes"
        }
      },
      {
        "label": "SCE fixed charge",
        "value": "$24.15/month",
        "note": "Base Services Charge, customers not on CARE or FERA",
        "source": {
          "publisher": "SCE",
          "date": "2026-09-23",
          "url": "https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc"
        }
      }
    ],
    sections: [
      {
        "heading": "Lakewood's SolarAPP+ steps",
        "paragraphs": [
          "Lakewood's Building and Safety Division lists five steps. The contractor submits the design through SolarAPP+, registering with its contractor license information. When the design is approved, SolarAPP+ issues a checklist and a SolarAPP+ ID. The contractor then pays the remaining City fees when prompted and prints the permit. SolarAPP+ charges its own processing fee for the plan review, and that initial fee covers up to three revisions.",
          "Inspections are requested through the Building and Safety Division's inspection line at 562-866-9771, extension 2350, or by the inspection-request email address on the City's page. Because the platform is built for standard roof-mounted retrofits, a ground mount or an unusual roof structure may need a different path; ask the bidder to confirm eligibility against SolarAPP+'s requirements before quoting a start date."
        ]
      },
      {
        "heading": "Reading an SCE proposal in Lakewood",
        "paragraphs": [
          "Since November 2025, SCE bills have carried a Base Services Charge of $24.15 a month for customers not on CARE or FERA, $12.08 on FERA and $6.00 on CARE. It pays for the grid rather than the energy you use, so solar does not shrink it. Any savings figure in a Lakewood proposal should come off the part of the bill that solar can actually reduce.",
          "Under SCE's Solar Billing Plan, energy sent to the grid earns Energy Export Credits whose value changes with the hour, and SCE settles the account once a year in the month the system began service. Surplus left after that settlement is paid at SCE's Net Surplus Compensation Rate, which SCE puts at about two cents per kWh. SCE also says that storing your own energy for expensive hours is now worth more than exporting it, which is why a battery quote deserves its own line."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },

  "long-beach": {
    name: "Long Beach",
    county: "Los Angeles County",
    utility: "sce",
    sourceCheckedDate: "2026-09-23",
    bill: "The City's own solar bulletin names Southern California Edison as the utility that provides electrical power in Long Beach, and the Energy Commission's map shows no community choice provider over the city, so SCE supplies both generation and delivery. SCE must approve the interconnection before a system may run, a step separate from the City's permit. A new system goes on SCE's Solar Billing Plan, and the fixed Base Services Charge stays on the bill.",
    local: "Long Beach issues an express electrical permit for flush-mounted rooftop solar of 38.4 kW or less that passes its Express Checklist, FORM-016 for homes, under Information Bulletin IB-023. The bulletin lists the total fee, surcharges and inspections included: $386.62 for solar without storage, $447.45 for solar with a battery, and $264.95 for a battery alone. Applications go through the City's online portal.",
    example: "Two Long Beach bids for the same roof should quote the same City permit fee: $386.62 without a battery or $447.45 with one, if the design passes the Express Checklist. If a bid carries a larger permit line, ask which checklist item it expects to fail, since that triggers planning, electrical, building or fire review and extra fees.",
    sources: [
      {
        "label": "City of Long Beach: Information Bulletin IB-023, express permit for rooftop solar PV of 38.4 kW or less (rev. 07-17-2024)",
        "url": "https://longbeach.gov/globalassets/lbcd/media-library/documents/building--safety/information-bulletins/ib-023"
      },
      {
        "label": "City of Long Beach: solar permit",
        "url": "https://longbeach.gov/lbcd/building/permit-center/solar-permit/"
      },
      {
        "label": "SCE: Solar Billing Plan",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "SCE: Base Services Charge",
        "url": "https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How much is a solar permit in Long Beach?",
        "Under Information Bulletin IB-023, the express permit for a flush-mounted rooftop system of 38.4 kW or less costs $386.62 for solar without storage, $447.45 for solar with a battery and $264.95 for a battery alone, including surcharges, filing fees and inspections. Projects that need extra review can cost more."
      ],
      [
        "Do historic homes in Long Beach need extra approval for solar?",
        "Yes. If the project is in a historic district or on a qualified historical building, it needs planning review and a Planning Permit or Certificate of Appropriateness in addition to the express permit."
      ],
      [
        "Is Long Beach served by SCE?",
        "Yes. The City's solar bulletin names Southern California Edison as the utility that provides electrical power in Long Beach, and SCE's interconnection approval is required before a system may operate."
      ],
    ],
    checks: [
      [
        "Express Checklist",
        "Confirm every item on FORM-016 is a Yes, so the job gets the express permit rather than full plan review."
      ],
      [
        "Historic status",
        "Check whether the home is in a historic district or is a qualified historical building, which adds planning review and a certificate of appropriateness."
      ],
      [
        "SCE interconnection",
        "Say who files SCE's interconnection request and when, since the system cannot operate until SCE approves it."
      ],
      [
        "Permit fee in the price",
        "Show the City's permit fee as its own line and whether it matches the IB-023 figure for your system."
      ]
    ],
    answer: "Long Beach publishes its solar permit price: an express permit for a flush-mounted rooftop system of 38.4 kW or less costs $386.62 without storage and $447.45 with a battery, inspections included, if the design passes the City's Express Checklist. SCE supplies and delivers Long Beach's power and must approve the interconnection. Compare at least three written bids that show the same permit fee and model your own SCE bill.",
    keyFacts: [
      {
        "label": "Express permit, solar only",
        "value": "$386.62",
        "note": "Includes surcharges, filing fees and inspections",
        "source": {
          "publisher": "City of Long Beach, IB-023",
          "date": "2026-09-23",
          "url": "https://longbeach.gov/globalassets/lbcd/media-library/documents/building--safety/information-bulletins/ib-023"
        }
      },
      {
        "label": "Express permit, solar + battery",
        "value": "$447.45",
        "note": "Battery alone: $264.95",
        "source": {
          "publisher": "City of Long Beach, IB-023",
          "date": "2026-09-23",
          "url": "https://longbeach.gov/globalassets/lbcd/media-library/documents/building--safety/information-bulletins/ib-023"
        }
      },
      {
        "label": "Size limit for express route",
        "value": "38.4 kW",
        "note": "Flush-mounted rooftop systems",
        "source": {
          "publisher": "City of Long Beach, IB-023",
          "date": "2026-09-23",
          "url": "https://longbeach.gov/globalassets/lbcd/media-library/documents/building--safety/information-bulletins/ib-023"
        }
      }
    ],
    sections: [
      {
        "heading": "Long Beach's express solar permit",
        "paragraphs": [
          "Information Bulletin IB-023, revised in July 2024, is the City's guide to its streamlined solar permit. It covers flush-mounted systems of 38.4 kW or less on the roofs of one- and two-family homes, apartment buildings and nonresidential buildings. For a home, the applicant completes the Community Development Permit application and FORM-016, the Express Checklist for residential rooftop solar, and every item must be answered Yes. The submittal adds electrical plans, a site diagram and a roof plan showing access points, clear pathways, the system's fire classification and required labels.",
          "A project that passes gets an express electrical permit with no separate planning, electrical, building or fire review. Any No on the checklist sends that part of the project to review, with added fees. Planning review is triggered when the property is in a historic district or is a qualified historical building, in which case a Planning Permit or Certificate of Appropriateness is also needed. Once the permit is issued, installation can start and the inspections can be scheduled when the applicant is ready."
        ]
      },
      {
        "heading": "Inspection day and SCE's approval",
        "paragraphs": [
          "At inspection, the checklist, construction documents and job card must be on site, every part of the installation must be accessible, and any ladder the inspector needs must meet OSHA requirements and be set up safely. Approval comes with the final inspection. Ask your installer who will be there to meet the inspector.",
          "The City's approval is not the last step. IB-023 tells applicants to contact SCE at the start of planning, because SCE's interconnection approval is a separate process and the system may not operate until it is granted. After that, SCE's Solar Billing Plan credits exports with Energy Export Credits and settles the account once a year, in the month the system started service."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },

  "merced": {
    "name": "Merced",
    "county": "Merced County",
    "utility": "other",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Merced has two electric utilities. Merced Irrigation District says it serves customers in the cities of Livingston, Atwater and Merced, and the California Energy Commission's service-territory map puts about 78% of Merced's area in MID territory and about 22% in PG&E's. The difference matters: MID's net metering and PG&E's Solar Billing Plan value exported power very differently. Read the utility name on your bill first.",
    "local": "Merced told the Energy Commission that SolarAPP+ is its automated permit platform, and the SolarAPP+ program lists the City as accepting solar with battery storage and main panel upgrades but not main breaker derates. In 2025 every one of the City's 371 residential solar permits was issued online. Merced County, which permits unincorporated areas, also reported SolarAPP+.",
    "example": "For an MID address, ask each bidder to model MID's NEM 2.0 rate and to include MID's $600 residential application fee; for a PG&E address, the Solar Billing Plan. A bidder who quotes the same savings for two Merced homes on different utilities has not checked either bill.",
    "checks": [
      [
        "Which utility",
        "Name MID or PG&E from your bill and model that utility's solar terms."
      ],
      [
        "MID application",
        "For MID, include the interconnection packet and the $600 residential application fee."
      ],
      [
        "Meter and PTO",
        "Say who schedules MID's inspection and meter, and when permission to operate is expected."
      ],
      [
        "Permit route",
        "Say whether the design fits SolarAPP+; a main breaker derate needs regular review."
      ]
    ],
    "sources": [
      {
        "label": "Merced Irrigation District: MID Power (electric service area)",
        "url": "https://mercedid.org/power/"
      },
      {
        "label": "Merced Irrigation District: solar power (NEM 2.0, interconnection steps, application fee)",
        "url": "https://mercedid.org/power/solar-power/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SolarAPP+: where SolarAPP+ is available, with the project types each jurisdiction accepts",
        "url": "https://www.gosolarapp.org/where-is-solarapp-available"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/modesto",
        "label": "Modesto, another irrigation-district utility city"
      },
      {
        "href": "/solar-savings/central-valley",
        "label": "Central Valley utilities and rates"
      },
      {
        "href": "/blog/net-billing-vs-net-metering-california",
        "label": "Net metering versus net billing"
      }
    ],
    "faq": [
      [
        "What is the best solar company in Merced?",
        "This site does not rank them. In Merced, shortlist companies with a CSLB license covering solar that know whether your address is MID or PG&E and have handled that utility's interconnection, then compare at least three written bids built on your own bill."
      ],
      [
        "Does Merced Irrigation District still offer net metering?",
        "Yes. MID lists its NEM 1.0 rate as closed to new applications and its NEM 2.0 rate as open to new applications, for systems up to one megawatt intended to offset part or all of the customer's own use."
      ],
      [
        "How do I connect solar to MID?",
        "The application packet goes to solar@mercedid.org or MID's Energy Resources office: the PV application, Net Metering Payment Agreement, Interconnection Agreement, single-line diagram, equipment specification sheet and the system contract, with a $600 fee for residential projects. MID issues approval to proceed, inspects and sets the meter, then issues permission to operate."
      ],
      [
        "How many solar permits does Merced issue?",
        "The City reported 2,188 residential solar permits to the California Energy Commission for 2024, about 40% with storage and 32% issued online, and 371 for 2025, about 79% with storage and all issued online."
      ]
    ],
    "answer": "Solar companies in Merced first need to know which utility serves the address. Merced Irrigation District covers about four-fifths of the city on the Energy Commission's map and still offers net metering, NEM 2.0, to new solar customers, with a $600 residential application fee; PG&E serves the rest under its Solar Billing Plan. The City permits both through SolarAPP+. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Utility split",
        "value": "MID about 78%, PG&E about 22%",
        "note": "By area on the CEC map; check your bill",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "MID solar tariff",
        "value": "NEM 2.0, open",
        "note": "$600 residential application fee",
        "source": {
          "publisher": "Merced Irrigation District",
          "date": "2026-09-23",
          "url": "https://mercedid.org/power/solar-power/"
        }
      },
      {
        "label": "2025 solar permits",
        "value": "371",
        "note": "79% with storage, all issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      }
    ],
    "sections": [
      {
        "heading": "Connecting solar to Merced Irrigation District",
        "paragraphs": [
          "MID runs its own electric utility for eastern Merced County, including most of the City of Merced. Its NEM 1.0 rate is closed, but its NEM 2.0 rate is open to new applications, for customer-owned solar up to one megawatt that is meant to offset part or all of the customer's own electricity use. That is a different arrangement from PG&E's Solar Billing Plan, and a proposal should say which one it assumes.",
          "MID's process has five steps. The customer or contractor sends the application packet, with the PV application, Net Metering Payment Agreement, Interconnection Agreement, single-line diagram, equipment specification sheet and system contract, to solar@mercedid.org or MID's Energy Resources office, with a $600 fee for a residential project. MID reviews it and issues approval to proceed with construction, then inspects the system and places the meter, issues permission to operate and sets up the account."
        ]
      },
      {
        "heading": "Merced's permits and PG&E addresses",
        "paragraphs": [
          "The City reported SolarAPP+ to the Energy Commission as its automated platform, and the SolarAPP+ program lists Merced as accepting solar with storage and main panel upgrades but not main breaker derates. The City's SB 379 reports show a very active market: 2,188 residential solar permits in 2024, about 40% with storage and 32% issued online, then 371 in 2025, about 79% with storage and every one issued online.",
          "About a fifth of the city's area is PG&E territory on the Energy Commission's map. There, the Solar Billing Plan applies: monthly billing, an annual True-Up statement, and Energy Export Bonus Credits for customers who start before 2028. If your bill says PG&E, the MID steps above do not apply to you."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },

  "moreno-valley": {
    "name": "Moreno Valley",
    "county": "Riverside County",
    "utility": "other",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Moreno Valley has two electric utilities. On the California Energy Commission's map, Moreno Valley Utility (MVU) covers about 58% of the city's area and SCE about 42%, with no community choice provider. MVU and SCE have entirely different solar rules, so the utility named on your bill decides which one every bid must model.",
    "local": "Every building permit in Moreno Valley, solar included, is submitted through SimpliCITY, the City's online portal. The solar permit covers the array, inverter and any batteries installed with it; a separate electrical permit is needed for a panel upgrade or subpanel, or for a battery added on its own. The City reported SolarAPP+ to the Energy Commission as its automated platform.",
    "example": "For an MVU address, ask each bidder to size the system to your last year of use, since MVU does not allow oversized systems, and to model Rate B time-of-use. For an SCE address, the Solar Billing Plan applies. A bidder quoting the same savings for both has not read your bill.",
    "checks": [
      [
        "Which utility",
        "Name MVU or SCE from your bill and model that utility's solar rules."
      ],
      [
        "MVU sizing",
        "For MVU, size to no more than one year of usage history."
      ],
      [
        "MVU paperwork",
        "Include MVU's Solar & Storage Application, the signed Solar Consumer Protection Guide and the $75 fee."
      ],
      [
        "Electrical permit",
        "Add a separate electrical permit for a panel upgrade, subpanel or stand-alone battery."
      ]
    ],
    "sources": [
      {
        "label": "Moreno Valley Utility: solar interconnection (Rate B TOU, sizing, audit, review fee)",
        "url": "https://www.moval.org/mvu/solar-prog.html"
      },
      {
        "label": "City of Moreno Valley: permits through SimpliCITY (solar and electrical permit types)",
        "url": "https://www.moval.org/cdd/services/permits-new.html"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/riverside-county",
        "label": "Riverside County utilities by city"
      },
      {
        "href": "/solar-companies/riverside",
        "label": "Riverside, with its own city utility too"
      },
      {
        "href": "/blog/sce-solar-billing-plan",
        "label": "SCE's Solar Billing Plan, for SCE addresses"
      }
    ],
    "faq": [
      [
        "What is the best solar company in Moreno Valley?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that can tell you whether your address is MVU or SCE, have handled that utility's interconnection, and confirm your address in writing. Then compare at least three written bids built on your own bill."
      ],
      [
        "What are Moreno Valley Utility's solar rules?",
        "New solar, battery and solar-plus-battery customers must take MVU's Residential Rate B time-of-use rate, which still gives a monetary credit in a billing period when you produce more than you use. MVU does not allow oversized systems: size cannot exceed one year of usage history. A $75 non-refundable review fee applies, and homes over five years old may need a utility energy audit first."
      ],
      [
        "Does adding a battery change my MVU rate?",
        "Yes. MVU says adding battery storage to an existing solar system, or expanding the system by 10% or more, moves the account to Rate B time-of-use. Existing solar customers were grandfathered for 15 years on the NEM and NEM2 rates."
      ],
      [
        "How many solar permits does Moreno Valley issue?",
        "Moreno Valley reported 548 residential solar permits to the California Energy Commission for 2023. Of those, 335, about 61%, included battery storage, and 200, about 36%, were issued online."
      ]
    ],
    "answer": "Solar companies in Moreno Valley have to design for one of two utilities. Moreno Valley Utility, the City's own, serves about three-fifths of the city's area and requires new solar or battery customers to take its Rate B time-of-use rate, caps systems at your past year's use and charges a $75 review fee; SCE serves the rest under its Solar Billing Plan. All permits go through SimpliCITY. Compare at least three written bids.",
    "keyFacts": [
      {
        "label": "Utility split",
        "value": "MVU about 58%, SCE about 42%",
        "note": "By area on the CEC map; check your bill",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "MVU solar rate",
        "value": "Rate B time-of-use",
        "note": "Required for new solar and batteries; no oversizing",
        "source": {
          "publisher": "Moreno Valley Utility",
          "date": "2026-09-23",
          "url": "https://www.moval.org/mvu/solar-prog.html"
        }
      },
      {
        "label": "2023 solar permits",
        "value": "548",
        "note": "61% with storage, 36% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      }
    ],
    "sections": [
      {
        "heading": "Solar on Moreno Valley Utility",
        "paragraphs": [
          "The City Council approved MVU's Residential Rate B time-of-use rate for all residential solar customers effective December 15, 2020. It is optional for other homes but required for customers who install solar, a battery or both; a customer who produces more than it uses in a billing period still receives a monetary credit. Existing solar customers were grandfathered for 15 years on the NEM and NEM2 rates, but expanding a system by 10% or more, or adding a battery, moves the account to Rate B.",
          "MVU takes residential interconnections only through its Solar & Storage Application, with a customer-signed Solar Consumer Protection Guide and a $75 non-refundable review fee. It may require a utility-provided energy audit for homes more than five years old, and it does not allow oversized systems: a system cannot exceed one year of usage history, and without that history MVU applies its own sizing formula. Components must be new and approved by MVU, and MVU says panels and inverters should appear on the Energy Commission's certified lists."
        ]
      },
      {
        "heading": "Permits and SCE addresses in Moreno Valley",
        "paragraphs": [
          "All building permits go through SimpliCITY. A solar permit covers the array, the inverter and batteries included with the solar; a separate electrical permit is required for a panel upgrade or subpanel, or when a battery is installed on its own or added to an existing system. The City reported SolarAPP+ as its automated platform, and the SolarAPP+ program lists it as accepting storage but not panel upgrades or breaker derates. Its 2023 report counted 548 residential solar permits, about 61% with storage and 36% issued online.",
          "About two-fifths of the city is SCE territory on the Energy Commission's map. There, SCE's Solar Billing Plan applies: exports earn hourly credits, locked for nine years, with about $0.04 per kWh more for eligible customers who enroll before 2028, and the True-Up comes in the month the system started."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },

  "mountain-view": {
    name: "Mountain View",
    county: "Santa Clara County",
    utility: "pge",
    sourceCheckedDate: "2026-09-23",
    bill: "Most Mountain View homes get generation from Silicon Valley Clean Energy and delivery from PG&E, which sends the bill; the Energy Commission's map places almost all of the city in both areas. SVCE settles its generation charges on each monthly bill rather than in PG&E's annual true-up. Ask each bidder to model your actual SVCE and PG&E enrollment, not a PG&E-only account.",
    local: "Mountain View offers SolarAPP+ for roof-mounted or building-integrated solar on single-family homes, with or without batteries or an electrical service panel upgrade: the platform checks code compliance without traditional plans and issues the permit automatically, and the inspection can be held at least one business day after the permit is approved. Multifamily projects and single-family jobs SolarAPP+ does not cover go through ePermitsMV with building plans.",
    example: "If one Mountain View bid includes a battery and a panel upgrade and another does not, both can still use SolarAPP+, since the City's route covers single-family systems with or without storage or a service panel upgrade. Ask each bidder to confirm the route in writing, then compare the equipment and the SVCE and PG&E bill it leaves you with.",
    sources: [
      {
        "label": "City of Mountain View: solar permits (SolarAPP+ and ePermitsMV)",
        "url": "https://developmentpermits.mountainview.gov/about-permits/apply-for-permit/building-permits/solar-permits"
      },
      {
        "label": "Silicon Valley Clean Energy: net energy metering",
        "url": "https://svcleanenergy.org/net-energy-metering/"
      },
      {
        "label": "Silicon Valley Clean Energy: solar customer FAQ (Solar Billing Plan, sizing, panel upgrade)",
        "url": "https://svcleanenergy.org/solar2/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How fast is a solar permit in Mountain View?",
        "For single-family systems that qualify for SolarAPP+, the City says the platform issues the permit automatically, and the inspection can be held at least one business day after approval. Other projects go through ePermitsMV with plans and fees paid before issuance."
      ],
      [
        "Is Mountain View served by Silicon Valley Clean Energy?",
        "Yes. SVCE supplies generation for most Mountain View homes, and PG&E delivers the power and sends the bill."
      ],
      [
        "What does SVCE pay for extra solar?",
        "For net energy metering customers, SVCE pays PG&E's Net Surplus Compensation rate on annual surplus each April, by check from $100 up to $5,000 and as a bill credit below $100. Income-qualified customers get 2.5 times that rate."
      ],
    ],
    checks: [
      [
        "Permit route",
        "Confirm the job qualifies for SolarAPP+ or say why it needs ePermitsMV and plan review."
      ],
      [
        "SVCE and PG&E bill",
        "Model SVCE generation and PG&E delivery, and say whether the system is on net energy metering or the Solar Billing Plan."
      ],
      [
        "System size",
        "Show the sizing against your usage; SVCE notes PG&E does not generally interconnect systems above 110% of on-site demand."
      ],
      [
        "Panel upgrade",
        "If the main panel is being upgraded, say whether SVCE's $1,000 panel-upgrade offer applies and who claims it."
      ]
    ],
    answer: "Solar companies in Mountain View can permit most single-family systems through SolarAPP+, which the City uses for roof-mounted solar with or without a battery or panel upgrade and which issues the permit automatically; the inspection can follow one business day later. Silicon Valley Clean Energy supplies generation and PG&E delivers it. Compare at least three written bids built on your own SVCE and PG&E bill.",
    keyFacts: [
      {
        "label": "Permit route",
        "value": "SolarAPP+",
        "note": "Single-family, with or without storage or a panel upgrade",
        "source": {
          "publisher": "City of Mountain View",
          "date": "2026-09-23",
          "url": "https://developmentpermits.mountainview.gov/about-permits/apply-for-permit/building-permits/solar-permits"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "Silicon Valley Clean Energy",
        "note": "PG&E delivers and bills",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "SVCE annual cashout",
        "value": "Each April",
        "note": "Checks from $100 up to $5,000 for NEM customers",
        "source": {
          "publisher": "Silicon Valley Clean Energy",
          "date": "2026-09-23",
          "url": "https://svcleanenergy.org/net-energy-metering/"
        }
      }
    ],
    sections: [
      {
        "heading": "Mountain View's two solar permit paths",
        "paragraphs": [
          "The City splits solar permits by building type. SolarAPP+ is for roof-mounted or building-integrated panels on single-family homes, and it covers storage and electrical service panel upgrades in the same application. It verifies code compliance instantly without a traditional plan set and issues the permit automatically; the City then allows the inspection at least one business day after approval.",
          "Everything else, including multifamily, commercial and industrial installations and any single-family job SolarAPP+ does not cover, goes through ePermitsMV. There the applicant uploads building plans and supporting documents, and the City collects the fee before issuing the permit. If a bid for your house names ePermitsMV, ask what about the design keeps it off SolarAPP+."
        ]
      },
      {
        "heading": "How SVCE treats a Mountain View solar account",
        "paragraphs": [
          "Silicon Valley Clean Energy bills its generation monthly and rolls credits forward month to month, so SVCE customers do not face a year of generation charges at once. For systems on net energy metering, meaning applications filed by April 14, 2023, SVCE pays annual surplus each April at PG&E's Net Surplus Compensation rate, with income-qualified customers paid 2.5 times that rate. Customers on SVCE's GreenPrime option pay $0.0074 more per kWh they draw and get $0.0074 more per kWh of monthly surplus.",
          "Newer systems follow the Solar Billing Plan, which SVCE applies as designed by PG&E; since April 15, 2024, exports under it have been valued using the CPUC's Avoided Cost Calculator. SVCE also says PG&E does not generally interconnect systems larger than 110% of on-site demand, and offers its customers $1,000 off an electrical panel upgrade needed for solar through its Solar + Battery Assistant."
        ]
      }
    ],
    contentModified: "2026-09-23",
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
  "pasadena": {
    "name": "Pasadena",
    "county": "Los Angeles County",
    "utility": "pwp",
    "bill": "Pasadena Water and Power, the City's own utility, bills almost all of Pasadena; the Energy Commission's map shows a small SCE area at the edge of the city. PWP charges a tiered rate, effective July 1, 2026: a $17.50 monthly Customer and Grid Access Charge, energy and transmission charges on every kWh, and a distribution charge that climbs from 3.505 cents for the first 350 kWh to 25.233 cents above 750 kWh. A proposal built on SCE or PG&E rates is not a Pasadena proposal.",
    "local": "PWP must approve a solar project before the City issues a building permit. The installer applies online through PWP's PowerClerk system with a single-line diagram, site plan, the signed customer contract, a copy of your electric bill, the Net Metering and Surplus Compensation enrollment form and, if you have one, your HOA's approval letter. Ask each bidder who files with PWP and when.",
    "example": "Because PWP's distribution charge is tiered, the first kWh your panels offset each month are the most expensive ones you buy. Ask two bidders to show your last twelve PWP bills, how many kWh each month fell in the 25.233-cent tier, and how much of that their system removes. A bid that values every offset kWh at one average price is guessing.",
    "sourceCheckedDate": "2026-09-23",
    "checks": [
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
    "sources": [
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
    "faq": [
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
      ],
      [
        "What are electricity rates in Pasadena?",
        "Pasadena Water and Power's residential rate, effective July 1, 2026, has a $11.00 customer charge and a $6.50 grid access charge each month ($17.50 together), an energy charge of 10.0825 cents per kWh, a transmission charge of 1.609 cents, and a tiered distribution charge of 3.505 cents for the first 350 kWh, 14.018 cents for the next 400 and 25.233 cents above that. Added together, a kWh costs about 15.2 cents in the first tier and about 36.9 cents above 750 kWh a month, before anything else on the bill."
      ],
      [
        "Can I choose a different electricity supplier in Pasadena?",
        "Not the way many Los Angeles County cities can. The California Energy Commission's map shows Pasadena Water and Power serving about 98% of the city, a small SCE area at the edge, and no community choice provider over the city, so there is no second generation supplier to compare. What you can compare is PWP's rate with the terms in each solar proposal."
      ]
    ],
    "answer": "In Pasadena the utility, not the City, is the first gate for any solar company: Pasadena Water and Power must approve the project through its PowerClerk system before a building permit can be issued, and it caps a system at 150% of your average annual use. PWP bills a tiered rate and sets its own solar rules, so compare at least three written bids that model your own PWP bills, not SCE's.",
    "keyFacts": [
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
    "sections": [
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
    "contentModified": "2026-09-23"
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
    "name": "San Mateo",
    "county": "San Mateo County",
    "utility": "pge",
    "bill": "A San Mateo installer will be designing around two companies: PG&E, which delivers the power and sends the statement, and WestLight Energy, the county's community choice provider, which renamed itself from Peninsula Clean Energy and supplies generation for most homes. Ask each bidder to build its design on your own account, with WestLight's generation side and PG&E's delivery side shown separately.",
    "local": "The City of San Mateo runs residential rooftop solar through SolarAPP+, with two local conditions before a contractor can use it: an active San Mateo business license and a request to be added to the City's SolarAPP+ eligibility list. After SolarAPP+ approves the plans, the contractor completes the SolarAPP+ inspection checklist, applies in the City's Online Permit Center, pays the permit fee and schedules the inspection.",
    "example": "Two San Mateo bidders can describe the same roof very differently. Ask both for the same deliverables: the module and inverter models, a roof layout with every obstruction marked, the monthly production estimate, the battery's usable kWh and backed-up circuits, and the name of the business that will hold the San Mateo business license and the permit. Compare those line by line before you look at anything else.",
    "sourceCheckedDate": "2026-09-23",
    "checks": [
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
    "sources": [
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
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "County of San Mateo: instant residential solar and energy storage permits (Symbium)",
        "url": "https://www.smcgov.org/planning/instant-residential-solar-and-energy-storage-system-permits"
      }
    ],
    "faq": [
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
      ],
      [
        "How many solar permits does San Mateo issue?",
        "The City reported 333 residential solar permits to the California Energy Commission for 2024, up from 73 in 2023. Of the 2024 permits, 158 included battery storage and 104, about 31%, were issued online; the rest went through the City's regular review. Ask each bidder which route your design will take."
      ],
      [
        "Who handles solar permits outside the city limits?",
        "Homes in unincorporated San Mateo County are permitted by the County of San Mateo, which issues residential solar and battery permits automatically through Symbium. The county-wide page linked below lists the permit office for each city."
      ]
    ],
    "answer": "Solar companies that install in San Mateo file residential rooftop jobs through SolarAPP+, and the City adds two local gates first: the contractor needs an active San Mateo business license and must ask to be put on the City's SolarAPP+ eligibility list. PG&E delivers your power and WestLight Energy, formerly Peninsula Clean Energy, supplies it. Compare at least three written proposals from companies that clear those gates.",
    "keyFacts": [
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
      },
      {
        "label": "2024 solar permits",
        "value": "333",
        "note": "47% with storage, 31% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      }
    ],
    "sections": [
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
    "contentModified": "2026-09-23",
    "projectLinks": [
      {
        "href": "/solar-companies/san-mateo-county",
        "label": "Permit offices and 2024 permit counts across San Mateo County"
      },
      {
        "href": "/blog/pge-time-of-use-rates-2026",
        "label": "The PG&E time-of-use hours behind a solar estimate"
      },
      {
        "href": "/blog/solar-panel-maintenance-cost",
        "label": "What solar maintenance costs after installation"
      }
    ]
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
  carlsbad: {
    name: "Carlsbad",
    county: "San Diego County",
    utility: "sdge",
    bill: "Carlsbad was one of the three cities that launched Clean Energy Alliance in May 2021, with Del Mar and Solana Beach, so most Carlsbad homes buy generation from CEA while SDG&E delivers the power and sends one bill. SDG&E's Base Services Charge sits on the delivery side for every residential customer, CEA or not, and solar customers pay it too. A proposal should model both halves of your own bill.",
    local: "In Carlsbad, a residential solar permit is issued as soon as the contractor has a SolarAPP+ approval and applies on the City's Customer Self Service online portal. The City describes SolarAPP+ as the route for licensed contractors to permit standard residential rooftop solar and storage systems, and it separately notes that the 2019 state green building code added photovoltaic requirements for some residential projects, checked through its Climate Action Plan consistency checklist.",
    example: "If you are adding panels to an existing Carlsbad house, ask each bidder to confirm the job fits SolarAPP+ and to name who files on the Customer Self Service portal. If you are building or substantially remodeling, ask first whether the City's Climate Action Plan checklist already requires solar on the project, since that changes what you are shopping for.",
    sourceCheckedDate: "2026-09-23",
    checks: [
      [
        "Permit route",
        "Confirm the design qualifies for SolarAPP+ and say who applies on the City's Customer Self Service portal."
      ],
      [
        "CEA and SDG&E bill",
        "Model Clean Energy Alliance generation and SDG&E delivery, including the Base Services Charge, from your own bill."
      ],
      [
        "True-up date",
        "Show the month your NEM or Solar Billing Plan year closes and what the model assumes you export."
      ],
      [
        "Contract and service",
        "Name the contracting business, its CSLB license and who answers service calls after installation."
      ]
    ],
    sources: [
      {
        "label": "City of Carlsbad: Go Green (SolarAPP+ and residential solar permits)",
        "url": "https://www.carlsbadca.gov/departments/community-development/building/go-green"
      },
      {
        "label": "Clean Energy Alliance: FAQs (service start dates, opt-out, Base Services Charge)",
        "url": "https://thecleanenergyalliance.org/faqs/"
      },
      {
        "label": "Clean Energy Alliance: Net Energy Metering explained",
        "url": "https://thecleanenergyalliance.org/net-energy-metering-explained/"
      },
      {
        "label": "SDG&E: Base Services Charge",
        "url": "https://www.sdge.com/electric-billing"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How fast can I get a solar permit in Carlsbad?",
        "The City says residential solar permits are issued immediately once the applicant has SolarAPP+ approval and applies on its Customer Self Service portal. Designs that SolarAPP+ does not approve go through the City's regular review instead."
      ],
      [
        "Is Carlsbad served by Clean Energy Alliance?",
        "Yes. Clean Energy Alliance began serving Carlsbad, Del Mar and Solana Beach in May 2021. SDG&E still delivers the power and sends the bill. You can opt out; if you do so more than 60 days after service began, SDG&E bars a return to CEA for one year."
      ],
      [
        "What does Clean Energy Alliance pay for extra solar?",
        "For a net energy metering account that produces more than it uses over its 12-month period, CEA pays Net Surplus Compensation of $0.06 per kWh, by check if the amount is $100 or more and as a credit toward the next period if it is less."
      ]
    ],
    answer: "Solar companies in Carlsbad can get a permit the same day: the City issues residential solar permits as soon as the contractor has a SolarAPP+ approval and applies on its Customer Self Service portal. Clean Energy Alliance supplies Carlsbad's generation and SDG&E delivers it, and CEA pays 6 cents per kWh for a net energy metering account's yearly surplus. Compare at least three written bids built on your own bill.",
    keyFacts: [
      {
        "label": "Permit timing",
        "value": "Issued immediately",
        "note": "After SolarAPP+ approval and a Customer Self Service application",
        "source": {
          "publisher": "City of Carlsbad",
          "date": "2026-09-23",
          "url": "https://www.carlsbadca.gov/departments/community-development/building/go-green"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "Clean Energy Alliance",
        "note": "Serving Carlsbad since May 2021; SDG&E delivers",
        "source": {
          "publisher": "Clean Energy Alliance",
          "date": "2026-09-23",
          "url": "https://thecleanenergyalliance.org/faqs/"
        }
      },
      {
        "label": "CEA surplus payment",
        "value": "$0.06/kWh",
        "note": "Net energy metering accounts; checks at $100 or more",
        "source": {
          "publisher": "Clean Energy Alliance",
          "date": "2026-09-23",
          "url": "https://thecleanenergyalliance.org/net-energy-metering-explained/"
        }
      }
    ],
    sections: [
      {
        "heading": "How Carlsbad issues a rooftop solar permit",
        "paragraphs": [
          "Carlsbad uses SolarAPP+, an automated online plan review, for standard residential rooftop solar and battery systems. A licensed contractor enters the design in SolarAPP+, and once it is approved, applies on the City's Customer Self Service portal, where the City says the permit is issued immediately. That leaves little room for a bidder to blame the City for a long wait on a standard retrofit.",
          "Two things can move a Carlsbad job off that fast track. A design SolarAPP+ will not approve, such as an unusual structure, goes to regular review. And for new homes and larger residential projects, the City points to photovoltaic requirements that arrived with the 2019 state green building code and asks applicants to use its Climate Action Plan consistency checklist to see whether they apply. Ask your bidder which of these cases your project is."
        ]
      },
      {
        "heading": "Clean Energy Alliance's solar rules",
        "paragraphs": [
          "Clean Energy Alliance, a community choice provider each of whose member city councils voted to join, started in Carlsbad, Del Mar and Solana Beach in May 2021 and has since added Escondido, San Marcos, Oceanside and Vista. Existing solar customers moved to CEA at their annual SDG&E true-up so their credits were not disrupted, and they kept their net energy metering version. To join CEA's solar program, called Personal Impact, you first enroll in SDG&E's program and are then enrolled with CEA automatically.",
          "CEA settles charges and credits monthly and trues each account up at the end of its own 12-month period, which starts on the date the customer enrolled in net energy metering. Leftover credits are then zeroed out. If the system produced more than the home used over the year, CEA pays Net Surplus Compensation of $0.06 per kWh; $100 or more arrives as a check and smaller amounts roll into the next period.",
          "Solar does not remove SDG&E's Base Services Charge, the fixed monthly delivery charge the CPUC approved in May 2024 under Assembly Bill 205. CEA notes that it applies to every residential customer whether CEA or SDG&E supplies the generation, and that solar homes pay it because they remain connected to the grid."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  "san-marcos": {
    name: "San Marcos",
    county: "San Diego County",
    utility: "sdge",
    bill: "San Marcos joined Clean Energy Alliance in April 2023, together with Escondido, and the Energy Commission's map places nearly the whole city inside CEA's area. On most San Marcos bills CEA supplies the generation and SDG&E delivers the power, adds its fixed Base Services Charge and sends the statement. Ask every bidder to start from that bill, not a generic SDG&E rate.",
    local: "San Marcos runs two solar permit routes. A homeowner installing a roof-mounted system of 10 kW or less can apply online by choosing Roof Mounted Solar PV Expedited, which the City estimates takes one to three business days. Contractors use SolarAPP+, get a City of San Marcos business license, attach the City's Permit Declaration Form when they file, and cannot schedule an inspection until that form is complete.",
    example: "Before you compare two San Marcos bids on price, ask each one which route it is using. A contractor bid should name its SolarAPP+ application, its City business license and who signs the Permit Declaration Form. If you are thinking of doing part of the work yourself, the homeowner route is limited to roof-mounted systems of 10 kW or less.",
    sourceCheckedDate: "2026-09-23",
    hasSavingsGuide: false,
    checks: [
      [
        "Permit route",
        "Say whether the job goes through SolarAPP+ or the homeowner expedited route, and who files it."
      ],
      [
        "City paperwork",
        "Confirm a current City of San Marcos business license and who completes the Permit Declaration Form."
      ],
      [
        "Zoning height",
        "Confirm the panels stay within the height limit set by the property's zoning."
      ],
      [
        "CEA and SDG&E bill",
        "Model Clean Energy Alliance generation and SDG&E delivery from your own bill, including the Base Services Charge."
      ]
    ],
    sources: [
      {
        "label": "City of San Marcos: Solar Permits",
        "url": "https://www.sanmarcosca.gov/Business-Services/Building-Division/Solar-Permits"
      },
      {
        "label": "Clean Energy Alliance: FAQs (service start dates, Base Services Charge)",
        "url": "https://thecleanenergyalliance.org/faqs/"
      },
      {
        "label": "Clean Energy Alliance: Net Energy Metering explained",
        "url": "https://thecleanenergyalliance.org/net-energy-metering-explained/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How do I get a solar permit in San Marcos, CA?",
        "A contractor applies through SolarAPP+, pays its processing fee, gets a City of San Marcos business license and files the City forms, including the Permit Declaration Form, in the City's permitting system. A homeowner with a roof-mounted system of 10 kW or less can use the Roof Mounted Solar PV Expedited option instead."
      ],
      [
        "How long does a San Marcos solar permit take?",
        "For the homeowner expedited route, the City estimates one to three business days. It does not publish a time for SolarAPP+ applications on the same page."
      ],
      [
        "Who supplies electricity in San Marcos?",
        "Clean Energy Alliance has supplied generation in San Marcos since April 2023. SDG&E delivers the power and sends the bill."
      ]
    ],
    answer: "San Marcos gives solar two permit routes: contractors use SolarAPP+ plus a City business license and a Permit Declaration Form, and homeowners with a roof-mounted system of 10 kW or less can apply online on an expedited path the City estimates at one to three business days. Clean Energy Alliance supplies San Marcos generation and SDG&E delivers it. Get at least three written bids that name the route and model your own bill.",
    keyFacts: [
      {
        "label": "Homeowner expedited permit",
        "value": "1 to 3 business days",
        "note": "Roof-mounted systems of 10 kW or less",
        "source": {
          "publisher": "City of San Marcos",
          "date": "2026-09-23",
          "url": "https://www.sanmarcosca.gov/Business-Services/Building-Division/Solar-Permits"
        }
      },
      {
        "label": "Before inspection",
        "value": "Permit Declaration Form",
        "note": "Inspection cannot be scheduled without it",
        "source": {
          "publisher": "City of San Marcos",
          "date": "2026-09-23",
          "url": "https://www.sanmarcosca.gov/Business-Services/Building-Division/Solar-Permits"
        }
      },
      {
        "label": "Supplies the generation",
        "value": "Clean Energy Alliance",
        "note": "Since April 2023; SDG&E delivers",
        "source": {
          "publisher": "Clean Energy Alliance",
          "date": "2026-09-23",
          "url": "https://thecleanenergyalliance.org/faqs/"
        }
      }
    ],
    sections: [
      {
        "heading": "The contractor route and the homeowner route",
        "paragraphs": [
          "The City of San Marcos lays out six steps for contractors: confirm the project is eligible, submit the design to SolarAPP+, pay SolarAPP+'s processing fee, obtain a City of San Marcos business license, log into the City's permitting system to submit the forms and pay the permit fees with the Permit Declaration Form attached, and schedule the inspection. The City is explicit that the inspection cannot be booked without a completed Permit Declaration Form.",
          "Homeowners doing their own project have a separate path. A roof-mounted system that produces 10 kW or less can be submitted through the City's online portal under the Roof Mounted Solar PV Expedited option, with an estimated one to three business days of processing. The City also publishes an eligibility checklist, standard plans for string or central inverters and for microinverters, and a reroofing certification. Either way, panels cannot exceed the height limit set by the property's zoning."
        ]
      },
      {
        "heading": "What Clean Energy Alliance means for a San Marcos solar home",
        "paragraphs": [
          "Clean Energy Alliance began serving San Marcos in April 2023. A home that already had solar kept its net energy metering version when it moved to CEA; a new system first enrolls in SDG&E's program and is then placed in CEA's solar program automatically. CEA calculates charges and credits monthly and closes each account's year on the anniversary of its net metering enrollment.",
          "At that annual true-up, CEA zeroes out leftover credits, and a net energy metering account that produced more than it used is paid $0.06 per kWh of surplus, by check at $100 or more and otherwise as a credit toward the next year. The fixed SDG&E Base Services Charge stays on the delivery side whether or not you have solar. Ask each bidder how much of the system's output its model sends to the grid, and at what value."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  "santa-ana": {
    "name": "Santa Ana",
    "county": "Orange County",
    "utility": "sce",
    "bill": "In Santa Ana, SCE sells and delivers the electricity: no community choice program is mapped over the city by the Energy Commission, and it is not among Orange County Power Authority's members. Every SCE residential bill now includes a fixed monthly Base Services Charge, $24.15 for most customers, which solar leaves in place, so a proposal should show what remains on your SCE bill, not just what it offsets.",
    "local": "Since June 1, 2026, the City of Santa Ana issues residential solar permits only after SolarAPP+ approval; projects without it are not processed. Only licensed contractors registered with SolarAPP+ may apply, permit runners may not, and ballasted systems and unpermitted structures are not eligible. SolarAPP+ charges $35, which covers up to three revisions, and the City's own permit fee is the same as for a regular solar permit.",
    "example": "If a Santa Ana bid includes a battery, ask where it will go before you sign. The Planning Division does not allow storage equipment where it can be seen from the street without approved screening, and a battery in a garage cannot push the equipment or its protective bollard into the required parking space. The Fire Department also requires smoke alarms, and in some rooms an interconnected heat alarm, where storage is installed.",
    "sourceCheckedDate": "2026-09-23",
    "checks": [
      [
        "SolarAPP+ approval",
        "Confirm the contractor is a licensed company registered with SolarAPP+ and will file the approval in the City's PBx portal."
      ],
      [
        "Structure eligibility",
        "Confirm every structure getting panels is permitted and the design is not ballasted."
      ],
      [
        "Battery location",
        "Show where storage goes, how it is screened from the street and that it stays out of the required parking space."
      ],
      [
        "SCE bill",
        "Model SCE's Solar Billing Plan and the fixed Base Services Charge from your own bill."
      ]
    ],
    "sources": [
      {
        "label": "City of Santa Ana: SolarAPP+ automated solar plan review (eligibility, fees, FAQ)",
        "url": "https://www.santa-ana.org/solarapp-automated-solar-plan-review/"
      },
      {
        "label": "City of Santa Ana: residential solar permit changes effective June 1, 2026",
        "url": "https://www.santa-ana.org/upcoming-changes-to-the-residential-solar-permit-requirement-effective-june-1st-2026/"
      },
      {
        "label": "SCE: Solar Billing Plan",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "SCE: Base Services Charge",
        "url": "https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc"
      },
      {
        "label": "Orange County Power Authority: about and member cities",
        "url": "https://www.ocpower.org/about-us/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "faq": [
      [
        "Do I need SolarAPP+ for a solar permit in Santa Ana?",
        "Yes. Since June 1, 2026 the City issues residential solar permits only after SolarAPP+ approval, and applications without it are not processed."
      ],
      [
        "How much is the SolarAPP+ fee in Santa Ana?",
        "SolarAPP+ charges a one-time $35 fee that covers up to three revisions. The City's application fee is separate and the same as for a regular solar permit."
      ],
      [
        "Where can a home battery go in Santa Ana?",
        "Not where it is visible from the public right-of-way unless it is screened with a design the Planning Division approves. In a garage, the battery and its protective bollard cannot encroach into the required parking space."
      ]
    ],
    "answer": "Every residential solar permit in Santa Ana now goes through SolarAPP+: since June 1, 2026 the City will not process an application without its approval, and only licensed contractors registered with SolarAPP+ can apply. Batteries face extra local rules on screening, parking space and alarms. SCE supplies and delivers Santa Ana's power. Compare at least three written bids that model your own SCE bill.",
    "keyFacts": [
      {
        "label": "Permit route",
        "value": "SolarAPP+ only",
        "note": "Required for residential solar since June 1, 2026",
        "source": {
          "publisher": "City of Santa Ana",
          "date": "2026-09-23",
          "url": "https://www.santa-ana.org/upcoming-changes-to-the-residential-solar-permit-requirement-effective-june-1st-2026/"
        }
      },
      {
        "label": "SolarAPP+ fee",
        "value": "$35",
        "note": "Covers up to 3 revisions; City permit fee is separate",
        "source": {
          "publisher": "City of Santa Ana",
          "date": "2026-09-23",
          "url": "https://www.santa-ana.org/solarapp-automated-solar-plan-review/"
        }
      },
      {
        "label": "Electric utility",
        "value": "SCE",
        "note": "No community choice provider mapped over the city",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      }
    ],
    "sections": [
      {
        "heading": "Santa Ana's SolarAPP+ rules",
        "paragraphs": [
          "SolarAPP+ in Santa Ana covers single-family homes, duplexes, accessory dwelling units and other permitted residential structures inside the city. The contractor answers a question in SolarAPP+ confirming the building is permitted; an unpermitted structure is ineligible for the automated route. Once SolarAPP+ approves the design, the contractor enters the approval ID in the City's PBx portal, uploads the approval documents and prints the construction permit and job card right away.",
          "Changes after approval follow a set path. SolarAPP+ allows up to three revisions under the original $35 fee, each with a new approval ID, and the contractor then files a revision request in PBx, which the City says it processes within 72 business hours. A main panel upgrade can be added in the SolarAPP+ application itself. At inspection, the approval and permit must be printed and on site, and the inspector may still ask for plans."
        ]
      },
      {
        "heading": "Battery placement and SCE's bill",
        "paragraphs": [
          "Santa Ana adds two conditions to storage that many cities leave to the general code. Planning does not allow batteries, power walls and similar equipment where they are visible from the public right-of-way, and any screening needs Planning Division approval. Fire rules require smoke alarms in rooms, basements and attached garages where storage is installed, with a listed heat alarm interconnected to them where a smoke alarm cannot go. A bid that includes a battery should show its location on the plan.",
          "For the bill, a Santa Ana home that adds solar now is credited under SCE's Solar Billing Plan: what you send out is valued by the hour, the balance is squared up in an annual True-Up bill, and a year-end surplus is bought back at roughly two cents per kWh. With exports worth that little, the battery questions above matter for the savings estimate as much as for the permit."
        ]
      }
    ],
    "contentModified": "2026-09-23",
    "projectLinks": [
      {
        "href": "/solar-companies/orange-county",
        "label": "Orange County solar companies, city by city"
      }
    ]
  },
  "san-bernardino": {
    "name": "San Bernardino",
    "county": "San Bernardino County",
    "utility": "sce",
    "bill": "San Bernardino has no community choice program on the Energy Commission's utility map; Southern California Edison supplies the generation, delivers it and bills for both. A new system goes on SCE's Solar Billing Plan, with exports credited monthly and a yearly settlement. SCE's fixed Base Services Charge stays on the bill whatever the system produces.",
    "local": "The City of San Bernardino sends residential solar and storage permits under 38.4 kilowatts to the Symbium portal for instantaneous plan review under Senate Bill 379, and says processing may take about one to three business days. An active City business license is required before the permit is issued, and a main panel upgrade needs its own electrical permit from the City's Solar Division of Community Development and Housing.",
    "example": "Ask each San Bernardino bidder whether the job will go through Symbium or the Building and Safety counter at Vanir Tower, and whether the price includes the separate electrical permit if your main panel needs upgrading. A bid that skips either answer may be assuming a timeline or a permit the City will not give.",
    "sourceCheckedDate": "2026-09-23",
    "checks": [
      [
        "Permit route",
        "Say whether the project uses Symbium or an in-person counter submittal, and why."
      ],
      [
        "City business license",
        "Confirm the contractor holds an active City of San Bernardino business license."
      ],
      [
        "Panel upgrade permit",
        "If the main panel is being replaced, confirm the separate electrical permit is in the scope and price."
      ],
      [
        "Agent authorization",
        "If someone other than the license holder signs for the permit, ask for the notarized letter of authorization the City requires."
      ]
    ],
    "sources": [
      {
        "label": "City of San Bernardino: apply for residential solar permits (Symbium, SB 379)",
        "url": "https://www.sanbernardino.gov/1650/Apply-for-Residential-Solar-Permits"
      },
      {
        "label": "SCE: Solar Billing Plan",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "SCE: Base Services Charge",
        "url": "https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California HCD: advisory for manufactured home roof-mounted solar systems (PDF)",
        "url": "https://www.hcd.ca.gov/sites/default/files/docs/manufactured-and-mobilehomes/solar-pv-advisory.pdf"
      },
      {
        "label": "California HCD: modifications and alterations to manufactured homes",
        "url": "https://www.hcd.ca.gov/manufactured-and-mobilehomes/modifying-mobilehome"
      },
      {
        "label": "San Bernardino County EZ Online Permitting: Solar with SolarAPP+ (manufactured homes to HCD)",
        "url": "https://wp.sbcounty.gov/ezop/permits/solar-with-solarapp/"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      }
    ],
    "faq": [
      [
        "How long does a solar permit take in San Bernardino?",
        "The City says permits processed through its Symbium portal may take about one to three business days, depending on staff availability; missing documents can delay them."
      ],
      [
        "Can I get a solar permit in San Bernardino without Symbium?",
        "Yes. Applicants who are not eligible for Symbium, or who prefer not to use it, can apply in person at the Building and Safety counter. Those applications get standard plan review unless a system of 10 kW or less meets the City's expedited eligibility checklist."
      ],
      [
        "Does a panel upgrade need its own permit in San Bernardino?",
        "Yes. The City says electric panel upgrades require a separate electrical permit, which is obtained through the Solar Division of Community Development and Housing."
      ],
      [
        "Can I put solar on a mobile home in San Bernardino County?",
        "Yes, with a state permit. San Bernardino County says roof-mounted solar on a manufactured home must be permitted through the California Department of Housing and Community Development, and HCD requires its permit for any solar system on a manufactured home. Check the company's CSLB license and ask to see the HCD permit before work starts."
      ],
      [
        "How many solar permits does San Bernardino issue?",
        "The City reported 1,911 residential solar permits to the California Energy Commission for 2024, down from 2,879 in 2023. In 2024, 1,342 included battery storage and 1,004, about 53%, were issued online."
      ]
    ],
    "answer": "Solar companies in San Bernardino apply for residential solar and battery permits through the City's Symbium portal, which the City says may take about one to three business days, and need an active City business license before the permit is issued. A main panel upgrade needs a separate electrical permit. SCE supplies and delivers San Bernardino's power. Compare at least three written bids that model your own SCE bill.",
    "keyFacts": [
      {
        "label": "Permit platform",
        "value": "Symbium",
        "note": "Solar and storage under 38.4 kW, per SB 379",
        "source": {
          "publisher": "City of San Bernardino",
          "date": "2026-09-23",
          "url": "https://www.sanbernardino.gov/1650/Apply-for-Residential-Solar-Permits"
        }
      },
      {
        "label": "Processing time",
        "value": "About 1 to 3 business days",
        "note": "Depends on staff availability",
        "source": {
          "publisher": "City of San Bernardino",
          "date": "2026-09-23",
          "url": "https://www.sanbernardino.gov/1650/Apply-for-Residential-Solar-Permits"
        }
      },
      {
        "label": "Electric utility",
        "value": "SCE",
        "note": "No community choice provider mapped over the city",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Manufactured homes",
        "value": "HCD permit",
        "note": "Not the City's Symbium route",
        "source": {
          "publisher": "California HCD",
          "date": "2026-09-23",
          "url": "https://www.hcd.ca.gov/sites/default/files/docs/manufactured-and-mobilehomes/solar-pv-advisory.pdf"
        }
      }
    ],
    "sections": [
      {
        "heading": "What San Bernardino asks for with a solar permit",
        "paragraphs": [
          "The Symbium application needs a permit application and the contractor or owner-builder declarations; an owner-builder completes the City's Permit Application Declaration. If a representative of the contracting company signs for the permit instead of the license holder, the City requires a notarized letter of authorization. An active City of San Bernardino business license must be in place before the permit is issued.",
          "The inspection has its own paperwork. The documents submitted through Symbium, bearing their submittal date and time stamp, must be on site in legible hard copy: an 11 by 14 inch site map, the single-line diagram, 8 by 11 inch equipment specification sheets, the inspection checklist and the job card. Ask your installer who prints and brings them."
        ]
      },
      {
        "heading": "When a San Bernardino job goes to the counter",
        "paragraphs": [
          "The City strongly encourages Symbium but keeps a counter route at Vanir Tower, 290 North D Street, for projects that are not eligible or applicants who prefer it. Those applications get standard plan review unless a system of 10 kW or less meets the City's Eligibility Checklist for Expedited Residential Solar Permitting. A counter submittal needs one hard-copy set of 11 by 17 inch plans with specification sheets, structural calculations, the application, the declaration, the expedited checklist and a valid business license.",
          "Once the system is running, SCE's Solar Billing Plan credits exports with Energy Export Credits that vary by hour, and a yearly settlement bill arrives in the month the system started service. SCE puts its Net Surplus Compensation Rate for any leftover surplus at about $0.02 per kWh, and says that storing your own energy for expensive hours is now worth more than exporting it. Ask each bidder how much of your output its model assumes you export."
        ]
      },
      {
        "heading": "Mobile and manufactured homes in San Bernardino County",
        "paragraphs": [
          "Solar on a mobile or manufactured home follows state rules rather than the City's Symbium route. The California Department of Housing and Community Development says an HCD permit is required for any solar system installed on a manufactured home, and that a permit is needed before any alteration to one begins; San Bernardino County's own online permitting page says roof-mounted solar on a manufactured home must be permitted through HCD, and lists HCD's number, 951-782-4420. HCD's Southern Area Office is at 3737 Main Street in Riverside.",
          "HCD's advisory warns that manufactured home roofs are not accessible, so damage from poor installation practices is not visible, and tells owners to make sure the solar company is licensed by the Contractors State License Board and has obtained a permit from HCD before signing. HCD's permit guidelines say when a job also needs form HCD MH 415, engineered plans, electrical load calculations or manufacturer specifications, so ask each bidder which of those your roof needs and who files them."
        ]
      }
    ],
    "contentModified": "2026-09-23",
    "projectLinks": [
      {
        "href": "/solar-companies/high-desert",
        "label": "High Desert solar companies and the County's permit route"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a battery is worth adding"
      }
    ]
  },
  lancaster: {
    name: "Lancaster",
    county: "Los Angeles County",
    utility: "sce",
    bill: "Lancaster runs its own community choice program, Lancaster Energy, which buys the electricity while Southern California Edison delivers it, repairs the lines and sends the bill. Lancaster Energy's options include Clear Choice, Smart Choice at 100% renewable content and Personal Choice for solar owners, and you can opt out. A proposal should model whichever option is on your bill plus SCE's delivery charges.",
    local: "The City of Lancaster issues rooftop solar and battery storage permits instantly through Symbium: you enter the property address, choose the rooftop solar or battery storage option, answer questions about the system, and submit and pay online, and the permit is issued automatically without manual review or a trip to the counter. Symbium also checks the contractor's license and business license automatically.",
    example: "Because Lancaster's Symbium portal verifies the contractor's license and business license on its own, a bidder that says it cannot get the instant permit is telling you something about its paperwork. Ask each bidder to confirm it will file through Symbium, then compare the Personal Choice credit its model assumes for your exports.",
    sourceCheckedDate: "2026-09-23",
    hasSavingsGuide: false,
    checks: [
      [
        "Instant permit",
        "Confirm the bidder will file through the City's Symbium portal and that its license and business license will pass Symbium's check."
      ],
      [
        "Lancaster Energy option",
        "Model the Lancaster Energy option on your bill, or SCE if you opted out, plus SCE delivery charges."
      ],
      [
        "Personal Choice credit",
        "Show what the model assumes for monthly export credits and for the October true-up."
      ],
      [
        "Contract and service",
        "Name the contracting business, its CSLB license and who handles service calls after installation."
      ]
    ],
    sources: [
      {
        "label": "City of Lancaster: instant permits (Symbium) for rooftop solar and battery storage",
        "url": "https://www.cityoflancasterca.org/our-city/departments-services/community-development/building-and-safety/instant-permits"
      },
      {
        "label": "Lancaster Energy: options and how it works with SCE",
        "url": "https://lancasterenergy.com/"
      },
      {
        "label": "Lancaster Energy: Personal Choice for solar customers",
        "url": "https://lancasterenergy.com/your-options/personal-choice/"
      },
      {
        "label": "SCE: Base Services Charge",
        "url": "https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How do I get a solar permit in Lancaster, CA?",
        "Through the City's Symbium portal. Enter the address, choose rooftop solar or battery storage, answer the questions about the system and submit and pay online; the City says permits are issued automatically, without manual review or an in-person visit."
      ],
      [
        "What is Lancaster Energy?",
        "Lancaster's community choice program. It buys the electricity for Lancaster customers, while SCE delivers it, maintains the lines and sends the bill. Customers can choose among its options or opt out."
      ],
      [
        "What does Lancaster Energy pay solar customers?",
        "Solar customers on net energy metering with SCE are enrolled in Personal Choice. Usage and exports are tallied monthly, and at the October true-up, production above consumption earns a rebate based on $0.06 per kWh."
      ]
    ],
    answer: "Solar companies in Lancaster, California can get a rooftop solar or battery permit instantly through the City's Symbium portal, which issues it automatically and checks the contractor's licenses on its own. Lancaster Energy, the city's own community choice program, buys the power and SCE delivers it; its Personal Choice plan pays solar owners $0.06 per kWh for surplus at an October true-up. Compare at least three written bids.",
    keyFacts: [
      {
        "label": "Permit platform",
        "value": "Symbium, instant",
        "note": "Rooftop solar or battery storage, issued automatically",
        "source": {
          "publisher": "City of Lancaster",
          "date": "2026-09-23",
          "url": "https://www.cityoflancasterca.org/our-city/departments-services/community-development/building-and-safety/instant-permits"
        }
      },
      {
        "label": "Buys the power",
        "value": "Lancaster Energy",
        "note": "SCE delivers and bills",
        "source": {
          "publisher": "Lancaster Energy",
          "date": "2026-09-23",
          "url": "https://lancasterenergy.com/"
        }
      },
      {
        "label": "Solar surplus rebate",
        "value": "$0.06/kWh",
        "note": "Personal Choice, at the October true-up",
        "source": {
          "publisher": "Lancaster Energy",
          "date": "2026-09-23",
          "url": "https://lancasterenergy.com/your-options/personal-choice/"
        }
      }
    ],
    sections: [
      {
        "heading": "Lancaster's instant permit",
        "paragraphs": [
          "Lancaster issues instant residential solar permits through Symbium. The portal starts from the property address and pulls in the parcel's data and permit history. You choose Rooftop Solar or Battery Storage Installation, answer questions about the proposed system, and submit the application and payment online. The City says the permit is then issued automatically, without manual review or an in-person visit, and status updates arrive by email and on a dashboard.",
          "Symbium also verifies the contractor's license and business license as part of the application. That makes the permit a quick check on the company you hire, since the application depends on licenses the portal can confirm. Ask who will schedule the inspection once the work is done."
        ]
      },
      {
        "heading": "Lancaster Energy and solar",
        "paragraphs": [
          "Lancaster Energy splits the job with SCE: it buys and builds cleaner energy supplies, and SCE delivers the energy, repairs the lines and handles the bill. Its Clear Choice option is described as its lowest-rate option with higher renewable content than SCE, Smart Choice supplies 100% renewable energy, and customers may opt out to SCE.",
          "Solar owners are placed in Personal Choice. If you are already on net energy metering with SCE, enrollment is automatic; a new system enrolls through SCE, usually with the installer's help, and is then moved into Personal Choice. At the end of each month Lancaster Energy tallies the energy you drew and sent to the grid, billing you if you used more and crediting you if you sent more. Each October at the true-up, if production exceeded consumption over the year, it issues a rebate based on $0.06 per kWh. SCE's fixed Base Services Charge, $24.15 a month for customers not on CARE or FERA, stays on the delivery side."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  berkeley: {
    name: "Berkeley",
    county: "Alameda County",
    utility: "pge",
    bill: "Berkeley homes get generation from Ava Community Energy and delivery from PG&E, which sends the bill; the Energy Commission's map places the city's land in both areas. Ava and PG&E settle their halves of a solar account separately, Ava in April and PG&E on its own date. Ask each bidder to model both, using your current Ava plan and PG&E rate.",
    local: "Berkeley gives solar three permit routes. Single-family and duplex homes adding rooftop solar and a battery can get a real-time permit through SolarAPP+ and then create a record in the City's Permits Online. Systems of 10 kW AC or less that pass every item on the City's eligibility checklist can use a streamlined permit. Everything else goes through the standard process, which the City says it reviews within one working day.",
    example: "Ask each Berkeley bidder which of the City's three routes it is using and why. A 10 kW AC or smaller system on a single-family home or duplex should normally fit SolarAPP+ or the streamlined checklist; if a bid plans the standard process, ask what in the design, such as the roof structure or the battery, rules the faster routes out.",
    sourceCheckedDate: "2026-09-23",
    hasSavingsGuide: false,
    checks: [
      [
        "Permit route",
        "Name the route: SolarAPP+ and Permits Online, the streamlined checklist, or the standard process at the Permit Service Center."
      ],
      [
        "Ava and PG&E bill",
        "Model Ava generation and PG&E delivery, and the E-ELEC rate Ava requires on the Solar Billing Plan."
      ],
      [
        "Export timing",
        "Show how many exported kWh fall between 3 and 8 p.m., the hours Ava pays extra for."
      ],
      [
        "Contract and service",
        "Name the contracting business, its CSLB license and who handles service calls after installation."
      ]
    ],
    sources: [
      {
        "label": "City of Berkeley: solar permits (SolarAPP+, streamlined and standard routes)",
        "url": "https://berkeleyca.gov/construction-development/permits-design-parameters/permit-types/solar-permits"
      },
      {
        "label": "Ava Community Energy: Solar Billing Plan",
        "url": "https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/"
      },
      {
        "label": "Ava Community Energy: who we serve",
        "url": "https://avaenergy.org/community/who-we-serve/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How do I get a solar permit in Berkeley?",
        "Most single-family and duplex solar and battery projects can get a real-time permit through SolarAPP+ and a record in the City's Permits Online. Systems of 10 kW AC or less that pass the City's eligibility checklist can use the streamlined process, and other projects use the standard process at the Permit Service Center."
      ],
      [
        "How long does Berkeley take to review a solar permit?",
        "SolarAPP+ approvals are real-time. For projects on the standard permit process, the City says it reviews them within one working day."
      ],
      [
        "Who supplies electricity in Berkeley?",
        "Ava Community Energy supplies generation for most Berkeley homes; PG&E delivers the power and sends the bill."
      ]
    ],
    answer: "Berkeley permits most home solar and battery projects in real time through SolarAPP+, offers a streamlined permit for systems of 10 kW AC or less that pass its checklist, and says it reviews standard applications within one working day. Ava Community Energy supplies Berkeley's generation and PG&E delivers it. Compare at least three written bids that name the permit route and model your own Ava and PG&E bill.",
    keyFacts: [
      {
        "label": "Real-time permit",
        "value": "SolarAPP+",
        "note": "Single-family and duplex solar and storage",
        "source": {
          "publisher": "City of Berkeley",
          "date": "2026-09-23",
          "url": "https://berkeleyca.gov/construction-development/permits-design-parameters/permit-types/solar-permits"
        }
      },
      {
        "label": "Standard review",
        "value": "Within 1 working day",
        "note": "For projects outside SolarAPP+ and the streamlined route",
        "source": {
          "publisher": "City of Berkeley",
          "date": "2026-09-23",
          "url": "https://berkeleyca.gov/construction-development/permits-design-parameters/permit-types/solar-permits"
        }
      },
      {
        "label": "Ava export bonus",
        "value": "+$0.025/kWh, 3 to 8 p.m.",
        "note": "Solar Billing Plan customers not on CARE or FERA",
        "source": {
          "publisher": "Ava Community Energy",
          "date": "2026-09-23",
          "url": "https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/"
        }
      }
    ],
    sections: [
      {
        "heading": "Berkeley's three solar permit routes",
        "paragraphs": [
          "The City says it encourages solar and storage through minimal permit fees, standardized guidelines and online applications. For SolarAPP+, the installer registers with the platform, submits the design, and then creates a record in Berkeley's Permits Online; the City notes that most residential solar and storage systems qualify, subject to SolarAPP+'s eligibility rules.",
          "The streamlined route is for small rooftop systems, 10 kW AC or less, on a single-family home or duplex, where every item on the City's eligibility checklist can be marked Yes. The applicant submits the code compliance checklist, the permit application, a schematic site plan, the City's standard plan for either string or central inverters or microinverters, and its structural criteria for flush-mounted arrays, online or by appointment at the Permit Service Center. Larger or unusual projects use the standard process with full plans, and the City says it reviews those within one working day."
        ]
      },
      {
        "heading": "How Ava credits a Berkeley solar system",
        "paragraphs": [
          "Berkeley is in Ava's service area. For a system interconnected now, Ava's version of the Solar Billing Plan applies, and it only works alongside PG&E's all-electric E-ELEC rate, which Ava makes a condition. The credit for each exported kWh depends on the hour it leaves the house. Ava pays a premium for evening exports, from 3 to 8 p.m., if you are not on a discount program, while households on CARE or FERA get a smaller premium on every exported kWh instead.",
          "The two halves of the account close on different calendars: Ava reconciles generation every April, and PG&E reconciles delivery on its own annual date. A Berkeley proposal should therefore show two annual statements, not one, and say which hours of the day it expects your panels to feed the grid."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  redding: {
    name: "Redding",
    county: "Shasta County",
    utility: "redding",
    bill: "Redding homes buy electricity from Redding Electric Utility, the City's own utility, not PG&E. REU's Zero Net Energy Service bills a solar home monthly: energy drawn from the grid is charged at the retail rate, and surplus sent to the grid is credited at what REU calls the current value of solar. A proposal built on PG&E's Solar Billing Plan does not describe a Redding bill.",
    local: "In Redding, the utility comes before the building permit. REU must receive every item on its Solar PV Checklist and issue a Generator Number before the City's Building Division will accept a solar permit application. The City's SolarAPP+ route then requires a City of Redding business license, the signed REU interconnection agreement, a design for a 30 PSF roof snow load, and a home built in 1970 or later.",
    example: "Before comparing Redding bids, check each system size against your last twelve months of use. REU caps a net-generation system at 1 kW DC for every 1,752 kWh you used; at 12,000 kWh a year that is about 6.85 kW DC. A bid sized above your cap will not be allowed to interconnect as a net generator, and REU says it is not buying solar power under purchase agreements.",
    sourceCheckedDate: "2026-09-23",
    hasSavingsGuide: false,
    checks: [
      [
        "System size cap",
        "Show the size against REU's limit of 1 kW DC per 1,752 kWh of your prior twelve months' use."
      ],
      [
        "REU Generator Number",
        "Say who submits REU's Solar PV Checklist and when the Generator Number is expected; the City will not take the permit without it."
      ],
      [
        "Roof and home age",
        "Confirm the roof is designed for a 30 PSF snow load, and whether a pre-1970 home rules out SolarAPP+ or needs reinforcement."
      ],
      [
        "Warranty and inverter",
        "Confirm every component carries a manufacturer warranty of 10 years or more and the inverter meets REU's listing rules."
      ]
    ],
    sources: [
      {
        "label": "Redding Electric Utility: Solar PV program (Zero Net Energy Service, sizing, Generator Number)",
        "url": "https://www.cityofredding.gov/government/departments/redding_electric_utility/going_green/solar_photovoltaic_(pv)_program.php"
      },
      {
        "label": "City of Redding: automated residential solar permitting with SolarAPP+",
        "url": "https://files.cityofredding.gov/Document%20Center/Departments/Development%20Services/Building/Building%20Resources%20And%20Learning/Complete%20Permit%20Application%20Packages/C.O.R.%20SolarAPP%20Landing%20Page%20v5.pdf"
      },
      {
        "label": "Redding Electric Utility: Solar PV information sheet (rev. 01.24)",
        "url": "https://files.cityofredding.gov/Document%20Center/Departments/Redding%20Electric%20Utility/Going%20Green/Solar%20Power/Solar%20PV%20Information%20Sheet.pdf"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "Who provides electricity in Redding, CA?",
        "Redding Electric Utility, a department of the City of Redding. Solar homes are billed under REU's Zero Net Energy Service, not PG&E's Solar Billing Plan."
      ],
      [
        "How big a solar system can I install in Redding?",
        "REU limits a net-generation system to 1 kW DC for every 1,752 kWh of on-site use over the previous 12 months, so a home using 12,000 kWh a year could install about 6.85 kW DC. REU says the average residential system in Redding is 7.75 kW."
      ],
      [
        "Can I use SolarAPP+ for a solar permit in Redding?",
        "Yes, if the contractor is registered with SolarAPP+, holds a City of Redding business license, uploads the signed REU interconnection agreement, designs for a 30 PSF roof snow load, and the home was built in 1970 or later."
      ]
    ],
    answer: "Redding's electricity comes from Redding Electric Utility, not PG&E, and REU sets the rules a solar company has to follow: a system capped at 1 kW DC per 1,752 kWh of your last year's use, an REU Generator Number before the City will accept the permit, and monthly billing where surplus is credited at REU's value of solar. Compare at least three written bids sized to your own usage.",
    keyFacts: [
      {
        "label": "Electric utility",
        "value": "Redding Electric Utility",
        "note": "City-owned; not PG&E",
        "source": {
          "publisher": "Redding Electric Utility",
          "date": "2026-09-23",
          "url": "https://www.cityofredding.gov/government/departments/redding_electric_utility/going_green/solar_photovoltaic_(pv)_program.php"
        }
      },
      {
        "label": "Size cap",
        "value": "1 kW DC per 1,752 kWh",
        "note": "Of on-site use over the previous 12 months",
        "source": {
          "publisher": "Redding Electric Utility",
          "date": "2026-09-23",
          "url": "https://www.cityofredding.gov/government/departments/redding_electric_utility/going_green/solar_photovoltaic_(pv)_program.php"
        }
      },
      {
        "label": "Average home system",
        "value": "7.75 kW",
        "note": "Residential systems in Redding, per REU",
        "source": {
          "publisher": "Redding Electric Utility",
          "date": "2026-09-23",
          "url": "https://www.cityofredding.gov/government/departments/redding_electric_utility/going_green/solar_photovoltaic_(pv)_program.php"
        }
      }
    ],
    sections: [
      {
        "heading": "REU's steps come first",
        "paragraphs": [
          "Redding Electric Utility asks customers to size a system from their own twelve months of use, which you can see by logging into your REU account or calling (530) 339-7200. It will not interconnect a system that exceeds on-site demand as a net generator. The installer submits REU's Solar PV Checklist forms to REU Customer Service, and only after REU approves them and issues a Generator Number will the City's Building Division accept a building permit application.",
          "REU also sends specifications for a Generator Disconnect nameplate, which must be mounted on the AC disconnect within 10 feet of the meter and in sight of it. The disconnect stays off until the system passes the City's final inspection and REU commissions it; REU personnel switch it on. If the design changes during the City's review, the contractor must send REU revised drawings before the City issues its final. REU's information sheet adds that all equipment needs a manufacturer warranty of at least 10 years and that one project in every seven gets a HERS energy-efficiency inspection."
        ]
      },
      {
        "heading": "Redding's SolarAPP+ conditions",
        "paragraphs": [
          "The City of Redding accepts SolarAPP+ for most residential roof-mounted retrofit systems, from contractors registered with the platform who hold a City business license. For REU customers, the signed interconnection agreement must be uploaded to the City's portal. The design must carry a 30 PSF roof snow load, non-reducible, with roof attachments no more than 48 inches apart and staggered.",
          "Homes built before 1970 cannot use SolarAPP+. The City has required roofs to resist a 30 PSF snow load since 1970, and for older roofs it adds panel weight only if the roof is reinforced or shown to carry the load. After SolarAPP+ approval, the contractor applies in the City's CSS portal under the Electrical Photovoltaic (SolarAPP) permit, pays the fees and prints the construction ePermit. REU says it does not endorse or partner with any contractor, and recommends talking to at least three."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  "yorba-linda": {
    name: "Yorba Linda",
    county: "Orange County",
    utility: "sce",
    bill: "Yorba Linda is Southern California Edison territory; the Energy Commission's map puts the city in SCE's area with no community choice provider, and Orange County Power Authority's member cities do not include it. SCE supplies and delivers the power and adds its fixed Base Services Charge. A new system goes on SCE's Solar Billing Plan, so a proposal should model SCE's export credits, not the retail price, for the power you send back.",
    local: "Yorba Linda permits most residential rooftop solar through SolarAPP+ with three City conditions: the contractor uploads the City's Solar Self-Certification form to SolarAPP+, holds an active City of Yorba Linda business license, and is on SolarAPP+'s program eligibility list for the City. The permit itself is then applied for, paid for and downloaded in the City's Accela Citizen Access, and the signed permit card goes back to the City.",
    example: "Before comparing Yorba Linda bids on price, ask each bidder whether it already holds a City of Yorba Linda business license and is on SolarAPP+'s eligibility list for the City, since it cannot file until both are in place. Then ask who will sign and return the permit card and who meets the inspector.",
    sourceCheckedDate: "2026-09-23",
    hasSavingsGuide: false,
    checks: [
      [
        "City setup",
        "Confirm an active City of Yorba Linda business license and a place on SolarAPP+'s program eligibility list for the City."
      ],
      [
        "Self-certification",
        "Say who signs the City's Solar Self-Certification form uploaded to SolarAPP+."
      ],
      [
        "Permit card and inspection",
        "Say who returns the signed permit card and books the inspection."
      ],
      [
        "SCE bill",
        "Build the estimate on your last twelve SCE bills and keep the fixed monthly charge in it."
      ]
    ],
    sources: [
      {
        "label": "City of Yorba Linda: Solar Permits (SolarAPP+ and Accela Citizen Access)",
        "url": "https://www.yorbalindaca.gov/880/Solar-Permits"
      },
      {
        "label": "SCE: Solar Billing Plan",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "Orange County Power Authority: about and member cities",
        "url": "https://www.ocpower.org/about-us/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How do I get a solar permit in Yorba Linda?",
        "Most residential rooftop systems go through SolarAPP+. The contractor uploads the City's Solar Self-Certification form, must hold an active City business license and be on SolarAPP+'s eligibility list for Yorba Linda, then applies and pays in the City's Accela Citizen Access and returns the signed permit card."
      ],
      [
        "How do I schedule a solar inspection in Yorba Linda?",
        "Call the Building Inspection Hotline at 714-854-7411 or use the City's online inspection request tool; if neither works, the Building Division is at 714-961-7120."
      ],
      [
        "Who provides electricity in Yorba Linda?",
        "Southern California Edison supplies and delivers it. Yorba Linda is not a member of Orange County Power Authority."
      ]
    ],
    answer: "Solar companies in Yorba Linda permit most rooftop systems through SolarAPP+, but only after three City steps: an active City business license, a place on SolarAPP+'s eligibility list for Yorba Linda, and the City's Solar Self-Certification form. The permit is then issued through Accela Citizen Access. SCE supplies and delivers Yorba Linda's power. Compare at least three written bids built on your own SCE bill.",
    keyFacts: [
      {
        "label": "Permit route",
        "value": "SolarAPP+, then Accela",
        "note": "Self-certification form and City business license required",
        "source": {
          "publisher": "City of Yorba Linda",
          "date": "2026-09-23",
          "url": "https://www.yorbalindaca.gov/880/Solar-Permits"
        }
      },
      {
        "label": "Inspection hotline",
        "value": "714-854-7411",
        "note": "Or the City's online inspection request tool",
        "source": {
          "publisher": "City of Yorba Linda",
          "date": "2026-09-23",
          "url": "https://www.yorbalindaca.gov/880/Solar-Permits"
        }
      },
      {
        "label": "SCE fixed charge",
        "value": "$24.15/month",
        "note": "Base Services Charge, customers not on CARE or FERA",
        "source": {
          "publisher": "SCE",
          "date": "2026-09-23",
          "url": "https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc"
        }
      }
    ],
    sections: [
      {
        "heading": "Yorba Linda's SolarAPP+ steps",
        "paragraphs": [
          "The City describes three stages. First, the contractor registers with SolarAPP+, submits the design for automated review, pays SolarAPP+'s processing fee and downloads the approved plans. SolarAPP+ checks most residential, roof-mounted retrofit systems; the City's eligibility checklist lists which ones qualify, and only projects that meet it can use the instant route.",
          "Second comes the City's part. The contractor completes the Solar Self-Certification form and uploads it to SolarAPP+, must hold an active City of Yorba Linda business license, and must be added to SolarAPP+'s program eligibility list for the City by emailing SolarAPP+. It then applies for the City solar permit in Accela Citizen Access, uploads the documents, pays and returns the signed permit card. Third, the inspection is booked by calling the Building Inspection Hotline at 714-854-7411 or through the online request tool, with the Building Division at 714-961-7120 as the fallback."
        ]
      },
      {
        "heading": "What SCE's rules mean for a Yorba Linda system",
        "paragraphs": [
          "A Yorba Linda system connected today is billed under SCE's Solar Billing Plan. Exports are credited at prices that move hour by hour, the running balance is reconciled once a year in the month your system was switched on, and any credit left over is bought back at roughly two cents per kWh. SCE itself now says that storing your own energy for expensive hours is worth more than exporting it.",
          "SCE's monthly Base Services Charge is billed whether or not you have panels, so a proposal that shows your bill falling to zero has left something out. Ask each bidder for a month-by-month estimate of the SCE bill you would still pay."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  oxnard: {
    name: "Oxnard",
    county: "Ventura County",
    utility: "sce",
    bill: "Clean Power Alliance has supplied Oxnard's generation since 2019, and 100% Green is the city's default option, so most Oxnard homes pay CPA for generation and SCE for delivery on one SCE bill. CPA trues up solar customers every April and pays surplus at 10% above SCE's rate. A proposal should model your actual CPA option, not SCE's generation rates.",
    local: "Oxnard issues solar permits in real time online for licensed contractors who have a SolarAPP+ approval. The contractor applies in the City's Click2Gov system, which requires a CSLB license, a City of Oxnard Business Tax Certificate, and a Click2Gov contractor account opened with the same phone number used for the business license. The application records the SolarAPP+ Approval ID, system kilowatts and panel count, which print on the permit.",
    example: "Before you sign with an Oxnard bidder, ask whether it already has a City of Oxnard Business Tax Certificate and a Click2Gov contractor account, since the City's online solar permit cannot be pulled without both. Then check that the kilowatts and panel count it will print on the permit match the contract.",
    sourceCheckedDate: "2026-09-23",
    hasSavingsGuide: false,
    checks: [
      [
        "City credentials",
        "Confirm a CSLB license, a City of Oxnard Business Tax Certificate and a Click2Gov contractor account."
      ],
      [
        "Permit details",
        "Check that the SolarAPP+ Approval ID, system kW and panel count on the permit match the contract."
      ],
      [
        "Inspection timing",
        "Say who requests the inspection; the City requires it within 365 days of permit issuance."
      ],
      [
        "CPA option",
        "Price the generation at the CPA product on your bill, which is 100% Green unless you changed it."
      ]
    ],
    sources: [
      {
        "label": "City of Oxnard Building and Engineering: online express solar processing with SolarAPP+ and Click2Gov",
        "url": "https://sites.google.com/oxnard.org/onlinesolarpermitswithsolarapp/home"
      },
      {
        "label": "Clean Power Alliance: Oxnard (default option, service start)",
        "url": "https://cleanpoweralliance.org/place/oxnard/"
      },
      {
        "label": "Clean Power Alliance: solar, NEM and Solar Billing Plan",
        "url": "https://cleanpoweralliance.org/solar/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How do I get a solar permit in Oxnard?",
        "A licensed contractor gets SolarAPP+ approval, then applies in the City's Click2Gov system, uploads the approval documents, pays online and prints the permit in real time. Projects without SolarAPP+ approval use the City's other application options."
      ],
      [
        "What does a contractor need to pull a solar permit in Oxnard?",
        "A CSLB contractor license, a City of Oxnard Business Tax Certificate, and a Click2Gov account set up with the same phone number used for the business license."
      ],
      [
        "Is Oxnard served by Clean Power Alliance?",
        "Yes. CPA has served Oxnard since 2019, with 100% Green as the default option. SCE delivers the power and sends the bill."
      ]
    ],
    answer: "Oxnard issues rooftop solar permits in real time online: a licensed contractor with a SolarAPP+ approval applies, pays and prints the permit in the City's Click2Gov system, provided it holds a City of Oxnard Business Tax Certificate. Clean Power Alliance supplies Oxnard's generation, 100% Green by default, and SCE delivers it. Compare at least three written bids built on your own CPA and SCE bill.",
    keyFacts: [
      {
        "label": "Permit route",
        "value": "SolarAPP+, then Click2Gov",
        "note": "Real-time online issuance for licensed contractors",
        "source": {
          "publisher": "City of Oxnard",
          "date": "2026-09-23",
          "url": "https://sites.google.com/oxnard.org/onlinesolarpermitswithsolarapp/home"
        }
      },
      {
        "label": "City credential",
        "value": "Business Tax Certificate",
        "note": "Required to pull the permit online",
        "source": {
          "publisher": "City of Oxnard",
          "date": "2026-09-23",
          "url": "https://sites.google.com/oxnard.org/onlinesolarpermitswithsolarapp/home"
        }
      },
      {
        "label": "Default generation option",
        "value": "CPA 100% Green",
        "note": "Serving Oxnard since 2019; SCE delivers",
        "source": {
          "publisher": "Clean Power Alliance",
          "date": "2026-09-23",
          "url": "https://cleanpoweralliance.org/place/oxnard/"
        }
      }
    ],
    sections: [
      {
        "heading": "Oxnard's Click2Gov solar permit",
        "paragraphs": [
          "The City of Oxnard's Building and Engineering Division runs online express solar processing for contractors who already have a SolarAPP+ approval. Only SolarAPP+-reviewed permits can be applied for in Click2Gov; other projects use the City's other application options. The contractor must be licensed with the CSLB and hold a City of Oxnard Business Tax Certificate, also called a City business license. Its Click2Gov account has to be associated with a contractor and set up with the same phone number the contractor gave the City's Licensing Division; without that match, the account cannot be validated.",
          "In the application, the contractor enters the SolarAPP+ Approval ID, the system's kilowatts and the number of panels, which print on the permit, then uploads the SolarAPP+ approval documents. Once the application is created, it can pay online, print the permit and request the inspection from the same site. Inspections must be requested within 365 days of issuance. The Division is at 214 South C Street, (805) 385-7925."
        ]
      },
      {
        "heading": "Clean Power Alliance and an Oxnard solar bill",
        "paragraphs": [
          "Oxnard homes have been enrolled with Clean Power Alliance since 2019, and the city's default is CPA's 100% Green Power product. Which solar rules apply depends on the date SCE approved the system. Older systems keep net energy metering with CPA for the full 20 years they are eligible. A system whose interconnection application was filed after August 2023 is billed under two Solar Billing Plans at once, CPA's for the power it supplies and SCE's for delivery, and the export credits change by hour according to the CPUC's avoided-cost values.",
          "Unlike SCE, which settles each account on its own anniversary, CPA runs one annual settlement for all solar customers in April. If a year's exports exceed imports, CPA's compensation rate is set 10% higher than SCE's. A balance above $100 is mailed as a check, and a smaller one is carried as a credit on the CPA portion of the bill, though you can request a check. Ask each Oxnard bidder to show which CPA product and which true-up month its model assumes."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  redlands: {
    name: "Redlands",
    county: "San Bernardino County",
    utility: "sce",
    bill: "Southern California Edison is the only electric provider mapped over Redlands in the Energy Commission's utility layers, so SCE both supplies and delivers the power; there is no community choice program to model. What changes with solar is how SCE credits the power you send back, which is set by its Solar Billing Plan. Ask each bidder to model that plan from your own twelve months of SCE bills.",
    local: "Redlands lets licensed contractors submit residential roof-mounted solar through SolarAPP+ and get an auto-issued permit online. Eligible systems go on the main dwelling's roof of a permitted residential structure; ballasted and ground-mounted systems are excluded. After SolarAPP+ approval, the contractor applies in the City's Online Public Portal under SolarAPP+ (Preapproved), pays online and prints the permit, and books the inspection through the QR code on the job card.",
    example: "If one Redlands bid puts panels on a detached garage or on a ground mount and another keeps them on the house, they are on different permit paths: the City's SolarAPP+ route covers only the main dwelling's roof. Ask each bidder which path it is using and who handles the plan review if it is not SolarAPP+.",
    sourceCheckedDate: "2026-09-23",
    checks: [
      [
        "SolarAPP+ eligibility",
        "Confirm the array is on the main dwelling's permitted roof and is not ballasted or ground-mounted."
      ],
      [
        "Revisions",
        "Ask how design changes will be handled; SolarAPP+'s initial fee covers up to three revisions."
      ],
      [
        "Inspection booking",
        "Say who books the inspection through the job card's QR code or the City's online booking page."
      ],
      [
        "SCE bill",
        "Model SCE's Solar Billing Plan from your own bill and state the share of output you use at home."
      ]
    ],
    sources: [
      {
        "label": "City of Redlands: SolarAPP+ program (eligibility, portal, inspections, revisions)",
        "url": "https://www.redlands.gov/solarapp-pilot-program/"
      },
      {
        "label": "SCE: Solar Billing Plan",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    faq: [
      [
        "How do I get a solar permit in Redlands, CA?",
        "A licensed contractor submits the design to SolarAPP+, then applies in the Redlands Online Public Portal under SolarAPP+ (Preapproved), enters the approval number, uploads the approval document, pays online and prints the permit."
      ],
      [
        "What happens if my Redlands solar design changes after approval?",
        "The revision goes back through SolarAPP+ first, which issues a revised approval document; SolarAPP+'s initial fee covers up to three revisions. If the change makes the project ineligible, the contractor coordinates with the City's Building and Safety Division."
      ],
      [
        "Who provides electricity in Redlands?",
        "Southern California Edison. It is the only electric provider the Energy Commission maps over the city."
      ]
    ],
    answer: "Solar companies in Redlands can get an auto-issued permit for a roof-mounted system on the main house through SolarAPP+ and the City's Online Public Portal; ground-mounted and ballasted systems need a different path. SCE supplies and delivers Redlands' power, and new systems go on SCE's Solar Billing Plan. Compare at least three written bids that name the permit path and model your own SCE bill.",
    keyFacts: [
      {
        "label": "Permit route",
        "value": "SolarAPP+, auto-issued",
        "note": "Main dwelling rooftop; licensed contractors",
        "source": {
          "publisher": "City of Redlands",
          "date": "2026-09-23",
          "url": "https://www.redlands.gov/solarapp-pilot-program/"
        }
      },
      {
        "label": "Not eligible",
        "value": "Ballasted or ground-mounted",
        "note": "Not eligible for the SolarAPP+ route",
        "source": {
          "publisher": "City of Redlands",
          "date": "2026-09-23",
          "url": "https://www.redlands.gov/solarapp-pilot-program/"
        }
      },
      {
        "label": "Revisions covered",
        "value": "Up to 3",
        "note": "Included in SolarAPP+'s initial processing fee",
        "source": {
          "publisher": "City of Redlands",
          "date": "2026-09-23",
          "url": "https://www.redlands.gov/solarapp-pilot-program/"
        }
      }
    ],
    sections: [
      {
        "heading": "Redlands' four SolarAPP+ steps",
        "paragraphs": [
          "The City's Building and Safety Division sets out four steps. Eligibility: the system is on the rooftop of the main dwelling, the structure is permitted and residential, it is not ballasted or ground-mounted, and the applicant is a licensed contractor. Automated review: the contractor submits the design to SolarAPP+ with its license information and pays SolarAPP+'s processing fee. Permit: in the Redlands Online Public Portal it selects SolarAPP+ (Preapproved), enters the approval number, uploads the approval document, pays online and prints the permit documents. Inspection: it books through the QR code on the job card or the City's online booking page.",
          "Revisions go back through SolarAPP+ first, which issues a revised approval document; the initial fee covers up to three. If a revision makes the project ineligible, the contractor has to coordinate a regular submittal with the Division."
        ]
      },
      {
        "heading": "SCE's Solar Billing Plan in Redlands",
        "paragraphs": [
          "Under the Solar Billing Plan, power a Redlands home sends to the grid earns credits priced from hourly avoided-cost values, and those credits are applied against later bills. Once a year, in the month the system first went live, SCE issues a True-Up bill that settles the running balance. What is left over after that is bought back at SCE's surplus rate, which SCE currently puts near two cents per kWh.",
          "Because the buy-back rate is so low, a Redlands design that sends most of its output to the grid is worth less than its kilowatt-hour total suggests. Ask each bidder what share of the production its model assumes you use at home, and whether a battery changes that."
        ]
      }
    ],
    contentModified: "2026-09-23",
  },
  "huntington-beach": {
    "name": "Huntington Beach",
    "county": "Orange County",
    "utility": "sce",
    "bill": "Huntington Beach homes get both generation and delivery from Southern California Edison. The city was part of Orange County Power Authority from 2022, but the City Council voted to leave in May 2023 and OCPA returned its customers to SCE in 2024, solar customers first in April. A proposal written for Huntington Beach today should use SCE's Solar Billing Plan, not OCPA's April true-up or its surplus rate.",
    "local": "Huntington Beach issues solar permits instantly through SolarAPP+. The contractor pays SolarAPP+'s $35 processing fee, downloads the approval documents, creates a Residential Photovoltaic System record in the City's HB ACA portal with the Permit and Asbestos Disclosure Form, pays the City's fees and requests inspections there. Homeowners installing their own systems cannot use SolarAPP+ unless they hold the appropriate contractor licenses.",
    "example": "For a Huntington Beach home with a 400-amp or smaller main service, ask each bidder whether its design stays within SolarAPP+'s equipment limits and whether it has completed the solar-plus-storage training if a battery is included. A bid that cannot use SolarAPP+ should say which route it will take instead. For a manufactured home, the bid should name the state HCD permit instead.",
    "sourceCheckedDate": "2026-09-23",
    "checks": [
      [
        "SolarAPP+ limits",
        "Confirm the main service is 400 A or less and disconnects and busbars 225 A or less, and the system is 38.4 kW or smaller."
      ],
      [
        "Storage training",
        "If a battery is included, confirm the contractor has SolarAPP+'s solar-and-storage training certificate."
      ],
      [
        "City record",
        "Say who creates the HB ACA record, uploads the Permit and Asbestos Disclosure Form and requests the inspection."
      ],
      [
        "SCE billing",
        "Model SCE's Solar Billing Plan from your own bill, with the nine-year export credit lock and the settlement month."
      ],
      [
        "Manufactured home",
        "On a mobile or manufactured home, show the HCD permit and a CSLB license before any work starts."
      ]
    ],
    "sources": [
      {
        "label": "City of Huntington Beach: SolarAPP+ instant solar permits",
        "url": "https://www.huntingtonbeachca.gov/departments/community_development/building___inspection/solar_app.php"
      },
      {
        "label": "Orange County Power Authority: Huntington Beach customers return to SCE in 2024",
        "url": "https://www.ocpower.org/huntington-beach-2/"
      },
      {
        "label": "Orange County Power Authority: FAQ (current member cities)",
        "url": "https://www.ocpower.org/faq/"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California HCD: advisory for manufactured home roof-mounted solar systems (PDF)",
        "url": "https://www.hcd.ca.gov/sites/default/files/docs/manufactured-and-mobilehomes/solar-pv-advisory.pdf"
      },
      {
        "label": "California HCD: modifications and alterations to manufactured homes",
        "url": "https://www.hcd.ca.gov/manufactured-and-mobilehomes/modifying-mobilehome"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/orange-county",
        "label": "Utilities, CCAs and permit offices across Orange County"
      },
      {
        "href": "/blog/sce-settlement-bill",
        "label": "What the SCE settlement bill reconciles once a year"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "Whether a battery pays for itself under net billing"
      }
    ],
    "faq": [
      [
        "How do I get a solar permit in Huntington Beach?",
        "A licensed contractor submits the design in SolarAPP+, pays its $35 processing fee, then creates a Residential Photovoltaic System record in the City's HB ACA portal, uploads the SolarAPP+ approval and the Permit and Asbestos Disclosure Form, pays the City's fees and gets the permit."
      ],
      [
        "Can a homeowner use SolarAPP+ in Huntington Beach?",
        "Not unless the homeowner is a licensed contractor with the appropriate licenses. Owner-installed systems use the City's regular permit process."
      ],
      [
        "Is Huntington Beach still served by Orange County Power Authority?",
        "No. OCPA says the City Council voted to leave in May 2023. Solar customers were switched to SCE bundled service beginning in April 2024 and all other customers in June 2024, automatically and without fees. OCPA's current member cities are Buena Park, Fullerton and Irvine, with Fountain Valley joining."
      ],
      [
        "I went solar under OCPA. What happened to my plan?",
        "OCPA says the return to SCE did not change a customer's net metering type, whether NEM 1.0, NEM 2.0 or the Solar Billing Plan. OCPA trued up its solar accounts as of the April 2024 meter read, and generation charges and credits went back onto the SCE bill."
      ],
      [
        "Can I put solar on a mobile home in Huntington Beach?",
        "Yes, but the permit comes from the state. The California Department of Housing and Community Development says an HCD permit is required for any solar system installed on a manufactured home, and warns that roof damage from poor installation is not visible. Check the company's CSLB license and ask for the HCD permit before signing."
      ]
    ],
    "answer": "Huntington Beach issues rooftop solar permits instantly through SolarAPP+: a licensed contractor pays SolarAPP+'s $35 fee, then files and pays in the City's HB ACA portal. SCE supplies both generation and delivery; the city left Orange County Power Authority, and OCPA returned its customers to SCE in 2024. Solar on a mobile or manufactured home needs a state HCD permit instead. Compare at least three written bids built on your own SCE bill.",
    "keyFacts": [
      {
        "label": "SolarAPP+ fee",
        "value": "$35",
        "note": "City permit fees paid separately in HB ACA",
        "source": {
          "publisher": "City of Huntington Beach",
          "date": "2026-09-23",
          "url": "https://www.huntingtonbeachca.gov/departments/community_development/building___inspection/solar_app.php"
        }
      },
      {
        "label": "Electric provider",
        "value": "SCE",
        "note": "Back from OCPA in 2024; solar accounts moved in April",
        "source": {
          "publisher": "Orange County Power Authority",
          "date": "2026-09-23",
          "url": "https://www.ocpower.org/huntington-beach-2/"
        }
      },
      {
        "label": "Manufactured homes",
        "value": "HCD permit required",
        "note": "State permit, not the City's SolarAPP+",
        "source": {
          "publisher": "California HCD",
          "date": "2026-09-23",
          "url": "https://www.hcd.ca.gov/sites/default/files/docs/manufactured-and-mobilehomes/solar-pv-advisory.pdf"
        }
      }
    ],
    "sections": [
      {
        "heading": "What SolarAPP+ checks in Huntington Beach",
        "paragraphs": [
          "The City explains that SolarAPP+ replaces the plan set with a design questionnaire: the software checks the contractor's inputs against the model building, electrical and fire codes and either approves the design for an instant permit after payment or says right away why it cannot. The City notes that traditional review of a site plan and electrical plan averages 5 to 10 business days. Workmanship and whether the installation matches the approved design are then checked at inspection.",
          "SolarAPP+ has no overall wattage cap, but it enforces equipment limits: the home's main service can be rated up to 400 amps, and service disconnects and busbars up to 225 amps; within those limits it can approve systems up to 38.4 kW. Contractors must complete IREC's training once to use it, and a separate solar-and-storage training to submit projects with batteries."
        ]
      },
      {
        "heading": "Huntington Beach's return to SCE",
        "paragraphs": [
          "Orange County Power Authority became the default generation provider for Huntington Beach businesses on April 1, 2022 and for homes on October 1, 2022. In May 2023 the City Council voted to leave. OCPA switched the city's net metering customers back to SCE bundled service beginning in April 2024 and everyone else in June 2024, on each account's regular meter read date, with no action needed and no fee to customers; OCPA says the City covered the costs. Customers cannot stay with OCPA from Huntington Beach, because service is limited to member communities.",
          "For a new system, that means SCE's Solar Billing Plan. Exports earn Energy Export Credits that change by hour and season, SCE locks the values for nine years from the year you start, and customers who enroll before 2028 get an extra credit of about $0.04 per kWh, or about $0.09 if income-qualified. The credits cannot cover the Base Services Charge, and the settlement bill arrives once a year in the month the system started service. Older articles and some proposals still describe OCPA's April true-up and 10% surplus premium for Huntington Beach; those terms no longer apply here."
        ]
      },
      {
        "heading": "Solar on a mobile or manufactured home",
        "paragraphs": [
          "A manufactured home follows a different permit path from a house. The California Department of Housing and Community Development says an HCD permit is required for any solar system installed on a manufactured home, and that a permit is needed before any alteration to a mobilehome or manufactured home begins. HCD's advisory warns owners that manufactured home roofs are not accessible, so damage from poor installation practices is not visible, and tells them to confirm the solar company is licensed by the Contractors State License Board and has obtained a permit from HCD before signing.",
          "HCD's permit guidelines (form HCD MH 604) say when a job also needs form HCD MH 415, engineered plans, electrical load calculations or manufacturer specifications. Its Southern Area Office is in Riverside. Ask each bidder whether its design needs engineered plans for your roof, and who files with HCD."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "corona": {
    "name": "Corona",
    "county": "Riverside County",
    "utility": "other",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Find the utility's name on your bill before you compare any estimate. Most Corona homes are Southern California Edison customers, but the City of Corona runs its own electric utility in part of town, and the two have different prices and different solar rules. A proposal that uses SCE's numbers for a City of Corona account, or the reverse, is modeling a bill you do not have.",
    "local": "Corona's Building Division takes solar permits through its eTRAKiT portal, either as an expedited plan check built on the City's own forms or as a Symbium solar permit. The City also warns that a separate application to, and approval from, the electric utility serving the address is required before any work starts, whether that is SCE or the City's Utilities Department.",
    "example": "Ask two bidders to size the system from your last 12 months of kWh use and to show the monthly output next to it. On a City of Corona account the utility will not accept a system whose estimated annual output is larger than that usage, so a design sized for a future EV or pool may have to wait. On an SCE account, ask how much of the output the house uses directly, because SCE says export credits are worth less than the power you buy.",
    "checks": [
      [
        "Which utility",
        "Name the utility on your bill, SCE or the City of Corona, and use only that utility's rates and solar rules in the savings estimate."
      ],
      [
        "Permit route",
        "Say whether the permit goes through the City's expedited plan check or Symbium in eTRAKiT, and who pays the plan check fee."
      ],
      [
        "Utility approval",
        "Show the utility application for the address, and on a City account confirm when the bi-directional meter will be installed and tested."
      ],
      [
        "System size",
        "On a City of Corona account, show that estimated annual output does not exceed the last 12 months of use."
      ],
      [
        "Backup switch",
        "On a City of Corona meter, put any Tesla Backup Switch or similar device downstream in a separate panel, not on the meter."
      ]
    ],
    "sources": [
      {
        "label": "City of Corona Building Division: expedited solar permits and Symbium",
        "url": "https://www.coronaca.gov/departments/building-division/expedited-permits"
      },
      {
        "label": "City of Corona: Permitting Guide for Symbium Solar (PDF)",
        "url": "https://cdn.prod.website-files.com/65799af8ef225180fdf1ba2e/67f3e7ad6cd5d450969f193b_Permitting%20Guide%20for%20Symbium%20Solar.pdf"
      },
      {
        "label": "Corona Utilities Department: solar interconnection process, NEM cap and ERG schedule",
        "url": "https://www.coronaca.gov/departments/utilities/customer-care/services/solar-generator-interconnection-request-application-and-process"
      },
      {
        "label": "Corona Utilities Department: Eligible Renewable Generation agreement (May 21, 2026, PDF)",
        "url": "https://cdn.prod.website-files.com/65799af8ef225180fdf1ba2e/6a0f47bbf28d13cfa5c31621_Eligible%20Renewable%20Generation%20Agreement_20260521.pdf"
      },
      {
        "label": "Corona Utilities Department: electric service",
        "url": "https://www.coronaca.gov/departments/utilities/customer-care/services/electric-service"
      },
      {
        "label": "Corona Utilities Department: electric rates",
        "url": "https://www.coronaca.gov/departments/utilities/customer-care/services/electric-rates"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/blog/sce-settlement-bill",
        "label": "How SCE's once-a-year solar settlement bill works"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a home battery earns its place"
      },
      {
        "href": "/blog/solar-panel-repair-cost",
        "label": "What solar repairs cost and who pays for them"
      }
    ],
    "faq": [
      [
        "Who is my electric utility in Corona?",
        "Most Corona addresses are SCE customers. Addresses inside the City's electric service area, which new developments join when capacity is available, are served by the City of Corona Utilities Department. Check the name on your bill; the rates, the solar rules and the approval step all depend on it."
      ],
      [
        "Can I still get net metering from the City of Corona?",
        "Not at first. The City says its net metering schedule reached its cap, 5 percent of aggregate customer peak demand, in March 2024. New systems go on the Eligible Renewable Generation (ERG) schedule and a waiting list, and move to net metering in order of their original permission-to-operate date if capacity opens."
      ],
      [
        "How fast is a Symbium solar permit in Corona?",
        "The City's Symbium guide says staff review the eTRAKiT submittal within one business day at the latest, and the permit is issued immediately if every application, document and fee is in. Verify first that the address is inside Corona city limits."
      ],
      [
        "What does electricity cost from the City of Corona?",
        "The City's residential rate has a $16.54 monthly fixed charge and three tiers: $0.10504 per kWh up to baseline, $0.11544 from 101 to 130 percent of baseline and $0.21840 above that, plus a $0.00405 per kWh public benefits charge. SCE customers pay SCE's rates instead."
      ],
      [
        "Who repairs solar panels in Corona?",
        "Start with the contract: the workmanship warranty names who handles repairs and for how long, and the equipment warranties name the panel and inverter makers. If the original company is gone, get the repair scope and price in writing, and check the repair company's license at cslb.ca.gov before work begins."
      ]
    ],
    "answer": "Corona is split between two electric utilities: Southern California Edison serves most of the city, and the City's own Utilities Department serves its electric service area. Solar companies file the permit with the City through eTRAKiT, as an expedited plan check or a Symbium permit, and need the serving utility's approval before starting work. City of Corona customers no longer get net metering at first. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Electric utility",
        "value": "SCE or City of Corona",
        "note": "About 97% of the city's area is SCE territory",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "City net metering",
        "value": "Capped since March 2024",
        "note": "New City customers go on the ERG schedule and a waiting list",
        "source": {
          "publisher": "Corona Utilities Department",
          "date": "2026-09-23",
          "url": "https://www.coronaca.gov/departments/utilities/customer-care/services/solar-generator-interconnection-request-application-and-process"
        }
      },
      {
        "label": "Permit filing",
        "value": "eTRAKiT",
        "note": "Expedited plan check or Symbium; Symbium review within one business day",
        "source": {
          "publisher": "City of Corona",
          "date": "2026-09-23",
          "url": "https://www.coronaca.gov/departments/building-division/expedited-permits"
        }
      }
    ],
    "sections": [
      {
        "heading": "Two utilities in one city",
        "paragraphs": [
          "Corona's electric utility dates to April 4, 2001, when the City Council created it by Resolution No. 2001-25 in response to the statewide rolling blackouts and electric price instability. It provides fully bundled service to homes and businesses within the City's electric service area, and new developments inside that area become its customers if capacity is available. The City puts its current peak demand at 25.8 MW. Everywhere else in Corona, SCE delivers the power and sends the bill. On the California Energy Commission's utility map, about 97% of the city's area lies in SCE territory and about 3% in the City's.",
          "The City's residential rate is tiered: a $16.54 monthly fixed charge, then $0.10504 per kWh up to baseline, $0.11544 from 101% to 130% of baseline and $0.21840 above that, plus a public benefits charge of $0.00405 per kWh. Those are the City's prices, not SCE's. A proposal for an SCE address should use the SCE rate schedule printed on your bill."
        ]
      },
      {
        "heading": "The City's net metering cap and the ERG schedule",
        "paragraphs": [
          "The City of Corona offered net energy metering first come, first served, until the solar capacity on its system reached 5 percent of its aggregate customer peak demand. The City says total capacity, counting pending applications, reached that level in March 2024. New applications now go on the Eligible Renewable Generation (ERG) rate schedule, which the City Council approved on June 5, 2024, and onto a waiting list for net metering. The utility reviews its solar customers once a year, and if capacity opens, ERG customers move to net metering in order of their original permission-to-operate date. Under the ERG agreement, the City pays for power sent to the grid only if the customer assigns the system's renewable energy credits to the City.",
          "The City's interconnection steps run in a fixed order. The utility needs a completed application, the solar review fee, a building permit pulled at the time of application and signed off before permission to operate, an electrical single-line diagram, a load schedule and a site plan. The load schedule compares 12 months of kWh use with the system's estimated monthly production: the estimated output may not exceed the previous year's use, and with less than 12 months of history the City applies a standard of 2 watts per square foot of the premises. Once the application is approved, the City drafts the agreement, installs and tests a bi-directional meter, and only then issues permission to operate."
        ]
      },
      {
        "heading": "Filing the permit in eTRAKiT",
        "paragraphs": [
          "For an expedited plan check, the City's package includes an application form, an eligibility checklist, a standard plan and a structural criteria form, with separate versions for central-inverter and microinverter systems. The submittal also needs a roof plan and installation or spec sheets for every component, as PDFs printed at no larger than 11 by 17 inches. Plan check processing does not begin until the fee is paid.",
          "The Symbium route starts outside the City: the contractor gets Symbium's approval documents, then applies in eTRAKiT under the Symbium Solar permit type with those documents and the City's forms, and pays the fees. The City's guide says staff review the submittal within one business day at the latest and issue the permit immediately if nothing is missing. Both routes start by confirming the address is inside Corona city limits. On a City of Corona meter, the Utilities Department does not allow a Tesla Backup Switch or similar device on the meter itself; it has to go downstream in a separate panel or meter enclosure, with the utility's design approval first."
        ]
      },
      {
        "heading": "SCE's Solar Billing Plan for the rest of Corona",
        "paragraphs": [
          "On an SCE account, a new system goes on SCE's Solar Billing Plan. Power sent to the grid earns Energy Export Credits that change by hour and season, with higher values in June through September, and SCE locks the values for nine years based on the year a new customer starts. Customers who enroll before 2028 also get an Energy Export Bonus Credit of about $0.04 per kWh, or about $0.09 for income-qualified customers. The credits cannot pay the Base Services Charge, and the once-a-year settlement bill arrives in the month the system started service.",
          "SCE itself says its export credits are worth less than what you pay for power from the grid, and that storing daytime output to use in the expensive evening hours is now worth more than exporting it. That is why a Corona bid for an SCE home should show how much of the output the house uses directly, and whether a battery changes the result."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "orange-county": {
    "name": "Orange County",
    "county": "Orange County",
    "utility": "other",
    "sourceCheckedDate": "2026-09-23",
    "seo": {
      "description": "Orange County solar companies: which utility and CCA serve each city (SCE, SDG&E, Anaheim, OCPA), how permits work, and what to compare in quotes."
    },
    "bill": "In Orange County the bill decides more than the zip code does. SCE delivers power to most of the county, SDG&E to the south end, and the City of Anaheim to Anaheim. In Buena Park, Fullerton and Irvine, Orange County Power Authority supplies the generation on an SCE bill. Each of those four sets its own solar credit rules, so a quote has to start from the provider names printed on your own statement.",
    "local": "Every incorporated city in the county issues its own solar permit, and homes in unincorporated areas such as Ladera Ranch and Rossmoor are permitted by the County of Orange through OC Development Services. State law has required each city of more than 50,000 people to offer an online, automated permit such as SolarAPP+ since September 30, 2023, and most smaller cities since September 30, 2024, so ask each bidder which route your city uses.",
    "example": "Ask every Orange County bidder to put two things at the top of the proposal: the utility and generation provider from your bill, and the permit office for your address. A bid that assumes SCE and OCPA for a Mission Viejo or Laguna Niguel home that SDG&E actually serves, or that prices an Anaheim home at SCE's rates, is working from the wrong numbers before it gets to the roof.",
    "checks": [
      [
        "Utility and CCA",
        "Name the delivery utility (SCE, SDG&E or Anaheim) and the generation provider (OCPA or the utility) from your bill."
      ],
      [
        "Credit rules",
        "Model that provider's export credits and true-up month, not a county average."
      ],
      [
        "Permit office",
        "Say whether your city or the County of Orange issues the permit, and whether the job uses SolarAPP+ or a standard plan check."
      ],
      [
        "Split cities",
        "In Mission Viejo, Aliso Viejo, Laguna Hills or Laguna Niguel, confirm which utility serves the address before comparing savings."
      ]
    ],
    "region": {
      "heading": "Who serves each Orange County city, and who issues the permit",
      "intro": [
        "The California Energy Commission's utility map shows three delivery utilities in the county. SCE covers most of it, SDG&E serves the southern end (SDG&E describes its territory as San Diego and southern Orange counties), and the City of Anaheim runs its own public utility. A few cities in the south straddle the SCE and SDG&E line, so the table marks them as split.",
        "Generation is a second layer. Orange County Power Authority, the county's community choice aggregator, lists its current member cities as Buena Park, Fullerton and Irvine, with Fountain Valley beginning service soon. Huntington Beach was a member but left: OCPA says its customers there were returned to SCE in 2024."
      ],
      "places": [
        {
          "name": "Anaheim",
          "slug": "anaheim",
          "utility": "Anaheim Public Utilities",
          "generation": "Anaheim Public Utilities",
          "permit": "City of Anaheim"
        },
        {
          "name": "Buena Park",
          "utility": "SCE",
          "generation": "Orange County Power Authority",
          "permit": "City of Buena Park"
        },
        {
          "name": "Fullerton",
          "utility": "SCE",
          "generation": "Orange County Power Authority",
          "permit": "City of Fullerton"
        },
        {
          "name": "Irvine",
          "slug": "irvine",
          "utility": "SCE",
          "generation": "Orange County Power Authority",
          "permit": "City of Irvine"
        },
        {
          "name": "Fountain Valley",
          "utility": "SCE",
          "generation": "SCE; OCPA service beginning soon",
          "permit": "City of Fountain Valley"
        },
        {
          "name": "Huntington Beach",
          "slug": "huntington-beach",
          "utility": "SCE",
          "generation": "SCE (returned from OCPA in 2024)",
          "permit": "City of Huntington Beach"
        },
        {
          "name": "Santa Ana",
          "slug": "santa-ana",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Santa Ana"
        },
        {
          "name": "Westminster",
          "slug": "westminster",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Westminster"
        },
        {
          "name": "Yorba Linda",
          "slug": "yorba-linda",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Yorba Linda"
        },
        {
          "name": "Costa Mesa, Garden Grove, Newport Beach, Orange, Tustin, Lake Forest",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "Each city's own building department"
        },
        {
          "name": "Mission Viejo, Aliso Viejo, Laguna Hills, Laguna Niguel",
          "utility": "Split: SCE or SDG&E by address",
          "generation": "The delivery utility",
          "permit": "Each city's own building department"
        },
        {
          "name": "San Clemente",
          "slug": "san-clemente",
          "utility": "SDG&E",
          "generation": "SDG&E",
          "permit": "City of San Clemente"
        },
        {
          "name": "San Juan Capistrano, Dana Point",
          "utility": "SDG&E",
          "generation": "SDG&E",
          "permit": "Each city's own building department"
        },
        {
          "name": "Unincorporated areas (Ladera Ranch, Rossmoor and others)",
          "utility": "SDG&E in Ladera Ranch; SCE in Rossmoor",
          "generation": "The delivery utility",
          "permit": "County of Orange (OC Development Services)"
        }
      ],
      "note": "Utility and generation rows come from the Energy Commission's map, queried September 23, 2026, and OCPA's own member list, which is newer than the map's community choice layer. The map can still shade Huntington Beach as OCPA; OCPA's page is the current word. For any split city, the bill is the only reliable answer for one address.",
      "hub": {
        "href": "/solar-savings/orange-county",
        "label": "Orange County electric rates and bills by provider"
      }
    },
    "sources": [
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "Orange County Power Authority: FAQ (current member cities)",
        "url": "https://www.ocpower.org/faq/"
      },
      {
        "label": "Orange County Power Authority: Huntington Beach customers return to SCE in 2024",
        "url": "https://www.ocpower.org/huntington-beach-2/"
      },
      {
        "label": "Orange County Power Authority: solar and net energy metering",
        "url": "https://www.ocpower.org/energy-programs/solar-net-energy-metering/"
      },
      {
        "label": "SDG&E: About us (service territory)",
        "url": "https://www.sdge.com/more-information/our-company/about-us"
      },
      {
        "label": "SDG&E: Solar Billing Plan",
        "url": "https://www.sdge.com/solar/solar-billing-plan"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "OC Development Services: expedited solar PV permits and SolarAPP+ (unincorporated Orange County)",
        "url": "https://pwds.oc.gov/service-areas/oc-development-services/building-safety/building-grading-information/solar-pv"
      },
      {
        "label": "OC Public Works: SolarAPP+ launch notice (August 23, 2024)",
        "url": "https://pw.oc.gov/news/new-solar-app-platform-offers-fast-automated-process-obtaining-permit-solar-equipment"
      },
      {
        "label": "OC Development Services: permit FAQs (unincorporated private property)",
        "url": "https://pwds.oc.gov/service-areas/oc-development-services/permitting-services/faqs"
      },
      {
        "label": "California Government Code § 65850.52 (automated solar permitting, SB 379)",
        "url": "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52"
      }
    ],
    "projectLinks": [
      {
        "href": "/best-solar-companies-california",
        "label": "How to judge a solar company anywhere in California"
      },
      {
        "href": "/blog/why-is-my-sce-bill-so-high",
        "label": "Reading an SCE bill before you compare quotes"
      },
      {
        "href": "/solar-installers/how-to-verify-a-solar-contractor-california",
        "label": "Checking a contractor's license and salesperson registration"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Orange County?",
        "This site does not rank them, and no public source does in a way that fits your roof. Narrow the field to companies that hold a CSLB license covering solar, confirm in writing that they serve your address, and get at least three written bids for the same system built on your own bill. The table above tells you which utility rules each bid should use."
      ],
      [
        "Is Huntington Beach still part of Orange County Power Authority?",
        "No. OCPA says the Huntington Beach City Council voted to leave in May 2023, solar customers there were switched back to SCE in April 2024 and all other customers in June 2024. SCE now supplies both generation and delivery in Huntington Beach."
      ],
      [
        "What does OCPA pay solar customers?",
        "OCPA says it reconciles generation charges monthly, runs its annual true-up in April, pays 10% more than SCE for excess generation, and currently treats Net Billing Tariff customers' generation as if it were under NEM 2.0. SCE still handles delivery charges and credits on the same bill."
      ],
      [
        "Who issues solar permits in unincorporated Orange County?",
        "The County of Orange, through OC Development Services. It accepts SolarAPP+ submittals from registered licensed contractors, launched in August 2024, and also offers an expedited plan check on its standard plans, with applications filed online in myOCeServices."
      ],
      [
        "Does every Orange County city have instant solar permits?",
        "Not necessarily instant, but state law requires an online, automated permit option such as SolarAPP+ in cities of more than 50,000 people since September 30, 2023 and in most smaller cities since September 30, 2024, for systems up to 38.4 kW that the platform can process. Designs it cannot process still go through regular plan check."
      ]
    ],
    "answer": "Orange County solar companies work across three delivery utilities: SCE for most of the county, SDG&E in the south and Anaheim Public Utilities in Anaheim. In Buena Park, Fullerton and Irvine, Orange County Power Authority supplies the generation; Huntington Beach left OCPA in 2024. Each city issues its own permit, and the County of Orange permits unincorporated areas. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Delivery utilities",
        "value": "SCE, SDG&E, Anaheim",
        "note": "SCE serves most of the county's area",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "OCPA member cities",
        "value": "Buena Park, Fullerton, Irvine",
        "note": "Fountain Valley beginning service soon",
        "source": {
          "publisher": "Orange County Power Authority",
          "date": "2026-09-23",
          "url": "https://www.ocpower.org/faq/"
        }
      },
      {
        "label": "Automated permits required",
        "value": "Since Sept. 30, 2023",
        "note": "Cities over 50,000; most smaller cities since 2024",
        "source": {
          "publisher": "California Legislature, Gov. Code § 65850.52",
          "date": "2026-09-23",
          "url": "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52"
        }
      }
    ],
    "sections": [
      {
        "heading": "Three solar credit rulebooks in one county",
        "paragraphs": [
          "On an SCE bill, a new system goes on SCE's Solar Billing Plan: exports earn Energy Export Credits that vary by hour and season, SCE locks the values for nine years from the year you start, and customers who enroll before 2028 get a bonus credit of about $0.04 per kWh, or about $0.09 if income-qualified. The settlement bill comes once a year, in the month the system started service.",
          "In Buena Park, Fullerton and Irvine the generation half of that bill belongs to Orange County Power Authority. OCPA says SCE handles the delivery charges and credits while OCPA handles generation, reconciles generation charges monthly and holds its annual true-up in April, before summer, so that credits built up in sunny months can be used at the retail rate. It pays 10% more than SCE for surplus left at true-up.",
          "In the SDG&E cities of the south county, the Solar Billing Plan runs on SDG&E's EV-TOU-5 time-of-use plan, with on-peak hours from 4 p.m. to 9 p.m. Export credits are priced by the hour, surplus credits roll forward month to month, and SDG&E says they cannot be applied to non-bypassable charges or the Base Services Charge. Anaheim Public Utilities, as a city utility, sets its own solar terms outside the CPUC's tariff."
        ]
      },
      {
        "heading": "How permits differ across the county",
        "paragraphs": [
          "Government Code section 65850.52, the law passed as SB 379, told every California city and county to offer an online, automated permitting platform such as SolarAPP+ for residential solar up to 38.4 kW, and for batteries paired with it. Cities of more than 50,000 people had to comply by September 30, 2023, and smaller cities by September 30, 2024, unless a city has fewer than 5,000 people or sits in a county of fewer than 150,000. Orange County is far larger than that, so the county exemption does not apply to its cities. The law also lets a jurisdiction send a design the platform cannot process through its regular review.",
          "The County of Orange launched SolarAPP+ for unincorporated homes on August 23, 2024, for roof-mounted systems on existing homes, submitted by registered licensed contractors. It also keeps the expedited path that AB 2188 required every city and county to adopt by September 30, 2015: an eligibility checklist, standard plans for central-inverter and microinverter systems, structural criteria and an online application. The city pages linked in the table above describe each city's own steps where this site has checked them, such as Huntington Beach's SolarAPP+ record in its HB ACA portal."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "san-mateo-county": {
    "name": "San Mateo County",
    "county": "San Mateo County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "seo": {
      "description": "Solar companies in San Mateo County: PG&E and WestLight Energy billing, which office permits your address, and 2024 permit counts by city."
    },
    "bill": "Almost every home in San Mateo County has the same two names on its bill: PG&E delivers the power and sends the statement, and WestLight Energy, the county's community choice provider that used to be called Peninsula Clean Energy, supplies the generation. WestLight tells readers that 97% of their neighbors in San Mateo County and Los Banos get electricity from it. A proposal should model WestLight's generation side and PG&E's delivery side separately, from your own account.",
    "local": "The permit office depends on the address, not the county. Each of the county's cities and towns issues its own solar permits, and homes in unincorporated areas are permitted by the County of San Mateo, which issues residential solar and battery permits automatically through Symbium. The cities' own reports to the California Energy Commission show how differently they work: some issued every 2024 solar permit online, others almost none.",
    "example": "Ask each bidder three questions before comparing prices: which office will issue your permit and through which system, whether the design includes a battery and how many kWh of it you can actually use, and how the estimate splits WestLight generation credits from PG&E delivery charges. A bid that cannot answer the first question has not looked at your address yet.",
    "checks": [
      [
        "Permit office",
        "Name the city, town or County of San Mateo office that will permit your address, and the online system it uses."
      ],
      [
        "City conditions",
        "Where the city requires it, confirm a local business license or a spot on its SolarAPP+ list (San Mateo requires both)."
      ],
      [
        "WestLight and PG&E",
        "Show WestLight generation and PG&E delivery separately, using your enrollment from the bill."
      ],
      [
        "Battery scope",
        "State usable battery kWh and backed-up circuits; about half of the County's 2025 solar permits included storage."
      ]
    ],
    "region": {
      "heading": "Permit offices and providers across San Mateo County",
      "intro": [
        "The utility map is simple here. On the California Energy Commission's layers, PG&E is the delivery utility across the county's inhabited area and WestLight Energy, still labeled Peninsula Clean Energy on the Commission's map, is the community choice provider over the same area. WestLight describes itself as the community electricity provider for San Mateo County and Los Banos.",
        "Permitting is where the county divides. Under Government Code section 65850.52, cities with more than 50,000 people had to offer an online, automated solar permit such as SolarAPP+ by September 30, 2023, and smaller cities by September 30, 2024. The last column shows what each jurisdiction reported to the Energy Commission for 2024: residential solar permits issued, the share that included battery storage, and the share issued online."
      ],
      "places": [
        {
          "name": "San Mateo",
          "slug": "san-mateo",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "City of San Mateo: 333 permits in 2024, 47% with storage, 31% online"
        },
        {
          "name": "Redwood City",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "City of Redwood City: 301 permits in 2024, 49% with storage, 87% online"
        },
        {
          "name": "Belmont",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "City of Belmont: 175 permits in 2024, 76% with storage, all online"
        },
        {
          "name": "Pacifica",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "City of Pacifica: 172 permits in 2024, 44% with storage, all online"
        },
        {
          "name": "San Carlos",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "City of San Carlos: 156 permits in 2024, 83% with storage, 40% online"
        },
        {
          "name": "South San Francisco",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "City of South San Francisco: 147 permits in 2024, 71% with storage, all online"
        },
        {
          "name": "Foster City",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "City of Foster City: 120 permits in 2024, 44% with storage, none online"
        },
        {
          "name": "San Bruno",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "City of San Bruno: 87 permits in 2024, 41% with storage, all online"
        },
        {
          "name": "Half Moon Bay",
          "slug": "half-moon-bay",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "City of Half Moon Bay: 34 permits in 2024, 82% with storage, 82% online"
        },
        {
          "name": "Atherton",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "Town of Atherton: 28 permits in 2024, 61% with storage, all online"
        },
        {
          "name": "Burlingame",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "City of Burlingame: 26 permits in 2024, 65% with storage, 23% online"
        },
        {
          "name": "Daly City, Menlo Park, Millbrae, Hillsborough, East Palo Alto and other cities",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "Each city's own building department; no 2024 report in the Commission's file"
        },
        {
          "name": "Unincorporated areas (El Granada, Montara, North Fair Oaks and others)",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "County of San Mateo, instant permits through Symbium: 975 permits in 2025, 53% with storage, 61% online"
        }
      ],
      "note": "Permit counts are each jurisdiction's own annual report under SB 379, from the Energy Commission's data file dated May 2026; a city that has not filed does not appear. A higher count reflects local demand and how many homes a city has, not how fast or friendly its process is.",
      "hub": {
        "href": "/solar-savings/bay-area",
        "label": "Bay Area electric rates and community choice providers"
      }
    },
    "sources": [
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permit Reporting Program (SB 379)",
        "url": "https://www.energy.ca.gov/programs-and-topics/programs/residential-solar-permit-reporting-program-sb-379/residential-solar-1"
      },
      {
        "label": "WestLight Energy (formerly Peninsula Clean Energy): service area and name change",
        "url": "https://www.westlightenergy.org/"
      },
      {
        "label": "WestLight Energy: net energy metering for solar customers",
        "url": "https://www.westlightenergy.org/residential/rates-billing/solar-rates/net-energy-metering/"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      },
      {
        "label": "County of San Mateo: instant residential solar and energy storage permits (Symbium)",
        "url": "https://www.smcgov.org/planning/instant-residential-solar-and-energy-storage-system-permits"
      },
      {
        "label": "City of San Mateo: SolarApp+ for solar installers",
        "url": "https://www.cityofsanmateo.org/4770/SolarApp-For-Solar-Installers"
      },
      {
        "label": "City of Daly City: SolarApp+",
        "url": "https://www.dalycity.org/1157/SolarApp"
      },
      {
        "label": "California Government Code § 65850.52 (automated solar permitting, SB 379)",
        "url": "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-savings/san-mateo",
        "label": "San Mateo electric bills with WestLight and PG&E"
      },
      {
        "href": "/blog/pge-time-of-use-rates-2026",
        "label": "PG&E time-of-use hours a solar estimate should use"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a battery is worth adding in California"
      }
    ],
    "faq": [
      [
        "Is solar worth it in San Mateo County?",
        "It depends on your usage, your roof and how much of the output you use at home. PG&E says Solar Billing Plan customers save the most when they use the energy they produce on-site, because export credits vary by hour and season. That is one reason about half of the County of San Mateo's 2025 solar permits included battery storage. Get estimates built on your own 12 months of bills."
      ],
      [
        "Who supplies electricity in San Mateo County?",
        "PG&E delivers it and sends the bill. WestLight Energy, formerly Peninsula Clean Energy, supplies the generation for most homes by default. It serves San Mateo County and Los Banos, and its site says 97% of neighbors there get their electricity from WestLight."
      ],
      [
        "Who issues solar permits in unincorporated San Mateo County?",
        "The County of San Mateo. It issues residential solar and battery permits automatically through Symbium, which checks the design against state and local rules and verifies the contractor's and business licenses. Symbium only recognizes unincorporated addresses; a city address goes to that city."
      ],
      [
        "Do Daly City solar permits go through SolarAPP+?",
        "Yes, for residential systems up to 38.4 kW and paired batteries. Daly City says contractors must be registered with SolarAPP+, pay its processing fee separately from the City's permit fee, upload the approval to the City's portal and hold a Daly City business license, and that projects with multiple batteries spaced less than 3 feet apart go to regular plan review."
      ],
      [
        "What does WestLight pay for extra solar?",
        "On its net energy metering schedule, WestLight values net production at the customer's generation rate plus a $0.01 per kWh premium and settles generation charges monthly on the PG&E bill. After the April billing cycle it sends a check to customers with credit balances over $500, capped at $10,000 a year since the 2024-2025 NEM year."
      ]
    ],
    "answer": "Solar companies working in San Mateo County design around PG&E, which delivers the power, and WestLight Energy, formerly Peninsula Clean Energy, which supplies it. The permit office depends on the address: each city issues its own permits, and the County of San Mateo permits unincorporated homes instantly through Symbium. The cities' 2024 reports to the Energy Commission show online permitting ranging from none to all. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Providers",
        "value": "PG&E and WestLight Energy",
        "note": "WestLight was Peninsula Clean Energy",
        "source": {
          "publisher": "WestLight Energy",
          "date": "2026-09-23",
          "url": "https://www.westlightenergy.org/"
        }
      },
      {
        "label": "Unincorporated permits",
        "value": "County of San Mateo, via Symbium",
        "note": "Issued automatically without manual review",
        "source": {
          "publisher": "County of San Mateo",
          "date": "2026-09-23",
          "url": "https://www.smcgov.org/planning/instant-residential-solar-and-energy-storage-system-permits"
        }
      },
      {
        "label": "County permits with storage",
        "value": "53% in 2025",
        "note": "513 of 975 residential solar permits",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      }
    ],
    "sections": [
      {
        "heading": "How WestLight and PG&E split a solar bill",
        "paragraphs": [
          "Peninsula Clean Energy renamed itself WestLight Energy and says its service and rates did not change. WestLight's generation charges and credits appear on the monthly PG&E statement next to PG&E's delivery charges. On its net energy metering schedule, WestLight values a month of net production at the customer's generation rate plus a production premium of $0.01 per kWh, settles its generation charges monthly, and after the April billing cycle mails a check to customers whose credit balance is over $500. Since the 2024-2025 NEM year the annual cash-out is capped at $10,000, and anything above the cap is forfeited.",
          "PG&E handles the delivery side under its own rules. A new system goes on PG&E's Solar Billing Plan, where export credits vary by time of day, day of the week and season, customers who start before 2028 get Energy Export Bonus Credits whose value is set at permission to operate, and a True-Up statement closes each 12-month cycle. PG&E says customers save the most when they use the energy they produce on-site. A proposal that shows one blended credit for all exports is hiding both of these schedules."
        ]
      },
      {
        "heading": "What the 2024 permit reports say about each city",
        "paragraphs": [
          "Every jurisdiction that adopted an automated permit platform must report its residential solar permits to the California Energy Commission each year. The 2024 numbers for San Mateo County's cities vary widely. Belmont, Pacifica, South San Francisco, San Bruno and Atherton reported every solar permit as issued online, while Foster City reported none online, Burlingame 23% and San Mateo 31%. Storage varied too: 83% of San Carlos's 2024 permits and 76% of Belmont's included a battery, compared with 41% in San Bruno.",
          "For a homeowner, the online share is a practical signal. Where most permits are issued online, a qualifying design can be permitted the same day, and the schedule depends more on the installer than the city. Where most go through plan check, ask the bidder how long its last few permits in your city took. The City of San Mateo adds its own conditions to SolarAPP+: the contractor needs an active San Mateo business license and must ask to be put on the City's eligibility list."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "bay-area": {
    "name": "Bay Area",
    "county": "San Francisco Bay Area",
    "utility": "other",
    "sourceCheckedDate": "2026-09-23",
    "seo": {
      "title": "Bay Area Solar Companies: How to Compare Quotes (2026)",
      "description": "Bay Area solar companies: which CCA or city utility prices your solar credits, which office permits your address, and 2024 permit counts by city.",
      "h1": "Solar Companies in the Bay Area: How to Compare Solar Panel Quotes"
    },
    "bill": "Most Bay Area homes are on PG&E's wires, but PG&E is rarely the only name on the bill. In most cities a community choice provider such as Ava Community Energy, MCE, CleanPowerSF, San José Clean Energy, Silicon Valley Clean Energy, WestLight Energy or Sonoma Clean Power supplies the generation and sets its own solar credit rules. Three cities, Palo Alto, Santa Clara and Alameda, run their own electric utilities instead. Start every quote from the provider names on your own statement.",
    "local": "There is no Bay Area permit. Each city issues its own solar permit, and each county permits its unincorporated areas. The cities' own 2024 reports to the California Energy Commission show how far apart they are: San Jose issued every one of its 3,698 residential solar permits online, San Francisco about 17% of 887, and Hayward none of 680. Ask each bidder how your city will permit your design and how long its last few permits there took.",
    "example": "Two bids for the same Oakland roof can model different bills: one may credit exports at PG&E's rates, the other at Ava's. Ask every Bay Area bidder to state the generation provider, the delivery utility, the permit office and the battery's usable kWh at the top of the proposal, then compare the price and the remaining bill only after those four match.",
    "checks": [
      [
        "Generation provider",
        "Name the CCA or city utility on your bill and model its export credits, not PG&E's by default."
      ],
      [
        "City utility",
        "In Palo Alto, Santa Clara or Alameda, use that city utility's solar rules and interconnection steps, not PG&E's."
      ],
      [
        "Permit route",
        "Say which city or county office permits your address and whether the design qualifies for its online permit."
      ],
      [
        "Battery",
        "State usable kWh and backed-up circuits; in San Jose 79% of 2024 solar permits included storage."
      ]
    ],
    "region": {
      "heading": "Bay Area providers and permit offices by city",
      "intro": [
        "The California Energy Commission's utility map shows PG&E as the delivery utility across most of the region, with a patchwork of community choice aggregators supplying generation on top of it, and three cities outside PG&E altogether: Palo Alto (City of Palo Alto Utilities), Santa Clara (Silicon Valley Power) and Alameda (the City of Alameda's own utility, listed on the map as Alameda Power & Telecom). Each community choice provider names its own member communities: Ava lists 16 cities plus unincorporated Alameda and San Joaquin counties, Silicon Valley Clean Energy 12 cities plus unincorporated Santa Clara County, and Sonoma Clean Power Sonoma and Mendocino counties.",
        "The permit column shows each city's own report to the Energy Commission under SB 379: residential solar permits issued, the share with battery storage, and the share issued online, for 2024 unless another year is named."
      ],
      "places": [
        {
          "name": "San Jose",
          "slug": "san-jose",
          "utility": "PG&E",
          "generation": "San José Clean Energy",
          "permit": "City of San José: 3,698 permits in 2024, 79% with storage, all online"
        },
        {
          "name": "San Francisco",
          "slug": "san-francisco",
          "utility": "PG&E",
          "generation": "CleanPowerSF",
          "permit": "San Francisco DBI: 887 permits in 2024, 26% with storage, 17% online"
        },
        {
          "name": "Oakland",
          "slug": "oakland",
          "utility": "PG&E",
          "generation": "Ava Community Energy",
          "permit": "City of Oakland: 1,548 permits in 2024 (6% online); 2,328 in 2025 (72% online)"
        },
        {
          "name": "Fremont",
          "slug": "fremont",
          "utility": "PG&E",
          "generation": "Ava Community Energy",
          "permit": "City of Fremont: 1,756 permits in 2024, 74% with storage, 20% online"
        },
        {
          "name": "Hayward",
          "slug": "hayward",
          "utility": "PG&E",
          "generation": "Ava Community Energy",
          "permit": "City of Hayward: 680 permits in 2024, 72% with storage, none online"
        },
        {
          "name": "Berkeley",
          "slug": "berkeley",
          "utility": "PG&E",
          "generation": "Ava Community Energy",
          "permit": "City of Berkeley: 929 permits in 2023, 1% online"
        },
        {
          "name": "Pleasanton",
          "slug": "pleasanton",
          "utility": "PG&E",
          "generation": "Ava Community Energy",
          "permit": "City of Pleasanton: 73 permits in 2024, 22% online"
        },
        {
          "name": "Livermore",
          "slug": "livermore",
          "utility": "PG&E",
          "generation": "Ava Community Energy",
          "permit": "City of Livermore (no SB 379 report in the Commission's file)"
        },
        {
          "name": "Richmond",
          "slug": "richmond",
          "utility": "PG&E",
          "generation": "MCE",
          "permit": "City of Richmond: 513 permits in 2024, 68% with storage, 30% online"
        },
        {
          "name": "Concord",
          "slug": "concord",
          "utility": "PG&E",
          "generation": "MCE",
          "permit": "City of Concord: 127 permits in 2023, 26% online"
        },
        {
          "name": "Walnut Creek",
          "slug": "walnut-creek",
          "utility": "PG&E",
          "generation": "MCE",
          "permit": "City of Walnut Creek (no SB 379 report in the Commission's file)"
        },
        {
          "name": "San Ramon",
          "slug": "san-ramon",
          "utility": "PG&E",
          "generation": "MCE",
          "permit": "City of San Ramon: 694 permits in 2024, all online"
        },
        {
          "name": "Sunnyvale",
          "slug": "sunnyvale",
          "utility": "PG&E",
          "generation": "Silicon Valley Clean Energy",
          "permit": "City of Sunnyvale: 929 permits in 2023, all online"
        },
        {
          "name": "Mountain View",
          "slug": "mountain-view",
          "utility": "PG&E",
          "generation": "Silicon Valley Clean Energy",
          "permit": "City of Mountain View: 337 permits in 2025, 78% with storage, 49% online"
        },
        {
          "name": "Cupertino",
          "slug": "cupertino",
          "utility": "PG&E",
          "generation": "Silicon Valley Clean Energy",
          "permit": "City of Cupertino: 504 permits in 2024, 57% with storage, 39% online"
        },
        {
          "name": "Santa Clara",
          "slug": "santa-clara",
          "utility": "Silicon Valley Power (city utility)",
          "generation": "Silicon Valley Power",
          "permit": "City of Santa Clara: 97 permits in 2024, 30% online"
        },
        {
          "name": "Palo Alto",
          "slug": "palo-alto",
          "utility": "City of Palo Alto Utilities",
          "generation": "City of Palo Alto Utilities",
          "permit": "City of Palo Alto: 155 permits in 2024, 36% online"
        },
        {
          "name": "Alameda",
          "utility": "City of Alameda utility (Alameda Power & Telecom on the CEC map)",
          "generation": "The city utility",
          "permit": "City of Alameda: 86 permits in 2023, 14% online"
        },
        {
          "name": "San Mateo County cities",
          "utility": "PG&E",
          "generation": "WestLight Energy",
          "permit": "Each city, or the County through Symbium (see the San Mateo County page)"
        },
        {
          "name": "Santa Rosa",
          "slug": "santa-rosa",
          "utility": "PG&E",
          "generation": "Sonoma Clean Power",
          "permit": "City of Santa Rosa: 1,126 permits in 2025, 37% with storage, 72% online"
        },
        {
          "name": "Petaluma",
          "slug": "petaluma",
          "utility": "PG&E",
          "generation": "Sonoma Clean Power",
          "permit": "City of Petaluma: 334 permits in 2024, 84% with storage, all online"
        },
        {
          "name": "Marin County: San Rafael, Novato, Mill Valley and others",
          "utility": "PG&E",
          "generation": "MCE",
          "permit": "Each town or city, or the County of Marin; San Rafael: 430 permits in 2023, all online"
        },
        {
          "name": "Santa Cruz",
          "slug": "santa-cruz",
          "utility": "PG&E",
          "generation": "Central Coast Community Energy",
          "permit": "City of Santa Cruz: 192 permits in 2024, 33% with storage, 18% online"
        },
        {
          "name": "Scotts Valley",
          "slug": "scotts-valley",
          "utility": "PG&E",
          "generation": "Central Coast Community Energy",
          "permit": "City of Scotts Valley"
        }
      ],
      "note": "Utility and CCA rows are from the Energy Commission's map, queried September 23, 2026, and each provider's own list of communities where it publishes one. Permit counts are the jurisdictions' own SB 379 reports in the Commission's data file dated May 2026. A high count reflects demand and city size, not a faster process.",
      "hub": {
        "href": "/solar-savings/bay-area",
        "label": "Bay Area electric rates and community choice providers"
      }
    },
    "sources": [
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "Ava Community Energy: communities we serve",
        "url": "https://avaenergy.org/community/who-we-serve/"
      },
      {
        "label": "Silicon Valley Clean Energy: communities served",
        "url": "https://www.svcleanenergy.org/"
      },
      {
        "label": "Silicon Valley Clean Energy: rooftop solar and the Solar Billing Plan",
        "url": "https://www.svcleanenergy.org/solar/"
      },
      {
        "label": "San José Clean Energy: solar billing and net energy metering",
        "url": "https://sanjosecleanenergy.org/solar-billing-nem/"
      },
      {
        "label": "CleanPowerSF: understanding my bill",
        "url": "https://cleanpowersf.org/understanding-my-bill"
      },
      {
        "label": "WestLight Energy (formerly Peninsula Clean Energy)",
        "url": "https://www.westlightenergy.org/"
      },
      {
        "label": "Sonoma Clean Power: who we are",
        "url": "https://sonomacleanpower.org/who-we-are"
      },
      {
        "label": "Central Coast Community Energy: Implementation Plan Addendum No. 5 (May 2023, PDF)",
        "url": "https://3cenergy.org/wp-content/uploads/2023/05/Implementation-Plan-Addendum-No.-5.pdf"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      },
      {
        "label": "California Government Code § 65850.52 (automated solar permitting, SB 379)",
        "url": "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52"
      },
      {
        "label": "City of San Rafael: SolarAPP+ permits (OpenGov)",
        "url": "https://www.cityofsanrafael.org/solarapp-permits/"
      },
      {
        "label": "City of San Rafael: solar, battery and EV charger permit requirements",
        "url": "https://www.cityofsanrafael.org/renewable-energy/"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/san-mateo-county",
        "label": "San Mateo County permit offices and 2024 counts"
      },
      {
        "href": "/blog/pge-time-of-use-rates-2026",
        "label": "PG&E time-of-use hours a solar estimate should use"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a battery is worth adding under net billing"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in the Bay Area?",
        "No public source ranks them in a way that fits one roof, and this site does not either. Narrow the list to companies with a CSLB license that covers solar, written confirmation that they serve your address, and experience with your city's permit office and your generation provider. Then compare at least three written bids for the same system built on your own bill."
      ],
      [
        "Does it matter which community choice provider is on my bill?",
        "Yes. PG&E delivers the power in most Bay Area cities, but the generation half of a solar bill, and the credit for exports, follows the provider on your statement. San José Clean Energy, for example, says it credits the generation part of the bill when your panels produce more than you use, while PG&E credits the delivery part."
      ],
      [
        "Which Bay Area cities are not served by PG&E?",
        "On the Energy Commission's map, Palo Alto is served by City of Palo Alto Utilities, Santa Clara by Silicon Valley Power and Alameda by the City of Alameda's own utility, listed on the map as Alameda Power & Telecom. Each is a city-owned utility that sets its own solar rules outside the CPUC's net billing tariff."
      ],
      [
        "How long does a Bay Area solar permit take?",
        "It depends on the city. San Jose reported all 3,698 of its 2024 residential solar permits as issued online, which for a qualifying design can mean a same-day permit, while San Francisco reported 17% and Hayward none. Ask the bidder how long its recent permits in your city took."
      ],
      [
        "Why do so many Bay Area solar permits include batteries?",
        "The permit data shows the trend: 79% of San Jose's 2024 residential solar permits and 74% of Fremont's included storage. PG&E says Solar Billing Plan customers save the most when they use the energy they produce on-site, because export credits vary by hour and season, and a battery moves daytime output into the evening."
      ],
      [
        "Who are the solar providers in Marin County?",
        "PG&E delivers the power and MCE supplies the generation across Marin's towns on the Energy Commission's map. For the installer, look for a CSLB license covering solar and experience with your town's permit office; San Rafael, for example, takes SolarAPP+ approvals through its OpenGov portal. Get at least three written bids for the same system."
      ]
    ],
    "answer": "Solar companies in the Bay Area work across one delivery utility and many generation providers: PG&E's wires reach most homes, while Ava, MCE, CleanPowerSF, San José Clean Energy, Silicon Valley Clean Energy, WestLight and Sonoma Clean Power set the solar credits in their cities, and Palo Alto, Santa Clara and Alameda run their own utilities. Each city issues its own permit, some fully online and some not. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "City-owned utilities",
        "value": "Palo Alto, Santa Clara, Alameda",
        "note": "Outside PG&E and the CPUC net billing tariff",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "San Jose permits online",
        "value": "All 3,698 in 2024",
        "note": "San Francisco: 17% of 887",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Ava member cities",
        "value": "16, plus two counties' unincorporated areas",
        "note": "Alameda and San Joaquin counties",
        "source": {
          "publisher": "Ava Community Energy",
          "date": "2026-09-23",
          "url": "https://avaenergy.org/community/who-we-serve/"
        }
      }
    ],
    "sections": [
      {
        "heading": "Why the generation provider changes a Bay Area quote",
        "paragraphs": [
          "On a PG&E account with a community choice provider, the bill has two halves. CleanPowerSF describes it plainly: it buys the electricity, PG&E delivers it, and you see a separate charge from each. San José Clean Energy says the same split applies to solar: when your panels produce more than you use, it credits the generation part of the bill and PG&E credits the delivery part. So a proposal that credits every exported kWh at PG&E's bundled value is modeling a bill most Bay Area homes do not have.",
          "The providers also draw their dates differently. Silicon Valley Clean Energy says customers who applied for solar after April 14, 2023 are on the Solar Billing Plan, while those who applied between June 29, 2016 and that date stay on NEM 2.0 for 20 years from installation. PG&E's own Solar Billing Plan values exports by time of day, day of the week and season, gives Energy Export Bonus Credits to customers who start before 2028, and closes each 12-month cycle with a True-Up statement."
        ]
      },
      {
        "heading": "What the permit reports show across the region",
        "paragraphs": [
          "State law, Government Code section 65850.52, required cities of more than 50,000 people to offer an online, automated solar permit such as SolarAPP+ by September 30, 2023, and smaller cities by September 30, 2024. Each city that did must report its residential solar permits to the Energy Commission every year, and the 2024 reports show the law landed unevenly. San Jose, Petaluma and Danville issued nearly every permit online; Fremont issued 20% online, San Francisco 17%, Oakland 6% and Hayward none. Oakland's 2025 report shows the share jumping to 72%.",
          "Storage is now the norm in much of the region. In 2024, 79% of San Jose's residential solar permits, 74% of Fremont's and 72% of Hayward's included a battery, against 26% in San Francisco. For a homeowner, that means a bid without a battery is now the unusual one in many South Bay and East Bay cities; ask each bidder to show the bill with and without it."
        ]
      },
      {
        "heading": "Marin County: MCE and town-by-town permits",
        "paragraphs": [
          "Every Marin town and census place checked on the Energy Commission's map, from Novato and San Rafael to Mill Valley, Sausalito, Fairfax and Point Reyes Station, sits in PG&E's delivery territory with MCE as the community choice provider. MCE's own site could not be reached for this page, so check its current solar terms there before relying on any proposal's generation credits.",
          "Permits are local. San Rafael sends eligible rooftop solar and battery projects through SolarAPP+ first and then into its OpenGov portal with the SolarAPP+ ID, approved documents and inspection checklist; projects that do not qualify go through its standard permit process, where the plans need a site plan with panel locations and clearances, electrical details and manufacturer specs, and a battery or service panel upgrade done at the same time can go on the same permit. San Rafael reported all 430 of its 2023 residential solar permits as issued online, while Corte Madera reported none of its 9 in 2024 and San Anselmo one of 59."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "simi-valley": {
    "name": "Simi Valley",
    "county": "Ventura County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Simi Valley homes get delivery from Southern California Edison and, by default, generation from Clean Power Alliance, which has served the city since 2019 with Lean Power as its default plan. On a new solar system, CPA runs the Solar Billing Plan on the generation half of the bill and SCE on the delivery half, so a proposal should model both from your own statement.",
    "local": "Since January 1, 2023, Simi Valley has required licensed contractors to run roof-mounted residential solar through SolarAPP+ for plan review before the City issues a permit. The contractor then applies in the City's self-service portal with the SolarAPP+ approval and a signed Construction Permit Declaration, pays the fees online, and the permit is issued automatically by email. Ground-mounted systems and additions to an existing array start with a call to Building and Safety instead.",
    "example": "Simi Valley's SolarAPP+ permits come with one inspection, so the work has to be finished and match the approved scope before the inspector arrives. Ask each bidder whether its design fits SolarAPP+ (the City says up to 38 kW, with or without a panel upgrade), who books the inspection, and whether a battery is on the same permit. Then compare the price and the remaining CPA and SCE bill.",
    "checks": [
      [
        "SolarAPP+ route",
        "Confirm the roof-mounted design goes through SolarAPP+, and who pays its $25 per-project fee and the City's permit fee."
      ],
      [
        "One inspection",
        "Say when the single SolarAPP+ inspection will be booked and that all work, including any battery and panel upgrade, will be done by then."
      ],
      [
        "Ground mount or add-on",
        "For a ground mount or panels added to an existing system, show that Building and Safety was called first."
      ],
      [
        "CPA and SCE bill",
        "Model CPA's generation credits and April true-up alongside SCE's delivery credits, from your own bill."
      ]
    ],
    "sources": [
      {
        "label": "City of Simi Valley Building and Safety: photovoltaic information (SolarAPP+ required since January 1, 2023)",
        "url": "https://www.simivalley.org/departments/environmental-services/building-safety-division/photovoltaic-information"
      },
      {
        "label": "Clean Power Alliance: partner communities (Simi Valley default plan and start year)",
        "url": "https://cleanpoweralliance.org/"
      },
      {
        "label": "Clean Power Alliance: solar, net energy metering and Solar Billing Plan",
        "url": "https://cleanpoweralliance.org/solar/"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "Whether a battery earns its cost under net billing"
      },
      {
        "href": "/blog/sce-settlement-bill",
        "label": "How SCE's annual solar settlement works"
      },
      {
        "href": "/blog/hoa-solar-rights-california",
        "label": "What an HOA can and cannot require for solar"
      }
    ],
    "faq": [
      [
        "How do I get a solar permit in Simi Valley?",
        "A licensed contractor submits the roof-mounted design in SolarAPP+, pays its $25 administrative fee and downloads the approval. It then applies for the Building & Safety SolarAPP+ permit in the City's self-service portal, attaches the approval and a signed Construction Permit Declaration, and pays online; the permit is issued automatically by email."
      ],
      [
        "Can a homeowner pull a solar permit in Simi Valley?",
        "Owner-builders are handled separately: the City asks homeowners seeking owner-builder status to contact Building and Safety at (805) 583-6723 rather than use the SolarAPP+ route."
      ],
      [
        "Do batteries and panel upgrades need separate permits in Simi Valley?",
        "No. The City issues one combined permit covering the photovoltaic installation along with any associated storage and panel upgrades or change-outs. In 2024, 530 of the City's 601 residential solar permits included storage, according to its report to the California Energy Commission."
      ],
      [
        "Who supplies electricity in Simi Valley?",
        "SCE delivers it and sends the bill. Clean Power Alliance supplies the generation by default, on its Lean Power plan, and has served the city since 2019. CPA offers three energy options, and the one on your bill is the one a proposal should use."
      ],
      [
        "What does Clean Power Alliance pay for solar exports?",
        "For systems approved after August 31, 2023, CPA's Solar Billing Plan credits exports on the generation side at hourly values from the CPUC's Avoided Cost Calculator, trues up every solar customer in April, and pays net surplus at rates 10% higher than SCE's. Credits over $100 at true-up are paid by check."
      ]
    ],
    "answer": "Solar companies in Simi Valley must send roof-mounted residential jobs through SolarAPP+ before the City issues a permit, a rule in force since January 1, 2023; the permit is then issued automatically from the City's portal, and there is one inspection. SCE delivers the power and Clean Power Alliance supplies it by default, with its own April true-up. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Permit route",
        "value": "SolarAPP+ required",
        "note": "Since January 1, 2023, for roof-mounted residential solar",
        "source": {
          "publisher": "City of Simi Valley",
          "date": "2026-09-23",
          "url": "https://www.simivalley.org/departments/environmental-services/building-safety-division/photovoltaic-information"
        }
      },
      {
        "label": "Generation",
        "value": "Clean Power Alliance",
        "note": "Default plan Lean Power; serving since 2019",
        "source": {
          "publisher": "Clean Power Alliance",
          "date": "2026-09-23",
          "url": "https://cleanpoweralliance.org/"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "601",
        "note": "88% with storage, 79% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      }
    ],
    "sections": [
      {
        "heading": "Simi Valley's SolarAPP+ steps",
        "paragraphs": [
          "The City's process has two halves. In SolarAPP+, the contractor registers, submits the design, pays a $25 administrative fee per project and downloads the approval document; the City notes that SolarAPP+ registration can take longer than usual because of statewide demand. In the City's self-service portal, the contractor selects the Building & Safety SolarAPP+ permit, attaches the signed Construction Permit Declaration and the approval document, pays the permit fees online, and the permit is issued automatically by email.",
          "SolarAPP+ permits in Simi Valley include only one inspection, so the City asks that all work be complete, and match the approved scope on the approval document and permit, before the inspection is requested. Inspection requests made in the portal by 4 p.m. may be scheduled for the next business day, and the inspector will want a set of plans along with the SolarAPP+ approval. Revisions go to Building and Safety, and ground-mounted systems or additions to an existing array need a call there before applying."
        ]
      },
      {
        "heading": "What the permit numbers show",
        "paragraphs": [
          "Simi Valley reported 1,357 residential solar permits to the California Energy Commission for 2023 and 601 for 2024. The storage share changed sharply: 446 of the 2023 permits included a battery, compared with 530 of the 2024 permits, about 88%. The share issued online rose from 70% to 79%.",
          "That shift lines up with the billing rules. Clean Power Alliance moved new solar customers to its Solar Billing Plan for systems approved after August 31, 2023, crediting exports at hourly avoided-cost values, and SCE says its own export credits are worth less than the power you buy from the grid. A battery lets a home use its midday output in the evening instead of exporting it, so ask every bidder to show the bill with and without one."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "scotts-valley": {
    "name": "Scotts Valley",
    "county": "Santa Cruz County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "PG&E delivers power to Scotts Valley and sends the bill, and Central Coast Community Energy (3CE) supplies the generation by default; the city was one of 3CE's founding members when service began on March 1, 2018. On solar, that means two true-ups a year: one with PG&E for delivery and one with 3CE, in December, for generation. A proposal should model each from your own statement.",
    "local": "Scotts Valley permits residential rooftop solar and battery systems through SolarAPP+ and its OpenGov portal. The contractor runs the design through SolarAPP+ and pays its processing fee, then applies for the building permit in the City's portal; once the fees are paid, the permit is issued electronically. Inspections are requested online, and commercial buildings cannot use this route.",
    "example": "Ask each Scotts Valley bidder whether its design qualifies for SolarAPP+ as a roof-mounted retrofit, who files the City permit in OpenGov, and who handles a revision if the design changes. For the bill, have it show 3CE's December true-up separately from PG&E's, with any surplus valued at 3CE's net surplus rate rather than the retail price.",
    "checks": [
      [
        "Permit route",
        "Confirm the job is a roof-mounted residential retrofit that qualifies for SolarAPP+, and who files the City permit in OpenGov."
      ],
      [
        "Revisions",
        "Say who revises the design in SolarAPP+ and uploads the new inspection checklist to the City if anything changes."
      ],
      [
        "Two true-ups",
        "Show 3CE's December generation true-up separately from PG&E's delivery true-up."
      ],
      [
        "Address",
        "Confirm the address is inside Scotts Valley city limits; the County of Santa Cruz permits unincorporated homes."
      ]
    ],
    "sources": [
      {
        "label": "City of Scotts Valley: SolarAPP+ automated solar and energy storage plan reviews (October 2024, PDF)",
        "url": "https://scottsvalley.gov/DocumentCenter/View/5409/Solar-Permits-and-Energy-Storage-Systems-10-2024"
      },
      {
        "label": "Central Coast Community Energy: Solar Billing Plan",
        "url": "https://3cenergy.org/solar-billing-plan/"
      },
      {
        "label": "Central Coast Community Energy: Implementation Plan Addendum No. 5 (May 2023, PDF; founding member agencies)",
        "url": "https://3cenergy.org/wp-content/uploads/2023/05/Implementation-Plan-Addendum-No.-5.pdf"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/bay-area",
        "label": "How generation providers and permits differ around the Bay Area"
      },
      {
        "href": "/blog/pge-time-of-use-rates-2026",
        "label": "The PG&E time-of-use hours behind a solar estimate"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When adding a battery makes sense"
      }
    ],
    "faq": [
      [
        "How do I get a solar permit in Scotts Valley?",
        "A licensed contractor registers with SolarAPP+, submits the design for automated review and pays SolarAPP+'s processing fee, then applies for the building permit in the City's OpenGov portal. Once all fees are paid the permit is issued immediately and electronically, and inspections are requested online."
      ],
      [
        "How fast can I get a solar inspection in Scotts Valley?",
        "The City says inspection requests made online by 4 p.m. may be scheduled for the following business day."
      ],
      [
        "Who supplies electricity in Scotts Valley?",
        "PG&E delivers it and sends the bill. Central Coast Community Energy (3CE) supplies the generation by default; Scotts Valley was among the cities 3CE began serving on March 1, 2018."
      ],
      [
        "When is the solar true-up in Scotts Valley?",
        "Twice a year, in effect. 3CE trues up all of its customers' generation charges in December, with true-up statements on January or February bills, while PG&E runs a separate true-up for delivery charges on your own 12-month cycle."
      ],
      [
        "What does 3CE pay for extra solar?",
        "On its Solar Billing Plan, 3CE credits exports at hourly Energy Export Credit rates based on the CPUC's Avoided Cost Calculator and uses them against generation charges. At the December true-up, net surplus is paid at 3CE's Net Surplus Compensation rate, the average market rate, and residential customers owed at least $200 can request a check within 45 days of the true-up statement."
      ]
    ],
    "answer": "Solar companies installing in Scotts Valley file through SolarAPP+ and the City's OpenGov portal, which issues the permit electronically once fees are paid; inspections are booked online. PG&E delivers the power and Central Coast Community Energy supplies it, with 3CE's own true-up every December. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Permit route",
        "value": "SolarAPP+, then OpenGov",
        "note": "Permit issued electronically once fees are paid",
        "source": {
          "publisher": "City of Scotts Valley",
          "date": "2026-09-23",
          "url": "https://scottsvalley.gov/DocumentCenter/View/5409/Solar-Permits-and-Energy-Storage-Systems-10-2024"
        }
      },
      {
        "label": "Generation",
        "value": "Central Coast Community Energy",
        "note": "Founding member city; service since March 1, 2018",
        "source": {
          "publisher": "Central Coast Community Energy",
          "date": "2026-09-23",
          "url": "https://3cenergy.org/wp-content/uploads/2023/05/Implementation-Plan-Addendum-No.-5.pdf"
        }
      },
      {
        "label": "3CE true-up",
        "value": "December",
        "note": "PG&E trues up delivery separately",
        "source": {
          "publisher": "Central Coast Community Energy",
          "date": "2026-09-23",
          "url": "https://3cenergy.org/solar-billing-plan/"
        }
      }
    ],
    "sections": [
      {
        "heading": "Scotts Valley's permit steps",
        "paragraphs": [
          "The City's SolarAPP+ handout, dated October 2024, covers residential roof-mounted retrofit solar systems and energy storage, installed by licensed contractors; commercial buildings are not eligible. The contractor registers with SolarAPP+, submits the design for automated review and pays SolarAPP+'s processing fee. If SolarAPP+ rejects the project, the City asks the contractor to work that out directly with SolarAPP+.",
          "With an approval in hand, the contractor applies for the building permit in the City's OpenGov portal. Once every fee is paid the permit is issued immediately and electronically, and inspections are requested online, with requests received by 4 p.m. eligible for the next business day. A revision goes through SolarAPP+ first; the contractor then gives the City the new inspection checklist in the portal. Homes outside the city limits are permitted by the County of Santa Cruz, which reported 571 residential solar permits to the Energy Commission for 2024, 21% of them issued online."
        ]
      },
      {
        "heading": "How 3CE and PG&E credit a Scotts Valley system",
        "paragraphs": [
          "Central Coast Community Energy began serving its founding member agencies, Scotts Valley among them, on March 1, 2018. On a new system, 3CE credits exports at its hourly Energy Export Credit rates, which follow the CPUC's Avoided Cost Calculator, and applies them against generation charges in the current or later months. Customers enrolled in CARE or FERA get a flat low-income adder of $0.00396 per kWh on top of the export credit, for nine years.",
          "3CE trues up every customer's generation account in December, and true-up statements appear on January or February bills. If a home produced more than it used over the period, the surplus is paid at 3CE's Net Surplus Compensation rate, which 3CE sets each December at the average market rate, as a bill credit; residential customers owed at least $200 can ask for a check within 45 days. PG&E's true-up for delivery charges follows its own 12-month cycle, so a Scotts Valley solar home sees two."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "sunnyvale": {
    "name": "Sunnyvale",
    "county": "Santa Clara County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Sunnyvale homes are PG&E delivery customers, and Silicon Valley Clean Energy, which is headquartered in the city, is the official generation provider unless a customer opted out. SVCE sets the generation half of a solar bill: systems applied for after April 14, 2023 go on its Solar Billing Plan, while earlier NEM 2.0 systems keep their terms for 20 years. A proposal should model SVCE's generation credits and PG&E's delivery charges separately, from your own statement.",
    "local": "Sunnyvale permits rooftop residential solar through SolarAPP+, and every one of the 929 residential solar permits the City reported to the Energy Commission for 2023 was issued online. The contractor gets SolarAPP+ approval for a $25 fee, holds a Sunnyvale business license, applies for a Photovoltaic (SolarAPP+) permit in the City's E-OneStop online services, pays, and prints the permit card for inspections.",
    "example": "SolarAPP+ in Sunnyvale includes three free revisions, so a design change after approval should not cost you a new plan review. Ask each bidder whether it already holds a Sunnyvale business license, whether its design qualifies for SolarAPP+, and how the estimate splits SVCE's generation credits from PG&E's delivery charges. Then compare prices on the same system.",
    "checks": [
      [
        "Business license",
        "Confirm the company holds a Sunnyvale business license; the City requires one for anyone doing business in Sunnyvale."
      ],
      [
        "SolarAPP+ and E-OneStop",
        "Say who submits to SolarAPP+, applies in E-OneStop, prints the permit card and requests the inspection."
      ],
      [
        "SVCE vs PG&E",
        "Model SVCE's Solar Billing Plan on generation and PG&E's on delivery, using the plan on your bill."
      ],
      [
        "EV and battery load",
        "Include any EV charger or heat pump in the usage the system is sized from, and state the battery's usable kWh."
      ]
    ],
    "sources": [
      {
        "label": "City of Sunnyvale: SolarAPP+ for solar installers",
        "url": "https://www.sunnyvale.ca.gov/business-and-development/planning-and-building/solarapp-for-solar-installers"
      },
      {
        "label": "Silicon Valley Clean Energy: communities served and headquarters",
        "url": "https://www.svcleanenergy.org/"
      },
      {
        "label": "Silicon Valley Clean Energy: rooftop solar, NEM and Solar Billing Plan",
        "url": "https://www.svcleanenergy.org/solar/"
      },
      {
        "label": "Silicon Valley Clean Energy: residential rates and sample bill comparison",
        "url": "https://www.svcleanenergy.org/residential-rates/"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/bay-area",
        "label": "How Bay Area cities differ on providers and permits"
      },
      {
        "href": "/blog/pge-time-of-use-rates-2026",
        "label": "PG&E time-of-use hours for a solar estimate"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "Whether a battery earns its place"
      }
    ],
    "faq": [
      [
        "How do I get a solar permit in Sunnyvale?",
        "A licensed contractor submits the design through SolarAPP+ for pre-approval and pays its $25 processing fee, then applies for a Photovoltaic (SolarAPP+) permit in the City's E-OneStop online services, uploads the approved plans, pays, and prints the permit card. The inspection is requested in the same E-OneStop account once the work is done."
      ],
      [
        "Do solar companies need a Sunnyvale business license?",
        "Yes. The City says anyone engaging in or carrying on any business in Sunnyvale must have a business license from the City, and its SolarAPP+ page lists the license as a step before applying for the permit."
      ],
      [
        "Who supplies electricity for solar homes in Sunnyvale?",
        "PG&E delivers it and sends the bill. Silicon Valley Clean Energy is the official generation provider for Sunnyvale and 12 other communities, and it handles the generation side of solar billing for its customers."
      ],
      [
        "Which solar billing plan will a new Sunnyvale system be on?",
        "SVCE says anyone who applied for solar after April 14, 2023 is, or will be, on the Solar Billing Plan. Customers who applied between June 29, 2016 and April 14, 2023 are on NEM 2.0, and NEM customers stay on it for 20 years after installation."
      ]
    ],
    "answer": "Solar companies in Sunnyvale permit rooftop systems through SolarAPP+ and the City's E-OneStop online services, and the City reported all 929 of its 2023 residential solar permits as issued online. Each company needs a Sunnyvale business license. PG&E delivers the power and Silicon Valley Clean Energy supplies it, with its own Solar Billing Plan for systems applied for after April 14, 2023. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Permit route",
        "value": "SolarAPP+, then E-OneStop",
        "note": "$25 SolarAPP+ fee; three free revisions",
        "source": {
          "publisher": "City of Sunnyvale",
          "date": "2026-09-23",
          "url": "https://www.sunnyvale.ca.gov/business-and-development/planning-and-building/solarapp-for-solar-installers"
        }
      },
      {
        "label": "2023 permits issued online",
        "value": "929 of 929",
        "note": "26% included storage",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Generation",
        "value": "Silicon Valley Clean Energy",
        "note": "PG&E delivers and bills",
        "source": {
          "publisher": "Silicon Valley Clean Energy",
          "date": "2026-09-23",
          "url": "https://www.svcleanenergy.org/"
        }
      }
    ],
    "sections": [
      {
        "heading": "Sunnyvale's SolarAPP+ steps",
        "paragraphs": [
          "The City describes SolarAPP+ as instant permitting for new residential rooftop solar, without full plan drawings, and notes that the platform includes three free revisions. The contractor signs in or registers with SolarAPP+, submits the design for pre-approval, pays the $25 processing fee and downloads the approved plans. Before applying to the City, it needs a Sunnyvale business license.",
          "The City permit is filed in E-OneStop Online Services as a Photovoltaic (SolarAPP+) permit, with the approved plans uploaded and the fee paid; the contractor then prints the permit card for the inspections and requests the inspection in the same account when the work is done. Sunnyvale's 2023 report to the Energy Commission shows how routine this has become: 929 residential solar permits, every one issued online, 238 of them with battery storage."
        ]
      },
      {
        "heading": "SVCE's solar rules in Sunnyvale",
        "paragraphs": [
          "Silicon Valley Clean Energy is a public, not-for-profit agency serving about 280,000 residential and business customers in 13 communities, and its office is on South Sunnyvale Avenue. It is the official generation provider for Sunnyvale; PG&E still delivers the power, maintains the lines and sends the bill. SVCE's solar programs are available only inside its service area.",
          "Which solar plan applies depends on when the system was applied for. SVCE says systems installed before 2016 are likely on NEM 1.0, those applied for between June 29, 2016 and April 14, 2023 are on NEM 2.0, and anything applied for later is on the Solar Billing Plan, under which credits and charges are valued by when energy is sent to or taken from the grid. NEM contracts run 20 years from installation, so a home you buy with older panels may still be on the older terms; ask the seller for the interconnection date."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "cupertino": {
    "name": "Cupertino",
    "county": "Santa Clara County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Cupertino is a PG&E delivery city, and Silicon Valley Clean Energy is its official generation provider, so a Cupertino solar bill has two halves: SVCE's generation charges and credits, and PG&E's delivery charges and credits. Have each bidder model both from your own statement, with the solar plan that matches when your system is applied for.",
    "local": "Cupertino normally issues an Instant Solar Permit through SolarAPP+ and its Citizen Access portal for roof-mounted systems, with or without batteries and a main service upgrade. As of September 23, 2026 the City's page says the instant permit is temporarily unavailable because of a business license system upgrade, and all permits must be emailed to the Permit Center instead. Ask each bidder how that changes its timeline.",
    "example": "Cupertino homes put a battery on more than half of their 2024 solar permits, so expect most bids to include one. Ask each bidder for the battery's usable kWh and backed-up circuits, whether a main service upgrade is part of the same permit, and how many inspections its schedule assumes, since the City's inspection fee covers two visits for the same element and a third costs extra.",
    "checks": [
      [
        "Permit route",
        "Say whether the job goes through the Instant Solar Permit or, while that is paused, by email to the Permit Center, and the expected wait."
      ],
      [
        "What to upload",
        "List the SolarAPP+ approval documents, inspection checklist and equipment specifications the City requires."
      ],
      [
        "Inspections",
        "State how many inspections the schedule assumes; re-inspections beyond two for the same element carry a fee."
      ],
      [
        "SVCE and PG&E",
        "Model SVCE generation credits and PG&E delivery charges separately."
      ]
    ],
    "sources": [
      {
        "label": "City of Cupertino: Instant Solar Permit (SolarAPP+)",
        "url": "https://www.cupertino.gov/Your-City/Departments/Community-Development/Building/Permits/Instant-Solar-Permit-SolarAPP"
      },
      {
        "label": "Silicon Valley Clean Energy: communities served",
        "url": "https://www.svcleanenergy.org/"
      },
      {
        "label": "Silicon Valley Clean Energy: rooftop solar, NEM and Solar Billing Plan",
        "url": "https://www.svcleanenergy.org/solar/"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/bay-area",
        "label": "Providers and permit offices across the Bay Area"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a battery is worth the added cost"
      },
      {
        "href": "/blog/pge-time-of-use-rates-2026",
        "label": "PG&E time-of-use hours and your solar estimate"
      }
    ],
    "faq": [
      [
        "How do I get an instant solar permit in Cupertino?",
        "Normally, a licensed contractor registers with SolarAPP+, submits the project, pays the $25 processing fee and downloads the approval, then applies in the City's Citizen Access portal with the approval documents, inspection checklist and equipment specifications. Once fees are paid and forms signed, the permit issues automatically. The City says the instant permit is temporarily unavailable during a business license system upgrade, so permits are being emailed to permitcenter@cupertino.gov."
      ],
      [
        "Does a battery need its own permit in Cupertino?",
        "Not on the instant route. The City's Instant Solar Permit covers roof-mounted solar with or without energy storage, and a main electrical service upgrade can be included, as long as the system is on the SolarAPP+ eligibility checklists."
      ],
      [
        "How many solar permits does Cupertino issue?",
        "The City reported 504 residential solar permits to the California Energy Commission for 2024. Of those, 288 included battery storage and 197, about 39%, were issued online."
      ],
      [
        "Who supplies electricity in Cupertino?",
        "PG&E delivers it and sends the bill, and Silicon Valley Clean Energy is the official generation provider for Cupertino, one of the 13 communities it serves."
      ]
    ],
    "answer": "Solar companies in Cupertino normally get an instant permit through SolarAPP+ and the City's Citizen Access portal, covering rooftop solar with or without a battery. As of September 23, 2026 the City has paused that route during a business license system upgrade and is taking permits by email. PG&E delivers the power and Silicon Valley Clean Energy supplies it. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Instant Solar Permit",
        "value": "Temporarily unavailable",
        "note": "Permits by email to the Permit Center meanwhile",
        "source": {
          "publisher": "City of Cupertino",
          "date": "2026-09-23",
          "url": "https://www.cupertino.gov/Your-City/Departments/Community-Development/Building/Permits/Instant-Solar-Permit-SolarAPP"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "504",
        "note": "57% with storage, 39% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Generation",
        "value": "Silicon Valley Clean Energy",
        "note": "PG&E delivers and bills",
        "source": {
          "publisher": "Silicon Valley Clean Energy",
          "date": "2026-09-23",
          "url": "https://www.svcleanenergy.org/"
        }
      }
    ],
    "sections": [
      {
        "heading": "Cupertino's Instant Solar Permit, and the pause",
        "paragraphs": [
          "The City's Instant Solar Permit covers roof-mounted solar photovoltaic installations with or without energy storage, and a contractor may include a main electrical service upgrade; only systems on the SolarAPP+ eligibility checklists qualify. The route has four steps: register with SolarAPP+, submit the project and pay its processing fee, currently $25, then apply in Citizen Access with the SolarAPP+ approval documents, the SolarAPP+ inspection checklist and the equipment specifications. When the documents are uploaded, fees paid and forms signed, the permit issues automatically, and the inspection is scheduled from the record in Citizen Access.",
          "On September 23, 2026 the City's page said the instant permit was temporarily unavailable because of a business license system upgrade, and that all permits had to be submitted by email to the Permit Center. Revisions already go that way: the City asks for a revised application, updated SolarAPP+ approval documents and a new inspection checklist by email. One inspection fee covers two inspections of the same element; further inspections carry re-inspection fees paid before the final."
        ]
      },
      {
        "heading": "What Cupertino's permits and bills look like",
        "paragraphs": [
          "Cupertino reported 504 residential solar permits to the Energy Commission for 2024, and 288 of them, about 57%, included battery storage. About 39% were issued online, which reflects how many projects took the instant route rather than regular review.",
          "The bill behind those systems is split. Silicon Valley Clean Energy is the official electricity provider for Cupertino and supplies the generation, while PG&E delivers the power and sends the statement. SVCE says systems applied for after April 14, 2023 are on the Solar Billing Plan, and earlier NEM 2.0 systems keep their terms for 20 years from installation, so a proposal should state which plan it assumes for your home."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "santa-clara": {
    "name": "Santa Clara",
    "county": "Santa Clara County",
    "utility": "other",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Santa Clara is not a PG&E city. Silicon Valley Power, the City of Santa Clara's own electric utility, delivers and supplies power to almost the whole city, so there is no community choice provider and the CPUC's Solar Billing Plan does not set the rules. A proposal copied from a San Jose or Sunnyvale job, built on PG&E's tariff, is modeling the wrong utility.",
    "local": "Santa Clara's instant SolarAPP+ permit is narrower than most: the City limits it to systems up to 15 kW with no more than one battery of 20 kWh, and the contractor must upload Silicon Valley Power's Interconnection Agreement Pre-Approval Letter with the SolarAPP+ approval. Larger or otherwise ineligible projects go through the City's Permitting Online Portal instead.",
    "example": "Before comparing prices, ask each bidder two things: has it applied to Silicon Valley Power for the pre-approval letter, and does the design fit the City's 15 kW and one-battery limit for the instant permit? A 16 kW design with two batteries may be the right system for your home, but it will take the regular review, and the bid should say so.",
    "checks": [
      [
        "SVP pre-approval",
        "Show Silicon Valley Power's Interconnection Agreement Pre-Approval Letter before the permit application."
      ],
      [
        "Instant permit limits",
        "Confirm the system is 15 kW or less with at most one battery of 20 kWh, or say it will use the Permitting Online Portal."
      ],
      [
        "SVP's rules",
        "Model SVP's Schedule NM: annual surplus at $0.05366 per kWh or rolled forward as credit, not PG&E's Solar Billing Plan."
      ],
      [
        "Address",
        "Confirm the address is in SVP territory; a small edge of the city maps to PG&E."
      ]
    ],
    "sources": [
      {
        "label": "City of Santa Clara Building Division: SolarAPP+ (15 kW and one-battery limits, SVP pre-approval letter)",
        "url": "https://www.santaclaraca.gov/our-city/departments-a-f/community-development/building-division/solarapp"
      },
      {
        "label": "Silicon Valley Power: Rate Schedule NM, net energy metering (effective January 1, 2026)",
        "url": "https://www.siliconvalleypower.com/home/showpublisheddocument/58854/638718507400200000"
      },
      {
        "label": "Silicon Valley Power: solar incentives and financing",
        "url": "https://www.siliconvalleypower.com/sustainability/solar/incentives-and-financing-options"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/bay-area",
        "label": "Which Bay Area cities run their own utilities"
      },
      {
        "href": "/solar-companies/san-jose",
        "label": "Solar companies next door in San Jose (PG&E and SJCE)"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "Whether a home battery is worth it"
      }
    ],
    "faq": [
      [
        "Who is the electric utility in Santa Clara?",
        "Silicon Valley Power, owned by the City of Santa Clara. On the California Energy Commission's utility map it covers about 98% of the city's area, with a small edge in PG&E territory, and no community choice provider operates in its area."
      ],
      [
        "What does Silicon Valley Power pay for extra solar?",
        "Under SVP's Rate Schedule NM, effective January 1, 2026, a customer whose annual generation exceeds consumption can take payment for the excess at $0.05366 per kWh or roll it forward as a credit to the next annual cycle. Monthly statements track charges and credits, and an annual bill trues them up."
      ],
      [
        "Can every Santa Clara solar project get an instant permit?",
        "No. The City limits SolarAPP+ to systems up to 15 kW with no more than one battery of 20 kWh, and requires SVP's Interconnection Agreement Pre-Approval Letter. Other projects go through the City's Permitting Online Portal."
      ],
      [
        "Does Silicon Valley Power offer solar rebates?",
        "Not for residential solar panels: SVP says it no longer provides residential rebates for solar photovoltaic systems."
      ],
      [
        "How many solar permits does Santa Clara issue?",
        "The City reported 97 residential solar permits to the California Energy Commission for 2024, 13 of them with battery storage, and 29, about 30%, issued online."
      ]
    ],
    "answer": "Solar companies in Santa Clara work with Silicon Valley Power, the City's own utility, not PG&E. The City's instant SolarAPP+ permit is limited to systems up to 15 kW with one battery of up to 20 kWh and needs SVP's interconnection pre-approval letter; larger projects use the City's Permitting Online Portal. SVP pays $0.05366 per kWh for annual surplus. Compare at least three written bids built on your own SVP bill.",
    "keyFacts": [
      {
        "label": "Electric utility",
        "value": "Silicon Valley Power",
        "note": "City-owned; about 98% of the city's area",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Instant permit limit",
        "value": "15 kW, one battery ≤ 20 kWh",
        "note": "SVP pre-approval letter required",
        "source": {
          "publisher": "City of Santa Clara",
          "date": "2026-09-23",
          "url": "https://www.santaclaraca.gov/our-city/departments-a-f/community-development/building-division/solarapp"
        }
      },
      {
        "label": "SVP annual surplus rate",
        "value": "$0.05366 per kWh",
        "note": "Or roll the credit forward; Schedule NM, Jan. 1, 2026",
        "source": {
          "publisher": "Silicon Valley Power",
          "date": "2026-09-23",
          "url": "https://www.siliconvalleypower.com/home/showpublisheddocument/58854/638718507400200000"
        }
      }
    ],
    "sections": [
      {
        "heading": "Silicon Valley Power's solar rules",
        "paragraphs": [
          "Silicon Valley Power's net energy metering schedule, Rate Schedule NM, took effect on January 1, 2026 under City Resolution No. 25-9516 and applies to all eligible customer-generators it serves. It is offered first come, first served until customer-generators reach 5% of SVP's peak distribution demand, so ask SVP whether space remains when you apply.",
          "Under the schedule, customers get monthly statements showing accumulated charges and credits, and an annual bill trues them up. If a home generates more than it uses over the year, the owner can take payment for the excess at $0.05366 per kWh or apply it as a credit to the next annual cycle. SVP says it no longer offers residential solar rebates. None of this is PG&E's Solar Billing Plan, so a bid that quotes PG&E export values or bonus credits for a Santa Clara address has the wrong tariff."
        ]
      },
      {
        "heading": "Santa Clara's two permit routes",
        "paragraphs": [
          "The City's SolarAPP+ route is for licensed contractors only, and it is tighter than the platform's own limits: systems up to 15 kW, and energy storage of no more than one battery and 20 kWh. SolarAPP+ checks the design for code compliance, and the City then checks installation practice, workmanship and the approved design at inspection. The application needs the SolarAPP+ approval document and ID plus Silicon Valley Power's Interconnection Agreement Pre-Approval Letter, so the utility step comes first.",
          "Projects outside those limits go through the City's Permitting Online Portal. The City's report to the Energy Commission shows the split: of 97 residential solar permits in 2024, 29 were issued online, and 13 of the 97 included battery storage, a far lower storage share than in neighboring PG&E cities."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "palo-alto": {
    "name": "Palo Alto",
    "county": "Santa Clara County",
    "utility": "other",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Palo Alto runs its own electric utility, City of Palo Alto Utilities (CPAU), so PG&E's Solar Billing Plan and the community choice providers around it do not apply. New solar customers have been served by the City's NEM 2 program since January 1, 2018, which credits exported power at CPAU's Export Electricity Compensation rate. Ask each bidder to model CPAU's rules from your own utility bill.",
    "local": "Palo Alto puts the utility first. For an instant SolarAPP+ permit, the contractor gets CPAU's interconnection approval through the Utilities tab of Accela Citizen Access, then runs the design through SolarAPP+ for a $25 fee, then applies for the Residential Solar Permit with SolarApp+ in the same portal. The Building Inspector issues permission to operate at the final inspection, after CPAU's meter inspection.",
    "example": "Many Palo Alto projects do not qualify for the instant route: the City excludes historic properties, ground-mounted and building-integrated systems, standalone batteries, electrical panel upgrades and additions to an existing array. Ask each bidder which route its design takes, who files the CPAU interconnection application, and who books the utility's meter inspection before the final.",
    "checks": [
      [
        "CPAU first",
        "Show the CPAU interconnection application: site plan, elevation, three-line diagram, specifications and signed agreement."
      ],
      [
        "Instant-permit fit",
        "Confirm the design is a new roof-mounted single-family system with no panel upgrade, or name the traditional permit route."
      ],
      [
        "Meter inspection",
        "Say who schedules CPAU's electric meter inspection before the final building inspection."
      ],
      [
        "CPAU's credit",
        "Model exports at CPAU's current Export Electricity Compensation rate, not PG&E's."
      ]
    ],
    "sources": [
      {
        "label": "City of Palo Alto: apply for a residential SolarAPP+ permit",
        "url": "https://www.paloalto.gov/Departments/Planning-Development-Services/Development-Services/Apply-for-a-Permit/Apply-for-a-Residential-SolarAPP-Permit"
      },
      {
        "label": "City of Palo Alto Utilities: net energy metering (NEM 1 cap, NEM 2, permission to operate)",
        "url": "https://www.paloalto.gov/Departments/Utilities/Electrification/Electrify-My-Home/Consider-Solar/Net-Energy-Metering"
      },
      {
        "label": "City of Palo Alto Utilities: Utility Rate Schedule E-EEC-1, Export Electricity Compensation (effective July 1, 2026, PDF)",
        "url": "https://www.paloalto.gov/files/assets/public/v/7/utilities/rates-schedules-for-utilities/residential-utility-rates/e-eec-1_effective_2026-07-01.pdf"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/bay-area",
        "label": "The Bay Area cities that run their own utilities"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a battery makes sense"
      },
      {
        "href": "/solar-installers/how-to-verify-a-solar-contractor-california",
        "label": "Checking a solar contractor's license"
      }
    ],
    "faq": [
      [
        "Who is the electric utility in Palo Alto?",
        "City of Palo Alto Utilities. On the California Energy Commission's utility map it serves about 92% of the city's area; PG&E and other providers appear only at the edges. CPAU sets its own solar rules outside the CPUC's net billing tariff."
      ],
      [
        "What net metering program is Palo Alto on?",
        "New solar customers have been served by the City's NEM 2 program since January 1, 2018, when CPAU's NEM 1 program had reached its 10.8 MW cap. NEM 2 customers are paid for exported electricity at the Export Electricity Compensation rate, Schedule E-EEC-1, which is $0.0990 per kWh from July 1, 2026 (checked September 24, 2026). CPAU revises it from time to time, so have each bidder cite the schedule in force when you sign."
      ],
      [
        "How do I get a SolarAPP+ permit in Palo Alto?",
        "Five steps: confirm the project qualifies, get CPAU's interconnection approval through the Utilities tab of Accela Citizen Access, run the design through SolarAPP+ and pay its $25 fee, apply for the Residential Solar Permit with SolarApp+ in Citizen Access with the approval, spec sheet and signed interconnection agreement, then download the issued permit from the record."
      ],
      [
        "Who gives permission to operate in Palo Alto?",
        "The City's Building Inspector, at the final inspection. CPAU asks customers to schedule its electric meter inspection before that final building inspection."
      ],
      [
        "How many solar permits does Palo Alto issue?",
        "The City reported 155 residential solar permits to the California Energy Commission for 2024, down from 232 in 2023. Of the 2024 permits, 55 included battery storage and 56, about 36%, were issued online."
      ]
    ],
    "answer": "Solar companies in Palo Alto work with City of Palo Alto Utilities, not PG&E: CPAU's interconnection approval comes first, then SolarAPP+ and the City's Accela Citizen Access portal for an instant permit, and the Building Inspector grants permission to operate at the final inspection. New systems are on the City's NEM 2 program, which pays CPAU's export rate. Compare at least three written bids built on your own CPAU bill.",
    "keyFacts": [
      {
        "label": "Electric utility",
        "value": "City of Palo Alto Utilities",
        "note": "About 92% of the city's area",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Solar program",
        "value": "CPAU NEM 2",
        "note": "Since January 1, 2018; exports paid at the EEC-1 rate",
        "source": {
          "publisher": "City of Palo Alto Utilities",
          "date": "2026-09-23",
          "url": "https://www.paloalto.gov/Departments/Utilities/Electrification/Electrify-My-Home/Consider-Solar/Net-Energy-Metering"
        }
      },
      {
        "label": "Export credit",
        "value": "$0.0990 per kWh",
        "note": "Schedule E-EEC-1, effective July 1, 2026",
        "source": {
          "publisher": "City of Palo Alto Utilities",
          "date": "2026-09-24",
          "url": "https://www.paloalto.gov/files/assets/public/v/7/utilities/rates-schedules-for-utilities/residential-utility-rates/e-eec-1_effective_2026-07-01.pdf"
        }
      },
      {
        "label": "Permission to operate",
        "value": "At final inspection",
        "note": "Issued by the Building Inspector",
        "source": {
          "publisher": "City of Palo Alto Utilities",
          "date": "2026-09-23",
          "url": "https://www.paloalto.gov/Departments/Utilities/Electrification/Electrify-My-Home/Consider-Solar/Net-Energy-Metering"
        }
      }
    ],
    "sections": [
      {
        "heading": "Palo Alto's instant permit, utility first",
        "paragraphs": [
          "The City's SolarAPP+ route is for single-family, roof-mounted new installations by CSLB-licensed contractors, with PV and storage each up to 38.4 kW, electric service up to 400 amps and a 225-amp service disconnect and busbars. It excludes historic properties, standalone storage, ground-mounted and building-integrated systems, electrical panel upgrades, upgrades or additions to existing systems, and multifamily or commercial work; those use a traditional building permit.",
          "The order matters. The contractor first registers in Accela Citizen Access and applies under the Utilities tab for interconnection, with a site plan, an elevation plan, a three-line diagram, manufacturer specifications and a signed interconnection agreement. Then it submits the design in SolarAPP+ and pays the $25 administration fee, and finally applies under the Building tab for the Residential Solar Permit with SolarApp+, uploading the approval, the spec sheet and the signed interconnection agreement and paying City fees, which vary by system size. Inspections can be booked in the iRequest app, the portal or by phone."
        ]
      },
      {
        "heading": "How CPAU credits solar",
        "paragraphs": [
          "CPAU's original net metering program closed when it reached its cap of 10.8 MW of installed solar on December 31, 2017. NEM 1 customers are credited at retail rates for exports; everyone who went solar from January 1, 2018 on is on NEM 2 and paid for exports at the Export Electricity Compensation rate, Schedule E-EEC-1. The schedule effective July 1, 2026 pays $0.0990 per kWh for all exported electricity (checked September 24, 2026). Rates change, so a proposal should cite the schedule in force when you sign.",
          "In Palo Alto the utility and the building department finish the job together. CPAU asks customers to schedule its electric meter inspection before the final building inspection, and the Building Inspector issues interconnection approval, permission to operate, at that final inspection. The City reported 155 residential solar permits for 2024 to the Energy Commission, 36% of them issued online."
        ]
      }
    ],
    "contentModified": "2026-09-24"
  },
  "chula-vista": {
    "name": "Chula Vista",
    "county": "San Diego County",
    "utility": "sdge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "SDG&E delivers power in Chula Vista and sends the bill, and San Diego Community Power supplies the generation for most homes; the California Energy Commission's map puts about 93% of the city's area in Community Power's service. For a new system, Community Power's Solar Billing Plan credits exports at hourly values and bills monthly with no annual true-up, while SDG&E handles the delivery side on its EV-TOU-5 plan.",
    "local": "The City of Chula Vista issues the building permit, and its reports to the California Energy Commission show a busy and increasingly online process: 3,188 residential solar permits in 2023 and 1,554 in 2024, with the share issued online rising from 16% to 41%. Solar on a mobile or manufactured home is different: that permit comes from the state Department of Housing and Community Development, not the City.",
    "example": "Most Chula Vista bids now include a battery: 898 of the City's 1,554 solar permits in 2024 did. Ask each bidder to show your bill with and without it, using SDG&E's 4 p.m. to 9 p.m. on-peak hours and Community Power's hourly export credits, and to say whether the permit will be issued online or through plan review.",
    "checks": [
      [
        "Generation provider",
        "Model San Diego Community Power's hourly export credits and monthly billing, not SDG&E's generation rates, if Community Power is on your bill."
      ],
      [
        "Evening use",
        "Show how much of the 4-to-9 p.m. on-peak use the system and any battery cover on EV-TOU-5."
      ],
      [
        "Permit route",
        "Say whether the City permit will be issued online or through plan review, and the expected wait."
      ],
      [
        "Mobile home",
        "On a mobile or manufactured home, show the HCD permit and the company's CSLB license before work starts."
      ]
    ],
    "sources": [
      {
        "label": "San Diego Community Power: net energy metering and Solar Billing Plan",
        "url": "https://sdcommunitypower.org/net-energy-metering/"
      },
      {
        "label": "SDG&E: Solar Billing Plan (EV-TOU-5, export credits, Base Services Charge)",
        "url": "https://www.sdge.com/solar/solar-billing-plan"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California HCD: advisory for manufactured home roof-mounted solar systems (PDF)",
        "url": "https://www.hcd.ca.gov/sites/default/files/docs/manufactured-and-mobilehomes/solar-pv-advisory.pdf"
      },
      {
        "label": "California HCD: modifications and alterations to manufactured homes",
        "url": "https://www.hcd.ca.gov/manufactured-and-mobilehomes/modifying-mobilehome"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-savings/san-diego",
        "label": "What SDG&E electricity costs in San Diego"
      },
      {
        "href": "/blog/sdge-time-of-use-rates-2026",
        "label": "SDG&E time-of-use hours and prices"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a battery pays under net billing"
      }
    ],
    "faq": [
      [
        "Who supplies electricity for solar homes in Chula Vista?",
        "SDG&E delivers the power and sends the bill. San Diego Community Power supplies the generation for most homes; on the Energy Commission's map it covers about 93% of the city's area. Community Power sets the generation import charges and export credits for its customers."
      ],
      [
        "How does San Diego Community Power credit new solar systems?",
        "Customers interconnected on or after April 15, 2023 are on its Solar Billing Plan, with export credits based on the CPUC's Avoided Cost Calculator, which vary by hour and month, for nine years from permission to operate. Solar Billing Plan customers are billed monthly and are not eligible for annual billing."
      ],
      [
        "How many solar permits does Chula Vista issue?",
        "The City reported 1,554 residential solar permits to the California Energy Commission for 2024, down from 3,188 in 2023. In 2024, 898 included battery storage and 634, about 41%, were issued online."
      ],
      [
        "Can I put solar on a mobile home in Chula Vista?",
        "Yes, with a state permit. The California Department of Housing and Community Development says an HCD permit is required for any solar system installed on a manufactured home, warns that damage from poor installation on those roofs is not visible, and tells owners to confirm the company's CSLB license and HCD permit before signing."
      ],
      [
        "What are SDG&E's peak hours for a Chula Vista solar home?",
        "On EV-TOU-5, the plan SDG&E's Solar Billing Plan uses, on-peak runs from 4 p.m. to 9 p.m. SDG&E suggests using a battery during those hours, when electricity is priced highest."
      ]
    ],
    "answer": "Solar companies in Chula Vista design around two providers: SDG&E delivers the power and San Diego Community Power supplies most homes' generation, billing solar customers monthly with hourly export credits. The City issued 1,554 residential solar permits in 2024, 41% online and more than half with batteries. A mobile or manufactured home needs a state HCD permit instead. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "2024 solar permits",
        "value": "1,554",
        "note": "58% with storage, 41% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Generation",
        "value": "San Diego Community Power",
        "note": "About 93% of the city's area; SDG&E delivers",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Solar billing",
        "value": "Monthly, no annual true-up",
        "note": "Community Power's Solar Billing Plan",
        "source": {
          "publisher": "San Diego Community Power",
          "date": "2026-09-23",
          "url": "https://sdcommunitypower.org/net-energy-metering/"
        }
      }
    ],
    "sections": [
      {
        "heading": "How Community Power and SDG&E bill a Chula Vista solar home",
        "paragraphs": [
          "San Diego Community Power closed net energy metering to new solar customers on April 15, 2023. Anyone interconnected since then is on its Solar Billing Plan: exports earn credits based on the CPUC's Avoided Cost Calculator, which vary by hour and month, for a legacy period of nine years from permission to operate, and the account is billed monthly rather than annually. SDG&E says that for Community Power customers, the CCA sets the generation import charges and export credits.",
          "The delivery side stays with SDG&E. Its Solar Billing Plan runs on the EV-TOU-5 time-of-use plan, with on-peak hours from 4 p.m. to 9 p.m., and export credits roll over month to month but cannot be applied to non-bypassable charges or the Base Services Charge. A Chula Vista proposal should show both halves, and should show how much of the evening peak the system and any battery actually cover."
        ]
      },
      {
        "heading": "Permits: the City, or the state for manufactured homes",
        "paragraphs": [
          "The City of Chula Vista reported 3,188 residential solar permits to the California Energy Commission for 2023 and 1,554 for 2024. The storage share climbed from 16% to 58% over those two years, and the share issued online from 16% to 41%. Ask each bidder whether your design will be permitted online or go through plan review.",
          "Many Chula Vista searches are about mobile and manufactured homes, and those follow state rules. The Department of Housing and Community Development requires an HCD permit for any solar system on a manufactured home and a permit before any alteration begins. Its advisory warns that manufactured home roofs are not accessible, so damage from poor installation is not visible, and HCD's guidelines say when engineered plans or electrical load calculations are needed. HCD's Southern Area Office is in Riverside."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "san-ramon": {
    "name": "San Ramon",
    "county": "Contra Costa County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "San Ramon homes are on PG&E's wires, and the California Energy Commission's map shows MCE as the community choice provider over the whole city, supplying generation by default while PG&E delivers the power and sends the bill. Check the generation lines on your own statement, then have each bidder model that provider's export credits and PG&E's delivery charges separately.",
    "local": "San Ramon runs rooftop solar through SolarAPP+ with two local conditions: an active San Ramon business license, and a place on the City's SolarAPP+ eligibility list, which a contractor requests by email to the Permit Center. The permit itself is an Electrical Photovoltaic (SolarAPP) permit filed in the City's Citizen Self Service (CSS) portal, where inspections are also requested.",
    "example": "San Ramon reported every one of its 694 residential solar permits for 2024 as issued online, and only 27 of them included a battery. If one bidder quotes panels only and another adds a battery, ask both to show your PG&E and MCE bill with and without storage, so you can see what the battery adds for your usage rather than for an average home.",
    "checks": [
      [
        "City conditions",
        "Confirm an active San Ramon business license and a spot on the City's SolarAPP+ eligibility list."
      ],
      [
        "Zoning",
        "Say whether the Planning Division was asked about zoning before the permit, as the City advises."
      ],
      [
        "Roof weight",
        "If panels weigh more than 5 pounds per square foot, show the structural calculations the City requires."
      ],
      [
        "MCE and PG&E",
        "Model the generation provider on your bill and PG&E delivery separately."
      ]
    ],
    "sources": [
      {
        "label": "City of San Ramon: SolarAPP+ (business license, eligibility list, CSS permit)",
        "url": "https://www.sanramon.ca.gov/our_city/departments_and_divisions/community_development/building_and_safety_services/solar_a_p_p_"
      },
      {
        "label": "City of San Ramon: residential solar photovoltaic submittal requirements",
        "url": "https://www.sanramon.ca.gov/our_city/departments_and_divisions/community_development/building_and_safety_services/permit_and_plan_submittal_instructions/residential_solar_photovoltaic"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/bay-area",
        "label": "Bay Area providers and permit offices by city"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "Deciding whether to add a battery"
      },
      {
        "href": "/blog/pge-time-of-use-rates-2026",
        "label": "PG&E's time-of-use hours for a solar estimate"
      }
    ],
    "faq": [
      [
        "How do I get a solar permit in San Ramon?",
        "A licensed contractor submits the design to SolarAPP+ for automated review and pays its processing fee, then, with an active San Ramon business license and a place on the City's SolarAPP+ eligibility list, applies for an Electrical Photovoltaic (SolarAPP) permit in the City's CSS portal and requests the inspection there."
      ],
      [
        "What if my San Ramon project doesn't qualify for SolarAPP+?",
        "It goes through regular plan submittal. The City asks for a plot plan showing the panels, lot dimensions and setbacks, and installation details including panel weight, number and area, roofing type and weight and the attachment method. Structural calculations are required when the installation weighs more than 5 pounds per square foot."
      ],
      [
        "How many solar permits does San Ramon issue?",
        "The City reported 1,074 residential solar permits to the California Energy Commission for 2023 and 694 for 2024, all of them issued online. Only 27 of the 2024 permits included battery storage."
      ],
      [
        "Who supplies electricity in San Ramon?",
        "PG&E delivers it and sends the bill. On the Energy Commission's map, MCE is the community choice provider over San Ramon, supplying generation by default; the name on your bill's generation lines is the one a proposal should use."
      ]
    ],
    "answer": "Solar companies installing in San Ramon use SolarAPP+ and the City's Citizen Self Service portal, and need an active San Ramon business license and a place on the City's SolarAPP+ eligibility list first. The City issued all 694 of its 2024 residential solar permits online. PG&E delivers the power, and the Energy Commission's map shows MCE as the generation provider. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "2024 permits issued online",
        "value": "All 694",
        "note": "Only 27 included battery storage",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Contractor gates",
        "value": "Business license + eligibility list",
        "note": "Before the Electrical Photovoltaic (SolarAPP) permit",
        "source": {
          "publisher": "City of San Ramon",
          "date": "2026-09-23",
          "url": "https://www.sanramon.ca.gov/our_city/departments_and_divisions/community_development/building_and_safety_services/solar_a_p_p_"
        }
      },
      {
        "label": "Generation",
        "value": "MCE",
        "note": "PG&E delivers and bills",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      }
    ],
    "sections": [
      {
        "heading": "San Ramon's two permit paths",
        "paragraphs": [
          "For the automated path, the City's SolarAPP+ page follows a set order. The contractor registers with SolarAPP+, submits the design for automated review of a residential, roof-mounted retrofit system and pays SolarAPP+'s processing fee, then downloads the approved plans. Before applying to the City it needs an active San Ramon business license and must be added to the City's SolarAPP+ eligibility list by emailing the Permit Center. The City permit is an Electrical Photovoltaic (SolarAPP) permit filed in the CSS portal, and inspections are requested from the same CSS account.",
          "Projects outside SolarAPP+ go through regular submittal. The plot plan must show the site to scale, lot dimensions, setbacks, driveways, adjacent streets and the panel locations. The installation details must give the panel weight, number of panels, area covered, UL listings, the existing roofing type and weight, and how the supports attach to the structure. When the installation weighs more than 5 pounds per square foot, structural calculations are required. The City also advises checking zoning with the Planning Division before any project starts."
        ]
      },
      {
        "heading": "Why San Ramon's permit numbers look different",
        "paragraphs": [
          "San Ramon reported 1,074 residential solar permits to the California Energy Commission for 2023 and 694 for 2024, and every one in both years was issued online. The storage share stayed low: 22 permits with a battery in 2023 and 27 in 2024, about 4%. In nearby Danville, by comparison, 78% of 2024 permits included storage.",
          "That gap is worth a question. On PG&E's Solar Billing Plan, credits for exported power vary by time of day, day of the week and season, and PG&E says customers save the most when they use what they produce on-site. A system without storage exports more of its midday output, so a panels-only bid should show how much of your usage it covers directly and what the remaining PG&E and MCE bill would be."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "santa-monica": {
    "name": "Santa Monica",
    "county": "Los Angeles County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Santa Monica is SCE territory with Clean Power Alliance as the city's community choice provider since 2019, and CPA's default plan here is 100% Green Power. On a solar bill, CPA credits the generation side and SCE the delivery side, with CPA's own annual true-up in April. A proposal should model both halves from your own statement.",
    "local": "Santa Monica issues express residential solar and battery permits through SolarAPP+: only licensed contractors registered with SolarAPP+ can apply, with no permit expeditors, and the building permit is filed online as a Solar Permit with Solar APP Plus. The City also requires every solar contractor to hold a valid Santa Monica business license, and says to switch the system on only after the City permit and SCE's interconnection are complete.",
    "example": "Santa Monica's own guide suggests getting at least three bids and at least three references from each bidder. Use it: ask each company for its Santa Monica business license number, its CSLB license class, whether its design qualifies for the SolarAPP+ express permit, and how much of your usage the system covers directly under net billing.",
    "checks": [
      [
        "Business license",
        "Confirm a valid Santa Monica business license; the City says to hire only contractors that hold one."
      ],
      [
        "License class",
        "Check the CSLB license at cslb.ca.gov: the City lists C-10, C-46 or B as the classes for solar work."
      ],
      [
        "Permit route",
        "Say whether the job uses the SolarAPP+ express permit, which excludes permit expeditors, or regular review."
      ],
      [
        "CPA and SCE",
        "Model CPA's Solar Billing Plan with its April true-up and SCE's delivery credits from your own bill."
      ]
    ],
    "sources": [
      {
        "label": "City of Santa Monica: how to submit for automated solar panel permits (SolarAPP+)",
        "url": "https://www.santamonica.gov/process-explainers/how-to-submit-for-automated-solar-panel-permits"
      },
      {
        "label": "City of Santa Monica: step-by-step guide to going solar",
        "url": "https://www.santamonica.gov/process-explainers/step-by-step-guide-to-going-solar"
      },
      {
        "label": "Clean Power Alliance: partner communities (Santa Monica default plan and start year)",
        "url": "https://cleanpoweralliance.org/"
      },
      {
        "label": "Clean Power Alliance: solar, net energy metering and Solar Billing Plan",
        "url": "https://cleanpoweralliance.org/solar/"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/los-angeles",
        "label": "Solar companies in Los Angeles, next door on LADWP"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a battery is worth adding"
      },
      {
        "href": "/solar-installers/how-to-verify-a-solar-contractor-california",
        "label": "How to check a solar contractor's license"
      }
    ],
    "faq": [
      [
        "How do I get a solar permit in Santa Monica?",
        "A licensed contractor registered with SolarAPP+ submits the design there and pays the $25 administrative fee SolarAPP+ collects, then creates a building permit application in the City's online portal as a Solar Permit with Solar APP Plus, enters the SolarAPP+ approval ID and document, pays the permit fees, and schedules the inspection at einspections.smgov.net."
      ],
      [
        "Can a permit expediter file a SolarAPP+ permit in Santa Monica?",
        "No. The City says only licensed contractors registered with SolarAPP+ may use the express route, with no permit expediters."
      ],
      [
        "Who supplies electricity in Santa Monica?",
        "SCE delivers the power and sends the bill. Clean Power Alliance has supplied the generation since 2019, and its default plan for Santa Monica is 100% Green Power."
      ],
      [
        "Does Santa Monica help homeowners go solar?",
        "The City runs a Solar Santa Monica program that offers individualized support from its solar experts through a request form, and its guide notes that both SCE and Clean Power Alliance offer help finding solar and storage contractors."
      ],
      [
        "Where can I recycle old solar panels in Santa Monica?",
        "The City says it piloted a first-in-the-state solar panel recycling project with the California Product Stewardship Council, funded by CalRecycle, and it publishes a list of universal waste haulers that handle solar modules."
      ]
    ],
    "answer": "Solar companies in Santa Monica can get an express permit through SolarAPP+ and the City's online portal, but only licensed contractors registered with SolarAPP+ may apply, and every contractor needs a Santa Monica business license. SCE delivers the power and Clean Power Alliance supplies it, on a 100% Green Power default, with an April true-up for solar customers. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Express permit",
        "value": "SolarAPP+, contractors only",
        "note": "No permit expeditors; $25 SolarAPP+ fee",
        "source": {
          "publisher": "City of Santa Monica",
          "date": "2026-09-23",
          "url": "https://www.santamonica.gov/process-explainers/how-to-submit-for-automated-solar-panel-permits"
        }
      },
      {
        "label": "Generation",
        "value": "Clean Power Alliance",
        "note": "Default 100% Green Power; serving since 2019",
        "source": {
          "publisher": "Clean Power Alliance",
          "date": "2026-09-23",
          "url": "https://cleanpoweralliance.org/"
        }
      },
      {
        "label": "Contractor requirement",
        "value": "Santa Monica business license",
        "note": "Plus a CSLB C-10, C-46 or B license",
        "source": {
          "publisher": "City of Santa Monica",
          "date": "2026-09-23",
          "url": "https://www.santamonica.gov/process-explainers/step-by-step-guide-to-going-solar"
        }
      }
    ],
    "sections": [
      {
        "heading": "Santa Monica's express solar permit",
        "paragraphs": [
          "The City's express route covers residential solar panel and energy storage systems. Qualifying projects complete every step online: SolarAPP+ runs the automated review and code check and collects a $25 administrative fee, and the contractor downloads the approval documents. In the City's portal, the contractor selects the Building tab, creates an application of the Solar Permit with Solar APP Plus type, provides the SolarAPP+ approval ID and document, and pays the permit fees at the end; confirmation of issuance follows payment. Inspections are scheduled through the City's e-inspections site.",
          "Only licensed contractors who have completed SolarAPP+ training and been approved may apply, and the City rules out permit expediters. Its homeowner guide adds the local conditions: hire only CSLB-licensed contractors with a C-10 and C-46, or a B, license, hire only contractors with a valid Santa Monica business license, and turn the system on only after the City permits are complete and SCE's interconnection process is done."
        ]
      },
      {
        "heading": "How Clean Power Alliance credits a Santa Monica system",
        "paragraphs": [
          "Clean Power Alliance has served Santa Monica since 2019 with 100% Green Power as the default plan. For systems approved after August 31, 2023, CPA's Solar Billing Plan charges for imported power on your time-of-use schedule and credits exports on the generation side of the bill with Energy Export Credits based on the CPUC's hourly Avoided Cost Calculator prices; SCE handles the delivery side, and customers who install before 2028 get SCE's Energy Export Bonus Credit on delivery for the first nine years.",
          "CPA trues up all solar customers once a year in April and pays Net Surplus Compensation at rates 10% higher than SCE's. Credits over $100 at the true-up are paid by check; smaller credits carry forward unless you ask for a check. The City's guide makes the practical point: under net billing, solar power used on site is worth more than power sent back, so shifting use into solar hours or adding storage improves the result."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "ontario": {
    "name": "Ontario",
    "county": "San Bernardino County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Ontario is Southern California Edison territory for both generation and delivery: the California Energy Commission's map shows no community choice provider over the city. A new system goes on SCE's Solar Billing Plan, so each proposal should use SCE's hourly export credits and your own SCE usage.",
    "local": "Ontario takes residential solar permits through Symbium, which gives instant plan review for roof-mounted solar and energy storage systems under 38.4 kW once the address is confirmed to be inside city limits. The Ontario Fire Department adds its own rules: three-foot access pathways, panels at least three feet below the ridge, and a Fire Department plan review when the array covers more than half of a home's roof.",
    "example": "Two Ontario bids can differ on roof coverage. Ask each bidder what share of your roof the array covers, since more than 50% triggers a Fire Department plan review, and how its layout keeps the required pathways from eave to ridge. Then compare the price and the remaining SCE bill on the same usage.",
    "checks": [
      [
        "Symbium route",
        "Confirm the address is inside Ontario city limits and the system qualifies for Symbium's instant review."
      ],
      [
        "Roof coverage",
        "State what share of the roof the array covers; over 50% needs Ontario Fire Department plan review."
      ],
      [
        "Fire pathways",
        "Show the three-foot eave-to-ridge pathways and the three-foot setback from the ridge on the layout."
      ],
      [
        "SCE billing",
        "Model SCE's Solar Billing Plan from your own bill."
      ]
    ],
    "sources": [
      {
        "label": "City of Ontario: apply for residential reroof and solar permits (Symbium)",
        "url": "https://www.ontarioca.gov/government/community-development/building/apply-residential-reroof-and-solar-permits"
      },
      {
        "label": "Ontario Fire Department: Fire Protection Standard E-006, solar photovoltaic systems (rev. January 7, 2025, PDF)",
        "url": "https://content.ontarioca.gov/sites/default/files/2025-01/Standard%20E-006%20Solar%20Photovoltaic%20Systems.pdf"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/blog/sce-settlement-bill",
        "label": "How SCE's once-a-year solar settlement works"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a battery is worth the cost"
      },
      {
        "href": "/blog/is-my-roof-good-for-solar-california",
        "label": "Checking whether your roof is ready for solar"
      }
    ],
    "faq": [
      [
        "How do I get a solar permit in Ontario, CA?",
        "Through the City's Symbium portal. After confirming the address is inside Ontario city limits, the applicant gets instant solar plan review for roof-mounted solar and energy storage systems under 38.4 kW. Projects outside that scope need regular review."
      ],
      [
        "What fire rules apply to rooftop solar in Ontario?",
        "The Ontario Fire Department's standard calls for three-foot-wide access pathways from eave to ridge (one per roof slope with panels on hip roofs, two on single-ridge roofs), panels at least three feet below the ridge, 18 inches from a hip or valley when panels sit on both sides of it, and a Fire Department plan review when the system covers more than 50% of a residential roof."
      ],
      [
        "Are solar panels worth it in Ontario, California?",
        "It depends on how much of the output your home uses. Ontario is SCE territory, and SCE says its Solar Billing Plan export credits are worth less than what you pay for grid power, higher in June through September and lower the rest of the year. Ask for an estimate built on your own 12 months of SCE bills, with and without a battery."
      ],
      [
        "How many solar permits does Ontario issue?",
        "The City reported 661 residential solar permits to the California Energy Commission for 2023, 84 of them with battery storage and 25 issued online."
      ]
    ],
    "answer": "Solar companies in Ontario apply through the City's Symbium portal, which gives instant plan review for roof-mounted solar and storage systems under 38.4 kW at addresses inside city limits. The Ontario Fire Department requires three-foot roof pathways and its own plan review when panels cover more than half the roof. SCE supplies and delivers the power. Compare at least three written bids built on your own SCE bill.",
    "keyFacts": [
      {
        "label": "Permit portal",
        "value": "Symbium",
        "note": "Instant review for rooftop solar and storage under 38.4 kW",
        "source": {
          "publisher": "City of Ontario",
          "date": "2026-09-23",
          "url": "https://www.ontarioca.gov/government/community-development/building/apply-residential-reroof-and-solar-permits"
        }
      },
      {
        "label": "Fire plan review",
        "value": "Over 50% of the roof",
        "note": "Ontario Fire Department Standard E-006",
        "source": {
          "publisher": "Ontario Fire Department",
          "date": "2026-09-23",
          "url": "https://content.ontarioca.gov/sites/default/files/2025-01/Standard%20E-006%20Solar%20Photovoltaic%20Systems.pdf"
        }
      },
      {
        "label": "Utility",
        "value": "SCE",
        "note": "No community choice provider",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      }
    ],
    "sections": [
      {
        "heading": "The Ontario Fire Department's solar standard",
        "paragraphs": [
          "Ontario's fire standard for solar photovoltaic systems, based on the 2022 California Fire Code, applies to systems on homes and businesses, with or without batteries. It exists to keep roof access, pathways to specific areas of the roof, smoke ventilation and emergency egress open for firefighters, and it requires markings on conduit and junction boxes so crews know not to cut them.",
          "For homes, a hip roof needs one three-foot clear pathway from eave to ridge on each slope that carries panels, and a single-ridge roof needs two. Panels stay at least three feet below the ridge, unless the Fire Department approves a method that allows two, and at least 18 inches from a hip or valley that has panels on both sides. When a system would cover more than 50% of a home's roof area, the Fire Department reviews the plans. The Department can grant exceptions, for example where there is access from an adjoining roof or ground-level access."
        ]
      },
      {
        "heading": "Symbium permits and SCE billing",
        "paragraphs": [
          "The City routes roof-mounted residential solar and energy storage systems under 38.4 kW, and detached single-family reroofs, through Symbium, which gives instant solar plan review once the address is verified to be inside city limits. The City's last report to the Energy Commission, for 2023, showed 661 residential solar permits with 25, about 4%, issued online. Ask each bidder which route your design will use.",
          "On the utility side, a new system goes on SCE's Solar Billing Plan. SCE locks export credit values for nine years from the year you start, gives customers who enroll before 2028 a bonus of about $0.04 per kWh, or about $0.09 if income-qualified, and sends one settlement bill a year in the month the system started service. The Base Services Charge is not reduced by solar credits."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "riverside-county": {
    "name": "Riverside County",
    "county": "Riverside County",
    "utility": "other",
    "sourceCheckedDate": "2026-09-23",
    "seo": {
      "description": "Riverside County solar companies: which utility serves each city (SCE, Riverside Public Utilities, IID and others), permit data, and mobile home rules."
    },
    "bill": "Riverside County has more electric utilities than most California counties. SCE serves most of it, but the City of Riverside, Banning, part of Moreno Valley and part of Corona run their own utilities, the Imperial Irrigation District serves the eastern Coachella Valley, and the Anza Electric Cooperative serves the Anza area. Three cities add a community choice provider on top of SCE. Every solar proposal has to start from the utility named on your own bill.",
    "local": "Each incorporated city issues its own solar permit, and the County of Riverside permits unincorporated areas such as Winchester, French Valley and Temescal Valley. The cities' reports to the California Energy Commission show how different they are: Banning, Canyon Lake, Cathedral City, Indio and La Quinta issued every 2024 residential solar permit online, while Calimesa and Palm Desert issued none online. Mobile and manufactured homes follow state rules instead, with an HCD permit.",
    "example": "Before comparing prices, ask each bidder to name your utility and its solar rules. A system sized for SCE's Solar Billing Plan in Menifee is not the right design for a Riverside Public Utilities home, where exports earn the City's avoided-cost rate and the system can be built to 150% of past use, or for an IID home in Indio. Then compare the permit route and the price.",
    "checks": [
      [
        "Which utility",
        "Name the utility on your bill (SCE, Riverside Public Utilities, IID, Moreno Valley Utility, Banning, Corona or Anza) and model its solar rules."
      ],
      [
        "Community choice",
        "In San Jacinto, Palm Springs or Rancho Mirage, show the community choice provider's generation credits separately from SCE's delivery."
      ],
      [
        "Permit office",
        "Say whether your city or the County of Riverside issues the permit, and whether it will be issued online."
      ],
      [
        "Manufactured home",
        "On a mobile or manufactured home, show the HCD permit; HCD's Southern Area Office is in Riverside."
      ]
    ],
    "region": {
      "heading": "Utilities and permit activity across Riverside County",
      "intro": [
        "On the California Energy Commission's utility map, SCE covers about 72% of the county's area and the Imperial Irrigation District most of the rest. Inside that, several cities run their own utilities: the City of Riverside covers about 99.5% of its own city area, Banning all of its city, and Moreno Valley Utility and the City of Corona's utility serve parts of their cities alongside SCE. The Commission's community choice layer shows San Jacinto Power over San Jacinto, Desert Community Energy over most of Palm Springs and the Rancho Mirage Energy Authority over most of Rancho Mirage.",
        "The permit column is each city's own report to the Energy Commission under SB 379: residential solar permits issued, the share with battery storage, and the share issued online, for 2024 unless another year is named."
      ],
      "places": [
        {
          "name": "Riverside",
          "slug": "riverside",
          "utility": "Riverside Public Utilities (city utility)",
          "generation": "Riverside Public Utilities",
          "permit": "City of Riverside"
        },
        {
          "name": "Corona",
          "slug": "corona",
          "utility": "SCE, or the City of Corona's utility in its service area",
          "generation": "The delivery utility",
          "permit": "City of Corona: 895 permits, 29% with storage, 5% online"
        },
        {
          "name": "Moreno Valley",
          "slug": "moreno-valley",
          "utility": "Split: Moreno Valley Utility or SCE",
          "generation": "The delivery utility",
          "permit": "City of Moreno Valley: 548 permits in 2023, 36% online"
        },
        {
          "name": "Banning",
          "utility": "City of Banning Electric Department",
          "generation": "City of Banning",
          "permit": "City of Banning: 225 permits, 1% with storage, all online"
        },
        {
          "name": "Menifee",
          "slug": "menifee",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Menifee: 1,140 permits, 88% with storage, 48% online"
        },
        {
          "name": "Temecula",
          "slug": "temecula",
          "utility": "SCE (a small area is SDG&E)",
          "generation": "The delivery utility",
          "permit": "City of Temecula: 794 permits, 10% with storage, 41% online"
        },
        {
          "name": "Murrieta",
          "slug": "murrieta",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Murrieta"
        },
        {
          "name": "Lake Elsinore",
          "slug": "lake-elsinore",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Lake Elsinore: 1,125 permits in 2023, all online"
        },
        {
          "name": "Beaumont",
          "slug": "beaumont",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Beaumont: 697 permits, 63% with storage, 26% online"
        },
        {
          "name": "San Jacinto",
          "slug": "san-jacinto",
          "utility": "SCE",
          "generation": "San Jacinto Power",
          "permit": "City of San Jacinto: 495 permits, 44% with storage, 20% online"
        },
        {
          "name": "Hemet, Perris, Wildomar, Canyon Lake",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "Each city; Canyon Lake: 136 permits, 80% with storage, all online"
        },
        {
          "name": "Palm Springs",
          "slug": "palm-springs",
          "utility": "SCE",
          "generation": "Desert Community Energy",
          "permit": "City of Palm Springs: 1,574 permits, 50% with storage, 82% online"
        },
        {
          "name": "Rancho Mirage",
          "utility": "SCE (a small area is IID)",
          "generation": "Rancho Mirage Energy Authority",
          "permit": "City of Rancho Mirage: 686 permits in 2023, 20% online"
        },
        {
          "name": "Palm Desert",
          "slug": "palm-desert",
          "utility": "SCE (a small area is IID)",
          "generation": "SCE",
          "permit": "City of Palm Desert: 435 permits, 59% with storage, none online"
        },
        {
          "name": "Cathedral City",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Cathedral City: 422 permits, 91% with storage, all online"
        },
        {
          "name": "Indio, Coachella, La Quinta",
          "utility": "Imperial Irrigation District",
          "generation": "IID",
          "permit": "Each city; Indio: 643 permits, all online; La Quinta: 325, all online"
        },
        {
          "name": "Unincorporated areas (Winchester, French Valley, Temescal Valley, Anza)",
          "slug": "winchester",
          "utility": "SCE; Anza Electric Cooperative in the Anza area",
          "generation": "The delivery utility",
          "permit": "County of Riverside"
        }
      ],
      "note": "Utility and community choice rows come from the Energy Commission's map, queried September 23, 2026; the shares are of city land area, not of homes. Permit counts are the cities' own SB 379 reports in the Commission's data file dated May 2026; cities with no report are shown without figures.",
      "hub": {
        "href": "/solar-savings/inland-empire",
        "label": "Inland Empire electric rates and bills by utility"
      }
    },
    "sources": [
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "Riverside Public Utilities: Self-Generation Program",
        "url": "https://riversideca.gov/utilities/residents/solar-info/self-generation-program"
      },
      {
        "label": "Riverside Public Utilities: Avoided Cost of Energy rate, effective July 1, 2026 (PDF)",
        "url": "https://riversideca.gov/utilities/sites/riversideca.gov.utilities/files/pdf/rates-electric/Electric-Rate-Schedule-ACOE-Attachment-1--Effective-07-01-26.pdf"
      },
      {
        "label": "Desert Community Energy",
        "url": "https://desertcommunityenergy.org/"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California HCD: advisory for manufactured home roof-mounted solar systems (PDF)",
        "url": "https://www.hcd.ca.gov/sites/default/files/docs/manufactured-and-mobilehomes/solar-pv-advisory.pdf"
      },
      {
        "label": "California HCD: modifications and alterations to manufactured homes (Southern Area Office)",
        "url": "https://www.hcd.ca.gov/manufactured-and-mobilehomes/modifying-mobilehome"
      },
      {
        "label": "California Government Code § 65850.52 (automated solar permitting, SB 379)",
        "url": "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52"
      }
    ],
    "projectLinks": [
      {
        "href": "/commercial-solar/companies-california",
        "label": "Commercial solar companies and what to ask them"
      },
      {
        "href": "/blog/sce-settlement-bill",
        "label": "How SCE's annual solar settlement works"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a home battery earns its place"
      }
    ],
    "faq": [
      [
        "Which utilities serve Riverside County?",
        "Mostly SCE. The City of Riverside, Banning, Moreno Valley (in part) and Corona (in part) run their own utilities, the Imperial Irrigation District serves Indio, Coachella, La Quinta and much of the eastern Coachella Valley, and the Anza Electric Cooperative serves the Anza area. San Jacinto Power, Desert Community Energy and the Rancho Mirage Energy Authority supply generation over SCE in their cities."
      ],
      [
        "Can I put solar on a mobile home in Riverside County?",
        "Yes, with a state permit. The California Department of Housing and Community Development says an HCD permit is required for any solar system installed on a manufactured home, and a permit is required before any alteration begins. HCD's Southern Area Office is at 3737 Main Street in Riverside. Confirm the company's CSLB license and HCD permit before signing."
      ],
      [
        "How does Riverside Public Utilities credit solar?",
        "New systems in the City of Riverside join RPU's Self-Generation Program: a system can be sized up to 150% of historic annual use, residential customers go on the Domestic Time of Use rate, and exported energy is credited at RPU's Avoided Cost of Energy rate, set at $0.0678 per kWh for July 1, 2026 through June 30, 2027, adjusted by time-of-delivery factors where they apply."
      ],
      [
        "Who issues solar permits in unincorporated Riverside County?",
        "The County of Riverside, for areas outside city limits such as Winchester, French Valley and Temescal Valley. Addresses inside a city go to that city's building department."
      ],
      [
        "What about commercial solar in Riverside County?",
        "The same utility map applies, but commercial projects follow different tariffs, sizes and permit paths than homes. The commercial solar guides on this site cover how to compare commercial installers and what a system costs per watt."
      ]
    ],
    "answer": "Solar companies in Riverside County have to design for whichever utility serves the address: SCE across most of the county, but city-owned utilities in Riverside, Banning and parts of Moreno Valley and Corona, IID in the eastern Coachella Valley, and community choice providers in San Jacinto, Palm Springs and Rancho Mirage. Each city issues its own permit, the County permits unincorporated areas, and manufactured homes need a state HCD permit. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "SCE share of county area",
        "value": "About 72%",
        "note": "IID, city utilities and a co-op cover the rest",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "RPU export credit",
        "value": "$0.0678 per kWh",
        "note": "Avoided Cost of Energy, July 2026 to June 2027",
        "source": {
          "publisher": "Riverside Public Utilities",
          "date": "2026-09-23",
          "url": "https://riversideca.gov/utilities/sites/riversideca.gov.utilities/files/pdf/rates-electric/Electric-Rate-Schedule-ACOE-Attachment-1--Effective-07-01-26.pdf"
        }
      },
      {
        "label": "Manufactured homes",
        "value": "HCD permit required",
        "note": "Southern Area Office in Riverside",
        "source": {
          "publisher": "California HCD",
          "date": "2026-09-23",
          "url": "https://www.hcd.ca.gov/sites/default/files/docs/manufactured-and-mobilehomes/solar-pv-advisory.pdf"
        }
      }
    ],
    "sections": [
      {
        "heading": "Why the utility decides the design here",
        "paragraphs": [
          "On an SCE account, a new system goes on the Solar Billing Plan: export credits vary by hour and season and are locked for nine years from the year you start, customers who enroll before 2028 get a bonus credit of about $0.04 per kWh, or about $0.09 if income-qualified, and the settlement bill comes once a year. SCE says those credits are worth less than the power you buy from the grid, so storage and self-use matter.",
          "Riverside Public Utilities works differently. Its Self-Generation Program lets a home size a system up to 150% of its historic annual use, puts residential solar customers on the Domestic Time of Use rate and credits exported energy at the Avoided Cost of Energy rate, $0.0678 per kWh from July 1, 2026 through June 30, 2027, adjusted by time-of-delivery factors. RPU says more than 4,700 homes and businesses installed solar under its earlier net metering program, and existing NEM agreements are not affected. A bid for a Riverside address that quotes SCE's credits is modeling the wrong utility, and the same goes for Banning, IID, Moreno Valley Utility and Corona's own utility."
        ]
      },
      {
        "heading": "Permits, and the manufactured-home exception",
        "paragraphs": [
          "Government Code section 65850.52 required cities of more than 50,000 people to offer an online, automated solar permit such as SolarAPP+ by September 30, 2023, and smaller cities by September 30, 2024. The 2024 reports to the Energy Commission show the uneven result across the county: all online in Banning, Canyon Lake, Cathedral City, Indio and La Quinta; 82% in Palm Springs; 48% in Menifee; 5% in Corona; none in Calimesa or Palm Desert. Storage shares ranged from 1% of Banning's permits to 91% of Cathedral City's.",
          "Searches for solar on mobile and manufactured homes in Riverside County are common, and those homes follow state rules. The Department of Housing and Community Development requires an HCD permit for any solar system on a manufactured home and a permit before any alteration begins; its advisory warns that damage from poor installation on those roofs is not visible and tells owners to check the contractor's CSLB license and HCD permit first. HCD's Southern Area Office is at 3737 Main Street in Riverside."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "high-desert": {
    "name": "High Desert",
    "county": "San Bernardino and Los Angeles counties",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "seo": {
      "title": "High Desert Solar Companies: How to Compare Quotes (2026)",
      "description": "High Desert solar companies: SCE and the local CCAs (Apple Valley, Palmdale, Lancaster), who permits Helendale or Hesperia, and manufactured home rules.",
      "h1": "Solar Companies in the High Desert: How to Compare Solar Panel Quotes"
    },
    "bill": "Almost the whole High Desert is Southern California Edison territory, from Barstow and Hesperia to Lancaster and Twentynine Palms. What changes is the generation provider: Apple Valley, Palmdale and Lancaster each have a community choice program on the SCE bill, unincorporated Antelope Valley areas such as Quartz Hill are served by Clean Power Alliance, and Victorville's own utility serves a small part of that city. Start every quote from the names on your bill.",
    "local": "Each city and town issues its own solar permit, and the two counties permit everything else: San Bernardino County for places such as Helendale, Phelan, Oak Hills and Lucerne Valley, through its EZ Online Permitting portal and SolarAPP+, and Los Angeles County for unincorporated Antelope Valley. San Bernardino County is explicit that roof-mounted solar on a manufactured home must be permitted by the state Department of Housing and Community Development instead.",
    "example": "In the High Desert, the permit office and the generation provider can change within a few miles. Ask each bidder to write both at the top of the proposal, then compare how much of the output your home uses directly, since SCE says its export credits are worth less than the power you buy. For a manufactured home, the bid should name the HCD permit.",
    "checks": [
      [
        "Generation provider",
        "Name SCE, Apple Valley Choice Energy, Palmdale's EPIC, Lancaster Energy or Clean Power Alliance from your bill, and model its solar credits."
      ],
      [
        "Permit office",
        "Say whether your city or town, San Bernardino County (EZOP) or Los Angeles County issues the permit."
      ],
      [
        "Manufactured home",
        "On a manufactured home, show the HCD permit; San Bernardino County will not issue one for roof-mounted solar."
      ],
      [
        "County SolarAPP+ rules",
        "In unincorporated San Bernardino County, confirm a C-10 or C-46 license and no ballasted or building-integrated panels."
      ]
    ],
    "region": {
      "heading": "Providers and permit offices across the High Desert",
      "intro": [
        "On the California Energy Commission's utility map, SCE delivers power across the Victor Valley, the Barstow area, the Morongo Basin and the Antelope Valley. The Victorville Municipal Utilities Services area covers about 2% of Victorville. The Commission's community choice layer shows Apple Valley Choice Energy over Apple Valley, Lancaster Energy over Lancaster and Energy for Palmdale's Independent Choice over Palmdale, and a point check places Quartz Hill in Clean Power Alliance's area.",
        "The permit column is each jurisdiction's own report to the Energy Commission under SB 379: residential solar permits issued, the share with battery storage, and the share issued online, for 2024 unless another year is named."
      ],
      "places": [
        {
          "name": "Victorville",
          "slug": "victorville",
          "utility": "SCE (Victorville Municipal Utilities Services in part)",
          "generation": "The delivery utility",
          "permit": "City of Victorville: 1,000 permits, 77% with storage, all online"
        },
        {
          "name": "Apple Valley",
          "utility": "SCE",
          "generation": "Apple Valley Choice Energy",
          "permit": "Town of Apple Valley: 1,117 permits, 39% with storage, 95% online"
        },
        {
          "name": "Hesperia",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Hesperia: 920 permits, 50% with storage, 16% online"
        },
        {
          "name": "Adelanto",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Adelanto (no SB 379 report in the Commission's file)"
        },
        {
          "name": "Barstow",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Barstow: 162 permits, 77% with storage, none online"
        },
        {
          "name": "Helendale, Phelan, Oak Hills, Lucerne Valley",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "San Bernardino County, EZ Online Permitting with SolarAPP+"
        },
        {
          "name": "Lancaster",
          "slug": "lancaster",
          "utility": "SCE",
          "generation": "Lancaster Energy",
          "permit": "City of Lancaster"
        },
        {
          "name": "Palmdale",
          "utility": "SCE",
          "generation": "Palmdale EPIC Energy",
          "permit": "City of Palmdale: 969 permits in 2023, 8% with storage, 15% online"
        },
        {
          "name": "Quartz Hill and other unincorporated Antelope Valley",
          "utility": "SCE",
          "generation": "Clean Power Alliance",
          "permit": "Los Angeles County: 1,663 permits countywide in 2023, 34% online"
        },
        {
          "name": "Twentynine Palms, Yucca Valley",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "Each city or town; Twentynine Palms: 143 permits, all online"
        }
      ],
      "note": "\"High Desert\" has no official boundary; this table covers the Victor Valley, the Barstow area, the Morongo Basin and the Antelope Valley. Utility and CCA rows are from the Energy Commission's map, queried September 23, 2026; permit counts are the jurisdictions' own SB 379 reports in the Commission's data file dated May 2026.",
      "hub": {
        "href": "/solar-savings/inland-empire",
        "label": "Inland Empire electric rates and bills by utility"
      }
    },
    "sources": [
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "San Bernardino County EZ Online Permitting: Solar with SolarAPP+ (manufactured homes to HCD)",
        "url": "https://wp.sbcounty.gov/ezop/permits/solar-with-solarapp/"
      },
      {
        "label": "Apple Valley Choice Energy: FAQs",
        "url": "https://avchoiceenergy.com/faqs/"
      },
      {
        "label": "Palmdale EPIC Energy: FAQs",
        "url": "https://palmdaleepicenergy.com/about/faqs/"
      },
      {
        "label": "Clean Power Alliance: solar, net energy metering and Solar Billing Plan",
        "url": "https://cleanpoweralliance.org/solar/"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California HCD: advisory for manufactured home roof-mounted solar systems (PDF)",
        "url": "https://www.hcd.ca.gov/sites/default/files/docs/manufactured-and-mobilehomes/solar-pv-advisory.pdf"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/palm-desert",
        "label": "Palm Desert, for the low-desert Coachella Valley"
      },
      {
        "href": "/solar-installers/option-one-solar-review",
        "label": "Option One Solar, an Apple Valley installer, reviewed"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a battery makes sense"
      }
    ],
    "faq": [
      [
        "What is the best solar company in the High Desert?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar, written confirmation that they serve your address, and experience with your permit office, whether that is your city, San Bernardino County's EZ Online Permitting or Los Angeles County. Then compare at least three written bids for the same system built on your own SCE bill."
      ],
      [
        "Who issues solar permits in Helendale?",
        "Helendale is unincorporated, so San Bernardino County does, through its EZ Online Permitting portal. For a SolarAPP+ permit the County requires a permitted residential structure, a contractor with a C-10 or C-46 license, the SolarAPP+ approval document and specification sheet at submittal, and a smoke and carbon monoxide certification before the final inspection."
      ],
      [
        "Can I put solar on a manufactured home in the High Desert?",
        "Yes, but not with a county or city permit in San Bernardino County: the County says roof-mounted solar on a manufactured home must be permitted by the state Department of Housing and Community Development. HCD requires its permit for any solar system on a manufactured home and warns that damage from poor installation on those roofs is not visible."
      ],
      [
        "How does Apple Valley Choice Energy handle solar?",
        "Apple Valley Choice Energy serves addresses in the Town of Apple Valley, with SCE delivering the power and sending one bill that includes AVCE's generation charges. Under its net energy metering program, a month with more production than use leaves a bill credit for future months, and customers can receive cash back for excess energy."
      ],
      [
        "When does Palmdale's EPIC pay solar customers?",
        "EPIC serves all customers within Palmdale city limits, and its EPIC Empowerment program credits months when production exceeds use. If a customer has a credit of $100 or more during the October billing cycle, EPIC sends a check for that amount."
      ]
    ],
    "answer": "Solar companies in the High Desert work almost entirely on SCE's grid, but the generation provider and the permit office change from town to town: Apple Valley, Palmdale and Lancaster have their own community choice programs, San Bernardino County permits unincorporated places like Helendale through SolarAPP+ and its online portal, and manufactured homes need a state HCD permit. Compare at least three written bids built on your own SCE bill.",
    "keyFacts": [
      {
        "label": "Delivery utility",
        "value": "SCE",
        "note": "Victorville's own utility serves about 2% of that city",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Local CCAs",
        "value": "Apple Valley, Palmdale, Lancaster",
        "note": "Plus Clean Power Alliance in unincorporated LA County",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Manufactured homes",
        "value": "HCD permit",
        "note": "San Bernardino County does not permit roof-mounted solar on them",
        "source": {
          "publisher": "San Bernardino County",
          "date": "2026-09-23",
          "url": "https://wp.sbcounty.gov/ezop/permits/solar-with-solarapp/"
        }
      }
    ],
    "sections": [
      {
        "heading": "Community choice programs in the High Desert",
        "paragraphs": [
          "Apple Valley Choice Energy is the default generation provider for service addresses in the Town of Apple Valley. SCE keeps delivering the power, maintaining the lines and sending one bill with AVCE's generation charges on it. Solar customers on AVCE's net energy metering program get a bill credit in months when they produce more than they use, and can receive cash back for excess energy. Customers can opt out within the first 60 days; AVCE says those who leave later may be barred by SCE from returning for a year.",
          "Energy for Palmdale's Independent Choice, Palmdale EPIC Energy, covers everyone within Palmdale city limits and starts customers on EPIC Power. Its EPIC Empowerment solar program credits surplus months and mails a check to customers with a credit of $100 or more in the October billing cycle. In unincorporated Antelope Valley areas such as Quartz Hill, Clean Power Alliance supplies generation: its Solar Billing Plan credits exports at hourly avoided-cost values, trues up in April and pays net surplus 10% above SCE's rate. Lancaster Energy covers Lancaster on the Commission's map; ask the bidder to use its current solar terms from your bill."
        ]
      },
      {
        "heading": "San Bernardino County's SolarAPP+ route for unincorporated homes",
        "paragraphs": [
          "Helendale, Phelan, Oak Hills, Lucerne Valley and other unincorporated High Desert communities are permitted by San Bernardino County. Its SolarAPP+ path is limited to permitted residential structures, excludes building-integrated and ballasted systems, and is open only to contractors holding C-10 or C-46 licenses. The contractor submits the design to SolarAPP+ and pays its processing fee, then applies in the County's EZ Online Permitting portal under Solar with SolarApp+, uploading the SolarAPP+ approval document and specification sheet; a smoke and carbon monoxide certification is due before the final inspection. Inspections can be on-site, virtual or self-inspections, scheduled in the County's EZ Inspect app.",
          "The cities report very different permit practices to the Energy Commission. In 2024, Victorville issued all 1,000 of its residential solar permits online and 77% included storage; Apple Valley issued 95% of 1,117 online; Hesperia issued 16% of 920 online; and Barstow issued none of 162 online. Ask each bidder how long its recent permits in your city took."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "kern-county": {
    "name": "Kern County",
    "county": "Kern County",
    "utility": "other",
    "sourceCheckedDate": "2026-09-23",
    "seo": {
      "description": "Kern County solar companies: PG&E in Bakersfield and the valley, SCE in Delano and the east, who permits your address, and 2024 permit data by city."
    },
    "bill": "Kern County is split between two utilities, and the line runs through the valley. PG&E serves Bakersfield and most of the western valley floor, including Shafter, Wasco, Arvin, Taft and Buttonwillow; SCE serves Delano and the eastern desert and mountain towns, including Tehachapi, Ridgecrest, California City and Rosamond, and McFarland is split between them. No community choice provider operates in the county, so the utility on your bill sets the solar rules.",
    "local": "The City of Bakersfield and the other incorporated cities issue their own solar permits, and the County of Kern permits unincorporated communities such as Buttonwillow, Oildale, Rosedale, Lamont and Rosamond. The County reported to the California Energy Commission that all 461 of its 2024 residential solar permits were issued online, while Bakersfield, Shafter and Arvin reported none issued online that year.",
    "example": "Ask each Kern County bidder two questions before comparing prices: which utility's Solar Billing Plan the estimate uses, PG&E's or SCE's, and whether the City or the County will issue your permit. A Delano bid built on PG&E's rules, or a Buttonwillow bid that assumes Bakersfield's permit office, has not looked at your address.",
    "checks": [
      [
        "Which utility",
        "Name PG&E or SCE from your bill and use that utility's Solar Billing Plan; in McFarland, confirm the address."
      ],
      [
        "Permit office",
        "Say whether your city or the County of Kern issues the permit, and whether it will be issued online."
      ],
      [
        "Battery",
        "State usable battery kWh; 79% of Bakersfield's 2024 solar permits and 86% of Arvin's included storage."
      ],
      [
        "Settlement month",
        "Show when the annual true-up or settlement bill will come under your utility's plan."
      ]
    ],
    "region": {
      "heading": "PG&E, SCE and permit offices across Kern County",
      "intro": [
        "On the California Energy Commission's utility map, SCE covers a little over half of Kern County's land area, mostly the eastern desert and mountains, and PG&E a little under half, including most of the valley floor where most people live. The Commission's community choice layer shows no provider anywhere in the county.",
        "The permit column is each jurisdiction's own report to the Energy Commission under SB 379: residential solar permits issued, the share with battery storage, and the share issued online, for 2024 unless another year is named."
      ],
      "places": [
        {
          "name": "Bakersfield",
          "slug": "bakersfield",
          "utility": "PG&E",
          "generation": "PG&E",
          "permit": "City of Bakersfield: 1,160 permits, 79% with storage, none online (5,288 in 2023)"
        },
        {
          "name": "Shafter",
          "utility": "PG&E",
          "generation": "PG&E",
          "permit": "City of Shafter: 551 permits, 26% with storage, almost none online"
        },
        {
          "name": "Arvin",
          "utility": "PG&E",
          "generation": "PG&E",
          "permit": "City of Arvin: 258 permits, 86% with storage, none online"
        },
        {
          "name": "Taft",
          "utility": "PG&E",
          "generation": "PG&E",
          "permit": "City of Taft: 94 permits, 88% with storage, all online"
        },
        {
          "name": "Wasco",
          "utility": "PG&E",
          "generation": "PG&E",
          "permit": "City of Wasco"
        },
        {
          "name": "Buttonwillow, Oildale, Rosedale, Lamont",
          "utility": "PG&E",
          "generation": "PG&E",
          "permit": "County of Kern: 461 permits countywide, 49% with storage, all online"
        },
        {
          "name": "Delano",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Delano (no SB 379 report in the Commission's file)"
        },
        {
          "name": "McFarland",
          "utility": "Split: PG&E or SCE by address",
          "generation": "The delivery utility",
          "permit": "City of McFarland"
        },
        {
          "name": "Tehachapi",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Tehachapi: 48 permits, 69% with storage, 29% online"
        },
        {
          "name": "Ridgecrest, California City",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "Each city"
        },
        {
          "name": "Rosamond, Mojave, Boron, Lake Isabella",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "County of Kern"
        }
      ],
      "note": "Utility rows are from the Energy Commission's map, queried September 23, 2026; the county split is by land area, not by homes. Permit counts are the jurisdictions' own SB 379 reports in the Commission's data file dated May 2026.",
      "hub": {
        "href": "/solar-savings/central-valley",
        "label": "Central Valley electric rates and bills"
      }
    },
    "sources": [
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California Government Code § 65850.52 (automated solar permitting, SB 379)",
        "url": "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52"
      },
      {
        "label": "California HCD: advisory for manufactured home roof-mounted solar systems (PDF)",
        "url": "https://www.hcd.ca.gov/sites/default/files/docs/manufactured-and-mobilehomes/solar-pv-advisory.pdf"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-cost/bakersfield",
        "label": "What sets the price of solar in Bakersfield"
      },
      {
        "href": "/blog/why-is-my-pge-bill-so-high",
        "label": "Why a PG&E bill runs high"
      },
      {
        "href": "/blog/why-is-my-sce-bill-so-high",
        "label": "Why an SCE bill runs high"
      }
    ],
    "faq": [
      [
        "Who are the solar installers in Kern County?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that confirm in writing they serve your address and know your permit office, whether that is Bakersfield, another city or the County of Kern. Then compare at least three written bids for the same system built on your own PG&E or SCE bill."
      ],
      [
        "Is Kern County PG&E or SCE?",
        "Both. On the Energy Commission's map, PG&E serves Bakersfield and most of the western valley floor, including Shafter, Wasco, Arvin, Taft and Buttonwillow, while SCE serves Delano, Tehachapi, Ridgecrest, California City, Rosamond and the eastern desert. McFarland is split. Your bill settles it for one address."
      ],
      [
        "Which utility serves Delano?",
        "SCE. The Energy Commission's map places all of Delano in SCE territory, even though nearby Wasco, Shafter and Bakersfield are PG&E. A Delano system goes on SCE's Solar Billing Plan, and the City of Delano issues the building permit."
      ],
      [
        "Who issues solar permits in Buttonwillow?",
        "Buttonwillow is unincorporated, so the County of Kern does. The County reported that all 461 residential solar permits it issued in 2024 were issued online. Buttonwillow is PG&E territory, so the system goes on PG&E's Solar Billing Plan."
      ],
      [
        "Can I put solar on a manufactured home in Kern County?",
        "Yes, with a state permit. The California Department of Housing and Community Development says an HCD permit is required for any solar system installed on a manufactured home, and warns that damage from poor installation on those roofs is not visible."
      ]
    ],
    "answer": "Solar companies in Kern County have to start with the utility: PG&E serves Bakersfield and most of the western valley, including Buttonwillow, while SCE serves Delano and the eastern desert towns, and there is no community choice provider. Cities issue their own permits and the County of Kern permits unincorporated areas, which it reported issuing entirely online in 2024. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Utility split by area",
        "value": "About 53% SCE, 47% PG&E",
        "note": "No community choice provider in the county",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "County permits online",
        "value": "All 461 in 2024",
        "note": "Unincorporated Kern County",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Bakersfield permits with storage",
        "value": "79% in 2024",
        "note": "920 of 1,160 residential solar permits",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      }
    ],
    "sections": [
      {
        "heading": "Two utilities, two Solar Billing Plans",
        "paragraphs": [
          "Both of Kern County's utilities put new solar systems on a Solar Billing Plan, but the details differ. PG&E values credits and charges by when energy moves to or from the grid, by time of day, day of the week and season; it gives Energy Export Bonus Credits to customers who start before 2028, with the value set at permission to operate; and it closes each 12-month cycle with a True-Up statement. PG&E says customers save the most when they use the energy they produce on-site.",
          "SCE locks its export credit values for nine years from the year a customer starts, pays higher credits in June through September, adds a bonus of about $0.04 per kWh, or about $0.09 for income-qualified customers, for those who enroll before 2028, and sends one settlement bill a year in the month the system started service. SCE says its credits cannot pay the Base Services Charge. A proposal for a Delano home and one for a Bakersfield home should look different for these reasons alone."
        ]
      },
      {
        "heading": "What the permit reports show",
        "paragraphs": [
          "Government Code section 65850.52 required cities of more than 50,000 people to offer an online, automated solar permit by September 30, 2023 and smaller cities by September 30, 2024, and it exempts only cities of fewer than 5,000 people and counties of fewer than 150,000, with every city in them. Kern is not exempt. The 2024 reports to the Energy Commission show uneven adoption in Kern: the County and Taft issued every residential solar permit online, Tehachapi 29%, and Bakersfield, Shafter and Arvin none.",
          "The same reports show how common batteries have become in the valley. In 2024, 79% of Bakersfield's 1,160 residential solar permits, 86% of Arvin's and 88% of Taft's included storage, and so did 49% of the County's. Bakersfield's own permit count fell from 5,288 in 2023 to 1,160 in 2024. Ask each bidder how long its recent permits took with your permit office, and to show your bill with and without a battery."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "bellflower": {
    "name": "Bellflower",
    "county": "Los Angeles County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Bellflower is Southern California Edison territory for both generation and delivery: the California Energy Commission's map shows no community choice provider over the city. A new system goes on SCE's Solar Billing Plan, so each proposal should use SCE's hourly export credits and your own twelve months of SCE usage.",
    "local": "Since January 1, 2026, Bellflower has added roof requirements most cities do not have. Every solar permit needs the owner's written authorization and structural verification of the roof, and a C-39 roofing contractor must certify the roof's condition in writing at plan check and again before the final inspection, with at least a one-year warranty against leaks. Plans go through the City's Willdan Geocivix portal after a plan check number is issued by email.",
    "example": "Because Bellflower requires a roofing contractor's sign-off before and after the install, ask every bidder who provides it: its own C-39 license, a roofing partner, or you. A bid that leaves the roof certification out, or that assumes a recent re-roof you do not have, is not comparable with one that includes it.",
    "checks": [
      [
        "Roof certification",
        "Name the C-39 roofing contractor who certifies the roof at plan check and after installation, and include the one-year leak warranty."
      ],
      [
        "Structural verification",
        "Show the existing roof framing and confirm it supports the array, with any strengthening details."
      ],
      [
        "Owner authorization",
        "Include the City's letter of authorization signed by the property owner."
      ],
      [
        "SCE billing",
        "Model SCE's Solar Billing Plan from your own bill, with the nine-year credit lock."
      ]
    ],
    "sources": [
      {
        "label": "City of Bellflower Building and Safety: 2026 residential solar submittal instructions and PV requirements effective January 1, 2026 (PDF)",
        "url": "https://bellflower.ca.gov/Document%20Center/Department/Planning/Building%20Division/Documents%20and%20Resources/2026%20Residential%20Solar%20Submittal%20Instructions.pdf"
      },
      {
        "label": "City of Bellflower Building and Safety: documents and resources",
        "url": "https://www.bellflower.org/departments/planning/building___safety_division/documents___resources.php"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      }
    ],
    "projectLinks": [
      {
        "href": "/blog/is-my-roof-good-for-solar-california",
        "label": "Is your roof ready for solar?"
      },
      {
        "href": "/solar-companies/lakewood",
        "label": "Solar companies in neighboring Lakewood"
      },
      {
        "href": "/blog/sce-settlement-bill",
        "label": "How SCE's annual solar settlement works"
      }
    ],
    "faq": [
      [
        "How do I get a solar permit in Bellflower?",
        "The applicant emails the solar application to the City to get a plan check number, then uploads the plans in the Willdan Geocivix portal for review. After approval, the applicant prints two approved sets, makes an appointment with the Building Counter, pays the plan check and permit fees in person at City Hall, and receives the permit and job card."
      ],
      [
        "Why does Bellflower require a roofer to certify my roof?",
        "The City says its 2026 requirements address life-safety concerns from roof water leaks. A C-39 roofing contractor must confirm in writing at plan check that the roof covering is in good condition, and again before the final inspection that the roof was not compromised, with at least a one-year warranty against leaks. The first certification is waived if a complete re-roof permit was issued and finaled in the past five years."
      ],
      [
        "How do I schedule a solar inspection in Bellflower?",
        "By phone, at (562) 804-1424 extension 2230, once the permit is issued. Requests must be made by 3 p.m.; the City tries to schedule the inspection for the next business day but does not guarantee it."
      ],
      [
        "Who supplies electricity in Bellflower?",
        "SCE supplies and delivers it. The California Energy Commission's map shows no community choice provider over Bellflower, so SCE's Solar Billing Plan sets the solar credits."
      ]
    ],
    "answer": "Solar companies in Bellflower face roof rules that took effect January 1, 2026: a C-39 roofing contractor must certify the roof before and after the install, with a one-year leak warranty, and the owner must authorize the permit in writing. Plans are reviewed through the City's Willdan Geocivix portal, and fees are paid in person. SCE supplies and delivers the power. Compare at least three written bids built on your own SCE bill.",
    "keyFacts": [
      {
        "label": "Roof certification",
        "value": "C-39 roofer, before and after",
        "note": "At least a 1-year leak warranty; effective Jan. 1, 2026",
        "source": {
          "publisher": "City of Bellflower",
          "date": "2026-09-23",
          "url": "https://bellflower.ca.gov/Document%20Center/Department/Planning/Building%20Division/Documents%20and%20Resources/2026%20Residential%20Solar%20Submittal%20Instructions.pdf"
        }
      },
      {
        "label": "Plan review portal",
        "value": "Willdan Geocivix",
        "note": "Plan check number by email first; fees paid at City Hall",
        "source": {
          "publisher": "City of Bellflower",
          "date": "2026-09-23",
          "url": "https://bellflower.ca.gov/Document%20Center/Department/Planning/Building%20Division/Documents%20and%20Resources/2026%20Residential%20Solar%20Submittal%20Instructions.pdf"
        }
      },
      {
        "label": "Utility",
        "value": "SCE",
        "note": "No community choice provider",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      }
    ],
    "sections": [
      {
        "heading": "Bellflower's 2026 roof and permit requirements",
        "paragraphs": [
          "The City's minimum additional requirements for solar PV permits took effect on January 1, 2026. Before the permit is issued, the property owner must authorize it in writing, and the plans must describe the existing roof framing, with member types, sizes, spans and spacing, and verify that the roof will carry the new system, adding framing plans for any strengthening. At plan check, a C-39 roofing contractor must confirm in writing that the roof covering shows no deterioration and is in good condition; that step is waived if a complete re-roof permit was issued and finaled within the past five years.",
          "Before the final building inspection, a C-39 roofing contractor must confirm in writing that the whole roof is in acceptable condition after the installation and was not compromised, with at least a one-year warranty against leaks or product replacement. Any electrical work beyond the direct connection into the existing panel must be done by a licensed individual or electrical contractor, and any related gas or water plumbing by licensed plumbers. The Building Official can waive requirements only for cause."
        ]
      },
      {
        "heading": "Filing, fees and inspections",
        "paragraphs": [
          "The process starts by email: the applicant sends the solar application to the City's permit technicians and receives a plan check number. Plans are then uploaded to the Willdan Geocivix portal as multi-page PDFs by discipline, with calculations and specifications as separate files, and review comments come back by email for resubmittal through the same portal. Plan check and permit fees are paid after approval, in person at City Hall, at an appointment with the Building Counter, where the approved sets are stamped and the permit and job card are issued.",
          "Inspections are requested by phone once the permit is issued, by 3 p.m. for a next-business-day attempt. On the utility side, a new system goes on SCE's Solar Billing Plan: export credits vary by hour and season, SCE locks their values for nine years from the year you start, and customers who enroll before 2028 get a bonus credit of about $0.04 per kWh, or about $0.09 if income-qualified."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "brentwood": {
    "name": "Brentwood",
    "county": "Contra Costa County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Brentwood is PG&E territory from edge to edge on the California Energy Commission's utility map, and no community choice provider serves the city. That makes a Brentwood solar bill simpler than one in Oakley or Pittsburg, where MCE supplies the generation: PG&E charges for both generation and delivery, and PG&E's Solar Billing Plan values every kWh you send back. Have each bidder model that plan from twelve months of your own usage.",
    "local": "Brentwood told the Energy Commission that SolarAPP+ is its automated solar permit platform. The SolarAPP+ program lists Brentwood as accepting solar with battery storage and main panel upgrades, but not a main breaker derate, the trick of fitting solar onto an existing panel by installing a smaller main breaker. A design that depends on a derate needs the City's regular plan review, so ask each bidder which route its design takes and how long that route has recently taken.",
    "example": "Brentwood homes put a battery on nearly three in four of their 2024 solar permits, so expect most bids to include one. Ask each bidder to price solar alone and solar with the battery, and to show the battery's usable kWh, the circuits it backs up and how it will run between 4 and 9 p.m., when PG&E says Solar Billing Plan customers can save by using less from the grid.",
    "checks": [
      [
        "PG&E only",
        "Model PG&E's Solar Billing Plan for both generation and delivery; no MCE credits apply inside Brentwood."
      ],
      [
        "Main panel",
        "Say whether the design needs a panel upgrade, which SolarAPP+ can include, or a main breaker derate, which goes to regular review."
      ],
      [
        "Battery scope",
        "Show usable kWh, the backed-up circuits and how the battery is set to run from 4 to 9 p.m."
      ],
      [
        "City or county",
        "Confirm the address is inside Brentwood; unincorporated neighbors are permitted by Contra Costa County and served by MCE."
      ]
    ],
    "sources": [
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "MCE: service area (member cities, towns and counties)",
        "url": "https://www.mcecleanenergy.org/service-area/"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SolarAPP+: where SolarAPP+ is available, with the project types each jurisdiction accepts",
        "url": "https://www.gosolarapp.org/where-is-solarapp-available"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      },
      {
        "label": "U.S. Census Bureau TIGERweb: incorporated place boundaries, queried 2026-09-23",
        "url": "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Places_CouSub_ConCity_SubMCD/MapServer"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/antioch",
        "label": "Antioch next door, also outside MCE"
      },
      {
        "href": "/blog/pge-solar-billing-plan",
        "label": "How PG&E's Solar Billing Plan credits exports"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a home battery is worth adding"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Brentwood, CA?",
        "This site does not rank them, and a company that ranks well online has not shown that it serves your street. Shortlist companies with a CSLB license covering solar that are registered with SolarAPP+ and will confirm your address in writing, then compare at least three written bids for the same system, each built on your own PG&E usage."
      ],
      [
        "Does MCE serve Brentwood?",
        "No. MCE's list of member communities names Concord, Oakley, Pittsburg, Walnut Creek and other Contra Costa cities, and unincorporated Contra Costa County, but not Brentwood or Antioch, and the Energy Commission's map shows no community choice provider over the city. An address just outside the city limits in unincorporated Contra Costa County is MCE territory, so read the provider on the bill."
      ],
      [
        "How many solar permits does Brentwood issue?",
        "Brentwood reported 123 residential solar permits to the California Energy Commission for 2023 and 574 for 2024. Of the 2024 permits, 415, about 72%, included battery storage, and 140, about 24%, were issued online."
      ],
      [
        "Is this the page for Brentwood in Los Angeles?",
        "No. This page covers the City of Brentwood in Contra Costa County. Brentwood in Los Angeles is a neighborhood inside the City of Los Angeles on the Census Bureau's boundary map, and the Energy Commission's map puts it in LADWP territory, so its permits and solar rules are the ones on the Los Angeles page."
      ]
    ],
    "answer": "Solar companies in Brentwood, the Contra Costa County city, permit a home system through SolarAPP+ and connect it to PG&E. Brentwood is not an MCE member, so unlike Oakley, Pittsburg or Concord, PG&E supplies the generation as well as the delivery, and PG&E's Solar Billing Plan sets what your exports earn. Compare at least three written bids built on your own PG&E bill.",
    "keyFacts": [
      {
        "label": "Generation",
        "value": "PG&E",
        "note": "Brentwood is not an MCE member city",
        "source": {
          "publisher": "MCE",
          "date": "2026-09-23",
          "url": "https://www.mcecleanenergy.org/service-area/"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "574",
        "note": "72% with storage, 24% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Automated permit",
        "value": "SolarAPP+",
        "note": "Storage and panel upgrades accepted; no main breaker derate",
        "source": {
          "publisher": "SolarAPP+",
          "date": "2026-09-23",
          "url": "https://www.gosolarapp.org/where-is-solarapp-available"
        }
      }
    ],
    "sections": [
      {
        "heading": "Why a Brentwood bill is PG&E from top to bottom",
        "paragraphs": [
          "MCE supplies generation across much of Contra Costa County. Its list of member communities names Concord, Danville, Martinez, Oakley, Pittsburg, San Ramon, Walnut Creek and others, plus unincorporated Contra Costa County. Brentwood and Antioch are not on it, and the Energy Commission's community choice layer shows no provider over either city. So a Brentwood home buys its generation from PG&E, and MCE's surplus bonus, which MCE pays on top of the standard Net Surplus Compensation rate, is not part of a Brentwood proposal.",
          "Under PG&E's Solar Billing Plan you receive a monthly statement with the month's charges and export credits, then a True-Up statement at the end of each 12-month cycle that applies accumulated credits and any Net Surplus Compensation. Customers who start on the plan before 2028 also receive Energy Export Bonus Credits, with the value set when the system receives permission to operate. A bid that quotes MCE credits for a Brentwood address, or that leaves the bonus credits out, is not modeling your bill."
        ]
      },
      {
        "heading": "Brentwood's permits, by the numbers",
        "paragraphs": [
          "Brentwood's reports to the Energy Commission under SB 379 show how fast home solar grew here: 123 residential solar permits in 2023 and 574 in 2024. Storage went from about 41% of permits to 72%, and the share issued online went from about 8% to 24%, so most 2024 projects still went through staff review rather than an instant approval. Ask a bidder whose design is SolarAPP+-eligible whether it will use that route, and ask one whose design is not what the City's review has recently taken.",
          "Contra Costa County permits the unincorporated communities around the city, and it also reported SolarAPP+ as its platform. The County told the Commission it issued 1,748 residential solar permits in 2024, every one of them online. If a bidder says your job is simpler across the city line, check which office actually has jurisdiction over your parcel before comparing timelines."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "antioch": {
    "name": "Antioch",
    "county": "Contra Costa County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Antioch is PG&E territory on the California Energy Commission's utility map, and no community choice provider serves the city: MCE's member list stops at Pittsburg and Oakley on either side. PG&E therefore charges for both generation and delivery, and PG&E's Solar Billing Plan values what you export. Each bidder should model that plan, including PG&E's Energy Export Bonus Credits for customers who start before 2028, from your own twelve months of usage.",
    "local": "Antioch's instant route runs through SolarAPP+: the contractor submits the design, pays SolarAPP+'s $25 processing fee, downloads the approval and uploads it to Citizen Access, the City's permitting portal, where the permit fees are paid. Once the documents are in and the fees paid, the City says the Instant Solar permit is issued automatically. Only registered contractors whose projects meet the SolarAPP+ eligibility checklist can use it.",
    "example": "Because almost every 2024 Antioch permit included storage, a solar-only bid and a solar-plus-battery bid can differ by the price of a battery. Ask for both, priced separately, with the battery's usable kWh and backed-up circuits, and compare what each leaves on your PG&E bill under the Solar Billing Plan rather than a single savings figure.",
    "checks": [
      [
        "Instant permit",
        "Say whether the design meets the SolarAPP+ checklist and will use Citizen Access, or needs regular review."
      ],
      [
        "Inspection papers",
        "Confirm the crew will have the printed SolarAPP+ inspection checklist, single-line diagram and permit card on site."
      ],
      [
        "PG&E plan",
        "Model PG&E's Solar Billing Plan for generation and delivery; MCE credits do not apply in Antioch."
      ],
      [
        "Battery",
        "Price the battery as its own line and state usable kWh and the circuits it backs up."
      ]
    ],
    "sources": [
      {
        "label": "City of Antioch: SolarAPP+ (instant solar permits)",
        "url": "https://www.antiochca.gov/community-development-department/building-division/solar-permits/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "MCE: service area (member cities, towns and counties)",
        "url": "https://www.mcecleanenergy.org/service-area/"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/brentwood",
        "label": "Brentwood, the other PG&E-only city in East County"
      },
      {
        "href": "/solar-companies/concord",
        "label": "Concord, where MCE supplies the generation"
      },
      {
        "href": "/battery/how-many-batteries-do-i-need-california",
        "label": "How much battery a home actually needs"
      }
    ],
    "faq": [
      [
        "Who are the best solar companies in Antioch?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that are registered with SolarAPP+ and will confirm in writing that they serve your address. Then compare at least three written bids for the same system, each built on your own PG&E bill."
      ],
      [
        "Does Antioch have a community choice energy provider?",
        "No. MCE serves Pittsburg, Oakley, Concord and unincorporated Contra Costa County, but its list of member communities does not include Antioch, and the Energy Commission's map shows no provider over the city. PG&E supplies both generation and delivery."
      ],
      [
        "How do I get an instant solar permit in Antioch?",
        "Your contractor submits the project in SolarAPP+, pays the $25 processing fee, downloads the approval documents and uploads them to the City's Citizen Access portal, then pays the permit fees there. When everything is uploaded and paid, the permit is issued automatically."
      ],
      [
        "How many solar permits does Antioch issue?",
        "Antioch reported 279 residential solar permits to the California Energy Commission for 2023 and 1,306 for 2024. Of the 2024 permits, 1,172, about 90%, included battery storage, and 490, about 38%, were issued online."
      ]
    ],
    "answer": "Solar companies in Antioch get an instant permit through SolarAPP+ and the City's Citizen Access portal for eligible rooftop systems, and connect them to PG&E. Antioch is not an MCE member, unlike Pittsburg next door, so PG&E supplies the generation and its Solar Billing Plan sets your export credits. Nine in ten Antioch permits in 2024 included a battery. Compare at least three written bids built on your own PG&E bill.",
    "keyFacts": [
      {
        "label": "Instant permit",
        "value": "SolarAPP+ and Citizen Access",
        "note": "$25 SolarAPP+ fee; permit issues automatically",
        "source": {
          "publisher": "City of Antioch",
          "date": "2026-09-23",
          "url": "https://www.antiochca.gov/community-development-department/building-division/solar-permits/"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "1,306",
        "note": "90% with storage, 38% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Generation",
        "value": "PG&E",
        "note": "Antioch is not an MCE member city",
        "source": {
          "publisher": "MCE",
          "date": "2026-09-23",
          "url": "https://www.mcecleanenergy.org/service-area/"
        }
      }
    ],
    "sections": [
      {
        "heading": "Antioch's instant solar permit",
        "paragraphs": [
          "The City describes its SolarAPP+ route as available only to registered contractors whose projects match the SolarAPP+ eligibility checklist, which covers the majority of residential, roof-mounted retrofit systems. The contractor submits the project to SolarAPP+ for review, pays the $25.00 processing fee, downloads the approval documents and uploads them into Citizen Access when applying. A one-time fee payment covers the solar permit, and once the documents are uploaded and the fees paid, the permit issues automatically.",
          "Every SolarAPP+ photovoltaic inspection needs a printed SolarAPP+ inspection checklist, a single-line diagram and the permit card on site. A missing document is a common reason an inspection has to be rescheduled, so it is fair to ask who on the installer's side is responsible for having them there."
        ]
      },
      {
        "heading": "What Antioch's permit numbers show",
        "paragraphs": [
          "Antioch's reports to the Energy Commission show one of the steepest climbs in the East Bay: 279 residential solar permits in 2023 and 1,306 in 2024. Battery storage went from about 47% of permits to about 90%, and the share issued online rose from about 6% to 38% as the instant route took hold.",
          "A battery on nine in ten permits says something about how Antioch systems are being sold under the Solar Billing Plan, which values the power you import and export separately, by the hour. A battery lets a home use its own midday solar in the evening instead of exporting it. Whether it pays for itself on your bill is a separate question, and each bidder should answer it with your usage, not a neighborhood average."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "novato": {
    "name": "Novato",
    "county": "Marin County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "A Novato bill has two halves: PG&E's delivery charges and MCE's generation charges, with MCE's generation credits shown on MCE's page of the statement. Novato is an MCE member, and MCE enrolls solar customers in its own program automatically: Net Energy Metering for systems that applied by April 14, 2023, and its Solar Billing Plan after that. Each bidder should model both halves from your own statement.",
    "local": "Novato's SolarAPP+ route checks code compliance for most residential roof-mounted systems, new or retrofit, with or without energy storage, and the City issues the permit instantly when the design passes. It is open only to contractors holding a General B, Solar C-46 or Electrical C-10 license, and the SolarAPP+ fee covers up to three revisions. Contractors may still choose the standard building permit, and owner-builders and projects that do not fit the checklist must use it.",
    "example": "Ask each Novato bidder whether its design fits the SolarAPP+ checklist. If it does, the permit can issue the same day; if not, the standard permit adds plan review and the schedule should show it. Then compare the MCE and PG&E bill each proposal leaves you with, not a single savings percentage.",
    "checks": [
      [
        "Permit route",
        "Say whether the job uses SolarAPP+ or the standard permit, and why."
      ],
      [
        "License",
        "Show the B, C-46 or C-10 license the SolarAPP+ route requires, and check it at cslb.ca.gov."
      ],
      [
        "MCE and PG&E",
        "Model MCE's generation credits and PG&E's delivery charges separately, under the plan that matches your application date."
      ],
      [
        "Battery",
        "State usable kWh and the circuits a battery backs up; SolarAPP+ covers systems with storage."
      ]
    ],
    "sources": [
      {
        "label": "City of Novato: residential solar and SolarAPP+",
        "url": "https://www.novato.gov/government/community-development/building-division/residential-solar"
      },
      {
        "label": "MCE: service area (member cities, towns and counties)",
        "url": "https://www.mcecleanenergy.org/service-area/"
      },
      {
        "label": "MCE: solar customers, NEM and Solar Billing Plan",
        "url": "https://www.mcecleanenergy.org/solar-customers/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SolarAPP+: where SolarAPP+ is available, with the project types each jurisdiction accepts",
        "url": "https://www.gosolarapp.org/where-is-solarapp-available"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/san-rafael",
        "label": "San Rafael, which files through OpenGov"
      },
      {
        "href": "/solar-companies/bay-area",
        "label": "Providers and permit offices across the Bay Area"
      },
      {
        "href": "/battery/add-powerwall-to-existing-solar",
        "label": "Adding a Powerwall to solar you already have"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Novato?",
        "This site does not rank them. For a Novato job, shortlist companies holding a CSLB license that covers solar, B, C-46 or C-10, since those are the licenses Novato's SolarAPP+ route accepts, and that confirm your address in writing. Then compare at least three written bids for the same system."
      ],
      [
        "Who supplies electricity in Novato?",
        "PG&E delivers it and sends the bill, and MCE, which names Novato among its Marin member communities, supplies the generation by default. The Energy Commission's utility map shows both over the whole city."
      ],
      [
        "Can a homeowner get a solar permit in Novato without a contractor?",
        "Yes, but not through SolarAPP+. The City says owner-builders and applications that do not match the SolarAPP+ checklist must apply through its standard building permit process."
      ],
      [
        "Does a Tesla Powerwall or other battery need its own permit in Novato?",
        "Not when it is part of a SolarAPP+ project: the City describes the route as covering residential roof-mounted systems with and without energy storage. A battery outside the checklist, or added later on its own, goes through the standard process."
      ],
      [
        "What does MCE pay for extra solar?",
        "At its annual cash-out each spring, MCE pays surplus generation at the Net Surplus Compensation rate plus $0.02 per kWh. For customers on its Net Energy Metering program, credits build at retail rates during the year and any left over are zeroed out at cash-out."
      ]
    ],
    "answer": "Solar companies in Novato can get an instant City permit through SolarAPP+ for most rooftop systems, with or without a battery, if they hold a B, C-46 or C-10 license. PG&E delivers the power and MCE supplies the generation, paying annual surplus at the Net Surplus Compensation rate plus $0.02 per kWh. Owner-builders use the City's standard permit. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Instant permit",
        "value": "SolarAPP+",
        "note": "B, C-46 or C-10 license; up to three revisions",
        "source": {
          "publisher": "City of Novato",
          "date": "2026-09-23",
          "url": "https://www.novato.gov/government/community-development/building-division/residential-solar"
        }
      },
      {
        "label": "Generation",
        "value": "MCE",
        "note": "PG&E delivers and bills",
        "source": {
          "publisher": "MCE",
          "date": "2026-09-23",
          "url": "https://www.mcecleanenergy.org/service-area/"
        }
      },
      {
        "label": "MCE surplus rate",
        "value": "NSC + $0.02/kWh",
        "note": "Paid at the annual spring cash-out",
        "source": {
          "publisher": "MCE",
          "date": "2026-09-23",
          "url": "https://www.mcecleanenergy.org/solar-customers/"
        }
      }
    ],
    "sections": [
      {
        "heading": "Who can use Novato's SolarAPP+ permit",
        "paragraphs": [
          "Novato adopted SolarAPP+ to give residential rooftop solar a code-compliance check without a full plan set. The City describes the route as covering the majority of residential, roof-mounted, new and retrofit photovoltaic systems with and without energy storage systems, and only projects that conform to the SolarAPP+ checklist can use it. When they do, the automated review replaces plan review and the City issues the permit instantly.",
          "The route is limited to contractors: the City names General B, Solar C-46 and Electrical C-10 licenses. It is not mandatory; a licensed contractor can still apply through the standard building permit process, and owner-builders and applications that do not fit the checklist must. A SolarAPP+ submission covers up to three revisions. Novato has not yet filed an annual SB 379 report with the Energy Commission, so there is no published count of how many local permits used the instant route."
        ]
      },
      {
        "heading": "How MCE credits a Novato solar home",
        "paragraphs": [
          "MCE enrolls solar customers automatically. Systems whose applications were completed by April 14, 2023 are on MCE's Net Energy Metering program: credits accrue at retail rates, offset generation charges during the year and are settled at an annual cash-out each spring. Any surplus is paid at the Net Surplus Compensation rate plus $0.02 per kWh, and remaining retail credits are zeroed out at that point. Later systems are on MCE's Solar Billing Plan on the generation side and PG&E's on the delivery side.",
          "PG&E still charges delivery on its own schedule and trues that up separately. A proposal that promises a large annual surplus should say what the surplus is worth at MCE's cash-out rate, and should show the PG&E delivery charges that remain."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "san-rafael": {
    "name": "San Rafael",
    "county": "Marin County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "San Rafael is an MCE member city, so the bill splits into PG&E delivery charges and MCE generation charges, and MCE's solar program sets the generation credits: Net Energy Metering for systems applied for by April 14, 2023, and MCE's Solar Billing Plan after that. MCE pays annual surplus at the Net Surplus Compensation rate plus $0.02 per kWh. Have each bidder model both halves from your own statement.",
    "local": "The City uses SolarAPP+ for automated plan review of eligible residential rooftop solar and energy storage, followed by a City permit application in OpenGov with the SolarAPP+ ID, approved documents and inspection checklist. Projects that do not qualify go through the standard building permit process in OpenGov. San Rafael building permits issued since January 1, 2023 are valid for two years.",
    "example": "If you plan panels, a battery and a service panel upgrade, ask whether all three will go on one San Rafael solar permit, which the City allows when the plans and permit description include them, and what extra permit fees that adds. A bid that leaves the panel upgrade for later may need a second permit and a second inspection.",
    "checks": [
      [
        "Two steps",
        "Show the SolarAPP+ approval and the City permit issued in OpenGov before any work begins."
      ],
      [
        "Full scope on one permit",
        "List panels, battery and any service panel upgrade in the permit description and plans."
      ],
      [
        "Permit life",
        "Plan the job to final within the two-year permit validity, or budget for a renewal fee."
      ],
      [
        "MCE credits",
        "Model MCE generation credits and PG&E delivery charges separately, for your application date."
      ]
    ],
    "sources": [
      {
        "label": "City of San Rafael: SolarAPP+ permits (OpenGov)",
        "url": "https://www.cityofsanrafael.org/solarapp-permits/"
      },
      {
        "label": "City of San Rafael: solar, battery and EV charger permit requirements",
        "url": "https://www.cityofsanrafael.org/renewable-energy/"
      },
      {
        "label": "MCE: service area (member cities, towns and counties)",
        "url": "https://www.mcecleanenergy.org/service-area/"
      },
      {
        "label": "MCE: solar customers, NEM and Solar Billing Plan",
        "url": "https://www.mcecleanenergy.org/solar-customers/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/novato",
        "label": "Novato, Marin's other SolarAPP+ city"
      },
      {
        "href": "/solar-companies/bay-area",
        "label": "MCE, Ava and other Bay Area providers compared"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a battery is worth the added cost"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in San Rafael?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that have filed San Rafael permits in OpenGov and confirm your address in writing, then compare at least three written bids for the same design built on your MCE and PG&E bill."
      ],
      [
        "Does SolarAPP+ issue the San Rafael permit?",
        "No. The City says SolarAPP+ performs the automated plan review for eligible projects, and a City of San Rafael permit must still be submitted and issued through OpenGov before work begins. The inspection is then requested from the permit record in OpenGov."
      ],
      [
        "Can a battery go on the same San Rafael permit as the panels?",
        "Yes. The City says solar panels, battery backup and service panel upgrades done at the same time can be included on the solar permit, as long as they are in the scope of work on the plans and in the permit description. Additional fees may apply for those items."
      ],
      [
        "How many solar permits does San Rafael issue?",
        "The City reported 455 residential solar permits to the California Energy Commission for 2022 and 430 for 2023, all issued online. About 27% of the 2023 permits included battery storage."
      ]
    ],
    "answer": "Solar companies in San Rafael run an eligible rooftop solar or battery project through SolarAPP+ for automated plan review, then apply for the City permit in OpenGov; SolarAPP+ does not issue the permit itself. PG&E delivers the power and MCE supplies the generation. Every San Rafael residential solar permit in 2022 and 2023 was issued online. Compare at least three written bids built on your own MCE and PG&E bill.",
    "keyFacts": [
      {
        "label": "Permit route",
        "value": "SolarAPP+, then OpenGov",
        "note": "SolarAPP+ reviews; the City permit issues in OpenGov",
        "source": {
          "publisher": "City of San Rafael",
          "date": "2026-09-23",
          "url": "https://www.cityofsanrafael.org/solarapp-permits/"
        }
      },
      {
        "label": "2023 solar permits",
        "value": "430",
        "note": "All issued online; 27% with storage",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Generation",
        "value": "MCE",
        "note": "PG&E delivers and bills",
        "source": {
          "publisher": "MCE",
          "date": "2026-09-23",
          "url": "https://www.mcecleanenergy.org/service-area/"
        }
      }
    ],
    "sections": [
      {
        "heading": "San Rafael's two-step solar permit",
        "paragraphs": [
          "San Rafael splits the job between two systems. First the contractor registers with SolarAPP+, uploads its business or contractor license information, selects the City of San Rafael and completes the automated review, paying the SolarAPP+ processing fee directly to SolarAPP+. When the design is approved, it saves the inspection checklist, approved documents and SolarAPP+ ID. Then it starts the residential solar permit application in OpenGov, enters the SolarAPP+ ID, uploads those documents and pays the City's permit fees.",
          "After the permit issues and the work is ready, the inspection request goes through the permit record in OpenGov, and the SolarAPP+ inspection checklist and approved plans must be available for the inspector. The City asks applicants not to put the panel count or kilowatts in the permit description, since that belongs on the plans; a description such as \"roof mounted solar & battery backup\" is enough."
        ]
      },
      {
        "heading": "What San Rafael's permits and bills look like",
        "paragraphs": [
          "The City reported 455 residential solar permits to the Energy Commission for 2022 and 430 for 2023, and every one was issued online. About 28% and 27% of them included battery storage, well below the storage share in East Bay cities such as Antioch or Brentwood the following year, so do not assume every San Rafael bid will or should include a battery.",
          "On the bill, MCE supplies generation by default and PG&E delivers the power. MCE customers with solar settle their generation credits at MCE's annual spring cash-out, where surplus is paid at the Net Surplus Compensation rate plus $0.02 per kWh, while PG&E trues up delivery on its own schedule. Ask each bidder to show both."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "napa": {
    "name": "Napa",
    "county": "Napa County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Napa is an MCE member city, so a Napa bill carries PG&E's delivery charges and MCE's generation charges on one statement. MCE enrolls solar customers in its own program automatically, Net Energy Metering for systems applied for by April 14, 2023 and its Solar Billing Plan after that, and pays annual surplus at the Net Surplus Compensation rate plus $0.02 per kWh. Have each bidder model both halves from your own bill.",
    "local": "The City's Building Division issues residential solar and battery backup permits over the counter to walk-in applicants, Monday through Thursday between 8:30 a.m. and 3:30 p.m. Before coming in, the applicant must confirm that the address is inside city limits, not the county, and that the contractor has an active City of Napa business license; the City issues no permit without one.",
    "example": "Because Napa permits are issued in person, ask each bidder who will take your plans to the counter, whether its business license is active, and how quickly after contract signing it can do so. The City asks for a signed contract with the homeowner at submittal, so the permit step comes after you commit, not before.",
    "checks": [
      [
        "City or county",
        "Confirm the address is inside City of Napa limits; county addresses go to Napa County."
      ],
      [
        "Business license",
        "Show an active City of Napa business license; no permit issues without one."
      ],
      [
        "Plan set",
        "Provide two full plan sets with structural calculations, single-line diagram and attachment details."
      ],
      [
        "MCE and PG&E",
        "Model MCE generation credits and PG&E delivery charges separately."
      ]
    ],
    "sources": [
      {
        "label": "City of Napa: Solar PV permits (over-the-counter residential solar and battery backup)",
        "url": "https://www.cityofnapa.org/1037/Solar-PV"
      },
      {
        "label": "MCE: service area (member cities, towns and counties)",
        "url": "https://www.mcecleanenergy.org/service-area/"
      },
      {
        "label": "MCE: solar customers, NEM and Solar Billing Plan",
        "url": "https://www.mcecleanenergy.org/solar-customers/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/vallejo",
        "label": "Vallejo, where MCE also supplies generation"
      },
      {
        "href": "/solar-companies/sonoma",
        "label": "Sonoma, the next valley west"
      },
      {
        "href": "/solar-installers/how-to-verify-a-solar-contractor-california",
        "label": "How to check a contractor's license before signing"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Napa?",
        "This site does not rank them. For a City of Napa job, shortlist companies with a CSLB license covering solar and an active City of Napa business license, since the City will not issue a permit without one, and get at least three written bids for the same system."
      ],
      [
        "Does Napa have instant online solar permits?",
        "The City's reports to the Energy Commission list no automated solar permitting platform for Napa, and its solar page describes residential solar and battery backup permits issued over the counter to walk-in applicants, Monday through Thursday from 8:30 a.m. to 3:30 p.m."
      ],
      [
        "What does a Napa solar permit application need?",
        "One application per project and two full sets of plans: a title page, site plan, structural calculations, single-line electrical diagram, attachment details, footing details for a ground-mounted system and the equipment cut sheets, plus a physical or electronic copy of the signed contract with the homeowner. Revisions need the original approved plans and the new ones."
      ],
      [
        "Who supplies electricity in Napa?",
        "PG&E delivers it and sends the bill, and MCE supplies the generation by default. MCE names American Canyon, Calistoga, Napa, St. Helena, Yountville and unincorporated Napa County among its members."
      ]
    ],
    "answer": "Solar companies in the City of Napa get residential solar and battery backup permits over the counter, by walk-in, Monday through Thursday, with an active City of Napa business license and a signed contract with the homeowner. The City reports no automated SolarAPP+-style platform to the Energy Commission. PG&E delivers the power and MCE supplies the generation. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Permit counter",
        "value": "Walk-in, Mon-Thu",
        "note": "8:30 a.m. to 3:30 p.m.; City business license required",
        "source": {
          "publisher": "City of Napa",
          "date": "2026-09-23",
          "url": "https://www.cityofnapa.org/1037/Solar-PV"
        }
      },
      {
        "label": "Automated platform",
        "value": "None reported",
        "note": "Per the City's SB 379 status with the Energy Commission",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/media/9247"
        }
      },
      {
        "label": "Generation",
        "value": "MCE",
        "note": "PG&E delivers and bills",
        "source": {
          "publisher": "MCE",
          "date": "2026-09-23",
          "url": "https://www.mcecleanenergy.org/service-area/"
        }
      }
    ],
    "sections": [
      {
        "heading": "Napa's over-the-counter solar permit",
        "paragraphs": [
          "Where many Bay Area cities now issue solar permits instantly online, the City of Napa's Building Division handles residential solar and battery backup systems at the counter. Walk-ins are taken Monday through Thursday between 8:30 a.m. and 3:30 p.m. The applicant brings one application per project and two full sets of plans: title page, site plan, structural calculations, single-line electrical diagram, attachment details, footing details for a ground mount, and the equipment cut sheets.",
          "Two requirements catch applicants out. The address must be inside city limits rather than unincorporated Napa County, and the contractor must hold an active City of Napa business license, without which no permit is issued. The City also wants a signed contract with the homeowner, in paper or electronic form, and any revision needs both the original approved plans and the new ones."
        ]
      },
      {
        "heading": "How MCE credits a Napa solar home",
        "paragraphs": [
          "MCE enrolls solar customers automatically. On its Net Energy Metering program, for systems whose applications were completed by April 14, 2023, credits build at retail rates through the year and are settled at MCE's annual spring cash-out, where surplus is paid at the Net Surplus Compensation rate plus $0.02 per kWh. Newer systems are on MCE's Solar Billing Plan for generation and PG&E's for delivery.",
          "PG&E still sends the bill and trues up its delivery charges on its own schedule. A proposal that shows one annual savings number is hiding that split; ask for the MCE and PG&E portions separately."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "fairfield": {
    "name": "Fairfield",
    "county": "Solano County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Fairfield is one of four Solano County places MCE serves, with Benicia, Vallejo and unincorporated Solano County. A Fairfield bill therefore carries PG&E's delivery charges and MCE's generation charges, and MCE's solar program sets the generation credits: Net Energy Metering for systems applied for by April 14, 2023 and MCE's Solar Billing Plan after that. MCE pays annual surplus at the Net Surplus Compensation rate plus $0.02 per kWh.",
    "local": "Fairfield's SolarAPP+ route is for the majority of residential roof-mounted retrofit systems. The contractor registers and submits the design on the SolarAPP+ website and pays its processing fee, then applies for a City of Fairfield SolarAPP+ permit in BUILD and schedules the inspection there. An active City of Fairfield business license is required, and a roof-mount project in a subdivision must first send its master solar plans to building@fairfield.ca.gov.",
    "example": "In a newer Fairfield subdivision, ask whether a builder's master solar plan already applies to your home before comparing bids for a different layout. Then have each bidder show the MCE generation credits and PG&E delivery charges its design leaves you with, since the two halves settle on different schedules.",
    "checks": [
      [
        "Business license",
        "Show an active City of Fairfield business license; the SolarAPP+ permit requires one."
      ],
      [
        "Subdivision",
        "In a subdivision, say whether the master solar plan has been sent to the Building Division."
      ],
      [
        "Panel work",
        "SolarAPP+ in Fairfield accepts panel upgrades but not a main breaker derate; say which the design needs."
      ],
      [
        "MCE and PG&E",
        "Model MCE generation credits and PG&E delivery charges separately."
      ]
    ],
    "sources": [
      {
        "label": "City of Fairfield: SolarAPP+ for solar installers",
        "url": "https://www.fairfield.ca.gov/government/city-departments/community-development/building-safety/solar-app"
      },
      {
        "label": "MCE: service area (member cities, towns and counties)",
        "url": "https://www.mcecleanenergy.org/service-area/"
      },
      {
        "label": "MCE: solar customers, NEM and Solar Billing Plan",
        "url": "https://www.mcecleanenergy.org/solar-customers/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SolarAPP+: where SolarAPP+ is available, with the project types each jurisdiction accepts",
        "url": "https://www.gosolarapp.org/where-is-solarapp-available"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/vacaville",
        "label": "Vacaville, the next city up I-80"
      },
      {
        "href": "/solar-companies/vallejo",
        "label": "Vallejo, Solano County's other MCE city on this site"
      },
      {
        "href": "/blog/pge-solar-billing-plan",
        "label": "How PG&E's Solar Billing Plan works"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Fairfield, CA?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar and an active City of Fairfield business license that confirm your address in writing, then compare at least three written bids for the same system built on your MCE and PG&E bill."
      ],
      [
        "Is Suisun City also served by MCE?",
        "No. MCE's list of Solano County members names Benicia, Fairfield, Vallejo and unincorporated Solano County, not Suisun City. A Suisun City home buys its generation from PG&E unless the bill says otherwise, so a bid copied from a Fairfield job would model the wrong provider."
      ],
      [
        "How do I get a SolarAPP+ permit in Fairfield?",
        "The contractor registers and submits the design through SolarAPP+ and pays its processing fee, then logs in to BUILD, applies for a City of Fairfield SolarAPP+ permit and schedules the inspection there. The City requires an active business license, and subdivision projects must first send their master solar plans to the Building Division."
      ],
      [
        "Who permits solar outside Fairfield's city limits?",
        "Solano County, for unincorporated addresses. The County told the Energy Commission it uses SolarAPP+ and reported 114 residential solar permits for 2025, 91% of them with battery storage and 41% issued online."
      ]
    ],
    "answer": "Solar companies in Fairfield submit an eligible rooftop design to SolarAPP+, then apply for the City's SolarAPP+ permit and schedule the inspection in BUILD, the City's permit system, with an active Fairfield business license. PG&E delivers the power and MCE supplies the generation; Suisun City next door is not an MCE member. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Permit route",
        "value": "SolarAPP+, then BUILD",
        "note": "Active Fairfield business license required",
        "source": {
          "publisher": "City of Fairfield",
          "date": "2026-09-23",
          "url": "https://www.fairfield.ca.gov/government/city-departments/community-development/building-safety/solar-app"
        }
      },
      {
        "label": "Generation",
        "value": "MCE",
        "note": "PG&E delivers and bills; not Suisun City",
        "source": {
          "publisher": "MCE",
          "date": "2026-09-23",
          "url": "https://www.mcecleanenergy.org/service-area/"
        }
      },
      {
        "label": "SolarAPP+ scope",
        "value": "Storage and panel upgrades",
        "note": "No main breaker derate",
        "source": {
          "publisher": "SolarAPP+",
          "date": "2026-09-23",
          "url": "https://www.gosolarapp.org/where-is-solarapp-available"
        }
      }
    ],
    "sections": [
      {
        "heading": "Fairfield's SolarAPP+ permit in BUILD",
        "paragraphs": [
          "Fairfield runs its automated solar permit in three steps. The contractor registers and submits the design on the SolarAPP+ website, where a processing fee is charged. It then logs in to BUILD, the City's permit system, and applies for a City of Fairfield SolarAPP+ permit with the approval, and finally schedules the inspection in BUILD. An active City of Fairfield business license is required.",
          "Two details are specific to Fairfield. A roof-mount project that is part of a subdivision must first submit its master solar plans to building@fairfield.ca.gov. And the SolarAPP+ program lists Fairfield as accepting solar with storage and main panel upgrades but not main breaker derates, so a design that fits solar onto an existing panel by downsizing the main breaker needs the City's regular review. Fairfield has not filed an annual SB 379 permit report in the Energy Commission's data file."
        ]
      },
      {
        "heading": "How MCE credits a Fairfield solar home",
        "paragraphs": [
          "MCE enrolls solar customers in its own program automatically. On its Net Energy Metering program, credits build at retail rates and are settled at MCE's annual spring cash-out, which pays surplus at the Net Surplus Compensation rate plus $0.02 per kWh; newer systems are on MCE's Solar Billing Plan for generation and PG&E's for delivery. PG&E still sends the one bill and trues up delivery separately.",
          "The provider changes at the city line. MCE's member list covers Fairfield and unincorporated Solano County but not Suisun City, so two homes a few blocks apart can have different generation providers. Read the provider name on your bill before trusting a proposal's savings figure."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "vallejo": {
    "name": "Vallejo",
    "county": "Solano County",
    "utility": "other",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Vallejo is an MCE member city, so most Vallejo bills carry PG&E delivery charges and MCE generation charges, and MCE's solar program sets the generation credits. The Energy Commission's service-territory map also places a small part of the city in the City of Pittsburg's electric territory rather than PG&E's. Read the utility and generation provider on your own bill before any bidder models savings.",
    "local": "The City's Building Division offers instant permit issuance through Symbium for contractors and homeowners applying for residential solar or energy storage permits under SB 379, and Vallejo reported Symbium to the Energy Commission as its automated platform. Other permits go through eTRAKiT, the City's online permitting system, which needs a registered account.",
    "example": "Only about 8% of Vallejo's 2024 solar permits were issued online, so the instant route is not yet the norm. Ask each bidder whether your design qualifies for Symbium's instant permit and, if not, how long its recent Vallejo permits took in regular review. Then compare the MCE and PG&E bill each proposal leaves you with.",
    "checks": [
      [
        "Utility on the bill",
        "Name PG&E and MCE, or the other utility if your bill shows one, and model that utility's rules."
      ],
      [
        "Permit route",
        "Say whether the design qualifies for the Symbium instant permit or goes through eTRAKiT review."
      ],
      [
        "MCE credits",
        "Show MCE generation credits and PG&E delivery charges separately, for your application date."
      ],
      [
        "Battery",
        "Price the battery as its own line, with usable kWh and backed-up circuits."
      ]
    ],
    "sources": [
      {
        "label": "City of Vallejo: Building Division (Symbium instant permits for SB 379 solar and storage, eTRAKiT)",
        "url": "https://www.vallejo.gov/our_city/departments_divisions/planning_development_services/building_division"
      },
      {
        "label": "MCE: service area (member cities, towns and counties)",
        "url": "https://www.mcecleanenergy.org/service-area/"
      },
      {
        "label": "MCE: solar customers, NEM and Solar Billing Plan",
        "url": "https://www.mcecleanenergy.org/solar-customers/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/fairfield",
        "label": "Fairfield, Solano County's other large MCE city"
      },
      {
        "href": "/solar-companies/napa",
        "label": "Napa, where permits are issued over the counter"
      },
      {
        "href": "/blog/pge-solar-billing-plan",
        "label": "How PG&E's Solar Billing Plan handles delivery credits"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Vallejo, CA?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that confirm in writing that they serve your address and know whether your design fits the City's Symbium instant permit, then compare at least three written bids for the same system."
      ],
      [
        "Does Vallejo have instant solar permits?",
        "Yes, for eligible projects. The City's Building Division says contractors and homeowners applying for residential solar or energy storage permits under SB 379 can apply for instant permit issuance through the Symbium portal. In 2024, 86 of Vallejo's 1,022 residential solar permits, about 8%, were issued online."
      ],
      [
        "Who supplies electricity in Vallejo?",
        "For most addresses, PG&E delivers it and MCE, which names Vallejo among its Solano County members, supplies the generation. The Energy Commission's map places a small part of Vallejo in the City of Pittsburg's electric service territory, so read the name on your bill."
      ],
      [
        "How many solar permits does Vallejo issue?",
        "Vallejo reported 1,022 residential solar permits to the California Energy Commission for 2024. Of those, 255, about 25%, included battery storage."
      ]
    ],
    "answer": "Solar companies in Vallejo can get an instant permit for residential solar or battery storage through the Symbium portal on the City's permit page, with eTRAKiT as the City's online permit system. PG&E delivers the power to almost all of the city and MCE supplies the generation; a small area is mapped to another utility. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Instant permit",
        "value": "Symbium",
        "note": "Residential solar and storage under SB 379",
        "source": {
          "publisher": "City of Vallejo",
          "date": "2026-09-23",
          "url": "https://www.vallejo.gov/our_city/departments_divisions/planning_development_services/building_division"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "1,022",
        "note": "25% with storage, 8% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Generation",
        "value": "MCE",
        "note": "PG&E delivers most of the city",
        "source": {
          "publisher": "MCE",
          "date": "2026-09-23",
          "url": "https://www.mcecleanenergy.org/service-area/"
        }
      }
    ],
    "sections": [
      {
        "heading": "Vallejo's Symbium instant permit",
        "paragraphs": [
          "Vallejo is one of the Bay Area cities that met SB 379 with Symbium rather than SolarAPP+. Its Building Division says contractors and homeowners seeking residential solar or energy storage permits under SB 379 can apply for instantaneous permit issuance through the Symbium portal linked from the City's page. Other building permits are filed in eTRAKiT, the City's online permitting system; a new user has to register before applying.",
          "The numbers suggest most Vallejo jobs still take the regular route. Of 1,022 residential solar permits the City reported to the Energy Commission for 2024, 86 were issued online. That can be because a design falls outside the automated checks or because the installer chose to file conventionally. Either way, it is fair to ask each bidder which route it will use for your roof and what that means for the schedule."
        ]
      },
      {
        "heading": "Who bills a Vallejo solar home",
        "paragraphs": [
          "MCE names Vallejo, Benicia, Fairfield and unincorporated Solano County as its Solano members, and on the Energy Commission's maps MCE and PG&E cover most of the city's land area. For those homes, MCE supplies generation and settles solar credits at its annual spring cash-out, paying surplus at the Net Surplus Compensation rate plus $0.02 per kWh for customers on its Net Energy Metering program, while PG&E delivers the power and trues up delivery separately.",
          "The same map puts a small part of Vallejo inside the City of Pittsburg's electric service territory. If your bill comes from a utility other than PG&E, the PG&E and MCE rules on this page do not describe it, and each bidder should use that utility's own solar terms."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "tracy": {
    "name": "Tracy",
    "county": "San Joaquin County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Tracy is one of the San Joaquin County cities Ava Community Energy serves, so a Tracy bill carries PG&E delivery charges and Ava generation charges. For systems on the Solar Billing Plan, Ava follows PG&E's policy closely but adds its own export bonus, trues up generation every April and pays balances over $100, while PG&E trues up delivery on its own schedule. Have each bidder model both halves.",
    "local": "Tracy's Building Safety Division takes photovoltaic project submittals at a dedicated address, photovoltaic@cityoftracy.org, and says the plan check fee is due before plans are reviewed and the balance of the permit fees when the permit is issued. Tracy reported a custom platform to the Energy Commission rather than SolarAPP+ or Symbium.",
    "example": "Ava pays an extra $0.025 per kWh for exports between 3 and 8 p.m. to customers who are not on CARE or FERA. A west-facing array or a battery set to discharge into the evening can earn more of that bonus, so ask each bidder how its design and battery settings treat those hours, and to show the Ava and PG&E portions of the bill separately.",
    "checks": [
      [
        "Submittal",
        "Say how the permit will be filed with Tracy Building Safety and who answers plan check comments."
      ],
      [
        "Ava bonus",
        "Show how much export falls between 3 and 8 p.m., where Ava adds $0.025 per kWh."
      ],
      [
        "Two true-ups",
        "Model Ava's April generation true-up and PG&E's delivery true-up separately."
      ],
      [
        "Battery",
        "Price the battery as its own line, with usable kWh and discharge settings."
      ]
    ],
    "sources": [
      {
        "label": "City of Tracy: Building Safety permit process and fees (photovoltaic submittals)",
        "url": "https://www.cityoftracy.org/Departments/Community-and-Economic-Development/Building-Safety/Permit-Process-and-Fees"
      },
      {
        "label": "Ava Community Energy: communities we serve",
        "url": "https://avaenergy.org/community/who-we-serve/"
      },
      {
        "label": "Ava Community Energy: Solar Billing Plan",
        "url": "https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/manteca",
        "label": "Manteca, the next San Joaquin County city east"
      },
      {
        "href": "/solar-companies/stockton",
        "label": "Stockton, also on Ava Community Energy"
      },
      {
        "href": "/battery/battery-payback-nem-3-california",
        "label": "How a battery pays back under the Solar Billing Plan"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Tracy, CA?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that have filed Tracy permits and confirm your address in writing, then compare at least three written bids for the same system, each built on your Ava and PG&E bill."
      ],
      [
        "Who supplies electricity in Tracy?",
        "PG&E delivers it and sends the bill, and Ava Community Energy, which names Tracy among the San Joaquin County communities it serves, supplies the generation by default. The Energy Commission's utility map shows Ava over almost all of the city."
      ],
      [
        "What does Ava pay for extra solar?",
        "On the Solar Billing Plan, Ava credits exports at the hourly export value, adds $0.025 per kWh for exports between 3 and 8 p.m. for customers not on CARE or FERA and $0.01 per kWh for CARE and FERA customers, and trues up every April. Balances under $100 roll over as bill credit; larger balances are paid, typically in June or July."
      ],
      [
        "How many solar permits does Tracy issue?",
        "Tracy reported 160 residential solar permits to the California Energy Commission for 2023 and 569 for 2024. About 86% of the 2024 permits included battery storage, and none of them was issued online, compared with about 83% online in 2023."
      ]
    ],
    "answer": "Solar companies in Tracy submit photovoltaic permit applications to the City's Building Safety Division, which takes them at photovoltaic@cityoftracy.org, and connect the system to PG&E. Ava Community Energy supplies the generation and adds its own export bonus for power sent to the grid between 3 and 8 p.m. Compare at least three written bids built on your own Ava and PG&E bill.",
    "keyFacts": [
      {
        "label": "Generation",
        "value": "Ava Community Energy",
        "note": "PG&E delivers and bills",
        "source": {
          "publisher": "Ava Community Energy",
          "date": "2026-09-23",
          "url": "https://avaenergy.org/community/who-we-serve/"
        }
      },
      {
        "label": "Ava evening bonus",
        "value": "$0.025 per kWh",
        "note": "Exports 3-8 p.m., non-CARE/FERA customers",
        "source": {
          "publisher": "Ava Community Energy",
          "date": "2026-09-23",
          "url": "https://avaenergy.org/your-energy-options/plans-and-rates/rates/solar-billing-plan/"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "569",
        "note": "86% with storage, none issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      }
    ],
    "sections": [
      {
        "heading": "How Ava credits a Tracy solar home",
        "paragraphs": [
          "Ava Community Energy is the default generation provider in most of Alameda and San Joaquin counties, and its list of communities names Tracy along with Lathrop, Stockton and unincorporated San Joaquin County. A Tracy customer whose system connected after April 14, 2023 is on the Solar Billing Plan: imports and exports are calculated separately each month, exports earn hourly export credits, and credits left after a month's charges roll forward.",
          "Ava adds two bonuses PG&E does not: an extra $0.01 per kWh on all exports for CARE and FERA customers, and an extra $0.025 per kWh on exports between 3 and 8 p.m. for everyone else. Ava trues up generation every April and pays surplus above $100 through its vendor, typically in June or July; smaller balances roll over as credit. PG&E's delivery true-up can fall in a different month, so a bid should show the two separately."
        ]
      },
      {
        "heading": "Tracy's permits, and a year that changed",
        "paragraphs": [
          "Tracy's Building Safety Division takes photovoltaic submittals at photovoltaic@cityoftracy.org. The City charges the plan check fee before plans are reviewed and the rest of the permit fees at issuance. Tracy reported a custom automated platform to the Energy Commission rather than SolarAPP+ or Symbium.",
          "Its SB 379 reports show a sharp shift. In 2023 the City reported 160 residential solar permits, about 83% issued online and 12% with storage. In 2024 it reported 569, none issued online and about 86% with storage. More projects, most of them with batteries, and all of them reviewed by staff: ask each bidder how long its recent Tracy permits took, and whether your design needs anything beyond a standard review."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "davis": {
    "name": "Davis",
    "county": "Yolo County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Davis is Valley Clean Energy territory on the Energy Commission's community choice map. VCE supplies the generation and PG&E delivers the power, handles billing and maintains the lines, so the bill has a PG&E section for transmission and delivery and a VCE section for generation. Solar customers in VCE territory are enrolled in VCE's own solar program automatically, unless they opt out to stay with PG&E.",
    "local": "Davis told the Energy Commission that SolarAPP+ is its automated solar permit platform, and the SolarAPP+ program lists the City as accepting solar with battery storage, main panel upgrades and main breaker derates. Davis has not filed an annual SB 379 permit report in the Commission's data file, so there is no published count of local permits. Ask each bidder which route its design takes and what its recent Davis permits took.",
    "example": "VCE's program changes the arithmetic slightly. It credits excess monthly generation at the retail rate plus one cent per kWh and pays annual surplus at PG&E's Net Surplus Compensation rate plus a cent, which VCE says typically runs 7 to 9 cents per kWh. Ask each bidder whether its savings figure uses VCE's terms or PG&E's.",
    "checks": [
      [
        "VCE or PG&E",
        "Say which provider's solar terms the savings figure uses; VCE is the default in Davis."
      ],
      [
        "Billing option",
        "State whether the account is on monthly or annual billing, since that sets VCE's cash-out month."
      ],
      [
        "Permit route",
        "Say whether the design fits SolarAPP+, including any panel upgrade or breaker derate."
      ],
      [
        "Battery",
        "Price the battery separately; VCE says it mirrors PG&E's rates for energy storage."
      ]
    ],
    "sources": [
      {
        "label": "Valley Clean Energy: solar customers and Net Energy Metering",
        "url": "https://valleycleanenergy.org/rates-billing/vce-solar/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SolarAPP+: where SolarAPP+ is available, with the project types each jurisdiction accepts",
        "url": "https://www.gosolarapp.org/where-is-solarapp-available"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/sacramento",
        "label": "Sacramento, across the causeway on SMUD"
      },
      {
        "href": "/blog/what-is-nem-true-up",
        "label": "What happens at a solar true-up"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "When a battery is worth adding"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Davis?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that confirm your address in writing and can explain VCE's solar program, then compare at least three written bids for the same system."
      ],
      [
        "Do I have to join Valley Clean Energy's solar program?",
        "No. VCE says solar customers in its territory are enrolled in its Net Energy Metering program automatically, but you may opt out to remain with PG&E at any time. If you are already a PG&E solar customer, VCE enrolls you after your next PG&E true-up so that you do not lose credits."
      ],
      [
        "When does VCE pay for surplus solar?",
        "At your PG&E true-up date if you are on annual billing, or in February if you are billed monthly. If you generated more than you used over the year, VCE pays PG&E's Net Surplus Compensation rate plus one cent per kWh, as a credit that can go toward VCE or PG&E charges."
      ],
      [
        "Will solar keep my Davis home powered during a PG&E shutoff?",
        "Not by itself. VCE notes that a solar home is still affected by a PG&E Public Safety Power Shutoff unless the system includes battery storage, and that most batteries provide a few hours of backup depending on size."
      ]
    ],
    "answer": "Solar companies in Davis permit home systems through SolarAPP+, which the City reported to the Energy Commission as its automated platform, and connect them to PG&E. Valley Clean Energy supplies the generation and pays solar customers a penny per kWh more than PG&E on excess monthly generation and at its annual cash-out. Compare at least three written bids built on your own VCE and PG&E bill.",
    "keyFacts": [
      {
        "label": "Generation",
        "value": "Valley Clean Energy",
        "note": "PG&E delivers, bills and maintains the lines",
        "source": {
          "publisher": "Valley Clean Energy",
          "date": "2026-09-23",
          "url": "https://valleycleanenergy.org/rates-billing/vce-solar/"
        }
      },
      {
        "label": "VCE solar bonus",
        "value": "1 cent per kWh",
        "note": "On excess monthly generation and at cash-out",
        "source": {
          "publisher": "Valley Clean Energy",
          "date": "2026-09-23",
          "url": "https://valleycleanenergy.org/rates-billing/vce-solar/"
        }
      },
      {
        "label": "Automated permit",
        "value": "SolarAPP+",
        "note": "Storage, panel upgrades and breaker derates accepted",
        "source": {
          "publisher": "SolarAPP+",
          "date": "2026-09-23",
          "url": "https://www.gosolarapp.org/where-is-solarapp-available"
        }
      }
    ],
    "sections": [
      {
        "heading": "How Valley Clean Energy treats a Davis solar home",
        "paragraphs": [
          "Every month the meter compares what your panels produced with what you used. When you produced more, VCE credits the excess at the full retail value plus a one-cent-per-kWh bonus, and the credit rolls forward on the VCE side of your bill to offset later usage or outstanding PG&E charges. Once a year VCE calculates the whole period: if you generated more than you used, it pays PG&E's Net Surplus Compensation rate plus one cent per kWh.",
          "The timing depends on your billing. On annual billing, VCE's cash-out falls on your PG&E true-up date; on monthly billing, it comes in February. Systems that started after April 2023 may be on VCE's version of the Solar Billing Plan, which VCE describes as similar to PG&E's but with the same one-cent bonus. PG&E still bills delivery, and still trues it up once a year, even if you produce more than you use."
        ]
      },
      {
        "heading": "Permits, shutoffs and batteries in Davis",
        "paragraphs": [
          "Davis reported SolarAPP+ to the Energy Commission as its SB 379 platform, and the SolarAPP+ program lists the City as accepting solar with storage, main panel upgrades and main breaker derates, a broader scope than some nearby cities allow. The City has not filed an annual permit report in the Commission's data file, so ask each bidder for its own recent Davis timelines rather than relying on a regional average.",
          "VCE is candid about one limit of solar alone: during a PG&E Public Safety Power Shutoff, a solar home loses power too unless it has a battery, and most batteries cover a few hours depending on size. VCE says it mirrors PG&E's rates for energy storage. If backup matters to you, ask for the battery as a separate line and the circuits it will carry."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "elk-grove": {
    "name": "Elk Grove",
    "county": "Sacramento County",
    "utility": "smud",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Elk Grove is entirely SMUD territory on the California Energy Commission's utility map, so neither PG&E's Solar Billing Plan nor a community choice provider applies. New systems go on SMUD's Solar and Storage Rate, which pays 9.6 cents per kWh for exported power at any hour or season, and SMUD caps system size at 110% of your last twelve months of use, or 120% with a battery. A proposal built on PG&E's export credits is modeling the wrong utility.",
    "local": "Elk Grove requires an approval letter from SMUD before any residential solar application is submitted, and all residential solar submittals go through eTRAKiT, the City's online permit system. For the SolarAPP+ route the contractor also needs an approval letter from the CCSD Fire Department, and the CCSD Fire approval is required whenever a battery backup system is installed.",
    "example": "Because SMUD limits the system to 110% of your past year's use, or 120% with a battery, two bids for the same Elk Grove home should land on similar sizes. If one is much larger, ask how it fits SMUD's limit. Then compare what each design exports at 9.6 cents against what it saves on power you would otherwise buy from SMUD.",
    "checks": [
      [
        "SMUD first",
        "Show SMUD's approval letter before the City application, and SMUD's interconnection fee in the price."
      ],
      [
        "Fire approval",
        "Include the CCSD Fire approval for a SolarAPP+ permit or any battery backup system."
      ],
      [
        "System size",
        "Size to SMUD's cap: 110% of the last 12 months' use, or 120% with a battery."
      ],
      [
        "Panel limits",
        "For SolarAPP+, stay within a 400 A main service and 225 A disconnect and busbar."
      ]
    ],
    "sources": [
      {
        "label": "City of Elk Grove: streamlining solar permitting with SolarAPP+ (SMUD and CCSD Fire approval letters)",
        "url": "https://elkgrove.gov/plan-review-and-permits/streamlining-solar-permitting-solarapp"
      },
      {
        "label": "City of Elk Grove: residential solar photovoltaic permits (eTRAKiT, review times, battery approvals)",
        "url": "https://elkgrove.gov/solar-and-electric-vehicle-ev-permits/residential-solar-photovoltaic-permits"
      },
      {
        "label": "SMUD: solar for your home (Solar and Storage Rate, sizing, interconnection fee)",
        "url": "https://www.smud.org/Going-Green/Solar-for-your-home"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      }
    ],
    "projectLinks": [
      {
        "href": "/blog/smud-solar-program",
        "label": "SMUD's solar program and what it pays"
      },
      {
        "href": "/solar-companies/sacramento",
        "label": "Sacramento, SMUD's home city"
      },
      {
        "href": "/solar-companies/galt",
        "label": "Galt, the next SMUD city south"
      }
    ],
    "faq": [
      [
        "Who are the best solar companies in Elk Grove?",
        "This site does not rank them. In Elk Grove, shortlist companies with a C-10 or C-46 license, the licenses SMUD says a solar contractor should hold, that have filed SMUD interconnection applications and Elk Grove permits before. Then compare at least three written bids built on your SMUD bill."
      ],
      [
        "Does SMUD have to approve my solar before the City permit?",
        "Yes. The City says an approval letter from SMUD is required before any residential solar application is submitted for review, and its SolarAPP+ steps list approval letters from both SMUD and the CCSD Fire Department."
      ],
      [
        "How long does an Elk Grove solar permit take?",
        "On the standard route the City asks you to allow at least three business days for the first plan review of a system up to 38.4 kW, and ten business days for a larger system. Eligible SolarAPP+ projects skip plan review; the contractor applies in eTRAKiT with the SolarAPP+ approval."
      ],
      [
        "What does SMUD pay for extra solar?",
        "On SMUD's Solar and Storage Rate, power you do not use or store is bought back at 9.6 cents per kWh, no matter the time of day or season. SMUD does not offer rebates for solar installations, but it offers battery storage incentives."
      ]
    ],
    "answer": "Solar companies in Elk Grove work with SMUD, not PG&E, and need an approval letter from SMUD before the City will accept a solar application; the CCSD Fire Department also signs off before a SolarAPP+ permit and whenever a battery is installed. The City issues SolarAPP+ permits through eTRAKiT for rooftop systems up to 38.4 kW. SMUD buys exported power at 9.6 cents per kWh. Compare at least three written bids built on your SMUD bill.",
    "keyFacts": [
      {
        "label": "Electric utility",
        "value": "SMUD",
        "note": "Approval letter required before the City application",
        "source": {
          "publisher": "City of Elk Grove",
          "date": "2026-09-23",
          "url": "https://elkgrove.gov/solar-and-electric-vehicle-ev-permits/residential-solar-photovoltaic-permits"
        }
      },
      {
        "label": "SMUD export rate",
        "value": "9.6 cents per kWh",
        "note": "Solar and Storage Rate, any hour or season",
        "source": {
          "publisher": "SMUD",
          "date": "2026-09-23",
          "url": "https://www.smud.org/Going-Green/Solar-for-your-home"
        }
      },
      {
        "label": "SolarAPP+ limit",
        "value": "38.4 kW",
        "note": "Rooftop, main dwelling; C-46, C-10 or B license",
        "source": {
          "publisher": "City of Elk Grove",
          "date": "2026-09-23",
          "url": "https://elkgrove.gov/plan-review-and-permits/streamlining-solar-permitting-solarapp"
        }
      }
    ],
    "sections": [
      {
        "heading": "SMUD, CCSD Fire and the City: three sign-offs",
        "paragraphs": [
          "An Elk Grove solar job touches three agencies. SMUD comes first: the City will not take a residential solar application without SMUD's approval letter, and SMUD's solar team handles that step. For the automated SolarAPP+ route, the City's steps also call for an approval letter from the CCSD Fire Department, and CSD Fire approval is required any time a battery backup system is installed.",
          "Only then does the permit itself come in. Every residential solar submittal goes through eTRAKiT. Eligible projects use SolarAPP+: main-dwelling rooftop systems up to 38.4 kilowatts, no ballasted or building-integrated panels, licensed C-46, C-10 or B contractors only, and service equipment up to a 400-amp main service with 225-amp disconnects and busbars. SolarAPP+ charges a $25 processing fee that covers up to three revisions. Other projects take plan review, which the City asks you to allow at least three business days for, or ten for a system over 38.4 kW."
        ]
      },
      {
        "heading": "How SMUD treats an Elk Grove solar home",
        "paragraphs": [
          "SMUD, the Sacramento Municipal Utility District, sets its own solar rules. New systems go on its Solar and Storage Rate, which buys exported power at 9.6 cents per kWh whatever the hour or season. SMUD lets a system be sized up to 110% of the last twelve months of consumption, or up to 120% on the Solar and Storage Rate if a battery is added, and it charges a one-time interconnection fee on every new solar, solar-plus-storage or storage-only system, applied since March 1, 2022 and collected with the application.",
          "SMUD does not sell solar systems and offers no rebate for solar panels, but it does offer battery storage incentives. The contractor you choose files the interconnection application with SMUD; SMUD says the contractor should hold a C-10 electrician's license or a C-46 solar license. Elk Grove has not filed an annual SB 379 permit report in the Energy Commission's data file, so ask each bidder how many Elk Grove jobs it has taken through SMUD recently."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "galt": {
    "name": "Galt",
    "county": "Sacramento County",
    "utility": "smud",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Galt sits at the southern edge of SMUD territory, and the California Energy Commission's utility map shows SMUD across the whole city, with no PG&E and no community choice provider. That puts a Galt solar home on SMUD's Solar and Storage Rate, which pays 9.6 cents per kWh for exported power at any hour, rather than PG&E's Solar Billing Plan. Ask each bidder to confirm which utility its savings figure uses.",
    "local": "The City of Galt reported to the Energy Commission that it has no automated solar permitting platform, and its SB 379 report for 2024 counts 43 residential solar permits, 7 of them with battery storage and none issued online. Expect a staff plan review rather than an instant permit, and ask each bidder how long its recent Galt permits have taken.",
    "example": "Many Galt searches are about solar roofing. If your roof needs replacing within the next several years, get the reroof and solar priced together or in sequence, and ask how the bid handles removing and reinstalling panels later. SMUD's size cap applies whichever way you do it: 110% of the last twelve months' use, or 120% with a battery.",
    "checks": [
      [
        "SMUD rules",
        "Model SMUD's Solar and Storage Rate and its 9.6-cent export price, not PG&E's plan."
      ],
      [
        "System size",
        "Keep the design within SMUD's cap: 110% of past-year use, or 120% with a battery."
      ],
      [
        "Permit time",
        "Plan for a staff review; Galt reports no automated platform."
      ],
      [
        "Roof first",
        "Say whether the roof will outlast the panels, and price a later removal and reinstall."
      ]
    ],
    "sources": [
      {
        "label": "SMUD: solar for your home (Solar and Storage Rate, sizing, interconnection fee)",
        "url": "https://www.smud.org/Going-Green/Solar-for-your-home"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Government Code section 65850.52 (SB 379 automated solar permitting schedule)",
        "url": "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/elk-grove",
        "label": "Elk Grove, SMUD's permit route next door"
      },
      {
        "href": "/blog/solar-panel-removal-reinstall-cost",
        "label": "What removing and reinstalling panels costs for a reroof"
      },
      {
        "href": "/blog/smud-peak-hours",
        "label": "SMUD's peak hours and how they affect a solar home"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Galt, CA?",
        "This site does not rank them. Look for companies holding a C-10 or C-46 license, as SMUD recommends, that have filed SMUD interconnection applications and City of Galt permits recently, and compare at least three written bids built on your SMUD bill."
      ],
      [
        "Is Galt served by PG&E or SMUD?",
        "SMUD. The California Energy Commission's utility map places the whole city in SMUD territory, with no community choice provider. PG&E's Solar Billing Plan does not apply to a Galt home served by SMUD."
      ],
      [
        "Can I get an instant solar permit in Galt?",
        "Not on current figures. Galt reported to the Energy Commission that it has no automated solar permitting platform, and none of its 43 residential solar permits in 2024 was issued online. Ask each bidder for its recent Galt review times."
      ],
      [
        "What does SMUD pay for solar I don't use?",
        "On the Solar and Storage Rate, SMUD buys exported power at 9.6 cents per kWh regardless of time of day or season. SMUD offers no rebate for the solar panels themselves, but it does offer battery storage incentives."
      ]
    ],
    "answer": "Solar companies in Galt connect a home system to SMUD, which serves the whole city, and pull the permit from the City of Galt, which reported no automated online solar permit platform to the Energy Commission and issued none of its 43 residential solar permits online in 2024. SMUD buys exported power at 9.6 cents per kWh and caps system size at your past year's use plus 10%. Compare at least three written bids built on your SMUD bill.",
    "keyFacts": [
      {
        "label": "Electric utility",
        "value": "SMUD",
        "note": "Whole city on the CEC map; no PG&E",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "43",
        "note": "16% with storage, none issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Automated platform",
        "value": "None reported",
        "note": "Galt's SB 379 status with the Energy Commission",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/media/9247"
        }
      }
    ],
    "sections": [
      {
        "heading": "What SMUD means for a Galt solar quote",
        "paragraphs": [
          "SMUD, the Sacramento Municipal Utility District, sets its own solar terms. On its Solar and Storage Rate, exported power earns 9.6 cents per kWh whatever the hour or season. That flat price makes the arithmetic simpler than PG&E's hourly export values, and it means a bid can show, line by line, how much of the output you use at home and how much you sell back at 9.6 cents.",
          "SMUD enforces that with a sizing limit: up to 110% of your last twelve months of consumption, or 120% on the Solar and Storage Rate if a battery is added. It charges a one-time interconnection fee on new solar, solar-plus-storage and storage-only systems, and it offers no rebate on the panels themselves, though it does have battery storage incentives. The contractor files the interconnection application with SMUD."
        ]
      },
      {
        "heading": "Galt's permit office and permit numbers",
        "paragraphs": [
          "Galt has about 25,500 residents, and Government Code section 65850.52, the SB 379 statute, gave cities of 50,000 or fewer until September 30, 2024 to offer automated solar permitting. The City told the Energy Commission it has no automated platform, and its annual report shows the result: 43 residential solar permits in 2024, 7 with battery storage, none issued online. Elk Grove, a much larger SMUD city to the north, uses SolarAPP+.",
          "A smaller permit volume is not necessarily a slower one, but it does mean fewer installers have recent Galt experience. Ask each bidder how many Galt permits it has pulled, how long the last one took from submittal to issue, and who will meet the inspector. If your roof is near the end of its life, ask whether reroofing first would avoid paying to remove and reinstall the panels later."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "clovis": {
    "name": "Clovis",
    "county": "Fresno County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Clovis is PG&E territory with no community choice provider on the California Energy Commission's maps, so PG&E supplies both generation and delivery and its Solar Billing Plan sets what your exports earn. PG&E bills that plan monthly, sends a True-Up statement each year, and adds Energy Export Bonus Credits for customers who start before 2028. Have each bidder model it from your own twelve months of usage.",
    "local": "Since September 30, 2023, the Clovis Building Division has taken photovoltaic permits three ways: plans and applications in person, plans through the online Citizen Self Service portal for projects that meet the City's eligibility list, and SolarAPP+ applications through the same portal. SolarAPP+ is for contractors only; owner-builders use one of the first two routes.",
    "example": "Clovis's monthly Photovoltaic Reports list each permit's contractor, system size, application date and issue date. Before you sign, look up the company in a recent report: it shows whether the bidder actually pulls permits in Clovis and how long its permits took to issue. A bid for a system far larger or smaller than similar homes in the report deserves a question.",
    "checks": [
      [
        "Permit route",
        "Say whether the job is filed in person, online through Citizen Self Service, or through SolarAPP+."
      ],
      [
        "Panel work",
        "SolarAPP+ in Clovis does not accept panel upgrades; say whether the design needs one."
      ],
      [
        "Track record",
        "Point to the bidder's recent permits in the City's monthly Photovoltaic Report."
      ],
      [
        "PG&E plan",
        "Model PG&E's Solar Billing Plan, including bonus credits for a pre-2028 start."
      ]
    ],
    "sources": [
      {
        "label": "City of Clovis: Building Division solar permit submission methods",
        "url": "https://www.clovisca.gov/services/planning_development/building/index.php"
      },
      {
        "label": "City of Clovis: monthly Photovoltaic Reports (October 2025 report used here)",
        "url": "https://www.clovisca.gov/services/planning_development/building/photovoltaic_reports.php"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SolarAPP+: where SolarAPP+ is available, with the project types each jurisdiction accepts",
        "url": "https://www.gosolarapp.org/where-is-solarapp-available"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/fresno",
        "label": "Fresno next door, and its permit numbers"
      },
      {
        "href": "/blog/pge-solar-billing-plan",
        "label": "PG&E's Solar Billing Plan, explained"
      },
      {
        "href": "/battery/how-many-batteries-do-i-need-california",
        "label": "How much battery a Clovis home needs"
      }
    ],
    "faq": [
      [
        "Who are the best solar installers in Clovis?",
        "This site does not rank them. A practical filter in Clovis is the City's monthly Photovoltaic Report, which names the contractor on every permit: shortlist companies with a CSLB license covering solar that appear in recent reports and confirm your address in writing, then compare at least three written bids for the same system."
      ],
      [
        "How fast are Clovis solar permits issued?",
        "In the City's October 2025 Photovoltaic Report, 98 residential roof-mount permits were issued a median of seven days after application, and 10 permits the report classes as Real Time Solar were issued a median of zero days after application, most the same day."
      ],
      [
        "Can a homeowner get a solar permit in Clovis?",
        "Yes, but not through SolarAPP+, which the City restricts to contractors. Owner-builders can submit plans and an application in person, or online through Citizen Self Service if the project meets the City's eligibility list."
      ],
      [
        "How many solar permits does Clovis issue?",
        "Clovis reported 935 residential solar permits to the California Energy Commission for 2023. Of those, 694, about 74%, included battery storage, and 889, about 95%, were issued online."
      ]
    ],
    "answer": "Solar installers in Clovis can file a residential solar permit in person, online through the City's Citizen Self Service portal, or, for contractors only, through SolarAPP+ in the same portal. The City publishes a monthly report of every photovoltaic permit, with the contractor, system size and dates, so you can see who is pulling Clovis permits. PG&E serves the whole city. Compare at least three written bids built on your own PG&E bill.",
    "keyFacts": [
      {
        "label": "2023 solar permits",
        "value": "935",
        "note": "74% with storage, 95% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Typical wait, Oct 2025",
        "value": "7 days",
        "note": "Median, application to issue, residential roof mounts",
        "source": {
          "publisher": "City of Clovis Photovoltaic Report",
          "date": "2026-09-23",
          "url": "https://www.clovisca.gov/services/planning_development/building/photovoltaic_reports.php"
        }
      },
      {
        "label": "Utility",
        "value": "PG&E",
        "note": "No community choice provider",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      }
    ],
    "sections": [
      {
        "heading": "Three ways to file a Clovis solar permit",
        "paragraphs": [
          "The City opened its current solar routes on September 30, 2023. An applicant can bring plans and an application to the Building Division, submit plans online through the Citizen Self Service portal when the project meets the City's Photovoltaic System Eligibility List, or submit a SolarAPP+ application, under SB 379, through the same portal. The SolarAPP+ route is for contractors only, and the City says residential roof-mounted and ground-mounted photovoltaic permits have a new fee structure, posted on its Building page.",
          "The SolarAPP+ program lists Clovis as accepting solar with battery storage but not main panel upgrades or main breaker derates. A design that needs new service equipment therefore goes through the online or in-person review, which a bid's schedule should allow for."
        ]
      },
      {
        "heading": "What Clovis's permit reports show",
        "paragraphs": [
          "Clovis is unusual in publishing a monthly Photovoltaic Report, going back to 2022, that lists every photovoltaic permit with its work class, application, issue and final dates, status, contractor, system size and a description of the work. The October 2025 report lists 110 permits issued that month: 98 residential roof mounts, 10 classed as Real Time Solar and 2 commercial roof mounts. The residential roof mounts were issued a median of seven days after application; the Real Time Solar permits, a median of zero days.",
          "The City's SB 379 report to the Energy Commission gives the annual picture: 935 residential solar permits in 2023, about 74% with battery storage and about 95% issued online. Between the two, you can check whether a bidder's timeline is realistic and whether it actually works in Clovis, before you sign anything."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "yuba-city": {
    "name": "Yuba City",
    "county": "Sutter County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Yuba City is PG&E territory with no community choice provider on the California Energy Commission's maps, so PG&E supplies generation and delivery and its Solar Billing Plan values your exports. The plan bills monthly with an annual True-Up statement, and customers who start before 2028 receive Energy Export Bonus Credits set when the system gets permission to operate. Each bidder should model that plan from your own usage.",
    "local": "Yuba City's SolarAPP+ route covers most residential, roof-mounted retrofit systems that conform to the SolarAPP+ eligibility list. The contractor submits the design to SolarAPP+ and pays its processing fee, then creates a building permit application in the City's online portal; the City reviews it, invoices the permit fees and issues the permit once they are paid. The SolarAPP+ program lists Yuba City as accepting solar with storage, but not panel upgrades or breaker derates.",
    "example": "Ask each bidder whether its design fits Yuba City's SolarAPP+ list; a panel upgrade or breaker derate takes the job out of it. Then ask what the inspection day will need from you: the City wants signed access and smoke-alarm forms, the permit and plans left out by 8 a.m., and unlocked access that does not go through the house.",
    "checks": [
      [
        "SolarAPP+ fit",
        "Confirm the design is on the eligibility list; panel upgrades and breaker derates are not."
      ],
      [
        "Inspection prep",
        "List the forms and plans that must be left out by 8 a.m. on inspection day."
      ],
      [
        "Inverter location",
        "Say whether the inverter is in the garage, so interior access can be arranged."
      ],
      [
        "PG&E plan",
        "Model PG&E's Solar Billing Plan, including bonus credits for a pre-2028 start."
      ]
    ],
    "sources": [
      {
        "label": "City of Yuba City: SolarAPP+ automated solar plan review and inspections",
        "url": "https://www.yubacity.net/departments/development_services/solar_app.php"
      },
      {
        "label": "City of Yuba City: Solar Permit Plan Submittals and inspection requirements (information bulletin, PDF)",
        "url": "https://cdnsm5-hosted.civiclive.com/UserFiles/Servers/Server_239174/File/Development%20Services/Building/Information%20Bulletin/Solar%20Permit%20Submittals.pdf"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SolarAPP+: where SolarAPP+ is available, with the project types each jurisdiction accepts",
        "url": "https://www.gosolarapp.org/where-is-solarapp-available"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/chico",
        "label": "Chico, the next PG&E city up Highway 99"
      },
      {
        "href": "/blog/solar-panel-inspection-california",
        "label": "What a solar inspection checks"
      },
      {
        "href": "/blog/pge-solar-billing-plan",
        "label": "How PG&E's Solar Billing Plan credits exports"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Yuba City?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that are registered with SolarAPP+ and confirm your address in writing, then compare at least three written bids for the same system, each built on your own PG&E bill."
      ],
      [
        "Do I need to be home for a Yuba City solar inspection?",
        "Usually not. The City says it gives no inspection time or advance notice for inspections that only need exterior access, and you need not be present unless the inverter is inside the garage or another locked area. By 8 a.m. you must secure pets, leave the signed access and smoke and carbon monoxide alarm forms, the permit and the approved plans on the porch or by the main panel, and provide unlocked access that does not go through the house."
      ],
      [
        "How do I schedule a solar inspection in Yuba City?",
        "Online or by calling the inspection request line at (530) 822-4901 by 5 p.m. the business day before. Morning (8 a.m. to noon) or afternoon (noon to 3 p.m.) slots are available, and two-hour windows can be requested on the day by calling (530) 799-0549."
      ],
      [
        "How many solar permits does Yuba City issue?",
        "Yuba City reported 920 residential solar permits to the California Energy Commission for 2023. Of those, 184, about 20%, included battery storage, and 780, about 85%, were issued online."
      ]
    ],
    "answer": "Solar companies in Yuba City run an eligible rooftop design through SolarAPP+, then apply for the building permit in the City's online portal, where the City invoices its fees and issues the permit once they are paid. Inspectors do not need you home for an exterior-only inspection. PG&E serves the city, with no community choice provider. Compare at least three written bids built on your own PG&E bill.",
    "keyFacts": [
      {
        "label": "2023 solar permits",
        "value": "920",
        "note": "20% with storage, 85% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Automated permit",
        "value": "SolarAPP+",
        "note": "Storage accepted; no panel upgrades or derates",
        "source": {
          "publisher": "SolarAPP+",
          "date": "2026-09-23",
          "url": "https://www.gosolarapp.org/where-is-solarapp-available"
        }
      },
      {
        "label": "Utility",
        "value": "PG&E",
        "note": "No community choice provider",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      }
    ],
    "sections": [
      {
        "heading": "Yuba City's SolarAPP+ permit, step by step",
        "paragraphs": [
          "The City uses SolarAPP+ for the majority of residential, roof-mounted retrofit systems, and only projects that match the SolarAPP+ eligibility list can use it. First the contractor submits the design through SolarAPP+ and pays its processing fee. Then it creates a building permit application in the City's online portal; the City reviews the application, invoices the building permit fees and issues the permit after they are paid. Permits can also be submitted and paid for at City Hall.",
          "The City's reports to the Energy Commission show how common the online route has become: 920 residential solar permits in 2023, about 85% issued online and about 20% with battery storage. Sutter County is exempt from SB 379's automated permitting requirement, so a home outside the city limits may follow a different process."
        ]
      },
      {
        "heading": "Inspection day in Yuba City",
        "paragraphs": [
          "Inspections are requested online or by phone at (530) 822-4901 by 5 p.m. the business day before, in a morning or afternoon slot; on the day, a two-hour window can be requested at (530) 799-0549. You will need the Yuba City permit number, the inspection type and a contact name and phone number. The City does not give a time or advance notice for inspections that only need exterior yard access.",
          "By 8 a.m. the homeowner or installer should have pets secured, the signed Permission for Inspection Access form and signed smoke and carbon monoxide alarm form, the permit and the approved plans left on the front porch or near the main electrical panel, unlocked access that does not go through the house or garage, and a ladder if needed. The inspector does not need to reach panels on a sloped roof that are visible from the ground. Results post to the City's website the next business day."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "hollister": {
    "name": "Hollister",
    "county": "San Benito County",
    "utility": "pge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Hollister is PG&E delivery territory and Central Coast Community Energy (3CE) generation territory across the whole city on the California Energy Commission's maps. A 3CE solar customer has two true-ups a year: one with PG&E for delivery and one with 3CE, every December, for generation. Have each bidder model both halves from your own bill, under the solar plan that matches your interconnection date.",
    "local": "The City of Hollister reported to the Energy Commission that it has no automated solar permitting platform, and it has not filed an annual SB 379 permit report. Its solar permit page offers the building permit application and an EV charger checklist, and the Building Division at 339 Fifth Street takes appointments online. Ask each bidder how it will file your permit and how long its recent Hollister permits took.",
    "example": "3CE settles generation credits in December, so a proposal that shows a year-end credit should say whether you would take it as a bill credit or, above the check threshold, as a check. Ask each bidder to separate 3CE's generation credits from PG&E's delivery charges in its estimate.",
    "checks": [
      [
        "3CE and PG&E",
        "Model 3CE's December generation true-up and PG&E's delivery true-up separately."
      ],
      [
        "Permit filing",
        "Say how the permit will be filed with the Building Division and the expected review time."
      ],
      [
        "Roof and birds",
        "Say whether bird-proofing mesh and roof repairs are included or priced separately."
      ],
      [
        "Battery",
        "Price the battery as its own line, with usable kWh and backed-up circuits."
      ]
    ],
    "sources": [
      {
        "label": "City of Hollister: solar permits for photovoltaic systems and EV charging stations",
        "url": "https://hollister.ca.gov/government/development_services/solar_permits_for_photovoltaic_(pv)_systems_and_ev_charging_stations.php"
      },
      {
        "label": "City of Hollister: Building Division (appointments and contact)",
        "url": "https://hollister.ca.gov/government/development_services/building.php"
      },
      {
        "label": "Central Coast Community Energy: Net Energy Metering tariffs and true-up",
        "url": "https://3cenergy.org/rates/nem/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "PG&E: Solar Billing Plan",
        "url": "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/salinas",
        "label": "Salinas, 3CE's largest city nearby"
      },
      {
        "href": "/blog/solar-panel-bird-proofing",
        "label": "Bird-proofing solar panels: what it costs and when it helps"
      },
      {
        "href": "/blog/what-is-nem-true-up",
        "label": "What happens at a solar true-up"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Hollister?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that have filed Hollister permits recently and confirm your address in writing, then compare at least three written bids for the same system built on your 3CE and PG&E bill."
      ],
      [
        "Who supplies electricity in Hollister?",
        "PG&E delivers it and sends the bill, and Central Coast Community Energy supplies the generation by default; the Energy Commission's maps show both across the whole city."
      ],
      [
        "When does 3CE pay for surplus solar?",
        "For customers on 3CE's Net Energy Metering tariffs, 3CE trues up generation every December and pays Net Surplus Compensation as a bill credit, at $0.023 per kWh in the PG&E service area. Residential customers whose retail credits and surplus compensation total at least $200 can instead request a check within 45 days of the true-up statement."
      ],
      [
        "Does Hollister have instant solar permits?",
        "The City reported to the Energy Commission that it has no automated solar permitting platform, and it has not filed an annual permit report in the Commission's data file. Expect a regular permit review, and ask each bidder how long its recent Hollister permits took."
      ]
    ],
    "answer": "Solar companies in Hollister connect a home system to PG&E, with Central Coast Community Energy supplying the generation and truing up solar credits every December. The City reported no automated online solar permit platform to the Energy Commission, so expect a regular permit through the Building Division, which works by appointment. Compare at least three written bids built on your own 3CE and PG&E bill.",
    "keyFacts": [
      {
        "label": "Generation",
        "value": "Central Coast Community Energy",
        "note": "PG&E delivers and bills",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "3CE true-up",
        "value": "December",
        "note": "NSC $0.023/kWh in the PG&E area (NEM tariffs)",
        "source": {
          "publisher": "Central Coast Community Energy",
          "date": "2026-09-23",
          "url": "https://3cenergy.org/rates/nem/"
        }
      },
      {
        "label": "Automated platform",
        "value": "None reported",
        "note": "Hollister's SB 379 status with the Energy Commission",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/media/9247"
        }
      }
    ],
    "sections": [
      {
        "heading": "How 3CE settles a Hollister solar account",
        "paragraphs": [
          "3CE handles generation and PG&E handles transmission and distribution, so a 3CE customer on a Net Energy Metering tariff sees PG&E's minimum monthly delivery charges and gets two true-ups each year. 3CE bills monthly for energy used beyond what the system produces, gives retail credits for extra generation within the true-up period, and trues up every December. At that point customers receive credit for earlier generation charges before retail credits accrue, and Net Surplus Compensation as a bill credit.",
          "3CE's Net Surplus Compensation rate in the PG&E service area is $0.023 per kWh. A residential customer with at least $200 in retail credits and surplus compensation combined can ask for a check within 45 days of the true-up statement; otherwise the amount stays as bill credit. Customers whose interconnection agreement was approved after April 15, 2023 are on the Net Billing Tariff instead, so ask the bidder which one your system will be on."
        ]
      },
      {
        "heading": "Hollister's permit office",
        "paragraphs": [
          "The City told the Energy Commission it has no automated solar permitting platform, and it has not filed an annual SB 379 permit report, so there is no published count of Hollister solar permits or of how many were issued online. Its solar permit page provides the building permit application, and the Building Division, at 339 Fifth Street, takes appointments through an online booking link.",
          "Homes outside the city limits are permitted by San Benito County, which the Energy Commission lists as exempt from the SB 379 requirement but as having a SolarAPP+ platform. Many Hollister searches also ask about roofs and bird-proofing; if pigeons nesting under panels are a concern, ask each bidder to price critter guards as a separate line rather than assuming they are included."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "la-mesa": {
    "name": "La Mesa",
    "county": "San Diego County",
    "utility": "sdge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "La Mesa is one of six member cities of San Diego Community Power, so a La Mesa bill carries SDG&E delivery charges and SDCP generation charges. SDG&E puts residential Solar Billing Plan customers on its EV-TOU-5 time-of-use plan, with on-peak hours from 4 to 9 p.m. SDCP pays annual surplus at the Net Surplus Compensation rate plus $0.0075 per kWh. Each bidder should model both halves from your own bill.",
    "local": "La Mesa offers three routes. The instant review, through Symbium, covers solar systems up to 38.4 kW AC and batteries paired with them: the applicant enters the address, answers the scope questions, downloads an approval document for a compliant project and uploads it to the online permit application, or brings it to the City Hall counter, for a permit issued in real time. Smaller systems can also take the AB 2188 expedited review, and the rest go through regular plan submittal in MaintStar.",
    "example": "Ask each bidder which La Mesa route its design takes. A system on the instant route can be permitted the day it is submitted; one that needs structural drawings stamped by an engineer will take longer. Then have each proposal show the SDG&E and SDCP portions of your bill separately, with the 4 to 9 p.m. on-peak hours modeled.",
    "checks": [
      [
        "Permit route",
        "Say whether the job uses Symbium's instant review, the AB 2188 expedited review or regular plan submittal."
      ],
      [
        "Structural",
        "Include the City's structural criteria checklist, or stamped engineering if the roof does not qualify."
      ],
      [
        "SDCP and SDG&E",
        "Model SDCP generation credits and SDG&E delivery charges separately, on EV-TOU-5."
      ],
      [
        "System size",
        "Keep within SDG&E's oversizing limit: up to 50% above past use, with an attestation."
      ]
    ],
    "sources": [
      {
        "label": "City of La Mesa: residential rooftop solar permitting (Symbium instant review, AB 2188 expedited review)",
        "url": "https://www.cityoflamesa.gov/1322/Residential-Rooftop-Solar"
      },
      {
        "label": "City of La Mesa: press release, instant residential solar permit program (October 18, 2023, PDF)",
        "url": "https://www.cityoflamesa.gov/DocumentCenter/View/21318"
      },
      {
        "label": "San Diego Community Power: our community (member cities and unincorporated county)",
        "url": "https://sdcommunitypower.org/our-community/"
      },
      {
        "label": "San Diego Community Power: net energy metering and Solar Billing Plan",
        "url": "https://sdcommunitypower.org/net-energy-metering/"
      },
      {
        "label": "SDG&E: Solar Billing Plan",
        "url": "https://www.sdge.com/solar/solar-billing-plan"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/el-cajon",
        "label": "El Cajon, La Mesa's neighbor to the east"
      },
      {
        "href": "/blog/sdge-time-of-use-rates-2026",
        "label": "SDG&E time-of-use hours and a solar estimate"
      },
      {
        "href": "/solar-companies/santee",
        "label": "Santee, which is not an SDCP member"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in La Mesa?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that use La Mesa's instant permit route and confirm your address in writing, then compare at least three written bids for the same system built on your SDG&E and San Diego Community Power bill."
      ],
      [
        "How does La Mesa's instant solar permit work?",
        "Enter the property address in the City's Symbium tool, choose Rooftop Solar or Battery Storage Installation, and answer the scope questions. If the project is code compliant you download an approval document, then upload it to the online permit application or bring it to the building counter at City Hall, and the permit is issued in real time."
      ],
      [
        "Who supplies electricity in La Mesa?",
        "SDG&E delivers it and sends the bill, and San Diego Community Power supplies the generation by default. SDCP names La Mesa with San Diego, Chula Vista, Encinitas, Imperial Beach and National City as its member cities."
      ],
      [
        "How many solar permits does La Mesa issue?",
        "La Mesa reported 759 residential solar permits to the California Energy Commission for 2023, the year it launched instant permits in October. About 10% included battery storage and about 3% were issued online."
      ]
    ],
    "answer": "Solar companies in La Mesa can get an instant permit through Symbium for home solar up to 38.4 kW AC, with or without a paired battery, then have it issued online or at the City Hall counter. SDG&E delivers the power and San Diego Community Power, of which La Mesa is a member, supplies the generation and adds a bonus to annual surplus payments. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Instant permit",
        "value": "Symbium, up to 38.4 kW AC",
        "note": "Solar and paired batteries; issued in real time",
        "source": {
          "publisher": "City of La Mesa",
          "date": "2026-09-23",
          "url": "https://www.cityoflamesa.gov/1322/Residential-Rooftop-Solar"
        }
      },
      {
        "label": "Generation",
        "value": "San Diego Community Power",
        "note": "Surplus paid at NSC plus $0.0075/kWh",
        "source": {
          "publisher": "San Diego Community Power",
          "date": "2026-09-23",
          "url": "https://sdcommunitypower.org/net-energy-metering/"
        }
      },
      {
        "label": "2023 solar permits",
        "value": "759",
        "note": "10% with storage, 3% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      }
    ],
    "sections": [
      {
        "heading": "La Mesa's three solar permit routes",
        "paragraphs": [
          "The City launched instant permits for residential solar and battery storage on October 18, 2023, through Symbium. Under SB 379, the instant review covers solar systems no larger than 38.4 kilowatts AC and residential batteries paired with them. The applicant enters the address, picks Rooftop Solar or Battery Storage Installation, answers the scope questions and, if the project is compliant, downloads an approval document to upload with the online permit application or bring to the building counter at City Hall.",
          "Two other routes remain. Under AB 2188, a regular expedited review, at no extra fee, covers up to 10 kW of photovoltaics on a one- or two-family home, with an eligibility checklist uploaded in the City's MaintStar portal. Everything else follows the full submittal list: electrical plans with a one-line diagram, equipment cut sheets, a site and roof plan with fire access pathways, and either the City's structural criteria checklist or structural drawings and calculations stamped by a California-licensed engineer."
        ]
      },
      {
        "heading": "SDG&E, SDCP and a La Mesa solar bill",
        "paragraphs": [
          "SDG&E places residential Solar Billing Plan customers on EV-TOU-5, which has on-peak, off-peak and super off-peak periods, with on-peak from 4 to 9 p.m. Exports earn credits valued by the hour, and excess credits roll over month to month. A Solar Billing Plan customer can oversize a system by no more than 50% above the past twelve months of use, and only by attesting to an expected increase in usage.",
          "On the generation side, San Diego Community Power bills NEM customers monthly by default and pays Net Surplus Compensation plus a bonus of $0.0075 per kWh, issuing a check automatically when the amount exceeds $100. SDCP gives NEM customers a 20-year legacy period and Solar Billing Plan customers nine years from permission to operate. Ask each bidder which program your system will be on and to model it."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "poway": {
    "name": "Poway",
    "county": "San Diego County",
    "utility": "sdge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Poway is SDG&E territory and, unlike La Mesa or the City of San Diego, is not a member of San Diego Community Power: the Energy Commission's maps show no community choice provider over the city. SDG&E therefore bills generation and delivery, and its Solar Billing Plan puts residential solar customers on EV-TOU-5, with on-peak hours from 4 to 9 p.m. Have each bidder model that plan from your own usage.",
    "local": "Poway expedites rooftop solar under AB 2188 and its Municipal Code Chapter 15.26 when the project uses the City's permit application, checklists and plan information bulletins, including a Poway Solar Compliance List, standard plans for string and microinverter systems, an inspection guide and the fire-access pathway requirements. Since June 1, 2022 the City has accepted only electronic submittals, through City of Poway Online Services, with payment due at permit issuance.",
    "example": "Because Poway reports no instant platform, a bid's timeline should include plan review. Ask whether the design uses the City's standard plan, which the expedited route is built around, and whether the bidder has submitted Poway permits through Online Services recently. Then compare what each proposal leaves on your SDG&E bill during the 4 to 9 p.m. peak.",
    "checks": [
      [
        "Standard plan",
        "Say whether the design uses Poway's standard plan and compliance list for expedited review."
      ],
      [
        "Fire pathways",
        "Show roof access pathways that meet the California Residential Code requirements the City publishes."
      ],
      [
        "SDG&E plan",
        "Model SDG&E's Solar Billing Plan on EV-TOU-5; no SDCP credits apply in Poway."
      ],
      [
        "Timeline",
        "Allow for plan review; Poway reports no automated instant permit."
      ]
    ],
    "sources": [
      {
        "label": "City of Poway: Solar Photovoltaic (PV) Permits (AB 2188)",
        "url": "https://poway.org/854/Solar-Photovoltaic-PV-Permits-AB-2188"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "San Diego Community Power: our community (member cities and unincorporated county)",
        "url": "https://sdcommunitypower.org/our-community/"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "SDG&E: Solar Billing Plan",
        "url": "https://www.sdge.com/solar/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/escondido",
        "label": "Escondido, just north on the I-15"
      },
      {
        "href": "/blog/sdge-net-metering",
        "label": "How SDG&E credits solar today"
      },
      {
        "href": "/battery/battery-payback-nem-3-california",
        "label": "When a battery pays back under the Solar Billing Plan"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Poway?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that have filed Poway permits through Online Services and confirm your address in writing, then compare at least three written bids for the same system built on your SDG&E bill."
      ],
      [
        "Is Poway part of San Diego Community Power?",
        "No. SDCP's member cities are San Diego, Chula Vista, Encinitas, Imperial Beach, La Mesa and National City, plus unincorporated San Diego County, and the Energy Commission's maps show no community choice provider over Poway. SDG&E supplies generation as well as delivery."
      ],
      [
        "How do I get a solar permit in Poway?",
        "Submit the permit application, plans and required documents electronically through City of Poway Online Services; the City has accepted only electronic submittals since June 1, 2022. Projects that meet the Poway Solar Compliance List and use the City's standard plans qualify for expedited review, and payment is due when the permit is issued."
      ],
      [
        "How many solar permits does Poway issue?",
        "Poway reported 240 residential solar permits to the California Energy Commission for 2024. Of those, 99, about 41%, included battery storage, and none was issued online."
      ]
    ],
    "answer": "Solar companies in Poway file permits electronically through City of Poway Online Services, using the City's AB 2188 checklists and standard plans for expedited review; Poway reported no automated instant-permit platform to the Energy Commission and issued none of its 240 residential solar permits online in 2024. SDG&E supplies both delivery and generation, with no community choice provider. Compare at least three written bids built on your SDG&E bill.",
    "keyFacts": [
      {
        "label": "Permit filing",
        "value": "Online Services, electronic only",
        "note": "Since June 1, 2022; AB 2188 expedited review",
        "source": {
          "publisher": "City of Poway",
          "date": "2026-09-23",
          "url": "https://poway.org/854/Solar-Photovoltaic-PV-Permits-AB-2188"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "240",
        "note": "41% with storage, none issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Generation",
        "value": "SDG&E",
        "note": "Poway is not an SDCP member city",
        "source": {
          "publisher": "San Diego Community Power",
          "date": "2026-09-23",
          "url": "https://sdcommunitypower.org/our-community/"
        }
      }
    ],
    "sections": [
      {
        "heading": "Poway's expedited solar permit",
        "paragraphs": [
          "Poway implemented AB 2188 for rooftop solar photovoltaic, solar water heating and solar pool heating systems through Chapter 15.26 of its Municipal Code. Qualifying installations are expedited when they use the City's permit application, checklists and plan information bulletins: the Poway Solar Compliance List, the building permit application, standard plans for central-inverter and microinverter systems, an inspection guide, and the California Residential Code access and pathway requirements for photovoltaic systems.",
          "Everything is filed through City of Poway Online Services, which also holds permit records; the City has taken only electronic submittals since June 1, 2022, and payment is due when the permit is issued. Poway told the Energy Commission it has no automated SB 379 platform, and its 2024 report shows 240 residential solar permits with none issued online, so plan review is part of every Poway timeline."
        ]
      },
      {
        "heading": "An SDG&E-only bill in Poway",
        "paragraphs": [
          "Many San Diego County homes now buy generation from a community choice provider. Poway's do not: SDCP's members are San Diego, Chula Vista, Encinitas, Imperial Beach, La Mesa, National City and unincorporated San Diego County, and the Energy Commission's maps show no community choice provider over Poway. SDG&E supplies generation and delivery, and its Solar Billing Plan sets the value of exports.",
          "On that plan, residential customers are on EV-TOU-5, with on-peak hours from 4 to 9 p.m., and export credits vary by the hour and roll over month to month. SDG&E notes that pairing solar with a battery lets a home store daytime output for the on-peak hours. About 41% of Poway's 2024 permits included storage; ask each bidder to price solar alone and with a battery so you can see the difference."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "santee": {
    "name": "Santee",
    "county": "San Diego County",
    "utility": "sdge",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Santee is SDG&E territory with no community choice provider on the Energy Commission's maps, and San Diego Community Power's member list does not include it. SDG&E supplies generation and delivery, and its Solar Billing Plan puts residential solar customers on EV-TOU-5, where on-peak runs from 4 to 9 p.m. and export credits are valued by the hour. Each bidder should model that plan from your usage.",
    "local": "Santee accepts small rooftop solar applications on SanteePortal.org, where the City says most permits are reviewed within 10 days. Eligible projects can take SolarAPP+: the contractor submits the design and pays SolarAPP+'s processing fee, then applies for a City of Santee SolarAPP+ permit on the portal with an active Santee business license, attaching the Permit Declaration Form. Projects that do not qualify for expedited processing may need detailed review.",
    "example": "If a Santee bid includes a battery in the garage, ask how its placement meets the City's Residential Batteries in Garage Guidelines, since the City lists that check as a step of the SolarAPP+ process. Then compare each proposal's SDG&E bill under EV-TOU-5 with and without the battery.",
    "checks": [
      [
        "Business license",
        "Show an active City of Santee business license; the SolarAPP+ permit requires one."
      ],
      [
        "Declaration form",
        "Attach the Permit Declaration Form; inspections are not scheduled without it."
      ],
      [
        "Garage battery",
        "Show that a garage battery location meets the City's battery-in-garage guidelines."
      ],
      [
        "SDG&E plan",
        "Model SDG&E's Solar Billing Plan on EV-TOU-5; no SDCP credits apply in Santee."
      ]
    ],
    "sources": [
      {
        "label": "City of Santee: solar system permitting and SolarAPP+",
        "url": "https://www.cityofsanteeca.gov/departments/planning-building/solar"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "San Diego Community Power: our community (member cities and unincorporated county)",
        "url": "https://sdcommunitypower.org/our-community/"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SDG&E: Solar Billing Plan",
        "url": "https://www.sdge.com/solar/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/la-mesa",
        "label": "La Mesa, where SDCP supplies generation"
      },
      {
        "href": "/solar-companies/el-cajon",
        "label": "El Cajon, Santee's neighbor to the south"
      },
      {
        "href": "/blog/how-to-read-sdge-bill",
        "label": "How to read an SDG&E bill before comparing quotes"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Santee?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar and an active City of Santee business license that confirm your address in writing, then compare at least three written bids for the same system built on your own SDG&E bill."
      ],
      [
        "Why won't Santee schedule my solar inspection?",
        "The City will not schedule inspections for a SolarAPP+ permit without a completed Permit Declaration Form, which is attached in the first step of the permit application on SanteePortal.org. Inspections are requested through the same portal account."
      ],
      [
        "Can a solar battery go in a Santee garage?",
        "Yes, if its location meets the City of Santee's Residential Batteries in Garage Guidelines; the City lists verifying the battery's location against its standards as a step in the SolarAPP+ process."
      ],
      [
        "How many solar permits does Santee issue?",
        "Santee reported 780 residential solar permits to the California Energy Commission for 2023 and 336 for 2024. About 34% of the 2024 permits included battery storage and about 26% were issued online, up from 2% the year before."
      ]
    ],
    "answer": "Solar companies in Santee need an active City business license to file a SolarAPP+ permit on SanteePortal.org, and a completed Permit Declaration Form before the City will schedule the inspection; batteries in a garage must follow the City's own placement guidelines. SDG&E supplies both delivery and generation, with no community choice provider. Compare at least three written bids built on your own SDG&E bill.",
    "keyFacts": [
      {
        "label": "Permit portal",
        "value": "SanteePortal.org",
        "note": "Most small rooftop permits reviewed within 10 days",
        "source": {
          "publisher": "City of Santee",
          "date": "2026-09-23",
          "url": "https://www.cityofsanteeca.gov/departments/planning-building/solar"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "336",
        "note": "34% with storage, 26% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Generation",
        "value": "SDG&E",
        "note": "Santee is not an SDCP member city",
        "source": {
          "publisher": "San Diego Community Power",
          "date": "2026-09-23",
          "url": "https://sdcommunitypower.org/our-community/"
        }
      }
    ],
    "sections": [
      {
        "heading": "Santee's SolarAPP+ steps",
        "paragraphs": [
          "The City has streamlined small rooftop solar permits and takes applications on SanteePortal.org, where it says most are reviewed within 10 days. For eligible roof-mounted retrofit systems, SolarAPP+ replaces plan review. The contractor submits the design on SolarAPP+, pays its processing fee and downloads the approved plans and certificate. It then applies for a City of Santee SolarAPP+ permit on the portal, which requires an active Santee business license, attaches the Permit Declaration Form and pays for the permit.",
          "The inspection is requested through the same portal account, and the City will not schedule it without the completed Permit Declaration Form. Where a battery is part of the job, the fourth step is to verify its location against the City's Residential Batteries in Garage Guidelines. Systems that do not qualify for expedited processing, including some pool and water heating systems, may need a detailed review."
        ]
      },
      {
        "heading": "Santee's permit numbers and SDG&E bill",
        "paragraphs": [
          "Santee's reports to the Energy Commission show the instant route catching on: 780 residential solar permits in 2023, about 2% issued online, and 336 in 2024, about 26% online. Storage rose from about 13% of permits to 34% over the same two years.",
          "Santee is not one of San Diego Community Power's member cities, so an SDG&E bill here has SDG&E generation charges rather than SDCP's. On SDG&E's Solar Billing Plan, residential customers use EV-TOU-5, exports earn credits by the hour, excess credits roll forward, and a system can be sized up to 50% above past use only with an attestation that usage will grow. A bid that quotes SDCP's bonus for a Santee home is modeling the wrong provider."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "westminster": {
    "name": "Westminster",
    "county": "Orange County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Westminster is SCE territory, and the Energy Commission's community choice map shows no provider over almost all of it; the Orange County Power Authority's members are Buena Park, Fullerton and Irvine, with Fountain Valley next. SCE therefore bills generation and delivery, and its Solar Billing Plan values exports by the hour. Each bidder should model that plan, including SCE's added credit for customers who enroll before 2028.",
    "local": "Westminster meets SB 379 with SolarAPP+. Licensed contractors submit residential roof-mounted photovoltaic designs for automated review through SolarAPP+ and then through Energov, the City's online software, for an auto-issued permit. The automated route covers residential solar systems up to 38.4 kW AC and batteries paired with them, and the SolarAPP+ program lists the City as accepting main panel upgrades and main breaker derates.",
    "example": "Only 7 of Westminster's 323 residential solar permits in 2025 included a battery. That makes a solar-only bid normal here, but not automatically right: SCE's credits for exports are worth less than the power you buy, so ask each bidder to show your bill with and without storage, using the same panel layout.",
    "checks": [
      [
        "Automated route",
        "Say whether the design fits SolarAPP+ and Energov, and who files it."
      ],
      [
        "SCE plan",
        "Model SCE's Solar Billing Plan, including the added credit for enrolling before 2028."
      ],
      [
        "Battery choice",
        "Show the bill with and without a battery, on the same panel layout."
      ],
      [
        "Panel work",
        "Say whether a main panel upgrade or breaker derate is needed; both fit SolarAPP+ here."
      ]
    ],
    "sources": [
      {
        "label": "City of Westminster: solar photovoltaic streamlining process (SolarAPP+ and Energov)",
        "url": "https://www.westminster-ca.gov/departments/community-development/building-division/solar-permit-process"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "Orange County Power Authority: FAQ (current member cities)",
        "url": "https://www.ocpower.org/faq/"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SolarAPP+: where SolarAPP+ is available, with the project types each jurisdiction accepts",
        "url": "https://www.gosolarapp.org/where-is-solarapp-available"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/huntington-beach",
        "label": "Huntington Beach, which returned to SCE from OCPA"
      },
      {
        "href": "/solar-companies/orange-county",
        "label": "Orange County providers and permit offices"
      },
      {
        "href": "/blog/sce-solar-billing-plan",
        "label": "SCE's Solar Billing Plan, explained"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Westminster, CA?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that are registered with SolarAPP+ and confirm your address in writing, then compare at least three written bids for the same system built on your own SCE bill."
      ],
      [
        "Does Westminster have instant solar permits?",
        "Yes, for eligible systems. Licensed contractors submit roof-mounted designs through SolarAPP+ and then Energov for an auto-issued permit, covering systems up to 38.4 kW AC and batteries paired with them. Only 9 of the 323 permits the City reported for 2025 were issued online, so ask whether your installer will use it."
      ],
      [
        "Can I add a Tesla Powerwall or other battery in Westminster?",
        "Yes. The City's automated route covers a residential battery paired with a solar system of up to 38.4 kW AC. Adding storage changes the savings math on SCE's Solar Billing Plan, so ask for the battery as its own line with its usable kWh."
      ],
      [
        "How many solar permits does Westminster issue?",
        "Westminster reported 323 residential solar permits to the California Energy Commission for 2025. Of those, 7, about 2%, included battery storage, and 9, about 3%, were issued online."
      ]
    ],
    "answer": "Solar companies in Westminster submit an eligible rooftop design, with or without a paired battery, to SolarAPP+ and then to Energov, the City's online permit system, for an automatically issued permit. SCE supplies both delivery and generation: Westminster is not a member of the Orange County Power Authority. Few Westminster permits have included batteries so far. Compare at least three written bids built on your own SCE bill.",
    "keyFacts": [
      {
        "label": "Automated permit",
        "value": "SolarAPP+ and Energov",
        "note": "Up to 38.4 kW AC, with paired storage",
        "source": {
          "publisher": "City of Westminster",
          "date": "2026-09-23",
          "url": "https://www.westminster-ca.gov/departments/community-development/building-division/solar-permit-process"
        }
      },
      {
        "label": "2025 solar permits",
        "value": "323",
        "note": "2% with storage, 3% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Generation",
        "value": "SCE",
        "note": "Westminster is not an OCPA member city",
        "source": {
          "publisher": "Orange County Power Authority",
          "date": "2026-09-23",
          "url": "https://www.ocpower.org/faq/"
        }
      }
    ],
    "sections": [
      {
        "heading": "Westminster's automated solar permit",
        "paragraphs": [
          "SB 379 requires most California cities and counties to offer an online, automated permitting platform for residential solar systems up to 38.4 kilowatts AC and batteries paired with them. Westminster uses SolarAPP+ for that: licensed contractors submit residential roof-mounted photovoltaic designs for automated review through SolarAPP+ and then through Energov, the City's online software, and the permit is issued automatically.",
          "The SolarAPP+ program lists Westminster as accepting solar with storage, main panel upgrades and main breaker derates, a wider scope than some Orange County cities allow. Even so, the City's 2025 report to the Energy Commission counts 323 residential solar permits, only 9 issued online. Most installers are still filing the conventional way, so ask each bidder which route it will use and how long its last Westminster permit took."
        ]
      },
      {
        "heading": "SCE's Solar Billing Plan in Westminster",
        "paragraphs": [
          "With no community choice provider, a Westminster solar home is an SCE customer for both generation and delivery. On SCE's Solar Billing Plan, your home uses its solar first, exports earn Energy Export Credits that vary by hour and season, and rates are often higher on summer weekdays from 4 to 9 p.m. New customers' export values are locked for nine years, and eligible customers who enroll before 2028 receive an additional credit of about $0.04 per kWh.",
          "SCE says its export credits are worth less than the electricity you buy from its grid, which is why storing your own solar for the evening can be worth more than exporting it. Westminster's 2025 permits were almost all solar-only. That may suit your home, but it should be a choice you make with both numbers in front of you. The annual True-Up bill comes in the month your system started service."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "la-habra": {
    "name": "La Habra",
    "county": "Orange County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "La Habra is SCE territory, and the Energy Commission's community choice map shows no provider over almost all of the city, so SCE bills both generation and delivery. SCE's Solar Billing Plan values exports by the hour and season, locks new customers' export values for nine years, and adds a credit of about $0.04 per kWh for eligible customers who enroll before 2028. Each bidder should model it from your own bill.",
    "local": "La Habra's Toolkit Document #1, revised in January 2026, covers solar photovoltaic systems of 10 kW or less: a combination building and electrical permit, no Planning or Fire Department approval, applications through the City's online portal, and review within three working days. On the standard plan, fees will not exceed $500, and the permit is issued at the Building and Safety office. The City also reports SolarAPP+ as its automated platform.",
    "example": "If your roof will need replacing, ask each bidder how it would handle removing and reinstalling the panels later. La Habra requires a separate permit for that work, done by a B, C-10 or C-46 licensed contractor, and if the system is leased, the owner's written acceptance. A bid that includes a reroof now avoids that step.",
    "checks": [
      [
        "Permit route",
        "Say whether the job uses the 10 kW toolkit, SolarAPP+ or full plan review."
      ],
      [
        "Panel upgrade",
        "Price any electrical panel upgrade on its own permit, as the City requires."
      ],
      [
        "Future reroof",
        "Say how removal and reinstallation would be permitted, and by whom."
      ],
      [
        "SCE plan",
        "Model SCE's Solar Billing Plan, including the added credit before 2028."
      ]
    ],
    "sources": [
      {
        "label": "City of La Habra: Toolkit Document #1, solar photovoltaic installations 10 kW or less (rev. 01/26, PDF)",
        "url": "https://www.lahabraca.gov/DocumentCenter/View/4307"
      },
      {
        "label": "City of La Habra: existing PV system removal and re-installation requirements (PDF)",
        "url": "https://www.lahabraca.gov/DocumentCenter/View/15918/Solar-Panel-Remove-and-Re-install-"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "Orange County Power Authority: FAQ (current member cities)",
        "url": "https://www.ocpower.org/faq/"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/fullerton",
        "label": "Fullerton next door, on OCPA"
      },
      {
        "href": "/blog/solar-panel-removal-reinstall-cost",
        "label": "What removing and reinstalling panels costs"
      },
      {
        "href": "/blog/sce-solar-billing-plan",
        "label": "SCE's Solar Billing Plan, explained"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in La Habra?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that have pulled La Habra permits and confirm your address in writing, then compare at least three written bids for the same system, each built on your own SCE bill."
      ],
      [
        "How much is a solar permit in La Habra?",
        "For a system of 10 kW or less on the City's standard plan, the toolkit says fees will not exceed $500. Plan check is billed hourly with a one-hour minimum, permit fees follow the City's valuation table, and Strong Motion and CBSC fees apply. A panel upgrade needs a separate electrical permit, and more than two plan reviews add a plan check fee."
      ],
      [
        "Do I need a permit to remove solar panels for a new roof in La Habra?",
        "Yes. The City has a removal and re-installation permit for existing systems. The work must be done by a contractor with a B, C-10 or C-46 license, the application needs a detailed scope and the system's size and location, and if a leasing company owns the system and a different contractor does the work, the owner's acceptance letter is required."
      ],
      [
        "How many solar permits does La Habra issue?",
        "La Habra reported 173 residential solar permits to the California Energy Commission for 2024. Of those, 127, about 73%, included battery storage, and 73, about 42%, were issued online."
      ]
    ],
    "answer": "Solar companies in La Habra can permit a system of 10 kW or less through the City's streamlined toolkit, with a combined building and electrical permit reviewed in about three working days and fees capped at $500 on the standard plan, or use SolarAPP+. Taking panels off for a reroof needs its own removal and reinstall permit. SCE supplies the power, with no community choice provider. Compare at least three written bids.",
    "keyFacts": [
      {
        "label": "Toolkit permit fee",
        "value": "No more than $500",
        "note": "10 kW or less on the standard plan",
        "source": {
          "publisher": "City of La Habra",
          "date": "2026-09-23",
          "url": "https://www.lahabraca.gov/DocumentCenter/View/4307"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "173",
        "note": "73% with storage, 42% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Reroof work",
        "value": "Separate permit",
        "note": "Removal and reinstall by a B, C-10 or C-46 contractor",
        "source": {
          "publisher": "City of La Habra",
          "date": "2026-09-23",
          "url": "https://www.lahabraca.gov/DocumentCenter/View/15918/Solar-Panel-Remove-and-Re-install-"
        }
      }
    ],
    "sections": [
      {
        "heading": "La Habra's 10 kW toolkit permit",
        "paragraphs": [
          "La Habra follows the state's solar permitting guidebook for small systems. Its Toolkit Document #1 covers photovoltaic installations of 10 kW or less, which need only a combination building and electrical permit; Planning and Fire Department approvals are not required at that size. The application goes in through the City's online permit portal with the eligibility checklist and a standard plan, and the City says applications should be reviewed within three working days. The permit itself is issued at the Building and Safety office.",
          "On the standard plan, total fees will not exceed $500. Plan check is billed at an hourly rate with a one-hour minimum, permit fees follow the construction valuation in the City's fee table, and Strong Motion and CBSC fees apply. An electrical panel upgrade needs its own permit application, and a third plan review adds another plan check fee. Larger or battery systems can take SolarAPP+, which the City reported to the Energy Commission as its automated platform."
        ]
      },
      {
        "heading": "Removing and reinstalling panels in La Habra",
        "paragraphs": [
          "When a roof under an existing system needs work, La Habra treats the removal and reinstallation as its own permit. The contractor must hold a B, C-10 or C-46 license, and the application and site plan list that contractor, a detailed scope of work, the size and location of the existing system and where the panels will be stored. The permit is not a way to enlarge or change the system; the City asks that the plans say so.",
          "Ownership matters too. If the system is leased or financed and the contractor doing the work is not the leasing company, the applicant must include the system owner's letter accepting the removal and reinstallation. Plans go in electronically through the City's portal. If your roof is near the end of its life, it may be cheaper to reroof before the panels go up."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "fullerton": {
    "name": "Fullerton",
    "county": "Orange County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Fullerton is one of the Orange County Power Authority's member cities, with Buena Park and Irvine, and the Energy Commission's maps show SCE delivery and OCPA generation across nearly all of it. SCE delivers the power and sends the bill; OCPA handles the generation charges and credits. That split changes the value of a Fullerton system, so every bidder should model OCPA's solar terms rather than SCE's alone.",
    "local": "Fullerton told the Energy Commission that SolarAPP+ is its automated platform, and the SolarAPP+ program lists the City as accepting solar with storage, main panel upgrades and main breaker derates. The City also publishes a Solar Permit Dashboard, updated quarterly, with a map of installations and counts of residential, SolarAPP+ and commercial photovoltaic permits.",
    "example": "OCPA's terms reward exports more than SCE's do, which can change whether a battery is worth it. Ask each bidder to show the OCPA generation credits and SCE delivery charges separately, with and without a battery, and to say whether its numbers assume OCPA's current NEM 2.0 treatment or the standard Net Billing Tariff.",
    "checks": [
      [
        "OCPA terms",
        "Model OCPA's generation credits, its 10% premium on excess and its April true-up."
      ],
      [
        "Tariff assumption",
        "Say whether the savings use OCPA's current NEM 2.0 treatment or the standard Net Billing Tariff."
      ],
      [
        "Permit route",
        "Say whether the design fits SolarAPP+, including any panel upgrade or breaker derate."
      ],
      [
        "Edge addresses",
        "A small edge of the city maps to Anaheim Public Utilities; confirm the utility on your bill."
      ]
    ],
    "sources": [
      {
        "label": "City of Fullerton: solar installation maps and data metrics (Solar Permit Dashboard)",
        "url": "https://www.cityoffullerton.com/government/departments/community-and-economic-development/solar-installation-maps-data-metrics"
      },
      {
        "label": "Orange County Power Authority: FAQ (current member cities)",
        "url": "https://www.ocpower.org/faq/"
      },
      {
        "label": "Orange County Power Authority: solar and net energy metering",
        "url": "https://www.ocpower.org/energy-programs/solar-net-energy-metering/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SolarAPP+: where SolarAPP+ is available, with the project types each jurisdiction accepts",
        "url": "https://www.gosolarapp.org/where-is-solarapp-available"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/irvine",
        "label": "Irvine, another OCPA city"
      },
      {
        "href": "/solar-companies/anaheim",
        "label": "Anaheim, with its own city utility next door"
      },
      {
        "href": "/blog/solar-panel-cleaning-california",
        "label": "Cleaning dust off solar panels, and when it matters"
      }
    ],
    "faq": [
      [
        "What is the best solar company in Fullerton?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that understand OCPA's solar program and confirm your address in writing, then compare at least three written bids for the same system built on your OCPA and SCE bill."
      ],
      [
        "What does the Orange County Power Authority pay for solar?",
        "OCPA credits exported energy on the generation side of your bill, reconciles generation charges monthly and trues up every April, paying excess generation 10% more than SCE does. It currently treats solar customers on the Net Billing Tariff as if their generation were under NEM 2.0."
      ],
      [
        "Does Fullerton issue instant solar permits?",
        "Yes, for eligible systems through SolarAPP+, which the City reported to the Energy Commission as its automated platform. In 2023, the latest year it reported, 51 of 895 residential solar permits, about 6%, were issued online."
      ],
      [
        "Do I need to clean solar panels in Fullerton?",
        "Dirt on the panels can lower their output, but whether paying for cleaning makes sense depends on how dirty the panels get and how much rain falls. Check your system's monitoring for a drop, and ask the installer whether cleaning is included in any service agreement before paying separately."
      ]
    ],
    "answer": "Solar companies in Fullerton connect to SCE, but the generation comes from the Orange County Power Authority, which pays 10% more than SCE for excess solar, trues up every April and currently treats its Net Billing Tariff customers as if they were on NEM 2.0. The City permits eligible systems through SolarAPP+ and posts a quarterly solar permit dashboard. Compare at least three written bids built on your own OCPA and SCE bill.",
    "keyFacts": [
      {
        "label": "Generation",
        "value": "Orange County Power Authority",
        "note": "Member city; SCE delivers and bills",
        "source": {
          "publisher": "Orange County Power Authority",
          "date": "2026-09-23",
          "url": "https://www.ocpower.org/faq/"
        }
      },
      {
        "label": "OCPA solar premium",
        "value": "10% more than SCE",
        "note": "For excess generation; April true-up",
        "source": {
          "publisher": "Orange County Power Authority",
          "date": "2026-09-23",
          "url": "https://www.ocpower.org/energy-programs/solar-net-energy-metering/"
        }
      },
      {
        "label": "2023 solar permits",
        "value": "895",
        "note": "12% with storage, 6% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      }
    ],
    "sections": [
      {
        "heading": "How OCPA credits a Fullerton solar home",
        "paragraphs": [
          "The Orange County Power Authority launched in 2022, and its current member cities are Buena Park, Fullerton and Irvine, with Fountain Valley beginning service soon. In a member city, customers are enrolled automatically and can opt out to SCE generation. For solar customers, SCE remains responsible for delivery charges and credits and for the bill, while OCPA handles the generation charges and credits.",
          "OCPA's terms differ from SCE's in four ways it spells out: it pays 10% more for excess generation, reconciles generation charges monthly, trues up every April so credits banked in spring and summer can be used before they convert to Net Surplus Compensation, and currently treats solar customers on the Net Billing Tariff as if their generation were under NEM 2.0. The word currently matters; ask each bidder how its savings would change if OCPA moved to the standard tariff."
        ]
      },
      {
        "heading": "Fullerton's permits and solar dashboard",
        "paragraphs": [
          "Fullerton reported SolarAPP+ to the Energy Commission as its automated permit platform, and the SolarAPP+ program lists the City as accepting solar with storage, main panel upgrades and main breaker derates. The City's 2023 report counted 895 residential solar permits, about 12% with battery storage and about 6% issued online.",
          "The City also runs a Solar Permit Dashboard, updated quarterly, that maps solar installations and separates regular residential photovoltaic permits from SolarAPP+ and commercial permits, to show how many automated permits are being completed. It is a quick way to see whether solar is common on your street before you start collecting bids. A small edge of the city maps to Anaheim Public Utilities, so confirm the utility on your bill first."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "newport-beach": {
    "name": "Newport Beach",
    "county": "Orange County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Newport Beach is SCE territory, and neither the Energy Commission's community choice map nor the Orange County Power Authority's member list puts a community choice provider in the city. SCE bills generation and delivery, and its Solar Billing Plan values exports by hour and season, locks new customers' export values for nine years and adds about $0.04 per kWh for eligible customers who enroll before 2028.",
    "local": "The City's Building Division takes all new photovoltaic and energy storage submittals online only. Residential single-family and duplex projects are eligible for SolarAPP+, which automates the plan review and permit, fee payment and inspection scheduling; all other solar projects, and any that do not qualify, go to the City's CiViC portal with its eligibility checklist, submittal requirements, standard plans and structural criteria.",
    "example": "About half of Newport Beach's 2023 solar permits included storage, a higher share than in Fullerton, Lake Forest or Tustin that year. If a bid includes a battery, ask how it meets the City's Guideline D.07 for residential energy storage systems, and have the bidder show your SCE bill with and without it.",
    "checks": [
      [
        "Permit route",
        "Say whether the job qualifies for SolarAPP+ or goes through CiViC, and why."
      ],
      [
        "Battery guideline",
        "Show how a battery meets the City's Guideline D.07 for residential energy storage."
      ],
      [
        "Structural",
        "Use the City's structural criteria for rooftop solar, or provide engineering."
      ],
      [
        "SCE plan",
        "Model SCE's Solar Billing Plan, including the added credit before 2028."
      ]
    ],
    "sources": [
      {
        "label": "City of Newport Beach: Building Division, solar photovoltaic (SolarAPP+ and CiViC)",
        "url": "https://www.newportbeachca.gov/government/departments/community-development-/building-division/solar-photovoltaic"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "Orange County Power Authority: FAQ (current member cities)",
        "url": "https://www.ocpower.org/faq/"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SolarAPP+: where SolarAPP+ is available, with the project types each jurisdiction accepts",
        "url": "https://www.gosolarapp.org/where-is-solarapp-available"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/huntington-beach",
        "label": "Huntington Beach, up the coast"
      },
      {
        "href": "/solar-companies/irvine",
        "label": "Irvine, next door on OCPA"
      },
      {
        "href": "/battery/solar-battery-company",
        "label": "How to vet a battery installer"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Newport Beach?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that are registered with SolarAPP+ or experienced with the City's CiViC portal and confirm your address in writing, then compare at least three written bids for the same system built on your own SCE bill."
      ],
      [
        "Can I submit a Newport Beach solar permit on paper?",
        "No. The City says all new photovoltaic and energy storage system submittals are online only: SolarAPP+ for qualifying single-family and duplex projects, and the CiViC portal for everything else."
      ],
      [
        "Can I add a Tesla Powerwall or other battery in Newport Beach?",
        "Yes. Energy storage submittals go through the same online routes, and the City publishes Guideline D.07 for residential energy storage systems. About half of the City's 2023 solar permits included a battery."
      ],
      [
        "How many solar permits does Newport Beach issue?",
        "Newport Beach reported 638 residential solar permits to the California Energy Commission for 2023. Of those, 324, about 51%, included battery storage, and 105, about 16%, were issued online."
      ]
    ],
    "answer": "Solar companies in Newport Beach file every new solar and battery application online: single-family and duplex projects that qualify go through SolarAPP+, and everything else through the City's CiViC portal, with the City's own guideline for residential energy storage. SCE supplies both delivery and generation. Half of Newport Beach's 2023 solar permits included a battery. Compare at least three written bids built on your SCE bill.",
    "keyFacts": [
      {
        "label": "Submittals",
        "value": "Online only",
        "note": "SolarAPP+ for single-family and duplex; CiViC for the rest",
        "source": {
          "publisher": "City of Newport Beach",
          "date": "2026-09-23",
          "url": "https://www.newportbeachca.gov/government/departments/community-development-/building-division/solar-photovoltaic"
        }
      },
      {
        "label": "2023 solar permits",
        "value": "638",
        "note": "51% with storage, 16% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Utility",
        "value": "SCE",
        "note": "No community choice provider",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      }
    ],
    "sections": [
      {
        "heading": "Newport Beach's two online permit routes",
        "paragraphs": [
          "Newport Beach no longer takes new solar or battery submittals over the counter. Residential single-family and duplex projects can go through SolarAPP+, the automated plan review developed by the National Renewable Energy Laboratory, which issues the permit, takes the fee online and schedules inspections. The SolarAPP+ program lists the City as accepting solar with storage and main panel upgrades, but not main breaker derates.",
          "All other solar projects, including those that do not fit the SolarAPP+ checklist, go through the City's CiViC portal. For those, the City publishes an eligibility checklist and submittal requirements for one- and two-family dwellings, simplified standard plans for string-inverter and microinverter systems, structural criteria for rooftop installations, a standard inspection checklist and Guideline D.07 for residential energy storage."
        ]
      },
      {
        "heading": "What Newport Beach's permits show",
        "paragraphs": [
          "The City's 2023 report to the Energy Commission counted 638 residential solar permits. Battery storage was on 324 of them, about half, and 105, about 16%, were issued online, so most went through the CiViC review rather than the automated route.",
          "With SCE supplying generation and delivery, a Newport Beach system is valued under SCE's Solar Billing Plan: exports earn hourly Energy Export Credits, rates are often higher on summer weekdays from 4 to 9 p.m., and SCE says its credits are worth less than the power you buy. That is the case for a battery. Whether it holds for your home depends on your usage, so ask for both versions of the bid."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "aliso-viejo": {
    "name": "Aliso Viejo",
    "county": "Orange County",
    "utility": "other",
    "sourceCheckedDate": "2026-09-23",
    "bill": "On the California Energy Commission's service-territory map, about 58% of Aliso Viejo's area is SCE territory and about 42% is SDG&E's, and no community choice provider serves either part. The two utilities run different Solar Billing Plan rate plans and export values, so the utility named on your bill decides which one a proposal has to model. A bid copied from a neighbor across the line may use the wrong utility.",
    "local": "Aliso Viejo's Instant Solar Permit runs through SolarAPP+ for registered contractors and covers roof-mounted solar with or without energy storage; a main electrical service upgrade can be added. The contractor pays SolarAPP+'s $25 fee, downloads the approval and applies in the City's online permit portal, then pays online or at City Hall. Any battery installed inside a garage needs an Orange County Fire Authority approved plan at inspection.",
    "example": "Before comparing prices, ask each bidder which utility it modeled and to show that utility's rate plan by name. An SDG&E home is on EV-TOU-5 under the Solar Billing Plan; an SCE home is on SCE's own time-of-use plan. If a battery is going in the garage, ask who obtains the OCFA-approved plan.",
    "checks": [
      [
        "SCE or SDG&E",
        "Name the utility from your bill and model its Solar Billing Plan and rate plan."
      ],
      [
        "Garage battery",
        "Provide an OCFA-approved plan at inspection for a battery inside the garage."
      ],
      [
        "Instant permit",
        "Confirm registration with SolarAPP+ and whether a service upgrade is included."
      ],
      [
        "Inspection",
        "Say who requests the inspection, normally scheduled for the next business day."
      ]
    ],
    "sources": [
      {
        "label": "City of Aliso Viejo: Instant Solar Permit through SolarAPP+",
        "url": "https://avcity.org/400/Solar-Permits"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "SDG&E: Solar Billing Plan",
        "url": "https://www.sdge.com/solar/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/mission-viejo",
        "label": "Mission Viejo, also split between SCE and SDG&E"
      },
      {
        "href": "/solar-companies/orange-county",
        "label": "Which utility serves each Orange County city"
      },
      {
        "href": "/blog/pge-vs-sce-vs-sdge-rates-compared",
        "label": "SCE and SDG&E rates compared"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Aliso Viejo?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that are registered with SolarAPP+, can tell you whether your address is SCE or SDG&E, and confirm it in writing. Then compare at least three written bids for the same system."
      ],
      [
        "Is Aliso Viejo served by SCE or SDG&E?",
        "Both, by address. On the Energy Commission's service-territory map about 58% of the city's area is SCE and about 42% SDG&E, with no community choice provider. Read the utility name on your bill."
      ],
      [
        "Does a battery in the garage need extra approval in Aliso Viejo?",
        "Yes. The City says any energy storage system installed inside a garage requires an Orange County Fire Authority approved plan at the time of inspection."
      ],
      [
        "How many solar permits does Aliso Viejo issue?",
        "Aliso Viejo reported 269 residential solar permits to the California Energy Commission for 2023 and 157 for 2025, all issued online, and reported none with battery storage in either year."
      ]
    ],
    "answer": "Solar companies in Aliso Viejo first need to know whether your home is on SCE or SDG&E: the city is split between the two, with SDG&E covering about two-fifths of its area on the Energy Commission's map. Permits come through the City's Instant Solar Permit via SolarAPP+, and a battery in a garage needs an Orange County Fire Authority approved plan at inspection. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Utility split",
        "value": "SCE about 58%, SDG&E about 42%",
        "note": "By area on the CEC map; check your bill",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Instant permit",
        "value": "SolarAPP+",
        "note": "With or without storage; service upgrade can be added",
        "source": {
          "publisher": "City of Aliso Viejo",
          "date": "2026-09-23",
          "url": "https://avcity.org/400/Solar-Permits"
        }
      },
      {
        "label": "Garage battery",
        "value": "OCFA-approved plan",
        "note": "Required at the time of inspection",
        "source": {
          "publisher": "City of Aliso Viejo",
          "date": "2026-09-23",
          "url": "https://avcity.org/400/Solar-Permits"
        }
      }
    ],
    "sections": [
      {
        "heading": "Two utilities in one city",
        "paragraphs": [
          "Aliso Viejo sits on the boundary between Southern California Edison and San Diego Gas & Electric. The Energy Commission's service-territory map puts about 58% of the city's area in SCE territory and about 42% in SDG&E's, and shows no community choice provider over either. Both utilities put new solar customers on a Solar Billing Plan, but each has its own rate plan and export values: SDG&E uses EV-TOU-5 with on-peak from 4 to 9 p.m., and SCE's rates are often higher on summer weekdays in the same hours.",
          "SCE adds a credit of about $0.04 per kWh for eligible customers who enroll before 2028 and trues up in the month the system started service. SDG&E lets a Solar Billing Plan customer oversize by up to 50% only with an attestation of higher expected use. A bid that does not name your utility and its rate plan is not built for your home."
        ]
      },
      {
        "heading": "Aliso Viejo's Instant Solar Permit",
        "paragraphs": [
          "The City's Instant Solar Permit is available only to contractors registered with SolarAPP+ and covers roof-mounted photovoltaic panels with or without an energy storage system; a main electrical service upgrade can be added. The contractor submits the project in SolarAPP+, pays the $25 processing fee and downloads the approval documents, then applies in the City's online permitting portal and pays the permit fees online or in person at City Hall. Inspections are requested through the portal and scheduled for the next business day unless otherwise specified.",
          "One local rule stands out: any energy storage system inside a garage requires an Orange County Fire Authority approved plan at the time of inspection. The City's reports to the Energy Commission show every one of its 269 permits in 2023 and 157 in 2025 issued online, with none reported as including storage."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "mission-viejo": {
    "name": "Mission Viejo",
    "county": "Orange County",
    "utility": "other",
    "sourceCheckedDate": "2026-09-23",
    "bill": "On the California Energy Commission's service-territory map, about 78% of Mission Viejo's area is SCE territory and about 22% is SDG&E's, with no community choice provider in either part. Both utilities put new solar customers on a Solar Billing Plan, but the rate plans and export values differ, so each bidder must model the utility printed on your bill, not the one most of your neighbors have.",
    "local": "Mission Viejo takes SolarAPP+ permits through its Client Self Service portal: the contractor gets the SolarAPP+ approval, applies under the SolarAPP+ category with the SolarAPP+ ID and checklist, signs electronically and pays. Inspections are requested in the same portal, and any revision must first go back through SolarAPP+ before a revision application is filed. The SolarAPP+ program lists the City as accepting storage but not panel upgrades or breaker derates.",
    "example": "Mission Viejo permits have shifted toward storage: 80% of 2024 permits included a battery. Ask each bidder to price solar alone and with storage, on the rate plan of your actual utility, and to say whether the design needs a main panel upgrade, which takes it outside the SolarAPP+ route here.",
    "checks": [
      [
        "SCE or SDG&E",
        "Name the utility from your bill and model its Solar Billing Plan and rate plan."
      ],
      [
        "Panel work",
        "Say whether a panel upgrade or breaker derate is needed; neither fits SolarAPP+ here."
      ],
      [
        "Revisions",
        "Route any design change back through SolarAPP+ before the City revision application."
      ],
      [
        "Battery",
        "Price the battery separately, with usable kWh and backed-up circuits."
      ]
    ],
    "sources": [
      {
        "label": "City of Mission Viejo: SolarAPP+ (Client Self Service)",
        "url": "https://www.missionviejo.gov/departments/community-development/solarapp"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SolarAPP+: where SolarAPP+ is available, with the project types each jurisdiction accepts",
        "url": "https://www.gosolarapp.org/where-is-solarapp-available"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "SDG&E: Solar Billing Plan",
        "url": "https://www.sdge.com/solar/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/aliso-viejo",
        "label": "Aliso Viejo, split the other way"
      },
      {
        "href": "/solar-companies/lake-forest",
        "label": "Lake Forest next door, all SCE"
      },
      {
        "href": "/battery/home-battery-cost-california",
        "label": "What a home battery costs in California"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Mission Viejo?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that are registered with SolarAPP+ and can confirm whether your address is SCE or SDG&E, then compare at least three written bids for the same system built on your own bill."
      ],
      [
        "Is Mission Viejo served by SCE or SDG&E?",
        "Mostly SCE. On the Energy Commission's service-territory map about 78% of the city's area is SCE and about 22% SDG&E, with no community choice provider. The name on your bill settles it."
      ],
      [
        "How do I change a solar design after the Mission Viejo permit is issued?",
        "Any revision to a SolarAPP+ project must first go back through the SolarAPP+ approval process. With the revised checklist and ID, the contractor files a SolarAPP+ Revision application in Client Self Service, including the original City permit number, and pays the fee."
      ],
      [
        "How many solar permits does Mission Viejo issue?",
        "Mission Viejo reported 91 residential solar permits to the California Energy Commission for 2023 and 486 for 2024. Of the 2024 permits, 390, about 80%, included battery storage, and 219, about 45%, were issued online."
      ]
    ],
    "answer": "Solar companies in Mission Viejo apply for eligible rooftop systems through SolarAPP+ and the City's Client Self Service portal, where inspections and revisions are handled too. Most of the city is SCE territory, but about a fifth of its area is SDG&E's on the Energy Commission's map, so the utility on your bill decides which Solar Billing Plan applies. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Utility split",
        "value": "SCE about 78%, SDG&E about 22%",
        "note": "By area on the CEC map; check your bill",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "486",
        "note": "80% with storage, 45% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Permit portal",
        "value": "Client Self Service",
        "note": "SolarAPP+ category; inspections and revisions there",
        "source": {
          "publisher": "City of Mission Viejo",
          "date": "2026-09-23",
          "url": "https://www.missionviejo.gov/departments/community-development/solarapp"
        }
      }
    ],
    "sections": [
      {
        "heading": "Mission Viejo's SolarAPP+ permit in Client Self Service",
        "paragraphs": [
          "The contractor starts in SolarAPP+, which charges a processing fee and generates a checklist and SolarAPP+ ID when the design is approved. It then logs in to the City's Client Self Service portal, applies under the SolarAPP+ category, enters owner, applicant and contractor information and the SolarAPP+ ID, uploads the checklist and other documents, signs electronically and pays the permit fee. Inspections are requested from the permit's Inspection tab in the same portal.",
          "Changes follow the same order. A revision must first go back through SolarAPP+ for a revised checklist and ID; only then does the contractor file a SolarAPP+ Revision application in Client Self Service with the original City permit number. The SolarAPP+ program lists Mission Viejo as accepting solar with storage but not main panel upgrades or main breaker derates, so a design that needs either goes through regular review."
        ]
      },
      {
        "heading": "A mostly SCE city with an SDG&E corner",
        "paragraphs": [
          "About 78% of Mission Viejo's area is SCE territory on the Energy Commission's map and about 22% is SDG&E's. On SCE's Solar Billing Plan, export values are locked for nine years and eligible customers who enroll before 2028 get about $0.04 per kWh more; the True-Up comes in the month the system started. On SDG&E's, residential customers use EV-TOU-5 with on-peak from 4 to 9 p.m., and a system can exceed past use by up to 50% only with an attestation.",
          "The City's permits show the effect of those plans. In 2023 Mission Viejo reported 91 residential solar permits, none issued online; in 2024 it reported 486, about 45% online and about 80% with a battery. Whichever utility you have, ask for your bill modeled with and without storage."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "lake-forest": {
    "name": "Lake Forest",
    "county": "Orange County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Lake Forest is SCE territory with no community choice provider on the Energy Commission's maps, and it is not a member of the Orange County Power Authority. SCE bills generation and delivery, and its Solar Billing Plan credits exports at hourly values, locks new customers' values for nine years and adds about $0.04 per kWh for eligible customers who enroll before 2028. Have each bidder model that from your bill.",
    "local": "Since September 25, 2023, eligible photovoltaic projects in Lake Forest can be submitted, reviewed and approved through SolarAPP+ by appropriately licensed contractors, for main-dwelling rooftop systems on permitted residential structures. The contractor pays SolarAPP+'s $25 fee, then applies in eLakeForest under SolarAPP+ Residential Solar Permit and pays through MyGovPay for instant issuance. Projects that do not qualify go to the City's in-house plan check.",
    "example": "Ask each bidder whether your home needs a main panel upgrade. In Lake Forest that is a separate electrical permit, filed in person or by email with SCE's spot sticker, with its own fees and time, and a bid that leaves it out may be understating both. Then compare the SCE bill each design leaves you with.",
    "checks": [
      [
        "Panel upgrade",
        "File any main panel upgrade on a separate electrical permit with SCE's spot sticker."
      ],
      [
        "Attachments",
        "Upload accurate SolarAPP+ documents; the City can revoke permits with no refund."
      ],
      [
        "Payment fee",
        "Note MyGovPay's 3.29% processing fee in the permit cost."
      ],
      [
        "SCE plan",
        "Model SCE's Solar Billing Plan, including the added credit before 2028."
      ]
    ],
    "sources": [
      {
        "label": "City of Lake Forest: SolarAPP+ automated solar plan review",
        "url": "https://www.lakeforestca.gov/departments/community_development/building/solar.php"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "Orange County Power Authority: FAQ (current member cities)",
        "url": "https://www.ocpower.org/faq/"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/irvine",
        "label": "Irvine, next door on OCPA"
      },
      {
        "href": "/solar-companies/mission-viejo",
        "label": "Mission Viejo, split between SCE and SDG&E"
      },
      {
        "href": "/blog/sce-time-of-use-rates-2026",
        "label": "SCE time-of-use hours and a solar estimate"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Lake Forest?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that are registered with SolarAPP+ and confirm your address in writing, then compare at least three written bids for the same system built on your own SCE bill."
      ],
      [
        "Does a panel upgrade go on the Lake Forest solar permit?",
        "No. The City says any change to the main service panel needs a separate application, permit and fees. You can submit the main panel upgrade permit in person or email the electrical permit application with SCE's spot sticker to the Building Division."
      ],
      [
        "How do I schedule a solar inspection in Lake Forest?",
        "Through the eLakeForest portal or the automated phone line at (888) 890-6298, once the work is complete. Revisions go back through SolarAPP+ first."
      ],
      [
        "How many solar permits does Lake Forest issue?",
        "Lake Forest reported 811 residential solar permits to the California Energy Commission for 2023 and 341 for 2024. Of the 2024 permits, 246, about 72%, included battery storage, and 163, about 48%, were issued online."
      ]
    ],
    "answer": "Solar companies in Lake Forest can get an instant permit through SolarAPP+ and eLakeForest, the City's online permit portal, for eligible rooftop systems on permitted homes, a route open since September 25, 2023. A main panel upgrade needs its own electrical permit, filed with SCE's spot sticker. SCE supplies the power, with no community choice provider. Compare at least three written bids built on your own SCE bill.",
    "keyFacts": [
      {
        "label": "Instant permit",
        "value": "SolarAPP+ and eLakeForest",
        "note": "Since September 25, 2023",
        "source": {
          "publisher": "City of Lake Forest",
          "date": "2026-09-23",
          "url": "https://www.lakeforestca.gov/departments/community_development/building/solar.php"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "341",
        "note": "72% with storage, 48% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      },
      {
        "label": "Panel upgrade",
        "value": "Separate permit",
        "note": "Filed with SCE's spot sticker",
        "source": {
          "publisher": "City of Lake Forest",
          "date": "2026-09-23",
          "url": "https://www.lakeforestca.gov/departments/community_development/building/solar.php"
        }
      }
    ],
    "sections": [
      {
        "heading": "Lake Forest's SolarAPP+ permit",
        "paragraphs": [
          "Lake Forest launched SolarAPP+ on September 25, 2023, for appropriately licensed contractors. Eligible projects are main-dwelling rooftop systems on permitted residential structures that match the SolarAPP+ checklist; anything else is submitted for in-house plan check by the City. The contractor submits the design in SolarAPP+, pays the $25 processing fee and downloads the approval documents.",
          "In eLakeForest, the contractor chooses SolarAPP+ Residential Solar Permit, enters the permit details and the SolarAPP+ approval number, and submits. For instant issuance it adds the invoice to the cart and pays through MyGovPay, which charges a 3.29% processing fee, and receives the permit by email. The City warns that inaccurate or incorrect attachments cause delays or revocation of issued permits, with no refunds for revoked permits."
        ]
      },
      {
        "heading": "Panel upgrades, inspections and permit numbers",
        "paragraphs": [
          "A main panel upgrade is the most common reason a Lake Forest solar job needs a second permit. The City requires a separate application, permit and fees for any change to the main service panel, submitted in person or by emailing the electrical permit application with SCE's spot sticker to the Building Division. Inspections for the solar permit are scheduled in eLakeForest or at (888) 890-6298 once the work is done.",
          "The City's reports to the Energy Commission show 811 residential solar permits in 2023, about 19% issued online and 19% with storage, and 341 in 2024, about 48% online and 72% with storage. More batteries and more instant permits: ask each bidder which route your design takes and whether a panel upgrade is part of it."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "tustin": {
    "name": "Tustin",
    "county": "Orange County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "The City of Tustin and unincorporated North Tustin are both SCE territory on the Energy Commission's maps, with no community choice provider, and neither is an Orange County Power Authority member. SCE bills generation and delivery, and its Solar Billing Plan credits exports hour by hour, locks new customers' values for nine years and adds about $0.04 per kWh for eligible customers who enroll before 2028.",
    "local": "Tustin's SolarAPP+ route covers most residential roof-mounted retrofit systems, but not properties in the Cultural Resource District or listed as eligible in the City's Historic Resource Survey. After SolarAPP+ approval, the contractor applies for a City of Tustin Electrical Photovoltaic (SolarAPP) permit, choosing standalone solar, solar with battery, solar with panel upgrade, or solar with battery and panel upgrade. The type cannot be modified once selected.",
    "example": "If you live in North Tustin, your permit comes from OC Development Services, not the City, and a bidder whose experience is all City of Tustin may not know the County's steps. For a City home, ask the bidder which of the four permit types it will file and why, since changing the scope later means a new application.",
    "checks": [
      [
        "City or county",
        "Confirm whether the address is in the City of Tustin or unincorporated North Tustin."
      ],
      [
        "Permit type",
        "Name the Tustin permit type: solar, solar with battery, with panel upgrade, or both."
      ],
      [
        "Historic district",
        "Confirm the home is not in the Cultural Resource District or on the historic survey."
      ],
      [
        "SCE plan",
        "Model SCE's Solar Billing Plan, including the added credit before 2028."
      ]
    ],
    "sources": [
      {
        "label": "City of Tustin: SolarApp+ for solar installers",
        "url": "https://www.tustinca.org/1436/SolarApp-for-Solar-Installers"
      },
      {
        "label": "OC Development Services: expedited solar PV and SolarAPP+ for unincorporated Orange County",
        "url": "https://pwds.oc.gov/service-areas/oc-development-services/building-safety/building-grading-information/solar-pv"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "Orange County Power Authority: FAQ (current member cities)",
        "url": "https://www.ocpower.org/faq/"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/santa-ana",
        "label": "Santa Ana, Tustin's neighbor to the west"
      },
      {
        "href": "/solar-companies/orange-county",
        "label": "Who permits unincorporated Orange County"
      },
      {
        "href": "/blog/hoa-solar-rights-california",
        "label": "What an HOA can and cannot require for solar"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in North Tustin?",
        "This site does not rank them. North Tustin is unincorporated, so shortlist companies with a CSLB license covering solar that have filed County of Orange permits through OC Development Services, confirm your address in writing, and give you at least three written bids for the same system built on your SCE bill."
      ],
      [
        "Who issues solar permits in North Tustin?",
        "The County of Orange, through OC Development Services, which offers SolarAPP+ to registered licensed contractors for roof-mounted systems on existing permitted homes. The City of Tustin issues permits only inside city limits."
      ],
      [
        "How do I schedule a solar inspection in Tustin?",
        "In the City's online portal, from the permit record (SAPP-202X-XXXXX), by 3 p.m. the business day before. On the day, you can call the inspectors between 7:30 and 8 a.m. for a time window. The SolarAPP+ approval document and plans must be printed and on site."
      ],
      [
        "How many solar permits does Tustin issue?",
        "The City of Tustin reported 63 residential solar permits to the California Energy Commission for 2023, about 38% with battery storage and about 21% issued online. The County of Orange, which permits North Tustin, reported 1,328 for its unincorporated areas that year."
      ]
    ],
    "answer": "Solar companies in Tustin file an eligible rooftop design through SolarAPP+ and then the City's Electrical Photovoltaic (SolarAPP) permit in its online portal, choosing one of four permit types that cannot be changed later. Homes in North Tustin are outside the city and permitted by the County of Orange. Both are SCE territory with no community choice provider. Compare at least three written bids built on your own SCE bill.",
    "keyFacts": [
      {
        "label": "City permit",
        "value": "Electrical Photovoltaic (SolarAPP)",
        "note": "Four permit types; cannot be changed once chosen",
        "source": {
          "publisher": "City of Tustin",
          "date": "2026-09-23",
          "url": "https://www.tustinca.org/1436/SolarApp-for-Solar-Installers"
        }
      },
      {
        "label": "North Tustin",
        "value": "County of Orange",
        "note": "OC Development Services, SolarAPP+",
        "source": {
          "publisher": "OC Development Services",
          "date": "2026-09-23",
          "url": "https://pwds.oc.gov/service-areas/oc-development-services/building-safety/building-grading-information/solar-pv"
        }
      },
      {
        "label": "Utility",
        "value": "SCE",
        "note": "City and North Tustin; no community choice provider",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      }
    ],
    "sections": [
      {
        "heading": "Tustin's SolarAPP+ permit",
        "paragraphs": [
          "Tustin uses SolarAPP+ for most residential, roof-mounted retrofit systems that match its eligibility list, with one local exclusion: properties in the Cultural Resource District, or listed as eligible individual properties in the City's Historic Resource Survey, cannot use the streamlined route, and applications for ineligible projects may be denied or revoked. Licensed contractors register with SolarAPP+, submit the design, pay its processing fee and download the approved plans.",
          "They then apply for a City of Tustin Electrical Photovoltaic (SolarAPP) permit in the City's portal, choosing standalone solar, solar with battery, solar with panel upgrade, or solar with battery and panel upgrade. The type cannot be modified once selected. Inspections are requested from the permit record by 3 p.m. the business day before; revisions add the revised SolarAPP+ approval, plans and a narrative letter to the existing permit, or go to Tustin Building by email if the change makes the project ineligible."
        ]
      },
      {
        "heading": "North Tustin is County territory",
        "paragraphs": [
          "North Tustin, the unincorporated area north and east of the city, is not part of the City of Tustin, so its building permits come from the County of Orange. OC Development Services adopted SolarAPP+ under SB 379 for roof-mounted photovoltaic systems on existing residential homes, available to licensed contractors registered with SolarAPP+, and also offers an expedited plan check under AB 2188 with its own eligibility checklist and standard plans.",
          "Both areas are SCE territory with no community choice provider on the Energy Commission's maps, so the bill side is the same. The paperwork side is not: ask each bidder which office it will file with, and look for recent permits with that office. The City of Tustin reported 63 residential solar permits for 2023; the County reported 1,328 for all its unincorporated areas."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "burbank": {
    "name": "Burbank",
    "county": "Los Angeles County",
    "utility": "bwp",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Burbank is entirely Burbank Water and Power territory on the California Energy Commission's map, and BWP sets its own solar program: the City Council approved BWP's Solar Net Billing on January 14, 2025, and it applies to every system whose permit was applied for from January 1, 2026. Exports are valued at BWP's avoided cost of energy, with credit applied to the next bill and a check once a year on request.",
    "local": "BWP's installer steps run alongside the City permit: review Burbank's solar requirements, get BWP's Confirmation of Services document and submit it with full plans to Building and Safety, email the Electrical Interconnection and Metering Agreement to BWP, then apply for the permit, which is an instant permit for residential systems. Inspections are scheduled in Burbank Online Permits, and after the final BWP installs a performance meter.",
    "example": "Under Solar Net Billing a system can be sized up to 150% of your last twelve months of use, and systems of 10 kW AC or less skip BWP's sizing review. That makes a larger system possible, but a bigger system is only worth it if the extra output earns enough at BWP's avoided cost. Ask each bidder to show your BWP bill at two system sizes.",
    "checks": [
      [
        "BWP rules",
        "Model BWP's Solar Net Billing at its avoided cost, not SCE's Solar Billing Plan."
      ],
      [
        "System size",
        "Stay within 150% of the last 12 months' use; 10 kW AC or less skips sizing review."
      ],
      [
        "BWP paperwork",
        "Include the Confirmation of Services and the Interconnection and Metering Agreement."
      ],
      [
        "Performance meter",
        "Say when BWP will install the performance meter after the final inspection."
      ]
    ],
    "sources": [
      {
        "label": "Burbank Water and Power: Solar Net Billing (program for permits applied for from January 1, 2026)",
        "url": "https://www.burbankwaterandpower.com/solar-net-billing"
      },
      {
        "label": "Burbank Water and Power: solar FAQ (sizing, grandfathering, battery rebate)",
        "url": "https://www.burbankwaterandpower.com/solar-net-billing-faq"
      },
      {
        "label": "Burbank Water and Power: solar installer instructions (interconnection, permit, performance meter)",
        "url": "https://www.burbankwaterandpower.com/solar-installer-instructions"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/glendale",
        "label": "Glendale, with its own city utility too"
      },
      {
        "href": "/solar-companies/los-angeles",
        "label": "Los Angeles, on LADWP next door"
      },
      {
        "href": "/battery/solar-battery-company",
        "label": "How to vet a battery installer"
      }
    ],
    "faq": [
      [
        "Is it worth going solar in Burbank in 2026?",
        "It depends on your BWP bill and the system price, not on a rule of thumb. New systems are on BWP's Solar Net Billing, which credits exported power at BWP's avoided cost, so the value comes mostly from the power you use yourself. Ask for written bids that model Solar Net Billing on your own usage, and compare them with doing nothing."
      ],
      [
        "Does Burbank Water and Power still offer net metering?",
        "Only to existing customers. BWP grandfathers systems whose permits were applied for before January 1, 2026 on its NEM 1.0 rate until January 1, 2046. Moving to a buyer outside the immediate family or enlarging the system ends grandfathering; adding a battery or replacing broken parts does not."
      ],
      [
        "How big can a solar system be in Burbank?",
        "For permits applied for after January 1, 2026, the system's annual output cannot exceed 150% of your previous 12 months of use, and systems of 10 kW CEC-AC or less are exempt from sizing review."
      ],
      [
        "Does BWP offer a battery rebate?",
        "Yes. BWP says it offers a Battery Storage Rebate because battery installations have not kept pace with solar, and storage lets a customer use solar energy in the evening when power costs BWP more to buy."
      ],
      [
        "How many solar permits does Burbank issue?",
        "The City reported 298 residential solar permits to the California Energy Commission for 2023, one of them with battery storage and none issued online. It reports Symbium as its automated permit platform."
      ]
    ],
    "answer": "Solar companies in Burbank work with Burbank Water and Power, the City's own utility, not SCE. Since January 1, 2026, new systems go on BWP's Solar Net Billing, which pays for exported power at BWP's avoided cost and lets a system produce up to 150% of your past year's use. BWP installs its own performance meter after the City's final inspection. Compare at least three written bids built on your own BWP bill.",
    "keyFacts": [
      {
        "label": "Electric utility",
        "value": "Burbank Water and Power",
        "note": "City-owned; Solar Net Billing since Jan. 1, 2026",
        "source": {
          "publisher": "Burbank Water and Power",
          "date": "2026-09-23",
          "url": "https://www.burbankwaterandpower.com/solar-net-billing"
        }
      },
      {
        "label": "Size limit",
        "value": "150% of past-year use",
        "note": "10 kW AC or less skips sizing review",
        "source": {
          "publisher": "Burbank Water and Power",
          "date": "2026-09-23",
          "url": "https://www.burbankwaterandpower.com/solar-net-billing-faq"
        }
      },
      {
        "label": "Legacy NEM",
        "value": "Grandfathered to 2046",
        "note": "Permits applied for before Jan. 1, 2026",
        "source": {
          "publisher": "Burbank Water and Power",
          "date": "2026-09-23",
          "url": "https://www.burbankwaterandpower.com/solar-net-billing-faq"
        }
      }
    ],
    "sections": [
      {
        "heading": "BWP's Solar Net Billing",
        "paragraphs": [
          "The Burbank City Council approved Solar Net Billing on January 14, 2025, and it began on January 1, 2026. Every new installation is billed under it: when the system produces more than the home uses, BWP credits the excess at its avoided cost of energy at the time, rather than through energy credits and a cash-out. After the credits net out the bill, any extra dollars carry to the next bill, and BWP will send excess dollars by check once a year on request. Credit values differ by time of day and season, higher in summer peak hours.",
          "The change came with larger size limits. Systems whose permits were applied for after January 1, 2026 can produce up to 150% of the previous twelve months of use, systems of 10 kW CEC-AC or less skip sizing review, and new homes are estimated by BWP staff or at 4 watts DC per square foot of conditioned space. You still receive a monthly bill with fixed charges for poles, wires and administration."
        ]
      },
      {
        "heading": "Permit, interconnection and meter in Burbank",
        "paragraphs": [
          "BWP and the City's Building and Safety Division work in sequence. The installer reviews the City's solar requirements, including performance meter and labeling rules, obtains BWP's Confirmation of Services document and submits it with full plans, and emails the Electrical Interconnection and Metering Agreement to BWP. Residential systems then receive an instant permit. After installation, inspections are scheduled at least a day ahead in Burbank Online Permits, and once the permit is finaled BWP schedules a visit to install the performance meter and run safety tests, leaving a door hanger when the system is connected.",
          "The City reported 298 residential solar permits to the Energy Commission for 2023, with one battery among them, and it reports Symbium as its automated platform. Existing solar homes keep NEM 1.0 until January 1, 2046, and adding a battery does not end that; a sale outside the immediate family or a bigger array does."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "diamond-bar": {
    "name": "Diamond Bar",
    "county": "Los Angeles County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Diamond Bar is SCE territory, and the Energy Commission's community choice map shows no provider over the city, so SCE bills generation and delivery. On SCE's Solar Billing Plan, exports earn Energy Export Credits that vary by hour and season, new customers' values are locked for nine years, and eligible customers who enroll before 2028 receive about $0.04 per kWh more. Have each bidder model that plan from your own bill.",
    "local": "Diamond Bar's Instant Solar Permit is for contractors registered with SolarAPP+ and covers roof-mounted solar with or without an energy storage system, including a main electrical service upgrade. The contractor pays SolarAPP+'s $25 fee, then applies in the City's online permitting portal with the SolarAPP+ documents and solar plans including a single-line diagram. A City of Diamond Bar business license is required.",
    "example": "If a Diamond Bar bid includes a battery, the job has two inspection agencies: the Los Angeles County Fire Department inspects energy storage before the City's building inspection. Ask each bidder who schedules the fire inspection and how that affects the timeline, and have the battery priced as its own line.",
    "checks": [
      [
        "Business license",
        "Show an active Diamond Bar business license; the permit requires one."
      ],
      [
        "Fire inspection",
        "For a battery, schedule the LA County Fire inspection before the City's."
      ],
      [
        "Service upgrade",
        "Say whether a main service upgrade is added to the Instant Solar Permit."
      ],
      [
        "SCE plan",
        "Model SCE's Solar Billing Plan, including the added credit before 2028."
      ]
    ],
    "sources": [
      {
        "label": "City of Diamond Bar: Instant Solar Permit (ISP) through SolarAPP+",
        "url": "https://www.diamondbarca.gov/1149/Instant-Solar-Permit-ISP"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/yorba-linda",
        "label": "Yorba Linda, over the hills in Orange County"
      },
      {
        "href": "/solar-companies/rancho-cucamonga",
        "label": "Rancho Cucamonga, to the east"
      },
      {
        "href": "/blog/sce-solar-billing-plan",
        "label": "SCE's Solar Billing Plan, explained"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Diamond Bar?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar and a Diamond Bar business license that are registered with SolarAPP+ and confirm your address in writing, then compare at least three written bids for the same system."
      ],
      [
        "Does a battery need a fire inspection in Diamond Bar?",
        "Yes. The City says the Los Angeles County Fire Department must inspect projects with energy storage systems before the City's building inspections."
      ],
      [
        "When are solar inspections done in Diamond Bar?",
        "Monday through Thursday. Inspections are scheduled the day before through the City's inspection request hotline, and the day's schedule with time frames is posted on the City website by 8:30 a.m."
      ],
      [
        "How many solar permits does Diamond Bar issue?",
        "Diamond Bar reported 61 residential solar permits to the California Energy Commission for 2023. Of those, 43, about 70%, included battery storage, and 21, about 34%, were issued online."
      ]
    ],
    "answer": "Solar companies in Diamond Bar can get the City's Instant Solar Permit through SolarAPP+ for rooftop solar with or without a battery, and a main service upgrade can be added. A Diamond Bar business license is required, and a battery also needs Los Angeles County Fire Department inspections before the City's. SCE supplies the power, with no community choice provider. Compare at least three written bids built on your own SCE bill.",
    "keyFacts": [
      {
        "label": "Instant permit",
        "value": "SolarAPP+ ISP",
        "note": "With or without storage; service upgrade can be added",
        "source": {
          "publisher": "City of Diamond Bar",
          "date": "2026-09-23",
          "url": "https://www.diamondbarca.gov/1149/Instant-Solar-Permit-ISP"
        }
      },
      {
        "label": "Battery inspection",
        "value": "LA County Fire first",
        "note": "Before the City's building inspection",
        "source": {
          "publisher": "City of Diamond Bar",
          "date": "2026-09-23",
          "url": "https://www.diamondbarca.gov/1149/Instant-Solar-Permit-ISP"
        }
      },
      {
        "label": "2023 solar permits",
        "value": "61",
        "note": "70% with storage, 34% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      }
    ],
    "sections": [
      {
        "heading": "Diamond Bar's Instant Solar Permit",
        "paragraphs": [
          "The City's Instant Solar Permit is issued through SolarAPP+ for code-compliant residential rooftop systems. It is only for contractors registered with SolarAPP+, and it accepts roof-mounted photovoltaic panels with or without an energy storage system; a main electrical service upgrade can be added to the same permit. Only systems on the SolarAPP+ eligibility checklists qualify.",
          "The contractor submits the project in SolarAPP+, pays the $25 processing fee and downloads the approval documents, then applies for the Instant Solar Permit in the City's online permitting portal, uploading those documents and solar plans with a single-line diagram. A City of Diamond Bar business license is required."
        ]
      },
      {
        "heading": "Inspections, batteries and Diamond Bar's numbers",
        "paragraphs": [
          "Inspections run Monday through Thursday and are requested the day before on the City's inspection hotline; the day's schedule with time frames goes up on the City website by 8:30 a.m. When the project includes energy storage, the Los Angeles County Fire Department inspects first, before the City's building inspections, so a battery adds a step.",
          "Diamond Bar's volume is small: 61 residential solar permits in 2023, the latest year it reported to the Energy Commission. About 70% of them included battery storage, a high share for that year, and about 34% were issued online. With SCE's credits for exports worth less than the power you buy, a battery can make sense; ask for both versions of the bid."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "downey": {
    "name": "Downey",
    "county": "Los Angeles County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "On the Energy Commission's maps, SCE delivers power across Downey and Clean Power Alliance supplies generation over about 97% of the city. CPA compensates rooftop solar with credits on the generation part of the bill, while SCE credits the delivery part. For systems SCE approved after August 31, 2023, CPA's own Solar Billing Plan applies on the generation side and SCE's on the delivery side. Have each bidder model both.",
    "local": "Downey uses SolarAPP+ for automated solar permits, according to its SB 379 filing with the Energy Commission. Of the four project types SolarAPP+ handles, Downey takes all of them: panels alone, panels with a battery, a main panel upgrade and a main breaker derate. No Downey annual permit report appears in the Commission's file yet, which leaves installer experience as the best guide to timing.",
    "example": "CPA's Solar Billing Plan values exports hourly, and CPA says solar paired with a battery can provide higher value than solar alone; it announced residential battery rebates beginning in early 2024. Ask each bidder to show your CPA and SCE bill with and without a battery, and whether its price assumes a CPA rebate.",
    "checks": [
      [
        "CPA and SCE",
        "Model CPA's generation credits and SCE's delivery credits separately."
      ],
      [
        "Plan by date",
        "Say whether the system falls under CPA's Solar Billing Plan (SCE approval after Aug. 31, 2023)."
      ],
      [
        "Battery rebate",
        "Say whether the price assumes a CPA battery rebate, and its status."
      ],
      [
        "Automated permit",
        "Confirm the design matches the SolarAPP+ checklists so the permit can issue without plan review."
      ]
    ],
    "sources": [
      {
        "label": "Clean Power Alliance: solar, net energy metering and Solar Billing Plan",
        "url": "https://cleanpoweralliance.org/solar/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SolarAPP+: where SolarAPP+ is available, with the project types each jurisdiction accepts",
        "url": "https://www.gosolarapp.org/where-is-solarapp-available"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/bellflower",
        "label": "Bellflower, Downey's neighbor to the south"
      },
      {
        "href": "/solar-companies/santa-monica",
        "label": "Santa Monica, another Clean Power Alliance city"
      },
      {
        "href": "/battery/sgip-battery-rebate-california",
        "label": "The state's SGIP battery rebate"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Downey?",
        "No ranking here, and a high search position is not evidence of good work. A useful Downey shortlist is companies whose CSLB license covers solar, who can explain how Clean Power Alliance and SCE split your credits, and who put in writing that they serve your street. Get three or more written bids on one design and compare them line by line."
      ],
      [
        "Who supplies electricity in Downey?",
        "SCE delivers it and sends the bill. On the Energy Commission's community choice map, Clean Power Alliance supplies the generation over about 97% of the city; check your bill for the provider."
      ],
      [
        "What does Clean Power Alliance pay for surplus solar?",
        "For its net energy metering customers, CPA trues up every April and pays net surplus at a rate 10% higher than SCE's. A credit over $100 is paid by check; a smaller credit stays on the bill unless you ask CPA for a check."
      ],
      [
        "Does Downey have instant solar permits?",
        "Downey reported SolarAPP+ to the Energy Commission as its automated platform, and the SolarAPP+ program lists the City as accepting solar with storage, main panel upgrades and main breaker derates. Ask your installer whether your design qualifies."
      ]
    ],
    "answer": "Solar companies in Downey connect to SCE, but Clean Power Alliance supplies the generation for almost the whole city and settles solar credits every April, paying annual surplus 10% above SCE's rate. Downey reported SolarAPP+ as its automated permit platform, and the SolarAPP+ program lists it as accepting batteries, panel upgrades and breaker derates. Compare at least three written bids built on your own CPA and SCE bill.",
    "keyFacts": [
      {
        "label": "Generation",
        "value": "Clean Power Alliance",
        "note": "About 97% of the city; SCE delivers",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "CPA true-up",
        "value": "Every April",
        "note": "Net surplus 10% above SCE's rate",
        "source": {
          "publisher": "Clean Power Alliance",
          "date": "2026-09-23",
          "url": "https://cleanpoweralliance.org/solar/"
        }
      },
      {
        "label": "Automated permit",
        "value": "SolarAPP+",
        "note": "Storage, panel upgrades and breaker derates accepted",
        "source": {
          "publisher": "SolarAPP+",
          "date": "2026-09-23",
          "url": "https://www.gosolarapp.org/where-is-solarapp-available"
        }
      }
    ],
    "sections": [
      {
        "heading": "How Clean Power Alliance credits a Downey solar home",
        "paragraphs": [
          "Clean Power Alliance supplies generation to most Downey homes and compensates rooftop solar with credits on the generation portion of the SCE bill; SCE handles the delivery side. For customers on CPA's net energy metering program, whose systems SCE approved on or before August 31, 2023, CPA bills energy charges net of credits monthly and trues everyone up each April rather than on individual dates, paying net surplus at 10% above SCE's rate. Credits over $100 come as a check.",
          "Systems SCE approved after August 31, 2023 are on CPA's Solar Billing Plan for generation and SCE's for delivery. Imports are charged at your time-of-use rate and exports earn Energy Export Credits based on hourly avoided-cost prices, which CPA says makes solar paired with a battery more valuable than solar alone. CPA said it would offer residential battery rebates beginning in early 2024; ask whether a bid's price depends on one and whether it is still available."
        ]
      },
      {
        "heading": "Permits in Downey",
        "paragraphs": [
          "Downey's choice of SolarAPP+ covers more ground than several nearby platforms: panels, panels with a battery, a main panel upgrade and a main breaker derate can all go through it. That means a typical rooftop design, even one that needs new service equipment, can usually be approved automatically instead of waiting for plan review, as long as it matches the SolarAPP+ checklists.",
          "What is missing is a public track record. Downey has no annual permit report in the Energy Commission's file, so nobody outside City Hall can say how many local permits went through instantly. The installers can: ask each one how many Downey jobs it has permitted this year and how many days its last one took from application to final inspection."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "palmdale": {
    "name": "Palmdale",
    "county": "Los Angeles County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "All customers within Palmdale city limits are in the service area of Energy for Palmdale's Independent Choice, Palmdale EPIC Energy, with SCE delivering the power and sending the bill; a customer can opt out and stay with SCE. The Energy Commission's maps show SCE and EPIC across the whole city. A Palmdale proposal therefore needs EPIC's solar terms on the generation side and SCE's on the delivery side.",
    "local": "Palmdale uses SolarAPP+ to issue express permits for single-family and duplex solar, eliminating plan review: the contractor completes SolarAPP+, then applies in the City's Accela Citizens Portal with the SolarAPP+ approval checklist, spec sheets, one-line diagram and a state declaration by the license holder, and the permit issues automatically once fees are paid. Batteries, commercial and multifamily systems and mobile homes use the standard permit.",
    "example": "Because Palmdale's SolarAPP+ route does not handle batteries, a solar-plus-battery bid needs a standard permit for the storage, with plan review. Ask each bidder how it will permit the battery and how long that takes, and compare its price with the same solar-only design, which can be permitted the same day.",
    "checks": [
      [
        "Battery permit",
        "Say how the battery is permitted; SolarAPP+ in Palmdale does not process storage."
      ],
      [
        "Mobile home",
        "Mobile homes cannot use SolarAPP+; name the permit path."
      ],
      [
        "EPIC and SCE",
        "Model EPIC's generation credits and SCE's delivery charges separately."
      ],
      [
        "Field changes",
        "Route revisions through SolarAPP+; field revisions may add inspection fees."
      ]
    ],
    "sources": [
      {
        "label": "City of Palmdale: SolarAPP+ express permits",
        "url": "https://www.cityofpalmdaleca.gov/1513/SolarAPP"
      },
      {
        "label": "City of Palmdale: SolarAPP+ application instructions (Accela; no battery or ESS; no mobile homes; PDF)",
        "url": "https://www.cityofpalmdaleca.gov/DocumentCenter/View/17041/Solar-APP-Instructions"
      },
      {
        "label": "Palmdale EPIC Energy: FAQs (service area, opt-out, EPIC Empowerment solar credits)",
        "url": "https://palmdaleepicenergy.com/about/faqs/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/high-desert",
        "label": "Providers and permit offices across the High Desert"
      },
      {
        "href": "/solar-companies/lancaster",
        "label": "Lancaster, with its own community choice program"
      },
      {
        "href": "/blog/what-is-nem-3-california",
        "label": "What NEM 3.0 changed for new solar"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Palmdale?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that are registered with SolarAPP+ and confirm your address in writing, then compare at least three written bids for the same system built on your EPIC and SCE bill."
      ],
      [
        "When does Palmdale EPIC pay solar customers?",
        "Under EPIC's net energy metering program, EPIC Empowerment, a month with more production than use leaves a credit for future months. If you have a credit of $100 or more during the October billing cycle, EPIC sends a check for that amount."
      ],
      [
        "Can I add a battery with Palmdale's express solar permit?",
        "Not through SolarAPP+: the City's instructions say SolarAPP+ does not process solar batteries or energy storage systems. The battery needs a standard permit through the Accela Citizens Portal."
      ],
      [
        "What does NEM 3.0 mean for solar in Palmdale in 2026?",
        "New SCE customers are on SCE's Solar Billing Plan, often called NEM 3.0, for the delivery side of the bill; exports earn hourly credits, locked for nine years, plus about $0.04 per kWh for eligible customers who enroll before 2028. EPIC sets the generation side, so ask EPIC which solar schedule a new system joins."
      ],
      [
        "How many solar permits does Palmdale issue?",
        "Palmdale reported 969 residential solar permits to the California Energy Commission for 2023. Of those, 77, about 8%, included battery storage, and 142, about 15%, were issued online."
      ]
    ],
    "answer": "Solar companies in Palmdale issue single-family and duplex solar permits as express permits through SolarAPP+ and the City's Accela Citizens Portal, but SolarAPP+ does not process batteries, and mobile homes cannot use it. SCE delivers the power and Palmdale's own EPIC Energy supplies the generation, mailing a check each fall to solar customers with a credit of $100 or more. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Generation",
        "value": "Palmdale EPIC Energy",
        "note": "All of Palmdale; SCE delivers",
        "source": {
          "publisher": "Palmdale EPIC Energy",
          "date": "2026-09-23",
          "url": "https://palmdaleepicenergy.com/about/faqs/"
        }
      },
      {
        "label": "Express permit",
        "value": "SolarAPP+ and Accela",
        "note": "Single-family and duplex; no batteries",
        "source": {
          "publisher": "City of Palmdale",
          "date": "2026-09-23",
          "url": "https://www.cityofpalmdaleca.gov/DocumentCenter/View/17041/Solar-APP-Instructions"
        }
      },
      {
        "label": "2023 solar permits",
        "value": "969",
        "note": "8% with storage, 15% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      }
    ],
    "sections": [
      {
        "heading": "Palmdale's express solar permit",
        "paragraphs": [
          "The City's Economic and Community Development Department processes eligible single-family and duplex photovoltaic applications through SolarAPP+ as express permits, with no plan review. The contractor registers with SolarAPP+, submits the project and is sent on to the Accela Citizens Portal, where it chooses the SolarAPP_Plus application, enters the SolarAPP+ ID and system size and uploads the SolarAPP+ approval checklist, equipment spec sheets, a one-line diagram and a state declaration by the license holder or a notarized agent. Once the fees are paid, the permit issues automatically.",
          "Three kinds of project stay on the standard route. SolarAPP+ does not process solar batteries or energy storage systems; mobile homes are not eligible; and commercial and multifamily systems apply for a standard solar permit in Accela. Revisions go back through SolarAPP+ and the new checklist is uploaded to Accela, and field revisions may require extra inspection fees."
        ]
      },
      {
        "heading": "EPIC, SCE and Palmdale's permit numbers",
        "paragraphs": [
          "Palmdale EPIC Energy is the City's community choice program. It covers everyone within city limits, and customers may opt out and stay with SCE. Its solar program, EPIC Empowerment, carries a credit forward when a month's production exceeds use, and mails a check to customers with a credit of $100 or more in the October billing cycle. SCE's Solar Billing Plan governs the delivery side for new systems.",
          "The City reported 969 residential solar permits to the Energy Commission for 2023, only about 8% of them with storage and about 15% issued online. With batteries excluded from the express route, a storage project here takes longer to permit than a solar-only one; the bid's schedule should reflect that."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "hesperia": {
    "name": "Hesperia",
    "county": "San Bernardino County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Hesperia is SCE territory with no community choice provider on the California Energy Commission's maps, unlike Apple Valley next door, which has its own program. SCE bills generation and delivery, and its Solar Billing Plan values exports by hour and season, locks new customers' values for nine years and adds about $0.04 per kWh for eligible customers who enroll before 2028.",
    "local": "Hesperia accepts SolarAPP+ designs for residential rooftop systems under 38 kW on legal, permitted structures, with no ground mounts or ballasted systems, no historic properties and no existing panels or batteries. Contractors need a City of Hesperia business license and a California contractor's license, pay the SolarAPP+ and City fees in SolarAPP+, and receive a City permit number within two business days of approval.",
    "example": "Hesperia's SolarAPP+ route excludes homes that already have solar. If you are adding panels, adding a battery to an existing system, or taking panels off to replace the roof, the job needs the City's regular permit, not the automated one. Ask each bidder which it is filing, and for a reroof, what removal and reinstallation will cost.",
    "checks": [
      [
        "Existing system",
        "If the home already has panels or a battery, say which regular permit the job needs."
      ],
      [
        "Business license",
        "Show a City of Hesperia business license and a CSLB license."
      ],
      [
        "Over 15 kW",
        "Plan for the extra roof-mount inspection before panels go on a system over 15 kW."
      ],
      [
        "SCE plan",
        "Model SCE's Solar Billing Plan, including the added credit before 2028."
      ]
    ],
    "sources": [
      {
        "label": "City of Hesperia: SolarAPP+ (eligibility, permit issuance, inspections)",
        "url": "https://www.cityofhesperia.us/1520/SolarAPP"
      },
      {
        "label": "San Bernardino County EZ Online Permitting: Solar with SolarAPP+ (manufactured homes to HCD)",
        "url": "https://wp.sbcounty.gov/ezop/permits/solar-with-solarapp/"
      },
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/high-desert",
        "label": "High Desert providers and permit offices"
      },
      {
        "href": "/blog/solar-panel-removal-reinstall-cost",
        "label": "What removing and reinstalling panels costs"
      },
      {
        "href": "/solar-companies/victorville",
        "label": "Victorville, the next city north"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Hesperia?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar and a Hesperia business license that confirm your address in writing, then compare at least three written bids for the same system built on your SCE bill."
      ],
      [
        "Do I need a permit to remove solar panels for a new roof in Hesperia?",
        "Plan on one. Hesperia's SolarAPP+ route does not accept homes with existing panels or battery storage, so removing and reinstalling a system, or adding to it, goes through the City's regular building permit. Ask the contractor to confirm the permit with the City before work starts."
      ],
      [
        "How long does a Hesperia SolarAPP+ permit take?",
        "The City says the applicant receives a City of Hesperia permit, numbered AEXX-XXXXX, within two business days of the SolarAPP+ approval. Inspections are requested through the City's automated phone system, and a system over 15 kW needs an extra roof-mount inspection before the panels are installed."
      ],
      [
        "Who permits solar in Oak Hills or other areas outside Hesperia?",
        "San Bernardino County, through its EZ Online Permitting portal, which uses SolarAPP+ for C-10 and C-46 contractors. The County says roof-mounted solar on a manufactured home must be permitted by the state Department of Housing and Community Development."
      ],
      [
        "How many solar permits does Hesperia issue?",
        "Hesperia reported 2,379 residential solar permits to the California Energy Commission for 2023 and 920 for 2024. About half of the 2024 permits included battery storage, and about 16% were issued online."
      ]
    ],
    "answer": "Solar companies in Hesperia can permit a new rooftop system under 38 kW through SolarAPP+ with a Hesperia business license, and the City issues the permit within two business days. A home that already has panels or a battery cannot use that route, so removing panels for a reroof or adding to a system goes through the City's regular permit. SCE supplies the power, with no community choice provider.",
    "keyFacts": [
      {
        "label": "SolarAPP+ limit",
        "value": "Under 38 kW, new systems only",
        "note": "No existing panels or batteries",
        "source": {
          "publisher": "City of Hesperia",
          "date": "2026-09-23",
          "url": "https://www.cityofhesperia.us/1520/SolarAPP"
        }
      },
      {
        "label": "Permit timing",
        "value": "Within 2 business days",
        "note": "Of SolarAPP+ approval",
        "source": {
          "publisher": "City of Hesperia",
          "date": "2026-09-23",
          "url": "https://www.cityofhesperia.us/1520/SolarAPP"
        }
      },
      {
        "label": "2024 solar permits",
        "value": "920",
        "note": "50% with storage, 16% issued online",
        "source": {
          "publisher": "California Energy Commission (SB 379 reports)",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
        }
      }
    ],
    "sections": [
      {
        "heading": "Hesperia's SolarAPP+ rules",
        "paragraphs": [
          "Hesperia accepts SolarAPP+-approved designs for residential photovoltaic projects only, and its eligibility list is specific: under 38 kW, rooftop only, no ground-mounted or ballasted systems, no existing panels or battery storage on the home, and a supporting structure that is legal, permitted and code compliant and not historic or in a historic preservation district. Contractors need a City of Hesperia business license and a valid California contractor's license.",
          "The contractor submits the project in SolarAPP+, pays the SolarAPP+ processing fee and the applicable City fees, and downloads the approval. Within two business days the City issues its own permit, numbered AEXX-XXXXX. Inspections are requested through the City's automated phone line, with the SolarAPP+ plans, the permit and the job card on site; a system over 15 kW gets an additional roof-mount inspection before the panels go on."
        ]
      },
      {
        "heading": "Reroofs, add-ons and Hesperia's permit numbers",
        "paragraphs": [
          "Because the automated route excludes homes that already have solar or storage, the jobs many Hesperia owners search for, taking panels off for a new roof, adding panels or adding a battery, need the City's regular building permit. That usually means more time and a plan review. A reroof bid should say who removes and stores the panels, who reinstalls them and who pulls the permit.",
          "The City's reports to the Energy Commission show a busy market: 2,379 residential solar permits in 2023, none issued online, and 920 in 2024, about 16% online and half with storage. Outside city limits, in Oak Hills and other unincorporated areas, San Bernardino County issues permits through EZ Online Permitting, and manufactured homes go to the state HCD instead."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "wildomar": {
    "name": "Wildomar",
    "county": "Riverside County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "bill": "Wildomar is SCE territory from end to end on the California Energy Commission's maps, with no community choice provider. SCE bills generation and delivery, and its Solar Billing Plan values exports by hour and season, locks new customers' values for nine years and adds about $0.04 per kWh for eligible customers who enroll before 2028. SCE says those credits are worth less than the power you buy, which is the case for a battery.",
    "local": "Wildomar has about 36,000 residents, and the SB 379 statute gave cities of 50,000 or fewer until September 30, 2024 to offer automated solar permitting. The City reported Symbium as its platform to the Energy Commission, while Murrieta and Menifee reported SolarAPP+ and Lake Elsinore a custom platform. Wildomar has not filed an annual SB 379 permit report in the Commission's data file.",
    "example": "Ask each bidder whether it has filed a Wildomar permit through Symbium and how long its last one took, rather than assuming the process matches a nearby city. Then compare what each design leaves on your SCE bill with and without a battery, and whether critter guards against nesting birds are included.",
    "checks": [
      [
        "Wildomar route",
        "Say whether the permit will use the City's Symbium instant review, and who files it."
      ],
      [
        "City or county",
        "Confirm the address is inside Wildomar; unincorporated neighbors are permitted by Riverside County."
      ],
      [
        "SCE plan",
        "Model SCE's Solar Billing Plan, including the added credit before 2028."
      ],
      [
        "Birds",
        "Say whether bird-proofing mesh is included or priced separately."
      ]
    ],
    "sources": [
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California Government Code section 65850.52 (SB 379 automated solar permitting schedule)",
        "url": "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/lake-elsinore",
        "label": "Lake Elsinore, next door"
      },
      {
        "href": "/solar-companies/murrieta",
        "label": "Murrieta, to the south"
      },
      {
        "href": "/blog/solar-panel-bird-proofing",
        "label": "Bird-proofing solar panels"
      }
    ],
    "faq": [
      [
        "What is the best residential solar company in Wildomar?",
        "We do not rank installers. For a Wildomar home, the practical test is whether a company holds a CSLB license that covers solar, has filed permits with the City of Wildomar recently, and will state in writing that it serves your address. Line up at least three written bids for one design, each using your SCE usage."
      ],
      [
        "Does Wildomar have instant solar permits?",
        "Wildomar reported Symbium to the California Energy Commission as its automated solar permitting platform under SB 379. It has not filed an annual permit report, so there is no public count of how many permits were issued online. Ask your installer whether your design qualifies."
      ],
      [
        "Who supplies electricity in Wildomar?",
        "SCE, for both delivery and generation. The Energy Commission's maps show SCE across the whole city and no community choice provider."
      ],
      [
        "Should I bird-proof solar panels in Wildomar?",
        "If pigeons or other birds already nest under roof equipment nearby, mesh guards around the array can keep them out from under the panels. Ask each bidder to price it as its own line rather than folding it into the system price."
      ]
    ],
    "answer": "Solar companies in Wildomar connect a home system to SCE, which serves the whole city with no community choice provider, and permit it with the City of Wildomar, which reported Symbium, not SolarAPP+, as its automated solar permit platform. Neighboring Lake Elsinore and Murrieta use different platforms, so an installer's routine there may not match Wildomar's. Compare at least three written bids built on your own SCE bill.",
    "keyFacts": [
      {
        "label": "Automated platform",
        "value": "Symbium",
        "note": "As reported to the Energy Commission",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://www.energy.ca.gov/media/9247"
        }
      },
      {
        "label": "Utility",
        "value": "SCE",
        "note": "No community choice provider",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "SB 379 deadline",
        "value": "September 30, 2024",
        "note": "Cities of 50,000 or fewer",
        "source": {
          "publisher": "California Government Code 65850.52",
          "date": "2026-09-23",
          "url": "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52"
        }
      }
    ],
    "sections": [
      {
        "heading": "Wildomar's permit platform and its neighbors'",
        "paragraphs": [
          "Government Code section 65850.52, the SB 379 statute, requires most cities to offer an online, automated permitting platform for residential solar, and gave cities of 50,000 or fewer until September 30, 2024. Wildomar, with about 36,000 residents, reported Symbium to the Energy Commission as its platform. Its neighbors made different choices: Murrieta, Menifee, Temecula and Canyon Lake reported SolarAPP+, Lake Elsinore a custom platform, and Perris Symbium.",
          "That matters when a company quotes a timeline based on work elsewhere. The Energy Commission's file has no annual SB 379 report from Wildomar yet, so there is no public figure for how many Wildomar permits are issued instantly. Ask each bidder how many Wildomar permits it has filed and whether they went through Symbium."
        ]
      },
      {
        "heading": "SCE and a Wildomar solar bill",
        "paragraphs": [
          "No community choice program operates in Wildomar, so SCE sells the power as well as delivering it. A new system joins SCE's Solar Billing Plan: the house draws on its own panels first, and whatever goes back to the grid earns an Energy Export Credit whose value moves with the hour and the season. Summer weekday evenings, 4 to 9 p.m., are when SCE's prices are often highest, and the annual settlement arrives in the month the system first went into service.",
          "Because SCE values exports below the price of the power it sells you, a battery that carries afternoon output into the evening changes the math. Have each bidder quote the same array twice, with and without storage, and show your SCE bill for each. Homes just outside the city limits fall under Riverside County, whose SB 379 platform is SolarAPP+ rather than Symbium."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "coachella-valley": {
    "name": "Coachella Valley",
    "county": "Riverside County",
    "utility": "other",
    "sourceCheckedDate": "2026-09-23",
    "seo": {
      "title": "Coachella Valley Solar Companies: How to Compare (2026)",
      "description": "Coachella Valley solar: which cities are SCE and which are IID, the Palm Springs and Rancho Mirage CCAs, each city's permit route and fixing a system.",
      "h1": "Solar Companies in the Coachella Valley: How to Compare Solar Quotes"
    },
    "bill": "The Coachella Valley has two delivery utilities and three generation arrangements. On the California Energy Commission's maps, SCE delivers power in Desert Hot Springs, Palm Springs, Cathedral City, Rancho Mirage and most of Palm Desert and Indian Wells; IID serves Indio, La Quinta, Coachella and unincorporated communities such as Bermuda Dunes, Thousand Palms, Mecca and Thermal. In Palm Springs, Desert Community Energy supplies generation over SCE, and in Rancho Mirage the Rancho Mirage Energy Authority does.",
    "local": "Every city in the valley issues its own solar permit, and they chose different automated platforms under SB 379: SolarAPP+ in Palm Desert, La Quinta, Cathedral City and Desert Hot Springs, custom systems in Palm Springs, Indio and Rancho Mirage, and none reported in Coachella. Indian Wells is small enough to be exempt. Unincorporated communities are permitted by the County of Riverside, which reported SolarAPP+.",
    "example": "A bid that uses SCE's Solar Billing Plan for an Indio or La Quinta home is modeling the wrong utility, and one that ignores Desert Community Energy in Palm Springs is missing half the bill. Ask each bidder to name your delivery utility and generation provider at the top of the proposal before comparing prices.",
    "checks": [
      [
        "Delivery utility",
        "Name SCE or IID from your bill and model that utility's solar terms."
      ],
      [
        "Generation",
        "In Palm Springs or Rancho Mirage, model DCE's or RMEA's generation charges and credits."
      ],
      [
        "Permit office",
        "Say which city, or the County of Riverside, issues the permit, and which platform it uses."
      ],
      [
        "Service after install",
        "Name who diagnoses and repairs the system after installation, and for how long."
      ]
    ],
    "region": {
      "heading": "Utilities and permit offices across the Coachella Valley",
      "intro": [
        "The California Energy Commission's utility maps split the valley between SCE in the west and the Imperial Irrigation District in the east, with small IID areas inside Palm Desert, Rancho Mirage and Indian Wells. The Commission's community choice layer shows Desert Community Energy over most of Palm Springs and the Rancho Mirage Energy Authority over most of Rancho Mirage.",
        "The permit column is each city's own report to the Energy Commission under SB 379: residential solar permits issued, the share with battery storage and the share issued online, for 2024 unless another year is named, plus the automated platform the city reported."
      ],
      "places": [
        {
          "name": "Palm Springs",
          "slug": "palm-springs",
          "utility": "SCE",
          "generation": "Desert Community Energy",
          "permit": "City of Palm Springs (custom platform): 1,574 permits, 50% with storage, 82% online"
        },
        {
          "name": "Desert Hot Springs",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Desert Hot Springs (SolarAPP+); no annual report filed"
        },
        {
          "name": "Cathedral City",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Cathedral City (SolarAPP+): 422 permits, 91% with storage, all online"
        },
        {
          "name": "Rancho Mirage",
          "utility": "SCE (a small area is IID)",
          "generation": "Rancho Mirage Energy Authority",
          "permit": "City of Rancho Mirage (custom platform): 686 permits in 2023, 20% online"
        },
        {
          "name": "Palm Desert",
          "slug": "palm-desert",
          "utility": "SCE (a small area is IID)",
          "generation": "The delivery utility",
          "permit": "City of Palm Desert (SolarAPP+): 553 permits in 2025, 28% with storage, 6% online"
        },
        {
          "name": "Indian Wells",
          "utility": "SCE (about 13% of the area is IID)",
          "generation": "The delivery utility",
          "permit": "City of Indian Wells (exempt from SB 379)"
        },
        {
          "name": "La Quinta",
          "utility": "IID",
          "generation": "IID",
          "permit": "City of La Quinta (SolarAPP+): 325 permits, 32% with storage, all online"
        },
        {
          "name": "Indio",
          "utility": "IID",
          "generation": "IID",
          "permit": "City of Indio (custom platform): 643 permits, 23% with storage, all online"
        },
        {
          "name": "Coachella",
          "utility": "IID",
          "generation": "IID",
          "permit": "City of Coachella (no automated platform reported)"
        },
        {
          "name": "Bermuda Dunes, Thousand Palms, Mecca, Thermal",
          "utility": "IID",
          "generation": "IID",
          "permit": "County of Riverside (SolarAPP+)"
        }
      ],
      "note": "\"Coachella Valley\" has no official boundary; this table covers the incorporated cities from Desert Hot Springs to Coachella and the main unincorporated communities. Utility and community choice rows are from the Energy Commission's maps, queried September 23, 2026; permit counts and platforms are the jurisdictions' own reports in the Commission's files dated May and August 2026.",
      "hub": {
        "href": "/solar-savings/inland-empire",
        "label": "Inland Empire electric rates and bills by utility"
      }
    },
    "sources": [
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "Imperial Irrigation District: about IID Energy (consumer-owned utility, service area)",
        "url": "https://www.iid.com/energy/about-iid-energy"
      },
      {
        "label": "Desert Community Energy: Palm Springs enrollment and plans",
        "url": "https://desertcommunityenergy.org/"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "California Government Code section 65850.52 (SB 379 automated solar permitting schedule and exemptions)",
        "url": "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/riverside-county",
        "label": "Riverside County utilities by city"
      },
      {
        "href": "/solar-problems/solar-panels-not-producing-enough",
        "label": "When a solar system produces less than promised"
      },
      {
        "href": "/blog/solar-panel-repair-cost",
        "label": "What solar panel repairs cost"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in the Coachella Valley?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that know whether your address is SCE or IID and which city permits it, and that confirm your address in writing. Then compare at least three written bids for the same system built on your own bill."
      ],
      [
        "Is my Coachella Valley home on SCE or IID?",
        "It depends on the city and sometimes the street. On the Energy Commission's maps, SCE serves Desert Hot Springs, Palm Springs, Cathedral City and most of Rancho Mirage, Palm Desert and Indian Wells; IID serves Indio, La Quinta, Coachella and unincorporated communities such as Bermuda Dunes and Thousand Palms. The name on your bill settles it."
      ],
      [
        "Who can diagnose a solar system that stopped producing?",
        "Start with the company that installed it, under its workmanship warranty, and the system's monitoring app, which usually shows whether the inverter or a panel string is down. If that company is gone, a contractor with a CSLB license covering solar, such as C-46 or C-10, can troubleshoot it. Meter or interconnection questions go to your utility, SCE or IID."
      ],
      [
        "What is Desert Community Energy?",
        "The community choice program for Palm Springs. It buys electricity for residents and businesses enrolled in it, while SCE delivers the power and sends one monthly bill. Palm Springs residents were enrolled in its Carbon Free plan and can opt down to its lower-cost Desert Saver plan."
      ]
    ],
    "answer": "Solar companies in the Coachella Valley have to start with the utility, because the valley is split: SCE serves the western cities from Desert Hot Springs to Palm Desert, and the Imperial Irrigation District, a consumer-owned utility, serves Indio, La Quinta, Coachella and most of the eastern valley. Palm Springs and Rancho Mirage add their own community choice programs. Each city issues its own permit. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Delivery utilities",
        "value": "SCE and IID",
        "note": "SCE in the west valley, IID in the east",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Local CCAs",
        "value": "Palm Springs, Rancho Mirage",
        "note": "Desert Community Energy; Rancho Mirage Energy Authority",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "IID",
        "value": "Consumer-owned utility",
        "note": "Imperial Valley and parts of Riverside and San Diego counties",
        "source": {
          "publisher": "Imperial Irrigation District",
          "date": "2026-09-23",
          "url": "https://www.iid.com/energy/about-iid-energy"
        }
      }
    ],
    "sections": [
      {
        "heading": "SCE, IID and the valley's two community choice programs",
        "paragraphs": [
          "IID describes itself as a consumer-owned utility serving more than 150,000 customers in the Imperial Valley and parts of Riverside and San Diego counties, which in the Coachella Valley means Indio, La Quinta, Coachella and the eastern unincorporated communities. A proposal for an IID home should cite IID's current solar program by name; SCE's Solar Billing Plan, which many valley installers quote by default, describes SCE accounts only.",
          "West of there, SCE delivers the power and, in most cities, supplies it. Palm Springs and Rancho Mirage are the exceptions: Desert Community Energy buys electricity for enrolled Palm Springs customers, who were placed on its Carbon Free plan and can opt down to Desert Saver, and the Rancho Mirage Energy Authority serves most of Rancho Mirage. SCE still sends one bill in both cities. On SCE's Solar Billing Plan, exports earn hourly credits worth less than the power you buy."
        ]
      },
      {
        "heading": "When an existing system needs a diagnosis",
        "paragraphs": [
          "Many Coachella Valley searches are about systems already on the roof. If production drops, the monitoring app or the inverter's status display usually shows whether the whole system is off or one string of panels is down. The installer's workmanship warranty is the first call; ask for the warranty terms in writing before you sign any new contract, and who performs service if the installing company closes.",
          "Permitting also varies across the valley. Cathedral City, La Quinta and Indio issued every 2024 residential solar permit online, while Palm Desert issued 6% of its 2025 permits online. Indian Wells, with fewer than 5,000 residents, is exempt from SB 379's automated permitting requirement. Ask each bidder which office has your address and how its last permit there went."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
  "ventura-county": {
    "name": "Ventura County",
    "county": "Ventura County",
    "utility": "sce",
    "sourceCheckedDate": "2026-09-23",
    "seo": {
      "title": "Ventura County Solar Companies: How to Compare Quotes (2026)",
      "description": "Ventura County solar: SCE everywhere, Clean Power Alliance in most cities, each city's permit route and SB 379 figures, and County permits for rural homes.",
      "h1": "Solar Companies in Ventura County: How to Compare Solar Panel Quotes"
    },
    "bill": "SCE delivers power across all of Ventura County on the California Energy Commission's maps. Clean Power Alliance supplies generation in Camarillo, Moorpark, Ojai, Oxnard, Simi Valley, Thousand Oaks, Ventura and the unincorporated communities, while Santa Paula, Fillmore and Port Hueneme have no community choice provider. For a CPA home, solar credits are split between CPA's generation side and SCE's delivery side of one bill.",
    "local": "The cities chose different permit platforms under SB 379: SolarAPP+ in Oxnard, Thousand Oaks, Simi Valley, Moorpark and Port Hueneme, Symbium in Ventura and Santa Paula, and none reported in Camarillo, Fillmore or Ojai. The County of Ventura, which reported SolarAPP+, permits unincorporated homes through its Resource Management Agency's Building and Safety division, under a 2025 Ventura County Building Code in effect since January 1, 2026.",
    "example": "Two homes a few miles apart can differ on both halves of the bill: a Santa Paula home buys generation from SCE, a Ventura home from Clean Power Alliance. Ask each bidder to name the provider on your bill at the top of the proposal, and whether its savings use CPA's April true-up or SCE's anniversary true-up.",
    "checks": [
      [
        "Generation",
        "Name CPA or SCE from your bill and model that provider's solar credits."
      ],
      [
        "Permit office",
        "Say which city, or the County RMA, issues the permit, and which platform it uses."
      ],
      [
        "True-up timing",
        "Show CPA's April true-up or SCE's true-up in the month the system started."
      ],
      [
        "Battery",
        "Price the battery separately; most 2024-2025 permits in the eastern cities included one."
      ]
    ],
    "region": {
      "heading": "Providers and permit offices across Ventura County",
      "intro": [
        "On the California Energy Commission's utility map, Southern California Edison delivers power throughout Ventura County. The Commission's community choice layer shows Clean Power Alliance over Camarillo, Moorpark, Ojai, Oxnard, Simi Valley, Thousand Oaks and Ventura, and over the unincorporated communities checked, including Oak Park, Somis, Piru, Meiners Oaks and El Rio. It shows no community choice provider over Santa Paula, Fillmore or Port Hueneme.",
        "The permit column is each jurisdiction's own report to the Energy Commission under SB 379: residential solar permits issued, the share with battery storage and the share issued online, for 2024 unless another year is named, plus the automated platform it reported."
      ],
      "places": [
        {
          "name": "Ventura",
          "slug": "ventura",
          "utility": "SCE",
          "generation": "Clean Power Alliance",
          "permit": "City of Ventura (Symbium); no annual report filed"
        },
        {
          "name": "Oxnard",
          "slug": "oxnard",
          "utility": "SCE",
          "generation": "Clean Power Alliance",
          "permit": "City of Oxnard (SolarAPP+): 403 permits, 40% with storage, 15% online"
        },
        {
          "name": "Camarillo",
          "slug": "camarillo",
          "utility": "SCE",
          "generation": "Clean Power Alliance",
          "permit": "City of Camarillo (no automated platform reported): 287 permits, 72% with storage, none online"
        },
        {
          "name": "Thousand Oaks",
          "slug": "thousand-oaks",
          "utility": "SCE",
          "generation": "Clean Power Alliance",
          "permit": "City of Thousand Oaks (SolarAPP+): 838 permits in 2025, 91% with storage, 61% online"
        },
        {
          "name": "Simi Valley",
          "slug": "simi-valley",
          "utility": "SCE",
          "generation": "Clean Power Alliance",
          "permit": "City of Simi Valley (SolarAPP+): 601 permits, 88% with storage, 79% online"
        },
        {
          "name": "Moorpark",
          "utility": "SCE",
          "generation": "Clean Power Alliance",
          "permit": "City of Moorpark (SolarAPP+): 129 permits, 94% with storage, all online"
        },
        {
          "name": "Ojai",
          "utility": "SCE",
          "generation": "Clean Power Alliance",
          "permit": "City of Ojai (no automated platform reported): 38 permits, none online"
        },
        {
          "name": "Santa Paula",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Santa Paula (Symbium); no annual report filed"
        },
        {
          "name": "Fillmore",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Fillmore (no automated platform reported)"
        },
        {
          "name": "Port Hueneme",
          "utility": "SCE",
          "generation": "SCE",
          "permit": "City of Port Hueneme (SolarAPP+, solar without storage)"
        },
        {
          "name": "Unincorporated: Oak Park, Somis, Piru, Meiners Oaks, El Rio",
          "utility": "SCE",
          "generation": "Clean Power Alliance",
          "permit": "County of Ventura RMA (SolarAPP+): 1,080 permits in 2023, 1% online"
        }
      ],
      "note": "Utility and community choice rows are from the Energy Commission's maps, queried September 23, 2026, checking each city and the listed unincorporated communities. Permit counts and platforms are the jurisdictions' own reports in the Commission's files dated May and August 2026; SolarAPP+ lists Port Hueneme as accepting solar but not storage."
    },
    "sources": [
      {
        "label": "California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23",
        "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
      },
      {
        "label": "California Energy Commission: SB 379 Solar Permit Annual Reports data (file dated May 2026)",
        "url": "https://www.energy.ca.gov/sites/default/files/2026-05/Solar_Permit_Annual_Reports_Table_Full_Data_data_ada.xlsx"
      },
      {
        "label": "California Energy Commission: Residential Solar Permitting Program data, SB 379 platform each jurisdiction reported (updated August 3, 2026)",
        "url": "https://www.energy.ca.gov/media/9247"
      },
      {
        "label": "SolarAPP+: where SolarAPP+ is available, with the project types each jurisdiction accepts",
        "url": "https://www.gosolarapp.org/where-is-solarapp-available"
      },
      {
        "label": "Clean Power Alliance: solar, net energy metering and Solar Billing Plan",
        "url": "https://cleanpoweralliance.org/solar/"
      },
      {
        "label": "SCE: how the Solar Billing Plan works",
        "url": "https://www.sce.com/save-money/rates-financing/solar-billing-plan"
      },
      {
        "label": "Ventura County Resource Management Agency: Building and Safety",
        "url": "https://vcrma.org/en/divisions/building-and-safety"
      }
    ],
    "projectLinks": [
      {
        "href": "/solar-companies/thousand-oaks",
        "label": "Thousand Oaks, where nine in ten 2025 permits included a battery"
      },
      {
        "href": "/solar-companies/santa-barbara",
        "label": "Santa Barbara, up the coast"
      },
      {
        "href": "/battery/home-battery-cost-california",
        "label": "What a home battery costs"
      }
    ],
    "faq": [
      [
        "What are the best solar companies in Ventura County?",
        "This site does not rank them. Shortlist companies with a CSLB license covering solar that have pulled permits with your city or the County and confirm your address in writing, then compare at least three written bids for the same system built on your own bill."
      ],
      [
        "Is solar plus storage common in Ventura County?",
        "In the eastern cities, yes. Battery storage was on about 94% of Moorpark's 2024 residential solar permits, 88% of Simi Valley's and 91% of Thousand Oaks's in 2025, but on 40% of Oxnard's and 5% of Ojai's in 2024, according to the cities' reports to the Energy Commission."
      ],
      [
        "Who issues solar permits in unincorporated Ventura County?",
        "The County of Ventura's Resource Management Agency, through its Building and Safety division, which has two permit service offices. The County reported SolarAPP+ to the Energy Commission as its automated platform, and 1,080 residential solar permits for 2023, about 1% issued online."
      ],
      [
        "What does Clean Power Alliance pay for surplus solar?",
        "For its net energy metering customers, CPA trues up every April and pays net surplus at 10% above SCE's rate, by check for credits over $100. Systems SCE approved after August 31, 2023 are on CPA's Solar Billing Plan, which values exports hourly."
      ]
    ],
    "answer": "Solar companies in Ventura County all connect to SCE, but in most cities and the unincorporated county Clean Power Alliance supplies the generation and trues up solar credits every April; Santa Paula, Fillmore and Port Hueneme stay with SCE. Each city issues its own permit, and the County's Resource Management Agency permits rural homes from Oak Park to Piru. Compare at least three written bids built on your own bill.",
    "keyFacts": [
      {
        "label": "Delivery",
        "value": "SCE, countywide",
        "note": "No other delivery utility on the CEC map",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Generation",
        "value": "Clean Power Alliance in most places",
        "note": "Not Santa Paula, Fillmore or Port Hueneme",
        "source": {
          "publisher": "California Energy Commission",
          "date": "2026-09-23",
          "url": "https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about"
        }
      },
      {
        "label": "Unincorporated permits",
        "value": "County of Ventura RMA",
        "note": "SolarAPP+; 2025 County building code since Jan. 1, 2026",
        "source": {
          "publisher": "Ventura County RMA",
          "date": "2026-09-23",
          "url": "https://vcrma.org/en/divisions/building-and-safety"
        }
      }
    ],
    "sections": [
      {
        "heading": "Clean Power Alliance on a Ventura County bill",
        "paragraphs": [
          "Clean Power Alliance credits rooftop solar on the generation portion of the bill while SCE credits the delivery portion. For customers whose systems SCE approved on or before August 31, 2023, CPA's net energy metering program applies for the rest of their 20-year period: energy charges are netted monthly, everyone trues up in April, and net surplus is paid at 10% above SCE's rate, by check when the credit exceeds $100.",
          "Newer systems are on CPA's Solar Billing Plan for generation and SCE's for delivery, with exports credited at hourly avoided-cost prices, which CPA says makes solar with a battery worth more than solar alone. In Santa Paula, Fillmore and Port Hueneme there is no CPA, and SCE's Solar Billing Plan covers the whole bill, with its true-up in the month the system started."
        ]
      },
      {
        "heading": "Ten city permit offices and the County",
        "paragraphs": [
          "Ventura County's permit picture is uneven. Moorpark issued all 129 of its 2024 residential solar permits online and Simi Valley 79% of 601, while Camarillo issued none of 287 online and reported no automated platform. Thousand Oaks reported the most activity, 838 permits in 2025. Port Hueneme's SolarAPP+ route, per the SolarAPP+ program, takes solar but not storage.",
          "Homes outside city limits go to the County's Resource Management Agency. Its Building and Safety division runs two permit counters and online payments, and the 2025 Ventura County Building Code applies to permit applications submitted on or after January 1, 2026. Ask each bidder which office has your address and for its most recent permit timeline there."
        ]
      }
    ],
    "contentModified": "2026-09-23"
  },
};
