function PricingPlan({ price, price1, head }) {
  const prices = [
    {
      img: "images/room1.avif",
      category: "LUXURY PLAN",
      price: "$70",
    },
    {
      img: "images/room2.avif",
      category: "COUPLE PLAN",
      price: "$99",
    },
    {
      img: "images/room3.avif",
      category: "INTRO PRICE",
      price: "$290",
    },
  ];
  return (
    <div className="px-4 md:px-10 2xl:px-64 mt-24">
      <h2 className="font-roboto text-gray-500 text-xl text-center">
        {price1}
        {price}
      </h2>
      <h1 className="text-[#2C4549] font-semibold text-4xl lg:text-6xl text-center mt-6 font-roboto">
        {head}
      </h1>
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prices.map((price, index) => (
          <div
            className=" pb-14 flex flex-col items-center shadow-md font-roboto tracking-wider"
            key={index}
          >
            <div className="relative">
              <img src={price.img} alt="" />
              <h1 className="bg-white rounded-full px-12 md:px-6 2xl:px-12 py-3 shadow-md absolute -bottom-4 left-1/2 -translate-x-1/2">
                {price.category}
              </h1>
            </div>
            <h1 className="text-5xl mt-10 font-train text-[#2C4549]">
              {price.price}
            </h1>
            <h2 className="text-lg mt-3 text-[#2C4549]">/per Night</h2>
            <h1 className="mt-6 text-gray-400">Safe & Secure Services</h1>
            <h1 className="mt-3 text-gray-400">Room Fast Cleaning</h1>
            <h1 className="mt-3 text-gray-400">Drinks is Include</h1>
            <h1 className="mt-3 text-gray-400">Room Breakfast</h1>

            <div className="border-t border-b border-black py-1 hover:border-white mt-12">
              <button className=" border-black border px-10 py-3 hover:bg-[#2C4549] hover:text-white transition-all ease-out duration-500 tracking-wider">
                PURCHASE NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlan;
