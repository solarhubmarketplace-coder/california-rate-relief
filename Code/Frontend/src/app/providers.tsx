'use client';

import { Toaster } from '@/components/ui/toaster';

// =============================================================================
// Root providers — rendered by app/layout.tsx on every page of all five hosts.
// =============================================================================
// Keep this to what public pages actually use: the Radix <Toaster /> that
// useToast() renders into (QualificationWizard, login, reset-password).
//
// Until 2026-09-22 this also mounted QueryClientProvider, AuthProvider,
// TooltipProvider and the sonner <Toaster />. None of them has a consumer
// outside the dashboard and the login page, but because they sat in the root,
// every public page shipped @supabase/supabase-js (chunks 96938 + f33fb368,
// ~57 KB gzipped), @tanstack/react-query, sonner and the Radix tooltip/popper
// code, and created a Supabase auth client on load. They now live where they
// are used:
//   - app/(main)/dashboard/dashboard-providers.tsx  (the full set, unchanged)
//   - app/(auth)/layout.tsx                         (AuthProvider for /login)
// useAuth() throws outside an AuthProvider, so a public component that starts
// needing it will fail loudly in development rather than silently.
// =============================================================================

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
