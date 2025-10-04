import { setupServer }
from "msw/node";

import {
  http,
  HttpResponse,
} from "msw";

export const handlers = [

  http.get(
    "http://localhost:8000/health",
    () => {

      return HttpResponse.json(
        {
          status: "ok",
        },
        {
          status: 200,
        }
      );

    }
  ),

  http.get(
    "http://localhost:8000/api/metrics",
    () => {

      return HttpResponse.json(
        {
          workers: 8,
          queue: 120,
        },
        {
          status: 200,
        }
      );

    }
  ),
  http.get(
  "http://localhost:8000/health",
  () => {

    return HttpResponse.json({
      status: "ok",
    });

  }
),

];

export const server =
  setupServer(
    ...handlers
  );