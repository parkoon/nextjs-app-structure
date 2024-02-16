import { articleService } from "@/shared/api/article";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import Typography from "@/shared/ui/typography";
import Link from "next/link";

const ArticleList = async () => {
  const { articles } = await articleService.getArticles();
  return (
    <section className="flex flex-col gap-4">
      {articles.map((article) => (
        <Link href={`/articles/${article.slug}`}>
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

              <Button size="sm" variant="outline">
                {article.favoritesCount}
              </Button>
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
      ))}
    </section>
  );
};

export default ArticleList;
