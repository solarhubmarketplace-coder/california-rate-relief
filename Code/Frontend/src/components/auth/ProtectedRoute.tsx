'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/20'>
        <div className='text-center space-y-4'>
          <Loader2 className='h-8 w-8 animate-spin text-primary mx-auto' />
          <p className='text-muted-foreground'>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}

