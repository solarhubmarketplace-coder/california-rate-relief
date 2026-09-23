import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleRenderer, articleWordCount } from '@/components/shared/ArticleRenderer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { IntentCTA } from '@/components/growth/IntentCTA';
import {
  CommercialReviewButton,
  CommercialReviewForm,
} from '@/components/growth/CommercialReview';
import type { ArticleCluster, ArticlePage } from '@/data/article-types';
import {
  getArticle,
  articleSlugs,
  articlesInCluster,
  relatedArticles,
  articleHref,
  CLUSTER_BASE,
} from '@/data/article-pages';

/**
 * Shared plumbing for the four data-driven clusters, so canonical tags,
 * JSON-LD and static params are defined once rather than drifting per route.
 */

const SOURCE_PALETTE = {
  fg: 'hsl(var(--foreground))',
  muted: 'hsl(var(--foreground) / 0.85)',
  mutedFg: 'hsl(var(--muted-foreground))',
  accent: 'hsl(var(--primary))',
  cardBg: 'hsl(var(--card))',
  cardBorder: 'hsl(var(--border))',
};

const BASE_URL = 'https://ratereliefca.com';

export function articleMetadata(
  cluster: ArticleCluster,
  slug: string,
): Metadata {
  const page = getArticle(cluster, slug);
  if (!page) return {};
  const url = `${CLUSTER_BASE[cluster]}/${page.slug}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: 'article',
      url: `${BASE_URL}${url}`,
    },
  };
}

export function articleStaticParams(cluster: ArticleCluster) {
  return articleSlugs(cluster).map((slug) => ({ slug }));
}

function buildSchema(page: ArticlePage) {
  const url = `${BASE_URL}${articleHref(page)}`;
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.h1,
    description: page.metaDescription,
    dateModified: page.reviewedAt,
    author: {
      '@type': 'Organization',
      name: 'California Rate Relief Program',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'California Rate Relief Program',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/img/logo.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    citation: page.sources.map((s) => s.url),
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
  // No FAQPage node for a page with no questions: an empty mainEntity is an
  // invalid FAQPage. The visible block (FaqBlock) also renders nothing then.
  return page.faqs.length > 0 ? [article, faq] : [article];
}

/**
 * A page over this many words of prose gets one in-content ask halfway
 * through its sections, pointing at the form at the end of the page.
 */
export const LONG_ARTICLE_WORDS = 2500;

/** Inquiry topic for a cluster page: its H1 up to the first colon. */
function articleTopic(page: ArticlePage): string {
  return page.h1.split(':')[0].trim() || page.h1;
}

export function ArticleRoute({
  cluster,
  slug,
  backHref,
  backLabel,
}: {
  cluster: ArticleCluster;
  slug: string;
  backHref: string;
  backLabel: string;
}) {
  const page = getArticle(cluster, slug);
  if (!page) notFound();
  const isSgip = cluster === 'battery' && slug === 'sgip-battery-rebate-california';
  const commercial = cluster === 'commercial';
  const topic = isSgip ? 'SGIP residential solar and storage' : articleTopic(page);
  const long = articleWordCount(page) > LONG_ARTICLE_WORDS;

  // Lead capture (2026-09-23). Residential clusters: the bill-first quick
  // check after the intro and SolarInquiry as the closing ask. Commercial
  // cluster: no quick check, the inline commercial form as the closing ask and
  // one mid-page button that scrolls to it. A long residential page also gets
  // one mid-article box pointing at its form.
  const quickCheck = commercial ? undefined : (
    <HeroQuickCheck topic={topic} className="mb-8" />
  );
  const midArticle = commercial ? (
    <CommercialReviewButton />
  ) : long ? (
    <IntentCTA cta="mid_article" className="mb-10" />
  ) : undefined;
  const inquiry = commercial ? (
    <CommercialReviewForm className="mt-12" />
  ) : (
    <>
      {isSgip && (
        <p className="mt-10 text-sm">
          California Rate Relief is a private solar referral service. This inquiry is not an SGIP
          application or eligibility decision.{' '}
          <Link className="text-primary underline" href="/commercial-solar/sgip-battery-storage">
            Commercial storage projects
          </Link>{' '}
          follow a separate review.
        </p>
      )}
      <SolarInquiry topic={topic} />
    </>
  );

  return (
    <PublicLayout>
      <Header />
      {buildSchema(page).map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          {/* Same max-w-6xl frame as ArticleRenderer's article + rail grid, so
              the back link lines up with the article column. */}
          <div className="mx-auto mb-6 max-w-6xl">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              {backLabel}
            </Link>
          </div>
          <ArticleRenderer page={page} related={relatedArticles(page)}
            quickCheck={quickCheck} midArticle={midArticle} inquiry={inquiry}
            tools={isSgip?<nav aria-label="SGIP decision tools" className="my-6 flex flex-wrap gap-4 text-sm font-semibold text-primary underline"><Link href="/tools/solar-panel-calculator">Check the quote without a rebate</Link><Link href="/blog/solar-battery-backup-california">Compare battery and backup needs</Link><Link href="#solar-inquiry">Optional solar inquiry</Link></nav>:undefined}/>
          {/* Was rendered after <Footer />; moved inside main so it sits above
              the footer, aligned with the article column. */}
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <TrustedSources domain="crr" variant="compact" palette={SOURCE_PALETTE} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}

/**
 * Schema for a cluster index — CollectionPage, not Article.
 *
 * An ArticleHub renders a heading, a short standfirst and a list of links. The
 * writing it points at lives on the child routes, and every one of those emits
 * its own Article node via buildSchema() above. Calling the index an Article
 * would claim the list is the piece of writing and would leave two Article
 * nodes competing for the same subject, so the type here is CollectionPage with
 * an ItemList of exactly the links the page renders.
 *
 * dateModified is the newest reviewedAt among the articles listed — a date that
 * already exists in the cluster data. No date is invented here.
 */
function buildHubSchema(
  cluster: ArticleCluster,
  title: string,
  intro: string,
  pages: ArticlePage[],
) {
  const url = `${BASE_URL}${CLUSTER_BASE[cluster]}`;
  const reviewed = pages
    .map((p) => p.reviewedAt)
    .filter(Boolean)
    .sort();
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description: intro,
    url,
    ...(reviewed.length ? { dateModified: reviewed[reviewed.length - 1] } : {}),
    isPartOf: {
      '@type': 'WebSite',
      name: 'California Rate Relief',
      url: BASE_URL,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: pages.length,
      itemListElement: pages.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE_URL}${articleHref(p)}`,
        name: p.h1,
      })),
    },
  };
}

