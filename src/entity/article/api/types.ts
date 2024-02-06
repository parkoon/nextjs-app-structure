export type GetArticlesQueryParams = {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: number;
  offset?: number;
};

export type ArticleService = {
  getArticles: (params?: GetArticlesQueryParams) => any;
};
