import { MetadataRoute } from 'next';
import { getAllCitySlugs } from '@/data/cities-data';

const BASE_URL = 'https://ratereliefca.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Core public pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Blog posts
  const blogPosts: MetadataRoute.Sitemap = [
    'sce-rate-increase-2026',
    'california-24-dollar-fixed-charge-explained',
    'solar-tax-credit-expired-2026-options',
    'nem-3-california-still-worth-it',
    'pge-vs-sce-vs-sdge-rates-compared',
    'prepaid-ppa-california-2026',
    'how-long-do-solar-panels-last',
    'solar-panel-inspection-california',
    'solar-panel-removal-reinstall-cost',
    'solar-panel-maintenance-cost',
    'solar-panel-bird-proofing',
    'commercial-solar-financing-california',
    'what-size-solar-system-do-i-need',
    'how-to-lower-electric-bill-california',
    'is-solar-worth-it-california-2026',
    'solar-ppa-vs-lease-california',
    'free-solar-panels-california',
    'are-solar-panels-a-scam',
    'why-is-my-pge-bill-so-high',
    'sdge-time-of-use-rates-2026',
    'solar-ppa-explained-california',
  ].map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date('2026-04-16'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // City pages — auto-generated from cities-data.ts
  // Add a city to cities-data.ts and it appears here automatically
  const cityPages: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${BASE_URL}/solar-savings/${slug}`,
    lastModified: new Date('2026-04-16'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Regional hub pages
  const regionalHubs: MetadataRoute.Sitemap = [
    'orange-county',
    'bay-area',
    'inland-empire',
    'san-diego-county',
    'central-valley',
  ].map((slug) => ({
    url: `${BASE_URL}/solar-savings/${slug}`,
    lastModified: new Date('2026-04-16'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Review / affiliate pages
  const reviewPages: MetadataRoute.Sitemap = [
    'best-portable-power-stations',
    'ecoflow-delta-pro-3-review',
    'anker-solix-f3800-review',
    'bluetti-ac500-review',
    'jackery-explorer-2000-plus-review',
    'bluetti-ac200l-review',
    'best-electric-bikes',
    'best-mini-split-ac',
    'best-electric-lawn-mower',
    'best-smart-thermostat',
    'best-whole-house-generator',
    'rad-power-radrover-6-plus-review',
    'mrcool-diy-4th-gen-review',
    'ego-select-cut-mower-review',
    'generac-guardian-24kw-review',
    'aventon-aventure-3-review',
    'ecoflow-delta-pro-ultra-review',
    'ego-snow-blower-review',
    'ryobi-40v-lawn-mower-review',
    'mitsubishi-mini-split-review',
    'best-tankless-water-heater',
    'milwaukee-chainsaw-review',
    'best-electric-dirt-bike-adults',
    'daikin-mini-split-review',
    'best-electric-leaf-blower',
    'best-electric-chainsaw',
    'best-electric-scooter-with-seat',
    'greenworks-80v-lawn-mower-review',
    'best-induction-cooktop',
    'best-electric-moped',
    'best-solar-pool-heater',
    'best-electric-scooter',
    'ecoflow-delta-2-review',
    'best-electric-dirt-bike-kids',
    'best-solar-attic-fan',
    'ryobi-snow-blower-review',
    'dewalt-lawn-mower-review',
    'milwaukee-lawn-mower-review',
    'pioneer-mini-split-review',
    'honeywell-smart-thermostat-review',
    'trek-electric-bike-review',
    'best-electric-fireplace-tv-stand',
    'heat-pump-vs-furnace',
    'best-solar-charge-controller',
    'best-battery-pressure-washer',
    'best-electric-skateboard',
    'best-solar-generator',
  ].map((slug) => ({
    url: `${BASE_URL}/reviews/${slug}`,
    lastModified: new Date('2026-04-21'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Reviews index page
  const reviewIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  return [...staticPages, ...blogPosts, ...reviewIndex, ...reviewPages, ...cityPages, ...regionalHubs];
}
