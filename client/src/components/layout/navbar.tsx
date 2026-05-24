"use client";

import { Bell } from "lucide-react";

export function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between rounded-[32px] bg-white px-6 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold">Assignment</h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="h-6 w-6 text-zinc-700" />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-orange-500" />
        </button>

        <button className="flex items-center gap-3 rounded-full bg-zinc-100 px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
            D
          </div>

          <span className="text-sm font-medium">Dilip</span>
        </button>
      </div>
    </header>
  );
}
