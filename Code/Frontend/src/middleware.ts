import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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

