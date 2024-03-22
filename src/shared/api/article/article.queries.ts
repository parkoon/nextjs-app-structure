import { useMutation } from "@tanstack/react-query";
import { likeArticle } from "./article.api";

export const likeArticleMutation = () =>
  useMutation({ mutationFn: (slug: string) => likeArticle(slug) });
