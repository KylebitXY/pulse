"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { t: "1m", v: 120 },
  { t: "2m", v: 240 },
  { t: "3m", v: 180 },
];

export default function Metrics() {
  return (
    <div className="h-64">

      <ResponsiveContainer width="100%" height="100%">

        <LineChart data={data}>

          <XAxis dataKey="t" />
          <Tooltip />
          <Line dataKey="v" />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}