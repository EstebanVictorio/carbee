import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { rules } from "utils/navigation"
import { match } from "ts-pattern"

export function middleware(request: NextRequest) {
  const cookieStore = cookies()

  const isHome = rules.index({ request })
  const isLogin = rules.login({ request })
  const isAuthenticated = rules.authenticated({ cookies: cookieStore })

  if (isHome) {
    return match(isAuthenticated)
      .with(true, () => NextResponse.redirect(new URL("/dashboard", request.url)))
      .with(false, () => NextResponse.redirect(new URL("/login", request.url)))
      .exhaustive()
  }

  return match([
    isLogin, isAuthenticated,
  ])
    .with([false, false], () => NextResponse.redirect(new URL("/login", request.url)))
    .with([true, true], () => NextResponse.redirect(new URL("/dashboard", request.url)))
    .with([true, false], () => NextResponse.next())
    .with([false, true], () => NextResponse.next())
    .exhaustive()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};