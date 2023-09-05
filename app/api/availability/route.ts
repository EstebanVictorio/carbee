import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export const GET = async (req: Request) => {
  const params = new URLSearchParams(req.url.split("?")[1])
  const date = params.get("date")

  

  const url = new URL(`${process.env.API_URL}/api/availability/${date}`)
  try {
    const cookieStore = cookies()
    const { value: token } = cookieStore.get("X-Carbee-Session")

    const availability = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return NextResponse.json(availability)
  } catch (error) {
    return NextResponse.json({ error })
  }
}