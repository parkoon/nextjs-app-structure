import { FeedDto } from "@/shared/api/types";
import { realWorldHttp } from "../http";

export type GetArticlesQueryParams = {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: number;
  offset?: number;
};

export type ArticleService = {
  getArticles: (params?: GetArticlesQueryParams) => Promise<FeedDto>;
};

const ENDPOINT = "/api/articles";
export const articleService: ArticleService = {
  getArticles: async (query) => {
    const res = await realWorldHttp(ENDPOINT, { query });
    return res.json();
  },
};
