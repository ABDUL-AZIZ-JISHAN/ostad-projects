import Link from "next/link";

const Slider = ({
  id = 1,
  title = "Title",
  short_des = "short_des",
  img1,
  img2,
  img3,
  img4,
}) => {
  return (
    <section className=" h-[700px] py-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-opacity-90 backdrop-filter backdrop-blur-lg text-white">
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-blue-400"
          style={{
            backgroundImage: `url(${img1 || img2 || img3 || img4})`,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Text Content */}
      <div className="absolute mx-auto inset-0  z-10  pb-8 flex justify-center items-center">
        <div className="container text-center ">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-8">{short_des}</p>
          <Link
            href={`/news?id=${id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
          >
            Read Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Slider;
