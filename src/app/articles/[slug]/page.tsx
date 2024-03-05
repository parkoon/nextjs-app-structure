import { articleService } from "@/shared/api/article/article.api";
import ArticleDetail from "@/widget/article/ui/ArticleDetail";
import ArticleDetailCommentList from "@/widget/article/ui/ArticleDetailCommentList";
import { Suspense } from "react";

type ArticlePageProps = {
  params: { slug: string };
};

const ArticlePage = async ({ params: { slug } }: ArticlePageProps) => {
  const article = await articleService.getArticle(slug);
  return (
    <div>
      {/* 헤더 */}
      <Suspense fallback={<div>zzz</div>}>
        <ArticleDetail slug={slug} />
      </Suspense>

      <ArticleDetailCommentList />

      {/* 컨텐츠 */}
      {/* 푸터 */}
    </div>
  );
};

export default ArticlePage;
