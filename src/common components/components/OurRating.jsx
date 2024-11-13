import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

function OurRating({paddingBottom}) {
  const divRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        // Check if the top of the div is within the viewport
        if (rect.top <= window.innerHeight * 0.75) {
          setIsInView(true);
        }
      }
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on component mount

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [divRef]);

  return (
    <div className={`mt-24 ${paddingBottom}`}>
      <div className="h-60 px-8 xl:px-24 2xl:px-48">
        <div
          className="border-t border-black grid md:grid-cols-2 lg:grid-cols-3 2xl:gap-16 2xl:px-14 py-14"
          ref={divRef}
        >
          {isInView && (
            <>
              <div className="flex flex-col items-center gap-4">
                <CountUp start={0} end={90} duration={2} suffix="K">
                  {({ countUpRef }) => (
                    <h1
                      ref={countUpRef}
                      className="text-8xl font-train text-[#2C4549]"
                    />
                  )}
                </CountUp>
                <h2 className="text-gray-400 text-lg">
                  Guests Have Stayed At Our Hotel
                </h2>
              </div>
              <div className="flex flex-col items-center gap-4">
                <CountUp start={0} end={152} duration={2} suffix="+">
                  {({ countUpRef }) => (
                    <h1
                      ref={countUpRef}
                      className="text-8xl font-train text-[#2C4549]"
                    />
                  )}
                </CountUp>
                <h2 className="text-gray-400 text-lg">
                  Countries We Have Guests From
                </h2>
              </div>
              <div className="flex flex-col items-center gap-4">
                <CountUp start={0} end={221} duration={2} suffix="+">
                  {({ countUpRef }) => (
                    <h1
                      ref={countUpRef}
                      className="text-8xl font-train text-[#2C4549]"
                    />
                  )}
                </CountUp>
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
           <h1 className="text-[#2C4544] text-xl font-semibold">Since From 2000</h1>
        </div>
      </div>
    </div>
  );
}

export default OurRating;
