/**
 * Internal-link-equity component for glp1comparehub.com.
 * Renders a "Related Guides" grid that links to all OTHER GLP-1 content
 * pages, excluding the page it's used on.
 *
 * Usage:
 *   <RelatedGuides currentPath="/tirzepatide-near-me" />
 *
 * Add new pages to RELATED_LINKS as they ship.
 */

import Link from 'next/link';

interface RelatedLink {
  href: string;
  title: string;
  description: string;
}

const RELATED_LINKS: RelatedLink[] = [
  {
    href: '/best-compounded-tirzepatide',
    title: 'Best Compounded Tirzepatide 2026',
    description: '6 verified telehealth programs ranked by EPC and value.',
  },
  {
    href: '/cheapest-tirzepatide-online',
    title: 'Cheapest Tirzepatide Online',
    description: 'Three cost paths: $25 branded+insurance, $179 compounded, $299 LillyDirect.',
  },
  {
    href: '/tirzepatide-near-me',
    title: 'Tirzepatide Near Me',
    description: 'Local clinic vs telehealth — telehealth wins 4 of 5 times.',
  },
  {
    href: '/oral-tirzepatide',
    title: 'Oral Tirzepatide (Sublingual + Gum)',
    description: 'Needle-free formats from Direct Meds and Embody.',
  },
  {
    href: '/tirzepatide-tablets',
    title: 'Tirzepatide Tablets',
    description: 'Are they real? FDA status + the 4 oral options that exist.',
  },
  {
    href: '/tirzepatide-before-and-after',
    title: 'Tirzepatide Before & After',
    description: 'SURMOUNT-1 trial data + realistic month-by-month timeline.',
  },
  {
    href: '/compounded-tirzepatide',
    title: 'Compounded Tirzepatide Guide',
    description: 'Post-April 2026 FDA framing + verified provider pricing.',
  },
  {
    href: '/zepbound-vs-wegovy',
    title: 'Zepbound vs Wegovy',
    description: 'Branded comparison + the insurance-vs-cash-pay loophole.',
  },
  {
    href: '/tirzepatide-vs-semaglutide',
    title: 'Tirzepatide vs Semaglutide',
    description: 'The two molecules side-by-side with NEJM-cited trial data.',
  },
  {
    href: '/nad-iv-therapy',
    title: 'NAD+ IV Therapy',
    description: '$150-$1,000+ IV vs $79 first-month at-home injection.',
  },
];

interface RelatedGuidesProps {
  currentPath: string;
  /** Optional headline override */
  heading?: string;
  /** How many related guides to show (default 6) */
  limit?: number;
}

export function RelatedGuides({ currentPath, heading = 'Related Guides', limit = 6 }: RelatedGuidesProps) {
  const guides = RELATED_LINKS.filter((g) => g.href !== currentPath).slice(0, limit);

  return (
    <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <h2
          className='text-2xl md:text-3xl font-bold mb-2'
          style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
        >
          {heading}
        </h2>
        <p className='text-sm mb-6' style={{ color: '#6B7B82' }}>
          Continue your research with these related independent reviews.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className='block p-4 rounded-xl bg-white transition-all hover:-translate-y-0.5'
              style={{ border: '1px solid #E5DDC8' }}
            >
              <div className='font-bold mb-1' style={{ color: '#0E2A3A' }}>{g.title}</div>
              <div className='text-sm' style={{ color: '#3D5560' }}>{g.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
