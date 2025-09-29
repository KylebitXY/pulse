import {
  describe,
  expect,
  it,
} from "vitest";

describe(
  "API Integration",
  () => {

    it(
      "connects to backend health endpoint",
      async () => {

        const response =
          await fetch(
            "http://localhost:8000/health"
          );

        expect(
          response.status
        ).toBe(200);

        const data =
          await response.json();

        expect(
          data.status
        ).toBe("ok");

      }
    );

  }
);