"use client";

import {
  useEffect,
  useState,
} from "react";

import { EventCard }
from "./event-card";

export function LiveFeed() {

  const [events, setEvents] =
    useState<string[]>([]);

  useEffect(() => {

    const interval =
      setInterval(() => {

        setEvents((prev) => [

          `Worker heartbeat ${Date.now()}`,

          ...prev,

        ]);

      }, 3000);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <div className="space-y-3">

      {events.map((event, index) => (

        <EventCard
          key={index}
          event={event}
        />

      ))}

    </div>
  );
}