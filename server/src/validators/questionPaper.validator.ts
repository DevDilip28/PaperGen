import { z } from "zod";

const QuestionSchema = z.object({
    question: z.string(),

    difficulty: z.enum([
        "easy",
        "medium",
        "hard",
    ]),

    marks: z.number(),
});

const SectionSchema = z.object({
    title: z.string(),

    instruction: z.string(),

    questions: z.array(QuestionSchema),
});

export const QuestionPaperSchema = z.object({
    sections: z.array(SectionSchema),
});
