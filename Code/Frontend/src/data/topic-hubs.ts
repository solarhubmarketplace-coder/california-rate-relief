/**
 * Topic hubs (topical-authority program, SEO/24). Generated 2026-09-23 from
 * _AUDIT/2026-09-23_topicmap/blocks/05_structure/hub_page_map.csv (live pages only).
 * New pages are appended at integration. Consumed by components/growth/HubSpokeLinks.
 *
 * 2026-09-23 (t2-structure): every live page that orphans.csv (Block 5 §5.11)
 * attaches to a hub is now a spoke of that hub, so each hub page lists it.
 * Out-of-state, trust/legal, home and redirected URLs are left out on purpose.
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
        "href": "/battery/tesla-powerwall-3-cost-california",
        "label": "Tesla Powerwall 3 Cost in California (2026): Price, Rebates"
      },
      {
        "href": "/battery/battery-backup-vs-generator-california",
        "label": "Powerwall or generator for outages"
      },
      {
        "href": "/battery/solar-and-storage-association-california",
        "label": "What CALSSA is and argues"
      },
      {
        "href": "/battery/battery-storage-capacity-california",
        "label": "California battery storage capacity"
      },
      {
        "href": "/battery/add-powerwall-to-existing-solar",
        "label": "Adding a Powerwall to existing solar"
      },
      {
        "href": "/battery/solar-battery-company",
        "label": "How to choose a battery company"
      },
      {
        "href": "/battery/pge-solar-battery-rebate",
        "label": "PG&E solar battery incentives in 2026"
      },
      {
        "href": "/battery/pge-permanent-battery-storage-rebate",
        "label": "PG&E's $7,500 battery rebate, explained"
      },
      {
        "href": "/blog/solar-battery-backup-california",
        "label": "Solar battery backup and storage in California"
      },
      {
        "href": "/battery/sgip-battery-rebate-california",
        "label": "SGIP status, eligibility and what it pays"
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
        "label": "PG&E vs SCE vs SDG&E (2026): Rates per kWh and Sample Bills"
      },
      {
        "href": "/battery/battery-payback-nem-3-california",
        "label": "Battery Payback Under NEM 3.0 in California (2026)"
      },
      {
        "href": "/battery/home-battery-cost-california",
        "label": "Home Battery Cost in California 2026: Real Numbers"
      },
      {
        "href": "/battery/how-many-batteries-do-i-need-california",
        "label": "How Many Home Batteries Do You Need?"
      },
      {
        "href": "/battery/tesla-powerwall-alternatives",
        "label": "Tesla Powerwall Alternatives for California Homes 2026"
      },
      {
        "href": "/blog/solar-during-psps-california",
        "label": "Solar during a PSPS power shutoff"
      }
    ]
  },
  {
    "hub": "city_bills",
    "label": "City pages: electric bills and rates",
    "hubPage": "/california-utility-rate-tracker",
    "hubPageLabel": "California Utility Rate Tracker: PG&E, SCE, SDG&E, SMUD",
    "spokes": [
      {
        "href": "/solar-savings/los-angeles-county",
        "label": "Who provides electricity in Los Angeles County"
      },
      {
        "href": "/solar-savings/san-diego",
        "label": "San Diego Solar Savings: SDG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/sacramento",
        "label": "Sacramento Solar Savings: SMUD Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/sunnyvale",
        "label": "Sunnyvale Solar Savings: PG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/irvine",
        "label": "Irvine electricity: Orange County Power Authority and SCE (label update)"
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
        "label": "Oakland electricity: Ava Community Energy and PG&E (label update)"
      },
      {
        "href": "/solar-savings/carlsbad",
        "label": "Carlsbad Solar Savings: SDG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/riverside",
        "label": "Riverside Solar Savings: RPU or SCE Rates & Quotes (2026)"
      },
      {
        "href": "/solar-savings/oceanside",
        "label": "Oceanside Solar Savings: SDG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/san-diego-county",
        "label": "San Diego County Solar Guide: City, Bill and Project Paths"
      },
      {
        "href": "/solar-savings/santa-rosa",
        "label": "Santa Rosa Solar Savings: PG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/huntington-beach",
        "label": "Huntington Beach Solar Savings: SCE Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/escondido",
        "label": "Escondido Solar Savings: SDG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/san-mateo",
        "label": "San Mateo Solar Savings: PG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/san-clemente",
        "label": "San Clemente Solar Savings: SDG&E Rates & Quotes (2026)"
      },
      {
        "href": "/solar-savings/simi-valley",
        "label": "Simi Valley Solar Savings: SCE Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/santa-ana",
        "label": "Santa Ana Solar Savings: SCE Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/pleasanton",
        "label": "Pleasanton Solar Savings: PG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/stockton",
        "label": "Stockton Solar Savings: PG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/walnut-creek",
        "label": "Walnut Creek Solar Savings: PG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/glendale",
        "label": "Glendale Solar Savings: GWP Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/hayward",
        "label": "Hayward Solar Savings: PG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/modesto",
        "label": "Modesto Solar Savings: MID or TID Rates & Quotes (2026)"
      },
      {
        "href": "/solar-savings/livermore",
        "label": "Livermore Solar Savings: PG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/thousand-oaks",
        "label": "Thousand Oaks Solar Savings: SCE Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/fontana",
        "label": "Fontana Solar Savings: SCE Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/santa-clarita",
        "label": "Santa Clarita Solar Savings: SCE Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/visalia",
        "label": "Visalia Solar Savings: SCE Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/santa-cruz",
        "label": "Santa Cruz Solar Savings: PG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/san-luis-obispo",
        "label": "San Luis Obispo Solar Savings: PG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/rancho-cordova",
        "label": "Rancho Cordova Solar Savings: SMUD Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/el-dorado-hills",
        "label": "El Dorado Hills Solar Savings: PG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/chula-vista",
        "label": "Chula Vista Solar Savings: SDG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/half-moon-bay",
        "label": "Half Moon Bay Solar Savings: PG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/hemet",
        "label": "Hemet Solar Savings: SCE Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/central-valley",
        "label": "Central Valley Solar Companies: Fresno & Sacramento"
      },
      {
        "href": "/solar-savings/fallbrook",
        "label": "Fallbrook Solar Savings: SDG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/aptos",
        "label": "Aptos Solar Savings: PG&E Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/beaumont",
        "label": "Beaumont Solar Savings: SCE Rates & Costs (2026)"
      },
      {
        "href": "/solar-savings/inland-empire",
        "label": "Inland Empire utilities and solar guide"
      },
      {
        "href": "/solar-savings/lakewood",
        "label": "Lakewood electric rates and solar savings"
      },
      {
        "href": "/solar-savings/lodi",
        "label": "Lodi electric rates and solar savings"
      },
      {
        "href": "/solar-savings/menifee",
        "label": "Menifee electric rates and solar savings"
      },
      {
        "href": "/solar-savings/merced",
        "label": "Merced electric rates and solar savings"
      },
      {
        "href": "/solar-savings/moreno-valley",
        "label": "Moreno Valley electric rates and solar savings"
      },
      {
        "href": "/solar-savings/murrieta",
        "label": "Murrieta electric rates and solar savings"
      },
      {
        "href": "/solar-savings/pacific-grove",
        "label": "Pacific Grove electric rates and solar savings"
      },
      {
        "href": "/solar-savings/palm-desert",
        "label": "Palm Desert electric rates and solar savings"
      },
      {
        "href": "/solar-savings/palm-springs",
        "label": "Palm Springs electric rates and solar savings"
      },
      {
        "href": "/solar-savings/redlands",
        "label": "Redlands electric rates and solar savings"
      },
      {
        "href": "/solar-savings/richmond",
        "label": "Richmond electric rates and solar savings"
      },
      {
        "href": "/solar-savings/vallejo",
        "label": "Vallejo electric rates and solar savings"
      },
      {
        "href": "/solar-savings/watsonville",
        "label": "Watsonville electric rates and solar savings"
      },
      {
        "href": "/solar-savings/westminster",
        "label": "Westminster electric rates and solar savings"
      },
      {
        "href": "/solar-savings/wildomar",
        "label": "Wildomar electric rates and solar savings"
      },
      {
        "href": "/solar-savings/winchester",
        "label": "Winchester electric rates and solar savings"
      },
      {
        "href": "/solar-savings/lancaster",
        "label": "Who provides electricity in Lancaster: SCE and Lancaster Energy"
      },
      {
        "href": "/solar-savings/newport-beach",
        "label": "Newport Beach electricity: SCE rates and bills"
      },
      {
        "href": "/solar-savings/palo-alto",
        "label": "Palo Alto electricity: City of Palo Alto Utilities rates"
      },
      {
        "href": "/solar-savings/altadena",
        "label": "The SCE bill increase in Altadena"
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
        "label": "Solar Panels in Carlsbad, CA: Cost & Installer Checks (2026)"
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
        "label": "Encinitas Solar Panels: Cost & Installer Checks (2026)"
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
        "label": "Chula Vista Solar Panels: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/vallejo",
        "label": "Solar Panels in Vallejo, CA: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/oceanside",
        "label": "Oceanside Solar Panels: Cost & Installer Checks (2026)"
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
        "label": "Walnut Creek Solar Panels: Cost & Installer Checks (2026)"
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
        "label": "El Dorado Hills Solar Panels: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/san-jose",
        "label": "Solar Panel Cost in San Jose, CA: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/tulare",
        "label": "Solar Panels in Tulare, CA: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/manteca",
        "label": "Solar Panels in Manteca, CA: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/san-marcos",
        "label": "San Marcos Solar Panels: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/napa",
        "label": "Solar Panels in Napa, CA: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/tracy",
        "label": "Solar Panels in Tracy, CA: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/yucaipa",
        "label": "Solar Panels in Yucaipa, CA: Cost & Installer Checks (2026)"
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
        "label": "Solar Panels in Auburn, CA: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/rancho-cucamonga",
        "label": "Solar Panel Cost in Rancho Cucamonga, CA (2026)"
      },
      {
        "href": "/solar-cost/rancho-cordova",
        "label": "Rancho Cordova Solar Panels: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/modesto",
        "label": "Solar Panel Cost in Modesto, CA: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/ontario",
        "label": "Solar Panels in Ontario, CA: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/corona",
        "label": "Solar Panels in Corona, CA: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/monterey",
        "label": "Solar Panels in Monterey, CA: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/yuba-city",
        "label": "Yuba City Solar Panels: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/windsor",
        "label": "Solar Panels in Windsor, CA: Cost & Installer Checks (2026)"
      },
      {
        "href": "/solar-cost/ventura",
        "label": "Solar Panel Cost in Ventura, CA: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/rocklin",
        "label": "Solar Panel Cost in Rocklin, CA: What Sets the Price (2026)"
      },
      {
        "href": "/solar-cost/bakersfield",
        "label": "Solar panel cost in Bakersfield"
      },
      {
        "href": "/solar-cost/california-city",
        "label": "Solar panel cost in California City"
      },
      {
        "href": "/solar-cost/los-angeles",
        "label": "Solar panel cost in Los Angeles"
      },
      {
        "href": "/solar-cost/palm-springs",
        "label": "Solar panel cost in Palm Springs"
      },
      {
        "href": "/solar-cost/san-mateo",
        "label": "Solar panel cost in San Mateo"
      },
      {
        "href": "/solar-cost/irvine",
        "label": "Solar panel cost in Irvine"
      },
      {
        "href": "/solar-cost/fremont",
        "label": "Solar panel cost in Fremont"
      },
      {
        "href": "/solar-cost/riverside",
        "label": "Solar panel cost in Riverside"
      },
      {
        "href": "/solar-cost/oakland",
        "label": "Solar panel cost in Oakland"
      },
      {
        "href": "/solar-cost/pleasanton",
        "label": "Solar panel cost in Pleasanton"
      },
      {
        "href": "/solar-cost/chico",
        "label": "Solar panel cost in Chico"
      },
      {
        "href": "/solar-cost/pasadena",
        "label": "Solar panel cost in Pasadena"
      },
      {
        "href": "/solar-cost/santa-clarita",
        "label": "Solar panel cost in Santa Clarita"
      },
      {
        "href": "/solar-cost/long-beach",
        "label": "Solar panel cost in Long Beach"
      },
      {
        "href": "/solar-cost/santa-ana",
        "label": "Solar panel cost in Santa Ana"
      },
      {
        "href": "/solar-cost/sacramento",
        "label": "Solar panel cost in Sacramento"
      },
      {
        "href": "/solar-cost/sunnyvale",
        "label": "Solar panel cost in Sunnyvale"
      },
      {
        "href": "/solar-cost/visalia",
        "label": "Solar panel cost in Visalia"
      },
      {
        "href": "/solar-cost/mountain-view",
        "label": "Solar panel cost in Mountain View"
      },
      {
        "href": "/solar-cost/huntington-beach",
        "label": "Solar panel cost in Huntington Beach"
      },
      {
        "href": "/solar-cost/arcata",
        "label": "Solar panel cost in Arcata"
      },
      {
        "href": "/solar-cost/concord",
        "label": "Solar panel cost in Concord"
      },
      {
        "href": "/solar-cost/richmond",
        "label": "Solar panel cost in Richmond"
      },
      {
        "href": "/solar-cost/berkeley",
        "label": "Solar panel cost in Berkeley"
      },
      {
        "href": "/solar-cost/santa-clara",
        "label": "Solar panel cost in Santa Clara"
      },
      {
        "href": "/solar-cost/san-clemente",
        "label": "Solar panel cost in San Clemente"
      },
      {
        "href": "/solar-cost/clovis",
        "label": "Solar panel cost in Clovis"
      },
      {
        "href": "/solar-cost/lakewood",
        "label": "Solar panel cost in Lakewood"
      },
      {
        "href": "/solar-cost/elk-grove",
        "label": "Solar panel cost in Elk Grove"
      },
      {
        "href": "/solar-cost/mission-viejo",
        "label": "Solar panel cost in Mission Viejo"
      },
      {
        "href": "/solar-cost/victorville",
        "label": "Solar panel cost in Victorville"
      },
      {
        "href": "/solar-cost/glendale",
        "label": "Solar panel cost in Glendale"
      },
      {
        "href": "/solar-cost/santa-barbara",
        "label": "Solar panel cost in Santa Barbara"
      },
      {
        "href": "/solar-cost/vacaville",
        "label": "Solar panel cost in Vacaville"
      },
      {
        "href": "/solar-cost/saratoga",
        "label": "Solar panel cost in Saratoga"
      },
      {
        "href": "/solar-cost/gilroy",
        "label": "Solar panel cost in Gilroy"
      },
      {
        "href": "/solar-cost/san-ramon",
        "label": "Solar panel cost in San Ramon"
      },
      {
        "href": "/solar-cost/redding",
        "label": "Solar panel cost in Redding"
      },
      {
        "href": "/solar-cost/redwood-city",
        "label": "Solar panel cost in Redwood City"
      },
      {
        "href": "/solar-cost/cupertino",
        "label": "Solar panel cost in Cupertino"
      },
      {
        "href": "/solar-cost/hollister",
        "label": "Solar cost in Hollister"
      },
      {
        "href": "/solar-cost/petaluma",
        "label": "Solar cost in Petaluma"
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
        "href": "/solar-companies/winchester",
        "label": "Solar companies in Winchester"
      },
      {
        "href": "/solar-companies/watsonville",
        "label": "Solar companies in Watsonville"
      },
      {
        "href": "/solar-companies/walnut-creek",
        "label": "Solar companies in Walnut Creek"
      },
      {
        "href": "/solar-companies/seaside",
        "label": "Solar companies in Seaside"
      },
      {
        "href": "/solar-companies/salinas",
        "label": "Solar companies in Salinas"
      },
      {
        "href": "/solar-companies/rancho-cordova",
        "label": "Solar companies in Rancho Cordova"
      },
      {
        "href": "/solar-companies/pacific-grove",
        "label": "Solar companies in Pacific Grove"
      },
      {
        "href": "/solar-companies/oceanside",
        "label": "Solar companies in Oceanside"
      },
      {
        "href": "/solar-companies/monterey",
        "label": "Solar companies in Monterey"
      },
      {
        "href": "/solar-companies/marina",
        "label": "Solar companies in Marina"
      },
      {
        "href": "/solar-companies/manteca",
        "label": "Solar companies in Manteca"
      },
      {
        "href": "/solar-companies/encinitas",
        "label": "Solar companies in Encinitas"
      },
      {
        "href": "/solar-companies/el-dorado-hills",
        "label": "Solar companies in El Dorado Hills"
      },
      {
        "href": "/solar-companies/corona",
        "label": "Solar companies in Corona"
      },
      {
        "href": "/solar-companies/chula-vista",
        "label": "Solar companies in Chula Vista"
      },
      {
        "href": "/solar-companies/beaumont",
        "label": "Solar companies in Beaumont"
      },
      {
        "href": "/solar-companies/aptos",
        "label": "Solar companies in Aptos"
      },
      {
        "href": "/solar-companies/yorba-linda",
        "label": "Solar companies in Yorba Linda"
      },
      {
        "href": "/solar-companies/ventura",
        "label": "Solar companies in Ventura"
      },
      {
        "href": "/solar-companies/vacaville",
        "label": "Solar companies in Vacaville"
      },
      {
        "href": "/solar-companies/san-marcos",
        "label": "Solar companies in San Marcos"
      },
      {
        "href": "/solar-companies/san-diego",
        "label": "Solar companies in San Diego"
      },
      {
        "href": "/solar-companies/redlands",
        "label": "Solar companies in Redlands"
      },
      {
        "href": "/solar-companies/redding",
        "label": "Solar companies in Redding"
      },
      {
        "href": "/solar-companies/oxnard",
        "label": "Solar companies in Oxnard"
      },
      {
        "href": "/solar-companies/mountain-view",
        "label": "Solar companies in Mountain View"
      },
      {
        "href": "/solar-companies/lincoln",
        "label": "Solar companies in Lincoln"
      },
      {
        "href": "/solar-companies/lancaster",
        "label": "Solar companies in Lancaster"
      },
      {
        "href": "/solar-companies/lakewood",
        "label": "Solar companies in Lakewood"
      },
      {
        "href": "/solar-companies/hayward",
        "label": "Solar companies in Hayward"
      },
      {
        "href": "/solar-companies/grass-valley",
        "label": "Solar companies in Grass Valley"
      },
      {
        "href": "/solar-companies/concord",
        "label": "Solar companies in Concord"
      },
      {
        "href": "/solar-companies/carlsbad",
        "label": "Solar companies in Carlsbad"
      },
      {
        "href": "/solar-companies/camarillo",
        "label": "Solar companies in Camarillo"
      },
      {
        "href": "/solar-companies/berkeley",
        "label": "Solar companies in Berkeley"
      },
      {
        "href": "/solar-companies/auburn",
        "label": "Solar companies in Auburn"
      },
      {
        "href": "/solar-companies/san-francisco",
        "label": "Solar Panels & Solar Companies in San Francisco, CA (2026)"
      },
      {
        "href": "/solar-companies/san-jose",
        "label": "Solar Panels & Solar Companies in San Jose, CA (2026)"
      },
      {
        "href": "/solar-companies/fresno",
        "label": "Solar Panels & Solar Companies in Fresno, CA (2026)"
      },
      {
        "href": "/solar-companies/los-angeles",
        "label": "Solar Panels & Solar Companies in Los Angeles, CA (2026)"
      },
      {
        "href": "/solar-companies/sacramento",
        "label": "Solar Panels & Solar Companies in Sacramento, CA (2026)"
      },
      {
        "href": "/solar-companies/bakersfield",
        "label": "Solar Panels & Solar Companies in Bakersfield, CA (2026)"
      },
      {
        "href": "/solar-companies/santa-rosa",
        "label": "Solar Panels & Solar Companies in Santa Rosa, CA (2026)"
      },
      {
        "href": "/solar-companies/pleasanton",
        "label": "Solar Panels & Solar Companies in Pleasanton, CA (2026)"
      },
      {
        "href": "/solar-companies/livermore",
        "label": "Solar Panels & Solar Companies in Livermore, CA (2026)"
      },
      {
        "href": "/solar-companies/modesto",
        "label": "Solar Panels & Solar Companies in Modesto, CA (2026)"
      },
      {
        "href": "/solar-companies/riverside",
        "label": "Solar Panels & Solar Companies in Riverside, CA (2026)"
      },
      {
        "href": "/solar-companies/temecula",
        "label": "Solar Panels & Solar Companies in Temecula, CA (2026)"
      },
      {
        "href": "/solar-companies/stockton",
        "label": "Solar Panels & Solar Companies in Stockton, CA (2026)"
      },
      {
        "href": "/solar-companies/chico",
        "label": "Solar Panels & Solar Companies in Chico, CA (2026)"
      },
      {
        "href": "/solar-companies/irvine",
        "label": "Solar Panels & Solar Companies in Irvine, CA (2026)"
      },
      {
        "href": "/solar-companies/oakland",
        "label": "Solar Panels & Solar Companies in Oakland, CA (2026)"
      },
      {
        "href": "/solar-companies/murrieta",
        "label": "Solar Panels & Solar Companies in Murrieta, CA (2026)"
      },
      {
        "href": "/solar-companies/palm-springs",
        "label": "Solar Panels & Solar Companies in Palm Springs, CA (2026)"
      },
      {
        "href": "/solar-companies/thousand-oaks",
        "label": "Solar Panels & Solar Companies in Thousand Oaks, CA (2026)"
      },
      {
        "href": "/solar-companies/glendale",
        "label": "Solar Panels & Solar Companies in Glendale, CA (2026)"
      },
      {
        "href": "/solar-companies/el-cajon",
        "label": "Solar Panels & Solar Companies in El Cajon, CA (2026)"
      },
      {
        "href": "/solar-companies/santa-clarita",
        "label": "Solar Panels & Solar Companies in Santa Clarita, CA (2026)"
      },
      {
        "href": "/solar-companies/fremont",
        "label": "Solar Panels & Solar Companies in Fremont, CA (2026)"
      },
      {
        "href": "/solar-companies/rocklin",
        "label": "Solar Panels & Solar Companies in Rocklin, CA (2026)"
      },
      {
        "href": "/solar-companies/visalia",
        "label": "Solar Panels & Solar Companies in Visalia, CA (2026)"
      },
      {
        "href": "/solar-companies/anaheim",
        "label": "Solar Panels & Solar Companies in Anaheim, CA (2026)"
      },
      {
        "href": "/solar-companies/half-moon-bay",
        "label": "Solar Panels & Solar Companies in Half Moon Bay, CA (2026)"
      },
      {
        "href": "/solar-companies/roseville",
        "label": "Solar Panels & Solar Companies in Roseville, CA (2026)"
      },
      {
        "href": "/solar-companies/san-mateo",
        "label": "Solar Panels & Solar Companies in San Mateo, CA (2026)"
      },
      {
        "href": "/solar-companies/richmond",
        "label": "Solar Panels & Solar Companies in Richmond, CA (2026)"
      },
      {
        "href": "/solar-companies/palm-desert",
        "label": "Solar Panels & Solar Companies in Palm Desert, CA (2026)"
      },
      {
        "href": "/solar-companies/san-luis-obispo",
        "label": "Solar Panels & Solar Companies in San Luis Obispo, CA (2026)"
      },
      {
        "href": "/solar-companies/pasadena",
        "label": "Solar Panels & Solar Companies in Pasadena, CA (2026)"
      },
      {
        "href": "/solar-companies/simi-valley",
        "label": "Solar Panels & Solar Companies in Simi Valley, CA (2026)"
      },
      {
        "href": "/solar-companies/fontana",
        "label": "Solar Panels & Solar Companies in Fontana, CA (2026)"
      },
      {
        "href": "/solar-companies/santa-ana",
        "label": "Solar Panels & Solar Companies in Santa Ana, CA (2026)"
      },
      {
        "href": "/solar-companies/long-beach",
        "label": "Solar Panels & Solar Companies in Long Beach, CA (2026)"
      },
      {
        "href": "/solar-companies/san-bernardino",
        "label": "Solar Panels & Solar Companies in San Bernardino, CA (2026)"
      },
      {
        "href": "/solar-companies/sonoma",
        "label": "Solar Panels & Solar Companies in Sonoma, CA (2026)"
      },
      {
        "href": "/solar-companies/huntington-beach",
        "label": "Huntington Beach Solar Panels & Solar Companies (2026)"
      },
      {
        "href": "/solar-companies/rancho-cucamonga",
        "label": "Solar companies in Rancho Cucamonga"
      },
      {
        "href": "/solar-companies/orange-county",
        "label": "Orange County solar companies by city utility and permit office"
      },
      {
        "href": "/solar-companies/san-mateo-county",
        "label": "San Mateo County solar companies and permit offices"
      },
      {
        "href": "/solar-companies/bay-area",
        "label": "Bay Area solar companies by generation provider and permit office"
      },
      {
        "href": "/solar-companies/scotts-valley",
        "label": "Scotts Valley solar companies"
      },
      {
        "href": "/solar-companies/santa-clara",
        "label": "Santa Clara solar companies (Silicon Valley Power)"
      },
      {
        "href": "/solar-companies/cupertino",
        "label": "Cupertino solar companies"
      },
      {
        "href": "/solar-companies/palo-alto",
        "label": "Palo Alto solar companies (City of Palo Alto Utilities)"
      },
      {
        "href": "/solar-companies/san-ramon",
        "label": "San Ramon solar companies"
      },
      {
        "href": "/solar-companies/santa-monica",
        "label": "Santa Monica solar companies"
      },
      {
        "href": "/solar-companies/ontario",
        "label": "Ontario solar companies"
      },
      {
        "href": "/solar-companies/riverside-county",
        "label": "Riverside County solar companies by utility"
      },
      {
        "href": "/solar-companies/high-desert",
        "label": "High Desert solar companies and permit offices"
      },
      {
        "href": "/solar-companies/kern-county",
        "label": "Kern County solar companies: PG&E and SCE areas"
      },
      {
        "href": "/solar-companies/bellflower",
        "label": "Bellflower solar companies"
      },
      {
        "href": "/solar-companies/brentwood",
        "label": "Solar companies in Brentwood"
      },
      {
        "href": "/solar-companies/la-mesa",
        "label": "Solar companies in La Mesa"
      },
      {
        "href": "/solar-companies/elk-grove",
        "label": "Solar companies in Elk Grove"
      },
      {
        "href": "/solar-companies/clovis",
        "label": "Solar companies in Clovis"
      },
      {
        "href": "/solar-companies/yuba-city",
        "label": "Solar companies in Yuba City"
      },
      {
        "href": "/solar-companies/davis",
        "label": "Solar companies in Davis"
      },
      {
        "href": "/solar-companies/novato",
        "label": "Solar companies in Novato"
      },
      {
        "href": "/solar-companies/san-rafael",
        "label": "Solar companies in San Rafael"
      },
      {
        "href": "/solar-companies/tracy",
        "label": "Solar companies in Tracy"
      },
      {
        "href": "/solar-companies/antioch",
        "label": "Solar companies in Antioch"
      },
      {
        "href": "/solar-companies/napa",
        "label": "Solar companies in Napa"
      },
      {
        "href": "/solar-companies/fairfield",
        "label": "Solar companies in Fairfield"
      },
      {
        "href": "/solar-companies/poway",
        "label": "Solar companies in Poway"
      },
      {
        "href": "/solar-companies/hollister",
        "label": "Solar companies in Hollister"
      },
      {
        "href": "/solar-companies/burbank",
        "label": "Solar companies in Burbank"
      },
      {
        "href": "/solar-companies/la-habra",
        "label": "Solar companies in La Habra"
      },
      {
        "href": "/solar-companies/coachella-valley",
        "label": "Solar companies in Coachella Valley"
      },
      {
        "href": "/solar-companies/ventura-county",
        "label": "Solar companies in Ventura County"
      },
      {
        "href": "/solar-companies/palmdale",
        "label": "Solar companies in Palmdale"
      },
      {
        "href": "/solar-companies/hesperia",
        "label": "Solar companies in Hesperia"
      },
      {
        "href": "/solar-companies/fullerton",
        "label": "Solar companies in Fullerton"
      },
      {
        "href": "/solar-companies/diamond-bar",
        "label": "Solar companies in Diamond Bar"
      },
      {
        "href": "/solar-companies/downey",
        "label": "Solar companies in Downey"
      },
      {
        "href": "/solar-companies/newport-beach",
        "label": "Solar companies in Newport Beach"
      },
      {
        "href": "/solar-companies/aliso-viejo",
        "label": "Solar companies in Aliso Viejo"
      },
      {
        "href": "/solar-companies/mission-viejo",
        "label": "Solar companies in Mission Viejo"
      },
      {
        "href": "/solar-companies/galt",
        "label": "Solar companies in Galt"
      },
      {
        "href": "/solar-companies/lake-forest",
        "label": "Solar companies in Lake Forest"
      },
      {
        "href": "/solar-companies/tustin",
        "label": "Solar companies in Tustin"
      },
      {
        "href": "/solar-companies/santee",
        "label": "Solar companies in Santee"
      },
      {
        "href": "/solar-companies/fallbrook",
        "label": "Solar companies in Fallbrook"
      },
      {
        "href": "/solar-companies/lake-elsinore",
        "label": "Solar companies in Lake Elsinore"
      },
      {
        "href": "/solar-companies/merced",
        "label": "Solar companies in Merced"
      },
      {
        "href": "/solar-companies/moreno-valley",
        "label": "Solar companies in Moreno Valley"
      },
      {
        "href": "/solar-companies/petaluma",
        "label": "Solar companies in Petaluma"
      },
      {
        "href": "/solar-companies/santa-barbara",
        "label": "Solar companies in Santa Barbara"
      },
      {
        "href": "/solar-companies/santa-cruz",
        "label": "Solar companies in Santa Cruz"
      },
      {
        "href": "/solar-companies/sunnyvale",
        "label": "Solar companies in Sunnyvale"
      },
      {
        "href": "/solar-companies/vallejo",
        "label": "Solar companies in Vallejo"
      },
      {
        "href": "/solar-companies/victorville",
        "label": "Solar companies in Victorville"
      },
      {
        "href": "/solar-companies/westminster",
        "label": "Solar companies in Westminster"
      },
      {
        "href": "/solar-companies/wildomar",
        "label": "Solar companies in Wildomar"
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
        "href": "/blog/solar-carport-california-guide",
        "label": "Solar carports in California"
      },
      {
        "href": "/commercial-solar/car-dealerships-going-solar-california",
        "label": "Solar for car dealerships"
      },
      {
        "href": "/commercial-solar/rec-commercial-solar-panels",
        "label": "REC panels for commercial projects"
      },
      {
        "href": "/commercial-solar/commercial-solar-roofing",
        "label": "Solar on commercial roofs"
      },
      {
        "href": "/commercial-solar/solar-developers",
        "label": "What commercial solar developers do"
      },
      {
        "href": "/commercial-solar/commercial-solar-carport-cost",
        "label": "Commercial solar carport cost"
      },
      {
        "href": "/commercial-solar/companies-california",
        "label": "Commercial Solar Companies & EPCs in California: 6 Checks"
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
        "href": "/panel-reviews/rec-solar-panels-review",
        "label": "REC Solar Panels Review: Alpha Pure, Where They're Made"
      },
      {
        "href": "/commercial-solar/title-24-requirements",
        "label": "California Title 24 Part 6 Commercial Solar Requirements"
      },
      {
        "href": "/commercial-solar/church-solar-california",
        "label": "California Church Solar: Elective Pay vs. PPA"
      },
      {
        "href": "/commercial-solar/commercial-battery-storage-california",
        "label": "Commercial Battery Storage California: 2026 Costs & ROI"
      },
      {
        "href": "/commercial-solar/vnem-aggregation-multi-meter",
        "label": "California VNEM vs NEM Aggregation: Multi-Meter Solar"
      },
      {
        "href": "/commercial-solar/agricultural-solar-california",
        "label": "Agricultural Solar in California: 2026 Farm Guide"
      },
      {
        "href": "/commercial-solar/commercial-solar-cost-100kw-california",
        "label": "100 kW Commercial Solar Cost California (2026)"
      },
      {
        "href": "/commercial-solar/commercial-solar-cost-1mw-california",
        "label": "1 MW Commercial Solar Cost in California (2026)"
      },
      {
        "href": "/commercial-solar/commercial-solar-cost-500kw-california",
        "label": "500 kW Commercial Solar Cost in California (2026)"
      },
      {
        "href": "/commercial-solar/commercial-solar-ppa-vs-purchase-california",
        "label": "Commercial Solar PPA vs Purchase vs C-PACE (CA)"
      },
      {
        "href": "/commercial-solar/multifamily-solar-california",
        "label": "Multifamily Solar California: SOMAH & VNEM Explained"
      },
      {
        "href": "/commercial-solar/retail-solar-california",
        "label": "Retail Solar in California: Costs, Rules, Ownership"
      },
      {
        "href": "/commercial-solar/school-solar-california",
        "label": "School Solar in California: DSA, CUPCCAA, Financing"
      },
      {
        "href": "/commercial-solar/self-storage-solar-california",
        "label": "California Self-Storage Solar: 2026 Guide"
      },
      {
        "href": "/commercial-solar/warehouse-solar-california",
        "label": "Warehouse Solar California: Cost, Sizing, and 2026 Rules"
      },
      {
        "href": "/commercial-solar/cpace-financing-california",
        "label": "C-PACE financing for commercial solar"
      },
      {
        "href": "/commercial-solar/financing-options",
        "label": "Commercial solar financing options"
      },
      {
        "href": "/commercial-solar/sgip-battery-storage",
        "label": "SGIP status for commercial battery storage"
      },
      {
        "href": "/commercial-solar/commercial-solar-tax-credit",
        "label": "Commercial solar tax credit (§48E)"
      },
      {
        "href": "/commercial-solar/commercial-solar-lease-programs",
        "label": "Commercial solar leases and roof leases"
      },
      {
        "href": "/commercial-solar/industrial-solar-california",
        "label": "Industrial solar in California"
      },
      {
        "href": "/commercial-solar/average-wattage-of-a-commercial-solar-panel",
        "label": "Commercial solar panel wattage"
      }
    ]
  },
  {
    "hub": "cost_value",
    "label": "Solar cost, payback and \"is it worth it\"",
    "hubPage": "/solar-panels-california",
    "hubPageLabel": "Solar Panels in California: Cost, Rules and Whether It Pays",
    "spokes": [
      {
        "href": "/blog/what-percentage-of-california-power-is-solar",
        "label": "How much of California's power is solar"
      },
      {
        "href": "/blog/pros-and-cons-of-solar-panels-california",
        "label": "Pros and cons of solar panels in California"
      },
      {
        "href": "/blog/replacement-solar-inverter-cost",
        "label": "Replacement inverter cost"
      },
      {
        "href": "/blog/pge-solar-calculator",
        "label": "PG&E solar calculator, explained"
      },
      {
        "href": "/blog/solar-payback-period-california",
        "label": "Solar payback period in California"
      },
      {
        "href": "/blog/solar-pool-heating-california",
        "label": "Solar Pool Heating in California: Cost, Sizing and Payback"
      },
      {
        "href": "/blog/pge-vs-sce-vs-sdge-rates-compared",
        "label": "PG&E vs SCE vs SDG&E (2026): Rates per kWh and Sample Bills"
      },
      {
        "href": "/tools/solar-panel-calculator",
        "label": "California Solar Cost Calculator: Check Your Quote"
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
        "label": "Residential Solar Carports in California: Permits & Quotes"
      },
      {
        "href": "/blog/sdge-time-of-use-rates-2026",
        "label": "SDG&E Peak Hours & TOU-DR1 Rates (2026): 5 Plans Compared"
      },
      {
        "href": "/blog/solar-panels-tile-roof-california",
        "label": "Solar Roof Tiles vs Panels on a Tile Roof in California"
      },
      {
        "href": "/blog/solar-panel-removal-reinstall-cost",
        "label": "Solar Panel Removal for Roof Replacement: CA Quote Checklist"
      },
      {
        "href": "/blog/switch-to-solar-california",
        "label": "Switching to solar, step by step"
      },
      {
        "href": "/blog/solar-installation-timeline-california",
        "label": "Solar installation timeline, quote to PTO"
      },
      {
        "href": "/blog/best-time-to-install-solar-panels-california",
        "label": "Best time of year to install solar"
      },
      {
        "href": "/blog/can-solar-panels-power-a-whole-house-california",
        "label": "Can solar power a whole house?"
      },
      {
        "href": "/blog/do-solar-panels-work-at-night-california",
        "label": "What solar does at night"
      },
      {
        "href": "/blog/do-solar-panels-work-on-cloudy-days-california",
        "label": "Solar output on cloudy days"
      },
      {
        "href": "/blog/solar-panels-for-ev-charging-california",
        "label": "Sizing solar for EV charging"
      },
      {
        "href": "/blog/adding-solar-panels-existing-system-california",
        "label": "Adding panels to an existing system"
      },
      {
        "href": "/blog/do-solar-panels-increase-property-taxes-california",
        "label": "Solar and your property tax"
      },
      {
        "href": "/solar-problems/hidden-costs-of-solar-california",
        "label": "Solar costs that quotes leave out"
      },
      {
        "href": "/california-solar-cost-index",
        "label": "Solar permit fees by city (cost index)"
      },
      {
        "href": "/blog/10-kw-solar-system-cost",
        "label": "What a 10 kW system costs in California"
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
        "href": "/blog/sce-settlement-bill",
        "label": "SCE annual settlement bill"
      },
      {
        "href": "/blog/what-is-3rd-party-electric-on-pge-bill",
        "label": "Third-party electric charges on a PG&E bill"
      },
      {
        "href": "/blog/why-is-my-smud-bill-so-high",
        "label": "Why a SMUD bill runs high"
      },
      {
        "href": "/blog/direct-access-electricity-california",
        "label": "Direct Access electricity in California"
      },
      {
        "href": "/blog/income-qualified-bill-discount-pge",
        "label": "PG&E CARE and FERA discounts"
      },
      {
        "href": "/blog/how-often-does-ladwp-bill",
        "label": "How often LADWP bills"
      },
      {
        "href": "/blog/average-pge-bill-for-1-bedroom-apartment",
        "label": "PG&E bill for a one-bedroom apartment"
      },
      {
        "href": "/blog/where-does-california-get-its-electricity",
        "label": "Where California's electricity comes from"
      },
      {
        "href": "/blog/average-utility-bill-california",
        "label": "Average California utility bill"
      },
      {
        "href": "/blog/pge-vs-sce-vs-sdge-rates-compared",
        "label": "PG&E vs SCE vs SDG&E (2026): Rates per kWh and Sample Bills"
      },
      {
        "href": "/blog/how-to-lower-electric-bill-california",
        "label": "How to Lower Your Electric Bill in California: 6 Steps"
      },
      {
        "href": "/blog/why-is-my-pge-bill-so-high",
        "label": "Why Is My PG&E Bill So High? 7 Causes to Check (2026)"
      },
      {
        "href": "/blog/why-is-my-ladwp-bill-so-high",
        "label": "Why Is My LADWP Bill So High? Rates & Fees Explained"
      },
      {
        "href": "/blog/why-is-my-sdge-bill-so-high",
        "label": "Why Is My SDG&E Bill So High? A Bill-First Checklist"
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
        "label": "California's New $24 Fixed Charge, Explained"
      },
      {
        "href": "/solar-problems/do-i-still-get-a-utility-bill-with-solar",
        "label": "Do you still get a bill with solar?"
      },
      {
        "href": "/solar-problems/does-solar-mean-free-electricity-california",
        "label": "Why solar does not mean a zero bill"
      },
      {
        "href": "/solar-problems/solar-bill-still-high-california",
        "label": "When the bill stays high after solar"
      },
      {
        "href": "/solar-problems/what-solar-doesnt-cover-california",
        "label": "Charges solar does not cover"
      },
      {
        "href": "/solar-problems/running-ac-with-solar-california",
        "label": "Running air conditioning on solar"
      },
      {
        "href": "/blog/help-with-pge-bill",
        "label": "Help paying a PG&E bill"
      },
      {
        "href": "/blog/how-to-lower-pge-bill",
        "label": "How to lower a PG&E bill"
      },
      {
        "href": "/blog/how-to-read-pge-bill",
        "label": "How to read a PG&E bill"
      },
      {
        "href": "/blog/how-to-read-sdge-bill",
        "label": "How to read an SDG&E bill"
      },
      {
        "href": "/blog/how-much-does-it-cost-to-turn-on-electricity",
        "label": "Cost to turn on electricity"
      },
      {
        "href": "/blog/average-sdge-bill-2-bedroom-apartment",
        "label": "SDG&E bill for a 2-bedroom apartment"
      },
      {
        "href": "/blog/does-pool-pump-use-a-lot-of-electricity",
        "label": "Pool pump electricity use"
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
        "href": "/blog/solar-for-renters",
        "label": "Solar options for renters"
      },
      {
        "href": "/blog/prepaid-lease-solar",
        "label": "Prepaid solar lease: what you pay and own"
      },
      {
        "href": "/blog/rent-solar-panels-for-your-home-california",
        "label": "Rent Solar Panels for Your Home in California: Lease vs PPA"
      },
      {
        "href": "/blog/prepaid-ppa-california-2026",
        "label": "Prepaid Solar PPA in California (2026): 5 Terms to Check"
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
      },
      {
        "href": "/blog/how-much-does-it-cost-to-lease-solar-panels-california",
        "label": "What a solar lease costs"
      },
      {
        "href": "/blog/solar-ppa-explained-california",
        "label": "How a solar PPA works"
      },
      {
        "href": "/blog/what-happens-if-stop-paying-solar-lease-california",
        "label": "Stopping solar lease payments"
      },
      {
        "href": "/solar-problems/solar-escalator-clause-explained",
        "label": "Escalator clauses in leases and PPAs"
      },
      {
        "href": "/solar-problems/solar-dealer-fees-explained",
        "label": "Dealer fees inside solar loans"
      },
      {
        "href": "/solar-problems/ucc-1-lien-solar-california",
        "label": "UCC-1 filings on solar equipment"
      },
      {
        "href": "/blog/solar-leasing-company",
        "label": "Solar leasing companies: how to compare"
      },
      {
        "href": "/blog/solar-ppa-companies",
        "label": "Solar PPA companies: how to compare offers"
      }
    ]
  },
  {
    "hub": "incentives",
    "label": "Tax credit, rebates and no-cost programs",
    "hubPage": "/blog/california-solar-tax-credit-2026",
    "hubPageLabel": "California Solar Tax Credit and Incentives (2026 Guide)",
    "spokes": [
      {
        "href": "/blog/inflation-reduction-act-solar-california",
        "label": "The Inflation Reduction Act and solar: what's left"
      },
      {
        "href": "/battery/sgip-battery-rebate-california",
        "label": "SGIP battery rebate status"
      },
      {
        "href": "/blog/low-income-solar-california",
        "label": "Low-income solar application paths"
      },
      {
        "href": "/blog/solar-for-renters",
        "label": "Bill-discount solar for renters"
      },
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
        "label": "Solar Rebates and Incentives by California Utility (2026)"
      },
      {
        "href": "/blog/free-roof-replacement-with-solar-panels-california",
        "label": "Is Free Roof Replacement With Solar Real? What to Check"
      },
      {
        "href": "/blog/why-is-my-pge-bill-so-high",
        "label": "Why Is My PG&E Bill So High? 7 Causes to Check (2026)"
      },
      {
        "href": "/blog/tech-clean-california-heat-pump-rebate",
        "label": "TECH Clean California heat pump rebates"
      },
      {
        "href": "/blog/pge-solar-program",
        "label": "PG&E solar programs"
      },
      {
        "href": "/blog/smud-solar-program",
        "label": "SMUD solar programs"
      },
      {
        "href": "/blog/ladwp-solar-program",
        "label": "LADWP solar programs"
      },
      {
        "href": "/blog/solar-discount",
        "label": "Solar discount programs (20% off, no panels)"
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
        "href": "/solar-installers/momentum-solar-vs-trinity-solar",
        "label": "Momentum Solar vs Trinity Solar (2026): Records Compared"
      },
      {
        "href": "/solar-installers/adt-solar-vs-momentum-solar",
        "label": "ADT Solar vs Momentum Solar: ADT Exited Solar in 2024"
      },
      {
        "href": "/solar-installers/sunrun-vs-trinity-solar",
        "label": "Sunrun vs Trinity Solar (2026): Service Area, BBB, Contracts"
      },
      {
        "href": "/solar-installers/pge-and-sunrun",
        "label": "PG&E and Sunrun: Battery Programs, Payments, Who Qualifies"
      },
      {
        "href": "/solar-installers/vivint-review",
        "label": "Vivint Solar Reviews (2026): Now Sunrun. What Owners Can Do"
      },
      {
        "href": "/solar-installers/worst-solar-companies-california",
        "label": "Solar bankruptcies on the court record"
      },
      {
        "href": "/battery/tesla-powerwall-3-cost-california",
        "label": "Tesla Powerwall 3 Cost in California (2026): Price, Rebates"
      },
      {
        "href": "/solar-installers/palmetto-solar-review",
        "label": "Palmetto Solar and LightReach Reviews (2026): BBB, Contract"
      },
      {
        "href": "/solar-installers/sunrun-review",
        "label": "Sunrun Reviews (2026): Is Sunrun Going Out of Business?"
      },
      {
        "href": "/solar-installers/momentum-solar-review",
        "label": "Momentum Solar Reviews (2026): Is It Legit in California?"
      },
      {
        "href": "/solar-installers/trinity-solar-review",
        "label": "Trinity Solar Reviews (2026): Northeast Installer, Not CA"
      },
      {
        "href": "/solar-installers/tesla-solar-review",
        "label": "Tesla Solar Reviews (2026): Are Tesla Solar Panels Good?"
      },
      {
        "href": "/solar-installers/sunrun-vs-sunpower",
        "label": "Sunrun vs SunPower (2026): After SunPower's Bankruptcy"
      },
      {
        "href": "/solar-installers/sunrun-vs-tesla-solar",
        "label": "Sunrun vs Tesla Solar (2026): Warranty, Lease and Powerwall"
      },
      {
        "href": "/panel-reviews/rec-solar-panels-review",
        "label": "REC Solar Panels Review (2026): Alpha Pure-RX, Where Made"
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
        "label": "Silfab Solar Panels Review (2026): Made in USA, Warranty"
      },
      {
        "href": "/solar-installers/elevation-solar-review",
        "label": "Elevation Solar Reviews (2026): Legit? BBB and the Contract"
      },
      {
        "href": "/solar-installers/sunergy-solar-review",
        "label": "Sunergy Solar Reviews (2026): Which Sunergy, BBB, Warranty"
      },
      {
        "href": "/solar-installers/sunlux-solar-review",
        "label": "Sunlux Solar Reviews (2026): Is Sunlux Legit? BBB, License"
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
        "label": "Solar Panels in California: Cost, Rules and Whether It Pays"
      },
      {
        "href": "/solar-installers/solar-installer-bankruptcy-california",
        "label": "Solar Installer Bankruptcy: What Survives in California"
      },
      {
        "href": "/solar-installers/sunrun-buyout-cost",
        "label": "Sunrun Buyout Cost: How the Payoff Is Calculated"
      },
      {
        "href": "/solar-installers/sunrun-ppa-explained",
        "label": "Sunrun PPA Explained: Terms From the 10-K"
      },
      {
        "href": "/panel-reviews",
        "label": "Solar panel brand reviews"
      },
      {
        "href": "/panel-reviews/canadian-solar-panels-review",
        "label": "Canadian Solar panels review"
      },
      {
        "href": "/panel-reviews/trina-solar-panels-review",
        "label": "Trina Solar panels review"
      },
      {
        "href": "/solar-installers/ameco-solar-review",
        "label": "Ameco Solar review"
      },
      {
        "href": "/solar-installers/empire-solar-review",
        "label": "Empire Solar review"
      },
      {
        "href": "/solar-installers/freedom-forever-review",
        "label": "Freedom Forever review"
      },
      {
        "href": "/solar-installers/new-day-solar-review",
        "label": "New Day Solar review"
      },
      {
        "href": "/solar-installers/sullivan-solar-power-review",
        "label": "Sullivan Solar Power review"
      },
      {
        "href": "/solar-installers/sunnova-review",
        "label": "Sunnova review"
      },
      {
        "href": "/solar-installers/sunnova-vs-sunrun",
        "label": "Sunnova vs Sunrun compared"
      },
      {
        "href": "/blog/tesla-powerwall-installers-california",
        "label": "Tesla Powerwall installers in California"
      },
      {
        "href": "/battery/tesla-powerwall-alternatives",
        "label": "Alternatives to the Tesla Powerwall"
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
        "href": "/solar-installers/worst-solar-companies-california",
        "label": "Checking a solar company's court and license record"
      },
      {
        "href": "/blog/solar-resources",
        "label": "Official California solar resources"
      },
      {
        "href": "/blog/solar-license-california",
        "label": "California solar contractor license requirements"
      },
      {
        "href": "/blog/solar-broker",
        "label": "What a solar broker can and cannot do"
      },
      {
        "href": "/solar-installers/licensed-solar-installer",
        "label": "How to find a licensed solar installer"
      },
      {
        "href": "/solar-panels-california",
        "label": "Solar Panels in California: Cost, Rules and Whether It Pays"
      },
      {
        "href": "/blog/solar-system-quotes-california",
        "label": "Solar quotes in California: how to get and compare bids"
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
        "label": "Residential Solar Carports in California: Permits & Quotes"
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
    "hubPage": "/solar-panel-maintenance-california",
    "hubPageLabel": "Solar panel maintenance in California",
    "spokes": [
      {
        "href": "/solar-problems/solar-panels-not-producing-enough",
        "label": "Panels not producing enough"
      },
      {
        "href": "/blog/solar-panel-inspection-california",
        "label": "Solar panel inspections in California"
      },
      {
        "href": "/blog/solar-panel-repair-cost",
        "label": "What drives solar panel repair cost"
      },
      {
        "href": "/blog/solar-panel-maintenance-cost",
        "label": "Solar Panel Maintenance Cost in California: What Drives It"
      },
      {
        "href": "/blog/solar-panel-removal-reinstall-cost",
        "label": "Solar panel removal and reinstall cost"
      },
      {
        "href": "/blog/solar-panel-cleaning-california",
        "label": "Solar Panel Cleaning in California: Is It Worth It?"
      },
      {
        "href": "/blog/solar-panel-bird-proofing",
        "label": "Solar Panel Bird Proofing Cost: $200-$500 in California"
      },
      {
        "href": "/blog/how-long-do-solar-panels-last",
        "label": "How long solar panels last"
      },
      {
        "href": "/solar-problems/solar-panel-degradation-california",
        "label": "Panel degradation over time"
      },
      {
        "href": "/solar-problems/solar-production-winter-california",
        "label": "Lower output in winter"
      },
      {
        "href": "/blog/what-is-a-solar-inverter",
        "label": "What a solar inverter does"
      },
      {
        "href": "/blog/string-inverter-vs-microinverter",
        "label": "String inverters vs microinverters"
      },
      {
        "href": "/blog/what-happens-to-solar-panels-after-25-years",
        "label": "Solar panels after 25 years"
      },
      {
        "href": "/solar-problems/solar-homeowners-insurance",
        "label": "Homeowners insurance and solar panels"
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
        "href": "/blog/rooftop-solar-credits-ruling-california",
        "label": "The NEM 3.0 court ruling explained"
      },
      {
        "href": "/blog/net-billing-vs-net-metering-california",
        "label": "The CPUC's NEM 3.0 decision"
      },
      {
        "href": "/blog/nem-3-lawsuit",
        "label": "The NEM 3.0 lawsuit, explained"
      },
      {
        "href": "/blog/when-does-nem-2-expire",
        "label": "When NEM 2.0 expires"
      },
      {
        "href": "/blog/sce-nem-2",
        "label": "SCE NEM 2.0 and the Solar Billing Plan"
      },
      {
        "href": "/blog/nem-pge",
        "label": "NEM on a PG&E bill"
      },
      {
        "href": "/blog/what-is-nem-true-up",
        "label": "What a NEM true-up is"
      },
      {
        "href": "/blog/why-are-my-nem-charges-so-high",
        "label": "Why NEM charges run high"
      },
      {
        "href": "/blog/nem-3-export-rates-california",
        "label": "NEM 3.0 export rates by hour"
      },
      {
        "href": "/blog/why-is-my-pge-bill-so-high",
        "label": "Why Is My PG&E Bill So High? 7 Causes to Check (2026)"
      },
      {
        "href": "/blog/how-does-net-metering-work",
        "label": "How Does Net Metering Work? Plain-English Guide (2026)"
      },
      {
        "href": "/blog/sdge-time-of-use-rates-2026",
        "label": "SDG&E Peak Hours & TOU-DR1 Rates (2026): 5 Plans Compared"
      },
      {
        "href": "/commercial-solar/vnem-aggregation-multi-meter",
        "label": "Virtual net metering and meter aggregation"
      },
      {
        "href": "/blog/nem-3-california-timeline",
        "label": "NEM 3.0 California Timeline: Confirmed Dates"
      },
      {
        "href": "/blog/what-is-nem-3-california",
        "label": "What is NEM 3.0 in California? Start with the bill"
      },
      {
        "href": "/solar-problems/true-up-bill-california-explained",
        "label": "California Solar True-Up Bill Explained"
      },
      {
        "href": "/blog/pge-solar-billing-plan",
        "label": "PG&E’s Solar Billing Plan, explained"
      },
      {
        "href": "/blog/sce-solar-billing-plan",
        "label": "SCE’s Solar Billing Plan and export rates"
      },
      {
        "href": "/blog/sdge-net-metering",
        "label": "SDG&E NEM 2.0 and the Solar Billing Plan"
      },
      {
        "href": "/blog/ladwp-net-metering",
        "label": "LADWP net metering (NEM 3.0 does not apply)"
      },
      {
        "href": "/blog/solar-rate",
        "label": "Which rate plan solar homes pay"
      },
      {
        "href": "/blog/solar-duck-curve-california",
        "label": "The California duck curve and curtailment"
      }
    ]
  },
  {
    "hub": "news",
    "label": "News and policy updates",
    "hubPage": null,
    "hubPageLabel": null,
    "spokes": []
  },
  {
    "hub": "other_options",
    "label": "Other options (community / plug-in solar)",
    "hubPage": "/blog/is-community-solar-worth-it",
    "hubPageLabel": "Is Community Solar Worth It? Compare Credit vs Cost",
    "spokes": [
      {
        "href": "/blog/solar-pool-heating-california",
        "label": "Solar pool heating in California"
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
        "href": "/blog/ladwp-solar-rooftops-program",
        "label": "LADWP Solar Rooftops program"
      },
      {
        "href": "/blog/roof-leak-after-solar-panel-install",
        "label": "Roof leak after a solar install"
      },
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
        "label": "Residential Solar Carports in California: Permits & Quotes"
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
      },
      {
        "href": "/blog/flat-roof-solar-panels",
        "label": "Solar panels on a flat roof"
      },
      {
        "href": "/blog/lease-roof-for-solar-panels",
        "label": "Leasing your roof for solar"
      },
      {
        "href": "/blog/solar-panels-over-canals-california",
        "label": "California's solar canal projects"
      }
    ]
  },
  {
    "hub": "rules_permits",
    "label": "Rules, mandates, permits and consumer protection",
    "hubPage": "/solar-problems",
    "hubPageLabel": "Solar Problems & Scams in California: Honest Guides",
    "spokes": [
      {
        "href": "/blog/are-solar-panels-a-scam",
        "label": "Solar scams and how to spot them"
      },
      {
        "href": "/solar-problems/solar-lawsuit-california",
        "label": "Solar lawsuits and settlements in California"
      },
      {
        "href": "/solar-problems/attorney-to-sue-solar-company-california",
        "label": "Finding an attorney for a solar dispute"
      },
      {
        "href": "/blog/adu-solar-requirements-california",
        "label": "ADU Solar Requirements in California (2026)"
      },
      {
        "href": "/solar-problems/do-i-still-get-a-utility-bill-with-solar",
        "label": "Do You Still Get a Utility Bill With Solar in CA?"
      },
      {
        "href": "/solar-problems/does-solar-mean-free-electricity-california",
        "label": "Does Solar Mean Free Electricity in California?"
      },
      {
        "href": "/solar-problems/hidden-costs-of-solar-california",
        "label": "Hidden Costs of Solar in California (2026 Guide)"
      },
      {
        "href": "/solar-problems/running-ac-with-solar-california",
        "label": "Running AC With Solar in California (NEM 3.0)"
      },
      {
        "href": "/solar-problems/solar-bill-still-high-california",
        "label": "Why Solar Didn't Lower Your CA Electric Bill"
      },
      {
        "href": "/solar-problems/solar-company-took-my-money-california",
        "label": "Solar Contractor Took Your Money? CA Guide"
      },
      {
        "href": "/solar-problems/solar-contract-red-flags-california",
        "label": "Solar Contract Red Flags in California (2026)"
      },
      {
        "href": "/solar-problems/solar-dealer-fees-explained",
        "label": "Solar Dealer Fees: What They Really Cost You"
      },
      {
        "href": "/solar-problems/solar-door-to-door-sales-california",
        "label": "California Door-to-Door Solar Sales: Know Your Rights"
      },
      {
        "href": "/solar-problems/solar-escalator-clause-explained",
        "label": "Solar Escalator Clause: How It Compounds"
      },
      {
        "href": "/solar-problems/solar-panel-degradation-california",
        "label": "Solar Degradation in California: What to Expect"
      },
      {
        "href": "/solar-problems/solar-production-winter-california",
        "label": "Winter Solar Drop in California: Normal or Not"
      },
      {
        "href": "/solar-problems/solar-sales-tactics-california",
        "label": "Solar Sales Tactics in California, Decoded"
      },
      {
        "href": "/solar-problems/ucc-1-lien-solar-california",
        "label": "California Solar UCC-1 Liens: What They Mean"
      },
      {
        "href": "/solar-problems/what-solar-doesnt-cover-california",
        "label": "What Solar Doesn't Cover in California"
      },
      {
        "href": "/solar-problems/why-solar-reps-get-a-bad-name",
        "label": "Why Solar Reps Get a Bad Name"
      },
      {
        "href": "/blog/can-you-cancel-solar-panel-contract-before-installation-california",
        "label": "Cancelling a solar contract before install"
      },
      {
        "href": "/blog/hoa-solar-rights-california",
        "label": "HOA rules and your solar rights"
      },
      {
        "href": "/blog/ab-942-california-solar",
        "label": "AB 942 and solar lease transfers"
      },
      {
        "href": "/solar-installers/solar-installer-bankruptcy-california",
        "label": "When a solar installer goes bankrupt"
      },
      {
        "href": "/solar-problems/solar-cancellation-california",
        "label": "How to get out of a solar contract"
      }
    ]
  },
  {
    "hub": "utility_rates",
    "label": "Utility rates, time-of-use and peak hours",
    "hubPage": "/california-utility-rate-tracker",
    "hubPageLabel": "California Utility Rate Tracker: PG&E, SCE, SDG&E, SMUD",
    "spokes": [
      {
        "href": "/blog/ladwp-ev-charging-rates",
        "label": "LADWP EV charging rates"
      },
      {
        "href": "/blog/chargepoint-cost-per-kwh-california",
        "label": "ChargePoint cost per kWh in California"
      },
      {
        "href": "/blog/selling-electricity-back-to-the-grid-price-per-kwh",
        "label": "What solar exports earn per kWh"
      },
      {
        "href": "/blog/did-pge-rates-go-up",
        "label": "Did PG&E rates go up?"
      },
      {
        "href": "/blog/sce-rate-schedules",
        "label": "SCE residential rate schedules"
      },
      {
        "href": "/blog/electricity-rates-highest-in-us-california",
        "label": "How California electricity rates rank"
      },
      {
        "href": "/blog/pge-tier-rates",
        "label": "PG&E tier rates on E-1"
      },
      {
        "href": "/blog/average-kwh-per-day-california",
        "label": "Average kWh per day in California"
      },
      {
        "href": "/blog/ladwp-rates",
        "label": "LADWP rates and peak hours"
      },
      {
        "href": "/blog/pge-vs-sce-vs-sdge-rates-compared",
        "label": "PG&E vs SCE vs SDG&E (2026): Rates per kWh and Sample Bills"
      },
      {
        "href": "/blog/pge-rate-increase-2026",
        "label": "PG&E Rate Changes 2026: How to Check Your California Bill"
      },
      {
        "href": "/blog/sdge-time-of-use-rates-2026",
        "label": "SDG&E Peak Hours & TOU-DR1 Rates (2026): 5 Plans Compared"
      },
      {
        "href": "/blog/why-is-my-pge-bill-so-high",
        "label": "Why Is My PG&E Bill So High? 7 Causes to Check (2026)"
      },
      {
        "href": "/blog/sce-rate-increase-2026",
        "label": "SCE Rates Decreased in 2026, But Remain High in Edison"
      },
      {
        "href": "/blog/pge-time-of-use-rates-2026",
        "label": "PG&E Time-of-Use Rates: 2026 Plan Guide"
      },
      {
        "href": "/blog/sdge-rate-increase-2026",
        "label": "SDG&E Rate Increase 2026: Highest Rates in America"
      },
      {
        "href": "/blog/sce-time-of-use-rates-2026",
        "label": "SCE Time-of-Use Rates 2026: Plans, Prices, Peak Hours"
      },
      {
        "href": "/blog/california-public-utilities-commission",
        "label": "What the CPUC decides on rates"
      },
      {
        "href": "/blog/california-energy-commission",
        "label": "What the California Energy Commission does"
      },
      {
        "href": "/blog/what-is-demand-charge-california",
        "label": "Demand charges, explained"
      },
      {
        "href": "/blog/smud-peak-hours",
        "label": "SMUD peak hours and summer rates"
      },
      {
        "href": "/blog/pge-ev-rates",
        "label": "PG&E EV rate plans"
      },
      {
        "href": "/blog/electricity-peak-hours-california",
        "label": "California peak hours by utility"
      },
      {
        "href": "/blog/sdge-and-solar",
        "label": "SDG&E and solar: Solar Billing Plan"
      },
      {
        "href": "/blog/solar-rate",
        "label": "Solar rates and the solar tariff"
      },
      {
        "href": "/blog/electricity-rates-by-zip-code",
        "label": "Electricity rates by ZIP code"
      },
      {
        "href": "/blog/pge-rate-schedules",
        "label": "PG&E rate schedules"
      }
    ]
  }
];

export function topicHub(hub: TopicHubId): TopicHub | undefined {
  return TOPIC_HUBS.find((h) => h.hub === hub);
}

/**
 * The parent hub of a page that more than one hub lists as a spoke.
 *
 * A page can sit in several hubs' lists (cross-hub links, §5.4), but it has one
 * parent (§5.2). Without this table the parent would be whichever hub comes
 * first in TOPIC_HUBS, which is alphabetical and says nothing about the page.
 * Each entry is the page's hub in Block 5 (hub_page_map.csv via PAGE.json, or
 * orphans.csv `proposed_hub` / `breadcrumb_parent`). Only pages whose
 * first-listed hub differs from that parent need an entry. The parent decides
 * the breadcrumb a shell derives for a /blog post (lib/breadcrumbs.ts), the
 * group the post sits in on /blog, and the block JsonArticleLinks renders.
 */
