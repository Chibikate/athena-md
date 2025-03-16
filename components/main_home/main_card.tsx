import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  image: string | StaticImageData;  // Support imported images
  alt: string;
}

const MainCard = ({ title, description, image, alt }: Props) => {
  return (
    <div className="w-60 h-72 bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
      <Image 
        src={image} 
        alt={alt} 
        width={240} 
        height={128} 
        className="w-full h-32 object-cover rounded-md mb-4" 
      />
      <h3 className="text-xl font-bold text-[#165388] mb-2">
        {title}
      </h3>
      <p className="text-[#165388] text-xs">
        {description}
      </p>
    </div>
  );
};

export default MainCard;