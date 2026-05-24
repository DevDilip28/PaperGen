import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="rounded-[32px] bg-white p-6">
          <Skeleton className="mb-6 h-8 w-3/4" />

          <Skeleton className="mb-3 h-4 w-full" />

          <Skeleton className="h-4 w-2/3" />
        </div>
      ))}
    </div>
  );
}
