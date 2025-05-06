import { useCompoContext } from "../context/CompoentContext";
import Hero from "../components/Hero";
import HotelCarousel from "../components/HotelCarousel";
import FeatureSection from "../components/FeatureSection";
import OurRatingting from "../components/OurRating";
import HotelFeatures from "../components/HotelFeatures";
import Animate from "../components/Animate";
import PricingPlan from "../components/PricingPlan";
import Photoshot from "../components/Photoshot";
import HotelImages from "../components/HotelImages";
import CompanyBlog from "../components/CompanyBlog";

function Home() {
  const { avaiableHotel } = useCompoContext();
  const handleChildata = () => {};

  return (
    <div className="z-40">
      <Hero />
      {avaiableHotel && (
        <div className="mt-[600px] lg:mt-[150px]">
          <h1 className="text-center italic text-2xl  md:text-4xl text-[#2C4549] font-semibold">
            Available Rooms
          </h1>
          <HotelCarousel
            grid={"grid md:grid-cols-2 gap-2 lg:grid-cols-3"}
            handleChildata={handleChildata}
          />
        </div>
      )}

      <FeatureSection marginT={avaiableHotel ? "mt-24" : "mt-[620px]"} />
      <OurRatingting />
      <HotelFeatures />
      <Animate />
      <PricingPlan price1="OUR PLANS" head="Our Pricing & plans" />
      {/* <BookPlane /> */}
      <Photoshot />
      <HotelImages />
      <CompanyBlog />
    </div>
  );
}

export default Home;
