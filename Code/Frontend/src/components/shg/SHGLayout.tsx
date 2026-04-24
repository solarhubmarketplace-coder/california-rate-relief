'use client';

import { ReactNode } from 'react';

interface SHGLayoutProps {
  children: ReactNode;
}

export function SHGLayout({ children }: SHGLayoutProps) {
  return (
    <div
      className='min-h-screen'
      style={{ backgroundColor: '#0a0f1c', color: '#f5f5f5' }}
    >
      {children}
    </div>
  );
}
