import { experimental_useFormStatus as useFormStatus } from "react-dom"
import {Spinner} from "@nextui-org/spinner";
import {Button} from "@nextui-org/button";
import { Card } from "@nextui-org/card"
import Appointment from "./Appointment"
import clsx from "clsx"

type Props = {
  open: boolean
  handleCloseClick: () => void
  selectedAppointmentDate?: string
  appointment: Maybe<AppointmentDto>
}

const Overlay = ({ open, handleCloseClick, selectedAppointmentDate, appointment }: Props) => {
  const { pending } = useFormStatus()

  const overlayClassName = clsx(
    "overlay w-full h-full absolute bg-overlay flex justify-center items-center",
    open || pending ? "block" : "hidden",
  )

  return (
    <div className={overlayClassName}>
      { pending
          ? (
            <Card className="p-8">
              <Spinner color="warning" label="Loading..."/>
            </Card>
          )
          : null
      }
      {
        appointment
          ? (
            <Appointment
              open={open}
              date={selectedAppointmentDate}
              appointment={appointment}
              handleCloseClick={handleCloseClick}
            />
          )
          : null
      }
    </div>
  )
}

export default Overlay