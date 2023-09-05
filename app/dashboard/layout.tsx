import { Fragment } from 'react'
import User from 'components/navigation/Navbar/User'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Fragment>
      <User />
      {children}
    </Fragment>
  )
}