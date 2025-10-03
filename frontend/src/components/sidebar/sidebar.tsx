"use client";

import Link from "next/link";

import { usePathname }
from "next/navigation";

import {
  LayoutDashboard,
  Activity,
  Database,
  Bell,
  Shield,
  Cpu,
} from "lucide-react";

import { BackendStatus }
from "@/components/status/backend-status";

const items = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Realtime",
    href: "/realtime",
    icon: Activity,
  },
  {
    label: "Workers",
    href: "/workers",
    icon: Cpu,
  },
  {
    label: "Queues",
    href: "/queues",
    icon: Database,
  },
  {
    label: "Events",
    href: "/events",
    icon: Bell,
    badge: 14,
  },
  {
    label: "Audit",
    href: "/audit",
    icon: Shield,
  },
  {
    label: "Monitor",
    href: "/monitoring",
    icon: Shield,
  },
];

export function Sidebar() {

  const pathname =
    usePathname();

  return (

    <aside
      className="
        w-72
        min-h-screen
        border-r
        border-zinc-800
        p-5
        bg-black
      "
    >

      <div className="mb-10">

  <div className="flex items-center gap-4">

    <div
      className="
        h-14
        w-14
        rounded-2xl
        bg-gradient-to-br
        from-cyan-400
        to-emerald-400
        flex
        items-center
        justify-center
        text-black
        font-black
        text-xl
        shadow-lg
      "
    >

      P

    </div>

    <div>

      <h1
        className="
          text-3xl
          font-black
          tracking-tight
        "
      >
        PulseMesh
      </h1>

      <p className="text-zinc-500 text-sm mt-1">
        AI Infrastructure Core
      </p>

    </div>

  </div>

</div>

      <div className="mb-6">

        <BackendStatus />

      </div>

      <nav className="space-y-2">

        {items.map((item) => {

          const Icon =
            item.icon;

          const active =
            pathname === item.href;

          return (

            <Link
              key={item.href}
              href={item.href}
              className={`
                flex
                items-center
                justify-between
                p-3
                rounded-xl
                transition-all
                duration-200
                border

                ${
                  active
                    ? `
                      bg-zinc-900
                      border-zinc-700
                    `
                    : `
                      border-transparent
                      hover:bg-zinc-950
                    `
                }
              `}
            >

              <div className="flex items-center gap-3">

                <Icon size={18} />

                <span>
                  {item.label}
                </span>

              </div>

              {item.badge && (

                <span
                  className="
                    bg-red-500
                    text-xs
                    px-2
                    py-1
                    rounded-full
                    font-bold
                  "
                >
                  {item.badge}
                </span>

              )}

            </Link>

          );

        })}

      </nav>

      <div
        className="
          mt-10
          p-4
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-950
        "
      >

        <h3 className="font-semibold mb-2">
          Worker Cluster
        </h3>

        <div className="space-y-2 text-sm">

          <div className="flex justify-between">

            <span className="text-zinc-400">
              Active Workers
            </span>

            <span className="font-bold">
              12
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-zinc-400">
              Queue Depth
            </span>

            <span className="font-bold">
              248
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-zinc-400">
              Throughput
            </span>

            <span className="font-bold">
              1.4k/s
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}