import {
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  it,
  expect,
} from "vitest";

import { QueueChart }
from "../components/charts/queue-chart";

describe("QueueChart", () => {

  it("renders chart container", () => {

    render(<QueueChart />);

    expect(
      screen.getByText("Queue Metrics")
    ).toBeInTheDocument();

  });

});