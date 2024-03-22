"use client";

import ArticleLikeButton from "@/feature/article/ui/ArticleLikeButton";
import ArticleUnlikeButton from "@/feature/article/ui/ArticleUnlikeButton";
import { useInfiniteArticlesQuery } from "@/shared/api/article";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Badge } from "@/shared/ui/badge";
import Typography from "@/shared/ui/typography";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ArticleList = () => {
  const { data, ref } = useInfiniteArticlesQuery();

  return (
    <section className="flex flex-col gap-4">
      {data?.pages.map(({ articles, articlesCount }) =>
        articles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`}>
            {article.favorited ? "f" : "nf"}
            <div key={article.slug} className="border-b py-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage
                      src={article.author.image}
                      alt={article.author.username}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div>
                    <Typography variant="h4">
                      {article.author.username}
                    </Typography>
                    <span>{article.createdAt}</span>
                  </div>
                </div>

                {article.favorited ? (
                  <ArticleUnlikeButton
                    slug={article.slug}
                    count={article.favoritesCount}
                  />
                ) : (
                  <ArticleLikeButton
                    slug={article.slug}
                    count={article.favoritesCount}
                  />
                )}
              </div>

              <Typography variant="h3">{article.title}</Typography>
              <Typography variant="p">{article.description}</Typography>

              <div className="flex justify-between items-center">
                <span>Read more...</span>
                <div className="flex gap-1">
                  {article.tagList.map((tag, index) => (
                    <Badge key={index}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))
      )}

      <div ref={ref} />
    </section>
  );
};

export default ArticleList;
