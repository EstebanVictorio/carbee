'use server'
import { login as mutation } from "./mutation"
import { login as schema } from "./schema"
import { createAction } from "utils/validation"

export const action = createAction({ schema, mutation })