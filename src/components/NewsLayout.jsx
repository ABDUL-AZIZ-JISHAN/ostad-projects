import NewsCard from "./NewsCard";

const NewsLayout = ({ popular_news = [], regular_news = [] }) => {
  return (
    <div className="container py-8 grid grid-cols-12 gap-4">
      <div className="col-span-8  gap-4">
        <div className=" p-2 ">
          <h2 className="text-3xl text-black font-bold">Latest News</h2>
          <hr className="mb-6 mt-3 block" />
        </div>
        <div className="flex flex-wrap justify-around mt-4">
          {regular_news.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>
      <div className="col-span-4 p-2">
        <h2 className="text-3xl text-black font-bold">Popular News</h2>
        <hr className="mb-6 mt-3 block" />
        {popular_news.map((news) => (
          <NewsCard popular key={news.id} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsLayout;
