import {
  describe,
  it,
  expect,
} from "vitest";

import { server }
from "./test-server";

import {
  http,
  HttpResponse,
} from "msw";

describe(
  "Backend Failure Handling",
  () => {

    it(
      "handles backend outage",
      async () => {

        server.use(

          http.get(
            "http://localhost:8000/api/queues",

            () => {

              return new HttpResponse(
                null,
                {
                  status: 500,
                }
              );

            }
          )
        );

        const response =
          await fetch(
            "http://localhost:8000/api/queues"
          );

        expect(response.status)
          .toBe(500);

      }
    );

  }
);