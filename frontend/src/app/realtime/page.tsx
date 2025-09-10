import { Sidebar } from "@/components/sidebar/sidebar";

export default function RealtimePage() {

  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <h1 className="text-3xl font-bold mb-6">
          Realtime Activity
        </h1>

        <div className="border border-zinc-800 rounded-xl p-6">

          WebSocket Infrastructure Active

        </div>

      </div>

    </div>
  );
}