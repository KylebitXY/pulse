const testResults = [

  {
    name: "API Integration",
    status: "PASSED",
  },

  {
    name: "Realtime WebSocket",
    status: "PASSED",
  },

  {
    name: "Queue Stress",
    status: "PASSED",
  },

  {
    name: "Authentication",
    status: "PASSED",
  },

  {
    name: "Backend Recovery",
    status: "PASSED",
  },

];

export function TestResults() {

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-2xl font-bold mb-6">

        System Test Results

      </h2>

      <div className="space-y-4">

        {testResults.map((test) => (

          <div
            key={test.name}
            className="flex justify-between items-center border-b border-zinc-800 pb-3"
          >

            <div>

              {test.name}

            </div>

            <div className="text-green-400 font-bold">

              {test.status}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}