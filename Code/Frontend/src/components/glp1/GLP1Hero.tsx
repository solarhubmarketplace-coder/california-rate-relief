import Link from 'next/link';
import { ShieldCheck, FileText, Calendar } from 'lucide-react';
import { GLP1CostExplorerCard } from './GLP1CostExplorerCard';

interface GLP1HeroProps {
  /** Override the H1 if needed (allows page-specific reuse) */
  headline?: string;
  /** Override the sub-text */
  subheadline?: string;
}

export function GLP1Hero({
  headline = 'Find Your Perfect GLP-1 Match',
  subheadline = 'Answer a few questions and we’ll match you with the best providers for your needs, budget, and preferences.',
}: GLP1HeroProps) {
  return (
    <section
      className='py-12 md:py-20'
      style={{
        background:
          'linear-gradient(135deg, #F8F4ED 0%, #F4EBD0 50%, #E5DDC8 100%)',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center'>
        {/* LEFT — H1, sub, dual CTA, trust badges */}
        <div>
          <h1
            className='text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 tracking-tight'
            style={{
              color: '#0E2A3A',
              fontFamily: '"Playfair Display", "Georgia", serif',
            }}
          >
            {headline}
          </h1>

          <p className='text-base md:text-lg max-w-xl mb-7 leading-relaxed' style={{ color: '#3D5560' }}>
            {subheadline}
          </p>

          <div className='flex flex-wrap items-center gap-3 mb-8'>
            <Link
              href='/match'
              className='inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-xl'
              style={{ backgroundColor: '#D4A33A' }}
            >
              Take the Quiz
            </Link>
            <Link
              href='/providers'
              className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5'
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0E2A3A',
                border: '1.5px solid #0E2A3A',
              }}
            >
              Browse Providers
            </Link>
          </div>

          {/* Trust badge strip — 3 columns matching matchglp1 model */}
          <div className='flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm' style={{ color: '#3D5560' }}>
            <TrustBadge icon={<ShieldCheck className='h-4 w-4' />} label='Medically Reviewed' />
            <TrustBadge icon={<FileText className='h-4 w-4' />} label='No Hidden Fees' />
            <TrustBadge icon={<Calendar className='h-4 w-4' />} label='Updated Weekly' />
          </div>
        </div>

        {/* RIGHT — Treatment Cost Explorer card */}
        <div>
          <GLP1CostExplorerCard />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className='flex items-center gap-1.5'>
      <span style={{ color: '#7CA982' }}>{icon}</span>
      <span className='font-medium'>{label}</span>
    </div>
  );
}
