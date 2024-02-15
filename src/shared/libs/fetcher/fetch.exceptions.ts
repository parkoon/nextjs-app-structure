import {
  CommonError,
  HTTP,
  HttpError,
  INTERNAL,
  InternalError,
  NETWORK,
  NetworkError,
} from "./fetch.types";

/**
 * @see https://web.dev/articles/fetch-api-error-handling?hl=ko
 */

export const networkError = (
  config: Pick<NetworkError, "cause" | "reason">
): NetworkError => {
  return {
    ...config,
    message: "Request was failed due to network problems",
    errorType: NETWORK,
  };
};

export const httpError = (
  config: Pick<HttpError, "statusText" | "status" | "response">
): HttpError => {
  return {
    ...config,
    errorType: HTTP,
    message: "Request was finished with unsuccessful HTTP code",
  };
};

export const internalError = (
  config: Pick<InternalError, "reason" | "response">
): InternalError => {
  return {
    ...config,
    errorType: INTERNAL,
    message: "Extraction of data from the response was failed",
  };
};

export const isNetworkError = (err: any): err is NetworkError =>
  err.errorType === NETWORK;

export const isHttpError = (err: any): err is HttpError =>
  err?.errorType === HTTP;

export const isInternalError = (error: any): error is InternalError =>
  error?.errorType === INTERNAL;
