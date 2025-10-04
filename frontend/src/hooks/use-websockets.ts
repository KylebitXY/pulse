"use client";

import useWebSocket
from "react-use-websocket";

export function useRealtimeSocket() {

  const socket =
    useWebSocket(
      "ws://localhost:8000/ws/events",
      {
        shouldReconnect: () => true,
        reconnectAttempts: 9999,
        reconnectInterval: 3000,
      }
    );

  return socket;
}