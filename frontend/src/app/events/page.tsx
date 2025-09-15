import { Sidebar } from "@/components/sidebar/sidebar";

import { EventStream } from "@/modules/events/event-stream";

export default function EventsPage() {

  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <h1 className="text-3xl mb-6">
          Event Stream
        </h1>

        <EventStream />

      </div>

    </div>
  );
}