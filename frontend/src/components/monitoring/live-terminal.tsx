"use client";

import { useEffect, useRef, useState } from "react";

import {
  Terminal,
  AlertTriangle,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const baseLogs = [

  "Redis queue synchronized",
  "Kubernetes pod healthy",
  "Worker heartbeat received",
  "OpenTelemetry trace exported",
  "Grafana metrics updated",
  "Anomaly detection model inference complete",
  "WebSocket stream connected",
  "Prometheus scrape completed",
  "Pod autoscaler increased replicas",
];

export function LiveTerminal() {

  const [logs, setLogs] =
    useState<string[]>([]);

  const [connected, setConnected] =
    useState(true);

  const terminalRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    const interval =
      setInterval(() => {

        const random =
          baseLogs[
            Math.floor(
              Math.random() *
              baseLogs.length
            )
          ];

        const level =
          Math.random() > 0.85
            ? "WARN"
            : "INFO";

        const entry =

          `[${new Date().toLocaleTimeString()}] [${level}] ${random}`;

        setLogs((prev) =>

          [entry, ...prev].slice(0, 40)

        );

      }, 1200);

    return () =>
      clearInterval(interval);

  }, []);

  useEffect(() => {

    if (terminalRef.current) {

      terminalRef.current.scrollTop = 0;

    }

  }, [logs]);

  return (

    <div className="
      relative
      overflow-hidden
      bg-black
      border
      border-green-900/60
      rounded-[32px]
      p-8
      h-[520px]
      shadow-[0_0_60px_rgba(0,255,100,0.08)]
    ">

      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-green-500/5
        via-transparent
        to-cyan-500/5
        pointer-events-none
      " />

      <div className="
        flex
        items-center
        justify-between
        mb-8
      ">

        <div className="
          flex
          items-center
          gap-4
        ">

          <div className="
            w-14
            h-14
            rounded-2xl
            bg-green-500/10
            flex
            items-center
            justify-center
          ">

            <Terminal
              size={30}
              className="text-green-400"
            />

          </div>

          <div>

            <h2 className="
              text-3xl
              font-black
              text-green-400
            ">

              Live Infrastructure Terminal

            </h2>

            <p className="
              text-zinc-500
              mt-1
            ">

              Realtime cluster diagnostics and worker telemetry

            </p>

          </div>

        </div>

        <div className="
          flex
          items-center
          gap-3
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
            bg-zinc-900
          ">

            <Wifi
              size={16}
              className={
                connected
                  ? "text-green-400"
                  : "text-red-400"
              }
            />

            <span className="text-sm">

              {connected
                ? "Streaming"
                : "Disconnected"}

            </span>

          </div>

        </div>

      </div>

      <div
        ref={terminalRef}
        className="
          relative
          z-10
          h-[360px]
          overflow-auto
          space-y-3
          pr-3
          font-mono
          text-sm
        "
      >

        {logs.map((log, index) => {

          const warning =
            log.includes("WARN");

          return (

            <div
              key={index}
              className={`
                flex
                items-start
                gap-3
                rounded-xl
                px-4
                py-3
                border
                ${
                  warning
                    ? "bg-red-500/10 border-red-500/20 text-red-300"
                    : "bg-zinc-900/70 border-zinc-800 text-green-400"
                }
              `}
            >

              {warning ? (

                <AlertTriangle
                  size={18}
                />

              ) : (

                <ShieldCheck
                  size={18}
                />

              )}

              <span>{log}</span>

            </div>

          );
        })}

      </div>

    </div>
  );
}