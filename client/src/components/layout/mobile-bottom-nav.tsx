"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Library, Sparkles } from "lucide-react";

const items = [
  {
    label: "Home",
    href: "/",
    icon: LayoutDashboard,
  },

  {
    label: "Assignments",
    href: "/",
    icon: FileText,
  },

  {
    label: "Library",
    href: "/",
    icon: Library,
  },

  {
    label: "Toolkit",
    href: "/",
    icon: Sparkles,
  },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white lg:hidden">
      <div className="flex items-center justify-around py-3">
        {items.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 text-xs ${
                active ? "text-black" : "text-zinc-400"
              }`}
            >
              <Icon className="h-5 w-5" />

              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
