"use client";

import { Sidebar }
from "@/components/sidebar/sidebar";

import { useLiveMetrics }
from "@/hooks/use-live-metrics";

import { LivePerformanceChart }
from "@/components/monitoring/charts/live-performance-chart";

import { RedisQueueInspector }
from "@/components/monitoring/queues/redis-queue-inspector";


import { KubernetesPods }
from "@/components/monitoring/pods/kubernetes-pods";

import { DistributedTrace }
from "@/components/monitoring/tracing/distributed-trace";

import { AnomalyDetectionPanel }
from "@/components/monitoring/ai/anomaly-detection";

export default function MonitoringPage() {

  useLiveMetrics();

  return (

    <div
      className="
        flex
        min-h-screen
        bg-black
        text-white
      "
    >

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="mb-10">

          <h1
            className="
              text-5xl
              font-black
              tracking-tight
              mb-3
            "
          >
            PulseMesh Observability
          </h1>

          <p
            className="
              text-zinc-400
              text-lg
            "
          >
            Enterprise Distributed Systems Monitoring Platform
          </p>

        </div>

        <div className="mb-8">

          <LivePerformanceChart />

        </div>

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-8
            mb-8
          "
        >

          <RedisQueueInspector />

          

        </div>

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-8
            mb-8
          "
        >

          <KubernetesPods />

          <DistributedTrace />

        </div>

        <AnomalyDetectionPanel />

      </main>

    </div>

  );
}