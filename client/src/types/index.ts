export type Question = {
    question: string;
    difficulty: string;
    marks: number;
};

export type Section = {
    title: string;
    instruction: string;
    questions: Question[];
};

export type Assignment = {
    _id: string;
    topic: string;
    status: "processing" | "completed" | "failed" | "pending";
    createdAt: string;
    dueDate?: string;
    totalQuestions?: number;
    totalMarks?: number;
    questionPaper?: {
        sections: Section[];
    };
};
