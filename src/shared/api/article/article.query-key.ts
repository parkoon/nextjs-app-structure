export const articleQueryKey = {
  root: () => ["article"] as const,
  infinite: () => [...articleQueryKey.root(), "infinite"] as const,
} as const;
