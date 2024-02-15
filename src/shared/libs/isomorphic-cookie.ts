import { getCookie, setCookie } from "cookies-next";

export const isomorphicCookie = () => {
  const isServer = typeof window === "undefined";

  const get = async (name: string) => {
    if (isServer) {
      const { cookies: serverCookies } = await import("next/headers");

      return serverCookies().get(name as string)?.value;
    }
    return getCookie(name as string)?.toString();
  };

  const set = async (name: string, value: unknown) => {
    const v = JSON.stringify(value);
    if (isServer) {
      const { cookies: serverCookies } = await import("next/headers");

      return serverCookies().set(name, v);
    }
    return setCookie(name, v);
  };

  return { get, set };
};
