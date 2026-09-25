import type { Metadata } from 'next';
import Link from 'next/link';

// One robots meta on the 404 page (plan 11.4, audit T-17). Next adds
// <meta name="robots" content="noindex"> to every 404 by itself; the root
// layout's default robots (index, follow) was being rendered next to it, so
// the page carried two conflicting robots metas. `robots: null` drops the
// layout default here, leaving Next's single noindex.
export const metadata: Metadata = {
  robots: null,
};

export default function NotFound() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-muted'>
      <div className='text-center'>
        <h1 className='mb-4 text-4xl font-bold'>404</h1>
        <p className='mb-4 text-xl text-muted-foreground'>
          Oops! Page not found
        </p>
        <Link href='/' className='text-primary underline hover:text-primary/90'>
          Return to Home
        </Link>
      </div>
    </div>
  );
}
