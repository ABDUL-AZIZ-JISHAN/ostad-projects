import NewsCard from "@/components/NewsCard";
import Image from "next/image";
import { ClockIcon } from "@/components/Icons";
import getData from "@/utils/getData";

const Page = async ({ searchParams }) => {
  const categoryId = searchParams["id"];

  const news_list_by_category = await getData(
    `${process.env.API_BASE_URL}/api/news/category?id=${categoryId}`
  );

  return (
    <div className="flex flex-wrap justify-around mt-4">
      {news_list_by_category?.map((news) => (
        <NewsCard key={news.id} {...news} />
      ))}
    </div>
  );
};

export default Page;
