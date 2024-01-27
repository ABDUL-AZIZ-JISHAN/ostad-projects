import NewsCard from "@/components/NewsCard";
import Image from "next/image";
import { ClockIcon } from "@/components/Icons";
import getData from "@/utils/getData";

const Page = async ({ searchParams }) => {
  const searchString = searchParams["by"];
  const newsList = await getData(
    `${process.env.API_BASE_URL}/api/news/search?keyword=${searchString}`
  );

  return (
    <div className="flex flex-wrap justify-around mt-4">
      {newsList?.map((news) => (
        <NewsCard key={news.id} {...news} />
      ))}
    </div>
  );
};

export default Page;
