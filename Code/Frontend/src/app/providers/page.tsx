import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { glp1Providers, ProviderCategory } from '@/lib/glp1-providers';
import { GLP1HeroPlaceholder } from '@/components/glp1/GLP1HeroPlaceholder';
import { ShieldCheck, Calendar, BadgeCheck, Star, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All GLP-1 Providers — Complete 2026 Directory | GLP1CompareHub',
  description:
    'Side-by-side directory of GLP-1 telehealth providers and compounding pharmacies with live pricing. Compare semaglutide, tirzepatide, Wegovy, Zepbound, and compounded options. Last updated May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/providers' },
  openGraph: {
    title: 'All GLP-1 Providers (2026) — Compare 50+ Telehealth & Pharmacy Options',
    description:
      'Complete directory of GLP-1 providers with verified pricing. Telemedicine, compounding pharmacies, and manufacturer programs in one comparison.',
    url: 'https://glp1comparehub.com/providers',
    siteName: 'GLP1CompareHub',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com/' },
    { '@type': 'ListItem', position: 2, name: 'Providers', item: 'https://glp1comparehub.com/providers' },
  ],
};

export default function ProvidersDirectoryPage() {
  // Group active providers by category (matchglp1 model)
  const active = glp1Providers.filter((p) => p.status === 'Active');
  const telemedicine = active.filter((p) => p.category === 'Telemedicine');
  const compoundingPharmacies = active.filter((p) => p.category === 'Compounding Pharmacy');
  const manufacturerPrograms = active.filter((p) => p.category === 'Manufacturer Program');
  const hybrid = active.filter((p) => p.category === 'Hybrid');

  // Stats for the directory header strip
  const totalProviders = active.length;
  const minPrice = '$99/mo';

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'GLP-1 Provider Directory',
    numberOfItems: totalProviders,
    itemListElement: active.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://glp1comparehub.com/providers/${p.slug}`,
      name: p.name,
    })),
  };

  return (
    <GLP1Layout>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <GLP1Header />

      {/* Affiliate disclosure strip */}
      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div
          className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center'
          style={{ color: '#7A6020' }}
        >
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a
          commission — at no extra cost to you.{' '}
          <Link href='/affiliate-disclosure' className='underline'>
            Full disclosure
          </Link>
          .
        </div>
      </div>

      <main>
        {/* Page header */}
        <section className='py-10 md:py-16' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>
                Home
              </Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>Providers</span>
            </nav>

            <h1
              className='text-3xl md:text-5xl font-bold mb-4'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              All GLP-1 Providers — Complete 2026 Directory
            </h1>
            <p className='text-base md:text-lg max-w-3xl mb-6' style={{ color: '#3D5560' }}>
              Side-by-side directory of GLP-1 telehealth providers, compounding pharmacies, and
              manufacturer programs with live pricing.
            </p>

            {/* Stat strip */}
            <div className='flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold' style={{ color: '#0E2A3A' }}>
              <span>
                <strong style={{ color: '#D4A33A' }}>{totalProviders} providers</strong> tracked
              </span>
              <span style={{ color: '#6B7B82' }}>·</span>
              <span>
                Prices from <strong style={{ color: '#D4A33A' }}>{minPrice}</strong>
              </span>
              <span style={{ color: '#6B7B82' }}>·</span>
              <span>Last updated May 2026</span>
            </div>

            {/* Trust badges */}
            <div className='flex flex-wrap items-center gap-4 mt-6 text-xs' style={{ color: '#3D5560' }}>
              <div className='flex items-center gap-1.5'>
                <ShieldCheck className='h-4 w-4' style={{ color: '#7CA982' }} />
                Medically Reviewed
              </div>
              <div className='flex items-center gap-1.5'>
                <BadgeCheck className='h-4 w-4' style={{ color: '#7CA982' }} />
                Independent Research
              </div>
              <div className='flex items-center gap-1.5'>
                <Calendar className='h-4 w-4' style={{ color: '#7CA982' }} />
                Updated Weekly
              </div>
            </div>
          </div>
        </section>

        {/* Provider sections by category */}
        {telemedicine.length > 0 && (
          <ProviderSection title='Telemedicine Providers' category='Telemedicine' providers={telemedicine} />
        )}
        {compoundingPharmacies.length > 0 && (
          <ProviderSection title='Compounding Pharmacies' category='Compounding Pharmacy' providers={compoundingPharmacies} />
        )}
        {manufacturerPrograms.length > 0 && (
          <ProviderSection title='Manufacturer Programs' category='Manufacturer Program' providers={manufacturerPrograms} />
        )}
        {hybrid.length > 0 && (
          <ProviderSection title='Hybrid Programs' category='Hybrid' providers={hybrid} />
        )}

        {/* Final CTA */}
        <section className='py-12 md:py-16' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-3xl mx-auto px-4 md:px-6 text-center'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-4'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Not sure which provider is right for you?
            </h2>
            <p className='text-base mb-7' style={{ color: '#3D5560' }}>
              Take our 60-second quiz to get personalized provider recommendations based on your
              budget, medication preference, and insurance status.
            </p>
            <Link
              href='/match'
              className='inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md hover:shadow-xl'
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
// Section component (one per category)
// ============================================================

function ProviderSection({
  title,
  category,
  providers,
}: {
  title: string;
  category: ProviderCategory;
  providers: typeof glp1Providers;
}) {
  const categoryColor: Record<ProviderCategory, { bg: string; fg: string }> = {
    Telemedicine: { bg: '#E8DCC0', fg: '#7A6020' },
    'Compounding Pharmacy': { bg: '#D9E8D4', fg: '#2D5A3D' },
    'Manufacturer Program': { bg: '#DEE5E8', fg: '#385560' },
    Hybrid: { bg: '#F4EBD0', fg: '#7A6020' },
  };
  const cc = categoryColor[category];

  return (
    <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        <div className='flex items-baseline gap-3 mb-2 flex-wrap'>
          <h2
            className='text-2xl md:text-3xl font-bold'
            style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
          >
            {title}
          </h2>
          <span
            className='inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full'
            style={{ backgroundColor: cc.bg, color: cc.fg }}
          >
            {providers.length} {providers.length === 1 ? 'Provider' : 'Providers'}
          </span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-6'>
          {providers.map((p) => (
            <DirectoryCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Single directory card
// ============================================================

function DirectoryCard({ p }: { p: typeof glp1Providers[number] }) {
  const categoryColor: Record<ProviderCategory, { bg: string; fg: string }> = {
    Telemedicine: { bg: '#E8DCC0', fg: '#7A6020' },
    'Compounding Pharmacy': { bg: '#D9E8D4', fg: '#2D5A3D' },
    'Manufacturer Program': { bg: '#DEE5E8', fg: '#385560' },
    Hybrid: { bg: '#F4EBD0', fg: '#7A6020' },
  };
  const cc = categoryColor[p.category];

  return (
    <div
      className='relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border flex flex-col'
      style={{ borderColor: '#E5DDC8' }}
    >
      {/* Hero thumbnail — real image if available, otherwise category-colored placeholder */}
      <div
        className='relative w-full'
        style={{ aspectRatio: '16 / 9', backgroundColor: '#F8F4ED' }}
      >
        {p.heroImage ? (
          <Image
            src={p.heroImage}
            alt={`${p.name} hero`}
            fill
            sizes='(max-width: 768px) 100vw, 33vw'
            className='object-cover'
          />
        ) : (
          <GLP1HeroPlaceholder name={p.name} category={p.category} />
        )}
      </div>

      <div className='relative p-5 flex-1 flex flex-col'>
        <div
          className='absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-bl-xl'
          style={{ backgroundColor: '#D4A33A', color: 'white' }}
        >
          Updated
        </div>

        <span
          className='inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full mb-3 self-start'
          style={{ backgroundColor: cc.bg, color: cc.fg }}
        >
          {p.category}
        </span>

      <h3 className='text-lg font-bold mb-1.5' style={{ color: '#0E2A3A' }}>
        {p.name}
      </h3>
      {p.tagline && (
        <p className='text-xs mb-2.5 italic' style={{ color: '#6B7B82' }}>
          {p.tagline}
        </p>
      )}
      {p.description && (
        <p className='text-sm leading-relaxed mb-4 line-clamp-3' style={{ color: '#3D5560' }}>
          {p.description}
        </p>
      )}

      <div className='flex items-center justify-between mb-4'>
        <div>
          <div className='text-[11px] font-medium' style={{ color: '#6B7B82' }}>
            From
          </div>
          <div className='text-base font-bold' style={{ color: '#0E2A3A' }}>
            {p.monthlyPrice}
          </div>
        </div>
        {p.rating > 0 && (
          <div className='flex items-center gap-1'>
            <Star className='h-4 w-4 fill-current' style={{ color: '#D4A33A' }} />
            <span className='text-sm font-bold' style={{ color: '#0E2A3A' }}>
              {p.rating.toFixed(1)}
            </span>
          </div>
        )}
      </div>

      <div className='flex gap-2 mt-auto'>
        <Link
          href={`/providers/${p.slug}`}
          className='flex-1 inline-flex items-center justify-center gap-1 text-sm font-semibold py-2.5 rounded-full text-white transition-all hover:-translate-y-0.5'
          style={{ backgroundColor: '#0E2A3A' }}
        >
          Learn More <ArrowRight className='h-3.5 w-3.5' />
        </Link>
        <Link
          href={`/providers/${p.slug}#visit`}
          className='inline-flex items-center justify-center gap-1 text-sm font-semibold py-2.5 px-4 rounded-full transition-all'
          style={{ border: '1.5px solid #0E2A3A', color: '#0E2A3A' }}
        >
          Visit Site
        </Link>
      </div>
      </div>
    </div>
  );
}
