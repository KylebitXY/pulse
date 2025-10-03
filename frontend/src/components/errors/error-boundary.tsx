"use client";

import {
  ErrorBoundary,
} from "react-error-boundary";

function ErrorFallback() {

  return (
    <div className="p-6">

      Something went wrong.

    </div>
  );
}

export function AppErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ErrorBoundary
      fallback={<ErrorFallback />}
    >
      {children}
    </ErrorBoundary>
  );
}