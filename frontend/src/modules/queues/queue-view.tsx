export function QueueView() {
  const queues = [
    { name: "high", size: 12 },
    { name: "medium", size: 34 },
    { name: "low", size: 5 },
  ];

  return (
    <div className="space-y-2">

      {queues.map((q) => (
        <div
          key={q.name}
          className="flex justify-between border p-2"
        >
          <span>{q.name}</span>
          <span>{q.size}</span>
        </div>
      ))}

    </div>
  );
}