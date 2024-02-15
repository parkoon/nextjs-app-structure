import FavoriteArticle from "@/feature/favorite-article/ui";
import FollowUser from "@/feature/follow-user/ui";
import { articleService } from "@/shared/api/article";
import { Badge } from "@/shared/ui/badge";
import Typography from "@/shared/ui/typography";
import React from "react";

type ArticleDetailHeaderProps = { slug: string };

const ArticleDetail = async ({ slug }: ArticleDetailHeaderProps) => {
  const { article } = await articleService.getArticle(slug);
  return (
    <div>
      <section className="bg-slate-900 py-6">
        <div className="container">
          <Typography variant="h2" className="text-white">
            {article.title}
          </Typography>

          <div className="flex gap-1">
            <FollowUser username={article.author.username} />
            <FavoriteArticle count={article.favoritesCount} />
          </div>
        </div>
      </section>

      <section className="container border-b py-5 mb-5">
        <Typography variant="p" className="mb-6">
          {article.body}
        </Typography>

        <div className="flex gap-1">
          {article.tagList.map((tag) => (
            <Badge>{tag}</Badge>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