/** Index page listing every article in a cluster. */
export function ArticleHub({
  cluster,
  title,
  intro,
  content,
}: {
  cluster: ArticleCluster;
  title: string;
  intro: string;
  /** Optional hub-specific guidance rendered before the cluster list. */
  content?: ReactNode;
}) {
  const pages = articlesInCluster(cluster);
  return (
    <PublicLayout>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildHubSchema(cluster, title, intro, pages)),
        }}
      />
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            {intro}
          </p>
          {cluster !== 'commercial' && (
            <HeroQuickCheck topic={title} className="mb-10" />
          )}
          {content}
          {pages.length === 0 ? (
            <p className="text-muted-foreground">
              Guides in this section are being published now. Check back shortly.
            </p>
          ) : (
            <div className="space-y-4">
              {pages.map((p) => (
                <Link
                  key={p.slug}
                  href={articleHref(p)}
                  className="group block rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                >
                  <span className="block font-semibold text-foreground group-hover:text-primary">
                    {p.h1}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {p.metaDescription}
                  </span>
                </Link>
              ))}
            </div>
          )}
          {/*
            In-body ask. <Header/> above already carries the sitewide one, but a
            hub is where a reader decides whether to act. Since 2026-09-23 it is
            the inquiry form itself (the link-only ArticleCTA box it replaced
            pointed at the home page), opened at step 2 by the quick check above.
          */}
          {cluster === 'commercial' ? (
            <CommercialReviewForm className="mt-12" />
          ) : (
            <SolarInquiry topic={title} />
          )}
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
