import Hero from "../components/HomePageComponents/Hero";
import FeatureSection from "../components/HomePageComponents/FeatureSection";
import HotelFeatures from "../components/HomePageComponents/HotelFeatures";
import PricingPlan from "../common components/components/PricingPlan";
import HotelImages from "../common components/components/HotelImages";
import CompanyBlog from "../components/HomePageComponents/CompanyBlog";
import OurRating from "../common components/components/OurRating";
import Photoshot from "../components/HomePageComponents/Photoshot";
import Animate from "../common components/components/Animate";
import  { useCompoContext } from "../context/CompoentContext";
import HotelCarousel from "../common components/components/HotelCarousel";


function Home() {
  const { avaiableHotel } = useCompoContext();
  const handleChildata = () => {
  };

  return (
    
      <div className="z-40">
        <Hero />
        {avaiableHotel && (
          <div className="mt-[600px] lg:mt-[150px]">
            <h1 className="text-center italic text-2xl  md:text-4xl text-[#2C4549] font-semibold">Available Rooms</h1>
            <HotelCarousel  grid = {'grid md:grid-cols-2 gap-2 lg:grid-cols-3'} handleChildata={handleChildata}/>
          </div>
        )}

        <FeatureSection marginT={avaiableHotel ? 'mt-24' : 'mt-[620px]'}/>
        <OurRating />
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
