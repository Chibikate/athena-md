import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  alt: string;
  bg: boolean;
  large: boolean;
  swap: boolean;
}

const LearningCard = ({
  title,
  description,
  image,
  alt,
  bg,
  large,
  swap,
}: Props) => {
  return (
    <div className={`w-full ${bg ? "bg-white" : "bg-[#f0f8ff]"}`}>
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-12 px-8">
        {swap && (
          <div className="flex justify-center">
            <Image className="max-w-[250px] sm:max-w-[300px]" src={image} alt={alt} height={200} />
          </div>
        )}

        <div className="text-center lg:text-left">
          <p className="font-bold text-3xl text-[#043873] border-b-2 border-blue-500 pb-2 mb-4">
            {title}
          </p>
          <p className="text-[#043873] leading-relaxed">{description}</p>
        </div>

        {!swap && (
          <div className="flex justify-center">
            <Image className="max-w-[250px] sm:max-w-[300px]" src={image} alt={alt} height={200} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningCard;
