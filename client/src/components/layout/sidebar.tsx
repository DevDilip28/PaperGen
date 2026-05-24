"use client";

import Link from "next/link";
import { FileText, Plus } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Assignments",
    icon: FileText,
    href: "/",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-[280px] shrink-0 p-4">
      <div className="flex h-full w-full flex-col rounded-[32px] bg-white p-6 shadow-sm">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-black">
            PaperGen
          </h1>
        </div>

        <Link href="/create">
          <button className="mb-10 flex h-14 w-full items-center justify-center rounded-full bg-zinc-900 text-base font-medium text-white transition hover:bg-black">
            <Plus className="mr-2 h-5 w-5" />
            Create Assignment
          </button>
        </Link>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-100 text-black"
                    : "text-zinc-500 hover:bg-zinc-100 hover:text-black"
                }`}
              >
                <Icon className="h-5 w-5" />

                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-[28px] bg-zinc-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
              P
            </div>

            <div>
              <p className="text-sm font-semibold text-black">PaperGen</p>

              <p className="text-xs text-zinc-500">AI Assignment Platform</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
