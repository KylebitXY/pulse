import {
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  expect,
  it,
} from "vitest";

import {
  NotificationStream,
} from "../components/realtime/notification-stream";

describe(
  "Notification Stream",
  () => {

    it(
      "renders notifications panel",
      () => {

        render(
          <NotificationStream />
        );

        expect(
          screen.getByText(
            "Notifications"
          )
        ).toBeInTheDocument();

        expect(
          screen.getByText(
            "Worker connected"
          )
        ).toBeInTheDocument();

      }
    );

  }
);