import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Checking from "../../common components/components/Checking";

function Hero() {
  const [translate, setTranslate] = useState(false);
  useEffect(() => {
    setTranslate(true);
  }, []);
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(images/pexels-boonkong-boonpeng-442952-1134176.jpg)",
      }}
    >
      <div className=" relative">
        <div className="h-[800px] xl:h-[900px]  flex relative">
          <div
            className={`flex flex-col justify-center items-center 2xl:mt-16 w-full transform  transition-all ease-out duration-1000 ${
              translate ? "-translate-y-10 opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="font-semibold lg:text-xl text-[#2C4549] font-roboto">
              LUXURY HOTEL & BEST RESORT
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mt-6 text-gray-700 font-roboto tracking-wide">
              Enjoy A Luxuray
            </h1>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl mt-4 lg:mt-8 font-updock">
              Experience
            </h1>

            <div className="py-1 border-t border-b  border-black  mt-20  hover:border-none">
              <Link to={"/ourrooms"}>
                <button className="border font-roboto lg:text-lg px-6 md:px-14 py-4 bg-white border-black transition-all  hover:bg-[#2C4549] hover:text-white ">
                  BOOK A SEAT
                </button>
              </Link>
            </div>
          </div>

          <div className="h-full bg-[#2C4549] w-20 absolute right-0 hidden lg:block text-white">
            <div className=" flex flex-col gap-4 text-xl items-center pt-24 pb-4 h-full relative">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
              <span>
                <FaYoutube />
              </span>
              <span>
                <FaTwitter />
              </span>

              <span className="rotate-90 bottom-36 absolute whitespace-nowrap">
                {" "}
                info@dahotel.com +(123) 456 789
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto px-8  absolute  left-1/2 transform -translate-x-1/2 -bottom-[550px] lg:-bottom-24">
          <Checking />
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
