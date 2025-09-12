"use client";

const queues = [
  {
    name: "email_queue",
    size: 124,
    status: "healthy",
  },
  {
    name: "event_queue",
    size: 642,
    status: "warning",
  },
  {
    name: "webhook_queue",
    size: 44,
    status: "healthy",
  },
];

export function RedisQueueInspector() {

  return (

    <div
      className="
        bg-zinc-950
        border
        border-zinc-800
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
        Redis Queue Inspector
      </h2>

      <div className="space-y-4">

        {queues.map((queue) => (

          <div
            key={queue.name}
            className="
              flex
              justify-between
              items-center
              border
              border-zinc-800
              rounded-2xl
              p-4
            "
          >

            <div>

              <h3 className="font-semibold">
                {queue.name}
              </h3>

              <p className="text-zinc-500">
                Queue Depth: {queue.size}
              </p>

            </div>

            <div
              className={`
                px-3
                py-1
                rounded-full
                text-sm

                ${
                  queue.status === "healthy"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }
              `}
            >
              {queue.status}
            </div>

          </div>

        ))}

      </div>

    </div>

  );
}