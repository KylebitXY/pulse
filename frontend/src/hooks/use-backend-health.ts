"use client";

import { useEffect, useState } from "react";

type HealthState = {
  status: "healthy" | "down" | "loading";
};

export function useBackendHealth() {

  const [health, setHealth] =
    useState<HealthState>({
      status: "loading",
    });

  useEffect(() => {

    let mounted = true;

    async function checkHealth() {

      try {

        const response = await fetch(
          "http://localhost:8000/health"
        );

        if (!mounted) return;

        if (response.ok) {

          setHealth({
            status: "healthy",
          });

        } else {

          setHealth({
            status: "down",
          });

        }

      } catch {

        if (!mounted) return;

        setHealth({
          status: "down",
        });

      }

    }

    checkHealth();

    const interval =
      setInterval(checkHealth, 5000);

    return () => {

      mounted = false;

      clearInterval(interval);

    };

  }, []);

  return health;

}