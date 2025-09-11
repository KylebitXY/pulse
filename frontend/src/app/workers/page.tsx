import { Sidebar } from "@/components/sidebar/sidebar";
import { WorkerGrid } from "@/modules/workers/worker-grid";

export default function WorkersPage() {

  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <h1 className="text-3xl mb-6">
          Worker Cluster
        </h1>

        <WorkerGrid />

      </div>

    </div>
  );
}