import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Script from 'next/script';
import './globals.css';
import { Providers } from './providers';
import GoogleAnalytics from '@/components/GoogleAnalytics';

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
  },
  greenreviewshub: {
    base: 'https://greenreviewshub.com',
    title: 'Green Reviews Hub | Honest Green-Energy Product Reviews',
    description:
      'Independent buying guides for portable power stations, e-bikes, mini splits, electric lawn mowers, smart thermostats, heat pumps, and whole-house generators.',
    siteName: 'Green Reviews Hub',
    ogImage: '/og-image.png',
    ogAlt: 'Green Reviews Hub — Independent Green Energy Product Reviews',
  },
  securehomegear: {
    base: 'https://securehomegear.com',
    title: 'SecureHomeGear — Honest Home Security Reviews',
    description:
      'Independent, research-backed reviews of home security cameras, video doorbells, and smart locks. We help you find products that fit your home — with or without subscription lock-in.',
    siteName: 'SecureHomeGear',
    ogImage: '/og-image.png',
    ogAlt: 'SecureHomeGear — Independent Home Security Reviews',
  },
  athomebiohacking: {
    base: 'https://athomebiohacking.com',
    title: 'At Home Biohacking — Research-Backed Wellness Reviews',
    description:
      'Honest, peer-reviewed research-backed reviews of home biohacking products: cold plunges, infrared saunas, PEMF mats, red light therapy, and vibration plates. We cite the studies.',
    siteName: 'At Home Biohacking',
    ogImage: '/og-image.png',
    ogAlt: 'At Home Biohacking — Research-Backed Wellness Reviews',
  },
};

function detectDomainKey(host: string): keyof typeof DOMAIN_DEFAULTS {
  const h = host.toLowerCase();
  if (h.includes('greenreviewshub')) return 'greenreviewshub';
  if (h.includes('securehomegear')) return 'securehomegear';
  if (h.includes('athomebiohacking')) return 'athomebiohacking';
  return 'ratereliefca';
}

export async function generateMetadata(): Promise<Metadata> {
  const hdrs = await headers();
  const host = hdrs.get('host') || 'ratereliefca.com';
  const cfg = DOMAIN_DEFAULTS[detectDomainKey(host)];

  return {
    metadataBase: new URL(cfg.base),
    verification: {
      google: 'alM4ttazO_TNjm-jjscGnlwFakwTWXiAqA0xaZy9umg',
    },
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
      icon: '/img/logo.svg',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googlePlacesApiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

  return (
    <html lang="en" suppressHydrationWarning>
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
        <GoogleAnalytics />
        {googlePlacesApiKey && (
          <Script
            src={`https://maps.googleapis.com/maps/api/js?key=${googlePlacesApiKey}&libraries=places`}
            strategy="beforeInteractive"
          />
        )}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
