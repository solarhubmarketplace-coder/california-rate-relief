'use client';

// The screen-out notice for the residential lead contract (12 Nov 2026):
// Under $250, a renter, or a unit that is not a detached single-family home.
// Nothing is sent. The visitor can change the answer.
//
// Focus (review UX-3): a newly mounted role=status is announced unreliably, so
// when the visitor's own answer opens the notice it takes focus itself (a
// restored state on page load does not steal focus). "Change my answer" hands
// focus back to the question through `returnFocusTo`, because the button that
// was clicked unmounts with the notice.

import { useEffect, useRef } from 'react';
import {
  RENTER_COMMERCIAL_HINT,
  RENTER_COMMERCIAL_LINK,
  RENTER_MESSAGE,
  UNDER_250_LINK,
  UNDER_250_MESSAGE,
  UNIT_DECLINED_MESSAGE,
} from '@/lib/lead-contract';

export type LeadGateKind = 'under_250' | 'renter' | 'unit_declined';

const COPY: Record<LeadGateKind, { message: string; link: { href: string; label: string } | null }> = {
  under_250: { message: UNDER_250_MESSAGE, link: UNDER_250_LINK },
  renter: { message: `${RENTER_MESSAGE} ${RENTER_COMMERCIAL_HINT}`, link: RENTER_COMMERCIAL_LINK },
  unit_declined: { message: UNIT_DECLINED_MESSAGE, link: null },
};

export function LeadGateNotice({
  kind,
  onChangeAnswer,
  returnFocusTo,
  className = '',
}: {
  kind: LeadGateKind;
  onChangeAnswer?: () => void;
  /** The element that should take focus after "Change my answer" (the question). */
  returnFocusTo?: () => HTMLElement | null | undefined;
  className?: string;
}) {
  const { message, link } = COPY[kind];
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only when the visitor is interacting (focus is on a control), never on load.
    const active = typeof document === 'undefined' ? null : document.activeElement;
    if (active && active !== document.body) ref.current?.focus({ preventScroll: false });
  }, []);

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="status"
      className={`rounded-lg border border-status-warning/30 bg-status-warning/10 p-4 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
    >
      <p>{message}</p>
      <div className="mt-2 flex flex-wrap items-center gap-x-4">
        {link && (
          <a href={link.href} className="inline-flex min-h-[44px] items-center font-semibold text-primary underline">
            {link.label}
          </a>
        )}
        {onChangeAnswer && (
          <button
            type="button"
            onClick={() => {
              onChangeAnswer();
              if (returnFocusTo) requestAnimationFrame(() => returnFocusTo()?.focus());
            }}
            className="inline-flex min-h-[44px] items-center font-semibold text-primary underline"
          >
            Change my answer
          </button>
        )}
      </div>
    </div>
  );
}
