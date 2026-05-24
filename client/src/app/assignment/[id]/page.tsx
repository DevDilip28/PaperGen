"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CheckCircle2, Clock3, AlertCircle } from "lucide-react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { assignmentService } from "@/features/assignments/services/assignment.service";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

type Question = {
  question: string;
  difficulty: string;
  marks: number;
};

type Section = {
  title: string;
  instruction: string;
  questions: Question[];
};

type Assignment = {
  _id: string;
  topic: string;
  status: "processing" | "completed" | "failed";
  totalQuestions?: number;
  totalMarks?: number;
  dueDate?: string;
  createdAt: string;

  questionPaper?: {
    sections: Section[];
  };
};

export default function AssignmentPage() {
  const params = useParams();

  const [assignment, setAssignment] = useState<Assignment | null>(null);

  const [loading, setLoading] = useState(true);

  const fetchAssignment = async () => {
    try {
      const response = await assignmentService.getAssignment(
        params.id as string,
      );

      const assignmentData = response.assignment || response.data || response;

      if (!assignmentData) return false;

      setAssignment(assignmentData);

      if (
        assignmentData.status === "completed" ||
        assignmentData.status === "failed"
      ) {
        return true;
      }

      return false;
    } catch (error) {
      console.log(error);

      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    fetchAssignment();

    interval = setInterval(async () => {
      const done = await fetchAssignment();

      if (done) {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          <Skeleton className="h-40 rounded-[32px]" />

          <Skeleton className="h-72 rounded-[32px]" />

          <Skeleton className="h-72 rounded-[32px]" />
        </div>
      </DashboardLayout>
    );
  }

  if (!assignment) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[70vh] items-center justify-center">
          <p className="text-lg text-zinc-500">Assignment not found</p>
        </div>
      </DashboardLayout>
    );
  }

  if (assignment.status === "processing") {
    return (
      <DashboardLayout>
        <div className="flex min-h-[70vh] items-center justify-center">
          <Card className="w-full max-w-xl rounded-[32px] p-10 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-orange-100 p-5">
                <Clock3 className="h-10 w-10 animate-pulse text-orange-500" />
              </div>
            </div>

            <h2 className="text-3xl font-bold">Generating Assignment</h2>

            <p className="mt-4 text-zinc-500">
              AI is preparing your question paper...
            </p>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  if (assignment.status === "failed") {
    return (
      <DashboardLayout>
        <div className="flex min-h-[70vh] items-center justify-center">
          <Card className="w-full max-w-xl rounded-[32px] p-10 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-red-100 p-5">
                <AlertCircle className="h-10 w-10 text-red-500" />
              </div>
            </div>

            <h2 className="text-3xl font-bold">Generation Failed</h2>

            <p className="mt-4 text-zinc-500">
              Something went wrong while generating the assignment.
            </p>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Card className="rounded-[32px] p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500" />

                <h1 className="text-4xl font-bold">{assignment.topic}</h1>
              </div>

              <p className="text-zinc-500">
                AI-generated structured question paper
              </p>
            </div>

            <Badge variant="success" className="w-fit px-4 py-2 text-sm">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Completed
            </Badge>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Total Questions</p>

              <h3 className="mt-2 text-3xl font-bold">
                {assignment.totalQuestions}
              </h3>
            </div>

            <div className="rounded-3xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Total Marks</p>

              <h3 className="mt-2 text-3xl font-bold">
                {assignment.totalMarks}
              </h3>
            </div>

            <div className="rounded-3xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Due Date</p>

              <h3 className="mt-2 text-xl font-bold">
                {assignment.dueDate || "N/A"}
              </h3>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          {assignment.questionPaper?.sections?.map((section, index) => (
            <Card key={index} className="rounded-[32px] p-6 md:p-8">
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <h2 className="text-3xl font-bold">{section.title}</h2>
                </div>

                <p className="text-zinc-500">{section.instruction}</p>
              </div>

              <div className="space-y-5">
                {section.questions.map((question, qIndex) => (
                  <div
                    key={qIndex}
                    className="rounded-[28px] border border-zinc-200 bg-zinc-50 p-5 transition-all duration-200 hover:shadow-sm"
                  >
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <Badge
                        variant={
                          question.difficulty === "easy"
                            ? "success"
                            : question.difficulty === "medium"
                              ? "warning"
                              : "default"
                        }
                      >
                        {question.difficulty}
                      </Badge>

                      <div className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
                        {question.marks} Marks
                      </div>
                    </div>

                    <p className="text-base leading-relaxed md:text-lg">
                      <span className="font-bold">Q{qIndex + 1}.</span>{" "}
                      {question.question}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
