export function WorkerGrid() {

  const workers = [
    { id: 1, status: "active" },
    { id: 2, status: "busy" },
    { id: 3, status: "idle" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">

      {workers.map((worker) => (

        <div
          key={worker.id}
          className="border border-zinc-800 rounded-xl p-4"
        >

          <h2 className="font-bold">
            Worker #{worker.id}
          </h2>

          <p>{worker.status}</p>

        </div>

      ))}

    </div>
  );
}