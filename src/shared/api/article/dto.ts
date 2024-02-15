export type ProfileDto = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

export type ArticleDto = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: false;
  favoritesCount: number;
  author: ProfileDto;
};
