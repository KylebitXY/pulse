"use client";

import { Sidebar }
from "@/components/sidebar/sidebar";

import { Topbar }
from "@/components/navbar/topbar";

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div className="flex h-screen bg-black text-white">

      <Sidebar />

      <div className="flex-1 overflow-auto">

        <Topbar />

        <main className="p-6">

          {children}

        </main>

      </div>

    </div>
  );
}