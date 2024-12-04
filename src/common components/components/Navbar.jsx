import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
  const [stickyNav, setStickyNav] = useState(false);
  const [hamBurger, setHamburger] = useState(false);
  const [subMenu, setSubMenu] = useState();
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  const openMobileSubMenu = (index) => {
    setMobileSubMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  const afterScrollSticky = () => {
    if (window.scrollY >= 250) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", afterScrollSticky);
    return () => {
      window.removeEventListener("scroll", afterScrollSticky);
    };
  }, []);

  const navlinks = [
    { link: "Home", path: "/" },
    { link: "About", path: "about" },
    { link: "Our Rooms", path: "ourrooms" },
    { link: "Pages", text: "+", minus: "-" },
    { link: "Facilities", text: "+", minus: "-" },
    { link: "Blog", path: "blogs" },
    { link: "Contact Us", path: "contact" },
  ];
  return (
    <header
      className={` text-white  w-full absolute  items-center top-0   ease-out transition-all duration-500 ${
        stickyNav ? "sticky top-0 z-50" : "z-50"
      }`}
    >
      <div className="px-4 md:px-10 xl:px-20 bg-[#2C4549]">
        <div className="flex justify-between w-full  py-3 items-center  ">
          <div>
            <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold italic">
              Da<span className="font-charm">Hotel</span>
            </h1>
          </div>

          <div className="lg:flex gap-7 2xl:gap-10 hidden relative">
            {navlinks.map((navlink, index) => (
              <div
                className=""
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                onMouseLeave={() => setSubMenu(null)}
              >
                <h1 className="text-lg font-firsSans">
                  <Link to={navlink.path || "#"}>{navlink.link}</Link>
                </h1>
                {subMenu === 3 && (
                  <div
                    className=" absolute  cursor-pointer font-roboto tracking-wider text-xl  text-black left-1/3 "
                    onMouseEnter={() => setSubMenu(3)}
                    onMouseLeave={() => setSubMenu(null)}
                  >
                    <div className="bg-white rounded-sm py-4 mt-7">
                      <h1 className="pr-36 px-6 py-4">
                        <Link to={"/gallery"}>Gallary</Link>
                      </h1>
                      <h1 className="pr-36 px-6 py-4 border-t">
                        <Link to={"/team"}>Our Team</Link>
                      </h1>
                      <h1 className="pr-36 px-6 py-4 border-t">
                        <Link to={"/price"}>Pricing</Link>
                      </h1>
                      <h1 className="pr-36 px-6 py-4 border-t">
                        <Link to={"/faq"}>FAQ</Link>
                      </h1>
                    </div>
                  </div>
                )}
                {subMenu === 4 && (
                  <div
                    className=" absolute top-full cursor-pointer font-roboto tracking-wider text-xl  text-black left-1/3 "
                    onMouseEnter={() => setSubMenu(4)}
                    onMouseLeave={() => setSubMenu(null)}
                  >
                    <div className="bg-white rounded-sm py-4 mt-7">
                      <h1 className="pr-36 px-6 py-4 ">
                        <Link to={"/services"}>OurServices</Link>
                      </h1>
                      <h1 className="pr-36 px-6 py-4 border-t">
                        <Link to={"/servicesDetails"}>Service Details</Link>
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="bg-white text-black px-14 2xl:px-20 py-4 outline-none hover:bg-[#2C4549] hover:text-white ease-out transition-all duration-500 border text-lg hidden lg:block font-firsSans">
            RESERVATION
          </button>

          {/*mobile nav start  */}
          <div
            className="text-2xl border lg:hidden p-2"
            onClick={() => setHamburger(!hamBurger)}
          >
            {hamBurger ? <RxCross2 /> : <FaBars />}
          </div>
        </div>
      </div>

      <div
        className={` lg:hidden transition-all px-4 md:px-10 ease-out duration-500 overflow-hidden text-black ${
          hamBurger ? "max-h-[500px] " : "max-h-0"
        }`}
      >
        <div className="w-full h-full bg-white p-8 pt-0 pb-0 shadow-lg border-b">
          {navlinks.map((navlink, index) => (
            <div
              className=" border-t py-2 sm:py-3 "
              key={index}
              onClick={() => openMobileSubMenu(index)}
            >
              <div className="flex justify-between">
                <h1 className={`text-lg font-firsSans`}>
                  <Link
                    to={navlink.path || "#"}
                    onClick={() => {
                      if (index !== 3 && index !== 4) {
                        setHamburger(!hamBurger);
                      }
                    }}
                  >
                    {navlink.link}
                  </Link>
                </h1>
                <h1 className="font-bold">
                  {mobileSubMenu === index ? navlink.minus : navlink.text}
                </h1>
              </div>

              <div
                className={`${
                  mobileSubMenu === index ? "max-h-40" : "max-h-0"
                } transition-all ease-out duration-500 overflow-hidden`}
              >
                <div>
                  {navlink.link === "Pages" && (
                    <div className="font-bold text-gray-500 flex flex-col gap-2 font-roboto py-2 px-10">
                      <h1 className="" onClick={() => setHamburger(!hamBurger)}>
                        <Link to={"/gallery"}>Gallary</Link>
                      </h1>
                      <h1 className="" onClick={() => setHamburger(!hamBurger)}>
                        <Link to={"/team"}>Our Team</Link>
                      </h1>
                      <h1 className="" onClick={() => setHamburger(!hamBurger)}>
                        <Link to={"/price"}>Pricing</Link>
                      </h1>
                      <h1 className="" onClick={() => setHamburger(!hamBurger)}>
                        <Link to={"/faq"}>FAQ</Link>
                      </h1>
                    </div>
                  )}

                  {navlink.link === "Facilities" && (
                    <div className="font-bold text-gray-500 flex flex-col gap-2 font-roboto py-2 px-10">
                      <h1 className="" onClick={() => setHamburger(!hamBurger)}>
                        <Link to={"/services"}>OurServices</Link>
                      </h1>
                      <h1 className="" onClick={() => setHamburger(!hamBurger)}>
                        <Link to={"/servicesDetails"}>Service Details</Link>
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
