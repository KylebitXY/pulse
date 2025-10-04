import {
  describe,
  expect,
  it,
  vi,
} from "vitest";

import {
  render,
  screen,
} from "@testing-library/react";

import { Sidebar }
from "@/components/sidebar/sidebar";

vi.mock(
  "next/navigation",
  () => ({
    usePathname: () => "/dashboard",
  })
);

describe(
  "Sidebar",
  () => {

    it(
      "renders navigation items",
      () => {

        render(
          <Sidebar />
        );

        expect(
          screen.getByText(
            "Dashboard"
          )
        ).toBeInTheDocument();

        expect(
          screen.getByText(
            "Realtime"
          )
        ).toBeInTheDocument();

        expect(
          screen.getByText(
            "Workers"
          )
        ).toBeInTheDocument();

      }
    );

    it(
      "renders notification badge",
      () => {

        render(
          <Sidebar />
        );

        expect(
          screen.getByText("14")
        ).toBeInTheDocument();

      }
    );

  }
);