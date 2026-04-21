import { ReactNode } from 'react';

interface ReviewLayoutProps {
  children: ReactNode;
}

export function ReviewLayout({ children }: ReviewLayoutProps) {
  return (
    <div className='min-h-screen' style={{ backgroundColor: '#0a0a0a', color: '#e5e5e5' }}>
      {children}
    </div>
  );
}
