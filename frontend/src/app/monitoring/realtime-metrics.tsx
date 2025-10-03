"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getSystemStatus,
  SystemStatus,
} from "@/lib/system-status";

import { StatusCard }
from "./status-card";

export function RealtimeMetrics() {

  const [status, setStatus] =
    useState<SystemStatus | null>(
      null
    );

  useEffect(() => {

    async function load() {

      const data =
        await getSystemStatus();

      setStatus(data);

    }

    load();

    const interval =
      setInterval(load, 3000);

    return () =>
      clearInterval(interval);

  }, []);

  if (!status) {

    return (

      <div className="text-zinc-400">

        Loading system metrics...
      </div>

    );

  }

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

      <StatusCard
        title="API"
        value={status.api}
        status="Backend healthy"
      />

      <StatusCard
        title="WebSocket"
        value={status.websocket}
        status="Realtime active"
      />

      <StatusCard
        title="Queue"
        value={status.queue}
        status="No congestion"
      />

      <StatusCard
        title="Workers"
        value={status.workers}
        status="Workers online"
      />

      <StatusCard
        title="Events Processed"
        value={status.eventsProcessed}
      />

      <StatusCard
        title="Failed Jobs"
        value={status.failedJobs}
      />

      <StatusCard
        title="Uptime"
        value={status.uptime}
      />

    </div>
  );
}