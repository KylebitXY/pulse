"use client";

import {
  Activity,
  Clock3,
  Cpu,
  Database,
  Globe,
} from "lucide-react";

type Trace = {
  id: string;
  service: string;
  latency: number;
  status: string;
  timestamp: string;
};

interface TracePanelProps {
  traces: Trace[];
}

export function TracePanel({
  traces,
}: TracePanelProps) {

  return (

    <div
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-950/70
        backdrop-blur-xl
        p-8
        shadow-2xl
      "
    >

      <div className="flex items-center gap-3 mb-8">

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

          <Activity className="text-cyan-400" />

        </div>

        <div>

          <h2 className="text-3xl font-black">
            Distributed Tracing
          </h2>

          <p className="text-zinc-400 mt-1">
            OpenTelemetry request flow
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {traces.length === 0 && (

          <div
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/40
              p-6
              text-zinc-400
            "
          >

            No traces received

          </div>

        )}

        {traces.map((trace) => (

          <div
            key={trace.id}
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/50
              p-5
              hover:border-cyan-500/40
              transition-all
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <Globe
                    size={18}
                    className="text-cyan-400"
                  />

                  <span className="font-bold text-lg">
                    {trace.service}
                  </span>

                </div>

                <div className="mt-2 text-sm text-zinc-400">
                  Trace ID: {trace.id}
                </div>

              </div>

              <div
                className={`
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-bold
                  ${
                    trace.status === "healthy"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-red-500/20 text-red-400"
                  }
                `}
              >

                {trace.status}

              </div>

            </div>

            <div
              className="
                grid
                grid-cols-2
                gap-4
                mt-6
              "
            >

              <div
                className="
                  rounded-xl
                  bg-black/40
                  p-4
                  border
                  border-zinc-800
                "
              >

                <div className="flex items-center gap-2 text-zinc-400 text-sm">

                  <Clock3 size={15} />

                  Latency

                </div>

                <div className="text-2xl font-black mt-2">

                  {trace.latency}ms

                </div>

              </div>

              <div
                className="
                  rounded-xl
                  bg-black/40
                  p-4
                  border
                  border-zinc-800
                "
              >

                <div className="flex items-center gap-2 text-zinc-400 text-sm">

                  <Cpu size={15} />

                  Timestamp

                </div>

                <div className="text-sm mt-2 text-zinc-300">

                  {trace.timestamp}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}