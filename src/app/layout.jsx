import Navbar from "@/components/Navbar";
import TopBar from "@/components/Topbar";
import CopyRight from "@/components/Copyright";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import getData from "@/utils/getData";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/index.css";

export default async function RootLayout({ children }) {
  const [{ facebook, youtube, twitter, linkedin }] = await getData(
    `${process.env.API_BASE_URL}/api/socials`
  );
  const categories = await getData(
    `${process.env.API_BASE_URL}/api/categories`
  );

  return (
    <html lang="en">
      <body>
        <TopBar socials={{ facebook, youtube, twitter, linkedin }} />
        <Navbar categories={categories} />
        {children}
        <NewsLetter />
        <Footer
          categories={categories}
          socials={{ facebook, youtube, twitter, linkedin }}
        />
        <CopyRight />
      </body>
    </html>
  );
}
