import React from "react";
import Image from "next/image";
import Image3 from "@/public/Image3.svg";
import mandible from "@/public/mandible.png";
import { HeroProps } from "@/data/course_data";

const HeroSection = ({ hero }: HeroProps) => {
  const { title, difficulty, duration, language } = hero;

  return (
    <div className="flex flex-col sm:pl-40  bg-[#1c1648]">
      <div className="flex flex-row items-left p-10 items-center">
        <Image className="hidden md:block" alt="rocket " src={Image3} />
        <p className="text-2xl sm:text-4xl text-[#ffc248] font-bold p-5">
          Learning Path <br />
          <span className="text-white  text-sm sm:text-3xl">{title}</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row font-bold text-sm ml-64 absolute  sm:pt-56 ">
        <p className="border-2 border-black bg-white  p-1 m-2 hidden md:block ">
          Level: {difficulty}
        </p>
        <p className="border-2 border-black bg-white p-1 m-2  hidden md:block ">
          Duration: {duration} mins
        </p>
        <p className="border-2 border-black bg-white p-1 m-2  hidden md:block">
          Language: {language}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
