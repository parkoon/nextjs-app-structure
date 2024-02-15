import { fetcher } from "@/shared/libs/fetcher2";
import { isomorphicCookie } from "@/shared/libs/isomorphic-cookie";
import { cookieKey } from "./config";
import { FetcherOptions } from "./libs/fetcher2";

const BASE_URL = "https://api.realworld.io";

const interceptor: FetcherOptions["interceptor"] = {
  request: async (init) => {
    const authorization = await isomorphicCookie().get(cookieKey.token);

    return {
      ...init,
      ...(authorization && {
        headers: { ...init?.headers, Authorization: `Bearer ${authorization}` },
      }),
    } as RequestInit;
  },
};

export const realWorldHttp = fetcher({
  baseUrl: BASE_URL,
  interceptor,
});
