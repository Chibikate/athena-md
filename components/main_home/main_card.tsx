import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface MainCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  time: string;
  video: string;
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
  video,
  lesson,
  to,
  className = ''
}) => {
  return (
    <div className={`
      bg-white rounded-lg shadow-lg overflow-hidden
      transition-all duration-300 
      ${className}
    `}>
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#165388] mb-3">
          {title}
        </h3>
        
        <p className="text-[#165388] text-sm mb-4">
          {description}
        </p>
        
        <div className="flex justify-between text-[#165388] text-sm mb-4">
          <span>⏱️ {time}</span>
          <span>🎥 {video}</span>
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