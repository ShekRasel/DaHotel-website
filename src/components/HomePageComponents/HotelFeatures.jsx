import React, { useEffect, useState } from "react";
import HotelCarousel from "../../common components/components/HotelCarousel";

function HotelFeatures() {
  const [slide, setSlide] = useState(0);
  const [visible, setVisible] = useState(4);
  const [dataFromChild, setDataFromChild] = useState([]);
  const grid = 'grid grid-flow-col  auto-cols-[100%]  md:auto-cols-[50%] xl:auto-cols-[33.33%]';

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


  const handleChildata = (data) => {
    setDataFromChild(data);
  };
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

      <HotelCarousel slide={slide} onDataSend={handleChildata} grid = {grid}/>

      <div className="mt-10  flex flex-col items-center gap-10">
        <div className="flex gap-4 hover:cursor-pointer">
          {dataFromChild.slice(0, visible).map((_, index) => (
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
      </div>
    </div>
  );
}

export default HotelFeatures;
