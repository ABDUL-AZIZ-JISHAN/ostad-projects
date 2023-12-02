import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import getSimpleResponse from "@/utils/getSimpleResponse";

const TeamMember = async () => {
  const members = await getSimpleResponse("/api/TeamList");

  const loadTeamMember = async () => {
    return members?.map((member, ind) => {
      return (
        <div key={ind} className="member-card w-[392px] h-[490px] mb-[30px]">
          <div className="relative h-[387px]">
            <div
              style={{ backgroundImage: `url(${member["image"]})` }}
              className="img-1 w-full h-full set-bg-img rounded-[10px] bg-[#000]"
            ></div>
            <ul className="absolute transform -translate-x-1/2 -translate-y-1/2 bottom-[5px] left-[50%] flex rounded-[25px] items-center justify-between h-[50px] bg-[#FFF] w-[145px] py-[17px] px-[20px]">
              <li>
                <Link
                  href={member.facebook}
                  className="text-[#737588] hover:text-[#20B15A]"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <span>|</span>
              <li>
                <Link
                  href={member.instagram}
                  className="text-[#737588] hover:text-[#20B15A]"
                >
                  <FaInstagram />
                </Link>
              </li>
              <span>|</span>
              <li>
                <Link
                  href={member.twitter}
                  className="text-[#737588] hover:text-[#20B15A]"
                >
                  <IoLogoTwitter />
                </Link>
              </li>
            </ul>
          </div>
          <h3 className="text-center text-[30px] color-black font-semibold mt-[30px]">
            {member.name}
          </h3>
        </div>
      );
    });
  };
  return (
    <div className="team-member pt-[65px] pb-[85px]">
      <div className="container">
        <div className="section-top">
          <h3 className="section-subtitle">Our Team Member</h3>
          <h2 className="section-title capitalize w-[490px] mt-[25px] mb-[30px]">
            Check our awesome team members
          </h2>
        </div>
        <div className="member-list flex justify-between items-center flex-wrap">
          {loadTeamMember()}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
