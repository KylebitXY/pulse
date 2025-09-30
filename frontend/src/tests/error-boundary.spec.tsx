import React from "react";

import {
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  it,
  expect,
} from "vitest";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {

  constructor(props: any) {

    super(props);

    this.state = {
      hasError: false,
    };

  }

  static getDerivedStateFromError() {

    return {
      hasError: true,
    };

  }

  render() {

    if (this.state.hasError) {

      return (
        <div>
          System Failure
        </div>
      );

    }

    return this.props.children;

  }

}

function BrokenComponent() {

  throw new Error("Crash");

}

describe("ErrorBoundary", () => {

  it("catches runtime crashes", () => {

    render(

      <ErrorBoundary>

        <BrokenComponent />

      </ErrorBoundary>

    );

    expect(
      screen.getByText(
        "System Failure"
      )
    ).toBeInTheDocument();

  });

});