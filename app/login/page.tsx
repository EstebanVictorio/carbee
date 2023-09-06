import Section from 'blocks/Section'
import { action } from "./action"
import LoginFields from "blocks/pages/Login"

const Login = () => {
  return (
    <Section className="pt-4">
      <form action={action}>
        <LoginFields />
      </form>
    </Section>
  )
}

export default Login