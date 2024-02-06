import { articleService } from "@/entity/article/api/service";

const HomePage = async () => {
  const res = await articleService.getArticles();

  // console.log(res);
  return <div>{JSON.stringify(res)}</div>;
};

export default HomePage;
