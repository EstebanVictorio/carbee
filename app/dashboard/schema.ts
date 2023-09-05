import { object, string, optional, number } from "valibot"

export const appointments = object({
  before:
    optional(
      string(),
    ),
  after:
    optional(
      string(),
    ),
})