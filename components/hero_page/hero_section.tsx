import React from "react";
import { Noto_Sans_Javanese, Abhaya_Libre } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi"; // Import the search icon

const javanese = Noto_Sans_Javanese({ subsets: ["javanese"], weight: "400" });
const abhaya = Abhaya_Libre({ subsets: ["latin"], weight: "400" });

const HeroSection = () => {
  return (
    <div className={`relative h-screen w-screen ${javanese.className}`}>
      {/* Full Background Image */}
      <Image
        src="/bgg7.png" // Replace with the correct path to your design image
        alt="Background design"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Centered Content */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full flex flex-col items-center text-center">
        <p className="text-sm sm:text-4xl font-bold text-[#043873]">
          Develop Your Medical Skills
        </p>
        <p className="text-sm sm:text-2xl font-bold text-[#151A40] mt-2">
          Your Journey Begins Now
        </p>
        <p className="text-[#151A40] rounded-lg mt-2">
          Explore free courses to learn
        </p>

        {/* Search Bar and Buttons */}
        <div className="flex flex-col items-center w-full mt-6">
          <div className="flex items-center gap-2 border border-[#043873] rounded-lg px-2 py-1 focus-within:ring-2 focus-within:ring-[#043873] bg-white shadow-md">
            <input
              type="text"
              placeholder="Search now"
              className="flex-1 pt-[5px] outline-none bg-transparent text-center text-lg w-full"
            />
            {/* Search Icon */}
            <FiSearch className="text-[#043873] text-xl cursor-pointer" />
          </div>
          <Link href="/courses">
            <button className="mt-6 pt-[15px] bg-blue px-5  py-2  bg-[#043873] hover:text-[#ffffff]-900 text-white hover:ring-2 hover:ring-offset-2  hover:ring-offset-blue-300 text-sm rounded-lg hover:bg-[#0f1330]">
              View Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
