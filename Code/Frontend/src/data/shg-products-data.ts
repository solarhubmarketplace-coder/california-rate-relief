// ============================================================================
// SecureHomeGear (securehomegear.com) — Product Data Layer
// ============================================================================
// Single source of truth for every product featured on the SHG site.
// Add a product here → it appears on its review page, comparison tables,
// alternatives pages, and the /cameras hub.
//
// AFFILIATE LINK STRATEGY:
//   amazonUrl  — always populated (baseline 1-3% commission, Amazon Associates)
//   awinUrl    — populated when approved for AWIN advertiser (e.g. Reolink)
//   directUrl  — populated when approved for direct program (Canary, Eufy, etc.)
//
// Display priority (highest commission first):
//   1. directUrl  (typically 10-30% commission)
//   2. awinUrl    (typically 5-15%)
//   3. amazonUrl  (fallback, 1-3%)
//
// A linked product component reads this data and picks the highest-priority
// available URL at render time.
// ============================================================================

export type SHGCategory =
  | 'video-doorbell'
  | 'outdoor-camera'
  | 'indoor-camera'
  | 'poe-camera'
  | 'nvr-system'
  | 'smart-lock'
  | 'alarm-system'
  | 'hub-speaker';

export type SHGBrand =
  | 'canary'
  | 'eufy'
  | 'reolink'
  | 'lorex'
  | 'arlo'
  | 'tp-link-tapo'
  | 'wyze'
  | 'ring' // Amazon-only, used for comparison/alternatives pages
  | 'blink' // Amazon-only
  | 'google-nest'; // Amazon-only

export type AffiliateNetwork =
  | 'amazon'
  | 'awin'
  | 'direct'
  | 'cj-affiliate'
  | 'flexoffers'
  | 'impact'
  | 'shareasale';

export interface SHGProduct {
  /** URL slug under /cameras/{slug} */
  slug: string;
  /** Display name */
  name: string;
  /** Brand */
  brand: SHGBrand;
  /** Category */
  category: SHGCategory;
  /** One-line positioning */
  tagline: string;
  /** Current MSRP in USD (verify against brand website before publishing) */
  msrp: number;
  /** Typical street price in USD (Amazon / brand direct) */
  streetPrice: number;
  /** Requires subscription for core features? */
  requiresSubscription: boolean;
  /** Monthly subscription cost if applicable */
  subscriptionCost?: number;
  /** Local storage available (microSD, NVR, etc.)? */
  hasLocalStorage: boolean;
  /** 2K, 4K, 1080p */
  resolution: string;
  /** Wired, battery, plug-in, solar, POE */
  powerSource: 'battery' | 'wired' | 'plug-in' | 'solar' | 'poe';
  /** Indoor, outdoor, both */
  placement: 'indoor' | 'outdoor' | 'both';

  // Affiliate link fields — at least one must be populated
  amazonUrl?: string;
  awinUrl?: string;
  awinAdvertiserId?: string;
  directUrl?: string;
  directNetwork?: AffiliateNetwork;
  directCommissionPct?: number;

  /** Product image path (from /public/img/shg/) */
  image?: string;
  /** Brief 2-3 sentence overview */
  overview: string;
  /** Key specs for comparison tables */
  keySpecs: {
    fieldOfView?: string;
    nightVision?: string;
    twoWayAudio?: boolean;
    weatherproofing?: string;
    videoStorage?: string;
    integrations?: string[];
  };
  /** Strengths (for review pages + comparison tables) */
  strengths: string[];
  /** Watch-outs (honest downsides) */
  watchOuts: string[];
  /** Last verified against manufacturer website */
  lastVerified: string;
}

// ============================================================================
// PRODUCT CATALOG
// ============================================================================
// Products are added here as Gronk-verified research comes back.
// Phase 1 targets: Canary Pro, Eufy Video Doorbell E340, Reolink Argus 3,
//                  Arlo Pro 5S, Lorex 4K NVR, TP-Link Tapo C200, Wyze Cam v4
// ============================================================================

