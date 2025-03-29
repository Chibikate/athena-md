import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import TimeLogo from "@/public/time_icon.svg";


interface Props {
  image: string | StaticImageData;
  title: string;
  description: string;
  level: string;
  alt: string;
  to: string;
  time: string;
  className?: string;
}

const CourseCard: React.FC<Props> = ({
  image,
  title,
  description,
  level,
  alt,
  to,
  time,
  className = ''
}) => {
  return (
    <div className={`
      bg-white rounded-lg shadow-lg overflow-hidden
      transition-all duration-300
      ${className}
    `}>
      {/* Image Container */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      {/* Content Container */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#165388] mb-3">
          {title}
        </h3>
        
        <p className="text-[#165388] text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex justify-between text-[#165388] text-sm mb-4">
          <span>📚 {level}</span>
          <span>⏱️ {time}</span>
        </div>
        
        <Link 
          href={to} 
          className="block w-full text-center bg-[#165388] text-white py-2 rounded-md 
          hover:bg-[#1a64a3] transition-colors duration-300"
        >
          Explore Lesson
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;