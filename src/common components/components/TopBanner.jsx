import React from "react";
import topBanner from "../../../public/hotel images/topbanner.avif";
import { Link } from 'react-router-dom';

function TopBanner({ About, OurRooms,contact,blog,gallery,ourteam,pricing }) {
  return (
    <div
      className="flex bg-gray-500 justify-center items-center min-h-[200px] mt-16 xl:min-h-[400px] 2xl:min-h-[500px] tracking-wide bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${topBanner})` }}
    >
      <div className="text-green-900 font-roboto font-semibold cursor-pointer">
        <h1 className=" text-4xl lg:text-6xl">
          {About}
          {OurRooms}
          {contact}
          {blog}
          {gallery}
          {ourteam}
          {pricing}
        </h1>
        <div className="flex text-2xl mt-8 gap-4">
          <Link to={'/'}><h1>Home</h1></Link>
          <h1>|</h1>
          <h1>
            {About}
            {OurRooms}
            {contact}
            {blog}
            {gallery}
            {ourteam}
            {pricing}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
