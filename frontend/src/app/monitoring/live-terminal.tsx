"use client";

import {
  useEffect,
  useState,
} from "react";

export function LiveTerminal() {

  const [logs, setLogs] =
    useState<string[]>([]);

  useEffect(() => {

    const interval =
      setInterval(() => {

        setLogs((prev) => [

          `[${new Date().toLocaleTimeString()}] Worker processed event`,

          ...prev.slice(0, 8),

        ]);

      }, 2000);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <div className="rounded-2xl border border-zinc-800 bg-black p-6">

      <h2 className="text-green-400 text-xl mb-4">

        Live System Terminal

      </h2>

      <div className="space-y-2 font-mono text-sm">

        {logs.map((log, index) => (

          <div
            key={index}
            className="text-green-400"
          >
            {log}
          </div>

        ))}

      </div>

    </div>
  );
}