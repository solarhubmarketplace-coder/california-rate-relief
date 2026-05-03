import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Hero } from '@/components/glp1/GLP1Hero';
import {
  FeatureCards,
  ExpertRankings,
  TopRatedProvidersGrid,
  WhyTrustBlock,
  FinalCtaBanner,
} from '@/components/glp1/GLP1HomeSections';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';

export const metadata: Metadata = {
  title: 'GLP1CompareHub.com | Find Your Perfect GLP-1 Match — 2026 Provider Comparison',
  description:
    'Compare 50+ GLP-1 telehealth providers including telemedicine, compounding pharmacies, and manufacturer programs. Semaglutide and tirzepatide from $99/month. Expert rankings, transparent pricing, no hidden fees. Updated weekly.',
  alternates: { canonical: 'https://glp1comparehub.com/' },
  icons: {
    icon: [
      { url: '/img/glp1/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Find Your Perfect GLP-1 Match — Compare 50+ Providers',
    description:
      'Independent, FTC-compliant comparison of GLP-1 telehealth providers. Semaglutide, tirzepatide, Wegovy, Zepbound. Real pricing, expert rankings, take the quiz to get matched.',
    type: 'website',
    url: 'https://glp1comparehub.com/',
    siteName: 'GLP1CompareHub',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GLP1CompareHub',
  url: 'https://glp1comparehub.com',
  description:
    'Independent comparison and review site for GLP-1 telehealth providers, including tirzepatide and semaglutide programs.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GLP1CompareHub',
  url: 'https://glp1comparehub.com',
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub' },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Best GLP-1 Telehealth Providers 2026',
  url: 'https://glp1comparehub.com',
  description:
    'Comparison of leading GLP-1 telehealth providers offering tirzepatide and semaglutide programs.',
};

const medicalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'GLP1CompareHub',
  url: 'https://glp1comparehub.com',
  description: 'Independent comparison directory for GLP-1 telehealth providers.',
  medicalSpecialty: ['Endocrine', 'Bariatric'],
  knowsAbout: [
    'GLP-1 receptor agonists',
    'Semaglutide',
    'Tirzepatide',
    'Wegovy',
    'Zepbound',
    'Mounjaro',
    'Ozempic',
    'Compounded GLP-1 medications',
    'Telehealth weight loss',
  ],
};

export default function GLP1Home() {
  return (
    <GLP1Layout>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />

      <GLP1Header />

      {/* Above-the-fold FTC affiliate disclosure — placed BEFORE the hero per FTC guidance */}
      <div
        className='border-b'
        style={{ backgroundColor: '#FFF1D6', borderColor: '#E8DDD0' }}
      >
        <div
          className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center'
          style={{ color: '#8A6D1A' }}
        >
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a
          commission when you sign up — at no additional cost to you.{' '}
          <Link href='/affiliate-disclosure' className='underline'>
            Read our full disclosure
          </Link>
          .
        </div>
      </div>

      <main>
        <GLP1Hero />
        <FeatureCards />
        <ExpertRankings />
        <TopRatedProvidersGrid />
        <WhyTrustBlock />
        <FinalCtaBanner />
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}
