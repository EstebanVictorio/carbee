'use client'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/table";
import {Tooltip} from "@nextui-org/tooltip";
import format from "date-fns/format"
import StatusChip, { type Status } from "../StatusChip";
import { getTime } from "utils/time"

type Props = {
  appointments: Maybe<AppointmentDto[]>
  setAppointment: (index: number) => void
}

const AppointmentList = ({ appointments, setAppointment }: Props) => {
  if (!appointments) {
    return (
      <p>Enter a range of dates to look for appointments</p>
    )
  }

  if (appointments.length === 0) {
    return (
      <p>No appointments at this time</p>
    )
  }

  return (
    <Table
      isCompact
      aria-label="Appointment Table"
      className="border-separate table-fixed min-h-[520px]"
    >
      <TableHeader>
        <TableColumn>Service Order</TableColumn>
        <TableColumn>Duration</TableColumn>
        <TableColumn>Scheduled at</TableColumn>
        <TableColumn>Status</TableColumn>
        <TableColumn>Payment ID</TableColumn>
        <TableColumn>User ID</TableColumn>
      </TableHeader>
      <TableBody>
        {appointments.map((appointment, index) => {
          const date = format(new Date(appointment.scheduledTime), "yyyy-MM-dd")
          return (
            <TableRow
              key={appointment.id}
              className="group hover:!bg-brand-primary-300 hover:cursor-pointer hover:text-white h-[48px]"
              onClick={() => {
                setAppointment(index)
              }}>
                <TableCell className="group-hover:rounded-l-md">{appointment.workOrder.service}</TableCell>
                <TableCell>{getTime(appointment.duration)}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>
                  <StatusChip status={appointment.status as Status}/>
                </TableCell>
                <TableCell>
                  <Tooltip content={`Payment ID: ${appointment.paymentId}`} placement="left-start">
                    <span className="text-white p-1 w-6 h-6 flex justify-center items-center mx-auto rounded-full shadow-large bg-blue-500">i</span>
                  </Tooltip>
                </TableCell>
                <TableCell className="group-hover:rounded-r-md">
                  <Tooltip content={`User ID: ${appointment.userId}`} placement="left-start">
                    <span className="text-white p-1 w-6 h-6 flex justify-center items-center mx-auto rounded-full shadow-large bg-brand-primary-500">i</span>
                  </Tooltip>
                </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default AppointmentList