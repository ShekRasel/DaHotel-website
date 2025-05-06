import { useState } from "react";
import TopBanner from "../components/TopBanner";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

function OurTeam() {
  const [social, setSocial] = useState(null);

  const teamMembers = [
    { image: "team membes/worker 1.avif", name: "Babeloe", type: "Worker" },
    {
      image: "team membes/worker 2.avif",
      name: "Dawon Crisen",
      type: "bartender",
    },
    {
      image: "team membes/worker 3.avif",
      name: "David Suarez",
      type: "Manager",
    },
    {
      image: "team membes/worker 4.avif",
      name: "Gerard Peano",
      type: "Worker",
    },
    {
      image: "team membes/worker 5.avif",
      name: "Davite",
      type: "General Maneger",
    },
    {
      image: "team membes/worker 6.avif",
      name: "Colins Robot",
      type: "Worker",
    },
    { image: "team membes/worker 7.avif", name: "Ositn Green", type: "Worker" },
    {
      image: "team membes/worker 8.avif",
      name: "Norman Colins",
      type: "Worker",
    },
  ];
  return (
    <div>
      <TopBanner ourteam={"Our Team"} />
      <div className="mt-16 lg:mt-24 px-10 lg:24 2xl:px-52 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-16 lg:px-24 justify-center">
          {teamMembers.map((member, index) => (
            <div
              className="font-roboto relative border"
              key={index}
              onMouseEnter={() => setSocial(index)}
              onMouseLeave={() => setSocial(null)}
            >
              <img
                src={member.image}
                alt=""
                className="h-72 w-full object-cover object-top"
              />

              <div
                className={`flex gap-3 text-xl text-white justify-center absolute bottom-10 w-full transition-all ease-in-out duration-500 opacity-0  ${
                  social === index && "-translate-y-10 opacity-100"
                }`}
              >
                <span className=" rounded-full p-2 bg-[#2C4549] ">
                  <FaFacebookF />
                </span>
                <span className=" rounded-full p-2 bg-[#2C4549] ">
                  <FaInstagram />
                </span>
                <span className=" rounded-full p-2 bg-[#2C4549] ">
                  <FaTwitter />
                </span>
              </div>

              <div className="mt-7 text-[#2C4549] flex flex-col items-center">
                <h1 className="text-2xl font-serif font-semibold">
                  {member.name}
                </h1>
                <h1 className=" mt-2">{member.type}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
