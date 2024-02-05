import { getCookie, setCookie } from "cookies-next";

export const getIsomorphicCookie = async (name: string) => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    const { cookies: serverCookies } = await import("next/headers");

    return serverCookies().get(name as string)?.value;
  }
  return getCookie(name as string)?.toString();
};

export const setIsomorphicCookie = async (name: string, value: unknown) => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    const { cookies: serverCookies } = await import("next/headers");

    return serverCookies().set(name, JSON.stringify(value));
  }
  return setCookie(name, JSON.stringify(value));
};
