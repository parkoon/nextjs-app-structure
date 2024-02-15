import { ProfileModel } from "@/entity/profile/@x/article";

export type ArticleModel = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: false;
  favoritesCount: number;
  author: ProfileModel;
};
