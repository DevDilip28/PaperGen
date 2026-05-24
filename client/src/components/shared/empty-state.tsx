import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function EmptyState() {
  return (
    <Card className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
      <div className="mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-zinc-100">
        <div className="text-6xl">📄</div>
      </div>

      <h2 className="mb-3 text-3xl font-bold">No assignments yet</h2>

      <p className="mb-8 max-w-md text-sm leading-relaxed text-zinc-500 md:text-base">
        Create your first AI-generated assignment to start generating
        professional question papers.
      </p>

      <Link href="/create">
        <Button className="h-14 px-8 text-base">
          <Plus className="mr-2 h-5 w-5" />
          Create Your First Assignment
        </Button>
      </Link>
    </Card>
  );
}
