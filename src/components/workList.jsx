import getSimpleResponse from "@/utils/getSimpleResponse";
import Image from "next/image";
import Link from "next/link";

const WorkList = async () => {
  const workList = await getSimpleResponse("/api/WorkList");
  const { followers, solved, customers, projects } =
    await getSimpleResponse("/api/StatList");

  const loadWorkList = () => {
    return workList?.map((work, ind) => {
      return (
        <div key={ind} className="work-card w-[380px] px-[30px] py-[50px]">
          <div className="icon rounded-[20px] h-[93px] p-[30px] w-[93px] bg-[#D7F5DC] flex justify-center align-center">
            <Image
              src={`/img/work-${work.id}.svg`}
              width={100}
              height={100}
              // layout="fixed"
              alt="brands"
            />
          </div>
          <h3 className="text-[24px] text-black font-semibold mt-[15px]">
            {work.title}
          </h3>
          <p className="text-black text-[18px] font-normal font-avenir mt-[15px] mb-[43px]">
            {work.des}
          </p>
          <Link
            href="#0"
            className="flex items-center font-avenir text-[18px] font-normal group hover:transform-translate-x-2 transition-transform duration-300 ease-in-out"
          >
            Learn More
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              className="ml-[10px] group-hover:ml-[20px] transition-all duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M10 1.83331L17 8.83331L10 15.8333M1 8.83331H17H1Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="work-list bg-white py-[66px]">
      <div className="container">
        <div className="section-top">
          <h3 className="section-subtitle">work list</h3>
          <h2 className="section-title capitalize w-[490px] mt-[25px] mb-[30px]">
            We provide the Perfect Solution to your business growth
          </h2>
        </div>
        <div className="work-flow flex justify-between">{loadWorkList()}</div>
        <div className="statistics flex justify-between mt-[130px]">
          <div className="single_stat w-[290px] h-[290px] py-[48px] rounded-[20px] shadow-md flex justify-center flex-col text-center items-center">
            <div className="icon rounded-[20px] h-[93px] p-[30px] w-[93px] bg-[#D7F5DC] flex justify-center align-center hover:border">
              <Image
                src={`/img/stat-1.svg`}
                width={100}
                height={100}
                // layout="fixed"
                alt={`stat-emoji`}
              />
            </div>
            <h3 className="text-[30px] text-black font-semibold mt-[23px]">
              {followers}
            </h3>
            <p className="text-black text-[16px] font-medium mt-[5px]">
              Followers
            </p>
          </div>
          <div className="single_stat w-[290px] h-[290px] py-[48px] rounded-[20px] shadow-md flex justify-center flex-col text-center items-center">
            <div className="icon rounded-[20px] h-[93px] p-[30px] w-[93px] bg-[#D7F5DC] flex justify-center align-center hover:border">
              <Image
                src={`/img/stat-1.svg`}
                width={100}
                height={100}
                // layout="fixed"
                alt={`stat-emoji`}
              />
            </div>
            <h3 className="text-[30px] text-black font-semibold mt-[23px]">
              {solved}
            </h3>
            <p className="text-black text-[16px] font-medium mt-[5px]">
              Solved Problems
            </p>
          </div>
          <div className="single_stat w-[290px] h-[290px] py-[48px] rounded-[20px] shadow-md flex justify-center flex-col text-center items-center">
            <div className="icon rounded-[20px] h-[93px] p-[30px] w-[93px] bg-[#D7F5DC] flex justify-center align-center hover:border">
              <Image
                src={`/img/stat-1.svg`}
                width={100}
                height={100}
                // layout="fixed"
                alt={`stat-emoji`}
              />
            </div>
            <h3 className="text-[30px] text-black font-semibold mt-[23px]">
              {customers}
            </h3>
            <p className="text-black text-[16px] font-medium mt-[5px]">
              Happy Customers
            </p>
          </div>
          <div className="single_stat w-[290px] h-[290px] py-[48px] rounded-[20px] shadow-md flex justify-center flex-col text-center items-center">
            <div className="icon rounded-[20px] h-[93px] p-[30px] w-[93px] bg-[#D7F5DC] flex justify-center align-center hover:border">
              <Image
                src={`/img/stat-1.svg`}
                width={100}
                height={100}
                // layout="fixed"
                alt={`stat-emoji`}
              />
            </div>
            <h3 className="text-[30px] text-black font-semibold mt-[23px]">
              {projects}
            </h3>
            <p className="text-black text-[16px] font-medium mt-[5px]">
              Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkList;
