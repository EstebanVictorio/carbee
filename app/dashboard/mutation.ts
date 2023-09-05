'use server'
import { Mutation } from "utils/validation"
import { appointments as schema } from "./schema"
import { services } from "services"
import { cookies } from "next/headers"

export const appointments: Mutation<typeof schema> = async (input) => {
  const cookieStore = cookies()
  const { value: token } = cookieStore.get('X-Carbee-Session')
  const { appointments } = services
  const data = await appointments({...input, headers: { Authorization: `Bearer ${token}` }})

  return data
}