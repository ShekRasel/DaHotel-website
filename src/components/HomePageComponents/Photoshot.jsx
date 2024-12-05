import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Photoshot() {
  const [hoverElement, setHoverElement] = useState('');
  const [elementIndex, setElementIndex] = useState(0);
  const hoverElem = [
    { element: "Cafe & Wine Bar", id: 'element1' },
    { element: "Spa & Wellness", id: 'element2' },
    { element: "Restaurant", id: 'element3' },
    { element: "Meetings & Events", id: 'element4' },
  ];
  const images = {
    element1: "images/party1.avif",
    element2: "images/party2.avif",
    element3: "images/party3.avif",
    element4: "images/party4.avif",
  };

  return (
    <div className="py-24 flex justify-center items-center bg-gray-100 lg:px-10 2xl:px-44">
      <div className="flex flex-col lg:flex-row gap-14 lg:gap-0">

        <div className="lg:w-3/5 order-2 lg:order-1">
          {hoverElem.map((elem, index) => (
            <div
              className=""
              key={index}
              onMouseEnter={() => {
                setHoverElement(elem.id);
                setElementIndex(index);
              }}
            >
              <div className="flex items-center justify-between md:px-10 border-b">
                <h1 className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold border-b px-4 py-4 md:py-7 text-[#2C4549] hover:translate-x-2 hover:md:translate-x-8 transition-all duration-500 flex gap-2 md:gap-5 font-firsSans items-center">
                  {elementIndex === index && <FaLongArrowAltRight />}
                  {elem.element}
                </h1>

                {elementIndex === index && <h2 className="font-roboto text-green-600">Start from $100</h2>}
              </div>
            </div>
          ))}
        </div>

        <div className="md:px-10 xl:w-3/5 order-1">
          <div className="relative">
            <img
              src={images[hoverElement]}
              alt=""
              className={`transition-all duration-500 ease-in-out transform ${hoverElement ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            />
            <img
              src="images/party3.avif"
              alt=""
              className={`${hoverElement && 'hidden opacity-0'}`}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Photoshot;
