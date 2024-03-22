import { getAuthorizationHeader } from "@/entity/session/session.lib";
import { fetcher } from "@/shared/libs/fetcher/fetcher.main";
import { zodContract } from "@/shared/libs/zod/zod.libs";
import { baseUrl } from "../api.libs";
import { ArticleResponseSchema, ArticlesDtoSchema } from "./article.schema";
import { ArticleQueryDto } from "./article.types";

export const getArticles = async (query?: ArticleQueryDto) => {
  const authorizationHeader = await getAuthorizationHeader();
  const res = await fetcher({
    request: {
      method: "GET",
      url: baseUrl("/articles"),
      query,
      headers: { ...authorizationHeader },
    },
    response: { contact: zodContract(ArticlesDtoSchema) },
  });

  return res;
};

export const getArticle = async (slug: string) => {
  const res = await fetcher({
    request: { method: "GET", url: baseUrl(`/articles/${slug}`) },
    response: { contact: zodContract(ArticleResponseSchema) },
  });

  return res;
};

export const likeArticle = async (slug: string) => {
  const authorizationHeader = await getAuthorizationHeader();
  return fetcher({
    request: {
      method: "POST",
      url: baseUrl(`/articles/${slug}/favorite`),
      headers: { ...authorizationHeader },
    },
  });
};

export const unlikeArticle = async (slug: string) => {
  const authorizationHeader = await getAuthorizationHeader();
  return fetcher({
    request: {
      method: "DELETE",
      url: baseUrl(`/articles/${slug}/favorite`),
      headers: { ...authorizationHeader },
    },
  });
};
