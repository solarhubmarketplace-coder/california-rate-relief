'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AuthProvider } from '@/contexts/AuthContext';

// The provider set the dashboard has always rendered (this is the former
// app/providers.tsx body, moved here unchanged on 2026-09-22 so public pages
// stop shipping Supabase, react-query, sonner and the Radix tooltip code).
// The dashboard layout already nested its own copy inside the root one, so
// its AuthProvider, QueryClient and Toasters are the ones it was using.
export function DashboardProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
