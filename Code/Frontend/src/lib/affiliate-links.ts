/**
 * Central affiliate link registry.
 *
 * Every buy button on every review page reads from this file.
 * When a network approval lands, swap the `url` field here and all pages
 * update simultaneously — no per-page edits.
 *
 * Status values:
 *   - 'pending': network approval not yet granted; clicks route to the brand
 *     storefront for UX continuity (not monetized).
 *   - 'active': live affiliate link — clicks earn direct commission.
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
    url: 'https://www.homedepot.com/b/Outdoors-Outdoor-Power-Equipment-Lawn-Mowers/RYOBI/N-5yc1vZc8plZjm5',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8% (Home Depot via Impact)',
    priceDisplay: '$549',
  },
  'ryobi-snow-blower': {
    brand: 'Ryobi',
    url: 'https://www.homedepot.com/b/Outdoors-Outdoor-Power-Equipment-Snow-Blowers/RYOBI/N-5yc1vZc7t4Zjm5',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8% (Home Depot via Impact)',
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
    url: 'https://www.homedepot.com/s/mitsubishi%20mini%20split',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8% (Home Depot via Impact)',
    priceDisplay: 'From $1,899',
  },
  'daikin-mini-split': {
    brand: 'Daikin',
    url: 'https://www.homedepot.com/s/daikin%20mini%20split',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8% (Home Depot via Impact)',
    priceDisplay: 'From $1,799',
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
    url: 'https://www.homedepot.com/s/gree%20mini%20split',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8% (Home Depot via Impact)',
    priceDisplay: 'From $1,299',
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
    url: 'https://www.homedepot.com/b/Plumbing-Water-Heaters-Tankless-Water-Heaters/Rinnai/N-5yc1vZbqlmZ8x9',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8% (Home Depot via Impact)',
    priceDisplay: '$1,299+',
  },
  'rheem-tankless-water-heater': {
    brand: 'Rheem',
    url: 'https://www.homedepot.com/b/Plumbing-Water-Heaters-Tankless-Water-Heaters/Rheem/N-5yc1vZbqlmZ60s',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8% (Home Depot via Impact)',
    priceDisplay: '$899+',
  },
  'navien-tankless-water-heater': {
    brand: 'Navien',
    url: 'https://www.homedepot.com/b/Plumbing-Water-Heaters-Tankless-Water-Heaters/Navien/N-5yc1vZbqlmZb1lj',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8% (Home Depot via Impact)',
    priceDisplay: '$1,499+',
  },
  'noritz-tankless-water-heater': {
    brand: 'Noritz',
    url: 'https://www.homedepot.com/b/Plumbing-Water-Heaters-Tankless-Water-Heaters/Noritz/N-5yc1vZbqlmZ7nwk',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8% (Home Depot via Impact)',
    priceDisplay: '$1,399+',
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
    url: 'https://www.homedepot.com/b/Outdoors-Outdoor-Power-Equipment-Lawn-Mowers/RYOBI/N-5yc1vZc8plZjm5',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8% (Home Depot via Impact)',
    priceDisplay: '$399',
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
    url: 'https://www.homedepot.com/b/Outdoors-Outdoor-Power-Equipment-Chainsaws/RYOBI/N-5yc1vZc8pdZjm5',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8% (Home Depot via Impact)',
    priceDisplay: '$249',
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
    url: 'https://www.homedepot.com/b/Outdoors-Outdoor-Power-Equipment-Leaf-Blowers/RYOBI/N-5yc1vZc8poZjm5',
    status: 'pending',
    network: 'impact',
    commissionRate: '5-8% (Home Depot via Impact)',
    priceDisplay: '$199',
  },
  'milwaukee-leaf-blower': {
    brand: 'Milwaukee',
    url: 'https://www.milwaukeetool.com/Products/Outdoor-Power-Equipment/Blowers',
    status: 'pending',
    network: 'amazon',
    commissionRate: '3%',
    priceDisplay: '$229+',
  },

  // ============ AWIN BRAND ACTIVATIONS — APRIL 2026 ============
  // 10 priority brands across SHG (5) and GRH (5). Status flips to 'active'
  // and url swaps to Awin tracking link as each approval lands. Pages auto-update.

  // SHG — Home Security & Smart Locks
  'vivint': {
    brand: 'Vivint',
    url: 'https://www.vivint.com/',
    status: 'pending',
    network: 'awin',
    commissionRate: '$60-$120/sale equiv',
    priceDisplay: 'From $599 + $44/mo',
  },
  'yale-assure-lock-2': {
    brand: 'Yale',
    url: 'https://shopyalehome.com/products/assure-lock-2',
    status: 'pending',
    network: 'awin',
    commissionRate: '5-8%',
    priceDisplay: '$259',
  },
  'imilab-ec5': {
    brand: 'IMILAB',
    url: 'https://www.imilab.com/products/imilab-ec5',
    status: 'pending',
    network: 'awin',
    commissionRate: '5-10%',
    priceDisplay: '$79',
  },
  'lockly-vision-elite': {
    brand: 'LOCKLY',
    url: 'https://lockly.com/products/lockly-vision-elite',
    status: 'pending',
    network: 'awin',
    commissionRate: '6-10%',
    priceDisplay: '$399',
  },
  'august-wifi-smart-lock': {
    brand: 'August',
    url: 'https://august.com/products/august-wifi-smart-lock',
    status: 'pending',
    network: 'awin',
    commissionRate: '5-8%',
    priceDisplay: '$229',
  },

  // GRH — Energy & Outdoor
  'bluetti-ac500-awin': {
    brand: 'Bluetti',
    url: 'https://www.bluettipower.com/products/ac500-b300s-home-battery-backup',
    status: 'pending',
    network: 'awin',
    commissionRate: '5-8%',
    priceDisplay: '$3,599 (street)',
  },
  'jackery-explorer-2000-plus-awin': {
    brand: 'Jackery',
    url: 'https://www.jackery.com/products/jackery-explorer-2000-plus-portable-power-station',
    status: 'pending',
    network: 'awin',
    commissionRate: '5-8%',
    priceDisplay: '$1,499 (street)',
  },
  'allpowers-r4000': {
    brand: 'ALLPOWERS',
    url: 'https://iallpowers.com/products/allpowers-r4000-portable-power-station',
    status: 'pending',
    network: 'awin',
    commissionRate: '6-10%',
    priceDisplay: '$1,499',
  },
  'powersmart-80v-mower': {
    brand: 'PowerSmart',
    url: 'https://www.powersmartusa.com/',
    status: 'pending',
    network: 'awin',
    commissionRate: '5-10%',
    priceDisplay: '$549',
  },
  'vivi-electric-bike': {
    brand: 'Vivi',
    url: 'https://www.vivi-bike.com/',
    status: 'pending',
    network: 'awin',
    commissionRate: '5-10%',
    priceDisplay: '$899',
  },

  // ============ WATER FILTRATION (Batch 11 — added 2026-05-01) ============
  // Pitchers
  'clearly-filtered-pitcher': {
    brand: 'Clearly Filtered',
    url: 'https://clearlyfiltered.com/products/clean-water-pitcher',
    status: 'pending',
    network: 'pending',
    commissionRate: '10-15%',
    priceDisplay: '$95',
  },
  'aquasana-clean-water-machine': {
    brand: 'Aquasana',
    url: 'https://www.aquasana.com/clean-water-machine',
    status: 'pending',
    network: 'shareasale',
    commissionRate: 'up to 20%',
    priceDisplay: '$170',
  },
  'brita-elite-pitcher': {
    brand: 'Brita',
    url: 'https://www.amazon.com/Brita-Filter-Replacement-Pitchers-Dispensers/dp/B07WS33VK1',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$36',
  },
  'zerowater-10-cup-pitcher': {
    brand: 'ZeroWater',
    url: 'https://www.amazon.com/ZeroWater-10-Cup-Replacement-Filtration-Pitcher/dp/B005G5LC3G',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$35',
  },
  'larq-purevis-pitcher': {
    brand: 'LARQ',
    url: 'https://www.livelarq.com/shop/larq-pitcher-purevis',
    status: 'pending',
    network: 'pending',
    commissionRate: '8-12%',
    priceDisplay: '$168',
  },
  'epic-pure-pitcher': {
    brand: 'Epic Water Filters',
    url: 'https://epicwaterfilters.com/products/the-epic-pure-water-filter-pitcher',
    status: 'pending',
    network: 'pending',
    commissionRate: '10-15%',
    priceDisplay: '$75',
  },
  'pur-plus-pitcher': {
    brand: 'Pur',
    url: 'https://www.amazon.com/PUR-PLUS-Water-Pitcher-Filter/dp/B07SDP25HD',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$30',
  },
  'waterdrop-chubby-pitcher': {
    brand: 'Waterdrop',
    url: 'https://www.waterdropfilter.com/products/chubby-pitcher-water-filter-system',
    status: 'pending',
    network: 'pending',
    commissionRate: '8-15%',
    priceDisplay: '$45',
  },

  // Whole house / RO / Under-sink
  'aquasana-rhino-whole-house': {
    brand: 'Aquasana',
    url: 'https://www.aquasana.com/whole-house-water-filters',
    status: 'pending',
    network: 'shareasale',
    commissionRate: 'up to 20%',
    priceDisplay: '$1,099',
  },
  'aquasana-claryum-under-sink': {
    brand: 'Aquasana',
    url: 'https://www.aquasana.com/under-counter-water-filter',
    status: 'pending',
    network: 'shareasale',
    commissionRate: 'up to 20%',
    priceDisplay: '$199',
  },
  'aquasana-optimh2o-ro': {
    brand: 'Aquasana',
    url: 'https://www.aquasana.com/reverse-osmosis-water-filter',
    status: 'pending',
    network: 'shareasale',
    commissionRate: 'up to 20%',
    priceDisplay: '$329',
  },
  'springwell-cf-whole-house': {
    brand: 'SpringWell',
    url: 'https://www.springwellwater.com/cf-whole-house-water-filter-system/',
    status: 'pending',
    network: 'pending',
    commissionRate: '10-15%',
    priceDisplay: '$1,143',
  },
  'springwell-well-water-filter': {
    brand: 'SpringWell',
    url: 'https://www.springwellwater.com/well-water-filter-system/',
    status: 'pending',
    network: 'pending',
    commissionRate: '10-15%',
    priceDisplay: '$1,950',
  },
  'big-berkey': {
    brand: 'Berkey',
    url: 'https://theberkey.com/products/big-berkey',
    status: 'pending',
    network: 'pending',
    commissionRate: '15%',
    priceDisplay: '$367',
  },
  'travel-berkey': {
    brand: 'Berkey',
    url: 'https://theberkey.com/products/travel-berkey',
    status: 'pending',
    network: 'pending',
    commissionRate: '15%',
    priceDisplay: '$291',
  },
  'royal-berkey': {
    brand: 'Berkey',
    url: 'https://theberkey.com/products/royal-berkey',
    status: 'pending',
    network: 'pending',
    commissionRate: '15%',
    priceDisplay: '$402',
  },
  'proone-big-plus': {
    brand: 'ProOne',
    url: 'https://www.propurusa.com/collections/gravity-water-filters',
    status: 'pending',
    network: 'pending',
    commissionRate: '10%',
    priceDisplay: '$330',
  },
  'waterdrop-g3p800-ro': {
    brand: 'Waterdrop',
    url: 'https://www.waterdropfilter.com/products/g3p800-tankless-reverse-osmosis-system',
    status: 'pending',
    network: 'pending',
    commissionRate: '8-15%',
    priceDisplay: '$649',
  },
  'waterdrop-d6-ro': {
    brand: 'Waterdrop',
    url: 'https://www.waterdropfilter.com/products/d6-reverse-osmosis-system',
    status: 'pending',
    network: 'pending',
    commissionRate: '8-15%',
    priceDisplay: '$399',
  },
  'apec-essence-ro-90': {
    brand: 'APEC',
    url: 'https://www.amazon.com/APEC-Top-Tier-Supreme-Drinking-RO-90/dp/B00I0ZGOZM',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$240',
  },
  'ispring-rcc7ak-ro': {
    brand: 'iSpring',
    url: 'https://www.amazon.com/iSpring-RCC7AK-Alkaline-Reverse-Osmosis/dp/B00DM3LPZA',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$260',
  },

  // Water softener
  'springwell-futuresoft-salt-free': {
    brand: 'SpringWell',
    url: 'https://www.springwellwater.com/futuresoft-salt-free-water-softener/',
    status: 'pending',
    network: 'pending',
    commissionRate: '10-15%',
    priceDisplay: '$1,438',
  },
  'springwell-ss-salt-based': {
    brand: 'SpringWell',
    url: 'https://www.springwellwater.com/ss-salt-based-water-softener/',
    status: 'pending',
    network: 'pending',
    commissionRate: '10-15%',
    priceDisplay: '$1,477',
  },
  'fleck-5600sxt': {
    brand: 'Fleck',
    url: 'https://www.amazon.com/Fleck-5600SXT-48-000-Softener-Optional/dp/B0125ZQ74Y',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$700',
  },
  'aquasana-rhino-eq-300sb': {
    brand: 'Aquasana',
    url: 'https://www.aquasana.com/whole-house-water-filters/eq-1000-rhino-with-salt-free-water-conditioner',
    status: 'pending',
    network: 'shareasale',
    commissionRate: 'up to 20%',
    priceDisplay: '$2,599',
  },
  'aquasure-harmony': {
    brand: 'AquaSure',
    url: 'https://www.amazon.com/Aquasure-Harmony-Whole-Softener-Capacity/dp/B0728LCWCX',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$650',
  },

  // Shower filter
  'aquasana-shower-filter': {
    brand: 'Aquasana',
    url: 'https://www.aquasana.com/shower-filters',
    status: 'pending',
    network: 'shareasale',
    commissionRate: 'up to 20%',
    priceDisplay: '$80',
  },
  'jolie-shower-filter': {
    brand: 'Jolie',
    url: 'https://jolieskinco.com/products/jolie-shower-head',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$165',
  },
  'canopy-shower-filter': {
    brand: 'Canopy',
    url: 'https://getcanopy.co/products/filtered-shower-head',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$150',
  },

  // Portable / survival
  'lifestraw-home-pitcher': {
    brand: 'LifeStraw',
    url: 'https://lifestraw.com/products/lifestraw-home-pitcher',
    status: 'pending',
    network: 'direct',
    commissionRate: '5-15%',
    priceDisplay: '$60',
  },
  'lifestraw-personal': {
    brand: 'LifeStraw',
    url: 'https://lifestraw.com/products/lifestraw-personal-water-filter',
    status: 'pending',
    network: 'direct',
    commissionRate: '5-15%',
    priceDisplay: '$18',
  },
  'sawyer-mini': {
    brand: 'Sawyer',
    url: 'https://www.amazon.com/Sawyer-Products-SP128-Filtration-System/dp/B00FA2RLX2',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$25',
  },
  'sawyer-squeeze': {
    brand: 'Sawyer',
    url: 'https://www.amazon.com/Sawyer-Products-Squeeze-Water-Filtration/dp/B00B1OSU4W',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$45',
  },
  'grayl-geopress': {
    brand: 'GRAYL',
    url: 'https://grayl.com/products/grayl-geopress-purifier',
    status: 'pending',
    network: 'pending',
    commissionRate: '8-15%',
    priceDisplay: '$95',
  },

  // ============ AIR PURIFIERS (Batch 11 — added 2026-05-01) ============
  'levoit-core-600s': {
    brand: 'Levoit',
    url: 'https://www.amazon.com/LEVOIT-Purifiers-CADR-Cleaner-Particles/dp/B09W2L37HT',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$280',
  },
  'levoit-core-400s': {
    brand: 'Levoit',
    url: 'https://www.amazon.com/LEVOIT-Purifiers-Quietest-Bedrooms-Filtration/dp/B08DLV4TC8',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$220',
  },
  'levoit-core-300s': {
    brand: 'Levoit',
    url: 'https://www.amazon.com/LEVOIT-Purifier-Bedrooms-Smoke-Cleaners/dp/B099RD9N3J',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$120',
  },
  'levoit-vital-200s': {
    brand: 'Levoit',
    url: 'https://www.amazon.com/LEVOIT-Purifier-Allergies-Bedrooms-Pollutants/dp/B09ZKNDMKW',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$200',
  },
  'coway-airmega-250': {
    brand: 'Coway',
    url: 'https://cowaymega.com/products/coway-airmega-250',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$469',
  },
  'coway-airmega-400': {
    brand: 'Coway',
    url: 'https://cowaymega.com/products/airmega-400-true-hepa-air-purifier',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$549',
  },
  'coway-airmega-200m': {
    brand: 'Coway',
    url: 'https://cowaymega.com/products/airmega-200m-true-hepa-air-purifier',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$229',
  },
  'coway-airmega-150': {
    brand: 'Coway',
    url: 'https://cowaymega.com/products/airmega-150-true-hepa-air-purifier',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$199',
  },
  'iqair-healthpro-plus': {
    brand: 'IQAir',
    url: 'https://www.iqair.com/us/air-purifiers/healthpro-series',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$1,099',
  },
  'molekule-air-pro': {
    brand: 'Molekule',
    url: 'https://molekule.com/products/molekule-air-pro',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$1,199',
  },
  'austin-air-healthmate': {
    brand: 'Austin Air',
    url: 'https://austinair.com/products/healthmate',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$715',
  },
  'austin-air-healthmate-plus': {
    brand: 'Austin Air',
    url: 'https://austinair.com/products/healthmate-plus',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$895',
  },
  'honeywell-hpa300': {
    brand: 'Honeywell',
    url: 'https://www.amazon.com/Honeywell-HPA300-HEPA-Air-Purifier/dp/B00BWYO53G',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$330',
  },
  'blueair-blue-211': {
    brand: 'Blueair',
    url: 'https://www.blueair.com/us/air-purifiers/blue-pure-211-plus.html',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$300',
  },
  'alen-breathesmart-75i': {
    brand: 'Alen',
    url: 'https://alen.com/products/breathesmart-75i-air-purifier',
    status: 'pending',
    network: 'pending',
    commissionRate: '8-15%',
    priceDisplay: '$769',
  },
  'rabbit-air-minusa2': {
    brand: 'Rabbit Air',
    url: 'https://www.rabbitair.com/products/minusa2-spa-780a-ultra-quiet-hepa-air-purifier',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$700',
  },
  'winix-5500-2': {
    brand: 'Winix',
    url: 'https://www.amazon.com/Winix-5500-2-Air-Cleaner-PlasmaWave/dp/B01D8DAYII',
    status: 'pending',
    network: 'amazon',
    commissionRate: '4%',
    priceDisplay: '$190',
  },
  'dyson-tp07': {
    brand: 'Dyson',
    url: 'https://www.dyson.com/air-treatment/purifiers/purifier-cool-tp07',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-8%',
    priceDisplay: '$549',
  },
  'mila-air-purifier': {
    brand: 'Mila',
    url: 'https://milacares.com/products/mila',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$369',
  },
  'medify-ma-50': {
    brand: 'Medify Air',
    url: 'https://www.medifyair.com/products/ma-50-air-purifier',
    status: 'pending',
    network: 'pending',
    commissionRate: '8-12%',
    priceDisplay: '$249',
  },

  // ============ ELECTRIC COMPOSTERS (Batch 11 — added 2026-05-01) ============
  'lomi-bloom': {
    brand: 'Lomi (Pela)',
    url: 'https://lomi.com/products/lomi',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$499',
  },
  'mill-kitchen-bin': {
    brand: 'Mill',
    url: 'https://www.mill.com/',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$33/mo subscription',
  },
  'vitamix-foodcycler-eco-5': {
    brand: 'Vitamix',
    url: 'https://www.vitamix.com/us/en_us/shop/foodcycler-eco-5',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$400',
  },
  'reencle-prime': {
    brand: 'Reencle',
    url: 'https://reencle.com/products/reencle-home',
    status: 'pending',
    network: 'pending',
    commissionRate: '5-10%',
    priceDisplay: '$499',
  },

  // ============ GLP-1 TELEHEALTH PROVIDERS (Site 1: glp1comparehub.com — added 2026-05-01) ============
  // Lead-gen niche, $300-600 CPA per qualified consultation. Status pending until
  // each program approves the site (apply after MVP build is live).
  // Updated 2026-05-01 with Gronk-verified May 2026 data. Original business-plan
  // CPA estimates ($300-600/lead) were aspirational; verified rates run ~$50-100/lead
  // for top-tier programs. Adjust revenue forecasts accordingly.
  'glp1-skinnyrx': {
    brand: 'SkinnyRx',
    url: 'https://www.skinnyrx.com/',
    status: 'pending',
    network: 'direct',
    commissionRate: '~$50-100 CPA (Gronk-verified May 2026)',
    priceDisplay: '$199-$399/mo',
  },
  'glp1-eden-health': {
    brand: 'Eden Health',
    url: 'https://www.tryeden.com/',
    status: 'pending',
    network: 'impact',
    commissionRate: 'TBD via Impact.com',
    priceDisplay: '$149 intro / $229-$249 ongoing',
  },
  'glp1-medvi': {
    brand: 'MEDVi',
    url: 'https://www.medvi.com/',
    status: 'pending',
    network: 'shareasale',
    commissionRate: 'TBD via ShareASale',
    priceDisplay: '$179-$299/mo',
  },
  'glp1-ro': {
    brand: 'Ro',
    url: 'https://ro.co/weight-loss/',
    status: 'pending',
    network: 'direct',
    commissionRate: 'TBD',
    priceDisplay: '$149/mo membership + meds',
  },
  'glp1-calibrate': {
    brand: 'Calibrate',
    url: 'https://www.joincalibrate.com/',
    status: 'pending',
    network: 'direct',
    commissionRate: 'TBD',
    priceDisplay: '$199/mo (3-mo min)',
  },
  'glp1-found': {
    brand: 'Found',
    url: 'https://www.joinfound.com/',
    status: 'pending',
    network: 'direct',
    commissionRate: 'TBD',
    priceDisplay: '~$129/mo membership + meds',
  },

  // --- 7 NEW providers added 2026-05-02 (per user's priority 10 list) ---
  // GobyMeds + OrderlyMeds confirmed PUBLIC affiliate programs — apply first.
  // Sprout Health URL still pending — placeholder entry, do not link publicly.

  'glp1-trimrx': {
    brand: 'TrimRx',
    url: 'https://www.trimrx.com/',
    status: 'pending',
    network: 'direct',
    commissionRate: 'TBD — affiliate program not publicly listed',
    priceDisplay: 'From $179/mo',
  },
  'glp1-directmeds': {
    brand: 'DirectMeds',
    url: 'https://www.directmeds.com/',
    status: 'pending',
    network: 'direct',
    commissionRate: 'TBD — affiliate program not publicly listed',
    priceDisplay: '$179.10–$399/mo (sublingual + injectable)',
  },
  'glp1-ivim-health': {
    brand: 'Ivim Health',
    url: 'https://www.ivimhealth.com/',
    status: 'pending',
    network: 'direct',
    commissionRate: 'TBD — affiliate program not publicly listed',
    priceDisplay: 'From $75/mo + $74.99 program fee',
  },
  'glp1-sprout-health': {
    brand: 'Sprout Health',
    url: 'https://www.sprouthealth.com/', // PLACEHOLDER — URL not yet confirmed by operator
    status: 'pending',
    network: 'direct',
    commissionRate: 'PENDING — provider URL not yet confirmed',
    priceDisplay: 'PENDING',
  },
  'glp1-elevate-health': {
    brand: 'Elevate Health',
    url: 'https://www.elevatehealthrx.com/',
    status: 'pending',
    network: 'direct',
    commissionRate: 'TBD — affiliate program not publicly listed',
    priceDisplay: '$897 / 3-mo starter (Tirzepatide)',
  },
  'glp1-orderlymeds': {
    brand: 'OrderlyMeds',
    url: 'https://www.orderlymeds.com/affiliate-program/get-started/',
    status: 'pending',
    network: 'direct',
    commissionRate: 'TBD — apply via /affiliate-program/get-started/',
    priceDisplay: '$149–$299 compounded / $1,498–$1,839 branded',
  },
  'glp1-gobymeds': {
    brand: 'GobyMeds',
    url: 'https://www.gobymeds.com/partnerships/affiliates',
    status: 'pending',
    network: 'direct',
    commissionRate: 'TBD — TWO public programs: /partnerships/affiliates + /partnerships/medical-affiliates',
    priceDisplay: 'From $99/mo (compounded sema)',
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
 *
 * GLP-1 product keys (prefix `glp1-`) use the matchglp1-style UTM pattern:
 *   ?utm_source=glp1comparehub&utm_medium=referral&utm_campaign=providers&utm_content=[slug]
 *
 * All other product keys use the legacy `?ref=` pattern (GreenReviewsHub).
 */
