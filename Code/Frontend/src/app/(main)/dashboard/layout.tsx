import type { Metadata } from 'next';
import '@/app/globals.css';
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
  title: 'California Rate Relief - Solar CRM',
  description:
    'California Rate Relief: Intelligent solar CRM for managing leads, calls, and appointments',
  icons: {
    icon: '/img/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Providers>{children}</Providers>;
}
import type { Metadata } from 'next';
import '@/app/globals.css';
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
  title: 'Sun Speed - Solar CRM',
  description:
    'Sun Speed: Intelligent solar CRM for managing leads, calls, and appointments',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Providers>{children}</Providers>;
}
