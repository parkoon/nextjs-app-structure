import { articleService } from "@/entity/article/api/service";
import ArticleCard from "@/entity/article/ui/ArticleCard";
import React from "react";

type Props = {};

const ArticleList = async () => {
  const { articles } = await articleService.getArticles();

  return (
    <section>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </section>
  );
};

export default ArticleList;
