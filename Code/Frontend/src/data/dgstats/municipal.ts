// Cities whose main electric utility is publicly owned, so the CPUC's DG Stats
// interconnection data (PG&E, SCE and SDG&E customers only) cannot show who
// installs solar for most of their homes. Names as the site's own city data
// gives them (growth-cities.ts key facts, from the CEC's Electric Load Serving
// Entities map, and utility-rate-tracker.ts). `share` notes a city the CEC map
// splits. Plain TypeScript with no JSON import, so src/lib/city-pages.ts (which
// Node scripts load with type stripping) can read it too.
export const MUNICIPAL_MAIN_UTILITY: Readonly<Record<string, { name: string; short: string; share?: string }>> = {
  'los-angeles': { name: 'LADWP', short: 'LADWP' },
  sacramento: { name: 'SMUD', short: 'SMUD' },
  'elk-grove': { name: 'SMUD', short: 'SMUD' },
  galt: { name: 'SMUD', short: 'SMUD' },
  'rancho-cordova': { name: 'SMUD', short: 'SMUD' },
  anaheim: { name: 'Anaheim Public Utilities', short: 'APU' },
  riverside: { name: 'Riverside Public Utilities', short: 'RPU' },
  pasadena: { name: 'Pasadena Water and Power', short: 'PWP' },
  glendale: { name: 'Glendale Water & Power', short: 'GWP' },
  burbank: { name: 'Burbank Water and Power', short: 'BWP' },
  'santa-clara': { name: 'Silicon Valley Power', short: 'SVP' },
  roseville: { name: 'Roseville Electric Utility', short: 'Roseville Electric' },
  redding: { name: 'Redding Electric Utility', short: 'REU' },
  'palo-alto': { name: 'City of Palo Alto Utilities', short: 'CPAU' },
  lodi: { name: 'Lodi Electric Utility', short: 'Lodi Electric' },
  modesto: { name: 'the Modesto and Turlock irrigation districts', short: 'MID', share: 'about 78% of city land MID and 22% TID on the CEC map' },
  merced: { name: 'the Merced Irrigation District', short: 'Merced ID', share: 'about 78% of city land on the CEC map, with PG&E on the rest' },
  'moreno-valley': { name: 'Moreno Valley Utility', short: 'MVU', share: 'about 58% of city land on the CEC map, with SCE on the rest' },
};
