type Props = {

  title: string;

  value: string | number;

  status?: string;

};

export function StatusCard({

  title,

  value,

  status,

}: Props) {

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

      <div className="text-zinc-400 text-sm mb-2">

        {title}

      </div>

      <div className="text-3xl font-bold text-white">

        {value}

      </div>

      {status && (

        <div className="mt-3 text-green-400 text-sm">

          {status}

        </div>

      )}

    </div>
  );
}