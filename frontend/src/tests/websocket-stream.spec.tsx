import {
  render,
  act,
} from "@testing-library/react";

import {
  describe,
  it,
  expect,
  vi,
  afterEach,
} from "vitest";

import { LiveFeed }
from "../components/realtime/live-feed";

describe("Realtime WebSocket Feed", () => {

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders websocket container", async () => {

    vi.useFakeTimers();

    render(<LiveFeed />);

    await act(async () => {

      vi.advanceTimersByTime(3000);

    });

    expect(
      document.body.innerHTML
    ).toContain(
      "Worker heartbeat"
    );

  });

});