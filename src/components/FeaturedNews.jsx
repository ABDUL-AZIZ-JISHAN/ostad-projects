import Link from "next/link";

const FeaturedNews = ({ featured_news = [] }) => {
  return (
    <div className="container py-[80px]">
      <h2 className="text-3xl pb-10 text-black font-bold text-center">
        Featured News
      </h2>
      <hr />
      <div className="flex justify-around items-center pt-10 flex-wrap">
        {featured_news.slice(0, 2).map((item) => {
          const { id, img1, img2, img3, img4, title } = item;
          return (
            <Link
              key={id}
              className="featured-card flex col-span-6 h-[30vh] relative justify-center items-center px-4"
              href={`/news?id=${id}`}
            >
              <div
                className={`inset-0 absolute h-full w-full rounded-lg bg-blue-400`}
                style={{
                  backgroundImage: `url(${img1 || img2 || img3 || img4})`,
                }}
              ></div>
              <h2 className="text-2xl pb-10 text-white font-bold z-[10000] capitalize ">
                {title}
              </h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedNews;
