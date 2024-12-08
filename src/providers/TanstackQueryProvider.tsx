"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface TanstackQueryProviderProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

export function TanstackQueryProvider({
  children,
}: TanstackQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
