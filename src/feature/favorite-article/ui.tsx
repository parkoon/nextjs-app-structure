import { Button } from "@/shared/ui/button";
import React from "react";

type FavoriteArticleProps = {
  count: number;
};

const FavoriteArticle = ({ count }: FavoriteArticleProps) => {
  return (
    <Button size="sm" variant="outline">
      Favorite Article ({count})
    </Button>
  );
};

export default FavoriteArticle;
