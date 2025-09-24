import { MonitoringDashboard }
from "@/components/monitoring/monitoring-dashboard";

import { RealtimeMetrics }
from "@/components/monitoring/realtime-metrics";

import { TestResults }
from "@/components/monitoring/test-results";

import { LiveTerminal }
from "@/components/monitoring/live-terminal";

export default function MonitoringPage() {

  return (

    <main className="
      min-h-screen
      bg-gradient-to-b
      from-black
      to-zinc-950
      text-white
      p-8
    ">

      <div className="max-w-7xl mx-auto">

        <div className="mb-12">

          <h1 className="
            text-6xl
            font-black
            tracking-tight
          ">

            PulseMesh Monitoring Center

          </h1>

          <p className="
            text-zinc-400
            mt-4
            text-lg
          ">

            Distributed Systems • Chaos Engineering • Kubernetes • AI Detection

          </p>

        </div>

        <RealtimeMetrics />

        <div className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-8
          mt-10
        ">

          <TestResults />

          <LiveTerminal />

        </div>

        <div className="mt-12">

          <MonitoringDashboard />

        </div>

      </div>

    </main>
  );
}