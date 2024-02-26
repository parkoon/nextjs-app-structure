import { ParsedUrlQueryInput } from "querystring";
import { httpError, internalError, networkError } from "./fetcher.exceptions";
import { formatUrl } from "./fetcher.libs";
import { Contract, HttpMethod, RequestBody } from "./fetcher.types";

type APIRequest = {
  method: HttpMethod;
  body?: RequestBody;
  headers?: HeadersInit;
  query?: ParsedUrlQueryInput;
  url: string;
};

export async function fetcher<ContractData, MappedData>(config: {
  request: APIRequest;
  response: {
    map: (data: ContractData) => MappedData;
    contact: Contract<ContractData>;
  };
  abort?: AbortSignal;
}): Promise<MappedData>;

export async function fetcher<ContractData, MappedData>(config: {
  request: APIRequest;
  response: {
    map: (data: ContractData) => MappedData;
  };
  abort?: AbortSignal;
}): Promise<MappedData>;

export async function fetcher<ContractData>(config: {
  request: APIRequest;
  response: {
    contact: Contract<ContractData>;
  };
  abort?: AbortSignal;
}): Promise<ContractData>;

export async function fetcher(config: {
  request: APIRequest;
  abort?: AbortSignal;
}): Promise<unknown>;

export async function fetcher<ContractData, MappedData>(config: {
  request: APIRequest;
  response?: {
    contact?: Contract<ContractData>;
    map?: (data: ContractData) => MappedData;
  };
  abort?: AbortSignal;
}) {
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

  return config?.response?.map ? config?.response?.map(data) : data;
}
