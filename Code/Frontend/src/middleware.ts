import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  const hostname = (request.headers.get('host') || '').toLowerCase();
  const { pathname } = request.nextUrl;

  // ====================================================================
  // Hostname-based routing — keep CRR (ratereliefca.com) and the
  // affiliate review site (greenreviewshub.com) cleanly split:
  //
  //   ratereliefca.com         → CRR solar business (everything except /reviews/*)
  //   ratereliefca.com/reviews → 301 redirect to greenreviewshub.com
  //   greenreviewshub.com      → only serve /reviews/* (the 119 review pages)
  //   greenreviewshub.com/<x>  → 404 if not a review page
  //
  // Both domains deploy from this same repo. Vercel hosts greenreviewshub,
  // Railway hosts ratereliefca. One commit updates both sites.
  // ====================================================================
  const isGreenReviewsHub = /^(www\.)?greenreviewshub\.com$/.test(hostname);
  const isCRR = /^(www\.)?ratereliefca\.com$/.test(hostname);

  // --- greenreviewshub.com behavior ---
  if (isGreenReviewsHub) {
    // Root → reviews index
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/reviews', request.url), 302);
    }
    // Allow review pages, Next internals, API routes, and static files
    if (
      pathname.startsWith('/reviews') ||
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname === '/favicon.ico' ||
      pathname === '/robots.txt' ||
      pathname === '/sitemap.xml' ||
      /\.[a-zA-Z0-9]+$/.test(pathname)
    ) {
      return NextResponse.next();
    }
    // Any other path on this domain → 404 (don't expose CRR pages here)
    return new NextResponse(null, { status: 404 });
  }

  // --- ratereliefca.com → 301 redirect /reviews/* to greenreviewshub.com ---
  if (isCRR && pathname.startsWith('/reviews')) {
    return NextResponse.redirect(
      `https://greenreviewshub.com${pathname}`,
      301
    );
  }

  // ====================================================================
  // Below this line: existing CRR auth logic — runs only on
  // ratereliefca.com (and on Railway/Vercel preview URLs for testing).
  // ====================================================================

  // Create a response to modify
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Create Supabase client for server-side
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Public routes that don't require authentication
  const publicRoutes = ['/login', '/reset-password', '/book', '/testing-guide'];
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));

  // Allow public routes without authentication check
  if (isPublicRoute) {
    return response;
  }

  // Get the user session
  const { data: { user } } = await supabase.auth.getUser();

  // If user is logged in and trying to access login/reset-password, redirect to home
  if (user && (pathname.startsWith('/login') || pathname.startsWith('/reset-password'))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // For all other routes, let the client-side handle auth checks
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};


// Trigger Vercel deploy on greenreviewshub.com (project-tyk68) - 2026-04-23T04:40:05Z
