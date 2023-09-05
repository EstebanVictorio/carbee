import Section from "blocks/Section"
import Appointments from "blocks/pages/Dashboard/Appointments"
import { Fragment } from "react"
import { appointmentsAction } from "./actions"
import { services } from "services"
import { cookies } from "next/headers"

export default async function Page() {
  const cookieStore = cookies()
  const { value: token } = cookieStore.get("X-Carbee-Session")
  const data = await services.appointments({ headers: { Authorization: `Bearer ${token}` }})
  const { edges, pageInfo } = data
  const appointments = edges.map(({ node }) => node)
  const { previousCursor, nextCursor } = pageInfo

  return (
    <Fragment>
      <Section className="pt-4">
        <h1 className="text-4xl">
          Appointments
        </h1>
        <Appointments
          action={appointmentsAction}
          initialAppointments={appointments}
          prev={previousCursor}
          next={nextCursor}
        />
      </Section>
    </Fragment>
  )
}