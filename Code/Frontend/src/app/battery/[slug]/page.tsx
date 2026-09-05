import type { Metadata } from 'next';
import {
  ArticleRoute,
  articleMetadata,
  articleStaticParams,
} from '@/components/shared/ArticleRoute';

export function generateStaticParams() {
  return articleStaticParams('battery');
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return articleMetadata('battery', slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <ArticleRoute
      cluster="battery"
      slug={slug}
      backHref="/battery"
      backLabel="All battery guides"
    />
  );
}
