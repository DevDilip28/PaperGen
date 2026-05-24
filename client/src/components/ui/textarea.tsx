import { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-[120px] w-full rounded-[24px] border border-zinc-200 bg-white p-4 text-sm placeholder:text-zinc-400 focus:border-black transition-colors resize-none",
        className,
      )}
      {...props}
    />
  );
}

