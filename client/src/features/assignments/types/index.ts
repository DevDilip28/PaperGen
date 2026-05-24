export type QuestionType = {
    type: string
    count: number
    marks: number
}

export type Assignment = {
    _id: string
    topic: string
    status: "processing" | "completed" | "failed"
    createdAt: string
}
