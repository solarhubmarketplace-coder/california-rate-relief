'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';

export function ReviewFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='border-t py-16'
      style={{ backgroundColor: '#0a0a0a', borderColor: '#27272a' }}
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-3 gap-10 mb-12'>
            {/* Brand */}
            <div className='space-y-4'>
              <Link href='/reviews' className='flex items-center gap-2.5'>
                <div
                  className='w-10 h-10 rounded-lg flex items-center justify-center font-extrabold text-base'
                  style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                >
                  GV
                </div>
                <div className='flex flex-col'>
                  <span
                    className='font-bold text-xl tracking-tight leading-tight'
                    style={{ color: '#f5f5f5' }}
                  >
                    GreenReviewsHub
                  </span>
                  <span
                    className='text-[10px] font-semibold tracking-widest uppercase leading-tight'
                    style={{ color: '#22c55e' }}
                  >
                    Honest Energy Reviews
                  </span>
                </div>
              </Link>
              <p
                className='text-sm leading-relaxed font-medium'
                style={{ color: '#d4d4d8' }}
              >
                Independent, hands-on reviews of portable power stations,
                e-bikes, smart home devices, lawn equipment, and everything
                in the green energy space. We test it so you don&apos;t have to
                guess.
              </p>
            </div>

            {/* Review Categories */}
            <div>
              <h4
                className='font-bold text-lg mb-6 tracking-tight'
                style={{ color: '#f5f5f5' }}
              >
                Reviews
              </h4>
              <ul className='space-y-3'>
                {[
                  {
                    label: 'Portable Power Stations',
                    href: '/reviews/best-portable-power-stations',
                  },
                  {
                    label: 'Electric Bikes',
                    href: '/reviews/best-electric-bikes',
                  },
                  {
                    label: 'Electric Lawn Mowers',
                    href: '/reviews/best-electric-lawn-mower',
                  },
                  {
                    label: 'Mini Split AC',
                    href: '/reviews/best-mini-split-ac',
                  },
                  {
                    label: 'Smart Thermostats',
                    href: '/reviews/best-smart-thermostat',
                  },
                  {
                    label: 'Whole House Generators',
                    href: '/reviews/best-whole-house-generator',
                  },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='font-medium transition-colors inline-flex items-center gap-2 group'
                      style={{ color: '#d4d4d8' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#22c55e';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#a1a1aa';
                      }}
                    >
                      {link.label}
                      <span className='opacity-0 group-hover:opacity-100 transition-opacity'>
                        &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Links */}
            <div>
              <h4
                className='font-bold text-lg mb-6 tracking-tight'
                style={{ color: '#f5f5f5' }}
              >
                About
              </h4>
              <ul className='space-y-3'>
                {[
                  { label: 'How We Test', href: '/reviews' },
                  { label: 'Editorial Policy', href: '/reviews' },
                  { label: 'Affiliate Disclosure', href: '/reviews' },
                  { label: 'Privacy Policy', href: '/privacy-policy' },
                  { label: 'Terms of Service', href: '/terms-of-service' },
                  { label: 'Contact', href: 'mailto:reviews@ratereliefca.com' },
                ].map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('mailto:') ? (
                      <a
                        href={link.href}
                        className='font-medium transition-colors inline-flex items-center gap-2 group'
                        style={{ color: '#d4d4d8' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#22c55e';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#a1a1aa';
                        }}
                      >
                        {link.label}
                        <span className='opacity-0 group-hover:opacity-100 transition-opacity'>
                          &rarr;
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className='font-medium transition-colors inline-flex items-center gap-2 group'
                        style={{ color: '#d4d4d8' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#22c55e';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#a1a1aa';
                        }}
                      >
                        {link.label}
                        <span className='opacity-0 group-hover:opacity-100 transition-opacity'>
                          &rarr;
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='pt-8' style={{ borderTop: '1px solid #27272a' }}>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <p className='text-sm font-medium' style={{ color: '#71717a' }}>
                &copy; {currentYear} GreenReviewsHub. All rights reserved.
              </p>
              <p className='text-xs' style={{ color: '#52525b' }}>
                GreenReviewsHub is reader-supported. When you buy through links on our
                site, we may earn an affiliate commission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
