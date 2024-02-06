import { FetcherOptions, fetcher } from "@/shared/lib/fetcher";
import { getIsomorphicCookie } from "@/shared/lib/isomorphic-cookie";
import { cookieKey } from "./config";

const BASE_URL = "https://api.realworld.io";

const interceptor: FetcherOptions["interceptor"] = {
  request: async (init) => {
    const authorization = await getIsomorphicCookie(cookieKey.token);

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
