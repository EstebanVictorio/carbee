import { object, string, email, minLength } from "valibot"

export const login = object({
  email:
    string([
      email(),
      minLength(1),
    ]),
  password:
    string([
      minLength(8),
    ]),
})