import { Children, type ReactNode } from 'react';
import Link from 'next/link';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts, type KeyFact } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import type { FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { TocRail, RAIL_GRID } from '@/components/trust/TocRail';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import type { TopicHubId } from '@/data/topic-hubs';

/**
 * Body frame for a hand-written, sourced guide (topical-authority pages,
 * 2026-09-23). It lays out what DecisionPage lays out (visible breadcrumb, H1,
 * byline, key facts, "On this page" rail, FAQ with FAQPage schema, sources
 * list) plus the HubSpokeLinks block, but it leaves PublicLayout, Header,
 * ArticleJsonLd, the inquiry form and the page copy in the route's own
 * page.tsx. That is deliberate: scripts/qc-gate-tsx.mjs reads only the route
 * source, so the Article schema, the CTA, the compliance sentence and the
 * opening answer have to be written there to be checked.
 *
 * The first `leadCount` children render in the header, under the byline and
 * above the bill-first quick check: the page's direct answer and its
 * disclosure line. Everything after them is the body.
 */
export function GuideShell({
  title,
  eyebrow = 'California solar guide',
  crumbs = [],
  crumbLabel,
  updated,
  sources,
  keyFacts = [],
  faqs = [],
  faqHeading,
  hub,
  path,
  quickCheckTopic,
  inquiry,
  leadCount = 1,
  hubLinksTitle,
  children,
}: {
  title: string;
  eyebrow?: string;
  /** Visible trail between Home and this page; must match PublicLayout's breadcrumbParent. */
  crumbs?: { label: string; href: string }[];
  crumbLabel?: string;
  /** ISO date the page was last updated; the same value the Article schema carries. */
  updated: string;
  sources: Source[];
  keyFacts?: KeyFact[];
  faqs?: FaqJsonLdItem[];
  faqHeading?: string;
  hub: TopicHubId;
  path: string;
  /** Topic for the HeroQuickCheck. Pass null to leave the quick check out. */
  quickCheckTopic: string | null;
  inquiry: ReactNode;
  leadCount?: number;
  hubLinksTitle?: string;
  children: ReactNode;
}) {
  const items = Children.toArray(children);
  const lead = items.slice(0, leadCount);
  const body = items.slice(leadCount);
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:pt-12">
      <div className={RAIL_GRID}>
        <div className="min-w-0">
          <header className="max-w-3xl">
            {crumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary">Home</Link>
                {crumbs.map((c) => (
                  <span key={c.href} className="flex items-center gap-2">
                    <span aria-hidden="true">/</span>
                    <Link href={c.href} className="hover:text-primary">{c.label}</Link>
                  </span>
                ))}
                <span aria-hidden="true">/</span>
                <span className="text-foreground">{crumbLabel || title}</span>
              </nav>
            )}
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{title}</h1>
            <Byline updated={updated} sourceCount={sources.length} sourcesHref="#sources" />
            <div className="mt-5 space-y-3 [&>p:first-child]:text-lg [&>p:first-child]:leading-relaxed [&>p:first-child]:text-foreground/80 [&_a:not([class])]:text-primary [&_a:not([class])]:underline [&_a:not([class])]:underline-offset-2">
              {lead}
            </div>
            {quickCheckTopic && <HeroQuickCheck topic={quickCheckTopic} className="mt-6" />}
          </header>
          <KeyFacts facts={keyFacts} sourcesHref="#sources" className="max-w-3xl" />
          <div id="guide-body" className="mt-8 max-w-3xl [&_h2]:scroll-mt-24">
            <div className="max-w-[72ch] space-y-8 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:leading-relaxed [&_p+p]:mt-3 [&_li]:leading-relaxed [&_ul]:mt-3 [&_ol]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_a:not([class])]:text-primary [&_a:not([class])]:underline [&_a:not([class])]:underline-offset-2">
              {body}
            </div>
            <FaqBlock items={faqs} id="faq" heading={faqHeading} />
            <HubSpokeLinks hub={hub} currentPath={path} title={hubLinksTitle} />
            <SourceList sources={sources} sourceCheckedDate={updated} />
          </div>
          <div data-toc-ignore="" className="max-w-3xl">
            {inquiry}
          </div>
        </div>
        <TocRail rootId="guide-body" />
      </div>
    </main>
  );
}

/** Inline "publisher · checked date" chip placed after a cited claim. */
export { SourceChip as Cite } from '@/components/trust/SourceChip';
