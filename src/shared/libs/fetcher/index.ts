import { ParsedUrlQueryInput } from "querystring";
import { httpError, internalError, networkError } from "./fetch.exceptions";
import { formatUrl } from "./fetch.libs";
import { HttpMethod, RequestBody } from "./fetch.types";

type APIRequest = {
  method: HttpMethod;
  body?: RequestBody;
  headers?: HeadersInit;
  query?: ParsedUrlQueryInput;
  url: string;
};

type APIConfig = {
  request: APIRequest;
  abort?: AbortSignal;
};

export async function fetcher(config: APIConfig) {
  const response = await fetch(
    formatUrl({ href: config.request.url, query: config.request.query }),
    {
      method: config.request.method,
      headers: {
        ...(typeof config.request.body === "string" && {
          "Content-type": "application/json",
        }),
        ...(config?.request.headers || {}),
      },
      body: config.request?.body,
      signal: config?.abort,
    }
  ).catch((err) => {
    throw networkError({ cause: err, reason: err?.message ?? null });
  });

  if (!response.ok) {
    throw httpError({
      status: response.status,
      statusText: response.statusText,
      response: (await response.text().catch(() => null)) || null,
    });
  }

  const clonedResponse = response.clone();

  const data = !response.body
    ? null
    : await response.json().catch(async (err) => {
        throw internalError({
          reason: err.message || null,
          response: await clonedResponse.text(),
        });
      });

  return data;
}
