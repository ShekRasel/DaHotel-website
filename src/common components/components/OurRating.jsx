import React, { useEffect, useRef, useState } from "react";

function OurRating({ paddingBottom }) {
  const divRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [counts, setCounts] = useState({
    guests: 0,
    countries: 0,
    rooms: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      let guests = 0;
      let countries = 0;
      let rooms = 0;

      const interval = setInterval(() => {
        setCounts((prev) => {
          const newCounts = {
            guests: prev.guests < 90 ? prev.guests + 1 : 90,
            countries: prev.countries < 152 ? prev.countries + 2 : 152,
            rooms: prev.rooms < 221 ? prev.rooms + 3 : 221,
          };

          // Clear interval if all counts are complete
          if (
            newCounts.guests === 90 &&
            newCounts.countries === 152 &&
            newCounts.rooms === 221
          ) {
            clearInterval(interval);
          }

          return newCounts;
        });
      }, 20); // Adjust speed here (ms)

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div className={`mt-24 ${paddingBottom}`}>
      <div className="h-60 px-8 xl:px-24 2xl:px-48">
        <div
          className="border border-black grid md:grid-cols-2 lg:grid-cols-3 2xl:gap-16 2xl:px-14 py-14"
          ref={divRef}
        >
          {isInView && (
            <>
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-8xl font-train text-[#2C4549]">
                  {counts.guests}K
                </h1>
                <h2 className="text-gray-400 text-lg">
                  Guests Have Stayed At Our Hotel
                </h2>
              </div>
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-8xl font-train text-[#2C4549]">
                  {counts.countries}+
                </h1>
                <h2 className="text-gray-400 text-lg">
                  Countries We Have Guests From
                </h2>
              </div>
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-8xl font-train text-[#2C4549]">
                  {counts.rooms}+
                </h1>
                <h2 className="text-gray-400 text-lg">Rooms Available</h2>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="relative mt-52 lg:mt-0 border border-white">
        <div className="overflow-hidden whitespace-nowrap mt-36 2xl:mt-72 hidden md:block">
          <div className="flex animate-marquee">
            <h1 className="font-tourney text-9xl flex-shrink-0 ">
              Quality Living In DaHotel Luxury Hotel /Quality Living In DaHotel
              Luxury Hotel /
            </h1>
            <h1 className="font-tourney text-9xl flex-shrink-0">
              Quality Living In DaHotel Luxury Hotel /Quality Living In DaHotel
              Luxury Hotel /
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="images/about.jpg "
            className="absolute lg:w-4/5 border top-0"
          />
        </div>

        <div className=" xl:flex justify-center items-center w-48 h-48 border-[#2C4549] border-b-[14px] border-r-[10px] rounded-full xl:mt-24 2xl:mt-44 absolute 2xl:right-44 xl:right-36 bg-white animate-bounce hidden shadow-md">
          <h1 className="text-[#2C4544] text-xl font-semibold">
            Since From 2000
          </h1>
        </div>
      </div>
    </div>
  );
}

export default OurRating;
