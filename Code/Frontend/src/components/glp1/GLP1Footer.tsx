import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { glp1Providers } from '@/lib/glp1-providers';

const EXPLORE_LINKS = [
  { label: 'Find Your Match',  href: '/match' },
  { label: 'Compare Providers', href: '/compare' },
  { label: 'All Providers',    href: '/providers' },
  { label: 'Best Rankings',    href: '/best' },
  { label: 'Cost Calculator',  href: '/tools/cost-calculator' },
  { label: 'News',             href: '/news' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy',       href: '/privacy' },
  { label: 'Terms of Use',         href: '/terms' },
  { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  { label: 'Medical Disclaimer',   href: '/disclaimer' },
  { label: 'Methodology',          href: '/methodology' },
  { label: 'Contact',              href: '/contact' },
];

export function GLP1Footer() {
  // Pull provider lists for the footer columns (matchglp1 model)
  const telemedicineProviders = glp1Providers
    .filter((p) => p.category === 'Telemedicine' && p.status === 'Active')
    .slice(0, 8);
  const compoundingPharmacies = glp1Providers
    .filter((p) => p.category === 'Compounding Pharmacy' && p.status === 'Active');

  return (
    <footer
      className='text-white pt-14 pb-6'
      style={{ backgroundColor: '#0F4D5C' }}
    >
      <div className='max-w-7xl mx-auto px-4 md:px-6'>
        {/* Top row: 4 columns */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12'>
          {/* Brand column */}
          <div>
            <div className='flex items-center mb-4'>
              <span
                aria-hidden
                className='inline-block w-6 h-6 rounded-full mr-2'
                style={{ backgroundColor: '#D4A33A' }}
              />
              <span className='text-xl font-extrabold' style={{ color: '#D4A33A' }}>
                glp1
              </span>
              <span className='text-xl font-extrabold text-white'>comparehub</span>
            </div>
            <p className='text-sm leading-relaxed mb-4' style={{ color: 'rgba(255,255,255,0.75)' }}>
              Your independent guide to comparing GLP-1 medication providers. Find the right
              telehealth program for your weight-loss journey.
            </p>
            <div
              className='inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full'
              style={{
                backgroundColor: 'rgba(95, 191, 170, 0.18)',
                color: '#7CA982',
              }}
            >
              <ShieldCheck className='h-3.5 w-3.5' />
              Independent &amp; Unbiased
            </div>
          </div>

          {/* Explore column */}
          <FooterColumn title='EXPLORE' links={EXPLORE_LINKS} />

          {/* Legal column */}
          <FooterColumn title='LEGAL' links={LEGAL_LINKS} />

          {/* Providers column (telemedicine + compounding pharmacies) */}
          <div>
            <h4
              className='text-xs font-bold tracking-widest mb-4'
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              TELEMEDICINE PROVIDERS
            </h4>
            <ul className='space-y-2 mb-6'>
              {telemedicineProviders.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/providers/${p.slug}`}
                    className='text-sm transition-colors'
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>

            {compoundingPharmacies.length > 0 && (
              <>
                <h4
                  className='text-xs font-bold tracking-widest mb-3'
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  COMPOUNDING PHARMACIES
                </h4>
                <ul className='space-y-2'>
                  {compoundingPharmacies.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/providers/${p.slug}`}
                        className='text-sm transition-colors'
                        style={{ color: 'rgba(255,255,255,0.75)' }}
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Disclaimer block */}
        <div
          className='border-t pt-6 mt-6 text-xs leading-relaxed space-y-3'
          style={{
            borderColor: 'rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          <p>
            <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Medical Disclaimer:</strong> The
            information on this website is for educational purposes only and is not intended to
            replace professional medical advice, diagnosis, or treatment. Always consult with a
            qualified healthcare provider before starting any medication or treatment program. GLP-1
            medications require a prescription and should only be used under medical supervision.
          </p>
          <p>
            <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Affiliate Disclosure:</strong>{' '}
            GLP1CompareHub.com is an independent review site. We may earn a commission when you
            click our links — at no additional cost to you. Our editorial recommendations are not
            influenced by commission rates. See our{' '}
            <Link
              href='/affiliate-disclosure'
              className='underline'
              style={{ color: '#D4A33A' }}
            >
              full affiliate disclosure
            </Link>
            .
          </p>
          <p>
            <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Compounded GLP-1 Notice:</strong>{' '}
            Compounded medications (compounded semaglutide, compounded tirzepatide) are NOT
            FDA-approved. They are produced by state-licensed 503A and 503B compounding pharmacies
            under specific FDA exemptions. Consult your prescriber about whether a branded
            FDA-approved medication or a compounded alternative is right for you.
          </p>
        </div>

        <p
          className='text-xs text-center mt-8'
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
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
      <h4
        className='text-xs font-bold tracking-widest mb-4'
        style={{ color: 'rgba(255,255,255,0.55)' }}
      >
        {title}
      </h4>
      <ul className='space-y-2'>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className='text-sm transition-colors'
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
