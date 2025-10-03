"use client";

import {
  Bell,
  Command,
  Search,
  Activity,
} from "lucide-react";

export function Topbar() {

  return (

    <header
      className="
        h-20
        border-b
        border-zinc-800
        bg-black/60
        backdrop-blur-xl
        flex
        items-center
        justify-between
        px-8
        sticky
        top-0
        z-50
      "
    >

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            items-center
            gap-2
            bg-emerald-500/10
            text-emerald-400
            px-4
            py-2
            rounded-full
            border
            border-emerald-500/20
            text-sm
          "
        >

          <Activity size={15} />

          All Systems Operational

        </div>

      </div>

      <div className="flex items-center gap-4">

        <div
          className="
            hidden
            md:flex
            items-center
            gap-3
            px-4
            h-12
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-950
            text-zinc-400
            min-w-[300px]
          "
        >

          <Search size={18} />

          <input
            placeholder="Search infrastructure..."
            className="
              bg-transparent
              outline-none
              w-full
            "
          />

        </div>

        <button
          className="
            h-12
            w-12
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-950
            flex
            items-center
            justify-center
            hover:bg-zinc-900
          "
        >

          <Command size={18} />

        </button>

        <button
          className="
            h-12
            w-12
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-950
            flex
            items-center
            justify-center
            hover:bg-zinc-900
            relative
          "
        >

          <Bell size={18} />

          <span
            className="
              absolute
              top-2
              right-2
              h-2
              w-2
              rounded-full
              bg-red-500
            "
          />

        </button>

      </div>

    </header>
  );
}