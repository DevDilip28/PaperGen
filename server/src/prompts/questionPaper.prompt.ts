type PromptData = {
  topic: string;
  totalQuestions: number;
  totalMarks: number;
  instructions: string;
  questionTypes: string[];
};

export const QuestionPaperPrompt = (
  data: PromptData
) => {
  return `
You are an expert teacher.

Generate a structured question paper.

STRICT RULES:
- Return ONLY valid JSON
- No markdown
- No explanation
- No code block
- No extra text

Topic: ${data.topic}

Total Questions: ${data.totalQuestions}

JSON FORMAT:

{
  "sections": [
    {
      "title": "Section A",
      "instruction": "Attempt all questions",
      "questions": [
        {
          "question": "Question text",
          "difficulty": "easy",
          "marks": 2
        }
      ]
    }
  ]
}
`;
};