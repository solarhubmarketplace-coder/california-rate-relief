import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleRenderer } from '@/components/shared/ArticleRenderer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { ArticleCTA } from '@/components/shared/ArticleCTA';
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
  return [article, faq];
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
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 max-w-3xl mx-auto w-full"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
          <ArticleRenderer page={page} related={relatedArticles(page)} />
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <TrustedSources domain="crr" variant="compact" palette={SOURCE_PALETTE} />
      </div>
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
}: {
  cluster: ArticleCluster;
  title: string;
  intro: string;
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
          <p className="text-lg text-foreground/80 leading-relaxed mb-10">
            {intro}
          </p>
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
            In-body eligibility CTA. <Header/> above already carries the
            sitewide one, but a hub is where a reader decides whether to act, so
            it gets the same in-body box every article page gets.
          */}
          <ArticleCTA />
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
