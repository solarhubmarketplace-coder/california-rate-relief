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
    projectLinks: [
      {
        href: "/solar-installers/licensed-solar-installer",
        label: "How to find a licensed solar installer and confirm the one on your contract",
      },
      {
        href: "/battery/solar-battery-company",
        label: "How to vet a solar battery company before adding storage",
      },
      {
        href: "/blog/solar-broker",
        label: "What a solar broker can and cannot do for you",
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
    sourceCheckedDate: "2026-09-23",
    bill: "Since April 2025, Ava Community Energy has been the default generation provider in Stockton, after the City Council chose it; PG&E still delivers the power and sends the bill. Customers were enrolled automatically unless they opted out. The Energy Commission's community choice map, last updated in August 2025, does not yet show Stockton, so check the generation line on your own bill and have each bidder model Ava's solar rules if it says Ava.",
    local: "Stockton's Building and Life Safety division lets licensed contractors get an auto-issued permit for most residential rooftop solar through SolarAPP+, which it calls the Residential Solar One Stop. Eligible jobs are on the main dwelling's roof of a permitted residential structure, with no ballasted or building-integrated systems. After SolarAPP+ approval, the contractor applies in the City's Accela Citizen Portal under the over-the-counter photovoltaic permit.",
    example: "If your Stockton bill changed in 2025, compare bids against your new statement, not an older one. A home that moved to Ava has Ava generation charges and PG&E delivery charges, and a system installed now follows Ava's Solar Billing Plan rules, including the E-ELEC rate Ava requires, so a PG&E-only model is out of date.",
    checks: [
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
    sources: [
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
      }
    ],
    faq: [
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
      ]
    ],
    answer: "Solar companies in Stockton get an auto-issued permit for most home rooftop systems through SolarAPP+, which the City calls its Residential Solar One Stop, then file the over-the-counter photovoltaic permit in its Accela portal. Since April 2025 Ava Community Energy has supplied Stockton's generation by default, with PG&E delivering it. Compare at least three written bids built on your current Ava and PG&E bill.",
    keyFacts: [
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
    sections: [
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
    contentModified: "2026-09-23",
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
    name: "Santa Ana",
    county: "Orange County",
    utility: "sce",
    bill: "In Santa Ana, SCE sells and delivers the electricity: no community choice program is mapped over the city by the Energy Commission, and it is not among Orange County Power Authority's members. Every SCE residential bill now includes a fixed monthly Base Services Charge, $24.15 for most customers, which solar leaves in place, so a proposal should show what remains on your SCE bill, not just what it offsets.",
    local: "Since June 1, 2026, the City of Santa Ana issues residential solar permits only after SolarAPP+ approval; projects without it are not processed. Only licensed contractors registered with SolarAPP+ may apply, permit runners may not, and ballasted systems and unpermitted structures are not eligible. SolarAPP+ charges $35, which covers up to three revisions, and the City's own permit fee is the same as for a regular solar permit.",
    example: "If a Santa Ana bid includes a battery, ask where it will go before you sign. The Planning Division does not allow storage equipment where it can be seen from the street without approved screening, and a battery in a garage cannot push the equipment or its protective bollard into the required parking space. The Fire Department also requires smoke alarms, and in some rooms an interconnected heat alarm, where storage is installed.",
    sourceCheckedDate: "2026-09-23",
    checks: [
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
    sources: [
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
    faq: [
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
    answer: "Every residential solar permit in Santa Ana now goes through SolarAPP+: since June 1, 2026 the City will not process an application without its approval, and only licensed contractors registered with SolarAPP+ can apply. Batteries face extra local rules on screening, parking space and alarms. SCE supplies and delivers Santa Ana's power. Compare at least three written bids that model your own SCE bill.",
    keyFacts: [
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
    sections: [
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
    contentModified: "2026-09-23",
  },
  "san-bernardino": {
    name: "San Bernardino",
    county: "San Bernardino County",
    utility: "sce",
    bill: "San Bernardino has no community choice program on the Energy Commission's utility map; Southern California Edison supplies the generation, delivers it and bills for both. A new system goes on SCE's Solar Billing Plan, with exports credited monthly and a yearly settlement. SCE's fixed Base Services Charge stays on the bill whatever the system produces.",
    local: "The City of San Bernardino sends residential solar and storage permits under 38.4 kilowatts to the Symbium portal for instantaneous plan review under Senate Bill 379, and says processing may take about one to three business days. An active City business license is required before the permit is issued, and a main panel upgrade needs its own electrical permit from the City's Solar Division of Community Development and Housing.",
    example: "Ask each San Bernardino bidder whether the job will go through Symbium or the Building and Safety counter at Vanir Tower, and whether the price includes the separate electrical permit if your main panel needs upgrading. A bid that skips either answer may be assuming a timeline or a permit the City will not give.",
    sourceCheckedDate: "2026-09-23",
    checks: [
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
    sources: [
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
      }
    ],
    faq: [
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
      ]
    ],
    answer: "Solar companies in San Bernardino apply for residential solar and battery permits through the City's Symbium portal, which the City says may take about one to three business days, and need an active City business license before the permit is issued. A main panel upgrade needs a separate electrical permit. SCE supplies and delivers San Bernardino's power. Compare at least three written bids that model your own SCE bill.",
    keyFacts: [
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
      }
    ],
    sections: [
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
      }
    ],
    contentModified: "2026-09-23",
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
        "The California Energy Commission's utility map shows PG&E as the delivery utility across most of the region, with a patchwork of community choice aggregators supplying generation on top of it, and three cities outside PG&E altogether: Palo Alto (City of Palo Alto Utilities), Santa Clara (Silicon Valley Power) and Alameda (Alameda Municipal Power). Each community choice provider names its own member communities: Ava lists 16 cities plus unincorporated Alameda and San Joaquin counties, Silicon Valley Clean Energy 12 cities plus unincorporated Santa Clara County, and Sonoma Clean Power Sonoma and Mendocino counties.",
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
          "utility": "Alameda Municipal Power (city utility)",
          "generation": "Alameda Municipal Power",
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
        "On the Energy Commission's map, Palo Alto is served by City of Palo Alto Utilities, Santa Clara by Silicon Valley Power and Alameda by Alameda Municipal Power. Each is a city-owned utility that sets its own solar rules outside the CPUC's net billing tariff."
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
        "label": "City of Palo Alto: Utility Rate Schedule E-EEC-1, Export Electricity Compensation (effective July 1, 2021, PDF)",
        "url": "https://www.cityofpaloalto.org/files/assets/public/v/2/agendas-minutes-reports/reports/city-manager-reports-cmrs/attachments/06-21-2021-id-12240-attachment-a2-electric-rates.pdf"
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
        "New solar customers have been served by the City's NEM 2 program since January 1, 2018, when CPAU's NEM 1 program had reached its 10.8 MW cap. NEM 2 customers are paid for exported electricity at the Export Electricity Compensation (EEC-1) rate; the version of that schedule effective July 1, 2021 set $0.107809 per kWh, so ask CPAU for the current figure."
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
          "CPAU's original net metering program closed when it reached its cap of 10.8 MW of installed solar on December 31, 2017. NEM 1 customers are credited at retail rates for exports; everyone who went solar from January 1, 2018 on is on NEM 2 and paid for exports at the Export Electricity Compensation rate, Schedule E-EEC-1. The version of that schedule effective July 1, 2021 paid $0.107809 per kWh for all exported electricity. Rates change, so a proposal should cite the schedule in force when you sign.",
          "In Palo Alto the utility and the building department finish the job together. CPAU asks customers to schedule its electric meter inspection before the final building inspection, and the Building Inspector issues interconnection approval, permission to operate, at that final inspection. The City reported 155 residential solar permits for 2024 to the Energy Commission, 36% of them issued online."
        ]
      }
    ],
    "contentModified": "2026-09-23"
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
};
