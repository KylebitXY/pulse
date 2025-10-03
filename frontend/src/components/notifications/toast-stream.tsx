"use client";

import { useEffect, useState } from "react";

export function ToastStream() {
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws/notifications");

    ws.onmessage = (msg) => {
      setEvents((prev) => [msg.data, ...prev]);
    };

    return () => ws.close();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 space-y-2">

      {events.map((e, i) => (
        <div key={i} className="bg-black text-white p-2 rounded">
          {e}
        </div>
      ))}

    </div>
  );
}