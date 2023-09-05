'use server'
import { Mutation } from "utils/validation"
import { login as schema } from "./schema"
import { services } from "services"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import addHours from "date-fns/addHours"

export const login: Mutation<typeof schema> = async (input) => {
  const { login } = services
  const data: AuthenticationResponse = await login(input)

  if(data.token) {
    const cookieStore = cookies()
    const thirtySecsFromNow = addHours(new Date(), 1)
    cookieStore.set("X-Carbee-Session", data.token, { httpOnly: true, expires: thirtySecsFromNow })
    return redirect("/dashboard")
  }
}