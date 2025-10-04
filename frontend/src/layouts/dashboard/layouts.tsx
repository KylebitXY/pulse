"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Activity,
  Server,
  Cpu,
  Database,
  Shield,
} from "lucide-react";

const items = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Realtime", icon: Activity, href: "/realtime" },
  { label: "Workers", icon: Cpu, href: "/workers" },
  { label: "Queues", icon: Database, href: "/queues" },
  { label: "Infrastructure", icon: Server, href: "/infra" },
  { label: "Security", icon: Shield, href: "/security" },
];

export function Sidebar() {
  return (
    <div className="w-72 border-r h-full p-4">

      <div className="text-xl font-bold mb-6">
        PulseMesh
      </div>

      <div className="space-y-2">

        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={item.href}
                className="flex items-center gap-3 p-2 rounded hover:bg-muted"
              >
                <Icon size={18} />
                {item.label}
              </Link>
            </motion.div>
          );
        })}

      </div>

    </div>
  );
}