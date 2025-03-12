import React from "react";
import Image from "next/image";
import Image3 from "@/public/Image3.svg";
import { NewProps } from "@/data/mandible_data";

const NewHeroSection = ({ hero }: NewProps) => {
  const { title, difficulty, duration, language } = hero;

  return (
    <div className="flex flex-col sm:pl-40  bg-[#EDF5FE]">
      <div className="flex flex-row items-left p-10 items-center">
        <Image className="hidden md:block" alt="rocket " src={Image3} />
        <p className="text-2xl sm:text-4xl text-[#043873] font-bold p-5">
          Learning Path <br />
          <span className="text-[#043873]  text-sm sm:text-3xl">{title}</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row font-bold text-sm text-white ml-64 absolute  sm:pt-56 ">
        <p className="border-2 border-[#043873] bg-[#043873]  p-1 m-2 hidden md:block ">
          Level: {difficulty}
        </p>
        <p className="border-2 border-[#043873] bg-[#043873] p-1 m-2  hidden md:block ">
          Duration: {duration}
        </p>
        <p className="border-2 border-[#043873] bg-[#043873] p-1 m-2  hidden md:block">
          Language: {language}
        </p>
      </div>
    </div>
  );
};

export default NewHeroSection;