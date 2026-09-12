import { GROWTH_ROUTES } from './growth-routes.ts';
const COMMERCIAL_BLOG_PREFIXES = [
  '/blog/commercial-solar-',
];

const COMMERCIAL_BLOG_ROUTES = new Set([
  '/blog/solar-carport-california-guide',
  '/blog/what-is-demand-charge-california',
]);

export function isCommercialIntentPath(pathname: string): boolean {
  return pathname === '/commercial-assessment'
    || pathname === '/commercial-solar'
    || pathname.startsWith('/commercial-solar/')
    || COMMERCIAL_BLOG_PREFIXES.some(prefix => pathname.startsWith(prefix))
    || COMMERCIAL_BLOG_ROUTES.has(pathname);
}

export function intakeHrefForPath(pathname: string): string {
  if (isCommercialIntentPath(pathname)) return '/commercial-assessment';
  return GROWTH_ROUTES.includes(pathname) ? '#solar-inquiry' : '/#qualify';
}
