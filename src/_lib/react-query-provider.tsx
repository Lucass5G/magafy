"use client";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {type PropsWithChildren, useState} from "react";

function makeQueryClient() {
  return new QueryClient();
}

export function ReactQueryProvider({ children }: Readonly<PropsWithChildren>) {
  const [queryClient] = useState(() => makeQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
