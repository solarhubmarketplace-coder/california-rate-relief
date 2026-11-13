'use client';

// Google Places address suggestions for the residential forms (moved out of
// QualificationWizard, 12 Nov 2026). The Maps script is injected on demand
// (first focus of the address fields, or when a form's address step opens), so
// pages never pay for it before the visitor reaches the address. When the key
// is missing, rejected or slow, the forms fall back to strict manual address
// validation and say so (console warning, GA4 address_places_unavailable).

import { useCallback, useEffect, useRef, useState } from 'react';
import usePlacesAutocomplete, { getDetails } from 'use-places-autocomplete';
import { trackEvent } from '@/components/GoogleAnalyticsClient';
import { placeToAddress, type AddressComponent, type PlaceAddress, type PlaceAddressError } from '@/lib/project-address';
export { placesSelectionRequired } from '@/lib/project-address';

export type PlacesStatus =
  | 'idle' | 'loading' | 'active' | 'no_key' | 'load_failed' | 'auth_failed' | 'timeout' | 'manual_override';


/** Minimal window shape for the Maps script this hook injects. */
type MapsWindow = Window & {
  google?: { maps?: { places?: unknown } };
  gm_authFailure?: () => void;
};

const PLACES_SCRIPT_ID = 'google-maps-places';
const PLACES_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
export const HAS_PLACES_KEY = Boolean(PLACES_API_KEY);
const PLACES_SCRIPT_SRC = PLACES_API_KEY
  ? `https://maps.googleapis.com/maps/api/js?key=${PLACES_API_KEY}&libraries=places`
  : '';

const WARNINGS: Partial<Record<PlacesStatus, string>> = {
  no_key: '[CRR intake] NEXT_PUBLIC_GOOGLE_PLACES_API_KEY is not set at build time; address entry uses manual validation (street number + name, city, CA, ZIP in ca_zip_places).',
  auth_failed: '[CRR intake] Google Places rejected the key (gm_authFailure); manual address validation in use.',
  load_failed: '[CRR intake] The Google Maps script failed to load; manual address validation in use.',
  timeout: '[CRR intake] Google Places was not ready after 30 s; manual address validation in use.',
};
// Once per page, however many forms the page carries.
let warned = false;
let reported = false;

function reportFallback(status: PlacesStatus, formKind: string) {
  const warning = WARNINGS[status];
  if (warning && !warned) {
    warned = true;
    console.warn(warning);
  }
  if (status !== 'manual_override' && WARNINGS[status] && !reported) {
    reported = true;
    trackEvent('address_places_unavailable', { places_status: status, form_kind: formKind });
  }
}

/** Add the Maps script to the page once. Returns false when there is no key. */
function injectPlacesScript(onError: () => void): boolean {
  if (!PLACES_SCRIPT_SRC) return false;
  const existing = document.getElementById(PLACES_SCRIPT_ID);
  if (existing) {
    existing.addEventListener('error', onError);
    return true;
  }
  const script = document.createElement('script');
  script.id = PLACES_SCRIPT_ID;
  script.src = PLACES_SCRIPT_SRC;
  script.async = true;
  script.addEventListener('error', onError);
  document.body.appendChild(script);
  return true;
}

export interface PlacesSuggestion {
  place_id: string;
  description: string;
}

export type PlaceSelection = PlaceAddress | { error: PlaceAddressError | 'details_failed' };

export function usePlacesAddress(formKind: string) {
  const [status, setStatus] = useState<PlacesStatus>('idle');
  const statusRef = useRef<PlacesStatus>('idle');
  const update = useCallback((next: PlacesStatus) => {
    statusRef.current = next;
    setStatus(next);
  }, []);

  const {
    ready,
    setValue,
    suggestions: { status: suggestionStatus, data },
    clearSuggestions,
    init,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: 'us' }, types: ['address'] },
    debounce: 300,
    initOnMount: false,
  });

  /** Start loading Maps (idempotent). Without a key this switches to manual mode. */
  const request = useCallback(() => {
    if (statusRef.current !== 'idle') return;
    if (!HAS_PLACES_KEY) {
      update('no_key');
      return;
    }
    update('loading');
  }, [update]);

  useEffect(() => {
    if (status !== 'loading') return;
    const mapsWindow = window as MapsWindow;
    const previousAuthFailure = mapsWindow.gm_authFailure;
    const fail = (next: PlacesStatus) => {
      if (statusRef.current === 'loading' || statusRef.current === 'active') update(next);
    };
    const onAuthFailure = () => {
      fail('auth_failed');
      clearSuggestions();
      previousAuthFailure?.();
    };
    mapsWindow.gm_authFailure = onAuthFailure;
    let tries = 0;
    let timer: number | undefined;
    const tryInit = () => {
      if (mapsWindow.google?.maps?.places) {
        init();
        return;
      }
      if (++tries < 60) timer = window.setTimeout(tryInit, 500);
      else fail('timeout');
    };
    if (mapsWindow.google?.maps?.places || injectPlacesScript(() => fail('load_failed'))) tryInit();
    else fail('no_key');
    return () => {
      if (timer) window.clearTimeout(timer);
    };
    // init and clearSuggestions are stable useCallbacks in the hook.
  }, [status, init, clearSuggestions, update]);

  useEffect(() => {
    if (ready && statusRef.current === 'loading') update('active');
  }, [ready, update]);

  // A key without the Places API enabled answers every request with
  // REQUEST_DENIED instead of calling gm_authFailure.
  useEffect(() => {
    if (suggestionStatus === 'REQUEST_DENIED' && statusRef.current === 'active') {
      clearSuggestions();
      update('auth_failed');
    }
  }, [suggestionStatus, clearSuggestions, update]);

  useEffect(() => {
    reportFallback(status, formKind);
  }, [status, formKind]);

  const type = useCallback(
    (value: string) => {
      if (statusRef.current === 'active') setValue(value);
    },
    [setValue],
  );

  const select = useCallback(
    async (suggestion: PlacesSuggestion): Promise<PlaceSelection> => {
      setValue(suggestion.description, false);
      clearSuggestions();
      try {
        const details = await getDetails({ placeId: suggestion.place_id, fields: ['address_components'] });
        const components = typeof details === 'string'
          ? undefined
          : (details as unknown as { address_components?: AddressComponent[] }).address_components;
        if (!components) return { error: 'details_failed' };
        return placeToAddress(suggestion.description, components);
      } catch {
        return { error: 'details_failed' };
      }
    },
    [setValue, clearSuggestions],
  );

  const chooseManual = useCallback(() => {
    clearSuggestions();
    update('manual_override');
  }, [clearSuggestions, update]);

  const suggestions: PlacesSuggestion[] =
    status === 'active' && suggestionStatus === 'OK'
      ? data.map(({ place_id, description }) => ({ place_id, description }))
      : [];

  return { status, request, type, select, chooseManual, suggestions, clearSuggestions };
}
