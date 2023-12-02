import Link from 'next/link'
import Image from 'next/image';
import getSimpleResponse from "@/utils/getSimpleResponse";

export default async function Hero() {
  const brands = await getSimpleResponse("/api/BrandList");
  const contents = await getSimpleResponse("/api/HeroList");
  const {title , description} = contents || {};
  
  return (
    <div className="hero bg-[#50d71e] pt-[170px] pb-[35px]">
      <div className="container">
        <div className="top-content flex justify-between items-center">
          <div className="left-content">
            <h1 className="hero-title">
              {title || `Increase Your Customers Loyalty and Satisfaction`}
            </h1>
            <p className="hero-subtitle mt-[10px]">
              {description || `We help businesses like yours earn more customers, standout from
              competitors, make more money`}
            </p>
            <Link
              href="#0"
              style={{ padding: "20px 30px" }}
              className="btn-style-one reverse text-[20px] text-center w-[175px] mt-[50px] "
            >
              Get Started
            </Link>
          </div>
          <div className="img-content flex flex-col ">
            <div className="flex">
              <div
                style={{ backgroundImage: `url(${contents["image1"]})` }}
                className="img-1 w-[408px] set-bg-img rounded-[10px] h-[270px] bg-[#000]"
              ></div>
              <div
                style={{ backgroundImage: `url(${contents["image2"]})` }}
                className="img-1 ml-[18px] set-bg-img rounded-[10px] w-[180px] h-[270px] bg-[#000]"
              ></div>
            </div>
            <div className="flex mt-[18px]">
              <div
                style={{ backgroundImage: `url(${contents["image3"]})` }}
                className="img-1 w-[245px] set-bg-img rounded-[10px] h-[165px] bg-[#000]"
              ></div>
              <div
                style={{ backgroundImage: `url(${contents["image4"]})` }}
                className="img-1 ml-[18px] set-bg-img rounded-[10px] w-[345px] h-[165px] bg-[#000]"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-content bg-[#F8FFF9] py-[45px] mt-[80px]">
        <div className="container ">
          <ul className="brands flex justify-between items-center">
            {brands?.map((brand) => {
              return (
                <li key={brand.id}>
                  <Image
                    src={brand.image}
                    width={100}
                    height={100}
                    // layout="responsive"
                    alt="brands"
                    className='h-auto w-auto'
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}