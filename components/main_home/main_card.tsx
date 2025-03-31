import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface MainCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  alt: string;
  time: string;
  lesson: string;
  to: string;
  className?: string;
}

const MainCard: React.FC<MainCardProps> = ({
  title,
  description,
  image,
  alt,
  time,
  lesson,
  to,
  className = ''
}) => {
  return (
    <div className="w-60 h-72 bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center">
       <Image 
         src={image} 
         alt={alt} 
         width={240} 
         height={128} 
         className="w-full h-32 object-cover rounded-md mb-4" 
       />
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#165388] mb-3">
          {title}
        </h3>
        
        <p className="text-[#165388] text-sm mb-4">
          {description}
        </p>
        
        <div className="flex justify-between text-[#165388] text-sm mb-4">
          <span>⏱️ {time}</span>
          <span>📚 {lesson}</span>
        </div>
        
        <Link 
          href={to} 
          className="block w-full text-center bg-[#165388] text-white py-2 rounded-md hover:bg-[#1a64a3] transition-colors duration-300"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

export default MainCard;