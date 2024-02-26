export type HttpMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "QUERY"
  | "OPTIONS";

export type RequestBody = Blob | BufferSource | FormData | string;

export type CommonError<T extends string> = {
  errorType: T;
  message: string;
};

export const HTTP = "HTTP";
export type HttpError = {
  status: number;
  statusText: string;
  response: string | null;
} & CommonError<typeof HTTP>;

export const NETWORK = "NETWORK";
export type NetworkError = {
  reason: string | null;
  cause: unknown;
} & CommonError<typeof NETWORK>;

export const INTERNAL = "INTERNAL";
export type InternalError = {
  response: string;
  reason: string | null;
} & CommonError<typeof INTERNAL>;

export type Contract<T> = {
  isData: (prepared: T) => boolean;
  getErrorMessages: (raw: T) => string[];
};
