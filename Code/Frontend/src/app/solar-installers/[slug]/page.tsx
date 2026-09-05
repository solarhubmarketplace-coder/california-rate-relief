import type { Metadata } from 'next';
import {
  ArticleRoute,
  articleMetadata,
  articleStaticParams,
} from '@/components/shared/ArticleRoute';

// Static sibling routes (e.g. /solar-installers/sunrun-review) take precedence
// over this dynamic segment in Next's router, so those hand-built pages are
// unaffected. Only slugs present in article-pages.installer.json render here.
export function generateStaticParams() {
  return articleStaticParams('installer');
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return articleMetadata('installer', slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <ArticleRoute
      cluster="installer"
      slug={slug}
      backHref="/best-solar-companies-california"
      backLabel="All California solar companies"
    />
  );
}
