import { ReactNode } from 'react';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';

interface PublicLayoutProps {
  children: ReactNode;
  /**
   * Overrides the breadcrumb label derived from the URL slug — pass the page's
   * real h1 when the slug does not title-case into it cleanly.
   */
  breadcrumbLabel?: string;
  /**
   * The crumb between Home and this page, when the page's visible breadcrumb
   * has one that the URL alone cannot supply (a hub or index page).
   */
  breadcrumbParent?: { label: string; href: string };
  /**
   * Every crumb between Home and this page, when there is more than one or the
   * trail comes from a shell (lib/breadcrumbs.ts). Takes precedence over
   * `breadcrumbParent`; an empty list means no middle crumb.
   */
  breadcrumbParents?: { label: string; href: string }[];
}

// PublicLayout stays a server component. BreadcrumbJsonLd is a client component
// ('use client'), which a server component may render directly in the App
// Router — that keeps every page using this layout server-rendered while still
// getting BreadcrumbList schema with no per-page edit.
export function PublicLayout({ children, breadcrumbLabel, breadcrumbParent, breadcrumbParents }: PublicLayoutProps) {
  return (
    <div className='min-h-screen bg-background'>
      <BreadcrumbJsonLd currentLabel={breadcrumbLabel} parent={breadcrumbParent} parents={breadcrumbParents} />
      {children}
    </div>
  );
}
