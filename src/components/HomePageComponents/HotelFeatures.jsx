import React, { useEffect, useState } from "react";

function HotelFeatures() {
  const [slide, setSlide] = useState(0);
  const [visible, setVisible] = useState(4);

  const updateVisible = () => {
    if (window.innerWidth < 600) {
      setVisible(6);
    } else {
      setVisible(4);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateVisible);
    return () => {
      window.removeEventListener("resize", updateVisible);
    };
  }, []);

  /*
  const slideRight = () => {
    setSlide((prev) => {
      const maxIndex = hotelRooms.length - visible;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };
  const slideLeft = () => {
    setSlide((prev) => {
      const maxIndex = hotelRooms.length - visible;
      return prev === 0 ? maxIndex : prev - 1;
    });
  };
  */

  const hotelRooms = [
    {
      img: "hotel images/room-img05.png",
      header: "Classic Balconly Room",
      description:
        "Visitors to your city need to eat. In fact, some people visit new towns specifically",
      icon1: "icons/sve-icon1.png",
      icon2: "icons/sve-icon2.png",
      icon3: "icons/sve-icon3.png",
      icon4: "icons/sve-icon4.png",
      icon5: "icons/sve-icon5.png",
      icon6: "icons/sve-icon6.png",
      price: "$100/Night",
      bookbtn: "Book Now",
    },
    {
      img: "hotel images/room-img06.png",
      header: "Classic Balconly Room",
      description:
        "Visitors to your city need to eat. In fact, some people visit new towns specifically",
      icon1: "icons/sve-icon1.png",
      icon2: "icons/sve-icon2.png",
      icon3: "icons/sve-icon3.png",
      icon4: "icons/sve-icon4.png",
      icon5: "icons/sve-icon5.png",
      icon6: "icons/sve-icon6.png",
      price: "$100/Night",
      bookbtn: "Book Now",
    },
    {
      img: "hotel images/room-img04.png",
      header: "Classic Balconly Room",
      description:
        "Visitors to your city need to eat. In fact, some people visit new towns specifically",
      icon1: "icons/sve-icon1.png",
      icon2: "icons/sve-icon2.png",
      icon3: "icons/sve-icon3.png",
      icon4: "icons/sve-icon4.png",
      icon5: "icons/sve-icon5.png",
      icon6: "icons/sve-icon6.png",
      price: "$100/Night",
      bookbtn: "Book Now",
    },
    {
      img: "hotel images/room-img03.png",
      header: "Classic Balconly Room",
      description:
        "Visitors to your city need to eat. In fact, some people visit new towns specifically",
      icon1: "icons/sve-icon1.png",
      icon2: "icons/sve-icon2.png",
      icon3: "icons/sve-icon3.png",
      icon4: "icons/sve-icon4.png",
      icon5: "icons/sve-icon5.png",
      icon6: "icons/sve-icon6.png",
      price: "$100/Night",
      bookbtn: "Book Now",
    },
    {
      img: "hotel images/room-img02.png",
      header: "Classic Balconly Room",
      description:
        "Visitors to your city need to eat. In fact, some people visit new towns specifically",
      icon1: "icons/sve-icon1.png",
      icon2: "icons/sve-icon2.png",
      icon3: "icons/sve-icon3.png",
      icon4: "icons/sve-icon4.png",
      icon5: "icons/sve-icon5.png",
      icon6: "icons/sve-icon6.png",
      price: "$100/Night",
      bookbtn: "Book Now",
    },
    {
      img: "hotel images/room-img01.png",
      header: "Classic Balconly Room",
      description:
        "Visitors to your city need to eat. In fact, some people visit new towns specifically",
      icon1: "icons/sve-icon1.png",
      icon2: "icons/sve-icon2.png",
      icon3: "icons/sve-icon3.png",
      icon4: "icons/sve-icon4.png",
      icon5: "icons/sve-icon5.png",
      icon6: "icons/sve-icon6.png",
      price: "$100/Night",
      bookbtn: "Book Now",
    },
  ];
  return (
    <div className="mt-72 2xl:mt-96">
      <div className="flex flex-col items-center mt-24">
        <img src="icons/hotel-icon-sub.png" alt="" />
        <h2 className="mt-10 text-[#414144] font-firsSans tracking-wider">
          SERVE QUALITY SERVICE
        </h2>
        <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mt-5 text-[#2C4549]">
          Our <span className="font-charm">hotel features</span>
        </h1>
        <p className="text-gray-500 mt-8 px-8 xl;px-0 lg:w-2/3 2xl:w-1/3 text-center font-firsSans">
          Visitors to your city need to eat. In fact, some people visit new
          towns specifically for the food. Use your insider knowledge of the
          area to get them started with the must-visit eateries.
        </p>
        <div className="flex gap-8 mt-8">
          <div className="border-t py-1 border-b border-white hover:border-black">
            <button className="bg-[#2C4549] text-white px-10 py-3 hover:bg-white border border-[#2C4549] hover:border-black  hover:text-black transition-all ease-out duration-500">
              {" "}
              ROOMS
            </button>
          </div>
          <div className="border-t border-b border-black py-1 hover:border-white">
            <button className=" border-black border px-10 py-3 hover:bg-[#2C4549] hover:text-white transition-all ease-out duration-500">
              SUITES
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-blue-600  2xl:px-10">
        <div
          className={`mt-16  lg:w-5/6 overflow-hidden  grid grid-flow-col  auto-cols-[100%]  md:auto-cols-[50%] xl:auto-cols-[33.33%]`}
        >
          {hotelRooms.map((room, index) => (
            <div
              className=" font-roboto px-5  2xl:px-10 transition-all ease-out duration-500"
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
                  <button className=" px-8 py-4 w-1/2 border-l">
                    {room.bookbtn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10  flex flex-col items-center gap-10">
        <div className="flex gap-4 hover:cursor-pointer">
          {hotelRooms.slice(0,visible).map((_, index) => (
            <div key={index}>
              <div
                className={`bg-[#2C4549]  w-1 h-[6px] rounded-md ${
                  slide === index ? "px-6" : "px-3"
                }`}
                onClick={() => setSlide(index)}
              ></div>
            </div>
          ))}
        </div>

        
        {/* <div>
          <button
            className="border p-4 bg-red-600 text-white font-semibold"
            onClick={slideLeft}
          >
            left
          </button>
          <button
            className="border p-4 bg-red-600 text-white font-semibold"
            onClick={slideRight}
          >
            right
          </button>
        </div> */}
        
      </div>
    </div>
  );
}

export default HotelFeatures;
