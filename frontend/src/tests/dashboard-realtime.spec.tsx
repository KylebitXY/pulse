import {
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  it,
  expect,
} from "vitest";

import DashboardPage
from "../app/dashboard/page";

describe("Dashboard Realtime", () => {

  it("renders realtime dashboard", () => {

    render(<DashboardPage />);

    expect(
      screen.getByText(
        "PulseMesh Control Plane"
      )
    ).toBeInTheDocument();

  });

});