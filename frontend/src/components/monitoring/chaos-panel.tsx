"use client";

import { useState } from "react";

export function ChaosPanel() {

  const [loading, setLoading] =
    useState(false);

  const triggerChaos =
    async () => {

      setLoading(true);

      await fetch(
        "http://localhost:8000/chaos/enable",
        {
          method: "POST",
        }
      );

      setLoading(false);
    };

  return (

    <div className="
      bg-zinc-950
      border
      border-red-900
      rounded-3xl
      p-6
    ">

      <h2 className="text-3xl font-bold text-red-500">
        Chaos Engineering
      </h2>

      <p className="text-zinc-400 mt-3">
        Simulate packet loss, worker crashes,
        CPU spikes, Redis latency, and cascading failures.
      </p>

      <button
        onClick={triggerChaos}
        disabled={loading}
        className="
          mt-6
          bg-red-600
          hover:bg-red-500
          px-6
          py-3
          rounded-xl
          font-bold
        "
      >
        {loading
          ? "Injecting Failure..."
          : "Trigger Chaos"}
      </button>

    </div>
  );
}