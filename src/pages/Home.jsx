import React from "react";
import Hero from "../components/HomePageComponents/Hero";
import FeatureSection from "../components/HomePageComponents/FeatureSection";
import HotelFeatures from "../components/HomePageComponents/HotelFeatures";
import PricingPlan from "../components/HomePageComponents/PricingPlan";
import BookPlane from "../components/HomePageComponents/BookPlane";
import HotelImages from "../common components/components/HotelImages";
import CompanyBlog from "../components/HomePageComponents/CompanyBlog";
import OurRating from '../common components/components/OurRating'
import Photoshot from "../components/HomePageComponents/Photoshot";
import Animate from "../common components/components/Animate";

function Home() {
  return (
    <div className="z-40">
      <Hero />
      <FeatureSection />
      <OurRating />
      <HotelFeatures />
      <Animate/>
      <PricingPlan />
      <BookPlane />
      <Photoshot/>
      <HotelImages />
      <CompanyBlog />
      
    </div>
  );
}

export default Home;
