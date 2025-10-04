"use client";

import { Sidebar }
from "@/components/sidebar/sidebar";

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div className="flex h-screen bg-black text-white">

      <Sidebar />

      <main className="flex-1 overflow-auto p-6">

        {children}

      </main>

    </div>
  );
}