import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  const hostname = (request.headers.get('host') || '').toLowerCase();
  const { pathname } = request.nextUrl;

  // ====================================================================
  // Hostname-based routing — five sites, one codebase:
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
  //   athomebiohacking.com  → AHB biohacking review site
  //   glp1comparehub.com       → GLP-1 telehealth comparison site
  //     /            → /glp1-home (rewrite)
  //     /tirzepatide /semaglutide /comparisons /research /fda-news /side-effects/*
  //     /about /privacy /terms /contact /affiliate-disclosure /methodology
  //
  // All domains deploy from this same repo.
  // ====================================================================
  const isGreenReviewsHub = /^(www\.)?greenreviewshub\.com$/.test(hostname);
  const isCRR = /^(www\.)?ratereliefca\.com$/.test(hostname);
  const isSecureHomeGear = /^(www\.)?securehomegear\.com$/.test(hostname);
  const isAtHomeBiohacking = /^(www\.)?athomebiohacking\.com$/.test(hostname);
  const isGLP1CompareHub = /^(www\.)?glp1comparehub\.com$/.test(hostname);

  // SHG-only paths — block these on other hosts so CRR/GRH don't leak SHG pages
  // NOTE: /compare/ moved from SHG-exclusive to GLP1-also (matchglp1 model uses
  // it for provider-vs-provider pages). When SHG launches its compare flow,
  // namespace it as /shg-compare/ to avoid collision.
  const isSHGPath =
    pathname.startsWith('/cameras') ||
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

  // GLP1-only paths — block these on other hosts
  const isGLP1Path =
    pathname.startsWith('/glp1-home') ||
    pathname.startsWith('/providers') ||
    pathname.startsWith('/best') ||
    pathname.startsWith('/compare') ||
    pathname.startsWith('/match') ||
    pathname.startsWith('/simulator') ||
    pathname.startsWith('/tools') ||
    pathname.startsWith('/news') ||
    pathname.startsWith('/disclaimer') ||
    pathname.startsWith('/peptides') ||
    pathname.startsWith('/tirzepatide') ||
    pathname.startsWith('/semaglutide') ||
    pathname.startsWith('/comparisons') ||
    pathname.startsWith('/research') ||
    pathname.startsWith('/fda-news') ||
    pathname.startsWith('/side-effects') ||
    pathname.startsWith('/zepbound') ||
    pathname.startsWith('/wegovy') ||
    pathname.startsWith('/mounjaro') ||
    pathname.startsWith('/ozempic') ||
    pathname.startsWith('/oral-semaglutide') ||
    pathname.startsWith('/oral-tirzepatide') ||
    pathname.startsWith('/sublingual-semaglutide') ||
    pathname.startsWith('/sublingual-tirzepatide') ||
    pathname.startsWith('/compounded-tirzepatide') ||
    pathname.startsWith('/compounded-semaglutide') ||
    pathname.startsWith('/compounded-liraglutide') ||
    pathname.startsWith('/compounded-glp-1') ||
    pathname.startsWith('/microdosing') ||
    pathname.startsWith('/microdose') ||
    pathname.startsWith('/cheapest-tirzepatide') ||
    pathname.startsWith('/cheapest-semaglutide') ||
    pathname.startsWith('/cheapest-compounded') ||
    pathname.startsWith('/best-compounded') ||
    pathname.startsWith('/wegovy-pill') ||
    pathname.startsWith('/wegovy-vs') ||
    pathname.startsWith('/ozempic-vs') ||
    pathname.startsWith('/lipotropic') ||
    pathname.startsWith('/nad-iv') ||
    pathname.startsWith('/nad-injection') ||
    pathname.startsWith('/nad-nasal') ||
    pathname.startsWith('/sermorelin') ||
    pathname.startsWith('/glutathione') ||
    pathname.startsWith('/methylene-blue') ||
    pathname.startsWith('/glp-1-stack') ||
    pathname.startsWith('/glp1-stack') ||
    pathname.startsWith('/503a') ||
    pathname.startsWith('/is-compounded-glp') ||
    pathname.startsWith('/fda-compounded') ||
    pathname.startsWith('/how-tirzepatide-works') ||
    pathname.startsWith('/how-semaglutide-works') ||
    pathname.startsWith('/how-to-microdose');

  // --- greenreviewshub.com behavior ---
  if (isGreenReviewsHub) {
    // Root → reviews index
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/reviews', request.url), 302);
    }
    // Block SHG, AHB, and GLP1 paths from leaking on GRH
    if (isSHGPath || isAHBPath || isGLP1Path) {
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
    // Block AHB and GLP1 paths from leaking on SHG
    if (isAHBPath || isGLP1Path) {
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
    // Block SHG and GLP1 paths from leaking on AHB
    if (isSHGPath || isGLP1Path) {
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

  // --- glp1comparehub.com behavior ---
  if (isGLP1CompareHub) {
    // Root → rewrite to /glp1-home (serves GLP1CompareHub homepage)
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/glp1-home', request.url));
    }
    // Block other niches from leaking on GLP1CompareHub
    if (isSHGPath || isAHBPath) {
      return new NextResponse(null, { status: 404 });
    }
    // Allow GLP1 paths, shared trust pages, Next internals, API routes, and static files
    if (
      isGLP1Path ||
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
    // Any other path → 404 (don't leak other niches here)
    return new NextResponse(null, { status: 404 });
  }

  // --- ratereliefca.com → 301 redirect /reviews/* to greenreviewshub.com ---
  if (isCRR && pathname.startsWith('/reviews')) {
    return NextResponse.redirect(
      `https://greenreviewshub.com${pathname}`,
      301
    );
  }

  // --- ratereliefca.com → block SHG, AHB, and GLP1 paths so they don't leak onto CRR ---
  // Shared trust pages (/about, /contact, /affiliate-disclosure) are allowed
  // and resolved by host-aware page handlers.
  if (isCRR && (isSHGPath || isAHBPath || isGLP1Path)) {
    return new NextResponse(null, { status: 404 });
  }

  // --- greenreviewshub.com (already handled above) — but also block GLP1 paths ---
  // (added defensively in case someone adds a path that matches both)

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

