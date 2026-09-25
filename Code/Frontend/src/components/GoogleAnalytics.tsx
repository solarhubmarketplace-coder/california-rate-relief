import { headers } from 'next/headers';
import Script from 'next/script';

// =============================================================================
// GoogleAnalytics — host-aware GA4 loader
// =============================================================================
// One codebase serves five domains. Each domain gets its own GA4 property so
// reports aren't polluted by traffic from other portfolio sites. The Railway
// environment supplies a per-domain measurement ID; if a domain's ID is unset,
// we fall back to the legacy single-property var (NEXT_PUBLIC_GA_MEASUREMENT_ID)
// for backward compatibility, and ultimately render nothing if no ID resolves.
//
// `NEXT_PUBLIC_*` env vars are inlined at BUILD time. Setting them in Railway
// requires a redeploy to take effect.
//
// Env vars expected (any subset — set per domain as you create GA4 properties):
//   NEXT_PUBLIC_GA_MEASUREMENT_ID_GLP1   — glp1comparehub.com
//   NEXT_PUBLIC_GA_MEASUREMENT_ID_GRH    — greenreviewshub.com
//   NEXT_PUBLIC_GA_MEASUREMENT_ID_SHG    — securehomegear.com
//   NEXT_PUBLIC_GA_MEASUREMENT_ID_AHB    — athomebiohacking.com
//   NEXT_PUBLIC_GA_MEASUREMENT_ID_CRR    — ratereliefca.com
//   NEXT_PUBLIC_GA_MEASUREMENT_ID        — legacy / portfolio-wide fallback
// =============================================================================

const FALLBACK_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function detectIdForHost(host: string): string | undefined {
  const h = host.toLowerCase();
  if (h.includes('glp1comparehub')) {
    return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_GLP1 ?? FALLBACK_ID;
  }
  if (h.includes('greenreviewshub')) {
    return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_GRH ?? FALLBACK_ID;
  }
  if (h.includes('securehomegear')) {
    return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_SHG ?? FALLBACK_ID;
  }
  if (h.includes('athomebiohacking')) {
    return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_AHB ?? FALLBACK_ID;
  }
  if (h.includes('ratereliefca')) {
    return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_CRR ?? FALLBACK_ID;
  }
  return FALLBACK_ID;
}

export default async function GoogleAnalytics() {
  const hdrs = await headers();
  const host = hdrs.get('host') ?? '';
  const id = detectIdForHost(host);

  if (!id) return null;

  // Load timing only (plan item 4.1, 2026-09-24). The measurement ID, the
  // config call and every event are unchanged; what changed is when the
  // 176 KB gtag.js library arrives.
  //
  // 1. The queue is created in the server HTML, so it exists before any client
  //    code runs. window.gtag() only pushes onto window.dataLayer; trackEvent()
  //    calls made before the library arrives wait there instead of being
  //    dropped (with the old afterInteractive inline script, a call before
  //    hydration found no window.gtag and was lost).
  // 2. gtag.js loads lazyOnload: after the window load event, in idle time.
  //    It is no longer preloaded in <head>, where it competed with the page's
  //    own CSS and JS and pushed LCP back 0.2-0.7 s on every page. When it
  //    loads it replays the queue in order: js, config (the page_view), then
  //    any events.
  const bootstrap = [
    'window.dataLayer=window.dataLayer||[];',
    'function gtag(){dataLayer.push(arguments);}',
    "gtag('js',new Date());",
    `gtag('config',${JSON.stringify(id)},{page_title:document.title,send_page_view:true});`,
  ].join('');

  return (
    <>
      <script
        id='google-analytics'
        dangerouslySetInnerHTML={{ __html: bootstrap }}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy='lazyOnload'
      />
    </>
  );
}

// =============================================================================
// trackEvent — fire a custom event from client code
// =============================================================================
// Queued on window.dataLayer until gtag.js loads; a no-op when this host has
// no measurement ID. Callable from any `'use client'` component.
// =============================================================================
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window !== 'undefined') {
    const g = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof g === 'function') {
      g('event', eventName, params);
    }
  }
}
