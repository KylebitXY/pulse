import {
  render,
  screen,
} from "@testing-library/react";

import DashboardPage from "../app/dashboard/page";
describe("Dashboard", () => {

  it(
    "renders dashboard title",
    () => {

      render(
        <DashboardPage />
      );

      expect(

        screen.getByText(
          "PulseMesh Control Plane"
        )

      ).toBeInTheDocument();

    }
  );
});