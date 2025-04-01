import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  alt: string;
  bg: boolean;
  swap: boolean;
}

const LearningCard = ({ title, description, image, alt, bg, swap }: Props) => {
  return (
    <div className={`w-full ${bg ? "bg-white" : "bg-[#EDF5FE]"}`}>
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-y-6 lg:gap-8 py-12 px-6 md:px-8 lg:px-12">
        {/* Image First if swap is enabled */}
        {swap && (
          <div className="flex justify-center">
            <Image 
              className="max-w-[70%] sm:max-w-[300px] object-contain"
              src={image}
              alt={alt}
              width={300}
              height={300}
            />
          </div>
        )}

        {/* Text Section */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="font-bold text-3xl md:text-4xl text-[#043873] border-b-2 border-blue-500 pb-2 mb-4">
            {title}
          </p>
          <p className="text-[#043873] leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>

        {/* Image Last if swap is disabled */}
        {!swap && (
          <div className="flex justify-center">
            <Image 
              className="max-w-[70%] sm:max-w-[300px] object-contain"
              src={image}
              alt={alt}
              width={300}
              height={300}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningCard;