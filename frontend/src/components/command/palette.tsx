"use client";

import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
} from "cmdk";

export function CommandPalette() {

  return (
    <div className="border rounded-xl p-3">

      <Command>

        <CommandInput
          placeholder="Search actions..."
        />

        <CommandList>

          <CommandItem>
            Open Dashboard
          </CommandItem>

          <CommandItem>
            View Workers
          </CommandItem>

          <CommandItem>
            Queue Analytics
          </CommandItem>

        </CommandList>

      </Command>

    </div>
  );
}