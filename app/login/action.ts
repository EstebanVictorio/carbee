'use server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { services } from "services"
import addHours from 'date-fns/addHours'

export const action = async (formData: FormData) => {
  const { login } = services
  const data: AuthenticationResponse = await login({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })

  if(data.token) {
    const cookieStore = cookies()
    const thirtySecsFromNow = addHours(new Date(), 1)
    cookieStore.set("X-Carbee-Session", data.token, { httpOnly: true, expires: thirtySecsFromNow })
    return redirect("/")
  }
}