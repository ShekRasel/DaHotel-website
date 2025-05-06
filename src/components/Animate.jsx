import { useEffect, useState } from "react";

function Animate() {
  const [state, setState] = useState(0);

  useEffect(() => {
    const slideIterval = setInterval(() => {
      setState((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(slideIterval);
  }, []);

  const services = [
    {
      img: "images/photo2.avif",
      head: "/Wifi bed Water House/",
    },
    {
      img: "images/photo3.avif",
      head: "/Free Wifi Zone/",
    },
    {
      img: "images/premium_photo-1676321688607-2d18ba129dbd.avif",
      head: "/Luxuary Bed Foods/",
    },
    {
      img: "images/premium_photo-1676321688607-2d18ba129dbd.avif",
      head: "/Comfort Every Where/",
    },
  ];

  return (
    <div className="mt-24 bg-[#2C4549] py-10  overflow-hidden">
      <div className="flex justify-center">
        <div className="flex">
          {services.map((service, index) => (
            <div
              key={index}
              className=" flex-shrink-0 w-full flex flex-col items-center relative transition-all ease-in-out duration-500 "
              style={{ transform: `translateX(-${state * 100}%)` }}
            >
              <img src={service.img} alt="" className="w-56 md:w-96" />
              <h1
                className={`text-center text-4xl md:text-6xl xl:text-8xl text-white font-bold absolute top-1/2 ${
                  index === 1 && "font-tourney text-yellow-600"
                } ${index === 2 && "font-train"} ${
                  index === 3 && "font-train text-blue-400"
                }`}
              >
                {service.head}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animate;
