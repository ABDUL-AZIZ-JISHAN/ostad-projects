import React from "react";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";
import { ClockIcon } from "@/components/Icons";
import getData from "@/utils/getData";

const Layout = async ({ children }) => {
  const popular_news = await getData(
    `${process.env.API_BASE_URL}/api/news/type?type=popular`
  );

  return (
    <>
      <div className="py-[80px] container grid grid-cols-12  gap-8">
        <div className="col-span-8">{children}</div>

        {/* Right Column: Popular News */}
        <div className="col-span-4">
          <h2 className="text-2xl font-bold mb-4">Popular News</h2>

          {/* Popular News Cards */}
          {popular_news.map((news) => (
            <NewsCard key={news.id} {...news} popular />
          ))}
        </div>
      </div>
    </>
  );
};

export default Layout;
