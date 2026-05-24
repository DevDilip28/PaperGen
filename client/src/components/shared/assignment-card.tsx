"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MoreVertical,
  Eye,
  Trash2,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";

import { assignmentService } from "@/features/assignments/services/assignment.service";
import { Card } from "@/components/ui/card";

type AssignmentCardProps = {
  id: string;
  title: string;
  assignedDate: string;
  dueDate?: string;
  status: "pending" | "processing" | "completed" | "failed";
  onDelete?: (id: string) => void;
};

export function AssignmentCard({
  id,
  title,
  assignedDate,
  dueDate,
  status,
  onDelete,
}: AssignmentCardProps) {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await assignmentService.deleteAssignment(id);

      onDelete?.(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="relative rounded-[32px] border border-zinc-200 p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="max-w-[85%] text-3xl font-bold leading-tight text-black">
            {title}
          </h3>

          <div className="mt-4">
            {status === "completed" && (
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                Completed
              </div>
            )}

            {status === "processing" && (
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing
              </div>
            )}

            {status === "failed" && (
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
                <AlertCircle className="h-4 w-4" />
                Failed
              </div>
            )}
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 transition hover:bg-zinc-100"
          >
            <MoreVertical className="h-5 w-5 text-zinc-500" />
          </button>

          {open && (
            <div className="absolute right-0 top-12 z-20 w-56 rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl">
              <Link
                href={`/assignment/${id}`}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
              >
                <Eye className="h-4 w-4" />
                View Assignment
              </Link>

              <button
                onClick={handleDelete}
                className="mt-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
                Delete Assignment
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-zinc-100 pt-6">
        <div>
          <p className="text-sm font-semibold text-black">Created</p>

          <p className="mt-1 text-lg text-zinc-500">{assignedDate}</p>
        </div>

        <div className="text-right">
          <p className="text-sm font-semibold text-black">Due</p>

          <p className="mt-1 text-lg text-zinc-500">{dueDate || "N/A"}</p>
        </div>
      </div>
    </Card>
  );
}
