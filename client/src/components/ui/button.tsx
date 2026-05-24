import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",

        variant === "primary" && "bg-black text-white hover:opacity-90",

        variant === "secondary" &&
          "border border-zinc-200 bg-white hover:bg-zinc-50",

        variant === "ghost" && "hover:bg-zinc-100",

        className,
      )}
      {...props}
    />
  );
}
