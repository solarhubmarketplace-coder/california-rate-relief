// =============================================================================
// intake-routing — where a CRR page's asks (header button, sticky mobile bar,
// IntentCTA boxes, calculators, HeroQuickCheck fallback) send the visitor.
//
// This module ships in the client bundle of every CRR page (Header,
// FloatingMobileCTA, IntentCTA, SavingsCalculator, SolarInquiry and, through
// quick-start.ts, HeroQuickCheck). It must stay free of data imports. Until
// 2026-09-23 it imported GROWTH_ROUTES from ./growth-routes.ts, which pulls in
// all of data/cities-data.ts and data/city-cost-data.ts (about 89 KB gzipped)
// just to answer "is this path in the list?". The answer is now a set of path
// rules that mirror where the forms are actually rendered:
//
//   * every residential content template renders SolarInquiry (#solar-inquiry)
//     since the 2026-09-23 lead-capture placement: city pages, blog, guides,
//     installer and panel reviews, solar-problems, battery, the rate tracker,
//     the calculator and the state pages;
//   * commercial content pages render the inline CommercialAssessmentForm
//     (#commercial-review);
//   * /commercial-assessment is the standalone commercial form;
//   * everything else (home, trust and policy pages, unknown paths) goes to
//     the home page wizard (/#qualify).
//
// GROWTH_ROUTES itself is unchanged and still drives the sitemap, middleware
// and review scripts on the server side. intake-routing.test.ts checks that no
// residential GROWTH_ROUTES entry lost its on-page anchor.
// =============================================================================

/** SolarInquiry's default section id. */
export const RESIDENTIAL_FORM_ID = 'solar-inquiry';
/** sectionId of the inline CommercialAssessmentForm on commercial content pages. */
export const COMMERCIAL_FORM_ID = 'commercial-review';
/** The standalone commercial intake page. */
export const COMMERCIAL_ASSESSMENT_PATH = '/commercial-assessment';
/** The home page QualificationWizard. */
export const HOME_INTAKE_HREF = '/#qualify';

const COMMERCIAL_BLOG_PREFIXES = [
  '/blog/commercial-solar-',
];

const COMMERCIAL_BLOG_ROUTES = new Set([
  '/blog/solar-carport-california-guide',
  '/blog/what-is-demand-charge-california',
]);

/**
 * Sections whose every page renders the residential SolarInquiry. A section
 * matches its own index path and everything below it.
 */
export const RESIDENTIAL_FORM_SECTIONS = [
  '/solar-cost',
  '/solar-companies',
  '/solar-savings',
  '/blog',
  '/solar-installers',
  '/solar-problems',
  '/battery',
  '/panel-reviews',
  '/california-utility-rate-tracker',
  '/tools/solar-panel-calculator',
  '/best-solar-companies-california',
  '/solar-panels-california',
  // State and utility decision pages (DecisionPage templates). The one
  // commercial page among them, /new-jersey/commercial-solar, keeps its form in
  // a section with the same #solar-inquiry id.
  '/new-jersey',
  '/maryland',
  '/virginia',
  '/delaware',
  '/washington-dc',
  '/utilities',
] as const;

function inSection(pathname: string, section: string): boolean {
  return pathname === section || pathname.startsWith(`${section}/`);
}

export function isCommercialIntentPath(pathname: string): boolean {
  return pathname === COMMERCIAL_ASSESSMENT_PATH
    || pathname === '/commercial-solar'
    || pathname.startsWith('/commercial-solar/')
    || COMMERCIAL_BLOG_PREFIXES.some(prefix => pathname.startsWith(prefix))
    || COMMERCIAL_BLOG_ROUTES.has(pathname);
}

/** True when the page at this path renders the residential SolarInquiry. */
export function hasResidentialFormPath(pathname: string): boolean {
  if (isCommercialIntentPath(pathname)) return false;
  return RESIDENTIAL_FORM_SECTIONS.some((section) => inSection(pathname, section));
}

/** True when the page at this path renders the inline commercial form. */
export function hasCommercialFormPath(pathname: string): boolean {
  return isCommercialIntentPath(pathname) && pathname !== COMMERCIAL_ASSESSMENT_PATH;
}

export function intakeHrefForPath(pathname: string): string {
  const path = pathname || '/';
  if (path === COMMERCIAL_ASSESSMENT_PATH) return COMMERCIAL_ASSESSMENT_PATH;
  if (hasCommercialFormPath(path)) return `#${COMMERCIAL_FORM_ID}`;
  if (hasResidentialFormPath(path)) return `#${RESIDENTIAL_FORM_ID}`;
  return HOME_INTAKE_HREF;
}
