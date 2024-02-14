import React from "react";
import Image from "next/image";
import GIF from "@/public/Goal.gif";

const GoalSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-bold text-3xl pt-20 text-[#A46C00]">START AND WIN A TROPHY</p>
      <Image
        className="mt-14"
        alt="Somethings never change"
        src={GIF}
        width={750}
        height={400}
      />
    </div>
  );
};

export default GoalSection;
