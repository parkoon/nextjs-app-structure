export const sessionQueryKey = {
  root: () => ["session"],
  register: () => [...sessionQueryKey.root(), "register"] as const,
};
