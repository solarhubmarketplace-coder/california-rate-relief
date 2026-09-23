import Link from 'next/link';
import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { FOOTER_TRUST_LINKS } from './trust-links';

// =============================================================================
// TrustPageShell — the frame for CRR's short trust pages (/editorial-policy,
// /how-we-make-money, /sources-we-use). Same chrome as /corrections: CRR header
// and footer, breadcrumb, a 3xl reading column, and links to the other trust
// pages at the foot so a reader can move between them.
//
// These routes are CRR-only: middleware.ts serves them on ratereliefca.com and
// 404s them on the other four hosts, so no host detection is needed here.
// =============================================================================

export function TrustPageShell({
  title,
  lede,
  path,
  children,
}: {
  title: string;
  lede: string;
  path: string;
  children: ReactNode;
}) {
  const others = FOOTER_TRUST_LINKS.filter((l) => l.href !== path);
  return (
    <PublicLayout breadcrumbLabel={title}>
      <Header />
      <main className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-foreground">{title}</span>
            </nav>
            <header className="mb-8 border-b border-border pb-6">
              <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-foreground">{title}</h1>
              <p className="text-lg text-muted-foreground">{lede}</p>
            </header>
            <div className="space-y-8 leading-relaxed text-foreground/80 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_li]:leading-relaxed [&_p+p]:mt-3">
              {children}
            </div>
            <nav aria-label="Trust and policies" className="mt-12 border-t border-border pt-6 text-sm">
              <p className="mb-3 font-semibold text-foreground">More about how this site works</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {others.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-primary underline underline-offset-2 hover:no-underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
