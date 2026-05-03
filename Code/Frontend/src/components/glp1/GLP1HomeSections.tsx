/**
 * Homepage section components for GLP1CompareHub.com.
 * Modeled after matchglp1.com structure: feature cards → expert rankings →
 * top-rated providers grid → why-trust block → final CTA.
 *
 * Server components — no client-side state. Reads from glp1Providers + glp1Medications.
 */

import Link from 'next/link';
import Image from 'next/image';
import { Search, Columns3, Trophy, ShieldCheck, ArrowRight, Star, BadgeCheck, Calendar } from 'lucide-react';
import { glp1Providers, primaryProviders, ProviderCategory } from '@/lib/glp1-providers';
import { glp1Medications } from '@/lib/glp1-medications';
import { GLP1HeroPlaceholder } from './GLP1HeroPlaceholder';

// ============================================================
// 3 FEATURE CARDS — under hero
// ============================================================

const FEATURE_CARDS = [
  {
    icon: Search,
    iconBg: '#FFE5D9',
    iconFg: '#F47C5B',
    title: 'Find Your Match',
    body: 'Answer a few questions and get personalized provider recommendations.',
    href: '/match',
  },
  {
    icon: Columns3,
    iconBg: '#D4F1E8',
    iconFg: '#3A8F77',
    title: 'Compare Providers',
    body: 'Side-by-side comparison of telemedicine, pharmacies, and manufacturer programs.',
    href: '/compare',
  },
  {
    icon: Trophy,
    iconBg: '#EDE5F2',
    iconFg: '#7B5E92',
    title: 'Best Rankings',
    body: 'Expert-ranked top 5 providers for each medication type.',
    href: '/best',
  },
];

