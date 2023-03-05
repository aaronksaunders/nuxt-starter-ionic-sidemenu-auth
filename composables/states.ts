export const useAuth = () =>
  useState<{ user: string; id: string } | null>("auth", () => null);
