import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { newsArticles, getNewsBySlug } from '@/lib/glp1-news';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const a = getNewsBySlug(slug);
  if (!a) return { title: 'Article Not Found | GLP1CompareHub' };
  return {
    title: `${a.title} | GLP1CompareHub`,
    description: a.excerpt.slice(0, 160),
    alternates: { canonical: `https://glp1comparehub.com/news/${a.slug}` },
    openGraph: {
      title: a.title,
      description: a.excerpt,
      url: `https://glp1comparehub.com/news/${a.slug}`,
      siteName: 'GLP1CompareHub',
      type: 'article',
      publishedTime: a.publishedDate,
    },
  };
}

export default async function NewsArticlePage({ params }: PageParams) {
  const { slug } = await params;
  const a = getNewsBySlug(slug);
  if (!a) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: a.title,
    datePublished: a.publishedDate,
    dateModified: a.publishedDate,
    author: { '@type': 'Organization', name: a.author },
    publisher: {
      '@type': 'Organization',
      name: 'GLP1CompareHub',
      url: 'https://glp1comparehub.com',
    },
  };

  // Convert simple markdown body to rendered HTML (very basic — handles ## headers,
  // tables, paragraphs, lists). For richer content move to MDX.
  const rendered = renderSimpleMarkdown(a.body);

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <GLP1Header />

      <main>
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <Link href='/news' style={{ color: '#6B7B82' }}>News</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>{a.title.slice(0, 40)}…</span>
            </nav>

            <span
              className='inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full mb-3'
              style={{ backgroundColor: '#E8DCC0', color: '#7A6020' }}
            >
              {a.category}
            </span>

            <h1
              className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.15]'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              {a.title}
            </h1>

            <div className='flex items-center gap-3 text-xs' style={{ color: '#6B7B82' }}>
              <span className='inline-flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> {a.publishedDate}
              </span>
              <span>·</span>
              <span>{a.author}</span>
            </div>
          </div>
        </section>

        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div
            className='max-w-3xl mx-auto px-4 md:px-6 prose prose-slate'
            style={{ color: '#3D5560' }}
          >
            <article
              className='news-article'
              dangerouslySetInnerHTML={{ __html: rendered }}
            />
          </div>
        </section>

        <section className='py-10' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-3xl mx-auto px-4 md:px-6 flex flex-wrap gap-3'>
            <Link
              href='/news'
              className='inline-flex items-center gap-1 text-sm font-semibold px-5 py-2.5 rounded-full'
              style={{ backgroundColor: 'white', color: '#0E2A3A', border: '1.5px solid #0E2A3A' }}
            >
              <ArrowLeft className='h-4 w-4' /> All News
            </Link>
            <Link
              href='/match'
              className='inline-flex items-center gap-1 text-sm font-semibold px-5 py-2.5 rounded-full text-white'
              style={{ backgroundColor: '#D4A33A' }}
            >
              Take the Quiz <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}

// ============================================================
// Bare-bones markdown renderer — h2, paragraphs, tables, lists
// (kept inline to avoid adding a dependency for a single article)
// ============================================================

function renderSimpleMarkdown(md: string): string {
  const lines = md.split('\n');
  const out: string[] = [];
  let inTable = false;
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // h2
    if (line.startsWith('## ')) {
      flushList();
      flushTable();
      out.push(`<h2 style="color:#0E2A3A;font-family:'Playfair Display','Georgia',serif;font-size:1.75rem;font-weight:700;margin-top:2rem;margin-bottom:1rem;">${escape(line.slice(3))}</h2>`);
      continue;
    }

    // table — detect | ... |
    if (line.startsWith('|')) {
      if (!inTable) {
        flushList();
        out.push('<table style="width:100%;border-collapse:collapse;margin:1.5rem 0;background:white;border:1px solid #E5DDC8;border-radius:0.75rem;overflow:hidden;">');
        inTable = true;
      }
      // skip separator row (---)
      if (line.includes('---')) continue;
      const cells = line.split('|').slice(1, -1).map((c) => c.trim());
      const isHeader = i + 1 < lines.length && lines[i + 1].includes('---');
      const tag = isHeader ? 'th' : 'td';
      const tdAttr = isHeader
        ? 'style="background:#F8F4ED;padding:0.75rem 1rem;text-align:left;font-weight:700;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:#6B7B82;border-bottom:1px solid #E5DDC8;"'
        : 'style="padding:0.75rem 1rem;border-top:1px solid #E5DDC8;font-size:0.875rem;color:#3D5560;"';
      out.push(`<tr>${cells.map((c) => `<${tag} ${tdAttr}>${escape(c)}</${tag}>`).join('')}</tr>`);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // list (- or numbered)
    if (line.startsWith('- ') || /^\d+\.\s/.test(line)) {
      if (!inList) {
        out.push('<ul style="margin:1rem 0;padding-left:1.5rem;list-style:disc;">');
        inList = true;
      }
      const content = line.replace(/^(?:-\s|\d+\.\s)/, '');
      out.push(`<li style="margin-bottom:0.5rem;color:#3D5560;">${parseInline(content)}</li>`);
      continue;
    } else if (inList) {
      flushList();
    }

    // paragraph (non-empty line)
    if (line.trim()) {
      out.push(`<p style="margin:1rem 0;color:#3D5560;line-height:1.6;">${parseInline(line.trim())}</p>`);
    }
  }
  flushTable();
  flushList();

  return out.join('\n');

  function flushTable() {
    if (inTable) {
      out.push('</table>');
      inTable = false;
    }
  }
  function flushList() {
    if (inList) {
      out.push('</ul>');
      inList = false;
    }
  }
}

function parseInline(s: string): string {
  // bold + escape
  return escape(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong style="color:#0E2A3A;">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function escape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
