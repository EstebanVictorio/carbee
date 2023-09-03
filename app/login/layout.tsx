import Guest from 'components/navigation/Navbar/Guest'
import { Fragment } from 'react'

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Fragment>
      <Guest />
      {children}
    </Fragment>
  )
}