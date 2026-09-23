// =============================================================================
// CRR trust links — one list, used by the footer, the byline, the top strip and
// the trust pages, so a route rename is a one-line change.
//
// /privacy is the existing privacy page; it covers the California do-not-sell
// right in its "Your Rights" section (there is no separate anchor to link, so
// the footer's old /privacy#california-privacy-rights went to the page top
// anyway). /editorial-policy, /how-we-make-money and /sources-we-use are CRR-only
// routes added in design pass 2 (2026-09-22); /corrections already existed.
// =============================================================================

export const TRUST_LINKS = {
  about: { href: '/about', label: 'About' },
  editorialPolicy: { href: '/editorial-policy', label: 'Editorial policy' },
  howWeMakeMoney: { href: '/how-we-make-money', label: 'How we make money' },
  methodology: { href: '/methodology', label: 'Methodology' },
  corrections: { href: '/corrections', label: 'Corrections' },
  sourcesWeUse: { href: '/sources-we-use', label: 'Sources we use' },
  privacy: { href: '/privacy', label: 'Privacy and do-not-sell' },
  author: { href: '/author/chad-simpson', label: 'Chad Simpson' },
} as const;

/** Footer trust column, in reading order. */
export const FOOTER_TRUST_LINKS = [
  TRUST_LINKS.about,
  TRUST_LINKS.editorialPolicy,
  TRUST_LINKS.howWeMakeMoney,
  TRUST_LINKS.methodology,
  TRUST_LINKS.corrections,
  TRUST_LINKS.sourcesWeUse,
  TRUST_LINKS.privacy,
] as const;

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** "2026-09-12" -> "September 12, 2026". Anything else passes through unchanged. */
export function formatTrustDate(value: string, short = false): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(value);
  if (!m) return value;
  const month = MONTHS[Number(m[2]) - 1];
  if (!month) return value;
  return `${short ? month.slice(0, 3) : month} ${Number(m[3])}, ${m[1]}`;
}

/** True when the value starts with an ISO date, so it can go in <time dateTime>. */
export function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}/.test(value);
}
