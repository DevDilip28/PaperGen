import { z } from "zod"

export const createAssignmentSchema = z.object({
    topic: z
        .string()
        .min(3, "Topic is required"),

    dueDate: z.string(),

    instructions: z.string().optional(),

    questionTypes: z.array(
        z.object({
            type: z.string(),
            count: z.number(),
            marks: z.number(),
        })
    ),
})

export type CreateAssignmentInput =
    z.infer<typeof createAssignmentSchema>