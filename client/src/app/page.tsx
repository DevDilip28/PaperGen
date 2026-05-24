"use client";

import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { DashboardHeader } from "@/components/shared/dashboard-header";
import { DashboardFilters } from "@/components/shared/dashboard-filters";
import { AssignmentCard } from "@/components/shared/assignment-card";
import { EmptyState } from "@/components/shared/empty-state";
import { DashboardSkeleton } from "@/components/shared/dashboard-skeleton";
import { assignmentService } from "@/features/assignments/services/assignment.service";
import { Assignment } from "@/types";

export default function HomePage() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchAssignments = async () => {
    try {
      const data = await assignmentService.getAssignments();

      setAssignments(data.assignment || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: string) => {
    setAssignments((prev) =>
      prev.filter((assignment) => assignment._id !== id),
    );
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <DashboardLayout>
      <DashboardHeader />

      <DashboardFilters />

      {loading ? (
        <DashboardSkeleton />
      ) : assignments.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              id={assignment._id}
              title={assignment.topic}
              assignedDate={new Date(assignment.createdAt).toLocaleDateString()}
              dueDate={assignment.dueDate}
              status={assignment.status}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}
