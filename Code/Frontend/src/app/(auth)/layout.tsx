import { AuthProvider } from '@/contexts/AuthContext';

// /login reads useAuth(). AuthProvider used to be mounted for every page by the
// root Providers; it now lives only here and in the dashboard's provider set,
// so public pages do not load the Supabase client. Route-group layouts do not
// change URLs.
export default function AuthGroupLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <AuthProvider>{children}</AuthProvider>;
}
