"use client";

import { useTheme }
from "next-themes";

export function ThemeToggle() {

  const {
    theme,
    setTheme,
  } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="border p-2 rounded"
    >
      Toggle Theme
    </button>
  );
}