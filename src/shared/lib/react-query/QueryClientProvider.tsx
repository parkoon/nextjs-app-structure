"use client";
import { QueryClientProvider as TanStackQueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { useState } from "react";

type QueryClientProviderProps = {
  children: React.ReactNode;
};

export function QueryClientProvider({ children }: QueryClientProviderProps) {
  const [client] = useState(queryClient);

  return (
    <TanStackQueryClientProvider client={client}>
      {children}
    </TanStackQueryClientProvider>
  );
}
