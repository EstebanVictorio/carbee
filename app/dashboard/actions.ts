'use server'
import { appointments as mutation } from "./mutation"
import { appointments as schema } from "./schema"
import { createAction } from "utils/validation"

export const appointmentsAction = createAction({ schema, mutation })