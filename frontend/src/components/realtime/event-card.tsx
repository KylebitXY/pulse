export function EventCard({
  event,
}: {
  event: string;
}) {

  return (

    <div className="border border-zinc-800 rounded-xl p-4 bg-zinc-950">

      {event}

    </div>
  );
}