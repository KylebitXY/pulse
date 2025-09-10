"use client";

import { useBackendHealth }
from "@/hooks/use-backend-health";

export function BackendStatus() {

  const { status } =
    useBackendHealth();

  const color =
    status === "healthy"
      ? "bg-green-500"
      : status === "down"
      ? "bg-red-500"
      : "bg-yellow-500";

  const label =
    status === "healthy"
      ? "Backend Online"
      : status === "down"
      ? "Backend Offline"
      : "Checking Backend";

  return (

    <div
      className="
        flex
        items-center
        gap-2
        px-3
        py-2
        rounded-xl
        bg-zinc-900
        border
        border-zinc-800
      "
    >

      <div
        className={`w-3 h-3 rounded-full ${color}`}
      />

      <span className="text-sm">
        {label}
      </span>

    </div>
  );
}