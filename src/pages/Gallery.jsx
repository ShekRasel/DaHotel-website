import TopBanner from "../components/TopBanner";

function Gallery() {
  return (
    <div>
      <TopBanner gallery={"Gallery"} />
      <div className="mt-10 lg:mt-24 flex flex-col lg:flex-row ">
        <div className="lg:w-1/2 lg:flex">
          <div className="lg:w-1/2 border ">
            <img
              src="images/5 star 1.avif"
              alt=" hotel image"
              className="h-80 w-full object-cover"
            />
            <img
              src="images/5 star 2.avif"
              alt=" hotel image"
              className="h-80 w-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 border ">
            <img
              src="images/5 star 3.avif"
              alt=" hotel image"
              className="h-80 w-full object-cover"
            />
            <img
              src="images/5 star 4.avif"
              alt=" hotel image"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:w-1/2 group relative">
          <img
            src="images/5 star 5.avif"
            alt="hotels"
            className="h-80 lg:h-[640px] w-full object-cover group-hover:opacity-50 transition duration-300"
          />
          <div className="  absolute inset-0 opacity-0 group-hover:opacity-100  justify-center items-center flex transition duration-300">
            <button className="text-4xl font-bold p-3  bg-green-950 text-white">
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row ">
        <div className="lg:w-1/2 lg:flex order-2">
          <div className="lg:w-1/2 border ">
            <img
              src="images/5 star 6.avif"
              alt=" hotel image"
              className="h-80 w-full object-cover"
            />
            <img
              src="images/5 star 7.avif"
              alt=" hotel image"
              className="h-80 w-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 border ">
            <img
              src="images/5 star 8.avif"
              alt=" hotel image"
              className="h-80 w-full object-cover"
            />
            <img
              src="images/5 star 9.avif"
              alt=" hotel image"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:w-1/2  group relative">
          <img
            src="images/5 star 10.avif"
            alt="hotels"
            className="h-80 lg:h-[640px] w-full object-cover group-hover:opacity-50 transition duration-300"
          />
          <div className="  absolute inset-0 opacity-0 group-hover:opacity-100  justify-center items-center flex transition duration-300">
            <button className="text-4xl font-bold p-3  bg-green-950 text-white">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
