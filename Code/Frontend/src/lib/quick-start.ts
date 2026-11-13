// =============================================================================
// quick-start — the handoff from HeroQuickCheck to a page's full intake form.
//
// HeroQuickCheck asks two things (utility, average monthly bill as a band
// button, residential lead contract 12 Nov 2026) and sends nothing to the
// backend. "Under $250" screens the visitor out there and hands nothing on.
// A band is handed on in two ways:
//
//   1. The existing calculator context (./calculator-context.ts):
//      saveCalculatorContext() stores { utility, ... } in sessionStorage and
//      fires 'crr-calculator-context' (the band is not a typed bill, so the
//      context's monthlyBill is left as it was).
//   2. A quick-start signal (this module): { source: 'quick_check', targetId,
//      utility, utilityOther, billChoice, ... }. It tells ONE form — the one
//      whose id is targetId — "the visitor already answered step 1, open at the
//      next step". On the same page it travels as the window event
//      QUICK_START_EVENT; across a navigation it is kept in sessionStorage
//      (QUICK_START_STORAGE_KEY), or in qc_* query params when storage is
//      blocked. The form consumes it once, so a reload or a later page does
//      not jump ahead again.
//
// Nothing here changes the intake payload. The receiving forms map the answers
// onto the same fields a visitor would have filled by hand.
// =============================================================================

import { utilityOptions, type CalculatorContext } from './calculator-context.ts';
import { UNDER_250_ID, billChoiceForAmount, isBillBandId, type BillBandId, type BillChoiceId } from './lead-contract.ts';
import {
  COMMERCIAL_ASSESSMENT_PATH,
  COMMERCIAL_FORM_ID,
  intakeHrefForPath,
} from './intake-routing.ts';

export type UtilityCode = (typeof utilityOptions)[number][0];

export const QUICK_START_EVENT = 'crr-quick-start';
export const QUICK_START_STORAGE_KEY = 'crr_quick_start_v1';
export const QUICK_START_SOURCE = 'quick_check';
/** A handoff older than this is ignored (the visitor has moved on). */
export const QUICK_START_TTL_MS = 30 * 60 * 1000;
/** Same ceiling as the SolarInquiry bill field. */
export const MAX_MONTHLY_BILL = 100000;
/** SolarInquiry's default section id. */
export const DEFAULT_QUICK_CHECK_TARGET = 'solar-inquiry';
/** The home page wrapper around QualificationWizard. */
export const HOME_WIZARD_TARGET = 'qualify';

export interface QuickStart {
  source: typeof QUICK_START_SOURCE;
  /** id of the form element that should consume this handoff. */
  targetId: string;
  utility: UtilityCode;
  /** Free-text utility name; only meaningful when utility === 'other'. */
  utilityOther: string;
  /**
   * The bill band the visitor chose (residential lead contract, 12 Nov 2026).
   * null for an older handoff whose typed bill was under $250 or unusable:
   * the receiving form then opens at the bill question.
   */
  billChoice: BillBandId | null;
  topic: string;
  fromPath: string;
  issuedAt: number;
}

export function isUtilityCode(value: unknown): value is UtilityCode {
  return typeof value === 'string' && utilityOptions.some(([id]) => id === value);
}

// Full names pages sometimes pass instead of a code. Mirrors the aliases the
// backend's normalizeUtility accepts, so a mapped code is stored the same way.
const UTILITY_ALIASES: Record<string, UtilityCode> = {
  pacificgasandelectric: 'pge',
  southerncaliforniaedison: 'sce',
  sandiegogasandelectric: 'sdge',
  losangelesdepartmentofwaterandpower: 'ladwp',
  losangelesdwp: 'ladwp',
  morenovalleyutility: 'mvu',
  sacramentomunicipalutilitydistrict: 'smud',
};

/**
 * A utility code for a code ('pge') or a display label ('PG&E', 'SDG&E',
 * 'Southern California Edison'), or '' when it is not one of utilityOptions.
 */
export function utilityCodeFor(value?: string | null): UtilityCode | '' {
  const raw = String(value ?? '').trim();
  if (!raw) return '';
  const lower = raw.toLowerCase();
  const direct = utilityOptions.find(
    ([id, label]) => id === lower || label.toLowerCase() === lower,
  );
  if (direct) return direct[0];
  return UTILITY_ALIASES[lower.replace(/[^a-z0-9]/g, '')] ?? '';
}

