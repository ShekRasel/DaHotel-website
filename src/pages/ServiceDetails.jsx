import React from "react";
import TopBanner from "./../common components/components/TopBanner";
import { TfiArrowRight } from "react-icons/tfi";

function ServiceDetails() {
  return (
    <div className="">
      <TopBanner restaurants="Restaurants" />
      <div className="px-8 md:px-10 lg:px-24 2xl:px-72 flex flex-col lg:flex-row gap-10  font-roboto mt-14">
        <div className="lg:w-1/3 ">
          <div className="p-6 bg-slate-100">
            <h1 className="text-2xl font-bold">Service List</h1>
            <div className="mt-3 flex justify-between pl-4 hover:bg-[#2C4549] hover:text-white border bg-white items-center">
              <h1>Qualty Room</h1>
              <span className="border p-4 bg-slate-200 ">
                <TfiArrowRight />
              </span>
            </div>
            <div className="mt-3 flex justify-between pl-4 hover:bg-[#2C4549] hover:text-white border bg-white items-center">
              <h1>Privet Beatch</h1>
              <span className="border p-4 bg-slate-200 ">
                <TfiArrowRight />
              </span>
            </div>
            <div className="mt-3 flex justify-between pl-4 hover:bg-[#2C4549] hover:text-white border bg-white items-center">
              <h1>Best Accommodation</h1>
              <span className="border p-4 bg-slate-200 ">
                <TfiArrowRight />
              </span>
            </div>
            <div className="mt-3 flex justify-between pl-4 hover:bg-[#2C4549] hover:text-white border bg-white items-center">
              <h1>Wellness & Spa</h1>
              <span className="border p-4 bg-slate-200 ">
                <TfiArrowRight />
              </span>
            </div>
            <div className="mt-3 flex justify-between pl-4 hover:bg-[#2C4549] hover:text-white border bg-white items-center">
              <h1>Restaurants & Bars</h1>
              <span className="border p-4 bg-slate-200 ">
                <TfiArrowRight />
              </span>
            </div>
          </div>

          <div className="mt-12 bg-[#2C4549] text-white p-10 text-3xl font-semibold">
            <h1 className="text-center">If You Need Any Help Contact Us</h1>
            <h1 className="mt-6 text-center">+91705210214</h1>
          </div>
        </div>
        <div className="lg:w-2/3  font-roboto tracking-wide text-gray-500">
          <h1 className="text-green-950 text-3xl">We give the best Services</h1>
          <p className="mt-2">
            Pleasure and praising pain was born and I will give you a complete
            account of the systems, and expound the actually teachings of the
            great explorer of the truth, the master-builder of human uts
            happiness. No one rejects, dislikes, or avoids pleasure itself,
            because it is pleasure, but because those who do not know how to
            pursue pleasure rationally Nor who loves or pursues or desires to
            obtain pain of itself.
          </p>

          <div className="mt-5 flex gap-4">
            <img
              src="hotel images/room-img04.png"
              alt=""
              className="w-1/2 h-1/2"
            />
            <img
              src="hotel images/room-img06.png"
              alt=""
              className="w-1/2 h-1/2"
            />
          </div>
          <h1 className="text-3xl mt-8">Why Choose This Service</h1>
          <p className="mt-4">
            Complete account of the systems and expound the actually teachings
            of the great explorer of the truth, the master-builder of human uts
            happiness. No one rejects, dislikes, or avoids pleasure itself,
            because it is pleasure, but because those who do not know how to
            pursue pleasure rationally encounter consequences that are
            extremely. Complete account of the systems and expound the actually
            teachings of the great explorer of the truth, the master-builder of
            human uts happiness. No one rejects, dislikes, or avoids pleasure
            itself, because it is pleasure, but because those who do not know
            how to pursue pleasure rationally.
          </p>
          <h1 className="text-3xl mt-8">We guarantee to deliver</h1>
          <p className="mt-4">
            Quam parturient mi amet curae augue varius laoreet vehicula non sem
            aliquet lectus justo litora fames estab phasellus risus ad
            sollicitudin magna Viverra diam pretium cursus curabitur parturient
            convallis hymenaeos suspendisse nibh facilisi purus penatibus
            habitasse mus orcine muscle adipiscing sapien aliquam nulla. Erat
            parturient auctor facilisis. Nisi cum fringilla hymenaeos ridiculus
            habitasses augue nullam fringilla. Taciti convallis. Vitae sapien
            nisi enim vis metus cras fusce lectus sed luctus quis Clas nisl
            blandit parturient molestie praesent nec
          </p>
          <img
              src="hotel images/room-img06.png"
              alt=""
              className="mt-4"
            />
            <p className="mt-8">Phasellus hac phasellus consequat malesuada veler aliquam dictumst amet a phasellus lacinia integer curabitur duis. Urna taciti nisl torquent varius libero dui. Tempus magnis libero pulvinar purus pharetra justo sem curae duis eget tempus erat ornare. Consequat litora a blandit fermentum. Quam taciti site nascetur nunc litora quis tempor metus adipiscing ac quis sodales ultrices cubilia. Arcu in penatibus vestibulum diam. Curabitur platea quam fusce molestie venenatis platea ligula in aenean gravida dolor aptent nostra luctus rutrum morbi porttitor cursus</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
