"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

export function MobileFab() {
  return (
    <Link href="/create" className="fixed bottom-28 right-4 z-50 lg:hidden">
      <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <Plus className="h-6 w-6 text-orange-500" />
      </button>
    </Link>
  );
}
