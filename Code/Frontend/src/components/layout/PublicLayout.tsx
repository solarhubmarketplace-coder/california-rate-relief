import { ReactNode } from 'react';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';

interface PublicLayoutProps {
  children: ReactNode;
  /**
   * Overrides the breadcrumb label derived from the URL slug — pass the page's
   * real h1 when the slug does not title-case into it cleanly.
   */
  breadcrumbLabel?: string;
}

// PublicLayout stays a server component. BreadcrumbJsonLd is a client component
// ('use client'), which a server component may render directly in the App
// Router — that keeps every page using this layout server-rendered while still
// getting BreadcrumbList schema with no per-page edit.
export function PublicLayout({ children, breadcrumbLabel }: PublicLayoutProps) {
  return (
    <div className='min-h-screen bg-background'>
      <BreadcrumbJsonLd currentLabel={breadcrumbLabel} />
      {children}
    </div>
  );
}
