import React from "react";

function BookPlane() {
  return (
    <div className="px-4 md:px-10 2xl:px-64 mt-24 lg:flex gap-16">
      <div className="lg:w-1/2 relative">
        <img src="images/booking-img.png" alt="" />
        <h1 className="text-white text-3xl lg:text-5xl font-firsSans absolute bottom-28 lg:bottom-52 xl:bottom-28 font-semibold px-4 lg:px-16 ">
          Seasonal or Citywide Events
        </h1>
        <h2 className="text-gray-500 font-roboto text-xl tracking-wide absolute bottom-10 px-4 lg:px-16 lg:bottom-40 xl:bottom-14 lg:text-white xl:text-gray-500">
          What big annual or seasonal events are can't-miss
        </h2>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <h1 className="font-roboto text-3xl text-center lg:text-start md:text-5xl font-semibold text-[#2C4549]">
          Book Your Seat
        </h1>
        <div className="flex mt-10 font-roboto tracking-wider text-[#2C4549] gap-8">
          <div className="w-1/2">
            <h1>Check In Date</h1>
            <input type="date" className="mt-6 border-b pb-3 w-full"/>
          </div>
          <div className="w-1/2">
            <h1>Check Out Date</h1>
            <input type="date" className="mt-6 border-b pb-3 w-full"/>
          </div>
        </div>
        <h1 className="mt-12 font-roboto tracking-wider">Adults</h1>
        <select name="Please" id="" className="w-full border-b pb-3 mt-6 font-roboto text-[#2C4549]">
            <option  disabled selected>--Select an option--</option>
            <option defaultValue="1">1</option>
            <option defaultValue="2">2</option>
            <option defaultValue="3">3</option>
            <option defaultValue="4">4</option>
            <option defaultValue="5">5</option>
        </select>

        <h1 className="mt-12 font-roboto tracking-wider">Rooms</h1>
        <select name="Please" id="" defaultValue={'--Select an option--'} className="w-full border-b pb-3 mt-6 font-roboto text-[#2C4549]">
            <option   disabled selected>--Select an option--</option>
            <option defaultValue="1">1</option>
            <option defaultValue="2">2</option>
            <option defaultValue="3">3</option>
            <option defaultValue="4">4</option>
            <option defaultValue="5">5</option>
        </select>

        <div className="flex mt-12 font-roboto tracking-wider text-[#2C4549] gap-8">
          <div className="w-1/2">
            <h1>Your Name</h1>
            <input type="text" className="mt-6 border-b pb-3 w-full outline-none" placeholder="Name"/>
          </div>
          <div className="w-1/2">
            <h1>Phone No</h1>
            <input type="text" className="mt-6 border-b pb-3 w-full outline-none" placeholder="Phone"/>
          </div>
        </div>

        <div className="border-t border-b border-black py-1 hover:border-white mt-12">
            <button className=" border-black border px-10 py-3 hover:bg-[#2C4549] hover:text-white transition-all ease-out duration-500 tracking-wider w-full">
             BOOK TABLE NOW
            </button>
          </div>
        
      </div>
    </div>
  );
}

export default BookPlane;
