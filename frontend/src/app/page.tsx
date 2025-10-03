"use client";

import Link from "next/link";

import {
  Activity,
  ShieldCheck,
  Cpu,
  Database,
  Workflow,
} from "lucide-react";

const stats = [
  {
    label: "Workers",
    value: "128",
    icon: Cpu,
  },
  {
    label: "Queues",
    value: "42",
    icon: Database,
  },
  {
    label: "Pipelines",
    value: "312",
    icon: Workflow,
  },
  {
    label: "Uptime",
    value: "99.99%",
    icon: ShieldCheck,
  },
];

export default function HomePage() {

  return (

    <main
      className="
        min-h-screen
        bg-black
        text-white
        overflow-hidden
        relative
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(0,255,180,0.15),transparent_40%)]
        "
      />

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          h-[500px]
          w-[500px]
          bg-cyan-500/10
          blur-[140px]
          rounded-full
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          py-24
        "
      >

        <div
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            text-cyan-300
            text-sm
            mb-8
          "
        >

          <Activity size={16} />

          Realtime Distributed Infrastructure

        </div>

        <h1
          className="
            text-7xl
            font-black
            tracking-tight
            leading-none
            max-w-4xl
          "
        >

          PulseMesh

          <span
            className="
              block
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-cyan-400
              to-emerald-400
              mt-3
            "
          >

            Observability Cloud

          </span>

        </h1>

        <p
          className="
            text-zinc-400
            text-xl
            max-w-2xl
            mt-8
            leading-relaxed
          "
        >

          Monitor workers, queues, Kubernetes clusters,
          distributed traces, chaos engineering events,
          realtime metrics, and AI anomaly detection
          from a single intelligent control center.

        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <Link
            href="/dashboard"
            className="
              px-8
              py-4
              rounded-2xl
              bg-white
              text-black
              font-bold
              hover:scale-105
              transition-all
            "
          >

            Open Dashboard

          </Link>

          <Link
            href="/monitoring"
            className="
              px-8
              py-4
              rounded-2xl
              border
              border-zinc-700
              bg-zinc-900/60
              backdrop-blur
              hover:bg-zinc-800
              transition-all
            "
          >

            Monitoring Center

          </Link>

        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-6
            mt-24
          "
        >

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.label}
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

                <div className="flex items-center justify-between">

                  <div
                    className="
                      h-12
                      w-12
                      rounded-2xl
                      bg-cyan-500/10
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <Icon className="text-cyan-400" />

                  </div>

                  <div
                    className="
                      h-3
                      w-3
                      rounded-full
                      bg-emerald-400
                      animate-pulse
                    "
                  />

                </div>

                <div className="mt-8">

                  <div className="text-zinc-500 text-sm">
                    {item.label}
                  </div>

                  <div
                    className="
                      text-5xl
                      font-black
                      mt-2
                    "
                  >

                    {item.value}

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </main>
  );
}