'use client'
import { Input } from "@nextui-org/input"
import format from "date-fns/format"

const RangePicker = () => {
  const today = format(new Date(), 'yyyy-MM-dd')

  return (
    <fieldset className="flex w-full gap-x-4">
      <Input label="From:" id="from" isRequired name="from" type="date" min={today} defaultValue={today} />
      <Input label="To:" id="to" isRequired name="to" type="date" min={today} defaultValue={today}/>
    </fieldset>
  )
}

export default RangePicker