export function buildAffiliateUrl(key: string, source?: string): string {
  const link = getAffiliateLink(key);
  const url = new URL(link.url);

  // GLP-1 niche → matchglp1-style UTM pattern
  if (key.startsWith('glp1-')) {
    const slug = key.replace(/^glp1-/, '');
    url.searchParams.set('utm_source', 'glp1comparehub');
    url.searchParams.set('utm_medium', 'referral');
    url.searchParams.set('utm_campaign', source ?? 'providers');
    url.searchParams.set('utm_content', slug);
    return url.toString();
  }

  // Other niches (GRH/SHG/AHB) → legacy ref pattern
  if (source) {
    url.searchParams.set('ref', `greenreviewshub-${source}`);
  }
  return url.toString();
}

/**
 * GLP1-specific helper. Use this on glp1comparehub.com pages for clarity.
 *   buildGlp1AffiliateUrl('skinnyrx', 'tirzepatide-vs-semaglutide')
 *   → https://skinnyrx.com/?utm_source=glp1comparehub&utm_medium=referral
 *      &utm_campaign=tirzepatide-vs-semaglutide&utm_content=skinnyrx
 *
 * @param providerSlug — slug from glp1Providers (e.g., 'skinnyrx', 'eden-health')
 * @param sourcePage — slug of the page the click originated from (used as utm_campaign)
 */
export function buildGlp1AffiliateUrl(providerSlug: string, sourcePage: string = 'providers'): string {
  return buildAffiliateUrl(`glp1-${providerSlug}`, sourcePage);
}
