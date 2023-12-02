import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featuredProjects";
import WorkList from "@/components/workList";
import getSimpleResponse from "@/utils/getSimpleResponse";


export async function generateMetadata() {
  const metadata = await getSimpleResponse("/api/SiteMeta/home");

  const { title, description, image, keywords } = await metadata[0];

  return {
    title,
    description,
    keywords,
    metadataBase: new URL('https://acme.com'),
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
