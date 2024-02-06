import { realWorldHttp } from "@/shared/http";
import { ArticleServiceType } from "./types";

const ENDPOINT = "/api/articles";
export const ArticleService: ArticleServiceType = {
  getArticles: async (query) => {
    const res = await realWorldHttp(ENDPOINT, { query });
    return res.json();
  },
};
