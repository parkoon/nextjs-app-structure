import { realWorldHttp } from "@/shared/http";
import { ArticleService } from "./types";

const ENDPOINT = "/api/articles";
export const articleService: ArticleService = {
  getArticles: async (query) => {
    const res = await realWorldHttp(ENDPOINT, { query });
    return res.json();
  },
  getArticle: async (slug) => {
    const res = await realWorldHttp(`${ENDPOINT}/${slug}`);
    return res.json();
  },
};