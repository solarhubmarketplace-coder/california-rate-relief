import type { Metadata } from 'next';
import {
  ArticleRoute,
  articleMetadata,
  articleStaticParams,
} from '@/components/shared/ArticleRoute';
import { JsonArticleLinks } from '@/components/growth/JsonArticleLinks';

export function generateStaticParams() {
  return articleStaticParams('problems');
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return articleMetadata('problems', slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <ArticleRoute
      cluster="problems"
      slug={slug}
      backHref="/solar-problems"
      backLabel="All solar problem guides"
      after={<JsonArticleLinks path={`/solar-problems/${slug}`} fallbackHub="rules_permits" />}
    />
  );
}
