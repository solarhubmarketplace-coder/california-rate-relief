import type { ReactNode } from 'react';
import Link from 'next/link';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts, type KeyFact } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import type { FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SourceList, type Source } from './DecisionPage';
import { HubSpokeLinks } from './HubSpokeLinks';
import type { TopicHubId } from '@/data/topic-hubs';

// =============================================================================
// CostFinGuideShell — the page chrome for the cost, financing and incentive
// guides added on 2026-09-23 (topical-authority wave, agent "costfin").
//
// The page file keeps the parts the QC gate reads from page source:
// <PublicLayout> (breadcrumb schema), <ArticleJsonLd> (one Article node),
// <FaqJsonLd> (FAQPage from the same strings FaqBlock shows) and <SolarInquiry>
// (the page's one ask). This shell renders everything between them: the
// visible breadcrumb, H1, byline, opening answer, key facts, body, sources,
// FAQ, the hub-and-spoke block and the inquiry slot. FaqBlock runs with
// schema={false} so the page never carries two FAQPage nodes.
// =============================================================================

export function CostFinGuideShell({
  eyebrow,
  title,
  intro,
  updated,
  crumbs,
  crumbLabel,
  keyFacts = [],
  sources,
  sourceCheckedDate,
  faqs = [],
  hub,
  path,
  inquiry,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  updated: string;
  crumbs: { label: string; href: string }[];
  crumbLabel: string;
  keyFacts?: KeyFact[];
  sources: Source[];
  sourceCheckedDate: string;
  faqs?: FaqJsonLdItem[];
  hub: TopicHubId;
  path: string;
  inquiry: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-background pb-20 pt-8 md:pt-12">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
            >
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              {crumbs.map((c) => (
                <span key={c.href} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  <Link href={c.href} className="hover:text-primary">
                    {c.label}
                  </Link>
                </span>
              ))}
              <span aria-hidden="true">/</span>
              <span className="text-foreground">{crumbLabel}</span>
            </nav>
            <header>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
                {title}
              </h1>
              <Byline updated={updated} sourceCount={sources.length} sourcesHref="#sources" />
              <div className="mt-5 text-lg leading-relaxed text-foreground/80">{intro}</div>
            </header>
            <KeyFacts facts={keyFacts} sourcesHref="#sources" />
            <div
              id="guide-body"
              className="mt-8 space-y-8 [&_h2]:mb-3 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_li]:leading-relaxed [&_p]:leading-relaxed"
            >
              {children}
            </div>
            <SourceList sources={sources} sourceCheckedDate={sourceCheckedDate} />
            <FaqBlock items={faqs} id="faq" schema={false} />
            <HubSpokeLinks hub={hub} currentPath={path} />
            <div className="mt-10">{inquiry}</div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
