export function AuditTable() {

  const logs = [
    {
      action: "USER_LOGIN",
      actor: "admin",
    },
    {
      action: "QUEUE_CREATED",
      actor: "system",
    },
  ];

  return (
    <table className="w-full">

      <thead>

        <tr>

          <th className="text-left">
            Action
          </th>

          <th className="text-left">
            Actor
          </th>

        </tr>

      </thead>

      <tbody>

        {logs.map((log, i) => (

          <tr key={i}>

            <td>{log.action}</td>

            <td>{log.actor}</td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}