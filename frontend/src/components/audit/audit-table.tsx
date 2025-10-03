export function AuditTable() {

  const logs = [
    {
      action: "USER_LOGIN",
      actor: "admin",
      time: "2026-05-17",
    },
    {
      action: "QUEUE_CREATED",
      actor: "system",
      time: "2026-05-17",
    },
    {
      action: "WORKER_STARTED",
      actor: "worker-cluster",
      time: "2026-05-17",
    },
  ];

  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden">

      <table className="w-full">

        <thead className="bg-zinc-900">

          <tr>

            <th className="text-left p-4">
              Action
            </th>

            <th className="text-left p-4">
              Actor
            </th>

            <th className="text-left p-4">
              Time
            </th>

          </tr>

        </thead>

        <tbody>

          {logs.map((log, index) => (

            <tr
              key={index}
              className="border-t border-zinc-800"
            >

              <td className="p-4">
                {log.action}
              </td>

              <td className="p-4">
                {log.actor}
              </td>

              <td className="p-4">
                {log.time}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}