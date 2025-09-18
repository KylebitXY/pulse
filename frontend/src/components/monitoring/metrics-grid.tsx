export function MetricsGrid({
  metrics,
}: any) {

  const cards = [
    {
      label: "CPU",
      value: `${metrics.cpu}%`,
    },
    {
      label: "Memory",
      value: `${metrics.memory}%`,
    },
    {
      label: "Workers",
      value: metrics.workers,
    },
    {
      label: "Events/sec",
      value: metrics.events_per_sec,
    },
    {
      label: "Queue Depth",
      value: metrics.queue_depth,
    },
    {
      label: "Latency",
      value: `${metrics.latency_ms}ms`,
    },
  ];

  return (

    <div className="grid grid-cols-2 lg:grid-cols-6 gap-5">

      {cards.map((card) => (

        <div
          key={card.label}
          className="
            bg-zinc-950
            border
            border-zinc-800
            rounded-3xl
            p-6
            shadow-2xl
          "
        >

          <div className="text-zinc-400 text-sm">
            {card.label}
          </div>

          <div className="text-3xl font-bold mt-3">
            {card.value}
          </div>

        </div>

      ))}

    </div>
  );
}