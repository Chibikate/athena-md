import React from "react";
import Image from "next/image";
import Image3 from "@/public/Image3.svg";
import mandible from "@/public/mandible.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col pl-40  bg-[#EBD3B7]">
      <div className="flex flex-row items-left p-10 items-center">
        <Image alt="rocket" src={Image3} />
        <p className="text-4xl text-[#A46C00] font-bold p-5">
          Learning Path <br />
          <span className="text-black text-3xl">VSP for Mandibular Reconstruction</span>
        </p>
      </div>
      <div className="flex flex-row font-bold text-sm ml-64 absolute pt-56">
        <p className="border-2 border-black bg-white  p-1 m-2">
          Level: Difficult
        </p>
        <p className="border-2 border-black bg-white p-1 m-2 ">
          Duration: 1hr & 40 mins
        </p>
        <p className="border-2 border-black bg-white p-1 m-2">
          Language: English
        </p>
        <p className="border-2 border-black bg-white p-1 m-2">
          Quizzes: 10 items
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
