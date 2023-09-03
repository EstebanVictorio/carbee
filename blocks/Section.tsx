type Props = {
  children?: React.ReactNode
}

const Section = ({ children }:Props) => {
  return (
    <section className="px-8">
      {children}
    </section>
  )
}

export default Section