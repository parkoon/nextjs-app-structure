import { useEffect } from "react";

import { DefaultError, InfiniteData, QueryKey } from "@tanstack/query-core";
import {
  UndefinedInitialDataInfiniteOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

function useInfiniteQueryInView<
  TQueryFnData,
  TError = DefaultError,
  TData = InfiniteData<TQueryFnData>,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = unknown
>(
  options: UndefinedInitialDataInfiniteOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryKey,
    TPageParam
  >
) {
  const query = useInfiniteQuery(options);

  const { inView, ref } = useInView();

  const showRef = query.status === "pending" || !query.hasNextPage;

  useEffect(() => {
    if (inView) {
      query.fetchNextPage();
    }
  }, [inView]);

  const Trigger = () => {
    if (query.status === "pending" || !query.hasNextPage) return null;

    return <div ref={ref}>Im trigger</div>;
  };

  return {
    ...query,
    ref,
  };
}

export default useInfiniteQueryInView;
