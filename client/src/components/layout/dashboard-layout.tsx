import { ReactNode } from "react";

import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { MobileBottomNav } from "./mobile-bottom-nav";
import { MobileFab } from "./mobile-fab";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#E9E9E9]">
      <Sidebar />

      <main className="flex-1 overflow-x-hidden p-4 md:p-6">
        <Navbar />

        <div className="mt-6 pb-24 lg:pb-6">{children}</div>
      </main>

      <MobileFab />

      <MobileBottomNav />
    </div>
  );
}
