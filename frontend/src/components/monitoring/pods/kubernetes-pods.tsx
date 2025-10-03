"use client";

const pods = [
  {
    name: "pulsemesh-api-01",
    cpu: "45%",
    memory: "512MB",
  },
  {
    name: "pulsemesh-worker-02",
    cpu: "72%",
    memory: "1.1GB",
  },
  {
    name: "pulsemesh-scheduler",
    cpu: "12%",
    memory: "210MB",
  },
];

export function KubernetesPods() {

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
        Kubernetes Pods
      </h2>

      <div className="space-y-4">

        {pods.map((pod) => (

          <div
            key={pod.name}
            className="
              border
              border-zinc-800
              rounded-2xl
              p-4
            "
          >

            <h3 className="font-bold">
              {pod.name}
            </h3>

            <div
              className="
                flex
                gap-6
                mt-2
                text-zinc-400
              "
            >

              <span>
                CPU: {pod.cpu}
              </span>

              <span>
                RAM: {pod.memory}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}