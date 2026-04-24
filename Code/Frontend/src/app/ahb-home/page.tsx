import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'At Home Biohacking — Research-Backed Wellness Reviews',
  description: "Honest, peer-reviewed research-backed reviews of home biohacking products: cold plunges, infrared saunas, PEMF mats, red light therapy, vibration plates. We cite the studies.",
  alternates: { canonical: 'https://athomebiohacking.com/' },
  openGraph: { title: 'At Home Biohacking — Research-Backed Wellness Reviews', description: 'Cited research. Honest reviews. Home biohacking done right.', type: 'website', url: 'https://athomebiohacking.com/' },
};

const ahbOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'At Home Biohacking',
  url: 'https://athomebiohacking.com',
  description: 'Research-backed reviews of at-home biohacking and wellness products with peer-reviewed citations.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'editorial',
    availableLanguage: 'English',
  },
};

const ahbWebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'At Home Biohacking',
  url: 'https://athomebiohacking.com',
  publisher: { '@type': 'Organization', name: 'At Home Biohacking' },
};

export default function AHBHome() {
  return (
    <AHBLayout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(ahbOrgSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(ahbWebsiteSchema) }} />
      <AHBHeader />
      <main className='py-16' style={{ backgroundColor: '#0a1a14' }}>
        <div className='container mx-auto px-4'>
          <section className='max-w-4xl mx-auto text-center mb-16'>
            <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>Research-Backed Wellness</span>
            <h1 className='text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>
              Biohacking reviews that <span style={{ color: '#34d399' }}>cite the studies</span>.
            </h1>
            <p className='text-xl leading-relaxed max-w-2xl mx-auto mb-8' style={{ color: '#a7f3d0' }}>
              Cold plunges, infrared saunas, PEMF therapy, red light, vibration plates — we review the gear AND link every claim to peer-reviewed research. No hype. No fake science. Just what works, what doesn&apos;t, and what the data actually says.
            </p>
            <div className='flex flex-wrap gap-3 justify-center'>
              <Link href='/cold-plunge' className='inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold' style={{ backgroundColor: '#34d399', color: '#0a1a14' }}>
                Cold Plunge Guide <ArrowRight className='h-4 w-4' />
              </Link>
              <Link href='/infrared-sauna' className='inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold border' style={{ borderColor: '#34d399', color: '#34d399' }}>
                Infrared Sauna
              </Link>
            </div>
          </section>

          <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16'>
            {[
              { href: '/cold-plunge', title: 'Cold Plunge', desc: 'Ice baths, tubs, chillers. Backed by brown-fat and metabolic research.' },
              { href: '/infrared-sauna', title: 'Infrared Sauna', desc: 'Full saunas and portable blankets. Cardiovascular data from Finnish cohorts.' },
              { href: '/pemf', title: 'PEMF Therapy', desc: 'Pulsed electromagnetic field mats. Strong evidence for bone + pain.' },
              { href: '/red-light-therapy', title: 'Red Light Therapy', desc: 'Photobiomodulation panels and masks. Mitochondrial mechanism verified.' },
              { href: '/vibration-plate', title: 'Vibration Plate', desc: 'Whole-body vibration for bone density and recovery.' },
              { href: '/learn', title: 'Learn', desc: 'The science, the studies, the honest takes on what the evidence shows.' },
            ].map((c) => (
              <Link key={c.href} href={c.href} className='p-6 rounded-xl border hover:border-emerald-400 transition-colors' style={{ backgroundColor: '#1a2a22', borderColor: '#2a3a30' }}>
                <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#34d399' }}>Category</div>
                <h3 className='text-xl font-bold mb-2' style={{ color: '#f0fdf4' }}>{c.title}</h3>
                <p className='text-sm' style={{ color: '#a7f3d0' }}>{c.desc}</p>
              </Link>
            ))}
          </section>

          <section className='max-w-3xl mx-auto p-8 rounded-xl border' style={{ backgroundColor: '#1a2a22', borderColor: '#2a3a30' }}>
            <h2 className='text-2xl font-bold mb-4' style={{ color: '#f0fdf4' }}>Why we&apos;re different</h2>
            <div className='space-y-3' style={{ color: '#a7f3d0' }}>
              <p><strong style={{ color: '#f0fdf4' }}>We cite peer-reviewed research.</strong> Every major claim links to a PubMed study, meta-analysis, or review paper. You can verify everything we say.</p>
              <p><strong style={{ color: '#f0fdf4' }}>We flag weak evidence.</strong> Some biohacking tools have strong data (PEMF for bone, cold plunge for brown fat, red light for mitochondria). Others — like grounding and portable sauna blankets — have weak or contested evidence. We say so.</p>
              <p><strong style={{ color: '#f0fdf4' }}>We disclose affiliate links.</strong> We earn commission when you buy through our links. This never changes what we recommend — recommendations are based on evidence quality and product performance, not payout.</p>
            </div>
          </section>
        </div>
      </main>
      <AHBFooter />
    </AHBLayout>
  );
}