export const shgProducts: SHGProduct[] = [
  // Awaiting Gronk research pass before population — see
  // Affiliate Marketing SEO/securehomegear.com/Execution_Plan_v1.md
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getProductBySlug(slug: string): SHGProduct | undefined {
  return shgProducts.find((p) => p.slug === slug);
}

export function getProductsByBrand(brand: SHGBrand): SHGProduct[] {
  return shgProducts.filter((p) => p.brand === brand);
}

export function getProductsByCategory(cat: SHGCategory): SHGProduct[] {
  return shgProducts.filter((p) => p.category === cat);
}

export function getNoSubscriptionProducts(): SHGProduct[] {
  return shgProducts.filter((p) => !p.requiresSubscription || p.hasLocalStorage);
}

/**
 * Returns the best available affiliate URL for a product,
 * preferring direct > awin > amazon (commission-rate ordering).
 */
export function getBestAffiliateUrl(product: SHGProduct): {
  url: string;
  network: AffiliateNetwork;
  commissionPct: number;
} | null {
  if (product.directUrl && product.directNetwork) {
    return {
      url: product.directUrl,
      network: product.directNetwork,
      commissionPct: product.directCommissionPct || 10,
    };
  }
  if (product.awinUrl) {
    return {
      url: product.awinUrl,
      network: 'awin',
      commissionPct: 8, // AWIN average placeholder, varies by advertiser
    };
  }
  if (product.amazonUrl) {
    return {
      url: product.amazonUrl,
      network: 'amazon',
      commissionPct: 3, // Amazon Associates baseline for electronics
    };
  }
  return null;
}

// ============================================================================
// BRAND METADATA — used on brand hub and alternatives pages
// ============================================================================

export interface SHGBrandMeta {
  slug: SHGBrand;
  displayName: string;
  corporateOwner?: string;
  affiliateProgram: {
    network: AffiliateNetwork | 'amazon-only' | 'rakuten';
    commissionRange?: string; // e.g. "6-20% tiered"
    maxCommissionPct?: number;
    cookieDays?: number;
    signupUrl?: string;
    notes: string;
  };
  isAmazonOnly: boolean;
  usageStrategy: 'primary' | 'secondary' | 'funnel' | 'budget-pick';
  /** Typical AOV range in USD */
  aovRange?: string;
  /** Product categories covered */
  productCategories?: string[];
}

export const shgBrands: SHGBrandMeta[] = [
  {
    slug: 'canary',
    displayName: 'Canary',
    affiliateProgram: {
      network: 'rakuten',
      commissionRange: 'Up to 30%',
      maxCommissionPct: 30,
      cookieDays: 30,
      signupUrl: 'https://canary.is/affiliates',
      notes:
        'Rakuten Advertising program. Highest commission in the niche. Performance bonuses available. New publishers accepted. Strong brand for AI-security positioning.',
    },
    isAmazonOnly: false,
    usageStrategy: 'primary',
    aovRange: '$250-$500 for premium kits',
    productCategories: [
      'AI-powered indoor cameras',
      'AI-powered outdoor cameras',
      'Smart home security bundles',
    ],
  },
  {
    slug: 'eufy',
    displayName: 'Eufy',
    corporateOwner: 'Anker Innovations',
    affiliateProgram: {
      network: 'direct',
      commissionRange: '7-15% (starts 7%, scales with performance)',
      maxCommissionPct: 15,
      cookieDays: 30,
      signupUrl: 'https://www.eufy.com/affiliate',
      notes:
        'Direct Eufy affiliate program + AWIN in some regions. No-subscription / local-storage positioning is the core differentiator against Ring/Blink/Nest. 30-day cookie beats industry average.',
    },
    isAmazonOnly: false,
    usageStrategy: 'primary',
    aovRange: '$200-$450',
    productCategories: [
      'eufyCam wireless systems',
      'Video doorbells',
      'Indoor cameras',
      'Outdoor cameras',
      '4K floodlight cameras',
      'SoloCam',
    ],
  },
  {
    slug: 'reolink',
    displayName: 'Reolink',
    affiliateProgram: {
      network: 'awin',
      commissionRange: '6-20% tiered (4-tier volume-based)',
      maxCommissionPct: 20,
      cookieDays: 30,
      signupUrl: 'https://reolink.com/affiliate/',
      notes:
        'AWIN primary (merchant ID 16932) + Impact. Base 5-6% scales to 15-20% for strong performers. Fast AWIN approval. Best for POE/wired/Argus-series reviews.',
    },
    isAmazonOnly: false,
    usageStrategy: 'primary',
    aovRange: '~$220 (€201)',
    productCategories: [
      'PoE / IP cameras',
      'Battery-powered cameras',
      'Solar-powered cameras',
      'Video doorbells',
      'NVR systems',
      'Floodlight cameras',
    ],
  },
  {
    slug: 'lorex',
    displayName: 'Lorex',
    affiliateProgram: {
      network: 'direct',
      commissionRange: '6-10%',
      maxCommissionPct: 10,
      cookieDays: 30,
      notes:
        'Brand-level Gronk research pending. Strong for commercial/NVR pages. Apply once secondary research is complete.',
    },
    isAmazonOnly: false,
    usageStrategy: 'secondary',
    productCategories: ['Commercial NVR systems', 'Wired camera kits', '4K cameras'],
  },
  {
    slug: 'arlo',
    displayName: 'Arlo',
    corporateOwner: 'Arlo Technologies (NYSE: ARLO)',
    affiliateProgram: {
      network: 'cj-affiliate',
      commissionRange: 'Up to 7%',
      maxCommissionPct: 7,
      cookieDays: 30,
      notes:
        'CJ Affiliate program. Premium brand positioning. Strong AOV on bundles ($300-$600+). Requires CJ publisher account. Continuous product launches and seasonal promos.',
    },
    isAmazonOnly: false,
    usageStrategy: 'secondary',
    aovRange: '$300-$600+ for bundles',
    productCategories: [
      'Premium wireless security cameras',
      'Video doorbells',
      'Multi-cam kits',
      'Floodlight cameras',
      'Smart home security systems',
    ],
  },
  {
    slug: 'tp-link-tapo',
    displayName: 'TP-Link Tapo',
    corporateOwner: 'TP-Link',
    affiliateProgram: {
      network: 'impact',
      maxCommissionPct: 10,
      notes: 'Impact.com — budget comparison pick.',
    },
    isAmazonOnly: false,
    usageStrategy: 'budget-pick',
  },
  {
    slug: 'wyze',
    displayName: 'Wyze',
    affiliateProgram: {
      network: 'direct',
      maxCommissionPct: 10,
      notes: 'Wyze Insiders program. Budget pick.',
    },
    isAmazonOnly: false,
    usageStrategy: 'budget-pick',
  },
  {
    slug: 'ring',
    displayName: 'Ring',
    corporateOwner: 'Amazon',
    affiliateProgram: {
      network: 'amazon-only',
      notes: 'Amazon Associates only (1-3%). Use comparison and alternatives pages to funnel to higher-commission brands.',
    },
    isAmazonOnly: true,
    usageStrategy: 'funnel',
  },
  {
    slug: 'blink',
    displayName: 'Blink',
    corporateOwner: 'Amazon',
    affiliateProgram: {
      network: 'amazon-only',
      notes: 'Amazon Associates only. Used in alternatives funnel.',
    },
    isAmazonOnly: true,
    usageStrategy: 'funnel',
  },
  {
    slug: 'google-nest',
    displayName: 'Google Nest',
    corporateOwner: 'Alphabet / Google',
    affiliateProgram: {
      network: 'amazon-only',
      notes: 'No public affiliate program. Amazon only (1-3%). Used in alternatives funnel.',
    },
    isAmazonOnly: true,
    usageStrategy: 'funnel',
  },
];

export function getBrandMeta(brand: SHGBrand): SHGBrandMeta | undefined {
  return shgBrands.find((b) => b.slug === brand);
}
