import SuspenseWithErrorBoundary from "@/shared/libs/react/suspense-with-error-boundary";
import ArticleList from "@/widget/article/ui/ArticleList";
import TabBarLayout from "@/widget/layout/ui/TabBarLayout";

const HomePage = () => {
  return (
    <TabBarLayout>
      <SuspenseWithErrorBoundary>
        <ArticleList />
      </SuspenseWithErrorBoundary>
    </TabBarLayout>
  );
};

export default HomePage;
