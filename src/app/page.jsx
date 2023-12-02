import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featuredProjects";
import WorkList from "@/components/workList";
import getSimpleResponse from "@/utils/getSimpleResponse";

// export const metadata = {
//   title: '...',
//   description: '...',
// }

export async function generateMetadata() {
  const meta = await getSimpleResponse("/api/SiteMeta/home");

  if (!meta) {
    throw new Error("Error fetching site metadata");
  }

  const { title, description, image, keywords } = meta;
  return {
    title,
    description,
    keywords,
    openGraph: {
      images: [image],
    },
  };
}

export default async function Home() {
  return (
    <>
      <Hero/>
      <WorkList />
      <FeaturedProjects />
    </>
  );
}
