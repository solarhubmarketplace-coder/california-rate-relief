'use client';

// GA4 deflection events for the residential lead contract (12 Nov 2026).
// gate_under_250, gate_renter, gate_unit_declined and gate_address_rejected fire
// once per form instance per kind (per reason for address rejections), with the
// first-touch landing page and the current page path, so deflections can be
// counted by landing page. Never any name, phone, email, street or exact bill.

import { useCallback, useRef } from 'react';
import { trackEvent } from '@/components/GoogleAnalyticsClient';
import { getFirstTouch } from '@/lib/attribution';

export type GateKind = 'gate_under_250' | 'gate_renter' | 'gate_unit_declined' | 'gate_address_rejected';
/** quick_check is not a lead form (it sends nothing) but deflects visitors too. */
export type GateFormKind = 'solar_inquiry' | 'qualification_wizard' | 'offer_request' | 'quick_check';

export function gateContext(formKind: GateFormKind): Record<string, string> {
  const touch = getFirstTouch();
  return {
    form_kind: formKind,
    landing_page: touch?.landing_page ?? 'unknown',
    page_path: typeof window === 'undefined' ? 'unknown' : window.location.pathname || 'unknown',
    traffic_channel: touch?.traffic_channel ?? 'unknown',
  };
}

/** Send a gate event unless this form instance already sent it. */
export function trackGate(sent: Set<string>, kind: GateKind, formKind: GateFormKind, reason?: string): void {
  const key = reason ? `${kind}:${reason}` : kind;
  if (sent.has(key)) return;
  sent.add(key);
  trackEvent(kind, { ...gateContext(formKind), ...(reason ? { reason } : {}) });
}

/** One tracker per form instance. */
export function useLeadGates(formKind: GateFormKind) {
  const sent = useRef(new Set<string>());
  return useCallback(
    (kind: GateKind, reason?: string) => trackGate(sent.current, kind, formKind, reason),
    [formKind],
  );
}
