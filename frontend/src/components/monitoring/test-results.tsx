"use client";

const tests = [
  {
    name: "Redis Queue Stress",
    status: "PASS",
  },
  {
    name: "WebSocket Stream",
    status: "PASS",
  },
  {
    name: "Chaos Injection",
    status: "RUNNING",
  },
  {
    name: "Kubernetes Recovery",
    status: "PASS",
  },
];

export function TestResults() {

  return (

    <div className="
      bg-zinc-950/80
      border
      border-zinc-800
      rounded-3xl
      p-8
    ">

      <h2 className="
        text-3xl
        font-bold
        mb-8
      ">

        System Validation

      </h2>

      <div className="space-y-5">

        {tests.map((test) => (

          <div
            key={test.name}
            className="
              flex
              items-center
              justify-between
              border-b
              border-zinc-800
              pb-4
            "
          >

            <div>{test.name}</div>

            <div className="
              text-green-400
              font-bold
            ">

              {test.status}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}