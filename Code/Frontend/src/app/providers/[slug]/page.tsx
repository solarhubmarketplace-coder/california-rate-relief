import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { glp1Providers, getProviderBySlug, GLP1Provider } from '@/lib/glp1-providers';
import { GLP1HeroPlaceholder } from '@/components/glp1/GLP1HeroPlaceholder';
import { medicationsForProvider } from '@/lib/glp1-medications';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import {
  ShieldCheck,
  Calendar,
  Star,
  ArrowRight,
  ExternalLink,
  Check,
  X,
  CircleCheck,
  AlertCircle,
} from 'lucide-react';

// ============================================================
// SSG: enumerate all provider slugs
// ============================================================

export function generateStaticParams() {
  return glp1Providers
    .filter((p) => p.status === 'Active')
    .map((p) => ({ slug: p.slug }));
}

// ============================================================
// Per-provider metadata
// ============================================================

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider) {
    return { title: 'Provider Not Found | GLP1CompareHub' };
  }
  return {
    title: `${provider.name} GLP-1 Review 2026 — ${provider.tagline ?? 'Pricing, Medications & How It Works'} | GLP1CompareHub`,
    description:
      provider.description?.slice(0, 160) ??
      `Independent review of ${provider.name}'s GLP-1 program. Pricing, medications, pros & cons, and how it compares to other telehealth providers.`,
    alternates: { canonical: `https://glp1comparehub.com/providers/${provider.slug}` },
    openGraph: {
      title: `${provider.name} Review 2026 — GLP1CompareHub`,
      description: provider.description ?? provider.tagline,
      url: `https://glp1comparehub.com/providers/${provider.slug}`,
      siteName: 'GLP1CompareHub',
      type: 'article',
    },
  };
}

// ============================================================
// Page
// ============================================================

