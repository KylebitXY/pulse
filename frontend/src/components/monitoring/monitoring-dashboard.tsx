"use client";

import { useEffect, useState } from "react";

import {
  Activity,
  AlertTriangle,
  Cpu,
  Database,
  Globe,
  Shield,
  Sparkles,
} from "lucide-react";

import { RealtimeMetrics }
from "./realtime-metrics";

import { LiveTerminal }
from "./live-terminal";

import { TracePanel }
from "./trace-panel";

import { ChaosPanel }
from "./chaos-panel";

import { PodsTable }
from "./pods-table";

export function MonitoringDashboard() {

  const [pods, setPods] =
    useState<any[]>([]);

  const [traces, setTraces] =
    useState<any[]>([]);

  const [alerts, setAlerts] =
    useState<string[]>([]);

  useEffect(() => {

    const load = async () => {

      try {

        const podsRes =
          await fetch(
            "http://localhost:8000/kubernetes/pods"
          );

        const podsData =
          await podsRes.json();

        setPods(podsData.pods || []);

      } catch {}

      try {

        const tracesRes =
          await fetch(
            "http://localhost:8000/tracing"
          );

        const tracesData =
          await tracesRes.json();

        setTraces(
          tracesData.traces || []
        );

      } catch {}

      setAlerts([
        "Redis queue latency spike detected",
        "Worker-7 restarted automatically",
        "AI anomaly score exceeded threshold",
      ]);

    };

    load();

    const interval =
      setInterval(load, 3000);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <main
      className="
        min-h-screen
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-zinc-900
        text-white
        overflow-hidden
      "
    >

      <div className="flex">

        {/* SIDEBAR */}

        <aside
          className="
            hidden
            xl:flex
            w-72
            min-h-screen
            border-r
            border-zinc-800
            bg-black/40
            backdrop-blur-xl
            flex-col
            p-8
          "
        >

          <div>

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <div
                className="
                  h-14
                  w-14
                  rounded-2xl
                  bg-cyan-500/20
                  flex
                  items-center
                  justify-center
                "
              >

                <Sparkles
                  className="
                    text-cyan-400
                  "
                />

              </div>

              <div>

                <h1
                  className="
                    text-3xl
                    font-black
                  "
                >

                  PulseMesh

                </h1>

                <p
                  className="
                    text-zinc-500
                    text-sm
                  "
                >

                  Observability OS

                </p>

              </div>

            </div>

            <div
              className="
                mt-10
                space-y-4
              "
            >

              {[
                "Realtime Monitoring",
                "Kubernetes",
                "Chaos Engineering",
                "Distributed Tracing",
                "Anomaly Detection",
                "Queue Inspector",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900/50
                    px-5
                    py-4
                    text-zinc-300
                    hover:bg-cyan-500/10
                    transition-all
                    cursor-pointer
                  "
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          <div className="mt-auto">

            <div
              className="
                rounded-3xl
                border
                border-cyan-500/20
                bg-cyan-500/10
                p-6
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <Shield
                  className="
                    text-cyan-400
                  "
                />

                <div>

                  <div className="font-bold">
                    Cluster Stable
                  </div>

                  <div
                    className="
                      text-sm
                      text-zinc-400
                    "
                  >

                    All systems operational

                  </div>

                </div>

              </div>

            </div>

          </div>

        </aside>

        {/* CONTENT */}

        <section
          className="
            flex-1
            p-6
            xl:p-10
          "
        >

          {/* HERO */}

          <div
            className="
              rounded-[32px]
              border
              border-zinc-800
              bg-gradient-to-r
              from-cyan-500/10
              to-purple-500/10
              p-10
              backdrop-blur-xl
              shadow-2xl
            "
          >

            <div
              className="
                flex
                flex-col
                xl:flex-row
                xl:items-center
                xl:justify-between
                gap-10
              "
            >

              <div>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-4
                    py-2
                    text-sm
                    text-emerald-400
                  "
                >

                  <Activity size={15} />

                  LIVE SYSTEM STATUS

                </div>

                <h1
                  className="
                    text-5xl
                    xl:text-7xl
                    font-black
                    mt-6
                    leading-tight
                  "
                >

                  Infrastructure
                  <br />
                  Control Center

                </h1>

                <p
                  className="
                    text-zinc-400
                    text-lg
                    mt-6
                    max-w-3xl
                  "
                >

                  Real-time observability platform
                  powered by Kubernetes,
                  Redis Streams,
                  OpenTelemetry,
                  Chaos Engineering,
                  and AI anomaly detection.

                </p>

              </div>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-5
                "
              >

                {[
                  {
                    label: "Pods",
                    value: "24",
                    icon: Globe,
                  },
                  {
                    label: "Workers",
                    value: "12",
                    icon: Cpu,
                  },
                  {
                    label: "Queues",
                    value: "7",
                    icon: Database,
                  },
                  {
                    label: "Alerts",
                    value: "3",
                    icon: AlertTriangle,
                  },
                ].map((item) => {

                  const Icon =
                    item.icon;

                  return (

                    <div
                      key={item.label}
                      className="
                        rounded-3xl
                        border
                        border-zinc-800
                        bg-black/40
                        p-6
                        min-w-[170px]
                      "
                    >

                      <Icon
                        className="
                          text-cyan-400
                        "
                      />

                      <div
                        className="
                          text-4xl
                          font-black
                          mt-4
                        "
                      >

                        {item.value}

                      </div>

                      <div
                        className="
                          text-zinc-500
                          mt-2
                        "
                      >

                        {item.label}

                      </div>

                    </div>

                  );
                })}

              </div>

            </div>

          </div>

          {/* METRICS */}

          <div className="mt-10">

            <RealtimeMetrics />

          </div>

          {/* PANELS */}

          <div
            className="
              grid
              grid-cols-1
              2xl:grid-cols-2
              gap-8
              mt-10
            "
          >

            <ChaosPanel />

            <TracePanel
              traces={traces}
            />

          </div>

          {/* TERMINAL + ALERTS */}

          <div
            className="
              grid
              grid-cols-1
              xl:grid-cols-3
              gap-8
              mt-10
            "
          >

            <div className="xl:col-span-2">

              <LiveTerminal />

            </div>

            <div
              className="
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950/70
                backdrop-blur-xl
                p-8
              "
            >

              <h2
                className="
                  text-3xl
                  font-black
                  mb-8
                "
              >

                AI Alert Engine

              </h2>

              <div className="space-y-5">

                {alerts.map(
                  (alert, index) => (

                    <div
                      key={index}
                      className="
                        rounded-2xl
                        border
                        border-red-500/20
                        bg-red-500/10
                        p-5
                      "
                    >

                      <div
                        className="
                          flex
                          items-start
                          gap-4
                        "
                      >

                        <AlertTriangle
                          className="
                            text-red-400
                            mt-1
                          "
                        />

                        <div>

                          <div className="font-bold">
                            Critical Alert
                          </div>

                          <div
                            className="
                              text-zinc-300
                              mt-2
                            "
                          >

                            {alert}

                          </div>

                        </div>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

          {/* PODS */}

          <div className="mt-10">

            <PodsTable
              pods={pods}
            />

          </div>

        </section>

      </div>

    </main>
  );
}