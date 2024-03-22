import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { getArticles, likeArticle, unlikeArticle } from "./article.api";
import { articleQueryKey } from "./article.query-key";
import useInfiniteQueryInView from "@/shared/hooks/useInfiniteQueryInView";

export const likeArticleMutation = () =>
  useMutation({ mutationFn: (slug: string) => likeArticle(slug) });

export const unlikeArticleMutation = () =>
  useMutation({ mutationFn: (slug: string) => unlikeArticle(slug) });

export const useInfiniteArticlesQuery = () => {
  return useInfiniteQueryInView({
    queryKey: articleQueryKey.infinite(),
    queryFn: ({ pageParam }) => {
      return getArticles(pageParam);
    },
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      if (lastPage.articles.length < lastPageParam.limit) {
        return null;
      }

      return {
        limit: lastPageParam.limit,
        offset: pages.length * lastPageParam.limit,
      };
    },
    initialPageParam: { limit: 10, offset: 10 },
  });
};
