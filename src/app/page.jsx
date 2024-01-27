import FeaturedNews from "@/components/FeaturedNews";
import Hero from "@/components/Hero";
import NewsLayout from "@/components/NewsLayout";
import getData from "@/utils/getData";

export default async function Home() {
  const sliders_news = await getData(
    `${process.env.API_BASE_URL}/api/news/type?type=slider`
  );
  const featured_news = await getData(
    `${process.env.API_BASE_URL}/api/news/type?type=featured`
  );
  const regular_news = await getData(
    `${process.env.API_BASE_URL}/api/news/type?type=regular`
  );
  const popular_news = await getData(
    `${process.env.API_BASE_URL}/api/news/type?type=popular`
  );

  return (
    <>
      <Hero sliders_news={sliders_news} />
      <FeaturedNews featured_news={featured_news} />
      <NewsLayout regular_news={regular_news} popular_news={popular_news} />
    </>
  );
}
