/**
 * Central affiliate link registry.
 *
 * Every buy button on every review page reads from this file.
 * When a network approval lands, swap the `url` field here and all pages
 * update simultaneously — no per-page edits.
 *
 * Status values:
 *   - 'pending': network approval not yet granted; renders as placeholder/CTA
 *     that still works for click-tracking and UX but goes to brand site.
 *   - 'active': live affiliate link — clicks earn commission.
 *
 * Add new products as we build pages. Keep keys kebab-case matching slug.
 */

export type AffiliateNetwork =
  | 'shareasale'
  | 'impact'
  | 'cj'
  | 'awin'
  | 'amazon'
  | 'direct'
  | 'pending';

export interface AffiliateLink {
  /** Display name shown on button */
  brand: string;
  /** The URL the button points to. Starts as brand site, swaps to affiliate URL on approval. */
  url: string;
  /** Current approval status */
  status: 'pending' | 'active';
  /** Which network handles this program */
  network: AffiliateNetwork;
  /** Commission rate for internal revenue tracking */
  commissionRate?: string;
  /** Current retail price (display only — always verify on brand site) */
  priceDisplay?: string;
  /** Optional secondary/Amazon fallback link */
  fallbackUrl?: string;
}

export const AFFILIATE_LINKS: Record<string, AffiliateLink> = {
  // ============ POWER STATIONS ============
  'ecoflow-delta-pro-3': {
    brand: 'EcoFlow',
    url: 'https://us.ecoflow.com/products/delta-pro-3-portable-power-station',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5%',
    priceDisplay: '$1,999',
  },
  'ecoflow-delta-pro-ultra': {
    brand: 'EcoFlow',
    url: 'https://us.ecoflow.com/products/delta-pro-ultra',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5%',
    priceDisplay: '$4,099',
  },
  'ecoflow-delta-2': {
    brand: 'EcoFlow',
    url: 'https://us.ecoflow.com/products/delta-2-portable-power-station',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5%',
    priceDisplay: '$999',
  },
  'anker-solix-f3800': {
    brand: 'Anker',
    url: 'https://www.anker.com/products/a1790',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8%',
    priceDisplay: '$1,799',
  },
  'bluetti-ac500': {
    brand: 'Bluetti',
    url: 'https://www.bluettipower.com/products/ac500-b300s-home-battery-backup',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5-10%',
    priceDisplay: '$3,399',
  },
  'bluetti-ac200l': {
    brand: 'Bluetti',
    url: 'https://www.bluettipower.com/products/bluetti-ac200l-portable-power-station',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5-10%',
    priceDisplay: '$1,699',
  },
  'jackery-explorer-2000-plus': {
    brand: 'Jackery',
    url: 'https://www.jackery.com/products/jackery-explorer-2000-plus-portable-power-station',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '3-8%',
    priceDisplay: '$1,999',
  },
  'jackery-solar-generator-1000': {
    brand: 'Jackery',
    url: 'https://www.jackery.com/products/solar-generator-1000-v2',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '3-8%',
    priceDisplay: '$799',
  },

  // ============ E-BIKES ============
  'rad-power-radrover-6-plus': {
    brand: 'Rad Power Bikes',
    url: 'https://www.radpowerbikes.com/products/radrover-6-plus-electric-fat-tire-bike',
    status: 'pending',
    network: 'impact',
    commissionRate: '4-6%',
    priceDisplay: '$1,999',
  },
  'aventon-aventure-3': {
    brand: 'Aventon',
    url: 'https://www.aventon.com/products/aventure-3-ebike',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8%',
    priceDisplay: '$2,199',
  },
  'lectric-xp-3': {
    brand: 'Lectric eBikes',
    url: 'https://lectricebikes.com/products/xp-lite-2-0',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8%',
    priceDisplay: '$999',
  },
  'trek-electric-bike': {
    brand: 'Trek',
    url: 'https://www.trekbikes.com/us/en_US/bikes/electric-bikes/c/B507/',
    status: 'pending',
    network: 'awin',
    commissionRate: '3-5%',
    priceDisplay: '$2,499+',
  },

  // ============ LAWN ============
  'ego-select-cut-mower': {
    brand: 'EGO Power+',
    url: 'https://egopowerplus.com/select-cut-xp-mower-lmx5700/',
    status: 'pending',
    network: 'cj',
    commissionRate: '5-8%',
    priceDisplay: '$799',
  },
  'ego-snow-blower': {
    brand: 'EGO Power+',
    url: 'https://egopowerplus.com/peak-power-snow-blower-snt2400/',
    status: 'pending',
    network: 'cj',
    commissionRate: '5-8%',
    priceDisplay: '$899',
  },
  'greenworks-80v-lawn-mower': {
    brand: 'Greenworks',
    url: 'https://www.greenworkstools.com/products/80v-21-self-propelled-mower-with-5-0ah-battery',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5-10%',
    priceDisplay: '$649',
  },
  'ryobi-40v-lawn-mower': {
    brand: 'Ryobi',
    url: 'https://www.ryobitools.com/products/details/202000216/40v-hp-brushless-21-in-self-propelled-lawn-mower',
    status: 'pending',
    network: 'pending',
    commissionRate: '0% (no program)',
    priceDisplay: '$549',
    fallbackUrl: 'https://www.homedepot.com/',
  },
  'ryobi-snow-blower': {
    brand: 'Ryobi',
    url: 'https://www.ryobitools.com/',
    status: 'pending',
    network: 'pending',
    commissionRate: '0% (Home Depot fallback)',
    priceDisplay: '$799',
  },
  'dewalt-lawn-mower': {
    brand: 'DeWalt',
    url: 'https://www.dewalt.com/products/outdoor-power-equipment/lawn-mowers',
    status: 'pending',
    network: 'cj',
    commissionRate: '3-6%',
    priceDisplay: '$599',
  },
  'milwaukee-lawn-mower': {
    brand: 'Milwaukee',
    url: 'https://www.milwaukeetool.com/Products/Outdoor-Power-Equipment',
    status: 'pending',
    network: 'amazon',
    commissionRate: '3%',
    priceDisplay: '$799',
  },
  'milwaukee-chainsaw': {
    brand: 'Milwaukee',
    url: 'https://www.milwaukeetool.com/Products/Outdoor-Power-Equipment/Chainsaws',
    status: 'pending',
    network: 'amazon',
    commissionRate: '3%',
    priceDisplay: '$449',
  },

  // ============ HVAC / CLIMATE ============
  'mrcool-diy-4th-gen': {
    brand: 'MrCool',
    url: 'https://mrcool.com/diy-4th-gen-mini-split-heat-pump/',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '4% (Contractor Club)',
    priceDisplay: '$1,899+',
  },
  'pioneer-mini-split': {
    brand: 'Pioneer',
    url: 'https://www.pioneerminisplit.com/',
    status: 'pending',
    network: 'cj',
    commissionRate: '3-6%',
    priceDisplay: '$1,299+',
  },
  'mitsubishi-mini-split': {
    brand: 'Mitsubishi Electric',
    url: 'https://www.mitsubishicomfort.com/products',
    status: 'pending',
    network: 'pending',
    commissionRate: '0% (no direct program)',
    priceDisplay: 'Quote required',
  },
  'daikin-mini-split': {
    brand: 'Daikin',
    url: 'https://www.daikincomfort.com/',
    status: 'pending',
    network: 'pending',
    commissionRate: '0% (no direct program)',
    priceDisplay: 'Quote required',
  },
  'honeywell-smart-thermostat': {
    brand: 'Honeywell Home',
    url: 'https://www.honeywellhome.com/en/products/thermostats/',
    status: 'pending',
    network: 'cj',
    commissionRate: '5-10%',
    priceDisplay: '$199+',
  },

  // ============ GENERATORS ============
  'generac-guardian-24kw': {
    brand: 'Generac',
    url: 'https://www.generac.com/for-homeowners/home-backup-power/guardian-series/',
    status: 'pending',
    network: 'cj',
    commissionRate: '5-10%',
    priceDisplay: '$5,999+ (unit only)',
  },

  // ============ PHASE 2 EXPANSION — POWER STATIONS ============
  'ecoflow-delta-2-max': {
    brand: 'EcoFlow',
    url: 'https://us.ecoflow.com/products/delta-2-max-portable-power-station',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5%',
    priceDisplay: '$1,899',
  },
  'ecoflow-river-3': {
    brand: 'EcoFlow',
    url: 'https://us.ecoflow.com/products/river-3-portable-power-station',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5%',
    priceDisplay: '$259',
  },
  'ecoflow-river-3-plus': {
    brand: 'EcoFlow',
    url: 'https://us.ecoflow.com/products/river-3-plus-portable-power-station',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5%',
    priceDisplay: '$399',
  },
  'ecoflow-river-2-pro': {
    brand: 'EcoFlow',
    url: 'https://us.ecoflow.com/products/river-2-pro-portable-power-station',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5%',
    priceDisplay: '$499',
  },
  'ecoflow-delta-3-plus': {
    brand: 'EcoFlow',
    url: 'https://us.ecoflow.com/products/delta-3-plus-portable-power-station',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5%',
    priceDisplay: '$999',
  },
  'anker-solix-c1000': {
    brand: 'Anker',
    url: 'https://www.anker.com/products/a1761',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8%',
    priceDisplay: '$999',
  },
  'bluetti-eb3a': {
    brand: 'Bluetti',
    url: 'https://www.bluettipower.com/products/eb3a-portable-power-station',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5-10%',
    priceDisplay: '$299',
  },
  'bluetti-ac200max': {
    brand: 'Bluetti',
    url: 'https://www.bluettipower.com/products/ac200max-portable-power-station',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5-10%',
    priceDisplay: '$1,699',
  },
  'jackery-explorer-300': {
    brand: 'Jackery',
    url: 'https://www.jackery.com/products/explorer-300-portable-power-station',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '3-8%',
    priceDisplay: '$299',
  },
  'jackery-explorer-1000': {
    brand: 'Jackery',
    url: 'https://www.jackery.com/products/explorer-1000-portable-power-station',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '3-8%',
    priceDisplay: '$999',
  },

  // ============ PHASE 2 EXPANSION — THERMOSTATS ============
  'nest-thermostat': {
    brand: 'Google Nest',
    url: 'https://store.google.com/us/product/nest_learning_thermostat_4th_gen',
    status: 'pending',
    network: 'cj',
    commissionRate: '3-5%',
    priceDisplay: '$279',
  },
  'ecobee-thermostat': {
    brand: 'ecobee',
    url: 'https://www.ecobee.com/en-us/smart-thermostats/smart-thermostat-premium/',
    status: 'pending',
    network: 'cj',
    commissionRate: '4-8%',
    priceDisplay: '$249',
  },

  // ============ PHASE 2 EXPANSION — MINI SPLITS ============
  'gree-mini-split': {
    brand: 'Gree',
    url: 'https://www.greecomfort.com/',
    status: 'pending',
    network: 'pending',
    commissionRate: '0% (dealer direct)',
    priceDisplay: 'Quote required',
  },
  'senville-mini-split': {
    brand: 'Senville',
    url: 'https://senville.com/',
    status: 'pending',
    network: 'cj',
    commissionRate: '3-6%',
    priceDisplay: '$1,099+',
  },

  // ============ PHASE 2 EXPANSION — TANKLESS WATER HEATERS ============
  'rinnai-tankless-water-heater': {
    brand: 'Rinnai',
    url: 'https://www.rinnai.us/tankless-water-heaters',
    status: 'pending',
    network: 'pending',
    commissionRate: '0% (retail only)',
    priceDisplay: '$1,200+',
  },
  'rheem-tankless-water-heater': {
    brand: 'Rheem',
    url: 'https://www.rheem.com/water-heating/tankless-water-heaters/',
    status: 'pending',
    network: 'pending',
    commissionRate: '0% (retail only)',
    priceDisplay: '$999+',
  },
  'navien-tankless-water-heater': {
    brand: 'Navien',
    url: 'https://www.navieninc.com/products/tankless-water-heater',
    status: 'pending',
    network: 'pending',
    commissionRate: '0% (retail only)',
    priceDisplay: '$1,400+',
  },
  'noritz-tankless-water-heater': {
    brand: 'Noritz',
    url: 'https://www.noritz.com/',
    status: 'pending',
    network: 'pending',
    commissionRate: '0% (retail only)',
    priceDisplay: '$1,200+',
  },

  // ============ PHASE 2 EXPANSION — E-BIKES & MOTORCYCLES ============
  // Brand hubs — these anchor multiple product reviews
  'rad-power-bikes': {
    brand: 'Rad Power Bikes',
    url: 'https://www.radpowerbikes.com/',
    status: 'pending',
    network: 'impact',
    commissionRate: '4-6%',
    priceDisplay: '$1,199+',
  },
  'aventon-ebike': {
    brand: 'Aventon',
    url: 'https://www.aventon.com/',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8%',
    priceDisplay: '$1,199+',
  },
  'lectric-ebike': {
    brand: 'Lectric eBikes',
    url: 'https://lectricebikes.com/',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8%',
    priceDisplay: '$799+',
  },
  'velotric-ebike': {
    brand: 'Velotric',
    url: 'https://www.velotricbike.com/',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8%',
    priceDisplay: '$999+',
  },
  'gotrax-electric-scooter': {
    brand: 'Gotrax',
    url: 'https://gotrax.com/',
    status: 'pending',
    network: 'impact',
    commissionRate: '4-6%',
    priceDisplay: '$299+',
  },

  // ============ PHASE 2 EXPANSION — LAWN EQUIPMENT ============
  'ego-lawn-mower': {
    brand: 'EGO Power+',
    url: 'https://egopowerplus.com/lawn-mowers/',
    status: 'pending',
    network: 'cj',
    commissionRate: '5-8%',
    priceDisplay: '$499+',
  },
  'ryobi-lawn-mower': {
    brand: 'Ryobi',
    url: 'https://www.ryobitools.com/products/category/lawn-and-garden/mowers/',
    status: 'pending',
    network: 'pending',
    commissionRate: '0% (Home Depot)',
    priceDisplay: '$349+',
  },
  'greenworks-lawn-mower': {
    brand: 'Greenworks',
    url: 'https://www.greenworkstools.com/collections/lawn-mowers',
    status: 'pending',
    network: 'shareasale',
    commissionRate: '5-10%',
    priceDisplay: '$349+',
  },
  'dewalt-chainsaw': {
    brand: 'DeWalt',
    url: 'https://www.dewalt.com/products/outdoor-power-equipment/chainsaws',
    status: 'pending',
    network: 'cj',
    commissionRate: '3-6%',
    priceDisplay: '$349+',
  },
  'ego-chainsaw': {
    brand: 'EGO Power+',
    url: 'https://egopowerplus.com/chainsaws/',
    status: 'pending',
    network: 'cj',
    commissionRate: '5-8%',
    priceDisplay: '$299+',
  },
  'ryobi-chainsaw': {
    brand: 'Ryobi',
    url: 'https://www.ryobitools.com/products/category/lawn-and-garden/chainsaws/',
    status: 'pending',
    network: 'pending',
    commissionRate: '0% (Home Depot)',
    priceDisplay: '$229+',
  },
  'ego-leaf-blower': {
    brand: 'EGO Power+',
    url: 'https://egopowerplus.com/blowers/',
    status: 'pending',
    network: 'cj',
    commissionRate: '5-8%',
    priceDisplay: '$199+',
  },
  'dewalt-leaf-blower': {
    brand: 'DeWalt',
    url: 'https://www.dewalt.com/products/outdoor-power-equipment/blowers',
    status: 'pending',
    network: 'cj',
    commissionRate: '3-6%',
    priceDisplay: '$199+',
  },
  'ryobi-leaf-blower': {
    brand: 'Ryobi',
    url: 'https://www.ryobitools.com/products/category/lawn-and-garden/blowers/',
    status: 'pending',
    network: 'pending',
    commissionRate: '0% (Home Depot)',
    priceDisplay: '$169+',
  },
  'milwaukee-leaf-blower': {
    brand: 'Milwaukee',
    url: 'https://www.milwaukeetool.com/Products/Outdoor-Power-Equipment/Blowers',
    status: 'pending',
    network: 'amazon',
    commissionRate: '3%',
    priceDisplay: '$229+',
  },

  // ============ GENERIC FALLBACKS ============
  // When a specific product doesn't have a link yet, pages can use these
  amazon: {
    brand: 'Amazon',
    url: 'https://www.amazon.com/',
    status: 'pending',
    network: 'amazon',
    commissionRate: '1-4%',
  },
};

/**
 * Get a link by key with safe fallback.
 * Returns a safe placeholder object if key doesn't exist yet.
 */
export function getAffiliateLink(key: string): AffiliateLink {
  return (
    AFFILIATE_LINKS[key] || {
      brand: 'Retailer',
      url: 'https://www.amazon.com/',
      status: 'pending',
      network: 'amazon',
    }
  );
}

/**
 * Build the outbound URL. Appends tracking params for click measurement.
 * When network approval lands, this is where we inject affiliate IDs.
 */
export function buildAffiliateUrl(key: string, source?: string): string {
  const link = getAffiliateLink(key);
  const url = new URL(link.url);
  if (source) {
    url.searchParams.set('ref', `greenverdict-${source}`);
  }
  return url.toString();
}
