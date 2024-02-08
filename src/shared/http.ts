import { FetcherOptions, fetcher } from "@/shared/lib/fetcher";
import { isomorphicCookie } from "@/shared/lib/isomorphic-cookie";
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
    };
  },
};

export const realWorldHttp = fetcher({
  baseUrl: BASE_URL,
  interceptor,
});
