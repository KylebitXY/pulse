export function PodsTable({
  pods,
}: any) {

  return (

    <div className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-3xl
      p-6
    ">

      <h2 className="text-3xl font-bold mb-6">
        Kubernetes Pods
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left text-zinc-400">

            <th>Name</th>
            <th>CPU</th>
            <th>Memory</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {pods.map((pod: any) => (

            <tr
              key={pod.name}
              className="border-t border-zinc-800"
            >

              <td className="py-4">
                {pod.name}
              </td>

              <td>{pod.cpu}%</td>

              <td>{pod.memory}%</td>

              <td>{pod.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}