import { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";

function HotelImages() {
  const [hoverElem, setHoverElem] = useState(null);
  const images = [
    { room: "hotel room/r1.jpg" },
    { room: "hotel room/r2.jpg" },
    { room: "hotel room/r3.jpg" },
    { room: "hotel room/f4dc8267-12d1-448f-9c2a-c0349da79a1c.jpg" },
    {
      room: "hotel room/Hotel Nikko San Francisco — Hotel Review _ Condé Nast Traveler.jpg",
    },
    { room: "hotel room/Soneva Fushi_ Barefoot Luxury.jpg" },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-8 mt-24 justify-center md:px-24 lg:px-0">
      {images.map((rooms, index) => (
        <div
          className=" relative w-full "
          key={index}
          onMouseEnter={() => setHoverElem(index)}
          onMouseLeave={() => setHoverElem(null)}
        >
          <div
            className={`${
              hoverElem === index ? "h-72" : "h-0"
            } bg-[#52c8da] opacity-70 transition-all ease-out duration-500 w-full flex justify-center  items-center absolute overflow-hidden border  cursor-pointer`}
          >
            <span className="text-5xl opacity-100  text-white font-bold">
              <IoLogoInstagram className="font-extrabold" />
            </span>
          </div>
          <img
            src={rooms.room}
            alt="hotels room"
            className="h-72 w-full rounded-md"
          />
        </div>
      ))}
    </div>
  );
}

export default HotelImages;
