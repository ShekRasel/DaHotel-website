import React from "react";
import TopBanner from "../common components/components/TopBanner";
import { TfiTime } from "react-icons/tfi";
import { RiInboxArchiveLine } from "react-icons/ri";
import { TfiMap } from "react-icons/tfi";

function Contact() {
  return (
    <div>
      <TopBanner contact={"Contact Us"} />

      <div className=" px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-56 gap-10 items-center py-24 lg:flex font-roboto tracking-wider">
        <div className="lg:w-1/2 ">
          <div className="">
            <div className="flex gap-6 border-b pb-10 items-center">
              <div className=" rounded-full flex justify-center items-center w-20 h-20 text-4xl p-4 bg-[#2C4549] text-white ">
                <span>
                  <TfiTime />
                </span>
              </div>

              <div className="">
                <h1 className=" text-xl font-bold text-[#2C4549]">
                  Woking Our
                </h1>
                <h1 className="mt-4 font-semibold text-gray-500">
                  Monday to Friday 09:00 to 18:30
                </h1>
                <h1 className=" font-semibold text-gray-500">
                  Saturday 15:30
                </h1>
              </div>
            </div>
          </div>

          <div className=" pt-6 ">
            <div className="flex gap-6 border-b pb-10 items-center">
              <div className=" rounded-full flex justify-center items-center w-20 h-20 text-4xl p-4 bg-[#2C4549] text-white ">
                <span>
                <RiInboxArchiveLine />
                </span>
              </div>

              <div className="">
                <h1 className=" text-xl font-bold text-[#2C4549]">
                  Message Us
                </h1>
                <h1 className="mt-4 font-semibold text-gray-500">
                  support@example.com
                </h1>
                <h1 className=" font-semibold text-gray-500">
                  info@example.com
                </h1>
              </div>
            </div>
          </div>

          <div className=" pt-6 ">
            <div className="flex gap-6 border-b pb-10 items-center">
              <div className=" rounded-full flex justify-center items-center w-20 h-20 text-4xl p-4 bg-[#2C4549] text-white ">
                <span>
                <TfiMap />

                </span>
              </div>

              <div className="">
                <h1 className=" text-xl font-bold text-[#2C4549]">
                  Office Address
                </h1>
                <h1 className="mt-4 font-semibold text-gray-500">
                  380 ST Kilda Road,Melboune
                </h1>
                <h1 className=" font-semibold text-gray-500">
                  VIC 3004, Australia
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 bg-gray-400 p-4 md:p-10 2xl:p-20">
          <h1 className="text-5xl font-semibold text-[#2C4549] text-center">
            Get In Touch
          </h1>

          <form action="" className="mt-10">
            <input
              type="text"
              name=""
              id=""
              className="border-black border w-full p-4 outline-none text-gray-500 bg-white"
              placeholder="First Name"
            />
            <div className="flex justify-between gap-4 mt-4">
              <input
                type="text"
                name=""
                id=""
                className="w-full border-black border p-4 outline-none text-gray-500 bg-white"
                placeholder="Email Id"
              />
              <input
                type="text"
                name=""
                id=""
                className="w-full border-black border p-4 outline-none text-gray-500 bg-white"
                placeholder="Phone No."
              />
            </div>
            <textarea name="" id="" placeholder="Write Comments" className="mt-6 outline-none w-full h-28 border border-black p-4"></textarea>

            <button className="text-white bg-[#2C4549] p-4 w-full mt-8 font-firsSans "> Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
