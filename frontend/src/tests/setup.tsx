import "@testing-library/jest-dom";
import { afterAll, afterEach, beforeAll, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import { server } from "./test-server";

beforeAll(() => server.listen());

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => server.close());

global.ResizeObserver = class {

  observe() {}

  unobserve() {}

  disconnect() {}

};

vi.mock("recharts", async () => {

  const actual =
    await vi.importActual<any>("recharts");

  return {

    ...actual,

    ResponsiveContainer: ({ children }: any) => (
      <div style={{ width: 800, height: 400 }}>
        {children}
      </div>
    ),

  };

});