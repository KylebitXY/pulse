"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { t: "1m", cpu: 22 },
  { t: "2m", cpu: 31 },
  { t: "3m", cpu: 28 },
  { t: "4m", cpu: 40 },
];

export function PrometheusChart() {

  return (
    <div className="h-[300px]">

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <AreaChart data={data}>

          <XAxis dataKey="t" />

          <Tooltip />

          <Area dataKey="cpu" />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}