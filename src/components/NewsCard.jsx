import Link from "next/link";
import { ClockIcon } from "./Icons";
import { sliceText } from "@/utils/SliceText";
import GetFormattedDate from "@/utils/getFormattedDate";

const NewsCard = ({
  id,
  img1,
  img2,
  img3,
  img4,
  title,
  short_des,
  createdAt,
  popular,
}) => {
  const cardStyle = {
    background: `url(${img1 || img2 || img3 || img4}) center/cover`,
    height: popular ? "80px" : "200px",
    width: popular ? "120px" : null,
  };

  const cardBodyStyle = {
    height: popular ? "80px" : "auto",
    overflow: "hidden",
  };

  const titleStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    wordWrap: "break-word",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const descriptionStyle = {
    textOverflow: "ellipsis",
    maxHeight: popular ? "75px" : "3em",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    wordWrap: "break-word",
    WebkitLineClamp: popular ? 3 : 2,
  };

  const mainContent = (
    <div
      className={`card ${popular ? "flex items-center" : "bg-white shadow-sm"}`}
    >
      <div
        className={`card-img-top p-2 rounded-lg bg-blue-400`}
        style={cardStyle}
      ></div>
      {popular ? (
        <h6 className="card-title font-bold text-2xl ml-3" style={titleStyle}>
          {title}
        </h6>
      ) : (
        <div
          className="card-body flex justify-between flex-col p-5 text-black"
          style={cardBodyStyle}
        >
          <h6 className="card-title font-bold text-2xl mb-3" style={titleStyle}>
            {title}
          </h6>
          <p className="card-text" style={descriptionStyle}>
            {short_des}
          </p>
          <div className="mb-[30px] mt-5 fw-bold p-0 flex items-center">
            <ClockIcon />
            <span className="ml-2">{GetFormattedDate(createdAt)}</span>
          </div>
          <Link href={`/news?id=${id}`}>
            <span className="duration-150 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Read More
            </span>
          </Link>
        </div>
      )}
    </div>
  );

  return popular ? (
    <Link
      href={`/news?id=${id}`}
      className={`block  transition duration-100 mb-5 p-${popular ? 4 : 2} ${
        popular ? "col-span-12 " : "col-span-4"
      } border-2 shadow-lg`}
    >
      {mainContent}
      <p className="card-text  mb-2 mt-6" style={descriptionStyle}>
        {short_des}
      </p>
    </Link>
  ) : (
    <div
      className={`mt-[-23px] h-auto mb-8 p-${popular ? 4 : 2} ${
        popular ? "col-span-12 " : "max-w-[32%]"
      } border-2 shadow-lg`}
    >
      {mainContent}
    </div>
  );
};

export default NewsCard;
