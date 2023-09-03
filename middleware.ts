import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { rules } from "utils/navigation"

export function middleware(request: NextRequest) {
  const cookieStore = cookies()

  const isLogin = rules.login({ request })
  const isAuthenticated = rules.authenticated({ cookies: cookieStore })

  if (isLogin) {
    const toHome = new URL("/",request.url)
    return isAuthenticated
      ? NextResponse.redirect(toHome)
      : NextResponse.next()
  }

  const toLogin = new URL("/login",request.url)

  return isAuthenticated
    ? NextResponse.next()
    : NextResponse.redirect(toLogin)
}


export const config = {
  matcher: '/',
};