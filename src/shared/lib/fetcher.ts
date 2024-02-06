import qs from "querystring";

export type FetcherOptions = {
  baseUrl?: string;
  interceptor?: {
    request?: (init?: RequestInit) => Promise<RequestInit>;
    response?: (res: Response) => Response | void;
  };
  headers?: HeadersInit;
};

type RequestInitWithQueryParams = RequestInit & {
  query?: qs.ParsedUrlQueryInput;
};

export const fetcher = ({
  baseUrl = "",
  headers,
  interceptor,
}: FetcherOptions) => {
  return async (
    input: string | URL | globalThis.Request,
    init?: RequestInitWithQueryParams
  ) => {
    const url = `${baseUrl}${input}${
      init?.query ? `?${qs.stringify(init.query)}` : ""
    }`;

    let updatedInit = { ...init };
    if (interceptor?.request) {
      updatedInit = await interceptor.request(init);
    }

    const res = await fetch(url, {
      ...updatedInit,
      headers: {
        ...updatedInit?.headers,
        ...headers,
      },
    });

    if (!res.ok) {
      throw new Error("에러정보");
    }

    return interceptor?.response?.(res) || res;
  };
};
