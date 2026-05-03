'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Find Your Match', href: '/match' },
  { label: 'Simulator',       href: '/simulator' },
  { label: 'Providers',       href: '/providers' },
  { label: 'Best Rankings',   href: '/best' },
  { label: 'Compare',         href: '/compare' },
  { label: 'News',            href: '/news' },
];

export function GLP1Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className='sticky top-0 z-50 border-b'
      style={{
        backgroundColor: 'rgba(253, 247, 240, 0.92)',
        backdropFilter: 'blur(8px)',
        borderColor: '#E8DDD0',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4'>
        {/* Logo — two-tone wordmark per matchglp1 model */}
        <Link href='/' className='flex items-center gap-1.5 hover:opacity-90 transition'>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className='hidden lg:flex items-center gap-7 text-sm font-medium'>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='transition-colors'
              style={{ color: '#3A1B3D' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F47C5B')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#3A1B3D')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className='flex items-center gap-2'>
          <Link
            href='/match'
            className='inline-flex items-center gap-2 text-white px-5 md:px-6 py-2.5 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg whitespace-nowrap text-sm md:text-base'
            style={{ backgroundColor: '#F47C5B' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E5654A')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F47C5B')}
          >
            Take the Quiz
          </Link>
          <button
            type='button'
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className='lg:hidden p-2 rounded-md'
            style={{ color: '#3A1B3D' }}
          >
            {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav
          className='lg:hidden border-t'
          style={{ backgroundColor: '#FDF7F0', borderColor: '#E8DDD0' }}
        >
          <div className='max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className='py-2.5 px-2 rounded-md text-sm font-medium transition-colors'
                style={{ color: '#3A1B3D' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

/**
 * Two-tone wordmark — "glp1" in coral + "comparehub" in deep wine.
 * Mirrors matchglp1's logo style without copying it.
 */
function Logo() {
  return (
    <span className='flex items-center'>
      {/* Optional icon dot — small coral circle, replaceable with real logo SVG */}
      <span
        aria-hidden
        className='inline-block w-6 h-6 rounded-full mr-2'
        style={{ backgroundColor: '#F47C5B' }}
      />
      <span className='text-xl font-extrabold tracking-tight' style={{ color: '#F47C5B' }}>
        glp1
      </span>
      <span className='text-xl font-extrabold tracking-tight' style={{ color: '#3A1B3D' }}>
        comparehub
      </span>
    </span>
  );
}
