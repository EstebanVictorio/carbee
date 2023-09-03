import clsx from "clsx"
import { Dancing_Script } from "next/font/google"

const ds = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
})

const baseUtils = "mx-auto"
const baseColorUtils = "text-white"
const baseFontUtils = "text-9xl text-center"

const Logo = () => {
  const className = clsx(
    baseUtils,
    baseColorUtils,
    baseFontUtils,
    ds.className,
  )

  return (
    <span className={className}>
      Carbee
    </span>
  )
}

export default Logo