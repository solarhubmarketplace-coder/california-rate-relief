import type { Metadata } from 'next';

// /login is the staff CRM sign-in, not a public page (plan 11.4, 2026-09-24).
// It carries noindex here, and robots.ts no longer disallows it, so Google can
// fetch the page and see the noindex. (A robots.txt Disallow alone keeps the
// URL indexable from links; it had been linked from every public page's
// header.) The page itself is a client component, so its metadata lives in
// this server layout.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LoginLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