export function FeatureCards() {
  return (
    <section className='py-12 md:py-16' style={{ backgroundColor: '#F1ECE5' }}>
      <div className='max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6'>
        {FEATURE_CARDS.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className='group bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1'
          >
            <div
              className='w-11 h-11 rounded-xl flex items-center justify-center mb-5'
              style={{ backgroundColor: card.iconBg }}
            >
              <card.icon className='h-5 w-5' style={{ color: card.iconFg }} />
            </div>
            <h3 className='text-lg font-bold mb-2' style={{ color: '#3A1B3D' }}>
              {card.title}
            </h3>
            <p className='text-sm leading-relaxed mb-4' style={{ color: '#4B3548' }}>
              {card.body}
            </p>
            <span
              className='inline-flex items-center gap-1 text-sm font-semibold transition-colors'
              style={{ color: '#F47C5B' }}
            >
              Explore <ArrowRight className='h-3.5 w-3.5' />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// EXPERT PROVIDER RANKINGS — 4 medication tiles
// ============================================================

export function ExpertRankings() {
  // Surface 4 priority medications. Top-1 provider per medication.
  const featured = ['semaglutide', 'zepbound', 'wegovy', 'compounded-glp-1'];
  const tiles = featured
    .map((slug) => glp1Medications.find((m) => m.slug === slug))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  return (
    <section className='py-14 md:py-20' style={{ backgroundColor: '#FFF6E8' }}>
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        <div className='flex items-end justify-between gap-4 mb-3 flex-wrap'>
          <div>
            <h2
              className='text-3xl md:text-4xl font-bold mb-2'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Expert Provider Rankings
            </h2>
            <p className='max-w-2xl text-sm md:text-base' style={{ color: '#4B3548' }}>
              Our top picks for GLP-1 telemedicine providers, ranked by pricing, quality, and patient experience.
            </p>
          </div>
          <Link
            href='/best'
            className='inline-flex items-center gap-1 text-sm font-semibold whitespace-nowrap'
            style={{ color: '#F47C5B' }}
          >
            View All Rankings <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-8'>
          {tiles.map((m) => {
            const topSlug = m.topProviders[0];
            const topProvider = glp1Providers.find((p) => p.slug === topSlug);
            return (
              <Link
                key={m.slug}
                href={`/best/telemedicine-${m.slug}`}
                className='bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border'
                style={{ borderColor: '#E8DDD0' }}
              >
                <div
                  className='inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full mb-3'
                  style={{ backgroundColor: '#FFF1D6', color: '#A88A1A' }}
                >
                  <Star className='h-3 w-3 fill-current' /> Top Ranked
                </div>
                <div className='font-bold text-base mb-1.5' style={{ color: '#3A1B3D' }}>
                  {m.name}
                </div>
                <div className='text-xs mb-4' style={{ color: '#4B3548' }}>
                  #1: <span className='font-semibold' style={{ color: '#3A1B3D' }}>{topProvider?.name ?? topSlug}</span>
                </div>
                <span
                  className='inline-flex items-center gap-1 text-xs font-semibold'
                  style={{ color: '#F47C5B' }}
                >
                  See Top 5 <ArrowRight className='h-3 w-3' />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// TOP-RATED PROVIDERS GRID — 6 cards (matchglp1 model)
// ============================================================

export function TopRatedProvidersGrid() {
  // Surface top 6 primary providers
  const featured = primaryProviders()
    .filter((p) => p.status === 'Active')
    .slice(0, 6);

  return (
    <section className='py-14 md:py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        <div className='flex items-end justify-between gap-4 mb-3 flex-wrap'>
          <div>
            <h2
              className='text-3xl md:text-4xl font-bold mb-2'
              style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Top-Rated Providers
            </h2>
            <p className='max-w-2xl text-sm md:text-base' style={{ color: '#4B3548' }}>
              Compare the most popular options for getting GLP-1 medications.
            </p>
          </div>
          <Link
            href='/providers'
            className='inline-flex items-center gap-1 text-sm font-semibold whitespace-nowrap'
            style={{ color: '#F47C5B' }}
          >
            View All Providers <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-8'>
          {featured.map((p) => (
            <ProviderCard
              key={p.slug}
              slug={p.slug}
              name={p.name}
              category={p.category}
              tagline={p.tagline ?? p.description?.slice(0, 110) ?? ''}
              monthlyPrice={p.monthlyPrice}
              rating={p.rating}
              heroImage={p.heroImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProviderCard({
  slug,
  name,
  category,
  tagline,
  monthlyPrice,
  rating,
  heroImage,
}: {
  slug: string;
  name: string;
  category: ProviderCategory;
  tagline: string;
  monthlyPrice: string;
  rating: number;
  heroImage?: string;
}) {
  const categoryColors: Record<string, { bg: string; fg: string }> = {
    Telemedicine: { bg: '#FFE5D9', fg: '#B14739' },
    'Compounding Pharmacy': { bg: '#D4F1E8', fg: '#1F6B3D' },
    'Manufacturer Program': { bg: '#EDE5F2', fg: '#5C3A7B' },
    Hybrid: { bg: '#FFF1D6', fg: '#8A6D1A' },
  };
  const cc = categoryColors[category] ?? categoryColors.Telemedicine;

  return (
    <div
      className='relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border overflow-hidden flex flex-col'
      style={{ borderColor: '#E8DDD0' }}
    >
      {/* Hero thumbnail — real image if available, otherwise category-colored placeholder */}
      <div
        className='relative w-full'
        style={{ aspectRatio: '16 / 9', backgroundColor: '#FDF7F0' }}
      >
        {heroImage ? (
          <Image
            src={heroImage}
            alt={`${name} hero`}
            fill
            sizes='(max-width: 768px) 100vw, 33vw'
            className='object-cover'
          />
        ) : (
          <GLP1HeroPlaceholder name={name} category={category} />
        )}
      </div>

      <div className='relative p-5 flex-1 flex flex-col'>
        {/* Updated badge — top-right corner */}
        <div
          className='absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-bl-xl'
          style={{ backgroundColor: '#F47C5B', color: 'white' }}
        >
          Updated
        </div>

        <span
          className='inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full mb-3 self-start'
          style={{ backgroundColor: cc.bg, color: cc.fg }}
        >
          {category}
        </span>

        <h3 className='text-lg font-bold mb-2' style={{ color: '#3A1B3D' }}>
          {name}
        </h3>
        <p className='text-sm leading-relaxed mb-4 line-clamp-3' style={{ color: '#4B3548' }}>
          {tagline}
        </p>

        <div className='flex items-center justify-between mb-4'>
          <div>
            <div className='text-[11px] font-medium' style={{ color: '#7A6478' }}>
              From
            </div>
            <div className='text-base font-bold' style={{ color: '#3A1B3D' }}>
              {monthlyPrice}
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <Star className='h-4 w-4 fill-current' style={{ color: '#F47C5B' }} />
            <span className='text-sm font-bold' style={{ color: '#3A1B3D' }}>
              {rating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className='flex gap-2 mt-auto'>
          <Link
            href={`/providers/${slug}`}
            className='flex-1 inline-flex items-center justify-center gap-1 text-sm font-semibold py-2.5 rounded-full text-white transition-all hover:-translate-y-0.5'
            style={{ backgroundColor: '#3A1B3D' }}
          >
            Learn More <ArrowRight className='h-3.5 w-3.5' />
          </Link>
          <Link
            href={`/providers/${slug}#visit`}
            className='inline-flex items-center justify-center gap-1 text-sm font-semibold py-2.5 px-4 rounded-full transition-all'
            style={{ border: '1.5px solid #3A1B3D', color: '#3A1B3D' }}
          >
            Visit Site
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// WHY TRUST + STATS ROW
// ============================================================

const TRUST_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Medically Reviewed',
    body: 'All content reviewed by healthcare professionals',
  },
  {
    icon: BadgeCheck,
    title: 'Independent Research',
    body: 'Unbiased comparisons with no hidden agendas',
  },
  {
    icon: Calendar,
    title: 'Updated Weekly',
    body: 'Pricing and availability refreshed regularly',
  },
];

const STATS = [
  { value: '50+', label: 'Providers Compared' },
  { value: '500+', label: 'Comparisons Available' },
  { value: '8', label: 'Best Rankings' },
  { value: '100%', label: 'Independent' },
];

export function WhyTrustBlock() {
  return (
    <section className='py-14 md:py-20' style={{ backgroundColor: '#F1ECE5' }}>
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        <div className='text-center mb-10'>
          <h2
            className='text-3xl md:text-4xl font-bold mb-2'
            style={{ color: '#3A1B3D', fontFamily: '"Playfair Display", "Georgia", serif' }}
          >
            Why Trust GLP1CompareHub
          </h2>
          <p className='text-sm md:text-base' style={{ color: '#4B3548' }}>
            We&rsquo;re committed to providing accurate, unbiased information.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12'>
          {TRUST_PILLARS.map((p) => (
            <div
              key={p.title}
              className='bg-white rounded-2xl p-6 text-center'
              style={{ border: '1px solid #E8DDD0' }}
            >
              <div
                className='inline-flex items-center justify-center w-11 h-11 rounded-full mb-4'
                style={{ backgroundColor: '#D4F1E8' }}
              >
                <p.icon className='h-5 w-5' style={{ color: '#3A8F77' }} />
              </div>
              <h3 className='font-bold mb-2' style={{ color: '#3A1B3D' }}>
                {p.title}
              </h3>
              <p className='text-sm' style={{ color: '#4B3548' }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                className='text-3xl md:text-4xl font-bold mb-1'
                style={{ color: '#F47C5B', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                {s.value}
              </div>
              <div className='text-xs md:text-sm' style={{ color: '#4B3548' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FINAL CTA BANNER
// ============================================================

export function FinalCtaBanner() {
  return (
    <section className='py-10 md:py-14' style={{ backgroundColor: '#FDF7F0' }}>
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        <div
          className='rounded-3xl px-6 md:px-12 py-12 md:py-16 text-center text-white'
          style={{
            background: 'linear-gradient(135deg, #F47C5B 0%, #F09A65 50%, #EFC079 100%)',
          }}
        >
          <h2
            className='text-3xl md:text-4xl font-bold mb-3'
            style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}
          >
            Ready to Find Your Match?
          </h2>
          <p className='text-sm md:text-base mb-7 opacity-95 max-w-xl mx-auto'>
            Take our quick quiz to find the GLP-1 provider that&rsquo;s right for you.
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
              style={{
                color: 'white',
                border: '1.5px solid white',
              }}
            >
              Browse All Providers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
