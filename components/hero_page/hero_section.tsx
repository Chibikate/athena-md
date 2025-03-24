import React from "react";
import { Noto_Sans_Javanese, Abhaya_Libre } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const javanese = Noto_Sans_Javanese({ subsets: ["javanese"], weight: "400" });
const abhaya = Abhaya_Libre({ subsets: ["latin"], weight: "400" });

const HeroSection = () => {
  return (
    <div className={`relative h-screen w-full overflow-hidden ${javanese.className}`}>
      {/* Background Image - First instance only (removed duplicate) */}
      <div className="absolute inset-0">
        <Image
          src="/bgg7.png"
          alt="Background design"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
      </div>

      {/* Content Container - Improved positioning for all devices */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl px-4 sm:px-6 flex flex-col items-center text-center">
          {/* Responsive Typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#043873]">
            Develop <span className="text-[#151A40]">Your Medical Skills</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#043873] mt-2 sm:mt-3">
            Your Journey Begins Now
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-[#043873] mt-2 sm:mt-4">
            Explore free courses to learn
          </p>

          {/* Search Bar with Responsive Width */}
          <div className="flex flex-col items-center w-full mt-4 sm:mt-6 md:mt-8">
            <div className="flex items-center gap-2 border border-[#043873] rounded-lg px-3 py-2 w-full max-w-xs sm:max-w-sm focus-within:ring-2 focus-within:ring-[#043873] bg-white shadow-md">
              <input
                type="text"
                placeholder="Search now"
                className="flex-1 outline-none bg-transparent text-center text-sm sm:text-base w-full"
              />
              <FiSearch className="text-[#043873] text-xl cursor-pointer" />
            </div>
            
            {/* Responsive Button */}
            <Link href="main_homepage">
              <button className="mt-4 sm:mt-6 px-5 py-2 sm:py-3 bg-[#043873] text-white text-sm sm:text-base rounded-lg hover:bg-[#0f1330] transition-colors duration-300 hover:ring-2 hover:ring-offset-2 hover:ring-offset-blue-300 w-full max-w-xs sm:max-w-sm">
                View Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;