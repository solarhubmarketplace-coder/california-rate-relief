import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { getAllCitySlugs } from '@/data/cities-data';

// =============================================================================
// HOST-AWARE SITEMAP
// =============================================================================
// All four domains run from this single Next.js codebase. Without host-aware
// sitemap routing, every domain would serve the same XML pointing at CRR URLs
// — which prevents Google from discovering GRH/SHG/AHB pages programmatically.
// This file detects the request host and emits only the URLs that belong to
// that domain.
// =============================================================================

type DomainKey = 'ratereliefca' | 'greenreviewshub' | 'securehomegear' | 'athomebiohacking';

const DOMAIN_BASE: Record<DomainKey, string> = {
  ratereliefca: 'https://ratereliefca.com',
  greenreviewshub: 'https://greenreviewshub.com',
  securehomegear: 'https://securehomegear.com',
  athomebiohacking: 'https://athomebiohacking.com',
};

function detectDomainKey(host: string): DomainKey {
  const h = host.toLowerCase();
  if (h.includes('greenreviewshub')) return 'greenreviewshub';
  if (h.includes('securehomegear')) return 'securehomegear';
  if (h.includes('athomebiohacking')) return 'athomebiohacking';
  return 'ratereliefca';
}

// =============================================================================
// CRR (ratereliefca.com) URLs
// =============================================================================
function crrSitemap(base: string): MetadataRoute.Sitemap {
  const today = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: today, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/blog`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/best-solar-companies-california`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/solar-panels-california`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/panel-reviews`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/commercial-solar`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: today, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: today, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy-policy`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const blogSlugs = [
    'sce-rate-increase-2026', 'pge-rate-increase-2026', 'sdge-rate-increase-2026',
    'california-24-dollar-fixed-charge-explained', 'solar-tax-credit-expired-2026-options',
    'nem-3-california-still-worth-it', 'pge-vs-sce-vs-sdge-rates-compared',
    'prepaid-ppa-california-2026', 'ppa-loan-vs-solar-lease-vs-cash-california',
    'net-billing-vs-net-metering-california', 'nem-3-california-timeline',
    'hoa-solar-rights-california', 'low-income-solar-california',
    'free-roof-replacement-with-solar-panels-california', 'nem-2-vs-nem-3-california',
    'rent-solar-panels-for-your-home-california', 'are-solar-panels-worth-it-california',
    'switch-to-solar-california', 'solar-system-quotes-california',
    'tesla-powerwall-installers-california', 'solar-panels-for-ev-charging-california',
    'what-is-nem-3-california', 'free-solar-for-seniors-california',
    'do-solar-panels-work-at-night-california', 'do-solar-panels-work-on-cloudy-days-california',
    'why-is-my-california-electric-bill-so-high', 'why-is-my-pge-bill-so-high',
    'why-is-my-sce-bill-so-high', 'why-is-my-sdge-bill-so-high',
    'why-is-my-ladwp-bill-so-high', 'how-big-of-a-solar-system-do-i-need-california',
    'can-solar-panels-power-a-whole-house-california',
    'do-solar-panels-work-during-power-outage-california',
    'is-my-roof-good-for-solar-california', 'what-happens-to-solar-panels-after-25-years',
    'solar-carport-california-guide', 'solar-pool-heating-california',
    'solar-panel-cleaning-california', 'solar-battery-backup-california',
    'solar-rebates-by-california-utility', 'what-is-demand-charge-california',
    'how-does-net-metering-work', 'string-inverter-vs-microinverter',
    'what-is-a-solar-inverter', 'what-happens-to-solar-lease-when-i-sell-california',
    'solar-during-psps-california', 'tech-clean-california-heat-pump-rebate',
    'ab-942-california-solar', 'solar-panels-tile-roof-california',
    'adu-solar-requirements-california',
  ];
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Solar installer reviews (21) + comparison pages (4)
  const installerSlugs = [
    'freedom-forever-review', 'sunrun-review', 'tesla-solar-review',
    'sunpower-review', 'momentum-solar-review', 'semper-solaris-review',
    'solar-optimum-review', 'sunnova-review', 'trinity-solar-review',
    'palmetto-solar-review', 'sunergy-solar-review', 'sullivan-solar-power-review',
    'sunlux-solar-review', 'powur-solar-review', 'elevation-solar-review',
    'ameco-solar-review', 'baker-electric-solar-review', 'option-one-solar-review',
    'new-day-solar-review', 'la-solar-group-review', 'empire-solar-review',
    'sunnova-vs-sunrun', 'sunrun-vs-tesla-solar', 'sunrun-vs-sunpower',
    'enphase-vs-solaredge',
  ];
  const installerPages: MetadataRoute.Sitemap = installerSlugs.map((slug) => ({
    url: `${base}/solar-installers/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Panel brand reviews
  const panelSlugs = [
    'trina-solar-panels-review', 'silfab-solar-panels-review',
    'rec-solar-panels-review', 'canadian-solar-panels-review',
  ];
  const panelPages: MetadataRoute.Sitemap = panelSlugs.map((slug) => ({
    url: `${base}/panel-reviews/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Commercial solar (7 topics)
  const commercialSlugs = [
    'companies-california', 'financing-options', 'cost-per-watt-california',
    'title-24-requirements', 'cpace-financing-california',
    'sgip-battery-storage', 'vnem-aggregation-multi-meter',
  ];
  const commercialPages: MetadataRoute.Sitemap = commercialSlugs.map((slug) => ({
    url: `${base}/commercial-solar/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Regional hubs
  const regionalSlugs = [
    'orange-county', 'bay-area', 'inland-empire',
    'san-diego-county', 'central-valley',
  ];
  const regionalPages: MetadataRoute.Sitemap = regionalSlugs.map((slug) => ({
    url: `${base}/solar-savings/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // City pages (76+ from cities-data.ts) — both /solar-savings and /solar-companies
  const citySavingsPages: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${base}/solar-savings/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));
  const cityCompaniesPages: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${base}/solar-companies/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    ...staticPages, ...blogPages, ...installerPages, ...panelPages,
    ...commercialPages, ...regionalPages, ...citySavingsPages, ...cityCompaniesPages,
  ];
}

// =============================================================================
// GRH (greenreviewshub.com) URLs
// =============================================================================
function grhSitemap(base: string): MetadataRoute.Sitemap {
  const today = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: today, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/reviews`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
  ];

  const reviewSlugs = [
    'best-portable-power-stations', 'ecoflow-delta-pro-3-review', 'anker-solix-f3800-review',
    'bluetti-ac500-review', 'jackery-explorer-2000-plus-review', 'bluetti-ac200l-review',
    'best-electric-bikes', 'best-mini-split-ac', 'best-electric-lawn-mower',
    'best-smart-thermostat', 'best-whole-house-generator', 'rad-power-radrover-6-plus-review',
    'mrcool-diy-4th-gen-review', 'ego-select-cut-mower-review', 'generac-guardian-24kw-review',
    'aventon-aventure-3-review', 'ecoflow-delta-pro-ultra-review', 'ego-snow-blower-review',
    'ryobi-40v-lawn-mower-review', 'mitsubishi-mini-split-review', 'best-tankless-water-heater',
    'milwaukee-chainsaw-review', 'best-electric-dirt-bike-adults', 'daikin-mini-split-review',
    'best-electric-leaf-blower', 'best-electric-chainsaw', 'best-electric-scooter-with-seat',
    'greenworks-80v-lawn-mower-review', 'best-induction-cooktop', 'best-electric-moped',
    'best-solar-pool-heater', 'best-electric-scooter', 'ecoflow-delta-2-review',
    'best-electric-dirt-bike-kids', 'best-solar-attic-fan', 'ryobi-snow-blower-review',
    'dewalt-lawn-mower-review', 'milwaukee-lawn-mower-review', 'pioneer-mini-split-review',
    'honeywell-smart-thermostat-review', 'trek-electric-bike-review',
    'best-electric-fireplace-tv-stand', 'heat-pump-vs-furnace', 'best-solar-charge-controller',
    'best-battery-pressure-washer', 'best-electric-skateboard', 'best-solar-generator',
    'best-robot-lawn-mower', 'lectric-xp-3-review', 'best-outdoor-solar-lights',
    'best-electric-snow-shovel', 'best-solar-panel-kit', 'best-electric-hedge-trimmer',
    'best-portable-air-conditioner', 'best-window-air-conditioner', 'best-ceiling-fan',
    'best-dehumidifier', 'jackery-solar-generator-1000-review', 'best-electric-weed-eater',
    'best-air-purifier', 'best-space-heater', 'best-electric-bike-for-seniors',
    'best-solar-security-camera', 'best-electric-riding-mower', 'best-portable-heater',
    'best-ev-charger', 'best-solar-water-heater', 'best-electric-pressure-washer',
    'best-heat-pump-water-heater', 'best-ebike-rack', 'best-electric-smoker',
    'nest-thermostat-review', 'ecobee-thermostat-review', 'smart-thermostat-installation',
    'tankless-water-heater-cost', 'tankless-water-heater-vs-tank',
    'tankless-water-heater-pros-and-cons', 'rinnai-tankless-water-heater-review',
    'rheem-tankless-water-heater-review', 'navien-tankless-water-heater-review',
    'noritz-tankless-water-heater-review', 'mrcool-mini-split', 'diy-mini-split',
    'gree-mini-split-review', 'senville-mini-split-review', 'ecoflow-delta-2-max-review',
    'ecoflow-river-3-review', 'ecoflow-river-3-plus-review', 'ecoflow-river-2-pro-review',
    'ecoflow-delta-3-plus-review', 'anker-solix-c1000-review', 'bluetti-eb3a-review',
    'bluetti-ac200max-review', 'jackery-explorer-1000-review', 'whole-house-battery-backup',
    'electric-dirt-bike', 'lectric-ebike', 'rad-power-bikes', 'aventon-ebike',
    'velotric-ebike', 'electric-motorcycle', 'fastest-electric-bike', 'kids-electric-bike',
    'cheap-electric-bike', 'fastest-electric-scooter', 'best-electric-scooter-for-adults',
    'gotrax-electric-scooter', 'ego-lawn-mower', 'ryobi-lawn-mower', 'greenworks-lawn-mower',
    'dewalt-chainsaw-review', 'ego-chainsaw-review', 'ryobi-chainsaw-review',
    'ego-leaf-blower-review', 'dewalt-leaf-blower-review', 'ryobi-leaf-blower-review',
    'milwaukee-leaf-blower-review', 'jackery-explorer-300-review',
  ];
  const reviewPages: MetadataRoute.Sitemap = reviewSlugs.map((slug) => ({
    url: `${base}/reviews/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...reviewPages];
}

// =============================================================================
// SHG (securehomegear.com) URLs
// =============================================================================
function shgSitemap(base: string): MetadataRoute.Sitemap {
  const today = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: today, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/cameras`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: today, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: today, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const cameraSlugs = [
    'arlo-base-station', 'arlo-camera', 'arlo-doorbell', 'arlo-floodlight-camera',
    'arlo-indoor-camera', 'arlo-subscription', 'battery-powered-security-camera',
    'best-no-subscription-security-camera-system',
    'best-outdoor-security-cameras-without-subscription',
    'best-wired-security-camera-system', 'blink-camera-system', 'blink-doorbell',
    'blink-subscription-plan', 'blink-sync-module', 'business-security-cameras',
    'canary', 'canary-camera', 'cellular-security-camera', 'commercial-security-cameras',
    'doorbell-camera', 'doorbell-transformer', 'eufy', 'eufy-doorbell',
    'eufy-homebase', 'eufy-s340', 'google-nest', 'lorex', 'nest-aware',
    'nest-doorbell', 'no-subscription-security-camera', 'poe-camera', 'reolink',
    'ring-protect-plan', 'ring-security-system', 'security-cameras', 'tp-link-tapo',
    'video-doorbell-without-subscription', 'wireless-outdoor-camera',
    'wireless-outdoor-security-cameras', 'wyze', 'wyze-doorbell',
  ];
  const cameraPages: MetadataRoute.Sitemap = cameraSlugs.map((slug) => ({
    url: `${base}/cameras/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const compareSlugs = [
    'arlo-vs-ring', 'canary-vs-ring', 'eufy-vs-arlo', 'eufy-vs-ring',
    'reolink-vs-eufy', 'ring-vs-blink', 'wyze-vs-ring',
  ];
  const comparePages: MetadataRoute.Sitemap = compareSlugs.map((slug) => ({
    url: `${base}/compare/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const altSlugs = ['arlo', 'blink', 'google-nest', 'ring', 'wyze'];
  const altPages: MetadataRoute.Sitemap = altSlugs.map((slug) => ({
    url: `${base}/alternatives/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...cameraPages, ...comparePages, ...altPages];
}

// =============================================================================
// AHB (athomebiohacking.com) URLs
// =============================================================================
function ahbSitemap(base: string): MetadataRoute.Sitemap {
  const today = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: today, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/cold-plunge`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/infrared-sauna`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/pemf`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/red-light-therapy`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/vibration-plate`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/learn/about`, lastModified: today, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/learn/medical-disclaimer`, lastModified: today, changeFrequency: 'yearly', priority: 0.4 },
  ];

  const ahbContentPages: MetadataRoute.Sitemap = [
    'cold-plunge/benefits', 'cold-plunge/benefits-of-ice-bath',
    'cold-plunge/best-cold-plunge', 'cold-plunge/diy-cold-plunge',
    'infrared-sauna/best-infrared-sauna', 'infrared-sauna/best-sauna-blanket',
    'infrared-sauna/infrared-sauna-benefits', 'infrared-sauna/infrared-vs-traditional',
    'pemf/best-pemf-mat',
    'red-light-therapy/best-red-light-therapy-device',
    'red-light-therapy/red-light-therapy-benefits',
    'vibration-plate/best-vibration-plate',
    'vibration-plate/vibration-plate-benefits',
  ].map((path) => ({
    url: `${base}/${path}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...ahbContentPages];
}

// =============================================================================
// MAIN ENTRY
// =============================================================================
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hdrs = await headers();
  const host = hdrs.get('host') || 'ratereliefca.com';
  const key = detectDomainKey(host);
  const base = DOMAIN_BASE[key];

  switch (key) {
    case 'greenreviewshub':
      return grhSitemap(base);
    case 'securehomegear':
      return shgSitemap(base);
    case 'athomebiohacking':
      return ahbSitemap(base);
    case 'ratereliefca':
    default:
      return crrSitemap(base);
  }
}