/** Display label for a code; for 'other' the visitor's own text when given. */
export function utilityLabelFor(code: string, other = ''): string {
  if (code === 'other') return other.trim() || 'Other / not sure';
  return utilityOptions.find(([id]) => id === code)?.[1] ?? code;
}

/**
 * Keep what a bill field can hold: digits and one decimal point, two decimals
 * at most. "$1,250.50" -> "1250.50". Used on every keystroke, so it never
 * rejects input outright; parseBill decides whether the result is usable.
 */
export function sanitizeBillInput(raw: string): string {
  const cleaned = String(raw ?? '').replace(/[^\d.]/g, '');
  const [whole, ...rest] = cleaned.split('.');
  const integer = whole.replace(/^0+(?=\d)/, '').slice(0, 6);
  if (!rest.length) return integer;
  return `${integer}.${rest.join('').slice(0, 2)}`;
}

/** A positive bill no larger than MAX_MONTHLY_BILL, or null. */
export function parseBill(raw: string): number | null {
  const value = sanitizeBillInput(raw);
  if (!value || value === '.') return null;
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0 && amount <= MAX_MONTHLY_BILL
    ? amount
    : null;
}

/** "$250", "$182.50", "$1,200". */
export function formatBill(value: number | string): string {
  const amount = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(amount)) return '';
  const cents = !Number.isInteger(amount);
  return `$${amount.toLocaleString('en-US', {
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: 2,
  })}`;
}

export type QuickCheckField = 'utility' | 'bill';
export type QuickCheckResult =
  | { ok: true; utility: UtilityCode; utilityOther: string; billChoice: BillBandId }
  | { ok: false; invalid: QuickCheckField[] };

/**
 * The quick check needs a utility and a bill band. "Other / not sure" is a
 * complete answer on its own: the name box is optional, because a visitor who
 * is not sure cannot fill it and the backend already records the ZIP-derived
 * utility next to the visitor's answer. "Under $250" is not a band: the quick
 * check screens it out before it gets here.
 */
export function validateQuickCheck(input: {
  utility: string;
  utilityOther?: string;
  billChoice: string | null;
}): QuickCheckResult {
  const invalid: QuickCheckField[] = [];
  if (!isUtilityCode(input.utility)) invalid.push('utility');
  if (!isBillBandId(input.billChoice)) invalid.push('bill');
  if (invalid.length) return { ok: false, invalid };
  return {
    ok: true,
    utility: input.utility as UtilityCode,
    utilityOther:
      input.utility === 'other' ? String(input.utilityOther ?? '').trim().slice(0, 120) : '',
    billChoice: input.billChoice as BillBandId,
  };
}

/**
 * The calculator context to store: the utility over whatever was there. The
 * quick check knows only a bill band, so it no longer writes a bill figure
 * into the calculator context (a band midpoint is not a bill anyone typed).
 */
export function calculatorContextWithQuickCheck(
  existing: CalculatorContext | null,
  answers: { utility: UtilityCode },
): CalculatorContext {
  // Every optional key is present as a string so a calculator that reads this
  // context never renders an uncontrolled input.
  return {
    zip: existing?.zip ?? '',
    annualKwh: existing?.annualKwh ?? '',
    systemKw: existing?.systemKw ?? '',
    solarPrice: existing?.solarPrice ?? '',
    batteryPrice: existing?.batteryPrice ?? '',
    annualBillAfter: existing?.annualBillAfter ?? '',
    utility: answers.utility,
    monthlyBill: existing?.monthlyBill ?? '',
  };
}

// --- Home wizard mapping ------------------------------------------------------

/** Bill label for analytics: the band id or 'under_250'; never an exact figure. */
export function billBracketParam(choice: BillChoiceId | null): string {
  return choice ?? 'none';
}

const WIZARD_UTILITY_TILES = ['sce', 'pge', 'sdge', 'mvu', 'ladwp'] as const;

/**
 * The wizard's utility answer for a quick-start. A utility with its own tile
 * maps to that tile; anything else is "other" with the name filled in, which
 * is exactly what a visitor picking "Other" and typing the name would send.
 */
