import {
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  expect,
  it,
} from "vitest";

function FakeProtectedPage() {

  const authenticated = false;

  if (!authenticated) {

    return <div>Unauthorized</div>;

  }

  return <div>Dashboard</div>;

}

describe(
  "Auth Guards",
  () => {

    it(
      "blocks unauthorized users",
      () => {

        render(
          <FakeProtectedPage />
        );

        expect(
          screen.getByText(
            "Unauthorized"
          )
        ).toBeInTheDocument();

      }
    );

  }
);