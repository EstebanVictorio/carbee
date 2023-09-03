import type { NextRequest } from "next/server"
import type { cookies as Cookies } from "next/headers"

type CookieStore = ReturnType<typeof Cookies>
type ServerRuleArgs = {
  request?: NextRequest
  cookies?: CookieStore
}

type Rule = (args: ServerRuleArgs) => boolean

const login: Rule = ({ request }) => request.url.includes('/login')
const authenticated: Rule = ({ cookies }) => !!cookies.get('X-Carbee-Session')

export const rules = {
  login,
  authenticated,
}
