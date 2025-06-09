import {z} from "zod"

export const acceptMeaagesSchema = z.object({
    acceptMeaages: z.boolean(),
})