"use client";

import { likeArticleMutation } from "@/shared/api/article/article.queries";
import { Button } from "@/shared/ui/button";
import React, { MouseEventHandler } from "react";

type ArticleLikeButtonProps = {
  count: number;
  slug: string;
};

const ArticleLikeButton = ({ count, slug }: ArticleLikeButtonProps) => {
  const { mutate } = likeArticleMutation();
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    mutate(slug);
  };
  return (
    <Button size="sm" variant="outline" onClick={handleClick}>
      {count}
    </Button>
  );
};

export default ArticleLikeButton;
