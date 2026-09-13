import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { getGlp1RouteDisposition } from '@/lib/glp1-seo-routes';
import { PUBLIC_CRR_NO_SESSION_ROUTES } from '@/lib/growth-routes';

const GLP1_PUBLIC_CACHE_CONTROL =
  'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400';

function withGlp1PublicCache(response: NextResponse): NextResponse {
  response.headers.set('Cache-Control', GLP1_PUBLIC_CACHE_CONTROL);
  return response;
}

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
  // Treat the local preview host as CRR so the same public-route review can
  // run without a production hostname or Supabase credentials.
  const isCRR =
    /^(www\.)?ratereliefca\.com$/.test(hostname) ||
    /^localhost(?::\d+)?$/.test(hostname);
  const isCRRCalculator = pathname === '/tools/solar-panel-calculator';
  // Exact exception: keep other /tools routes assigned to the affiliate site.
  if (isCRRCalculator && !isCRR && !/^localhost(?::\d+)?$/.test(hostname)) return new NextResponse(null,{status:404});
  const isSecureHomeGear = /^(www\.)?securehomegear\.com$/.test(hostname);
  const isAtHomeBiohacking = /^(www\.)?athomebiohacking\.com$/.test(hostname);
  const isGLP1CompareHub = /^(www\.)?glp1comparehub\.com$/.test(hostname);

  // SHG's own /compare/<slug> pages (security-camera brand match-ups). '/compare'
  // is otherwise claimed by isGLP1Path below, which would 404 these on SHG's own
  // domain — keep this list in sync with the `compareSlugs` array in app/sitemap.ts.
  const SHG_COMPARE_SLUGS = [
    'arlo-vs-ring', 'canary-vs-ring', 'eufy-vs-arlo', 'eufy-vs-ring',
    'reolink-vs-eufy', 'ring-vs-blink', 'wyze-vs-ring',
  ];
  const isSHGComparePath = SHG_COMPARE_SLUGS.some(
    (slug) => pathname === `/compare/${slug}`
  );

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
    pathname.startsWith('/pricing') ||
    pathname.startsWith('/disclaimer') ||
    pathname.startsWith('/peptides') ||
    pathname.startsWith('/tmates') ||
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
    // SHG's own /compare/<slug> pages — allow before the GLP1 leak-block below,
    // since isGLP1Path also claims '/compare' and would otherwise 404 these.
    if (isSHGComparePath) {
      return NextResponse.next();
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
    // Framework routes and real static assets are not HTML indexing targets.
    // Deliberately do not exempt .html: an unknown HTML-looking route must fail
    // closed just like every other unknown page.
    const isInfrastructurePath =
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname === '/favicon.ico' ||
      pathname === '/robots.txt' ||
      pathname === '/sitemap.xml' ||
      pathname === '/pricing/data.csv' ||
      pathname === '/pricing/data.json' ||
      /\.(?:css|js|mjs|map|json|xml|txt|ico|svg|png|jpg|jpeg|gif|webp|avif|woff|woff2|ttf|eot|pdf)$/i.test(pathname);

    if (isInfrastructurePath) {
      return NextResponse.next();
    }

    const route = getGlp1RouteDisposition(pathname);

    if (route.disposition === 'redirect') {
      return NextResponse.redirect(new URL(route.location, request.url), 308);
    }

    if (route.disposition === 'not-found') {
      return new NextResponse(null, { status: 404 });
    }

    // Root → rewrite to /glp1-home (serves GLP1CompareHub homepage)
    if (pathname === '/') {
      return withGlp1PublicCache(
        NextResponse.rewrite(new URL('/glp1-home', request.url))
      );
    }

    const next = NextResponse.next();
    if (route.disposition === 'noindex') {
      next.headers.set('X-Robots-Tag', 'noindex, follow');
    }
    return withGlp1PublicCache(next);
  }

  // --- ratereliefca.com → 301 redirect /reviews/* to greenreviewshub.com ---
  if (isCRR && pathname.startsWith('/reviews')) {
    return NextResponse.redirect(
      `https://greenreviewshub.com${pathname}`,
      301
    );
  }

  // --- ratereliefca.com's own page that collides with GLP1's '/best' prefix ---
  // isGLP1Path matches any path starting with '/best' (for GLP1's /best,
  // /best-compounded-tirzepatide, etc.), which also matches CRR's own
  // '/best-solar-companies-california' page and got it wrongly 404'd below.
  // Confirmed live: this page has been a real 404 (and a GSC indexing error)
  // since 5/15/26. Carve it out explicitly rather than loosen '/best' for GLP1.
  const isCRRBestSolarPage = pathname === '/best-solar-companies-california';

  // --- ratereliefca.com → block SHG, AHB, and GLP1 paths so they don't leak onto CRR ---
  // Shared trust pages (/about, /contact, /affiliate-disclosure) are allowed
  // and resolved by host-aware page handlers.
  if (isCRR && !isCRRBestSolarPage && !isCRRCalculator && (isSHGPath || isAHBPath || isGLP1Path)) {
    return new NextResponse(null, { status: 404 });
  }

  // --- greenreviewshub.com (already handled above) — but also block GLP1 paths ---
  // (added defensively in case someone adds a path that matches both)

  // --- unrecognized hostname (e.g. the raw *.vercel.app project domain, a
  // preview/branch deployment URL, or a bot hitting the project by IP) ---
  // None of the isCRR/isGRH/isSHG/isAHB/isGLP1 checks matched, so without this
  // guard we'd fall through into the CRR-only Supabase logic below on a Vercel
  // project that doesn't have CRR's Supabase env vars set — that throws
  // "Your project's URL and Key are required to create a Supabase client!"
  // and 500s the request. This is the confirmed cause of the intermittent
  // /middleware 500 errors seen in Vercel's runtime error logs.
  // '/api' is exempted: Vercel Cron Jobs (e.g. the /api/keep-alive ping) can
  // invoke this deployment through an internal/alias hostname that won't
  // match isCRR, and API routes don't leak page content the way pages do.
  if (!isCRR && !pathname.startsWith('/api')) {
    return new NextResponse(null, { status: 404 });
  }

  // These public decision pages do not need an owner session or a Supabase read.
  // Private routes retain the existing authentication path below.
  if (
    isCRR &&
    (PUBLIC_CRR_NO_SESSION_ROUTES.includes(pathname) ||
      pathname === '/sitemap.xml' ||
      pathname === '/robots.txt')
  ) return NextResponse.next();

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

