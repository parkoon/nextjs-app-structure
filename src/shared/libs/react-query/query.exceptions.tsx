import {
  isHttpError,
  isInternalError,
  isNetworkError,
} from "../fetcher/fetcher.exceptions";
import {
  HttpError,
  InternalError,
  NetworkError,
} from "../fetcher/fetcher.types";

type MutationErrorCallback = {
  onNetworkError?(err: NetworkError): void;
  onHttpError?(err: HttpError): void;
  onInternalError?(err: InternalError): void;
};
export const mutationErrorHandler = (callback?: MutationErrorCallback) => {
  return (err: any) => {
    if (isNetworkError(err)) {
      alert("network error");
      callback?.onNetworkError?.(err);
    }
    if (isHttpError(err)) {
      callback?.onHttpError?.(err);
    }
    if (isInternalError(err)) {
      alert("internal error");
      callback?.onInternalError?.(err);
    }
  };
};
