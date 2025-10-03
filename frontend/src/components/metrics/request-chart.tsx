"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1m", requests: 100 },
  { name: "2m", requests: 220 },
  { name: "3m", requests: 340 },
  { name: "4m", requests: 280 },
];

export function RequestChart() {

  return (
    <div className="w-full h-[300px] min-h-[300px]">

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <LineChart data={data}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line dataKey="requests" />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}