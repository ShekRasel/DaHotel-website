import React from "react";
import topBanner from '../../../public/hotel images/topbanner.avif'

function TopBanner({ About }) {
  return (
    <div
      className="flex bg-gray-500 justify-center items-center min-h-[200px]  mt-16 xl:min-h-[400px] 2xl:min-h-[500px] tracking-wide bg-cover bg-center bg-no-repeat"
       style={{backgroundImage : `url(${topBanner})`,}}   
        
    >
      <div className="text-white font-roboto font-semibold">
        <h1 className=" text-4xl lg:text-6xl">{About}</h1>
        <h1 className="mt-10 lg:flex gap-4 text-2xl hidden">
          Home <span>|</span> <span>{About}</span>
        </h1>
      </div>
    </div>
  );
}

export default TopBanner;
