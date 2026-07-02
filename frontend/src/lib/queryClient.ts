import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes stale time
      gcTime: 1000 * 60 * 10,   // 10 minutes cache garbage collection time
      refetchOnWindowFocus: false, // Prevents aggressive refetching on window focus
      retry: 1,                // Retry failed requests once before showing error
    },
  },
});
