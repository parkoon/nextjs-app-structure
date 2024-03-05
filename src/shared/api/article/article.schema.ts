import { z } from "zod";
import { ProfileDtoSchema } from "../profile/profile.schema";

export const ArticleDtoSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  body: z.string(),
  tagList: z.string().array(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  favorited: z.boolean(),
  favoritesCount: z.number(),
  author: ProfileDtoSchema,
});

export const ArticlesDtoSchema = z.object({
  articles: z.array(ArticleDtoSchema),
  articlesCount: z.number(),
});

export const ArticleQueryDtoSchema = z.object({
  tag: z.string().optional(),
  author: z.string().optional(),
  favorited: z.string().optional(),
  following: z.string().optional(),
  offset: z.number().min(0),
  limit: z.number().min(1),
});

export const ArticleResponseSchema = z.object({
  article: ArticlesDtoSchema,
});
