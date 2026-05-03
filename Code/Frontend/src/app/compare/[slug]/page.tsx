import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { glp1Providers, getProviderBySlug } from '@/lib/glp1-providers';
import { allPageRoutes } from '@/lib/glp1-page-routes';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import { Star, ExternalLink, CircleCheck, X, ArrowRight } from 'lucide-react';

// ============================================================
// SSG: enumerate all vs-page slugs from the page-routes registry
// ============================================================

export function generateStaticParams() {
  return allPageRoutes
    .filter((r) => r.template === 'provider-vs-provider')
    .map((r) => ({ slug: r.path.replace('/compare/', '') }));
}

interface PageParams {
  params: Promise<{ slug: string }>;
}

function parseSlug(slug: string): { a: string; b: string } | null {
  const parts = slug.split('-vs-');
  if (parts.length !== 2) return null;
  return { a: parts[0], b: parts[1] };
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return { title: 'Comparison Not Found | GLP1CompareHub' };
  const a = getProviderBySlug(parsed.a);
  const b = getProviderBySlug(parsed.b);
  if (!a || !b) return { title: 'Comparison Not Found | GLP1CompareHub' };
  return {
    title: `${a.name} vs ${b.name} 2026 — GLP-1 Provider Comparison | GLP1CompareHub`,
    description:
      `Side-by-side comparison of ${a.name} and ${b.name}. Pricing, medications, pros, cons, and which is best for your needs.`,
    alternates: { canonical: `https://glp1comparehub.com/compare/${slug}` },
    openGraph: {
      title: `${a.name} vs ${b.name} — GLP-1 Comparison`,
      description: `${a.name} (${a.monthlyPrice}) vs ${b.name} (${b.monthlyPrice}). Side-by-side review.`,
      url: `https://glp1comparehub.com/compare/${slug}`,
      siteName: 'GLP1CompareHub',
      type: 'article',
    },
  };
}

// ============================================================

