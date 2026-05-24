import { DashboardLayout } from "@/components/layout/dashboard-layout";

import { CreateAssignmentForm } from "@/features/assignments/components/create-assignment-form";

export default function CreatePage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl">
        <CreateAssignmentForm />
      </div>
    </DashboardLayout>
  );
}
