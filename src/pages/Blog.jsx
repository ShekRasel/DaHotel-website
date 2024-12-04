import React from "react";
import TopBanner from "./../common components/components/TopBanner";
import { MdPeople } from "react-icons/md";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import { BiSolidMessage } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

function Blog() {
  const BlogPost = [
    {
      img: "hotel images/blogImage1.avif",
      creator: "By Admin",
      date: "July 29,2024",
      coments: "No Comments",
      header:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
    {
      img: "hotel images/blogImage2.avif",
      creator: "By Admin",
      date: "July 10,2022",
      coments: "No Comments",
      header:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
    {
      img: "hotel images/blogImage3.avif",
      creator: "By Admin",
      date: "May 29,2024",
      coments: "No Comments",
      header:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
  ];
  return (
    <div>
      <TopBanner blog={"Blog"} />
      <div className="px-4 md:px-14 lg:px-14 xl:px-28 2xl:px-64 py-24 flex flex-col lg:flex-row font-firsSans tracking-wide gap-8">
        <div className="lg:w-3/5 flex flex-col gap-10">
          {BlogPost.map((blog) => (
            <div className="border">
              <img
                src={blog.img}
                alt="hotel image"
                className="h-80 md:h-96 lg:h-[600px] w-full"
              />
              <div className="px-6 pb-4">
                <div className="mt-6 md:flex gap-6">
                  <span className="flex gap-2 items-center">
                    <MdPeople /> {blog.creator}
                  </span>
                  <span className="flex gap-2 items-center">
                    <PiCalendarDotsDuotone /> {blog.date}
                  </span>
                  <span className="flex gap-2 items-center">
                    <BiSolidMessage /> {blog.coments}
                  </span>
                </div>
                <h1 className="text-2xl mt-8">{blog.header}</h1>
                <p className="mt-8">{blog.description}</p>
                <h1 className="mt-8 text-xl tracking-wider">READ MORE </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-2/5  flex flex-col gap-10">
          <div className="bg-gray-300 p-10">
            <h1 className="text-2xl font-semibold text-[#2C4549]">Search</h1>
            <div className="flex mt-6">
              <input
                type="text"
                className="p-4 text-gray-700 outline-none border w-full border-black"
                placeholder="Search..."
              />
              <button className="bg-[#2C4549] text-white p-4 px-6">
                Search
              </button>
            </div>
          </div>
          <div className="bg-gray-300 p-10 ">
            <h1 className="text-2xl font-semibold text-[#2C4549]">Search</h1>
            <div className="flex flex-col items-center">
              <img
                src="hotel images/person1.avif"
                alt=""
                className="w-20 rounded-full h-20 mt-4"
              />
              <h1 className="mt-4">Rosalina D. Williaimson</h1>
              <p className="mt-4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
          <div className="bg-gray-300 p-10">
            <h1 className="text-2xl font-semibold text-[#2C4549]">
              Recent Posts
            </h1>
            <div className="flex gap-5 mt-4 border-b pb-4">
              <img
                src="hotel images/blogImage1.avif"
                alt=""
                className="w-24 h-24"
              />
              <div className="">
                <h1>Cras accusmsan nulla nec lacus</h1>
                <h1>ultitrices placerat</h1>
                <h1>July 29, 2024</h1>
              </div>
            </div>
            <div className="flex gap-5 mt-4 border-b pb-4">
              <img
                src="hotel images/blogImage2.avif"
                alt=""
                className="w-24 h-24"
              />
              <div className="">
                <h1>Cras accusmsan nulla nec lacus</h1>
                <h1>ultitrices placerat</h1>
                <h1>July 29, 2024</h1>
              </div>
            </div>
            <div className="flex gap-5 mt-4 border-b pb-4">
              <img
                src="hotel images/blogImage3.avif"
                alt=""
                className="w-24 h-24"
              />
              <div className="">
                <h1>Cras accusmsan nulla nec lacus</h1>
                <h1>ultitrices placerat</h1>
                <h1>July 29, 2024</h1>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 p-4 md:p-10">
            <h1 className="text-2xl font-semibold text-[#2C4549]">Follow Us</h1>
            <div className="mt-8 flex text-2xl gap-4">
              <span className="border rounded-full p-3 hover:shadow-md border-[#2C4549]">
                <FaFacebookF />
              </span>
              <span className="border rounded-full p-3 hover:shadow-md border-[#2C4549]">
                <FaTwitter />
              </span>
              <span className="border rounded-full p-3 hover:shadow-md border-[#2C4549]">
                <CiInstagram />
              </span>
              <span className="border rounded-full p-3 hover:shadow-md border-[#2C4549]">
                <CiLinkedin />
              </span>
            </div>
          </div>
          <div className="bg-gray-300 p-10">
            <h1 className="text-2xl font-semibold text-[#2C4549]">
              Categories
            </h1>
            <div className="flex justify-between border-b pb-2 mt-4">
              <h1 className="hover:translate-x-4 transition-all">resort</h1>
              <h1>(1)</h1>
            </div>
            <div className="flex justify-between border-b pb-2 mt-4">
              <h1 className="hover:translate-x-4 transition-all">spa</h1>
              <h1>(3)</h1>
            </div>
            <div className="flex justify-between border-b pb-2 mt-4">
              <h1 className="hover:translate-x-4 transition-all">tourism</h1>
              <h1>(1)</h1>
            </div>
            <div className="flex justify-between border-b pb-2 mt-4">
              <h1 className="hover:translate-x-4 transition-all">travel</h1>
              <h1>(2)</h1>
            </div>
            <div className="flex justify-between border-b pb-2 mt-4">
              <h1 className="hover:translate-x-4 transition-all">
                Uncategorized
              </h1>
              <h1>(30)</h1>
            </div>
            <div className="flex justify-between border-b pb-2 mt-4">
              <h1 className="hover:translate-x-4 transition-all">vacation</h1>
              <h1>(3)</h1>
            </div>
          </div>
          <div className="bg-gray-300 px-2 py-10 sm:p-10">
            <h1 className="text-2xl font-semibold text-[#2C4549]">Tags</h1>
            <div className="mt-8">
              <div className="flex gap-4">
                <button className="border border-black px-4 py-2">
                  Resort
                </button>
                <button className="border border-black px-4 py-2">Spa</button>
                <button className="border border-black px-4 py-2">
                  Tourism
                </button>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="border border-black px-4 py-2">
                  Travel
                </button>
                <button className="border border-black px-4 py-2">
                  Vacation
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Blog;
