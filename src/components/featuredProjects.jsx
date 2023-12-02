import Link from "next/link";
import getSimpleResponse from '@/utils/getSimpleResponse';

const FeaturedProjects = async () => {
      const projects = await getSimpleResponse("/api/FeaturedProject");

  const loadFeaturedProjects = () => {
    if (projects.length <= 1) {
      return null;
    }
    return projects.slice(1, 5).map((project, index) => (
      <div key={index} className={`col-span-3 row-span-3 ${index % 2 === 0 ? 'col-start-7' : 'col-start-10'} ${index >= 2 ? 'row-start-4' : ''}`}>
        <div className="single-project">
          <Link target="_blank" href={`${project.live}`}>
            <div
              style={{ backgroundImage: `url(${project.image})` }}
              className="set-bg-img rounded-[20px] w-full h-[185px] bg-[#000]"
            ></div>
          </Link>
          <h3 className="project-subtitle">App Design - June 20, 2022</h3>
          <h2 className="project-title">{project.title}</h2>
        </div>
      </div>
    ));
  };

  return (
    <div className="featured_projects pt-[61px] pb-[84px] bg-[#F0FDF4]">
      <div className="container">
       <div className="section-top">
          <h3 className="section-subtitle">Featured Project</h3>
          <h2 className="section-title capitalize w-[490px] mt-[25px] mb-[72px]">
            We provide the Perfect Solution to your business growth
          </h2>
        </div>
        <div className="projects_grid">
          <div className="grid grid-cols-12 grid-rows-6 gap-7">
            <div className="col-span-6 row-span-6">
              <div className="single-project">
                <Link href={projects?.[0].live}>
                  <div
                    style={{ backgroundImage: `url(${projects?.[0].image})` }}
                    className="set-bg-img rounded-[20px] w-full h-[530px] bg-[#000]"
                  ></div>
                </Link>
                <h3 className="project-subtitle">App Design - June 20, 2022</h3>
                <h2 className="project-title big">{projects?.[0].title}</h2>
              </div>
            </div>
            {loadFeaturedProjects()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
