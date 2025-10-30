import { NextRequest, NextResponse } from 'next/server'

const defaultLocale = 'de'
const locales = ['de', 'en']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for:
  // - Admin routes
  // - API routes
  // - Static files
  // - Next.js internals
  // - Sitemaps
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/posts') ||
    pathname.startsWith('/search') ||
    pathname.startsWith('/internal') ||
    pathname.includes('.') ||
    pathname.includes('sitemap') ||
    pathname.includes('robots')
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  // If pathname already has a locale, continue
  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // For paths without locale, let [[...slug]] handle them directly
  // No rewrite needed - the route will handle it as German (default)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
