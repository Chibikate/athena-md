import React from "react";
import { Noto_Sans_Javanese, Abhaya_Libre } from "next/font/google";
import Image from "next/image";
import Bg from "@/public/BG.svg";

const javanese = Noto_Sans_Javanese({ subsets: ["javanese"], weight: "400" });
const abhaya = Abhaya_Libre({ subsets: ["latin"], weight: "400" });

const HeroSection = () => {
  return (
    // ** dapat mag flex flex-col ka para mo gana si items-center og justify center//
    <div className={`flex flex-col items-center ${javanese.className} pt-4`}>
      <p className="text-5xl font-bold ">Develop Your Skills with Our Tutorial Website</p>
      <p className="text-4xl font-bold text-[#A46C00]">Your Journey Begins Now</p>
      <p className="text-[#B4B4B4]">Explore free courses to learn</p>
      <Image alt="Background" src={Bg} width={1000} />
    </div>
  );
};

export default HeroSection;
