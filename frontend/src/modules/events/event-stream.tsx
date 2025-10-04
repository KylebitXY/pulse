"use client";

import { useEffect, useState } from "react";

export function EventStream() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws/events");

    ws.onmessage = (e) => {
      setEvents((prev) => [e.data, ...prev]);
    };
  }, []);

  return (
    <div className="h-96 overflow-auto border p-2">

      {events.map((e, i) => (
        <div key={i} className="text-xs">
          {e}
        </div>
      ))}

    </div>
  );
}