function FeatureSection({ marginT }) {
  const features = [
    {
      icon: "icons/fe-icon01.png",
      header: "Restaurants",
      description:
        "Visitors to your city need to eat. In fact, some people visit new towns specifically for the food. Use your insider",
    },
    {
      icon: "icons/fe-icon02.png",
      header: "Luxury Room",
      description:
        "Visitors to your city need to eat. In fact, some people visit new towns specifically for the food. Use your insider",
    },
    {
      icon: "icons/fe-icon03.png",
      header: "Entertainment",
      description:
        "Visitors to your city need to eat. In fact, some people visit new towns specifically for the food. Use your insider",
    },
    {
      icon: "icons/fe-icon04.png",
      header: "Pool Area",
      description:
        "Visitors to your city need to eat. In fact, some people visit new towns specifically for the food. Use your insider",
    },
    {
      icon: "icons/fe-icon05.png",
      header: "Cocktail Bar",
      description:
        "Visitors to your city need to eat. In fact, some people visit new towns specifically for the food. Use your insider",
    },
    {
      icon: "icons/fe-icon06.png",
      header: "Tour Guide",
      description:
        "Visitors to your city need to eat. In fact, some people visit new towns specifically for the food. Use your insider",
    },
  ];
  return (
    <div
      className={`px-4 md:px-14  ${marginT} lg:mt-0 lg:pt-52 lg:flex lg:px-8 xl:px-24 2xl:px-44 lg:gap-10 2xl:gap-28`}
    >
      <div className="flex flex-col items-center  lg:w-1/4 lg:sticky top-44 h-28">
        <h2 className="text-[#848484]">WHY CHOOSE US</h2>
        <h1 className="text-5xl text-[#2C4549] font-updock mt-4 xl:text-6xl text-center">
          Why choose us
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-14 lg:mt-0 lg:w-3/4 xl:w-3/5">
        {features.map((feature, index) => (
          <div
            className="border p-6 2xl:p-10  hover:border-white hover:shadow-md transition-all duration-1000 ease-out"
            key={index}
          >
            <img src={feature.icon} alt="" />
            <h1 className="text-[#2C4549] text-2xl mt-3 font-semibold">
              {feature.header}
            </h1>
            <p className="text-gray-500 mt-3 font-firsSans">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
