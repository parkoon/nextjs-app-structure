import { fetcher } from "@/shared/libs/fetcher/fetcher.main";
import { zodContract } from "@/shared/libs/zod/zod.libs";
import { ArticleResponseSchema, ArticlesDtoSchema } from "./article.schema";
import { ArticleQueryDto } from "./article.types";
import { baseUrl } from "../api.libs";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export const getArticles = async (query?: ArticleQueryDto) => {
  const res = await fetcher({
    request: { method: "GET", url: baseUrl("/articles"), query },
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
  try {
    const session = await getSession();

    console.log("session", session);
  } catch (err) {
    console.log(err);
  }

  return fetcher({
    request: { method: "POST", url: baseUrl(`/articles/${slug}/favorite`) },
  });
};
