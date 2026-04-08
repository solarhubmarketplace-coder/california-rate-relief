import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'California Rate Relief Program | Cut Your Electric Bill by 50%',
  description:
    'Qualify for the 2026 Rate Relief Program. California homeowners can swap their high utility rate for a lower, fixed solar rate. No loans, no debt, $0 down.',
  keywords: 'California solar, rate relief program, electric bill savings, PPA, solar power purchase agreement, SCE savings, PG&E alternatives',
  openGraph: {
    title: 'California Rate Relief Program | Cut Your Electric Bill by 50%',
    description: 'Qualify for the 2026 Rate Relief Program. Swap your high utility rate for a lower, fixed rate. $0 Down.',
    type: 'website',
    locale: 'en_US',
  },
  robots: 'index, follow',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googlePlacesApiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {googlePlacesApiKey && (
          <Script
            src={`https://maps.googleapis.com/maps/api/js?key=${googlePlacesApiKey}&libraries=places`}
            strategy="beforeInteractive"
          />
        )}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
