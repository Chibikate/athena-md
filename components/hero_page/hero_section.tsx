import React from "react";
import { Noto_Sans_Javanese, Abhaya_Libre } from "next/font/google";
import Image from "next/image";
import bgg from "@/public/bgg.png";

const javanese = Noto_Sans_Javanese({ subsets: ["javanese"], weight: "400" });
const abhaya = Abhaya_Libre({ subsets: ["latin"], weight: "400" });

const HeroSection = () => {
  return (
    <div className="flex flex-row sm:flex bg-[#1c1648] items-center pl-36 justify-between shadow-lg">
      <div className={`flex flex-col pl-10 ${javanese.className} py-64`}>
        <p className="text-sm sm:text-4xl font-bold text-[#ffffff]">
          Develop Your Skills with <br />
          Our Tutorial Website
        </p>
        <p className="text-sm sm:text-2xl font-bold text-[#ffc248]">
          Your Journey Begins Now
        </p>
        <p className="text-[#b9b9b9] rounded-lg">
          Explore free courses to learn
        </p>
      </div>
      <Image
        className="rounded-full mr-72 shadow-[0_4px_10px_#ffffff] hidden md:block"
        src={bgg}
        width={450}
        alt="background"
      />
    </div>
  );
};

export default HeroSection;
