"use client";

import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import React, { Suspense } from "react";

type Props = { children: React.ReactNode };

const Exception = ({ children }: Props) => {
  return (
    <ErrorBoundary errorComponent={(err) => <div>{JSON.stringify(err)}</div>}>
      <Suspense>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default Exception;
