'use client'

import { Button } from "@nextui-org/button"
import AppointmentList from "../AppointmentList"
import Overlay from "../Overlay"
import { Fragment, useRef, useState } from "react"
import format from "date-fns/format"

type Props = {
  action: (formData: FormData) => Promise<unknown>
  initialAppointments: Maybe<AppointmentDto[]>
  prev: string
  next: string
}

const AppointmentForm = ({ action, initialAppointments = null, prev: initialPrev, next: initialNext }: Props) => {
  const [cursors, setCursors] = useState([initialPrev, initialNext])
  const [open, setOpen] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState(0)
  const [appointments, setAppointments] = useState<Maybe<AppointmentDto[]>>(initialAppointments)
  const ref = useRef<HTMLFormElement>(null)

  const [prev, next] = cursors

  const handleServerAction = async(formData: FormData) => {
    const page = formData.get('page') as string

    const inputFormData = new FormData()

    if (page === 'prev') {
      inputFormData.set('before', formData.get('prevPage'))
    }

    if (page === 'next') {
      inputFormData.set('after', formData.get('nextPage'))
    }

    const data: AppointmentsResponse = await action(inputFormData) as AppointmentsResponse
    const { edges, pageInfo } = data
    const appointmentsList = edges.map(({ node }) => node)
    const { previousCursor, nextCursor } = pageInfo

    setAppointments(appointmentsList)
    setCursors([previousCursor, nextCursor])
  }

  const selectedAppointmentDate =
    appointments[selectedAppointment]
      ? format(
        new Date(appointments[selectedAppointment].scheduledTime),
        "yyyy-MM-dd"
      )
      : null

  const handleCloseClick = () => {
    setOpen(false)
  }

  const handleSetAppointmentClick = (index: number) => {
    setSelectedAppointment(index)
    setOpen(true)
  }

  return (
    <Fragment>
      <form ref={ref} action={handleServerAction} className="flex flex-col gap-y-4 mb-8 relative items-center rounded-md overflow-hidden p-4">
        <AppointmentList
          appointments={appointments}
          setAppointment={handleSetAppointmentClick}
        />
        {prev ? <input type="hidden" name="prevPage" value={prev} /> : null}
        {next ? <input type="hidden" name="nextPage" value={next} /> : null}
        <div className="flex w-full gap-x-4 justify-end">
          <Button type="submit" value="prev" name="page" isDisabled={!prev} className="bg-brand-primary-500 text-white w-1/4">
            Previous page
          </Button>
          <Button type="submit" value="next" name="page" isDisabled={!next} className="bg-brand-primary-500 text-white w-1/4">
            Next page
          </Button>
        </div>
        <Overlay
          open={open}
          appointment={appointments[selectedAppointment]}
          selectedAppointmentDate={selectedAppointmentDate}
          handleCloseClick={handleCloseClick}
        />
      </form>
    </Fragment>
  )
}



export default AppointmentForm
