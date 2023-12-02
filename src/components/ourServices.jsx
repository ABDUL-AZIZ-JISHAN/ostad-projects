import Link from "next/link";
import getSimpleResponse from "@/utils/getSimpleResponse";

const ourServices = async () => {
  const services = await getSimpleResponse("/api/AllService");

  const loadServices = async () => {
    return services?.map((service, ind) => {
      return (
        <div key={ind} className="project-card w-[605px] mb-[30px] py-[40px] px-[30px]">
          <h2 className="text-[26px] font-semibold uppercase">
            {service.title}
          </h2>
          <p className="text-[16px] mt-[20px] mb-[50px] text-[#9D9D9D]">
            {service.des}
          </p>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-4 row-span-3">
              <div
                style={{ backgroundImage: `url(${service["image1"]})` }}
                className="img-1 w-full h-[165px] set-bg-img rounded-[10px] bg-[#000]"
              ></div>
            </div>
            <div className="col-span-2 row-span-3 col-start-5">
              <div
                style={{ backgroundImage: `url(${service["image2"]})` }}
                className="img-1 w-full h-[165px] set-bg-img rounded-[10px] bg-[#000]"
              ></div>
            </div>
            <div className="col-span-3 row-span-3 row-start-4">
              <div
                style={{ backgroundImage: `url(${service["image3"]})` }}
                className="img-1 w-full h-[265px] set-bg-img rounded-[10px] bg-[#000]"
              ></div>
            </div>
            <div className="col-span-3 row-span-3 col-start-4 row-start-4">
              <div
                style={{ backgroundImage: `url(${service["image4"]})` }}
                className="img-1 w-full h-[265px] set-bg-img rounded-[10px] bg-[#000]"
              ></div>
            </div>
          </div>
        </div>
      );
    });
  };


  return (
    <div className="team-member pt-[65px] pb-[85px]">
      <div className="container">
        <div className="section-top">
          <h3 className="section-subtitle">Our All Services</h3>
          <h2 className="section-title capitalize w-[490px] mt-[25px] mb-[30px]">
            We Provide BestWeb design services
          </h2>
        </div>
        <div className="projects-list flex justify-between items-center flex-wrap">
          {loadServices()}
        </div>
      </div>
    </div>
  );
};

export default ourServices;
