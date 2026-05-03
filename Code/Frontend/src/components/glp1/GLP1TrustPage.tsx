import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { GLP1Layout } from './GLP1Layout';
import { GLP1Header } from './GLP1Header';
import { GLP1Footer } from './GLP1Footer';

interface GLP1TrustPageProps {
  /** Display title (H1) */
  title: string;
  /** Optional subtitle below H1 */
  subtitle?: string;
  /** Breadcrumb label (defaults to title) */
  breadcrumb?: string;
  /** Page content — server-rendered React tree */
  children: React.ReactNode;
}

/**
 * Shared layout shell for GLP1CompareHub trust pages (about, methodology,
 * affiliate-disclosure, privacy, terms, contact, disclaimer). Renders the
 * standard header + footer + a content panel styled to match the rest of the
 * GLP-1 site (warm cream + serif H1 + wine accents).
 *
 * Usage from the existing host-aware trust page handlers:
 *   if (d === 'glp1') {
 *     return (
 *       <GLP1TrustPage title='Affiliate Disclosure'>
 *         <CommonContent ... />
 *       </GLP1TrustPage>
 *     );
 *   }
 */
export function GLP1TrustPage({ title, subtitle, breadcrumb, children }: GLP1TrustPageProps) {
  return (
    <GLP1Layout>
      <GLP1Header />
      <main>
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3 flex items-center gap-1' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>Home</Link>
              <ChevronRight className='h-3 w-3' style={{ color: '#6B7B82' }} />
              <span style={{ color: '#0E2A3A' }}>{breadcrumb ?? title}</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className='text-base md:text-lg' style={{ color: '#3D5560' }}>
                {subtitle}
              </p>
            )}
          </div>
        </section>

        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <article
            className='max-w-3xl mx-auto px-4 md:px-6 leading-relaxed glp1-trust-page'
            style={{ color: '#3D5560' }}
          >
            {children}
          </article>
        </section>
      </main>
      <GLP1Footer />

      {/* Inline scoped styles for the trust-page article */}
      <style>{`
        .glp1-trust-page h2 {
          color: #0E2A3A;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .glp1-trust-page p { margin: 1rem 0; }
        .glp1-trust-page ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin: 1rem 0;
        }
        .glp1-trust-page li { margin-bottom: 0.5rem; }
        .glp1-trust-page a {
          color: #D4A33A;
          text-decoration: underline;
        }
        .glp1-trust-page strong { color: #0E2A3A; }
      `}</style>
    </GLP1Layout>
  );
}
