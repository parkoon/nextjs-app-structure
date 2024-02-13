import qs from "querystring";

type RequestInitWithBody = Omit<RequestInit, "body"> & {
  body?: Record<string | number | symbol, unknown>;
};

export type FetcherOptions = {
  baseUrl?: string;
  interceptor?: {
    request?: (init?: RequestInitWithBody) => Promise<RequestInitWithBody>;
    response?: (res: Response) => Response | void;
  };
  headers?: HeadersInit;
};

type RequestInitWithQueryParams = RequestInitWithBody & {
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

    const body = init?.body ? JSON.stringify(init.body) : null;

    const res = await fetch(url, {
      ...updatedInit,
      headers: {
        ...updatedInit?.headers,
        ...(body && { "Content-Type": "application/json" }),
        ...headers,
      },
      body,
    });

    if (!res.ok) {
      throw new Error("에러정보");
    }

    return interceptor?.response?.(res) || res;
  };
};
