'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { intakeHrefForPath, isCommercialIntentPath } from '@/lib/intake-routing';
import { ctaCopyFor, ctaVariantForPath, type CtaVariant } from '@/lib/cta-intent';
import { trackEvent } from '@/components/GoogleAnalyticsClient';

// =============================================================================
// FloatingMobileCTA — sticky bottom bar on mobile only.
//
// Most bill-shock search is mobile, so this bar is the ask that is actually on
// screen. Three things it now does that it did not:
//   * it makes the page's own ask (cta_variant), not one generic one;
//   * it can be dismissed, and stays dismissed for the rest of the session;
//   * it reserves its own height in the layout instead of sitting on top of the
//     last lines of the page, and it does not animate for a visitor who asked
//     for reduced motion.
// The destination is unchanged: still intakeHrefForPath() for this path.
//
// DRAFT COPY — labels come from lib/cta-intent.ts.
// =============================================================================

const DISMISS_KEY = 'crr_sticky_cta_dismissed_v1';

// An ask that is already on screen: the hero quick check, an inquiry form, the
// home wizard.
const ASK_SELECTOR = 'main form, #qualify, #solar-inquiry, #commercial-review';

/**
 * The first section heading after the page's answer: the first visible h2 in
 * <main> that is not part of an ask (the quick check's "Start with your bill"
 * is an h2 inside its form). Falls back to the h1 when a page has no such h2.
 */
function firstAnswerBoundary(): Element | null {
  const headings = Array.from(document.querySelectorAll('main h2'));
  const boundary = headings.find(
    (node) => !node.classList.contains('sr-only') && !node.closest(ASK_SELECTOR),
  );
  return boundary ?? document.querySelector('main h1');
}

export function FloatingMobileCTA({ variant }: { variant?: CtaVariant } = {}) {
  const pathname = usePathname() || '';
  const isCommercial = isCommercialIntentPath(pathname);
  const resolved: CtaVariant = variant
    ? variant
    : isCommercial
      ? 'commercial'
      : ctaVariantForPath(pathname);
  const copy = ctaCopyFor(resolved);
  const href = intakeHrefForPath(pathname);

  // Mounted-gated so the server render and the first client render agree; the
  // dismissal lives in sessionStorage, which is unreadable during SSR and can
  // throw outright when storage is blocked.
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === '1') setDismissed(true);
    } catch {
      /* Storage blocked: the bar simply shows, as it always did. */
    }
    try {
      const query = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(query.matches);
      const listener = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
      query.addEventListener('change', listener);
      return () => query.removeEventListener('change', listener);
    } catch {
      /* matchMedia missing: no animation is applied either way. */
    }
  }, []);

  // Show the bar only once the page's first answer has scrolled out of view
  // (plan item 4.4; audit G-62/P-18): the reader gets the answer on the first
  // screen without a sticky unit over it. "Out of view" means the first
  // section heading after the answer has reached the top of the viewport.
  // It latches per page: scrolling back up does not hide the bar again.
  const [pastAnswerPath, setPastAnswerPath] = useState<string | null>(null);
  const pastAnswer = pastAnswerPath === pathname;
  useEffect(() => {
    if (!mounted || dismissed || pastAnswer) return;
    const boundary = firstAnswerBoundary();
    if (!boundary || typeof IntersectionObserver === 'undefined') {
      // Nothing to measure against: behave as the bar always did.
      setPastAnswerPath(pathname);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.boundingClientRect.top <= 0)) {
          setPastAnswerPath(pathname);
          observer.disconnect();
        }
      },
      // 0 and 1 fire as the heading enters from below and as it starts to
      // leave at the top, so the top edge crossing is always reported.
      { threshold: [0, 1] },
    );
    observer.observe(boundary);
    return () => observer.disconnect();
  }, [mounted, dismissed, pastAnswer, pathname]);

  // Hide the bar while an ask is already on screen (the hero quick check, an
  // inquiry form, the home wizard). Two asks on one screen compete, and on a
  // phone the bar sat over the quick check's Continue button.
  const [askInView, setAskInView] = useState(false);
  useEffect(() => {
    if (!mounted || dismissed || typeof IntersectionObserver === 'undefined') return;
    const visible = new Set<Element>();
    const observed = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setAskInView(visible.size > 0);
      },
      { threshold: 0 },
    );
    const scan = () => {
      document
        .querySelectorAll(ASK_SELECTOR)
        .forEach((node) => {
          if (observed.has(node)) return;
          observed.add(node);
          observer.observe(node);
        });
    };
    scan();
    // The home wizard mounts inside Suspense and forms can swap to their
    // success panel, so look again once the page has settled.
    const timers = [600, 2000].map((ms) => window.setTimeout(scan, ms));
    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      observer.disconnect();
    };
  }, [mounted, dismissed]);

  if (!mounted || dismissed) return null;

  const label = isCommercial ? 'Request Commercial Review' : copy.stickyAction;
  const hidden = askInView || !pastAnswer;

  return (
    <>
      {/* Reserves the bar's height so the bar never covers the end of the page. */}
      <div aria-hidden="true" className="md:hidden h-[72px]" />
      <div
        aria-hidden={hidden || undefined}
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center gap-2 border-t border-border bg-card p-3 shadow-lg ${
          reducedMotion
            ? ''
            : 'transition-transform duration-200 motion-reduce:transition-none'
        } ${hidden ? 'translate-y-full pointer-events-none' : ''}`}
      >
        <Link
          href={href}
          tabIndex={hidden ? -1 : undefined}
          onClick={() =>
            trackEvent('cta_click', {
              cta: 'sticky_mobile',
              cta_variant: resolved,
              destination: href,
              segment: isCommercial ? 'commercial' : 'residential',
              page_path: pathname || 'unknown',
            })
          }
          className="block flex-1 rounded-lg bg-primary py-3 text-center text-sm font-semibold text-primary-foreground"
        >
          {label}
        </Link>
        <button
          type="button"
          tabIndex={hidden ? -1 : undefined}
          aria-label="Dismiss this bar"
          onClick={() => {
            setDismissed(true);
            try {
              sessionStorage.setItem(DISMISS_KEY, '1');
            } catch {
              /* Dismissal then lasts for this page view only. */
            }
            trackEvent('cta_click', {
              cta: 'sticky_mobile_dismiss',
              cta_variant: resolved,
              destination: 'dismissed',
              page_path: pathname || 'unknown',
            });
          }}
          className="shrink-0 rounded-lg border border-border p-2 text-muted-foreground"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
