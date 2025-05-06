function CompanyBlog() {
  const blogs = [
    {
      img: "hotel room/c1.avif",
      date: "July 29, 2024",
      approver: "By Admin",
      header: "Cras Accumsan nulla nec lacus ultricies placerat",
      button: "Read More",
    },
    {
      img: "hotel room/c3.avif",
      date: "July 29, 2024",
      approver: "By Admin",
      header: "Cras Accumsan nulla nec lacus ultricies placerat",
      button: "Read More",
    },
    {
      img: "hotel room/c2.avif",
      date: "July 29, 2024",
      approver: "By Admin",
      header: "Cras Accumsan nulla nec lacus ultricies placerat",
      button: "Read More",
    },
  ];
  return (
    <div className="mt-24 px-4 md:px-8 lg:px-14 2xl:px-72">
      <div className="flex flex-col items-center font-roboto font-semibold">
        <h2>OUR BLOG</h2>
        <h1 className="mt-8 text-4xl  text-[#2C4549]  tracking-wide">
          Company news <span className="font-charm">& insights</span>
        </h1>
      </div>

      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div className="pb-10 border overflow-hidden" key={index}>
            <div className=" relative ">
              <img
                src={blog.img}
                alt="image"
                className="hover:scale-110 transition-all w-full  ease-out duration-500 h-96"
              />
              <h1 className="bg-[#2C4549] font-roboto px-4 py-6 text-white absolute right-12 -bottom-8">
                {blog.date}
              </h1>
            </div>

            <div className="px-10 font-roboto font-semibold cursor-pointer">
              <h1 className="mt-20 text-gray-500 "> {blog.approver}</h1>
              <h1 className="mt-6 text-[#2C4549]  text-3xl">{blog.header}</h1>
              <h1 className="mt-9">{blog.button}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyBlog;