export default async function CompareVsPage({ params }: PageParams) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) notFound();
  const a = getProviderBySlug(parsed.a);
  const b = getProviderBySlug(parsed.b);
  if (!a || !b || a.status !== 'Active' || b.status !== 'Active') notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com/' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://glp1comparehub.com/compare' },
      { '@type': 'ListItem', position: 3, name: `${a.name} vs ${b.name}`, item: `https://glp1comparehub.com/compare/${slug}` },
    ],
  };

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#FFF1D6', borderColor: '#E8DDD0' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#8A6D1A' }}>
          <strong>Affiliate Disclosure:</strong> Comparisons are independent of commission rates.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Full disclosure</Link>.
        </div>
      </div>

      <main>
        {/* Header */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FFF6E8' }}>
          <div className='max-w-6xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#7A6478' }}>Home</Link>
              <span style={{ color: '#7A6478' }}> / </span>
              <Link href='/compare' style={{ color: '#7A6478' }}>Compare</Link>
              <span style={{ color: '#7A6478' }}> / </span>
              <span style={{ color: '#3A1B3D' }}>{a.name} vs {b.name}</span>
            </nav>

            <h1
              className='text-3xl md:text-5xl font-bold mb-4'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              {a.name} <span style={{ color: '#F47C5B' }}>vs</span> {b.name}
            </h1>
            <p className='text-base md:text-lg max-w-3xl' style={{ color: '#4B3548' }}>
              Side-by-side comparison of {a.name} ({a.monthlyPrice}) and {b.name} ({b.monthlyPrice}).
              Pricing, medications, features, pros, and cons in one view.
            </p>
          </div>
        </section>

        {/* Side-by-side cards */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FDF7F0' }}>
          <div className='max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-5 md:gap-6'>
            <CompareCard provider={a} sourcePage={`compare-${slug}`} />
            <CompareCard provider={b} sourcePage={`compare-${slug}`} />
          </div>
        </section>

        {/* Quick verdict (heuristic) */}
        <section className='py-12 bg-white'>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Which Should You Pick?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <VerdictBlock provider={a} reason={a.bottomLine ?? `${a.name} is best when ${a.bestFor.toLowerCase()}.`} />
              <VerdictBlock provider={b} reason={b.bottomLine ?? `${b.name} is best when ${b.bestFor.toLowerCase()}.`} />
            </div>
            <p className='text-xs mt-5 italic' style={{ color: '#7A6478' }}>
              Both verdicts above reflect the editorial summary on each provider&rsquo;s detail page.
              For your specific situation, take the{' '}
              <Link href='/match' className='underline'>match quiz</Link>.
            </p>
          </div>
        </section>

        {/* Related comparisons */}
        <section className='py-12' style={{ backgroundColor: '#FFF6E8' }}>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Related Comparisons
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
              {allPageRoutes
                .filter(
                  (r) =>
                    r.template === 'provider-vs-provider' &&
                    r.path !== `/compare/${slug}` &&
                    (r.path.includes(a.slug) || r.path.includes(b.slug))
                )
                .slice(0, 4)
                .map((r) => {
                  const otherSlug = r.path.replace('/compare/', '');
                  const [oa, ob] = otherSlug.split('-vs-');
                  const oaName = getProviderBySlug(oa)?.name ?? oa;
                  const obName = getProviderBySlug(ob)?.name ?? ob;
                  return (
                    <Link
                      key={r.path}
                      href={r.path}
                      className='block bg-white rounded-xl p-4 transition-all hover:-translate-y-0.5'
                      style={{ border: '1px solid #E8DDD0' }}
                    >
                      <div className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#7A6478' }}>
                        Compare
                      </div>
                      <div className='text-sm font-bold' style={{ color: '#3A1B3D' }}>
                        {oaName} <span style={{ color: '#F47C5B' }}>vs</span> {obName}
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FDF7F0' }}>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #F47C5B 0%, #F09A65 50%, #EFC079 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Still deciding?
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Our 60-second quiz matches you to the right provider based on insurance, medication preference, and budget.
              </p>
              <Link
                href='/match'
                className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                style={{ color: '#F47C5B' }}
              >
                Take the Quiz <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}

function CompareCard({ provider, sourcePage }: { provider: typeof glp1Providers[number]; sourcePage: string }) {
  const affiliateUrl = buildGlp1AffiliateUrl(provider.slug, sourcePage);
  const cc = categoryColor(provider.category);

  return (
    <div
      className='bg-white rounded-2xl p-6 shadow-sm flex flex-col'
      style={{ border: '1px solid #E8DDD0' }}
    >
      <span
        className='inline-block self-start text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full mb-3'
        style={{ backgroundColor: cc.bg, color: cc.fg }}
      >
        {provider.category}
      </span>

      <h3 className='text-2xl font-bold mb-1' style={{ color: '#3A1B3D' }}>
        {provider.name}
      </h3>
      {provider.tagline && (
        <p className='text-sm italic mb-4' style={{ color: '#7A6478' }}>{provider.tagline}</p>
      )}

      {/* Pricing block */}
      <div className='mb-4 p-4 rounded-xl' style={{ backgroundColor: '#FFF6E8' }}>
        <div className='text-[10px] font-bold uppercase tracking-widest mb-1' style={{ color: '#7A6478' }}>
          Starting at
        </div>
        <div className='text-2xl font-bold' style={{ color: '#F47C5B' }}>{provider.monthlyPrice}</div>
      </div>

      {/* Medications */}
      <div className='mb-4'>
        <div className='text-xs font-bold uppercase tracking-wider mb-1.5' style={{ color: '#7A6478' }}>Medications</div>
        <div className='text-sm' style={{ color: '#4B3548' }}>{provider.medications}</div>
        {provider.medicationType && provider.medicationType.length > 0 && (
          <div className='flex flex-wrap gap-1.5 mt-2'>
            {provider.medicationType.map((mt) => (
              <span
                key={mt}
                className='text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full'
                style={{ backgroundColor: '#EDE5F2', color: '#5C3A7B' }}
              >
                {mt}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Ratings */}
      <div className='mb-4 flex items-center gap-4 text-sm'>
        {provider.rating > 0 && (
          <span className='inline-flex items-center gap-1' style={{ color: '#3A1B3D' }}>
            <Star className='h-4 w-4 fill-current' style={{ color: '#F47C5B' }} />
            <strong>{provider.rating.toFixed(1)}</strong> Trustpilot
          </span>
        )}
        {provider.bbbRating && (
          <span style={{ color: '#3A1B3D' }}>
            <strong>{provider.bbbRating}</strong> BBB
          </span>
        )}
      </div>

      {/* Pros (top 3) */}
      {provider.pros && provider.pros.length > 0 && (
        <div className='mb-3'>
          <div className='text-xs font-bold uppercase tracking-wider mb-1.5' style={{ color: '#1F6B3D' }}>Pros</div>
          <ul className='space-y-1'>
            {provider.pros.slice(0, 3).map((p) => (
              <li key={p} className='flex items-start gap-1.5 text-xs' style={{ color: '#4B3548' }}>
                <CircleCheck className='h-3.5 w-3.5 mt-0.5 flex-shrink-0' style={{ color: '#5FBFAA' }} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cons (top 3) */}
      {provider.cons && provider.cons.length > 0 && (
        <div className='mb-5'>
          <div className='text-xs font-bold uppercase tracking-wider mb-1.5' style={{ color: '#B14739' }}>Cons</div>
          <ul className='space-y-1'>
            {provider.cons.slice(0, 3).map((c) => (
              <li key={c} className='flex items-start gap-1.5 text-xs' style={{ color: '#4B3548' }}>
                <X className='h-3.5 w-3.5 mt-0.5 flex-shrink-0' style={{ color: '#B14739' }} />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTAs */}
      <div className='mt-auto flex gap-2 pt-2'>
        <Link
          href={`/providers/${provider.slug}`}
          className='flex-1 inline-flex items-center justify-center gap-1 text-sm font-semibold py-2.5 rounded-full transition-all'
          style={{ border: '1.5px solid #3A1B3D', color: '#3A1B3D' }}
        >
          Full Review
        </Link>
        <a
          href={affiliateUrl}
          target='_blank'
          rel='sponsored nofollow noopener noreferrer'
          className='flex-1 inline-flex items-center justify-center gap-1 text-sm font-semibold py-2.5 rounded-full transition-all hover:-translate-y-0.5 text-white'
          style={{ backgroundColor: '#F47C5B' }}
        >
          Visit Site <ExternalLink className='h-3.5 w-3.5' />
        </a>
      </div>
    </div>
  );
}

function VerdictBlock({ provider, reason }: { provider: typeof glp1Providers[number]; reason: string }) {
  return (
    <div
      className='p-5 rounded-2xl'
      style={{ backgroundColor: '#FDF7F0', border: '1px solid #E8DDD0' }}
    >
      <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#F47C5B' }}>
        Pick {provider.name} if…
      </div>
      <p className='text-sm leading-relaxed' style={{ color: '#4B3548' }}>{reason}</p>
    </div>
  );
}

function categoryColor(c: typeof glp1Providers[number]['category']) {
  const map = {
    Telemedicine: { bg: '#FFE5D9', fg: '#B14739' },
    'Compounding Pharmacy': { bg: '#D4F1E8', fg: '#1F6B3D' },
    'Manufacturer Program': { bg: '#EDE5F2', fg: '#5C3A7B' },
    Hybrid: { bg: '#FFF1D6', fg: '#8A6D1A' },
  };
  return map[c];
}
