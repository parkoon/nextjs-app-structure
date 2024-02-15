import ArticleList from "@/feature/article/ui/ArticleList";

const HomePage = async () => {
  return (
    <div>
      <div className="max-w-[75%]">
        <ArticleList />
      </div>
    </div>
  );
};

export default HomePage;