export const PRIMARY_HUB: Readonly<Record<string, TopicHubId>> = {
  '/blog/adu-solar-requirements-california': 'rules_permits',
  '/blog/do-solar-panels-work-during-power-outage-california': 'roof_structures',
  '/blog/free-roof-replacement-with-solar-panels-california': 'roof_structures',
  '/blog/free-solar-panels-california': 'incentives',
  '/blog/how-big-of-a-solar-system-do-i-need-california': 'installers',
  '/blog/is-it-better-to-buy-or-lease-solar-panels-california': 'installers',
  '/blog/pge-vs-sce-vs-sdge-rates-compared': 'utility_rates',
  '/blog/sce-rate-increase-2026': 'utility_rates',
  '/blog/sdge-time-of-use-rates-2026': 'utility_rates',
  '/blog/solar-carport-california-guide': 'roof_structures',
  '/blog/solar-panel-removal-reinstall-cost': 'maintenance',
  '/blog/solar-panels-tile-roof-california': 'roof_structures',
  '/panel-reviews/rec-solar-panels-review': 'installer_reviews',
  '/solar-installers/solar-installer-bankruptcy-california': 'rules_permits',
};

/**
 * The hub a path belongs to: the hub whose page it is, else its PRIMARY_HUB
 * entry, else the first hub listing it as a spoke.
 */
export function hubForPath(path: string): TopicHubId | undefined {
  const primary = PRIMARY_HUB[path];
  return (
    TOPIC_HUBS.find((h) => h.hubPage === path)?.hub ??
    (primary && TOPIC_HUBS.some((h) => h.hub === primary && h.spokes.some((s) => s.href === path))
      ? primary
      : undefined) ??
    TOPIC_HUBS.find((h) => h.spokes.some((s) => s.href === path))?.hub
  );
}
