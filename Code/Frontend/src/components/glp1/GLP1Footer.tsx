import Link from 'next/link';
import { ExternalLink, ShieldCheck } from 'lucide-react';

const RESEARCH_LINKS = [
  { label: 'Current Prices', href: '/pricing' },
  { label: 'Download Price Data (CSV)', href: '/pricing/data.csv' },
  { label: 'Download Price Data (JSON)', href: '/pricing/data.json' },
  { label: 'Methodology', href: '/methodology' },
];

const ABOUT_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'About the Author', href: '/author/chad-simpson' },
  { label: 'Corrections & Contact', href: '/contact' },
  { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
];

const LEGAL_LINKS = [
  { label: 'Medical Disclaimer', href: '/disclaimer' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
];

export function GLP1Footer() {
  return (
    <footer className='pb-6 pt-14 text-white' style={{ backgroundColor: '#0F4D5C' }}>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <div className='mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <div className='mb-4 flex items-center'>
              <span aria-hidden className='mr-2 inline-block h-6 w-6 rounded-full' style={{ backgroundColor: '#D4A33A' }} />
              <span className='text-xl font-extrabold' style={{ color: '#D4A33A' }}>glp1</span>
              <span className='text-xl font-extrabold text-white'>comparehub</span>
            </div>
            <p className='mb-4 text-sm leading-relaxed' style={{ color: 'rgba(255,255,255,0.75)' }}>
              A source-linked record of what GLP-1 telehealth providers publicly charge, what they
              say is included, and what their pricing pages leave unresolved.
            </p>
            <div className='inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs' style={{ backgroundColor: 'rgba(95, 191, 170, 0.18)', color: '#C8DDC1' }}>
              <ShieldCheck className='h-3.5 w-3.5' /> Evidence before rankings
            </div>
          </div>

          <FooterColumn title='RESEARCH' links={RESEARCH_LINKS} />
          <FooterColumn title='ABOUT' links={ABOUT_LINKS} />

          <div>
            <FooterColumn title='LEGAL' links={LEGAL_LINKS} />
            <a
              href='https://www.fda.gov/drugs/human-drug-compounding/fda-telehealth-companies-what-know-when-promoting-compounded-drugs'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-5 inline-flex items-center gap-1.5 text-sm underline underline-offset-4'
              style={{ color: '#F4D483' }}
            >
              FDA telehealth guidance <ExternalLink className='h-3.5 w-3.5' />
            </a>
          </div>
        </div>

        <div className='mt-6 space-y-3 border-t pt-6 text-xs leading-relaxed' style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.58)' }}>
          <p>
            <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Medical disclaimer:</strong>{' '}
            GLP1CompareHub is a publisher, not a healthcare provider. Nothing on this site is
            medical advice, diagnosis, or treatment. Prescription decisions belong to a licensed
            clinician.
          </p>
          <p>
            <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Compounded-drug notice:</strong>{' '}
            Compounded drugs are not FDA-approved. FDA does not review them for safety,
            effectiveness, or quality before marketing.
          </p>
          <p>
            <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Affiliate disclosure:</strong>{' '}
            We may earn a commission from some links at no added cost to the reader. Compensation
            does not buy placement in the public price dataset.
          </p>
        </div>

        <p className='mt-8 text-center text-xs' style={{ color: 'rgba(255,255,255,0.42)' }}>
          &copy; {new Date().getFullYear()} GLP1CompareHub.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h4 className='mb-4 text-xs font-bold tracking-widest' style={{ color: 'rgba(255,255,255,0.55)' }}>
        {title}
      </h4>
      <ul className='space-y-2'>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className='text-sm transition-colors' style={{ color: 'rgba(255,255,255,0.78)' }}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