export default async function ProviderDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider || provider.status !== 'Active') {
    notFound();
  }

  const medications = medicationsForProvider(provider.slug);
  const affiliateUrl = buildGlp1AffiliateUrl(provider.slug, 'provider-detail');

  // ----- JSON-LD: BreadcrumbList + MedicalBusiness + WebPage
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com/' },
      { '@type': 'ListItem', position: 2, name: 'Providers', item: 'https://glp1comparehub.com/providers' },
      { '@type': 'ListItem', position: 3, name: provider.name, item: `https://glp1comparehub.com/providers/${provider.slug}` },
    ],
  };
  const medicalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: provider.name,
    description: provider.description ?? provider.tagline,
    url: `https://glp1comparehub.com/providers/${provider.slug}`,
    medicalSpecialty: ['Bariatric', 'Endocrine'],
    aggregateRating:
      provider.rating > 0
        ? {
            '@type': 'AggregateRating',
            ratingValue: provider.rating.toFixed(1),
            ratingCount: 100, // placeholder — replace with real counts when available
            bestRating: 5,
            worstRating: 1,
          }
        : undefined,
  };

  const cc = categoryColor(provider.category);

  return (
    <GLP1Layout>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />

      <GLP1Header />

      {/* Affiliate disclosure */}
      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div
          className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center'
          style={{ color: '#7A6020' }}
        >
          <strong>Affiliate Disclosure:</strong> This review contains affiliate links. We may earn a
          commission if you sign up — at no extra cost to you. Our editorial recommendations are
          not influenced by commission rates.{' '}
          <Link href='/affiliate-disclosure' className='underline'>
            Full disclosure
          </Link>
          .
        </div>
      </div>

      <main>
        {/* HEADER — breadcrumb + name + tagline + CTAs */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <Link href='/providers' style={{ color: '#6B7B82' }}>Providers</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>{provider.name}</span>
            </nav>

            {/* Hero — real image if available, otherwise category-colored placeholder */}
            <div
              className='relative mb-6 rounded-2xl overflow-hidden shadow-md'
              style={{ aspectRatio: '16 / 9', backgroundColor: '#F8F4ED' }}
            >
              {provider.heroImage ? (
                <Image
                  src={provider.heroImage}
                  alt={`${provider.name} GLP-1 program — hero image`}
                  fill
                  sizes='(max-width: 768px) 100vw, 1024px'
                  className='object-cover'
                  priority
                />
              ) : (
                <GLP1HeroPlaceholder name={provider.name} category={provider.category} />
              )}
            </div>

            <div className='flex items-center gap-2 mb-3 flex-wrap'>
              <span
                className='inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full'
                style={{ backgroundColor: cc.bg, color: cc.fg }}
              >
                {provider.category}
              </span>
              <span
                className='inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full'
                style={{ backgroundColor: '#D9E8D4', color: '#2D5A3D' }}
              >
                {provider.status}
              </span>
              {provider.medicationType?.map((mt) => (
                <span
                  key={mt}
                  className='inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full'
                  style={{ backgroundColor: '#DEE5E8', color: '#385560' }}
                >
                  {mt}
                </span>
              ))}
            </div>

            <h1
              className='text-3xl md:text-5xl font-bold mb-2'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              {provider.name}
            </h1>
            {provider.tagline && (
              <p className='text-base md:text-lg italic mb-5' style={{ color: '#6B7B82' }}>
                {provider.tagline}
              </p>
            )}
            {provider.description && (
              <p className='text-base leading-relaxed mb-6 max-w-3xl' style={{ color: '#3D5560' }}>
                {provider.description}
              </p>
            )}

            <div className='flex flex-wrap items-center gap-3'>
              <a
                id='visit'
                href={affiliateUrl}
                target='_blank'
                rel='sponsored nofollow noopener noreferrer'
                className='inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md hover:shadow-xl'
                style={{ backgroundColor: '#D4A33A' }}
              >
                Visit {provider.name} <ExternalLink className='h-4 w-4' />
              </a>
              <Link
                href='/compare'
                className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5'
                style={{ backgroundColor: 'white', color: '#0E2A3A', border: '1.5px solid #0E2A3A' }}
              >
                Compare Options
              </Link>
            </div>
          </div>
        </section>

        {/* STATS CARD ROW */}
        <section className='py-8 -mt-6'>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <div
              className='bg-white rounded-2xl p-5 md:p-6 shadow-md grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2'
              style={{ border: '1px solid #E5DDC8' }}
            >
              <Stat label='Starting Price' value={provider.monthlyPrice} />
              <Stat
                label='Trustpilot Rating'
                value={provider.rating > 0 ? `${provider.rating.toFixed(1)} ★` : 'N/A'}
              />
              <Stat label='BBB Rating' value={provider.bbbRating ?? 'N/A'} />
              <Stat
                label='Cancellation'
                value={provider.cancellation ?? 'N/A'}
              />
            </div>
          </div>
        </section>

        {/* TWO-COLUMN: medications + pros/cons */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-5xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-10'>
            {/* Medications */}
            <div>
              <h2
                className='text-xl md:text-2xl font-bold mb-5'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Medications Available
              </h2>
              {provider.medicationsList && provider.medicationsList.length > 0 ? (
                <ul className='space-y-2.5'>
                  {provider.medicationsList.map((m) => (
                    <li key={m} className='flex items-start gap-2' style={{ color: '#3D5560' }}>
                      <Check
                        className='h-4 w-4 mt-1 flex-shrink-0'
                        style={{ color: '#7CA982' }}
                      />
                      <span className='text-sm'>{m}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className='text-sm' style={{ color: '#6B7B82' }}>
                  {provider.medications}
                </p>
              )}
            </div>

            {/* Pros / Cons */}
            <div>
              <h2
                className='text-xl md:text-2xl font-bold mb-5'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Pros &amp; Cons
              </h2>
              <div className='grid grid-cols-1 gap-4'>
                {provider.pros && provider.pros.length > 0 && (
                  <div>
                    <h3 className='text-sm font-bold mb-2 uppercase tracking-wide' style={{ color: '#2D5A3D' }}>
                      Pros
                    </h3>
                    <ul className='space-y-2'>
                      {provider.pros.map((pro) => (
                        <li key={pro} className='flex items-start gap-2 text-sm' style={{ color: '#3D5560' }}>
                          <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {provider.cons && provider.cons.length > 0 && (
                  <div>
                    <h3 className='text-sm font-bold mb-2 uppercase tracking-wide' style={{ color: '#B14739' }}>
                      Cons
                    </h3>
                    <ul className='space-y-2'>
                      {provider.cons.map((con) => (
                        <li key={con} className='flex items-start gap-2 text-sm' style={{ color: '#3D5560' }}>
                          <X className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#B14739' }} />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        {provider.howItWorks && provider.howItWorks.length > 0 && (
          <section className='py-10 md:py-14 bg-white'>
            <div className='max-w-5xl mx-auto px-4 md:px-6'>
              <h2
                className='text-2xl md:text-3xl font-bold mb-6'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                How It Works
              </h2>
              <ol className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {provider.howItWorks.map((step, i) => (
                  <li
                    key={step}
                    className='flex items-start gap-4 p-5 rounded-2xl'
                    style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}
                  >
                    <div
                      className='flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold'
                      style={{ backgroundColor: '#D4A33A' }}
                    >
                      {i + 1}
                    </div>
                    <span className='text-sm leading-relaxed pt-1.5' style={{ color: '#3D5560' }}>
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* PRICING TABLE + PROMO */}
        {provider.pricingTable && provider.pricingTable.length > 0 && (
          <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
            <div className='max-w-5xl mx-auto px-4 md:px-6'>
              <h2
                className='text-2xl md:text-3xl font-bold mb-2'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Pricing
              </h2>
              <p className='text-sm mb-6' style={{ color: '#6B7B82' }}>
                Pricing verified {provider.lastVerified ?? 'recently'}. Confirm current rates on{' '}
                <a
                  href={affiliateUrl}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='underline'
                  style={{ color: '#D4A33A' }}
                >
                  {provider.name}&rsquo;s site
                </a>
                .
              </p>

              <div className='bg-white rounded-2xl overflow-hidden' style={{ border: '1px solid #E5DDC8' }}>
                <table className='w-full'>
                  <thead>
                    <tr style={{ backgroundColor: '#F8F4ED' }}>
                      <th
                        className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider'
                        style={{ color: '#6B7B82' }}
                      >
                        Plan
                      </th>
                      <th
                        className='text-right px-5 py-3 text-xs font-bold uppercase tracking-wider'
                        style={{ color: '#6B7B82' }}
                      >
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {provider.pricingTable.map((tier) => (
                      <tr key={tier.plan} className='border-t' style={{ borderColor: '#E5DDC8' }}>
                        <td className='px-5 py-4 text-sm font-medium' style={{ color: '#0E2A3A' }}>
                          {tier.plan}
                        </td>
                        <td className='px-5 py-4 text-sm font-bold text-right' style={{ color: '#D4A33A' }}>
                          {tier.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {provider.promo && (
                <div
                  className='mt-4 p-4 rounded-xl flex items-start gap-3'
                  style={{
                    backgroundColor: 'rgba(95, 191, 170, 0.14)',
                    border: '1px solid rgba(95, 191, 170, 0.4)',
                  }}
                >
                  <AlertCircle className='h-5 w-5 mt-0.5 flex-shrink-0' style={{ color: '#5A8C68' }} />
                  <div>
                    <div className='text-sm font-bold mb-0.5' style={{ color: '#2D5A3D' }}>
                      Active Promotion
                    </div>
                    <div className='text-sm' style={{ color: '#3D5560' }}>
                      {provider.promo}
                    </div>
                  </div>
                </div>
              )}

              <p className='text-xs mt-3' style={{ color: '#6B7B82' }}>
                Pricing footnote: We may earn a commission if you sign up through our links — at no
                extra cost to you. See our{' '}
                <Link href='/methodology' className='underline'>
                  methodology
                </Link>
                .
              </p>
            </div>
          </section>
        )}

        {/* KEY FEATURES */}
        {provider.features && (
          <section className='py-10 md:py-14 bg-white'>
            <div className='max-w-5xl mx-auto px-4 md:px-6'>
              <h2
                className='text-2xl md:text-3xl font-bold mb-6'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Key Features
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {provider.features.availability && (
                  <FeatureItem label='Availability' value={provider.features.availability} />
                )}
                {provider.features.fulfillment && (
                  <FeatureItem label='Fulfillment' value={provider.features.fulfillment} />
                )}
                {provider.features.fees && <FeatureItem label='Fees' value={provider.features.fees} />}
                {provider.features.delivery && (
                  <FeatureItem label='Delivery' value={provider.features.delivery} />
                )}
                {provider.features.plans && (
                  <FeatureItem label='Plans' value={provider.features.plans} />
                )}
              </div>
            </div>
          </section>
        )}

        {/* WHO IS THIS BEST FOR? */}
        {provider.bestForList && provider.bestForList.length > 0 && (
          <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
            <div className='max-w-5xl mx-auto px-4 md:px-6'>
              <h2
                className='text-2xl md:text-3xl font-bold mb-6'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Who Is This Best For?
              </h2>
              <ul className='space-y-3'>
                {provider.bestForList.map((b) => (
                  <li key={b} className='flex items-start gap-2 text-base' style={{ color: '#3D5560' }}>
                    <ShieldCheck className='h-5 w-5 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* MEDICATIONS BLOCK — links to /best/telemedicine-[med] pages */}
        {medications.length > 0 && (
          <section className='py-10 md:py-14 bg-white'>
            <div className='max-w-5xl mx-auto px-4 md:px-6'>
              <h2
                className='text-2xl md:text-3xl font-bold mb-2'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                {provider.name} Medications &mdash; In Depth
              </h2>
              <p className='text-sm mb-6' style={{ color: '#6B7B82' }}>
                See our independent rankings for each medication this provider offers.
              </p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {medications.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/best/telemedicine-${m.slug}`}
                    className='p-4 rounded-xl text-center transition-all hover:-translate-y-0.5'
                    style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8', color: '#0E2A3A' }}
                  >
                    <div className='text-sm font-bold mb-1'>{m.name}</div>
                    <div className='text-[10px] uppercase tracking-wider' style={{ color: '#6B7B82' }}>
                      View Top 5 →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* COMPARE WITH */}
        {provider.comparisonsAvailable && provider.comparisonsAvailable.length > 0 && (
          <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
            <div className='max-w-5xl mx-auto px-4 md:px-6'>
              <h2
                className='text-2xl md:text-3xl font-bold mb-2'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Compare {provider.name} With
              </h2>
              <p className='text-sm mb-6' style={{ color: '#6B7B82' }}>
                Side-by-side comparisons against other top providers.
              </p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {provider.comparisonsAvailable.map((vsSlug) => {
                  const other = getProviderBySlug(vsSlug);
                  return (
                    <Link
                      key={vsSlug}
                      href={`/compare/${provider.slug}-vs-${vsSlug}`}
                      className='p-4 rounded-xl text-center transition-all hover:-translate-y-0.5 bg-white'
                      style={{ border: '1px solid #E5DDC8', color: '#0E2A3A' }}
                    >
                      <div className='text-sm font-bold mb-1'>vs {other?.name ?? vsSlug}</div>
                      <div className='text-[10px] uppercase tracking-wider' style={{ color: '#6B7B82' }}>
                        Compare →
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* BOTTOM LINE */}
        {provider.bottomLine && (
          <section className='py-10 md:py-14 bg-white'>
            <div className='max-w-5xl mx-auto px-4 md:px-6'>
              <h2
                className='text-2xl md:text-3xl font-bold mb-4'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                The Bottom Line
              </h2>
              <p className='text-base leading-relaxed' style={{ color: '#3D5560' }}>
                {provider.bottomLine}
              </p>
            </div>
          </section>
        )}

        {/* GALLERY — secondary imagery (product cards, screenshots, etc.) */}
        {provider.galleryImages && provider.galleryImages.length > 0 && (
          <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
            <div className='max-w-5xl mx-auto px-4 md:px-6'>
              <h2
                className='text-2xl md:text-3xl font-bold mb-6'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                {provider.name} in Detail
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
                {provider.galleryImages.map((img, i) => (
                  <div
                    key={img}
                    className='relative rounded-2xl overflow-hidden shadow-sm bg-white'
                    style={{ aspectRatio: '4 / 3', border: '1px solid #E5DDC8' }}
                  >
                    <Image
                      src={img}
                      alt={`${provider.name} screenshot ${i + 1}`}
                      fill
                      sizes='(max-width: 768px) 100vw, 50vw'
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>
              <p className='text-xs italic mt-4' style={{ color: '#6B7B82' }}>
                Images sourced from the provider&rsquo;s public marketing materials. Used for
                editorial / review purposes.
              </p>
            </div>
          </section>
        )}

        {/* META FOOTER (last updated + verify dates + submit-update link) */}
        <section className='py-6'>
          <div className='max-w-5xl mx-auto px-4 md:px-6 text-xs' style={{ color: '#6B7B82' }}>
            <div className='flex flex-wrap items-center gap-x-4 gap-y-1'>
              {provider.lastUpdated && (
                <span className='inline-flex items-center gap-1'>
                  <Calendar className='h-3 w-3' /> Last updated: {provider.lastUpdated}
                </span>
              )}
              {provider.lastVerified && (
                <span className='inline-flex items-center gap-1'>
                  <ShieldCheck className='h-3 w-3' /> Pricing verified: {provider.lastVerified}
                </span>
              )}
            </div>
            <div className='mt-2'>
              Are you from {provider.name}?{' '}
              <Link href='/contact' className='underline' style={{ color: '#D4A33A' }}>
                Submit an update →
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA CARD */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{
                background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)',
              }}
            >
              <h2
                className='text-2xl md:text-3xl font-bold mb-3'
                style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Ready to start with {provider.name}?
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Visit {provider.name}&rsquo;s site to begin your consultation, or compare against
                other providers first.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <a
                  href={affiliateUrl}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#D4A33A' }}
                >
                  Visit {provider.name} <ExternalLink className='h-4 w-4' />
                </a>
                <Link
                  href='/providers'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Back to All Providers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}

// ============================================================
// Helpers
// ============================================================

function categoryColor(c: GLP1Provider['category']) {
  const map: Record<GLP1Provider['category'], { bg: string; fg: string }> = {
    Telemedicine: { bg: '#E8DCC0', fg: '#7A6020' },
    'Compounding Pharmacy': { bg: '#D9E8D4', fg: '#2D5A3D' },
    'Manufacturer Program': { bg: '#DEE5E8', fg: '#385560' },
    Hybrid: { bg: '#F4EBD0', fg: '#7A6020' },
  };
  return map[c];
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className='text-center md:text-left px-2'>
      <div className='text-[11px] font-bold uppercase tracking-widest mb-1' style={{ color: '#6B7B82' }}>
        {label}
      </div>
      <div className='text-base md:text-lg font-bold' style={{ color: '#0E2A3A' }}>
        {value}
      </div>
    </div>
  );
}

function FeatureItem({ label, value }: { label: string; value: string }) {
  return (
    <div
      className='p-4 rounded-xl'
      style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}
    >
      <div className='text-[11px] font-bold uppercase tracking-widest mb-1' style={{ color: '#6B7B82' }}>
        {label}
      </div>
      <div className='text-sm font-medium' style={{ color: '#0E2A3A' }}>
        {value}
      </div>
    </div>
  );
}
