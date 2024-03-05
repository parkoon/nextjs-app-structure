import SuspenseWithErrorBoundary from "@/shared/libs/react/suspense-with-error-boundary";
import ArticleList from "@/widget/article/ui/ArticleList";
import PageLayout from "@/widget/layout/ui/PageLayout";
import TabBar from "@/widget/layout/ui/TabBar";
import { z } from "zod";

const schemaA = z.object({
  a: z.string(),
  b: z.number(),
  c: z.string(),
});

const schemaB = z.object({
  a: z.string(),
  b: z.number(),
  d: z.any(),
});

type B = z.infer<typeof schemaB>;

const objectB: B = {
  a: "zz",
  b: 11,
  // c: "zz",
  d: "zzzz",
};

type A = {
  tagList?: string[];
};

const a: A = {
  tagList: ["1"],
};

const HomePage = () => {
  console.log("###", schemaA?.safeParse(objectB));

  return (
    <PageLayout>
      {/* <Exception> */}

      <SuspenseWithErrorBoundary>
        <ArticleList />
      </SuspenseWithErrorBoundary>
      {/* </Exception> */}

      <TabBar />
    </PageLayout>
  );
};

export default HomePage;
