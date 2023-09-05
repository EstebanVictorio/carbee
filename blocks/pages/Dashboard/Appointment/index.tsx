'use client'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import useSWR from "swr"
import { match } from "ts-pattern"
import format from "date-fns/format"
import addMinutes from "date-fns/addMinutes"
import { Chip } from "@nextui-org/chip"
import { getTime } from "utils/time"

type Props = {
  date?: string
  open: boolean
  appointment: Maybe<AppointmentDto>
  handleCloseClick: () => void
}

const Appointment = ({ date, open, appointment, handleCloseClick }: Props) => {
  const { data, isLoading, } = useSWR<string[]>(`/api/availability?date=${date}`, async (url) => {
    if(!date) {
      return []
    }

    const response = await fetch(url)
    const dates = await response.json()
    return dates
  })

  const content =
    match(isLoading)
      .with(true, () => <p>Loading...</p>)
      .with(false,() => (
        <ul>
          {
            data.length > 0
              ?
                data.map((time) => (
                  <li key={time}>{format(new Date(time), "yyyy-MM-dd HH:mm:ss")}</li>
                ))
              : <p className="italic">No appointments at this time for the selected appointment</p>
          }
        </ul>
      ))
      .exhaustive()

  const dateFormat = (appointment.duration / 60) > 24 ? "yyyy-MM-dd" : "hh:mm:ss aaa"

  return (
    <dialog open={open} className="rounded-large max-w-xs shadow-md overflow-hidden">
      <Card className="h-full">
        <CardHeader className="bg-brand-primary-400 text-white flex justify-between">
          <h3>Appointment: {date}</h3>
          <Button size="sm" className="min-w-0 h-6 w-4 rounded-full" color="secondary" onClick={handleCloseClick}>x</Button>
        </CardHeader>
        <CardBody className="flex flex-col gap-y-4">
          <span className="flex justify-between">
            <span>Service</span>
            <Chip color="primary" className="text-xs">{appointment.workOrder.service}</Chip>
          </span>
          <span className="flex justify-between">
            <span className="mr-3">Duration</span>
            <Chip color="warning" className="text-xs">{getTime(appointment.duration)}</Chip>
          </span>
          <span className="flex justify-between">
            <span className="mr-1">Starts at</span>
            <Chip color="danger" className="text-white">
              {format(new Date(appointment.scheduledTime), dateFormat)}
            </Chip>
          </span>
          <span className="flex justify-between">
            <span className="mr-1">Completed at</span>
            <Chip color="success" className="text-white">
              {format(addMinutes(new Date(appointment.scheduledTime),appointment.duration), dateFormat)}
            </Chip>
          </span>
        </CardBody>
        <CardFooter>
          {content}
        </CardFooter>
      </Card>
    </dialog>
  )
}

export default Appointment