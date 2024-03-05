import { fetcher } from "@/shared/libs/fetcher/fetcher.main";
import { zodContract } from "@/shared/libs/zod/zod.libs";
import { ArticleResponseSchema, ArticlesDtoSchema } from "./article.schema";
import { ArticleQueryDto } from "./article.types";
import { realWorldPath } from "../api.libs";

export const getArticles = async (query?: ArticleQueryDto) => {
  const res = await fetcher({
    request: { method: "GET", url: realWorldPath("/articles"), query },
    response: { contact: zodContract(ArticlesDtoSchema) },
  });

  return res;
};

export const getArticle = async (slug: string) => {
  const res = await fetcher({
    request: { method: "GET", url: realWorldPath(`/articles/${slug}`) },
    response: { contact: zodContract(ArticleResponseSchema) },
  });

  return res;
};
