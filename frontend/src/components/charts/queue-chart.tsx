"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    queue: "events",
    jobs: 120,
  },
  {
    queue: "emails",
    jobs: 48,
  },
  {
    queue: "workers",
    jobs: 89,
  },
];

export function QueueChart() {

  return (

    <div className="h-[320px] border border-zinc-800 rounded-2xl p-4">

      <h2 className="text-lg font-bold mb-4">
        Queue Metrics
      </h2>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <BarChart data={data}>

          <XAxis dataKey="queue" />

          <Tooltip />

          <Bar dataKey="jobs" />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}