import { ArticleDto } from "./dto";

export type GetArticlesQueryParams = {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: number;
  offset?: number;
};

export type GetArticlesResponse = {
  articles: ArticleDto[];
  articlesCount: number;
};

export type GetArticleResponse = { article: ArticleDto };

export type ArticleService = {
  getArticles: (
    params?: GetArticlesQueryParams
  ) => Promise<GetArticlesResponse>;
  getArticle: (slug: string) => Promise<GetArticleResponse>;
};
