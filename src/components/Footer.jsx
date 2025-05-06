import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-48 relative tracking-wide">
      <div className="lg:px-20 2xl:px-64 lg:absolute w-full lg:-top-24">
        <div className="flex flex-col lg:flex-row px-3 md:px-12 py-14 text-[#2C4549] font-roboto gap-8 bg-slate-50 items-center shadow-md">
          <div className="w-full lg:w-1/2 font-semibold">
            <h1 className=" text-center text-3xl lg:text-5xl">
              Subscribe for update
            </h1>
            <h1 className="text-xl text-center mt-4 text-gray-600">
              Subscribe us to receive market updates
            </h1>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-6 md:h-16">
            <input
              type="text"
              className="border-[#2C4549] border w-full outline-none px-6 py-3 text-gray-500"
              placeholder="Email Address"
            />

            <button className="text-white font-semibold px-7 py-3 bg-[#2C4549]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#2C4549] w-full px-10 lg:px-20 2xl:px-64">
        <div className="bg-[#2C4549]  grid md:grid-cols-2 lg:grid-cols-12 pt-10 lg:pt-60 gap-20">
          <div className="text-gray-300 font-roboto font-semibold text-xl lg:col-span-4 ">
            <h1 className="text-white text-2xl">MENU</h1>
            <p className="mt-5">
              In industry, the heartbeat of modern civilization resonates
              through the relentless pursuit of progress.
            </p>
            <h1 className="text-white text-2xl mt-8">Contact</h1>
            <h1 className="mt-10">Careers</h1>
            <h1 className="mt-6">Mon-Sat:9am to 6pm</h1>
          </div>

          <div className="font-roboto text-xl text-gray-300 lg:col-span-3">
            <h1 className="text-2xl text-white">Essential</h1>
            <h1 className="mt-4">About us</h1>
            <h1 className="mt-4">Careers</h1>
            <h1 className="mt-4">Prices</h1>
            <h1 className="mt-4">Services</h1>
            <h1 className="mt-4">Get In Touch</h1>
          </div>

          <div className="font-roboto text-xl text-gray-300 lg:col-span-3">
            <h1 className="text-2xl text-white">More Pages</h1>
            <h1 className="mt-4">Auto Production</h1>
            <h1 className="mt-4">Investors</h1>
            <h1 className="mt-4">News</h1>
            <h1 className="mt-4">FAQ s</h1>
            <h1 className="mt-4">Contact us</h1>
          </div>

          <div className="lg:col-span-2">
            <h1 className="text-2xl text-white font-roboto">More Pages</h1>
            <img src="hotel room/app-strore-btn.png" alt="" className="mt-10" />
            <img src="hotel room/gplay-btn.png" alt="" className="mt-10" />
          </div>
        </div>

        <div className=" border-t border-b border-green-800 py-4 mt-20 flex flex-col lg:flex-row justify-between">
          <div className="flex text-xl gap-10 text-gray-300 justify-center">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
          </div>
          <div className="text-white text-xl font-roboto font-semibold text-center flex gap-4 lg:gap-10 mt-10 lg:mt-0 justify-center">
            <h1>Privacy Policy</h1>
            <h1>Terms Of Service</h1>
            <h1>Legal</h1>
          </div>
        </div>

        <h1 className="text-white text-xl font-roboto font-semibold text-center mt-14 pb-12">
          Copyright © Dahotel 2024. All rights reserved..
        </h1>
      </div>
    </div>
  );
}

export default Footer;
