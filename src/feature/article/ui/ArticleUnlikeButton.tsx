"use client";

import { unlikeArticleMutation } from "@/shared/api/article";
import { Button } from "@/shared/ui/button";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler } from "react";

type ArticleUnlikeButtonProps = {
  count: number;
  slug: string;
};

const ArticleUnlikeButton = ({ count, slug }: ArticleUnlikeButtonProps) => {
  const { mutate } = unlikeArticleMutation();
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
    <Button size="sm" onClick={handleClick}>
      {count}
    </Button>
  );
};

export default ArticleUnlikeButton;
