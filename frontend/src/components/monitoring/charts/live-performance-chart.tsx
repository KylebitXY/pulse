"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { time: "10:00", cpu: 35 },
  { time: "10:05", cpu: 44 },
  { time: "10:10", cpu: 62 },
  { time: "10:15", cpu: 51 },
  { time: "10:20", cpu: 75 },
  { time: "10:25", cpu: 68 },
];

export function LivePerformanceChart() {

  return (

    <div
      className="
        h-[380px]
        bg-zinc-950
        border
        border-zinc-800
        rounded-3xl
        p-6
      "
    >

      <div className="mb-6">

        <h2
          className="
            text-2xl
            font-bold
          "
        >
          Live CPU Load
        </h2>

        <p className="text-zinc-500">
          Realtime distributed worker activity
        </p>

      </div>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <LineChart data={data}>

          <XAxis dataKey="time" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#22c55e"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
}