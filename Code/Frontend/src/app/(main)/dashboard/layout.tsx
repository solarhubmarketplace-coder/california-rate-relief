import type { Metadata } from 'next';
import '@/app/globals.css';
import { DashboardProviders } from './dashboard-providers';

export const metadata: Metadata = {
  title: 'California Rate Relief - Solar CRM',
  robots: { index: false, follow: false },
  description:
    'California Rate Relief: Intelligent solar CRM for managing leads, calls, and appointments',
  icons: {
    icon: '/img/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <DashboardProviders>{children}</DashboardProviders>;
}
