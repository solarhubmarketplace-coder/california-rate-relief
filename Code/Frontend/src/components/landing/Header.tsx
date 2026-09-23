"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  intakeHrefForPath,
  isCommercialIntentPath,
} from "@/lib/intake-routing";
import { TrustStrip } from "@/components/trust/TrustStrip";

// Trimmed to 5 (redesign D.5, 2026-09-22). The four dropped links (Solar in
// CA, Solar Problems, Batteries, About) are not orphaned — they have homes in
// the footer (see Footer.tsx) and in cross-links from /blog and /battery.
export const HEADER_GUIDE_LINKS = [
  { href: "/solar-cost", label: "Cost" },
  { href: "/best-solar-companies-california", label: "Companies" },
  { href: "/blog", label: "Guides" },
  { href: "/commercial-solar", label: "Commercial" },
  { href: "/tools/solar-panel-calculator", label: "Tools" },
] as const;

export function headerInquiryLabel(isCommercial: boolean, compact = false) {
  if (isCommercial) return compact ? "Commercial" : "Commercial Inquiry";
  return compact ? "Inquiry" : "Solar Inquiry";
}

export function Header() {
  const pathname = usePathname();
  const isCommercial = isCommercialIntentPath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <>
    {/* Slim disclosure line above the header (design pass 2, 22b §3.1). It
        scrolls away; only the header below it is sticky. */}
    <TrustStrip />
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo. The link's accessible name is its visible text ("California
              Rate Relief" + "Solar referrals"), so speech-input users can say
              what they see (WCAG 2.5.3). No aria-label: the old "California
              Rate Relief home" did not contain "Solar referrals" and failed
              Lighthouse label-content-name-mismatch. The mark is decorative
              next to the wordmark, so its alt is empty to avoid reading the
              name twice. */}
          <Link
            href="/"
            className="flex min-w-0 items-center"
          >
            <Image
              src="/img/logo.svg"
              alt=""
              width={36}
              height={36}
              className="h-8 w-8 sm:h-9 sm:w-9"
            />
            <div className="ml-2 min-[360px]:ml-3">
              <span className="block text-[10px] font-bold leading-[1.05] tracking-tight text-foreground min-[360px]:hidden">
                California
                <br />
                Rate Relief
              </span>
              <span className="font-bold text-foreground text-sm sm:text-lg tracking-tight">
                <span className="hidden min-[360px]:inline">California Rate Relief</span>
              </span>
              <span className="hidden text-xs text-muted-foreground -mt-1 font-medium tracking-wide uppercase min-[360px]:block">
                Solar referrals
              </span>
            </div>
          </Link>

          {/* Nav + CTA */}
          <div className="flex items-center gap-1.5 sm:gap-4">
            <nav
              className="hidden lg:flex items-center gap-5"
              aria-label="Guides"
            >
              {HEADER_GUIDE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <button
              ref={menuButtonRef}
              type="button"
              className="lg:hidden min-h-11 rounded-md border border-border px-2.5 text-sm font-semibold text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-3"
              aria-expanded={menuOpen}
              aria-controls="mobile-guide-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? "Close" : "Guides"}
            </button>
            <Button
              asChild
              size="sm"
                className="min-h-11 bg-primary px-2.5 hover:bg-primary/90 text-primary-foreground font-medium transition-colors text-sm sm:px-3"
            >
                <Link
                  href={intakeHrefForPath(pathname)}
                  onClick={() => setMenuOpen(false)}
                >
                <span className="sm:hidden">
                  {headerInquiryLabel(isCommercial, true)}
                </span>
                <span className="hidden sm:inline">
                  {headerInquiryLabel(isCommercial)}
                </span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="hidden xl:inline-flex border-border text-foreground hover:bg-muted font-medium"
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-guide-menu"
            aria-label="Mobile guides"
            className="lg:hidden border-t border-border py-3"
          >
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {HEADER_GUIDE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
    </>
  );
}
