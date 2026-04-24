import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

// =============================================================================
// HOST-AWARE ROBOTS.TXT
// =============================================================================
// Each domain references its own sitemap so Google Search Console can
// programmatically discover that domain's URLs. Without this, all four
// domains pointed crawlers at CRR's sitemap.
// =============================================================================

const DOMAIN_BASE: Record<string, string> = {
  ratereliefca: 'https://ratereliefca.com',
  greenreviewshub: 'https://greenreviewshub.com',
  securehomegear: 'https://securehomegear.com',
  athomebiohacking: 'https://athomebiohacking.com',
};

function detectDomainKey(host: string): string {
  const h = host.toLowerCase();
  if (h.includes('greenreviewshub')) return 'greenreviewshub';
  if (h.includes('securehomegear')) return 'securehomegear';
  if (h.includes('athomebiohacking')) return 'athomebiohacking';
  return 'ratereliefca';
}

export default async function robots(): Promise<MetadataRoute.Robots> {
  const hdrs = await headers();
  const host = hdrs.get('host') || 'ratereliefca.com';
  const base = DOMAIN_BASE[detectDomainKey(host)];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/login',
          '/api/',
          '/testing-guide',
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
