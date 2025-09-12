import { Sidebar } from "@/components/sidebar/sidebar";
import { QueueView } from "@/modules/queues/queue-view";

export default function QueuePage() {

  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <h1 className="text-3xl mb-6">
          Queue Monitor
        </h1>

        <QueueView />

      </div>

    </div>
  );
}