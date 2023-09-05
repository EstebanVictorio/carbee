import clsx from "clsx"
import { Dancing_Script } from "next/font/google"

const ds = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
})

const baseColorUtils = "text-white"

type Props = {
  className?: string
}

const Logo = ({ className: propClassName }: Props) => {
  const className = clsx(
    baseColorUtils,
    ds.className,
    propClassName,
  )

  return (
    <span className={className}>
      Carbee
    </span>
  )
}

export default Logo