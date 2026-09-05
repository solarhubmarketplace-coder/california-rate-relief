import type { ArticlePage, ArticleCluster } from './article-types';

/**
 * Registry for data-driven long-form pages.
 *
 * Content lives in per-cluster JSON files so that scripts/qc-gate.mjs and the
 * Next build read the same source of truth — a page cannot pass QC and then
 * ship in a different form. The JSON files are generated; this module is the
 * typed boundary around them.
 *
 * Each file is optional: the site builds fine before a cluster exists.
 */

import commercialJson from './article-pages.commercial.json';
import batteryJson from './article-pages.battery.json';
import installerJson from './article-pages.installer.json';
import problemsJson from './article-pages.problems.json';

const ALL: ArticlePage[] = [
  ...(commercialJson as ArticlePage[]),
  ...(batteryJson as ArticlePage[]),
  ...(installerJson as ArticlePage[]),
  ...(problemsJson as ArticlePage[]),
];

export const ARTICLE_PAGES: ArticlePage[] = ALL;

export function articlesInCluster(cluster: ArticleCluster): ArticlePage[] {
  return ALL.filter((p) => p.cluster === cluster);
}

export function getArticle(
  cluster: ArticleCluster,
  slug: string,
): ArticlePage | undefined {
  return ALL.find((p) => p.cluster === cluster && p.slug === slug);
}

export function articleSlugs(cluster: ArticleCluster): string[] {
  return articlesInCluster(cluster).map((p) => p.slug);
}

/** URL prefix each cluster is served from. */
export const CLUSTER_BASE: Record<ArticleCluster, string> = {
  commercial: '/commercial-solar',
  battery: '/battery',
  installer: '/solar-installers',
  problems: '/solar-problems',
};

export function articleHref(p: ArticlePage): string {
  return `${CLUSTER_BASE[p.cluster]}/${p.slug}`;
}

/** Sibling links for the "Related reading" block, same cluster first. */
export function relatedArticles(
  page: ArticlePage,
  limit = 6,
): { href: string; title: string }[] {
  const siblings = ALL.filter(
    (p) => p.cluster === page.cluster && p.slug !== page.slug,
  );
  const others = ALL.filter((p) => p.cluster !== page.cluster);
  return [...siblings, ...others]
    .slice(0, limit)
    .map((p) => ({ href: articleHref(p), title: p.h1 }));
}
