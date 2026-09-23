/**
 * Topic hubs (topical-authority program, SEO/24). Generated 2026-09-23 from
 * _AUDIT/2026-09-23_topicmap/blocks/05_structure/hub_page_map.csv (live pages only).
 * New pages are appended at integration. Consumed by components/growth/HubSpokeLinks.
 */
export type TopicHubId =
  | 'battery'
  | 'city_bills'
  | 'city_cost'
  | 'city_installers'
  | 'commercial'
  | 'cost_value'
  | 'electric_bills'
  | 'financing'
  | 'incentives'
  | 'installer_reviews'
  | 'installers'
  | 'maintenance'
  | 'nem'
  | 'news'
  | 'other_options'
  | 'roof_structures'
  | 'rules_permits'
  | 'utility_rates';

export interface TopicHubLink { href: string; label: string }
export interface TopicHub { hub: TopicHubId; label: string; hubPage: string | null; hubPageLabel: string | null; spokes: TopicHubLink[] }

export const TOPIC_HUBS: TopicHub[] = [
  {
    "hub": "battery",
    "label": "Batteries, backup and SGIP",
    "hubPage": "/battery",
    "hubPageLabel": "Home Battery Storage in California: Sizing, Cost, SGIP",
    "spokes": [
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "California Solar Batteries: Backup and Cost Comparison"
      },
      {
        "href": "/battery/sgip-battery-rebate-california",
        "label": "SGIP Battery Rebate California: September 2026 Status"
      },
      {
        "href": "/battery/powerwall-vs-enphase-vs-franklinwh",
        "label": "Powerwall 3 vs Enphase 5P vs FranklinWH aPower 2"
      },
      {
        "href": "/blog/nem-2-vs-nem-3-california",
        "label": "NEM 2.0 vs NEM 3.0 California: Export Compensation"
      },
      {
        "href": "/blog/how-big-of-a-solar-system-do-i-need-california",
        "label": "How Big of a Solar System Do You Need in California?"
      },
      {
        "href": "/blog/pge-vs-sce-vs-sdge-rates-compared",
        "label": "PG&amp;E vs SCE vs SDG&amp;E (2026): Rates per kWh and Sample Bills"
      }
    ]
  },
  {
    "hub": "city_bills",
    "label": "City pages: electric bills and rates",
    "hubPage": "/california-utility-rate-tracker",
    "hubPageLabel": "California Utility Rate Tracker: PG&amp;E, SCE, SDG&amp;E, SMUD",
    "spokes": [
      {
        "href": "/solar-savings/san-diego",
        "label": "San Diego Solar Savings: SDG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/sacramento",
        "label": "Sacramento Solar Savings: SMUD Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/sunnyvale",
        "label": "Sunnyvale Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/irvine",
        "label": "Irvine Solar Savings: SCE Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/orange-county",
        "label": "Solar Companies in Orange County, California | Rate Relief"
      },
      {
        "href": "/solar-savings/bay-area",
        "label": "Bay Area Solar Savings: San Jose, San Francisco, Oakland"
      },
      {
        "href": "/solar-savings/oakland",
        "label": "Oakland Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/carlsbad",
        "label": "Carlsbad Solar Savings: SDG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/riverside",
        "label": "Riverside Solar Savings: RPU or SCE Rates &amp; Quotes (2026)"
      },
      {
        "href": "/solar-savings/oceanside",
        "label": "Oceanside Solar Savings: SDG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/san-diego-county",
        "label": "San Diego County Solar Guide: City, Bill and Project Paths"
      },
      {
        "href": "/solar-savings/santa-rosa",
        "label": "Santa Rosa Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/huntington-beach",
        "label": "Huntington Beach Solar Savings: SCE Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/escondido",
        "label": "Escondido Solar Savings: SDG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/san-mateo",
        "label": "San Mateo Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/san-clemente",
        "label": "San Clemente Solar Savings: SDG&amp;E Rates &amp; Quotes (2026)"
      },
      {
        "href": "/solar-savings/simi-valley",
        "label": "Simi Valley Solar Savings: SCE Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/santa-ana",
        "label": "Santa Ana Solar Savings: SCE Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/pleasanton",
        "label": "Pleasanton Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/stockton",
        "label": "Stockton Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/walnut-creek",
        "label": "Walnut Creek Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/glendale",
        "label": "Glendale Solar Savings: GWP Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/hayward",
        "label": "Hayward Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/modesto",
        "label": "Modesto Solar Savings: MID or TID Rates &amp; Quotes (2026)"
      },
      {
        "href": "/solar-savings/livermore",
        "label": "Livermore Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/thousand-oaks",
        "label": "Thousand Oaks Solar Savings: SCE Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/fontana",
        "label": "Fontana Solar Savings: SCE Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/santa-clarita",
        "label": "Santa Clarita Solar Savings: SCE Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/visalia",
        "label": "Visalia Solar Savings: SCE Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/santa-cruz",
        "label": "Santa Cruz Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/san-luis-obispo",
        "label": "San Luis Obispo Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/rancho-cordova",
        "label": "Rancho Cordova Solar Savings: SMUD Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/el-dorado-hills",
        "label": "El Dorado Hills Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/chula-vista",
        "label": "Chula Vista Solar Savings: SDG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/half-moon-bay",
        "label": "Half Moon Bay Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/hemet",
        "label": "Hemet Solar Savings: SCE Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/central-valley",
        "label": "Central Valley Solar Companies: Fresno &amp; Sacramento"
      },
      {
        "href": "/solar-savings/fallbrook",
        "label": "Fallbrook Solar Savings: SDG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/aptos",
        "label": "Aptos Solar Savings: PG&amp;E Rates &amp; Costs (2026)"
      },
      {
        "href": "/solar-savings/beaumont",
        "label": "Beaumont Solar Savings: SCE Rates &amp; Costs (2026)"
      }
    ]
  },
  {
    "hub": "city_cost",
    "label": "City pages: solar cost",
    "hubPage": "/solar-cost",
    "hubPageLabel": "Solar Panel Cost by California City: 57 Cities",
    "spokes": [
      {
        "href": "/solar-cost/fresno",
        "label": "Solar Panel Cost in Fresno, CA: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/murrieta",
        "label": "Solar Panel Cost in Murrieta, CA: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/el-cajon",
        "label": "Solar Panel Cost in El Cajon, CA: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/carlsbad",
        "label": "Solar Panels in Carlsbad, CA: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/temecula",
        "label": "Solar Panel Cost in Temecula, CA: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/roseville",
        "label": "Roseville Solar Panel Cost: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/escondido",
        "label": "Escondido Solar Panel Cost: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/encinitas",
        "label": "Encinitas Solar Panels: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/san-luis-obispo",
        "label": "San Luis Obispo Solar Panel Cost: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/livermore",
        "label": "Livermore Solar Panel Cost: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/chula-vista",
        "label": "Chula Vista Solar Panels: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/vallejo",
        "label": "Solar Panels in Vallejo, CA: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/oceanside",
        "label": "Oceanside Solar Panels: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/santa-cruz",
        "label": "Santa Cruz Solar Panel Cost: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/stockton",
        "label": "Solar Panel Cost in Stockton, CA: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/santa-rosa",
        "label": "Santa Rosa Solar Panel Cost: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/walnut-creek",
        "label": "Walnut Creek Solar Panels: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/thousand-oaks",
        "label": "Thousand Oaks Solar Panel Cost: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/anaheim",
        "label": "Solar Panel Cost in Anaheim, CA: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/el-dorado-hills",
        "label": "El Dorado Hills Solar Panels: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/san-jose",
        "label": "Solar Panel Cost in San Jose, CA: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/tulare",
        "label": "Solar Panels in Tulare, CA: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/manteca",
        "label": "Solar Panels in Manteca, CA: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/san-marcos",
        "label": "San Marcos Solar Panels: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/napa",
        "label": "Solar Panels in Napa, CA: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/tracy",
        "label": "Solar Panels in Tracy, CA: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/yucaipa",
        "label": "Solar Panels in Yucaipa, CA: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/camarillo",
        "label": "Camarillo Solar Panel Cost: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/grass-valley",
        "label": "Grass Valley Solar Panel Cost: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/auburn",
        "label": "Solar Panels in Auburn, CA: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/rancho-cucamonga",
        "label": "Solar Panel Cost in Rancho Cucamonga, CA (2026)"
      },
      {
        "href": "/solar-cost/rancho-cordova",
        "label": "Rancho Cordova Solar Panels: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/modesto",
        "label": "Solar Panel Cost in Modesto, CA: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/ontario",
        "label": "Solar Panels in Ontario, CA: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/corona",
        "label": "Solar Panels in Corona, CA: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/monterey",
        "label": "Solar Panels in Monterey, CA: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/yuba-city",
        "label": "Yuba City Solar Panels: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/windsor",
        "label": "Solar Panels in Windsor, CA: Cost &amp; Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/ventura",
        "label": "Solar Panel Cost in Ventura, CA: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/rocklin",
        "label": "Solar Panel Cost in Rocklin, CA: What Sets the Price (2026)"
      }
    ]
  },
  {
    "hub": "city_installers",
    "label": "City pages: solar companies / panels",
    "hubPage": "/best-solar-companies-california",
    "hubPageLabel": "Compare solar companies in California",
    "spokes": [
      {
        "href": "/solar-companies/san-francisco",
        "label": "Solar Panels &amp; Solar Companies in San Francisco, CA (2026)"
      },
      {
        "href": "/solar-companies/san-jose",
        "label": "Solar Panels &amp; Solar Companies in San Jose, CA (2026)"
      },
      {
        "href": "/solar-companies/fresno",
        "label": "Solar Panels &amp; Solar Companies in Fresno, CA (2026)"
      },
      {
        "href": "/solar-companies/los-angeles",
        "label": "Solar Panels &amp; Solar Companies in Los Angeles, CA (2026)"
      },
      {
        "href": "/solar-companies/sacramento",
        "label": "Solar Panels &amp; Solar Companies in Sacramento, CA (2026)"
      },
      {
        "href": "/solar-companies/bakersfield",
        "label": "Solar Panels &amp; Solar Companies in Bakersfield, CA (2026)"
      },
      {
        "href": "/solar-companies/santa-rosa",
        "label": "Solar Panels &amp; Solar Companies in Santa Rosa, CA (2026)"
      },
      {
        "href": "/solar-companies/pleasanton",
        "label": "Solar Panels &amp; Solar Companies in Pleasanton, CA (2026)"
      },
      {
        "href": "/solar-companies/livermore",
        "label": "Solar Panels &amp; Solar Companies in Livermore, CA (2026)"
      },
      {
        "href": "/solar-companies/modesto",
        "label": "Solar Panels &amp; Solar Companies in Modesto, CA (2026)"
      },
      {
        "href": "/solar-companies/riverside",
        "label": "Solar Panels &amp; Solar Companies in Riverside, CA (2026)"
      },
      {
        "href": "/solar-companies/temecula",
        "label": "Solar Panels &amp; Solar Companies in Temecula, CA (2026)"
      },
      {
        "href": "/solar-companies/stockton",
        "label": "Solar Panels &amp; Solar Companies in Stockton, CA (2026)"
      },
      {
        "href": "/solar-companies/chico",
        "label": "Solar Panels &amp; Solar Companies in Chico, CA (2026)"
      },
      {
        "href": "/solar-companies/irvine",
        "label": "Solar Panels &amp; Solar Companies in Irvine, CA (2026)"
      },
      {
        "href": "/solar-companies/oakland",
        "label": "Solar Panels &amp; Solar Companies in Oakland, CA (2026)"
      },
      {
        "href": "/solar-companies/murrieta",
        "label": "Solar Panels &amp; Solar Companies in Murrieta, CA (2026)"
      },
      {
        "href": "/solar-companies/palm-springs",
        "label": "Solar Panels &amp; Solar Companies in Palm Springs, CA (2026)"
      },
      {
        "href": "/solar-companies/thousand-oaks",
        "label": "Solar Panels &amp; Solar Companies in Thousand Oaks, CA (2026)"
      },
      {
        "href": "/solar-companies/glendale",
        "label": "Solar Panels &amp; Solar Companies in Glendale, CA (2026)"
      },
      {
        "href": "/solar-companies/el-cajon",
        "label": "Solar Panels &amp; Solar Companies in El Cajon, CA (2026)"
      },
      {
        "href": "/solar-companies/santa-clarita",
        "label": "Solar Panels &amp; Solar Companies in Santa Clarita, CA (2026)"
      },
      {
        "href": "/solar-companies/fremont",
        "label": "Solar Panels &amp; Solar Companies in Fremont, CA (2026)"
      },
      {
        "href": "/solar-companies/rocklin",
        "label": "Solar Panels &amp; Solar Companies in Rocklin, CA (2026)"
      },
      {
        "href": "/solar-companies/visalia",
        "label": "Solar Panels &amp; Solar Companies in Visalia, CA (2026)"
      },
      {
        "href": "/solar-companies/anaheim",
        "label": "Solar Panels &amp; Solar Companies in Anaheim, CA (2026)"
      },
      {
        "href": "/solar-companies/half-moon-bay",
        "label": "Solar Panels &amp; Solar Companies in Half Moon Bay, CA (2026)"
      },
      {
        "href": "/solar-companies/roseville",
        "label": "Solar Panels &amp; Solar Companies in Roseville, CA (2026)"
      },
      {
        "href": "/solar-companies/san-mateo",
        "label": "Solar Panels &amp; Solar Companies in San Mateo, CA (2026)"
      },
      {
        "href": "/solar-companies/richmond",
        "label": "Solar Panels &amp; Solar Companies in Richmond, CA (2026)"
      },
      {
        "href": "/solar-companies/palm-desert",
        "label": "Solar Panels &amp; Solar Companies in Palm Desert, CA (2026)"
      },
      {
        "href": "/solar-companies/san-luis-obispo",
        "label": "Solar Panels &amp; Solar Companies in San Luis Obispo, CA (2026)"
      },
      {
        "href": "/solar-companies/pasadena",
        "label": "Solar Panels &amp; Solar Companies in Pasadena, CA (2026)"
      },
      {
        "href": "/solar-companies/simi-valley",
        "label": "Solar Panels &amp; Solar Companies in Simi Valley, CA (2026)"
      },
      {
        "href": "/solar-companies/fontana",
        "label": "Solar Panels &amp; Solar Companies in Fontana, CA (2026)"
      },
      {
        "href": "/solar-companies/santa-ana",
        "label": "Solar Panels &amp; Solar Companies in Santa Ana, CA (2026)"
      },
      {
        "href": "/solar-companies/long-beach",
        "label": "Solar Panels &amp; Solar Companies in Long Beach, CA (2026)"
      },
      {
        "href": "/solar-companies/san-bernardino",
        "label": "Solar Panels &amp; Solar Companies in San Bernardino, CA (2026)"
      },
      {
        "href": "/solar-companies/sonoma",
        "label": "Solar Panels &amp; Solar Companies in Sonoma, CA (2026)"
      },
      {
        "href": "/solar-companies/huntington-beach",
        "label": "Huntington Beach Solar Panels &amp; Solar Companies (2026)"
      }
    ]
  },
  {
    "hub": "commercial",
    "label": "Commercial solar",
    "hubPage": "/commercial-solar",
    "hubPageLabel": "Commercial Solar in California: Build a Comparable Quote",
    "spokes": [
      {
        "href": "/commercial-solar/companies-california",
        "label": "Commercial Solar Companies &amp; EPCs in California: 6 Checks"
      },
      {
        "href": "/blog/commercial-solar-financing-california",
        "label": "Commercial Solar Financing in California: 4 Options Compared"
      },
      {
        "href": "/commercial-solar/cost-per-watt-california",
        "label": "Commercial Solar Panel Cost (2026): California $/W by Size"
      },
      {
        "href": "/solar-installers/sunrun-review",
        "label": "Sunrun Reviews (2026): Is Sunrun Going Out of Business?"
      },
      {
        "href": "/panel-reviews/rec-solar-panels-review",
        "label": "REC Solar Panels Review: Alpha Pure, Where They&#x27;re Made"
      },
      {
        "href": "/commercial-solar/title-24-requirements",
        "label": "California Title 24 Part 6 Commercial Solar Requirements"
      },
      {
        "href": "/solar-installers/sunrun-vs-sunpower",
        "label": "Sunrun vs SunPower (2026): After SunPower&#x27;s Bankruptcy"
      },
      {
        "href": "/solar-installers/palmetto-solar-review",
        "label": "Palmetto Solar Reviews (2026): LightReach &amp; Court Record"
      },
      {
        "href": "/commercial-solar/church-solar-california",
        "label": "California Church Solar: Elective Pay vs. PPA"
      },
      {
        "href": "/solar-installers/powur-solar-review",
        "label": "Powur Solar Reviews (2026): 150+ BBB Complaints, MLM Model"
      },
      {
        "href": "/commercial-solar/commercial-battery-storage-california",
        "label": "Commercial Battery Storage California: 2026 Costs &amp; ROI"
      },
      {
        "href": "/commercial-solar/vnem-aggregation-multi-meter",
        "label": "California VNEM vs NEM Aggregation: Multi-Meter Solar"
      }
    ]
  },
  {
    "hub": "cost_value",
    "label": "Solar cost, payback and \"is it worth it\"",
    "hubPage": "/solar-panels-california",
    "hubPageLabel": "Solar Panels in California: $3.30/W Median Cost and Sizing",
    "spokes": [
      {
        "href": "/blog/solar-pool-heating-california",
        "label": "Solar Pool Heating in California: Cost, Sizing and Payback"
      },
      {
        "href": "/blog/pge-vs-sce-vs-sdge-rates-compared",
        "label": "PG&amp;E vs SCE vs SDG&amp;E (2026): Rates per kWh and Sample Bills"
      },
      {
        "href": "/tools/solar-panel-calculator",
        "label": "California solar bill and quote calculator"
      },
      {
        "href": "/blog/free-solar-panels-california",
        "label": "Are Free Solar Panels Real in California? The CPUC Answer"
      },
      {
        "href": "/blog/does-solar-increase-home-value-california",
        "label": "Does Solar Increase Home Value in California? The Rules"
      },
      {
        "href": "/best-solar-companies-california",
        "label": "Compare solar companies in California"
      },
      {
        "href": "/blog/solar-carport-california-guide",
        "label": "Residential Solar Carports in California: Permits &amp; Quotes"
      },
      {
        "href": "/blog/sdge-time-of-use-rates-2026",
        "label": "SDG&amp;E Peak Hours &amp; TOU-DR1 Rates (2026): 5 Plans Compared"
      },
      {
        "href": "/blog/solar-panels-tile-roof-california",
        "label": "Solar Roof Tiles vs Panels on a Tile Roof in California"
      },
      {
        "href": "/blog/solar-panel-removal-reinstall-cost",
        "label": "Solar Panel Removal for Roof Replacement: CA Quote Checklist"
      }
    ]
  },
  {
    "hub": "electric_bills",
    "label": "Electric bills (high bills, averages, bill help)",
    "hubPage": "/blog/why-is-my-california-electric-bill-so-high",
    "hubPageLabel": "Why Is My California Electric Bill So High? Check First",
    "spokes": [
      {
        "href": "/blog/pge-vs-sce-vs-sdge-rates-compared",
        "label": "PG&amp;E vs SCE vs SDG&amp;E (2026): Rates per kWh and Sample Bills"
      },
      {
        "href": "/blog/how-to-lower-electric-bill-california",
        "label": "How to Lower Your Electric Bill in California: 6 Steps"
      },
      {
        "href": "/blog/why-is-my-pge-bill-so-high",
        "label": "Why Is My PG&amp;E Bill So High? 7 Causes to Check (2026)"
      },
      {
        "href": "/blog/why-is-my-ladwp-bill-so-high",
        "label": "Why Is My LADWP Bill So High? Rates &amp; Fees Explained"
      },
      {
        "href": "/blog/why-is-my-sdge-bill-so-high",
        "label": "Why Is My SDG&amp;E Bill So High? A Bill-First Checklist"
      },
      {
        "href": "/blog/sce-rate-increase-2026",
        "label": "SCE Rates Decreased in 2026, But Remain High in Edison"
      },
      {
        "href": "/blog/why-is-my-sce-bill-so-high",
        "label": "Why Is My SCE Bill So High? A Bill-First Checklist"
      },
      {
        "href": "/blog/california-24-dollar-fixed-charge-explained",
        "label": "California&#x27;s New $24 Fixed Charge, Explained"
      }
    ]
  },
  {
    "hub": "financing",
    "label": "Leases, PPAs and financing",
    "hubPage": "/blog/ppa-loan-vs-solar-lease-vs-cash-california",
    "hubPageLabel": "Solar Lease vs PPA vs Purchase (2026): 7 Terms Compared",
    "spokes": [
      {
        "href": "/blog/rent-solar-panels-for-your-home-california",
        "label": "Rent Solar Panels for Your Home in California: Lease vs PPA"
      },
      {
        "href": "/blog/prepaid-ppa-california-2026",
        "label": "Prepaid Solar PPA in California (2026): 5 Terms to Check"
      },
      {
        "href": "/blog/solar-ppa-vs-lease-california",
        "label": "Solar PPA vs Lease in California: How They Differ"
      },
      {
        "href": "/blog/what-happens-to-solar-lease-when-i-sell-california",
        "label": "Selling a CA Home With Solar Lease or PPA: Buyout Guide"
      },
      {
        "href": "/blog/is-it-better-to-buy-or-lease-solar-panels-california",
        "label": "Buy or Lease Solar Panels in California? 2026 Decision"
      },
      {
        "href": "/blog/free-solar-panels-california",
        "label": "Are Free Solar Panels Real in California? The CPUC Answer"
      }
    ]
  },
  {
    "hub": "incentives",
    "label": "Tax credit, rebates and no-cost programs",
    "hubPage": "/blog/california-solar-tax-credit-2026",
    "hubPageLabel": "California solar incentives 2026: which program does what?",
    "spokes": [
      {
        "href": "/blog/free-solar-panels-california",
        "label": "Are Free Solar Panels Real in California? The CPUC Answer"
      },
      {
        "href": "/blog/free-solar-for-seniors-california",
        "label": "Free Solar for Seniors in California? What Actually Applies"
      },
      {
        "href": "/blog/solar-rebates-by-california-utility",
        "label": "Solar Rebates by California Utility (2026): PG&amp;E to SMUD"
      },
      {
        "href": "/blog/free-roof-replacement-with-solar-panels-california",
        "label": "Is Free Roof Replacement With Solar Real? What to Check"
      },
      {
        "href": "/blog/why-is-my-pge-bill-so-high",
        "label": "Why Is My PG&amp;E Bill So High? 7 Causes to Check (2026)"
      }
    ]
  },
  {
    "hub": "installer_reviews",
    "label": "Installer and panel brand reviews",
    "hubPage": "/solar-installers",
    "hubPageLabel": "California Solar Company Reviews and Comparisons",
    "spokes": [
      {
        "href": "/battery/tesla-powerwall-3-cost-california",
        "label": "Tesla Powerwall 3 Cost California 2026: Full Breakdown"
      },
      {
        "href": "/solar-installers/palmetto-solar-review",
        "label": "Palmetto Solar Reviews (2026): LightReach &amp; Court Record"
      },
      {
        "href": "/solar-installers/sunrun-review",
        "label": "Sunrun Reviews (2026): Is Sunrun Going Out of Business?"
      },
      {
        "href": "/solar-installers/momentum-solar-review",
        "label": "Momentum Solar Reviews (2026): Does It Serve California?"
      },
      {
        "href": "/solar-installers/trinity-solar-review",
        "label": "Trinity Solar Reviews (2026): Northeast Installer, Not CA"
      },
      {
        "href": "/solar-installers/tesla-solar-review",
        "label": "Tesla Solar Reviews (2026): Panels, Powerwall, Weak Service"
      },
      {
        "href": "/solar-installers/sunrun-vs-sunpower",
        "label": "Sunrun vs SunPower (2026): After SunPower&#x27;s Bankruptcy"
      },
      {
        "href": "/solar-installers/sunrun-vs-tesla-solar",
        "label": "Sunrun vs Tesla Solar (2026): Warranty, Lease and Powerwall"
      },
      {
        "href": "/panel-reviews/rec-solar-panels-review",
        "label": "REC Solar Panels Review: Alpha Pure, Where They&#x27;re Made"
      },
      {
        "href": "/solar-installers/solar-optimum-review",
        "label": "Solar Optimum Reviews (2026): Lawsuits, Ratings, Warranty"
      },
      {
        "href": "/solar-installers/powur-solar-review",
        "label": "Powur Solar Reviews (2026): 150+ BBB Complaints, MLM Model"
      },
      {
        "href": "/solar-installers/option-one-solar-review",
        "label": "Option One Solar Apple Valley Reviews (2026): 25-Yr Warranty"
      },
      {
        "href": "/panel-reviews/silfab-solar-panels-review",
        "label": "Silfab Solar Panels Review (2026): US-Made, Silfab vs Qcells"
      },
      {
        "href": "/solar-installers/elevation-solar-review",
        "label": "Elevation Solar Reviews (2026): What the Contract Says"
      },
      {
        "href": "/solar-installers/sunergy-solar-review",
        "label": "Sunergy Solar Reviews (2026): Ownership Focus, Delays"
      },
      {
        "href": "/solar-installers/sunlux-solar-review",
        "label": "Sunlux Solar Reviews (2026): 25-Year Warranty, CSLB Check"
      },
      {
        "href": "/solar-installers/enphase-vs-solaredge",
        "label": "Enphase vs SolarEdge: Which Inverter Is Better in 2026?"
      },
      {
        "href": "/solar-installers/sunpower-review",
        "label": "SunPower Reviews (2026): Complete Solaria Rebrand Review"
      },
      {
        "href": "/solar-installers/baker-electric-solar-review",
        "label": "Baker Electric San Diego vs Baker Home Energy: Solar Review"
      },
      {
        "href": "/blog/free-roof-replacement-with-solar-panels-california",
        "label": "Is Free Roof Replacement With Solar Real? What to Check"
      },
      {
        "href": "/battery/sgip-battery-rebate-california",
        "label": "SGIP Battery Rebate California: September 2026 Status"
      },
      {
        "href": "/blog/free-solar-panels-california",
        "label": "Are Free Solar Panels Real in California? The CPUC Answer"
      },
      {
        "href": "/solar-installers/la-solar-group-review",
        "label": "LA Solar Group Reviews (2026): In-House Panels, Court Check"
      },
      {
        "href": "/solar-installers/freedom-forever-bankruptcy-what-to-do",
        "label": "Freedom Forever Bankruptcy: What Customers Should Do"
      },
      {
        "href": "/blog/ppa-loan-vs-solar-lease-vs-cash-california",
        "label": "Solar Lease vs PPA vs Purchase (2026): 7 Terms Compared"
      },
      {
        "href": "/blog/solar-panel-removal-reinstall-cost",
        "label": "Solar Panel Removal for Roof Replacement: CA Quote Checklist"
      },
      {
        "href": "/solar-installers/semper-solaris-review",
        "label": "Semper Solaris Reviews (2026): Veteran-Owned CA Solar"
      },
      {
        "href": "/solar-installers/sunrun-lease-vs-ppa",
        "label": "Sunrun Lease vs. PPA: The Actual Difference"
      },
      {
        "href": "/solar-panels-california",
        "label": "Solar Panels in California: $3.30/W Median Cost and Sizing"
      }
    ]
  },
  {
    "hub": "installers",
    "label": "Choosing a solar company (statewide)",
    "hubPage": "/best-solar-companies-california",
    "hubPageLabel": "Compare solar companies in California",
    "spokes": [
      {
        "href": "/solar-panels-california",
        "label": "Solar Panels in California: $3.30/W Median Cost and Sizing"
      },
      {
        "href": "/blog/solar-pool-heating-california",
        "label": "Solar Pool Heating in California: Cost, Sizing and Payback"
      },
      {
        "href": "/blog/solar-system-quotes-california",
        "label": "Solar System Quotes in California: Get 3 Real Quotes Fast"
      },
      {
        "href": "/blog/free-solar-panels-california",
        "label": "Are Free Solar Panels Real in California? The CPUC Answer"
      },
      {
        "href": "/blog/free-roof-replacement-with-solar-panels-california",
        "label": "Is Free Roof Replacement With Solar Real? What to Check"
      },
      {
        "href": "/solar-installers/baker-electric-solar-review",
        "label": "Baker Electric San Diego vs Baker Home Energy: Solar Review"
      },
      {
        "href": "/solar-installers/how-to-verify-a-solar-contractor-california",
        "label": "How to Verify a CA Solar Contractor Before You Sign"
      },
      {
        "href": "/solar-installers/la-solar-group-review",
        "label": "LA Solar Group Reviews (2026): In-House Panels, Court Check"
      },
      {
        "href": "/blog/solar-carport-california-guide",
        "label": "Residential Solar Carports in California: Permits &amp; Quotes"
      },
      {
        "href": "/blog/sdge-time-of-use-rates-2026",
        "label": "SDG&amp;E Peak Hours &amp; TOU-DR1 Rates (2026): 5 Plans Compared"
      },
      {
        "href": "/blog/what-happens-to-solar-lease-when-i-sell-california",
        "label": "Selling a CA Home With Solar Lease or PPA: Buyout Guide"
      },
      {
        "href": "/blog/is-it-better-to-buy-or-lease-solar-panels-california",
        "label": "Buy or Lease Solar Panels in California? 2026 Decision"
      },
      {
        "href": "/blog/adu-solar-requirements-california",
        "label": "ADU Solar Requirements in California (2026)"
      },
      {
        "href": "/blog/how-big-of-a-solar-system-do-i-need-california",
        "label": "How Big of a Solar System Do You Need in California?"
      },
      {
        "href": "/blog/rent-solar-panels-for-your-home-california",
        "label": "Rent Solar Panels for Your Home in California: Lease vs PPA"
      },
      {
        "href": "/blog/do-solar-panels-work-during-power-outage-california",
        "label": "Do Solar Panels Work During a Power Outage in California?"
      },
      {
        "href": "/blog/solar-panel-removal-reinstall-cost",
        "label": "Solar Panel Removal for Roof Replacement: CA Quote Checklist"
      }
    ]
  },
  {
    "hub": "maintenance",
    "label": "Maintenance, repair and removal",
    "hubPage": null,
    "hubPageLabel": null,
    "spokes": [
      {
        "href": "/blog/solar-panel-maintenance-cost",
        "label": "Solar Panel Maintenance Cost in California: What Drives It"
      },
      {
        "href": "/blog/solar-panel-removal-reinstall-cost",
        "label": "Solar Panel Removal for Roof Replacement: CA Quote Checklist"
      },
      {
        "href": "/blog/solar-panel-cleaning-california",
        "label": "Solar Panel Cleaning in California: Is It Worth It?"
      },
      {
        "href": "/blog/solar-panel-bird-proofing",
        "label": "Solar Panel Bird Proofing Cost: $200-$500 in California"
      }
    ]
  },
  {
    "hub": "nem",
    "label": "NEM 3.0, net billing and solar billing",
    "hubPage": "/blog/nem-2-vs-nem-3-california",
    "hubPageLabel": "NEM 2.0 vs NEM 3.0 California: Export Compensation",
    "spokes": [
      {
        "href": "/blog/why-is-my-pge-bill-so-high",
        "label": "Why Is My PG&amp;E Bill So High? 7 Causes to Check (2026)"
      },
      {
        "href": "/blog/how-does-net-metering-work",
        "label": "How Does Net Metering Work? Plain-English Guide (2026)"
      },
      {
        "href": "/blog/sdge-time-of-use-rates-2026",
        "label": "SDG&amp;E Peak Hours &amp; TOU-DR1 Rates (2026): 5 Plans Compared"
      },
      {
        "href": "/commercial-solar/vnem-aggregation-multi-meter",
        "label": "California VNEM vs NEM Aggregation: Multi-Meter Solar"
      },
      {
        "href": "/blog/nem-3-california-timeline",
        "label": "NEM 3.0 California Timeline: Confirmed Dates"
      },
      {
        "href": "/blog/nem-3-california-still-worth-it",
        "label": "Is Solar Still Worth It Under California Net Billing?"
      },
      {
        "href": "/blog/what-is-nem-3-california",
        "label": "What is NEM 3.0 in California? Start with the bill"
      },
      {
        "href": "/solar-problems/true-up-bill-california-explained",
        "label": "California Solar True-Up Bill Explained"
      }
    ]
  },
  {
    "hub": "news",
    "label": "News and policy updates",
    "hubPage": null,
    "hubPageLabel": null,
    "spokes": [
      {
        "href": "/blog/pge-vs-sce-vs-sdge-rates-compared",
        "label": "PG&amp;E vs SCE vs SDG&amp;E (2026): Rates per kWh and Sample Bills"
      }
    ]
  },
  {
    "hub": "other_options",
    "label": "Other options (community / plug-in solar)",
    "hubPage": "/blog/is-community-solar-worth-it",
    "hubPageLabel": "Is Community Solar Worth It? Compare Credit vs Cost",
    "spokes": [
      {
        "href": "/blog/sdge-time-of-use-rates-2026",
        "label": "SDG&amp;E Peak Hours &amp; TOU-DR1 Rates (2026): 5 Plans Compared"
      }
    ]
  },
  {
    "hub": "roof_structures",
    "label": "Roofs, solar roofs and carports",
    "hubPage": "/blog/is-my-roof-good-for-solar-california",
    "hubPageLabel": "Is My Roof Good for Solar? California Suitability Guide",
    "spokes": [
      {
        "href": "/blog/solar-panels-tile-roof-california",
        "label": "Solar Roof Tiles vs Panels on a Tile Roof in California"
      },
      {
        "href": "/blog/free-roof-replacement-with-solar-panels-california",
        "label": "Is Free Roof Replacement With Solar Real? What to Check"
      },
      {
        "href": "/blog/solar-carport-california-guide",
        "label": "Residential Solar Carports in California: Permits &amp; Quotes"
      },
      {
        "href": "/blog/rent-solar-panels-for-your-home-california",
        "label": "Rent Solar Panels for Your Home in California: Lease vs PPA"
      },
      {
        "href": "/blog/do-solar-panels-work-during-power-outage-california",
        "label": "Do Solar Panels Work During a Power Outage in California?"
      },
      {
        "href": "/solar-installers/baker-electric-solar-review",
        "label": "Baker Electric San Diego vs Baker Home Energy: Solar Review"
      }
    ]
  },
  {
    "hub": "rules_permits",
    "label": "Rules, mandates, permits and consumer protection",
    "hubPage": "/solar-problems",
    "hubPageLabel": "Solar Problems &amp; Scams in California: Honest Guides",
    "spokes": [
      {
        "href": "/blog/adu-solar-requirements-california",
        "label": "ADU Solar Requirements in California (2026)"
      }
    ]
  },
  {
    "hub": "utility_rates",
    "label": "Utility rates, time-of-use and peak hours",
    "hubPage": "/california-utility-rate-tracker",
    "hubPageLabel": "California Utility Rate Tracker: PG&amp;E, SCE, SDG&amp;E, SMUD",
    "spokes": [
      {
        "href": "/blog/pge-vs-sce-vs-sdge-rates-compared",
        "label": "PG&amp;E vs SCE vs SDG&amp;E (2026): Rates per kWh and Sample Bills"
      },
      {
        "href": "/blog/pge-rate-increase-2026",
        "label": "PG&amp;E Rate Changes 2026: How to Check Your California Bill"
      },
      {
        "href": "/blog/sdge-time-of-use-rates-2026",
        "label": "SDG&amp;E Peak Hours &amp; TOU-DR1 Rates (2026): 5 Plans Compared"
      },
      {
        "href": "/blog/why-is-my-pge-bill-so-high",
        "label": "Why Is My PG&amp;E Bill So High? 7 Causes to Check (2026)"
      },
      {
        "href": "/blog/sce-rate-increase-2026",
        "label": "SCE Rates Decreased in 2026, But Remain High in Edison"
      },
      {
        "href": "/blog/pge-time-of-use-rates-2026",
        "label": "PG&amp;E Time-of-Use Rates: 2026 Plan Guide"
      },
      {
        "href": "/blog/sdge-rate-increase-2026",
        "label": "SDG&amp;E Rate Increase 2026: Highest Rates in America"
      },
      {
        "href": "/solar-panels-california",
        "label": "Solar Panels in California: $3.30/W Median Cost and Sizing"
      },
      {
        "href": "/best-solar-companies-california",
        "label": "Compare solar companies in California"
      },
      {
        "href": "/blog/sce-time-of-use-rates-2026",
        "label": "SCE Time-of-Use Rates 2026: Plans, Prices, Peak Hours"
      }
    ]
  }
];

export function topicHub(hub: TopicHubId): TopicHub | undefined {
  return TOPIC_HUBS.find((h) => h.hub === hub);
}
