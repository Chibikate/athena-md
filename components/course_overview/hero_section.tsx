import React from "react";
import Image from "next/image";
import Image3 from "@/public/Image3.svg";
import { HeroProps } from "@/data/mandibular/course_data";

const HeroSection = ({ hero }: HeroProps) => {
  const { title, difficulty, duration, language } = hero;

  return (
    <div className="flex flex-col bg-[#EDF5FE] px-4 sm:px-10 lg:px-20 py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image (Hidden on small screens) */}
        <div className="hidden md:block">
          <Image alt="rocket" src={Image3} />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left md:ml-10">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#043873] font-bold">
            Learning Path <br />
            <span className="text-sm sm:text-xl lg:text-2xl">{title}</span>
          </p>
        </div>
      </div>

      {/* Course Details (Responsive) */}
      <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
        <p className="border-2 border-[#043873] bg-[#043873] text-white text-sm p-2 rounded-md">
          Level: {difficulty}
        </p>
        <p className="border-2 border-[#043873] bg-[#043873] text-white text-sm p-2 rounded-md">
          Duration: {duration}
        </p>
        <p className="border-2 border-[#043873] bg-[#043873] text-white text-sm p-2 rounded-md">
          Language: {language}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;