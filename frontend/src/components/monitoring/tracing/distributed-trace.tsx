"use client";

const traces = [
  {
    service: "api-gateway",
    latency: "45ms",
  },
  {
    service: "worker-engine",
    latency: "122ms",
  },
  {
    service: "redis-cache",
    latency: "11ms",
  },
];

export function DistributedTrace() {

  return (

    <div
      className="
        bg-zinc-950
        border
        border-zinc-800
        rounded-3xl
        p-6
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          mb-6
        "
      >
        Distributed Tracing
      </h2>

      <div className="space-y-4">

        {traces.map((trace) => (

          <div
            key={trace.service}
            className="
              flex
              justify-between
              border
              border-zinc-800
              rounded-2xl
              p-4
            "
          >

            <span>
              {trace.service}
            </span>

            <span className="text-green-400">
              {trace.latency}
            </span>

          </div>

        ))}

      </div>

    </div>

  );
}