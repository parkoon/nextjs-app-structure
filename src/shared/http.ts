import { FetcherOptions, fetcher } from "@/shared/libs/fetcher";
import { isomorphicCookie } from "@/shared/libs/isomorphic-cookie";
import { cookieKey } from "./config";

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
