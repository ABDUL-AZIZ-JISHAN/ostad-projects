import React from "react";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";
import { ClockIcon } from "@/components/Icons";
import getData from "@/utils/getData";
import CommentSection from "@/components/Comment";
import GetFormattedDate from "@/utils/getFormattedDate";

const Page = async ({ searchParams }) => {
  const newsId = searchParams["id"];
  const [{ img1, img2, img3, img4, title, long_des, createdAt }] =
    await getData(`${process.env.API_BASE_URL}/api/news/details?id=${newsId}`);

  const comments = await getData(
    `${process.env.API_BASE_URL}/api/news/comments?postId=${newsId}`,
    false
  );

  return (
    <>
      <div>
        <div
          className="w-full h-96 object-cover rounded-lg mb-6 bg-blue-400"
          style={{
            backgroundImage: `url(${img4 || img2 || img3 || img4})`,
          }}
        ></div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <div className="mb-[30px] mt-5 fw-bold p-0 flex items-center">
            <ClockIcon />
            <span className="ml-2">{GetFormattedDate(createdAt)}</span>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: long_des }} />
      <CommentSection commentsList={comments} />
    </>
  );
};

export default Page;
