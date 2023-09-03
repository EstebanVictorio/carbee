import Section from 'blocks/Section'
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { action } from "./action"

const Login = () => {
  return (
    <Section className="pt-4">
      <form action={action} className="flex flex-col gap-y-4">
        <Input name='email' type="email" placeholder='Email'/>
        <Input name='password' type="password" placeholder='Password'/>
        <Button type="submit" color="primary" disableRipple>Submit</Button>
      </form>
    </Section>
  )
}

export default Login