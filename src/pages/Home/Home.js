
/*
import FeaturedProduct from "../../components/home/FeaturedProduct";
import Testimonials from "../../components/home/Testimonials";
import ContactCTA from "../../components/home/ContactCTA"; */

import HeroSection from "../../components/Home/HeroSection/HeroSection";
import ServicesOverview from "../../components/Home/ServiceOverview/ServiceOverview";
import FeaturedProduct from "../../components/Home/FeaturedProduct/FeaturedProduct";
import featuredData from "../../data/featuredData"
import heroData from "../../data/heroSectionData"
import Testimonials from "../../components/Home/Testimonials/Testimonials";
function Home() {
  return (
    <div className="flex flex-col justify-evenly gap-8 m-0 p-16 w-full bg-transparent min-h-screen">
      <HeroSection {...heroData} />
      <ServicesOverview />
      <FeaturedProduct  {...featuredData} />
      <Testimonials /> { }
    </div>
  );
}

export default Home;
