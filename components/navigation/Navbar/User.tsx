import Logo from "components/Logo"
import {Navbar, NavbarBrand} from "@nextui-org/navbar";
import clsx from "clsx";

const baseColorUtils = "bg-brand-primary-base border-brand-primary-base"
const baseUtils = "border border-solid"

const User = () => {
  const className = clsx(
    baseColorUtils,
    baseUtils,
  )

  return (
    <Navbar className={className}>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
    </Navbar>
  )
}

export default User