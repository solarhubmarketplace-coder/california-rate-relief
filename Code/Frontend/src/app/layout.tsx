import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Script from 'next/script';
import { Plus_Jakarta_Sans, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import GoogleAnalytics from '@/components/GoogleAnalytics';

// =============================================================================
// FONTS — self-hosted via next/font (2026-04-30, Batch 3.5)
// =============================================================================
// Replaces the two render-blocking Google Fonts @import statements that lived
// in globals.css. CSS variables are wired into tailwind.config.ts fontFamily.
// =============================================================================

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
});

// =============================================================================
// PER-DOMAIN ROOT METADATA
// =============================================================================
// All four domains run from this single Next.js codebase. Each domain needs
// its own root metadata (title, description, OG, robots, canonical base) so
// Google reads each as a distinct site, not as duplicates of CRR.
//
// Per-page metadata (set in individual page.tsx files) overrides this root
// default — but only for the title/description/canonical/OG fields. The
// metadataBase below scopes how relative canonicals resolve.
// =============================================================================

const DOMAIN_DEFAULTS = {
  ratereliefca: {
    base: 'https://ratereliefca.com',
    title: 'California Rate Relief Program | Cut Your Electric Bill by 50%',
    description:
      'Qualify for the 2026 Rate Relief Program. California homeowners can swap their high utility rate for a lower, fixed solar rate. No loans, no debt, $0 down.',
    siteName: 'California Rate Relief Program',
    ogImage: '/og-image.png',
    ogAlt: 'California Rate Relief Program — Cut Your Electric Bill by Up to 50%',
    favicon: '/favicon.ico',
    appleTouchIcon: '/favicon.ico',
  },
  greenreviewshub: {
    base: 'https://greenreviewshub.com',
    title: 'Green Reviews Hub | Honest Green-Energy Product Reviews',
    description:
      'Independent buying guides for portable power stations, e-bikes, mini splits, electric lawn mowers, smart thermostats, heat pumps, and whole-house generators.',
    siteName: 'Green Reviews Hub',
    ogImage: '/og-image.png',
    ogAlt: 'Green Reviews Hub — Independent Green Energy Product Reviews',
    favicon: '/img/favicons/grh-favicon.ico',
    appleTouchIcon: '/img/favicons/grh-apple-touch-icon.png',
  },
  securehomegear: {
    base: 'https://securehomegear.com',
    title: 'SecureHomeGear — Honest Home Security Reviews',
    description:
      'Independent, research-backed reviews of home security cameras, video doorbells, and smart locks. We help you find products that fit your home — with or without subscription lock-in.',
    siteName: 'SecureHomeGear',
    ogImage: '/og-image.png',
    ogAlt: 'SecureHomeGear — Independent Home Security Reviews',
    favicon: '/favicon.ico',
    appleTouchIcon: '/favicon.ico',
  },
  athomebiohacking: {
    base: 'https://athomebiohacking.com',
    title: 'At Home Biohacking — Research-Backed Wellness Reviews',
    description:
      'Honest, peer-reviewed research-backed reviews of home biohacking products: cold plunges, infrared saunas, PEMF mats, red light therapy, and vibration plates. We cite the studies.',
    siteName: 'At Home Biohacking',
    ogImage: '/og-image.png',
    ogAlt: 'At Home Biohacking — Research-Backed Wellness Reviews',
    favicon: '/favicon.ico',
    appleTouchIcon: '/favicon.ico',
  },
  glp1comparehub: {
    base: 'https://glp1comparehub.com',
    title: 'GLP1CompareHub — Independent GLP-1 Telehealth Provider Comparison',
    description:
      'Independent comparison of verified GLP-1 telehealth programs (compounded semaglutide, tirzepatide). Real pricing, post-FDA-crackdown framing, and provider rankings backed by realized EPC data.',
    siteName: 'GLP1CompareHub',
    ogImage: '/img/glp1/og-image.png',
    ogAlt: 'GLP1CompareHub — Independent GLP-1 Telehealth Provider Comparison',
    favicon: '/img/glp1/favicon.svg',
    appleTouchIcon: '/img/glp1/favicon.svg',
  },
};

function detectDomainKey(host: string): keyof typeof DOMAIN_DEFAULTS {
  const h = host.toLowerCase();
  if (h.includes('greenreviewshub')) return 'greenreviewshub';
  if (h.includes('securehomegear')) return 'securehomegear';
  if (h.includes('athomebiohacking')) return 'athomebiohacking';
  if (h.includes('glp1comparehub')) return 'glp1comparehub';
  return 'ratereliefca';
}

