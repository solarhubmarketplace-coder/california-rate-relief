'use client';

import Link from 'next/link';

export function SHGHeader() {
  return (
    <header
      className='border-b sticky top-0 z-50 backdrop-blur-sm'
      style={{
        backgroundColor: '#0a0f1ccc',
        borderColor: '#1e293b',
      }}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2.5'>
            <div
              className='w-10 h-10 rounded-lg flex items-center justify-center font-extrabold text-base'
              style={{ backgroundColor: '#f59e0b', color: '#0a0f1c' }}
            >
              SHG
            </div>
            <div className='flex flex-col'>
              <span
                className='font-bold text-xl tracking-tight leading-tight'
                style={{ color: '#f5f5f5' }}
              >
                SecureHomeGear
              </span>
              <span
                className='text-[10px] font-semibold tracking-widest uppercase leading-tight'
                style={{ color: '#f59e0b' }}
              >
                Honest Home Security Reviews
              </span>
            </div>
          </Link>

          {/* Nav */}
          <nav className='hidden md:flex items-center gap-6'>
            <Link
              href='/cameras'
              className='text-sm font-medium transition-colors'
              style={{ color: '#d4d4d8' }}
            >
              Cameras
            </Link>
            <Link
              href='/alternatives/ring'
              className='text-sm font-medium transition-colors'
              style={{ color: '#d4d4d8' }}
            >
              Ring Alternatives
            </Link>
            <Link
              href='/compare/eufy-vs-ring'
              className='text-sm font-medium transition-colors'
              style={{ color: '#d4d4d8' }}
            >
              Compare
            </Link>
            <Link
              href='/about'
              className='text-sm font-medium transition-colors'
              style={{ color: '#d4d4d8' }}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
