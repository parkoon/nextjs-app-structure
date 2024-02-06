import React from "react";
import { ArticleModel } from "../model";
import { ProfileModel } from "@/entity/profile/@x/article";
import { Card } from "@/shared/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

type ArticleCardProps = {
  article: ArticleModel;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card>
      <Avatar>
        <AvatarImage src={article.author.image} alt={article.author.username} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Card>
  );
};

export default ArticleCard;
