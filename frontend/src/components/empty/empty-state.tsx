export function EmptyState({
  title,
}: {
  title: string;
}) {

  return (

    <div className="border border-dashed border-zinc-700 rounded-2xl p-12 text-center">

      <h2 className="text-xl text-zinc-400">

        {title}

      </h2>

    </div>
  );
}