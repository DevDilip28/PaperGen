import { Badge } from "@/components/ui/badge";

type Question = {
  question: string;
  difficulty: "easy" | "medium" | "hard";
  marks: number;
};

type Section = {
  title: string;
  instruction: string;
  questions: Question[];
};

type Assignment = {
  topic: string;
  status: string;
  dueDate?: string;

  questionPaper?: {
    sections: Section[];
  };
};

type Props = {
  assignment: Assignment;
};

export function QuestionPaper({ assignment }: Props) {
  const sections = assignment.questionPaper?.sections || [];

  const totalMarks = sections.reduce(
    (acc, section) =>
      acc + section.questions.reduce((sum, q) => sum + q.marks, 0),
    0,
  );

  return (
    <div className="rounded-[36px] bg-white p-6 shadow-sm md:p-12">
      <div className="border-b border-zinc-200 pb-10 text-center">
        <h1 className="text-4xl font-black">Delhi Public School</h1>

        <p className="mt-3 text-xl font-semibold">
          Subject: {assignment.topic}
        </p>

        <p className="mt-2 text-zinc-500">AI Generated Question Paper</p>
      </div>

      <div className="mt-8 flex flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">Time Allowed: 45 Minutes</p>
        </div>

        <div>
          <p className="font-semibold">Maximum Marks: {totalMarks}</p>
        </div>
      </div>

      <div className="mt-10 space-y-3 text-sm">
        <p>All questions are compulsory unless stated otherwise.</p>

        <div className="pt-4">
          <p>Name: ___________________</p>

          <p className="mt-2">Roll Number: ______________</p>

          <p className="mt-2">Class/Section: _____________</p>
        </div>
      </div>

      <div className="mt-16 space-y-16">
        {sections.map((section, sectionIndex) => (
          <div key={section.title}>
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold">{section.title}</h2>

              <p className="mt-3 text-lg font-medium">{section.instruction}</p>
            </div>

            <div className="space-y-8">
              {section.questions.map((question, questionIndex) => (
                <div
                  key={questionIndex}
                  className="border-b border-zinc-200 pb-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <Badge
                      variant={
                        question.difficulty === "hard" ? "warning" : "success"
                      }
                    >
                      {question.difficulty}
                    </Badge>

                    <span className="text-sm font-semibold">
                      [{question.marks} Marks]
                    </span>
                  </div>

                  <p className="text-lg leading-loose md:text-xl">
                    <span className="font-bold">{questionIndex + 1}.</span>{" "}
                    {question.question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-zinc-200 pt-10">
        <p className="text-center text-sm text-zinc-500">
          End of Question Paper
        </p>
      </div>
    </div>
  );
}
