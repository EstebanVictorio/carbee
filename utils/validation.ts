'use server'
import { ObjectSchema, ObjectShape, safeParse, getIssues, Input, SafeParseResult } from "valibot"

export type Mutation<S extends ObjectSchema<any>> = (input: Required<Input<S>>) => unknown

export const createAction = <T extends ObjectShape>({ schema, mutation }: {
  schema: ObjectSchema<T>,
  mutation: Mutation<ObjectSchema<T>>
}) => {
  return async (formData: FormData) => {
    const entries = Array.from(formData.entries())

    const data = entries.reduce((acc, [key, value]) => {
      acc[key] = value
      return acc
    }, {})

    const result = safeParse(schema, data)
    
    if(result.success) {
      return mutation(data as Required<Input<typeof schema>>)
    }

    throw new Error("Invalid data")
  }
}

