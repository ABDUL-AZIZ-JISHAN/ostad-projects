import Link from "next/link";
import getSimpleResponse from "@/utils/getSimpleResponse";

const TestimonialList = async () => {
  const testiList = await getSimpleResponse("/api/TestimonialList");

  const loadTestiCards = () => {
    return testiList?.map((member, ind) => {
      return (
        <div key={ind} className="testi-card py-[48px] px-[23px] flex flex-col items-center">
          <div
            style={{ backgroundImage: `url(${member["image"]})` }}
            className="img-1 w-[100px] set-bg-img h-[100px] rounded-[20px] bg-[#000]"
          ></div>
          <p className="text-[#9D9D9D] mt-[40px] text-[16px] font-normal text-center">
            {member.msg}
          </p>
          <h4 className="text-[26px] mt-[26px] mb-[10px] text-center font-semibold">
            {member.name}
          </h4>
          <h4 className="text-[16px] font-medium ">{member.designation}</h4>
        </div>
      );
    });
  };
  return (
    <div className="testimonial-list py-[68px]">
      <div className="container">
        <div className="section-top">
          <h3 className="section-subtitle">Testimonial List</h3>
          <h2 className="section-title capitalize w-[490px] mt-[25px] mb-[72px]">
            Better Agency/SEO Solution At Your Fingertips
          </h2>
        </div>
        <div className="testimonial-card flex flex-wrap justify-around">
          {loadTestiCards()}
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;
