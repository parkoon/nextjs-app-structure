import { ProfileModel } from "@/entity/profile/@x/article";
import { ArticleModel } from "../model";

export type GetArticlesQueryParams = {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: number;
  offset?: number;
};

export type GetARticlesResponse = {
  articles: ArticleModel[];
  articlesCount: number;
};

export type ArticleService = {
  getArticles: (
    params?: GetArticlesQueryParams
  ) => Promise<GetARticlesResponse>;
};
