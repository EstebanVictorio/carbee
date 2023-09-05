import { Chip } from "@nextui-org/chip"
import clsx from "clsx"

export type Status = "SCHEDULED" | "PAID" | "COMPLETE" | "IN_PROGRESS"

type Props = {
  status: Status
}

const StatusChip = ({ status }:Props) => {
  const text = status.toLowerCase()

  const chipColor = {
    SCHEDULED: "bg-alert-warn",
    PAID: "bg-blue-500",
    COMPLETE: "bg-alert-success",
    IN_PROGRESS: "bg-brand-primary-400 text-black",
  }

  const className = clsx(
    "shadow-md",
    chipColor[status],
    status === "SCHEDULED" ? "text-black" : "text-white"
  )

  return (
    <Chip className={className} classNames={{
      content: "font-bold capitalize",
    }}>
      {text}
    </Chip>
  )
}


export default StatusChip