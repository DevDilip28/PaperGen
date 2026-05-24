"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createAssignmentSchema,
  CreateAssignmentInput,
} from "../schemas/create-assignment.schema";
import { assignmentService } from "../services/assignment.service";

import { UploadBox } from "./upload-box";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CreateAssignmentForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const form = useForm<CreateAssignmentInput>({
    resolver: zodResolver(createAssignmentSchema),

    defaultValues: {
      topic: "",
      dueDate: "",
      instructions: "",

      questionTypes: [
        {
          type: "Multiple Choice Questions",

          count: 5,
          marks: 1,
        },
      ],
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questionTypes",
  });

  const onSubmit = async (values: CreateAssignmentInput) => {
    try {
      setLoading(true);

      const response = await assignmentService.generateAssignment(values);
      router.push(`/assignment/${response.assignment._id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="rounded-[32px] p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Create Assignment</h2>

        <p className="mt-2 text-sm text-zinc-500">
          Generate AI-powered question papers.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium">Topic</label>

          <Input placeholder="Enter assignment topic" {...register("topic")} />

          {errors.topic && (
            <p className="mt-2 text-sm text-red-500">{errors.topic.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Due Date</label>

          <Input type="date" {...register("dueDate")} />
        </div>

        <UploadBox />

        <div>
          <label className="mb-4 block text-sm font-medium">
            Question Types
          </label>

          <div className="space-y-4">
            {fields.map((field, index) => (
              <Card
                key={field.id}
                className="rounded-[24px] border border-zinc-200 p-4"
              >
                <div className="grid gap-4 md:grid-cols-3">
                  <Input
                    placeholder="Question Type"
                    {...register(`questionTypes.${index}.type`)}
                  />

                  <Input
                    type="number"
                    placeholder="Questions"
                    {...register(`questionTypes.${index}.count`, {
                      valueAsNumber: true,
                    })}
                  />

                  <Input
                    type="number"
                    placeholder="Marks"
                    {...register(`questionTypes.${index}.marks`, {
                      valueAsNumber: true,
                    })}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="mt-4 text-sm text-red-500"
                >
                  Remove
                </button>
              </Card>
            ))}
          </div>

          <Button
            type="button"
            variant="secondary"
            className="mt-4"
            onClick={() =>
              append({
                type: "",
                count: 1,
                marks: 1,
              })
            }
          >
            Add Question Type
          </Button>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Additional Instructions
          </label>

          <Textarea
            placeholder="Add AI instructions..."
            {...register("instructions")}
          />
        </div>

        <Button type="submit" className="h-14 w-full text-base">
          {loading ? "Generating..." : "Generate Assignment"}
        </Button>
      </form>
    </Card>
  );
}
