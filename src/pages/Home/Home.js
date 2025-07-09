
/*
import FeaturedProduct from "../../components/home/FeaturedProduct";
import Testimonials from "../../components/home/Testimonials";
import ContactCTA from "../../components/home/ContactCTA"; */

import HeroSection from "../../components/Home/HeroSection/HeroSection";
import ServicesOverview from "../../components/Home/ServiceOverview/ServiceOverview";
import FeaturedProduct from "../../components/Home/FeaturedProduct/FeaturedProduct";
import featuredData from "../../data/featuredData"


function Home() {
  return (
    <div className="m-0 p-24 w-full bg-transparent flex flex-col min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <FeaturedProduct {...featuredData} />
      {/*   
      <FeaturedProduct />
      <Testimonials />
      <ContactCTA /> */}
    </div>
  );
}

export default Home;
