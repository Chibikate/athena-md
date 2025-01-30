import React from "react";
import { Noto_Sans_Javanese, Abhaya_Libre } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi"; // Import the search icon

const javanese = Noto_Sans_Javanese({ subsets: ["javanese"], weight: "400" });
const abhaya = Abhaya_Libre({ subsets: ["latin"], weight: "400" });

const HeroSection = () => {
  return (
    <div className={`relative h-screen bg-[#D0E4F2] ${javanese.className}`}>
      {/* Background Design */}
      <div className="absolute inset-0">
        <Image
          src="/bgg5.png" // Replace with the correct path to your design image
          alt="Background design"
          layout="fill"
          objectFit="cover"
          className="opacity-10 pointer-events-none"
        />
      </div>

      {/* Centered Content */}
      <div className="absolute top-1/4 transform -translate-y-1/4 w-full flex flex-col items-center text-center">
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
          <div className="flex items-center gap-2 border border-[#043873]-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[#043873]">
            <input
              type="text"
              placeholder="Search for courses"
              className="flex-1 outline-none"
            />
            {/* Search Icon */}
            <FiSearch className="text-[#043873] text-xl cursor-pointer" />
          </div>
          <Link href="/courses">
            <button className="mt-6 px-6 py-3 bg-[#151A40] text-white font-bold rounded-lg hover:bg-[#0f1330]">
              View Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
