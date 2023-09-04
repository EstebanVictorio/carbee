import clsx from "clsx"

type Props = {
  children?: React.ReactNode
  className?: string
}

const baseUtils = "px-8"

const Section = ({ children, className: propClassName }:Props) => {
  const className = clsx(
    baseUtils,
    propClassName,
  )

  return (
    <section className={className}>
      {children}
    </section>
  )
}

export default Section