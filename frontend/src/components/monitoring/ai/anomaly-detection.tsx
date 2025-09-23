"use client";

const alerts = [
  "High worker CPU spike detected",
  "Queue latency anomaly observed",
  "Redis memory pressure increasing",
];

export function AnomalyDetectionPanel() {

  return (

    <div
      className="
        bg-gradient-to-br
        from-fuchsia-950
        to-zinc-950
        border
        border-fuchsia-800
        rounded-3xl
        p-6
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          mb-6
        "
      >
        AI Anomaly Detection
      </h2>

      <div className="space-y-4">

        {alerts.map((alert) => (

          <div
            key={alert}
            className="
              border
              border-fuchsia-800
              bg-black/40
              rounded-2xl
              p-4
            "
          >
            {alert}
          </div>

        ))}

      </div>

    </div>

  );
}