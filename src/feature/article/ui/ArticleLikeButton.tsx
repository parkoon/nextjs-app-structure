"use client";

import { likeArticleMutation } from "@/shared/api/article/article.queries";
import { Button } from "@/shared/ui/button";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler } from "react";

type ArticleLikeButtonProps = {
  count: number;
  slug: string;
};

const ArticleLikeButton = ({ count, slug }: ArticleLikeButtonProps) => {
  const { mutate } = likeArticleMutation();
  const router = useRouter();
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    mutate(slug, {
      onSuccess: () => {
        router.refresh();
      },
    });
  };
  return (
    <Button size="sm" variant="outline" onClick={handleClick}>
      {count}
    </Button>
  );
};

export default ArticleLikeButton;
