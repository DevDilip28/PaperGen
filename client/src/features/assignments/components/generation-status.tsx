import { Loader2 } from "lucide-react";

import { Card } from "@/components/ui/card";

type Props = {
  status: "pending" | "processing";
};

export function GenerationStatus({ status }: Props) {
  return (
    <Card className="flex min-h-[70vh] flex-col items-center justify-center rounded-[32px] p-10 text-center">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100">
        <Loader2 className="h-10 w-10 animate-spin text-zinc-700" />
      </div>

      <h2 className="mb-4 text-3xl font-bold">
        {status === "pending"
          ? "Preparing Assignment"
          : "Generating Question Paper"}
      </h2>

      <p className="max-w-md text-zinc-500">
        AI is creating a structured question paper for your students.
      </p>
    </Card>
  );
}
