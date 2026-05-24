import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-full border border-zinc-200 bg-white px-4 text-sm placeholder:text-zinc-400 focus:border-black transition-colors",
        className,
      )}
      {...props}
    />
  );
}
