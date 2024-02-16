import { ParsedUrlQueryInput } from "querystring";
import { httpError, internalError, networkError } from "./fetch.exceptions";
import { formatUrl } from "./fetch.libs";
import { HttpMethod, RequestBody } from "./fetch.types";
import { ZodType } from "zod";

type APIRequest = {
  method: HttpMethod;
  body?: RequestBody;
  headers?: HeadersInit;
  query?: ParsedUrlQueryInput;
  url: string;
};

type APIResponse<T> = {
  contact?: T;
  map?: any;
};

type APIConfig<T> = {
  request: APIRequest;
  response?: APIResponse<T>;
  abort?: AbortSignal;
};

export function zodContract<T>(data: ZodType<T>) {
  const isData = (prepared: unknown): prepared is T =>
    data.safeParse(prepared).success;

  return {
    isData,
    getErrorMessages(raw: T) {
      const validation = data.safeParse(raw);
      if (validation.success) {
        return [];
      }

      return validation.error.errors.map((e) => {
        const path = e.path.join(".");
        return path !== "" ? `${e.message}, path: ${path}` : e.message;
      });
    },
  };
}

export const fetcher = async <T>(config: APIConfig<T>) => {
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

  const a = zodContract(config.response?.contact as any);

  if (!a.isData(data)) {
    throw { message: "is data false" };
  }

  return data;
};
