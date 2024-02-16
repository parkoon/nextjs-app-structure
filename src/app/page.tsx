import ArticleList from "@/widget/article/ui/ArticleList";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Exception from "./Exception";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        {/* <Exception> */}

        <ArticleList />
        {/* </Exception> */}
      </div>
    </div>
  );
};

export default HomePage;
