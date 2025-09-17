"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Activity,
  Cpu,
  Database,
  Server,
  Wifi,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

type Metrics = {
  cpu: number;
  memory: number;
  workers: number;
  events_per_sec: number;
};

export function RealtimeMetrics() {

  const [metrics, setMetrics] =
    useState<Metrics | null>(null);

  const [connected, setConnected] =
    useState(false);

  const [lastUpdated, setLastUpdated] =
    useState("");

  const [anomaly, setAnomaly] =
    useState<string | null>(null);

  useEffect(() => {

    const load = async () => {

      try {

        const res =
          await fetch(
            "http://localhost:8000/metrics"
          );

        const data =
          await res.json();

        setMetrics(data);

        setConnected(true);

        setLastUpdated(
          new Date().toLocaleTimeString()
        );

        if (
          data.cpu > 90 ||
          data.memory > 90
        ) {

          setAnomaly(
            "Critical infrastructure spike detected"
          );

        } else {

          setAnomaly(null);

        }

      } catch {

        setConnected(false);

      }

    };

    load();

    const interval =
      setInterval(load, 2000);

    return () =>
      clearInterval(interval);

  }, []);

  const cards = useMemo(() => {

    if (!metrics) return [];

    return [

      {
        label: "CPU Usage",
        value: `${metrics.cpu}%`,
        icon: Cpu,
        glow: "from-red-500/20 to-orange-500/10",
      },

      {
        label: "Memory",
        value: `${metrics.memory}%`,
        icon: Activity,
        glow: "from-cyan-500/20 to-blue-500/10",
      },

      {
        label: "Workers",
        value: metrics.workers,
        icon: Server,
        glow: "from-violet-500/20 to-fuchsia-500/10",
      },

      {
        label: "Events/sec",
        value: metrics.events_per_sec,
        icon: TrendingUp,
        glow: "from-emerald-500/20 to-green-500/10",
      },

    ];

  }, [metrics]);

  if (!metrics) {

    return (

      <div className="
        h-64
        flex
        items-center
        justify-center
        text-zinc-500
        text-xl
      ">

        Loading infrastructure metrics...

      </div>

    );
  }

  return (

    <div className="space-y-8">

      <div className="
        flex
        flex-col
        xl:flex-row
        xl:items-center
        xl:justify-between
        gap-4
      ">

        <div>

          <h2 className="
            text-4xl
            font-black
            tracking-tight
          ">

            Realtime Infrastructure Metrics

          </h2>

          <p className="
            text-zinc-400
            mt-2
          ">

            Observability • Distributed Systems • Kubernetes

          </p>

        </div>

        <div className="
          flex
          items-center
          gap-4
        ">

          <div className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-zinc-800
            bg-zinc-900/60
          ">

            <Wifi
              size={18}
              className={
                connected
                  ? "text-green-400"
                  : "text-red-400"
              }
            />

            <span className="text-sm">

              {connected
                ? "Connected"
                : "Disconnected"}

            </span>

          </div>

          <div className="
            text-sm
            text-zinc-500
          ">

            Updated {lastUpdated}

          </div>

        </div>

      </div>

      {anomaly && (

        <div className="
          flex
          items-center
          gap-3
          bg-red-500/10
          border
          border-red-500/30
          rounded-2xl
          p-5
          text-red-300
          animate-pulse
        ">

          <AlertTriangle />

          <span className="font-semibold">

            {anomaly}

          </span>

        </div>

      )}

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      ">

        {cards.map((card) => {

          const Icon = card.icon;

          return (

            <div
              key={card.label}
              className={`
                relative
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-gradient-to-br
                ${card.glow}
                backdrop-blur-xl
                p-7
                shadow-2xl
              `}
            >

              <div className="
                absolute
                top-0
                right-0
                w-32
                h-32
                bg-white/5
                rounded-full
                blur-3xl
              " />

              <div className="
                flex
                items-center
                justify-between
              ">

                <div>

                  <p className="
                    text-zinc-400
                    text-sm
                  ">

                    {card.label}

                  </p>

                  <h3 className="
                    text-5xl
                    font-black
                    mt-4
                  ">

                    {card.value}

                  </h3>

                </div>

                <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                ">

                  <Icon size={28} />

                </div>

              </div>

            </div>

          );
        })}

      </div>

      <div className="
        grid
        grid-cols-1
        xl:grid-cols-3
        gap-6
      ">

        <div className="
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-950/70
          p-6
        ">

          <div className="
            flex
            items-center
            gap-3
            mb-4
          ">

            <Database className="text-emerald-400" />

            <h3 className="text-2xl font-bold">

              Redis Queue Health

            </h3>

          </div>

          <div className="space-y-4">

            <MetricBar
              label="events"
              value={88}
            />

            <MetricBar
              label="emails"
              value={62}
            />

            <MetricBar
              label="workers"
              value={91}
            />

          </div>

        </div>

        <div className="
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-950/70
          p-6
        ">

          <h3 className="
            text-2xl
            font-bold
            mb-5
          ">

            Kubernetes Cluster

          </h3>

          <div className="space-y-5">

            <StatusRow
              label="API Pods"
              value="12/12 Healthy"
            />

            <StatusRow
              label="Worker Pods"
              value="24/24 Healthy"
            />

            <StatusRow
              label="Redis Nodes"
              value="3 Active"
            />

          </div>

        </div>

        <div className="
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-950/70
          p-6
        ">

          <h3 className="
            text-2xl
            font-bold
            mb-5
          ">

            OpenTelemetry Tracing

          </h3>

          <div className="space-y-5">

            <TraceRow
              name="gateway-service"
              latency="12ms"
            />

            <TraceRow
              name="redis-consumer"
              latency="5ms"
            />

            <TraceRow
              name="notification-engine"
              latency="44ms"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

function MetricBar({
  label,
  value,
}: {
  label: string;
  value: number;
}) {

  return (

    <div>

      <div className="
        flex
        justify-between
        mb-2
      ">

        <span>{label}</span>

        <span>{value}%</span>

      </div>

      <div className="
        h-3
        bg-zinc-800
        rounded-full
        overflow-hidden
      ">

        <div
          style={{
            width: `${value}%`,
          }}
          className="
            h-full
            bg-gradient-to-r
            from-cyan-500
            to-emerald-500
          "
        />

      </div>

    </div>

  );
}

function StatusRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {

  return (

    <div className="
      flex
      items-center
      justify-between
      border-b
      border-zinc-800
      pb-3
    ">

      <span className="text-zinc-400">
        {label}
      </span>

      <span className="font-bold text-green-400">
        {value}
      </span>

    </div>

  );
}

function TraceRow({
  name,
  latency,
}: {
  name: string;
  latency: string;
}) {

  return (

    <div className="
      flex
      items-center
      justify-between
      rounded-2xl
      bg-zinc-900/80
      p-4
    ">

      <div>

        <div className="font-semibold">
          {name}
        </div>

        <div className="
          text-xs
          text-zinc-500
          mt-1
        ">
          distributed trace
        </div>

      </div>

      <div className="
        text-cyan-400
        font-bold
      ">

        {latency}

      </div>

    </div>

  );
}