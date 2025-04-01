import React from "react";
import { Noto_Sans_Javanese, Abhaya_Libre } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const javanese = Noto_Sans_Javanese({ subsets: ["javanese"], weight: "400" });

const HeroSection = () => {
  return (
    <div className={`relative min-h-screen max-w-full overflow-hidden ${javanese.className}`}>
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/bgg7.png"
          alt="Background design"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-center min-h-screen z-10 px-6">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl text-center">
          
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#043873]">
            Develop <span className="text-[#151A40]">Your Medical Skills</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#043873] mt-2 sm:mt-3">
            Your Journey Begins Now
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#043873] mt-2 sm:mt-4">
            Explore free courses to learn
          </p>

          {/* Search Bar */}
          {/*<div className="flex flex-col items-center w-full mt-4 sm:mt-6 md:mt-8">
            <div className="flex items-center gap-2 border border-[#043873] rounded-lg px-3 py-2 w-full max-w-md sm:max-w-lg bg-white shadow-md">
              <input
                type="text"
                placeholder="Search now"
                className="flex-1 outline-none bg-transparent text-center text-[#043873] placeholder-[#043873]"
              />
              <FiSearch className="text-[#043873] text-xl cursor-pointer" />
            </div>/}

            {/* Button */}
            <Link href="/main_homepage">
              <button className="mt-4 sm:mt-6 px-5 py-2 sm:py-3 bg-[#043873] text-white text-sm sm:text-base rounded-lg hover:bg-[#0f1330] transition">
                View Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;