// Per-domain GSC verification tokens. Each site needs its OWN token because
// each is a separate GSC property. Add tokens here as new sites are verified.
const GSC_VERIFICATION_TOKENS: Record<keyof typeof DOMAIN_DEFAULTS, string | undefined> = {
  ratereliefca: 'alM4ttazO_TNjm-jjscGnlwFakwTWXiAqA0xaZy9umg',
  greenreviewshub: undefined, // TODO: add when GRH GSC property is verified
  securehomegear: undefined, // TODO: add when SHG GSC property is verified
  athomebiohacking: undefined, // TODO: add when AHB GSC property is verified
  glp1comparehub: undefined, // TODO: add token after creating GSC property at https://search.google.com/search-console
};

export async function generateMetadata(): Promise<Metadata> {
  const hdrs = await headers();
  const host = hdrs.get('host') || 'ratereliefca.com';
  const domainKey = detectDomainKey(host);
  const cfg = DOMAIN_DEFAULTS[domainKey];
  const gscToken = GSC_VERIFICATION_TOKENS[domainKey];

  return {
    metadataBase: new URL(cfg.base),
    verification: gscToken ? { google: gscToken } : undefined,
    title: cfg.title,
    description: cfg.description,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: cfg.title,
      description: cfg.description,
      type: 'website',
      locale: 'en_US',
      url: cfg.base,
      siteName: cfg.siteName,
      images: [
        {
          url: cfg.ogImage,
          width: 1200,
          height: 630,
          alt: cfg.ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: cfg.title,
      description: cfg.description,
      images: [cfg.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: cfg.favicon, sizes: 'any' },
        ...(cfg.favicon.endsWith('.ico')
          ? [{ url: cfg.favicon.replace('.ico', '-32.png'), sizes: '32x32', type: 'image/png' }]
          : []),
      ],
      apple: cfg.appleTouchIcon,
      shortcut: cfg.favicon,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googlePlacesApiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

  // Host-gate the Google Maps Places script (Batch 3.4). Only CRR uses Places
  // autocomplete in the qualification wizard. Loading on GRH/SHG/AHB cost ~80KB
  // of synchronous JS per page for nothing.
  const hdrs = await headers();
  const host = hdrs.get('host') || '';
  const domainKey = detectDomainKey(host);
  const isCRR = domainKey === 'ratereliefca';

  // Global Organization + WebSite JSON-LD per host (Batch 5).
  // Emitted on EVERY page so Google sees the publisher entity + sitelinks-search-box
  // potential consistently across the site, not just on /reviews.
  const cfg = DOMAIN_DEFAULTS[domainKey];
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${cfg.base}#organization`,
    name: cfg.siteName,
    url: cfg.base,
    logo: {
      '@type': 'ImageObject',
      url: `${cfg.base}/img/logo.svg`,
    },
  };
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${cfg.base}#website`,
    url: cfg.base,
    name: cfg.siteName,
    description: cfg.description,
    publisher: { '@id': `${cfg.base}#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${cfg.base}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${dmSerifDisplay.variable}`}
    >
      <head>
        {/* Impact.com site verification. Impact's scanner looks for a
            `value` attribute (non-standard for <meta>, but that's what
            they specified in the dashboard). All 3 properties live on
            the same codebase; each value only validates on its own
            domain, so having all 3 present is harmless. */}
        {/* eslint-disable-next-line react/no-unknown-property */}
        <meta name="impact-site-verification" {...{ value: '22606a76-7eb9-4faf-8d66-de119204a9ee' }} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <meta name="impact-site-verification" {...{ value: 'be1e153b-e9af-454d-b03d-4009e2c884bd' }} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <meta name="impact-site-verification" {...{ value: '5415a32f-dea8-4428-9a39-02c4e626cdcf' }} />
      </head>
      <body className="font-sans antialiased">
        {/* Skip-to-content link (Batch 3.6). Visible only on keyboard focus.
            WCAG 2.1 SC 2.4.1 (Bypass Blocks). */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {/* Global Organization + WebSite (with SearchAction) JSON-LD per host (Batch 5). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <GoogleAnalytics />
        {googlePlacesApiKey && isCRR && (
          <Script
            src={`https://maps.googleapis.com/maps/api/js?key=${googlePlacesApiKey}&libraries=places`}
            strategy="beforeInteractive"
          />
        )}
        <Providers>
          {/* display: contents — wrapper carries the skip-link target id without
              affecting layout flow. Sub-layouts keep their own <main> tags. */}
          <div id="main-content" className="contents">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
