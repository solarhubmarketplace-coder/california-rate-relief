'use client';

// The screen-out notice for the residential lead contract (12 Nov 2026):
// Under $250, a renter, or a unit that is not a detached single-family home.
// Nothing is sent. The visitor can change the answer.

import {
  RENTER_COMMERCIAL_LINK,
  RENTER_MESSAGE,
  UNDER_250_LINK,
  UNDER_250_MESSAGE,
  UNIT_DECLINED_MESSAGE,
} from '@/lib/lead-contract';

export type LeadGateKind = 'under_250' | 'renter' | 'unit_declined';

const COPY: Record<LeadGateKind, { message: string; link: { href: string; label: string } | null }> = {
  under_250: { message: UNDER_250_MESSAGE, link: UNDER_250_LINK },
  renter: { message: RENTER_MESSAGE, link: RENTER_COMMERCIAL_LINK },
  unit_declined: { message: UNIT_DECLINED_MESSAGE, link: null },
};

export function LeadGateNotice({
  kind,
  onChangeAnswer,
  className = '',
}: {
  kind: LeadGateKind;
  onChangeAnswer?: () => void;
  className?: string;
}) {
  const { message, link } = COPY[kind];
  return (
    <div role="status" className={`rounded-lg border border-status-warning/30 bg-status-warning/10 p-4 text-sm text-foreground ${className}`}>
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
            onClick={onChangeAnswer}
            className="inline-flex min-h-[44px] items-center font-semibold text-primary underline"
          >
            Change my answer
          </button>
        )}
      </div>
    </div>
  );
}
