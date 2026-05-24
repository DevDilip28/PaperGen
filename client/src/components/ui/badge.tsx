import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "success" | "warning";
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",

        variant === "default" && "bg-zinc-100 text-zinc-700",

        variant === "success" && "bg-green-100 text-green-700",

        variant === "warning" && "bg-yellow-100 text-yellow-700",

        className,
      )}
      {...props}
    />
  );
}
