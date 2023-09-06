'use client'
import { Fragment } from "react"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Card } from "@nextui-org/card"
import { experimental_useFormStatus as useFormStatus } from "react-dom"
import { Spinner } from "@nextui-org/react"

const Login = () => {
  const { pending } = useFormStatus()


  if (pending) {
    return (
      <Card className="flex flex-col gap-y-4 p-4 min-h-[200px] justify-center">
        <Spinner color="primary" size="md"/>
      </Card>
    )
  }

  return (
    <Card className="flex flex-col gap-y-4 p-4 min-h-[200px]">
      <Input name='email' type="email" placeholder='Email'/>
      <Input name='password' type="password" placeholder='Password'/>
      <Button type="submit" color="primary" disableRipple>Submit</Button>
    </Card>
  )
}

export default Login