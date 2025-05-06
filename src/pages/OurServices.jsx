import TopBanner from "../components/TopBanner";
import FeatureSection from "../components/FeatureSection";
import BookPlane from "../components/BookPlane";
import Photoshot from "../components/Photoshot";
import HotelImages from "../components/HotelImages";

function OurServices() {
  return (
    <div>
      <TopBanner ourService="Our Service" />
      <FeatureSection marginT="mt-[100px]" />
      <BookPlane />
      <Photoshot />
      <HotelImages />
    </div>
  );
}

export default OurServices;
