"use client";

import { useEffect }
from "react";

import { useRealtimeStore }
from "@/store/realtime-store";

export function useLiveMetrics() {

  const setMetrics =
    useRealtimeStore(
      (state) => state.setMetrics
    );

  useEffect(() => {

    const interval =
      setInterval(() => {

        setMetrics({

          cpu:
            Math.floor(
              Math.random() * 100
            ),

          memory:
            Math.floor(
              Math.random() * 100
            ),

          throughput:
            1200 +
            Math.floor(
              Math.random() * 800
            ),

          queues:
            150 +
            Math.floor(
              Math.random() * 200
            ),

        });

      }, 2000);

    return () =>
      clearInterval(interval);

  }, [setMetrics]);

}