export function wizardUtilityFor(value: Pick<QuickStart, 'utility' | 'utilityOther'>): {
  utilityProvider: string;
  utilityProviderOther: string;
} {
  if ((WIZARD_UTILITY_TILES as readonly string[]).includes(value.utility))
    return { utilityProvider: value.utility, utilityProviderOther: '' };
  if (value.utility === 'other')
    return { utilityProvider: 'other', utilityProviderOther: value.utilityOther.trim() };
  return { utilityProvider: 'other', utilityProviderOther: utilityLabelFor(value.utility) };
}

// --- Where the visitor goes -------------------------------------------------

export type QuickCheckHandoff =
  | { mode: 'scroll'; targetId: string }
  | { mode: 'navigate'; href: string; targetId: string };

/**
 * Scroll to the preferred form when it is on this page; otherwise follow the
 * site's intake routing (intakeHrefForPath). A same-page anchor whose form is
 * missing falls back to the form's own page rather than a dead anchor: the
 * standalone commercial form for the inline commercial anchor, the home page
 * wizard for everything else.
 */
export function resolveQuickCheckHandoff(
  pathname: string,
  preferredId: string,
  hasTarget: (id: string) => boolean,
): QuickCheckHandoff {
  if (preferredId && hasTarget(preferredId)) return { mode: 'scroll', targetId: preferredId };
  const href = intakeHrefForPath(pathname || '/');
  const hashAt = href.indexOf('#');
  const path = hashAt === -1 ? href : href.slice(0, hashAt);
  const hash = hashAt === -1 ? '' : href.slice(hashAt + 1);
  if ((path === '' || path === pathname) && hash && hasTarget(hash))
    return { mode: 'scroll', targetId: hash };
  if (path === '' && hash === COMMERCIAL_FORM_ID)
    return { mode: 'navigate', href: COMMERCIAL_ASSESSMENT_PATH, targetId: '' };
  if (path === '')
    return { mode: 'navigate', href: `/#${HOME_WIZARD_TARGET}`, targetId: HOME_WIZARD_TARGET };
  return { mode: 'navigate', href, targetId: hash };
}

/** Which form a handoff lands on, for the quick_check_submit event. */
export function quickCheckTargetForm(handoff: QuickCheckHandoff): string {
  if (handoff.mode === 'navigate' && handoff.href.startsWith(COMMERCIAL_ASSESSMENT_PATH))
    return 'commercial_assessment';
  if (handoff.targetId === COMMERCIAL_FORM_ID) return 'commercial_assessment';
  if (handoff.targetId === HOME_WIZARD_TARGET) return 'qualification_wizard';
  return 'solar_inquiry';
}

// --- The signal itself --------------------------------------------------------

/** A validated QuickStart, or null for anything stale, foreign or malformed. */
export function parseQuickStart(value: unknown, now: number): QuickStart | null {
  if (!value || typeof value !== 'object') return null;
  const v = value as Record<string, unknown>;
  if (v.source !== QUICK_START_SOURCE) return null;
  if (typeof v.targetId !== 'string' || !v.targetId) return null;
  if (!isUtilityCode(v.utility)) return null;
  // A band, or (handoffs and links made before 12 Nov 2026) a typed bill that
  // maps onto one; under $250 or unusable -> null, so the form asks again.
  let billChoice: BillBandId | null = null;
  if (isBillBandId(v.billChoice)) billChoice = v.billChoice;
  else if (typeof v.monthlyBill === 'string') {
    const amount = parseBill(v.monthlyBill);
    const mapped = amount === null ? null : billChoiceForAmount(amount);
    billChoice = mapped && mapped !== UNDER_250_ID ? mapped : null;
  } else if (v.billChoice !== null && v.billChoice !== undefined && v.billChoice !== UNDER_250_ID) return null;
  const issuedAt = Number(v.issuedAt);
  if (!Number.isFinite(issuedAt) || now - issuedAt > QUICK_START_TTL_MS || issuedAt - now > 60_000)
    return null;
  return {
    source: QUICK_START_SOURCE,
    targetId: v.targetId.slice(0, 80),
    utility: v.utility,
    utilityOther:
      v.utility === 'other' && typeof v.utilityOther === 'string' ? v.utilityOther.trim().slice(0, 120) : '',
    billChoice,
    topic: typeof v.topic === 'string' ? v.topic.slice(0, 160) : '',
    fromPath: typeof v.fromPath === 'string' ? v.fromPath.slice(0, 300) : '',
    issuedAt,
  };
}

