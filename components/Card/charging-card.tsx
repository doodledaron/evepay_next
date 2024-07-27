import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const ChargingCard = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl">
      {/* <Image src="/cybertruck.png" alt="Main Page" width={421} height={396} className="relative z-20" />
      <Image src="/radial-dot-bg.png" alt="Main Page" width={100} height={100} className="absolute top-28 left-0 w-full z-10" /> */}

      <div className="relative inline-block">
        <Image
          src="/cybertruck.png"
          alt="Main Page"
          width={421}
          height={396}
          className="relative z-20"
        />
        <Image
          src="/radial-dot-bg.png"
          alt="Main Page"
          width={300}
          height={100}
          className="absolute -top-2.5 left-0 w-[370px] h-[350px] z-10"
        />
      </div>

      <div className="grid grid-rows-2 grid-flow-col gap-4 px-6 py-4">
        <div className="col-span-2 font-bold text-base text-gray">
          Plug Connected
          <p className="text-black text-lg">Charging...</p>
        </div>
        <div className="row-span-2">
          <Icon
            icon="ph:charging-station-bold"
            style={{ color: "#72ACA9", fontSize: "52px" }}
            className="float-end me-2"
          />
        </div>
      </div>

      <div className="grid grid-rows-1 grid-flow-col gap-4 px-6 py-4">
        <div className="col-span-8 font-bold text-5xl text-start">30%</div>
        <div className="col-span-1 font-bold text-base text-gray text-start">
          Total Spent
          <p className="text-black text-2xl font-bold text-start">
            RM 26.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChargingCard;
