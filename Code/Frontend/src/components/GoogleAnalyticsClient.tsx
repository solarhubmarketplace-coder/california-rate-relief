'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

type Gtag = (...args: unknown[]) => void;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: Gtag;
  __gaConfiguredMeasurementId?: string;
  __gaLastRoute?: string;
  __gaLastLocation?: string;
};

const EXCLUDED_PATHS = [
  '/dashboard',
  '/login',
  '/reset-password',
  '/testing-guide',
  '/testing',
  '/api',
] as const;

// Preserve marketing attribution while stripping arbitrary query values such
// as /book?lead_id=... before a URL is sent to Google Analytics.
const CAMPAIGN_QUERY_PARAMS = new Set([
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'dclid',
  'gbraid',
  'wbraid',
  'fbclid',
  'msclkid',
]);

function isExcludedPath(pathname: string): boolean {
  return EXCLUDED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

function sanitizedPageLocation(pathname: string): {
  location: string;
  route: string;
} {
  const url = new URL(window.location.href);

  for (const key of Array.from(url.searchParams.keys())) {
    if (!CAMPAIGN_QUERY_PARAMS.has(key.toLowerCase())) {
      url.searchParams.delete(key);
    }
  }

  url.hash = '';
  return {
    location: url.toString(),
    route: `${pathname}${url.search}`,
  };
}

export default function GoogleAnalyticsClient({
  measurementId,
}: {
  measurementId: string;
}) {
  const pathname = usePathname();
  const [isConfigured, setIsConfigured] = useState(false);

  const configure = useCallback(() => {
    const analyticsWindow = window as AnalyticsWindow;
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    analyticsWindow.gtag =
      analyticsWindow.gtag ||
      function gtag(...args: unknown[]) {
        analyticsWindow.dataLayer?.push(args);
      };

    if (analyticsWindow.__gaConfiguredMeasurementId !== measurementId) {
      analyticsWindow.gtag('js', new Date());
      analyticsWindow.gtag('config', measurementId, {
        send_page_view: false,
      });
      analyticsWindow.__gaConfiguredMeasurementId = measurementId;
    }

    setIsConfigured(true);
  }, [measurementId]);

  useEffect(() => {
    if (!isConfigured || !pathname) return;

    const analyticsWindow = window as AnalyticsWindow;

    // Remember excluded routes too. This allows a real navigation back to the
    // prior public pathname to produce a new page_view while still suppressing
    // React Strict Mode's duplicate effect for the same route.
    if (isExcludedPath(pathname)) {
      analyticsWindow.__gaLastRoute = pathname;
      return;
    }

    const page = sanitizedPageLocation(pathname);
    if (analyticsWindow.__gaLastRoute === page.route) return;

    analyticsWindow.gtag?.('event', 'page_view', {
      page_path: page.route,
      page_location: page.location,
      page_referrer:
        analyticsWindow.__gaLastLocation || document.referrer || undefined,
      page_title: document.title,
    });
    analyticsWindow.__gaLastRoute = page.route;
    analyticsWindow.__gaLastLocation = page.location;
  }, [isConfigured, pathname]);

  return (
    <Script
      id={`google-analytics-${measurementId}`}
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy='afterInteractive'
      onReady={configure}
    />
  );
}

// Safe no-op when gtag is not loaded. Event parameters must never contain lead
// contact information or other PII.
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === 'undefined') return;
  (window as AnalyticsWindow).gtag?.('event', eventName, params);
}
