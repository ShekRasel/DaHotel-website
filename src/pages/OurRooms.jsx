import TopBanner from "../common components/components/TopBanner";
import HotelCarousel from "../common components/components/HotelCarousel";
import BookPlane from "../components/HomePageComponents/BookPlane";
import HotelImages from "../common components/components/HotelImages";


function OurRooms() {
  const grid = "grid md:grid-cols-2 lg:grid-cols-3 mt-24";
    const handleChildata = () => {
    };
  return (
    <div>
      <TopBanner OurRooms={"Our Rooms"} />
      <BookPlane />
      <HotelCarousel grid2={grid} margin={"mb-10"} handleChildata={handleChildata}/>
      <div className="  mt-24 flex flex-col  md:flex-row items-center xl:pr-24 2xl:pr-48 justify-between  gap-14 2xl:gap-24">
        <div className="md:w-1/2">
          <img src="images/pexels-photo-262047.jpeg" alt="" />
        </div>
        <div className="font-roboto tracking-wide md:w-1/2">
          <h2 className="text-2xl font-semibold">Luxury Hotel& Resort</h2>
          <h1 className="text-4xl 2xl:text-5xl font-semibold text-[#2C4549] mt-8">
            Pearl Of The Adriatic.
          </h1>
          <p className="mt-8 text-gray-500">
            Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium.
            Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat
            porttitor.Aenean vehicula ligula eu rhoncus porttitor. Duis vel
            lacinia quam. Nunc rutrum porta ex, in imperdiet tortor feugiat at.
            Cras finibus laoreet felis et hendrerit. Integer ligula lorem,
            finibus vitae lorem at, egestas consectetur urna. Integer id
            ultricies elit. Maecenas sodales nibh, quis posuere felis. In
            commodo mi lectus venenatis metus eget fringilla. Suspendisse varius
            ante eget.
          </p>

          <button className="mt-8 bg-[#2C4549] text-white px-10 py-4 ">DISCOVER MORE</button>
        </div>
      </div>
      <HotelImages />
    </div>
  );
}

export default OurRooms;
