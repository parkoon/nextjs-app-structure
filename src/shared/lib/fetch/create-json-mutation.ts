import { Contract } from "../zod";
import { createApiRequest } from "./create-api-request";
import { invalidDataError } from "./fetch.errors";
import { FetchApiRecord, RequestBody } from "./fetch.types";

interface JsonMutationConfig {
  url: string;
  method: "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: FetchApiRecord;
  query?: FetchApiRecord;
  body?: RequestBody;
}

export async function createJsonMutation<
  Response,
  ContractData extends Response,
  MappedData
>(config: {
  request: JsonMutationConfig;
  response: {
    contract: Contract<Response, ContractData>;
    mapData: (data: Response) => MappedData;
  };
  abort?: AbortSignal;
}): Promise<MappedData>;

export async function createJsonMutation<
  Response,
  ContractData extends Response
>(config: {
  request: JsonMutationConfig;
  response: {
    contract: Contract<Response, ContractData>;
  };
  abort?: AbortSignal;
}): Promise<ContractData>;

export async function createJsonMutation<Response, MappedData>(config: {
  request: JsonMutationConfig;
  response: {
    mapData: (data: Response) => MappedData;
  };
  abort?: AbortSignal;
}): Promise<MappedData>;

export async function createJsonMutation<Response, MappedData>(config: {
  request: JsonMutationConfig;
  abort?: AbortSignal;
}): Promise<unknown>;

export async function createJsonMutation<
  Response,
  ContractData extends Response,
  MappedData
>(config: {
  request: JsonMutationConfig;
  response?: {
    contract?: Contract<Response, ContractData>;
    mapData?: (data: Response) => MappedData;
  };
  abort?: AbortSignal;
}) {
  const data = await createApiRequest({
    request: config.request,
    abort: config.abort,
  });

  if (config.response?.contract && !config.response.contract.isData(data)) {
    throw invalidDataError({
      validationErrors: config.response.contract.getErrorMessages(data),
      response: data,
    });
  }

  return config.response?.mapData ? config.response.mapData(data) : data;
}
