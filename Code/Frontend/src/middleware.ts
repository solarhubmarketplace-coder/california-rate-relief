import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  const hostname = (request.headers.get('host') || '').toLowerCase();
  const { pathname } = request.nextUrl;

  // ====================================================================
  // Hostname-based routing — three sites, one codebase:
  //
  //   ratereliefca.com      → CRR solar business (everything except /reviews/*)
  //   ratereliefca.com/reviews → 301 redirect to greenreviewshub.com
  //   greenreviewshub.com   → only serve /reviews/* (the 119 review pages)
  //   greenreviewshub.com/<x> → 404 if not a review page
  //   securehomegear.com    → SHG security-camera affiliate site
  //     /            → /shg-home (rewrite)
  //     /cameras/*   → product reviews and category hub
  //     /compare/*   → head-to-head comparisons
  //     /alternatives/* → brand-alternative funnel pages
  //     /about /privacy /terms /contact /affiliate-disclosure → compliance
  //   securehomegear.com/<x> → 404 if not an allowed SHG path
  //
  // All three domains deploy from this same repo.
  // ====================================================================
  const isGreenReviewsHub = /^(www\.)?greenreviewshub\.com$/.test(hostname);
  const isCRR = /^(www\.)?ratereliefca\.com$/.test(hostname);
  const isSecureHomeGear = /^(www\.)?securehomegear\.com$/.test(hostname);
  const isAtHomeBiohacking = /^(www\.)?athomebiohacking\.com$/.test(hostname);

  // SHG-only paths — block these on other hosts so CRR/GRH don't leak SHG pages
  const isSHGPath =
    pathname.startsWith('/cameras') ||
    pathname.startsWith('/compare') ||
    pathname.startsWith('/alternatives') ||
    pathname.startsWith('/shg-home');

  // Shared trust pages — host-aware page handlers serve correct domain content
  // for /about, /contact, /affiliate-disclosure, /privacy, /terms, /methodology,
  // /author/* on every domain.
  const isSharedTrustPath =
    pathname === '/about' ||
    pathname === '/contact' ||
    pathname === '/affiliate-disclosure' ||
    pathname === '/privacy' ||
    pathname === '/terms' ||
    pathname === '/methodology' ||
    pathname.startsWith('/author/');

  // AHB-only paths — block these on other hosts
  const isAHBPath =
    pathname.startsWith('/ahb-home') ||
    pathname.startsWith('/cold-plunge') ||
    pathname.startsWith('/infrared-sauna') ||
    pathname.startsWith('/pemf') ||
    pathname.startsWith('/red-light-therapy') ||
    pathname.startsWith('/vibration-plate') ||
    pathname.startsWith('/guides') ||
    pathname.startsWith('/learn') ||
    pathname.startsWith('/vs');

  // --- greenreviewshub.com behavior ---
  if (isGreenReviewsHub) {
    // Root → reviews index
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/reviews', request.url), 302);
    }
    // Block SHG and AHB paths from leaking on GRH
    if (isSHGPath || isAHBPath) {
      return new NextResponse(null, { status: 404 });
    }
    // Allow review pages, shared trust pages, Next internals, API routes, and static files
    if (
      pathname.startsWith('/reviews') ||
      isSharedTrustPath ||
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname === '/favicon.ico' ||
      pathname === '/robots.txt' ||
      pathname === '/sitemap.xml' ||
      /\.[a-zA-Z0-9]+$/.test(pathname)
    ) {
      return NextResponse.next();
    }
    // Any other path on this domain → 404
    return new NextResponse(null, { status: 404 });
  }

  // --- securehomegear.com behavior ---
  if (isSecureHomeGear) {
    // Root → rewrite to /shg-home (serves SHG homepage)
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/shg-home', request.url));
    }
    // Block AHB paths from leaking on SHG
    if (isAHBPath) {
      return new NextResponse(null, { status: 404 });
    }
    // Allow SHG paths, shared trust pages, Next internals, API routes, and static files
    if (
      isSHGPath ||
      isSharedTrustPath ||
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname === '/favicon.ico' ||
      pathname === '/robots.txt' ||
      pathname === '/sitemap.xml' ||
      /\.[a-zA-Z0-9]+$/.test(pathname)
    ) {
      return NextResponse.next();
    }
    // Any other path on this domain → 404 (don't expose CRR or GRH pages here)
    return new NextResponse(null, { status: 404 });
  }

  // --- athomebiohacking.com behavior ---
  if (isAtHomeBiohacking) {
    // Root → rewrite to /ahb-home (serves AHB homepage)
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/ahb-home', request.url));
    }
    // Block SHG paths from leaking on AHB
    if (isSHGPath) {
      return new NextResponse(null, { status: 404 });
    }
    // Allow AHB paths, shared trust pages, Next internals, API routes, and static files
    if (
      isAHBPath ||
      isSharedTrustPath ||
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname === '/favicon.ico' ||
      pathname === '/robots.txt' ||
      pathname === '/sitemap.xml' ||
      /\.[a-zA-Z0-9]+$/.test(pathname)
    ) {
      return NextResponse.next();
    }
    // Any other path → 404 (don't leak CRR/GRH/SHG pages here)
    return new NextResponse(null, { status: 404 });
  }

  // --- ratereliefca.com → 301 redirect /reviews/* to greenreviewshub.com ---
  if (isCRR && pathname.startsWith('/reviews')) {
    return NextResponse.redirect(
      `https://greenreviewshub.com${pathname}`,
      301
    );
  }

  // --- ratereliefca.com → block SHG and AHB paths so they don't leak onto CRR ---
  // Shared trust pages (/about, /contact, /affiliate-disclosure) are allowed
  // and resolved by host-aware page handlers.
  if (isCRR && (isSHGPath || isAHBPath)) {
    return new NextResponse(null, { status: 404 });
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

