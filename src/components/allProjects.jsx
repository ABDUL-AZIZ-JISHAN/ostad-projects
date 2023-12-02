import Link from "next/link";
import getSimpleResponse from "@/utils/getSimpleResponse";

const AllProjects = async () => {
  const projects = await getSimpleResponse("/api/AllProject");

  const loadProjects = async () => {
    return projects?.map((project, ind) => {
      return (
        <div
          key={ind}
          className="project-card w-[605px] mb-[30px] pb-[30px] pt-[40px] px-[30px]"
        >
          <Link target="_blank" href={`${project.live}`}>
            <div
              style={{ backgroundImage: `url(${project["image"]})` }}
              className="img-1 w-full h-[470px] rounded-[10px] bg-[#000]"
            ></div>
          </Link>
          <h2 className="text-[26px] font-semibold uppercase mt-[30px]">
            {project.title}
          </h2>
        </div>
      );
    });
  };

  return (
    <div className="team-member pt-[65px] pb-[85px]">
      <div className="container">
        <div className="section-top">
          <h3 className="section-subtitle">All Projects</h3>
          <h2 className="section-title capitalize w-[490px] mt-[25px] mb-[30px]">
            Better Agency/SEO Solution At Your Fingertips
          </h2>
        </div>
        <div className="projects-list flex justify-between items-center flex-wrap mt-[20px]">
          {loadProjects()}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
