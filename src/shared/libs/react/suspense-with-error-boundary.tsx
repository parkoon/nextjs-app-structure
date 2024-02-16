"use client";

import {
  ErrorBoundary,
  ErrorComponent,
} from "next/dist/client/components/error-boundary";
import React, { Suspense, useEffect } from "react";

/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#seo
 *
 * - Next.js will wait for data fetching inside generateMetadata to complete before streaming UI to the client. This guarantees the first part of a streamed response includes <head> tags.
 * - Since streaming is server-rendered, it does not impact SEO. You can use the Rich Results Test tool from Google to see how your page appears to Google's web crawlers and view the serialized HTML
 */
type SuspenseWithErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  errorComponent?: ErrorComponent;
};

const SuspenseWithErrorBoundary = ({
  children,
  errorComponent = ErrorFallback,
  fallback = SuspenseFallback,
}: SuspenseWithErrorBoundaryProps) => {
  return (
    <ErrorBoundary errorComponent={errorComponent || ErrorFallback}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

const SuspenseFallback = <div>...loading</div>;

const ErrorFallback: ErrorComponent = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};

export default SuspenseWithErrorBoundary;
