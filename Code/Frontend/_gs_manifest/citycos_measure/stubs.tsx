import * as React from 'react';
export default function Link(props: any) { const { href, children, prefetch, scroll, replace, shallow, passHref, legacyBehavior, ...rest } = props; return React.createElement('a', { href: typeof href === 'string' ? href : href?.pathname, ...rest }, children); }
export function notFound(): never { throw new Error('NEXT_NOT_FOUND'); }
export function redirect(): never { throw new Error('NEXT_REDIRECT'); }
export function permanentRedirect(): never { throw new Error('NEXT_REDIRECT'); }
export function usePathname() { return '/'; }
export function useRouter() { return { push() {}, replace() {}, prefetch() {}, back() {}, refresh() {} }; }
export function useSearchParams() { return new URLSearchParams(); }
export function useParams() { return {}; }
export function headers() { return new Map(); }
export function cookies() { return { get() { return undefined; } }; }
