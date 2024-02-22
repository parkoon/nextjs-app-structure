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

type APIResponse<ContractData, MappedData> = {
  contact: Contract<ContractData>;
  map: (data: ContractData) => MappedData;
};

type APIConfig<ContractData, MappedData> = {
  request: APIRequest;
  response: APIResponse<ContractData, MappedData>;
  abort?: AbortSignal;
};

export type Contract<T> = {
  isData: (prepared: T) => boolean;
  getErrorMessages: (raw: T) => string[];
};

export function zodContract<T>(data: ZodType<T>): Contract<T> {
  const isData = (prepared: T) => data.safeParse(prepared).success;

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

export const fetcher = async <ContractData, MappedData>(
  config: APIConfig<ContractData, MappedData>
) => {
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

  if (config.response?.contact && !config.response?.contact.isData(data)) {
    throw {
      validationErrors: config.response.contact.getErrorMessages(data),
      response: data,
    };
  }

  return config.response.map(data);
};
