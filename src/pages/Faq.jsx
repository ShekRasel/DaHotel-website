import React, { useState } from "react";
import TopBanner from "./../common components/components/TopBanner";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function Faq() {
  const [showFaq, setShowFaq] = useState(null);
  const faqs = [
    { head: "Breaking The Rules Using SQLite To Demo Web" },
    { head: "Monthly Web Development Update Pragmatic Realeasing" },
    { head: "How to use Underlined Text to imporve User Experience" },
    { head: "Understanding CSS Layout and the block formating" },
  ];
  return (
    <div>
      <TopBanner faq="FAQ" />
      <div className="lg:flex px-4 md:px-14 lg:px-28 2xl:px-72 mt-14 lg:mt-24 gap-8">
        <div className="lg:w-1/2">
          <img src="hotel images/room-img03.png" alt="room" />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-8 ">
          {faqs.map((faq, index) => (
            <div className={`'border'}`}>
              <div
                className="flex w-full items-center shadow-md justify-between pl-2  font-roboto text-xl text-[#2C4549]"
                key={index}
              >
                <h1>{faq.head}</h1>
                <span
                  className="text-white text-2xl p-4 pl-6 bg-[#2C4549] ease-in-out transition-all duration-500"
                  onClick={() => setShowFaq(index === showFaq ? null : index)}
                >
                  {index === showFaq ? <IoIosArrowDown /> : <MdArrowBackIos />}
                </span>
              </div>
              <div className={` bg-slate-200 ease-in-out transition-all duration-500 overflow-hidden ${index === showFaq ? 'max-h-96': 'max-h-0'}`}>
                <p className="py-10 px-10 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ea officia explicabo quo saepe blanditiis, magni recusandae aliquam voluptates facilis!</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
