import { nextAuthOptions } from "@/shared/libs/next-auth";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

export const getAuthorizationHeader = async () => {
  const isServer = typeof window === "undefined";

  const session = isServer
    ? await getServerSession(nextAuthOptions)
    : await getSession();

  if (!session) return null;

  return { Authorization: `Bearer ${session.user.token}` };
};
