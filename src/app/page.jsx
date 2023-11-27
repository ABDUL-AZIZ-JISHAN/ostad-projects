
// import { ReactLenis } from "@studio-freight/react-lenis"
import Hero from '@/components/hero'
import getSimpleResponse from '@/utils/getSimpleResponse';


export default async function Home() {
  const brands = await getSimpleResponse("/api/BrandList");
  const images = await getSimpleResponse("/api/HeroList");
  return (
    <>
    {/* <ReactLenis root> */}
    <Hero brands={brands} images={images}/>
   {/* </ReactLenis> */}
   </>
  )
}
