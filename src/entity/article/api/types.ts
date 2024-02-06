export type GetArticlesQueryParams = {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: number;
  offset?: number;
};

export type ArticleServiceType = {
  getArticles: (params?: GetArticlesQueryParams) => any;
};