const PARAMS = {
  target: 'qc_target',
  utility: 'qc_utility',
  other: 'qc_other',
  band: 'qc_band',
  /** Before 12 Nov 2026 links carried the typed bill; still read. */
  bill: 'qc_bill',
} as const;

/** The navigation href carrying the answers in qc_* params (storage fallback). */
export function quickStartHref(href: string, value: QuickStart): string {
  const hashAt = href.indexOf('#');
  const base = hashAt === -1 ? href : href.slice(0, hashAt);
  const hash = hashAt === -1 ? '' : href.slice(hashAt);
  const params = new URLSearchParams();
  params.set(PARAMS.target, value.targetId);
  params.set(PARAMS.utility, value.utility);
  if (value.billChoice) params.set(PARAMS.band, value.billChoice);
  if (value.utilityOther) params.set(PARAMS.other, value.utilityOther);
  return `${base}${base.includes('?') ? '&' : '?'}${params.toString()}${hash}`;
}

/** A QuickStart for targetId read from a query string, or null. */
export function quickStartFromSearch(search: string, targetId: string, now: number): QuickStart | null {
  const params = new URLSearchParams(search);
  if (params.get(PARAMS.target) !== targetId) return null;
  return parseQuickStart(
    {
      source: QUICK_START_SOURCE,
      targetId,
      utility: params.get(PARAMS.utility),
      utilityOther: params.get(PARAMS.other) ?? '',
      billChoice: params.get(PARAMS.band),
      monthlyBill: params.get(PARAMS.band) ? undefined : params.get(PARAMS.bill) ?? undefined,
      topic: '',
      fromPath: '',
      issuedAt: now,
    },
    now,
  );
}

/** The query string without qc_* params ('' when nothing else is left). */
export function withoutQuickStartParams(search: string): string {
  const params = new URLSearchParams(search);
  for (const key of Object.values(PARAMS)) params.delete(key);
  const rest = params.toString();
  return rest ? `?${rest}` : '';
}

// --- Browser side (guarded; every call is optional) ---------------------------

/** Keep the handoff for the next page. False when storage is unavailable. */
export function storeQuickStart(value: QuickStart): boolean {
  try {
    sessionStorage.setItem(QUICK_START_STORAGE_KEY, JSON.stringify(value));
    return sessionStorage.getItem(QUICK_START_STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

/** Tell a form already on this page. */
export function announceQuickStart(value: QuickStart): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<QuickStart>(QUICK_START_EVENT, { detail: value }));
}

/**
 * Take (read and clear) a handoff addressed to targetId from storage or, when
 * storage was blocked, from the URL. A stale or malformed stored value is
 * cleared too; one addressed to a different form is left for that form.
 */
export function takeQuickStart(targetId: string, now = Date.now()): QuickStart | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(QUICK_START_STORAGE_KEY);
    if (raw) {
      const parsed = parseQuickStart(JSON.parse(raw), now);
      if (!parsed) sessionStorage.removeItem(QUICK_START_STORAGE_KEY);
      else if (parsed.targetId === targetId) {
        sessionStorage.removeItem(QUICK_START_STORAGE_KEY);
        return parsed;
      }
    }
  } catch {
    /* Storage blocked: fall through to the URL. */
  }
  const fromUrl = quickStartFromSearch(window.location.search, targetId, now);
  if (fromUrl) {
    try {
      const { pathname, search, hash } = window.location;
      window.history.replaceState(window.history.state, '', `${pathname}${withoutQuickStartParams(search)}${hash}`);
    } catch {
      /* The params are harmless if they stay. */
    }
  }
  return fromUrl;
}

/** Read a QuickStart from a QUICK_START_EVENT, addressed to targetId. */
export function quickStartFromEvent(event: Event, targetId: string, now = Date.now()): QuickStart | null {
  const parsed = parseQuickStart((event as CustomEvent<unknown>).detail, now);
  return parsed && parsed.targetId === targetId ? parsed : null;
}
