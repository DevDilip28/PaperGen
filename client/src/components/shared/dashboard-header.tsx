export function DashboardHeader() {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <h1 className="text-3xl font-bold">Assignments</h1>
      </div>

      <p className="text-sm text-zinc-500 md:text-base">
        Manage and create assignments for your students.
      </p>
    </div>
  );
}
