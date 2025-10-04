"use client";

import { create }
from "zustand";

type MetricsState = {

  cpu: number;
  memory: number;
  throughput: number;
  queues: number;

  setMetrics: (
    metrics: Partial<MetricsState>
  ) => void;

};

export const useRealtimeStore =
  create<MetricsState>((set) => ({

    cpu: 43,
    memory: 68,
    throughput: 1400,
    queues: 248,

    setMetrics: (metrics) =>
      set(metrics),

  }));