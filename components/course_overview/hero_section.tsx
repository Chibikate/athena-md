import React from "react";
import Image from "next/image";
import Image3 from "@/public/Image3.svg";
import { HeroProps } from "@/data/mandibular/course_data";

const HeroSection = ({ hero }: HeroProps) => {
  const { title, difficulty, duration, language } = hero;

  return (
    <div className="flex flex-col bg-[#EDF5FE] px-4 sm:px-10 lg:px-40 py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image (Hidden on small screens) */}
        <div className="hidden md:block md:mr-6">
          <Image alt="rocket" src={Image3} />
        </div>

        {/* Centered Text Content */}
        <div className="flex flex-col items-center md:items-start w-full">
          <p className="text-2xl sm:text-4xl text-[#043873] font-bold text-center md:text-left p-5">
            Learning Path <br />
            <span className="text-[#043873] text-sm sm:text-3xl">{title}</span>
          </p>
        </div>
      </div>

      {/* Course Details (Now visible on all devices) */}
      <div className="flex flex-wrap justify-center md:justify-center gap-1 mt-6">
        <p className="border-2 border-[#043873] bg-[#043873] text-white text-sm px-4 py-2 rounded-md">
          Level: {difficulty}
        </p>
        <p className="border-2 border-[#043873] bg-[#043873] text-white text-sm px-4 py-2 rounded-md">
          Duration: {duration}
        </p>
        <p className="border-2 border-[#043873] bg-[#043873] text-white text-sm px-4 py-2 rounded-md">
          Language: {language}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
