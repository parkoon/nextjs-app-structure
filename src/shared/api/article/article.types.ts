import { z } from "zod";
import {
  ArticleDtoSchema,
  ArticleQueryDtoSchema,
  ArticleResponseSchema,
  ArticlesDtoSchema,
} from "./article.schema";

export type ArticleDto = z.infer<typeof ArticleDtoSchema>;
export type ArticlesDto = z.infer<typeof ArticlesDtoSchema>;
export type ArticleQueryDto = z.infer<typeof ArticleQueryDtoSchema>;
export type ArticleResponse = z.infer<typeof ArticleResponseSchema>;
