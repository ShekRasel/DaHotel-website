import React from "react";
import Hero from "../components/HomePageComponents/Hero";
import FeatureSection from "../components/HomePageComponents/FeatureSection";
import OurRating from "../components/HomePageComponents/OurRating";
import HotelFeatures from "../components/HomePageComponents/HotelFeatures";
import Animate from "../components/HomePageComponents/Animate";
import PricingPlan from "../components/HomePageComponents/PricingPlan";
import BookPlane from "../components/HomePageComponents/BookPlane";
import Photoshot from "../components/HomePageComponents/Photoshot";
import HotelImages from "../components/HomePageComponents/HotelImages";
import CompanyBlog from "../components/HomePageComponents/CompanyBlog";

function Home() {
  return (
    <div className="z-40">
      <Hero />
      <FeatureSection />
      <OurRating />
      <HotelFeatures />
      <Animate />
      <PricingPlan />
      <BookPlane />
      <Photoshot />
      <HotelImages />
      <CompanyBlog />
      
    </div>
  );
}

export default Home;
