import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { newsArticles } from '@/lib/glp1-news';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'GLP-1 News & Updates — Pricing, FDA, Industry | GLP1CompareHub',
  description:
    'Latest GLP-1 telehealth news. Pricing updates, FDA developments, provider changes, and clinical research.',
  alternates: { canonical: 'https://glp1comparehub.com/news' },
  openGraph: {
    title: 'GLP-1 News & Updates — GLP1CompareHub',
    description: 'Latest pricing, FDA, and industry news for GLP-1 telehealth.',
    url: 'https://glp1comparehub.com/news',
    siteName: 'GLP1CompareHub',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com/' },
    { '@type': 'ListItem', position: 2, name: 'News', item: 'https://glp1comparehub.com/news' },
  ],
};

export default function NewsIndexPage() {
  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <GLP1Header />

      <main>
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>News</span>
            </nav>

            <h1
              className='text-3xl md:text-5xl font-bold mb-4'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              GLP-1 News &amp; Updates
            </h1>
            <p className='text-base md:text-lg max-w-3xl' style={{ color: '#3D5560' }}>
              Latest GLP-1 telehealth pricing changes, FDA developments, and provider news.
            </p>
          </div>
        </section>

        <section className='py-12' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-5xl mx-auto px-4 md:px-6 space-y-5'>
            {newsArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/news/${a.slug}`}
                className='block bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md transition-all hover:-translate-y-1'
                style={{ border: '1px solid #E5DDC8' }}
              >
                <div className='flex items-center gap-3 text-xs mb-2' style={{ color: '#6B7B82' }}>
                  <span
                    className='inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full'
                    style={{ backgroundColor: '#E8DCC0', color: '#7A6020' }}
                  >
                    {a.category}
                  </span>
                  <span className='inline-flex items-center gap-1'>
                    <Calendar className='h-3 w-3' /> {a.publishedDate}
                  </span>
                  <span>·</span>
                  <span>{a.author}</span>
                </div>
                <h2 className='text-xl md:text-2xl font-bold mb-2' style={{ color: '#0E2A3A' }}>
                  {a.title}
                </h2>
                <p className='text-sm mb-3 leading-relaxed' style={{ color: '#3D5560' }}>
                  {a.excerpt}
                </p>
                <span className='inline-flex items-center gap-1 text-sm font-semibold' style={{ color: '#D4A33A' }}>
                  Read more <ArrowRight className='h-3.5 w-3.5' />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
