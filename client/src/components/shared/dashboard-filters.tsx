import { Search, SlidersHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function DashboardFilters() {
  return (
    <Card className="mb-6 flex flex-col gap-4 rounded-[32px] p-4 md:flex-row md:items-center md:justify-between">
      <button className="flex items-center gap-2 text-sm font-medium text-zinc-600">
        <SlidersHorizontal className="h-4 w-4" />
        Filter By
      </button>

      <div className="relative w-full md:max-w-sm">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />

        <Input placeholder="Search Assignment" className="pl-11" />
      </div>
    </Card>
  );
}
