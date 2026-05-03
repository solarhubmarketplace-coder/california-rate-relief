import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { glp1Medications, getMedicationBySlug } from '@/lib/glp1-medications';
import { glp1Providers, getProviderBySlug } from '@/lib/glp1-providers';
import { buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import {
  Trophy,
  Star,
  ArrowRight,
  ExternalLink,
  CircleCheck,
  X,
  Calendar,
  ShieldCheck,
} from 'lucide-react';

// ============================================================
// SSG: enumerate all medication slugs
// ============================================================

export function generateStaticParams() {
  return glp1Medications.map((m) => ({ medication: m.slug }));
}

interface PageParams {
  params: Promise<{ medication: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { medication } = await params;
  const med = getMedicationBySlug(medication);
  if (!med) return { title: 'Medication Not Found | GLP1CompareHub' };
  return {
    title: `${med.titleHook} | GLP1CompareHub`,
    description:
      `Top 5 telemedicine providers for ${med.name} in 2026. Pricing, ratings, and side-by-side comparison. ${med.description.slice(0, 100)}`,
    alternates: { canonical: `https://glp1comparehub.com/best/telemedicine-${med.slug}` },
    openGraph: {
      title: med.titleHook,
      description: med.description.slice(0, 160),
      url: `https://glp1comparehub.com/best/telemedicine-${med.slug}`,
      siteName: 'GLP1CompareHub',
      type: 'article',
    },
  };
}

// ============================================================
// Page
// ============================================================

const RANK_BADGES = ['Best Overall', 'Best Value', 'Best Brand-Name Value', 'Best Clinical Outcomes', 'Best for Beginners'];

export default async function MedicationRankingPage({ params }: PageParams) {
  const { medication } = await params;
  const med = getMedicationBySlug(medication);
  if (!med) notFound();

  // Pull top 5 providers for this medication
  const top5 = med.topProviders
    .map((slug) => getProviderBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 5);

  // ----- JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://glp1comparehub.com/' },
      { '@type': 'ListItem', position: 2, name: 'Best Rankings', item: 'https://glp1comparehub.com/best' },
      { '@type': 'ListItem', position: 3, name: med.name, item: `https://glp1comparehub.com/best/telemedicine-${med.slug}` },
    ],
  };
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Top 5 Telemedicine Providers for ${med.name}`,
    numberOfItems: top5.length,
    itemListElement: top5.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://glp1comparehub.com/providers/${p.slug}`,
      name: p.name,
    })),
  };
  const medicalWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: med.titleHook,
    url: `https://glp1comparehub.com/best/telemedicine-${med.slug}`,
    about: med.genericName ?? med.name,
    lastReviewed: med.lastUpdated,
    datePublished: '2026-05-02',
    dateModified: med.lastUpdated,
  };

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#FFF1D6', borderColor: '#E8DDD0' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#8A6D1A' }}>
          <strong>Affiliate Disclosure:</strong> Rankings are independent of commission rates.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Full disclosure</Link>.
        </div>
      </div>

      <main>
        {/* HEADER */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FFF6E8' }}>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#7A6478' }}>Home</Link>
              <span style={{ color: '#7A6478' }}> / </span>
              <Link href='/best' style={{ color: '#7A6478' }}>Best Rankings</Link>
              <span style={{ color: '#7A6478' }}> / </span>
              <span style={{ color: '#3A1B3D' }}>{med.name}</span>
            </nav>

            <h1
              className='text-3xl md:text-5xl font-bold mb-3'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              {med.titleHook.split(' — ')[0]}
            </h1>
            {med.titleHook.includes(' — ') && (
              <p className='text-lg md:text-xl font-semibold mb-3' style={{ color: '#F47C5B' }}>
                {med.titleHook.split(' — ')[1]}
              </p>
            )}
            <div className='flex items-center gap-3 text-xs flex-wrap mb-5' style={{ color: '#7A6478' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated {med.lastUpdated}
              </span>
              <span>·</span>
              <span>By GLP1CompareHub Editorial Team</span>
            </div>

            <p className='text-base leading-relaxed max-w-3xl' style={{ color: '#4B3548' }}>
              {med.description}
            </p>
          </div>
        </section>

        {/* QUICK NAV */}
        <section className='py-6 sticky top-[60px] z-40' style={{ backgroundColor: '#FDF7F0', borderBottom: '1px solid #E8DDD0' }}>
          <div className='max-w-5xl mx-auto px-4 md:px-6 flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm'>
            <span className='font-bold uppercase tracking-wider' style={{ color: '#7A6478' }}>
              Quick Nav:
            </span>
            {top5.map((p, i) => (
              <a
                key={p.slug}
                href={`#rank-${i + 1}`}
                className='font-semibold hover:underline'
                style={{ color: '#3A1B3D' }}
              >
                #{i + 1} {p.name}
              </a>
            ))}
          </div>
        </section>

        {/* PROVIDER RANKINGS */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#FDF7F0' }}>
          <div className='max-w-5xl mx-auto px-4 md:px-6 space-y-6 md:space-y-8'>
            {top5.map((p, i) => (
              <RankCard key={p.slug} rank={i + 1} provider={p} medication={med.name} />
            ))}
          </div>
        </section>

        {/* ABOUT MEDICATION */}
        <section className='py-12 md:py-16 bg-white'>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              About {med.name}
            </h2>
            <p className='text-base leading-relaxed mb-4' style={{ color: '#4B3548' }}>
              {med.description}
            </p>
            {med.mechanism && (
              <p className='text-base leading-relaxed mb-4' style={{ color: '#4B3548' }}>
                <strong>Mechanism:</strong> {med.mechanism}
              </p>
            )}
            <p className='text-sm' style={{ color: '#7A6478' }}>
              <strong>FDA Status:</strong> {med.fdaStatus}
            </p>
          </div>
        </section>

        {/* DOSING SCHEDULE */}
        {med.dosingSchedule && med.dosingSchedule.length > 0 && (
          <section className='py-12' style={{ backgroundColor: '#FFF6E8' }}>
            <div className='max-w-5xl mx-auto px-4 md:px-6'>
              <h2
                className='text-2xl md:text-3xl font-bold mb-5'
                style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Dosing Schedule
              </h2>
              <div className='bg-white rounded-2xl overflow-hidden' style={{ border: '1px solid #E8DDD0' }}>
                <table className='w-full'>
                  <thead>
                    <tr style={{ backgroundColor: '#FDF7F0' }}>
                      <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#7A6478' }}>Week</th>
                      <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#7A6478' }}>Dose</th>
                      <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#7A6478' }}>Phase</th>
                    </tr>
                  </thead>
                  <tbody>
                    {med.dosingSchedule.map((step) => (
                      <tr key={step.week} className='border-t' style={{ borderColor: '#E8DDD0' }}>
                        <td className='px-5 py-3 text-sm font-semibold' style={{ color: '#3A1B3D' }}>Week {step.week}</td>
                        <td className='px-5 py-3 text-sm font-bold' style={{ color: '#F47C5B' }}>{step.dose}</td>
                        <td className='px-5 py-3 text-sm' style={{ color: '#4B3548' }}>{step.phase}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* TRIAL RESULTS */}
        {med.trialResults && med.trialResults.length > 0 && (
          <section className='py-12 bg-white'>
            <div className='max-w-5xl mx-auto px-4 md:px-6'>
              <h2
                className='text-2xl md:text-3xl font-bold mb-5'
                style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Clinical Trial Results
              </h2>
              <div className='space-y-3'>
                {med.trialResults.map((t) => (
                  <div
                    key={t.metric}
                    className='p-5 rounded-2xl flex items-start gap-4'
                    style={{ backgroundColor: '#FDF7F0', border: '1px solid #E8DDD0' }}
                  >
                    <ShieldCheck className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#5FBFAA' }} />
                    <div>
                      <div className='text-sm font-semibold' style={{ color: '#3A1B3D' }}>{t.metric}</div>
                      <div className='text-2xl font-bold my-1' style={{ color: '#F47C5B' }}>{t.value}</div>
                      <div className='text-xs italic' style={{ color: '#7A6478' }}>Source: {t.trial}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className='text-xs mt-4' style={{ color: '#7A6478' }}>
                Individual results vary. Clinical trial averages are not guarantees of personal outcome.
              </p>
            </div>
          </section>
        )}

        {/* SIDE EFFECTS */}
        {med.commonSideEffects && med.commonSideEffects.length > 0 && (
          <section className='py-12' style={{ backgroundColor: '#FDF7F0' }}>
            <div className='max-w-5xl mx-auto px-4 md:px-6'>
              <h2
                className='text-2xl md:text-3xl font-bold mb-5'
                style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Common Side Effects
              </h2>
              <div className='flex flex-wrap gap-2'>
                {med.commonSideEffects.map((s) => (
                  <span
                    key={s}
                    className='px-4 py-2 rounded-full text-sm font-medium bg-white'
                    style={{ border: '1px solid #E8DDD0', color: '#4B3548' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className='text-xs mt-4' style={{ color: '#7A6478' }}>
                See your prescriber for the full list of potential side effects and contraindications.
              </p>
            </div>
          </section>
        )}

        {/* METHODOLOGY */}
        <section className='py-12 bg-white'>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Our Ranking Methodology
            </h2>
            <p className='text-sm mb-6' style={{ color: '#4B3548' }}>
              We weight five factors when ranking providers for each medication:
            </p>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-3'>
              <WeightItem pct={25} label='Medication Options' />
              <WeightItem pct={25} label='Pricing' />
              <WeightItem pct={20} label='Quality Certifications' />
              <WeightItem pct={15} label='Customer Support' />
              <WeightItem pct={15} label='Plan Flexibility' />
            </div>
            <p className='text-xs mt-5' style={{ color: '#7A6478' }}>
              See our full <Link href='/methodology' className='underline'>methodology</Link>.
            </p>
          </div>
        </section>

        {/* RELATED + FINAL CTA */}
        <section className='py-12' style={{ backgroundColor: '#FFF6E8' }}>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Related Rankings
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
              {glp1Medications
                .filter((m2) => m2.slug !== med.slug)
                .slice(0, 4)
                .map((m2) => (
                  <Link
                    key={m2.slug}
                    href={`/best/telemedicine-${m2.slug}`}
                    className='p-4 rounded-xl text-center bg-white transition-all hover:-translate-y-0.5'
                    style={{ border: '1px solid #E8DDD0', color: '#3A1B3D' }}
                  >
                    <div className='text-sm font-bold mb-1'>Best for {m2.name}</div>
                    <div className='text-[10px] uppercase tracking-wider' style={{ color: '#7A6478' }}>
                      View Top 5 →
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <section className='py-10 md:py-14' style={{ backgroundColor: '#FDF7F0' }}>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #F47C5B 0%, #F09A65 50%, #EFC079 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Not sure which provider fits you?
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Take our 60-second quiz and get matched to your top 3 providers based on budget, medication preference, and insurance.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <Link
                  href='/match'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#F47C5B' }}
                >
                  Take the Quiz
                </Link>
                <Link
                  href='/providers'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Browse All Providers
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
// Single rank card (used in the top-5 list)
// ============================================================

function RankCard({
  rank,
  provider,
  medication,
}: {
  rank: number;
  provider: typeof glp1Providers[number];
  medication: string;
}) {
  const affiliateUrl = buildGlp1AffiliateUrl(provider.slug, `best-${medication.toLowerCase().replace(/\s+/g, '-')}`);
  const badge = RANK_BADGES[rank - 1] ?? `#${rank}`;

  return (
    <div
      id={`rank-${rank}`}
      className='bg-white rounded-2xl p-6 md:p-7 shadow-sm scroll-mt-32'
      style={{ border: '1px solid #E8DDD0' }}
    >
      <div className='flex items-start gap-5 flex-col md:flex-row'>
        {/* Rank number badge */}
        <div className='flex-shrink-0'>
          <div
            className='w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold'
            style={{ backgroundColor: rank === 1 ? '#F47C5B' : '#3A1B3D' }}
          >
            #{rank}
          </div>
          <div
            className='mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full'
            style={{
              backgroundColor: rank === 1 ? '#FFE5D9' : '#FDF7F0',
              color: rank === 1 ? '#B14739' : '#3A1B3D',
            }}
          >
            <Trophy className='h-3 w-3' /> {badge}
          </div>
        </div>

        {/* Content */}
        <div className='flex-1 min-w-0'>
          <div className='flex items-center justify-between gap-3 flex-wrap mb-2'>
            <h3 className='text-2xl font-bold' style={{ color: '#3A1B3D' }}>
              {provider.name}
            </h3>
            <div className='flex items-center gap-3'>
              <div className='text-right'>
                <div className='text-xs' style={{ color: '#7A6478' }}>From</div>
                <div className='text-lg font-bold' style={{ color: '#F47C5B' }}>
                  {provider.monthlyPrice}
                </div>
              </div>
              {provider.rating > 0 && (
                <div className='flex items-center gap-1'>
                  <Star className='h-5 w-5 fill-current' style={{ color: '#F47C5B' }} />
                  <span className='text-lg font-bold' style={{ color: '#3A1B3D' }}>
                    {provider.rating.toFixed(1)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {provider.tagline && (
            <p className='text-sm italic mb-3' style={{ color: '#7A6478' }}>
              {provider.tagline}
            </p>
          )}

          <p className='text-sm mb-4 leading-relaxed' style={{ color: '#4B3548' }}>
            <strong>Why #{rank}?</strong>{' '}
            {provider.bottomLine ?? provider.description ?? `Strong ${medication} program with verified pricing.`}
          </p>

          {provider.pros && provider.pros.length > 0 && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-5'>
              <div>
                <div className='text-xs font-bold uppercase tracking-wider mb-1.5' style={{ color: '#1F6B3D' }}>
                  Pros
                </div>
                <ul className='space-y-1'>
                  {provider.pros.slice(0, 3).map((pro) => (
                    <li key={pro} className='flex items-start gap-1.5 text-xs' style={{ color: '#4B3548' }}>
                      <CircleCheck className='h-3.5 w-3.5 mt-0.5 flex-shrink-0' style={{ color: '#5FBFAA' }} />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {provider.cons && provider.cons.length > 0 && (
                <div>
                  <div className='text-xs font-bold uppercase tracking-wider mb-1.5' style={{ color: '#B14739' }}>
                    Cons
                  </div>
                  <ul className='space-y-1'>
                    {provider.cons.slice(0, 3).map((con) => (
                      <li key={con} className='flex items-start gap-1.5 text-xs' style={{ color: '#4B3548' }}>
                        <X className='h-3.5 w-3.5 mt-0.5 flex-shrink-0' style={{ color: '#B14739' }} />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className='flex flex-wrap gap-2'>
            <Link
              href={`/providers/${provider.slug}`}
              className='inline-flex items-center gap-1 text-sm font-semibold px-5 py-2.5 rounded-full transition-all'
              style={{ backgroundColor: '#3A1B3D', color: 'white' }}
            >
              Full Review <ArrowRight className='h-3.5 w-3.5' />
            </Link>
            <a
              href={affiliateUrl}
              target='_blank'
              rel='sponsored nofollow noopener noreferrer'
              className='inline-flex items-center gap-1 text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5'
              style={{ backgroundColor: '#F47C5B', color: 'white' }}
            >
              Visit {provider.name} <ExternalLink className='h-3.5 w-3.5' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function WeightItem({ pct, label }: { pct: number; label: string }) {
  return (
    <div
      className='text-center p-4 rounded-2xl'
      style={{ backgroundColor: '#FDF7F0', border: '1px solid #E8DDD0' }}
    >
      <div
        className='text-2xl font-bold mb-1'
        style={{ color: '#F47C5B', fontFamily: '"Playfair Display", "Georgia", serif' }}
      >
        {pct}%
      </div>
      <div className='text-xs font-semibold' style={{ color: '#3A1B3D' }}>
        {label}
      </div>
    </div>
  );
}
