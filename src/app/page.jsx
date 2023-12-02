import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featuredProjects";
import WorkList from "@/components/workList";
import getSimpleResponse from "@/utils/getSimpleResponse";

// export const metadata = {
//   title: '...',
//   description: '...',
// }

export async function generateMetadata() {
  // Get site metadata
  const meta = await getSimpleResponse("/api/SiteMeta/home");

  // Check if data exists
  if (!meta) {
    throw new Error("Error fetching site metadata");
  }
  const metadataBase = process.env.VERCEL_URL || `http://localhost:3000`;

  // Extract metadata properties
  const { title, description, image, keywords } = meta;

  return {
    title,
    description,
    keywords,
    metadataBase,
    // Open Graph metadata for social media sharing
    openGraph: {
      images: [image],
    },
  };
}

export default async function Home() {
  const brands = await getSimpleResponse("/api/BrandList");
  const images = await getSimpleResponse("/api/HeroList");
  return (
    <>
      <Hero brands={brands} images={images} />
      <WorkList />
      <FeaturedProjects />
    </>
  );
}
