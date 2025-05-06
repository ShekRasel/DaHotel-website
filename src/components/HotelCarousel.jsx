import { useEffect } from "react";
import { Link } from "react-router-dom";

function HotelCarousel({ grid, grid2, slide, margin, handleChildata }) {
  const hotelRooms = [
    {
      img: "hotel images/room-img05.png",
      header: "Ocean View Suite",
      description: "Enjoy stunning ocean views with modern luxury and comfort.",
      icon1: "icons/sve-icon1.png",
      icon2: "icons/sve-icon2.png",
      icon3: "icons/sve-icon3.png",
      icon4: "icons/sve-icon4.png",
      icon5: "icons/sve-icon5.png",
      icon6: "icons/sve-icon6.png",
      price: "$150/Night",
      bookbtn: "Book Now",
    },
    {
      img: "hotel images/room-img06.png",
      header: "Deluxe King Room",
      description: "Spacious room with king-size bed and city skyline views.",
      icon1: "icons/sve-icon1.png",
      icon2: "icons/sve-icon2.png",
      icon3: "icons/sve-icon3.png",
      icon4: "icons/sve-icon4.png",
      icon5: "icons/sve-icon5.png",
      icon6: "icons/sve-icon6.png",
      price: "$120/Night",
      bookbtn: "Book Now",
    },
    {
      img: "hotel images/room-img04.png",
      header: "Family Suite",
      description: "Perfect for families, with multiple beds and extra space.",
      icon1: "icons/sve-icon1.png",
      icon2: "icons/sve-icon2.png",
      icon3: "icons/sve-icon3.png",
      icon4: "icons/sve-icon4.png",
      icon5: "icons/sve-icon5.png",
      icon6: "icons/sve-icon6.png",
      price: "$180/Night",
      bookbtn: "Book Now",
    },
    {
      img: "hotel images/room-img03.png",
      header: "Business Executive Room",
      description:
        "Ideal for business travelers with workspace and fast Wi-Fi.",
      icon1: "icons/sve-icon1.png",
      icon2: "icons/sve-icon2.png",
      icon3: "icons/sve-icon3.png",
      icon4: "icons/sve-icon4.png",
      icon5: "icons/sve-icon5.png",
      icon6: "icons/sve-icon6.png",
      price: "$130/Night",
      bookbtn: "Book Now",
    },
    {
      img: "hotel images/room-img02.png",
      header: "Garden View Room",
      description: "Relax with peaceful garden views and cozy interiors.",
      icon1: "icons/sve-icon1.png",
      icon2: "icons/sve-icon2.png",
      icon3: "icons/sve-icon3.png",
      icon4: "icons/sve-icon4.png",
      icon5: "icons/sve-icon5.png",
      icon6: "icons/sve-icon6.png",
      price: "$110/Night",
      bookbtn: "Book Now",
    },
    {
      img: "hotel images/room-img01.png",
      header: "Luxury Penthouse",
      description: "Top-floor elegance with private balcony and VIP services.",
      icon1: "icons/sve-icon1.png",
      icon2: "icons/sve-icon2.png",
      icon3: "icons/sve-icon3.png",
      icon4: "icons/sve-icon4.png",
      icon5: "icons/sve-icon5.png",
      icon6: "icons/sve-icon6.png",
      price: "$250/Night",
      bookbtn: "Book Now",
    },
  ];

  useEffect(() => {
    handleChildata(hotelRooms);
  }, []);
  return (
    <div>
      <div className="flex justify-center border-blue-600  2xl:px-10">
        <div className={`mt-16  lg:w-5/6 overflow-hidden ${grid} ${grid2} `}>
          {hotelRooms.map((room, index) => (
            <div
              className={`font-roboto px-5  2xl:px-10 transition-all ease-out duration-500 ${margin}`}
              key={index}
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              <div className="flex flex-col items-center   shadow-md border-r-4 border-b-4 border-white hover:border-[#2C4549] transition-all duration-500 ">
                <img src={room.img} alt="rooms" className="" />
                <h1 className="text-2xl font-semibold mt-6 text-[#2C4549]">
                  {room.header}
                </h1>
                <p className="mt-6 text-center tracking-wide text-gray-500 px-4">
                  {room.description}
                </p>
                <div className="flex gap-7 mt-5">
                  <img src={room.icon1} className="w-5 " />
                  <img src={room.icon3} className="w-5 " />
                  <img src={room.icon2} className="w-5 " />
                  <img src={room.icon4} className="w-5 " />
                  <img src={room.icon5} className="w-5 " />
                  <img src={room.icon6} className="w-5 " />
                </div>
                <div className="mt-8 border-t w-full text-[#2C4549] shadow-sm">
                  <button className="px-8 py-4 w-1/2 border-r">
                    {room.price}
                  </button>
                  <Link to={"/ourrooms"}>
                    <button className=" px-8 py-4 w-1/2 border-l">
                      {room.bookbtn}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotelCarousel;
