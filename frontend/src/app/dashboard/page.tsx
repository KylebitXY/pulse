import { Sidebar }
from "@/components/sidebar/sidebar";

import { Topbar }
from "@/components/navbar/topbar";

import { PrometheusChart }
from "@/components/charts/prometheus-chart";

import { WorkerGrid }
from "@/modules/workers/worker-grid";

import { QueueView }
from "@/modules/queues/queue-view";

import { LiveFeed }
from "@/components/realtime/live-feed";

export default function DashboardPage() {

  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 overflow-auto">

        <Topbar />

        <div className="p-6 space-y-6">

          <h1 className="text-4xl font-bold">
            PulseMesh Control Plane
          </h1>

          <PrometheusChart />

          <WorkerGrid />

          <QueueView />

          <LiveFeed />

        </div>

      </div>

    </div>
  );
}