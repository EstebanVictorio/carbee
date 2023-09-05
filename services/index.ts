import { match } from "ts-pattern"

const login = async ({
  email,
  password,
}: { email: string, password: string }) => {
  try {
    const response = await fetch(`${process.env.API_URL}/api/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, password }),
    })

    const data: { token: string } = await response.json()
    return data
  } catch (error) {
    console.log("error:", error)
  }
}

const appointments = async ({
  before,
  after,
  headers,
}: { before?: string, after?: string, headers?: Record<string, string> }) => {
  try {
    const url = new URL(`${process.env.API_URL}/api/appointments`)
    url.searchParams.set('size', '10')

    match({ before: !!before, after: !!after })
      .with({ before: true, after: false }, () => {
        url.searchParams.set('before', before)
      })
      .with({ before: false, after: true }, () => {
        url.searchParams.set('after', after)
      })
      .with({ before: true, after: true }, () => {})
      .with({ before: false, after: false }, () => {})
      .exhaustive()

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })

    const data: AppointmentsResponse = await response.json()
  
    return data
  } catch (error) {
    console.log("error:", error)
  }
}



export const services = {
  login,
  appointments,
}