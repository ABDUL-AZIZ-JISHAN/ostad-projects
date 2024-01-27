"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Slider from "./Slider";

export default function Hero({ sliders_news = [] }) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {sliders_news?.map((news) => {
          return (
            <SwiperSlide key={news.id}>
              <Slider {...news} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
