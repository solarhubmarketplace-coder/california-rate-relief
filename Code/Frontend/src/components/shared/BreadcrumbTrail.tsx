import Link from 'next/link';
import type { Crumb } from '@/lib/breadcrumb-sections';

/**
 * The visible breadcrumb: Home / <crumbs> / <current page>.
 *
 * Render it from the same `crumbs` array that goes to PublicLayout's
 * `breadcrumbParents` (and `current` = its `breadcrumbLabel`), so the trail a
 * reader sees and the BreadcrumbList schema are one list (Block 5 §5.6).
 * Same markup as the hand-written trails in DecisionPage and GuideShell.
 */
export function BreadcrumbTrail({
  crumbs,
  current,
  className = 'mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground',
}: {
  crumbs: Crumb[];
  current: string;
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <Link href="/" className="hover:text-primary">Home</Link>
      {crumbs.map((crumb) => (
        <span key={crumb.href} className="flex items-center gap-2">
          <span aria-hidden="true">/</span>
          <Link href={crumb.href} className="hover:text-primary">{crumb.label}</Link>
        </span>
      ))}
      <span aria-hidden="true">/</span>
      <span className="text-foreground" aria-current="page">{current}</span>
    </nav>
  );
}
