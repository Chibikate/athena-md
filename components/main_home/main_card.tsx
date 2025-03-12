import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const MainCard = ({ title, description, image, alt }: Props) => {
  return (
    <div className="w-52 h-72 bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
      <img src={image} alt={alt} className="w-full h-32 object-cover rounded-md mb-4" />
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
