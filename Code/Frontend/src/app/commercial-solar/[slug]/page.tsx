import type { Metadata } from 'next';
import {
  ArticleRoute,
  articleMetadata,
  articleStaticParams,
} from '@/components/shared/ArticleRoute';

export function generateStaticParams() {
  return articleStaticParams('commercial');
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return articleMetadata('commercial', slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <ArticleRoute
      cluster="commercial"
      slug={slug}
      backHref="/commercial-solar"
      backLabel="All commercial solar guides"
    />
  );
}
