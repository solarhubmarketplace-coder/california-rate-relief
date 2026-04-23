'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';

const categories = [
  { label: 'Power Stations', href: '/reviews/best-portable-power-stations' },
  { label: 'E-Bikes', href: '/reviews/best-electric-bikes' },
  { label: 'Lawn & Garden', href: '/reviews/best-electric-lawn-mower' },
  { label: 'Smart Home', href: '/reviews/best-smart-thermostat' },
  { label: 'Generators', href: '/reviews/best-whole-house-generator' },
  { label: 'HVAC', href: '/reviews/best-mini-split-ac' },
];

export function ReviewHeader() {
  return (
    <header
      className='sticky top-0 z-50 border-b backdrop-blur-sm'
      style={{
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        borderColor: '#27272a',
      }}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/reviews' className='flex items-center gap-2.5'>
            <div
              className='w-9 h-9 rounded-lg flex items-center justify-center font-extrabold text-sm'
              style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
            >
              GV
            </div>
            <div className='flex flex-col'>
              <span
                className='font-bold text-lg tracking-tight leading-tight'
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

          {/* Category Nav */}
          <nav className='hidden lg:flex items-center gap-1'>
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className='text-sm font-medium px-3 py-1.5 rounded-md transition-colors'
                style={{ color: '#d4d4d8' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#f5f5f5';
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#a1a1aa';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {cat.label}
              </Link>
            ))}
          </nav>

          {/* All Reviews Link */}
          <div className='flex items-center gap-3'>
            <Link
              href='/reviews'
              className='text-sm font-semibold px-4 py-2 rounded-lg transition-all'
              style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#16a34a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#22c55e';
              }}
            >
              All Reviews
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
