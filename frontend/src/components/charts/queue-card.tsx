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
    queue: "emails",
    jobs: 32,
  },
  {
    queue: "events",
    jobs: 87,
  },
  {
    queue: "billing",
    jobs: 14,
  },
];

export function QueueChart() {

  return (

    <div className="h-[300px] border border-zinc-800 rounded-2xl p-4">

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